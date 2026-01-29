

import { useState } from "react";
// import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/JALAL JAMIL PROJECT COMPANY.png";

import {
  Home,
  ShoppingBag,
  // Tag,
  // Store,
  MapPin,
  Users,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router";


const navItems = [
  { href: "/", label: "Home", active: true, icon: Home },
  { href: "/About", label: "About", icon: ShoppingBag },
  // { href: "/offers", label: "Offers", icon: Tag },
  // { href: "/brands", label: "Brands", icon: Store },
  // { href: "/facebook", label: "Facebook", icon: Facebook },
  { href: "/companies", label: "Companies", icon: MapPin },
  { href: "/service", label: "Services", icon: Users },
  { href: "/contact", label: "Contact", icon: HelpCircle },
];
// const navItems = [
//   nav:"Home",
//    "About",
//    "Companies",
//    "Services",
//    "Contact"];

export default function Navbar() {
  // 1. State to track the active item
  const [active, setActive] = useState("Home");
  // 2. State to control the mobile sheet (drawer)
  const [isOpen, setIsOpen] = useState(false);

  // const handleNavClick = (item: any) => {
  //   setActive(item);
  //   setIsOpen(false); // Close mobile menu when an item is clicked
  // };

  return (
    <header className="sticky top-0 z-50  border-b">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">

        {/* Logo Section */}
        <div className="font-bold   text-lg w-72 ">
          <img src={logo1} className="object-cover md:h-24 h-16 " alt="Logo Desktop" />
          {/* <img src={logo} className="object-cover  w-20 py-2 md:hidden block" alt="Logo Mobile" /> */}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              to={item.href}
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`cursor-pointer px-5 py-2  transition-all duration-300 ${active === item.label
                  ? "bg-[#BAA26D] text-white shadow-md" // Active Style
                  : "text-gray-600 hover:bg-gray-100"    // Inactive Style
                }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu size={24} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] pt-12">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  to={item.href}
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className={`cursor-pointer px-5 py-2 rounded-md transition-all duration-300 ${active === item.label
                      ? "bg-[#B8A471] text-white shadow-md" // Active Style
                      : "text-gray-600 hover:bg-gray-100"    // Inactive Style
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

      </nav>
    </header>
  );
}