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
        name: "Mr. Chirag Shah",
        title: "Chief Financial Officer",
        bio: "Chief Financial Officer having a strong set of hard skills – technical and analytical competence – and soft skills, such as strategic communication, commercial, interpersonal, and managerial competence. ",
        img_url: "public/images/chiragShahsir.png",
    },
    {
        name: "Manisha Singh Dhami",
        title: "Operations manager",
        bio: "14 years of experience in excecution & implementation of operational procedures in Oil & Gas segment.Excellent interpersonal communication,leadership & analytical management skills. Ability to deal with project challenges, team & clients effectively.",
        img_url: "public/images/Manishaben.png",
    },
    {
        name: "Mr. M. A. Sheikh",
        title: "Vice President – Operations",
        bio: "Mr. M. A. Sheikh is Vice President – Operations at SAC. In this role, he brings industry leading practices with a vision of delivering projects within budget and defined timelines..",
        img_url: "public/images/Mshaikh.png",
    },
    {
        name: "Adv. Mayank Shah",
        title: "legal advisor",
        bio: "Meet Adv. Mayank Shah, a legal luminary boasting LLB, Company Secretary, and B-Com degree. His seasoned expertise enriches our practice, with a stronghold in civil and criminal law, Mayank's litigation mastery forms our legal bedrock.",
        img_url: "public/images/Advocate.png",
    },
];
export default function About() {
    return (<PageLayout>
      {/* Page Hero with ServicesBanner background */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://southasiaconsultancy.com/static/media/ServicesBanner.ac30089b.webp" alt="Services banner background" />
          <div className="absolute inset-0 bg-[#003366]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Who We Are</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About South Asia Consultancy</h1>
            <p className="text-white/80 max-w-xl mx-auto">
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
                <img className="w-full h-full object-cover" src="https://southasiaconsultancy.com/static/media/AboutAsia.946a1dbd.png"/>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Company Profile</p>
              <h2 className="text-3xl font-bold text-[#003366] mb-5">Two Decades of Professional Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                South Asia Consultancy is an ISO 9001 certified company with headquarter in Ahmedabad, Gujarat, providing oilfield services. SAC was established in 2014 by its sole proprietor Mr. D S Rajput to supply quality manpower to Oil & Gas companies worldwide. SAC began providing Operation & Maintenance Services for various Oilfield activities including Drilling, Workover etc. in onshore as well as offshore and today, SAC is considered as one of the leading company providing Oil and Gas Services.              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                SAC has vast experience in managing onshore and offshore drilling rigs up to 3000 HP capacity, Amphion and Cyberbase control, and as latest as 7th generation rigs of reputed make like NOV, Drillmec, LeTourneau, Romania etc.              </p>
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
                The company’s mission is to provide quality services to upstream, midstream and downstream Oil and Gas Industry from oilfield services to city gas distribution services, manpower consulting and training services at the most reasonable cost.              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#003366] rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#C9A227] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                The company’s vision is to be a leading company in global energy sector providing Oil and Gas Services, City Gas Distribution Services through customer centricity, innovative approach and diversification, offering unparalleled services to our customers and excelling in the areas of our operations, keeping safety of people and asset and protection of environment in high priority.              </p>
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
            {values.map((v, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow hover:border-[#C9A227] cursor-pointer">
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
          <div className="grid md:grid-cols-4 gap-8">
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
              "The company is headed by efficient, able and futuristic leader. Mr. D.S. Rajput, aged 43 years, is the Managing Director of the company. He has an MBA in International Business, Trade and Tax Law and a B.Tech degree in Mechanical Engineering. He is a petroleum scholar, eminent professor, dynamic leader and a social worker. He has been serving the industry for more than twelve years with a diversified international exposure. He taught and trained so many professionals in different petroleum universities. Presently he is heading the South Asia group and under his dynamic leadership the group has reached a new height. He is the main backbone and pillar of the whole group which is globally doing various operations in upstream Oil and Gas sector. He has experience in managing different types of latest 6th Generation drilling and work over rigs in both onshore and offshore fields. He also serves as Assessor for IWCF well Control School of Group Company South Asia Energy Services Pvt Ltd."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A227]">
                <img className="w-full h-full object-cover" src="https://southasiaconsultancy.com/static/media/ClientImg.15d9b612.png"/>
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Mr. D S Rajput</p>
                <p className="text-[#C9A227] text-sm">Managing Director, SAC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>);
}
