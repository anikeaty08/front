import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            let currentResSlide = 0;
            function moveResSlider(dir) {
              const track = document.getElementById('transform-track');
              if(!track) return;
              const items = track.children;
              if(items.length === 0) return;

              const total = items.length;
              let visible = 3;
              if(window.innerWidth < 640) visible = 1;
              else if(window.innerWidth < 768) visible = 2;

              const max = total - visible;
              currentResSlide += dir;
              if(currentResSlide < 0) currentResSlide = 0;
              if(currentResSlide > max) currentResSlide = max;

              const moveAmount = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : items[0].getBoundingClientRect().width;

              track.style.transform = 'translateX(-' + (currentResSlide * moveAmount) + 'px)';
            }
            window.addEventListener('resize', () => {
              setTimeout(() => moveResSlider(0), 100);
            });
          


      // --- Background Slider & Rotating Headlines ---
      const bgSlides = document.querySelectorAll('.bg-slide');
      const heroTitle = document.getElementById('hero-title');

      const headlines = [
          "Redefining Skin Quality Through\n<span class='text-orange-500 block mt-2'>Regenerative Precision</span>",
          "Redefining Hair Quality Through\n<span class='text-orange-500 block mt-2'>Regenerative Precision</span>",
          "We are\n<span class='text-orange-500 block mt-2'>Elyara</span>"
      ];

      let currentBgIndex = 0;
      function nextBg() {
          if (!heroTitle) return;
          heroTitle.style.opacity = 0;

          setTimeout(() => {
              if (bgSlides[currentBgIndex]) bgSlides[currentBgIndex].classList.remove('active');
              currentBgIndex = (currentBgIndex + 1) % bgSlides.length;
              if (bgSlides[currentBgIndex]) bgSlides[currentBgIndex].classList.add('active');

              heroTitle.innerHTML = headlines[currentBgIndex];
              heroTitle.style.opacity = 1;
          }, 500);
      }
      setInterval(nextBg, 5000);

      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if(!menu) return;
        if(menu.classList.contains('opacity-0')) {
          menu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
          menu.classList.add('opacity-100', 'scale-100');
        } else {
          menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
          menu.classList.remove('opacity-100', 'scale-100');
        }
      }

      // --- Category Tab Logic ---
      function selectCategory(category) {
          const dermalTab = document.getElementById('tab-dermal');
          const hairTab = document.getElementById('tab-hair');
          const dermalContent = document.getElementById('content-dermal');
          const hairContent = document.getElementById('content-hair');
          const stickyDermal = document.getElementById('sticky-btn-dermal');
          const stickyHair = document.getElementById('sticky-btn-hair');

          const activeTabClass = "flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 bg-zinc-800 text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-zinc-700 w-full sm:w-auto";
          const inactiveTabClass = "flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 text-zinc-500 hover:text-zinc-300 border border-transparent w-full sm:w-auto";

          const setStickyState = (btn, isActive) => {
              if(!btn) return;
              const div = btn.querySelector('div');
              const icon = btn.querySelector('iconify-icon');
              const span = btn.querySelector('span');
              if(isActive) {
                  btn.className = "pointer-events-auto group flex items-center gap-3 px-6 py-3 bg-orange-500 backdrop-blur-md border border-orange-500 transition-all duration-300 rounded-full shadow-2xl hover:-translate-y-1";
                  div.className = "flex items-center justify-center w-8 h-8 rounded-full bg-white border border-white/20 transition-colors";
                  if(icon) icon.setAttribute('class', "text-orange-500 transition-colors");
                  span.className = "text-xs font-semibold tracking-widest uppercase text-white transition-colors";
              } else {
                  btn.className = "pointer-events-auto group flex items-center gap-3 px-6 py-3 bg-zinc-950/90 backdrop-blur-md border border-white/10 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 rounded-full shadow-2xl hover:-translate-y-1";
                  div.className = "flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/30 transition-colors";
                  if(icon) icon.setAttribute('class', "text-zinc-500 group-hover:text-orange-500 transition-colors");
                  span.className = "text-xs font-semibold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors";
              }
          };

          if (category === 'hair') {
              if(hairTab) hairTab.className = activeTabClass;
              if(dermalTab) dermalTab.className = inactiveTabClass;
              if(hairContent) hairContent.classList.add('active');
              if(dermalContent) dermalContent.classList.remove('active');
              setStickyState(stickyHair, true);
              setStickyState(stickyDermal, false);
          } else {
              if(dermalTab) dermalTab.className = activeTabClass;
              if(hairTab) hairTab.className = inactiveTabClass;
              if(dermalContent) dermalContent.classList.add('active');
              if(hairContent) hairContent.classList.remove('active');
              setStickyState(stickyDermal, true);
              setStickyState(stickyHair, false);
          }
      }

      function scrollToSection(id) {
          const element = document.getElementById(id);
          if(element) element.scrollIntoView({ behavior: 'smooth' });
      }

      // --- Sticky Nav Logic ---
      const stickyNav = document.getElementById('sticky-nav');
      const physicianSection = document.getElementById('physician-section');
      function handleScroll() {
        if (!stickyNav || !physicianSection) return;
        const rect = physicianSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          stickyNav.classList.remove('opacity-0', 'translate-y-20');
        } else {
          stickyNav.classList.add('opacity-0', 'translate-y-20');
        }
      }
      window.addEventListener('scroll', handleScroll);
      handleScroll();

      // --- FAQ Logic ---
      function toggleFaq(button) {
          const item = button.parentElement;
          const isActive = item.classList.contains('active');

          document.querySelectorAll('.faq-item').forEach(el => {
              el.classList.remove('active');
              const icon = el.querySelector('iconify-icon');
              if(icon) icon.setAttribute('class', "text-zinc-500 group-hover:text-orange-500");
          });

          if (!isActive) {
              item.classList.add('active');
          }
      }

      // --- Before/After Slider Logic ---
      const patients = [
        {
          name: "Case 1: Asma",
          tags: ["Elyara Plus", "Nasolabial Folds"],
          before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        },
        {
          name: "Case 2: Clara",
          tags: ["Hair Complex", "Hair Density"],
          before: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          after: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        },
        {
          name: "Case 3: Sophia",
          tags: ["Elyara Ultra", "Jawline Definition"],
          before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        },
        {
          name: "Case 4: Emma",
          tags: ["Elyara Plus", "Skin Hydration"],
          before: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          after: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        }
      ];

      let currentPatientIdx = 0;

      function updateSlider(val) {
        const beforeImg = document.getElementById('slide-before');
        const handle = document.getElementById('slide-handle');
        if(beforeImg) beforeImg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
        if(handle) handle.style.left = `${val}%`;
      }

      function changePatient(dir) {
        currentPatientIdx += dir;
        if(currentPatientIdx < 0) currentPatientIdx = patients.length - 1;
        if(currentPatientIdx >= patients.length) currentPatientIdx = 0;

        const p = patients[currentPatientIdx];
        const carousel = document.getElementById('comparison-carousel');
        if(!carousel) return;

        carousel.style.opacity = '0';

        setTimeout(() => {
            const b = document.getElementById('slide-before');
            const a = document.getElementById('slide-after');
            const n = document.getElementById('patient-name');
            if(b) b.src = p.before;
            if(a) a.src = p.after;
            if(n) n.innerText = p.name;

            const tagsContainer = document.getElementById('patient-tags');
            if(tagsContainer) {
              tagsContainer.innerHTML = p.tags.map(t => `<span class="inline-block px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">${t}</span>`).join('');
            }

            const sliderInput = document.getElementById('slide-input');
            if(sliderInput) {
                sliderInput.value = 50;
                updateSlider(50);
            }

            carousel.style.opacity = '1';
        }, 300);
      }
    


      function updateCardSlider(e) {
        const val = e.target.value;
        const container = e.target.closest('.comparison-slider');
        if (!container) return;
        const beforeImg = container.querySelector('.slider-before');
        const handle = container.querySelector('.slider-handle');
        if(beforeImg) beforeImg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
        if(handle) handle.style.left = `${val}%`;
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="text-xl font-normal text-white tracking-tight">
            ELYARA
          </span>
</div>
<div className="hidden md:flex gap-10 text-xs font-normal uppercase tracking-wider text-zinc-500">
<a className="hover:text-orange-500 transition-colors" href="#products">
            Products
          </a>
<a className="hover:text-orange-500 transition-colors" href="#science">
            Science
          </a>
<a className="hover:text-orange-500 transition-colors" href="#clinical">
            Clinical
          </a>
<a className="hover:text-orange-500 transition-colors" href="#results">
            Results
          </a>
<a className="hover:text-orange-500 transition-colors" href="#contact">
            Contact
          </a>
</div>
<div className="flex gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#portal">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="16"></iconify-icon>
            Provider Portal
          </a>
<button aria-label="Toggle Menu" className="md:hidden flex items-center justify-center w-10 h-10 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="absolute top-20 right-6 w-64 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-[60] transition-all duration-200 opacity-0 scale-95 pointer-events-none origin-top-right md:hidden mt-2 transform" id="mobile-menu">
<a className="block px-4 py-3 text-sm font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#products" onclick="toggleMobileMenu()">
          Products
        </a>
<a className="block px-4 py-3 text-sm font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#science" onclick="toggleMobileMenu()">
          Science
        </a>
<a className="block px-4 py-3 text-sm font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#clinical" onclick="toggleMobileMenu()">
          Clinical
        </a>
<a className="block px-4 py-3 text-sm font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#results" onclick="toggleMobileMenu()">
          Results
        </a>
<a className="block px-4 py-3 text-sm font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#contact" onclick="toggleMobileMenu()">
          Contact
        </a>
<div className="h-px bg-zinc-800 my-1 mx-2"></div>
<a className="flex items-center gap-2 px-4 py-3 text-xs font-normal text-zinc-500 uppercase tracking-wider hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#portal" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="14"></iconify-icon>
          Provider Portal
        </a>
</div>
</nav>

<section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">

<div className="absolute inset-0 z-0 after:absolute after:inset-0 after:bg-black/50" id="hero-bg-slider">

<div className="bg-slide active bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fefa6477-9de5-4ccc-bf52-4fd0b38e42ca_3840w.jpg)]"></div>

<div className="bg-slide bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/873448ac-bcfa-4514-8b9d-783660f6e3c0_3840w.jpg)]"></div>

<div className="bg-slide bg-center bg-cover bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbeea8c2-0c42-4a5e-a721-3b21fd2e2769_3840w.jpg)]"></div>
</div>

<div className="w-full max-w-7xl z-20 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl">
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] [text-shadow:0_4px_24px_rgba(0,0,0,0.8)] md:mb-12 min-h-[140px] md:min-h-[160px] text-4xl font-light text-white tracking-tighter mb-6" id="hero-title">
            Redefining Skin Quality Through
            <span className="block text-orange-500 mt-2">
              Regenerative Precision
            </span>
