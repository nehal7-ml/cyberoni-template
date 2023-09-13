export interface CJDropshippingProduct {
  pid: string;
  productName: string[];
  productNameEn: string;
  productSku: string;
  productImage: string;
  productWeight: string;
  productUnit: string;
  productType: string;
  categoryId: string;
  categoryName: string;
  entryCode: string;
  entryName: string;
  entryNameEn: string;
  materialName: string[];
  materialNameEn: string;
  materialKey: string[];
  packingWeight: string;
  packingName: string[];
  packingNameEn: string[];
  packingKey: string[];
  productKey: string[];
  productKeyEn: string;
  sellPrice: number;
  sourceFrom: number;
  description: string;
  variants: CJDropShippingProductVariant[];
}

interface CJDropShippingProductVariant {
  vid: string;
  pid: string;
  variantName: string | null;
  variantNameEn: string;
  variantSku: string;
  variantUnit: string | null;
  variantProperty: string | null;
  variantKey: string;
  variantLength: number;
  variantWidth: number;
  variantHeight: number;
  variantVolume: number;
  variantWeight: number;
  variantSellPrice: number;
  createTime: string;
}


export const example_cj_dropshipping_products: CJDropshippingProduct[] = [
  {
    pid: "1234",
    productName: ["Product A"],
    productNameEn: "Product A",
    productSku: "SKU001",
    productImage: "https://example.com/productA.jpg",
    productWeight: "1 lb",
    productUnit: "piece",
    productType: "physical",
    categoryId: "1",
    categoryName: "Category A",
    entryCode: "EC001",
    entryName: "Entry A",
    entryNameEn: "Entry A",
    materialName: ["Material A", "Material B"],
    materialNameEn: "Material A, Material B",
    materialKey: ["MA", "MB"],
    packingWeight: "0.5 lb",
    packingName: ["Packing A"],
    packingNameEn: ["Packing A"],
    packingKey: ["PA"],
    productKey: ["PA", "MA"],
    productKeyEn: "Packing A, Material A",
    sellPrice: 10.99,
    sourceFrom: 1,
    description: "This is Product A",
    variants: [
      {
        vid: "v001",
        pid: "1234",
        variantName: "Variant A",
        variantNameEn: "Variant A",
        variantSku: "SKU001-A",
        variantUnit: "piece",
        variantProperty: "Property A",
        variantKey: "PA,MA,VA",
        variantLength: 10,
        variantWidth: 5,
        variantHeight: 2,
        variantVolume: 100,
        variantWeight: 1.5,
        variantSellPrice: 12.99,
        createTime: "2023-05-09T10:30:00Z"
      },
      {
        vid: "v002",
        pid: "1234",
        variantName: "Variant B",
        variantNameEn: "Variant B",
        variantSku: "SKU001-B",
        variantUnit: "piece",
        variantProperty: "Property B",
        variantKey: "PA,MA,VB",
        variantLength: 15,
        variantWidth: 10,
        variantHeight: 5,
        variantVolume: 750,
        variantWeight: 2,
        variantSellPrice: 15.99,
        createTime: "2023-05-10T14:30:00Z"
      }
    ]
  },
  {
    pid: "5678",
    productName: ["Product B"],
    productNameEn: "Product B",
    productSku: "SKU002",
    productImage: "https://example.com/productB.jpg",
    productWeight: "2 lb",
    productUnit: "piece",
    productType: "physical",
    categoryId: "2",
    categoryName: "Category B",
    entryCode: "EC002",
    entryName: "Entry B",
    entryNameEn: "Entry B",
    materialName: ["Material C", "Material D"],
    materialNameEn: "Material C, Material D",
    materialKey: ["MC", "MD"],
    packingWeight: "1 lb",
    packingName: ["Packing B"],
    packingNameEn: ["Packing B"],
    packingKey: ["PB"],
    productKey: ["PB", "MC"],
    productKeyEn: "Packing B, Material C",
    sellPrice: 19.99,
    sourceFrom: 2,
    description: "This is Product B",
    variants: [
      {
        vid: "v003",
        pid: "5678",
        variantName: "Large",
        variantNameEn: "Large",
        variantSku: "5678-l",
        variantUnit: null,
        variantProperty: null,
        variantKey: "large",
        variantLength: 20,
        variantWidth: 15,
        variantHeight: 10,
        variantVolume: 3000,
        variantWeight: 500,
        variantSellPrice: 24.99,
        createTime: "2022-05-08T10:30:00Z",
      },
    ],
  },
];





