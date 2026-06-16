import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
  }, []);

  return (
    <>
      
<main className="glass-panel overflow-hidden flex flex-col xl:max-w-[1300px] z-10 xl:border-white/50 border-none xl:border xl:rounded-[2.5rem] md:p-10 xl:p-12 xl:shadow-2xl min-h-screen xl:min-h-[700px] w-full rounded-none p-6 relative shadow-none animate-fade-scale">
<div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
<div className="h-full w-[1px] bg-zinc-950/5"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden md:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden lg:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden xl:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5"></div>
</div>

<header className="flex md:mb-16 z-10 mb-16 relative gap-x-6 gap-y-6 items-center justify-between animate-fade-up">
<a className="flex items-center gap-3 text-zinc-900 group cursor-pointer" href="#">
<div className="flex text-white bg-[#1B2A47] w-8 h-8 rounded-lg items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-base font-medium tracking-tight uppercase leading-none mb-1">PT. PANDI</span>
<span className="text-xs font-normal text-zinc-500 uppercase tracking-widest leading-none">Indonesia Konsultan</span>
</div>
</a>
<nav className="hidden md:flex uppercase text-xs font-medium text-zinc-500 tracking-widest bg-white/50 border-white/60 border rounded-full py-2.5 px-6 shadow-sm backdrop-blur-sm gap-x-8 items-center transition-all hover:shadow-md hover:bg-white/80">
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#company">
                    Company
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>
<a className="flex items-center gap-2 group hover:bg-zinc-50 text-sm font-normal text-zinc-700 tracking-wide bg-white border border-zinc-200 rounded-lg py-2.5 px-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0" href="tel:+6281288089091">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="tracking-wide text-xs font-medium">Contact Us</span>
</a>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full flex-grow relative z-10 pb-8 lg:pb-0">
<div className="lg:col-span-7 flex flex-col pt-4 relative justify-center scroll-mt-32" id="about">
<div className="animate-fade-up delay-100 inline-flex bg-white/80 w-max rounded-full mb-8 p-1.5 shadow-sm backdrop-blur-sm items-center border border-zinc-100 group cursor-default">
<div className="flex -space-x-2 mr-3">
<div className="flex items-center justify-center bg-blue-500 w-6 h-6 rounded-full border-2 border-white">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<span className="text-sm font-normal text-zinc-600 tracking-wide mr-3">
                        Trusted Global <span className="text-zinc-900 font-medium">Partner</span>
</span>
</div>
<h1 className="animate-fade-up delay-200 leading-[1.1] lg:text-[4rem] text-5xl font-medium text-zinc-900 tracking-tight mb-8">
                    PT. Pandi Indonesia
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300 font-normal block tracking-tight">Konsultan</span>
</h1>
<p className="animate-fade-up delay-300 text-base lg:text-lg text-zinc-600 font-normal max-w-lg mb-10 leading-relaxed tracking-wide border-l-2 border-zinc-200 pl-6 hover:border-zinc-400 transition-colors duration-500">
                    PT Pandi Indonesia Konsultan aims to provide professional services in LSP certification management consulting and international trade partnership. The company supports clients in achieving certification standards and facilitates efficient, reliable global trade connections.
                </p>
<div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16">
<a className="hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-300 flex group text-base font-normal text-white bg-zinc-900 rounded-full py-3.5 px-6 shadow-xl gap-3 items-center justify-center min-w-[160px]" href="#services">
<span className="tracking-tight">Our Services</span>
<svg className="group-hover:translate-y-0.5 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="hover:bg-zinc-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex text-base font-normal text-zinc-600 bg-white border border-zinc-200 rounded-full py-3.5 px-6 shadow-sm gap-2 items-center justify-center group" href="https://wa.me/6281288089091" target="_blank">
<span className="tracking-tight">WhatsApp Us</span>
<svg className="group-hover:text-emerald-500 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
</div>
<div className="animate-fade-up delay-500 flex flex-wrap gap-4 md:gap-6 mt-auto items-center">
<div className="flex items-center group cursor-default">
<div className="px-1">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">Expertise</p>
<p className="text-base text-zinc-900 font-normal">LSP Certification</p>
</div>
<div className="curve-separator opacity-60 ml-4 md:ml-8"></div>
</div>
<div className="flex items-center group cursor-default">
<div className="px-1">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">Reach</p>
<p className="text-base text-zinc-900 font-normal">Global Trade</p>
</div>
<div className="curve-separator md:ml-8 opacity-60 ml-4"></div>
</div>
<div className="flex items-center group cursor-default">
<div className="px-1">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">Standards</p>
<p className="text-base text-zinc-900 font-normal">Professional</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative group perspective-1000 animate-fade-scale delay-300">
<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10 transition-all duration-700 ease-out border border-white/60 bg-white group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
<img alt="Global Trade Network" className="transition-transform duration-[3s] ease-in-out group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0 w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A47]/90 via-[#1B2A47]/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>
<div className="flex flex-col p-8 absolute inset-0 justify-between">
<div className="flex items-start justify-end">
<div className="flex gap-2 bg-black/30 backdrop-blur-md rounded-full py-1.5 px-3 items-center border border-white/10 shadow-lg animate-float">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs uppercase font-medium text-white tracking-wide">Bogor, ID</span>
</div>
</div>
<div className="self-start transform transition-transform duration-700 ease-out bg-white/10 w-full max-w-[240px] rounded-xl mt-auto mb-6 p-4 backdrop-blur-md border border-white/20 shadow-lg animate-float delay-700 group-hover:scale-105">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<span className="text-sm text-white font-normal">Certification</span>
</div>
<span className="text-xs text-emerald-300 font-mono tracking-tight">Verified</span>
</div>
<div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000"></div>
</div>
<p className="text-xs text-white/70 mt-2 font-normal">Global standard alignment</p>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="flex flex-col gap-10 z-10 w-full relative animate-fade-up delay-200 scroll-mt-24" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-4">
                        Hire Us For
                    </h2>
<p className="leading-relaxed text-lg font-normal text-zinc-500">
                        We deliver customized, professional solutions tailored to expand your reach and secure your operational standards.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-zinc-900/5 bg-zinc-200 rounded-[2rem] gap-px border border-zinc-200">

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 lg:p-12 flex flex-col justify-between h-full min-h-[350px] overflow-hidden hover:shadow-lg z-10">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-2xl font-medium text-zinc-900 mb-4 tracking-tight">International Trade Partnership</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                            Your trusted partner in global commerce. We facilitate seamless international trade operations, managing strategic partnerships and supply chain logistics to expand your business reach across borders.
                        </p>
</div>
<div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none"></div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 lg:p-12 flex flex-col justify-between h-full min-h-[350px] overflow-hidden hover:shadow-lg z-10">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-zinc-900 mb-4 tracking-tight">Strategic Business Advisory</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                            Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.
                        </p>
</div>
<div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="flex flex-col gap-12 z-10 w-full relative animate-fade-up delay-300 scroll-mt-24" id="company">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-6">About Us</h2>
<p className="text-lg text-zinc-600 font-normal leading-relaxed border-l-2 border-[#1B2A47] pl-6">
                    PT. Pandi Indonesia Konsultan is a premier management consulting firm based in Indonesia, dedicated to bridging the gap between local expertise and global industry standards. We specialize in guiding organizations through complex LSP certification processes and facilitating strategic international trade partnerships. Our team of experts is committed to delivering precision-driven solutions that empower our clients to thrive in an increasingly competitive global market.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 group hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-2 shadow-sm text-zinc-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Our Mission</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                        To provide world-class consulting services that enhance professional competency and streamline global trade, ensuring our clients achieve sustainable growth and international recognition through integrity and excellence.
                    </p>
</div>
<div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 group hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-2 shadow-sm text-zinc-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Our Vision</h3>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                        To be the most trusted strategic partner for businesses seeking to achieve global excellence by integrating professional standards with seamless international connectivity.
                    </p>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="overflow-hidden min-h-[400px] shadow-zinc-900/10 bg-[#141F33] rounded-[2rem] relative shadow-2xl group transition-all duration-500 hover:shadow-zinc-900/20 scroll-mt-24" id="contact">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 h-full relative z-10">
<div className="p-8 md:p-12 flex flex-col justify-center h-full relative z-10">
<h3 className="text-4xl font-medium text-white tracking-tight mb-4">Have a Project on mind?</h3>
<p className="text-lg text-zinc-400 font-normal mb-10 leading-relaxed max-w-md">
                        We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4 group/item">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors">
<svg className="text-zinc-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-sm text-zinc-500 uppercase tracking-wider font-medium mb-1">Address</p>
<p className="text-lg text-white font-normal leading-snug">Bukit Golf, Ruko Center, Point AA4/9 Gn Putri, bogor</p>
</div>
</div>
<div className="flex items-start gap-4 group/item">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors">
<svg className="text-zinc-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="w-full">
<p className="text-sm text-zinc-500 uppercase tracking-wider font-medium mb-1">Contact</p>
<a className="text-white font-medium text-xl hover:text-emerald-400 transition-colors block mb-4" href="tel:+6281288089091">+62 812-8808-9091</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base bg-emerald-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1" href="https://wa.me/6281288089091" target="_blank">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    Click Here to contact us via WhatsApp !
                                </a>
</div>
</div>
</div>
</div>
<div className="bg-[#0F172A] h-full min-h-[300px] relative overflow-hidden group/map border-l border-white/5">
<img className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 group-hover/map:scale-105 group-hover/map:opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-[#141F33]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col items-center shadow-2xl animate-float">
<div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute top-5 right-5"></div>
<span className="text-white font-medium text-xl tracking-tight">Bogor</span>
<span className="text-zinc-400 text-sm mt-1">Indonesia Office</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<footer className="z-10 w-full relative animate-fade-up delay-500">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
<div className="flex flex-col gap-4 lg:pr-6">
<h2 className="text-xl font-medium text-zinc-900 tracking-tight leading-snug">PT. Pandi Indonesia<br/><span className="text-zinc-400 font-normal">Konsultan</span></h2>
<p className="text-base text-zinc-500 leading-relaxed font-normal">
                         Bridging the gap between local expertise and global industry standards for sustainable growth.
                     </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-zinc-900 text-base">Services</h4>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block w-max" href="#services">Trade Partnership</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block w-max" href="#services">Business Advisory</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block w-max" href="#services">LSP Certification</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-zinc-900 text-base">Company</h4>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block w-max" href="#about">About Us</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block w-max" href="#company">Mission &amp; Vision</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block w-max" href="#contact">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-zinc-900 text-base">Contact Information</h4>
<p className="text-base text-zinc-500 font-normal leading-relaxed">Bukit Golf, Ruko Center<br/>Point AA4/9 Gn Putri<br/>Bogor, Indonesia</p>
<a className="text-base text-zinc-900 font-medium hover:underline inline-block w-max mt-1" href="tel:+6281288089091">+62 812-8808-9091</a>
</div>
</div>
<div className="flex flex-col md:flex-row border-zinc-200 border-t pt-8 gap-4 items-center justify-between">
<p className="text-zinc-400 text-sm font-normal">
                    © 2024 PT. Pandi Indonesia Konsultan. All rights reserved.
                </p>
<div className="flex items-center gap-6 text-sm text-zinc-400 font-normal">
<a className="hover:text-zinc-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
