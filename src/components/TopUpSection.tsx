import React from "react";
import { GAMES_DATA } from "../data";
import { ShieldCheck, Zap, Tag, Sparkles } from "lucide-react";

export default function TopUpSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="topup">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -top-6 -z-10 opacity-10">
          <span className="text-7xl sm:text-8xl font-black tracking-widest text-[#a78bfa] font-mono select-none">TOPUP</span>
        </div>
        <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
          Layanan Eksklusif
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Penjelasan Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Top-Up Instan</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Berikut adalah penjelasan detail teknis mengenai layanan pengisian instan atau Top-Up Game resmi yang kami sediakan untuk memenuhi kebutuhan visual portofolio Anda.
        </p>
      </div>

      {/* Grid of Supported Games (Descriptive only) */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-4 bg-violet-500 rounded-full"></span>
          <h3 className="text-white font-bold font-display text-sm tracking-wide">
            Katalog Game Mitra Terintegrasi
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMES_DATA.map((game) => (
            <div 
              key={game.id}
              className="bg-slate-900/30 border border-slate-800 p-5 rounded-3xl hover:border-violet-500/30 transition-all duration-300 flex items-start gap-4"
            >
              <img 
                src={game.image} 
                alt={game.name} 
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-2xl object-cover border border-slate-800 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">{game.developer}</span>
                <h4 className="text-white font-bold text-sm mb-1 truncate">{game.name}</h4>
                <p className="text-slate-400 text-xs truncate">Mendukung Diamond, Coin & Pass</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 text-[#a78bfa] rounded text-[9px] font-semibold">
                    Instan 2 Detik
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded text-[9px] font-semibold">
                    Garansi Legalitas
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Cards (Explaining how this works) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
        {/* Left explanation card */}
        <div className="bg-slate-900/20 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-violet-500/20 transition-all">
          <div>
            <div className="w-10 h-10 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-2xl flex items-center justify-center text-[#a78bfa] mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-display text-base mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">Garansi Legalitas 100% Resmi</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Seluruh transaksi top-up game diproses langsung melalui jalur API terverifikasi publisher game. Kami tidak menggunakan metode ilegal seperti login pihak ketiga ataupun exploit refund yang berisiko membuat akun di-banned.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Klien tidak perlu memberikan koordinat detail login / sandi pribadi — pengisian hanya membutuhkan ID unik Pemain & Kode Server demi menjamin proteksi data optimal.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800/50 mt-6 text-[9px] text-slate-500 font-mono uppercase tracking-wider">
            Integrasi: Secure API Gateway
          </div>
        </div>

        {/* Right explanation card */}
        <div className="bg-slate-900/20 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-violet-500/20 transition-all">
          <div>
            <div className="w-10 h-10 bg-cyan-600/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-display text-base mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">Callback Pembayaran Instan</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Kami menyimulasikan integrasi real-time dengan payment gateway nasional (QRIS, OVO, ShopeePay, Virtual Account). Begitu validasi sukses berjalan, callback response memicu payload pengرسidan item secara instan.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Rata-rata kecepatan pemrosesan berkisar antara 2 hingga 10 detik dalam keadaan jaringan server normal.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800/50 mt-6 text-[9px] text-slate-500 font-mono uppercase tracking-wider">
            Estimasi Kecepatan: &le; 10 Detik
          </div>
        </div>
      </div>
    </div>
  );
}
