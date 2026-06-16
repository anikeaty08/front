import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ["Inter", "sans-serif"] },
colors: {
brand: {
50: "#f0f9ff",
100: "#e0f2fe",
400: "#3dc2ff",
500: "#0ea5e9",
900: "##2b2d3a",
950: "#323445",
},
},
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    if (typeof loadYouTubeVideo !== "function") {
      function loadYouTubeVideo(mountId, playBtnId, videoId) {
        var mount = document.getElementById(mountId);
        var btn = document.getElementById(playBtnId);
        if (!mount || !btn || !videoId) return;

        var iframe = document.createElement("iframe");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("title", "YouTube Video");
        iframe.className = "absolute inset-0 w-full h-full";
        iframe.src =
          "https://www.youtube-nocookie.com/embed/" +
          encodeURIComponent(videoId) +
          "?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1";

        mount.innerHTML = "";
        mount.appendChild(iframe);
        btn.style.display = "none";
      }
    }
  


      // Reveal animations (single observer)
      document.addEventListener('DOMContentLoaded', () => {
        const reveals = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
          reveals.forEach((el) => el.classList.add('active'));
          return;
        }

        const revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
        );

        reveals.forEach((el) => revealObserver.observe(el));
      });
    


      let isYearly = true;

            const pricingData = {
              LAUNCH: { yearly: 299, monthly: 399, stripe: 'https://buy.stripe.com/00w28scS8bBY7npdy02wU07' },
              STARTER: { yearly: 499, monthly: 699, stripe: 'https://buy.stripe.com/dRm28sg4k9tQazBalO2wU06' },
              PRO: { yearly: 799, monthly: 1199, stripe: 'https://buy.stripe.com/28E9AU9FW7lIePReC42wU08' },
              PREMIUM: { yearly: 1399, monthly: 1999, stripe: 'https://buy.stripe.com/3cI4gAaK00XkePReC42wU09' }
            };

            function applyPricing() {
              const circle = document.getElementById('toggle-circle');
              const cards = document.querySelectorAll('.pricing-card');
              if (circle) {
                circle.style.transform = isYearly ? 'translateX(24px)' : 'translateX(0px)';
              }

              cards.forEach((card) => {
                const plan = card.dataset.plan;
                const priceDisplay = card.querySelector('.price-display');
                const billingInfo = card.querySelector('.billing-info');
                const cta = card.querySelector('.cta-button');
                const data = pricingData[plan];

                if (!data || !priceDisplay || !billingInfo || !cta) return;

                if (isYearly) {
                  priceDisplay.innerText = data.yearly;
                  billingInfo.innerHTML = `Abrechnung jährlich.<br>Laufzeit: 12 Monate. ${data.yearly * 12} € / Jahr`;
                  cta.innerHTML = `<iconify-icon icon="logos:whatsapp-icon" width="${plan === 'PRO' ? 18 : 16}"></iconify-icon> Jetzt Starten`;
                  cta.href = `http://wa.me/+4916093850936?text=Ich%20habe%20Interesse%20an%20Social%20Media%20Management%20J%C3%A4hrlich%20mit%20${plan}`;
                } else {
                  priceDisplay.innerText = data.monthly;
                  billingInfo.innerHTML = 'Abrechnung monatlich.<br>Laufzeit: 3 Monate.';
                  cta.innerText = 'Abo starten';
                  cta.href = data.stripe;
                }
              });
            }

            function togglePricing() {
              isYearly = !isYearly;
              applyPricing();
            }

            document.addEventListener('DOMContentLoaded', applyPricing);
    


      // Mobile menu FIX: always closes overlay + prevents "stuck" menu on anchor clicks
      (function () {
        'use strict';

        const menu = document.getElementById('mobileMenu');
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const menuClose = document.getElementById('menuCloseBtn');

        if (!menu) return;

        // Ensure menu is hidden on load (prevents iOS/Safari glitches)
        menu.classList.add('hidden');
        menu.classList.remove('menu-open');

        function lockScroll() {
          document.documentElement.classList.add('overflow-hidden');
          document.body.classList.add('overflow-hidden');
        }

        function unlockScroll() {
          document.documentElement.classList.remove('overflow-hidden');
          document.body.classList.remove('overflow-hidden');
        }

        function openMenu() {
          menu.classList.remove('hidden');
          // next frame so opacity transition triggers reliably
          requestAnimationFrame(() => menu.classList.add('menu-open'));
          lockScroll();
        }

        function closeMenu() {
          menu.classList.remove('menu-open');
          unlockScroll();

          const hide = (e) => {
            if (e.propertyName && e.propertyName !== 'opacity') return;
            menu.classList.add('hidden');
            menu.removeEventListener('transitionend', hide);
          };

          menu.addEventListener('transitionend', hide);
          // fallback in case transitionend doesn't fire (some mobile browsers)
          setTimeout(() => menu.classList.add('hidden'), 400);
        }

        if (menuToggle) {
          menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openMenu();
          });
        }

        if (menuClose) {
          menuClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
          });
        }

        // Event delegation: handle clicks on ANY link inside the overlay (even if you click an inner element)
        menu.addEventListener('click', (e) => {
          const link = e.target.closest('a');
          if (!link) return;

          const href = link.getAttribute('href') || '';

          // Always close overlay immediately
          closeMenu();

          // Smooth scroll for anchor links
          if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', href);
            }
          }
        });

        // Escape closes
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeMenu();
        });

        // If resized to desktop, ensure menu is closed
        window.addEventListener('resize', () => {
          if (window.innerWidth >= 768) closeMenu();
        });
      })();
    


      function loadYouTubeVideo(mountId, btnId, videoId) {
        const mount = document.getElementById(mountId);
        const btn = document.getElementById(btnId);
        if (!mount) return;
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.className = 'w-full h-full absolute inset-0';
        mount.innerHTML = '';
        mount.appendChild(iframe);
        if (btn) btn.style.display = 'none';
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="block hover:opacity-80 transition-opacity" href="#"></a>
<a className="" href="https://noparade.de" rel="noopener noreferrer" role="button" target="_blank">
<img alt="NO PARADE" className="md:h-9 cursor-pointer w-auto h-8 object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8fa6bcf-bde5-4bc0-b4e8-99a8686ac127_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#features">
            Features
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#pricing">
            Preise
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#setup-service">
            Setup Service
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#blueprint">
            360° Blueprint
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#automation">
            Auto-Comment &amp; DM
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#referral">
            Partnerprogramm
          </a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#faq">
            FAQ
          </a>
</div>
<div className="flex items-center gap-4">
<a aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors p-2" href="https://instagram.com/noparade" target="_blank">
<iconify-icon icon="skill-icons:instagram" width="20"></iconify-icon>
</a>
<a className="hidden sm:inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-slate-200 text-xs font-medium text-brand-950 bg-white rounded-full px-4 py-2" href="https://wa.me/4916093850936?text=Ich%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung">
<iconify-icon icon="logos:whatsapp-icon" width="14"></iconify-icon>
            Jetzt kontaktieren
          </a>
<button aria-label="Menu öffnen" className="md:hidden text-white" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-brand-950/95 backdrop-blur-xl z-[999] md:hidden hidden" id="mobileMenu">
<div className="flex flex-col h-full items-center justify-center gap-8 px-6">
<button aria-label="Menu schließen" className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all" id="menuCloseBtn">
<iconify-icon icon="solar:close-circle-bold" width="32"></iconify-icon>
</button>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#features">
          Features
        </a>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#pricing">
          Preise
        </a>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#setup-service">
          Setup Service
        </a>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#blueprint">
          360° Blueprint
        </a>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#automation">
          Auto-Comment &amp; DM
        </a>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#referral">
          Partnerprogramm
        </a>
<a className="menu-link text-2xl font-medium text-white hover:text-[#3dc2ff] transition-colors" href="#faq">
          FAQ
        </a>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-950 rounded-full font-semibold mt-4 hover:bg-slate-200 transition-colors menu-link" href="https://wa.me/4916093850936?text=Ich%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
          WhatsApp öffnen
        </a>
<a className="flex items-center gap-3 text-white text-lg font-medium hover:text-[#3dc2ff] transition-colors menu-link" href="https://instagram.com/noparade" target="_blank">
<iconify-icon icon="skill-icons:instagram" width="28"></iconify-icon>
          @noparade
        </a>
</div>
</div>

<section className="pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden reveal active relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#3dc2ff]/20 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6">
<div className="inline-flex text-xs font-medium text-[#F87171] tracking-wide bg-[#F87171]/10 border-[#F87171]/20 border rounded-full mb-8 px-3 py-1 gap-2 items-center">
          Für Freelancer, Selbstständige &amp; Unternehmen
          <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F87171] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F87171]"></span>
