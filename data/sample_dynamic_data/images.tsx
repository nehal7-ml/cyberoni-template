const requiredImageTitles = ["favicon", "logo", "homeHeader","starAssets","mobileHomeHeader","mobileBrushAsset"] as const;
type ImageKeys = (typeof requiredImageTitles)[number];

export type Images = {
  [I in ImageKeys]?: {
    title: string;
    links: { url: string; cloudinary_id?: string };
    description: string;
    alt: string;
  };
};

// Check if requiredImageTitles is empty
type DefaultImageKeys = typeof requiredImageTitles extends readonly [
  infer T,
  ...infer Rest
]
  ? ImageKeys
  :
      | 'favicon'
      | 'logo'
      | 'homeHeader'
      | 'starAssets'
      | 'mobileHomeHeader'
      | 'mobileBrushAsset';


  export const sample_data: Images = {
    favicon: {
      title: 'string',
      links: {
        url: 'https://res.cloudinary.com/djao481zq/image/upload/v1682146860/CyberOni/Logo/main_logo_light.jpg.png',
        cloudinary_id: '6d77b8d493b5c897a690bc8846c846f5',
      },
      description: 'string',
      alt: 'string',
    },
    logo: {
      title: 'string',
      links: {
        url: 'https://res.cloudinary.com/djao481zq/image/upload/v1682146860/CyberOni/Logo/main_logo_light.jpg.png',
        cloudinary_id: '6d77b8d493b5c897a690bc8846c846f5',
      },
      description: 'string',
      alt: 'string',
    },
    homeHeader: {
      title: 'string',
      links: {
        url: '/main_hero.webp',
        cloudinary_id: '63b815f87f0fda87194893eab7db28fc',
      },
      description: 'string',
      alt: 'string',
    },
    starAssets: {
      title: 'string',
      links: {
        url: 'https://res.cloudinary.com/djao481zq/image/upload/f_auto,q_auto/v1/CyberOni/Assets/Bg_removed/star-ar_tkzqak-removebg-preview_joburp',
        cloudinary_id: '63b815f87f0fda87194893eab7db28fc',
      },
      description: 'string',
      alt: 'string',
    },
    mobileHomeHeader: {
      title: 'string',
      links: {
        url: '/mobile_splash-home.webp',
        cloudinary_id: '63b815f87f0fda87194893eab7db28fc',
      },
      description: 'string',
      alt: 'string',
    },
    mobileBrushAsset: {
      title: 'string',
      links: {
        url: 'https://res.cloudinary.com/djao481zq/image/upload/f_auto,q_auto/v1/CyberOni/Assets/nazy4wvicuhiilggasd7',
        cloudinary_id: '63b815f87f0fda87194893eab7db28fc',
      },
      description: 'string',
      alt: 'string',
    },
  };