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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchPage(pageId) {
            const homeView = document.getElementById('home-view');
            const thankYouView = document.getElementById('thankyou-view');
            
            if(pageId === 'thankyou-view') {
                homeView.classList.add('hidden');
                homeView.classList.remove('block');
                thankYouView.classList.remove('hidden');
                thankYouView.classList.add('flex');
            } else {
                thankYouView.classList.add('hidden');
                thankYouView.classList.remove('flex');
                homeView.classList.remove('hidden');
                homeView.classList.add('block');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleBooking(e) {
            e.preventDefault();
            // In a real app, API logic goes here.
            switchPage('thankyou-view');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer" onclick="switchPage('home-view')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center transform transition group-hover:rotate-12 group-hover:scale-105">
<iconify-icon className="text-white text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900 text-lg">Hidayah Studio</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-slate-900 transition-colors" href="#studio">The Studio</a>
<button className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm shadow-slate-900/10" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                    Book Session
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-16 block transition-opacity duration-500" id="home-view">

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.85] mix-blend-multiply">
<spline-viewer url="https://prod.spline.design/iWc9x3i0JkE4zKjM/scene.splinecode"></spline-viewer>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#fafafa] z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-float">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm text-xs font-medium text-slate-600 mb-8 backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Registration Open for Ramadhan
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient mb-6 leading-tight">
                    Perfect Your Recitation <br className="hidden md:block"/> With Precision
                </h1>
<p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    Hidayah Tajweed Studio blends traditional scholarship with interactive 3D learning environments. Master the Makharij and rhythm of the Quran online.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 group" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                        Start Journey
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2" href="#curriculum">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        View Curriculum
                    </a>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="curriculum">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Immersive Learning</h2>
<p className="text-slate-500 text-base max-w-md mx-auto">Experience a modern curriculum designed to build your foundation step-by-step.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 perspective-wrapper">

<div className="perspective-wrapper group cursor-pointer h-full">
<div className="transform-3d h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
<div className="translate-z-icon w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="translate-z-content">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Makharij Mastery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Articulate each letter perfectly from its exact point of origin using our interactive audio-visual guides.</p>
</div>
</div>
</div>

<div className="perspective-wrapper group cursor-pointer h-full">
<div className="transform-3d h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
<div className="translate-z-icon w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="translate-z-content">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Ahkam Rules</h3>
<p className="text-sm text-slate-500 leading-relaxed">Understand the rules of Noon, Meem, and Madd through clear, structured 3D diagrams and examples.</p>
</div>
</div>
</div>

<div className="perspective-wrapper group cursor-pointer h-full">
<div className="transform-3d h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
<div className="translate-z-icon w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="translate-z-content">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">1-on-1 Feedback</h3>
<p className="text-sm text-slate-500 leading-relaxed">Get live, personalized corrections from certified instructors in a distraction-free digital studio.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="booking">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 w-full">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-6">
<iconify-icon className="text-xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Enroll in Studio</h2>
<p className="text-sm text-slate-500 mb-8">Secure your spot for the upcoming cohort. Fill out the details and we'll setup your digital learning environment.</p>
<form className="space-y-4" onsubmit="handleBooking(event)">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400" placeholder="Aisha" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400" placeholder="Khan" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400" placeholder="aisha@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Current Level</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-700 outline-none" required="">
<option disabled="" selected="" value="">Select your tajweed level</option>
<option value="beginner">Beginner (No prior knowledge)</option>
<option value="intermediate">Intermediate (Know basic rules)</option>
<option value="advanced">Advanced (Refining makharij)</option>
</select>
</div>
<button className="w-full mt-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group transition-all" type="submit">
                                Request Booking
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>

<div className="hidden md:block flex-1 perspective-wrapper h-full min-h-[300px] relative w-full rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200/60 overflow-hidden flex items-center justify-center">
<div className="transform-3d w-full h-full flex items-center justify-center">

<div className="relative w-32 h-40 bg-white rounded-r-xl border border-slate-200 shadow-xl flex items-center justify-center before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-emerald-600 before:rounded-l-md after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-slate-200">
<iconify-icon className="text-emerald-500 text-3xl absolute top-0 right-6 -mt-1" icon="solar:bookmark-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-300 text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200/60 bg-white py-8 text-center text-sm text-slate-500 font-medium">
<p>© 2024 Hidayah Tajweed Studio. All rights reserved.</p>
</footer>
</main>

<main className="hidden flex-grow min-h-screen relative overflow-hidden flex items-center justify-center transition-opacity duration-500" id="thankyou-view">

<div className="absolute inset-0 w-full h-full z-0 pointer-events-auto opacity-70">
<spline-viewer url="https://prod.spline.design/iWc9x3i0JkE4zKjM/scene.splinecode"></spline-viewer>
</div>

<div className="absolute inset-0 bg-[#fafafa]/60 backdrop-blur-[2px] z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-sm w-full px-6">
<div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-10 text-center shadow-2xl shadow-slate-200/50 border border-white/50 relative overflow-hidden transform-gpu hover:scale-105 transition-transform duration-700 ease-out">

<div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center group cursor-pointer">
<div className="pulse-ring" style={{animationDelay: '0s'}}></div>
<div className="pulse-ring" style={{animationDelay: '0.5s'}}></div>
<div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-emerald-200 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
<svg className="w-10 h-10 text-white transform transition-transform duration-500 group-hover:-rotate-12" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path className="checkmark-draw" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="space-y-4 mb-10">
<div className="mask-text-reveal">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900" style={{animationDelay: '0.5s'}}>Request Received!</h2>
</div>
<div className="mask-text-reveal">
<p className="text-slate-600 mt-2 font-normal text-sm" style={{animationDelay: '0.6s'}}>
                            Barakallahu feeki. We have received your booking request for the studio.
                        </p>
</div>
</div>
<div className="flex flex-col gap-3" style={{animation: 'revealUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.8s', opacity: '0', transform: 'translateY(20px)'}}>
<button className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium shadow-lg hover:shadow-emerald-500/10 flex items-center justify-center gap-2 group transition-all" onclick="switchPage('home-view')">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                        Return Home
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
