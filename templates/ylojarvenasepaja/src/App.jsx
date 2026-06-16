import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const langBtn = document.getElementById('lang-toggle');
            const currentLangSpan = document.getElementById('current-lang');
            let currentLang = 'fi'; // Default

            function updateLanguage() {
                const fiElements = document.querySelectorAll('.lang-fi');
                const enElements = document.querySelectorAll('.lang-en');

                if (currentLang === 'fi') {
                    fiElements.forEach(el => el.classList.remove('hidden'));
                    enElements.forEach(el => el.classList.add('hidden'));
                    currentLangSpan.textContent = 'FI';
                } else {
                    fiElements.forEach(el => el.classList.add('hidden'));
                    enElements.forEach(el => el.classList.remove('hidden'));
                    currentLangSpan.textContent = 'EN';
                }
            }

            langBtn.addEventListener('click', () => {
                currentLang = currentLang === 'fi' ? 'en' : 'fi';
                updateLanguage();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center text-orange-500 group-hover:border-orange-500/50 transition-colors">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight uppercase">Ylöjärven Asepaja</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#home">
<span className="lang-fi">Etusivu</span><span className="lang-en hidden">Home</span>
</a>
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#about">
<span className="lang-fi">Palvelut</span><span className="lang-en hidden">Services</span>
</a>
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#contact">
<span className="lang-fi">Yhteystiedot</span><span className="lang-en hidden">Contact</span>
</a>
</nav>

<div className="flex items-center gap-4">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-all" id="lang-toggle">
<iconify-icon icon="solar:globe-linear"></iconify-icon>
<span id="current-lang">FI</span>
</button>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 rounded bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors" href="https://ylojarvenasepaja.fi/?page_id=108">
<iconify-icon icon="solar:cart-large-2-linear" width="16"></iconify-icon>
<span className="lang-fi">Verkkokauppa</span><span className="lang-en hidden">Online Store</span>
</a>
</div>
</div>
</header>
<main className="relative z-10 flex-grow pt-24 pb-16">

<section className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32" id="home">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] uppercase tracking-widest font-mono mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="lang-fi">Ajankohtaista</span><span className="lang-en hidden">Latest Update</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
<span className="lang-fi">Korjaamme <span className="text-gradient">aseongelmat</span> sekä ongelma-aseet.</span>
<span className="lang-en hidden">We fix <span className="text-gradient">gun problems</span> and problem guns.</span>
</h1>
<p className="text-base text-zinc-400 leading-relaxed max-w-lg mb-8">
<span className="lang-fi">Ylöjärven Asepaja palvelee ammattitaidolla. Oiva hetki laittaa aseet ja asetarvikkeet kuntoon tulevaa kautta varten. Kalenterissa on tilaa uusille töille.</span>
<span className="lang-en hidden">Ylöjärven Asepaja serves with professional expertise. Now is the perfect time to get your guns and accessories ready for the upcoming season. We have openings for new work.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 px-6 py-3 rounded bg-orange-600 text-white text-sm font-medium hover:bg-orange-500 transition-all shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]" href="#contact">
<span className="lang-fi">Ota Yhteyttä</span><span className="lang-en hidden">Contact Us</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-6 py-3 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:border-zinc-700 hover:text-white transition-colors" href="https://ylojarvenasepaja.fi/?page_id=108">
<span className="lang-fi">Selaa Tuotteita</span><span className="lang-en hidden">Browse Products</span>
</a>
</div>
</div>

<div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-900/30 border border-white/5 rounded-2xl p-1 overflow-hidden card-glow">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="relative h-full w-full rounded-xl bg-[#050505]/80 backdrop-blur-sm p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-4xl text-white" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded">Est. 2006</span>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2">Mika Hiltunen</h3>
<p className="text-xs font-mono text-zinc-500 uppercase tracking-wide mb-4">
<span className="lang-fi">Aseseppä &amp; Koneinsinööri</span><span className="lang-en hidden">Gunsmith &amp; Engineer</span>
</p>
<div className="w-full h-px bg-zinc-800 mb-4"></div>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-fi">Aseiden korjaus &amp; huolto</span><span className="lang-en hidden">Gun repair &amp; maintenance</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-fi">Uudet &amp; käytetyt aseet</span><span className="lang-en hidden">New &amp; used firearms</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-fi">Patruunat &amp; tarvikkeet</span><span className="lang-en hidden">Ammo &amp; accessories</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="about">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-white mb-4 group-hover:bg-orange-600 transition-colors">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
<span className="lang-fi">Huolto &amp; Korjaus</span><span className="lang-en hidden">Service &amp; Repair</span>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<span className="lang-fi">Monipuoliset asesepän palvelut vankalla ammattitaidolla ja koneistusosaamisella.</span>
<span className="lang-en hidden">Comprehensive gunsmithing services with solid professional skills and machining expertise.</span>
</p>
</div>

<div className="group relative p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-white mb-4 group-hover:bg-orange-600 transition-colors">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
<span className="lang-fi">Asekauppa</span><span className="lang-en hidden">Gun Shop</span>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<span className="lang-fi">Myymme uusia ja käytettyjä aseita, patruunoita sekä metsästystarvikkeita.</span>
<span className="lang-en hidden">We sell new and used guns, ammunition, and hunting accessories.</span>
</p>
</div>

<div className="group relative p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-white mb-4 group-hover:bg-orange-600 transition-colors">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
<span className="lang-fi">Varaa Aika</span><span className="lang-en hidden">Book Time</span>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<span className="lang-fi">Toukokuulle mahtuu hyvin asesepän kalenteriin uusia töitä! Soita ja sovi aika.</span>
<span className="lang-en hidden">We have availability in May for new work! Call us to book an appointment.</span>
</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6" id="contact">
<div className="border-t border-zinc-800 pt-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<div className="text-[10px] font-mono text-orange-500 uppercase tracking-widest mb-2">
<span className="lang-fi">Yhteystiedot</span><span className="lang-en hidden">Contact Info</span>
</div>
<h2 className="text-3xl font-medium text-white mb-8">
<span className="lang-fi">Tule käymään pajalla</span><span className="lang-en hidden">Visit our workshop</span>
</h2>
<div className="space-y-6">

<div className="flex gap-4">
<div className="mt-1 text-zinc-400"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Ylöjärven Asepaja</h4>
<p className="text-sm text-zinc-400">Autotie 1, 33470 Ylöjärvi</p>
<p className="text-xs text-zinc-500 mt-1">Soppeenmäen teollisuusalue</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-zinc-400"><iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-white text-sm font-medium mb-1">
<span className="lang-fi">Puhelin</span><span className="lang-en hidden">Phone</span>
</h4>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="tel:0400835244">0400-835244</a>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-zinc-400"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-white text-sm font-medium mb-1">
<span className="lang-fi">Sähköposti</span><span className="lang-en hidden">Email</span>
</h4>
<a className="text-sm text-zinc-300 hover:text-white transition-colors break-all" href="mailto:mika.hiltunen@ylojarvenkonepaja.fi">mika.hiltunen@ylojarvenkonepaja.fi</a>
</div>
</div>
</div>

<div className="mt-10 flex gap-4">
<a className="w-10 h-10 rounded border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all" href="https://fi-fi.facebook.com/ylojarvenasepaja/" target="_blank">
<iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all" href="https://www.instagram.com/ylojarvenasepaja/" target="_blank">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="h-full min-h-[300px] w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl relative overflow-hidden group">

<div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901.8340277326887!2d23.56814511606555!3d61.55250444680199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf70a241777d%3A0xe53335e363994326!2sAutotie%201%2C%2033470%20Yl%C3%B6j%C3%A4rvi%2C%20Finland!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-[#050505] py-12 relative z-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-6">
<span className="text-xs text-zinc-600 font-mono">© 2024 Ylöjärven Asepaja</span>
<span className="hidden md:inline text-zinc-800">|</span>
<span className="text-xs text-zinc-600">Built with precision</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500/20 flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-green-500"></div>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<span className="lang-fi">Järjestelmät Toiminnassa</span><span className="lang-en hidden">Systems Operational</span>
</span>
</div>
</div>
</footer>



    </>
  );
}
