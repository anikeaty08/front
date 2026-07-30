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



	const ctx = document.getElementById('insightsChart').getContext('2d');
	new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			datasets: [{
				label: 'User Engagement',
				data: [65, 59, 80, 81, 56, 75, 90, 100],
				fill: true,
				backgroundColor: 'rgba(20, 184, 166, 0.3)',
				borderColor: 'rgba(20, 184, 166, 1)',
				tension: 0.4,
				pointRadius: 4,
				pointHoverRadius: 6,
				borderWidth: 2
			},{
				label: 'Conversion Rate',
				data: [28, 48, 40, 19, 86, 27, 90, 120],
				fill: true,
				backgroundColor: 'rgba(59, 130, 246, 0.3)',
				borderColor: 'rgba(59, 130, 246, 1)',
				tension: 0.4,
				pointRadius: 4,
				pointHoverRadius: 6,
				borderWidth: 2
			}]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					labels: {
						color: '#9ca3af',
						font: { weight: '500' }
					}
				},
				tooltip: {
					mode: 'index',
					intersect: false,
					backgroundColor: '#111827'
				}
			},
			scales: {
				x: {
					ticks: { color: '#9ca3af', font: { weight: '500' } },
					grid: { color: 'transparent' }
				},
				y: {
					ticks: { color: '#9ca3af', font: { weight: '500' }, stepSize: 20 },
					grid: { color: '#1e293b' },
					beginAtZero: true
				}
			},
			interaction: {
				mode: 'nearest',
				intersect: false
			}
		}
	});



	document.getElementById('year').textContent = new Date().getFullYear();
	// Download current HTML file as zenith.html
	document.getElementById('downloadBtn').addEventListener('click', () => {
		const html = '<!DOCTYPE html>' + document.documentElement.outerHTML;
		const blob = new Blob([html], { type: 'text/html' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'zenith.html';
		a.click();
		URL.revokeObjectURL(url);
	});
	// Load lucide icons
	lucide.createIcons();

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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe></div>

<header className="w-full sticky top-0 z-30 border-white/5 border-b backdrop-blur-lg">
<nav className="container flex md:px-8 fade-in mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 items-center justify-between">

<div className="flex items-center space-x-2">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
<span className="text-sm font-black text-white tracking-tight font-geist">Z</span>
</div>
<span className="text-2xl tracking-tighter font-playfair font-medium">zenith</span>
</div>

<ul className="hidden md:flex items-center space-x-8 font-medium text-sm">
<li className=""><a className="hover:text-teal-400 transition-colors duration-200 font-geist" href="#">Platform</a></li>
<li className=""><a className="hover:text-teal-400 transition-colors duration-200 font-geist" href="#">Solutions</a></li>
<li className=""><a className="hover:text-teal-400 transition-colors duration-200 font-geist" href="#">Company</a></li>
</ul>

<div className="flex items-center space-x-3">
<a className="hidden sm:inline-block px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-sm font-semibold transition-all duration-200 border border-white/10 hover:border-white/20 font-geist" href="#">Get Started</a>
<button className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white text-sm font-semibold transition-all duration-200 flex items-center space-x-2" id="downloadBtn">
<span className="font-geist">Export Code</span>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</nav>
</header>

<section className="flex-grow">
<div className="container md:px-8 flex flex-col lg:flex-row gap-12 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 items-center">

<div className="flex flex-col gap-8 flex-1 w-full">
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md fade-in fade-in-1 hover:ring-teal-400/20 transition-all duration-300">
<p className="text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 font-playfair font-medium">01</p>
<p className="text-base leading-relaxed text-gray-300 font-geist">Advanced Analytics – Deep insights and real-time performance monitoring for your business</p>
</div>
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md fade-in fade-in-3 hover:ring-teal-400/20 transition-all duration-300">
<p className="text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 font-playfair font-medium">03</p>
<p className="text-base leading-relaxed text-gray-300 font-geist">Seamless Integration – Connect with over 200+ tools and platforms effortlessly</p>
</div>
</div>

<div className="flex-1 w-full flex justify-center fade-in fade-in-2">
<div className="relative">
<img alt="Digital Interface" className="w-full max-w-md rounded-3xl shadow-2xl object-cover" src="/assets/1ba266bd-81e8-4c6b-b290-bdcb56dc9f72_800w.jpg" />
<div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur opacity-20"></div>
</div>
</div>

<div className="flex flex-col gap-8 flex-1 w-full">
<h1 className="md:text-6xl leading-tight fade-in fade-in-1 text-5xl tracking-tight mb-4 font-playfair font-medium">Why Choose?<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 font-playfair font-medium">Zenith</span></h1>
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md fade-in fade-in-2 hover:ring-teal-400/20 transition-all duration-300">
<p className="text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 font-playfair font-medium">02</p>
<p className="text-base leading-relaxed text-gray-300 font-geist">Enterprise Security – Bank-grade encryption with 99.9% uptime guarantee</p>
</div>
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md fade-in fade-in-4 hover:ring-teal-400/20 transition-all duration-300">
<p className="text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 font-playfair font-medium">04</p>
<p className="text-base leading-relaxed text-gray-300 font-geist">Global Scale – Built for teams of any size, from startups to Fortune 500 companies</p>
</div>
</div>
</div><section className="container md:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="text-4xl tracking-tight mb-10 text-white fade-in fade-in-1 text-center max-w-4xl mx-auto font-playfair font-medium">Explore Zenith’s Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md hover:ring-teal-400/20 transition-all duration-300 fade-in fade-in-2 flex flex-col items-center text-center">
<svg className="lucide lucide-activity w-12 h-12 mb-5 text-teal-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<h3 className="text-xl font-semibold mb-2 text-white font-geist">Real-Time Monitoring</h3>
<p className="text-gray-300 text-sm leading-relaxed font-geist">Stay updated with live data streams and instant alerts tailored to your needs.</p>
</div>
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md hover:ring-teal-400/20 transition-all duration-300 fade-in fade-in-3 flex flex-col items-center text-center">
<svg className="lucide lucide-shield-check w-12 h-12 mb-5 text-teal-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M12 22C6.477 22 2 17.523 2 12 2 6.477 6.477 2 12 2c5.523 0 10 4.477 10 10"></path></svg>
<h3 className="text-xl font-semibold mb-2 text-white font-geist">Robust Security</h3>
<p className="text-gray-300 text-sm leading-relaxed font-geist">Protect your data with multi-layered encryption and compliance standards.</p>
</div>
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md hover:ring-teal-400/20 transition-all duration-300 fade-in fade-in-4 flex flex-col items-center text-center">
<svg className="lucide lucide-cloud-computing w-12 h-12 mb-5 text-teal-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M20 17.58A5.42 5.42 0 0 0 14.58 12H13a5 5 0 0 0-8.66 2.35A4.5 4.5 0 0 0 5.5 22h14a3.5 3.5 0 0 0 .5-4.42z"></path></svg>
<h3 className="text-xl font-semibold mb-2 text-white font-geist">Cloud Scalability</h3>
<p className="text-gray-300 text-sm leading-relaxed font-geist">Scale effortlessly with our flexible cloud infrastructure built for growth.</p>
</div>
</div>
</section><section className="container md:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="text-4xl tracking-tight mb-10 text-white fade-in fade-in-1 text-center max-w-4xl mx-auto font-playfair font-medium">Advanced Data Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="gradient-box p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-md hover:ring-teal-400/20 transition-all duration-300 fade-in fade-in-2 flex flex-col">
<canvas className="w-full h-64 bg-[url(/assets/9895d626-b35e-41b6-92f7-f1842072b761_1600w.jpg)] bg-cover rounded-lg" height="520" id="insightsChart" style={{display: `block`, boxSizing: `border-box`, height: `260px`, width: `520px`}} width="1040"></canvas>
<p className="mt-6 text-gray-300 text-sm leading-relaxed font-geist">Our analytics engine provides actionable metrics and trends to drive smarter decisions.</p>
</div>
<div className="flex flex-col justify-center fade-in fade-in-3">
<h3 className="text-2xl mb-4 text-white max-w-xl font-playfair font-medium">Transform Your Data Into Competitive Advantage</h3>
<p className="text-gray-300 mb-6 max-w-xl leading-relaxed font-geist">Leverage predictive analytics and AI-powered insights to forecast trends and optimize performance across your business operations.</p>
<a className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white text-sm font-semibold transition-all duration-200 max-w-max font-geist" href="#">Learn More</a>
</div>
</div>
</section>
</section>

<footer className="border-white/5 border-t pt-10 pb-10">
<div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
<p className="font-geist">© <span className="font-geist" id="year">2025</span> Zenith Technologies. All rights reserved.</p>
<div className="flex items-center space-x-6">
<a className="hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="font-geist">LinkedIn</span>
</a>
<a className="hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="font-geist">GitHub</span>
</a>
</div>
</div>
</footer>


    </>
  );
}
