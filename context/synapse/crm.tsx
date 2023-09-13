import axios from "axios";



const notionApiKey = process.env.notion_pub_key!;
const marketing_crm_contacts_database_id =
  process.env.marketing_crm_contacts_database_id!;

export interface NewRecordType {
  "Email Address": { email: string };
  Company?: {
    has_more: boolean;
    id: string;
    type: string;
    relation: [{ id: string }];
  };
  "Converted to Opportunity": { checkbox: boolean };
  Owner: { id: string; type: string; people: [] };
  Title?: {
    id: string;
    rich_text: { text: { content: string } }[];
    type: string;
  };
  Name?: {
    id: string;
    title: { text: { content: string } }[];
    type: "title"
  };
  Message: {
    id: string;
    rich_text: { text: { content: string } }[];
    type: string;
  };
}

export interface CreatePageParams {
  newRecord: NewRecordType;
}

export async function addToMarketingCrm({
  newRecord,
}: CreatePageParams): Promise<void> {
  const headers = {
    "Notion-Version": "2021-08-16",
    "Content-Type": "application/json",
  };

  const response = await axios.post(
    `/api/notion/pages`,
    {
      parent: {
        database_id: marketing_crm_contacts_database_id,
      },
      properties: newRecord,
    },
  );
  return response.data;
}

export async function getDatabase({
  databaseId,
}: {
  databaseId: string;
}): Promise<any> {
  const headers = {
    "Notion-Version": "2021-08-16",
  "Access-Control-Allow-Origin":"*",
  };

  const response = await axios.get(
    `/api/notion/databases`,
    { headers },
  );

  return response.data;
}
