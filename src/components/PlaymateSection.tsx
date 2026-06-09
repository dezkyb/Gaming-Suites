import React, { useState, useEffect } from "react";
import { PLAYMATES_DATA } from "../data";
import { Playmate } from "../types";
import { Search, Volume2, Calendar, Star, Check, ShieldCheck, Heart, Users, MessageSquare, Play, Pause, X, ArrowUpRight } from "lucide-react";

export default function PlaymateSection() {
  const [playmates, setPlaymates] = useState<Playmate[]>(PLAYMATES_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGameFilter, setSelectedGameFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState<"All" | "Male" | "Female">("All");

  // Audio simulation state values
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);

  // Booking details configuration
  const [bookingPlaymate, setBookingPlaymate] = useState<Playmate | null>(null);
  const [gameMode, setGameMode] = useState("Ranked Match");
  const [matchCount, setMatchCount] = useState(3);
  const [notes, setNotes] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Unique games list for filter drawer
  const allGameNames = ["All", "Mobile Legends", "Valorant", "Genshin Impact", "PUBG Mobile", "Free Fire", "Honkai: Star Rail"];

  // Voice player micro-simulator
  useEffect(() => {
    let timer: any;
    if (playingId) {
      timer = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setPlayingId(null);
            return 0;
          }
          return prev + 8; // Ticks up
        });
      }, 150);
    } else {
      setAudioProgress(0);
    }
    return () => clearInterval(timer);
  }, [playingId]);

  const toggleVoicePlay = (playmateId: string) => {
    if (playingId === playmateId) {
      setPlayingId(null);
    } else {
      setPlayingId(playmateId);
      setAudioProgress(0);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingPlaymate) return;

    setBookingSuccess(true);
    const randNo = Math.floor(1000 + Math.random() * 9000);
    setBookingId(`GS-PLAY-${randNo}`);
    setBookingConfirmed(true);
  };

  const triggerCloseBooking = () => {
    setBookingPlaymate(null);
    setBookingConfirmed(false);
    setBookingSuccess(false);
  };

  const filteredPlaymates = playmates.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.role?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGameFilter === "All" || p.games.includes(selectedGameFilter);
    const matchesGender = genderFilter === "All" || p.gender === genderFilter;
    return matchesSearch && matchesGame && matchesGender;
  });

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto" id="playmate">
      {/* Header Info */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold font-display text-white mb-2">
          Cari Teman Mabar & <span className="text-pink-500 neon-text-glow">Playmate</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Bosok main solo terus kena troller? Cari teman gaming mabar suportif, asyik, dan pro player berlevel tinggi untuk push rank atau bersenang-senang bareng!
        </p>
      </div>

      {/* FILTER CONTROLS GRID */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between text-xs sm:text-sm">
        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Cari Playmate atau hobi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-white outline-none focus:border-pink-500 font-medium"
          />
        </div>

        {/* Filters drawer tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
          <span className="text-gray-500 font-mono text-xs hidden sm:inline uppercase">Game:</span>
          <div className="flex flex-wrap gap-1">
            {allGameNames.slice(0, 5).map((game) => (
              <button
                key={game}
                onClick={() => setSelectedGameFilter(game)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedGameFilter === game
                    ? "bg-pink-500 text-white font-bold"
                    : "bg-[#0f172a] text-gray-400 border border-slate-800 hover:text-gray-200"
                }`}
              >
                {game}
              </button>
            ))}
          </div>
        </div>

        {/* Gender Choice Tabs */}
        <div className="flex items-center gap-1.5 bg-[#0f172a] border border-slate-800 p-1 rounded-xl w-full md:w-auto justify-between sm:justify-start">
          <span className="text-gray-500 text-[11px] font-mono pl-2 hidden md:inline">GENDER:</span>
          {(["All", "Male", "Female"] as const).map((genderVal) => (
            <button
              key={genderVal}
              onClick={() => setGenderFilter(genderVal)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition ${
                genderFilter === genderVal
                  ? "bg-slate-800 text-white font-bold"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {genderVal === "All" ? "Semua" : genderVal === "Male" ? "Cowok" : "Cewek"}
            </button>
          ))}
        </div>
      </div>

      {/* COMPANIONS DISPLAY GRID */}
      {filteredPlaymates.length === 0 ? (
        <div className="text-center py-16 bg-[#111827] border border-slate-800 rounded-2xl">
          <Users className="w-12 h-12 text-slate-700 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Playmate tidak cocok dengan filter pencarian pencocokan Anda.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedGameFilter("All");
              setGenderFilter("All");
            }}
            className="mt-3 text-pink-400 text-xs underline font-semibold"
          >
            Reset Semua Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlaymates.map((p) => {
            const isPlayingThisAudio = playingId === p.id;
            return (
              <div
                key={p.id}
                className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Header Banner Background elements */}
                <div className={`h-16 bg-gradient-to-r ${p.accentColor} p-3 flex justify-between items-start relative`}>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-white shadow-xl ${
                    p.status === "online" 
                      ? "bg-[#10b981]" 
                      : p.status === "in-game"
                      ? "bg-[#3b82f6]"
                      : "bg-gray-500"
                  }`}>
                    {p.status === "online" ? "Online" : p.status === "in-game" ? "Mabar" : "Sibuk"}
                  </span>
                  
                  <button className="p-1 bg-black/30 rounded-full hover:bg-black/50 text-white cursor-pointer transition">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Profile Portrait / Core Body details */}
                <div className="p-5 flex-1 flex flex-col items-center text-center -mt-10 relative">
                  <div className="w-18 h-18 rounded-full overflow-hidden border-4 border-[#111827] shadow-lg relative bg-slate-900 mb-2">
                    <img
                      src={p.avatar}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-white font-bold font-display text-sm flex items-center gap-1">
                    {p.name}
                  </h3>
                  <span className="text-[10px] text-gray-500 font-mono">@{p.username}</span>

                  <div className="flex items-center gap-1.5 my-2.5 bg-slate-900 border border-slate-800/80 px-2 py-0.5 rounded-full text-xs text-yellow-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
                    <span>{p.rating}</span>
                    <span className="text-gray-500 font-normal">({p.reviews})</span>
                  </div>

                  <p className="text-gray-300 text-xs leading-normal mt-1 min-h-[36px] line-clamp-2">
                    {p.role}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center mt-3">
                    {p.games.map((g) => (
                      <span key={g} className="bg-slate-900 text-violet-300 text-[9px] font-semibold px-2 py-0.5 rounded-full border border-slate-800">
                        {g}
                      </span>
                    ))}
                  </div>

                  {/* VOICE INTRO SIMULATOR */}
                  <div className="w-full mt-4 bg-[#0f172a] p-2.5 rounded-xl border border-slate-800 text-xs flex items-center justify-between gap-2.5">
                    <button
                      onClick={() => toggleVoicePlay(p.id)}
                      className="w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center shrink-0 cursor-pointer text-xs"
                    >
                      {isPlayingThisAudio ? (
                        <Pause className="w-4 h-4 fill-current text-white stroke-[2.5]" />
                      ) : (
                        <Play className="w-4 h-4 fill-current text-white translate-x-0.5" />
                      )}
                    </button>

                    <div className="flex-1 text-left">
                      <span className="text-gray-500 block text-[9px] font-mono uppercase font-bold tracking-wider leading-none mb-1">
                        {isPlayingThisAudio ? "Memutar Suara..." : "Voice Introduction"}
                      </span>
                      
                      {isPlayingThisAudio ? (
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all duration-150"
                            style={{ width: `${audioProgress}%` }}
                          />
                        </div>
                      ) : (
                        <span className="text-[10px] text-gray-400 font-mono block">Intro_Alya.wav (0:05)</span>
                      )}
                    </div>

                    <Volume2 className={`w-4 h-4 shrink-0 ${isPlayingThisAudio ? "text-pink-500 animate-bounce" : "text-gray-600"}`} />
                  </div>
                </div>

                {/* Pricing & Booking Activator */}
                <div className="border-t border-slate-800 p-4 flex items-center justify-between text-xs bg-[#0f172a]/60">
                  <div>
                    <span className="text-gray-500 text-[10px]">Tarif Sewa:</span>
                    <span className="text-[#10b981] font-bold font-mono block">
                      Rp {p.pricePerMatchHex.toLocaleString()}<span className="text-gray-500 text-[10px] font-normal">/Match</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setBookingPlaymate(p)}
                    className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs rounded-xl cursor-pointer transition hover:scale-[1.03] active:scale-95 flex items-center gap-1 shrink-0"
                  >
                    <span>Mabar Yuk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* RESERVATION CHECKOUT MODAL */}
      {bookingPlaymate && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-pink-400 tracking-wider uppercase">BOOK COMPANION MATCH</span>
              <button
                onClick={triggerCloseBooking}
                className="text-gray-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="p-6">
                <div className="flex items-center gap-4 bg-slate-900 p-3.5 rounded-xl border border-slate-800 mb-5">
                  <img
                    src={bookingPlaymate.avatar}
                    alt={bookingPlaymate.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-500/30"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{bookingPlaymate.name}</h4>
                    <span className="text-[11px] text-gray-500 font-mono">MITRA SEWA TERKAIT • {bookingPlaymate.rank}</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase">Pilih Target Game Mode</label>
                    <select
                      value={gameMode}
                      onChange={(e) => setGameMode(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2 text-white outline-none focus:border-pink-500 text-xs font-medium"
                    >
                      <option value="Ranked Match">Ranked Match Push Star</option>
                      <option value="Classic / Fun Play">Classic / Fun Play</option>
                      <option value="Custom Room 5v5">Custom Room Turnamen / Brawl</option>
                      <option value="Coaching Session (Coaching Clinic)">Coaching & Analisa Gameplay</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase">Jumlah Game Match ({matchCount} Pertandingan)</label>
                    <div className="flex items-center justify-between p-1 bg-[#0f172a] border border-slate-700/80 rounded-lg max-w-[140px] text-white">
                      <button
                        type="button"
                        onClick={() => setMatchCount(Math.max(1, matchCount - 1))}
                        className="w-8 h-8 flex items-center justify-center font-bold bg-slate-900 rounded-lg hover:bg-slate-850 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold font-mono text-xs">{matchCount}</span>
                      <button
                        type="button"
                        onClick={() => setMatchCount(matchCount + 1)}
                        className="w-8 h-8 flex items-center justify-center font-bold bg-slate-900 rounded-lg hover:bg-slate-850 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1.5 font-medium text-xs uppercase">Pesan / Karakter khusus ke Playmate</label>
                    <input
                      type="text"
                      placeholder="Contoh: Tolong pakai Angela kenceng ya, room mabar chat WA dulu"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2 text-white outline-none focus:border-pink-500 text-xs"
                    />
                  </div>

                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-gray-500 block leading-tight">Total Tagihan Booking:</span>
                      <span className="text-[#10b981] font-mono text-base font-bold mt-1 block">
                        Rp {(bookingPlaymate.pricePerMatchHex * matchCount).toLocaleString()}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-pink-500 hover:bg-pink-600 font-bold text-white text-xs rounded-xl transition shadow-lg shadow-pink-500/15 flex items-center gap-1 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Sewa Playmate</span>
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[#10b981]/15 text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#10b981]/25">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <h4 className="text-lg font-bold text-white mb-2 font-display">Antrian Booking Terverifikasi</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto mb-6">
                  Admin telah mem-parsing berkas order <span className="text-pink-400 font-mono font-semibold">{bookingId}</span> ke {bookingPlaymate.name}. Teman mabar Anda akan segera menghubungi Anda melalui nomor terdaftar untuk mabar bareng!
                </p>

                <div className="bg-[#030712] border border-slate-800 p-4 rounded-xl text-left text-xs font-mono mb-6 space-y-1.5 text-gray-300">
                  <div className="text-pink-400 text-[10px] font-bold border-b border-slate-850 pb-1 mb-2">STRUK SEWA TEMAN MABAR</div>
                  <div><span className="text-gray-500">Booking ID:</span> <span className="text-white">{bookingId}</span></div>
                  <div><span className="text-gray-500">Sewa Partner:</span> <span className="text-white">{bookingPlaymate.name}</span></div>
                  <div><span className="text-gray-500">Mata Mode:</span> <span className="text-white">{gameMode}</span></div>
                  <div><span className="text-gray-500">Jumlah Match:</span> <span className="text-white font-bold">{matchCount} Match Game</span></div>
                  <div><span className="text-gray-500">Total Harga:</span> <span className="text-[#10b981] font-bold">Rp {(bookingPlaymate.pricePerMatchHex * matchCount).toLocaleString()}</span></div>
                </div>

                <button
                  onClick={triggerCloseBooking}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs cursor-pointer"
                >
                  Tutup Dan Selesai
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
