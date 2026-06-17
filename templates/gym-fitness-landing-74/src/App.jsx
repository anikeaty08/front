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
400: '#a3e635', // Lime-400
500: '#84cc16', // Lime-500
},
dark: {
900: '#09090b', // Zinc-950
800: '#18181b', // Zinc-900
700: '#27272a', // Zinc-800
}
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}



        // --- State & CMS Logic ---
        const defaultContent = {
            heroTitle: 'SCULPT <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">YOUR</span> <br><span class="text-brand-400">LEGACY.</span>',
            heroSub: 'The premier fitness destination in region 18. Advanced equipment, expert coaching, and a community driven by results.',
            announce: 'New Cross-Training Zone Open'
        };

        // Load CMS content
        function loadContent() {
            const saved = localStorage.getItem('bac18_content');
            const data = saved ? JSON.parse(saved) : defaultContent;

            // Update DOM
            const titleEl = document.getElementById('display-hero-title');
            const subEl = document.getElementById('display-hero-sub');
            const annEl = document.getElementById('display-announce');

            if(titleEl) titleEl.innerHTML = data.heroTitle;
            if(subEl) subEl.textContent = data.heroSub;
            if(annEl) annEl.querySelector('span').nextSibling.textContent = " " + data.announce;

            // Update Admin Inputs
            document.getElementById('cms-hero-title').value = data.heroTitle;
            document.getElementById('cms-hero-sub').value = data.heroSub;
            document.getElementById('cms-announce').value = data.announce;
        }

        // Save CMS content
        function saveCMS() {
            const newData = {
                heroTitle: document.getElementById('cms-hero-title').value,
                heroSub: document.getElementById('cms-hero-sub').value,
                announce: document.getElementById('cms-announce').value
            };
            localStorage.setItem('bac18_content', JSON.stringify(newData));
            loadContent();
            toggleAdminPanel();
            alert("Content updated successfully!");
        }

        // --- UI Interactions ---

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function togglePricing() {
            const toggle = document.getElementById('toggle');
            const dot = document.getElementById('toggle-dot');
            const monthlyPrices = document.querySelectorAll('.price-monthly');
            const yearlyPrices = document.querySelectorAll('.price-yearly');

            if (toggle.checked) {
                // Yearly
                dot.style.transform = 'translateX(100%)';
                monthlyPrices.forEach(el => el.classList.add('hidden'));
                yearlyPrices.forEach(el => el.classList.remove('hidden'));
            } else {
                // Monthly
                dot.style.transform = 'translateX(0)';
                monthlyPrices.forEach(el => el.classList.remove('hidden'));
                yearlyPrices.forEach(el => el.classList.add('hidden'));
            }
        }

        function toggleBooking() {
            const modal = document.getElementById('booking-modal');
            const content = document.getElementById('booking-content');
            
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    modal.classList.remove('opacity-0', 'pointer-events-none');
                    content.classList.remove('scale-95');
                    content.classList.add('scale-100');
                }, 10);
            } else {
                modal.classList.add('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }

        function toggleAdminPanel() {
            const panel = document.getElementById('admin-panel');
            panel.classList.toggle('hidden');
        }

        function handleBooking(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> Processing...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-xl"></iconify-icon> Booked!';
                btn.classList.remove('bg-brand-400', 'text-dark-900');
                btn.classList.add('bg-green-600', 'text-white');
                
                setTimeout(() => {
                    toggleBooking();
                    // Reset form
                    e.target.reset();
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.classList.add('bg-brand-400', 'text-dark-900');
                    btn.classList.remove('bg-green-600', 'text-white');
                    alert("Your session has been booked! Check your email for confirmation.");
                }, 1000);
            }, 1500);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadContent();
        });

        // Close modals on outside click
        window.onclick = function(event) {
            const bookingModal = document.getElementById('booking-modal');
            if (event.target == bookingModal) {
                toggleBooking();
            }
            const adminModal = document.getElementById('admin-panel');
            if (event.target == adminModal) {
                toggleAdminPanel();
            }
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
      

<div className="fixed bottom-4 right-4 z-50 opacity-20 hover:opacity-100 transition-opacity cursor-pointer group" onclick="toggleAdminPanel()" title="Admin CMS">
<div className="bg-dark-800 p-2 rounded-lg border border-zinc-700 hover:border-brand-400">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-brand-400" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4" id="admin-panel">
<div className="bg-dark-800 w-full max-w-lg rounded-2xl border border-zinc-700 shadow-2xl overflow-hidden">
<div className="p-6 border-b border-zinc-700 flex justify-between items-center bg-dark-900">
<h3 className="text-zinc-100 text-lg font-semibold tracking-tight flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:shield-user-linear"></iconify-icon>
                    Site Management CMS
                </h3>
<button className="text-zinc-400 hover:text-white transition-colors" onclick="toggleAdminPanel()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
<div>
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1 block">Hero Title</label>
<input className="w-full bg-dark-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" id="cms-hero-title" placeholder="Enter title..." type="text"/>
</div>
<div>
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1 block">Hero Subtitle</label>
<textarea className="w-full bg-dark-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" id="cms-hero-sub" placeholder="Enter subtitle..." rows="3"></textarea>
</div>
<div>
<label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1 block">Announcement Bar</label>
<input className="w-full bg-dark-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" id="cms-announce" type="text"/>
</div>
</div>
<div className="p-4 border-t border-zinc-700 bg-dark-900 flex justify-end gap-3">
<button className="px-4 py-2 text-zinc-400 hover:text-white text-sm" onclick="toggleAdminPanel()">Cancel</button>
<button className="px-6 py-2 bg-brand-400 text-dark-900 font-semibold rounded-lg hover:bg-brand-500 transition-all text-sm shadow-[0_0_15px_rgba(163,230,53,0.3)]" onclick="saveCMS()">Save Changes</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[90] bg-black/90 hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 pointer-events-none" id="booking-modal">
<div className="bg-dark-800 w-full max-w-md rounded-2xl border border-zinc-700 shadow-2xl transform scale-95 transition-transform duration-300" id="booking-content">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Book Your Session</h2>
<p className="text-sm text-zinc-500 mt-1">First session is always free.</p>
</div>
<button className="text-zinc-500 hover:text-white" onclick="toggleBooking()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="handleBooking(event)">
<div>
<label className="text-xs text-zinc-500 mb-1 block ml-1">Full Name</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:user-linear"></iconify-icon>
<input className="w-full bg-dark-900 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-400 focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="John Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-1 block ml-1">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-dark-900 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-400 focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 mb-1 block ml-1">Interested In</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:dumbbell-large-linear"></iconify-icon>
<select className="w-full bg-dark-900 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white focus:border-brand-400 focus:outline-none transition-colors appearance-none cursor-pointer">
<option>Bodybuilding</option>
<option>CrossFit</option>
<option>Cardio Fitness</option>
<option>Personal Training</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full py-3 bg-brand-400 text-dark-900 font-semibold rounded-xl hover:bg-brand-500 transition-all flex justify-center items-center gap-2 mt-2" type="submit">
<span>Confirm Booking</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<nav className="fixed w-full z-40 top-0 left-0 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-10 h-10 bg-brand-400 rounded-lg flex items-center justify-center transform -rotate-6">
<span className="text-dark-900 font-bold text-lg">B</span>
</div>
<div className="flex flex-col">
<span className="text-white font-semibold tracking-tight text-lg leading-none">BAC 18</span>
<span className="text-xs text-zinc-500 tracking-widest uppercase">Musculation</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-brand-400 transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium hover:text-brand-400 transition-colors" href="#schedule">Schedule</a>
<a className="text-sm font-medium hover:text-brand-400 transition-colors" href="#trainers">Trainers</a>
<a className="text-sm font-medium hover:text-brand-400 transition-colors" href="#pricing">Membership</a>
<a className="hover:text-brand-400 transition-colors text-sm font-medium" href="#gallery">Gallery</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-zinc-300 hover:text-white text-sm font-medium transition-colors" onclick="toggleBooking()">Sign In</button>
<button className="bg-white text-dark-900 hover:bg-brand-400 transition-all px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight flex items-center gap-2 group" onclick="toggleBooking()">
                        Join Now
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>

<div className="md:hidden flex items-center">
<button className="text-zinc-300 hover:text-brand-400 p-2" onclick="toggleMobileMenu()">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-dark-900 border-b border-zinc-800 absolute w-full left-0 top-20" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-zinc-800 hover:text-brand-400" href="#programs" onclick="toggleMobileMenu()">Programs</a>
<a className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-zinc-800 hover:text-brand-400" href="#schedule" onclick="toggleMobileMenu()">Schedule</a>
<a className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-zinc-800 hover:text-brand-400" href="#trainers" onclick="toggleMobileMenu()">Trainers</a>
<a className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-zinc-800 hover:text-brand-400" href="#pricing" onclick="toggleMobileMenu()">Membership</a>
<button className="w-full mt-4 bg-brand-400 text-dark-900 py-3 rounded-lg font-semibold" onclick="toggleMobileMenu(); toggleBooking()">Join Now</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-transparent"></div>
</div>
<div className="sm:px-6 lg:px-8 grid md:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-400/30 bg-brand-400/10 text-brand-400 text-xs font-medium tracking-wide uppercase" id="display-announce">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span> New Cross-Training Zone Open</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.9]" id="display-hero-title">SCULPT <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">YOUR</span> <br/><span className="text-brand-400">LEGACY.</span></h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed" id="display-hero-sub">The premier fitness destination in region 18. Advanced equipment, expert coaching, and a community driven by results.</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-brand-400 text-dark-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]" onclick="toggleBooking()">
                        Start Free Trial
                        <iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
