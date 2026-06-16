import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
nunito: ['Nunito', 'sans-serif'],
},
colors: {
cream: {
50: '#FDFBF9',
100: '#F7F5F2',
200: '#EAE5DC',
},
sky: {
100: '#Dbeafe', // fallback
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<img alt="Sky Background" className="absolute inset-0 w-full h-full object-cover opacity- mix-blend-multiply" src="https://i.ibb.co/Z5Yvzd8/upscale-the-image-such-that-the-clouds-have-detail.png"/>
</div>

<div className="z-10 flex flex-col min-h-screen relative">

<nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto animate-fade-in">
<div className="flex items-center">
<img alt="SalesME Logo" className="origin-left w-auto h-24 object-contain scale-125" src="https://i.ibb.co/4Zf9C2Pm/ed6edd84-97a4-4719-a9fd-5ebf5df9390f.png"/>
</div>
<div className="hidden text-[15px] md:flex font-medium text-slate-50 gap-x-8 gap-y-8 items-center">
<a className="hover:text-black transition-colors" href="#">Features</a>
<a className="hover:text-black transition-colors" href="#">Pricing</a>
<a className="hover:text-black transition-colors" href="#">Blog</a>
<a className="hover:text-black transition-colors" href="#">Contact Us</a>
</div>
<div className="">
<button className="text-[15px] hover:bg-black transition-all hover:shadow-xl hover:-translate-y-0.5 font-medium text-white bg-[#1A1A1A] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg">Try SalesME</button>
</div>
</nav>

<main className="flex-grow flex flex-col md:px-6 w-full max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-20 pl-4 items-center">

<div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>
<h1 className="leading-[1] md:text-[80px] text-6xl font-semibold text-slate-50 tracking-tight font-nunito">Sky is the limit</h1><h1 className="leading-[1] md:text-[80px] text-6xl font-semibold text-slate-50 tracking-tight font-nunito mb-8">SalesME</h1>
<p className="md:text-[19px] leading-relaxed text-lg font-medium text-slate-950 font-sans max-w-2xl mr-auto mb-10 ml-auto">
  One tool for managing leads, objections, and deal flow in one single place. From first touch to final close, grow like a pro.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="text-[17px] hover:bg-black transition-all hover:shadow-xl hover:-translate-y-0.5 sm:w-auto font-medium text-white bg-[#1A1A1A] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg">Try SalesME </button>
<button className="bg-white/40 backdrop-blur-md border border-white/50 text-[#1A1A1A] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-white/60 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                        See features
                    </button>
</div>
</div>

<div className="overflow-hidden animate-slide-up bg-[#FDFBF9] w-full max-w-[1300px] border-white/60 border rounded-t-[32px] relative shadow-2xl" style={{animationDelay: '0.3s', boxShadow: '0 50px 100px -20px rgba(50, 50, 93, 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.1)'}}>
<div className="relative w-full aspect-[16/10] md:aspect-auto">
<img alt="SalesME Real App" className="w-full h-auto block object-cover rounded-t-[31px]" src="https://i.ibb.co/nqFMRdRQ/Screenshot-2026-03-16-at-00-48-56.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none rounded-t-[31px]"></div>
</div>
</div>
</main><section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
<h2 className="md:text-5xl text-3xl font-semibold text-slate-50 tracking-tight font-nunito mb-4">Everything you need in
  one
  place</h2>
<span className="uppercase block xl:text-slate-950 text-xs font-bold tracking-widest font-sans bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/100 via-white/50 to-white/100 mb-4">One Platform</span>
<h2 className="md:text-5xl text-3xl font-semibold text-slate-950 tracking-tight font-nunito mb-6">Everything you need in
      one
      place</h2>
<p className="text-lg font-medium text-slate-950 font-sans">Stop switching between different apps. Centralize your
      entire
      workflow and focus on the work that matters.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50 pointer-events-none">
</div>
<div className="w-14 h-14 bg-[#F6F4F0] rounded-2xl flex items-center justify-center mb-6 text-[#FF7E05] shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] font-nunito mb-3">Objection Handling</h3>
<p className="text-[15px] leading-relaxed text-slate-600 font-sans">Navigate tough conversations with AI-powered objection trees. Turn every "no" into a closing opportunity in real-time.</p>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50 pointer-events-none">
</div>
<div className="w-14 h-14 bg-[#F6F4F0] rounded-2xl flex items-center justify-center mb-6 text-[#FF7E05] shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white">
<svg className="lucide lucide-trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
<polyline points="17 6 23 6 23 12"></polyline>
</svg>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] font-nunito mb-3">Deal Management</h3>
<p className="text-[15px] leading-relaxed text-slate-600 font-sans">Track your pipeline with zero friction. Monitor lead progression and health scores from first touch to final signature.</p>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50 pointer-events-none">
</div>
<div className="w-14 h-14 bg-[#F6F4F0] rounded-2xl flex items-center justify-center mb-6 text-[#FF7E05] shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] font-nunito mb-3">Live AI Coaching</h3>
<p className="text-[15px] leading-relaxed text-slate-600 font-sans">Get instant feedback during live calls. Analyze sentiment, talk-to-listen ratios, and script adherence as it happens.</p>
</div>
</div>
</section>
</div><section className="md:px-12 w-full max-w-7xl z-10 mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">

<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 gap-x-12 gap-y-12 items-center">

<div className="w-full lg:w-[55%] relative group">

<div className="absolute inset-0 bg-gradient-to-br from-[#9AC1EB] via-[#C5DFF7] to-[#EFE6D8] rounded-[40px] transform rotate-1 transition-transform duration-700 group-hover:rotate-0"></div>

<div className="md:p-12 transition-transform duration-500 hover:scale-[1.01] bg-gradient-to-br from-[#FF7E05] via-[#FFB347] to-[#FDFBF9] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_30px_60px_-15px_rgba(230,126,34,0.3)]">
<div className="overflow-hidden bg-white max-w-4xl border-white/60 border rounded-2xl mr-auto ml-auto shadow-xl">
<img alt="SalesME Dashboard Preview" className="block w-full h-auto" src="https://i.ibb.co/n2YfghS/Screenshot-2026-03-16-at-06-59-18.png"/>
</div>
</div>
</div>

<div className="lg:w-[45%] w-full">
<span className="uppercase block text-xs font-bold text-slate-50 tracking-widest font-sans mb-4">AI Performance Coach</span>
<h2 className="lg:text-[46px] leading-[1.15] text-4xl font-semibold text-[#1A1A1A] tracking-tight font-nunito mb-6">Your Live Sales Coach</h2>
<p className="leading-relaxed xl:bg-clip-text xl:text-transparent text-lg font-medium font-sans bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/50 via-white/100 to-white/50 mb-10">Stop losing deals to tough questions. SalesME’s AI listens to your live calls, suggests the perfect rebuttal for every objection, and analyzes prospect sentiment in the moment. It’s like having a world-class sales manager whispering in your ear.</p>
<button className="text-[15px] hover:bg-black transition-all hover:shadow-xl hover:-translate-y-0.5 font-semibold text-white bg-[#1A1A1A] rounded-full mb-12 pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg">Start Closing Better</button>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg aria-hidden="true" className="lucide lucide-smile-plus w-[20px] h-[20px] text-orange-600" data-icon-replaced="true" data-icon-set="lucide" data-lucide="smile-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
<span className="text-sm font-semibold text-slate-700">Sentiment AI</span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-semibold text-slate-700">Objection Trees</span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<path d="M8 7h8"></path>
<path d="M8 11h8"></path>
</svg>
<span className="text-sm font-semibold text-slate-700">Live Feedback</span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 9l-5 5-2-2-4 4"></path>
</svg>
<span className="text-sm font-semibold text-slate-700">Talk Ratio</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

<div className="lg:w-[45%] w-full">
<span className="uppercase block text-xs font-bold text-slate-50 tracking-widest font-sans mb-4">Scripts &amp; Objections</span>
<h2 className="lg:text-[46px] leading-[1.15] text-4xl font-semibold text-[#1A1A1A] tracking-tight font-nunito mb-6">Master the conversation with your data</h2>
<p className="text-lg font-medium mb-10 leading-relaxed font-sans bg-[conic-gradient(from_195deg,var(--tw-gradient-stops))] from-white via-white/50 to-white xl:bg-clip-text xl:text-transparent">
        Access scripts and responses dynamically optimized by analyzing millions of real B2B sales conversations. Surface exactly what the top 1% of closers say to turn pushback into progress.
    </p>
<button className="text-[15px] hover:bg-black transition-all hover:shadow-xl hover:-translate-y-0.5 font-semibold text-white bg-[#1A1A1A] rounded-full mb-12 pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg">Try SalesME</button>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="1" y2="23"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-sm font-semibold text-slate-700">Pricing Mastery</span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<span className="text-sm font-semibold text-slate-700">Beat Competition</span>
</div>
<div className="flex gap-3 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default bg-white/50 border-slate-100 border rounded-2xl pt-4 pr-6 pb-4 pl-6 gap-x-3 gap-y-3 items-center">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="text-sm font-semibold text-slate-700">Eliminate Stalls</span>
</div>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all cursor-default">
<svg className="text-[#FF7E05]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-sm font-semibold text-slate-700">Handle Skepticism</span>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] relative group">

