import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316', // Orange accent
600: '#ea580c',
700: '#c2410c',
800: '#9a3412',
900: '#7c2d12',
950: '#431407',
},
dark: {
900: '#09090b', // Zinc 950
800: '#18181b', // Zinc 900
700: '#27272a', // Zinc 800
600: '#3f3f46',
}
}
}
}
}



        function handleFormSubmit(e) {
            e.preventDefault();
            const formContainer = document.getElementById('bookingForm');
            const successContainer = document.getElementById('successMessage');
            
            // Simulate API call / transition
            const btn = formContainer.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin" width="18"></iconify-icon> Processing...`;
            btn.disabled = true;

            setTimeout(() => {
                formContainer.style.opacity = '0';
                setTimeout(() => {
                    formContainer.classList.add('hidden');
                    successContainer.classList.remove('hidden');
                    // Simple animation for entry
                    successContainer.animate([
                        { opacity: 0, transform: 'translateY(10px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], {
                        duration: 400,
                        easing: 'ease-out',
                        fill: 'forwards'
                    });
                }, 300);
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-900/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tight text-lg">APEX<span className="text-brand-500">PERFORMANCE</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all" href="#book">
                Member Login
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/30 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Only 5 Consultation Spots This Week
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                        Transform Your Body in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">90 Days</span>. Guaranteed.
                    </h1>
<p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                        Stop guessing with cookie-cutter plans. We build a data-driven roadmap tailored to your biology, lifestyle, and goals.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-1 text-brand-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-zinc-300">Customized nutrition &amp; training protocols</span>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-1 text-brand-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-zinc-300">Daily accountability &amp; 24/7 coach access</span>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 mt-1 text-brand-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-zinc-300">Sustainable results without giving up your life</span>
</div>
</div>
<div className="pt-4 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-dark-900 grayscale opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-dark-900 grayscale opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-dark-900 grayscale opacity-70" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<p>Trusted by 500+ professionals</p>
</div>
</div>

<div className="relative" id="book">
<div className="absolute -inset-1 bg-gradient-to-b from-brand-500/20 to-transparent rounded-2xl blur-lg opacity-50"></div>
<div className="relative bg-dark-800 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl">

<div id="bookingForm">
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Claim Your Free Strategy Session</h3>
<p className="text-sm text-zinc-400 mb-6">Analyze your goals and get a clear plan. No obligation.</p>
<form className="space-y-4" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Full Name</label>
<input className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Email Address</label>
<input className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Phone</label>
<input className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Primary Goal</label>
<div className="relative">
<select className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all appearance-none cursor-pointer">
<option>Fat Loss</option>
<option>Muscle Gain</option>
<option>Performance</option>
<option>General Health</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-lg mt-2 transition-all shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] hover:shadow-[0_0_25px_-5px_rgba(234,88,12,0.6)] flex items-center justify-center gap-2 group" type="submit">
                                    Book Free Consultation
                                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<p className="text-center text-[10px] text-zinc-500 mt-4">
                                    By booking, you agree to receive SMS &amp; email updates.
                                </p>
</form>
</div>

<div className="hidden text-center py-8" id="successMessage">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
<iconify-icon className="text-green-500" icon="lucide:check" strokeWidth="2" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">You're Booked!</h3>
<p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                We've sent a confirmation email with your next steps. Our team will reach out within 24 hours to finalize your time.
                            </p>
<div className="bg-dark-900 border border-white/5 rounded-lg p-4 mb-6 text-left">
<p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-2">While you wait:</p>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="lucide:file-text"></iconify-icon>
<span className="text-sm text-zinc-200">Download 5-Day Starter Guide</span>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="lucide:download"></iconify-icon>
</div>
</div>
<button className="text-xs text-zinc-500 hover:text-white transition-colors" onclick="window.location.reload()">Book another session</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-dark-800 border-y border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Why Most Fitness Plans Fail</h2>
<p className="text-zinc-400">You’ve tried the apps, the diets, and the influencers’ PDFs. Here is why you’re still stuck.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 border border-red-500/20">
<iconify-icon icon="lucide:x-circle" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Generic Programming</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Cookie-cutter plans ignore your unique physiology and lifestyle constraints, leading to burnout.</p>
</div>

<div className="p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 border border-red-500/20">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Unsustainable Time Demands</h3>
<p className="text-sm text-zinc-400 leading-relaxed">2-hour workouts aren't realistic for busy professionals. Consistency beats intensity every time.</p>
</div>

<div className="p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-500 border border-red-500/20">
<iconify-icon icon="lucide:trending-down" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Zero Accountability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Without someone to check your form and progress, motivation fades after the first two weeks.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="results">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Real People. Real Results.</h2>
<p className="text-zinc-400">Join 500+ clients who have transformed their lives.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/5 transition-colors">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-2xl"></div>
<img alt="Client Result" className="w-full h-[400px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Lost 25lbs</span>
</div>
<p className="text-white font-medium text-lg leading-snug mb-2">"I never thought I could get in this shape while running my startup. The 30-min protocol was a game changer."</p>
<p className="text-zinc-400 text-xs">Michael R. — CEO</p>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-2xl"></div>
<img alt="Client Result" className="w-full h-[400px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Gained 15lbs Muscle</span>
</div>
<p className="text-white font-medium text-lg leading-snug mb-2">"Finally a program that explains the 'why'. The nutrition guide made eating healthy effortless."</p>
<p className="text-zinc-400 text-xs">Sarah K. — Designer</p>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-2xl"></div>
<img alt="Client Result" className="w-full h-[400px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Rehab &amp; Strength</span>
</div>
<p className="text-white font-medium text-lg leading-snug mb-2">"After my injury, I was scared to lift. The coaching team guided me back to my strongest self."</p>
<p className="text-zinc-400 text-xs">David L. — Architect</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-gradient-to-b from-dark-900 to-black">
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Ready to build the best version of yourself?</h2>
<p className="text-zinc-400 mb-10 text-lg">No more excuses. No more waiting. The only thing standing between you and your goals is action.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#book">
                    Book Free Strategy Session
                    <iconify-icon icon="lucide:arrow-up-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center" href="#">
                    View Pricing
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-zinc-500 text-sm font-medium tracking-tight">APEX<span className="text-zinc-600">PERFORMANCE</span></span>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Instagram</a>
</div>
<span className="text-zinc-700 text-xs">© 2024 Apex Performance. All rights reserved.</span>
</div>
</footer>



    </>
  );
}
