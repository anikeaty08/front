import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'energy-orange': '#FF4D00',
'off-white': '#F4F4F5',
'deep-black': '#0A0A0A'
},
fontSize: {
'huge': 'clamp(4rem, 15vw, 16rem)',
},
letterSpacing: {
'tighter': '-0.04em',
'tightest': '-0.06em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-sm">

<div className="flex items-center gap-1">
<span className="font-bold tracking-tighter text-lg uppercase">KINETIC</span>
<div className="w-1.5 h-1.5 bg-energy-orange rounded-full"></div>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-deep-black transition-colors" href="#">Drops</a>
<a className="hover:text-deep-black transition-colors" href="#">Collection</a>
<a className="hover:text-deep-black transition-colors" href="#">Editorial</a>
<a className="hover:text-deep-black transition-colors" href="#">Manifesto</a>
</div>

<div className="flex items-center gap-4">
<button className="p-1 hover:text-energy-orange transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="p-1 hover:text-energy-orange transition-colors relative">
<iconify-icon icon="solar:bag-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-energy-orange rounded-full"></span>
</button>
<button className="hidden sm:flex items-center gap-2 bg-energy-orange text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group">
                    SHOP NOW
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[110vh] w-full pt-32 pb-20 flex flex-col justify-center overflow-hidden">

<h1 className="absolute top-[15%] -left-[5%] text-huge font-bold leading-none text-gray-200 select-none z-0 opacity-40">
            URBAN
        </h1>
<div className="container mx-auto px-6 relative z-10 h-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">

<div className="lg:col-span-7 relative order-2 lg:order-1">
<div className="relative w-full aspect-[4/5] lg:aspect-[3/3.5] overflow-hidden rounded-[2rem]">
<img alt="Hand holding premium sneaker" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 z-20 glass-panel px-4 py-2 rounded-full">
<span className="text-xs font-bold uppercase tracking-wider">New Season '24</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-center h-full pt-12 lg:pt-0 lg:pl-12 relative order-1 lg:order-2">

<h1 className="display-text text-7xl md:text-8xl font-bold uppercase tracking-tighter text-deep-black leading-[0.9] mb-8">
                        KINETIC<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-black to-gray-500">VELOCITY.</span>
</h1>

<p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-md">
                        Experience the ultimate fusion of street culture and kinetic performance. Designed for the relentless creators of the concrete jungle.
                    </p>

<div className="flex items-center gap-6 mb-16">
<button className="flex items-center gap-3 bg-energy-orange text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 group">
                            DISCOVER SERIES
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<a className="text-sm font-semibold border-b border-gray-300 pb-0.5 hover:border-black transition-colors" href="#">WATCH FILM</a>
</div>

<div className="relative w-full h-48 mt-auto hidden lg:block">
<div className="absolute right-0 bottom-0 w-40 aspect-square rounded-2xl overflow-hidden shadow-2xl animate-float bg-white">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] font-bold bg-white/90 px-2 py-1 rounded">VOL. 1</div>
</div>
<div className="absolute right-24 bottom-12 w-32 aspect-square rounded-2xl overflow-hidden shadow-xl animate-float-delay bg-gray-100 z-[-1]">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden bg-white relative">

<div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
<span className="text-[30vw] font-bold text-gray-50 tracking-tighter leading-none select-none">
                MOTION
            </span>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<img alt="Sneaker detail" className="w-full md:w-[80%] h-auto rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700" src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col justify-center">
<h3 className="text-5xl md:text-7xl font-semibold uppercase tracking-tighter leading-none mb-8">
                        Built for <span className="text-energy-orange">Speed</span>,<br/>
                        Styled for <span className="italic font-light">Streets</span>.
                    </h3>
<p className="text-gray-500 text-lg max-w-md leading-relaxed mb-8">
                        We stripped back the unnecessary. What remains is pure ergonomic design fused with high-impact aesthetics. Lightweight response meets heavy-duty durability.
                    </p>
<div className="flex flex-col sm:flex-row gap-8 items-end">
<button className="bg-gray-100 hover:bg-energy-orange hover:text-white transition-colors text-deep-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                            READ THE STORY
                        </button>

