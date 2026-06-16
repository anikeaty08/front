import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#00205B', // Deep Blue
gold: '#FFB700', // Gold/Yellow (Corrected from typo)
light: '#F8FAFC',
}
}
}
}
}



              (function () {
                                    const containerId = 'swiper-container-unique-emk3tk';
                                    let swiperInstance = null;
                                
                                    function initCarousel() {
                                        // 【修复2】正确获取 DOM 元素
                                        const container = document.getElementById(containerId);
                                        if (!container) return; // 安全检查

                                        // 获取按钮（在 container 内部查找，防止冲突）
                                        const nextBtn = container.querySelector('.news-next');
                                        const prevBtn = container.querySelector('.news-prev');
                                
                                        swiperInstance = new Swiper(container, {
                                            loop: true,
                                            speed: 800,
                                            autoplay: {
                                                delay: 6000,
                                                disableOnInteraction: false
                                            },
                                            navigation: {
                                                nextEl: nextBtn, // 传入获取到的元素
                                                prevEl: prevBtn
                                            },
                                            observer: true,
                                            observeParents: true,
                                            on: {
                                                init() {
                                                    if (window.lucide) {
                                                        lucide.createIcons();
                                                    }
                                                }
                                            }
                                        });
                                
                                        container.addEventListener('mouseenter', () => {
                                            swiperInstance?.autoplay?.stop();
                                        });
                                
                                        container.addEventListener('mouseleave', () => {
                                            swiperInstance?.autoplay?.start();
                                        });
                                    }
                                
                                    if (document.readyState === 'loading') {
                                        document.addEventListener('DOMContentLoaded', initCarousel);
                                    } else {
                                        initCarousel();
                                    }
                                })();
            


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky z-50 text-white w-full top-0 shadow-md bg-[#003c73]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<img alt="Changzhou Vocational Institute of Mechatronic Technology" className="w-[230px] h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/177b4147-9418-4f61-83f7-b89a285f6ee5_800w.png"/>
<nav className="hidden md:flex space-x-6">
<a className="hover:text-brand-gold transition-colors font-medium text-white" href="#">Home</a>
<a className="hover:text-brand-gold transition-colors font-medium text-gray-300" href="#">Global Exchange</a>
<a className="hover:text-brand-gold transition-colors font-medium text-gray-300" href="#">Study in China </a>
<a className="hover:text-brand-gold transition-colors font-medium text-gray-300" href="#">School Advantages</a>
<a className="hover:text-brand-gold transition-colors font-medium text-gray-300" href="#">School Life</a>
<a className="text-gray-300 hover:text-brand-gold transition-colors font-medium" href="#">Regulations</a>
</nav>
<div className="flex space-x-5 items-center">
<div className="hidden sm:flex items-center justify-center cursor-pointer text-white hover:text-brand-gold transition-colors">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<span className="h-4 w-px bg-white/20 hidden sm:block"></span>
<button className="flex items-center gap-2 text-sm font-medium hover:text-brand-gold transition-colors">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="">English</span>
</button>
</div>
</div>
</div>
</header>
<section className="relative w-full h-[600px] bg-slate-200 overflow-hidden group">
<img alt="University Campus" className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full z-20">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10 border-t border-white/10">
<a className="group/item bg-[#003C73]/60 hover:bg-brand-gold transition-all duration-300 flex flex-col items-center justify-center text-center h-32 pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-sm" href="#">
<svg className="lucide lucide-plane w-8 h-8 text-brand-gold mb-3 group-hover/item:text-brand-blue transition-colors" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="group-hover/item:text-brand-blue font-medium text-white">Global Exchange Programs</span>
</a>
<a className="group/item bg-[#003C73]/60 hover:bg-brand-gold transition-all duration-300 flex flex-col items-center justify-center text-center h-32 pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-sm" href="#">
<svg className="lucide lucide-file-check-2 w-8 h-8 text-brand-gold mb-3 group-hover/item:text-brand-blue transition-colors" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg>
<span className="text-white font-medium group-hover/item:text-brand-blue">Study In China Application</span>
</a>
<a className="group/item bg-[#003C73]/60 hover:bg-brand-gold transition-all duration-300 flex flex-col items-center justify-center text-center h-32 pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-sm" href="#">
<svg className="lucide lucide-globe-2 w-8 h-8 text-brand-gold mb-3 group-hover/item:text-brand-blue transition-colors" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-white font-medium group-hover/item:text-brand-blue">Intemational Cooperation</span>
</a>
<a className="group/item hover:bg-brand-gold transition-all duration-300 flex flex-col items-center justify-center text-center bg-[#003C73]/60 h-32 pt-4 pr-2 pb-4 pl-2 relative backdrop-blur-sm" href="#">
<svg className="lucide lucide-users w-8 h-8 text-brand-gold mb-3 group-hover/item:text-brand-blue transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="group-hover/item:text-brand-blue font-medium text-white">Intemational Student Services</span>
</a>
<a className="group/item bg-[#003C73]/60 hover:bg-brand-gold transition-all duration-300 flex flex-col items-center justify-center text-center h-32 pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-sm" href="#">
<svg className="lucide lucide-briefcase w-8 h-8 text-brand-gold mb-3 group-hover/item:text-brand-blue transition-colors" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="group-hover/item:text-brand-blue font-medium text-white">Talent Recruitment</span>
</a>
</div>
</div>
</div>
</section>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-8">
<div className="flex border-gray-200 border-b mb-8 pb-4 items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-brand-blue">News Focus</h2>
<a className="text-sm font-medium text-gray-500 hover:text-brand-blue flex items-center gap-1" href="#">
          View All <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto">
<div className="group cursor-pointer h-full">
<div className="overflow-hidden w-full h-full min-h-[400px] rounded-md relative shadow-sm">
<div className="swiper news-swiper w-full h-full relative swiper-initialized swiper-horizontal swiper-backface-hidden" id="swiper-container-unique-emk3tk">
<div aria-live="off" className="swiper-wrapper h-full" id="swiper-wrapper-824d8f7bfdf0aafa" style={{transitionDuration: '800ms', transform: 'translate3d(-383px, 0px, 0px)'}}>
<div aria-label="1 / 3" className="swiper-slide overflow-hidden w-full h-full relative bg-gray-900" data-swiper-slide-index="0" role="group" style={{width: '383px'}}>
<img alt="Oxford Delegation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pt-12">
<span className="inline-block px-2 py-0.5 rounded bg-brand-gold/90 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-2">News Focus</span>
<p className="text-white font-medium text-lg leading-snug tracking-tight max-w-lg">
                      Delegation from Oxford University Visits Campus for Bilateral Talks</p>
</div>
</div>
<div aria-label="2 / 3" className="swiper-slide overflow-hidden w-full h-full relative bg-gray-900" data-swiper-slide-index="1" role="group" style={{width: '383px'}}>
<img alt="TUM Partnership" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=2160&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pt-12">
<span className="inline-block px-2 py-0.5 rounded bg-brand-gold/90 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-2">Global Partnership</span>
<p className="text-white font-medium text-lg leading-snug tracking-tight max-w-lg">
                      International Strategic Partnership Signed with Technical University of
                      Munich</p>
</div>
</div>
<div aria-label="3 / 3" className="swiper-slide w-full h-full relative overflow-hidden bg-gray-900" data-swiper-slide-index="2" role="group" style={{width: '383px'}}>
<img alt="Scholarships" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pt-12">
<span className="inline-block px-2 py-0.5 rounded bg-brand-gold/90 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-2">Academic</span>
<p className="text-white font-medium text-lg leading-snug tracking-tight max-w-lg">
                      New Scholarship Opportunities for Spring 2025 Announced</p>
</div>
</div>
</div>
<button aria-controls="swiper-wrapper-824d8f7bfdf0aafa" aria-label="Previous slide" className="news-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-brand-blue hover:scale-110 focus:outline-none" tabindex="0">
<svg className="lucide lucide-chevron-left w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-controls="swiper-wrapper-824d8f7bfdf0aafa" aria-label="Next slide" className="news-next absolute right-4 top-1/2 z-20 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-brand-blue hover:scale-110 focus:outline-none" tabindex="0">
<svg className="lucide lucide-chevron-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span></div>


</div>
</div>
<div className="flex flex-col h-full space-y-6">
<div className="flex gap-4 group cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 bg-brand-gold flex flex-col items-center justify-center rounded text-brand-blue shadow-sm">
<span className="text-xs font-medium uppercase">Dec</span>
<span className="text-xl font-semibold leading-none tracking-tight">24</span>
</div>
<div className="">
<h3 className="font-normal text-brand-blue group-hover:text-brand-gold transition-colors leading-tight mb-1">
                International Strategic Partnership Signed with Technical University of Munich
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                A landmark agreement was reached today to foster joint research initiatives in
                engineering...
              </p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 bg-brand-gold flex flex-col items-center justify-center rounded text-brand-blue shadow-sm">
<span className="text-xs font-medium uppercase">Dec</span>
<span className="text-xl font-semibold leading-none tracking-tight">16</span>
</div>
<div className="">
<h3 className="font-normal text-brand-blue group-hover:text-brand-gold transition-colors leading-tight mb-1">
                Annual Cultural Exchange Festival Celebrates Diversity
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                Students from over 30 countries gathered at the Student Center to showcase their
                heritage...
              </p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 bg-brand-gold flex flex-col items-center justify-center rounded text-brand-blue shadow-sm">
<span className="text-xs font-medium uppercase">Dec</span>
<span className="text-xl font-semibold leading-none tracking-tight">10</span>
</div>
<div className="">
<h3 className="font-normal text-brand-blue group-hover:text-brand-gold transition-colors leading-tight mb-1">
                New Scholarship Opportunities for Spring 2025 Announced
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                The International Office has released details regarding the new merit-based
                scholarships...
              </p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="flex-shrink-0 w-14 h-14 bg-brand-gold flex flex-col items-center justify-center rounded text-brand-blue shadow-sm">
<span className="text-xs font-medium uppercase">Dec</span>
<span className="text-xl font-semibold leading-none tracking-tight">05</span>
</div>
<div className="">
<h3 className="font-normal text-brand-blue group-hover:text-brand-gold transition-colors leading-tight mb-1">
                Guest Lecture Series: Future of Mechatronics in Industry 4.0
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                Renowned industry experts discussed the evolving landscape of automation and the
                skills required for
                the next generation...
              </p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4">
<div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
<h2 className="text-2xl font-semibold tracking-tight text-brand-blue">Announcements</h2>
<a className="text-sm font-medium text-gray-500 hover:text-brand-blue flex items-center gap-1" href="#">
          More <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<ul className="space-y-4">
<li className="group cursor-pointer border-b border-gray-100 pb-3 last:border-0">
<span className="text-xs font-medium text-brand-gold mb-1 block">2024-12-29</span>
<p className="text-base text-gray-700 font-medium group-hover:text-brand-blue transition-colors leading-snug">
            Notice regarding 2026 Spring Semester Exchange Program Applications
          </p>
</li>
<li className="group cursor-pointer border-b border-gray-100 pb-3 last:border-0">
<span className="text-xs font-medium text-brand-gold mb-1 block">2024-12-26</span>
<p className="text-base text-gray-700 font-medium group-hover:text-brand-blue transition-colors leading-snug">
            Results of the 2025 International Faculty Selection Committee
          </p>
</li>
<li className="group cursor-pointer border-b border-gray-100 pb-3 last:border-0">
<span className="text-xs font-medium text-brand-gold mb-1 block">2024-12-25</span>
<p className="text-base text-gray-700 font-medium group-hover:text-brand-blue transition-colors leading-snug">
            Guidelines for Visa Renewal During Winter Break 2024
          </p>
</li>
<li className="group cursor-pointer border-b border-gray-100 pb-3 last:border-0">
<span className="text-xs font-medium text-brand-gold mb-1 block">2024-12-24</span>
<p className="text-base text-gray-700 font-medium group-hover:text-brand-blue transition-colors leading-snug">
            Invitation to the Joint Academic Symposium on Green Energy
          </p>
</li>
<li className="group cursor-pointer border-b border-gray-100 pb-3 last:border-0">
<span className="text-xs font-medium text-brand-gold mb-1 block">2024-12-20</span>
<p className="text-base text-gray-700 font-medium group-hover:text-brand-blue transition-colors leading-snug">
            Safety Protocols for Overseas Travel Application
          </p>
</li>
</ul>
</div>
</div>
</main>
<footer className="mt-32 relative">

<div className="absolute top-0 left-0 w-full -translate-y-1/2 z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<a className="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-40 border-b-2 border-transparent hover:border-brand-gold hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-users mb-3 text-gray-600 group-hover:text-brand-blue transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors leading-tight">Cooperation Management</span>
</a>

<a className="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-40 border-b-2 border-transparent hover:border-brand-gold hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-plane-takeoff mb-3 text-gray-600 group-hover:text-brand-blue transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 2.91.05l.61.5a2.4 2.4 0 0 1 0 3.4l-4.19 3.22a2 2 0 0 0-.64 2.3l.5 1.5a2 2 0 0 1-.26 2.04l-1.69 2.2"></path></svg>
<span className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors leading-tight">Outbound Management</span>
</a>

<a className="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-40 border-b-2 border-transparent hover:border-brand-gold hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-monitor-check mb-3 text-gray-600 group-hover:text-brand-blue transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m9 10 2 2 4-4"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
<span className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors leading-tight">Project Application</span>
</a>

<a className="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-40 border-b-2 border-transparent hover:border-brand-gold hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-scroll-text mb-3 text-gray-600 group-hover:text-brand-blue transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M15 8h-5"></path><path d="M15 12h-5"></path></svg>
<span className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors leading-tight">Regulations</span>
</a>

<a className="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-40 border-b-2 border-transparent hover:border-brand-gold hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-download mb-3 text-gray-600 group-hover:text-brand-blue transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<span className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors leading-tight">Download Center</span>
</a>
</div>
</div>
</div>

<div className="overflow-hidden text-white bg-[#003C73] pt-28 pb-6 relative">

<div className="absolute inset-0 bg-gradient-to-b from-[#003C73] to-[#002a52] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 pb-10 border-b border-white/10">
<div className="flex items-center gap-2 font-bold text-base whitespace-nowrap text-white">
<span>Friendship Links</span>
<span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-0.5"></span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
<a className="block px-3 py-2 border border-white/20 text-center text-xs font-medium text-white/80 hover:bg-white hover:text-[#003C73] hover:border-white transition-all duration-200 truncate" href="#">Foreign Affairs Dept</a>
<a className="block px-3 py-2 border border-white/20 text-center text-xs font-medium text-white/80 hover:bg-white hover:text-[#003C73] hover:border-white transition-all duration-200 truncate" href="#">Internal Units</a>
<a className="block px-3 py-2 border border-white/20 text-center text-xs font-medium text-white/80 hover:bg-white hover:text-[#003C73] hover:border-white transition-all duration-200 truncate" href="#">Partner Universities</a>
<a className="block px-3 py-2 border border-white/20 text-center text-xs font-medium text-white/80 hover:bg-white hover:text-[#003C73] hover:border-white transition-all duration-200 truncate" href="#">Chinese Embassies</a>
<a className="block px-3 py-2 border border-white/20 text-center text-xs font-medium text-white/80 hover:bg-white hover:text-[#003C73] hover:border-white transition-all duration-200 truncate" href="#">Foreign Embassies</a>
</div>
</div>

<div className="py-10 flex flex-col md:flex-row items-center md:items-center justify-start gap-6 md:gap-10">

<img alt="CZIMT Logo" className="h-14 w-auto brightness-0 invert opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/177b4147-9418-4f61-83f7-b89a285f6ee5_800w.png"/>

<div className="hidden md:block w-px h-10 bg-white/20"></div>

<div className="text-center md:text-left">
<h2 className="text-2xl font-medium tracking-tight text-white">International Cooperation Division</h2>
<p className="text-white/50 text-[11px] font-medium uppercase tracking-[0.15em] mt-1">Changzhou Vocational Institute of Mechatronic Technology</p>
</div>
</div>

<div className="pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
<p className="">© 2024 CZIMT International Cooperation Division. All Rights Reserved.</p>
<button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group py-1 px-2" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    Back to Top
                    <svg className="lucide lucide-chevron-up group-hover:-translate-y-0.5 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
