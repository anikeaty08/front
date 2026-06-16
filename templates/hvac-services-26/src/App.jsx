import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                            (function() {
                                const track = document.getElementById('track-aura-emj4nn0f51vxr8s33');
                                const prevBtn = document.getElementById('prev-aura-emj4nn0f51vxr8s33');
                                const nextBtn = document.getElementById('next-aura-emj4nn0f51vxr8s33');
                                const indicators = track.parentNode.querySelectorAll('.indicator-dot');
                                const totalSlides = 4;
                                let currentIndex = 0;
                                let slideInterval;

                                function updateSlide() {
                                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                                    indicators.forEach((dot, index) => {
                                        if (index === currentIndex) {
                                            dot.className = 'indicator-dot h-1.5 rounded-full bg-white transition-all duration-500 w-6 shadow-sm';
                                        } else {
                                            dot.className = 'indicator-dot h-1.5 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-500 w-1.5 shadow-sm cursor-pointer';
                                        }
                                    });
                                }

                                function nextSlide() {
                                    currentIndex = (currentIndex + 1) % totalSlides;
                                    updateSlide();
                                }

                                function prevSlide() {
                                    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                                    updateSlide();
                                }

                                function startTimer() {
                                    stopTimer();
                                    slideInterval = setInterval(nextSlide, 5000);
                                }

                                function stopTimer() {
                                    if (slideInterval) clearInterval(slideInterval);
                                }

                                // Event Listeners
                                nextBtn.addEventListener('click', (e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                    startTimer();
                                });

                                prevBtn.addEventListener('click', (e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                    startTimer();
                                });
                                
                                indicators.forEach((dot, index) => {
                                    dot.addEventListener('click', (e) => {
                                        e.stopPropagation();
                                        currentIndex = index;
                                        updateSlide();
                                        startTimer();
                                    });
                                });

                                // Pause on hover
                                const container = track.parentNode;
                                container.addEventListener('mouseenter', stopTimer);
                                container.addEventListener('mouseleave', startTimer);
                                
                                // Touch Swipe Support
                                let touchStartX = 0;
                                container.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, {passive: true});
                                container.addEventListener('touchend', e => {
                                    const touchEndX = e.changedTouches[0].screenX;
                                    if (touchStartX - touchEndX > 50) { nextSlide(); startTimer(); }
                                    if (touchEndX - touchStartX > 50) { prevSlide(); startTimer(); }
                                }, {passive: true});

                                // Init
                                startTimer();
                            })();
                        


        lucide.createIcons();

        // Mobile Menu Toggle Script
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed flex z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center">
<nav className="relative flex items-center gap-1 p-2 pl-3 sm:pl-6 pr-2 bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl sm:rounded-full ring-1 ring-slate-900/5 max-w-4xl w-full justify-between transition-all duration-300 hover:shadow-md">

<div className="flex items-center gap-3">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-blue-50 p-1.5 rounded-full text-blue-600 group-hover:bg-blue-100 transition-colors">
<svg className="lucide lucide-snowflake w-5 h-5" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<span className="cursor-pointer text-lg font-medium text-slate-900 tracking-tight">Klimca.si</span>
</a>
</div>

<div className="hidden md:flex items-center gap-1">

<div className="relative group">
<button className="flex items-center gap-1 hover:text-slate-900 hover:bg-slate-100/50 transition-all text-sm font-medium text-slate-600 rounded-full py-2 px-4 cursor-pointer">
                        Storitve
                        <svg className="opacity-50 group-hover:rotate-180 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-1 group-hover:visible">
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Montaža klim</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Prodaja naprav</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Servis &amp; Vzdrževanje</a>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-1 hover:text-slate-900 hover:bg-slate-100/50 transition-all text-sm font-medium text-slate-600 rounded-full py-2 px-4 cursor-pointer">
                        O nas
                        <svg className="opacity-50 group-hover:rotate-180 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-1 group-hover:visible">
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Ekipa</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Vizija</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Kontakt</a>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-1 hover:text-slate-900 hover:bg-slate-100/50 transition-all text-sm font-medium text-slate-600 rounded-full py-2 px-4 cursor-pointer">
                        Cenik
                        <svg className="opacity-50 group-hover:rotate-180 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-1 group-hover:visible">
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Cenik storitev</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors" href="#">Akcijska ponudba</a>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">
<svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">01 234 5678</span>
</div>

