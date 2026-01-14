// hooks/useTextTruncate.ts
import { Button } from '@/components/ui/button';
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';
import { useCart } from '@/redux/hooks/useCart';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
interface productCardPropsa {
    id: string,
    name: string,
    price: number,
    oldPrice: number,
    image: string

}
// eslint-disable-next-line react-refresh/only-export-components
export const useTextTruncate = (maxLines: number = 2) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const lineHeight = parseInt(getComputedStyle(textRef.current).lineHeight);
            const maxHeight = lineHeight * maxLines;
            const actualHeight = textRef.current.scrollHeight;

            setIsTruncated(actualHeight > maxHeight);
        }
    }, [maxLines]);

    return { textRef, isTruncated, showMore, setShowMore };
};

// Updated ProductCard component
export default function ProductCard({ id, name, price, oldPrice, image }: productCardPropsa) {
    const { addToCart } = useCart();
    const { textRef, isTruncated, showMore, setShowMore } = useTextTruncate(2);
    const { data: userInfo } = useUserInfoQuery(undefined);

    const handleAddToCart = async () => {
        try {
            await addToCart({
                productId: id,
                quantity: 1,
                userId: userInfo?.data?._id,
                price: price,
                title: name,
                images: image
            });
            toast('Product added to cart successfully!');
        } catch (error) {
            console.error('Failed to add product to cart:', error);
        }
    };

    return (
        <div className="card w-full shadow-xl border overflow-hidden flex flex-col rounded-md h-full">
            {/* Image */}
            <div className="aspect-square overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="card-body md:p-4 p-2 flex flex-col flex-grow">
                <Link to={`/product/${id}`}>
                    <div className="mb-2">
                        <h2
                            ref={textRef}
                            className={`hover:underline md:text-base text-xs font-semibold  ${!showMore ? 'line-clamp-2' : ''
                                }`}
                        >
                            {name}
                        </h2>
                        {isTruncated && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowMore(!showMore);
                                }}
                                className="text-blue-500 md:text-sm text-xs mt-1 hover:underline"
                            >
                                {showMore ? 'Show less' : 'Show more'}
                            </button>
                        )}
                    </div>
                </Link>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                    {oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                            ৳{oldPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="md:text-lg text-xs font-bold text-red-600">
                        ৳{price.toFixed(2)}
                    </span>
                </div>

                {/* Button */}
                <div className="mt-auto">
                    <Button
                        onClick={handleAddToCart}
                        className="w-full"
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}