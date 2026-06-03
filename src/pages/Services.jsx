import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, HardHat, Settings, Users, Globe, TrendingUp, FileText, Shield, Database, ArrowRight, CheckCircle, Wrench, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
const services = [
    {
        id: "drilling",
        icon: HardHat,
        title: "Drilling Services",
        desc: "Complete drilling operations support including well planning, drilling supervision, and optimization of drilling parameters for oil and gas exploration and production.",
        features: [
            "Well Planning & Design",
            "Drilling Supervision",
            "Wellbore Integrity",
            "Stuck Pipe Prevention",
            "Drilling Performance Analysis",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0d4bce187f_b29f359ecb7202c4.png",
    },
    {
        id: "workover",
        icon: HardHat,
        title: "Workover & Completion",
        desc: "Specialized workover and well completion services to maintain production efficiency and extend well life in mature oil and gas fields.",
        features: [
            "Well Completion Design",
            "Workover Operations",
            "Production Tubing Services",
            "Downhole Tool Management",
            "Well Abandonment",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_17c4374b65_aee79253150ad8e0.png",
    },
    {
        id: "om",
        icon: Settings,
        title: "Operation & Maintenance (O&M)",
        desc: "End-to-end operations and maintenance management for oil and gas facilities, ensuring optimal performance and regulatory compliance.",
        features: [
            "Facility Operations Management",
            "Preventive Maintenance Programs",
            "Equipment Management",
            "Process Safety Management",
            "Environmental Compliance",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b9f385a965_349fc3190b4fb1f3.png",
    },
    {
        id: "oilfield-equipment",
        icon: Wrench,
        title: "Oilfield Equipment Services",
        desc: "Supply, installation, and maintenance of specialized oilfield equipment including pumping units, compressors, and dehydration systems.",
        features: [
            "Equipment Supply & Installation",
            "Mechanical Integrity",
            "Equipment Maintenance",
            "Performance Optimization",
            "Technical Support",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b894c092e4_03737688f43ac431.png",
    },
    {
        id: "manpower-supply",
        icon: Users,
        title: "Manpower Supply",
        desc: "Recruitment and deployment of skilled technicians, engineers, and operators for drilling and production operations across the region.",
        features: [
            "Skilled Workforce Recruitment",
            "Technical Training Programs",
            "Safety & HSE Compliance",
            "Onboarding & Documentation",
            "Long-term Staffing Solutions",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9da736871e_0eb09885e9cba589.png",
    },
    {
        id: "mobile-streaming",
        icon: Truck,
        title: "Mobile Streaming Unit Services",
        desc: "Portable fluid separation and treatment units for oil and gas operations in remote locations with high performance and reliability.",
        features: [
            "Unit Design & Fabrication",
            "Operations & Monitoring",
            "Maintenance Services",
            "Spare Parts Supply",
            "Technical Expertise",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_335b2081bf_9af25735324bcfdc.png",
    },
    {
        id: "mobile-pumping",
        icon: Truck,
        title: "Mobile Pumping Unit Services",
        desc: "Portable hydraulic and mechanical pumping systems for well servicing, injection, and production operations in challenging field conditions.",
        features: [
            "Unit Deployment & Setup",
            "Operational Support",
            "Predictive Maintenance",
            "Performance Monitoring",
            "Safety Management",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6cbabc8a72_c38be57b7b0326ee.png",
    },
    {
        id: "mobile-compressor",
        icon: Zap,
        title: "Mobile Air Compressor Services",
        desc: "Portable compression equipment for well operations, pipeline testing, and emergency air supply in remote drilling and production areas.",
        features: [
            "Compressor Unit Supply",
            "Installation & Commissioning",
            "Routine Maintenance",
            "Emergency Response",
            "Equipment Upgrades",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_897b3982af_efd65047f26270b1.png",
    },
    {
        id: "generator-sets",
        icon: Zap,
        title: "Generator Sets & Power Solutions",
        desc: "Diesel and gas-fired generator sets providing reliable power supply for offshore platforms, drilling rigs, and remote production facilities.",
        features: [
            "Generator Supply & Installation",
            "Power Quality Management",
            "Fuel System Management",
            "Preventive Maintenance",
            "24/7 Support Services",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_56537fb77d_728699df3f9600b1.png",
    },
    {
        id: "dual-fuel",
        icon: Settings,
        title: "Dual Fuel Engines Services",
        desc: "Advanced dual-fuel engine systems combining operational flexibility with cost efficiency for drilling and production operations.",
        features: [
            "Engine Installation & Testing",
            "Performance Optimization",
            "Fuel Management Systems",
            "Emission Control",
            "Technical Advisory",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0d4bce187f_b29f359ecb7202c4.png",
    },
    {
        id: "crude-transportation",
        icon: Truck,
        title: "Crude Oil Transportation Services",
        desc: "Specialized logistics and transportation for crude oil and petroleum products from wellhead to storage and processing facilities.",
        features: [
            "Transport Planning & Logistics",
            "Tanker Management",
            "Safety & Environmental Compliance",
            "Documentation & Tracking",
            "Cost Optimization",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_17c4374b65_aee79253150ad8e0.png",
    },
    {
        id: "safety-training",
        icon: Shield,
        title: "IWCF-IADCC & Safety Training",
        desc: "International well control and advanced drilling consultancy training programs ensuring workforce competency and safety compliance.",
        features: [
            "Well Control Training",
            "HSE Compliance Courses",
            "Specialized Drilling Programs",
            "Certification Preparation",
            "Corporate Training Solutions",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b9f385a965_349fc3190b4fb1f3.png",
    },
];
export default function Services() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-[#003366] overflow-hidden">
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
            {services.map((service, i) => (<motion.div key={service.id} id={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
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