<div className="transition-transform duration-700 group-hover:rotate-0 absolute top-0 right-0 bottom-0 left-0 -rotate-1">
</div>

<div className="md:p-12 transition-transform duration-500 hover:scale-[1.01] bg-gradient-to-br from-[#FF7E05] via-[#FFB347] to-[#FDFBF9] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_30px_60px_-15px_rgba(230,126,34,0.3)]">
<div className="overflow-hidden bg-white border-white/60 border rounded-2xl shadow-xl mx-auto max-w-4xl">
<img alt="SalesME Dashboard Preview" className="block w-full h-auto" src="https://i.ibb.co/M59xW5v6/Screenshot-2026-03-16-at-00-55-57.png"/>
</div>
</div>
</div>
</div>
</section><style className="">
    @keyframes scroll-row-1 {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 1rem)); }
    }
    @keyframes scroll-row-2 {
        0% { transform: translateX(calc(-50% - 1rem)); }
        100% { transform: translateX(0); }
    }
    .animate-infinite-scroll-1 {
        animation: scroll-row-1 40s linear infinite;
    }
    .animate-infinite-scroll-2 {
        animation: scroll-row-2 40s linear infinite;
    }
    .group:hover .animate-infinite-scroll-1,
    .group:hover .animate-infinite-scroll-2 {
        animation-play-state: paused;
    }
