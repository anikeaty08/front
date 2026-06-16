import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
nutran: {
base: '#FFFFFF',
brand: '#F5841A',   /* Arch Orange extracted from image */
brand_dark: '#C25E00',
green: '#3A6B46',   /* Sierra Vegetation Green */
stone: '#78716C',   /* Arch Stone */
dark: '#1C1917',    /* Warm Black */
gray: '#FAFAF9',    /* Warm Gray bg */
light: '#F5F5F4',   /* Stone Light */
blue: '#386985',    /* Muted Sky Blue */
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



            (function() {
                const triggerBtn = document.getElementById('nav-trigger-btn');
                const dropdown = document.getElementById('nav-dropdown-card');
                const icon = document.getElementById('nav-icon');
                let isOpen = false;

                function toggleMenu(event) {
                    if(event) event.stopPropagation();
                    isOpen = !isOpen;

                    if (isOpen) {
                        dropdown.classList.remove('opacity-0', 'invisible', 'scale-95', 'translate-y-2');
                        dropdown.classList.add('opacity-100', 'visible', 'scale-100', 'translate-y-0');
                        triggerBtn.classList.add('bg-nutran-dark', 'text-white');
                        triggerBtn.classList.remove('bg-white/80', 'text-nutran-dark');
                        icon.setAttribute('icon', 'lucide:x');
                    } else {
                        dropdown.classList.add('opacity-0', 'invisible', 'scale-95', 'translate-y-2');
                        dropdown.classList.remove('opacity-100', 'visible', 'scale-100', 'translate-y-0');
                        triggerBtn.classList.remove('bg-nutran-dark', 'text-white');
                        triggerBtn.classList.add('bg-white/80', 'text-nutran-dark');
                        icon.setAttribute('icon', 'lucide:menu');
                    }
                }

                if(triggerBtn) triggerBtn.addEventListener('click', toggleMenu);
                document.addEventListener('click', function(event) {
                    if (isOpen && !dropdown.contains(event.target) && !triggerBtn.contains(event.target)) {
                        toggleMenu();
                    }
                });
            })();
        


                (function() {
                    const track = document.getElementById('hero-scroll-track');
                    const card = document.getElementById('morphing-card');
                    const initialContent = document.getElementById('hero-initial-content');
                    const finalHeader = document.getElementById('final-header');

                    function getConfig() {
                        const width = window.innerWidth;
                        const isMobile = width < 768;
                        return {
                            finalWidth: isMobile ? width * 0.92 : Math.min(width * 0.95, 1600),
                            finalHeight: isMobile ? 400 : 600,
                            finalRadius: isMobile ? 24 : 48,
                            finalTopMargin: isMobile ? 180 : 350
                        };
                    }
                    
                    function handleScroll() {
                        if (!track || !card) return;
                        const config = getConfig();
                        const rect = track.getBoundingClientRect();
                        const endScroll = track.offsetHeight - window.innerHeight;
                        let scrolled = -rect.top; 
                        
                        let progress = Math.max(0, Math.min(scrolled / (endScroll * 0.6), 1));
                        
                        const windowWidth = window.innerWidth;
                        const currentWidth = windowWidth - (progress * (windowWidth - config.finalWidth));
                        const windowHeight = window.innerHeight;
                        const currentHeight = windowHeight - (progress * (windowHeight - config.finalHeight));
                        const currentMargin = progress * config.finalTopMargin;
                        const currentRadius = progress * config.finalRadius;

                        card.style.width = `${currentWidth}px`;
                        card.style.height = `${currentHeight}px`;
                        card.style.borderRadius = `${currentRadius}px`;
                        card.style.marginTop = `${currentMargin}px`;
                        
                        if (initialContent) {
                            initialContent.style.opacity = Math.max(0, 1 - (progress * 3));
                        }
                        
                        let headerOpacity = 0;
                        if (progress > 0.5) {
                            headerOpacity = (progress - 0.5) * 2;
                        }
                        if (finalHeader) {
                            finalHeader.style.opacity = Math.min(headerOpacity, 1);
                        }
                    }

                    window.addEventListener('scroll', handleScroll, { passive: true });
                    window.addEventListener('resize', handleScroll, { passive: true });
                    handleScroll();
                })();
            


        window.openBookingModal = function() {
            const el = document.getElementById('booking-modal');
            el.style.display = 'flex';
            setTimeout(() => {
                el.classList.remove('hidden', 'opacity-0');
                el.firstElementChild.classList.remove('scale-95');
                el.firstElementChild.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        };

        window.closeBookingModal = function() {
            const el = document.getElementById('booking-modal');
            el.classList.add('opacity-0');
            el.firstElementChild.classList.remove('scale-100');
            el.firstElementChild.classList.add('scale-95');
            setTimeout(() => {
                el.classList.add('hidden');
                el.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        };

        window.handleBookingSubmit = function(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin" width="24"></iconify-icon>';
            
            setTimeout(() => {
                btn.innerHTML = 'Availability Confirmed!';
                btn.classList.remove('bg-nutran-dark');
                btn.classList.add('bg-nutran-green');
                
                setTimeout(() => {
                    window.closeBookingModal();
                    setTimeout(() => {
                        btn.innerHTML = originalContent;
                        btn.disabled = false;
                        btn.classList.add('bg-nutran-dark');
                        btn.classList.remove('bg-nutran-green');
                        e.target.reset();
                    }, 500);
                }, 1000);
            }, 1500);
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="z-50 pointer-events-none w-full absolute top-0 left-0" id="global-nav">

<div className="z-10 absolute top-8 left-8">
<a className="pointer-events-auto block group" href="#">
<div className="flex items-center gap-2">
<div className="bg-nutran-brand text-white p-2.5 rounded-xl shadow-lg shadow-nutran-brand/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:bus" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-nutran-dark leading-none">La Nutran</span>
<span className="text-[10px] uppercase tracking-widest text-nutran-dark/50 font-semibold">Ruta Peregrino</span>
</div>
</div>
</a>
</div>

<div className="fixed pointer-events-auto z-50 transition-transform duration-500 ease-in-out top-6 right-6" id="smart-nav-root" style={{transform: 'translateY(0px)'}}>
<div className="flex gap-3 relative items-center">

<div className="js-nav-item hidden md:flex transition-all duration-300 hover:bg-white/90 bg-white/80 h-12 border border-nutran-dark/5 rounded-full px-6 backdrop-blur-md items-center shadow-sm hover:shadow-md">
<div className="flex gap-6 items-center">
<a className="hover:text-nutran-brand transition-colors text-sm font-medium text-nutran-dark/80" href="#">Destinations</a>
<a className="hover:text-nutran-brand transition-colors text-sm font-medium text-nutran-dark/80" href="#">Schedule</a>
<a className="hover:text-nutran-brand transition-colors text-sm font-medium text-nutran-dark/80" href="#">Pilgrimage</a>
</div>
<div className="w-px h-4 bg-nutran-dark/10 mx-6"></div>
<button className="hover:text-nutran-brand transition-colors text-sm font-semibold text-nutran-dark">ES</button>
</div>

<button className="z-50 js-nav-item flex hover:bg-nutran-brand hover:text-white transition-all duration-300 active:scale-95 text-nutran-dark bg-white/80 w-12 h-12 border border-nutran-dark/5 rounded-full relative backdrop-blur-md items-center justify-center shadow-sm hover:shadow-md" id="nav-trigger-btn">
<iconify-icon icon="lucide:menu" id="nav-icon" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<div className="flex flex-col transform transition-all duration-300 origin-top-right bg-white/95 opacity-0 w-[320px] max-w-lg border border-nutran-dark/5 rounded-[24px] p-4 absolute top-full right-0 shadow-2xl backdrop-blur-xl translate-y-2 scale-95 invisible" id="nav-dropdown-card">
<div className="flex flex-col gap-1">
<a className="group flex items-center justify-between hover:bg-nutran-light transition-colors py-3 px-4 rounded-xl" href="#">
<span className="group-hover:text-nutran-brand transition-colors text-base font-medium text-nutran-dark/90">Our Routes</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-nutran-brand" icon="lucide:map" width="18"></iconify-icon>
</a>
<a className="group flex items-center justify-between hover:bg-nutran-light transition-colors py-3 px-4 rounded-xl" href="#">
<span className="group-hover:text-nutran-brand transition-colors text-base font-medium text-nutran-dark/90">Pilgrim Guide</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-nutran-brand" icon="lucide:book-open" width="18"></iconify-icon>
</a>
<a className="group flex items-center justify-between hover:bg-nutran-light transition-colors py-3 px-4 rounded-xl" href="#">
<span className="group-hover:text-nutran-brand transition-colors text-base font-medium text-nutran-dark/90">Safety &amp; Fleet</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-nutran-brand" icon="lucide:shield-check" width="18"></iconify-icon>
</a>
<a className="group flex items-center justify-between hover:bg-nutran-light transition-colors py-3 px-4 rounded-xl" href="#">
<span className="group-hover:text-nutran-brand transition-colors text-base font-medium text-nutran-dark/90">Contact</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-nutran-brand" icon="lucide:phone" width="18"></iconify-icon>
</a>
</div>
<div className="border-t border-nutran-dark/10 mt-3 pt-3">
<button className="w-full flex items-center justify-center gap-2 bg-nutran-brand hover:bg-nutran-brand_dark text-white font-semibold h-11 rounded-lg shadow-lg shadow-nutran-brand/20 transition-all active:scale-95 text-sm" onclick="window.openBookingModal()">
<span>Book a Trip</span>
<iconify-icon icon="lucide:ticket" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</nav>
<main>

<header className="bg-nutran-light w-full h-[300vh] relative" id="hero-scroll-track">
<div className="sticky flex flex-col overflow-hidden w-full h-screen z-10 top-0 items-center justify-start">

<div className="z-10 flex flex-col transition-opacity duration-300 text-center w-full px-6 absolute top-[15%] items-center" id="final-header">
<div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-nutran-dark/5 shadow-sm">
<span className="w-2 h-2 rounded-full bg-nutran-brand animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-nutran-dark/60">Routes Open Daily</span>
</div>
<h2 className="cursor-default text-4xl md:text-7xl font-semibold tracking-tight text-nutran-dark mb-4">
                        The Gateway to the<br/><span className="text-nutran-brand">Sierra Madre</span>
</h2>
<p className="cursor-default text-nutran-dark/60 md:text-xl text-lg font-medium max-w-2xl mx-auto">
                        Safe passage from Puerto Vallarta to the historic towns of Mascota &amp; Talpa.
                    </p>
</div>

<div className="relative bg-nutran-dark overflow-hidden shadow-2xl z-20" id="morphing-card" style={{width: '100%', height: '600px', borderRadius: '40px', marginTop: '350px'}}>

<img alt="Road to Sierra Madre" className="opacity-95 w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&amp;w=2946&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-nutran-dark/80 via-nutran-dark/10 to-transparent"></div>

<div className="flex flex-col pb-12 md:pb-20 absolute inset-0 justify-end" id="hero-initial-content">
<div className="px-6 md:px-16 w-full max-w-7xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nutran-brand/90 backdrop-blur-md border border-white/10 text-white mb-6">
<iconify-icon icon="lucide:quote" width="12"></iconify-icon>
<span className="text-[11px] font-bold uppercase tracking-widest">Alabado Sea Jesucristo</span>
</div>
<h1 className="leading-tight text-4xl md:text-6xl text-white font-medium tracking-tight max-w-4xl drop-shadow-sm">
                                "Peregrino": May the Savior guide your steps on the journey.
                            </h1>
<div className="mt-8 flex gap-4">
<button className="bg-white text-nutran-brand hover:bg-nutran-light transition-colors px-6 py-3 rounded-lg font-semibold text-sm" onclick="window.openBookingModal()">
                                    Book Your Seat
                                </button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2">
<span>View Route</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>


</header>

<div className="relative z-30 bg-nutran-gray -mt-32 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">

<section className="w-full pt-16 pb-16 border-b border-nutran-dark/5 bg-white">
<div className="px-6 md:px-12 max-w-7xl mx-auto">
<p className="text-center text-nutran-dark/40 text-xs font-bold uppercase tracking-widest mb-10">Connecting Coast &amp; Mountain</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
<div className="flex items-center gap-3 group cursor-default opacity-60 hover:opacity-100 transition-opacity">
<div className="p-2.5 rounded-lg bg-nutran-blue/10 text-nutran-blue group-hover:bg-nutran-blue group-hover:text-white transition-colors">
<iconify-icon icon="lucide:waves" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-nutran-dark">Puerto Vallarta</span>
</div>
<div className="flex items-center gap-2 opacity-30">
<div className="w-2 h-2 rounded-full bg-nutran-dark"></div>
<div className="w-2 h-2 rounded-full bg-nutran-dark"></div>
<div className="w-2 h-2 rounded-full bg-nutran-dark"></div>
</div>
<div className="flex items-center gap-3 group cursor-default opacity-60 hover:opacity-100 transition-opacity">
<div className="p-2.5 rounded-lg bg-nutran-green/10 text-nutran-green group-hover:bg-nutran-green group-hover:text-white transition-colors">
<iconify-icon icon="lucide:trees" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-nutran-dark">Mascota</span>
</div>
<div className="flex items-center gap-2 opacity-30">
<div className="w-2 h-2 rounded-full bg-nutran-dark"></div>
<div className="w-2 h-2 rounded-full bg-nutran-dark"></div>
<div className="w-2 h-2 rounded-full bg-nutran-dark"></div>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="p-2.5 rounded-lg bg-nutran-brand text-white shadow-lg shadow-nutran-brand/30">
<iconify-icon icon="lucide:church" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-nutran-dark">Talpa de Allende</span>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 bg-nutran-gray relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">

<div className="flex flex-col justify-start gap-8 lg:sticky lg:top-32 h-fit lg:self-start">
<div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-nutran-brand/10 text-nutran-brand border border-nutran-brand/20">
<span className="text-[10px] font-bold uppercase tracking-wider">The La Nutran Way</span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] text-nutran-dark">
                            A journey of<br/>faith &amp; nature.
                        </h2>
<p className="text-xl leading-relaxed text-nutran-dark/60 font-medium">
                            Traverse the lush green mountains of Jalisco. Whether you are a pilgrim visiting the Virgin of Talpa or an adventurer exploring the magic towns, we ensure your arrival is safe.
                        </p>
<div className="flex gap-8 pt-4">
<div className="flex flex-col gap-1 border-l-2 border-nutran-brand pl-4">
<span className="text-3xl font-bold text-nutran-dark">12</span>
<span className="text-sm text-nutran-dark/50 font-medium uppercase tracking-wide">Daily Departures</span>
</div>
<div className="flex flex-col gap-1 border-l-2 border-nutran-green pl-4">
<span className="text-3xl font-bold text-nutran-dark">3h 20m</span>
<span className="text-sm text-nutran-dark/50 font-medium uppercase tracking-wide">Scenic Route</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white group hover:border-nutran-green/30 border border-transparent p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-nutran-green/5 relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-nutran-green/10 text-nutran-green flex items-center justify-center mb-6">
<iconify-icon icon="lucide:leaf" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-nutran-dark mb-3">Mascota Magic Town</h3>
<p className="text-base text-nutran-dark/60 font-medium leading-relaxed mb-6">
                                    The "Emerald of the Sierra". Known for its unfinished temple, pine forests, and cool mountain climate.
                                </p>
<a className="inline-flex items-center gap-2 text-nutran-green font-bold text-sm hover:gap-3 transition-all" href="#">
<span>Explore Mascota</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-nutran-green/5 rounded-full blur-3xl group-hover:bg-nutran-green/10 transition-all"></div>
</div>

<div className="bg-nutran-dark text-white group p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 shadow-2xl relative overflow-hidden">

<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1596306499300-0b7b1689b9e6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-nutran-brand/20 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-nutran-brand text-white flex items-center justify-center mb-6 shadow-lg shadow-nutran-brand/20">
<iconify-icon icon="lucide:church" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight text-white mb-3">Talpa de Allende</h3>
<p className="text-base text-white/70 font-medium leading-relaxed mb-6">
                                    Home to the "Virgen del Rosario". Join thousands of pilgrims who pass through the arches to find peace and tradition.
                                </p>
<a className="inline-flex items-center gap-2 text-nutran-brand font-bold text-sm hover:gap-3 transition-all" href="#">
<span>Pilgrimage Info</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="md:rounded-t-[5rem] -mt-16 z-30 bg-nutran-dark text-white rounded-t-[3rem] pt-32 pb-32 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-nutran-brand rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-nutran-green rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Our Route Network</h2>
<p className="text-xl font-light opacity-60 max-w-2xl mx-auto mb-24">
                    Climbing from sea level to 4,000ft through the heart of the Sierra.
                </p>

<div className="w-full overflow-x-auto pb-12 hide-scrollbar">
<div className="min-w-[800px] flex flex-col items-center">

<div className="border border-white/10 rounded-full px-8 py-4 bg-white/5 backdrop-blur-md relative z-10 hover:bg-white/10 transition-colors group cursor-default">
<div className="flex items-center gap-3">
<iconify-icon className="text-nutran-blue" icon="lucide:sun" width="20"></iconify-icon>
<span className="text-xl font-medium tracking-tight">Puerto Vallarta</span>
</div>
</div>

<div className="h-16 w-px bg-gradient-to-b from-white/10 to-white/40"></div>

<div className="flex flex-col items-center relative">
<div className="w-2 h-2 bg-white/50 rounded-full"></div>
<span className="text-[10px] uppercase tracking-widest opacity-40 mt-2 absolute left-6 w-32 text-left">Las Palmas</span>
</div>
<div className="h-16 w-px bg-gradient-to-b from-white/40 to-white/20"></div>

<div className="relative pt-8 w-full flex justify-center gap-24">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-white/20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-px bg-white/20"></div>

<div className="flex flex-col items-center mt-8 opacity-50 hover:opacity-100 transition-opacity">
<div className="border border-white/5 rounded-2xl px-5 py-3 bg-white/5 w-48 text-center">
<span className="block text-base font-medium">San Sebastián</span>
<span className="text-[10px] uppercase tracking-wider text-white/40">Historic</span>
</div>
</div>

<div className="flex flex-col items-center">
<div className="border border-nutran-green/50 rounded-2xl px-8 py-5 bg-nutran-green/10 w-64 text-center backdrop-blur-md hover:scale-105 transition-transform border-b-4 border-b-nutran-green">
<span className="block text-xl font-semibold mb-1">Mascota</span>
<div className="flex items-center justify-center gap-1 text-nutran-green text-[10px] font-bold uppercase tracking-widest">
<iconify-icon icon="lucide:star" width="10"></iconify-icon>
                                        Pueblo Mágico
                                    </div>
</div>
<div className="h-12 w-px bg-nutran-brand/50 mt-2"></div>

<div className="border border-nutran-brand rounded-2xl px-10 py-6 bg-nutran-brand text-white relative z-10 shadow-[0_0_50px_rgba(245,132,26,0.4)] hover:scale-105 transition-transform mt-2">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-nutran-brand px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Destino Final</div>
<div className="flex flex-col items-center gap-1">
<iconify-icon icon="lucide:church" width="28"></iconify-icon>
<span className="text-2xl font-bold tracking-tight">Talpa de Allende</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-nutran-gray py-24 px-6 rounded-t-[4rem] -mt-12 z-40 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
<div>
<h2 className="text-4xl md:text-6xl font-semibold text-nutran-dark tracking-tight mb-4">Journey Stats</h2>
<p className="text-xl text-nutran-dark/60 font-medium">Elevation profile from coast to sierra.</p>
</div>
<div className="flex justify-start lg:justify-end">
<button className="flex items-center gap-2 bg-nutran-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-nutran-brand_dark transition-colors shadow-lg shadow-nutran-brand/20 active:scale-95" onclick="window.openBookingModal()">
<span>Book Your Seat</span>
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-white border border-nutran-dark/5 rounded-[2rem] p-8 flex flex-col justify-between h-[400px] relative overflow-hidden shadow-sm">
<div className="flex justify-between items-start z-10 relative">
<h3 className="text-xl font-bold text-nutran-dark">Elevation Profile</h3>
<div className="text-nutran-green flex gap-1 text-xs font-bold bg-nutran-green/10 px-3 py-1.5 rounded-full items-center">
<iconify-icon icon="lucide:trending-up"></iconify-icon>
                                +1,240m Gain
                            </div>
</div>

<div className="w-full h-56 mt-auto flex items-end gap-1 z-10 relative px-4">

<div className="w-full bg-nutran-blue/20 rounded-t-sm h-[10%] group relative hover:bg-nutran-blue/40 transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-100 text-nutran-dark/40">PV</div>
</div>
<div className="w-full bg-nutran-green/20 rounded-t-sm h-[25%]"></div>
<div className="w-full bg-nutran-green/30 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-nutran-green/40 rounded-t-sm h-[65%]"></div>
<div className="w-full bg-nutran-green/60 rounded-t-sm h-[85%] group relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-nutran-green opacity-100">Mascota</div>
</div>
<div className="w-full bg-nutran-brand/40 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-nutran-brand/60 rounded-t-sm h-[80%] group relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-nutran-brand opacity-100">Talpa</div>
</div>
</div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="flex flex-col gap-6 h-[400px]">

<div className="flex-1 bg-nutran-blue text-white rounded-[2rem] p-8 flex flex-col justify-center gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 transform group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:map-pin" width="80"></iconify-icon>
</div>
<span className="text-5xl font-bold tracking-tighter relative z-10">118<span className="text-2xl opacity-60 ml-1 font-medium">km</span></span>
<div className="flex items-center gap-2 opacity-80 relative z-10">
<span className="text-sm font-bold uppercase tracking-wider">Distance Covered</span>
</div>
</div>

<div className="flex-1 bg-nutran-brand text-white rounded-[2rem] p-8 flex flex-col justify-center gap-2 relative overflow-hidden group shadow-lg shadow-nutran-brand/20">
<div className="absolute top-0 right-0 p-6 opacity-20 transform group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:star" width="80"></iconify-icon>
</div>
<span className="text-5xl font-bold tracking-tighter relative z-10">4.9<span className="text-2xl opacity-60 ml-1 font-medium">/5</span></span>
<div className="flex items-center gap-2 opacity-80 relative z-10">
<span className="text-sm font-bold uppercase tracking-wider">Pilgrim Rating</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-nutran-dark text-white pt-24 pb-12 rounded-t-[3rem]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="bg-nutran-brand text-white p-2 rounded-lg">
<iconify-icon icon="lucide:bus" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight">La Nutran</span>
</div>
<p className="text-white/60 max-w-sm font-light leading-relaxed">
                        Transporting dreams and prayers from the coast to the mountains. "Alabado Sea Jesucristo".
                    </p>
</div>
<div className="grid grid-cols-2 gap-12">
<div className="flex flex-col gap-4">
<h4 className="font-bold text-white text-sm uppercase tracking-wider">Routes</h4>
<a className="text-white/60 hover:text-nutran-brand transition-colors text-sm" href="#">Puerto Vallarta</a>
<a className="text-white/60 hover:text-nutran-brand transition-colors text-sm" href="#">Mascota</a>
<a className="text-white/60 hover:text-nutran-brand transition-colors text-sm" href="#">Talpa de Allende</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-white text-sm uppercase tracking-wider">Company</h4>
<a className="text-white/60 hover:text-white transition-colors text-sm" href="#">About Us</a>
<a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Paquetería</a>
<a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Contact</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
<p>© 2024 La Nutran Transport. Puerto Vallarta, Jalisco.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-[9999] items-center justify-center bg-nutran-dark/80 backdrop-blur-md transition-all duration-300 p-4 opacity-0" id="booking-modal" style={{transition: 'opacity 0.3s ease-out', display: 'none'}}>
<div className="bg-white w-full max-w-[500px] rounded-[32px] p-8 relative shadow-2xl transform scale-95 transition-all duration-300 flex flex-col gap-6" style={{transition: 'transform 0.3s ease-out'}}>
<button className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-nutran-dark hover:bg-nutran-light transition-colors" onclick="window.closeBookingModal()">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nutran-brand/10 text-nutran-brand text-[10px] font-bold uppercase tracking-wider mb-4 border border-nutran-brand/10">
                    Online Reservation
                </div>
<h3 className="text-3xl font-bold tracking-tight text-nutran-dark mb-2">Plan Your Pilgrimage</h3>
<p className="text-nutran-dark/60 font-medium leading-relaxed">Secure your seat for the journey to the Sierra.</p>
</div>
<form className="flex flex-col gap-4" onsubmit="window.handleBookingSubmit(event)">
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold uppercase tracking-wider text-nutran-dark/50 pl-1">Destination</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="destination" type="radio"/>
<div className="border border-slate-200 peer-checked:border-nutran-green peer-checked:bg-nutran-green/5 peer-checked:text-nutran-green rounded-xl py-3 text-center text-sm font-semibold transition-all hover:bg-slate-50 flex flex-col items-center gap-1">
<iconify-icon icon="lucide:leaf" width="16"></iconify-icon>
                                Mascota
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="destination" type="radio"/>
<div className="border border-slate-200 peer-checked:border-nutran-brand peer-checked:bg-nutran-brand/5 peer-checked:text-nutran-brand rounded-xl py-3 text-center text-sm font-semibold transition-all hover:bg-slate-50 flex flex-col items-center gap-1">
<iconify-icon icon="lucide:church" width="16"></iconify-icon>
                                Talpa
                            </div>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold uppercase tracking-wider text-nutran-dark/50 pl-1">Date</label>
<input className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-nutran-brand focus:bg-white focus:ring-4 focus:ring-nutran-brand/10 transition-all text-nutran-dark" required="" type="date"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold uppercase tracking-wider text-nutran-dark/50 pl-1">Passengers</label>
<select className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-nutran-brand focus:bg-white focus:ring-4 focus:ring-nutran-brand/10 transition-all text-nutran-dark">
<option>1 Person</option>
<option>2 People</option>
<option>3 People</option>
<option>4+ Group</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold uppercase tracking-wider text-nutran-dark/50 pl-1">Phone Number</label>
<input className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-nutran-brand focus:bg-white focus:ring-4 focus:ring-nutran-brand/10 transition-all text-nutran-dark" placeholder="+52 (322) ..." required="" type="tel"/>
</div>
<div className="pt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-10 h-6 bg-slate-200 peer-checked:bg-nutran-brand rounded-full transition-colors"></div>
<div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
</div>
<span className="text-sm font-medium text-nutran-dark/70 group-hover:text-nutran-dark transition-colors">Round trip?</span>
</label>
</div>
<button className="mt-2 w-full bg-nutran-dark text-white font-bold tracking-wide text-sm py-4 rounded-xl hover:bg-nutran-brand hover:shadow-lg hover:shadow-nutran-brand/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
<span>Check Availability</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</form>
</div>
</div>


    </>
  );
}
