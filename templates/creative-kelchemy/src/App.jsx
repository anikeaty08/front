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



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#FDFCF8',
900: '#1A1A1A',
},
emerald: {
700: '#046A38',
}
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
mega: '0.2em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        // Mobile Menu Logic - Revised for strictly blocking/unblocking interaction
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        let isMenuOpen = false;

        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            
            // Icon Handling
            if(isMenuOpen) {
                menuIcon.setAttribute('data-lucide', 'x');
                
                // SHOW MENU
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.remove('pointer-events-none');
                mobileMenu.classList.add('pointer-events-auto');
                
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0');
                    mobileMenu.classList.add('opacity-100');
                }, 10);
                
                document.body.style.overflow = 'hidden';

            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
                
                // HIDE MENU
                mobileMenu.classList.remove('opacity-100');
                mobileMenu.classList.add('opacity-0');
                
                // Immediately disable clicks on the fading menu to allow clicks on content behind it if needed, 
                // though usually we wait for fade. But mostly: ensure it doesn't get stuck.
                mobileMenu.classList.remove('pointer-events-auto');
                mobileMenu.classList.add('pointer-events-none');
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
                
                document.body.style.overflow = '';
            }
            lucide.createIcons(); 
        }

        // SPA Routing Logic
        function routeTo(pageId) {
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('fade-in'); 
            });

            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                void targetPage.offsetWidth; 
                targetPage.classList.add('fade-in');
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if(link.dataset.page === pageId) {
                    link.classList.add('text-emerald-700');
                } else {
                    link.classList.remove('text-emerald-700');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Form Handling Logic
        function handleContactSubmit(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const brand = document.getElementById('brand').value;
            const email = document.getElementById('email').value;
            const vision = document.getElementById('vision').value;

            // Construct mailto link with new recipient address to avoid bounce
            const subject = "New Brand Alchemy request";
            const body = `Name: ${name}\nBrand / Project: ${brand}\nEmail: ${email}\nVision: ${vision}`;
            
            // Trigger mailto with generic gmail account
            window.location.href = `mailto:studio.kelchemy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // UI Swap
            document.getElementById('contact-form-container').classList.add('hidden');
            const successMsg = document.getElementById('contact-success');
            successMsg.classList.remove('hidden');
        }

        // Initial Route
        document.addEventListener('DOMContentLoaded', () => {
            routeTo('home');
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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-stone-100 transition-all duration-500">
<div className="max-w-screen-2xl mx-auto px-8 py-6 flex justify-between items-center relative z-50">

<a className="z-50 group flex-shrink-0 mr-12 relative top-px pointer-events-auto" href="#" onclick="routeTo('home')">
<span className="font-sans font-semibold tracking-[0.2em] text-xs group-hover:text-emerald-700 transition-colors duration-300">KELCHEMY™</span>
</a>

<nav className="hidden lg:flex flex-1 gap-x-10 gap-y-x-10 items-center justify-end">
<div className="flex items-center gap-x-10">
<button className="nav-link text-[11px] uppercase tracking-mega text-stone-600 hover:text-emerald-700 transition-colors duration-300 text-emerald-700" data-page="home" onclick="routeTo('home')">Home</button>
<button className="nav-link text-[11px] uppercase tracking-mega text-stone-600 hover:text-emerald-700 transition-colors duration-300" data-page="philosophy" onclick="routeTo('philosophy')">Philosophy</button>
<button className="nav-link text-[11px] uppercase tracking-mega text-stone-600 hover:text-emerald-700 transition-colors duration-300" data-page="method" onclick="routeTo('method')">Method</button>
<button className="nav-link text-[11px] uppercase hover:text-emerald-700 transition-colors duration-300 text-stone-600 tracking-mega" data-page="transformations" onclick="routeTo('transformations')">Transformations</button>
<button className="nav-link text-[11px] uppercase tracking-mega text-stone-600 hover:text-emerald-700 transition-colors duration-300" data-page="ai" onclick="routeTo('ai')">AI</button>
<button className="nav-link text-[11px] uppercase hover:text-emerald-700 transition-colors duration-300 text-stone-600 tracking-mega" data-page="lab" onclick="routeTo('lab')" style={{}}>Lab</button>
<button className="nav-link text-[11px] uppercase tracking-mega text-stone-600 hover:text-emerald-700 transition-colors duration-300" data-page="about" onclick="routeTo('about')">About</button>
</div>
<button className="ml-10 px-7 py-2.5 border border-stone-800/80 text-[11px] uppercase tracking-mega text-stone-900 hover:border-emerald-700 hover:text-emerald-700 transition-all duration-300 whitespace-nowrap bg-transparent" onclick="routeTo('collaboration')">
                    Begin a collaboration
                </button>
</nav>

<button aria-label="Toggle menu" className="lg:hidden z-50 p-2 text-stone-900 focus:outline-none relative pointer-events-auto" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6 transition-transform duration-300" data-lucide="menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-[#FDFCF8] z-40 hidden opacity-0 transition-opacity duration-300 h-screen w-screen overflow-y-auto pointer-events-none" id="mobile-menu">

<div className="min-h-full w-full flex flex-col justify-center items-center px-6 py-24">

<div className="flex flex-col items-center gap-y-7 w-full max-w-sm">
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('home'); toggleMobileMenu()">Home</button>
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('philosophy'); toggleMobileMenu()">Philosophy</button>
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('method'); toggleMobileMenu()">Method</button>
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('transformations'); toggleMobileMenu()">Transformations</button>
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('ai'); toggleMobileMenu()">Kelchemy AI</button>
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('lab'); toggleMobileMenu()">Kelchemy Lab</button>
<button className="font-serif text-2xl leading-relaxed text-stone-900 hover:text-emerald-700 hover:italic transition-all w-full text-center py-2 pointer-events-auto" onclick="routeTo('about'); toggleMobileMenu()">About</button>
</div>

<div className="mt-10 pt-4 w-full flex justify-center">
<button className="font-serif text-xl text-emerald-700 italic border-b border-emerald-700 pb-1 py-2 pointer-events-auto" onclick="routeTo('collaboration'); toggleMobileMenu()">Begin a collaboration</button>
</div>
</div>
</div>
</header>

<div className="flex-grow pt-24 relative z-0" id="app-container">

<main className="page-content fade-in relative z-0" id="home">
<section className="min-h-[85vh] flex flex-col overflow-hidden text-center pr-6 pl-6 relative items-center justify-center">
<div className="max-w-4xl mx-auto z-10 space-y-8">
<h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-emerald-700 mb-4">Parisian Branding House</h2>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-stone-900 font-normal">
                        Turn the ordinary <br/> <span className="italic font-light">into iconic.</span>
</h1>
<div className="h-px w-24 bg-stone-900 mx-auto my-8"></div>
<p className="font-sans font-light text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        Kelchemy transforme les marques ordinaires en identités désirables, précises et mémorables.
                    </p>
<p className="md:text-2xl text-xl italic text-stone-800 font-serif max-w-xl mr-auto ml-auto" style={{}}>"Kelchemy accompagne les marques et fondatrices qui veulent se transformer, pas simplement se montrer."</p>
<div className="pt-8">
<button className="group relative px-8 py-3 bg-transparent border border-stone-900 text-stone-900 text-xs uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-300 pointer-events-auto" onclick="routeTo('method')">
<span className="absolute inset-0 w-full h-full bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
                            Discover the method
                        </button>
</div>
</div>
<div className="absolute inset-0 opacity-10 pointer-events-none -z-10 bg-[url('https://images.unsplash.com/photo-1590623190827-04874b334185?q=80&amp;w=2541&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-multiply"></div>
</section>
<section className="py-24 md:py-32 px-6 border-t border-stone-100 relative z-10">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<img alt="Editorial Visual" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Clarity over noise.</h2>
<div className="w-12 h-0.5 bg-emerald-700"></div>
<p className="font-sans font-light text-stone-600 leading-loose text-justify">
                            Dans un monde saturé d’images, Kelchemy privilégie l’intention, la précision et la vision. Chaque projet est pensé comme une transformation stratégique, pas comme une simple exécution visuelle.
                        </p>
<div className="pt-8 space-y-6 border-l border-stone-200 pl-8">
<div className="group cursor-pointer pointer-events-auto" onclick="routeTo('philosophy')">
<h3 className="font-serif text-xl italic text-stone-500 group-hover:text-stone-900 transition-colors">The Philosophy</h3>
<p className="text-xs uppercase tracking-widest text-emerald-700 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</p>
</div>
<div className="group cursor-pointer pointer-events-auto" onclick="routeTo('method')">
<h3 className="font-serif text-xl italic text-stone-500 group-hover:text-stone-900 transition-colors">Brand Alchemy™</h3>
<p className="text-xs uppercase tracking-widest text-emerald-700 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</p>
</div>
<div className="group cursor-pointer pointer-events-auto" onclick="routeTo('transformations')">
<h3 className="font-serif text-xl italic text-stone-500 group-hover:text-stone-900 transition-colors">Transformations</h3>
<p className="text-xs uppercase tracking-widest text-emerald-700 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="philosophy">
<section className="py-32 px-6 max-w-4xl mx-auto">
<div className="text-center mb-24">
<span className="text-emerald-700 text-xs uppercase tracking-widest block mb-4">Our Belief</span>
<h1 className="font-serif text-5xl md:text-7xl text-stone-900 tracking-tight leading-none mb-12">A vision before visibility.</h1>
<div className="w-px h-16 bg-stone-300 mx-auto"></div>
</div>
<div className="prose prose-lg prose-stone mx-auto font-sans font-light text-stone-600 leading-loose">
<p className="text-xl md:text-2xl text-stone-900 font-serif italic mb-12 text-center">
                        "Kelchemy est née d’une conviction simple : les marques fortes ne crient pas, elles s’imposent."
                    </p>
<p className="mb-8">
                        La philosophie Kelchemy repose sur la clarté, la retenue et la cohérence à long terme. Nous croyons que le luxe réside dans l'absence de superflu. Une marque iconique n'a pas besoin d'ajouter du bruit au monde; elle doit offrir une perspective.
                    </p>
<div className="my-16">
<img alt="Texture Philosophy" className="w-full h-96 object-cover object-center grayscale opacity-80" src="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<p className="text-xs text-stone-400 mt-2 text-right uppercase tracking-widest">Natural Order</p>
</div>
<p>
                        Notre approche est celle de l'essentialisme. Nous dépouillons l'identité de tout ce qui dilue son message pour ne garder que l'or pur : l'émotion, la vérité et l'exigence.
                    </p>
</div>
<div className="mt-24 text-center">
<button className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors pointer-events-auto" onclick="routeTo('method')">
                        Discover the method →
                    </button>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="method">
<section className="py-24 px-6 bg-[#FDFCF8]">
<div className="max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
<h1 className="font-serif text-5xl md:text-6xl tracking-tight">Brand Alchemy™</h1>
<div className="w-12 h-0.5 bg-emerald-700"></div>
<p className="font-sans font-light text-stone-600 leading-loose">
                                Brand Alchemy™ est une méthode de transformation de marque. Elle permet de transformer une idée brute en une identité premium, cohérente et désirable.
                            </p>
<button className="inline-block mt-8 px-6 py-3 border border-stone-200 text-xs uppercase tracking-widest hover:border-stone-900 transition-colors pointer-events-auto" onclick="routeTo('transformations')">
                                See the transformations →
                            </button>
</div>
<div className="lg:col-span-8 space-y-0">
<div className="group border-t border-stone-200 py-16 transition-colors hover:bg-stone-50">
<div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-emerald-700 text-xs">01</span>
<div>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 group-hover:italic transition-all">Essence</h3>
<p className="font-sans font-light text-stone-600 max-w-md">Identifier la matière première de la marque. Nous creusons pour trouver la vérité fondamentale qui rend votre projet unique.</p>
</div>
</div>
</div>
<div className="group border-t border-stone-200 py-16 transition-colors hover:bg-stone-50">
<div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-emerald-700 text-xs">02</span>
<div>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 group-hover:italic transition-all">Clarity</h3>
<p className="font-sans font-light text-stone-600 max-w-md">Structurer une vision lisible et stratégique. Le chaos créatif est ordonné pour créer une direction précise.</p>
</div>
</div>
</div>
<div className="group border-t border-stone-200 py-16 transition-colors hover:bg-stone-50">
<div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-emerald-700 text-xs">03</span>
<div>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 group-hover:italic transition-all">Transformation</h3>
<p className="font-sans font-light text-stone-600 max-w-md">Élever l’image, le positionnement et la perception. C'est l'étape charnière où l'ordinaire devient remarquable.</p>
</div>
</div>
</div>
<div className="group border-t border-b border-stone-200 py-16 transition-colors hover:bg-stone-50">
<div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-emerald-700 text-xs">04</span>
<div>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 group-hover:italic transition-all">Expression</h3>
<p className="font-sans font-light text-stone-600 max-w-md">Créer un univers visuel fort et cohérent. Design, direction artistique et tonalité s'unissent.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="transformations">
<section className="py-24 px-6">
<div className="max-w-screen-xl mx-auto mb-24 text-center">
<h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8">Transformations</h1>
<p className="font-sans font-light text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        Ces projets sont des exercices de vision créative. Ils illustrent ce que devient une marque lorsque l’on applique la méthode Brand Alchemy™.
                    </p>
</div>
<div className="max-w-screen-xl mx-auto mb-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-stone-200 pb-4">
<h2 className="font-serif text-3xl italic">Maison Aube</h2>
<span className="text-xs uppercase tracking-widest text-emerald-700">From visibility to authority</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<img alt="Before Concept" className="w-full h-[500px] object-cover hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<img alt="After Result" className="w-full h-[500px] object-cover hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="max-w-screen-xl mx-auto mb-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-stone-200 pb-4">
<h2 className="font-serif text-3xl italic">Sola Skin</h2>
<span className="text-xs uppercase tracking-widest text-emerald-700">From product to universe</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<img alt="Before Concept" className="w-full h-[500px] object-cover hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<img alt="After Result" className="w-full h-[500px] object-cover hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-center">
<button className="bg-stone-900 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-emerald-700 transition-colors duration-300 pointer-events-auto" onclick="routeTo('collaboration')">
                        Begin a collaboration
                    </button>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="ai">
<section className="py-24 px-6 min-h-screen">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="self-center">
<span className="text-xs font-mono text-emerald-700 mb-4 block">[LAB_001]</span>
<h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8">Kelchemy AI</h1>
<p className="font-sans font-light text-stone-600 leading-loose mb-8">
                            Kelchemy AI est un laboratoire visuel. Un espace d’exploration où l’intelligence artificielle devient un outil créatif au service des marques. Nous repoussons les limites du réel pour imaginer des textures, des formes et des atmosphères inédites.
                        </p>
<div className="flex gap-4">
<div className="h-px w-full bg-gradient-to-r from-emerald-700 to-transparent self-center"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<img alt="AI Experiment 1" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="AI Experiment 2" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="AI Experiment 3" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="AI Experiment 4" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="lab">
<section className="py-32 px-6 min-h-[85vh] flex flex-col justify-center items-center text-center">
<div className="max-w-3xl mx-auto space-y-12">
<h1 className="font-serif text-5xl md:text-7xl tracking-tight text-stone-900">Kelchemy Lab</h1>
<div className="w-16 h-0.5 bg-emerald-700 mx-auto"></div>
<p className="font-sans font-light text-stone-600 leading-loose text-lg">
                        Kelchemy Lab est l’espace physique où les idées prennent forme.
                        <br/>
                        Un lieu dédié à la création, à la direction artistique et à l’expérimentation visuelle, pensé pour accueillir les projets de nos clients et les rendez-vous stratégiques.
                    </p>
<div className="border border-stone-200 p-8 md:p-12 inline-block text-left w-full md:w-auto">
<div className="flex items-start gap-4 mb-6">
<svg className="lucide lucide-clock w-5 h-5 text-emerald-700 mt-0.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="space-y-2 font-sans font-light text-stone-600 text-sm">
<p><span className="font-medium text-stone-900 uppercase tracking-widest text-xs">Lundi à vendredi :</span> 9h – 17h</p>
<p><span className="font-medium text-stone-900 uppercase tracking-widest text-xs">Week-end :</span> 9h – 22h</p>
</div>
</div>
<p className="font-serif italic text-stone-800 text-lg">
                            Notre bureau, studio photo et espaces podcast sont ouverts pour accueillir nos clients sur rendez-vous.
                        </p>
</div>
<div className="pt-8 relative z-20">
<p className="font-serif text-lg md:text-xl text-stone-600 italic">
                            Reserve a studio session via <a className="text-emerald-700 underline underline-offset-4 decoration-1 hover:text-emerald-800 transition-colors relative z-30 inline-block pointer-events-auto" href="https://kelchemylab.as.me/">Kelchemy Lab</a>.
                        </p>
</div>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="about">
<section className="py-24 px-6">
<div className="max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
<div>
<h1 className="font-serif text-5xl md:text-6xl tracking-tight mb-8">About Kelchemy</h1>
<p className="font-sans font-light text-stone-600 leading-loose mb-12 text-lg">
                                Kelchemy est un studio de stratégie et de direction artistique basé à Paris. Chaque projet est pensé comme une transformation, menée avec exigence et intention.
                            </p>
<div className="border-t border-stone-200 pt-8 mt-8">
<h3 className="font-serif text-2xl mb-4 italic">Founder</h3>
<p className="font-sans font-light text-stone-600 leading-loose">
                                    Kelchemy est dirigé par Felicité. Une vision portée par l’exigence, la précision et la transformation des marques en icônes.
                                </p>
</div>
<div className="mt-12 flex items-center space-x-2 text-emerald-700">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs uppercase tracking-widest">Paris, France</span>
</div>
</div>
<div className="relative">
<img alt="Felicité, Founder of Kelchemy" className="w-full h-[700px] object-cover object-top filter grayscale contrast-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2">
<span className="text-[10px] uppercase tracking-widest text-stone-900">Felicité — Founder &amp; AD</span>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content hidden relative z-0" id="collaboration">
<section className="py-32 px-6 min-h-[80vh] flex flex-col justify-center">
<div className="max-w-3xl mx-auto text-center w-full">
<h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8">Begin a collaboration</h1>
<div className="w-16 h-0.5 bg-emerald-700 mx-auto mb-12"></div>
<p className="font-sans font-light text-stone-600 leading-loose text-lg mb-12">
                        L’accompagnement Brand Alchemy™ se fait exclusivement sur mesure. Chaque transformation commence par une demande et une étude approfondie du potentiel de la marque.
                    </p>
<div id="contact-form-container">
<form className="max-w-xl mx-auto space-y-8 text-left mb-16 relative z-10" onsubmit="handleContactSubmit(event)">
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="name">Name</label>
<input className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 focus:border-emerald-700 focus:outline-none transition-colors pointer-events-auto" id="name" name="name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="brand">Brand / Project</label>
<input className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 focus:border-emerald-700 focus:outline-none transition-colors pointer-events-auto" id="brand" name="brand" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="email">Email</label>
<input className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 focus:border-emerald-700 focus:outline-none transition-colors pointer-events-auto" id="email" name="email" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="vision">Vision</label>
<textarea className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-900 focus:border-emerald-700 focus:outline-none transition-colors resize-none pointer-events-auto" id="vision" name="vision" required="" rows="4"></textarea>
</div>
<div className="text-center pt-8">
<button className="bg-stone-900 text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-emerald-700 transition-colors duration-300 w-full md:w-auto pointer-events-auto" type="submit">
                                    Send Request
                                </button>
</div>
</form>
</div>
<div className="hidden max-w-xl mx-auto mb-16 fade-in" id="contact-success">
<p className="font-serif italic text-2xl text-stone-900 leading-relaxed">
                            Thank you. Your request has been received. We will get back to you shortly.
                        </p>
</div>
</div>
</section>
</main>
</div>

<footer className="bg-[#FDFCF8] border-t border-stone-200/60 pb-12 pt-32 px-6 md:px-12 mt-auto relative z-0">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-8 items-start">
<div className="flex flex-col gap-1">
<span className="font-sans font-semibold text-stone-900 tracking-[0.2em] text-xs">KELCHEMY™</span>
<span className="text-[11px] text-stone-400 uppercase tracking-[0.15em] mt-2">Parisian Branding House</span>
<span className="text-[11px] text-stone-400 uppercase tracking-[0.15em]">Est. 2024</span>
</div>
<div className="flex flex-col gap-3">
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('home')">Home</button>
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('philosophy')">Philosophy</button>
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('method')">Method</button>
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('transformations')">Transformations</button>
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('about')">About</button>
</div>
<div className="flex flex-col gap-3">
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('ai')">AI</button>
<button className="text-[11px] uppercase hover:text-stone-900 transition-colors text-stone-500 tracking-[0.15em] text-left pointer-events-auto" onclick="routeTo('lab')" style={{}}>Lab</button>
<button className="text-left text-[11px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors pointer-events-auto" onclick="routeTo('collaboration')">Begin</button>
</div>
<div className="flex flex-col gap-2">
<a className="font-serif italic text-lg text-stone-900 hover:text-emerald-700 transition-colors pointer-events-auto" href="mailto:studio.kelchemy@gmail.com">studio.kelchemy@gmail.com</a>
<span className="text-[11px] text-stone-400 uppercase tracking-[0.15em]">Inquiries Only</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-24 mt-12 border-t border-stone-100 text-[10px] uppercase tracking-widest text-stone-400">
<p>© 2024 Kelchemy. All rights reserved.</p>
<p>Designed for Clarity.</p>
</div>
</div>
</footer>


    </>
  );
}