</button>
<a className="bg-zinc-800 text-white border border-zinc-700 px-8 py-4 rounded-full font-medium text-base hover:bg-zinc-700 transition-all flex items-center justify-center" href="#programs">
                        View Programs
                    </a>
</div>
<div className="flex items-center gap-6 pt-8 text-zinc-500 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>24/7 Access</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Expert Trainers</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Modern Equipment</span>
</div>
</div>
</div>

<div className="hidden md:block relative">

<div className="absolute -top-10 -right-10 bg-dark-800/80 backdrop-blur border border-zinc-700 p-4 rounded-2xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 rounded-full bg-brand-400/20 flex items-center justify-center text-brand-400">
<iconify-icon className="text-2xl" icon="solar:fire-bold"></iconify-icon>
</div>
<div>
<div className="text-white font-semibold text-lg">1,200+</div>
<div className="text-zinc-500 text-xs">Calories Burned</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-pulse">
<span className="text-xs tracking-widest uppercase">Scroll</span>
<iconify-icon className="text-2xl" icon="solar:mouse-linear"></iconify-icon>
</div>
</section>

<section className="border-y border-zinc-800 bg-black/50 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">1500<span className="text-brand-400">+</span></div>
<div className="text-zinc-500 text-sm">Active Members</div>
</div>
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">45<span className="text-brand-400">+</span></div>
<div className="text-zinc-500 text-sm">Professional Trainers</div>
</div>
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">80<span className="text-brand-400">+</span></div>
<div className="text-zinc-500 text-sm">Weekly Classes</div>
</div>
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">18</div>
<div className="text-zinc-500 text-sm">Years Experience</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 relative" id="programs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-brand-400 font-medium tracking-widest uppercase text-sm mb-2">Our Programs</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Find Your Discipline</h3>
</div>
<button className="text-white border-b border-brand-400 pb-1 hover:text-brand-400 transition-colors text-sm" onclick="toggleBooking()">View all programs</button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer">
<img alt="Musculation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
<iconify-icon className="text-4xl text-brand-400 mb-4" icon="solar:dumbbell-large-linear"></iconify-icon>
<h4 className="text-2xl font-semibold text-white mb-2">Bodybuilding</h4>
<p className="text-zinc-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">Free weights, machines, and expert guidance to build muscle mass and strength effectively.</p>
<span className="flex items-center gap-2 text-white text-sm font-medium group-hover:text-brand-400 transition-colors">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer">
<img alt="Cardio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
<iconify-icon className="text-4xl text-brand-400 mb-4" icon="solar:running-linear"></iconify-icon>
<h4 className="text-2xl font-semibold text-white mb-2">Cardio &amp; HIIT</h4>
<p className="text-zinc-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">High-intensity interval training to burn fat, improve endurance, and boost heart health.</p>
<span className="flex items-center gap-2 text-white text-sm font-medium group-hover:text-brand-400 transition-colors">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer">
<img alt="Crossfit" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
<iconify-icon className="text-4xl text-brand-400 mb-4" icon="solar:bolt-linear"></iconify-icon>
<h4 className="text-2xl font-semibold text-white mb-2">Cross Training</h4>
<p className="text-zinc-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">Functional movements performed at high intensity. The ultimate test of fitness.</p>
<span className="flex items-center gap-2 text-white text-sm font-medium group-hover:text-brand-400 transition-colors">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800 border-y border-zinc-800" id="schedule">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-brand-400 font-medium tracking-widest uppercase text-sm mb-2">Weekly Timetable</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Class Schedule</h3>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="px-6 py-2 rounded-full bg-brand-400 text-dark-900 font-semibold text-sm">Mon</button>
<button className="px-6 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm">Tue</button>
<button className="px-6 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm">Wed</button>
<button className="px-6 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm">Thu</button>
<button className="px-6 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm">Fri</button>
<button className="px-6 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm">Sat</button>
</div>

