import React from "react";
import { ShieldCheck, Award, Zap, Sparkles, Lock } from "lucide-react";

export default function BoosterSection() {
  const serviceHighlights = [
    {
      title: "Joki Rank Bintang / Tier",
      game: "Mobile Legends & Wild Rift",
      desc: "Mendukung penambahan bintang dari tier terkecil hingga tier Mythical Glory dengan jaminan win rate di atas 75%.",
      speed: "Estimasi: 12-24 Jam",
      color: "from-violet-500/20 to-indigo-500/10",
      accent: "text-violet-400"
    },
    {
      title: "Jasa Exploration & Questing",
      game: "Genshin Impact",
      desc: "Penyelesaian misi harian, quest utama (Archon/Story), pengumpulan material penunjang, hingga eksplorasi map regional sampai 100%.",
      speed: "Estimasi: Fleksibel Harian",
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400"
    },
    {
      title: "Joki Divisi Kompetitif",
      game: "Valorant & PUBG Mobile",
      desc: "Peningkatan tier kompetitif dari tingkat Iron ke Diamond dikerjakan oleh roster semi-pro kami yang handal dan bebas cheat.",
      speed: "Estimasi: 24-48 Jam",
      color: "from-pink-500/20 to-rose-500/10",
      accent: "text-pink-400"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="booster">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -top-6 -z-10 opacity-10">
          <span className="text-7xl sm:text-8xl font-black tracking-widest text-cyan-500 font-mono select-none">BOOSTER</span>
        </div>
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
          Jasa Piloting Profesional
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Layanan Joki Jasa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Account Booster</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Uraian dan rincian alur kerja jasa joki & booster akun terpercaya di Gaming Suites. Didesain transparan, aman, dan 100% dikerjakan pro player profesional.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {serviceHighlights.map((hl, idx) => (
          <div 
            key={idx}
            className={`bg-slate-900/30 border border-slate-800 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-slate-700 transition`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-mono uppercase bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-slate-400`}>
                  {hl.game}
                </span>
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{hl.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{hl.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
              <span className="font-mono">{hl.speed}</span>
              <span className={`font-bold ${hl.accent}`}>Terproteksi</span>
            </div>
          </div>
        ))}
      </div>

      {/* Security Info Grid */}
      <div className="bg-gradient-to-r from-cyan-950/15 via-slate-900/40 to-violet-950/15 border border-slate-800 rounded-3xl p-8 max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          <span className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/15">
            <Lock className="w-5 h-5" />
          </span>
          <div className="text-xs sm:text-sm space-y-3">
            <h4 className="text-white font-bold text-base">Protokol Keamanan Data Akun</h4>
            <p className="text-slate-400 leading-relaxed">
              Keamanan akun Klien adalah prioritas mutlak kami. Selama pengerjaan joki, sandi klien dilindungi melalui enkripsi sistem token sementara. Pro player kami berkewajiban melaporkan progress secara berkala dan dilarang keras membuka tab chat, mengubah setting berteman, ataupun menjual item di dalam game Anda.
            </p>
            <div className="flex gap-4 pt-1 flex-wrap text-[10px] font-mono text-cyan-300">
              <span>✔ No Cheat/3rd Party App</span>
              <span>✔ VPN Matchmaking Secure</span>
              <span>✔ Full Confidentiality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
