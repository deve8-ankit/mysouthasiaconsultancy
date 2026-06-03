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
        title: "SAC Awarded Major Port Infrastructure Contract",
        date: "July 10, 2025",
        category: "Projects",
        excerpt: "South Asia Consultancy has been awarded the consultancy contract for Phase III of the Chittagong Port expansion, one of the largest infrastructure projects in Bangladesh.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_86160a1891_ff0e370b636055b1.png",
    },
    {
        title: "SAC Participates in Regional Energy Summit 2025",
        date: "June 28, 2025",
        category: "Events",
        excerpt: "Our leadership team represented SAC at the Regional Energy Summit 2025, presenting our renewable energy consultancy capabilities to international stakeholders.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e0b70bc19a_02fb4be26c43b18b.png",
    },
    {
        title: "New Partnership with Asian Development Bank for Infrastructure Advisory",
        date: "June 15, 2025",
        category: "Partnership",
        excerpt: "SAC has formalized a strategic partnership with the ADB to provide technical advisory services for infrastructure development projects across Bangladesh.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_824d35a9b8_0711de775454dc5b.png",
    },
    {
        title: "SAC Expands Overseas Recruitment Division",
        date: "June 5, 2025",
        category: "Company News",
        excerpt: "In response to growing demand, SAC's Overseas Recruitment division is scaling up operations, opening new channels for worker deployment to Qatar and Malaysia.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_fe4944f6ca_37273d9ad7beab63.png",
    },
    {
        title: "SAC Team Completes ISO 9001:2015 Recertification Audit",
        date: "May 20, 2025",
        category: "Company News",
        excerpt: "SAC successfully passed its ISO 9001:2015 recertification audit, reaffirming our commitment to delivering quality management systems across all operations.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_19db58ad4c_04d6e575b5af7937.png",
    },
    {
        title: "Karnaphuli Tunnel Project: SAC's Role in a Historic Achievement",
        date: "May 10, 2025",
        category: "Projects",
        excerpt: "A retrospective on SAC's technical advisory contributions to the Karnaphuli Tunnel, Bangladesh's first underwater road tunnel, which opened to traffic in 2023.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c455da893f_2c5dc15e74759499.png",
    },
    {
        title: "SAC Conducts Workshop on Digital Transformation in Consultancy",
        date: "April 25, 2025",
        category: "Events",
        excerpt: "SAC hosted a professional workshop on integrating digital tools and technologies into traditional consultancy practices for project management efficiency.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a9073e049b_94b6306c84544bac.png",
    },
    {
        title: "Press Release: SAC Joins BAIRA International Labor Forum",
        date: "April 12, 2025",
        category: "Press Release",
        excerpt: "SAC has become a member of BAIRA's International Labor Forum, joining leading recruitment agencies in advocating for fair and ethical overseas employment practices.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_18ee389181_e23d11981bff3e55.png",
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
      <section className="relative py-20 bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
