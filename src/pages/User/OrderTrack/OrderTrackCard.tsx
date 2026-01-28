// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import type { Order } from "@/types/cart";
// import {
//     Clock,

//     Truck,
//     CheckCircle,

// } from "lucide-react";

// // interface OrderTrackCardProps {
// //     order: Order;
// // }
// const statusSteps = [
//     { label: "Pending", icon: Clock },
//     { label: "Shipped", icon: Truck },
//     { label: "Completed", icon: CheckCircle },
// ];
// export function OrderTrackCard({ order }: OrderTrackCardProps) {
//     const currentStep = statusSteps.findIndex(
//         (step) => step.label === order.status
//     );

//     return (
//         <Card className="rounded-2xl border-2 p-2">
//             <CardHeader className="flex flex-row justify-between items-center">
//                 <CardTitle className="text-xs md:text-lg">
//                     Order #{order._id.slice(-6)}
//                 </CardTitle>
//                 <Badge>{order.status}</Badge>
//             </CardHeader>

//             <CardContent className="space-y-6">
//                 {/* Timeline */}
//                 <div className="flex justify-between">
//                     {statusSteps.map((step, index) => {
//                         const Icon = step.icon;
//                         const active = index <= currentStep;

//                         return (
//                             <div key={step.label} className="flex flex-col items-center">
//                                 <div
//                                     className={`h-9 w-9 rounded-full flex items-center justify-center
//                   ${active
//                                             ? "bg-primary text-white"
//                                             : "bg-muted text-muted-foreground"
//                                         }`}
//                                 >
//                                     <Icon size={16} />
//                                 </div>
//                                 <span className="text-xs mt-1">{step.label}</span>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <CardHeader className="flex flex-row justify-between items-center p-0">
//                 <CardTitle className="text-xs md:text-lg">
//                   Payment Method: Cash On Delivery
//                 </CardTitle>
//                 <Badge>{order.paymentStatus}</Badge>
//             </CardHeader>

//                 {/* Summary */}
//                 <div className="flex justify-between text-sm">
//                     <span>Total Items</span>
//                     <span>{order.orderedItems.length}</span>
//                 </div>

//                 <div className="flex justify-between font-semibold">
//                     <span>Grand Total</span>
//                     <span>৳{order.grandTotal}</span>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }
