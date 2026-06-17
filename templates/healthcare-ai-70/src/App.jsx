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



        // 1. Mouse Movement Spotlight
        function updateSpotlight(e) {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        }

        // 2. 3D Tilt Effect on Hero
        const tiltContainer = document.getElementById('hero-tilt-container');
        const tiltElement = document.getElementById('hero-tilt-element');

        if(tiltContainer && tiltElement) {
            tiltContainer.addEventListener('mousemove', (e) => {
                const rect = tiltContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate percentage from center
                const xPct = (x / rect.width) - 0.5;
                const yPct = (y / rect.height) - 0.5;

                // Max rotation degrees
                const rotationX = -yPct * 20; // Up/Down tilt
                const rotationY = xPct * 20;  // Left/Right tilt

                tiltElement.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            });

            tiltContainer.addEventListener('mouseleave', () => {
                tiltElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        }

        // 3. Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 4. Phone Scroll Rotation
        const phone = document.getElementById('phone-mockup');
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if(phone) {
                // Subtle rotation based on scroll position
                const rotation = -15 + (scrollPos * 0.01);
                // Clamp rotation
                if(rotation < 10 && rotation > -20) {
                     phone.style.transform = `rotateY(${rotation}deg) rotateX(10deg)`;
                }
            }
        });

    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-9 h-9 relative">
<div className="absolute inset-0 bg-emerald-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative w-full h-full bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white border border-white/10">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">طبيب لينك</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors hover:scale-105 transform" href="#features">الميزات</a>
<a className="hover:text-white transition-colors hover:scale-105 transform" href="#ai">الذكاء الاصطناعي</a>
<a className="hover:text-white transition-colors hover:scale-105 transform" href="#download">تحميل</a>
</div>
<button className="relative overflow-hidden group bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/5 flex items-center gap-2 backdrop-blur-sm">
<div className="absolute inset-0 bg-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10">حمل التطبيق</span>
<iconify-icon className="relative z-10 group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down-to-line" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="flex-1 text-center lg:text-right reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-8 hover:bg-emerald-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        الطب الاتصالي المدعوم بالـ AI
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                        رعايتك الصحية <br/>
<span className="text-gradient-animate">بذكاء المستقبل.</span>
</h1>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        تطبيق "طبيب لينك" يجمع بين التشخيص الدقيق بالذكاء الاصطناعي والتواصل المباشر مع نخبة الأطباء. دقة، سرعة، وأمان.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:-translate-y-1">
                            ابدأ التشخيص
                            <iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 text-white border border-white/10 rounded-xl font-medium hover:bg-slate-800 transition-colors backdrop-blur-sm flex items-center justify-center gap-2 hover:border-emerald-500/30">
<iconify-icon icon="lucide:play-circle" width="20"></iconify-icon>
                            كيف يعمل؟
                        </button>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8">
<div className="text-center lg:text-right">
<h3 className="text-2xl font-bold text-white">50k+</h3>
<p className="text-xs text-slate-500 mt-1">مريض نشط</p>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="text-center lg:text-right">
<h3 className="text-2xl font-bold text-white">99%</h3>
<p className="text-xs text-slate-500 mt-1">دقة التشخيص</p>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="text-center lg:text-right">
<h3 className="text-2xl font-bold text-white">24/7</h3>
<p className="text-xs text-slate-500 mt-1">دعم طبي</p>
</div>
</div>
</div>

<div className="flex-1 w-full tilt-container" id="hero-tilt-container">
<div className="relative w-full aspect-square lg:aspect-[4/3] tilt-element" id="hero-tilt-element">

<div className="absolute inset-0 bg-slate-900/80 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden z-10 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/30">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

<div className="h-16 border-b border-white/5 flex items-center px-6 justify-between bg-white/5 relative z-20">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
</div>
<div className="flex items-center gap-2 bg-slate-950/50 px-3 py-1 rounded-full border border-white/5">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-400">AI_ANALYSIS_ACTIVE</span>
</div>
</div>

<div className="p-6 flex-1 relative z-20 flex flex-col gap-4">

<div className="flex items-start gap-4 animate-float-slow" style={{animationDelay: '0.5s'}}>
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<div className="bg-slate-800/80 p-4 rounded-2xl rounded-tr-none border border-white/10 text-sm text-slate-200 max-w-[85%] shadow-lg backdrop-blur-md">
<p className="mb-2">مرحباً محمد، قمت بتحليل صورة الأشعة المرفقة.</p>
<div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md w-fit">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon>
                                            النتيجة: سليمة بنسبة 98%
                                        </div>