</h1>
<div className="flex flex-wrap gap-4">
<button className="hover:bg-orange-500/80 transition-all flex gap-2 text-sm font-normal text-white bg-orange-500 rounded-full px-6 py-3 md:px-8 md:py-4 items-center" onclick="scrollToSection('science')">
              Explore the Science
              <iconify-icon className="" icon="lucide:atom" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 md:px-8 md:py-4 glass-card text-white rounded-full text-sm font-normal hover:bg-white/10 transition-all flex items-center gap-2" onclick="scrollToSection('partner')">
              Partner with us
              <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<p className="mt-8 text-xs text-zinc-400 tracking-wide">
            For use by licensed medical practitioners only.
          </p>
</div>
</div>
</section>

<section className="overflow-hidden md:py-32 bg-black border-zinc-900 border-b pt-24 pb-24 relative" id="science">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-6 xl:col-span-5 relative z-10 flex flex-col justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6 backdrop-blur-md self-start">
<iconify-icon className="text-orange-500" icon="solar:bolt-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-300">
                Patented Innovation
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter mb-4 leading-[1.1]">
              PEPTIDE™
              <br/>
<span className="font-normal text-orange-500">TECHNOLOGY</span>
</h2>
<p className="text-zinc-400 font-light leading-relaxed text-lg mb-8">
              Advanced biomimetic integration preserves HA structure, creating a
              highly efficient gel that feels natural.
            </p>

