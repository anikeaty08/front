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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      const products = [
          {
              id: 1, name: 'Red Bali', price: '$24.99',
              desc: 'Deep relaxation and physical comfort. The "nighttime tea" of kratom.',
              match: ['relaxation', 'occasional', 'powder'],
              tags: ['Relaxation', 'Calm'], img: 'moon'
          },
          {
              id: 2, name: 'Green Malay', price: '$26.99',
              desc: 'The gold standard for balance. Sustained energy with a calm mental state.',
              match: ['energy', 'regular', 'powder'],
              tags: ['Focus', 'Flow'], img: 'sun'
          },
          {
              id: 3, name: 'White Horn', price: '$29.99',
              desc: 'Potent energetic profile. Like coffee without the jitters. Morning favorite.',
              match: ['energy', 'daily', 'capsules'],
              tags: ['Energy', 'Drive'], img: 'zap'
          },
          {
              id: 4, name: 'Yellow Vietnam', price: '$23.99',
              desc: 'A rare drying process creates a mood-lifting, moderate experience.',
              match: ['balanced', 'regular', 'powder'],
              tags: ['Mood', 'Balance'], img: 'smile'
          },
          {
              id: 5, name: 'Red Borneo Caps', price: '$32.99',
              desc: 'Premium slow strain in convenient form. Perfect for post-work unwind.',
              match: ['relaxation', 'daily', 'capsules'],
              tags: ['Relax', 'Easy'], img: 'moon'
          },
          {
              id: 6, name: 'Dragon Blend', price: '$27.99',
              desc: 'Full spectrum blend of Red, White, and Green for total coverage.',
              match: ['balanced', 'regular', 'either'],
              tags: ['Hybrid', 'Full'], img: 'layers'
          }
      ];

      // QUIZ LOGIC
      let answers = { interest: null, frequency: null, format: null };
      let stepCount = 0;
      const popupContainer = document.getElementById('popup-container');
      const resultsSection = document.getElementById('results-section');
      const productGrid = document.getElementById('product-grid');
      const stepsDisplay = document.getElementById('step-count');

      const questions = [
          {
              id: 'q1', text: 'What is your primary goal?',
              options: [
                  { label: 'Unwind & Relax', value: 'relaxation', icon: 'coffee' },
                  { label: 'Focus & Energy', value: 'energy', icon: 'zap' },
                  { label: 'Balance Mood', value: 'balanced', icon: 'scale' }
              ]
          },
          {
              id: 'q2', text: 'Expected usage frequency?',
              options: [
                  { label: 'Occasional Reset', value: 'occasional', icon: 'calendar' },
                  { label: 'Regular Support', value: 'regular', icon: 'calendar-days' },
                  { label: 'Daily Routine', value: 'daily', icon: 'repeat' }
              ]
          },
          {
              id: 'q3', text: 'Preferred format?',
              options: [
                  { label: 'Raw Powder', value: 'powder', icon: 'feather' },
                  { label: 'Capsules', value: 'capsules', icon: 'pill' },
                  { label: 'Surprise Me', value: 'either', icon: 'sparkles' }
              ]
          }
      ];

      let activePopupIndex = 0;

      function createPopup(q, index) {
          const wrapper = document.createElement('div');
          wrapper.id = q.id;
          wrapper.className = "fixed inset-0 z-[100] flex items-center justify-center w-full h-full pointer-events-auto popup-enter";

          let optionsHtml = '';
          q.options.forEach(opt => {
              optionsHtml += `
                  <button onclick="handleAnswer('${q.id}', '${opt.value}', ${index})" class="w-full text-left px-4 py-3.5 rounded-xl bg-[#F5F5F0] hover:bg-[#1C3A13] hover:text-white text-sm text-[#1C3A13] font-medium transition-all duration-200 flex items-center gap-3 group border border-transparent hover:border-[#E9F0CA]/20">
                      <i data-lucide="${opt.icon}" class="w-4 h-4 text-[#6B8E23] group-hover:text-[#E9F0CA] transition-colors"></i>
                      <span>${opt.label}</span>
                  </button>
              `;
          });

          wrapper.innerHTML = `
              <div class="absolute inset-0 bg-black/50 backdrop-blur-2xl transition-opacity duration-500" onclick="dismissPopup('${q.id}')"></div>
              <div class="relative w-full sm:w-[360px] mx-4 bg-white/95 border-[#E9F0CA] border rounded-3xl p-6 shadow-2xl overflow-hidden">
                  <div class="flex justify-between items-center mb-5">
                      <div class="flex items-center gap-2">
                          <span class="flex items-center justify-center w-5 h-5 rounded-full bg-[#1C3A13] text-[#E9F0CA] text-[10px] font-semibold">${index + 1}</span>
                          <span class="text-[10px] uppercase tracking-widest text-[#5A6B57] font-semibold">Question</span>
                      </div>
                      <button onclick="dismissPopup('${q.id}')" class="text-gray-400 hover:text-[#1C3A13] transition-colors">
                          <i data-lucide="x" class="w-4 h-4"></i>
                      </button>
                  </div>
                  <h4 class="text-[#1C3A13] font-semibold text-xl leading-tight mb-5 tracking-tight">${q.text}</h4>
                  <div class="space-y-2">${optionsHtml}</div>
              </div>
          `;
          return wrapper;
      }

      function dismissPopup(id) {
          const el = document.getElementById(id);
          if(el) {
               el.style.transition = 'opacity 0.4s ease';
               el.style.opacity = '0';
               setTimeout(() => el.remove(), 400);
          }
      }

      function handleAnswer(qId, value, index) {
          if(index === 0) answers.interest = value;
          if(index === 1) answers.frequency = value;
          if(index === 2) answers.format = value;

          stepCount = index + 1;
          stepsDisplay.innerText = stepCount;
          dismissPopup(qId);

          activePopupIndex++;

          if (activePopupIndex === 3) {
              setTimeout(showResults, 800);
          }
      }

      function showResults() {
          resultsSection.classList.remove('hidden');
          setTimeout(() => {
               resultsSection.classList.remove('opacity-0');
               resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);

          const scored = products.map(p => {
              let score = 0;
              if (p.match[0] === answers.interest) score += 2;
              if (p.match[1] === answers.frequency) score += 1;
              if (p.match[2] === 'either' || answers.format === 'either' || p.match[2] === answers.format) score += 1;
              return { ...p, score };
          }).sort((a, b) => b.score - a.score);

          const top3 = scored.slice(0, 3);

          productGrid.innerHTML = top3.map((p, i) => `
              <div class="bg-[#F5F5F0]/50 border border-[#E9F0CA] p-8 rounded-[2rem] flex flex-col text-left group hover:bg-white hover:shadow-xl hover:border-[#6B8E23]/30 transition-all duration-500 animate-slide-up min-w-[85vw] sm:min-w-[360px] md:min-w-0 snap-center" style="animation-delay: ${i * 150}ms">
                  <div class="flex items-start justify-between mb-6">
                      <div class="w-14 h-14 rounded-full bg-white border border-[#E9F0CA] flex items-center justify-center text-[#2D5016] group-hover:scale-110 transition-transform duration-300">
                          <i data-lucide="${p.img}" class="w-6 h-6"></i>
                      </div>
                      <span class="text-lg font-semibold text-[#1C3A13] bg-white px-3 py-1 rounded-full border border-[#E9F0CA]">${p.price}</span>
                  </div>
                  <h3 class="text-2xl font-semibold text-[#1C3A13] mb-3 tracking-tight">${p.name}</h3>
                  <div class="flex flex-wrap gap-2 mb-6">
                      ${p.tags.map(t => `<span class="text-[10px] uppercase tracking-wider bg-white border border-[#E9F0CA] px-2 py-1 rounded-md text-[#5A6B57] font-semibold">${t}</span>`).join('')}
                  </div>
                  <p class="text-sm text-[#5A6B57] leading-relaxed mb-6 flex-1 border-t border-[#1C3A13]/5 pt-4">
                      ${p.desc}
                  </p>
                  <div class="grid grid-cols-2 gap-4 mb-6 mt-auto">
                    <div>
                        <label class="block text-[9px] uppercase tracking-wider text-[#1C3A13]/40 font-bold mb-2">Form</label>
                        <div class="relative">
                            <select class="w-full appearance-none bg-white border border-[#E9F0CA] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#1C3A13] focus:outline-none focus:border-[#6B8E23] transition-colors cursor-pointer">
                                <option>Powder</option>
                                <option>Capsules</option>
                            </select>
                            <i data-lucide="chevron-down" class="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#1C3A13]/40 pointer-events-none"></i>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[9px] uppercase tracking-wider text-[#1C3A13]/40 font-bold mb-2">Size</label>
                        <div class="relative">
                            <select class="w-full appearance-none bg-white border border-[#E9F0CA] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#1C3A13] focus:outline-none focus:border-[#6B8E23] transition-colors cursor-pointer">
                                <option>100g / 60ct</option>
                                <option>250g / 150ct</option>
                                <option>500g / 300ct</option>
                            </select>
                            <i data-lucide="chevron-down" class="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#1C3A13]/40 pointer-events-none"></i>
                        </div>
                    </div>
                  </div>
                  <button onclick="addToCart(${p.id})" class="w-full py-4 rounded-xl bg-[#1C3A13] text-white font-semibold text-sm hover:bg-[#2D5016] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#1C3A13]/20 active:scale-95 duration-200">
                      Add to Protocol <i data-lucide="plus" class="w-4 h-4"></i>
                  </button>
              </div>
          `).join('');
          lucide.createIcons();
      }

      // --- CART LOGIC START ---
      let cart = [];
      const cartEl = document.getElementById('cart-notification');
      const cartContentEl = document.getElementById('cart-content');

      function addToCart(id) {
          const product = products.find(p => p.id === id);
          if (!product) return;

          // Check if already in cart
          if(!cart.some(p => p.id === id)) {
            cart.push(product);
          }

          renderCart();

          // Animate Entrance
          cartEl.classList.remove('translate-y-[200%]');
          cartEl.classList.add('translate-y-0');

          // Add shake effect for visual feedback on multiple adds
          cartEl.classList.remove('cart-shake');
          void cartEl.offsetWidth; // trigger reflow
          cartEl.classList.add('cart-shake');
      }

      function renderCart() {
        if (cart.length === 0) return;

        let iconHtml = '';
        let textHtml = '';

        if (cart.length === 1) {
            // Single Item View
            const p = cart[0];
            iconHtml = `
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1C3A13] to-[#2D5016] flex items-center justify-center text-[#E9F0CA] shadow-inner border border-[#E9F0CA]/20">
                 <i data-lucide="${p.img}" class="w-5 h-5"></i>
              </div>
            `;
            textHtml = `
              <div class="flex flex-col">
                  <span class="text-sm font-semibold text-[#1C3A13] leading-tight">${p.name}<span class="align-top text-[9px] text-[#1C3A13]/60 ml-0.5">®</span></span>
                  <span class="text-[11px] text-[#5A6B57] font-medium">Daily Synbiotic</span>
              </div>
            `;
        } else {
            // Multiple Items View
            iconHtml = `
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1C3A13] to-[#2D5016] flex items-center justify-center text-[#E9F0CA] shadow-inner border border-[#E9F0CA]/20 relative">
                 <i data-lucide="layers" class="w-5 h-5"></i>
                 <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#E9F0CA] rounded-full flex items-center justify-center text-[9px] font-bold text-[#1C3A13] border border-white">
                   ${cart.length}
                 </div>
              </div>
            `;
            textHtml = `
              <div class="flex flex-col">
                  <span class="text-sm font-semibold text-[#1C3A13] leading-tight">Your Custom Protocol</span>
                  <span class="text-[11px] text-[#5A6B57] font-medium">${cart.length} Botanicals Selected</span>
              </div>
            `;
        }

        cartContentEl.innerHTML = iconHtml + textHtml;
        lucide.createIcons();
      }
      // --- CART LOGIC END ---

      window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = scrollTop / docHeight;

          document.getElementById('scroll-progress').style.width = `${scrollPercent * 100}%`;

          // Trigger logic: 0.20, 0.45, 0.70 to align with sections
          if (activePopupIndex < 3) {
              const triggers = [0.20, 0.45, 0.70];
              if (scrollPercent > triggers[activePopupIndex] && !document.getElementById(questions[activePopupIndex].id)) {
                  const el = createPopup(questions[activePopupIndex], activePopupIndex);
                  popupContainer.appendChild(el);
                  lucide.createIcons();
              }
          }
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F5F5F0]/80 backdrop-blur-xl border-b border-[#1C3A13]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#1C3A13] flex items-center justify-center text-[#E9F0CA]">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-[#1C3A13]">
            Daily Kratom
          </span>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex flex-col items-end">
<span className="text-[10px] uppercase tracking-widest text-[#1C3A13]/60 font-semibold">
              Discovery Progress
            </span>
<div className="flex items-center gap-1">
<span className="block w-1.5 h-1.5 rounded-full bg-[#1C3A13]"></span>
<span className="text-xs font-semibold">
<span id="step-count">0</span>
                /3
              </span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1C3A13]/10">
