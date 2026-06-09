import React from "react";
import { Shield, Sparkles, Users, Zap, Award, Target } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="about-us">
      {/* Hero Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -top-6 -z-10 opacity-10">
          <span className="text-8xl font-black tracking-widest text-[#8b5cf6]">ABOUT</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Tentang <span className="text-[#8b5cf6] neon-text-glow">Gaming Suites</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#8b5cf6] to-pink-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Gaming Suites adalah platform penyedia layanan ekosistem gaming terintegrasi yang berkomitmen untuk memberikan pengalaman bermain game yang lebih mudah, aman, dan menyenangkan.
        </p>
      </div>

      {/* Main Narrative Layout - Bento Grid / Split Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        <div className="lg:col-span-7 bg-[#111827]/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-violet-500/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-violet-500/10 text-[#8b5cf6] rounded-xl border border-violet-500/20">
                <Target className="w-6 h-6" />
              </span>
              <h3 className="font-display text-xl font-bold text-white">Visi & Komitmen Kami</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Kami memahami tantangan para gamer saat ini, mulai dari maraknya penipuan transaksi hingga sulitnya mencari teman bermain yang supportif.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Melalui layanan unggulan kami, meliputi <span className="text-white font-semibold">Top-Up</span>, <span className="text-white font-semibold">Rekber terpercaya</span>, <span className="text-white font-semibold">Jasa Piloting</span>, <span className="text-white font-semibold">Mabar bareng</span>, <span className="text-white font-semibold">Live Streaming</span>, hingga manajemen <span className="text-white font-semibold">Turnamen</span>. Gaming Suites hadir sebagai solusi digital yang transparan dan profesional. Ditangani oleh tim yang berpengalaman, kami siap menjadi partner terbaik untuk menemani setiap match anda.
            </p>
          </div>
          
          <div className="border-t border-slate-800 pt-6 mt-4 flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>PLATFORM VERIFIED: SECURE & TRUSTED</span>
            <span>EST. 2026</span>
          </div>
        </div>

        {/* Dynamic Trust Badges */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="bg-[#111827]/60 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-4">
              <span className="p-3 bg-[#10b981]/10 text-[#10b981] rounded-xl">
                <Shield className="w-6 h-6" />
              </span>
              <div>
                <h4 className="text-white font-semibold font-display">100% Anti-SARA & Aman</h4>
                <p className="text-[#9ca3af] text-xs mt-1">Sistem Rekber & booster terenkripsi & lolos verifikasi ketat.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827]/60 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-4">
              <span className="p-3 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl">
                <Zap className="w-6 h-6" />
              </span>
              <div>
                <h4 className="text-white font-semibold font-display">Pembayaran Instan Otomatis</h4>
                <p className="text-[#9ca3af] text-xs mt-1">Konfirmasi pembayaran via QRIS dan E-Wallet secepat kilat 24/7.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827]/60 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-4">
              <span className="p-3 bg-[#eab308]/10 text-[#eab308] rounded-xl">
                <Award className="w-6 h-6" />
              </span>
              <div>
                <h4 className="text-white font-semibold font-display">Tim Berpengalaman</h4>
                <p className="text-[#9ca3af] text-xs mt-1">Urusan piloting ditangani oleh pro player tier atas secara cepat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Board */}
      <div className="bg-gradient-to-r from-violet-950/40 via-slate-900/60 to-purple-950/40 border border-slate-800 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-extrabold text-white font-display">10K+</div>
          <p className="text-gray-400 text-sm mt-1">Top-Up Sukses</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white font-display">500+</div>
          <p className="text-gray-400 text-sm mt-1">Pro Booster</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white font-display">1.2K+</div>
          <p className="text-gray-400 text-sm mt-1">Rekber Sukses</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white font-display">4.9/5</div>
          <p className="text-gray-400 text-sm mt-1">Rating Kepuasan</p>
        </div>
      </div>
    </div>
  );
}
