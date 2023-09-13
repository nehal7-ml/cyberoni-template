import { SubProject, webDesignSubProjects } from "./sample_sub_services";

export type ServiceParagraph = {
  id: number;
  title?: string;
  blockquote?: string;
  image?: string;
  content: string;
}


export type ServicePreview = {
  id?: string;
  imageUrl: string;
  title: string;
  content: string;
};

export type ServiceMoreDetails = {
  imageUrl: string;
  id?: string;
  title: string;
  video?: string;
  description: ServiceParagraph[];
  hourly_rate: number;
  value_brought: string;
  skills_used: string;
};

export type htmlEmbed = {
  html: string[];
  dynamicRenderObj: {
    showHtml: boolean;
    showFeatured: boolean;
    showSimilarServices: boolean;
    showSearchServices: boolean
  }
  style?: {
    divStyle?: string;
    iframeStyle?: string;
  }

}
export type Service = {
  preview: ServicePreview;
  more_details: ServiceMoreDetails;
  sub_projects: SubProject[];
  htmlEmbed?: htmlEmbed;
};


export type ServiceWithID = {
  id: number;
  preview: ServicePreview;
  more_details: ServiceMoreDetails;
  sub_projects: SubProject[];
  tags: string[]
  htmlEmbed?: htmlEmbed;

};


export type servicesCollectionType = {
  [id: string]: ServiceWithID;
};



export type servicesArrayType = ServiceWithID[]

const embeddataset: htmlEmbed = 
  {
  html: [`<div style="position: relative; width: 100%; height: 0; padding-top: 62.5000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFkndLOIx4&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
`,`<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFknQlVVsI&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
`],
    dynamicRenderObj: {
      showHtml: true,
      showFeatured: true,
      showSimilarServices: true,
      showSearchServices: true
    },
  
  }

const webDevelopmentServices: ServiceParagraph[] = [
  {
    id: 0,
    content:
      "At Cyberoni, we offer cutting-edge web development services that are designed to propel your business forward. Our team of expert developers utilizes the latest technologies and industry best practices to create highly functional and visually stunning websites tailored to your specific needs.",
  },
  {
    id: 1,
    content:
      "Whether you need a simple brochure website, an e-commerce platform, or a complex web application, we have the skills and expertise to bring your vision to life. We work closely with our clients to understand their objectives and ensure that the final product aligns perfectly with their brand identity and goals.",
  },
  {
    id: 2,
    content:
      "Our web development process is collaborative and transparent, keeping you involved and informed every step of the way. From initial design concepts to development, testing, and deployment, we strive for excellence in every aspect of our work.",
  },
  {
    id: 3,
    content:
      "With Cyberoni, you can expect websites that are not only visually appealing but also highly functional, user-friendly, and optimized for performance across different devices and browsers. We prioritize clean code, efficient development practices, and seamless user experiences to ensure that your website stands out from the competition.",
  },
  {
    id: 4,
    content:
      "Additionally, our web development services include ongoing support and maintenance to keep your website up to date, secure, and performing at its best. Whether you need regular updates, bug fixes, or enhancements, our dedicated team is here to provide prompt and reliable support.",
  },
];

