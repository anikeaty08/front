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
display: ['Chakra Petch', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#020617',
surface: '#0F172A',
surfaceHighlight: '#1E293B',
primary: '#3B82F6',
accent: '#F97316',
success: '#10B981',
border: 'rgba(255, 255, 255, 0.06)',
},
backgroundImage: {
'subtle-grid': 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(15px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
marquee: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(-100%)' } }
}
}
}
}



        lucide.createIcons();

        // Navigation & Logic
        const screens = ['welcome', 'menu', 'about', 'missions', 'team', 'gallery'];
        const nav = document.getElementById('navbar');
        const header = document.getElementById('header-bar');
        
        function hideAllScreens() {
            screens.forEach(id => {
                const el = document.getElementById(`screen-${id}`);
                if (el) el.classList.add('hidden');
            });
        }

        function navigate(screenId) {
            hideAllScreens();
            if (screenId === 'home') screenId = 'menu';
            
            const target = document.getElementById(`screen-${screenId}`);
            if (target) {
                target.classList.remove('hidden');
                if (screenId === 'menu' || screenId === 'gallery') target.classList.add('flex');
                
                // Animation reset
                target.style.animation = 'none';
                target.offsetHeight; 
                target.style.animation = null; 
            }

            if (screenId === 'welcome') {
                nav.classList.add('hidden');
                header.classList.add('hidden');
                header.classList.remove('flex');
            } else {
                nav.classList.remove('hidden');
                header.classList.remove('hidden');
                header.classList.add('flex');
            }
        }

        function startExperience() {
            setTimeout(() => navigate('menu'), 200);
        }

        // Clock
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
            document.getElementById('clock').innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Data for Modals
        const missionData = {
            'turkey': {
                title: 'OPERATION STARLIGHT',
                subtitle: 'Gaziantep / Nurdagi Sector',
                date: '06 FEB 2023 - 20 FEB 2023',
                coords: '37.1773° N, 36.8665° E',
                desc: 'In response to the 7.8 Mw earthquake, Malaysia deployed SMART Team MAS-01. The team was assigned to Nurdagi, one of the hardest-hit districts. Operations focused on high-density residential collapses ("pancake" failures). The team worked in sub-zero temperatures (-10°C) alongside local AFAD units.',
                duration: '14 Days Continuous',
                force: '142 Personnel (MAS-01/10)',
                casualty: '73 Deceased / 5 Live Saves',
                equipment: 'Delsar LifeDetector, Hydraulic Spreaders, K9 Unit',
                analysis: 'Team successfully breached 7-story reinforced concrete structure to extract family of 5. Utilization of "Cut and Cover" technique was required due to extreme instability of rubble pile.',
                img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'
            },
            'batang': {
                title: 'BATANG KALI LANDSLIDE',
                subtitle: 'Father\'s Organic Farm / Gohtong Jaya',
                date: '16 DEC 2022',
                coords: '3.4217° N, 101.7611° E',
                desc: 'A massive slope failure occurred at a campsite burying 92 victims. 450,000 cubic meters of earth collapsed. SMART was appointed as the lead technical agency for sector search. The site was divided into Sector A (Hillview), Sector B (Farmview), and Sector C (Riverside).',
                duration: '9 Days',
                force: 'Combined Agency Task Force',
                casualty: '31 Deceased / 61 Survivors',
                equipment: 'Ground Penetrating Radar (GPR), Excavators (20T)',
                analysis: 'Soil composition was highly unstable with underground water flow. GPR was critical in identifying biomass anomalies which indicated victim locations at depths exceeding 5 meters.',
                img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop'
            },
            'flood': {
                title: 'OP. MURNI (GREAT FLOOD)',
                subtitle: 'Shah Alam / Hulu Langat',
                date: '18 DEC 2021',
                coords: '3.0738° N, 101.5183° E',
                desc: 'Unprecedented rainfall led to catastrophic flash floods. Taman Sri Muda became completely inaccessible by land. SMART deployed amphibious units and boats for extraction of trapped residents from rooftops.',
                duration: '7 Days',
                force: 'Full Deployment (Red Alert)',
                casualty: 'Multiple Casualties / 2000+ Evacuated',
                equipment: 'Amphibious Rigid Inflatable Boats, Trucks',
                analysis: 'Urban currents were unexpectedly strong (5 knots). Night operations were hampered by power grid failure. Coordinated grid search allowed for 100% coverage of affected sectors.',
                img: 'https://images.unsplash.com/photo-1596707823908-25037d2f95c0?q=80&w=2000&auto=format&fit=crop'
            }
        };

        function openModal(id) {
            const data = missionData[id];
            if(!data) return;
            
            document.getElementById('modal-title').innerText = data.title;
            document.getElementById('modal-subtitle').innerText = data.subtitle;
            document.getElementById('modal-date').innerText = data.date;
            document.getElementById('modal-coords').innerText = data.coords;
            document.getElementById('modal-desc').innerText = data.desc;
            document.getElementById('modal-duration').innerText = data.duration;
            document.getElementById('modal-force').innerText = data.force;
            document.getElementById('modal-casualty').innerText = data.casualty;
            document.getElementById('modal-equipment').innerText = data.equipment;
            document.getElementById('modal-analysis').innerText = data.analysis;
            document.getElementById('modal-img').src = data.img;

            const modal = document.getElementById('mission-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeModal() {
            const modal = document.getElementById('mission-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-subtle-grid bg-[size:50px_50px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80"></div>

<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
</div>

<div className="absolute top-0 w-full h-8 z-50 border-b border-white/5 bg-background/50 backdrop-blur-md flex items-center overflow-hidden">
<div className="flex whitespace-nowrap animate-marquee text-[10px] font-mono text-slate-500 gap-8 uppercase tracking-widest">
<span className="font-poppins" style={{}}>System: SMART-NET V4.2</span>
<span className="font-poppins" style={{}}>Connection: Secure (TLS 1.3)</span>
<span className="font-poppins" style={{}}>Directive: NSC 20</span>
<span className="font-poppins" style={{}}>Node: HQ-Puchong</span>
<span className="font-poppins" style={{}}>Status: READY</span>
<span className="font-poppins" style={{}}>Alert Level: GREEN</span>
<span className="font-poppins" style={{}}>Weather: 32°C / Humidity 75%</span>
<span className="font-poppins" style={{}}>Seismic Sensors: CALIBRATED</span>
<span className="font-poppins" style={{}}>Sat-Link: ACTIVE</span>
</div>
</div>

<header className="hidden absolute top-8 w-full z-40 px-8 py-6 justify-between items-start pointer-events-none" id="header-bar">
<div className="flex flex-col animate-slide-up">
<h1 className="text-2xl tracking-tighter text-white flex items-center gap-3 font-poppins font-bold" style={{}}>
<div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-900 rounded flex items-center justify-center shadow-lg shadow-blue-900/20">
<svg className="lucide lucide-shield-check w-5 h-5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
                SMART
                <span className="text-xs text-slate-600 px-2 py-1 rounded bg-white/5 border border-white/5 font-poppins" style={{}}>INSARAG CERTIFIED</span>
</h1>
<span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 mt-2 pl-11 font-poppins" style={{}}>Special Malaysia Disaster Assistance &amp; Rescue Team</span>
</div>
<div className="flex items-center gap-6 animate-slide-up">
<div className="text-right hidden md:block">
<div className="text-[10px] uppercase text-slate-500 tracking-wider mb-1 font-poppins" style={{}}>Operational Clock</div>
<div className="text-lg text-white tracking-widest font-poppins" id="clock" style={{}}>09:14:15</div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-emerald-500 tracking-wider font-poppins" style={{}}>ONLINE</span>
</div>
<span className="text-[10px] text-slate-500 mt-0.5 font-poppins" style={{}}>LAT: 3.1412 N | LON: <a className="font-poppins" href="tel:101.6865" style={{}}>101.6865</a> E</span>
</div>
</div>
</header>

<nav className="hidden absolute bottom-10 left-1/2 -translate-x-1/2 z-50 animate-slide-up" id="navbar">
<div className="flex items-center gap-3 p-2.5 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/20">
<button className="p-3.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all group relative" onclick="navigate('home')">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-poppins" style={{}}>Dashboard</div>
</button>
<div className="w-px h-8 bg-white/5"></div>
<div className="flex items-center gap-1">
<button className="p-3.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all group relative" onclick="navigate('about')">
<svg className="lucide lucide-file-key w-5 h-5" data-lucide="file-key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.1"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m10 15 1 1"></path><path d="m11 14-4.586 4.586"></path><circle cx="5" cy="20" r="2"></circle></svg>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-poppins" style={{}}>Directives</div>
</button>
<button className="p-3.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all group relative" onclick="navigate('missions')">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-poppins" style={{}}>Deployment Logs</div>
</button>
<button className="p-3.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all group relative" onclick="navigate('team')">
<svg className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-poppins" style={{}}>Personnel</div>
</button>
<button className="p-3.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all group relative" onclick="navigate('gallery')">
<svg className="lucide lucide-aperture w-5 h-5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-poppins" style={{}}>Visual Intel</div>
</button>
</div>
<div className="w-px h-8 bg-white/5"></div>
<button className="p-3.5 rounded-xl hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-all group relative" onclick="navigate('welcome')">
<svg className="lucide lucide-power w-5 h-5" data-lucide="power" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-poppins" style={{}}>Log Out</div>
</button>
</div>
</nav>

<main className="flex-1 w-full h-full relative z-30">

<section className="flex flex-col z-50 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="screen-welcome">
<div className="w-full max-w-md relative space-y-8">

<div className="absolute -left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
<div className="absolute -right-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
<div className="text-center space-y-6 animate-slide-up">
<div className="inline-flex items-center justify-center w-24 h-24 mb-4 relative">
<div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 border border-white/10 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
<svg className="lucide lucide-shield w-10 h-10 text-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="">
<div className="text-xs text-primary mb-2 tracking-[0.5em] font-poppins" style={{}}>NATIONAL SECURITY COUNCIL</div>
<h1 className="text-6xl font-bold text-white tracking-tight font-poppins">SMART</h1>
<p className="text-slate-500 text-xs mt-3 font-poppins" style={{}}>RESTRICTED ACCESS // AUTHORIZED PERSONNEL ONLY</p>
</div>
</div>

<div className="space-y-3 animate-slide-up animate-delay-100 pt-8">
<div className="flex gap-4">
<button className="flex-1 group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition-all duration-300" onclick="startExperience()">
<div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all group-hover:h-full h-0"></div>
<div className="flex items-center justify-between">
<div className="text-left">
<span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-poppins" style={{}}>Language</span>
<span className="block group-hover:text-primary transition-colors text-xl text-white font-poppins" style={{}}>Bahasa Melayu</span>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
<button className="flex-1 group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition-all duration-300" onclick="startExperience()">
<div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all group-hover:h-full h-0"></div>
<div className="flex items-center justify-between">
<div className="text-left">
<span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-poppins" style={{}}>Language</span>
<span className="block text-xl text-white group-hover:text-primary transition-colors font-poppins" style={{}}>English</span>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</div>
<div className="text-center pt-12 animate-slide-up animate-delay-200">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-slate-500 font-poppins" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Secure Connection Established
                    </div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden items-center justify-center p-8 pt-20" id="screen-menu">
<div className="w-full max-w-7xl h-[75vh] grid grid-cols-12 grid-rows-6 gap-4">

<div className="col-span-12 md:col-span-8 row-span-4 bento-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer" onclick="navigate('missions')">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 bg-noise opacity-30"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs text-white tracking-wide font-poppins" style={{}}>LIVE OPERATIONS</span>
</div>
<svg className="lucide lucide-external-link w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<div>
<h2 className="text-5xl text-white mb-4 tracking-tight font-poppins font-bold" style={{}}>Active Deployments</h2>
<p className="text-slate-400 text-sm max-w-lg leading-relaxed border-l-2 border-primary/50 pl-4 font-poppins" style={{}}>
                                Access classified real-time situational reports (SITREPs) from ongoing international and domestic Heavy USAR operations. 
                            </p>
<div className="grid grid-cols-3 gap-4 mt-8 max-w-lg">
<div>
<div className="text-2xl text-white font-poppins font-bold" style={{}}>142</div>
<div className="text-[10px] uppercase text-slate-500 font-poppins" style={{}}>Personnel Deployed</div>
</div>
<div>
<div className="text-2xl text-white font-poppins font-bold" style={{}}>12</div>
<div className="text-[10px] uppercase text-slate-500 font-poppins" style={{}}>K9 Units Active</div>
</div>
<div>
<div className="text-2xl text-white font-poppins font-bold" style={{}}>IEC</div>
<div className="text-[10px] uppercase text-slate-500 font-poppins" style={{}}>INSARAG Classification</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 row-span-3 bento-card rounded-3xl p-6 relative overflow-hidden group cursor-pointer" onclick="navigate('about')">
<div className="absolute top-0 right-0 p-8 opacity-5">
<svg className="lucide lucide-fingerprint w-40 h-40" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<svg className="lucide lucide-file-text w-5 h-5 text-white" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-2xl text-white mb-2 font-poppins font-bold" style={{}}>Directives</h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4 font-poppins" style={{}}>NSC Directive No. 20: Policy and Mechanism of National Disaster Management.</p>
<div className="mt-auto flex items-center gap-2 text-xs font-mono text-primary">
<span className="font-poppins" style={{}}>VIEW MANDATE</span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 row-span-3 bento-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500 uppercase font-poppins" style={{}}>HQ Status</span>
<svg className="lucide lucide-signal w-4 h-4 text-emerald-500" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-sm text-slate-300 font-poppins" style={{}}>Readiness</span>
<span className="text-sm text-emerald-400 font-poppins" style={{}}>98.5%</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-sm text-slate-300 font-poppins" style={{}}>Logistics</span>
<span className="text-sm text-white font-poppins" style={{}}>AVAILABLE</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-sm text-slate-300 font-poppins" style={{}}>Air Wing</span>
<span className="text-sm text-yellow-400 font-poppins" style={{}}>STANDBY</span>
</div>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-4 row-span-2 bento-card rounded-3xl p-6 relative group cursor-pointer overflow-hidden" onclick="navigate('team')">
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<h3 className="text-lg text-white font-poppins" style={{}}>Personnel</h3>
<p className="text-xs text-slate-400 font-poppins" style={{}}>Composition &amp; Specialists</p>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-8 row-span-2 bento-card rounded-3xl p-6 relative group cursor-pointer overflow-hidden" onclick="navigate('gallery')">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col justify-center h-full max-w-md">
<h3 className="text-lg text-white mb-1 font-poppins" style={{}}>Operational Archive</h3>
<p className="text-xs text-slate-400 font-poppins" style={{}}>Restricted media access: Training simulations and field documentation.</p>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden p-8 pt-28 overflow-y-auto no-scrollbar" id="screen-missions">
<div className="max-w-6xl mx-auto pb-32">
<div className="flex justify-between items-end mb-8 animate-fade-in border-b border-white/10 pb-6">
<div>
<h2 className="text-3xl text-white font-poppins font-bold" style={{}}>Mission Logs</h2>
<p className="text-slate-500 text-sm mt-1 font-poppins" style={{}}>DATABASE ACCESS LEVEL 5 // TOP SECRET</p>
</div>
<div className="flex gap-3">
<div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-400 font-poppins" style={{}}>FILTER: ALL</div>
<div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-400 font-poppins" style={{}}>SORT: DATE_DESC</div>
</div>
</div>
<div className="space-y-3">

<div className="group flex items-center gap-6 p-4 rounded-xl border border-white/5 bg-surface/40 hover:bg-surface/80 hover:border-primary/30 transition-all cursor-pointer animate-slide-up" onclick="openModal('turkey')">
<div className="w-20 h-20 shrink-0 rounded bg-slate-800 relative overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 grid grid-cols-12 gap-4 items-center">
<div className="col-span-5">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] tracking-wider font-poppins" style={{}}>CRITICAL</span>
<span className="text-[10px] text-slate-500 font-poppins" style={{}}>FEB 2023</span>
</div>
<h3 className="text-lg text-white group-hover:text-primary transition-colors font-poppins" style={{}}>Op. Starlight (Turkey)</h3>
<p className="text-xs text-slate-400 mt-1 font-poppins" style={{}}>Gaziantep Earthquake Response</p>
</div>
<div className="col-span-3">
<div className="text-[10px] uppercase text-slate-500 mb-1 font-poppins" style={{}}>Coordinates</div>
<div className="text-xs text-slate-300 font-poppins" style={{}}>37.0662° N, 37.3833° E</div>
</div>
<div className="col-span-3">
<div className="text-[10px] uppercase text-slate-500 mb-1 font-poppins" style={{}}>Casualties Recovered</div>
<div className="text-xs text-slate-300 font-poppins" style={{}}>72 Deceased / 5 Live</div>
</div>
<div className="col-span-1 flex justify-end">
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-600 group-hover:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>

<div className="group flex items-center gap-6 p-4 rounded-xl border border-white/5 bg-surface/40 hover:bg-surface/80 hover:border-primary/30 transition-all cursor-pointer animate-slide-up animate-delay-100" onclick="openModal('batang')">
<div className="w-20 h-20 shrink-0 rounded bg-slate-800 relative overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 grid grid-cols-12 gap-4 items-center">
<div className="col-span-5">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] tracking-wider font-poppins" style={{}}>HIGH RISK</span>
<span className="text-[10px] text-slate-500 font-poppins" style={{}}>DEC 2022</span>
</div>
<h3 className="text-lg text-white group-hover:text-primary transition-colors font-poppins" style={{}}>Batang Kali Landslide</h3>
<p className="text-xs text-slate-400 mt-1 font-poppins" style={{}}>Father's Organic Farm Sector A-C</p>
</div>
<div className="col-span-3">
<div className="text-[10px] uppercase text-slate-500 mb-1 font-poppins" style={{}}>Depth</div>
<div className="text-xs text-slate-300 font-poppins" style={{}}>~30m Soil Depth</div>
</div>
<div className="col-span-3">
<div className="text-[10px] uppercase text-slate-500 mb-1 font-poppins" style={{}}>Assets Used</div>
<div className="text-xs text-slate-300 font-poppins" style={{}}>GPR, K9, Excavators</div>
</div>
<div className="col-span-1 flex justify-end">
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-600 group-hover:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>

<div className="group flex items-center gap-6 p-4 rounded-xl border border-white/5 bg-surface/40 hover:bg-surface/80 hover:border-primary/30 transition-all cursor-pointer animate-slide-up animate-delay-200" onclick="openModal('flood')">
<div className="w-20 h-20 shrink-0 rounded bg-slate-800 relative overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1 grid grid-cols-12 gap-4 items-center">
<div className="col-span-5">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] tracking-wider font-poppins" style={{}}>DOMESTIC</span>
<span className="text-[10px] text-slate-500 font-poppins" style={{}}>DEC 2021</span>
</div>
<h3 className="text-lg text-white group-hover:text-primary transition-colors font-poppins" style={{}}>Op. Murni (Great Flood)</h3>
<p className="text-xs text-slate-400 mt-1 font-poppins" style={{}}>Sri Muda &amp; Hulu Langat Evacuation</p>
</div>
<div className="col-span-3">
<div className="text-[10px] uppercase text-slate-500 mb-1 font-poppins" style={{}}>Water Level</div>
<div className="text-xs text-slate-300 font-poppins" style={{}}>Peaked 4.5 Meters</div>
</div>
<div className="col-span-3">
<div className="text-[10px] uppercase text-slate-500 mb-1 font-poppins" style={{}}>Survivors</div>
<div className="text-xs text-slate-300 font-poppins" style={{}}>2,400+ Evacuated</div>
</div>
<div className="col-span-1 flex justify-end">
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-600 group-hover:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden p-8 pt-28 overflow-y-auto no-scrollbar" id="screen-team">
<div className="max-w-7xl mx-auto pb-32">
<div className="flex justify-between items-end mb-10 animate-fade-in border-b border-white/10 pb-6">
<div>
<h2 className="text-3xl text-white font-poppins font-bold" style={{}}>Unit Composition</h2>
<p className="text-slate-500 text-sm mt-1 max-w-xl font-poppins" style={{}}>
                            A unified multi-agency force amalgamating elite personnel from PDRM (Police), JBPM (Fire &amp; Rescue), and ATM (Armed Forces).
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bento-card p-0 rounded-2xl overflow-hidden group animate-slide-up hover:ring-1 hover:ring-primary/50 transition-all">
<div className="relative h-60 bg-surface">
<img className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] text-white font-poppins" style={{}}>PDRM ATTACHMENT</div>
</div>
<div className="p-5 border-t border-white/5">
<div className="text-[10px] text-primary uppercase tracking-wider mb-1 font-poppins" style={{}}>Tactical Command</div>
<h3 className="text-lg text-white font-poppins" style={{}}>Incident Commander</h3>
<div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Service</div>
<div className="text-xs text-white font-poppins" style={{}}>15 Years</div>
</div>
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Specialty</div>
<div className="text-xs text-white font-poppins" style={{}}>Ops Mgmt</div>
</div>
</div>
</div>
</div>

