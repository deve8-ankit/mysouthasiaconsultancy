import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
const categories = ["All", "Infrastructure", "Oil & Gas", "Construction", "Power", "Manpower", "Consultancy"];
const projects = [
    {
        title: "Chittagong Port Expansion Phase III",
        category: "Infrastructure",
        status: "Ongoing",
        year: "2023–2025",
        location: "Chittagong, Bangladesh",
        desc: "Technical consultancy and project management services for the expansion of container terminal facilities.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2d1441761f_453213ca3bfcd61e.png",
    },
    {
        title: "Dhaka Elevated Expressway Supervision",
        category: "Infrastructure",
        status: "Completed",
        year: "2019–2022",
        location: "Dhaka, Bangladesh",
        desc: "Construction supervision and quality assurance services for the Dhaka Elevated Expressway project.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_591d6b3b36_5576a2f70c6ea5db.png",
    },
    {
        title: "BAPEX Gas Field Development",
        category: "Oil & Gas",
        status: "Completed",
        year: "2020–2023",
        location: "Sylhet, Bangladesh",
        desc: "Technical support and HSE management for natural gas field development and production operations.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_633021c3fe_dc719205a59b48c9.png",
    },
    {
        title: "Saudi Aramco Manpower Supply",
        category: "Manpower",
        status: "Ongoing",
        year: "2021–Present",
        location: "Saudi Arabia",
        desc: "Continuous supply of skilled engineering and technical manpower for Saudi Aramco operations.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ffa481b82d_3a966a8664aa86a3.png",
    },
    {
        title: "Karnaphuli Tunnel Technical Advisory",
        category: "Infrastructure",
        status: "Completed",
        year: "2018–2023",
        location: "Chittagong, Bangladesh",
        desc: "Technical advisory services for the construction of Bangladesh's first underwater road tunnel.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_72ef109975_27c820469123df54.png",
    },
    {
        title: "Payra Power Plant Project",
        category: "Power",
        status: "Completed",
        year: "2017–2022",
        location: "Patuakhali, Bangladesh",
        desc: "Project management consultancy for the 1320MW Payra coal-fired power plant development.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_90ca5070ef_6d291fb195f4a944.png",
    },
    {
        title: "Bashundhara Industrial Complex",
        category: "Construction",
        status: "Completed",
        year: "2020–2022",
        location: "Dhaka, Bangladesh",
        desc: "Complete construction management and supervision for a large industrial and commercial complex.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_42478c6953_6c323e72115283ae.png",
    },
    {
        title: "Qatar Infrastructure Manpower",
        category: "Manpower",
        status: "Ongoing",
        year: "2019–Present",
        location: "Qatar",
        desc: "Recruitment and deployment of civil and MEP workers for major Qatar infrastructure projects.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_dd069f671a_7a1afe9234ba59d8.png",
    },
    {
        title: "Rural Electrification Program Advisory",
        category: "Power",
        status: "Completed",
        year: "2019–2021",
        location: "Various Districts, Bangladesh",
        desc: "Management advisory for the rural electrification expansion program across Bangladesh.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_553f80964b_fb937e0e44bcf297.png",
    },
    {
        title: "Sylhet Gas Transmission Pipeline",
        category: "Oil & Gas",
        status: "Ongoing",
        year: "2022–2025",
        location: "Sylhet, Bangladesh",
        desc: "Technical consultancy for the Sylhet-Dhaka gas transmission pipeline expansion project.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9c3c7168df_191590b32558726d.png",
    },
    {
        title: "Dhaka Metro Rail Feasibility Study",
        category: "Consultancy",
        status: "Completed",
        year: "2015–2017",
        location: "Dhaka, Bangladesh",
        desc: "Comprehensive feasibility study and technical assessment for the Dhaka Mass Rapid Transit system.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_afb5291fc3_95db224dd75192d9.png",
    },
    {
        title: "UAE Manufacturing Plant Setup",
        category: "Construction",
        status: "Completed",
        year: "2021–2023",
        location: "Dubai, UAE",
        desc: "Project management for the construction and commissioning of a manufacturing facility in the UAE.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_da90a4e1aa_7ea0a22e98e808df.png",
    },
];
export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filtered = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);
    return (<PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Our Portfolio</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              A showcase of our completed and ongoing projects across diverse sectors and geographies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                ? "bg-[#003366] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {cat}
              </button>))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (<motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden relative">
                  <img src={project.img_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute top-3 right-3">
                    <Badge className={`text-xs font-medium ${project.status === "Ongoing"
                ? "bg-green-500 text-white"
                : "bg-[#C9A227] text-white"}`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="text-xs text-[#003366] bg-[#003366]/10 mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-[#003366] text-sm leading-snug mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">{project.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/>{project.year}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/>{project.location.split(",")[0]}</span>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
    </PageLayout>);
}
