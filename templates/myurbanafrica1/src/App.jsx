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



        /* --- AGE GATE LOGIC --- */
        const ageForm = document.getElementById('age-form');
        const dayInput = document.getElementById('day');
        const monthInput = document.getElementById('month');
        const yearInput = document.getElementById('year');
        const ageError = document.getElementById('age-error');
        const ageGate = document.getElementById('age-gate');

        // Auto-focus movement without glitchy behavior
        const inputs = [dayInput, monthInput, yearInput];
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Remove non-numeric characters
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                
                // Move to next input if max length reached
                if (e.target.value.length === e.target.maxLength) {
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                }
            });

            // Handle backspace to move back
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value.length === 0) {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });

        function verifyAge() {
            const day = parseInt(dayInput.value);
            const month = parseInt(monthInput.value);
            const year = parseInt(yearInput.value);

            // Basic validation check
            if (!day || !month || !year || day > 31 || month > 12 || yearInput.value.length < 4) {
                ageError.textContent = "Please enter a valid date.";
                ageError.classList.remove('hidden');
                return;
            }

            // Calculate Age
            const birthDate = new Date(year, month - 1, day);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age >= 18) {
                // Success: Fade out overlay
                ageGate.style.opacity = '0';
                setTimeout(() => {
                    ageGate.style.display = 'none';
                    // Allow scroll again
                    document.body.style.overflow = 'auto';
                }, 500);
            } else {
                // Fail
                ageError.textContent = "You must be 18 years or older to enter this site.";
                ageError.classList.remove('hidden');
            }
        }

        // Lock scroll initially
        document.body.style.overflow = 'hidden';

        /* --- SCROLL ANIMATIONS --- */
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        /* --- CONTACT FORM LOGIC --- */
        function handleContactSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('contact-form');
            const successOverlay = document.getElementById('success-overlay');
            
            // Show Success Overlay
            successOverlay.style.display = 'flex'; // Use flex to center content
            
            // Reset Form
            form.reset();

            // Hide success message after 4 seconds
            setTimeout(() => {
                successOverlay.style.display = 'none';
            }, 4000);
        }

        /* --- MOBILE MENU TOGGLE --- */
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        
        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        /* --- NAVBAR SCROLL EFFECT --- */
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.add('bg-white/95');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    
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
      

<div className="fixed flex transition-opacity duration-500 bg-[#1a1512] z-[9999] pt-4 pr-4 pb-4 pl-4 top-0 right-0 bottom-0 left-0 items-center justify-center" id="age-gate">
<div className="bg-white max-w-md w-full p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-[#FFD700] text-center relative overflow-hidden">

<div className="absolute top-0 right-0 opacity-5 -mt-4 -mr-4">
<iconify-icon className="text-[#8B4513]" icon="solar:leaf-bold" width="150"></iconify-icon>
</div>
<div className="relative z-10">
<div className="mb-6 flex justify-center">

<div className="flex text-[#FFD700] bg-slate-50 w-16 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b4b7cdd-7de2-4f8b-8c7d-d168b37ab7fa_3840w.png)] bg-cover bg-center rounded-full items-center justify-center">
</div>
</div>
<h2 className="text-3xl font-bold text-[#8B4513] mb-2 tracking-tight">Welcome</h2>
<p className="text-gray-600 mb-8 text-sm uppercase tracking-widest">Please verify your age to enter</p>
<form className="space-y-6" id="age-form" onsubmit="return false;">
<div className="flex justify-center gap-3">
<div className="flex flex-col">
<input className="age-input w-16 h-14 border-2 border-gray-300 rounded-lg text-2xl font-bold text-[#8B4513] bg-gray-50 placeholder-gray-300" id="day" inputmode="numeric" maxlength="2" placeholder="DD" type="text"/>
<label className="text-[10px] uppercase text-gray-400 mt-1 font-medium">Day</label>
</div>
<div className="flex flex-col">
<input className="age-input w-16 h-14 border-2 border-gray-300 rounded-lg text-2xl font-bold text-[#8B4513] bg-gray-50 placeholder-gray-300" id="month" inputmode="numeric" maxlength="2" placeholder="MM" type="text"/>
<label className="text-[10px] uppercase text-gray-400 mt-1 font-medium">Month</label>
</div>
<div className="flex flex-col">
<input className="age-input w-24 h-14 border-2 border-gray-300 rounded-lg text-2xl font-bold text-[#8B4513] bg-gray-50 placeholder-gray-300" id="year" inputmode="numeric" maxlength="4" placeholder="YYYY" type="text"/>
<label className="text-[10px] uppercase text-gray-400 mt-1 font-medium">Year</label>
</div>
</div>
<div className="hidden text-red-600 text-sm font-medium bg-red-50 py-2 rounded" id="age-error">
                        You must be 18 years or older to enter.
                    </div>
