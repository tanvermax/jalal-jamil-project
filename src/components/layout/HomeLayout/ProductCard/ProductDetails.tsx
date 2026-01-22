import { useState } from 'react';
import { useParams } from 'react-router';
import {
  Minus, Plus, Facebook,
  Twitter, MessageCircle, ChevronLeft,
  ChevronRight, Info
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/redux/hooks/useCart';
import { toast } from 'sonner';
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';
import { usePricestockDetailsQuery } from '@/redux/features/product/product.api';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// 1. Updated Interface to match your new API Data
interface Product {
  _id: string;
  "Product ID": number;
  "*Product Name(English)": string;
  "Product Name(Bengali) look function": string;
  "Shop SKU": string;
  "*Quantity": number;
  "*Price": number;
  "SpecialPrice": number;
  Highlights: string;
  images: string;
  description: string;
  "White Background Image"?: string; // Added new field
  images2?: string;
  images3?: string;
  images4?: string;
  images5?: string;
  image6?: string;
}

const ProductDetails = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const { id } = useParams<{ id: string }>();
  const { addToCart, isLoading: isAddingToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImg, setActiveImg] = useState<number>(0);

  const {
    data: apiResponse,
    isLoading,
    refetch
  } = usePricestockDetailsQuery(id);

  const product = apiResponse?.data?.[0] as Product;

  // 2. Updated Image Gathering Logic
  // This filters out duplicates (like if White Background Image is same as images)
  const allImages = product ? Array.from(new Set([
    product.images,
    product["White Background Image"],
    product.images2,
    product.images3,
    product.images4,
    product.images5,
    product.image6
  ])).filter((img): img is string => Boolean(img)) : [];

  if (isLoading) {
    return <div className="p-10 text-center animate-pulse"> <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card></div>;
  }

  if (!product) {
    return <div className="p-10 text-center text-red-500">Product not found</div>;
  }

  const handleAddToCart = async () => {
    try {
      await addToCart({
        userId: userInfo?.data?._id,
        productId: product._id,
        quantity: quantity,
        price: product["SpecialPrice"] || product["*Price"], // Use special price if available
        title: product["*Product Name(English)"],
        images: product.images
      });
      refetch();
      toast.success('Product added to cart!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to add product');
    }
  };

  const discountPercentage = product["SpecialPrice"]
    ? Math.round(((product["*Price"] - product["SpecialPrice"]) / product["*Price"]) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* --- LEFT: GALLERY --- */}
        <div className="space-y-4">
          <div className="relative group rounded-xl overflow-hidden border border-gray-100 shadow-md bg-white">
            <img
              src={allImages[activeImg]}
              alt={product["*Product Name(English)"]}
              className="w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {allImages.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="secondary" size="icon" className="rounded-full shadow-lg h-10 w-10"
                  onClick={() => setActiveImg(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary" size="icon" className="rounded-full shadow-lg h-10 w-10"
                  onClick={() => setActiveImg(prev => prev === allImages.length - 1 ? 0 : prev + 1)}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>

          {allImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-md border-2 transition-all overflow-hidden ${activeImg === idx ? 'border-[#ff7900] shadow-md' : 'border-transparent hover:border-gray-200'
                    }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- RIGHT: INFO --- */}
        <div className="flex flex-col space-y-6">
          <header>
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              {product["*Product Name(English)"] == product["Product Name(Bengali) look function"] ? product["*Product Name(English)"] : <>{product["Product Name(Bengali) look function"]} -{product["*Product Name(English)"]}</>}
            </h1>
            <div className="flex items-center gap-2 mt-4">
              {Number(product["*Quantity"]) > 0 ? (
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 px-3 py-1">
                  ● In Stock ({product["*Quantity"]} units)
                </Badge>
              ) : (
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">Out of Stock</Badge>
              )}
            </div>
          </header>

          {/* Price Section */}
          <div className="bg-[#fffbf5] p-6 rounded-2xl border border-orange-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                {product["SpecialPrice"] ? (
                  <>
                    <span className="text-sm text-gray-500 line-through">৳ {product["*Price"]}</span>
                    <span className="text-4xl font-black text-[#ff7900]">৳ {product["SpecialPrice"]}</span>
                  </>
                ) : (
                  <span className="text-4xl font-black text-[#ff7900]">৳ {product["*Price"]}</span>
                )}
              </div>
              {discountPercentage > 0 && (
                <Badge className="bg-orange-500 text-white px-3 py-1 text-md font-bold animate-bounce">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Highlights */}
          {product.Highlights && (
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <Info className="h-5 w-5 text-orange-500" />
                Product Details
              </h3>
              <div
                className="prose prose-sm max-w-none text-gray-600 border-l-4 border-orange-100 pl-4"
                dangerouslySetInnerHTML={{ __html: product.Highlights }}
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center border-2 border-gray-200 rounded-xl h-14 bg-white">
              <button
                disabled={isAddingToCart || quantity <= 1}
                onClick={() => setQuantity(q => q - 1)}
                className="px-5 hover:bg-gray-50 h-full transition-colors disabled:opacity-30"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="px-6 font-bold text-xl min-w-[60px] text-center">{quantity}</span>
              <button
                disabled={isAddingToCart}
                onClick={() => setQuantity(q => q + 1)}
                className="px-5 hover:bg-gray-50 h-full transition-colors"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              className="flex-1 h-14 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xl rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95 disabled:opacity-50"
              disabled={isAddingToCart || product["*Quantity"] === 0}
            >
              {isAddingToCart ? 'Processing...' : product["*Quantity"] === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>

          {/* Product Footer */}
          <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-y-3 text-sm text-gray-500">
            <p><span className="font-semibold text-gray-800">Product ID:</span> {product["Product ID"]}</p>
            <p><span className="font-semibold text-gray-800">Shop SKU:</span> {product["Shop SKU"]}</p>

            <div className="col-span-2 flex items-center gap-4 pt-4">
              <span className="font-bold uppercase tracking-widest text-[10px] text-gray-400">Share This:</span>
              <div className="flex gap-4">
                <Facebook className="h-5 w-5 text-[#1877F2] hover:scale-110 transition-transform cursor-pointer" />
                <MessageCircle className="h-5 w-5 text-[#25D366] hover:scale-110 transition-transform cursor-pointer" />
                <Twitter className="h-5 w-5 text-[#1DA1F2] hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;