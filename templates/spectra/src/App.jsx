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
forest: {
50: '#f2f8f6',
100: '#e1efe8',
200: '#c3ddcf',
300: '#96c3ad',
400: '#62a386',
500: '#3f8568',
600: '#2f6a52',
700: '#265543',
800: '#224437',
900: '#1d392f',
950: '#0a1814', // Deep Black Green
}
},
fontFamily: {
sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
serif: ['Times New Roman', 'serif'],
bricolage: ['Bricolage Grotesque', 'sans-serif'],
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        (function() {
            const headerElement = document.getElementById('main-header');
            const handleScroll = () => {
                if (window.scrollY > 20) {
                    headerElement.classList.add('bg-black/95', 'backdrop-blur-xl', 'border-b', 'border-white/10');
                    headerElement.classList.remove('mix-blend-difference');
                } else {
                    headerElement.classList.remove('bg-black/95', 'backdrop-blur-xl', 'border-b', 'border-white/10');
                    headerElement.classList.add('mix-blend-difference');
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            if (window.lucide) {
                window.lucide.createIcons();
            }
        })();
    


        (function() {
            // Check if D3 is already loaded
            if (typeof d3 === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://d3js.org/d3.v7.min.js';
                script.onload = initCharts;
                document.head.appendChild(script);
            } else {
                initCharts();
            }

            function initCharts() {
                const container = document.getElementById('d3-spatial-overlay');
                if (!container) return;
                
                // Clear previous if any
                container.innerHTML = '';

                // Set up dimensions
                const width = container.clientWidth || 800;
                const height = container.clientHeight || 600;

                const svg = d3.select(container)
                    .append('svg')
                    .attr('width', '100%')
                    .attr('height', '100%')
                    .attr('viewBox', `0 0 ${width} ${height}`)
                    .attr('preserveAspectRatio', 'xMidYMid slice')
                    .style('overflow', 'visible');

                // Define Gradients
                const defs = svg.append('defs');
                
                // Gradient for Area Chart
                const gradient = defs.append('linearGradient')
                    .attr('id', 'chart-gradient')
                    .attr('x1', '0%')
                    .attr('y1', '0%')
                    .attr('x2', '0%')
                    .attr('y2', '100%');
                
                gradient.append('stop')
                    .attr('offset', '0%')
                    .attr('stop-color', '#34d399') // emerald-400
                    .attr('stop-opacity', 0.2);
                
                gradient.append('stop')
                    .attr('offset', '100%')
                    .attr('stop-color', '#34d399')
                    .attr('stop-opacity', 0);

                // 1. Background Network Mesh (Simulated Spatial Mapping)
                const nodeCount = 30;
                const nodes = d3.range(nodeCount).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 1.5 + 1
                }));

                // Create links based on distance
                const links = [];
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 150) {
                            links.push({ source: nodes[i], target: nodes[j], dist });
                        }
                    }
                }

                // Draw Links
                svg.append('g')
                    .attr('class', 'network-links')
                    .selectAll('line')
                    .data(links)
                    .enter()
                    .append('line')
                    .attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y)
                    .attr('stroke', '#10b981') // emerald-500
                    .attr('stroke-width', 0.5)
                    .attr('stroke-opacity', d => 1 - d.dist / 150)
                    .attr('class', 'transition-opacity duration-1000');

                // Draw Nodes
                svg.append('g')
                    .attr('class', 'network-nodes')
                    .selectAll('circle')
                    .data(nodes)
                    .enter()
                    .append('circle')
                    .attr('cx', d => d.x)
                    .attr('cy', d => d.y)
                    .attr('r', d => d.r)
                    .attr('fill', '#34d399')
                    .attr('fill-opacity', 0.6);

                // 2. HUD Line Chart (Top Right)
                const chartWidth = 200;
                const chartHeight = 80;
                const margin = { top: 10, right: 10, bottom: 20, left: 10 };
                
                // Position HUD
                const hudGroup = svg.append('g')
                    .attr('transform', `translate(${width - chartWidth - 30}, 30)`);

                // HUD Background
                hudGroup.append('rect')
                    .attr('width', chartWidth)
                    .attr('height', chartHeight + 30)
                    .attr('rx', 12)
                    .attr('fill', 'rgba(6, 78, 59, 0.7)') // forest-900/70
                    .attr('stroke', 'rgba(52, 211, 153, 0.2)')
                    .attr('stroke-width', 1)
                    .attr('class', 'backdrop-blur-md');

                // Generate dummy signal data
                const points = 20;
                const data = Array.from({length: points}, (_, i) => ({
                    x: i,
                    y: 40 + Math.sin(i * 0.5) * 15 + Math.random() * 10
                }));

                const xScale = d3.scaleLinear().domain([0, points - 1]).range([margin.left, chartWidth - margin.right]);
                const yScale = d3.scaleLinear().domain([0, 80]).range([chartHeight, margin.top]);

                // Area generator
                const area = d3.area()
                    .curve(d3.curveCatmullRom)
                    .x(d => xScale(d.x))
                    .y0(chartHeight)
                    .y1(d => yScale(d.y));

                // Line generator
                const line = d3.line()
                    .curve(d3.curveCatmullRom)
                    .x(d => xScale(d.x))
                    .y(d => yScale(d.y));

                // Draw Area
                hudGroup.append('path')
                    .datum(data)
                    .attr('fill', 'url(#chart-gradient)')
                    .attr('d', area);

                // Draw Line
                hudGroup.append('path')
                    .datum(data)
                    .attr('fill', 'none')
                    .attr('stroke', '#34d399')
                    .attr('stroke-width', 2)
                    .attr('stroke-linecap', 'round')
                    .attr('filter', 'drop-shadow(0 0 2px rgba(52, 211, 153, 0.5))')
                    .attr('d', line);

                // HUD Labels
                hudGroup.append('text')
                    .attr('x', margin.left)
                    .attr('y', chartHeight + 20)
                    .text('NETWORK LATENCY')
                    .attr('fill', '#a7f3d0') // emerald-200
                    .attr('font-family', 'ui-sans-serif, system-ui')
                    .attr('font-size', '10px')
                    .attr('font-weight', '600')
                    .attr('letter-spacing', '0.05em');

                hudGroup.append('text')
                    .attr('x', chartWidth - margin.right)
                    .attr('y', chartHeight + 20)
                    .text('1.2ms')
                    .attr('text-anchor', 'end')
                    .attr('fill', '#fff')
                    .attr('font-family', 'ui-sans-serif, system-ui')
                    .attr('font-size', '10px')
                    .attr('font-weight', '700');
                    
                // Add animated ping dot
                hudGroup.append('circle')
                    .attr('cx', chartWidth - margin.right - 40)
                    .attr('cy', chartHeight + 17)
                    .attr('r', 3)
                    .attr('fill', '#34d399');
            }
        })();
    


        document.addEventListener('DOMContentLoaded', () => {
            const toggles = document.querySelectorAll('.faq-toggle');
            
            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const content = toggle.nextElementSibling;
                    const plusIcon = toggle.querySelector('.icon-plus');
                    const minusIcon = toggle.querySelector('.icon-minus');
                    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                    
                    // Close all others (Accordion behavior)
                    document.querySelectorAll('.faq-toggle').forEach(otherToggle => {
                        if (otherToggle !== toggle) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                            otherToggle.nextElementSibling.style.gridTemplateRows = '0fr';
                            otherToggle.querySelector('.icon-plus').style.opacity = '1';
                            otherToggle.querySelector('.icon-plus').style.transform = 'rotate(0deg)';
                            otherToggle.querySelector('.icon-minus').style.opacity = '0';
                            otherToggle.querySelector('.icon-minus').style.transform = 'rotate(90deg)';
                            otherToggle.classList.remove('text-emerald-700');
                        }
                    });

                    // Toggle current
                    toggle.setAttribute('aria-expanded', !isExpanded);
                    content.style.gridTemplateRows = isExpanded ? '0fr' : '1fr';
                    
                    // Icon Animation
                    if (!isExpanded) {
                        plusIcon.style.opacity = '0';
                        plusIcon.style.transform = 'rotate(90deg)';
                        minusIcon.style.opacity = '1';
                        minusIcon.style.transform = 'rotate(0deg)';
                        toggle.classList.add('text-emerald-700');
                    } else {
                        plusIcon.style.opacity = '1';
                        plusIcon.style.transform = 'rotate(0deg)';
                        minusIcon.style.opacity = '0';
                        minusIcon.style.transform = 'rotate(90deg)';
                        toggle.classList.remove('text-emerald-700');
                    }
                });
            });
        });
    


        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<div className="aura-background-component top-0 w-full h-screen absolute mix-blend-screen" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="n869sLSzeDV4vFdUlTwJ"></div>

</div></div>

