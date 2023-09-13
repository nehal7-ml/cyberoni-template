import { createBlogDTO, read, remove, update } from "@/data/crud/blog";
import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "GET") {
        const blogId = req.query.id as string;
        const blog = await read(blogId, prisma)
        res.status(200).json({ message: "found", data: blog })
    }
    if (req.method === "PUT") {
        const blogId = req.query.id as string;
        const blog = req.body as createBlogDTO
        await update(blogId, blog, prisma)
        res.status(200).json({ message: 'Blog updated' })
    }
    if (req.method === "DELETE") {
        const blogId = req.query.id as string;
        await remove(blogId, prisma);
        res.status(200).json({ message: 'Delete success' })
    }


}