<div className="bento-card p-0 rounded-2xl overflow-hidden group animate-slide-up animate-delay-100 hover:ring-1 hover:ring-primary/50 transition-all">
<div className="relative h-60 bg-surface">
<img className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] text-white font-poppins" style={{}}>K9 UNIT</div>
</div>
<div className="p-5 border-t border-white/5">
<div className="text-[10px] text-primary uppercase tracking-wider mb-1 font-poppins" style={{}}>Biological Detection</div>
<h3 className="text-lg text-white font-poppins" style={{}}>K9 Handler</h3>
<div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Partner</div>
<div className="text-xs text-white font-poppins" style={{}}>"Blake" (Passed)</div>
</div>
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Specialty</div>
<div className="text-xs text-white font-poppins" style={{}}>Cadaver/Live</div>
</div>
</div>
</div>
</div>

<div className="bento-card p-0 rounded-2xl overflow-hidden group animate-slide-up animate-delay-200 hover:ring-1 hover:ring-primary/50 transition-all">
<div className="relative h-60 bg-surface">
<img className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] text-white font-poppins" style={{}}>JBPM ATTACHMENT</div>
</div>
<div className="p-5 border-t border-white/5">
<div className="text-[10px] text-primary uppercase tracking-wider mb-1 font-poppins" style={{}}>Engineering</div>
<h3 className="text-lg text-white font-poppins" style={{}}>Structural Specialist</h3>
<div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Tools</div>
<div className="text-xs text-white font-poppins" style={{}}>Theodolite/GPR</div>
</div>
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Specialty</div>
<div className="text-xs text-white font-poppins" style={{}}>Collapse Analysis</div>
</div>
</div>
</div>
</div>

