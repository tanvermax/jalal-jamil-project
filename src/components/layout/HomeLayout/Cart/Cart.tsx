/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Skeleton } from "@/components/ui/skeleton";
import { useAllOrderQuery } from '@/redux/features/order/Order.api';
import { toast } from 'sonner';
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';

const CartPage = () => {
    const { data: userInfo } = useUserInfoQuery(undefined);
    const { data: response, isLoading } = useAllOrderQuery(undefined);
    
    const [cartData, setCartData] = useState({
        orderedItems: [] as any[],
        totalPrice: 0,
        status: 'Pending'
    });


    console.log(cartData)
    useEffect(() => {
        if (userInfo?.data) {
            // Find the pending order from the API response
            const pendingOrder = response?.data?.find((o: any) => o.status === 'Pending');
            if (pendingOrder) {
                setCartData({
                    orderedItems: pendingOrder.orderedItems,
                    totalPrice: pendingOrder.totalPrice,
                    status: pendingOrder.status
                });
            }
        } else {
            // Logic for Guest Cart from LocalStorage
            const localItems = JSON.parse(localStorage.getItem('guestCart') || '[]');
            const total = localItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
            setCartData({
                orderedItems: localItems,
                totalPrice: total,
                status: 'Pending'
            });
        }
    }, [response, userInfo]);

    // Handlers (Keep your existing update/remove logic here)
    const onUpdateQuantity = async (productId: string, newQuantity: number) => {
        toast(`Updating quantity for ${productId} to ${newQuantity}`);
        // Implementation logic...
    };

    const onRemoveItem = async (productId: string) => {
        toast(`Removing item ${productId}`);
        // Implementation logic...
    };

    if (isLoading) return <CartLoadingSkeleton />;

    if (!cartData.orderedItems.length) {
        return <EmptyCartView />;
    }

    return (
        <div className="container mx-auto px-4 py-6 md:py-10">
            <div className="mb-6 md:mb-10">
                <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">Shopping Cart</h1>
                <p className="text-muted-foreground">Review your items before checkout</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card className="overflow-hidden border shadow-sm rounded-2xl">
                        <div className="p-4 md:p-6 bg-muted/20 border-b">
                            <h2 className=" font-semibold">Items ({cartData.orderedItems.length})</h2>
                        </div>

                        {/* Mobile View Card List */}
                        <div className="md:hidden divide-y">
                            {cartData.orderedItems.map((item: any) => (
                                <div key={item._id} className="p-2 space-y-2">
                                    <div className="flex gap-4">
                                        <img 
                                            src={item.product?.images} 
                                            alt={item.product?.title} 
                                            className="w-20 h-20 object-cover rounded-lg border" 
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm line-clamp-2">{item.product?.title}</h3>
                                            <p className="text-primary font-bold mt-1">৳{item.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border rounded-md">
                                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.product._id, item.quantity - 1)} disabled={item.quantity <= 1}><Minus className="h-3 w-3" /></Button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.product._id, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-red-500" onClick={() => onRemoveItem(item.product._id)}><Trash2 className="h-4 w-4" /></Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop View Table */}
                        <div className="hidden md:block">
                            <Table className=''>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead className="text-center">Quantity</TableHead>
                                        <TableHead className="text-right">Total Price</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cartData.orderedItems.map((item: any) => (
                                        <TableRow key={item._id}>
                                            <TableCell>
                                                <div className="flex items-center gap-4">
                                                    <img 
                                                        src={item.product?.images ? item.product?.images : item.images} 
                                                        alt={item.product?.title} 
                                                        className="w-16 h-16 object-cover rounded border bg-white" 
                                                    />
                                                    <div className="max-w-[300px]">
                                                        <p className="font-semibold text-sm line-clamp-1">{item.product?.title ? item.product?.title : item.title}</p>
                                                        <p className="text-xs text-muted-foreground">{item.product?.category}</p>
                                                        <p className="text-xs font-medium">Unit: ৳{item.price}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center justify-center gap-3">
                                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.product._id, item.quantity - 1)} disabled={item.quantity <= 1}><Minus className="h-3 w-3" /></Button>
                                                    <span className="font-bold">{item.quantity}</span>
                                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.product._id, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right font-bold text-lg">
                                                ৳{(item.price * item.quantity).toLocaleString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="icon" className="hover:bg-red-50 text-red-500" onClick={() => onRemoveItem(item.product._id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>

                {/* Summary Sidebar */}
                <div className="lg:col-span-1 ">
                    <Card className="sticky top-6 border-2 md:py-5 py-3 rounded-2xl">
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="md:space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-semibold">৳{cartData.totalPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span className="text-primary">৳{cartData.totalPrice.toLocaleString()}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full py-6 " size="lg">
                                Checkout Now
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

// Sub-components for cleaner code
const EmptyCartView = () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <ShoppingBag className="w-20 h-20 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Button className="mt-4">Start Shopping</Button>
    </div>
);

const CartLoadingSkeleton = () => (
    <div className="container mx-auto px-4 py-10 space-y-8">
        <Skeleton className="h-10 w-1/4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Skeleton className="lg:col-span-2 h-[400px]" />
            <Skeleton className="h-[300px]" />
        </div>
    </div>
);

export default CartPage;