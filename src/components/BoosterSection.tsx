import React, { useState } from "react";
import { GAMES_DATA } from "../data";
import { Game, PilotingOption } from "../types";
import { Shield, Sparkles, Award, Zap, Calculator, Check, AlertTriangle, ArrowRight, UserCheck, X } from "lucide-react";

export default function BoosterSection() {
  const [selectedGame, setSelectedGame] = useState<Game>(GAMES_DATA[0]);
  const [selectedOption, setSelectedOption] = useState<PilotingOption | null>(GAMES_DATA[0].pilotingOptions?.[0] || null);
  const [quantity, setQuantity] = useState<number>(5);
  const [loginMethod, setLoginMethod] = useState<"moonton" | "google" | "facebook" | "vk" | "riot" | "epic">("moonton");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [heroRequests, setHeroRequests] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [ordered, setOrdered] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    const firstOption = game.pilotingOptions?.[0] || null;
    setSelectedOption(firstOption);
    setQuantity(5);
    setIsCalculated(false);
  };

  const handleOptionSelect = (option: PilotingOption) => {
    setSelectedOption(option);
    setIsCalculated(false);
  };

  const calculatePrice = () => {
    if (!selectedOption) return 0;
    return selectedOption.basePrice * quantity;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountEmail.trim() || !accountPassword.trim()) {
      alert("Harap isi Email/ID Akun dan Password untuk melanjutkan order piloting.");
      return;
    }
    const randId = Math.floor(200000 + Math.random() * 799999);
    setOrderId(`GS-PILOT-${randId}`);
    setCheckoutModal(true);
    setOrdered(false);
  };

  const triggerOrderSimulation = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOrdered(true);
    }, 1500);
  };

  const resetAll = () => {
    setAccountEmail("");
    setAccountPassword("");
    setHeroRequests("");
    setCheckoutModal(false);
    setOrdered(false);
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto" id="booster">
      {/* Tab Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold font-[#8b5cf6] font-display text-white mb-2">
          Booster Account & <span className="text-[#8b5cf6] neon-text-glow">Jasa Piloting</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Penat macet di tier Epic atau butuh farm harian? Serahkan akun Anda kepada tim Booster Profesional kami. Pengerjaan super cepat, aman 100%, & bergaransi!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* PILOT RULES & CHANNELS */}
        <div className="lg:col-span-4 bg-[#111827] border border-slate-800 rounded-2xl p-6 text-sm">
          <h3 className="text-white font-bold font-display text-base mb-4 flex items-center gap-2">
            <span className="p-1.5 bg-violet-500/10 text-[#8b5cf6] rounded-md">
              <Shield className="w-4 h-4" />
            </span>
            Jaminan Keamanan Jasa Kami
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 bg-emerald-500/10 text-[#10b981] rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✔</span>
              <div>
                <strong className="text-white block text-xs">Metode Pembayaran Resmi</strong>
                <span className="text-xs text-gray-400">Seluruh transaksi pembayaran divalidasi transparan via dashboard.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 bg-emerald-500/10 text-[#10b981] rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✔</span>
              <div>
                <strong className="text-white block text-xs">Enkripsi Password Kencang</strong>
                <span className="text-xs text-gray-400">Password akun dienkripsi dalam server, pro player kami login via token berkode rahasia.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 bg-emerald-500/10 text-[#10b981] rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✔</span>
              <div>
                <strong className="text-white block text-xs">Anti Hackback / No Cheat</strong>
                <span className="text-xs text-gray-400">Dilarang keras memakai aplikasi pihak ketiga / cheat. Akun murni dimainkan manual.</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 bg-emerald-500/10 text-[#10b981] rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✔</span>
              <div>
                <strong className="text-white block text-xs">Garansi Kerugian 100%</strong>
                <span className="text-xs text-gray-400">Mata uang atau item Anda hilang selama piloting? Kami ganti rugi penuh.</span>
              </div>
            </li>
          </ul>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 mt-6 text-xs text-amber-300 flex gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Catatan Penting!</span>
              Tolong matikan Verifikasi 2 Langkah (2FA) sementara waktu saat pro player sedang mengerjakan akun Anda agar proses login mulus.
            </div>
          </div>
        </div>

        {/* INTERACTIVE FORM CALCULATOR */}
        <div className="lg:col-span-8 bg-[#111827] border border-slate-800 rounded-2xl p-6">
          <form onSubmit={handleFormSubmit}>
            {/* Step A: Select Game */}
            <div className="mb-6">
              <label className="block text-gray-400 text-xs font-semibold mb-3 tracking-wider uppercase">
                Pilih Game untuk Jasa Booster
              </label>
              <div className="flex flex-wrap gap-2">
                {GAMES_DATA.map((game) => {
                  const isSelected = selectedGame.id === game.id;
                  return (
                    <button
                      key={game.id}
                      type="button"
                      onClick={() => handleGameSelect(game)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                        isSelected
                          ? "bg-violet-950/40 text-[#a78bfa] border-violet-500"
                          : "bg-[#0f172a] text-gray-400 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {game.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step B: Select Option list */}
            {selectedGame.pilotingOptions && selectedGame.pilotingOptions.length > 0 ? (
              <div className="mb-6">
                <label className="block text-gray-400 text-xs font-semibold mb-3 tracking-wider uppercase">
                  Pilih Paket Piloting
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedGame.pilotingOptions.map((opt) => {
                    const isSelected = selectedOption?.id === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleOptionSelect(opt)}
                        className={`p-4 rounded-xl border text-left flex justify-between items-center transition cursor-pointer ${
                          isSelected
                            ? "bg-violet-950/20 border-violet-500 shadow-md shadow-violet-500/5"
                            : "bg-[#0f172a] border-slate-800 hover:border-slate-750"
                        }`}
                      >
                        <div>
                          <strong className="text-white text-sm block">{opt.name}</strong>
                          <span className="text-[11px] text-gray-500 block mt-0.5 font-mono">
                            Rp {opt.basePrice.toLocaleString()} / {opt.unit}
                          </span>
                        </div>
                        {isSelected && <Check className="w-5 h-5 text-violet-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500 mb-6 font-mono">Booster belum diaktifkan untuk game ini.</p>
            )}

            {/* Step C: Quantity Unit Range */}
            {selectedOption && (
              <div className="mb-6 bg-[#0f172a] p-4 rounded-xl border border-slate-800/80">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-300 text-xs font-semibold">
                    Atur Jumlah Unit Pengerjaan ({selectedOption.unit})
                  </label>
                  <span className="text-white font-mono font-bold text-lg">{quantity} {selectedOption.unit}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
                  <span>1 {selectedOption.unit}</span>
                  <span>50 {selectedOption.unit}</span>
                </div>
              </div>
            )}

            {/* Step D: User Credentials */}
            <div className="mb-6">
              <h4 className="text-white font-semibold font-display text-sm mb-4">
                Informasi Autentikasi Login Akun Game
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium uppercase">Metode Login</label>
                  <select
                    value={loginMethod}
                    onChange={(e: any) => setLoginMethod(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2.5 text-white text-xs outline-none focus:border-violet-500 font-medium"
                  >
                    <option value="moonton">Moonton ID / User ID</option>
                    <option value="riot">Riot Games Account</option>
                    <option value="epic">Epic Games Sync</option>
                    <option value="google">Google Play Account</option>
                    <option value="facebook">Facebook Connect</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium uppercase">Email / Username Akun</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: gaming@gmail.com"
                    value={accountEmail}
                    onChange={(e) => setAccountEmail(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2.5 text-white text-xs outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium uppercase">Password Akun Game</label>
                  <input
                    type="password"
                    required
                    placeholder="Kunci Keamanan Sandi Akun..."
                    value={accountPassword}
                    onChange={(e) => setAccountPassword(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2.5 text-white text-xs outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium uppercase">Hero / Weapon / Catatan Request (Opsional)</label>
                  <input
                    type="text"
                    placeholder="Contoh: Pakai Mage (Alice) / Jgn gunain gold"
                    value={heroRequests}
                    onChange={(e) => setHeroRequests(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2.5 text-white text-xs outline-none focus:border-violet-500"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-[#0f172a]/80 rounded-xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left w-full">
                <span className="text-gray-400 text-xs">Estimasi Penilaian Jasa:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-[#a78bfa] text-2xl font-black font-mono">
                    Rp {calculatePrice().toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">Nett</span>
                </div>
                <span className="text-[10px] text-[#10b981] block mt-1 font-mono">
                  Estimasi pengerjaan: ± 12 - 24 Jam setelah pembayaran
                </span>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold rounded-xl cursor-pointer transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/10 text-sm flex items-center justify-center gap-2 shrink-0"
              >
                <Calculator className="w-4 h-4" />
                <span>Pesan Jasa Joki Sekarang</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SECURE CHECKOUT MODAL BOOSTER */}
      {checkoutModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-[#a78bfa] tracking-wider uppercase">SECURE PILOT BILLING</span>
              <button
                onClick={resetAll}
                className="text-gray-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!ordered ? (
              <div className="p-6">
                <h4 className="text-white text-base font-bold mb-4 font-display text-center">Konfirmasi Jasa Piloting</h4>
                
                <div className="space-y-3 mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Game Terpilih:</span>
                    <span className="text-white font-bold">{selectedGame.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Paket:</span>
                    <span className="text-white font-semibold text-[#8b5cf6]">{selectedOption?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Kuantitas Unit:</span>
                    <span className="text-white font-mono font-bold">{quantity} {selectedOption?.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Login Platform:</span>
                    <span className="text-white uppercase font-semibold text-gray-200">{loginMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Username/Email:</span>
                    <span className="text-white font-mono">{accountEmail}</span>
                  </div>
                  {heroRequests && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Request:</span>
                      <span className="text-white italic">{heroRequests}</span>
                    </div>
                  )}
                  <div className="border-t border-slate-800 pt-3 flex justify-between text-sm font-bold">
                    <span className="text-gray-200">Total Tagihan:</span>
                    <span className="text-[#10b981] font-mono">Rp {calculatePrice().toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-emerald-950/20 text-[#10b981] border border-emerald-500/30 p-3 rounded-lg text-[10px] sm:text-xs leading-relaxed flex gap-2 mb-6">
                  <UserCheck className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Akun Anda dijamin 100% aman dan langsung masuk antrian prioritas utama pro player Booster Suites setelah verifikasi.</span>
                </div>

                <button
                  onClick={triggerOrderSimulation}
                  disabled={submitting}
                  className="w-full py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold rounded-xl cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Mendaftarkan Order...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit & Bayar Tagihan</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[#10b981]/15 text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#10b981]/20">
                  <Check className="w-8 h-8 font-black" />
                </div>

                <h4 className="text-lg font-bold text-white mb-2 font-display">Pengerjaan Piloting Dimulai!</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto mb-6">
                  Order Anda <span className="text-violet-300 font-mono font-semibold">{orderId}</span> berkasnya telah didistribusikan ke pro player kami. Harap pantau detail akun Anda dan hindari melakukan tabrakan login (re-login) selama pengerjaan.
                </p>

                <div className="bg-[#030712] border border-slate-800 p-4 rounded-xl text-left text-xs font-mono mb-6 space-y-1.5 text-gray-300">
                  <div className="text-[#10b981] text-[10px] font-bold border-b border-slate-850 pb-1 mb-2">BUKTI ANTRIAN AKTIF</div>
                  <div><span className="text-gray-500">Order ID:</span> <span className="text-white">{orderId}</span></div>
                  <div><span className="text-gray-500">Game:</span> <span className="text-white">{selectedGame.name}</span></div>
                  <div><span className="text-gray-500">Service:</span> <span className="text-white">{selectedOption?.name} ({quantity}x)</span></div>
                  <div><span className="text-gray-500">Sandi Akun:</span> <span className="text-gray-500">•••••••• (Terenkripsi)</span></div>
                  <div><span className="text-gray-500">Status:</span> <span className="text-amber-400 font-bold">On-Progress</span></div>
                </div>

                <button
                  onClick={resetAll}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs cursor-pointer"
                >
                  Tutup Notifikasi & Kembali
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
