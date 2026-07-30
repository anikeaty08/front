import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  const ctxGrowth = document.getElementById('growthChart').getContext('2d');
  const growthChart = new Chart(ctxGrowth, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'User Growth',
        data: [120, 190, 300, 500, 750, 900, 1200],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        fill: true,
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#4F46E5'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            font: { family: "'Plus Jakarta Sans', sans-serif", weight: '600' },
            color: '#374151'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        x: {
          ticks: { color: '#6B7280', font: { family: "'Inter', sans-serif", weight: '500' } },
          grid: { display: false }
        },
        y: {
          ticks: { color: '#6B7280', font: { family: "'Inter', sans-serif", weight: '500' } },
          grid: { color: '#E5E7EB' }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });

  const ctxSecurity = document.getElementById('securityChart').getContext('2d');
  const securityChart = new Chart(ctxSecurity, {
    type: 'bar',
    data: {
      labels: ['Firewall', 'Encryption', 'Access Control', 'Monitoring', 'Incident Response'],
      datasets: [{
        label: 'Security Effectiveness (%)',
        data: [85, 90, 78, 88, 92],
        backgroundColor: '#7C3AED',
        borderRadius: 6,
        maxBarThickness: 40
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          yAlign: 'bottom',
          backgroundColor: '#7C3AED',
          titleFont: { family: "'Plus Jakarta Sans', sans-serif", weight: '600' },
          bodyFont: { family: "'Inter', sans-serif", weight: '500' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#6B7280', font: { family: "'Inter', sans-serif", weight: '500' } },
          grid: { display: false }
        },
        y: {
          min: 0,
          max: 100,
          ticks: { color: '#6B7280', font: { family: "'Inter', sans-serif", weight: '500' }, stepSize: 20 },
          grid: { color: '#E5E7EB' }
        }
      }
    }
  });


lucide.createIcons();const range=document.getElementById('range'),rangeVal=document.getElementById('rangeVal');range.addEventListener('input',e=>rangeVal.textContent=e.target.value+'%');const ddBtn=document.getElementById('ddBtn'),ddMenu=document.getElementById('ddMenu');ddBtn.addEventListener('click',e=>{e.stopPropagation();ddMenu.classList.toggle('hidden')});ddMenu.querySelectorAll('li').forEach(li=>li.addEventListener('click',()=>{ddBtn.firstChild.textContent='Mode: '+li.dataset.q+' ';ddMenu.classList.add('hidden')}));document.addEventListener('click',()=>ddMenu.classList.add('hidden'));const darkToggle=document.getElementById('darkToggle'),hero=document.querySelector('section');darkToggle.addEventListener('change',()=>hero.classList.toggle('invert',darkToggle.checked));
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div><main className="min-h-screen pt-6 pr-6 pb-6 pl-6"><section className="relative overflow-hidden transform opacity-0 text-white bg-gradient-to-r from-blue-500/10 to-purple-500/30 border-slate-50/10 border rounded-[40px] pt-14 pr-12 pb-14 pl-12 shadow-soft translate-y-8" style={{animation: `1s ease-out 0.2s 1 normal forwards running slideUp`}}><header className="flex items-center justify-between text-sm mb-12 opacity-0" style={{animation: `fadeIn 0.6s ease-out 0.4s forwards`}}><div className="flex items-center gap-2 font-semibold font-geist"><span className="inline-flex h-6 w-6 rounded-full items-center justify-center bg-white/20"><svg className="lucide lucide-cpu w-3.5 h-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg></span>NeuroTech</div><nav className="hidden md:flex items-center gap-8"><button className="flex items-center gap-1 hover:underline transition-colors font-geist">Solutions <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></button><button className="flex items-center gap-1 hover:underline transition-colors font-geist">Platform <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></button><button className="hover:underline transition-colors font-geist">Resources</button><button className="hover:underline transition-colors font-geist">Company</button><button className="hover:underline transition-colors font-geist">Support</button></nav><button className="hidden md:inline-flex transition-colors text-zenith-700 hover:bg-gray-50 font-medium bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-red-300 via-pink-400 to-purple-600 rounded-full pt-2 pr-6 pb-2 pl-6 font-geist" style={{}}>Get Started</button></header><div className="grid lg:grid-cols-2 gap-10 items-center"><div className="space-y-10"><div className="opacity-0" style={{animation: `slideRight 0.8s ease-out 0.6s forwards`}}><h2 className="text-4xl md:text-5xl leading-tight tracking-tight font-playfair font-medium">The <span className="text-white/90 font-playfair font-medium">Next Era</span> of Smart <span className="text-white/90 font-playfair font-medium">Innovation</span></h2><p className="mt-4 text-sm md:text-base max-w-sm text-white/90 font-geist">We're pioneering revolutionary AI-powered systems that transform everything from autonomous robotics to intelligent automation solutions.</p></div><div className="opacity-0" style={{animation: `slideRight 0.8s ease-out 0.8s forwards`}}><h3 className="text-2xl font-playfair font-medium">Intelligent <span className="text-white/90 font-playfair font-medium">Automation</span></h3><p className="mt-2 text-sm max-w-xs text-white/90 font-geist">We transform ideas into reality—seamless, intelligent and revolutionary.</p></div><div className="flex items-center gap-4 text-sm opacity-0" style={{animation: `slideRight 0.8s ease-out 1s forwards`}}><span className="font-geist">Connect with us:</span><a className="transition-colors hover:text-white/70" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a><a className="transition-colors hover:text-white/70" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a><a className="transition-colors hover:text-white/70" href="#"><svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></a></div></div><div className="relative flex opacity-0 justify-center" style={{animation: `slideLeft 0.8s ease-out 0.8s forwards`}}><img className="w-[480px] max-w-full object-cover rounded-xl drop-shadow-2xl" id="heroImg" src="/assets/371e5c0e-97fc-44b9-abde-e14d1b55ae14_1600w.jpg" /><div className="absolute -left-6 top-16 flex flex-col items-start text-sm opacity-0" style={{animation: `fadeIn 0.6s ease-out 1.2s forwards`}}><span className="chip font-geist">Neural processing</span><div className="h-px w-16 mt-2 bg-white/70"></div></div><div className="absolute right-16 top-24 flex flex-col items-end text-sm opacity-0" style={{animation: `fadeIn 0.6s ease-out 1.4s forwards`}}><span className="chip font-geist">Advanced ML</span><div className="h-px w-16 mt-2 bg-white/70"></div></div><div className="absolute right-10 bottom-24 flex flex-col items-end text-sm opacity-0" style={{animation: `fadeIn 0.6s ease-out 1.6s forwards`}}><span className="chip font-geist">Smart systems</span><div className="h-px w-16 mt-2 bg-white/70"></div></div></div></div><div className="mt-28 flex flex-wrap items-center gap-6 text-xs rounded-full px-6 py-3 backdrop-blur opacity-0 bg-white/10" style={{animation: `slideUp 0.6s ease-out 1.8s forwards`}}><label className="flex items-center gap-2 cursor-pointer select-none font-geist"><input className="toggle sr-only" id="darkToggle" type="checkbox" /><span className="relative inline-block h-5 w-9 rounded-full after:absolute after:left-1 after:top-0.5 after:h-4 after:w-4 after:bg-white after:rounded-full transition-all duration-300 bg-white/30"></span>Night mode</label><div className="flex gap-2 items-center" style={{alignItems: `center`}}><svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg><input className="w-40" id="range" type="range" value="75" /><span className="font-geist" id="rangeVal">28%</span></div><div className="relative"><button className="flex gap-1 transition-colors rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center hover:bg-white/30 bg-white/20 font-geist" id="ddBtn">Mode: Advanced <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></button><ul className="absolute left-0 mt-2 rounded-md overflow-hidden shadow-lg text-xs w-32 z-10 bg-white text-gray-700" id="ddMenu" style={{}}><li className="px-3 py-2 cursor-pointer transition-colors hover:bg-gray-100 font-geist" data-q="Basic" style={{}}>Basic</li><li className="px-3 py-2 cursor-pointer transition-colors hover:bg-gray-100 font-geist" data-q="Advanced" style={{}}>Advanced</li><li className="px-3 py-2 cursor-pointer transition-colors hover:bg-gray-100 font-geist" data-q="Enterprise" style={{}}>Enterprise</li></ul></div></div></section><section className="max-w-7xl sm:px-12 lg:px-24 bg-gradient-to-b from-blue-500 to-purple-500/0 rounded-3xl mt-20 mr-auto ml-auto pt-10 pr-6 pb-10 pl-6" style={{}}>
<h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 font-playfair font-medium" style={{}}>Why Choose NeuroTech?</h2>
<p className="max-w-2xl sm:text-lg text-base text-gray-950 border-slate-400 mt-4 mb-10 font-geist" style={{}}>Discover the benefits of integrating our advanced AI systems into your enterprise environment to accelerate innovation and efficiency.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white">
<svg className="lucide lucide-rocket w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><path d="M9 21V9l12-2-6 6-3 7z"></path><path d="M9 21h12"></path></svg>
<h3 className="text-xl font-semibold text-gray-900 font-geist" style={{}}>Accelerated Growth</h3>
<p className="text-sm sm:text-base text-gray-600 font-geist" style={{}}>Leverage AI-driven insights and automation to scale your business faster and smarter.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white">
<svg className="lucide lucide-shield-check w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
<h3 className="text-xl font-semibold text-gray-900 font-geist" style={{}}>Robust Security</h3>
<p className="text-sm sm:text-base text-gray-600 font-geist" style={{}}>Our systems incorporate advanced security protocols to keep your data and operations safe.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white">
<svg className="lucide lucide-users w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M6 21v-2a4 4 0 0 1 3-3.87"></path></svg>
<h3 className="text-xl font-semibold text-gray-900 font-geist" style={{}}>Expert Support</h3>
<p className="text-sm sm:text-base text-gray-600 font-geist" style={{}}>Our dedicated team provides personalized assistance to ensure your success.</p>
</div>
</div>
</section><section className="max-w-7xl sm:px-12 lg:px-24 rounded-3xl mt-20 mr-auto ml-auto pt-12 pr-6 pb-16 pl-6 bg-white shadow-lg">
<h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8 font-playfair font-medium">Our Performance Metrics</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<canvas className="w-full h-64 rounded-lg bg-gray-50 shadow-inner" height="520" id="growthChart" style={{display: `block`, boxSizing: `border-box`, height: `260px`, width: `520px`}} width="1040"></canvas>
</div>
<div className="">
<canvas className="w-full h-64 rounded-lg bg-gray-50 shadow-inner" height="520" id="securityChart" style={{display: `block`, boxSizing: `border-box`, height: `260px`, width: `520px`}} width="1040"></canvas>
</div>
</div>
</section><section className="max-w-7xl sm:px-12 lg:px-24 bg-gradient-to-r from-blue-500/0 to-[#ffffff]/40 border-slate-50/10 border rounded-3xl mt-20 mr-auto ml-auto pt-12 pr-6 pb-16 pl-6 shadow-lg">
<h2 className="sm:text-4xl text-3xl text-slate-50 tracking-tight mb-8 font-playfair font-medium">Client Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<article className="flex flex-col rounded-2xl shadow-md bg-gray-50 p-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-gray-900 mb-3 font-geist">Revolutionizing Retail Analytics</h3>
<p className="text-sm text-gray-600 flex-grow mb-4 font-geist">A leading retail chain enhanced their customer insights by integrating NeuroTech’s AI solutions, resulting in a 40% increase in sales efficiency.</p>
<button aria-label="Read more about Revolutionizing Retail Analytics" className="self-start hover:underline flex gap-1 font-semibold text-indigo-600 pr-0 items-center font-geist">
        Read More
        <svg className="lucide lucide-arrow-right w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(79, 70, 229)`}} xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
<article className="flex flex-col hover:shadow-lg transition-shadow bg-gray-50 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<h3 className="text-xl font-semibold text-gray-900 mb-3 font-geist">Smart Automation in Manufacturing</h3>
<p className="text-sm text-gray-600 flex-grow mb-4 font-geist">NeuroTech’s intelligent automation reduced operational costs by 25% and improved product quality for a major manufacturing firm.</p>
<button aria-label="Read more about Smart Automation in Manufacturing" className="self-start text-indigo-600 font-semibold hover:underline flex items-center gap-1 font-geist">
        Read More
        <svg className="lucide lucide-arrow-right w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(79, 70, 229)`}} xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
<article className="flex flex-col hover:shadow-lg transition-shadow bg-gray-50 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<h3 className="text-xl font-semibold text-gray-900 mb-3 font-geist">Enhancing Cybersecurity Posture</h3>
<p className="text-sm text-gray-600 flex-grow mb-4 font-geist">By deploying NeuroTech’s advanced security protocols, a financial services provider significantly reduced security breaches and ensured regulatory compliance.</p>
<button aria-label="Read more about Enhancing Cybersecurity Posture" className="self-start text-indigo-600 font-semibold hover:underline flex items-center gap-1 font-geist">
        Read More
        <svg className="lucide lucide-arrow-right w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(79, 70, 229)`}} xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
</div>
</section><section className="max-w-7xl sm:px-12 lg:px-24 bg-white/20 rounded-3xl mt-20 mr-auto ml-auto pt-12 pr-6 pb-16 pl-6 shadow-lg">
<h2 className="sm:text-4xl text-3xl font-medium text-slate-50 tracking-tight font-playfair mb-8">Upcoming Innovations</h2>
<p className="max-w-3xl sm:text-lg text-base text-slate-200 font-geist mb-12">Stay ahead with NeuroTech’s latest advancements designed to redefine intelligent automation and AI-powered systems, setting new benchmarks in technology and efficiency.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<article className="flex flex-col rounded-2xl shadow-md bg-gray-50 p-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-gray-900 mb-3 font-geist">AI-Driven Predictive Maintenance</h3>
<p className="text-sm text-gray-600 flex-grow mb-4 font-geist">Our upcoming system anticipates equipment failures before they happen, reducing downtime and maintenance costs by up to 50%.</p>
<button aria-label="Learn more about AI-Driven Predictive Maintenance" className="self-start text-indigo-600 font-semibold hover:underline flex items-center gap-1 font-geist">
        Learn More
        <svg className="lucide lucide-arrow-right w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(79, 70, 229)`}} xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
<article className="flex flex-col rounded-2xl shadow-md bg-gray-50 p-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-gray-900 mb-3 font-geist">Next-Gen Autonomous Robotics</h3>
<p className="text-sm text-gray-600 flex-grow mb-4 font-geist">Experience unparalleled precision and efficiency with our soon-to-launch autonomous robots designed for complex industrial environments.</p>
<button aria-label="Learn more about Next-Gen Autonomous Robotics" className="self-start text-indigo-600 font-semibold hover:underline flex items-center gap-1 font-geist">
        Learn More
        <svg className="lucide lucide-arrow-right w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(79, 70, 229)`}} xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
<article className="flex flex-col rounded-2xl shadow-md bg-gray-50 p-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-gray-900 mb-3 font-geist">Enhanced AI Security Framework</h3>
<p className="text-sm text-gray-600 flex-grow mb-4 font-geist">Our enhanced framework integrates AI with cybersecurity to proactively detect and neutralize threats in real-time.</p>
<button aria-label="Learn more about Enhanced AI Security Framework" className="self-start text-indigo-600 font-semibold hover:underline flex items-center gap-1 font-geist">
        Learn More
        <svg className="lucide lucide-arrow-right w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(79, 70, 229)`}} xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</article>
</div>
</section><footer className="max-w-7xl sm:px-12 lg:px-24 text-slate-950 bg-gradient-to-b from-blue-400/10 to-blue-600/0 border-gray-200/10 border-t mt-20 mr-auto ml-auto pt-12 pb-12">
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
<div className="text-center md:text-left">
<h3 className="text-lg font-semibold font-display tracking-tight text-gray-900 mb-2 font-geist">NeuroTech</h3>
<p className="text-sm max-w-xs font-geist">© 2024 NeuroTech. All rights reserved.</p>
</div>
<nav className="flex justify-center gap-8 text-sm font-semibold">
<a className="hover:text-indigo-600 transition-colors font-geist" href="#">About Us</a>
<a className="hover:text-indigo-600 transition-colors font-geist" href="#">Careers</a>
<a className="hover:text-indigo-600 transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-indigo-600 transition-colors font-geist" href="#">Terms of Service</a>
<a className="hover:text-indigo-600 transition-colors font-geist" href="#">Contact</a>
</nav>
</div>
</footer></main>
    </>
  );
}
