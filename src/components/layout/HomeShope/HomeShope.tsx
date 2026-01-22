/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ProductCard from '../HomeLayout/ProductCard/ProductCard';
import { useAllpstockQuery } from '@/redux/features/product/product.api';

export default function HomeShope() {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  // Pass page and limit to your RTK Query
  const { data, isLoading, isFetching } = useAllpstockQuery(undefined);
  console.log(data)

  // Append new data to existing products when data changes
  useEffect(() => {
    if (data) {
      // If it's the first page, replace. Otherwise, append unique items.
      setAllProducts((prev) => (page === 1 ? data : [...prev, ...data]));
    }
  }, [data, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
          Explore Our Collection
        </h2>
        <p className="text-sm text-muted-foreground">
          Showing {allProducts.length} of {data?.meta?.total || 0} Products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {allProducts.map((product: any) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product["*Product Name(English)"]}
            // Note: Using SpecialPrice if available, else original Price
            price={product.SpecialPrice || product["*Price"]}
            SpecialPrice={product.SpecialPrice ? product["*Price"] : undefined}
            image={product.images || "/placeholder-image.png"}
            isLoading={false}
          />
        ))}

        {/* Skeletons while loading first page */}
        {isLoading && page === 1 && (
          [...Array(8)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
          ))
        )}
      </div>

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        {allProducts.length < (data?.meta?.total || 0) && (
          <Button
            size="lg"
            variant="outline"
            onClick={handleLoadMore}
            disabled={isFetching}
            className="min-w-[200px] border-orange-500 text-orange-600 hover:bg-orange-50"
          >
            {isFetching ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More Products"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}