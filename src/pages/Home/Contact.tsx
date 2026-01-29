import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO-friendly header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Get in touch with Jalal Jamil Project Company for inquiries,
            partnership opportunities, or project support across Saudi Arabia.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardHeader>
              <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form and we will get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Full Name" aria-label="Full Name" required />
                <Input type="email" placeholder="Email Address" aria-label="Email" required />
                <Input type="text" placeholder="Subject" aria-label="Subject" required />
                <Textarea placeholder="Your Message" aria-label="Message" rows={5} required />
                <Button type="submit" className="bg-[#BAA26D] hover:bg-emerald-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Company Info */}
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Our Contact Info</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#BAA26D] mt-1" />
                  <p>1234 Riyadh Street, Riyadh, Saudi Arabia</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#BAA26D] mt-1" />
                  <p>+966 55 123 4567</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#BAA26D] mt-1" />
                  <p>info@jalaljamil.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-md overflow-hidden">
              <CardHeader>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              </CardHeader>
              <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
