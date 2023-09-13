
type surCharge = {
    percentage_upcharged?: string;
    set_price?: number
}
type VarImage = {
    src: string;
    alt: string;
};

type ColorVariant = {
    color: string;
    hex?: string;
    image?: VarImage;
    surCharge?: surCharge;
};

type TypeVariant = {
    type: string;
    hex?: string;
    image?: VarImage;
    surCharge?: surCharge;

};

type SizeVariant = {
    size: string;
    surCharge?: surCharge;
    image?: VarImage;


};

type AddOnVariant = {
    addon: string;
    image?: VarImage;
    surCharge?: surCharge;

};

export type Variant = {
    colorVariant?: ColorVariant;
    sizeVariant?: SizeVariant;
    addOnVariant?: AddOnVariant;
    typeVariant?: TypeVariant;
}

export type Variants = Variant[]


const image1: VarImage = {
    src: 'path/to/image1.jpg',
    alt: 'Image 1',
};

export const colorVariant1: ColorVariant = {
    color: 'Red',
    hex: '#FF0000',
    image: image1,
};

const typeVariant1: TypeVariant = {
    type: 'Basic',
};

const sizeVariant1: SizeVariant = {
    size: 'Medium',
};

const addonVariant1: AddOnVariant = {
    addon: 'Extra Feature',
    surCharge: {set_price: 22},
    image: image1,
};

export const variant1: Variant = {colorVariant: colorVariant1};


const image2: VarImage = {
    src: 'path/to/image2.jpg',
    alt: 'Image 2',
};

const colorVariant2: ColorVariant = {
    color: 'Blue',
    image: image2,
};

const typeVariant2: TypeVariant = {
    type: 'Premium',
};

const sizeVariant2: SizeVariant = {
    size: 'Large',
};

const addonVariant2: AddOnVariant = {
    addon: 'Extended Warranty',
    image: image2,
};

export const variant2: Variant = { typeVariant: typeVariant2 };