<div className="fixed top-0 right-0 bottom-0 left-0 z-[-1]">
<img alt="Background Network" className="object-bottom brightness-[0.6] saturate-[0.8] opacity-100 w-full h-full object-cover blur-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dd9b13b-ea30-4e17-8a26-53d1f9d1c6d3_3840w.webp"/>
<div className="bg-gradient-to-t from-forest-100/90 via-forest-50/50 to-forest-50/70 absolute inset-0 mix-blend-overlay"></div>
<div className="bg-gradient-to-b from-forest-50/90 via-transparent to-forest-950/40 absolute inset-0"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none grid grid-cols-12 gap-4 px-6 md:px-12 w-full max-w-[1600px] mx-auto opacity-[0.08]">
<div className="border-l border-forest-950 h-full col-start-1"></div>
<div className="border-l border-forest-950 h-full col-start-3 hidden md:block"></div>
<div className="border-l border-forest-950 h-full col-start-5 hidden md:block"></div>
<div className="border-l border-forest-950 h-full col-start-7 hidden md:block"></div>
<div className="border-l border-forest-950 h-full col-start-9 hidden md:block"></div>
<div className="border-l border-forest-950 h-full col-start-11 hidden md:block"></div>
<div className="border-r border-forest-950 h-full col-end-13"></div>
</div>

<header className="fixed flex md:px-12 transition-all duration-300 group z-50 text-white w-full pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between" id="main-header">

<div className="flex cursor-pointer text-current gap-x-2 gap-y-x-2 items-center" onclick="window.location.href='/home'" role="button">
<svg className="text-current w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="solar" data-solar="glasses-outline" height="28" strokeWidth="1" style={{color: 'rgb(255, 255, 255)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M6.237 4.712a.75.75 0 0 0-.474-1.423l-.555.185c-.57.19-1.055.351-1.439.527c-.409.187-.767.416-1.051.776c-.285.36-.426.76-.515 1.2c-.083.415-.129.923-.183 1.522l-.698 7.67a5 5 0 0 0-.072.823C1.255 18.611 3.38 20.75 6 20.75a4.75 4.75 0 0 0 4.689-3.986l.219-.078a3.25 3.25 0 0 1 2.184 0l.22.078A4.75 4.75 0 0 0 18 20.75c2.62 0 4.744-2.14 4.75-4.758q0-.421-.073-.823L21.98 7.5c-.054-.6-.1-1.107-.183-1.521c-.089-.441-.23-.842-.515-1.201s-.642-.59-1.051-.776c-.384-.176-.868-.337-1.439-.527l-.555-.185a.75.75 0 0 0-.474 1.423l.518.172c.617.206 1.024.343 1.326.481c.286.13.414.235.5.343c.085.107.157.256.219.564c.065.326.105.753.164 1.401l.415 4.569a4.75 4.75 0 0 0-7.585 2.942a4.75 4.75 0 0 0-2.64 0a4.75 4.75 0 0 0-7.585-2.942l.048-.532l.367-4.037c.059-.648.099-1.075.164-1.4c.062-.309.134-.458.22-.565c.085-.108.213-.212.499-.343c.302-.138.709-.275 1.326-.48zM21.19 15.376l.06.656a3.25 3.25 0 1 1-.06-.656m-18.38 0l-.06.656a3.25 3.25 0 1 0 .06-.656" fill="#ffffff" fill-rule="evenodd"></path></svg>
<span className="uppercase text-xl font-normal tracking-tight">Spectra</span>
</div>
<nav className="hidden lg:flex text-white/80 uppercase text-sm font-medium gap-x-10 items-center">
<a className="hover:text-white transition-colors duration-200" href="/features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="/about">About</a>
<a className="hover:text-white transition-colors duration-200" href="/docs">Docs</a>
<a className="hover:text-white transition-colors duration-200" href="/pricing">Pricing</a>
</nav>
<div className="flex items-center gap-8 text-xs font-medium tracking-wide text-white">
<a className="uppercase hover:text-white transition-colors text-white/70 font-sans" href="/login">Account</a>
<a className="hover:bg-neutral-900 transition-all uppercase text-[11px] font-semibold text-white tracking-wider font-sans bg-black border-white/10 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="/order">Pre-order</a>
</div>
</header>

<div className="relative z-10 w-full flex flex-col">

<section className="min-h-screen flex flex-col md:pl-12 md:pr-12 md:pt-24 md:pb-24 w-full max-w-[1600px] mx-auto pt-12 pr-12 pb-12 pl-12 justify-between">

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:py-0 pt-12 pb-12 gap-x-8 gap-y-8 items-center">

<div className="col-span-1 lg:col-span-6 flex flex-col space-y-8 reveal-on-scroll delay-100 is-visible z-10">
<div className="">
<div className="flex items-center gap-3 mb-6 opacity-80">
<span className="text-xs font-mono font-bold tracking-widest text-emerald-700 bg-emerald-100/50 px-2 py-0.5 rounded font-sans">01</span>
<div className="h-px w-8 bg-forest-900/30"></div>
<span className="text-xs font-medium uppercase tracking-widest text-forest-900 font-sans">Hardware</span>
</div>
<h1 className="leading-[0.9] text-forest-950 md:text-7xl xl:text-8xl text-5xl tracking-tighter mix-blend-darken">
<span className="block tracking-tighter font-dm-sans font-light">VISION</span>
<span className="block md:ml-4 tracking-tighter ml-2 text-forest-800 font-dm-sans font-light">BEYOND</span>
<span className="block tracking-tighter font-dm-sans font-light">REALITY</span>
</h1>
</div>
<div className="space-y-8 max-w-lg">
<p className="text-base md:text-lg font-normal text-forest-800/80 tracking-wide font-sans">
                            Seamlessly blending digital information with your physical world. Lightweight, powerful, and designed for all-day immersion.
                        </p>

<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4">
<button className="group shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden font-medium text-emerald-950 bg-gradient-to-r from-[#d1fae5] to-[#34d399] rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: '0 15px 33px -12px rgba(16, 185, 129, 0.9), inset 0 4px 6.3px rgba(209, 250, 229, 1), inset 0 -5px 6.3px rgba(5, 150, 105, 1)', borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center gap-2 font-sans">
                            Start Free Pilot
                            <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path className="" d="m21.854 2.147-10.94 10.939"></path></svg>
