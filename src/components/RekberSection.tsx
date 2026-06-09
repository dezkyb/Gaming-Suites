import React, { useState } from "react";
import { Shield, Sparkles, HelpCircle, CheckCircle, Clock, Send, CreditCard, Lock, User, RefreshCw, X, AlertCircle } from "lucide-react";
import { RekberTransaction } from "../types";

export default function RekberSection() {
  const [transactions, setTransactions] = useState<RekberTransaction[]>([]);
  const [activeTx, setActiveTx] = useState<RekberTransaction | null>(null);

  // Form Inputs
  const [title, setTitle] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [price, setPrice] = useState<number>(150000);
  const [feePayer, setFeePayer] = useState<"buyer" | "seller" | "split">("buyer");
  const [errorText, setErrorText] = useState("");

  const calculateRekberFee = (amount: number) => {
    if (amount <= 100000) return 5000;
    if (amount <= 300000) return 10000;
    if (amount <= 1000000) return 15000;
    return 25000; // Flat fee for large items
  };

  const getPayerShare = (payer: "buyer" | "seller" | "split", fee: number) => {
    if (payer === "buyer") return { buyer: fee, seller: 0 };
    if (payer === "seller") return { buyer: 0, seller: fee };
    return { buyer: Math.round(fee / 2), seller: Math.round(fee / 2) };
  };

  const currentFee = calculateRekberFee(price);
  const feeShares = getPayerShare(feePayer, currentFee);

  const handleCreateRekber = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !buyerName.trim() || !sellerName.trim() || !itemDescription.trim()) {
      setErrorText("Lengkapi seluruh field formulir sebelum membuat portal transaksi Rekber.");
      return;
    }
    setErrorText("");

    const randNum = Math.floor(10000 + Math.random() * 89999);
    const newTx: RekberTransaction = {
      id: `GS-REK-${randNum}`,
      title,
      buyerName,
      sellerName,
      itemDescription,
      price,
      fee: currentFee,
      feePayer,
      status: "waiting-payment",
      createdAt: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      lastUpdated: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
    };

    setTransactions([newTx, ...transactions]);
    setActiveTx(newTx);

    // Reset Inputs
    setTitle("");
    setBuyerName("");
    setSellerName("");
    setItemDescription("");
  };

  const advanceStatus = (txId: string, currentStatus: RekberTransaction["status"]) => {
    let nextStatus: RekberTransaction["status"] = "completed";
    if (currentStatus === "waiting-payment") nextStatus = "payment-verified";
    else if (currentStatus === "payment-verified") nextStatus = "item-shipping";
    else if (currentStatus === "item-shipping") nextStatus = "completed";

    const updatedTx = transactions.map(tx => {
      if (tx.id === txId) {
        return {
          ...tx,
          status: nextStatus,
          lastUpdated: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
        };
      }
      return tx;
    });

    setTransactions(updatedTx);
    const found = updatedTx.find(tx => tx.id === txId);
    if (found) {
      setActiveTx(found);
    }
  };

  const removeTransaction = (txId: string) => {
    setTransactions(transactions.filter(t => t.id !== txId));
    if (activeTx?.id === txId) {
      setActiveTx(null);
    }
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto" id="rekber">
      {/* Header Description */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold font-display text-white mb-2">
          Rekber Portal <span className="text-emerald-400 neon-text-glow">Terpercaya</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Mencegah penipuan dalam jual beli akun game, item, voucher, dan jasa antar gamer. Admin Gaming Suites bertindak sebagai pihak ketiga penjamin dana yang netral dan berintegritas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* REKBER FORM BUILDER (Col: 7) */}
        <div className="lg:col-span-7 bg-[#111827] border border-slate-800 rounded-2xl p-5 sm:p-6">
          <h3 className="text-white font-bold font-display text-lg mb-4 flex items-center gap-2">
            <span className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-md">
              <Lock className="w-4 h-4" />
            </span>
            Buat Rekber Transaksi Baru
          </h3>

          <form onSubmit={handleCreateRekber} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block text-gray-400 mb-1 font-medium text-xs uppercase">Judul Transaksi Rekber</label>
              <input
                type="text"
                placeholder="Contoh: Jual Beli Akun MLBB 140 Skin KOF Epic"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1 font-medium text-xs uppercase">WhatsApp/ID Pembeli</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Contoh: @richard_buyer"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg pl-9 pr-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-1 font-medium text-xs uppercase">WhatsApp/ID Penjual</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Contoh: @dave_seller"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg pl-9 pr-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-1 font-medium text-xs uppercase">Spesifikasi Detail Item / Game / Jasa</label>
              <textarea
                rows={2}
                placeholder="Spesifikasi Akun: Level 54, Total Skin 12, Pindah Email disiapkan oleh penjual..."
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1 font-medium text-xs uppercase">Harga Disepakati (Rupiah)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 font-semibold font-mono">Rp</span>
                  <input
                    type="number"
                    placeholder="Harga..."
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg pl-10 pr-3 py-2 text-white outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-1 font-medium text-xs uppercase">Penanggung Biaya Rekber</label>
                <select
                  value={feePayer}
                  onChange={(e: any) => setFeePayer(e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-2 text-white outline-none focus:border-emerald-500 font-medium"
                >
                  <option value="buyer">Pembeli yang bayar fee ({price.toLocaleString()} + Rp {currentFee.toLocaleString()})</option>
                  <option value="seller">Penjual yang dipotong fee ({price.toLocaleString()} - Rp {currentFee.toLocaleString()})</option>
                  <option value="split">Dibagi Dua (Masing-masing Rp {(currentFee / 2).toLocaleString()})</option>
                </select>
              </div>
            </div>

            {/* Rekber dynamic fee indicator */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 text-xs">
              <div className="flex justify-between font-mono mb-2">
                <span className="text-gray-500">Biaya Administrasi:</span>
                <span className="text-white font-bold">Rp {currentFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-gray-500">Ditanggung oleh:</span>
                <span className="text-[#10b981] font-semibold uppercase">{feePayer}</span>
              </div>
              <div className="border-t border-slate-800 pt-2 mt-2 grid grid-cols-2 text-[10px] text-gray-400 font-mono">
                <div>Buyer Bayar: <span className="text-white font-bold">Rp {feePayer === "buyer" ? (price + currentFee).toLocaleString() : feePayer === "split" ? (price + currentFee/2).toLocaleString() : price.toLocaleString()}</span></div>
                <div>Seller Terima: <span className="text-[#10b981] font-bold">Rp {feePayer === "seller" ? (price - currentFee).toLocaleString() : feePayer === "split" ? (price - currentFee/2).toLocaleString() : price.toLocaleString()}</span></div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl cursor-pointer transition flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Daftarkan Kontrak Rekber di Server</span>
            </button>

            {errorText && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4.5 h-4.5" />
                <span>{errorText}</span>
              </div>
            )}
          </form>
        </div>

        {/* ACTIVE TRANSACTIONS BOARD (Col: 5) */}
        <div className="lg:col-span-5 bg-[#111827] border border-slate-800 rounded-2xl p-5 sm:p-6">
          <h3 className="text-white font-bold font-display text-lg mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-violet-400" />
              Monitor Kontrak Rekber
            </span>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono font-bold">
              {transactions.length} Kontrak
            </span>
          </h3>

          {transactions.length === 0 ? (
            <div className="text-center py-12 px-4 border-2 border-dashed border-slate-800 rounded-xl">
              <Lock className="w-10 h-10 text-slate-750 mx-auto mb-3" />
              <p className="text-gray-500 text-xs">Belum ada transaksi Rekber terbuat.</p>
              <p className="text-gray-600 text-[10px] mt-1 max-w-[200px] mx-auto leading-relaxed">
                Silahkan daftarkan data penjual dan pembeli di formulir sebelah kiri untuk menyimulasikan jaminan aman.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Transactions Tab Selector list */}
              <div className="flex gap-2 pb-2 overflow-x-auto border-b border-slate-800">
                {transactions.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTx(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shrink-0 transition-all ${
                      activeTx?.id === t.id
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-slate-900 text-gray-400 hover:text-gray-200 border border-transparent"
                    }`}
                  >
                    {t.id}
                  </button>
                ))}
              </div>

              {activeTx && (
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded uppercase font-mono">
                      {activeTx.id}
                    </span>
                    <button
                      onClick={() => removeTransaction(activeTx.id)}
                      className="text-gray-500 hover:text-rose-400 font-medium"
                    >
                      Batal Kontrak
                    </button>
                  </div>

                  <h4 className="text-white font-bold text-sm mb-1 font-display leading-snug">{activeTx.title}</h4>
                  <p className="text-gray-400 text-[11px] mb-4 line-clamp-2 italic">{activeTx.itemDescription}</p>

                  <div className="grid grid-cols-2 gap-3 text-[11px] font-mono mb-4 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-gray-500 block">PEMBELI:</span>
                      <span className="text-white font-semibold">{activeTx.buyerName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">PENJUAL:</span>
                      <span className="text-white font-semibold">{activeTx.sellerName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">HARGA ITEM:</span>
                      <span className="text-[#10b981] font-bold">Rp {activeTx.price.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">LOG DATA:</span>
                      <span className="text-gray-400 font-medium">Updated: {activeTx.lastUpdated}</span>
                    </div>
                  </div>

                  {/* ACTIVE TIMELINE GRAPH ICS */}
                  <div className="space-y-4 text-xs">
                    <span className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wider block">
                      Tingkat Status Kontrak Escrow:
                    </span>

                    {/* Step 1 */}
                    <div className="flex gap-3 relative">
                      <div className="absolute top-4 left-2.5 h-full w-0.5 bg-slate-800 -z-10"></div>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono transition-all ${
                        activeTx.status === "waiting-payment"
                          ? "bg-amber-500 text-black border-2 border-amber-400 font-black scale-105"
                          : "bg-emerald-500 text-white"
                      }`}>
                        1
                      </span>
                      <div className="flex-1 pb-1">
                        <strong className="text-white block">Menunggu Transfer Pembeli</strong>
                        <span className="text-[10px] text-gray-400 block">
                          Pembeli diinstruksikan mentransfer uang senilai barang + fee ke rekening wallet resmi Gaming Suites.
                        </span>
                        
                        {activeTx.status === "waiting-payment" && (
                          <button
                            type="button"
                            onClick={() => advanceStatus(activeTx.id, "waiting-payment")}
                            className="mt-2.5 px-3 py-1 bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-[10px] rounded-lg transition active:scale-95 cursor-pointer uppercase flex items-center gap-1"
                          >
                            <RefreshCw className="w-3 h-3 animate-spin" /> Simulasikan Pembeli Transfer Uang
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-3 relative">
                      <div className="absolute top-4 left-2.5 h-full w-0.5 bg-slate-800 -z-10"></div>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono transition-all ${
                        activeTx.status === "payment-verified"
                          ? "bg-violet-500 text-white border-2 border-violet-400 scale-105"
                          : activeTx.status === "waiting-payment"
                          ? "bg-slate-800 text-gray-500"
                          : "bg-emerald-500 text-white"
                      }`}>
                        2
                      </span>
                      <div className="flex-1 pb-1">
                        <strong className={activeTx.status === "waiting-payment" ? "text-gray-500" : "text-white"}>
                          Uang Rekber Diamankan Admin
                        </strong>
                        <span className="text-[10px] text-gray-400 block">
                          Dana sukses diamankan brankas digital escrow. Admin memberi izin hijau bagi Penjual untuk menyerahkan data game.
                        </span>

                        {activeTx.status === "payment-verified" && (
                          <button
                            type="button"
                            onClick={() => advanceStatus(activeTx.id, "payment-verified")}
                            className="mt-2.5 px-3 py-1 bg-violet-500 hover:bg-violet-600 text-white font-extrabold text-[10px] rounded-lg transition active:scale-95 cursor-pointer uppercase flex items-center gap-1"
                          >
                            <Send className="w-3 h-3" /> Simulasikan Penjual Serahkan Akun
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-3 relative">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono transition-all ${
                        activeTx.status === "item-shipping"
                          ? "bg-blue-500 text-white border-2 border-blue-400 scale-105"
                          : activeTx.status === "completed"
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-800 text-gray-500"
                      }`}>
                        3
                      </span>
                      <div className="flex-1 pb-1">
                        <strong className={(activeTx.status === "waiting-payment" || activeTx.status === "payment-verified") ? "text-gray-500" : "text-white"}>
                          Pembeli Menguji & Mengamankan Data
                        </strong>
                        <span className="text-[10px] text-gray-400 block">
                          Pembeli mencocokkan data login, mengubah g-mail recovery, dan nomor telepon. Setelah aman, klik tombol rilis dana.
                        </span>

                        {activeTx.status === "item-shipping" && (
                          <button
                            type="button"
                            onClick={() => advanceStatus(activeTx.id, "item-shipping")}
                            className="mt-2.5 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-[10px] rounded-lg transition active:scale-95 cursor-pointer uppercase flex items-center gap-1"
                          >
                            <Lock className="w-3 h-3" /> Simulasikan Pembeli Rilis Uang
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Completion indicator */}
                    {activeTx.status === "completed" && (
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 flex items-center gap-2 mt-4 animate-bounce">
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="font-bold block text-gray-100">Rekber Sukses Total!</span>
                          Semburan dana telah dirilis Admin seutuhnya ke rekening Penjual ({activeTx.sellerName}). Transaksi terlindungi & beres murni!
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
