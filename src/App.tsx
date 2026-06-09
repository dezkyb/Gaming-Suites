import React, { useState } from "react";
import TopUpSection from "./components/TopUpSection";
import BoosterSection from "./components/BoosterSection";
import RekberSection from "./components/RekberSection";
import PlaymateSection from "./components/PlaymateSection";
import AboutUs from "./components/AboutUs";
import EmbedHelper from "./components/EmbedHelper";
import { TESTIMONIALS_DATA } from "./data";
import { 
  Gamepad2, 
  Zap, 
  ShieldAlert, 
  Users, 
  Code, 
  Star, 
  ShieldCheck,
  MapPin, 
  Sparkles, 
  Clock, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Info,
  Layers,
  Heart
} from "lucide-react";

export default function App() {
  // Navigation states: "home" | "topup" | "booster" | "rekber" | "playmates" | "about" | "embed"
  const [activeTab, setActiveTab] = useState<"home" | "topup" | "booster" | "rekber" | "playmates" | "about" | "embed">("home");
  
  // Testimonial slider index
  const [currentTesti, setCurrentTesti] = useState(0);

  const nextTesti = () => {
    setCurrentTesti((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTesti = () => {
    setCurrentTesti((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-violet-600 selection:text-white">
      
      {/* 1. SECURE GLOBAL ALERT HEADER */}
      <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border-b border-slate-800/80 px-4 py-2.5 text-center text-xs">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          <span className="bg-violet-500/10 text-violet-400 border border-violet-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider text-[10px]">
            Server Active
          </span>
          <span className="text-slate-300 font-medium">Layanan Top-Up & Rekber fully auto active 24/7.</span>
          <button 
            onClick={() => setActiveTab("embed")} 
            className="text-violet-400 hover:text-violet-300 font-bold underline transition flex items-center gap-1 pl-1 cursor-pointer"
          >
            Sematkan ke Google Sites Anda <Code className="w-3.5 h-3.5" />
          </button>
        </p>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-slate-900/50 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo brand */}
          <button 
            onClick={() => setActiveTab("home")} 
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black italic shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-all">
              GS
            </div>
            <div>
              <span className="text-xl font-bold tracking-tighter text-white">
                GAMING<span className="text-violet-500">SUITES</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold mr-4">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "home" ? "bg-slate-900 text-[#a78bfa]" : "text-gray-400 hover:text-white"
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => setActiveTab("topup")}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "topup" ? "bg-slate-900 text-[#a78bfa]" : "text-gray-400 hover:text-white"
              }`}
            >
              Top-Up Game
            </button>
            <button
              onClick={() => setActiveTab("booster")}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "booster" ? "bg-slate-900 text-[#a78bfa]" : "text-gray-400 hover:text-white"
              }`}
            >
              Jasa Booster
            </button>
            <button
              onClick={() => setActiveTab("rekber")}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "rekber" ? "bg-slate-900 text-[#a78bfa]" : "text-gray-400 hover:text-white"
              }`}
            >
              Rekber Portal
            </button>
            <button
              onClick={() => setActiveTab("playmates")}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "playmates" ? "bg-slate-900 text-[#a78bfa]" : "text-gray-400 hover:text-white"
              }`}
            >
              Sewa Playmate
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "about" ? "bg-slate-900 text-[#a78bfa]" : "text-gray-400 hover:text-white"
              }`}
            >
              About Us
            </button>
          </nav>

          {/* Embed Helper Callout button */}
          <button
            onClick={() => setActiveTab("embed")}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8b5cf6]/10 hover:bg-[#8b5cf6]/20 text-[#a78bfa] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 text-xs font-bold rounded-lg cursor-pointer transition-all"
          >
            <Code className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Embed Code</span>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex md:hidden items-center justify-around bg-slate-950 border-t border-slate-800/80 py-2.5 overflow-x-auto text-[10px] font-bold text-slate-500 shrink-0 select-none">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-violet-400" : "hover:text-gray-300"}`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveTab("topup")}
            className={`flex flex-col items-center gap-1 ${activeTab === "topup" ? "text-violet-400" : "hover:text-gray-300"}`}
          >
            <Zap className="w-4 h-4" />
            <span>TopUp</span>
          </button>
          <button
            onClick={() => setActiveTab("booster")}
            className={`flex flex-col items-center gap-1 ${activeTab === "booster" ? "text-violet-400" : "hover:text-gray-300"}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Booster</span>
          </button>
          <button
            onClick={() => setActiveTab("rekber")}
            className={`flex flex-col items-center gap-1 ${activeTab === "rekber" ? "text-violet-400" : "hover:text-gray-300"}`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Rekber</span>
          </button>
          <button
            onClick={() => setActiveTab("playmates")}
            className={`flex flex-col items-center gap-1 ${activeTab === "playmates" ? "text-violet-400" : "hover:text-gray-300"}`}
          >
            <Users className="w-4 h-4" />
            <span>Playmate</span>
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`flex flex-col items-center gap-1 ${activeTab === "about" ? "text-violet-400" : "hover:text-gray-300"}`}
          >
            <Info className="w-4 h-4" />
            <span>About</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN WORKSPACE */}
      <main className="flex-1 pb-16">
        
        {/* VIEW A: HOME / INDEX LANDING PAGE */}
        {activeTab === "home" && (
          <div>
            {/* HERO PROMOTION SECTION */}
            <section className="relative overflow-hidden py-16 px-4 border-b border-slate-900 bg-gradient-to-b from-slate-900/30 to-transparent">
              {/* Decorative Blur Orbs */}
              <div className="absolute top-10 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>

              <div className="max-w-4xl mx-auto text-center relative">
                <span className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  Instan, Aman & Profesional
                </span>

                <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight mb-4 leading-tight">
                  Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Gaming Experience.</span>
                </h1>
                
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                  Solusi ekosistem gaming terintegrasi. Dari Top-Up kilat hingga jasa piloting profesional. Kami hadir sebagai partner terbaik untuk menemani setiap match Anda.
                </p>

                {/* Hero Feature Actions Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-xs sm:text-sm">
                  <button
                    onClick={() => setActiveTab("topup")}
                    className="group p-5 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-3xl transition-all duration-200 cursor-pointer text-center hover:scale-[1.02] shadow-sm select-none"
                  >
                    <div className="w-12 h-12 bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-500 mb-4 mx-auto transition-transform group-hover:scale-105">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <strong className="text-white block font-bold mb-1">Instant Top-Up</strong>
                    <span className="text-slate-500 text-[10px] leading-relaxed block">Layanan pembayaran instan untuk 100+ judul game populer.</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("booster")}
                    className="group p-5 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-3xl transition-all duration-200 cursor-pointer text-center hover:scale-[1.02] shadow-sm select-none"
                  >
                    <div className="w-12 h-12 bg-cyan-600/20 rounded-2xl flex items-center justify-center text-cyan-500 mb-4 mx-auto transition-transform group-hover:scale-105">
                      <Sparkles className="w-5 h-5 text-violet-400" />
                    </div>
                    <strong className="text-white block font-bold mb-1">Account Booster</strong>
                    <span className="text-slate-500 text-[10px] leading-relaxed block">Jasa piloting/joki rank terpercaya dengan progress real-time.</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("rekber")}
                    className="group p-5 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-3xl transition-all duration-200 cursor-pointer text-center hover:scale-[1.02] shadow-sm select-none"
                  >
                    <div className="w-12 h-12 bg-amber-600/20 rounded-2xl flex items-center justify-center text-amber-500 mb-4 mx-auto transition-transform group-hover:scale-105">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <strong className="text-white block font-bold mb-1">Rekber Portal</strong>
                    <span className="text-slate-500 text-[10px] leading-relaxed block">Jembatan transaksi aman untuk jual beli akun dan item game.</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("playmates")}
                    className="group p-5 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-3xl transition-all duration-200 cursor-pointer text-center hover:scale-[1.02] shadow-sm select-none"
                  >
                    <div className="w-12 h-12 bg-pink-600/20 rounded-2xl flex items-center justify-center text-pink-500 mb-4 mx-auto transition-transform group-hover:scale-105">
                      <Users className="w-5 h-5 text-pink-400" />
                    </div>
                    <strong className="text-white block font-bold mb-1">Playmate & Live</strong>
                    <span className="text-slate-500 text-[10px] leading-relaxed block">Cari teman mabar supportif atau tonton live stream pro-player.</span>
                  </button>
                </div>
              </div>
            </section>

            {/* BRIEF ABOUT INTEGRATED STATS (exact Text required) */}
            <section className="py-12 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-slate-900">
              <div className="bg-gradient-to-br from-violet-950/30 via-slate-950 to-cyan-950/20 p-8 rounded-3xl border border-slate-800 relative overflow-hidden backdrop-blur-sm shadow-xl">
                <span className="absolute top-2 right-3 text-[10px] font-mono text-slate-700 select-none">SUITES_NARRATIVE</span>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4">
                  Tentang Ekosistem <span className="text-[#a78bfa] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Gaming Suites</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Gaming Suites adalah platform penyedia layanan ekosistem gaming terintegrasi yang berkomitmen untuk memberikan pengalaman bermain game yang lebih mudah, aman, dan menyenangkan.
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Kami memahami tantangan para gamer saat ini, mulai dari maraknya penipuan transaksi hingga sulitnya mencari teman bermain yang supportif. Melalui layanan unggulan kami, Gaming Suites siap menemani match terbaik Anda!
                </p>
                <button
                  onClick={() => setActiveTab("about")}
                  className="mt-6 text-violet-400 hover:text-violet-300 text-xs font-bold flex items-center gap-1 underline transition cursor-pointer"
                >
                  Selengkapnya tentang visi kami <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* LIVE CAMPAIGN SLIDER */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] backdrop-blur-sm shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                    <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Testimoni Gamer Aktif</span>
                    <div className="flex items-center text-yellow-400 gap-0.5 text-xs">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{TESTIMONIALS_DATA[currentTesti].text}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={TESTIMONIALS_DATA[currentTesti].avatar}
                      alt={TESTIMONIALS_DATA[currentTesti].name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-800"
                    />
                    <div>
                      <h4 className="text-white text-xs font-bold font-display">{TESTIMONIALS_DATA[currentTesti].name}</h4>
                      <span className="text-[10px] text-slate-500 font-medium">{TESTIMONIALS_DATA[currentTesti].role}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevTesti}
                      className="p-1 px-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white cursor-pointer active:scale-90 transition text-xs"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={nextTesti}
                      className="p-1 px-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white cursor-pointer active:scale-90 transition text-xs"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Google Sites Quick Inject Tool Helper card */}
            <section className="py-12 max-w-4xl mx-auto px-4 text-center">
              <div className="bg-slate-900/50 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/15 to-transparent pointer-events-none"></div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-display">
                  Ingin Memasang Widget Gaming Suites di Google Sites Anda?
                </h3>
                <p className="text-slate-400 text-xs max-w-lg mx-auto leading-relaxed mb-6">
                  Cukup salin sebaris kode `iframe` responsif untuk memindahkan seluruh ekosistem transaksi instan ini ke situs portofolio atau marketplace pribadi Anda.
                </p>
                <button
                  onClick={() => setActiveTab("embed")}
                  className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl cursor-pointer transition shadow-lg shadow-violet-500/10"
                >
                  Buka Google Sites Embed Builder
                </button>
              </div>
            </section>
          </div>
        )}

        {/* VIEW B: TOP-UP GAME SECTION */}
        {activeTab === "topup" && <TopUpSection />}

        {/* VIEW C: BOOSTER ACCOUNT / PILOTING SECTION */}
        {activeTab === "booster" && <BoosterSection />}

        {/* VIEW D: REKBER ESCROW PORTAL CO-MUTUAL */}
        {activeTab === "rekber" && <RekberSection />}

        {/* VIEW E: PLAYMATES MATCHER */}
        {activeTab === "playmates" && <PlaymateSection />}

        {/* VIEW F: ABOUT US STATEMENTS */}
        {activeTab === "about" && <AboutUs />}

        {/* VIEW G: EMBED BUILDER DICTIONARY */}
        {activeTab === "embed" && <EmbedHelper />}
        
      </main>

      {/* 4. FOOTER CREDITS */}
      <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 py-10 text-xs text-slate-500 shrink-0 font-sans">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <strong className="text-sm font-display text-white">Gaming Suites</strong>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Platform penyedia ekosistem gaming terintegrasi: Top-up instant secepat kilat, Jasa Piloting terenkripsi 100% aman, Rekber Portal tepercaya, serta sewa Teman Mabar (Playmates).
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs mb-3 font-display">Keamanan & Layanan</h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>✔ Verifikasi QRIS Kilat Otomatis 2 Detik</li>
              <li>✔ Jaminan Enkripsi Sandi Jasa Booster</li>
              <li>✔ Alur Escrow Netral / Rekening Bersama</li>
              <li>✔ Partner Mabar Bertingkat Skill Prioritas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs mb-3 font-display">Hubungkan Ke Google Sites</h4>
            <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
              Didesain full responsif untuk disematkan dengan sempurna tanpa mengurangi latensi atau kecepatan.
            </p>
            <button
              onClick={() => setActiveTab("embed")}
              className="text-[#a78bfa] hover:text-violet-300 underline font-bold text-xs"
            >
              Dapatkan IFrame Kode Embed Sites &gt;
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 border-t border-slate-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 font-mono">
          <span>&copy; {new Date().getFullYear()} GAMING SUITES INC. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            <span>SECURE BY ESCROW SSL</span>
            <span>POWERED BY VITE + REACT</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
