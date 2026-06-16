import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Flashlight Logic
        document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
            document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
        });

        // Data for Phases
        const phaseData = {
            1: {
                headline: "Map the Landscape.",
                detail: "Understand the difference between Synapse, Fabric, and Databricks. Master VNET injection and Private Endpoints to secure your perimeter.",
                tags: ["Azure Resources", "Networking", "Security Primitives"]
            },
            2: {
                headline: "Draw the Roadmap.",
                detail: "Define constraints. Align technical decisions with business goals using the 6 Technical Vectors. Implement policy-driven governance.",
                tags: ["Governance", "Policy", "Cost Management"]
            },
            3: {
                headline: "Navigate the Change.",
                detail: "From abstract theory to concrete code. Deploying Unity Catalog and Delta Lake with Infrastructure as Code to automate your data estate.",
                tags: ["Bicep", "Terraform", "CI/CD"]
            }
        };

        // Animation State
        let currentPhase = 1;
        let isPaused = false;
        let rotationTimer;
        const ROTATION_SPEED = 6000; // 6 seconds per slide

        function renderPhase(id) {
            // Update Nodes UI
            document.querySelectorAll('.phase-node').forEach(node => {
                // Remove Active Styles
                node.classList.remove('bg-blue-50/50', 'border-blue-500/50', 'ring-1', 'ring-blue-200');
                node.classList.add('bg-white', 'border-zinc-200');
                
                // Reset Text & Icon
                node.querySelector('span').classList.remove('text-blue-900');
                node.querySelector('span').classList.add('text-zinc-500');
                const icon = node.querySelector('svg');
                icon.classList.remove('text-blue-600');
                icon.classList.add('text-zinc-400');
                const iconContainer = node.querySelector('div:first-child');
                iconContainer.classList.remove('border-blue-200', 'bg-white');
                iconContainer.classList.add('border-zinc-200', 'bg-zinc-50');

                // Handle Progress Bar
                const progressBar = node.querySelector('.progress-bar-fill');
                node.classList.remove('is-animating'); // Remove animation class
                progressBar.style.width = '0%'; // Reset width
            });

            // Set Active Node
            const activeNode = document.getElementById(`node-${id}`);
            activeNode.classList.add('bg-blue-50/50', 'border-blue-500/50', 'ring-1', 'ring-blue-200');
            activeNode.classList.remove('bg-white', 'border-zinc-200');
            
            activeNode.querySelector('span').classList.remove('text-zinc-500');
            activeNode.querySelector('span').classList.add('text-blue-900');
            
            const activeIcon = activeNode.querySelector('svg');
            activeIcon.classList.remove('text-zinc-400');
            activeIcon.classList.add('text-blue-600');
            
            const activeIconContainer = activeNode.querySelector('div:first-child');
            activeIconContainer.classList.remove('border-zinc-200', 'bg-zinc-50');
            activeIconContainer.classList.add('border-blue-200', 'bg-white');

            // Handle Progress Animation
            const activeProgressBar = activeNode.querySelector('.progress-bar-fill');
            if (!isPaused) {
                // Trigger reflow to restart animation if needed
                void activeNode.offsetWidth;
                activeNode.classList.add('is-animating');
            } else {
                // If paused (manual click), set to full width immediately without animation
                activeProgressBar.style.width = '100%';
            }

            // Update Content with Fade
            const panel = document.getElementById('panel-content');
            
            // Fade Out
            panel.classList.remove('fade-enter-active');
            panel.classList.add('fade-enter');

            setTimeout(() => {
                const data = phaseData[id];
                
                // Update Tags
                const tagsContainer = document.getElementById('panel-tags');
                tagsContainer.innerHTML = data.tags.map(tag => 
                    `<span class="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[10px] font-mono-custom font-medium uppercase tracking-wide border border-zinc-200">${tag}</span>`
                ).join('');

                // Update Text
                document.getElementById('panel-headline').textContent = data.headline;
                document.getElementById('panel-detail').textContent = data.detail;

                // Fade In
                panel.classList.remove('fade-enter');
                panel.classList.add('fade-enter-active');
            }, 300);
        }

        function startRotation() {
            renderPhase(currentPhase);
            
            rotationTimer = setInterval(() => {
                currentPhase = currentPhase < 3 ? currentPhase + 1 : 1;
                renderPhase(currentPhase);
            }, ROTATION_SPEED);
        }

        function manualSelect(id) {
            // Stop automatic rotation
            isPaused = true;
            clearInterval(rotationTimer);
            
            // Update UI immediately
            currentPhase = id;
            renderPhase(id);
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            startRotation();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flashlight-layer"></div>

<nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-mono-custom font-semibold text-lg">D</div>
<span className="font-mono-custom font-medium tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">DataPlatformAcademy</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#blog">Blog</a>
</div>
<div className="hidden md:flex gap-4 items-center">
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
<a className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm shadow-blue-200" href="#book">
                    Book Platform Call
                </a>
</div>
<button className="md:hidden text-zinc-600">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative w-full pt-20 pb-24 overflow-hidden bg-white border-b border-zinc-100">
<div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                For Senior Data Engineers &amp; Architects
            </div>
<h1 className="font-mono-custom text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-6">
                Stop Fixing Pipelines.<br/>
                Start <span className="text-blue-600">Architecting</span> Platforms.
            </h1>
<p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-2xl mb-10 font-light">
                The industry doesn't need more ticket-closers. Master the Azure Data Platform Blueprint—the proven methodology for building scalable, secure Data Lakehouses on Azure &amp; Databricks.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10" href="#book">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    Book Azure Data Platform Call
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-all" href="#products">
                    View Blueprint
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<div className="w-full border-b border-zinc-100 bg-zinc-50/50 py-12 overflow-hidden hover-pause z-40 relative">
<div className="animate-marquee flex items-center">

<div className="flex items-center gap-16 pr-16 shrink-0">
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-box w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">DATABRICKS</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-infinity w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">AZURE DEVOPS</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-layers w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">TERRAFORM</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-book-marked w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="book-marked" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v8l3-3 3 3V2"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">UNITY CATALOG</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-terminal w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">PYTHON</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-database w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">DELTA LAKE</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-table w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">SQL</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-container w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="container" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.7c0-.6-.4-1.2-1-1.5L12 2 3 6.2c-.6.3-1 .9-1 1.5v8.6c0 .6.4 1.2 1 1.5l9 4.2 9-4.2c.6-.3 1-.9 1-1.5V7.7Z"></path><path d="m3 6 9 4.2 9-4.2"></path><path d="m12 22V10.2"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">DOCKER</span>
</div>
</div>

<div aria-hidden="true" className="flex items-center gap-16 pr-16 shrink-0">
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-box w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">DATABRICKS</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-infinity w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">AZURE DEVOPS</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-layers w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">TERRAFORM</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-book-marked w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="book-marked" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v8l3-3 3 3V2"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">UNITY CATALOG</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-terminal w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">PYTHON</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-database w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">DELTA LAKE</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-table w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">SQL</span>
</div>
<div className="flex items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-container w-5 h-5 text-zinc-400 group-hover:text-blue-600" data-lucide="container" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.7c0-.6-.4-1.2-1-1.5L12 2 3 6.2c-.6.3-1 .9-1 1.5v8.6c0 .6.4 1.2 1 1.5l9 4.2 9-4.2c.6-.3 1-.9 1-1.5V7.7Z"></path><path d="m3 6 9 4.2 9-4.2"></path><path d="m12 22V10.2"></path></svg>
<span className="text-xs font-mono-custom font-medium text-zinc-500">DOCKER</span>
</div>
</div>
</div>
</div>

<section className="bg-zinc-900 py-24 px-6 border-b border-zinc-800 relative z-40">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-900/30 border border-red-800 mb-6 animate-warning cursor-help" title="Warning: Career Stagnation">
<svg className="lucide lucide-alert-triangle w-6 h-6 text-red-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h2 className="font-mono-custom text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Hit the Career Ceiling?
            </h2>
<p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
                You solve complex problems, but your day is consumed by firefighting pipelines and legacy code. To reach the next level, you must stop accepting the <span className="text-red-400 font-medium">status quo</span>.
            </p>

<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-zinc-950 border border-red-900/30 hover:border-red-500/50 hover:bg-red-950/10 rounded-xl p-6 text-left relative overflow-hidden group transition-all duration-300 animate-glitch cursor-not-allowed">
<div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-x-octagon w-12 h-12 text-red-700" data-lucide="x-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 9-6 6"></path><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"></path><path d="m9 9 6 6"></path></svg>
</div>
<h3 className="font-mono-custom text-red-500 text-sm uppercase tracking-widest mb-2 font-bold group-hover:text-red-400">Current State (No Go)</h3>
<div className="space-y-3 font-mono text-sm text-zinc-500 group-hover:text-red-200/70 transition-colors">
<div className="flex items-center gap-2"><span className="text-red-600 font-bold">ERROR</span> Pipeline_Ingest_01 failed</div>
<div className="flex items-center gap-2"><span className="text-amber-600 font-bold">WARN</span> Low memory on Cluster-B</div>
<div className="flex items-center gap-2"><span className="text-zinc-600">INFO</span> Ticket #9228 Pending...</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 to-transparent"></div>
</div>

<div className="bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-950/10 rounded-xl p-6 text-left relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-12 h-12 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-mono-custom text-emerald-500 text-sm uppercase tracking-widest mb-2 font-bold">Target State</h3>
<div className="space-y-3 font-mono text-sm text-zinc-300 group-hover:text-emerald-100 transition-colors">
<div className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automated Infrastructure</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Self-Healing Pipelines</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Governance by Default</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6 relative overflow-hidden z-40" id="products">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

<div className="max-w-5xl mx-auto w-full bg-white rounded-3xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 overflow-hidden relative group">

<div className="border-b border-zinc-100 bg-zinc-50/50 p-8 md:p-10 text-center relative z-10">
<span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-mono-custom font-bold uppercase tracking-widest mb-4 shadow-sm">Coming Soon</span>
<h2 className="font-mono-custom text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
                    The Azure Data Platform Blueprint
                </h2>
<p className="font-body text-zinc-500 text-base md:text-lg max-w-lg mx-auto font-light">
                    A three-phase framework to transition from ad-hoc pipelines to a governed enterprise data estate.
                </p>
</div>

<div className="p-8 md:p-12 relative bg-white">
<div className="relative w-full max-w-4xl mx-auto flex flex-col items-center z-10">

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" id="nodes-wrapper">

<button className="phase-node group relative flex flex-col items-center p-6 rounded-xl border bg-white border-zinc-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 text-center h-full shadow-sm hover:shadow-md overflow-hidden" id="node-1" onclick="manualSelect(1)">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-blue-200 transition-all">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-zinc-400 group-hover:text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 1 19.528 16.32"></path></svg>
</div>
<span className="font-mono-custom font-bold text-zinc-500 group-hover:text-blue-900 text-sm">Phase 1: Knowledge</span>

<div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100">
<div className="progress-bar-fill" id="progress-bar-1"></div>
</div>
</button>

<button className="phase-node group relative flex flex-col items-center p-6 rounded-xl border bg-white border-zinc-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 text-center h-full shadow-sm hover:shadow-md overflow-hidden" id="node-2" onclick="manualSelect(2)">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-blue-200 transition-all">
<svg className="lucide lucide-compass w-5 h-5 text-zinc-400 group-hover:text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
</div>
<span className="font-mono-custom font-bold text-zinc-500 group-hover:text-blue-900 text-sm">Phase 2: Strategy</span>

<div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100">
<div className="progress-bar-fill" id="progress-bar-2"></div>
</div>
</button>

<button className="phase-node group relative flex flex-col items-center p-6 rounded-xl border bg-white border-zinc-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 text-center h-full shadow-sm hover:shadow-md overflow-hidden" id="node-3" onclick="manualSelect(3)">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-blue-200 transition-all">
<svg className="lucide lucide-code-2 w-5 h-5 text-zinc-400 group-hover:text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<span className="font-mono-custom font-bold text-zinc-500 group-hover:text-blue-900 text-sm">Phase 3: Tactics</span>

<div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100">
<div className="progress-bar-fill" id="progress-bar-3"></div>
</div>
</button>
</div>

<div className="w-full text-center min-h-[220px] flex flex-col justify-center relative" id="content-display">

<div className="flex flex-col items-center fade-enter-active" id="panel-content">
<div className="inline-flex gap-2 mb-6" id="panel-tags">

</div>
<h3 className="font-mono-custom text-2xl font-semibold text-zinc-900 mb-4" id="panel-headline">

</h3>
<p className="text-zinc-500 leading-relaxed text-lg max-w-2xl font-light" id="panel-detail">

</p>
</div>
</div>
</div>
</div>

<div className="p-8 bg-zinc-50 border-t border-zinc-100 flex justify-center z-10 relative">
<a className="group inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 hover:shadow-xl hover:-translate-y-0.5" href="#blueprint-details">
                    Explore Data Platform Blueprint
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6 border-b border-zinc-200 relative z-40" id="about">
<div className="max-w-4xl mx-auto">
<h2 className="font-mono-custom text-2xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Led by Industry Experts.</h2>
<div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-md transition-shadow">
<div className="w-full md:w-48 md:h-56 bg-zinc-100 rounded-lg flex-shrink-0 relative overflow-hidden flex items-center justify-center border border-zinc-100">
<svg className="lucide lucide-user w-16 h-16 text-zinc-300 absolute" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-200/50 to-transparent"></div>
</div>
<div className="flex-1">
<div className="mb-4">
<h3 className="font-mono-custom text-xl font-semibold text-zinc-900">Szymon Żaczek, PhD</h3>
<p className="text-blue-600 text-xs font-mono-custom font-medium uppercase tracking-wide mt-1">Data Platform Architect</p>
</div>
<p className="text-sm md:text-base text-zinc-600 leading-7 mb-6 font-light">
                        A Senior Architect leading international teams to build enterprise platforms on Azure. With a background in computational chemistry (PhD) and over a decade in tech, Szymon architected the Data Lakehouse for a major European transportation company.
                    </p>
<div className="flex gap-4 border-t border-zinc-100 pt-6">
<a className="text-zinc-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-zinc-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 border-b border-zinc-200 relative z-40" id="blog">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<h2 className="font-mono-custom text-3xl font-semibold tracking-tight text-zinc-900">Technical Deep Dives</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-blue-600 flex items-center gap-1 transition-colors" href="#">
                    View all articles <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block border border-zinc-200 rounded-xl bg-white hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden flex flex-col h-full relative transition-all hover:-translate-y-1" href="#">
<div className="h-48 w-full bg-zinc-100 relative overflow-hidden">
<img alt="Infrastructure Code" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/f4f4f5/d4d4d8?text=Infrastructure+Code"/>
<div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm border border-zinc-200 text-[10px] font-mono-custom font-bold text-orange-600 uppercase tracking-wide">Infrastructure</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="font-mono-custom text-base font-semibold text-zinc-900 mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                            Bicep vs. Terraform: Managing State in Production
                        </h3>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 group-hover:text-orange-400">
<span>Read Article</span>
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group block border border-zinc-200 rounded-xl bg-white hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden flex flex-col h-full relative transition-all hover:-translate-y-1" href="#">
<div className="h-48 w-full bg-zinc-100 relative overflow-hidden">
<img alt="Architecture Vectors" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/f4f4f5/d4d4d8?text=Architecture+Vectors"/>
<div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm border border-zinc-200 text-[10px] font-mono-custom font-bold text-purple-600 uppercase tracking-wide">Architecture</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="font-mono-custom text-base font-semibold text-zinc-900 mb-3 leading-snug group-hover:text-purple-600 transition-colors">
                            The 6 Technical Vectors: Making Defensible Decisions
                        </h3>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 group-hover:text-purple-400">
<span>Read Article</span>
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group block border border-zinc-200 rounded-xl bg-white hover:shadow-xl hover:shadow-emerald-500/10 overflow-hidden flex flex-col h-full relative transition-all hover:-translate-y-1" href="#">
<div className="h-48 w-full bg-zinc-100 relative overflow-hidden">
<img alt="Unity Catalog" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/f4f4f5/d4d4d8?text=Unity+Catalog"/>
<div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm border border-zinc-200 text-[10px] font-mono-custom font-bold text-emerald-600 uppercase tracking-wide">Governance</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="font-mono-custom text-base font-semibold text-zinc-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                            Unity Catalog: 15-Minute Setup Guide
                        </h3>
<div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 group-hover:text-emerald-400">
<span>Read Article</span>
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-zinc-900 text-white border-t border-zinc-800 py-24 px-6 relative z-40">
<div className="max-w-xl mx-auto text-center">
<h2 className="font-mono-custom text-2xl font-semibold tracking-tight mb-4">
                Keep up with the architecture.
            </h2>
<p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Get our latest Azure Data Platform patterns, blueprints, and deep dives delivered to your inbox as soon as they are published.
            </p>
<form className="flex flex-col sm:flex-row gap-3 w-full">
<input className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-zinc-500 text-white transition-all" placeholder="Engineer@company.com" type="email"/>
<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap" type="submit">
                    Join the List
                </button>
</form>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6 relative z-40">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-5 w-5 bg-zinc-800 rounded text-[9px] font-semibold text-white flex items-center justify-center">D</div>
<span className="text-xs font-mono-custom font-medium uppercase tracking-wider text-zinc-500">Data Platform Academy</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#privacy">Privacy Policy</a>
<a className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-white hover:border-zinc-700 transition-all" href="#contact">
                    Contact Support
                </a>
<div className="text-[11px] font-mono-custom text-zinc-600">© 2024. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
