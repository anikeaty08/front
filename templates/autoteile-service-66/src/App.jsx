import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // 1. Toast Notification System
      function showToast(message) {
        const container = document.getElementById('toast-container');
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'glass-panel px-6 py-4 rounded-xl flex items-center gap-3 text-white shadow-2xl border-l-4 border-[#9D0E0E] min-w-[300px] toast-enter pointer-events-auto';
        
        toast.innerHTML = `
            <iconify-icon icon="solar:check-circle-bold" class="text-[#9D0E0E] text-xl"></iconify-icon>
            <span class="font-medium text-sm">${message}</span>
        `;

        container.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('toast-enter');
            toast.classList.add('toast-exit');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
      }

      // 2. Page Routing Logic
      function showPage(pageId) {
        // Hide all pages
        const pages = document.querySelectorAll('.page-section');
        pages.forEach((page) => {
          page.classList.add('hidden');
          // Reset scroll animations when leaving (optional, good for demo)
        });

        // Show target page
        const target = document.getElementById('page-' + pageId);
        if (target) {
          target.classList.remove('hidden');
          window.scrollTo(0, 0);
          
          // Trigger animations
          setTimeout(() => {
             // Reset animations for fresh entry look if desired, 
             // or just let them stay visible if handled by scroll observer
          }, 50);
        }

        // Update Navigation State
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if(link.getAttribute('data-target') === pageId) {
                link.classList.add('active');
                link.classList.remove('text-neutral-400');
                link.classList.add('text-white');
            } else {
                link.classList.remove('active');
                link.classList.add('text-neutral-400');
                link.classList.remove('text-white');
            }
        });
      }

      // 3. Scroll Animation Observer
      document.addEventListener('DOMContentLoaded', () => {
        // Initialize default page (Home) active state
        showPage('home');

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe elements on all pages (even hidden ones, though they trigger when visible)
        // We might need to re-observe when pages change, but for a simple DOM structure this usually works
        const observeElements = () => {
             document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
        };
        
        observeElements();
        
        // Re-run observation slightly after page changes just in case
        const navButtons = document.querySelectorAll('button[onclick^="showPage"]');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(observeElements, 100);
            });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl glass-panel rounded-2xl shadow-2xl transition-all duration-300">
<div className="flex h-16 w-full items-center justify-between px-6">

<button className="flex gap-x-3 items-center group focus:outline-none" onclick="showPage('home')">
<div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#9D0E0E] text-white shadow-[0_0_15px_rgba(157,14,14,0.4)] group-hover:bg-[#b01010] transition-colors">
<iconify-icon icon="solar:wheel-angle-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium text-white tracking-tight font-space uppercase">
            ATC Cologne
          </span>
</button>

<nav className="hidden lg:flex items-center gap-8">
<button className="nav-link relative text-sm font-normal text-neutral-400 hover:text-white transition-colors py-1" data-target="home" onclick="showPage('home')">
            Home
          </button>
<button className="nav-link relative text-sm font-normal text-neutral-400 hover:text-white transition-colors py-1" data-target="about" onclick="showPage('about')">
            Über uns
          </button>
<button className="nav-link relative text-sm font-normal text-neutral-400 hover:text-white transition-colors py-1" data-target="filialen" onclick="showPage('filialen')">
            Filialen
          </button>
<button className="nav-link relative text-sm font-normal text-neutral-400 hover:text-white transition-colors py-1" data-target="angebote" onclick="showPage('angebote')">
            Angebote
          </button>
<button className="nav-link relative text-sm font-normal text-neutral-400 hover:text-white transition-colors py-1" data-target="service" onclick="showPage('service')">
            Service
          </button>
<button className="nav-link relative text-sm font-normal text-neutral-400 hover:text-white transition-colors py-1" data-target="kontakt" onclick="showPage('kontakt')">
            Kontakt
          </button>
</nav>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-neutral-400 hover:text-red-400 transition-colors text-sm" href="tel:+492211234567">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="tracking-tight">02237 / 979 550</span>
</a>
<button className="bg-[#9D0E0E] hover:bg-[#b01010] text-white px-4 py-2 rounded-lg text-sm font-normal transition-all shadow-[0_0_20px_-5px_rgba(157,14,14,0.5)] border border-red-900/50" onclick="showPage('filialen'); showToast('Filiale auswählen um fortzufahren')">
            Filiale finden
          </button>

