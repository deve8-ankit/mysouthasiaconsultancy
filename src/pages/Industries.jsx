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
        img_url: "https://www.ibef.org/assets/images/Oil-and-Gas-Road-Ahead.jpg",
        color: "bg-orange-500",
    },
    {
        id: "infrastructure",
        icon: Building2,
        title: "Energy Infrastructure",
        desc: "Power generation, compression, and critical equipment support tied to production and midstream uptime.",
        capabilities: [
            "Power Generation",
            "Compression Systems",
            "Equipment Support",
            "Production Operations",
            "Midstream Uptime",
            "Facility Maintenance"
        ],
        img_url: "https://etfdb.com/media/W1siZiIsIjIwMjEvMTEvMjQvNmQ1em42dTdodl9Bbl9PdXRsb29rX29uX3RoZV9SZW5ld2FibGVfRW5lcmd5X0luZnJhc3RydWN0dXJlLmpwZyJdLFsicCIsInRodW1iIiwiMzAweDU2MF4iXV0/An-Outlook-on-the-Renewable-Energy-Infrastructure.jpg",
        color: "bg-blue-500",
    },
    {
        id: "construction",
        icon: HardHat,
        title: "Petrochemical Industry",
        desc: "Shutdown-ready manpower, maintenance disciplines, and HSE-aligned staffing for process-intensive sites.",
        capabilities: [
            "Shutdown Manpower",
            "Maintenance Support",
            "HSE Staffing",
            "Process Site Support",
            "Turnaround Teams",
            "Skilled Workforce Deployment"
        ],
        img_url: "https://media.industrialinfo.com/iirenergy/our-coverage/petrochemicals/iir-energy-global-petrochemicals-coverage-hero-banner.webp",
        color: "bg-yellow-500",
    },
    {
        id: "power",
        icon: Zap,
        title: "Offshore Platforms",
        desc: "Mobilisation planning, marine operations alignment, and experienced personnel for platform drilling and maintenance cycles.",
        capabilities: [
            "Mobilisation Planning",
            "Marine Operations",
            "Platform Drilling Support",
            "Maintenance Cycles",
            "Offshore Personnel",
            "Rig Coordination"
        ],
        img_url: "https://www.luxsolar.com/Uploads/Medium/luxsolar-awl-aircraft-warning-and-obstruction-light-for-offshore-platforms_689_m.jpg",
        color: "bg-green-500",
    },
    {
        id: "manufacturing",
        icon: Factory,
        title: "Onshore Fields",
        desc: "Land rig operations, workover campaigns, and field services scaled to basin-specific requirements.",
        capabilities: [
            "Land Rig Operations",
            "Workover Campaigns",
            "Field Services",
            "Basin-Specific Support",
            "Well Intervention",
            "Production Enhancement"
        ],
        img_url: "https://www.dombor.com/wp-content/uploads/2024/09/Onshore-vs-Offshore-Drilling-2.webp",
        color: "bg-purple-500",
    },
    
];
export default function Industries() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url('https://www.niti.gov.in/sites/default/files/2022-11/Industry-I_0.jpg')",
          
        }}
      > 
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