export const sample_data: servicesCollectionType = {
  "Web-App Development/Design": {
    id: 0,
    tags: ["web design"],
    htmlEmbed: embeddataset,
    preview: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1682464680/CyberOni/Assets/Services/stock_phots/hzxjw7famgryydc7t47l.jpg",
      title: "Web Development Services",
      content:
        "We create stunning, responsive websites and web applications that help businesses achieve their goals and stand out in the digital world.",
    },
    more_details: {
      imageUrl:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
      title: "Web Development Services",
      description:
        webDevelopmentServices,
      hourly_rate: 120,
      value_brought:
        "We help businesses improve their online presence, attract and retain customers, increase conversions and sales, and achieve their business objectives.",
      skills_used:
        "Our team of experienced developers use a variety of tools and technologies, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, AWS, and more.",
    },
    sub_projects: webDesignSubProjects,
  },
  "App Development/Design": {
    id: 1,
    tags: ["mobile design"],
    htmlEmbed: embeddataset,

    preview: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Services/stock_phots/gtxkjhvaqixrfi15ule7.jpg",
      title: "App Development Services",
      content:
        "Cyber Oni is a digital design agency that specializes in providing top-quality mobile design services to clients across various industries. They have a team of experienced designers who are well-versed in the latest design trends and technologies, ensuring that clients receive designs that are not only aesthetically pleasing but also functional and user-friendly.",
    },
    more_details: {
      imageUrl:
        "https://images.unsplash.com/photo-1678904595514-570132b4a661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "App Development/Design",
      description: webDevelopmentServices, hourly_rate: 0,
      value_brought: "",
      skills_used: "",
    },
    sub_projects: [
      {
        id: 1,
        imageUrl: "",
        title: "",
        tags: ["Web design"],

        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,

        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  },
  "Data Science/ Visualization": {
    id: 2,
    tags: ["data science"],
    htmlEmbed: embeddataset,

    preview: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1683992022/CyberOni/Assets/Services/stock_phots/r4oxm9iw3kaoawpgmama.jpg",
      title: "Data Science/ Visualization",
      content:
        "Cyber Oni is a cutting-edge data science company that specializes in providing comprehensive data science services to businesses of all sizes. At Cyber Oni, we understand that the world of data science is constantly evolving, and that staying ahead of the curve is essential to the success of any business. That's why we offer a range of services that are designed to help our clients harness the power of data in order to make informed decisions and drive growth.",
    },
    more_details: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1683992022/CyberOni/Assets/Services/stock_phots/r4oxm9iw3kaoawpgmama.jpg",
      title: "Expertise Solutions",
      description: webDevelopmentServices, hourly_rate: 0,
      value_brought: "",
      skills_used: "",
    },
    sub_projects: [
      {
        imageUrl: "",
        id: 3,
        title: "",
        tags: ["Web design"],

        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,
        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  }, "Marketing": {
    id: 2,
    tags: ["marketing"],
    htmlEmbed: embeddataset,

    preview: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1683992038/CyberOni/Assets/Services/stock_phots/lf8xg2bevo7psinzful2.jpg",
      title: "Data Driven Marketing",
      content:
        "Cyber Oni is a technology company that specializes in home automation services. With their state-of-the-art technology and cutting-edge products, they provide seamless and convenient home automation solutions to homeowners across the country. Through their website, they offer a wide range of services designed to make your life easier and more comfortable, all while keeping your home secure and energy-efficient.",
    },
    more_details: {
      imageUrl:
        "hhttps://res.cloudinary.com/djao481zq/image/upload/v1683992038/CyberOni/Assets/Services/stock_phots/lf8xg2bevo7psinzful2.jpg",
      title: "Data Driven Marketing",
      description: webDevelopmentServices, hourly_rate: 0,
      value_brought: "",
      skills_used: "",
    },
    sub_projects: [
      {
        imageUrl: "",
        id: 3,
        title: "",
        tags: ["Web design"],

        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,
        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  }, "Home Automation": {
    id: 2,
    tags: ["home automation", "secure"],
    htmlEmbed: embeddataset,

    preview: {
      imageUrl:
        "https://res.cloudinary.com/djao481zq/image/upload/v1683992005/CyberOni/Assets/Services/stock_phots/fjpgwvfogu9pi6nw2bsv.jpg",
      title: "Home Automation",
      content:
        "Cyber Oni is a digital marketing agency that offers Marketing as a Service (MaaS) to its clients. With a team of experienced marketers, Cyber Oni provides comprehensive marketing solutions that are tailored to meet the unique needs of each client. In this article, we'll explore how Cyber Oni can help businesses grow by providing marketing services through their website.",
    },
    more_details: {
      imageUrl:
        "hhttps://res.cloudinary.com/djao481zq/image/upload/v1683992005/CyberOni/Assets/Services/stock_phots/fjpgwvfogu9pi6nw2bsv.jpg",
      title: "Home Automation",
      description: webDevelopmentServices, hourly_rate: 0,
      value_brought: "",
      skills_used: "",
    },
    sub_projects: [
      {
        imageUrl: "",
        id: 3,
        title: "",
        tags: ["Web design"],

        service_pricing: { pricing_model: "", discounts: [] },
        service_deliverables: [],
        service_usage_score: 0,
        services_success_stories: [],
        description: "",
        department: "",
        estimated_hours_times_fifty_percent: 55.6,
        estimated_hours_times_one_hundred_percent: 100.7,
        skill_level: "",
        complexity: 0,
        overhead_cost: 0,
      },
    ],
  },

};

// export const arr_sample_data: ServiceWithID[] = Object.entries(sample_data).map(([id, value]) => ({
//   ...value,
//   id: parseInt(id, 10), // Convert id from string to number using parseInt
// }));



export const arr_sample_data: ServiceWithID[] = Object.values(sample_data);
