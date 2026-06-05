import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
const categories = ["All", "Projects", "Office Culture", "Events"];
const galleryItems = [
    { category: "Projects", caption: "Chittagong Port Expansion Site", img_url: "https://theloadstar.com/wp-content/uploads/5dafdb4e2f3f8959bb6bd72468ade015-680x0-c-default.jpg" },
    { category: "Projects", caption: "Bridge Construction Supervision", img_url: "https://southasiaconsultancy.com/static/media/Gallary6.f14bc16e.webp" },
    { category: "Projects", caption: "Power Plant Installation", img_url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Kraftwerk_Niederau%C3%9Fem_2006.jpg" },
    { category: "Projects", caption: "Gas Pipeline Inspection", img_url: "https://i0.wp.com/revogroupau.com/wp-content/uploads/2022/04/NDT-Inspections-of-Pipelines.jpg?fit=1280%2C720&ssl=1" },
    { category: "Projects", caption: "Road Infrastructure Works", img_url: "https://avpinfra.com/wp-content/uploads/2025/11/Frame-1-4-1024x683.png" },
    { category: "Projects", caption: "Factory Construction Phase", img_url: "https://harshithmanufacturers.com/wp-content/uploads/2022/02/Untitled-design-6-1.jpg" },
    { category: "Office Culture", caption: "SAC Headquarters, Dhaka", img_url: "https://upload.wikimedia.org/wikipedia/commons/6/63/BTCL_HQ%2C_Dhaka.jpg" },
    { category: "Office Culture", caption: "Team Collaboration Session", img_url: "https://southasiaconsultancy.com/static/media/Gallary3.d795eda3.webp" },
    { category: "Office Culture", caption: "Training & Development Workshop", img_url: "https://www.fctdtraining.com/wp-content/uploads/2024/03/o9MU0OcP-Schwing-Stetter-India-2-min-1.jpg" },
    { category: "Office Culture", caption: "HR Team at Work", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMD469AP6zPF8LOq-GXBDFiA-G5mAjHd3RQ&s" },
    { category: "Office Culture", caption: "Leadership Planning Session", img_url: "https://media.licdn.com/dms/image/v2/D4D22AQGP0K1GRv4j9Q/feedshare-shrink_800/B4DZpjS7cIGgAk-/0/1762602498942?e=2147483647&v=beta&t=WbdkfdFLfjryFq11lyMPAX3zHcbfAm3Rs5UhzZ-w5SU" },
    { category: "Office Culture", caption: "Awards & Recognition Ceremony", img_url: "https://southasiaconsultancy.com/static/media/Gallary4.dfa17d2e.webp" },
    { category: "Events", caption: "Energy Summit 2025 Participation", img_url: "https://upeswebsitecdn-prod-hphqfhc0b8h2ffhf.a02.azurefd.net/drupal-data/2025-05/Energy%20Summit%202.webp" },
    { category: "Events", caption: "20th Anniversary Celebration", img_url: "https://iasgyan.sgp1.digitaloceanspaces.com/images/GLOBAL.png" },
    { category: "Events", caption: "BAIRA Forum Participation", img_url: "https://www.baira.org.bd/media/slider/B6Q8nBVwhVKMgJbPvUJe.jpg" },
    { category: "Events", caption: "Digital Transformation Workshop", img_url: "https://cdn.digitalindiacorporation.in/wp-content/uploads/2026/05/RKP1027.jpg" },
    
];
export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    const filtered = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);
    return (<PageLayout>
      
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.4), rgba(0,51,102,0.4)), url('https://southasiaconsultancy.com/static/media/Team.ef7e8de6.webp')",
          
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Visual Showcase</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              A visual journey through our projects, team culture, and major events.
            </p>
          </motion.div>
        </div>
      </section>

     

      {/* news blog */}
      <section className="relative py-20 bg-[#E6F0FA]">
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    {/* Header */}
    <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">
      Latest Updates
    </p>

    <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
      News & Highlights
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Key achievements, contracts, and milestones from South Asia Energy Services.
    </p>

    {/* News List */}
    <div className="max-w-4xl mx-auto space-y-6 text-left">
      
      {[
        "SAC’s contract for Crude Transportation Services to transport Selan’s crude from Bakrol, Lohar and Karjasan Field has been extended by Selan for 1 Year w.e.f from July 01, 2020.",
        "Standard TOR issued by MoEFCC for EIA report preparation for South Patan block re-activation.",
        "SAC awarded contract for 40 KVA DG set for SRP operations at Bakrol Field on 22 June 2019.",
        "SAC partnered with Quippo Oil & Gas for 750 HP Workover Rig deployment in Rajasthan (RJ-ON-90/1).",
        "SAC awarded Mobile Air Compressor Services contract for multiple fields on 04 April 2018."
      ].map((news, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-lg p-5  hover:border-[#C9A227] transition-colors cursor-pointer"
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="text-[#C9A227] font-semibold mr-2">•</span>
            {news}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
       {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 relative top-0 lg:top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 justify-center flex-wrap">
            {categories.map((cat) => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                ? "bg-[#003366] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {cat}
              </button>))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[#E6F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-masonry gap-5">
            <AnimatePresence>
              {filtered.map((item, i) => (<motion.div key={item.caption} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: i * 0.04 }} className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square bg-gray-200 shadow-sm" onClick={() => setLightbox(item.img_url)}>
                  <img src={item.img_url} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-[#003366]/0 group-hover:bg-[#003366]/60 transition-all flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium line-clamp-1">{item.caption}</p>
                  </div>
                </motion.div>))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-[#C9A227] transition-colors">
              <X className="w-8 h-8"/>
            </button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lightbox} alt="Gallery preview" className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()}/>
          </motion.div>)}
      </AnimatePresence>
    </PageLayout>);
}
