import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        document.addEventListener("DOMContentLoaded", () => {
            
            // --- Custom Fluid Carousel Logic ---
            const track = document.getElementById('carousel-container');
            if (track) {
                let isDown = false;
                let startX;
                let scrollLeft;
                let isDragging = false;

                // Center initially
                setTimeout(() => {
                    const scrollTarget = (track.scrollWidth - track.clientWidth) / 2;
                    track.scrollLeft = scrollTarget;
                }, 100);

                // Drag controls
                track.addEventListener('mousedown', (e) => {
                    isDown = true;
                    isDragging = false;
                    track.style.cursor = 'grabbing';
                    startX = e.pageX - track.offsetLeft;
                    scrollLeft = track.scrollLeft;
                });

                track.addEventListener('mouseleave', () => { 
                    isDown = false; 
                    track.style.cursor = 'grab'; 
                });

                track.addEventListener('mouseup', () => { 
                    isDown = false; 
                    track.style.cursor = 'grab'; 
                });

                track.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    isDragging = true;
                    const x = e.pageX - track.offsetLeft;
                    const walk = (x - startX) * 2.5; // Drag speed multiplier
                    track.scrollLeft = scrollLeft - walk;
                });

                // Prevent click on drag
                track.querySelectorAll('.carousel-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        if (isDragging) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                });

                // Performance-optimized scale effect loop
                const updateScale = () => {
                    const containerRect = track.getBoundingClientRect();
                    const containerCenter = containerRect.left + containerRect.width / 2;
                    const cards = track.querySelectorAll('.carousel-item');
                    
                    // Max distance considered for scaling (half the container width)
                    const maxDistance = containerRect.width / 2;

                    cards.forEach(card => {
                        const cardRect = card.getBoundingClientRect();
                        const cardCenter = cardRect.left + cardRect.width / 2;
                        
                        // Calculate absolute distance from center
                        const distance = Math.abs(containerCenter - cardCenter);
                        
                        // Normalize distance between 0 (center) and 1 (edge)
                        const normalizedDistance = Math.min(distance / maxDistance, 1);
                        
                        // Scale from 1 to 0.85
                        const scale = 1 - (normalizedDistance * 0.15);
                        
                        // Lower opacity near edges
                        const opacity = 1 - (normalizedDistance * 0.4);

                        // Apply smooth transform without triggering layout recalculations
                        card.style.transform = `scale(${scale})`;
                        card.style.opacity = Math.max(0.4, opacity);
                    });
                    
                    requestAnimationFrame(updateScale);
                };
                
                // Start animation loop
                updateScale();
            }

            // --- Animated Grid Pattern ---
            const sqContainer = document.getElementById('animated-squares');
            if (sqContainer) {
                const size = 40;
                const numSquares = 30;
                let cols = Math.max(1, Math.floor(window.innerWidth / size));
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
                        rect.style.opacity = '0.3';
                        
                        setTimeout(() => {
                            rect.style.opacity = '0';
                            setTimeout(animateSquare, 3000 + Math.random() * 2000);
                        }, 3000);
                    };
                    
                    setTimeout(animateSquare, i * 150);
                }
            }

            // --- Wavy Background ---
            const canvas = document.getElementById('wavy-canvas');
            if (canvas && typeof SimplexNoise !== 'undefined') {
                const ctx = canvas.getContext('2d');
                let w, h, nt = 0;
                const simplex = new SimplexNoise();
                
                const initCanvas = () => {
                    w = ctx.canvas.width = window.innerWidth;
                    h = ctx.canvas.height = canvas.parentElement.offsetHeight || 600;
                    ctx.filter = `blur(10px)`;
                };
                
                window.addEventListener('resize', initCanvas);
                initCanvas();
                
                const waveColors = ["#404040", "#525252", "#737373", "#262626", "#171717"];
                
                const renderWaves = () => {
                    ctx.fillStyle = "#0a0a0a";
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

            // --- Commits Counter Animation ---
            const counterElement = document.getElementById('commits-counter');
            if (counterElement) {
                const targetValue = 4829;
                const duration = 2500;

                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        observer.disconnect();
                        let startTimestamp = null;
                        
                        const step = (timestamp) => {
                            if (!startTimestamp) startTimestamp = timestamp;
                            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            const currentValue = Math.floor(easeOutQuart * targetValue);
                            counterElement.innerHTML = currentValue.toLocaleString();

                            if (progress < 1) {
                                window.requestAnimationFrame(step);
                            } else {
                                counterElement.innerHTML = targetValue.toLocaleString();
                            }
                        };
                        window.requestAnimationFrame(step);
                    }
                }, { threshold: 0.1 });

                observer.observe(counterElement);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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

