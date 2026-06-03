import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
export default function PageLayout({ children }) {
    return (<div className="min-h-screen flex flex-col">
      <Header />
      <motion.main initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex-1 pt-16 lg:pt-20">
        {children}
      </motion.main>
      <Footer />
    </div>);
}
