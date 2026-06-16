import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        const translations = {
            en: {
                nav_works: "How it Works",
                nav_cap: "Capabilities",
                nav_invest: "Investors",
                nav_beta: "Invest in Beta",
                nav_access: "Get Early Access",
                hero_pill: "Now in Private Beta",
                hero_title_1: "Talk to your",
                hero_title_2: "business data.",
                hero_desc: "No more complex SQL dashboards. Connect your database and get instant answers via WhatsApp. Just ask.",
                hero_btn_waitlist: "Join Beta Waitlist",
                hero_btn_invest: "Invest in Us",
                hero_trusted: "Trusted by 10+ Seed Investors",
                
                // Chat Interface
                chat_profit: "Net Profit Today",
                chat_users: "Active Users",
                chat_users_val: "842 Live",
                chat_status: "Online • Database Connected",
                chat_today: "Today",
                chat_u1: "Show me total sales from yesterday vs last week.",
                chat_ai1: "Here's the sales comparison:",
                chat_yesterday: "Yesterday",
                chat_lastweek: "Last Week",
                chat_increase: "11.8% increase",
                chat_u2: "What's our current cash flow?",
                chat_input: "Ask about your data...",

                // Steps
                steps_title: "Setup in minutes.",
                steps_desc: "Transform your database into a chatbot in three simple steps.",
                step1_title: "Connect Database",
                step1_desc: "Securely link your SQL, Postgres, or MongoDB via our read-only encrypted API connector.",
                step2_title: "Integrate WhatsApp",
                step2_desc: "Scan the QR code to authorize the Platolk AI agent as a contact in your business WhatsApp.",
                step3_title: "Start Chatting",
                step3_desc: "Ask questions in plain English. \"How much inventory is left?\" and get instant answers.",

                // Capabilities
                cap_title: "Enterprise capabilities.<br>Pocket accessibility.",
                cap_desc: "Empower every department with instant data access without learning SQL.",
                card1_title: "Finance & Cash Flow",
                card1_desc: "\"What is our burn rate this month?\"",
                card2_title: "Human Resources",
                card2_desc: "\"How many employees are on leave today?\"",
                card3_title: "Sales & Revenue",
                card3_desc: "\"Show me transaction totals for Region A.\"",

                // Comparison
                comp_title: "Stop the dashboard fatigue.",
                old_title: "The Old Way",
                old_1: "Complex BI tools requiring training",
                old_2: "VPN login just to check one number",
                old_3: "Static reports that are outdated instantly",
                old_4: "Need a Data Analyst for every query",
                new_title: "The Platolk Way",
                new_1: "Natural language chat interface",
                new_2: "Accessible anywhere via WhatsApp",
                new_3: "Real-time data straight from DB",
                new_4: "Zero training required",

                // CTA
                cta_tag: "Seed Funding Open",
                cta_title: "Be part of the future of <br>Business Intelligence.",
                cta_desc: "We are currently in private beta and opening our Seed Round for strategic investors. Help us democratize data access for businesses worldwide.",
                cta_btn1: "Contact Investor Relations",
                cta_btn2: "Request Pitch Deck",

                // Footer
                footer_desc: "The AI agent that turns your database into a conversation. Access your metrics instantly via WhatsApp.",
                footer_prod: "Product",
                f_feat: "Features",
                f_sec: "Security",
                f_int: "Integrations",
                f_change: "Changelog",
                footer_comp: "Company",
                f_about: "About Us",
                f_cont: "Contact",
                f_priv: "Privacy Policy",
            },
            id: {
                nav_works: "Cara Kerja",
                nav_cap: "Kapabilitas",
                nav_invest: "Investor",
                nav_beta: "Investasi di Beta",
                nav_access: "Dapatkan Akses",
                hero_pill: "Sekarang di Private Beta",
                hero_title_1: "Bicara dengan",
                hero_title_2: "data bisnis Anda.",
                hero_desc: "Tidak ada lagi dashboard SQL yang rumit. Hubungkan database Anda dan dapatkan jawaban instan via WhatsApp. Cukup tanyakan.",
                hero_btn_waitlist: "Gabung Waitlist",
                hero_btn_invest: "Investasi di Kami",
                hero_trusted: "Dipercaya oleh 10+ Seed Investor",
                
                // Chat Interface
                chat_profit: "Laba Bersih Hari Ini",
                chat_users: "Pengguna Aktif",
                chat_users_val: "842 Langsung",
                chat_status: "Online • Database Terhubung",
                chat_today: "Hari Ini",
                chat_u1: "Tampilkan total penjualan kemarin vs minggu lalu.",
                chat_ai1: "Berikut perbandingan penjualannya:",
                chat_yesterday: "Kemarin",
                chat_lastweek: "Minggu Lalu",
                chat_increase: "Kenaikan 11.8%",
                chat_u2: "Bagaimana arus kas kita saat ini?",
                chat_input: "Tanya tentang data Anda...",

                // Steps
                steps_title: "Siap dalam hitungan menit.",
                steps_desc: "Ubah database Anda menjadi chatbot dalam tiga langkah mudah.",
                step1_title: "Hubungkan Database",
                step1_desc: "Tautkan SQL, Postgres, atau MongoDB Anda dengan aman melalui konektor API terenkripsi read-only kami.",
                step2_title: "Integrasi WhatsApp",
                step2_desc: "Scan kode QR untuk mengotorisasi agen AI Platolk sebagai kontak di WhatsApp bisnis Anda.",
                step3_title: "Mulai Chatting",
                step3_desc: "Ajukan pertanyaan dalam bahasa sehari-hari. \"Berapa sisa inventaris?\" dan dapatkan jawaban instan.",

                // Capabilities
                cap_title: "Kapabilitas Enterprise.<br>Aksesibilitas saku.",
                cap_desc: "Berdayakan setiap departemen dengan akses data instan tanpa perlu belajar SQL.",
                card1_title: "Keuangan & Arus Kas",
                card1_desc: "\"Berapa burn rate kita bulan ini?\"",
                card2_title: "Sumber Daya Manusia (HR)",
                card2_desc: "\"Berapa karyawan yang cuti hari ini?\"",
                card3_title: "Penjualan & Pendapatan",
                card3_desc: "\"Tampilkan total transaksi untuk Wilayah A.\"",

                // Comparison
                comp_title: "Hentikan kelelahan dashboard.",
                old_title: "Cara Lama",
                old_1: "Alat BI rumit yang butuh pelatihan",
                old_2: "Login VPN hanya untuk cek satu angka",
                old_3: "Laporan statis yang langsung kadaluarsa",
                old_4: "Butuh Analis Data untuk setiap kueri",
                new_title: "Cara Platolk",
                new_1: "Antarmuka obrolan bahasa alami",
                new_2: "Dapat diakses di mana saja via WhatsApp",
                new_3: "Data real-time langsung dari DB",
                new_4: "Nol pelatihan yang dibutuhkan",

                // CTA
                cta_tag: "Pendanaan Seed Dibuka",
                cta_title: "Jadilah bagian masa depan <br>Kecerdasan Bisnis.",
                cta_desc: "Kami saat ini dalam private beta dan membuka Putaran Seed untuk investor strategis. Bantu kami mendemokratisasi akses data untuk bisnis di seluruh dunia.",
                cta_btn1: "Hubungi Hubungan Investor",
                cta_btn2: "Minta Pitch Deck",

                // Footer
                footer_desc: "Agen AI yang mengubah database Anda menjadi percakapan. Akses metrik Anda secara instan melalui WhatsApp.",
                footer_prod: "Produk",
                f_feat: "Fitur",
                f_sec: "Keamanan",
                f_int: "Integrasi",
                f_change: "Log Perubahan",
                footer_comp: "Perusahaan",
                f_about: "Tentang Kami",
                f_cont: "Kontak",
                f_priv: "Kebijakan Privasi",
            }
        };

        function setLanguage(lang) {
            // Update Text Elements
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[lang][key]) {
                    // Check if content implies HTML (line breaks)
                    if (translations[lang][key].includes('<br>')) {
                         element.innerHTML = translations[lang][key];
                    } else {
                         element.innerText = translations[lang][key];
                    }
                }
            });

            // Update UI Toggles
            const btnEn = document.getElementById('btn-en');
            const btnId = document.getElementById('btn-id');
            
            if (lang === 'en') {
                btnEn.className = "px-3 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer lang-active";
                btnId.className = "px-3 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer lang-inactive";
            } else {
                btnId.className = "px-3 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer lang-active";
                btnEn.className = "px-3 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer lang-inactive";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="fixed inset-0 mesh-gradient pointer-events-none w-full h-full"></div>
<div className="fixed top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse bg-green-600/20"></div>
<div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none bg-cyan-600/20"></div>

<nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br to-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.5)] from-cyan-400 text-white font-google-sans-flex" style={{}}>
                    PL
                </div>
