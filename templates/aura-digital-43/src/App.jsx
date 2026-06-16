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
display: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
border: 'rgba(255,255,255,0.08)',
background: '#030303',
surface: '#0A0A0A',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



            (function() {
                const yearImages = {
                    '21': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Abstract Blue
                    '22': 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2535&auto=format&fit=crop', // Abstract Purple
                    '23': 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=2670&auto=format&fit=crop', // Abstract Dark
                    '24': 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop', // Abstract Indigo
                };
                const yearItems = document.querySelectorAll('.year-item');
                const backgroundEl = document.getElementById('year-background');
                const showreelYear = document.getElementById('showreel-year');

                yearItems.forEach(item => {
                    item.addEventListener('click', function(e) {
                        e.preventDefault();
                        const year = this.getAttribute('data-year');
                        
                        if (backgroundEl && yearImages[year]) {
                            backgroundEl.style.opacity = '0';
                            setTimeout(() => {
                                backgroundEl.style.backgroundImage = 'url(' + yearImages[year] + ')';
                                backgroundEl.style.opacity = '0.3';
                            }, 300);
                        }

                        if (showreelYear) {
                            showreelYear.textContent = '20' + year + ' Mixed Reality';
                        }

                        yearItems.forEach(el => {
                            const indicator = el.querySelector('.indicator');
                            const text = el.querySelector('.year-text');
                            
                            if (indicator) {
                                indicator.classList.remove('opacity-100');
                                indicator.classList.add('opacity-0');
                            }
                            if (text) {
                                text.classList.remove('text-white', 'text-sm', 'font-bold');
                                text.classList.add('text-xs', 'text-neutral-600');
                            }
                        });

                        const indicator = this.querySelector('.indicator');
                        const text = this.querySelector('.year-text');
                        if (indicator) {
                            indicator.classList.remove('opacity-0');
                            indicator.classList.add('opacity-100');
                        }
                        if (text) {
                            text.classList.remove('text-xs', 'text-neutral-600');
                            text.classList.add('text-white', 'text-sm', 'font-bold');
                        }
                    });
                });
            })();
        


            const serviceData = [
                { id: '01', name: 'Strategy', title: 'Market Intelligence', category: 'Consulting', type: 'Audit & Roadmap', year: '2-4 Weeks', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop' },
                { id: '02', name: 'Motion', title: 'Kinetic Interface', category: 'System Architecture', type: 'Component Library', year: '4-6 Weeks', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop' },
                { id: '03', name: 'Development', title: 'Full-Stack Eng', category: 'Engineering', type: 'Next.js / React', year: '8-12 Weeks', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop' },
                { id: '04', name: '3D & VFX', title: 'Immersive World', category: 'Production', type: 'WebGL / Blender', year: '6-10 Weeks', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' }
            ];

            function updateService(index) {
                const data = serviceData[index];
                const bg = document.getElementById('service-bg');
                
                // Fade BG
                bg.classList.add('opacity-0');
                bg.classList.remove('opacity-40');
                
                setTimeout(() => {
                    bg.style.backgroundImage = `url('${data.image}')`;
                    bg.classList.remove('opacity-0');
                    bg.classList.add('opacity-40');
                }, 300);

                // Update Text
                document.getElementById('service-poster-title').innerText = data.title;
                document.getElementById('service-category').innerText = data.category;
                document.getElementById('service-type').innerText = data.type;
                document.getElementById('service-year').innerText = data.year;

                // Update Tabs UI
                const tabs = document.querySelectorAll('.service-tab');
                tabs.forEach((tab, i) => {
                    const label = tab.querySelector('.tab-label');
                    const num = tab.querySelector('.tab-num');
                    
                    if (i === index) {
                        tab.classList.remove('border-border', 'bg-transparent', 'hover:bg-white/5');
                        tab.classList.add('bg-white/5', 'border-l-2', 'border-l-indigo-500');
                        label.classList.remove('text-neutral-400', 'font-medium');
                        label.classList.add('text-white', 'font-semibold');
                        num.classList.remove('text-neutral-600');
                        num.classList.add('text-indigo-400');
                    } else {
                        tab.classList.add('border-border', 'bg-transparent', 'hover:bg-white/5');
                        tab.classList.remove('bg-white/5', 'border-l-2', 'border-l-indigo-500');
                        label.classList.add('text-neutral-400', 'font-medium');
                        label.classList.remove('text-white', 'font-semibold');
                        num.classList.add('text-neutral-600');
                        num.classList.remove('text-indigo-400');
                    }
                });
            }
        


            const creators = [
                { index: "01", name: "Gerald Winfield", role: "Art Director", title: "Create, Captivate <br> <span class='text-neutral-600'>& Convert</span>", desc: "Crafting digital narratives that resonate. We blend technical precision with artistic intuition.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564" },
                { index: "02", name: "Paula Chastain", role: "Motion Lead", title: "Motion That Moves <br> <span class='text-neutral-600'>Emotions</span>", desc: "Exploring the boundaries of kinetic typography and fluid dynamics to create visual languages.", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574" },
                { index: "03", name: "Marcus Thorne", role: "3D Specialist", title: "Digital Dreams <br> <span class='text-neutral-600'>Sculpted</span>", desc: "Pushing the limits of photorealism and abstract geometry. We build worlds that defy physics.", image: "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=2670" },
                { index: "04", name: "Sarah Jenkins", role: "Strategy Lead", title: "Vision to Virtual <br> <span class='text-neutral-600'>Reality</span>", desc: "Bridging the gap between strategic thinking and artistic execution. Where data meets design.", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2535" }
            ];
            let currentIndex = 0;
            
            window.changeSlide = function(direction) {
                const content = document.getElementById('slide-content');
                const bg = document.getElementById('carousel-bg');
                
                content.style.opacity = '0';
                content.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    if (direction === 'next') currentIndex = (currentIndex + 1) % creators.length;
                    else currentIndex = (currentIndex - 1 + creators.length) % creators.length;
                    
                    const current = creators[currentIndex];
                    const next = creators[(currentIndex + 1) % creators.length];
                    
                    document.getElementById('current-index').textContent = current.index;
                    document.getElementById('current-name').textContent = current.name;
                    document.getElementById('current-role').textContent = current.role;
                    document.getElementById('slide-title').innerHTML = current.title;
                    document.getElementById('slide-desc').textContent = current.desc;
                    document.getElementById('next-index').textContent = next.index;
                    document.getElementById('next-name').textContent = next.name;
                    
                    const mobileInd = document.getElementById('mobile-indicator');
                    if(mobileInd) mobileInd.textContent = `${current.index} / 04`;
                    
                    bg.style.backgroundImage = `url('${current.image}')`;
                    
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 300);
            };
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030303]">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\' opacity=\\'1\\'/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-0 h-full w-full max-w-[1600px] mx-auto border-x border-border">
<div className="border-r border-border h-full"></div>
<div className="border-r border-border h-full hidden md:block"></div>
<div className="border-r border-border h-full"></div>
<div className="border-r border-border h-full hidden lg:block"></div>
<div className="border-r border-border h-full"></div>
<div className="border-r border-border h-full hidden md:block"></div>
<div className="border-r border-border h-full"></div>
<div className="border-r border-border h-full hidden lg:block"></div>
<div className="border-r border-border h-full"></div>
<div className="border-r border-border h-full hidden md:block"></div>
<div className="border-r border-border h-full"></div>
</div>

<header className="fixed top-0 w-full z-50 px-6 pt-6 flex justify-center pointer-events-none">
<div className="pointer-events-auto glass rounded-full py-2 px-5 shadow-2xl flex items-center justify-between gap-12 min-w-[320px] max-w-[1600px]">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black group-hover:scale-90 transition-transform">
<span className="font-bold font-display text-xs">A</span>
</div>
<span className="text-sm font-semibold text-white tracking-tight font-display">AURA</span>
</a>
<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#work">Work</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#studio">Studio</a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#contact">Contact</a>
</nav>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</header>

<section className="min-h-screen flex flex-col lg:px-12 w-full pt-32 pr-6 pl-6 relative justify-center max-w-[1600px] mx-auto border-x border-border">

<div className="mask-gradient pointer-events-none bg-center bg-no-repeat transition-all duration-700 opacity-30 w-full h-full bg-cover absolute top-0 right-0 mix-blend-lighten" id="year-background" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center relative z-10">
<div className="lg:col-span-8 relative">

<div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 mb-8 backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-mono font-medium text-indigo-200 tracking-widest uppercase">Accepting Projects</span>
</div>

<h1 className="text-[8rem] md:text-[10rem] lg:text-[14rem] font-semibold font-display leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 select-none drop-shadow-2xl">
                    AURA
                </h1>
<div className="mt-[-20px] md:mt-[-40px] pl-2 relative">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-display text-white tracking-tighter leading-tight">
                        Digital Reality <br/>
<span className="text-neutral-500">Engineered.</span>
</h2>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col gap-8 font-medium text-neutral-600 pr-12 items-end justify-center">

<div className="flex flex-col gap-1 w-full items-end">
<div className="relative group cursor-pointer year-item flex items-center gap-4 py-1" data-year="21">
<span className="text-xs hover:text-white transition-colors year-text font-mono">2021</span>
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
</div>
<div className="relative group cursor-pointer year-item flex items-center gap-4 py-1" data-year="22">
<span className="text-xs hover:text-white transition-colors year-text font-mono">2022</span>
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
</div>
<div className="relative group cursor-pointer year-item flex items-center gap-4 py-1" data-year="23">
<span className="text-xs hover:text-white transition-colors year-text font-mono">2023</span>
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
</div>
<div className="relative group cursor-pointer year-item flex items-center gap-4 py-1" data-year="24">
<span className="text-sm text-white transition-colors year-text font-mono font-bold">2024</span>
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-100 transition-opacity duration-300 indicator shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>

<div className="glass group cursor-pointer hover:bg-white/5 transition-all w-full max-w-[240px] rounded-2xl p-5 border border-white/10 mt-8">
<div className="flex justify-between items-start mb-8">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="lucide:play" width="14"></iconify-icon>
</div>
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
</div>
<div>
<p className="text-sm font-semibold text-white tracking-tight font-display">Showreel</p>
<p className="text-[10px] text-neutral-500 font-mono mt-1" id="showreel-year">2024 Mixed Reality</p>
</div>
</div>
</div>
</div>

</section>

<section className="z-20 border-t border-border bg-[#030303] max-w-[1600px] mx-auto border-x" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="lg:col-span-5 border-r border-border flex flex-col">
<div className="p-8 md:p-12 border-b border-border">
<span className="text-indigo-400 text-[10px] font-mono uppercase tracking-widest">Capabilities</span>
<h3 className="text-white text-3xl md:text-4xl font-semibold font-display mt-4 tracking-tight">Our Expertise</h3>
</div>

<div className="flex-1 flex flex-col">

<div className="service-tab p-8 border-b border-border cursor-pointer transition-all hover:bg-white/5 group bg-transparent" onclick="updateService(0)">
<div className="flex justify-between items-center mb-2">
<span className="tab-label text-xl font-medium text-neutral-400 group-hover:text-white transition-colors font-display">Strategy</span>
<span className="tab-num text-xs font-mono text-neutral-600 group-hover:text-indigo-400 transition-colors">01</span>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 max-w-sm group-hover:text-neutral-400">Data-driven insights to position your brand for future growth.</p>
</div>

<div className="service-tab p-8 border-b border-border cursor-pointer transition-all bg-white/5 group border-l-2 border-l-indigo-500" onclick="updateService(1)">
<div className="flex justify-between items-center mb-2">
<span className="tab-label text-xl font-semibold text-white transition-colors font-display">Motion Design</span>
<span className="tab-num text-xs font-mono text-indigo-400 transition-colors">02</span>
</div>
<p className="text-sm text-neutral-400 line-clamp-2 max-w-sm">Fluid kinetics and interface animation that enhances usability.</p>
</div>

<div className="service-tab p-8 border-b border-border cursor-pointer transition-all hover:bg-white/5 group bg-transparent" onclick="updateService(2)">
<div className="flex justify-between items-center mb-2">
<span className="tab-label text-xl font-medium text-neutral-400 group-hover:text-white transition-colors font-display">Development</span>
<span className="tab-num text-xs font-mono text-neutral-600 group-hover:text-indigo-400 transition-colors">03</span>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 max-w-sm group-hover:text-neutral-400">Robust engineering using Next.js, WebGL and headless architecture.</p>
</div>

<div className="service-tab p-8 border-border cursor-pointer transition-all hover:bg-white/5 group bg-transparent" onclick="updateService(3)">
<div className="flex justify-between items-center mb-2">
<span className="tab-label text-xl font-medium text-neutral-400 group-hover:text-white transition-colors font-display">3D &amp; VFX</span>
<span className="tab-num text-xs font-mono text-neutral-600 group-hover:text-indigo-400 transition-colors">04</span>
</div>
<p className="text-sm text-neutral-500 line-clamp-2 max-w-sm group-hover:text-neutral-400">Photorealistic rendering and immersive environment creation.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 relative bg-[#050505] overflow-hidden group">

<div className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-700 bg-[url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop)]" id="service-bg"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 to-transparent"></div>

<div className="absolute bottom-0 left-0 p-12 w-full z-10">
<div className="glass p-8 rounded-3xl border border-white/10 max-w-xl backdrop-blur-xl">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="text-3xl font-bold tracking-tight text-white font-display mb-1" id="service-poster-title">
                                    Kinetic Interface
                                </h4>
<span className="text-xs font-mono text-indigo-300 uppercase tracking-widest" id="service-category">
                                    System Architecture
                                </span>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between border-b border-white/10 pb-4">
<span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Deliverable</span>
<span className="text-sm text-white font-medium" id="service-type">Component Library</span>
</div>
<div className="flex justify-between pt-2">
<span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Timeline</span>
<span className="text-sm text-white font-medium" id="service-year">4-6 Weeks</span>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="z-20 border-b border-border bg-[#030303] max-w-[1600px] mx-auto border-x" id="work">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">

<div className="lg:col-span-3 lg:p-12 flex flex-col z-10 border-r border-border p-8 relative justify-between">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
<span className="text-[10px] font-semibold text-neutral-500 tracking-widest uppercase font-mono">Case Studies</span>
</div>
<h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-none mb-6 font-display">
                        Selected <br/> <span className="text-neutral-600">Works.</span>
</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-xs">
                        Curated experiments in motion, WebGL, and interface design. We build the impossible for the ambitious.
                    </p>
<div className="grid grid-cols-2 gap-4 py-8 border-t border-border">
<div>
<span className="block text-2xl text-white font-bold tracking-tight font-display">84+</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono mt-1">Shipped</span>
</div>
<div>
<span className="block text-2xl text-white font-bold tracking-tight font-display">12</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono mt-1">Awards</span>
</div>
</div>
</div>
<a className="group inline-flex items-center justify-between w-full p-4 rounded-lg border border-border hover:bg-white/5 transition-all bg-white/[0.02]" href="#">
<span className="text-xs font-semibold text-white tracking-wider uppercase group-hover:text-indigo-300 transition-colors font-mono">View Archive</span>
<iconify-icon className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2">

<div className="group relative border-b border-r border-border aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}></div>
<div className="absolute inset-0 bg-[#030303]/60 group-hover:bg-[#030303]/30 transition-colors duration-500"></div>
<div className="absolute top-6 right-6 text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded glass">01</div>
<div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block text-[10px] font-bold text-indigo-200 tracking-widest uppercase bg-indigo-500/20 border border-indigo-500/30 px-2 py-1 rounded mb-4">FinTech</span>
<h4 className="text-3xl font-semibold text-white tracking-tight mb-2 font-display">Nova Protocol</h4>
<p className="text-neutral-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            Real-time data visualization infrastructure for decentralized markets.
                        </p>
</div>
</div>

<div className="group relative border-b border-border aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp'}}></div>
<div className="absolute inset-0 bg-[#030303]/60 group-hover:bg-[#030303]/30 transition-colors duration-500"></div>
<div className="absolute top-6 right-6 text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded glass">02</div>
<div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block text-[10px] font-bold text-teal-200 tracking-widest uppercase bg-teal-500/20 border border-teal-500/30 px-2 py-1 rounded mb-4">AI / Neural</span>
<h4 className="text-3xl font-semibold text-white tracking-tight mb-2 font-display">Cortex System</h4>
<p className="text-neutral-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            Generative neural network interface design and identity system.
                        </p>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-r border-border aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp'}}></div>
<div className="absolute inset-0 bg-[#030303]/60 group-hover:bg-[#030303]/30 transition-colors duration-500"></div>
<div className="absolute top-6 right-6 text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded glass">03</div>
<div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block text-[10px] font-bold text-purple-200 tracking-widest uppercase bg-purple-500/20 border border-purple-500/30 px-2 py-1 rounded mb-4">Automotive</span>
<h4 className="text-3xl font-semibold text-white tracking-tight mb-2 font-display">Hyperion EV</h4>
<p className="text-neutral-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            In-cabin HMI design and global launch campaign visuals.
                        </p>
</div>
</div>

<div className="group relative border-border aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-12">
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white group-hover:border-white/30 group-hover:scale-110 transition-all">
<iconify-icon icon="lucide:plus" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight mb-2 font-display">Project Vault</h4>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Explore All 84+ Cases</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 lg:py-48 px-6 lg:px-12 overflow-hidden bg-[#030303] max-w-[1600px] mx-auto border-x border-border">

<div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 transition-all duration-700 ease-in-out scale-110 blur-3xl" id="carousel-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}></div>
<div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center min-h-[400px]">

<div className="lg:col-span-2 hidden lg:flex flex-col justify-between h-full py-12 border-r border-border pr-8">
<div className="transition-opacity duration-300" id="left-info">
<span className="text-indigo-400 text-3xl font-medium block mb-1 font-mono" id="current-index">01</span>
<p className="text-[10px] text-white font-semibold uppercase tracking-widest font-mono" id="current-name">Gerald Winfield</p>
<p className="text-[10px] text-neutral-500 font-medium mt-1 uppercase tracking-widest font-mono" id="current-role">Art Director</p>
</div>
<button className="w-12 h-12 rounded-full border border-border hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all" onclick="changeSlide('prev')">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
</div>

<div className="lg:col-span-8 flex flex-col justify-center items-center text-center">
<div className="transition-all duration-500 ease-out transform opacity-100 translate-y-0" id="slide-content">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold font-display text-white tracking-tighter leading-none mb-10" id="slide-title">
                        Create, Captivate <br/> <span className="text-neutral-600"> &amp; Convert.</span>
</h2>
<div className="max-w-xl mx-auto">
<p className="text-base text-neutral-400 leading-relaxed font-light" id="slide-desc">
                            Crafting digital narratives that resonate. We blend technical precision with artistic intuition to build brands that matter.
                        </p>
</div>
</div>
</div>

<div className="lg:col-span-2 hidden lg:flex flex-col justify-between h-full py-12 border-l border-border pl-8 text-right">
<div className="transition-opacity duration-300" id="right-info">
<span className="text-neutral-600 text-[10px] font-bold block mb-2 uppercase tracking-widest font-mono">Next Up</span>
<span className="text-neutral-500 text-xl font-medium block mb-1 font-mono" id="next-index">02</span>
<p className="text-[10px] text-white/60 font-medium uppercase tracking-widest font-mono" id="next-name">Paula Chastain</p>
</div>
<div className="flex justify-end">
<button className="w-12 h-12 rounded-full border border-border hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all" onclick="changeSlide('next')">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden col-span-1 flex justify-between items-center w-full pt-8 border-t border-border">
<button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white" onclick="changeSlide('prev')"><iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon></button>
<span className="text-neutral-500 font-mono text-xs" id="mobile-indicator">01 / 04</span>
<button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white" onclick="changeSlide('next')"><iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon></button>
</div>
</div>

</section>

<section className="relative z-20 px-6 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1600px] mx-auto border-x border-border">

<div className="relative overflow-hidden group rounded-3xl border border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-[#0A0A0A]"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10 p-12 h-full flex flex-col justify-between min-h-[450px]">
<div className="border-t border-white/20 pt-4 w-full">
<span className="text-[10px] font-bold text-white/80 uppercase tracking-widest font-mono">Latest Insight</span>
</div>
<div className="mt-8">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-2 font-display">
                        Immersive <br/> Experiences.
                    </h3>
</div>
<div className="mt-auto pt-12 flex items-center justify-between">
<div className="flex gap-2">
<span className="glass text-white text-[10px] font-medium uppercase px-3 py-1.5 rounded-full tracking-wide">VR Video</span>
<span className="glass text-white text-[10px] font-medium uppercase px-3 py-1.5 rounded-full tracking-wide">Production</span>
</div>
<button className="w-10 h-10 rounded-full bg-white text-indigo-900 flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative glass rounded-3xl p-12 overflow-hidden group">
<div className="h-full flex flex-col justify-between min-h-[450px]">
<div className="border-t border-white/10 pt-4 w-full">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Tech Breakdown</span>
</div>
<div className="mt-8">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4 font-display">
                        Perfection in <br/> <span className="text-neutral-500">Every Pixel.</span>
</h3>
<p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
                        Explaining the technical breakdown of our latest rendering pipeline and how we achieve photorealism.
                    </p>
</div>
<div className="mt-auto pt-12 flex items-center justify-between">
<div className="flex gap-2">
<span className="bg-white/5 text-neutral-400 text-[10px] font-medium uppercase px-3 py-1.5 rounded-full tracking-wide border border-white/5">Animation</span>
<span className="bg-white/5 text-neutral-400 text-[10px] font-medium uppercase px-3 py-1.5 rounded-full tracking-wide border border-white/5">R&amp;D</span>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="lucide:play" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-border pt-20 px-6 lg:px-12 pb-12 max-w-[1600px] mx-auto border-x" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">

<div className="lg:col-span-3">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center text-black">
<span className="font-bold font-display text-sm">A</span>
</div>
<div>
<p className="text-xs font-bold text-white uppercase tracking-tight">Aura Studio</p>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">Est. 2024</p>
</div>
</div>
</div>

<div className="lg:col-span-5 text-center md:text-left">
<h2 className="text-6xl md:text-8xl font-semibold font-display text-white tracking-tighter mb-4 leading-[0.9]">
                    Let's Talk.
                </h2>
<a className="text-neutral-500 hover:text-white transition-colors text-lg inline-flex items-center gap-2 group" href="mailto:hello@aura.studio">
                    hello@aura.studio
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</div>

<div className="lg:col-span-4 w-full flex flex-col justify-end">
<div className="grid grid-cols-2 gap-8 text-sm text-neutral-400">
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono text-white uppercase tracking-widest mb-1">Explore</span>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono text-white uppercase tracking-widest mb-1">Social</span>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
<p>© 2024 Aura Digital Experience Studio.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