<div className="space-y-3">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<iconify-icon className="text-orange-500" icon="solar:dna-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-zinc-200 text-base font-medium mb-1 tracking-tight">
                    Biomimetic Preservation
                  </h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Maintains native HA structural integrity for prolonged
                    efficacy.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<iconify-icon className="text-orange-500" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-zinc-200 text-base font-medium mb-1 tracking-tight">
                    Reduced Fragmentation
                  </h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Cold processing minimizes molecular degradation compared to
                    heat methods.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
<iconify-icon className="text-orange-500" icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-zinc-200 text-base font-medium mb-1 tracking-tight">
                    Natural Integration
                  </h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Moves seamlessly with facial dynamics, eliminating
                    stiffness.
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-7 w-full relative mt-12 lg:mt-0 flex justify-center lg:justify-end h-full items-center">
<div className="xl:max-w-2xl overflow-hidden aspect-square lg:aspect-[4/3] group bg-zinc-950 w-full max-w-xl border-zinc-800/80 border rounded-[2rem] relative shadow-[0_0_50px_rgba(249,115,22,0.05)]">

<img alt="Peptide Technology Science" className="transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-80 mix-blend-lighten w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de381083-f38e-4f98-9ed8-d9e2ada8ef73_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none z-20"></div>

<div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between border-t border-white/10 pt-4">
<div className="flex flex-col">
<span className="text-white text-sm font-medium tracking-tight">
                    Elyara Cold Process
                  </span>
<span className="text-zinc-500 text-xs font-light tracking-wide">
                    Optimal Gel Integration
                  </span>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-sky-400" icon="solar:snowflake-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-0 bg-black overflow-hidden border-b border-zinc-900">
<div className="grid md:grid-cols-2 h-[400px] md:h-[500px]">
<div className="relative h-full overflow-hidden group">
<img alt="Hair Restoration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1644d0f-c864-417a-85c4-91995d930691_1600w.jpg"/>
<div className="flex flex-col bg-gradient-to-t from-black/90 via-black/20 to-transparent pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-3xl font-light text-white tracking-tight mb-2">
              ADVANCED BIO REGENERATIVE
            </h3>
<p className="text-sm font-light text-zinc-300 tracking-wide max-w-xs">
              HAIR FILLER THERAPY
            </p>
</div>
</div>
<div className="relative h-full overflow-hidden group bg-zinc-900">
<img alt="Dermal Aesthetics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba352e7d-4b10-4bad-9940-745408ddb5fa_1600w.jpg"/>
<div className="flex flex-col bg-gradient-to-t from-black/90 via-black/20 to-transparent pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-3xl font-light text-white tracking-tight mb-2">
              ELYARA
            </h3>
<p className="text-sm font-light text-zinc-300 tracking-wide max-w-xs">
              Regenerative Technology
            </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-zinc-900 border-t pt-24 pb-24 relative" id="products">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-20 text-center flex justify-center">
<div className="inline-flex flex-col sm:flex-row items-center p-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl sm:rounded-full backdrop-blur-md gap-1">
<button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 bg-zinc-800 text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-zinc-700 w-full sm:w-auto" id="tab-hair" onclick="selectCategory('hair')">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="16"></iconify-icon>
              Hair Complex
            </button>
