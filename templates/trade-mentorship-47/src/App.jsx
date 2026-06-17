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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              const words = ["Trader", "Mentor"];
              let wordIndex = 0;
              let charIndex = 0;
              let isDeleting = false;
              const typeSpeed = 150;
              const backSpeed = 100;
              const delayBetweenWords = 2000;

              function type() {
                const currentWord = words[wordIndex];
                const displayElement = document.getElementById("typewriter");
                if (!displayElement) return;

                if (isDeleting) {
                  displayElement.textContent = currentWord.substring(0, charIndex - 1);
                  charIndex--;
                } else {
                  displayElement.textContent = currentWord.substring(0, charIndex + 1);
                  charIndex++;
                }

                let currentSpeed = isDeleting ? backSpeed : typeSpeed;
                if (!isDeleting && charIndex === currentWord.length) {
                  currentSpeed = delayBetweenWords;
                  isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                  isDeleting = false;
                  wordIndex = (wordIndex + 1) % words.length;
                  currentSpeed = 500;
                }
                setTimeout(type, currentSpeed);
              }
              document.addEventListener("DOMContentLoaded", () => {
                setTimeout(type, 1000);
              });
            


        function openPaymentModal(tierName, price) {
          document.getElementById('tier-name').value = tierName;
          document.getElementById('payment-modal-title').innerText = 'Join ' + tierName;
          document.getElementById('payment-modal-price').innerText = price;

          const modal = document.getElementById('payment-modal');
          modal.classList.remove('invisible', 'opacity-0');
          document.body.style.overflow = 'hidden';
        }

        function closePaymentModal() {
          const modal = document.getElementById('payment-modal');
          modal.classList.add('invisible', 'opacity-0');
          document.body.style.overflow = '';
        }

        function submitPayment(e) {
          e.preventDefault();

          const tier = document.getElementById('tier-name').value;
          const name = document.getElementById('pf-name').value;
          const email = document.getElementById('pf-email').value;
          const phone = document.getElementById('pf-phone').value;
          const nationality = document.getElementById('pf-nationality').value;
          const language = document.getElementById('pf-language').value;
          const txid = document.getElementById('pf-txid').value;

          const message = 'Payment Sent and Verified.%0A%0A*Plan:* ' + tier + '%0A*Name:* ' + name + '%0A*Email:* ' + email + '%0A*WhatsApp:* ' + phone + '%0A*Nationality:* ' + nationality + '%0A*Language:* ' + language + '%0A*Transaction ID:* ' + txid;

          window.open('https://api.whatsapp.com/send?text=' + message, '_blank');
          closePaymentModal();
          document.getElementById('payment-form').reset();
        }
      


      // --- Mobile Menu Logic ---
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');

        menu.classList.toggle('open');

        if(menu.classList.contains('open')) {
          icon.setAttribute('icon', 'solar:close-square-linear');
        } else {
          icon.setAttribute('icon', 'solar:hamburger-menu-linear');
        }
      }

      document.getElementById('menu-btn').addEventListener('click', toggleMenu);

      // --- Announcement Popup Logic ---
      function closePopup() {
        document.getElementById('announcement-popup').classList.remove('show');
      }

      // Automatically trigger popup after 3 seconds for new visitors
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
          document.getElementById('announcement-popup').classList.add('show');
        }, 3000);
      });

      // --- Social Feed Tabs Logic ---
      function switchSocialTab(platform) {
        const twTab = document.getElementById('tab-twitter');
        const igTab = document.getElementById('tab-instagram');
        const twFeed = document.getElementById('feed-twitter');
        const igFeed = document.getElementById('feed-instagram');

        if (platform === 'twitter') {
          twTab.className = "px-6 py-2 rounded-full text-sm font-medium transition-all bg-white/10 !text-white flex items-center gap-2 outline-none";
          igTab.className = "px-6 py-2 rounded-full text-sm font-medium transition-all !text-neutral-500 hover:!text-white flex items-center gap-2 outline-none";

          twFeed.classList.remove('hidden');
          setTimeout(() => twFeed.classList.remove('opacity-0'), 50);

          igFeed.classList.add('opacity-0');
          setTimeout(() => igFeed.classList.add('hidden'), 500);
        } else {
          igTab.className = "px-6 py-2 rounded-full text-sm font-medium transition-all bg-white/10 !text-white flex items-center gap-2 outline-none";
          twTab.className = "px-6 py-2 rounded-full text-sm font-medium transition-all !text-neutral-500 hover:!text-white flex items-center gap-2 outline-none";

          igFeed.classList.remove('hidden');
          setTimeout(() => igFeed.classList.remove('opacity-0'), 50);

          twFeed.classList.add('opacity-0');
          setTimeout(() => twFeed.classList.add('hidden'), 500);
        }
      }

      // --- Intersection Observer for Scroll Animations & Counters ---
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Number Counter Logic
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
              const target = +counter.getAttribute('data-target');
              const duration = 2000; // ms
              const frames = 60; // 60fps assumption
              const step = target / (duration / (1000 / frames));
              let current = 0;

              const updateCounter = () => {
                current += step;
                if (current < target) {
                  counter.innerText = Math.ceil(current);
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.innerText = target;
                }
              };
              updateCounter();

              // Remove class to prevent re-triggering
              counter.classList.remove('counter');
            });

            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Attach observer to all reveal-up elements
      document.querySelectorAll('.reveal-up').forEach((el) => {
        revealObserver.observe(el);
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
      

<div id="sz-elementor-shield">

<div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 invisible p-4" id="announcement-popup">
<div className="popup-content bg-[#0a0a0a] border border-white/10 p-6 md:p-10 rounded-3xl max-w-md w-full mx-auto relative shadow-[0_0_50px_rgba(16,185,129,0.15)]">
<button className="absolute top-2 right-4 md:top-5 md:right-5 !text-neutral-500 hover:!text-white transition-colors !bg-transparent !border-none" onclick="closePopup()">
<iconify-icon icon="solar:close-circle-linear" width="30"></iconify-icon>
</button>
<div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center !text-emerald-400 mb-6">
<iconify-icon icon="solar:bell-bing-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight !text-white mb-2">
            New Batch Opening Soon!
          </h3>
<p className="text-sm !text-neutral-400 mb-8 leading-relaxed">
            A limited number of new students are being accepted into the
            Mentorship program this week. Secure your spot before registration
            closes.
          </p>
<div className="flex flex-col gap-3">
<a className="w-full py-3.5 text-center text-sm font-medium rounded-full !text-black !bg-emerald-400 hover:!bg-emerald-300 hover:!text-black transition-colors !shadow-[0_0_15px_rgba(16,185,129,0.4)]" href="#service-2" onclick="closePopup()">
              Secure My Spot
            </a>
<button className="w-full py-3.5 text-center text-sm font-normal rounded-full !text-neutral-400 hover:!text-white !bg-transparent !border-none transition-colors" onclick="closePopup()">
              Maybe Later
            </button>
</div>
</div>
</div>

<div className="bg-emerald-500/10 border-b border-emerald-500/20 !text-emerald-400 text-xs font-medium uppercase tracking-widest overflow-hidden relative flex items-center h-10 z-[60]">
<div className="animate-marquee whitespace-nowrap flex items-center">
<span className="mx-6 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:videocamera-record-linear"></iconify-icon>
            Every trade is executed live on Discord during the NY session (8:00
            AM EST) — no delays, no edits, full transparency. Join Discord!
          </span>

<span className="mx-6 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:videocamera-record-linear"></iconify-icon>
            Every trade is executed live on Discord during the NY session (8:00
            AM EST) — no delays, no edits, full transparency. Join Discord!
          </span>

<span className="mx-6 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:videocamera-record-linear"></iconify-icon>
            Every trade is executed live on Discord during the NY session (8:00
            AM EST) — no delays, no edits, full transparency. Join Discord!
          </span>

<span className="mx-6 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:videocamera-record-linear"></iconify-icon>
            Every trade is executed live on Discord during the NY session (8:00
            AM EST) — no delays, no edits, full transparency. Join Discord!
          </span>
</div>
</div>

<nav className="sticky top-0 left-0 w-full z-[100] bg-[#050505]/50 backdrop-blur-xl border-b border-white/5 transition-all">
<div className="flex md:px-6 w-full h-[72px] max-w-7xl mx-auto px-4 items-center justify-between">

<a className="font-semibold tracking-tighter !text-white transition-colors hover:!text-emerald-400 shrink-0 z-50 text-2xl uppercase !no-underline" href="#">
            SHAH ZAIB
          </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal !text-neutral-400">
<a className="transition-colors hover:!text-emerald-400 !no-underline" href="#about">
              About
            </a>
<div className="relative group">
<a className="transition-colors hover:!text-emerald-400 !no-underline flex items-center gap-1 py-4 -my-4">
                Features
                <iconify-icon className="text-[16px] group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] w-[260px]">

<div className="absolute -top-6 left-0 w-full h-6"></div>
<div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)] overflow-hidden p-2 flex flex-col gap-1 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-emerald-500/10 before:to-transparent before:pointer-events-none">
<a className="px-3 py-3 rounded-xl transition-all hover:bg-white/5 !text-neutral-300 flex items-center gap-3 !no-underline group/item relative z-10" href="#highlights">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="lucide:cctv"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white mb-0.5 group-hover/item:!text-emerald-400 transition-colors">
                        Highlights
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Deep market depth analysis
                      </div>
