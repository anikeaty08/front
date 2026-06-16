import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<div className="w-full max-w-[1440px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative">

<header className="px-8 lg:px-12 py-6 flex items-center justify-between border-b border-slate-100">

<div className="text-3xl tracking-tight text-slate-900 flex items-center gap-1">
                MLC <span className="w-2 h-2 rounded-full bg-indigo-500 mb-2"></span>
</div>

<div className="hidden lg:flex items-center bg-slate-50/50 rounded-full px-6 py-3 w-full max-w-lg border border-slate-100 focus-within:border-indigo-300 focus-within:bg-white transition-all duration-300">
<iconify-icon className="text-xl text-slate-400 mr-3" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-base w-full placeholder:text-slate-400 text-slate-900" placeholder="Search courses..." type="text"/>
</div>

<div className="flex items-center gap-8 text-slate-600">
<a className="hidden sm:flex items-center gap-2 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
<span className="text-base">Orders</span>
</a>
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
<span className="text-base hidden sm:block">Favourites</span>
</a>
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors relative" href="#">
<iconify-icon className="text-xl" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-base hidden sm:block">Cart</span>
<span className="absolute -top-2 -right-2 sm:right-auto sm:left-3 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full border border-white">2</span>
</a>
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ml-2 shadow-sm border border-slate-100">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</div>
</div>
</header>

<div className="px-8 lg:px-12 py-5 flex gap-3 overflow-x-auto no-scrollbar">
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-base hover:bg-slate-50 transition-all duration-200">All Categories</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-transparent bg-[#6366F1] text-white text-base shadow-sm shadow-indigo-200/50">Health &amp; Wellness</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-base hover:bg-slate-50 transition-all duration-200">Sport</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-base hover:bg-slate-50 transition-all duration-200">Music</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-base hover:bg-slate-50 transition-all duration-200">Art</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-base hover:bg-slate-50 transition-all duration-200">Gaming</button>
</div>

<main className="p-8 lg:p-12 bg-slate-50/30 flex-grow">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-[1200px] mx-auto">

<div className="lg:col-span-8 flex flex-col">

