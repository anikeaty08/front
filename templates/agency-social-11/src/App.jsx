import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleModal(show) {
            const modal = document.getElementById('booking-modal');
            const form = document.getElementById('booking-form');
            const success = document.getElementById('booking-success');
            
            if (show) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                form.style.display = 'block';
                success.classList.add('hidden');
                form.style.opacity = '1';
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        function toggleFaq(button) {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        }

        function confirmBooking() {
            const form = document.getElementById('booking-form');
            const success = document.getElementById('booking-success');
            
            form.style.opacity = '0';
            setTimeout(() => {
                form.style.display = 'none';
                success.classList.remove('hidden');
                success.style.opacity = '0';
                setTimeout(() => {
                    success.style.opacity = '1';
                }, 50);
            }, 300);
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Simple reveal animation observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                }
            });
        }, { threshold: 0.1 });

        // Add reveal logic
        document.querySelectorAll('h2, .animate-float-card').forEach(el => {
            el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
            new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) entry.target.classList.remove('opacity-0', 'translate-y-4');
                });
            }).observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#2a0a0a] text-[#ff4d4d] border-b border-[#ff4d4d]/20 py-2.5 px-4 flex items-center justify-center text-xs relative z-50">
<div className="flex flex-col sm:flex-row items-center gap-3 text-center">
<span className="text-neutral-300 font-medium">Accepting new clients for Q4 (Limited Capacity)</span>
<button className="bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 text-[#ff4d4d] border border-[#ff4d4d]/30 px-3 py-0.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 group" onclick="toggleModal(true)">
                Apply for Review
                <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#050202]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<div className="w-7 h-7 bg-gradient-to-br from-[#7f1d1d] to-[#991b1b] rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(127,29,29,0.5)]">
<iconify-icon icon="solar:infinity-bold" width="16"></iconify-icon>
</div>
<span className="text-white">Agency</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#">
                        Case Studies
                    </a>
<a className="hover:text-white transition-colors" href="#">Creators</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" onclick="toggleModal(true)">Login</button>
<button className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-lg text-xs font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2" onclick="toggleModal(true)">
                    Start Growth
                    <iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-20 pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#991b1b] rounded-full blur-[130px] opacity-20 -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 bg-neutral-900/50 border border-white/10 rounded-full pl-1 pr-4 py-1 shadow-sm mb-8 hover:border-[#ff4d4d]/30 transition-colors cursor-default backdrop-blur-sm">