</div>
</a>
<a className="px-3 py-3 rounded-xl transition-all hover:bg-white/5 !text-neutral-300 flex items-center gap-3 !no-underline group/item relative z-10" href="#curriculum">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="lucide:book-open-check"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white mb-0.5 group-hover/item:!text-emerald-400 transition-colors">
                        Curriculum
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Mentorship curriculum
                      </div>
</div>
</a>
<a className="px-3 py-3 rounded-xl transition-all hover:bg-white/5 !text-neutral-300 flex items-center gap-3 !no-underline group/item relative z-10" href="#execution">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="mingcute:user-follow-2-line"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white mb-0.5 group-hover/item:!text-emerald-400 transition-colors">
                        Execution
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Precision execution without emotion
                      </div>
</div>
</a>
</div>
</div>
</div>
<a className="transition-colors hover:!text-emerald-400 !no-underline" href="#testimonials">
              Testimonials
            </a>
<div className="relative group">
<a className="transition-colors hover:!text-emerald-400 !no-underline flex items-center gap-1 py-4 -my-4" href="">
                Services
                <iconify-icon className="text-[16px] group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] w-[260px]">

<div className="absolute -top-6 left-0 w-full h-6"></div>
<div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)] overflow-hidden p-2 flex flex-col gap-1 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-emerald-500/10 before:to-transparent before:pointer-events-none">
<a className="px-3 py-3 rounded-xl transition-all hover:bg-white/5 !text-neutral-300 flex items-center gap-3 !no-underline group/item relative z-10" href="#service-1">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white mb-0.5 group-hover/item:!text-emerald-400 transition-colors">
                        Live Streams
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Daily NY session execution
                      </div>
</div>
</a>
<a className="px-3 py-3 rounded-xl transition-all hover:bg-white/5 !text-neutral-300 flex items-center gap-3 !no-underline group/item relative z-10" href="#service-2">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white mb-0.5 group-hover/item:!text-emerald-400 transition-colors">
                        Mentorship
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Weekly masterclasses
                      </div>
</div>
</a>
<a className="px-3 py-3 rounded-xl transition-all hover:bg-white/5 !text-neutral-300 flex items-center gap-3 !no-underline group/item relative z-10" href="#service-3">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white mb-0.5 group-hover/item:!text-emerald-400 transition-colors">
                        VIP Signals
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        High-speed execution
                      </div>
</div>
</a>
</div>
</div>
</div>
<a className="transition-colors hover:!text-emerald-400 !no-underline" href="#process">
              Process
            </a>
<a className="transition-colors hover:!text-emerald-400 !no-underline" href="#faq">
              FAQ
            </a>
<a className="transition-colors hover:!text-emerald-400 !no-underline" href="#contact">
              Contact
            </a>
</div>

<div className="flex items-center gap-4 shrink-0 z-50">
<a className="hidden md:flex items-center gap-2 transition-all duration-300 text-sm font-medium rounded-full py-2.5 px-6 !shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:!shadow-[0_0_25px_rgba(16,185,129,0.4)] !text-[#050505] !bg-emerald-400 hover:!bg-emerald-300 hover:!text-[#050505] !no-underline" href="#service-1">
              Join Discord
              <iconify-icon icon="mingcute:discord-fill" width="20"></iconify-icon>
</a>

<div aria-label="Toggle menu" className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors !text-neutral-300 hover:!text-white cursor-pointer select-none" id="menu-btn" role="button" style={{WebkitTapHighlightColor: 'transparent', outline: 'none'}} tabindex="0">
<iconify-icon className="transition-transform duration-300" icon="solar:hamburger-menu-linear" id="menu-icon" width="28"></iconify-icon>
</div>
</div>
</div>

<div className="md:hidden absolute top-[72px] left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b shadow-2xl overflow-hidden z-[90] border-white/10 rounded-b-3xl" id="mobile-menu">
<div className="flex flex-col p-4 gap-2">
<a className="px-5 py-3.5 font-normal text-sm transition-all flex items-center gap-3 !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl !no-underline" href="#about" onclick="toggleMenu()">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:crown"></iconify-icon>
              About
            </a>
<div className="relative group/mobile-feat" tabindex="0">
<div className="px-5 py-3.5 font-normal text-sm transition-all flex items-center justify-between !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl cursor-pointer select-none">
<div className="flex items-center gap-3">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:biceps-flexed"></iconify-icon>
                  Features
                </div>
<iconify-icon className="text-[16px] group-hover/mobile-feat:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover/mobile-feat:max-h-[300px]">
<div className="flex flex-col gap-1 pl-10 pr-4 pb-2 pt-1">
<a className="py-2 px-3 transition-all hover:bg-white/5 rounded-xl !text-neutral-300 flex items-center gap-3 !no-underline group/item" href="#highlights" onclick="toggleMenu()">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="lucide:cctv"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white group-hover/item:!text-emerald-400 transition-colors">
                        Highlights
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Deep market depth analysis
                      </div>
</div>
</a>
<a className="py-2 px-3 transition-all hover:bg-white/5 rounded-xl !text-neutral-300 flex items-center gap-3 !no-underline group/item" href="#curriculum" onclick="toggleMenu()">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="lucide:book-open-check"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white group-hover/item:!text-emerald-400 transition-colors">
                        Curriculum
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Mentorship curriculum
                      </div>
</div>
</a>
<a className="py-2 px-3 transition-all hover:bg-white/5 rounded-xl !text-neutral-300 flex items-center gap-3 !no-underline group/item" href="#execution" onclick="toggleMenu()">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="mingcute:user-follow-2-line"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white group-hover/item:!text-emerald-400 transition-colors">
                        Execution
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Precision execution without emotion
                      </div>
</div>
</a>
</div>
</div>
</div>
<a className="px-5 py-3.5 font-normal text-sm transition-all flex items-center gap-3 !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl !no-underline" href="#testimonials" onclick="toggleMenu()">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:graduation-cap"></iconify-icon>
              Testimonials
            </a>
<div className="relative group/mobile-feat" tabindex="0">
<div className="px-5 py-3.5 font-normal text-sm transition-all flex items-center justify-between !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl cursor-pointer select-none">
<div className="flex items-center gap-3">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:circle-dollar-sign"></iconify-icon>
                  Services
                </div>
<iconify-icon className="text-[16px] group-hover/mobile-feat:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover/mobile-feat:max-h-[300px]">
<div className="flex flex-col gap-1 pl-10 pr-4 pb-2 pt-1">
<a className="py-2 px-3 transition-all hover:bg-white/5 rounded-xl !text-neutral-300 flex items-center gap-3 !no-underline group/item" href="#service-1" onclick="toggleMenu()">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white group-hover/item:!text-emerald-400 transition-colors">
                        Live Streams
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Daily NY Session execution
                      </div>
</div>
</a>
<a className="py-2 px-3 transition-all hover:bg-white/5 rounded-xl !text-neutral-300 flex items-center gap-3 !no-underline group/item" href="#service-2" onclick="toggleMenu()">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white group-hover/item:!text-emerald-400 transition-colors">
                        Mentorship
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        Weekly masterclasses
                      </div>
</div>
</a>
<a className="py-2 px-3 transition-all hover:bg-white/5 rounded-xl !text-neutral-300 flex items-center gap-3 !no-underline group/item" href="#service-3" onclick="toggleMenu()">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/item:bg-emerald-500/20 group-hover/item:!text-emerald-400 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium !text-white group-hover/item:!text-emerald-400 transition-colors">
                        VIP Signals
                      </div>
<div className="text-[10px] !text-neutral-500 leading-tight">
                        High-speed execution
                      </div>
</div>
</a>
</div>
</div>
</div>
<a className="px-5 py-3.5 font-normal text-sm transition-all flex items-center gap-3 !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl !no-underline" href="#process" onclick="toggleMenu()">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:dumbbell"></iconify-icon>
              Process
            </a>
<a className="px-5 py-3.5 font-normal text-sm transition-all flex items-center gap-3 !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl !no-underline" href="#faq" onclick="toggleMenu()">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:scan-eye"></iconify-icon>
              FAQ
            </a>
