import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-b from-indigo-50/50 via-white to-slate-50">

<div className="absolute left-1/2 top-0 w-[800px] -translate-x-1/2 bg-indigo-100/40 blur-[100px] rounded-full h-[500px]"></div>
</div>

<header className="fixed top-0 z-50 w-full pt-6">
<div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 lg:px-8">

<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-200 bg-white text-indigo-600 shadow-sm">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Angkasa Data</span>
</div>

<nav className="hidden md:flex items-center gap-1 rounded-xl border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur-md">
<a className="rounded-lg bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900 transition-colors" href="#">Home</a>
<a className="rounded-lg px-5 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#layanan">Layanan</a>
<a className="rounded-lg px-5 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#harga">Harga</a>
<a className="rounded-lg px-5 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900" href="#proses">Proses</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer hover:text-slate-900 transition-colors">
<iconify-icon className="text-base" icon="solar:global-linear"></iconify-icon>
<span>IDN</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-300" href="#kontak">
                    Konsultasi
                </a>
<button className="md:hidden text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
<div className="mx-auto max-w-[1200px] px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

<div className="max-w-2xl relative z-10">
<div className="mb-8 inline-flex items-center rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
<iconify-icon className="mr-2 text-base" icon="solar:rocket-linear"></iconify-icon>
                            Empowering SMEs Digital Growth
                        </div>
<h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tight text-slate-900 uppercase leading-[1.05]">
                            Transformasi<br/>Digital,<br/>Tanpa Ribet
                        </h1>
<p className="mt-8 text-xl leading-relaxed text-slate-600 max-w-xl">
                            Membangun sistem cloud, dashboard data, dan otomasi bisnis secara remote dengan aman, percaya diri, dan biaya terjangkau.
                        </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-6 text-base font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow" href="#kontak">
                                Konsultasi Gratis <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900" href="#layanan">
                                Lihat Layanan
                            </a>
</div>
</div>

<div className="relative hidden lg:block z-10 perspective-[1000px]">
<div className="relative mx-auto w-full max-w-[420px] rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-2xl transform-gpu rotate-[-2deg]">

<div className="mb-6 flex items-center justify-between text-slate-500">
<span className="text-base font-medium tracking-tight text-slate-900">Data Sync</span>
<div className="flex gap-3">
<iconify-icon className="text-xl hover:text-indigo-600 cursor-pointer transition-colors" icon="solar:settings-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-indigo-600 cursor-pointer transition-colors" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>

<div className="mb-2 rounded-2xl bg-slate-50 p-4 border border-slate-100">
<div className="mb-3 flex justify-between text-sm text-slate-500 font-medium">
<span>Source</span>
<span>Size: 24.5 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex cursor-pointer items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-slate-700 shadow-sm hover:border-slate-300 transition-colors">
<iconify-icon className="text-indigo-600 text-base" icon="solar:server-linear"></iconify-icon>
<span className="text-sm font-semibold">Local DB</span>
<iconify-icon className="text-slate-400 text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<span className="text-3xl font-medium tracking-tight text-slate-900">2.5M</span>
</div>
<div className="mt-2 text-right text-sm text-slate-500">= 2,500,000 Rows</div>
</div>

<div className="relative z-10 -my-3 flex justify-center">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-600 shadow-sm">
<iconify-icon className="text-lg" icon="solar:sort-vertical-linear"></iconify-icon>
</div>
</div>

<div className="mb-6 mt-2 rounded-2xl bg-slate-50 p-4 border border-slate-100">
<div className="mb-3 flex justify-between text-sm text-slate-500 font-medium">
<span>Target</span>
<span className="flex items-center gap-1 text-emerald-600"><iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> Optimal</span>
</div>
<div className="flex items-center justify-between">
<div className="flex cursor-pointer items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-slate-700 shadow-sm hover:border-slate-300 transition-colors">
<iconify-icon className="text-indigo-600 text-base" icon="solar:cloud-check-linear"></iconify-icon>
<span className="text-sm font-semibold">Cloud DWH</span>
<iconify-icon className="text-slate-400 text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<span className="text-3xl font-medium tracking-tight text-slate-400">...</span>
</div>
<div className="mt-2 text-right text-sm text-slate-500">Latency: 12ms</div>
</div>

