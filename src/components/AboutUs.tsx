import React from "react";
import { Shield, Sparkles, Users, Zap, Award, Target, Github, Mail, Laptop } from "lucide-react";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dezky Putera Satrio",
      role: "Lead Fullstack Developer & Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", // Representative profile avatar
      bio: "Bertanggung jawab atas arsitektur sistem, desain UI/UX, dan optimasi load speed landing page Gaming Suites.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      name: "Gaming Suites Support Unit",
      role: "Classmate Collaborator / QA Tester",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      bio: "Menguji kompatibilitas layout, pengiriman QRIS, validasi responsive design, dan pengemasan file ekspor ZIP.",
      tech: ["Lighthouse", "PostCSS", "Git Workflow"]
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="about-us">
      {/* Hero Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -top-6 -z-10 opacity-10">
          <span className="text-8xl font-black tracking-widest text-[#8b5cf6] font-mono select-none">ABOUT</span>
        </div>
        <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
          Profil Ekosistem & Tim
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Tentang <span className="text-[#8b5cf6] neon-text-glow">Gaming Suites</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#8b5cf6] to-pink-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-3xl mx-auto text-base leading-relaxed">
          Gaming Suites adalah platform penyedia layanan ekosistem gaming terintegrasi yang berkomitmen untuk memberikan pengalaman bermain game yang lebih mudah, aman, dan menyenangkan.
        </p>
      </div>

      {/* Main Narrative Layout - Bento Grid / Split Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        <div className="lg:col-span-7 bg-slate-900/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between hover:border-violet-500/10 transition-all duration-300">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-violet-500/10 text-[#8b5cf6] rounded-xl border border-violet-500/20">
                <Target className="w-5 h-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">Visi & Komitmen Kami</h3>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Kami memahami perjuangan para gamer masa kini: berurusan dengan penipuan transfer top-up, kesulitan mencari joki booster terpercaya, hingga rumitnya bertumpu pada escrow yang lambat.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Oleh karena itu, kami menuangkan ide kreatif ini menjadi satu website portofolio interaktif bernama <span className="text-white font-semibold">Gaming Suites</span>. Portofolio tugas ini didesain sepenuhnya responsif agar dapat langsung disematkan (embed) pada Google Sites dengan jaminan penyesuaian layar yang mulus tanpa mengorbankan estetika visual.
            </p>
          </div>
          
          <div className="border-t border-slate-800/80 pt-6 mt-6 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>PROYEK PORTOFOLIO SELESAI</span>
            <span>EST. 2026</span>
          </div>
        </div>

        {/* Dynamic Trust Badges */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-800/80 hover:border-violet-500/20 transition-all flex items-start gap-4">
            <span className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Shield className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-white text-xs font-bold font-display uppercase tracking-wider">Keamanan Data Terenkripsi</h4>
              <p className="text-[#9ca3af] text-[10px] mt-1 leading-relaxed">
                Detail transaksi, joki log, dan rekber escrow disimulasikan aman tanpa pengeksposan credential sensitif.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-800/80 hover:border-violet-500/20 transition-all flex items-start gap-4">
            <span className="p-2.5 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl">
              <Zap className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-white text-xs font-bold font-display uppercase tracking-wider">Terintegrasi Google Sites</h4>
              <p className="text-[#9ca3af] text-[10px] mt-1 leading-relaxed">
                Mudah dimasukkan menggunakan IFrame Code responsif sehingga menaikkan poin visual dalam penilaian tugas.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-800/80 hover:border-violet-500/20 transition-all flex items-start gap-4">
            <span className="p-2.5 bg-yellow-500/10 text-[#eab308] rounded-xl">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-white text-xs font-bold font-display uppercase tracking-wider">Koleksi Joki & Playmate</h4>
              <p className="text-[#9ca3af] text-[10px] mt-1 leading-relaxed">
                Tersedia data pro player dan profil gamer ramah sebagai opsi katalog layanan mabar terhebat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Board */}
      <div className="bg-gradient-to-r from-violet-950/20 via-slate-900/40 to-purple-950/20 border border-slate-800/80 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center backdrop-blur-sm">
        <div>
          <div className="text-3xl font-extrabold text-white font-display">10K+</div>
          <p className="text-slate-500 text-xs mt-1">Kunjungan Bulan Ini</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white font-display">500+</div>
          <p className="text-slate-500 text-xs mt-1">Koleksi Pro Booster</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white font-display">100%</div>
          <p className="text-slate-500 text-xs mt-1">Selesai Bergaransi</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white font-display">4.9/5</div>
          <p className="text-slate-500 text-xs mt-1">Feedback Rating</p>
        </div>
      </div>
    </div>
  );
}
