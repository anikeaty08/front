import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init Lucide Icons
      lucide.createIcons();

      // Mobile Menu Toggle
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');

      btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
      });

      // Intersection Observer for Fade-in animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.fade-in-section').forEach(section => {
          observer.observe(section);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed transition-all duration-300 bg-[#050507]/90 w-full border-[#d4af37]/20 border-b top-0 backdrop-blur-md z-[60]" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center">

<img alt="APS Elite Logo" className="w-auto h-24 max-w-xs max-h-48 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81f1c8e6-0e3e-4f64-a601-3318fe6b0bc0_320w.png"/>

</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium hover:text-[#d4af37] transition-colors duration-300" href="#hero">
                Home
              </a>
<a className="text-sm font-medium hover:text-[#d4af37] transition-colors duration-300" href="#chi-siamo">
                Chi Siamo
              </a>
<a className="text-sm font-medium hover:text-[#d4af37] transition-colors duration-300" href="#cosa-facciamo">
                Cosa Facciamo
              </a>
<a className="hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium" href="#metodo">
                Metodo
              </a>
<a className="text-sm font-medium hover:text-[#d4af37] transition-colors duration-300" href="#eventi">
                Eventi
              </a>
<a className="px-5 py-2 text-sm font-medium text-[#050507] bg-[#d4af37] hover:bg-[#cfa349] transition-all rounded-sm" href="#contatti">
                Contatti
              </a>
</div>
</div>

<div className="md:hidden">
<button className="text-[#f5f0e8] hover:text-[#d4af37] p-2" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#050507] border-b border-[#d4af37]/20" id="mobile-menu">
<div className="px-4 pt-2 pb-8 space-y-1 sm:px-3 flex flex-col items-center">
<a className="block px-3 py-3 text-base font-medium hover:text-[#d4af37]" href="#hero">
            Home
          </a>
<a className="block px-3 py-3 text-base font-medium hover:text-[#d4af37]" href="#chi-siamo">
            Chi Siamo
          </a>
<a className="block px-3 py-3 text-base font-medium hover:text-[#d4af37]" href="#cosa-facciamo">
            Cosa Facciamo
          </a>
<a className="block px-3 py-3 text-base font-medium hover:text-[#d4af37]" href="#metodo">
            Metodo
          </a>
<a className="block px-3 py-3 text-base font-medium hover:text-[#d4af37]" href="#eventi">
            Eventi
          </a>
<a className="mt-4 block px-6 py-3 text-base font-medium text-[#050507] bg-[#d4af37]" href="#contatti">
            Contatti
          </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 text-center overflow-hidden" id="hero">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514306191717-452245255e0c?q=80&amp;w=2800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="bg-gradient-to-b from-[#050507] via-transparent to-[#050507] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center fade-in-section is-visible w-full">

<div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">

<h1 className="md:text-5xl lg:text-6xl leading-tight text-3xl text-[#f5f0e8] tracking-tight font-serif">Benessere, Voce e
  Corpo <br/> <span className="text-[#d4af37]">al servizio dello Spettacolo</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-[#f5f0e8]/80 max-w-2xl">APS ELITE – Eventi &amp; Formazione organizza corsi, workshop e progetti dedicati ad artisti, performer e professionisti che vogliono esprimere il proprio potenziale in modo sano e consapevole.</p>
<div className="flex flex-col sm:flex-row gap-5 mt-4">
<a className="px-8 py-4 bg-[#d4af37] text-[#050507] text-base font-medium uppercase tracking-wider hover:bg-[#cfa349] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)]" href="#cosa-facciamo">
              Scopri i percorsi
            </a>
<a className="px-8 py-4 border border-[#d4af37] text-[#d4af37] text-base font-medium uppercase tracking-wider hover:bg-[#d4af37] hover:text-[#050507] transition-colors" href="#contatti">
              Richiedi info
            </a>
</div>
</div>

<div className="relative hidden lg:block w-full h-[600px] group">
<div className="absolute inset-0 bg-[#d4af37]/10 rounded-sm transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<img alt="Performance Art" className="group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover border-[#d4af37]/20 border rounded-sm relative shadow-2xl grayscale" src="https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="md:py-32 text-[#111111] bg-[#f5f0e8] pt-24 pb-24" id="chi-siamo">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-section">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-[#050507] mb-8 tracking-tight uppercase border-l-4 border-[#d4af37] pl-6">
              Chi Siamo
            </h2>
<p className="text-lg leading-relaxed text-[#111111]/80 mb-6 font-light">
<strong className="font-medium text-[#050507]">
                APS ELITE – Eventi &amp; Formazione
              </strong>
              è un’Associazione di Promozione Sociale che riunisce
              professionisti del benessere, della voce e dello spettacolo:
              osteopati, naturopati, posturologi, logopedisti, operatori
              olistici, coach e formatori.
            </p>
<p className="text-lg leading-relaxed text-[#111111]/80 font-light">
              Nasciamo per diffondere una nuova cultura del benessere nel mondo
              dello spettacolo, integrando corpo, voce, psiche ed emozioni per
              performance di alto livello che rispettino la salute della
              persona.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="group p-6 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors shadow-sm bg-white">
<svg className="lucide lucide-layers w-8 h-8 text-[#d4af37] mb-4 stroke-[1.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="font-serif text-xl mb-2 text-[#050507]">
                Approccio Integrato
              </h3>
<p className="text-sm text-[#111111]/70">
                Corpo, voce, emozioni e stile di vita in un unico percorso.
              </p>
</div>

<div className="group p-6 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors shadow-sm bg-white">
<svg className="lucide lucide-mic-2 w-8 h-8 text-[#d4af37] mb-4 stroke-[1.5]" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
<h3 className="font-serif text-xl mb-2 text-[#050507]">
                Formazione Scenica
              </h3>
<p className="text-sm text-[#111111]/70">
                Corsi e workshop mirati per le esigenze del performer.
              </p>
</div>

<div className="group p-6 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors shadow-sm bg-white">
<svg className="lucide lucide-handshake w-8 h-8 text-[#d4af37] mb-4 stroke-[1.5]" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<h3 className="font-serif text-xl mb-2 text-[#050507]">
                Collaborazioni
              </h3>
<p className="text-sm text-[#111111]/70">
                Partner di festival, scuole e accademie artistiche.
              </p>
</div>

<div className="group p-6 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors shadow-sm bg-white">
<svg className="lucide lucide-trending-up w-8 h-8 text-[#d4af37] mb-4 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="font-serif text-xl mb-2 text-[#050507]">
                Crescita Continua
              </h3>
<p className="text-sm text-[#111111]/70">
                Percorsi individuali e di gruppo per l'eccellenza.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050507] relative" id="cosa-facciamo">

<div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e8] mb-16 text-center tracking-tight uppercase">
<span className="border-b border-[#d4af37] pb-2">Cosa Facciamo</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-section">

<div className="group relative bg-[#111111] p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<svg className="lucide lucide-graduation-cap w-10 h-10 text-[#f5f0e8] mb-6 stroke-[1.5]" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<h3 className="text-2xl font-serif text-[#d4af37] mb-4">
              Eventi Formativi
            </h3>
<ul className="space-y-3 text-[#f5f0e8]/70 text-sm font-light">
<li className="flex gap-x-2 gap-y-2 items-start">
<span className="text-[#d4af37] mt-1">•</span>
                Igiene vocale e uso consapevole
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Postura, respirazione, movimento
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Gestione stress ed emozioni
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Psicosomatica per la performance
              </li>
</ul>
</div>

<div className="group relative bg-[#111111] p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<svg className="lucide lucide-star w-10 h-10 text-[#f5f0e8] mb-6 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<h3 className="text-2xl font-serif text-[#d4af37] mb-4">
              Progetti Speciali
            </h3>
<ul className="space-y-3 text-[#f5f0e8]/70 text-sm font-light">
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Collaborazioni con festival e teatri
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Spazi benessere durante eventi
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Formazione per cast e staff
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Consulenza artistica integrata
              </li>
</ul>
</div>

<div className="group relative bg-[#111111] p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<svg className="lucide lucide-user-check w-10 h-10 text-[#f5f0e8] mb-6 stroke-[1.5]" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-2xl font-serif text-[#d4af37] mb-4">
              Per Professionisti
            </h3>
<ul className="space-y-3 text-[#f5f0e8]/70 text-sm font-light">
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Per cantanti, attori, speaker
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Presenza scenica ed energia
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Recupero e prevenzione infortuni
              </li>
<li className="flex items-start gap-2">
<span className="text-[#d4af37] mt-1">•</span>
                Percorsi individuali one-to-one
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#f5f0e8] text-[#111111]" id="metodo">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
<h2 className="text-3xl md:text-4xl font-serif text-[#050507] mb-6 tracking-tight uppercase">
            Il Nostro Metodo
          </h2>
<p className="text-lg text-[#111111]/70 font-light">
            Un approccio integrato che si prende cura della persona prima,
            durante e dopo la performance.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 fade-in-section">

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37]">
<svg className="lucide lucide-activity w-10 h-10 stroke-[1.5]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#050507]">Corpo</h3>
<p className="text-sm text-[#111111]/70 leading-relaxed px-4">
              Postura, respirazione, trattamenti manuali e movimento
              consapevole.
            </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37]">
<svg className="lucide lucide-mic w-10 h-10 stroke-[1.5]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#050507]">Voce</h3>
<p className="text-sm text-[#111111]/70 leading-relaxed px-4">
              Educazione vocale, prevenzione del sovraccarico ed esercizi
              pratici.
            </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37]">
<svg className="lucide lucide-brain-circuit w-10 h-10 stroke-[1.5]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#050507]">
              Psiche &amp; Emozioni
            </h3>
<p className="text-sm text-[#111111]/70 leading-relaxed px-4">
              Gestione dell’ansia da performance e consapevolezza emotiva.
            </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 text-[#d4af37]">
<svg className="lucide lucide-sun w-10 h-10 stroke-[1.5]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#050507]">
              Stile di Vita
            </h3>
<p className="text-sm text-[#111111]/70 leading-relaxed px-4">
              Abitudini, ritmi circadiani, recupero e prevenzione a 360°.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050507] border-t border-[#d4af37]/10" id="eventi">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e8] mb-16 tracking-tight uppercase border-l-4 border-[#d4af37] pl-6">
          Eventi in Evidenza
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-in-section">

<div className="flex flex-col md:flex-row bg-[#111111] border border-[#d4af37]/20 group hover:border-[#d4af37] transition-all">
<div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
<img alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8 w-full md:w-2/3 flex flex-col justify-between">
<div>
<span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-2 block">
                  Workshop Intensivo
                </span>
<h3 className="text-2xl font-serif text-[#f5f0e8] mb-3">
                  Corpo, Voce e Psicosomatica
                </h3>
<p className="text-[#f5f0e8]/70 text-sm font-light mb-6">
                  Un viaggio teorico-pratico per artisti e professionisti dello
                  spettacolo. Esplora le connessioni tra postura, emissione
                  vocale e gestione dello stress.
                </p>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-[#f5f0e8]/50 flex items-center gap-1">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  2 Giorni
                </span>
<a className="text-[#d4af37] text-sm font-medium hover:underline flex items-center gap-1" href="#contatti">
                  Info
                  <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row bg-[#111111] border border-[#d4af37]/20 group hover:border-[#d4af37] transition-all">
<div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
<img alt="Masterclass" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 w-full md:w-2/3 flex flex-col justify-between">
<div>
<span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-2 block">
                  Masterclass
                </span>
<h3 className="text-2xl font-serif text-[#f5f0e8] mb-3">
                  Respirazione per la Scena
                </h3>
<p className="text-[#f5f0e8]/70 text-sm font-light mb-6">
                  Tecniche avanzate di respirazione diaframmatica e gestione
                  dell'ansia prima del "Chi è di scena". Rivolto ad attori e
                  speaker.
                </p>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-[#f5f0e8]/50 flex items-center gap-1">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  4 Ore
                </span>
<a className="text-[#d4af37] text-sm font-medium hover:underline flex items-center gap-1" href="#contatti">
                  Info
                  <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#f5f0e8] text-[#111111]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-serif text-[#050507] mb-12 text-center tracking-tight uppercase">
          Il Team ELITE
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 fade-in-section">

<div className="flex flex-col items-center">
<div className="w-40 h-40 rounded-full border-2 border-[#d4af37] p-1 mb-6">
<img alt="Team Member" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg font-medium text-[#050507]">
              Giulia Rossi
            </h3>
<span className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">
              Logopedista Artistica
            </span>
<p className="text-sm text-center text-[#111111]/70 font-light">
              Specializzata in igiene vocale per cantanti e attori
              professionisti.
            </p>
</div>

<div className="flex flex-col items-center">
<div className="w-40 h-40 rounded-full border-2 border-[#d4af37] p-1 mb-6">
<img alt="Team Member" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg font-medium text-[#050507]">
              Marco Bianchi
            </h3>
<span className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">
              Osteopata
            </span>
<p className="text-sm text-center text-[#111111]/70 font-light">
              Focus su postura scenica e sblocchi diaframmatici.
            </p>
</div>

<div className="flex flex-col items-center">
<div className="w-40 h-40 rounded-full border-2 border-[#d4af37] p-1 mb-6">
<img alt="Team Member" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg font-medium text-[#050507]">
              Elena Verdi
            </h3>
<span className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">
              Vocal Coach
            </span>
<p className="text-sm text-center text-[#111111]/70 font-light">
              Esperta in tecnica vocale moderna e interpretazione.
            </p>
</div>

<div className="flex flex-col items-center">
<div className="w-40 h-40 rounded-full border-2 border-[#d4af37] p-1 mb-6">
<img alt="Team Member" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg font-medium text-[#050507]">
              Alessandro Neri
            </h3>
<span className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">
              Mental Coach
            </span>
<p className="text-sm text-center text-[#111111]/70 font-light">
              Supporto per la gestione dell'ansia e la peak performance.
            </p>
</div>
</div>
<p className="text-center text-lg italic font-serif text-[#111111]/60 mt-12">
          "Competenze diverse, un’unica visione: il benessere di chi lavora sul
          palco."
        </p>
</div>
</section>

<section className="py-0 grid grid-cols-1 md:grid-cols-2">

<div className="bg-[#111111] px-8 py-20 lg:px-20 border-r border-[#333]">
<h3 className="font-serif text-2xl text-[#f5f0e8] mb-4">
          Partecipa ai nostri corsi
        </h3>
<p className="text-[#f5f0e8]/70 mb-8 font-light leading-relaxed">
          Vuoi migliorare voce, corpo e benessere mentre lavori nello
          spettacolo? Scrivici per ricevere il calendario aggiornato e capire il
          percorso adatto a te.
        </p>
<a className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5f0e8] transition-colors uppercase tracking-wider text-sm font-medium" href="#contatti">
          Richiedi info corsi
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-[#0a0a0c] px-8 py-20 lg:px-20">
<h3 className="font-serif text-2xl text-[#f5f0e8] mb-4">
          Collabora con noi
        </h3>
<p className="text-[#f5f0e8]/70 mb-8 font-light leading-relaxed">
          Se sei un festival, una scuola di musica o recitazione, un’accademia o
          un teatro, progettiamo insieme spazi benessere per i tuoi artisti.
        </p>
<a className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5f0e8] transition-colors uppercase tracking-wider text-sm font-medium" href="#contatti">
          Proponi collaborazione
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050507] relative overflow-hidden" id="contatti">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#d4af37]"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 fade-in-section">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e8] mb-4 tracking-tight uppercase">
            Contatti
          </h2>
<p className="text-[#f5f0e8]/60 font-light">
            Siamo a tua disposizione per informazioni e preventivi
            personalizzati.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div className="text-center">
<div className="w-12 h-12 mx-auto bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
<svg className="lucide lucide-mail text-[#d4af37] w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<p className="text-[#f5f0e8] font-medium">Email</p>
<a className="text-[#f5f0e8]/60 text-sm hover:text-[#d4af37] transition-colors" href="mailto:info@eliteeventieformazione.it">
              info@eliteeventieformazione.it
            </a>
</div>
<div className="text-center">
<div className="w-12 h-12 mx-auto bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
<svg className="lucide lucide-phone text-[#d4af37] w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<p className="text-[#f5f0e8] font-medium">Telefono / WhatsApp</p>
<span className="text-[#f5f0e8]/60 text-sm">+39 333 1234567</span>
</div>
<div className="text-center">
<div className="w-12 h-12 mx-auto bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
<svg className="lucide lucide-instagram text-[#d4af37] w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<p className="text-[#f5f0e8] font-medium">Social</p>
<a className="text-[#f5f0e8]/60 text-sm hover:text-[#d4af37] transition-colors" href="#">
              @aps_elite
            </a>
</div>
</div>

<form className="space-y-8 bg-[#111111] p-8 md:p-12 border border-[#d4af37]/20 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<input className="peer w-full bg-transparent border-b text-[#f5f0e8] py-2 px-0 focus:outline-none focus:border-[#d4af37] transition-colors placeholder-transparent border-gray-700" id="name" placeholder="Nome" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-[#d4af37] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#d4af37] peer-focus:text-xs" htmlFor="name">
                Nome e Cognome
              </label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b text-[#f5f0e8] py-2 px-0 focus:outline-none focus:border-[#d4af37] transition-colors placeholder-transparent border-gray-700" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-[#d4af37] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#d4af37] peer-focus:text-xs" htmlFor="email">
                Email
              </label>
</div>
</div>
<div className="relative pt-4">
<label className="block text-xs text-[#d4af37] mb-2 uppercase tracking-wide">
              Motivo del contatto
            </label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border rounded-full checked:bg-[#d4af37] checked:border-[#d4af37] transition-all border-gray-600" name="subject" type="radio"/>
<span className="text-sm text-[#f5f0e8]/70 group-hover:text-[#f5f0e8]">
                  Info Corsi &amp; Workshop
                </span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border rounded-full checked:bg-[#d4af37] checked:border-[#d4af37] transition-all border-gray-600" name="subject" type="radio"/>
<span className="text-sm text-[#f5f0e8]/70 group-hover:text-[#f5f0e8]">
                  Info Eventi
                </span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border rounded-full checked:bg-[#d4af37] checked:border-[#d4af37] transition-all border-gray-600" name="subject" type="radio"/>
<span className="text-sm text-[#f5f0e8]/70 group-hover:text-[#f5f0e8]">
                  Proposta Collaborazione
                </span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border rounded-full checked:bg-[#d4af37] checked:border-[#d4af37] transition-all border-gray-600" name="subject" type="radio"/>
<span className="text-sm text-[#f5f0e8]/70 group-hover:text-[#f5f0e8]">
                  Altro
                </span>
</label>
</div>
</div>
<div className="relative">
<textarea className="peer w-full bg-transparent border-b text-[#f5f0e8] py-2 px-0 focus:outline-none focus:border-[#d4af37] transition-colors placeholder-transparent border-gray-700" id="message" placeholder="Messaggio" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-[#d4af37] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#d4af37] peer-focus:text-xs" htmlFor="message">
              Messaggio
            </label>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 border rounded bg-transparent checked:bg-[#d4af37] checked:border-[#d4af37] appearance-none cursor-pointer border-gray-600" id="privacy" type="checkbox"/>
<label className="text-xs text-[#f5f0e8]/50 leading-tight cursor-pointer" htmlFor="privacy">
              Ho letto e accetto l'informativa sulla privacy ai sensi del
              Regolamento UE 2016/679.
            </label>
</div>
<button className="w-full sm:w-auto px-10 py-4 bg-[#d4af37] hover:bg-[#cfa349] text-[#050507] font-medium uppercase tracking-widest transition-all text-sm mt-4" type="submit">
            Invia Messaggio
          </button>
</form>
</div>
</section>

<footer className="bg-[#050507] border-t border-[#d4af37]/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">

<img alt="APS Elite Logo Small" className="w-64 h-auto mb-8 opacity-90 object-contain" src="https://placehold.co/600x200/050507/d4af37/png?text=ELITE+LOGO"/>
<div className="text-[#f5f0e8]/40 text-sm text-center space-y-2 font-light mb-8">
<p>Sede Legale: Via delle Arti 12, Roma (RM)</p>
<p>C.F. 97812345678</p>
</div>
<div className="flex gap-6 text-xs text-[#f5f0e8]/30 uppercase tracking-wide">
<a className="hover:text-[#d4af37] transition-colors" href="#">Statuto</a>
<a className="hover:text-[#d4af37] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#d4af37] transition-colors" href="#">
            Cookie Policy
          </a>
</div>
<div className="mt-12 w-full border-t border-[#f5f0e8]/5 pt-8 text-center text-[#f5f0e8]/20 text-xs">
          © 2023 APS Elite. Tutti i diritti riservati.
        </div>
</div>
</footer>



    </>
  );
}
