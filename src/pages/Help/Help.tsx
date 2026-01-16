import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Mail, Phone, MessageSquare, Truck, ShieldCheck, HelpCircle } from "lucide-react";

export default function Help() {
  const faqs = [
    {
      question: "How do I install the Solar-Powered Helicopter Perfume?",
      answer: "Simply peel the adhesive film at the base and place it on a flat surface on your dashboard. Ensure the solar panels face direct sunlight for the rotor to spin automatically. No batteries required!"
    },
    {
      question: "What is your shipping policy within Bangladesh?",
      answer: "We offer delivery within 2-3 business days inside Dhaka (60৳) and 3-5 business days outside Dhaka (120৳)."
    },
    {
      question: "Do the JDM Racing Pendants come with scent refills?",
      answer: "Yes, all our JDM style pendants come pre-scented and include a 10ml concentrated essential oil bottle to refresh the fragrance whenever needed."
    },
    {
      question: "Can I return a product if it doesn't fit my car?",
      answer: "We offer a 7-day replacement warranty for manufacturing defects. Please ensure the product packaging remains intact for a smooth return process."
    }
  ];

  return (
    <div className="py-12 px-4 container mx-auto max-w-5xl">
      {/* Header & Search */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">How can we help you?</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Search our knowledge base or browse frequently asked questions.
        </p>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input 
            placeholder="Search for 'installation', 'delivery'..." 
            className="pl-10 h-12 rounded-full shadow-sm"
          />
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="hover:border-primary transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <Phone className="mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">Call Us</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            +880 1XXX-XXXXXX <br /> Sun-Thu, 10am-8pm
          </CardContent>
        </Card>

        <Card className="hover:border-primary transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <Mail className="mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">Email Support</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            support@jcstrading.com <br /> 24hr response time
          </CardContent>
        </Card>

        <Card className="hover:border-primary transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <MessageSquare className="mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">Live Chat</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            Chat with our experts <br /> via WhatsApp
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted/30 p-6 md:p-10 rounded-2xl border">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="text-primary" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Support Categories */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex gap-4 p-4 border rounded-xl items-start">
          <div className="bg-primary/10 p-3 rounded-lg text-primary">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">Order Tracking</h3>
            <p className="text-sm text-muted-foreground">Check the real-time status of your accessory delivery.</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 border rounded-xl items-start">
          <div className="bg-primary/10 p-3 rounded-lg text-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">Warranty Info</h3>
            <p className="text-sm text-muted-foreground">Learn about our 100% authenticity and damage protection.</p>
          </div>
        </div>
      </div>
    </div>
  );
}