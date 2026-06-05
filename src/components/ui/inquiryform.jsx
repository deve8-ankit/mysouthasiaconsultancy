import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function QuickInquiryForm() {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.company.trim() ||
      !formData.contact.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSuccess(
      "Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly."
    );

    setFormData({
      company: "",
      contact: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-[#eef2f6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[#003366] text-sm font-bold tracking-[3px] uppercase mb-4">
              Lead Generation
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">
              Quick Inquiry Form
            </h2>

            <div className="w-16 h-1 bg-red-700 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Tell us your manpower requirements and our operator-led
              recruitment team will contact you quickly.
            </p>
          </div>

          {/* Messages */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-100 border border-red-300 text-red-700">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-xl bg-green-100 border border-green-300 text-green-700">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#003366]"
              />

              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Person"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#003366]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#003366]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#003366]"
              />
            </div>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Manpower requirement details, project location, and deployment timeline"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#003366]"
            />

            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Submit Inquiry
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}