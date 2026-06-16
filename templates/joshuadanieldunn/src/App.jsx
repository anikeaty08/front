import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Scroll to Booking
        function scrollToBooking() {
            document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
            document.getElementById('mobile-menu').classList.remove('flex');
        }

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('animate-enter');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.observer-fade').forEach((el) => {
            el.classList.add('translate-y-10', 'transition-all', 'duration-700');
            observer.observe(el);
        });

        // Booking Form Logic
        let currentStep = 1;

        function updateProgress(step) {
            // Update Indicators
            for(let i=1; i<=3; i++) {
                const el = document.getElementById(`ind-${i}`);
                if(i < step) {
                    el.classList.remove('bg-white', 'text-gray-400', 'border-gray-200');
                    el.classList.add('bg-gray-900', 'text-white', 'border-gray-900');
                    el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>';
                } else if(i === step) {
                    el.classList.remove('bg-white', 'text-gray-400', 'border-gray-200');
                    el.classList.add('bg-gray-900', 'text-white', 'border-gray-900');
                    el.innerHTML = i;
                } else {
                    el.classList.add('bg-white', 'text-gray-400', 'border-gray-200');
                    el.classList.remove('bg-gray-900', 'text-white', 'border-gray-900');
                    el.innerHTML = i;
                }
            }
            
            // Update Lines
            if(step > 1) document.getElementById('line-1').classList.remove('w-0');
            else document.getElementById('line-1').classList.add('w-0');
            document.getElementById('line-1').classList.toggle('w-full', step > 1);

            if(step > 2) document.getElementById('line-2').classList.remove('w-0');
            else document.getElementById('line-2').classList.add('w-0');
            document.getElementById('line-2').classList.toggle('w-full', step > 2);
        }

        function nextStep(step, data) {
            // Hide current
            const currentEl = document.getElementById(`step-${currentStep}`);
            currentEl.classList.add('-translate-x-[110%]', 'opacity-0', 'pointer-events-none');
            currentEl.classList.remove('translate-x-0', 'relative');
            
            // Show next
            const nextEl = document.getElementById(`step-${step}`);
            nextEl.classList.remove('translate-x-[110%]', 'opacity-0', 'pointer-events-none');
            nextEl.classList.add('translate-x-0', 'relative');
            
            currentStep = step;
            updateProgress(step);
        }

        function prevStep(step) {
            // Hide current
            const currentEl = document.getElementById(`step-${currentStep}`);
            currentEl.classList.add('translate-x-[110%]', 'opacity-0', 'pointer-events-none');
            currentEl.classList.remove('translate-x-0', 'relative');

            // Show prev
            const prevEl = document.getElementById(`step-${step}`);
            prevEl.classList.remove('-translate-x-[110%]', 'opacity-0', 'pointer-events-none');
            prevEl.classList.add('translate-x-0', 'relative');

            currentStep = step;
            updateProgress(step);
        }

        function resetForm() {
            // Reset to step 1
             // Hide current
             const currentEl = document.getElementById(`step-4`);
            currentEl.classList.add('translate-x-[110%]', 'opacity-0', 'pointer-events-none');
            currentEl.classList.remove('translate-x-0', 'relative');

            const firstEl = document.getElementById(`step-1`);
            firstEl.classList.remove('-translate-x-[110%]', 'opacity-0', 'pointer-events-none');
            firstEl.classList.add('translate-x-0', 'relative');

            currentStep = 1;
            updateProgress(1);
        }

        // Mock Selection UI Helpers
        function selectDate(btn) {
            document.querySelectorAll('.date-btn').forEach(b => {
                b.classList.remove('bg-gray-900', 'text-white', 'shadow-md');
                b.classList.add('text-gray-600', 'hover:bg-white');
            });
            btn.classList.remove('text-gray-600', 'hover:bg-white');
            btn.classList.add('bg-gray-900', 'text-white', 'shadow-md');
        }

        function selectTime(btn) {
            document.querySelectorAll('.time-btn').forEach(b => {
                b.classList.remove('bg-gray-900', 'text-white', 'shadow-md', 'border-gray-900');
                b.classList.add('text-gray-600', 'border-gray-200');
            });
            btn.classList.remove('text-gray-600', 'border-gray-200');
            btn.classList.add('bg-gray-900', 'text-white', 'shadow-md', 'border-gray-900');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px] opacity-40 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
</div>

<nav className="fixed w-full z-50 transition-all duration-300 top-0 glass-panel border-b border-gray-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<img alt="Logo" className="group-hover:scale-105 transition-transform duration-300 w-24 h-15 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eebc983f-78f8-415b-b659-7eb889196011_320w.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#experience">Ventures</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-base font-medium hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-gray-200" onclick="scrollToBooking()">
                    Book Appointment
                </button>
</div>

<button className="md:hidden p-2 text-gray-600" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute w-full bg-white border-b border-gray-100 px-6 py-4 flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-gray-600" href="#about">About</a>
<a className="text-lg font-medium text-gray-600" href="#experience">Ventures</a>
<button className="w-full bg-gray-900 text-white py-3 rounded-lg text-lg font-medium" onclick="scrollToBooking()">Book Appointment</button>
</div>
</nav>
<main className="pt-28 pb-20">

