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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            
            // --- Animated Grid Pattern ---
            const sqContainer = document.getElementById('animated-squares');
            if (sqContainer) {
                const size = 40;
                const numSquares = 30;
                let cols = Math.max(1, Math.floor(window.innerWidth / size));
                // Constrain rows slightly to prevent overflow bounds in hero view
                let rows = Math.max(1, Math.floor(window.innerHeight / size));

                for(let i=0; i<numSquares; i++) {
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('width', size - 1);
                    rect.setAttribute('height', size - 1);
                    rect.setAttribute('fill', 'currentColor');
                    rect.setAttribute('stroke-width', '0');
                    rect.style.opacity = '0';
                    rect.style.transition = 'opacity 3s ease-in-out';
                    sqContainer.appendChild(rect);

                    const animateSquare = () => {
                        const x = Math.floor(Math.random() * cols);
                        const y = Math.floor(Math.random() * rows);
                        rect.setAttribute('x', x * size + 1);
                        rect.setAttribute('y', y * size + 1);
                        rect.style.opacity = '0.3'; // maxOpacity
                        
                        setTimeout(() => {
                            rect.style.opacity = '0';
                            setTimeout(animateSquare, 3000 + Math.random() * 2000);
                        }, 3000);
                    };
                    
                    setTimeout(animateSquare, i * 150); // Stagger initial start
                }
                
                window.addEventListener('resize', () => {
                    cols = Math.max(1, Math.floor(window.innerWidth / size));
                    rows = Math.max(1, Math.floor(window.innerHeight / size));
                });
            }

            // --- Wavy Background ---
            const canvas = document.getElementById('wavy-canvas');
            if (canvas && typeof SimplexNoise !== 'undefined') {
                const ctx = canvas.getContext('2d');
                let w, h, nt = 0;
                const simplex = new SimplexNoise();
                const blur = 10;
                
                const initCanvas = () => {
                    w = ctx.canvas.width = window.innerWidth;
                    h = ctx.canvas.height = canvas.parentElement.offsetHeight || 600;
                    ctx.filter = `blur(${blur}px)`;
                };
                
                window.addEventListener('resize', initCanvas);
                initCanvas();
                
                // Using elegant dark/neutral colors that complement the design
                const waveColors = ["#404040", "#525252", "#737373", "#262626", "#171717"];
                
                const renderWaves = () => {
                    ctx.fillStyle = "#0a0a0a"; // Matches bg-neutral-950
                    ctx.globalAlpha = 0.5;
                    ctx.fillRect(0, 0, w, h);
                    
                    nt += 0.002;
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.lineWidth = 50;
                        ctx.strokeStyle = waveColors[i % waveColors.length];
                        for (let x = 0; x < w; x += 5) {
                            const y = simplex.noise3D(x / 800, 0.3 * i, nt) * 100;
                            ctx.lineTo(x, y + h * 0.5);
                        }
                        ctx.stroke();
                        ctx.closePath();
                    }
                    requestAnimationFrame(renderWaves);
                };
                renderWaves();
            }

            // --- Revenue Counter Animation ---
            const counterElement = document.getElementById('revenue-counter');
            if (counterElement) {
                const targetValue = 124500;
                const duration = 2000;
                
                const formatNumber = (num) => {
                    return `€${num.toLocaleString('en-US')}<span class="text-sm text-neutral-500 font-normal">.00</span>`;
                };

                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        observer.disconnect();
                        let startTimestamp = null;
                        
                        const step = (timestamp) => {
                            if (!startTimestamp) startTimestamp = timestamp;
                            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                            const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
                            const currentValue = Math.floor(easeProgress * targetValue);
                            counterElement.innerHTML = formatNumber(currentValue);

                            if (progress < 1) {
                                window.requestAnimationFrame(step);
                            } else {
                                counterElement.innerHTML = formatNumber(targetValue);
                            }
                        };
                        window.requestAnimationFrame(step);
                    }
                }, { threshold: 0.1 });

                counterElement.innerHTML = formatNumber(0);
                observer.observe(counterElement);
            }

            // --- Terminal Typewriter Effect ---
            const twContainer = document.getElementById('typewriter-container');
            if (twContainer) {
                const snippets = [
                    "const pipeline = await Multiminds.init();\nif (pipeline.status === 'ready') {\n  await Lake.deploy(pipeline.data);\n}\n> Syncing nodes... [OK]",
                    "const stream = new DataStream('crm');\nstream.on('data', (chunk) => {\n  Warehouse.ingest(chunk);\n});\n> Processing... 100%"
                ];
                
                let sIdx = 0;
                let cIdx = 0;
                let isDeleting = false;
                let text = "";

                function highlight(code) {
                    return code
                        .replace(/(const|await|if|new)\b/g, '<span class="text-neutral-200">$1</span>')
                        .replace(/('.*?')/g, '<span class="text-neutral-500">$1</span>')
                        .replace(/(>.*)/g, '<span class="text-neutral-500">$1</span>')
                        .replace(/  /g, '&nbsp;&nbsp;')
                        .replace(/\n/g, '<br>');
                }

                function type() {
                    const currentSnippet = snippets[sIdx];
                    
                    if (isDeleting) {
                        text = currentSnippet.substring(0, cIdx - 1);
                        cIdx--;
                    } else {
                        text = currentSnippet.substring(0, cIdx + 1);
                        cIdx++;
                    }

                    twContainer.innerHTML = highlight(text) + '<span class="inline-block w-[6px] h-3.5 bg-neutral-400 ml-[1px] align-middle animate-pulse"></span>';

                    let typeSpeed = isDeleting ? 20 : 50;

                    if (!isDeleting && text === currentSnippet) {
                        typeSpeed = 2000;
                        isDeleting = true;
                    } else if (isDeleting && text === "") {
                        isDeleting = false;
                        sIdx = (sIdx + 1) % snippets.length;
                        typeSpeed = 500;
                    }

                    if (!isDeleting) {
                        typeSpeed += Math.random() * 30;
                    }

                    setTimeout(type, typeSpeed);
                }
                
                setTimeout(type, 1000);
            }
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
      