<span className="text-xl text-white font-google-sans-flex" style={{}}>Platolk</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-300">
<a className="transition-colors hover:text-white font-google-sans-flex" data-lang="nav_works" href="#how-it-works" style={{}}>How it Works</a>
<a className="transition-colors hover:text-white font-google-sans-flex" data-lang="nav_cap" href="#capabilities" style={{}}>Capabilities</a>
<a className="transition-colors hover:text-white font-google-sans-flex" data-lang="nav_invest" href="#invest" style={{}}>Investors</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs uppercase transition-colors text-cyan-300 hover:text-cyan-200 font-google-sans-flex" data-lang="nav_beta" href="#invest" style={{}}>
                    Invest in Beta
                </a>

<div className="flex items-center rounded-full p-1 border bg-white/5 border-white/10">
<button className="px-3 py-1 rounded-full text-[10px] transition-all cursor-pointer lang-active font-google-sans-flex" id="btn-en" onclick="setLanguage('en')" style={{}}>EN</button>
<button className="text-[10px] transition-all cursor-pointer lang-inactive font-google-sans-flex rounded-full pt-1 pr-3 pb-1 pl-3" id="btn-id" onclick="setLanguage('id')">ID</button>
</div>
<button className="glass-btn px-5 py-2 rounded-full text-sm text-white font-google-sans-flex" data-lang="nav_access" style={{}}>
                    Get Early Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 w-fit backdrop-blur-md bg-white/5 border-white/10 text-cyan-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="font-google-sans-flex" data-lang="hero_pill" style={{}}>Now in Private Beta</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
