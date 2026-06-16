import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#213b97]/10 rounded-full blur-[150px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#febd17]/5 rounded-full blur-[150px]"></div>
</div>

<nav className="absolute top-0 w-full z-50 px-6 py-5 flex items-center justify-between border-b border-white/[0.04] bg-[#0b0e14]/50 backdrop-blur-2xl">
<div className="max-w-7xl mx-auto w-full flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-xl bg-[#febd17] text-[#0b0e14] flex items-center justify-center font-medium text-xl shadow-[0_0_20px_rgba(254,189,23,0.2)] transition-transform duration-500 group-hover:scale-105">
<span className="tracking-tighter">EG</span>
</div>
<div className="flex flex-col">
<span className="text-white font-medium text-lg tracking-tight leading-none">Edventure</span>
<span className="text-xs text-[#febd17] font-normal tracking-widest mt-0.5">GLOBAL</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal">
<a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">Home</a>
<a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">Onshore students</a>
<a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">Offshore students</a>
<a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">RPL Certification</a>
<a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">About</a>
</div>

<a className="hidden md:inline-flex px-5 py-2.5 rounded-xl border border-white/10 text-white text-sm font-normal bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 backdrop-blur-md" href="#">
                Contact Us
            </a>

<button className="lg:hidden text-white p-2 flex items-center justify-center hover:bg-white/5 rounded-lg transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-44 pb-24 px-6 z-10 border-b border-white/[0.04]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">

<div className="w-full lg:w-1/2 max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-[#febd17] shadow-[0_0_8px_rgba(254,189,23,0.8)]"></span>
<span className="text-xs font-normal text-gray-300 tracking-wide uppercase">Admissions Open</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.15]">
                    Let's talk about your <br/>
<span className="italic font-normal text-white/70">education pathway.</span>
</h1>
<p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-normal">
                    Whether you're exploring study options, course changes, or RPL certifications — our advisors are here to give you clear, honest answers.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#febd17] text-[#0b0e14] px-7 py-3.5 rounded-xl font-medium hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300">
                        Schedule a Consultation 
                        <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 text-white bg-white/[0.02] backdrop-blur-md px-7 py-3.5 rounded-xl font-normal hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
<iconify-icon height="20" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon> 
                        Chat on WhatsApp
                    </button>
</div>
</div>

<div className="hidden lg:block w-full lg:w-1/2 relative h-[420px] group perspective-1000">
<div className="absolute inset-0 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-700 ease-out group-hover:rotate-y-2 group-hover:rotate-x-2">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#213b97]/30 rounded-full blur-[80px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-28 h-28 rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1/2 group-hover:-translate-x-1/2">
<iconify-icon className="text-[#febd17] drop-shadow-[0_0_15px_rgba(254,189,23,0.3)]" height="48" icon="solar:diploma-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 flex-1 z-10 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20">

<div className="lg:col-span-7">
<div className="mb-12">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Tell us about your situation</h2>
<p className="text-lg text-gray-500 font-normal">Fill out the form below and we'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-2.5">
<label className="block text-sm font-normal text-gray-400">Full Name</label>
<input className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl px-5 py-4 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#febd17]/40 focus:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" placeholder="Jane Doe" type="text"/>
</div>

<div className="space-y-2.5">
<label className="block text-sm font-normal text-gray-400">Email Address</label>
<input className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl px-5 py-4 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#febd17]/40 focus:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-2.5">
<label className="block text-sm font-normal text-gray-400">Phone / WhatsApp</label>
<input className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl px-5 py-4 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#febd17]/40 focus:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" placeholder="+61 4XX XXX XXX" type="text"/>
</div>

<div className="space-y-2.5 relative">
<label className="block text-sm font-normal text-gray-400">Location</label>
<div className="relative">
<select className="w-full appearance-none bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-[#febd17]/40 focus:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] cursor-pointer">
<option className="text-gray-600" disabled="" selected="" value="">Select country</option>
<option className="bg-[#0b0e14] text-white" value="au">Australia</option>
<option className="bg-[#0b0e14] text-white" value="offshore">Offshore</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2.5 relative">
<label className="block text-sm font-normal text-gray-400">Current Situation</label>
<div className="relative">
<select className="w-full appearance-none bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl px-5 py-4 text-base text-white focus:outline-none focus:border-[#febd17]/40 focus:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] cursor-pointer">
<option className="text-gray-600" disabled="" selected="" value="">What best describes your status?</option>
<option className="bg-[#0b0e14] text-white" value="study">Looking for study options</option>
<option className="bg-[#0b0e14] text-white" value="visa">Need visa assistance</option>
<option className="bg-[#0b0e14] text-white" value="rpl">Interested in RPL certification</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="space-y-2.5">
<label className="block text-sm font-normal text-gray-400">How can we help?</label>
<textarea className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl px-5 py-4 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#febd17]/40 focus:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] min-h-[160px] resize-y" placeholder="Briefly describe what you're looking for..."></textarea>
</div>
<div className="pt-4">
<button className="group flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-[#0b0e14] px-8 py-4 rounded-xl font-medium hover:bg-[#febd17] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(254,189,23,0.3)] transition-all duration-300" type="button">
                            Send Message 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0">
