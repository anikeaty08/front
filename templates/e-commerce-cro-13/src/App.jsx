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
      

<nav className="sticky top-0 z-50 border-b backdrop-blur-md border-zinc-900 bg-black/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-zinc-100">ASCRO LABS</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="transition-colors hover:text-emerald-400" href="#approach">Approach</a>
<a className="transition-colors hover:text-emerald-400" href="#why-us">Methodology</a>
<a className="transition-colors hover:text-emerald-400" href="#statistics">Results</a>
<a className="px-4 py-2 rounded-full transition-all font-semibold bg-emerald-400 text-black hover:bg-emerald-300" href="#cta">Increase My Revenue</a>
</div>
<button className="md:hidden text-2xl text-emerald-400">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#f0fdf4_0%,_transparent_70%)] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 border bg-emerald-950 border-emerald-900 text-emerald-300">
<iconify-icon className="text-emerald-400" icon="solar:chart-square-linear"></iconify-icon>
<span>Without spending more on ads</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-8 text-zinc-100">
                We help ecom brands get more sales and increase <span className="text-emerald-400">average order value</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10">
                We help existing e-com brands get more sales and increase AOV without spending more on ads. We also help new brands build their digital flagship.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 bg-emerald-400 text-black hover:bg-emerald-300" href="#cta">
                    Start Scaling
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl border font-medium transition-all border-zinc-800 text-zinc-400 hover:bg-zinc-950" href="#statistics">
                    View Case Studies
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Our Approach</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-zinc-100">The reasons why ASCRO LABS works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl border transition-all duration-300 group bg-black border-zinc-800 hover:border-emerald-700">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform bg-emerald-950 text-emerald-400">
<iconify-icon icon="solar:mask-happly-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-zinc-100">Consumer Psychology</h3>
<p className="text-sm text-zinc-500 leading-relaxed">First we analyze your target audience and their repetitive patterns.</p>
</div>

<div className="p-8 rounded-3xl border transition-all duration-300 group bg-black border-zinc-800 hover:border-emerald-700">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform bg-emerald-950 text-emerald-400">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-zinc-100">Buyers Personas</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Based on patterns, we create specific buyer personas of your ideal clientele.</p>
</div>

<div className="p-8 rounded-3xl border transition-all duration-300 group bg-black border-zinc-800 hover:border-emerald-700">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform bg-emerald-950 text-emerald-400">
<iconify-icon icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-zinc-100">LP Optimization</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We build tailor made Landingpages around the ideal customer profiles.</p>
</div>

<div className="p-8 rounded-3xl border transition-all duration-300 group bg-black border-zinc-800 hover:border-emerald-700">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform bg-emerald-950 text-emerald-400">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 text-zinc-100">CRO</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every step is made with the idea of converting and guiding ICP towards checkout.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-4xl mx-auto px-6">
<div className="relative p-12 rounded-[2rem] overflow-hidden border bg-emerald-950 border-emerald-900">
<iconify-icon className="absolute top-8 left-8 text-4xl text-emerald-800" icon="solar:quotation-marks-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-xl md:text-2xl font-light leading-relaxed mb-8 italic text-zinc-200">
                        "ASCRO LABS was excellent. Used his team to build a landing page for a campaign. Saw <span className="font-semibold text-emerald-300">over 20% increase in conversions</span> in the first 30 days."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold border bg-black border-emerald-900 text-emerald-300">JM</div>
<div>
<div className="font-medium text-zinc-100">Jack M.</div>
<div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Ecom Founder</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="statistics">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-zinc-100">The reality of scaling e-commerce</h2>
<p className="text-zinc-500 font-medium">Don't be part of the 95% that fail to optimize.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group p-8 rounded-3xl border flex items-start gap-6 border-zinc-900 bg-zinc-950">
<div className="flex-shrink-0 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center bg-black border-zinc-800">
<span className="text-xl font-semibold tracking-tight text-zinc-100">140+</span>
<span className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Cases</span>
</div>
<div>
<p className="text-lg font-medium text-zinc-300">75 / 100 ecommerce stores have a CVR below 2%.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border flex items-start gap-6 border-zinc-900 bg-zinc-950">
<div className="flex-shrink-0 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center bg-black border-zinc-800">
<span className="text-xl font-semibold tracking-tight text-zinc-100">50+</span>
<span className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Cases</span>
</div>
<div>
<p className="text-lg font-medium text-zinc-300">24 / 25 ecom stores have an AOV no greater than their average product price.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border flex items-start gap-6 border-zinc-900 bg-zinc-950">
<div className="flex-shrink-0 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center bg-black border-zinc-800">
<span className="text-xl font-semibold tracking-tight text-zinc-100">300+</span>
<span className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Cases</span>
</div>
<div>
<p className="text-lg font-medium text-zinc-300">Leaving only 1 / 100 ecom stores with a CVR and AOV high enough to scale.</p>
</div>
</div>

<div className="group p-8 rounded-3xl flex items-start gap-6 shadow-xl shadow-emerald-900 bg-emerald-400 text-black">
<div className="flex-shrink-0 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center bg-emerald-500/50 border-emerald-600">
<span className="text-xl font-semibold tracking-tight">78</span>
<span className="text-[10px] uppercase tracking-widest font-bold text-black/70">Cases</span>
</div>
<div>
<p className="text-lg font-semibold">It's time to change that and increase your revenue with data-backed CRO.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-black" id="cta">
<div className="max-w-5xl mx-auto px-6">
<div className="rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden bg-zinc-100 text-black">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-20 from-emerald-500"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to scale without spending more on ads?</h2>
<p className="text-lg mb-10 max-w-xl mx-auto text-zinc-600">Get your custom CRO audit and build the e-commerce website of your dreams.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold transition-all text-sm uppercase tracking-widest bg-emerald-500 shadow-lg shadow-emerald-500/20 text-zinc-100 hover:bg-emerald-600">
                            INCREASE MY REVENUE
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-16 bg-black border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<div className="text-xl font-semibold tracking-tighter mb-6 text-zinc-100">ASCRO LABS</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-medium">
                        Objectively the best at CRO and data analytics for ambitious e-com brands.
                    </p>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-zinc-600">Contact</h4>
<div className="space-y-3 text-sm text-zinc-400">
<a className="block transition-colors flex items-center gap-2 hover:text-emerald-400" href="mailto:info@ascrolabs.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon> info@ascrolabs.com
                        </a>
<a className="block transition-colors flex items-center gap-2 hover:text-emerald-400" href="tel:8254609730">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 825-460-9730
                        </a>
</div>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-zinc-600">Social</h4>
<div className="flex gap-4 text-xl text-zinc-600">
<a className="transition-colors hover:text-emerald-400" href="#"><iconify-icon icon="solar:share-circle-linear"></iconify-icon></a>
<a className="transition-colors hover:text-emerald-400" href="#"><iconify-icon icon="solar:star-circle-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest font-bold border-zinc-900 text-zinc-600">
<div>© 2022 ASCRO LABS - All Rights Reserved.</div>
<div className="flex gap-8">
<a className="transition-colors hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
