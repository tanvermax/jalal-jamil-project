import AddProduct from "@/components/layout/AdminLayoute/AddProduct/AddProduct";
import AdminOrderTrack from "@/components/layout/AdminLayoute/AdminOrderTrack/AdminOrderTrack";

import Allproduct from "@/components/layout/AdminLayoute/Allproduct";
import Pricestoks from "@/components/layout/AdminLayoute/Pricestock/Pricestoks";
import Shope from "@/components/layout/AdminLayoute/Shop/Shope";
import type { ISidebarItem } from "@/types";

 export const adminSidebarItem:ISidebarItem[] = [
    {
      title: "Admin Dashboard",
      url: "#",
      items: [
        
        {
          title: "All Product",
          url: "/admin/users",
          component:Allproduct
        },
        {
          title: "Order",
          url: "/admin/order",
          component:AdminOrderTrack
        },
        {
          title: "Add Product",
          url: "/admin/add-product",
          component:AddProduct

        },
        {
          title: "Stock Inventory(Price Stocks)",
          url: "/admin/pricestocks",
          component:Pricestoks

        },
        {
          title: "Sku",
          url: "/admin/sku",
          component:Shope

        },
      ],
    },
    
  ]