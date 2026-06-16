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



        // Initialize Icons
        lucide.createIcons();

        // Reveal Animation Logic (Intersection Observer)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger when 15% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Handle stagger items within the section if they exist
                        const staggerItems = entry.target.querySelectorAll('.stagger-item');
                        staggerItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                            }, index * 100);
                        });
                        
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-section').forEach(section => {
                observer.observe(section);
            });
        });

        // Add subtle parallax to floating elements on mouse move (Desktop only)
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                document.querySelectorAll('.bg-grid-pattern').forEach(el => {
                    el.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/50">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-default">
<div className="bg-slate-900 text-white p-1.5 rounded-md shadow-sm group-hover:bg-blue-600 transition-colors">
<i className="w-4 h-4" data-lucide="scale"></i>
</div>
<span className="text-xs font-semibold tracking-widest uppercase text-slate-900">Truth Inquiry</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden md:inline text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    File: 8391-B // Reliability
                </span>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
</div>
</nav>

<main className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-32 perspective-container">

<header className="min-h-[80vh] flex flex-col justify-center items-center text-center reveal-section mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100/50 border border-yellow-200 text-yellow-700 text-xs font-medium uppercase tracking-wide mb-8 hover:bg-yellow-100 transition-colors cursor-default">
<i className="w-3 h-3" data-lucide="shield-check"></i>
<span>Forensic Analysis Confirmed</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                Why trust<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">the Bible?</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                A historical cold-case investigation examining the manuscript evidence, archaeological data, and internal consistency of the ancient texts.
            </p>
<div className="flex flex-col md:flex-row items-center gap-4">
<button className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0" onclick="document.getElementById('evidence-start').scrollIntoView({behavior: 'smooth'})">
<span>Examine Evidence</span>
<i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</button>
</div>
</header>

<div className="absolute left-6 md:left-1/2 top-[100vh] bottom-0 w-px bg-slate-200 -z-10 hidden md:block"></div>

<section className="reveal-section grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-48 pt-12" id="evidence-start">
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-32">
<div className="flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-900 font-mono font-bold text-sm border border-slate-200 shadow-sm">01</span>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Manuscript Wealth</h2>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Historical reliability is measured by the number of copies and the time gap between the event and the writing. The New Testament has no rival in ancient literature.
                </p>
<div className="space-y-4 font-mono text-sm">
<div className="stagger-item flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-slate-500">Plato</span>
<span className="font-semibold text-slate-800">~7 copies</span>
</div>
<div className="stagger-item flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100" style={{transitionDelay: '100ms'}}>
<span className="text-slate-500">Homer's Iliad</span>
<span className="font-semibold text-slate-800">~643 copies</span>
</div>
<div className="stagger-item flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100 shadow-sm transform scale-105" style={{transitionDelay: '200ms'}}>
<span className="text-emerald-700 font-semibold">New Testament</span>
<span className="font-bold text-emerald-800">24,000+ copies</span>
</div>
</div>
</div>
<div className="relative group">

<div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
<div className="relative bg-slate-900 text-white p-8 rounded-2xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 border border-slate-800">
<div className="flex items-start justify-between mb-8">
<div>
<div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Artifact</div>
<div className="text-xl font-medium">Papyrus P52</div>
</div>
<i className="text-emerald-400 w-6 h-6" data-lucide="file-clock"></i>
</div>
<div className="space-y-4">
<div className="h-2 bg-slate-800 rounded-full w-full"></div>
<div className="h-2 bg-slate-800 rounded-full w-5/6"></div>
<div className="h-2 bg-slate-800 rounded-full w-4/6"></div>
</div>
<div className="mt-8 pt-8 border-t border-slate-800">
<p className="text-slate-400 text-sm leading-relaxed">
                            Discovered in Egypt, this fragment of John's Gospel dates to <span className="text-white font-semibold">~125 AD</span>. This puts the physical evidence within one generation of the original writings—a statistical anomaly in ancient history.
                        </p>
</div>
</div>
</div>
</section>

<section className="reveal-section mb-48 relative">
<div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="text-center max-w-2xl mx-auto mb-16 pt-16">
<span className="inline-block p-2 rounded-full bg-orange-50 text-orange-600 mb-4 border border-orange-100">
<i className="w-6 h-6" data-lucide="pickaxe"></i>
</span>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Stones Don't Lie</h2>
<p className="text-lg text-slate-500">The Bible is grounded in real history, locations, and people—verified by secular excavations.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
<div className="mb-4 text-orange-600 opacity-80 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8" data-lucide="crown"></i>
</div>
<h3 className="font-semibold text-slate-900 text-xl mb-3">House of David</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Critics claimed King David was a myth until the <span className="font-medium text-slate-900">Tel Dan Stele</span> (1993) was found containing the inscription "House of David" by an enemy king.
                    </p>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group delay-100">
<div className="mb-4 text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8" data-lucide="scroll"></i>
</div>
<h3 className="font-semibold text-slate-900 text-xl mb-3">Pontius Pilate</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                        The <span className="font-medium text-slate-900">Pilate Stone</span> discovered in Caesarea Maritima confirmed his existence and exact Roman title ("Prefect"), validating the Gospel accounts.
                    </p>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group delay-200">
<div className="mb-4 text-purple-600 opacity-80 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8" data-lucide="map"></i>
</div>
<h3 className="font-semibold text-slate-900 text-xl mb-3">Erastus of Corinth</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Paul sends greetings from Erastus, the city treasurer (Rom 16:23). A pavement stone was found in Corinth: <span className="italic">"Erastus... laid this pavement."</span>
</p>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
</div>
</div>
</section>

<section className="reveal-section mb-48 flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-900 font-mono font-bold text-sm border border-slate-200 shadow-sm">03</span>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">The Name Test</h2>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Based on Richard Bauckham's research. When you invent a story centuries later, you get the names wrong. The Gospels get the statistical frequency of names for that specific region and time period <span className="font-medium text-slate-900">perfectly right</span>.
                </p>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<div>
<span className="block text-slate-900 font-medium text-sm">Canonical Gospels</span>
<span className="text-slate-500 text-sm">Top names (Simon, Joseph, Lazarus) match 1st Century Palestinian bone ossuary records.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 shrink-0" data-lucide="x-circle"></i>
<div>
<span className="block text-slate-900 font-medium text-sm">Gnostic Gospels (2nd/3rd Century)</span>
<span className="text-slate-500 text-sm">Fail the test. They use names popular in Egypt or names that don't fit the frequency patterns.</span>
</div>
</li>
</ul>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-yellow-400 rounded-full blur-[100px] opacity-20"></div>

<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<div className="font-mono text-xs uppercase text-slate-400">Onomastic Analysis</div>
<i className="w-5 h-5 text-slate-300" data-lucide="bar-chart-3"></i>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-semibold text-slate-700">Name "Simon" Frequency</span>
<span className="text-emerald-600 font-mono">15.6% Match</span>
</div>
<div className="flex gap-2 h-3">
<div className="w-[15%] bg-slate-300 rounded-l-full relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Real History</div>
</div>
<div className="w-[16%] bg-emerald-500 rounded-r-full relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Gospels Data</div>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-semibold text-slate-700">Name "Joseph" Frequency</span>
<span className="text-emerald-600 font-mono">14% Match</span>
</div>
<div className="flex gap-2 h-3">
<div className="w-[14%] bg-slate-300 rounded-l-full"></div>
<div className="w-[14%] bg-emerald-500 rounded-r-full"></div>
</div>
</div>
<p className="text-xs text-slate-400 mt-4 italic">Data Source: "Jesus and the Eyewitnesses" by Richard Bauckham.</p>
</div>
</div>
</div>
</section>

<section className="reveal-section mb-32">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-slate-300 shadow-2xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-12">
<div className="md:w-1/2">
<div className="inline-block bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-xs font-mono mb-6 text-slate-400">CRITERION OF EMBARRASSMENT</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Too Counter-Productive to be Fake</h2>
<p className="text-lg leading-relaxed text-slate-400">
                            Invented propaganda makes the heroes look perfect. The Bible does the opposite. It includes details that would have been embarrassing and hurtful to the cause in the 1st Century—unless they were simply true.
                        </p>
</div>
<div className="md:w-1/2 grid gap-4">
<div className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 p-6 rounded-xl transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-red-500/10 p-3 rounded-lg text-red-400 group-hover:text-red-300 transition-colors">
<i className="w-6 h-6" data-lucide="user-x"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Women Witnesses</h4>
<p className="text-sm text-slate-400 mt-2">In 1st Century Judea, a woman's testimony was inadmissible in court. If you were faking the Resurrection, you would never say women found the tomb first.</p>
</div>
</div>
</div>
<div className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 p-6 rounded-xl transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-blue-500/10 p-3 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
<i className="w-6 h-6" data-lucide="shield-alert"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Cowardly Leaders</h4>
<p className="text-sm text-slate-400 mt-2">The authors record their own leader (Peter) denying Jesus three times and the disciples hiding in fear. Hero myths don't do this.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="reveal-section text-center pt-16 border-t border-slate-200">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-200">
<i className="w-8 h-8 text-slate-400" data-lucide="fingerprint"></i>
</div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">The Verdict is Yours</h3>
<p className="text-slate-500 mb-8 max-w-lg mx-auto">The cumulative case from history, archaeology, and manuscript evidence points to one conclusion: the text has been preserved faithfully.</p>
<a className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-red-600/20 transition-all hover:-translate-y-1 group" href="https://www.youtube.com/watch?v=gtp-DmgZbwA" target="_blank">
<i className="w-5 h-5" data-lucide="youtube"></i>
<span>Watch the Full Breakdown</span>
<i className="w-4 h-4 opacity-70 group-hover:opacity-100" data-lucide="external-link"></i>
</a>
<p className="mt-8 text-xs text-slate-400 font-mono">Reference: Wesley Huff • Apologetics Canada</p>
</footer>
</main>


    </>
  );
}
