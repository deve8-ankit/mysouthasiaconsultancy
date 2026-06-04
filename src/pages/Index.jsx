import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, HardHat, Users, Settings, Globe, TrendingUp, Award, ChevronRight, Building2, Zap, Factory, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
const services = [

    { icon: HardHat, title: "Drilling Service", desc: "Complete drilling operations support including well planning, drilling supervision, and optimization of drilling parameters for oil and gas exploration and production." },
    { icon: HardHat, title: "Workover & Completion", desc: "Specialized workover and well completion services to maintain production efficiency and extend well life in mature oil and gas fields." },
    { icon: Settings, title: "Operation & Maintenance (O&M)", desc: "Rig maintenance, rotating equipment care, and field operations for offshore and onshore installations.O&M services" },
    { icon: Users, title: "Oilfield Equipment Services", desc: "SRP units, nitrogen pumping, mobile pumping, generators, and crude logistics aligned to wellsite demand.Nitrogen pumpingPower generation" },
    { icon: Globe, title: "Manpower Supply", desc: "Skilled workforce, rig crew deployment, and technical staffing for campaign peaks and long-term operations.Overseas recruitment & mobilisation" },
    { icon: TrendingUp, title: "Nitrogen Pumping Unit Services", desc: "We offer Nitrogen Pumping Unit services for various oilfield purposes. NPU is a hydraulic heat recovery Liquid Nitrogen Pump and vaporizer system." },

];
const industries = [
    { icon: Zap, name: "Oil & Gas", color: "bg-orange-100 text-orange-700" },
    { icon: Building2, name: "Infrastructure", color: "bg-blue-100 text-blue-700" },
    { icon: HardHat, name: "Construction", color: "bg-yellow-100 text-yellow-700" },
    { icon: Factory, name: "Manufacturing", color: "bg-purple-100 text-purple-700" },
    { icon: Zap, name: "Power & Energy", color: "bg-green-100 text-green-700" },
    { icon: Globe, name: "Telecommunications", color: "bg-red-100 text-red-700" },
];
const news = [
    {
        date: "July 10, 2025",
        category: "Projects",
        title: "SAC Awarded Major Infrastructure Contract in Chittagong Port Expansion",
        excerpt: "South Asia Consultancy has secured a landmark contract for consultancy services in the ongoing Chittagong Port expansion project.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e59d5781c3_ebb97b7ee8366585.png",
    },
    {
        date: "June 28, 2025",
        category: "Media",
        title: "SAC Participates in Regional Energy Summit 2025",
        excerpt: "Our team represented South Asia Consultancy at the Regional Energy Summit, highlighting our capabilities in the power sector.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_03b46aca15_f52b757a7198d53b.png",
    },
    {
        date: "June 15, 2025",
        category: "Careers",
        title: "SAC Expands Overseas Recruitment Division to Meet Growing Demand",
        excerpt: "In response to increased demand, our Overseas Recruitment division is scaling operations across the Middle East and Southeast Asia.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3f5a64909b_b212f14e03f871b2.png",
    },
];
const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Industry Clients" },
    { value: "15+", label: "Countries Served" },
];

// small clients list for homepage marquee
const clients = [
  { name: "Bangladesh Oil, Gas & Mineral Corporation", abbr: "BAPEX", sector: "Oil & Gas" },
  { name: "Power Grid Company of Bangladesh", abbr: "PGCB", sector: "Power" },
  { name: "Roads & Highways Department", abbr: "RHD", sector: "Infrastructure" },
  { name: "Bangladesh Bridge Authority", abbr: "BBA", sector: "Infrastructure" },
  { name: "Chittagong Port Authority", abbr: "CPA", sector: "Logistics" },
  { name: "Saudi Aramco", abbr: "ARAMCO", sector: "Oil & Gas" },
  { name: "BRAC", abbr: "BRAC", sector: "NGO / Development" },
  { name: "Bashundhara Group", abbr: "BG", sector: "Conglomerate" },
];

