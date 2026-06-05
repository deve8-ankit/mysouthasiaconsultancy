import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
const featured = {
    title: "South Asia Consultancy Celebrates 20 Years of Excellence in Professional Services",
    date: "July 1, 2025",
    category: "Company News",
    desc: "South Asia Consultancy (SAC) proudly marks its 20th anniversary, reflecting on two decades of transformative growth, landmark projects, and unwavering commitment to professional excellence across South Asia and the Middle East.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_13d96e8499_08ad65ee6625b846.png",
};
const articles = [
    {
        title: "Predictive Maintenance for Offshore Rigs: Practical Rollout Framework",
        date: "April 2026",
        category: "Blog",
        excerpt: "A field-level guide to moving from reactive maintenance to predictive maintenance in drilling operations without disrupting uptime.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_86160a1891_ff0e370b636055b1.png",
    },
    {
        title: "Closed-Loop Drilling Control Readiness Checklist",
        date: "April 2026",
        category: "Blog",
        excerpt: "How to prepare crews, controls, and governance for safe closed-loop drilling operations.",
        img_url: "https://rogtecmagazine.com/wp-content/uploads/2021/09/Rig-Check.png",
    },
    {
        title: "Digital Rig Commissioning Playbook for New Campaign Starts",
        date: "March 2026",
        category: "Blog",
        excerpt: "A commissioning structure that aligns controls, instrumentation, and workforce readiness before first spud.",
        img_url: "https://images.openai.com/static-rsc-4/Oq2RrEppe80NR_Kdj0UB6KH7qGmFiN_RCcM58ZbhApESIJKHg_8BBDVF3PdQ6PoFVTceZSK-ZEnzH5PCSmO1qqEFjCcld42C6hmBcdhHmriGSrZ-Wrk25EG4aYjVFt0raEBs1YtKoECdVftuCFFdtpYb3nw_AZLhuLSmJ8bdJ2lYlejlGLQ7wnZiDA-2LunS?purpose=fullsize",
    },
    {
        title: "Manpower Planning for Turnaround Projects in Refineries",
        date: "March 2026",
        category: "Blog",
        excerpt: "How to build phased staffing models for refinery shutdowns and turnarounds under strict timelines.",
        img_url: "https://jdmanpower.com/wp-content/uploads/2025/02/Untitled-design-11.jpg",
    },
    {
        title: "Offshore Automation Adoption Accelerates Across New Campaigns",
        date: "April 2026",
        category: "News",
        excerpt: "Operators are increasing investment in rig automation and integrated controls to improve consistency and lower non-productive time.",
        img_url: "https://images.openai.com/static-rsc-4/snFAaMxtTtzDwWaFW2KtceBKLHMWyENB9tkgB0LQqlq6856Rhvfoc0JphWd1QdmYxXyN055s-O6qKFFQhoLKhkKFhVjrAxb1FMsM4Jv8C0IlxxeF1T-h2S-UzoAhIJqmtENOKTssUxUSjwx6jPt-gmu4-v8kzFRpFCEqvHij_NHxNeKUyYGLJ0CS71k4oA7I?purpose=fullsize",
    },
    {
        title: "Regional Rig Upgrade Programs Continue to Expand",
        date: "April 2026",
        category: "News",
        excerpt: "Multiple markets are extending digital retrofit and upgrade programs for jack-up and land rigs.",
        img_url: "https://media.istockphoto.com/id/1197084829/photo/fracking-drilling-rig-at-the-golden-hour.jpg?s=612x612&w=0&k=20&c=pKJIRwnClDAjJdUTspYOICLzcDnz0H4_6e_cpW7PiZc=",
    },
    {
        title: "Manpower Demand Rises for Drilling and Intervention Specialists",
        date: "March 2026",
        category: "News",
        excerpt: "Hiring demand remains high for experienced drilling, well services, and HSE-critical roles.",
        img_url: "https://dynamic.placementindia.com/blog_images/20250902151530_image1.jpg",
    },
    {
        title: "Refinery Turnaround Activity Strengthens in Key Corridors",
        date: "March 2026",
        category: "News",
        excerpt: "Planned shutdown and turnaround programs are increasing, creating short-cycle demand for specialist crews.",
        img_url: "https://media.licdn.com/dms/image/v2/D4E10AQFAsmZvKndR2g/image-shrink_800/B4EZ28ZpF4GkAg-/0/1776982332209?e=2147483647&v=beta&t=u_MCCcg62FhP-k3XCudgay2zCLj8QAphyqj_0ntUqYY",
    },
    {
        title: "SAC's HR Solutions Division Reports Record Growth in Q1 2025",
        date: "March 31, 2025",
        category: "Company News",
        excerpt: "Our HR Solutions division reported a 35% increase in client engagements in Q1 2025, driven by strong demand from the manufacturing and construction sectors.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0e331367a1_8cebd696f814bbd4.png",
    },
];
const categoryColors = {
    "Projects": "bg-blue-100 text-blue-700",
    "Events": "bg-purple-100 text-purple-700",
    "Partnership": "bg-green-100 text-green-700",
    "Company News": "bg-[#003366]/10 text-[#003366]",
    "Press Release": "bg-orange-100 text-orange-700",
};
export default function Media() {
    return (<PageLayout>
      {/* Hero */}
<section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url('https://thumbs.dreamstime.com/b/like-button-business-internet-social-media-technology-network-concept-like-button-business-internet-social-media-technology-120796035.jpg')",
          
        }}
      >        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">News & Updates</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Media Center</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Stay up to date with SAC's latest news, press releases, project updates, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-8 bg-[#F4F6F9] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="aspect-video lg:aspect-auto lg:min-h-[300px] overflow-hidden">
              <img src={featured.img_url} alt={featured.title} className="w-full h-full object-cover"/>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-3 bg-[#C9A227] text-white">{featured.category}</Badge>
              <h2 className="text-2xl font-bold text-[#003366] mb-4 leading-snug">{featured.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{featured.desc}</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4"/>
                <span>{featured.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-8">Latest Updates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img src={article.img_url} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`text-xs ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                      <Tag className="w-3 h-3 mr-1"/>{article.category}
                    </Badge>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3"/>{article.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2 text-sm leading-snug line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <button className="mt-3 text-[#C9A227] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3 h-3"/>
                  </button>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
    </PageLayout>);
}
