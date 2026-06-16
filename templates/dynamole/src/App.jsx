import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
yellow: '#FFD700',
black: '#111111',
gray: '#F5F5F5',
}
},
boxShadow: {
'bold': '4px 4px 0px 0px rgba(17, 17, 17, 1)',
'bold-sm': '2px 2px 0px 0px rgba(17, 17, 17, 1)',
}
}
}
}



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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d78cf32-10fa-41eb-b589-4d05e0e82142_3840w.png")'}}></div>

<header className="fixed top-0 w-full z-50 bg-white border-b-2 border-brand-black shadow-sm">
<div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
<a className="flex items-center group" href="#home">

<img alt="Dyna Mole of Rochester Logo" className="transition-transform group-hover:scale-105 w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d78cf32-10fa-41eb-b589-4d05e0e82142_320w.png"/>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
<a className="text-brand-black hover:text-yellow-600 transition-colors" href="#services">Services</a>
<a className="text-brand-black hover:text-yellow-600 transition-colors" href="#about">About Us</a>
<a className="text-brand-black hover:text-yellow-600 transition-colors" href="#process">Process</a>
<a className="text-brand-black hover:text-yellow-600 transition-colors" href="#reviews">Reviews</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-base font-semibold text-brand-black hover:text-yellow-600" href="tel:5852541624">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                    (585) 254-1624
                </a>
<a className="bg-brand-yellow text-brand-black px-5 py-2.5 rounded-lg text-sm font-semibold border-2 border-brand-black shadow-bold hover:shadow-bold-sm hover:translate-y-[2px] transition-all flex items-center gap-2" href="tel:5852541624">
<span>Call Now</span>
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden border-brand-black bg-white border-b-2 pt-32 pb-20 relative" id="home">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-yellow opacity-20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gray border-2 border-brand-black mb-8 shadow-bold-sm">
<div className="flex text-brand-yellow text-sm stroke-brand-black drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-brand-black uppercase tracking-wide">4.8 Rating • 24+ Reviews</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.1] mb-6">
                    Rochester’s Go-To Experts for Sewer &amp; Water Line Work
                </h1>
<p className="text-lg sm:text-xl text-neutral-700 mb-10 max-w-2xl font-medium">
                    Fast, reliable underground solutions done right the first time.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="bg-brand-yellow text-brand-black border-2 border-brand-black px-8 py-4 rounded-xl text-lg font-semibold text-center shadow-bold hover:shadow-bold-sm hover:translate-y-[2px] transition-all flex items-center justify-center gap-2" href="tel:5852541624">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
                        Call Now (585-254-1624)
                    </a>
<a className="bg-white text-brand-black border-2 border-brand-black px-8 py-4 rounded-xl text-lg font-semibold text-center shadow-bold hover:shadow-bold-sm hover:translate-y-[2px] hover:bg-brand-gray transition-all flex items-center justify-center gap-2" href="#contact">
                        Get a Quote
                    </a>
</div>
<div className="flex items-center gap-3 text-sm text-brand-black font-semibold bg-brand-gray inline-flex px-4 py-2 rounded-lg border-2 border-brand-black border-dashed">
<iconify-icon className="text-xl text-brand-yellow drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:map-point-linear"></iconify-icon>
                    Serving Rochester &amp; Surrounding Areas
                </div>
</div>

<div className="flex-1 hidden lg:flex justify-center items-center relative">
<div className="absolute inset-0 bg-brand-yellow rounded-full blur-3xl opacity-10"></div>

