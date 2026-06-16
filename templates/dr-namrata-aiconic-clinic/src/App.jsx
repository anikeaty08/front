import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
      const slider = document.getElementById('slider-emnx9udch0dxcges');
      if (!slider) return;
      
      let autoScrollInterval;
      
      const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
          const maxScroll = slider.scrollWidth - slider.clientWidth;
          // If we reached the end, smoothly scroll back to start
          if (slider.scrollLeft >= maxScroll - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll by roughly one item's width including gap
            const item = slider.children[0];
            const itemWidth = item ? item.clientWidth + parseFloat(getComputedStyle(slider).gap || 0) : 300;
            slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
          }
        }, 3500);
      };

      const stopAutoScroll = () => {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
      };

      // Pause auto-sliding when interacting via touch or mouse
      slider.addEventListener('touchstart', stopAutoScroll, { passive: true });
      slider.addEventListener('touchend', startAutoScroll, { passive: true });
      slider.addEventListener('mouseenter', stopAutoScroll);
      slider.addEventListener('mouseleave', startAutoScroll);

      // Desktop drag-to-scroll implementation
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        // Temporarily disable snapping & smooth scroll for 1:1 drag feel
        slider.style.scrollSnapType = 'none';
        slider.style.scrollBehavior = 'auto';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        stopAutoScroll();
      });
      
      const handleDragEnd = () => {
        if (!isDown) return;
        isDown = false;
        // Restore CSS smooth scroll and native snapping
        slider.style.scrollSnapType = '';
        slider.style.scrollBehavior = '';
        startAutoScroll();
      };

      slider.addEventListener('mouseleave', handleDragEnd);
      slider.addEventListener('mouseup', handleDragEnd);
      
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed multiplier
        slider.scrollLeft = scrollLeft - walk;
      });

      // Initialize
      startAutoScroll();
    })();
  


        document.addEventListener('DOMContentLoaded', () => {
          // Comparison Sliders Logic
          const sliders = document.querySelectorAll('.comparison-slider');
          sliders.forEach(slider => {
            let isDragging = false;
            const handle = slider.querySelector('.handle-line');
            const beforeWrapper = slider.querySelector('.before-wrapper');

            const moveSlider = (clientX) => {
              const rect = slider.getBoundingClientRect();
              let x = clientX - rect.left;
              x = Math.max(0, Math.min(x, rect.width));
              const percent = (x / rect.width) * 100;
              handle.style.left = `${percent}%`;
              beforeWrapper.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            };

            const startDrag = (e) => {
              isDragging = true;
              moveSlider(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
            };

            const stopDrag = () => {
              isDragging = false;
            };

            slider.addEventListener('mousedown', startDrag);
            slider.addEventListener('touchstart', startDrag, { passive: true });

            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('touchend', stopDrag);

            window.addEventListener('mousemove', (e) => {
              if (!isDragging) return;
              moveSlider(e.clientX);
            });

            window.addEventListener('touchmove', (e) => {
              if (!isDragging) return;
              moveSlider(e.touches[0].clientX);
            }, { passive: true });
          });

          // Carousel Logic
          const track = document.getElementById('carousel-track');
          const prevBtn = document.getElementById('carousel-prev');
          const nextBtn = document.getElementById('carousel-next');
          const dots = document.querySelectorAll('.carousel-dot');

          if (track && prevBtn && nextBtn) {
            const getCardWidth = () => {
              const card = track.querySelector('.comparison-slider');
              const gap = parseInt(window.getComputedStyle(track).gap) || 24;
              return card ? card.offsetWidth + gap : 0;
            };

            nextBtn.addEventListener('click', () => {
              track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
              track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
            });

            const updateActiveDot = () => {
              const scrollLeft = track.scrollLeft;
              const cardWidth = getCardWidth();
              const activeIndex = Math.round(scrollLeft / cardWidth);

              dots.forEach((dot, index) => {
                if (index === activeIndex) {
                  dot.classList.remove('bg-[#E6E0D8]', 'w-2.5');
                  dot.classList.add('bg-[#A47764]', 'w-8');
                } else {
                  dot.classList.remove('bg-[#A47764]', 'w-8');
                  dot.classList.add('bg-[#E6E0D8]', 'w-2.5');
                }
              });
            };

            track.addEventListener('scroll', () => {
              requestAnimationFrame(updateActiveDot);
            }, { passive: true });

            dots.forEach((dot, index) => {
              dot.addEventListener('click', () => {
                track.scrollTo({ left: index * getCardWidth(), behavior: 'smooth' });
              });
            });
          }
        });
      


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="z-50 lg:px-12 flex w-full max-w-[1600px] mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<a className="text-2xl font-light tracking-tight flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-[#A47764] rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#FAF8F5] rounded-full"></div>
</span>
        Aiconic Clinic
      </a>
<div className="hidden lg:flex items-center gap-6 xl:gap-10 text-base xl:text-lg text-[#8C827A]">
<a className="text-[#2D2422] hover:text-[#A47764] transition-colors flex items-center gap-1 py-4" href="#">
          Home
        </a>
<div className="relative group">
<a className="hover:text-[#2D2422] transition-colors flex items-center gap-1 cursor-pointer py-4" href="#concerns">
            Concerns
            <iconify-icon className="text-lg group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-[80%] left-0 w-52 bg-white border border-[#E6E0D8]/50 shadow-2xl shadow-[#A47764]/5 rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
<a className="block px-6 py-2.5 text-[#2D2422] hover:bg-[#FAF8F5] hover:text-[#A47764] transition-colors text-base" href="#skin">
              Skin
            </a>
<a className="block px-6 py-2.5 text-[#2D2422] hover:bg-[#FAF8F5] hover:text-[#A47764] transition-colors text-base" href="#anti-ageing">
              Anti-ageing
            </a>
<a className="block px-6 py-2.5 text-[#2D2422] hover:bg-[#FAF8F5] hover:text-[#A47764] transition-colors text-base" href="#hair">
              Hair
            </a>
<a className="block px-6 py-2.5 text-[#2D2422] hover:bg-[#FAF8F5] hover:text-[#A47764] transition-colors text-base" href="#body">
              Body
            </a>
<a className="block px-6 py-2.5 text-[#2D2422] hover:bg-[#FAF8F5] hover:text-[#A47764] transition-colors text-base" href="#men">
              Men
            </a>
</div>
</div>
<a className="hover:text-[#2D2422] transition-colors flex items-center gap-1 py-4" href="#about">
          About us
        </a>
<a className="hover:text-[#2D2422] transition-colors flex items-center gap-1 py-4" href="#treatment">
          Treatment
        </a>
<a className="hover:text-[#2D2422] transition-colors flex items-center gap-1 py-4" href="#results">
          Before and after
        </a>
</div>
<div className="hidden lg:block">
<a className="px-8 py-3.5 bg-[#A47764] text-white text-sm rounded-full hover:bg-[#906858] transition-colors tracking-wide uppercase" href="#appointment">
          Book Appointment
        </a>
</div>
<button className="lg:hidden p-2 text-[#2D2422]">
<svg className="lucide lucide-menu" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</nav>

<section className="overflow-hidden lg:px-12 lg:pt-12 max-w-[1600px] mr-auto ml-auto pt-6 pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 relative z-20">
<span className="block text-xs uppercase tracking-widest text-[#A47764] mb-6">
            Your One-Stop Destination for Skin &amp; Hair Care
          </span>
<h1 className="text-4xl md:text-5xl lg:text-[5rem] leading-[1.1] font-extralight tracking-tight text-[#2D2422] mb-6">
            Advanced
            <span className="font-serif-italic text-[#A47764]">Skin, Hair</span>
<br/>
            &amp; Aesthetic Treatments
          </h1>
<p className="md:text-2xl leading-relaxed text-xl font-extralight text-[#8C827A] tracking-tight max-w-lg mb-10">
            Reclaim your confidence with expert-led dermatology and aesthetic
            care tailored to your unique needs.
          </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-8 py-4 bg-[#A47764] text-white text-lg rounded-full hover:bg-[#906858] transition-colors" href="#appointment">
              Book Appointment
            </a>
<a className="px-8 py-4 bg-transparent border border-[#A47764] text-[#A47764] text-lg rounded-full hover:bg-[#A47764] hover:text-white transition-colors flex items-center gap-2" href="https://wa.me/919901864404" target="_blank">
              WhatsApp Us
              <iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-6 relative z-10 flex justify-end">
<div className="relative w-full max-w-[600px] aspect-[4/5] rounded-[3rem] overflow-hidden">
<div className="absolute inset-0 bg-[#EFEBE4] rounded-[3rem] translate-x-4 translate-y-4"></div>
<img alt="Radiant skin model" className="relative w-full h-full object-cover rounded-[3rem] border border-white/50 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7dfe0d1-c247-41a2-b250-fac173dca5d9_1600w.jpg"/>
</div>
</div>
</div>

<div className="hidden"></div>
</section>

<section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
<div className="md:p-12 lg:p-20 shadow-[#A47764]/5 overflow-hidden bg-white max-w-[1400px] border-[#E6E0D8]/50 border rounded-[2rem] lg:rounded-[3rem] mx-auto p-6 lg:p-12 relative shadow-2xl">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FAF8F5] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FAF8F5] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 opacity-70 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-24 z-10 relative gap-x-16 gap-y-16 items-center">

<div className="lg:col-span-5 relative">
<div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#EFEBE4] border border-[#E6E0D8]/50 shadow-xl">
<img alt="Dr. Namrata Singh" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/faf1511d-fe4d-4a8a-99dd-18253367688a_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white shadow-lg">
<div className="w-12 h-12 bg-[#A47764] rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<div className="">
<div className="text-[#2D2422] font-medium text-sm tracking-wide">
                    Board Certified
                  </div>
<div className="text-[#8C827A] text-xs uppercase tracking-widest mt-0.5">
                    Dermatologist
                  </div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E6E0D8] text-xs uppercase tracking-widest text-[#A47764] mb-8">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
              Meet Our Founder
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#2D2422] mb-5">
              Dr. Namrata Singh
            </h2>
<div className="flex flex-wrap gap-2 mb-10">
<span className="px-4 py-1.5 bg-[#FAF8F5] border border-[#E6E0D8]/60 rounded-full text-xs font-medium tracking-wider uppercase text-[#8C827A]">
                MBBS
              </span>
<span className="px-4 py-1.5 bg-[#FAF8F5] border border-[#E6E0D8]/60 rounded-full text-xs font-medium tracking-wider uppercase text-[#8C827A]">
                MD Dermatology
              </span>
<span className="px-4 py-1.5 bg-[#FAF8F5] border border-[#E6E0D8]/60 rounded-full text-xs font-medium tracking-wider uppercase text-[#8C827A]">
                DNB (DVL)
              </span>
<span className="px-4 py-1.5 bg-[#FAF8F5] border border-[#E6E0D8]/60 rounded-full text-xs font-medium tracking-wider uppercase text-[#8C827A]">
                FRGUHS
              </span>
</div>
<div className="relative mb-10">
<iconify-icon className="absolute -top-3 -left-3 text-4xl text-[#A47764]/10" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-xl md:text-3xl text-[#2D2422] font-serif-italic leading-relaxed relative z-10 pl-6 border-l-2 border-[#A47764]/30">
                "My philosophy is simple: enhance your natural beauty with
                advanced science, while ensuring you feel completely confident
                in your own skin."
              </p>
</div>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed mb-12">
              With over a decade of dedicated practice, Dr. Namrata is renowned
              for her personalized approach to clinical and aesthetic
              dermatology. Her commitment to evidence-based treatments and
              cutting-edge techniques has helped thousands achieve their
              skincare goals naturally and safely.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-center gap-5 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E6E0D8]/60 hover:border-[#A47764]/30 transition-colors">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#A47764] shadow-sm shrink-0 border border-[#E6E0D8]/40">
<iconify-icon className="text-3xl" icon="solar:history-2-linear"></iconify-icon>
</div>
<div className="">
<div className="text-3xl font-extralight text-[#2D2422] tracking-tight mb-1">
                    10+
                  </div>
<div className="text-xs font-medium text-[#8C827A] uppercase tracking-widest">
                    Years Exp.
                  </div>
</div>
</div>
<div className="flex items-center gap-5 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E6E0D8]/60 hover:border-[#A47764]/30 transition-colors">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#A47764] shadow-sm shrink-0 border border-[#E6E0D8]/40">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<div className="text-3xl font-extralight text-[#2D2422] tracking-tight mb-1">
                    15+
                  </div>
<div className="text-xs font-medium text-[#8C827A] uppercase tracking-widest">
                    Specializations
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-24 px-6 lg:px-12 max-w-[1600px] mx-auto mt-4 lg:mt-8 mb-6 lg:mb-12">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-[#2D2422] mb-6">
          What Sets Us
          <span className="font-serif-italic text-[#A47764]">Apart</span>
</h2>
<div className="w-24 h-[1px] bg-[#A47764]/50 mx-auto"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start lg:items-center max-w-[1300px] mx-auto">

<div className="flex flex-col gap-6 lg:gap-16 order-2 lg:order-1 w-full">

<div className="flex items-start gap-5 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#E6E0D8]/50 lg:border-none">
<div className="relative w-[70px] h-[48px] flex items-center shrink-0 mt-1">
<svg className="absolute inset-0 text-[#A47764]/40" fill="none" height="48" viewbox="0 0 70 48" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H52L68 24L52 47H1V1Z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-[3px] top-[3px] bottom-[3px] w-[42px] bg-[#A47764] rounded-sm flex items-center justify-center text-white text-xl font-extralight">
                1
              </div>
</div>
<div className="">
<h3 className="text-xl font-normal text-[#2D2422] mb-2 tracking-tight">
                Tailored Treatment Plans
              </h3>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed">
                Every treatment is customized to your unique skin, goals, and
                lifestyle.
              </p>
</div>
</div>

<div className="flex items-start gap-5 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#E6E0D8]/50 lg:border-none">
<div className="relative w-[70px] h-[48px] flex items-center shrink-0 mt-1">
<svg className="absolute inset-0 text-[#A47764]/40" fill="none" height="48" viewbox="0 0 70 48" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H52L68 24L52 47H1V1Z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-[3px] top-[3px] bottom-[3px] w-[42px] bg-[#A47764] rounded-sm flex items-center justify-center text-white text-xl font-extralight">
                2
              </div>
</div>
<div className="">
<h3 className="text-xl font-normal text-[#2D2422] mb-2 tracking-tight">
                Complete Care Solutions
              </h3>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed">
                From consultation to aftercare, we cover your entire aesthetic
                journey.
              </p>
</div>
</div>

<div className="flex items-start gap-5 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#E6E0D8]/50 lg:border-none">
<div className="relative w-[70px] h-[48px] flex items-center shrink-0 mt-1">
<svg className="absolute inset-0 text-[#A47764]/40" fill="none" height="48" viewbox="0 0 70 48" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H52L68 24L52 47H1V1Z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-[3px] top-[3px] bottom-[3px] w-[42px] bg-[#A47764] rounded-sm flex items-center justify-center text-white text-xl font-extralight">
                3
              </div>
</div>
<div className="">
<h3 className="text-xl font-normal text-[#2D2422] mb-2 tracking-tight">
                Cutting-Edge Techniques
              </h3>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed">
                We use the latest advancements for safe, effective, and modern
                results.
              </p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center px-4 mb-4 lg:mb-0">
<div className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[420px] aspect-square rounded-full overflow-hidden bg-[#EFEBE4] shadow-xl shadow-[#A47764]/5 mx-auto">
<img alt="Skin Care Wellness" className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80df2227-f7a6-4452-9c3b-4bcc3b1ce747_800w.jpg"/>
</div>
</div>

<div className="flex flex-col gap-6 lg:gap-16 order-3 w-full">

<div className="flex items-start gap-5 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#E6E0D8]/50 lg:border-none">
<div className="relative w-[70px] h-[48px] flex items-center shrink-0 mt-1">
<svg className="absolute inset-0 text-[#A47764]/40" fill="none" height="48" viewbox="0 0 70 48" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H52L68 24L52 47H1V1Z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-[3px] top-[3px] bottom-[3px] w-[42px] bg-[#A47764] rounded-sm flex items-center justify-center text-white text-xl font-extralight">
                4
              </div>
</div>
<div>
<h3 className="text-xl font-normal text-[#2D2422] mb-2 tracking-tight">
                Honest &amp; Clear Guidance
              </h3>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed">
                No over-promising—just transparent advice you can trust.
              </p>
</div>
</div>

<div className="flex items-start gap-5 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#E6E0D8]/50 lg:border-none">
<div className="relative w-[70px] h-[48px] flex items-center shrink-0 mt-1">
<svg className="absolute inset-0 text-[#A47764]/40" fill="none" height="48" viewbox="0 0 70 48" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H52L68 24L52 47H1V1Z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-[3px] top-[3px] bottom-[3px] w-[42px] bg-[#A47764] rounded-sm flex items-center justify-center text-white text-xl font-extralight">
                5
              </div>
</div>
<div className="">
<h3 className="text-xl font-normal text-[#2D2422] mb-2 tracking-tight">
                Wellness-Driven Approach
              </h3>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed">
                We focus on enhancing natural beauty with long-term skin health
                in mind.
              </p>
</div>
</div>

<div className="flex items-start gap-5 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#E6E0D8]/50 lg:border-none">
<div className="relative w-[70px] h-[48px] flex items-center shrink-0 mt-1">
<svg className="absolute inset-0 text-[#A47764]/40" fill="none" height="48" viewbox="0 0 70 48" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H52L68 24L52 47H1V1Z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-[3px] top-[3px] bottom-[3px] w-[42px] bg-[#A47764] rounded-sm flex items-center justify-center text-white text-xl font-extralight">
                6
              </div>
</div>
<div className="">
<h3 className="text-xl font-normal text-[#2D2422] mb-2 tracking-tight">
                Premium Experience
              </h3>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed">
                Enjoy a comfortable, private, and luxurious clinical
                environment.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden bg-[#EFEBE4]">
<img alt="Clinic Care" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c7fc7af-724b-4042-86d7-0a5a54076b63_1600w.jpg"/>
</div>

<div className="pl-0 lg:pl-12">
<span className="block text-xs uppercase tracking-widest text-[#A47764] mb-6">
            About Us
          </span>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-[#2D2422] mb-8 leading-[1.1]">
            Where Expertise Meets
            <span className="font-serif-italic text-[#A47764]">Aesthetics</span>
</h2>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed mb-6">
            At Aiconic Skin Clinic, we combine medical expertise with advanced
            aesthetic treatments to deliver visible, lasting results. From acne
            and pigmentation to hair loss and anti-aging, we provide
            personalized care designed around you.
          </p>
<p className="text-xl text-[#8C827A] font-extralight leading-relaxed mb-8">
            We are a modern dermatology and aesthetic center focused on
            delivering advanced, safe, and result-driven treatments. Our goal is
            to help you look and feel confident in your own skin.
          </p>
<ul className="space-y-4 text-xl text-[#2D2422] font-extralight mb-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#A47764]" icon="solar:check-circle-linear"></iconify-icon>
              Personalized treatment plans
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#A47764]" icon="solar:check-circle-linear"></iconify-icon>
              Evidence-based dermatology
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#A47764]" icon="solar:check-circle-linear"></iconify-icon>
              Natural-looking results
            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#A47764]" icon="solar:check-circle-linear"></iconify-icon>
              Patient-first approach
            </li>
</ul>
<a className="px-8 py-4 bg-transparent border border-[#A47764] text-[#A47764] text-lg rounded-full hover:bg-[#A47764] hover:text-white transition-colors inline-block" href="#appointment">
            Book Your Consultation
          </a>
</div>
</div>
</section>

<section className="px-6 lg:px-12 max-w-[1600px] mx-auto pb-20">
<div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 border border-[#E6E0D8]/50 shadow-xl shadow-[#A47764]/5">
<div className="text-center mb-16">
<span className="block text-xs uppercase tracking-widest text-[#A47764] mb-4">
            Our Legacy of Care
          </span>
<h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-[#2D2422]">
            Trusted by thousands,
            <span className="font-serif-italic text-[#A47764]">
              proven by results.
            </span>
</h2>
</div>
<div className="flex flex-wrap justify-center lg:grid lg:grid-cols-5 gap-y-12 lg:gap-y-0 gap-x-2 sm:gap-x-4 lg:gap-x-0 lg:divide-x lg:divide-[#E6E0D8]/60 pt-4 lg:pt-0">

<div className="w-[45%] md:w-[30%] lg:w-full text-center px-2 flex flex-col items-center group">
<div className="w-14 h-14 rounded-full bg-[#FAF8F5] text-[#A47764] flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform border border-[#E6E0D8]/50">
<iconify-icon className="text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="text-4xl xl:text-5xl font-extralight tracking-tight text-[#2D2422] mb-3">
              10,000+
            </div>
<div className="text-xs font-medium uppercase tracking-widest text-[#8C827A]">
              Satisfied Patients
            </div>
</div>

<div className="w-[45%] md:w-[30%] lg:w-full text-center px-2 flex flex-col items-center group">
<div className="w-14 h-14 rounded-full bg-[#FAF8F5] text-[#A47764] flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform border border-[#E6E0D8]/50">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="text-4xl xl:text-5xl font-extralight tracking-tight text-[#2D2422] mb-3">
              2,500+
            </div>
<div className="text-xs font-medium uppercase tracking-widest text-[#8C827A]">
              Aesthetic Procedures
            </div>
</div>

<div className="w-[45%] md:w-[30%] lg:w-full text-center px-2 flex flex-col items-center group">
<div className="w-14 h-14 rounded-full bg-[#FAF8F5] text-[#A47764] flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform border border-[#E6E0D8]/50">
<iconify-icon className="text-3xl" icon="solar:health-linear"></iconify-icon>
</div>
<div className="text-4xl xl:text-5xl font-extralight tracking-tight text-[#2D2422] mb-3">
              580+
            </div>
<div className="text-xs font-medium uppercase tracking-widest text-[#8C827A]">
              Skin Surgeries
            </div>
</div>

<div className="w-[45%] md:w-[30%] lg:w-full text-center px-2 flex flex-col items-center group">
<div className="w-14 h-14 rounded-full bg-[#FAF8F5] text-[#A47764] flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform border border-[#E6E0D8]/50">
<iconify-icon className="text-3xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div className="text-4xl xl:text-5xl font-extralight tracking-tight text-[#2D2422] mb-3">
              250+
            </div>
<div className="text-xs font-medium uppercase tracking-widest text-[#8C827A]">
              Happy Reviews
            </div>
</div>

<div className="w-[45%] md:w-[30%] lg:w-full text-center px-2 flex flex-col items-center group">
<div className="w-14 h-14 rounded-full bg-[#FAF8F5] text-[#A47764] flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform border border-[#E6E0D8]/50">
<iconify-icon className="text-3xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="text-4xl xl:text-5xl font-extralight tracking-tight text-[#2D2422] mb-3">
              100+
            </div>
<div className="text-xs font-medium uppercase tracking-widest text-[#8C827A]">
              Hair Transplants
            </div>
</div>
</div>
</div>
</section>

<section className="lg:pt-24 lg:pb-12 lg:px-12 max-w-[1600px] mr-auto ml-auto pt-16 pr-6 pb-8 pl-6">
<div className="flex gap-4 lg:gap-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 md:pb-8 -mx-6 px-6 lg:-mx-12 lg:px-12 scroll-smooth touch-pan-x cursor-grab active:cursor-grabbing" id="slider-emnx9udch0dxcges">

<div className="group relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-center rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl shadow-[#A47764]/5">
<img alt="Skin Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c7fc7af-724b-4042-86d7-0a5a54076b63_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<h3 className="text-3xl font-extralight text-white mb-3 tracking-tight">
      Skin Care
    </h3>
<p className="text-[#E6E0D8] font-extralight text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
      Advanced dermatology for healthy, radiant skin.
    </p>
</div>
</div>

<div className="group relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-center rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl shadow-[#A47764]/5">
<img alt="Hair Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34d9779b-f747-41f5-8bf8-db5157cd7517_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<h3 className="text-3xl font-extralight text-white mb-3 tracking-tight">
          Hair Treatments
        </h3>
<p className="text-[#E6E0D8] font-extralight text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          Expert solutions for restoration and growth.
        </p>
</div>
</div>

<div className="group relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-center rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl shadow-[#A47764]/5">
<img alt="Our Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8d0c80e-9792-4663-b72a-7ac89ad0767b_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<h3 className="text-3xl font-extralight text-white tracking-tight mb-3">
          Laser Hair Reduction
        </h3>
<p className="group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xl font-extralight text-[#E6E0D8] opacity-0">
          Safe, long-lasting hair removal for smooth, flawless skin.
        </p>
</div>
</div>

<div className="group relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-center rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl shadow-[#A47764]/5">
<img alt="Advanced Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6e8264d-dd56-4aca-961c-2a156c342ff1_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<h3 className="text-3xl font-extralight text-white tracking-tight mb-3">
          Advanced Aesthetics
        </h3>
<p className="group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xl font-extralight text-[#E6E0D8] opacity-0">
          State-of-the-art procedures tailored for natural beauty.
        </p>
</div>
</div>

<div className="group relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-center rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl shadow-[#A47764]/5">
<img alt="Anti-Aging Therapies" className="w-full h-full object-cover groupevents-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7dfe0d1-c247-41a2-b250-fac173dca5d9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<h3 className="text-3xl font-extralight text-white tracking-tight mb-3">
          Anti-Aging Therapies
        </h3>
<p className="group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xl font-extralight text-[#E6E0D8] opacity-0">
          Restore youthfulness and rejuvenate your skin's vitality.
        </p>
</div>
</div>
</div>

</section>

<section className="py-12 lg:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto" id="services">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="w-full lg:w-1/3">
<span className="block text-xs uppercase tracking-widest text-[#A47764] mb-4">
            Our Services
          </span>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-[#2D2422] leading-[1.2] mb-8">
            Discover
            <span className="font-serif-italic text-[#A47764]">Treatments</span>
<br/>
            Designed Around You
          </h2>
<div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-8">
<img alt="Treatment Process" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6e8264d-dd56-4aca-961c-2a156c342ff1_1600w.jpg"/>
<div className="absolute bottom-4 left-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
<img alt="Detail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_320w.jpg"/>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#A47764] text-lg border-b border-[#A47764] pb-1 hover:opacity-70 transition-opacity" href="#">
            All Services
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 content-start pt-4 lg:pt-0">
<div className="flex flex-col border-t border-[#E6E0D8]">
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                MediFacials
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Carbon Laser Peel
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Hydrafacial
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Hair Transplant
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all md:border-b-0">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Hair Booster Treatments
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col border-t border-[#E6E0D8]">
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Laser Hair Reduction
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Chemical Peel
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Acne Scar Treatment
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-[#E6E0D8] py-6 flex items-center justify-between cursor-pointer hover:border-[#A47764] transition-all border-b-0">
<h3 className="text-xl md:text-2xl font-extralight tracking-tight text-[#2D2422] group-hover:text-[#A47764] transition-colors">
                Laser Toning
              </h3>
<div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#A47764] flex items-center justify-center text-[#8C827A] group-hover:text-[#A47764] transition-all group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-32 max-w-[1550px] mx-auto overflow-hidden shadow-xl shadow-[#A47764]/5 border border-[#E6E0D8]/50 mt-12 lg:rounded-[3rem]">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16 md:mb-20">
<span className="block text-xs font-medium uppercase tracking-widest text-[#A47764] mb-4">
            Real Results
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[#2D2422]">
            See the transformation
          </h2>
</div>
<div className="relative w-full">
<div className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mb-8" id="carousel-track">

<div className="relative flex-none w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF8F5] group shadow-lg shadow-[#A47764]/5 border border-[#E6E0D8]/60 snap-center comparison-slider select-none">
<img alt="Skin After" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
<div className="absolute inset-0 w-full h-full z-10 before-wrapper pointer-events-none" style={{clipPath: 'inset(0px 46.1149% 0px 0px)'}}>
<img alt="Skin Before" className="absolute inset-0 w-full h-full object-cover object-center brightness-90 grayscale-[15%] pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
</div>
<div className="absolute inset-y-0 left-[50%] w-[2px] bg-white -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 handle-line cursor-ew-resize touch-none" style={{left: '53.8851%'}}>
<div className="-translate-x-1/2 -translate-y-1/2 md:w-12 md:h-12 flex transition-transform group-hover:scale-105 bg-white w-10 h-10 border-[#E6E0D8]/50 border rounded-full absolute top-1/2 left-1/2 shadow-xl items-center justify-center">
                  24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" class="lucide
                  lucide-arrow-left-right w-4 h-4 md:w-5 md:h-5
                  text-[#2D2422]"&gt;
                  <path d="M8 3 4 7l4 4">
<path d="M4 7h16">
<path d="m16 21 4-4-4-4"><path d="M20 17H4"></path></path>
</path>
</path>
</div>
</div>
<div className="absolute top-5 left-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs text-[#2D2422] uppercase tracking-widest font-medium shadow-sm border border-[#E6E0D8]/50">
                  Before
                </span>
</div>
<div className="absolute top-5 right-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-[#A47764] rounded-full text-xs text-white uppercase tracking-widest font-medium shadow-sm">
                  After
                </span>
</div>
</div>

<div className="relative flex-none w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF8F5] group shadow-lg shadow-[#A47764]/5 border border-[#E6E0D8]/60 snap-center comparison-slider select-none">
<img alt="Treatment After" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
<div className="absolute inset-0 w-full h-full z-10 before-wrapper pointer-events-none" style={{clipPath: 'inset(0 50% 0 0)'}}>
<img alt="Treatment Before" className="absolute inset-0 w-full h-full object-cover object-center brightness-90 grayscale-[15%] pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
</div>
<div className="absolute inset-y-0 left-[50%] w-[2px] bg-white -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 handle-line cursor-ew-resize touch-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#E6E0D8]/50 transition-transform group-hover:scale-105">
<svg className="lucide lucide-arrow-left-right w-4 h-4 md:w-5 md:h-5 text-[#2D2422]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path>
<path d="M4 7h16"></path>
<path d="m16 21 4-4-4-4"></path>
<path d="M20 17H4"></path>
</svg>
</div>
</div>
<div className="absolute top-5 left-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs text-[#2D2422] uppercase tracking-widest font-medium shadow-sm border border-[#E6E0D8]/50">
                  Before
                </span>
</div>
<div className="absolute top-5 right-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-[#A47764] rounded-full text-xs text-white uppercase tracking-widest font-medium shadow-sm">
                  After
                </span>
</div>
</div>

<div className="relative flex-none w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF8F5] group shadow-lg shadow-[#A47764]/5 border border-[#E6E0D8]/60 snap-center comparison-slider select-none">
<img alt="Procedure After" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
<div className="absolute inset-0 w-full h-full z-10 before-wrapper pointer-events-none" style={{clipPath: 'inset(0 50% 0 0)'}}>
<img alt="Procedure Before" className="absolute inset-0 w-full h-full object-cover object-center brightness-90 grayscale-[15%] pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
</div>
<div className="absolute inset-y-0 left-[50%] w-[2px] bg-white -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 handle-line cursor-ew-resize touch-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#E6E0D8]/50 transition-transform group-hover:scale-105">
<svg className="lucide lucide-arrow-left-right w-4 h-4 md:w-5 md:h-5 text-[#2D2422]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path>
<path d="M4 7h16"></path>
<path d="m16 21 4-4-4-4"></path>
<path d="M20 17H4"></path>
</svg>
</div>
</div>
<div className="absolute top-5 left-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs text-[#2D2422] uppercase tracking-widest font-medium shadow-sm border border-[#E6E0D8]/50">
                  Before
                </span>
</div>
<div className="absolute top-5 right-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-[#A47764] rounded-full text-xs text-white uppercase tracking-widest font-medium shadow-sm">
                  After
                </span>
</div>
</div>

<div className="relative flex-none w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF8F5] group shadow-lg shadow-[#A47764]/5 border border-[#E6E0D8]/60 snap-center comparison-slider select-none">
<img alt="Treatment After" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_1600w.jpg"/>
<div className="absolute inset-0 w-full h-full z-10 before-wrapper pointer-events-none" style={{clipPath: 'inset(0 50% 0 0)'}}>
<img alt="Treatment Before" className="absolute inset-0 w-full h-full object-cover object-center brightness-90 grayscale-[15%] pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-y-0 left-[50%] w-[2px] bg-white -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 handle-line cursor-ew-resize touch-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#E6E0D8]/50 transition-transform group-hover:scale-105">
<svg className="lucide lucide-arrow-left-right w-4 h-4 md:w-5 md:h-5 text-[#2D2422]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path>
<path d="M4 7h16"></path>
<path d="m16 21 4-4-4-4"></path>
<path d="M20 17H4"></path>
</svg>
</div>
</div>
<div className="absolute top-5 left-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs text-[#2D2422] uppercase tracking-widest font-medium shadow-sm border border-[#E6E0D8]/50">
                  Before
                </span>
</div>
<div className="absolute top-5 right-5 z-20 pointer-events-none">
<span className="px-4 py-2 bg-[#A47764] rounded-full text-xs text-white uppercase tracking-widest font-medium shadow-sm">
                  After
                </span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-8">
<button className="w-12 h-12 rounded-full border border-[#E6E0D8] flex items-center justify-center text-[#2D2422] hover:bg-[#FAF8F5] hover:border-[#A47764]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#A47764]/20 shadow-sm bg-white" id="carousel-prev">
<svg className="lucide lucide-chevron-left w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="flex items-center gap-3">
<button aria-label="Slide 1" className="carousel-dot w-8 h-2.5 rounded-full bg-[#A47764] transition-all duration-300 focus:outline-none"></button>
<button aria-label="Slide 2" className="carousel-dot w-2.5 h-2.5 rounded-full bg-[#E6E0D8] hover:bg-[#A47764]/50 transition-all duration-300 focus:outline-none"></button>
<button aria-label="Slide 3" className="carousel-dot w-2.5 h-2.5 rounded-full bg-[#E6E0D8] hover:bg-[#A47764]/50 transition-all duration-300 focus:outline-none"></button>
<button aria-label="Slide 4" className="carousel-dot w-2.5 h-2.5 rounded-full bg-[#E6E0D8] hover:bg-[#A47764]/50 transition-all duration-300 focus:outline-none"></button>
</div>
<button className="w-12 h-12 rounded-full border border-[#E6E0D8] flex items-center justify-center text-[#2D2422] hover:bg-[#FAF8F5] hover:border-[#A47764]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#A47764]/20 shadow-sm bg-white" id="carousel-next">
<svg className="lucide lucide-chevron-right w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</section>

<section className="lg:px-12 max-w-[1600px] mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center mb-16 md:mb-20">
<span className="block text-xs font-medium uppercase tracking-widest text-[#A47764] mb-4">
          Expert Advice &amp; Insights
        </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-[#2D2422]">
          Latest on
          <span className="font-serif-italic text-[#A47764]">Instagram</span>
</h2>
</div>
<div className="flex lg:grid lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar pb-6 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
<a className="group relative flex-none w-[75vw] sm:w-[45vw] lg:w-auto snap-center aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl shadow-[#A47764]/5 bg-[#FAF8F5] block border border-[#E6E0D8]/60" href="https://instagram.com" target="_blank">
<img alt="Instagram Reel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cac373d-5ca4-4d4d-ba1f-142f5c5ecc73_800w.png"/>
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white z-10">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
                @dr.namrata.md
              </span>
</div>
<p className="text-sm font-extralight line-clamp-2 leading-relaxed opacity-90">
              5 tips for achieving that natural, glowing skin this summer! ☀️✨
            </p>
</div>
</a>
<a className="group relative flex-none w-[75vw] sm:w-[45vw] lg:w-auto snap-center aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl shadow-[#A47764]/5 bg-[#FAF8F5] block border border-[#E6E0D8]/60" href="https://instagram.com" target="_blank">
<img alt="Instagram Reel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53498ac7-853d-4234-b334-83248555635c_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white z-10">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
                @dr.namrata.md
              </span>
</div>
<p className="text-sm font-extralight line-clamp-2 leading-relaxed opacity-90">
              Understanding the real science behind laser hair reduction.
            </p>
</div>
</a>
<a className="group relative flex-none w-[75vw] sm:w-[45vw] lg:w-auto snap-center aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl shadow-[#A47764]/5 bg-[#FAF8F5] block border border-[#E6E0D8]/60" href="https://instagram.com" target="_blank">
<img alt="Instagram Reel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/faf1511d-fe4d-4a8a-99dd-18253367688a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white z-10">
<div className="flex gap-2 mb-3 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
                @dr.namrata.md
              </span>
</div>
<p className="text-sm font-extralight line-clamp-2 leading-relaxed opacity-90">
              A sneak peek into our luxury medi-facials at the clinic.
            </p>
</div>
</a>
<a className="group relative flex-none w-[75vw] sm:w-[45vw] lg:w-auto snap-center aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl shadow-[#A47764]/5 bg-[#FAF8F5] block border border-[#E6E0D8]/60" href="https://instagram.com" target="_blank">
<img alt="Instagram Reel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1a25ff8-8980-469c-b0c0-f1c8a331f4a8_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2422]/90 via-[#2D2422]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white z-10">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
                @dr.namrata.md
              </span>
</div>
<p className="text-sm font-extralight line-clamp-2 leading-relaxed opacity-90">
              Debunking common skincare myths! Watch till the end.
            </p>
</div>
</a>
</div>
<div className="flex mt-16 justify-center">
<a className="hover:border-[#A47764] hover:text-[#A47764] transition-colors flex items-center gap-3 text-lg text-[#2D2422] bg-transparent border-[#E6E0D8] border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm" href="https://instagram.com" target="_blank">
          Follow @dr.namrata.md
        </a>
</div>
</section>
<section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
<div className="relative w-full min-h-[60vh] py-16 md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#A47764] flex items-center">
<img alt="Skin Results" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff6147ea-d992-4641-b3eb-74868f46056e_3840w.webp"/>
<div className="md:px-16 flex flex-col w-full h-full z-10 pr-8 pl-8 relative justify-center">
<h2 className="md:text-7xl lg:text-[6rem] leading-tight text-4xl text-white tracking-tight font-extralight mb-8">
            Real Results,
            <br/>
<span className="font-serif-italic opacity-90 pl-12 md:pl-32">
              Real Stories
            </span>
</h2>

<div className="flex items-center gap-4 mb-12">
<button className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#A47764] hover:scale-105 transition-transform shadow-xl">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</button>
<span className="text-white text-lg font-extralight tracking-wide">
              Watch Video Testimonials
            </span>
</div>

<div className="max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white self-start md:self-end mt-8 md:-mt-32">
<div className="flex gap-1 mb-4 text-[#E6E0D8]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl font-extralight leading-relaxed mb-4">
              “After struggling with acne and pigmentation, I finally saw real
              results. My skin is glowing now!”
            </p>
<p className="text-base uppercase tracking-widest opacity-80">
              — Verified Patient
            </p>
</div>
</div>

<div className="absolute inset-y-0 right-12 md:right-1/4 hidden lg:flex flex-col items-center justify-center gap-4 z-20">
<div className="text-white text-sm uppercase tracking-widest">Before</div>
<div className="w-[1px] h-32 bg-white/30 relative">
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A47764] shadow-lg cursor-ew-resize">
<iconify-icon className="text-xl" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="text-white text-sm uppercase tracking-widest">After</div>
</div>
</div>
</section>

<section className="py-16 lg:py-32 px-6 overflow-hidden bg-white mt-4 rounded-[2rem] md:rounded-[3rem] max-w-[1550px] mx-auto border border-[#E6E0D8]/50 shadow-sm mx-4 md:mx-auto">
<div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-serif-italic tracking-tight text-[#2D2422] leading-[1.6]">
          Start your
          <span className="inline-block w-24 md:w-32 h-12 md:h-16 rounded-full overflow-hidden align-middle mx-2 border-2 border-[#FAF8F5] shadow-sm">
<img alt="Skin" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/faf1511d-fe4d-4a8a-99dd-18253367688a_320w.jpg"/>
</span>
          transformation today
          <br/>
          with expert
          <span className="inline-block w-20 md:w-28 h-12 md:h-16 rounded-full overflow-hidden align-middle mx-2 border-2 border-[#FAF8F5] shadow-sm">
<img alt="Care" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53498ac7-853d-4234-b334-83248555635c_320w.png"/>
</span>
<span className="font-sans font-extralight">dermatology</span>
          care.
        </h2>
<a className="mt-12 px-10 py-5 bg-[#A47764] text-white text-lg rounded-full hover:bg-[#906858] transition-colors inline-block shadow-xl shadow-[#A47764]/20" href="#appointment">
          👉 Book Your Consultation Now
        </a>
</div>
</section>

<footer className="bg-[#3B2D26] text-[#E6E0D8] pt-16 lg:pt-24 pb-12 px-6 lg:px-12 mt-12 rounded-t-[2rem] lg:rounded-t-[3rem]">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 border-b border-[#E6E0D8]/10 pb-20">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-7xl font-extralight tracking-tight text-white leading-tight mb-4">
              Glow Naturally
              <br/>
<span className="font-serif-italic pl-12 md:pl-24 text-[#C09581]">
                Age Gracefully
              </span>
</h2>
</div>
<div className="w-full lg:w-auto">
<h4 className="text-sm uppercase tracking-widest text-[#C09581] mb-6">
              Subscribe To Newsletter
            </h4>
<div className="flex border-b border-[#E6E0D8]/30 pb-2 max-w-sm">
<input className="bg-transparent w-full focus:outline-none text-white text-lg placeholder:text-[#E6E0D8]/50 font-extralight" placeholder="Your email address" type="email"/>
<button className="text-[#C09581] hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-xl font-extralight">
<div className="">
<a className="text-3xl font-light tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 bg-[#C09581] rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#3B2D26] rounded-full"></div>
</span>
              Aiconic Clinic
            </a>
<p className="text-[#E6E0D8]/70 max-w-xs">
              Your sanctuary for advanced skincare and timeless beauty.
            </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm uppercase tracking-widest text-[#C09581] font-light mb-2">
              Explore
            </h4>
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#services">
              Services
            </a>
<a className="hover:text-white transition-colors" href="#about">
              About Us
            </a>
<a className="hover:text-white transition-colors" href="#appointment">
              Book Appointment
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm uppercase tracking-widest text-[#C09581] font-light mb-2">
              Clinic Timings
            </h4>
<p className="text-[#E6E0D8]/70">
              Tue–Fri: 11:30 AM – 8:30 PM
              <br/>
              Sat–Sun: 11:30 AM – 8:00 PM
              <br/>
              Monday: Closed
            </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm uppercase tracking-widest text-[#C09581] font-light mb-2">
              Contact Us
            </h4>
<p className="text-[#E6E0D8]/70">
              HSR Layout
              <br/>
              Bangalore
            </p>
<a className="hover:text-white transition-colors pt-2" href="tel:+919901864404">
              +91-9901864404
            </a>
<a className="hover:text-white transition-colors" href="https://wa.me/919901864404" target="_blank">
              WhatsApp Us
            </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E6E0D8]/10 text-sm text-[#E6E0D8]/50 font-extralight">
<p>© 2024 Aiconic Skin Clinic. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:facebook"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:twitter"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