<span className="font-google-sans-flex font-semibold" data-lang="hero_title_1" style={{}}>Talk to your</span> <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-green-300 to-amber-300 font-google-sans-flex font-semibold" data-lang="hero_title_2" style={{}}>business data.</span>
</h1>
<p className="lg:text-xl leading-relaxed text-lg text-slate-400 max-w-lg mb-10 font-google-sans-flex" data-lang="hero_desc" style={{}}>
                    No more complex SQL dashboards. Connect your database and get instant answers via WhatsApp. Just ask.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3.5 rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100">
<span className="font-google-sans-flex" data-lang="hero_btn_waitlist" style={{}}>Join Beta Waitlist</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="glass-btn px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 text-white">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-google-sans-flex" data-lang="hero_btn_invest" style={{}}>Invest in Us</span>
</button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-500 font-light">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] border-slate-800 bg-slate-700 text-white font-google-sans-flex" style={{}}>JD</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] border-slate-800 bg-slate-600 text-white font-google-sans-flex" style={{}}>AS</div>
<div className="w-8 h-8 rounded-full border bg-slate-500 flex items-center justify-center text-[10px] border-slate-800 text-white font-google-sans-flex" style={{}}>+8</div>
</div>
<p className="font-google-sans-flex" data-lang="hero_trusted" style={{}}>Trusted by 10+ Seed Investors</p>
</div>
</div>

<div className="relative z-10 lg:ml-auto w-full max-w-md mx-auto perspective-[2000px] group">

<div className="absolute -top-12 -right-12 glass-card p-4 rounded-xl flex items-center gap-3 animate-[bounce_4s_infinite] z-20">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-400 font-google-sans-flex" data-lang="chat_profit" style={{}}>Net Profit Today</p>
<p className="text-sm text-white font-google-sans-flex" style={{}}>+$12,450.00</p>
</div>
</div>
<div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-[bounce_5s_infinite] z-20 delay-700">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-google-sans-flex" data-lang="chat_users" style={{}}>Active Users</p>
<p className="text-sm text-white font-google-sans-flex" data-lang="chat_users_val" style={{}}>842 Live</p>
</div>
</div>

<div className="relative border rounded-[3rem] p-3 shadow-2xl backdrop-blur-xl transform transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6 rotate-y-3 rotate-x-3 bg-slate-900/40 border-white/20">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 rounded-b-xl z-20 backdrop-blur-md bg-black/50"></div>

<div className="rounded-[2.5rem] overflow-hidden h-[600px] border relative flex flex-col bg-slate-950 border-white/5">