<div className="bento-card p-0 rounded-2xl overflow-hidden group animate-slide-up animate-delay-300 hover:ring-1 hover:ring-primary/50 transition-all">
<div className="relative h-60 bg-surface">
<img className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] text-white font-poppins" style={{}}>ATM ATTACHMENT</div>
</div>
<div className="p-5 border-t border-white/5">
<div className="text-[10px] text-primary uppercase tracking-wider mb-1 font-poppins" style={{}}>Medical Wing</div>
<h3 className="text-lg text-white font-poppins" style={{}}>Trauma Paramedic</h3>
<div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Cert</div>
<div className="text-xs text-white font-poppins" style={{}}>ALS/PHTLS</div>
</div>
<div>
<div className="text-[10px] text-slate-500 font-poppins" style={{}}>Specialty</div>
<div className="text-xs text-white font-poppins" style={{}}>Field Amputation</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden p-8 pt-28 overflow-y-auto no-scrollbar" id="screen-about">
<div className="max-w-6xl mx-auto pb-32">
<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 mb-4 animate-fade-in">
<h2 className="text-3xl text-white font-poppins font-bold" style={{}}>Agency Directive &amp; Profile</h2>
</div>

<div className="col-span-12 md:col-span-8 bento-card rounded-3xl p-8 animate-slide-up">
<div className="flex items-start gap-4 mb-6">
<svg className="lucide lucide-scale w-8 h-8 text-primary mt-1" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
<div>
<h3 className="text-xl text-white font-poppins" style={{}}>NSC Directive No. 20</h3>
<p className="text-xs text-slate-500 mt-1 font-poppins" style={{}}>EFFECTIVE DATE: 1997 (REVISED)</p>
</div>
</div>
<p className="text-slate-300 leading-7 text-sm font-poppins" style={{}}>
                            The Special Malaysia Disaster Assistance and Rescue Team (SMART) was established in 1994 following the Highland Towers tragedy. It operates directly under the National Security Council (Majlis Keselamatan Negara) directive to provide specialized rescue capabilities for complex disasters that exceed the capacity of standard emergency services.
                        </p>