</span>
</button>
<button className="hover:bg-emerald-50 hover:text-emerald-700 transition-all flex text-sm font-medium text-emerald-700 bg-slate-50/50 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-2 gap-y-2 items-center" style={{boxShadow: '0 18px 35px rgba(6, 78, 59, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.2)', color: '#065f46', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(16, 185, 129, 0.2), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<span className="text-sm font-medium text-emerald-900/70 tracking-tight font-sans">
    Demo Lesson
  </span><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<style id="border-gradient-shared-style">
  [style*="--border-gradient"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius-before, inherit);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: var(--border-gradient);
    pointer-events: none;
  }</style>
</button>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-6 h-full flex items-center justify-end relative mt-10 lg:mt-0 reveal-on-scroll delay-200 is-visible">
<div className="relative w-full max-w-2xl bg-white/60 backdrop-blur-md rounded-[2rem] shadow-2xl shadow-forest-900/5 p-4 md:p-6 overflow-hidden transform transition-transform hover:scale-[1.01] duration-700 border border-white/40">
<div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-2">
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600">
<iconify-icon icon="lucide:wifi" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600">
<iconify-icon icon="lucide:battery-medium" width="16"></iconify-icon>
</div>
</div>
<span className="text-xs font-mono font-bold text-forest-400 bg-forest-50 px-2 py-1 rounded font-sans">02 // SYSTEM ACTIVE</span>
</div>
<div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden group">

<img alt="AR Glasses" className="transform group-hover:scale-105 transition-transform duration-700 contrast-[1.1] brightness-[0.9] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/936684c5-c133-46f6-b75b-466ea6d602bd_1600w.webp"/>

<div className="absolute top-1/3 right-1/4 w-8 h-8 flex items-center justify-center cursor-pointer group/dot">
<div className="w-2.5 h-2.5 bg-white rounded-full shadow-lg z-10"></div>
<div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
<div className="absolute right-4 top-4 bg-white/95 backdrop-blur px-3 py-2 rounded-lg text-[10px] text-forest-900 font-medium opacity-0 group-hover/dot:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-forest-100">
<div className="flex items-center gap-2 font-sans">
<iconify-icon icon="lucide:cpu" width="12"></iconify-icon>
                                        Micro-OLED Array
                                    </div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-[10px] font-medium text-white uppercase tracking-wider font-sans">Connected</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 reveal-on-scroll delay-300 is-visible lg:grid-cols-12 lg:pt-8 pt-8 gap-x-6 gap-y-6 items-end">

<div className="col-span-1 lg:col-span-4">
<div className="bg-forest-950/80 backdrop-blur-2xl text-white rounded-[2rem] p-6 md:p-8 flex items-center justify-between shadow-2xl shadow-forest-950/20 border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="relative z-10 max-w-[60%]">
<div className="flex items-center gap-2 mb-3 opacity-60">
<span className="text-[10px] font-mono font-sans">03</span>
<div className="h-px w-4 bg-white/30"></div>
</div>
<h3 className="text-xl md:text-2xl leading-snug mb-2 tracking-tight font-dm-sans font-light">Infinite Spatial Workspace.</h3>
<p className="text-xs text-forest-300 mb-6 font-light font-sans">Multiple screens, zero clutter.</p>
<div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="absolute right-[-20px] bottom-[-20px] w-40 h-40">
<img alt="Interface" className="grayscale-[0.2] contrast-150 opacity-60 w-full h-full object-cover border-white/5 border-4 rounded-tl-[2rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c8f3560-bcc7-441d-9d12-6eb2fbb9aeea_320w.webp"/>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-2"></div>

<div className="col-span-1 lg:col-span-6">
<div className="bg-forest-950/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl shadow-forest-950/20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 h-full group hover:border-emerald-500/20 transition-colors duration-300">
<div className="flex flex-col gap-3">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-forest-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b361f672-271a-4e77-9412-6a1094c00dd7_320w.webp"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-forest-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73497bc9-224a-4cab-a551-92adf0b5a098_320w.webp"/>
<div className="w-10 h-10 rounded-full border-2 border-forest-950 bg-forest-800 flex items-center justify-center text-[10px] font-bold text-white font-sans">4K</div>
</div>
<div className="">
<span className="block text-4xl text-white drop-shadow-sm tracking-tight font-dm-sans font-light">120<span className="not-italic text-2xl text-forest-400 font-dm-sans font-light">Hz</span></span>
<span className="text-xs text-forest-400 font-medium tracking-wide uppercase font-sans">Refresh Rate</span>
</div>
</div>
<div className="max-w-xs md:text-right">
<p className="text-lg md:text-xl font-medium text-white leading-snug tracking-tight font-sans">
                                COMPUTING FOR <span className="text-forest-400 font-sans"> THE NEXT ERA</span>
</p>
<a className="inline-block mt-4 text-xs font-bold text-forest-200 border-b border-white/20 pb-0.5 hover:border-emerald-400 hover:text-emerald-400 transition-colors uppercase tracking-widest font-sans" href="#">
                                View Specs
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-forest-950 py-24 md:py-32 relative overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-12 gap-4 px-6 md:px-12 w-full max-w-[1600px] mx-auto opacity-[0.05]">
<div className="border-l border-white h-full col-start-1"></div>
<div className="border-l border-white h-full col-start-3 hidden md:block"></div>
<div className="border-l border-white h-full col-start-5 hidden md:block"></div>
<div className="border-l border-white h-full col-start-7 hidden md:block"></div>
<div className="border-l border-white h-full col-start-9 hidden md:block"></div>
<div className="border-l border-white h-full col-start-11 hidden md:block"></div>
<div className="border-r border-white h-full col-end-13"></div>
</div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll is-visible">
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono font-bold tracking-widest text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded font-sans">02</span>
<div className="h-px w-8 bg-forest-600"></div>
<span className="text-xs font-medium uppercase tracking-widest text-forest-400 font-sans">Technology</span>
</div>
<h2 className="text-4xl md:text-5xl text-forest-50 leading-tight tracking-tighter font-dm-sans font-light">
                            Optical <span className="text-emerald-500 font-dm-sans font-light">Precision</span>
</h2>
</div>
<p className="max-w-md text-forest-300 text-sm md:text-base leading-relaxed font-sans">
                        We've shrunk the supercomputer. Spectra integrates advanced LiDAR, eye-tracking, and holographic projection into a frame that weighs less than 60g.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-forest-900/20 rounded-3xl border border-white/5 hover:border-emerald-500/30 hover:bg-forest-900/40 transition-all duration-500 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors duration-300 text-forest-200">
<iconify-icon icon="lucide:scan" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-forest-100 mb-3 font-semibold tracking-tight font-sans">Spatial Mapping</h3>
<p className="text-sm text-forest-400 leading-relaxed mb-6 font-sans">
                            Real-time LiDAR sensors map your physical environment instantly, allowing digital objects to anchor perfectly to surfaces.
                        </p>
<div className="w-full h-px bg-white/5 mt-auto"></div>
<div className="mt-4 flex justify-between items-center">
<span className="text-xs font-bold uppercase tracking-widest text-forest-500 group-hover:text-emerald-400 transition-colors font-sans">Phase 01</span>
<iconify-icon className="text-forest-700 group-hover:text-emerald-500 transition-colors opacity-0 group-hover:opacity-100" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="group p-8 bg-forest-900/20 rounded-3xl border border-white/5 hover:border-emerald-500/30 hover:bg-forest-900/40 transition-all duration-500 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors duration-300 text-forest-200">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-forest-100 mb-3 font-semibold tracking-tight font-sans">Dual Processing</h3>
<p className="text-sm text-forest-400 leading-relaxed mb-6 font-sans">
                            The S1 Neural Engine handles gesture recognition and spatial audio, while the R2 chip powers high-fidelity graphics.
                        </p>
<div className="w-full h-px bg-white/5 mt-auto"></div>
<div className="mt-4 flex justify-between items-center">
<span className="text-xs font-bold uppercase tracking-widest text-forest-500 group-hover:text-emerald-400 transition-colors font-sans">Phase 02</span>
<iconify-icon className="text-forest-700 group-hover:text-emerald-500 transition-colors opacity-0 group-hover:opacity-100" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="group p-8 bg-forest-900/20 rounded-3xl border border-white/5 hover:border-emerald-500/30 hover:bg-forest-900/40 transition-all duration-500 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors duration-300 text-forest-200">
<iconify-icon className="" icon="lucide:eye" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-forest-100 mb-3 font-semibold tracking-tight font-sans">Retinal Projection</h3>
<p className="text-sm text-forest-400 leading-relaxed mb-6 font-sans">
                            Images are beamed directly onto the retina using photon-splicing technology, creating indistinguishable clarity.
                        </p>
<div className="w-full h-px bg-white/5 mt-auto"></div>
<div className="mt-4 flex justify-between items-center">
<span className="text-xs font-bold uppercase tracking-widest text-forest-500 group-hover:text-emerald-400 transition-colors font-sans">Phase 03</span>
<iconify-icon className="text-forest-700 group-hover:text-emerald-500 transition-colors opacity-0 group-hover:opacity-100" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-forest-50 py-24 md:py-32 relative">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="flex flex-wrap items-center justify-between gap-6 mb-12 reveal-on-scroll">
<div className="flex items-center gap-3 mb-4 absolute -top-12 left-6 md:static md:mb-0">
<span className="text-xs font-mono font-bold tracking-widest text-emerald-700 bg-emerald-100/50 px-2 py-0.5 rounded font-sans">03</span>
<div className="h-px w-8 bg-forest-900/30"></div>
<span className="text-xs font-medium uppercase tracking-widest text-forest-900 font-sans">Experience</span>
</div>
<h2 className="text-4xl md:text-5xl text-forest-950 tracking-tighter font-dm-sans font-light">
                        Limitless <span className="text-forest-500 font-dm-sans font-light">Applications</span>
</h2>
<a className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest-950 hover:text-emerald-600 transition-colors font-sans" href="#">
                        View Ecosystem
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 h-auto gap-x-6 gap-y-6">

<div className="lg:col-span-8 lg:h-full group overflow-hidden cursor-pointer reveal-on-scroll delay-100 border-forest-900/5 h-[400px] border rounded-3xl relative">
<img alt="Work Context" className="transition-transform duration-700 group-hover:scale-105 group-hover:saturate-100 w-full h-full object-cover saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a5db304-521a-4815-86d8-0c7198201df9_1600w.webp"/>
<div className="bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-medium text-emerald-200 uppercase tracking-widest mb-2 block font-sans">Productivity</span>
<h3 className="text-3xl text-white tracking-tighter font-dm-sans font-light">Spatial Workspace</h3>
</div>
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all text-white">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 h-full">

<div className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer h-[300px] lg:h-auto reveal-on-scroll delay-200 border border-forest-900/5">
<img alt="Navigation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b361f672-271a-4e77-9412-6a1094c00dd7_1600w.webp"/>
<div className="group-hover:bg-forest-950/10 transition-colors bg-forest-950/30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[10px] font-medium text-white/90 uppercase tracking-widest block mb-1 font-sans">Wayfinding</span>
<h3 className="text-xl font-medium text-white tracking-tight font-sans">Active Navigation</h3>
</div>
</div>

<div className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer h-[300px] lg:h-auto reveal-on-scroll delay-300 border border-forest-900/5">
<img alt="Gaming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a59dfabf-000e-46ac-991c-caf36fcef378_800w.webp"/>
<div className="absolute inset-0 bg-forest-950/30 group-hover:bg-forest-950/10 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<span className="text-[10px] font-medium text-white/90 uppercase tracking-widest block mb-1 font-sans">Immersive</span>
<h3 className="text-xl font-medium text-white tracking-tight font-sans">Augmented Gaming</h3>
</div>
</div>
</div>
</div>
</div>
</section><section className="w-full bg-forest-950 py-24 md:py-32 relative overflow-hidden border-t border-white/5">

<style>
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }
        .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
        }
        .mask-gradient-x {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .pause-on-hover:hover {
            animation-play-state: paused;
        }
    </style>

<div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-12 gap-4 px-6 md:px-12 w-full max-w-[1600px] mx-auto opacity-[0.05]">
<div className="border-l border-white h-full col-start-1"></div>
<div className="border-l border-white h-full col-start-3 hidden md:block"></div>
<div className="border-l border-white h-full col-start-5 hidden md:block"></div>
<div className="border-l border-white h-full col-start-7 hidden md:block"></div>
<div className="border-l border-white h-full col-start-9 hidden md:block"></div>
<div className="border-l border-white h-full col-start-11 hidden md:block"></div>
<div className="border-r border-white h-full col-end-13"></div>
</div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 mb-20 text-center reveal-on-scroll">
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-200 uppercase tracking-widest font-sans">Global Partners</span>
</div>
<h2 className="text-4xl md:text-6xl text-white tracking-tighter font-dm-sans font-light mb-6">
            Trusted by <span className="text-forest-400 font-dm-sans font-light">Visionaries</span>
</h2>
<p className="text-forest-300 max-w-lg mx-auto text-sm md:text-base font-sans leading-relaxed">
            Leading developers and designers are building the future of spatial computing on the Spectra platform.
        </p>
</div>

<div className="flex flex-col gap-8 w-full mask-gradient-x relative z-10">

<div className="flex gap-6 w-max animate-scroll-left pause-on-hover">

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=1"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Elena Miles</h4>
<span className="text-xs text-forest-400 font-mono">Lead XR Engineer, NVIDIA</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:chip-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "The latency on Spectra is effectively zero. We are finally able to render complex ray-traced environments in real-time without motion sickness."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=2"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Marcus Chen</h4>
<span className="text-xs text-forest-400 font-mono">Product Design, ADOBE</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Spectra's hand-tracking API is indistinguishable from magic. It has completely redefined how our users manipulate 3D assets in space."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=3"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Sarah Thorne</h4>
<span className="text-xs text-forest-400 font-mono">Director, NASA JPL</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:planet-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Training astronauts for EVA missions requires absolute precision. Spectra delivers the fidelity we need for mission-critical simulations."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=4"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">David Ross</h4>
<span className="text-xs text-forest-400 font-mono">Architect, FOSTER + PARTNERS</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:buildings-2-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "We can now walk clients through full-scale buildings before breaking ground. The occlusion technology is simply breathtaking."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=1"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Elena Miles</h4>
<span className="text-xs text-forest-400 font-mono">Lead XR Engineer, NVIDIA</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:chip-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "The latency on Spectra is effectively zero. We are finally able to render complex ray-traced environments in real-time without motion sickness."
                </p>
</div>
<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=2"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Marcus Chen</h4>
<span className="text-xs text-forest-400 font-mono">Product Design, ADOBE</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Spectra's hand-tracking API is indistinguishable from magic. It has completely redefined how our users manipulate 3D assets in space."
                </p>
</div>
<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=3"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Sarah Thorne</h4>
<span className="text-xs text-forest-400 font-mono">Director, NASA JPL</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:planet-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Training astronauts for EVA missions requires absolute precision. Spectra delivers the fidelity we need for mission-critical simulations."
                </p>
</div>
<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=4"/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">David Ross</h4>
<span className="text-xs text-forest-400 font-mono">Architect, FOSTER + PARTNERS</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:buildings-2-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "We can now walk clients through full-scale buildings before breaking ground. The occlusion technology is simply breathtaking."
                </p>
</div>
</div>

<div className="flex gap-6 w-max animate-scroll-right pause-on-hover">

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=5" style={{}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">James Wu</h4>
<span className="text-xs text-forest-400 font-mono">Surgeon, MAYO CLINIC</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "The ability to overlay patient MRI data directly onto the surgical field is revolutionary. Spectra is saving lives in the OR."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=6" style={{}}/>
<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Anna K.</h4>
<span className="text-xs text-forest-400 font-mono">Dev Ops, UNITY</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:gamepad-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Porting existing assets to the Spectra OS took less than a week. The developer ecosystem is incredibly robust and well-documented."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=7" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Tom Hardy</h4>
<span className="text-xs text-forest-400 font-mono">Chief Engineer, TESLA</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:wheel-angle-linear" width="32"></iconify-icon>
</div>
<p className="md:text-xl uppercase leading-snug text-lg font-light text-forest-100 tracking-tight">
                    "We use Spectra for assembly line visualization. It has increased our production efficiency by 30% in just two quarters."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=8" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Lisa Ray</h4>
<span className="text-xs text-forest-400 font-mono">Tech Lead, SPOTIFY</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:music-note-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Spatial audio is the next frontier of music consumption. Spectra provides the hardware capability to make that a reality today."
                </p>
</div>

<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=5" style={{}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">James Wu</h4>
<span className="text-xs text-forest-400 font-mono">Surgeon, MAYO CLINIC</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "The ability to overlay patient MRI data directly onto the surgical field is revolutionary. Spectra is saving lives in the OR."
                </p>
</div>
<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=6" style={{}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Anna K.</h4>
<span className="text-xs text-forest-400 font-mono">Dev Ops, UNITY</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:gamepad-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Porting existing assets to the Spectra OS took less than a week. The developer ecosystem is incredibly robust and well-documented."
                </p>
</div>
<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=7" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Tom Hardy</h4>
<span className="text-xs text-forest-400 font-mono">Chief Engineer, TESLA</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:wheel-angle-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "We use Spectra for assembly line visualization. It has increased our production efficiency by 30% in just two quarters."
                </p>
</div>
<div className="w-[400px] md:w-[500px] bg-forest-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-forest-900/20 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=8" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Lisa Ray</h4>
<span className="text-xs text-forest-400 font-mono">Tech Lead, SPOTIFY</span>
</div>
</div>
<iconify-icon className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" icon="solar:music-note-linear" width="32"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-forest-100 font-light uppercase leading-snug tracking-tight font-sans">
                    "Spatial audio is the next frontier of music consumption. Spectra provides the hardware capability to make that a reality today."
                </p>
</div>
</div>
</div>
</section><section className="md:py-32 bg-forest-50 w-full pt-24 pb-24 relative">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-forest-900/5 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden border border-forest-900/5 reveal-on-scroll">

<div className="flex flex-col">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-forest-950 tracking-tighter font-dm-sans font-normal mb-6 leading-[0.95]">
                    Transform Reality Into <span className="text-emerald-600 font-dm-sans font-normal">High-Impact</span> Spatial Experiences
                </h2>
<p className="text-forest-600 text-lg md:text-xl mb-12 leading-relaxed font-sans max-w-xl">
                    Our spatial computing platform empowers you to design, deploy, and analyze every interaction so your immersive content performs seamlessly in any environment.
                </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-emerald-600" icon="solar:map-point-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-forest-950 tracking-tight font-dm-sans">Spatial Anchor</h3>
</div>
<p className="text-base text-forest-500 font-sans leading-relaxed">
                            Lock digital assets to physical coordinates with sub-millimeter precision automatically.
                        </p>
</div>

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-emerald-600" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-forest-950 tracking-tight font-dm-sans">Neural Render</h3>
</div>
<p className="text-base text-forest-500 font-sans leading-relaxed">
                            Generate photorealistic textures and dynamic lighting instantly tailored to the scene.
                        </p>
</div>

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-emerald-600" icon="solar:graph-new-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-forest-950 tracking-tight font-dm-sans">Gaze Metrics</h3>
</div>
<p className="text-base text-forest-500 font-sans leading-relaxed">
                            Track user attention heatmaps and engagement durations within the 3D space.
                        </p>
</div>

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-emerald-600" icon="solar:layers-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-forest-950 tracking-tight font-dm-sans">Unified Grid</h3>
</div>
<p className="text-base text-forest-500 font-sans leading-relaxed">
                            Manage all your AR deployments from a single, intuitive spatial interface.
                        </p>
</div>
</div>

<div className="">
<button className="inline-flex items-center gap-3 bg-forest-950 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 font-sans group">
                        Explore the Platform
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden group shadow-2xl shadow-forest-900/10">
<img alt="Spatial Designer" className="transition-transform duration-1000 group-hover:scale-105 saturate-[0.8] group-hover:saturate-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec163a08-5822-4721-9052-374f7d0e2a91_1600w.webp"/>

<div className="transition-opacity duration-500 overflow-hidden absolute top-0 right-0 bottom-0 left-0">

<div className="absolute inset-0 bg-forest-950/20 mix-blend-multiply pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none opacity-90" id="d3-spatial-overlay"><svg height="100%" preserveaspectratio="xMidYMid slice" style={{overflow: 'visible'}} viewbox="0 0 577 600" width="100%"><defs><lineargradient id="chart-gradient" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#34d399" stop-opacity="0.2"></stop><stop offset="100%" stop-color="#34d399" stop-opacity="0"></stop></lineargradient></defs><g className="network-links"><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.41750355268985795" strokeWidth="0.5" x1="137.5005790069269" x2="205.6313872938673" y1="247.4632506477866" y2="192.7595902348923"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.5255544920443981" strokeWidth="0.5" x1="137.5005790069269" x2="188.43847489520763" y1="247.4632506477866" y2="197.76367406098078"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.1459516829309122" strokeWidth="0.5" x1="137.5005790069269" x2="36.52453036242792" y1="247.4632506477866" y2="326.3004530184691"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.4819986618475943" strokeWidth="0.5" x1="137.5005790069269" x2="78.9456119323072" y1="247.4632506477866" y2="196.3884327502838"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.2622225886141214" strokeWidth="0.5" x1="137.5005790069269" x2="241.54714399905262" y1="247.4632506477866" y2="285.1648588395128"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3488972496825171" strokeWidth="0.5" x1="489.1895614242474" x2="425.8804388706542" y1="236.07917958799126" y2="310.446429164612"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.0921646426822601" strokeWidth="0.5" x1="489.1895614242474" x2="404.44521149724153" y1="236.07917958799126" y2="342.67237104675337"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.21429827290794223" strokeWidth="0.5" x1="489.1895614242474" x2="516.1627912130406" y1="236.07917958799126" y2="350.80627736248573"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.7347013563349867" strokeWidth="0.5" x1="489.1895614242474" x2="519.977803577043" y1="236.07917958799126" y2="210.86588988638798"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.7539588444494494" strokeWidth="0.5" x1="565.2944749382365" x2="572.6077322973637" y1="72.13640886137878" y2="108.31073534928733"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.02704414605739125" strokeWidth="0.5" x1="565.2944749382365" x2="519.977803577043" y1="72.13640886137878" y2="210.86588988638798"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3403854856968128" strokeWidth="0.5" x1="257.46897398041847" x2="356.34174885268925" y1="385.5245314606491" y2="381.8192909361458"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.33188801661638057" strokeWidth="0.5" x1="257.46897398041847" x2="223.4968990362756" y1="385.5245314606491" y2="479.80764037554115"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.2367300453706973" strokeWidth="0.5" x1="257.46897398041847" x2="307.25320365393196" y1="385.5245314606491" y2="488.62449997524544"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3856720921699125" strokeWidth="0.5" x1="257.46897398041847" x2="336.753796598442" y1="385.5245314606491" y2="432.4861052742855"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3225679678676352" strokeWidth="0.5" x1="257.46897398041847" x2="241.54714399905262" y1="385.5245314606491" y2="285.1648588395128"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.22282038545637894" strokeWidth="0.5" x1="257.46897398041847" x2="373.7476144597596" y1="385.5245314606491" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3222110131335225" strokeWidth="0.5" x1="257.46897398041847" x2="161.1991308036575" y1="385.5245314606491" y2="418.21352480497353"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.7172231474777357" strokeWidth="0.5" x1="0.8003612560954858" x2="20.707500390783736" y1="94.5159259224502" y2="131.97080075505545"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.14404860338827974" strokeWidth="0.5" x1="0.8003612560954858" x2="78.9456119323072" y1="94.5159259224502" y2="196.3884327502838"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.23152476742767136" strokeWidth="0.5" x1="572.6077322973637" x2="519.977803577043" y1="108.31073534928733" y2="210.86588988638798"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.27309510198203035" strokeWidth="0.5" x1="335.6661040013064" x2="405.57208777405276" y1="22.021693126010433" y2="105.69931782294543"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.8928523888239528" strokeWidth="0.5" x1="335.6661040013064" x2="350.1477203538468" y1="22.021693126010433" y2="28.992813974506415"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.33568030430880025" strokeWidth="0.5" x1="425.8804388706542" x2="356.34174885268925" y1="310.446429164612" y2="381.8192909361458"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.7419749966688369" strokeWidth="0.5" x1="425.8804388706542" x2="404.44521149724153" y1="310.446429164612" y2="342.67237104675337"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3407135004489842" strokeWidth="0.5" x1="425.8804388706542" x2="516.1627912130406" y1="310.446429164612" y2="350.80627736248573"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.0866277904227879" strokeWidth="0.5" x1="425.8804388706542" x2="519.977803577043" y1="310.446429164612" y2="210.86588988638798"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.43539350029221335" strokeWidth="0.5" x1="425.8804388706542" x2="373.7476144597596" y1="310.446429164612" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.5865363401580713" strokeWidth="0.5" x1="356.34174885268925" x2="404.44521149724153" y1="381.8192909361458" y2="342.67237104675337"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.21636068535989783" strokeWidth="0.5" x1="356.34174885268925" x2="307.25320365393196" y1="381.8192909361458" y2="488.62449997524544"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.6378573670382723" strokeWidth="0.5" x1="356.34174885268925" x2="336.753796598442" y1="381.8192909361458" y2="432.4861052742855"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.8799272968681032" strokeWidth="0.5" x1="356.34174885268925" x2="373.7476144597596" y1="381.8192909361458" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.43853938195268904" strokeWidth="0.5" x1="223.4968990362756" x2="307.25320365393196" y1="479.80764037554115" y2="488.62449997524544"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.18169680898020768" strokeWidth="0.5" x1="223.4968990362756" x2="336.753796598442" y1="479.80764037554115" y2="432.4861052742855"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.41595863922395804" strokeWidth="0.5" x1="223.4968990362756" x2="161.1991308036575" y1="479.80764037554115" y2="418.21352480497353"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.27075102332480827" strokeWidth="0.5" x1="205.6313872938673" x2="197.13239860273444" y1="192.7595902348923" y2="83.7029133837301"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.8806243852024663" strokeWidth="0.5" x1="205.6313872938673" x2="188.43847489520763" y1="192.7595902348923" y2="197.76367406098078"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.4073053132051676" strokeWidth="0.5" x1="205.6313872938673" x2="294.37616224197996" y1="192.7595902348923" y2="187.4377264737285"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.15508174814992548" strokeWidth="0.5" x1="205.6313872938673" x2="78.9456119323072" y1="192.7595902348923" y2="196.3884327502838"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3390688304252307" strokeWidth="0.5" x1="205.6313872938673" x2="241.54714399905262" y1="192.7595902348923" y2="285.1648588395128"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.23738923760529196" strokeWidth="0.5" x1="197.13239860273444" x2="188.43847489520763" y1="83.7029133837301" y2="197.76367406098078"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.052083899316392235" strokeWidth="0.5" x1="197.13239860273444" x2="294.37616224197996" y1="83.7029133837301" y2="187.4377264737285"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.25324470616736316" strokeWidth="0.5" x1="404.44521149724153" x2="516.1627912130406" y1="342.67237104675337" y2="350.80627736248573"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.2502256781939074" strokeWidth="0.5" x1="404.44521149724153" x2="336.753796598442" y1="342.67237104675337" y2="432.4861052742855"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.6920445618691462" strokeWidth="0.5" x1="404.44521149724153" x2="373.7476144597596" y1="342.67237104675337" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.421061932009396" strokeWidth="0.5" x1="20.707500390783736" x2="78.9456119323072" y1="131.97080075505545" y2="196.3884327502838"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.2904017163381284" strokeWidth="0.5" x1="188.43847489520763" x2="294.37616224197996" y1="197.76367406098078" y2="187.4377264737285"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.2699900052898776" strokeWidth="0.5" x1="188.43847489520763" x2="78.9456119323072" y1="197.76367406098078" y2="196.3884327502838"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.31818875747762687" strokeWidth="0.5" x1="188.43847489520763" x2="241.54714399905262" y1="197.76367406098078" y2="285.1648588395128"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.0889156357707045" strokeWidth="0.5" x1="36.52453036242792" x2="78.9456119323072" y1="326.3004530184691" y2="196.3884327502838"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.6338751323735183" strokeWidth="0.5" x1="36.52453036242792" x2="7.557292600933087" y1="326.3004530184691" y2="372.9584218672679"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.5772153506582316" strokeWidth="0.5" x1="307.25320365393196" x2="336.753796598442" y1="488.62449997524544" y2="432.4861052742855"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.1348959806969443" strokeWidth="0.5" x1="307.25320365393196" x2="373.7476144597596" y1="488.62449997524544" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.06671746885170304" strokeWidth="0.5" x1="516.1627912130406" x2="519.977803577043" y1="350.80627736248573" y2="210.86588988638798"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.03440994404511932" strokeWidth="0.5" x1="516.1627912130406" x2="373.7476144597596" y1="350.80627736248573" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.07995890662556238" strokeWidth="0.5" x1="294.37616224197996" x2="405.57208777405276" y1="187.4377264737285" y2="105.69931782294543"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.25938471318471135" strokeWidth="0.5" x1="294.37616224197996" x2="241.54714399905262" y1="187.4377264737285" y2="285.1648588395128"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.3691012324000492" strokeWidth="0.5" x1="405.57208777405276" x2="350.1477203538468" y1="105.69931782294543" y2="28.992813974506415"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.5564696878246225" strokeWidth="0.5" x1="336.753796598442" x2="373.7476144597596" y1="432.4861052742855" y2="377.190191854238"></line><line className="transition-opacity duration-1000" stroke="#10b981" stroke-opacity="0.7783966319330373" strokeWidth="0.5" x1="487.64126829708624" x2="472.90694965464394" y1="513.062162972808" y2="542.8586567390545"></line></g><g className="network-nodes"><circle cx="137.5005790069269" cy="247.4632506477866" fill="#34d399" fillOpacity="0.6" r="1.8782853643206847"></circle><circle cx="489.1895614242474" cy="236.07917958799126" fill="#34d399" fillOpacity="0.6" r="2.477267966849954"></circle><circle cx="565.2944749382365" cy="72.13640886137878" fill="#34d399" fillOpacity="0.6" r="1.440127733451721"></circle><circle cx="257.46897398041847" cy="385.5245314606491" fill="#34d399" fillOpacity="0.6" r="1.3962732408470444"></circle><circle cx="0.8003612560954858" cy="94.5159259224502" fill="#34d399" fillOpacity="0.6" r="1.0351017438500203"></circle><circle cx="572.6077322973637" cy="108.31073534928733" fill="#34d399" fillOpacity="0.6" r="1.048912020672713"></circle><circle cx="335.6661040013064" cy="22.021693126010433" fill="#34d399" fillOpacity="0.6" r="1.8605232941906058"></circle><circle cx="425.8804388706542" cy="310.446429164612" fill="#34d399" fillOpacity="0.6" r="1.9610436459837812"></circle><circle cx="356.34174885268925" cy="381.8192909361458" fill="#34d399" fillOpacity="0.6" r="2.007166729592134"></circle><circle cx="223.4968990362756" cy="479.80764037554115" fill="#34d399" fillOpacity="0.6" r="1.6544410736665038"></circle><circle cx="205.6313872938673" cy="192.7595902348923" fill="#34d399" fillOpacity="0.6" r="2.4563718933134484"></circle><circle cx="197.13239860273444" cy="83.7029133837301" fill="#34d399" fillOpacity="0.6" r="1.9273117034520484"></circle><circle cx="404.44521149724153" cy="342.67237104675337" fill="#34d399" fillOpacity="0.6" r="2.072383177425616"></circle><circle cx="20.707500390783736" cy="131.97080075505545" fill="#34d399" fillOpacity="0.6" r="1.8884496661531072"></circle><circle cx="188.43847489520763" cy="197.76367406098078" fill="#34d399" fillOpacity="0.6" r="1.5680003885964522"></circle><circle cx="36.52453036242792" cy="326.3004530184691" fill="#34d399" fillOpacity="0.6" r="2.4884089937215936"></circle><circle cx="307.25320365393196" cy="488.62449997524544" fill="#34d399" fillOpacity="0.6" r="1.4537260680934103"></circle><circle cx="516.1627912130406" cy="350.80627736248573" fill="#34d399" fillOpacity="0.6" r="1.8861490913493228"></circle><circle cx="294.37616224197996" cy="187.4377264737285" fill="#34d399" fillOpacity="0.6" r="1.0734599395102213"></circle><circle cx="405.57208777405276" cy="105.69931782294543" fill="#34d399" fillOpacity="0.6" r="1.3469581570497937"></circle><circle cx="78.9456119323072" cy="196.3884327502838" fill="#34d399" fillOpacity="0.6" r="1.263416593117308"></circle><circle cx="336.753796598442" cy="432.4861052742855" fill="#34d399" fillOpacity="0.6" r="2.419776715080033"></circle><circle cx="487.64126829708624" cy="513.062162972808" fill="#34d399" fillOpacity="0.6" r="1.6452759070581646"></circle><circle cx="519.977803577043" cy="210.86588988638798" fill="#34d399" fillOpacity="0.6" r="1.95546956850569"></circle><circle cx="241.54714399905262" cy="285.1648588395128" fill="#34d399" fillOpacity="0.6" r="1.3238699700048713"></circle><circle cx="7.557292600933087" cy="372.9584218672679" fill="#34d399" fillOpacity="0.6" r="1.2372103994738104"></circle><circle cx="472.90694965464394" cy="542.8586567390545" fill="#34d399" fillOpacity="0.6" r="1.7277611418283256"></circle><circle cx="350.1477203538468" cy="28.992813974506415" fill="#34d399" fillOpacity="0.6" r="1.1685000442265538"></circle><circle cx="373.7476144597596" cy="377.190191854238" fill="#34d399" fillOpacity="0.6" r="1.235215635808299"></circle><circle cx="161.1991308036575" cy="418.21352480497353" fill="#34d399" fillOpacity="0.6" r="2.3540272248587417"></circle></g><g transform="translate(347, 30)"><rect className="backdrop-blur-md" fill="rgba(6, 78, 59, 0.7)" height="110" rx="12" stroke="rgba(52, 211, 153, 0.2)" strokeWidth="1" width="200"></rect><path d="M10,41.889C10,41.889,16.188,36.15,19.474,33.993C22.522,31.991,25.712,29.648,28.947,29.212C32.035,28.797,35.311,31.446,38.421,31.131C41.63,30.807,44.728,27.155,47.895,27.111C51.044,27.066,54.255,29.37,57.368,30.82C60.574,32.313,63.866,33.647,66.842,35.978C70.237,38.637,72.883,43.853,76.316,46.343C79.27,48.485,82.724,48.829,85.789,50.626C89.052,52.538,91.915,56.605,95.263,57.617C98.268,58.525,101.816,58.477,104.737,57.156C108.235,55.574,110.772,49.576,114.211,47.387C117.162,45.507,120.603,45.561,123.684,44.107C126.927,42.577,129.959,40.075,133.158,38.318C136.277,36.605,139.563,35.563,142.632,33.671C145.89,31.661,148.75,27.762,152.105,26.479C155.105,25.332,158.423,25.67,161.579,25.708C164.739,25.747,167.992,25.734,171.053,26.711C174.322,27.754,177.623,29.455,180.526,32.04C184.062,35.189,190,45.085,190,45.085L190,80C190,80,183.684,80,180.526,80C177.368,80,174.211,80,171.053,80C167.895,80,164.737,80,161.579,80C158.421,80,155.263,80,152.105,80C148.947,80,145.789,80,142.632,80C139.474,80,136.316,80,133.158,80C130,80,126.842,80,123.684,80C120.526,80,117.368,80,114.211,80C111.053,80,107.895,80,104.737,80C101.579,80,98.421,80,95.263,80C92.105,80,88.947,80,85.789,80C82.632,80,79.474,80,76.316,80C73.158,80,70,80,66.842,80C63.684,80,60.526,80,57.368,80C54.211,80,51.053,80,47.895,80C44.737,80,41.579,80,38.421,80C35.263,80,32.105,80,28.947,80C25.789,80,22.632,80,19.474,80C16.316,80,10,80,10,80Z" fill="url(#chart-gradient)"></path><path d="M10,41.889C10,41.889,16.188,36.15,19.474,33.993C22.522,31.991,25.712,29.648,28.947,29.212C32.035,28.797,35.311,31.446,38.421,31.131C41.63,30.807,44.728,27.155,47.895,27.111C51.044,27.066,54.255,29.37,57.368,30.82C60.574,32.313,63.866,33.647,66.842,35.978C70.237,38.637,72.883,43.853,76.316,46.343C79.27,48.485,82.724,48.829,85.789,50.626C89.052,52.538,91.915,56.605,95.263,57.617C98.268,58.525,101.816,58.477,104.737,57.156C108.235,55.574,110.772,49.576,114.211,47.387C117.162,45.507,120.603,45.561,123.684,44.107C126.927,42.577,129.959,40.075,133.158,38.318C136.277,36.605,139.563,35.563,142.632,33.671C145.89,31.661,148.75,27.762,152.105,26.479C155.105,25.332,158.423,25.67,161.579,25.708C164.739,25.747,167.992,25.734,171.053,26.711C174.322,27.754,177.623,29.455,180.526,32.04C184.062,35.189,190,45.085,190,45.085" fill="none" filter="drop-shadow(0 0 2px rgba(52, 211, 153, 0.5))" stroke="#34d399" strokeLinecap="round" strokeWidth="2"></path><text fill="#a7f3d0" fontFamily="ui-sans-serif, system-ui" fontSize="10px" font-weight="600" letter-spacing="0.05em" x="10" y="100">NETWORK LATENCY</text><text fill="#fff" fontFamily="ui-sans-serif, system-ui" fontSize="10px" font-weight="700" text-anchor="end" x="190" y="100">1.2ms</text><circle cx="150" cy="97" fill="#34d399" r="3"></circle></g></svg></div>


</div>

<div className="absolute top-12 left-8 flex flex-col gap-3 z-10">
<div className="bg-forest-950/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg text-xs font-medium text-white flex items-center justify-between gap-6 w-44 shadow-lg transform transition-all duration-500 hover:scale-105 cursor-default group/pill">
<span className="text-emerald-200/80 font-sans">Polygons</span>
<span className="font-mono tracking-wider group-hover/pill:text-emerald-400 transition-colors">12.4M</span>
</div>
<div className="bg-forest-950/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg text-xs font-medium text-white flex items-center justify-between gap-6 w-44 shadow-lg transform transition-all duration-500 hover:scale-105 cursor-default ml-4 group/pill">
<span className="text-emerald-200/80 font-sans">Latency</span>
<span className="font-mono tracking-wider group-hover/pill:text-emerald-400 transition-colors">&lt; 2ms</span>
</div>
<div className="bg-forest-950/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg text-xs font-medium text-white flex items-center justify-between gap-6 w-44 shadow-lg transform transition-all duration-500 hover:scale-105 cursor-default ml-2 group/pill">
<span className="text-emerald-200/80 font-sans">Occlusion</span>
<span className="font-mono tracking-wider group-hover/pill:text-emerald-400 transition-colors">99.9%</span>
</div>
<div className="bg-forest-950/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg text-xs font-medium text-white flex items-center justify-between gap-6 w-44 shadow-lg transform transition-all duration-500 hover:scale-105 cursor-default group/pill">
<span className="text-emerald-200/80 font-sans">FPS</span>
<span className="font-mono tracking-wider group-hover/pill:text-emerald-400 transition-colors">120</span>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] w-64 z-10 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none">
<div className="flex justify-between items-center mb-4 relative z-10">
<h4 className="text-white font-medium font-sans tracking-wide text-sm">Render Score</h4>
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
</div>
<div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold relative z-10">
<span className="text-forest-100/70">Quality</span>
<span className="text-emerald-300 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-500/30">Optimal</span>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-forest-950 py-24 md:py-32 relative overflow-hidden border-t border-white/5">

