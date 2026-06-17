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
      
addEventListener('DOMContentLoaded', () => lucide.createIcons());



const quotes = [
  {text:"Az első hónapban 30%-kal nőtt a forgalmunk. A riportok átláthatók és a csapat mindig elérhető.",author:"Szabó Anna – Roast&Brew"},
  {text:"Minden kampányuk kreatív, mégis adatvezérelt. Imádom, hogy értenek a kávé nyelvén!",author:"Kovács Dániel – Bean Bar"},
  {text:"A remarketingük igazi vendég-visszahozó gépezet. A befektetésünk többszörösen megtérült.",author:"Novák Laura – Presszó25"},
  {text:"Baristaként fontos volt, hogy a marketinges partner értse a szakmát. Megtaláltuk!",author:"Tóth Bence – Crema Café"},
  {text:"A heti A/B teszteknek hála folyamatos a fejlődés. Profi munka!",author:"Farkas Petra – Arabica Art"},
  {text:"Nem csak hirdetnek: stratégiát építenek. A csomagjaink minden fillért megérnek.",author:"Nagy Lili – Latte Lounge"},
  {text:"Már az első konzultáció során tudtam, hogy ők lesznek a partnereink. És nem csalódtunk.",author:"Kiss Gergő – Piknik Presszó"},
  {text:"Kreatív vizuálok, pontos targetálás, és finom kávé a meetingeken – mi kell még?",author:"Horváth Júlia – Brew&Bite"},
  {text:"A legjobb rész: real-time dashboardon látom az eredményeket. Átlátható és inspiráló.",author:"Balogh Márk – Mocha Mornings"}
];

addEventListener('DOMContentLoaded',() => {
  const track=document.getElementById('testimonialTrack');
  const template=document.getElementById('testimonialTemplate');
  quotes.forEach(q=>{
    const node=template.content.cloneNode(true);
    node.querySelector('p').textContent=q.text;
    node.querySelector('div.text-sm').textContent=q.author;
    track.appendChild(node);
  });

  const carousel=document.getElementById('testimonialCarousel');
  const prevBtn=document.getElementById('prevTestimonial');
  const nextBtn=document.getElementById('nextTestimonial');

  function scrollAmount(){ return carousel.clientWidth * 0.8; }
  prevBtn.addEventListener('click',()=>carousel.scrollBy({left:-scrollAmount(),behavior:'smooth'}));
  nextBtn.addEventListener('click',()=>carousel.scrollBy({left:scrollAmount(),behavior:'smooth'}));

  // keyboard support
  carousel.setAttribute('tabindex','0');
  carousel.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'){ nextBtn.click(); }
    if(e.key==='ArrowLeft'){ prevBtn.click(); }
  });
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
      


