import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Pricing Toggle Logic
        let isYearly = false;
        function togglePricing() {
            isYearly = !isYearly;
            const circle = document.getElementById('toggle-circle');
            const monthlyLabel = document.getElementById('monthly-label');
            const yearlyLabel = document.getElementById('yearly-label');
            const prices = document.querySelectorAll('.price-text');

            if (isYearly) {
                circle.style.transform = 'translateX(1.5rem)';
                monthlyLabel.classList.replace('text-white', 'text-neutral-500');
                yearlyLabel.classList.replace('text-neutral-500', 'text-white');
                prices.forEach(price => price.innerText = price.getAttribute('data-yearly'));
            } else {
                circle.style.transform = 'translateX(0.125rem)';
                monthlyLabel.classList.replace('text-neutral-500', 'text-white');
                yearlyLabel.classList.replace('text-white', 'text-neutral-500');
                prices.forEach(price => price.innerText = price.getAttribute('data-monthly'));
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-indigo-400" icon="solar:microphone-3-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">PodPress</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Login</a>
<a className="group relative flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:bg-neutral-200" href="#">
<span>Start Free</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

<div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 mb-8 animate-fade-in">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-xs font-medium text-indigo-300">New AI Model v2.0 Available</span>
</div>

<h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Turn your podcasts into <br/>
<span className="gradient-text">newsletters in minutes.</span>
</h1>

<p className="mx-auto max-w-xl text-lg text-neutral-400 font-light mb-10 leading-relaxed">
                Upload or link your episode • Pick tone &amp; depth • Your newsletter is ready.
                Streamline your content workflow today.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="h-12 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] flex items-center gap-2">
                    Start Free
                    <iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-medium">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Used by 200+ creators
                </span>
<span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:global-linear"></iconify-icon>
                    15+ languages supported
                </span>
<span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:clock-circle-linear"></iconify-icon>
                    Saves 6+ hours weekly
                </span>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur opacity-30"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col">

<div className="h-10 border-b border-white/5 bg-neutral-900/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="flex-1 flex p-6 gap-6">

<div className="w-48 hidden md:block border-r border-white/5 pr-4 space-y-1">
<div className="h-8 rounded-md bg-white/5 w-full"></div>
<div className="h-8 rounded-md w-3/4"></div>
<div className="h-8 rounded-md w-5/6"></div>
</div>

<div className="flex-1 space-y-4">
<div className="flex justify-between items-center">
<div className="h-6 w-32 bg-white/10 rounded"></div>
<div className="h-8 w-24 bg-indigo-500/20 rounded-full border border-indigo-500/30"></div>
</div>
<div className="space-y-2">
<div className="h-4 w-full bg-neutral-800 rounded"></div>
<div className="h-4 w-5/6 bg-neutral-800 rounded"></div>
<div className="h-4 w-4/6 bg-neutral-800 rounded"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="h-24 rounded-lg border border-white/5 bg-neutral-900 p-4"></div>
<div className="h-24 rounded-lg border border-white/5 bg-neutral-900 p-4"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5" id="how-it-works">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-medium tracking-tight text-white">From audio to inbox in 3 steps</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent border-t border-dashed border-white/20 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)] transition-all duration-300">
<iconify-icon className="text-white text-2xl" icon="solar:upload-track-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Connect or Upload</h3>
<p className="text-sm text-neutral-400 max-w-xs">Drop an MP3, paste an RSS feed link, or connect your YouTube channel directly.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)] transition-all duration-300">
<iconify-icon className="text-white text-2xl" icon="solar:tuning-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pick Episode &amp; Tone</h3>
<p className="text-sm text-neutral-400 max-w-xs">Select the episode and choose a preset tone (Witty, Professional, Casual).</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)] transition-all duration-300">
<iconify-icon className="text-white text-2xl" icon="solar:plain-air-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Generate &amp; Publish</h3>
<p className="text-sm text-neutral-400 max-w-xs">Review the AI-generated draft, edit if needed, and export to your favorite platform.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-indigo-500" icon="solar:magic-stick-3-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">One-Click Generation</h3>
<p className="text-sm text-neutral-400 max-w-md">Our advanced audio processing pipeline transcribes, analyzes, and reformats your audio in seconds. No more manual transcription.</p>
</div>
</div>