<button className="w-full bg-[#8B4513] hover:bg-[#723910] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] tracking-wider uppercase text-sm" onclick="verifyAge()" type="button">
                        Enter Site
                    </button>
<p className="text-xs text-gray-400 mt-4">
                        By entering, you agree to our Terms of Service and Privacy Policy.
                    </p>
</form>
</div>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<a className="flex items-center gap-3 group" href="#">

<img alt="My Urban Africa Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b4b7cdd-7de2-4f8b-8c7d-d168b37ab7fa_320w.png"/>
<div className="flex flex-col justify-center border-l border-gray-300 pl-3 h-10">
<span className="text-[#8B4513] font-serif text-sm font-bold leading-tight tracking-tight uppercase">My Urban<br/>Africa</span>
</div>
</a>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-gray-600 hover:text-[#8B4513] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#about">Vision</a>
<a className="text-gray-600 hover:text-[#8B4513] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#heritage">Heritage</a>
<a className="text-gray-600 hover:text-[#228B22] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#sustainability">Sustainability</a>
<a className="text-gray-600 hover:text-[#8B4513] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors" href="#news">News</a>
<a className="bg-[#FFD700] hover:bg-[#e6c200] text-[#8B4513] px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" href="#contact">
                        Get in Touch
                    </a>
</nav>

<div className="md:hidden flex items-center">
<button className="text-[#8B4513] hover:text-[#FFD700] focus:outline-none p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<a className="text-gray-700 hover:bg-gray-50 hover:text-[#8B4513] block px-3 py-4 text-base font-medium border-b border-gray-100" href="#about">Vision</a>
<a className="text-gray-700 hover:bg-gray-50 hover:text-[#8B4513] block px-3 py-4 text-base font-medium border-b border-gray-100" href="#heritage">Heritage</a>
<a className="text-gray-700 hover:bg-gray-50 hover:text-[#228B22] block px-3 py-4 text-base font-medium border-b border-gray-100" href="#sustainability">Sustainability</a>
<a className="text-gray-700 hover:bg-gray-50 hover:text-[#8B4513] block px-3 py-4 text-base font-medium border-b border-gray-100" href="#news">News</a>
<a className="text-[#8B4513] font-bold bg-[#FFD700]/10 block px-3 py-4 text-base" href="#contact">Contact Us</a>
</div>
</div>
</header>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Pretoria Skyline at Dusk" className="w-full h-full object-cover object-center scale-110 animate-slow-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cc56243-3ed1-4e4f-a17d-1cd65436f902_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a1512]/90"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-black/30 backdrop-blur-sm text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-6 reveal">
<span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                Est. 2024
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg reveal transition-delay-100">
                Brewing the Future of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#E6C200]">African Heritage</span>
</h1>
<p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed reveal transition-delay-200">
                My Urban Africa innovates responsibly for urban communities across South Africa, honoring tradition through modern excellence.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center reveal transition-delay-300">
<a className="group inline-flex items-center justify-center bg-[#FFD700] hover:bg-[#e6c200] text-[#8B4513] font-bold py-4 px-8 rounded shadow-lg hover:shadow-[#FFD700]/40 transition-all duration-300 transform hover:-translate-y-1" href="#about">
                    Explore Our Vision
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</section>

<section className="py-24 pattern-bg relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 reveal">
<h4 className="text-[#8B4513] font-bold tracking-widest uppercase text-sm mb-3">Our Corporate Identity</h4>
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Connecting Tradition with <span className="text-[#8B4513] italic">Modern Urban Life</span>
</h2>
<p className="text-gray-600 text-lg leading-relaxed mb-6">
                        With deep roots in the African soil, My Urban Africa serves as the custodian of heritage brands. We are more than a brewing company; we are a cultural bridge.
                    </p>
<p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Our flagship brand, BRA's, represents the beginning of a journey to revitalize traditional sorghum beer for the contemporary market. We aim to create sustainable value for our communities, creating jobs and celebrating the vibrant spirit of South African townships.
                    </p>
<div className="grid grid-cols-2 gap-6 border-t border-[#8B4513]/20 pt-8">
<div>
<span className="block text-4xl font-bold text-[#8B4513] mb-1">100%</span>
<span className="text-sm text-gray-500 uppercase tracking-wide">Locally Sourced</span>
</div>
<div>
<span className="block text-4xl font-bold text-[#8B4513] mb-1">Urban</span>
<span className="text-sm text-gray-500 uppercase tracking-wide">Focus Strategy</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative reveal transition-delay-200">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700] rounded-full opacity-20 blur-2xl"></div>
<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#8B4513] rounded-full opacity-20 blur-2xl"></div>
<div className="relative rounded-lg overflow-hidden shadow-2xl">

<img alt="My Urban Africa Team" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&amp;w=2672&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white font-serif italic text-lg">"Innovating for the people."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="heritage">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-4xl font-bold text-[#8B4513] mb-4">Innovation in Heritage Malts</h2>
<p className="text-gray-600 text-lg">We take the ancient art of brewing and apply world-class standards of quality and safety.</p>
</div>
<div className="bg-[#1a1512] rounded-2xl overflow-hidden shadow-2xl reveal">
<div className="grid md:grid-cols-2">
<div className="p-12 md:p-16 flex flex-col justify-center">
<div className="mb-8">

<div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden mb-6 group">

<img alt="Sorghum Plant Icon" className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36d57440-a385-44b3-acff-e04a08e87cdd_3840w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-3xl font-bold text-white mb-4">Sorghum Excellence</h3>
<p className="text-gray-400 leading-relaxed mb-6">
                                Sorghum is the heart of African brewing. It is resilient, nutritious, and deeply cultural. At My Urban Africa, we treat this ingredient with the reverence it deserves, creating beverages like BRA's Traditional Beer that offer authentic taste with modern consistency.
                            </p>
<a className="inline-flex items-center text-[#FFD700] hover:text-white font-medium transition-colors" href="#contact">
                                Learn about our process
                                <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-96 md:h-auto">
<img alt="Grain texture close up" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1b84c21-ddc8-403f-ba79-ffab0033bfbf_3840w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1512]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F0F5F0] relative overflow-hidden" id="sustainability">

