import React from "react";
import { ShieldAlert, ShieldCheck, ArrowRight, DollarSign, Users, CheckCircle, Clipboard, ArrowDown, ExternalLink } from "lucide-react";

export default function RekberSection() {
  const stepList = [
    {
      step: "01",
      sender: "Pembeli",
      action: "Transfer Dana",
      desc: "Pembeli mentransfer total harga akun/item game ditambah biaya administrasi rekber ke rekening bank resmi/QRIS Gaming Suites.",
      color: "from-blue-600 to-indigo-500",
      status: "Uang diamankan Escrow"
    },
    {
      step: "02",
      sender: "Sistem Escrow",
      action: "Verifikasi & Amankan",
      desc: "Admin Gaming Suites memverifikasi dana masuk dan mengonfirmasi pelunasan secara otomatis ke kedua belah pihak di ruang chat virtual.",
      color: "from-violet-600 to-fuchsia-500",
      status: "Notifikasi Otomatis"
    },
    {
      step: "03",
      sender: "Penjual",
      action: "Serahkan Data Akun",
      desc: "Penjual memindahkan data credential (email, password, secure key) secara langsung ke pembeli. Pembeli dipersilakan mengamankan.",
      color: "from-yellow-600 to-amber-500",
      status: "Proses Verifikasi Data"
    },
    {
      step: "04",
      sender: "Pembeli & Sistem",
      action: "Konfirmasi & Cairkan",
      desc: "Setelah pembeli memverifikasi akun aman, pembeli mengklik selesai. Sistem melepaskan dana aman langsung ke rekening penjual.",
      color: "from-emerald-600 to-teal-500",
      status: "Transaksi Sukses Lunas"
    }
  ];

  const adminFees = [
    { range: "Rp 10.000 - Rp 50.000", fee: "Rp 2.000" },
    { range: "Rp 50.001 - Rp 150.000", fee: "Rp 5.000" },
    { range: "Rp 150.001 - Rp 500.000", fee: "Rp 8.000" },
    { range: "Rp 500.001 - Rp 1.000.000", fee: "Rp 12.000" },
    { range: "Rp 1.000.001 - Ke Atas", fee: "Hanya 1.5% dari Total" }
  ];

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto" id="rekber">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
          Sistem Rekber 100% Aman
        </span>
        <h2 className="text-3xl font-extrabold font-display text-white mb-2">
          Rekber Portal <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Escrow System</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Hindari penipuan saat bertransaksi akun atau item game. Sistem Escrow kami bertindak sebagai penengah netral tepercaya untuk menjamin keadilan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Step-by-Step Info Map */}
        <div className="lg:col-span-8 bg-slate-900/30 border border-slate-850 p-6 sm:p-8 rounded-3xl backdrop-blur-sm flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold font-display text-sm mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-violet-500 rounded-full"></span>
              Alur Transaksi Rekber Rekening Bersama
            </h3>

            {/* Vertical/Horizontal Flowchart */}
            <div className="space-y-4">
              {stepList.map((st, idx) => (
                <div 
                  key={st.step} 
                  className="flex flex-col sm:flex-row items-stretch gap-4 p-5 rounded-2xl border border-slate-800 bg-slate-950/40 relative group hover:border-slate-700 transition"
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:justify-start sm:w-24 shrink-0 border-b sm:border-b-0 sm:border-r border-slate-900 pb-3 sm:pb-0 sm:pr-4">
                    <span className="text-2xl font-black font-mono text-slate-700">{st.step}</span>
                    <span className="text-[10px] bg-violet-500/10 border border-violet-500/15 text-violet-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider block whitespace-nowrap">
                      {st.sender}
                    </span>
                  </div>

                  <div className="flex-1 space-y-1">
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">
                      <span>{st.action}</span>
                      <span className="text-[9px] text-[#10b981] bg-emerald-500/10 border border-emerald-500/20 px-1.5 rounded font-mono font-medium">
                        {st.status}
                      </span>
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin Fee Catalog Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-3xl backdrop-blur-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-white font-bold font-display text-sm mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#8b5cf6] rounded-full"></span>
                Tabel Biaya Rekber
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Kami menerapkan tarif administrasi yang transparan dan bersahabat demi menunjang fasilitas escrow andal:
              </p>

              <div className="border border-slate-800 rounded-2xl overflow-hidden text-xs">
                <div className="grid grid-cols-2 bg-slate-950 p-3 font-semibold text-white border-b border-slate-800 font-mono text-[10px] tracking-wider uppercase">
                  <span>Nilai Transaksi</span>
                  <span className="text-right">Biaya Admin</span>
                </div>
                {adminFees.map((fee, idx) => (
                  <div 
                    key={idx} 
                    className={`grid grid-cols-2 p-3 font-mono text-slate-300 ${
                      idx !== adminFees.length - 1 ? "border-b border-slate-900" : ""
                    }`}
                  >
                    <span>{fee.range}</span>
                    <span className="text-right font-extrabold text-[#10b981]">{fee.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rekber Call to Action */}
            <div className="pt-6 border-t border-slate-800/80 mt-6 relative">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl text-center text-xs uppercase tracking-wider block shadow-lg shadow-violet-500/15"
              >
                Gunakan Layanan Rekber
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