<a className="text-lg font-light tracking-tight flex items-center gap-2 text-neutral-100" href="#">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-neutral-100">
<div className="w-2 h-2 rounded-full bg-neutral-950"></div>
</div>
                    alwaysongroup
                </a>

<nav className="hidden md:flex items-center gap-6 text-lg font-thin">
<a className="transition-colors hover:text-neutral-100" href="#agencies">Agencies</a>
<a className="transition-colors hover:text-neutral-100" href="#philosophy">Philosophy</a>
<a className="transition-colors text-neutral-100" href="#team">Team</a>
<a className="transition-colors hover:text-neutral-100" href="#contact">Contact</a>
</nav>
</div>
<div className="flex items-center gap-4 text-lg">
<a className="font-light px-5 py-2 rounded-full transition-colors bg-neutral-100 text-neutral-950 hover:bg-neutral-300" href="#contact">Join us</a>
</div>
</div>
</header>
<main className="relative">

<section className="h-screen w-full flex flex-col justify-between pt-24 pb-8 relative overflow-hidden">

<div className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto z-10 w-full relative mt-12">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-6 backdrop-blur-sm border-neutral-800 bg-neutral-900/50 text-neutral-300">
<i className="w-4 h-4 text-neutral-400" data-lucide="users"></i>
                    The Collective
                </div>
<h1 className="md:text-6xl text-5xl font-light text-neutral-50 tracking-tight mb-6">
                    The engineers behind <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r to-neutral-500 from-neutral-100">the growth.</span>
</h1>
<p className="text-xl md:text-2xl max-w-2xl font-thin text-neutral-400">
                    We aren't traditional marketers. We are data architects, algorithm whisperers, and systems thinkers building revenue engines that scale.
                </p>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
<span className="text-sm font-thin tracking-widest uppercase">Drag to explore</span>
<i className="w-5 h-5 text-neutral-500 animate-bounce" data-lucide="arrow-down-circle"></i>
</div>
</div>

<div className="w-full relative z-20 mt-auto py-12 overflow-visible">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-30 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-30 pointer-events-none"></div>

<div className="carousel-track w-full flex items-center gap-8 overflow-x-auto no-scrollbar px-[calc(50vw-160px)] py-16 cursor-grab select-none" id="carousel-container">

<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-cyan-400/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="database"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">Data</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Alex Chen</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Lead Data Engineer</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="database"></i></div>
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="code"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">

<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/70 to-purple-500/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="bar-chart-2"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">Strategy</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Sarah Jenkins</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Head of Growth Architecture</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="bar-chart-2"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-amber-400/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="cpu"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">AI</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Marcus Vahn</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Machine Learning Director</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="zap"></i></div>
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="code"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/70 to-teal-400/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="users"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">CRM</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Elena Rostova</h3>
<p className="text-base font-thin text-neutral-500 mb-4">CRM Systems Architect</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="users"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>