<p className="text-slate-300 leading-7 text-sm mt-4 font-poppins" style={{}}>
                            The team is internationally certified by the United Nations (INSARAG) as a Heavy USAR Team, capable of self-sufficient deployment for 10 days in international disaster zones.
                        </p>
</div>

<div className="col-span-12 md:col-span-4 space-y-4">
<div className="bento-card rounded-2xl p-6 animate-slide-up animate-delay-100">
<div className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-poppins" style={{}}>Classification</div>
<div className="text-3xl text-white flex items-center gap-2 font-poppins font-bold" style={{}}>
                                HEAVY USAR
                            </div>
<div className="flex items-center gap-2 mt-2 text-emerald-400 text-xs font-poppins" style={{}}>
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> INSARAG IEC 2016
                            </div>
</div>
<div className="bento-card rounded-2xl p-6 animate-slide-up animate-delay-200">
<div className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-poppins" style={{}}>Mobilization Time</div>
<div className="text-3xl text-white flex items-center gap-2 font-poppins font-bold" style={{}}>
                                &lt; 2 HOURS
                            </div>
<div className="text-xs text-slate-500 mt-2 font-poppins" style={{}}>Ready for takeoff</div>
</div>
</div>

<div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
<div className="bento-card rounded-2xl p-6 animate-slide-up animate-delay-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors">
<svg className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-white mb-2 font-poppins" style={{}}>Structural Collapse</h3>
<p className="text-xs text-slate-500 leading-relaxed font-poppins" style={{}}>Breaching and shoring of reinforced concrete. Confined space entry utilizing electronic search cams and seismic sensors.</p>
</div>
<div className="bento-card rounded-2xl p-6 animate-slide-up animate-delay-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors">
<svg className="lucide lucide-mountain w-6 h-6" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
<h3 className="text-white mb-2 font-poppins" style={{}}>High Angle Rescue</h3>
<p className="text-xs text-slate-500 leading-relaxed font-poppins" style={{}}>Rope rescue techniques for vertical environments including skyscrapers, cliffs, and deep ravines.</p>
</div>
<div className="bento-card rounded-2xl p-6 animate-slide-up animate-delay-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors">
<svg className="lucide lucide-waves w-6 h-6" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<h3 className="text-white mb-2 font-poppins" style={{}}>Maritime Operations</h3>
<p className="text-xs text-slate-500 leading-relaxed font-poppins" style={{}}>Underwater search and recovery capability combined with swift water rescue for flood disasters.</p>
</div>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden items-center justify-center p-0" id="screen-gallery">
<div className="w-full h-full overflow-x-auto no-scrollbar flex items-center gap-6 px-12 py-20 snap-x snap-mandatory">