<a className="px-5 py-3.5 font-normal text-sm transition-all flex items-center gap-3 !text-neutral-300 hover:!text-emerald-400 hover:!bg-white/5 rounded-xl !no-underline" href="#contact" onclick="toggleMenu()">
<iconify-icon className="!text-emerald-400 text-lg" icon="lucide:contact"></iconify-icon>
              Contact
            </a>
<div className="h-px my-2 bg-white/5 w-full"></div>
<a className="font-medium text-sm px-5 py-4 text-center transition-colors !bg-emerald-400 !text-[#050505] hover:!bg-emerald-300 hover:!text-[#050505] rounded-2xl flex justify-center items-center gap-2 !no-underline" href="#service-1" onclick="toggleMenu()">
              Join Discord
              <iconify-icon icon="mingcute:discord-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative md:py-36 py-12 px-4 md:px-6 overflow-hidden flex items-center justify-center min-h-[85vh]">
<div className="absolute inset-0 z-0 w-full h-full bg-[#050505]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="text-left reveal-up visible">
<div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-normal tracking-wider mb-8 !text-neutral-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="inline-flex bg-emerald-500 w-2 h-2 rounded-full relative"></span>
</span>
              Live Trading Streams (NY) Coming Soon.
            </div>
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-semibold !text-white tracking-tight leading-[1.1] mb-4">
              Shah Zaib
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 text-glow" id="typewriter">
                Trader
              </span>
<span className="cursor">|</span>
</h1>
<style>
              /* Blinking cursor effect */
              .cursor {
                display: inline-block;
                color: #ffffff;
                margin-left: 4px;
                animation: blink 0.8s infinite;
                font-weight: 100;
              }
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            </style>

<h2 className="text-lg sm:text-2xl font-normal !text-neutral-400 tracking-tight mb-6">
              VIP Signals, Live Trading Streams &amp; Mentorship
            </h2>
<p className="text-sm md:text-base max-w-xl mb-10 !text-neutral-500 font-light leading-relaxed">
              Escape the retail trap. Join an elite community receiving daily
              live execution, deep technical breakdowns, and exact
              high-probability entries.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="transition-all duration-300 text-sm font-medium tracking-wide rounded-full py-4 px-8 !shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:!shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 !text-[#050505] !bg-emerald-400 hover:!bg-emerald-300 hover:!text-[#050505] text-center flex items-center justify-center gap-2 !no-underline" href="#service-1">
                Join Live Streams
                <iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
<a className="transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-full py-4 px-8 hover:!bg-white/5 !text-white border border-white/10 backdrop-blur-sm text-center !no-underline hover:!text-white" href="#curriculum">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
                View Curriculum
              </a>
</div>
</div>

<div className="w-full justify-center lg:justify-end flex mt-10 lg:mt-0 reveal-up delay-200 visible">
<div className="glass-panel overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500 w-full max-w-lg lg:max-w-xl rounded-3xl p-5 md:p-8 relative shadow-2xl flex flex-col">

<div className="absolute -top-20 -right-20 w-40 md:w-56 h-40 md:h-56 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500 z-0"></div>

<div className="flex justify-between items-center mb-6 relative z-20">
<h3 className="font-semibold text-lg md:text-xl !text-white tracking-tight flex items-center gap-2">
<iconify-icon className="!text-emerald-400" icon="solar:chart-square-linear"></iconify-icon>
                  Market Ticker
                </h3>
<div className="flex gap-1.5 text-[10px] md:text-xs font-medium !text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-full py-1 px-3 items-center uppercase tracking-widest">
<div className="w-2 h-2 animate-pulse bg-emerald-400 rounded-full"></div>
                  Live
                </div>
</div>

<div className="relative z-10 w-full overflow-hidden mt-2 h-[380px]">

<div className="tradingview-widget-container" style={{width: '100%', height: '100%'}}>
<div className="tradingview-widget-container__widget" style={{height: 'calc(100% - 32px)', width: '100%'}}></div>

</div>

</div>
</div>
</div>
</div>
</section>

<div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 -mt-8 md:-mt-16 mb-16 reveal-up delay-400">
<div className="glass-panel rounded-3xl shadow-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/10">
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold !text-white tracking-tight mb-1">
<span className="counter" data-target="92">0</span>
<span className="!text-emerald-400 text-2xl">%</span>
</div>
<div className="text-xs font-normal !text-neutral-500 uppercase tracking-widest">
              Win Rate
            </div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold !text-white tracking-tight mb-1">
<span className="counter" data-target="100">0</span>
<span className="!text-emerald-400 text-2xl">+</span>
</div>
<div className="text-xs font-normal !text-neutral-500 uppercase tracking-widest">
              Active Members
            </div>
</div>
<div className="text-center mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-white/10 md:border-transparent">
<div className="text-3xl md:text-4xl font-semibold !text-white tracking-tight mb-1">
              $
              <span className="counter" data-target="1">0</span>
<span className="!text-emerald-400 text-2xl">M</span>
</div>
<div className="text-xs font-normal !text-neutral-500 uppercase tracking-widest">
              Funded Clients
            </div>
</div>
<div className="text-center mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-white/10 md:border-transparent">
<div className="text-3xl md:text-4xl font-semibold !text-white tracking-tight mb-1">
<span className="counter" data-target="24">0</span>
<span className="!text-emerald-400 text-2xl">/5</span>
</div>
<div className="text-xs font-normal !text-neutral-500 uppercase tracking-widest">
              Market Coverage
            </div>
</div>
</div>
</div>

<section className="py-16 md:py-24 px-4 md:px-6 relative bg-[#050505] border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 lg:order-1 reveal-up">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:user-circle-linear"></iconify-icon>
              The Story
            </div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold !text-white tracking-tight mb-6">
              Trading is not a gamble.
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
                It's absolute discipline.
              </span>
</h2>
<div className="space-y-4 text-sm md:text-base !text-neutral-400 leading-relaxed">
<p>
                My journey started over six years ago. I was trapped in the
                traditional 9-to-5 cycle, constantly searching for a way out.
                Like most retail traders, I started by chasing signals, getting
                chopped up in noisy charts, and giving my hard-earned capital
                straight to the market makers.
              </p>
<p>
                It wasn't until I stripped away the complex indicators and
                started focusing purely on deep market structure, liquidity, and
                algorithmic execution that everything changed. I developed a
                rigid, rule-based approach that eliminated emotion from the
                equation.
              </p>
<p>
                Today, my mission is simple: to help dedicated individuals
                escape the rat race, achieve absolute financial freedom, and
                learn how to navigate the markets independently. I built this
                mentorship to provide exactly what I wish I had when I started.
                No fluff, just pure edge.
              </p>
</div>
<div className="mt-8 flex items-center gap-4 border-l-2 border-emerald-500 pl-4">
<div className="text-sm !text-neutral-300 italic">
                "The market pays you for your discipline, not your predictions."
              </div>
</div>
</div>

<div className="order-1 lg:order-2 relative reveal-up delay-200 mx-auto w-full max-w-md lg:max-w-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-emerald-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>
<div className="relative z-10 w-full aspect-[4/5] rounded-3xl border border-white/10 overflow-hidden bg-[#0a0a0a]">

<img alt="Shah Zaib Portrait" className="block !w-full !h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://shahzaibtrader.com/wp-content/uploads/2026/01/Shah-Zaib.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>

<div className="absolute -top-4 -left-4 md:-left-8 z-20 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-slow shadow-xl">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 !text-blue-400">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs !text-neutral-500 uppercase tracking-widest font-medium mb-0.5">
                  Experience
                </div>
<div className="text-sm font-semibold !text-white">
                  6+ Years Exp.
                </div>
</div>
</div>
<div className="absolute -bottom-6 -right-4 md:-right-8 z-20 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-fast shadow-xl">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 !text-blue-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs !text-neutral-500 uppercase tracking-widest font-medium mb-0.5">
                  Community
                </div>
<div className="text-sm font-semibold !text-white">
                  100+ Active Members
                </div>
</div>
</div>
<div className="absolute top-1/4 -right-6 md:-right-10 z-20 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl border border-emerald-500/30 bg-[#050505]/80">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="inline-flex bg-emerald-500 w-2.5 h-2.5 rounded-full relative"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest !text-emerald-400">
                Live Trader
              </span>
</div>
</div>
</div>
</section>

<section className="md:py-20 md:px-6 py-12 px-4 relative" id="highlights">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-up" id="features">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:star-rings-linear"></iconify-icon>
              Elite Infrastructure
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 !text-white">
              The Professional Arsenal
            </h2>
<p className="!text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to transition from a retail participant to an
              institutional thinker.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-8 rounded-3xl relative overflow-hidden group reveal-up">
