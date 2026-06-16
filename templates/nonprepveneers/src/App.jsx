import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleSlider(e) {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width)); 
            const percent = (x / rect.width) * 100;
            container.style.setProperty('--position', `${percent}%`);
        }

        function handleSliderTouch(e) {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            let x = e.touches[0].clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width)); 
            const percent = (x / rect.width) * 100;
            container.style.setProperty('--position', `${percent}%`);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-0 inset-x-0 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200/80 z-[60] md:hidden flex justify-center shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
<a className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm py-4 rounded-xl text-center shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 transition-colors" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
            Book Free Consult Now
        </a>
</div>

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex flex-col uppercase hover:opacity-80 transition-opacity" href="#">
<span className="tracking-tighter font-semibold text-lg text-slate-900 leading-none">Dental Pearl</span>
<span className="tracking-widest font-medium text-xs text-slate-500 leading-none mt-1">Miami</span>
</a>
<div className="flex items-center gap-6">
<a className="hidden lg:flex items-center gap-1.5 text-xs text-slate-600 font-semibold hover:text-orange-600 transition-colors" href="tel:+13055600507">
<iconify-icon className="text-sm" icon="solar:phone-linear"></iconify-icon>
                    (305) 560-0507
                </a>
<div className="hidden md:flex items-center gap-2 text-xs text-slate-600 font-medium bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:shield-check-linear"></iconify-icon>
<span>Board Certified Specialists</span>
</div>

<div className="hidden xl:flex items-center gap-1.5 text-xs text-orange-700 font-semibold bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
<span className="relative flex h-2 w-2 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Flash Offer Ends: <span className="tabular-nums animate-pulse text-orange-600">04:12:59</span>
</div>
<a className="text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md hover:shadow-orange-600/20 flex items-center gap-1.5 animate-pulse" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                    Book Free Consult
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative pt-24 pb-24 md:pt-36 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-slate-200/50 to-slate-100/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-40 right-0 w-[500px] h-[500px] bg-orange-100/30 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-4 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:shadow-md transition-shadow">
<div className="flex items-center justify-center bg-orange-50 rounded-full p-1.5">
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-700 tracking-wide">5.0 Rating • 500+ Miami Reviews</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.05] mb-6">
<span className="block text-2xl md:text-4xl font-medium tracking-tight text-slate-500 mb-3">Premium Non-Prep Veneers</span>
                    The perfect <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Miami smile.</span> <br/>
<span className="text-slate-400 font-medium">Safe. Secure. Zero drilling.</span>
</h1>
<p className="md:text-lg leading-relaxed text-base text-slate-500 max-w-2xl mb-8">Trust South Florida’s elite cosmetic team to transform your confidence. Our ultra-thin, custom veneers preserve 100% of your natural teeth. No pain, no needles, completely risk-free.</p>
<div className="flex flex-col items-center gap-4 w-full sm:w-auto">
<div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold tracking-wide shadow-sm">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon>
                        Extremely High Demand: Only 2 consultation slots left this week
                    </div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full">
<a className="sm:w-auto hover:bg-orange-700 transition-all shadow-orange-600/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5 text-sm font-semibold text-white bg-orange-600 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                            Book Free Consult - Takes 1 Min
                        </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-full hover:bg-slate-50 hover:text-orange-600 transition-colors flex items-center justify-center gap-2" href="#process">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Our Process
                        </a>
</div>
</div>

<div className="mt-16 relative w-full aspect-[4/3] md:aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl slider-container group select-none" onmousemove="handleSlider(event)" ontouchmove="handleSliderTouch(event)">

<img alt="Healthy White Teeth and Smile" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e07a0da-6a93-480f-84d8-e9cb64ccda6c_1600w.png"/>

<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase shadow-sm pointer-events-none z-10">After</div>

<div className="absolute inset-0 w-full h-full slider-clip border-r-2 border-white/90 shadow-[2px_0_10px_rgba(0,0,0,0.1)] pointer-events-none z-20">
<img alt="Yellowed Teeth and Gums" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1272e19-5be7-4c12-beb6-0d6c19b4a5f4_1600w.png"/>

<div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase shadow-sm pointer-events-none">Before</div>
</div>