<button className="md:hidden p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors" id="mobile-toggle">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line className="" x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
<a className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm shadow-blue-200" href="#kontakt">
<span className="">Naroči servis</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<div className="hidden absolute top-full left-4 right-4 mt-2 p-2 bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl ring-1 ring-slate-900/5 origin-top transition-all duration-200" id="mobile-menu">
<div className="flex flex-col gap-1 p-2">

<div className="space-y-1">
<div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Storitve</div>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Montaža klim</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Prodaja naprav</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Servis</a>
</div>
<div className="h-px bg-slate-100 my-1"></div>

<div className="space-y-1">
<div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">O nas</div>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Ekipa</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Podjetje</a>
</div>
<div className="h-px bg-slate-100 my-1"></div>

<div className="space-y-1">
<div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Cenik</div>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Cenik storitev</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors" href="#">Akcije</a>
</div>

<a className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-medium" href="#kontakt">
                    Naroči servis
                </a>
</div>
</div>
</div>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-28 pb-18 relative">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-white"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
<div className="text-center max-w-6xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Hitra intervencija v 24 urah
            </div>

<h1 className="leading-[1.1] md:text-7xl text-4xl font-medium text-slate-900 tracking-tight max-w-4xl mr-auto mb-8 ml-auto">Ste pripravljeni na svežino? Ne čakajte na vročino</h1>

<p className="md:text-2xl leading-relaxed text-xl font-light text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">Strokovna montaža, hiter servis in prodaja vrhunskih klimatskih naprav. Poskrbimo za udobje v vašem domu ali pisarni, po vaših željah.</p>

<div className="flex flex-col sm:flex-row mb-20 gap-x-4 gap-y-4 items-center justify-center">
<button className="sm:w-auto hover:bg-slate-800 transition-all flex gap-2 shadow-slate-200 hover:-translate-y-1 cursor-pointer font-medium text-white bg-slate-900 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/';window.location.href='/kontakt'" role="button">
                            Brezplačen ogled
                            <svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="sm:w-auto hover:bg-slate-50 hover:border-slate-300 transition-all flex gap-2 hover:-translate-y-1 font-medium text-slate-700 bg-white w-full border-slate-200 border rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">
                            Izračun ponudbe
                            <svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</button>
</div>

<div className="relative max-w-5xl mx-auto mt-12">
<div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
<div className="relative bg-gradient-to-b from-white to-blue-50 rounded-3xl border border-white/60 shadow-2xl shadow-blue-900/10 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">

<div className="overflow-hidden group/slider select-none w-full h-full rounded-[inherit] relative">

<div className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform" id="track-aura-emj4nn0f51vxr8s33" style={{transform: 'translateX(-300%)'}}>

<div className="min-w-full w-full h-full relative flex items-center justify-center overflow-hidden">
<img alt="Moderna klimatska naprava" className="w-full h-full object-cover opacity-90 group-hover/slider:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7ee86e8-cbac-43d2-8cbd-24534c62c07d_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="min-w-full w-full h-full relative flex items-center justify-center overflow-hidden">
<img alt="Clean Air Abstract" className="w-full h-full object-cover opacity-90 group-hover/slider:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="group-hover/slider:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 scale-100"></div>
</div>

<div className="min-w-full w-full h-full relative flex items-center justify-center overflow-hidden">
<img alt="Glass Architecture" className="w-full h-full object-cover opacity-90 group-hover/slider:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="min-w-full w-full h-full relative flex items-center justify-center overflow-hidden">
<img alt="Fluid Design" className="w-full h-full object-cover opacity-90 group-hover/slider:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="group-hover/slider:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