<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-cyan-400/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="database"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">Data</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Alex Chen</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Lead Data Engineer</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="database"></i></div>
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="code"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/70 to-purple-500/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="bar-chart-2"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">Strategy</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Sarah Jenkins</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Head of Growth Architecture</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="bar-chart-2"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-amber-400/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="cpu"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">AI</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Marcus Vahn</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Machine Learning Director</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="zap"></i></div>
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="code"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
<div className="carousel-item w-[280px] md:w-[320px] shrink-0 rounded-2xl border p-1 group relative transition-colors duration-300 border-neutral-800/60 bg-neutral-950 hover:border-neutral-600 shadow-2xl origin-center">
<div className="w-full h-[180px] rounded-xl bg-neutral-900 relative overflow-hidden mb-4 border border-neutral-800/50">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/70 to-teal-400/70 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" data-lucide="users"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1">
<span className="text-xs uppercase tracking-wider px-2 py-1 rounded border font-light border-white/20 bg-black/40 text-white backdrop-blur-md">CRM</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-2xl font-light tracking-tight text-neutral-100 mb-1">Elena Rostova</h3>
<p className="text-base font-thin text-neutral-500 mb-4">CRM Systems Architect</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center"><i className="w-4 h-4 text-neutral-400" data-lucide="users"></i></div>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto px-6 py-24 relative z-10 border-t border-neutral-800/50 bg-neutral-900/10">
<div className="mb-16 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-neutral-100">Engineering Velocity.</h2>
<p className="text-xl max-w-xl text-neutral-400 font-thin">We measure output not in campaigns launched, but in systems integrated, models trained, and automated pipelines deployed.</p>
</div>
<div className="flex items-center gap-2 text-base font-thin px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/50">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Systems Operational
                </div>
</div>
<div className="w-full relative">
<div className="rounded-xl border overflow-hidden shadow-2xl relative border-neutral-800/60 bg-neutral-950">
<div className="h-12 border-b flex items-center px-5 gap-2 border-neutral-800/60 bg-neutral-900/40">
<div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
<div className="mx-auto flex items-center gap-2 text-sm font-thin text-neutral-500 px-12 md:px-24 py-1.5 rounded-md border bg-neutral-900/80 border-neutral-800/50">
<i className="w-4 h-4" data-lucide="lock"></i>
                            telemetry.alwaysongroup.com
                        </div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="space-y-8">
<div>
<h3 className="text-sm font-thin text-neutral-500 uppercase tracking-widest mb-4">Active Deployments</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<div>
<div className="text-base font-light text-neutral-200">Data Warehouse Sync</div>
<div className="text-sm font-thin text-neutral-500">Latency: 12ms</div>
</div>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex items-center justify-between p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<div>
<div className="text-base font-light text-neutral-200">Predictive LTV Model</div>
<div className="text-sm font-thin text-neutral-500">Accuracy: 94.2%</div>
</div>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex items-center justify-between p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/20 opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md flex items-center justify-center bg-neutral-800/50 text-neutral-300">
<i className="w-5 h-5" data-lucide="server"></i>
</div>
<div>
<div className="text-base font-light text-neutral-200">CRM Migration</div>
<div className="text-sm font-thin text-neutral-500">Processing queue...</div>
</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-dashed animate-spin border-neutral-500"></div>
</div>
</div>
</div>
</div>
<div className="md:col-span-2 border rounded-lg p-6 flex flex-col justify-between min-h-[320px] border-neutral-800/50 bg-neutral-900/10">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-base font-thin mb-1 text-neutral-400">Total Code Commits (30d)</div>
<div className="text-5xl font-light tracking-tight text-neutral-100" id="commits-counter">0</div>
</div>
<div className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md font-light text-neutral-950 bg-neutral-100">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                                    +24% vs last month
                                </div>
