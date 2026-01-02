import React, { useState } from 'react';
import { useParams } from 'react-router'; // URL থেকে ID নেওয়ার জন্য
import {
  Check, Minus, Plus, Facebook,
  Twitter, MessageCircle, ChevronLeft,
  ChevronRight, Info
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {  useProductDetailsQuery } from '@/redux/features/product/product.api';
import { useCart } from '@/redux/hooks/useCart';

// ডাটা টাইপ ডিফাইন করা
interface Product {
  _id: number;
  title: string;
  price: number;
  oldPrice: number;
  images: string;
  description: string;
  category: string[];
  code: string;
  brand?: string;
  sku?: string;
  stock?: number;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // Route থেকে ID ধরবে
  const { addToCart, isLoading: isAddingToCart } = useCart();

  const { data, isLoading } = useProductDetailsQuery(id) as { data: Product; isLoading: boolean };
  const [quantity, setQuantity] = useState<number>(1);
  // const [activeImg, setActiveImg] = useState<number>(0);
  // const [product, setProduct] = useState<Product | null>(null);
  // console.log(id);
  console.log(data);

  if (!data) return <div className="p-10 text-center">Loading...</div>;
  if (isLoading) return <div className="p-10 text-center">Loading...</div>;

  const discountPercentage = Math.round(((data.oldPrice - data.price) / data.oldPrice) * 100);


 const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: data._id,
        quantity: quantity
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
    <div className="container mx-auto px-4 py-8 bg-white max-w-7xl animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* --- LEFT: GALLERY --- */}
        <div className="space-y-4">
          <div className="relative group rounded-xl overflow-hidden border border-gray-100 shadow-md bg-gray-50">
            <img
              src={data.images}
              alt={data.title}
              className="w-full aspect-square object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full shadow-lg h-10 w-10"
              // onClick={() => setActiveImg(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full shadow-lg h-10 w-10"
              // onClick={() => setActiveImg(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-md border-2 transition-all overflow-hidden ${activeImg === idx ? 'border-[#ff7900] shadow-sm' : 'border-transparent hover:border-gray-200'
                  }`}
              >
                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div> */}
        </div>

        {/* --- RIGHT: INFO --- */}
        <div className="flex flex-col space-y-6">
          <header>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {data?.title}
            </h1>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm text-gray-500">Status:</span>
              {Number(data.stock) > 0 ? (
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">In Stock</Badge>
              ) : (
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">Stock out</Badge>
              )}
            </div>
          </header>

          <div className="flex items-center gap-4 bg-[#fffbf5] p-5 rounded-xl border border-orange-50">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#ff7900]">৳{data?.price}</span>
              {/* <span className="text-xl text-gray-400 line-through font-medium">৳{data.data.oldPrice}</span> */}
            </div>
            <Badge className="bg-[#ff7900] text-white border-none font-bold">
              {discountPercentage}% OFF
            </Badge>
          </div>

          <div className="space-y-3 py-2 border-b border-gray-100">
            {/* {highlights.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="bg-gray-100 rounded-full p-0.5 mt-1">
                  <Check className="h-3.5 w-3.5 text-gray-600" />
                </div>
                <p className="text-gray-700 text-[15px]">{item}</p>
              </div>
            ))} */}
            <div className="flex gap-3  items-center">
              <div className="bg-gray-100 rounded-full p-0.5 mt-1">
                <Check className="h-3.5 w-3.5 text-gray-600" />
              </div>
              <p className="text-gray-700 text-[15px]">{data.description}</p>
            </div>
          </div>


          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Info className="h-4 w-4 text-orange-500" /> এই প্যাকেজে যা যা পাচ্ছেন:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {/* {packageContents.map((content, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-300 shrink-0" />
                  {content}
                </li>
              ))} */}
            </ul>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center border-2 border-gray-100 rounded-lg overflow-hidden h-12">
              <button disabled={isAddingToCart}
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 hover:bg-gray-50 transition-colors h-full"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="px-6 font-bold text-lg min-w-[60px] text-center">{quantity}</div>
              <button  disabled={isAddingToCart}
                onClick={() => setQuantity(q => q + 1)}
                className="px-4 hover:bg-gray-50 transition-colors h-full"
              >
               
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button 
            onClick={handleAddToCart} 
            className="flex-1 h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg shadow-md transition-all active:scale-95"
            disabled={isAddingToCart}
          >
            {isAddingToCart ? 'Adding...' : 'Add to Cart'}
          </Button>
            <Button className="flex-1 h-12 bg-[#ff4d4d] hover:bg-red-600 text-white font-bold text-lg shadow-md transition-all active:scale-95">
              Buy Now
            </Button>
          </div>

          <div className="pt-6 border-t border-gray-100 space-y-3 text-sm text-gray-600">
            <p><span className="font-bold text-gray-900">CODE:</span> <span className="text-gray-500">{data.sku}</span></p>
            <p><span className="font-bold text-gray-900">BAND:</span> <span className="text-gray-500">{data.brand}</span></p>
            <p>
              <span className="font-bold text-gray-900">CATEGORY : </span>
              {/* {product.category.map((cat, idx) => (
                <span key={idx} className="text-[#ff7900] ml-1 hover:underline cursor-pointer font-medium">
                  {cat}{idx < product.category.length - 1 ? ',' : ''}
                </span>
              ))} */}
              {data?.category}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="font-bold text-gray-900 uppercase tracking-wider text-xs">Share Now:</span>
              <div className="flex gap-4">
                <Facebook className="h-5 w-5 text-[#1877F2] cursor-pointer hover:-translate-y-1 transition-transform" />
                <MessageCircle className="h-5 w-5 text-[#25D366] cursor-pointer hover:-translate-y-1 transition-transform" />
                <Twitter className="h-5 w-5 text-[#1DA1F2] cursor-pointer hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;