import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    // 3D Tilt Effect for Cards
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.tilt-card');
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Only apply if mouse is over the card
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            } else {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            }
        });

        // Parallax for Hero Scene
        const heroScene = document.getElementById('pipe-cluster');
        if(heroScene) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            heroScene.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        }
    });

    // Reset transform on mouse leave
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });



    function openBookingModal(zip = '') {
        const modal = document.getElementById('booking-modal');
        const content = document.getElementById('modal-content');
        const zipInput = document.getElementById('modal-zip');
        
        if(zip) zipInput.value = zip;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Animation
        setTimeout(() => {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);

        // Reset steps
        document.getElementById('step-1').classList.remove('hidden');
        document.getElementById('step-2').classList.add('hidden');
        document.getElementById('step-3').classList.add('hidden');
    }

    function closeBookingModal() {
        const modal = document.getElementById('booking-modal');
        const content = document.getElementById('modal-content');
        
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    }

    function checkAvailability() {
        const zip = document.getElementById('modal-zip').value;
        const loading = document.getElementById('zip-loading');
        
        // Backend Simulation Logic
        if (!/^\d{5}$/.test(zip)) {
            alert('Please enter a valid 5-digit US Zip Code.');
            return;
        }

        loading.classList.remove('hidden');
        
        setTimeout(() => {
            loading.classList.add('hidden');
            document.getElementById('step-1').classList.add('hidden');
            document.getElementById('step-2').classList.remove('hidden');
        }, 1500);
    }

    function nextStep(step) {
        if (step === 3) {
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('step-3').classList.remove('hidden');
        }
    }

    function simulateCall() {
        const status = document.getElementById('call-status');
        status.classList.remove('hidden');
        setTimeout(() => {
             window.location.href = 'tel:18005550199';
        }, 1500);
        setTimeout(() => {
             status.classList.add('hidden');
        }, 5000);
    }

    function openChat() {
        alert('Initializing Encrypted Chat Protocol...');
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="scanlines"></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-lg flex items-center justify-center text-white shadow-lg shadow-zinc-900/20 group-hover:rotate-3 transition-transform duration-300">
<span className="font-medium text-lg tracking-tighter">F</span>
</div>
<span className="font-semibold text-lg tracking-tight text-zinc-900">Flow.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors hover:-translate-y-0.5 transform duration-200" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors hover:-translate-y-0.5 transform duration-200" href="#process">Process</a>
<a className="hover:text-zinc-900 transition-colors hover:-translate-y-0.5 transform duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-zinc-800 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] active:scale-95 flex items-center gap-2 group border border-zinc-700" onclick="openBookingModal()">
<span className="hologram-text font-semibold">Book Now</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform text-cyan-400" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden min-h-screen flex items-center justify-center" id="hero-scene">

<div className="absolute inset-0 pointer-events-none perspective-container overflow-hidden">
<div className="preserve-3d relative w-full h-full transition-transform duration-100 ease-out" id="pipe-cluster">

<div className="absolute top-[20%] right-[10%] w-64 h-16 pipe-segment -rotate-12 float-anim z-0 opacity-40 blur-sm"></div>
<div className="absolute top-[40%] -left-[10%] w-96 h-24 pipe-segment rotate-[25deg] float-anim-delay z-0 opacity-30 blur-md"></div>

<div className="hidden lg:block absolute top-[25%] right-[5%] translate-z-20 preserve-3d float-anim">
<div className="w-16 h-80 pipe-segment rotate-12 flex flex-col items-center justify-center">
<div className="w-20 h-10 pipe-joint rounded-lg absolute top-10"></div>
<div className="w-20 h-10 pipe-joint rounded-lg absolute bottom-10"></div>
</div>
</div>

<div className="hidden lg:block absolute bottom-[15%] left-[5%] translate-z-10 preserve-3d float-anim-delay">
<div className="w-80 h-16 pipe-segment -rotate-6 flex items-center justify-around">
<div className="w-10 h-20 pipe-joint rounded-lg"></div>
</div>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10 preserve-3d">
<div className="preserve-3d" id="hero-content">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-zinc-200/50 backdrop-blur-sm text-xs font-medium text-zinc-600 mb-8 shadow-sm hover:scale-105 transition-transform cursor-default translate-z-10 ring-1 ring-green-400/50 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Available 24/7 for Emergency Repairs
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-[1.05] drop-shadow-sm tilt-content">
                    Plumbing done <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">in another dimension.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed font-light translate-z-5">
                    Modern plumbing solutions engineered with precision. We bring depth, clarity, and flow to your infrastructure.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 translate-z-10">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-zinc-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-zinc-900/20 flex items-center justify-center gap-2" href="#book">
                        Request Service
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border border-white text-zinc-700 rounded-2xl font-medium hover:bg-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-zinc-200/50 flex items-center justify-center gap-2" href="#services">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        View Process
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Core Services</h2>
<p className="text-zinc-500 max-w-md">Everything from minor leaks to major pipe overhauls, handled with engineering precision.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px] perspective-container">

<div className="tilt-card md:col-span-2 relative overflow-hidden rounded-3xl bg-white border border-zinc-100 p-10 shadow-xl shadow-zinc-200/40 group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-z-10">
<iconify-icon className="text-blue-600 rotate-12" icon="solar:water-drops-linear" width="150"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10 preserve-3d">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 shadow-md transform translate-z-20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:water-drops-linear" width="28"></iconify-icon>
</div>
<div className="tilt-content">
<h3 className="text-2xl font-medium text-zinc-900 mb-3">Smart Leak Detection</h3>
<p className="text-zinc-500 max-w-md text-sm leading-relaxed">We use acoustic sensors and thermal imaging to locate hidden leaks deep within your infrastructure.</p>
</div>
</div>
</div>

<div className="tilt-card relative overflow-hidden rounded-3xl bg-zinc-900 p-10 text-white shadow-2xl shadow-zinc-900/30 group">
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-0"></div>
<div className="h-full flex flex-col justify-between relative z-10 preserve-3d">
<div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md transform translate-z-20 group-hover:rotate-12 transition-transform">
<iconify-icon icon="solar:flame-linear" width="28"></iconify-icon>
</div>
<div className="tilt-content">
<h3 className="text-2xl font-medium mb-3">Heating Systems</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Tankless upgrades &amp; thermal maintenance.</p>
</div>
</div>
</div>

<div className="tilt-card relative overflow-hidden rounded-3xl bg-white border border-zinc-100 p-10 shadow-xl shadow-zinc-200/40 group">
<div className="h-full flex flex-col justify-between relative z-10 preserve-3d">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 shadow-md transform translate-z-20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" width="28"></iconify-icon>
</div>
<div className="tilt-content">
<h3 className="text-2xl font-medium text-zinc-900 mb-3">Hydro-Jetting</h3>
<p className="text-zinc-500 text-sm leading-relaxed">High pressure clearing for stubborn blockages.</p>
</div>
</div>
</div>

<div className="tilt-card md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-zinc-50 border border-zinc-200 p-10 shadow-xl shadow-zinc-200/40 group">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl opacity-50"></div>
<div className="h-full flex flex-col justify-between relative z-10 preserve-3d">
<div className="flex justify-between items-start transform translate-z-10">
<div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 shadow-sm">
<iconify-icon icon="solar:bell-linear" width="28"></iconify-icon>
</div>
<span className="bg-red-50 text-red-600 border border-red-100/50 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full shadow-sm">Urgent Priority</span>
</div>
<div className="tilt-content">
<h3 className="text-2xl font-medium text-zinc-900 mb-3">Emergency Response</h3>
<p className="text-zinc-500 max-w-md text-sm leading-relaxed">Burst pipe at 3 AM? Our on-call team is ready with fully stocked vans to mitigate damage immediately.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Transparent Estimates</h2>
<p className="text-zinc-500">Configure your needs in real-time.</p>
</div>
<div className="tilt-card bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 p-8 md:p-14 relative preserve-3d">

<div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-zinc-200 shadow-inner"></div>
<div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-zinc-200 shadow-inner"></div>
<div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-zinc-200 shadow-inner"></div>
<div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-zinc-200 shadow-inner"></div>

<div className="mb-12 transform translate-z-10">
<div className="flex justify-between items-center mb-6">
<label className="text-base font-semibold text-zinc-900">Urgency Level</label>
<span className="text-sm text-zinc-500 bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-100">Within 24 Hours</span>
</div>
<div className="relative py-2">
<input className="w-full relative z-20" max="3" min="1" step="1" type="range"/>
</div>
<div className="flex justify-between text-xs text-zinc-400 mt-4 font-medium uppercase tracking-wide">
<span>Flexible</span>
<span>Standard</span>
<span>Emergency</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transform translate-z-10">
<div className="group flex items-center justify-between p-5 rounded-2xl border border-zinc-100 hover:border-zinc-300 bg-zinc-50/50 hover:bg-white transition-all hover:shadow-lg hover:shadow-zinc-100/50 cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Parts Included</span>
</div>
<div className="w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-zinc-900 transition-colors"></div>
</div>
<div className="group flex items-center justify-between p-5 rounded-2xl border border-zinc-100 hover:border-zinc-300 bg-zinc-50/50 hover:bg-white transition-all hover:shadow-lg hover:shadow-zinc-100/50 cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Warranty +</span>
</div>
<div className="w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-zinc-900 transition-colors"></div>
</div>
</div>
<div className="bg-zinc-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transform translate-z-20 shadow-2xl shadow-zinc-900/40 relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-50"></div>
<div className="relative z-10">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Estimated Total</p>
<p className="text-4xl font-semibold text-white tracking-tight">$149<span className="text-lg text-zinc-500 font-normal">.00</span></p>
</div>
<button className="relative z-10 w-full md:w-auto bg-white text-zinc-900 px-8 py-4 rounded-xl text-sm font-bold hover:bg-zinc-100 transition-colors active:scale-95 duration-150">
                        Book Assessment
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center perspective-container">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8">Built on reliability, <br/>driven by quality.</h2>
<p className="text-zinc-500 mb-10 leading-relaxed text-lg">
                    We've reimagined the service experience. No four-hour windows waiting around. We provide real-time tracking of your technician and upfront digital quotes.
                </p>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-900" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Real-time Tracking</h4>
<p className="text-sm text-zinc-500 mt-2">See exactly when your plumber will arrive.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-900" icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Upfront Flat-Rate Pricing</h4>
<p className="text-sm text-zinc-500 mt-2">Know the cost before the work begins.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] flex items-center justify-center perspective-container">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 rounded-[3rem] -rotate-3 transform translate-z-[-50px] opacity-50"></div>
<div className="tilt-card w-[350px] bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] relative preserve-3d">
<div className="absolute top-8 right-8">
<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
</div>
<div className="flex flex-col items-center text-center mt-6 mb-8 transform translate-z-20">
<div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-2xl text-zinc-700 mb-4 border-4 border-white shadow-lg">JD</div>
<h3 className="text-xl font-bold text-zinc-900">John Doe</h3>
<p className="text-sm text-zinc-500">Master Plumber</p>
</div>
<div className="space-y-6 transform translate-z-10">
<div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100">
<div className="flex justify-between text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
<span>Status</span>
<span className="text-zinc-900">Arriving</span>
</div>
<div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-zinc-900 rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div className="flex justify-between text-xs font-medium text-zinc-500 mt-2">
<span>En Route</span>
<span>5 mins</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-zinc-900 text-white h-12 rounded-xl text-sm font-medium shadow-lg shadow-zinc-900/20 hover:scale-105 transition-transform active:bg-green-600 active:text-white ring-2 ring-transparent active:ring-green-400 transition-all duration-200" onclick="simulateCall()">Call</button>
<button className="flex-1 bg-white border border-zinc-200 text-zinc-900 h-12 rounded-xl text-sm font-medium hover:bg-zinc-50 transition-colors">Message</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0B] text-white relative overflow-hidden preserve-3d" id="book">