<div className="fixed inset-0 z-[-1] flex justify-center overflow-hidden pointer-events-none">
<div className="w-[80vw] h-[50vh] blur-[120px] rounded-full translate-y-[-50%] bg-neutral-900/40 z-0"></div>
</div>

<div className="absolute inset-x-0 top-0 h-[100vh] z-[-2] pointer-events-none overflow-hidden mask-hero-grid opacity-70">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full stroke-neutral-800/30 fill-neutral-800/10">
<defs>
<pattern height="40" id="grid-pattern" patternunits="userSpaceOnUse" width="40" x="-1" y="-1">
<path d="M.5 40V.5H40" fill="none"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
<svg className="overflow-visible" id="animated-squares" x="-1" y="-1"></svg>
</svg>
</div>

<header className="fixed top-1 inset-x-0 z-50 border-b backdrop-blur-md border-neutral-800/50 bg-neutral-950/80">
<div className="flex h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-base font-normal tracking-tighter flex items-center gap-2 text-neutral-100" href="#">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-neutral-100">
<div className="w-2 h-2 rounded-full bg-neutral-950"></div>
</div>
                    alwaysongroup
                </a>

<nav className="hidden md:flex items-center gap-6 text-base">
<a className="transition-colors hover:text-neutral-100" href="#agencies">Agencies</a>
<a className="transition-colors hover:text-neutral-100" href="#philosophy">Philosophy</a>
<a className="transition-colors hover:text-neutral-100" href="#contact">Contact</a>
</nav>
</div>
<div className="flex items-center gap-4 text-base">
<a className="font-normal px-4 py-1.5 rounded-full transition-colors bg-neutral-100 text-neutral-950 hover:bg-neutral-300" href="#contact">Get in touch</a>
</div>
</div>
</header>
<main className="pt-32 pb-24 relative">

<section className="flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm mb-8 backdrop-blur-sm border-neutral-800 bg-neutral-900/50 text-neutral-300">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-neutral-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
                Five specialized agencies
                <i className="w-4 h-4 text-neutral-500" data-lucide="arrow-right"></i>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal text-neutral-50 tracking-tight max-w-4xl mb-6">A Tech Driven <br className="hidden md:block"/> <span className="bg-clip-text text-transparent bg-gradient-to-r to-neutral-500 from-neutral-100">Marketing Group</span></h1>
