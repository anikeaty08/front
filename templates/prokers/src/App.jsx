import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const header = document.querySelector('header');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuIcon = document.getElementById('mobile-menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                header.classList.remove('bg-[#0A0A0A]/80', 'backdrop-blur-md');
                header.classList.add('bg-black');
                
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                if(mobileMenuIcon) mobileMenuIcon.setAttribute('icon', 'solar:close-linear');
                document.body.style.overflow = 'hidden';
            } else {
                header.classList.add('bg-[#0A0A0A]/80', 'backdrop-blur-md');
                header.classList.remove('bg-black');
                
                mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                if(mobileMenuIcon) mobileMenuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        }

        if(mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMenu);
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none -z-10" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)'}}></div>
<header className="fixed top-0 w-full border-b border-zinc-800/60 bg-[#0A0A0A]/80 backdrop-blur-md z-50 transition-colors duration-300">
<div className="flex z-50 h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
<nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-base font-thin text-zinc-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-zinc-100 transition-colors text-center" href="#services">Services</a>
<a className="hover:text-zinc-100 transition-colors" href="/projetos">Projects</a>
<a className="hover:text-zinc-100 transition-colors" href="/a-nossa-equipa">Our Team</a>
</nav>
<a aria-label="Home" className="flex items-center hover:opacity-80 transition-opacity" href="/"></a>
<button aria-label="Menu" className="md:hidden text-zinc-400 hover:text-zinc-100 flex items-center justify-center p-2 -mr-2" id="mobile-menu-btn">
<iconify-icon className="w-6 h-6 text-2xl" icon="solar:hamburger-menu-linear" id="mobile-menu-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-black z-40 flex flex-col px-6 py-8 opacity-0 pointer-events-none translate-y-4 transition-all duration-300 ease-in-out" id="mobile-menu">
<div className="flex flex-col h-full">
<nav className="flex flex-col mt-4">
<a className="mobile-link flex items-center justify-between text-2xl text-zinc-200 hover:text-white font-light transition-colors py-6 border-b border-zinc-800/60" href="#services">
                        Services
                        <iconify-icon className="text-zinc-600 w-6 h-6" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between text-2xl text-zinc-200 hover:text-white font-light transition-colors py-6 border-b border-zinc-800/60" href="/projetos">
                        Projects
                        <iconify-icon className="text-zinc-600 w-6 h-6" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between text-2xl text-zinc-200 hover:text-white font-light transition-colors py-6 border-b border-zinc-800/60" href="/a-nossa-equipa">
                        Our Team
                        <iconify-icon className="text-zinc-600 w-6 h-6" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</nav>
<div className="mt-auto pb-12">
<p className="text-zinc-500 font-thin text-sm mb-6 text-center">Ready to start your next project?</p>
<a className="mobile-link flex items-center justify-center gap-2 text-lg font-light bg-zinc-100 text-zinc-950 w-full py-4 rounded-full hover:bg-white transition-colors" href="/a-nossa-equipa">
                        Book a call
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-grow overflow-hidden mt-16 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[100vh] max-h-[850px] pointer-events-none z-0 overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}}>
<div className="absolute inset-0 bg-[#0A0A0A]/30 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/10 to-[#0A0A0A] z-10"></div>
<div className="absolute inset-0 w-full h-full">
<img alt="Event Production" className="slide-image absolute inset-0 w-full h-full object-cover slide-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd0a96d8-1468-42fa-9d0a-ec2566371694_3840w.png"/>
<img alt="Stage Production" className="slide-image absolute inset-0 w-full h-full object-cover slide-2" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/490b0a15-170a-41df-8dde-246da5d2567b_3840w.jpg"/>
<img alt="Creative Production" className="slide-image absolute inset-0 w-full h-full object-cover slide-3" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8bd4c67-00d0-4b52-b71b-5c566a447b1e_3840w.jpg"/>
<img alt="Logistics and Printing" className="slide-image absolute inset-0 w-full h-full object-cover slide-4" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75a378b4-d8e8-44cb-8518-4506c8df1fbe_3840w.jpg"/>
</div>
</div>

<div className="md:mt-24 sm:px-12 text-center bg-zinc-900/80 max-w-4xl z-10 border-zinc-800/80 border rounded-[2rem] mt-12 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.7)] group">
<h1 className="flex justify-center items-center tracking-tight mb-10 hero-element">
<img alt="production PROKERS" className="sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-full h-auto max-w-[280px] object-contain drop-shadow transition-transform duration-700 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b797e8b-00e2-40da-ae10-f19135ee156a_1600w.png"/>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-thin text-zinc-100 max-w-2xl mr-auto mb-12 ml-auto drop-shadow-md hero-element delay-100" style={{textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>
                Production of marketing services and products, event production, digital printing, offset printing, logistics and campaign implementation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-element delay-200">
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-zinc-100 text-zinc-950 font-light text-base hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg" href="#services">
                    Start a project
                    <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="sm:w-auto hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-base text-zinc-100 font-thin bg-black/60 backdrop-blur-md w-full border-zinc-600/80 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg" href="/projetos">
                    Explore our work
                </a>