<div className="md:col-span-1 rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
<iconify-icon icon="solar:globe-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">15+ Languages</h3>
<p className="text-sm text-neutral-400">From English to Spanish, French to Japanese. Reach a global audience automatically.</p>
</div>

<div className="md:col-span-1 rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<iconify-icon icon="solar:feed-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">RSS Auto-Scan</h3>
<p className="text-sm text-neutral-400">Connect your feed once. We'll draft a newsletter every time you drop a new episode.</p>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 transition-colors flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">AI Enhancement + Tone</h3>
<p className="text-sm text-neutral-400">Adjust the output to sound exactly like you. Control length, humor, and formatting structure.</p>
</div>

<div className="w-full md:w-64 bg-black/50 border border-white/10 rounded-lg p-4 space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Tone</span>
<span className="text-emerald-400">Witty</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-emerald-500"></div>
</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-neutral-300">Summary</div>
<div className="px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30 text-[10px] text-indigo-300">Newsletter</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white">Create any format</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:bg-neutral-900 transition-colors cursor-default">
<div className="mb-4 text-indigo-400 transition-transform group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:letter-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-1">Newsletter</h4>
<p className="text-xs text-neutral-500">Engaging, readable emails optimized for Substack or Beehiiv.</p>
</div>
<div className="group p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:bg-neutral-900 transition-colors cursor-default">
<div className="mb-4 text-pink-400 transition-transform group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:notes-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-1">Show Notes</h4>
<p className="text-xs text-neutral-500">Time-stamped summaries and key takeaways for SEO.</p>
</div>
<div className="group p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:bg-neutral-900 transition-colors cursor-default">
<div className="mb-4 text-blue-400 transition-transform group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-1">Blog Post</h4>
<p className="text-xs text-neutral-500">Long-form articles derived from deep-dive episodes.</p>
</div>
<div className="group p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:bg-neutral-900 transition-colors cursor-default">
<div className="mb-4 text-yellow-400 transition-transform group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:mention-circle-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-1">Social Clips</h4>
<p className="text-xs text-neutral-500">Short hooks and threads for Twitter/X and LinkedIn.</p>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden" id="integrations">
<div className="mx-auto max-w-7xl px-6 text-center">
<p className="text-sm font-medium text-neutral-500 mb-8">WORKS SEAMLESSLY WITH</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="simple-icons:beehiiv"></iconify-icon> beehiiv</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="simple-icons:mailchimp"></iconify-icon> Mailchimp</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="simple-icons:medium"></iconify-icon> Medium</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="simple-icons:discord"></iconify-icon> Discord</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="simple-icons:telegram"></iconify-icon> Telegram</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="simple-icons:x"></iconify-icon> X</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="h-px w-12 bg-indigo-500 mb-6"></div>
<h3 className="text-xl font-medium text-white">Solo Creators</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Focus on recording. Let PodPress handle the written distribution. Double your audience without writing a word.
                    </p>
</div>

<div className="space-y-4">
<div className="h-px w-12 bg-purple-500 mb-6"></div>
<h3 className="text-xl font-medium text-white">Brand &amp; Teams</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Repurpose internal updates or branded podcasts into company-wide newsletters and blog content instantly.
                    </p>
</div>

<div className="space-y-4">
<div className="h-px w-12 bg-white mb-6"></div>
<h3 className="text-xl font-medium text-white">Agencies</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Scale your production. Handle 10x more clients by automating the post-production writing workflow.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl font-medium tracking-tight text-white text-center mb-16">Loved by audio creators</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"I used to spend 4 hours writing show notes. PodPress does it in 3 minutes, and honestly, the AI writes better summaries than I do."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden">

<iconify-icon className="text-neutral-500 w-full h-full text-3xl" icon="solar:user-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Sarah Jenkins</div>
<div className="text-[10px] text-neutral-500">Host, "Tech Daily"</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"The ability to choose the 'tone' is a game changer. It captures my sarcasm perfectly. My newsletter open rates are up 20%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden">
<iconify-icon className="text-neutral-500 w-full h-full text-3xl" icon="solar:user-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Marcus Chen</div>
<div className="text-[10px] text-neutral-500">Indie Hacker</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"It's not just a summary tool. We use it to turn webinars into blog posts for SEO. Incredible ROI for our marketing team."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden">
<iconify-icon className="text-neutral-500 w-full h-full text-3xl" icon="solar:user-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Elena Rodriguez</div>
<div className="text-[10px] text-neutral-500">CMO at StreamLine</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing</h2>