<p className="text-xl md:text-2xl max-w-2xl mb-10 font-normal text-neutral-400">
                Five industry-leading agencies united. Scale your revenue with engineering-grade marketing, data, and CRM infrastructure that never sleeps.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto font-normal px-6 py-2.5 rounded-full transition-colors text-base flex items-center justify-center gap-2 bg-neutral-100 text-neutral-950 hover:bg-neutral-300" href="#contact">
                    Get in touch
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border font-normal px-6 py-2.5 rounded-full transition-colors text-base flex items-center justify-center gap-2 border-neutral-800 text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100" href="#agencies">
<i className="w-5 h-5" data-lucide="layers"></i>
                    Meet our Agencies
                </a>
</div>

<div className="w-full max-w-5xl mt-20 relative">
<div className="z-10 bg-gradient-to-t via-transparent to-transparent from-neutral-950 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="rounded-xl border overflow-hidden shadow-2xl relative border-neutral-800/60 bg-neutral-950">

<div className="h-10 border-b flex items-center px-4 gap-2 border-neutral-800/60 bg-neutral-900/40">
<div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
<div className="mx-auto flex items-center gap-2 text-sm text-neutral-500 px-24 py-1 rounded-md border bg-neutral-900/80 border-neutral-800/50">
<i className="w-3 h-3" data-lucide="lock"></i>
                            app.alwaysongroup.com
                        </div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="space-y-6">
<div>
<h3 className="text-sm font-normal text-neutral-500 uppercase tracking-widest mb-3">ALWAYS ON Initiatives</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<div>
<div className="text-base font-normal text-neutral-200">Retargeting V4</div>
<div className="text-sm text-neutral-500">ROAS: 3.4x</div>
</div>
</div>
<div className="w-8 h-4 rounded-full relative cursor-pointer border border-transparent bg-neutral-200">
<div className="w-3 h-3 rounded-full absolute right-0.5 top-0.5 shadow-sm bg-neutral-950"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<div className="text-base font-normal text-neutral-200">Email Sequence</div>
<div className="text-sm text-neutral-500">Open rate: 42%</div>
</div>
</div>
<div className="w-8 h-4 rounded-full relative cursor-pointer border bg-neutral-800 border-neutral-700">
<div className="w-3 h-3 rounded-full absolute left-0.5 top-0.5 shadow-sm transition-transform bg-neutral-400"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="message-square"></i>
</div>
<div>
<div className="text-base font-normal text-neutral-200">ICP Discovery</div>
<div className="text-sm text-neutral-500">In progress</div>
</div>
</div>
<div className="w-4 h-4 rounded-full border-2 animate-spin mr-1 border-neutral-700 border-t-neutral-400"></div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<div>
<div className="text-base font-normal text-neutral-200">Data Lake Setup</div>
<div className="text-sm text-neutral-500">Syncing nodes</div>
</div>
</div>
<div className="w-8 h-1.5 rounded-full overflow-hidden mr-1 bg-neutral-800">
<div className="w-[60%] h-full rounded-full bg-neutral-400"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 border rounded-lg p-4 flex flex-col justify-between min-h-[280px] border-neutral-800/50 bg-neutral-900/10">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-base mb-1 text-neutral-400">Predicted Revenue</div>
<div className="text-3xl font-normal tracking-tight text-neutral-100" id="revenue-counter">€0<span className="text-sm text-neutral-500 font-normal">.00</span></div>
</div>
<div className="flex items-center gap-1 text-sm px-2 py-1 rounded-md font-normal text-neutral-950 bg-neutral-100">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                                    +14.2%
                                </div>
</div>

<div className="relative w-full h-32 flex items-end gap-2 overflow-hidden mt-auto">
<div className="w-full h-[20%] rounded-t-sm bg-neutral-800/30"></div>
<div className="w-full h-[35%] rounded-t-sm bg-neutral-800/30"></div>
<div className="w-full h-[30%] rounded-t-sm bg-neutral-800/50"></div>
<div className="w-full h-[45%] rounded-t-sm bg-neutral-700/50"></div>
<div className="w-full h-[60%] rounded-t-sm bg-neutral-700/70"></div>
<div className="w-full h-[55%] rounded-t-sm bg-neutral-600/70"></div>
<div className="w-full bg-neutral-500 h-[80%] rounded-t-sm"></div>
<div className="w-full h-[75%] rounded-t-sm relative bg-neutral-400">
<div className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm px-1.5 py-0.5 rounded font-normal whitespace-nowrap hidden md:block bg-neutral-100 text-neutral-950">
                                        Today
                                    </div>
