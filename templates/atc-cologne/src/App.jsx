import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
gray: {
850: '#1f2937',
900: '#111111',
950: '#050505',
},
brand: {
red: '#D92323',
dark: '#991b1b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Router Logic
      function navigateTo(pageId) {
          // Hide all sections
          document.querySelectorAll('.page-section').forEach(section => {
              section.classList.remove('active');
          });

          // Show target section
          const target = document.getElementById(pageId) || document.getElementById('home');
          target.classList.add('active');

          // Scroll to top
          window.scrollTo(0, 0);

          // Update Active State on Nav Desktop
          document.querySelectorAll('#desktop-nav button').forEach(btn => {
              btn.classList.remove('active');
              if(btn.dataset.page === pageId) {
                  btn.classList.add('active');
              }
          });

          // Update Active State on Mobile
          document.querySelectorAll('.mobile-link').forEach(btn => {
              btn.classList.remove('active');
              if(btn.dataset.page === pageId) {
                  btn.classList.add('active');
              }
          });
      }

      function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          const icon = document.getElementById('hamburger-icon');

          if (menu.classList.contains('open')) {
              menu.classList.remove('open');
              icon.setAttribute('icon', 'solar:hamburger-menu-linear');
          } else {
              menu.classList.add('open');
              icon.setAttribute('icon', 'solar:close-circle-linear');
          }
      }

      // --- Interaction Simulation Logic ---

      function showToast(message, iconName = 'solar:info-circle-linear') {
          const container = document.getElementById('toast-container');
          const toast = document.createElement('div');
          toast.className = 'toast';
          toast.innerHTML = `
              <iconify-icon icon="${iconName}" width="20" height="20" class="mr-3 text-brand-red"></iconify-icon>
              <span>${message}</span>
          `;

          container.appendChild(toast);

          // Trigger animation
          requestAnimationFrame(() => {
              toast.classList.add('show');
          });

          // Remove after delay
          setTimeout(() => {
              toast.classList.remove('show');
              setTimeout(() => {
                  toast.remove();
              }, 400);
          }, 3000);
      }

      function simulateCall(number, event) {
          if(event) {
              event.preventDefault();
              event.stopPropagation();
          }
          showToast(`Wähle Nummer: ${number}...`, 'solar:phone-calling-linear');
      }

      function simulateRoute(destination) {
          showToast(`Öffne Navigation nach: ${destination}`, 'solar:map-point-linear');
          setTimeout(() => {
               window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`, '_blank');
          }, 1000);
      }

      function simulateEmail(email, event) {
           if(event) {
              event.preventDefault();
              event.stopPropagation();
          }
           showToast(`Öffne E-Mail-Programm...`, 'solar:letter-linear');
      }

      function handleFormSubmit(event) {
          event.preventDefault();
          const btn = document.getElementById('submitBtn');
          const originalText = btn.innerHTML;

          btn.disabled = true;
          btn.innerHTML = `Sende...`;

          setTimeout(() => {
              btn.innerHTML = `Gesendet!`;
              showToast('Nachricht erfolgreich gesendet.', 'solar:check-circle-linear');
              document.getElementById('contactForm').reset();

              setTimeout(() => {
                  btn.disabled = false;
                  btn.innerHTML = originalText;
              }, 3000);
          }, 1500);
      }

      // Modal Logic
      function openModal(title, content) {
          document.getElementById('modal-title').innerText = title;
          document.getElementById('modal-body').innerHTML = content;
          document.getElementById('modal-backdrop').classList.add('open');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }

      function closeModal(event) {
          if (event && event.target !== event.currentTarget) return;
          document.getElementById('modal-backdrop').classList.remove('open');
          document.body.style.overflow = '';
      }

      // Handle URL Hash on Load
      window.addEventListener('load', () => {
          const hash = window.location.hash.substring(1);
          if (hash && document.getElementById(hash)) {
              navigateTo(hash);
          }
      });
    


      const offerData = {
          'holiday': {
              title: 'Urlaubs-Check',
              price: '19,90 €',
              image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600&auto=format&fit=crop',
              desc: 'Starten Sie sicher in die schönste Zeit des Jahres. Unser umfassender Urlaubs-Check deckt alle sicherheitsrelevanten Baugruppen Ihres Fahrzeugs ab, damit Sie entspannt ankommen.',
              features: ['Prüfung der Bremsanlage und Beläge', 'Reifenkontrolle (Profiltiefe, Laufbild & Druck)', 'Lichtmaschinen- und Batterie-Check', 'Flüssigkeitsstände prüfen und ggf. auffüllen', 'Funktionsprüfung der Klimaanlage', 'Sichtprüfung des Unterbodens']
          },
          'wipers': {
              title: 'Scheibenwischer',
              price: '-20% Rabatt',
              image: 'https://images.unsplash.com/photo-1496328325338-348cb6630a9b?q=80&w=1600&auto=format&fit=crop',
              desc: 'Gute Sicht ist lebenswichtig. Bei uns erhalten Sie jetzt 20% Rabatt auf alle Bosch Aerotwin Scheibenwischer inklusive fachgerechter Montage und Einstellung.',
              features: ['Original Bosch Aerotwin Wischblätter', 'Kostenlose Montage sofort', 'Überprüfung der Wischarm-Einstellung', 'Entsorgung der Alt-Teile', 'Auffüllen des Scheibenwischwassers']
          },
          'battery': {
              title: 'Batterie-Tausch',
              price: 'Gratis Einbau',
              image: 'https://images.unsplash.com/photo-1620216669929-37367c330f88?q=80&w=1600&auto=format&fit=crop',
              desc: 'Startschwierigkeiten? Wir testen Ihre Batterie kostenlos. Beim Kauf einer neuen Marken-Batterie (Varta, Bosch) übernehmen wir den Einbau für Sie.',
              features: ['Professioneller Batterie-Lasttest', 'Erhalt der Bordspannung beim Wechsel', 'Anlernen der neuen Batterie am Steuergerät', 'Umweltgerechte Entsorgung der Altbatterie', 'Check der Lichtmaschine']
          },
          'oil': {
              title: 'Ölwechsel-Set',
              price: 'ab 49,90 €',
              image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=1600&auto=format&fit=crop',
              desc: 'Tun Sie Ihrem Motor etwas Gutes. Unser Ölwechsel-Paket beinhaltet bis zu 5 Liter Marken-Leichtlauföl (5W-30) und einen neuen Marken-Ölfilter.',
              features: ['Bis zu 5 Liter Marken-Leichtlauföl 5W-30', 'Neuer Marken-Ölfilter', 'Austausch des Dichtungsrings', 'Rückstellung der Service-Intervallanzeige', 'Fachgerechte Altöl-Entsorgung']
          }
      };

      function openOffer(id) {
          const data = offerData[id];
          if(!data) return;

          document.getElementById('detail-title').innerText = data.title;
          document.getElementById('detail-price').innerText = data.price;
          document.getElementById('detail-desc').innerText = data.desc;
          document.getElementById('detail-image').src = data.image;

          const list = document.getElementById('detail-list');
          list.innerHTML = data.features.map(f => `
              <li class="flex items-start text-gray-300">
                  <iconify-icon icon="solar:check-circle-linear" class="text-brand-red mr-3 mt-1 flex-shrink-0"></iconify-icon>
                  <span>${f}</span>
              </li>
          `).join('');

          navigateTo('offer-detail');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 pt-2 px-2 sm:pt-4 sm:px-4">
<div className="max-w-7xl mx-auto glass-nav rounded-2xl transition-all duration-300">
<div className="flex sm:px-6 h-16 pr-4 pl-4 items-center justify-between">

<div className="flex-shrink-0 flex items-center cursor-pointer gap-3 group" onclick="navigateTo('home')">
<div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(217,35,35,0.4)] group-hover:shadow-[0_0_20px_rgba(217,35,35,0.6)] transition-all">
<iconify-icon className="" height="20" icon="solar:transmission-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-lg font-semibold text-white tracking-tight leading-none uppercase font-display group-hover:text-gray-200 transition-colors font-geist" style={{}}>
                ATC Cologne
              </span>
</div>
</div>

<nav className="hidden lg:flex space-x-1" id="desktop-nav">
<button className="px-4 py-2 text-sm font-medium text-white hover:text-brand-red transition-colors active font-geist" data-page="home" onclick="navigateTo('home')" style={{}}>
              Home
            </button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" data-page="about" onclick="navigateTo('about')" style={{}}>
              Über uns
            </button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" data-page="branches" onclick="navigateTo('branches')" style={{}}>
              Filialen
            </button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" data-page="offers" onclick="navigateTo('offers')" style={{}}>
              Angebote
            </button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" data-page="services" onclick="navigateTo('services')" style={{}}>
              Service
            </button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors font-geist" data-page="contact" onclick="navigateTo('contact')" style={{}}>
              Kontakt
            </button>
</nav>

<div className="hidden lg:flex items-center space-x-6">
<a className="flex items-center hover:text-white transition-colors text-sm text-gray-400 font-geist" href="#" onclick="simulateCall('+49 221 123 45 67', event)" style={{}}>02237 / 979 550</a>
<button className="bg-brand-red hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-[0_0_20px_rgba(217,35,35,0.3)] hover:shadow-[0_0_25px_rgba(217,35,35,0.5)] font-geist" onclick="navigateTo('branches')" style={{}}>
              Filiale finden
            </button>
</div>

<div className="lg:hidden flex items-center gap-4">
<button className="text-gray-300 hover:text-white p-2 focus:outline-none" id="menu-btn" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" id="hamburger-icon" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden border-t border-white/5" id="mobile-menu">
<div className="px-2 pt-2 pb-4 space-y-1">
<button className="mobile-link block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-geist" data-page="home" onclick="navigateTo('home'); toggleMobileMenu()" style={{}}>
              Home
            </button>
<button className="mobile-link block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-geist" data-page="about" onclick="navigateTo('about'); toggleMobileMenu()" style={{}}>
              Über uns
            </button>
<button className="mobile-link block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-geist" data-page="branches" onclick="navigateTo('branches'); toggleMobileMenu()" style={{}}>
              Filialen
            </button>
<button className="mobile-link block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-geist" data-page="offers" onclick="navigateTo('offers'); toggleMobileMenu()" style={{}}>
              Angebote
            </button>
<button className="mobile-link block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-geist" data-page="services" onclick="navigateTo('services'); toggleMobileMenu()" style={{}}>
              Service
            </button>
<button className="mobile-link block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-geist" data-page="contact" onclick="navigateTo('contact'); toggleMobileMenu()" style={{}}>
              Kontakt
            </button>
<div className="pt-4 px-2">
<button className="w-full bg-brand-red text-white py-3 rounded-lg font-medium shadow-[0_0_20px_rgba(217,35,35,0.3)] hover:bg-red-700 transition-colors font-geist" onclick="navigateTo('branches'); toggleMobileMenu()" style={{}}>
                Filiale finden
              </button>
</div>
</div>
</div>
</div>
</header>

<main className="flex-grow">

<div className="page-section active" id="home">

<section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Engine Background" className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60"></div>
<div className="opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-brand-red/10 border border-brand-red/20 text-brand-red mb-8 backdrop-blur-sm cursor-pointer hover:bg-brand-red/20 transition-colors font-geist" onclick="navigateTo('branches')" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-brand-red mr-2.5 animate-pulse"></span>
              3 Standorte im Rheinland
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] font-space-grotesk font-semibold" style={{}}>
              Mobilität sichern.
              <br/>
<span className="bg-clip-text font-semibold text-transparent font-space-grotesk bg-gradient-to-r from-brand-red to-red-600">
                Qualität erleben.
              </span>
</h1>
<p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-space-grotesk font-semibold" style={{}}>
              Ihr Partner für hochwertige Autoteile &amp; Service. Erstklassige
              Werkstattleistungen an drei Standorten.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
<button className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white transition-all duration-500 rounded-lg hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(217,35,35,0.6)] focus:outline-none font-geist overflow-hidden" onclick="navigateTo('offers')">
<style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>

<div className="absolute inset-0 -z-20 rounded-lg overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#D92323_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-lg bg-[#050505]"></div>
</div>

<div className="absolute inset-[2px] -z-10 rounded-lg overflow-hidden bg-[#050505]">

<div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent"></div>

<div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '10px 10px', animation: 'dots-move 10s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-brand-red/20 blur-2xl rounded-full pointer-events-none transition-all duration-500 group-hover:bg-brand-red/40"></div>
</div>

<span className="relative z-10 tracking-tight">Angebote ansehen</span>
<iconify-icon className="ml-2 text-xl relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 text-brand-red" icon="solar:tag-price-bold"></iconify-icon>
</button>
<div className="relative inline-block group w-full sm:w-auto">

<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-3/4 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,0.4), rgba(255,255,255,0.1) 35%, transparent 70%)', filter: 'blur(10px)'}}></span>

</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 transition-all group cursor-pointer hover:border-white/20" onclick="showToast('Garantie-Bedingungen unter Service einsehbar.', 'solar:shield-check-linear')">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-brand-red/20 group-hover:text-brand-red transition-colors">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display font-geist" style={{}}>
                  Qualität &amp; Garantie
                </h3>
<p className="text-gray-400 leading-relaxed font-light font-geist" style={{}}>
                  Wir führen ausschließlich Marken-Ersatzteile in
                  Erstausrüsterqualität für alle gängigen Fahrzeugmodelle.
                </p>
</div>
<div className="p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 transition-all group cursor-pointer hover:border-white/20" onclick="navigateTo('contact'); showToast('Kontaktieren Sie uns für eine Beratung')">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-brand-red/20 group-hover:text-brand-red transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display font-geist" style={{}}>
                  Persönliche Beratung
                </h3>
<p className="text-gray-400 leading-relaxed font-light font-geist" style={{}}>
                  Unser Team aus erfahrenen KFZ-Experten berät Sie individuell
                  und findet die passende Lösung.
                </p>
</div>
<div className="p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 transition-all group cursor-pointer hover:border-white/20" onclick="navigateTo('branches'); showToast('Prüfen Sie den Bestand in Ihrer Filiale')">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-brand-red/20 group-hover:text-brand-red transition-colors">
<iconify-icon height="24" icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display font-geist" style={{}}>
                  Schnelle Verfügbarkeit
                </h3>
<p className="text-gray-400 leading-relaxed font-light font-geist" style={{}}>
                  Dank großem Lagerbestand sind 98% der Teile sofort oder am
                  selben Tag verfügbar.
                </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-16 md:py-32 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-red/5 blur-[120px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter text-white mb-4 font-space-grotesk font-semibold" style={{}}>
                Unsere Standorte
              </h2>
<p className="mt-4 text-lg md:text-xl text-gray-500 font-light font-geist" style={{}}>
                Besuchen Sie uns in einer unserer drei Filialen.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 group cursor-pointer" onclick="navigateTo('branches')">
<div className="h-48 md:h-56 bg-gray-800 relative overflow-hidden">
<img alt="Kerpen" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a9bd34-366e-436c-99f8-2998e3863c31_800w.jpg"/>
<div className="absolute bottom-4 left-4 bg-brand-red px-3 py-1 rounded text-xs font-medium text-white shadow-lg font-geist" style={{}}>
                    Hauptsitz
                  </div>
</div>
<div className="p-6 md:p-8">
<h3 className="text-2xl text-white mb-2 tracking-tight group-hover:text-brand-red transition-colors font-space-grotesk font-semibold" style={{}}>
                    Kerpen
                  </h3>
<p className="text-gray-400 mb-6 text-sm md:text-base font-light font-geist" style={{}}>
                    Humboldtstraße 7
                    <br/>
                    50171 Kerpen
                  </p>
<button className="text-white font-medium flex items-center hover:text-brand-red transition-colors text-sm group-hover:translate-x-1 duration-300 font-geist" style={{}}>
                    Details
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="glass-card rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 group cursor-pointer" onclick="navigateTo('branches')">
<div className="h-48 md:h-56 bg-gray-800 relative overflow-hidden">
<img alt="Bergheim" className="group-hover:scale-105 transition-transform duration-700 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23520bec-e891-4ab0-991e-57fb0fcd55c0_800w.jpg"/>
</div>
<div className="p-6 md:p-8">
<h3 className="text-2xl text-white mb-2 tracking-tight group-hover:text-brand-red transition-colors font-space-grotesk font-semibold" style={{}}>
                    Bergheim
                  </h3>
<p className="text-gray-400 mb-6 text-sm md:text-base font-light font-geist" style={{}}>
                    Kölner Straße 12
                    <br/>
                    50126 Bergheim
                  </p>
<button className="text-white font-medium flex items-center hover:text-brand-red transition-colors text-sm group-hover:translate-x-1 duration-300 font-geist" style={{}}>
                    Details
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="glass-card rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 group cursor-pointer" onclick="navigateTo('branches')">
<div className="h-48 md:h-56 bg-gray-800 relative overflow-hidden">
<img alt="Düren" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3807e327-41ec-4424-8918-94f31772d3e0_800w.jpg"/>
</div>
<div className="p-6 md:p-8">
<h3 className="text-2xl text-white mb-2 tracking-tight group-hover:text-brand-red transition-colors font-space-grotesk font-semibold" style={{}}>
                    Düren
                  </h3>
<p className="text-gray-400 mb-6 text-sm md:text-base font-light font-geist" style={{}}>
                    Veldener Straße 34
                    <br/>
                    52349 Düren
                  </p>
<button className="text-white font-medium flex items-center hover:text-brand-red transition-colors text-sm group-hover:translate-x-1 duration-300 font-geist" style={{}}>
                    Details
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div className="max-w-2xl mb-6 md:mb-0">
<h2 className="text-3xl md:text-5xl tracking-tighter text-white font-space-grotesk font-semibold" style={{}}>
                  Mehr als nur Teile
                </h2>
<p className="mt-4 text-lg md:text-xl text-gray-500 font-light font-geist" style={{}}>
                  Entdecken Sie unsere professionellen Serviceleistungen direkt
                  vor Ort.
                </p>
</div>
<button className="hidden md:inline-flex items-center text-white font-medium border border-white/20 px-5 py-2.5 rounded-lg hover:bg-white/5 transition-all text-sm group font-geist" onclick="navigateTo('services')" style={{}}>
                Alle Services
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer" onclick="navigateTo('services')">
<iconify-icon className="text-gray-400 group-hover:text-brand-red text-4xl mb-6 transition-colors" icon="solar:wind-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-red transition-colors font-geist" style={{}}>
                  Autoglas
                </h3>
<p className="text-sm text-gray-400 font-light font-geist" style={{}}>
                  Steinschlagreparatur und Scheibenaustausch.
                </p>
</div>
<div className="group p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer" onclick="navigateTo('services')">
<iconify-icon className="text-gray-400 group-hover:text-brand-red text-4xl mb-6 transition-colors" icon="solar:layers-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-red transition-colors font-geist" style={{}}>
                  Folierung
                </h3>
<p className="text-sm text-gray-400 font-light font-geist" style={{}}>
                  Scheibentönung und Lackschutzfolien.
                </p>
</div>
<div className="group p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer" onclick="navigateTo('services')">
<iconify-icon className="text-gray-400 group-hover:text-brand-red text-4xl mb-6 transition-colors" icon="solar:tuning-square-2-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-red transition-colors font-geist" style={{}}>
                  DPF Reinigung
                </h3>
<p className="text-sm text-gray-400 font-light font-geist" style={{}}>
                  Professionelle Dieselpartikelfilter-Reinigung.
                </p>
</div>
<div className="group p-6 md:p-8 rounded-2xl glass-card hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer" onclick="navigateTo('services')">
<iconify-icon className="text-gray-400 group-hover:text-brand-red text-4xl mb-6 transition-colors" icon="solar:battery-charge-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-red transition-colors font-geist" style={{}}>
                  Batterie-Service
                </h3>
<p className="text-sm text-gray-400 font-light font-geist" style={{}}>
                  Test, Austausch und Entsorgung.
                </p>
</div>
</div>
<div className="mt-8 md:hidden">
<button className="w-full inline-flex justify-center items-center text-white font-medium border border-white/20 px-4 py-3 rounded-lg hover:bg-white/5 transition-all font-geist" onclick="navigateTo('services')" style={{}}>
                Alle Services ansehen
              </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative overflow-hidden bg-brand-red">
<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="lg:w-1/2 text-center lg:text-left">
<span className="text-brand-red bg-red-950/50 border border-brand-red/30 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-6 inline-block font-geist" style={{}}>
                  Loyalty Program
                </span>
<h2 className="text-4xl lg:text-5xl tracking-tighter text-white mb-6 font-space-grotesk font-semibold" style={{}}>
                  Die ATC Kundenkarte
                </h2>
<p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-lg mx-auto lg:mx-0 font-geist" style={{}}>
                  Profitieren Sie als Stammkunde von exklusiven Rabatten,
                  bevorzugter Terminvergabe und speziellen Aktionen.
                </p>
<ul className="space-y-4 mb-10 text-left inline-block">
<li className="flex items-center text-gray-300 font-geist" style={{}}>
<iconify-icon className="text-brand-red mr-4 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                    Bis zu 10% Rabatt auf Verschleißteile
                  </li>
<li className="flex items-center text-gray-300 font-geist" style={{}}>
<iconify-icon className="text-brand-red mr-4 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                    Kostenloser Batterie-Check
                  </li>
<li className="flex items-center text-gray-300 font-geist" style={{}}>
<iconify-icon className="text-brand-red mr-4 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                    Einladung zu Saison-Events
                  </li>
</ul>
<div className="block">
<button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors shadow-xl w-full sm:w-auto hover:scale-105 duration-200 font-geist" onclick="navigateTo('contact'); showToast('Bitte erwähnen Sie die Kundenkarte im Formular.')" style={{}}>
                    Jetzt beantragen
                  </button>
</div>
</div>
<div className="lg:w-5/12 w-full max-w-md">

<div className="aspect-[1.58/1] bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl rotate-3 hover:rotate-0 transition-all duration-500 group cursor-pointer" onclick="navigateTo('contact'); showToast('Kundenkarte jetzt anfragen')">
<div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-red rounded-full blur-[80px] opacity-30 group-hover:opacity-40 transition-opacity"></div>
<div className="flex justify-between items-start z-10">
<div className="">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-brand-red text-2xl" icon="solar:transmission-circle-bold"></iconify-icon>
<div className="text-lg md:text-xl font-bold tracking-tight text-white font-display font-geist" style={{}}>
                          ATC COLOGNE
                        </div>
</div>
<div className="text-[10px] text-brand-red tracking-[0.2em] uppercase font-semibold font-geist" style={{}}>
                        Premium Member
                      </div>
</div>
<iconify-icon className="text-white/20 text-3xl" icon="solar:star-bold"></iconify-icon>
</div>
<div className="z-10">
<div className="flex justify-between items-end">
<div>
<div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1 md:mb-2 font-medium font-geist" style={{}}>
                          Kartennummer
                        </div>
<div className="text-white font-mono text-lg md:text-xl tracking-widest text-shadow font-geist" style={{}}>
                          8820 4910
                        </div>
</div>
<div className="w-8 h-5 md:w-10 md:h-6 bg-white/10 rounded overflow-hidden relative">
<div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-red-500/50 mix-blend-screen"></div>
<div className="absolute right-0 top-0 w-6 h-6 rounded-full bg-yellow-500/50 mix-blend-screen"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#050505] border-white/5 border-t pt-24 pb-24">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-5xl text-white mb-6 tracking-tighter font-space-grotesk font-semibold" style={{}}>
              Bereit für Ihren Besuch?
            </h2>
<p className="text-lg md:text-xl text-gray-500 mb-10 md:mb-12 font-light font-geist" style={{}}>
              Kommen Sie vorbei oder rufen Sie uns an.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-brand-red hover:bg-brand-dark transition-all shadow-[0_0_30px_-5px_rgba(217,35,35,0.4)] w-full sm:w-auto hover:shadow-[0_0_35px_-5px_rgba(217,35,35,0.6)] font-geist" onclick="navigateTo('branches')" style={{}}>
                Standort wählen
              </button>
<button className="inline-flex justify-center items-center px-8 py-4 border border-white/10 text-lg font-medium rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto hover:border-white/30 font-geist" onclick="navigateTo('contact')" style={{}}>
                Kontakt aufnehmen
              </button>
</div>
</div>
</section>
</div>


<div className="page-section" id="about">
<div className="bg-[#080808] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl md:text-6xl tracking-tighter text-white mb-6 font-space-grotesk font-semibold" style={{}}>
              Über uns
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light font-geist" style={{}}>
              Lernen Sie das Team und die Geschichte hinter Autoteile Cologne
              kennen.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<h2 className="text-2xl md:text-3xl text-white mb-6 md:mb-8 tracking-tight font-space-grotesk font-semibold" style={{}}>
                Tradition &amp; Innovation im Rheinland
              </h2>
<div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg font-light">
<p className="font-geist" style={{}}>
                  Gegründet im Jahr 2001, begann Autoteile Cologne als kleines
                  Fachgeschäft in Kerpen.
                </p>
<p className="font-geist" style={{}}>
                  Heute sind wir stolz darauf, an drei Standorten im Rheinland
                  vertreten zu sein.
                </p>
<p className="font-geist" style={{}}>
                  Unser Team besteht aus über 25 qualifizierten Fachkräften.
                </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 md:gap-6">
<img alt="Team Werkstatt" className="rounded-xl object-cover h-48 md:h-64 w-full opacity-80 border border-white/10" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Beratung" className="rounded-xl object-cover h-48 md:h-64 w-full md:translate-y-12 opacity-80 border border-white/10" src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-20 md:mt-32">
<h2 className="text-2xl md:text-3xl text-white mb-10 md:mb-16 text-center tracking-tight font-space-grotesk font-semibold" style={{}}>
              Unsere Werte
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="p-8 bg-[#080808] rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all cursor-default hover:bg-white/5">
<iconify-icon className="text-brand-red text-4xl mb-6" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3 font-geist" style={{}}>Vertrauen</h3>
<p className="text-gray-400 font-light font-geist" style={{}}>
                  Ehrliche Beratung ist unser höchstes Gut.
                </p>
</div>
<div className="p-8 bg-[#080808] rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all cursor-default hover:bg-white/5">
<iconify-icon className="text-brand-red text-4xl mb-6" icon="solar:medal-ribbons-star-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3 font-geist" style={{}}>Kompetenz</h3>
<p className="text-gray-400 font-light font-geist" style={{}}>
                  Fachwissen ist durch nichts zu ersetzen.
                </p>
</div>
<div className="p-8 bg-[#080808] rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all cursor-default hover:bg-white/5">
<iconify-icon className="text-brand-red text-4xl mb-6" icon="solar:heart-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3 font-geist" style={{}}>
                  Leidenschaft
                </h3>
<p className="text-gray-400 font-light font-geist" style={{}}>Wir lieben Autos.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="branches">
<div className="bg-[#080808] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl md:text-6xl tracking-tighter text-white mb-6 font-space-grotesk font-semibold" style={{}}>
              Unsere Filialen
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light font-geist" style={{}}>
              Finden Sie den Standort in Ihrer Nähe.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 md:space-y-12">

<div className="flex flex-col lg:flex-row gap-0 glass-card rounded-2xl overflow-hidden border border-white/10">
<div className="lg:w-1/2 h-64 lg:h-auto relative">
<img alt="Kerpen" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3807e327-41ec-4424-8918-94f31772d3e0_3840w.jpg"/>
</div>
<div className="lg:w-1/2 p-8 lg:p-14">
<div className="inline-block px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold mb-6 tracking-wide font-geist" style={{}}>
                HAUPTSITZ
              </div>
<h2 className="text-3xl md:text-4xl text-white mb-8 tracking-tight font-space-grotesk font-semibold" style={{}}>
                Filiale Kerpen
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div>
<h4 className="font-medium text-white mb-3 flex items-center font-geist" style={{}}>
<iconify-icon className="mr-3 text-brand-red" icon="solar:map-point-linear"></iconify-icon>
                    Adresse
                  </h4>
<p className="text-gray-400 font-light cursor-pointer hover:text-white transition-colors font-geist" onclick="simulateRoute('Humboldtstraße 7, 50171 Kerpen')" style={{}}>
                    Humboldtstraße 7
                    <br/>
                    50171 Kerpen
                  </p>
</div>
<div>
<h4 className="font-medium text-white mb-3 flex items-center font-geist" style={{}}>
<iconify-icon className="mr-3 text-brand-red" icon="solar:phone-calling-linear"></iconify-icon>
                    Kontakt
                  </h4>
<p className="text-gray-400 font-light">
<a className="hover:text-white transition-colors block font-geist" href="#" onclick="simulateCall('02237 12345', event)" style={{}}>
                      Tel: 02237 12345
                    </a>
<a className="hover:text-white transition-colors block font-geist" href="#" onclick="simulateEmail('kerpen@autoteile-cologne.de', event)" style={{}}>
                      kerpen@autoteile-cologne.de
                    </a>
</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center shadow-lg font-geist" href="#" onclick="simulateCall('02237 12345', event)" style={{}}>
                  Anrufen
                </a>
<button className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors font-geist" onclick="simulateRoute('Humboldtstraße 7, 50171 Kerpen')" style={{}}>
                  Route planen
                </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass-card border border-white/10 rounded-2xl p-8 md:p-10">
<h2 className="text-2xl text-white mb-4 tracking-tight font-space-grotesk font-semibold" style={{}}>
                Filiale Bergheim
              </h2>
<p className="text-gray-400 mb-8 font-light cursor-pointer hover:text-white font-geist" onclick="simulateRoute('Kölner Straße 12, 50126 Bergheim')" style={{}}>
                Kölner Straße 12, 50126 Bergheim
              </p>
<div className="grid grid-cols-2 gap-4">
<a className="block w-full text-center border border-white/20 rounded-lg py-3 font-medium hover:bg-white/5 text-white transition-colors font-geist" href="#" onclick="simulateCall('02271 98765', event)" style={{}}>
                  Anrufen
                </a>
<button className="block w-full text-center border border-white/20 rounded-lg py-3 font-medium hover:bg-white/5 text-white transition-colors font-geist" onclick="simulateRoute('Kölner Straße 12, 50126 Bergheim')" style={{}}>
                  Route
                </button>
</div>
</div>
<div className="glass-card border border-white/10 rounded-2xl p-8 md:p-10">
<h2 className="text-2xl text-white mb-4 tracking-tight font-space-grotesk font-semibold" style={{}}>
                Filiale Düren
              </h2>
<p className="text-gray-400 mb-8 font-light cursor-pointer hover:text-white font-geist" onclick="simulateRoute('Veldener Straße 34, 52349 Düren')" style={{}}>
                Veldener Straße 34, 52349 Düren
              </p>
<div className="grid grid-cols-2 gap-4">
<a className="block w-full text-center border border-white/20 rounded-lg py-3 font-medium hover:bg-white/5 text-white transition-colors font-geist" href="#" onclick="simulateCall('02421 55566', event)" style={{}}>
                  Anrufen
                </a>
<button className="block w-full text-center border border-white/20 rounded-lg py-3 font-medium hover:bg-white/5 text-white transition-colors font-geist" onclick="simulateRoute('Veldener Straße 34, 52349 Düren')" style={{}}>
                  Route
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="offers">
<div className="bg-brand-red pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
<div className="absolute inset-0 bg-black/40"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
<h1 className="text-4xl md:text-6xl tracking-tighter mb-6 font-space-grotesk font-semibold" style={{}}>
              Aktuelle Angebote
            </h1>
<p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light font-geist" style={{}}>
              Saisonale Aktionen und Top-Deals.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-12 md:mb-16 flex flex-col md:flex-row hover:border-brand-red/30 transition-all">
<div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<div className="text-brand-red font-bold tracking-widest uppercase text-xs mb-4 font-geist" style={{}}>
                Saison-Special
              </div>
<h2 className="text-3xl md:text-5xl text-white mb-6 tracking-tight font-space-grotesk font-semibold" style={{}}>
                Urlaubs-Check für
                <span className="text-brand-red font-space-grotesk font-semibold" style={{}}>19,90 €</span>
</h2>
<p className="text-gray-400 mb-10 leading-relaxed font-light font-geist" style={{}}>
                Sicher in den Urlaub: Wir prüfen Beleuchtung, Bremsen, Reifen,
                Flüssigkeiten und Klimaanlage.
              </p>
<button className="bg-brand-red text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-all w-full md:w-auto shadow-lg hover:scale-105 duration-200 font-geist" onclick="openOffer('holiday')" style={{}}>
                Termin vereinbaren
              </button>
</div>
<div className="md:w-1/2 bg-gray-800 relative min-h-[250px] md:min-h-[350px]">
<img alt="Car Check" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="border border-white/10 bg-[#080808] rounded-2xl p-8 hover:border-brand-red/30 transition-all cursor-pointer group" onclick="openOffer('wipers')">
<div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 font-geist" style={{}}>
                Bis 30.09.
              </div>
<h3 className="text-xl md:text-2xl text-white mb-3 group-hover:text-brand-red transition-colors font-space-grotesk font-semibold" style={{}}>
                20% auf Scheibenwischer
              </h3>
<p className="text-gray-400 mb-6 font-light font-geist" style={{}}>
                Bosch Aerotwin Scheibenwischer inkl. Montage.
              </p>
<div className="text-brand-red font-medium flex items-center font-geist" style={{}}>
                Details
                <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="border border-white/10 bg-[#080808] rounded-2xl p-8 hover:border-brand-red/30 transition-all cursor-pointer group" onclick="openOffer('battery')">
<div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 font-geist" style={{}}>
                Bis 31.10.
              </div>
<h3 className="text-xl md:text-2xl text-white mb-3 group-hover:text-brand-red transition-colors font-space-grotesk font-semibold" style={{}}>
                Batterie-Tausch
              </h3>
<p className="text-gray-400 mb-6 font-light font-geist" style={{}}>
                Kostenloser Einbau bei Neukauf.
              </p>
<div className="text-brand-red font-medium flex items-center font-geist" style={{}}>
                Details
                <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="border border-white/10 bg-[#080808] rounded-2xl p-8 hover:border-brand-red/30 transition-all cursor-pointer group" onclick="openOffer('oil')">
<div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 font-geist" style={{}}>
                Dauerhaft
              </div>
<h3 className="text-xl md:text-2xl text-white mb-3 group-hover:text-brand-red transition-colors font-space-grotesk font-semibold" style={{}}>
                Ölwechsel-Set
              </h3>
<p className="text-gray-400 mb-6 font-light font-geist" style={{}}>
                5L Markenöl + Filter ab 49,90 €.
              </p>
<div className="text-brand-red font-medium flex items-center font-geist" style={{}}>
                Details
                <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="page-section" id="offer-detail">
<div className="relative h-[50vh] min-h-[400px]">
<div className="absolute inset-0">
<img alt="Detail" className="w-full h-full object-cover" id="detail-image" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<button className="group flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit" onclick="navigateTo('offers')">
<div className="p-2 bg-white/10 rounded-full mr-3 group-hover:bg-brand-red transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</div>
<span className="font-medium font-geist" style={{}}>Zurück zu den Angeboten</span>
</button>
<div className="bg-brand-red/20 border border-brand-red/30 text-brand-red px-3 py-1 rounded text-xs font-bold uppercase tracking-widest w-fit mb-4 backdrop-blur-md font-geist" style={{}}>
              Angebot
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter shadow-black drop-shadow-lg" id="detail-title"></h1>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
<div className="lg:w-2/3">
<h2 className="text-2xl text-white mb-6 font-space-grotesk font-semibold" style={{}}>
                Details zum Angebot
              </h2>
<p className="text-gray-400 text-lg leading-relaxed mb-10 font-light" id="detail-desc"></p>
<div className="bg-[#080808] border border-white/5 rounded-2xl p-8">
<h3 className="text-lg text-white mb-6 font-medium flex items-center font-geist" style={{}}>
<iconify-icon className="mr-3 text-brand-red" icon="solar:list-check-linear"></iconify-icon>
                  Leistungsumfang
                </h3>
<ul className="space-y-4" id="detail-list">

</ul>
</div>
</div>
<div className="lg:w-1/3">
<div className="glass-card rounded-2xl p-8 sticky top-24 border border-white/10 shadow-2xl">
<div className="text-center mb-8">
<div className="text-gray-500 text-sm uppercase tracking-wider mb-2 font-geist" style={{}}>
                    Preis für dieses Paket
                  </div>
<div className="text-4xl md:text-5xl font-bold text-brand-red font-display" id="detail-price"></div>
<div className="text-gray-500 text-xs mt-2 font-geist" style={{}}>
                    inkl. MwSt. &amp; Service
                  </div>
</div>
<div className="space-y-4">
<button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-lg flex items-center justify-center group font-geist" onclick="navigateTo('contact'); showToast('Angebot vorgemerkt. Bitte Termin wählen.')" style={{}}>
                    Termin vereinbaren
                    <iconify-icon className="ml-2 text-xl group-hover:scale-110 transition-transform" icon="solar:calendar-add-linear"></iconify-icon>
</button>
<button className="w-full bg-white/5 text-white font-medium py-4 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20 font-geist" onclick="navigateTo('contact')" style={{}}>
                    Frage stellen
                  </button>
</div>
<div className="mt-6 pt-6 border-t border-white/10 text-center">
<p className="text-xs text-gray-500 leading-relaxed font-geist" style={{}}>
                    Angebot gültig solange der Vorrat reicht. Abbildungen können
                    abweichen. Zusatzarbeiten werden gesondert berechnet.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="services">
<div className="bg-[#080808] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl md:text-6xl tracking-tighter text-white mb-6 font-space-grotesk font-semibold" style={{}}>
              Unsere Services
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light font-geist" style={{}}>
              Fachgerechte Montage und Spezialservices.
            </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 md:space-y-24">
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
<div className="md:w-1/2 order-2 md:order-1">
<div className="w-16 h-16 bg-brand-red/10 border border-brand-red/20 rounded-2xl flex items-center justify-center text-brand-red mb-8">
<iconify-icon height="32" icon="solar:wind-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-space-grotesk font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                Autoglas Service
              </h2>
<p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Wir reparieren kleine Schäden oft kostenlos (bei Teilkasko) oder
                tauschen die Scheibe fachgerecht aus.
              </p>
<button className="text-white font-medium border border-white/20 px-8 py-3 rounded-lg hover:bg-brand-red hover:border-brand-red transition-all w-full md:w-auto font-geist" onclick="navigateTo('contact'); showToast('Betreff: Autoglas')" style={{transition: 'outline 0.1s ease-in-out'}}>
                Termin anfragen
              </button>
</div>
<div className="md:w-1/2 order-1 md:order-2">
<img alt="Autoglas" className="rounded-2xl shadow-2xl w-full object-cover h-64 md:h-[500px] border border-white/10 opacity-90" src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
<div className="md:w-1/2">
<img alt="DPF" className="rounded-2xl shadow-2xl w-full object-cover h-64 md:h-[500px] border border-white/10 opacity-90" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-1/2">
<div className="w-16 h-16 bg-brand-red/10 border border-brand-red/20 rounded-2xl flex items-center justify-center text-brand-red mb-8">
<iconify-icon height="32" icon="solar:tuning-square-2-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-space-grotesk font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                DPF Reinigung
              </h2>
<p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Wir reinigen Ihren DPF professionell und stellen bis zu 98% der
                Durchflussmenge wieder her.
              </p>
<button className="text-white font-medium border border-white/20 px-8 py-3 rounded-lg hover:bg-brand-red hover:border-brand-red transition-all w-full md:w-auto font-geist" onclick="navigateTo('contact'); showToast('Betreff: DPF Reinigung')" style={{transition: 'outline 0.1s ease-in-out'}}>
                Beratung anfordern
              </button>
</div>
</div>
</div>
</div>

<div className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
<div>
<h1 className="text-4xl md:text-5xl tracking-tighter text-white mb-8 font-space-grotesk font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                Kontakt aufnehmen
              </h1>
<p className="text-lg md:text-xl text-gray-400 mb-12 font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Sie haben Fragen? Schreiben Sie uns.
              </p>
<div className="space-y-8">
<div className="flex items-start">
<div className="w-12 h-12 md:w-14 md:h-14 bg-[#080808] border border-white/10 rounded-2xl flex items-center justify-center text-brand-red flex-shrink-0">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="ml-4 md:ml-6 cursor-pointer group" onclick="simulateCall('0221 123 45 67', event)">
<h3 className="text-lg md:text-xl font-medium text-white group-hover:text-brand-red transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Telefon
                    </h3>
<p className="mt-1 text-gray-400 font-light group-hover:text-white transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                      0221 123 45 67
                    </p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 md:w-14 md:h-14 bg-[#080808] border border-white/10 rounded-2xl flex items-center justify-center text-brand-red flex-shrink-0">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="ml-4 md:ml-6 cursor-pointer group" onclick="simulateEmail('info@autoteile-cologne.de', event)">
<h3 className="text-lg md:text-xl font-medium text-white group-hover:text-brand-red transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                      E-Mail
                    </h3>
<p className="mt-1 text-gray-400 font-light group-hover:text-white transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                      info@autoteile-cologne.de
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-[#080808] rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
<form className="space-y-4 md:space-y-6" id="contactForm" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
<div>
<label className="block text-sm font-medium text-gray-400 mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Name
                    </label>
<input className="block w-full rounded-lg bg-black/50 border-white/10 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3 border placeholder-gray-600 transition-colors focus:bg-black" placeholder="Ihr Name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Telefon
                    </label>
<input className="block w-full rounded-lg bg-black/50 border-white/10 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3 border placeholder-gray-600 transition-colors focus:bg-black" placeholder="Ihre Nummer" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    E-Mail
                  </label>
<input className="block w-full rounded-lg bg-black/50 border-white/10 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3 border placeholder-gray-600 transition-colors focus:bg-black" placeholder="Ihre E-Mail" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Filiale
                  </label>
<select className="block w-full rounded-lg bg-black/50 border-white/10 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3 border transition-colors focus:bg-black">
<option className="bg-gray-900 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Bitte wählen</option>
<option className="bg-gray-900 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Kerpen</option>
<option className="bg-gray-900 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Bergheim</option>
<option className="bg-gray-900 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Düren</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Nachricht
                  </label>
<textarea className="block w-full rounded-lg bg-black/50 border-white/10 text-white shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm p-3 border placeholder-gray-600 transition-colors focus:bg-black" placeholder="Ihre Nachricht..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-red text-white font-medium py-3 md:py-4 px-6 rounded-lg hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(217,35,35,0.3)] hover:scale-[1.02] font-geist" id="submitBtn" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">
                  Nachricht senden
                </button>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#050505] border-t border-white/10 text-gray-400">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
<div className="col-span-1">
<div className="flex items-center text-white mb-6 cursor-pointer hover:text-gray-300 transition-colors" onclick="navigateTo('home')">
<iconify-icon className="text-brand-red text-2xl mr-3" icon="solar:transmission-circle-linear"></iconify-icon>
<span className="font-medium text-lg tracking-tight font-display font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                ATC COLOGNE
              </span>
</div>
<p className="text-sm leading-relaxed font-light opacity-70 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
              Ihr zuverlässiger Partner für KFZ-Ersatzteile und
              Werkstatt-Service im Rheinland seit 2001.
            </p>
</div>
<div className="">
<h3 className="text-white font-medium mb-4 md:mb-6 tracking-wide text-sm font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
              FILIALEN
            </h3>
<ul className="space-y-3 text-sm font-light">
<li className="">
<button className="hover:text-brand-red transition-colors text-left w-full font-geist" onclick="navigateTo('branches')" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Kerpen (Zentrale)
                </button>
</li>
<li className="">
<button className="hover:text-brand-red transition-colors text-left w-full font-geist" onclick="navigateTo('branches')" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Bergheim
                </button>
</li>
<li className="">
<button className="hover:text-brand-red transition-colors text-left w-full font-geist" onclick="navigateTo('branches')" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Düren
                </button>
</li>
</ul>
</div>
<div className="">
<h3 className="text-white font-medium mb-4 md:mb-6 tracking-wide text-sm font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
              SERVICE
            </h3>
<ul className="space-y-3 text-sm font-light">
<li className="">
<button className="hover:text-brand-red transition-colors text-left w-full font-geist" onclick="navigateTo('services')" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Autoglas
                </button>
</li>
<li className="">
<button className="hover:text-brand-red transition-colors text-left w-full font-geist" onclick="navigateTo('services')" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Batterie-Check
                </button>
</li>
<li>
<button className="hover:text-brand-red transition-colors text-left w-full font-geist" onclick="navigateTo('services')" style={{transition: 'outline 0.1s ease-in-out'}}>
                  DPF Reinigung
                </button>
</li>
</ul>
</div>
<div className="">
<h3 className="text-white font-medium mb-4 md:mb-6 tracking-wide text-sm font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
              KONTAKT
            </h3>
<ul className="space-y-3 text-sm font-light">
<li className="flex cursor-pointer hover:text-white transition-colors items-center font-geist" onclick="simulateCall('0221 123 45 67', event)" style={{transition: 'outline 0.1s ease-in-out'}}>02237 / 979 550</li>
<li className="flex items-center cursor-pointer hover:text-white transition-colors font-geist" onclick="simulateEmail('info@autoteile-cologne.de', event)" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mr-3 opacity-70" icon="solar:letter-linear"></iconify-icon>
                info@autoteile-cologne.de
              </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-500 gap-4">
<p className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>© 2026 Autoteile Cologne GmbH.</p>
<div className="flex space-x-8">
<button className="hover:text-white transition-colors font-geist" onclick="openModal('Impressum', '&lt;h3 class=\'text-lg font-bold text-white mb-2\'&gt;Autoteile Cologne GmbH&lt;/h3&gt;&lt;p class=\'mb-2\'&gt;Humboldtstraße 7&lt;br&gt;50171 Kerpen&lt;/p&gt;&lt;p class=\'mb-4\'&gt;Handelsregister: HRB 12345&lt;br&gt;USt-ID: DE123456789&lt;/p&gt;&lt;p&gt;Geschäftsführer: Max Mustermann&lt;/p&gt;')" style={{transition: 'outline 0.1s ease-in-out'}}>
              Impressum
            </button>
<button className="hover:text-white transition-colors font-geist" onclick="openModal('Datenschutz', '&lt;h3 class=\'text-lg font-bold text-white mb-2\'&gt;Datenschutzerklärung&lt;/h3&gt;&lt;p class=\'mb-4\'&gt;Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.&lt;/p&gt;&lt;p&gt;Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.&lt;/p&gt;')" style={{transition: 'outline 0.1s ease-in-out'}}>
              Datenschutz
            </button>
</div>
</div>
</div>
</footer>

<div id="toast-container"></div>

<div className="modal-backdrop" id="modal-backdrop" onclick="closeModal(event)">
<div className="modal-content p-6 md:p-8" onclick="event.stopPropagation()">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl text-white font-space-grotesk font-semibold" id="modal-title" style={{transition: 'outline 0.1s ease-in-out'}}>
            Titel
          </h2>
<button className="text-gray-400 hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="text-gray-400 font-light leading-relaxed" id="modal-body">

</div>
<div className="mt-8 pt-4 border-t border-white/10 text-right">
<button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium font-geist" onclick="closeModal()" style={{transition: 'outline 0.1s ease-in-out'}}>
            Schließen
          </button>
</div>
</div>
</div>



    </>
  );
}
