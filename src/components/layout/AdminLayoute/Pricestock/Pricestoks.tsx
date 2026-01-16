/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAllpstockQuery } from "@/redux/features/product/product.api";
import PricestocksCard from "./PricestocksCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, AlertTriangle, X } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function Pricestoks() {
  const { data, isLoading, isError } = useAllpstockQuery(undefined);
  
  // States for filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showLowStock, setShowLowStock] = useState(false);

  if (isLoading) return <div className="p-10 text-center font-bold">Loading Inventory...</div>;
  if (isError) return <div className="p-10 text-center text-red-500">Error loading inventory data</div>;

  // Combined Filter Logic
  const filteredData = data?.filter((item: any) => {
    const matchesSearch = 
      item["*Product Name(English)"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item["Shop SKU"]?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    
    // Low Stock Logic: Only show items with < 10 quantity if toggle is ON
    const matchesLowStock = showLowStock ? item["*Quantity"] < 10 : true;

    return matchesSearch && matchesStatus && matchesLowStock;
  });

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Stock Inventory</h1>
          <p className="text-muted-foreground">Monitor prices and availability for JCS Trading.</p>
        </div>

        {/* Control Bar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search product or SKU..." 
              className="pl-9 rounded-xl border-2 focus-visible:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
                <X 
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 cursor-pointer text-muted-foreground hover:text-foreground" 
                  onClick={() => setSearchTerm("")}
                />
            )}
          </div>

          {/* Status Select */}
          <Select onValueChange={setStatusFilter} defaultValue="all">
            <SelectTrigger className="w-[140px] rounded-xl border-2">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          {/* Low Stock Toggle Button */}
          <Button 
            variant={showLowStock ? "destructive" : "outline"} 
            className={`rounded-xl border-2 transition-all ${!showLowStock && 'hover:border-orange-500 hover:text-orange-500'}`}
            onClick={() => setShowLowStock(!showLowStock)}
          >
            <AlertTriangle className={`h-4 w-4 mr-2 ${showLowStock ? 'animate-pulse' : ''}`} />
            {showLowStock ? "Showing Low Stock" : "Low Stock Alert"}
          </Button>
        </div>
      </div>

      {/* Results Count Badge */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Showing {filteredData?.length} products</span>
        {showLowStock && (
            <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                Stock Warning Active
            </span>
        )}
      </div>

      {/* Grid Layout */}
      {filteredData?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item: any) => (
            <PricestocksCard key={item._id} data={item} />
          ))}
        </div>
      ) : (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed rounded-3xl bg-muted/10">
          <div className="bg-muted p-4 rounded-full mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground font-medium">No results found matching your filters.</p>
          <Button variant="link" onClick={() => {setSearchTerm(""); setStatusFilter("all"); setShowLowStock(false);}}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}