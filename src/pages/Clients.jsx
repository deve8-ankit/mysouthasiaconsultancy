import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
const clients = [
    { name: "Bangladesh Oil, Gas & Mineral Corporation", abbr: "BAPEX", sector: "Oil & Gas" },
    { name: "Power Grid Company of Bangladesh", abbr: "PGCB", sector: "Power" },
    { name: "Roads & Highways Department", abbr: "RHD", sector: "Infrastructure" },
    { name: "Bangladesh Bridge Authority", abbr: "BBA", sector: "Infrastructure" },
    { name: "Chittagong Port Authority", abbr: "CPA", sector: "Logistics" },
    { name: "Saudi Aramco", abbr: "ARAMCO", sector: "Oil & Gas" },
    { name: "BRAC", abbr: "BRAC", sector: "NGO / Development" },
    { name: "Bashundhara Group", abbr: "BG", sector: "Conglomerate" },
    { name: "Qatar General Electricity & Water", abbr: "KAHRAMAA", sector: "Power" },
    { name: "AECOM Bangladesh", abbr: "AECOM", sector: "Consultancy" },
    { name: "World Bank Group", abbr: "WB", sector: "Development Finance" },
    { name: "Asian Development Bank", abbr: "ADB", sector: "Development Finance" },
    { name: "Square Group", abbr: "SQUARE", sector: "Manufacturing" },
    { name: "Walton Hi-Tech Industries", abbr: "WALTON", sector: "Manufacturing" },
    { name: "Titas Gas Transmission", abbr: "TITAS", sector: "Oil & Gas" },
    { name: "Bangladesh Economic Zones Authority", abbr: "BEZA", sector: "Government" },
];
const testimonials = [
    {
        quote: "South Asia Consultancy has been an invaluable partner in our port expansion project. Their technical expertise and project management capabilities are unmatched in the region.",
        name: "Eng. Rashidul Haque",
        title: "Project Director, Chittagong Port Authority",
        avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
        rating: 5,
    },
    {
        quote: "SAC's overseas recruitment services have consistently delivered high-quality technical staff for our operations. Their compliance and ethical standards give us complete confidence.",
        name: "Ahmed Al-Rashid",
        title: "HR Manager, Saudi Aramco Contracting",
        avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
        rating: 5,
    },
    {
        quote: "We have partnered with SAC on multiple infrastructure projects. Their team's professionalism, domain knowledge, and commitment to quality delivery sets them apart from others.",
        name: "Dr. Fatema Khanam",
        title: "Senior Director, Roads & Highways Department",
        avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
        rating: 5,
    },
    {
        quote: "SAC provided exceptional consultancy support for our power plant project. Their technical team understood our requirements perfectly and delivered beyond expectations.",
        name: "Md. Anisur Rahman",
        title: "CEO, Bangladesh Power Development Board",
        avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
        rating: 5,
    },
    {
        quote: "Working with South Asia Consultancy on our market entry strategy was a transformative experience. Their local market knowledge combined with international best practices is truly unique.",
        name: "Robert Chen",
        title: "Regional Director, AECOM International",
        avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
        rating: 5,
    },
    {
        quote: "SAC's HR solutions have significantly improved our workforce management capabilities. Their team is responsive, professional, and deeply knowledgeable about our industry.",
        name: "Nasrin Sultana",
        title: "HR Director, Square Pharmaceuticals",
        avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
        rating: 5,
    },
];
const sectorColors = {
    "Oil & Gas": "bg-orange-100 text-orange-700",
    "Power": "bg-green-100 text-green-700",
    "Infrastructure": "bg-blue-100 text-blue-700",
    "Logistics": "bg-purple-100 text-purple-700",
    "NGO / Development": "bg-pink-100 text-pink-700",
    "Conglomerate": "bg-gray-100 text-gray-700",
    "Development Finance": "bg-yellow-100 text-yellow-700",
    "Consultancy": "bg-indigo-100 text-indigo-700",
    "Manufacturing": "bg-red-100 text-red-700",
    "Government": "bg-teal-100 text-teal-700",
};
export default function Clients() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url('	https://southasiaconsultancy.com/static/media/Gallerybanner.1848ca0d.webp')",
          
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Trusted Partnerships</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Clients</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              We are proud to partner with leading organizations across government, private sector, and international development agencies.
            </p>
          </motion.div>
        </div>
      </section>

<section className="py-20 bg-[#F4F6F9]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center max-w-4xl mx-auto">

      <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
        Proven Performance
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
        Proof in the Field
      </h2>

      <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-6 rounded-full"></div>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Long-term relationships with operators, drilling contractors,
        and service companies have enabled SAC to deliver reliable
        manpower, operational support, and project execution across
        complex energy environments.
      </p>

      <p className="text-[#003366] font-semibold text-lg">
        Industries We Support • Operations Gallery
      </p>

    </div>

  </div>
</section>
      {/* Client Logos - continuous right-to-left marquee */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Our Valued Clients</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Trusted by leading organizations across South Asia and the Middle East.</p>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              {clients.concat(clients).map((client, i) => (
                <div key={i} className="marquee-item flex-none bg-[#F4F6F9] rounded-xl p-5 border border-gray-100 text-center mx-3 w-64">
                  <div className="w-14 h-14 bg-[#003366] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xs">{client.abbr}</span>
                  </div>
                  <p className="font-medium text-[#003366] text-sm leading-tight mb-2 line-clamp-2">{client.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sectorColors[client.sector] || "bg-gray-100 text-gray-700"}`}>
                    {client.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">What They Say</p>
            <h2 className="text-3xl font-bold text-[#003366]">Client Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <Quote className="w-8 h-8 text-[#C9A227] mb-4"/>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (<Star key={j} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]"/>))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <p className="font-semibold text-[#003366] text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.title}</p>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
    </PageLayout>);
}
