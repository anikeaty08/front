import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.chevron-icon');
            
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
    
    lucide.createIcons();
});



        lucide.createIcons();

        const toggleBtn = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        toggleBtn?.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
            const icon = toggleBtn.querySelector('i');
            const isMenuOpen = !navMenu.classList.contains('hidden');
            icon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c956db0f-553e-416a-999b-48f537a5aff1_3840w.jpg")'}}></div>
<main className="max-w-7xl lg:px-8 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="sm:p-10 lg:p-14 bg-slate-800/50 border-slate-700/50 border rounded-[50px] pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl">

<nav className="relative z-10">
<div className="flex sm:px-6 bg-slate-800/80 border-slate-700/50 border rounded-2xl pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white bg-gradient-to-l from-rose-300 to-rose-500">
<svg className="lucide lucide-flower w-5 h-5" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
</span>
<span className="text-base font-medium tracking-tight hidden sm:block text-white font-sans">Serenity</span>
</a>

<ul className="hidden sm:flex items-center gap-8 text-sm font-medium" id="nav-menu">
<li className=""><a className="text-white hover:text-cyan-300 transition-colors font-sans" href="#" style={{}}>Classes</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#" style={{}}>Meditation</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#" style={{}}>Retreats</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#" style={{}}>About</a></li>
</ul>

<button className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-700/50 transition-colors" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>

<div className="hidden sm:block">
<a className="ml-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition hover:from-cyan-600 hover:to-amber-600 text-white bg-gradient-to-l from-rose-300 to-rose-500 font-sans" href="#" style={{}}>Book Class</a>
</div>
</div>
</nav>

<div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

<div className="">
<h1 className="sm:text-5xl lg:text-6xl text-4xl text-white tracking-tight font-instrument-serif font-normal">Find Your Inner Peace. Transform Your Journey.</h1>
<p className="mt-6 text-lg max-w-lg text-slate-300 font-sans">Discover the transformative power of yoga with our expert-led classes, mindful meditation sessions, and supportive community.</p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium shadow-sm transition hover:from-cyan-600 hover:to-amber-600 text-white bg-gradient-to-l from-rose-300 to-rose-500 font-sans" href="#" style={{}}>Start Your Journey</a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-600 font-medium transition hover:border-cyan-400 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-300 font-sans" href="#" style={{}}>View Schedule</a>
</div>
<div className="mt-16 flex items-start gap-12">
<div>
<p className="text-4xl text-white font-instrument-serif font-normal">500+</p>
<p className="mt-1 text-sm text-slate-400 font-sans">happy students</p>
</div>
<div className="w-px h-12 hidden md:block bg-slate-600"></div>
<div>
<p className="text-4xl text-white font-instrument-serif font-normal">10+</p>
<p className="mt-1 text-sm text-slate-400 font-sans">years experience</p>
</div>
</div>
</div>

<div className="relative h-[340px] sm:h-[420px] lg:h-[480px]">
<div className="absolute inset-0 -translate-x-4 sm:-translate-x-8">
<img alt="Yoga practice" className="w-full h-full object-cover rounded-xl border border-slate-700/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f32d1c8-d81d-460c-ab87-59281e62b82a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
</div>
</div>
</div>

<section className="mt-20">
<h2 className="text-3xl tracking-tight text-white font-instrument-serif font-normal">Nurture Your Mind, Body &amp; Soul</h2>
<p className="mt-4 max-w-2xl text-lg text-slate-300 font-sans">Experience holistic wellness through our comprehensive approach to yoga, meditation, and mindful living.</p>
<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div className="flex flex-col items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/70 transition">
<svg className="lucide lucide-heart w-7 h-7 text-purple-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<h3 className="text-xl font-medium text-white font-sans">Hatha Yoga</h3>
<p className="text-slate-300 text-base font-sans">Gentle, slow-paced classes focusing on breath, alignment, and mindful movement for all levels.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/70 transition">
<svg className="lucide lucide-zap w-7 h-7 text-pink-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="text-xl font-medium text-white font-sans">Vinyasa Flow</h3>
<p className="text-slate-300 text-base font-sans">Dynamic sequences that link breath with movement, building strength, flexibility, and focus.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/70 transition">
<svg className="lucide lucide-moon w-7 h-7 text-blue-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<h3 className="text-xl font-medium text-white font-sans">Meditation</h3>
<p className="text-slate-300 text-base font-sans">Guided mindfulness practices to cultivate inner peace, clarity, and emotional balance.</p>
</div>
</div>
</section>