<div className="backdrop-blur-md p-4 pt-10 border-b flex items-center gap-3 sticky top-0 z-10 bg-slate-900/80 border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br p-[1px] from-cyan-400 to-green-600">
<div className="w-full h-full rounded-full flex items-center justify-center bg-slate-900">
<iconify-icon className="text-cyan-400" icon="lucide:bot" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm text-white font-google-sans-flex" style={{}}>Platolk AI</h3>
<p className="text-xs text-green-400 font-google-sans-flex" data-lang="chat_status" style={{}}>Online • Database Connected</p>
</div>
</div>

<div className="flex-1 p-4 space-y-4 overflow-y-auto">

<div className="flex justify-center">
<span className="text-slate-500 text-[10px] px-2 py-1 rounded-md bg-slate-800/50 font-google-sans-flex" data-lang="chat_today" style={{}}>Today</span>
</div>

<div className="flex justify-end">
<div className="border border-cyan-500/30 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[85%] bg-cyan-600/20 text-cyan-100 font-google-sans-flex" data-lang="chat_u1" style={{}}>
                                    Show me total sales from yesterday vs last week.
                                </div>
</div>

<div className="flex justify-start">
<div className="glass-card px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] space-y-2">
<p className="text-sm text-slate-200 font-google-sans-flex" data-lang="chat_ai1" style={{}}>Here's the sales comparison:</p>
<div className="grid grid-cols-2 gap-2 mt-2">
<div className="p-2 rounded-lg border bg-white/5 border-white/5">
<p className="text-[10px] uppercase text-slate-400 font-google-sans-flex" data-lang="chat_yesterday" style={{}}>Yesterday</p>
<p className="text-lg text-white font-google-sans-flex" style={{}}>$4,250</p>
</div>
<div className="p-2 rounded-lg border bg-white/5 border-white/5">
<p className="text-[10px] uppercase text-slate-400 font-google-sans-flex" data-lang="chat_lastweek" style={{}}>Last Week</p>
<p className="text-lg text-slate-400 font-google-sans-flex" style={{}}>$3,800</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-green-400">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
<span className="font-google-sans-flex" data-lang="chat_increase" style={{}}>11.8% increase</span>
</div>
<p className="text-[10px] text-slate-500 text-right mt-1 font-google-sans-flex" style={{}}>10:42 AM</p>
</div>
</div>

<div className="flex justify-end">
<div className="border border-cyan-500/30 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[85%] bg-cyan-600/20 text-cyan-100 font-google-sans-flex" data-lang="chat_u2" style={{}}>
                                    What's our current cash flow?
                                </div>
</div>

<div className="flex justify-start">
<div className="glass-card px-4 py-3 rounded-2xl rounded-tl-sm w-16 flex items-center justify-center gap-1">
<div className="w-1.5 h-1.5 rounded-full animate-bounce bg-slate-400"></div>
<div className="w-1.5 h-1.5 rounded-full animate-bounce delay-100 bg-slate-400"></div>
<div className="w-1.5 h-1.5 rounded-full animate-bounce delay-200 bg-slate-400"></div>
</div>
</div>
</div>

<div className="p-3 backdrop-blur-md border-t bg-slate-900/80 border-white/5">
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-white"><iconify-icon icon="lucide:plus" width="20"></iconify-icon></button>
<div className="flex-1 h-9 rounded-full border px-3 flex items-center text-xs text-slate-500 bg-slate-800/50 border-white/5 font-google-sans-flex" data-lang="chat_input" style={{}}>Ask about your data...</div>
<button className="p-2 text-cyan-400"><iconify-icon icon="lucide:mic" width="20"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight mb-4 text-white font-google-sans-flex font-semibold" data-lang="steps_title" style={{}}>Setup in minutes.</h2>
<p className="text-slate-400 font-google-sans-flex" data-lang="steps_desc" style={{}}>Transform your database into a chatbot in three simple steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border flex items-center justify-center text-xl shadow-xl bg-slate-900 border-white/10 text-cyan-400 font-google-sans-flex" style={{}}>1</div>
<div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors text-cyan-300">
<iconify-icon icon="lucide:database" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-google-sans-flex mb-2" data-lang="step1_title">Connect Database</h3>
<p className="text-sm leading-relaxed text-slate-400 font-google-sans-flex" data-lang="step1_desc" style={{}}>Securely link your SQL, Postgres, or MongoDB via our read-only encrypted API connector.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-500 delay-100">
<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border flex items-center justify-center text-xl shadow-xl bg-slate-900 border-white/10 text-green-400 font-google-sans-flex" style={{}}>2</div>
<div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors text-green-300">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-2 text-white font-google-sans-flex" data-lang="step2_title" style={{}}>Integrate WhatsApp</h3>
<p className="text-sm leading-relaxed text-slate-400 font-google-sans-flex" data-lang="step2_desc" style={{}}>Scan the QR code to authorize the Platolk AI agent as a contact in your business WhatsApp.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-500 delay-200">
<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border flex items-center justify-center text-xl shadow-xl bg-slate-900 border-white/10 text-amber-400 font-google-sans-flex" style={{}}>3</div>
<div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors text-amber-300">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-2 text-white font-google-sans-flex" data-lang="step3_title" style={{}}>Start Chatting</h3>
<p className="text-sm leading-relaxed text-slate-400 font-google-sans-flex" data-lang="step3_desc" style={{}}>Ask questions in plain English. "How much inventory is left?" and get instant answers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="capabilities">