<div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-12 gap-4 px-6 md:px-12 w-full max-w-[1600px] mx-auto opacity-[0.05]">
<div className="border-l border-white h-full col-start-1"></div>
<div className="border-l border-white h-full col-start-3 hidden md:block"></div>
<div className="border-l border-white h-full col-start-5 hidden md:block"></div>
<div className="border-l border-white h-full col-start-7 hidden md:block"></div>
<div className="border-l border-white h-full col-start-9 hidden md:block"></div>
<div className="border-l border-white h-full col-start-11 hidden md:block"></div>
<div className="border-r border-white h-full col-end-13"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

<div className="flex flex-col items-center text-center mb-16 md:mb-24 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter font-dm-sans font-light mb-6">
                Flexible Tiers for <span className="text-emerald-400 font-dm-sans font-normal">Every Dimension</span>
</h2>
<p className="text-forest-300 text-lg font-sans max-w-xl mb-10">
                Scale your spatial computing capabilities from prototyping to global enterprise deployment.
            </p>

<div className="flex items-center p-1.5 bg-forest-900/50 backdrop-blur-sm rounded-full border border-white/10 relative">
<div className="relative z-10 grid grid-cols-2 gap-2">
<button className="px-8 py-2.5 rounded-full bg-forest-800 text-white shadow-lg border border-white/5 text-sm font-medium font-sans tracking-wide transition-all">Monthly</button>
<button className="px-8 py-2.5 rounded-full text-forest-400 hover:text-white text-sm font-medium font-sans tracking-wide transition-all relative group">
                        Annual
                        <span className="absolute -top-3 -right-3 text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-md font-mono">-20%</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start relative">

