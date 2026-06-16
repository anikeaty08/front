import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set date to March 8, 2026 10:30 AM
        const countDownDate = new Date("March 8, 2026 10:30:00").getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("mins").innerText = "00";
                document.getElementById("secs").innerText = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[32rem] bg-indigo-600/10 blur-[8rem] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[32rem] h-[32rem] bg-amber-500/5 blur-[8rem] rounded-full pointer-events-none -z-10"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="tracking-tighter font-semibold text-lg">ORCT</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#about">Event Details</a>
<a className="hover:text-white transition-colors" href="#prizes">Prize Pool</a>
<a className="hover:text-white transition-colors" href="#rules">Format</a>
</nav>
<a className="text-xs font-medium bg-amber-400/10 text-amber-400 border border-amber-400/20 px-4 py-2 rounded-full hover:bg-amber-400 hover:text-slate-950 transition-all" href="#register">
                Register Now
            </a>
</div>
</header>

<section className="relative pt-40 pb-24 px-6 z-10">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amber-400 mb-8">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
<span>Registration closes March 5th, 2026</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 leading-tight">
                Open Rapid <br className="hidden md:block"/> Chess Tournament
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                A premier chess event organized by Gayeshpur &amp; Kalyani Chess Lovers in association with Nadia District Chess Association.
            </p>

<div className="flex justify-center gap-4 md:gap-6 mb-12">
<div className="flex flex-col items-center">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-white bg-white/5 border border-white/10 rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-inner" id="days">00</div>
<span className="text-xs text-slate-500 mt-2 font-medium tracking-wide uppercase">Days</span>
</div>
<div className="text-3xl md:text-5xl font-light text-slate-600 self-start mt-2 md:mt-4">:</div>
<div className="flex flex-col items-center">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-white bg-white/5 border border-white/10 rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-inner" id="hours">00</div>
<span className="text-xs text-slate-500 mt-2 font-medium tracking-wide uppercase">Hours</span>
</div>
<div className="text-3xl md:text-5xl font-light text-slate-600 self-start mt-2 md:mt-4">:</div>
<div className="flex flex-col items-center">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-white bg-white/5 border border-white/10 rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-inner" id="mins">00</div>
<span className="text-xs text-slate-500 mt-2 font-medium tracking-wide uppercase">Mins</span>
</div>
<div className="text-3xl md:text-5xl font-light text-slate-600 self-start mt-2 md:mt-4">:</div>
<div className="flex flex-col items-center">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-white bg-white/5 border border-white/10 rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-inner" id="secs">00</div>
<span className="text-xs text-slate-500 mt-2 font-medium tracking-wide uppercase">Secs</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#register">
                    Register Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors" href="#prizes">
                    View Prize Pool
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative z-10 bg-slate-900/50" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Date &amp; Time</h3>
<p className="text-slate-400 text-sm mb-1">Sunday, 8th March, 2026</p>
<p className="text-slate-400 text-sm">Round 1 starts at 10:30 AM sharp</p>
</div>

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Venue</h3>
<p className="text-slate-400 text-sm mb-1">Gayeshpur Pragati Sangha</p>
<p className="text-slate-400 text-sm">Gayeshpur</p>
</div>

<div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Entry Fee</h3>
<p className="text-slate-400 text-sm mb-1">₹500 per participant</p>
<p className="text-slate-500 text-xs italic">(Non-refundable)</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="prizes">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Prize Structure</h2>
<p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">Compete for cash prizes and trophies across multiple categories.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<h3 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="solar:star-fall-linear"></iconify-icon> Main Prizes
                    </h3>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl bg-amber-400/5 border border-amber-400/20 text-center relative overflow-hidden">
<div className="absolute -top-4 -right-4 text-amber-400/10"><iconify-icon icon="solar:cup-first-bold" width="80"></iconify-icon></div>
<p className="text-xs text-amber-400/80 font-medium uppercase tracking-widest mb-1">1st Prize</p>
<p className="text-3xl font-semibold text-amber-400 tracking-tighter">₹5,000</p>
</div>
<div className="p-6 rounded-2xl bg-slate-300/5 border border-slate-300/20 text-center relative overflow-hidden">
<div className="absolute -top-4 -right-4 text-slate-300/10"><iconify-icon icon="solar:cup-first-bold" width="80"></iconify-icon></div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-1">2nd Prize</p>
<p className="text-3xl font-semibold text-slate-200 tracking-tighter">₹3,000</p>
</div>
<div className="p-6 rounded-2xl bg-orange-400/5 border border-orange-400/20 text-center relative overflow-hidden">
<div className="absolute -top-4 -right-4 text-orange-400/10"><iconify-icon icon="solar:cup-first-bold" width="80"></iconify-icon></div>
<p className="text-xs text-orange-400/80 font-medium uppercase tracking-widest mb-1">3rd Prize</p>
<p className="text-3xl font-semibold text-orange-400 tracking-tighter">₹2,000</p>
</div>
</div>

