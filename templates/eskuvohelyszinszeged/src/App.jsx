import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Smooth Parallax Effect for Hero Section
      document.addEventListener('DOMContentLoaded', () => {
          const bg = document.getElementById('parallax-bg');
          const content = document.getElementById('hero-content');
          let ticking = false;

          window.addEventListener('scroll', () => {
              if (!ticking) {
                  window.requestAnimationFrame(() => {
                      const scrolled = window.scrollY;

                      // Only calculate if within the first viewport height to save performance
                      if (scrolled <= window.innerHeight) {
                          if (bg) {
                              bg.style.transform = `translateY(${scrolled * 0.4}px)`;
                          }
                          if (content) {
                              content.style.transform = `translateY(${scrolled * 0.15}px)`;
                              content.style.opacity = 1 - (scrolled / window.innerHeight) * 1.5;
                          }
                      }
                      ticking = false;
                  });
                  ticking = true;
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center">
<a className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-stone-900 flex items-center gap-2" href="#">
<iconify-icon className="text-stone-400 text-2xl md:text-3xl" icon="lucide:flower-2"></iconify-icon>
<span className="italic">Tóparti</span>
              Birtok
            </a>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors" href="#birtok">
              A Birtok
            </a>
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors" href="#rolunk">
              Rólunk
            </a>
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors" href="#galeria">
              Galéria
            </a>
<a className="text-sm font-light text-stone-50 bg-stone-900 px-5 py-2.5 rounded-full hover:bg-stone-800 transition-colors" href="contact.html">
              Kapcsolatfelvétel
            </a>
</div>
<div className="md:hidden flex items-center">
<button className="text-stone-600 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">

<div className="absolute -top-[15%] left-0 w-full h-[130%] z-0 origin-top will-change-transform" id="parallax-bg">
<img alt="Esküvői asztal az erdőben" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-stone-900/40 z-10"></div>

<div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center mt-12 will-change-transform" id="hero-content">
<span className="text-xs font-medium uppercase tracking-widest text-stone-200 mb-6 drop-shadow-sm">
            Erdei Menedék &amp; Rendezvényhelyszín
          </span>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 max-w-4xl leading-tight drop-shadow-md">
            Ahol a természet békéje
            <br/>
<span className="italic text-stone-200 font-light">
              összeér a szerelemmel
            </span>
</h1>
<p className="text-base md:text-lg text-stone-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-sm">
            Egy festői birtok a város zajától távol, saját tóval és öreg fákkal.
            Kifinomult, mégis végtelenül barátságos környezet életed
            legfontosabb napjához.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="text-sm font-medium text-stone-900 bg-white/95 backdrop-blur-sm px-8 py-3.5 rounded-full hover:bg-white transition-all flex items-center justify-center gap-2" href="contact.html">
              Dátum egyeztetése
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce flex items-center justify-center">
<iconify-icon className="text-white/80 text-3xl drop-shadow-sm" icon="solar:round-arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 bg-stone-50/50" id="birtok">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-4">
              A Tóparti Birtok Varázsa
            </h2>
<p className="text-base text-stone-500 font-light max-w-2xl mx-auto">
              Minden részletet úgy alakítottunk ki, hogy tökéletes harmóniában
              legyen a minket körülölelő természettel.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#FDFCFB] border border-stone-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 text-stone-700">
<iconify-icon className="text-3xl" icon="solar:tree-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight text-stone-900 mb-3">
                Erdei Kápolna
              </h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                Mondjátok ki a boldogító igent az évszázados tölgyfák
                árnyékában, a madárcsicsergés kíséretében.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#FDFCFB] border border-stone-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 text-stone-700">
<iconify-icon className="text-3xl" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight text-stone-900 mb-3">
                Saját Horgásztó
              </h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                A kristálytiszta vizű tó partja lenyűgöző hátteret biztosít a
                fotózáshoz és a koccintáshoz.
              </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#FDFCFB] border border-stone-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 text-stone-700">
<iconify-icon className="text-3xl" icon="solar:wineglass-triangle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight text-stone-900 mb-3">
                Elegáns Rendezvénysátor
              </h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                Időjárástól független, fényfüzérekkel díszített, nyitott sátor,
                ahol hajnalig tarthat az ünneplés.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="rolunk">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-stone-100/50 rounded-3xl p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border border-stone-100">
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm relative z-10">
<img alt="Anna és Gábor, a tulajdonosok" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-200/50 rounded-full blur-2xl z-0"></div>
</div>
<div className="w-full lg:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-2 text-stone-400 mb-4">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">
                  Családi Vállalkozás
                </span>
</div>
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 mb-6 leading-tight">
                Köszöntünk a
                <br/>
<span className="italic text-stone-600">második otthonunkban</span>
</h2>
<p className="text-base text-stone-600 mb-5 font-light leading-relaxed">
                Kedves Házasulandók! Anna és Gábor vagyunk, a Tóparti Birtok
                megálmodói és házigazdái. Amikor rátaláltunk erre az erdei
                tisztásra, rögtön tudtuk: ez az a hely, ahol az emberek legszebb
                pillanatait szeretnénk vendégül látni.
              </p>
<p className="text-base text-stone-600 mb-8 font-light leading-relaxed">
                Számunkra ez a birtok nem csupán egy esküvői helyszín, hanem a
                szívügyünk. Nálunk nincsenek futószalagon érkező párok. Minden
                esküvőt személyesen kísérünk végig, őszinte baráti
                odafigyeléssel és azzal a törődéssel, mintha a saját
                családtagjainkat ünnepelnénk. Nálunk megnyugodhattok: ránk
                bízhatjátok a részleteket, nektek csak szeretni kell egymást.
              </p>
<div className="pt-6 border-t border-stone-200/60">
<p className="font-serif text-2xl italic text-stone-800 mb-1">
                  Anna &amp; Gábor
                </p>
<p className="text-xs text-stone-400 font-light uppercase tracking-widest">
                  A Birtok Alapítói
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="galeria">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-sm h-64 md:h-[34rem]">
<img alt="Esküvői részlet" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1769&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-sm h-32 md:h-64">
<img alt="Természetes dekoráció" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-sm h-32 md:h-64">
<img alt="Tóparti hangulat" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"/>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden shadow-sm h-32 md:h-64">
<img alt="Elegáns asztalterítés" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"/>
</div>
</div>
</div>
</section>
<section className="py-24 bg-stone-50/50" id="instagram">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-2 text-stone-400 mb-4">
<iconify-icon className="text-xl" icon="lucide:instagram"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">
                @topartibirtok
              </span>
</div>
<h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-4">
              Párok Pillanatai
            </h2>
<p className="text-base text-stone-500 font-light max-w-2xl mx-auto">
              Válogatás a legszebb közös emlékeinkből és a hozzánk látogató
              párok fotóiból, egyenesen az Instagramról.
            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
<a className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm block" href="#">
<img alt="Esküvői pillanat" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" icon="lucide:heart"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm block" href="#">
<img alt="Esküvői pillanat" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" icon="lucide:heart"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm block" href="#">
<img alt="Esküvői pillanat" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" icon="lucide:heart"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm block" href="#">
<img alt="Esküvői pillanat" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" icon="lucide:heart"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hidden lg:block" href="#">
<img alt="Esküvői pillanat" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" icon="lucide:heart"></iconify-icon>
</div>
</a>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-400 bg-white px-6 py-3 rounded-full transition-all" href="#">
<iconify-icon className="text-lg" icon="lucide:instagram"></iconify-icon>
              Kövess minket Instagramon
            </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 text-center rounded-t-[3rem] mt-10" id="kapcsolat">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<iconify-icon className="text-4xl text-stone-400 mb-6" icon="solar:letter-linear"></iconify-icon>
<h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-white mb-6">
            Kezdjük el a közös tervezést
          </h2>
<p className="text-sm md:text-base text-stone-400 font-light mb-10 max-w-xl mx-auto">
            Írjatok nekünk, és gyertek el egy kötetlen sétára a birtokon.
            Szívesen megmutatunk minden rejtett zugot, hogy érezzétek a hely
            varázsát.
          </p>
<a className="inline-block bg-white text-stone-900 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-stone-100 transition-colors" href="mailto:hello@topartibirtok.hu">
            hello@topartibirtok.hu
          </a>
</div>
</section>
</main>

<footer className="bg-stone-900 pt-10 pb-8 text-stone-400 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-stone-500 text-xl md:text-2xl" icon="lucide:flower-2"></iconify-icon>
<span className="italic">Tóparti</span>
          Birtok
        </div>
<div className="text-xs font-light text-center md:text-left flex flex-col md:flex-row gap-4">
<span>© 2023 Tóparti Birtok. Minden jog fenntartva.</span>
<span className="hidden md:inline text-stone-600">|</span>
<span>Városszéli Erdősor 1., Természetvédelmi Terület</span>
</div>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
