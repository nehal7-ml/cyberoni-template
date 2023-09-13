import { sample_data as productData } from "../sample_data/sample_products";
import { sample_data as reviewData, reviewsType } from "../sample_data/sample_reviews";
import { sample_data as blogData } from "../sample_data/sample_blog";
import { sample_data as serviceData } from "../sample_data/sample_services";
import { blogQuillDeltas } from "../sample_data/blogs_quil_delta";
import { PrismaClient, Product, Service, Blog, Supplier, Tag, Review, ReviewType, User } from "@prisma/client";
import { serviceDescription } from "../sample_data/service_quill_delta";
import { create as createReview } from "../crud/review";
import { create as createService } from "../crud/service";
import { createSubServiceDTO } from "../crud/subService";
import { createTagDTO } from "../crud/tags";
import { create as createProduct } from "../crud/product";
import { createSupplierDTO } from "../crud/supplier";
import { create as createBlog } from "../crud/blog";
const prisma = new PrismaClient( {
    errorFormat: "pretty"
});

async function pushInitialProducts() {
    const products = prisma.product;
    const newProducts = []


    for (let index = 1; index < 3; index++) {
        const element = productData[index];
        const suppliers: createSupplierDTO[] = []
        const tags: { name: string; }[] = []
        element.suppliers.forEach(supplier => {
            const convertedSupplier = {
                baseShippingPrice: supplier.base_shipping_price === 'Free' ? 0 : supplier.base_shipping_price,
                height: supplier.dimensions?.height || 0,
                width: supplier.dimensions?.width || 0,
                length: supplier.dimensions?.length || 0,
                weight: supplier.dimensions?.weight || 0,
                supplierName: supplier.supplierName,
                supplierStatus: supplier.supplierStatus || undefined,
                shippingWeight: supplier.shippingWeight || undefined,
                listPrice: supplier.listPrice || undefined,
                salePrice: supplier.salePrice || undefined,
                availability: supplier.availability || undefined,
                supplierWrittenComments: supplier.supplier_written_comments || undefined,
                supplierUrl: supplier.supplierUrl,
                supplierEmail: supplier.supplierEmail || undefined,
                supplierWhatsApp: supplier.supplierWhatsApp || undefined,
            }

            suppliers.push(convertedSupplier);
        });

        await createProduct({
            description: element.description,
            category: element.category,
            name: element.name,
            displayPrice: element.display_price,
            ratings: element.ratings || 0,
            sku: element.sku,
            inventory: element.inventory,
            profitMargin: element.profit_margin,
            price: element.price,
            productBreakdown: element.product_breakdown as string,
            shippingReturnPolicy: element.shipping_return_policy,
            status: element.status,
            subcategory: element.subcategory as string,
            suppliers: suppliers,
            tags: element.tags.map((value) => { return { name: value } }),
            images: element.images.map((value) => { return { src: value.src, name: value.alt } })


        }, prisma)
    }




}

async function pushInitialBlogs() {
    const blogs = prisma.blog;
    const users = prisma.user;
    const admin = await users.findFirst({ where: { role: "ADMIN" } }) as User;

    blogData.forEach(async (blog, index) => {

        const images: { src: string; }[] = [];
        const tags: { name: string; }[] = [];
        blog.tags.forEach(tag => {
            tags.push({
                name: tag
            })
        })

        blog.images.forEach((image) => {
            images.push({
                src: image
            })
        })
        await createBlog({
            content: JSON.stringify( blogQuillDeltas[index]),
            date: new Date(blog.date),
            description: blog.description,
            featured: blog.featured || false,
            subTitle: blog.sub_title,
            template: blog.template,
            title: blog.title,
            author: admin,
            images: images,
            tags: tags,
        } , prisma)
    })

}


async function pushInitialServices() {
    const services = prisma.service;
    const users = prisma.user;
    const admin = await users.findFirst({ where: { role: "ADMIN" } });


    for (const id in serviceData) {
        const newSubSerivces: createSubServiceDTO[] = [];
        // console.log(serviceData[id]);
        serviceData[id].sub_projects.forEach(subService => {
            newSubSerivces.push({
                title: subService.title,
                pricingModel: subService.service_pricing.pricing_model,
                discounts: subService.service_pricing.discounts.join(','),
                serviceDeliverables: subService.service_deliverables.join(','),
                serviceUsageScore: subService.service_usage_score,
                description: subService.description,
                department: subService.department,
                estimated_hours_times_fifty_percent: subService.estimated_hours_times_fifty_percent,
                estimated_hours_times_one_hundred_percent: subService.estimated_hours_times_one_hundred_percent,
                overheadCost: subService.overhead_cost,
                complexity: subService.complexity,
                skillLevel: subService.skill_level,
                tags: subService.tags.map((value) => { return { name: value } }),
                image: { src: subService.imageUrl }
            })
        });

        await createService({
            title: serviceData[id].more_details.title,
            previewContent: serviceData[id].preview.content,
            description: JSON.stringify(serviceData),
            hourlyRate: serviceData[id].more_details.hourly_rate,
            valueBrought: serviceData[id].more_details.value_brought,
            skillsUsed: serviceData[id].more_details.skills_used,
            image: {
                name: undefined,
                src: serviceData[id].more_details.imageUrl
            },
            subServices: newSubSerivces,
            tags: serviceData[id].tags.map((value) => { return { name: value } }),
        }, prisma)
    }


}

async function pushInitialReviews() {
    const users = prisma.user;
    const admin = await users.findFirst({ where: { role: "ADMIN" } });

    reviewData.reviews.forEach(async (review) => {
        let tags: { name: string; }[] = []
        review.tags.forEach(tag => {
            tags.push({ name: tag })
        });
        await createReview({
            name: review.name,
            image: { src: review.image },
            tags: tags,
            title: review.title,
            content: review.content,
            link: review.link,
            rating: review.rating,
            verifiedCustomer: review.verified_customer,
            reviewType: ReviewType.MAIN,
            userId: admin?.id as string
        }, prisma)
    })

}

async function createAdmin() {
    const users = prisma.user

    const admin = await users.findMany({ where: { role: "ADMIN" } });

    // console.log(admin);
    if (admin.length < 1) {

        await users.create({
            data: {
                role: "ADMIN",
                email: "admin@cybertechshop.com",
                firstName: "tyrique",
                lastName: 'daniels',
                emailVerified: true
            }
        })

    } else return
}

//
// pushInitialProducts() 
async function runMigration() {
    await createAdmin();
    //  await pushInitialReviews();
    // await pushInitialBlogs();
    //await pushInitialProducts();
    // await pushInitialServices();
}








runMigration()