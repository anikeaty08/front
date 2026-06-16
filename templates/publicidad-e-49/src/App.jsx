import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
pink: '#ec4899',
sky: '#0ea5e9',
yellow: '#facc15',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 7s infinite',
'text-shimmer': 'text-shimmer 3s ease infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'text-shimmer': {
'0%, 100%': {
'background-size': '200% 200%',
'background-position': 'left center'
},
'50%': {
'background-size': '200% 200%',
'background-position': 'right center'
},
}
}
}
}
}



        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
    


        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Scroll to Top Logic
        const scrollBtn = document.getElementById('scroll-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                scrollBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('opacity-0');
            lightboxImg.classList.remove('scale-100');
            lightboxImg.classList.add('scale-95');
            setTimeout(() => {
                lightbox.classList.add('hidden');
                lightboxImg.src = '';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Close lightbox on click outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Audio Player Simulation
        const audioPlayer = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const visualizer = document.getElementById('visualizer');
        let isPlaying = false;

        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isPlaying = !isPlaying;
            if (isPlaying) {
                playIcon.setAttribute('icon', 'lucide:pause');
                visualizer.classList.remove('paused');
            } else {
                playIcon.setAttribute('icon', 'lucide:play');
                visualizer.classList.add('paused');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<nav className="fixed top-0 w-full z-40 glass border-b border-neutral-200 dark:border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl tracking-tighter font-semibold select-none group" href="#">
                        PUBLI<span className="text-brand-pink">G</span>RAPHIC
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-xs font-medium text-neutral-600 hover:text-brand-sky dark:text-neutral-400 dark:hover:text-brand-sky transition-colors uppercase tracking-wide" href="#services">Servicios</a>
<a className="text-xs font-medium text-neutral-600 hover:text-brand-pink dark:text-neutral-400 dark:hover:text-brand-pink transition-colors uppercase tracking-wide" href="#products">Productos</a>
<a className="text-xs font-medium text-neutral-600 hover:text-brand-yellow dark:text-neutral-400 dark:hover:text-brand-yellow transition-colors uppercase tracking-wide" href="#portfolio">Trabajos</a>
<a className="text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors uppercase tracking-wide" href="#partners">Aliados</a>
<button className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="lucide:sun" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" width="18"></iconify-icon>
</button>
<a className="px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition-opacity" href="#contact">Contacto</a>
</div>

<div className="md:hidden flex items-center gap-4">
<button className="text-neutral-600 dark:text-neutral-400" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="lucide:sun" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" width="20"></iconify-icon>
</button>
<button className="text-neutral-600 dark:text-neutral-300 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden glass border-t border-neutral-200 dark:border-neutral-800" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300" href="#services">Servicios</a>
<a className="block py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300" href="#products">Productos</a>
<a className="block py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300" href="#portfolio">Trabajos</a>
<a className="block py-2 mt-4 text-center rounded-md bg-brand-sky/10 text-brand-sky font-medium" href="#contact">Contáctanos</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero">
<div className="absolute inset-0 z-0 bg-grid"></div>
<div className="absolute inset-0 z-0">
<div className="hero-bg-slide grayscale mix-blend-overlay"></div>
<div className="hero-bg-slide grayscale mix-blend-overlay"></div>
<div className="hero-bg-slide mix-blend-overlay grayscale"></div>
</div>
<div className="absolute top-0 -left-4 w-72 h-72 bg-brand-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:mix-blend-screen dark:opacity-10"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:mix-blend-screen dark:opacity-10"></div>
<div className="-bottom-8 filter animate-blob animation-delay-4000 dark:mix-blend-screen dark:opacity-10 opacity-20 mix-blend-multiply w-72 h-72 rounded-full absolute left-20 blur-3xl"></div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-sky/30 bg-brand-sky/5 text-brand-sky text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-brand-sky mr-2 animate-pulse"></span>
                Innovación en Impresión
            </div>
<h1 className="md:text-7xl dark:text-white text-5xl font-semibold text-neutral-900 tracking-tight mb-6">
                Impresión que deja <br/>
<span className="animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-brand-pink via-brand-sky to-brand-yellow">una huella visual.</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-500 dark:text-neutral-400">
                Llevamos tu marca al mundo físico con acabados de alta precisión. Desde gran formato hasta papelería corporativa premium.
            </p>
<div className="mt-10 flex justify-center gap-4">
<a className="px-8 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all text-sm" href="#contact">
                    Cotizar Proyecto
                </a>
<a className="px-8 py-3 rounded-lg glass text-neutral-900 dark:text-white font-medium hover:bg-white/50 dark:hover:bg-white/10 transition-all text-sm border border-neutral-200 dark:border-neutral-800 flex items-center gap-2" href="#portfolio">
                    Ver Portafolio
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm overflow-hidden relative marquee-wrapper" id="partners">
<div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent pointer-events-none"></div>
<div className="flex w-max animate-marquee items-center">

<div className="flex gap-24 items-center px-12">
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.nike.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" icon="simple-icons:nike" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Nike</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.adidas.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" icon="simple-icons:adidas" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Adidas</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.coca-cola.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#F40009] transition-colors" icon="simple-icons:cocacola" width="80"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">CocaCola</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.sony.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" icon="simple-icons:sony" width="60"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Sony</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.samsung.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#1428A0] transition-colors" icon="simple-icons:samsung" width="70"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Samsung</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.tesla.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#E31937] transition-colors" icon="simple-icons:tesla" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Tesla</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.netflix.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#E50914] transition-colors" icon="simple-icons:netflix" width="60"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Netflix</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.spotify.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#1ED760] transition-colors" icon="simple-icons:spotify" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Spotify</span>
</a>
</div>

<div className="flex gap-24 items-center px-12">
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.nike.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" icon="simple-icons:nike" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Nike</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.adidas.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" icon="simple-icons:adidas" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Adidas</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.coca-cola.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#F40009] transition-colors" icon="simple-icons:cocacola" width="80"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">CocaCola</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.sony.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" icon="simple-icons:sony" width="60"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Sony</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.samsung.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#1428A0] transition-colors" icon="simple-icons:samsung" width="70"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Samsung</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.tesla.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#E31937] transition-colors" icon="simple-icons:tesla" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Tesla</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.netflix.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#E50914] transition-colors" icon="simple-icons:netflix" width="60"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Netflix</span>
</a>
<a className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300" href="https://www.spotify.com" target="_blank">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#1ED760] transition-colors" icon="simple-icons:spotify" width="40"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Spotify</span>
</a>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
<div className="mb-16 text-center md:text-left reveal">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Nuestros Servicios</h2>
<p className="mt-4 text-neutral-500 dark:text-neutral-400">Soluciones integrales de imprenta y branding.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="reveal group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-brand-pink/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-pink/10 text-brand-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:printer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Impresión Offset &amp; Digital</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Alta calidad para grandes volúmenes y rapidez para tirajes cortos.</p>
</div>
<div className="reveal delay-100 group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-brand-sky/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-sky/10 text-brand-sky flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:maximize" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Gran Formato</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Vinilos, lonas, y vallas publicitarias que capturan la atención.</p>
</div>
<div className="reveal delay-200 group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-brand-yellow/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:package" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Merchandising</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Artículos promocionales personalizados para tu marca.</p>
</div>
<div className="reveal group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-brand-pink/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-pink/10 text-brand-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Diseño Gráfico</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Creación de identidad visual y adaptación de artes.</p>
</div>
<div className="reveal delay-100 group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-brand-sky/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-sky/10 text-brand-sky flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:sticker" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Señalética y Rotulación</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Rotulación de vehículos y espacios comerciales.</p>
</div>
<div className="reveal delay-200 group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-brand-yellow/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:paint-brush" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Acabados Especiales</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Hot stamping, barniz UV y troquelados para un toque premium.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-100 dark:bg-neutral-900/50" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Productos Destacados</h2>
<p className="mt-2 text-neutral-500 dark:text-neutral-400">Material pop y papelería lista para tu negocio.</p>
</div>
<a className="reveal delay-200 mt-4 md:mt-0 text-sm text-brand-sky hover:text-brand-pink transition-colors font-medium flex items-center gap-1" href="#">
                    Ver catálogo completo <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="reveal group relative aspect-square bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 cursor-pointer">
<img alt="Tarjetas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
<h4 className="text-white font-medium text-sm">Tarjetas de Presentación</h4>
<p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Mate, Brillante y Soft Touch</p>
</div>
</div>

<div className="reveal delay-100 group relative aspect-square bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 cursor-pointer">
<img alt="Flyers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
<h4 className="text-white font-medium text-sm">Flyers Publicitarios</h4>
<p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Couché 150gr y 300gr</p>
</div>
</div>

<div className="reveal delay-200 group relative aspect-square bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 cursor-pointer">
<img alt="Revistas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
<h4 className="text-white font-medium text-sm">Catálogos &amp; Revistas</h4>
<p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Grapados o Encolados</p>
</div>
</div>

<div className="reveal delay-300 group relative aspect-square bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 cursor-pointer">
<img alt="Mugs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
<h4 className="text-white font-medium text-sm">Mugs Personalizados</h4>
<p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Sublimación Alta Duración</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio">
<h2 className="reveal text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-10 text-center">Nuestro Trabajo Reciente</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="reveal md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Branding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
<span className="text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">Identidad Corporativa</span>
<h3 className="text-white font-semibold text-2xl tracking-tight">Rebranding TechCorp</h3>
<p className="text-white/70 text-sm mt-2">Cliente: TechCorp Internacional<br/>Año: 2023</p>
<span className="mt-4 px-4 py-1 border border-white/30 rounded-full text-white text-xs hover:bg-white hover:text-black transition-colors">Ver Detalles</span>
</div>
</div>

<div className="reveal delay-100 relative group overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Packaging" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
<span className="text-brand-sky text-xs font-bold uppercase tracking-wider mb-2">Packaging</span>
<h3 className="text-white font-semibold text-xl">Cajas Premium</h3>
<p className="text-white/70 text-sm mt-2">Cliente: Café Orgánico</p>
</div>
</div>

<div className="reveal relative group overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Papelería" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
<span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-2">Editorial</span>
<h3 className="text-white font-semibold text-xl">Brochure Trimestral</h3>
<p className="text-white/70 text-sm mt-2">Cliente: Finanzas Global</p>
</div>
</div>

<div className="reveal delay-100 md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer" onclick="openLightbox(this.querySelector('img').src)">
<img alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
<span className="text-brand-pink text-xs font-bold uppercase tracking-wider mb-2">Gran Formato</span>
<h3 className="text-white font-semibold text-2xl tracking-tight">Campaña Vía Pública</h3>
<p className="text-white/70 text-sm mt-2">Cliente: Fashion Week<br/>Ubicación: Centro Ciudad</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-12 text-center">Paquetes &amp; Promociones</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col">
<div className="mb-4">
<span className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">Emprendedor</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-neutral-900 dark:text-white">$80</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-sky mr-2" icon="lucide:check"></iconify-icon> 1000 Tarjetas
                        </li>
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-sky mr-2" icon="lucide:check"></iconify-icon> Diseño Básico
                        </li>
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-sky mr-2" icon="lucide:check"></iconify-icon> Entrega 48h
                        </li>
</ul>
<button className="w-full py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-brand-sky hover:text-brand-sky transition-colors font-medium text-sm">Elegir Plan</button>
</div>

<div className="reveal delay-100 relative p-8 rounded-3xl border border-brand-pink/30 bg-white dark:bg-neutral-900 shadow-xl shadow-brand-pink/5 flex flex-col scale-105 z-10">
<div className="absolute top-0 right-0 -mt-3 mr-4">
<span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-brand-pink to-brand-yellow text-white">Popular</span>
</div>
<div className="mb-4">
<span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-pink/10 text-brand-pink">Pymes</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-neutral-900 dark:text-white">$150</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-pink mr-2" icon="lucide:check"></iconify-icon> 1000 Tarjetas Premium
                        </li>
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-pink mr-2" icon="lucide:check"></iconify-icon> 1000 Flyers Media Carta
                        </li>
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-pink mr-2" icon="lucide:check"></iconify-icon> 1 Banner Roll-up
                        </li>
</ul>
<button className="w-full py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity font-medium text-sm">Elegir Plan</button>
</div>

<div className="reveal delay-200 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col">
<div className="mb-4">
<span className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">Corporativo</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-neutral-900 dark:text-white">Cotizar</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-yellow mr-2" icon="lucide:check"></iconify-icon> Branding Completo
                        </li>
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-yellow mr-2" icon="lucide:check"></iconify-icon> Señalética de Oficina
                        </li>
<li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
<iconify-icon className="text-brand-yellow mr-2" icon="lucide:check"></iconify-icon> Uniformes
                        </li>
</ul>
<button className="w-full py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-brand-yellow hover:text-brand-yellow transition-colors font-medium text-sm">Contactar Ventas</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div id="about">
<h2 className="reveal text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">Nosotros</h2>
<div className="prose prose-neutral dark:prose-invert">
<p className="reveal text-neutral-500 dark:text-neutral-400 mb-4">
                        En <span className="text-neutral-900 dark:text-white font-medium">PUBLIGRAPHIC</span>, fusionamos la tecnología de impresión más avanzada con un diseño creativo excepcional. Fundada en 2010, hemos ayudado a más de 500 marcas a materializar su visión.
                    </p>
<p className="reveal text-neutral-500 dark:text-neutral-400 mb-6">
                        Nuestro compromiso es la calidad y la puntualidad. Entendemos que en el mundo de la publicidad, el tiempo es oro y la imagen lo es todo.
                    </p>

<div className="grid grid-cols-2 gap-4">
<div className="reveal p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg group hover:scale-105 transition-transform duration-300">
<div className="text-2xl font-bold text-brand-sky">13+</div>
<div className="text-xs text-neutral-500">Años de experiencia</div>
</div>
<div className="reveal delay-100 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg group hover:scale-105 transition-transform duration-300">
<div className="text-2xl font-bold text-brand-pink">2k+</div>
<div className="text-xs text-neutral-500">Proyectos entregados</div>
</div>
<div className="reveal delay-200 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg group hover:scale-105 transition-transform duration-300">
<div className="text-2xl font-bold text-brand-yellow">98%</div>
<div className="text-xs text-neutral-500">Clientes Felices</div>
</div>
<div className="reveal delay-300 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg group hover:scale-105 transition-transform duration-300">
<div className="text-2xl font-bold text-neutral-800 dark:text-white">24/7</div>
<div className="text-xs text-neutral-500">Soporte Técnico</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-200" id="blog">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Blog Reciente</h2>
<a className="text-xs text-brand-sky hover:underline" href="#">Ver todo</a>
</div>
<div className="space-y-6">
<a className="block group" href="#">
<div className="flex gap-4">
<div className="w-24 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-brand-yellow font-medium">Tips de Impresión</span>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-brand-sky transition-colors mt-1">Cómo elegir el papel correcto para tu marca</h3>
<p className="text-xs text-neutral-500 mt-2 line-clamp-2">Gramajes, texturas y acabados: una guía completa para no equivocarte.</p>
</div>
</div>
</a>
<a className="block group" href="#">
<div className="flex gap-4">
<div className="w-24 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-brand-pink font-medium">Tendencias</span>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-brand-sky transition-colors mt-1">El regreso del Neón en 2024</h3>
<p className="text-xs text-neutral-500 mt-2 line-clamp-2">Por qué los colores vibrantes están dominando la publicidad exterior.</p>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="glass p-8 md:p-12 rounded-3xl shadow-2xl dark:shadow-none reveal">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">Hablemos de tu proyecto</h2>
<p className="text-neutral-500 dark:text-neutral-400 mb-8">Déjanos tus datos y te contactaremos a la brevedad.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Nombre</label>
<input className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 text-sm" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Email</label>
<input className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 text-sm" placeholder="tu@email.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Mensaje</label>
<textarea className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 text-sm" placeholder="¿Qué necesitas imprimir?" rows="4"></textarea>
</div>
<button className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-pink via-brand-sky to-brand-yellow text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-brand-sky/20" type="submit">Enviar Mensaje</button>
</form>
</div>

<div className="flex flex-col space-y-6">

<div className="space-y-4">
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Información de Contacto</h3>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky shrink-0">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Av. Siempre Viva 123, Centro EmpresarialCiudad de México, CP 06600</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">+52 55 1234 5678</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-500 dark:text-neutral-400">contacto@publigraphic.com</p>
</div>
</div>
</div>

<div className="w-full h-full min-h-[250px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.536968940807!2d-99.16788502574068!3d19.432607681846747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cac70a1e05%3A0x4427c81729b5c3e5!2sPaseo%20de%20la%20Reforma!5e0!3m2!1ses!2smx!4v1714589201000!5m2!1ses!2smx" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%">
</iframe>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-bold tracking-tighter mb-4 block" href="#">PUBLIGRAPHIC</a>
<p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Agencia de publicidad e imprenta dedicada a la excelencia visual.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Servicios</h4>
<ul className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
<li><a className="hover:text-brand-sky" href="#">Imprenta</a></li>
<li><a className="hover:text-brand-sky" href="#">Gran Formato</a></li>
<li><a className="hover:text-brand-sky" href="#">Merchandising</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Compañía</h4>
<ul className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
<li><a className="hover:text-brand-sky" href="#about">Nosotros</a></li>
<li><a className="hover:text-brand-sky" href="#blog">Blog</a></li>
<li><a className="hover:text-brand-sky" href="#contact">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Social</h4>
<div className="flex space-x-4">
<a className="text-neutral-400 hover:text-brand-pink" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-brand-sky" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-brand-yellow" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">© 2023 Publigraphic. Todos los derechos reservados.</p>
<div className="flex space-x-6 text-xs text-neutral-500">
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Privacidad</a>
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Términos</a>
</div>
</div>
</div>
</footer>


<div className="fixed bottom-4 left-4 z-40 glass rounded-full pl-3 pr-4 py-2 flex items-center gap-3 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" id="audio-player">
<button className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:opacity-90" id="play-btn">
<iconify-icon icon="lucide:play" id="play-icon" width="14"></iconify-icon>
</button>
<div className="flex flex-col justify-center">
<span className="text-[10px] font-semibold text-neutral-900 dark:text-white leading-none">Ambient Mix</span>
<div className="flex items-end gap-[2px] h-3 mt-1 text-brand-sky paused" id="visualizer">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
</div>
</div>

<button className="fixed bottom-4 right-4 z-40 glass w-12 h-12 rounded-full flex items-center justify-center text-neutral-900 dark:text-white shadow-lg opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 border border-white/20" id="scroll-top">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2" width="20"></iconify-icon>
</button>

<div className="fixed inset-0 z-50 bg-black/90 hidden flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-4 right-4 text-white hover:text-brand-pink" onclick="closeLightbox()">
<iconify-icon icon="lucide:x" width="32"></iconify-icon>
</button>
<img className="max-w-full max-h-[90vh] rounded-lg shadow-2xl scale-95 transition-transform duration-300" id="lightbox-img" src=""/>
</div>



    </>
  );
}
