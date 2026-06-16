import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            // Initial animation like framer-motion setup
            setTimeout(() => {
                const bg = document.getElementById('animated-gradient-bg');
                if(bg) {
                    bg.style.opacity = '1';
                    bg.style.transform = 'scale(1)';
                }
            }, 50);

            // Breathing gradient animation
            (function() {
                const inner = document.getElementById('animated-gradient-inner');
                if (!inner) return;

                const startingGap = 125;
                const breathingRange = 5;
                const animationSpeed = 0.02;
                const colors = ["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"];
                const stops = [35, 50, 60, 70, 80, 90, 100];
                let width = startingGap;
                let directionWidth = 1;

                function animate() {
                    if (width >= startingGap + breathingRange) directionWidth = -1;
                    if (width <= startingGap - breathingRange) directionWidth = 1;

                    width += directionWidth * animationSpeed;

                    const gradientStopsString = stops.map((stop, i) => `${colors[i]} ${stop}%`).join(", ");
                    const gradient = `radial-gradient(${width}% ${width}% at 50% 20%, ${gradientStopsString})`;

                    inner.style.background = gradient;
                    requestAnimationFrame(animate);
                }
                requestAnimationFrame(animate);
            })();
        


    (function() {
      var words = ["solution.", "ideas.", "systems.", "journeys."];
      var idx = 0;
      var el = document.getElementById('rotating-word');
      var container = document.getElementById('rotating-word-container');
      if (!el || !container) return;
      function setWord(word) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60%)';
        setTimeout(function() {
          el.textContent = word;
          el.style.transition = 'none';
          el.style.transform = 'translateY(-60%)';
          el.style.opacity = '0';
          setTimeout(function() {
            el.style.transition = 'opacity 0.22s, transform 0.32s cubic-bezier(.4,1.6,.6,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 30);
        }, 200);
      }
      setInterval(function() {
        idx = (idx + 1) % words.length;
        setWord(words[idx]);
      }, 2200);
    })();
  


        // Initialize Lucide icons with customized stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-transparent flex z-20 w-full max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2 text-3xl tracking-tight font-light text-zinc-900 cursor-pointer">
<i className="w-8 h-8" data-lucide="layers" strokeWidth="1.5"></i>
<span className="tracking-tight">Aura</span>
</div>
<button className="bg-[#2D2D2D] text-white px-8 py-3 rounded-full text-xl font-light hover:bg-zinc-800 transition-colors shadow-sm tracking-tight">
            Client Portal
        </button>
</header>

<main className="flex-1 flex flex-col md:pt-24 z-10 h-full pt-16 relative items-center justify-start overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0" id="animated-gradient-bg" style={{transition: 'opacity 2s cubic-bezier(0.25, 0.1, 0.25, 1), transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)'}}>
<div className="w-full absolute top-0 right-0 bottom-0 left-0 h-screen" id="animated-gradient-inner"></div>
</div>


<div className="relative inline-flex mb-12 group cursor-pointer z-10">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-xl opacity-40 rounded-full transition-opacity group-hover:opacity-60"></div>
<div className="relative bg-zinc-900/80 backdrop-blur-md border border-white/10 px-7 py-3 rounded-full text-xl font-light text-zinc-300 shadow-sm flex items-center gap-2">
<span className="">Announcing Aura Design Subscriptions</span>
</div>
</div>

<h1 className="relative z-10 md:text-7xl lg:text-8xl leading-[1.05] text-6xl font-light text-white tracking-tight text-center max-w-5xl mr-auto mb-10 ml-auto pr-4 pl-4">
<span className="font-serif" id="text-rotate-host" style={{display: 'inline'}}>Creative <span className="" id="rotating-word-container" style={{display: 'inline-block', position: 'relative', overflow: 'hidden', verticalAlign: 'bottom'}}><span className="" id="rotating-word" style={{display: 'inline-block', background: 'white', color: 'black', padding: '0px 0.18em', borderRadius: '0.18em', transition: 'opacity 0.18s, transform 0.28s cubic-bezier(0.4, 1.6, 0.6, 1)'}}>design.</span></span><br/> Landing page expert.</span>

