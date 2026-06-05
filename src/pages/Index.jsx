import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, HardHat, Users, Settings, Globe, TrendingUp, Award, ChevronRight, Building2, Zap, Factory, ArrowRight, Calendar, Truck, Wrench, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
const services = [

    { icon: Users, title: "Workover & Completion Services", desc: "We are one of the leading service providers for Workover and Completion Services to various Oil and Gas companies in India. ", image: "https://f-e-t.com/wp-content/uploads/2024/05/completion-and-workover-tool-banner.jpg" },
    { icon: Settings, title: "Operation and Maintenance Services", desc: "We provide operation and maintenance services for Offshore Drilling Rigs, Onshore Drilling and Workover rigs, Oil and Gas installations, Sucker Rod Pump Units etc.", image: "https://renesys.in/wp-content/uploads/revslider/solaris-home/slider-4.jpg" },
    { icon: Wrench , title: "Oil and Gas Exploration", desc: "South Asia Consultancy, primarily an Oil and Gas service provider, has diversified in the oil and gas Exploration and...", image: "https://southasiaconsultancy.com/static/media/Workout3.ebe98ed0.png" },
    { icon: Truck, title: "Mobile Pumping Unit Services", desc: "We offer Mobile Pumping unit services appropriate for pumping fluid like brine, water, oil effluent, etc. with discharge rate of 1540M3 /Hr & 40M3 /Hr and 200 & 400 KG/CM2 working pressure.", image: "https://productimages.withfloats.com/actual/69748b71a54e10389beabcfe.jpg" },
    { icon: Droplet, title: "Crude Oil Transportation Services", desc: "We offer Nitrogen Pumping Unit services for various oilfield purposes. NPU is a hydraulic heat recovery Liquid Nitrogen Pump and vaporizer system.", image: "https://5.imimg.com/data5/SELLER/Default/2024/12/474807079/WK/QV/NO/55971546/furnace-oil-transportation-services-500x500.jpeg" },
    { icon: TrendingUp, title: "Nitrogen Pumping Unit Services", desc: "We offer Nitrogen Pumping Unit services for various oilfield purposes. NPU is a hydraulic heat recovery Liquid Nitrogen Pump and vaporizer system.", image: "https://assets.nov.com/NCP4N68N/at/cwcm7rfpfhpzwp9p5r7r3sp/Nitrogen_Fluid_Combination_Pumping_Unit_side.jpg?auto=webp&format=jpg&width=1920" },

];
const industries = [
    {
      icon: Zap,
      name: "Oil & Gas",
      color: "bg-orange-100 text-orange-700",
      bg: "https://media.istockphoto.com/id/1381376333/photo/oil-refinery-and-pipeline.jpg?s=612x612&w=0&k=20&c=GUQ79bkV7rU20CvmD79LJYRM2SBX90yQneHY9X8TBS4="
    },
    {
      icon: Building2,
      name: "Infrastructure",
      color: "bg-blue-100 text-blue-700",
      bg: "https://media.istockphoto.com/id/857744498/photo/oil-and-gas-plant-with-shipping-loading-dock-at-twilight.jpg?s=612x612&w=0&k=20&c=a5_1FxBPEyFslPeDFmYVgsfbwuR_Q_jQ5fj0NcipnBM="
    },
    {
      icon: HardHat,
      name: "Construction",
      color: "bg-yellow-100 text-yellow-700",
      bg: "https://media.istockphoto.com/id/922601466/photo/engineering-is-use-notebook-check-and-standing-in-front-of-oil-refinery-building-structure-in.jpg?s=612x612&w=0&k=20&c=jefHShMVnAfQ6tfkJTe4NO7AD09lIZdJ3xYNyg2IdOk="
    },
    {
      icon: Factory,
      name: "Manufacturing",
      color: "bg-purple-100 text-purple-700",
      bg: "https://media.istockphoto.com/id/1049403280/photo/picture-of-two-business-man-standing-in-warehouse-with-helmets-on-their-heads-and-celebrating.jpg?s=612x612&w=0&k=20&c=jINZvu9w1qwHuRu2zE4iyv5Ge2oBwBRHsBR-boRj-iw="
    },
    {
      icon: Zap,
      name: "Power & Energy",
      color: "bg-green-100 text-green-700",
      bg: "https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.jpg?s=612x612&w=0&k=20&c=ZisUNSqxdrnH-L7-CuUBBAVCdkE3CY8GEAPsVMgWy6M="
    },
    {
      icon: Globe,
      name: "Telecommunications",
      color: "bg-red-100 text-red-700",
      bg: "https://media.istockphoto.com/id/1346348369/photo/telecommunication-tower-with-connection-points.jpg?s=1024x1024&w=is&k=20&c=_-voopClokXoMJEuv1wNyMP1w4TIOLk_FUnzY56WFao="
    },
];
const news = [
    {
        date: "2023–2025",
        category: "Project",
        title: "Chittagong Port Expansion Phase III",
        excerpt: "Technical consultancy and project management services for the expansion of container terminal facilities.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2d1441761f_453213ca3bfcd61e.png",
    },
    {
        date: "March 2026",
        category: "Blog",
        title: "Digital Rig Commissioning Playbook for New Campaign Starts",
        excerpt: "A commissioning structure that aligns controls, instrumentation, and workforce readiness before first spud.",
        img_url: "https://images.openai.com/static-rsc-4/Oq2RrEppe80NR_Kdj0UB6KH7qGmFiN_RCcM58ZbhApESIJKHg_8BBDVF3PdQ6PoFVTceZSK-ZEnzH5PCSmO1qqEFjCcld42C6hmBcdhHmriGSrZ-Wrk25EG4aYjVFt0raEBs1YtKoECdVftuCFFdtpYb3nw_AZLhuLSmJ8bdJ2lYlejlGLQ7wnZiDA-2LunS?purpose=fullsize",
    },
    {
        date: "April 2026",
        category: "News",
        title: "Regional Rig Upgrade Programs Continue to Expand",
        excerpt: "Multiple markets are extending digital retrofit and upgrade programs for jack-up and land rigs.",
        img_url: "https://media.istockphoto.com/id/1197084829/photo/fracking-drilling-rig-at-the-golden-hour.jpg?s=612x612&w=0&k=20&c=pKJIRwnClDAjJdUTspYOICLzcDnz0H4_6e_cpW7PiZc=",
    },
];
const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Industry Clients" },
    { value: "15+", label: "Countries Served" },
];