<div className="grid gap-4">

<div className="group flex flex-col md:flex-row items-center justify-between p-6 bg-dark-900 rounded-xl border border-zinc-800 hover:border-brand-400/50 transition-colors">
<div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
<div className="text-center min-w-[80px]">
<span className="block text-xl font-semibold text-white">09:00</span>
<span className="text-xs text-zinc-500 uppercase">AM</span>
</div>
<div className="h-10 w-px bg-zinc-800 hidden md:block"></div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-brand-400 transition-colors">Morning HIIT</h4>
<p className="text-sm text-zinc-500">Cardio Zone • 45 Mins</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex items-center gap-2">
<img alt="Trainer" className="w-8 h-8 rounded-full border border-zinc-700 object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm text-zinc-400">Sarah C.</span>
</div>
<button className="bg-zinc-800 hover:bg-brand-400 hover:text-dark-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all" onclick="toggleBooking()">
                            Book
                        </button>
</div>
</div>

<div className="group flex flex-col md:flex-row items-center justify-between p-6 bg-dark-900 rounded-xl border border-zinc-800 hover:border-brand-400/50 transition-colors">
<div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
<div className="text-center min-w-[80px]">
<span className="block text-xl font-semibold text-white">14:00</span>
<span className="text-xs text-zinc-500 uppercase">PM</span>
</div>
<div className="h-10 w-px bg-zinc-800 hidden md:block"></div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-brand-400 transition-colors">Powerlifting Basics</h4>
<p className="text-sm text-zinc-500">Free Weights • 60 Mins</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex items-center gap-2">
<img alt="Trainer" className="w-8 h-8 rounded-full border border-zinc-700 object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm text-zinc-400">Marc D.</span>
</div>
<button className="bg-zinc-800 hover:bg-brand-400 hover:text-dark-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all" onclick="toggleBooking()">
                            Book
                        </button>