</div>
<div className="w-full border border-dashed h-[90%] rounded-t-sm border-neutral-700"></div>
<div className="w-full border border-dashed h-[100%] rounded-t-sm border-neutral-800"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y py-10 mt-10 border-neutral-800/50 bg-neutral-900/10 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-sm text-neutral-500 font-normal tracking-widest uppercase mb-8 text-center">Our dedicated agency collective</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
<div className="text-xl md:text-2xl font-normal tracking-tight text-neutral-500 hover:text-neutral-200 transition-colors duration-500">Clicktrust</div>
<div className="text-xl md:text-2xl font-normal tracking-tight text-neutral-500 hover:text-neutral-200 transition-colors duration-500">Leadstreet</div>
<div className="text-xl md:text-2xl font-normal tracking-tight text-neutral-500 hover:text-neutral-200 transition-colors duration-500">Depends</div>
<div className="text-xl md:text-2xl font-normal tracking-tight text-neutral-500 hover:text-neutral-200 transition-colors duration-500">Multiminds</div>
<div className="text-xl md:text-2xl font-normal tracking-tight text-neutral-500 hover:text-neutral-200 transition-colors duration-500">Seven Beaufort</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative z-10" id="agencies">
<div className="mb-16 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-neutral-100">A unified collective.</h2>
<p className="text-lg max-w-xl mx-auto md:mx-0 text-neutral-400">Five specialized agencies working together. Strategy, clean data, precise performance marketing, organic dominance, and scalable CRM infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border p-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 via-neutral-400/20"></div>
<div className="md:w-5/12 z-10 relative">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm group-hover:border-neutral-500 transition-colors duration-500 border-neutral-700/50 bg-neutral-900">
<i className="w-6 h-6 text-neutral-300" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-2 text-neutral-100">Seven Beaufort — Management Consulting</h3>
<p className="text-base text-neutral-400">We help organizations with their toughest challenges in growth, innovation &amp; digital. Seven Beaufort is a Belgium-based quirky management consulting agency setting the overarching strategy.</p>
<a className="relative inline-flex h-9 mt-8 w-fit items-center justify-center overflow-hidden rounded-full p-[1px] group/btn focus:outline-none" href="https://sevenbeaufort.be" target="_blank">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#525252_50%,transparent_100%)] group-hover/btn:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#d4d4d4_50%,transparent_100%)] opacity-50 group-hover/btn:opacity-100 transition-all duration-500"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1 text-sm font-normal text-neutral-300 transition-colors group-hover/btn:text-neutral-50 group-hover/btn:bg-neutral-900 z-10 gap-2">
                                Visit Seven Beaufort
                                <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</span>
