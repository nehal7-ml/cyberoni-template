import { create, createApiCredDTO, verifyToken } from "@/data/crud/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        if (req.method === "GET") {
            const token = req.query.token as string;
            const user = await verifyToken(token);
            return res.status(200).json({ user })
        }
        if (req.method === "POST") {
            return res.status(405).json({ error: 'Get is not Allowed on this path' })

        }
        if (req.method === "PUT") {
            return res.status(405).json({ error: 'PUT is not Allowed on this path' })
        }
        if (req.method === "DELETE") {
            return res.status(405).json({ error: 'Delete is not Allowed on this path' })
        }
        if (req.method == 'OPTIONS') return res.status(200).end();
    } catch (error) {
        console.log(error)
    }


}