<div className="flex -space-x-4">
<div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-off-white">
<div className="container mx-auto px-6">
<div className="text-center mb-20">
<h3 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mb-4">Freshly Dropped</h3>
<p className="text-gray-500">For your daily motion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="bg-gray-100 rounded-3xl p-8 mb-6 relative overflow-hidden h-[400px] flex items-center justify-center">
<div className="absolute top-6 left-6 z-10">
<span className="text-xs font-bold uppercase tracking-widest text-gray-400">Limited</span>
</div>
<img className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end px-2">
<div>
<h4 className="text-xl font-semibold mb-1">Apex Runner V2</h4>
<p className="text-gray-500 text-xs">Mesh / Synthetic</p>
</div>
<div className="text-right">
<span className="block text-lg font-bold mb-2">$185</span>
<button className="w-10 h-10 rounded-full bg-energy-orange text-white flex items-center justify-center hover:bg-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer mt-12 md:mt-0">
<div className="bg-gray-200 rounded-3xl p-8 mb-6 relative overflow-hidden h-[400px] flex items-center justify-center">
<div className="absolute top-6 left-6 z-10">
<span className="text-xs font-bold uppercase tracking-widest text-gray-500">New</span>
</div>
<img className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end px-2">
<div>
<h4 className="text-xl font-semibold mb-1">Urban Glide 90</h4>
<p className="text-gray-500 text-xs">Leather / Suede</p>
</div>
<div className="text-right">
<span className="block text-lg font-bold mb-2">$210</span>
<button className="w-10 h-10 rounded-full bg-energy-orange text-white flex items-center justify-center hover:bg-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 rounded-3xl p-8 mb-6 relative overflow-hidden h-[400px] flex items-center justify-center">
<div className="absolute top-6 left-6 z-10">
<span className="text-xs font-bold uppercase tracking-widest text-energy-orange">Hot</span>
</div>
<img className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end px-2">
<div>
<h4 className="text-xl font-semibold mb-1">Retro Court High</h4>
<p className="text-gray-500 text-xs">Canvas / Rubber</p>
</div>
<div className="text-right">
<span className="block text-lg font-bold mb-2">$145</span>
<button className="w-10 h-10 rounded-full bg-energy-orange text-white flex items-center justify-center hover:bg-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">

<div className="bg-energy-orange p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10">
<ul className="text-6xl md:text-8xl font-bold uppercase tracking-tightest text-white leading-[0.9] space-y-2">
<li className="opacity-100 hover:ml-4 transition-all cursor-default">Running</li>
<li className="opacity-50 hover:opacity-100 hover:ml-4 transition-all cursor-default">Street</li>
<li className="opacity-50 hover:opacity-100 hover:ml-4 transition-all cursor-default">Retro</li>
<li className="opacity-50 hover:opacity-100 hover:ml-4 transition-all cursor-default">Urban</li>
<li className="opacity-50 hover:opacity-100 hover:ml-4 transition-all cursor-default">Perf.</li>
</ul>
<button className="mt-16 bg-white text-energy-orange px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                    EXPLORE CATEGORIES <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative h-[50vh] md:h-auto">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5">
<h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-tighter mb-8 leading-tight">
                        Engineered for <br/> <span className="text-outline text-deep-black">The Concrete</span>
</h2>
<p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Every stitch, every sole, every lace is calculated. We took data from thousands of urban runners and condensed it into a silhouette that breathes with the city.
                    </p>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl w-full h-32 object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img className="rounded-2xl w-full h-32 object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1597248881519-db089d3744a5?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-7 relative flex justify-center items-center py-10">

<div className="absolute bg-gray-100 rounded-full w-[500px] h-[500px] -z-10 blur-3xl opacity-60"></div>
<div className="relative w-full max-w-lg">
<img className="w-full h-auto object-contain drop-shadow-2xl -rotate-12" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-0 right-10 flex items-end flex-col gap-2 group">
<div className="bg-white px-3 py-1 rounded shadow-sm text-xs font-bold uppercase tracking-wider">Breathable Mesh</div>
<div className="w-3 h-3 bg-energy-orange rounded-full ring-4 ring-white"></div>
<div className="h-12 w-[1px] bg-gray-300"></div>
</div>

