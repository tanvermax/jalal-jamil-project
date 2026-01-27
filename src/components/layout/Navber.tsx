"use client";
import logo from "../../assets/images/logo.png"
import logo1 from "../../assets/images/JALAL JAMIL PROJECT COMPANY.png"

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = ["Home", "About", "Companies", "Services", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky  top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl  mx-auto px-6 flex items-center justify-between">
        <div className="font-bold text-lg  w-75   text-green-700">
          <img src={logo1} className=" object-cover hidden md:block " alt="" />
          <img src={logo} className=" object-cover w-25 py-2 md:py-0 md:hidden block " alt="" />
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer border-[1px] px-5 py-3   hover:bg-gray-200 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className=" rounded-md h-[50vh]" side="right">
            <ul className="flex flex-col  gap-4 p-4">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="font-medium hover:border-b-2 hover:border-gray-300 text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