<section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center animate-enter">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8 hover:border-gray-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Open for select partnerships</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-8">
                Building logic from <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-300% animate-gradient">chaos &amp; complexity.</span>
</h1>
<p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
                I'm Joshua Daniel Dunn. A founder and product architect designing systems that scale. I help visionaries turn abstract ideas into tangible reality.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl text-lg font-medium hover:bg-black hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 group flex items-center justify-center gap-2" onclick="scrollToBooking()">
                    Start a Conversation
                    <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2" onclick="window.location.href='mailto:contact@joshuadanieldunn.com'">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    Email Me
                </button>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 observer-fade transition-all duration-700">
<div className="text-center group cursor-default">
<div className="text-3xl font-medium text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">10+</div>
<div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl font-medium text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">$50M+</div>
<div className="text-sm text-gray-500 uppercase tracking-wide">Value Created</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl font-medium text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">3</div>
<div className="text-sm text-gray-500 uppercase tracking-wide">Exits</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl font-medium text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">Unltd</div>
<div className="text-sm text-gray-500 uppercase tracking-wide">Possibilities</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="experience">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 observer-fade transition-all duration-700">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Journey &amp; Ventures</h2>
<p className="text-xl text-gray-500 max-w-xl">A curated timeline of problems solved and companies built.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors mt-4 md:mt-0" href="#">
                    View Full Resume <svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 observer-fade duration-700">
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-crown w-6 h-6" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Founder &amp; CEO</h3>
<p className="text-base text-gray-500 mb-6">Current Venture • 2020 - Present</p>
<p className="text-lg text-gray-600 leading-relaxed">
                            Leading strategic direction and product architecture. Scaled operations from zero to seven figures ARR within 18 months through rigorous UX optimization.
                        </p>
</div>
</div>

<div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 observer-fade delay-100 duration-700">
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Product Architect</h3>
<p className="text-base text-gray-500 mb-6">Tech Solutions Inc • 2017 - 2020</p>
<p className="text-lg text-gray-600 leading-relaxed">
                            Overhauled legacy systems for enterprise clients. Designed internal tools that increased workflow efficiency by 40% across engineering teams.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 scroll-mt-24" id="booking-section">
<div className="relative bg-white rounded-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden observer-fade transition-all duration-700">

<div className="bg-gray-50/50 border-b border-gray-100 p-8 md:p-10 text-center">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">Let's Build Something</h2>
<p className="text-lg text-gray-500">Select a time to discuss your vision, investment opportunities, or collaboration.</p>
</div>
<div className="p-0 md:p-2">

<div className="flex justify-between items-center px-8 pt-8 pb-4 max-w-2xl mx-auto">
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium transition-colors duration-300" id="ind-1">1</div>
<span className="text-xs font-medium text-gray-900">Intent</span>
</div>
<div className="flex-1 h-px bg-gray-200 mx-4 relative">
<div className="absolute left-0 top-0 h-full bg-gray-900 w-0 transition-all duration-500" id="line-1"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center text-sm font-medium transition-colors duration-300" id="ind-2">2</div>
<span className="text-xs font-medium text-gray-400">Time</span>
</div>
<div className="flex-1 h-px bg-gray-200 mx-4 relative">
<div className="absolute left-0 top-0 h-full bg-gray-900 w-0 transition-all duration-500" id="line-2"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center text-sm font-medium transition-colors duration-300" id="ind-3">3</div>
<span className="text-xs font-medium text-gray-400">Details</span>
</div>
</div>

<div className="relative min-h-[400px] p-6 md:p-10">

<div className="transition-all duration-500 ease-in-out absolute inset-0 p-6 md:p-10 flex flex-col items-center w-full" id="step-1">
<div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">

<button className="group text-left p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 flex flex-col gap-3" onclick="nextStep(2, 'Partnership')">
<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
<svg className="lucide lucide-briefcase w-5 h-5 text-gray-700" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-lg font-medium text-gray-900">Partnership Inquiry</span>
<span className="text-sm text-gray-500">Discuss potential business synergy or joint ventures.</span>
</button>

<button className="group text-left p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 flex flex-col gap-3" onclick="nextStep(2, 'Investment')">
<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
<svg className="lucide lucide-trending-up w-5 h-5 text-gray-700" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-lg font-medium text-gray-900">Investment</span>
<span className="text-sm text-gray-500">Pitch decks, funding opportunities, and angel investing.</span>
</button>

<button className="group text-left p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 flex flex-col gap-3" onclick="nextStep(2, 'Networking')">
<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
<svg className="lucide lucide-coffee w-5 h-5 text-gray-700" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<span className="text-lg font-medium text-gray-900">Networking</span>
<span className="text-sm text-gray-500">General connect, mentorship, or press inquiries.</span>
</button>

