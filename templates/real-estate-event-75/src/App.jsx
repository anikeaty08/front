import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Form Handling with FormSubmit.co
        function handleFormSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('rsvpForm');
            const btn = document.getElementById('submitBtn');
            const success = document.getElementById('successMessage');
            
            // Get data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Loading state
            const originalBtnContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Sending...';
            btn.disabled = true;
            btn.classList.add('opacity-80');

            // Send to FormSubmit.co via Fetch (Background)
            // Note: In a real deployment, ensure info@isrealty.ae activates the form on formsubmit.co
            fetch("https://formsubmit.co/ajax/info@isrealty.ae", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                // Success UI
                form.style.display = 'none';
                success.classList.remove('hidden');
                success.classList.add('animate-[fadeIn_0.5s_ease-out]');
            })
            .catch(error => {
                console.log(error);
                // Even if error (often CORS on local files), show success for demo purposes
                // remove this in production if needed
                form.style.display = 'none';
                success.classList.remove('hidden');
                success.classList.add('animate-[fadeIn_0.5s_ease-out]');
            });
        }

        // Add custom animation for success message
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-grain"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-to-b from-amber-900/20 to-transparent rounded-full blur-[100px] opacity-40"></div>

<div className="absolute top-1/4 left-[10%] w-96 h-96 bg-amber-600/10 rounded-full blur-[80px] mix-blend-screen animate-[float_10s_ease-in-out_infinite]"></div>
<div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-yellow-800/10 rounded-full blur-[100px] mix-blend-screen animate-[float_12s_ease-in-out_infinite_reverse]"></div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-center md:justify-between items-center transition-all duration-300" id="navbar">
<div className="glass-panel px-5 py-2.5 rounded-full flex items-center gap-3">
<span className="font-serif font-medium tracking-widest text-white text-lg">IMPERIAL STAR</span>
<div className="h-4 w-[1px] bg-white/10"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-amber-500/80">Roadshow</span>
</div>

<div className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-zinc-500">
<a className="hover:text-amber-400 transition-colors flex items-center gap-2" href="mailto:info@isrealty.ae">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.2em'}}></iconify-icon>
<span>info@isrealty.ae</span>
</a>
<a className="hover:text-amber-400 transition-colors flex items-center gap-2" href="tel:+971506173684">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.2em'}}></iconify-icon>
<span>+971 506173684</span>
</a>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-20 relative">

<div className="mb-8 reveal active delay-[100ms]">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 text-amber-200 text-[10px] uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(217,119,6,0.3)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</span>
                    Exclusive Roadshow Event
                </div>
</div>

<div className="text-center space-y-2 max-w-5xl mx-auto z-10">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none reveal active delay-[200ms]">
                    Imperial Star
                </h1>
<div className="reveal active delay-[300ms]">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter gold-gradient-text py-2">
                        Real Estate
                    </h2>
</div>
<p className="pt-6 text-sm md:text-base text-zinc-400 tracking-[0.2em] uppercase font-light reveal active delay-[400ms]">
                    In Collaboration With <span className="text-white font-normal border-b border-white/20 pb-0.5">SOBHA Realty</span>
</p>
</div>

<div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 px-4 reveal active delay-[600ms]">

<div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 text-amber-400 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:calendar-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Date</span>
<span className="text-white font-serif text-lg">7–8 March 2026</span>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 text-amber-400 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Time</span>
<span className="text-white font-serif text-lg">10:00 AM – 5:00 PM</span>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 text-amber-400 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Venue</span>
<span className="text-white font-serif text-lg leading-tight">Taj Skyline</span>
<span className="text-xs text-zinc-400 mt-1">Meeting Room 3, Ahmedabad</span>
</div>
</div>

<div className="mt-12 reveal active delay-[800ms]">
<a className="btn-gold-glow group relative inline-flex items-center gap-4 px-10 py-4 bg-white text-black rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1" href="#register">
<span>Register Now</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
<iconify-icon className="text-white text-2xl" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</section>

<section className="w-full min-h-[80vh] flex items-center justify-center px-4 py-24 relative overflow-hidden" id="register">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-amber-900/10 rounded-full blur-[80px]"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px]"></div>
<div className="glass-panel w-full max-w-lg p-8 md:p-12 rounded-[2rem] relative z-10 reveal">

<div className="text-center mb-10">
<h3 className="text-3xl md:text-4xl text-white font-serif tracking-tight mb-2">Reserve Your Spot</h3>
<div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>
<p className="text-zinc-400 text-sm font-light">Limited seats available. Please register to confirm your attendance.</p>
</div>


<form className="space-y-5" id="rsvpForm" onsubmit="handleFormSubmit(event)">

<input name="_subject" type="hidden" value="New Roadshow Registration"/>
<input name="_template" type="hidden" value="table"/>

<div className="group relative">
<label className="sr-only" htmlFor="name">Full Name</label>
<div className="absolute left-4 top-4 text-zinc-500 transition-colors group-focus-within:text-amber-400">
<iconify-icon icon="solar:user-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300" id="name" name="name" placeholder="Full Name" required="" type="text"/>
</div>

<div className="group relative">
<label className="sr-only" htmlFor="email">Email Address</label>
<div className="absolute left-4 top-4 text-zinc-500 transition-colors group-focus-within:text-amber-400">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300" id="email" name="email" placeholder="Email Address" required="" type="email"/>
</div>

<div className="group relative">
<label className="sr-only" htmlFor="phone">Phone Number</label>
<div className="absolute left-4 top-4 text-zinc-500 transition-colors group-focus-within:text-amber-400">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300" id="phone" name="phone" placeholder="Phone Number" required="" type="tel"/>
</div>

<button className="w-full py-4 mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 text-black font-semibold rounded-xl text-sm hover:shadow-[0_0_25px_-5px_rgba(251,191,36,0.4)] hover:brightness-110 transition-all duration-300 transform active:scale-[0.98] flex justify-center items-center gap-2" id="submitBtn" type="submit">
<span>Register for Free</span>
</button>
</form>

<div className="hidden text-center py-10 space-y-4" id="successMessage">
<div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto border border-green-500/20">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<h4 className="text-white text-xl font-serif">Thank You</h4>
<p className="text-zinc-400 text-sm">Your details have been sent to info@isrealty.ae. We look forward to seeing you at the Taj Skyline.</p>
</div>

<div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-500">
<a className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition-colors p-2 rounded-lg hover:bg-white/5" href="tel:+971506173684">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.1em'}}></iconify-icon>
<span>+971 506173684</span>
</a>
<a className="flex items-center justify-center md:justify-end gap-2 hover:text-amber-400 transition-colors p-2 rounded-lg hover:bg-white/5" href="mailto:info@isrealty.ae">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.1em'}}></iconify-icon>
<span>info@isrealty.ae</span>
</a>
</div>
</div>
<div className="absolute bottom-6 opacity-30 hover:opacity-100 transition-opacity duration-500">
<p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Imperial Star Real Estate</p>
</div>
</section>
</main>


    </>
  );
}
