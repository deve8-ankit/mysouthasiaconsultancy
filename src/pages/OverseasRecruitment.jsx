import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, FileText, Shield, Users, ArrowRight, HardHat, Wrench, Stethoscope, Truck, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
const steps = [
    { step: "01", title: "Client Requirement", desc: "Receive and analyze the manpower requirement from overseas employer." },
    { step: "02", title: "Candidate Sourcing", desc: "Source qualified candidates through our extensive database and recruitment channels." },
    { step: "03", title: "Screening & Selection", desc: "Thorough vetting including aptitude tests, trade tests, and interviews." },
    { step: "04", title: "Medical Examination", desc: "GAMCA-approved medical fitness examination for all selected candidates." },
    { step: "05", title: "Documentation", desc: "Processing of visas, work permits, and all required legal documents." },
    { step: "06", title: "Pre-Departure Training", desc: "Orientation training on destination country culture, safety, and compliance." },
    { step: "07", title: "Deployment", desc: "Safe and organized deployment with full documentation and insurance." },
    { step: "08", title: "Post-Placement Support", desc: "Ongoing support to both employer and employee throughout the contract." },
];
const jobCategories = [
    { icon: HardHat, name: "Civil & Construction", roles: ["Site Engineer", "Foreman", "Mason", "Welder", "Steel Fixer", "Scaffolder"] },
    { icon: Wrench, name: "Mechanical & Technical", roles: ["Mechanical Engineer", "Technician", "Electrician", "HVAC Tech", "Plumber", "Pipefitter"] },
    { icon: Stethoscope, name: "Healthcare", roles: ["Registered Nurse", "Medical Technician", "Paramedic", "Pharmacist", "Lab Technician"] },
    { icon: Truck, name: "Transport & Logistics", roles: ["Heavy Driver", "Logistics Coordinator", "Warehouse Manager", "Forklift Operator"] },
    { icon: Building2, name: "Hospitality", roles: ["Chef", "Hotel Staff", "Restaurant Manager", "Housekeeper", "F&B Supervisor"] },
    { icon: Zap, name: "Oil & Gas", roles: ["Drilling Engineer", "Process Operator", "Instrument Tech", "Safety Officer", "HSE Advisor"] },
];
const destinations = ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman", "Malaysia", "Singapore", "South Korea", "Japan"];
export default function OverseasRecruitment() {
    return (<PageLayout>
      {/* Hero with recruitment banner background */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://southasiaconsultancy.com/assets/recruitment-pdf/sac-mp-000.png" alt="Recruitment banner background" />
          <div className="absolute inset-0 bg-[#003366]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Global Manpower Solutions</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Overseas Recruitment</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Connecting skilled South Asian professionals with leading employers worldwide through ethical, compliant, and efficient recruitment processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">About Our Division</p>
              <h2 className="text-3xl font-bold text-[#003366] mb-5">Manpower Supply & International Placement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SAC's Overseas Recruitment division is a licensed recruiting agency under the Government of Bangladesh (License No: RL-1234), specializing in sourcing and placing skilled and semi-skilled workers in the Middle East, Southeast Asia, and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We work with a vast network of reputed employers and maintain strict compliance with all international labor standards and bilateral labor agreements. Our commitment to ethical recruitment ensures fair treatment of workers and satisfaction for employers.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[{ n: "10,000+", l: "Workers Deployed" }, { n: "50+", l: "Partner Countries" }, { n: "98%", l: "Employer Satisfaction" }].map((s, i) => (<div key={i} className="text-center p-4 bg-[#F4F6F9] rounded-lg">
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

      {/* Compliance */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Compliance & Ethics</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We adhere to the highest standards of ethical recruitment, protecting worker rights and ensuring employer compliance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { icon: Shield, title: "Licensed Agency", desc: "Fully licensed by the Bangladesh Bureau of Manpower, Employment and Training (BMET)." },
            { icon: Globe, title: "ILO Compliant", desc: "Adherent to ILO conventions on migrant workers' rights and fair recruitment." },
            { icon: FileText, title: "Legal Documentation", desc: "Complete and authentic documentation including valid employment contracts." },
            { icon: Users, title: "Worker Protection", desc: "Pre-departure orientations and insurance coverage for all deployed workers." },
        ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Recruitment Workflow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Our Recruitment Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">A transparent, step-by-step process ensuring quality placements for both employers and workers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.1 }} className="relative">
                <div className="bg-[#F4F6F9] rounded-xl p-6 h-full border border-gray-100 hover:border-[#003366]/20 transition-colors">
                  <div className="text-4xl font-black text-[#003366]/10 mb-2">{step.step}</div>
                  <h3 className="font-semibold text-[#003366] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Job Categories</h2>
            <p className="text-gray-600">We source talent across a wide range of professional categories for international placements.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((cat, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center">
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
      <section className="py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Countries We Serve</h2>
          <p className="text-white/70 mb-10">We have active recruitment pipelines across multiple countries worldwide.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((dest, i) => (<motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#C9A227] transition-colors cursor-default">
                🌍 {dest}
              </motion.span>))}
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
    </PageLayout>);
}