<div aria-hidden="true" className="fixed -z-10 inset-0 overflow-hidden">
<div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-[#FFB87A] opacity-30 blur-[180px]"></div>
<div className="absolute bottom-10 right-0 md:right-24 w-[540px] h-[540px] rounded-full bg-[#FF7033] opacity-20 blur-[220px]"></div>
</div>

<header className="fixed top-0 left-0 w-full z-30 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<a className="text-xl font-semibold" href="#" style={{fontFamily: '\'Lora\', serif'}}>Coffee Growth</a>
<nav className="hidden md:flex gap-10 text-sm items-center">
<a className="hover:opacity-70 transition" href="#services">Szolgáltatások</a>
<a className="hover:opacity-70 transition" href="#pricing">Csomagok</a>
<a className="hover:opacity-70 transition" href="#contact">Kapcsolat</a>
<a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#121212] text-white hover:bg-[#373737] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#121212]" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i> Konzultáció
      </a>
</nav>
</div>
</header>

<section className="relative min-h-[680px] flex flex-col-reverse md:flex-row items-center justify-center pt-28 md:pt-44 lg:pt-36">
<div className="w-full md:w-1/2 px-6 md:px-10 lg:px-16 space-y-8">
<h1 className="text-[42px] md:text-[56px] lg:text-[68px] leading-tight font-semibold" style={{fontFamily: '\'Lora\', serif'}}>Brew your next <span className="text-[#FF7033]">growth</span></h1>
<p className="text-base md:text-lg max-w-md">Adat-vezérelt marketing kávézóknak – forgalomnövelés, amely épp olyan friss, mint a reggeli espresso.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button aria-label="Ingyenes konzultáció" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF7033] text-white font-medium hover:bg-[#e45e27] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7033]">
<i className="w-5 h-5" data-lucide="phone-call"></i> Ingyenes konzultáció
      </button>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#121212] text-[#121212] font-medium hover:bg-[#121212] hover:text-white transition" href="#pricing">
<i className="w-5 h-5" data-lucide="arrow-right"></i> Csomagok
      </a>
</div>
</div>
<div className="w-full md:w-1/2 flex items-center justify-center px-6">
<img alt="Friss kávé latte art" className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl hover:scale-[1.03] transition" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</section>
<div className="max-w-7xl mx-auto px-6"><hr className="border-[#E6E6E8]"/></div>

<section className="py-24" id="services">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold text-center mb-20" style={{fontFamily: '\'Lora\', serif'}}>Miért velünk?</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
<div className="group relative p-10 bg-white border border-[#E7E7EA] rounded-3xl shadow-sm hover:shadow-md transition">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121212] text-white mb-6">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h3 className="text-lg font-medium mb-3" style={{fontFamily: '\'Lora\', serif'}}>Célzott stratégia</h3>
<p className="text-sm leading-relaxed">Nem hasraütés, hanem adatalapú döntések, így a költés minden forintja megtérül.</p>
<span className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#121212]/10"></span>
</div>
<div className="group relative p-10 bg-white border border-[#E7E7EA] rounded-3xl shadow-sm hover:shadow-md transition">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121212] text-white mb-6">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium mb-3" style={{fontFamily: '\'Lora\', serif'}}>Folyamatos optimalizálás</h3>
<p className="text-sm leading-relaxed">Heti A/B tesztek, kampányfinomhangolás és átlátható riportok.</p>
<span className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#121212]/10"></span>
</div>
<div className="group relative p-10 bg-white border border-[#E7E7EA] rounded-3xl shadow-sm hover:shadow-md transition">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121212] text-white mb-6">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<h3 className="text-lg font-medium mb-3" style={{fontFamily: '\'Lora\', serif'}}>Kávézó-szakértők</h3>
<p className="text-sm leading-relaxed">Csapatunk baristákból és marketingesekből áll – tudjuk, mire van szükséged.</p>
<span className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#121212]/10"></span>
</div>
</div>
</div>
</section>

<section className="py-24" id="story">
<div className="max-w-5xl mx-auto px-6 text-center space-y-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style={{fontFamily: '\'Lora\', serif'}}>
      A kávé mögött rejlő történet
    </h1>
<h2 className="text-2xl md:text-3xl font-medium" style={{fontFamily: '\'Lora\', serif'}}>
      Szenvedélyből született marketing
    </h2>
<p className="max-w-3xl mx-auto text-base md:text-lg">
      Mielőtt ügynökséggé váltunk, mindannyian kávéimádók voltunk. Tapasztalatunkat kávézóláncok menedzselésében,
      barista versenyeken és digitális kampányokban szedtük össze. Ma ezt az egyedi kombinációt használjuk arra,
      hogy a Te kávézód is megtalálja hűséges vendégeit – azoknak az aromáknak és élményeknek köszönhetően,
      amelyek miatt mi is beleszerettünk a kávé világába.
    </p>
</div>
</section>

<section className="py-24" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-4xl md:text-5xl font-semibold" style={{fontFamily: '\'Lora\', serif'}}>Vélemények</h2>
<div className="flex gap-4">
<button aria-label="Előző" className="p-3 rounded-full border border-[#D7D7DB] hover:bg-[#F0F0F3] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7033]" id="prevTestimonial">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button aria-label="Következő" className="p-3 rounded-full border border-[#D7D7DB] hover:bg-[#F0F0F3] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7033]" id="nextTestimonial">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="overflow-hidden" id="testimonialCarousel">
<div className="flex gap-6 transition-transform duration-500" id="testimonialTrack">

<template id="testimonialTemplate">
<div className="w-full md:w-1/2 lg:w-1/3 shrink-0">
<div className="h-full flex flex-col p-8 border border-[#E7E7EA] rounded-3xl bg-white shadow-sm">
<svg aria-hidden="true" className="w-6 h-6 text-[#E2E2E5]" viewbox="0 0 24 24">
<path d="M7.17 6.17a4 4 0 1 1 5.66 5.66L8 16H4v-4l3.17-5.83ZM19.17 6.17a4 4 0 1 1 5.66 5.66L20 16h-4v-4l3.17-5.83Z" fill="currentColor"></path>
</svg>
<p className="mt-4 mb-6 text-sm leading-relaxed grow">quoteText</p>
<div className="text-sm font-medium" style={{fontFamily: '\'Lora\', serif'}}>quoteAuthor</div>
</div>
</div>
</template>