<img alt="Dyna Mole Mascot" className="hover:-translate-y-2 transition-transform duration-500 w-full max-w-md object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d78cf32-10fa-41eb-b589-4d05e0e82142_1600w.png?w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray border-b-2 border-brand-black" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-4">Our Underground Services</h2>
<p className="text-base text-neutral-700 font-medium">Expert Rochester sewer repair, water line replacement, and trenchless solutions. Less digging, faster results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 bg-brand-yellow border-2 border-brand-black rounded-xl flex items-center justify-center mb-6 shadow-bold-sm">
<iconify-icon className="text-3xl text-brand-black" icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">Trenchless Sewer Repair</h3>
<p className="text-sm text-neutral-700 mb-6 flex-grow font-medium">Fix broken sewer lines without digging up your entire yard. Permanent, durable lining.</p>
<ul className="space-y-2 mb-8 text-sm font-semibold text-brand-black">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Less digging &amp; yard damage</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Faster completion</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Cost-effective solution</li>
</ul>
<a className="bg-brand-yellow border-2 border-brand-black text-center py-2.5 rounded-lg text-sm font-bold shadow-bold-sm hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 bg-brand-yellow border-2 border-brand-black rounded-xl flex items-center justify-center mb-6 shadow-bold-sm">
<iconify-icon className="text-3xl text-brand-black" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">Water Line Replacement</h3>
<p className="text-sm text-neutral-700 mb-6 flex-grow font-medium">Complete replacement of old or leaking water service lines in Rochester NY with minimal disruption.</p>
<ul className="space-y-2 mb-8 text-sm font-semibold text-brand-black">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Restores water pressure</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Clean, safe water flow</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Minimal property damage</li>
</ul>
<a className="bg-brand-yellow border-2 border-brand-black text-center py-2.5 rounded-lg text-sm font-bold shadow-bold-sm hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 bg-brand-yellow border-2 border-brand-black rounded-xl flex items-center justify-center mb-6 shadow-bold-sm">
<iconify-icon className="text-3xl text-brand-black" icon="solar:earth-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">Directional Boring</h3>
<p className="text-sm text-neutral-700 mb-6 flex-grow font-medium">Install pipes underground without disturbing the surface. Perfect for crossing under driveways or roads.</p>
<ul className="space-y-2 mb-8 text-sm font-semibold text-brand-black">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Avoids pavement cutting</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Saves on restoration costs</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-yellow text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" icon="solar:check-circle-linear"></iconify-icon> Precision installation</li>
</ul>
<a className="bg-brand-yellow border-2 border-brand-black text-center py-2.5 rounded-lg text-sm font-bold shadow-bold-sm hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col hover:-translate-y-1 transition-transform lg:col-span-1 md:col-span-2">
<div className="w-14 h-14 bg-brand-yellow border-2 border-brand-black rounded-xl flex items-center justify-center mb-6 shadow-bold-sm">
<iconify-icon className="text-3xl text-brand-black" icon="solar:wheelchair-linear" style={{transform: 'rotate(-45deg)'}}></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">Excavation Services</h3>
<p className="text-sm text-neutral-700 mb-6 flex-grow font-medium">Traditional, precise digging when required. We handle everything safely and efficiently.</p>
<a className="bg-brand-yellow border-2 border-brand-black text-center py-2.5 rounded-lg text-sm font-bold shadow-bold-sm hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-brand-black p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col hover:-translate-y-1 transition-transform lg:col-span-2 md:col-span-2 text-white">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="w-14 h-14 bg-brand-yellow border-2 border-brand-black rounded-xl flex items-center justify-center shrink-0 shadow-bold-sm">
<iconify-icon className="text-3xl text-brand-black" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex-grow">
<h3 className="text-xl font-bold tracking-tight text-white mb-3">General Plumbing</h3>
<p className="text-sm text-neutral-300 mb-6 font-medium">Beyond underground utilities, our expert team handles commercial and residential plumbing needs indoors.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm font-semibold text-brand-yellow mb-6">
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Pipe repairs</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Sump pumps</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Drain cleaning</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Fixtures</span>
</div>
<a className="bg-white text-brand-black border-2 border-brand-black inline-flex px-6 py-2.5 rounded-lg text-sm font-bold shadow-bold-sm hover:bg-brand-gray transition-colors items-center gap-2" href="#contact">
                                Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b-2 border-brand-black" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-4">A Simple, No-Stress Process</h2>
<p className="text-base text-neutral-700 font-medium">We respect your time and property. Fast, reliable work from start to finish.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-1 border-t-4 border-dashed border-brand-black"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="text-center bg-white">
<div className="w-20 h-20 mx-auto bg-brand-yellow border-4 border-brand-black rounded-full flex items-center justify-center text-2xl font-bold text-brand-black shadow-bold mb-6 relative">
                            1
                        </div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">Call or Request a Quote</h3>
<p className="text-sm text-neutral-700 px-4 font-medium">Contact us detailing your issue. We respond fast and schedule a visit quickly.</p>
</div>

<div className="text-center bg-white">
<div className="w-20 h-20 mx-auto bg-brand-yellow border-4 border-brand-black rounded-full flex items-center justify-center text-2xl font-bold text-brand-black shadow-bold mb-6 relative">
                            2
                        </div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">We Diagnose the Issue</h3>
<p className="text-sm text-neutral-700 px-4 font-medium">Using camera tech and expertise, we find the exact problem and provide a fair quote.</p>
</div>

<div className="text-center bg-white">
<div className="w-20 h-20 mx-auto bg-brand-yellow border-4 border-brand-black rounded-full flex items-center justify-center text-2xl font-bold text-brand-black shadow-bold mb-6 relative">
                            3
                        </div>
