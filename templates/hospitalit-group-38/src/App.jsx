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
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

<header className="fixed top-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-[#F0EDE6] pointer-events-none">
<div className="flex items-center gap-4 cursor-pointer pointer-events-auto">
<iconify-icon height="24" icon="solar:cup-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-['Space_Mono'] text-xs uppercase tracking-[0.1em]">Home All Day</span>
</div>
<button className="font-['Space_Mono'] text-xs uppercase tracking-[0.1em] pointer-events-auto hover:opacity-70 transition-opacity">
            Menu
        </button>
</header>
<main className="w-full flex flex-col">

<section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#F4F2EE] border-b border-[#282828]/20 overflow-hidden relative">

<div className="flex flex-col md:px-16 lg:px-24 md:py-12 z-10 h-full pt-32 pr-6 pb-16 pl-6 relative justify-center bg-[#322D29]">
<h1 className="font-['Playfair_Display'] italic text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[1.05] tracking-tight font-normal text-[#F0EDE6] mb-4">
        Home<br/>All Day
    </h1>
<span className="font-['Space_Mono'] text-[10px] md:text-xs uppercase tracking-widest text-[#F0EDE6]/60 mb-20 block">
        A sanctuary for the everyday
    </span>
<ul className="space-y-8">
<li className="flex items-center">
<span className="font-['Space_Mono'] text-[10px] md:text-xs text-[#F0EDE6]/50 w-10 md:w-12 shrink-0">01</span>
<a className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#F0EDE6] hover:opacity-70 transition-opacity flex items-center gap-3" href="#">
                Our Philosophy
                <svg className="lucide lucide-arrow-right text-[#F0EDE6]/60" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="flex items-center">
<span className="font-['Space_Mono'] text-[10px] md:text-xs text-[#F0EDE6]/50 w-10 md:w-12 shrink-0">02</span>
<a className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#F0EDE6] hover:opacity-70 transition-opacity flex items-center gap-3" href="#">
                The Venues
                <svg className="lucide lucide-arrow-right text-[#F0EDE6]/60" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="flex items-center">
<span className="font-['Space_Mono'] text-[10px] md:text-xs text-[#F0EDE6]/50 w-10 md:w-12 shrink-0">03</span>
<a className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#F0EDE6] hover:opacity-70 transition-opacity flex items-center gap-3" href="#">
                Private Events and Catering
                <svg className="lucide lucide-arrow-right text-[#F0EDE6]/60" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
</ul>
</div>

