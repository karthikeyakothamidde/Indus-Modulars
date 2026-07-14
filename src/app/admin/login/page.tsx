"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, User, AlertCircle, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect straight to dashboard
  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Seed credentials check (user: admin / pass: indusadmin123)
    setTimeout(() => {
      if (username.trim() === "admin" && password === "indusadmin123") {
        sessionStorage.setItem("admin_auth", "true");
        router.push("/admin");
      } else {
        setError("Invalid username or password. Please try again.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <main className="min-h-screen bg-charcoal-black flex items-center justify-center relative overflow-hidden px-4">
      {/* Decorative background visual ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-deep-red/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-24 h-24 mb-2">
            <Logo lightMode={true} className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white">
              Indus Control Portal
            </h1>
            <p className="text-[10px] text-gold uppercase tracking-[0.25em] font-mono font-semibold pt-1">
              Authorized Personnel Only
            </p>
          </div>
        </div>

        {/* Login Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-gold/15 backdrop-blur-md rounded-[28px] p-8 md:p-10 shadow-2xl relative"
        >
          {/* Subtle inside card border */}
          <div className="absolute inset-2 border border-gold/5 rounded-[20px] pointer-events-none" />

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-start space-x-2.5 text-xs text-red-400 mb-6 animate-shake">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-wider font-semibold text-warm-ivory/50 font-mono pl-1">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full bg-white/5 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-warm-ivory/30 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-wider font-semibold text-warm-ivory/50 font-mono pl-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-white/5 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-warm-ivory/30 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Credentials notice box */}
            <div className="bg-gold/5 border border-gold/15 rounded-xl p-3 text-[11px] text-warm-ivory/60 leading-relaxed font-light">
              <span className="font-semibold text-gold">Demo Mode Credentials:</span><br />
              User: <span className="font-mono text-white">admin</span><br />
              Pass: <span className="font-mono text-white">indusadmin123</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gold hover:bg-gold/90 text-charcoal-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-gold/15 disabled:opacity-50"
            >
              <span>{loading ? "Authenticating..." : "Login to Dashboard"}</span>
              {!loading && (
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </button>
          </form>
        </motion.div>

        {/* Footer legal */}
        <div className="text-center">
          <p className="text-[10px] text-warm-ivory/40 uppercase tracking-widest font-mono">
            &copy; {new Date().getFullYear()} Indus Modulars • All Security Monitored
          </p>
        </div>
      </div>
    </main>
  );
}