</style><section className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">

<div className="animate-fade-in text-center max-w-3xl mr-auto mb-20 ml-auto">
<span className="uppercase block text-xs font-bold text-slate-100 tracking-widest font-sans mb-4">Features</span>
<h2 className="md:text-[56px] leading-[1.1] text-4xl font-semibold text-[#1A1A1A] tracking-tight font-nunito mb-6">Built for sales teams, tuned for momentum</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="md:p-12 flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group hover:border-slate-200/50 bg-[#F2EBE5] border-transparent border rounded-[32px] p-8 justify-between">
<h3 className="md:text-[28px] leading-tight text-2xl font-semibold text-[#1A1A1A] font-nunito max-w-md mb-6">
    Smart, flexible, and built around your business workflow
  </h3>
<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100/50 mb-10 relative transition-transform duration-500 group-hover:scale-[1.02]">
<img alt="SalesME Workflow" className="block bg-center w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d6dbdcf-d962-4238-becc-dbe3bc8f2724_1600w.webp"/>
</div>
<p className="text-[17px] leading-relaxed text-slate-600 font-sans">
    Customize SalesME to fit your sales cycle. Adjust your pipeline, toggle smart coaching alerts, and shape the interface so every lead and deal runs through a system that works the way your high-performing team does.
  </p>
