/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import ProductCard from '../ProductCard/ProductCard';
import { useAllpstockQuery } from "@/redux/features/product/product.api";
import { Link } from "react-router";


export default function NewProduct() {
    // const { data } = useAllproductQuery(undefined);
    const { data } = useAllpstockQuery(undefined)
    console.log(data);
    return (
        <div className="container mx-auto px-4">
            <div className="
            md:text-base text-[10px] px-2 flex
             justify-between items-center gap-4 my-10
            md:px-4 lg:px-6">
                <h1 className="
                text-xs md:text-2xl font-bold 
                text-gray-900">
                    NEW PRODUCT
                </h1>
                <div>
                   <Link to={"/shop"}> <Button className="
                    md:text-md text-[10px]">
                        View All
                    </Button></Link>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-10">
                {data?.slice(0,20).map((product: any) => (
                    <ProductCard
                        key={product._id}
                        // Use the MongoDB _id or Product ID
                        id={product._id}
                        // Daraz sheets usually don't have "oldPrice" unless specified
                        oldPrice={0}
                        // Map Daraz field "*Product Name(English)"
                        name={product["*Product Name(English)"]}
                        // Map Daraz field "*Price"
                        price={parseFloat(product["*Price"]) || 0}
                        // IMPORTANT: 'pricestock' usually lacks images. 
                        // If it's not there, you might need a placeholder or join data.
                        image={product.images || "https://via.placeholder.com/300"}
                    />
                ))}
            </div>
            <div className="text-center ">
                   <Link to={"/shop"}> <Button className="
                    md:text-md text-[10px]">
                        View All
                    </Button></Link>
                </div>
        </div>
    );
}