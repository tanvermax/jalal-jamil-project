/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming Shadcn UI
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"; // Assuming Shadcn UI
import { Loader2, Search, SlidersHorizontal } from "lucide-react";
import ProductCard from '../HomeLayout/ProductCard/ProductCard';
import { useAllpstockQuery } from '@/redux/features/product/product.api';

export default function HomeShope() {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Pass parameters to RTK Query if your backend supports them
  const { data, isLoading, isFetching } = useAllpstockQuery({
    page,
    search: searchTerm,
    sort: sortBy
  });

  useEffect(() => {
    if (data) {
      setAllProducts((prev) => (page === 1 ? data : [...prev, ...data]));
    }
  }, [data, page]);

  // Logic for filtering and sorting on the frontend if your API doesn't do it
  const displayProducts = [...allProducts]
    .filter(p => p["*Product Name(English)"].toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const priceA = a.SpecialPrice || a["*Price"];
      const priceB = b.SpecialPrice || b["*Price"];
      if (sortBy === "lowToHigh") return priceA - priceB;
      if (sortBy === "highToLow") return priceB - priceA;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 md:py-10 py-5">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:mb-10 mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight whitespace-nowrap">
          Explore Our Collection
        </h2>

        {/* Search and Sort Controls */}
        <div className="flex flex-1 items-center gap-3 max-w-2xl w-full">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 h-11 bg-gray-50/50 border-gray-200 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[180px] h-11 bg-gray-50/50 border-gray-200">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Newest</SelectItem>
              <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
              <SelectItem value="highToLow">Price: High to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {displayProducts.map((product: any) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product["*Product Name(English)"]}
            price={product.SpecialPrice || product["*Price"]}
            SpecialPrice={product.SpecialPrice ? product["*Price"] : undefined}
            image={product.images || "/placeholder-image.png"}
            isLoading={false}
          />
        ))}

        {isLoading && page === 1 && (
          [...Array(10)].map((_, i) => (
            <div key={i} className="h-72 bg-gray-100 animate-pulse rounded-xl" />
          ))
        )}
      </div>

      {/* Empty State */}
      {displayProducts.length === 0 && !isLoading && (
        <div className="text-center py-20 text-gray-500">
          No products found matching your search.
        </div>
      )}

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        {allProducts.length < (data?.meta?.total || 0) && (
          <Button
            size="lg"
            variant="outline"
            onClick={() => setPage(prev => prev + 1)}
            disabled={isFetching}
            className="min-w-[200px] border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold"
          >
            {isFetching ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...</>
            ) : (
              "Load More Products"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}