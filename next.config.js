/** @type {import('next').NextConfig} */


const nextConfig = {
  env: {
    open_ai_key: process.env.open_ai_key,
    freelancer_oauth: process.env.freelancer_oauth,
    remove_bg_key: process.env.remove_bg_key,
    big_jpg_key: process.env.big_jpg_key,
    eleven_labs_key: process.env.eleven_labs_key,
    cj_dropshipping_key: process.env.cj_dropshipping_key,
    mailchimp_key: process.env.mailchimp_key,
    notion_key: process.env.notion_key,
    notion_pub_key: process.env.notion_pub_key,

    marketing_crm_contacts_database_id:
      process.env.marketing_crm_contacts_database_id,
    marketing_crm_opportunities_database_id:
      process.env.marketing_crm_opportunities_database_id,
    marketing_crm_accounts_database_id:
      process.env.marketing_crm_accounts_database_id,
    marketing_crm_activities_database_id:
      process.env.marketing_crm_activities_database_id,
    sales_crm_contacts_database_id: process.env.sales_crm_contacts_database_id,
    sales_crm_opportunities_database_id:
      process.env.sales_crm_opportunities_database_id,
    sales_crm_accounts_database_id: process.env.sales_crm_accounts_database_id,
    sales_crm_activities_database_id:
      process.env.sales_crm_activities_database_id,
    gmail_username: process.env.mail_username,
    gmail_password: process.env.mail_password,
    sendgrid_key: process.env.sendgrid_key,
    captcha_site_key: process.env.captcha_site_key,
    captcha_secret_key: process.env.captcha_secret_key,
    captcha_enterprise_key: process.env.captcha_enterprise_key

  },
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "www.facebook.com",
      "www.google.com",
      "www.cjdropshipping.com/",
      "www.amazon.com",
      "example.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "picsum.photos",
      "m.media-amazon.com",
      "s.gravatar.com"
    ],
  },
  async redirects() {
    return [
      {
        source: "/brochure-1",
        destination: "https://drive.google.com/file/d/1Vw7Pzb-x-Ag9XURghGEeFS-bcB5Ii-PF/view?usp=share_link",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/CyberOnillc",
        permanent: false,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/softwear4u",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/softwear4u/",
        permanent: false,
      },
      {
        source: "/linked-in",
        destination: "https://www.linkedin.com/company/softwear4u/",
        permanent: false,
      },
      {
        source: "/freelancer",
        destination: "https://www.freelancer.com/u/CodingOni",
        permanent: false,
      },
      {
        source: "/hire-a-developer",
        destination: "https://lmgfwsubawc.typeform.com/to/IIiyftCW",
        permanent: false,
      },
      {
        source: "/full-stack-dev-application",
        destination: "https://lmgfwsubawc.typeform.com/to/fPzmT5JT",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