</a>
</div>
<div className="md:w-7/12 w-full h-56 relative flex items-center justify-center z-10 border rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent border-neutral-800/40 from-neutral-900/40">
<div className="relative w-full h-full max-w-sm flex items-center justify-center">
<div className="absolute w-12 h-12 rounded-full border flex items-center justify-center z-20 group-hover:border-neutral-400 transition-colors duration-500 border-neutral-600 bg-neutral-900">
<div className="w-3 h-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse bg-neutral-300"></div>
</div>
<div className="absolute w-32 h-32 rounded-full border border-dashed z-10 animate-[spin_10s_linear_infinite] border-neutral-700/70"></div>
<div className="absolute w-48 h-48 rounded-full border z-10 animate-[spin_15s_linear_infinite] border-neutral-800/80">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full transform rotate-90 bg-neutral-950 border border-neutral-700 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-neutral-400 transition-colors duration-500">
<svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-500" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2.5L16 9V18C16 20.5 14 22 12 22C10 22 8 20.5 8 18V9L12 2.5Z" strokeLinejoin="round"></path>
<path d="M10 10H14M10 14H14" strokeLinecap="round"></path>
<path d="M12 6V18" strokeLinecap="round"></path>
</svg>
</div>
</div>
<div className="absolute w-64 h-64 rounded-full border z-10 border-neutral-800/40"></div>
<svg className="absolute inset-0 w-full h-full z-10" fill="none">
<path className="group-hover:stroke-neutral-600 transition-colors duration-500" d="M 50% 50% L 20% 20%" stroke="#262626"></path>
<path className="group-hover:stroke-neutral-600 transition-colors duration-500" d="M 50% 50% L 80% 30%" stroke="#262626"></path>
<path className="group-hover:stroke-neutral-600 transition-colors duration-500" d="M 50% 50% L 70% 80%" stroke="#262626"></path>
</svg>
<div className="absolute top-[20%] left-[20%] w-6 h-6 rounded border flex items-center justify-center z-20 group-hover:bg-neutral-800 transition-colors duration-500 border-neutral-700 bg-neutral-950">
<i className="w-4 h-4 text-neutral-400" data-lucide="bar-chart"></i>
</div>
<div className="absolute top-[30%] right-[20%] w-6 h-6 rounded border flex items-center justify-center z-20 group-hover:bg-neutral-800 transition-colors duration-500 border-neutral-700 bg-neutral-950">
<i className="w-4 h-4 text-neutral-400" data-lucide="lightbulb"></i>
</div>
<div className="absolute bottom-[20%] right-[30%] w-6 h-6 rounded border flex items-center justify-center z-20 group-hover:bg-neutral-800 transition-colors duration-500 border-neutral-700 bg-neutral-950">
<i className="w-4 h-4 text-neutral-400" data-lucide="laptop"></i>
</div>
</div>
</div>
</div>
<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border flex flex-col md:flex-row shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 via-neutral-400/20 z-20"></div>
<div className="p-8 md:w-1/2 flex flex-col justify-between z-10 relative">
<div>
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm border-neutral-700/50 bg-neutral-900 text-neutral-300">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-neutral-100">Multiminds — Data Engineering</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">We aggregate data from ads, CRM, and product to create a single source of truth. Build robust pipelines and infrastructure to power your stack.</p>
<a className="relative inline-flex h-9 mb-8 w-fit items-center justify-center overflow-hidden rounded-full p-[1px] group/btn focus:outline-none" href="https://multiminds.eu" target="_blank">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#525252_50%,transparent_100%)] group-hover/btn:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#d4d4d4_50%,transparent_100%)] opacity-50 group-hover/btn:opacity-100 transition-all duration-500"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1 text-sm font-normal text-neutral-300 transition-colors group-hover/btn:text-neutral-50 group-hover/btn:bg-neutral-900 z-10 gap-2">
                                    Visit Multiminds
                                    <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</span>
</a>
</div>

<div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-5 font-mono text-[13px] leading-relaxed w-full shadow-lg mt-auto overflow-hidden relative min-h-[170px]">
<div className="flex gap-2 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="text-neutral-400" id="typewriter-container">c<span className="inline-block w-[6px] h-3.5 bg-neutral-400 ml-[1px] align-middle animate-pulse"></span></div>
</div>
</div>
<div className="hidden md:flex md:w-1/2 relative min-h-[300px] border-l border-neutral-800/50 overflow-hidden bg-transparent">
<div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none flex items-center justify-center opacity-60">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] transition-transform duration-1000 ease-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
</div>
<div className="relative w-full h-full flex flex-col items-center justify-center z-10 py-12 gap-1 group-hover:gap-3 transition-all duration-700 ease-in-out">
<div className="w-14 h-6 rounded-full border border-neutral-700/80 bg-neutral-900/60 flex items-center justify-center z-20 shadow-sm transition-transform duration-700 group-hover:-translate-y-1">
<div className="w-1 h-1 rounded-full bg-neutral-400"></div>
</div>
<div className="w-px h-20 bg-neutral-800/60 relative z-10 transition-all duration-700 group-hover:h-24 group-hover:bg-neutral-700">
<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-neutral-400/30 to-transparent"></div>
</div>
<div className="w-16 h-16 rounded-[14px] border border-neutral-700 bg-neutral-900/50 flex items-center justify-center transform rotate-45 z-20 shadow-[0_0_20px_rgba(255,255,255,0.02)] transition-all duration-700 group-hover:rotate-[135deg] group-hover:border-neutral-500 group-hover:scale-110 group-hover:bg-neutral-800/60">
<div className="w-6 h-6 rounded-[6px] border border-neutral-600 bg-neutral-800/80 flex items-center justify-center transition-transform duration-700 group-hover:-rotate-90">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-200 shadow-[0_0_10px_1px_rgba(255,255,255,0.8)] transform -rotate-45"></div>
</div>
</div>
<div className="w-px h-20 bg-neutral-800/60 relative z-10 transition-all duration-700 group-hover:h-24 group-hover:bg-neutral-700">
<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-neutral-400/20 to-transparent"></div>
</div>
<div className="w-14 h-6 rounded-full border border-neutral-800/80 bg-neutral-950/80 flex items-center justify-center z-20 shadow-sm transition-transform duration-700 group-hover:translate-y-1">
<div className="w-1 h-1 rounded-full bg-neutral-600"></div>
</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border p-8 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 via-neutral-400/20"></div>
<div className="z-10 relative">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm transition-colors duration-500 border-neutral-700/50 bg-neutral-900">
<i className="w-6 h-6 text-neutral-300" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-2 text-neutral-100">Clicktrust - AI Marketing</h3>
<p className="text-base text-neutral-400">A performance marketing agency. We replace guesswork with algorithmic precision to maximize ROI.</p>
<a className="relative inline-flex h-9 mt-8 w-fit items-center justify-center overflow-hidden rounded-full p-[1px] group/btn focus:outline-none" href="https://clicktrust.be" target="_blank">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#525252_50%,transparent_100%)] group-hover/btn:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#d4d4d4_50%,transparent_100%)] opacity-50 group-hover/btn:opacity-100 transition-all duration-500"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1 text-sm font-normal text-neutral-300 transition-colors group-hover/btn:text-neutral-50 group-hover/btn:bg-neutral-900 z-10 gap-2">
                                Visit Clicktrust
                                <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</span>
