import { AmazonProduct } from "../sample_product_data/amazon/sample_amazon_product_data";
import { CJDropshippingProduct, example_cj_dropshipping_products } from "../sample_product_data/cj_dropshipping/sample_cj_dropshipping_data";
import { Variants,variant1,variant2 } from "./sample_variants";

export type ScoredProducts = {
  product: Product;
  score: number;
}[];

export type SupplierPayment = {
  supplierPayPal?: string;
  supplierAlibabaEscrow?: string;
  supplierFreelancerEscrow?: string;
};

export type Supplier = {
  id: string;
  base_shipping_price: number | "Free";
  supplierName: string;
  supplierStatus?: string;
  dimensions?: {
    height?: number;
    width?: number;
    length?: number;
    weight?: number;
  };
  shippingWeight?: number;
  listPrice?: number;
  salePrice?: number;
  availability?: string;
  reviews?: {
    totalReviews?: number;
    averageRating?: number;
    numberRatings?: number;
  };
  supplier_written_comments?: string;
  supplierUrl: string;
  supplierEmail?: string;
  supplierWhatsApp?: string;
  supplier_payment?: SupplierPayment;
};


export type SalesTax = {
  set?: number;
  percent: number;
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  status: string;
  shipped?: boolean;
  variants?: Variants;
  ratings?: number;
  inventory: number;
  product_breakdown?: string;
  shipping_return_policy: string;
  description: string;
  tags: string[];
  images: Image[];
  price: number;
  sales_tax?: SalesTax;
  profit_margin: number;
  display_price: number;
  category: string;
  subcategory?: string;
  suppliers: Supplier[];
  amazon?: AmazonProduct[];
  cj_dropshipping?: CJDropshippingProduct;
  sales_prompt: { output: string; prompt: string };
};


export type productType = {
  [id: string]: Product;
};

export type productArrType = Product[]



type Image = {
  src: string;
  alt: string;
}

const example_images: Image[] = [
  {
    src: 'https://via.placeholder.com/500x500',
    alt: 'Placeholder image 1',
  },
  {
    src: 'https://via.placeholder.com/500x500',
    alt: 'Placeholder image 2',
  },
  {
    src: 'https://via.placeholder.com/500x500',
    alt: 'Placeholder image 3',
  },
  {
    src: 'https://via.placeholder.com/500x500',
    alt: 'Placeholder image 4',
  },
];

export type CartItem = {
  quantity: number;
  selected_variant?: Variants;
  product: Product;
}


export const sampleCartItem: CartItem = {
  quantity: 2,
  selected_variant: [variant1], // Replace with the desired variant from the Variants array
  product: {
    id: "1",
    sku: "ABC123",
    name: "Sample Product",
    status: "active",
    shipped: true,
    variants: [variant1, variant2], // Replace with the desired variants for the product
    ratings: 4,
    inventory: 10,
    shipping_return_policy: "30-day return policy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["tag1", "tag2", "tag3"],
    images: example_images, // Replace with the desired images for the product
    price: 19.99,
    profit_margin: 0.2,
    display_price: 24.99,
    category: "Electronics",
    suppliers: [
      {
        id: "1",
        supplierName: "Supplier 1",
        supplierUrl: "https://www.supplier1.com",
        base_shipping_price: "Free",

      },
      {
        id: "2",
        supplierName: "Supplier 2",
        supplierUrl: "https://www.supplier2.com",
        base_shipping_price: "Free",

      },
    ],
    sales_prompt: {
      output: "Buy now and save!",
      prompt: "Limited time offer",
    },
  },
};

