import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#0A0A0A]/80', 'backdrop-blur-xl', 'border-white/10', 'py-4');
                navbar.classList.remove('bg-transparent', 'border-transparent', 'py-6');
            } else {
                navbar.classList.add('bg-transparent', 'border-transparent', 'py-6');
                navbar.classList.remove('bg-[#0A0A0A]/80', 'backdrop-blur-xl', 'border-white/10', 'py-4');
            }
        }, { passive: true });

        // Hero Parallax
        const parallaxBg = document.getElementById('parallax-bg');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                parallaxBg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
            }
        }, { passive: true });

        // Scroll reveal
        const revealElements = document.querySelectorAll('.reveal');
        const revealImages = document.querySelectorAll('.reveal-image');
        const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);
        revealElements.forEach(el => revealOnScroll.observe(el));
        revealImages.forEach(el => revealOnScroll.observe(el));

        // Magnetic buttons
        const magneticWraps = document.querySelectorAll('.magnetic-wrap');
        magneticWraps.forEach(wrap => {
            const btn = wrap.querySelector('.magnetic-btn');
            if (!btn) return;
            wrap.addEventListener('mousemove', (e) => {
                const position = wrap.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
            });
            wrap.addEventListener('mouseout', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });

        // Menu tabs
        function showCategory(categoryId) {
            document.querySelectorAll('.menu-category').forEach(el => el.classList.add('hidden'));
            document.getElementById(categoryId).classList.remove('hidden');
            document.querySelectorAll('.menu-tab').forEach(btn => {
                btn.classList.remove('bg-emerald-700', 'text-white', 'border-emerald-700');
                btn.classList.add('bg-[#1A1A1A]', 'text-[#A3A3A3]', 'border', 'border-white/10');
            });
            event.target.classList.remove('bg-[#1A1A1A]', 'text-[#A3A3A3]', 'border', 'border-white/10');
            event.target.classList.add('bg-emerald-700', 'text-white');
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-700/10 blur-[120px] rounded-full mix-blend-screen animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-700/5 blur-[120px] rounded-full mix-blend-screen animate-blob animation-delay-2000"></div>
<div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-amber-500/5 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-500 py-6 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-12">
<a className="flex items-center gap-2 group reveal" href="#">
<span className="text-2xl">🐼</span>
<div className="flex flex-col justify-center">
<span className="text-xl font-medium tracking-tight leading-none text-[#FAFAFA] group-hover:text-emerald-400 transition-colors duration-300">ASIA BOWL</span>
<span className="text-xs font-normal tracking-wider leading-none text-[#A3A3A3] mt-0.5 uppercase group-hover:text-emerald-400 transition-colors duration-300">Street Food</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 reveal delay-100">
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#about">Notre Histoire</a>
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#menu">Menu</a>
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#hours">Horaires</a>
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#contact">Contact</a>
<a className="hidden lg:inline-flex items-center gap-2 text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="tel:0953423150">
<i className="w-4 h-4" data-lucide="phone"></i>
                        09 53 42 31 50
                    </a>
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#0A0A0A] bg-[#FAFAFA] hover:bg-emerald-500 hover:text-[#FAFAFA] rounded-full transition-colors duration-300" href="#menu">
                            Commander
                        </a>
</div>
</div>
<button className="md:hidden text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300 reveal delay-100" id="mobileMenuBtn" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-full mt-2 left-4 right-4 bg-[#1A1A1A]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] py-2" href="#about" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Notre Histoire</a>
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] py-2" href="#menu" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Menu</a>
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] py-2" href="#hours" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Horaires</a>
<a className="text-sm font-normal text-[#A3A3A3] hover:text-[#FAFAFA] py-2" href="#contact" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Contact</a>
<a className="flex items-center gap-2 text-sm font-normal text-emerald-400 py-2" href="tel:0953423150">
<i className="w-4 h-4" data-lucide="phone"></i>
                    09 53 42 31 50
                </a>
</div>
</div>
</nav>
<main>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat scale-[1.05] will-change-transform z-[-1]" id="parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
</div>
<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20">
<div className="max-w-3xl">
<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-white/10 text-[#FAFAFA] mb-8 backdrop-blur-md hover:bg-[#1A1A1A] transition-colors duration-300 cursor-default">
<i className="text-emerald-400 w-4 h-4" data-lucide="flame" strokeWidth="1.5"></i>
<span className="text-xs font-normal tracking-wide uppercase">Cuisine Asiatique Authentique • Villepinte</span>
</div>
<h1 className="reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-[#FAFAFA] mb-6 leading-[1.05]">
                        Les Saveurs<br/>
                        d'<span className="text-emerald-400 inline-block relative">
                            Asie.
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full opacity-50 blur-[2px]"></div>
</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-[#A3A3A3] mb-10 max-w-xl font-normal leading-relaxed">
                        Stone Bowls brûlants, Ramen fumants, Pokebowls frais et Curry savoureux. Des recettes authentiques préparées avec des ingrédients frais, au cœur de Villepinte.
                    </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-5">
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center justify-center px-8 py-4 text-base font-normal text-[#FAFAFA] bg-emerald-700 hover:bg-emerald-600 rounded-full transition-all duration-300 hover:shadow-[0_10px_40px_rgba(45,106,79,0.3)] group" href="#menu">
                                Voir le Menu
                                <i className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center justify-center px-8 py-4 text-base font-normal text-[#FAFAFA] border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 group" href="#contact">
<i className="mr-2 w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
                                Nous Trouver
                            </a>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal delay-400">
<span className="text-xs font-normal tracking-widest uppercase text-[#A3A3A3]">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-[#A3A3A3] to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[#FAFAFA]" style={{animation: 'scrollDown 2s infinite'}}></div>
</div>
</div>
</section>

<div className="overflow-hidden border-b border-white/5 py-5 bg-transparent">
<div className="flex animate-scroll whitespace-nowrap">
<div className="flex px-4 gap-x-8 items-center shrink-0">
<span className="text-3xl sm:text-5xl font-medium text-emerald-400 tracking-tight uppercase">Stone Bowl</span>
<span className="text-xl text-amber-500">🍜</span>
<span className="text-3xl sm:text-5xl font-medium text-[#A3A3A3] tracking-tight uppercase">Pokebowl</span>
<span className="text-xl text-amber-500">🥢</span>
<span className="text-3xl sm:text-5xl font-medium text-emerald-400 tracking-tight uppercase">Ramen</span>
<span className="text-xl text-amber-500">🐼</span>
<span className="text-3xl sm:text-5xl font-medium text-[#A3A3A3] tracking-tight uppercase">Curry</span>
<span className="text-xl text-amber-500">🔥</span>
<span className="text-3xl sm:text-5xl font-medium text-emerald-400 tracking-tight uppercase">Plaque Chauffante</span>
<span className="text-xl text-amber-500">🍜</span>
<span className="text-3xl sm:text-5xl font-medium text-[#A3A3A3] tracking-tight uppercase">Spécial</span>
<span className="text-xl text-amber-500">🥢</span>
</div>
<div aria-hidden="true" className="flex px-4 gap-x-8 items-center shrink-0">
<span className="text-3xl sm:text-5xl font-medium text-emerald-400 tracking-tight uppercase">Stone Bowl</span>
<span className="text-xl text-amber-500">🍜</span>
<span className="text-3xl sm:text-5xl font-medium text-[#A3A3A3] tracking-tight uppercase">Pokebowl</span>
<span className="text-xl text-amber-500">🥢</span>
<span className="text-3xl sm:text-5xl font-medium text-emerald-400 tracking-tight uppercase">Ramen</span>
<span className="text-xl text-amber-500">🐼</span>
<span className="text-3xl sm:text-5xl font-medium text-[#A3A3A3] tracking-tight uppercase">Curry</span>
<span className="text-xl text-amber-500">🔥</span>
<span className="text-3xl sm:text-5xl font-medium text-emerald-400 tracking-tight uppercase">Plaque Chauffante</span>
<span className="text-xl text-amber-500">🍜</span>
<span className="text-3xl sm:text-5xl font-medium text-[#A3A3A3] tracking-tight uppercase">Spécial</span>
<span className="text-xl text-amber-500">🥢</span>
</div>
</div>
</div>

<section className="py-24 lg:py-32 relative bg-transparent" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative z-10">
<h2 className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-4 reveal">Notre Histoire</h2>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA] mb-8 reveal delay-100">L'authenticité<br/>de l'Asie à <span className="text-emerald-400">Villepinte.</span></h3>
<div className="space-y-6 reveal delay-200">
<p className="text-lg text-[#A3A3A3] leading-relaxed">
                                Chez Asia Bowl, nous vous proposons une expérience culinaire asiatique authentique.
                                De nos Stone Bowls brûlants à nos Ramen fumants, chaque plat est préparé avec des
                                ingrédients frais et des recettes traditionnelles revisitées.
                            </p>
<p className="text-lg text-[#A3A3A3] leading-relaxed">
                                Nos chefs passionnés mettent tout leur savoir-faire pour vous offrir des saveurs
                                uniques, entre cuisine chinoise, japonaise et fusion asiatique.
                            </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 reveal delay-300">
<div className="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-[#202020]/80 transition-colors duration-300">
<span className="text-3xl font-medium text-emerald-400 tracking-tight">30+</span>
<p className="text-xs text-[#A3A3A3] uppercase tracking-wider">Plats</p>
</div>
<div className="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-[#202020]/80 transition-colors duration-300">
<span className="text-3xl font-medium text-emerald-400 tracking-tight">100%</span>
<p className="text-xs text-[#A3A3A3] uppercase tracking-wider">Frais</p>
</div>
<div className="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-[#202020]/80 transition-colors duration-300">
<span className="text-3xl font-medium text-emerald-400 tracking-tight">6/7</span>
<p className="text-xs text-[#A3A3A3] uppercase tracking-wider">Jours</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group reveal-image-container">
<div className="absolute -inset-4 bg-emerald-700/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-screen"></div>
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] border border-white/10 z-10">
<img alt="Cuisine asiatique fraîche" className="reveal-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&amp;h=700&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div>
<p className="text-xs text-[#A3A3A3] font-normal uppercase tracking-wider mb-1">Qualité</p>
<p className="text-xl font-medium text-[#FAFAFA] tracking-tight">Préparé à la commande</p>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center shadow-[0_0_20px_rgba(45,106,79,0.4)]">
<i className="text-[#FAFAFA] w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-transparent relative border-t border-white/5" id="menu">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row mb-16 gap-4 items-end justify-between reveal">
<div>
<span className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-4 block">La Carte</span>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA]">Notre Menu</h3>
</div>
<p className="text-sm text-[#A3A3A3] max-w-sm">Des entrées aux plats signature, découvrez toute la richesse de la cuisine asiatique.</p>
</div>

<div className="flex flex-wrap gap-2 mb-12 reveal delay-100" id="menuTabs">
<button className="menu-tab bg-emerald-700 text-white text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('starters')">Entrées</button>
<button className="menu-tab bg-[#1A1A1A] text-[#A3A3A3] border border-white/10 hover:border-white/20 text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('stonebowl')">Stone Bowl</button>
<button className="menu-tab bg-[#1A1A1A] text-[#A3A3A3] border border-white/10 hover:border-white/20 text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('pokebowl')">Pokebowl</button>
<button className="menu-tab bg-[#1A1A1A] text-[#A3A3A3] border border-white/10 hover:border-white/20 text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('ramen')">Ramen</button>
<button className="menu-tab bg-[#1A1A1A] text-[#A3A3A3] border border-white/10 hover:border-white/20 text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('curry')">Curry</button>
<button className="menu-tab bg-[#1A1A1A] text-[#A3A3A3] border border-white/10 hover:border-white/20 text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('plaque')">Plaque Chauffante</button>
<button className="menu-tab bg-[#1A1A1A] text-[#A3A3A3] border border-white/10 hover:border-white/20 text-xs font-medium tracking-wider uppercase rounded-full py-2.5 px-6 transition-all" onclick="showCategory('special')">Spécial</button>
</div>

<div className="menu-category" id="starters">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Nems au Poulet (E1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">鸡肉春卷</p>
</div>
<span className="text-sm font-medium text-emerald-400">5.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Nems au Porc 4P (E2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">猪肉春卷</p>
</div>
<span className="text-sm font-medium text-emerald-400">5.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Bâtonnets de Poulet Pané (E3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸鸡排</p>
</div>
<span className="text-sm font-medium text-emerald-400">5.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Tempura de Crevette 4P (E4)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">天妇罗虾</p>
</div>
<span className="text-sm font-medium text-emerald-400">6.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Gyoza au Poulet 5P (E5)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">鸡肉饺子</p>
</div>
<span className="text-sm font-medium text-emerald-400">5.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Salade Wakame (E6)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">海藻沙拉</p>
</div>
<span className="text-sm font-medium text-emerald-400">3.00€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Kimchi Maison (E7)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">韩式泡菜 🌶️</p>
</div>
<span className="text-sm font-medium text-emerald-400">3.50€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">California Rolls 6P (E8)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸虾/三文鱼卷</p>
</div>
<span className="text-sm font-medium text-emerald-400">6.90€</span>
</div>
<p className="text-xs text-[#A3A3A3]/50">(tempura ou saumon)</p>
</div>
</div>
</div>

<div className="menu-category hidden" id="stonebowl">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Stone Bowl Poulet (B1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">鸡肉石锅拌饭 🌶️</p>
</div>
<span className="text-sm font-medium text-emerald-400">15.00€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Stone Bowl Boeuf (B2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">牛肉石锅拌饭</p>
</div>
<span className="text-sm font-medium text-emerald-400">15.00€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Stone Bowl Porc (B3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">猪肉石锅拌饭 🌶️</p>
</div>
<span className="text-sm font-medium text-emerald-400">15.00€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Stone Bowl Vegan Tofu (B4)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">素菜石锅拌饭</p>
</div>
<span className="text-sm font-medium text-emerald-400">12.50€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3" data-lucide="leaf"></i> Vegan
                            </span>
</div>
</div>
</div>

<div className="menu-category hidden" id="pokebowl">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Pokebowl Poulet Pané (P1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸鸡排波奇碗</p>
</div>
<span className="text-sm font-medium text-emerald-400">12.80€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Pokebowl Surimi Crevettes (P2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">蟹柳虾仁波奇碗</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.50€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Pokebowl Saumon Avocat (P3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">三文鱼牛油果波奇碗</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Pokebowl Tempura (P4)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸虾波奇碗</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.90€</span>
</div>
</div>
</div>
</div>

<div className="menu-category hidden" id="ramen">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Ramen Poulet (R1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">鸡肉拉面</p>
</div>
<span className="text-sm font-medium text-emerald-400">12.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Ramen Boeuf (R2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">牛肉拉面</p>
</div>
<span className="text-sm font-medium text-emerald-400">12.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Ramen Fruits de Mer (R3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">海鲜拉面</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.50€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Ramen Vegan (R4)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">素拉面</p>
</div>
<span className="text-sm font-medium text-emerald-400">11.80€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3" data-lucide="leaf"></i> Vegan
                            </span>
</div>
</div>
</div>

<div className="menu-category hidden" id="curry">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Curry Poulet Pané (C1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸鸡咖喱</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.50€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Curry Porc Pané (C2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸虾咖喱</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.50€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Curry Tempura (C3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">炸虾咖喱</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Curry Vegan Tofu (C4)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">素咖喱</p>
</div>
<span className="text-sm font-medium text-emerald-400">12.50€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3" data-lucide="leaf"></i> Vegan
                            </span>
</div>
</div>
</div>

<div className="menu-category hidden" id="plaque">
<div className="mb-4 p-4 bg-amber-400/10 border border-amber-400/20 rounded-xl">
<p className="text-sm text-amber-400"><i className="w-4 h-4 inline mr-1" data-lucide="info"></i> 2 accompagnements au choix : frites, haricot vert, riz</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Magret de Canard (PC1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">铁板香煎鸭胸</p>
</div>
<span className="text-sm font-medium text-emerald-400">22.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Côtelettes d'Agneau (PC2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">铁板羊排</p>
</div>
<span className="text-sm font-medium text-emerald-400">21.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Gambas (PC3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">铁板大虾</p>
</div>
<span className="text-sm font-medium text-emerald-400">18.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Pavé de Saumon (PC4)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">铁板三文鱼</p>
</div>
<span className="text-sm font-medium text-emerald-400">18.90€</span>
</div>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Boeuf Merlan (PC5)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">铁板牛排</p>
</div>
<span className="text-sm font-medium text-emerald-400">20.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
</div>
</div>

<div className="menu-category hidden" id="special">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Soupe Pho (S1)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">越南河粉</p>
</div>
<span className="text-sm font-medium text-emerald-400">13.50€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Bobun au Boeuf (S2)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">越式米粉沙拉</p>
</div>
<span className="text-sm font-medium text-emerald-400">11.90€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-emerald-700/30 hover:shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)] transition-all duration-500 group">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors">Riz Loc Lac (S3)</h3>
<p className="text-xs text-[#A3A3A3]/60 mt-0.5">碌呖饭</p>
</div>
<span className="text-sm font-medium text-emerald-400">12.80€</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full py-1 px-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Populaire
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8 bg-transparent border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-4">Nos Spécialités</h2>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA] mb-6">Nos plats phares</h3>
<p className="text-lg text-[#A3A3A3]">Découvrez nos créations les plus appréciées, préparées avec passion et ingrédients frais.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-100">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Stone Bowl" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&amp;h=450&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-block px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[#FAFAFA] text-xs font-normal rounded-full self-start mb-4 shadow-xl">Signature</span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Stone Bowl Boeuf</h4>
<p className="text-sm font-normal text-amber-400 mb-4">Notre classique incontournable.</p>
<p className="text-sm text-[#A3A3A3] mb-6 flex-grow leading-relaxed">Riz croustillant servi dans un bol en pierre brûlant, garni de boeuf mariné, légumes frais et œuf.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">15.00€</span>
</div>
</div>
</div>
<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-200">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Ramen" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&amp;h=450&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-normal rounded-full self-start mb-4 shadow-xl">
<i className="w-3 h-3" data-lucide="flame" strokeWidth="1.5"></i>
                                Best-seller
                            </span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Ramen Poulet</h4>
<p className="text-sm font-normal text-amber-400 mb-4">Bouillon riche et savoureux.</p>
<p className="text-sm text-[#A3A3A3] mb-6 flex-grow leading-relaxed">Bouillon riche et savoureux, nouilles fraîches, poulet tendre et garnitures traditionnelles.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">12.90€</span>
</div>
</div>
</div>
<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-300">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Pokebowl" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&amp;h=450&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-block px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[#A3A3A3] text-xs font-normal rounded-full self-start mb-4 shadow-xl">Frais</span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Pokebowl Saumon Avocat</h4>
<p className="text-sm font-normal text-amber-400 mb-4">Fraîcheur garantie.</p>
<p className="text-sm text-[#A3A3A3] mb-6 flex-grow leading-relaxed">Saumon frais, avocat crémeux, edamame et sauce teriyaki maison sur riz vinaigré.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">13.90€</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-transparent border-t border-white/5" id="hours">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="relative z-10">
<h2 className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-4 reveal">Nous rendre visite</h2>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA] mb-4 reveal delay-100">Horaires d'ouverture</h3>
<p className="text-[#A3A3A3] max-w-md text-base reveal delay-200">3 Avenue Georges Clemenceau, 93420 Villepinte</p>
<div className="mt-10 space-y-0 reveal delay-300">
<div className="flex items-center justify-between border-b border-white/5 py-4">
<span className="text-base font-medium text-[#FAFAFA]">Lundi</span>
<div className="text-right">
<span className="text-sm text-emerald-400">12:00–14:30</span>
<span className="text-white/20 mx-2">|</span>
<span className="text-sm text-emerald-400">19:00–22:30</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-4">
<span className="text-base font-medium text-[#FAFAFA]">Mardi</span>
<div className="text-right">
<span className="text-sm text-emerald-400">12:00–14:30</span>
<span className="text-white/20 mx-2">|</span>
<span className="text-sm text-emerald-400">19:00–22:30</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-4">
<span className="text-base font-medium text-[#FAFAFA]">Mercredi</span>
<div className="text-right">
<span className="text-sm text-emerald-400">12:00–14:30</span>
<span className="text-white/20 mx-2">|</span>
<span className="text-sm text-emerald-400">19:00–22:30</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-4">
<span className="text-base font-medium text-[#FAFAFA]">Jeudi</span>
<div className="text-right">
<span className="text-sm text-emerald-400">12:00–14:30</span>
<span className="text-white/20 mx-2">|</span>
<span className="text-sm text-emerald-400">19:00–22:30</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-4">
<span className="text-base font-medium text-[#FAFAFA]">Vendredi</span>
<div className="text-right">
<span className="text-sm text-emerald-400">12:00–14:30</span>
<span className="text-white/20 mx-2">|</span>
<span className="text-sm text-emerald-400">19:00–22:30</span>
</div>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-4">
<span className="text-base font-medium text-[#FAFAFA]">Samedi</span>
<div className="text-right">
<span className="text-sm text-emerald-400">12:00–14:30</span>
<span className="text-white/20 mx-2">|</span>
<span className="text-sm text-emerald-400">19:00–22:30</span>
</div>
</div>
<div className="flex items-center justify-between py-4">
<span className="text-base font-medium text-[#FAFAFA]">Dimanche</span>
<span className="text-sm text-red-400 font-medium">Fermé</span>
</div>
</div>
</div>
<div className="space-y-6">

<div className="rounded-3xl overflow-hidden border border-white/10 reveal delay-200">
<iframe allowfullscreen="" className="w-full" height="350" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.1!2d2.5516!3d48.9558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0F2LiBHZW9yZ2VzIENsZW1lbmNlYXUsIDkzNDIwIFZpbGxlcGludGU!5e0!3m2!1sfr!2sfr!4v1" style={{border: '0', filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)'}} width="100%"></iframe>
</div>

<div className="bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 reveal delay-300 hover:border-white/10 transition-colors duration-500">
<h3 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-6">Contactez-nous</h3>
<div className="space-y-6">
<a className="flex items-start gap-5 group" href="tel:0953423150">
<div className="w-12 h-12 rounded-2xl bg-emerald-700/10 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-700/20 group-hover:border-emerald-700/30 transition-colors duration-300">
<i className="text-emerald-400 w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-[#A3A3A3] uppercase tracking-wider mb-1">Téléphone</p>
<p className="text-base font-medium text-[#FAFAFA] group-hover:text-emerald-400 transition-colors duration-300">09 53 42 31 50</p>
</div>
</a>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-emerald-700/10 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-700/20 group-hover:border-emerald-700/30 transition-colors duration-300">
<i className="text-emerald-400 w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-[#A3A3A3] uppercase tracking-wider mb-1">Adresse</p>
<p className="text-base font-medium text-[#FAFAFA]">3 Av. Georges Clemenceau, 93420 Villepinte</p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-emerald-700/10 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-700/20 group-hover:border-emerald-700/30 transition-colors duration-300">
<i className="text-emerald-400 w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-[#A3A3A3] uppercase tracking-wider mb-1">Service</p>
<p className="text-base font-medium text-[#FAFAFA]">Sur place &amp; à emporter</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8 bg-transparent border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<div className="inline-flex bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 rounded-full mb-6 py-1.5 px-4 gap-2 items-center">
<span className="flex gap-1 text-amber-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</span>
<span className="text-xs font-medium tracking-wider uppercase text-[#FAFAFA]">Avis Google</span>
</div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#FAFAFA]">Ce que disent nos clients</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 reveal delay-100">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-emerald-700/20 flex items-center justify-center font-medium text-emerald-400 text-xs">ML</div>
<div>
<h4 className="text-sm font-medium text-[#FAFAFA]">Marie L.</h4>
<p className="text-xs text-[#A3A3A3]/60">Google Avis</p>
</div>
</div>
<div className="flex gap-0.5 mb-3 text-amber-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-[#A3A3A3] leading-relaxed">"Excellent restaurant ! Les stone bowls sont incroyables, servis brûlants avec le riz qui croustille. Le personnel est adorable et le cadre très agréable. Je recommande vivement !"</p>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 reveal delay-200">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-emerald-700/20 flex items-center justify-center font-medium text-emerald-400 text-xs">KT</div>
<div>
<h4 className="text-sm font-medium text-[#FAFAFA]">Karim T.</h4>
<p className="text-xs text-[#A3A3A3]/60">Google Avis</p>
</div>
</div>
<div className="flex gap-0.5 mb-3 text-amber-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-[#A3A3A3] leading-relaxed">"Les ramen sont juste parfaits ! Bouillon savoureux et bien assaisonné. Les pokebowls sont frais et copieux. Rapport qualité-prix imbattable à Villepinte."</p>
</div>
<div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 reveal delay-300">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-emerald-700/20 flex items-center justify-center font-medium text-emerald-400 text-xs">SB</div>
<div>
<h4 className="text-sm font-medium text-[#FAFAFA]">Sophie B.</h4>
<p className="text-xs text-[#A3A3A3]/60">Google Avis</p>
</div>
</div>
<div className="flex gap-0.5 mb-3 text-amber-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-[#A3A3A3] leading-relaxed">"Une vraie découverte ! La plaque chauffante avec les côtelettes d'agneau est exceptionnelle. Les plats sont généreux et les saveurs authentiques. Mon nouveau restaurant préféré !"</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-transparent border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto text-center reveal">
<span className="text-5xl mb-6 block">🐼</span>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#FAFAFA] mb-4">Envie de saveurs asiatiques ?</h2>
<p className="text-base text-[#A3A3A3] mb-10 max-w-lg mx-auto">Venez découvrir nos bowls, ramen et spécialités asiatiques au 3 Avenue Georges Clemenceau, Villepinte.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 transition-all duration-300 text-[#FAFAFA] text-sm font-medium tracking-wide rounded-full py-4 px-8 hover:shadow-[0_10px_40px_rgba(45,106,79,0.3)]" href="tel:0953423150">
<i className="w-4 h-4" data-lucide="phone"></i>
                            Appeler : 09 53 42 31 50
                        </a>
</div>
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center gap-2 text-[#FAFAFA] text-sm font-medium tracking-wide rounded-full py-4 px-8 border border-white/20 hover:border-white/40 transition-all duration-300" href="https://www.google.com/maps/dir/?api=1&amp;destination=3+Avenue+Georges+Clemenceau+93420+Villepinte" target="_blank">
<i className="w-4 h-4" data-lucide="navigation"></i>
                            Itinéraire
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 mb-16 justify-between reveal">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<span className="text-2xl">🐼</span>
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">ASIA BOWL</span>
</div>
<p className="text-sm text-[#A3A3A3] leading-relaxed">Asia Bowl Villepinte — Restaurant asiatique proposant Stone Bowls, Pokebowls, Ramen, Curry et plats sur plaque chauffante. Cuisine fraîche et authentique.</p>
<div className="flex gap-4 mt-6">
<a className="text-[#A3A3A3] hover:text-emerald-400 hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-[#A3A3A3] hover:text-emerald-400 hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-x-16 gap-y-8">
<div>
<h4 className="text-sm font-medium tracking-wider uppercase text-[#FAFAFA] mb-4">Navigation</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-[#A3A3A3] hover:text-emerald-400 transition-colors duration-300" href="#menu">Menu</a></li>
<li><a className="text-[#A3A3A3] hover:text-emerald-400 transition-colors duration-300" href="#about">Notre Histoire</a></li>
<li><a className="text-[#A3A3A3] hover:text-emerald-400 transition-colors duration-300" href="#hours">Horaires</a></li>
<li><a className="text-[#A3A3A3] hover:text-emerald-400 transition-colors duration-300" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-wider uppercase text-[#FAFAFA] mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="text-[#A3A3A3]">09 53 42 31 50</li>
<li className="text-[#A3A3A3]">3 Av. Georges Clemenceau</li>
<li className="text-[#A3A3A3]">93420 Villepinte</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 text-xs text-[#A3A3A3]/60 tracking-wider border-t border-white/5 pt-8 items-center justify-between">
<p>© 2025 Asia Bowl Villepinte. Tous droits réservés.</p>
<p>Ouvert du lundi au samedi</p>
</div>
</div>
</footer>


    </>
  );
}
