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
      

<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-georgia text-xl tracking-tight text-white group-hover:text-[#CC9A18] transition-colors duration-300">
                    EMERGE US
                </span>
</a>

<nav className="hidden md:block">
<ul className="flex items-center space-x-8 text-sm font-normal">
<li><a className="text-[#B9B9B9] hover:text-white hover:underline decoration-[#CC9A18] underline-offset-[6px] transition-all duration-200" href="#">Home</a></li>
<li><a className="text-[#B9B9B9] hover:text-white hover:underline decoration-[#CC9A18] underline-offset-[6px] transition-all duration-200" href="#">About Us</a></li>
<li><a className="text-[#B9B9B9] hover:text-white hover:underline decoration-[#CC9A18] underline-offset-[6px] transition-all duration-200" href="#">Event</a></li>
<li><a className="text-[#CC9A18] underline decoration-[#CC9A18] underline-offset-[6px]" href="#">Prior Events</a></li>
<li><a className="text-[#B9B9B9] hover:text-white hover:underline decoration-[#CC9A18] underline-offset-[6px] transition-all duration-200" href="#">Contact</a></li>
</ul>
</nav>

<button className="md:hidden text-[#B9B9B9] hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-grow">

<section className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
<span className="inline-block text-[#CC9A18] uppercase tracking-[0.15em] text-xs font-medium mb-6">
                Prior Events
            </span>
<h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-10 font-normal">
                Angela L Harris urges Africans to “make Africa great every day”, not only during Black History Month
            </h1>
<div className="flex justify-center">
<div className="h-[1px] w-16 bg-[#CC9A18] opacity-80"></div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-16">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-[#141414] border border-white/5 shadow-2xl">
<img alt="Angela L Harris speaking" className="w-full h-full object-cover object-top opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</section>

<article className="max-w-[800px] mx-auto px-6 text-lg font-light leading-[1.7] space-y-8 pb-16">
<p>The US-based educator and faith leader Professor Angela L Harris has challenged Africans and the global diaspora to treat Black history as a daily responsibility rather than a once-a-year commemoration.</p>
<p>Delivering the keynote address at the Black History Month Summit at the W E B Du Bois Memorial Centre for Pan-African Culture in Accra, Harris emphasised cultural pride, youth empowerment and sustained investment in education as pillars of Africa’s renewal.</p>
<blockquote className="border-l-[3px] border-[#CC9A18] bg-[#141414] py-6 px-8 my-12 rounded-r-lg">
<p className="font-georgia italic text-xl md:text-2xl text-white/90 leading-relaxed tracking-tight m-0">
                    “Black history is not one time of the year,” she said. “Black history is every single day.”
                </p>
</blockquote>
<p>Harris, who leads multiple educational and humanitarian initiatives across the diaspora, described Africa as the origin of global black identity and urged participants to reject negative stereotypes historically attached to blackness.</p>
<blockquote className="border-l-[3px] border-[#CC9A18] bg-[#141414] py-6 px-8 my-12 rounded-r-lg">
<p className="font-georgia italic text-xl md:text-2xl text-white/90 leading-relaxed tracking-tight m-0">
                    “Black is beautiful,” she said. “We are melanated people with many expressions, but we all come from the motherland.”
                </p>
</blockquote>
<h2 className="font-georgia text-3xl text-white tracking-tight mt-16 mb-6 font-normal">
                Shape the narrative
            </h2>
<p>She highlighted the role of education and leadership development through youth-focused programmes, including the Humanity Intellectual Academy and College in Ghana, where young people are being trained, she said, to understand history, culture and civic responsibility.</p>
<p>According to Harris, empowering young Africans to speak, lead and shape narratives is critical to the continent’s future.</p>
<blockquote className="border-l-[3px] border-[#CC9A18] bg-[#141414] py-6 px-8 my-12 rounded-r-lg">
<p className="font-georgia italic text-xl md:text-2xl text-white/90 leading-relaxed tracking-tight m-0">
                    “Let the youth lead us into the light,” she said. “We must pour into our people as a whole and make Africa great again through action, not just words.”
                </p>
</blockquote>
<p>Her remarks capped a series of speeches at the Black History Month Summit exploring Pan-Africanism, heritage preservation and the role of the diaspora in Africa’s development.</p>
</article>

<section className="max-w-[800px] mx-auto px-6 mb-24">
<div className="border-t border-white/10 pt-10 text-base font-light text-[#888888] space-y-6">
<p>Asaase Broadcasting Company airs on Asaase 99.5 Accra, Asaase 98.5 Kumasi, Asaase 99.7 Tamale, Asaase 100.3 Cape Coast, AsaasePa 107.3 (Accra).</p>
<p>Affiliates: Bawku FM 101.5, Bead FM 99.9 (Bimbilla), Mining City Radio 89.5 (Tarkwa), Nandom FM 101.9, Nyatefe Radio 94.5 (Dzodze), Sissala Radio 96.3 (Tumu), Somuaa FM 89.9 (Gushegu), Stone City 90.7 (Ho) and Wale FM 106.9 (Walewale).</p>
<p>Listen online: asaaseradio.com, Sound Garden and TuneIn.</p>
<div className="space-y-2 pt-4">
<p className="text-[#B9B9B9] font-normal">Follow us:</p>
<p>X: @asaaseradio995, @Asaase985ksi, @Asaase997tamale, @asaase1003, asaasepa1073</p>
<p>Instagram: asaaseradio99.5, asaase985ksi, asaase100.3, asaase99.7tamale, asaasepa107.3</p>
<p>LinkedIn: company/asaaseradio995. TikTok: @asaaseradio99.5</p>
<p>Facebook: asaase99.5, asaase985ksi, Asaase100.3, asaase99.7, AsaasePa107.3.</p>
<p>YouTube: AsaaseRadioXtra.</p>
</div>
<div className="pt-4 border-t border-white/5 space-y-2">
<p>Join the conversation. Accra: call 020 000 9951/054 888 8995, WhatsApp 020 000 0995. Kumasi: call 059 415 7985 or call/WhatsApp 020 631 5260</p>
<p className="text-[#CC9A18] mt-4 flex gap-3">
<span>#AsaaseRadio</span>
<span>#AsaasePa</span>
<span>#TheVoiceofOurLand</span>
</p>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] border-t border-[#CC9A18]/30 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">

<div className="col-span-1 md:col-span-2">
<span className="font-georgia text-2xl tracking-tight text-white mb-4 block">
                        EMERGE US
                    </span>
<p className="text-sm text-[#888888] max-w-sm font-light leading-relaxed">
                        Connecting the diaspora, shaping the narrative, and building a stronger future through dialogue and action.
                    </p>
</div>

<div>
<h3 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">Navigation</h3>
<ul className="space-y-3 text-sm font-light text-[#B9B9B9]">
<li><a className="hover:text-[#CC9A18] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#CC9A18] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#CC9A18] transition-colors" href="#">Event</a></li>
<li><a className="hover:text-[#CC9A18] transition-colors" href="#">Prior Events</a></li>
<li><a className="hover:text-[#CC9A18] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h3 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">Connect</h3>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B9B9B9] hover:bg-[#CC9A18] hover:text-black transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B9B9B9] hover:bg-[#CC9A18] hover:text-black transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B9B9B9] hover:bg-[#CC9A18] hover:text-black transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B9B9B9] hover:bg-[#CC9A18] hover:text-black transition-all duration-300" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="text-center text-xs text-[#888888] font-light flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Emerge US Conference. All rights reserved.</p>
<div className="flex space-x-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