<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:restart-circle-linear"></iconify-icon> Sync Data
                            </button>
</div>
</div>
</div>

<div className="mt-32 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-10 relative">
<div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md cursor-pointer">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Data-Driven Decision</h3>
<p className="mt-0.5 text-xs text-slate-500 line-clamp-1">Keputusan bisnis lebih akurat.</p>
</div>
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md cursor-pointer">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Local Support</h3>
<p className="mt-0.5 text-xs text-slate-500 line-clamp-1">Respons cepat &amp; tanpa hambatan.</p>
</div>
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md cursor-pointer">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Affordable Analytics</h3>
<p className="mt-0.5 text-xs text-slate-500 line-clamp-1">Teknologi enterprise untuk UMKM.</p>
</div>
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md cursor-pointer">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
<iconify-icon className="text-2xl" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">End-to-End Solutions</h3>
<p className="mt-0.5 text-xs text-slate-500 line-clamp-1">Dari setup hingga dashboard.</p>
</div>
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="layanan">
<div className="mx-auto max-w-[1200px] px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-20">
<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">Layanan Kami</h2>
<p className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Solusi Digital Terpadu</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

<div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div>
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
<iconify-icon className="text-3xl" icon="solar:server-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">Data Services</h3>
<p className="text-base text-slate-600 mb-8 leading-relaxed">Pengelolaan database, data warehousing, dan pembuatan dashboard analitik interaktif untuk memonitor KPI bisnis Anda secara real-time.</p>
</div>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="#">
                            Pelajari Lebih Lanjut <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div>
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
<iconify-icon className="text-3xl" icon="solar:cloud-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">Cloud Services</h3>
<p className="text-base text-slate-600 mb-8 leading-relaxed">Migrasi dan pengelolaan infrastruktur server cloud (AWS, Google Cloud) yang aman, skalabel, dan hemat biaya untuk operasional harian.</p>
</div>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="#">
                            Pelajari Lebih Lanjut <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div>
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
<iconify-icon className="text-3xl" icon="solar:laptop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">Remote IT Management</h3>
<p className="text-base text-slate-600 mb-8 leading-relaxed">Dukungan teknis jarak jauh untuk memastikan sistem perusahaan Anda berjalan lancar 24/7 tanpa perlu merekrut tim in-house.</p>
</div>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="#">
                            Pelajari Lebih Lanjut <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div>
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
<iconify-icon className="text-3xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">Automation</h3>
<p className="text-base text-slate-600 mb-8 leading-relaxed">Otomatisasi alur kerja dan proses bisnis berulang menggunakan tools modern untuk meningkatkan efisiensi tim secara signifikan.</p>
</div>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors" href="#">
                            Pelajari Lebih Lanjut <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-white border-y border-slate-200" id="harga">
<div className="mx-auto max-w-[1200px] px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-20">
<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">Harga Transparan</h2>
<p className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Investasi Sesuai Kebutuhan</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 items-start">

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Project Based</h3>
<p className="mt-4 text-sm text-slate-500 min-h-[40px]">Implementasi sistem baru atau perbaikan spesifik.</p>
<div className="mt-8 flex items-baseline gap-x-2">
<span className="text-sm font-medium text-slate-500">Mulai</span>
<span className="text-4xl font-semibold tracking-tight text-slate-900">Rp 3Jt</span>
</div>
<p className="mt-2 text-xs text-slate-500 border-b border-slate-100 pb-8">hingga Rp 50.000.000</p>
<ul className="mt-8 space-y-4 text-sm text-slate-700" role="list">
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Scope kerja terdefinisi jelas
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Timeline implementasi pasti
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Handover &amp; dokumentasi
                            </li>
</ul>
<a className="mt-10 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50" href="#kontak">Hubungi Kami</a>
</div>