</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6">
          Du weißt, dass Social Media wichtig ist, aber dir fehlt
          <span className="gradient-text">
            die Zeit, die Strategie und die Konstanz.
          </span>
</h1>
<p className="text-lg md:text-xl leading-relaxed font-light text-slate-400 max-w-2xl mx-auto mb-10">
          Wir übernehmen dein komplettes Social Media Management mit
          KI-gestütztem Design, Strategie und Redaktionsplan.
          <br/>
<span className="text-[#3dc2ff] font-medium">
            Ohne dass du einen Finger rühren musst.
          </span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto hover:shadow-[0_0_20px_rgba(61,194,255,0.4)] transition-all flex items-center justify-center gap-2 font-medium text-white bg-gradient-to-br from-[#3dc2ff] to-[#94dbff] rounded-full px-8 py-3.5 shadow-lg" href="#pricing">
            Preise &amp; Pakete ansehen
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto hover:bg-white/10 transition-colors font-medium text-white bg-white/5 border border-white/10 rounded-full px-8 py-3.5" href="#contact">
            Beratung vereinbaren
          </a>
</div>
</div>
</section>

<div className="overflow-hidden bg-black/40 max-w-4xl border-white/10 border rounded-2xl mt-24 mr-auto mb-24 ml-auto relative shadow-[0_0_50px_rgba(61,194,255,0.15)] backdrop-blur-sm">
<div className="aspect-video w-full">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full shadow-2xl shadow-blue-500/10" frameborder="0" src="https://www.youtube.com/embed/3z6mEy9AwmE?rel=0" title="CRUSHLER AI Social Media Management Demo"></iframe>
</div>
<div className="p-4 text-center border-t border-white/10">
<a className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10" href="https://www.youtube.com/watch?v=3z6mEy9AwmE" rel="noopener noreferrer" target="_blank">
          Auf YouTube öffnen
        </a>
</div>
</div>

<section className="reveal bg-brand-950 border-t border-white/5 pt-24 pb-24 active">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-4xl mb-16 mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Das passiert, wenn du Social Media
            <span className="text-[#3dc2ff]">allein machst (oder gar nicht)</span>
</h2>
<p className="text-slate-400 text-lg">
            Vermeide die klassischen Fehler, die dich Umsatz und Vertrauen
            kosten.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Unregelmäßige Posts
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Du postest wochenlang nichts, dann wieder mehrere Posts. Der
              Algorithmus straft dich ab.
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Fehlendes Vertrauen
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Content wirkt uneinheitlich. Potenzielle Kunden zweifeln an deiner
              Professionalität.
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Zeitverschwendung
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Stunden in Canva, Texte, Planung. Zeit, die im Kerngeschäft fehlt.
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-700/30 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Keine Strategie</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Du postest ohne Plan. Keine klare Message, keine konsistente
              Positionierung.
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-700/30 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Kundenverlust</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Wettbewerber sind sichtbarer. Kunden gehen dorthin, wo Präsenz
              spürbar ist.
            </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-700/30 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Digitale Stille</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Wer online inaktiv wirkt, wird seltener angefragt. Dein Profil ist
              deine Visitenkarte.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden reveal pt-24 pb-24 relative active" id="features">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#3dc2ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex text-xs font-medium text-[#F87171] tracking-wide bg-[#F87171]/10 border-[#F87171]/20 border rounded-full mb-8 px-3 py-1 gap-2 items-center mx-auto">
            Die Lösung
            <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F87171] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F87171]"></span>
</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Dein Social Media – professionell, konstant und strategisch.
          </h2>
<p className="text-lg text-slate-400">
            Wir erstellen, planen und veröffentlichen Content auf mehreren
            Kanälen – mit klarer Struktur.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="lg:col-span-2 row-span-2 flex flex-col bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 justify-between group hover:border-[#3dc2ff]/30 transition-colors">
<div>
<div className="w-12 h-12 bg-[#3dc2ff]/10 rounded-xl flex items-center justify-center text-[#3dc2ff] mb-6">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">
                8–30 Post-Entwürfe pro Monat
              </h3>
<p className="text-slate-400">
                Regelmäßiger Output: Text-Posts, Bild-Posts, Carousels und
                Story-Formate – je nach Paket.
              </p>
</div>
<div className="mt-8 flex gap-2 flex-wrap">
<span className="px-3 py-1 rounded-md bg-white/10 text-xs text-white">
                Feed
              </span>
<span className="px-3 py-1 rounded-md bg-white/10 text-xs text-white">
                Stories
              </span>
<span className="px-3 py-1 rounded-md bg-white/10 text-xs text-white">
                Carousels
              </span>
</div>
</div>
<div className="p-6 rounded-3xl bg-brand-900 border border-white/10 hover:border-white/20 transition-colors flex flex-col">
<div className="w-12 h-12 bg-[#3dc2ff]/10 rounded-xl flex items-center justify-center text-[#3dc2ff] mb-4">
<iconify-icon icon="solar:route-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Content-Strategie
            </h3>
<p className="text-sm text-slate-400">
              Ziele, Themen und Formate – statt zufälliger Posts. Mit
              Hashtag-Recherche als Basis.
            </p>
</div>
<div className="p-6 rounded-3xl bg-brand-900 border border-white/10 hover:border-white/20 transition-colors flex flex-col">
<div className="w-12 h-12 bg-[#3dc2ff]/10 rounded-xl flex items-center justify-center text-[#3dc2ff] mb-4">
<iconify-icon icon="solar:verified-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Du hast die Kontrolle
            </h3>
<p className="text-sm text-slate-400">
              Redaktionsplan &amp; Feedback: Nichts geht live, ohne deine
              Freigabe.
            </p>
