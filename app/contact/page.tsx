"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to send message.");
        }

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);

    } catch (err: any) {
        console.error("Contact form error:", err);
        setError(err.message || "Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};


    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "hello@company.com",
            link: "mailto:hello@company.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Address",
            value: "123 Business St, Suite 100, City, State 12345",
            link: null
        }
    ];

    return (
        <main className="min-h-screen bg-black pt-24 pb-16">
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side - Info */}
                    <div className="space-y-8 lg:pt-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight">
                                Contact Us
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                                Have a question or feedback? We'd love to hear from you. 
                                Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8">
                            <h2 className="text-2xl text-white font-semibold mb-6">
                                Get in Touch
                            </h2>
                            
                            {contactInfo.map((info, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#0f0f0f] to-black rounded-xl border border-white/10 hover:border-[#00c2ff]/40 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#00c2ff]/10 rounded-lg flex items-center justify-center text-[#00c2ff] group-hover:bg-[#00c2ff]/20 transition-all">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-500 font-medium mb-1">
                                            {info.label}
                                        </p>
                                        {info.link ? (
                                            <a 
                                                href={info.link}
                                                className="text-white hover:text-[#00c2ff] transition-colors break-words"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white break-words">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 hidden lg:block">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 to-purple-500/20 blur-3xl rounded-full"></div>
                                <div className="relative bg-gradient-to-br from-[#0f0f0f] to-black p-6 rounded-xl border border-[#00c2ff]/30">
                                    <p className="text-gray-400 italic">
                                        "We value your feedback and strive to respond to all inquiries within 24 hours."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:sticky lg:top-24">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00c2ff] to-purple-500 rounded-2xl blur opacity-20"></div>
                            <div className="relative bg-gradient-to-b from-[#0f0f0f] to-black p-8 md:p-10 rounded-2xl border border-[#00c2ff]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                                <h3 className="text-2xl text-white font-bold mb-6">
                                    Send us a Message
                                </h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-5">
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

                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            placeholder="Tell us what's on your mind..."
                                            value={formData.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            rows={5}
                                            required
                                            className="w-full px-5 py-3.5 bg-black/50 text-white border border-white/20 rounded-lg outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-600 resize-none"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4 pt-2">
                                        <button
                                            type="submit"
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}