<button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 text-zinc-500 hover:text-zinc-300 border border-transparent w-full sm:w-auto" id="tab-dermal" onclick="selectCategory('dermal')">
<iconify-icon className="" icon="lucide:droplet" strokeWidth="1.5" width="16"></iconify-icon>
              Dermal Fillers
            </button>
</div>
</div>

<div className="tab-content active" id="content-hair">
<div className="space-y-24">

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-orange-500 font-normal text-3xl md:text-4xl tracking-tight mb-4">
                  ELYARA- Injectable 7-Peptide Hair Complex
                </h3>
<h4 className="text-2xl md:text-3xl text-white font-light mb-6 tracking-tight">
                  Redefining Hair Restoration Through Follicular Bio-Stimulation
                </h4>
<p className="text-zinc-400 text-xl leading-relaxed mb-10 font-light">
                  Elyara- Injectable 7-Peptide Hair Complex is the world’s first
                  CE-approved hair filler that leverages sustained release and
                  peptide technology to support hair regrowth, improve hair
                  thickness, and improve scalp health.
                </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full text-sm font-normal hover:bg-orange-500/80 transition-all group" href="#learn-more-hair">
                  Learn More
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-zinc-800 group">
<img alt="Hair Formulation" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/816f3d77-6745-4557-8990-9dc6fad86efe_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
</div>

<div className="">
<h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2 text-center uppercase">
                The Core Technology
              </h4>
<h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-500 tracking-tight mb-16 text-center uppercase">
                Behind Elyara Hair Complex
              </h4>
<div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-8">
<div className="md:absolute md:inset-0 z-0 flex justify-center items-center pointer-events-none mb-12 md:mb-0 h-[400px] md:h-full order-first md:order-none w-full">
<div className="relative w-full max-w-[450px] h-full">
<img alt="Hair Core Technology" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4d32f34-6d9c-4676-b357-f2a528c3ba7a_1600w.jpg" style={{maskImage: 'radial-gradient(70% 70%, black 30%, transparent 75%)'}}/>
</div>
</div>
<div className="w-full md:w-[30%] flex flex-col justify-center h-full z-10 gap-16 md:gap-48 text-center order-2 md:order-none">
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Hair Growth Stimulation
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Enhances the expression of genes involved in hair follicle
                      development and regeneration, promoting healthier and
                      sustained hair growth.
                    </p>
</div>
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Inhibition of Alopecia Pathways
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Helps reduce hair loss by suppressing BMP4 and DKK-1,
                      proteins known to inhibit hair follicle development and
                      growth.
                    </p>
</div>
</div>
<div className="w-full md:w-[30%] flex flex-col justify-center h-full z-10 gap-16 md:gap-48 mt-16 md:mt-0 text-center order-3 md:order-none">
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Antioxidant Protection
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Reduces reactive oxygen species (ROS) generated by UV
                      exposure and physiological stress, helping protect hair
                      follicles from oxidative damage.
                    </p>
</div>
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Stimulation of Angiogenesis
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Promotes the formation of new blood vessels, improving
                      oxygen and nutrient supply to the scalp and supporting
                      healthy follicle development.
                    </p>
</div>
</div>
</div>
</div>
<div className="">
<h4 className="text-3xl font-light text-white tracking-tight text-center mb-12">Our Products </h4>
<div className="grid lg:grid-cols-2 gap-12 items-center bg-black border border-zinc-800 rounded-2xl overflow-hidden p-8 md:p-12 hover:border-orange-500/30 transition-colors">
<div className="order-2 lg:order-1">
<h5 className="text-3xl text-white font-light tracking-tight mb-2">
                    Elyara Hair Complex
                  </h5>
<p className="text-orange-500 font-normal mb-6">
                    1 x 2ml Prefilled Syringe
                  </p>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                    An advanced formulation combining hyaluronic acid with a
                    patented 7-peptide complex to target the underlying causes
                    of hair thinning, stimulate follicles, and improve scalp
                    microcirculation.
                  </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
                      Sustained peptide release technology
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
                      Promotes hair density and shaft thickness
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
                      CE-marked medical device
                    </li>
</ul>
</div>
<div className="order-1 lg:order-2 flex justify-center">
<div className="w-full max-w-sm aspect-square relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4">
<img alt="Elyara Hair Complex Product" className="object-cover w-full h-full rounded-lg opacity-80 transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58d40230-b5dc-40a3-930e-48c0238a78da_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="content-dermal">
<div className="space-y-24">

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-orange-500 font-normal text-3xl md:text-4xl tracking-tight mb-4">
                  ELYARA- Peptide Based Dermal Fillers
                </h3>
<h4 className="text-2xl md:text-3xl text-white font-light mb-6 tracking-tight">
                  Advanced Peptide-Integrated Hyaluronic Technology for
                  Structural Support and Dermal Bio-Stimulation.
                </h4>
