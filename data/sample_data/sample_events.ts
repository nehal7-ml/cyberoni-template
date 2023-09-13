export type event = {
  name: string;
  date: Date;
  location: string;
  description: string;
  imageUrl: string;
  images: Record<
    string,
    {
      title: string;
      links: { url: string; clodinary_id?: number };
      description: string;
      alt: string;
    }
  >;
  eventLink: string; // URL for Eventbrite or Facebook event page
  status: "upcoming" | "cancelled" | "completed"; // status of the event
  isVirtual: boolean; // true if the event is virtual, false if in-person
};

export type eventType = event[];


export const sample_data: eventType = [
  {
    name: "Tech Conference 2023",
    date: new Date("2023-08-17T08:00:00"),
    location: "San Francisco, CA",
    description: "Join us for the biggest tech conference of the year!",
    imageUrl: "https://example.com/techconf.jpg",
    images: {
      slogan1: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
      slogan2: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
    },
    eventLink: "https://www.eventbrite.com/techconf2023",
    status: "upcoming",
    isVirtual: false,
  },
  {
    name: "Marketing Seminar",
    date: new Date("2022-06-12T13:00:00"),
    location: "New York, NY",
    description: "Learn the latest marketing trends and strategies.",
    imageUrl: "https://example.com/marketingseminar.jpg",
    images: {
      slogan1: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
      slogan2: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
    },
    eventLink: "https://www.eventbrite.com/marketingseminar2022",
    status: "completed",
    isVirtual: true,
  },
  {
    name: "Fundraiser Gala",
    date: new Date("2022-10-05T18:00:00"),
    location: "Chicago, IL",
    description: "Join us for a night of fundraising and charity.",
    imageUrl: "https://example.com/fundraiser.jpg",
    images: {
      slogan1: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
      slogan2: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
    },
    eventLink: "https://www.eventbrite.com/fundraiser2022",
    status: "upcoming",
    isVirtual: false,
  },
  {
    name: "Product Launch Party",
    date: new Date("2022-03-15T19:00:00"),
    location: "Los Angeles, CA",
    description: "Be the first to see our new product!",
    imageUrl: "https://example.com/productlaunch.jpg",
    images: {
      slogan1: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
      slogan2: {
        title: "string",
        links: { url: "string", clodinary_id: 0o345 },
        description: "string",
        alt: "string",
      },
    },
    eventLink: "https://www.eventbrite.com/productlaunch2022",
    status: "cancelled",
    isVirtual: true,
  },
];