<h3 className="text-xl font-bold tracking-tight text-brand-black mb-3">We Fix It Correctly</h3>
<p className="text-sm text-neutral-700 px-4 font-medium">Our crew executes the repair quickly, cleanly, and correctly the very first time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray border-b-2 border-brand-black relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 w-full order-2 lg:order-1">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col items-center text-center transform sm:-rotate-2 hover:rotate-0 transition-transform">
<iconify-icon className="text-4xl text-brand-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4" icon="solar:diploma-verified-linear"></iconify-icon>
<h4 className="text-lg font-bold text-brand-black mb-2">Extremely Knowledgeable</h4>
<p className="text-sm text-neutral-600 font-medium">Expert, courteous team that knows the underground.</p>
</div>
<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col items-center text-center transform sm:rotate-2 hover:rotate-0 transition-transform sm:translate-y-8">
<iconify-icon className="text-4xl text-brand-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4" icon="solar:wad-of-money-linear"></iconify-icon>
<h4 className="text-lg font-bold text-brand-black mb-2">Fair, Transparent Pricing</h4>
<p className="text-sm text-neutral-600 font-medium">No hidden fees. We price honestly against competitors.</p>
</div>
<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col items-center text-center transform sm:rotate-1 hover:rotate-0 transition-transform">
<iconify-icon className="text-4xl text-brand-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4" icon="solar:stopwatch-linear"></iconify-icon>
<h4 className="text-lg font-bold text-brand-black mb-2">Fast Turnaround</h4>
<p className="text-sm text-neutral-600 font-medium">We respond quickly and finish the job on time.</p>
</div>
<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col items-center text-center transform sm:-rotate-1 hover:rotate-0 transition-transform sm:translate-y-8">
<iconify-icon className="text-4xl text-brand-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-4" icon="solar:broom-linear"></iconify-icon>
<h4 className="text-lg font-bold text-brand-black mb-2">Clean, Professional Work</h4>
<p className="text-sm text-neutral-600 font-medium">We leave your property looking great.</p>
</div>
</div>
</div>
<div className="lg:w-1/2 order-1 lg:order-2">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-6">Why Rochester Trusts Dyna Mole</h2>
<p className="text-lg text-neutral-700 font-medium mb-6 leading-relaxed">
                    Underground utility issues are stressful enough. Dealing with your contractor shouldn't be. We built our reputation on strong communication, reliability, and simply doing the job right.
                </p>
<p className="text-base text-neutral-600 font-medium mb-10 leading-relaxed">
                    From trenchless sewer repairs to full water line replacements, our team handles it with expertise. We take pride in our blue-collar roots: hard work, honesty, and quality you can depend on.
                </p>
<a className="inline-flex bg-brand-black text-white border-2 border-brand-black px-8 py-4 rounded-xl text-lg font-semibold text-center shadow-bold hover:shadow-bold-sm hover:-translate-y-1 transition-all items-center gap-2" href="#contact">
                    Work With the Best
                    <iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b-2 border-brand-black" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-4">Real Reviews from Rochester Locals</h2>
<p className="text-neutral-700 text-base font-medium">See why homeowners and businesses consistently highly rate us for thorough work, great pricing, and making the process easy.</p>
</div>
<div className="flex items-center gap-3 bg-brand-yellow px-5 py-3 rounded-xl border-2 border-brand-black shadow-bold-sm">
<span className="text-2xl font-bold text-brand-black">4.8</span>
<div className="flex text-brand-black text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-brand-gray p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col relative">
<div className="absolute -top-5 -left-4 w-10 h-10 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center shadow-bold-sm">
<iconify-icon className="text-brand-black" icon="solar:quote-left-bold"></iconify-icon>
</div>
<div className="flex text-brand-yellow stroke-brand-black drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] text-sm mb-4 mt-2">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-brand-black font-bold mb-6 flex-grow leading-relaxed">
                        "Extremely knowledgeable and courteous. They explained the whole trenchless process clearly and didn't leave a mess."
                    </p>
<div className="border-t-2 border-brand-black/10 pt-4 mt-auto">
<p className="font-bold text-sm text-brand-black">Michael T.</p>
</div>
</div>

<div className="bg-brand-gray p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col relative">
<div className="absolute -top-5 -left-4 w-10 h-10 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center shadow-bold-sm">
<iconify-icon className="text-brand-black" icon="solar:quote-left-bold"></iconify-icon>
</div>
<div className="flex text-brand-yellow stroke-brand-black drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] text-sm mb-4 mt-2">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-brand-black font-bold mb-6 flex-grow leading-relaxed">
                        "Always do a great job, quickly and at a fair price. Got quotes from three places and they were by far the best to work with."
                    </p>
<div className="border-t-2 border-brand-black/10 pt-4 mt-auto">
<p className="font-bold text-sm text-brand-black">Sarah W.</p>
</div>
</div>

<div className="bg-brand-gray p-8 rounded-2xl border-2 border-brand-black shadow-bold flex flex-col relative">
<div className="absolute -top-5 -left-4 w-10 h-10 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center shadow-bold-sm">
<iconify-icon className="text-brand-black" icon="solar:quote-left-bold"></iconify-icon>
</div>
<div className="flex text-brand-yellow stroke-brand-black drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] text-sm mb-4 mt-2">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-brand-black font-bold mb-6 flex-grow leading-relaxed">
                        "Very responsive and communicative. Showed up exactly when they said they would and knocked out the water line replacement fast."
                    </p>
