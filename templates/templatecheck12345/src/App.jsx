import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple form handling preventing default for demo
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = "Request Sent";
                btn.classList.add('bg-emerald-500', 'text-white', 'border-transparent');
                btn.classList.remove('bg-white', 'text-black');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-emerald-500', 'text-white', 'border-transparent');
                    btn.classList.add('bg-white', 'text-black');
                }, 3000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-lg font-semibold text-white tracking-tighter font-geist" href="#" style={{}}>Logo</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors font-geist" href="#technology">Technology</a>
<a className="hover:text-white transition-colors font-geist" href="#design">Design</a>
<a className="hover:text-white transition-colors font-geist" href="#compare">Compare</a>
</div>
<div className="flex items-center">
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded hover:bg-neutral-200 transition-colors tracking-tight font-geist">
                    Request Early Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none mask-gradient"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/[0.02] blur-3xl rounded-full z-0"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-tight font-geist">Series One Waitlist Open</span>
</div>
<h1 className="text-5xl md:text-7xl text-white tracking-tighter mb-6 leading-[1.1] font-jakarta font-medium">
                Precision in <br className="hidden md:block"/>
<span className="text-neutral-500 font-jakarta font-medium">perpetual motion.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 font-light tracking-tight leading-relaxed font-geist">
                The first intelligent watch winder engineered specifically for high-complication calibers. Silent, programmable, and flawlessly precise.
            </p>
<form className="max-w-sm mx-auto flex flex-col gap-3 mb-6">
<div className="flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30 placeholder:text-neutral-600 transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-5 py-2.5 rounded text-sm font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap font-geist" type="submit">
                        Join Waitlist
                    </button>
</div>
<p className="text-[10px] text-neutral-600 tracking-tight font-geist">Limited release batches. No spam, strictly updates.</p>
</form>
</div>

<div className="relative z-10 mt-16 max-w-5xl mx-auto">
<div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<img alt="Chronoarx Mechanism" className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1596568359553-a56de6970068?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
<div className="flex items-center gap-2 text-white/80 text-xs font-mono mb-2">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-geist">SYSTEM_ACTIVE</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight font-geist" style={{}}>Logo Core Module</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="technology">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<div className="">
<h2 className="text-3xl text-white tracking-tighter mb-6 font-jakarta font-medium">Designed for the <br/>modern collector.</h2>
</div>
<div className="">
<p className="text-base text-neutral-400 mb-6 leading-relaxed font-geist">
                        Traditional winders are blunt instruments. They operate on fixed intervals, often over-winding delicate mainsprings or failing to maintain optimal torque for perpetual calendars.
                    </p>