<div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-emerald-500/5 transition-colors duration-500 transform group-hover:scale-110">
<iconify-icon icon="solar:monitor-camera-linear" width="160"></iconify-icon>
</div>
<div className="h-12 w-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 !text-emerald-400 rounded-2xl relative z-10 group-hover:bg-emerald-500/20 transition-colors duration-300">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 !text-white tracking-tight relative z-10">
                Live Trading Streams
              </h3>
<p className="text-sm leading-relaxed !text-neutral-400 relative z-10">
                Watch real-time execution via Discord. See exact entries, exits,
                and psychological risk management in real-time execution.
              </p>
</div>
<div className="glass-card p-8 rounded-3xl relative overflow-hidden group reveal-up delay-100">
<div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-emerald-500/5 transition-colors duration-500 transform group-hover:scale-110">
<iconify-icon icon="solar:wallet-money-linear" width="160"></iconify-icon>
</div>
<div className="h-12 w-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 !text-emerald-400 rounded-2xl relative z-10 group-hover:bg-emerald-500/20 transition-colors duration-300">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 !text-white tracking-tight relative z-10">
                Mentorship Classes
              </h3>
<p className="text-sm leading-relaxed !text-neutral-400 relative z-10">
                Weekly masterclasses covering technical analysis, psychology,
                challenges and institutional order flow.
              </p>
</div>
<div className="glass-card p-8 rounded-3xl relative overflow-hidden group reveal-up delay-200">
<div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-emerald-500/5 transition-colors duration-500 transform group-hover:scale-110">
<iconify-icon icon="solar:smartphone-update-linear" width="160"></iconify-icon>
</div>
<div className="h-12 w-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 !text-emerald-400 rounded-2xl relative z-10 group-hover:bg-emerald-500/20 transition-colors duration-300">
<iconify-icon icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 !text-white tracking-tight relative z-10">
                High-Speed Signals
              </h3>
<p className="text-sm leading-relaxed !text-neutral-400 relative z-10">
                Instant WhatsApp notifications for high-probability setups sent
                directly to your phone - No lag. Includes Entry price, Stop
                Loss, and multiple Take Profit zones.
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 relative border-t border-white/5 bg-[#080808]" id="curriculum">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-up">
<div className="max-w-xl">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:book-minimalistic-linear"></iconify-icon>
                The Blueprint
              </div>
<h2 className="text-3xl md:text-4xl font-semibold !text-white tracking-tight mb-4">
                Mentorship Curriculum
              </h2>
<p className="text-sm md:text-base !text-neutral-500 leading-relaxed">
                A structured path from fundamental market mechanics to advanced
                algorithmic trading concepts. No fluff, just pure edge.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up delay-100">
<div className="p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="!text-emerald-400 mb-4">
<iconify-icon icon="solar:route-linear" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium !text-white mb-2">
                1. Market Structure
              </h4>
<p className="text-xs !text-neutral-500 leading-relaxed">
                Mapping trends, recognizing shifts, and understanding internal
                vs external structure.
              </p>
</div>
<div className="p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="!text-emerald-400 mb-4">
<iconify-icon icon="solar:magnet-linear" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium !text-white mb-2">
                2. Liquidity Concepts
              </h4>
<p className="text-xs !text-neutral-500 leading-relaxed">
                Identifying sell-side and buy-side pools, engineered liquidity,
                and trap zones.
              </p>
</div>
<div className="p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="!text-emerald-400 mb-4">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium !text-white mb-2">
                3. Supply &amp; Demand
              </h4>
<p className="text-xs !text-neutral-500 leading-relaxed">
                Refining order blocks, fair value gaps (FVG), and institutional
                sponsorship.
              </p>
</div>
<div className="p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="!text-emerald-400 mb-4">
<iconify-icon icon="solar:target-linear" width="28"></iconify-icon>
</div>
<h4 className="text-base font-medium !text-white mb-2">
                4. Execution &amp; Mindset
              </h4>
<p className="text-xs !text-neutral-500 leading-relaxed">
                Risk management modeling, emotional control, and pulling the
                trigger effortlessly.
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-28 px-4 md:px-6 border-t border-white/5 relative overflow-hidden bg-[#050505]" id="execution">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
<div className="order-2 lg:order-1 reveal-up">
<h2 className="text-3xl md:text-5xl font-semibold !text-white tracking-tight mb-6 leading-tight">
              Precision execution
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
                without emotion.
              </span>
</h2>
<p className="mb-8 !text-neutral-400 leading-relaxed text-sm md:text-base">
              See inside the terminal. We trade primarily Forex (XAU/USD),
              Crypto (BTC), and Indices (NAS100) using a strict discipline,
              rule-based approach. No guessing, just high-probability strike
              zones.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="bg-emerald-500/10 !text-emerald-400 p-2 rounded-xl border border-emerald-500/20 shrink-0">
<iconify-icon icon="solar:notebook-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-medium !text-white text-sm mb-1">
                    Trading Journal Access
                  </div>
<span className="text-xs !text-neutral-500 leading-relaxed block">
                    Full transparency. Access my personal Notion journal to
                    analyze winning and losing setups.
                  </span>
</div>
</li>
<li className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="bg-emerald-500/10 !text-emerald-400 p-2 rounded-xl border border-emerald-500/20 shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<div className="font-medium !text-white text-sm mb-1">
                    1-on-1 Chart Breakdowns
                  </div>
<span className="text-xs !text-neutral-500 leading-relaxed block">
                    Personalized video feedback on your charts to fix your
                    unique technical mistakes.
                  </span>
</div>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 reveal-up delay-200">
<div className="bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.1)] overflow-hidden font-mono text-sm md:text-base">
<div className="bg-[#111] !text-neutral-400 px-4 md:px-6 py-4 flex items-center justify-between border-b border-white/5 relative">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<div className="text-xs uppercase tracking-widest !text-neutral-500">
                  MetaTrader 5 Web Terminal
                </div>
</div>
<div className="divide-y divide-white/5">

<div className="p-4 md:p-5 hover:bg-white/[0.02] transition-colors flex items-center justify-between">
<div className="flex items-center gap-3 md:gap-4">
<div className="h-10 w-10 rounded-lg border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10 !text-emerald-400 shrink-0">
<iconify-icon icon="mdi:currency-usd" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] md:text-xs !text-neutral-500 uppercase tracking-widest mb-1">
                        XAU/USD • LONG
                      </div>
<div className="text-xs md:text-sm font-medium !text-white">
                        Entry: 2345.50
                      </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] md:text-xs font-medium !text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 whitespace-nowrap">
                      +1520 Pips
                    </div>
<div className="text-[10px] md:text-xs !text-neutral-500 mt-1">
                      TP Hit
                    </div>
</div>
</div>

<div className="p-4 md:p-5 hover:bg-white/[0.02] transition-colors flex items-center justify-between">
<div className="flex items-center gap-3 md:gap-4">
<div className="h-10 w-10 rounded-lg border border-red-500/30 flex items-center justify-center bg-red-500/10 !text-red-400 shrink-0">
<iconify-icon icon="mdi:bitcoin" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] md:text-xs !text-neutral-500 uppercase tracking-widest mb-1">
                        BTC/USD • SHORT
                      </div>
<div className="text-xs md:text-sm font-medium !text-white">
                        Entry: 68200.00
                      </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] md:text-xs font-medium !text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20 whitespace-nowrap">
                      Running
                    </div>
<div className="text-[10px] md:text-xs !text-neutral-500 mt-1">
                      Risk Free
                    </div>
</div>
</div>

<div className="p-4 md:p-5 hover:bg-white/[0.02] transition-colors flex items-center justify-between opacity-60">
<div className="flex items-center gap-3 md:gap-4">
<div className="h-10 w-10 rounded-lg border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10 !text-emerald-400 shrink-0">
<iconify-icon icon="mdi:chart-line" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] md:text-xs !text-neutral-500 uppercase tracking-widest mb-1">
                        NAS100 • LONG
                      </div>
<div className="text-xs md:text-sm font-medium !text-white">
                        Entry: 18250.0
                      </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] md:text-xs font-medium !text-neutral-400 bg-white/5 px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                      +450 Pips
                    </div>
<div className="text-[10px] md:text-xs !text-neutral-500 mt-1">
                      Closed
                    </div>
