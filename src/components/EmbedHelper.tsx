import React, { useState, useEffect } from "react";
import { Code, Copy, Check, Info, ArrowUpRight, HelpCircle, AlertTriangle, ExternalLink } from "lucide-react";

export default function EmbedHelper() {
  const [copied, setCopied] = useState(false);
  const [embedHeight, setEmbedHeight] = useState("850");
  const [borderRadius, setBorderRadius] = useState("16");
  const [scrollable, setScrollable] = useState(true);
  const [isSandbox, setIsSandbox] = useState(false);

  // Get current site URL from dynamic injection, fallback to windows.location if in client
  const fallbackUrl = typeof window !== "undefined" ? window.location.href : "https://gaming-suites.example.com";
  // Dynamically resolve relative routes in production
  const siteUrl = fallbackUrl;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      // If the URL consists of dev app URL from google run or local proxy, it is sandboxed
      if (
        hostname.includes("run.app") ||
        hostname.includes("aistudio") ||
        hostname.includes("googleusercontent.com") ||
        hostname.includes("localhost") ||
        hostname.includes("127.0.0.1")
      ) {
        setIsSandbox(true);
      }
    }
  }, []);

  const generateIframeCode = () => {
    return `<iframe 
  src="${siteUrl}" 
  width="100%" 
  height="${embedHeight}px" 
  style="border: none; border-radius: ${borderRadius}px; background-color: #0b0f19; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);" 
  allow="clipboard-read; clipboard-write; geolocation; microphone; camera" 
  scrolling="${scrollable ? "yes" : "no"}"
></iframe>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateIframeCode());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-violet-950/40 to-slate-900 border border-violet-800/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto my-12" id="embed-sites">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <div className="flex items-start gap-4">
          <span className="p-3 bg-violet-500/20 text-[#a78bfa] rounded-xl border border-violet-500/30">
            <Code className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
              Google Sites Embed Builder <span className="text-xs bg-[#10b981]/20 text-[#10b981] font-mono px-2 py-0.5 rounded-full">Ready</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Website ini dirancang responsif dan kompatibel untuk langsung ditempelkan ke Google Sites Anda sebagai widget ekosistem gaming instan!
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="shrink-0 flex items-center justify-center gap-2 px-5 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold rounded-xl cursor-pointer transition-all active:scale-95 shadow-lg shadow-violet-500/20"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 text-emerald-300" />
              <span>Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span>Copy Embed Code</span>
            </>
          )}
        </button>
      </div>

      {/* Dynamic Sandbox Alert Indicator */}
      {isSandbox && (
        <div className="mb-6 p-5 bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-xl flex items-start gap-3 shadow-md">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1.5">
            <strong className="text-amber-400 block font-bold text-sm">Penting: Mengatasi Dokumen Rusak saat Embed di Google Sites</strong>
            <p className="text-slate-300 leading-relaxed">
              Ikon file bermuka sedih / dokumen rusak yang Anda lihat di Google Sites disebabkan karena URL saat ini (<span className="font-mono bg-slate-950/60 px-1.5 py-0.5 rounded text-amber-300">{typeof window !== "undefined" ? window.location.hostname : "localhost"}</span>) adalah server uji coba aman (sandbox) milik Google AI Studio. Server ini memiliki restriksi header keamanan khusus (<code className="bg-slate-950/50 px-1 text-red-400 font-mono">X-Frame-Options: SAMEORIGIN</code>) demi mengamankan kode Anda dari ancaman eksternal.
            </p>
            <div className="pt-2 text-slate-300 space-y-1">
              <span className="text-white font-bold block">Cara mengaktifkannya di Google Sites Anda:</span>
              <ol className="list-decimal pl-4 space-y-1 mt-1 text-[11px] leading-relaxed">
                <li>
                  <span className="text-white font-medium">Export Web:</span> Klik menu dropdown Settings (ikon gerigi) di kanan atas, lalu pilih <span className="text-violet-400 font-semibold">Export to GitHub</span> atau <span className="text-violet-400 font-semibold">Download ZIP</span>.
                </li>
                <li>
                  <span className="text-white font-medium">Hosting Gratis:</span> Unggah/deploy web tersebut ke platform hosting gratis favorit Anda seperti <span className="font-semibold text-sky-400">Vercel</span>, <span className="font-semibold text-emerald-400">Netlify</span>, atau <span className="font-semibold text-[#a78bfa]">GitHub Pages</span> (memakan waktu kurang dari 2 menit).
                </li>
                <li>
                  <span className="text-white font-medium">Ganti URL:</span> Setelah berhasil dideploy, ganti URL <code className="bg-slate-950/50 px-1 py-0.5 rounded text-violet-300 font-mono">src="..."</code> di dalam kode iframe dengan URL resmi/publik Anda yang baru (misal: <code className="text-emerald-300 font-mono">https://gaming-suites.vercel.app</code>) lalu tempel ke Google Sites. <strong>Layar web akan langsung muncul normal dan berfungsi penuh!</strong>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Generator customization controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 border-y border-slate-800 py-4 text-sm">
        <div>
          <label className="block text-gray-400 mb-1.5 font-medium">Tinggi Widget (Height)</label>
          <div className="flex items-center gap-2 bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-1.5 text-white">
            <input
              type="number"
              value={embedHeight}
              onChange={(e) => setEmbedHeight(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-right font-mono text-violet-300"
              min="400"
              max="2000"
            />
            <span className="text-gray-500 font-mono">px</span>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-1.5 font-medium">Lengkung Sudut (Border Radius)</label>
          <div className="flex items-center gap-2 bg-[#0f172a] border border-slate-700/80 rounded-lg px-3 py-1.5 text-white">
            <input
              type="number"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-right font-mono text-violet-300"
              min="0"
              max="32"
            />
            <span className="text-gray-500 font-mono">px</span>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-1.5 font-medium">Scrollable IFrame</label>
          <div className="flex items-center justify-between bg-[#0f172a] border border-slate-700/80 rounded-lg px-4 py-2 text-white">
            <span className="text-gray-400 text-xs">Aktifkan Scrollbar</span>
            <input
              type="checkbox"
              checked={scrollable}
              onChange={(e) => setScrollable(e.target.checked)}
              className="w-4 h-4 accent-[#8b5cf6] cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Code Area Preview */}
      <div className="bg-[#030712] p-4 rounded-xl border border-slate-800 mb-6 font-mono text-xs overflow-x-auto relative">
        <span className="absolute top-2 right-2 bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded uppercase font-sans">
          HTML Code
        </span>
        <pre className="text-violet-300 whitespace-pre-wrap word-break">
          {generateIframeCode()}
        </pre>
      </div>

      {/* Easy Tutorial accordion */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
          <Info className="w-4 h-4 text-violet-400" />
          Cara Memasang di Google Sites:
        </h4>
        <ol className="list-decimal list-inside space-y-2 text-gray-400 text-xs leading-relaxed">
          <li>
            Klik tombol <span className="text-white font-medium">Copy Embed Code</span> di atas untuk menyalin strukturnya.
          </li>
          <li>
            Buka editor <span className="text-[#8b5cf6] font-medium">Google Sites</span> Anda.
          </li>
          <li>
            Pada panel kanan, pilih menu <span className="text-white font-medium">Embed (Sematkan)</span> atau klik double di badan halaman lalu pilih ikon <span className="text-white font-medium">&lt;/&gt;</span>.
          </li>
          <li>
            Pilih tab <span className="text-white font-medium">Embed Code (Sematkan Kode)</span> (bukan URL).
          </li>
          <li>
            Paste kode yang sudah disalin ke dalam kotak input, lalu klik <span className="text-white font-medium">Next</span> dan <span className="text-[#8b5cf6] font-medium">Insert</span>.
          </li>
          <li>
            Sesuaikan ukuran kontainer melar di Google Sites agar sejajar sempurna sesuai kebutuhan. Selesai!
          </li>
        </ol>
      </div>
    </div>
  );
}
