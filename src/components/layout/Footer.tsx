import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (

    
    <footer className="bg-[#BAA26D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 text-black">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Jalal Jamil Project Company
            </h3>
            <p className="text-sm leading-relaxed">
              A Saudi-based group of companies delivering construction,
              logistics, food services, and manpower solutions across
              the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Our Companies</li>
              <li className="hover:text-black cursor-pointer">Services</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-black mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Construction Projects</li>
              <li>Logistics & Transportation</li>
              <li>Food Services</li>
              <li>Manpower Supply</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-black mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Saudi Arabia</li>
              <li>📞 +966 XX XXX XXXX</li>
              <li>✉️ info@jalaljamil.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-10 bg-gray-700" />

        {/* Bottom Bar */}
        <div className="flex  flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-900">
          <p>
            © {new Date().getFullYear()} Jalal Jamil Project Company.
            All rights reserved.
          </p>

          <p>
            Designed & Developed by <a
                                href="https://portfolio-e021a.web.app"
                                className="font-medium text-white hover:underline underline-offset-4"
                            >
                               Shafayet_Hossain_Tanvir
                            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
