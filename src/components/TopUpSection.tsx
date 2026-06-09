import React, { useState } from "react";
import { GAMES_DATA, PAYMENT_METHODS } from "../data";
import { Game, Bundle, PaymentMethod } from "../types";
import { Check, Flame, ShieldCheck, Sparkles, Smartphone, Award, ClipboardCheck, ArrowRight, X, AlertCircle } from "lucide-react";

export default function TopUpSection() {
  const [selectedGame, setSelectedGame] = useState<Game>(GAMES_DATA[0]);
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [purchasing, setPurchasing] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"none" | "invoice" | "success">("none");
  const [customInvoiceId, setCustomInvoiceId] = useState("");
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    setSelectedBundle(null);
    setErrorMsg("");
  };

  const handleBundleSelect = (bundle: Bundle) => {
    setSelectedBundle(bundle);
    setErrorMsg("");
  };

  const calculateTotal = () => {
    if (!selectedBundle || !selectedPayment) return 0;
    const base = selectedBundle.price;
    const feePercent = selectedPayment.fee;
    const feeFlat = selectedPayment.flatFee;
    return Math.round(base + (base * feePercent) / 100 + feeFlat);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId.trim()) {
      setErrorMsg("Harap masukkan Player ID game Anda.");
      return;
    }
    if (selectedGame.id === "mlbb" && !zoneId.trim()) {
      setErrorMsg("Harap masukkan Zone ID Server Anda.");
      return;
    }
    if (!selectedBundle) {
      setErrorMsg("Harap pilih salah satu nominal atau item topup.");
      return;
    }
    if (!selectedPayment) {
      setErrorMsg("Harap tentukan metode pembayaran instan Anda.");
      return;
    }

    setErrorMsg("");
    // Generate simulated invoice
    const invHex = Math.floor(100000 + Math.random() * 900000);
    setCustomInvoiceId(`GS-INV-${selectedGame.id.toUpperCase()}-${invHex}`);
    setCheckoutStep("invoice");
    setPaymentVerified(false);
  };

  const simulatePaymentVerification = () => {
    setPurchasing(true);
    setTimeout(() => {
      setPurchasing(false);
      setPaymentVerified(true);
      setCheckoutStep("success");
    }, 1800);
  };

  const resetOrder = () => {
    setSelectedBundle(null);
    setUserId("");
    setZoneId("");
    setSelectedPayment(null);
    setCheckoutStep("none");
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto" id="topup">
      {/* Visual Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold font-display text-white mb-2">
          Top-Up Game <span className="text-[#8b5cf6] neon-text-glow">Instan Otomatis</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Layanan isi saldo & mata uang game terkemuka dengan sistem serba otomatis yang aktif 24 jam nonstop. Transaksi aman, legal, terpercaya!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COMPONENT: Game Selector Grid (Col: 4) */}
        <div className="lg:col-span-4 bg-[#111827] border border-slate-800 rounded-2xl p-4 sm:p-6">
          <h3 className="text-white font-bold font-display text-lg mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#8b5cf6] rounded-full"></span>
            1. Pilih Match Game
          </h3>
          <div className="grid grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-1">
            {GAMES_DATA.map((game) => {
              const isSelected = selectedGame.id === game.id;
              return (
                <button
                  key={game.id}
                  onClick={() => handleGameSelect(game)}
                  className={`relative flex flex-col items-center justify-between p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? "border-violet-500 bg-violet-950/20 shadow-md shadow-violet-500/10"
                      : "border-slate-800 bg-[#0f172a] hover:border-slate-700"
                  }`}
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 relative">
                    <img
                      src={game.image}
                      alt={game.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#8b5cf6]/20 flex items-center justify-center">
                        <Check className="w-6 h-6 text-white stroke-[3px]" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-white block truncate w-full">
                    {game.name}
                  </span>
                  <span className="text-[10px] text-gray-500 block truncate mt-0.5">
                    {game.developer}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COMPONENT: Input & Bundles Grid (Col: 8) */}
        <form onSubmit={handleCheckoutSubmit} className="lg:col-span-8 flex flex-col gap-6">
          {/* Section 2: Account Form */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-bold font-display text-lg mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-pink-500 rounded-full"></span>
              2. Masukkan Data Akun Anda
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                  Player ID / User ID Game
                </label>
                <input
                  type="text"
                  placeholder="Masukkan User ID..."
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2.5 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-violet-500"
                />
              </div>

              {selectedGame.id === "mlbb" ? (
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Server Zone ID
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: (1234)"
                    value={zoneId}
                    onChange={(e) => setZoneId(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2.5 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-violet-500"
                  />
                </div>
              ) : (
                <div className="opacity-40 select-none">
                  <label className="block text-gray-500 text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Zone Server (Otomatis)
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Global Region Server"
                    className="w-full bg-[#030712] border border-slate-800 rounded-lg px-4 py-2.5 text-gray-500 font-mono cursor-not-allowed"
                  />
                </div>
              )}
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              *Harap pastikan Player ID game divalidasi dengan seksama agar Diamond/UC tidak terisi ke akun lain.
            </p>
          </div>

          {/* Section 3: Nominal Bundle Selection */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-bold font-display text-lg mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#8b5cf6] rounded-full"></span>
                3. Pilih Item / Nominal Top-Up
              </span>
              <span className="text-[10px] bg-violet-500/15 text-[#a78bfa] border border-violet-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-widest flex items-center gap-1">
                <Flame className="w-3 h-3 text-pink-500 animate-pulse" /> TERLENGKAP
              </span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedGame.bundles.map((bundle) => {
                const isSelected = selectedBundle?.id === bundle.id;
                return (
                  <button
                    key={bundle.id}
                    type="button"
                    onClick={() => handleBundleSelect(bundle)}
                    className={`relative p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer h-28 ${
                      isSelected
                        ? "border-violet-500 bg-violet-950/20 shadow-md shadow-violet-500/15"
                        : "border-slate-800 bg-[#0f172a] hover:border-slate-700/80"
                    }`}
                  >
                    <div>
                      <span className="text-xs text-gray-400 block tracking-tight uppercase line-clamp-1 font-semibold">{bundle.type}</span>
                      <span className="text-white text-sm font-bold block mt-1 font-display line-clamp-2">
                        {bundle.name}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-col">
                      {bundle.originalPrice && (
                        <span className="text-[9px] line-through text-rose-500">
                          Rp {bundle.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-xs font-extrabold text-[#a78bfa] font-mono">
                        Rp {bundle.price.toLocaleString()}
                      </span>
                    </div>

                    {bundle.bonus && (
                      <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-pink-600 text-white text-[8px] font-bold rounded-md">
                        {bundle.bonus}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Secure Digital Payments */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-bold font-display text-lg mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#10b981] rounded-full"></span>
              4. Metode Pembayaran Instan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((payment) => {
                const isSelected = selectedPayment?.id === payment.id;
                return (
                  <button
                    key={payment.id}
                    type="button"
                    onClick={() => setSelectedPayment(payment)}
                    className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer text-left ${
                      isSelected
                        ? "border-[#10b981] bg-emerald-950/15 shadow-sm"
                        : "border-slate-800 bg-[#0f172a] hover:border-slate-700/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-slate-900 border border-slate-700 rounded flex items-center justify-center font-bold font-mono text-[9px] tracking-tight text-white p-1">
                        {payment.logo}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {payment.name}
                        </span>
                        <span className="text-[10px] text-gray-500 block">
                          {payment.fee > 0 ? `Biaya: ${payment.fee}%` : `Biaya flat: Rp ${payment.flatFee}`}
                        </span>
                      </div>
                    </div>

                    <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center">
                      {isSelected && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-gray-400 text-xs">Total Pembayaran Anda:</span>
              <div className="text-2xl font-extrabold text-[#10b981] font-mono leading-tight mt-0.5">
                {selectedBundle && selectedPayment ? (
                  `Rp ${calculateTotal().toLocaleString()}`
                ) : (
                  <span className="text-slate-600 text-lg">Pilih Item & Pembayaran</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 shadow-lg shadow-violet-500/20 text-sm"
            >
              <span>Selesaikan Pesanan & Bayar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {errorMsg && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </form>
      </div>

      {/* OVERLAY MODAL: Checkout / Invoice / Success Simulation */}
      {checkoutStep !== "none" && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                <span className="text-xs tracking-wider font-mono text-gray-400">INVOICE DETAIL</span>
              </div>
              <button
                onClick={resetOrder}
                className="text-gray-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            {checkoutStep === "invoice" ? (
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-xs text-gray-400 block uppercase font-mono tracking-widest">{selectedGame.name} Top-up</span>
                  <h4 className="text-lg font-bold text-white mt-1">{selectedBundle?.name}</h4>
                  <div className="bg-[#030712] rounded-lg p-3 inline-block mt-3 border border-slate-800 font-mono text-sm font-semibold tracking-wider text-violet-300 select-all">
                    {customInvoiceId}
                  </div>
                </div>

                <div className="space-y-3 mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Player ID Game:</span>
                    <span className="text-white font-mono font-semibold">{userId} {zoneId ? `(${zoneId})` : ""}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Layanan:</span>
                    <span className="text-white font-medium">Pengiriman Instan 1-3 Detik</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Metode Bayar:</span>
                    <span className="text-white font-semibold flex items-center gap-1.5 uppercase font-mono">
                      {selectedPayment?.name}
                    </span>
                  </div>
                  <div className="border-t border-slate-800 pt-3 flex justify-between text-base font-bold">
                    <span className="text-gray-200">Total Tagihan:</span>
                    <span className="text-[#10b981] font-mono">Rp {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                {/* QR Code / Payment Instruction Simulation */}
                <div className="bg-[#030712] border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center">
                  <span className="text-[10px] text-[#10b981] font-mono font-semibold uppercase tracking-widest mb-1">
                    QRIS AUTO-GENERATE SCANNER
                  </span>
                  <div className="w-36 h-36 bg-white p-2 rounded-lg relative my-2">
                    {/* Generates a neat fake visual QR Code layout inside the box */}
                    <div className="w-full h-full border-[3px] border-black flex flex-wrap p-1 gap-1">
                      <div className="w-10 h-10 bg-black"></div>
                      <div className="w-10 h-10 bg-white"></div>
                      <div className="w-10 h-10 bg-black"></div>
                      <div className="w-10 h-10 bg-white"></div>
                      <div className="w-10 h-10 bg-black"></div>
                      <div className="w-10 h-10 bg-black"></div>
                      <div className="w-10 h-10 bg-black"></div>
                      <div className="w-10 h-10 bg-white"></div>
                      <div className="w-10 h-10 bg-black"></div>
                    </div>
                    {/* Floating Center Brand */}
                    <div className="absolute inset-0 m-auto w-10 h-10 bg-[#0f172a] rounded-lg border-2 border-[#10b981] p-1 flex items-center justify-center font-mono text-[8px] text-white font-black uppercase">
                      SUITES
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 max-w-[280px]">
                    Scan QRIS di atas menggunakan aplikasi e-wallet Anda (Gopay, OVO, ShopeePay, Dana, dll.) untuk verifikasi instan.
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={simulatePaymentVerification}
                    disabled={purchasing}
                    className="flex-1 py-3 bg-[#10b981] hover:bg-emerald-600 disabled:bg-slate-700 text-white font-bold rounded-xl cursor-pointer transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15"
                  >
                    {purchasing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Memverifikasi...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5" />
                        <span>SAYA SAKTI, SUDAH BAYAR</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              // SUCCESS STEPS
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 text-[#10b981] rounded-full border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 scale-110">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 font-display">
                  Transaksi Berhasil Dikirim!
                </h4>
                <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
                  Pembayaran Anda terverifikasi lunas. Saldo mata uang game seberat <span className="text-white font-semibold">{selectedBundle?.name}</span> sedang diarahkan otomatis ke Player ID <span className="text-[#a78bfa] font-mono">{userId}</span>.
                </p>

                <div className="bg-[#030712] border border-slate-800 p-4 rounded-xl text-left text-xs mb-6 font-mono space-y-2">
                  <div className="text-gray-500 uppercase tracking-widest text-[9px] border-b border-slate-800 pb-1.5 mb-2 flex justify-between">
                    <span>STRUK PEMBAYARAN RESMI</span>
                    <span className="text-emerald-400">LUNAS</span>
                  </div>
                  <div><span className="text-gray-500">Invoice:</span> <span className="text-violet-300">{customInvoiceId}</span></div>
                  <div><span className="text-gray-500">Target Game:</span> <span className="text-white">{selectedGame.name}</span></div>
                  <div><span className="text-gray-500">Nominal:</span> <span className="text-white">{selectedBundle?.name}</span></div>
                  <div><span className="text-gray-500">Metode Bayar:</span> <span className="text-white uppercase">{selectedPayment?.id}</span></div>
                  <div><span className="text-gray-500">Total:</span> <span className="text-[#10b981] font-bold">Rp {calculateTotal().toLocaleString()}</span></div>
                </div>

                <button
                  onClick={resetOrder}
                  className="w-full py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold rounded-xl text-xs sm:text-sm transition cursor-pointer"
                >
                  Selesai & Tutup Jendela Ini
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
