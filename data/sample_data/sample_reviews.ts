export type Review = {
  id: number;
  name: string;
  image: string;
  title: string;
  content: string;
  link: string;
  rating: number;
  tags: string[];
  verified_customer: boolean;
};

export type reviewsType = {
  reviews: Review[];
};

export const sample_data: reviewsType = {
  reviews: [
    {
      id: 0,
      name: "John S.",
      image:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682471611/CyberOni/Assets/Services/stock_phots/Avatars/obq7ihuvufrquh2hrbvy.jpg",
      title: "A pleasure",
      content:
        "Working with Cyberoni was an absolute pleasure! Their team of experts provided top-notch data-driven solutions that helped us achieve our business goals. They truly care about their clients and go the extra mile to ensure their satisfaction. We highly recommend Cyberoni for any business looking to harness the power of data science.",
      link: "https://example.com/reviews/1",
      rating: 4,
      tags: ["quality", "value"],
      verified_customer: true,
    },
    {
      id: 1,
      name: "Sarah M., Marketing Director",
      image:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682471957/CyberOni/Assets/Services/stock_phots/Avatars/igor-savelev-pj4e-hW-e5w-unsplash_gjeg59.jpg",
      title: "Expert service!",
      content:
        "Cyberoni is the real deal when it comes to software development. Their expertise in web development, SaaS, marketing, and graphic design is second to none, but what really sets them apart is their commitment to delivering high-quality, data-driven solutions tailored to the unique needs of their clients. Their integrity and ethical standards are unparalleled, and we trust them completely to help us succeed in the data-driven future",
      link: "https://example.com/reviews/2",
      rating: 5,
      tags: ["service", "communication"],
      verified_customer: true,
    },
    {
      id: 2,
      name: "Mark T., CTO",
      image:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682471762/CyberOni/Assets/Services/stock_phots/Avatars/xkvqiyxup2daji8cx4xg.jpg",
      title: "Couldnt Be Happier!",
      content:
        "We've been working with Cyberoni for several years now, and we couldn't be happier with the results. Their team of experts is always up-to-date with the latest data science trends and technologies, and they consistently deliver high-quality solutions that help us stay ahead of the curve. Their culture of transparency, honesty, and accountability is truly refreshing, and we consider them an invaluable partner in our business success.",
      link: "https://example.com/reviews/3",
      rating: 2,
      tags: ["shipping"],
      verified_customer: false,
    },
    {
      id: 3,
      name: "Tom R., CEO",
      image:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682471748/CyberOni/Assets/Services/stock_phots/Avatars/n1v5hyd0wacthewqaiqo.jpg",
      title: "A business partner for sure",
      content:
        "Cyberoni is a true partner in our business success. Their team of experts is not only knowledgeable and skilled but also genuinely committed to helping us achieve our goals. They take the time to understand our unique needs and deliver solutions that are tailored to our business, and their culture of transparency and accountability is truly refreshing. We can't recommend Cyberoni enough for any business looking to thrive in the data-driven future.",
      link: "https://example.com/reviews/3",
      rating: 2,
      tags: ["shipping"],
      verified_customer: false,
    },
    {
      id: 4,
      name: "Lisa K., COO",
      image:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682471952/CyberOni/Assets/Services/stock_phots/Avatars/minh-pham-5yENNRbbat4-unsplash_flsao6.jpg",
      title: "Exceeded my expectations",
      content:
        "Cyberoni exceeded our expectations in every way. Their team of experts took the time to truly understand our business needs and deliver a customized solution that helped us achieve our goals. They were always available to answer our questions and provide guidance throughout the process, and their commitment to delivering high-quality work was evident in every interaction we had with them. We highly recommend Cyberoni for any business looking to harness the power of data science.",
      link: "https://example.com/reviews/3",
      rating: 2,
      tags: ["shipping"],
      verified_customer: false,
    },
  ],
};
