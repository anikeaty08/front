import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "HVACBusiness",
"name": "AirWorks Solutions",
"image": "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1200&q=80",
"url": "https://www.airworks.example",
"telephone": "(805) 555-0134",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"addressLocality": "Camarillo",
"addressRegion": "CA",
"postalCode": "93010",
"addressCountry": "US"
},
"areaServed": [
{"@type":"City","name":"Ventura"},
{"@type":"City","name":"Camarillo"},
{"@type":"City","name":"Oxnard"},
{"@type":"City","name":"Thousand Oaks"},
{"@type":"City","name":"Sacramento"}
],
"openingHoursSpecification": [{
"@type":"OpeningHoursSpecification",
"dayOfWeek":[ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ],
"opens":"07:00","closes":"18:00"
}],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.9",
"reviewCount": "152"
},
"sameAs": [
"https://www.facebook.com/airworks.example",
"https://www.instagram.com/airworks.example"
]
}



        (function () {
          const banner = document.getElementById('helpBanner');
          if (!banner) return;

          const container = document.getElementById('bannerContainer');
          const ctaEl = banner.querySelector('#intentCtas');
          const pills = Array.from(banner.querySelectorAll('[data-intent]'));
          const toggle = banner.querySelector('#bannerToggle');
          const headerRow = banner.querySelector('#headerRow');
          const chipsMobile = banner.querySelector('#chipsMobile');
          const chipsDesktop = banner.querySelector('#chipsDesktop');
          const topSpacer = banner.querySelector('#topSpacer');

          let currentIntent = null;

          const CTAS = {
            repair: [
              { href: '#signs-repair', text: 'Scroll to repair section', icon: 'arrow-down', variant: 'ghost' },
              { href: '/ac-repair/camarillo-ca', text: 'Repairs landing page', icon: 'file-text', variant: 'ghost' },
              { href: 'tel:18055550134', text: 'Call for Repair', icon: 'phone', variant: 'primary' }
            ],
            installation: [
              { href: '#install-cost', text: 'See installation info', icon: 'arrow-down', variant: 'ghost' },
              { href: '/ac-installation/camarillo-ca', text: 'Installation page', icon: 'file-text', variant: 'ghost' },
              { href: 'tel:18055550134', text: 'Call about Installation', icon: 'phone', variant: 'primary' }
            ],
            tuneup: [
              { href: '#maintenance', text: 'See tune‑up details', icon: 'arrow-down', variant: 'ghost' },
              { href: '/ac-tune-up/camarillo-ca', text: 'Tune‑Up page', icon: 'file-text', variant: 'ghost' },
              { href: 'tel:18055550134', text: 'Call for Tune‑Up', icon: 'phone', variant: 'primary' }
            ],
            emergency: [
              { href: 'tel:18055550134', text: 'Call Emergency Service', icon: 'alarm-clock-off', variant: 'primary' },
              { href: '#quote', text: 'Request Urgent Callback', icon: 'message-square', variant: 'ghost' },
              { href: '/ac-repair/camarillo-ca', text: 'Repairs Page', icon: 'arrow-right', variant: 'ghost' }
            ]
          };

          function pillClasses(variant) {
            if (variant === 'primary') {
              return 'inline-flex items-center gap-2 h-9 px-3 rounded-md bg-white text-slate-900 hover:bg-white/90 text-[13px] font-medium font-sans';
            }
            return 'inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/20 text-white hover:bg-white/10 text-[13px] font-sans';
          }

          function renderCTAs(kind) {
            const items = CTAS[kind] || [];
            if (items.length) {
              const backBtn = '<button id="ctaBack" class="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-white/20 text-white hover:bg-white/10 text-[13px] font-sans"><i data-lucide="arrow-left" class="w-4 h-4"></i>Back</button>';
              const ctaButtons = items.map(item => {
                const clickHandler = item.href.startsWith('#') ? `onclick="handleScrollClick(event, '${item.href}')"` : '';
                return `<a href="${item.href}" class="${pillClasses(item.variant)}" role="button" ${clickHandler}><i data-lucide="${item.icon}" class="w-4 h-4"></i>${item.text}</a>`;
              }).join('');
              ctaEl.innerHTML = backBtn + ctaButtons;
              
              // Add back button handler
              const backButton = ctaEl.querySelector('#ctaBack');
              if (backButton) {
                backButton.addEventListener('click', () => {
                  currentIntent = null;
                  setActivePill(null);
                  renderCTAs('');
                });
              }
            } else {
              ctaEl.innerHTML = '<span class="text-xs text-white/70 font-sans">Choose an option above to see quick actions.</span>';
            }
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }

          // Global scroll handler
          window.handleScrollClick = function(e, href) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          };

          function setActivePill(activeIntent) {
            pills.forEach(btn => {
              const isActive = btn.getAttribute('data-intent') === activeIntent;
              btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
              if (isActive) {
                btn.classList.remove('bg-white/10', 'text-white');
                btn.classList.add('bg-white', 'text-slate-900');
              } else {
                btn.classList.remove('bg-white', 'text-slate-900');
                btn.classList.add('bg-white/10', 'text-white');
              }
            });
          }

          pills.forEach(btn => {
            btn.addEventListener('click', (e) => {
              const intent = btn.getAttribute('data-intent');
              
              // If it's an anchor with tel: link, let it proceed
              if (btn.tagName === 'A' && btn.getAttribute('href')?.startsWith('tel:')) {
                return;
              }
              
              e.preventDefault();
              currentIntent = intent;
              setActivePill(intent);
              renderCTAs(intent);
            });
          });

          function setChipRow(el, collapsed) {
            if (!el) return;
            if (collapsed) {
              el.classList.remove('flex-wrap');
              el.classList.add('whitespace-nowrap','overflow-x-auto');
              el.style.scrollbarWidth = 'none';
              el.style.msOverflowStyle = 'none';
              Array.from(el.querySelectorAll('*')).forEach(n => n.classList && n.classList.add('shrink-0'));
            } else {
              el.classList.add('flex-wrap');
              el.classList.remove('whitespace-nowrap','overflow-x-auto');
              el.style.scrollbarWidth = '';
              el.style.msOverflowStyle = '';
              Array.from(el.querySelectorAll('*')).forEach(n => n.classList && n.classList.remove('shrink-0'));
            }
          }

          function setCollapsed(collapsed) {
            toggle.setAttribute('aria-expanded', String(!collapsed));
            toggle.title = collapsed ? 'Expand' : 'Collapse';
            
            if (collapsed) {
              // Hide only the description paragraph
              const description = headerRow.querySelector('p');
              if (description) description.classList.add('hidden');
              
              ctaEl && ctaEl.classList.add('hidden');
              topSpacer && topSpacer.classList.add('hidden');
              setChipRow(chipsMobile, true);
              setChipRow(chipsDesktop, true);
              if (container) {
                container.classList.add('py-2');
                container.classList.remove('pt-3','pb-3','sm:py-4');
              }
              toggle.innerHTML = '<i data-lucide="chevron-down" class="w-4 h-4"></i><span class="sr-only">Expand banner</span>';
            } else {
              const description = headerRow.querySelector('p');
              if (description) description.classList.remove('hidden');
              
              ctaEl && ctaEl.classList.remove('hidden');
              topSpacer && topSpacer.classList.remove('hidden');
              setChipRow(chipsMobile, false);
              setChipRow(chipsDesktop, false);
              if (container) {
                container.classList.remove('py-2');
                container.classList.add('pt-3','pb-3','sm:py-4');
              }
              toggle.innerHTML = '<i data-lucide="chevron-up" class="w-4 h-4"></i><span class="sr-only">Collapse banner</span>';
            }
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }

          // Init
          renderCTAs('');
          setCollapsed(false);

          toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            setCollapsed(isExpanded);
          });

          if (!window.lucide) {
            window.addEventListener('load', () => {
              if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            });
          }
        })();
      


    (function() {
      const toggle = document.getElementById('aiSummaryToggle');
      const content = document.getElementById('aiSummaryContent');
      const chevron = document.getElementById('aiSummaryChevron');
      
      if (toggle && content && chevron) {
        toggle.addEventListener('click', function() {
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
          
          if (isExpanded) {
            content.classList.add('hidden');
            chevron.style.transform = 'rotate(0deg)';
            toggle.setAttribute('aria-expanded', 'false');
          } else {
            content.classList.remove('hidden');
            chevron.style.transform = 'rotate(180deg)';
            toggle.setAttribute('aria-expanded', 'true');
          }
        });
      }
    })();
  


    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });

    // Chat widget
    const chatBtn = document.getElementById('chatBtn');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    chatBtn.addEventListener('click', function() {
      chatWindow.classList.toggle('hidden');
      if (!chatWindow.classList.contains('hidden')) {
        chatInput.focus();
      }
    });

    chatClose.addEventListener('click', function() {
      chatWindow.classList.add('hidden');
    });

    function addMessage(text, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'flex gap-3' + (isUser ? ' flex-row-reverse' : '');
      
      const avatar = document.createElement('div');
      avatar.className = 'w-8 h-8 rounded-lg flex-shrink-0 grid place-items-center ' + (isUser ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white');
      avatar.innerHTML = isUser 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>';
      
      const bubble = document.createElement('div');
      bubble.className = 'flex-1';
      bubble.innerHTML = `<div class="${isUser ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'} rounded-lg p-3 text-sm font-sans">${text}</div>`;
      
      messageDiv.appendChild(avatar);
      messageDiv.appendChild(bubble);
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSend() {
      const text = chatInput.value.trim();
      if (!text) return;
      
      addMessage(text, true);
      chatInput.value = '';
      
      setTimeout(() => {
        const responses = [
          "Thanks for reaching out! For immediate assistance with your HVAC system, please call us at (805) 555-0134. We're available Mon-Sat, 7am-6pm.",
          "I can help with that! To schedule a service appointment or get a detailed quote, please call (805) 555-0134 or fill out the quote form above.",
          "Great question! Our certified technicians can provide the best answer for your specific situation. Call (805) 555-0134 to speak with an expert.",
          "I'd be happy to help! For accurate pricing and scheduling, please reach out to our team at (805) 555-0134 or request a free quote using the form on this page."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, false);
      }, 800);
    }

    chatSend.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSend();
      }
    });

    // Form submission handler
    document.getElementById('heroQuote').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! We\'ll contact you shortly with your free estimate.');
    });

    // Initialize Lucide icons
    if (window.lucide) {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-50 border-slate-200 border-b">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm py-2 gap-2 sm:gap-3">
<div className="flex items-center gap-2 sm:gap-3 text-slate-600 w-full sm:w-auto overflow-x-auto whitespace-nowrap" style={{scrollbarWidth: 'none'}}>
<span className="inline-flex items-center gap-1.5 font-geist" style={{}}>
<svg className="lucide lucide-map-pin w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Ventura &amp; Sacramento, CA
          </span>
<span className="hidden sm:inline text-slate-300 font-geist" style={{}}>|</span>
<span className="inline-flex items-center gap-1.5 font-geist" style={{}}>
<svg className="lucide lucide-clock w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Mon–Sat: 7:00a–6:00p
          </span>
<span className="hidden sm:inline text-slate-300 font-geist" style={{}}>|</span>
<span className="hidden md:inline-flex items-center gap-1.5 font-geist" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Licensed • Bonded • Insured
          </span>
</div>
<div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
<a className="hidden sm:inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#financing" style={{}}>
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
            Financing available
          </a>
<a className="inline-flex items-center gap-1.5 text-slate-900 font-medium hover:opacity-80 whitespace-nowrap font-geist" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            (805) 555-0134
          </a>
</div>
</div>
</div>
</div>

<header className="sticky z-40 bg-white/90 border-slate-200 border-b top-0 backdrop-blur">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a aria-label="AirWorks Solutions Home" className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-md bg-slate-900 text-white grid place-items-center tracking-tighter text-[13px] font-semibold group-hover:ring-2 group-hover:ring-slate-900/10 transition font-geist" style={{}}>
            AWS
          </div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold tracking-tight text-slate-900 font-geist" style={{}}>AirWorks Solutions</span>
<span className="text-[11px] text-slate-500 tracking-tight font-geist" style={{}}>Heating • Cooling • IAQ</span>
</div>
</a>
<nav className="hidden lg:flex items-center gap-7 text-[15px]">
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Heating</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Air Conditioning</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Ductless</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Indoor Air Quality</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#financing" style={{}}>Financing</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#reviews" style={{}}>Reviews</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#faq" style={{}}>FAQ</a>
</nav>
<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 font-geist" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Call
          </a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 font-geist" href="#quote" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Get a Free Quote
          </a>
</div>
<button aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-2">
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Heating</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Air Conditioning</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Ductless</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#" style={{}}>Indoor Air Quality</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#financing" style={{}}>Financing</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#reviews" style={{}}>Reviews</a>
<a className="py-2 text-slate-700 hover:text-slate-900 font-geist" href="#faq" style={{}}>FAQ</a>
<div className="pt-2 flex gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 font-geist" href="tel:18055550134" style={{}}>Call</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-slate-900 text-white hover:bg-slate-800 font-geist" href="#quote" style={{}}>Free Quote</a>
</div>
</div>
</div>
<div className="xl:py-4 text-white bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700 border-b py-4" id="helpBanner">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative" id="bannerContainer">
<button aria-controls="headerRow chipsMobile chipsDesktop intentCtas" aria-expanded="false" className="inline-flex hover:bg-white/10 transition xl:top-22 xl:right-8 text-white w-7 h-7 border-white/20 border rounded-md absolute top-2 right-3 items-center justify-center" id="bannerToggle" title="Expand"><svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg><span className="sr-only">Expand banner</span></button>
<div className="flex gap-3 gap-x-3 gap-y-3 items-start" id="topSpacer">
<div className="flex-shrink-0 mt-0.5"></div>
</div>

<div className="flex gap-4 pb-3 gap-x-4 gap-y-4 items-start justify-between" id="headerRow">
<div className="flex items-center gap-3">
<div className="grid place-items-center w-10 h-10 rounded-md bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="min-w-0">
<h3 className="text-lg sm:text-2xl tracking-tight text-white/95 font-geist font-semibold">How can we help today?</h3>
<p className="text-xs sm:text-sm text-white/70 font-geist">Choose an option to see quick actions and get help faster.</p>
</div>
</div>
</div><div className="md:hidden flex gap-2 items-center" id="chipsMobile" style={{scrollbarWidth: 'none'}}>
<span className="text-xs font-medium uppercase text-white/60 font-geist">I need</span>
<button aria-pressed="false" className="intent-pill inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="repair" type="button">
<svg className="lucide lucide-wrench w-3.5 h-3.5" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
          Repair
        </button>
<button aria-pressed="false" className="intent-pill inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="installation" type="button">
<svg className="lucide lucide-home w-3.5 h-3.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Installation
        </button>
<button aria-pressed="false" className="intent-pill inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="tuneup" type="button">
<svg className="lucide lucide-gauge w-3.5 h-3.5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
          Tune‑Up
        </button>
<a aria-pressed="false" className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="emergency" href="tel:18055550134">
<svg className="lucide lucide-alarm-clock-off w-3.5 h-3.5" data-lucide="alarm-clock-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26"></path><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15"></path><path d="m22 6-3-3"></path><path d="M6.26 18.67 4 21"></path><path d="m2 2 20 20"></path><path d="M4 4 2 6"></path></svg>
          Emergency
        </a>
</div>


<div className="hidden md:flex gap-2 max-w-7xl items-center" id="chipsDesktop" style={{scrollbarWidth: 'none'}}>
<span className="text-xs font-medium uppercase text-white/60 font-geist">I need</span>
<button aria-pressed="false" className="intent-pill inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="repair" type="button">
<svg className="lucide lucide-wrench w-3.5 h-3.5" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
          Repair
        </button>
<button aria-pressed="false" className="intent-pill inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="installation" type="button">
<svg className="lucide lucide-home w-3.5 h-3.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Installation
        </button>
<button aria-pressed="false" className="intent-pill inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="tuneup" type="button">
<svg className="lucide lucide-gauge w-3.5 h-3.5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
          Tune‑Up
        </button>
<a aria-pressed="false" className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition font-geist" data-intent="emergency" href="tel:18055550134">
<svg className="lucide lucide-alarm-clock-off w-3.5 h-3.5" data-lucide="alarm-clock-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26"></path><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15"></path><path d="m22 6-3-3"></path><path d="M6.26 18.67 4 21"></path><path d="m2 2 20 20"></path><path d="M4 4 2 6"></path></svg>
          Emergency
        </a>
</div>

<div aria-atomic="true" aria-live="polite" className="flex flex-wrap gap-2 mt-3 gap-x-2 gap-y-2 items-center" id="intentCtas" role="region"><span className="text-xs text-white/70 font-sans">Choose an option above to see quick actions.</span></div>

</div>
</div></header>

<section className="overflow-hidden relative">
<div className="absolute inset-0">
<img alt="Technician servicing HVAC unit" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="bg-gradient-to-b from-slate-50 via-white to-white absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 sm:py-20 lg:px-8 lg:pb-0 lg:pt-10 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-0 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-medium font-geist" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            4.9 rating from 150+ local reviews
          </span>
<ol className="flex xl:pl-0 xl:pr-0 xl:pt-3 xl:pb-3 text-sm max-w-7xl mr-auto ml-auto pt-0 pr-0 pb-0 pl-0 gap-x-2 gap-y-2 items-center">
<li className=""><a className="text-slate-600 hover:text-slate-900 font-geist" href="/" style={{}}>Home</a></li>
<li aria-hidden="true" className="text-slate-400 font-geist" style={{}}>/</li>
<li className=""><a className="text-slate-600 hover:text-slate-900 font-geist" href="/hvac" style={{}}>HVAC Services</a></li>
<li aria-hidden="true" className="text-slate-400 font-geist" style={{}}>/</li>
<li className="text-slate-900 font-medium font-geist" style={{}}>HVAC Repair &amp; Installation — Ventura &amp; Sacramento</li>
</ol><h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 font-geist font-semibold" style={{}}>HVAC Repair &amp; Installation in Ventura &amp; Sacramento</h1>
<p className="mt-4 text-slate-600 text-base sm:text-lg font-geist" style={{}}>Fast, friendly service from certified technicians. Transparent quotes, great communication, and work done right the first time.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 font-geist" href="#quote" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Get a Free Quote
            </a>
<a className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 font-geist" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call (805) 555-0134
            </a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-slate-600">
<div className="inline-flex items-center gap-1.5 font-geist" style={{}}>
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Same‑day appointments
            </div>
<div className="inline-flex items-center gap-1.5 font-geist" style={{}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Licensed • Bonded • Insured
            </div>
</div>
</div>
<div className="bg-white/70 backdrop-blur rounded-xl border border-slate-200 p-6 shadow-sm">
<h2 className="text-lg font-semibold text-slate-900 font-geist" style={{}}>Request a fast estimate</h2>
<p className="text-sm text-slate-600 font-geist" style={{}}>We'll call you back within minutes during business hours.</p>
<form action="#quote" className="mt-4 grid grid-cols-1 gap-3" id="heroQuote">
<div className="">
<label className="block text-sm font-medium text-slate-700 font-geist" htmlFor="hqName" style={{}}>Name</label>
<input className="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="hqName" name="name" required="" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="">
<label className="block text-sm font-medium text-slate-700 font-geist" htmlFor="hqPhone" style={{}}>Phone</label>
<input className="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="hqPhone" name="phone" required="" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 font-geist" htmlFor="hqZip" style={{}}>ZIP</label>
<input className="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="hqZip" inputmode="numeric" name="zip" pattern="[0-9]*" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 font-geist" htmlFor="hqService" style={{}}>Service needed</label>
<select className="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="hqService" name="service">
<option className="font-geist" style={{}}>AC Repair</option>
<option className="font-geist" style={{}}>Heating Repair</option>
<option className="font-geist" style={{}}>New Installation</option>
<option className="font-geist" style={{}}>Tune‑Up / Maintenance</option>
<option className="font-geist" style={{}}>Other</option>
</select>
</div>
<button className="mt-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition font-geist" style={{}} type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Request callback
            </button>
<p className="text-xs text-slate-500 font-geist" style={{}}>By submitting, you agree to be contacted by AirWorks Solutions. We respect your privacy.</p>
</form>
</div>
</div>
</div>
</section>


<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="article">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-24 space-y-4">
<div className="bg-white border-slate-200 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h3 className="font-medium text-slate-900 font-geist" style={{}}>Service Areas</h3>
</div>
<ul className="mt-3 space-y-2 text-sm">
<li className=""><a className="inline-flex items-center justify-between w-full rounded-md border border-transparent hover:border-slate-200 px-3 py-2 text-slate-700 hover:text-slate-900 transition font-geist" href="/ac-repair/ventura-ca" style={{}}>Ventura AC Repair <span aria-hidden="true" className="font-geist" style={{}}>→</span></a></li>
<li className=""><a className="inline-flex items-center justify-between w-full rounded-md border border-transparent hover:border-slate-200 px-3 py-2 text-slate-700 hover:text-slate-900 transition font-geist" href="/ac-repair/camarillo-ca" style={{}}>Camarillo AC Repair <span aria-hidden="true" className="font-geist" style={{}}>→</span></a></li>
<li className=""><a className="inline-flex items-center justify-between w-full rounded-md border border-transparent hover:border-slate-200 px-3 py-2 text-slate-700 hover:text-slate-900 transition font-geist" href="/ac-repair/oxnard-ca" style={{}}>Oxnard AC Repair <span aria-hidden="true" className="font-geist" style={{}}>→</span></a></li>
<li className=""><a className="inline-flex items-center justify-between w-full rounded-md border border-transparent hover:border-slate-200 px-3 py-2 text-slate-700 hover:text-slate-900 transition font-geist" href="/ac-repair/thousand-oaks-ca" style={{}}>Thousand Oaks AC Repair <span aria-hidden="true" className="font-geist" style={{}}>→</span></a></li>
<li className=""><a className="inline-flex items-center justify-between w-full rounded-md border border-transparent hover:border-slate-200 px-3 py-2 text-slate-700 hover:text-slate-900 transition font-geist" href="/ac-repair/sacramento-ca" style={{}}>Sacramento AC Repair <span aria-hidden="true" className="font-geist" style={{}}>→</span></a></li>
</ul>
</div>
</div>
</aside>

<article className="lg:col-span-6 prose">

<div className="not-prose bg-white border-slate-200 border rounded-xl mb-8 shadow-sm">
<button aria-expanded="true" className="flex hover:bg-slate-50 transition text-left w-full rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between" id="aiSummaryToggle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white grid place-items-center flex-shrink-0">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-slate-900 font-geist" style={{}}>AI Summary</div>
<div className="text-xs text-slate-500 font-geist" style={{}}>Quick overview of this guide</div>
</div>
</div>
<svg className="transition-transform flex-shrink-0 text-slate-400 w-5 h-5" data-icon-replaced="true" fill="none" height="24" id="aiSummaryChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(148, 163, 184)', width: '20px', height: '20px', transform: 'rotate(180deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="border-t border-slate-200" id="aiSummaryContent">
<div className="p-4">
<p className="text-sm text-slate-700 leading-relaxed font-geist" style={{}}>This guide covers HVAC repair and installation in Ventura and Sacramento. Key points: watch for warning signs like strange noises or weak airflow; new installations range $3,500–$12,000 depending on system type and efficiency; seasonal maintenance prevents breakdowns; permits are required and handled by professionals; flexible financing is available; service areas include Ventura County and greater Sacramento region.</p>
<div className="flex flex-wrap gap-2 mt-4">
<a className="inline-flex items-center gap-1.5 hover:bg-slate-800 transition text-sm font-medium font-geist bg-slate-900 h-9 rounded-md pr-3 pl-3" href="tel:18055550134">
<svg className="w-3.5 h-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<span className="text-white">Call Now</span>
</a>
<a className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 transition text-sm font-geist" href="#quote">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Get Free Quote
        </a>
<a className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 transition text-sm font-geist" href="#financing-inline">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
          Financing
        </a>
</div>
</div>
</div>

</div>
<section className="scroll-mt-24" id="signs-repair">
<h2 className="font-geist font-semibold" style={{}}>Signs You Need HVAC Repair</h2>
<p className="font-geist" style={{}}>Your HVAC system tells you when something's wrong—if you know what to listen for. Catching problems early saves you money and prevents uncomfortable breakdowns in extreme weather.</p>
<h3 className="font-geist font-semibold" style={{}}>Common warning signs</h3>
<ul className="">
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Strange noises:</strong> Grinding, squealing, or banging sounds indicate worn bearings, loose parts, or failing motors</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Weak airflow:</strong> Could mean a clogged filter, ductwork leak, or blower motor issue</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Warm air from AC:</strong> Low refrigerant, compressor failure, or thermostat calibration problem</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Short cycling:</strong> System turns on and off rapidly—often an electrical or sensor fault</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>High energy bills:</strong> Sudden spike in utility costs suggests inefficient operation</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Moisture or leaks:</strong> Refrigerant or condensate drain issues need immediate attention</li>
</ul>
<p className="font-geist" style={{}}>If you notice any of these symptoms, <a className="font-geist" href="tel:18055550134" style={{}}>call us for a diagnostic</a>. Most repairs cost far less than emergency replacements—and we offer same-day service throughout Ventura and Sacramento.</p>
</section>
<section className="scroll-mt-24" id="install-cost">
<h2 className="font-geist font-semibold" style={{}}>HVAC Installation Costs in Ventura &amp; Sacramento</h2>
<p className="font-geist" style={{}}>A new HVAC system is a significant investment, but modern equipment pays for itself through energy savings and reliable comfort. Here's what influences the final price:</p>
<h3 className="font-geist font-semibold" style={{}}>Factors that affect installation cost</h3>
<ul>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>System size:</strong> We perform Manual J load calculations to size your system correctly—undersized units run constantly; oversized units short-cycle and waste energy</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Efficiency rating (SEER/AFUE):</strong> Higher-efficiency models cost more upfront but deliver lower monthly bills</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Ductwork condition:</strong> Existing ducts in good shape save thousands; damaged ducts need sealing or replacement</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Zoning &amp; smart controls:</strong> Multi-zone systems and WiFi thermostats add comfort and control</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Permits &amp; inspections:</strong> Required by local code—we handle all paperwork</li>
</ul>
<p></p>
<ul className="">
<li className="font-geist" style={{}}>Standard efficiency central AC: $5,000–$8,000</li>
<li className="font-geist" style={{}}>High-efficiency heat pump: $7,000–$12,000</li>
<li className="font-geist" style={{}}>Ductless mini-split (multi-zone): $4,500–$10,000</li>
<li className="font-geist" style={{}}>Gas furnace replacement: $3,500–$6,500</li>
</ul>
<p className="font-geist" style={{}}>Every home is different. <a className="font-geist" href="#quote" style={{}}>Request a free in-home assessment</a> for an accurate, no-pressure quote tailored to your space and budget.</p>
</section>
<section className="scroll-mt-24" id="maintenance">
<h2 className="font-geist font-semibold" style={{}}>HVAC Maintenance Schedule</h2>
<p className="font-geist" style={{}}>Regular tune-ups extend equipment life, prevent costly breakdowns, and keep your system running efficiently. We recommend seasonal maintenance—spring for cooling, fall for heating.</p>
<h3 className="font-geist font-semibold" style={{}}>What our tune-up includes</h3>
<ul>
<li className="font-geist" style={{}}>Clean or replace air filters</li>
<li className="font-geist" style={{}}>Inspect and clean condenser/evaporator coils</li>
<li className="font-geist" style={{}}>Check refrigerant levels and look for leaks</li>
<li className="font-geist" style={{}}>Test thermostat calibration and controls</li>
<li className="font-geist" style={{}}>Lubricate motors and inspect belts</li>
<li className="font-geist" style={{}}>Clear condensate drain lines</li>
<li className="font-geist" style={{}}>Measure airflow and temperature differential</li>
<li className="font-geist" style={{}}>Tighten electrical connections</li>
<li className="font-geist" style={{}}>Inspect ductwork for leaks or damage</li>
</ul>
<p className="font-geist" style={{}}> Our annual or bi-annual plans include priority scheduling, discounts on repairs, and extended warranties. <a className="font-geist" href="#quote" style={{}}>Ask about our maintenance memberships</a>.</p>
</section>
<section className="scroll-mt-24" id="permits">
<h2 className="font-geist font-semibold" style={{}}>Permits &amp; Inspections</h2>
<p className="font-geist" style={{}}>All HVAC installations and major repairs in California require permits. We handle the entire process—application, scheduling, and final inspection—so you don't have to deal with city offices or code compliance.</p>
<h3 className="font-geist font-semibold" style={{}}>Why permits matter</h3>
<ul>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Safety:</strong> Ensures work meets electrical, gas, and building codes</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Insurance:</strong> Unpermitted work can void homeowner's insurance or cause claim denials</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Resale value:</strong> Buyers and appraisers verify permits during home sales</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Warranty protection:</strong> Manufacturer warranties often require permitted installation</li>
</ul>
<p className="font-geist" style={{}}>Permit fees vary by city—typically $150–$400 for residential HVAC work. We include permit costs in every installation quote, and we never leave until your system passes inspection.</p>
</section>
<section className="scroll-mt-24" id="financing-inline">
<h2 className="font-geist font-semibold" style={{}}>Financing Options</h2>
<p className="font-geist" style={{}}>Don't let upfront costs delay necessary repairs or upgrades. We partner with leading lenders to offer flexible financing with approved credit:</p>
<ul className="">
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>0% APR for 12–18 months</strong> on qualifying purchases</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Extended terms up to 10 years</strong> for larger projects</li>
<li className="font-geist" style={{}}><strong className="font-geist" style={{}}>Same-day approval</strong> with soft credit check</li>
<li><strong className="font-geist" style={{}}>No prepayment penalties</strong></li>
</ul>
<p className="font-geist" style={{}}>We also accept major credit cards, checks, and cash. <a className="font-geist" href="#quote" style={{}}>Ask about current promotions</a>—we frequently offer rebates and seasonal specials.</p>
</section>
<section className="scroll-mt-24" id="service-areas">
<h2 className="font-geist font-semibold" style={{}}>Service Areas: Ventura County &amp; Sacramento Region</h2>
<p className="font-geist" style={{}}>We proudly serve homes and businesses throughout Ventura County and the greater Sacramento area. Our technicians live locally and understand the unique climate challenges—coastal humidity in Ventura, valley heat in Sacramento.</p>
<h3 className="font-geist font-semibold" style={{}}>Ventura County coverage</h3>
<ul>
<li className="font-geist" style={{}}>Ventura</li>
<li className="font-geist" style={{}}>Camarillo</li>
<li className="font-geist" style={{}}>Oxnard</li>
<li className="font-geist" style={{}}>Thousand Oaks</li>
<li className="font-geist" style={{}}>Simi Valley</li>
<li className="font-geist" style={{}}>Moorpark</li>
<li className="font-geist" style={{}}>Ojai</li>
</ul>
<h3 className="font-geist font-semibold" style={{}}>Sacramento region coverage</h3>
<ul className="">
<li className="font-geist" style={{}}>Sacramento</li>
<li className="font-geist" style={{}}>Elk Grove</li>
<li className="font-geist" style={{}}>Roseville</li>
<li className="font-geist" style={{}}>Folsom</li>
<li className="font-geist" style={{}}>Rocklin</li>
<li className="font-geist" style={{}}>Davis</li>
<li className="font-geist" style={{}}>Citrus Heights</li>
</ul>
<p className="font-geist" style={{}}>Not sure if we service your area? <a className="font-geist" href="tel:18055550134" style={{}}>Give us a call</a>—we're expanding our service territory and may be able to help.</p>
</section>
</article>

<aside className="lg:col-span-3">
<div className="sticky top-24 space-y-4">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-award w-5 h-5 text-slate-900" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm font-semibold text-slate-900 font-geist" style={{}}>Why Choose Us</span>
</div>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist" style={{}}>Licensed, bonded &amp; insured</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist" style={{}}>4.9★ rating from 150+ reviews</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist" style={{}}>Same-day emergency service</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist" style={{}}>Upfront, transparent pricing</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist" style={{}}>100% satisfaction guarantee</span>
</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-star w-5 h-5 text-slate-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-semibold text-slate-900 font-geist" style={{}}>Recent Review</span>
</div>
<div className="flex gap-0.5 mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-slate-700 italic mb-2 font-geist" style={{}}>"Fast, professional, and reasonably priced. They diagnosed the problem in 10 minutes and had my AC running the same day."</p>
<p className="text-xs text-slate-500 font-geist" style={{}}>— Maria T., Camarillo</p>
</div>
</div>
</aside>
</div>
</main>

<section className="bg-slate-50 border-t border-slate-200 py-16" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight text-slate-900 mb-8 font-geist font-semibold" style={{}}>Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 p-5">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium font-geist" style={{}}>
            How long does AC installation take?
            <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-slate-600 text-[15px] font-geist" style={{}}>Most standard replacements take a single day. Complex installs or ductwork modifications may take 1–2 days.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-5">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium font-geist" style={{}}>
            Do you handle permits and inspections?
            <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-slate-600 text-[15px] font-geist" style={{}}>Yes. We pull required city permits and coordinate inspections on your behalf.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-5">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium font-geist" style={{}}>
            What size AC do I need?
            <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-slate-600 text-[15px] font-geist" style={{}}>We perform Manual J load calculations and consider insulation, windows, and sun exposure to right-size your system.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-5">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium font-geist" style={{}}>
            What warranties are available?
            <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-slate-600 text-[15px] font-geist" style={{}}>Manufacturer parts warranties plus our workmanship coverage. We'll register the equipment for you.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-5">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium font-geist" style={{}}>
            What causes my AC to blow warm air?
            <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-slate-600 text-[15px] font-geist" style={{}}>Several issues can cause warm air, including low refrigerant, a dirty air filter, or a compressor problem. Our technicians can quickly diagnose and fix the problem.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-5">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium font-geist" style={{}}>
            How often should I service my HVAC system?
            <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-slate-600 text-[15px] font-geist" style={{}}>Service your HVAC system twice a year—spring for cooling and fall for heating. Regular maintenance helps prevent breakdowns and extends equipment life.</p>
</details>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-16" id="quote">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl tracking-tight mb-4 font-geist font-semibold" style={{}}>Ready to Get Started?</h2>
<p className="text-slate-300 text-lg mb-8 font-geist" style={{}}>Request a free quote or call us today for same-day service.</p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition text-base font-medium font-geist" href="tel:18055550134" style={{}}>
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
          Call (805) 555-0134
        </a>
<a className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-white/20 text-white hover:bg-white/10 transition text-base font-geist" href="#heroQuote" style={{}}>
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
          Request Quote
        </a>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-md bg-slate-900 text-white grid place-items-center text-xs font-semibold font-geist" style={{}}>AWS</div>
<span className="font-semibold text-slate-900 font-geist" style={{}}>AirWorks Solutions</span>
</div>
<p className="text-sm text-slate-600 font-geist" style={{}}>Licensed HVAC contractors serving Ventura County and Sacramento since 2010.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3 font-geist" style={{}}>Services</h3>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>AC Repair</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Heating Repair</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Installation</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Maintenance</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3 font-geist" style={{}}>Company</h3>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>About Us</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Reviews</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-3 font-geist" style={{}}>Contact</h3>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              (805) 555-0134
            </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              info@airworks.example
            </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Camarillo, CA
            </li>
</ul>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-600 font-geist" style={{}}>
        © 2024 AirWorks Solutions. All rights reserved. | <a className="hover:text-slate-900 font-geist" href="#" style={{}}>Privacy Policy</a> | <a className="hover:text-slate-900 font-geist" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</footer>

<button aria-label="Open AI chat assistant" className="fixed hover:bg-slate-800 hover:shadow-xl transition-all flex z-50 text-white bg-slate-900 w-14 h-14 rounded-full right-6 bottom-6 shadow-lg items-center justify-center" id="chatBtn">
<svg className="lucide lucide-message-circle w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>

<div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[32rem] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col z-50 hidden" id="chatWindow">
<div className="flex items-center justify-between p-4 border-b border-slate-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white grid place-items-center">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 font-geist" style={{}}>HVAC Assistant</div>
<div className="text-xs text-slate-500 font-geist" style={{}}>Ask me anything</div>
</div>
</div>
<button aria-label="Close chat" className="w-8 h-8 rounded-md hover:bg-slate-100 inline-flex items-center justify-center text-slate-500" id="chatClose">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4" id="chatMessages">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white grid place-items-center flex-shrink-0">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="flex-1">
<div className="bg-slate-100 rounded-lg p-3 text-sm text-slate-700 font-geist" style={{}}>
            Hi! I'm your HVAC assistant. I can help you with:
            <ul className="mt-2 space-y-1 text-xs">
<li className="font-geist" style={{}}>• System troubleshooting</li>
<li className="font-geist" style={{}}>• Service scheduling</li>
<li className="font-geist" style={{}}>• Cost estimates</li>
<li className="font-geist" style={{}}>• Maintenance tips</li>
</ul>
            What can I help you with today?
          </div>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-200">
<div className="flex gap-2">
<input className="flex-1 h-10 px-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="chatInput" placeholder="Type your question..." type="text"/>
<button aria-label="Send message" className="w-10 h-10 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center justify-center" id="chatSend">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
<p className="text-xs text-slate-500 mt-2 font-geist" style={{}}>Powered by AI • Responses are informational</p>
</div>
</div>


    </>
  );
}
