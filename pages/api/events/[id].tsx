import { createEventDTO, read, remove, update } from "@/data/crud/event";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const eventId = req.query.id as string;

    if (req.method === "GET") {
        const event = await read(eventId, prisma)
        res.status(200).json({ data: event })
    }
    if (req.method === "PATCH") {
        const event = req.body as createEventDTO
        await update(eventId, event, prisma)
        res.status(200).json({ name: 'update Success' })
    }
    if (req.method === "DELETE") {
        await remove(eventId, prisma)
        res.status(200).json({ name: 'Delete Success' })
    }


}