<div className="relative bg-forest-900/20 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 group hover:bg-forest-900/40 transition-all duration-500 reveal-on-scroll delay-100 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-2xl bg-forest-800/50 border border-white/5 flex items-center justify-center text-forest-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono font-bold text-forest-500 bg-white/5 px-2 py-1 rounded font-sans border border-white/5">01</span>
</div>
<div className="mb-2">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest font-sans border border-emerald-500/20 px-2 py-0.5 rounded-md bg-emerald-500/5">Core</span>
</div>
<h3 className="text-3xl text-white font-dm-sans tracking-tight mb-4">Indie</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl lg:text-5xl font-light text-white font-dm-sans">$0</span>
<span className="text-forest-400 font-sans text-sm">/ mo</span>
</div>
<p className="text-sm text-forest-300 mb-8 border-b border-white/5 pb-8 font-sans">
                    Perfect for solo creators experimenting with spatial interfaces and lightweight AR apps.
                </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Local simulation engine
                    </li>
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Basic asset library (100+)
                    </li>
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        1 Active project
                    </li>
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Community support
                    </li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white hover:text-forest-950 transition-all duration-300 font-sans text-sm">
                    Get Started
                </button>
</div>

<div className="relative bg-gradient-to-b from-forest-900/80 to-forest-950/80 backdrop-blur-xl border border-emerald-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-emerald-900/20 z-10 transform lg:-translate-y-6 group hover:border-emerald-400/50 transition-all duration-500 reveal-on-scroll delay-200 flex flex-col h-full">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-emerald-950 text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-emerald-500/20 font-sans">
                    Most Popular
                </div>
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded font-sans border border-emerald-500/20">02</span>
</div>
<div className="mb-2">
<span className="text-xs font-medium text-emerald-300 uppercase tracking-widest font-sans border border-emerald-400/20 px-2 py-0.5 rounded-md bg-emerald-400/10">Overdrive</span>
</div>
<h3 className="text-3xl text-white font-dm-sans tracking-tight mb-4">Studio</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl lg:text-6xl font-light text-white font-dm-sans tracking-tighter">$99</span>
<span className="text-forest-400 font-sans text-sm">/ mo</span>
</div>
<p className="text-sm text-forest-300 mb-8 border-b border-white/10 pb-8 font-sans leading-relaxed">
                    Full-featured toolkit for professional teams building complex, multi-user spatial experiences.
                </p>
