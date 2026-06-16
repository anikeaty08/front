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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-violet-900/30 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[35rem] h-[35rem] bg-fuchsia-900/20 rounded-full blur-[100px]"></div>
<div className="absolute top-[40%] left-[-10%] w-[25rem] h-[25rem] bg-indigo-900/20 rounded-full blur-[80px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="group-hover:opacity-80 transition-opacity text-lg font-medium text-white tracking-tight" style={{}}>Eduveris</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Institutions</a>
<a className="hover:text-white transition-colors" href="#">Research</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10 transition-all backdrop-blur-sm flex items-center gap-2" href="#">
<span>Get Started</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-violet-300 border-violet-500/30">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Now available for Universities worldwide
                </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Integrity in the <br/>
<span className="text-gradient">Age of AI.</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                    The next-generation assessment platform. We combine biometric authentication with linguistic analysis to ensure every submission is authentically yours.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-white text-slate-950 px-8 py-3.5 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                        Student Sign Up
                    </button>
<button className="glass text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2">
<iconify-icon icon="solar:hat-graduation-linear" width="20"></iconify-icon>
                        Educator Access
                    </button>
</div>
<div className="flex items-center gap-4 pt-8 border-t border-white/5">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover grayscale opacity-70 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover grayscale opacity-70 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover grayscale opacity-70 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-violet-900/50 flex items-center justify-center text-xs text-white font-medium backdrop-blur-sm">
                            +2k
                        </div>
</div>
<div className="text-sm">
<p className="text-white font-medium">24,592 Students</p>
<p className="text-slate-500">Registered and verified this month</p>
</div>
</div>
</div>

<div className="relative group perspective-1000">

<div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

<div className="relative glass-panel rounded-2xl p-6 md:p-8 transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">
<iconify-icon icon="solar:file-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Final Thesis.pdf</h3>
<p className="text-xs text-slate-400">Uploading to Stanford Portal</p>
</div>
</div>
<span className="text-emerald-400 text-xs font-medium bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">Secure</span>
</div>

<div className="relative h-48 rounded-xl bg-slate-900/50 border border-white/5 overflow-hidden flex items-center justify-center mb-6">
<div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-20">

<div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div><div className="border-r border-white/10 h-full"></div>
</div>

<div className="absolute top-0 w-full h-1 bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-[scan_3s_ease-in-out_infinite]"></div>
<div className="text-center z-10">
<iconify-icon className="text-violet-400 mb-2" icon="solar:scanner-linear" width="48"></iconify-icon>
<p className="text-xs text-violet-200/70 tracking-widest uppercase">Analyzing Syntax</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-slate-400 mb-1">Originality Score</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-medium text-white">98%</span>
<iconify-icon className="text-emerald-400 mb-1" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-slate-400 mb-1">AI Detection</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-medium text-white">2%</span>
<iconify-icon className="text-violet-400 mb-1" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>

<button className="w-full mt-6 bg-violet-600 hover:bg-violet-500 text-white py-3 rounded-lg font-medium text-sm transition-all shadow-lg shadow-violet-900/20 flex items-center justify-center gap-2">
                        Submit Assessment
                        <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</div>

<div className="absolute -right-6 top-20 glass p-4 rounded-xl animate-[bounce_4s_infinite]">
<div className="flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-full text-green-400">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">Verified</p>
<p className="text-xs text-slate-400">ID: 8829-XJ</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-medium text-white mb-1">100k+</div>
<div className="text-sm text-slate-500">Assessments Scanned</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">99.9%</div>
<div className="text-sm text-slate-500">Uptime Guarantee</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">150+</div>
<div className="text-sm text-slate-500">Partner Universities</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">0.2s</div>
<div className="text-sm text-slate-500">Analysis Speed</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Integrity without intrusion.</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Our monitoring system respects student privacy while ensuring academic standards are met through non-invasive behavioral analysis.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-scan-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Live Monitoring</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Real-time browser environment analysis that detects unauthorized tab switching and copy-paste events without screen recording.
                    </p>
</div>

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Stylometry Analysis</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        We analyze sentence structure and vocabulary unique to each student to flag potential ghostwriting or AI generation.
                    </p>