<div className="relative rounded-3xl border border-indigo-200 bg-white p-10 shadow-xl shadow-indigo-100/50 ring-1 ring-indigo-600/5 transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white tracking-wide shadow-sm">POPULAR</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Retainer (IT Support)</h3>
<p className="mt-4 text-sm text-slate-500 min-h-[40px]">Tim IT internal dengan biaya yang jauh lebih efisien.</p>
<div className="mt-8 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Rp 2Jt</span>
<span className="text-sm font-medium text-slate-500">/bln</span>
</div>
<p className="mt-2 text-xs text-slate-500 border-b border-slate-100 pb-8">hingga Rp 5.000.000 / bln</p>
<ul className="mt-8 space-y-4 text-sm text-slate-700" role="list">
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Maintenance cloud &amp; server
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                SLA Response time terjamin
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Update dashboard &amp; laporan
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Konsultasi rutin bulanan
                            </li>
</ul>
<a className="mt-10 block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700" href="#kontak">Mulai Berlangganan</a>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Consulting &amp; Audit</h3>
<p className="mt-4 text-sm text-slate-500 min-h-[40px]">Sesi strategis memecahkan masalah IT spesifik.</p>
<div className="mt-8 flex items-baseline gap-x-2">
<span className="text-sm font-medium text-slate-500">Mulai</span>
<span className="text-4xl font-semibold tracking-tight text-slate-900">Rp 5Jt</span>
<span className="text-sm font-medium text-slate-500">/sesi</span>
</div>
<p className="mt-2 text-xs text-slate-500 border-b border-slate-100 pb-8">hingga Rp 15.000.000</p>
<ul className="mt-8 space-y-4 text-sm text-slate-700" role="list">
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Audit keamanan &amp; performa
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Cetak biru arsitektur IT
                            </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-indigo-600 text-lg flex-none" icon="solar:check-circle-linear"></iconify-icon>
                                Rekomendasi tools efisiensi
                            </li>
</ul>
<a className="mt-10 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50" href="#kontak">Jadwalkan Sesi</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="proses">
<div className="mx-auto max-w-[1200px] px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-20">
<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">Cara Kerja</h2>
<p className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Proses Simple, Hasil Maksimal</p>
</div>
<div className="relative">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative text-center md:text-left rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:phone-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">1. Konsultasi</h3>
<p className="text-sm text-slate-600">Diskusi awal via Google Meet memahami model bisnis dan kendala Anda.</p>
</div>

<div className="relative text-center md:text-left rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">2. Analisis</h3>
<p className="text-sm text-slate-600">Merancang solusi teknis dan memberikan proposal biaya yang transparan.</p>
</div>

<div className="relative text-center md:text-left rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">3. Implementasi</h3>
<p className="text-sm text-slate-600">Pengerjaan remote dengan update progres berkala via dashboard.</p>
</div>

<div className="relative text-center md:text-left rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:pulse-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">4. Support</h3>
<p className="text-sm text-slate-600">Dukungan berkelanjutan memastikan sistem berjalan optimal 24/7.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-900 px-6 py-20 text-center shadow-2xl sm:px-16">

<div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/40 blur-[120px]"></div>
<h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
                        Siap Membawa Bisnis Anda<br/>Naik Level?
                    </h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100/80">
                        Jadwalkan sesi konsultasi gratis sekarang. Bahas bagaimana data dan teknologi cloud dapat meningkatkan efisiensi operasional.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-white px-8 text-base font-semibold text-indigo-900 transition-colors hover:bg-slate-50 shadow-sm" href="#kontak">
                            Booking Konsultasi
                        </a>
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 text-base font-semibold text-white transition-colors hover:bg-white/10" href="#layanan">
                            Jelajahi Solusi
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white relative z-10 mt-10">
<div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-2 text-indigo-600 mb-4 md:mb-0">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
<span className="text-sm tracking-tight font-semibold text-slate-900">Angkasa Data</span>
</div>
<div className="flex space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Twitter</a>
</div>
<p className="mt-8 text-center text-xs text-slate-400 md:order-1 md:mt-0">
                © 2023 Angkasa Data Indonesia. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
