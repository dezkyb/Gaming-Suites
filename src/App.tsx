import React, { useState, useEffect } from "react";
import TopUpSection from "./components/TopUpSection";
import BoosterSection from "./components/BoosterSection";
import RekberSection from "./components/RekberSection";
import PlaymateSection from "./components/PlaymateSection";
import AboutUs from "./components/AboutUs";
import { TESTIMONIALS_DATA } from "./data";
import { 
  Zap, 
  Users, 
  ShieldCheck, 
  Star, 
  Code,
  Smartphone,
  MessageSquare,
  Sparkles,
  Info,
  Settings,
  Palette,
  RotateCcw,
  Check,
  X,
  Copy,
  ExternalLink
} from "lucide-react";

// Pre-defined elegant presets which matches formal look as requested
const PRESETS = {
  gaming: [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=300", // Valorant setup
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=300", // Anime design
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=300", // Tech artwork
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=300", // Gaming device art
    "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=300", // Gaming artwork
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300"  // Cyberpunk style
  ],
  pastel: [
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=300", // Anime portrait
    "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=300", // Floral field
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=300", // Starry night
    "https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?auto=format&fit=crop&q=80&w=300", // Cyber pink art
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=300", // Twilight clouds
    "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=300"  // Pink/Aqua gradient
  ],
  abstract: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=300", // Soft ocean
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=300", // Warm oil brush
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300", // Gold leaf/black
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=300", // Fluid paint slate
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300", // Minimal purple 3d
    "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=300"  // White/Silver arts
  ],
  darkroom: [
    "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&q=80&w=300", // Glow server
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=300", // Laser projection
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300", // Retro boards
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=300", // Virtual neon sphere
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300", // Circuit path
    "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?auto=format&fit=crop&q=80&w=300"  // Dark violet waves
  ]
};

// Pre-defined themes
const THEMES = {
  slate: {
    name: "Slate Charcoal (Default)",
    bg: "bg-slate-950 text-slate-100",
    accent: "#a78bfa",
    accentText: "text-[#c084fc]",
    accentBorder: "border-[#a78bfa]/25 hover:border-[#a78bfa]"
  },
  "dark-purple": {
    name: "Royal Violet (Dark Purple)",
    bg: "bg-[#0b031c] text-purple-100",
    accent: "#c084fc",
    accentText: "text-purple-300",
    accentBorder: "border-purple-900/50 hover:border-[#c084fc]"
  },
  "navy-blue": {
    name: "Cyber Indigo (Navy Blue)",
    bg: "bg-[#020b1e] text-sky-100",
    accent: "#38bdf8",
    accentText: "text-sky-300",
    accentBorder: "border-sky-900/50 hover:border-sky-450"
  },
  "pure-black": {
    name: "OLED Pitch Black",
    bg: "bg-black text-zinc-100",
    accent: "#f4f4f5",
    accentText: "text-white",
    accentBorder: "border-zinc-800 hover:border-white"
  },
  "deep-emerald": {
    name: "Luxury Emerald Forest",
    bg: "bg-[#02120a] text-emerald-100",
    accent: "#34d399",
    accentText: "text-emerald-300",
    accentBorder: "border-emerald-950 hover:border-emerald-450"
  },
  "sunset-rose": {
    name: "Sunset Crimson Rose",
    bg: "bg-[#140206] text-rose-100",
    accent: "#fb7185",
    accentText: "text-rose-300",
    accentBorder: "border-rose-950 hover:border-rose-455"
  }
};

