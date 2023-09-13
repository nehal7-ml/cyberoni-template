import Layout from "@/components/layout";
import ContactSection from "@/components/layout/ctas/contact_forms/contact_bg_color";
import { MetaTagsProps, DEFAULT_OBJ } from '@/context/brains';
import { useContext, useEffect } from "react";
import { MyContext } from "@/context/brains";

const useBrains = () => {
    const brains = useContext(MyContext);
    // console.log("BrainsContext", brains);
    const brainKeys = Object.keys(brains);
    const brainsLoaded = brains.isLoaded;
    const brainsMobile = brains.isMobileState;
    const brainsSiteOwner = brains.siteOwner;
    const brainsMetaTags = brains.metaDataObj;
    const brainsSetMetaTags = brains.setMetaTags;



    return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsMetaTags, brainsSetMetaTags };
};
const ContactUs = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();




    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: "Contact Us | Cyberoni Products",
            description: "Get in touch with the Cyberoni team to learn more about our data-driven products and how we can help your business. Our products include data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, and cybersecurity pentesting hardware. Contact us today to schedule a consultation.",
            image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Products/stock_photos/v4mcq0vt7cmhf1n8ox0f.jpg',
            keyWords: "contact us, cyberoni, data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, cybersecurity pentesting hardware"
        }
        brainsSetMetaTags(meta_obj)
        return () => { }
    },
        //eslint-disable-next-line
        []);

    const serviceKeys: string[] = [];

    if (brainsSiteOwner?.services) {
        serviceKeys.push(...Object.keys(brainsSiteOwner.servicesCollection!));
    }
    return (
        <Layout>
            <section className="my-40 min-h-screen bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Solutions Tailored For You</h1>

                                <p className="mt-6 max-w-xl">
                                    Contact Us Today to see how we can help streamline your business so you can focus on what matters! </p>
                                <a href="https://calendly.com/oni_development/15min" target="_blank" rel="noreferrer">
                                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md transition-colors duration-300 transform hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                   
                                    Schedule a consultation
                                </button>
                                </a>
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-gray-300">View our recent posts</h3>

                                    <div className="flex mt-4 -mx-1.5 ">
                          
                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="www.cybershoptech.com/linked-in">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="www.cybershoptech.com/facebook">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="www.cybershoptech.com/instagram">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:w-3/4 lg:mx-3">
                                <ContactSection
                                    address={`${brainsSiteOwner.address.street}, ${brainsSiteOwner.address.city}, ${brainsSiteOwner.address.state}`}
                                    phoneNumber={brainsSiteOwner.phone}
                                    email={brainsSiteOwner.email}
                                    serviceKeys={serviceKeys}
                                    key="contact-section-home-1"
                                    backgroundColor="bg-black	"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactUs