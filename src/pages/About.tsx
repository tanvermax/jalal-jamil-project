import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Car, ShieldCheck, Gauge, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 px-4 container mx-auto max-w-6xl">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">
          Since 2024
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Elevating Your Driving <span className="text-primary">Experience</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          At JCS Trading, we believe a car is more than just a machine—it's an extension of your lifestyle. 
          We specialize in premium car accessories that blend functionality with JDM-inspired style.
        </p>
      </section>

      <Separator className="my-12" />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We source only the highest quality components, from solar-powered aromatics to 
            precision-engineered interior upgrades. Our goal is to provide enthusiasts and 
            everyday drivers with accessories that reflect their passion for the road.
          </p>
          <ul className="space-y-4">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Quality Tested Products" },
              { icon: <Gauge className="w-5 h-5 text-primary" />, text: "Performance Driven Design" },
              { icon: <Globe className="w-5 h-5 text-primary" />, text: "Nationwide Shipping" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden border shadow-xl">
             {/* Replace with an actual high-quality car interior image */}
             <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Car Interior" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
             />
          </div>
        </div>
      </div>

      {/* Core Values / Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "5k+", label: "Happy Customers", icon: <Car /> },
          { title: "500+", label: "Premium Products", icon: <Gauge /> },
          { title: "24/7", label: "Customer Support", icon: <ShieldCheck /> },
          { title: "100%", label: "Authenticity", icon: <Globe /> },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm bg-muted/50">
            <CardContent className="pt-6 text-center">
              <div className="mb-2 flex justify-center text-primary">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Note */}
      <section className="mt-24 text-center bg-primary text-primary-foreground p-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Ride?</h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto">
          Join thousands of drivers who have transformed their vehicles with JCS Trading.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          Browse Collection
        </button>
      </section>
    </div>
  );
}