</h1>

<p className="relative z-10 md:text-3xl leading-relaxed text-2xl font-light text-zinc-400 text-center max-w-3xl mr-auto mb-16 ml-auto pr-6 pl-6 tracking-tight">
            Get a world-class design team at your fingertips. <br className="hidden md:block"/>
            No more hiring headaches or unreliable freelancers.
        </p>

<form className="relative z-20 flex focus-within:ring-4 focus-within:ring-white/10 focus-within:border-zinc-600 transition-all bg-zinc-900/80 backdrop-blur-md w-full max-w-xl border-white/10 border rounded-full mr-auto mb-24 ml-auto pt-2 pr-2 pb-2 pl-2 shadow-sm items-center">
<div className="flex-1 flex min-w-0 items-center">
<div className="flex items-center flex-1 min-w-0 group">
<svg className="lucide lucide-mail w-5 h-5 text-zinc-500 ml-4 lg:ml-6 shrink-0 group-focus-within:text-zinc-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<input className="w-full placeholder:text-zinc-500 focus:outline-none min-w-0 text-base lg:text-lg font-light text-white bg-transparent py-4 pl-3 pr-2" placeholder="Email address" required="" type="email"/>
</div>
<div className="w-px h-6 bg-zinc-700 shrink-0 mx-1"></div>
<div className="flex items-center flex-1 min-w-0 group">
<svg className="lucide lucide-globe w-5 h-5 text-zinc-500 ml-2 lg:ml-3 shrink-0 group-focus-within:text-zinc-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<input className="w-full placeholder:text-zinc-500 focus:outline-none min-w-0 text-base lg:text-lg font-light text-white bg-transparent py-4 pl-3 pr-2 lg:pr-4" placeholder="Website URL" required="" type="url"/>
</div>
</div>
<button className="bg-white text-black px-10 py-4 rounded-full text-xl font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-sm tracking-tight" type="submit">
                View Plans
            </button>
</form>
</main>