// small clients list for homepage marquee
const clients = [
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner1.7c40288b.webp" },
  { logo_url: "https://assets.weforum.org/organization/image/responsive_small_webp_Kw01Ayvx1aNstc5rEN01NI1zJZRIJj4Tz3h3ZWsWnxk.webp" },
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner3.f5563925.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner4.d8224be2.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner5.20707dbd.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner6.13ad3b21.webp" },
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner7.4c3057dc.webp" },
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner8.52cd3760.webp"},

  { logo_url: "https://southasiaconsultancy.com/static/media/Partner9.e8b03ca1.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner10.81abe6f5.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner11.f3e4a30a.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner12.305b951e.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner13.bebaa8f3.webp"},
  { logo_url: "https://southasiaconsultancy.com/static/media/Partner14.3dcb07be.webp"},
  { logo_url: " https://southasiaconsultancy.com/static/media/Partner16.92c58545.webp"},

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
export default function Index() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ae42ba9528_f52c30f590e50fde.png" alt="aerial view of modern corporate business district skyline South Asia professional architecture blue "/>
          <div className="absolute inset-0 bg-[#003366]/60"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <Badge className="bg-[#C9A227] text-white mb-4 text-xs font-semibold tracking-wider px-3 py-1">
              TRUSTED SINCE 2004
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              South Asia's Premier <span className="text-[#C9A227]">Consultancy</span> Partner
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Delivering world-class consultancy, project management, and HR solutions across South Asia and beyond. Trusted by leading corporations and government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold px-6 py-3 h-auto text-base">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4"/>
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#003366] px-6 py-3 h-auto text-base">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#003366] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <p className="text-3xl font-bold text-[#C9A227]">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-5">
                Driving Growth Through Expert Advisory
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                South Asia Consultancy (SAC) was established to provide comprehensive professional services to the rapidly evolving industries of South Asia. With over two decades of combined expertise, our team offers unparalleled consultancy services tailored to meet the complex challenges of modern businesses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We combine local knowledge with international best practices, delivering solutions that drive measurable results. Our multidisciplinary team brings deep sector expertise across infrastructure, energy, manufacturing, and more.
              </p>
              <Link to="/about">
                <Button className="bg-[#003366] hover:bg-[#002244] text-white">
                  Learn More About Us <ChevronRight className="ml-1 w-4 h-4"/>
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d51dbea5c1_fc5e40102aa3055e.png" alt="professional business team meeting modern office corporate consultancy South Asia"/>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#C9A227] text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8"/>
                  <div>
                    <p className="font-bold text-lg leading-none">ISO 9001</p>
                    <p className="text-xs text-white/80">Certified Company</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Our Core Services</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Comprehensive professional services designed to address your business challenges and drive sustainable growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="relative p-6 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group hover:border-[#C9A227] text-white h-64 flex flex-col justify-end"
            style={{
        backgroundImage: `url(${s.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>

        <div className="relative z-10">
        <s.icon className="w-9 h-9 mb-3" />
        <h3 className="text-lg font-semibold">{s.title}</h3>
        <p className="text-sm text-white/90 mt-2">{s.desc}</p>
      </div>
                
               
              </motion.div>))}
          </div>
          <div className="text-center mt-8 hover:border-[#C9A227] ">
            <Link to="/services">
              <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white ">
                View All Services <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Sectors We Serve</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Industries We Cover</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.05 }}>
                <Link to="/industries">
  <div
    className="relative rounded-xl p-5 text-center hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-[#C9A227] overflow-hidden min-h-[160px]"
    style={{
      backgroundImage: `url(${ind.bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Content */}
    <div className="absolute bottom-2 left-0 right-0 z-100 text-center">
  <p className="text-white text-lg font-bold drop-shadow-lg">
    {ind.name}
  </p>
</div>
  </div>
</Link>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work With South Asia's Best?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Partner with us to achieve your business goals. Our expert consultants are ready to deliver tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#C9A227] hover:bg-[#b08b1e] text-white font-semibold px-8 py-3 h-auto">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#003366] px-8 py-3 h-auto">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-1">Stay Updated</p>
              <h2 className="text-3xl font-bold text-[#003366]">Latest News & Projects</h2>
            </div>
            <Link to="/media">
              <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                View All News <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={item.img_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs text-[#003366] bg-[#003366]/10">
                      {item.category}
                    </Badge>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3"/> {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Homepage Clients Marquee (below latest news) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#003366]">Trusted By</h3>
          </div>
          <div className="marquee">
           <div className="marquee-track">
              {clients.concat(clients).map((client, i) => (
                <div
                  key={i}
                  className="marquee-item flex-none mx-8 flex items-center justify-center"
                >
                  <div className="w-48 h-30 flex items-center justify-center">
                  <img
                    src={client.logo_url}
                    alt={client.name}
                    className="w-40 h-25 object-contain"
                  />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </PageLayout>);
}