<section className="mt-20 border-t border-slate-700/50 pt-16">
<h2 className="text-3xl tracking-tight text-white font-instrument-serif font-normal">Membership Options</h2>
<p className="mt-4 max-w-2xl text-lg text-slate-300 font-sans">Choose a plan that supports your wellness journey and fits your lifestyle.</p>
<div className="mt-12 grid gap-8 sm:grid-cols-3">
<div className="flex flex-col rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm p-8 hover:bg-slate-800/50 transition">
<h3 className="text-xl font-medium text-white font-sans">Drop-In</h3>
<p className="mt-2 text-slate-300 font-sans">Perfect for trying out classes.</p>
<p className="mt-6 text-4xl text-white font-instrument-serif font-normal">$25<span className="text-lg font-normal text-slate-400 font-sans">/class</span></p>
<ul className="mt-8 space-y-4 text-slate-300" role="list">
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Single class access
                            </li>
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                All class types
                            </li>
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Mat rental included
                            </li>
</ul>
<a className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:from-cyan-600 hover:to-amber-600 bg-gradient-to-l from-rose-300 to-rose-500 font-sans" href="#" style={{}}>Book Now</a>
</div>
<div className="flex flex-col rounded-2xl border-2 border-cyan-500/50 bg-slate-800/50 backdrop-blur-sm p-8 shadow-lg" style={{}}>
<h3 className="text-xl font-medium text-white font-sans">Monthly</h3>
<p className="mt-2 text-slate-300 font-sans">Unlimited classes for dedicated practice.</p>
<p className="mt-6 text-4xl text-white font-instrument-serif font-normal">$129<span className="text-lg font-normal text-slate-400 font-sans">/month</span></p>
<ul className="mt-8 space-y-4 text-slate-300" role="list">
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Unlimited classes
                            </li>
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Priority booking
                            </li>
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Workshop discounts
                            </li>
</ul>
<a className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:from-cyan-600 hover:to-amber-600 bg-gradient-to-l from-rose-300 to-rose-500 font-sans" href="#" style={{}}>Start Membership</a>
</div>
<div className="flex flex-col rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm p-8 hover:bg-slate-800/50 transition">
<h3 className="text-xl font-medium text-white font-sans">Teacher Training</h3>
<p className="mt-2 text-slate-300 font-sans">200-hour certification program.</p>
<p className="mt-6 text-4xl text-white font-instrument-serif font-normal">$2,500</p>
<ul className="mt-8 space-y-4 text-slate-300" role="list">
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Comprehensive curriculum
                            </li>
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Expert instructors
                            </li>
<li className="flex items-center gap-3 font-sans">
<svg className="lucide lucide-check w-5 h-5 text-purple-400 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Yoga Alliance certification
                            </li>
</ul>
<a className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-500 px-6 py-3 text-sm font-medium text-cyan-400 shadow-sm transition hover:bg-cyan-500/10 font-sans" href="#" style={{}}>Learn More</a>
</div>
</div>
</section><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><title>FAQ Section</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/><style>
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-instrument-serif { font-family: 'Instrument Serif', serif; }
    </style><section className="mt-20 border-t border-slate-700/50 pt-16">
