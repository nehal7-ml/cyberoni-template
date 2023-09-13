//!Add Other Data All Other  Sets
import { Images, sample_data as img_sd } from '../sample_dynamic_data/images';
import { Link, sample_data as link_sd } from '../sample_dynamic_data/links';
import {
  ArrSlogans,
  CollectionSlogans,
  arr_sample_data as slogans_arr_sd,
  sample_data as slogans_sd,
} from '../sample_dynamic_data/slogans';
import { addressType, sample_data as address_sd } from './sample_address';
import { blogType, sample_data as blogs_sd } from './sample_blog';
import { eventType, sample_data as events_sd } from './sample_events';
import { faqType, sample_data as faq_sd } from './sample_faq';
import {
  CartItem,
  productArrType,
  sampleCartItem,
  sample_arr_data,
} from './sample_products';
import { promptType01 } from './sample_prompt';
import { reviewsType, sample_data as reviews_sd } from './sample_reviews';
import {
  arr_sample_data as arr_services_sd,
  sample_data as obj_sample_data,
  servicesArrayType,
  servicesCollectionType,
} from './sample_services';
import { sample_users_data, usersType } from './sample_users';

export type SiteOwnerData = {
  id: string;
  name: string;
  cart?: CartItem[];
  wishlist?: productArrType;
  business_information?: {
    business_name: string;
    business_alias: string;
    ein?: number;
    duns?: number;
  };
  users?: usersType;
  services?: servicesArrayType;
  servicesCollection?: servicesCollectionType;
  reviews?: reviewsType;
  prompts?: promptType01;
  products?: productArrType;
  faqs?: faqType;
  blogs?: blogType;
  events?: eventType;
  email: string;
  phone: string;
  next_allowed_img_urls?: string[];
  links: Link;
  address: addressType;
  images: Images;
  slogans: CollectionSlogans;
  slogansArr: ArrSlogans;
  descriptions: Record<
    string,
    {
      title: string;
      content: string;
    }
  >;
};

