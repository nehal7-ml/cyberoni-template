import { create, createBlogDTO } from "@/data/crud/blog";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        if (req.method === "GET") {
            res.status(400).json({ error: 'Get is not Allowed on this path' })
        }
        if (req.method === "POST") {
            const newBlog = req.body as createBlogDTO;
            const blog = await create(newBlog, prisma)
            res.status(200).json({ message: 'Blog Added', data: blog })
        }
        if (req.method === "PUT") { 
            res.status(400).json({ error: 'PUT is not Allowed on this path' })
        }
        if (req.method === "DELETE") {
            res.status(400).json({ error: 'Delete is not Allowed on this path' })
        }
        if (req.method == 'OPTIONS') return res.status(200).end();
    
    } catch (error ) {
        res.status(500).json({error: (error as Error).message})
        console.log(error)

    }

}