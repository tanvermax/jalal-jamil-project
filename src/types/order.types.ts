import { Types } from 'mongoose';

// 1. Product Interface
// This represents the data for the actual products in your store
export interface IProduct {
  _id: string | Types.ObjectId;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  slug: string;
  images: string;
  brand: string;
  sku?: string;
  tags?: string[];
  isActive: boolean;
}

// 2. Order Item Interface
// This is what goes into the 'orderedItems' array
export interface IOrderItem {
  _id?: string | Types.ObjectId; // The unique ID for this specific cart entry
  product: string | Types.ObjectId | IProduct; // Can be just ID or populated with full Product data
  quantity: number;
  price: number; // Stored at time of adding to cart to handle price changes
}

// 3. Order / Cart Interface
// This is the main document you saw in your console
export interface IOrder {
  _id: string | Types.ObjectId;
  user?: string | Types.ObjectId; // Optional for Guest checkout
  orderedItems: IOrderItem[];
  totalPrice: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  paymentStatus: 'Pending' | 'Success' | 'Failed';
  shippingAddress?: {
    city: string;
    address: string;
    phone: string;
  };
  isLoading:boolean,
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

// types/cart.types.ts
export interface ICartItem {
    _id: string;
    product: string | number;
    quantity: number;
    price: number;
    title?: string;
    image?: string;
}

export interface ICartData {
    _id?: string;
    userId?: string;
    orderedItems: ICartItem[];
    totalPrice: number;
    status?: string;
    paymentStatus?: string;
}