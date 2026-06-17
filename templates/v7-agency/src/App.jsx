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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
dark: '#0B0D11',
panel: '#151921',
accent: '#FFB84C', // Orange/Yellow
cyan: '#22D3EE',
red: '#E11D48',
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to right bottom, #151921, #0B0D11)",
'stripes': "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 12px)",
'red-texture': "url('https://images.unsplash.com/photo-1605218427306-afa54388cf0f?q=80&w=2574&auto=format&fit=crop')",
}
}
}
}



            (function() {
                const yearImages = {
                    '21': 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg',
                    '22': 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_1600w.jpg',
                    '23': 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg',
                    '24': 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c750ae9a-d383-4f85-a342-87d0290b81a0_1600w.jpg',
                    '25': 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_3840w.jpg'
                };

                const yearItems = document.querySelectorAll('.year-item');
                const backgroundEl = document.getElementById('year-background');
                const showreelYear = document.getElementById('showreel-year');

                yearItems.forEach(item => {
                    item.addEventListener('click', function(e) {
                        e.preventDefault();
                        const year = this.getAttribute('data-year');
                        
                        // Update background image
                        if (backgroundEl && yearImages[year]) {
                            // Fade out
                            backgroundEl.style.opacity = '0';
                            
                            setTimeout(() => {
                                backgroundEl.style.backgroundImage = 'url(' + yearImages[year] + ')';
                                // Fade in
                                backgroundEl.style.opacity = '0.2';
                            }, 300);
                        }
                        
                        // Update showreel year text
                        if (showreelYear) {
                            showreelYear.textContent = '20' + year + ' Highlight Mix';
                        }
                        
                        // Update active states
                        yearItems.forEach(el => {
                            const indicator = el.querySelector('.indicator');
                            const text = el.querySelector('.year-text');
                            
                            // Reset everyone
                            if (indicator) {
                                indicator.classList.remove('opacity-100');
                                indicator.classList.add('opacity-0');
                            }
                            if (text) {
                                text.classList.remove('text-white', 'text-sm');
                                text.classList.add('text-xs', 'text-slate-600');
                            }
                        });
                        
                        // Set active
                        const indicator = this.querySelector('.indicator');
                        const text = this.querySelector('.year-text');
                        if (indicator) {
                            indicator.classList.remove('opacity-0');
                            indicator.classList.add('opacity-100');
                        }
                        if (text) {
                            text.classList.remove('text-xs', 'text-slate-600');
                            text.classList.add('text-white', 'text-sm');
                        }
                    });
                });
            })();
        


            const serviceData = [
                {
                    id: '01',
                    name: 'Strategy',
                    posterTitle: 'M7.1<br>STRATEGY<br>LABS',
                    posterNum: '+01',
                    category: 'Consulting',
                    suffix: 'STRATEGY',
                    type: 'Market Analysis & Positioning',
                    year: '2023 - 2024',
                    image: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80'
                },
                {
                    id: '02',
                    name: 'Motion Design',
                    posterTitle: 'M7.4<br>KINETIC<br>LABS',
                    posterNum: '+02',
                    category: 'Cybernetics',
                    suffix: 'SYSTEMS',
                    type: 'Brand Identity & Kinetic Typography',
                    year: '2023 - 2024',
                    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop'
                },
                {
                    id: '03',
                    name: 'CGI & VFX',
                    posterTitle: 'M7.8<br>VISUAL<br>LABS',
                    posterNum: '+03',
                    category: 'Simulation',
                    suffix: 'REALITY',
                    type: '3D Modeling & Visual Effects',
                    year: '2023 - 2024',
                    image: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80'
                },
                {
                    id: '04',
                    name: 'Development',
                    posterTitle: 'M7.9<br>DIGITAL<br>LABS',
                    posterNum: '+04',
                    category: 'Engineering',
                    suffix: 'CODE',
                    type: 'WebGL & Frontend Architecture',
                    year: '2023 - 2024',
                    image: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80'
                }
            ];

            function updateService(index) {
                const data = serviceData[index];
                
                // Fade effect for bg
                const bg = document.getElementById('service-bg');
                bg.classList.add('opacity-0');
                bg.classList.remove('opacity-40');
                
                setTimeout(() => {
                    bg.style.backgroundImage = `url('${data.image}')`;
                    bg.classList.remove('opacity-0');
                    bg.classList.add('opacity-40');
                }, 300);

                // Update content
                document.getElementById('service-poster-title').innerHTML = data.posterTitle;
                document.getElementById('service-poster-num').innerText = data.posterNum;
                document.getElementById('service-category').innerText = data.category;
                document.getElementById('service-main-title').innerHTML = `<span class="text-slate-500">V7.</span>${data.suffix}`;
                document.getElementById('service-type').innerText = data.type;
                document.getElementById('service-year').innerText = data.year;
                document.getElementById('current-service-num').innerText = data.id;
                
                // Update tabs state
                const tabs = document.querySelectorAll('.service-tab');
                tabs.forEach((tab, i) => {
                    const num = tab.querySelector('.tab-num');
                    const label = tab.querySelector('.tab-label');
                    
                    if (i === index) {
                        tab.classList.remove('border-transparent', 'hover:border-slate-700', 'bg-transparent');
                        tab.classList.add('border-brand-accent', 'bg-white/5');
                        
                        num.classList.remove('text-slate-600');
                        num.classList.add('text-brand-accent');
                        
                        label.classList.remove('font-medium', 'group-hover:text-white', 'text-slate-400');
                        label.classList.add('font-semibold', 'text-white');
                    } else {
                        tab.classList.add('border-transparent', 'hover:border-slate-700', 'bg-transparent');
                        tab.classList.remove('border-brand-accent', 'bg-white/5');
                        
                        num.classList.add('text-slate-600');
                        num.classList.remove('text-brand-accent');
                        
                        label.classList.add('font-medium', 'group-hover:text-white', 'text-slate-400');
                        label.classList.remove('font-semibold', 'text-white');
                    }
                });
            }
        


        (function() {
            const creators = [
                {
                    index: "01",
                    name: "Gerald Winfield",
                    role: "Art Director",
                    title: "CREATE, CAPTIVATE & CONVERT",
                    titleSpan: "& CONVERT",
                    desc: "Curabitur nisi sem, vulputate a vulputate non, tincidunt mattis purus. Sed scelerisque quis massa at convallis. Proin metus orci, tempor sit amet dignissim sed.",
                    image: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80"
                },
                {
                    index: "02",
                    name: "Paula Chastain",
                    role: "Motion Lead",
                    title: "MOTION THAT MOVES EMOTIONS",
                    titleSpan: "& INSPIRE",
                    desc: "Exploring the boundaries of kinetic typography and fluid dynamics to create visual languages that speak directly to the human experience.",
                    image: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80"
                },
                {
                    index: "03",
                    name: "Marcus Thorne",
                    role: "3D Specialist",
                    title: "DIGITAL DREAMS SCULPTED",
                    titleSpan: "IN PIXELS",
                    desc: "Pushing the limits of photorealism and abstract geometry. We build worlds that defy physics yet feel unmistakably tangible.",
                    image: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80"
                },
                {
                    index: "04",
                    name: "Sarah Jenkins",
                    role: "Strategy Lead",
                    title: "VISION TO VIRTUAL REALITY",
                    titleSpan: "& BEYOND",
                    desc: "Bridging the gap between strategic thinking and artistic execution. Where data meets design to drive measurable impact.",
                    image: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80"
                }
            ];

            let currentIndex = 0;
            
            window.changeSlide = function(direction) {
                const content = document.getElementById('slide-content');
                const bg = document.getElementById('carousel-bg');
                
                // Animate out
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    if (direction === 'next') {
                        currentIndex = (currentIndex + 1) % creators.length;
                    } else {
                        currentIndex = (currentIndex - 1 + creators.length) % creators.length;
                    }
                    
                    const current = creators[currentIndex];
                    const nextIndex = (currentIndex + 1) % creators.length;
                    const next = creators[nextIndex];
                    
                    // Update Content
                    document.getElementById('current-index').textContent = current.index;
                    document.getElementById('current-name').textContent = current.name;
                    document.getElementById('current-role').textContent = current.role;
                    
                    // Update Main Title HTML to preserve span style
                    const titleBase = current.title.replace(current.titleSpan, '').trim();
                    document.getElementById('slide-title').innerHTML = `${titleBase} <span class="text-stroke-bg" style="-webkit-text-stroke: 1px rgba(255,255,255,0.2); color: transparent;">${current.titleSpan}</span>`;
                    document.getElementById('slide-desc').textContent = current.desc;
                    
                    // Update Next Preview
                    document.getElementById('next-index').textContent = next.index;
                    document.getElementById('next-name').textContent = next.name;
                    
                    // Update Mobile Indicator
                    const indicator = document.getElementById('mobile-indicator');
                    if(indicator) indicator.textContent = `${current.index} / 04`;
                    
                    // Update Background
                    bg.style.backgroundImage = `url('${current.image}')`;
                    
                    // Animate In
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                    
                }, 300);
            };
        })();
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-0 h-full w-full opacity-10">
<div className="border-r border-slate-500 h-full" style={{}}></div>
<div className="border-r border-slate-500 h-full hidden md:block" style={{}}></div>
<div className="border-r border-slate-500 h-full" style={{}}></div>
<div className="border-r border-slate-500 h-full hidden lg:block" style={{}}></div>
<div className="border-r border-slate-500 h-full" style={{}}></div>
<div className="border-r border-slate-500 h-full hidden md:block" style={{}}></div>
<div className="border-r border-slate-500 h-full" style={{}}></div>
<div className="border-r border-slate-500 h-full hidden lg:block" style={{}}></div>
<div className="border-r border-slate-500 h-full" style={{}}></div>
<div className="border-r border-slate-500 h-full hidden md:block" style={{}}></div>
<div className="border-r border-slate-500 h-full" style={{}}></div>
<div className="border-r border-slate-500 h-full" style={{}}></div>
</div>