<div className="h-full bg-[#1C3A13] w-0 transition-all duration-150 ease-out" id="scroll-progress" style={{width: '0%'}}></div>
</div>
</nav>
<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-32">

<section className="mb-6 animate-float-up">
<div className="relative w-full h-[650px] sm:h-[750px] seed-rounded overflow-hidden group shadow-2xl shadow-[#1C3A13]/10">

<img alt="Woman in nature" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

<div className="flex flex-col sm:p-12 lg:p-16 z-20 bg-[#1C3A13]/95 backdrop-blur-sm pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between">

<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E9F0CA]/10 backdrop-blur-xl border border-[#E9F0CA]/20 text-[#E9F0CA] text-[11px] font-medium uppercase tracking-wider shadow-sm transition-colors hover:bg-[#E9F0CA]/20 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9F0CA] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#E9F0CA]"></span>
</span>
                  Education Hub
                </div>
</div>
<button className="group w-10 h-10 flex items-center justify-center rounded-full bg-[#1C3A13]/40 backdrop-blur-xl border border-[#E9F0CA]/20 text-[#E9F0CA] hover:bg-[#1C3A13]/60 hover:scale-105 transition-all duration-300">
<svg className="lucide lucide-menu opacity-80 group-hover:opacity-100" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="flex flex-col gap-12 sm:gap-16 max-w-7xl w-full mx-auto sm:mx-0">

<div className="max-w-4xl space-y-6">
<h1 className="sm:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-[#F2F4E6] tracking-tight drop-shadow-sm">
                  Feel the difference of a
                  <span className="text-[#E9F0CA]">truly balanced mind.</span>
</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">

<div className="group relative overflow-hidden bg-[#1C3A13]/80 backdrop-blur-xl border border-[#E9F0CA]/10 rounded-2xl p-6 hover:bg-[#1C3A13]/90 hover:border-[#E9F0CA]/30 transition-all duration-300 cursor-pointer shadow-lg shadow-black/10">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="p-2.5 rounded-lg bg-[#E9F0CA]/10 border border-[#E9F0CA]/10 text-[#E9F0CA]">
<svg className="lucide lucide-dna" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m10 16 1.5 1.5"></path>
<path d="m14 8-1.5-1.5"></path>
<path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
<path d="m16.5 10.5 1 1"></path>
<path d="m17 6-2.891-2.891"></path>
<path d="M2 15c6.667-6 13.333 0 20-6"></path>
<path d="m20 9 .891.891"></path>
<path d="M3.109 14.109 4 15"></path>
<path d="m6.5 12.5 1 1"></path>
<path d="m7 18 2.891 2.891"></path>
<path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
</svg>
</div>
<svg className="text-[#E9F0CA]/50 group-hover:text-[#E9F0CA] group-hover:translate-x-0.5 transition-all duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#F2F4E6] mb-2 tracking-tight">
                        Diverse Alkaloid Profiles
                      </h3>
<p className="text-sm text-[#F2F4E6]/70 leading-relaxed font-light">
                        40+ active compounds support energy modulation and
                        physical comfort naturally.
                      </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#1C3A13]/80 backdrop-blur-xl border border-[#E9F0CA]/10 rounded-2xl p-6 hover:bg-[#1C3A13]/90 hover:border-[#E9F0CA]/30 transition-all duration-300 cursor-pointer shadow-lg shadow-black/10">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="p-2.5 rounded-lg bg-[#E9F0CA]/10 border border-[#E9F0CA]/10 text-[#E9F0CA]">
<svg className="lucide lucide-microscope" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path d="M9 14h2"></path>
<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
</div>
<svg className="text-[#E9F0CA]/50 group-hover:text-[#E9F0CA] group-hover:translate-x-0.5 transition-all duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-[#F2F4E6] mb-2 tracking-tight">
                        Lab-Verified Purity
                      </h3>
<p className="text-sm text-[#F2F4E6]/70 leading-relaxed font-light">
                        Triple-tested for contaminants. Sourced directly from
                        sustainable forests.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-6">
<div className="seed-rounded bg-[#1C3A13] text-[#F2F4E6] p-8 sm:p-16 relative overflow-hidden shadow-2xl shadow-[#1C3A13]/20">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2D5016] to-transparent opacity-30 blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-xl">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] mb-8">
                Unlike synthetic energy,

                <span className="text-[#8FA876]">Kratom works with your body.</span>
