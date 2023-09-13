import { create, createUserDTO } from "@/data/crud/user";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
     if (req.method === "GET") {
         return res.status(405).json({ error: 'Get is not Allowed on this path' })
     }
     if (req.method === "POST") {
         const user = req.body as createUserDTO;
         const updatedUser = await create(user, prisma);
         return res.status(200).send({ message: "Creates User", data: updatedUser });
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