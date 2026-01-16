/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, SeparatorHorizontal } from "lucide-react";

export default function PricestocksCard({ data }: { data: any }) {
  // Accessing keys with special characters
  const name = data["*Product Name(English)"];
  const price = data["*Price"];
  const quantity = data["*Quantity"];
  const status = data.status;
  const variation = data["Variations Combo"];
  const sku = data["Shop SKU"];

  return (
    <Card className="w-full rounded-2xl border-2 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <CardHeader className="bg-muted/20 p-5 pb-3">
        <div className="flex justify-between items-start gap-2">
          <div className="truncate">
            <p className="text-[10px] font-mono text-muted-foreground uppercase mb-1">
              SKU: {sku}
            </p>
            <CardTitle className="text-lg font-bold text-primary line-clamp-2 min-h-[3.5rem]">
              {name}
            </CardTitle>
          </div>
          <Badge
            variant={status === "active" ? "default" : "destructive"}
            className="capitalize text-[10px] px-2"
          >
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-4 flex-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground flex items-center gap-1 uppercase font-semibold">
               <DollarSign className="w-3 h-3 text-green-500" /> Price
            </p>
            <p className="text-lg font-bold">{price} <span className="text-xs font-normal">BDT</span></p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground flex items-center gap-1 uppercase font-semibold">
               <Package className={`w-3 h-3 ${quantity < 10 ? 'text-orange-500' : 'text-blue-500'}`} /> Stock
            </p>
            <p className={`text-lg font-bold ${quantity < 10 ? 'text-orange-600' : ''}`}>{quantity}</p>
          </div>
        </div>

        <SeparatorHorizontal className="my-4" />

        <div className="grid grid-cols-2 gap-y-3 text-[11px]">
          <div>
            <span className="text-muted-foreground block">Variation:</span>
            <span className="font-semibold">{variation || "N/A"}</span>
          </div>
          <div className="text-right">
            <span className="text-muted-foreground block">Product ID:</span>
            <span className="font-semibold">{data["Product ID"]}</span>
          </div>
        </div>

        {quantity < 10 && (
          <div className="mt-4 p-2 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg flex items-center gap-2 text-orange-700 text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Low stock alert
          </div>
        )}
      </CardContent>
    </Card>
  );
}