export const sample_data: productType = {
  "1": {
    id: "1",
    name: "Flipper Zero",
    sku: "dsa343#",
    status: "active",
    shipped: false,
    variants: [variant2],
    inventory: 50,
    description:
      "Flipper Zero is a portable multi-tool for pen-testers and geeks in a toy-like body. It loves researching digital stuff like radio protocols, access control systems, hardware, and more. It's fully open-source and customizable, so you can extend it in whatever way you like.",
    tags: ["white-hat-hacking", "penetration testing"],
    images: [{ src: "https://res.cloudinary.com/djao481zq/image/upload/v1684700785/CyberOni/Assets/Products/Flipper_Zero/mau5cqhuagpfhfi5gbxo.webp", alt: "flipper zero " },{ src:"https://res.cloudinary.com/djao481zq/image/upload/v1684700785/CyberOni/Assets/Products/Flipper_Zero/nstuedgtx4mwsokvk8og.avif", alt:"flipper zero"},{ src: "https://res.cloudinary.com/djao481zq/image/upload/v1684700785/CyberOni/Assets/Products/Flipper_Zero/nstuedgtx4mwsokvk8og.avif", alt: "flipper zero" }, ],
    price: 169,
    profit_margin: 0.2,
    display_price: 59.99,
    category: "Electronics",
    shipping_return_policy: `Return policy for international individual customers is 30 days for defective items. EU B2C customers are protected with EU Consumer Laws, including the right to return within 14 days of purchase. It is important to note that to be eligible for a return, the item must be in the same condition as received including good packaging. Any damage, even superficial, will prevent the company from processing a refund or exchange.

If you have any issues with your Flipper Zero, it is best to contact customer support prior to returning the item. Always consider using a trackable shipping service or purchasing shipping insurance. Additionally, return shipping costs are non-refundable, and any local taxes, duties, and VAT will be subject to the laws and regulations of each individual country.`,
    subcategory: "Hardware",
    suppliers: [
      {
        id: "Flipper",
        supplierName: "Flipper Direct",
        dimensions: {
          height: 2.2,
          width: 1.7,
          length: 1.1,
          weight: 0.2,
        },
        base_shipping_price: "Free",

        shippingWeight: 8,
        listPrice: 59.99,
        salePrice: 49.99,
        availability: "In stock",
        supplierUrl: "https://shop.flipperzero.one/",
        supplier_payment: {
          supplierPayPal: "paypal@example.com",
        },
      },
      {
        id: "supplier2",
        supplierName: "Tech World",
        supplierEmail: "techworld@example.com",
        supplierUrl: "https://example.com/supplier2",
        supplier_payment: {
          supplierFreelancerEscrow: "techworld@example.com",
        },
        base_shipping_price: "Free",

      },
    ],

    sales_prompt: {
      output:
        "The ENACFIRE F1 wireless earbuds are a great choice for anyone looking for high-quality sound and a comfortable fit. With CVC 8.0 noise cancellation technology and apt-X codec, you can enjoy crystal clear sound and deep bass. Order now and get free shipping!",
      prompt:
        "Ready to experience crystal clear sound with the ENACFIRE F1 wireless earbuds?",
    },
  },
  "2": {
    id: "2",
    name: "Creality Ender-3 S1 Pro 3D Printer Ender-3 S1 Upgrade with 300°C High-Temperature Nozzles ",
    sku: "cr-en-3s1556#",
    status: "active",
    shipped: false,
    inventory: 50,
    description:
      `🏆【300°C High-temp Nozzle】:The brand new nozzle made of brass can stand up to 300°C printing temperature, and it is compatible with multiple filaments, such as PLA, ABS, PVA, Wood, TPU, PETG, and PA, providing more possibilities for creation.
🏆【Spring Steel PEI Magnetic Build Plate】:Ender-3 S1 Pro has used the spring steel PEI magnetic build plate, which has good adhesion to the printed model and enables fast heating up of the heat bed. The build plates is not only durable but also flexible. Once the printing completes, users can remove the printed mdel effortlessly with just a slight bend.
🏆【4.3-Inch Touch Screen & LED Light】:The 4.3-inch touch screen, supporting 9 languages, offers efficient UI interaction and is easy to use. It will dim out automatically for energy-saving if there is no action for 3 minutes. The equipped LED light enables comprehensive light fill, with which users can observe the printing details even in a dark environment.
🏆【"Sprite" Full-metal Dual-gear Direct Extruder】:The "Sprite" full-metal dual-gear direct extruder with an extrusion force of 80N ensures smooth feeding when printing with different filaments, especially the flexible TPU.
🏆【CR Touch Automatic Leveling】:Equipped qith CR Touch, the 16-point automatic leveling can complete quickly with compensation for points' printing height on the heat bed. Good effeciency saves much time.`,
    tags: ["high temperature", "ease of use ", "CAD"],
    images: [{ src: "https://res.cloudinary.com/djao481zq/image/upload/v1684778709/CyberOni/Assets/Products/Ender%203%20s1%20Pro/hjqzetmd3rpmgylkpta3.webp", alt: "flipper zero" }, { src: "https://res.cloudinary.com/djao481zq/image/upload/v1684778722/CyberOni/Assets/Products/Ender%203%20s1%20Pro/itgvsc7yiqj6yimtalt8.jpg", alt: "flipper zero" }, { src: "https://res.cloudinary.com/djao481zq/image/upload/v1684778728/CyberOni/Assets/Products/Ender%203%20s1%20Pro/bpw4n9emq0fynqf3xptt.jpg", alt: "flipper zero" }, { src: "https://res.cloudinary.com/djao481zq/image/upload/v1684778735/CyberOni/Assets/Products/Ender%203%20s1%20Pro/i3uuou2d4k2o7osjcsah.jpg", alt: "flipper zero" },],
    price: 169,
    profit_margin: 0.2,
    display_price: 59.99,
    category: "Electronics",
    shipping_return_policy: `Return policy for international individual customers is 30 days for defective items. EU B2C customers are protected with EU Consumer Laws, including the right to return within 14 days of purchase. It is important to note that to be eligible for a return, the item must be in the same condition as received including good packaging. Any damage, even superficial, will prevent the company from processing a refund or exchange.

If you have any issues with your Flipper Zero, it is best to contact customer support prior to returning the item. Always consider using a trackable shipping service or purchasing shipping insurance. Additionally, return shipping costs are non-refundable, and any local taxes, duties, and VAT will be subject to the laws and regulations of each individual country.`,
    subcategory: "3D Printers",
    suppliers: [
      {
        id: "Amazon",
        supplierName: "Amazon Direct",
        dimensions: {
          height: 2.2,
          width: 1.7,
          length: 1.1,
          weight: 0.2,
        },
        shippingWeight: 8,
        listPrice: 59.99,
        salePrice: 49.99,
        availability: "In stock",
        supplierUrl: "https://www.amazon.com/Creality-S1-Pro-3D-High-Temperature/dp/B09TGWW6T6/ref=sr_1_5?crid=3451C4EMJUHI0&keywords=ender%2B3%2Bs1%2Bpro&qid=1684778159&sprefix=ender%2B3%2Bs1%2Bpro%2Caps%2C144&sr=8-5&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&th=1",
        supplier_payment: {
          supplierPayPal: "paypal@example.com",
        },
        base_shipping_price: "Free",

      },
      {
        id: "supplier2",
        supplierName: "Tech World",
        supplierEmail: "techworld@example.com",
        supplierUrl: "https://example.com/supplier2",
        supplier_payment: {
          supplierFreelancerEscrow: "techworld@example.com",
        },
        base_shipping_price: "Free",

      },
    ],

    sales_prompt: {
      output:
        "The ENACFIRE F1 wireless earbuds are a great choice for anyone looking for high-quality sound and a comfortable fit. With CVC 8.0 noise cancellation technology and apt-X codec, you can enjoy crystal clear sound and deep bass. Order now and get free shipping!",
      prompt:
        "Ready to experience crystal clear sound with the ENACFIRE F1 wireless earbuds?",
    },
  },
};


function convertObjectToArray(obj: productType): productArrType {
  return Object.values(obj);
}

// Usage example
export const sample_arr_data = convertObjectToArray(sample_data);


export function getProductById(id: string | undefined): Product | undefined {
  return sample_arr_data.find(product => product.id === id);
}