<div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none bg-amber-600/10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl lg:text-4xl tracking-tight mb-4 text-white font-google-sans-flex font-semibold" data-lang="cap_title" style={{}}>Enterprise capabilities.<br/>Pocket accessibility.</h2>
<p className="max-w-md text-slate-400 font-google-sans-flex" data-lang="cap_desc" style={{}}>Empower every department with instant data access without learning SQL.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white font-google-sans-flex" style={{}}>SQL</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white font-google-sans-flex" style={{}}>NoSQL</span>
<span className="px-3 py-1 rounded-full border text-xs border-white/10 bg-white/5 text-white font-google-sans-flex" style={{}}>API</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl transition-colors group cursor-default hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-slate-500/10 text-slate-300">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<iconify-icon className="group-hover:text-white transition-colors text-slate-600" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<h4 className="text-lg mb-1 text-white font-google-sans-flex" data-lang="card1_title" style={{}}>Finance &amp; Cash Flow</h4>
<p className="text-sm mb-4 text-slate-400 font-google-sans-flex" data-lang="card1_desc" style={{}}>"What is our burn rate this month?"</p>
<div className="h-1 w-full rounded-full overflow-hidden bg-slate-800">
<div className="h-full bg-slate-500 w-3/4"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl transition-colors group cursor-default hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-amber-500/10 text-amber-300">
<iconify-icon icon="lucide:users-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<iconify-icon className="group-hover:text-white transition-colors text-slate-600" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<h4 className="text-lg mb-1 text-white font-google-sans-flex" data-lang="card2_title" style={{}}>Human Resources</h4>
<p className="text-sm mb-4 text-slate-400 font-google-sans-flex" data-lang="card2_desc" style={{}}>"How many employees are on leave today?"</p>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border bg-slate-600 border-slate-800"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-800"></div>
<div className="w-6 h-6 rounded-full border bg-slate-400 border-slate-800"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl transition-colors group cursor-default hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300">
<iconify-icon icon="lucide:banknote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<iconify-icon className="group-hover:text-white transition-colors text-slate-600" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<h4 className="text-lg mb-1 text-white font-google-sans-flex" data-lang="card3_title" style={{}}>Sales &amp; Revenue</h4>
<p className="text-sm mb-4 text-slate-400 font-google-sans-flex" data-lang="card3_desc" style={{}}>"Show me transaction totals for Region A."</p>
<div className="flex items-end gap-1 h-4">
<div className="w-2 bg-cyan-500/30 h-2 rounded-sm"></div>
<div className="w-2 bg-cyan-500/50 h-3 rounded-sm"></div>
<div className="w-2 bg-cyan-500 h-4 rounded-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-google-sans-flex font-semibold" data-lang="comp_title" style={{}}>Stop the dashboard fatigue.</h2>
</div>
<div className="grid md:grid-cols-2 gap-0 border rounded-3xl overflow-hidden glass-card border-white/10">

<div className="p-10 border-b md:border-b-0 md:border-r bg-amber-500/5 relative border-white/10">
<div className="absolute top-6 right-6 text-amber-400/50">
<iconify-icon icon="lucide:x-circle" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="text-xl mb-6 text-white font-google-sans-flex" data-lang="old_title" style={{}}>The Old Way</h3>
<ul className="space-y-4 font-light text-slate-400">
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-amber-400" icon="lucide:x" width="16"></iconify-icon>
<span className="font-google-sans-flex" data-lang="old_1" style={{}}>Complex BI tools requiring training</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-amber-400" icon="lucide:x" width="16"></iconify-icon>
<span className="font-google-sans-flex" data-lang="old_2" style={{}}>VPN login just to check one number</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-amber-400" icon="lucide:x" width="16"></iconify-icon>
<span className="font-google-sans-flex" data-lang="old_3" style={{}}>Static reports that are outdated instantly</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-amber-400" icon="lucide:x" width="16"></iconify-icon>
<span className="font-google-sans-flex" data-lang="old_4" style={{}}>Need a Data Analyst for every query</span>
</li>
</ul>
</div>

