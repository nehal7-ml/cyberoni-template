import { Review, PrismaClient, ReviewType } from "@prisma/client";
import { createImageDTO } from "./images";
import { connectOrCreateObject, createTagDTO } from "./tags";


export type createReviewDTO = {
    name: string;
    image: createImageDTO;
    title: string;
    content: string;
    link: string;
    rating: number;
    verifiedCustomer: boolean;
    reviewType: ReviewType;
    productId?: string;
    serviceId?: string;
    userId: string;
    tags?: createTagDTO[];
}

async function create(review: createReviewDTO, prismaClient: PrismaClient) {
    const reviews = prismaClient.review;
    let createdreview = await reviews.create({
        data: {
            name: review.name,
            image: { create: review.image },
            tags: { connectOrCreate: connectOrCreateObject(review.tags || []) },
            title: review.title,
            content: review.content,
            link: review.link,
            rating: review.rating,
            verifiedCustomer: review.verifiedCustomer,
            reviewType: review.reviewType,
            user: { connect: { id: review.userId } },
            product: review.productId ? { connect: { id: review.productId } } : {}
        }
    });
    return createdreview
}

async function update(reviewId: string, review: createReviewDTO, prismaClient: PrismaClient) {
    const reviews = prismaClient.review;
    let createdreview = await reviews.update({
        where: { id: reviewId },
        data: {
            name: review.name,
            image: { create: review.image },
            tags: { connectOrCreate: connectOrCreateObject(review.tags || []) },
            title: review.title,
            content: review.content,
            link: review.link,
            rating: review.rating,
            verifiedCustomer: review.verifiedCustomer,
            reviewType: review.reviewType,
            user: { connect: { id: review.userId } },
            product: review.productId ? { connect: { id: review.productId } } : {}
        }
    });
    return createdreview

}
async function remove(reviewId: string, prismaClient: PrismaClient) {
    const reviews = prismaClient.review;
    const existingreview = await reviews.findUnique({ where: { id: reviewId } })
    if (existingreview) {
        await reviews.delete({ where: { id: reviewId } })
    }
}
async function read(reviewId: string, prismaClient: PrismaClient) {
    const reviews = prismaClient.review;
    const existingreview = await reviews.findUnique({ where: { id: reviewId } })
    if (existingreview) return existingreview;

}

async function getByProductId(productId: string, page: number, pageSize: number, prismaClient: PrismaClient) {
    const reviews = prismaClient.review;
    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50) throw new Error('page size must be 10, 30 or 50')
    const existingreview = await reviews.findMany({
        where: { productId: productId },
        skip: (page - 1) * pageSize,
        take: pageSize,
    })
    if (existingreview) return existingreview;
}

async function getByServiceId(serviceId: string, page: number, pageSize: number, prismaClient: PrismaClient) {
    const reviews = prismaClient.review;
    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50) throw new Error('page size must be 10, 30 or 50')
    const existingreview = await reviews.findMany({
        where: { serviceId: serviceId },
        skip: (page - 1) * pageSize,
        take: pageSize,
    })
    if (existingreview) return existingreview;
}



export { create, update, remove, read, getByProductId, getByServiceId }