<span className="bg-[#7f1d1d] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    Verified <iconify-icon className="text-[#ff4d4d]" icon="solar:verified-check-bold"></iconify-icon>
</span>
<span className="text-xs text-neutral-300 font-medium">The New Standard in Organic Growth</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto">
                Your organic social media <br className="hidden md:block"/>
                presence <span className="font-serif-italic text-[#ff4d4d] font-normal drop-shadow-[0_0_25px_rgba(255,77,77,0.4)]">on steroids.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                We transform your best ideas into beautiful, high-performing content across all platforms, 100% done-for-you.
            </p>
<div className="flex flex-col items-center gap-4 mb-20">
<button className="group relative bg-[#7f1d1d] hover:bg-[#991b1b] text-white text-base font-medium px-8 py-3.5 rounded-xl shadow-[0_0_30px_rgba(127,29,29,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center overflow-hidden border border-[#ef4444]/30" onclick="toggleModal(true)">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="relative">Get Your Content Plan</span>
<iconify-icon className="relative transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-900/80 px-3 py-1.5 rounded-md border border-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d] animate-pulse"></span>
<span className="font-medium text-neutral-400">Zero effort required on your end.</span>
</div>
</div>

<div className="max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-[#ff4d4d]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] aspect-[16/9] ring-1 ring-black/5 flex flex-col">

<div className="h-10 border-b border-white/5 bg-neutral-900/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto bg-black/40 px-3 py-1 rounded text-[10px] text-neutral-500 font-mono">analytics.agency.com/dashboard</div>
</div>

<div className="p-8 grid grid-cols-12 gap-6 h-full">

<div className="col-span-3 border-r border-white/5 pr-6 space-y-4">
<div className="h-8 w-24 bg-white/5 rounded animate-pulse"></div>
<div className="space-y-2 pt-4">
<div className="flex items-center gap-3 text-sm text-[#ff4d4d] bg-[#ff4d4d]/10 p-2 rounded"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> Overview</div>
<div className="flex items-center gap-3 text-sm text-neutral-500 p-2"><iconify-icon icon="solar:documents-linear"></iconify-icon> Content</div>
<div className="flex items-center gap-3 text-sm text-neutral-500 p-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Audience</div>
</div>
</div>

<div className="col-span-9 flex flex-col gap-6">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-neutral-500 mb-1">Total Impressions</div>
<div className="text-3xl font-medium text-white">2,405,192 <span className="text-sm text-[#ff4d4d] font-normal ml-2">+124%</span></div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400"><iconify-icon icon="solar:calendar-linear"></iconify-icon></div>
</div>
</div>

<div className="flex-1 bg-gradient-to-t from-[#ff4d4d]/5 to-transparent rounded-lg border border-[#ff4d4d]/10 relative overflow-hidden flex items-end px-4 pt-8 gap-2">
<div className="w-full bg-[#ff4d4d]/20 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#ff4d4d]/30 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-[#ff4d4d]/40 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-[#ff4d4d]/60 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-[#ff4d4d]/50 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-[#ff4d4d]/80 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-[#ff4d4d] rounded-t-sm h-[90%] shadow-[0_0_20px_rgba(255,77,77,0.4)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#080202]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-10 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2 group-hover:text-[#ff4d4d] transition-colors">150M+</div>
<div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide flex items-center gap-2">Impressions Generated <iconify-icon icon="solar:eye-linear"></iconify-icon></div>
</div>
<div className="py-10 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2 group-hover:text-[#ff4d4d] transition-colors">10x</div>
<div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide flex items-center gap-2">Faster Production <iconify-icon icon="solar:bolt-linear"></iconify-icon></div>
</div>
<div className="py-10 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2 group-hover:text-[#ff4d4d] transition-colors">3</div>
<div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide flex items-center gap-2">Platforms Mastered <iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050202] border-b border-white/5 relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                    Content creation is broken. <br/>
<span className="font-serif-italic font-normal text-neutral-400">We fixed it.</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-20">

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-[#ff4d4d]/30">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400 mb-6 group-hover:scale-110 group-hover:text-[#ff4d4d] transition-all duration-300">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Ghost Town Profiles</h3>
<p className="text-sm text-neutral-400 leading-relaxed">You know you should be posting, but days turn into weeks of silence. Your audience forgets you exist.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-[#ff4d4d]/30">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400 mb-6 group-hover:scale-110 group-hover:text-[#ff4d4d] transition-all duration-300">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Inconsistent Growth</h3>
<p className="text-sm text-neutral-400 leading-relaxed">One viral hit followed by crickets. You're riding a roller coaster of engagement that never builds momentum.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-[#ff4d4d]/30">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400 mb-6 group-hover:scale-110 group-hover:text-[#ff4d4d] transition-all duration-300">
<iconify-icon icon="solar:alarm-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Time Drain</h3>
<p className="text-sm text-neutral-400 leading-relaxed">You spend hours tweaking hooks and editing videos instead of building your business and closing deals.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full pt-20 pb-40 bg-[#050202] text-white overflow-hidden flex flex-col items-center border-b border-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#991b1b] rounded-full blur-[150px] opacity-[0.1] pointer-events-none"></div>
<div className="text-center w-full max-w-4xl z-10 relative mb-2 px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">The Content Engine</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">Ideas flow in. Revenue flows out.</p>
</div>
<div className="relative flex flex-col items-center w-full max-w-[1400px] mt-12">

<div className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-center">
<div className="absolute inset-0 animate-spin-slow">
<svg className="absolute inset-0 w-full h-full text-white/5" viewbox="0 0 600 600">
<g className="stroke-current stroke-[1]">
<circle className="animate-flow-in" cx="300" cy="300" r="100"></circle>
<circle className="animate-flow-in delay-1" cx="300" cy="300" r="250"></circle>
<line className="animate-flow-in" x1="300" x2="300" y1="50" y2="200"></line>
<line className="animate-flow-in delay-1" x1="550" x2="400" y1="300" y2="300"></line>
<line className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="400"></line>
<line className="animate-flow-in delay-3" x1="50" x2="200" y1="300" y2="300"></line>
</g>
</svg>

<div className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-12 h-12 bg-[#1a0505] border border-[#ff4d4d]/20 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,77,77,0.2)] z-20">
<iconify-icon className="text-[#ff4d4d]" icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-12 h-12 bg-[#1a0505] border border-[#ff4d4d]/20 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon className="text-[#ff4d4d]" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-12 h-12 bg-[#1a0505] border border-[#ff4d4d]/20 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon icon="logos:twitter" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-12 h-12 bg-[#1a0505] border border-[#ff4d4d]/20 rounded-xl flex items-center justify-center shadow-lg">
<iconify-icon icon="logos:linkedin-icon" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="absolute z-30 flex items-center justify-center">
<div className="w-24 h-24 bg-[#0a0a0a] rounded-full border border-[#ff4d4d]/30 flex items-center justify-center shadow-[0_0_50px_rgba(255,77,77,0.15)] relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-[#ff4d4d]/5 animate-pulse"></div>
<iconify-icon className="text-white relative z-10" icon="solar:magic-stick-3-bold-duotone" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050202] border-b border-white/5">
<div className="max-w-7xl w-full mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold text-center text-white tracking-tight mb-16 md:mb-20">
                Our Work
            </h1>
<p className="text-center text-neutral-400 max-w-2xl mx-auto -mt-10 mb-16">Scroll-stopping visuals that speak to your brand and drive engagement.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group relative bg-[#0A0A0A] rounded-[32px] border border-white/10 p-8 md:p-12 overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-[#ff4d4d]/20">
<div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4d4d] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow opacity-20"></div>
<div className="relative h-48 mb-6 flex items-center justify-center">

<div className="absolute bg-[#1A1D21] border border-white/10 shadow-2xl rounded-xl p-4 w-[280px] animate-float backdrop-blur-md z-10 rotate-[-2deg]">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div className="flex flex-col">
<div className="h-2 w-20 bg-neutral-700 rounded mb-1"></div>
<div className="h-1.5 w-12 bg-neutral-800 rounded"></div>
</div>
</div>
<div className="h-24 bg-neutral-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-neutral-600" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<div className="flex justify-between text-neutral-500">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:chat-round-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bg-[#1A1D21] border border-white/10 shadow-xl rounded-xl p-4 w-[280px] animate-float backdrop-blur-md z-0 rotate-[3deg] opacity-60 translate-x-4 translate-y-4" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative z-0 mt-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Content Production</h2>
<p className="text-sm font-medium tracking-wide text-[#ff4d4d] uppercase mb-4">Done For You</p>
<p className="text-neutral-400 leading-relaxed mb-6">
                            We research, script, design, and edit. You get a month's worth of content ready to post without lifting a finger.
                        </p>
<div className="w-full h-px bg-white/10 mb-6"></div>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-neutral-400 text-sm"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-linear"></iconify-icon> Short-form Video</li>
<li className="flex items-center gap-3 text-neutral-400 text-sm"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-linear"></iconify-icon> Thread Writing</li>
<li className="flex items-center gap-3 text-neutral-400 text-sm"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-linear"></iconify-icon> Carousel Design</li>
</ul>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-[32px] border border-white/10 p-8 md:p-12 overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-[#ff4d4d]/20">
<div className="absolute top-0 right-0 w-96 h-96 bg-[#991b1b] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow opacity-20"></div>
<div className="relative h-48 mb-6 flex items-center justify-center">
<div className="w-full max-w-[300px] h-32 bg-white/5 rounded-xl border border-white/10 backdrop-blur flex items-end p-4 gap-3 animate-float" style={{animationDelay: '0.5s'}}>
<div className="w-full bg-[#ff4d4d]/20 rounded-t h-[30%]"></div>
<div className="w-full bg-[#ff4d4d]/40 rounded-t h-[50%]"></div>
<div className="w-full bg-[#ff4d4d]/60 rounded-t h-[40%]"></div>
<div className="w-full bg-[#ff4d4d]/80 rounded-t h-[70%]"></div>
<div className="w-full bg-[#ff4d4d] rounded-t h-[90%] shadow-[0_0_15px_rgba(255,77,77,0.5)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg">+240%</div>
</div>
</div>
</div>
<div className="relative z-0 mt-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Audience Growth</h2>
<p className="text-sm font-medium tracking-wide text-[#ff4d4d] uppercase mb-4">Revenue Focused</p>
<p className="text-neutral-400 leading-relaxed mb-6">
                            We don't just chase likes. We build an email list, boost ad performance, and drive revenue through strategic organic funnels.
                        </p>
<div className="w-full h-px bg-white/10 mb-6"></div>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-neutral-400 text-sm"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-linear"></iconify-icon> Email List Building</li>
<li className="flex items-center gap-3 text-neutral-400 text-sm"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-linear"></iconify-icon> Community Management</li>
<li className="flex items-center gap-3 text-neutral-400 text-sm"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-linear"></iconify-icon> Performance Analytics</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Trusted by Some of The <br/> Biggest Names in The Space</h2>
<p className="text-neutral-400">Don't just take our word for it—see what our clients have to say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-900 rounded-2xl p-8 shadow-sm border border-white/5 relative group hover:border-[#ff4d4d]/20 transition-all">
<iconify-icon className="absolute top-6 right-6 text-neutral-700 w-8 h-8 group-hover:text-[#ff4d4d]/50 transition-colors" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<div className="flex gap-1 text-[#ff4d4d] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-8 font-medium">"Finally an agency that understands nuance. The content they produce sounds exactly like me, but better."</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">NC</div>
<div>
<div className="text-sm font-semibold text-white">Nicolas Cole</div>
<div className="text-[10px] text-neutral-500">Author, Serial Entrepreneur</div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-2xl p-8 shadow-sm border border-white/5 relative group hover:border-[#ff4d4d]/20 transition-all">
<iconify-icon className="absolute top-6 right-6 text-neutral-700 w-8 h-8 group-hover:text-[#ff4d4d]/50 transition-colors" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<div className="flex gap-1 text-[#ff4d4d] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-8 font-medium">"The ROI on their organic strategy is insane. We've doubled our email list in 3 months purely from social."</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">DB</div>
<div>
<div className="text-sm font-semibold text-white">Dickie Bush</div>
<div className="text-[10px] text-neutral-500">Digital Writer, Entrepreneur</div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-2xl p-8 shadow-sm border border-white/5 relative group hover:border-[#ff4d4d]/20 transition-all">
<iconify-icon className="absolute top-6 right-6 text-neutral-700 w-8 h-8 group-hover:text-[#ff4d4d]/50 transition-colors" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<div className="flex gap-1 text-[#ff4d4d] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-8 font-medium">"I was skeptical about 'done-for-you' until I met this team. They actually get it. No hand-holding required."</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">DF</div>
<div>
<div className="text-sm font-semibold text-white">Daniel Fazio</div>
<div className="text-[10px] text-neutral-500">CMO @ Client Ascension</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050202] border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2">Common <span className="font-serif-italic text-[#ff4d4d] font-normal">Questions</span></h2>
</div>
<div className="space-y-4">
<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ff4d4d]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white group-hover:text-[#ff4d4d] transition-colors">How much time do I need to invest?</span>
<iconify-icon className="faq-icon text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                            Less than 1 hour per month. We just need a monthly sync to align on strategy. We handle ideation, creation, editing, and publishing.
                        </div>
</div>
</div>
<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ff4d4d]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white group-hover:text-[#ff4d4d] transition-colors">Do you work with B2B or B2C?</span>
<iconify-icon className="faq-icon text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                            We specialize in founders and brands where personal authority drives revenue. This works exceptionally well for both high-ticket B2B and consumer brands led by strong personalities.
                        </div>
</div>
</div>
<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ff4d4d]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white group-hover:text-[#ff4d4d] transition-colors">What platforms do you cover?</span>
<iconify-icon className="faq-icon text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                            X (Twitter), LinkedIn, Instagram, and TikTok/Reels. We repurpose core ideas across formats to maximize reach.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex flex-col items-center text-center border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-[#7f1d1d]/20 to-transparent opacity-40 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#991b1b] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl px-6">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-tight">Ready to scale?</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Stop worrying about the algorithm. Let us build your machine.
            </p>
<button className="group relative bg-[#ff4d4d] hover:bg-[#ef4444] hover:text-white text-black text-xl font-bold px-10 py-5 rounded-full shadow-[0_0_40px_rgba(255,77,77,0.3)] hover:shadow-[0_0_60px_rgba(255,77,77,0.5)] transition-all flex items-center gap-3 justify-center mx-auto" onclick="toggleModal(true)">
<span>Book Your Strategy Call</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-[#050202] border-t border-white/5 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#7f1d1d] rounded-md flex items-center justify-center text-white text-[10px] font-bold">A</div>
<span className="font-semibold text-white">Agency Inc.</span>
</div>
<div className="text-sm text-neutral-500">© 2024 Agency Inc. All rights reserved.</div>
<div className="flex gap-6 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal(false)"></div>
<div className="relative bg-neutral-900 rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl h-[600px] overflow-hidden flex flex-col md:flex-row">
<button className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-neutral-800 p-1 rounded-full text-neutral-400 transition-colors" onclick="toggleModal(false)">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="md:w-1/3 bg-[#1a0505] p-8 border-r border-white/5 flex flex-col">
<div className="w-12 h-12 rounded-full bg-neutral-800 mb-4 overflow-hidden border border-white/10">
<div className="w-full h-full bg-[#7f1d1d] flex items-center justify-center text-white font-bold">JD</div>
</div>
<h3 className="text-neutral-500 font-medium text-xs uppercase tracking-wide mb-1">Founder</h3>
<h2 className="text-xl font-bold text-white mb-6">Growth Strategy Call</h2>
<div className="space-y-4 text-neutral-400 text-sm">
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-600" icon="solar:clock-circle-linear" width="20"></iconify-icon> <span>30 min</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-neutral-600" icon="solar:videocamera-linear" width="20"></iconify-icon> <span>Google Meet</span></div>
<p className="text-neutral-500 leading-relaxed mt-4 text-xs">Let's audit your current social presence and identify the lowest hanging fruit for rapid growth.</p>
</div>
</div>
<div className="md:w-2/3 p-8 bg-neutral-900 overflow-y-auto relative">
<div className="absolute inset-0 bg-neutral-900 z-20 flex flex-col items-center justify-center text-center p-8 hidden" id="booking-success">
<div className="w-16 h-16 bg-[#ff4d4d]/10 rounded-full flex items-center justify-center mb-6"><iconify-icon className="text-[#ff4d4d]" icon="solar:check-circle-bold" width="32"></iconify-icon></div>
<h3 className="text-2xl font-bold text-white mb-2">You're Booked!</h3>
<p className="text-neutral-400 mb-8 max-w-xs">Check your email for the calendar invite.</p>
<button className="bg-[#7f1d1d] hover:bg-[#991b1b] text-white px-6 py-2 rounded-lg transition-colors" onclick="toggleModal(false)">Close</button>
</div>
<div id="booking-form">
<h3 className="font-semibold text-lg mb-6 text-white">Select a Date &amp; Time</h3>
<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<span className="font-medium text-white">October 2024</span>
<div className="flex gap-2">
<button className="p-1 hover:bg-white/5 rounded text-neutral-400"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-1 hover:bg-white/5 rounded text-neutral-400"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-sm">
<div className="text-neutral-600 text-xs py-2">M</div>
<div className="text-neutral-600 text-xs py-2">T</div>
<div className="text-neutral-600 text-xs py-2">W</div>
<div className="text-neutral-600 text-xs py-2">T</div>
<div className="text-neutral-600 text-xs py-2">F</div>
<div className="text-neutral-600 text-xs py-2">S</div>
<div className="text-neutral-600 text-xs py-2">S</div>
<span className="p-2 text-neutral-700">29</span>
<span className="p-2 text-neutral-700">30</span>
<button className="p-2 text-neutral-300 hover:bg-[#ff4d4d]/10 hover:text-[#ff4d4d] rounded-full transition-colors">1</button>
<button className="p-2 text-neutral-300 hover:bg-[#ff4d4d]/10 hover:text-[#ff4d4d] rounded-full transition-colors">2</button>
<button className="p-2 text-neutral-300 hover:bg-[#ff4d4d]/10 hover:text-[#ff4d4d] rounded-full transition-colors">3</button>
<span className="p-2 text-neutral-700">4</span>
<span className="p-2 text-neutral-700">5</span>
<button className="p-2 text-neutral-300 hover:bg-[#ff4d4d]/10 hover:text-[#ff4d4d] rounded-full transition-colors">6</button>
<button className="p-2 bg-[#7f1d1d] text-white rounded-full font-semibold shadow-md">7</button>
<button className="p-2 text-neutral-300 hover:bg-[#ff4d4d]/10 hover:text-[#ff4d4d] rounded-full transition-colors">8</button>
<button className="p-2 text-neutral-300 hover:bg-[#ff4d4d]/10 hover:text-[#ff4d4d] rounded-full transition-colors">9</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="border border-[#ff4d4d] text-[#ff4d4d] py-2 rounded hover:bg-[#ff4d4d]/10 font-medium transition-colors text-xs" onclick="confirmBooking()">9:00am</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#ff4d4d] hover:text-[#ff4d4d] transition-colors text-xs" onclick="confirmBooking()">10:00am</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#ff4d4d] hover:text-[#ff4d4d] transition-colors text-xs" onclick="confirmBooking()">1:30pm</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
