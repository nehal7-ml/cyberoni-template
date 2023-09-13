const requiredSloganTitles = ["intro", "whyus", "homeCta", "services", "blogs"] as const;
type SloganKeys = (typeof requiredSloganTitles)[number];


export type Slogan = {
  title: string;
  links?: { title?: string; url: string; local_file?: string; svg_icon?: string };
  subtitle: string;

  message: string;
  description: string;
};

export type CollectionSlogans = {
  [I in SloganKeys]?: Slogan;
};


export type ArrSlogans = Slogan[]
// Check if requiredSloganTitles is empty
type DefaultSloganKeys = typeof requiredSloganTitles extends readonly [
  infer T,
  ...infer Rest,
]
  ? SloganKeys
  : "intro" | "whyus" | "homeCta" | "services" | "blogs";


function getRandomInActiveIcon() {
  // Generate a random index within the range of svgLinks array
  const randomIndex = Math.floor(Math.random() * svgLinks.length);

  // Get the inActiveIcon at the random index
  const randomInActiveIcon = svgLinks[randomIndex].inActiveIcon;

  // Return the selected inActiveIcon
  return randomInActiveIcon;
}

const svgLinks = [
  {
    title: "templates",
    inActiveIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
              `,
    activeIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
              `,
  },
  {
    title: "cloud",
    inActiveIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
              `,
    activeIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path 
                d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
              ></path>
              </svg>
              `,
  },
  {
    title: "security",
    inActiveIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" stroke-width="2" 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              `,
    activeIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"
                ></path>
              </svg>
              `,
  },
  {
    title: "support",
    inActiveIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                ></path>
              </svg>
              `,
    activeIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                ></path>
              </svg>
              `,
  },
  {
    title: "settings",
    inActiveIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              `,
    activeIcon: `
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              `,
  },
]