</div>
<div className="relative w-full h-48 flex items-end justify-between gap-1.5 overflow-hidden mt-auto px-2">
<div className="w-full h-[30%] rounded-t bg-neutral-800/30 hover:bg-neutral-700 transition-colors"></div>
<div className="w-full h-[45%] rounded-t bg-neutral-800/40 hover:bg-neutral-700 transition-colors"></div>
<div className="w-full h-[20%] rounded-t bg-neutral-800/30 hover:bg-neutral-700 transition-colors"></div>
<div className="w-full h-[60%] rounded-t bg-neutral-700/50 hover:bg-neutral-600 transition-colors"></div>
<div className="w-full h-[85%] rounded-t bg-neutral-600/60 hover:bg-neutral-500 transition-colors relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
<div className="w-full h-[50%] rounded-t bg-neutral-700/40 hover:bg-neutral-600 transition-colors"></div>
<div className="w-full h-[70%] rounded-t bg-neutral-600/50 hover:bg-neutral-500 transition-colors"></div>
<div className="w-full h-[95%] rounded-t bg-neutral-500 relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-thin px-3 py-1.5 rounded whitespace-nowrap bg-neutral-100 text-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity">Peak Deploy</div>
</div>
<div className="w-full h-[40%] rounded-t bg-neutral-800/50 hover:bg-neutral-700 transition-colors"></div>
<div className="w-full h-[65%] rounded-t bg-neutral-700/60 hover:bg-neutral-600 transition-colors"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M5 70 L15 55 L25 80 L35 40 L45 15 L55 50 L65 30 L75 5 L85 60 L95 35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-32 pl-6 relative z-10" id="leadership">
<div className="mb-12">
<h2 className="text-3xl font-light tracking-tight mb-3 text-neutral-100">Core Architecture Team</h2>
<p className="text-xl text-neutral-400 font-thin">The foundational members defining our cross-agency standards.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative overflow-hidden rounded-2xl border p-8 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50 min-h-[340px]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="z-10 relative">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-5 overflow-hidden">
<span className="text-base font-thin text-neutral-300">JD</span>
</div>
<h3 className="text-2xl font-light tracking-tight mb-2 text-neutral-100">James Darnell</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Group Managing Director</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-5 font-mono text-xs leading-relaxed w-full mt-auto relative opacity-70 group-hover:opacity-100 transition-opacity">
<div className="text-neutral-500 mb-1">// Group objective alignment</div>
<div className="text-neutral-400">
<span className="text-neutral-200">function</span> <span className="text-emerald-400">scaleGroup</span>() {<br/>
                              <span className="text-neutral-200">return</span> agencies.reduce(<br/>
                                (acc, curr) =&gt; acc * curr.impact,<br/>
                                <span className="text-neutral-300">1.0</span><br/>
                              );<br/>
                            }
                        </div>
