import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageLayout from "@/components/layout/PageLayout";
const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});
const offices = [
   {
        city: "Regional Office",
        address: "1209, 12th Floor, Hubtown Viva Building, Near Mogra Metro Station, Jogeshwari East, Mumbai – 400060",
        phone: "+91 32442 96543",
        email: "info@southasiaconsultancy.com",
        hours: "Sun–Thu: 9:00 AM – 6:00 PM",
    },
    {
        city: "Dubai Office",
        address: "South Asia Consultancy FZE Saif Plus R6 - 11/B P O BOX 120197 Sharjah - U.A.E.",
        phone: "+971 4 356 7890",
        email: "info@southasiaconsultancy.com",
        hours: "Sun–Thu: 9:00 AM – 5:30 PM",
    },
    {
        city: "Operation Office",
        address: "619 , Palladium Business Hub , Opposite 4D, Chandkheda, Ahmedabad, Gujarat 382424",
        phone: "+91 11 234 56478",
        email: "info@southasiaconsultancy.com",
        hours: "Sun–Thu: 8:00 AM – 5:00 PM",
    },
];
export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };
    return (<PageLayout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.3), rgba(0,51,102,0.3)), url('	https://southasiaconsultancy.com/static/media/contactusbanner.556220bb.webp')",
          
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Whether you have a project inquiry, partnership opportunity, or any questions, our team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registered Office - Top Section */}
      <section className="py-12 bg-blue-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 ">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#C9A227]"/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#003366] mb-3">Registered Office</h3>
                <p className="text-gray-600 leading-relaxed mb-3">402, Orange Mall, Mehsana Highway, above HDFC Bank, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424</p>
                <div className="flex flex-col sm:flex-row gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C9A227]"/>
                    <span className="text-gray-600">+91 9316305258</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C9A227]"/>
                    <span className="text-gray-600">info@southasiaconsultancy.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Offices */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:border-[#C9A227] transition-colors">
                <h3 className="text-lg font-bold text-[#003366] mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A227]"/>
                  {office.city}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5"/>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0"/>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0"/>
                    <span className="break-all">{office.email}</span>
                  </div>
                  <div className="flex gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-[#C9A227] flex-shrink-0"/>
                    <span>{office.hours}</span>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Map + Form Side by Side */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="rounded-xl overflow-hidden shadow-sm min-h-[400px]"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7339.020141861977!2d72.583659!3d23.115024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83ac30f361e5%3A0x27853233a2e5cb72!2sSouth%20Asia%20Consultancy!5e0!3m2!1sen!2sin!4v1780566033742!5m2!1sen!2sin"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
    className="w-full h-full min-h-[400px]"
  />
</motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Get in touch</h2>

              {submitted ? (<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                  <h3 className="text-2xl font-bold text-[#003366] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. Our team will respond to your inquiry within 24 hours.</p>
                </motion.div>) : (<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-[#003366]">First Name *</Label>
                      <Input id="name" {...register("name")} className="mt-1" placeholder="First name"/>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#003366]">Last Name *</Label>
                      <Input id="email" type="email" {...register("email")} className="mt-1" placeholder="Last name"/>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-[#003366]">Phone *</Label>
                      <Input id="phone" {...register("phone")} className="mt-1" placeholder="Phone number"/>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-[#003366]">Email *</Label>
                      <Input type="email" className="mt-1" placeholder="Email address"/>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-[#003366]">Your message *</Label>
                    <Textarea id="message" {...register("message")} className="mt-1 min-h-[120px]" placeholder="Please describe your inquiry..."/>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] text-white font-semibold py-3 h-auto text-base">
                    Submit Now
                  </Button>
                </form>)}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>);
}