<div className="bg-slate-900/50 rounded-2xl border border-white/5 p-6 md:p-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-slate-400">4th Position</span><span className="font-medium text-white">₹1,500</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-slate-400">5th Position</span><span className="font-medium text-white">₹1,200</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-slate-400">6th Position</span><span className="font-medium text-white">₹1,000</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-slate-400">7th - 8th (each)</span><span className="font-medium text-white">₹900</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-slate-400">9th - 10th (each)</span><span className="font-medium text-white">₹800</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-slate-400">11th - 15th (each)</span><span className="font-medium text-white">₹700</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5 sm:border-transparent">
<span className="text-slate-400">16th - 20th (each)</span><span className="font-medium text-white">₹600</span>
</div>
<div className="flex justify-between py-2">
<span className="text-slate-400">21st - 30th (each)</span><span className="font-medium text-white">₹500</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div>
<h3 className="text-xl font-medium text-white tracking-tight flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:users-group-rounded-linear"></iconify-icon> Age Categories
                        </h3>
<div className="bg-indigo-950/20 rounded-2xl border border-indigo-500/20 p-6">
<p className="text-sm text-indigo-200/70 mb-4">Trophies awarded to top 8 players in each category.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-sm text-indigo-300 font-medium">U-11</span>
<span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-sm text-indigo-300 font-medium">U-13</span>
<span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-sm text-indigo-300 font-medium">U-15</span>
<span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-sm text-indigo-300 font-medium">U-17</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-white tracking-tight flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-400" icon="solar:medal-ribbon-star-linear"></iconify-icon> Senior 60+
                        </h3>
<div className="bg-emerald-950/20 rounded-2xl border border-emerald-500/20 p-6">
<div className="space-y-3 text-sm">
<div className="flex justify-between">
<span className="text-emerald-200/70">1st Prize</span><span className="font-medium text-emerald-300">₹1,000</span>
</div>
<div className="flex justify-between">
<span className="text-emerald-200/70">2nd Prize</span><span className="font-medium text-emerald-300">₹800</span>
</div>
<div className="flex justify-between">
<span className="text-emerald-200/70">3rd Prize</span><span className="font-medium text-emerald-300">₹600</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-slate-900/30 relative z-10" id="rules">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white mb-10 text-center">Tournament Format</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:widget-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">FIDE Swiss Rules</h4>
<p className="text-sm text-slate-400">The tournament will be played in 6 to 7 rounds following standard FIDE Swiss Rapid rules.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Time Control</h4>
<p className="text-sm text-slate-400">20 minutes per player for the entire game. Fast-paced and decisive.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:plate-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Complimentary Lunch</h4>
<p className="text-sm text-slate-400">Lunch will be provided to all registered participants at the venue.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Registration</h4>
<p className="text-sm text-slate-400">Entry fee is strictly non-refundable. Ensure timely registration before March 5th.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 overflow-hidden" id="register">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/30 -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Secure Your Seat on the Board</h2>
<p className="text-slate-400 text-base mb-10">Complete the Google Form and pay the ₹500 entry fee to confirm your participation. Limited seats available.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-slate-950 rounded-full font-semibold text-base hover:bg-amber-300 transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]" href="https://forms.gle/pRnBrPXRn9Pp2oNg7" rel="noopener noreferrer" target="_blank">
                Complete Registration Form <iconify-icon icon="solar:document-text-linear"></iconify-icon>
</a>
<div className="mt-16 pt-12 border-t border-white/10">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Need Assistance?</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
<div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-sm">+91 78901 78214</span>
</div>
<div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-sm">+91 94336 33266</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 bg-slate-950 text-center relative z-10">
<div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
<div className="flex items-center gap-2 text-white/50 mb-4">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="tracking-tighter font-medium text-sm">ORCT 2026</span>
</div>
<p className="text-xs text-slate-500 max-w-md">
                Organized by Gayeshpur &amp; Kalyani Chess Lovers. <br/>
                Associated with Nadia District Chess Association.
            </p>
<p className="text-xs text-slate-600 mt-4">
                © 2026 Open Rapid Chess Tournament. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