<header className="lg:px-12 flex w-full z-50 pt-8 pr-6 pl-6 relative items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 border border-white/20 flex items-center justify-center font-bold text-white tracking-tighter" style={{}}>
                V7
            </div>
</div>
<nav className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase text-slate-500" style={{}}>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
<a className="hover:text-white transition-colors text-brand-accent" href="#">Contact</a>
</nav>
</header>

<section className="min-h-[90vh] flex flex-col lg:px-12 w-full pt-20 pr-6 pl-6 relative justify-center edit-selected">

<div className="mask-image-gradient pointer-events-none bg-center transition-all duration-700 opacity-20 w-3/4 h-3/4 bg-cover absolute top-0 right-0" id="year-background" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_3840w.jpg)'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full gap-x-6 gap-y-6 items-center">
<div className="lg:col-span-8 relative gap-x-6 gap-y-6">

<h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-brand-accent via-orange-500 to-brand-panel select-none opacity-90 drop-shadow-2xl" style={{}}>
                    V7
                </h1>
<div className="md:left-12 lg:left-24 transform -translate-y-1/2 opacity-30 mix-blend-overlay absolute top-1/2 left-4 gap-x-6 gap-y-6">
<h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold leading-none tracking-tighter text-white blur-sm" style={{}}>
                        V7
                    </h1>
