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



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0055ff,
        shininess: 35.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.65
      });
    });
  


        // Initialize Lucide Icons
        lucide.createIcons();

        // Loader Logic
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600); // Wait for transition to finish
            }, 1200); // Minimum view time
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 mix-blend-normal saturate-200" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}><div className="absolute inset-0 z-0 opacity-60" id="vanta-bg"><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="1584" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1030px', height: '792px'}} width="2060"></canvas><canvas className="vanta-canvas" height="1584" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1030px', height: '792px'}} width="2060"></canvas><canvas className="vanta-canvas" height="1584" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1030px', height: '792px'}} width="2060"></canvas><canvas className="vanta-canvas" height="1584" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1470px', height: '792px'}} width="2940"></canvas><canvas className="vanta-canvas" height="1584" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1470px', height: '792px'}} width="2940"></canvas></div></div>

<div className="" id="preloader" style={{display: 'none'}}>
<svg fill="none" height="120" viewbox="0 0 100 100" width="120" xmlns="http://www.w3.org/2000/svg">

<circle cx="50" cy="50" r="45" stroke="#2D3748" strokeLinecap="round" strokeWidth="2"></circle>
<circle cx="50" cy="50" r="35" stroke="#e2e8f0" strokeWidth="1"></circle>

<g className="drum">
<circle cx="50" cy="50" r="25" stroke="#5BC2E7" stroke-dasharray="10 10" strokeLinecap="round" strokeWidth="3"></circle>
</g>

<g className="clothes">
<circle cx="45" cy="55" fill="#5BC2E7" r="5"></circle> 
<circle cx="55" cy="45" fill="#2D3748" r="4"></circle> 
<circle cx="50" cy="50" fill="#F6AD55" r="3"></circle> 
</g>
</svg>
</div>


