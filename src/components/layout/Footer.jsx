import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrivacyPolicy from "@/pages/privacypolicy.jsx";

const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Projects", path: "/projects" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
];
const serviceLinks = [
    { label: "Consultancy", path: "/services" },
    { label: "Project Management", path: "/services" },
    { label: "Technical Support", path: "/services" },
    { label: "HR Solutions", path: "/services" },
    { label: "Overseas Recruitment", path: "/overseas-recruitment" },
    { label: "Equipment Supply", path: "/equipment" },
];
export default function Footer() {
    return (<footer className="bg-[#001a33] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C9A227] rounded-md flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white"/>
              </div>
              <div>
                <p className="font-bold text-base leading-tight">South Asia</p>
                <p className="text-[#C9A227] text-xs font-medium tracking-wider">CONSULTANCY</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              South Asia Consultancy is a leading professional services firm delivering expert consultancy, project management, and HR solutions across South Asia and beyond.
            </p>
            <div className="flex gap-3">
              {[
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Youtube, href: "#" },
        ].map(({ icon: Icon, href }, i) => (<a key={i} href={href} className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A227] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4"/>
                </a>))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#C9A227] mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (<li key={link.label}>
                  <Link to={link.path} className="text-white/70 hover:text-[#C9A227] text-sm transition-colors">
                    → {link.label}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#C9A227] mb-4 uppercase tracking-wider text-sm">
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (<li key={link.label}>
                  <Link to={link.path} className="text-white/70 hover:text-[#C9A227] text-sm transition-colors">
                    → {link.label}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-[#C9A227] mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex gap-2 text-sm text-white/70 hover:text-[#C9A227]">
                <MapPin className="w-4 h-4 text-[#C9A227]  mt-0.5 flex-shrink-0"/>
                <span>House 42, Road 11, Banani, Dhaka 1213, Bangladesh</span>
              </div>
              <div className="flex gap-2 text-sm text-white/70 hover:text-[#C9A227]">
                <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0"/>
                <span>+880 2 9876543</span>
              </div>
              <div className="flex gap-2 text-sm text-white/70 hover:text-[#C9A227]">
                <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0"/>
                <span>info@southasiaconsultancy.com</span>
              </div>
            </div>
            <h4 className="font-semibold text-[#C9A227] mb-3 uppercase tracking-wider text-sm">
              Newsletter
            </h4>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm h-9 flex-1"/>
              <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white h-9 px-3 text-xs">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} South Asia Consultancy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacypolicy" className="hover:text-white/80">Privacy Policy</Link>
            <Link to="#" className="hover:text-white/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>);
}