</div>
<div className="-mt-10 md:-mt-20 lg:-mt-32 md:pl-4 pl-2 relative gap-x-6 gap-y-6">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight uppercase leading-tight" style={{}}>
                        Visual Motion
                        <span className="text-slate-400">Collective</span>
</h2>
<div className="w-24 h-1 bg-white mt-8" style={{}}></div>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col gap-6 font-medium text-slate-600 pr-12 gap-x-6 gap-y-6 items-end justify-center" style={{}}>

<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="21">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-white transition-colors year-text font-medium">'21</span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="22">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-white transition-colors year-text font-medium">'22</span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="23">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-white transition-colors year-text font-medium">'23</span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="24">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-100 transition-opacity duration-300 indicator"></div>
<span className="text-sm text-white transition-colors year-text font-medium" style={{}}>'24</span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="25">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-white transition-colors year-text font-medium">'25</span>
</div>

<div className="glass group cursor-pointer hover:border-brand-accent/50 transition-all text-right max-w-xs border-white/5 border rounded-sm mt-12 pt-6 pr-6 pb-6 pl-6 gap-x-6-y-6" style={{}}>
<div className="flex text-brand-accent mb-2 gap-x-6 gap-y-6 justify-end">
<iconify-icon icon="solar:play-circle-bold-duotone" width="32"></iconify-icon>
</div>
<p className="text-sm font-semibold text-white tracking-wide" style={{}}>SHOWREEL</p>
<p className="text-xs text-slate-500 mt-1" id="showreel-year" style={{}}>2024 Highlight Mix</p>
</div>
</div>
</div>

