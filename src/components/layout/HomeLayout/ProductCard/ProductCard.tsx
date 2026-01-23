// hooks/useTextTruncate.ts
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';
import { useCart } from '@/redux/hooks/useCart';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
interface productCardPropsa {
    id: string,
    name: string,
    price: number,
    SpecialPrice: number,
    image: string
    isLoading?: boolean

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
export default function ProductCard({ id, name, price, SpecialPrice, image, isLoading }: productCardPropsa) {
    const { addToCart } = useCart();
    const { textRef, isTruncated, showMore, setShowMore } = useTextTruncate(2);
    const { data: userInfo } = useUserInfoQuery(undefined);

    const finalPrice = price || SpecialPrice
    const handleAddToCart = async () => {
        try {
            await addToCart({
                productId: id, // This is now "Product ID" from Daraz
                quantity: 1,
                userId: userInfo?.data?._id,
                price: finalPrice,
                title: name,
                images: image
            });
            toast('Product added to cart successfully!');
        } catch (error) {
            console.error('Failed to add product to cart:', error);
        }
    };
    const discouunt = Math.round(SpecialPrice-price);


    const discountPercentage = Math.round(((discouunt / SpecialPrice) * 100));

    // console.log(discountPercentage)
    if (isLoading) {
        return (
            <div className="flex items-center gap-4 min-h-[90vh]">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>)


    }

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
                <Link to={`/pricestocks/${id}`}>
                    <div className="mb-2">
                        <h2
                            ref={textRef}
                            className={`hover:underline md:text-base text-xs font-semibold  ${!showMore ? 'line-clamp-2' : ''
                                }`}
                        >
                            {name}
                        </h2>
                        {
                            !price ? null : (
                                <Badge variant="destructive">{discountPercentage ? (
                                    <div className=" text-[8px] md:text-[12px] font-bold  rounded-md ">
                                        {discountPercentage}% OFF
                                    </div>
                                ) : null}
                                </Badge>
                            )
                        }
                        {isTruncated && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowMore(!showMore);
                                }}
                                className="text-blue-500 p-1 md:text-sm text-xs mt-1 hover:underline"
                            >
                                {showMore ? 'Show less' : 'Show more'}
                            </button>

                        )}
                    </div>
                </Link>





                {/* Price */}
                {
                    !price ? (
                        <span className="md:text-lg text-xs font-bold text-red-600">
                            ৳{SpecialPrice.toFixed(2)}
                        </span>) : <div className="flex items-center gap-2 mb-4">
                        {SpecialPrice && (
                            <span className="text-xs text-gray-500 line-through">
                                ৳{SpecialPrice.toFixed(2)}
                            </span>
                        )}
                        <span className="md:text-lg text-xs font-bold text-red-600">
                            ৳{price.toFixed(2)}
                        </span>
                    </div>
                }


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