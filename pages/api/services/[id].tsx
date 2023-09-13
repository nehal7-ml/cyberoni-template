import { createServiceDTO, read, remove, update } from "@/data/crud/service";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const serviceId = req.query.id as string;

    if (req.method === "GET") {
        const service = await read(serviceId, prisma)
        res.status(200).json({ data: service })
    }
    if (req.method === "PUT") {
        const service = req.body as createServiceDTO
        await update(serviceId, service, prisma)
        res.status(200).json({ message: 'Service updated' })
    }
    if (req.method === "DELETE") {
        await remove(serviceId, prisma)
        res.status(200).json({ message: 'Delete Sucess' })
    }

}