</div>
<div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-brand-900 border border-white/10 hover:border-[#3dc2ff]/30 transition-colors flex flex-col">
<div className="w-12 h-12 bg-[#3dc2ff]/10 rounded-xl flex items-center justify-center text-[#3dc2ff] mb-4">
<iconify-icon icon="solar:user-speak-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Persönlicher Support
            </h3>
<p className="text-sm text-slate-400 mb-4">
              Direkter Ansprechpartner für Strategie und Anpassungen – ohne
              Ticket-System.
            </p>
<div className="flex gap-4 text-xs font-medium text-slate-300 flex-wrap">
<span className="flex items-center gap-1">
<iconify-icon icon="logos:whatsapp-icon" width="14"></iconify-icon>
                WhatsApp
              </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                E-Mail
              </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                Call
              </span>
</div>
</div>
<div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-brand-900 border border-white/10 hover:border-white/20 transition-colors flex flex-col">
<div className="w-12 h-12 bg-[#3dc2ff]/10 rounded-xl flex items-center justify-center text-[#3dc2ff] mb-4">
<iconify-icon icon="solar:share-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">
              Relevante Kanäle
            </h3>
<p className="text-slate-400 text-sm mb-4">
              Facebook, Instagram, LinkedIn, TikTok, Google Business, X und
              Pinterest – je nach Paket.
            </p>
<div className="flex gap-3 flex-wrap">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="logos:facebook" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="skill-icons:instagram" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="skill-icons:linkedin" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="logos:tiktok-icon" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-brand-900 border border-white/10 hover:border-white/20 transition-colors flex flex-col">
<div className="w-12 h-12 bg-[#3dc2ff]/10 rounded-xl flex items-center justify-center text-[#3dc2ff] mb-4">
<iconify-icon icon="solar:chart-2-bold" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Transparente Analytics
            </h3>
<p className="text-sm text-slate-400 mb-4">
              Zugang zu den wichtigsten Kennzahlen, damit du Wirkung siehst –
              nicht nur Output.
            </p>
<div className="text-xs text-slate-500 font-mono bg-black/30 p-2 rounded border border-white/5 inline-block w-fit">
              KPIs: Reichweite, Interaktion, Wachstum
            </div>
</div>
</div>
</div>
</section>

<section className="reveal active bg-brand-950 border-white/5 border-t pt-24 pb-24" id="video-production">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex text-xs font-semibold text-[#D8EF5B] tracking-wide bg-[#D8EF5B]/10 border-[#D8EF5B]/20 border rounded-full mb-8 px-3 py-1 gap-2 items-center mx-auto uppercase">
        Videoproduktion
        <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8EF5B] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8EF5B]"></span>
</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
        Sichtbarkeit, die bleibt:
        <span className="text-[#D8EF5B]">Reels, Image- &amp; Eventfilme.</span>
