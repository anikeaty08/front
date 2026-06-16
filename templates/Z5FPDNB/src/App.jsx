import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    particlesJS.load('particles-js','https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');
    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only absolute bg-white p-2 top-2 left-2 rounded-md shadow" href="#main">Skip to main</a>

<header className="bg-white w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 relative z-30">
<div className="flex items-center space-x-4">
<img alt="Giọt Máu Vàng" className="h-10 w-auto drop-shadow-[0_0_12px_rgba(226,62,87,0.4)] fade-up" src="giotmauvang-logo.png"/>
</div>
<nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-7 fade-up d1">
<a className="relative text-[15px] hover:text-[#4A6B8A] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#4A6B8A] after:rounded-full after:transition-all" href="#">Home</a>
<a className="relative text-[15px] hover:text-[#4A6B8A] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#4A6B8A] after:rounded-full after:transition-all" href="#">Find Events</a>
<a className="relative text-[15px] hover:text-[#4A6B8A] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#4A6B8A] after:rounded-full after:transition-all" href="#">FAQs</a>
<a className="relative text-[15px] hover:text-[#4A6B8A] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#4A6B8A] after:rounded-full after:transition-all" href="#">Contact Us</a>
</nav>
<div className="flex items-center space-x-3 fade-up d2">
<button className="pulse-btn px-7 py-2 bg-[#F0F2F5] text-[15px] rounded-[10px] shadow-md transition hover:bg-[#E23E57] hover:text-white">Login / Register</button>
<img alt="Vietnamese" className="h-7 w-7 rounded-full border-2 border-[#F0F2F5]" src="https://flagcdn.com/w20/vn.png"/>
</div>
<button aria-label="Open menu" className="md:hidden ml-2">
<svg fill="none" height="28" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="28"><path d="M4 7h20M4 13h20M4 19h20"></path></svg>
</button>
</header>

<section className="relative min-h-[85vh] flex items-center overflow-hidden pt-[36px]" id="main">
<div className="absolute inset-0" id="particles-js"></div>
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="absolute left-0 top-0 w-[85vw] max-w-[820px] h-[65vh] min-h-[380px] bg-[#4A6B8A]/60 rounded-[45%_52%_38%_52%/51%_48%_60%_49%] blur-[2px] animate-[heroBlobMove_8s_ease-in-out_infinite_alternate] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl lg:max-w-4xl pl-5 sm:pl-8 fade-up d1">
<h1 className="text-white text-[40px] font-extrabold tracking-tight leading-tight drop-shadow-lg">The Golden Drop: A Heartbeat for Ho Chi Minh City.</h1>
<p className="text-white text-[17px] mt-3 mb-7 max-w-2xl drop-shadow">Giọt Máu Vàng weaves compassion into action, connecting every vital drop to those who need it most, seamlessly.</p>
<div className="flex items-center space-x-5">
<button className="pulse-btn bg-[#E23E57] text-white px-7 py-3 rounded-[10px] font-semibold shadow-md hover:scale-105 transition">Begin Your Life-Saving Journey</button>
<button className="border-2 border-white text-white px-7 py-3 rounded-[10px] font-semibold hover:bg-white hover:text-[#E23E57] transition">See Our Impact</button>
</div>
</div>
</section>

<section className="relative py-12 md:py-16 bg-[#F0F2F5] mt-[36px]">
<div className="max-w-5xl mx-auto px-4 sm:px-8">
<h2 className="text-[24px] font-semibold tracking-tight mb-7 fade-up">City’s Pulse: Real-time Blood Needs</h2>
<div className="blood-cluster fade-up d1 relative">

<template id="bloodCell">
<div className="flex flex-col items-center justify-center bg-white/80 rounded-full shadow-md px-8 py-7 mb-3 w-[126px] h-[126px]">
<div className="mb-1 text-[20px] font-medium">X</div>
<div className="text-[13px]">Status</div>
</div>
</template>

