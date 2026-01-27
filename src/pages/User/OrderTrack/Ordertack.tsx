
// import { useAllOrderQuery } from "@/redux/features/order/Order.api";
// import { OrderTrackCard } from "./OrderTrackCard";
// import { Skeleton } from "@/components/ui/skeleton";
// import type { Order } from "@/types/cart";

/* ================== TYPES ================== */



export default function OrderTrack() {
  // const { data: response, isLoading } = useAllOrderQuery(undefined);

  // const orders: Order[] = response?.data ?? [];
  // const shippedOrders = orders.filter(
  //   (order) => order.status === "Shipped"
  // );

  // if (isLoading) {
  //   return (
  //     <div className="space-y-4 max-w-5xl mx-auto">
  //       {[...Array(2)].map((_, i) => (
  //         <Skeleton key={i} className="h-48 w-full rounded-xl" />
  //       ))}
  //     </div>
  //   );
  // }

  // if (shippedOrders.length === 0) {
  //   return (
  //     <p className="text-center text-muted-foreground">
  //       No shipped orders found
  //     </p>
  //   );
  // }

 return (
    <div className="space-y-6 max-w-5xl mx-auto px-4">
      {/* {shippedOrders.map((order) => (
        <OrderTrackCard key={order._id} order={order} />
      ))} */}
    </div>
  );
}