</h2>
<p className="text-lg text-slate-400 mb-6">
        Von kurzen Attention-Grabbern für Social Media bis zum hochwertigen
        Imagefilm.
        <strong className="text-white font-medium">Wichtig: Alle Leistungen sind individuell zubuchbar.</strong>
        Wir schnüren das Paket, das genau zu deinem Bedarf passt, keine
        starren Vorgaben.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto hover:shadow-[0_0_20px_rgba(216,239,91,0.3)] transition-all flex items-center justify-center gap-2 font-semibold text-[#020617] bg-[#D8EF5B] rounded-full px-8 py-3.5 shadow-lg" href="#contact">
          Projekt anfragen
          <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto hover:bg-white/10 transition-colors font-medium text-white bg-white/5 border border-white/10 rounded-full px-8 py-3.5" href="https://wa.me/4916093850936?text=Beratung%20Videoproduktion">
          Beratung/Call buchen
        </a>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 gap-x-12 gap-y-12 items-center">
<div className="space-y-8">
<div>
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Reels &amp; Short Videos die überzeugen
            <span className="text-slate-500 text-lg font-normal whitespace-nowrap">(15–60 Sek.)</span>
</h3>
<p className="text-slate-400 leading-relaxed">
            Plattformgerechter Content für Instagram, TikTok, Facebook und
            YouTube Shorts. Wir fangen authentische Momente vor Ort ein und
            übernehmen den kompletten Schnitt – für maximale Interaktion und
            messbare Anfragen.
          </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-[#22727B]/10 border border-[#22727B]/30">
<h4 className="text-white font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-[#D8EF5B] text-xl" icon="solar:star-fall-minimalistic-bold"></iconify-icon>
              Dein Nutzen
            </h4>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><span className="text-[#D8EF5B] font-bold">✓</span>Mehr Sichtbarkeit</li>
<li className="flex items-start gap-2"><span className="text-[#D8EF5B] font-bold">✓</span>Hohe Interaktionen</li>
<li className="flex items-start gap-2"><span className="text-[#D8EF5B] font-bold">✓</span>Planbare Anfragen</li>
</ul>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<h4 className="text-white font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-red-400 text-xl" icon="solar:close-circle-bold"></iconify-icon>
              Pain Points gelöst
            </h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-start gap-2"><span className="text-red-400/80 font-bold">✗</span>Kein Technikstress</li>
<li className="flex items-start gap-2"><span className="text-red-400/80 font-bold">✗</span>Kein mühsamer Schnitt
              </li>
<li className="flex items-start gap-2"><span className="text-red-400/80 font-bold">✗</span>Kein Format-Chaos</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#22727B]/5 border border-[#22727B]/20">
<h4 className="text-white font-medium mb-4">Konkrete Deliverables:</h4>
<div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
<span className="px-3 py-1.5 bg-[#22727B]/20 text-[#D8EF5B] rounded-md border border-[#22727B]/30">Format 9:16</span>
<span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10">Prof. Schnitt</span>
<span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10">Farblook &amp; Audio</span>
<span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10">Untertitel (optional)</span>
<span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10">Text-Overlays &amp; CTA</span>
<span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10">Export-Ready</span>
</div>
</div>
</div>

<div className="relative w-full z-10 mx-auto max-w-[320px] lg:max-w-none lg:w-[75%] lg:ml-auto">
<div className="absolute -inset-6 bg-gradient-to-tr from-[#22727B]/30 to-[#D8EF5B]/20 blur-3xl rounded-[3rem] -z-10">
</div>
<div className="relative aspect-[9/16] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-zinc-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] group transform transition-transform duration-700 hover:scale-[1.02]">
<div className="absolute inset-0 w-full h-full bg-zinc-900" data-video-id="Jq_lwXpBqIA" id="ytMountShortsOpt1">
</div>
<button aria-label="Video abspielen" className="absolute inset-0 z-10 grid place-items-center group/btn" id="ytPlayShortsOpt1" onclick="loadYouTubeVideo('ytMountShortsOpt1', 'ytPlayShortsOpt1', 'Jq_lwXpBqIA')" type="button">
<img alt="Shorts Vorschau" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-50" loading="lazy" onerror="this.onerror=null; this.src='https://i.ytimg.com/vi/Jq_lwXpBqIA/sddefault.jpg';" src="https://i.ytimg.com/vi/Jq_lwXpBqIA/maxresdefault.jpg"/>
<span className="relative inline-flex items-center justify-center rounded-full bg-[#D8EF5B] text-[#020617] w-16 h-16 sm:w-20 sm:h-20 shadow-[0_0_30px_rgba(216,239,91,0.5)] transition-all duration-500 group-hover/btn:scale-110">
<svg aria-hidden="true" className="w-8 h-8 sm:w-10 sm:h-10 translate-x-[2px]" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z" fill="currentColor"></path>
</svg>
</span>
</button>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">

<div className="relative w-full z-10 mx-auto lg:mx-0">
<div className="absolute -inset-6 bg-gradient-to-tr from-[#22727B]/30 to-[#D8EF5B]/20 blur-3xl rounded-[3rem] -z-10">
</div>
<div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-zinc-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] group transform transition-transform duration-700 hover:scale-[1.02]">
<div className="aspect-video w-full relative">
<div className="absolute inset-0 w-full h-full bg-zinc-900" data-video-id="3p-aHxV7zjU" id="ytMountImageEvent1">
</div>
<button aria-label="Video abspielen" className="absolute inset-0 z-10 grid place-items-center group/btn" id="ytPlayImageEvent1" onclick="loadYouTubeVideo('ytMountImageEvent1', 'ytPlayImageEvent1', '3p-aHxV7zjU')" type="button">
<img alt="Imagefilm / Eventfilm Vorschau" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-70" loading="lazy" onerror="this.onerror=null; this.src='https://i.ytimg.com/vi/3p-aHxV7zjU/sddefault.jpg';" src="https://i.ytimg.com/vi/3p-aHxV7zjU/maxresdefault.jpg"/>
<span className="relative inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-[#020617] w-16 h-16 sm:w-20 sm:h-20 shadow-2xl transition-all duration-500 group-hover/btn:scale-110 group-hover/btn:bg-[#D8EF5B]">
<svg aria-hidden="true" className="w-6 h-6 sm:w-8 sm:h-8 translate-x-[2px]" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z" fill="currentColor"></path>
</svg>
</span>
</button>

</div>
</div>
<p className="text-xs text-slate-400 mt-4 leading-relaxed">
          Beispiel: Imagefilm / Eventfilm – Story, Stimmung &amp; Trust in einem Clip.
          <span className="text-[#D8EF5B] font-medium">Alle Leistungen sind individuell zubuchbar.</span>
</p>
</div>

<div className="grid sm:grid-cols-2 gap-6">
<div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand-900 to-brand-950 border border-[#22727B]/30 relative overflow-hidden group hover:border-[#22727B]/60 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#22727B]/10 blur-[60px] rounded-full pointer-events-none">
</div>
<div className="w-14 h-14 rounded-2xl bg-[#22727B]/20 flex items-center justify-center text-[#D8EF5B] mb-6 border border-[#22727B]/40">
<iconify-icon icon="solar:videocamera-record-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Imagefilm</h3>
<p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Vertrauen aufbauen, Positionierung schärfen und komplexe Leistungen verständlich zeigen.
            Team, Werte und Prozesse werden sichtbar – ideal für Website, Ads und Sales.
            <span className="text-[#D8EF5B] font-medium">Individuell zubuchbar.</span>
</p>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex gap-3 items-center">
<iconify-icon className="text-[#22727B] text-lg" icon="solar:check-circle-bold"></iconify-icon>
              Professionelle Außendarstellung
            </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-[#22727B] text-lg" icon="solar:check-circle-bold"></iconify-icon>
              Social Proof &amp; Vertrauen
            </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-[#22727B] text-lg" icon="solar:check-circle-bold"></iconify-icon>
              Bessere Conversion (Web &amp; Ads)
            </li>
</ul>
</div>
<div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand-900 to-brand-950 border border-[#22727B]/30 relative overflow-hidden group hover:border-[#22727B]/60 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D8EF5B]/5 blur-[60px] rounded-full pointer-events-none">
</div>
<div className="w-14 h-14 rounded-2xl bg-[#22727B]/20 flex items-center justify-center text-[#D8EF5B] mb-6 border border-[#22727B]/40">
<iconify-icon icon="solar:gallery-favourite-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Eventfilm</h3>
<p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Stimmung, Highlights und echte Emotionen – als Aftermovie, Highlight-Cut oder Recruiting-Content.
            Du bekommst Material, das monatelang verwertbar ist.
            <span className="text-[#D8EF5B] font-medium">Individuell zubuchbar.</span>
</p>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex gap-3 items-center">
<iconify-icon className="text-[#22727B] text-lg" icon="solar:check-circle-bold"></iconify-icon>
              Mitreißende Highlight-Recaps
            </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-[#22727B] text-lg" icon="solar:check-circle-bold"></iconify-icon>
              Employer Branding &amp; Recruiting
            </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-[#22727B] text-lg" icon="solar:check-circle-bold"></iconify-icon>
              Content für Social &amp; Ads
            </li>
</ul>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 bg-white/[0.02] rounded-3xl p-8 md:p-10 border border-[#D8EF5B]/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#D8EF5B]/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-[#22727B]/20 text-[#D8EF5B] text-xs font-semibold uppercase rounded mb-6 border border-[#22727B]/30">
            Optionales Add-on
          </div>
<h3 className="text-2xl font-semibold text-white mb-4">KI-Video Content</h3>
<p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Erweitere deine Produktion um modernste KI-Workflows – für
            cleane Looks und maximale Skalierbarkeit.
          </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-xl bg-[#22727B]/20 flex items-center justify-center text-[#D8EF5B] shrink-0 border border-[#22727B]/30">
<iconify-icon icon="solar:magic-stick-3-bold" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">KI-Staging</h4>
<p className="text-sm text-slate-400">
                  Szenen, Setups und Hintergründe digital und kosteneffizient optimieren.
                </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-xl bg-[#22727B]/20 flex items-center justify-center text-[#D8EF5B] shrink-0 border border-[#22727B]/30">
<iconify-icon icon="solar:user-id-bold" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Cloning, Avatar &amp; Voice</h4>
<p className="text-sm text-slate-400">
                  Skalierbarer Content.
                  <span className="text-[#D8EF5B] font-medium">Nur mit strenger Einwilligung &amp; klarer Rechteklärung.</span>
</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-xl bg-[#22727B]/20 flex items-center justify-center text-[#D8EF5B] shrink-0 border border-[#22727B]/30">
<iconify-icon icon="solar:box-minimalistic-bold" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Product Shots</h4>
<p className="text-sm text-slate-400">
                  Cleaner Werbe-Look, flüssige Motion und professionelle Packshots.
                </p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="leading-relaxed text-xs text-slate-400"><strong className="text-[#D8EF5B]">Brand-Safety:</strong> Transparenter Freigabeprozess in 1-2 Abstimmungsrunden garantiert sichere Ergebnisse..</p>
</div>
</div>
</div>
<div className="lg:col-span-7 md:p-4">
<h3 className="text-2xl font-semibold text-white mb-8">Der 5-Schritte-Prozess</h3>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.125rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#D8EF5B] before:via-[#22727B] before:to-transparent">
<div className="relative flex items-center gap-6 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-950 bg-[#D8EF5B] text-brand-950 font-bold shrink-0 shadow-[0_0_15px_rgba(216,239,91,0.4)] z-10">
              1</div>
<div className="w-full p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h4 className="text-white font-semibold mb-1">Briefing &amp; Strategie</h4>
<p className="text-sm text-slate-400">Klares Setup für Ziele, Formate und Look &amp; Feel.</p>
</div>
</div>
<div className="relative flex items-center gap-6 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-950 bg-[#22727B] text-white font-bold shrink-0 z-10">
              2</div>
<div className="w-full p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h4 className="text-white font-semibold mb-1">Dreh / Material</h4>
<p className="text-sm text-slate-400">Authentische Aufnahmen vor Ort oder Aufbereitung deines
                Bestandsmaterials.</p>
</div>
</div>
<div className="relative flex items-center gap-6 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-950 bg-[#22727B] text-white font-bold shrink-0 z-10">
              3</div>
<div className="w-full p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h4 className="text-white font-semibold mb-1">Professioneller Schnitt</h4>
<p className="text-sm text-slate-400">Dynamik, Timing, Audio-Mixing und Color Grading sitzen.</p>
</div>
</div>
<div className="relative flex items-center gap-6 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-950 bg-[#22727B] text-white font-bold shrink-0 z-10">
              4</div>
<div className="w-full p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h4 className="text-white font-semibold mb-1">Feedbackrunde(n)</h4>
<p className="text-sm text-slate-400">Transparente Abnahme. Nichts geht ohne dein "Go" online.</p>
</div>
</div>
<div className="relative flex items-center gap-6 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-950 bg-brand-900 border-white/20 text-slate-400 font-bold shrink-0 z-10">
              5</div>
<div className="w-full p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h4 className="text-white font-semibold mb-1">Ausspielung</h4>
<p className="text-sm text-slate-400">Übergabe in allen passenden Formaten – direkt Export-Ready.</p>
</div>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="reveal bg-brand-950 border-t border-white/5 pt-24 pb-24 active" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Wähle das Paket für dein Wachstum.
          </h2>
<p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Ob Einstieg oder volle Power – jedes Paket liefert professionellen
            Content.
          </p>
<div className="flex items-center justify-center gap-4">
<span className="text-sm font-medium text-slate-300" id="monthly-label">
              Monatlich
            </span>
<button aria-label="Abrechnung umschalten" className="transition-colors duration-300 focus:outline-none bg-white/10 w-14 h-8 rounded-full p-1 relative" id="billing-toggle" onclick="togglePricing()" type="button">
<div className="transform transition-transform duration-300 bg-[#3dc2ff] w-6 h-6 rounded-full shadow-md translate-x-6" id="toggle-circle"></div>
</button>
<span className="text-sm font-medium text-white" id="yearly-label">
              Jährlich
              <span className="text-[#3dc2ff] text-xs font-normal ml-1">
                (-25% sparen)
              </span>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center">

<div className="pricing-card flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-[#3dc2ff]/30 group relative" data-plan="LAUNCH">
<div className="mb-4">
<h3 className="text-lg font-medium text-white uppercase">LAUNCH</h3>
<p className="text-sm text-slate-500">Für kleines Budget</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white price-display">299</span>
<span className="text-xl font-semibold text-white">€</span>
<span className="text-slate-500 text-sm">/Monat</span>
</div>
<div className="billing-info text-xs text-slate-500 border-b border-white/5 mb-6 pb-6">Abrechnung jährlich.<br/>Laufzeit: 12 Monate. 3588 € / Jahr</div>
<ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8">
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                8-12 Post-Entwürfe / Monat
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                2 Veröffentlichungen / Woche
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                2 Kanäle (frei wählbar)
              </li>
</ul>
<a className="cta-button flex items-center justify-center gap-2 w-full py-2.5 text-center text-sm font-medium bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors" href="http://wa.me/+4916093850936?text=Ich%20habe%20Interesse%20an%20Social%20Media%20Management%20J%C3%A4hrlich%20mit%20LAUNCH"><iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon> Jetzt Starten</a>
</div>

<div className="pricing-card flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-[#3dc2ff]/30 group relative" data-plan="STARTER">
<div className="mb-4">
<h3 className="text-lg font-medium text-white uppercase">STARTER</h3>
<p className="text-sm text-slate-500">Solider Einstieg</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white price-display">499</span>
<span className="text-xl font-semibold text-white">€</span>
<span className="text-slate-500 text-sm">/Monat</span>
</div>
<div className="billing-info text-xs text-slate-500 border-b border-white/5 mb-6 pb-6">Abrechnung jährlich.<br/>Laufzeit: 12 Monate. 5988 € / Jahr</div>
<ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8">
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                12-16 Post-Entwürfe / Monat
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                3 Veröffentlichungen / Woche
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                4 Kanäle (frei wählbar)
              </li>
</ul>
<a className="cta-button flex items-center justify-center gap-2 w-full py-2.5 text-center text-sm font-medium bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors" href="http://wa.me/+4916093850936?text=Ich%20habe%20Interesse%20an%20Social%20Media%20Management%20J%C3%A4hrlich%20mit%20STARTER"><iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon> Jetzt Starten</a>
</div>

<div className="pricing-card flex flex-col transition-all z-10 bg-brand-900 border-[#3dc2ff] border-2 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(61,194,255,0.2)] scale-105" data-plan="PRO">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#3dc2ff] text-brand-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              Meistgewählt
            </div>
<div className="mb-4">
<h3 className="text-xl font-bold text-white flex items-center gap-2 uppercase">
                PRO
                <iconify-icon className="text-[#3dc2ff] animate-pulse" icon="solar:star-bold"></iconify-icon>
</h3>
<p className="text-sm text-slate-400">
                Bestes Verhältnis aus Output &amp; Wirkung
              </p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white price-display">799</span>
<span className="text-2xl font-bold text-white">€</span>
<span className="text-slate-500 text-sm">/Monat</span>
</div>
<div className="billing-info text-xs text-slate-400 border-b border-white/10 mb-6 pb-6">Abrechnung jährlich.<br/>Laufzeit: 12 Monate. 9588 € / Jahr</div>
<ul className="flex-1 space-y-4 text-sm text-white mb-8">
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                20-24 Post-Entwürfe / Monat
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                5 Veröffentlichungen / Woche
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                5 Kanäle (frei wählbar)
              </li>
</ul>
<a className="cta-button flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(61,194,255,0.4)] transition-all text-sm font-bold text-white text-center bg-gradient-to-br from-[#3dc2ff] to-[#94dbff] w-full rounded-xl py-4" href="http://wa.me/+4916093850936?text=Ich%20habe%20Interesse%20an%20Social%20Media%20Management%20J%C3%A4hrlich%20mit%20PRO"><iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon> Jetzt Starten</a>
</div>

<div className="pricing-card flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-[#3dc2ff]/30 group relative" data-plan="PREMIUM">
<div className="mb-4">
<h3 className="text-lg font-medium text-white uppercase">PREMIUM</h3>
<p className="text-sm text-slate-500">Maximale Präsenz</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white price-display">1399</span>
<span className="text-xl font-semibold text-white">€</span>
<span className="text-slate-500 text-sm">/Monat</span>
</div>
<div className="billing-info text-xs text-slate-500 border-b border-white/5 mb-6 pb-6">Abrechnung jährlich.<br/>Laufzeit: 12 Monate. 16788 € / Jahr</div>
<ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8">
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                24-30 Post-Entwürfe / Monat
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                7 Veröffentlichungen / Woche
              </li>
<li className="flex gap-3">
<iconify-icon className="text-[#3dc2ff] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                7 Kanäle (frei wählbar)
              </li>
</ul>
<a className="cta-button flex items-center justify-center gap-2 w-full py-2.5 text-center text-sm font-medium bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors" href="http://wa.me/+4916093850936?text=Ich%20habe%20Interesse%20an%20Social%20Media%20Management%20J%C3%A4hrlich%20mit%20PREMIUM"><iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon> Jetzt Starten</a>
</div>
</div>
<div className="mt-8 p-4 rounded-lg bg-[#3dc2ff]/5 border border-[#3dc2ff]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#3dc2ff] text-xl" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-slate-300">
              Verpflichtender Crushler Setup Service (Einrichtungsgebühr):
              <span className="text-white">einmalig 499 €</span>
</span>
</div>
<div className="text-xs text-slate-500">Alle Preise zzgl. MwSt.</div>
</div>
</div>
</section>

<section className="reveal bg-brand-950 border-t border-white/5 pt-24 pb-24 active" id="comparison">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Alle Features im Überblick
          </h2>
<p className="text-slate-400">
            Vergleiche alle Details, damit du genau weißt, was du bekommst.
          </p>
</div>
<div className="overflow-x-auto relative rounded-2xl border border-white/5 bg-white/[0.01]">
<table className="w-full text-sm text-left comparison-table text-slate-400">
<thead className="text-xs text-slate-200 uppercase bg-white/5 border-b border-white/5">
<tr>
<th className="py-4" scope="col">Feature</th>
<th className="py-4" scope="col">LAUNCH</th>
<th className="py-4" scope="col">STARTER</th>
<th className="py-4 text-[#3dc2ff]" scope="col">PRO</th>
<th className="py-4" scope="col">PREMIUM</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="bg-white/[0.02]">
<td className="font-bold text-white py-3" colspan="5">Preise</td>
</tr>
<tr>
<td>Preis/Monat (12 Mon.)</td>
<td className="text-white font-bold">299 €</td>
<td className="text-white font-bold">499 €</td>
<td className="font-bold text-[#3dc2ff]">799 €</td>
<td className="text-white font-bold">1.399 €</td>
</tr>
<tr>
<td>Gesamt pro Jahr</td>
<td>3.588 €</td>
<td>5.988 €</td>
<td>9.588 €</td>
<td>16.788 €</td>
</tr>
<tr>
<td>Preis/Monat (3 Mon.)</td>
<td>399 €</td>
<td>699 €</td>
<td>1.199 €</td>
<td>1.999 €</td>
</tr>
<tr>
<td>Ersparnis 12 vs. 3 Mon.</td>
<td className="text-green-400">1.200 € (25%)</td>
<td className="text-green-400">2.400 € (29%)</td>
<td className="text-green-400">4.800 € (33%)</td>
<td className="text-green-400">7.200 € (30%)</td>
</tr>
<tr>
<td>Setup Service (einmalig)</td>
<td>499 €</td>
<td>499 €</td>
<td>499 €</td>
<td>499 €</td>
</tr>
<tr>
<td>Optional: 360° Brand Blueprint (einmalig)</td>
<td>999 €</td>
<td>999 €</td>
<td className="text-[#3dc2ff]">799 €</td>
<td className="text-[#3dc2ff]">499 €</td>
</tr>
<tr className="bg-white/[0.02]">
<td className="font-bold text-white py-3" colspan="5">
                  Leistungsumfang
                </td>
</tr>
<tr>
<td>Designvorschläge pro Monat (Entwürfe) ca.</td>
<td>8-12</td>
<td>12-16</td>
<td className="text-white font-semibold">20-24</td>
<td className="text-white font-semibold">24-30</td>
</tr>
<tr>
<td>Veröffentlichungen/Woche</td>
<td>2</td>
<td>3</td>
<td className="text-white">5</td>
<td className="text-white">7 (Täglich)</td>
</tr>
<tr>
<td>Content-Strategie</td>
<td>Basis</td>
<td>Basis</td>
<td className="text-white">Erweitert</td>
<td className="text-white">Premium</td>
</tr>
<tr>
<td>Hashtag-Recherche</td>
<td>Basic</td>
<td>Basic</td>
<td>Premium</td>
<td>Premium</td>
</tr>
<tr>
<td>Redaktionsplan</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
</tr>
<tr>
<td>Feedbackschleifen</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
<tr className="bg-white/[0.02]">
<td className="font-bold text-white py-3" colspan="5">
                  Social Media Kanäle
                </td>
</tr>
<tr>
<td>Kanäle (frei wählbar)</td>
<td>2</td>
<td>4</td>
<td className="text-white">5</td>
<td className="text-white">Alle 7</td>
</tr>
<tr className="bg-white/[0.02]">
<td className="font-bold text-white py-3" colspan="5">
                  Beitragsarten
                </td>
</tr>
<tr>
<td>Text, Bild, Stories</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
</tr>
<tr>
<td>Carousel-Posts (ca.)</td>
<td>1/Monat</td>
<td>2/Monat</td>
<td>4/Monat</td>
<td>Individuell</td>
</tr>
<tr className="bg-white/[0.02]">
<td className="font-bold text-white py-3" colspan="5">
                  Analytics &amp; Tracking
                </td>
</tr>
<tr>
<td>Crushler Gast-Zugang</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
<td>
<iconify-icon className="text-[#3dc2ff] text-lg" icon="solar:check-circle-bold"></iconify-icon>
</td>
</tr>
<tr>
<td>KPIs definiert</td>
<td>
<iconify-icon className="text-slate-600 text-lg" icon="solar:minus-circle-linear"></iconify-icon>
</td>
<td>nur mit Crushler Metrics</td>
<td>nach Absprache</td>
<td>nach Absprache</td>
</tr>
<tr className="">
<td>Community Management</td>
<td className="">
<iconify-icon className="text-slate-600 text-lg" icon="solar:minus-circle-linear"></iconify-icon>
</td>
<td>
<iconify-icon className="text-slate-600 text-lg" icon="solar:minus-circle-linear"></iconify-icon>
</td>
<td>Optional</td>
<td>Optional</td>
</tr>
<tr className="">
<td>Auto Comment / DM</td>
<td className="">+ 99€</td>
<td className="">+ 99€</td>
<td className="">+ 99€</td>
<td>+ 99€</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="reveal bg-brand-950 border-t border-white/5 pt-24 pb-24 active" id="addons">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold text-white mb-4">
            Wir machen CRUSHLER AI für dich einsatzbereit, damit dein Content
            sofort sitzt.
          </h2>
<p className="text-slate-400">
            Setup, Strategie-Grundlagen und ein großer Themen-Pool – damit du
            nicht brainstormen musst.
          </p>
</div>

<div className="rounded-3xl p-8 md:p-10 border border-[#3dc2ff]/30 bg-brand-900/50 backdrop-blur-sm shadow-[0_0_50px_rgba(61,194,255,0.05)] mb-12" id="setup-service">
<div className="flex flex-col gap-10">
<div className="md:text-left text-center">
<div className="inline-block px-3 py-1 bg-[#3dc2ff]/10 text-[#3dc2ff] text-xs font-semibold uppercase rounded mb-4">
                Setup Service
              </div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">
                CRUSHLER AI – Setup Service
              </h3>
<p className="leading-relaxed text-slate-400 max-w-2xl mb-8">
                Wir richten CRUSHLER AI für dein Business ein, analysieren dein
                Angebot und kümmern uns um
                <span className="font-medium text-white">
                  maßgeschneiderte Content-Themen
                </span>
                auf Basis deiner Antworten im Strategiegespräch und
                Interview-Fragenkatalog.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3dc2ff]/10 flex items-center justify-center text-[#3dc2ff] shrink-0 aspect-square">
<iconify-icon icon="solar:diagram-up-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-semibold mb-1">
                      Analyse &amp; Fundament
                    </h4>
<p className="text-sm text-slate-400">
                      Wir analysieren dein gesamtes Business/Verein und
                      definieren Werte, Nische &amp; Positionierung.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3dc2ff]/10 flex items-center justify-center text-[#3dc2ff] shrink-0 aspect-square">
<iconify-icon className="" icon="solar:notes-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-semibold mb-1">
                      Interview-Fragenkatalog inklusive
                    </h4>
<p className="text-sm text-slate-400">
                      Damit wir schnell zu deinem Angebot, deiner Zielgruppe und
                      deinen Stärken kommen – ohne Ping-Pong.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3dc2ff]/10 flex items-center justify-center text-[#3dc2ff] shrink-0 aspect-square">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-semibold mb-1">
                      Corporate Design Integration
                    </h4>
<p className="text-sm text-slate-400">
                      Farben, Fonts und Look &amp; Feel werden sauber in die
                      Produktion integriert – für Konsistenz.
                    </p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3dc2ff]/10 flex items-center justify-center text-[#3dc2ff] shrink-0 aspect-square">
<iconify-icon className="" icon="solar:lightbulb-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-semibold mb-1">
                      150–250 Themen-Ideen
                    </h4>
<p className="text-sm text-slate-400">
                      Genau zu deinem Unternehmen – passend zu Zielgruppe, Pain
                      Points und Kaufmotiven.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#3dc2ff]/10 flex items-center justify-center text-[#3dc2ff] shrink-0 aspect-square">
<iconify-icon icon="solar:hashtag-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-semibold mb-1">
                      Hashtag-Strategie &amp; Optimierung
                    </h4>
<p className="text-sm text-slate-400">
                      Wir legen Hashtag-Strategie fest, identifizieren
                      Zielgruppen-Ziele und optimieren die Setup-Basis.
                    </p>
</div>
</div>
<div className="bg-black/40 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center mt-4">
<div className="text-slate-500 text-xs uppercase mb-2">
                    Einmalig
                  </div>
<div className="text-4xl font-semibold text-white mb-2 tracking-tight">
                    499 €
                  </div>
<div className="text-xs text-slate-500 mb-6">
                    CRUSHLER AI Setup Service (Pflichtbestandteil)
                  </div>
<a className="block w-full py-3 bg-white text-brand-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors" href="#contact">
                    Setup anfragen
                  </a>
</div>
</div>
</div>
<div className="text-sm text-slate-400 border-t border-white/5 pt-6">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="flex items-center gap-2">
<span className="text-[#3dc2ff]">✓</span>
                  Zielgruppe identifizieren
                </div>
<div className="flex items-center gap-2">
<span className="text-[#3dc2ff]">✓</span>
                  Zielgruppen-Ziele definieren
                </div>
<div className="flex items-center gap-2">
<span className="text-[#3dc2ff]">✓</span>
                  Schmerzpunkt-Lösung entwickeln
                </div>
<div className="flex items-center gap-2">
<span className="text-[#3dc2ff]">✓</span>
                  Unternehmenswerte definieren
                </div>
<div className="flex items-center gap-2">
<span className="text-[#3dc2ff]">✓</span>
                  Nische &amp; Positionierung
                </div>
<div className="flex items-center gap-2">
<span className="text-[#3dc2ff]">✓</span>
                  Optimierung
                </div>
</div>
</div>
</div>
</div>

<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold text-white mb-4">
            Dein Marketing wirkt zufällig und kostet dich jeden Monat Anfragen.
          </h2>
<p className="text-slate-400">
            Der 360° Brand Blueprint gibt dir ein klares Fundament: Du weißt
            genau, was du sagst, für wen du es sagst und warum Kunden dich
            wählen.
          </p>
</div>

<div className="rounded-3xl p-8 md:p-10 border border-[#F87171]/30 bg-brand-900/50 backdrop-blur-sm shadow-[0_0_50px_rgba(248,113,113,0.05)] mb-12" id="blueprint">
<div className="flex flex-col gap-10">
<div className="md:text-left text-center">
<div className="inline-block px-3 py-1 bg-[#F87171]/10 text-[#F87171] text-xs font-bold uppercase rounded mb-4">
                Strategic Add-on
              </div>
<h3 className="text-3xl font-bold text-white mb-4">
                360° Brand Blueprint
              </h3>
<p className="leading-relaxed text-slate-400 max-w-2xl mb-8">
                Das strategische Fundament deiner gesamten Markenkommunikation.
                Die DNA deines Unternehmens wird durch tiefgehende
                Marketing-Analyse und strategische Positionierung professionell
                dokumentiert und bildet die unverzichtbare Grundlage für
                konsistente, wirkungsvolle Inhalte, Kampagnen und langfristigen
                Markterfolg.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex shrink-0 aspect-square text-[#F87171] bg-[#F87171]/10 w-10 h-10 rounded-lg items-center justify-center">
<iconify-icon icon="solar:diamond-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">
                      Deine Marke wird unverwechselbar
                    </h4>
<p className="text-sm text-slate-400">
                      Strategiegespräch + Fragenkatalog (60 Min., 50+
                      strategische Fragen zu Vision, Zielgruppe, Wettbewerb,
                      USPs &amp; Positionierung)
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#F87171]/10 flex items-center justify-center text-[#F87171] shrink-0 aspect-square">
<iconify-icon icon="solar:rocket-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">
                      Du hebst dich messbar ab
                    </h4>
<p className="text-sm text-slate-400">
                      Marktanalyse &amp; Wettbewerb (Analyse von 5-10
                      Mitbewerbern, Positionierungs-Map,
                      Differenzierungschancen)
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#F87171]/10 flex items-center justify-center text-[#F87171] shrink-0 aspect-square">
<iconify-icon icon="solar:target-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">
                      Du erreichst die Richtigen
                    </h4>
<p className="text-sm text-slate-400">
                      Buyer Personas &amp; Zielgruppe (2-3 detaillierte Personas
                      mit Pain Points, Wünschen, Einwänden, Kauftriggern)
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#F87171]/10 flex items-center justify-center text-[#F87171] shrink-0 aspect-square">
<iconify-icon icon="solar:chat-round-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">
                      Deine Botschaften treffen ins Herz
                    </h4>
<p className="text-sm text-slate-400">
                      Messaging &amp; Kernbotschaften (Claim, Slogan, Elevator
                      Pitch, 3-4 Messaging-Pillars, Einwandbehandlung, Brand
                      Voice)
                    </p>
</div>
</div>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#F87171]/10 flex items-center justify-center text-[#F87171] shrink-0 aspect-square">
<iconify-icon icon="solar:calendar-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">Content-Strategie</h4>
<p className="text-sm text-slate-400">
                      Content-Themen &amp; Keywords (20-30 Content-Ideen,
                      Keyword-Cluster, Story-Ansätze nach Funnel-Stufen)
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#F87171]/10 flex items-center justify-center text-[#F87171] shrink-0 aspect-square">
<iconify-icon icon="solar:wad-of-money-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">
                      Umsatzsteigernde Paketstruktur
                    </h4>
<p className="text-sm text-slate-400">
                      Angebots-/Paketstruktur (Good/Better/Best-Architektur,
                      Preislogik, Upsell-Strategien)
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#F87171]/10 flex items-center justify-center text-[#F87171] shrink-0 aspect-square">
<iconify-icon icon="solar:book-bookmark-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">
                      Du hast dein Marketing-Fundament
                    </h4>
<p className="text-sm text-slate-400">
                      Blueprint-Dokument (20-60 Seiten, professionell
                      aufbereitet mit Grafiken, Tabellen, Beispielen – sofort
                      nutzbar)
                    </p>
</div>
</div>
<div className="bg-black/40 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center mt-4">
<div className="text-slate-500 text-xs uppercase mb-2">
                    Einmalig ab
                  </div>
<div className="text-4xl font-bold text-white mb-2">499 €</div>
<div className="text-xs text-slate-500 mb-6">
                    Preis abhängig vom gewählten Paket (bis 999€)
                  </div>
<a className="block w-full py-3 bg-white text-brand-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors" href="#contact">
                    Blueprint hinzufügen
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl p-8 md:p-10 border border-green-500/20 bg-brand-900/30 backdrop-blur-sm" id="automation">
<div className="text-center mb-12">
<div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase rounded mb-4">
              Automation Add-on
            </div>
<h3 className="text-3xl font-semibold text-white mb-4">
              Auto-Comment, Auto-DM &amp; Follow-Automationen
            </h3>
<p className="text-slate-400 max-w-2xl mx-auto">
              Reagiere sofort, wenn Leads warm sind. Mit Refocusly machst du aus
              Interaktion planbare Gespräche – 24/7 und vollautomatisch.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="space-y-8">
<div className="bg-white/5 rounded-2xl p-6 border border-white/5">
<div className="mb-4">
<span className="text-red-400 font-bold text-sm block mb-1">
                    Pain Point:
                  </span>
<p className="text-sm text-slate-300">
                    Kommentare und DMs kommen genau dann, wenn keine Zeit da
                    ist. Dadurch gehen warme Leads verloren oder werden zu spät
                    beantwortet.
                  </p>
</div>
<div>
<span className="text-green-400 font-bold text-sm block mb-1">
                    Ziel:
                  </span>
<p className="text-sm text-slate-300">
                    Sofort reagieren, Gespräch starten und Leads automatisch ins
                    CRM bringen – ohne dass du ständig Social Media checken
                    musst.
                  </p>
</div>
</div>
<div className="space-y-4">
<h4 className="text-green-400 font-bold flex items-center gap-2">
<iconify-icon icon="solar:shield-star-bold"></iconify-icon>
                  Benefits für dich
                </h4>
<ul className="space-y-3">
<li className="flex gap-3 text-slate-300 text-sm">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>Mehr Leads</strong>
                      aus bestehenden Posts (ohne Mehraufwand)
                    </span>
</li>
<li className="flex gap-3 text-slate-300 text-sm">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>Sofortige Antwort</strong>
                      auf Kommentare (24/7) für höhere Conversion
                    </span>
</li>
<li className="flex gap-3 text-slate-300 text-sm">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>Automatische DM</strong>
                      nach Keyword-Kommentar zur Qualifizierung
                    </span>
</li>
</ul>
</div>
</div>
<div className="bg-black/40 p-8 rounded-3xl border border-white/5 flex flex-col h-full justify-between">
<div>
<h4 className="text-white font-bold mb-6">
                  Was du konkret bekommst:
                </h4>
<div className="space-y-4 text-sm text-slate-400 mb-8">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Mehr Engagement unter Posts</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Automatische Lead-Generierung</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Sofortige DMs ohne manuelle Arbeit</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>CRM-Erfassung &amp; Pipeline-Automation</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Automatische Follow-Ups</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Begrüßungs-DM bei neuem Follow</span>
<span className="font-bold text-[#3dc2ff]">Coming Soon</span>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-2xl font-bold text-white">+99 €</span>
<span className="text-xs text-slate-500 block">pro Monat</span>
</div>
<a className="px-6 py-3 bg-green-500 text-brand-950 font-bold rounded-xl hover:bg-green-400 transition-colors" href="#contact">
                  Jetzt aktivieren
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal bg-brand-950 border-t border-white/5 pt-24 pb-24 active" id="referral">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Verdiene mit
          </h2>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Crushler AI - Empfehlungspartner-Programm
          </h2>
<p className="text-slate-400">
            Verdiene
            <span className="font-black text-[#3dc2ff]">25 % pro Monat</span>
            für jede Weiterempfehlung – mit eigenem Link &amp; Rabattcode.
          </p>
<a className="inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all font-medium text-brand-950 bg-gradient-to-br from-[#f8fb74] to-[#eff0a8] rounded-full mt-10 mb-10 py-3 px-8 shadow-lg" href="https://refocusly.com/de/provisions-partner/" target="_blank">
            Einfach E-Mail eintragen &amp; Link teilen
            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="md:p-10 bg-brand-900/30 border border-[#f8fb74]/20 rounded-3xl p-8 backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div className="space-y-6">
<div className="inline-block uppercase text-xs font-semibold text-[#f8fb74] bg-[#f8fb74]/10 rounded py-1 px-3">
                Partnerprogramm
              </div>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Passives Einkommen. Einnahmen durch Empfehlungen.
              </h3>
<p className="text-slate-400">
                2-Minuten-Setup, sofortiger Zugang zum Dashboard und danach
                teilst du deinen personalisierten Referral-Link – online oder
                mit Freunden.
              </p>
<div className="space-y-3 text-sm text-slate-300">
<div className="flex gap-3">
<iconify-icon className="text-[#f8fb74] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>2-Minuten-Setup</strong>
                    → Sofortiger Zugang zu deinem Dashboard
                  </span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-[#f8fb74] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>Eigenen Link teilen</strong>
                    → Nutze deinen personalisierten Referral-Link
                  </span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-[#f8fb74] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>Eigenen Rabattcode</strong>
                    → Nutze deinen personalisierten Coupon-Code im Checkout
                  </span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-[#f8fb74] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>
<strong>Verdienen</strong>
                    → Regelmäßige, pünktliche Provisionen
                  </span>
</div>
</div>
</div>
<div className="bg-black/40 p-8 rounded-3xl border border-white/5 flex flex-col h-full justify-between">
<div>
<div className="text-slate-500 text-xs uppercase mb-2">
                  Jetzt starten
                </div>
<div className="text-4xl font-semibold text-white mb-2 tracking-tight">
                  25 % / Monat
                </div>
<div className="text-sm text-slate-400 mb-6">
                  pro aktiver Weiterempfehlung
                </div>
<div className="space-y-3 text-sm text-slate-400">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>E-Mail eintragen &amp; Link erhalten</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Dashboard sofort verfügbar</span>
<span className="text-white font-medium">Ja</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Referral-Link &amp; Coupon-Code</span>
<span className="text-white font-medium">Ja</span>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="flex-1 inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity font-semibold text-brand-950 bg-gradient-to-br from-[#f8fb74] to-[#eff0a8] rounded-xl py-3 px-6" href="https://refocusly.com/de/provisions-partner/" target="_blank">
                  Zum Partnerprogramm
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="flex-1 inline-flex items-center justify-center hover:bg-white/20 transition-colors font-semibold text-white bg-white/10 rounded-xl py-3 px-6" href="#contact">
                  Fragen? Kontakt
                </a>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
<h3 className="text-white font-medium text-lg mb-2">
                2-Minuten-Setup
              </h3>
<p className="text-slate-400 text-sm">
                Sofortiger Zugang zu deinem Dashboard.
              </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
<h3 className="text-white font-medium text-lg mb-2">Link teilen</h3>
<p className="text-slate-400 text-sm">
                Nutze deinen personalisierten Referral-Link.
              </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
<h3 className="text-white font-medium text-lg mb-2">
                Rabattcode teilen
              </h3>
<p className="text-sm text-slate-400">
                Auf Anfrage: Dein personalisierter Code (z.B. "Name10").
              </p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-300 flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
<h3 className="text-white font-medium text-lg mb-2">Verdienen</h3>
<p className="text-slate-400 text-sm">
                Regelmäßige, pünktliche Provisionen.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-950 border-t border-white/5 pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white text-center mb-12">
          Häufige Fragen – kurz und ehrlich
        </h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-white font-medium">
                Muss ich selbst noch etwas tun?
              </span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Nur die Freigabe. Du erhältst einmal im Monat (oder je nach
              Rhythmus) deinen Redaktionsplan und die Posts zur Ansicht. Du
              kannst Feedback geben oder einfach "Go" sagen. Alles andere machen
              wir.
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-white font-medium">
                Kann ich jederzeit kündigen?
              </span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Ja, bei der monatlichen Option (3 Monate Mindestlaufzeit) kannst
              du bis 7 Tage vor Ablauf kündigen. Bei der Jahresoption
              profitierst du vom günstigeren Preis und bindest dich für 12
              Monate.
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-white font-medium">
                Was ist der Setup Service?
              </span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Im Setup verbinden wir deine Konten mit unserer Software, richten
              das Branding (Farben, Fonts, Logos) in CRUSHLER AI ein und
              erstellen die technische Basis für das Tracking. Das ist ein
              einmaliger Aufwand zu Beginn.
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-white font-medium">
                Was ist CRUSHLER AI genau?
              </span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              CRUSHLER AI ist unsere interne Software, mit der wir Content
              effizient erstellen, designen und planen. Du profitierst von der
              Technologie, ohne sie selbst bedienen zu müssen (außer du buchst
              eine eigene Lizenz dazu).
            </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-white font-medium">
                Brauche ich den Brand Blueprint?
              </span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Er ist optional, aber sehr empfohlen, wenn du noch keine klare
              schriftliche Strategie hast. Er bildet das Fundament, damit unser
              Content auch wirklich deine Zielgruppe trifft und verkauft.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-950 reveal" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3dc2ff]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl leading-tight font-semibold text-white tracking-tight mb-6">
          Bereit, dein Social Media endlich abzugeben und Ergebnisse zu sehen?
        </h2>
<p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Buche jetzt dein kostenloses Beratungsgespräch. Wir zeigen dir,
          welches Paket zu deinem Ziel passt.
        </p>
<div className="flex flex-col gap-6 items-center">
<a className="hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all text-lg font-semibold text-brand-950 bg-white rounded-full py-4 px-10" href="http://wa.me/+4916093850936?text=SocialMediaManagement">
            Jetzt kostenlos beraten lassen
          </a>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black text-center reveal">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="text-xs text-slate-500 mb-6">
          Alle Preise zzgl. MwSt. · Kündigung spätestens 7 Tage vor Laufzeitende
          <br/>
          Es gelten unsere AGB: noparade.de/agb
        </div>
<div className="w-full h-px bg-white/5 mb-6"></div>
<div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-slate-600">
<div>© NO PARADE. All rights reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="https://noparade.de/impressum">
              Impressum
            </a>
<a className="hover:text-slate-400" href="https://noparade.de/datenschutz">
              Datenschutz
            </a>
<a className="hover:text-slate-400" href="https://noparade.de/agb">
              AGB
            </a>
</div>
</div>
</div>
</footer>






    </>
  );
}
