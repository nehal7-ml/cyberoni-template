import { Variant } from "@/data/sample_data/sample_variants";
import Image from 'next/image'
type ButtonProps = {
    variant: Variant;
    onVariantClick: (variant: Variant) => void;

};

export const ProductVariantButtons: React.FC<ButtonProps> = ({ variant, onVariantClick }) => {
    let classNames = `my-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`;
    let style: React.CSSProperties = {};

    if (variant.colorVariant?.color) {
        style.backgroundColor = variant.colorVariant.hex;
    }
    if (variant.colorVariant?.image) {
        classNames += ' flex items-center';
    }

    const handleClick = () => {
        onVariantClick(variant);
    };


    return (
        <button className={classNames} style={style} onClick={handleClick}>
            {variant.typeVariant?.image && (
                <Image src={variant.typeVariant.image.src} alt={variant.typeVariant.image.alt} className="mr-2 w-5 h-5" />
            )}
            {variant.colorVariant?.color}
            {variant.typeVariant?.type}
            {variant.sizeVariant?.size}
            {variant.addOnVariant?.addon && variant.addOnVariant?.addon + " + " + "$" + variant.addOnVariant?.surCharge?.set_price}
        </button>
    );
};