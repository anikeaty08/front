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



        // Update mouse position for spotlight effect
        function updateMouse(e) {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        }

        // Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#000212]/90', 'shadow-lg', 'shadow-indigo-500/5');
                nav.classList.remove('bg-[#000212]/0');
            } else {
                nav.classList.remove('bg-[#000212]/90', 'shadow-lg', 'shadow-indigo-500/5');
                nav.classList.add('bg-[#000212]/0');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="ambient-glow top-[-20%] right-[-10%] bg-indigo-600/20"></div>
<div className="ambient-glow bottom-[-10%] left-[-10%] bg-violet-600/10 delay-1000"></div>
</div>

<div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-1"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#000212]/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)] group-hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.6)] transition-all">
<span className="text-white font-bold text-lg leading-none">B</span>
</div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">BeFluent</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors relative group" href="#features">
                    المميزات
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#path">
                    المسار
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#pricing">
                    الخطط
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">دخول</a>
<a className="glow-button px-5 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2" href="#">
                    ابدأ مجاناً
                    <iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="lucide:arrow-left" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="text-right space-y-8 z-10 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 text-xs font-medium hover:bg-indigo-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    تحديث جديد: وضع المحادثة الذكي 2.0
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
                    تحدث <br/>
<span className="text-shimmer">كأنك ولدت هناك.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                    نظام تعليمي مدعوم بالذكاء الاصطناعي يركز على الطلاقة الحقيقية. 
                    <span className="text-slate-200">لا حفظ، لا قواعد مملة،</span> فقط ممارسة فعلية وملاحظات فورية.
                </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
<button className="h-14 px-8 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]">
<iconify-icon icon="lucide:apple" width="22"></iconify-icon>
                        تحميل للأيفون
                    </button>
<button className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-3 hover:bg-white/10 transition-all hover:border-white/20 backdrop-blur-sm">
<iconify-icon icon="lucide:play" width="20"></iconify-icon>
                        كيف يعمل؟
                    </button>
</div>
<div className="pt-8 border-t border-white/5 flex items-center gap-6">
<div>
<div className="text-2xl font-bold text-white">4.9/5</div>
<div className="text-xs text-slate-500">App Store rating</div>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div>
<div className="text-2xl font-bold text-white">1M+</div>
<div className="text-xs text-slate-500">Active Learners</div>
</div>
</div>
</div>

<div className="relative lg:h-[700px] flex items-center justify-center perspective-[2000px] reveal delay-200">

<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>

<div className="relative w-[320px] h-[640px] bg-[#020617] rounded-[3rem] border-4 border-slate-800/80 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-[-12deg] hover:rotate-0 transition-all duration-700 ease-out group z-20 hover:scale-105 hover:shadow-[0_0_80px_-20px_rgba(79,70,229,0.3)]">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-30 rounded-[2.8rem]"></div>

<div className="h-full w-full bg-[#0B0F19] relative flex flex-col p-6">

<div className="flex justify-between items-center mb-8 pt-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
<span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Live Session</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:more-horizontal" width="16"></iconify-icon>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="relative w-40 h-40 flex items-center justify-center">
<div className="absolute inset-0 border border-indigo-500/30 rounded-full animate-[ping_3s_linear_infinite]"></div>
<div className="absolute inset-4 border border-indigo-500/50 rounded-full animate-[ping_3s_linear_infinite_1s]"></div>
<div className="w-32 h-32 rounded-full bg-gradient-to-b from-indigo-600 to-violet-700 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] relative z-10">
<iconify-icon className="text-white animate-pulse" icon="lucide:mic" width="32"></iconify-icon>
</div>
</div>
<div className="mt-8 text-center space-y-2">
<div className="h-2 w-24 bg-slate-800 rounded-full mx-auto"></div>
<h3 className="text-xl font-medium text-white">Listening...</h3>
<p className="text-sm text-slate-500">Speak the phrase displayed below</p>
</div>

<div className="mt-8 w-full p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
<iconify-icon className="text-green-400" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<p className="text-sm text-white leading-relaxed">"The weather in London is quite unpredictable."</p>
<p className="text-[10px] text-green-400 mt-1 font-mono">PERFECT PRONUNCIATION</p>
</div>
</div>
</div>
</div>

<div className="mt-auto pt-6 flex justify-center gap-6">
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform cursor-pointer">
<iconify-icon icon="lucide:mic" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-semibold text-slate-500 tracking-widest uppercase mb-8">Trusted by teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-sans text-white">ACME</span>
<span className="text-xl font-black font-serif italic text-white">VOGUE</span>
<span className="text-xl font-bold tracking-tighter text-white">Stripe</span>
<span className="text-xl font-semibold text-white">Linear</span>
<span className="text-xl font-bold font-mono text-white">Vercel</span>
</div>
</div>
</div>

<section className="py-32 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 space-y-4 reveal">
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">نظام متكامل للتعلم</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg">أدوات مصممة خصيصاً لكسر حاجز الخوف وبناء الثقة.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 md:row-span-2 spotlight-card rounded-3xl p-8 md:p-12 flex flex-col justify-between group reveal delay-100 min-h-[400px]">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">مدرب الذكاء الاصطناعي</h3>
<p className="text-slate-400 leading-relaxed max-w-md">
                            تخيل معلماً خاصاً متاحاً 24/7. قم بإجراء محادثات مفتوحة حول أي موضوع، وسيقوم بتصحيح القواعد، اقتراح مرادفات أفضل، وتحسين نطقك في الوقت الفعلي.
                        </p>
<div className="mt-8 flex gap-3 flex-wrap">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">GPT-4 Turbo</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">Real-time Audio</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">Context Aware</span>
</div>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent mask-image-gradient"></div>
<div className="absolute bottom-8 right-8 space-y-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
<div className="p-3 rounded-lg bg-[#0F172A] border border-indigo-500/30 text-xs text-indigo-200 w-64 shadow-xl ml-auto">
                            "Can you explain the difference between make and do?"
                        </div>
<div className="p-3 rounded-lg bg-[#1E293B] border border-white/10 text-xs text-slate-300 w-64 mr-auto">
                            "Make implies creating something, while Do implies performing an action..."
                        </div>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 group reveal delay-200">
<iconify-icon className="text-yellow-400 mb-6" icon="lucide:zap" width="32"></iconify-icon>
<h3 className="text-xl font-bold text-white mb-2">Micro-learning</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        دروس مركزة لا تتجاوز 10 دقائق. تعلم في المواصلات، في استراحة القهوة، أو قبل النوم.
                    </p>
<div className="mt-6 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[0%] bg-yellow-400 group-hover:w-[75%] transition-all duration-1000 ease-out"></div>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 group reveal delay-300">
<iconify-icon className="text-green-400 mb-6" icon="lucide:bar-chart-2" width="32"></iconify-icon>
<h3 className="text-xl font-bold text-white mb-2">تحليلات التقدم</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        تتبع تطور مفرداتك، دقة نطقك، واستمراريتك من خلال لوحة بيانات تفاعلية.
                    </p>
</div>

<div className="md:col-span-3 spotlight-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 reveal delay-200 overflow-hidden">
<div className="flex-1 z-10">
<h3 className="text-2xl font-bold text-white mb-4">مكتبة محتوى حقيقي</h3>
<p className="text-slate-400 mb-6 max-w-xl">
                            لا نتعلم من الكتب المدرسية فقط. تعلم الإنجليزية من خلال مقاطع من أفلام، أخبار BBC، ومحادثات TED. المحتوى الذي يهمك يجعلك تتعلم أسرع.
                        </p>
<a className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2" href="#">
                            استكشف المكتبة <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
</a>
</div>
<div className="flex-1 grid grid-cols-2 gap-4 w-full opacity-60 group-hover:opacity-100 transition-opacity">
<div className="aspect-video rounded-lg bg-slate-800 border border-white/10 relative overflow-hidden group/item">
<div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp'}}></div>
<div className="absolute bottom-2 right-2 p-1 rounded bg-black/50 text-[10px] text-white backdrop-blur">Business</div>
</div>
<div className="aspect-video rounded-lg bg-slate-800 border border-white/10 relative overflow-hidden mt-8">
<div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp'}}></div>
<div className="absolute bottom-2 right-2 p-1 rounded bg-black/50 text-[10px] text-white backdrop-blur">Tech</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#010309] border-y border-white/5 relative" id="path">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold text-white text-center mb-16 tracking-tight reveal">مسارك نحو الطلاقة</h2>
<div className="relative space-y-12 before:absolute before:inset-0 before:right-6 md:before:right-1/2 before:w-px before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">

<div className="relative flex flex-col md:flex-row gap-8 items-center md:justify-between group reveal">
<div className="hidden md:block w-1/2 text-left pl-12 order-1 md:order-1">
<div className="text-sm text-indigo-400 font-mono mb-1">01. البداية</div>
<h4 className="text-xl font-bold text-white">أساسيات قوية</h4>
<p className="text-sm text-slate-400 mt-2">بناء قاعدة مفردات قوية وفهم تراكيب الجمل الأساسية.</p>
</div>
<div className="absolute right-[19px] md:right-1/2 transform translate-x-1/2 w-4 h-4 bg-[#010309] border-2 border-indigo-500 rounded-full z-10 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
<div className="w-full md:w-1/2 pr-12 md:pr-12 order-2 md:order-2">
<div className="md:hidden text-sm text-indigo-400 font-mono mb-1">01. البداية</div>
<h4 className="md:hidden text-xl font-bold text-white">أساسيات قوية</h4>
<p className="md:hidden text-sm text-slate-400 mt-2">بناء قاعدة مفردات قوية.</p>
<div className="p-4 rounded-xl bg-white/5 border border-white/10 mt-4 backdrop-blur-sm">
<div className="h-2 w-full bg-slate-800 rounded-full mb-2 overflow-hidden"><div className="h-full w-3/4 bg-indigo-500"></div></div>
<div className="flex justify-between text-[10px] text-slate-400"><span>المستوى A1</span><span>75% مكتمل</span></div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center md:justify-between group reveal delay-100">
<div className="w-full md:w-1/2 pl-12 md:pl-0 md:text-left order-2 md:order-1">
<div className="p-4 rounded-xl bg-white/5 border border-white/10 mt-4 backdrop-blur-sm transform md:translate-x-12">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-violet-400" icon="lucide:mic"></iconify-icon>
<span className="text-sm text-white">محادثات يومية</span>
</div>
<p className="text-xs text-slate-500">تحدث بثقة في المطاعم والمطار.</p>
</div>
</div>
<div className="absolute right-[19px] md:right-1/2 transform translate-x-1/2 w-4 h-4 bg-[#010309] border-2 border-violet-500 rounded-full z-10 group-hover:scale-125 group-hover:bg-violet-500 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
<div className="w-full md:w-1/2 pr-12 md:pr-12 order-1 md:order-2 md:text-right">
<div className="text-sm text-violet-400 font-mono mb-1">02. الممارسة</div>
<h4 className="text-xl font-bold text-white">التحدث الفعلي</h4>
<p className="text-sm text-slate-400 mt-2">سيناريوهات واقعية تفاعلية للتدرب على المواقف الحياتية.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center md:justify-between group reveal delay-200">
<div className="hidden md:block w-1/2 text-left pl-12 order-1">
<div className="text-sm text-blue-400 font-mono mb-1">03. الإتقان</div>
<h4 className="text-xl font-bold text-white">الطلاقة المهنية</h4>
<p className="text-sm text-slate-400 mt-2">مصطلحات الأعمال المتقدمة والتعبير عن الأفكار المعقدة.</p>
</div>
<div className="absolute right-[19px] md:right-1/2 transform translate-x-1/2 w-4 h-4 bg-[#010309] border-2 border-blue-500 rounded-full z-10 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
<div className="w-full md:w-1/2 pr-12 md:pr-12 order-2">
<div className="md:hidden text-sm text-blue-400 font-mono mb-1">03. الإتقان</div>
<h4 className="md:hidden text-xl font-bold text-white">الطلاقة المهنية</h4>
<div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded border border-blue-500/30 text-blue-300 text-xs bg-blue-500/10">
<iconify-icon icon="lucide:award"></iconify-icon> شهادة إتمام
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">استثمار بسيط لمستقبلك</h2>
<p className="text-slate-400">جرب مجاناً لمدة 7 أيام. إلغاء في أي وقت.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="spotlight-card rounded-2xl p-8 bg-white/[0.02] border border-white/5 reveal delay-100 hover:border-white/20">
<h3 className="text-lg font-medium text-slate-300 mb-2">شهري</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$12</span>
<span className="text-sm text-slate-500">/ شهر</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400">
<li className="flex gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> وصول كامل للدروس</li>
<li className="flex gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> ممارسة نطق محدودة</li>
<li className="flex gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> مزامنة بين الأجهزة</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">اختر الباقة</button>
</div>

<div className="spotlight-card rounded-2xl p-8 bg-gradient-to-b from-indigo-900/20 to-indigo-900/5 border border-indigo-500/30 relative reveal z-10 transform md:-translate-y-4">
<div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
<div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">الأكثر طلباً</div>
<h3 className="text-lg font-medium text-indigo-300 mb-2">سنوي</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">$8</span>
<span className="text-sm text-slate-500">/ شهر</span>
</div>
<p className="text-xs text-slate-400 mb-6 bg-indigo-500/10 p-2 rounded border border-indigo-500/20">يتم خصم 96$ سنوياً (توفير 30%)</p>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> كل مميزات الشهري</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> مدرب الذكاء الاصطناعي بلا حدود</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> شهادات معتمدة</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> وصول للمحتوى الحصري</li>
</ul>
<button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">ابدأ التجربة المجانية</button>
</div>

<div className="spotlight-card rounded-2xl p-8 bg-white/[0.02] border border-white/5 reveal delay-200 hover:border-white/20">
<h3 className="text-lg font-medium text-slate-300 mb-2">مدى الحياة</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$299</span>
<span className="text-sm text-slate-500">/ مرة واحدة</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400">
<li className="flex gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> دفع لمرة واحدة فقط</li>
<li className="flex gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> كل التحديثات المستقبلية</li>
<li className="flex gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> دعم ذو أولوية</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">اختر الباقة</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center reveal">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">لا تؤجل تعلمك للغد</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">انضم إلى مجتمع عالمي من المتعلمين وغير حياتك المهنية والشخصية.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="glow-button w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-3" href="#">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
                    ابدأ رحلتك الآن
                </a>
</div>
<p className="mt-6 text-xs text-slate-600">لا يتطلب بطاقة ائتمان للتسجيل المبدئي.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010309] pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">B</div>
<span className="text-lg font-bold text-white">BeFluent</span>
</a>
<p className="text-slate-500 mb-6 max-w-xs">نصنع مستقبل تعلم اللغات باستخدام التكنولوجيا المتقدمة وتصميم يركز على الإنسان.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-white font-semibold mb-4">المنتج</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">تحميل التطبيق</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">الأسعار</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">الذكاء الاصطناعي</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">للشركات</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-semibold mb-4">المصادر</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">المدونة</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">قصص نجاح</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">اختبار مستوى</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">مركز المساعدة</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-semibold mb-4">الشركة</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">من نحن</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">الوظائف</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">تواصل معنا</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-semibold mb-4">قانوني</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">الخصوصية</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">الشروط</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 BeFluent Inc. Developed with passion.</p>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