export const sample_data: CollectionSlogans = {
  intro: {
    title: "Your Partner in Data Science Solutions",
    subtitle: "Delivering Data-Driven Solutions for Businesses",
    message: `Are you tired of using outdated strategies to grow your business? Are you struggling to keep up with the competition? Look no further than Cyberoni, the innovative software development company that specializes in data-driven solutions. Our team of experts is dedicated to helping businesses like yours succeed by harnessing the power of data science.`,
    links: {
      url: "https://drive.google.com/file/d/1QmJMPrif5MzLboNKG8hKyS0Glz58AaHm/view?usp=drivesdk",
      local_file: "/public/assets/slogan_assets/OurServices.zip",
      title: "Download Our Brochure (ZIP)",
      svg_icon: getRandomInActiveIcon()
    },
    description: "Intro Message",
  },
  whyus: {
    title: "Introducing Cyberoni - Your Partner in Data Science Solutions",
    subtitle: "Delivering Data-Driven Solutions for Businesses",
    message: "Unlock the Power of Your Data",
    links: {
      url: "https://cybershoptech.com",
      title: "Learn More",
      svg_icon: getRandomInActiveIcon()
    },
    description: `At Cyberoni, we're passionate about helping businesses harness the full potential of their data. With our customized data science solutions, we can help you unlock valuable insights and make informed, data-driven decisions that drive business growth.\n\nOur team is made up of experienced data scientists, engineers, and analysts who will work closely with you to understand your unique business needs and goals. We'll identify the right data sources, develop actionable insights, and build custom AI solutions that integrate seamlessly with your existing business software.\n\nBut we don't stop there. We also believe in creating beautiful, easy-to-use interfaces that make it a joy to work with your data. From predictive modeling and machine learning to data visualization and dashboarding, our comprehensive suite of services will help you get the most out of your data.\n\nDon't just take our word for it - partner with Cyberoni and see the results for yourself. Contact us today to learn more about how we can help you achieve your business goals through data-driven solutions.`,
  },
  homeCta: {
    title:
      " Looking for a reliable and trustworthy partner to help your business succeed in the data-driven future?",
    subtitle: " Look no further than Cyberoni! ",
    message: `At Cyberoni, we bring a wealth of expertise and experience to the table to help businesses harness the power of data science. We offer a range of services, including web development, SaaS, marketing, and graphic design, all with a primary focus on delivering data-driven solutions tailored to meet the unique needs of our clients.

But we're not just about the services we offer. We believe in conducting business with integrity and ethics, always putting our clients first and going the extra mile to ensure their satisfaction. With a company culture built on transparency, honesty, and accountability, you can trust that you're working with a team that truly cares about your success.

So, if you're ready to take your business to the next level, contact Cyberoni today and let us help you thrive in the data-driven future!`,
    links: {
      url: "https://cybershoptech.com",
      title: "Free Consultation",
      svg_icon: getRandomInActiveIcon(),
    },
    description: `Look no further than Cyberoni! With a focus on delivering data-driven solutions tailored to meet the unique needs of our clients, we offer a range of services, including web development, SaaS, marketing, and graphic design. But more than that, we're committed to conducting business with integrity and ethics, always putting our clients first and going the extra mile to ensure their satisfaction. So why wait? Contact Cyberoni today and let us help you take your business to the next level!`,

  }, services: {
    title:
      "Ready to take your online presence to the next level? Partner with CyberOni for expert digital solutions!",
    subtitle: "Transform your digital world with CyberOni",
    message: `At CyberOni, we specialize in providing innovative and effective digital solutions to help businesses thrive in the online world. Our range of services includes web development, SaaS, marketing, and graphic design, all designed to help our clients achieve their goals and stand out in a crowded online marketplace.

But we're not just about delivering great services. We're committed to building long-term relationships with our clients based on trust, transparency, and accountability. Our team of experts will work closely with you to understand your unique needs and develop customized solutions that deliver real results.

So if you're ready to take your online presence to the next level, partner with CyberOni today and discover what's possible in the digital world!`,
    links: {
      url: "https://cybershoptech.com/services",
      title: "Explore Our Services",
      svg_icon: getRandomInActiveIcon(),
    },
    description: `Transform your digital world with CyberOni! Our expert team specializes in providing innovative and effective digital solutions to help businesses thrive in the online world.With a range of services that includes web development, SaaS, marketing, and graphic design, we'll work closely with you to understand your unique needs and develop customized solutions that deliver real results. So why wait? Partner with CyberOni today and take your online presence to the next level!`,

  }, blogs: {
    title: "Stay up to date with the latest digital trends and insights with CyberOni's blog!",
    subtitle: "Discover the Power of Digital Solutions",
    message: `At CyberOni, we believe in sharing our knowledge and expertise with the world. That's why we've created a blog dedicated to all things digital, from the latest trends and insights to tips and tricks for optimizing your online presence.

Our team of experts covers a wide range of topics, including web development, SaaS, marketing, graphic design, and more. Whether you're a business owner looking to stay ahead of the curve or a digital enthusiast eager to learn more, our blog is the perfect place to start.

But we don't just talk the talk - we walk the walk. Our blog is packed with real-world examples of how we've helped our clients achieve their goals through innovative and effective digital solutions. And if you're ready to take your online presence to the next level, we're here to help.

So what are you waiting for? Check out our blog today and discover the power of digital with CyberOni!`,
    links: {
      url: "https://cybershoptech.com/blog",
      title: "Read Our Blog",
      svg_icon: getRandomInActiveIcon()
    },
    description: `Stay up to date with the latest digital trends and insights with CyberOni's blog! Discover the power of digital with our team of experts, who cover a wide range of topics including web development, SaaS, marketing, graphic design, and more. Our blog is packed with real-world examples of how we've helped our clients achieve their goals through innovative and effective digital solutions. So why wait? Check out our blog today and take the first step towards optimizing your online presence!`,
  },


};


function convertToArray(obj: any): any[] {
  const arr: any[] = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}






export const arr_sample_data: ArrSlogans = convertToArray(sample_data);