</div>
</div>
</div>
</section>


<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E7E7EA] to-transparent"></div>

<section className="py-24 bg-[#FBFBFD]" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold text-center mb-20" style={{fontFamily: '\'Lora\', serif'}}>Csomagok</h2>
<div className="grid lg:grid-cols-3 gap-10">
<div className="relative bg-white border border-[#E7E7EA] rounded-3xl p-12 flex flex-col space-y-8 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-medium" style={{fontFamily: '\'Lora\', serif'}}>Alap</h3>
<p className="text-4xl font-semibold text-[#121212]">39 000 Ft</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FF7033]" data-lucide="check"></i> Landing oldal</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FF7033]" data-lucide="check"></i> Google Ads</li>
</ul>
<button className="mt-auto w-full py-4 rounded-full bg-[#FF7033] text-white font-medium hover:bg-[#e45e27] transition">Kérem</button>
<span className="absolute inset-0 rounded-3xl border border-transparent hover:border-[#121212]/10"></span>
</div>
<div className="relative bg-[#121212] text-white rounded-3xl p-12 flex flex-col space-y-8 shadow-lg hover:shadow-xl transition">
<h3 className="text-xl font-medium" style={{fontFamily: '\'Lora\', serif'}}>Profi</h3>
<p className="text-4xl font-semibold">79 000 Ft</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FFB87A]" data-lucide="check"></i> Landing + hirdetések</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FFB87A]" data-lucide="check"></i> Facebook &amp; Instagram</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FFB87A]" data-lucide="check"></i> Remarketing</li>
</ul>
<button className="mt-auto w-full py-4 rounded-full bg-white text-[#121212] font-medium hover:bg-[#F1F1F2] transition">Kérem</button>
<span className="absolute inset-0 rounded-3xl border border-transparent hover:border-white/10"></span>
</div>
<div className="relative bg-white border border-[#E7E7EA] rounded-3xl p-12 flex flex-col space-y-8 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-medium" style={{fontFamily: '\'Lora\', serif'}}>Prémium</h3>
<p className="text-4xl font-semibold text-[#121212]">129 000 Ft</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FF7033]" data-lucide="check"></i> Teljes menedzsment</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FF7033]" data-lucide="check"></i> A/B tesztek</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#FF7033]" data-lucide="check"></i> 24/7 riport</li>
</ul>
<button className="mt-auto w-full py-4 rounded-full bg-[#FF7033] text-white font-medium hover:bg-[#e45e27] transition">Kérem</button>
<span className="absolute inset-0 rounded-3xl border border-transparent hover:border-[#121212]/10"></span>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-6"><hr className="border-[#E6E6E8]"/></div>

<section className="relative py-24" id="contact">
<div aria-hidden="true" className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&amp;fit=crop&amp;w=1200&amp;q=60"/>
<div className="absolute inset-0 bg-[#121212]/70"></div>
</div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
<div className="text-white space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold" style={{fontFamily: '\'Lora\', serif'}}>Lépjünk kapcsolatba</h2>
<p className="max-w-sm">Töltsd ki az űrlapot, és 24 órán belül visszahívunk.</p>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4" data-lucide="phone"></i> +36 30 123 4567</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4" data-lucide="mail"></i> hello@coffeegrowth.hu</div>
</div>
<form aria-label="Ajánlatkérő űrlap" className="space-y-4 bg-white/70 backdrop-blur-sm p-10 rounded-3xl">
<div>
<label className="block text-sm font-medium mb-1" htmlFor="name">Név</label>
<input className="w-full border border-[#D1D1D6] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF7033]/20 focus:border-[#FF7033]" id="name" placeholder="Név" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-1" htmlFor="email">E-mail</label>
<input className="w-full border border-[#D1D1D6] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF7033]/20 focus:border-[#FF7033]" id="email" placeholder="E-mail" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-1" htmlFor="message">Üzenet</label>
<textarea className="w-full border border-[#D1D1D6] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF7033]/20 focus:border-[#FF7033]" id="message" placeholder="Üzenet" rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-full bg-[#FF7033] text-white font-medium hover:bg-[#e45e27] transition" type="submit">Küldés</button>
</form>
</div>
</section>

<footer className="py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#6C6C70]">
<p>© 2024 Coffee Growth</p>
<div className="flex gap-6">
<a className="hover:opacity-70" href="#">Adatkezelés</a>
<a className="hover:opacity-70" href="#">Impresszum</a>
</div>
</div>
</footer>

    </>
  );
}