<div className="mb-10">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 text-[#FACC15]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-base text-slate-500">4.9/5 Rating</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-base text-slate-500">169 Students</span>
</div>
<h1 className="text-5xl tracking-tight text-slate-900 mb-6 leading-tight">
                            Yoga for Beginners
                        </h1>
<p className="text-xl text-slate-600 leading-relaxed font-light">
                            Introductory course focusing on flexibility, breathing techniques, and basic yoga poses. Designed for absolute beginners to build a strong foundation in a relaxing environment.
                        </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50/50 flex items-center justify-center text-[#6366F1] mb-1">
<iconify-icon className="text-2xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="text-sm text-slate-500">Instructor</div>
<div className="text-base text-slate-900">L. Schmidt</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50/50 flex items-center justify-center text-[#6366F1] mb-1">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="text-sm text-slate-500">Schedule</div>
<div className="text-base text-slate-900">Mon, 18:00</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50/50 flex items-center justify-center text-[#6366F1] mb-1">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="text-sm text-slate-500">Location</div>
<div className="text-base text-slate-900">Room 2</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50/50 flex items-center justify-center text-[#6366F1] mb-1">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="text-sm text-slate-500">Duration</div>
<div className="text-base text-slate-900">12 Weeks</div>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-8 lg:p-10 mb-12">
<h2 className="text-3xl tracking-tight text-slate-900 mb-8">What you'll learn</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-600">Basic yoga poses and postures</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-600">Flexibility and strength building</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-600">Breathing techniques (Pranayama)</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-600">Stress relief methods</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-600">Mindfulness and meditation</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg text-slate-600">Body alignment principles</span>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-8 lg:p-10">
<h2 className="text-3xl tracking-tight text-slate-900 mb-8">Student Reviews</h2>
<div className="flex flex-col md:flex-row gap-12">

<div className="md:w-1/3 flex flex-col items-start">
<div className="text-5xl tracking-tight text-slate-900 mb-3">4.9</div>
<div className="flex items-center gap-1 text-[#FACC15] text-xl mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<div className="text-base text-slate-500">Based on 169 reviews</div>
</div>

<div className="md:w-2/3 flex flex-col gap-8">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Reviewer" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://i.pravatar.cc/150?img=32"/>
<div>
<div className="text-base text-slate-900">Sarah Jenkins</div>
<div className="text-sm text-slate-500">2 days ago</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-[#FACC15] text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-base text-slate-600 leading-relaxed font-light">
                                        "Absolutely loved this course! The instructor is incredibly patient and the progression from basic breathing to full poses felt completely natural. Highly recommended for absolute beginners."
                                    </p>
</div>
<div className="h-px w-full bg-slate-100"></div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Reviewer" className="w-10 h-10 rounded-full object-cover border border-slate-100" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="text-base text-slate-900">Marcus Chen</div>
<div className="text-sm text-slate-500">1 week ago</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-[#FACC15] text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<p className="text-base text-slate-600 leading-relaxed font-light">
                                        "A great starting point. The studio space is nice, but the real highlight is the detailed guidance on alignment. I feel much more confident joining a regular yoga class now."
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative">
<div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.06)] p-8 sticky top-12">

<div className="text-center mb-8">
<span className="text-sm text-slate-500 uppercase tracking-wider">Per Semester</span>
<div className="text-5xl tracking-tight text-slate-900 mt-2">$120.00</div>
</div>

<div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 mb-8">
<div className="flex justify-between items-end mb-4">
<span className="text-base text-slate-700">Course Capacity</span>
<div className="text-2xl tracking-tight text-slate-900">12<span className="text-slate-400 text-lg">/15</span></div>
</div>

<div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-[#6366F1] rounded-full w-[80%]"></div>
<div className="absolute top-1/2 left-[80%] -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-2 border-[#6366F1] rounded-full shadow-sm"></div>
</div>
<p className="text-sm text-center text-[#6366F1] mt-4">3 spots remaining</p>
</div>

<div className="space-y-3 mb-8">
<label className="flex items-center justify-between p-4 rounded-2xl border border-[#6366F1] bg-indigo-50/30 cursor-pointer transition-colors shadow-sm shadow-indigo-100/50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-[#6366F1] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#6366F1]"></div>
</div>
<span className="text-base text-slate-900">Standard Access</span>
</div>
<span className="text-base text-slate-900">Included</span>
</label>
<label className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-slate-300"></div>
<span className="text-base text-slate-700">Premium Kit</span>
</div>
<span className="text-base text-slate-500">+$45.00</span>
</label>
</div>

<button className="w-full bg-[#6366F1] hover:bg-indigo-600 text-white rounded-full py-4 text-lg transition-colors shadow-md shadow-indigo-200/50 flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:cart-large-linear"></iconify-icon> Add to Cart
                        </button>
</div>
</div>
</div>

<div className="mt-20 max-w-[1200px] mx-auto">
<h2 className="text-3xl tracking-tight text-slate-900 mb-8 px-2">Related Courses</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col group transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center mb-6 overflow-hidden">
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#FACC15] text-yellow-900 text-xs font-medium px-4 py-1.5 rounded-full z-10 whitespace-nowrap">
                                Top item
                            </div>
<img alt="Pilates" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow text-center">
<h3 className="text-xl tracking-tight text-slate-900 mb-6 truncate">Pilates Basics</h3>
<div className="mt-auto">
<button className="mx-auto flex items-center justify-center gap-2 border border-[#6366F1] text-[#6366F1] rounded-full px-6 py-2 hover:bg-indigo-50 transition-colors w-max">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-base">$110.00</span>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col group transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center mb-6 overflow-hidden">
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<img alt="Stretching" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow text-center">
<h3 className="text-xl tracking-tight text-slate-900 mb-6 truncate">Stretching &amp; Mobility</h3>
<div className="mt-auto">
<button className="mx-auto flex items-center justify-center gap-2 border border-[#6366F1] text-[#6366F1] rounded-full px-6 py-2 hover:bg-indigo-50 transition-colors w-max">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-base">$95.00</span>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col group transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center mb-6 overflow-hidden">
<button className="absolute top-4 right-4 bg-[#6366F1] rounded-full p-2.5 shadow-sm text-white transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm text-sm text-slate-800 flex items-center gap-1 z-10">
                                4.9/5 <iconify-icon className="text-sm text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<img alt="Meditation" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow text-center">
<h3 className="text-xl tracking-tight text-slate-900 mb-6 truncate">Yoga &amp; Meditation</h3>
<div className="mt-auto">
<button className="mx-auto flex items-center justify-center gap-2 border border-[#6366F1] text-[#6366F1] rounded-full px-6 py-2 hover:bg-indigo-50 transition-colors w-max">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-base">$110.00</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