</a>
</div>
<div className="mt-12 h-32 w-full flex items-end gap-2 justify-between relative z-10 border-b pb-px border-neutral-800">
<div className="w-full rounded-t-sm h-[30%] group-hover:h-[45%] transition-all duration-700 ease-out relative overflow-hidden bg-neutral-800/40"></div>
<div className="w-full rounded-t-sm h-[40%] group-hover:h-[65%] transition-all duration-700 delay-75 ease-out relative overflow-hidden bg-neutral-800/50"></div>
<div className="w-full rounded-t-sm h-[55%] group-hover:h-[95%] transition-all duration-700 delay-150 ease-out relative bg-neutral-700/50">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500 text-sm border px-2 py-1 rounded shadow-lg flex items-center gap-1 font-normal text-neutral-200 bg-neutral-800 border-neutral-700">
<i className="w-3 h-3 text-emerald-400" data-lucide="arrow-up"></i>
                                3.4x
                            </div>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border p-8 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 via-neutral-400/20"></div>
<div className="z-10 relative">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm transition-colors duration-500 border-neutral-700/50 bg-neutral-900">
<i className="w-6 h-6 text-neutral-300" data-lucide="search"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-2 text-neutral-100">Depends - SEO &amp; GEO</h3>
<p className="text-base text-neutral-400">Dominate search results and orchestrate local visibility with technical precision.</p>
<a className="relative inline-flex h-9 mt-8 w-fit items-center justify-center overflow-hidden rounded-full p-[1px] group/btn focus:outline-none" href="https://depends.be" target="_blank">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#525252_50%,transparent_100%)] group-hover/btn:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#d4d4d4_50%,transparent_100%)] opacity-50 group-hover/btn:opacity-100 transition-all duration-500"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1 text-sm font-normal text-neutral-300 transition-colors group-hover/btn:text-neutral-50 group-hover/btn:bg-neutral-900 z-10 gap-2">
                                Visit Depends
                                <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</span>
