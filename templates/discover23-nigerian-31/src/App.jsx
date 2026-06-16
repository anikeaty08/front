import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            const nav = document.getElementById('mainNav');
            
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                setTimeout(() => menu.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
                icon.setAttribute('data-lucide', 'x');
                icon.classList.add('text-white');
                nav.classList.replace('bg-white/95', 'bg-transparent');
                lucide.createIcons();
            } else {
                menu.classList.add('opacity-0');
                setTimeout(() => {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                }, 300);
                document.body.style.overflow = '';
                icon.setAttribute('data-lucide', 'menu');
                icon.classList.remove('text-white');
                nav.classList.replace('bg-transparent', 'bg-white/95');
                lucide.createIcons();
            }
        }

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors duration-300" id="mainNav">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 z-50 relative" href="#">
<img alt="Discover234" className="h-8 w-auto" src="https://discover234.com/assets/DISCOVER234-LOGO.png"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-base font-medium text-[#242424]">
<a className="nav-link hover:text-[#108A00] transition-colors" href="#history">History</a>
<a className="nav-link hover:text-[#108A00] transition-colors" href="#on-this-day">On this day</a>
<a className="nav-link hover:text-[#108A00] transition-colors" href="#cultural">Cultural Insight</a>
<a className="nav-link hover:text-[#108A00] transition-colors flex items-center gap-1" href="#quiz">Daily Quiz <i className="w-4 h-4" data-lucide="layout-grid" strokeWidth="1.5"></i></a>
<div className="relative group cursor-pointer flex items-center gap-1 nav-link">
                    Discover234 <i className="w-4 h-4 text-[#6C6C6C]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="hidden lg:flex items-center gap-4">
<button className="flex items-center gap-2 text-[#108A00] font-medium text-sm hover:opacity-80 transition-opacity">
<img alt="NaijaBOT" className="w-5 h-5" src="https://discover234.com/assets/NaijaBOT.svg"/>
                    NaijaBOT
                </button>
<button className="bg-[#00863D] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#002813] transition-colors shadow-sm">
                    Subscribe
                </button>
</div>

<button className="lg:hidden z-50 p-2 text-[#242424] focus:outline-none" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu" id="menu-icon" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-[#FFE081] py-2 overflow-hidden flex items-center border-b border-[#F05D21]/10">
<div className="animate-marquee whitespace-nowrap flex items-center gap-4 text-xs font-medium text-[#002813] tracking-wide uppercase px-4">
<span>Loading today's events...</span>
<i className="w-3 h-3 animate-spin" data-lucide="loader" strokeWidth="1.5"></i>
<span className="px-8">—</span>
<span>On this day in 1960: Nigerian Independence</span>
<span className="px-8">—</span>
<span>Discover the history of Aso Oke</span>
</div>
</div>

<div className="fixed inset-0 bg-[#002813] z-40 hidden flex-col justify-center items-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="text-3xl font-display text-white tracking-tight" href="#history" onclick="toggleMobileMenu()">History</a>
<a className="text-3xl font-display text-white tracking-tight" href="#on-this-day" onclick="toggleMobileMenu()">On this day</a>
<a className="text-3xl font-display text-white tracking-tight" href="#cultural" onclick="toggleMobileMenu()">Cultural Insight</a>
<div className="flex flex-col items-center gap-4 mt-8 w-full px-8">
<button className="w-full py-4 rounded-xl border border-white/20 text-white flex justify-center items-center gap-2">
<img alt="NaijaBOT" className="w-5 h-5 filter brightness-0 invert" src="https://discover234.com/assets/NaijaBOT.svg"/> NaijaBOT
                </button>
<button className="w-full py-4 rounded-xl bg-[#00863D] text-white font-medium">Subscribe</button>
</div>
</div>
</nav>

<header className="pt-40 pb-16 px-4 sm:px-6 max-w-[1200px] mx-auto min-h-[85vh] flex flex-col justify-center">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left space-y-8 fade-in relative">

<div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-1 bg-[#FFE081] rounded-full"></div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#108A00]/10 text-xs font-medium text-[#108A00]">
<span className="w-2 h-2 rounded-full bg-[#F05D21] animate-pulse"></span>
                    Trending in History
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-[64px] leading-[1.05] font-display font-medium text-[#002813] tracking-tight">
                    Independence: The Day Nigeria Became a Nation
                </h1>
<p className="text-[#6C6C6C] font-normal text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                    A flag lowered. A new flag raised. A new name carried into the world. Explore the pivotal moments and untold stories of 1960.
                </p>
<div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
<button className="bg-[#002813] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-[#108A00] transition-colors shadow-lg flex items-center gap-2">
                        Read Full Story <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="pt-4 text-sm text-[#6C6C6C] flex items-center justify-center lg:justify-start gap-2">
<img alt="Author" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&amp;h=100&amp;fit=crop"/>
<span>By Admin • Posted 2 months ago</span>
</div>
</div>

<div className="flex-1 w-full lg:w-auto fade-in" style={{animationDelay: '0.2s'}}>
<div className="hero-grid grid grid-cols-2 gap-4 relative">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFE081]/20 rounded-full blur-3xl -z-10"></div>
<div className="space-y-4 pt-8">
<div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-sm relative group">
<img alt="History 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#002813]/80 to-transparent flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide uppercase">Pre-Colonial Era</span>
</div>
</div>
<div className="rounded-2xl overflow-hidden aspect-square shadow-sm relative group">
<img alt="Culture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl overflow-hidden aspect-square shadow-sm relative group">
<img alt="People" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-sm relative group">
<img alt="Artifacts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#002813]/80 to-transparent flex items-end p-4">
<span className="text-white text-xs font-medium tracking-wide uppercase">Cultural Heritage</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-4 sm:px-6 bg-white border-y border-gray-100 relative">
<div className="absolute left-0 top-24 bottom-24 w-px bg-gray-100 hidden lg:block"></div>
<div className="absolute right-0 top-24 bottom-24 w-px bg-gray-100 hidden lg:block"></div>
<div className="max-w-[1200px] mx-auto space-y-32">

<div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-[-4rem]">
<h3 className="text-3xl font-display font-medium text-[#002813] tracking-tight">History Corner</h3>
<a className="text-base font-medium text-[#108A00] hover:text-[#002813] flex items-center gap-1 transition-colors" href="#">
                    See All <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<article className="grid md:grid-cols-2 gap-10 md:gap-16 items-center group">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
<img alt="Civil War" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#FFE081] text-[#002813] px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        2 Months Ago
                    </div>
</div>
<div className="space-y-6">
<div className="space-y-3">
<h2 className="text-4xl font-display font-medium text-[#002813] tracking-tight leading-tight">Civil War: Survival, Pain, Lessons Nigeria Still Carries</h2>
<p className="text-[#108A00] font-medium text-base">Conflict &amp; Resolution</p>
</div>
<p className="text-base text-[#6C6C6C] leading-relaxed">
                        The nation broke into fear. Communities became frontlines. Families lost homes, and the echoes of the struggle continue to shape modern political discourse.
                    </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-[#242424] font-medium opacity-90 py-2">
<li className="flex items-center gap-2"><i className="text-[#F05D21] w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i> 15 Min Read</li>
<li className="flex items-center gap-2"><i className="text-[#F05D21] w-4 h-4" data-lucide="image" strokeWidth="1.5"></i> Archival Photos</li>
<li className="flex items-center gap-2"><i className="text-[#F05D21] w-4 h-4" data-lucide="headphones" strokeWidth="1.5"></i> Audio Included</li>
</ul>
<div className="pt-4 mt-2">
<button className="bg-white border-2 border-[#002813] text-[#002813] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#002813] hover:text-white transition-all w-fit">
                            Read Article
                        </button>
</div>
</div>
</article>

<div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-[-4rem] pt-8">
<h3 className="text-3xl font-display font-medium text-[#002813] tracking-tight">Cultural Insights</h3>
<a className="text-base font-medium text-[#108A00] hover:text-[#002813] flex items-center gap-1 transition-colors" href="#">
                    See All <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<article className="grid md:grid-cols-2 gap-10 md:gap-16 items-center group">
<div className="md:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
<img alt="Aso Oke" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#FFE081] text-[#002813] px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        Tradition
                    </div>
</div>
<div className="md:order-1 space-y-6">
<div className="space-y-3">
<h2 className="text-4xl font-display font-medium text-[#002813] tracking-tight leading-tight">Aso Oke: Cloth, Status, Story</h2>
<p className="text-[#108A00] font-medium text-base">Yoruba Heritage</p>
</div>
<p className="text-base text-[#6C6C6C] leading-relaxed">
                        Aso Oke is not just fabric. It is identity worn in public. It shows pride, class, family taste, and preserves centuries of weaving techniques passed down through generations.
                    </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-[#242424] font-medium opacity-90 py-2">
<li className="flex items-center gap-2"><i className="text-[#F05D21] w-4 h-4" data-lucide="layers" strokeWidth="1.5"></i> Textile History</li>
<li className="flex items-center gap-2"><i className="text-[#F05D21] w-4 h-4" data-lucide="users" strokeWidth="1.5"></i> Societal Roles</li>
</ul>
<div className="pt-4 mt-2">
<button className="bg-white border-2 border-[#002813] text-[#002813] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#002813] hover:text-white transition-all w-fit">
                            Explore Tradition
                        </button>
</div>
</div>
</article>
</div>
</section>

<section className="py-24 bg-[#002813] text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#108A00]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F05D21]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<img alt="Logo" className="h-10 mx-auto mb-6 opacity-90" src="https://discover234.com/assets/DISCOVER234-LOGO-white.png"/>
<h3 className="text-3xl md:text-4xl font-display font-medium mb-6 tracking-tight">Preserving Nigeria's Rich Heritage</h3>
<p className="text-[#BBBBBB] text-lg font-normal leading-relaxed">
                    A comprehensive digital archive dedicated to organizing, verifying, and sharing the deep historical narratives and cultural nuances of Nigeria.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#108A00]/20 flex items-center justify-center mb-6 border border-[#108A00]/30">
<img alt="Articles" className="w-6 h-6" src="https://discover234.com/assets/article-writing.svg"/>
</div>
<div className="text-4xl font-display font-medium text-[#FFE081] mb-2">60K+</div>
<div className="text-base text-white font-medium mb-1">Historical &amp; Cultural Articles</div>
<p className="text-sm text-[#BBBBBB]">Curated and verified narratives.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#108A00]/20 flex items-center justify-center mb-6 border border-[#108A00]/30">
<img alt="Media" className="w-6 h-6" src="https://discover234.com/assets/multimedia.svg"/>
</div>
<div className="text-4xl font-display font-medium text-[#FFE081] mb-2">7.5K+</div>
<div className="text-base text-white font-medium mb-1">Archival Photos &amp; Videos</div>
<p className="text-sm text-[#BBBBBB]">Visual history preserved digitally.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#108A00]/20 flex items-center justify-center mb-6 border border-[#108A00]/30">
<img alt="Contributors" className="w-6 h-6 filter brightness-0 invert" src="https://discover234.com/assets/social-media.svg"/>
</div>
<div className="text-4xl font-display font-medium text-[#FFE081] mb-2">500+</div>
<div className="text-base text-white font-medium mb-1">Community Contributors</div>
<p className="text-sm text-[#BBBBBB]">Scholars and local historians.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 max-w-[1200px] mx-auto">
<div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
<h3 className="text-3xl font-display font-medium text-[#002813] tracking-tight">Notable Personalities</h3>
<a className="text-base font-medium text-[#108A00] hover:text-[#002813] flex items-center gap-1 transition-colors" href="#">
                See All <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group cursor-pointer block bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300" href="#">
<div className="aspect-square overflow-hidden rounded-xl mb-5 bg-gray-100 relative">
<img alt="Person" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h4 className="text-xl font-display font-medium text-[#002813] group-hover:text-[#108A00] transition-colors mb-2 leading-tight tracking-tight">
                    Funmilayo Ransome-Kuti
                </h4>
<p className="text-sm text-[#6C6C6C] line-clamp-3 leading-relaxed">
                    A teacher turned icon. A fearless organiser. A woman who stood before kings, colonisers, unfair taxes, and demanded justice.
                </p>
<div className="mt-4 pt-4 border-t border-gray-100 text-xs text-[#BBBBBB]">By Admin • 2 months ago</div>
</a>

<a className="group cursor-pointer block bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300" href="#">
<div className="aspect-square overflow-hidden rounded-xl mb-5 bg-gray-100 relative">
<img alt="Person" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-xl font-display font-medium text-[#002813] group-hover:text-[#108A00] transition-colors mb-2 leading-tight tracking-tight">
                    Chinua Achebe
                </h4>
<p className="text-sm text-[#6C6C6C] line-clamp-3 leading-relaxed">
                    A quiet voice with global weight. Chinua Achebe wrote stories that carried Nigeria to the world.
                </p>
<div className="mt-4 pt-4 border-t border-gray-100 text-xs text-[#BBBBBB]">By Admin • 2 months ago</div>
</a>

<a className="group cursor-pointer block bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300" href="#">
<div className="aspect-square overflow-hidden rounded-xl mb-5 bg-gray-100 relative">
<img alt="Person" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1563122870-6b0b48a0af09?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-xl font-display font-medium text-[#002813] group-hover:text-[#108A00] transition-colors mb-2 leading-tight tracking-tight">
                    Aliko Dangote
                </h4>
<p className="text-sm text-[#6C6C6C] line-clamp-3 leading-relaxed">
                    From trader roots to industrial scale. Aliko Dangote built a business empire that changed the continent's economic landscape.
                </p>
<div className="mt-4 pt-4 border-t border-gray-100 text-xs text-[#BBBBBB]">By Admin • 2 months ago</div>
</a>

<a className="group cursor-pointer block bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300" href="#">
<div className="aspect-square overflow-hidden rounded-xl mb-5 bg-gray-100 relative">
<img alt="Person" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter sepia-[.3]" src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-xl font-display font-medium text-[#002813] group-hover:text-[#108A00] transition-colors mb-2 leading-tight tracking-tight">
                    Olusegun Obasanjo
                </h4>
<p className="text-sm text-[#6C6C6C] line-clamp-3 leading-relaxed">
                    Ebora Owu. Soldier, head of state, civilian president. A life that shaped Nigeria's power dynamics.
                </p>
<div className="mt-4 pt-4 border-t border-gray-100 text-xs text-[#BBBBBB]">By Admin • 2 months ago</div>
</a>
</div>
</section>

<section className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
<div className="max-w-md">
<h3 className="text-2xl font-display font-medium text-[#002813] mb-2 tracking-tight">Stay updated with Discover234</h3>
<p className="text-[#6C6C6C] text-base">Sign up for our newsletter to receive weekly historical insights and cultural stories.</p>
</div>
<form className="flex w-full md:w-auto gap-3" onsubmit="event.preventDefault();">
<input className="flex-1 md:w-72 px-4 py-3 rounded-xl border border-[#BBBBBB] bg-white focus:outline-none focus:border-[#108A00] focus:ring-1 focus:ring-[#108A00] text-base transition-shadow" placeholder="Enter email address" required="" type="email"/>
<button className="bg-[#00863D] text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-[#002813] transition-colors whitespace-nowrap" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-[#1A1A1A] pt-20 pb-8 px-4 sm:px-6 border-t border-gray-800">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1 space-y-6">
<img alt="Discover234" className="h-8" src="https://discover234.com/assets/DISCOVER234-LOGO-white.png"/>
<p className="text-sm text-[#BBBBBB] leading-relaxed pr-4">
                    Your digital companion for exploring Nigeria's rich history, vibrant culture, and heritage.
                </p>
</div>
<div className="md:col-span-1">
<h5 className="font-display text-lg font-medium text-white mb-6">Company</h5>
<ul className="space-y-4 text-sm text-[#BBBBBB]">
<li><a className="hover:text-[#FFE081] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#">Terms of use</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#">Contact us</a></li>
</ul>
</div>
<div className="md:col-span-1">
<h5 className="font-display text-lg font-medium text-white mb-6">Content</h5>
<ul className="space-y-4 text-sm text-[#BBBBBB]">
<li><a className="hover:text-[#FFE081] transition-colors" href="#history">History</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#cultural">Cultural Insight</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#">Notable Personalities</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#on-this-day">On this day</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#">Regional Highlights</a></li>
<li><a className="hover:text-[#FFE081] transition-colors" href="#quiz">Daily Quiz</a></li>
</ul>
</div>
<div className="md:col-span-1">
<h5 className="font-display text-lg font-medium text-white mb-6">Social Handles</h5>
<ul className="space-y-4 text-sm text-[#BBBBBB]">
<li><a className="hover:text-[#FFE081] flex items-center gap-2 transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i> Facebook</a></li>
<li><a className="hover:text-[#FFE081] flex items-center gap-2 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i> Instagram</a></li>
<li><a className="hover:text-[#FFE081] flex items-center gap-2 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i> Twitter (X)</a></li>
<li><a className="hover:text-[#FFE081] flex items-center gap-2 transition-colors" href="#"><i className="w-4 h-4" data-lucide="video" strokeWidth="1.5"></i> TikTok</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex justify-center items-center">
<p className="text-xs text-[#BBBBBB]">© 2024 Discover234. All rights reserved.</p>
</div>
</footer>

<button className="fixed bottom-6 right-6 z-40 bg-white p-3 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform flex items-center gap-2 border border-gray-100 group">
<div className="w-10 h-10 bg-[#E8F3EB] rounded-full flex items-center justify-center">
<img alt="Bot" className="w-6 h-6" src="https://discover234.com/assets/NaijaBOT.svg"/>
</div>
<span className="font-medium text-[#002813] pr-2 text-sm opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[100px] transition-all duration-300 ease-in-out whitespace-nowrap">Chat Now</span>
</button>



    </>
  );
}