<div className="absolute bottom-0 left-0 right-0 h-[500px] opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px', transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)'}}>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-20 h-20 mx-auto bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-white/5 border border-white/10 rotate-12 hover:rotate-0 transition-all duration-500">
<iconify-icon className="text-white" icon="solar:calendar-add-linear" width="40"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready to fix the flow?</h2>
<p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">Schedule a visit online in less than 2 minutes. We service the entire metro area.</p>
<form className="max-w-md mx-auto space-y-4 relative group" onsubmit="event.preventDefault(); openBookingModal(this.querySelector('input').value);">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
<div className="relative bg-zinc-900/90 rounded-2xl border border-white/10 p-2 backdrop-blur-xl">
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-zinc-950/50 border border-zinc-700/50 rounded-xl py-4 pl-11 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm font-mono tracking-wide" pattern="[0-9]{5}" placeholder="Enter Zip (All US Areas Supported)" title="Please enter a valid 5-digit US Zip Code" type="text"/>
</div>
<button className="mt-2 w-full bg-white text-zinc-900 font-bold py-4 rounded-xl hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] relative overflow-hidden" type="submit">
<span className="relative z-10">Check Availability</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
</div>
</form>
<p className="mt-8 text-xs text-zinc-500">No credit card required for availability check.</p>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
<span className="font-medium text-xs">F</span>
</div>
<span className="font-semibold text-lg tracking-tight text-zinc-900">Flow.</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        Redefining plumbing services with modern technology, transparent pricing, and unparalleled customer service.
                    </p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-6 text-sm">Services</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors hover:pl-1 duration-200 inline-block" href="#">Leak Detection</a></li>
