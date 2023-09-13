type StockXProduct = {
  productId: string;
  urlKey: string;
  styleId: string;
  productType: string;
  title: string;
  brand: string;
  productAttributes: {
    gender: string;
    season: string;
    releaseDate: string;
    retailPrice: number;
    colorway: string;
    color: string;
  };
};

type StockXVariant = {
  productId: string;
  variantId: string;
  variantName: string;
  variantValue: string;
};

type MarketData = {
  productId: string;
  variantId: string;
  currencyCode: string;
  lowestAskAmount: number;
  highestBidAmount: number;
};

type SiteStockX = StockXProduct & StockXVariant & MarketData;

export const variant1: StockXVariant = {
  productId: "1",
  variantId: "VAR001",
  variantName: "Adidas Yeezy Boost 350 V2 Zebra",
  variantValue: "US 10",
};

export const product1: StockXProduct = {
  productId: "1",
  urlKey: "product-1",
  styleId: "STY001",
  productType: "sneakers",
  title: "Adidas Yeezy Boost 350",
  brand: "Adidas",
  productAttributes: {
    gender: "unisex",
    season: "SS21",
    releaseDate: "2021-04-23",
    retailPrice: 220,
    colorway: "Cloud White/Core Black/Cloud White",
    color: "white",
  },
};

export const marketData: MarketData = {
  productId: "35d76ac8-a112-4d75-b44f-c8ef04a87c93",
  variantId: "VAR001",
  currencyCode: "USD",
  lowestAskAmount: 100,
  highestBidAmount: 150,
};

export const sample_data: SiteStockX = {
  productId: product1.productId,
  urlKey: product1.urlKey,
  styleId: product1.styleId,
  productType: product1.productType,
  title: product1.title,
  brand: product1.brand,
  productAttributes: product1.productAttributes,
  variantId: variant1.variantId,
  variantName: variant1.variantName,
  variantValue: variant1.variantValue,
  currencyCode: marketData.currencyCode,
  lowestAskAmount: marketData.lowestAskAmount,
  highestBidAmount: marketData.highestBidAmount,
};
