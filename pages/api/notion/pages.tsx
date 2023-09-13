import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import client from '@sendgrid/client'
import axios from "axios";
import { CreatePageParams } from "@/context/synapse/crm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const newRecord = req.body.properties
            const newRecordRes = await addToMarketingCrm({ newRecord });
            res.status(200).json({ data: newRecordRes })
            return
        }
        else {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error })

    }
}




const notionApiKey = process.env.notion_pub_key!;
const marketing_crm_contacts_database_id =
    process.env.marketing_crm_contacts_database_id!;

async function addToMarketingCrm({
    newRecord,
}: CreatePageParams): Promise<void> {
    const headers = {
        "Notion-Version": "2021-08-16",
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
    };
    const config = {
        headers,
    };
    const response = await axios.post(
        `https://api.notion.com/v1/pages`,
        {
            parent: {
                database_id: marketing_crm_contacts_database_id,
            },
            properties: newRecord,
        },
        config,
    );
    return response.data;
}


export async function addToSendgrid({ newRecord }: CreatePageParams) {


    client.setApiKey(process.env.SENDGRID_API_KEY || "");

    const data = {
        contacts: [
            {
                "email": newRecord["Email Address"],
                "custom_fields": {
                    ...newRecord
                }
            }
        ]
    }

    const request = {
        url: `/v3/marketing/contacts`,
        method: 'PUT' as const,
        body: data
    }
    const res = await client.request(request)
    return res[0].statusCode

}