</a>
</div>
<div className="mt-12 flex flex-col gap-3 relative z-10">
<div className="flex items-center gap-2 p-2.5 rounded-lg border overflow-hidden relative border-neutral-800 bg-neutral-900/50">
<i className="w-4 h-4 text-neutral-500" data-lucide="search"></i>
<div className="h-3 w-1/2 rounded relative overflow-hidden bg-neutral-800">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full opacity-0 group-hover:opacity-100 group-hover:animate-beam-x via-blue-400/30"></div>
</div>
</div>
<div className="flex items-center gap-3 p-2.5 h-[52px] rounded-lg border transition-all duration-700 ease-in-out transform group-hover:translate-y-[calc(100%+0.75rem)] group-hover:opacity-40 group-hover:scale-[0.98] border-neutral-800/40 bg-neutral-900/30 relative z-10">
<div className="w-5 h-5 rounded-full border border-transparent flex items-center justify-center text-sm transition-all duration-700 bg-neutral-800 text-neutral-400 group-hover:bg-neutral-900 group-hover:text-neutral-600 relative overflow-hidden">
<span className="absolute inset-0 flex items-center justify-center transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">1</span>
<span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">2</span>
</div>
<div className="flex-1">
<div className="h-2 w-1/2 rounded mb-1.5 transition-colors duration-700 bg-neutral-600 group-hover:bg-neutral-700"></div>
<div className="h-1.5 w-1/3 rounded transition-colors duration-700 bg-neutral-700 group-hover:bg-neutral-800"></div>
</div>
<i className="w-4 h-4 text-neutral-600 transition-all duration-700 opacity-100 group-hover:opacity-0 absolute right-2.5" data-lucide="trending-up"></i>
</div>
<div className="flex items-center gap-3 p-2.5 h-[52px] rounded-lg border opacity-70 transition-all duration-700 ease-in-out transform group-hover:-translate-y-[calc(100%+0.75rem)] group-hover:opacity-100 group-hover:scale-[1.02] group-hover:bg-neutral-800/50 group-hover:border-neutral-600/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] border-neutral-800/30 bg-neutral-900/20 relative z-20">
<div className="w-5 h-5 rounded-full border border-transparent flex items-center justify-center text-sm transition-all duration-700 bg-neutral-900 text-neutral-600 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 relative overflow-hidden">
<span className="absolute inset-0 flex items-center justify-center transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">2</span>
<span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">1</span>
</div>
<div className="flex-1">
<div className="h-2 w-2/3 rounded mb-1.5 transition-colors duration-700 bg-neutral-700 group-hover:bg-neutral-400"></div>
<div className="h-1.5 w-1/4 rounded transition-colors duration-700 bg-neutral-800 group-hover:bg-neutral-500"></div>
</div>
<i className="w-4 h-4 text-emerald-400 absolute right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0" data-lucide="arrow-up"></i>
</div>
</div>
</div>
<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border p-8 flex flex-col md:flex-row justify-between items-center gap-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 via-neutral-400/20"></div>
<div className="md:w-1/2 relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 shadow-sm transition-colors duration-500 border-neutral-700/50 bg-neutral-900">
<i className="w-6 h-6 text-neutral-300" data-lucide="git-branch"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-2 text-neutral-100">Leadstreet — HubSpot Elite Partner</h3>
<p className="text-base text-neutral-400">Connect your entire customer journey. Set up complex CRM architectures and automation that align marketing, sales, and service effortlessly.</p>
<a className="relative inline-flex h-9 mt-8 w-fit items-center justify-center overflow-hidden rounded-full p-[1px] group/btn focus:outline-none" href="https://leadstreet.be" target="_blank">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#525252_50%,transparent_100%)] group-hover/btn:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#d4d4d4_50%,transparent_100%)] opacity-50 group-hover/btn:opacity-100 transition-all duration-500"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1 text-sm font-normal text-neutral-300 transition-colors group-hover/btn:text-neutral-50 group-hover/btn:bg-neutral-900 z-10 gap-2">
                                Visit Leadstreet
                                <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</span>
