import React from "react";
import { PLAYMATES_DATA } from "../data";
import { Star, CheckCircle, Sparkles, Smile, MessageSquare } from "lucide-react";

export default function PlaymateSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="playmates">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -top-6 -z-10 opacity-10">
          <span className="text-7xl sm:text-8xl font-black tracking-widest text-pink-500 font-mono select-none">MABAR</span>
        </div>
        <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
          Sewa Teman Mabar (Playmates)
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Partner Mabar & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Gamer Team Support</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Temukan partner push-rank yang suportif, komunikatif, dan bebas toxic. Layanan mabar ini didesain sepenuhnya untuk memberikan pendampingan berkualitas saat Anda push-rank.
        </p>
      </div>

      {/* Info Rules Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
        <div className="bg-slate-900/30 border border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-pink-500/10 transition-all">
          <div>
            <div className="w-10 h-10 bg-pink-500/10 border border-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 mb-6">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-display text-base mb-3">Karakter Playmate Bebas Toxic</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Seluruh playmate mitra kami telah lolos uji perilaku dan sopan santun. Mereka siap membantu memberikan info di dalam game (callout), menjaga moral game tetap positif meski dalam keadaan kalah (comeback mentality), serta bersedia mengobrol sopan via Voice Chat Discord.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800/80 mt-6 text-[9px] text-slate-500 font-mono uppercase tracking-wider">
            Komitmen: No-toxic / High Positivity
          </div>
        </div>

        <div className="bg-slate-900/30 border border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-pink-500/10 transition-all">
          <div>
            <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/20 rounded-2xl flex items-center justify-center text-violet-400 mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-display text-base mb-3">Gameplay Companion handal</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Playmate tidak hanya mendampingi secara sosial, namun juga memiliki skill game-awareness tinggi. Mereka mampu memberikan supply support role, tanking, ataupun backline backup dengan rating win-rate stabil.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800/80 mt-6 text-[9px] text-slate-500 font-mono uppercase tracking-wider">
            Matchmaking: Discord Co-Voice Active
          </div>
        </div>
      </div>

      {/* Grid of Profile Cards (Descriptive Portfolio Layout) */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-4 bg-pink-500 rounded-full"></span>
          <h3 className="text-white font-bold font-display text-sm tracking-wide">
            Koleksi Profil Playmate Terbaik
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAYMATES_DATA.map((mate) => (
            <div 
              key={mate.id}
              className="bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden hover:border-pink-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Accent header indicator block */}
              <div className={`h-1.5 bg-gradient-to-r ${mate.accentColor}`}></div>
              
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Avatar thumbnail */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <img
                      src={mate.avatar}
                      alt={mate.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl border border-slate-800"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
                  </div>

                  {/* Rating & reviews */}
                  <div className="flex items-center justify-center gap-1 text-[11px] text-yellow-500 mb-2 font-mono">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{mate.rating}</span>
                    <span className="text-slate-500">({mate.reviews} Reviews)</span>
                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-white font-bold text-sm flex items-center justify-center gap-1">
                      <span>{mate.name}</span>
                      <CheckCircle className="w-3 h-3 text-sky-400 fill-current" />
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">@{mate.username}</span>
                  </div>

                  {/* Specialized details info */}
                  <div className="bg-slate-950/40 rounded-2xl p-3 border border-slate-900 text-[11px] space-y-1.5 mb-2">
                    <div className="flex justify-between">
                      <span className="text-slate-550">Game Fokus:</span>
                      <span className="text-pink-300 font-semibold truncate max-w-[110px]">
                        {mate.games.slice(0, 2).join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-550">Divisi Utama:</span>
                      <span className="text-white font-semibold truncate max-w-[110px]">
                        {mate.rank}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-[11px] leading-relaxed italic text-center px-1 py-1.5 min-h-[38px]">
                    "{mate.role}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