<div className="sticky top-32 bg-white/[0.02] backdrop-blur-3xl border border-white/[0.06] rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden group">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#213b97]/20 rounded-full blur-[60px] pointer-events-none"></div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-10 relative z-10">Adelaide Office</h3>
<div className="space-y-8 relative z-10">

<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] backdrop-blur-md flex items-center justify-center shrink-0 border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-white/10 transition-colors">
<iconify-icon className="text-gray-300" height="22" icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-widest">Visit Us</p>
<p className="text-base text-gray-200 leading-relaxed font-normal">
                                    53–55 Melbourne Street<br/>
                                    North Adelaide SA 5006<br/>
                                    Australia
                                </p>
</div>
</div>

<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] backdrop-blur-md flex items-center justify-center shrink-0 border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-white/10 transition-colors">
<iconify-icon className="text-gray-300" height="22" icon="solar:phone-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-widest">Call Us</p>
<p className="text-base text-gray-200 font-normal">+61 426 919 914</p>
</div>
</div>

<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] backdrop-blur-md flex items-center justify-center shrink-0 border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-white/10 transition-colors">
<iconify-icon className="text-gray-300" height="22" icon="solar:clock-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="w-full">
<p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-widest">Business Hours</p>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm border-b border-white/[0.04] pb-3">
<span className="text-gray-400 font-normal">Mon – Fri</span>
<span className="text-gray-200 font-normal tracking-wide">9:00 AM – 6:30 PM</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-white/[0.04] pb-3">
<span className="text-gray-400 font-normal">Saturday</span>
<span className="text-gray-200 font-normal tracking-wide">10:00 AM – 4:00 PM</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-400 font-normal">Sunday</span>
<span className="text-gray-600 font-normal tracking-wide">Closed</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 pt-8 border-t border-white/[0.06] relative z-10">
<button className="w-full flex items-center justify-center gap-2.5 border border-white/10 bg-white/[0.03] text-white px-6 py-4 rounded-xl font-normal hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md">
<iconify-icon className="text-[#febd17]" height="20" icon="solar:chat-square-linear" strokeWidth="1.5" width="20"></iconify-icon> Message on WhatsApp
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.04] pt-20 pb-8 px-6 bg-[#0b0e14]/80 backdrop-blur-xl relative z-10 mt-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-4 lg:pr-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 text-white flex items-center justify-center font-medium text-base tracking-tighter">
                            EG
                        </div>
<div className="flex flex-col">
<span className="text-white font-medium text-base tracking-tight leading-none">Edventure</span>
<span className="text-[10px] text-gray-500 font-normal tracking-widest mt-0.5">GLOBAL</span>
</div>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-8 font-normal">
                        Your trusted partner for global education and migration. We simplify complex pathways to help you achieve your international dreams.
                    </p>
<div className="flex items-center gap-3">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300" href="#">
<iconify-icon height="20" icon="ri:facebook-line" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300" href="#">
<iconify-icon height="20" icon="ri:twitter-x-line" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300" href="#">
<iconify-icon height="20" icon="ri:linkedin-line" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-6">
<h4 className="text-white font-medium mb-6 text-xs tracking-widest uppercase">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Study Abroad</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Visa Assistance</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Migration Support</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Career Counselling</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-6 text-xs tracking-widest uppercase">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">About Us</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Our Process</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Success Stories</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-white transition-colors duration-300" href="#">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-white font-medium mb-6 text-xs tracking-widest uppercase">Contact</h4>
<ul className="space-y-5">
<li className="flex items-start gap-4 group cursor-pointer">
<iconify-icon className="text-gray-600 mt-0.5 group-hover:text-white transition-colors duration-300" height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-normal text-gray-500 group-hover:text-gray-300 transition-colors duration-300">123 Global Way, Sydney<br/>NSW 2000, Australia</span>
</li>
<li className="flex items-center gap-4 group cursor-pointer">
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors duration-300" height="20" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-normal text-gray-500 group-hover:text-gray-300 transition-colors duration-300">+61 2 9000 0000</span>
</li>
<li className="flex items-center gap-4 group cursor-pointer">
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors duration-300" height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-normal text-gray-500 group-hover:text-gray-300 transition-colors duration-300">hello@edventure.global</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-normal text-gray-600">© 2024 Edventure Global. All rights reserved.</p>
<div className="flex items-center gap-8">
<a className="text-xs font-normal text-gray-600 hover:text-gray-300 transition-colors duration-300" href="#">Privacy Policy</a>
<a className="text-xs font-normal text-gray-600 hover:text-gray-300 transition-colors duration-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
