import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const observer=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){t.target.classList.add('visible');observer.unobserve(t.target);}})},{threshold:.15});
    document.querySelectorAll('[data-fade]').forEach(el=>observer.observe(el));

    lucide.createIcons({strokeWidth:1.5});

    const ctx=document.getElementById('growthChart');
    if(ctx){
      new Chart(ctx,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],datasets:[{label:'Commits',data:[6,9,12,18,15,22,30,28,24,27,33,40],borderColor:'#6366f1',backgroundColor:'transparent',tension:.4}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#9ca3af'}},y:{ticks:{color:'#9ca3af'},grid:{color:'rgba(255,255,255,.05)'}}}});
    }

    // Update year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" width="100%"></iframe>
</div>

<nav className="container mx-auto px-6 py-6 content">
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="h-8 w-8 stroke-indigo-400" data-lucide="infinity" strokeWidth="1.5"></i>
<span className="ml-3 text-xl tracking-tight font-medium">techrolabs</span>
</div>
<div className="hidden md:flex space-x-10 text-sm">
<a className="transition-colors hover:text-indigo-300" href="#">Work</a>
<a className="transition-colors hover:text-indigo-300" href="#">Services</a>
<a className="transition-colors hover:text-indigo-300" href="#">About</a>
<a className="transition-colors hover:text-indigo-300" href="#">Contact</a>
</div>
<button className="text-sm border border-indigo-500/30 rounded-md px-4 py-2 hover:bg-indigo-500/10 transition-all">
        Let's Talk
      </button>
</div>
</nav>

<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent content"></div>

<section className="relative overflow-hidden">
<div className="container mx-auto px-6 py-16 md:py-32 content">

<div className="flex flex-col items-center text-center max-w-4xl mx-auto visible" data-fade="">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Smart tech</span>
          for real-world impact
        </h1>
<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-extralight tracking-wide text-gray-300">
          We combine engineering precision with a friendly, human approach—solving your toughest challenges and accelerating growth.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all bg-white text-black">
            Explore services
          </button>
<button className="bg-transparent border border-indigo-500/30 rounded-md px-6 py-3 hover:bg-indigo-500/10 transition-all">
            Talk to an expert
          </button>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20" data-fade="">
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Brand Identity</p>
<p className="font-extralight text-gray-400">Crafting unique visual languages</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">UI/UX Design</p>
<p className="font-extralight text-gray-400">Intuitive digital experiences</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Web Development</p>
<p className="font-extralight text-gray-400">Cutting-edge technology</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Motion Design</p>
<p className="font-extralight text-gray-400">Bringing ideas to life</p>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-24"></div>

<div className="border rounded-lg p-8 backdrop-blur-sm bg-white/5 border-white/10" data-fade="">
<h2 className="text-3xl font-light tracking-tight mb-2">Growth snapshot</h2>
<p className="font-extralight mb-6 text-gray-400">Open-source contributions and project velocity over the last 12 months.</p>
<div>
<div className="relative w-full h-64">
<canvas className="w-full h-full" id="growthChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

<footer className="container mx-auto px-6 py-14">
<div className="flex flex-col md:flex-row md:justify-between gap-10">
<div className="flex items-center">
<i className="h-6 w-6 stroke-indigo-400" data-lucide="infinity" strokeWidth="1.5"></i>
<span className="ml-2 font-medium text-lg tracking-tight">techrolabs</span>
</div>
<div className="flex space-x-10 text-sm">
<a className="transition-colors hover:text-indigo-300" href="#">Work</a>
<a className="transition-colors hover:text-indigo-300" href="#">Services</a>
<a className="transition-colors hover:text-indigo-300" href="#">About</a>
<a className="transition-colors hover:text-indigo-300" href="#">Contact</a>
</div>
<div className="flex space-x-6">
<a aria-label="Twitter" className="transition-colors hover:text-indigo-300" href="#">
<i className="h-5 w-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="GitHub" className="transition-colors hover:text-indigo-300" href="#">
<i className="h-5 w-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a aria-label="LinkedIn" className="transition-colors hover:text-indigo-300" href="#">
<i className="h-5 w-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="mt-10 text-xs text-gray-500 font-extralight">
      © <span id="year"></span> techrolabs. All rights reserved.
    </div>
</footer>


    </>
  );
}