<p className="text-zinc-400 text-xl leading-relaxed mb-10 font-light">
                  Elyara is a first-of-its-kind, CE approved dermal filler that
                  combines cross-linked hyaluronic acid with biomimetic
                  peptides. This unique formulation actively supports dermal
                  remodeling, collagen stimulation, and tissue regeneration to
                  deliver smoother, refined, and more natural outcomes.
                </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full text-sm font-normal hover:bg-orange-500/80 transition-all group" href="#learn-more-dermal">
                  Learn More
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-zinc-800 group">
<img alt="Dermal Fillers Integration" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbeea8c2-0c42-4a5e-a721-3b21fd2e2769_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
</div>

<div>
<h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2 text-center uppercase">
                4 Reasons Why Elyara Is
              </h4>
<h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-500 tracking-tight mb-16 text-center uppercase">
                The Future Of Dermal Fillers
              </h4>
<div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-8">

<div className="md:absolute md:inset-0 z-0 flex justify-center items-center pointer-events-none mb-12 md:mb-0 h-[400px] md:h-full order-first md:order-none w-full">
<div className="relative w-full max-w-[450px] h-full">
<img alt="Natural Results" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f15349-a39c-482c-b796-c3b71dfef61a_1600w.jpg" style={{maskImage: 'radial-gradient(70% 70%, black 30%, transparent 75%)'}}/>
</div>
</div>

<div className="w-full md:w-[30%] flex flex-col justify-center h-full z-10 gap-16 md:gap-48 text-center order-2 md:order-none">
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Reverses Visible Signs
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Supports dermal renewal and improves skin quality, helping
                      address structural and biological aspects of ageing.
                    </p>
</div>
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Regenerative Approach
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Combines volumization with bio-stimulation to support
                      collagen remodeling and long-term tissue vitality.
                    </p>
</div>
</div>

<div className="w-full md:w-[30%] flex flex-col justify-center h-full z-10 gap-16 md:gap-48 mt-16 md:mt-0 text-center order-3 md:order-none">
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Peptide Technology
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Powered by bioactive peptides that enhance filler
                      longevity and promote collagen and elastin production.
                    </p>
</div>
<div>
<h5 className="text-orange-500 font-semibold text-2xl md:text-3xl tracking-tight mb-4">
                      Dynamic Results
                    </h5>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                      Designed to integrate seamlessly with facial movement,
                      delivering balanced hydration and natural-looking
                      outcomes.
                    </p>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-3xl text-white font-light mb-12 text-center tracking-tight">
                The Portfolio
              </h4>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-black border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-colors flex flex-col h-full group">
<div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
<img alt="Elyara Plus Product" className="object-cover w-full h-full mix-blend-lighten opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58d40230-b5dc-40a3-930e-48c0238a78da_1600w.jpg"/>
</div>
<h5 className="text-2xl text-white font-light tracking-tight mb-2">
                    Elyara Plus
                  </h5>
<p className="text-orange-500 font-normal mb-4">
                    For Fine Lines &amp; Gentle Volumization
                  </p>
<p className="text-zinc-400 font-light leading-relaxed mb-6 flex-grow">
                    Designed for superficial to mid-dermis injections. Ideal for
                    perioral lines, tear troughs, and lip hydration. Engineered
                    with soft integration for smooth, undetectable results.
                  </p>
<div className="pt-6 border-t border-zinc-800 flex justify-between items-center mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                      HA Concentration: 20mg/ml
                    </span>
<iconify-icon className="text-orange-500" icon="lucide:droplet" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="bg-black border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-colors flex flex-col h-full group">
<div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
<img alt="Elyara Ultra Product" className="object-cover w-full h-full mix-blend-lighten opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58d40230-b5dc-40a3-930e-48c0238a78da_1600w.jpg"/>
</div>
<h5 className="text-2xl text-white font-light tracking-tight mb-2">
                    Elyara Ultra
                  </h5>
<p className="text-orange-500 font-normal mb-4">
                    For Deep Structural Support
                  </p>
<p className="text-zinc-400 font-light leading-relaxed mb-6 flex-grow">
                    Formulated for mid to deep dermis or supraperiosteal
                    injection. Perfect for cheek augmentation, jawline
                    definition, and chin projection. High cohesivity for optimal
                    tissue lift.
                  </p>
<div className="pt-6 border-t border-zinc-800 flex justify-between items-center mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                      HA Concentration: 24mg/ml
                    </span>
<iconify-icon className="text-orange-500" icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-zinc-200" id="physician-section">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
<div className="col-span-1 pr-0 lg:pr-12">
<h2 className="text-4xl font-light tracking-tight text-zinc-900 mb-6">
              Why Doctors Choose Elyara
            </h2>
<p className="text-xl text-zinc-600 leading-relaxed mb-8">
              Designed for Precision. Engineered for Predictability. Developed
              by experts in advanced wound healing.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-700 text-sm font-normal">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                Advanced Wound Healing Labs
              </li>
<li className="flex items-center gap-3 text-zinc-700 text-sm font-normal">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                High Biocompatibility Profile
              </li>
<li className="flex items-center gap-3 text-zinc-700 text-sm font-normal">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                Strict Swiss Quality Standards
              </li>
</ul>
<a className="inline-flex items-center px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-normal hover:bg-orange-500 transition-colors shadow-lg hover:shadow-orange-500/20" href="#partner">
              Partner with us
            </a>