<div className="max-w-3xl">
<h2 className="text-3xl tracking-tight text-white font-instrument-serif font-normal">Frequently Asked Questions</h2>
<p className="mt-4 text-lg text-slate-300 font-sans">Everything you need to know about our classes, memberships, and studio policies.</p>
</div>
<div className="mt-12 space-y-6">
<div className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm overflow-hidden">
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition faq-toggle">
<span className="text-lg font-medium text-white font-sans">What should I bring to my first class?</span>
<svg className="w-5 h-5 text-slate-400 transform transition-transform chevron-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 text-slate-300 font-sans faq-content">
<p className="leading-relaxed">Just bring yourself and an open mind! We provide yoga mats, blocks, straps, and all other props. Wear comfortable, breathable clothing that allows you to move freely. We recommend arriving 10-15 minutes early to get settled and meet your instructor.</p>
</div>
</div>
<div className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm overflow-hidden">
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition faq-toggle">
<span className="text-lg font-medium text-white font-sans">Are classes suitable for beginners?</span>
<svg className="w-5 h-5 text-slate-400 transform transition-transform chevron-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 text-slate-300 font-sans faq-content hidden">
<p className="leading-relaxed">Absolutely! Our Hatha and gentle flow classes are perfect for beginners. All of our instructors are trained to offer modifications and alternatives for every pose. We encourage new students to inform their teacher before class so they can provide extra guidance and support.</p>
</div>
</div>
<div className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm overflow-hidden">
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition faq-toggle">
<span className="text-lg font-medium text-white font-sans">Can I cancel or reschedule my class?</span>
<svg className="w-5 h-5 text-slate-400 transform transition-transform chevron-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 text-slate-300 font-sans faq-content hidden">
<p className="leading-relaxed">Yes, you can cancel or reschedule up to 4 hours before class starts without penalty. Cancellations made less than 4 hours before class will result in a forfeit of your class credit. You can easily manage your bookings through our online portal or mobile app.</p>
</div>
</div>
<div className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm overflow-hidden">
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition faq-toggle">
<span className="text-lg font-medium text-white font-sans">Do you offer private sessions?</span>
<svg className="w-5 h-5 text-slate-400 transform transition-transform chevron-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 text-slate-300 font-sans faq-content hidden">
<p className="leading-relaxed">Yes! Private sessions are available with all of our certified instructors. One-on-one sessions are $85 for 60 minutes, and semi-private sessions (2-3 people) are $120. Private sessions are perfect for beginners, injury recovery, or deepening your practice with personalized attention.</p>
</div>
</div>
<div className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm overflow-hidden">
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition faq-toggle">
<span className="text-lg font-medium text-white font-sans">What is your refund policy?</span>
<svg className="w-5 h-5 text-slate-400 transform transition-transform chevron-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 text-slate-300 font-sans faq-content hidden">
<p className="leading-relaxed">Monthly memberships can be cancelled anytime with 30 days notice. Class packages expire 6 months from purchase date but can be frozen once for up to 3 months due to illness, injury, or travel. Workshop and retreat fees are non-refundable but can be transferred to another person.</p>
</div>
</div>
<div className="border border-slate-700/50 rounded-2xl bg-slate-800/30 backdrop-blur-sm overflow-hidden">
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition faq-toggle">
<span className="text-lg font-medium text-white font-sans">Do you have parking available?</span>
<svg className="w-5 h-5 text-slate-400 transform transition-transform chevron-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 text-slate-300 font-sans faq-content hidden">
<p className="leading-relaxed">Yes! We have a dedicated parking lot with 20 spaces behind the studio. Street parking is also available on Wellness Street. The studio is easily accessible by public transit - we're just two blocks from the Metro Green Line station.</p>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f34fe4a1-55ad-41cc-b1ca-566cffdbf729_1600w.jpg)] bg-cover border-cyan-500/20 rounded-2xl mt-20 shadow-lg backdrop-blur-sm" style={{}}>
<div className="max-w-4xl text-center mr-auto ml-auto pt-16 pr-8 pb-16 pl-8">
<h2 className="text-3xl tracking-tight text-white font-instrument-serif font-normal">Begin Your Transformation Today</h2>
<p className="mt-4 text-lg text-cyan-100 max-w-xl mx-auto font-sans" style={{}}>Join our welcoming community and discover the profound benefits of yoga practice. Your journey to wellness starts here.</p>
<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-cyan-600 font-medium shadow-md hover:bg-cyan-50 transition font-sans" href="#" style={{}}>Try Free Class</a>
<a className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-white font-medium shadow-md hover:bg-white/10 transition font-sans" href="#">View Schedule</a>
</div>
</div>
</section><footer className="mt-20 border-t border-slate-700/50 pt-16 pb-8">
<div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center justify-center w-10 h-10 roundel from-rose-300 to-rose-500">
<svg className="w-[20px] h-[20px] text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path className="" d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path>
<path d="M12 7.5V9"></path>
<path d="M7.5 12H9"></path>
<path d="M16.5 12H15"></path>
<path d="M12 16.5V15"></path>
<path d="m8 8 1.88 1.88"></path>
<path d="M14.12 9.88 16 8"></path>
<path d="m8 16 1.88-1.88"></path>
<path d="M14.12 14.12 16 16"></path>
</svg>
</span>
<span className="text-xl font-medium tracking-tight text-white font-instrument-serif">Serenity</span>
</div>
<p className="text-slate-300 text-sm leading-relaxed font-sans mb-6">Transform your life through the ancient practice of yoga. Find balance, strength, and inner peace in our welcoming community.</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37-4.5-4.5A2.5 2.5 0 0 0 9 8.1v7.8a2.5 2.5 0 0 0 2.5 1.3 2.5 2.5 .5V9.87z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-white font-medium mb-6 font-sans">Classes</h3>
<ul className="space-y-4 text-sm">
<li className=""><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Hatha Yoga</a></li>
<li className=""><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Vinyasa Flow</a></li>
<li className=""><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Yin Yoga</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Power Yoga</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Meditation</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Breathwork</a></li>
</ul>
</div>

<div className="">
<h3 className="text-white font-medium mb-6 font-sans">Studio</h3>
<ul className="space-y-4 text-sm">
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Our Teachers</a></li>
<li className=""><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Retreats</a></li>
<li className=""><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Teacher Training</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Workshops</a></li>
<li><a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Private Sessions</a></li>
</ul>
</div>

<div className="">
<h3 className="text-white font-medium mb-6 font-sans">Contact</h3>
<ul className="space-y-4 text-sm">
<li className="flex gap-3 items-start">
<svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-slate-400 font-sans">123 Wellness StreetMindful City, MC 12345</span>
</li><li className="flex gap-3 items-start">
<svg className="mt-0.5 flex-shrink-0 w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="text-slate-400">555.111.2222</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-10 5L2 7"></path>
</svg>
<a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="mailto:hello@serenity.yoga">hello@serenity.yoga</a>
</li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400 font-sans">© 2024 Serenity Yoga Studio. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm">
<a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Privacy Policy</a>
<a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Terms of Service</a>
<a className="text-slate-400 hover:text-cyan-300 transition-colors font-sans" href="#">Cookie Policy</a>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
