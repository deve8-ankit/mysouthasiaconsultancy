import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
        label: "Services",
        path: "/services",
        children: [
            { label: "All Services", path: "/services" },
            { label: "Drilling Services", path: "/services" },
            { label: "Workover & Completion", path: "/services" },
            { label: "Operation & Maintenance", path: "/services" },
            { label: "Oilfield Equipment Services", path: "/services" },
            { label: "Manpower Supply", path: "/services" },
        ],
    },
    {
        label: "Industries",
        path: "/industries",
        children: [
            { label: "Oil & Gas", path: "/industries" },
            { label: "Infrastructure", path: "/industries" },
            { label: "Construction", path: "/industries" },
            { label: "Power", path: "/industries" },
            { label: "Manufacturing", path: "/industries" },
        ],
    },
    { label: "Overseas Recruitment", path: "/overseas-recruitment" },
    { label: "Projects", path: "/projects" },
    { label: "Equipment", path: "/equipment" },
    { label: "Clients", path: "/clients" },
    { label: "Careers", path: "/careers" },
    { label: "Media", path: "/media" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
];
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#003366] shadow-lg" : "bg-[#003366]/95 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-[#C9A227] rounded-md flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white"/>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm lg:text-base leading-tight">South Asia</p>
              <p className="text-[#C9A227] text-xs font-medium tracking-wider">CONSULTANCY</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.slice(0, 12).map((item) => (<div key={item.label} className="relative" onMouseEnter={() => item.children && setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <Link to={item.path} className={`flex items-center gap-1 px-3 py-2 text-xs font-medium rounded transition-colors ${location.pathname === item.path
                ? "text-[#C9A227]"
                : "text-white/90 hover:text-[#C9A227]"}`}>
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3"/>}
                </Link>
                {item.children && openDropdown === item.label && (<motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute top-full left-0 bg-white shadow-xl rounded-md py-2 min-w-[180px] z-50 border border-gray-100">
                    {item.children.map((child) => (<Link key={child.label} to={child.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#003366] hover:text-white transition-colors">
                        {child.label}
                      </Link>))}
                  </motion.div>)}
              </div>))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden lg:inline-flex">
              <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white text-xs font-semibold px-4 py-2 h-9">
                Get a Quote
              </Button>
            </Link>
            <button className="xl:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="xl:hidden bg-[#002244] border-t border-white/10 overflow-hidden">
            <div className="max-h-[75vh] overflow-y-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (<div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link to={item.path} className={`flex-1 py-2 text-sm font-medium ${location.pathname === item.path ? "text-[#C9A227]" : "text-white/90"}`}>
                      {item.label}
                    </Link>
                    {item.children && (<button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} className="text-white/70 p-1">
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}/>
                      </button>)}
                  </div>
                  {item.children && mobileExpanded === item.label && (<div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (<Link key={child.label} to={child.path} className="block py-1.5 text-sm text-white/70 hover:text-[#C9A227]">
                          {child.label}
                        </Link>))}
                    </div>)}
                </div>))}
              <div className="pt-3 border-t border-white/10">
                <Link to="/contact">
                  <Button className="w-full bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </header>);
}