</section>

<section className="z-20 lg:px-12 border-slate-800 border-t pt-24 pr-6 pb-24 pl-6 relative" style={{}}>
<div className="mb-16">
<span className="text-brand-accent text-xs font-bold tracking-widest uppercase">Expertise</span>
<h3 className="text-white text-4xl md:text-5xl font-semibold mt-4 tracking-tight" style={{}}>Our Services</h3>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800" style={{}}>

<div className="service-tab p-6 border-t-2 border-transparent hover:border-slate-700 cursor-pointer transition-colors group bg-transparent" onclick="updateService(0)" style={{}}>
<span className="tab-num text-xs text-slate-600 block mb-2 transition-colors" style={{}}>01.</span>
<span className="tab-label text-lg font-medium group-hover:text-white text-slate-400 transition-colors" style={{}}>Strategy</span>
</div>

<div className="service-tab p-6 border-t-2 border-brand-accent cursor-pointer bg-white/5 transition-colors group" onclick="updateService(1)" style={{}}>
<span className="tab-num text-xs text-brand-accent block mb-2 transition-colors">02.</span>
<span className="tab-label text-lg font-semibold text-white transition-colors" style={{}}>Motion Design</span>
</div>

<div className="service-tab p-6 border-t-2 border-transparent hover:border-slate-700 cursor-pointer transition-colors group bg-transparent" onclick="updateService(2)" style={{}}>
<span className="tab-num text-xs text-slate-600 block mb-2 transition-colors" style={{}}>03.</span>
<span className="tab-label text-lg font-medium group-hover:text-white text-slate-400 transition-colors" style={{}}>CGI &amp; VFX</span>
</div>

<div className="service-tab p-6 border-t-2 border-transparent hover:border-slate-700 cursor-pointer transition-colors group bg-transparent" onclick="updateService(3)" style={{}}>
<span className="tab-num text-xs text-slate-600 block mb-2 transition-colors" style={{}}>04.</span>
<span className="tab-label text-lg font-medium group-hover:text-white text-slate-400 transition-colors" style={{}}>Development</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-x border-b border-slate-800" style={{}}>

<div className="relative bg-[#1A2624] p-8 flex items-center justify-center overflow-hidden group" style={{}}>

<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-all duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1b24b87-a13f-46ce-b24e-5d8adf3b731c_1600w.webp)]" id="service-bg"></div>
<div className="absolute inset-0 mix-blend-overlay bg-orange-900/30" style={{}}></div>

<div className="relative z-10 border border-white/20 p-8 w-full max-w-md h-[450px] flex flex-col justify-between backdrop-blur-sm">
<div className="flex justify-between items-start">
<h4 className="text-5xl font-bold leading-none tracking-tighter text-amber-400" id="service-poster-title" style={{}}>
                            M7.4
                            KINETIC
                            LABS
                        </h4>
<span className="text-white font-mono text-xl" id="service-poster-num" style={{}}>+02</span>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-4">
<div className="w-12 h-12 border flex items-center justify-center hover:text-black transition-colors cursor-pointer border-amber-400 text-amber-400 hover:bg-amber-400" style={{}}>
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</div>
<div className="text-xs font-mono uppercase text-white leading-tight" style={{}}>
                                WatchShowcase00:45
                            </div>
</div>
<div className="text-right">
<div className="text-xs text-slate-400 mb-1" style={{}}>CATEGORY</div>
<div className="text-white font-bold text-sm uppercase" id="service-category" style={{}}>Cybernetics</div>
</div>
</div>
</div>
</div>

<div className="bg-brand-panel p-12 lg:p-20 flex flex-col justify-center relative">
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-8" id="service-main-title" style={{}}>
<span className="text-slate-500" style={{}}>V7.</span>SYSTEMS
                </h3>