export const sample_data: SiteOwnerData[] = [
  {
    id: '23bb9f36-1b32-48a3-99f3-3a40aa56a078',
    name: 'John Smith',
    business_information: {
      business_name: 'CyberOni LLC',
      business_alias: 'CyberOni',
      ein: 78878,
      duns: 7687,
    },
    cart: [sampleCartItem],
    wishlist: [],
    users: sample_users_data,
    services: arr_services_sd,
    servicesCollection: obj_sample_data,
    products: sample_arr_data,
    reviews: reviews_sd,
    email: 'support@cybershoptech.com',
    phone: '+1 (720) 258-6576',
    links: link_sd,
    next_allowed_img_urls: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'www.facebook.com',
      'www.google.com',
      'www.cjdropshipping.com/',
      'www.amazon.com',
      'example.com',
      'images.unsplash.com',
      'via.placeholder.com',
    ],
    address: address_sd,
    images: img_sd,
    slogans: slogans_sd,
    slogansArr: slogans_arr_sd,
    faqs: faq_sd,
    blogs: blogs_sd,
    events: events_sd,
    descriptions: {
      about_us: {
        title: 'About Us',
        content:
          'We are a team of experts dedicated to providing the best service possible.',
      },
      services: {
        title: 'Our Services',
        content: 'We offer a wide range of services to meet all your needs.',
      },
      contact_us: {
        title: 'Contact Us',
        content:
          'Get in touch with us today to learn more about how we can help you.',
      },
      mit_license: {
        title: 'MIT License',
        content: `
MIT License for Cyberoni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software for the purpose of building and deploying websites that include blogs, artificial intelligence features, prompts, e-commerce, and various API accesses (the "Purpose"), subject to the following conditions:

Cyberoni is a cutting-edge software development company that is dedicated to helping businesses harness the power of data science. Our team of experts provides a wide range of services, including web development, SaaS, marketing, and graphic design, but we are primarily focused on delivering data-driven solutions that help our clients achieve their goals.

The Software and its derivatives may only be used for the Purpose and cannot be modified, distributed, or used in any other context without the express written permission of Cyberoni.

Cyberoni reserves the right to terminate this license agreement at any time and for any reason.

This license agreement does not grant any patents, trademarks, copyrights, or other intellectual property rights to the Software.

The Software is provided "as is" and Cyberoni disclaims all warranties of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall Cyberoni be liable for any claim, damages or other liability, whether in an action of contract, tort, or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.

By using the Software, you agree to abide by these conditions and to indemnify, defend, and hold harmless Cyberoni, its officers, employees, and affiliates from any claims, damages, or other liability arising out of or in connection with your use of the Software.

This license agreement is governed by the laws of the state of California, USA.`,
      },
      terms_conditions: {
        title: 'Terms And Conditions',
        content: `Thank you for choosing Cyberoni for your software development needs. We are committed to providing the highest quality services and products to our valued customers. Before using our website or purchasing our products, please read our terms and conditions carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.

          Intellectual Property
          All content on this website, including text, graphics, logos, images, and software, is the property of Cyberoni and is protected by intellectual property laws. You may not copy, reproduce, modify, distribute, display, or create derivative works of any content without our prior written consent. All trademarks and service marks displayed on this website are the property of Cyberoni or their respective owners.

          Use of the Website
          You may use our website only for lawful purposes and in accordance with these terms and conditions. You may not use our website in any way that could damage or impair our website's performance or interfere with other users access to our website.You may not attempt to gain unauthorized access to any portion of our website or any systems or networks connected to our website.

          Product Descriptions
          We make every effort to accurately describe our products on our website.However, we do not warrant that product descriptions or other content on our website is accurate, complete, reliable, current, or error- free.If a product you receive from us does not match its description on our website, your sole remedy is to return it in unused condition.

          Pricing and Payment
          Prices for our products are subject to change without notice.We reserve the right to modify or discontinue any product at any time without notice.We are not liable to you or any third party for any modification, price change, or discontinuation of a product.Payment for products must be made at the time of purchase.We accept payment by credit card and PayPal.By providing your payment information, you represent and warrant that you are authorized to use the payment method you have selected.

        Shipping
          We make every effort to ship our products promptly after receiving your order.However, we are not responsible for any delays or damages caused by shipping carriers.We are not liable for any losses, damages, or expenses arising from your failure to receive a shipment or your failure to provide accurate shipping information.

          Returns and Refunds
          We want you to be completely satisfied with your purchase.If you are not satisfied with a product you receive from us, please contact us within 30 days of the purchase date to request a return.We will provide you with instructions for returning the product.Once we receive the returned product, we will issue a refund for the purchase price, less shipping and handling fees.Refunds will be made to the original payment method.

          Disclaimer of Warranties
          We provide our products and services on an as i and as available basis.We do not make any representations or warranties of any kind, express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, non- infringement, or course of performance.We do not warrant that our website, products, or services will meet your requirements, be uninterrupted, be error- free, or be secure.We are not responsible for any viruses or other harmful components transmitted through our website or by using our products or services.

          Limitation of Liability
          In no event will Cyberoni or its affiliates, directors, officers, employees, agents, suppliers, or licensors be liable to you or any third party for any direct, indirect, incidental, consequential, special, or punitive damages arising from or in connection with your use of our website, products, or services, or your inability to use our website, products, or services, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if Cyberoni has been advised of the possibility of such damages.In no event will our liability to you exceed the amount you paid for the product or service that gave rise to the claim.

  Indemnification
          You agree to defend, indemnify, and hold harmless Cyberoni and its affiliates, directors, officers, employees, agents, suppliers, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your use of our website, products, or services, your violation of these terms and conditions, or your violation of any rights of a third party.

  Termination
          We may terminate your access to our website or your use of our products or services at any time without notice or liability.Upon termination, you must immediately cease all use of our website, products, or services and destroy all copies of our content in your possession.

          Governing Law
          These terms and conditions shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflicts of law principles.Any legal action or proceeding arising out of or relating to these terms and conditions shall be brought in the state or federal courts located in the County of Santa Clara, California.

          Changes to Terms and Conditions
          We reserve the right to modify these terms and conditions at any time without notice.Any changes we make to these terms and conditions will be effective immediately upon posting on our website.Your continued use of our website, products, or services after we have made changes to these terms and conditions constitutes your acceptance of the revised terms and conditions.

          Entire Agreement
          These terms and conditions constitute the entire agreement between you and Cyberoni with respect to your use of our website, products, or services and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and Cyberoni.

          If you have any questions about these terms and conditions or our products or services, please contact us at support @cyberoni.com.We appreciate your business and look forward to serving you.</p ></Layout >
 `,
      },
      privacy_policy: {
        title: 'Privacy Policy',
        content: `Thank you for choosing Cyberoni for your software development needs. We are committed to providing the highest quality services and products to our valued customers. Before using our website or purchasing our products, please read our terms and conditions carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.

            Thank you for using Cyberoni, a software development company committed to providing data-driven solutions for businesses. This Privacy Policy explains how we collect, use, and disclose personal information that we obtain from users of our website, https://www.cybershoptech.com/ (the 'Site').

            By accessing or using our Site, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Site.

            Collection of Information
            We may collect personal information from you when you use our Site, including your name, email address, and any other information you provide through our contact form or when you subscribe to our newsletter.

            We also collect certain information automatically, such as your IP address, browser type, and operating system. This information is used to analyze how visitors use our Site and to improve our Site's performance and user experience.

            Use of Information
            We use the personal information we collect to respond to your inquiries and provide you with the services you request.We may also use your information to send you newsletters, promotional materials, and other communications related to our services that we think may be of interest to you.

            Disclosure of Information
            We do not share your personal information with third parties, except as necessary to provide our services or as required by law.

            We may also disclose your information if we believe it is necessary to prevent fraud or illegal activity, to protect the safety and security of our users, or to comply with a legal obligation.

            Cookies and Other Tracking Technologies
            We use cookies and other tracking technologies to collect information about your use of our Site.Cookies are small text files that are stored on your device when you visit our Site.They help us improve our Site's functionality and personalize your experience.

            You may disable cookies by adjusting your browser settings. However, please note that some features of our Site may not function properly if cookies are disabled.

            Security
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or any wireless network can be guaranteed to be 100% secure.

            Links to Other Sites
            Our Site may contain links to other websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of these sites before providing any personal information.

            Children's Privacy
            Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under the age of 13.

            Changes to this Privacy Policy
            We may update this Privacy Policy from time to time.Any changes will be posted on our Site, and the revised Privacy Policy will take effect when it is posted.

            Contact Us
            If you have any questions about this Privacy Policy, please contact us at privacy@cyberoni.com.

            If you have any questions about these terms and conditions or our products or services, please contact us at support@cyberoni.com.We appreciate your business and look forward to serving you.`,
      },
    },
  },
];

export function getSiteOwnerById(id: string): SiteOwnerData | undefined {
  return sample_data.find((owner) => owner.id === id);
}