</div>
</div>
</div>
<div className="bg-[#111] border-t border-white/5 px-6 py-3 text-center text-[10px] md:text-xs !text-neutral-500 uppercase tracking-widest flex justify-center items-center gap-2">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Live VIP Signals
              </div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative bg-[#080808] border-t border-white/5 overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center mb-12 reveal-up">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:chat-round-like-linear"></iconify-icon>
              Success Stories
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 !text-white">
              Traders Building Wealth
            </h2>
<p className="!text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">
              Discover what traders are achieving with our system.
            </p>
</div>
</div>

<div className="w-full relative reveal-up delay-100 mt-10 overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>
<div className="animate-scroll-left flex gap-6 px-4">


<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Finally got my $100k funded account. Shah Zaib's breakdown of
                  liquidity traps completely changed how I view the charts. Best
                  mentorship I've ever joined."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold !text-white text-sm">
                  M
                </div>
<div>
<div className="text-sm font-medium !text-white">Misbah B.</div>
<div className="text-xs !text-neutral-500">Funded Trader</div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "The NY Session live streams are gold. You actually see him
                  execute, manage risk, and explain the thought process live. No
                  hindsight analysis."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-semibold !text-emerald-400 text-sm">
                  S
                </div>
<div>
<div className="text-sm font-medium !text-white">Sarah J.</div>
<div className="text-xs !text-neutral-500">Funded Trader</div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Quit my 9-to-5 after 8 months of following the curriculum and
                  live sessions. The discipline he teaches is unmatched in this
                  industry."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-semibold !text-blue-400 text-sm">
                  D
                </div>
<div>
<div className="text-sm font-medium !text-white">Daniyal A.</div>
<div className="text-xs !text-neutral-500">
                    Independent Trader
                  </div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Been in many groups, but this is the first one where the
                  focus is on true education and not just signal farming.
                  10/10."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center font-semibold !text-purple-400 text-sm">
                  A
                </div>
<div>
<div className="text-sm font-medium !text-white">Aliza K.</div>
<div className="text-xs !text-neutral-500">Pro Member</div>
</div>
</div>
</div>


<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Finally got my $100k funded account. Shah Zaib's breakdown of
                  liquidity traps completely changed how I view the charts. Best
                  mentorship I've ever joined."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold !text-white text-sm">
                  M
                </div>
<div>
<div className="text-sm font-medium !text-white">Misbah B.</div>
<div className="text-xs !text-neutral-500">Funded Trader</div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "The NY Session live streams are gold. You actually see him
                  execute, manage risk, and explain the thought process live. No
                  hindsight analysis."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-semibold !text-emerald-400 text-sm">
                  S
                </div>
<div>
<div className="text-sm font-medium !text-white">Sarah J.</div>
<div className="text-xs !text-neutral-500">Funded Trader</div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Quit my 9-to-5 after 8 months of following the curriculum and
                  live sessions. The discipline he teaches is unmatched in this
                  industry."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-semibold !text-blue-400 text-sm">
                  D
                </div>
<div>
<div className="text-sm font-medium !text-white">Daniyal A.</div>
<div className="text-xs !text-neutral-500">
                    Independent Trader
                  </div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Been in many groups, but this is the first one where the
                  focus is on true education and not just signal farming.
                  10/10."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center font-semibold !text-purple-400 text-sm">
                  A
                </div>
<div>
<div className="text-sm font-medium !text-white">Aliza K.</div>
<div className="text-xs !text-neutral-500">Pro Member</div>
</div>
</div>
</div>


<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Finally got my $100k funded account. Shah Zaib's breakdown of
                  liquidity traps completely changed how I view the charts. Best
                  mentorship I've ever joined."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold !text-white text-sm">
                  M
                </div>
<div>
<div className="text-sm font-medium !text-white">Misbah B.</div>
<div className="text-xs !text-neutral-500">Funded Trader</div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "The NY Session live streams are gold. You actually see him
                  execute, manage risk, and explain the thought process live. No
                  hindsight analysis."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-semibold !text-emerald-400 text-sm">
                  S
                </div>
<div>
<div className="text-sm font-medium !text-white">Sarah J.</div>
<div className="text-xs !text-neutral-500">Funded Trader</div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Quit my 9-to-5 after 8 months of following the curriculum and
                  live sessions. The discipline he teaches is unmatched in this
                  industry."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-semibold !text-blue-400 text-sm">
                  D
                </div>
<div>
<div className="text-sm font-medium !text-white">Daniyal A.</div>
<div className="text-xs !text-neutral-500">
                    Independent Trader
                  </div>
</div>
</div>
</div>

<div className="shrink-0 w-[300px] md:w-[350px] glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-500 cursor-pointer">
<div>
<div className="flex items-center gap-1 mb-4 !text-emerald-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-6">
                  "Been in many groups, but this is the first one where the
                  focus is on true education and not just signal farming.
                  10/10."
                </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center font-semibold !text-purple-400 text-sm">
                  A
                </div>
<div>
<div className="text-sm font-medium !text-white">Aliza K.</div>
<div className="text-xs !text-neutral-500">Pro Member</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-28 px-4 md:px-6 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 md:mb-16 reveal-up">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2" id="services">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon>
              The Investment
            </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 !text-white">
              Join the Elite
            </h2>
<p className="!text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">
              Transparent pricing. One profitable trade covers the cost. Cancel
              anytime.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="border border-white/10 bg-[#0a0a0a] rounded-3xl flex flex-col p-6 md:p-8 glass-card reveal-up" id="service-3">
<div className="mb-6">
<h3 className="text-xl font-semibold !text-white mb-1">
                  VIP Signals Only
                </h3>
<p className="text-xs !text-neutral-500">
                  For traders who just want execution.
                </p>
</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-semibold !text-white">Free</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm !text-neutral-400">
<iconify-icon className="!text-neutral-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  2-3 Signals Daily
                </li>
<li className="flex items-center gap-3 text-sm !text-neutral-400">
<iconify-icon className="!text-neutral-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Private Community Access
                </li>
<li className="flex items-center gap-3 text-sm !text-neutral-400">
<iconify-icon className="!text-neutral-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Weekly Market Outlook
                </li>
</ul>
<a className="block w-full py-3.5 text-center text-sm font-medium rounded-full !text-white bg-white/5 border border-white/10 hover:!bg-white/10 hover:!text-white transition-all !no-underline" href="https://chat.whatsapp.com/GGfrE2K4Yoq6hxFjfna8NY?mode=wwc">
                Join WhatsApp
              </a>
</div>

<div className="border border-emerald-500/50 bg-[#0d1410] rounded-3xl flex flex-col relative shadow-[0_0_30px_rgba(16,185,129,0.15)] transform md:-translate-y-4 p-6 md:p-8 reveal-up delay-100 z-10" id="service-1">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 !text-black text-xs font-semibold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-md whitespace-nowrap">
                Trader Pro
              </div>
<div className="mb-6 mt-2">
<h3 className="text-xl font-semibold !text-white mb-1 flex items-center gap-2">
                  Live Trading
                  <iconify-icon className="!text-emerald-400 text-lg" icon="solar:star-fall-bold"></iconify-icon>
</h3>
<p className="text-xs !text-emerald-400/80">
                  Live execution &amp; full Discord access.
                </p>
</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-semibold !text-white">$10</span>
<span className="text-xs !text-neutral-500 uppercase tracking-widest">
                  /month
                </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm !text-neutral-200">
<iconify-icon className="!text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Live Trading Streams (NY)
                </li>
<li className="flex items-center gap-3 text-sm !text-neutral-200">
<iconify-icon className="!text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Premium Discord Channels
                </li>
<li className="flex items-center gap-3 text-sm !text-neutral-200">
<iconify-icon className="!text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Daily Setup Breakdowns
                </li>
</ul>
<a className="block w-full py-3.5 text-center text-sm font-medium rounded-full !text-black !bg-emerald-400 hover:!bg-emerald-300 hover:!text-black shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all !no-underline" href="javascript:void(0)" onclick="openPaymentModal('Trader Pro', '$10/month')">
                Get Access
              </a>
</div>

<div className="border border-white/10 bg-[#0a0a0a] rounded-3xl flex flex-col p-6 md:p-8 glass-card reveal-up delay-200" id="service-2">
<div className="mb-6">
<h3 className="text-xl font-semibold !text-white mb-1">
                  Inner Circle Mentorship
                </h3>
<p className="text-xs !text-neutral-500">
                  1-on-1 education &amp; mastery.
                </p>
</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-semibold !text-white">$50</span>
<span className="text-xs !text-neutral-500 uppercase tracking-widest">
                  /month
                </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm !text-neutral-400">
<iconify-icon className="!text-neutral-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Everything in Trader Pro
                </li>
<li className="flex items-center gap-3 text-sm !text-neutral-400">
<iconify-icon className="!text-neutral-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  3x Weekly Masterclasses
                </li>
<li className="flex items-center gap-3 text-sm !text-neutral-400">
<iconify-icon className="!text-neutral-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                  Chart Reviews &amp; Homework
                </li>
</ul>
<a className="block w-full py-3.5 text-center text-sm font-medium rounded-full !text-white bg-white/10 hover:!bg-white/20 hover:!text-white transition-all !no-underline" href="javascript:void(0)" onclick="openPaymentModal('Inner Circle Mentorship', '$50/month')">
                Apply Now
              </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden" id="social-feed">
<div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 text-center reveal-up">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:feed-linear"></iconify-icon>
            Live Feed
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight !text-white mb-6">
            Stay Updated
          </h2>

<div className="custom-tabs inline-flex bg-[#0a0a0a] border border-white/10 p-1 rounded-full relative z-20">
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-white/10 !text-white flex items-center gap-2 outline-none" id="tab-twitter" onclick="switchSocialTab('twitter')">
<iconify-icon className="text-lg" icon="ri:twitter-x-line"></iconify-icon>
              X (Twitter)
            </button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all !text-neutral-500 hover:!text-white flex items-center gap-2 outline-none" id="tab-instagram" onclick="switchSocialTab('instagram')">
<iconify-icon className="text-lg" icon="mdi:instagram"></iconify-icon>
              Instagram
            </button>
</div>
</div>

<div className="w-full relative overflow-hidden mt-12 transition-opacity duration-500 reveal-up delay-100" id="feed-twitter">
<div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="animate-scroll-left flex gap-6 px-4">

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Caught another massive move on XAU/USD during NY Session today.
                Discipline pays off over predictions. If you aren't managing
                your risk, the market will manage your account. 📉🔥
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  482
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  56
                </span>
<span className="flex items-center gap-1.5">2h ago</span>
</div>
</a>

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Liquidity is the fuel of the markets. If you can't spot the
                liquidity, you are the liquidity. Focus on finding the
                footprints left by algorithms. Masterclass dropping this
                weekend. 📊
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  891
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  112
                </span>
<span className="flex items-center gap-1.5">5h ago</span>
</div>
</a>

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Another Inner Circle member just hit their $100k funding goal.
                That's why we build systems. Stop jumping from strategy to
                strategy and just focus on execution. Congrats! 🏆
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  1.2k
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  84
                </span>
<span className="flex items-center gap-1.5">1d ago</span>
</div>
</a>


<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Caught another massive move on XAU/USD during NY Session today.
                Discipline pays off over predictions. If you aren't managing
                your risk, the market will manage your account. 📉🔥
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  482
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  56
                </span>
<span className="flex items-center gap-1.5">2h ago</span>
</div>
</a>

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Liquidity is the fuel of the markets. If you can't spot the
                liquidity, you are the liquidity. Focus on finding the
                footprints left by algorithms. Masterclass dropping this
                weekend. 📊
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  891
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  112
                </span>
<span className="flex items-center gap-1.5">5h ago</span>
</div>
</a>

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Another Inner Circle member just hit their $100k funding goal.
                That's why we build systems. Stop jumping from strategy to
                strategy and just focus on execution. Congrats! 🏆
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  1.2k
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  84
                </span>
<span className="flex items-center gap-1.5">1d ago</span>
</div>
</a>


<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Caught another massive move on XAU/USD during NY Session today.
                Discipline pays off over predictions. If you aren't managing
                your risk, the market will manage your account. 📉🔥
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  482
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  56
                </span>
<span className="flex items-center gap-1.5">2h ago</span>
</div>
</a>

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Liquidity is the fuel of the markets. If you can't spot the
                liquidity, you are the liquidity. Focus on finding the
                footprints left by algorithms. Masterclass dropping this
                weekend. 📊
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  891
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  112
                </span>
<span className="flex items-center gap-1.5">5h ago</span>
</div>
</a>

<a className="block shrink-0 w-[300px] md:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 hover:border-[#1DA1F2]/40 transition-colors duration-300 !no-underline group" href="https://x.com/shahzaibxtrader" target="_blank">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold !text-white group-hover:!text-[#1DA1F2] transition-colors">
                      Shah Zaib
                    </div>
<div className="text-xs !text-neutral-500">
                      @shahzaibxtrader
                    </div>
</div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="ri:twitter-x-line"></iconify-icon>
</div>
<p className="text-sm !text-neutral-300 leading-relaxed mb-4">
                Another Inner Circle member just hit their $100k funding goal.
                That's why we build systems. Stop jumping from strategy to
                strategy and just focus on execution. Congrats! 🏆
              </p>
<div className="flex items-center gap-6 text-xs font-medium !text-neutral-500">
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:heart-3-line"></iconify-icon>
                  1.2k
                </span>
<span className="flex items-center gap-1.5 hover:!text-[#1DA1F2] transition-colors">
<iconify-icon className="text-sm" icon="ri:repeat-line"></iconify-icon>
                  84
                </span>
<span className="flex items-center gap-1.5">1d ago</span>
</div>
</a>
</div>
</div>

<div className="w-full relative overflow-hidden mt-12 hidden opacity-0 transition-opacity duration-500" id="feed-instagram">
<div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="animate-scroll-left flex gap-6 px-4">

<a className="block shrink-0 w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E1306C]/40 transition-colors duration-300 !no-underline group" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[2px]">
<div className="w-full h-full bg-[#050505] rounded-full border border-[#050505] flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-xs font-semibold !text-white">
                    shahzaibxtrader
                  </div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="mdi:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="!text-neutral-700 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:chart-square-linear"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-[10px] font-medium px-2 py-1 rounded !text-white flex items-center gap-1">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-4 mb-3 !text-white text-lg">
<iconify-icon className="hover:!text-[#E1306C] transition-colors" icon="ri:heart-3-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:chat-1-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:send-plane-line"></iconify-icon>
</div>
<div className="text-xs font-semibold !text-white mb-1.5">
                  2,410 likes
                </div>
<p className="text-xs !text-neutral-300 leading-relaxed line-clamp-2">
<span className="font-semibold !text-white">shahzaibxtrader</span>
                  Another textbook execution today. Breakdowns are inside the
                  private Discord...
                </p>
</div>
</a>

<a className="block shrink-0 w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E1306C]/40 transition-colors duration-300 !no-underline group" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[2px]">
<div className="w-full h-full bg-[#050505] rounded-full border border-[#050505] flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-xs font-semibold !text-white">
                    shahzaibxtrader
                  </div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="mdi:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="!text-neutral-700 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:videocamera-record-linear"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-[10px] font-medium px-2 py-1 rounded !text-white flex items-center gap-1">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                  Reels
                </div>
</div>
<div className="p-4">
<div className="flex items-center gap-4 mb-3 !text-white text-lg">
<iconify-icon className="hover:!text-[#E1306C] transition-colors" icon="ri:heart-3-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:chat-1-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:send-plane-line"></iconify-icon>
</div>
<div className="text-xs font-semibold !text-white mb-1.5">
                  5,892 views
                </div>
<p className="text-xs !text-neutral-300 leading-relaxed line-clamp-2">
<span className="font-semibold !text-white">shahzaibxtrader</span>
                  Real live trading, real emotions managed. No hindsight BS.
                  Join the livestream...
                </p>
</div>
</a>

<a className="block shrink-0 w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E1306C]/40 transition-colors duration-300 !no-underline group" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[2px]">
<div className="w-full h-full bg-[#050505] rounded-full border border-[#050505] flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-xs font-semibold !text-white">
                    shahzaibxtrader
                  </div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="mdi:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="!text-neutral-700 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="p-4">
<div className="flex items-center gap-4 mb-3 !text-white text-lg">
<iconify-icon className="hover:!text-[#E1306C] transition-colors" icon="ri:heart-3-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:chat-1-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:send-plane-line"></iconify-icon>
</div>
<div className="text-xs font-semibold !text-white mb-1.5">
                  3,124 likes
                </div>
<p className="text-xs !text-neutral-300 leading-relaxed line-clamp-2">
<span className="font-semibold !text-white">shahzaibxtrader</span>
                  Student results speak louder than words. Proud of the Inner
                  Circle today!
                </p>
</div>
</a>


<a className="block shrink-0 w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E1306C]/40 transition-colors duration-300 !no-underline group" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[2px]">
<div className="w-full h-full bg-[#050505] rounded-full border border-[#050505] flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-xs font-semibold !text-white">
                    shahzaibxtrader
                  </div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="mdi:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="!text-neutral-700 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:chart-square-linear"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-[10px] font-medium px-2 py-1 rounded !text-white flex items-center gap-1">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-4 mb-3 !text-white text-lg">
<iconify-icon className="hover:!text-[#E1306C] transition-colors" icon="ri:heart-3-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:chat-1-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:send-plane-line"></iconify-icon>
</div>
<div className="text-xs font-semibold !text-white mb-1.5">
                  2,410 likes
                </div>
<p className="text-xs !text-neutral-300 leading-relaxed line-clamp-2">
<span className="font-semibold !text-white">shahzaibxtrader</span>
                  Another textbook execution today. Breakdowns are inside the
                  private Discord...
                </p>
</div>
</a>

<a className="block shrink-0 w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E1306C]/40 transition-colors duration-300 !no-underline group" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[2px]">
<div className="w-full h-full bg-[#050505] rounded-full border border-[#050505] flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-xs font-semibold !text-white">
                    shahzaibxtrader
                  </div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="mdi:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="!text-neutral-700 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:videocamera-record-linear"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-[10px] font-medium px-2 py-1 rounded !text-white flex items-center gap-1">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                  Reels
                </div>
</div>
<div className="p-4">
<div className="flex items-center gap-4 mb-3 !text-white text-lg">
<iconify-icon className="hover:!text-[#E1306C] transition-colors" icon="ri:heart-3-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:chat-1-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:send-plane-line"></iconify-icon>
</div>
<div className="text-xs font-semibold !text-white mb-1.5">
                  5,892 views
                </div>
<p className="text-xs !text-neutral-300 leading-relaxed line-clamp-2">
<span className="font-semibold !text-white">shahzaibxtrader</span>
                  Real live trading, real emotions managed. No hindsight BS.
                  Join the livestream...
                </p>
</div>
</a>

<a className="block shrink-0 w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-[#E1306C]/40 transition-colors duration-300 !no-underline group" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-[2px]">
<div className="w-full h-full bg-[#050505] rounded-full border border-[#050505] flex items-center justify-center">
<iconify-icon className="!text-[#1DA1F2] text-lg" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-xs font-semibold !text-white">
                    shahzaibxtrader
                  </div>
</div>
<iconify-icon className="!text-neutral-500 text-lg" icon="mdi:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="!text-neutral-700 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="p-4">
<div className="flex items-center gap-4 mb-3 !text-white text-lg">
<iconify-icon className="hover:!text-[#E1306C] transition-colors" icon="ri:heart-3-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:chat-1-line"></iconify-icon>
<iconify-icon className="hover:!text-neutral-400 transition-colors" icon="ri:send-plane-line"></iconify-icon>
</div>
<div className="text-xs font-semibold !text-white mb-1.5">
                  3,124 likes
                </div>
<p className="text-xs !text-neutral-300 leading-relaxed line-clamp-2">
<span className="font-semibold !text-white">shahzaibxtrader</span>
                  Student results speak louder than words. Proud of the Inner
                  Circle today!
                </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 bg-[#050505] border-t border-white/5" id="process">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12 md:mb-16 reveal-up">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:book-minimalistic-linear"></iconify-icon>
              Steps
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 !text-white">
              How It Works
            </h2>
<p className="!text-neutral-500 text-sm md:text-base max-w-2xl mx-auto">
              A clear, structured path from your first day to consistent,
              disciplined execution.
            </p>
</div>
<div className="relative reveal-up delay-100">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2">
<div className="timeline-runner"></div>
</div>
<div className="space-y-12 relative z-10">

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full group">
<div className="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0">
<div className="glass-card p-6 md:p-8 rounded-3xl w-full text-left md:text-right group-hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2 flex items-center md:justify-end gap-2">
<iconify-icon icon="solar:folder-open-linear"></iconify-icon>
                      Phase 1
                    </div>
<h3 className="text-xl md:text-2xl font-semibold !text-white mb-2 tracking-tight">
                      Foundation &amp; Theory
                    </h3>
<p className="text-sm !text-neutral-400 leading-relaxed">
                      Master market structure, liquidity concepts, and the exact
                      rule-based system. Strip away retail indicators and learn
                      how to read price delivery.
                    </p>
</div>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 transform -translate-x-1/2 mt-8 md:mt-0 animate-pulse-glow shadow-[0_0_15px_rgba(16,185,129,0.5)] border-4 border-[#050505]"></div>
<div className="md:w-1/2 hidden md:block"></div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full group">
<div className="md:w-1/2 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 transform -translate-x-1/2 mt-8 md:mt-0 animate-pulse-glow shadow-[0_0_15px_rgba(16,185,129,0.5)] border-4 border-[#050505]"></div>
<div className="md:w-1/2 flex justify-start pl-16 md:pl-0">
<div className="glass-card p-6 md:p-8 rounded-3xl w-full text-left group-hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
<iconify-icon icon="solar:play-stream-linear"></iconify-icon>
                      Phase 2
                    </div>
<h3 className="text-xl md:text-2xl font-semibold !text-white mb-2 tracking-tight">
                      Live Application
                    </h3>
<p className="text-sm !text-neutral-400 leading-relaxed">
                      Join the daily NY session streams. Watch real-time
                      execution, risk management, and live tape reading to
                      bridge the gap between theory and execution.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full group">
<div className="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0">
<div className="glass-card p-6 md:p-8 rounded-3xl w-full text-left md:text-right group-hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2 flex items-center md:justify-end gap-2">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
                      Phase 3
                    </div>
<h3 className="text-xl md:text-2xl font-semibold !text-white mb-2 tracking-tight">
                      Chart Breakdowns
                    </h3>
<p className="text-sm !text-neutral-400 leading-relaxed">
                      Submit your trades and charts for 1-on-1 review. Eliminate
                      psychological hurdles and correct technical errors in your
                      personal execution.
                    </p>
</div>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 transform -translate-x-1/2 mt-8 md:mt-0 animate-pulse-glow shadow-[0_0_15px_rgba(16,185,129,0.5)] border-4 border-[#050505]"></div>
<div className="md:w-1/2 hidden md:block"></div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full group">
<div className="md:w-1/2 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 transform -translate-x-1/2 mt-8 md:mt-0 animate-pulse-glow shadow-[0_0_15px_rgba(16,185,129,0.5)] border-4 border-[#050505]"></div>
<div className="md:w-1/2 flex justify-start pl-16 md:pl-0">
<div className="glass-card p-6 md:p-8 rounded-3xl w-full text-left group-hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
                      Phase 4
                    </div>
<h3 className="text-xl md:text-2xl font-semibold !text-white mb-2 tracking-tight">
                      Funding &amp; Scaling
                    </h3>
<p className="text-sm !text-neutral-400 leading-relaxed">
                      Pass prop firm challenges and scale your capital. Utilize
                      a strictly disciplined, proven approach to retain accounts
                      and generate payouts.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 relative bg-[#080808] border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12 reveal-up">
<div className="!text-emerald-400 font-medium text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:question-circle-linear"></iconify-icon>
              Questions
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 !text-white">
              Frequently Asked Questions
            </h2>
<p className="!text-neutral-500 text-sm md:text-base">
              Everything you need to know about the mentorship program.
            </p>
</div>
<div className="space-y-4 reveal-up delay-100">

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                I purchased access, now what?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                After purchase, you will receive access to your product via the
                email used at Whop checkout. You can also access your product by
                going to your Whop account. If you have any questions or
                confusion, please feel free to contact me through WhatsApp.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                Can I cancel my subscription at any time?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                Absolutely. Subscriptions are billed monthly through Whop, and
                you can cancel your membership at any time with zero hidden
                fees. Your access will simply expire at the end of your current
                billing period.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                Can I copy your trades?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                Do not copy Shah Zaib's trades. The goal of the livestreams is
                to help you learn how to read price action. Any trades taken on
                your account is 100% your responsibility.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                Do I need prior trading experience?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                No. The Inner Circle Mentorship starts from ground zero (broker
                setup, basics) and progresses to advanced institutional
                algorithmic trading models.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                What time are the live trading sessions?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                Live trading streams occur during the New York session,
                typically starting around 8:00 AM EST. (Monday - Friday).
                Educational masterclasses and weekly chart reviews are held on
                weekends. All sessions are recorded and archived for those who
                cannot attend live.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                What markets do you actively trade?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                Our primary strike zones are in Forex (XAU/USD), Indices
                (NAS100), and major Crypto (BTC, ETH). However, the liquidity
                and order flow concepts taught apply universally to any highly
                liquid financial market.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                How do the signals work?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                Signals are dispatched in real-time via our dedicated private
                WhatsApp community, Instant WhatsApp notifications for
                high-probability setups sent directly to your phone, No lag.
                Includes Entry price, Stop Loss, and multiple Take Profit zones.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                Can I join the community without a consultation?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                Yes! Follow @shahzaibxtrader on Snapchat, Instagram and X
                (Twitter), or join our WhatsApp and Telegram channels for free
                market updates, trading insights, mindset &amp; psychology
                sessions, and more.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                Is this financial advice?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                No. All analysis is educational and for informational purposes
                only. Always do your own research.
              </div>
</details>

<details className="glass-card rounded-2xl group cursor-pointer transition-all duration-300">
<summary className="p-6 font-medium text-sm md:text-base !text-white list-none flex justify-between items-center outline-none select-none">
                Do you offer refunds?
                <iconify-icon className="text-emerald-500 text-xl group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm !text-neutral-400 leading-relaxed">
                No, Shah Zaib does not offer refunds. All sales are final.
              </div>
</details>
</div>
</div>
</section>

<section className="py-16 md:py-20 px-4 md:px-6 relative bg-[#050505]">
<div className="max-w-7xl mx-auto reveal-up">
<div className="bg-gradient-to-br from-emerald-900/40 to-[#0a0a0a] border border-emerald-500/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold !text-white tracking-tight mb-6">
                Stop guessing. Start executing.
              </h2>
<p className="!text-neutral-300 text-sm md:text-base mb-8 max-w-xl mx-auto">
                The market doesn't care about your feelings, it cares about your
                discipline. Join the premium Discord today and transform your
                approach entirely.
              </p>
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base font-semibold rounded-full py-4 px-10 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] !text-[#050505] !bg-emerald-400 hover:!bg-emerald-300 hover:!text-[#050505] !no-underline hover:-translate-y-1" href="#service-1">
                Join Discord
                <iconify-icon icon="mingcute:discord-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] py-12 px-4 md:px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center justify-center reveal-up">
<a className="text-2xl font-bold tracking-tighter !text-white uppercase mb-6 !no-underline hover:!text-emerald-400 transition-opacity" href="#">
            SHAH ZAIB
          </a>
<p className="text-[18px] !text-neutral-300 leading-relaxed mb-6">
            The Most Disciplined Trader &amp; Mentor
          </p>
<div>
<a className="inline-flex items-center gap-6 mb-8 text-sm !text-emerald-400 hover:!text-emerald-300 transition-colors !no-underline" href="mailto:contact@shahzaibtrader.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
              contact@shahzaibtrader.com
            </a>
</div>

<div className="flex items-center gap-6 mb-8 !text-neutral-400" id="contact">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:!bg-white/10 hover:!text-[#FF0000] transition-colors !no-underline" href="https://www.youtube.com/@shahzaibxtrader" target="_blank">
<iconify-icon icon="mdi:youtube" width="22"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:!bg-white/10 hover:!text-white transition-colors !no-underline" href="https://x.com/@shahzaibxtrader" target="_blank">
<iconify-icon icon="ri:twitter-x-line" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:!bg-white/10 hover:!text-[#E1306C] transition-colors !no-underline" href="https://www.instagram.com/shahzaibxtrader" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:!bg-white/10 hover:!text-[#1877F2] transition-colors !no-underline" href="https://www.facebook.com/shahzaibxtrader" target="_blank">
<iconify-icon icon="mdi:facebook" width="22"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:!bg-white/10 hover:!text-white transition-colors !no-underline" href="https://www.tiktok.com/@shahzaibxtrader" target="_blank">
<iconify-icon icon="ri:tiktok-line" width="22"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:!bg-white/10 hover:!text-[#FFFC00] transition-colors !no-underline" href="https://www.snapchat.com/@shahzaibxtrader" target="_blank">
<iconify-icon icon="mdi:snapchat" width="22"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm font-medium !text-neutral-500">
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#about">
              About
            </a>
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#features">
              Features
            </a>
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#testimonials">
              Testimonials
            </a>
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#services">
              Services
            </a>
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#process">
              Process
            </a>
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#faq">
              FAQ
            </a>
<a className="hover:!text-emerald-400 transition-colors !no-underline" href="#contact">
              Contact
            </a>
</div>

<div className="max-w-3xl text-center mb-6">
<p className="text-[14px] md:text-xs !text-neutral-600 leading-relaxed tracking-wider">
              Trading foreign exchange, cryptocurrency, and indices on margin
              carries a high level of risk, and may not be suitable for all
              investors. The high degree of leverage can work against you as
              well as for you. Past performance is not indicative of future
              results.
            </p>
</div>
<p className="text-xs !text-neutral-600 font-medium">
            © 2027 Shah Zaib Trader. All rights reserved.
          </p>
</div>
</footer>

<div className="fixed z-[100] bottom-20 left-4 md:bottom-8 md:left-8 flex flex-col gap-4">

<a className="group flex items-center gap-3 !bg-[#111] border border-[#229ED9]/30 rounded-full pt-1.5 pr-5 pb-1.5 pl-1.5 !shadow-[0_0_20px_rgba(34,158,217,0.2)] hover:!shadow-[0_0_30px_rgba(34,158,217,0.4)] transition-all duration-300 hover:scale-105 hover:!border-[#229ED9]/60 backdrop-blur-md cursor-pointer overflow-hidden !no-underline" href="https://t.me/shahzaibxtrader" target="_blank">
<div className="relative flex items-center justify-center w-10 h-10 bg-[#229ED9] !text-white rounded-full transition-colors duration-300 shrink-0">
<iconify-icon icon="mdi:telegram" strokeWidth="2" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] md:text-xs uppercase tracking-widest !text-[#229ED9] font-medium leading-none mb-1">
              Official
            </span>
<span className="text-sm font-medium !text-white leading-none">
              Telegram Channel
            </span>
</div>
</a>

<a className="group flex items-center gap-3 !bg-[#111] border border-emerald-500/30 rounded-full pt-1.5 pr-5 pb-1.5 pl-1.5 !shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:!shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 hover:!border-emerald-500/60 backdrop-blur-md cursor-pointer overflow-hidden !no-underline" href="https://whatsapp.com/channel/0029VbBaPukLo4hjB8wpKr0h" target="_blank">
<div className="relative flex items-center justify-center w-10 h-10 bg-emerald-500 !text-black rounded-full transition-colors duration-300 shrink-0">
<iconify-icon icon="mdi:whatsapp" strokeWidth="2" width="24"></iconify-icon>
<span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-black"></span>
</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] md:text-xs uppercase tracking-widest !text-emerald-400 font-medium leading-none mb-1">
              Official
            </span>
<span className="text-sm font-medium !text-white leading-none">
              WhatsApp Channel
            </span>
</div>
</a>
</div>

<div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-md opacity-0 invisible transition-all duration-300 p-4 overflow-y-auto" id="payment-modal">
<div className="bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-3xl max-w-lg w-full relative shadow-[0_0_50px_rgba(16,185,129,0.15)] my-auto">
<button className="absolute top-4 right-4 !text-neutral-500 hover:!text-white transition-colors !bg-transparent !border-none cursor-pointer" onclick="closePaymentModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" width="30"></iconify-icon>
</button>
<div className="mb-6">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight !text-white mb-2" id="payment-modal-title">
              Complete Your Payment
            </h3>
<p className="text-sm !text-neutral-400" id="payment-modal-desc">
              Fill in your details below after sending your payment.
            </p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
<div className="text-sm font-medium !text-white mb-3 flex items-center gap-2">
<iconify-icon className="!text-emerald-400 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
              Payment Methods
            </div>
<div className="text-xs !text-neutral-400 space-y-4">
<div>
<div className="text-[10px] uppercase tracking-widest mb-1.5 text-neutral-500">
                  USDT (TRC20)
                </div>
<div className="select-all bg-black/50 px-3 py-2.5 rounded-lg border border-white/5 font-mono text-[11px] text-white break-all">
                  YOUR_TRC20_WALLET_ADDRESS
                </div>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest mb-1.5 text-neutral-500">
                  USDT (BEP20)
                </div>
<div className="select-all bg-black/50 px-3 py-2.5 rounded-lg border border-white/5 font-mono text-[11px] text-white break-all">
                  YOUR_BEP20_WALLET_ADDRESS
                </div>
</div>
<div className="pt-3 border-t border-white/5 flex justify-between items-center">
<span>Amount to send:</span>
<strong className="text-emerald-400 text-base font-semibold" id="payment-modal-price">
                  $0
                </strong>
</div>
</div>
</div>
<form className="space-y-4" id="payment-form" onsubmit="submitPayment(event)">
<input id="tier-name" type="hidden" value=""/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium !text-neutral-400 mb-1.5">
                  Full Name *
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm !text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" id="pf-name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium !text-neutral-400 mb-1.5">
                  Email Address *
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm !text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" id="pf-email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium !text-neutral-400 mb-1.5">
                  Phone / WhatsApp *
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm !text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" id="pf-phone" placeholder="+1 234 567 8900" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium !text-neutral-400 mb-1.5">
                  Nationality *
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm !text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" id="pf-nationality" placeholder="e.g. American" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium !text-neutral-400 mb-1.5">
                Preferred Language
              </label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm !text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer" id="pf-language">
<option className="bg-[#0a0a0a]" value="English">English</option>
<option className="bg-[#0a0a0a]" value="Urdu/Hindi">
                    Urdu / Hindi
                  </option>
<option className="bg-[#0a0a0a]" value="Other">Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium !text-neutral-400 mb-1.5">
                Transaction ID / Hash *
              </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm !text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" id="pf-txid" placeholder="Paste your transaction ID or hash here" required="" type="text"/>
</div>
<button className="w-full mt-6 py-3.5 text-center text-sm font-semibold tracking-wide rounded-xl !text-[#050505] !bg-emerald-400 hover:!bg-emerald-300 transition-all !no-underline flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5" type="submit">
              Submit Payment Proof
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>

</div>




    </>
  );
}
