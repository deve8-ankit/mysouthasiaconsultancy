import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, FileText, Droplet, Building, Briefcase, Settings, Shield, Users, ArrowRight, HardHat, Wrench, Stethoscope, Truck, Building2, Zap, BadgeCheck, Clock3, RotateCw, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import QuickInquiryForm from "@/components/ui/inquiryform";
const steps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Role, project timeline, site conditions, and HSE expectations.",
  },
  {
    step: "02",
    title: "Candidate Sourcing",
    desc: "Targeted shortlisting from SAC's operator-vetted talent pools.",
  },
  {
    step: "03",
    title: "Technical Screening",
    desc: "Trade checks, competency validation, and readiness verification.",
  },
  {
    step: "04",
    title: "Client Interviews",
    desc: "Interview scheduling, coordination, and final selection closure.",
  },
  {
    step: "05",
    title: "Documentation & Compliance",
    desc: "Visa, medicals, certifications, and statutory documentation.",
  },
  {
    step: "06",
    title: "Deployment & Mobilization",
    desc: "Travel logistics, onboarding, and project-site mobilization.",
  },
];
const destinations = [
  {
    name: "UAE",
    flag: "https://flagcdn.com/w80/ae.png",
  },
  {
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w80/sa.png",
  },
  {
    name: "Qatar",
    flag: "https://flagcdn.com/w80/qa.png",
  },
  {
    name: "Kuwait",
    flag: "https://flagcdn.com/w80/kw.png",
  },
  {
    name: "Oman",
    flag: "https://flagcdn.com/w80/om.png",
  },
  {
    name: "Bahrain",
    flag: "https://flagcdn.com/w80/bh.png",
  },
  {
    name: "Malaysia",
    flag: "https://flagcdn.com/w80/my.png",
  },
  {
    name: "Singapore",
    flag: "https://flagcdn.com/w80/sg.png",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w80/in.png",
  },
  {
    name: "Africa",
    flag: "https://flagcdn.com/w320/za.png", // custom image
  },
];
const jobCategories = [
    { icon: Hammer, name: "Civil & Construction", roles: ["Site Engineer", "Foreman", "Mason", "Welder", "Steel Fixer", "Scaffolder"] },
    { icon: Wrench, name: "Mechanical & Technical", roles: ["Mechanical Engineer", "Technician", "Electrician", "HVAC Tech", "Plumber", "Pipefitter"] },
    { icon: Stethoscope, name: "Healthcare", roles: ["Registered Nurse", "Medical Technician", "Paramedic", "Pharmacist", "Lab Technician"] },
    { icon: Truck, name: "Transport & Logistics", roles: ["Heavy Driver", "Logistics Coordinator", "Warehouse Manager", "Forklift Operator"] },
    { icon: Building2, name: "Hospitality", roles: ["Chef", "Hotel Staff", "Restaurant Manager", "Housekeeper", "F&B Supervisor"] },
    { icon: Droplet, name: "Oil & Gas", roles: ["Drilling Engineer", "Process Operator", "Instrument Tech", "Safety Officer", "HSE Advisor"] },
];
// const destinations = ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman", "Malaysia", "Singapore", "South Korea", "Japan"];
export default function OverseasRecruitment() {
    return (<PageLayout>
      {/* Hero with recruitment banner background */}
     <section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="https://southasiaconsultancy.com/assets/recruitment-pdf/sac-mp-000.png"
      alt="Recruitment Banner"
      className="w-full h-full object-cover"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/60 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
    <div className="max-w-4xl">

      {/* Tag */}
      <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6 mt-5 hover:-translate-y-2 transition-all duration-300">
      🗲
 GLOBAL ENERGY WORKFORCE
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
        Operator-Driven Workforce
        <br />
        Solutions for Global
        <br />
        Energy Projects
      </h1>

      {/* Description */}
      <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
        South Asia Consultancy (SAC) delivers deployment-ready
        technical manpower and complete crews for drilling,
        refinery shutdowns, and EPC projects — backed by real
        field operations experience.
      </p>

      {/* Buttons */}
      {/* <div className="flex flex-wrap gap-4 mb-14">
        <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold transition">
          Request Manpower →
        </button>

        <button className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition">
          Contact Us ✉
        </button>
      </div> */}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-bold text-white">42+</h3>
          <p className="text-white/70 mt-2">
            Active rigs under O&M footprint
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-bold text-white">4</h3>
          <p className="text-white/70 mt-2">
            Major mobilization corridors
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-4xl font-bold text-white">
            Zero LTI
          </h3>
          <p className="text-white/70 mt-2">
            HSE culture from the field
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

     {/* Compliance */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Certified for Quality, Safety & Environmental Excellence</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              SAC maintains internationally recognized management standards to support global energy clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:border-[#C9A227] transition-colors">
            {[
            {  icon: Shield,
                title: "ISO 9001",
                desc: "Quality Management System",
                file: "public/certificates/iso9001.pdf",
                downloadable: true, },
            {  icon: Shield,
                title: "ISO 14001",
                desc: "Environmental Management System",
                file: "public/certificates/iso14001.pdf",
                downloadable: true, },
            {  icon: Shield,
                title: "ISO 45001",
                desc: "Occupational Health and Safety Management System",
                file: "public/certificates/iso45001.pdf",
                downloadable: true, },
            
        ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-[#C9A227] transition-colors">
                <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4 ">
                  <item.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* dishajtn */}
      <section className="mt-10 py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Operator Credibility at a Glance</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Trust indicators
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 hover:border-[#C9A227] transition-colors">
            {[
              {
                icon: BadgeCheck,
                title: "100%",
                desc: "Operator-Led Organization",
                subtitle: "Field-first delivery DNA",
              },
              {
                icon: Globe,
                title: "4+ Regions",
                desc: "Global Talent Network",
                subtitle: "India, GCC, SEA, Africa",
              },
              {
                icon: Briefcase,
                title: "18+ Rigs",
                desc: "Onshore & Offshore Expertise",
                subtitle: "Operationally aligned manpower",
              },
              {
                icon: Clock3,
                title: "72 Hrs",
                desc: "Rapid Mobilization Capability",
                subtitle: "For urgent requirement response",
              },
              {
                icon: RotateCw,
                title: "360°",
                desc: "International Compliance Support",
                subtitle: "Visa, docs, medical, deployment",
              },
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-[#C9A227] transition-colors">
                <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4 ">
                  <item.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

 {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Who we are</p>
              <h2 className="text-3xl font-bold text-[#003366] mb-5">About SAC Recruitment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike conventional recruitment agencies, SAC is built on hands-on operational experience as an Oil Block Operator & Drilling Contractor (Onshore & Offshore).
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We understand not only the roles, but the real field conditions, HSE requirements, and operational pressures of oil & gas projects. This enables us to provide:
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[{ n: "42+", l: "Active rigs under O&M footprint" }, { n: "4+", l: "Major mobilization corridors" }, { n: "Zero LTI", l: "HSE culture from the field" }].map((s, i) => (<div key={i} className="text-center p-4 bg-[#F4F6F9] rounded-lg border border-gray-200 hover:border-[#C9A227] transition-colors">
                    <p className="text-2xl font-bold text-[#003366]">{s.n}</p>
                    <p className="text-xs text-gray-600 mt-1">{s.l}</p>
                  </div>))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6f61ee10a0_a42630049c3f95ca.png" alt="overseas workers recruitment agency professional office processing documentation South Asia"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Recruitment Workflow */}
      <section className="mt-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">SAC Recruitment Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Structured execution from technical requirement capture to mobilization.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.1 }} className="relative">
                <div className="bg-[#F4F6F9] rounded-xl p-6 h-full border border-gray-100 hover:border-[#C9A227] transition-colors">
                  <div className="text-4xl font-black text-[#C9A227] mb-2">{step.step}</div>
                  <h3 className="font-semibold text-[#003366] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Industries we serve  */}
     
      <section className="mt-10 py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Industries we serve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
             Deep exposure across the value chain — from the wellhead to downstream turnaround.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:border-[#C9A227] transition-colors">
            {[
              {
                icon: Droplet,
                title: "Oil and Gas",
                desc: "Onshore & Offshore Operations",
                subtitle: "Drilling, O&M, Turnarounds",
              },
              {
                icon: Settings,
                title: "Drilling Contractors",
                desc: "Rig Operations & Maintenance",
                subtitle: "Diverse rig types & locations",
              },
              {
                icon: Building2,
                title: "EPC Companies",
                desc: "Project Execution Support",
                subtitle: "Construction, commissioning, handover",
              },
              {
                icon: Building,
                title: "Refineries & Petrochemical Plants",
                desc: "Turnaround & Maintenance Staffing",
                subtitle: "Skilled trades & technical roles",
              },
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:border-[#C9A227] transition-colors">
                <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4 ">
                  <item.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>


      {/* Job Categories */}
      <section className=" mt-10 py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Job Categories</h2>
            <p className="text-gray-600">We source talent across a wide range of professional categories for international placements.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((cat, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#C9A227] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-white"/>
                  </div>
                  <h3 className="font-bold text-[#003366]">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.roles.map((role, j) => (<span key={j} className="text-xs bg-[#F4F6F9] text-gray-700 px-2 py-1 rounded-full border border-gray-200">
                      {role}
                    </span>))}
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Destinations */}

      <section className="mt-10 py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Countries We Serve</h2>
          <p className="text-white/70 mb-10">We have active recruitment pipelines across multiple countries worldwide.</p>
          <div className="grid grid-cols-5 gap-3">
            {destinations.map((dest, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05 }}
    className="
      bg-white/10
      backdrop-blur-md
      border border-white/20
      rounded-xl
      p-4
      text-center
      hover:bg-[#C9A227]
      hover:-translate-y-2
      transition-all
      duration-300
    "
  >
    <img
      src={dest.flag}
      alt={dest.name}
      className="w-12 h-8 object-cover mx-auto mb-3 rounded"
    />

    <div className="text-white font-medium">
      {dest.name}
    </div>
  </motion.div>
))}
          </div>
          <div className="mt-10">
            <Link to="/contact">
              <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold px-8 py-3 h-auto">
                Request Manpower <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Inquiry Form */}
      <QuickInquiryForm />
    </PageLayout>);
}