<div className="w-12 h-0.5 bg-slate-600 mb-8" style={{}}></div>
<div className="space-y-8">
<div className="">
<p className="text-xs font-bold text-slate-500 uppercase mb-2" style={{}}>Project Type</p>
<p className="text-white text-lg" id="service-type" style={{}}>Brand Identity &amp; Kinetic Typography</p>
</div>
<div>
<p className="text-xs font-bold text-slate-500 uppercase mb-2" style={{}}>Year</p>
<p className="text-white text-lg" id="service-year" style={{}}>2023 - 2024</p>
</div>
<a className="inline-flex items-center gap-3 text-sm font-semibold text-white bg-slate-800 py-4 px-8 mt-4 hover:bg-slate-700 transition-colors w-max" href="#" style={{}}>
                        VIEW CASE STUDY
                        <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
</a>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-full border-l border-slate-800 hidden xl:flex flex-col" style={{}}>
<button className="h-1/2 flex items-center justify-center hover:bg-white/5 transition-colors text-slate-500 hover:text-white" style={{}}>
<iconify-icon icon="solar:arrow-up-linear" width="20"></iconify-icon>
</button>
<button className="h-1/2 flex items-center justify-center border-t border-slate-800 hover:bg-white/5 transition-colors text-slate-500 hover:text-white" style={{}}>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex items-center border-x border-b border-slate-800 h-16 bg-[#0f1218]" style={{}}>
<div className="h-full w-32 flex items-center justify-center text-brand-dark font-bold text-sm bg-brand-amber" id="current-service-num">
                02
            </div>
<div className="flex-1 flex justify-around text-xs font-mono text-slate-600" style={{}}>
<span className="py-6 border-t-2 border-transparent">03</span>
<span className="py-6 border-t-2 border-transparent">02</span>
<span className="py-6 border-t-2 border-transparent">01</span>
<span className="py-6 border-t-2 border-transparent">00</span>
</div>
<div className="w-32 h-full border-l border-slate-800 flex items-center justify-center text-xs text-slate-500" style={{}}>
                TOTAL: 24
            </div>
</div>

</section><section className="z-20 group/section border-slate-800 border-b relative">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">

<div className="lg:col-span-3 lg:p-10 flex flex-col z-10 lg:pl-12 border-slate-800 border-r pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(255,184,76,0.5)]"></span>
<span className="text-xs font-bold text-slate-500 tracking-widest uppercase font-mono">Selected Works</span>
</div>
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-none mb-6">
                    Digital 
                    <span className="text-slate-600">Frontiers</span>
</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium max-w-xs">
                    Curated experiments in motion, WebGL, and interface design. We build the impossible for the ambitious.
                </p>

<div className="grid grid-cols-2 gap-4 py-8 border-t border-slate-800/50">
<div>
<span className="block text-2xl text-white font-bold tracking-tight">84+</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold font-mono mt-1">Deployments</span>
</div>
<div className="">
<span className="block text-2xl text-white font-bold tracking-tight">12</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold font-mono mt-1">Awards</span>
</div>
</div>
</div>
<div className="pt-8">
<a className="group inline-flex items-center justify-between w-full p-4 border border-slate-700 hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-300 bg-brand-panel" href="#">
<span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-brand-accent transition-colors font-mono">View Archive</span>
<iconify-icon className="text-slate-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 bg-[#0B0D11] lg:pr-12">

<div className="group relative border-b border-r border-slate-800 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">

<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg\')'}}></div>
<div className="absolute inset-0 bg-brand-dark/80 group-hover:bg-brand-dark/20 transition-colors duration-500 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>

<span className="absolute top-6 right-6 text-xs font-mono text-white/40 border border-white/10 px-2 py-1 backdrop-blur-sm">01</span>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="overflow-hidden mb-2">
<span className="inline-block text-[10px] font-bold text-brand-dark tracking-widest uppercase bg-brand-accent px-2 py-1 rounded-sm shadow-lg shadow-brand-accent/20">
                                FinTech
                            </span>