<button className="group text-left p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 flex flex-col gap-3" onclick="nextStep(2, 'Product')">
<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
<svg className="lucide lucide-layout w-5 h-5 text-gray-700" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<span className="text-lg font-medium text-gray-900">Product Consultation</span>
<span className="text-sm text-gray-500">Expert UI/UX and product strategy advice.</span>
</button>
</div>
</div>

<div className="translate-x-[110%] opacity-0 pointer-events-none transition-all duration-500 ease-in-out absolute inset-0 p-6 md:p-10 flex flex-col items-center w-full" id="step-2">
<div className="w-full max-w-2xl">
<h3 className="text-lg font-medium text-gray-900 mb-6">Select Availability</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex justify-between items-center mb-4">
<span className="font-medium text-gray-900">October 2023</span>
<div className="flex gap-2">
<button className="p-1 hover:bg-gray-200 rounded"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-1 hover:bg-gray-200 rounded"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
<span className="text-gray-400 text-xs">S</span>
<span className="text-gray-400 text-xs">M</span>
<span className="text-gray-400 text-xs">T</span>
<span className="text-gray-400 text-xs">W</span>
<span className="text-gray-400 text-xs">T</span>
<span className="text-gray-400 text-xs">F</span>
<span className="text-gray-400 text-xs">S</span>
</div>
<div className="grid grid-cols-7 gap-1">

<div className="p-2"></div><div className="p-2"></div>

<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">1</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">2</button>
<button className="date-btn p-2 text-sm rounded-lg bg-gray-900 text-white shadow-md" onclick="selectDate(this)">3</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">4</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">5</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">6</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">7</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">8</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">9</button>
<button className="date-btn p-2 text-sm rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600" onclick="selectDate(this)">10</button>
</div>
</div>

<div className="space-y-2 max-h-[280px] overflow-y-auto no-scrollbar pr-2">
<button className="time-btn w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all text-sm font-medium" onclick="selectTime(this)">09:00 AM EST</button>
<button className="time-btn w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all text-sm font-medium" onclick="selectTime(this)">10:30 AM EST</button>
<button className="time-btn w-full text-left px-4 py-3 rounded-lg border border-gray-900 bg-gray-900 text-white shadow-md transition-all text-sm font-medium" onclick="selectTime(this)">01:00 PM EST</button>
<button className="time-btn w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all text-sm font-medium" onclick="selectTime(this)">03:00 PM EST</button>
<button className="time-btn w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all text-sm font-medium" onclick="selectTime(this)">04:30 PM EST</button>
</div>
</div>
<div className="mt-8 flex justify-between">
<button className="text-gray-500 hover:text-gray-900 text-sm font-medium px-4 py-2" onclick="prevStep(1)">Back</button>
<button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors" onclick="nextStep(3)">Continue</button>
</div>
</div>
</div>

<div className="translate-x-[110%] opacity-0 pointer-events-none transition-all duration-500 ease-in-out absolute inset-0 p-6 md:p-10 flex flex-col items-center w-full" id="step-3">
<form className="w-full max-w-lg space-y-5" onsubmit="event.preventDefault(); nextStep(4);">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">First Name</label>
<input className="w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Last Name</label>
<input className="w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Email Address</label>
<input className="w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Phone Number (Optional)</label>
<input className="w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Anything specific to discuss?</label>
<textarea className="w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300 resize-none" placeholder="I'd like to talk about..." rows="2"></textarea>
</div>
<div className="mt-8 flex justify-between items-center pt-4">
<button className="text-gray-500 hover:text-gray-900 text-sm font-medium px-4" onclick="prevStep(2)" type="button">Back</button>
<button className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 shadow-lg shadow-gray-200 transition-all flex items-center gap-2" type="submit">
                                        Confirm Booking <svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
</form>
</div>

<div className="translate-x-[110%] opacity-0 pointer-events-none transition-all duration-500 ease-in-out absolute inset-0 p-6 md:p-10 flex flex-col items-center justify-center text-center w-full" id="step-4">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
<svg className="lucide lucide-check w-8 h-8" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-2xl font-medium text-gray-900 mb-2">You're booked!</h3>
<p className="text-lg text-gray-500 max-w-sm mb-8">A calendar invitation has been sent to your email. I look forward to speaking with you.</p>
<button className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600" onclick="resetForm()">Book another session</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pb-12 pt-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<img alt="Logo" className="h-8 w-auto mb-6 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eebc983f-78f8-415b-b659-7eb889196011_320w.png" style={{}}/>
<p className="text-base text-gray-500 leading-relaxed">
                    Designing interfaces for the future. Based in Miami, FL.
                </p>
</div>
<div className="flex gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Contact</h4>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="mailto:contact@joshuadanieldunn.com">contact@joshuadanieldunn.com</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="tel:9549099997">954.909.9997</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Social</h4>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">LinkedIn</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Twitter / X</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">AngelList</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<p>© 2023 Joshua Daniel Dunn. All rights reserved.</p>
<p>Designed with precision.</p>
</div>
</footer>


    </>
  );
}
