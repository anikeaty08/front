import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Function to split text and wrap in spans
            document.querySelectorAll('.animate-text-component').forEach((el) => {
                const text = el.textContent.trim();
                el.textContent = '';
                const words = text.split(/\s+/);
                
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word;
                    span.className = 'inline-block opacity-0';
                    span.style.setProperty('--delay', `${index * 0.1}s`);
                    el.appendChild(span);
                    
                    // Add space after word
                    if (index < words.length - 1) {
                        el.appendChild(document.createTextNode(' '));
                    }
                });
            });

            // Intersection Observer to trigger animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate text words
                        if (entry.target.classList.contains('animate-text-component')) {
                            const spans = entry.target.querySelectorAll('span');
                            spans.forEach(span => {
                                span.style.animation = `fadeUp 0.6s ease-out forwards var(--delay)`;
                            });
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            // Observe all text components
            document.querySelectorAll('.animate-text-component').forEach(el => {
                observer.observe(el);
            });

            // Delay and fade up the input box smoothly after hero text begins animating
            setTimeout(() => {
                const inputBox = document.getElementById('hero-input-box');
                if (inputBox) {
                    inputBox.style.animation = 'fadeUp 0.8s ease-out forwards 0.8s';
                }
            }, 100);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-white px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between sticky top-0 z-50">
<div className="text-2xl font-semibold text-gray-900 tracking-tight flex items-center">
            VITARA
        </div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#">Home</a>
<a className="hover:text-gray-900 transition-colors" href="#">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#">Team</a>
<a className="hover:text-gray-900 transition-colors" href="#">Membership</a>
<a className="hover:text-gray-900 transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center space-x-5">
<button className="text-gray-800 text-sm font-medium hover:text-gray-600 transition-colors">
                Login
            </button>
<button className="bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-all shadow-sm">
                Sign up
            </button>
</div>
</nav>

<section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-gray-900">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover object-bottom z-0 opacity-80" loop="" muted="" playsinline="">
<source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_134434_5de46cb4-38e7-42a6-a8bc-6e62b2fd6c7b.mp4" type="video/mp4"/>
</video>

<div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#2B3534] to-transparent z-10 pointer-events-none"></div>

<div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-[-5%]">
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight font-medium animate-text-component drop-shadow-sm"><span className="inline-block opacity-0" style={{-Delay: '0s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Smart</span> <span className="inline-block opacity-0" style={{-Delay: '0.1s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Care</span> <span className="inline-block opacity-0" style={{-Delay: '0.2s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Begins</span> <span className="inline-block opacity-0" style={{-Delay: '0.30000000000000004s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>with</span> <span className="inline-block opacity-0" style={{-Delay: '0.4s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Data</span> <span className="inline-block opacity-0" style={{-Delay: '0.5s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>+</span> <span className="inline-block opacity-0" style={{-Delay: '0.6000000000000001s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Insight</span></h1>
<p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl font-normal animate-text-component drop-shadow-sm"><span className="inline-block opacity-0" style={{-Delay: '0s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Turn</span> <span className="inline-block opacity-0" style={{-Delay: '0.1s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>medical</span> <span className="inline-block opacity-0" style={{-Delay: '0.2s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>insights</span> <span className="inline-block opacity-0" style={{-Delay: '0.30000000000000004s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>into</span> <span className="inline-block opacity-0" style={{-Delay: '0.4s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>personalized</span> <span className="inline-block opacity-0" style={{-Delay: '0.5s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>wellness</span> <span className="inline-block opacity-0" style={{-Delay: '0.6000000000000001s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>plans.</span></p>

<div className="w-full max-w-[36rem] bg-[#2B3534] rounded-2xl shadow-2xl p-5 text-left opacity-0 translate-y-[20px]" id="hero-input-box" style={{animation: '0.8s ease-out 0.8s 1 normal forwards running fadeUp'}}>
<textarea className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none min-h-[60px] text-sm md:text-base scrollbar-hide" placeholder="Welcome to Vitara — your care intelligence hub!"></textarea>
<div className="flex items-center gap-3 mt-4 relative">

<div className="relative flex-1 overflow-hidden rounded-full">
<div className="flex items-center space-x-2.5 overflow-x-auto scrollbar-hide pr-16">
<button className="whitespace-nowrap flex items-center space-x-1.5 border border-white/15 rounded-full px-4 py-2 text-white/90 text-xs font-medium hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
<span>Start Wellness Check</span>
</button>
<button className="whitespace-nowrap flex items-center space-x-1.5 border border-white/15 rounded-full px-4 py-2 text-white/90 text-xs font-medium hover:bg-white/10 transition-colors">
<iconify-icon className="" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
<span className="">Chat with MedAI</span>
</button>
<button className="whitespace-nowrap flex items-center space-x-1.5 border border-white/15 rounded-full px-4 py-2 text-white/90 text-xs font-medium hover:bg-white/10 transition-colors">
<iconify-icon className="" icon="solar:chart-2-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
<span className="">View Insights</span>
</button>
</div>

<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#2B3534] to-transparent pointer-events-none rounded-r-full"></div>
</div>

<button className="flex-shrink-0 bg-white text-gray-800 p-2.5 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
<iconify-icon className="rotate-45 -translate-y-0.5 -translate-x-0.5" icon="solar:plain-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-20 md:py-32 bg-[#2B3534] w-full pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
<div className="flex flex-col">
<h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight animate-text-component"><span className="inline-block opacity-0" style={{-Delay: '0s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>Your</span> <span className="inline-block opacity-0" style={{-Delay: '0.1s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>proactive</span> <span className="inline-block opacity-0" style={{-Delay: '0.2s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>shield</span> <span className="inline-block opacity-0" style={{-Delay: '0.30000000000000004s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>against</span> <span className="inline-block opacity-0" style={{-Delay: '0.4s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>disease</span></h2>
</div>
<div className="flex flex-col items-start md:items-end md:text-right">
<p className="text-gray-300 text-sm md:text-base max-w-sm leading-relaxed animate-text-component font-medium"><span className="inline-block opacity-0" style={{-Delay: '0s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>We</span> <span className="inline-block opacity-0" style={{-Delay: '0.1s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>blend</span> <span className="inline-block opacity-0" style={{-Delay: '0.2s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>smart</span> <span className="inline-block opacity-0" style={{-Delay: '0.30000000000000004s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>technology</span> <span className="inline-block opacity-0" style={{-Delay: '0.4s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>&amp;</span> <span className="inline-block opacity-0" style={{-Delay: '0.5s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>clinical</span> <span className="inline-block opacity-0" style={{-Delay: '0.6000000000000001s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>wisdom</span> <span className="inline-block opacity-0" style={{-Delay: '0.7000000000000001s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>to</span> <span className="inline-block opacity-0" style={{-Delay: '0.8s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>provide</span> <span className="inline-block opacity-0" style={{-Delay: '0.9s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>tailored,</span> <span className="inline-block opacity-0" style={{-Delay: '1s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>preventive,</span> <span className="inline-block opacity-0" style={{-Delay: '1.1s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>&amp;</span> <span className="inline-block opacity-0" style={{-Delay: '1.2000000000000002s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>insight-rich</span> <span className="inline-block opacity-0" style={{-Delay: '1.3s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>medicine</span> <span className="inline-block opacity-0" style={{-Delay: '1.4000000000000001s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>for</span> <span className="inline-block opacity-0" style={{-Delay: '1.5s', animation: 'fadeUp 0.6s ease-out forwards var(--delay)'}}>tomorrow.</span></p>
</div>
</div>
</section>



    </>
  );
}
