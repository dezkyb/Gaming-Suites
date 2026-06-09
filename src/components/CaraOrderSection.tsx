import React from "react";
import { 
  Search, 
  CreditCard, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  ArrowRight,
  HelpCircle
} from "lucide-react";

export default function CaraOrderSection() {
  const steps = [
    {
      id: "01",
      title: "Pilih Layanan Anda",
      description: "Jelajahi halaman katalog portofolio kami untuk menentukan layanan yang Anda butuhkan — baik Top-Up Game, Jasa Piloting/Booster, Rekber Escrow, ataupun menyewa Playmate terbaik.",
      icon: Search,
      badge: "Katalog Lengkap",
      color: "from-violet-500 to-indigo-500"
    },
    {
      id: "02",
      title: "Hubungi Admin/WhatsApp Resmi",
      description: "Klik tombol order atau hubungi nomor WhatsApp / Discord resmi Gaming Suites. Silakan sampaikan spesifikasi pesanan Anda (contoh: ID Game, jumlah diamond, atau target rank boosting).",
      icon: MessageSquare,
      badge: "Respon Cepat",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "03",
      title: "Proses Pembayaran Aman",
      description: "Lakukan transfer pembayaran melalui QRIS otomatis, e-wallet utama (GoPay, OVO, ShopeePay), atau transfer Virtual Account Bank pilihan Anda sesuai tagihan resmi.",
      icon: CreditCard,
      badge: "Escrow Terverifikasi",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "04",
      title: "Layanan Diproses Kilat",
      description: "Pesanan Anda diproses secepat kilat! Diamond akan masuk dalam 2-10 detik, sedangkan jasa booster dikerjakan oleh Tim Pro Player kami dengan enkripsi data 100% aman.",
      icon: ShieldCheck,
      badge: "Selesai Otomatis",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const faqs = [
    {
      q: "Berapa lama proses pengisian atau joki selesai?",
      a: "Untuk Top-Up game rata-rata diproses instant (2-10 detik) setelah pembayaran dikonfirmasi. Untuk jasa booster/joki joki biasanya selesai dalam 12-48 jam tergantung antrean dan tingkatan rank yang dipesan."
    },
    {
      q: "Apakah keamanan data akun terjamin untuk jasa booster?",
      a: "Tentu. Kami menerapkan protokol keamanan TLS/SSL dan enkripsi sandi penuh. Data akun Anda hanya diakses oleh joki profesional bersertifikasi, dan sandi wajib diganti setelah proses joki selesai demi keamanan Anda."
    },
    {
      q: "Bagaimana cara kerja Rekber Portal?",
      a: "Sistem Rekber (Rekening Bersama) menahan dana pembeli secara aman sampai penjual menyerahkan item/data game. Setelah pembeli memverifikasi akun aman, dana baru diteruskan ke penjual. Terjamin anti-scam."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="how-to-order">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -top-6 -z-10 opacity-10">
          <span className="text-7xl sm:text-8xl font-black tracking-widest text-[#a78bfa] font-mono select-none">ORDER</span>
        </div>
        <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
          Panduan Pemesanan
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
          Cara Mudah <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Melakukan Order</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-450 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Berikut adalah alur resmi pemesanan layanan di Gaming Suites. Kami merancang proses serba praktis demi kenyamanan dan keamanan Anda.
        </p>
      </div>

      {/* Steps Visual Grid / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch relative mb-16">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.id} 
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-800 font-mono">
                    {step.id}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                    {step.badge}
                  </span>
                </div>

                {/* Step Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-md`}>
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative side arrow for desktop flow */}
              {idx < 3 && (
                <div className="hidden md:flex absolute top-1/2 -right-3.5 transform -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-slate-950 border border-slate-800 items-center justify-center text-slate-500">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Visual Call To Action Box */}
      <div className="bg-gradient-to-br from-violet-950/20 via-slate-900/50 to-cyan-950/20 border border-slate-800 p-8 rounded-3xl mb-16 text-center backdrop-blur-sm shadow-xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-display">
          Sudah Memilih Layanan yang Anda Inginkan?
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6">
          Hubungi admin kami sekarang via pesan instan untuk melakukan penawaran, joki tercepat, rekber aman, atau booking playmate mabar Anda hari ini.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs">
          <div className="px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl font-mono">
            <span>Kontak WhatsApp: </span>
            <span className="text-emerald-400 font-bold font-mono">+62 812-3456-7890</span>
          </div>
          <div className="px-5 py-2.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl font-mono">
            <span>Komunitas Discord: </span>
            <span className="text-violet-400 font-bold font-mono">GamingSuites#1337</span>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto border-t border-slate-900 pt-12">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 font-mono">Pertanyaan Umum</span>
          <h3 className="text-xl font-bold font-display text-white mt-1">FAQ Pemesanan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/30 p-5 rounded-2xl border border-slate-805 text-xs sm:text-sm">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
