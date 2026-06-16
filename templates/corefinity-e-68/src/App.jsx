import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0F0F11',
},
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded bg-white text-black">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white font-display">Corefinity</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Case Studies</a>
</div>
<a className="hidden sm:inline-flex h-8 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10" href="#">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="14"></iconify-icon>
                Chat to an expert
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 pt-32 px-6 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="reveal inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 mb-8">
<iconify-icon className="text-emerald-400 text-xs" icon="lucide:headphones" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">24/7/365 Expert Support</span>
</div>
<h1 className="reveal delay-100 md:text-7xl leading-[1.1] text-5xl text-white tracking-tight mb-6 font-display font-medium">
                Always Available, Expert Support You Can Trust
            </h1>
<p className="reveal delay-200 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Support that never sleeps. Our engineers are available 24/7/365 to ensure your mission-critical e-commerce infrastructure never misses a beat.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
                    Talk to an engineer
                    <iconify-icon className="text-black" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="reveal delay-400 mt-24 pt-8 border-t border-white/5 max-w-5xl mx-auto">
<p className="text-center text-xs text-gray-500 mb-8 uppercase tracking-widest font-medium">Powered by world-class infrastructure</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-white font-display">Google Cloud</span>
<span className="text-xl font-bold tracking-tight text-white uppercase font-display">AWS</span>
<span className="text-xl font-semibold tracking-wide text-white font-display">Azure</span>
</div>
</div>
</section>

<section className="py-16 px-6 border-y border-white/5 bg-surface/30">
<div className="max-w-5xl mx-auto text-center">
<p className="text-sm font-medium text-white mb-8">Supported Platforms &amp; Applications</p>
<div className="flex flex-wrap justify-center gap-10 opacity-50">
<iconify-icon className="text-gray-300" icon="lucide:shopping-bag" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:shopping-cart" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:code-2" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:database" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:server" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:globe" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto text-center reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-6 font-display font-medium">Hosting: Built by (ex) Developers for Developers</h2>
<div className="space-y-6 text-gray-400 leading-relaxed">
<p>
                    Corefinity was founded by Magento developers who were frustrated with slow, inflexible hosting. We set out to build the fastest, most reliable eCommerce stack. Our platform is engineered by certified developers and engineers with years of hands-on experience supporting Magento, Shopware, and other leading platforms. <a className="text-emerald-400 hover:underline decoration-1 underline-offset-4" href="#">Read more about our story</a>.
                </p>
<p>
                    Every part of the stack is developer and agency friendly, with the tools, documentation, and support you need to ship quickly and scale confidently.
                </p>
</div>
</div>
</section>

<section className="py-16 px-6 bg-surface/30 border-y border-white/5">
<div className="max-w-5xl mx-auto text-center">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by</h3>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-white font-display">CLIENT LOGO 1</span>
<span className="text-xl font-bold tracking-tighter text-white font-display">CLIENT LOGO 2</span>
<span className="text-xl font-bold tracking-tighter text-white font-display">CLIENT LOGO 3</span>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal text-center">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">The Corefinity Standard</p>
<h2 className="text-3xl md:text-5xl tracking-tight text-white font-display font-medium">Let Us Redefine Your<br/>Ecommerce Hosting</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal delay-100 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Performance</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Optimized stacks delivering sub-second load times for higher conversion rates.</p>
<button className="flex w-full items-center justify-between rounded border border-white/10 px-3 py-2 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                        Find out more
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="reveal delay-200 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Scalability</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Auto-scaling infrastructure that handles Black Friday traffic spikes with ease.</p>
<button className="flex w-full items-center justify-between rounded border border-white/10 px-3 py-2 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                        Find out more
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="reveal delay-300 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Security</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Enterprise-grade firewalls, DDoS protection, and automated patching included.</p>
<button className="flex w-full items-center justify-between rounded border border-white/10 px-3 py-2 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                        Find out more
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="reveal delay-400 glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 text-pink-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:life-buoy" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Support</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6">Direct access to engineers who know code, not just scripts. 24/7 Availability.</p>
<button className="flex w-full items-center justify-between rounded border border-white/10 px-3 py-2 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                        Find out more
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/30 border-y border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 glass-card p-8 rounded-xl">
<div className="mb-6">
<h4 className="text-3xl font-bold tracking-tighter text-white font-display">EGO</h4>
</div>
<blockquote className="text-gray-400 leading-relaxed italic mb-8">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
                    </blockquote>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<div>