<div className="snap-center shrink-0 w-[50vw] h-[60vh] bento-card p-0 rounded-3xl overflow-hidden relative group border-0">
<img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-poppins" style={{}}>IMG_8992.RAW</span>
<span className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-poppins" style={{}}>TRAINING</span>
</div>
<h3 className="text-3xl text-white mb-2 font-poppins font-bold" style={{}}>INSARAG Recertification</h3>
<p className="text-slate-300 text-sm max-w-md font-poppins" style={{}}>Joint exercise simulating a 7.2 magnitude earthquake event in an urban environment. Evaluated by UN classifiers.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[50vw] h-[60vh] bento-card p-0 rounded-3xl overflow-hidden relative group border-0">
<img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-poppins" style={{}}>IMG_2201.RAW</span>
<span className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-poppins" style={{}}>FIELD OPS</span>
</div>
<h3 className="text-3xl text-white mb-2 font-poppins font-bold" style={{}}>Confined Space Entry</h3>
<p className="text-slate-300 text-sm max-w-md font-poppins" style={{}}>Technical team utilizing hydraulic shoring to stabilize a collapsed tunnel entry point during Operation Starlight.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[50vw] h-[60vh] bento-card p-0 rounded-3xl overflow-hidden relative group border-0">
<img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-poppins" style={{}}>IMG_4412.RAW</span>
<span className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-poppins" style={{}}>LOGISTICS</span>
</div>
<h3 className="text-3xl text-white mb-2 font-poppins font-bold" style={{}}>Heavy Machinery</h3>
<p className="text-slate-300 text-sm max-w-md font-poppins" style={{}}>Deployment of 20-ton excavators for debris clearing in Sector B. Precision operation to avoid secondary collapse.</p>
</div>
</div>
</div>
</section>

