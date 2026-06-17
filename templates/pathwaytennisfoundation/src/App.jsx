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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#051C24]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trophy stroke-[1.5] w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(235, 179, 70)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-xl font-medium text-white tracking-tight">Pathway Tennis Foundation</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors duration-200" href="#home">Home</a>
<a className="hover:text-white transition-colors duration-200" href="#foundation">Foundation</a>
<a className="hover:text-white transition-colors duration-200" href="#players">Players</a>
<a className="hover:text-white transition-colors duration-200" href="#alumni">Alumni</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</div>
<a className="bg-gold hover:bg-amber-400 text-[#051C24] px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2" href="#donate">
<span>Donate Now</span>
<svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Tennis Serve" className="w-full h-full object-cover grayscale opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df761228-92ba-4e85-a2be-4e89fb15e252_800w.jpg" style={{}}/>
<div className="bg-gradient-to-b from-[#051C24]/80 via-[#051C24]/60 to-[#051C24] absolute top-0 right-0 bottom-0 left-0 translate-y-2">
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

<div className="flex flex-col items-center group cursor-default">
<span className="md:text-7xl text-gold transition-transform duration-500 group-hover:-translate-y-1 text-6xl font-light tracking-tight mb-2">5</span>
<span className="text-base text-slate-300 font-medium">years of existence</span>
</div>

<div className="flex flex-col items-center group cursor-default">
<span className="md:text-7xl text-gold transition-transform duration-500 group-hover:-translate-y-1 text-6xl font-light tracking-tight mb-2">9</span>
<span className="text-base font-medium text-slate-300">USTA National junior champions</span>
</div>

<div className="flex flex-col items-center group cursor-default">
<span className="md:text-7xl text-gold transition-transform duration-500 group-hover:-translate-y-1 text-6xl font-light tracking-tight mb-2">1 MIL+</span>
<span className="text-base font-medium text-slate-300">College Scholarships</span>
</div>

<div className="flex flex-col items-center group cursor-default">
<span className="md:text-7xl text-gold transition-transform duration-500 group-hover:-translate-y-1 text-6xl font-light tracking-tight mb-2">1000+</span>
<span className="text-base font-medium text-slate-300">children supported since 2020</span>
</div>
</div>
</div>
</section>

<section className="bg-deep-teal relative py-20 px-6" id="foundation">
<div className="max-w-3xl mx-auto text-center space-y-12">
<p className="md:text-2xl leading-relaxed text-xl font-light text-slate-300" style={{}}>Pathway Tennis Foundation is a non-profit organization committed to providing access, training, and mentorship to underserved and merit-based junior tennis players in the Northeast. Founded by Richard Bowie, a 18-year high-performance coach and USTA  Eastern Faculty Coach, the foundation bridges the gap between talent and opportunity, ensuring young athletes receive the resources they need to succeed. Our mission is to empower deserving junior players with high-level training, expert coaching, and essential resources, fostering champions who excel both on and off the court.</p>
<p className="md:text-2xl leading-relaxed text-xl font-light text-slate-300">It is a NJTL chapter of the <span className="text-gold font-medium">USTA Foundation</span>. Since its launch in 2020, the foundation has been providing juniors with not just tennis, but academic and emotional support. Now under the aegis of the Junior Tennis Foundation 501c3, we strive to make our organization even more impactful and stronger.</p>
<div className="pt-8">
<svg className="lucide lucide-quote mx-auto h-8 w-8 text-gold/50 stroke-[1.5] mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h3 className="text-lg font-medium text-white tracking-tight">Develop the character of youths through inclusiveness in tennis and education for a lifetime of success</h3>
</div>
</div>
</section>

<section className="bg-[#06212a] pt-24 pb-24" id="players">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6">Using Tennis as vehicle for success</h2>
<p className="text-lg text-slate-400" style={{}}>Your contributions provide access for underserved youths to world-class coaching, travel expenses for tournaments, and grass-root training in schools and parks.</p>
</div>
<a className="text-gold hover:text-white flex items-center gap-2 text-base font-medium transition-colors" href="#donate">
                    Meet all players <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
