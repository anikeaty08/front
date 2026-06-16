import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('accessForm');
            const page1 = document.getElementById('page1');
            const page2 = document.getElementById('page2');
            const btn = document.getElementById('generateBtn');

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Simple validation check (visual only)
                const inputs = form.querySelectorAll('input');
                let valid = true;
                inputs.forEach(input => {
                    if(!input.value) {
                        input.style.borderColor = '#991b1b'; // dark red for error
                        valid = false;
                    } else {
                        input.style.borderColor = '#333';
                    }
                });

                if(valid) {
                    // Transition Logic
                    page1.style.opacity = '0';
                    page1.style.transform = 'translateY(-20px)'; // slight lift on exit
                    
                    setTimeout(() => {
                        page1.classList.remove('page-visible');
                        page1.style.display = 'none';
                        
                        page2.classList.remove('page-hidden');
                        page2.classList.add('page-visible');
                        
                        // Scroll to top
                        window.scrollTo(0, 0);
                    }, 700); // Matches transition duration
                }
            });

            // Restore input border on focus
            const inputs = form.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.borderColor = '#D4AF37';
                });
                input.addEventListener('blur', () => {
                    if(!input.value) input.style.borderColor = '#333';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<main className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-screen relative page-visible transition-opacity duration-700" id="page1">

<div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[80vh] z-20">

<div className="mb-16">
<h5 className="text-[#D4AF37] tracking-[0.2em] text-xs font-semibold uppercase mb-4 animate-fade-in">Private Access</h5>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif-display tracking-tight leading-[1.1] mb-6 animate-fade-in delay-100">
                    NSB <span className="text-gold-gradient">Confidential</span>
</h1>
<div className="space-y-2 text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
<p className="animate-fade-in delay-200">An exclusive music membership for dedicated supporters of Northsidebaby.</p>
<p className="animate-fade-in delay-300">Access strictly curated experiences, unreleased content, and private opportunities.</p>
</div>
</div>

<div className="mb-16">
<h2 className="text-lg text-white font-medium mb-6 underline-anim animate-fade-in delay-500">What NSB Confidential Includes</h2>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-start gap-3 animate-fade-in delay-500">
<iconify-icon className="text-[#D4AF37] text-lg mt-0.5" icon="solar:star-linear"></iconify-icon>
<span>Eligibility for meet &amp; greet opportunities</span>
</li>
<li className="flex items-start gap-3 animate-fade-in delay-700">
<iconify-icon className="text-[#D4AF37] text-lg mt-0.5" icon="solar:videocamera-linear"></iconify-icon>
<span>Access to virtual calls and video calls when available</span>
</li>
<li className="flex items-start gap-3 animate-fade-in delay-700">
<iconify-icon className="text-[#D4AF37] text-lg mt-0.5" icon="solar:music-note-linear"></iconify-icon>
<span>Early or confidential music updates</span>
</li>
<li className="flex items-start gap-3 animate-fade-in delay-1000">
<iconify-icon className="text-[#D4AF37] text-lg mt-0.5" icon="solar:bell-linear"></iconify-icon>
<span>Priority notifications for releases</span>
</li>
<li className="flex items-start gap-3 animate-fade-in delay-1000">
<iconify-icon className="text-[#D4AF37] text-lg mt-0.5" icon="solar:shield-keyhole-linear"></iconify-icon>
<span>Exclusive fan-only access not available to the public</span>
</li>
</ul>
<p className="text-xs text-neutral-600 mt-6 animate-fade-in delay-1000">Access is limited and issued individually through the NSB Confidential system.</p>
</div>

<div className="w-full max-w-sm animate-fade-in delay-1000">
<form className="space-y-8" id="accessForm">
<div className="relative">
<input className="input-premium w-full py-2 text-white text-sm focus:border-[#D4AF37]" id="fullname" placeholder=" " required="" type="text"/>
<label className="input-label absolute left-0 top-2 text-neutral-500 text-sm pointer-events-none" htmlFor="fullname">Full Name</label>
</div>
<div className="relative">
<input className="input-premium w-full py-2 text-white text-sm focus:border-[#D4AF37]" id="location" placeholder=" " required="" type="text"/>
<label className="input-label absolute left-0 top-2 text-neutral-500 text-sm pointer-events-none" htmlFor="location">Location</label>
</div>
<div className="relative">
<input className="input-premium w-full py-2 text-white text-sm focus:border-[#D4AF37]" id="refid" placeholder=" " type="text"/>
<label className="input-label absolute left-0 top-2 text-neutral-500 text-sm pointer-events-none" htmlFor="refid">Reference ID (Optional)</label>
</div>
<button className="group relative w-full mt-8 bg-neutral-900 border border-neutral-800 text-neutral-300 py-4 text-sm tracking-widest uppercase hover:text-white hover:border-[#D4AF37] transition-all duration-500" id="generateBtn" type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
                            Generate NSB Code
                            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
</form>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col items-center justify-center min-h-[600px] relative lg:fixed lg:right-0 lg:top-0 lg:h-screen lg:w-1/2 z-10 pointer-events-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="scene">
<div className="card-object" id="cardObject1">

<div className="card-face flex flex-col items-center justify-between py-10 px-6 border border-neutral-800">

<div className="ornamental-border"></div>
<div className="ornamental-inner"></div>

<div className="text-center z-10 mt-4">
<div className="flex items-center justify-center gap-2 mb-1">
<iconify-icon className="text-[#D4AF37] text-xs" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-semibold">VIP Access</h3>
</div>

<div className="text-center z-10 relative">
<h1 className="font-serif-display text-8xl text-gold-gradient tracking-tighter opacity-90 scale-y-90">NSB</h1>
<div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4 opacity-50"></div>
</div>

<div className="text-center z-10 mb-2 space-y-1">
<h2 className="text-white/90 text-sm tracking-[0.25em] uppercase font-medium">Backstage Pass</h2>
<p className="text-[#D4AF37]/70 text-[9px] tracking-[0.2em] uppercase">Backstage Crew</p>
<div className="pt-4 flex justify-center gap-3 opacity-40">
<iconify-icon className="text-white text-xs" icon="solar:soundwave-linear"></iconify-icon>
<iconify-icon className="text-white text-xs" icon="solar:vinyl-record-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
</div>

<div className="card-face card-back flex flex-col p-6 border border-neutral-800">

<div className="ornamental-border"></div>
<div className="flex flex-col h-full z-10 pt-4">

<div className="w-24 h-24 bg-neutral-900 border border-neutral-800 mx-auto flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-700 text-4xl" icon="solar:user-linear"></iconify-icon>
</div>

<div className="space-y-5 px-4 mt-2">
<div>
<span className="text-[9px] text-neutral-600 uppercase tracking-widest block mb-1">Name</span>
<div className="h-[1px] w-full bg-neutral-800"></div>
</div>
<div>
<span className="text-[9px] text-neutral-600 uppercase tracking-widest block mb-1">Location</span>
<div className="h-[1px] w-full bg-neutral-800"></div>
</div>
<div>
<span className="text-[9px] text-neutral-600 uppercase tracking-widest block mb-1">Date Issued</span>
<div className="h-[1px] w-full bg-neutral-800"></div>
</div>
</div>
<div className="mt-auto text-center pb-4">
<p className="text-[8px] text-neutral-700 tracking-wider uppercase">NSB Confidential Membership</p>
<p className="text-[8px] text-neutral-800 mt-1">Non-Transferable</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 relative flex justify-center items-center">

<div className="absolute bottom-6 w-32 h-64 bg-gradient-to-t from-neutral-200/10 via-neutral-200/5 to-transparent blur-xl transform origin-bottom"></div>

<div className="w-48 h-12 bg-gradient-to-b from-neutral-800 to-[#020202] rounded-[100%] shadow-2xl shadow-black relative z-0 border-t border-white/5"></div>

<div className="absolute bottom-[50px] w-32 h-4 bg-black/80 blur-lg rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
</div>
</div>
</main>



<section className="page-hidden w-full min-h-screen flex-col items-center justify-center py-12 px-6 relative" id="page2">
<div className="max-w-xl w-full flex flex-col items-center text-center z-20">

<div className="mb-10">
<iconify-icon className="text-[#D4AF37] text-3xl mb-4 animate-fade-in" icon="solar:check-circle-linear"></iconify-icon>
<h1 className="text-2xl text-white font-serif-display tracking-tight mb-2 animate-fade-in delay-100">Code Successfully Generated</h1>
<p className="text-neutral-500 text-sm animate-fade-in delay-200">Your unique NSB Confidential access identifier is ready.</p>
</div>

<div className="mb-10 animate-fade-in delay-300 static-card">
<div className="scene" style={{width: '240px', height: '375px'}}> 
<div className="card-object">
<div className="card-face flex flex-col items-center justify-between py-8 px-4 border border-neutral-800 shadow-2xl">
<div className="ornamental-border"></div>
<div className="ornamental-inner"></div>
<div className="text-center z-10 mt-3">
<iconify-icon className="text-[#D4AF37] text-[10px] mb-1" icon="solar:crown-star-linear"></iconify-icon>
<h3 className="text-[#D4AF37] text-[8px] tracking-[0.3em] uppercase font-semibold">VIP Access</h3>
</div>
<div className="text-center z-10">
<h1 className="font-serif-display text-6xl text-gold-gradient tracking-tighter opacity-90 scale-y-90">NSB</h1>
<div className="w-8 h-[1px] bg-[#D4AF37] mx-auto mt-2 opacity-50"></div>
</div>
<div className="text-center z-10 mb-2 space-y-1">
<h2 className="text-white/90 text-xs tracking-[0.25em] uppercase font-medium">Backstage Pass</h2>
<p className="text-[#D4AF37]/70 text-[8px] tracking-[0.2em] uppercase">Backstage Crew</p>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>

<div className="mb-6 animate-fade-in delay-500">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">NSB Confidential Card Fee</p>
<p className="text-xl text-white font-light">$300.00</p>
</div>

<div className="w-full bg-neutral-900/50 border border-dashed border-neutral-800 p-8 mb-8 animate-fade-in delay-700">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Your Access Code</p>
<p className="text-4xl text-[#D4AF37] font-mono tracking-widest select-all">NSB-4729</p>
</div>

<div className="space-y-4 max-w-sm mx-auto animate-fade-in delay-1000">
<div className="p-4 border border-neutral-800 bg-neutral-900/30">
<p className="text-sm text-neutral-400 leading-relaxed">
<strong className="text-white font-medium block mb-2">Instructions</strong>
                        Please screenshot or copy the code above and send it directly to <span className="text-white">NSB Management</span> to complete registration and activate your physical card.
                    </p>
</div>
</div>
</div>
</section>


    </>
  );
}