<div className="cluster-cell cluster-cell-1">
<div className="flex flex-col items-center justify-center bg-white/80 rounded-full shadow-md px-8 py-7 w-[126px] h-[126px]">
<i className="w-6 h-6 text-[#EF5350] mb-1 animate-ping-slow" data-lucide="droplet"></i>
<div className="text-[20px] font-medium">O-</div>
<span className="text-[13px] text-[#EF5350]">Urgent</span>
</div>
</div>
<div className="cluster-cell cluster-cell-2">
<div className="flex flex-col items-center justify-center bg-white/80 rounded-full shadow-md px-8 py-7 w-[126px] h-[126px]">
<i className="w-6 h-6 text-[#F4D03F] mb-1" data-lucide="activity"></i>
<div className="text-[20px] font-medium">A+</div>
<span className="text-[13px] text-[#F4D03F]">Low</span>
</div>
</div>
<div className="cluster-cell cluster-cell-3">
<div className="flex flex-col items-center justify-center bg-white/80 rounded-full shadow-md px-8 py-7 w-[126px] h-[126px]">
<i className="w-6 h-6 text-[#5CB85C] mb-1" data-lucide="heart-pulse"></i>
<div className="text-[20px] font-medium">O+</div>
<span className="text-[13px] text-[#5CB85C]">Stable</span>
</div>
</div>

</div>
</div>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(74,107,138,.05)1.2px,transparent 1.2px),radial-gradient(rgba(74,107,138,.03).8px,transparent .8px)', backgroundSize: '28px 28px,16px 16px'}}></div>
</section>

<section className="py-14 md:py-20 bg-white mt-[36px]">
<div className="max-w-6xl mx-auto px-4 sm:px-8">
<h2 className="text-[24px] font-semibold tracking-tight mb-9 fade-up">Where Every Drop Makes a Story</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">

<article className="relative bg-white rounded-[10px] shadow-md overflow-visible fade-up d1">
<img alt="" className="absolute -top-5 -left-5 w-24 h-24 object-cover rounded-[14px] shadow-md" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="pl-28 pr-5 pt-5 pb-6">
<h3 className="text-[20px] font-medium mb-2">A City Saved by a Surge of Kindness</h3>
<p className="text-[15px] text-[#9CA3AF] mb-4">After a citywide call, thousands donated in a single weekend—helping replenish hospitals and bring hope to hundreds of families.</p>
<a className="text-[#E23E57] text-[15px] underline-offset-4 hover:underline" href="#">Read More</a>
</div>
</article>

<article className="relative bg-white rounded-[10px] shadow-md overflow-hidden fade-up d2">
<img alt="" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<span className="absolute -top-6 left-6 bg-[#4A6B8A] text-white rounded-full px-5 py-2 text-[15px] font-semibold shadow-md">JUN 15</span>
<div className="px-7 pt-8 pb-6">
<h3 className="text-[20px] font-medium mb-1">District 1 Community Blood Drive</h3>
<p className="text-[15px] text-[#9CA3AF] mb-4">Join hundreds in giving back. Live music, health screenings, and more.</p>
<button className="bg-[#4A6B8A] text-white px-5 py-2 rounded-[10px] font-medium hover:bg-[#E23E57] transition">Register Now</button>
</div>
</article>

<article className="relative fade-up d3">
<blockquote className="bg-[#4A6B8A]/10 rounded-[50%_45%_55%_45%/58%_47%_53%_52%] shadow-md p-7 text-[17px] italic">
            “I never thought a few minutes of my time could give someone years with their family. I’ll keep donating as long as I can.”
            <footer className="mt-4 flex items-center space-x-3">
<img alt="Linh T." className="w-11 h-11 rounded-full object-cover border-2 border-white shadow" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80"/>
<span className="text-[13px] font-semibold">Linh T., Donor</span>
</footer>
</blockquote>
</article>