</div>

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Encryption First</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Student data is encrypted end-to-end. Assignments are anonymized before processing to remove bias from the grading flow.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Student Voices</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 text-white transition">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 text-white transition">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass p-6 rounded-2xl relative">
<iconify-icon className="text-violet-500/30 text-4xl absolute top-4 right-4" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<img alt="Student" className="w-12 h-12 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="text-white font-medium text-sm">Sarah Chen</p>
<p className="text-xs text-slate-500">Computer Science, MIT</p>
</div>
</div>
<p className="text-slate-300 text-sm leading-relaxed">
                        "Finally, a submission platform that doesn't feel like spyware. The interface is clean, and the integrity check gives me confidence that my original work is recognized."
                    </p>
<div className="mt-4 flex gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="glass p-6 rounded-2xl relative bg-violet-500/5 border-violet-500/20">
<iconify-icon className="text-violet-500/30 text-4xl absolute top-4 right-4" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<img alt="Student" className="w-12 h-12 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="text-white font-medium text-sm">Marcus Johnson</p>
<p className="text-xs text-slate-500">Law, Oxford</p>
</div>
</div>
<p className="text-slate-300 text-sm leading-relaxed">
                        "The transparency is unmatched. I can see my integrity score immediately. It removes the anxiety of accidental plagiarism completely."
                    </p>
<div className="mt-4 flex gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
</div>

<div className="glass p-6 rounded-2xl relative">
<iconify-icon className="text-violet-500/30 text-4xl absolute top-4 right-4" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<img alt="Student" className="w-12 h-12 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="text-white font-medium text-sm">Elena Rodriguez</p>
<p className="text-xs text-slate-500">Literature, NYU</p>
</div>
</div>
<p className="text-slate-300 text-sm leading-relaxed">
                        "Beautiful interface. Uploading my dissertation was smooth, and the file verification was instant. Best academic tool I've used."
                    </p>
<div className="mt-4 flex gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-violet-600/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center border-t border-white/20 relative overflow-hidden">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"></div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Ready to secure your future?</h2>
<p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of students and educators ensuring fair, transparent, and modern assessment today.</p>
<form className="max-w-md mx-auto space-y-4">
<div className="relative group">
<input className="w-full bg-slate-950/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all placeholder:text-slate-600" placeholder="University Email Address" type="email"/>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-600">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="role" type="radio"/>
<div className="w-full bg-slate-950/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-400 text-center peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-violet-500 transition-all hover:bg-white/5">
                            I'm a Student
                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="w-full bg-slate-950/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-400 text-center peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-violet-500 transition-all hover:bg-white/5">
                            I'm an Educator
                        </div>
</label>
</div>
<button className="w-full bg-white text-slate-950 font-medium py-3.5 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4">
                    Create Free Account
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<p className="text-xs text-slate-600 mt-6">By signing up, you agree to our Terms of Service. No credit card required.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">AURA</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Empowering academic integrity through transparent, AI-driven analysis. Built for the modern university.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-violet-400 transition" href="#">Features</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Integrity Check</a></li>
<li><a className="hover:text-violet-400 transition" href="#">LMS Integration</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-violet-400 transition" href="#">Documentation</a></li>
<li><a className="hover:text-violet-400 transition" href="#">API Reference</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Community</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-violet-400 transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Terms of Service</a></li>
<li><a className="hover:text-violet-400 transition" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">© 2024 Aura Systems Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0 text-slate-500">
<a className="hover:text-white transition" href="#"><iconify-icon className="grayscale hover:grayscale-0 transition" icon="logos:twitter" width="16"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon className="grayscale hover:grayscale-0 transition" icon="logos:github-icon" width="16"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon className="grayscale hover:grayscale-0 transition" icon="logos:discord-icon" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>
<style>
        @keyframes scan {
            0% { top: 0; opacity: 1; }
            50% { top: 100%; opacity: 0.5; }
            100% { top: 0; opacity: 1; }
        }
        .perspective-1000 {
            perspective: 1000px;
        }
        .rotate-y-2 {
            transform: rotateY(-2deg);
        }
    </style>

    </>
  );
}