const sectorColors = {
  "Oil & Gas": "bg-orange-100 text-orange-700",
  "Power": "bg-green-100 text-green-700",
  "Infrastructure": "bg-blue-100 text-blue-700",
  "Logistics": "bg-purple-100 text-purple-700",
  "NGO / Development": "bg-pink-100 text-pink-700",
  "Conglomerate": "bg-gray-100 text-gray-700",
  "Development Finance": "bg-yellow-100 text-yellow-700",
  "Consultancy": "bg-indigo-100 text-indigo-700",
  "Manufacturing": "bg-red-100 text-red-700",
  "Government": "bg-teal-100 text-teal-700",
};
export default function Index() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ae42ba9528_f52c30f590e50fde.png" alt="aerial view of modern corporate business district skyline South Asia professional architecture blue "/>
          <div className="absolute inset-0 bg-[#003366]/60"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <Badge className="bg-[#C9A227] text-white mb-4 text-xs font-semibold tracking-wider px-3 py-1">
              TRUSTED SINCE 2004
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              South Asia's Premier <span className="text-[#C9A227]">Consultancy</span> Partner
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Delivering world-class consultancy, project management, and HR solutions across South Asia and beyond. Trusted by leading corporations and government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold px-6 py-3 h-auto text-base">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4"/>
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#003366] px-6 py-3 h-auto text-base">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#003366] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <p className="text-3xl font-bold text-[#C9A227]">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-5">
                Driving Growth Through Expert Advisory
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                South Asia Consultancy (SAC) was established to provide comprehensive professional services to the rapidly evolving industries of South Asia. With over two decades of combined expertise, our team offers unparalleled consultancy services tailored to meet the complex challenges of modern businesses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We combine local knowledge with international best practices, delivering solutions that drive measurable results. Our multidisciplinary team brings deep sector expertise across infrastructure, energy, manufacturing, and more.
              </p>
              <Link to="/about">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">
                  Learn More About Us <ChevronRight className="ml-1 w-4 h-4"/>
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d51dbea5c1_fc5e40102aa3055e.png" alt="professional business team meeting modern office corporate consultancy South Asia"/>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#C9A227] text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8"/>
                  <div>
                    <p className="font-bold text-lg leading-none">ISO 9001</p>
                    <p className="text-xs text-white/80">Certified Company</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Our Core Services</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Comprehensive professional services designed to address your business challenges and drive sustainable growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group  hover:border-[#C9A227]">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#003366] transition-colors">
                  <s.icon className="w-6 h-6 text-[#003366] group-hover:text-white transition-colors"/>
                </div>
                <h3 className="font-semibold text-[#003366] text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                View All Services <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Sectors We Serve</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Industries We Cover</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.05 }}>
                <Link to="/industries">
                  <div className="bg-[#F4F6F9] rounded-xl p-5 text-center hover:shadow-md transition-all cursor-pointer border border-gray-100  hover:border-[#C9A227]">
                    <div className={`w-12 h-12 rounded-full ${ind.color} flex items-center justify-center mx-auto mb-3`}>
                      <ind.icon className="w-6 h-6"/>
                    </div>
                    <p className="font-medium text-[#003366] text-sm">{ind.name}</p>
                  </div>
                </Link>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work With South Asia's Best?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Partner with us to achieve your business goals. Our expert consultants are ready to deliver tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold px-8 py-3 h-auto">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#003366] px-8 py-3 h-auto">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-1">Stay Updated</p>
              <h2 className="text-3xl font-bold text-[#003366]">Latest News & Projects</h2>
            </div>
            <Link to="/media">
              <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                View All News <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={item.img_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs text-[#003366] bg-[#003366]/10">
                      {item.category}
                    </Badge>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3"/> {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Homepage Clients Marquee (below latest news) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#003366]">Trusted By</h3>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {clients.concat(clients).map((client, i) => (
                <div key={i} className="marquee-item flex-none bg-[#F4F6F9] rounded-xl p-4 border border-gray-100 text-center mx-3 w-56">
                  <div className="w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">{client.abbr}</span>
                  </div>
                  <p className="font-medium text-[#003366] text-sm leading-tight mb-1 line-clamp-2">{client.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sectorColors[client.sector] || "bg-gray-100 text-gray-700"}`}>
                    {client.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>);
}