</div>
</div>

<div className="group flex flex-col md:flex-row items-center justify-between p-6 bg-dark-900 rounded-xl border border-zinc-800 hover:border-brand-400/50 transition-colors">
<div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
<div className="text-center min-w-[80px]">
<span className="block text-xl font-semibold text-white">18:30</span>
<span className="text-xs text-zinc-500 uppercase">PM</span>
</div>
<div className="h-10 w-px bg-zinc-800 hidden md:block"></div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-brand-400 transition-colors">Cross-Training</h4>
<p className="text-sm text-zinc-500">Main Hall • 60 Mins</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex items-center gap-2">
<img alt="Trainer" className="w-8 h-8 rounded-full border border-zinc-700 object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm text-zinc-400">Alex R.</span>
</div>
<button className="bg-zinc-800 hover:bg-brand-400 hover:text-dark-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all" onclick="toggleBooking()">
                            Book
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900" id="trainers">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-brand-400 font-medium tracking-widest uppercase text-sm mb-2">The Team</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Expert Coaches</h3>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="bg-dark-800 rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-400/30 transition-all group">
<div className="h-64 overflow-hidden relative">
<img alt="Trainer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white">Marc Dubois</h4>
<p className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-3">Head Coach</p>
<p className="text-zinc-500 text-sm line-clamp-2">Specialist in hypertrophy and strength conditioning with 10 years experience.</p>
<div className="flex gap-3 mt-4">
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="bg-dark-800 rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-400/30 transition-all group">
<div className="h-64 overflow-hidden relative">
<img alt="Trainer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white">Sarah Connor</h4>
<p className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-3">HIIT Expert</p>
<p className="text-zinc-500 text-sm line-clamp-2">Pushing your cardiovascular limits with high energy sessions.</p>
<div className="flex gap-3 mt-4">
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="bg-dark-800 rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-400/30 transition-all group">
<div className="h-64 overflow-hidden relative">
<img alt="Trainer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white">Alex Rivera</h4>
<p className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-3">Crossfit Lead</p>
<p className="text-zinc-500 text-sm line-clamp-2">Functional fitness guru focusing on mobility and power.</p>
<div className="flex gap-3 mt-4">
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="bg-dark-800 rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-400/30 transition-all group">
<div className="h-64 overflow-hidden relative">
<img alt="Trainer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-white">Julie Chen</h4>
<p className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-3">Yoga &amp; Mobility</p>
<p className="text-zinc-500 text-sm line-clamp-2">Restoring balance and flexibility to support heavy lifting.</p>
<div className="flex gap-3 mt-4">
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800 border-t border-zinc-800" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-brand-400 font-medium tracking-widest uppercase text-sm mb-2">Membership</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Choose Your Plan</h3>