<div className="absolute left-[var(--position)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.15)] text-orange-500 pointer-events-none transition-transform group-hover:scale-105 z-30">
<iconify-icon className="rotate-90 text-lg" icon="solar:slider-vertical-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white py-8">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">Trusted by leading dental organizations</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-400 grayscale opacity-60">
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:shield-plus-linear"></iconify-icon> ADA Recognized</div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon> Top Dentist 2023</div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:health-linear"></iconify-icon> AACD Member</div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon> HIPAA Compliant</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-20 pr-6 pb-20 pl-6" id="results">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold uppercase tracking-wide border border-orange-200 w-fit">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Local Miami Laboratory
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">World-class quality, crafted in Miami.</h2>
<p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                    We don't outsource. Our master ceramists handcraft each veneer right here in South Florida to perfectly match your facial structure, guaranteeing a lasting, brilliant white smile.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 border-t border-slate-200/60 pt-10 text-left w-full">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">100% Reversible &amp; Safe</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Your natural enamel remains completely untouched. We bond securely over your existing teeth without shaving them down.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex shrink-0 bg-orange-50 w-10 h-10 border-orange-100 border rounded-full items-center justify-center">
<iconify-icon className="text-orange-500 text-xl" icon="ph:tooth-light"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Premium Non Prep Veneers</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Medical-grade materials that resist coffee, wine, and daily wear, guaranteeing a lasting, brilliant white smile.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 border-t border-slate-200/60" id="process">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide border border-slate-200 w-fit mb-6">
<iconify-icon icon="solar:route-linear"></iconify-icon>
                        Our Process
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Three steps to your new smile.</h2>
<p className="text-sm text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">A streamlined, completely pain-free journey designed around your comfort and our obsessive attention to detail.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">

<div className="hidden md:block absolute top-[3.25rem] left-20 right-20 h-px bg-slate-200 z-0"></div>

<div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-sm transition-shadow z-10 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-700 relative group-hover:text-orange-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">1</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Free Consultation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Come in for your free smile consultation. We take digital scans of your teeth — no messy impressions, no discomfort. Together we design your perfect smile and you see exactly what your results will look like before we start.</p>
</div>

<div className="relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow z-10 md:-translate-y-4 group">
<div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 shadow-sm text-orange-600 relative">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">2</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Custom Crafted In-House</h3>
<p className="text-xs text-slate-500 leading-relaxed">Your veneers are custom made right here in our in-house lab. No outside labs, no waiting weeks. Your perfect smile is ready in as little as 3 business days with total quality control from start to finish.</p>
</div>

<div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-sm transition-shadow z-10 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-700 relative group-hover:text-emerald-500 transition-colors">
<iconify-icon className="text-2xl" icon="solar:star-circle-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">3</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Try On &amp; Walk Out Smiling</h3>
<p className="text-xs text-slate-500 leading-relaxed">Come back for your second appointment, try on your new veneers, and walk out with the smile you've always wanted. No drilling. No shots. No pain. Just results.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden" id="booking">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-wide border border-orange-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Urgent: Only 2 Spots Left This Week
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                        Secure your private <br/>consultation today.
                    </h2>
<p className="text-slate-500 text-sm md:text-base mb-10 max-w-md leading-relaxed">
                        Schedule now to lock in your <strong className="text-slate-900 font-semibold">free consultation</strong> before our remaining slots are filled.
                    </p>
<a className="hover:-translate-y-0.5 transition-transform shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-4 w-full sm:w-fit" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                        Book Free Consult Now
                    </a>
</div>

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-orange-600 shrink-0 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-semibold mb-1">Flexible Financing</h3>
<p className="text-slate-500 text-sm leading-relaxed">0% interest plans available. Get your perfect smile today and pay over time with our trusted partners.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-orange-600 shrink-0 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-semibold mb-1">Fast Turnaround</h3>
<p className="text-slate-500 text-sm leading-relaxed">From consultation to final placement in as little as two weeks, handled exclusively in our private local lab.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/60 py-10 px-6 pb-28 md:pb-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="flex flex-col uppercase">
<span className="tracking-tighter font-semibold text-lg text-slate-900 leading-none">Dental Pearl</span>
<span className="tracking-widest font-medium text-xs text-slate-500 leading-none mt-1">Miami</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-600">
<a className="flex items-center gap-2 hover:text-orange-600 transition-colors" href="https://maps.google.com/?q=14771+Biscayne+Blvd" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    14771 Biscayne Blvd
                </a>
<a className="flex items-center gap-2 hover:text-orange-600 transition-colors" href="tel:+13055600507">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    (305) 560-0507
                </a>
</div>
</div>
</footer>



    </>
  );
}