</div>

<div className="md:p-12 flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group hover:border-slate-200/50 overflow-hidden bg-[#F2EBE5] border-transparent border rounded-[32px] p-8 relative justify-between">
<h3 className="md:text-[28px] leading-tight text-2xl font-semibold text-[#1A1A1A] font-nunito max-w-md z-10 mb-10 relative">
        Integrates seamlessly with the tools you already use
    </h3>
<div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100/50 mb-10 relative transition-transform duration-500 group-hover:scale-[1.02] z-0">
<img alt="SalesME Integrations" className="block h- bg-center w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01f9c466-8cac-44ac-a6e6-c99b6f91bf3f_1600w.webp"/>
</div>
<p className="text-[17px] leading-relaxed z-10 text-slate-600 font-sans relative">
        Plug SalesME into your existing stack in minutes. Connect your CRM, communication tools, and dialers to sync data, trigger AI-driven workflows, and keep your sales operations running without constant context‑switching.
    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:p-10 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-[#F2EBE5] rounded-[32px] pt-8 pr-8 pb-8 pl-8 gap-x-4 gap-y-4 items-start">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg fill="none" height="22" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
</div>
<h4 className="text-base font-bold text-slate-900 font-nunito">Drive Performance via Leaderboards</h4>
<p className="text-[15px] leading-relaxed text-slate-600">Track your sales cycles, analyze win rates, and manage
        performance metrics in one intelligent dashboard. SalesME automates the tracking of total calls and conversion
        rates so your team can stay focused on the leaderboard and the closing.</p>
</div>

<div className="md:p-10 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-[#F2EBE5] rounded-[32px] pt-8 pr-8 pb-8 pl-8 gap-x-4 gap-y-4 items-start">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg fill="none" height="22" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
</div>
<h4 className="text-lg font-bold text-slate-900 font-nunito">Synced with your workflow</h4>
<p className="text-[15px] leading-relaxed text-slate-600">Connect your Google or Outlook calendar to automate meeting prep and follow-ups. SalesME monitors your upcoming demos in real-time, surfacing the right scripts and objection handlers the moment your call starts.</p>
</div>

<div className="md:p-10 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-[#F2EBE5] rounded-[32px] pt-8 pr-8 pb-8 pl-8 gap-x-4 gap-y-4 items-start">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg className="" fill="none" height="22" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
</div>
<h4 className="text-lg font-bold text-slate-900 font-nunito">Delegate with Precision</h4>
<p className="text-[15px] leading-relaxed text-slate-600">Don't let follow-ups fall through the cracks. Instantly assign tasks, research requests, or contract drafts to your team members directly from the deal view. Keep your momentum high while SalesME tracks completion status in real-time.</p>
</div>
</div>
</section><section className="z-10 bg-[#F6F4F0] w-full border-white/40 border-t pt-24 pb-24 relative">
<style>
        @keyframes scroll-testimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-testimonials { animation: scroll-testimonials 80s linear infinite; }
        .animate-scroll-testimonials:hover { animation-play-state: paused; }
    </style>
<div className="z-10 text-center max-w-4xl mr-auto mb-20 ml-auto pr-6 pl-6 relative">
<h2 className="leading-[1.15] md:text-5xl text-3xl font-semibold text-[#1A1A1A] tracking-tight font-nunito mb-10 drop-shadow-sm">
            "SalesME has completely transformed how our team closes deals. It’s the sales operating system we’ve been waiting for."
        </h2>
<div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
<div className="p-1 rounded-full bg-white border border-slate-200 shadow-sm">
<img alt="Sarah Jenkins" className="w-16 h-16 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="text-center">
<div className="text-lg font-bold text-[#1A1A1A] font-nunito">Sarah Jenkins</div>
<div className="text-sm font-medium text-slate-500 font-sans">Head of Sales, TechCorp</div>
</div>
</div>
</div>
<div className="relative w-full overflow-hidden pb-10">
<div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#F6F4F0] to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#F6F4F0] to-transparent z-20 pointer-events-none"></div>
<div className="flex animate-scroll-testimonials w-max gap-8 px-4">
<div className="flex gap-8">
<div className="w-[340px] md:w-[420px] bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<p className="text-[17px] leading-relaxed text-slate-600 font-sans mb-8">"As a high-volume sales team, we needed a tool that matched our speed. From lead qualification to handling objections in real-time, SalesME is clean and incredibly powerful."</p>
<div className="flex items-center gap-3">
<img alt="Sergio Walker" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<div className="text-sm font-bold text-slate-900 font-nunito">Sergio Walker</div>
<div className="text-xs font-medium text-slate-500">Sales Director</div>
</div>
</div>
</div>
<div className="w-[340px] md:w-[420px] bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<p className="text-[17px] leading-relaxed text-slate-600 font-sans mb-8">"We used to struggle with inconsistent scripts. Now our training, objection trees, and live metrics live in one system. It's everything a sales leader needs to stay ahead."</p>
<div className="flex items-center gap-3">
<img alt="Jane Jay Jay" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="">
<div className="text-sm font-bold text-slate-900 font-nunito">Jane Jay Jay</div>
<div className="text-xs font-medium text-slate-500">VP of Revenue, Growthly</div>
</div>
</div>
</div>
<div className="w-[340px] md:w-[420px] bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<p className="text-[17px] leading-relaxed text-slate-600 font-sans mb-8">"The AI coaching feedback is a game changer. My reps can see exactly where they lost a lead and adjust their pitch instantly, which has drastically boosted our conversion rates."</p>
<div className="flex items-center gap-3">
<img alt="Marcus Reid" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="">
<div className="text-sm font-bold text-slate-900 font-nunito">Marcus Reid</div>
<div className="text-xs font-medium text-slate-500">B2B Sales Coach</div>
</div>
</div>
</div>
<div className="w-[340px] md:w-[420px] bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<p className="text-[17px] leading-relaxed text-slate-600 font-sans mb-8">"Switching to SalesME gave us clarity on our pipeline health that we never had before. It's intuitive, data-driven, and actually enjoyable for the reps to use every day."</p>
<div className="flex items-center gap-3">
<img alt="Elena Fisher" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="">
<div className="text-sm font-bold text-slate-900 font-nunito">Elena Fisher</div>
<div className="text-xs font-medium text-slate-500">Founder, Scale Ops</div>
</div>
</div>
</div>
</div>
<div className="flex gap-8">
<div className="w-[340px] md:w-[420px] bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
<p className="text-[17px] leading-relaxed text-slate-600 font-sans mb-8">"As a high-volume sales team, we needed a tool that matched our speed. From lead qualification to handling objections in real-time, SalesME is clean and incredibly powerful."</p>
<div className="flex items-center gap-3">
<img alt="Sergio Walker" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div><div className="text-sm font-bold text-slate-900 font-nunito">Sergio Walker</div><div className="text-xs font-medium text-slate-500">Sales Director</div></div>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-[#F6F4F0] w-full z-10 border-white/40 border-t pt-32 pb-0 relative">

<style>
        .perspective-container {
            perspective: 2000px;
        }
        
        @keyframes float-y {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .animate-float-1 { animation: float-y 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-y 7s ease-in-out infinite -2s; }
        .animate-float-3 { animation: float-y 8s ease-in-out infinite -1s; }
        
        .card-3d {
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease;
            transform-style: preserve-3d;
        }
        
        .card-wrapper:hover .card-3d {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.1) !important;
            z-index: 50;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
    </style>

<div className="max-w-7xl mx-auto px-4 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16 relative z-20">
<span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4 block font-sans">Consolidate</span>
<h2 className="md:text-5xl leading-[1.15] text-3xl font-semibold text-[#1A1A1A] tracking-tight font-nunito mb-6">Your gateway to unified workflow</h2>
</div><style>
    @keyframes wheel-rotate {
        0% { transform: translateY(0); }
        100% { transform: translateY(calc(-50% - 2rem)); }
    }
    .animate-wheel {
        animation: wheel-rotate 15s linear infinite;
    }
    /* Pause on hover for accessibility/focus */
    .animate-wheel:hover {
        animation-play-state: paused;
    }
</style><div className="flex overflow-hidden select-none w-full h-[460px] max-w-5xl mr-auto mb-24 ml-auto relative items-center justify-center">
<div className="absolute left-[15%] md:left-[25%] z-20 flex items-center animate-fade-in hidden md:flex">
</div>
<div className="absolute top-0 left-0 right-0 h-[38%] bg-gradient-to-b from-[#F6F4F0] via-[#F6F4F0]/90 to-transparent z-10 backdrop-blur-[2px] pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 right-0 h-[38%] bg-gradient-to-t from-[#F6F4F0] via-[#F6F4F0]/90 to-transparent z-10 backdrop-blur-[2px] pointer-events-none">
</div>
<div className="flex flex-col items-center gap-8 animate-wheel will-change-transform">
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">
            Salesforce</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-40">HubSpot</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight">Slack</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-40">Zoom</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">Aircall
        </div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">
            Pipedrive</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">
            Gong</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">
            Salesforce</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-40">HubSpot</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight">Slack</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-40">Zoom</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">Aircall
        </div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">
            Pipedrive</div>
<div className="text-6xl md:text-8xl font-bold font-nunito text-[#1A1A1A] tracking-tight opacity-20 blur-[1px]">
            Gong</div>
</div>
</div>


<p className="md:hidden text-center text-sm text-slate-400 mt-8">
            Replace your entire stack with one tool.
        </p>
</div>
</section><section className="z-10 bg-[#F6F4F0] w-full border-white/40 border-t pt-24 pb-32 relative">

<style>
        @keyframes scroll-logos {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .animate-scroll-logos {
            animation: scroll-logos 40s linear infinite;
        }
    </style>

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
<span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5 block font-sans">Pricing</span>
<h2 className="md:text-[56px] leading-[1.1] text-4xl font-semibold text-[#1A1A1A] tracking-tight font-nunito mb-6">
                Get started today</h2>
<p className="text-[17px] leading-relaxed text-slate-600 font-medium font-sans max-w-xl mx-auto">
                Start for free, upgrade when you need more power. No hidden fees, cancel anytime.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-32">

<div className="lg:p-10 flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white h-full border-slate-100 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 font-nunito mb-2">SalesME Starter</h3>
<div className="md:text-5xl text-4xl font-bold text-[#1A1A1A] tracking-tight font-nunito mb-4">
  $19<span className="text-xl text-slate-500 font-medium ml-1">/mo</span></div>
<p className="text-sm text-slate-500 font-medium mb-10 leading-relaxed">For individuals testing the waters. Basic tools to track your hustle manually.</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-green-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Manual Lead Tracking
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-green-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Static Objection Playbook
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-400 line-through decoration-slate-300">
<svg className="text-slate-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
            Live AI Call Coaching
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-400 line-through decoration-slate-300">
<svg className="text-slate-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
            Real-time Sentiment Analysis
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-400 line-through decoration-slate-300">
<svg className="text-slate-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
            Dynamic Objection Trees
        </li>
</ul>
<button className="w-full py-4 rounded-full bg-slate-100 text-slate-900 font-semibold text-[15px] hover:bg-slate-200 transition-colors">
        Start for free
    </button>
</div>

<div className="lg:p-10 border-[1.5px] flex flex-col md:-mt-6 md:mb-6 z-10 bg-gradient-to-b from-[#FF7E05]/10 to-white h-full border-[#FF7E05] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7E05] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
        Most Popular
    </div>
<div className="absolute top-8 right-8 md:static md:mb-8 md:flex md:justify-center">
<div className="bg-white/60 backdrop-blur-sm p-1 rounded-full inline-flex text-xs font-bold border border-orange-100 shadow-sm">
<button className="text-slate-900 bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm">Annually</button>
<button className="hover:text-slate-900 transition-colors text-slate-500 pt-1.5 pr-4 pb-1.5 pl-4">Monthly</button>
</div>
</div>
<div className="flex items-center gap-3 mb-2 mt-8 md:mt-0">
<h3 className="text-lg font-semibold text-slate-900 font-nunito">SalesME Pro</h3>
<span className="bg-orange-100 text-[#FF7E05] text-[10px] font-bold px-2.5 py-1 rounded-full border border-orange-200 uppercase tracking-wide">Save 20%</span>
</div>
<div className="md:text-5xl text-4xl font-bold text-[#1A1A1A] tracking-tight font-nunito mb-4">
  $59<span className="text-xl text-slate-500 font-medium ml-1">/mo</span></div>
<p className="leading-relaxed text-sm font-medium text-slate-700 mb-10">For high-performance teams and revenue leaders scaling their close rate.</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-800">
<svg className="shrink-0" fill="none" height="20" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Everything in Starter
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-800">
<svg className="shrink-0" fill="none" height="20" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Unlimited Live AI Call Coaching
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-800">
<svg className="shrink-0" fill="none" height="20" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Dynamic Objection Trees
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-800">
<svg className="shrink-0" fill="none" height="20" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Real-time Sentiment Analysis
        </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-800">
<svg className="shrink-0" fill="none" height="20" stroke="#FF7E05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
            Full Team Leaderboards
        </li>
</ul>
<button className="w-full py-4 rounded-full bg-[#FF7E05] text-white font-semibold text-[15px] hover:bg-[#e67204] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
        Go Pro Now
    </button>
</div>

<div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
<h3 className="text-lg font-semibold text-slate-900 font-nunito mb-2">OnePro Enterprise</h3>
<div className="text-4xl md:text-5xl font-bold font-nunito text-[#1A1A1A] tracking-tight mb-4">Flexible
                </div>
<p className="text-sm text-slate-500 font-medium mb-10 leading-relaxed">For agencies with custom needs and
                    larger teams.</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-slate-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Everything in Premium
                    </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-slate-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Custom data import
                    </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-slate-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Dedicated account manager
                    </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-slate-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        API &amp; Webhooks
                    </li>
<li className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
<svg className="text-slate-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Advanced permissions
                    </li>
</ul>
<button className="w-full py-4 rounded-full bg-slate-100 text-slate-900 font-semibold text-[15px] hover:bg-slate-200 transition-colors">
                    Contact sales
                </button>
</div>
</div>

<div className="text-center">
<p className="text-sm text-slate-500 font-bold mb-10 tracking-wide">Trusted by 7,000+ top startups, agencies and
                studios</p>
<div className="relative w-full overflow-hidden">

<div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F6F4F0] to-transparent z-10 pointer-events-none">
</div>
<div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F6F4F0] to-transparent z-10 pointer-events-none">
</div>

<div className="flex animate-scroll-logos w-max items-center">

<div className="flex items-center gap-12 md:gap-20 px-6 md:px-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22h20L12 2zm0 4.8l6.4 12.8H5.6L12 6.8z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">NORTH</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="9"></circle>
<path d="M12 8v8M8 12h8"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">vertex</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10h-5c0-2.8-2.2-5-5-5s-5 2.2-5 5H2z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">echo</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">ORBIT</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="10" x="2" y="2"></rect>
<rect height="10" opacity="0.5" rx="2" width="10" x="12" y="12"></rect>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">Layers</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">Bolt</span>
</div>
</div>

<div className="flex items-center gap-12 md:gap-20 px-6 md:px-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22h20L12 2zm0 4.8l6.4 12.8H5.6L12 6.8z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">NORTH</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 8v8M8 12h8"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">vertex</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10h-5c0-2.8-2.2-5-5-5s-5 2.2-5 5H2z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">echo</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">ORBIT</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="10" x="2" y="2"></rect>
<rect height="10" opacity="0.5" rx="2" width="10" x="12" y="12"></rect>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">Layers</span>
</div>

<div className="flex items-center gap-2">
<svg className="text-slate-800" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
<span className="text-xl font-bold font-nunito text-slate-800 tracking-tight">Bolt</span>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="z-10 w-full max-w-7xl mr-auto ml-auto pt-36 pr-6 pb-12 pl-6 relative">
<div className="md:p-12 lg:p-16 bg-orange-500 border-white/20 border rounded-[40px] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 gap-x-12 gap-y-12 justify-between">

<div className="max-w-sm">
<img alt="SalesME Logo" className="origin-left w-auto h-24 object-contain -translate-y-6 scale-125" src="https://i.ibb.co/4Zf9C2Pm/ed6edd84-97a4-4719-a9fd-5ebf5df9390f.png"/>
<p className="text-[15px] leading-relaxed font-medium text-slate-950 font-sans mb-8">
                        The ultimate AI sales operating system. Built for high-performance sales teams and revenue
                        leaders.
                    </p>
<div className="flex text-slate-950 gap-x-4 gap-y-4 items-center justify-left">
<a className="text-slate-400 hover:text-[#0077B5] transition-colors" href="#">
<svg className="text-slate-950 w-[18px] h-[18px]" data-icon-replaced="true" fill="currentColor" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-black transition-colors" href="#">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="currentColor" height="18" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '18px', height: '18px'}} viewbox="0 0 251 256" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M149.079 108.399L242.33 0h-22.098l-80.97 94.12L74.59 0H0l97.796 142.328L0 256h22.1l85.507-99.395L175.905 256h74.59L149.073 108.399zM118.81 143.58l-9.909-14.172l-78.84-112.773h33.943l63.625 91.011l9.909 14.173l82.705 118.3H186.3l-67.49-96.533z"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-[#E4405F] transition-colors" href="#">
<svg className="text-slate-950 w-[18px] h-[18px]" data-icon-replaced="true" fill="currentColor" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-black transition-colors" href="#">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="currentColor" height="18" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</a>
</div>
</div>

<div className="flex gap-12 sm:gap-24">

<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-widest text-[#1A1A1A] uppercase mb-1 font-nunito">
                            Product</h4>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#">Features</a>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#">Pricing</a>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#">Blog</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-widest text-[#1A1A1A] uppercase mb-1 font-nunito">
                            Information</h4>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#">Contact</a>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#">Terms of
                            use</a>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#">Privacy</a>
<a className="text-[15px] hover:text-[#1A1A1A] transition-colors text-slate-50 font-sans" href="#"></a>
</div>
</div>
</div>

<div className="w-full h-px bg-slate-900/5 mb-8"></div>

<div className="flex flex-col text-[13px] md:flex-row md:items-center text-slate-50 font-sans gap-x-4 gap-y-4 items-start justify-between">
<div className="">
                    © 2026 OnePro. Created by
                    <span className="font-semibold text-slate-900" onclick="window.location.href='https://end.agency'" role="button">Marc Escrich Belzunce</span>
</div>
<div className="">
                    Made with <span className="font-semibold text-slate-900">Love</span>
</div>
</div>
</div>
</footer>
</section>



    </>
  );
}