<div className="p-10 bg-cyan-500/5 relative">
<div className="absolute top-6 right-6 text-cyan-400/50">
<iconify-icon icon="lucide:check-circle" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="text-xl mb-6 text-white font-google-sans-flex" data-lang="new_title" style={{}}>The Platolk Way</h3>
<ul className="space-y-4 font-light text-slate-300">
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-cyan-400" icon="lucide:check" width="16"></iconify-icon>
<span className="text-white font-google-sans-flex" data-lang="new_1" style={{}}>Natural language chat interface</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-cyan-400" icon="lucide:check" width="16"></iconify-icon>
<span className="text-white font-google-sans-flex" data-lang="new_2" style={{}}>Accessible anywhere via WhatsApp</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-cyan-400" icon="lucide:check" width="16"></iconify-icon>
<span className="text-white font-google-sans-flex" data-lang="new_3" style={{}}>Real-time data straight from DB</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="flex-shrink-0 text-cyan-400" icon="lucide:check" width="16"></iconify-icon>
<span className="text-white font-google-sans-flex" data-lang="new_4" style={{}}>Zero training required</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="invest">
<div className="max-w-5xl mx-auto">
<div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden text-center border-t border-cyan-500/30">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent to-transparent blur-[2px] via-cyan-400"></div>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium mb-6 text-cyan-300">
<iconify-icon icon="lucide:rocket" width="14"></iconify-icon>
<span className="font-google-sans-flex" data-lang="cta_tag" style={{}}>Seed Funding Open</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 text-white font-google-sans-flex font-semibold" data-lang="cta_title" style={{}}>
                        Be part of the future of <br/>Business Intelligence.
                    </h2>
<p className="text-lg mb-8 max-w-2xl mx-auto text-slate-400 font-google-sans-flex" data-lang="cta_desc" style={{}}>
                        We are currently in private beta and opening our Seed Round for strategic investors. Help us democratize data access for businesses worldwide.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 rounded-full transition-colors bg-white text-slate-900 hover:bg-slate-200 font-google-sans-flex" data-lang="cta_btn1" style={{}}>
                            Contact Investor Relations
                        </button>
<button className="glass-btn px-8 py-3 rounded-full text-white font-google-sans-flex" data-lang="cta_btn2" style={{}}>
                            Request Pitch Deck
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 backdrop-blur-lg border-white/5 bg-slate-900/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br to-green-500 flex items-center justify-center text-xs from-cyan-400 text-white font-google-sans-flex" style={{}}>PL</div>
<span className="text-lg text-white font-google-sans-flex" style={{}}>Platolk</span>
</div>
<p className="text-sm text-slate-500 max-w-xs font-google-sans-flex" data-lang="footer_desc" style={{}}>
                        The AI agent that turns your database into a conversation. Access your metrics instantly via WhatsApp.
                    </p>
</div>
<div className="">
<h4 className="mb-4 text-white font-google-sans-flex" data-lang="footer_prod" style={{}}>Product</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_feat" href="#" style={{}}>Features</a></li>
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_sec" href="#" style={{}}>Security</a></li>
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_int" href="#" style={{}}>Integrations</a></li>
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_change" href="#" style={{}}>Changelog</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-white font-google-sans-flex" data-lang="footer_comp" style={{}}>Company</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_about" href="#" style={{}}>About Us</a></li>
<li><a className="transition-colors hover:text-cyan-400 text-cyan-300 font-google-sans-flex" data-lang="nav_invest" href="#invest" style={{}}>Investors</a></li>
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_cont" href="#" style={{}}>Contact</a></li>
<li><a className="transition-colors hover:text-cyan-400 font-google-sans-flex" data-lang="f_priv" href="#" style={{}}>Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4 border-white/5">
<p className="text-xs text-slate-600 font-google-sans-flex">© 2023 Platolk AI Inc. All rights reserved.</p>
<div className="flex gap-4 text-slate-500">
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