<li><a className="hover:text-zinc-900 transition-colors hover:pl-1 duration-200 inline-block" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-zinc-900 transition-colors hover:pl-1 duration-200 inline-block" href="#">Water Heaters</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors hover:pl-1 duration-200 inline-block" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors hover:pl-1 duration-200 inline-block" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors hover:pl-1 duration-200 inline-block" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Flow Plumbing Inc. All rights reserved.</p>
<div className="flex gap-6 text-zinc-400">
<a className="hover:text-zinc-900 hover:scale-110 transition-all" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 hover:scale-110 transition-all" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 hover:scale-110 transition-all" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


<div className="hud-float hidden md:block group">
<div className="glass-futuristic p-4 rounded-2xl w-64 transform transition-all duration-500 group-hover:scale-105">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">System Online</span>
</div>
<iconify-icon className="text-zinc-500 animate-spin-slow" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5">
<p className="text-[10px] text-zinc-500 mb-1">Active Technicians</p>
<div className="flex items-end gap-2">
<span className="text-xl font-bold text-white font-mono">142</span>
<span className="text-[10px] text-green-400 mb-1">+3 joined</span>
</div>
</div>
<div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5">
<p className="text-[10px] text-zinc-500 mb-1">Est. Response Time</p>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[85%] relative">
<div className="absolute inset-0 bg-white/30 animate-[shimmer_1s_infinite]"></div>
</div>
</div>
<p className="text-right text-[10px] text-cyan-400 mt-1 font-mono">~45 mins</p>
</div>
<div className="hidden" id="call-status">
<div className="flex items-center gap-2 p-2 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs font-mono">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
<span>Connecting...</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="booking-modal">
<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onclick="closeBookingModal()"></div>
<div className="relative w-full max-w-lg mx-4">
<div className="glass-futuristic bg-[#0A0A0B] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 transform transition-all duration-300 scale-95 opacity-0" id="modal-content">