</div>
<div className="col-span-1 md:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="p-6 bg-zinc-50 border border-zinc-100 rounded-xl hover:shadow-lg transition-all hover:border-orange-500/30 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:syringe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-normal mb-2 text-lg">
                Ease of Injection
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Optimized rheology for smooth extrusion and precise placement.
              </p>
</div>
<div className="p-6 bg-zinc-50 border border-zinc-100 rounded-xl hover:shadow-lg transition-all hover:border-orange-500/30 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-normal mb-2 text-lg">
                Safety Profile
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Ultra-low BDDE residue and high biocompatibility stats.
              </p>
</div>
<div className="p-6 bg-zinc-50 border border-zinc-100 rounded-xl hover:shadow-lg transition-all hover:border-orange-500/30 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-normal mb-2 text-lg">
                Predictability
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Engineered cross-link density for sustained outcomes.
              </p>
</div>
<div className="p-6 bg-zinc-50 border border-zinc-100 rounded-xl hover:shadow-lg transition-all hover:border-orange-500/30 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:scan-face" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-normal mb-2 text-lg">
                Integration
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Smooth distribution with minimal irregularities.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="clinical">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-light text-white mb-12 text-center tracking-tight">
          Medical Endorsements
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-8 bg-black border border-zinc-800 rounded-xl relative group hover:border-orange-500/30 transition-colors">
<iconify-icon className="absolute top-8 right-8 text-zinc-800 group-hover:text-orange-500/20 transition-colors" icon="lucide:message-square-quote" strokeWidth="1.5" width="48"></iconify-icon>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-orange-500 font-semibold border border-zinc-800 group-hover:border-orange-500/30">
                DR
              </div>
<div>
<h4 className="text-white font-normal text-sm">Dr. Sarah Jensen</h4>
<p className="text-zinc-500 text-xs">Dermatologist, Zurich</p>
</div>
</div>
<p className="text-zinc-400 text-base leading-relaxed">
              "The predictability of Elyara is unmatched. My patients appreciate
              the natural integration and the reduced swelling compared to
              traditional fillers."
            </p>
</div>
<div className="p-8 bg-black border border-zinc-800 rounded-xl relative group hover:border-orange-500/30 transition-colors">
<iconify-icon className="absolute top-8 right-8 text-zinc-800 group-hover:text-orange-500/20 transition-colors" icon="lucide:message-square-quote" strokeWidth="1.5" width="48"></iconify-icon>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-orange-500 font-semibold border border-zinc-800 group-hover:border-orange-500/30">
                DR
              </div>
<div>
<h4 className="text-white font-normal text-sm">Dr. Marc Dubois</h4>
<p className="text-zinc-500 text-xs">Plastic Surgeon, Paris</p>
</div>
</div>
<p className="text-zinc-400 text-base leading-relaxed">
              "Finally, a product that addresses both volume and skin quality.
              The peptide technology is a game-changer for long-term tissue
              health."
            </p>
</div>
<div className="p-8 bg-black border border-zinc-800 rounded-xl relative group hover:border-orange-500/30 transition-colors">
<iconify-icon className="absolute top-8 right-8 text-zinc-800 group-hover:text-orange-500/20 transition-colors" icon="lucide:message-square-quote" strokeWidth="1.5" width="48"></iconify-icon>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-orange-500 font-semibold border border-zinc-800 group-hover:border-orange-500/30">
                DR
              </div>
<div>
<h4 className="text-white font-normal text-sm">Dr. Elena Ross</h4>
<p className="text-zinc-500 text-xs">Aesthetic Medicine, London</p>
</div>
</div>
<p className="text-zinc-400 text-base leading-relaxed">
              "Elyara Hair Complex has become my go-to for early-stage alopecia.
              The clinical results regarding hair density are consistent and
              impressive."
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-zinc-900 relative" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-light text-white tracking-tight mb-2">
            Patient Transformations
          </h2>
<p className="text-zinc-400 font-light text-xl">Before &amp; Afters</p>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-12" id="results-carousel-container">
<div className="absolute top-[40%] -left-2 md:-left-4 -translate-y-1/2 z-10">
<button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-zinc-800 hover:border-orange-500/50 transition-all group" onclick="moveResSlider(-1)">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="lucide:arrow-left" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="absolute top-[40%] -right-2 md:-right-4 -translate-y-1/2 z-10">
<button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-zinc-800 hover:border-orange-500/50 transition-all group" onclick="moveResSlider(1)">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="overflow-hidden w-full">
<div className="flex transition-transform duration-500 ease-out gap-6" id="transform-track" style={{transform: 'translateX(0px)'}}>
<div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-zinc-800 comparison-slider">
<img alt="Case 1 After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Case 1 Before" className="absolute inset-0 w-full h-full object-cover slider-before" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="updateCardSlider(event)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-[2px] bg-white z-10 slider-handle pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium tracking-wider uppercase border border-white/10 z-20 pointer-events-none">
                    Before / After
                  </div>
</div>
<div className="text-xl text-white font-light mb-2 tracking-tight">
                  Case 1: Asma
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">
                    Elyara Plus
                  </span>
