import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Modal Logic
        const modalOverlay = document.getElementById('global-modal');
        const modalBox = document.getElementById('modal-content-box');

        function openModal(sectionId, tabId = null) {
            // Hide all sections
            document.querySelectorAll('.modal-section').forEach(el => el.classList.add('hidden'));
            
            // Show target section
            const targetSection = document.getElementById('section-' + sectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                
                // Switch to specific tab if provided, else click first tab
                if (tabId) {
                    switchTab(sectionId, tabId);
                } else {
                    const firstTabBtn = targetSection.querySelector(`.tab-btn-${sectionId}`);
                    if(firstTabBtn) firstTabBtn.click();
                }
            }

            // Show modal with animation
            modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                modalBox.classList.remove('scale-95');
                modalBox.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            modalBox.classList.remove('scale-100');
            modalBox.classList.add('scale-95');
            setTimeout(() => {
                modalOverlay.classList.add('opacity-0', 'pointer-events-none');
            }, 300);
        }

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Tab Switching Logic
        function switchTab(modalId, tabId) {
            // Hide all tabs
            document.querySelectorAll(`.tab-content-${modalId}`).forEach(el => {
                el.classList.remove('block', 'flex');
                el.classList.add('hidden');
            });
            
            // Reset buttons
            document.querySelectorAll(`.tab-btn-${modalId}`).forEach(el => {
                el.classList.remove('bg-white/10', 'border-blue-500', 'text-slate-100');
                el.classList.add('text-slate-400', 'border-transparent');
            });

            // Show target tab
            const targetTab = document.getElementById(`tab-${modalId}-${tabId}`);
            if(targetTab) {
                targetTab.classList.remove('hidden');
                if (tabId === 'form') targetTab.classList.add('flex');
                else targetTab.classList.add('block');
            }

            // Activate button
            const targetBtn = document.getElementById(`btn-${modalId}-${tabId}`);
            if(targetBtn) {
                targetBtn.classList.remove('text-slate-400', 'border-transparent');
                targetBtn.classList.add('bg-white/10', 'border-blue-500', 'text-slate-100');
            }
        }

        // Magnetic Button Effect
        const magnetBtns = document.querySelectorAll('.magnet-btn');
        magnetBtns.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const position = btn.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', function() {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });

   
        // Intersection Observer for Animations (Constellation & Counters)
        const observerOptions = { threshold: 0.3 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate Lines
                    document.querySelectorAll('.constellation-line').forEach(line => {
                        line.classList.add('animate');
                    });
                    
                    // Animate Counters
                    document.querySelectorAll('.count-up').forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const suffix = counter.getAttribute('data-suffix') || '';
                        let count = 0;
                        const duration = 2000;
                        const increment = target / (duration / 16); // 60fps
                        
                        const updateCount = () => {
                            count += increment;
                            if (count < target) {
                                counter.innerText = Math.ceil(count).toLocaleString() + suffix;
                                requestAnimationFrame(updateCount);
                            } else {
                                counter.innerText = target.toLocaleString() + suffix;
                            }
                        };
                        // Prevent re-animating if already done
                        if(counter.innerText === "0") {
                           updateCount();
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.getElementById('stats-section');
        if(statsSection) observer.observe(statsSection);
 <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<script type="module">
	import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

	createChat({
		webhookUrl: 'https://abhijeet01.app.n8n.cloud/webhook/2e566fcc-4c7d-4397-89d8-fc49d6c637ed/chat
	});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-slate-100 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                IMDARPANA
            </div>
<div className="flex items-center gap-6">
<button className="text-xs font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-colors tracking-tight" onclick="openModal('contact')">
                    Get Counseling
                </button>
</div>
</div>
</nav>

<main className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden universe-container bg-[#020617]">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDIwNjE3Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjIiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii40Ii8+PGNpcmNsZSBjeD0iMzUwIiBjeT0iMzUwIiByPSIxLjUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4zIi8+PC9zdmc+')] opacity-30 z-0 float-slow"></div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen z-0 float-med" loop="" muted="" playsinline="">
<source src="https://cdn.pixabay.com/video/2020/05/24/40061-424759613_large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 deep-space-overlay z-0"></div>

<div className="relative z-20 flex flex-col items-center select-none sun-glow max-w-4xl px-4 text-center pointer-events-none">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter sun-text pb-2">
                IMDARPANA
            </h1>
<p className="text-base md:text-xl tracking-tight text-blue-200 mt-2 font-medium">India's Largest Coaching Center</p>
<p className="text-xs md:text-sm text-slate-400 mt-3 tracking-widest uppercase">Where Future Toppers Rise</p>
<div className="mt-8 pointer-events-auto">
<button className="magnet-btn px-8 py-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 text-sm font-medium rounded-full backdrop-blur-md transition-colors tracking-tight shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:bg-blue-600 hover:text-white" onclick="openModal('contact', 'form')">
                    Begin Your Journey
                </button>
</div>
</div>


<div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-blue-500/20 orbit-spin-1 flex items-center justify-center z-30 pointer-events-none">

<div className="absolute top-0 -translate-y-1/2 flex flex-col items-center planet-container pointer-events-auto cursor-pointer" onclick="openModal('courses', 'eng')">
<div className="orbit-anti-spin-1 flex flex-col items-center relative">
<div className="planet-node w-14 h-14 rounded-full bg-slate-900/90 backdrop-blur-xl border-2 border-blue-400 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
<iconify-icon className="text-2xl" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="planet-details absolute top-full mt-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-3 w-48 text-center shadow-2xl z-50">
<h3 className="text-sm font-medium text-blue-200 tracking-tight">JEE Masterclass</h3>
<p className="text-[10px] text-slate-400 mt-1">Main &amp; Advanced • Top Tier Faculty</p>
</div>
</div>
</div>

<div className="absolute bottom-0 translate-y-1/2 flex flex-col items-center planet-container pointer-events-auto cursor-pointer" onclick="openModal('courses', 'med')">
<div className="orbit-anti-spin-1 flex flex-col items-center relative">
<div className="planet-node w-14 h-14 rounded-full bg-slate-900/90 backdrop-blur-xl border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
<iconify-icon className="text-2xl" icon="solar:stethoscope-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="planet-details absolute top-full mt-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-3 w-48 text-center shadow-2xl z-50">
<h3 className="text-sm font-medium text-emerald-200 tracking-tight">NEET Biology Mastery</h3>
<p className="text-[10px] text-slate-400 mt-1">100% NCERT Coverage • Mock Tests</p>
</div>
</div>
</div>
</div>

<div className="absolute w-[520px] h-[520px] md:w-[720px] md:h-[720px] rounded-full border border-cyan-500/15 orbit-spin-2 flex items-center justify-center z-20 pointer-events-none hidden sm:flex">

<div className="absolute left-0 -translate-x-1/2 flex flex-col items-center planet-container pointer-events-auto cursor-pointer" onclick="openModal('courses', 'mht')">
<div className="orbit-anti-spin-2 flex flex-col items-center relative">
<div className="planet-node w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-xl border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="planet-details absolute top-full mt-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-3 w-40 text-center shadow-2xl z-50">
<h3 className="text-xs font-medium text-cyan-200 tracking-tight">MHT-CET</h3>
<p className="text-[10px] text-slate-400 mt-1">State Level Engineering</p>
</div>
</div>
</div>

<div className="absolute right-0 translate-x-1/2 flex flex-col items-center planet-container pointer-events-auto cursor-pointer" onclick="openModal('courses', 'found')">
<div className="orbit-anti-spin-2 flex flex-col items-center relative">
<div className="planet-node w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-xl border border-purple-400 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
<iconify-icon className="text-xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="planet-details absolute top-full mt-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-3 w-40 text-center shadow-2xl z-50">
<h3 className="text-xs font-medium text-purple-200 tracking-tight">Foundation (8th-10th)</h3>
<p className="text-[10px] text-slate-400 mt-1">Olympiad &amp; NTSE Prep</p>
</div>
</div>
</div>
</div>

<div className="absolute w-[680px] h-[680px] md:w-[980px] md:h-[980px] rounded-full border border-orange-500/10 orbit-spin-3 flex items-center justify-center z-10 pointer-events-none hidden lg:flex">

<div className="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center planet-container pointer-events-auto cursor-pointer" onclick="openModal('courses', 'gov')">
<div className="orbit-anti-spin-3 flex flex-col items-center relative">
<div className="planet-node w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-xl border border-orange-400/50 flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="planet-details absolute top-full mt-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-3 w-40 text-center shadow-2xl z-50">
<h3 className="text-xs font-medium text-orange-200 tracking-tight">SSC &amp; Banking</h3>
<p className="text-[10px] text-slate-400 mt-1">Govt. Job Preparation</p>
</div>
</div>
</div>

<div className="absolute bottom-[20%] left-[10%] -translate-x-1/2 translate-y-1/2 flex flex-col items-center planet-container pointer-events-auto cursor-pointer" onclick="openModal('community', 'groups')">
<div className="orbit-anti-spin-3 flex flex-col items-center relative">
<div className="planet-node w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-sm" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="planet-details absolute top-full mt-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-2 w-24 text-center shadow-2xl z-50">
<h3 className="text-[10px] font-medium text-slate-200 tracking-tight">Community</h3>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative z-10 bg-[#020617] border-t border-white/5 overflow-hidden min-h-[600px] flex items-center" id="stats-section">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05)_0%,rgba(2,6,23,1)_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-100">Constellation of Success</h2>
<p className="text-sm text-slate-400 mt-2">Connecting the dots of millions of dreams across India.</p>
</div>

<div className="relative w-full h-[400px] md:h-[300px]">
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">

<line className="constellation-line" id="line1" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" x1="25%" x2="50%" y1="50%" y2="20%"></line>
<line className="constellation-line" id="line2" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" x1="50%" x2="75%" y1="20%" y2="60%"></line>
<line className="constellation-line" id="line3" opacity="0.5" stroke="rgba(168, 85, 247, 0.3)" stroke-dasharray="4,4" strokeWidth="1.5" x1="25%" x2="75%" y1="50%" y2="60%"></line>
</svg>


<div className="absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group float-med">
<div className="w-3 h-3 rounded-full bg-blue-400 node-glow text-blue-400 z-10 group-hover:scale-150 transition-transform cursor-pointer"></div>
<div className="mt-4 text-center">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-white count-up" data-target="150">0</div>
<div className="text-[10px] uppercase tracking-widest text-blue-300/80 mt-1">Centers Nationwide</div>
</div>
</div>

<div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group float-slow">
<div className="w-4 h-4 rounded-full bg-cyan-400 node-glow text-cyan-400 z-10 group-hover:scale-150 transition-transform cursor-pointer"></div>
<div className="mt-4 text-center">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white count-up" data-suffix="+" data-target="50000">0</div>
<div className="text-[10px] uppercase tracking-widest text-cyan-300/80 mt-1">Students Trained</div>
</div>
</div>

<div className="absolute top-[60%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group float-fast">
<div className="w-3 h-3 rounded-full bg-emerald-400 node-glow text-emerald-400 z-10 group-hover:scale-150 transition-transform cursor-pointer"></div>
<div className="mt-4 text-center">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-white count-up" data-suffix="+" data-target="10000">0</div>
<div className="text-[10px] uppercase tracking-widest text-emerald-300/80 mt-1">Top Ranks Secured</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#020617] border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-100">Voices from the Orbit</h2>
<p className="text-sm text-slate-400 mt-2">Real stories from our universe of learners.</p>
</div>
<div className="relative w-full h-[500px] hidden md:block">

<div className="absolute top-10 left-[10%] w-72 p-5 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-md float-fast shadow-xl">
<div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-xs text-slate-300 mb-4 leading-relaxed">"The structured approach to physics completely shifted my trajectory. Secured AIR 45 in JEE Advanced."</p>
<div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-[10px] text-blue-200">RA</div><div className="text-[10px]"><div className="font-medium text-slate-200">Rahul A.</div></div></div>
</div>

<div className="absolute top-[40%] right-[5%] w-80 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-900/10 backdrop-blur-md float-slow shadow-xl z-10">
<div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-xs text-slate-300 mb-4 leading-relaxed">"Biology modules were a lifesaver. The environment here pushes you to be your absolute best every single day."</p>
<div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-[10px] text-emerald-200">SN</div><div className="text-[10px]"><div className="font-medium text-slate-200">Sneha N.</div><div className="text-slate-500">NEET 710/720</div></div></div>
</div>

<div className="absolute bottom-10 left-[35%] w-72 p-5 rounded-2xl border border-purple-500/20 bg-purple-900/10 backdrop-blur-md float-med shadow-xl">
<div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-xs text-slate-300 mb-4 leading-relaxed">"Started in Foundation batch in 9th grade. The early exposure to conceptual learning gave me a massive head start."</p>
<div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-[10px] text-purple-200">VK</div><div className="text-[10px]"><div className="font-medium text-slate-200">Varun K.</div></div></div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 md:hidden">
<div className="p-5 rounded-2xl border border-white/5 bg-slate-900/50">
<div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-xs text-slate-300 mb-4">"Secured AIR 45 in JEE Advanced."</p>
<div className="text-[10px] font-medium text-slate-200">Rahul A.</div>
</div>
<div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-900/10">
<div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-xs text-slate-300 mb-4">"NEET Score: 710/720. Best faculty."</p>
<div className="text-[10px] font-medium text-slate-200">Sneha N.</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none modal-transition bg-[#020617]/90 backdrop-blur-xl p-4 sm:p-6" id="global-modal">
<div className="relative w-full max-w-5xl h-[80vh] bg-[#0a1f44]/40 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transform scale-95 transition-transform duration-300 backdrop-blur-2xl" id="modal-content-box">
<button className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" onclick="closeModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div className="w-full h-full" id="modal-body">

<div className="modal-section hidden w-full h-full flex flex-col md:flex-row" id="section-courses">
<div className="w-full md:w-56 bg-black/20 border-r border-white/5 flex-shrink-0 flex flex-col">
<div className="p-6 border-b border-white/5">
<h3 className="text-sm font-medium tracking-tight text-slate-200 flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:book-linear"></iconify-icon> Programs</h3>
</div>
<nav className="p-4 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-y-auto">
<button className="tab-btn-courses active flex-shrink-0 w-full text-left px-4 py-2.5 text-xs font-medium text-slate-100 bg-white/10 border-l-2 border-blue-500 rounded-r-lg transition-colors whitespace-nowrap md:whitespace-normal" id="btn-courses-eng" onclick="switchTab('courses', 'eng')">JEE Main &amp; Adv</button>
<button className="tab-btn-courses flex-shrink-0 w-full text-left px-4 py-2.5 text-xs font-medium text-slate-400 border-l-2 border-transparent hover:text-slate-200 hover:bg-white/[0.03] rounded-r-lg transition-colors whitespace-nowrap md:whitespace-normal" id="btn-courses-med" onclick="switchTab('courses', 'med')">NEET Medical</button>
<button className="tab-btn-courses flex-shrink-0 w-full text-left px-4 py-2.5 text-xs font-medium text-slate-400 border-l-2 border-transparent hover:text-slate-200 hover:bg-white/[0.03] rounded-r-lg transition-colors whitespace-nowrap md:whitespace-normal" id="btn-courses-mht" onclick="switchTab('courses', 'mht')">MHT-CET</button>
<button className="tab-btn-courses flex-shrink-0 w-full text-left px-4 py-2.5 text-xs font-medium text-slate-400 border-l-2 border-transparent hover:text-slate-200 hover:bg-white/[0.03] rounded-r-lg transition-colors whitespace-nowrap md:whitespace-normal" id="btn-courses-found" onclick="switchTab('courses', 'found')">Foundation</button>
<button className="tab-btn-courses flex-shrink-0 w-full text-left px-4 py-2.5 text-xs font-medium text-slate-400 border-l-2 border-transparent hover:text-slate-200 hover:bg-white/[0.03] rounded-r-lg transition-colors whitespace-nowrap md:whitespace-normal" id="btn-courses-gov" onclick="switchTab('courses', 'gov')">Govt Exams</button>
</nav>
</div>
<div className="flex-1 p-6 md:p-10 overflow-y-auto relative">

<div className="tab-content-courses block" id="tab-courses-eng">
<h2 className="text-2xl font-semibold tracking-tighter text-slate-100 mb-2">Engineering (JEE)</h2>
<p className="text-xs text-slate-400 mb-8 max-w-2xl">Master JEE Main &amp; Advanced with elite faculty and precise testing methodologies.</p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full">
<h4 className="text-sm font-medium tracking-tight text-slate-200 mb-1">JEE Advanced Target</h4>
<div className="text-[10px] text-blue-400 mb-3 flex gap-2"><span className="px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">1 Year</span><span className="px-2 py-1 bg-white/5 rounded border border-white/10">Class 12th</span></div>
<p className="text-xs text-slate-400 mb-6 flex-1">Intensive coaching covering complete 12th syllabus + 11th revision. High success rate.</p>
<button className="w-full py-2 bg-blue-600/20 text-blue-400 text-xs font-medium rounded hover:bg-blue-600/40 transition-colors" onclick="openModal('contact','form')">Enroll Now</button>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col h-full">
<h4 className="text-sm font-medium tracking-tight text-slate-200 mb-1">Foundation JEE</h4>
<div className="text-[10px] text-blue-400 mb-3 flex gap-2"><span className="px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">2 Years</span><span className="px-2 py-1 bg-white/5 rounded border border-white/10">Class 11th</span></div>
<p className="text-xs text-slate-400 mb-6 flex-1">Pacing fundamentals right. Step-by-step approach from boards to advanced problem solving.</p>
<button className="w-full py-2 bg-blue-600/20 text-blue-400 text-xs font-medium rounded hover:bg-blue-600/40 transition-colors" onclick="openModal('contact','form')">Enroll Now</button>
</div>
</div>
</div>

<div className="tab-content-courses hidden" id="tab-courses-med"><h2 className="text-2xl font-semibold tracking-tighter text-slate-100 mb-2">Medical (NEET)</h2><p className="text-xs text-slate-400">Complete biology mastery and conceptual physics/chemistry for future doctors.</p></div>
<div className="tab-content-courses hidden" id="tab-courses-mht"><h2 className="text-2xl font-semibold tracking-tighter text-slate-100 mb-2">MHT-CET</h2><p className="text-xs text-slate-400">Specialized state-level engineering entrance preparation.</p></div>
<div className="tab-content-courses hidden" id="tab-courses-found"><h2 className="text-2xl font-semibold tracking-tighter text-slate-100 mb-2">Foundation (8th-10th)</h2><p className="text-xs text-slate-400">Olympiad &amp; NTSE preparation to build early advantages.</p></div>
<div className="tab-content-courses hidden" id="tab-courses-gov"><h2 className="text-2xl font-semibold tracking-tighter text-slate-100 mb-2">Govt Exams</h2><p className="text-xs text-slate-400">SSC, Banking, and Railway coaching with shortcut techniques.</p></div>
</div>
</div>

<div className="modal-section hidden w-full h-full flex flex-col md:flex-row" id="section-contact">
<div className="flex-1 flex flex-col lg:flex-row overflow-y-auto">
<div className="tab-content-contact flex w-full flex-col lg:flex-row h-full" id="tab-contact-form">
<div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-100 mb-4">Initialize Sequence</h2>
<p className="text-sm text-slate-400 mb-8">Establish a connection with our expert counselors to map out your orbit to success.</p>
<div className="space-y-6">
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></div>
                                        1800-123-4567 (Toll Free)
                                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon></div>
                                        150+ Centers Nationwide
                                    </div>
</div>
</div>
<div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Transmission Received! We will contact you shortly.');">
<div>
<label className="block text-[10px] uppercase tracking-widest font-medium text-slate-400 mb-1">Cadet Name</label>
<input className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="Enter full name" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest font-medium text-slate-400 mb-1">Comms (Phone)</label>
<input className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="+91" required="" type="tel"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest font-medium text-slate-400 mb-2">Target Orbit</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="sr-only" name="course" type="radio"/>
<div className="border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-300 flex items-center gap-2 transition-colors">
<div className="w-3 h-3 rounded-full border border-slate-500 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full radio-inner transition-transform scale-0"></div></div>
                                                    Engineering
                                                </div>
</label>
<label className="cursor-pointer relative">
<input className="sr-only" name="course" type="radio"/>
<div className="border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-300 flex items-center gap-2 transition-colors">
<div className="w-3 h-3 rounded-full border border-slate-500 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full radio-inner transition-transform scale-0"></div></div>
                                                    Medical
                                                </div>
</label>
</div>
</div>
<button className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors mt-2 shadow-[0_0_15px_rgba(37,99,235,0.3)] magnet-btn" type="submit">
                                        Launch Request
                                    </button>
</form>
</div>
</div>
</div>
</div>

<div className="modal-section hidden w-full h-full flex flex-col md:flex-row" id="section-community">
<div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-6xl text-slate-600 mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tighter text-slate-100">Join the Network</h2>
<p className="text-sm text-slate-400 mt-2 max-w-md">Connect with millions of other aspirants on our dedicated study channels and forums.</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