<div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Service Booking</h3>
<p className="text-xs text-zinc-500 font-mono">SECURE CHANNEL v2.4</p>
</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeBookingModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-8" id="step-1">
<label className="block text-sm font-medium text-zinc-400 mb-2">Verify Location Coverage</label>
<div className="relative">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-white outline-none focus:border-cyan-500 transition-colors font-mono" id="modal-zip" placeholder="Enter 5-digit Zip Code" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<div className="hidden w-4 h-4 border-2 border-zinc-600 border-t-cyan-500 rounded-full animate-spin" id="zip-loading"></div>
</div>
</div>
<p className="text-xs text-zinc-600 mt-3">Accessing National Database...</p>
<button className="w-full mt-6 bg-white text-black font-bold py-3 rounded-xl hover:bg-cyan-50 transition-all" onclick="checkAvailability()">
                    Verify Availability
                </button>
</div>

<div className="hidden p-8" id="step-2">
<div className="flex items-center gap-2 mb-6 text-green-400 text-sm bg-green-900/20 p-2 rounded-lg border border-green-900/50">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
<span>Coverage Confirmed. Technicians Available.</span>
</div>
<h4 className="text-white font-medium mb-4">Select Priority Level</h4>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group" onclick="nextStep(3)">
<div className="text-left">
<div className="text-white font-medium group-hover:text-cyan-400">Emergency Response</div>
<div className="text-xs text-zinc-500">Within 2 hours • +$150 Fee</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-red-500 transition-colors" icon="solar:flame-bold"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group" onclick="nextStep(3)">
<div className="text-left">
<div className="text-white font-medium group-hover:text-cyan-400">Standard Schedule</div>
<div className="text-xs text-zinc-500">Next available slot</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-cyan-400 transition-colors" icon="solar:calendar-add-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden p-10 text-center" id="step-3">
<div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/30">
<iconify-icon icon="solar:verified-check-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Booking Request Sent</h3>
<p className="text-zinc-400 text-sm mb-6">A dispatch coordinator is reviewing your request. You will receive a confirmation SMS shortly.</p>
<button className="bg-zinc-800 text-white px-6 py-2 rounded-lg text-sm hover:bg-zinc-700" onclick="closeBookingModal()">Return to Home</button>
</div>
</div>
</div>
</div>

    </>
  );
}
