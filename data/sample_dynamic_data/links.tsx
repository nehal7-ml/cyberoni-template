const requiredLinkTitles = ["home", "contact"] as const;
type LinkKeys = (typeof requiredLinkTitles)[number];

export type Link = {
  [I in LinkKeys]?: {
    title: string;
    links: { url: string; short_url?: string };
    description: string;
    alt: string;
  };
};

// Check if requiredImageTitles is empty
type DefaultImageKeys = typeof requiredLinkTitles extends readonly [
  infer T,
  ...infer Rest,
]
  ? LinkKeys
  : "home" | "contact";

export const sample_data: Link = {
  home: {
    title: "Contact Us Page",
    links: {
      url: "https://www.cybershoptech.com/contact-us",
      short_url: "/contact-us",
    },
    description: "string",
    alt: "string",
  },
  contact: {
    title: "Contact Us Page",
    links: {
      url: "https://www.cybershoptech.com/contact-us",
      short_url: "/contact-us",
    },
    description: "string",
    alt: "string",
  },
};
