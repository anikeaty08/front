import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- DATABASE LOGIC ---
        function saveToDatabase(event) {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Add metadata
            const date = new Date();
            data.date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            data.id = Date.now();

            // Save to localStorage
            let leads = JSON.parse(localStorage.getItem('gymLeads') || '[]');
            leads.push(data);
            localStorage.setItem('gymLeads', JSON.stringify(leads));

            // Feedback & Reset
            alert('Initiation requested! Your details have been saved to the database.');
            form.reset();
            renderDatabase();
        }

        function renderDatabase() {
            const tbody = document.getElementById('database-body');
            if(!tbody) return;
            
            const leads = JSON.parse(localStorage.getItem('gymLeads') || '[]');
            
            if(leads.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="7" class="px-4 py-12 text-center">
                            <iconify-icon icon="solar:inbox-linear" width="32" class="text-zinc-700 mb-3 block mx-auto"></iconify-icon>
                            <span class="text-zinc-500 text-sm">No leads found in the database.</span>
                        </td>
                    </tr>`;
                return;
            }

            tbody.innerHTML = leads.map(lead => `
                <tr class="border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                    <td class="px-4 py-4 text-xs text-zinc-400 whitespace-nowrap">${lead.date}</td>
                    <td class="px-4 py-4 text-sm font-medium text-zinc-200 whitespace-nowrap">${lead.fullName}</td>
                    <td class="px-4 py-4 text-sm text-zinc-400 whitespace-nowrap">${lead.phone}</td>
                    <td class="px-4 py-4 text-sm text-zinc-400 whitespace-nowrap">${lead.email || '-'}</td>
                    <td class="px-4 py-4 text-xs text-red-400 font-medium uppercase tracking-wider whitespace-nowrap">${lead.program}</td>
                    <td class="px-4 py-4 text-sm text-zinc-400">
                        <div class="line-clamp-2 max-w-xs" title="${lead.goal || 'No goal provided'}">${lead.goal || '-'}</div>
                    </td>
                    <td class="px-4 py-4 text-right">
                        <button onclick="deleteLead(${lead.id})" class="inline-flex items-center justify-center h-8 w-8 rounded bg-zinc-800/50 text-zinc-500 hover:bg-red-500/10 hover:text-red-500 transition-colors">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                        </button>
                    </td>
                </tr>
            `).reverse().join('');
        }

        function deleteLead(id) {
            if(!confirm('Are you sure you want to delete this lead?')) return;
            let leads = JSON.parse(localStorage.getItem('gymLeads') || '[]');
            leads = leads.filter(l => l.id !== id);
            localStorage.setItem('gymLeads', JSON.stringify(leads));
            renderDatabase();
        }

        function clearDatabase() {
            if(!confirm('WARNING: This will permanently delete all leads. Continue?')) return;
            localStorage.removeItem('gymLeads');
            renderDatabase();
        }

        // --- ROUTER & ANIMATIONS ---
        document.addEventListener('DOMContentLoaded', () => {
            const pages = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');

            function handleRoute() {
                let hash = window.location.hash || '#home';
                
                pages.forEach(page => page.classList.remove('active'));

                const targetPage = document.querySelector(hash);
                if (targetPage) {
                    targetPage.classList.add('active');
                    if (hash === '#admin') renderDatabase(); // Initial render if loading straight to admin
                } else {
                    document.querySelector('#home').classList.add('active');
                }

                navLinks.forEach(link => {
                    if(link.getAttribute('href') === hash) {
                        link.classList.add('text-white');
                        link.classList.remove('text-zinc-400');
                    } else {
                        link.classList.remove('text-white');
                        link.classList.add('text-zinc-400');
                    }
                });

                window.scrollTo({ top: 0, behavior: 'smooth' });
                initObserver();
            }

            window.addEventListener('hashchange', handleRoute);
            handleRoute();

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const targetHash = link.getAttribute('href');
                    if(window.location.hash === targetHash) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            });

            let observer;
            function initObserver() {
                if(observer) observer.disconnect();

                observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                            entry.target.classList.remove('opacity-0', 'translate-y-8');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { root: null, rootMargin: '0px', threshold: 0.1 });

                const activeSection = document.querySelector('.page-section.active');
                if(activeSection) {
                    activeSection.querySelectorAll('.reveal-element').forEach((el) => {
                        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
                        el.classList.remove('opacity-100', 'translate-y-0');
                        observer.observe(el);
                    });
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tighter text-red-600 uppercase flex items-center gap-1 nav-link" href="#home">
                    DEDICATION<span className="text-zinc-100">GYM</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="nav-link text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors" href="#home">Home</a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors" href="#transformations">Results</a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex nav-link items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]" href="#pricing">
                    Join Now
                </a>
<button className="md:hidden p-2 text-zinc-400 hover:text-zinc-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-16" id="app">

<div className="page-section active" id="home">

<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950 z-10"></div>
<img alt="Gym Background" className="h-full w-full object-cover grayscale-[30%] opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 mx-auto max-w-5xl px-4 text-center reveal-element pt-20 pb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-xs font-medium text-red-400 uppercase tracking-widest mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                        Accepting New Members
                    </div>
<h1 className="font-['Oswald',_sans-serif] text-5xl sm:text-6xl md:text-8xl font-semibold uppercase tracking-tight text-zinc-100 leading-[0.9] mb-6">
                        Earn Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 drop-shadow-sm">Transformation</span>
</h1>
<p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 mb-10 font-medium">
                        Forget the shortcuts. No excuses. Just pure, unadulterated dedication. Join the elite house of discipline today and redefine your limits.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="nav-link inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white transition-all hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-95" href="#contact">
                            Start 3-Day Free Trial
                        </a>
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/50 px-8 text-sm font-medium text-zinc-100 transition-all hover:bg-zinc-800 hover:border-zinc-600 active:scale-95 backdrop-blur-sm" href="https://wa.me/123456789" target="_blank">
<iconify-icon className="text-green-500" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            WhatsApp Us
                        </a>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="reveal-element">
<div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-red-500">
<iconify-icon icon="solar:dumbbell-small-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tight text-zinc-100 uppercase mb-3">Elite Equipment</h3>
<p className="text-sm text-zinc-400">Competition-grade racks, tailored machines, and open turf space designed for serious athletes.</p>
</div>
<div className="reveal-element" style={{transitionDelay: '100ms'}}>
<div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-red-500">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tight text-zinc-100 uppercase mb-3">Expert Coaching</h3>
<p className="text-sm text-zinc-400">Certified professionals who walk the walk. We don't just count reps, we build champions.</p>
</div>
<div className="reveal-element" style={{transitionDelay: '200ms'}}>
<div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-red-500">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tight text-zinc-100 uppercase mb-3">Iron Community</h3>
<p className="text-sm text-zinc-400">Surround yourself with individuals who push you to be better. Leave your ego at the door.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-zinc-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal-element">
<h2 className="font-['Oswald',_sans-serif] text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 uppercase mb-4">No Fake Promises</h2>
<div className="h-1 w-12 bg-red-600 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 reveal-element relative overflow-hidden">
<iconify-icon className="absolute -top-4 -right-4 text-zinc-900/50" icon="solar:quote-right-bold" width="120"></iconify-icon>
<div className="flex items-center gap-1 text-red-500 mb-4 relative z-10">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 italic mb-6 relative z-10">"I tried 4 different commercial gyms before finding Dedication. The atmosphere here is different. You feel compelled to work harder. Dropped 20lbs in 3 months."</p>
<div className="flex items-center gap-3 relative z-10">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">MC</div>
<div>
<h4 className="text-xs font-medium text-zinc-100 uppercase tracking-wide">Marcus C.</h4>
<span className="text-xs text-zinc-500">Weight Loss Program</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 reveal-element relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<iconify-icon className="absolute -top-4 -right-4 text-zinc-900/50" icon="solar:quote-right-bold" width="120"></iconify-icon>
<div className="flex items-center gap-1 text-red-500 mb-4 relative z-10">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 italic mb-6 relative z-10">"The PTs here actually care. They fixed my form on day one and built a custom plan. Added 15lbs of lean mass this year. Best investment ever."</p>
<div className="flex items-center gap-3 relative z-10">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">SJ</div>
<div>
<h4 className="text-xs font-medium text-zinc-100 uppercase tracking-wide">Sarah J.</h4>
<span className="text-xs text-zinc-500">Personal Training</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 reveal-element relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<iconify-icon className="absolute -top-4 -right-4 text-zinc-900/50" icon="solar:quote-right-bold" width="120"></iconify-icon>
<div className="flex items-center gap-1 text-red-500 mb-4 relative z-10">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 italic mb-6 relative z-10">"As a beginner, I was intimidated. But the starter program gave me a blueprint. Now I look forward to 6AM workouts. The community is unreal."</p>
<div className="flex items-center gap-3 relative z-10">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">DT</div>
<div>
<h4 className="text-xs font-medium text-zinc-100 uppercase tracking-wide">David T.</h4>
<span className="text-xs text-zinc-500">Beginner Plan</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="services">
<section className="py-24 sm:py-32 relative">
<div className="absolute top-0 w-full h-96 bg-zinc-900/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-zinc-950 to-zinc-950 z-0"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20 reveal-element">
<h1 className="font-['Oswald',_sans-serif] text-4xl md:text-6xl font-medium tracking-tight text-zinc-100 uppercase mb-4">Our Arsenals</h1>
<p className="text-zinc-400 text-sm max-w-2xl mx-auto mb-6">Choose your weapon. Whether you want to shed body fat, pack on dense muscle, or completely rebuild your foundation, we have a battle-tested protocol for you.</p>
<div className="h-1 w-12 bg-red-600 mx-auto rounded-full"></div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 lg:p-10 transition-all duration-300 hover:border-red-500/30 hover:bg-zinc-800/50 reveal-element flex flex-col h-full">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-800/80 text-red-500 ring-1 ring-zinc-700/50 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-['Oswald',_sans-serif] text-2xl font-medium tracking-tight text-zinc-100 uppercase mb-3">1-on-1 Personal Training</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                                Elite, unfiltered focus on your specific goals. Our coaches dissect your biomechanics, fix your nutrition, and hold you relentlessly accountable.
                            </p>
<a className="nav-link inline-flex h-10 w-full items-center justify-center rounded-md border border-zinc-700 bg-transparent px-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100" href="#contact">Book Assessment</a>
</div>

<div className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 lg:p-10 transition-all duration-300 hover:border-red-500/30 hover:bg-zinc-800/50 reveal-element flex flex-col h-full">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-800/80 text-red-500 ring-1 ring-zinc-700/50 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-['Oswald',_sans-serif] text-2xl font-medium tracking-tight text-zinc-100 uppercase mb-3">Fat Shredding Protocol</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                                High-intensity metabolic conditioning mixed with heavy compounds. Designed to preserve hard-earned muscle while incinerating stubborn body fat.
                            </p>
<a className="nav-link inline-flex h-10 w-full items-center justify-center rounded-md border border-zinc-700 bg-transparent px-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100" href="#contact">Start Melting Fat</a>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="pricing">
<section className="py-24 sm:py-32 relative">
<div className="absolute inset-0 bg-zinc-950 z-0"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal-element">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-xs font-medium text-red-400 uppercase tracking-widest mb-4">
                            No Hidden Fees. No B.S.
                        </div>
<h1 className="font-['Oswald',_sans-serif] text-4xl md:text-6xl font-medium tracking-tight text-zinc-100 uppercase mb-4">Choose Your Commitment</h1>
<p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">Invest in yourself. Select the membership tier that matches your dedication level.</p>
<div className="h-1 w-12 bg-red-600 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 text-center reveal-element transition-all hover:border-zinc-700 h-[calc(100%-2rem)] flex flex-col">
<h3 className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tight text-zinc-300 uppercase">Monthly Pass</h3>
<div className="my-8 flex items-baseline justify-center gap-1 font-['Oswald',_sans-serif]">
<span className="text-5xl font-medium text-zinc-100 tracking-tight">$49</span>
<span className="text-sm text-zinc-500 uppercase">/mo</span>
</div>
<a className="nav-link inline-flex w-full h-12 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100 mt-auto" href="#contact">
                                Select Plan
                            </a>
</div>

<div className="relative rounded-2xl border border-red-500/60 bg-zinc-900 p-8 text-center shadow-2xl shadow-red-900/10 md:scale-105 reveal-element z-10 flex flex-col h-full" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
<span className="rounded-full bg-red-600 border border-red-500 px-4 py-1 text-xs font-semibold text-white tracking-widest uppercase shadow-lg shadow-red-600/30">Most Popular</span>
</div>
<h3 className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tight text-zinc-100 uppercase mt-4">3-Month Foundation</h3>
<div className="my-8 flex items-baseline justify-center gap-1 font-['Oswald',_sans-serif]">
<span className="text-6xl font-medium text-white tracking-tight">$119</span>
<span className="text-sm text-zinc-400 uppercase">/total</span>
</div>
<a className="nav-link inline-flex w-full h-12 items-center justify-center rounded-md bg-red-600 px-4 text-sm font-medium text-white transition-all hover:bg-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] mt-auto active:scale-95" href="#contact">
                                Join the House
                            </a>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 text-center reveal-element transition-all hover:border-zinc-700 h-[calc(100%-2rem)] flex flex-col" style={{transitionDelay: '200ms'}}>
<h3 className="font-['Oswald',_sans-serif] text-xl font-medium tracking-tight text-zinc-300 uppercase">VIP Elite</h3>
<div className="my-8 flex items-baseline justify-center gap-1 font-['Oswald',_sans-serif]">
<span className="text-5xl font-medium text-zinc-100 tracking-tight">$199</span>
<span className="text-sm text-zinc-500 uppercase">/mo</span>
</div>
<a className="nav-link inline-flex w-full h-12 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100 mt-auto" href="#contact">
                                Apply for VIP
                            </a>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="contact">
<section className="py-24 sm:py-32 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-red-800 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal-element">
<h1 className="font-['Oswald',_sans-serif] text-4xl md:text-6xl font-medium tracking-tight text-zinc-100 uppercase mb-4">Stop Talking. <span className="text-red-600">Start Doing.</span></h1>
<p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">Drop your details below and one of our elite coaches will contact you to set up your initiation. No obligations, just an opportunity to change your life.</p>
<div className="h-1 w-12 bg-red-600 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-2 space-y-10 reveal-element">
<div className="space-y-8 bg-zinc-900/20 border border-zinc-800 p-8 rounded-2xl">
<div className="flex items-start gap-4">
<div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-red-500 shadow-inner">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 uppercase tracking-wide mb-1">Headquarters</h4>
<p className="text-sm text-zinc-400 leading-relaxed">123 Iron Street<br/>Muscle District, TX 75001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-red-500 shadow-inner">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 uppercase tracking-wide mb-1">Direct Line</h4>
<p className="text-sm text-zinc-400 mb-2">+1 (555) 000-DEDICATION</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 lg:p-10 reveal-element shadow-2xl relative">
<div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<h3 className="font-['Oswald',_sans-serif] text-2xl font-medium tracking-tight text-white uppercase mb-6">Request Initiation</h3>
<form className="space-y-6" onsubmit="saveToDatabase(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-widest">Full Name *</label>
<input className="flex h-12 w-full rounded-md border border-zinc-700 bg-zinc-950/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all shadow-inner" name="fullName" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-widest">Phone Number *</label>
<input className="flex h-12 w-full rounded-md border border-zinc-700 bg-zinc-950/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all shadow-inner" name="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-widest">Email Address</label>
<input className="flex h-12 w-full rounded-md border border-zinc-700 bg-zinc-950/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all shadow-inner" name="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-widest">Program Interest *</label>
<div className="relative">
<select className="flex h-12 w-full appearance-none rounded-md border border-zinc-700 bg-zinc-950/50 px-4 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all shadow-inner cursor-pointer" name="program" required="">
<option className="text-zinc-600" disabled="" selected="" value="">Select an option</option>
<option value="Trial Pass">Claim 3-Day Free Trial (4 Spots Left)</option>
<option value="Fat Shredding">Fat Shredding Protocol</option>
<option value="Hypertrophy">Hypertrophy Mastery</option>
<option value="Personal Training">1-on-1 Personal Training</option>
<option value="General">General Membership</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-widest">Your Current Goal</label>
<textarea className="flex w-full rounded-md border border-zinc-700 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all shadow-inner resize-none" name="goal" placeholder="Tell us what you want to achieve..." rows="3"></textarea>
</div>
<div className="pt-4">
<button className="inline-flex h-12 w-full items-center justify-center rounded-md bg-red-600 px-6 text-sm font-semibold text-white uppercase tracking-wide transition-all hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-900 active:scale-[0.98] shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]" type="submit">
                                        Submit Request
                                    </button>
</div>
</form>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="admin">
<section className="py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12 reveal-element flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-xs font-medium text-red-400 uppercase tracking-widest mb-4">
                                Protected Area
                            </div>
<h1 className="font-['Oswald',_sans-serif] text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 uppercase">Leads Database</h1>
<p className="text-sm text-zinc-400 mt-2">Manage incoming prospect data submitted through the contact form.</p>
</div>
<button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-red-900/50 bg-red-950/20 px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-900/40 hover:text-red-400" onclick="clearDatabase()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon> Clear All Data
                        </button>
</div>
<div className="reveal-element overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow-2xl">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-900 border-b border-zinc-800">
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">Date Joined</th>
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">Prospect Name</th>
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">Phone Number</th>
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">Email Address</th>
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">Program</th>
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest min-w-[200px]">Goal / Notes</th>
<th className="px-4 py-4 text-[10px] font-medium text-zinc-500 uppercase tracking-widest text-right whitespace-nowrap">Action</th>
</tr>
</thead>
<tbody id="database-body">

</tbody>
</table>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 mt-auto">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-zinc-900 pb-8">
<div className="md:col-span-2">
<a className="nav-link font-['Oswald',_sans-serif] text-xl font-medium tracking-tighter text-red-600 uppercase flex items-center gap-1 mb-4" href="#home">
                        DEDICATION<span className="text-zinc-300">GYM</span>
</a>
<p className="text-xs text-zinc-500 max-w-sm leading-relaxed mb-6">Built for the disciplined. We provide the equipment, the knowledge, and the environment. You provide the sweat.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="nav-link hover:text-red-500 transition-colors" href="#services">Programs</a></li>
<li><a className="nav-link hover:text-red-500 transition-colors" href="#pricing">Membership</a></li>
<li><a className="nav-link hover:text-red-500 transition-colors" href="#admin">Admin Database</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="nav-link hover:text-white transition-colors" href="#contact">Find Us</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-1" href="https://wa.me/123456789"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon> WhatsApp Support</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                    © 2024 Dedication Gym House. All rights reserved.
                </p>
</div>
</div>
</footer>



    </>
  );
}
