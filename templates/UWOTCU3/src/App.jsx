import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui']
}
}
}



    lucide.createIcons();

    // Initialize animations
    window.addEventListener('load', () => {
      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.opacity = '1';
      });
    });

    // Mobile menu
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuPanel = document.getElementById('mobileMenuPanel');
    const closeMenu = document.getElementById('closeMenu');
    
    const toggleMenu = (show) => {
      if (show) {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => mobileMenuPanel.classList.remove('-translate-x-full'), 10);
      } else {
        mobileMenuPanel.classList.add('-translate-x-full');
        setTimeout(() => mobileMenu.classList.add('opacity-0', 'pointer-events-none'), 300);
      }
    };

    menuBtn?.addEventListener('click', () => toggleMenu(true));
    closeMenu?.addEventListener('click', () => toggleMenu(false));
    mobileMenu?.addEventListener('click', (e) => {
      if (e.target === mobileMenu) toggleMenu(false);
    });

    // Carousel controls
    const carousel = document.getElementById('carousel');
    document.getElementById('prevBtn')?.addEventListener('click', () => {
      carousel.scrollBy({ left: -340, behavior: 'smooth' });
    });
    document.getElementById('nextBtn')?.addEventListener('click', () => {
      carousel.scrollBy({ left: 340, behavior: 'smooth' });
    });

    // Filter pills
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => {
          p.classList.remove('bg-blue-500', 'text-white');
          p.classList.add('bg-gray-800', 'text-gray-300');
        });
        pill.classList.add('bg-blue-500', 'text-white');
        pill.classList.remove('bg-gray-800', 'text-gray-300');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b animate-fade-in bg-slate-50/80 border-slate-200/50" style={{opacity: '1'}}>
<div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:p-6">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 flex items-center justify-center group-hover:scale-105 transition-transform to-green-400">
<svg className="lucide lucide-zap w-5 h-5 text-black" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="hidden sm:block">
<span className="font-semibold text-lg tracking-tight font-geist" style={{}}>Quantum Labs</span>
<p className="text-sm font-geist text-slate-600" style={{}}>AI Solutions</p>
</div>
</a>
<nav className="flex items-center gap-4">
<button className="lg:hidden p-2 rounded-lg focus:outline-none transition-colors hover:bg-slate-200/50" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="relative p-2 rounded-lg focus:outline-none transition-colors hover:bg-slate-200/50">
<svg className="lucide lucide-bell w-6 h-6" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500 text-xs font-medium font-geist text-black" style={{}}>3</span>
</button>
</nav>
</div>
</header>

<div className="fixed inset-0 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-all duration-300 lg:hidden bg-white/60" id="mobileMenu">
<aside className="absolute top-0 left-0 w-80 h-full border-r p-6 flex flex-col gap-6 transform -translate-x-full transition-transform duration-300 bg-slate-100 border-slate-200" id="mobileMenuPanel">
<div className="flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight font-geist" style={{}}>Navigation</span>
<button className="p-2 rounded-lg focus:outline-none transition-colors hover:bg-slate-200" id="closeMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col gap-2">
<a className="px-4 py-3 rounded-lg transition-colors font-geist hover:bg-slate-200" href="#" style={{}}>Home</a>
<a className="px-4 py-3 rounded-lg transition-colors font-geist hover:bg-slate-200" href="#services" style={{}}>Services</a>
<a className="px-4 py-3 rounded-lg transition-colors font-geist hover:bg-slate-200" href="#" style={{}}>Solutions</a>
<a className="px-4 py-3 rounded-lg transition-colors font-geist hover:bg-slate-200" href="#" style={{}}>Contact</a>
</nav>
</aside>
</div>
<main className="lg:pt-32 pt-24">

<section className="max-w-7xl mx-auto px-4 lg:px-6 mb-32">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 space-y-8">
<div className="animate-slide-up" style={{opacity: '1'}}>
<p className="font-medium mb-4 tracking-wide font-geist text-cyan-600" style={{}}>Next-gen technology</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-space-grotesk tracking-tighter" style={{}}>
              Build the future with our 
              <span className="bg-gradient-to-r to-green-500 bg-clip-text text-transparent font-space-grotesk tracking-tighter from-cyan-600" style={{}}>AI-powered</span> 
              solutions
            </h1>