<button aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white/25 hover:scale-110 focus:outline-none z-20 -translate-x-4 group-hover/slider:translate-x-0 cursor-pointer shadow-lg shadow-black/5" id="prev-aura-emj4nn0f51vxr8s33">
<svg className="lucide lucide-chevron-left -ml-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next slide" className="-translate-y-1/2 flex group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white/25 hover:scale-110 focus:outline-none z-20 group-hover/slider:translate-x-0 cursor-pointer shadow-black/5 text-white bg-white/10 opacity-0 w-10 h-10 border-white/20 border rounded-full absolute top-1/2 right-4 shadow-lg backdrop-blur-md translate-x-4 items-center justify-center" id="next-aura-emj4nn0f51vxr8s33">
<svg className="lucide lucide-chevron-right w-[20px] h-[20px] ml-0.5" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="-translate-x-1/2 flex gap-1.5 z-20 rounded-full pt-2 pr-2 pb-2 pl-2 absolute bottom-6 left-1/2 translate-y-6 gap-x-1.5 gap-y-1.5">
<div className="indicator-dot h-1.5 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-500 w-1.5 shadow-sm cursor-pointer"></div>
<div className="indicator-dot h-1.5 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-500 w-1.5 shadow-sm cursor-pointer"></div>
<div className="indicator-dot h-1.5 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-500 w-1.5 shadow-sm cursor-pointer"></div>
<div className="indicator-dot h-1.5 rounded-full bg-white transition-all duration-500 w-6 shadow-sm"></div>
</div>

</div>

<div className="md:bottom-10 md:left-10 flex gap-4 -translate-x-6 -translate-y-4 -translate-x-16 -translate-y-16 -translate-x-12 bg-white/90 max-w-xs max-h-none border-white/50 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute bottom-6 left-6 backdrop-blur-lg translate-y-8 scale-75 gap-x-4 gap-y-4 items-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 75%, transparent)'}}>
<div className="bg-green-100 p-2.5 rounded-full text-green-600">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">100% Garancija</p>
<p className="text-xs text-slate-500">Na montažo in naprave</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-slate-50 pt-14 pb-14" id="storitve">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row mb-12 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight text-center mr-4 ml-4 pt-4 pb-4">Celovite rešitve za hlajenje</h2>
<p className="text-lg text-slate-500 text-center max-w-xl mx-4">Od svetovanja pri nakupu do rednega vzdrževanja. Vse na enem mestu.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-wrench w-6 h-6" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 rounded-xl mb-3">Montaža klim</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        Strokovna in čista montaža vseh vrst klimatskih naprav. Poskrbimo za vsa gradbena in inštalacijska dela.
                    </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Ogled na domu
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hitra izvedba
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-bl-2xl">Priporočamo</div>
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Prodaja naprav</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        Zastopamo priznane blagovne znamke (Daikin, Mitsubishi, Toshiba). Svetujemo pri izbiri optimalne moči.
                    </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Konkurenčne cene
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Energetsko varčne
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Servis in vzdrževanje</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        Redni letni servisi, polnjenje plina in dezinfekcija. Podaljšajte življenjsko dobo vaše naprave.
                    </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Čiščenje filtrov
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dezinfekcija
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white overflow-hidden border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Pooblaščeni prodajalec in serviser za</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
<span className="text-2xl font-bold text-slate-800 tracking-tighter">MITSUBISHI</span>
<span className="text-2xl font-bold text-slate-800 italic">DAIKIN</span>
<span className="text-2xl font-bold text-slate-800 tracking-wide">TOSHIBA</span>
<span className="text-2xl font-bold text-slate-800">GREE</span>
<span className="text-2xl font-bold text-slate-800 italic tracking-tighter">SAMSUNG</span>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Pripravljeni na svežino?</h2>
<p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                    Ne čakajte na vročino. Zagotovite si termin za ogled ali servis že danes. Naš svetovalec vas bo kontaktiral v najkrajšem času.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2">
                        Pokličite nas
                        <svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
<button className="px-8 py-4 bg-blue-700 text-white border border-blue-500 rounded-full font-medium hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                        Pošljite povpraševanje
                        <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-blue-50 p-1.5 rounded-full text-blue-600">
<svg className="lucide lucide-snowflake w-5 h-5" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<span className="text-lg font-medium text-slate-900 tracking-tight">Klimca.si</span>
</div>
<p className="text-lg text-slate-500 max-w-sm mb-6">
                        Vaš zanesljiv partner za klimatizacijo. Zaupajte strokovnjakom z večletnimi izkušnjami.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-6">Podjetje</h4>
<ul className="space-y-4">
<li className=""><a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">O nas</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">Ekipa</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-6">Storitve</h4>
<ul className="space-y-4">
<li><a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">Montaža klim</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">Servis in popravila</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2025 Klimca.si. Vse pravice pridržane.</p>
<div className="flex gap-8">
<a className="text-sm text-slate-400 hover:text-slate-600" href="#">Zasebnost</a>
<a className="text-sm text-slate-400 hover:text-slate-600" href="#">Pogoji uporabe</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