<div className="absolute top-0 right-0 w-1/3 h-full bg-[#228B22]/5 skew-x-12 transform origin-top"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-[#228B22] text-2xl" icon="solar:leaf-bold"></iconify-icon>
<h4 className="text-[#228B22] font-bold tracking-widest uppercase text-sm">Commitment to Earth</h4>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Growing Responsibly</h2>
<p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Sustainability isn't just a buzzword; it's our business model. From returnable packaging solutions to water conservation in our brewing process, we mirror the standards of global leaders.
                    </p>
<ul className="space-y-6">
<li className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#228B22]/10 flex items-center justify-center text-[#228B22] mt-1">
<iconify-icon icon="solar:recycle-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-lg font-bold text-gray-900">Eco-Packaging</h4>
<p className="text-gray-500">Minimizing waste through innovative returnable crate systems.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#228B22]/10 flex items-center justify-center text-[#228B22] mt-1">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-lg font-bold text-gray-900">Community Upliftment</h4>
<p className="text-gray-500">Supporting local farmers and township economies.</p>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 reveal transition-delay-200">
<img alt="Nature" className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c112b261-80be-4f5b-8507-8dc38c337526_3840w.jpg?w=800&amp;q=80" style={{}}/>
<img alt="Recycling" className="rounded-lg shadow-lg w-full h-64 object-cover transform -translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06442d47-7af5-4f0e-9cbb-ef16168a354e_3840w.jpg?w=800&amp;q=80" style={{}}/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="news">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<h2 className="text-4xl font-bold text-[#8B4513] mb-2">Latest Updates</h2>
<p className="text-gray-500">Stories from My Urban Africa</p>
</div>
<a className="hidden md:inline-flex text-[#8B4513] font-bold hover:text-[#FFD700] transition-colors items-center" href="#">
                    View Archive <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer reveal transition-delay-100">
<div className="overflow-hidden rounded-xl mb-4 relative">
<img alt="Store opening" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/318603af-dc96-4451-8b42-5e72163509c0_3840w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-2">
<span>Corporate</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-gray-400">Oct 12, 2024</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8B4513] transition-colors">Expanding Our Footprint in Gauteng</h3>
<p className="text-gray-500 text-sm line-clamp-2">New distribution centers open to better serve our urban customers across the province.</p>
</article>

<article className="group cursor-pointer reveal transition-delay-200">
<div className="overflow-hidden rounded-xl mb-4 relative">
<img alt="Sustainability" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&amp;w=2671&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="flex items-center gap-2 text-xs font-bold text-[#228B22] uppercase tracking-wider mb-2">
<span>Sustainability</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-gray-400">Sep 28, 2024</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8B4513] transition-colors">Water Stewardship Milestones</h3>
<p className="text-gray-500 text-sm line-clamp-2">How we achieved a 20% reduction in water usage across our brewing operations this quarter.</p>
</article>

<article className="group cursor-pointer reveal transition-delay-300">
<div className="overflow-hidden rounded-xl mb-4 relative">
<img alt="Technology" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-2">
<span>Innovation</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-gray-400">Sep 15, 2024</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8B4513] transition-colors">Tech in Traditional Brewing</h3>
<p className="text-gray-500 text-sm line-clamp-2">Integrating modern quality control systems while keeping the authentic recipe untouched.</p>
</article>
</div>
</div>
</section>

<section className="py-24 pattern-bg border-t border-[#8B4513]/10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h4 className="text-[#8B4513] font-bold tracking-widest uppercase text-sm mb-3">Connect With Us</h4>
<h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Build the Future Together</h2>
<p className="text-gray-600 mb-10">
                        Whether you are a retailer, a potential partner, or a community member, we want to hear from you.
                    </p>
<div className="space-y-8">
<div className="flex items-start">
<div className="w-12 h-12 bg-[#8B4513] text-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="ml-4">
<h5 className="text-lg font-bold text-gray-900">Email Us</h5>
<a className="text-gray-600 hover:text-[#8B4513] transition-colors" href="mailto:sales@myurbanafrica.co.za">sales@myurbanafrica.co.za</a>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-[#8B4513] text-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="ml-4">
<h5 className="text-lg font-bold text-gray-900">Office Tel</h5>
<a className="text-gray-600 hover:text-[#8B4513] transition-colors" href="tel:0414844644">041 484 4644</a>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-[#8B4513] text-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="ml-4">
<h5 className="text-lg font-bold text-gray-900">Visit Us</h5>
<p className="text-gray-600">130 Patterson Rd, North End, Gqeberha (Port Elizabeth), 6001</p>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#8B4513] hover:text-[#FFD700] hover:border-[#8B4513] transition-all" href="#">
<iconify-icon icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#8B4513] hover:text-[#FFD700] hover:border-[#8B4513] transition-all" href="#">
<iconify-icon icon="ic:baseline-tiktok"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#8B4513] hover:text-[#FFD700] hover:border-[#8B4513] transition-all" href="#">
<iconify-icon icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl reveal transition-delay-200 border border-gray-100 relative overflow-hidden">

<div className="absolute inset-0 bg-white z-20 flex-col items-center justify-center text-center p-8 hidden animate-fade-in" id="success-overlay">
<div className="w-20 h-20 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22] mb-6 mx-auto">
<iconify-icon icon="solar:check-circle-bold" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-[#228B22] mb-2">Information Submitted</h3>
<p className="text-gray-600">Thank you for contacting My Urban Africa. We will be in touch shortly.</p>
</div>
<form id="contact-form" onsubmit="handleContactSubmit(event)">
<h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
<div className="space-y-6">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors" required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#8B4513] hover:bg-[#723910] text-white font-bold py-4 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 group" type="submit">
                                Send Message
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#1a1512] text-white pt-16 pb-8 border-t-4 border-[#FFD700]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">


<img alt="Official Brand Logo" className="h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b4b7cdd-7de2-4f8b-8c7d-d168b37ab7fa_320w.png"/>
<span className="text-2xl font-serif font-bold tracking-tight">My Urban Africa</span>
</div>
<p className="text-gray-400 max-w-sm leading-relaxed">
                        Pioneers in sustainable African beverages, committed to community, heritage, and brewing excellence.
                    </p>
</div>
<div>
<h4 className="text-[#FFD700] font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
<ul className="space-y-4 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">Our Vision</a></li>
<li><a className="hover:text-white transition-colors" href="#heritage">Heritage</a></li>
</ul>
</div>
<div>
<h4 className="text-[#FFD700] font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
<ul className="space-y-4 text-gray-400 text-sm">
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> sales@myurbanafrica.co.za</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 041 484 4644</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2024 My Urban Africa. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">PAIA Manual</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