<div className="relative w-full h-[50vh] md:h-full border-t md:border-t-0 md:border-l border-[#282828]/20 bg-white p-4 md:p-8">
<img alt="Sanctuary Space" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-125" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="min-h-[70vh] bg-[#CBE1C8] p-8 md:p-16 lg:p-24 flex items-center justify-center border-b border-[#282828]/20 relative overflow-hidden">
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl text-center leading-[1.1] tracking-tight font-normal text-[#282828] relative z-10 max-w-5xl mx-auto">
                We believe in spaces that feel like an extension of our own living room. Whether it's a quiet morning espresso, a lingering afternoon lunch or late night conversations over natural wine, our venues are thoughtfully crafted to be your home away from home.
            </h2>
</section>

<section className="md:py-32 overflow-hidden bg-[#F0EDE6] border-[#282828]/20 border-b pt-24 pb-24 relative">
<div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="">
<p className="font-['Space_Mono'] text-xs mb-4 text-[#282828]/60 uppercase tracking-widest">Our Portfolio</p>
<h2 className="font-['Playfair_Display'] text-5xl md:text-7xl tracking-tight leading-none font-normal">
                        The Venues
                    </h2>
</div>
</div>

<div className="flex overflow-x-auto gap-8 md:gap-12 md:px-12 snap-x snap-mandatory pr-6 pb-12 pl-6 gap-x-8 gap-y-8">

<div className="min-w-[80vw] md:min-w-[400px] snap-center group cursor-pointer flex flex-col">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-[#CBE1C8] border border-[#282828]/10 p-6 flex items-center justify-center">
<img alt="Highroad" className="transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply w-full h-full object-cover" src="https://images.unsplash.com/photo-1462917882517-e150004895fa?w=800&amp;q=80"/>
</div>
<span className="font-['Space_Mono'] text-[10px] tracking-widest text-gray-500 uppercase mb-2">01 — Dickson</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight text-[#282828] mb-3 font-normal">Highroad</h3>
<p className="text-lg font-light text-[#282828]/70 leading-relaxed max-w-sm">1 Woolley Street, Dickson</p>
</div>

<div className="min-w-[80vw] md:min-w-[400px] snap-center group cursor-pointer flex flex-col">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-[#EAE7DF] border border-[#282828]/10 p-6 flex items-center justify-center">
<img alt="Otis Dining" className="transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] w-full h-full object-cover" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&amp;q=80"/>
</div>
<span className="font-['Space_Mono'] text-[10px] tracking-widest text-gray-500 uppercase mb-2">02 — Kingston</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight text-[#282828] mb-3 font-normal">Otis Dining</h3>
<p className="text-lg font-light text-[#282828]/70 leading-relaxed max-w-sm">29 Jardine Street, Kingston</p>
</div>

<div className="min-w-[80vw] md:min-w-[400px] snap-center group cursor-pointer flex flex-col">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-[#A3AC2F] border border-[#282828]/10 p-6 flex items-center justify-center">
<img alt="On Lonsdale" className="transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply w-full h-full object-cover" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-['Space_Mono'] text-[10px] tracking-widest text-gray-500 uppercase mb-2">03 — Braddon</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight text-[#282828] mb-3 font-normal">On Lonsdale</h3>
<p className="text-lg font-light text-[#282828]/70 leading-relaxed max-w-sm">23 Lonsdale Street, Braddon</p>
</div>

<div className="min-w-[80vw] md:min-w-[400px] snap-center group cursor-pointer flex flex-col">
<div className="aspect-[4/5] overflow-hidden relative mb-6 bg-[#EE643A] border border-[#282828]/10 p-6 flex items-center justify-center">
<img alt="Lounge Room" className="transition-transform duration-1000 group-hover:scale-105 grayscale-[50%] mix-blend-multiply w-full h-full object-cover" src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&amp;q=80"/>
</div>
<span className="font-['Space_Mono'] text-[10px] tracking-widest text-gray-500 uppercase mb-2">04 — Kingston</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight text-[#282828] mb-3 font-normal">Lounge Room</h3>
<p className="text-lg font-light text-[#282828]/70 leading-relaxed max-w-sm">The Causeway, Kingston</p>
</div>
</div>
</section><section className="min-h-[85vh] border-b border-[#282828]/20 flex flex-col relative overflow-hidden bg-[#F4F2EE]">
<div className="flex-1 flex flex-col items-center justify-center p-8 md:p-24 text-center z-10">
<span className="font-['Space_Mono'] text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-8">Why I love Home All Day</span>
<h2 className="font-['Playfair_Display'] text-5xl md:text-[6rem] tracking-tight leading-[0.9] font-normal text-[#282828] max-w-4xl mb-12">
<span className="italic text-[#EE643A]">Best breakfast</span><br/>I have ever tried
                </h2>
<div className="text-lg font-light leading-relaxed text-[#282828]/80 max-w-3xl mx-auto flex flex-col md:flex-row gap-8 text-left bg-white/50 p-8 rounded-2xl border border-white">
<p className="flex-1">Whether you're settling in for a productive day or just stopping by for a quick caffeine fix and a sweet treat, our spaces promise an unparalleled experience, and we all swear by it!</p>
</div>
</div>

<img alt="Carrot Cake" className="absolute left-4 md:left-24 bottom-12 md:bottom-24 w-32 md:w-64 drop-shadow-2xl -rotate-6 z-20 mix-blend-multiply" src="https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 md:top-24 right-4 md:right-24 bg-white p-4 w-28 md:w-40 rotate-6 shadow-md opacity-90 border border-gray-200 z-20">
<div className="border-b border-dashed border-gray-400 pb-2 mb-2 text-[8px] font-['Space_Mono'] text-center">HOME ALL DAY<br/>RECEIPT</div>
<div className="h-2 bg-gray-200 mb-1 w-full"></div>
<div className="h-2 bg-gray-200 mb-1 w-3/4"></div>
<div className="h-8 bg-gray-800 mt-4 mx-auto w-full"></div>
</div>

<div className="absolute bottom-16 right-8 md:right-32 bg-[#FF85D9] rounded-[100%] w-20 md:w-32 h-14 md:h-20 flex items-center justify-center rotate-12 border border-[#282828] shadow-sm z-20">
<span className="font-['Space_Mono'] text-[8px] md:text-[11px] leading-tight text-center uppercase text-[#282828]">My favorite<br/>pastry</span>
</div>
</section>

<section className="relative min-h-[90vh] border-b border-[#282828]/20 flex items-center justify-center p-6 md:p-12">

<div className="absolute inset-0 w-full h-full">
<img alt="Local Coffee Shop" className="w-full h-full object-cover grayscale-[30%] sepia-[10%]" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#282828]/30"></div>
</div>

<div className="bg-[#A3AC2F] p-8 md:p-16 flex flex-col justify-between relative z-10 w-full max-w-2xl border border-[#282828]/20 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
<h2 className="font-['Playfair_Display'] text-[5rem] md:text-[7rem] tracking-tight leading-[0.85] font-normal text-[#282828] text-center">
                    Local<br/>Coffee
                </h2>
<div className="mt-16 font-['Space_Mono'] text-xs uppercase tracking-widest text-[#282828] text-center">
                    love at first sight in canberra
                </div>

<div className="absolute inset-4 md:inset-6 border-2 border-[#282828] pointer-events-none hidden md:block"></div>
</div>
</section>

</main>

<footer className="bg-[#F0EDE6] text-[#282828] pt-24 pb-12 px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
<div className="">
<h2 className="font-['Playfair_Display'] text-5xl md:text-7xl tracking-tight leading-none mb-8 font-normal">
                    Stay Awhile.
                </h2>
<div className="flex flex-wrap gap-4 font-['Space_Mono'] text-xs uppercase tracking-widest">
<button className="border border-[#282828] px-8 py-3 hover:bg-[#282828] hover:text-[#F0EDE6] transition-colors duration-300">Bookings</button>
<button className="border border-[#282828] px-8 py-3 hover:bg-[#282828] hover:text-[#F0EDE6] transition-colors duration-300" onclick="document.getElementById('modal').classList.toggle('hidden')">Membership</button>
</div>
</div>
<div className="flex flex-col md:items-end justify-end font-light text-lg">
<p className="font-['Playfair_Display'] text-3xl mb-4 font-normal tracking-tight">Home All Day HQ</p>
<p className="text-[#282828]/70">12 Lonsdale Street,<br/>Braddon, Canberra ACT 2612</p>
<p className="pt-6 border-b border-[#282828] pb-1 cursor-pointer hover:opacity-50 w-max">hello@homeallday.com.au</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#282828]/20 font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#282828]/60">
<p>© 2024 Home All Day Group.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-[#282828]" href="#">Instagram</a>
<a className="hover:text-[#282828]" href="#">Privacy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#282828]/80 backdrop-blur-sm hidden" id="modal">
<div className="bg-[#F0EDE6] w-full max-w-4xl flex flex-col md:flex-row relative border border-[#282828]">
<button className="absolute top-4 right-4 z-20 hover:opacity-50" onclick="document.getElementById('modal').classList.add('hidden')">
<iconify-icon height="28" icon="solar:close-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="w-full md:w-1/2 bg-[#CBE1C8] p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#282828]/20 relative overflow-hidden">
<h3 className="font-['Playfair_Display'] text-5xl tracking-tight mb-8 font-normal z-10 relative">Member Perks</h3>
<ul className="space-y-6 text-lg font-light relative z-10 text-[#282828]/80">
<li className="flex gap-4 items-start"><iconify-icon className="mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon> Priority booking access.</li>
<li className="flex gap-4 items-start"><iconify-icon className="mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon> Complimentary welcome drinks.</li>
<li className="flex gap-4 items-start"><iconify-icon className="mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon> Private tasting events.</li>
</ul>
</div>
<div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
<p className="font-['Space_Mono'] text-[10px] uppercase tracking-widest mb-4 text-[#282828]/60">Join the Family</p>
<form className="space-y-6">
<input className="w-full bg-transparent border-b border-[#282828]/30 py-2 focus:outline-none focus:border-[#282828] text-lg font-light placeholder:text-[#282828]/40" placeholder="Full Name" type="text"/>
<input className="w-full bg-transparent border-b border-[#282828]/30 py-2 focus:outline-none focus:border-[#282828] text-lg font-light placeholder:text-[#282828]/40" placeholder="Email Address" type="email"/>
<button className="w-full bg-[#282828] text-[#F0EDE6] py-4 mt-8 font-['Space_Mono'] text-xs uppercase tracking-widest hover:bg-[#EE643A] transition-colors" type="button">
                        Claim Membership
                    </button>
</form>
</div>
</div>
</div>
<div style={{all: 'initial'}}></div><div style={{all: 'initial'}}></div><div style={{all: 'initial'}}></div>
    </>
  );
}
