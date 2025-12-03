"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) router.push("/");
    else setError("Invalid credentials");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-cyan-500/30 p-10 rounded-xl w-full max-w-md"
      >
        <h2 className="text-3xl text-cyan-300 font-bold text-center mb-6">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 bg-black border border-cyan-500/30 rounded text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 bg-black border border-cyan-500/30 rounded text-white"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition">
          Login
        </button>

        {error && <p className="text-red-400 mt-3 text-center">{error}</p>}
      </form>
    </div>
  );
}