<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-shrink-0">
<img alt="Cleaners Logo" className="w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5da2c1fe-b5dd-4c30-899c-134870104756_320w.png"/>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base text-[#2D3748] hover:text-[#5BC2E7] font-medium transition-colors" href="#about">מי אנחנו</a>
<a className="hover:text-[#5BC2E7] transition-colors text-base font-medium text-[#2D3748]" href="#process">איך זה עובד</a>
<a className="text-base text-[#2D3748] hover:text-[#5BC2E7] font-medium transition-colors" href="#business">עסקים</a>
<a className="bg-[#5BC2E7] text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#4ab1d6] transition-all shadow-lg shadow-[#5BC2E7]/20 flex items-center gap-2" href="#">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span>הזמן איסוף</span>
</a>
</div>

<button className="md:hidden p-2 text-[#2D3748]" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-gray-100 p-6 absolute w-full shadow-premium" id="mobile-menu">
<div className="flex flex-col gap-4 text-center">
<a className="text-lg text-[#2D3748] font-medium" href="#about">מי אנחנו</a>
<a className="text-lg text-[#2D3748] font-medium" href="#process">איך זה עובד</a>
<a className="text-lg text-[#2D3748] font-medium" href="#business">עסקים</a>
<a className="bg-[#5BC2E7] text-white px-6 py-3 rounded-full text-lg font-medium w-full block" href="#">הזמן איסוף</a>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-32 overflow-hidden pt-32 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="text-right space-y-8 z-10 relative">
<div className="inline-flex items-center gap-2 bg-[#5BC2E7]/10 px-4 py-1.5 rounded-full text-[#5BC2E7] text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-[#5BC2E7]"></span>
                        שירות חדש ברמת השרון
                    </div>
<h1 className="leading-[1.1] text-4xl font-bold tracking-tight bg-gradient-to-br from-black/50 via-black/100 to-black/50 md:text-6xl md:bg-clip-text md:text-transparent">
                        קלינרס רמת השרון.
                        <br/>
<span className="bg-gradient-to-br from-black/50 via-black/100 to-black/50 xl:bg-clip-text xl:text-transparent">באים, אוספים, מחזירים.</span>
</h1>
<p className="leading-relaxed md:text-2xl md:bg-clip-text md:text-transparent text-xl font-normal bg-gradient-to-br from-black/50 via-black/100 to-black/50 max-w-xl">
                        המכבסה המקצועית שאתם מכירים, עכשיו בשירות משלוחים עד הבית. פתרונות כביסה וניקוי יבש לפרטיים ולעסקים – בלי מאמץ.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-[#2D3748] text-white px-8 py-4 rounded-[24px] text-lg font-medium hover:bg-gray-800 transition-all shadow-premium hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
<span '"="" '_blank')"="" className="onclick=" onclick="window.location.href='https://wa.link/s0ftez'" role="button" s0ftez',="" wa.link="" window.open('https:="">תיאום איסוף אונליין</span>
<svg className="lucide lucide-arrow-left w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="border-2 border-gray-200 text-[#2D3748] px-8 py-4 rounded-[24px] text-lg font-medium hover:border-[#5BC2E7] hover:text-[#5BC2E7] transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">077-6707363</span>
</button>
</div>
<div className="pt-6 flex items-center gap-4 text-sm text-gray-400">
<div className="flex -space-x-2 space-x-reverse">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
</div>
<p className="">הצטרפו למאות לקוחות מרוצים ברמה"ש</p>
</div>
</div>

<div className="relative z-10 lg:order-last order-first">
<div className="relative float-img">

<div className="-translate-x-1/2 -translate-y-1/2 -z-10 bg-gradient-to-tr from-[#5BC2E7]/20 to-transparent w-[120%] h-[120%] rounded-full absolute top-1/2 left-1/2 blur-3xl"></div>

<div className="rounded-[32px] overflow-hidden shadow-premium bg-white p-2">

<img alt="Premium Laundry Stack" className="transform hover:scale-105 transition-transform duration-700 bg-slate-200 w-full h-auto object-cover rounded-[28px] pt-0 pb-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d00412c5-dc6b-42c7-b282-f7d2319795ec_1600w.jpg"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-green-100 p-2 rounded-full text-green-600">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-xs text-gray-400 font-medium">סטטוס משלוח</p>
<p className="text-sm font-bold text-[#2D3748]">הכביסה בדרך אליך</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
<svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-[#5BC2E7] opacity-[0.08]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
</section>

<section className="py-24 bg-gray-50/50 relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#2D3748] mb-4">איך זה עובד? פשוט וקל.</h2>
<div className="w-16 h-1.5 bg-[#5BC2E7] rounded-full mx-auto"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[24px] p-8 shadow-premium hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white group">
<div className="w-14 h-14 bg-[#5BC2E7]/10 rounded-2xl flex items-center justify-center text-[#5BC2E7] mb-6 group-hover:bg-[#5BC2E7] group-hover:text-white transition-colors">
<svg className="lucide lucide-truck w-7 h-7" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-[#2D3748] mb-3">1. מזמינים איסוף</h3>
<p className="text-lg text-gray-500 leading-relaxed">
                        בוחרים שעה נוחה באתר או בטלפון, והשליח שלנו בדרך אליכם לאיסוף השקית מהפתח.
                    </p>
</div>

<div className="bg-white rounded-[24px] p-8 shadow-premium hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white group relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
<div className="w-14 h-14 bg-[#5BC2E7]/10 rounded-2xl flex items-center justify-center text-[#5BC2E7] mb-6 group-hover:bg-[#5BC2E7] group-hover:text-white transition-colors">
<svg className="lucide lucide-sparkles w-7 h-7" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-[#2D3748] mb-3">2. אנחנו מטפלים בהכל</h3>
<p className="text-lg text-gray-500 leading-relaxed">
                        מיון קפדני, טיפול בכתמים, כביסה עדינה, גיהוץ או ניקוי יבש בסטנדרט הגבוה ביותר.
                    </p>
</div>

<div className="bg-white rounded-[24px] p-8 shadow-premium hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white group">
<div className="w-14 h-14 bg-[#5BC2E7]/10 rounded-2xl flex items-center justify-center text-[#5BC2E7] mb-6 group-hover:bg-[#5BC2E7] group-hover:text-white transition-colors">
<svg className="lucide lucide-shirt w-7 h-7" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-[#2D3748] mb-3">3. מקבלים בחזרה נקי</h3>
<p className="text-lg text-gray-500 leading-relaxed">
                        הכביסה חוזרת אליכם ריחנית, מקופלת למשעי ועטופה בניילון שומר טריות, מוכנה ישר לארון.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<img alt="Cleaners Logo" className="h-8 opacity-80 grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<p className="text-gray-400 text-sm">© 2024 קלינרס רמת השרון. כל הזכויות שמורות.</p>
</div>
</footer>



    </>
  );
}
