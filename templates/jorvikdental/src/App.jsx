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
serif: ['DM Serif Display', 'serif'],
},
colors: {
brand: {
50: '#fdf2f2',
100: '#fde8e8',
200: '#fbd5d5',
300: '#f8b4b4',
400: '#f98080',
500: '#f05252',
600: '#e02424',
700: '#c81e1e',
800: '#9b1c1c',
900: '#6F0101', // Original Brand Color
950: '#450a0a',
},
neutral: {
850: '#1f1f1f',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Chat Toggle (Simple Demo Logic)
        let chatOpen = false;
        function toggleChat() {
            const msg = document.getElementById('chat-message');
            const icon = document.getElementById('chat-icon');
            
            chatOpen = !chatOpen;
            
            if(chatOpen) {
                // Open state logic (usually handled by widget iframe)
                msg.style.display = 'block';
                icon.setAttribute('icon', 'solar:close-circle-bold');
            } else {
                msg.style.display = 'none';
                icon.setAttribute('icon', 'solar:chat-round-dots-bold');
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
      

<nav className="fixed w-full z-50 glass border-b border-slate-200/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="window.location.href='#'">
<img alt="Jorvik Dental" className="h-12 w-auto" src="https://static.wixstatic.com/media/00bca1_ab864a631c2e4cc6a5847e2a6b16a7e2~mv2.png/v1/fill/w_209,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00bca1_ab864a631c2e4cc6a5847e2a6b16a7e2~mv2.png"/>
<div className="hidden md:block">
<h1 className="font-serif text-2xl text-brand-900 leading-none">Jorvik</h1>
<span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Dental Practice</span>
</div>
</div>

<div className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" href="#team">Our Team</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" href="#treatments">Treatments</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" href="#offers">Offers</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-slate-800 font-semibold hover:text-brand-900 transition-colors text-sm" href="tel:01904340640">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        01904 340640
                    </a>
<button className="bg-brand-900 hover:bg-brand-800 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Book Online
                    </button>
</div>

<div className="lg:hidden flex items-center">
<button className="text-slate-800 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:hidden hidden bg-white border-t border-slate-100 absolute w-full" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
<a className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-brand-50 rounded-lg" href="#">Home</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-brand-50 rounded-lg" href="#team">Our Team</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-brand-50 rounded-lg" href="#treatments">Treatments</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-brand-50 rounded-lg" href="#offers">Offers</a>
<a className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-brand-50 rounded-lg" href="#contact">Contact Us</a>
<div className="pt-4 mt-4 border-t border-slate-100">
<a className="block text-center w-full bg-slate-100 text-slate-800 font-semibold py-3 rounded-lg mb-3" href="tel:01904340640">
                        Call 01904 340640
                    </a>
<button className="block w-full bg-brand-900 text-white font-semibold py-3 rounded-lg">
                        Book Appointment
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>

<img alt="Dental Practice York" className="w-full h-full object-cover object-center" src="https://static.wixstatic.com/media/00bca1_af05e8a579184539aca882199f4f0a3e~mv2.jpg/v1/fill/w_1408,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GOPR6100%20(1)_edited.jpg"/>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="font-serif text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-6">
                    Exceptional Dental <br/>
<span className="text-brand-900">Care in York.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                    Private dental practice offering gentle, high-quality care in a relaxed environment. From general dentistry to cosmetic transformations.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-brand-900 hover:bg-brand-800 text-white text-base font-medium py-3.5 px-8 rounded-full shadow-lg shadow-brand-900/20 transition-all transform hover:-translate-y-1">
                        Book Consultation
                    </button>
<a className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-base font-medium py-3.5 px-8 rounded-full shadow-sm transition-all flex items-center justify-center gap-2" href="#offers">
                        View Offers
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-900" icon="solar:check-circle-bold"></iconify-icon>
<span>NHS Children Spaces</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-900" icon="solar:check-circle-bold"></iconify-icon>
<span>Free Parking</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-900" icon="solar:check-circle-bold"></iconify-icon>
<span>Emergency Appointments</span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-brand-900 text-white py-12" id="offers">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="font-serif text-3xl mb-2">New Patient Offer £50</h2>
<p className="text-brand-100 opacity-90 max-w-xl">Includes extensive dental check-up, all necessary X-rays, and a bespoke treatment plan. We also offer <strong>Free Cosmetic &amp; Implant Consultations</strong>.</p>
</div>
<button className="bg-white text-brand-900 py-3 px-6 rounded-full font-semibold hover:bg-brand-50 transition-colors whitespace-nowrap">
                    Claim Offer
                </button>
</div>
</div>
</div>

<section className="py-20 bg-white" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-brand-900 rounded-2xl transform rotate-3 opacity-10 transition-transform group-hover:rotate-6"></div>
<img alt="Mrs. Tris Harrison" className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5]" src="https://static.wixstatic.com/media/00bca1_d44a23abaddf448fa035749059fbec07~mv2.jpg/v1/crop/x_76,y_0,w_577,h_756/fill/w_400,h_500,al_c,q_80/Tris_new.jpg"/>
</div>
<div>
<h3 className="text-brand-900 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h3>
<h2 className="font-serif text-4xl text-slate-900 mb-6">Expert Care with a Personal Touch</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        We are a friendly, private dental practice based in York offering exceptional dental care in a comfortable, relaxed environment. 
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Our principal dentist, <strong>Mrs. Tris Harrison BDS MSc PGdip</strong> (GDC: 126536), has over 20 years of experience. We listen to your concerns, assess your needs, and involve you in decision-making to help you achieve better dental health.
                    </p>

<div className="flex gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="RCS England" className="h-10 w-auto" src="https://static.wixstatic.com/media/00bca1_0100a429daf74a8ebccdba630a2826d8~mv2.png/v1/fill/w_200,h_44,al_c,q_85/RCSEng-EduQual-300x75%20(1).png"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="treatments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-slate-900 mb-4">Our Treatments</h2>
<p className="text-slate-600 max-w-2xl mx-auto">Comprehensive dental services tailored to your individual needs.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 mb-4">Composite bonding, veneers, and smile makeovers to boost your confidence.</p>
<span className="text-brand-900 text-sm font-medium flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Dental Implants</h3>
<p className="text-sm text-slate-500 mb-4">Permanent solutions for missing teeth using the latest technology.</p>
<span className="text-brand-900 text-sm font-medium flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">General Dentistry</h3>
<p className="text-sm text-slate-500 mb-4">Routine check-ups, hygiene appointments, fillings, and root canals.</p>
<span className="text-brand-900 text-sm font-medium flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Teeth Whitening</h3>
<p className="text-sm text-slate-500 mb-4">Professional whitening treatments for a brighter, natural smile.</p>
<span className="text-brand-900 text-sm font-medium flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Tooth Straightening</h3>
<p className="text-sm text-slate-500 mb-4">Modern orthodontic solutions for adults and children.</p>
<span className="text-brand-900 text-sm font-medium flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Emergency Care</h3>
<p className="text-sm text-slate-500 mb-4">Fast appointments for toothaches and dental emergencies.</p>
<span className="text-brand-900 text-sm font-medium flex items-center gap-1">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center mb-12">
<div className="flex text-yellow-400 gap-1 mb-2">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h2 className="font-serif text-3xl text-slate-900 text-center">Rated Excellent by Our Patients</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-6 rounded-2xl relative">
<iconify-icon className="text-brand-100 absolute top-4 left-4 text-4xl" icon="bxs:quote-alt-left"></iconify-icon>
<p className="text-slate-700 italic relative z-10 pt-4 mb-4">
                        "Tris and her lovely assistant made me feel at ease straight away. Tris's knowledge is second to none - I feel very safe in her hands and I'd recommend Jorvik Dental Practice to anyone."
                    </p>
<div className="font-medium text-slate-900">- Nicola D.</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl relative">
<iconify-icon className="text-brand-100 absolute top-4 left-4 text-4xl" icon="bxs:quote-alt-left"></iconify-icon>
<p className="text-slate-700 italic relative z-10 pt-4 mb-4">
                        "The best dentist I met since I came to the UK. I strongly recommend Jorvik Dental Practice. All treatment for my teeth was great and the experience was painless!"
                    </p>
<div className="font-medium text-slate-900">- Ovidiu M.</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl relative">
<iconify-icon className="text-brand-100 absolute top-4 left-4 text-4xl" icon="bxs:quote-alt-left"></iconify-icon>
<p className="text-slate-700 italic relative z-10 pt-4 mb-4">
                        "A lovely dental practice. The check ups are thorough. My husband has had a root canal and was very impressed. We'll both be signing up to the dental plan."
                    </p>
<div className="font-medium text-slate-900">- Gill C.</div>
</div>
</div>
<div className="text-center mt-10">
<a className="text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors" href="#">See more reviews on Trustpilot</a>
</div>
</div>
</section>

<footer className="bg-brand-950 text-white pt-16 pb-8 border-t border-brand-900" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h3 className="font-serif text-3xl mb-6">Jorvik Dental</h3>
<p className="text-brand-100 mb-6 max-w-sm opacity-80">
                        Exceptional private dental care in York. We pride ourselves on our gentle approach and modern techniques.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-brand-300 transition-colors bg-white/10 p-2 rounded-full flex items-center justify-center w-10 h-10" href="https://facebook.com">
<iconify-icon icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="text-white hover:text-brand-300 transition-colors bg-white/10 p-2 rounded-full flex items-center justify-center w-10 h-10" href="mailto:info@jorvikdental.co.uk">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-lg mb-4 text-white">Contact</h4>
<ul className="space-y-3 opacity-80 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>6 Westfield House,<br/>Millfield Lane,<br/>Nether Poppleton, York<br/>YO26 6GA</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-300" href="tel:01904340640">01904 340640</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand-300" href="mailto:info@jorvikdental.co.uk">info@jorvikdental.co.uk</a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-lg mb-4 text-white">Opening Hours</h4>
<ul className="space-y-2 opacity-80 text-sm">
<li className="flex justify-between"><span>Mon, Wed, Thu</span> <span>8:30 - 17:30</span></li>
<li className="flex justify-between"><span>Tue, Fri</span> <span>14:00 - 17:30</span></li>
<li className="flex justify-between"><span>Sat</span> <span>Appointment Only</span></li>
<li className="flex justify-between"><span>Sun</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
<p>© 2024 Jorvik Dental Practice. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">

<div className="absolute bottom-16 right-0 bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-slate-100 w-64 mb-2 transform origin-bottom-right transition-all duration-300 chat-float" id="chat-message">
<div className="flex items-start gap-3">
<div className="bg-brand-900 text-white p-1.5 rounded-full flex-shrink-0">
<iconify-icon icon="solar:user-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-800 font-medium">Hi 👋 How can we help you today? Appointments, treatments, or questions?</p>
</div>
</div>

<button className="absolute top-2 right-2 text-slate-400 hover:text-slate-600" onclick="document.getElementById('chat-message').style.display='none'">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>

<button className="bg-brand-900 hover:bg-brand-800 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center" onclick="toggleChat()">
<iconify-icon icon="solar:chat-round-dots-bold" id="chat-icon" width="28"></iconify-icon>
</button>
</div>



    </>
  );
}
