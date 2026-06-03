import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
const values = [
    { title: "Integrity", desc: "We uphold the highest ethical standards in all our engagements." },
    { title: "Excellence", desc: "Delivering superior quality solutions that exceed client expectations." },
    { title: "Innovation", desc: "Embracing new ideas and technologies to solve complex challenges." },
    { title: "Collaboration", desc: "Building strong partnerships with clients, communities and stakeholders." },
    { title: "Accountability", desc: "Taking full responsibility for our commitments and outcomes." },
    { title: "Sustainability", desc: "Promoting environmentally and socially responsible practices." },
];
const leadership = [
    {
        name: "Engr. Md. Rafiqul Islam",
        title: "Chairman & Founder",
        bio: "With over 30 years of experience in engineering and management consultancy, Engr. Islam founded South Asia Consultancy with a vision to transform the professional services landscape in the region. His leadership has guided the organization to become a trusted name across multiple industries.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2086aca095_77118222a24601dd.png",
    },
    {
        name: "Ms. Farida Begum",
        title: "Managing Director",
        bio: "Ms. Begum brings 20 years of strategic management experience to SAC. Her expertise in organizational development and client relationship management has been pivotal in expanding SAC's portfolio across South and Southeast Asia.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2086aca095_ac40528538b408cb.png",
    },
    {
        name: "Engr. Kamal Hossain",
        title: "Director of Operations",
        bio: "A certified project management professional (PMP), Engr. Hossain oversees the delivery of all technical and project management engagements, ensuring quality and timeliness across SAC's diverse project portfolio.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2086aca095_924acde31006a6ec.png",
    },
];
export default function About() {
    return (<PageLayout>
      {/* Page Hero */}
      <section className="relative py-20 bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Who We Are</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About South Asia Consultancy</h1>
            <p className="text-white/70 max-w-xl mx-auto">
              A legacy of trust, expertise, and excellence in professional services since 2004.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_583628dfa8_cf16285b8941744b.png" alt="modern corporate office building South Asia consultancy professional exterior architecture"/>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Company Profile</p>
              <h2 className="text-3xl font-bold text-[#003366] mb-5">Two Decades of Professional Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                South Asia Consultancy (SAC) was incorporated in 2004 with the mission of providing world-class professional and technical services to clients across South Asia and the Middle East. Headquartered in Dhaka, Bangladesh, our firm has grown to become one of the region's most respected consultancy organizations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We serve a diverse portfolio of clients including multinational corporations, government entities, development organizations, and local enterprises across sectors such as Oil & Gas, Infrastructure, Construction, Power, and Manufacturing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                SAC is ISO 9001:2015 certified and a member of several professional bodies including the Institute of Engineers Bangladesh (IEB) and the Bangladesh Association of International Recruiting Agencies (BAIRA).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#003366] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, high-quality, and cost-effective professional consultancy, project management, and HR solutions that empower our clients to achieve their strategic objectives. We are committed to delivering measurable value through our expertise, integrity, and dedication to excellence.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#003366] rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#C9A227] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the most trusted and preferred professional services partner in South Asia, recognized for our unwavering commitment to quality, innovation, and the long-term success of our clients and communities. We envision a future where SAC's expertise drives sustainable development across the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">What Drives Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5"/>
                <div>
                  <h4 className="font-semibold text-[#003366] mb-1">{v.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={leader.img_url} alt={leader.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#003366] text-lg">{leader.name}</h3>
                  <p className="text-[#C9A227] text-sm font-medium mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="py-16 lg:py-20 bg-[#003366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Quote className="w-12 h-12 text-[#C9A227] mx-auto mb-6"/>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed italic mb-8">
              "When we founded South Asia Consultancy, our goal was simple: to bridge the gap between international best practices and local expertise. Over two decades later, I am proud to say we have not only achieved that goal but have surpassed it. SAC is not just a consultancy firm; it is a community of dedicated professionals committed to building a better tomorrow for South Asia. Our work is our legacy."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A227]">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b05f1fcb3b_7123514540a8666d.png" alt="professional headshot portrait male executive South Asian chairman formal"/>
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Engr. Md. Rafiqul Islam</p>
                <p className="text-[#C9A227] text-sm">Chairman & Founder, SAC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>);
}