<ul className="space-y-5 mb-10 flex-1">
<li className="flex items-center gap-3 text-white text-sm font-sans">
<div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-forest-950 text-xs">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5"></iconify-icon>
</div>
                        Cloud neural rendering
                    </li>
<li className="flex items-center gap-3 text-white text-sm font-sans">
<div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-forest-950 text-xs">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5"></iconify-icon>
</div>
                        Unlimited projects &amp; storage
                    </li>
<li className="flex items-center gap-3 text-white text-sm font-sans">
<div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-forest-950 text-xs">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5"></iconify-icon>
</div>
                        Advanced occlusion API
                    </li>
<li className="flex items-center gap-3 text-white text-sm font-sans">
<div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-forest-950 text-xs">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5"></iconify-icon>
</div>
                        Multi-user real-time editing
                    </li>
</ul>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] transition-all duration-300 font-sans text-sm relative overflow-hidden">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
</div>

<div className="relative bg-forest-900/20 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 group hover:bg-forest-900/40 transition-all duration-500 reveal-on-scroll delay-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-2xl bg-forest-800/50 border border-white/5 flex items-center justify-center text-forest-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono font-bold text-forest-500 bg-white/5 px-2 py-1 rounded font-sans border border-white/5">03</span>
</div>
<div className="mb-2">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest font-sans border border-emerald-500/20 px-2 py-0.5 rounded-md bg-emerald-500/5">Scale</span>
</div>
<h3 className="text-3xl text-white font-dm-sans tracking-tight mb-4">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl lg:text-5xl font-light text-white font-dm-sans">Custom</span>
</div>
<p className="text-sm text-forest-300 mb-8 border-b border-white/5 pb-8 font-sans">
                    Dedicated infrastructure and white-glove support for large-scale industrial and commercial deployments.
                </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        On-premise deployment
                    </li>
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Custom SLA &amp; Uptime guarantee
                    </li>
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        SSO &amp; SAML Authentication
                    </li>
