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
serif: ['Instrument Serif', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151f2e',
950: '#020617', // Deeper black
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
},
animation: {
'marquee': 'marquee 40s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        (function() {
            const slides = document.querySelectorAll('#full-bg-carousel .carousel-slide');
            const indicators = document.querySelectorAll('.card-indicator');
            const prevBtn = document.getElementById('card-prev-btn');
            const nextBtn = document.getElementById('card-next-btn');
            let currentIndex = 0;
            const totalSlides = slides.length;

            function updateSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'pointer-events-none', 'z-10');
                        slide.classList.add('opacity-100', 'z-20');
                    } else {
                        slide.classList.remove('opacity-100', 'z-20');
                        slide.classList.add('opacity-0', 'pointer-events-none', 'z-10');
                    }
                });

                indicators.forEach((ind, i) => {
                    if (i === index) {
                        ind.classList.remove('bg-white/20');
                        ind.classList.add('bg-white');
                    } else {
                        ind.classList.remove('bg-white');
                        ind.classList.add('bg-white/20');
                    }
                });
                currentIndex = index;
            }

            if(nextBtn) nextBtn.onclick = () => {
                const nextIndex = (currentIndex + 1) % totalSlides;
                updateSlide(nextIndex);
            };

            if(prevBtn) prevBtn.onclick = () => {
                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlide(prevIndex);
            };
            
            indicators.forEach((ind, i) => {
                ind.onclick = () => updateSlide(i);
            });
            
            let interval = setInterval(() => {
                const container = document.getElementById('full-bg-carousel');
                if (container && !container.matches(':hover')) {
                   updateSlide((currentIndex + 1) % totalSlides); 
                }
            }, 6000);
            
            const container = document.getElementById('full-bg-carousel');
            if(container) {
                const observer = new MutationObserver((mutations) => {
                    if(!document.contains(container)) {
                        clearInterval(interval);
                        observer.disconnect();
                    }
                });
                observer.observe(document.body, {childList: true, subtree: true});
            }
        })();
    


            const bondData = [
                { year: '2007', amount: '$75M', title: 'Senior Notes', status: 'Repaid' },
                { year: '2010', amount: '$150M', title: 'EMTN Programme', status: 'Repaid' },
                { year: '2012', amount: '$300M', title: 'Benchmark Bond', status: 'Repaid', highlight: true },
                { year: '2015', amount: '$500M', title: 'Sovereign Gtd', status: 'Repaid' },
                { year: '2020', amount: '$500M', title: 'Senior Notes', status: 'Active' },
            ];

            const stage = document.getElementById('carouselStage');
            let activeIndex = 2; // Start in middle

            function renderCards() {
                stage.innerHTML = '';
                bondData.forEach((bond, index) => {
                    const el = document.createElement('div');
                    el.className = 'carousel-card absolute inset-0 rounded-[2rem] p-8 flex flex-col justify-between border select-none';
                    
                    // Styling based on data
                    if(bond.highlight) {
                        el.classList.add('bg-slate-900', 'border-blue-500/50', 'shadow-[0_0_50px_rgba(59,130,246,0.1)]');
                    } else {
                        el.classList.add('bg-slate-950', 'border-white/10');
                    }

                    el.innerHTML = `
                        <div class="flex justify-between items-start">
                            <span class="font-mono text-sm text-slate-500 border border-white/10 px-2 py-1 rounded">${bond.year}</span>
                            <span class="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest ${bond.status === 'Active' ? 'text-emerald-400' : 'text-slate-500'}">
                                <span class="w-1.5 h-1.5 rounded-full ${bond.status === 'Active' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}"></span>
                                ${bond.status}
                            </span>
                        </div>
                        <div class="text-center">
                            <h3 class="text-5xl font-serif text-white mb-2 tracking-tight">${bond.amount}</h3>
                            <p class="text-slate-400 text-sm font-medium tracking-wide uppercase">${bond.title}</p>
                        </div>
                        <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    `;
                    
                    // Calculate 3D transforms
                    const offset = index - activeIndex;
                    const absOffset = Math.abs(offset);
                    const zIndex = 10 - absOffset;
                    const opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.3);
                    const translateX = offset * 110; // Spacing %
                    const translateZ = -absOffset * 100; // Depth
                    const rotateY = offset * -5;
                    const scale = 1 - (absOffset * 0.1);

                    el.style.zIndex = zIndex;
                    el.style.opacity = opacity;
                    el.style.transform = `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
                    el.style.filter = `blur(${absOffset * 4}px)`; // Blur effect for depth

                    stage.appendChild(el);
                });
            }

            document.getElementById('nextBtn').addEventListener('click', () => {
                if (activeIndex < bondData.length - 1) {
                    activeIndex++;
                    renderCards();
                }
            });

            document.getElementById('prevBtn').addEventListener('click', () => {
                if (activeIndex > 0) {
                    activeIndex--;
                    renderCards();
                }
            });

            // Initial Render
            renderCards();
        


            function switchTab(index) {
                // Reset Buttons
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('text-white', 'bg-white/5', 'border-white/10', 'ring-1', 'ring-blue-500/50');
                    btn.classList.add('text-slate-500', 'border-transparent');
                });
                
                // Activate Button
                const activeBtn = document.getElementById(`tab-${index}`);
                activeBtn.classList.remove('text-slate-500', 'border-transparent');
                activeBtn.classList.add('text-white', 'bg-white/5', 'border-white/10', 'ring-1', 'ring-blue-500/50');

                // Hide All Content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });

                // Show Content
                document.getElementById(`content-${index}`).classList.remove('hidden');
            }
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-md font-serif font-bold italic text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">T</div>
<span className="text-sm font-medium tracking-tight text-white uppercase group-hover:text-slate-200 transition-colors">TDB <span className="text-slate-500">Investor</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#about">Who We Are</a>
<a className="hover:text-white transition-colors" href="#operations">Operations</a>
<a className="hover:text-white transition-colors" href="#bonds">Financials</a>
<a className="hover:text-white transition-colors" href="#governance">Governance</a>
</div>
<button className="bg-white text-slate-950 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors tracking-wide">
                Get in Touch
            </button>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black flex items-end pb-20">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-50 scale-105" loop="" muted="" playsinline="">
<source src="https://spark-labs.org/video/reel.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-4xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-slate-300">Sustainable Growth Strategy 2030</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white tracking-tight mb-8">
                    Bridging <br/><span className="text-slate-400 italic pr-4">Global</span> Finance.
                </h1>
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between border-t border-white/10 pt-8">
<p className="max-w-md text-lg text-slate-400 font-light leading-relaxed">
                        As the oldest and largest commercial bank in Mongolia, we architect the financial infrastructure that connects local potential to international opportunity.
                    </p>
<div className="flex items-center gap-12">
<div>
<div className="text-3xl font-medium text-white tracking-tight">30+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Years of Legacy</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">$4.2B</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Total Assets</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="overflow-hidden md:px-8 md:pt-24 md:pb-24 bg-slate-50 pt-12 pr-4 pb-12 pl-4 relative">
<div className="h-full max-w-screen-2xl mr-auto ml-auto">

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-start">

<div className="md:col-span-2">
<span className="uppercase block text-xs font-semibold text-slate-500 tracking-wider pt-2">Who We Are</span>
</div>

<div className="md:col-span-7">
<h2 className="leading-[1.1] md:text-4xl lg:text-5xl text-3xl font-medium text-slate-900 tracking-tight">We are the
          bridge connecting Mongolia to global markets.</h2>
</div>

<div className="md:col-span-3 flex justify-end">
<p className="leading-relaxed text-sm text-slate-600 text-right max-w-[300px]">Trade and Development Bank of
          Mongolia is a leading financial institution commanding 31.8% of the total market.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px] h-full">

<div className="lg:col-span-8 overflow-hidden group h-full rounded-2xl relative shadow-lg">

<img alt="Power Transmission Infrastructure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="bg-center flex flex-col md:p-10 z-30 bg-gradient-to-b from-black/95 via-black/60 to-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fb2e58c-ef70-4be3-89ef-a5d22c83e29c_1600w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-start">
<div className="flex flex-col w-full max-w-2xl gap-8 animate-fade-in">

<div className="flex flex-col gap-4">
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase">About us</span>
<div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>
</div>

<div className="flex flex-col gap-6 gap-x-6 gap-y-6 items-start">

<svg className="opacity-90 w-[100px] h-[30px]" data-icon-replaced="true" data-icon-set="logos" data-logos="brandfolder-icon" fill="none" height="30" strokeWidth="2" style={{width: '100px', height: '30px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 256 241" width="100" xmlns="http://www.w3.org/2000/svg"><path className="" d="M0 240.878h209.074v-31.804H31.804V31.804h177.352v116.372h-15.204l30.983 31.065L256 148.176h-15.122V0H0zM80.622 51.364c4.109-.657 8.793-1.15 14.217-1.561s12.081-.575 20.135-.575c6.986 0 13.642.575 19.888 1.725s11.752 3.123 16.355 5.835c4.684 2.795 8.3 6.41 11.012 11.013s4.027 10.355 4.027 17.258c0 4.11-.575 7.89-1.808 11.424s-2.876 6.574-4.849 9.204c-2.054 2.63-4.355 4.767-6.903 6.493s-5.178 2.794-7.807 3.123c2.958.41 6.163 1.315 9.78 2.712a32.1 32.1 0 0 1 9.944 6.246c3.04 2.712 5.67 6.328 7.643 10.601c2.054 4.356 3.04 9.534 3.04 15.697c0 8.3-1.561 15.122-4.684 20.382c-3.123 5.342-7.314 9.45-12.656 12.574c-5.26 3.04-11.424 5.177-18.41 6.328q-10.478 1.726-21.942 1.726c-5.917 0-11.67-.165-17.423-.494s-12.245-.904-19.56-1.808zm27.777 116.865v-39.86h11.506q5.917 0 10.848.987c3.287.657 6.082 1.726 8.465 3.37c2.383 1.561 4.191 3.698 5.424 6.328s1.89 5.917 1.89 9.862c0 4.19-.822 7.643-2.465 10.272c-1.644 2.63-3.78 4.685-6.328 6.164a24.7 24.7 0 0 1-8.219 2.959c-2.958.493-5.752.74-8.464.74c-1.89 0-4.027-.083-6.41-.165a92 92 0 0 1-6.247-.657m8.465-60.898H108.4V70.513c2.466-.41 5.424-.575 9.04-.575c2.548 0 5.178.246 7.726.657c2.63.493 5.013 1.315 7.067 2.712c2.137 1.315 3.863 3.205 5.178 5.589q1.972 3.575 1.972 9.122c0 3.863-.575 6.986-1.725 9.533c-1.151 2.466-2.713 4.438-4.767 5.917s-4.438 2.466-7.232 3.041a48 48 0 0 1-8.794.822" fill="#40D1F5" fill-rule="evenodd"></path></svg>

<h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
        A Legacy of Firsts &amp; Financial Excellence
      </h3>

<p className="max-w-lg pl-4 text-sm leading-relaxed border-l border-white/20 text-slate-300">
        Trade and Development Bank (TDB) is a premier financial institution in Mongolia. Born from the International Settlement Department of the former central bank, we transitioned into a fully privatized entity and remain the oldest bank in the country.
      </p>
</div>
</div>
</div>

<div className="md:p-8 flex z-10 w-full border-white/10 border-b pt-6 pr-6 pb-6 pl-6 absolute top-0 left-0 items-center justify-between">
<span className="text-lg font-medium text-white tracking-tight">About us</span>
</div>

<div className="md:p-10 z-20 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
</div>
</div>

<div className="lg:col-span-4 flex flex-col min-h-[500px] overflow-hidden group select-none bg-slate-900 w-full h-full border-slate-800 border rounded-[20px] relative shadow-2xl">

<div className="w-full h-full relative" id="full-bg-carousel">

<div className="carousel-slide transition-opacity duration-700 ease-in-out z-20 w-full h-full absolute top-0 right-0 bottom-0 left-0" data-index="0">

<img alt="Earnings Report" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6245784b-fd33-43af-9afd-1aba8d130abb_1600w.jpg"/>

<div className="bg-gradient-to-t from-black/90 via-black/50 to-black/20 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="flex flex-col z-10 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Foreign Trade
</h2>
<p className="leading-relaxed text-sm text-slate-200 max-w-sm mb-4">Key Sectors Served
</p>
</div>
</div>

<div className="carousel-slide transition-opacity duration-700 ease-in-out pointer-events-none z-10 opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" data-index="1">
<img alt="Integrations" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4dba8c43-db0d-43ed-8380-136894e85510_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
<div className="z-10 flex flex-col w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Mining &amp; Industrialization</h2>
<p className="leading-relaxed text-sm text-slate-200 max-w-sm mb-4">Key Sectors Served</p>
<a className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link" href="#">
                    Connect Software 
                    <svg className="ml-1 transition-transform group-hover/link:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="carousel-slide transition-opacity duration-700 ease-in-out pointer-events-none z-10 opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" data-index="2">
<img alt="ESG" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ded42ca-5282-4618-ab44-4b7fca975b68_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
<div className="z-10 flex flex-col w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Infrastructure &amp; Energy</h2>
<p className="leading-relaxed text-sm text-slate-200 max-w-sm mb-4">Key Sectors Served</p>
<a className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link" href="#">
                    ESG Report 
                    <svg className="ml-1 transition-transform group-hover/link:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div><div className="carousel-slide transition-opacity duration-700 ease-in-out pointer-events-none z-10 opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" data-index="2">
<img alt="ESG" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3e1300d-7ac0-4b24-899c-2ef5f7d01f9f_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/90 via-black/50 to-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-start">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Transportation &amp; Logistics</h2>
<p className="leading-relaxed text-sm text-slate-200 max-w-sm mb-4">Key Sectors Served</p>
<a className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link" href="#">
                    ESG Report 
                    <svg className="ml-1 transition-transform group-hover/link:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<button className="-translate-y-1/2 z-30 flex hover:bg-white hover:text-black transition-all active:scale-95 group/nav text-white bg-white/10 w-12 h-12 border-white/20 border rounded-full absolute top-1/2 left-4 shadow-lg backdrop-blur-md items-center justify-center" id="card-prev-btn">
<svg className="transition-transform group-hover/nav:-translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg active:scale-95 group/nav" id="card-next-btn">
<svg className="transition-transform group-hover/nav:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="absolute bottom-8 right-8 z-30 flex gap-2">
<button className="card-indicator w-2 h-2 rounded-full bg-white transition-all duration-300" data-index="0"></button>
<button className="card-indicator w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300" data-index="1"></button>
<button className="card-indicator w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300" data-index="2"></button>
</div>
</div>


</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black border-white/5 border-t pt-32 pb-32" id="bonds">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto mb-20 ml-auto pr-6 pl-6 items-end justify-between">
<div className="">
<h2 className="font-serif text-5xl text-white mb-4">International <span className="text-slate-600">Bonds</span></h2>
<p className="text-slate-400 font-light max-w-lg">
                    The first Mongolian entity to issue bonds in international markets. We have successfully raised and repaid over $1.14 Billion.
                </p>
</div>
<div className="flex gap-2 mt-8 md:mt-0">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" id="prevBtn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" id="nextBtn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="carousel-container h-[450px] w-full flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none"></div>
<div className="carousel-stage relative w-[320px] md:w-[400px] h-[450px]" id="carouselStage"><div className="carousel-card absolute inset-0 rounded-[2rem] p-8 flex flex-col justify-between border select-none bg-slate-950 border-white/10" style={{zIndex: '8', opacity: '0.4', transform: 'translateX(-220%) translateZ(-200px) rotateY(10deg) scale(0.8)', filter: 'blur(8px)'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-sm text-slate-500 border border-white/10 px-2 py-1 rounded">2007</span>
<span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                Repaid
                            </span>
</div>
<div className="text-center">
<h3 className="text-5xl font-serif text-white mb-2 tracking-tight">$75M</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Senior Notes</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div><div className="carousel-card absolute inset-0 rounded-[2rem] p-8 flex flex-col justify-between border select-none bg-slate-950 border-white/10" style={{zIndex: '9', opacity: '0.7', transform: 'translateX(-110%) translateZ(-100px) rotateY(5deg) scale(0.9)', filter: 'blur(4px)'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-sm text-slate-500 border border-white/10 px-2 py-1 rounded">2010</span>
<span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                Repaid
                            </span>
</div>
<div className="text-center">
<h3 className="text-5xl font-serif text-white mb-2 tracking-tight">$150M</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide uppercase">EMTN Programme</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div><div className="carousel-card absolute inset-0 rounded-[2rem] p-8 flex flex-col justify-between border select-none bg-slate-900 border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.1)]" style={{zIndex: '10', opacity: '1', transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)', filter: 'blur(0px)'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-sm text-slate-500 border border-white/10 px-2 py-1 rounded">2012</span>
<span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                Repaid
                            </span>
</div>
<div className="text-center">
<h3 className="text-5xl font-serif text-white mb-2 tracking-tight">$300M</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Benchmark Bond</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div><div className="carousel-card absolute inset-0 rounded-[2rem] p-8 flex flex-col justify-between border select-none bg-slate-950 border-white/10" style={{zIndex: '9', opacity: '0.7', transform: 'translateX(110%) translateZ(-100px) rotateY(-5deg) scale(0.9)', filter: 'blur(4px)'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-sm text-slate-500 border border-white/10 px-2 py-1 rounded">2015</span>
<span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                Repaid
                            </span>
</div>
<div className="text-center">
<h3 className="text-5xl font-serif text-white mb-2 tracking-tight">$500M</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Sovereign Gtd</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div><div className="carousel-card absolute inset-0 rounded-[2rem] p-8 flex flex-col justify-between border select-none bg-slate-950 border-white/10" style={{zIndex: '8', opacity: '0.4', transform: 'translateX(220%) translateZ(-200px) rotateY(-10deg) scale(0.8)', filter: 'blur(8px)'}}>
<div className="flex justify-between items-start">
<span className="font-mono text-sm text-slate-500 border border-white/10 px-2 py-1 rounded">2020</span>
<span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                Active
                            </span>
</div>
<div className="text-center">
<h3 className="text-5xl font-serif text-white mb-2 tracking-tight">$500M</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Senior Notes</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div></div>
</div>

</section>

<section className="py-24 bg-white text-slate-900 border-t border-white/10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight">Global Connectivity</h2>
<p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                Facilitating cross-border payments with speed and reliability through our extensive correspondent network.
            </p>
</div>

<div className="relative w-full py-8">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex overflow-hidden whitespace-nowrap group">
<div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center gap-20 px-10">

<span className="text-2xl font-bold font-mono tracking-tighter text-slate-300">SWIFT</span>
<span className="text-2xl font-serif font-bold italic text-slate-300">MoneyGram</span>
<span className="text-2xl font-sans font-black tracking-tight text-slate-300">VISA</span>
<span className="text-2xl font-mono font-medium text-slate-300">MASTERCARD</span>
<span className="text-2xl font-serif font-bold text-slate-300">JCB</span>
<span className="text-2xl font-sans font-bold tracking-tight text-slate-300">UNIONPAY</span>
<span className="text-2xl font-mono font-bold tracking-tighter text-slate-300">COMMERZBANK</span>
<span className="text-2xl font-serif italic font-bold text-slate-300">ING</span>

<span className="text-2xl font-bold font-mono tracking-tighter text-slate-300">SWIFT</span>
<span className="text-2xl font-serif font-bold italic text-slate-300">MoneyGram</span>
<span className="text-2xl font-sans font-black tracking-tight text-slate-300">VISA</span>
<span className="text-2xl font-mono font-medium text-slate-300">MASTERCARD</span>
<span className="text-2xl font-serif font-bold text-slate-300">JCB</span>
<span className="text-2xl font-sans font-bold tracking-tight text-slate-300">UNIONPAY</span>
<span className="text-2xl font-mono font-bold tracking-tighter text-slate-300">COMMERZBANK</span>
<span className="text-2xl font-serif italic font-bold text-slate-300">ING</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
<div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors">
<div className="text-4xl font-medium text-slate-900 mb-2 tracking-tight">16</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Currencies</div>
</div>
<div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors">
<div className="text-4xl font-medium text-slate-900 mb-2 tracking-tight">88</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Nostro Accounts</div>
</div>
<div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors">
<div className="text-4xl font-medium text-slate-900 mb-2 tracking-tight">30%</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Swift Traffic</div>
</div>
<div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors">
<div className="text-4xl font-medium text-slate-900 mb-2 tracking-tight">97%</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Remittance Share</div>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-950 text-white py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/2">
<div className="sticky top-32">
<span className="inline-block px-3 py-1 border border-blue-500/30 rounded-full text-[10px] uppercase tracking-widest text-blue-400 mb-6 bg-blue-500/10 backdrop-blur-sm">Our Strategy</span>
<h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9]">Strategic <span className="text-slate-500">Pillars</span></h2>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                            To become the leading financial institution in Mongolia's development, we focus on three core anchors that drive sustainable value.
                        </p>

<div className="flex flex-col gap-4 border-l border-white/10 pl-6">
<div className="text-sm font-medium text-white transition-colors cursor-pointer hover:text-blue-400">01. Customer Centric</div>
<div className="text-sm font-medium text-slate-500 transition-colors cursor-pointer hover:text-blue-400">02. International Standard</div>
<div className="text-sm font-medium text-slate-500 transition-colors cursor-pointer hover:text-blue-400">03. Digital Platform</div>
</div>
</div>
</div>

<div className="lg:w-1/2 flex flex-col gap-12 lg:pt-32">

<div className="group bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-blue-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-3xl font-medium mb-4">Customer-Centric Bank</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                            Positioning customers at the heart of our operations with fair pricing, transparent conditions, and seamless distribution channels.
                        </p>
<div className="h-48 w-full rounded-xl bg-slate-800 overflow-hidden relative">
<img alt="Customer" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-emerald-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-3xl font-medium mb-4">International Bank</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                            Setting the benchmark for green banking and partnering with global financial institutions to bring world-class standards to Mongolia.
                        </p>
<div className="h-48 w-full rounded-xl bg-slate-800 overflow-hidden relative">
<img alt="International" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-3xl font-medium mb-4">Platform Bank</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                            Building an integrated digital ecosystem connecting banks, fintechs, and customers through open collaboration and API innovation.
                        </p>
<div className="h-48 w-full rounded-xl bg-slate-800 overflow-hidden relative">
<img alt="Platform" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative" id="governance">
<div className="absolute inset-0 bg-white/[0.02]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<h2 className="font-serif text-5xl text-white mb-2">Corporate <span className="text-slate-600">Governance</span></h2>
<p className="text-slate-400">Leading with transparency and integrity.</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors mt-4 md:mt-0">
                    Download Charter
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col gap-2">
<button className="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-white bg-white/5 border border-white/10 transition-all hover:bg-white/10 ring-1 ring-blue-500/50" id="tab-0" onclick="switchTab(0)">Board of Directors</button>
<button className="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-slate-500 hover:text-white transition-all hover:bg-white/5 border border-transparent" id="tab-1" onclick="switchTab(1)">Executive Management</button>
<button className="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-slate-500 hover:text-white transition-all hover:bg-white/5 border border-transparent" id="tab-2" onclick="switchTab(2)">Committees</button>
</div>

<div className="lg:col-span-8">
<div className="tab-content animate-fade-in block" id="content-0">
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div>
<h4 className="text-white font-medium">Bat-Erdene B.</h4>
<p className="text-slate-500 text-sm">Chairman of the Board</p>
</div>
</div>

<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=2"/>
</div>
<div>
<h4 className="text-white font-medium">Sarangerel G.</h4>
<p className="text-slate-500 text-sm">Independent Member</p>
</div>
</div>

<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=3"/>
</div>
<div>
<h4 className="text-white font-medium">Robert M.</h4>
<p className="text-slate-500 text-sm">Non-Executive Member</p>
</div>
</div>
</div>
<div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
<h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:info" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
                                Board Structure
                            </h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                The Board consists of 9 members, including 3 independent directors, ensuring objective oversight and alignment with international governance standards.
                            </p>
</div>
</div>
<div className="tab-content hidden" id="content-1">
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-white font-serif italic text-xl">C</div>
<div>
<h4 className="text-white font-medium">CEO Office</h4>
<p className="text-slate-500 text-sm">Executive Leadership</p>
</div>
</div>
</div>
<p className="text-slate-500 mt-6">Executive management team details go here...</p>
</div>
<div className="tab-content hidden" id="content-2">
<p className="text-slate-500">Audit, Risk, and Nomination committees oversight details...</p>
</div>
</div>
</div>
</div>

</section>

<footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm font-serif font-bold italic text-sm">T</div>
<span className="text-sm font-medium tracking-tight text-white">TDB INVESTOR</span>
</a>
<p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                        Trade and Development Bank of Mongolia.<br/>
                        Juulchin Avenue-7, Ulaanbaatar 14210.
                    </p>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Company</h5>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Resources</h5>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Annual Reports</a></li>
<li><a className="hover:text-white transition-colors" href="#">Presentations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bond Prospectus</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact IR</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Stay Updated</h5>
<div className="flex gap-2 mb-4">
<input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white/30 w-full" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600 text-[10px] uppercase tracking-wider">© 2024 Trade and Development Bank. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
