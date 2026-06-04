import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, Briefcase, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageLayout from "@/components/layout/PageLayout";
const jobs = [
    {
        title: "Senior Project Manager",
        department: "Project Management",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        experience: "8+ years",
        deadline: "August 30, 2025",
        desc: "Lead large-scale infrastructure and construction projects from inception to completion, ensuring quality delivery within budget and schedule.",
    },
    {
        title: "Civil Engineer (Site)",
        department: "Technical",
        location: "Chittagong, Bangladesh",
        type: "Full-time",
        experience: "3–5 years",
        deadline: "August 15, 2025",
        desc: "Provide on-site engineering supervision for ongoing infrastructure projects. Must have experience in road and bridge construction.",
    },
    {
        title: "HR Recruitment Specialist",
        department: "Human Resources",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        experience: "2–4 years",
        deadline: "August 20, 2025",
        desc: "Source, screen, and process candidates for overseas placements. Strong knowledge of BMET/BAIRA regulations required.",
    },
    {
        title: "Business Development Manager",
        department: "Business Development",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        experience: "5–7 years",
        deadline: "September 10, 2025",
        desc: "Identify and develop new business opportunities in consultancy and project management sectors across South Asia.",
    },
    {
        title: "HSE Officer",
        department: "Health, Safety & Environment",
        location: "Multiple Locations",
        type: "Contract",
        experience: "4–6 years",
        deadline: "August 25, 2025",
        desc: "Implement and monitor HSE management systems on project sites. NEBOSH certification preferred.",
    },
    {
        title: "Financial Analyst",
        department: "Finance",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        experience: "2–4 years",
        deadline: "September 5, 2025",
        desc: "Support financial planning, budgeting, and reporting for the organization's growing project portfolio.",
    },
];
const schema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    position: z.string().min(1, "Please select a position"),
    experience: z.string().min(1, "Please select years of experience"),
    coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
});
export default function Careers() {
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
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url('https://www.shutterstock.com/image-photo/career-acceleration-concept-personal-development-260nw-435949057.jpg')",
        }}
      > 
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227] translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-2">Join Our Team</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Careers at SAC</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Build your career with South Asia's leading consultancy. We offer a dynamic, professional environment with opportunities for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why SAC */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { icon: "🏆", title: "Award-Winning Culture", desc: "Recognized as one of the best places to work in Bangladesh." },
            { icon: "📈", title: "Growth Opportunities", desc: "Clear career progression paths and continuous learning." },
            { icon: "🌍", title: "Global Exposure", desc: "Work on international projects across multiple countries." },
            { icon: "💰", title: "Competitive Benefits", desc: "Market-leading salaries and comprehensive benefit packages." },
        ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Current Openings</h2>
            <p className="text-gray-600">Explore our latest job opportunities and find your perfect role.</p>
          </div>
          <div className="space-y-4">
            {jobs.map((job, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#003366] text-lg">{job.title}</h3>
                      <Badge className={`text-xs ${job.type === "Full-time" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5"/>{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/>{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{job.experience}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{job.desc}</p>
                    <p className="text-xs text-gray-400 mt-2">Deadline: {job.deadline}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#003366] hover:bg-[#002244] text-white w-full sm:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Apply Now</h2>
            <p className="text-gray-600">Fill out the form below and our HR team will get back to you shortly.</p>
          </div>

          {submitted ? (<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">Application Submitted!</h3>
              <p className="text-gray-600">Thank you for your interest in joining SAC. We will review your application and contact you within 5–7 business days.</p>
            </motion.div>) : (<form onSubmit={handleSubmit(onSubmit)} className="bg-[#F4F6F9] rounded-2xl p-8 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-[#003366]">Full Name *</Label>
                  <Input id="fullName" {...register("fullName")} className="mt-1 bg-white" placeholder="Your full name"/>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[#003366]">Email Address *</Label>
                  <Input id="email" type="email" {...register("email")} className="mt-1 bg-white" placeholder="your.email@example.com"/>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-[#003366]">Phone Number *</Label>
                  <Input id="phone" {...register("phone")} className="mt-1 bg-white" placeholder="+880 XXXXXXXXXX"/>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <Label className="text-sm font-medium text-[#003366]">Position Applying For *</Label>
                  <Select onValueChange={(v) => setValue("position", v)}>
                    <SelectTrigger className="mt-1 bg-white">
                      <SelectValue placeholder="Select a position"/>
                    </SelectTrigger>
                    <SelectContent>
                      {jobs.map((job) => (<SelectItem key={job.title} value={job.title}>{job.title}</SelectItem>))}
                    </SelectContent>
                  </Select>
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-[#003366]">Years of Experience *</Label>
                <Select onValueChange={(v) => setValue("experience", v)}>
                  <SelectTrigger className="mt-1 bg-white">
                    <SelectValue placeholder="Select experience level"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0–2 years (Entry Level)</SelectItem>
                    <SelectItem value="2-5">2–5 years (Mid Level)</SelectItem>
                    <SelectItem value="5-10">5–10 years (Senior Level)</SelectItem>
                    <SelectItem value="10+">10+ years (Expert Level)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
              </div>
              <div>
                <Label htmlFor="coverLetter" className="text-sm font-medium text-[#003366]">Cover Letter *</Label>
                <Textarea id="coverLetter" {...register("coverLetter")} className="mt-1 bg-white min-h-[120px]" placeholder="Tell us about yourself, your experience, and why you want to join SAC..."/>
                {errors.coverLetter && <p className="text-red-500 text-xs mt-1">{errors.coverLetter.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-[#003366]">Resume / CV</Label>
                <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:border-[#003366] transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2"/>
                  <p className="text-sm text-gray-500">Click to upload or drag & drop</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                </div>
              </div>
              <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] text-white font-semibold py-3 h-auto">
                Submit Application
              </Button>
            </form>)}
        </div>
      </section>
    </PageLayout>);
}