</div>
</div>
<div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-zinc-800 comparison-slider">
<img alt="Case 2 After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Case 2 Before" className="absolute inset-0 w-full h-full object-cover slider-before" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="updateCardSlider(event)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-[2px] bg-white z-10 slider-handle pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium tracking-wider uppercase border border-white/10 z-20 pointer-events-none">
                    Before / After
                  </div>
</div>
<div className="text-xl text-white font-light mb-2 tracking-tight">
                  Case 2: Clara
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">
                    Hair Complex
                  </span>
</div>
</div>
<div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-zinc-800 comparison-slider">
<img alt="Case 3 After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Case 3 Before" className="absolute inset-0 w-full h-full object-cover slider-before" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="updateCardSlider(event)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-[2px] bg-white z-10 slider-handle pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium tracking-wider uppercase border border-white/10 z-20 pointer-events-none">
                    Before / After
                  </div>
</div>
<div className="text-xl text-white font-light mb-2 tracking-tight">
                  Case 3: Sophia
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">
                    Elyara Ultra
                  </span>
</div>
</div>
<div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-zinc-800 comparison-slider">
<img alt="Case 4 After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Case 4 Before" className="absolute inset-0 w-full h-full object-cover slider-before" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="updateCardSlider(event)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-[2px] bg-white z-10 slider-handle pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium tracking-wider uppercase border border-white/10 z-20 pointer-events-none">
                    Before / After
                  </div>
</div>
<div className="text-xl text-white font-light mb-2 tracking-tight">
                  Case 4: Emma
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">
                    Elyara Plus
                  </span>
</div>
</div>
<div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-zinc-800 comparison-slider">
<img alt="Case 5 After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Case 5 Before" className="absolute inset-0 w-full h-full object-cover slider-before" src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="updateCardSlider(event)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-[2px] bg-white z-10 slider-handle pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium tracking-wider uppercase border border-white/10 z-20 pointer-events-none">
                    Before / After
                  </div>
</div>
<div className="text-xl text-white font-light mb-2 tracking-tight">
                  Case 5: Olivia
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">
                    Elyara Ultra
                  </span>
</div>
</div>
<div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 flex flex-col">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-zinc-800 comparison-slider">
<img alt="Case 6 After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Case 6 Before" className="absolute inset-0 w-full h-full object-cover slider-before" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" max="100" min="0" oninput="updateCardSlider(event)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-[2px] bg-white z-10 slider-handle pointer-events-none" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-medium tracking-wider uppercase border border-white/10 z-20 pointer-events-none">
                    Before / After
                  </div>
</div>
<div className="text-xl text-white font-light mb-2 tracking-tight">
                  Case 6: Mia
                </div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800">
                    Hair Complex
                  </span>
</div>
</div>
</div>
</div>
<p className="text-xs text-zinc-600 uppercase mt-8 text-center w-full block tracking-wide">
            Images are for illustrative purposes. Individual results vary.
          </p>

</div>
</div>
</section>

<section className="py-32 bg-black border-t border-zinc-900 relative overflow-hidden" id="partner">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 z-0 opacity-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/873448ac-bcfa-4514-8b9d-783660f6e3c0_3840w.jpg')] bg-cover bg-center mix-blend-luminosity"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-black/30"></div>
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 backdrop-blur-md">
<iconify-icon className="text-orange-500" icon="lucide:handshake" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase text-orange-500">
                Global Network
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
              Partner With
              <span className="font-normal text-orange-500">Elyara</span>
</h2>
<p className="text-zinc-400 mb-10 text-lg md:text-xl font-light leading-relaxed">
              We collaborate with premium aesthetic clinics, dermatology
              centers, plastic surgery practices, and exclusive regional
              distributors globally. Elevate your practice with next-generation
              regenerative precision.
            </p>
<div className="flex flex-wrap gap-6 mb-12">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light bg-black/40 px-4 py-2 rounded-full border border-zinc-800/50 backdrop-blur-sm">
<div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="lucide:graduation-cap" strokeWidth="2" width="14"></iconify-icon>
</div>
                Clinical Training
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light bg-black/40 px-4 py-2 rounded-full border border-zinc-800/50 backdrop-blur-sm">
<div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="lucide:megaphone" strokeWidth="2" width="14"></iconify-icon>
</div>
                Marketing Support
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light bg-black/40 px-4 py-2 rounded-full border border-zinc-800/50 backdrop-blur-sm">
<div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-500" icon="lucide:network" strokeWidth="2" width="14"></iconify-icon>
</div>
                Exclusive Pricing
              </div>
</div>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-orange-500 text-white rounded-full text-sm font-normal hover:bg-orange-500/80 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Request Product Kit
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full text-sm font-normal hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2">
                Contact Sales
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-zinc-900" id="contact">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-light text-white mb-12 text-center tracking-tight">
          Frequently Asked Questions
        </h2>
<div className="space-y-0" id="faq-container">

