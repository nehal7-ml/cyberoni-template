import { Event, EventStatus, PrismaClient, User } from "@prisma/client";
import { createImageDTO } from "./images";


export type createEventDTO = {
    name: string;
    date: Date;
    location: string;
    description: string;
    image?: createImageDTO;
    eventLink: string;
    status: EventStatus;
    isVirtual: boolean;
}

async function create(event: createEventDTO, prismaClient: PrismaClient) {
    const events = prismaClient.event;
    let createdevent = await events.create({ data: { ...event, image: { create: event.image } } });
    return createdevent


}

async function update(eventId: string, event: createEventDTO, prismaClient: PrismaClient) {
    const events = prismaClient.event;
    const updatedEvent = await events.update({
        where: { id: eventId },
        data: {
            ...event,
            image: { update: event.image }
        }
    })
    return updatedEvent
}
async function remove(eventId: string, prismaClient: PrismaClient) {
    const events = prismaClient.event;
    const existingevent = await events.findUnique({ where: { id: eventId } })
    if (existingevent) {
        await events.delete({ where: { id: eventId } })
    }
}
async function read(eventId: string, prismaClient: PrismaClient) {
    const events = prismaClient.event;
    const existingevent = await events.findUnique({ where: { id: eventId } })
    if (existingevent) return existingevent;

}

async function getAll(page: number, pageSize: number, prismaClient: PrismaClient) {
    const events = prismaClient.event;

    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50) throw new Error('page size must be 10, 30 or 50')

    let allEvents = await events.findMany({
        skip: (page - 1) * pageSize, take: pageSize,
        where: {
        },
        include: {
            // reviews: true,
     
        }
    })

    const totalCount = await events.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    return { records:allEvents, currentPage: page, totalPages, pageSize }

}

export { create, update, remove, read, getAll }