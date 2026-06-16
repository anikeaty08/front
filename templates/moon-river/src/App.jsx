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
          // Chat Widget Toggle
          const chatToggleBtn = document.getElementById('chatToggleBtn');
          const chatCloseBtn = document.getElementById('chatCloseBtn');
          const chatWindow = document.getElementById('chatWindow');

          function toggleChat() {
              const isClosed = chatWindow.classList.contains('scale-0');
              if (isClosed) {
                  chatWindow.classList.remove('scale-0', 'opacity-0');
                  chatWindow.classList.add('scale-100', 'opacity-100');
                  chatToggleBtn.classList.add('scale-0', 'opacity-0');
              } else {
                  chatWindow.classList.add('scale-0', 'opacity-0');
                  chatWindow.classList.remove('scale-100', 'opacity-100');
                  chatToggleBtn.classList.remove('scale-0', 'opacity-0');
              }
          }

          chatToggleBtn.addEventListener('click', toggleChat);
          chatCloseBtn.addEventListener('click', toggleChat);

          // Form Submit handler
          const form = document.querySelector('form');
          if(form) {
              form.addEventListener('submit', (e) => {
                  e.preventDefault();
                  const btn = form.querySelector('button[type="submit"]');
                  const originalText = btn.innerText;
                  btn.innerText = 'Odesílá se...';

                  setTimeout(() => {
                      btn.innerText = 'Zpráva úspěšně odeslána';
                      btn.classList.add('bg-[#C5A059]', 'text-[#08100c]');
                      btn.classList.remove('text-[#E6D5B8]');
                      form.reset();

                      setTimeout(() => {
                          btn.innerText = originalText;
                          btn.classList.remove('bg-[#C5A059]', 'text-[#08100c]');
                          btn.classList.add('text-[#E6D5B8]');
                      }, 3000);
                  }, 1500);
              });
          }

          // Intersection Observer for Animations
          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-4');
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1 });

          document.querySelectorAll('.observe-me').forEach((elem) => {
              observer.observe(elem);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="fixed w-full top-0 z-40 transition-all duration-300 bg-[#08100c]/60 backdrop-blur-md border-b border-[#C5A059]/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center border border-[#C5A059]/30 rounded-sm bg-gradient-to-br from-[#1A2E26] to-[#0a140f] overflow-hidden shadow-[0_4px_15px_rgba(197,160,89,0.1)]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-lg text-[#C5A059] font-normal tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{fontFamily: '\'Cinzel\', serif'}}>
              MR
            </span>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-[#E6D5B8] text-sm tracking-[0.2em] uppercase leading-none mb-1 font-light" style={{fontFamily: '\'Cinzel\', serif'}}>
              Moon River
            </span>
<span className="text-[#C5A059] text-xs tracking-[0.3em] uppercase leading-none opacity-80 font-extralight">
              Villa Resort
            </span>
</div>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase text-[#C2B294] font-light">
<a className="hover:text-[#C5A059] transition-colors duration-300" href="#projekt">
            Úvod
          </a>
<a className="hover:text-[#C5A059] transition-colors duration-300" href="#video-sekce">
            Video
          </a>
<a className="hover:text-[#C5A059] transition-colors duration-300" href="#informace">
            Informace
          </a>
<a className="hover:text-[#C5A059] transition-colors duration-300" href="#galerie">
            Galerie
          </a>
</div>

<div className="hidden md:flex items-center space-x-8">

<div className="flex items-center space-x-2 text-sm tracking-widest uppercase text-[#C2B294] font-light">
<a className="text-[#C5A059] hover:text-[#C5A059] transition-colors" href="#">
              CS
            </a>
<span className="opacity-20">|</span>
<a className="hover:text-[#C5A059] transition-colors" href="#">EN</a>
<span className="opacity-20">|</span>
<a className="hover:text-[#C5A059] transition-colors" href="#">DE</a>
<span className="opacity-20">|</span>
<a className="hover:text-[#C5A059] transition-colors" href="#">NL</a>
</div>

<a className="uppercase tracking-widest border border-[#C5A059] bg-transparent text-[#E6D5B8] hover:bg-[#C5A059] hover:text-[#08100c] transition-colors duration-400 px-6 py-2.5 rounded-none text-sm inline-block font-light" href="#kontakt">
            Kontakt
          </a>
</div>

<button className="md:hidden text-[#E6D5B8] hover:text-[#C5A059] transition-colors flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-10" id="projekt">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 mix-blend-screen" loop="" muted="" playsinline="">
<source src="https://drive.google.com/uc?export=download&amp;id=1uTcw-Cy-X26QDIG6oMdPvl69GtJvNa7q" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-[#050a07] via-transparent to-[#0a140f]/50 z-10 pointer-events-none"></div>
<div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(197,160,89,0.15)_0%,rgba(8,16,12,0)_60%)] rounded-full pointer-events-none z-10"></div>

<div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<div className="observe-me opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full">
<h2 className="text-sm tracking-widest uppercase text-[#C5A059] mb-6 flex items-center justify-center space-x-4 font-light">
<span className="w-12 h-px bg-[#C5A059]/50"></span>
<span>Autentická paměť krajiny</span>
<span className="w-12 h-px bg-[#C5A059]/50"></span>
</h2>
<h1 className="tracking-tight text-5xl md:text-7xl lg:text-8xl font-light mb-8" style={{fontFamily: '\'Playfair Display\', serif', background: 'linear-gradient(180deg, #E6D5B8 0%, rgba(197,160,89,0.9) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 10px 40px rgba(197, 160, 89, 0.3)'}}>
            Moon River
          </h1>
<p className="text-[#C2B294] text-base md:text-lg mb-12 max-w-xl mx-auto font-extralight leading-[2.2]">
            Exkluzivní dlouhodobý pronájem. Váš ostrov v přírodě s garantovanou
            opcí 5+5 let. Spojení absolutního soukromí a prémiového servisu.
          </p>
</div>

<div className="w-full max-w-4xl mx-auto mt-4 observe-me opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out relative group" id="video-sekce">
<div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/0 via-[#C5A059]/10 to-[#C5A059]/0 rounded-sm blur opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C5A059]/20 group-hover:border-[#C5A059]/40 transition-colors duration-500 bg-[#1A2E26]">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full border-0 block absolute inset-0" src="https://drive.google.com/file/d/1uTcw-Cy-X26QDIG6oMdPvl69GtJvNa7q/preview"></iframe>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16 observe-me opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out w-full">
<a className="w-full sm:w-auto uppercase tracking-widest border border-[#C5A059] text-[#E6D5B8] hover:bg-[#C5A059] hover:text-[#08100c] transition-colors duration-400 px-10 py-4 text-sm text-center inline-block font-light" href="#kontakt">
            Poptat pronájem
          </a>
</div>
</div>
</header>

<section className="py-[120px] lg:py-[180px] relative" id="informace">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-[800px] mx-auto text-center mb-24 observe-me opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#E6D5B8] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Investice do klidu
          </h2>
<div className="w-px h-16 bg-gradient-to-b from-[#C5A059] to-transparent mx-auto mb-8"></div>
<p className="text-[#C2B294] text-base md:text-lg font-extralight leading-[2.2]">
            „Vyměňte anonymitu davu za komunitu, která dýchá s vámi.“
            <br/>
<br/>
            Skutečný domov netvoří jen stěny, ale lidé kolem. Moon River jsme
            navrhli pro ty, kteří už mají dost městského shonu a neosobních
            vztahů. Malý počet rezidencí zaručuje, že se zde nebudete cítit jako
            v hotelu, ale jako v uzavřeném přístavu, kde se lidé zdraví úsměvem
            a znají své příběhy.
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 relative z-10">

<div className="group p-12 rounded-sm border hover:border-[#C5A059]/30 transition-all duration-500 observe-me opacity-0 translate-y-8 delay-100 ease-out relative overflow-hidden bg-[#0a140f]/40 backdrop-blur-md border-[#C5A059]/10 hover:bg-[#0a140f]/60 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500" icon="solar:calendar-linear"></iconify-icon>
<h3 className="tracking-widest uppercase text-sm text-[#E6D5B8] mb-4 font-light">
              Garantovaný pronájem
            </h3>
<p className="text-sm text-[#C2B294] leading-[2.2] font-extralight">
              Garantovaná opce na 5+5 let. Váš pěti letý pronajem si muzete o
              dalsich 5 let prodloužit.
            </p>
</div>

<div className="group p-12 rounded-sm border hover:border-[#C5A059]/30 transition-all duration-500 observe-me opacity-0 translate-y-8 delay-200 ease-out relative overflow-hidden mt-0 lg:mt-12 bg-[#0a140f]/40 backdrop-blur-md border-[#C5A059]/10 hover:bg-[#0a140f]/60 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500" icon="solar:map-point-linear"></iconify-icon>
<h3 className="tracking-widest uppercase text-sm text-[#E6D5B8] mb-4 font-light">
              Unikátní lokalita
            </h3>
<p className="text-sm text-[#C2B294] leading-[2.2] font-extralight">
              Lojzova Paseka, Frymburk. Ostrov v přírodě obklopený šumavskými
              lesy s přímým přístupem k vodě.
            </p>
</div>

<div className="group p-12 rounded-sm border hover:border-[#C5A059]/30 transition-all duration-500 observe-me opacity-0 translate-y-8 delay-300 ease-out relative overflow-hidden bg-[#0a140f]/40 backdrop-blur-md border-[#C5A059]/10 hover:bg-[#0a140f]/60 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="tracking-widest uppercase text-sm text-[#E6D5B8] mb-4 font-light">
              Kompletní servis
            </h3>
<p className="text-sm text-[#C2B294] leading-[2.2] font-extralight">
              Bezstarostná údržba, úklid a péče o pozemek v režii
              profesionálního týmu resortu.
            </p>
</div>
</div>
</div>
</section>

<section className="py-[120px] lg:py-[180px] bg-black/10" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 observe-me opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="max-w-[500px]">
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#E6D5B8] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Galerie Prostorů
            </h2>
<p className="text-[#C2B294] text-base font-extralight">
              Prohlédněte si detaily architektury a zasazení vil do šumavské
              krajiny.
            </p>
</div>
<div className="mt-8 md:mt-0">
<a className="text-sm tracking-widest uppercase text-[#C5A059] hover:text-[#E6D5B8] transition-colors flex items-center space-x-2 font-light" href="#">
<span>Zobrazit vše</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 observe-me opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer bg-[#0a140f]/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#C5A059]/10">
<img alt="Exteriér Vily" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050a07] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<span className="text-sm tracking-widest uppercase text-[#E6D5B8] font-light">
                Exteriér
              </span>
<div className="w-0 h-px bg-[#C5A059] mt-2 group-hover:w-full transition-all duration-500"></div>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer md:mt-16 bg-[#0a140f]/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#C5A059]/10">
<img alt="Společenská zóna" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050a07] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<span className="text-sm tracking-widest uppercase text-[#E6D5B8] font-light">
                Interiér
              </span>
<div className="w-0 h-px bg-[#C5A059] mt-2 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[120px] lg:py-[180px] relative overflow-hidden" id="kontakt">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16">

<div className="lg:w-5/12 observe-me opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="text-sm tracking-widest uppercase text-[#C5A059] mb-4 font-light">
            Kontaktujte nás
          </h2>
<h3 className="text-4xl md:text-5xl font-light tracking-tight text-[#E6D5B8] mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Začněte svůj příběh
          </h3>
<p className="text-[#C2B294] text-base font-extralight leading-[2.2] mb-12">
            Máte zájem o podrobnější informace nebo si přejete sjednat osobní
            schůzku? Vyplňte formulář a náš concierge tým se vám obratem ozve.
          </p>
<div className="space-y-6">
<a className="flex items-center space-x-4 text-[#C2B294] hover:text-[#C5A059] transition-colors group" href="mailto:info@villa-moonriver.cz">
<div className="w-12 h-12 rounded-full border border-[#C2B294]/20 group-hover:border-[#C5A059] flex items-center justify-center transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm tracking-widest uppercase font-light">
                info@villa-moonriver.cz
              </span>
</a>
<div className="flex items-center space-x-4 text-[#C2B294]">
<div className="w-12 h-12 rounded-full border border-[#C2B294]/20 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm leading-[2.2] font-extralight">
                Lojzova Paseka, Frymburk
                <br/>
                382 26 Horní Planá, CZ
              </span>
</div>
</div>
</div>

<div className="lg:w-7/12 backdrop-blur-sm p-8 md:p-12 border rounded-sm observe-me opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out bg-[#0a140f]/40 border-[#C5A059]/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
<form action="#" className="space-y-8" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative">
<input className="w-full bg-transparent border-0 border-b border-[#C5A059]/30 text-[#E6D5B8] py-3 text-sm rounded-none focus:ring-0 focus:border-[#C5A059] focus:shadow-[0_1px_0_0_#C5A059] transition-all peer" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-3 text-sm text-[#C2B294]/50 tracking-widest uppercase font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C5A059] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C5A059]" htmlFor="name">
                  Jméno a příjmení
                </label>
</div>

<div className="relative">
<input className="w-full bg-transparent border-0 border-b border-[#C5A059]/30 text-[#E6D5B8] py-3 text-sm rounded-none focus:ring-0 focus:border-[#C5A059] focus:shadow-[0_1px_0_0_#C5A059] transition-all peer" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-3 text-sm text-[#C2B294]/50 tracking-widest uppercase font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C5A059] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C5A059]" htmlFor="email">
                  E-mailová adresa
                </label>
</div>
</div>

<div className="relative">
<input className="w-full bg-transparent border-0 border-b border-[#C5A059]/30 text-[#E6D5B8] py-3 text-sm rounded-none focus:ring-0 focus:border-[#C5A059] focus:shadow-[0_1px_0_0_#C5A059] transition-all peer" id="phone" name="phone" placeholder=" " type="tel"/>
<label className="absolute left-0 top-3 text-sm text-[#C2B294]/50 tracking-widest uppercase font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C5A059] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C5A059]" htmlFor="phone">
                Telefonní číslo (volitelné)
              </label>
</div>

<div className="relative mt-12">
<textarea className="w-full bg-transparent border-0 border-b border-[#C5A059]/30 text-[#E6D5B8] py-3 text-sm rounded-none focus:ring-0 focus:border-[#C5A059] focus:shadow-[0_1px_0_0_#C5A059] transition-all resize-none peer" id="message" name="message" placeholder=" " required="" rows="4"></textarea>
<label className="absolute left-0 top-3 text-sm text-[#C2B294]/50 tracking-widest uppercase font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C5A059] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C5A059]" htmlFor="message">
                Vaše zpráva
              </label>
</div>
<button className="w-full mt-8 uppercase tracking-widest border border-[#C5A059] text-[#E6D5B8] hover:bg-[#C5A059] hover:text-[#08100c] transition-colors duration-400 px-10 py-4 text-sm text-center block font-light" type="submit">
              Odeslat zprávu
            </button>
</form>
</div>
</div>
</section>

<footer className="border-t py-16 bg-[#08100c]/80 border-[#C5A059]/10 backdrop-blur-md relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
<div className="mb-8 md:mb-0">
<a className="flex flex-col items-center md:items-start group mb-4" href="#">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center border border-[#C5A059]/30 rounded-sm bg-gradient-to-br from-[#1A2E26] to-[#0a140f] overflow-hidden">
<span className="text-sm text-[#C5A059] font-normal tracking-widest" style={{fontFamily: '\'Cinzel\', serif'}}>
                  MR
                </span>
</div>
<span className="text-xl tracking-[0.15em] font-light text-[#E6D5B8]" style={{fontFamily: '\'Cinzel\', serif'}}>
                MOON RIVER
              </span>
</div>
</a>
<p className="text-xs text-[#C2B294] tracking-widest uppercase font-light">
            Villa Resort
          </p>
<p className="text-xs text-[#C2B294]/50 mt-6 font-extralight">
            © 2024 Moon River Resort. Všechna práva vyhrazena.
          </p>
</div>
<div className="flex space-x-6 text-[#C2B294]">
<a className="hover:text-[#C5A059] transition-colors flex items-center justify-center" href="#">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="hover:text-[#C5A059] transition-colors flex items-center justify-center" href="#">
<iconify-icon className="text-xl" icon="mdi:facebook"></iconify-icon>
</a>
</div>
</div>
</footer>

<button className="fixed bottom-8 right-8 w-14 h-14 bg-[#1A2E26] border border-[#C5A059]/50 text-[#C5A059] rounded-full shadow-[0_10px_30px_rgba(26,46,38,0.3)] flex items-center justify-center z-50 hover:bg-[#C5A059] hover:text-[#08100c] transition-all duration-500 group" id="chatToggleBtn">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:chat-round-linear"></iconify-icon>
</button>

<div className="fixed bottom-28 right-8 w-[350px] rounded-sm shadow-2xl z-50 overflow-hidden transform transition-all duration-500 scale-0 opacity-0 origin-bottom-right flex flex-col border border-[#C5A059]/20 bg-[#0a140f]/95 backdrop-blur-md" id="chatWindow" style={{height: '500px'}}>

<div className="bg-[#162720] border-b border-[#C5A059]/10 text-[#E6D5B8] p-5 flex justify-between items-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex items-center space-x-3 relative z-10">
<div className="w-8 h-8 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] bg-[#1A2E26]">
<iconify-icon className="text-base" icon="solar:infinity-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-light tracking-widest uppercase text-[#E6D5B8]">
              EMA AI 4.0
            </h4>
<p className="text-xs text-[#C2B294]/60 font-extralight">
              Inteligentní průvodce
            </p>
</div>
</div>
<button className="text-[#C2B294] hover:text-[#C5A059] transition-colors relative z-10 flex items-center justify-center" id="chatCloseBtn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 p-5 overflow-y-auto flex flex-col space-y-5 text-sm">

<div className="flex items-start max-w-[90%] observe-me opacity-0 translate-y-4 transition-all duration-700 ease-out">
<div className="w-6 h-6 rounded-full bg-[#162720] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center flex-shrink-0 mt-1 mr-3">
<span className="text-xs tracking-widest font-light">E</span>
</div>
<div className="bg-[#162720] border border-[#E6D5B8]/5 p-4 rounded-sm text-[#C2B294] font-extralight leading-[2.2] text-sm shadow-sm">
            Vítejte v Moon River. Jsem EMA, vaše spojení s historií i komfortem
            tohoto místa. Čím mohu posloužit?
          </div>
</div>
</div>

<div className="p-4 bg-[#162720] border-t border-[#C5A059]/10">
<div className="relative">
<input className="w-full bg-[#21352C] border border-[#E6D5B8]/10 text-sm rounded-sm py-3 pl-4 pr-12 focus:outline-none focus:border-[#C5A059]/50 transition-colors text-[#E6D5B8] placeholder-[#C2B294]/40 font-light" placeholder="Zeptejte se Emy..." type="text"/>
<button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-transparent text-[#C5A059] hover:text-[#E6D5B8] flex items-center justify-center transition-colors">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>


    </>
  );
}
