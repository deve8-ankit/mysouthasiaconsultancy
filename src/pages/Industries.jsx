import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Building2, HardHat, Factory, Radio, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
const industries = [
    {
        id: "oil-gas",
        icon: Zap,
        title: "Oil & Gas",
        desc: "SAC has extensive experience serving the oil and gas sector, providing technical consultancy, manpower solutions, and project management services for exploration, production, and refining operations.",
        capabilities: [
            "Upstream & Downstream Consultancy",
            "HSE Management Systems",
            "Pipeline Engineering",
            "Refinery Operations Support",
            "Petrochemical Plant Management",
            "Offshore Platform Support",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ad2c101a4b_9937d0ad5026cab7.png",
        color: "bg-orange-500",
    },
    {
        id: "infrastructure",
        icon: Building2,
        title: "Infrastructure",
        desc: "We support large-scale infrastructure development projects across South Asia, bringing technical expertise and project management excellence to roads, bridges, urban development, and public utilities.",
        capabilities: [
            "Road & Highway Development",
            "Bridge & Flyover Construction",
            "Urban Infrastructure Planning",
            "Water & Sanitation Projects",
            "Public Transport Systems",
            "Smart City Development",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_87483287e4_aadfd103a3af55be.png",
        color: "bg-blue-500",
    },
    {
        id: "construction",
        icon: HardHat,
        title: "Construction",
        desc: "Our construction sector expertise covers residential, commercial, and industrial building projects. We provide comprehensive consultancy from design review to construction supervision and quality control.",
        capabilities: [
            "Commercial Building Projects",
            "Industrial Plant Construction",
            "Residential Development",
            "Quality Control & Assurance",
            "Construction Supervision",
            "Cost & Quantity Surveying",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d088c17a0a_747cf15e6f990a24.png",
        color: "bg-yellow-500",
    },
    {
        id: "power",
        icon: Zap,
        title: "Power & Energy",
        desc: "With South Asia facing significant energy demands, SAC provides expert consultancy for power generation, transmission, and distribution projects, including renewable energy initiatives.",
        capabilities: [
            "Power Plant Development",
            "Grid Infrastructure",
            "Renewable Energy Projects",
            "Energy Efficiency Audits",
            "Electrical Engineering",
            "Energy Policy Advisory",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e6578f5e51_dc639b42adf7d9cd.png",
        color: "bg-green-500",
    },
    {
        id: "manufacturing",
        icon: Factory,
        title: "Manufacturing",
        desc: "SAC supports manufacturing enterprises with operational excellence, capacity expansion, quality management, and workforce development solutions tailored to the regional manufacturing landscape.",
        capabilities: [
            "Factory Layout & Design",
            "Production Optimization",
            "Quality Management Systems",
            "Supply Chain Consulting",
            "Industrial Safety",
            "Lean Manufacturing",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c4f36cfd24_dfa746b7767466c7.png",
        color: "bg-purple-500",
    },
    {
        id: "telecom",
        icon: Radio,
        title: "Telecommunications",
        desc: "Supporting the rapid expansion of telecommunications infrastructure across South Asia, we provide expertise in network planning, tower construction management, and regulatory compliance.",
        capabilities: [
            "Network Infrastructure Planning",
            "Tower Construction Management",
            "Fiber Optic Deployment",
            "Regulatory Compliance",
            "Spectrum Management",
            "Data Center Consultancy",
        ],
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3ffb5d3097_f97b76740c914129.png",
        color: "bg-red-500",
    },
];
export default function Industries() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Sectors We Serve</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Industries</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Deep sector expertise across South Asia's key industries, delivering solutions that drive growth and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, i) => (<motion.div key={ind.id} id={ind.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                  <img src={ind.img_url} alt={ind.title} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`w-12 h-12 ${ind.color} rounded-lg flex items-center justify-center mb-4`}>
                  <ind.icon className="w-6 h-6 text-white"/>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#003366] mb-4">{ind.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{ind.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {ind.capabilities.map((cap, j) => (<div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0"/>
                      {cap}
                    </div>))}
                </div>
              </div>
            </motion.div>))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Don't See Your Industry?</h2>
          <p className="text-gray-600 mb-8">
            We work across many more sectors. Contact us to discuss your specific industry requirements.
          </p>
          <Link to="/contact">
            <Button className="bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-3 h-auto">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4"/>
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>);
}