<button className="lg:hidden text-neutral-300 ml-2" onclick="showToast('Mobiles Menü wird in der Demo nicht erweitert.')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex-grow relative w-full overflow-hidden">

<main className="page-section w-full transition-opacity duration-500" id="page-home">

<section className="relative min-h-screen flex items-center justify-center pt-20">

<div className="absolute inset-0 z-0">
<img alt="Workshop" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="hero-glow absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-red-400 text-sm mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#9D0E0E]"></span>
</span>
              Kompetenz an 3 Standorten im Rheinland
            </div>
<h1 className="reveal-on-scroll text-5xl md:text-7xl font-medium text-white tracking-tight font-space mb-6 leading-[1.1]">
              Mobilität sichern.
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#9D0E0E] to-red-800">
                Qualität erleben.
              </span>
</h1>
<p className="reveal-on-scroll text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Ihr Experte für hochwertige Autoteile und professionellen Service.
              Originalteile, Zubehör und persönliche Beratung in Köln, Kerpen
              und Bergheim.
            </p>
<div className="reveal-on-scroll flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2" onclick="showPage('angebote')">
                Angebote ansehen
                <iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon>
</button>
<button className="bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-700 text-white px-8 py-4 rounded-xl font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2 group" onclick="showPage('kontakt')">
                Kontakt aufnehmen
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:border-[#9D0E0E]/30 transition-colors group reveal-on-scroll">
<div className="w-12 h-12 bg-neutral-800/50 rounded-lg flex items-center justify-center mb-6 text-[#9D0E0E] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white mb-3 font-space font-medium">
                  Original Qualität
                </h3>
<p className="text-neutral-400 leading-relaxed">
                  Wir führen ausschließlich zertifizierte Markenteile und
                  Erstausrüsterqualität für maximale Sicherheit.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-[#9D0E0E]/30 transition-colors group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-neutral-800/50 rounded-lg flex items-center justify-center mb-6 text-[#9D0E0E] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white mb-3 font-space font-medium">
                  Express Verfügbarkeit
                </h3>
<p className="text-neutral-400 leading-relaxed">
                  Über 95% aller gängigen Verschleißteile sofort ab Lager oder
                  binnen 24 Stunden verfügbar.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-[#9D0E0E]/30 transition-colors group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-neutral-800/50 rounded-lg flex items-center justify-center mb-6 text-[#9D0E0E] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white mb-3 font-space font-medium">
                  Experten Beratung
                </h3>
<p className="text-neutral-400 leading-relaxed">
                  Unser Team besteht aus KFZ-Profis. Wir finden das passende
                  Teil für Ihr Fahrzeugmodell.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 reveal-on-scroll">
<span className="text-[#9D0E0E] font-medium tracking-wide uppercase text-sm mb-4 block">Aktuelles Angebot</span>
<h2 className="text-4xl text-white font-space font-medium mb-6 tracking-tight">
                Bereit für den Winter?
              </h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Sichern Sie sich jetzt unser Winter-Sicherheits-Paket. Batteriecheck, Frostschutz und Licht-Test zum Aktionspreis. Nur für kurze Zeit in allen Filialen.
              </p>
<button className="text-white border-b border-[#9D0E0E] pb-1 hover:text-red-400 transition-colors flex items-center gap-2 w-fit" onclick="showPage('angebote')">
                Alle Angebote ansehen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 relative w-full h-80 rounded-2xl overflow-hidden reveal-on-scroll">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&amp;w=2831&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<div className="text-white text-2xl font-space font-medium">Winter Check</div>
<div className="text-red-400">statt 49€ nur 29€</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden w-full pt-32 transition-opacity duration-500" id="page-about">
<section className="max-w-4xl mx-auto px-6 text-center mb-16">
<h1 className="text-4xl md:text-5xl text-white font-space font-medium mb-6">
            Tradition &amp; Fortschritt
          </h1>
<p className="text-xl text-neutral-400 leading-relaxed">
            Seit 2003 ist Autoteile Cologne Ihr zuverlässiger Partner im Rheinland. Was als kleiner Familienbetrieb begann, ist heute eine feste Größe im KFZ-Teilehandel.
          </p>
</section>

<section className="border-y border-neutral-900 bg-neutral-900/30 py-12 mb-20">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl text-white font-space font-bold mb-2">20+</div>
<div className="text-neutral-500 text-sm uppercase tracking-wider">Jahre Erfahrung</div>
</div>
<div>
<div className="text-4xl text-white font-space font-bold mb-2">3</div>
<div className="text-neutral-500 text-sm uppercase tracking-wider">Filialen</div>
</div>
<div>
<div className="text-4xl text-white font-space font-bold mb-2">50k+</div>
<div className="text-neutral-500 text-sm uppercase tracking-wider">Artikel</div>
</div>
<div>
<div className="text-4xl text-white font-space font-bold mb-2">98%</div>
<div className="text-neutral-500 text-sm uppercase tracking-wider">Zufriedenheit</div>
</div>
</div>
</section>
<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative h-[400px] rounded-2xl overflow-hidden border border-neutral-800">
<img alt="Team meeting" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl text-white font-space font-medium mb-4">Unser Anspruch</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        In einer Welt, die immer anonymer wird, setzen wir bewusst auf persönliche Beratung. Unsere Mitarbeiter sind nicht nur Verkäufer, sondern ausgebildete KFZ-Experten, die verstehen, was Ihr Fahrzeug braucht.
                    </p>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Wir arbeiten eng mit lokalen Werkstätten zusammen und garantieren durch unsere eigene Logistik eine blitzschnelle Versorgung der Region.
                    </p>
<button className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700" onclick="showPage('kontakt')">
                        Geschäftskunden Anfrage
                    </button>
</div>
</div>
</section>
</main>

<main className="page-section hidden w-full pt-32 transition-opacity duration-500" id="page-filialen">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl text-white font-space font-medium mb-6">
                    Unsere Standorte
                 </h1>
<p className="text-neutral-400">Besuchen Sie uns in einer unserer drei Filialen.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 pb-24">

<div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#9D0E0E]/40 transition-colors group">
<div className="h-48 bg-neutral-800 relative group-hover:opacity-90 transition-opacity">

<div className="absolute inset-0 flex items-center justify-center bg-[#151515]">
<iconify-icon className="text-[#9D0E0E] text-4xl" icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h2 className="text-xl text-white font-space font-medium">Kerpen</h2>
<span className="bg-[#9D0E0E]/20 text-[#9D0E0E] text-xs font-bold px-2 py-1 rounded">ZENTRALE</span>
</div>
<p className="text-neutral-400 mb-6 text-sm">Siemensstraße 12<br/>50170 Kerpen</p>
<div className="space-y-3 mb-8">
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Mo - Fr</span>
<span className="text-white">08:00 - 18:00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Sa</span>
<span className="text-white">09:00 - 14:00</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors" onclick="showToast('Routenplaner wird geöffnet...')">Route</button>
<button className="flex-1 border border-neutral-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="window.location.href='tel:02237123456'">Anrufen</button>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#9D0E0E]/40 transition-colors group">
<div className="h-48 bg-neutral-800 relative group-hover:opacity-90 transition-opacity">
<div className="absolute inset-0 flex items-center justify-center bg-[#151515]">
<iconify-icon className="text-neutral-600 text-4xl group-hover:text-[#9D0E0E] transition-colors" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
<div className="p-8">
<h2 className="text-xl text-white font-space font-medium mb-4">Bergheim</h2>
<p className="text-neutral-400 mb-6 text-sm">Hauptstraße 45<br/>50126 Bergheim</p>
<div className="space-y-3 mb-8">
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Mo - Fr</span>
<span className="text-white">08:00 - 18:00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Sa</span>
<span className="text-white">09:00 - 13:00</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-neutral-800 text-white border border-neutral-700 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors" onclick="showToast('Routenplaner wird geöffnet...')">Route</button>
<button className="flex-1 border border-neutral-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="window.location.href='tel:02271998877'">Anrufen</button>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#9D0E0E]/40 transition-colors group">
<div className="h-48 bg-neutral-800 relative group-hover:opacity-90 transition-opacity">
<div className="absolute inset-0 flex items-center justify-center bg-[#151515]">
<iconify-icon className="text-neutral-600 text-4xl group-hover:text-[#9D0E0E] transition-colors" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
<div className="p-8">
<h2 className="text-xl text-white font-space font-medium mb-4">Düren</h2>
<p className="text-neutral-400 mb-6 text-sm">Tivolistraße 88<br/>52349 Düren</p>
<div className="space-y-3 mb-8">
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Mo - Fr</span>
<span className="text-white">08:30 - 17:30</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-500">Sa</span>
<span className="text-white">Geschlossen</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-neutral-800 text-white border border-neutral-700 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors" onclick="showToast('Routenplaner wird geöffnet...')">Route</button>
<button className="flex-1 border border-neutral-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="window.location.href='tel:02421555666'">Anrufen</button>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden w-full pt-32 transition-opacity duration-500" id="page-angebote">
<div className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h1 className="text-4xl md:text-5xl text-white font-space font-medium mb-4">
                        Aktuelle Angebote
                     </h1>
<p className="text-neutral-400 max-w-xl">Top-Preise für Verschleißteile und Zubehör. Angebote gültig solange der Vorrat reicht.</p>
</div>

<div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
<button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium whitespace-nowrap">Alle</button>
<button className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white rounded-full text-sm transition-colors whitespace-nowrap" onclick="showToast('Filter: Öl &amp; Flüssigkeiten aktiviert')">Öl &amp; Flüssigkeiten</button>
<button className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white rounded-full text-sm transition-colors whitespace-nowrap" onclick="showToast('Filter: Batterien aktiviert')">Batterien</button>
<button className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white rounded-full text-sm transition-colors whitespace-nowrap" onclick="showToast('Filter: Zubehör aktiviert')">Zubehör</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#9D0E0E]/50 transition-all hover:-translate-y-1">
<div className="h-48 bg-white p-6 flex items-center justify-center relative">
<div className="absolute top-3 left-3 bg-[#9D0E0E] text-white text-xs font-bold px-2 py-1 rounded">-20%</div>
<iconify-icon className="text-neutral-800 text-7xl drop-shadow-lg" icon="game-icons:oil-drum"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs text-neutral-500 mb-1 font-medium">MOTORENÖL</div>
<h3 className="text-white font-medium mb-2">Castrol Edge 5W-30</h3>
<div className="flex justify-between items-center mt-4">
<div>
<span className="text-neutral-500 line-through text-sm">49,99 €</span>
<div className="text-white font-bold text-lg">39,99 €</div>
</div>
<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#9D0E0E] text-white transition-colors" onclick="showToast('Zum Warenkorb hinzugefügt (Demo)')">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#9D0E0E]/50 transition-all hover:-translate-y-1">
<div className="h-48 bg-white p-6 flex items-center justify-center relative">
<iconify-icon className="text-neutral-800 text-7xl drop-shadow-lg" icon="game-icons:car-battery"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs text-neutral-500 mb-1 font-medium">ELEKTRIK</div>
<h3 className="text-white font-medium mb-2">Varta Starterbatterie</h3>
<div className="flex justify-between items-center mt-4">
<div>
<div className="text-white font-bold text-lg">89,90 €</div>
</div>
<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#9D0E0E] text-white transition-colors" onclick="showToast('Zum Warenkorb hinzugefügt (Demo)')">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#9D0E0E]/50 transition-all hover:-translate-y-1">
<div className="h-48 bg-white p-6 flex items-center justify-center relative">
<div className="absolute top-3 left-3 bg-neutral-900 text-white text-xs font-bold px-2 py-1 rounded">SET</div>
<iconify-icon className="text-neutral-800 text-7xl drop-shadow-lg" icon="mdi:wiper-wash"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs text-neutral-500 mb-1 font-medium">SICHT</div>
<h3 className="text-white font-medium mb-2">Bosch Aerotwin Set</h3>
<div className="flex justify-between items-center mt-4">
<div>
<div className="text-white font-bold text-lg">24,50 €</div>
</div>
<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#9D0E0E] text-white transition-colors" onclick="showToast('Zum Warenkorb hinzugefügt (Demo)')">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#9D0E0E]/50 transition-all hover:-translate-y-1">
<div className="h-48 bg-white p-6 flex items-center justify-center relative">
<iconify-icon className="text-neutral-800 text-7xl drop-shadow-lg" icon="game-icons:car-wheel"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs text-neutral-500 mb-1 font-medium">REIFEN</div>
<h3 className="text-white font-medium mb-2">Felgenreiniger Profi</h3>
<div className="flex justify-between items-center mt-4">
<div>
<div className="text-white font-bold text-lg">12,99 €</div>
</div>
<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#9D0E0E] text-white transition-colors" onclick="showToast('Zum Warenkorb hinzugefügt (Demo)')">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 bg-[#9D0E0E]/10 border border-[#9D0E0E]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl text-white font-medium mb-2">Nicht gefunden was Sie suchen?</h3>
<p className="text-neutral-400">Wir haben Zugriff auf über 2 Millionen Ersatzteile. Fragen Sie unverbindlich an.</p>
</div>
<button className="bg-[#9D0E0E] text-white px-6 py-3 rounded-lg hover:bg-[#b01010] transition-colors whitespace-nowrap" onclick="showPage('kontakt')">
                    Individuelle Anfrage
                </button>
</div>
</div>
</main>

<main className="page-section hidden w-full pt-32 transition-opacity duration-500" id="page-service">
<div className="max-w-7xl mx-auto px-6 pb-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl md:text-5xl text-white font-space font-medium mb-6">
                    Unser Service-Portfolio
                 </h1>
<p className="text-neutral-400 text-lg">Mehr als nur Teile. Wir bieten spezialisierte Dienstleistungen für Werkstätten und Privatkunden.</p>
</div>
<div className="space-y-6">

<div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:border-neutral-700 transition-colors">
<div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-red-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-2xl text-white font-space font-medium mb-3">Autoglas Service</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">Steinschlagreparatur und Austausch von Windschutzscheiben. Wir verwenden ausschließlich Scheiben in Erstausrüsterqualität. Inklusive Abwicklung mit Ihrer Teilkasko-Versicherung.</p>
<ul className="grid md:grid-cols-2 gap-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Kostenlos bei Kasko (Reparatur)
                            </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> 30 Jahre Garantie auf Dichtheit
                            </li>
</ul>
<button className="text-white border-b border-red-500 pb-1 hover:text-red-400 transition-colors" onclick="showToast('Terminanfrage für Autoglas gestartet')">Termin vereinbaren</button>
</div>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:border-neutral-700 transition-colors">
<div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-red-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wind-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-2xl text-white font-space font-medium mb-3">DPF Reinigung</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">Professionelle Reinigung von Dieselpartikelfiltern. Sparen Sie sich den teuren Neukauf. Unser zertifiziertes Verfahren stellt bis zu 98% der Durchflussmenge wieder her.</p>
<div className="flex items-center gap-4 mb-6">
<div className="text-white font-bold text-xl">ab 199 €</div>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Express-Service möglich</span>
</div>
<button className="text-white border-b border-red-500 pb-1 hover:text-red-400 transition-colors" onclick="showToast('Beratung für DPF angefordert')">Beratung anfordern</button>
</div>
</div>

<div className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:border-neutral-700 transition-colors">
<div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0 text-red-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:drop-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-2xl text-white font-space font-medium mb-3">Lackschutz &amp; Folierung</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">Schützen Sie Ihren Lack vor Steinschlägen oder geben Sie Ihrem Fahrzeug einen neuen Look. Wir verwenden Premium-Folien von 3M und Avery.</p>
<button className="text-white border-b border-red-500 pb-1 hover:text-red-400 transition-colors" onclick="showToast('Anfrage für Folierung gesendet')">Angebot einholen</button>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden w-full pt-32 transition-opacity duration-500" id="page-kontakt">
<div className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h1 className="text-4xl md:text-5xl text-white font-space font-medium mb-6">
                        Kontaktieren Sie uns
                     </h1>
<p className="text-neutral-400 text-lg mb-12">Haben Sie Fragen zu einem Ersatzteil oder möchten Sie einen Termin vereinbaren? Wir sind für Sie da.</p>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-lg bg-[#9D0E0E]/10 border border-[#9D0E0E]/20 text-[#9D0E0E] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Zentrale Hotline</h3>
<p className="text-neutral-400 mb-2">Mo-Fr 08:00 - 18:00 Uhr</p>
<a className="text-2xl text-white hover:text-red-400 transition-colors font-space" href="tel:02211234567">0221 / 123 45 67</a>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">E-Mail Schreiben</h3>
<p className="text-neutral-400 mb-2">Wir antworten in der Regel innerhalb von 24h</p>
<a className="text-lg text-white hover:text-red-400 transition-colors" href="mailto:info@autoteile-cologne.de">info@autoteile-cologne.de</a>
</div>
</div>
</div>

<div className="mt-16 pt-16 border-t border-neutral-900">
<h4 className="text-white font-medium mb-6">Häufige Fragen</h4>
<div className="space-y-4">
<details className="group bg-neutral-900/30 rounded-lg p-4 cursor-pointer">
<summary className="text-neutral-300 font-medium flex justify-between items-center list-none">
                                    Liefert ihr auch nach Hause?
                                    <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-500 mt-2 text-sm">Ja, im Umkreis von 20km liefern wir für Werkstätten kostenlos. Privatkunden per DHL.</p>
</details>
<details className="group bg-neutral-900/30 rounded-lg p-4 cursor-pointer">
<summary className="text-neutral-300 font-medium flex justify-between items-center list-none">
                                    Kann ich Altöl zurückgeben?
                                    <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-500 mt-2 text-sm">Ja, bei Kauf von neuem Öl nehmen wir die gleiche Menge Altöl kostenlos zurück.</p>
</details>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
<form className="space-y-6" onsubmit="event.preventDefault(); showToast('Nachricht erfolgreich gesendet! Wir melden uns.');">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm text-neutral-400 mb-2">Vorname</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-[#9D0E0E] focus:outline-none transition-colors" placeholder="Max" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Nachname</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-[#9D0E0E] focus:outline-none transition-colors" placeholder="Mustermann" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Betreff</label>
<select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-[#9D0E0E] focus:outline-none transition-colors">
<option>Allgemeine Anfrage</option>
<option>Ersatzteil-Anfrage</option>
<option>Terminvereinbarung</option>
<option>Reklamation</option>
</select>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Fahrzeugschein (Optional)</label>
<div className="w-full border border-dashed border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-800/50 transition-colors cursor-pointer" onclick="showToast('Datei-Upload Simulation')">
<iconify-icon className="text-neutral-400 text-2xl mb-2" icon="solar:upload-minimalistic-linear"></iconify-icon>
<p className="text-xs text-neutral-500">Datei hier ablegen oder klicken</p>
</div>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Nachricht</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-[#9D0E0E] focus:outline-none transition-colors" placeholder="Wie können wir helfen?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#9D0E0E] hover:bg-[#b01010] text-white py-4 rounded-xl font-medium transition-colors shadow-lg" type="submit">Nachricht absenden</button>
</form>
</div>
</div>
</div>
</main>
</div>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#9D0E0E] rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:wheel-angle-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium font-space tracking-tight">
                ATC COLOGNE
              </span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Qualitätsteile und Service seit 2003. Wir halten Ihre Welt in
              Bewegung.
            </p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#" onclick="event.preventDefault(); showToast('Social Media Link (Demo)')"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#" onclick="event.preventDefault(); showToast('Social Media Link (Demo)')"><iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#" onclick="event.preventDefault(); showToast('Social Media Link (Demo)')"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6 font-space">Unternehmen</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><button className="hover:text-red-400 transition-colors text-left" onclick="showPage('about')">Über uns</button></li>
<li><button className="hover:text-red-400 transition-colors text-left" onclick="showPage('filialen')">Karriere</button></li>
<li><button className="hover:text-red-400 transition-colors text-left" onclick="showPage('filialen')">Presse</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 font-space">Service</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><button className="hover:text-red-400 transition-colors text-left" onclick="showPage('service')">Autoglas</button></li>
<li><button className="hover:text-red-400 transition-colors text-left" onclick="showPage('service')">Folierung</button></li>
<li><button className="hover:text-red-400 transition-colors text-left" onclick="showPage('kontakt')">Werkstatt-Partner</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 font-space">Rechtliches</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-red-400 transition-colors" href="#" onclick="event.preventDefault(); showToast('Impressum (Demo)')">Impressum</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#" onclick="event.preventDefault(); showToast('Datenschutz (Demo)')">Datenschutz</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#" onclick="event.preventDefault(); showToast('AGB (Demo)')">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 text-center text-neutral-600 text-sm">
            © 2023 Autoteile Cologne GmbH. Alle Rechte vorbehalten.
        </div>
</div>
</footer>



    </>
  );
}