</div>
</div>

<div className="bg-slate-950 rounded-xl border border-slate-800 p-1 relative overflow-hidden group mt-2 mx-4 shadow-2xl transform transition-transform hover:scale-[1.02]">
<div className="absolute top-0 w-full h-1 scan-line z-30"></div>
<div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-slate-700 group-hover:text-slate-500 transition-colors duration-500" icon="lucide:bone" strokeWidth="1" width="64"></iconify-icon>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020617_100%)]"></div>
<div className="absolute top-4 right-4 text-[10px] font-mono text-emerald-500/50">
                                            SCANNING...<br/>
                                            ISO: 400<br/>
                                            DEPTH: 20mm
                                        </div>
</div>
</div>

<div className="flex items-start gap-4 flex-row-reverse animate-float-slow" style={{animationDelay: '1.5s'}}>
<div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-300 border border-white/10">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<div className="bg-emerald-600/10 p-4 rounded-2xl rounded-tl-none border border-emerald-500/20 text-sm text-white max-w-[85%]">
                                        ممتاز! هل يمكنني حجز استشارة فيديو للتأكد؟
                                    </div>
</div>
</div>
</div>

<div className="absolute -right-6 top-24 bg-slate-800/90 border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-md z-30 animate-float-reverse transform translate-z-[40px]">
<div className="flex items-center gap-3">
<div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
<iconify-icon icon="lucide:pill" width="24"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider">تم التعرف على الدواء</div>
<div className="text-sm font-bold text-white">Panadol Extra</div>
</div>
</div>
</div>
<div className="absolute -left-8 bottom-32 bg-slate-800/90 border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-md z-30 animate-float-slow transform translate-z-[60px]">
<div className="flex items-center gap-3">
<div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
<iconify-icon icon="lucide:video" width="24"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider">مكالمة قادمة</div>
<div className="text-sm font-bold text-white">د. سارة - 4:00 م</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 relative bg-slate-950 overflow-hidden" id="features">

<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center reveal">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">تقنيات طبية <span className="text-emerald-400">خارقة</span></h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">أدوات متكاملة مصممة لرفع كفاءة الرعاية الصحية باستخدام أحدث خوارزميات الذكاء الاصطناعي.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[700px]">

<div className="md:col-span-4 md:row-span-2 bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group spotlight-card reveal">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:scan-face" width="28"></iconify-icon>
</div>
<button className="text-xs font-mono text-slate-500 border border-white/5 px-3 py-1 rounded-full bg-black/20">v2.0 Beta</button>
</div>
<h3 className="text-3xl font-bold text-white mb-4">تحليل بصري متقدم</h3>
<p className="text-slate-400 text-lg max-w-md mb-8">محرك ذكاء اصطناعي قادر على قراءة الأشعة، تحاليل الدم، وحتى الأمراض الجلدية بدقة تصل إلى 99%.</p>

<div className="flex-1 bg-slate-950 rounded-2xl border border-white/5 relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">

<div className="absolute inset-0 bg-[linear-gradient(transparent_19px,#10b98110_20px),linear-gradient(90deg,transparent_19px,#10b98110_20px)] bg-[size:20px_20px] opacity-20"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center">
<div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
<div className="absolute top-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_#34d399] animate-[scan-vertical_2s_linear_infinite]"></div>
<iconify-icon className="text-emerald-500/50" icon="lucide:file-heart" width="64"></iconify-icon>
</div>

<div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono text-emerald-600/60">
<span>PROCESSING: 1024 TFLOPS</span>
<span>SECURE: ENCRYPTED</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group spotlight-card reveal hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:rotate-12 transition-transform">
<iconify-icon icon="lucide:pill" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">كاشف الأدوية</h3>
<p className="text-sm text-slate-400">صور علبة الدواء وسنقوم بإخبارك بكل التفاصيل، الجرعات، والآثار الجانبية.</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group spotlight-card reveal hover:-translate-y-1 transition-transform duration-300">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px] -ml-10 -mb-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:rotate-12 transition-transform">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<div className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-1 rounded">LIVE</div>
</div>
<h3 className="text-xl font-bold text-white mb-2">حجز فوري</h3>
<p className="text-sm text-slate-400">تحديث لحظي للمواعيد المتاحة عند الأطباء القريبين منك.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-20">

<div className="relative w-full md:w-1/2 flex justify-center perspective-container h-[700px] items-center reveal">

<div className="absolute w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

