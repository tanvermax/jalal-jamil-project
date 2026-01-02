// components/layout/HomeLayout/ProductCard/ProductCard.tsx

import { Button } from "@/components/ui/button";
import { useCart } from "@/redux/hooks/useCart";
import { Link } from "react-router";

interface ProductCardProps {
    id: number | string;
    name: string;
    price: number;
    oldPrice?: number; // Add optional oldPrice
    image: string;
    description: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductCard({ id, name, price, oldPrice, image, description }: ProductCardProps) {
    // console.log(id)

     const { addToCart, } = useCart();
   const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: id,
        quantity: 1,
      });
      
      // Optional: Show success message
      // toast.success('Product added to cart successfully!');
      
      // Optional: Reset quantity
      // setQuantity(1);
      
    } catch (error) {
      // Error is already handled in the hook, but you can add additional handling here
      console.error('Failed to add product to cart:', error);
      // toast.error('Failed to add product to cart');
    }
  };
    
    return (
        <div key={id} className="card w-full bg-base-100 shadow-xl border overflow-hidden">

            <img
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
            />
            <div className="card-body p-4">

                <Link to={`/product/${id}`}>
                    <h2 className="hover:underline card-title text-sm">
                        {name}
                    </h2>
                </Link>
                <div className="flex items-center gap-2">
                    {oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                            ${oldPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="text-base font-semibold text-red-600">
                        ${price.toFixed(2)}
                    </span>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Button onClick={handleAddToCart}  className="btn btn-sm btn-primary">Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}