</div>
<div className="flex flex-wrap gap-5 mt-12">
<button className="bg-[#4A6B8A] text-white px-7 py-2 rounded-[10px] font-semibold hover:bg-[#E23E57] transition">Dive Deeper into News</button>
<button className="bg-[#4A6B8A] text-white px-7 py-2 rounded-[10px] font-semibold hover:bg-[#E23E57] transition">Explore All Events</button>
<button className="bg-[#4A6B8A] text-white px-7 py-2 rounded-[10px] font-semibold hover:bg-[#E23E57] transition">Share Your Story</button>
</div>
</div>
</section>

<section className="py-12 md:py-16 bg-[#F0F2F5] mt-[28px]">
<div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-10 lg:gap-20">

<div className="flex-1">
<h2 className="text-[24px] font-semibold mb-7">Seamless Support, Meaningful Connection</h2>
<div className="flex overflow-x-auto space-x-4 pb-3">
<button className="ripple min-w-[120px] flex flex-col items-center bg-[#F0F2F5] px-6 py-5 rounded-[10px] shadow-md hover:bg-[#FF9800] hover:scale-105 transition">
<i className="w-7 h-7 text-[#E23E57] mb-2" data-lucide="calendar-heart"></i>
<span className="text-[15px]">Book Appointment</span>
</button>
<button className="ripple min-w-[120px] flex flex-col items-center bg-[#F0F2F5] px-6 py-5 rounded-[10px] shadow-md hover:bg-[#FF9800] hover:scale-105 transition">
<i className="w-7 h-7 text-[#4A6B8A] mb-2" data-lucide="map-pin"></i>
<span className="text-[15px]">Find Center</span>
</button>
<button className="ripple min-w-[120px] flex flex-col items-center bg-[#F0F2F5] px-6 py-5 rounded-[10px] shadow-md hover:bg-[#FF9800] hover:scale-105 transition">
<i className="w-7 h-7 text-[#5CB85C] mb-2" data-lucide="heart-handshake"></i>
<span className="text-[15px]">Volunteer</span>
</button>
<button className="ripple min-w-[120px] flex flex-col items-center bg-[#F0F2F5] px-6 py-5 rounded-[10px] shadow-md hover:bg-[#FF9800] hover:scale-105 transition">
<i className="w-7 h-7 text-[#FF9800] mb-2" data-lucide="help-circle"></i>
<span className="text-[15px]">FAQs</span>
</button>
</div>
</div>

<div className="flex-1 relative">
<div className="absolute -top-6 -left-7 w-full h-full bg-[#4A6B8A] opacity-10 rounded-[22px] blur-[18px] pointer-events-none"></div>
<div className="relative bg-white/90 p-8 rounded-[10px] shadow-md">
<h3 className="text-[20px] font-medium mb-3">About Us</h3>
<p className="text-[15px]">Giọt Máu Vàng is a trusted community initiative connecting donors and recipients with care, efficiency, and innovation. Our mission: to ensure every life-saving drop finds its way with dignity and hope. Together, we make Ho Chi Minh City stronger and more compassionate.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#374151] pt-10 pb-4 mt-7 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-[#4A6B8A] to-[#E23E57] rounded-t-[56%_100%]"></div>
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 relative z-10">
<p className="text-[#9CA3AF] text-[11px]">© 2025 Giọt Máu Vàng. All rights reserved.</p>
<nav className="flex space-x-6 mt-3 md:mt-0">
<a className="text-[#9CA3AF] text-[13px] hover:text-white transition" href="#">Privacy Policy</a>
<a className="text-[#9CA3AF] text-[13px] hover:text-white transition" href="#">Terms of Service</a>
<a className="text-[#9CA3AF] text-[13px] hover:text-white transition" href="#">Sitemap</a>
</nav>
<div className="flex space-x-3 mt-3 md:mt-0">
<a className="ripple w-9 h-9 flex items-center justify-center rounded-full bg-[#4A6B8A] text-white hover:bg-[#E23E57] transition" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="ripple w-9 h-9 flex items-center justify-center rounded-full bg-[#4A6B8A] text-white hover:bg-[#E23E57] transition" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="ripple w-9 h-9 flex items-center justify-center rounded-full bg-[#4A6B8A] text-white hover:bg-[#E23E57] transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</footer>


    </>
  );
}
