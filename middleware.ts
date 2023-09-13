import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from '@auth0/nextjs-auth0/edge';
import jwt from 'jsonwebtoken'
import { Session } from "@auth0/nextjs-auth0";
import { prisma } from '@/prisma/prismaClient'
import { Role, User } from "@prisma/client";
import { ApiError } from "next/dist/server/api-utils";
import { read as getUser } from "./data/crud/user";
import { read as getBlog } from "./data/crud/blog";
import { verifyToken } from "./data/crud/credentials";
export const config = {
  matcher: ['/api/((?!auth).*)'],

}


type sessionUser = {
  id: string;
  email: string;
  role: Role
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';


/**
 *  olny add conditions to provide access, reeturn false as default, unless 
 *  conditions  are specified to grant access to the resource
 * @param user 
 * @param path 
 * @param method 
 * @returns boolean
 */


async function verifyAccess(user: sessionUser, path: string, method: HttpMethod): Promise<boolean> {

  if (user.role === Role.SUPERUSER) return true;
  if (user.role === Role.ADMIN) return true;

  if (user.role === Role.USER) {


    if (path.match(/^\/api\/products\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) && method === 'GET') {
      return true;
    }

    if (path.match(/^\/api\/products\/all/)) {
      return true;
    }
    if (path.match(/^\/api\/users\/all/)) {
      return true;
    }

    if (path.match(/^\/api\/users\/[a-z0-9]{25}$/) && method === 'GET') {
      const userId = path.split('/')[3];
      if (userId === user.id) return true

    }
    if (path.match(/^\/api\/users\/[a-z0-9]{25}$/) && method === 'PUT') {
      const userId = path.split('/')[3];
      if (userId === user.id) return true

    }
    if (path.match(/^\/api\/services\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) && method === 'GET') {
      return true;
    }
    if (path.match(/^\/api\/services\/all/)) {
      return true;
    }
    if (path.match(/^\/api\/prompts\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) && method === 'GET') {
      return true;
    }
    if (path.match(/^\/api\/prompts\/all/)) {
      return true;
    }
    if (path.match(/^\/api\/prompts\/add/)) {
      return true;
    }
    if (path.match(/^\/api\/apicredentials\/create$/)) {
      return true;
    }

    if (path.match(/^\/api\/blogs\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
      if (method === 'GET') return true;

      if (method === 'PUT' || method === 'DELETE') {
        const blogId = path.split('/')[3];
        const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/blogs/${blogId}`);
        const blogData = await res.json();
        if (blogData.data?.author.email === user.email) return true;
        else return false;
      }

      if (method === 'POST') throw new ApiError(405, "Method not allowed");

    }
    if (path.match(/^\/api\/blogs\/all/)) {
      return true;
    }

    return false;
  }

  return false
}
export default async function handler(req: NextRequest) {
  // Add your middleware logic here
  // You can modify req and res before forwarding to the next handler
  const res = NextResponse;

  if (req.nextUrl.pathname.match(/^\/api\/apicredentials\/create$/)) {
    return res.next();
  }
  try {

    if (req.credentials == 'same-origin') {

      const auth = req.headers.get('Authorization')?.split(' ')[1];
      const session = await getSession(req, new NextResponse()) as Session;

      if (session) {
        const user = session.user;
        const role = user.role as Role;
        const email = user.email;
        const id = user.userId;
        console.log(user)
        const access = await verifyAccess({ email, role, id }, req.nextUrl.pathname, req.method as HttpMethod)
        if (!access) throw new ApiError(403, "Access denied: insufficient permissions");
      }



      if (auth) {
        const verified = await fetch(`${process.env.AUTH0_BASE_URL}/api/credentials/verify/${auth}`);

        if (verified.status !== 200) throw new ApiError(401, "Unauthorized token")
        else {
          const user = (await verified.json()).user as User
          console.log("verified user:", user)
          const access = await verifyAccess({ email: user.email, id: user.id, role: user.role }, req.nextUrl.pathname, req.method as HttpMethod)
          if (!access) throw new ApiError(403, "Access denied: insufficient permissions");

        }
      }


      return res.next()
    }

  } catch (error) {
    const middlewareError = error as ApiError;
    console.log(middlewareError);
    return res.json({ error: middlewareError.message }, { status: middlewareError.statusCode })
  }
}
