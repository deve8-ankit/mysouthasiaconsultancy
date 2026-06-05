import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle, Upload } from "lucide-react";

export default function ApplyForm({ jobs = [] }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
      resume: null,
    },
  });

  const submitted = false; // replace with your state
  const error = "";
  const success = "";

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <section id="apply-form" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

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

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#003366] mb-3">
            Apply Now
          </h2>
          <p className="text-gray-600">
            Fill out the form below and our HR team will get back to you shortly.
          </p>
        </div>

        {/* Success Screen */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#003366] mb-2">
              Application Submitted!
            </h3>
            <p className="text-gray-600">
              Thank you for your interest. We will contact you within 5–7 business days.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#F4F6F9] rounded-2xl p-8 shadow-sm space-y-5"
          >

            {/* NAME + EMAIL */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-[#003366]">
                  Full Name *
                </label>
                <input
                  className="mt-1 bg-white w-full border rounded px-3 py-2"
                  placeholder="Your full name"
                  {...register("fullName", { required: "Name is required" })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#003366]">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="mt-1 bg-white w-full border rounded px-3 py-2"
                  placeholder="your.email@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* PHONE + POSITION */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-[#003366]">
                  Phone Number *
                </label>
                <input
                  className="mt-1 bg-white w-full border rounded px-3 py-2"
                  placeholder="+91 XXXXXXXXXX"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#003366]">
                  Position Applying For *
                </label>

                <select
                  className="mt-1 bg-white w-full border rounded px-3 py-2"
                  onChange={(e) =>
                    setValue("position", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                >
                  <option value="">Select a position</option>
                  {jobs?.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>

                {errors.position && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.position.message}
                  </p>
                )}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div>
              <label className="text-sm font-medium text-[#003366]">
                Years of Experience *
              </label>

              <select
                className="mt-1 bg-white w-full border rounded px-3 py-2"
                onChange={(e) =>
                  setValue("experience", e.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                <option value="">Select experience</option>
                <option value="0-2">0–2 years</option>
                <option value="2-5">2–5 years</option>
                <option value="5-10">5–10 years</option>
                <option value="10+">10+ years</option>
              </select>

              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* COVER LETTER */}
            <div>
              <label className="text-sm font-medium text-[#003366]">
                Cover Letter *
              </label>

              <textarea
                className="mt-1 bg-white w-full border rounded px-3 py-2 min-h-[120px]"
                placeholder="Tell us about yourself..."
                {...register("coverLetter", {
                  required: "Cover letter is required",
                })}
              />

              {errors.coverLetter && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.coverLetter.message}
                </p>
              )}
            </div>

            {/* RESUME UPLOAD */}
            <div>
              <label className="text-sm font-medium text-[#003366]">
                Resume / CV *
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                id="resumeUpload"
                className="hidden"
                onChange={(e) =>
                  setValue("resume", e.target.files?.[0], {
                    shouldValidate: true,
                  })
                }
              />

              <label
                htmlFor="resumeUpload"
                className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:border-[#003366] transition-colors cursor-pointer block"
              >
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PDF, DOC, DOCX (max 5MB)
                </p>
              </label>

              {errors.resume && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.resume.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-[#003366] hover:bg-[#002244] text-white font-semibold py-3 rounded"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}