</div>
</div>
<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border p-8 flex flex-col md:flex-row items-center gap-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 border-neutral-800/50 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-700/50">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="md:w-1/2 z-10 relative">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-5 overflow-hidden">
<span className="text-base font-thin text-neutral-300">MK</span>
</div>
<h3 className="text-2xl font-light tracking-tight mb-2 text-neutral-100">Maya Kline</h3>
<p className="text-base font-thin text-neutral-500 mb-4">Chief Technology Officer</p>
<p className="text-base font-thin text-neutral-400 leading-relaxed">Overseeing the technical infrastructure that connects Clicktrust's algorithms, Leadstreet's CRM setups, and Multiminds' data pipelines.</p>
</div>
<div className="md:w-1/2 w-full h-48 relative flex items-center justify-center z-10 border rounded-xl bg-neutral-900/30 border-neutral-800/40 overflow-hidden">
<div className="absolute inset-0 mask-radial opacity-30 flex items-center justify-center">
<div className="w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#262626_50%,#000000_100%)] animate-[spin_10s_linear_infinite]"></div>
</div>
<div className="relative flex items-center justify-center gap-6 z-20">
<div className="w-14 h-14 rounded border border-neutral-700 bg-neutral-950 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
<i className="w-6 h-6 text-neutral-400" data-lucide="database"></i>
</div>
<div className="h-px w-10 bg-neutral-700 relative">
<div className="absolute inset-0 bg-neutral-300 w-1/2 animate-beam-x opacity-0 group-hover:opacity-100"></div>
</div>
<div className="w-20 h-20 rounded border border-neutral-600 bg-neutral-900 flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-500">
<i className="w-10 h-10 text-neutral-300" data-lucide="cpu"></i>
</div>
<div className="h-px w-10 bg-neutral-700 relative">
<div className="absolute inset-0 bg-neutral-300 w-1/2 animate-beam-x opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="w-14 h-14 rounded border border-neutral-700 bg-neutral-950 flex items-center justify-center shadow-lg group-hover:translate-y-2 transition-transform duration-500">
<i className="w-6 h-6 text-neutral-400" data-lucide="bar-chart-2"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y py-24 border-neutral-800/50 bg-neutral-950 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<p className="text-sm font-thin text-neutral-500 tracking-widest uppercase mb-16 text-center">Operating Principles</p>
<div className="space-y-8">
<div className="flex items-start gap-6 border-b border-neutral-800/30 pb-8 group cursor-default">
<span className="text-base font-mono text-neutral-600 mt-1">01</span>
<div>
<h4 className="text-xl font-light tracking-tight text-neutral-200 group-hover:text-neutral-50 transition-colors">Data over opinions.</h4>
<p className="text-base font-thin text-neutral-400 mt-2 leading-relaxed">We don't guess. We structure experiments, analyze pipelines, and let statistically significant data dictate our next move.</p>
</div>
</div>
<div className="flex items-start gap-6 border-b border-neutral-800/30 pb-8 group cursor-default">
<span className="text-base font-mono text-neutral-600 mt-1">02</span>
<div>
<h4 className="text-xl font-light tracking-tight text-neutral-200 group-hover:text-neutral-50 transition-colors">Systems over silos.</h4>
<p className="text-base font-thin text-neutral-400 mt-2 leading-relaxed">Marketing isn't a department; it's an interconnected system touching product, sales, and engineering. We build for the whole architecture.</p>
</div>
</div>
<div className="flex items-start gap-6 pb-2 group cursor-default">
<span className="text-base font-mono text-neutral-600 mt-1">03</span>
<div>
<h4 className="text-xl font-light tracking-tight text-neutral-200 group-hover:text-neutral-50 transition-colors">Automate the predictable.</h4>
<p className="text-base font-thin text-neutral-400 mt-2 leading-relaxed">Human intellect is for strategy and creative problem-solving. Everything repetitive should be scripted, scheduled, and monitored by machines.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="relative overflow-hidden pt-40 pb-16 bg-neutral-950" id="contact">
<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mask-waves opacity-60">
<canvas className="absolute inset-0 z-0" height="661" id="wavy-canvas" width="2079"></canvas>
</div>
<div className="absolute inset-0 bg-gradient-to-b via-transparent z-0 pointer-events-none from-neutral-950 to-neutral-950 opacity-80"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-40">
<h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 leading-[1.1] text-neutral-50">Want to join the architecture?</h2>
<p className="text-xl mb-12 max-w-xl mx-auto font-thin text-neutral-400 leading-relaxed">We're always looking for analytical minds, data engineers, and technical marketers to expand our capabilities.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-light px-10 py-4 rounded-full transition-colors text-base shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-neutral-100 text-neutral-950 hover:bg-neutral-300" href="#">
                    View open roles
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<footer className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<a className="text-lg font-light tracking-tight flex items-center gap-2 mb-3 text-neutral-100" href="#">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-neutral-100">
<div className="w-2 h-2 rounded-full bg-neutral-950"></div>
</div>
                        alwaysongroup
                    </a>
<p className="text-sm font-thin text-neutral-500">Marketing engineered for scale.</p>
</div>
<div className="flex flex-wrap gap-x-10 gap-y-4 text-base font-thin text-neutral-400">
<a className="transition-colors hover:text-neutral-100" href="#agencies">Agencies</a>
<a className="transition-colors hover:text-neutral-100" href="#philosophy">Philosophy</a>
<a className="transition-colors hover:text-neutral-100" href="#team">Team</a>
<a className="transition-colors hover:text-neutral-100" href="#contact">Contact</a>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-thin border-neutral-800/50 text-neutral-600">
<p>© 2026 Always On Group Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors hover:text-neutral-300" href="#"><i className="w-5 h-5" data-lucide="map-pin"></i></a>
<a className="transition-colors hover:text-neutral-300" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>
</section>


    </>
  );
}