<p className="leading-relaxed text-base text-neutral-400 font-geist" style={{}}>Logo rethinks the category from the motor up. Utilizing a whisper-quiet direct drive system controlled by algorithmic precision, it adapts its rotation cycle to the specific weight and winding requirements of your timepiece. It is not just storage; it is active preservation.</p>
<div className="mt-8 flex items-center gap-6">
<div className="flex flex-col gap-1">
<span className="text-2xl text-white tracking-tight font-jakarta font-medium">0.1dB</span>
<span className="text-xs text-neutral-600 uppercase tracking-wider font-geist">Noise Floor</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl text-white tracking-tight font-jakarta font-medium">99.9%</span>
<span className="text-xs text-neutral-600 uppercase tracking-wider font-geist">TPD Accuracy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-white/5 bg-[#080808]" id="design">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest font-geist">Engineering Detail</h3>
<div className="flex gap-2">
<button className="p-2 border border-white/10 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 border border-white/10 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 hide-scroll snap-x snap-mandatory pb-8">

<div className="min-w-[85vw] md:min-w-[600px] snap-center">
<div className="bg-neutral-900/50 aspect-[4/3] rounded-lg border border-white/5 overflow-hidden relative group">
<img alt="Aluminum Chassis" className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h4 className="text-white font-medium tracking-tight font-geist">Aerospace Grade Aluminum</h4>
<p className="text-sm text-neutral-400 mt-1 font-geist">Milled from a single block for zero vibration resonance.</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center">
<div className="bg-neutral-900/50 aspect-[4/3] rounded-lg border border-white/5 overflow-hidden relative group">
<img alt="Direct Drive Motor" className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h4 className="text-white font-medium tracking-tight font-geist">Brushless Direct Drive</h4>
<p className="text-sm text-neutral-400 mt-1 font-geist">Gearless transmission eliminates magnetic interference.</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center">
<div className="bg-neutral-900/50 aspect-[4/3] rounded-lg border border-white/5 overflow-hidden relative group">
<img alt="Soft Touch Interface" className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h4 className="text-white font-medium tracking-tight font-geist">Adaptive Cuff System</h4>
<p className="text-sm text-neutral-400 mt-1 font-geist">Memory foam core wrapped in alcantara protects bracelets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl text-white tracking-tighter font-jakarta font-medium">Technical Specifications</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 p-8 rounded-xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between min-h-[320px] relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5 text-white">
<svg className="lucide lucide-waves w-5 h-5" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2 font-geist">Algorithmic Winding Patterns</h3>
<p className="leading-relaxed text-sm text-neutral-400 font-geist max-w-sm" style={{}}>Pre-programmed database of over 8,000 calibers. Logo automatically sets the optimal Turns Per Day (TPD) and directionality for your specific watch model.</p>
</div>
</div>

<div className="md:row-span-2 p-8 rounded-xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between min-h-[320px]">
<div className="">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5 text-white">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2 font-geist">Wi-Fi &amp; App Control</h3>
<p className="leading-relaxed text-sm text-neutral-400 font-geist" style={{}}>Monitor winding status, adjust LED ambiance, and update firmware remotely via the Logo iOS app.</p>
</div>
<div className="mt-8 border-t border-white/5 pt-4">
<div className="flex items-center gap-2 text-xs text-neutral-500 font-geist">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Connected
                        </div>
</div>
</div>

<div className="p-8 rounded-xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5 text-white">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-1 font-geist">Magnetic Shielding</h3>
<p className="text-neutral-400 text-xs leading-relaxed font-geist">Zero-gauss chamber protects hairsprings.</p>
</div>

<div className="p-8 rounded-xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5 text-white">
<svg className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<h3 className="text-lg text-white font-medium tracking-tight mb-1 font-geist">Sleep Mode</h3>
<p className="text-neutral-400 text-xs leading-relaxed font-geist">Halts motion and dims lights on schedule.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl text-white tracking-tighter mb-12 font-jakarta font-medium">Engineered to preserve value</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="space-y-3">
<span className="text-white font-medium text-sm tracking-tight border-b border-white/10 pb-2 block font-geist">Longevity</span>
<p className="text-sm text-neutral-400 font-geist">Prevents lubricant coagulation in complex movements by ensuring regular, gentle distribution.</p>
</div>
<div className="space-y-3">
<span className="text-white font-medium text-sm tracking-tight border-b border-white/10 pb-2 block font-geist">Readiness</span>
<p className="text-sm text-neutral-400 font-geist">Keep perpetual calendars and moonphases synchronized. Grab and go, without resetting.</p>
</div>
<div className="space-y-3">
<span className="text-white font-medium text-sm tracking-tight border-b border-white/10 pb-2 block font-geist">Aesthetics</span>
<p className="text-sm text-neutral-400 font-geist">A minimalist display piece that frames your horology with museum-grade lighting.</p>
</div>
</div>
<div className="mt-16">
<button className="bg-white text-black px-8 py-3 rounded text-sm font-medium hover:bg-neutral-200 transition-colors tracking-tight font-geist">
                    Secure Early Access
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="compare">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl text-white tracking-tighter mb-10 text-center font-jakarta font-medium">The new standard</h2>
<div className="w-full">

<div className="grid grid-cols-3 border-b border-white/10 pb-4 mb-4">
<div className="col-span-1"></div>
<div className="col-span-1 text-sm font-medium text-white font-geist text-center" style={{}}>Logo</div>
<div className="col-span-1 text-center text-sm font-medium text-neutral-500 font-geist">Standard Winder</div>
</div>

<div className="grid grid-cols-3 py-4 border-b border-white/5 items-center">
<div className="col-span-1 text-sm text-neutral-300 font-geist">Motor Type</div>
<div className="col-span-1 text-center text-xs text-white font-geist">Brushless Direct Drive</div>
<div className="col-span-1 text-center text-xs text-neutral-500 font-geist">Belt Driven</div>
</div>

<div className="grid grid-cols-3 py-4 border-b border-white/5 items-center">
<div className="col-span-1 text-sm text-neutral-300 font-geist">TPD Control</div>
<div className="col-span-1 text-center text-xs text-white font-geist">1-turn increments</div>
<div className="col-span-1 text-center text-xs text-neutral-500 font-geist">Fixed presets</div>
</div>

<div className="grid grid-cols-3 py-4 border-b border-white/5 items-center">
<div className="col-span-1 text-sm text-neutral-300 font-geist">Magnetic Shielding</div>
<div className="col-span-1 flex justify-center text-white"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="col-span-1 flex justify-center text-neutral-600"><svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></div>
</div>

<div className="grid grid-cols-3 py-4 border-b border-white/5 items-center">
<div className="col-span-1 text-sm text-neutral-300 font-geist">Resting Phase</div>
<div className="col-span-1 text-center text-xs text-white font-geist">12-o'clock vertical</div>
<div className="col-span-1 text-center text-xs text-neutral-500 font-geist">Random</div>
</div>

<div className="grid grid-cols-3 py-4 items-center">
<div className="col-span-1 text-sm text-neutral-300 font-geist">Connectivity</div>
<div className="col-span-1 text-center text-xs text-white font-geist">Wi-Fi / Bluetooth</div>
<div className="col-span-1 text-center text-xs text-neutral-500 font-geist">None</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="">
<a className="block text-lg font-semibold text-white tracking-tighter font-geist mb-2" href="#" style={{}}>Logo</a>
<p className="text-xs text-neutral-500 max-w-xs font-geist">
                    Engineering precision for the art of horology. <br/>Designed in Zürich, assembled in Germany.
                </p>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-neutral-500">
<a className="hover:text-white transition-colors font-geist" href="#">Contact</a>
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
<span className="text-neutral-700 font-geist" style={{}}>© 2024 Logo</span>
</div>
</div>
</footer>


    </>
  );
}
