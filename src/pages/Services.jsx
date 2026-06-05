import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase,Droplet, HardHat, Settings, Users, Globe, TrendingUp, FileText, Shield, Database, ArrowRight, CheckCircle, Wrench, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
const services = [
    {
        id: "drilling",
        icon: Settings,
        title: "Drilling Services",
        desc: "South Asia Consultancy, primarily an Oil and Gas service provider, has diversified in the oil and gas Exploration and...",
        features: [
            
            
        ],
        img_url: "https://intdrill.com/uploads/0dadfadac17f12d18ab168237df77df5.jpg", className: "bg-contains",
    },
    {
        id: "workover",
        icon: Users,
        title: "Workover & Completion",
        desc: "We are one of the leading service providers for Workover and Completion Services to various Oil and Gas companies in India.",
        features: [
           
        ],
        img_url: "https://southasiaconsultancy.com/static/media/Workout.f45a0a55.png",
        className: "bg-contains",
    },
    {
        id: "om",
        icon: Settings,
        title: "Operation & Maintenance (O&M)",
        desc: "We provide operation and maintenance services for Offshore Drilling Rigs, Onshore Drilling and Workover rigs, Oil and Gas installations, Sucker Rod Pump Units etc.",
        features: [
            
        ],
        img_url: "https://southasiaconsultancy.com/static/media/Workout1.e3cb91a9.png",
    },
    {
        id: "oilfield-equipment",
        icon: Droplet,
        title: "Oilfield Equipment Services",
        desc: "South Asia Consultancy, primarily an Oil and Gas service provider, has diversified in the oil and gas Exploration and...",
        features: [
           
        ],
        img_url: "https://southasiaconsultancy.com/static/media/Workout3.ebe98ed0.png",
    },
    {
        id: "manpower-supply",
        icon: TrendingUp,
        title: "Nitrogen Pumping Unit Services",
        desc: "We offer Nitrogen Pumping Unit services for various oilfield purposes. NPU is a hydraulic heat recovery Liquid Nitrogen Pump and vaporizer system.",
        features: [
           
        ],
        img_url: "https://southasiaconsultancy.com/static/media/Workout4.933402ea.png",
    },
    {
        id: "mobile-streaming",
        icon: Truck,
        title: "Mobile Streaming Unit Services",
        desc: "We offer Mobile High Pressure Steaming Unit & Mobile Low Pressure steaming Unit suitable for well tube cleaning , de waxing, line flushing, steam injection in well with end to end service.",
        features: [
           
        ],
        img_url: "https://southasiaconsultancy.com/static/media/MobileSteming.286a3471.png",
    },
    {
        id: "mobile-pumping",
        icon: Truck,
        title: "Mobile Pumping Unit Services",
        desc: "We offer Mobile Pumping unit services appropriate for pumping fluid like brine, water, oil effluent, etc. with discharge rate of 1540M3 /Hr & 40M3 /Hr and 200 & 400 KG/CM2 working pressure.",
        features: [
            
        ],
        img_url: "https://southasiaconsultancy.com/static/media/MobilePumping.87256b7e.png",
    },
    {
        id: "mobile-compressor",
        icon: Zap,
        title: "Mobile Air Compressor Services",
        desc: "We provide Mobile Air Compressor services for various oilfield purposes including well offloading, well activation etc. Since 2014, we are providing Mobile Air compressor to top leading companies of oil and gas exploration and production in INDIA.",
        features: [
            
        ],
        img_url: "https://southasiaconsultancy.com/static/media/MobileAirCompresser.1470c2e4.png",
    },
    {
        id: "generator-sets",
        icon: Zap,
        title: "Generator Sets & Power Solutions",
        desc: "We provide wide range of Diesel Generators on rental basis with excellent services. We offer 05KVA to 25KVA, 35KVA to 200 KVA and 250KVA, 320KVA, 380KVA, 500KVA, 600KVA, 750KVA,",
        features: [
           
        ],
        img_url: "https://southasiaconsultancy.com/static/media/GeneratorState.907f7460.png",
    },
    {
        id: "dual-fuel",
        icon: Settings,
        title: "Dual Fuel Engines Services",
        desc: "We provide operation and maintenance services for Offshore Drilling Rigs, Onshore Drilling and Workover rigs, Oil and Gas installations, Sucker Rod Pump Units etc.",
        features: [
            
        ],
        img_url: "https://southasiaconsultancy.com/static/media/DueFuelEngine.027bf34f.png",
    },
    {
        id: "crude-transportation",
        icon: Truck,
        title: "Crude Oil Transportation Services",
        desc: "We offer Nitrogen Pumping Unit services for various oilfield purposes. NPU is a hydraulic heat recovery Liquid Nitrogen Pump and vaporizer system.",
        features: [
            
        ],
        img_url: "https://southasiaconsultancy.com/static/media/CrudOil.6ee2fa98.png",
    },
    {
        id: "safety-training",
        icon: Shield,
        title: "IWCF-IADCC & Safety Training",
        desc: "South Asia Energy Services Pvt ltd, a vertical of SAC group of companies, is a premier training institute providing basic to advance level training of Safety and Well Control to Oil and Gas Field Personnel.",
        features: [
            
        ],
        img_url: "https://talentvisacademy.com/files/upload/course/2025/01/09/677f7c876d494.png",
        
      },
];
export default function Services() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.3), rgba(0,51,102,0.3)), url('	https://southasiaconsultancy.com/static/media/Homepagebanner.575f1c64.webp')",
          
        }}
      > 
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              From strategic advisory to technical support, we offer a comprehensive suite of professional services tailored to your industry's specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (<motion.div key={service.id} id={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group hover:border-[#C9A227] transition-all cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img src={service.img_url} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-white"/>
                    </div>
                    <h3 className="font-bold text-[#003366] text-lg">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#C9A227] flex-shrink-0"/>
                        {f}
                      </li>))}
                  </ul>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/70 mb-8">
            Our team of experts is ready to develop a bespoke service package tailored to your specific requirements.
          </p>
          <Link to="/contact">
            <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold px-8 py-3 h-auto">
              Talk to Our Experts <ArrowRight className="ml-2 w-4 h-4"/>
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>);
}