</div>
<div className="animate-slide-up delay-200" style={{opacity: '1'}}>
<p className="text-xl leading-relaxed mb-8 font-geist text-slate-700" style={{}}>Transform your business with cutting-edge artificial intelligence, machine learning, and quantum computing technologies.</p>
<button className="group inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500 px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-geist to-green-400 text-black" style={{}}>
              Get Started
              <span className="flex items-center justify-center w-8 h-8 rounded-full group-hover:translate-x-1 transition-transform bg-black/20">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
<div className="relative order-1 lg:order-2 animate-scale-in delay-300" style={{opacity: '1'}}>
<div className="aspect-square bg-gradient-to-br to-amber-500 rounded-3xl overflow-hidden relative from-cyan-400 via-green-400">
<div className="absolute inset-0 bg-center opacity-60 bg-[url(https://images.unsplash.com/photo-1545431766-45ff67845191?w=1600&amp;q=80)] bg-cover"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-white/80"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 text-sm mb-2 text-black/80">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-geist" style={{}}>Quantum Processing</span>
</div>
<p className="font-medium font-geist text-black" style={{}}>Advanced neural networks</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 lg:px-6" id="services">
<div className="backdrop-blur-sm rounded-3xl p-8 lg:p-12 border animate-fade-in delay-400 bg-slate-100/50 border-slate-200/50" style={{opacity: '1'}}>
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
<div className="animate-slide-up delay-500" style={{opacity: '1'}}>
<p className="uppercase tracking-wider text-sm font-medium mb-3 font-geist text-cyan-600" style={{}}>Our Solutions</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl font-space-grotesk tracking-tighter" style={{}}>
              Cutting-edge AI services that revolutionize how businesses operate and scale
            </h2>
</div>
<div className="flex items-center gap-4 animate-slide-up delay-600" style={{opacity: '1'}}>
<div className="flex items-center gap-3">
<button className="filter-pill transition-all hover:bg-cyan-400 text-sm font-medium text-black font-geist bg-cyan-500 rounded-xl pt-3 pr-6 pb-3 pl-6 bg-gray-800 text-gray-300" data-filter="ai" style={{}}>AI</button>
<button className="filter-pill transition-all hover:bg-slate-300 text-sm font-medium text-slate-700 font-geist bg-slate-200 rounded-xl pt-3 pr-6 pb-3 pl-6" data-filter="ml" style={{}}>Machine</button>
<button className="filter-pill px-6 py-3 rounded-xl text-sm font-medium transition-all font-geist bg-slate-200 text-slate-700 hover:bg-slate-300 bg-gray-800 text-gray-300" data-filter="quantum" style={{}}>Quantum</button>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="p-3 rounded-xl border focus:outline-none transition-colors border-slate-300 hover:bg-slate-200" id="prevBtn">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-3 rounded-xl bg-cyan-500 focus:outline-none transition-colors text-black hover:bg-cyan-400" id="nextBtn">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex overflow-x-auto no-scrollbar snap-x gap-6 scroll-smooth animate-fade-in delay-700" id="carousel" style={{opacity: '1'}}>