<section className="w-full py-24 relative z-10 border-t border-zinc-200/50 bg-white/40">
<div className="max-w-7xl mx-auto px-6">
<p className="text-2xl font-light text-slate-500 text-center mb-12 tracking-tight">Trusted by over 100+ innovative brands</p>
<div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-12 md:gap-x-24 lg:gap-x-32 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3 select-none">
<i className="w-10 h-10 text-zinc-400 fill-zinc-400" data-lucide="hexagon" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Nexus Cloud</span>
</div>
<div className="flex items-center select-none">
<span className="text-4xl font-normal tracking-tight lowercase text-zinc-500">horizon.</span>
</div>
<div className="flex items-center select-none">
<span className="text-5xl font-normal tracking-tight uppercase text-zinc-400">APEX</span>
</div>
<div className="flex flex-col items-center justify-center select-none leading-tight">
<span className="text-4xl font-normal tracking-tight text-zinc-500 mb-1">NOVA</span>
<div className="h-px w-full bg-zinc-300 mb-1.5"></div>
<span className="text-sm uppercase tracking-widest text-zinc-400 font-normal">FORGE</span>
</div>
<div className="flex items-center gap-4 select-none">
<i className="w-10 h-10 text-zinc-500" data-lucide="aperture" strokeWidth="1.5"></i>
<div className="flex flex-col justify-center leading-tight">
<span className="text-xl font-normal tracking-tight text-zinc-500">Zenith Labs</span>
<span className="text-base text-zinc-400 font-normal tracking-tight">Pioneering the future</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 relative z-10 bg-[#FAFAFA]">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex items-center justify-center gap-8 mb-20 overflow-hidden">
<i className="w-20 h-20 text-zinc-200 flex-shrink-0" data-lucide="globe" strokeWidth="1.5"></i>
<h2 className="whitespace-nowrap text-5xl font-light text-zinc-900 tracking-tight md:text-6xl lg:text-7xl">
                    Trusted by Founders
                </h2>
<i className="w-20 h-20 text-zinc-200 flex-shrink-0" data-lucide="globe" strokeWidth="1.5"></i>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight">Nexus</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "Aura has built 3 amazing platforms for us across multiple brands. They have excellent knowledge of modern web design and deliver projects in a timely manner."
                    </p>
<div className="flex items-center gap-5">
<img alt="Emily Chen" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=47"/>
<div className="">
<div className="font-normal tracking-tight text-zinc-900 text-lg">Emily Chen</div>
<div className="text-base font-light text-zinc-500">CMO, Nexus</div>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<img alt="Testimonial Video" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
<div className="absolute top-8 left-8 flex items-center gap-3 text-white">
<i className="w-7 h-7 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
<div className="flex flex-col leading-none">
<span className="font-normal tracking-tight text-xl">ELEVATE</span>
<span className="text-sm font-normal tracking-widest opacity-80 mt-1">STUDIO</span>
</div>
</div>
<div className="absolute bottom-10 left-8 right-8">
<p className="text-3xl font-light text-white leading-snug tracking-tight">
                            They took the <span className="bg-orange-500/90 text-white px-2 rounded-md font-normal">time</span> to understand our brand.
                        </p>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="box" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight">Horizon</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "I had the pleasure of working with Aura on our website revamp project, and I can confidently say they are exceptional at what they do. Their design thinking is top-notch."
                    </p>
<div className="flex items-center gap-5">
<img alt="Michael Ross" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Michael Ross</div>
<div className="text-base font-light text-zinc-500">Product Marketing, Horizon</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="compass" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight">Zenith</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "I highly recommend Aura for any design projects, as they consistently demonstrate exceptional creative skills and a strong work ethic. They showcased their expertise in modern UI."
                    </p>
<div className="flex items-center gap-5">
<img alt="Sarah Jenkins" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=12"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Sarah Jenkins</div>
<div className="text-base font-light text-zinc-500">Director, Zenith</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="git-merge" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight">Apex</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "We recently engaged Aura to redesign our app, they were responsive and worked hard to get everything over the line. The final result is a functional and visually clean product."
                    </p>
<div className="flex items-center gap-5">
<img alt="David Kim" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=5"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">David Kim</div>
<div className="text-base font-light text-zinc-500">Co-Founder, Apex</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-9 h-9" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "I highly recommend Aura as a design partner. Their exceptional skills, attention to detail, and ability to create user-friendly interfaces make them a valuable asset."
                    </p>
<div className="flex items-center gap-5">
<img alt="Jessica Alba" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=8"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Jessica Alba</div>
<div className="text-base font-light text-zinc-500">Founder, Marketplace</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="sun" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight uppercase">Lumina</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "Aura is a brilliant team to work with. Their expertise and experience in design is very creative. I worked with them for over a month and they reported on time with new ideas."
                    </p>
<div className="flex items-center gap-5">
<img alt="Tom Hardy" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=14"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Tom Hardy</div>
<div className="text-base font-light text-zinc-500">Founder &amp; CEO, Lumina</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="mountain" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight tracking-widest uppercase">Nova</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "We brought Aura on board to help redesign Nova's landing page for a major event, and they absolutely delivered. Throughout the process, they patiently worked through iterations."
                    </p>
<div className="flex items-center gap-5">
<img alt="Chris Evans" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=33"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Chris Evans</div>
<div className="text-base font-light text-zinc-500">CoFounder, Nova</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight uppercase">Prism</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "Prism's design work was completed with a sense of responsibility despite the tight timeline. They successfully directed the design and communicated responsively."
                    </p>
<div className="flex items-center gap-5">
<img alt="Anna Kendrick" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=53"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Anna Kendrick</div>
<div className="text-base font-light text-zinc-500">CoFounder, Prism</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<span className="text-2xl font-normal tracking-tight">Quantum Labs</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "We're happy to have collaborated with Aura for our design needs. Their responsiveness, flexibility and timeliness made it feel like a natural extension of our team."
                    </p>
<div className="flex items-center gap-5">
<img alt="Mark Ruffalo" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=44"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Mark Ruffalo</div>
<div className="text-base font-light text-zinc-500">Head of Programs, Quantum</div>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<img alt="Testimonial Video" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40"></div>
<div className="absolute top-8 left-8 flex items-center gap-3 text-white">
<i className="w-7 h-7 text-white" data-lucide="infinity" strokeWidth="1.5"></i>
<span className="font-normal tracking-tight text-xl uppercase tracking-widest">VORTEX</span>
</div>
<div className="absolute bottom-10 left-8 right-8">
<p className="text-3xl font-light text-white leading-snug tracking-tight">
                            They were able to understand <span className="bg-green-500/90 text-white px-2 rounded-md font-normal">what</span> we want.
                        </p>
</div>
</div>

<div className="break-inside-avoid bg-white border border-zinc-200/70 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-8 text-zinc-900">
<i className="w-7 h-7" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-2xl font-normal tracking-tight uppercase">Vroom Media</span>
</div>
<p className="text-xl text-zinc-600 leading-relaxed mb-10 font-light">
                        "Special shoutout to Aura for the phenomenal work they did for our new site. They are highly professional, timely and very easy to work with. Highly recommend them."
                    </p>
<div className="flex items-center gap-5">
<img alt="Steve Rogers" className="w-14 h-14 rounded-full object-cover bg-zinc-100 border border-zinc-200" src="https://i.pravatar.cc/150?img=60"/>
<div>
<div className="font-normal tracking-tight text-zinc-900 text-lg">Steve Rogers</div>
<div className="text-base font-light text-zinc-500">CEO, Vroom Media</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 relative z-10 bg-[#FAF7F2]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
<div>
<span className="text-base font-normal tracking-widest text-zinc-500 uppercase mb-8 block">How it works</span>
<h2 className="text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-[1.1] font-light">
                        Get a dedicated design team at fraction of the cost.
                    </h2>
</div>
<div className="flex flex-col items-start justify-center pt-2">
<p className="text-xl lg:text-2xl text-zinc-800 leading-relaxed mb-10 font-light">
                        Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.
                    </p>
<button className="bg-black text-white px-8 py-4 rounded-lg text-xl font-normal hover:bg-zinc-800 transition-colors tracking-tight">
                        See plans
                    </button>
</div>
</div>
<div className="relative mt-20">

<div className="hidden md:block absolute top-4 left-0 w-full h-px bg-zinc-300"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">

<div className="relative">
<div className="inline-flex items-center justify-center pr-2 w-16 h-8 bg-[#FDE293] mb-8 relative z-10 font-normal text-black" style={{clipPath: 'polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)'}}>
                            1
                        </div>
<h3 className="text-2xl font-normal text-zinc-900 mb-5 tracking-tight">Subscribe &amp; get started instantly</h3>
<p className="text-xl text-zinc-600 leading-relaxed font-light">
                            Submit as many design tasks as you need without worrying about individual project fees.
                        </p>
</div>

<div className="relative">
<div className="inline-flex items-center justify-center pr-2 w-16 h-8 bg-[#BEE3F8] mb-8 relative z-10 font-normal text-black" style={{clipPath: 'polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)'}}>
                            2
                        </div>
<h3 className="text-2xl font-normal text-zinc-900 mb-5 tracking-tight">Polished designs - on time</h3>
<p className="text-xl text-zinc-600 leading-relaxed font-light">
                            Our designers get to work to deliver your request. Receive your design within a few days.
                        </p>
</div>

<div className="relative">
<div className="inline-flex items-center justify-center pr-2 w-16 h-8 bg-[#E9D8FD] mb-8 relative z-10 font-normal text-black" style={{clipPath: 'polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)'}}>
                            3
                        </div>
<h3 className="text-2xl font-normal text-zinc-900 mb-5 tracking-tight">Revisions made simple</h3>
<p className="text-xl text-zinc-600 leading-relaxed font-light">
                            Custom designs, prompt replies and as many revisions as you need.
                        </p>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