</h2>
<p className="text-[#F2F4E6]/70 text-lg leading-relaxed mb-12 font-light">
                Processed using traditional drying methods to preserve the
                integrity of the leaf. Our micronized powder ensures rapid
                bioavailability without the crash.
              </p>
<div className="space-y-10">
<div className="flex gap-6 group">
<div className="w-[1px] bg-[#F2F4E6]/20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E9F0CA]"></div>
</div>
<div className="">
<h4 className="text-xl font-semibold text-white mb-2">
                      The Leaf Matrix
                    </h4>
<p className="text-sm text-[#F2F4E6]/60 leading-relaxed max-w-sm">
                      Whole-plant synergy. The interaction between Mitragynine
                      and antagonists creates a balanced effect profile.
                    </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-[1px] bg-[#F2F4E6]/20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#6B8E23]"></div>
</div>
<div className="">
<h4 className="text-xl font-semibold text-white mb-2">
                      Vein Color Significance
                    </h4>
<p className="text-sm text-[#F2F4E6]/60 leading-relaxed max-w-sm">
                      Drying techniques alter the alkaloid ratios. Indoor drying
                      preserves stimulating alkaloids (White/Green), while
                      sunlight oxidizes them for relaxation (Red).
                    </p>
</div>
</div>
</div>
<button className="mt-12 group flex items-center gap-2 text-[#E9F0CA] font-medium text-sm hover:text-white transition-colors">
                Explore the Science
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center">

<div className="relative flex flex-col justify-between w-full sm:w-80 h-auto min-h-[420px] bg-[#1C3A13]/40 backdrop-blur-xl border border-[#F2F4E6]/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden group hover:bg-[#1C3A13]/50 transition-colors duration-500">

<div className="absolute -top-20 -right-20 w-60 h-60 bg-[#6B8E23]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#6B8E23]/30 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9F0CA]/10 border border-[#E9F0CA]/10 text-[#E9F0CA] text-[10px] uppercase tracking-widest font-semibold mb-6">
<svg className="lucide lucide-flask-conical" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
<path d="M8.5 2h7"></path>
<path d="M7 16h10"></path>
</svg>
                    Lab Analysis
                  </div>
<h3 className="text-3xl font-serif text-[#F2F4E6] mb-3 tracking-tight">
                    Alkaloid Profile
                  </h3>
<p className="text-sm text-[#F2F4E6]/70 font-light leading-relaxed">
                    A complex symphony of 40+ active compounds working together
                    in natural balance.
                  </p>
</div>
<div className="relative z-10 space-y-6 mt-8 flex-1">

<div className="group/item cursor-default">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#E9F0CA]"></div>
<span className="text-xs font-medium text-[#E9F0CA]">
                          Mitragynine
                        </span>
</div>
<span className="text-xs font-bold text-[#F2F4E6]">66%</span>
</div>
<div className="h-1.5 w-full bg-[#F2F4E6]/10 rounded-full overflow-hidden">
<div className="h-full bg-[#E9F0CA] w-[66%] rounded-full shadow-[0_0_10px_rgba(233,240,202,0.3)]"></div>
</div>
<p className="mt-1.5 text-[10px] text-[#F2F4E6]/40 leading-snug">
                      Primary driver of energy &amp; focus.
                    </p>
</div>

<div className="group/item cursor-default">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#E9F0CA]/60"></div>
<span className="text-xs font-medium text-[#E9F0CA]/80">
                          Paynantheine
                        </span>
</div>
<span className="text-xs font-bold text-[#F2F4E6]/80">
                        9%
                      </span>
</div>
<div className="h-1.5 w-full bg-[#F2F4E6]/10 rounded-full overflow-hidden">
<div className="h-full bg-[#E9F0CA]/60 w-[9%] rounded-full"></div>
</div>
</div>

<div className="group/item cursor-default">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#E9F0CA]/40"></div>
<span className="text-xs font-medium text-[#E9F0CA]/60">
                          Speciogynine
                        </span>
</div>
<span className="text-xs font-bold text-[#F2F4E6]/60">
                        7%
                      </span>
</div>
<div className="h-1.5 w-full bg-[#F2F4E6]/10 rounded-full overflow-hidden">
<div className="h-full bg-[#E9F0CA]/40 w-[7%] rounded-full"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-8 pt-6 border-t border-[#F2F4E6]/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></div>
<span className="text-[10px] text-[#F2F4E6]/60 font-medium uppercase tracking-wider">
                        Verified Pure
                      </span>
</div>
<svg className="text-[#E9F0CA]/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5">
<h2 className="text-4xl sm:text-5xl font-semibold text-[#1C3A13] mb-8 tracking-tight leading-tight">
              Benefits that
              <br/>
<span className="text-[#6B8E23]">unfold over time</span>
              .
            </h2>
<p className="text-[#5A6B57] text-lg leading-relaxed mb-8">
              Kratom isn't just about the immediate feeling. It's about finding
              a sustainable rhythm for your wellbeing. Results can be felt in as
              little as 20 minutes.
            </p>

<div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden group shadow-xl">
<img alt="Person drinking tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="glass-panel p-4 rounded-2xl flex items-center gap-4">
<button className="w-12 h-12 rounded-full bg-[#1C3A13] flex items-center justify-center text-white hover:scale-110 transition-transform">
<svg className="lucide lucide-play w-5 h-5 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</button>
<div className="">
<p className="text-xs uppercase tracking-wider text-[#5A6B57] font-semibold mb-1">
                      Watch Guide
                    </p>
<p className="text-sm text-[#1C3A13] font-semibold">
                      Finding your sweet spot
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 pt-4">
<div className="relative pl-4 sm:pl-8 border-l border-[#1C3A13]/10 ml-4 space-y-16">

<div className="relative group">
<div className="absolute -left-[21px] sm:-left-[37px] top-0 w-3 h-3 rounded-full bg-[#1C3A13] ring-4 ring-[#F5F5F0]"></div>
<div className="inline-block px-3 py-1 rounded-full bg-[#1C3A13] text-white text-[11px] uppercase tracking-wider mb-4 font-semibold">
                  20 Minutes
                </div>
<h3 className="text-2xl font-semibold text-[#1C3A13] mb-3 group-hover:text-[#6B8E23] transition-colors">
                  The Onset
                </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-[#5A6B57]">
<svg className="lucide lucide-check w-5 h-5 text-[#6B8E23] shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Gentle uplift in mood and outlook.</span>
</li>
<li className="flex items-start gap-3 text-[#5A6B57]">
<svg className="lucide lucide-check w-5 h-5 text-[#6B8E23] shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">
                      Subtle sharpening of focus and clarity.
                    </span>
</li>
</ul>
</div>

<div className="relative group">
<div className="absolute -left-[21px] sm:-left-[37px] top-0 w-3 h-3 rounded-full bg-[#6B8E23] ring-4 ring-[#F5F5F0]"></div>
<div className="inline-block px-3 py-1 rounded-full bg-[#6B8E23] text-white text-[11px] uppercase tracking-wider mb-4 font-semibold">
                  45-90 Minutes
                </div>
<h3 className="text-2xl font-semibold text-[#1C3A13] mb-3 group-hover:text-[#6B8E23] transition-colors">
                  Peak Aroma
                </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-[#5A6B57]">
<svg className="lucide lucide-check w-5 h-5 text-[#6B8E23] shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">
                      Full resonance of strain effects (Energy vs Relaxation).
                    </span>
</li>
<li className="flex items-start gap-3 text-[#5A6B57]">
<svg className="lucide lucide-check w-5 h-5 text-[#6B8E23] shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">
                      Noticeable reduction in physical tension.
                    </span>
</li>
</ul>
</div>

<div className="relative group">
<div className="absolute -left-[21px] sm:-left-[37px] top-0 w-3 h-3 rounded-full bg-[#8FA876] ring-4 ring-[#F5F5F0]"></div>
<div className="inline-block px-3 py-1 rounded-full bg-[#8FA876] text-white text-[11px] uppercase tracking-wider mb-4 font-semibold">
                  Daily Routine
                </div>
<h3 className="text-2xl font-semibold text-[#1C3A13] mb-3 group-hover:text-[#6B8E23] transition-colors">
                  Long-term Balance
                </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-[#5A6B57]">
<svg className="lucide lucide-check w-5 h-5 text-[#6B8E23] shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">
                      Supports consistent energy levels throughout the day.
                    </span>
</li>
<li className="flex items-start gap-3 text-[#5A6B57]">
<svg className="lucide lucide-check w-5 h-5 text-[#6B8E23] shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Promotes a sense of calm and well-being.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<div className="h-[30vh] flex flex-col items-center justify-center opacity-40 mb-12">
<p className="font-serif italic text-2xl text-[#1C3A13]">
          Find your match below
        </p>
<div className="w-[1px] h-16 bg-[#1C3A13] mt-4"></div>
<svg className="lucide lucide-arrow-down w-6 h-6 text-[#1C3A13] mt-4 animate-bounce" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>

<section className="w-full seed-rounded bg-white border border-[#E9F0CA] p-8 sm:p-12 opacity-0 hidden transition-all duration-1000 shadow-xl" id="results-section">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F5F0] text-[#6B8E23] tracking-wide text-[10px] uppercase mb-4 border border-[#E9F0CA] font-semibold">
            Curated For You
          </span>
<h2 className="text-3xl sm:text-5xl font-semibold text-[#1C3A13] mb-6 tracking-tight">
            Your Personalized Protocol
          </h2>
<p className="text-[#5A6B57] max-w-xl mx-auto text-lg">
            Based on your needs, we've selected these botanicals to align with
            your lifestyle.
          </p>
</div>
<div className="flex flex-nowrap md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 snap-x snap-mandatory md:snap-none no-scrollbar" id="product-grid">

</div>
<div className="mt-20 text-center border-t border-[#F5F5F0] pt-8">
<p className="text-[10px] text-[#5A6B57]/60 max-w-2xl mx-auto leading-normal">
            *These statements have not been evaluated by the FDA. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
            Sold as a botanical specimen.
          </p>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full sm:w-auto sm:right-8 sm:bottom-8 sm:left-auto flex flex-col items-center sm:items-end gap-4 px-4 pb-8 sm:p-0 pointer-events-none z-[100]" id="popup-container"></div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] translate-y-[200%] transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)" id="cart-notification">
<div className="glass-panel bg-white/95 backdrop-blur-xl border border-white/20 p-2 pr-2 rounded-full shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] flex items-center gap-6 sm:gap-12 min-w-[320px] justify-between group">

<div className="flex items-center gap-4 pl-1" id="cart-content">

</div>
<button className="relative overflow-hidden bg-[#1C3A13] text-[#E9F0CA] px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#2D5016] transition-all duration-300 hover:shadow-lg hover:shadow-[#1C3A13]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap">
<span className="relative z-10">Start Now</span>
</button>
</div>
</div>


    </>
  );
}
