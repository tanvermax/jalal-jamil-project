import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useAllskuQuery } from "@/redux/features/sku/sku.api";
import { Badge } from "../../../ui/badge";

interface ISku {
  skuId: number;
  auditStatus: number;
  skuStatus: number;
}

interface ISkuRaw {
  _id: string;
  sku: ISku;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
interface IAllSkuResponse {
  success: boolean;
  message: string;
  isLoading: boolean;
  data: ISkuRaw[]; // This is the actual array we want
}
export default function Shope() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 1. Safe data fetching - RTK Query returns an object where 'data' is the property
  const { data: response, isLoading } = useAllskuQuery<IAllSkuResponse>(undefined);

  // 2. Extract the actual array safely
  const skus = response || [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = skus.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(skus.length / itemsPerPage);
  
const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  if (isLoading) return <p className="text-center py-10">Loading SKU data...</p>;

  return (
   <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">SKU List</h2>
        <Badge variant="outline" className="text-sm">Total: {skus.length}</Badge>
      </div>

      {/* Shadcn Table UI */}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Variation</TableHead>
              <TableHead>SKU ID</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <img 
                      src={item["Images1"]} 
                      alt="Product" 
                      className="w-10 h-10 object-cover rounded-md border" 
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span>{item["*Product Name(English)"]}</span>
                      <span className="text-xs text-muted-foreground uppercase">{item["SellerSKU"]}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground italic">
                    {item["Variations Combo"] || "None"}
                  </TableCell>
                  <TableCell>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs">
                      {item.sku?.skuId}
                    </code>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge 
                      variant={item.sku?.skuStatus === 1 ? "default" : "destructive"}
                      className={item.sku?.skuStatus === 1 ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {item.sku?.skuStatus === 1 ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Shadcn Pagination UI */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold">{indexOfFirstItem + 1}</span> to{" "}
          <span className="font-semibold">{Math.min(indexOfLastItem, skus.length)}</span> of{" "}
          <span className="font-semibold">{skus.length}</span>
        </p>
        
        <Pagination className="justify-end w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                onClick={() => paginate(currentPage - 1)} 
              />
            </PaginationItem>

            {/* Simple page number rendering */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              // Only show first page, last page, and pages around current page
              if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                return (
                  <PaginationItem key={page} className="cursor-pointer">
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => paginate(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <PaginationEllipsis key={page} />;
              }
              return null;
            })}

            <PaginationItem>
              <PaginationNext 
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                onClick={() => paginate(currentPage + 1)} 
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