<li className="flex items-center gap-3 text-forest-200 text-sm font-sans">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Dedicated Success Manager
                    </li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white hover:text-forest-950 transition-all duration-300 font-sans text-sm">
                    Contact Sales
                </button>
</div>
</div>
<div className="mt-16 text-center reveal-on-scroll delay-300">
<p className="text-sm text-forest-500 font-sans">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Limited time offer: Get 3 months of Studio free with any annual plan.
            </p>
</div>
</div>
</section><section className="md:py-32 overflow-hidden bg-forest-50 border-forest-900/5 border-t pt-24 pb-24 relative" id="faq-section">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-end reveal-on-scroll">
<div className="lg:col-span-5 flex flex-col justify-between h-full">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono font-bold tracking-widest text-emerald-700 bg-emerald-100/50 px-2 py-0.5 rounded font-sans">04</span>
<div className="h-px w-8 bg-forest-900/10"></div>
<span className="text-xs font-medium uppercase tracking-widest text-forest-500 font-sans">Support</span>
</div>
<p className="text-forest-600 text-base md:text-lg leading-relaxed font-sans max-w-md">
                        Whether you're new to spatial computing or scaling your enterprise deployment, we're here to help clarify the details.
                    </p>
</div>
</div>
<div className="lg:col-span-7">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-forest-950 tracking-tighter font-dm-sans font-light leading-[0.95]">
                    Answers to your <span className="text-emerald-600 font-dm-sans font-normal">Common Queries</span>