</a>
</div>
<div className="md:w-1/2 w-full flex justify-end relative z-10">
<div className="w-full relative h-48 border rounded-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] overflow-hidden flex items-center mask-fade-x border-neutral-800/50">
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg border flex items-center justify-center z-20 group-hover:border-[#ff7a59]/40 transition-all duration-500 bg-neutral-900 border-neutral-700">
<i className="w-5 h-5 text-neutral-300" data-lucide="user"></i>
</div>
<div className="absolute left-16 top-1/2 w-12 h-px z-10 overflow-hidden bg-neutral-800">
<div className="w-full h-full bg-gradient-to-r from-transparent via-[#ff7a59]/50 to-transparent -translate-x-full opacity-0 group-hover:opacity-100 group-hover:animate-beam-x"></div>
</div>
<div className="absolute left-[112px] top-1/2 -translate-y-1/2 w-8 h-8 rounded border flex items-center justify-center z-20 transform rotate-45 transition-colors duration-500 delay-100 bg-neutral-900 border-neutral-700">
<i className="w-4 h-4 text-neutral-500 transform -rotate-45" data-lucide="git-commit"></i>
</div>
<svg className="absolute left-[144px] top-1/2 -translate-y-1/2 w-16 h-24 z-10" fill="none">
<path className="group-hover:stroke-[#ff7a59]/40 transition-colors duration-500 delay-200" d="M 0 48 L 16 48 C 24 48 32 12 40 12 L 64 12" stroke="#262626" strokeWidth="1"></path>
<path className="transition-colors duration-500 delay-200" d="M 0 48 L 16 48 C 24 48 32 84 40 84 L 64 84" stroke="#262626" strokeWidth="1"></path>
</svg>
<div className="absolute left-[208px] top-[calc(50%-36px)] -translate-y-1/2 w-24 h-8 rounded border flex items-center px-2 gap-2 z-20 transition-all duration-500 delay-300 border-neutral-800 bg-neutral-950">
<div className="w-1.5 h-1.5 rounded-full group-hover:bg-[#ff7a59]/80 transition-colors duration-500 delay-300 bg-neutral-600"></div>
<div className="h-1.5 w-12 rounded transition-colors duration-500 delay-300 bg-neutral-700"></div>
</div>
<div className="absolute left-[208px] top-[calc(50%+36px)] -translate-y-1/2 w-24 h-8 rounded border flex items-center px-2 gap-2 z-20 transition-colors duration-500 delay-300 border-neutral-800 bg-neutral-950">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
<div className="h-1.5 w-8 rounded bg-neutral-700"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-neutral-800/50 relative z-10" id="philosophy">
<div className="mb-20 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-neutral-100">Our foundation.</h2>
<p className="text-lg max-w-xl mx-auto md:mx-0 text-neutral-400">The core principles that drive our engineering-grade approach to marketing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
<div className="flex flex-col">
<h3 className="text-sm font-normal text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="eye"></i>
                        Vision
                    </h3>
<h4 className="text-2xl font-normal tracking-tight mb-3 leading-snug text-neutral-100">Marketing is messy.<br/>We make it make sense.</h4>
<p className="text-base leading-relaxed text-neutral-400">We believe marketing should connect the dots — across channels, teams, and data sources. Not as a collection of siloed efforts, but as one unified, intelligent system.</p>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-normal text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="target"></i>
                        Mission
                    </h3>
<h4 className="text-2xl font-normal tracking-tight mb-3 leading-snug text-neutral-100">Precision over<br/>guesswork.</h4>
<p className="text-base leading-relaxed text-neutral-400">Every campaign, every pipeline, every touchpoint is engineered with the same rigor we'd apply to production software. We don't run experiments. We run systems.</p>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-normal text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users"></i>
                        Philosophy
                    </h3>
<h4 className="text-2xl font-normal tracking-tight mb-3 leading-snug text-neutral-100">The collective<br/>advantage.</h4>
<p className="text-base leading-relaxed text-neutral-400">We are not a generalist agency that does a bit of everything. We are five deep specialists that work as one. When you work with one agency, you get the intelligence of all five.</p>
</div>
</div>
</section>
</main>

<section className="relative overflow-hidden pt-32 pb-12 border-t bg-neutral-950 border-neutral-800/50" id="contact">

<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mask-waves opacity-60">
<canvas className="absolute inset-0 z-0" id="wavy-canvas"></canvas>
</div>
<div className="absolute inset-0 bg-gradient-to-b via-transparent z-0 pointer-events-none from-neutral-950 to-neutral-950 opacity-80"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-32">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1] text-neutral-50">Ready to upgrade your<br/>marketing engine?</h2>
<p className="text-xl mb-10 max-w-2xl mx-auto font-normal text-neutral-400">Join forward-thinking companies that rely on Always On Group to drive predictable, scalable growth across all channels.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-normal px-8 py-3.5 rounded-full transition-colors text-base shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-neutral-100 text-neutral-950 hover:bg-neutral-300" href="#contact">
                    Talk to our experts
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<footer className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<a className="text-base font-normal tracking-tighter flex items-center gap-2 mb-2 text-neutral-100" href="#">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-neutral-100">
<div className="w-2 h-2 rounded-full bg-neutral-950"></div>
</div>
                        alwaysongroup
                    </a>
<p className="text-sm text-neutral-500">Marketing engineered for scale.</p>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-base text-neutral-400">
<a className="transition-colors hover:text-neutral-100" href="#agencies">Agencies</a>
<a className="transition-colors hover:text-neutral-100" href="#philosophy">Philosophy</a>
<a className="transition-colors hover:text-neutral-100" href="#contact">Contact</a>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm border-neutral-800/50 text-neutral-600">
<p>© 2026 Always On Group Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors hover:text-neutral-300" href="#contact"><i className="w-5 h-5" data-lucide="map-pin"></i></a>
<a className="transition-colors hover:text-neutral-300" href="#contact"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>
</section>


    </>
  );
}