<p className="font-medium text-white text-sm">Manuel Perez</p>
<p className="text-xs text-gray-500">Head of Development</p>
</div>
<a className="text-xs font-medium text-emerald-400 hover:underline" href="#">Read more</a>
</div>
</div>

<div className="reveal delay-200 glass-card p-8 rounded-xl">
<div className="mb-6 flex items-center gap-3">
<div className="h-10 w-10 rounded-full border-2 border-white/30"></div>
<div className="text-sm font-semibold uppercase leading-tight tracking-tight text-white">Mercedes-Benz<br/><span className="text-gray-500 font-normal normal-case text-xs">South West</span></div>
</div>
<blockquote className="text-gray-400 leading-relaxed italic mb-8">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
                    </blockquote>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<div>
<p className="font-medium text-white text-sm">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Technical Lead</p>
</div>
<a className="text-xs font-medium text-emerald-400 hover:underline" href="#">Read more</a>
</div>
</div>
</div>
<div className="mt-10 text-center">
<button className="h-9 px-5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white transition-colors hover:bg-white/10">
                    View all Case Studies
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="reveal text-xs font-semibold tracking-widest text-gray-500 uppercase mb-12 text-center">Key Metrics</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="reveal delay-100 text-center group">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-emerald-400" icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">99.99%</h3>
<p className="text-xs text-gray-500 font-medium">Uptime Average</p>
</div>
<div className="reveal delay-200 text-center group">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-400" icon="lucide:globe-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">24/7/365</h3>
<p className="text-xs text-gray-500 font-medium">UK Based Global Support</p>
</div>
<div className="reveal delay-300 text-center group col-span-2 md:col-span-1">
<div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400" icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white tracking-tight mb-1 font-display font-medium">7 Minutes</h3>
<p className="text-xs text-gray-500 font-medium">Average Emergency Response</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/20">
<div className="max-w-6xl mx-auto">
<h2 className="reveal text-3xl tracking-tight text-white mb-12 text-center font-display font-medium">What You Get with Corefinity</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
<div className="reveal delay-100 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:code" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Magento &amp; Adobe Commerce specialists</h3>
</div>
<div className="reveal delay-100 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:file-check" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">GDPR compliant processes</h3>
</div>
<div className="reveal delay-200 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Direct access to engineers</h3>
</div>
<div className="reveal delay-200 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:settings" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Control Panel with CI/CD</h3>
</div>
<div className="reveal delay-300 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:calendar-check" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Scheduled infrastructure reviews</h3>
</div>
<div className="reveal delay-300 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Security first culture</h3>
</div>
<div className="reveal delay-400 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:file-text" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Post incident reviews</h3>
</div>
<div className="reveal delay-400 bg-gray-950 p-6 hover:bg-gray-900 transition-colors">
<iconify-icon className="text-gray-400 mb-3" icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xs font-medium text-white mb-1">Observability &amp; APM access</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl tracking-tight text-white mb-4 font-display font-medium">Performance Audits</h2>
<p className="text-gray-500">Proof beats promises. We are faster 100% of the time.</p>
</div>
<div className="reveal delay-100 overflow-x-auto rounded-lg border border-white/10">
<table className="w-full min-w-[700px] table-fixed border-collapse text-xs">
<thead>
<tr className="bg-surface text-gray-500">
<th className="border-b border-r border-white/10 p-3 text-left font-medium w-28">Environment</th>
<th className="border-b border-r border-white/10 p-3 font-medium" colspan="2">Home</th>
<th className="border-b border-r border-white/10 p-3 font-medium" colspan="2">Category</th>
<th className="border-b border-r border-white/10 p-3 font-medium" colspan="2">Product</th>
<th className="border-b border-white/10 p-3 font-medium" colspan="2">Basket</th>
</tr>
<tr className="bg-surface text-gray-600 text-[10px] uppercase tracking-wide">
<th className="border-b border-r border-white/10 p-2 text-left"></th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Uncached</th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Cached</th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Uncached</th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Cached</th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Uncached</th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Cached</th>
<th className="border-b border-r border-white/10 p-2 text-center text-blue-400">Uncached</th>
<th className="border-b border-white/10 p-2 text-center text-blue-400">Cached</th>
</tr>
</thead>
<tbody>
<tr className="bg-gray-950">
<td className="border-b border-r border-white/10 p-3 font-medium text-gray-400">Competitor X</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">1164.17</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">114.99</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">2516.79</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">137.84</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">2593.97</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">132.44</td>
<td className="border-b border-r border-white/10 p-3 text-center text-gray-500">1443.52</td>
<td className="border-b border-white/10 p-3 text-center text-gray-600">N/A</td>
</tr>
<tr className="bg-emerald-950/30">
<td className="border-b border-r border-white/10 p-3 font-semibold text-emerald-400">Corefinity</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">336.49</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">114.04</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">655.54</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">105.53</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">697.39</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">105.40</td>
<td className="border-b border-r border-white/10 p-3 text-center font-medium text-emerald-400">403.06</td>
<td className="border-b border-white/10 p-3 text-center text-gray-600">N/A</td>
</tr>
<tr className="bg-gray-950 text-[10px]">
<td className="border-r border-white/10 p-3 font-medium text-gray-600">Performance Diff</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">71.10%</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">0.82%</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">73.95%</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">23.44%</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">73.11%</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">20.41%</td>
<td className="border-r border-white/10 p-3 text-center text-blue-400 font-medium">72.08%</td>
<td className="p-3 text-center"></td>
</tr>
</tbody>
</table>
</div>
<div className="mt-8 text-center">
<button className="h-9 px-5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white transition-colors hover:bg-white/10">
                    View all Performance Audits
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/30 border-y border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal text-3xl tracking-tight text-white mb-12 font-display font-medium">Watch our Client testimonials</h2>
<div className="reveal delay-100 relative">
<div className="aspect-video w-full rounded-xl border border-white/10 bg-gray-900 flex items-center justify-center group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-110">
<iconify-icon className="ml-1 text-black" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<button className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-white hidden lg:block transition-colors">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-white hidden lg:block transition-colors">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="mt-8 flex justify-center gap-3">
<div className="h-10 w-14 border border-white/20 bg-white/5 rounded flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="lucide:x" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="h-10 w-14 border border-white/20 bg-white/5 rounded flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="lucide:x" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="h-10 w-14 border border-white/20 bg-white/5 rounded flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="lucide:x" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="h-10 w-14 border border-white/20 bg-white/5 rounded flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="lucide:x" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-black pointer-events-none"></div>
<div className="reveal max-w-4xl mx-auto glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-2xl md:text-3xl tracking-tight text-white mb-4 font-display font-medium">Need Technical Details?</h2>
<p className="text-gray-400 mb-8">Explore our full support documentation with guides, runbooks, and escalation procedures.</p>
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all">
                View Support Docs
            </button>
</div>
</section>

<footer className="pt-24 pb-12 px-6 bg-black border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="reveal grid grid-cols-2 md:grid-cols-4 gap-12 pb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-7 w-7 items-center justify-center rounded bg-white text-black">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white font-display">Corefinity</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                        Expert e-commerce hosting built by developers, for developers.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Solutions</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Magento Hosting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shopware Hosting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="reveal delay-100 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700">
<p>© 2024 Corefinity. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-gray-500" href="#">Privacy</a>
<a className="hover:text-gray-500" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