<div className="flex items-center justify-center mt-8 gap-4">
<span className="text-sm text-white">Monthly</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only toggle-checkbox" id="toggle" onchange="togglePricing()" type="checkbox"/>
<div className="w-14 h-8 bg-zinc-900 border border-zinc-700 rounded-full toggle-label transition-colors"></div>
<div className="w-6 h-6 bg-white rounded-full absolute left-1 top-1 transition-transform duration-200 transform" id="toggle-dot"></div>
</label>
<span className="text-sm text-zinc-500">Yearly <span className="text-brand-400 text-xs font-medium ml-1">-20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-dark-900 rounded-2xl p-8 border border-zinc-800 flex flex-col hover:border-zinc-600 transition-colors">
<h4 className="text-xl font-semibold text-white">Starter</h4>
<p className="text-zinc-500 text-sm mt-2">Essential access for beginners.</p>
<div className="mt-6 mb-8">
<span className="text-4xl font-semibold text-white price-monthly">€29</span>
<span className="text-4xl font-semibold text-white price-yearly hidden">€280</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Access 06:00 - 22:00
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Cardio &amp; Weight Zone
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Locker access
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-all" onclick="toggleBooking()">Choose Plan</button>
</div>

<div className="bg-zinc-800/50 rounded-2xl p-8 border border-brand-400 relative flex flex-col transform scale-105 shadow-2xl">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-400 text-dark-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
<h4 className="text-xl font-semibold text-white">Performance</h4>
<p className="text-zinc-400 text-sm mt-2">For dedicated athletes.</p>
<div className="mt-6 mb-8">
<span className="text-4xl font-semibold text-white price-monthly">€49</span>
<span className="text-4xl font-semibold text-white price-yearly hidden">€470</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            24/7 Access
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            All Classes Included
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            1 Free PT Session
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-brand-400 text-dark-900 font-semibold hover:bg-brand-500 transition-all shadow-[0_0_15px_rgba(163,230,53,0.3)]" onclick="toggleBooking()">Join Now</button>
</div>

<div className="bg-dark-900 rounded-2xl p-8 border border-zinc-800 flex flex-col hover:border-zinc-600 transition-colors">
<h4 className="text-xl font-semibold text-white">Elite</h4>
<p className="text-zinc-500 text-sm mt-2">Maximum results package.</p>
<div className="mt-6 mb-8">
<span className="text-4xl font-semibold text-white price-monthly">€89</span>
<span className="text-4xl font-semibold text-white price-yearly hidden">€850</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Performance
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Weekly PT Session
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Nutrition Plan
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-all" onclick="toggleBooking()">Choose Plan</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Inside the Gym</h2>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Gym Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Weights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Rowing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Dumbbells" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&amp;w=2025&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-800 bg-dark-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">Visit BAC 18</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-brand-400 text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Address</h4>
<p className="text-zinc-500 text-sm mt-1">123 Fitness Boulevard,District 18, Paris Region</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-brand-400 text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Contact</h4>
<p className="text-zinc-500 text-sm mt-1">+33 1 23 45 67 89contact@bac18musculation.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-brand-400 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Opening Hours</h4>
<p className="text-zinc-500 text-sm mt-1">Mon - Fri: 06:00 - 23:00Sat - Sun: 08:00 - 20:00</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl h-[300px] w-full relative overflow-hidden grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500 border border-zinc-700">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41999.39739777598!2d2.3522219!3d48.856614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1633023222521!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-dark-900 border-t border-zinc-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="flex items-center gap-2 mb-6 md:mb-0">
<div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center transform -rotate-6">
<span className="text-dark-900 font-bold">B</span>
</div>
<span className="text-white font-bold text-lg">BAC 18</span>
</div>
<div className="flex gap-8">
<a className="text-zinc-500 hover:text-brand-400 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-brand-400 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-brand-400 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:youtube-linear"></iconify-icon></a>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
<p>© 2023 BAC 18 Musculation. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