<div className="absolute bottom-10 left-0 flex items-start flex-col gap-2 group">
<div className="h-8 w-[1px] bg-gray-300 ml-1.5"></div>
<div className="w-3 h-3 bg-energy-orange rounded-full ring-4 ring-white"></div>
<div className="bg-white px-3 py-1 rounded shadow-sm text-xs font-bold uppercase tracking-wider">Cloud Foam</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200 bg-gray-50/50">
<div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight">5K+</span>
<span className="text-xs uppercase tracking-widest text-gray-500 mt-2">Happy Wearers</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight">12K+</span>
<span className="text-xs uppercase tracking-widest text-gray-500 mt-2">Orders Delivered</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight">3K+</span>
<span className="text-xs uppercase tracking-widest text-gray-500 mt-2">Sneaker Drops</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-bold tracking-tight">16K+</span>
<span className="text-xs uppercase tracking-widest text-gray-500 mt-2">Positive Reviews</span>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-tighter max-w-2xl leading-[0.9]">
                    Premier <br/>Streetwear <br/>Collection
                </h2>
<a className="flex items-center gap-2 text-sm font-bold border-b-2 border-energy-orange pb-1" href="#">
                    VIEW ALL <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative group overflow-hidden rounded-[2rem] h-[500px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
<span className="bg-energy-orange text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-3">NEW SEASON</span>
<h3 className="text-white text-3xl font-semibold uppercase tracking-tight">Midnight Racer</h3>
<p className="text-gray-200 text-sm mt-2">The night is yours to conquer.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2rem] h-[500px] bg-gray-100 flex flex-col items-center justify-center p-8">
<img className="w-full object-contain mix-blend-darken transition-transform duration-500 group-hover:-translate-y-4" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="text-center mt-6">
<h4 className="text-xl font-semibold">Daybreak Low</h4>
<span className="text-gray-500 text-sm">$160.00</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2rem] h-[500px] bg-gray-100 flex flex-col items-center justify-center p-8">
<img className="w-full object-contain mix-blend-darken transition-transform duration-500 group-hover:-translate-y-4" src="https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="text-center mt-6">
<h4 className="text-xl font-semibold">Trek Hiker</h4>
<span className="text-gray-500 text-sm">$220.00</span>
</div>
</div>

<div className="lg:col-span-2 relative group overflow-hidden rounded-[2rem] h-[500px]">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
<h3 className="text-white text-3xl font-semibold uppercase tracking-tight">Urban Essentials</h3>
<p className="text-gray-200 text-sm mt-2">Everyday comfort, elevated.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="flex justify-center md:justify-end">
<div className="relative h-96 w-96 rounded-3xl overflow-hidden border-4 border-gray-100 hidden md:block rotate-3 shadow-2xl">
<img alt="Red sneaker detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<div className="flex text-energy-orange gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<blockquote className="text-3xl md:text-4xl font-medium leading-tight mb-8">
                        "The most comfortable sneakers I've ever owned. The design turns heads on the street, and the performance keeps up with my schedule."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-bold">Jordan S.</div>
<div className="text-gray-400 text-sm">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="container mx-auto px-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
<div className="w-32 h-32 bg-deep-black rounded-full flex items-center justify-center text-white text-center p-4 border-4 border-white shadow-2xl">
<span className="text-xs font-bold uppercase tracking-widest leading-relaxed">Seen on<br/>Streets<br/>Global</span>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
<div className="col-span-1 h-full rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-full rounded-2xl overflow-hidden relative group mt-12 lg:mt-24">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-full rounded-2xl overflow-hidden relative group lg:-mt-12">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-full rounded-2xl overflow-hidden relative group mt-12">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1514989940723-e88727357428?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-deep-black text-white pt-24 pb-12 rounded-t-[3rem]">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start mb-20">
<div className="max-w-2xl mb-12 lg:mb-0">
<h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                        Step into your <br/> <span className="text-energy-orange">Next Move.</span>
</h2>
<div className="flex items-center bg-white/10 p-2 rounded-full max-w-md backdrop-blur-sm border border-white/10 focus-within:border-energy-orange transition-colors">
<input className="bg-transparent border-none text-white px-4 py-2 w-full focus:outline-none placeholder:text-gray-400" placeholder="Get the drop list..." type="email"/>
<button className="bg-energy-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-deep-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16">
<div>
<h4 className="font-bold mb-6 text-lg">Explore</h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Collections</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-lg">Support</h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sizing Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="font-bold tracking-tighter text-white uppercase">KINETIC</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:infinity-bold" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:camera-bold" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:play-circle-bold" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
