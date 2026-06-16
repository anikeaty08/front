import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    import { createIcons, icons } from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";
    window.addEventListener('DOMContentLoaded',()=>createIcons({icons}));
  


    particlesJS.load('particles-js','https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json',()=>{});
  


    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // IntersectionObserver for fade-ins
    const observer=new IntersectionObserver((entries)=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('show')), {threshold:0.2});
    document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

    // ChartJS Macro Split
    const ctx=document.getElementById('macroChart');
    new Chart(ctx,{type:'doughnut',data:{labels:['Protein','Carbs','Fats'],datasets:[{data:[30,45,25],backgroundColor:['#10B981','#F59E0B','#EF4444'],borderWidth:0}]},options:{cutout:'70%',plugins:{legend:{display:false}},animation:{duration:1500}}});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10" id="particles-js"></div>


<header className="sticky top-0 z-20 backdrop-blur bg-white/70">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="text-xl font-semibold tracking-tight text-emerald-600" href="#">NutriCraft</a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-emerald-600" href="#services">Services</a>
<a className="hover:text-emerald-600" href="#about">About</a>
<a className="hover:text-emerald-600" href="#testimonials">Success Stories</a>
<a className="hover:text-emerald-600" href="#contact">Contact</a>
</nav>
<button aria-label="Open Menu" className="md:hidden"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pt-20 pb-28">
<div className="space-y-6">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 fade-in" style={{transitionDelay: '.15s'}}>Personalized Nutrition<br/>for <span className="text-emerald-600">Optimal Health</span></h1>
<p className="text-lg text-gray-600 fade-in" style={{transitionDelay: '.25s'}}>Custom meal plans, evidence-based coaching, and real-time tracking tools to help you fuel, perform, and thrive.</p>
<a className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md shadow-lg transition-all fade-in" href="#contact" style={{transitionDelay: '.35s'}}>
          Get Started <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative fade-in" style={{transitionDelay: '.45s'}}>
<img alt="Fresh produce" className="rounded-2xl shadow-xl w-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-emerald-400/40 to-amber-300/40 rounded-full blur-3xl"></div>
</div>
</div>

<div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-amber-200/20 rounded-full blur-[120px]"></div>
</section>
<hr className="border-t border-gray-200"/>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 fade-in">What We Offer</h2>
<div className="grid md:grid-cols-3 gap-10">

<div className="border-gradient rounded-xl p-1 fade-in" style={{transitionDelay: '.1s'}}>
<div className="glass rounded-xl h-full p-6 space-y-4">
<i className="w-8 h-8 text-emerald-600" data-lucide="apple"></i>
<h3 className="text-xl font-medium">Custom Meal Plans</h3>
<p className="text-gray-600 text-sm leading-relaxed">Balanced, goal-focused menus designed around your tastes, lifestyle, and dietary needs.</p>
</div>
</div>
<div className="border-gradient rounded-xl p-1 fade-in" style={{transitionDelay: '.2s'}}>
<div className="glass rounded-xl h-full p-6 space-y-4">
<i className="w-8 h-8 text-emerald-600" data-lucide="activity"></i>
<h3 className="text-xl font-medium">Metabolic Testing</h3>
<p className="text-gray-600 text-sm leading-relaxed">In-depth metabolic assessments to pinpoint precise calorie &amp; macro requirements.</p>
</div>
</div>
<div className="border-gradient rounded-xl p-1 fade-in" style={{transitionDelay: '.3s'}}>
<div className="glass rounded-xl h-full p-6 space-y-4">
<i className="w-8 h-8 text-emerald-600" data-lucide="trending-up"></i>
<h3 className="text-xl font-medium">Progress Analytics</h3>
<p className="text-gray-600 text-sm leading-relaxed">Visual dashboards &amp; weekly check-ins so you can track improvements and stay motivated.</p>
</div>
</div>
</div>
</section>
<hr className="border-t border-gray-200"/>

<section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-start" id="about">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 fade-in">Your Data-Driven Nutritionist</h2>
<p className="text-gray-600 fade-in">We merge cutting-edge research with compassionate coaching to give you a sustainable roadmap to wellness. Our approach is rooted in nutrient timing, metabolic flexibility, and mindful eating.</p>
<ul className="space-y-2 list-disc list-inside text-sm text-gray-700 fade-in">
<li>Certified Clinical Nutritionists &amp; Dietitians</li>
<li>Evidence-based protocols</li>
<li>24/7 chat support</li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-lg font-medium flex items-center gap-2 fade-in">Sample Macro Split<i className="w-5 h-5 text-emerald-600" data-lucide="pie-chart"></i></h3>
<div className="relative fade-in">
<div className="p-4 bg-white rounded-xl shadow-inner border border-gray-100">
<div className="relative w-full h-80">
<canvas className="absolute inset-0" id="macroChart"></canvas>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-gray-200"/>

<section className="max-w-7xl mx-auto px-6 py-24" id="testimonials">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 fade-in">Success Stories</h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-6 fade-in" style={{transitionDelay: '.1s'}}>
<blockquote className="text-gray-700 italic">“I dropped my cholesterol by 40 points and ran my first 10K thanks to NutriCraft’s realistic meal plans!”</blockquote>
<div className="flex items-center gap-4">
<img alt="Client" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div>
<p className="font-medium">Alicia Gomez</p>
<p className="text-xs text-gray-500">Marketing Director</p>
</div>
</div>
</div>
<div className="space-y-6 fade-in" style={{transitionDelay: '.2s'}}>
<blockquote className="text-gray-700 italic">“The data-driven check-ins kept me accountable, and I gained 6 lbs of lean muscle while shedding fat.”</blockquote>
<div className="flex items-center gap-4">
<img alt="Client" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div>
<p className="font-medium">Jordan Phillips</p>
<p className="text-xs text-gray-500">Software Engineer</p>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-gray-200"/>

<section className="max-w-4xl mx-auto px-6 py-24" id="contact">
<div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100 relative fade-in">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">Let’s Work Together</h2>
<form className="grid sm:grid-cols-2 gap-6">
<div className="flex flex-col">
<label className="text-sm font-medium mb-2">Full Name</label>
<input className="rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Your name" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-sm font-medium mb-2">Email</label>
<input className="rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="you@example.com" type="email"/>
</div>
<div className="sm:col-span-2 flex flex-col">
<label className="text-sm font-medium mb-2">Goals</label>
<textarea className="rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Describe your health goals…" rows="4"></textarea>
</div>
<div className="sm:col-span-2">
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-md shadow-md transition-all" type="submit">Request Consultation</button>
</div>
</form>

<div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-400/40 to-emerald-200/40 rounded-full blur-3xl"></div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-gray-500">© <span id="year"></span> NutriCraft. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-emerald-600" href="#"><i data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-emerald-600" href="#"><i data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-emerald-600" href="#"><i data-lucide="linkedin"></i></a>
</div>
</div>
</footer>



    </>
  );
}