// Inline editable text component
function InlineText({ 
  value, 
  onChange, 
  className = "", 
  isBlock = false
}: { 
  value: string; 
  onChange: (val: string) => void; 
  className?: string;
  isBlock?: boolean;
}) {
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText.trim();
    if (text !== value && text !== "") {
      onChange(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !isBlock) {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} outline-none border-b border-dashed border-transparent hover:border-violet-400 hover:bg-violet-500/10 focus:bg-violet-500/15 focus:border-violet-500 rounded px-1 transition duration-200 cursor-text ${isBlock ? 'block w-full text-left' : 'inline-block min-w-[20px]'}`}
      title="Klik untuk langsung mengedit teks"
    >
      {value}
    </div>
  );
}

// Inline editable image component
function EditableImage({ 
  src, 
  onChange, 
  className = "" 
}: { 
  src: string; 
  onChange: (val: string) => void; 
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newUrl = prompt("Masukkan Link/URL Gambar (Unsplash, Pinterest, blog, dsb):", src);
    if (newUrl !== null && newUrl.trim() !== "") {
      onChange(newUrl.trim());
    }
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden h-full w-full" onClick={handleClick}>
      <img 
        src={src} 
        alt="Editable background cover item" 
        referrerPolicy="no-referrer"
        className={`${className} transition-all duration-300 group-hover:brightness-50 group-hover:scale-105`} 
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-200 pointer-events-none">
        <span className="text-[10px] font-mono text-white bg-violet-600 border border-violet-400 px-2 py-1 rounded-full shadow-lg">
          📷 Ganti Foto (Klik)
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"topup" | "booster" | "rekber" | "playmates">("topup");
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  
  // Collage image URL States
  const [collageImages, setCollageImages] = useState<string[]>(PRESETS.gaming);
  const [editImages, setEditImages] = useState<string[]>([...PRESETS.gaming]);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  // Customizable Texts States
  const [navTitle, setNavTitle] = useState("Aura Zeinara Reverie");
  const [heroBrand, setHeroBrand] = useState("GamingSuites");
  const [heroSubtitle, setHeroSubtitle] = useState("Elevate your Gaming Experience Instantly.");
  const [aboutDesc1, setAboutDesc1] = useState("Gaming Suites adalah platform penyedia layanan ekosistem gaming terintegrasi yang berkomitmen untuk memberikan pengalaman bermain game yang lebih mudah, aman, dan menyenangkan.");
  const [contactWhatsapp, setContactWhatsapp] = useState("+62 812-3456-7890");
  const [contactDiscord, setContactDiscord] = useState("GamingSuites#1337");

  // New customizable background themes
  const [themeBg, setThemeBg] = useState("slate");
  const [tempThemeBg, setTempThemeBg] = useState("slate");

  // Customizable main headers/titles/subtitles
  const [servicesTitle, setServicesTitle] = useState("Layanan Utama GamingSuites");
  const [tempServicesTitle, setTempServicesTitle] = useState("Layanan Utama GamingSuites");
  
  const [servicesSubtitle, setServicesSubtitle] = useState("Kami menyederhanakan penjelasan modul operasional ekosistem kami untuk keperluan portofolio formal Anda. Bebas elemen input rumit yang mengganggu keindahan desain.");
  const [tempServicesSubtitle, setTempServicesSubtitle] = useState("Kami menyederhanakan penjelasan modul operasional ekosistem kami untuk keperluan portofolio formal Anda. Bebas elemen input rumit yang mengganggu keindahan desain.");

  const [testimonialsTitle, setTestimonialsTitle] = useState("Testimoni Komunitas");
  const [tempTestimonialsTitle, setTempTestimonialsTitle] = useState("Testimoni Komunitas");

  const [footerDesc, setFooterDesc] = useState("Platform ekosistem gaming formal yang menyajikan informasi top-up game instan resmi, jasa piloting booster, sistem penengah rekber escrow, dan pendampingan playmate mabar suportif.");
  const [tempFooterDesc, setTempFooterDesc] = useState("Platform ekosistem gaming formal yang menyajikan informasi top-up game instan resmi, jasa piloting booster, sistem penengah rekber escrow, dan pendampingan playmate mabar suportif.");

  // Elements visibility states (toggles)
  const [showTopUp, setShowTopUp] = useState(true);
  const [tempShowTopUp, setTempShowTopUp] = useState(true);

  const [showBooster, setShowBooster] = useState(true);
  const [tempShowBooster, setTempShowBooster] = useState(true);

  const [showRekber, setShowRekber] = useState(true);
  const [tempShowRekber, setTempShowRekber] = useState(true);

  const [showPlaymates, setShowPlaymates] = useState(true);
  const [tempShowPlaymates, setTempShowPlaymates] = useState(true);

  const [showTestimonials, setShowTestimonials] = useState(true);
  const [tempShowTestimonials, setTempShowTestimonials] = useState(true);

  const [showAboutUs, setShowAboutUs] = useState(true);
  const [tempShowAboutUs, setTempShowAboutUs] = useState(true);

  const [showHeroStats, setShowHeroStats] = useState(true);
  const [tempShowHeroStats, setTempShowHeroStats] = useState(true);

  // Editable temporary inputs (modal state)
  const [tempNavTitle, setTempNavTitle] = useState("Aura Zeinara Reverie");
  const [tempHeroBrand, setTempHeroBrand] = useState("GamingSuites");
  const [tempHeroSubtitle, setTempHeroSubtitle] = useState("Elevate your Gaming Experience Instantly.");
  const [tempAboutDesc1, setTempAboutDesc1] = useState("Gaming Suites adalah platform penyedia layanan ekosistem gaming terintegrasi yang berkomitmen untuk memberikan pengalaman bermain game yang lebih mudah, aman, dan menyenangkan.");
  const [tempContactWhatsapp, setTempContactWhatsapp] = useState("+62 812-3456-7890");
  const [tempContactDiscord, setTempContactDiscord] = useState("GamingSuites#1337");

  // Get current active theme config
  const theme = THEMES[themeBg as keyof typeof THEMES] || THEMES.slate;

  // Active / dynamic section checker
  const isTabVisible = (tab: "topup" | "booster" | "rekber" | "playmates") => {
    if (tab === "topup") return showTopUp;
    if (tab === "booster") return showBooster;
    if (tab === "rekber") return showRekber;
    if (tab === "playmates") return showPlaymates;
    return true;
  };

  const activeAndVisible = isTabVisible(activeTab) 
    ? activeTab 
    : (showTopUp ? "topup" : showBooster ? "booster" : showRekber ? "rekber" : showPlaymates ? "playmates" : "topup");

  const [sectionOrder, setSectionOrder] = useState<string[]>(["about", "services", "testimonials"]);

  const moveSectionUp = (idx: number) => {
    if (idx === 0) return;
    const newOrder = [...sectionOrder];
    const prev = newOrder[idx - 1];
    newOrder[idx - 1] = newOrder[idx];
    newOrder[idx] = prev;
    setSectionOrder(newOrder);
    try {
      localStorage.setItem("aura_section_order", JSON.stringify(newOrder));
    } catch(e) {}
  };

  const moveSectionDown = (idx: number) => {
    if (idx === sectionOrder.length - 1) return;
    const newOrder = [...sectionOrder];
    const next = newOrder[idx + 1];
    newOrder[idx + 1] = newOrder[idx];
    newOrder[idx] = next;
    setSectionOrder(newOrder);
    try {
      localStorage.setItem("aura_section_order", JSON.stringify(newOrder));
    } catch(e) {}
  };

  // Direct state updaters with automatic LocalStorage synchronization for immediate inline editing
  const handleUpdateNavTitle = (val: string) => {
    setNavTitle(val);
    setTempNavTitle(val);
    localStorage.setItem("aura_nav_title", val);
  };
  const handleUpdateHeroBrand = (val: string) => {
    setHeroBrand(val);
    setTempHeroBrand(val);
    localStorage.setItem("aura_hero_brand", val);
  };
  const handleUpdateHeroSubtitle = (val: string) => {
    setHeroSubtitle(val);
    setTempHeroSubtitle(val);
    localStorage.setItem("aura_hero_subtitle", val);
  };
  const handleUpdateAboutDesc1 = (val: string) => {
    setAboutDesc1(val);
    setTempAboutDesc1(val);
    localStorage.setItem("aura_about_desc1", val);
  };
  const handleUpdateServicesTitle = (val: string) => {
    setServicesTitle(val);
    setTempServicesTitle(val);
    localStorage.setItem("aura_services_title", val);
  };
  const handleUpdateServicesSubtitle = (val: string) => {
    setServicesSubtitle(val);
    setTempServicesSubtitle(val);
    localStorage.setItem("aura_services_subtitle", val);
  };
  const handleUpdateTestimonialsTitle = (val: string) => {
    setTestimonialsTitle(val);
    setTempTestimonialsTitle(val);
    localStorage.setItem("aura_testimonials_title", val);
  };
  const handleUpdateFooterDesc = (val: string) => {
    setFooterDesc(val);
    setTempFooterDesc(val);
    localStorage.setItem("aura_footer_desc", val);
  };
  const handleUpdateContactWhatsapp = (val: string) => {
    setContactWhatsapp(val);
    setTempContactWhatsapp(val);
    localStorage.setItem("aura_contact_whatsapp", val);
  };
  const handleUpdateContactDiscord = (val: string) => {
    setContactDiscord(val);
    setTempContactDiscord(val);
    localStorage.setItem("aura_contact_discord", val);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isIframe = window.self !== window.top;
      const isEmbedParam = window.location.search.includes("embed") || window.location.search.includes("embedded");
      // Only set as embedded/clean view when explicitly passed in URL query param,
      // so it remains visible inside developer review iframes (like AI Studio)
      setIsEmbedded(isEmbedParam);

      const params = new URLSearchParams(window.location.search);
      
      // 1. Read images
      const urlImgs: string[] = [];
      let foundImgQuery = false;
      for (let i = 0; i < 6; i++) {
        const u = params.get(`img${i}`);
        if (u) {
          urlImgs.push(u);
          foundImgQuery = true;
        } else {
          urlImgs.push(PRESETS.gaming[i]);
        }
      }
      if (foundImgQuery) {
        setCollageImages(urlImgs);
        setEditImages(urlImgs);
      }

      // 2. Read other query parameters
      const qNavTitle = params.get("navtitle");
      const qHeroBrand = params.get("herobrand");
      const qHeroSubtitle = params.get("herosubtitle");
      const qAboutDesc1 = params.get("aboutdesc1");
      const qContactWhatsapp = params.get("contactwhatsapp");
      const qContactDiscord = params.get("contactdiscord");

      // New properties
      const qThemeBg = params.get("themebg");
      const qShowTopUp = params.get("showtopup");
      const qShowBooster = params.get("showbooster");
      const qShowRekber = params.get("showrekber");
      const qShowPlaymates = params.get("showplaymates");
      const qShowTestimonials = params.get("showtestimonials");
      const qShowAboutUs = params.get("showaboutus");
      const qShowHeroStats = params.get("showherostats");
      const qServicesTitle = params.get("servicestitle");
      const qServicesSubtitle = params.get("servicessubtitle");
      const qTestimonialsTitle = params.get("testimonialstitle");
      const qFooterDesc = params.get("footerdesc");
      const qSectionOrder = params.get("sectionorder");

      if (qNavTitle) { setNavTitle(qNavTitle); setTempNavTitle(qNavTitle); }
      if (qHeroBrand) { setHeroBrand(qHeroBrand); setTempHeroBrand(qHeroBrand); }
      if (qHeroSubtitle) { setHeroSubtitle(qHeroSubtitle); setTempHeroSubtitle(qHeroSubtitle); }
      if (qAboutDesc1) { setAboutDesc1(qAboutDesc1); setTempAboutDesc1(qAboutDesc1); }
      if (qContactWhatsapp) { setContactWhatsapp(qContactWhatsapp); setTempContactWhatsapp(qContactWhatsapp); }
      if (qContactDiscord) { setContactDiscord(qContactDiscord); setTempContactDiscord(qContactDiscord); }

      if (qThemeBg) { setThemeBg(qThemeBg); setTempThemeBg(qThemeBg); }
      if (qShowTopUp) { setShowTopUp(qShowTopUp === "true"); setTempShowTopUp(qShowTopUp === "true"); }
      if (qShowBooster) { setShowBooster(qShowBooster === "true"); setTempShowBooster(qShowBooster === "true"); }
      if (qShowRekber) { setShowRekber(qShowRekber === "true"); setTempShowRekber(qShowRekber === "true"); }
      if (qShowPlaymates) { setShowPlaymates(qShowPlaymates === "true"); setTempShowPlaymates(qShowPlaymates === "true"); }
      if (qShowTestimonials) { setShowTestimonials(qShowTestimonials === "true"); setTempShowTestimonials(qShowTestimonials === "true"); }
      if (qShowAboutUs) { setShowAboutUs(qShowAboutUs === "true"); setTempShowAboutUs(qShowAboutUs === "true"); }
      if (qShowHeroStats) { setShowHeroStats(qShowHeroStats === "true"); setTempShowHeroStats(qShowHeroStats === "true"); }
      if (qServicesTitle) { setServicesTitle(qServicesTitle); setTempServicesTitle(qServicesTitle); }
      if (qServicesSubtitle) { setServicesSubtitle(qServicesSubtitle); setTempServicesSubtitle(qServicesSubtitle); }
      if (qTestimonialsTitle) { setTestimonialsTitle(qTestimonialsTitle); setTempTestimonialsTitle(qTestimonialsTitle); }
      if (qFooterDesc) { setFooterDesc(qFooterDesc); setTempFooterDesc(qFooterDesc); }
      if (qSectionOrder) {
        const parsed = qSectionOrder.split(",");
        if (parsed.length > 0) {
          setSectionOrder(parsed);
        }
      }

      // 3. Fallback to localStorage for anything NOT provided in query parameters
      try {
        if (!qSectionOrder) {
          const stored = localStorage.getItem("aura_section_order");
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setSectionOrder(parsed);
            }
          }
        }
        if (!foundImgQuery) {
          const stored = localStorage.getItem("aura_collage_images");
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length === 6) {
              setCollageImages(parsed);
              setEditImages(parsed);
            }
          }
        }
        if (!qNavTitle) {
          const stored = localStorage.getItem("aura_nav_title");
          if (stored) { setNavTitle(stored); setTempNavTitle(stored); }
        }
        if (!qHeroBrand) {
          const stored = localStorage.getItem("aura_hero_brand");
          if (stored) { setHeroBrand(stored); setTempHeroBrand(stored); }
        }
        if (!qHeroSubtitle) {
          const stored = localStorage.getItem("aura_hero_subtitle");
          if (stored) { setHeroSubtitle(stored); setTempHeroSubtitle(stored); }
        }
        if (!qAboutDesc1) {
          const stored = localStorage.getItem("aura_about_desc1");
          if (stored) { setAboutDesc1(stored); setTempAboutDesc1(stored); }
        }
        if (!qContactWhatsapp) {
          const stored = localStorage.getItem("aura_contact_whatsapp");
          if (stored) { setContactWhatsapp(stored); setTempContactWhatsapp(stored); }
        }
        if (!qContactDiscord) {
          const stored = localStorage.getItem("aura_contact_discord");
          if (stored) { setContactDiscord(stored); setTempContactDiscord(stored); }
        }
        if (!qThemeBg) {
          const stored = localStorage.getItem("aura_theme_bg");
          if (stored) { setThemeBg(stored); setTempThemeBg(stored); }
        }
        if (!qShowTopUp) {
          const stored = localStorage.getItem("aura_show_topup");
          if (stored) { setShowTopUp(stored === "true"); setTempShowTopUp(stored === "true"); }
        }
        if (!qShowBooster) {
          const stored = localStorage.getItem("aura_show_booster");
          if (stored) { setShowBooster(stored === "true"); setTempShowBooster(stored === "true"); }
        }
        if (!qShowRekber) {
          const stored = localStorage.getItem("aura_show_rekber");
          if (stored) { setShowRekber(stored === "true"); setTempShowRekber(stored === "true"); }
        }
        if (!qShowPlaymates) {
          const stored = localStorage.getItem("aura_show_playmates");
          if (stored) { setShowPlaymates(stored === "true"); setTempShowPlaymates(stored === "true"); }
        }
        if (!qShowTestimonials) {
          const stored = localStorage.getItem("aura_show_testimonials");
          if (stored) { setShowTestimonials(stored === "true"); setTempShowTestimonials(stored === "true"); }
        }
        if (!qShowAboutUs) {
          const stored = localStorage.getItem("aura_show_about_us");
          if (stored) { setShowAboutUs(stored === "true"); setTempShowAboutUs(stored === "true"); }
        }
        if (!qShowHeroStats) {
          const stored = localStorage.getItem("aura_show_hero_stats");
          if (stored) { setShowHeroStats(stored === "true"); setTempShowHeroStats(stored === "true"); }
        }
        if (!qServicesTitle) {
          const stored = localStorage.getItem("aura_services_title");
          if (stored) { setServicesTitle(stored); setTempServicesTitle(stored); }
        }
        if (!qServicesSubtitle) {
          const stored = localStorage.getItem("aura_services_subtitle");
          if (stored) { setServicesSubtitle(stored); setTempServicesSubtitle(stored); }
        }
        if (!qTestimonialsTitle) {
          const stored = localStorage.getItem("aura_testimonials_title");
          if (stored) { setTestimonialsTitle(stored); setTempTestimonialsTitle(stored); }
        }
        if (!qFooterDesc) {
          const stored = localStorage.getItem("aura_footer_desc");
          if (stored) { setFooterDesc(stored); setTempFooterDesc(stored); }
        }
      } catch (e) {
        console.error("Failed to parse local stored values", e);
      }
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getEmbedUrl = () => {
    if (typeof window === "undefined") return "";
    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    params.set("embed", "true");
    
    // Set images
    collageImages.forEach((url, i) => {
      params.set(`img${i}`, url);
    });

    // Set custom texts & settings
    params.set("navtitle", navTitle);
    params.set("herobrand", heroBrand);
    params.set("herosubtitle", heroSubtitle);
    params.set("aboutdesc1", aboutDesc1);
    params.set("contactwhatsapp", contactWhatsapp);
    params.set("contactdiscord", contactDiscord);

    // New properties
    params.set("themebg", themeBg);
    params.set("showtopup", String(showTopUp));
    params.set("showbooster", String(showBooster));
    params.set("showrekber", String(showRekber));
    params.set("showplaymates", String(showPlaymates));
    params.set("showtestimonials", String(showTestimonials));
    params.set("showaboutus", String(showAboutUs));
    params.set("showherostats", String(showHeroStats));
    params.set("servicestitle", servicesTitle);
    params.set("servicessubtitle", servicesSubtitle);
    params.set("testimonialstitle", testimonialsTitle);
    params.set("footerdesc", footerDesc);
    params.set("sectionorder", sectionOrder.join(","));

    return `${baseUrl}/?${params.toString()}`;
  };

  const handleCopyIframe = () => {
    const code = `<iframe src="${getEmbedUrl()}" style="width:100%; height:820px; border:none; background-color: #020617;" allow="autoplay; encrypted-media"></iframe>`;
    navigator.clipboard.writeText(code);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const updateCollageImage = (idx: number, url: string) => {
    const copy = [...collageImages];
    copy[idx] = url;
    setCollageImages(copy);
    setEditImages(copy);
    try {
      localStorage.setItem("aura_collage_images", JSON.stringify(copy));
    } catch (e) {}
  };

  return (
    <div className={`min-h-screen ${theme.bg} selection:bg-slate-700 selection:text-white flex flex-col justify-between transition-colors duration-300`}>
      
      {/* 1. STICKY / ABSOLUTE NAVIGATION BAR */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
          
          {/* Top-Left Title: Aura Zeinara Reverie */}
          <div className="flex items-center gap-2">
            <InlineText 
              value={navTitle} 
              onChange={handleUpdateNavTitle} 
              className="font-serif italic text-xl sm:text-2xl font-bold text-white tracking-wide cursor-text text-left" 
            />
            <span 
              onClick={() => scrollToSection("home")}
              className="text-[10px] sm:text-xs font-mono text-zinc-500 cursor-pointer hover:text-zinc-200 transition"
              title="Gulir ke atas"
            >
              (Home)
            </span>
          </div>

          {/* Top-Right Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wide text-zinc-300">
            <button 
              onClick={() => scrollToSection("home")} 
              className="hover:text-white transition cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="hover:text-white transition cursor-pointer"
            >
              Services
            </button>
            {showTestimonials && (
              <button 
                onClick={() => scrollToSection("testimonials")} 
                className="hover:text-white transition cursor-pointer"
              >
                Testimoni
              </button>
            )}
            {showAboutUs && (
              <button 
                onClick={() => scrollToSection("about")} 
                className="hover:text-white transition cursor-pointer"
              >
                About Us
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 2. HERO BANNER WITH CHARACTER COLLAGE (EXACT SCREENSHOT LAYOUT) */}
      <header id="home" className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${theme.bg} pt-20`}>
        
        {/* Collage Background Grid */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-6 h-full w-full opacity-45 z-10">
          {collageImages.map((src, idx) => (
            <div key={idx} className="relative h-full w-full overflow-hidden border-r border-slate-900/30">
              <EditableImage 
                src={src} 
                onChange={(url) => updateCollageImage(idx, url)}
                className="h-full w-full object-cover filter saturate-50 contrast-125 transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${themeBg === 'pure-black' ? 'from-black via-black/45 to-black/15' : themeBg === 'dark-purple' ? 'from-[#0b031c] via-[#0b031c]/45 to-[#0b031c]/15' : themeBg === 'navy-blue' ? 'from-[#020b1e] via-[#020b1e]/45 to-[#020b1e]/15' : themeBg === 'deep-emerald' ? 'from-[#02120a] via-[#02120a]/45 to-[#02120a]/15' : themeBg === 'sunset-rose' ? 'from-[#140206] via-[#140206]/45 to-[#140206]/15' : 'from-slate-950 via-slate-950/45 to-slate-950/15'} pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Thick elegant dark-blue overlay to match formal screenshot */}
        <div className={`absolute inset-0 bg-gradient-to-b from-black/50 ${themeBg === 'pure-black' ? 'via-black/90 to-black' : themeBg === 'dark-purple' ? 'via-[#0b031c]/90 to-[#0b031c]' : themeBg === 'navy-blue' ? 'via-[#020b1e]/90 to-[#020b1e]' : themeBg === 'deep-emerald' ? 'via-[#02120a]/90 to-[#02120a]' : themeBg === 'sunset-rose' ? 'via-[#140206]/90 to-[#140206]' : 'via-slate-950/85 to-slate-950'} pointer-events-none z-10`}></div>

        {/* Center Frame Container (Logo & Subtitle bordered frame) */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="border border-white/95 px-6 py-12 sm:px-20 sm:py-16 bg-black/65 backdrop-blur-[3px] shadow-2xl relative transition-all duration-300 hover:border-white">
            
            {/* Title */}
            <h1 className="font-serif italic text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-white drop-shadow-md">
              <InlineText 
                value={heroBrand} 
                onChange={handleUpdateHeroBrand} 
                className="font-serif italic text-white" 
              />
            </h1>

            {/* Subtitle */}
            <p className="font-serif italic text-xs sm:text-base md:text-lg text-slate-200 mt-4 tracking-wider opacity-90">
              <InlineText 
                value={heroSubtitle} 
                onChange={handleUpdateHeroSubtitle} 
                className="font-serif italic text-slate-200 inline-block w-full" 
                isBlock
              />
            </p>

            {/* Trigger Button to customize collage header - HIDE on Google Sites iframe by default so visitors see clean page */}
            {!isEmbedded && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => {
                    setEditImages([...collageImages]);
                    setTempNavTitle(navTitle);
                    setTempHeroBrand(heroBrand);
                    setTempHeroSubtitle(heroSubtitle);
                    setTempAboutDesc1(aboutDesc1);
                    setTempContactWhatsapp(contactWhatsapp);
                    setTempContactDiscord(contactDiscord);
                    setTempThemeBg(themeBg);
                    setTempShowTopUp(showTopUp);
                    setTempShowBooster(showBooster);
                    setTempShowRekber(showRekber);
                    setTempShowPlaymates(showPlaymates);
                    setTempShowTestimonials(showTestimonials);
                    setTempShowAboutUs(showAboutUs);
                    setTempShowHeroStats(showHeroStats);
                    setTempServicesTitle(servicesTitle);
                    setTempServicesSubtitle(servicesSubtitle);
                    setTempTestimonialsTitle(testimonialsTitle);
                    setTempFooterDesc(footerDesc);
                    setIsCustomizerOpen(true);
                  }}
                  className="px-4 py-2 bg-[#a78bfa]/10 hover:bg-[#a78bfa]/20 border border-[#a78bfa]/20 hover:border-[#a78bfa] text-[#c084fc] rounded-full text-[10px] font-mono tracking-wider transition uppercase flex items-center gap-1.5 cursor-pointer backdrop-blur-sm"
                >
                  <Settings className="w-3.5 h-3.5 text-[#c8a2c8] animate-spin-slow" />
                  <span>⚙ Kustomisasi Seluruh Tampilan</span>
                </button>
              </div>
            )}

          </div>
          
          {/* Call to Scroll Action */}
          <div className="mt-12 animate-pulse">
            <button 
              onClick={() => scrollToSection(showAboutUs ? "about" : "services")}
              className="text-[10px] font-mono tracking-widest text-zinc-500 hover:text-white transition uppercase cursor-pointer"
            >
              ∨ {showAboutUs ? "Gulir ke bawah untuk penjelasan" : "Gulir ke bawah untuk Layanan Extralis"}
            </button>
          </div>
        </div>
      </header>

      {/* 3. DYNAMIC PORTFOLIO LAYOUT SECTIONS - ARRANGED ON-THE-FLY */}
      {sectionOrder.map((sectionId, idx) => {
        if (sectionId === "about" && showAboutUs) {
          return (
            <section 
              key="about-section"
              id="about" 
              className="relative py-24 px-6 md:px-12 bg-gradient-to-tr from-black/20 via-black/10 to-transparent border-t border-b border-zinc-900/60 overflow-hidden group/about"
            >
              {/* Layout arrangements HUD */}
              <div className="absolute left-6 top-6 z-30 flex items-center gap-1.5 opacity-0 group-hover/about:opacity-100 bg-slate-950/85 border border-zinc-800 px-3 py-1.5 rounded-full transition duration-200 text-[10px] font-mono text-zinc-400 shadow-xl select-none">
                <span className="font-bold text-[#c084fc]">PROFIL ABOUT US</span>
                <span className="h-3 w-px bg-zinc-800"></span>
                <button onClick={() => moveSectionUp(idx)} className="hover:text-white transition cursor-pointer" title="Naikkan baris seksi">🔼 Naik</button>
                <button onClick={() => moveSectionDown(idx)} className="hover:text-white transition cursor-pointer" title="Turunkan baris seksi">🔽 Turun</button>
              </div>

              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative">
                
                {/* Soft backlighting */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#a78bfa]/5 rounded-full blur-3xl pointer-events-none"></div>

                {/* Left Title block - Classy Serif Heading */}
                <div className="md:col-span-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#a78bfa] font-mono block mb-2">Profil Portofolio</span>
                  <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-wide">
                    About Us
                  </h2>
                  <div className="h-0.5 w-16 bg-white/40 mt-3 rounded"></div>
                </div>

                {/* Right Descriptions content */}
                <div className="md:col-span-8 space-y-6">
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-serif italic text-left">
                    <InlineText value={aboutDesc1} onChange={handleUpdateAboutDesc1} isBlock />
                  </p>

                  {/* Embedded details / stats in portfolio format */}
                  {showHeroStats && (
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900/60 max-w-lg">
                      <div>
                        <span className="block text-xl font-bold text-white font-serif italic">100%</span>
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide">Selesai Bergaransi</span>
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-white font-serif italic">Garansi</span>
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide">Anti-Banned</span>
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-white font-serif italic">API</span>
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide">Akses Resmi</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Developer Bio block */}
              <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-zinc-900/40">
                <AboutUs />
              </div>
            </section>
          );
        }

        if (sectionId === "services" && (showTopUp || showBooster || showRekber || showPlaymates)) {
          return (
            <section 
              key="services-section"
              id="services" 
              className="py-24 px-4 sm:px-6 relative group/services border-b border-zinc-900/40"
            >
              {/* Layout arrangements HUD */}
              <div className="absolute left-6 top-6 z-30 flex items-center gap-1.5 opacity-0 group-hover/services:opacity-100 bg-slate-950/85 border border-zinc-800 px-3 py-1.5 rounded-full transition duration-200 text-[10px] font-mono text-zinc-400 shadow-xl select-none">
                <span className="font-bold text-[#c084fc]">TABEL LAYANAN</span>
                <span className="h-3 w-px bg-zinc-800"></span>
                <button onClick={() => moveSectionUp(idx)} className="hover:text-white transition cursor-pointer" title="Naikkan baris seksi">🔼 Naik</button>
                <button onClick={() => moveSectionDown(idx)} className="hover:text-white transition cursor-pointer" title="Turunkan baris seksi">🔽 Turun</button>
              </div>

              <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-[#c084fc] font-mono block mb-2">Penjelasan Sistem</span>
                  <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight mb-4 animate-fade-in">
                    <InlineText value={servicesTitle} onChange={handleUpdateServicesTitle} />
                  </h2>
                  <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm">
                    <InlineText value={servicesSubtitle} onChange={handleUpdateServicesSubtitle} isBlock />
                  </p>
                </div>

                {/* Quick Tab Selector for Explanatory Segments */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
                  {showTopUp && (
                    <button
                      onClick={() => setActiveTab("topup")}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                        activeAndVisible === "topup" 
                          ? "bg-white text-slate-950 border-white shadow-lg" 
                          : "bg-slate-900/60 text-zinc-400 border-zinc-850 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                      <span>01. Top-Up Game Instan</span>
                    </button>
                  )}
                  {showBooster && (
                    <button
                      onClick={() => setActiveTab("booster")}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                        activeAndVisible === "booster" 
                          ? "bg-white text-slate-950 border-white shadow-lg" 
                          : "bg-slate-900/60 text-zinc-400 border-zinc-850 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#c8a2c8]" />
                      <span>02. Jasa Booster & Piloting</span>
                    </button>
                  )}
                  {showRekber && (
                    <button
                      onClick={() => setActiveTab("rekber")}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                        activeAndVisible === "rekber" 
                          ? "bg-white text-slate-950 border-white shadow-lg" 
                          : "bg-slate-900/60 text-zinc-400 border-zinc-850 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>03. Rekber Escrow Portal</span>
                    </button>
                  )}
                  {showPlaymates && (
                    <button
                      onClick={() => setActiveTab("playmates")}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                        activeAndVisible === "playmates" 
                          ? "bg-white text-slate-950 border-white shadow-lg" 
                          : "bg-slate-900/60 text-zinc-400 border-zinc-850 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <Users className="w-3.5 h-3.5 text-sky-400" />
                      <span>04. Sewa Playmate (Mabar)</span>
                    </button>
                  )}
                </div>

                {/* Active section component with premium animation base container */}
                <div className={`border rounded-3xl p-3 sm:p-6 min-h-[400px] backdrop-blur-sm ${themeBg === 'pure-black' ? 'bg-zinc-950/40 border-zinc-900' : 'bg-slate-900/10 border-zinc-800/40'}`}>
                  {activeAndVisible === "topup" && <TopUpSection />}
                  {activeAndVisible === "booster" && <BoosterSection />}
                  {activeAndVisible === "rekber" && <RekberSection />}
                  {activeAndVisible === "playmates" && <PlaymateSection />}
                </div>

              </div>
            </section>
          );
        }

        if (sectionId === "testimonials" && showTestimonials) {
          return (
            <section 
              key="testimonials-section"
              id="testimonials" 
              className="py-24 px-6 bg-slate-900/5 border-t border-b border-zinc-900/40 relative group/testimonials"
            >
              {/* Layout arrangements HUD */}
              <div className="absolute left-6 top-6 z-30 flex items-center gap-1.5 opacity-0 group-hover/testimonials:opacity-100 bg-slate-950/85 border border-zinc-800 px-3 py-1.5 rounded-full transition duration-200 text-[10px] font-mono text-zinc-400 shadow-xl select-none">
                <span className="font-bold text-[#c084fc]">ULASAN PEMBELI</span>
                <span className="h-3 w-px bg-zinc-800"></span>
                <button onClick={() => moveSectionUp(idx)} className="hover:text-white transition cursor-pointer" title="Naikkan baris seksi">🔼 Naik</button>
                <button onClick={() => moveSectionDown(idx)} className="hover:text-white transition cursor-pointer" title="Turunkan baris seksi">🔽 Turun</button>
              </div>

              <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-[#c084fc] font-mono block mb-2">Ulasan Pembeli</span>
                  <h2 className="font-serif italic text-3xl sm:text-4xl text-white">
                    <InlineText value={testimonialsTitle} onChange={handleUpdateTestimonialsTitle} />
                  </h2>
                  <div className="h-0.5 w-12 bg-white/20 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Testimonial Feed */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS_DATA.map((testi) => (
                    <div 
                      key={testi.id} 
                      className="bg-slate-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition duration-300"
                    >
                      <div>
                        <div className="flex items-center gap-0.5 text-yellow-500 mb-4 font-sans justify-start">
                          {[...Array(testi.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-zinc-300 text-xs sm:text-sm italic leading-relaxed mb-6 font-serif text-left">
                          "{testi.text}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                        <img
                          src={testi.avatar}
                          alt={testi.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-zinc-900 hover:scale-110 active:scale-95 duration-200 transition cursor-pointer"
                          onClick={() => {
                            const newAv = prompt("Ubah URL Avatar Pembeli:", testi.avatar);
                            if (newAv !== null && newAv.trim() !== "") {
                              testi.avatar = newAv.trim();
                              handleUpdateTestimonialsTitle(testimonialsTitle + " ");
                              setTimeout(() => handleUpdateTestimonialsTitle(testimonialsTitle.trim()), 30);
                            }
                          }}
                          title="Klik untuk mengubah avatar ulasan"
                        />
                        <div className="text-left animate-fade-in">
                          <h4 className="text-white text-xs font-bold font-serif">{testi.name}</h4>
                          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mt-0.5">{testi.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* 6. EMBEDDABILITY FOR GOOGLE SITES */}
      {!isEmbedded && (
        <section className="py-20 px-6 bg-black border-b border-zinc-900 text-center relative overflow-hidden">
          {/* subtle line glow */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
          
          <div className="max-w-3xl mx-auto">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-widest text-[#a78bfa] mb-3 inline-block">
              100% Google Sites Compatible
            </span>
            <h3 className="font-serif italic text-2xl sm:text-3xl text-white mb-3">
              Integrasi Portofolio Google Sites
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Situs <b className="text-white">{navTitle}</b> didesain super fleksibel. Pasang langsung ke Google Sites Anda menggunakan kode embed IFrame di bawah ini. Anda dapat mengustomisasi seluruh teks & gambar latar belakang, lalu membagikannya ke pengunjung secara permanen melalui kode IFrame dinamis!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button
                onClick={() => {
                  setEditImages([...collageImages]);
                  setTempNavTitle(navTitle);
                  setTempHeroBrand(heroBrand);
                  setTempHeroSubtitle(heroSubtitle);
                  setTempAboutDesc1(aboutDesc1);
                  setTempContactWhatsapp(contactWhatsapp);
                  setTempContactDiscord(contactDiscord);
                  setTempThemeBg(themeBg);
                  setTempShowAboutUs(showAboutUs);
                  setTempShowHeroStats(showHeroStats);
                  setTempShowTopUp(showTopUp);
                  setTempShowBooster(showBooster);
                  setTempShowRekber(showRekber);
                  setTempShowPlaymates(showPlaymates);
                  setTempShowTestimonials(showTestimonials);
                  setTempServicesTitle(servicesTitle);
                  setTempServicesSubtitle(servicesSubtitle);
                  setTempTestimonialsTitle(testimonialsTitle);
                  setTempFooterDesc(footerDesc);
                  setIsCustomizerOpen(true);
                }}
                className="px-6 py-2.5 bg-slate-900 border border-zinc-800 text-zinc-300 text-xs font-semibold rounded-full hover:bg-slate-800 hover:border-zinc-700 hover:text-white cursor-pointer transition flex items-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#a78bfa]" />
                <span>Kustomisasi Seluruh Tampilan</span>
              </button>
              
              <button
                onClick={() => setShowEmbedCode(!showEmbedCode)}
                className="px-6 py-2.5 bg-white text-slate-950 text-xs font-bold rounded-full cursor-pointer transition shadow-xl hover:bg-zinc-200"
              >
                {showEmbedCode ? "Sembunyikan Kode IFrame" : "Dapatkan Kode IFrame"}
              </button>
            </div>

            {showEmbedCode && (
              <div className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 max-w-xl mx-auto text-left relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] font-mono uppercase text-zinc-500 block">KODE EMBED IFRAME DINAMIS (DENGAN GAMBAR EDITAN ANDA)</span>
                  <button
                    onClick={handleCopyIframe}
                    className="text-[10px] text-zinc-400 hover:text-white font-mono flex items-center gap-1 cursor-pointer transition"
                  >
                    {copyStatus ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin Kode</span>
                      </>
                    )}
                  </button>
                </div>
                
                <pre className="text-[10px] font-mono text-zinc-300 overflow-x-auto p-4 bg-black rounded-2xl select-all border border-zinc-900 leading-relaxed font-semibold max-h-36">
                  {`<iframe src="${getEmbedUrl()}" style="width:100%; height:820px; border:none; background-color: #020617;" allow="autoplay; encrypted-media"></iframe>`}
                </pre>
                
                <p className="text-[10px] text-zinc-500 font-mono mt-3 text-center">
                  💡 Tips: Paste kode di atas pada fitur {"Embed > Kode (HTML)"} di Google Sites Anda. Gambar editan Anda akan otomatis termuat secara permanen untuk semua audiens!
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. FORMAL FOOTER */}
      <footer className="bg-black/95 border-t border-zinc-900 py-16 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column A */}
          <div>
            <h4 className="font-serif italic text-white text-lg mb-3">{navTitle}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Platform ekosistem gaming formal yang menyajikan informasi top-up game instan resmi, jasa piloting booster, sistem penengah rekber escrow, dan pendampingan playmate mabar suportif.
            </p>
          </div>

          {/* Column B */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-3 font-mono uppercase tracking-wider">Metrik Operasional</h4>
            <ul className="space-y-2 text-zinc-400 text-xs font-mono">
              <li>✔ Verifikasi Otomatis Escrow</li>
              <li>✔ Proteksi Data Booster Aman</li>
              <li>✔ 2-Detik Callback Gateway</li>
              <li>✔ 100% Anti Toxic Playmate</li>
            </ul>
          </div>

          {/* Column C */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-3 font-mono uppercase tracking-wider">Hubungi Admin Portofolio</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 font-mono text-[11px]">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>WA: <b className="text-white">{contactWhatsapp}</b></span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 font-mono text-[11px]">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Discord: <b className="text-white">{contactDiscord}</b></span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal copyright footer bar */}
        <div className="max-w-6xl mx-auto px-6 border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 font-mono">
          <span>&copy; {new Date().getFullYear()} {navTitle.toUpperCase()} & {heroBrand.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            <span>SECURE ESCROW AGENT</span>
            <span>POWERED BY VITE + REACT + TS</span>
          </div>
        </div>
      </footer>

      {/* 8. IMAGE & TEXT PORTFOLIO CUSTOMIZER MODAL */}
      {isCustomizerOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-zinc-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-black/30">
              <div>
                <h3 className="font-serif italic text-xl text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-400" />
                  <span>Kustomisasi Portal Aura & Google Sites</span>
                </h3>
                <p className="text-zinc-400 text-xs mt-1">
                  Sesuaikan 6 gambar latar belakang serta teks-teks utama agar tampil serasi di Google Sites.
                </p>
              </div>
              <button 
                onClick={() => setIsCustomizerOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs text-zinc-300">
              
              {/* 1. Theme Selector */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#a78bfa] block mb-3 font-semibold tracking-wider flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-[#a78bfa] rounded-full animate-ping"></span>
                  PILIH TEMA WARNA & LATAR BELAKANG (GOOGLE SITES INTEGRATED)
                </span>
                <p className="text-zinc-500 text-[10px] sm:text-[10.5px] leading-relaxed mb-4">
                  Sesuaikan warna dasar situs agar selaras dengan tema utama Google Sites Anda. Perubahan warna background akan beralih secara langsung.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {Object.entries(THEMES).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => setTempThemeBg(key)}
                      className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        tempThemeBg === key
                          ? "bg-slate-800 border-white text-white shadow-lg shadow-white/5 font-semibold"
                          : "bg-slate-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border border-white/20 bg-gradient-to-tr ${
                        key === 'slate' ? 'from-slate-950 via-slate-900 to-indigo-950' :
                        key === 'pure-black' ? 'from-black via-zinc-900 to-zinc-950' :
                        key === 'dark-purple' ? 'from-[#0b031c] via-[#10042a] to-[#24083c]' :
                        key === 'navy-blue' ? 'from-[#020b1e] via-[#041635] to-[#041650]' :
                        'from-[#02120a] via-[#032010] to-[#052b14]'
                      }`} />
                      <span className="text-[10px]">{config.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Elements Toggle Switch Grid */}
              <div className="border-t border-zinc-800 pt-6">
                <span className="text-[10px] font-mono uppercase text-[#a78bfa] block mb-3 font-semibold tracking-wider flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-[#a78bfa] rounded-full"></span>
                  AKTIFKAN / SEMBUNYIKAN ELEMEN & MODUL PORTAL
                </span>
                <p className="text-zinc-500 text-[10px] sm:text-[10.5px] leading-relaxed mb-4">
                  Sembunyikan tab, testimoni, atau statistik yang tidak diperlukan dalam penayangan portofolio formal Anda.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition">
                    <div>
                      <span className="text-white font-medium block">Profil Tentang Kami (About Us)</span>
                      <span className="text-[9px] text-zinc-500 block">Menampilkan sekilas deskripsi perusahaan</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowAboutUs}
                      onChange={(e) => setTempShowAboutUs(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition">
                    <div>
                      <span className="text-white font-medium block">Metrik Statistik Kelebihan (100% Selesai)</span>
                      <span className="text-[9px] text-zinc-500 block">Menampilkan metrics angka di bawah deskripsi</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowHeroStats}
                      onChange={(e) => setTempShowHeroStats(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition">
                    <div>
                      <span className="text-white font-medium block">Tab 1: Top-Up Instan Terintegrasi</span>
                      <span className="text-[9px] text-zinc-500 block">Katalog game top up di layanan utama</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowTopUp}
                      onChange={(e) => setTempShowTopUp(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition">
                    <div>
                      <span className="text-white font-medium block">Tab 2: Jasa Pilot Booster Rank</span>
                      <span className="text-[9px] text-zinc-500 block">Penyediaan deskripsi & isian kalkulator jasa pilot</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowBooster}
                      onChange={(e) => setTempShowBooster(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition">
                    <div>
                      <span className="text-white font-medium block">Tab 3: Rekber Escrow Hub</span>
                      <span className="text-[9px] text-zinc-500 block">Modul simulasi kalkulator fee rekber formal</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowRekber}
                      onChange={(e) => setTempShowRekber(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition">
                    <div>
                      <span className="text-white font-medium block">Tab 4: Sewa Playmates Mabar</span>
                      <span className="text-[9px] text-zinc-500 block">Katalog list teman mabar pro (exclude HSR)</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowPlaymates}
                      onChange={(e) => setTempShowPlaymates(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer select-none transition col-span-1 sm:col-span-2">
                    <div>
                      <span className="text-white font-medium block">Seksi Ulasan & Testimoni Pelanggan</span>
                      <span className="text-[9px] text-zinc-500 block">Ulasan bintang 5 dari pembeli gaming terpercaya</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={tempShowTestimonials}
                      onChange={(e) => setTempShowTestimonials(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-500 border-zinc-800 bg-slate-900 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              </div>

              {/* Atur Urutan Baris Tampilan */}
              <div className="border-t border-zinc-800 pt-6">
                <span className="text-[10px] font-mono uppercase text-[#a78bfa] block mb-3 font-semibold tracking-wider flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-[#a78bfa] rounded-full"></span>
                  ATUR URUTAN BARIS TAMPILAN (DRAG & ARRANGE GRID)
                </span>
                <p className="text-zinc-500 text-[10px] leading-relaxed mb-4">
                  Susun ulang letak seksi About Us, Layanan, atau Testimoni dengan mengklik tombol panah di bawah ini seolah-olah mengaturnya langsung dari Google Sites.
                </p>
                
                <div className="space-y-2">
                  {sectionOrder.map((section, idx) => (
                    <div key={section} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-950 border border-zinc-850">
                      <span className="font-bold text-white uppercase tracking-wider font-mono text-[9px]">
                        {idx + 1}. {section === "about" ? "Profil Tentang Kami (About Us)" : section === "services" ? "Tabel Layanan Utama (Services)" : "Ulasan Pembeli (Testimonial)"}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => moveSectionUp(idx)}
                          disabled={idx === 0}
                          className="px-2.5 py-1 text-[10px] font-mono bg-slate-900 border border-zinc-800 hover:border-zinc-700 hover:text-white text-zinc-400 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          🔼 Naik
                        </button>
                        <button
                          onClick={() => moveSectionDown(idx)}
                          disabled={idx === sectionOrder.length - 1}
                          className="px-2.5 py-1 text-[10px] font-mono bg-slate-900 border border-zinc-800 hover:border-zinc-700 hover:text-white text-zinc-400 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          🔽 Turun
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Preset Selector */}
              <div className="border-t border-zinc-800 pt-6">
                <span className="text-[10px] font-mono uppercase text-[#a78bfa] block mb-3 font-semibold tracking-wider flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-[#a78bfa] rounded-full"></span>
                  PILIH PRESET BACKDROP KILAT (1-CLICK)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => setEditImages([...PRESETS.gaming])}
                    className="flex flex-col items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 hover:bg-slate-900 transition text-center group cursor-pointer"
                  >
                    <span className="text-white font-serif italic text-xs mb-1">Standard Gaming</span>
                    <span className="text-[8px] text-zinc-500 block text-center">Tampilan Default</span>
                  </button>
                  <button
                    onClick={() => setEditImages([...PRESETS.pastel])}
                    className="flex flex-col items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 hover:bg-slate-900 transition text-center group cursor-pointer"
                  >
                    <span className="text-pink-300 font-serif italic text-xs mb-1">Aesthetic Pastel</span>
                    <span className="text-[8px] text-zinc-500 block text-center">Sentuhan Dreamy</span>
                  </button>
                  <button
                    onClick={() => setEditImages([...PRESETS.abstract])}
                    className="flex flex-col items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 hover:bg-slate-900 transition text-center group cursor-pointer"
                  >
                    <span className="text-violet-400 font-serif italic text-xs mb-1">Modern Minimal</span>
                    <span className="text-[8px] text-zinc-500 block text-center">Abstrak Elegan</span>
                  </button>
                  <button
                    onClick={() => setEditImages([...PRESETS.darkroom])}
                    className="flex flex-col items-center justify-between p-3 rounded-2xl bg-slate-950 border border-zinc-800 hover:border-zinc-700 hover:bg-slate-900 transition text-center group cursor-pointer"
                  >
                    <span className="text-cyan-400 font-serif italic text-xs mb-1">Cyberpunk Tech</span>
                    <span className="text-[8px] text-zinc-500 block text-center">Futuristik Gelap</span>
                  </button>
                </div>
              </div>

              {/* 4. Custom url list */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#a78bfa] block mb-3 font-semibold tracking-wider flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-[#a78bfa] rounded-full"></span>
                  KUSTOMISASI 6 GAMBAR COVER UTAMA (URL INTERNET)
                </span>
                <p className="text-zinc-500 text-[10.5px] leading-relaxed mb-4">
                  Anda bisa menempelkan link gambar apa saja dari Internet (Pinterest, Unsplash, Imgur, dsb.) langsung ke 6 slot kolom di bawah ini.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {editImages.map((url, idx) => (
                    <div key={idx} className="bg-slate-950 p-3.5 border border-zinc-800 rounded-2xl space-y-2 flex gap-3 items-center">
                      <div className="w-12 h-12 bg-zinc-900 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                        <img 
                          src={url} 
                          alt={`Slot Cover ${idx + 1}`} 
                          className="w-full h-full object-cover animate-pulse"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100";
                          }}
                        />
                      </div>
                      <div className="flex-1 space-y-1.5 min-w-0">
                        <span className="text-[9px] font-mono uppercase text-zinc-500 block">Kolase Slot #{idx + 1}</span>
                        <input
                          type="text"
                          value={url}
                          onChange={(e) => {
                            const copy = [...editImages];
                            copy[idx] = e.target.value;
                            setEditImages(copy);
                          }}
                          className="w-full bg-slate-900 border border-zinc-800 rounded px-2 py-1 text-zinc-200 text-[10px] focus:outline-none focus:border-indigo-500 font-mono"
                          placeholder="Masukkan URL foto..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Custom text fields */}
              <div className="border-t border-zinc-800 pt-6">
                <span className="text-[10px] font-mono uppercase text-[#a78bfa] block mb-3 font-semibold tracking-wider flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-[#a78bfa] rounded-full"></span>
                  KUSTOMISASI DATA TEKS UTAMA PORTAL
                </span>
                <p className="text-zinc-500 text-[10.5px] leading-relaxed mb-4">
                  Ubah seketika isi dan judul situs Anda. Sangat cocok jika ingin mengganti ke bahasa kustom, brand kustom, atau sekedar menyalin info resmi Anda.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Judul Navbar (Kiri Atas)</span>
                      <input
                        type="text"
                        value={tempNavTitle}
                        onChange={(e) => setTempNavTitle(e.target.value)}
                        className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition font-semibold"
                        placeholder="Judul Navbar..."
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Nama Brand Utama (Seksi Banner Cover)</span>
                      <input
                        type="text"
                        value={tempHeroBrand}
                        onChange={(e) => setTempHeroBrand(e.target.value)}
                        className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition font-serif italic"
                        placeholder="Brand Utama..."
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Slogan Deskripsi Banner Cover</span>
                    <input
                      type="text"
                      value={tempHeroSubtitle}
                      onChange={(e) => setTempHeroSubtitle(e.target.value)}
                      className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                      placeholder="Slogan Banner..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Judul Utama Seksi Layanan</span>
                      <input
                        type="text"
                        value={tempServicesTitle}
                        onChange={(e) => setTempServicesTitle(e.target.value)}
                        className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                        placeholder="Judul Layanan..."
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Nama Utama Seksi Testimoni</span>
                      <input
                        type="text"
                        value={tempTestimonialsTitle}
                        onChange={(e) => setTempTestimonialsTitle(e.target.value)}
                        className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                        placeholder="Judul Testimoni..."
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Deskripsi Seksi Layanan</span>
                    <input
                      type="text"
                      value={tempServicesSubtitle}
                      onChange={(e) => setTempServicesSubtitle(e.target.value)}
                      className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Deskripsi Profil Tentang Kami (About Us)</span>
                    <textarea
                      value={tempAboutDesc1}
                      onChange={(e) => setTempAboutDesc1(e.target.value)}
                      rows={3}
                      className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition resize-none leading-relaxed"
                      placeholder="Deskripsi..."
                    />
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Deskripsi Ringkas Footer (Kiri Bawah)</span>
                    <textarea
                      value={tempFooterDesc}
                      onChange={(e) => setTempFooterDesc(e.target.value)}
                      rows={2}
                      className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition resize-none leading-relaxed"
                      placeholder="Footer Deskripsi..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">No. WhatsApp Admin (Footer & Chat)</span>
                      <input
                        type="text"
                        value={tempContactWhatsapp}
                        onChange={(e) => setTempContactWhatsapp(e.target.value)}
                        className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition font-mono"
                        placeholder="+62..."
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block mb-1 uppercase">Username Discord Admin (Footer)</span>
                      <input
                        type="text"
                        value={tempContactDiscord}
                        onChange={(e) => setTempContactDiscord(e.target.value)}
                        className="w-full bg-slate-950 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 text-xs focus:outline-none focus:border-[#a78bfa] transition font-mono"
                        placeholder="Nama#1337..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Preview Bar */}
              <div className="p-4 bg-indigo-950/20 border border-indigo-950/40 rounded-2xl flex items-start gap-3">
                <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-zinc-300 leading-relaxed text-[11px]">
                  <b className="text-indigo-300 block">Bagaimana Cara Kerja IFrame di Google Sites?</b>
                  <p>
                    Saat Anda mengklik <b>"Terapkan Semua Perubahan"</b>, data akan tersimpan di browser Anda saat ini. Untuk mengunci modifikasi ini agar **tampil permanen bagi seluruh pengunjung Google Sites Anda**, buka info <b>"Dapatkan Kode IFrame"</b> di bawah halaman utama dan pasang kodenya di Google Sites!
                  </p>
                </div>
              </div>

            </div>

            {/* Footer containing save/cancel/reset actions */}
            <div className="p-4 bg-black/40 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <button 
                onClick={() => {
                  setEditImages([...PRESETS.gaming]);
                  setTempNavTitle("Aura Zeinara Reverie");
                  setTempHeroBrand("GamingSuites");
                  setTempHeroSubtitle("Elevate your Gaming Experience Instantly.");
                  setTempAboutDesc1("Gaming Suites adalah platform penyedia layanan ekosistem gaming terintegrasi yang berkomitmen untuk memberikan pengalaman bermain game yang lebih mudah, aman, dan menyenangkan.");
                  setTempContactWhatsapp("+62 812-3456-7890");
                  setTempContactDiscord("GamingSuites#1337");
                  setTempThemeBg("slate");
                  setTempShowAboutUs(true);
                  setTempShowHeroStats(true);
                  setTempShowTopUp(true);
                  setTempShowBooster(true);
                  setTempShowRekber(true);
                  setTempShowPlaymates(true);
                  setTempShowTestimonials(true);
                  setTempServicesTitle("Layanan Utama GamingSuites");
                  setTempServicesSubtitle("Kami menyederhanakan penjelasan modul operasional ekosistem kami untuk keperluan portofolio formal Anda. Bebas elemen input rumit yang mengganggu keindahan desain.");
                  setTempTestimonialsTitle("Testimoni Komunitas");
                  setTempFooterDesc("Platform ekosistem gaming formal yang menyajikan informasi top-up game instan resmi, jasa piloting booster, sistem penengah rekber escrow, dan pendampingan playmate mabar suportif.");
                }}
                className="px-4 py-2 border border-zinc-800 hover:bg-slate-800 text-zinc-400 hover:text-white rounded-full transition text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Default</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCustomizerOpen(false)}
                  className="px-4 py-2 text-zinc-400 hover:text-white transition text-xs cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setCollageImages([...editImages]);
                    setNavTitle(tempNavTitle);
                    setHeroBrand(tempHeroBrand);
                    setHeroSubtitle(tempHeroSubtitle);
                    setAboutDesc1(tempAboutDesc1);
                    setContactWhatsapp(tempContactWhatsapp);
                    setContactDiscord(tempContactDiscord);
                    
                    setThemeBg(tempThemeBg);
                    setShowAboutUs(tempShowAboutUs);
                    setShowHeroStats(tempShowHeroStats);
                    setShowTopUp(tempShowTopUp);
                    setShowBooster(tempShowBooster);
                    setShowRekber(tempShowRekber);
                    setShowPlaymates(tempShowPlaymates);
                    setShowTestimonials(tempShowTestimonials);
                    setServicesTitle(tempServicesTitle);
                    setServicesSubtitle(tempServicesSubtitle);
                    setTestimonialsTitle(tempTestimonialsTitle);
                    setFooterDesc(tempFooterDesc);

                    try {
                      localStorage.setItem("aura_collage_images", JSON.stringify(editImages));
                      localStorage.setItem("aura_nav_title", tempNavTitle);
                      localStorage.setItem("aura_hero_brand", tempHeroBrand);
                      localStorage.setItem("aura_hero_subtitle", tempHeroSubtitle);
                      localStorage.setItem("aura_about_desc1", tempAboutDesc1);
                      localStorage.setItem("aura_contact_whatsapp", tempContactWhatsapp);
                      localStorage.setItem("aura_contact_discord", tempContactDiscord);

                      localStorage.setItem("aura_theme_bg", tempThemeBg);
                      localStorage.setItem("aura_show_about_us", String(tempShowAboutUs));
                      localStorage.setItem("aura_show_hero_stats", String(tempShowHeroStats));
                      localStorage.setItem("aura_show_topup", String(tempShowTopUp));
                      localStorage.setItem("aura_show_booster", String(tempShowBooster));
                      localStorage.setItem("aura_show_rekber", String(tempShowRekber));
                      localStorage.setItem("aura_show_playmates", String(tempShowPlaymates));
                      localStorage.setItem("aura_show_testimonials", String(tempShowTestimonials));
                      localStorage.setItem("aura_services_title", tempServicesTitle);
                      localStorage.setItem("aura_services_subtitle", tempServicesSubtitle);
                      localStorage.setItem("aura_testimonials_title", tempTestimonialsTitle);
                      localStorage.setItem("aura_footer_desc", tempFooterDesc);
                    } catch (e) {
                      console.error(e);
                    }
                    setIsCustomizerOpen(false);
                  }}
                  className="px-6 py-2 bg-white text-slate-950 rounded-full font-bold text-xs hover:bg-zinc-200 transition flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <Check className="w-4 h-4" />
                  <span>Terapkan Semua Perubahan</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