<article className="min-w-[280px] sm:min-w-[320px] backdrop-blur-sm rounded-2xl border relative snap-center group hover:border-cyan-500/50 transition-all duration-300 bg-slate-200/50 border-slate-300/50">
<button className="absolute top-4 right-4 p-2 rounded-lg backdrop-blur transition-colors bg-slate-100/70 hover:bg-slate-200">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<div className="aspect-[4/3] bg-gradient-to-br rounded-t-2xl relative overflow-hidden from-cyan-400 to-green-400">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://images.unsplash.com/photo-1618367588411-d9a90fefa881?w=800&amp;q=80)]"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-black">
<svg className="lucide lucide-brain w-4 h-4" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<span className="font-geist" style={{}}>Neural Networks</span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between">
<button className="px-6 py-2 rounded-lg bg-cyan-500 text-sm font-medium transition-colors font-geist text-black hover:bg-cyan-400" style={{}}>Learn More</button>
<span className="font-semibold text-lg font-geist" style={{}}>$2,499</span>
</div>
<div>
<h3 className="font-semibold text-lg mb-1 font-geist" style={{}}>AI Vision Pro</h3>
<p className="text-sm font-geist text-slate-600" style={{}}>Computer vision &amp; image recognition</p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-geist text-slate-600" style={{}}>Starting from</span>
<button className="p-2 rounded-lg bg-cyan-500 transition-colors group-hover:scale-105 text-black hover:bg-cyan-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="min-w-[280px] sm:min-w-[320px] backdrop-blur-sm rounded-2xl border relative snap-center group hover:border-green-500/50 transition-all duration-300 bg-slate-200/50 border-slate-300/50">
<button className="absolute top-4 right-4 p-2 rounded-lg backdrop-blur transition-colors bg-slate-100/70 hover:bg-slate-200">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<div className="aspect-[4/3] bg-gradient-to-br rounded-t-2xl relative overflow-hidden from-green-400 to-amber-400">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://images.unsplash.com/photo-1710162734220-d543f0dff259?w=800&amp;q=80)]"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-black">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="font-geist" style={{}}>Data Analytics</span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between">
<button className="px-6 py-2 rounded-lg bg-green-500 text-sm font-medium transition-colors font-geist text-black hover:bg-green-400" style={{}}>Learn More</button>
<span className="font-semibold text-lg font-geist" style={{}}>$1,899</span>
</div>
<div>
<h3 className="font-semibold text-lg mb-1 font-geist" style={{}}>DataMind Suite</h3>
<p className="text-sm font-geist text-slate-600" style={{}}>Advanced analytics &amp; predictions</p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-geist text-slate-600" style={{}}>Monthly license</span>
<button className="p-2 rounded-lg bg-green-500 transition-colors group-hover:scale-105 text-black hover:bg-green-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="min-w-[280px] sm:min-w-[320px] backdrop-blur-sm rounded-2xl border relative snap-center group hover:border-amber-500/50 transition-all duration-300 bg-slate-200/50 border-slate-300/50">
<button className="absolute top-4 right-4 p-2 rounded-lg backdrop-blur transition-colors bg-slate-100/70 hover:bg-slate-200">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<div className="aspect-[4/3] bg-gradient-to-br rounded-t-2xl relative overflow-hidden from-amber-400 to-cyan-400">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://images.unsplash.com/photo-1687392946857-96c2b7f94b0d?w=800&amp;q=80)]"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-black">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist" style={{}}>Quantum Computing</span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between">
<button className="px-6 py-2 rounded-lg bg-amber-500 text-sm font-medium transition-colors font-geist text-black hover:bg-amber-400" style={{}}>Learn More</button>
<span className="font-semibold text-lg font-geist" style={{}}>$4,299</span>
</div>
<div>
<h3 className="font-semibold text-lg mb-1 font-geist" style={{}}>Quantum Edge</h3>
<p className="text-sm font-geist text-slate-600" style={{}}>Next-gen quantum algorithms</p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-geist text-slate-600" style={{}}>Enterprise</span>
<button className="p-2 rounded-lg bg-amber-500 transition-colors group-hover:scale-105 text-black hover:bg-amber-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>
</div>
</div>
</section>
</main>
<footer className="max-w-7xl mx-auto px-4 lg:px-6 py-16 mt-32 border-t border-slate-200/50">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<p className="font-geist text-slate-600" style={{}}>© 2024 Quantum Labs. All rights reserved.</p>
<nav className="flex gap-8 text-sm">
<a className="transition-colors font-geist text-slate-600 hover:text-black" href="#" style={{}}>Privacy Policy</a>
<a className="transition-colors font-geist text-slate-600 hover:text-black" href="#" style={{}}>Terms of Service</a>
<a className="transition-colors font-geist text-slate-600 hover:text-black" href="#" style={{}}>Security</a>
</nav>
</div>
</footer>



    </>
  );
}