</h2>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-7 flex flex-col">

<div className="group border-b border-forest-900/10 reveal-on-scroll delay-100">
<button aria-expanded="false" className="faq-toggle w-full py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group-hover:text-emerald-700 transition-colors">
<span className="text-xl md:text-2xl font-dm-sans font-normal text-forest-950 group-hover:text-emerald-800 transition-colors tracking-tight">How does the spatial anchor precision work?</span>
<div className="w-10 h-10 rounded-full border border-forest-900/10 flex items-center justify-center text-forest-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300 relative">
<iconify-icon className="absolute transition-transform duration-300 opacity-100 icon-plus" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-300 opacity-0 rotate-90 icon-minus" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="overflow-hidden">
<div className="pb-8 pr-12">
<p className="text-forest-600 font-sans text-base leading-relaxed">
                                    Our proprietary LiDAR-assisted SLAM engine maps the environment at 120Hz. By combining this with visual odometry, Spectra achieves sub-millimeter drift correction, ensuring that digital objects stay exactly where you place them, even if you leave the room and return hours later.
                                </p>
</div>
</div>
</div>
</div>

<div className="group border-b border-forest-900/10 reveal-on-scroll delay-200">
<button aria-expanded="false" className="faq-toggle w-full py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group-hover:text-emerald-700 transition-colors">
<span className="text-xl md:text-2xl font-dm-sans font-normal text-forest-950 group-hover:text-emerald-800 transition-colors tracking-tight">Can I integrate with Unity or Unreal Engine?</span>
<div className="w-10 h-10 rounded-full border border-forest-900/10 flex items-center justify-center text-forest-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300 relative">
<iconify-icon className="absolute transition-transform duration-300 opacity-100 icon-plus" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-300 opacity-0 rotate-90 icon-minus" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="overflow-hidden">
<div className="pb-8 pr-12">
<p className="text-forest-600 font-sans text-base leading-relaxed">
                                    Absolutely. The Spectra SDK includes full plugins for both Unity (2021.3+) and Unreal Engine 5. We expose low-level access to the hand-tracking and depth APIs, allowing you to use your existing physics engines and asset pipelines without modification.
                                </p>
</div>
</div>
</div>
</div>

<div className="group border-b border-forest-900/10 reveal-on-scroll delay-300">
<button aria-expanded="false" className="faq-toggle w-full py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group-hover:text-emerald-700 transition-colors">
<span className="text-xl md:text-2xl font-dm-sans font-normal text-forest-950 group-hover:text-emerald-800 transition-colors tracking-tight">What happens if the device loses connection?</span>
<div className="w-10 h-10 rounded-full border border-forest-900/10 flex items-center justify-center text-forest-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300 relative">
<iconify-icon className="absolute transition-transform duration-300 opacity-100 icon-plus" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-300 opacity-0 rotate-90 icon-minus" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="overflow-hidden">
<div className="pb-8 pr-12">
<p className="text-forest-600 font-sans text-base leading-relaxed">
                                    The device features substantial onboard caching. While cloud rendering enhances fidelity for complex scenes, the local S1 Neural Engine takes over immediately upon disconnection, rendering a simplified but fully interactive version of your workspace until connectivity is restored.
                                </p>
</div>
</div>
</div>
</div>

<div className="group border-b border-forest-900/10 reveal-on-scroll delay-300">
<button aria-expanded="false" className="faq-toggle w-full py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group-hover:text-emerald-700 transition-colors">
<span className="text-xl md:text-2xl font-dm-sans font-normal text-forest-950 group-hover:text-emerald-800 transition-colors tracking-tight">Do you offer educational discounts?</span>
<div className="w-10 h-10 rounded-full border border-forest-900/10 flex items-center justify-center text-forest-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300 relative">
<iconify-icon className="absolute transition-transform duration-300 opacity-100 icon-plus" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-300 opacity-0 rotate-90 icon-minus" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="overflow-hidden">
<div className="pb-8 pr-12">
<p className="text-forest-600 font-sans text-base leading-relaxed">
                                    Yes, verified academic institutions can apply for our Spectra for Education program, which includes subsidized hardware units and free access to the Studio tier software for all registered student accounts.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 reveal-on-scroll delay-500">
<div className="sticky top-32 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/10 border border-forest-900/5 aspect-[4/3] transform transition-transform duration-700 hover:scale-[1.02]">
<img alt="Documentation Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73497bc9-224a-4cab-a551-92adf0b5a098_1600w.webp" style={{}}/>
<div className="bg-gradient-to-t from-forest-950/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-white font-sans">V 2.4 Docs</span>
</div>
</div>
<div className="mt-8">
<h4 className="text-lg font-semibold text-forest-950 mb-2 font-dm-sans">Developer Documentation</h4>
<p className="text-sm text-forest-500 font-sans leading-relaxed mb-4">
                            Need deeper technical details? Our API reference is comprehensive and updated weekly.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800 transition-colors font-sans group/link" href="#">
                            View Full Docs
                            <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>


</section><section className="relative bg-forest-950 py-32 overflow-hidden border-t border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-dm-sans font-light text-white tracking-tighter mb-8 leading-[0.9]">
            Ready to render 
            <span className="text-emerald-400 font-normal">your reality?</span>
</h2>
<p className="text-lg md:text-xl text-forest-300 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of spatial designers and developers who are building the next generation of immersive experiences in minutes.
        </p>
<button className="px-8 py-4 bg-white text-forest-950 rounded-full font-medium font-sans text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.4)]">
            Start Pilot Now
        </button>
</div>
</section><footer className="relative bg-forest-50 pt-6 pb-12 md:pb-12 px-6 md:px-12 overflow-hidden">

<div className="max-w-[1600px] mx-auto bg-white rounded-[2.5rem] border border-forest-900/5 shadow-2xl shadow-forest-900/5 relative overflow-hidden p-8 md:p-16 reveal-on-scroll delay-100">

<div className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 text-[18vw] leading-none font-dm-sans font-bold text-forest-900/[0.02] select-none pointer-events-none tracking-tighter whitespace-nowrap z-0">
            SPECTRA
        </div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">

<div className="lg:col-span-5 flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-2 mb-6 text-forest-950">
<iconify-icon icon="solar:glasses-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-xl font-medium tracking-tight font-dm-sans">Spectra</span>
</div>
<p className="text-forest-500 text-base leading-relaxed max-w-md font-sans mb-8">
                        Spectra empowers teams to transform raw spatial data into clear, compelling immersive realities — making insights easier to share, understand, and act on.
                    </p>

<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 hover:bg-forest-950 hover:text-white hover:border-forest-950 transition-all duration-300" href="#">
<iconify-icon icon="ri:twitter-x-line" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 hover:bg-forest-950 hover:text-white hover:border-forest-950 transition-all duration-300" href="#">
<iconify-icon icon="ri:instagram-line" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 hover:bg-forest-950 hover:text-white hover:border-forest-950 transition-all duration-300" href="#">
<iconify-icon icon="ri:linkedin-fill" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 hover:bg-forest-950 hover:text-white hover:border-forest-950 transition-all duration-300" href="#">
<iconify-icon icon="ri:github-fill" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

<div>
<div className="flex items-center gap-2 mb-6">
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">01</span>
<h4 className="font-semibold text-forest-950 font-dm-sans tracking-tight">Product</h4>
</div>
<ul className="space-y-3.5">
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Features</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Pricing</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Integrations</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Changelog</a></li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-6">
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">02</span>
<h4 className="font-semibold text-forest-950 font-dm-sans tracking-tight">Resources</h4>
</div>
<ul className="space-y-3.5">
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Documentation</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Tutorials</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Blog</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Support</a></li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-6">
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">03</span>
<h4 className="font-semibold text-forest-950 font-dm-sans tracking-tight">Company</h4>
</div>
<ul className="space-y-3.5">
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">About</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Careers</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Contact</a></li>
<li><a className="text-sm text-forest-500 hover:text-forest-950 transition-colors font-sans font-medium" href="#">Partners</a></li>
</ul>
</div>
</div>
</div>

<div className="relative z-10 border-t border-forest-900/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-forest-400 font-sans">
<p>© 2025 Spectra. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-forest-950 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-forest-950 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-forest-950 transition-colors" href="#">Cookies Settings</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
