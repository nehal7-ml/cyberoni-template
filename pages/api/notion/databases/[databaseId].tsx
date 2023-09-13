import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from 'next/router';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        if (req.method === 'GET') {
            const databaseId = req.query.databaseId as string;
            const databases = await getDatabase({ databaseId });
            res.status(200).json({ data:databases })
            return
        }
        else {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return

        }

    } catch (error) {
        
        res.status(500).json({ error })

    }
}


const notionApiKey = process.env.notion_pub_key!;
const marketing_crm_contacts_database_id =
    process.env.marketing_crm_contacts_database_id!;

export async function getDatabase({
    databaseId,
}: {
    databaseId: string;
}): Promise<any> {
    const headers = {
        "Notion-Version": "2021-08-16",
        Authorization: `Bearer ${notionApiKey}`,
    };

    const response = await axios.get(
        `https://api.notion.com/v1/databases/${databaseId}`,
        { headers },
    );
    return response.data;
}