<div className="hidden absolute inset-0 z-[100] bg-black/80 backdrop-blur-md items-center justify-center p-8 transition-opacity duration-300" id="mission-modal">
<div className="w-full max-w-6xl bg-[#0B1121] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-slide-up flex h-[80vh] relative">
<button className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10" onclick="closeModal()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="w-5/12 relative h-full bg-slate-900 border-r border-white/5">
<img className="w-full h-full object-cover opacity-80" id="modal-img" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-[10px] text-primary mb-2 font-poppins" style={{}}>SITUATION REPORT IMAGE A-01</div>
<div className="h-px w-full bg-white/20 mb-4"></div>
<div className="flex justify-between text-xs text-slate-400 font-mono">
<span id="modal-date"></span>
<span id="modal-coords"></span>
</div>
</div>
</div>

<div className="w-7/12 p-10 overflow-y-auto custom-scrollbar flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400 tracking-widest font-poppins" style={{}}>DECLASSIFIED</div>
<div className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-[10px] text-primary tracking-widest font-poppins" style={{}}>SMART OPS LOG</div>
</div>
<h2 className="text-4xl font-display font-medium text-white mb-2" id="modal-title"></h2>
<h3 className="text-lg text-slate-500 font-light mb-8" id="modal-subtitle"></h3>
<div className="space-y-8">

<div>
<div className="text-xs text-white uppercase tracking-widest border-l-2 border-primary pl-3 mb-3 font-poppins" style={{}}>Mission Abstract</div>
<p className="text-slate-300 text-sm leading-7 font-light" id="modal-desc"></p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-poppins" style={{}}>Duration</span>
<span className="text-white font-mono" id="modal-duration"></span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-poppins" style={{}}>Force Strength</span>
<span className="text-white font-mono" id="modal-force"></span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-poppins" style={{}}>Casualties / Survivors</span>
<span className="text-white font-mono" id="modal-casualty"></span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-poppins" style={{}}>Equipment</span>
<span className="text-xs text-slate-300" id="modal-equipment"></span>
</div>
</div>

<div>
<div className="text-xs text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-3 mb-3 font-poppins" style={{}}>Operational Analysis</div>
<p className="text-slate-400 text-xs leading-6 font-mono bg-black/20 p-4 rounded-lg border border-white/5" id="modal-analysis"></p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