<div className="border-t-2 border-brand-black/10 pt-4 mt-auto">
<p className="font-bold text-sm text-brand-black">David L.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-yellow relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-3 p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-brand-black">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black mb-2">Get a Fast Quote</h2>
<p className="text-base text-neutral-600 font-medium mb-8">Fill out the form below or call us. We'll get back to you ASAP.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-bold text-brand-black" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border-2 border-brand-black bg-white text-base font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-all placeholder:text-neutral-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-bold text-brand-black" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border-2 border-brand-black bg-white text-base font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-all placeholder:text-neutral-400" id="phone" placeholder="(585) 555-0123" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-bold text-brand-black" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border-2 border-brand-black bg-white text-base font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-all placeholder:text-neutral-400" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2 relative">
<label className="block text-sm font-bold text-brand-black" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border-2 border-brand-black bg-white text-base font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-all appearance-none text-brand-black" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="sewer">Trenchless Sewer Repair</option>
<option value="water">Water Line Replacement</option>
<option value="boring">Directional Boring</option>
<option value="excavation">Excavation</option>
<option value="plumbing">General Plumbing</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-black">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-bold text-brand-black" htmlFor="message">Message / Details</label>
<textarea className="w-full px-4 py-3 rounded-xl border-2 border-brand-black bg-white text-base font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-all placeholder:text-neutral-400 resize-y" id="message" placeholder="Briefly describe the issue..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-black text-brand-yellow border-2 border-brand-black px-6 py-4 rounded-xl text-lg font-bold hover:bg-neutral-800 transition-colors shadow-bold hover:shadow-bold-sm hover:translate-y-[2px] flex items-center justify-center gap-2" type="button">
                                Send Request <iconify-icon icon="solar:plain-bold"></iconify-icon>
</button>
</form>
</div>

<div className="lg:col-span-2 flex flex-col bg-brand-gray p-8 md:p-12">
<h3 className="text-2xl font-bold tracking-tight text-brand-black mb-8">Contact Information</h3>
<div className="space-y-8 mb-10">
<div>
<p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Call Us Directly</p>
<a className="text-3xl sm:text-4xl font-bold text-brand-black hover:text-yellow-600 transition-colors block break-all" href="tel:5852541624">
                                    (585) 254-1624
                                </a>
</div>
<div>
<p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Service Area</p>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-yellow text-2xl drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] shrink-0" icon="solar:map-point-bold"></iconify-icon>
<p className="text-lg font-bold text-brand-black">Rochester, NY &amp;<br/>Surrounding Areas</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border-2 border-brand-black shadow-bold overflow-hidden relative flex-grow min-h-[200px] flex items-center justify-center group">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center border-4 border-brand-black shadow-bold">
<iconify-icon className="text-brand-black text-2xl" icon="solar:routing-bold"></iconify-icon>
</div>
<div className="bg-brand-black px-4 py-2 rounded-lg shadow-bold mt-3 text-sm font-bold text-white border-2 border-brand-black">
                                    Local Experts
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-black pt-16 pb-8 border-t-4 border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<div className="flex items-center mb-6 bg-white p-2 inline-block rounded-xl border-2 border-transparent">

<img alt="Dyna Mole Logo" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d78cf32-10fa-41eb-b589-4d05e0e82142_320w.png"/>
</div>
<p className="text-base font-medium text-neutral-400 max-w-sm mb-8 leading-relaxed">
                        Rochester's trusted experts in trenchless sewer repair, water line replacement, and underground boring. Reliable solutions without the mess.
                    </p>
<a className="inline-flex items-center gap-2 text-lg font-bold text-brand-black bg-brand-yellow border-2 border-brand-yellow px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]" href="tel:5852541624">
<iconify-icon icon="solar:phone-bold"></iconify-icon>
                        (585) 254-1624
                    </a>
</div>
<div>
<h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4 text-base font-medium text-neutral-400">
<li><a className="hover:text-brand-yellow transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-yellow transition-colors" href="#process">Our Process</a></li>
<li><a className="hover:text-brand-yellow transition-colors" href="#about">About Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-base font-medium text-neutral-400">
<li><a className="hover:text-brand-yellow transition-colors" href="#services">Trenchless Sewer Repair</a></li>
<li><a className="hover:text-brand-yellow transition-colors" href="#services">Water Line Replacement</a></li>
<li><a className="hover:text-brand-yellow transition-colors" href="#services">Directional Boring</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t-2 border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-neutral-500">
<p>© 2023 Dyna Mole of Rochester. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