<div className="relative w-[320px] h-[650px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden transform transition-transform duration-100 ease-out z-10" id="phone-mockup" style={{transformStyle: 'preserve-3d', transform: 'rotateY(-15deg) rotateX(10deg)'}}>

<div className="absolute top-24 -left-3 w-1 h-10 bg-slate-700 rounded-l-md"></div>
<div className="absolute top-40 -left-3 w-1 h-16 bg-slate-700 rounded-l-md"></div>
<div className="absolute top-32 -right-3 w-1 h-12 bg-slate-700 rounded-r-md"></div>

<div className="w-full h-full bg-slate-950 overflow-hidden relative">

<div className="h-8 flex justify-between items-center px-6 text-[10px] text-white pt-2">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="lucide:wifi" width="12"></iconify-icon>
<iconify-icon icon="lucide:battery" width="12"></iconify-icon>
</div>
</div>

<div className="p-5 flex flex-col gap-4 h-full">

<div className="bg-slate-800/50 p-3 rounded-2xl flex items-center gap-3 border border-white/5 backdrop-blur-md">
<iconify-icon className="text-slate-400" icon="lucide:search"></iconify-icon>
<span className="text-xs text-slate-400">ابحث عن دكتور، تخصص...</span>
</div>

<div className="flex gap-3 overflow-x-hidden">
<div className="bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap">الكل</div>
<div className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap">قلب</div>
<div className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap">أسنان</div>
<div className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap">جلدية</div>
</div>

<div className="space-y-3 mt-2">

<div className="bg-slate-800/40 border border-white/5 p-4 rounded-2xl flex gap-4 items-center hover:bg-slate-800/80 transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border border-emerald-500/30">
<img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dr1"/>
</div>
<div className="flex-1">
<h4 className="text-white text-sm font-bold">د. خالد العتيبي</h4>
<p className="text-xs text-slate-400">استشاري قلب</p>
</div>
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
</div>
</div>

<div className="bg-slate-800/40 border border-white/5 p-4 rounded-2xl flex gap-4 items-center hover:bg-slate-800/80 transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dr2"/>
</div>
<div className="flex-1">
<h4 className="text-white text-sm font-bold">د. منى سعيد</h4>
<p className="text-xs text-slate-400">طب أطفال</p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</div>
</div>

<div className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-lg transform translate-y-2 animate-float-slow">
<div className="flex justify-between items-start text-white">
<div>
<div className="text-xs font-medium opacity-80 mb-1">تذكير بالدواء</div>
<div className="font-bold text-sm">بنادول إكسترا (قرصين)</div>
</div>
<div className="bg-white/20 p-1.5 rounded-lg">
<iconify-icon icon="lucide:bell-ring" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-slate-900/90 backdrop-blur border-t border-white/5 p-4 flex justify-around text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:home" width="24"></iconify-icon>
<iconify-icon icon="lucide:calendar-days" width="24"></iconify-icon>
<iconify-icon icon="lucide:message-square" width="24"></iconify-icon>
<iconify-icon icon="lucide:user" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 text-center md:text-right reveal">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        تجربة استخدام <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-200">صممت للإنسان.</span>
</h2>
<p className="text-slate-400 text-lg mb-12 leading-relaxed">
                        واجهة مستخدم بديهية، تدعم الوضع الليلي، وسريعة الاستجابة. قمنا ببناء "طبيب لينك" ليكون الرفيق الصحي الذي تفهمه ويفهمك.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">سرعة فائقة</h4>
<p className="text-slate-500 text-sm">استجابة فورية دون انتظار.</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:lock" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">تشفير تام</h4>
<p className="text-slate-500 text-sm">بياناتك الطبية آمنة ومشفرة.</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-purple-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">متاح للجميع</h4>
<p className="text-slate-500 text-sm">iOS و Android والويب.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
<div>
<h2 className="text-3xl font-bold text-white mb-2">طبيب لينك</h2>
<p className="text-slate-500">شريكك الصحي الذكي</p>
</div>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
<div>
<h4 className="font-bold text-white mb-6">المنتج</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">الميزات</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">التكاملات</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">التسعير</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6">الشركة</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">من نحن</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">المدونة</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">الوظائف</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6">الموارد</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">المجتمع</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">مركز المساعدة</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">حالة الخدمة</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6">قانوني</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">الخصوصية</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">الشروط</a></li>
</ul>
</div>
</div>
<div className="mt-16 text-center text-xs text-slate-600">
                © 2024 Tabib Link Inc. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