</div>
<h4 className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-white transition-colors">Nova Protocol</h4>
<p className="text-slate-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed translate-y-2 group-hover:translate-y-0 transform">
                            Real-time data visualization infrastructure for decentralized markets.
                        </p>
</div>
</div>
</div>

<div className="group relative border-b border-slate-800 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1b99b27-460a-4be5-a724-b983cad2af0c_1600w.jpg\')'}}></div>
<div className="absolute inset-0 bg-brand-dark/80 group-hover:bg-brand-dark/20 transition-colors duration-500 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
<span className="absolute top-6 right-6 text-xs font-mono text-white/40 border border-white/10 px-2 py-1 backdrop-blur-sm">02</span>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="overflow-hidden mb-2">
<span className="inline-block text-[10px] font-bold text-cyan-950 tracking-widest uppercase bg-brand-cyan px-2 py-1 rounded-sm shadow-lg shadow-brand-cyan/20">
                                AI / Neural
                            </span>
</div>
<h4 className="text-3xl font-semibold text-white tracking-tight mb-1">Cortex System</h4>
<p className="text-slate-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed translate-y-2 group-hover:translate-y-0 transform">
                            Generative neural network interface design and identity system.
                        </p>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-r border-slate-800 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fba5101b-3f79-421e-85cd-3bfd94dcd647_1600w.jpg\')'}}></div>
<div className="absolute inset-0 bg-brand-dark/80 group-hover:bg-brand-dark/20 transition-colors duration-500 mix-blendultiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
<span className="absolute top-6 right-6 text-xs font-mono text-white/40 border border-white/10 px-2 py-1 backdrop-blur-sm">03</span>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="overflow-hidden mb-2">
<span className="inline-block text-[10px] font-bold text-rose-950 tracking-widest uppercase bg-brand-red px-2 py-1 rounded-sm shadow-lg shadow-brand-red/20">
                                Automotive
                            </span>
</div>
<h4 className="text-3xl font-semibold text-white tracking-tight mb-1">Hyperion EV</h4>
<p className="text-slate-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed translate-y-2 group-hover:translate-y-0 transform">
                            In-cabin HMI design and global launch campaign visuals.
                        </p>
</div>
</div>
</div>

<div className="group relative border-slate-800 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer bg-slate-900/10 hover:bg-slate-800/30 transition-colors duration-500">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<span className="absolute top-6 right-6 text-xs font-mono text-white/40 border border-white/10 px-2 py-1">04</span>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="text-center">
<div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center mx-auto mb-6 text-slate-500 group-hover:text-white group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 scale-100 group-hover:scale-110">
<iconify-icon icon="lucide:plus" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-brand-accent transition-colors">Project Vault</h4>
<p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Explore All 84+ Cases</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 lg:py-48 px-6 lg:px-12 overflow-hidden bg-brand-dark transition-colors duration-700">

<div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 transition-all duration-700 ease-in-out scale-105" id="carousel-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp'}}></div>
<div className="absolute inset-0 bg-brand-dark/80 z-0"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
<div className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full border-[40px] border-white/5" style={{}}></div>
<div className="absolute w-[60vw] h-[60vw] md:w-[450px] md:h-[450px] rounded-full border-[2px] border-white/10"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center min-h-[500px]">

<div className="lg:col-span-2 hidden lg:flex flex-col justify-between h-full py-12 border-r border-slate-800/50 pr-8 min-h-[400px]" style={{}}>
<div className="transition-opacity duration-300" id="left-info">
<span className="text-brand-accent text-3xl font-semibold block mb-1 font-mono" id="current-index">01</span>
<p className="text-xs text-white font-medium uppercase tracking-widest" id="current-name" style={{}}>Gerald Winfield</p>
<p className="text-xs text-slate-500 font-medium mt-1" id="current-role" style={{}}>Art Director</p>
</div>
<button className="w-12 h-12 bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white transition-all group rounded-full hover:bg-brand-orange hover:border-brand-orange" onclick="changeSlide('prev')" style={{}}>
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform duration-300" icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
</div>