<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-sm text-white" id="monthly-label">Monthly</span>
<button className="relative w-12 h-6 rounded-full bg-neutral-800 border border-white/10 transition-colors focus:outline-none" id="price-toggle" onclick="togglePricing()">
<div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform transform translate-x-0.5" id="toggle-circle"></div>
</button>
<span className="text-sm text-neutral-500" id="yearly-label">Yearly <span className="text-indigo-400 text-xs ml-1 font-medium">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col">
<h3 className="text-lg font-medium text-white">Hobby</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-medium text-white">$0</span>
</div>
<p className="mt-2 text-sm text-neutral-500">Forever free for hobbyists.</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-400 flex-1">
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 1 hour of audio / mo</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Standard quality</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Manual export</li>
</ul>
<a className="mt-8 w-full block text-center rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#">Start Free</a>
</div>

<div className="rounded-2xl border border-indigo-500/30 bg-neutral-900/60 p-8 flex flex-col relative shadow-2xl shadow-indigo-500/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-0.5 rounded-full">Most Popular</div>
<h3 className="text-lg font-medium text-white">Creator</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-medium text-white price-text" data-monthly="$19" data-yearly="$15">$19</span>
<span className="ml-1 text-sm text-neutral-500">/mo</span>
</div>
<p className="mt-2 text-sm text-neutral-500">For serious podcasters.</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-300 flex-1">
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> 10 hours of audio / mo</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> High-quality AI Model</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Custom Tone Training</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Auto-sync to Beehiiv</li>
</ul>
<a className="mt-8 w-full block text-center rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors" href="#">Get Started</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col">
<h3 className="text-lg font-medium text-white">Agency</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-medium text-white price-text" data-monthly="$49" data-yearly="$39">$49</span>
<span className="ml-1 text-sm text-neutral-500">/mo</span>
</div>
<p className="mt-2 text-sm text-neutral-500">For networks and teams.</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-400 flex-1">
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited audio</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 5 Team seats</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
<a className="mt-8 w-full block text-center rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="faq">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl font-medium tracking-tight text-white text-center mb-12">Common questions</h2>
<div className="space-y-4">

<details className="group rounded-xl border border-white/10 bg-neutral-900/30 open:bg-neutral-900/50 open:border-white/20 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white outline-none">
                        How fast can PodPress generate a newsletter?
                        <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Typically less than 2 minutes for a 60-minute episode. We use parallel processing to transcribe and summarize simultaneously.
                    </div>
</details>

<details className="group rounded-xl border border-white/10 bg-neutral-900/30 open:bg-neutral-900/50 open:border-white/20 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white outline-none">
                        Do I have to write show notes anymore?
                        <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Nope. PodPress generates SEO-optimized show notes, timestamps, and key takeaways automatically. You can edit them before publishing if you wish.
                    </div>
</details>

<details className="group rounded-xl border border-white/10 bg-neutral-900/30 open:bg-neutral-900/50 open:border-white/20 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white outline-none">
                        What formats can I export?
                        <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Currently, we support HTML export (for any email tool), Markdown (for blogs/notion), and direct integrations with Beehiiv and WordPress.
                    </div>
</details>

<details className="group rounded-xl border border-white/10 bg-neutral-900/30 open:bg-neutral-900/50 open:border-white/20 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white outline-none">
                        Does it work with non-English podcasts?
                        <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Yes! We support over 15 languages including Spanish, French, German, Portuguese, and Japanese. The output can be in the same language or translated to English.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-black pt-16 pb-8 border-t border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" icon="solar:microphone-3-linear" width="20"></iconify-icon>
<span className="text-white font-medium tracking-tight">PodPress</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                        Empowering creators to maximize the value of their voice. Built for the modern audio ecosystem.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2023 PodPress Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:x"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:discord"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
