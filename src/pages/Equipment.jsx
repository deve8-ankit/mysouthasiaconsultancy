import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { Wrench, Truck, Zap, HardHat } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
const categories = [
    { name: "Survey & Testing", icon: Wrench },
    { name: "Construction Equipment", icon: HardHat },
    { name: "Power & Electrical", icon: Zap },
    { name: "Transport & Lifting", icon: Truck },
];
const equipment = [
    {
        name: "Total Station (Topographic Survey)",
        category: "Survey & Testing",
        brand: "Leica TS16",
        desc: "High-precision total station for topographic surveys, construction layout, and deformation monitoring.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2f5342d1a8_efd216eb18532037.png",
    },
    {
        name: "Ground Penetrating Radar",
        category: "Survey & Testing",
        brand: "GSSI SIR-4000",
        desc: "Advanced GPR system for subsurface investigation, utility mapping, and structural assessment.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a00975cbac_544e7710259e6880.png",
    },
    {
        name: "Ultrasonic Thickness Gauge",
        category: "Survey & Testing",
        brand: "GE Inspection",
        desc: "Non-destructive testing instrument for measuring material thickness in pipelines and vessels.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d0d2aed843_4dac22876d0c402e.png",
    },
    {
        name: "Hydraulic Excavator",
        category: "Construction Equipment",
        brand: "Caterpillar 320",
        desc: "20-ton hydraulic excavator for earthmoving, trenching, and construction site operations.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_bc038f9566_9640dd7e510bc8b7.png",
    },
    {
        name: "Vibro Compactor",
        category: "Construction Equipment",
        brand: "Dynapac CA250",
        desc: "Heavy-duty vibratory roller for soil and asphalt compaction in road and foundation works.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_df16237058_5e37762e18a9100d.png",
    },
    {
        name: "Concrete Batching Plant",
        category: "Construction Equipment",
        brand: "Liebherr",
        desc: "Mobile batching plant with 60m³/hr capacity for on-site concrete production.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4215c2a8ad_b48d71182259e08f.png",
    },
    {
        name: "High Voltage Cable Tester",
        category: "Power & Electrical",
        brand: "HV Diagnostics",
        desc: "Advanced cable testing system for high-voltage cable fault location and diagnostics.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2a79ba14f6_ee4343840a1cb3bc.png",
    },
    {
        name: "Transformer Analyzer",
        category: "Power & Electrical",
        brand: "Megger TRAX",
        desc: "Comprehensive transformer testing equipment for power quality and performance assessment.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f483da2cbf_944d47ed45266bd6.png",
    },
    {
        name: "Mobile Crane 50T",
        category: "Transport & Lifting",
        brand: "Liebherr LTM 1050",
        desc: "50-ton mobile crane for heavy lifting operations in construction and industrial projects.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6c6e9fdb96_5481fa06374e042e.png",
    },
    {
        name: "Flatbed Low Loader",
        category: "Transport & Lifting",
        brand: "SINOTRUK",
        desc: "Heavy-duty lowbed trailer for transportation of oversized construction equipment and machinery.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_61982e1708_db44165a296c7cd3.png",
    },
    {
        name: "Aerial Work Platform",
        category: "Transport & Lifting",
        brand: "JLG 600S",
        desc: "60-foot boom lift for elevated access in construction, maintenance, and installation works.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ebb6cad807_a9e9e4083fa7b72e.png",
    },
    {
        name: "Environmental Monitoring Station",
        category: "Survey & Testing",
        brand: "Davis Instruments",
        desc: "Real-time environmental data collection for air quality, noise, and weather monitoring on project sites.",
        img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_cd8d2e460f_014a9b46fa5cb40b.png",
    },
];
export default function Equipment() {
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url('https://t4.ftcdn.net/jpg/07/00/51/23/360_F_700512347_sZO49NHpaUYacv3VGVCCWUNfOCcQhked.jpg')",
          
        }}
      > 
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Our Assets</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Equipment & Machinery</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              State-of-the-art equipment and technical tools supporting our project delivery across all sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F4F6F9]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    { /* Heading */ }
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#003366] mb-3">
        Capability Depth
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        We align crews, maintenance disciplines, and equipment packages so campaigns launch cleanly and stay productive in the field.
      </p>
    </div>

    { /* Cards */ }
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: "Rig types & operating environments",
          desc: "Fully licensed by BMET for overseas recruitment compliance.",
          img: "https://5.imimg.com/data5/ANDROID/Default/2023/6/319678593/GF/YE/TO/53083545/product-jpeg.jpg"
        },
        {
          title: "Equipment portfolio",
          desc: "Following international labor organization standards for fair recruitment.",
          img: "https://www.ace-cranes.com/public/front/images/ace-profile-2.png"
        },
        {
          title: "Technology & systems",
          desc: "Verified contracts and complete legal processing for workforce deployment.",
          img: "https://www.designtechsys.com/wp-content/uploads/ghjn1-02.jpg"
        },
        
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-black-100 hover:shadow-lg transition hover:border-[#C9A227] transition-colors cursor-pointer"
        >
          
          {/* Image */}
          <div className="h-36 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          { /* Content */ }
          <div className="p-5 text-center">
            <h3 className="font-semibold text-[#003366] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* Categories */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (<div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-[#E6F0FA] border border-black-100 hover:border-[#C9A227] transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-5 h-5 text-white"/>
                </div>
                <span className="font-medium text-[#003366] text-sm">{cat.name}</span>
              </div>))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-[#E6F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08 }} whileHover={{ y: -4 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-black-100 hover:shadow-md transition-all hover:border-[#C9A227] transition-colors cursor-pointer">
                <div className="aspect-video overflow-hidden bg-gray-50">
                  <img src={item.img_url} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="text-xs text-[#003366] bg-[#003366]/10 mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-[#003366] text-sm mb-1">{item.name}</h3>
                  <p className="text-[#C9A227] text-xs font-medium mb-2">{item.brand}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
    </PageLayout>);
}
