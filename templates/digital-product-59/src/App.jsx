import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#09090b',
950: '#0c0c0e'
},
// Override indigo palette to blue to remove purple globally
indigo: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
950: '#172554',
},
accent: {
500: '#3b82f6',
}
}
}
}
};



              (function() {
                const container = document.getElementById('hero-gallery-container');
                const track = document.getElementById('hero-gallery-track');
                const prevBtn = document.getElementById('hero-gallery-prev');
                const nextBtn = document.getElementById('hero-gallery-next');
                const indicator = document.getElementById('hero-gallery-indicator');
                let index = 0;
                const total = 3;

                function updateSlider() {
                    // Slide transition
                    track.style.transform = `translateX(-${index * 100}%)`;
                    // Update indicator text
                    indicator.textContent = String(index + 1).padStart(2, '0');
                }

                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    index = (index - 1 + total) % total;
                    updateSlider();
                });

                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    index = (index + 1) % total;
                    updateSlider();
                });

                // Keyboard navigation support within component
                container.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') prevBtn.click();
                    if (e.key === 'ArrowRight') nextBtn.click();
                });
              })();
            


          (function() {
            const projects = [
              {
                title: "Vortex",
                subtitle: "Next-Gen Trading Platform",
                description: "A comprehensive redesign of a high-frequency trading dashboard. Focusing on data density, immediate readability, and reducing cognitive load for institutional traders.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed23e0cc-96ba-4b91-91e4-10e9c468c87d_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0df3856-8c00-497c-a749-6e0d6ecb27d9_1600w.webp"
              },
              {
                title: "AuraOS",
                subtitle: "Mobile Operating System",
                description: "Concept operating system focused on ambient computing and gesture-based interactions, removing the barrier between user intent and digital action.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12ae025d-aa07-4566-8c33-f8793b0c6952_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70c7044-8476-4d86-b5d5-fe5bd8d8d8aa_1600w.webp"
              },
              {
                title: "Flux",
                subtitle: "Design System",
                description: "An atomic design system built for scale. 400+ components, comprehensive documentation, and token-based architecture for multi-brand support.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e425be-9296-43e6-8254-cf1f86528235_1600w.webp"
              },
              {
                title: "Zenith",
                subtitle: "AI Health Assistant",
                description: "Integrative health platform utilizing LLMs to provide personalized wellness insights. Privacy-first architecture with a calming, minimal UI.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137c11b4-cb83-47e7-a67b-0fbc4bc7c94c_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg"
              }
            ];

            let currentIndex = 0;
            const totalSlides = projects.length;

            function updateSlide() {
              const project = projects[currentIndex];
              document.getElementById('project-title').textContent = project.title;
              document.getElementById('project-subtitle').textContent = project.subtitle;
              document.getElementById('project-description').textContent = project.description;
              document.getElementById('gallery-img-1').src = project.img1;
              document.getElementById('gallery-img-2').src = project.img2;
              document.getElementById('current-slide').textContent = String(currentIndex + 1).padStart(2, '0');
              document.getElementById('total-slides').textContent = String(totalSlides).padStart(2, '0');
            }

            document.getElementById('next-btn').addEventListener('click', function() {
              currentIndex = (currentIndex + 1) % totalSlides;
              updateSlide();
            });

            document.getElementById('prev-btn').addEventListener('click', function() {
              currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
              updateSlide();
            });

            // Init
            document.getElementById('total-slides').textContent = String(totalSlides).padStart(2, '0');
          })();
        


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed grid-lines pointer-events-none z-0 top-0 right-0 bottom-0 left-0 overflow-hidden opacity-50" style={{}}>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="neonGradient1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(59, 130, 246, 0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(59, 130, 246, 0.5)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="neonGradient2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(45, 212, 191, 0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(45, 212, 191, 0.5)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(45, 212, 191, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
<filter height="200%" id="neonGlow" width="200%" x="-50%" y="-50%">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="1" x1="-200" x2="0" y1="25%" y2="25%">
<animate attributename="x1" dur="8s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="x2" dur="8s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="1" x1="-200" x2="0" y1="50%" y2="50%">
<animate attributename="x1" dur="10s" repeatcount="indefinite" values="100%;-200"></animate>
<animate attributename="x2" dur="10s" repeatcount="indefinite" values="120%;0"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="1" x1="25%" x2="25%" y1="-200" y2="0">
<animate attributename="y1" dur="9s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="y2" dur="9s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="1" x1="75%" x2="75%" y1="-200" y2="0">
<animate attributename="y1" dur="7s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="y2" dur="7s" repeatcount="indefinite" values="0;120%"></animate>
</line>
</svg>
</div>

<nav className="flex md:px-12 bg-cyan-100/50 z-50 border-black/5 border-b pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 flex items-center justify-center font-bold text-sm tracking-tighter to-green-600">
          K.
        </div>
<span className="font-bold tracking-tight text-lg">KAIROS</span>
</div>
<div className="relative">
<button className="group flex items-center gap-3 px-5 py-2 border rounded-full transition duration-300 bg-transparent border-black/10 hover:bg-black/5" onclick="document.getElementById('nav-dropdown').classList.toggle('hidden')" style={{}}>
<span className="text-xs font-medium tracking-wide group-hover:text-white text-black/80">
            Menu
          </span>
<svg className="text-black/80" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
<div className="hidden absolute right-0 top-full mt-2 w-56 border shadow-2xl py-2 z-50 rounded-xl overflow-hidden bg-cyan-100 border-black/10" id="nav-dropdown" style={{}}>
<a className="block px-6 py-3 text-xs font-medium transition-colors tracking-wide border-b text-black/70 hover:bg-black/5 border-black/5 hover:text-blue-600" href="#">
            Work
          </a>
<a className="block px-6 py-3 text-xs font-medium transition-colors tracking-wide border-b text-black/70 hover:bg-black/5 border-black/5 hover:text-blue-600" href="#">
            Playground
          </a>
<a className="block px-6 py-3 text-xs font-medium transition-colors tracking-wide border-b text-black/70 hover:bg-black/5 border-black/5 hover:text-blue-600" href="#">
            About
          </a>
<a className="block px-6 py-3 text-xs font-medium transition-colors tracking-wide text-black/70 hover:bg-black/5 hover:text-blue-600" href="#">
            Contact
          </a>
</div>
</div>
</nav>

<main className="z-10 relative">

<section className="md:pt-24 md:pb-32 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-0 border-b pt-16 pr-6 pb-20 pl-6 relative gap-x-0 gap-y-0 border-black/5" style={{}}>
<video autoplay="" className="z-10 opacity-10 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 mix-blend-screen grayscale" data-container-bg="true" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/6b32f77f-a909-458f-a1b2-5a5c434c4fa0/1.mp4"></video>

<div className="col-span-1 flex flex-col z-20 h-full relative justify-between">
<div className="mb-16">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
<p className="text-[10px] uppercase font-mono font-medium tracking-widest text-black/50">
                Available for hire
              </p>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-4 font-space-grotesk">
              DIGITAL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600" style={{}}>
                CRAFT
              </span>
</h1>
<div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent my-6"></div>
<p className="text-sm max-w-xs leading-relaxed text-black/60">
              Senior Product Designer specializing in complex systems,
              interactions, and future-forward interfaces.
            </p>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div className="group cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl mb-4 group-hover:text-white transition-colors text-indigo-600" data-icon="solar:devices-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Z" fill="currentColor" fillOpacity="0.5"></path>
<path d="M14 16h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z" fill="currentColor"></path>
</svg>
<h3 className="text-xs font-semibold leading-tight mb-2 uppercase tracking-wide">
                Product &amp;
                <br/>
                Systems
              </h3>
<div className="w-4 h-0.5 group-hover:w-8 transition-all bg-blue-500/50" style={{}}></div>
</div>
<div className="group cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl mb-4 group-hover:text-white transition-colors text-indigo-600" data-icon="solar:magic-stick-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m16.517 7.275l-4.407 4.407a2.23 2.23 0 0 0 0 3.151l2.484 2.485a2.23 2.23 0 0 0 3.152 0l4.407-4.407a2.23 2.23 0 0 0 0-3.152l-2.485-2.484a2.23 2.23 0 0 0-3.151 0" fill="currentColor" fillOpacity="0.5"></path>
<path d="m9.626 14.167l2.484 2.485a3.73 3.73 0 0 1 0 5.273l-.402.402a3.73 3.73 0 0 1-5.273 0l-2.484-2.485a3.73 3.73 0 0 1 0-5.273l.402-.402a3.73 3.73 0 0 1 5.273 0" fill="currentColor"></path>
</svg>
<h3 className="text-xs font-semibold leading-tight mb-2 uppercase tracking-wide">
                Motion &amp;
                <br/>
                Interaction
              </h3>
<div className="w-4 h-0.5 group-hover:w-8 transition-all bg-blue-500/50" style={{}}></div>
</div>
</div>
<div className="flex gap-12 mt-auto text-xs font-medium tracking-wide text-black/40" style={{}}>
<a className="flex items-center gap-2 transition-colors hover:text-black" href="#" style={{}}>
              Selected Work
              <svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="flex items-center gap-2 transition-colors hover:text-black" href="#" style={{}}>
              Playground
              <svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex md:py-0 pt-10 pb-10 relative items-center justify-center">

<div className="aspect-[4/3] group overflow-hidden md:aspect-auto md:h-[600px] w-full relative rounded-sm border border-black/5" id="hero-gallery-container" style={{}}>

<div className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-full h-full" id="hero-gallery-track" style={{}}>

<div className="flex-shrink-0 z-10 w-full h-full relative" style={{}}>
<img alt="Abstract Architecture" className="w-full h-full object-cover brightness-75 contrast-125 saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71fe2f32-4e59-42cb-af7b-2352e74c0f12_3840w.png"/>
<div className="bg-gradient-to-t via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0 from-cyan-100/90"></div>
<div className="absolute inset-0 mix-blend-overlay bg-blue-100/10"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2" style={{}}>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border text-[10px] font-mono uppercase backdrop-blur-md border-blue-500/30 bg-blue-500/10 text-blue-600" style={{}}>
                      Case Study
                    </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 text-black" style={{}}>
                    Nebula Finance
                  </h3>
<p className="text-sm line-clamp-1 text-black/60" style={{}}>
                    Decentralized trading platform with real-time visualization.
                  </p>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Geometric Form" className="w-full h-full object-cover brightness-75 contrast-125 saturate-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/583b7438-312a-4a71-a636-cc8c7cb78548_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-cyan-100/90"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border border-green-500/30 bg-green-500/10 text-[10px] font-mono uppercase backdrop-blur-md text-green-700" style={{}}>
                      System
                    </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 text-black" style={{}}>
                    Prism UI Kit
                  </h3>
<p className="text-sm line-clamp-1 text-black/60" style={{}}>
                    Enterprise-grade design system for SaaS applications.
                  </p>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Abstract Structure" className="w-full h-full object-cover brightness-75 grayscale contrast-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e425be-9296-43e6-8254-cf1f86528235_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-cyan-100/90"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono uppercase backdrop-blur-md text-emerald-700">
                      Mobile
                    </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 text-black" style={{}}>
                    Echo Stream
                  </h3>
<p className="text-sm line-clamp-1 text-black/60" style={{}}>
                    Music discovery through haptic feedback and spatial audio.
                  </p>
</div>
</div>
</div>

<div className="flex gap-3 z-20 absolute right-8 bottom-8 items-center">

<div className="px-3 py-1.5 rounded-full backdrop-blur-xl border text-xs font-mono mr-2 shadow-lg bg-cyan-100/80 border-black/10 text-black/90" style={{}}>
<span id="hero-gallery-indicator">01</span>
<span className="mx-1 text-black/30">/</span>
                03
              </div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all duration-300 group/btn shadow-lg border-black/10 bg-cyan-100/80 text-black hover:bg-black hover:text-white" id="hero-gallery-prev" style={{}}>
<svg className="group-hover/btn:-translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all duration-300 group/btn shadow-lg border-black/10 bg-cyan-100/80 text-black hover:bg-black hover:text-white" id="hero-gallery-next" style={{}}>
<svg className="group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>


</div>
</div>

<div className="col-span-1 flex flex-col md:items-end z-20 md:pt-0 h-full pt-8 relative items-start" style={{}}>
<p className="text-[10px] uppercase font-semibold text-[#ffffff]/60 tracking-widest mb-1 font-mono">
            Years Experience
          </p>
<span className="text-6xl md:text-8xl font-bold tracking-tighter font-space-grotesk text-black">
            08
          </span>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 border-b border-black/5" style={{}}>

<div className="md:p-12 overflow-hidden group border-r pt-6 pr-6 pb-6 pl-6 relative border-black/5" id="gallery-container">
<div className="grid grid-cols-2 gap-4 h-full">
<div className="bg-blue-500/10 w-full h-64 md:h-80 relative overflow-hidden rounded-lg">
<img className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" id="gallery-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed23e0cc-96ba-4b91-91e4-10e9c468c87d_1600w.webp" style={{}}/>
</div>
<div className="w-full h-64 md:h-80 relative overflow-hidden translate-y-8 rounded-lg bg-green-100/20" style={{}}>
<img className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 delay-75" id="gallery-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0df3856-8c00-497c-a749-6e0d6ecb27d9_1600w.webp"/>
</div>
</div>
</div>

<div className="md:p-12 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<div className="flex items-center gap-3 mb-6">
<span className="text-[10px] font-mono border px-2 py-0.5 rounded border-black/10 text-black/50">
              Selected Case Study
            </span>
</div>
<h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4 font-space-grotesk" id="project-title">
            Vortex
          </h2>
<h3 className="text-xl md:text-2xl font-medium mb-4 text-blue-600" id="project-subtitle">
            Next-Gen Trading Platform
          </h3>
<p className="leading-relaxed md:text-base text-sm text-[#ffffff]/60 max-w-md mb-10" id="project-description">
            A comprehensive redesign of a high-frequency trading dashboard.
            Focusing on data density, immediate readability, and reducing
            cognitive load for institutional traders.
          </p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-black/10" style={{}}>
<div className="flex items-center gap-4">
<span className="text-3xl font-mono font-semibold">
<span className="" id="current-slide">01</span>
<span className="text-base align-top ml-1 text-black/30" style={{}}>
                  /
                  <span className="" id="total-slides">04</span>
</span>
</span>
<div className="flex gap-2 ml-4">
<button className="w-8 h-8 rounded-full border flex items-center justify-center transition border-black/10 bg-black/5 hover:bg-black hover:text-white" id="prev-btn" style={{}}>
<svg className="lucide lucide-chevron-left w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-8 h-8 rounded-full border flex items-center justify-center transition border-black/10 bg-black/5 hover:bg-black hover:text-white" id="next-btn" style={{}}>
<svg className="lucide lucide-chevron-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
<a className="px-6 py-3 border rounded-full text-xs font-semibold transition-colors flex items-center gap-2 uppercase tracking-wider border-black/10 hover:bg-black hover:text-white" href="#" style={{}}>
              View Case Study
              <svg aria-hidden="true" className="iconify" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>

</section>

<section className="relative border-b border-black/5" style={{}}>

<div className="absolute top-0 left-0 md:left-1/4 flex z-20">
<button className="text-xs font-semibold uppercase tracking-wider border-r pt-3 pr-8 pb-3 pl-8 backdrop-blur-sm bg-black/5 border-black/5 text-blue-600" style={{}}>
            Mobile App
          </button>
<button className="transition-colors text-xs uppercase tracking-wider font-semibold pt-3 pr-8 pb-3 pl-8 hover:text-black text-black/40" style={{}}>
            Web Platform
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-6 md:p-12 pt-24 md:pt-32 flex flex-col justify-center border-r relative border-black/5" style={{}}>
<div className="inline-flex mb-4">
<span className="px-2 py-1 rounded bg-blue-500/10 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20 text-blue-600">
                Featured
              </span>
</div>
<h2 className="md:text-7xl uppercase text-5xl font-bold tracking-tighter mb-8 font-space-grotesk">
              Lumina
            </h2>
<div className="mb-12">
<h4 className="text-xl font-semibold mb-2">Smart Home Control</h4>
<h5 className="text-lg mb-6 text-black/50" style={{}}>
                IoT Dashboard &amp; Mobile App
              </h5>
<p className="leading-relaxed text-sm text-[#ffffff]/60 max-w-sm">
                Unified control interface for over 500+ smart devices. Reducing
                friction in daily routines through predictive automation and
                context-aware widgets.
              </p>
</div>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-black/10" style={{}}>
<div className="">
<p className="text-[10px] font-bold uppercase mb-1 text-blue-500 font-mono" style={{}}>
                  Downloads
                </p>
<p className="text-2xl font-bold">2M+</p>
</div>
<div className="">
<p className="text-[10px] font-bold uppercase mb-1 text-blue-500 font-mono" style={{}}>
                  Screens
                </p>
<p className="text-2xl font-bold">140+</p>
</div>
<div className="">
<p className="text-[10px] font-bold uppercase mb-1 text-blue-500 font-mono" style={{}}>
                  Role
                </p>
<p className="text-2xl font-bold">Lead</p>
</div>
</div>
</div>

<div className="relative h-[500px] md:h-auto overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a4f4ae5-d069-4a6e-866b-e0ccc11b6b1f_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-cyan-100" style={{}}></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 backdrop-blur-xl border rounded-xl p-4 shadow-2xl flex flex-col justify-between bg-cyan-100/80 border-black/10">
<div className="flex justify-between items-center">
<span className="text-xs font-semibold text-black/80">
                  Living Room
                </span>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full rounded-full overflow-hidden bg-black/10">
<div className="h-full w-3/4 bg-blue-500"></div>
</div>
<div className="flex justify-between text-[10px] text-black/40">
<span>Brightness</span>
<span>75%</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 border-b relative group border-black/5 bg-cyan-100" style={{}}>

<div className="relative min-h-[500px] lg:min-h-[700px] border-r overflow-hidden border-black/5" style={{}}>
<img alt="Architectural Detail" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-color-dodge group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e425be-9296-43e6-8254-cf1f86528235_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-cyan-100 via-cyan-100/50"></div>

<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl border p-6 z-10 hover:border-blue-500/30 transition-colors duration-300 rounded-lg bg-white/40 border-black/10" style={{}}>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-black/10" style={{}}>
<span className="text-[10px] font-bold uppercase tracking-widest text-blue-600" style={{}}>
                Methodology
              </span>
<svg className="lucide lucide-cpu text-black/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs uppercase tracking-wider font-semibold text-black/50" style={{}}>
                Design Philosophy
              </p>
<p className="text-lg font-medium tracking-tight">Systematic Chaos</p>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<div className="absolute top-0 right-0 p-6 opacity-5">
<svg className="w-[120px] h-[120px]" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m4.93 4.93 14.14 14.14"></path>
</svg>
</div>
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-blue-500" style={{}}>
<span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" style={{}}></span>
              Process
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[0.9] mb-6 font-space-grotesk text-black" style={{}}>
              Order from
              <span className="italic text-black/40" style={{}}>Entropy</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-cyan-600" style={{}}>
              My process is deeply rooted in systems thinking. I break down
              complex user problems into atomic units, then reconstruct them
              into intuitive, scalable interfaces.
            </p>
</div>

<div className="border-t divide-y border-black/5 divide-black/5 bg-white/20" style={{}}>

<a className="group block p-6 md:px-12 md:py-8 transition-colors duration-300 hover:bg-black/5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-blue-500/50 group-hover:text-blue-400" style={{}}>
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white transition-colors text-black/90" style={{}}>
                      Discovery &amp; Data
                    </h3>
<span className="text-xs mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0 text-black/40" style={{}}>
                      Research-driven insights and user mapping
                    </span>
</div>
</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:border-blue-400/50 group-hover:bg-blue-400/10 border-black/10" style={{}}>
<svg className="lucide lucide-arrow-up-right group-hover:text-indigo-400 text-black/50" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</a>

<a className="group block p-6 md:px-12 md:py-8 transition-colors duration-300 hover:bg-black/5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-blue-500/50 group-hover:text-blue-400" style={{}}>
                    02
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white transition-colors text-black/90" style={{}}>
                      Atomic Systems
                    </h3>
<span className="text-xs mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0 text-black/40" style={{}}>
                      Scalable components and tokens
                    </span>
</div>
</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:border-blue-400/50 group-hover:bg-blue-400/10 border-black/10" style={{}}>
<svg className="lucide lucide-arrow-up-right group-hover:text-indigo-400 text-black/50" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</a>

<a className="group block p-6 md:px-12 md:py-8 transition-colors duration-300 hover:bg-black/5" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-blue-500/50 group-hover:text-blue-400" style={{}}>
                    03
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white transition-colors text-black/90" style={{}}>
                      Interactive Fidelity
                    </h3>
<span className="text-xs mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0 text-black/40" style={{}}>
                      Prototyping and motion design
                    </span>
</div>
</div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:border-blue-400/50 group-hover:bg-blue-400/10 border-black/10" style={{}}>
<svg className="lucide lucide-arrow-up-right group-hover:text-indigo-400 text-black/50" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="border-b border-black/5" style={{}}>
<div className="px-6 md:px-12 py-16 flex items-end justify-between border-b border-black/5" style={{}}>
<h2 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase font-space-grotesk text-black">
            Recognition
          </h2>
<a className="px-6 py-3 border rounded-full text-xs font-semibold transition-colors flex items-center gap-2 mb-2 border-black/10 hover:bg-black hover:text-cyan-100" href="#" style={{}}>
            View All
            <svg aria-hidden="true" className="iconify" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/5" style={{}}>

<div className="p-8 group transition-colors cursor-pointer hover:bg-black/5" style={{}}>
<div className="flex h-40 border-b mb-6 items-center justify-center border-black/5">
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform duration-300 text-5xl text-gray-950" data-icon="solar:ribbon-star-bold-duotone" height="1em" role="img" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C9.407 2 7.02 2.923 5.343 4.414C3.256 6.27 2 9.006 2 12c0 2.994 1.256 5.73 3.343 7.586A9.92 9.92 0 0 0 12 22c2.607 0 4.994-.923 6.671-2.414C20.758 17.73 22.014 14.994 22.014 12c0-2.994-1.256-5.73-3.343-7.586A9.92 9.92 0 0 0 12 2" fill="currentColor" fillOpacity="0.5"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 font-mono text-blue-600" style={{}}>
              Awwwards
            </p>
<h3 className="leading-tight transition-colors group-hover:text-blue-100 text-lg font-semibold mb-6">
              Site of the Day - Nebula
            </h3>
<div className="flex items-center text-xs font-medium group-hover:text-white transition-colors text-black/40" style={{}}>
              2024
            </div>
</div>

<div className="p-8 group transition-colors cursor-pointer hover:bg-black/5" style={{}}>
<div className="h-40 flex items-center justify-center border-b mb-6 border-black/5" style={{}}>
<svg aria-hidden="true" className="iconify text-5xl group-hover:scale-110 transition-transform duration-300 text-black" data-icon="solar:cup-first-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2h-2v12.5c0 1.933-1.343 3.5-3 3.5s-3-1.567-3-3.5V2H7a5 5 0 0 0-5 5c0 4.418 5 6.5 5 9v1.5a5 5 0 0 0 10 0V16c0-2.5 5-4.582 5-9a5 5 0 0 0-5-5" fill="currentColor" fillOpacity="0.5"></path>
<path d="M13.5 2.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M7 21a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z" fill="currentColor"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 font-mono text-blue-600" style={{}}>
              Product Hunt
            </p>
<h3 className="leading-tight transition-colors group-hover:text-blue-100 text-lg font-semibold mb-6">
              #1 Product of the Week
            </h3>
<div className="flex items-center text-xs font-medium group-hover:text-white transition-colors text-black/40" style={{}}>
              2023
            </div>
</div>

<div className="p-8 group transition-colors cursor-pointer hover:bg-black/5" style={{}}>
<div className="h-40 flex items-center justify-center border-b mb-6 border-black/5" style={{}}>
<svg className="opacity-80 group-hover:scale-110 transition-transform text-black" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="m12 8.5 4.8 10.2"></path>
<path d="m8.5 14 3.5-6.8"></path>
<path d="m7.2 18.7 3.6-7.2"></path>
<path d="m10.2 11.2 1.3-2.7"></path>
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 font-mono text-blue-600" style={{}}>
              FWA
            </p>
<h3 className="leading-tight transition-colors group-hover:text-blue-100 text-lg font-semibold mb-6">
              Mobile Excellence Award
            </h3>
<div className="flex items-center text-xs font-medium group-hover:text-white transition-colors text-black/40" style={{}}>
              2023
            </div>
</div>

<div className="p-8 group transition-colors cursor-pointer hover:bg-black/5" style={{}}>
<div className="h-40 flex items-center justify-center border-b mb-6 border-black/5" style={{}}>
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform duration-300 text-5xl text-black" data-icon="solar:pen-new-square-bold-duotone" height="1em" role="img" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" fillOpacity="0.5"></path>
<path d="M15.828 8.172a2 2 0 0 0-2.828 0L9.435 11.737a1 1 0 0 0-.27.478l-.724 2.9a1 1 0 0 0 1.213 1.212l2.9-.724a1 1 0 0 0 .478-.27l3.565-3.565a2 2 0 0 0 0-2.828l-.77-.768z" fill="currentColor"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 font-mono text-blue-600" style={{}}>
              Dribbble
            </p>
<h3 className="leading-tight transition-colors group-hover:text-blue-100 text-lg font-semibold mb-6">
              Trending Team of the Year
            </h3>
<div className="flex items-center text-xs font-medium group-hover:text-white transition-colors text-black/40" style={{}}>
              2022
            </div>
</div>
</div>
</section>
<section className="border-b border-black/5 bg-cyan-100" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/5" style={{}}>

<div className="group relative min-h-[600px] flex flex-col justify-end p-8 md:p-12 overflow-hidden cursor-pointer">

<img alt="Abstract Architecture" className="group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-75 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/159dbf09-d52b-44ef-80a8-9fc177272472_1600w.webp"/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-cyan-100 via-cyan-100/60"></div>

<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-4 mb-6">
<span className="px-3 py-1 border text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border-blue-500/30 bg-blue-500/10 text-blue-600" style={{}}>
                  Latest Thought
                </span>
<span className="text-xs font-mono tracking-tight text-black/40" style={{}}>
                  NOV 02, 2024
                </span>
</div>
<h3 className="md:text-6xl uppercase text-4xl font-bold tracking-tighter mb-8 font-space-grotesk">
                Design in the
                <span className="font-normal italic text-black/40" style={{}}>
                  Age of AI
                </span>
</h3>
<p className="leading-relaxed line-clamp-2 md:text-lg text-[#ffffff]/60 max-w-md mb-8">
                How generative algorithms are shifting the role of the product
                designer from pixel-pusher to system curator.
              </p>
<div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-blue-400 text-black" style={{}}>
                Read Article
                <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:text-white transition-all duration-300 group-hover:bg-blue-500 group-hover:border-blue-500 border-black/20" style={{}}>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full">

<div className="p-8 md:p-12 border-b flex items-center justify-between bg-white/[0.02] border-black/5" style={{}}>
<div className="">
<h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-2 font-space-grotesk">
                  Journal
                </h2>
<p className="text-xs uppercase tracking-widest font-mono text-black/40" style={{}}>
                  Notes on Interface &amp; Experience
                </p>
</div>
<a className="px-5 py-2.5 border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 rounded-full border-black/10 hover:bg-black hover:text-cyan-100" href="#" style={{}}>
                View Archive
                <svg className="lucide lucide-archive" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="20" x="2" y="3"></rect>
<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
<path d="M10 12h4"></path>
</svg>
</a>
</div>

<div className="flex-1 divide-y divide-black/5" style={{}}>

<a className="group block p-8 md:px-12 transition-colors relative overflow-hidden hover:bg-black/5" href="#" style={{}}>
<div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-blue-500" style={{}}></div>
<div className="flex justify-between items-start gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-blue-600" style={{}}>
                        Tutorial
                      </span>
<span className="w-1 h-1 rounded-full bg-black/20"></span>
<span className="text-[10px] uppercase tracking-widest text-black/40" style={{}}>
                        Figma
                      </span>
</div>
<h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white transition-colors text-black/90" style={{}}>
                      Advanced Auto-Layout
                    </h4>
<p className="text-sm group-hover:text-white/60 transition-colors text-black/40" style={{}}>
                      Mastering responsive components for complex dashboards.
                    </p>
</div>
<div className="flex hidden md:flex transition-colors w-20 h-20 border items-center justify-center group-hover:bg-blue-500/10 text-blue-500 rounded-lg bg-black/5 border-black/5" style={{}}>
<svg className="lucide lucide-layout-grid" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
</div>
</a>

<a className="group block md:px-12 transition-colors overflow-hidden pt-8 pr-8 pb-8 pl-8 relative hover:bg-black/5" href="#">
<div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-green-500"></div>
<div className="flex justify-between items-start gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-green-600">
                        Case Study
                      </span>
<span className="w-1 h-1 rounded-full bg-black/20"></span>
<span className="text-[10px] uppercase tracking-widest text-black/40" style={{}}>
                        Research
                      </span>
</div>
<h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white transition-colors text-black/90" style={{}}>
                      Dark Mode UX Patterns
                    </h4>
<p className="text-sm group-hover:text-white/60 transition-colors text-black/40" style={{}}>
                      Why pure black isn't always the answer for OLED screens.
                    </p>
</div>
<div className="flex hidden md:flex transition-colors w-20 h-20 border items-center justify-center rounded-lg group-hover:bg-green-500/10 text-green-500 bg-black/5 border-black/5" style={{}}>
<svg className="lucide lucide-moon" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
</div>
</div>
</a>

<a className="group block p-8 md:px-12 transition-colors relative overflow-hidden hover:bg-black/5" href="#" style={{}}>
<div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-blue-500" style={{}}></div>
<div className="flex justify-between items-start gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-blue-600" style={{}}>
                        Resources
                      </span>
<span className="w-1 h-1 rounded-full bg-black/20"></span>
<span className="text-[10px] uppercase tracking-widest text-black/40" style={{}}>
                        Freebie
                      </span>
</div>
<h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white transition-colors text-black/90" style={{}}>
                      Glassmorphism Icon Set
                    </h4>
<p className="text-sm group-hover:text-white/60 transition-colors text-black/40" style={{}}>
                      A set of 50 custom icons for glass-effect interfaces.
                    </p>
</div>
<div className="w-20 h-20 border flex items-center justify-center hidden md:flex transition-colors group-hover:bg-blue-500/10 text-blue-500 rounded-lg bg-black/5 border-black/5" style={{}}>
<svg className="lucide lucide-component" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
<path d="m12 2 3.5 3.5L12 7 8.5 3.5 12 2Z"></path>
<path d="m12 17 3.5 3.5L12 24l-3.5-3.5L12 17Z"></path>
<path d="m18.5 8.5 3.5 3.5-3.5 3.5L15 12l3.5-3.5Z"></path>
</svg>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-12 relative bg-cyan-100">

<div className="w-full px-6 md:px-12 flex flex-col md:flex-row z-10 mb-16 relative gap-12 items-start md:items-end justify-between">
<div className="flex items-center gap-8">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr flex items-center justify-center shadow-2xl shadow-blue-500/20 from-blue-400 to-green-400" style={{}}>
<span className="text-3xl font-bold tracking-tighter">K.</span>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight">KAIROS</span>
<span className="text-xs uppercase tracking-widest font-mono text-black/40">
                Digital Product Design
              </span>
</div>
</div>
<div className="w-full md:w-auto text-left md:text-right">
<p className="text-sm font-semibold mb-4 text-black/60">
              Connect with me:
            </p>
<div className="flex gap-4 justify-start md:justify-end">
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 bg-black/5 border-black/5 hover:bg-black hover:text-white hover:border-black" href="#" style={{}}>
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 bg-black/5 border-black/5 hover:bg-black hover:text-white hover:border-black" href="#" style={{}}>
<svg className="lucide lucide-dribbble" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path d="M8.56 2.75c4.37 6 6 9.42 8 13.23"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 bg-black/5 border-black/5 hover:bg-black hover:text-white hover:border-black" href="#" style={{}}>
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 bg-black/5 border-black/5 hover:bg-black hover:text-white hover:border-black" href="#" style={{}}>
<svg className="lucide lucide-linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>

<div className="md:px-12 border-t pt-16 pr-6 pb-8 pl-6 bg-cyan-100 border-black/5" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 w-full">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 flex items-center justify-center font-bold text-xs tracking-tighter to-green-500">
                  K.
                </div>
<span className="font-bold tracking-tight text-md">KAIROS</span>
</div>
<p className="text-sm leading-relaxed max-w-xs text-[#ffffff]/60" style={{}}>
                Crafting digital products that merge aesthetics with
                functionality. Available for freelance projects and consulting.
              </p>
<div className="pt-2">
<p className="text-xs font-semibold mb-2 text-black" style={{}}>
                  Join my waiting list
                </p>
<form className="flex gap-2">
<input className="border rounded px-3 py-2 text-xs placeholder-white/30 focus:outline-none focus:bg-white/10 w-full transition-all focus:border-blue-500/50 bg-black/5 border-black/10 text-black" placeholder="Email address" style={{}} type="email"/>
<button className="font-semibold text-xs px-4 py-2 rounded transition-colors hover:bg-blue-500 text-black bg-blue-400" type="submit">
                    Join
                  </button>
</form>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold mb-6 tracking-wide font-mono text-black" style={{}}>
                Work
              </h4>
<ul className="space-y-3 text-sm text-[#ffffff]/50" style={{}}>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Case Studies
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Experiments
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Open Source
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Resources
                  </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold mb-6 tracking-wide font-mono text-black" style={{}}>
                Info
              </h4>
<ul className="space-y-3 text-sm text-[#ffffff]/50" style={{}}>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    About Me
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Process
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Services
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-blue-600" href="#" style={{}}>
                    Contact
                  </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold mb-6 tracking-wide font-mono text-black" style={{}}>
                Social
              </h4>
<ul className="space-y-3 text-sm text-[#ffffff]/50" style={{}}>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="#" style={{}}>
                    Dribbble
                  </a>
</li>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="#" style={{}}>
                    Twitter
                  </a>
</li>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="#" style={{}}>
                    LinkedIn
                  </a>
</li>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="#" style={{}}>
                    Instagram
                  </a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 w-full border-black/5" style={{}}>
<p className="text-xs text-black/30" style={{}}>
              © 2024 Kairos Design. Built with passion &amp; code.
            </p>
<div className="flex items-center gap-6 text-xs text-black/30" style={{}}>
<a className="transition-colors hover:text-black" href="#" style={{}}>
                Privacy Policy
              </a>
<a className="transition-colors hover:text-black" href="#" style={{}}>
                Terms
              </a>
<a className="transition-colors hover:text-black" href="#" style={{}}>
                Sitemap
              </a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
