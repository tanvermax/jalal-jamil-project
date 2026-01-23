/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Truck, Package, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useAdminupdateOrderMutation, useAllOrderForAdminQuery } from '@/redux/features/order/Order.api';

export default function AdminOrderTrack() {
    // 1. Destructure data as 'orderResponse' to be clearer
    const { data: orderResponse, isLoading } = useAllOrderForAdminQuery(undefined);
    const [updateOrder, { isLoading: isUpdating }] = useAdminupdateOrderMutation();
    console.log("orderResponse",orderResponse)
    // State for courier info
    const [courierName, setCourierName] = useState<{ [key: string]: string }>({});
    const [trackingInfo, setTrackingInfo] = useState<{ [key: string]: string }>({});

    const handleStatusChange = async (orderId: string, newStatus: string) => {
        try {
            // Your backend now requires status, trackingId, and courierName
            const res = await updateOrder({
                id: orderId,
                status: newStatus,
                trackingId: trackingInfo[orderId] || "N/A",
                courierName: courierName[orderId] || "N/A"
            }).unwrap();
            
            if (res.success) {
                toast.success(`Order updated to ${newStatus}`);
            }
        } catch (err) {
            toast.error("Failed to update order. Check if all fields are filled.");
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Shipped': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
            case 'Cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100';
        }
    };

    if (isLoading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin h-10 w-10 text-orange-500" /></div>;

    // 2. Safely access the array from the response object
    const ordersList = orderResponse?.data || [];

    return (
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Package className="h-6 w-6 text-orange-600" />
                    Order Management
                </h2>
                <Badge variant="secondary">Total: {orderResponse?.meta?.total || 0}</Badge>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-gray-50">
                        <TableRow>
                            <TableHead>Order Details</TableHead>
                            <TableHead>Customer / Shipping</TableHead>
                            <TableHead>Courier Info</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ordersList.length > 0 ? (
                            ordersList.map((order: any) => (
                                <TableRow key={order._id}>
                                    <TableCell>
                                        <p className="font-bold text-xs">#{order._id.slice(-6).toUpperCase()}</p>
                                        <p className="text-orange-600 font-semibold">৳{order.grandTotal}</p>
                                        <Badge className={`${getStatusColor(order.status)} mt-1`}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm">
                                            <p className="font-semibold">{order.shippingAddress?.name || "No Name"}</p>
                                            <p className="text-gray-500 text-xs">{order.shippingAddress?.phone}</p>
                                            <p className="text-gray-400 text-[10px] flex items-center">
                                                <MapPin className="h-3 w-3 mr-1" /> {order.shippingAddress?.address}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <Input
                                                placeholder="Courier Name"
                                                className="h-7 w-40 text-[10px]"
                                                defaultValue={order.courierName}
                                                onChange={(e) => setCourierName({ ...courierName, [order._id]: e.target.value })}
                                            />
                                            <Input
                                                placeholder="Tracking ID"
                                                className="h-7 w-40 text-[10px]"
                                                defaultValue={order.trackingId}
                                                onChange={(e) => setTrackingInfo({ ...trackingInfo, [order._id]: e.target.value })}
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end items-center gap-2">
                                            <Select
                                                defaultValue={order.status}
                                                onValueChange={(val) => handleStatusChange(order._id, val)}
                                            >
                                                <SelectTrigger className="w-[110px] h-8 text-xs">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Pending">Pending</SelectItem>
                                                    <SelectItem value="Shipped">Shipped</SelectItem>
                                                    <SelectItem value="Completed">Completed</SelectItem>
                                                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <Button
                                                size="sm"
                                                disabled={isUpdating}
                                                className="h-8 bg-orange-600 hover:bg-orange-700"
                                                onClick={() => handleStatusChange(order._id, order.status)}
                                            >
                                                {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Truck className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-10 text-gray-400">
                                    No orders found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}