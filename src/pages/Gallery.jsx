import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
const categories = ["All", "Projects", "Office Culture", "Events"];
const galleryItems = [
    { category: "Projects", caption: "Chittagong Port Expansion Site", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c9ec55af8d_ce5f061b7f2fca55.png" },
    { category: "Projects", caption: "Bridge Construction Supervision", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f5b6c9e0f1_bd5dd0841e9a1fc1.png" },
    { category: "Projects", caption: "Power Plant Installation", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_28f46305fa_85520f62e93f14e5.png" },
    { category: "Projects", caption: "Gas Pipeline Inspection", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f4b934c448_cb2d0cd954fa0c63.png" },
    { category: "Projects", caption: "Road Infrastructure Works", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f866ec6976_28fbd218bebd2311.png" },
    { category: "Projects", caption: "Factory Construction Phase", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1f0ddf47c7_4be7d04f795b7fd5.png" },
    { category: "Office Culture", caption: "SAC Headquarters, Dhaka", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_469b2dcd85_69b88b2993dc1073.png" },
    { category: "Office Culture", caption: "Team Collaboration Session", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1e33abe462_ec378cd53c10b2db.png" },
    { category: "Office Culture", caption: "Training & Development Workshop", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_406ad25bae_998fe48a28c00c7c.png" },
    { category: "Office Culture", caption: "HR Team at Work", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_91e01bba74_0e0a6e621b5eb74c.png" },
    { category: "Office Culture", caption: "Leadership Planning Session", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c19f285b19_dcd43baf23f21615.png" },
    { category: "Office Culture", caption: "Awards & Recognition Ceremony", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_666ee2fb02_aed3187f038f7509.png" },
    { category: "Events", caption: "Energy Summit 2025 Participation", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e0b70bc19a_4f16977b73dd9350.png" },
    { category: "Events", caption: "20th Anniversary Celebration", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_13d96e8499_c8fea8cbf8bd5973.png" },
    { category: "Events", caption: "BAIRA Forum Participation", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a17411c333_b829e8ce58f3b592.png" },
    { category: "Events", caption: "Digital Transformation Workshop", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_736c4a7d7f_e414ca7789d81610.png" },
    { category: "Events", caption: "Client Appreciation Dinner", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8f88284381_deb73386de4a5659.png" },
    { category: "Events", caption: "Job Fair 2025", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ecf2bb45da_ec165b38f192e05a.png" },
];
export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    const filtered = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);
    return (<PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-[#003366] overflow-hidden">
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

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
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
      <section className="py-12 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
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