</div>
</div>
<section className="border-y -mx-6 bg-[#0A0A0A] border-zinc-900 mt-24 pt-14 pr-6 pb-14 pl-6 relative z-10">
<div className="max-w-7xl mr-auto ml-auto">
<p className="uppercase md:text-lg text-base font-thin text-zinc-400 tracking-widest text-center mb-12">Trusted by many clients</p>
<div className="flex flex-wrap gap-10 md:gap-16 items-center justify-center">
<img alt="Client Logo 1" className="sm:w-32 sm:h-10 md:w-36 md:h-12 w-24 h-8 object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3976bf7b-aa4e-44bd-89ad-4bacfec9d92b_320w.png"/>
<img alt="Client Logo 2" className="sm:w-32 sm:h-10 md:w-36 md:h-12 w-24 h-8 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f1bde6e-fa3d-4b7e-89b3-e3db2cb74211_320w.png"/>
<img alt="Client Logo 3" className="sm:w-32 sm:h-10 md:w-36 md:h-12 w-24 h-8 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d15ca1c-e83f-4701-891c-2ac1c23e94f5_320w.png"/>
<img alt="Client Logo 4" className="sm:w-32 sm:h-10 md:w-36 md:h-12 w-24 h-8 object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57d5a2b9-6669-49b2-a1db-eff7c1110278_320w.png"/>
<img alt="Client Logo 5" className="w-24 h-8 sm:w-32 sm:h-10 md:w-36 md:h-12 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2639ce74-2817-4945-aad7-d6879537c495_320w.png"/>
</div>
</div>
</section>
<section className="scroll-mt-24 pt-32 pb-12 relative z-10" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex md:hidden justify-center mb-8">
<a aria-label="Go to Home" className="hover:opacity-80 transition-opacity flex items-center justify-center bg-zinc-900/40 border border-zinc-800/80 rounded-full p-3 shadow-lg" href="/">
<img alt="Prokers Logo" className="w-10 h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/333283c9-4018-4b0a-bc1e-161c0124fa68_320w.png"/>
</a>
</div>
<div className="mb-20">
<h2 className="md:text-3xl text-2xl font-light tracking-tight mb-4">Services</h2>
<p className="leading-relaxed -translate-y-1 text-lg font-thin text-zinc-300 max-w-3xl">Our mission is to turn our clients’ ideas into reality through graphic production, audiovisual services, events, activations, and logistics. We work in close partnership with clients—such as creative agencies and major brands—to deliver effective solutions that achieve the best results with efficient investment. By combining consultancy, innovation, and advanced technologies, we ensure high-quality production, strict deadlines, and a deep understanding of each client’s business to provide the ideal solution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group overflow-hidden bg-zinc-900/20 border-zinc-800/60 border rounded-2xl pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex group-hover:text-zinc-100 transition-colors text-zinc-400 bg-zinc-800/40 w-12 h-12 border-zinc-700/50 border rounded-xl mb-16 items-center justify-center group-hover:scale-110 duration-300">
<iconify-icon className="text-2xl w-6 h-6" height="24" icon="solar:pen-new-round-outline" style={{strokeWidth: '1.5', color: 'rgb(244, 244, 245)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-light tracking-tight text-zinc-200 mb-3">Creative and Technical Production</h3>
<p className="leading-relaxed text-base font-thin text-zinc-300">Development and execution of graphic, audiovisual, event, merchandising and activation projects, turning creative ideas into reality.</p>
</div>
<div className="p-10 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-800/40 border border-zinc-700/50 flex items-center justify-center mb-16 text-zinc-400 group-hover:text-zinc-100 transition-colors group-hover:scale-110 duration-300">
<iconify-icon className="text-2xl w-6 h-6" height="24" icon="solar:lightbulb-outline" style={{strokeWidth: '1.5', color: 'rgb(244, 244, 245)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-light tracking-tight text-zinc-200 mb-3">Consulting and Solution Development</h3>
<p className="leading-relaxed text-base font-thin text-zinc-300">Strategic support for clients through consulting, idea generation, and planning effective solutions to achieve the best results.</p>
</div>
<div className="p-10 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="flex group-hover:text-zinc-100 transition-colors text-zinc-400 bg-zinc-800/40 w-12 h-12 border-zinc-700/50 border rounded-xl mb-16 items-center justify-center group-hover:scale-110 duration-300">
<iconify-icon className="text-2xl w-6 h-6" height="24" icon="solar:share-circle-outline" style={{strokeWidth: '1.5', color: 'rgb(244, 244, 245)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-light tracking-tight text-zinc-200 mb-3">Full Project Management and Logistics</h3>
<p className="leading-relaxed text-base font-thin text-zinc-300">Coordination, implementation, and strict adherence to deadlines, ensuring quality production and efficient execution of every project.</p>
</div>
</div>
</div>
</section>
<div className="mt-16 mb-16 relative w-full overflow-hidden border border-zinc-800/60 rounded-2xl bg-zinc-900/20 group z-10">
<div className="sm:h-[280px] md:h-auto md:py-16 flex w-full h-[180px] pt-0 pb-0 items-center justify-center">
<div className="flex flex-row relative items-center justify-center w-full origin-center scale-[0.35] sm:scale-[0.55] md:scale-100">
<div className="w-[360px] h-[360px] shrink-0 rounded-full border-2 border-zinc-700/60 bg-zinc-900/30 flex items-center justify-start pl-12 relative z-10 -mr-32 transition-colors duration-500 hover:border-zinc-600/80">
<span className="uppercase leading-relaxed text-lg font-normal text-zinc-400 tracking-widest text-center w-30">Global<br/>Suppliers</span>
<div className="absolute top-1/2 right-5 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-zinc-800/50 border-2 border-zinc-700/50 flex items-center justify-center text-center p-2 z-20 backdrop-blur-md shadow-inner transition-colors duration-500 hover:bg-zinc-800/70">
<span className="uppercase leading-relaxed text-base font-normal text-zinc-200 tracking-widest">Own<br/>Resources</span>
</div>
</div>
<div className="w-[420px] h-[420px] shrink-0 flex flex-col transition-colors duration-500 hover:border-zinc-600/80 z-20 bg-transparent border-zinc-700/60 border-2 rounded-full relative items-center justify-center">
<div className="flex flex-col text-center w-full h-full items-center justify-center">
<div className="absolute top-16 w-full block">
<div className="uppercase text-lg font-normal text-zinc-300 tracking-widest mb-3">Creative Production</div>
<div className="uppercase text-lg font-normal text-zinc-300 tracking-widest translate-y-12">Procurement</div>
</div>
<div className="absolute bottom-16 w-full block">
<div className="text-lg uppercase mb-3 font-normal text-zinc-300 tracking-widest -translate-y-16">Quality Control</div>
<div className="uppercase text-lg font-normal text-zinc-300 tracking-widest">Logistics</div>
</div>
</div>
</div>
<div className="w-[360px] h-[360px] shrink-0 flex justify-end pr-16 -ml-32 transition-colors duration-500 hover:border-zinc-600/80 bg-zinc-900/30 z-10 border-zinc-700/60 border-2 rounded-full relative items-center">
<span className="text-3xl uppercase font-normal text-zinc-100 tracking-widest -translate-x-12">Client</span>
</div>
</div>
</div>
</div>
<section className="-mx-6 border-zinc-900 border-t pt-20 pr-6 pb-16 pl-6 relative z-10">
<div className="max-w-2xl mx-auto text-center">
<h2 className="md:text-4xl text-3xl font-light tracking-tight mb-6">Ready to build?</h2>
<p className="leading-relaxed text-lg text-zinc-400 font-thin mb-12">Bring your ideas to life with creative production, strategic solutions, and flawless project execution. Let’s make your next vision a reality</p>
<a className="inline-flex items-center gap-2 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 text-base font-light text-zinc-950 bg-zinc-100 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="/a-nossa-equipa">
                    Contact our team
                    <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>
</main>
<footer className="bg-[#0A0A0A] border-zinc-900 border-t mt-auto pt-16 pr-6 pb-16 pl-6 relative z-10">
<div className="flex flex-col md:flex-row gap-8 max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">
<div className="flex items-center gap-3">
<a aria-label="Home" className="hover:text-zinc-300 transition-colors text-zinc-500" href="/">
<svg className="h-6 w-6" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="4"></circle>
<path clip-rule="evenodd" d="M36 68C45.9411 68 54 59.9411 54 50C54 40.0589 45.9411 32 36 32C26.0589 32 18 40.0589 18 50C18 59.9411 26.0589 68 36 68ZM36 58C40.4183 58 44 54.4183 44 50C44 45.5817 40.4183 42 36 42C31.5817 42 28 45.5817 28 50C28 54.4183 31.5817 58 36 58Z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M82 32H67L54 50L67 68H82L64 50L82 32Z" fill="currentColor"></path>
</svg>
</a>
<span className="text-zinc-700 text-sm">/</span>
<span className="text-sm font-thin text-zinc-300">Av. Duque de Ávila 95 3º, 1000-139 Lisboa</span>
</div>
<div className="flex gap-10 text-sm text-zinc-500 font-thin"></div>
</div>
</footer>


    </>
  );
}
