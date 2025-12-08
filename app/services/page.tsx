"use client";

import { JSX, useState } from "react";
import { Palette, Play, Bug, Check, ChevronDown, ArrowRight, Sparkles, Send } from "lucide-react";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    service: "2D Art",
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState("");

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "2D Art",
      features: ["Character Design", "Concept Art", "UI / UX Design", "Sprite Animation"],
      description: "Bringing your vision to life with stunning 2D artwork and design.",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "3D Art & Animation",
      features: ["Environment Design", "Cinematic Sequences", "Trailers", "Character Modeling"],
      description: "Creating immersive 3D worlds and captivating animations.",
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Game Testing",
      features: ["QA Testing", "Bug Testing", "UX Testing", "Performance Testing"],
      description: "Ensuring flawless gameplay through rigorous testing protocols.",
    },
  ];

interface Service {
    icon: JSX.Element;
    title: string;
    features: string[];
    description: string;
}

interface FormData {
    service: string;
    name: string;
    email: string;
    message: string;
}

const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setError("");
};

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ service: "2D Art", name: "", email: "", message: "" });
      }, 3000);

    } catch (err) {
      console.error("Contact form error:", err);
      if (err && typeof err === "object" && "message" in err && typeof (err as any).message === "string") {
        setError((err as { message: string }).message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-[#00c2ff]" />
            <span className="text-[#00c2ff] uppercase tracking-widest text-sm font-semibold">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight uppercase">
            What We Offer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed uppercase tracking-wider max-w-3xl">
            Professional game development services to bring your ideas to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0f0f0f] to-black p-8 rounded-xl border border-white/10 hover:border-[#00c2ff]/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#00c2ff]/10 rounded-lg flex items-center justify-center text-[#00c2ff] mb-6 group-hover:bg-[#00c2ff]/20 transition-all group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-xl text-white font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
              
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00c2ff] flex-shrink-0" />
                    <span className="text-gray-400 text-sm uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-[#00c2ff] text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 uppercase tracking-wider">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 uppercase tracking-wider">
            Ready to start your project? Get in touch with us
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00c2ff] to-purple-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-b from-[#0f0f0f] to-black p-8 md:p-10 rounded-2xl border border-[#00c2ff]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl text-white font-bold mb-6">
                Send us a Message
              </h3>
              
              <div className="space-y-5">
                {/* Service Dropdown */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Service
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full px-5 py-3.5 bg-black/50 text-white border border-white/20 rounded-lg outline-none hover:border-[#00c2ff] focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all text-left flex items-center justify-between"
                    >
                      <span>{formData.service}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-[#00c2ff]/30 rounded-lg overflow-hidden z-10">
                        {["2D Art", "3D Art & Animation", "Game Testing"].map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              handleChange("service", service);
                              setDropdownOpen(false);
                            }}
                            className={`w-full px-5 py-3 text-left transition-all ${
                              formData.service === service
                                ? "bg-[#00c2ff] text-black font-semibold"
                                : "text-gray-300 hover:bg-[#00c2ff]/20 hover:text-white"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="w-full px-5 py-3.5 bg-black/50 text-white border border-white/20 rounded-lg outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-600"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full px-5 py-3.5 bg-black/50 text-white border border-white/20 rounded-lg outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-600"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    required
                    className="w-full px-5 py-3.5 bg-black/50 text-white border border-white/20 rounded-lg outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || submitted}
                    className={`w-full px-6 py-4 rounded-lg font-semibold tracking-wide transition-all flex items-center justify-center gap-2 ${
                      submitted
                        ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                        : "bg-[#00c2ff] text-black hover:shadow-[0_0_25px_rgba(0,194,255,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : submitted ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                      <p className="text-red-400 text-sm text-center">{error}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}