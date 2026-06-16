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



      // Simple parallax effect for the big background text
      document.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax-element').forEach(function(el) {
          const speed = el.getAttribute('data-speed') || 0.5;
          el.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white relative" style={{}}>

<div className="lg:col-span-4 flex flex-col lg:p-12 z-20 bg-white border-gray-100 border-r pt-8 pr-8 pb-8 pl-8 justify-between relative shadow-2xl" style={{}}>

<div className="flex items-center justify-between animate-fade-in">
<div className="flex items-center gap-3">
<div className="relative group">
<button className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
<iconify-icon className="text-slate-800" icon="lucide:menu" width="24"></iconify-icon>
</button>

<div className="hidden group-hover:block absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2 z-50 origin-top-left animate-in fade-in slide-in-from-top-2 duration-200">
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-[#5423E7] hover:bg-indigo-50 rounded-xl transition-all" href="#">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
                                    Platform
                                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-[#5423E7] hover:bg-indigo-50 rounded-xl transition-all" href="#">
<iconify-icon icon="lucide:credit-card" width="18"></iconify-icon>
                                    Pricing
                                </a>
<div className="h-px bg-gray-100 my-1 mx-2"></div>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-[#5423E7] hover:bg-indigo-50 rounded-xl transition-all" href="#">
<iconify-icon icon="lucide:life-buoy" width="18"></iconify-icon>
                                    Support
                                </a>
</div>
</div>
</div>
<div className="w-10 h-10 border-2 border-[#5423E7] flex items-center justify-center font-bold text-[#5423E7] brand-font text-xl rounded-lg">
                        B
                    </div>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
<iconify-icon className="text-slate-800" icon="lucide:user" width="24"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
</button>
</div>
</div>

<div className="my-12 lg:my-0">
<h1 className="text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] text-slate-800 animate-slide-in delay-100">
                    Berry
                    <br/>
<span className="text-[#5423E7]">Pay</span>
</h1>
<p className="mt-8 text-lg font-light text-slate-500 leading-relaxed max-w-sm animate-slide-in delay-150">
                    Payments, tax &amp; subscriptions for software companies. We handle the compliance burden.
                </p>
</div>

<div className="space-y-8">
<div className="flex items-center gap-3 text-sm font-medium tracking-wide text-[#5423E7] uppercase animate-slide-in delay-200">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
<span className="">Merchant of Record</span>
</div>
<div className="flex items-center justify-between border-t border-gray-100 pt-6 animate-slide-in delay-300">
<button className="p-2 hover:bg-gray-50 rounded-full transition-colors group">
<span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">LOGIN</span>
</button>
<button className="pl-6 pr-2 py-2 bg-slate-900 text-white rounded-full transition-all hover:bg-[#5423E7] flex items-center gap-4 group">
<span className="text-sm font-bold uppercase tracking-wider">Get Started</span>
<div className="w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center group-hover:text-[#5423E7]">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="lg:col-span-8 overflow-hidden min-h-[50vh] lg:min-h-auto bg-[#F8FAFC] relative" style={{}}>

<div className="bg-center opacity-10 mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ff9537b-7012-4eb9-8005-d88f022e3ff6_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 flex items-center justify-center overflow-hidden">

<div className="absolute top-10 right-20 w-64 h-64 bg-[#5423E7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="relative z-10 transform rotate-[-5deg] hover:rotate-0 transition-all duration-700 ease-out perspective-[1000px]">
<div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-slate-900/5 w-[340px] md:w-[420px]">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon className="" icon="lucide:store" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue</p>
<p className="text-2xl font-bold text-slate-900 font-brand">$12,405.00</p>
</div>
</div>
<span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">+14%</span>
</div>

<div className="flex items-end justify-between h-32 gap-2 mb-6">
<div className="w-full bg-indigo-50 rounded-t-md h-[40%]"></div>
<div className="w-full bg-[#5423E7] rounded-t-md h-[70%]"></div>
<div className="w-full bg-indigo-50 rounded-t-md h-[50%]"></div>
<div className="w-full bg-indigo-50 rounded-t-md h-[30%]"></div>
<div className="w-full bg-indigo-50 rounded-t-md h-[80%]"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
<div className="w-8 h-8 rounded-full bg-[#FF3366] text-white flex items-center justify-center font-bold text-xs">J</div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-800">New Subscription</p>
<p className="text-[10px] text-slate-500">Just now</p>
</div>
<p className="text-xs font-bold text-slate-900">+$49.00</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-5 pointer-events-none parallax-element" data-speed="0.15" style={{transform: 'translateY(0px)'}}>
<span className="text-[20rem] md:text-[30rem] font-bold leading-none tracking-tighter text-slate-900">
                    PAY
                </span>
</div>
</div>
</div>

<section className="bg-[#5423E7] pt-24 pb-24">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 justify-between animate-slide-in">
<div className="">
<span className="block h-0.5 w-12 bg-indigo-300 mb-4"></span>
<span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">
                        Why BerryPay?
                    </span>
<h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mt-2">
                        GROWTH ENGINE
                    </h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-indigo-400 flex items-center justify-center text-white hover:bg-white hover:text-[#5423E7] transition-colors">
<iconify-icon icon="lucide:arrow-down" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden bg-[#4316c5] border-[#5423E7]/20 border shadow-2xl">

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 lg:p-16 overflow-hidden group animate-blur-in delay-100 bg-gradient-to-br from-[#6333f0] to-[#5423E7] pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col z-10 h-full relative justify-between" style={{}}>
<div className="mb-12">
<div className="w-14 h-14 bg-white rounded-2xl mb-6 shadow-lg flex items-center justify-center text-[#5423E7]">
<iconify-icon className="" icon="lucide:globe-2" width="28"></iconify-icon>
</div>
<h3 className="text-4xl lg:text-5xl text-white font-semibold mb-4 uppercase tracking-tight">
                                Global Tax Compliance
                            </h3>
<p className="text-lg text-indigo-100 max-w-md font-light">
                                We act as your merchant of record. We calculate, collect, and remit sales tax and VAT globally, so you don't have to.
                            </p>
</div>
<a className="inline-flex items-center gap-2 text-white text-sm font-bold tracking-wide uppercase bg-black/20 hover:bg-black/30 backdrop-blur-sm px-8 py-4 rounded-full w-fit transition-colors border border-white/10" href="#" style={{}}>
                            Learn More
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<div className="group-hover:opacity-30 transition-opacity bg-center opacity-20 w-[60%] h-[80%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ba8f15-9598-4538-b90e-789dc8718618_1600w.png)] bg-cover z-10 absolute right-0 bottom-0">
</div>
</div>

<div className="lg:p-12 overflow-hidden group bg-white h-96 pt-8 pr-8 pb-8 pl-8 relative animate-blur-in delay-200">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon className="text-slate-900" icon="lucide:credit-card" width="120"></iconify-icon>
</div>
<div className="z-10 flex flex-col h-full relative justify-end">
<span className="uppercase text-xs font-bold text-indigo-500 tracking-widest mb-2">
                            Payments
                        </span>
<h3 className="text-3xl text-slate-900 font-semibold leading-none mb-4 uppercase tracking-tight">
                            Borderless Payments
                        </h3>
<p className="text-slate-500 text-sm mb-6">Accept 135+ currencies and local payment methods.</p>
<a className="text-slate-900 font-bold hover:opacity-75 transition-opacity inline-flex items-center gap-2 uppercase text-xs tracking-wider" href="#">
                            View Methods
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="lg:p-12 overflow-hidden group h-96 px-8 py-8 relative bg-[#FF3366] animate-blur-in delay-300">
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-auto text-white">
<iconify-icon icon="lucide:shield-alert" width="24"></iconify-icon>
</div>
<span className="uppercase text-xs font-bold text-white/80 tracking-widest mb-2">
                            Security
                        </span>
<h3 className="text-3xl text-white font-semibold leading-none mb-4 uppercase tracking-tight">
                            AI Fraud Prevention
                        </h3>
<a className="text-white hover:opacity-75 transition-opacity inline-flex items-center gap-2 uppercase text-xs tracking-wider font-bold" href="#">
                            How it works
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 overflow-hidden bg-slate-900 h-96 relative animate-blur-in delay-500 group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-64 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-500"></div>
<div className="h-2 w-16 bg-white/50 rounded-full"></div>
</div>
<div className="h-2 w-full bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-white/20 rounded-full mb-6"></div>
<button className="w-full py-2 bg-white text-slate-900 text-xs font-bold uppercase rounded-lg">Pay Now</button>
</div>
</div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="text-3xl text-white font-semibold uppercase tracking-tight">
                            Checkout Forms
                        </h3>
<p className="text-slate-300 text-sm">No-code, high conversion drop-in checkouts.</p>
</div>
</div>

<div className="group lg:p-12 bg-[#F0FDF4] h-96 relative overflow-hidden animate-blur-in delay-700">
<div className="absolute -right-10 -top-10 text-green-100 transform rotate-12">
<iconify-icon icon="lucide:refresh-cw" width="200"></iconify-icon>
</div>
<div className="w-full h-full flex flex-col justify-end relative z-10">
<span className="uppercase block text-xs font-bold text-green-600 tracking-widest mb-1">
                            Recurring
                        </span>
<h3 className="text-3xl font-semibold text-green-900 mb-2 uppercase tracking-tight leading-none">
                            Smart Subscriptions
                        </h3>
<p className="text-green-700/80 text-sm mt-2">Recover failed payments automatically.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-900 border-indigo-500/30 border-t pt-24 pb-24 relative">

<div className="-mr-20 -mt-20 filter animate-blob bg-indigo-600 opacity-20 mix-blend-screen w-96 h-96 rounded-full absolute top-0 right-0 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 justify-between animate-slide-in">
<div className="max-w-2xl">
<span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3 block">
                        Features
                    </span>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1] uppercase">
                        Complete Toolkit
                    </h2>
<p className="text-slate-400 mt-4 text-lg font-light leading-relaxed">
                        Everything you need to sell software online. From license keys to digital downloads.
                    </p>
</div>
<a className="group flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300" href="#">
                    View All Features
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<a className="group overflow-hidden isolate h-[28rem] relative shadow-2xl rounded-3xl animate-slide-in delay-200 bg-slate-800 border border-white/10" href="#" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" style={{}}></div>

<div className="group-hover:scale-105 transition-transform duration-700 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05faeeed-8334-411c-b0d1-c9f346ff4168_800w.webp)] bg-cover bg-center"></div>
</div>
<div className="flex flex-col z-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end" style={{}}>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:key" width="24"></iconify-icon>
</div>
<span className="text-purple-300 text-xs font-bold tracking-widest uppercase mb-2">
                            Security
                        </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2 uppercase leading-none group-hover:text-purple-200 transition-colors">
                            License Management
                        </h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300" style={{}}>
<p className="text-white/60 text-sm font-medium mt-2">
                                Auto-issue keys for your software.
                            </p>
</div>
</div>
</a>

<a className="group overflow-hidden isolate h-[28rem] relative shadow-2xl rounded-3xl animate-slide-in delay-300 bg-slate-800 border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" style={{}}></div>
<div className="group-hover:scale-105 transition-transform duration-700 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fd82586-459e-48f9-a2bd-7afe624f242d_800w.webp)] bg-cover bg-center"></div>
</div>
<div className="flex flex-col z-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="lucide:download-cloud" width="24"></iconify-icon>
</div>
<span className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-2">
                            Delivery
                        </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2 uppercase leading-none group-hover:text-blue-200 transition-colors">
                            Digital Downloads
                        </h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-white/60 text-sm font-medium mt-2">
                                Secure links, PDF stamping, and more.
                            </p>
</div>
</div>
</a>

<a className="group overflow-hidden isolate h-[28rem] relative shadow-2xl rounded-3xl animate-slide-in delay-500 bg-slate-800 border border-white/10" href="#" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" style={{}}></div>
<div className="group-hover:scale-105 transition-transform duration-700 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2dbcd4d-8968-4194-a25e-d11c633cc4b1_800w.webp)] bg-cover bg-center"></div>
</div>
<div className="flex flex-col p-8 absolute top-0 right-0 bottom-0 left-0 justify-end z-20">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<span className="text-orange-300 text-xs font-bold tracking-widest uppercase mb-2">
                            Sales
                        </span>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-2 uppercase leading-none group-hover:text-orange-200 transition-colors">
                            Store Builder
                        </h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-white/60 text-sm font-medium mt-2">
                                Launch a full ecommerce store in minutes.
                            </p>
</div>
</div>
</a>
</div>

<div className="mt-12 flex flex-wrap gap-3 justify-center">
<a className="px-6 py-3 bg-slate-800 hover:bg-white hover:text-slate-900 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-white/10" href="#">
                    Affiliates
                </a>
<a className="hover:bg-white hover:text-slate-900 uppercase transition-colors text-xs font-bold text-white tracking-wide bg-slate-800 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
                    Usage Billing
                </a>
<a className="px-6 py-3 bg-slate-800 hover:bg-white hover:text-slate-900 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-white/10" href="#">
                    Customer Portal
                </a>
<a className="px-6 py-3 bg-slate-800 hover:bg-white hover:text-slate-900 text-white rounded-full text-xs font-bold tracking-wide uppercase transition-colors border border-white/10" href="#">
                    Reporting
                </a>
</div>
</div>
</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="bg-gradient-to-t from-white via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 animate-slide-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#5423E7] text-xs font-bold uppercase tracking-widest mb-6">
<iconify-icon icon="lucide:terminal" width="14"></iconify-icon>
<span>Developer First</span>
</div>
<h2 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[0.95] mb-6 uppercase">
                    Integrate in 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5423E7] to-indigo-500">Minutes</span>, not weeks
                </h2>
<p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                    Our API is designed by developers, for developers. With typed SDKs, predictable webhooks, and granular permissions, you'll be production-ready before your coffee gets cold.
                </p>

<div className="space-y-6 mb-10">
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
<iconify-icon icon="lucide:boxes" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Typed SDKs</h3>
<p className="text-slate-500 text-sm mt-1">First-class support for TypeScript, Python, Ruby, and Go.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
<iconify-icon icon="lucide:webhook" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Real-time Webhooks</h3>
<p className="text-slate-500 text-sm mt-1">Verify signatures and retry failures automatically.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
<iconify-icon icon="lucide:book-open" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Interactive Docs</h3>
<p className="text-slate-500 text-sm mt-1">Test API calls directly from the documentation.</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#5423E7] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-indigo-500/30" href="#">
                        Read the Docs
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-3 px-6 py-3.5 border border-slate-200 rounded-full bg-slate-50 text-slate-500 font-mono text-xs">
<span className="text-[#5423E7]">$</span> npm install @berrypay/sdk
                        <button aria-label="Copy to clipboard" className="hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="order-1 lg:order-2 perspective-midrange group relative">

<div className="absolute -right-8 -top-8 w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 flex items-center justify-center animate-blob animation-delay-2000">
<iconify-icon icon="logos:react" width="32"></iconify-icon>
</div>
<div className="absolute -left-8 bottom-20 w-14 h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 flex items-center justify-center animate-blob">
<iconify-icon icon="logos:python" width="28"></iconify-icon>
</div>

<div className="relative transform rotate-y-12 rotate-x-5 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-all duration-700 ease-out transform-style-preserve-3d shadow-2xl rounded-xl bg-[#1e1e1e]">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#252526] rounded-t-xl">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="text-[10px] font-mono text-white/40">checkout-session.ts</div>
<div className="w-10"></div> 
</div>

<div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed text-blue-100">
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">1</span>
<span className=""><span className="text-[#c586c0]">import</span> { BerryPay } <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@berrypay/sdk'</span>;</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">2</span>
<span></span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">3</span>
<span><span className="text-[#569cd6]">const</span> client = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">BerryPay</span>(<span className="text-[#ce9178]">'bp_sk_live_...'</span>);</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">4</span>
<span></span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">5</span>
<span><span className="text-[#569cd6]">const</span> session = <span className="text-[#c586c0]">await</span> client.checkout.<span className="text-[#dcdcaa]">create</span>({</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">6</span>
<span className="pl-4">mode: <span className="text-[#ce9178]">'subscription'</span>,</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">7</span>
<span className="pl-4">line_items: [{</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">8</span>
<span className="pl-8">price: <span className="text-[#ce9178]">'price_H5ggYwtDq'</span>,</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">9</span>
<span className="pl-8">quantity: <span className="text-[#b5cea8]">1</span>,</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">10</span>
<span className="pl-4">}],</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">11</span>
<span className="pl-4">success_url: <span className="text-[#ce9178]">'https://yoursite.com/success'</span>,</span>
</div>
<div className="flex">
<span className="text-white/20 select-none w-8 text-right pr-3">12</span>
<span>});</span>
</div>
</div>

<div className="flex items-center justify-between px-4 py-2 bg-[#5423E7] text-white text-[10px] font-bold rounded-b-xl">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                             API Connected
                         </div>
<span>34ms latency</span>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
</div>
</div>
</div>
</section>


<section className="bg-[#5423E7] pb-24">
<div className="lg:pl-12 lg:pr-12 max-w-7xl mx-auto my-20 pr-12 pl-12">
<div className="bg-indigo-600 rounded-[3rem] overflow-hidden relative shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="h-64 lg:h-[30rem] bg-indigo-100 relative overflow-hidden p-6">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#5423E7_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="w-full h-full flex items-center justify-center relative z-10">

<div className="bg-white p-8 rounded-2xl shadow-xl w-64 transform rotate-6 hover:rotate-0 transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:check" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-2">Payout Sent</h4>
<p className="text-slate-500 text-xs mb-4">Your payout of  has been processed to your bank.</p>
<div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-3/4"></div>
</div>
</div>
</div>
</div>

<div className="lg:p-20 flex flex-col bg-[#2e1065] pt-12 pr-12 pb-12 pl-12 relative justify-center">
<div className="mb-4 flex items-center gap-2">
<span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">
                                New Feature
                            </span>
<span className="w-px h-3 bg-indigo-400"></span>
<span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">
                                Instant
                            </span>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 leading-tight uppercase tracking-tight">
                            Say goodbye to Net-30 Payouts
                        </h2>
<p className="text-indigo-200 text-lg font-light mb-8">Access your revenue as soon as you make a sale. No more waiting for bank transfers.</p>
<a className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider border-b-2 border-indigo-400 pb-1 w-fit hover:border-white transition-colors" href="#">
                            Read Announcement
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="animate-fade-in delay-200 bg-slate-900 border-[#5423E7] border-t-4 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

<div className="lg:col-span-4 lg:pr-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-white flex items-center justify-center font-bold text-[#5423E7] brand-font text-2xl border-2 border-[#5423E7] rounded-lg shadow-[0_0_20px_rgba(84,35,231,0.3)]">
                            B
                        </div>
<div className="leading-none">
<span className="block text-2xl font-bold text-white uppercase tracking-tighter brand-font">
                                Berry
                            </span>
<span className="block text-2xl font-bold text-indigo-400 uppercase tracking-tighter brand-font">
                                Pay
                            </span>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                        Financial infrastructure for the internet. We handle the complexity of global payments, tax compliance, and subscriptions so you can focus on building your product.
                    </p>

<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:mail" width="14"></iconify-icon>
                            Stay Updated
                        </h4>
<form className="flex gap-2 max-w-sm" onsubmit="event.preventDefault();">
<input className="bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg px-4 py-2.5 w-full focus:outline-none focus:border-[#5423E7] focus:ring-1 focus:ring-[#5423E7] transition-all placeholder:text-slate-600" placeholder="Enter your email" type="email"/>
<button className="bg-[#5423E7] hover:bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-indigo-900/20 hover:scale-105 active:scale-95" type="submit">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

<div className="">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Product</h4>
<ul className="space-y-4">
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Payments</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Billing</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Connect</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Payouts</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Terminal</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Tax &amp; Compliance</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Developers</h4>
<ul className="space-y-4">
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Documentation</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">API Reference</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">API Status</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">SDKs &amp; Libraries</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Sample Apps</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">About Us</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block flex items-center gap-2" href="#">
                                Careers 
                                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Hiring</span>
</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Blog</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Press</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Partners</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4">
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Privacy Policy</a></li>
<li className=""><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Terms of Service</a></li>
<li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Cookie Policy</a></li>
<li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Security</a></li>
<li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm block" href="#">Sitemap</a></li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/60">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-0">
<div className="text-slate-500 text-xs uppercase tracking-wide font-medium">
                        © 2025 BerryPay, LLC. All Rights Reserved.
                    </div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-slate-400 text-xs font-medium">Systems Operational</span>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-white font-semibold text-xs tracking-widest uppercase opacity-60 hidden md:block">
                        Socials
                    </span>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-[#5423E7] hover:border-[#5423E7] hover:-translate-y-1 transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-[#5423E7] hover:border-[#5423E7] hover:-translate-y-1 transition-all duration-300" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-[#5423E7] hover:border-[#5423E7] hover:-translate-y-1 transition-all duration-300" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-[#5423E7] hover:border-[#5423E7] hover:-translate-y-1 transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