<div className="lg:col-span-8 flex flex-col justify-center items-center text-center">
<div className="transition-all duration-500 ease-out transform opacity-100 translate-y-0" id="slide-content">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-none mb-12 drop-shadow-2xl" id="slide-title" style={{}}>
                    CREATE,
                    CAPTIVATE
                    <span className="text-stroke-bg" style={{WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent'}}>&amp; CONVERT</span>
</h2>
<div className="max-w-xl mx-auto">
<p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal" id="slide-desc" style={{}}>
                        Curabitur nisi sem, vulputate a vulputate non, tincidunt mattis purus. Sed scelerisque quis massa at convallis. Proin metus orci, tempor sit amet dignissim sed.
                    </p>
<div className="w-16 h-1 mx-auto mt-10 transition-all duration-500 hover:w-24 bg-brand-orange" style={{}}></div>
</div>
</div>
</div>

<div className="lg:col-span-2 hidden lg:flex flex-col justify-between h-full py-12 border-l border-slate-800/50 pl-8 text-right min-h-[400px]" style={{}}>
<div className="transition-opacity duration-300" id="right-info">
<span className="text-slate-600 text-xs font-bold block mb-2 uppercase tracking-widest" style={{}}>Next Up</span>
<span className="text-slate-500 text-xl font-semibold block mb-1 font-mono" id="next-index" style={{}}>02</span>
<p className="text-xs text-white/60 font-medium uppercase tracking-widest" id="next-name">Paula Chastain</p>
</div>
<div className="flex justify-end">
<button className="w-12 h-12 bg-transparent border border-slate-700 flex items-center justify-center text-white transition-all group rounded-full hover:border-brand-orange hover:text-brand-orange" onclick="changeSlide('next')" style={{}}>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden col-span-1 flex justify-between items-center w-full px-4 border-t border-slate-800/50 pt-8" style={{}}>
<button className="w-12 h-12 bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white rounded-full" onclick="changeSlide('prev')" style={{}}>
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<span className="text-brand-accent font-mono text-sm" id="mobile-indicator">01 / 04</span>
<button className="w-12 h-12 bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white rounded-full" onclick="changeSlide('next')" style={{}}>
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

</section>

<section className="relative z-20 px-6 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-0">

<div className="relative bg-gradient-to-br to-rose-700 p-12 md:p-16 overflow-hidden group from-orange-600" style={{}}>

<div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay bg-orange-texture" style={{}}></div>

<div className="absolute right-0 top-0 h-full w-1/3 opacity-20 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e13fb445-191b-40c3-9c07-ce65c1fa6ffc_800w.webp)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
<div className="border-t border-white/30 pt-4 inline-block w-full">
<span className="text-xs font-bold text-white/80 uppercase tracking-wider">03.09.2024</span>
</div>
<div className="mt-8">
<h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2" style={{}}>
                        IMMERSIVEEXPERIENCES
                    </h3>
<h4 className="text-xl md:text-2xl font-semibold text-white/90">
                        IN EVERY DIRECTION
                    </h4>
</div>
<div className="flex flex-wrap gap-3 mt-8">
<span className="bg-black/20 text-white text-[10px] font-bold uppercase px-3 py-2 tracking-wider" style={{}}>VR Video</span>
<span className="bg-black/20 text-white text-[10px] font-bold uppercase px-3 py-2 tracking-wider" style={{}}>Production</span>
</div>
<div className="mt-12">
<button className="bg-white text-xs font-bold uppercase px-8 py-4 tracking-widest hover:bg-slate-100 transition-colors text-brand-orange" style={{}}>
                        Read Article
                    </button>
</div>
</div>
</div>

<div className="relative bg-brand-panel p-12 md:p-16 border-t border-r border-b border-slate-800" style={{}}>
<div className="h-full flex flex-col justify-between min-h-[400px]">
<div className="border-t border-slate-700 pt-4 inline-block w-full" style={{}}>
<span className="text-xs font-bold text-brand-accent uppercase tracking-wider">26.08.2024</span>
</div>
<div className="mt-8">
<h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2" style={{}}>
                        PERFECTIONIN EVERY PIXEL
                    </h3>
<p className="text-slate-400 mt-4 max-w-md text-sm leading-relaxed" style={{}}>
                        Explaining the technical breakdown of our latest rendering pipeline and how we achieve photorealism in real-time engines.
                    </p>
</div>
<div className="flex flex-wrap gap-3 mt-8">
<span className="bg-slate-800 text-slate-400 text-[10px] font-bold uppercase px-3 py-2 tracking-wider" style={{}}>Animation</span>
<span className="bg-slate-800 text-slate-400 text-[10px] font-bold uppercase px-3 py-2 tracking-wider" style={{}}>Particle Insights</span>
</div>
<div className="mt-12">
<button className="bg-brand-accent text-brand-dark text-xs font-bold uppercase px-8 py-4 tracking-widest transition-colors hover:bg-amber-400" style={{}}>
                        Watch Demo
                    </button>
</div>
</div>
</div>
</section>

<div className="border-t border-slate-800 bg-brand-dark px-6 lg:px-12" style={{}}>
<div className="flex items-center justify-between h-20 text-xs font-mono text-slate-500 uppercase" style={{}}>
<button className="w-12 h-12 hover:bg-white/5 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<div className="flex-1 flex justify-center gap-12 md:gap-24">
<span className="text-brand-accent font-bold">01 Intro</span>
<span className="">02 Work</span>
<span className="">03 Team</span>
<span>04 Contact</span>
</div>
<button className="w-12 h-12 bg-slate-800 text-white flex items-center justify-center transition-colors hover:bg-slate-700" style={{}}>
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
</button>
</div>
</div>

<footer className="lg:px-12 bg-[#080a0e] border-slate-800 border-t pt-20 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 gap-x-12 gap-y-12 items-end">

<div className="lg:col-span-3">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 border-2 border-white flex items-center justify-center font-bold text-white text-lg tracking-tighter" style={{}}>
                        V7
                    </div>
<div>
<p className="text-xs font-bold text-white uppercase leading-tight" style={{}}>V7 VisualsProductionAgency</p>
</div>
</div>
<p className="text-[10px] text-slate-600" style={{}}>© 2024 All rights reserved.</p>
</div>

<div className="lg:col-span-5 text-center md:text-left">
<h2 className="md:text-7xl lg:text-8xl leading-none text-6xl font-bold text-white tracking-tighter mb-2">
                    GET IN<br/>TOUCH
                </h2>
</div>

<div className="lg:col-span-4 w-full">

<div className="grid grid-cols-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider text-center bg-slate-900 border-slate-800 border mb-8">
<a className="hover:text-white hover:bg-slate-800 transition-colors pt-4 pb-4" href="#">Services</a>
<a className="py-4 hover:text-white hover:bg-slate-800 transition-colors" href="#" style={{}}>Projects</a>
<a className="py-4 hover:text-white hover:bg-slate-800 transition-colors" href="#" style={{}}>Team</a>
<a className="hover:text-white hover:bg-slate-800 transition-colors pt-4 pb-4" href="#">Contact</a>
</div>

<div className="flex justify-between gap-4">
<a className="flex-1 flex items-center justify-center hover:text-white hover:border-white transition-colors text-slate-400 h-12 border-slate-700 border" href="#">
<span className="text-lg font-bold">F</span>
</a>
<a className="flex-1 flex items-center justify-center hover:text-white transition-colors border-brand-amber text-brand-amber hover:bg-brand-amber h-12 border" href="#">
<svg className="" data-icon-set="solar" data-solar="plain-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="m16.245 7.76l5.172-5.171l-.003-.003c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 0 1 1.116.005" fill="currentColor" fill-rule="evenodd"></path><path className="" d="m18.635 15.67l1.717-5.15c1.498-4.495 2.248-6.744 1.064-7.932l-5.172 5.171a.79.79 0 0 1-.005 1.117l-5.416 5.367a1.4 1.4 0 0 0-.324 1.426c1.21 3.631 1.815 5.446 2.703 5.962a2.71 2.71 0 0 0 2.73 0c.888-.516 1.493-2.33 2.703-5.962" fill="currentColor" opacity=".5"></path></svg>
</a>
<a className="flex-1 flex items-center justify-center hover:text-white hover:border-white transition-colors text-slate-400 h-12 border-slate-700 border" href="#">
<span className="font-bold text-lg">Bē</span>
</a>
<a className="flex-1 h-12 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors" href="#" style={{}}>
<span className="font-bold text-lg">Dr</span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