<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                How long does Elyara last?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Elyara dermal filler results generally last between 9 to 18
                months, depending on the specific product variant (Plus or
                Ultra), treatment area, injection depth, and individual
                metabolic factors.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                Is Elyara better than other dermal fillers?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Elyara’s peptide-integrated hyaluronic acid technology is
                designed to offer enhanced stability and smoother tissue
                integration. The formulation supports prolonged results and
                minimizes excessive swelling.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                What is the downtime after an Elyara treatment?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Most patients experience minimal downtime. Temporary redness,
                mild swelling, or slight bruising may occur and typically
                resolve within 24–48 hours.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                Who is an ideal candidate for Elyara?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Ideal candidates are individuals seeking non-surgical facial
                rejuvenation, wrinkle reduction, or volume restoration with
                natural-looking, longer-lasting results.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                What type of hyaluronic acid is used in Elyara?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Elyara utilizes stabilized cross-linked hyaluronic acid
                engineered for optimized durability, cohesivity, and tissue
                integration.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                What is the role of peptides in Elyara?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                The incorporated peptide complexes support cellular signaling
                within the dermal microenvironment, potentially assisting in
                fibroblast modulation and extracellular matrix support.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                Does Elyara rely on BDDE cross-linking?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Elyara primarily relies on peptides for cross-linking, making it
                a safer alternative with reduced BDDE concentration without
                compromising stability.
              </div>
</div>
</div>
<div className="faq-item border-b border-zinc-800">
<button className="w-full flex justify-between items-center py-6 text-left group" onclick="toggleFaq(this)">
<h3 className="text-xl text-white font-normal group-hover:text-orange-500 transition-colors">
                Can Elyara be combined with other aesthetic procedures?
              </h3>
<div className="faq-icon text-zinc-500 group-hover:text-orange-500">
<iconify-icon icon="lucide:plus-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</button>
<div className="faq-answer">
<div className="pb-6 text-zinc-500 text-lg leading-relaxed font-light">
                Elyara may be integrated into comprehensive treatment plans,
                including combination protocols with neuromodulators, PRP, or
                energy-based devices.
              </div>
</div>
</div>
</div>
</div>
</section>

<div className="fixed -translate-x-1/2 flex transition-all duration-500 z-50 pointer-events-none bottom-32 left-1/2 gap-x-3 gap-y-3 items-center opacity-0 translate-y-20" id="sticky-nav">

<button className="pointer-events-auto group flex items-center gap-3 px-6 py-3 bg-orange-500 backdrop-blur-md border border-orange-500 transition-all duration-300 rounded-full shadow-2xl hover:-translate-y-1" id="sticky-btn-hair" onclick="selectCategory('hair'); scrollToSection('products')">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-white/20 transition-colors">
<iconify-icon className="text-orange-500 transition-colors" icon="lucide:activity" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest uppercase text-white transition-colors">
          Hair Complex
        </span>
</button>
<button className="group flex hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 pointer-events-auto bg-zinc-950/90 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-2xl backdrop-blur-md gap-x-3 gap-y-3 items-center" id="sticky-btn-dermal" onclick="selectCategory('dermal'); scrollToSection('products')">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/30 transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-orange-500 transition-colors" icon="lucide:droplet" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors">
          Dermal Fillers
        </span>
</button>
</div>

<footer className="bg-white border-t border-zinc-100 pt-20 pb-10 mt-auto">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-16">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-3xl font-light tracking-[0.2em] text-zinc-900">
              ELYARA
            </span>
</div>
<p className="text-xs uppercase tracking-widest text-zinc-400">
            Regenerative Precision by Elyara Aesthetics
          </p>
<p className="text-xs text-zinc-300 mt-2">
            © Elyara SA - All rights reserved
          </p>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-zinc-500 font-normal tracking-wide uppercase mb-16 border-b border-zinc-100 pb-16">
<a className="hover:text-orange-500 transition-colors" href="#">
            Provider Login
          </a>
<a className="hover:text-orange-500 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-orange-500 transition-colors" href="#">
            Terms of Use
          </a>
<a className="hover:text-orange-500 transition-colors" href="#">
            Elyara.com
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-left md:text-center mb-24">
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-2">
              Products
            </h4>
<a className="text-base text-zinc-500 hover:text-orange-500 transition-colors" href="#">
              Elyara Plus
            </a>
<a className="text-base text-zinc-500 hover:text-orange-500 transition-colors" href="#">
              Elyara Ultra
            </a>
<a className="text-base text-zinc-500 hover:text-orange-500 transition-colors" href="#">
              Hair Complex
            </a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-2">
              Customer Service
            </h4>
<a className="text-base text-zinc-500 hover:text-orange-500 transition-colors" href="#">
              877-ELYARA-NOW
            </a>
<a className="text-base text-zinc-500 hover:text-orange-500 transition-colors uppercase" href="mailto:support@elyara.com">
              support@elyara.com
            </a>
</div>
<div className="flex flex-col items-center gap-3">
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-2">
              Follow
            </h4>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-10">
<p className="text-xs text-zinc-400 leading-relaxed max-w-2xl mx-auto uppercase">
            ©2024 Elyara. Elyara® and Elyara Hair Complex® are registered
            trademarks of Elyara SA, manufactured in Switzerland. The Elyara
            collection is exclusively distributed by Elyara Aesthetics.
          </p>
<p className="text-xs text-zinc-300 mt-4">ELA-00160</p>
</div>
</div>
</footer>



    </>
  );
}
