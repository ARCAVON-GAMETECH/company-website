"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make request to backend later:
      // await fetch("/api/feedback", { method: "POST", body: JSON.stringify(form) });

      setTimeout(() => {
        setSent(true);
        setLoading(false);
      }, 1000);
    } catch {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-28 pb-20 px-6 flex flex-col items-center">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl text-center font-bold tracking-widest text-cyan-300 mb-16 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]"
      >
        FEEDBACK
      </motion.h1>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-black/50 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-[0_0_25px_rgba(0,255,255,0.25)] p-10 space-y-6"
      >
        <div>
          <label className="block text-cyan-300 mb-2 font-semibold">Name</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black/60 border border-cyan-500/20 text-white focus:border-cyan-300 outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-cyan-300 mb-2 font-semibold">Email</label>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black/60 border border-cyan-500/20 text-white focus:border-cyan-300 outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-cyan-300 mb-2 font-semibold">Message</label>
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 h-40 rounded-md bg-black/60 border border-cyan-500/20 text-white resize-none focus:border-cyan-300 outline-none"
            placeholder="Write your message here..."
          />
        </div>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-3 bg-cyan-500 hover:bg-cyan-400 font-bold text-black py-4 rounded-md transition disabled:opacity-40"
          type="submit"
        >
          <Send size={20} />
          {loading ? "Sending..." : "Submit"}
        </button>

        {sent && (
          <p className="text-center text-green-400 font-bold pt-4">
            Feedback received. Thanks for caring.
          </p>
        )}
      </motion.form>
    </main>
  );
}