<img alt="Junior Player" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebdd756c-f2bf-47b9-8db7-cd54bad12611_800w.jpg" style={{}}/>
<div className="flex flex-col bg-gradient-to-t from-black/90 via-black/20 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-gold text-sm font-medium mb-1">Alumni</span>
<h3 className="text-2xl font-medium text-white tracking-tight">Ariana, 19</h3>
<p className="group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 text-sm text-slate-300 opacity-0 mt-2 translate-y-4">Former Top 30 Junior in the world. #1 USTA National ranking. U. Texas commit</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
<img alt="Junior Player" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6931ec24-7ec1-4542-86bd-da6b10a6b97c_800w.jpg" style={{}}/>
<div className="flex flex-col bg-gradient-to-t from-black/90 via-black/20 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-gold text-sm font-medium mb-1">5 Star Recruit</span>
<h3 className="text-2xl font-medium text-white tracking-tight">Gabrielle, 15</h3>
<p className="group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 text-sm text-slate-300 opacity-0 mt-2 translate-y-4">Now competing in ATP Challenger Tour thanks to early funding.</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
<img alt="Junior Player" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb8ecb8e-3313-4d71-a324-09b73e6bf2bb_800w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
<span className="text-gold text-sm font-medium mb-1">Brooklyn's Rising Star</span>
<h3 className="text-2xl font-medium text-white tracking-tight">Malajah, 15</h3>
<p className="group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 text-sm text-slate-300 opacity-0 mt-2 translate-y-4">Top 100 Nationally ranked G14s</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#051C24] border-white/5 border-t pt-24 pb-24">
<div className="grid md:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Where your donation goes</h2>
<p className="text-lg text-slate-400 mb-8">Tennis is one of the most least accessible sports in the North East, especially in the winter months. Public donations go directly to the athletes' development, training and support of the program.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-slate-800 p-3 rounded-lg text-gold">
<svg className="lucide lucide-plane h-6 w-6 stroke-[1.5]" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-white">Competition Expenses</h4>
<p className="text-slate-400">Flights and accommodation for ITF &amp; Grand Slam tournaments.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-slate-800 p-3 rounded-lg text-gold">
<svg className="lucide lucide-hand-helping lucide-activity stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="hand-helping" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(235, 179, 70)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"></path><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 13 6 6"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-white">Tennis Programs</h4>
<p className="text-slate-400">Creating tennis program access and coaches from grassroots to high performance players</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-slate-800 p-3 rounded-lg text-gold">
<svg className="lucide lucide-school lucide-heart-handshake stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="school" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(235, 179, 70)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 5v16"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 5v16"></path><circle cx="12" cy="9" r="2"></circle></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-white">Education &amp; Scholarships</h4>
<p className="text-slate-400">Rackets, strings, physiotherapy, and recovery support.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gold/10 rounded-full blur-3xl"></div>
<div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/5 shadow-2xl">
<h3 className="text-xl font-medium text-white mb-6">Annual Support Cost</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm text-slate-300">
<span className="">Competition Costs</span>
<span className="text-white font-medium">45%</span>
</div>
<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-gold h-full w-[45%]"></div>
</div>
<div className="flex justify-between items-center text-sm text-slate-300 pt-2">
<span className="">Tennis Programs &amp; Coaching</span>
<span className="text-white font-medium">35%</span>
</div>
<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-white h-full w-[35%]"></div>
</div>
<div className="flex justify-between items-center text-sm text-slate-300 pt-2">
<span className="">Education</span>
<span className="text-white font-medium">20%</span>
</div>
<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-slate-400 h-full w-[20%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="donate">
<div className="bg-gradient-to-r from-amber-600/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-6">Join The Cause. Support A Dream</h2>
<p className="text-xl text-slate-300 max-w-2xl mr-auto mb-10 ml-auto">Every donation brings a deserving child one step closer to realizing their dream, whether on court or in life.</p>
<div className="bg-[#082935] p-2 rounded-2xl inline-flex flex-col md:flex-row gap-2 border border-white/10 shadow-2xl">
<button className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white font-medium transition-colors text-lg">$50</button>
<button className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white font-medium transition-colors text-lg">$100</button>
<button className="px-8 py-4 rounded-xl bg-white/10 text-gold font-medium border border-gold/30 transition-colors text-lg">$250</button>
<button className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white font-medium transition-colors text-lg">Custom</button>
</div>
<div className="mt-10">
<button className="hover:bg-amber-400 transition-all duration-300 transform hover:scale-[1.02] text-lg font-medium text-[#051C24] rounded-full pt-4 pr-10 pb-4 pl-10 shadow-[0_0_20px_rgba(235,179,70,0.3)]">Donate via Venmo</button>
<p className="mt-4 text-sm text-slate-500">Secure payment. Tax deductible receipt provided.</p>
</div>
</div>
</section>

<footer className="bg-[#020d11] border-white/5 border-t pt-16 pb-16" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-trophy text-gold h-6 w-6 stroke-[1.5]" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-lg font-medium text-white tracking-tight">Pathway Tennis Foundation</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Supporting the next generation of tennis champions through mentorship, funding, and opportunity.
                    </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Foundation</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className=""><a className="hover:text-gold transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">Financials</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">Board of Directors</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">Junior Tennis Foundation</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Community</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className=""><a className="hover:text-gold transition-colors" href="#">Events</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">Alumni Stories</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">Partner with Us</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">contact@pathwaytennis.org</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Queens, New York</li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-white" href="#"><svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-white" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-white" href="#"><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p className="">© 2025 Pathway Tennis  Foundation. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
