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



        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Show menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>';
            } else {
                // Hide menu
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = ''; // Allow scrolling
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
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
      


<div className="hidden lg:block bg-[#0d748f] text-white py-2 text-xs font-medium">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-white/80 transition-colors" href="https://maps.app.goo.gl/nn37RjjVsMACNTJt7" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                    31 Covered Bridge Road, Cherry Hill, NJ 08034
                </a>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
                    Mon, Wed, Thu: 9-5 | Tue: 8-3 | Fri: 9-2
                </span>
</div>
<div className="flex items-center gap-4">
<a href="https://www.facebook.com/cherryhilldentalexcellence1/" target="_blank"><iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon></a>
<a href="https://www.instagram.com/chdentalexcellence/" target="_blank"><iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>

<header className="fixed top-0 lg:top-8 left-0 right-0 z-50 w-full p-4 lg:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">

<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-[#0d748f] leading-none">Cherry Hill</span>
<span className="text-xs uppercase tracking-widest font-semibold text-[#74988c]">Dental Excellence</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-[#0d748f] transition-colors" href="#about">Dr. A &amp; Team</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#0d748f] transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#0d748f] transition-colors" href="#technology">Technology</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#0d748f] transition-colors" href="#patients">New Patients</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#0d748f] transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-bold text-[#0d748f] hover:text-[#74988c] transition-colors" href="tel:8564282550">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (856) 428-2550
                </a>
<a className="flex items-center gap-2 bg-[#0d748f] text-sm font-semibold px-5 py-2.5 rounded-full text-white hover:bg-[#74988c] transition-colors shadow-lg shadow-[#0d748f]/20" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-slate-900 z-50 relative p-1" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white opacity-0 pointer-events-none flex flex-col pt-32 px-6 pb-6 lg:hidden" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-bold text-slate-800" href="#about">About Dr. A</a>
<a className="mobile-link text-2xl font-bold text-slate-800" href="#services">Services</a>
<a className="mobile-link text-2xl font-bold text-slate-800" href="#patients">New Patients</a>
<a className="mobile-link text-2xl font-bold text-slate-800" href="#contact">Contact</a>
<hr className="border-slate-100 my-4"/>
<a className="text-xl font-bold text-[#0d748f] flex justify-center items-center gap-2" href="tel:8564282550">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (856) 428-2550
            </a>
<a className="mobile-link bg-[#0d748f] text-white text-lg font-semibold py-4 rounded-xl shadow-xl shadow-[#0d748f]/20" href="#book">
                Request Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#E6EEF1]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-white text-[#0d748f] shadow-sm tracking-wide uppercase">
                        Accepting New Patients
                    </span>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Personalized Care &amp; <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d748f] to-[#74988c]">Advanced Solutions</span> <br/>
                        For Every Smile.
                    </h1>
<p className="text-lg text-slate-600 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Led by Dr. Zahra Afsharzand ("Dr. A"), former faculty at UPenn. Experience world-class dental care designed for your comfort in Cherry Hill, NJ.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 bg-[#0d748f] text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-[#0d748f]/20 hover:shadow-[#0d748f]/40 hover:-translate-y-1 hover:bg-[#095c71] text-white" href="#book">
                            Book Appointment
                            <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-base font-semibold px-8 py-4 rounded-full transition-all border border-slate-200 hover:border-[#74988c] hover:text-[#0d748f] text-slate-700" href="tel:8564282550">
                            Call (856) 428-2550
                        </a>
</div>

<div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="18"></iconify-icon>
                            5-Star Rated
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#74988c]" icon="solar:shield-check-linear" width="18"></iconify-icon>
                            Accepting Most Insurance
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#0d748f]" icon="solar:medal-ribbon-star-linear" width="18"></iconify-icon>
                            20+ Years Experience
                        </div>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">

<img alt="Cherry Hill Dental Excellence Patient" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0d748f]/80 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
<div className="flex items-center gap-4">
<div className="bg-[#E6EEF1] p-3 rounded-full text-[#0d748f]">
<iconify-icon icon="solar:user-heart-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-[#74988c]">Our Promise</p>
<p className="font-bold text-slate-900">Highest Standards of Care &amp; Compassion</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#74988c] font-bold tracking-widest text-sm uppercase">Comprehensive Care</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6 text-slate-900">
                    Our Dental <span className="text-[#0d748f]">Services</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine checkups to complex prosthodontic reconstruction, we provide precise and comfortable care.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-[#E6EEF1] transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0d748f] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tooth-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General Dentistry</h3>
<p className="text-slate-500 mb-4">Exams, cleanings, and preventative care to keep your smile healthy.</p>
<ul className="text-sm space-y-2 text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Exams &amp; Cleanings</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Periodontal Care</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-[#E6EEF1] transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0d748f] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-4">Smile makeovers designed to boost your confidence.</p>
<ul className="text-sm space-y-2 text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Veneers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-[#E6EEF1] transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0d748f] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Implants &amp; Surgery</h3>
<p className="text-slate-500 mb-4">Restoring function and aesthetics with advanced surgical care.</p>
<ul className="text-sm space-y-2 text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Oral Surgery</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-[#E6EEF1] transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0d748f] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Orthodontics</h3>
<p className="text-slate-500 mb-4">Straighten your teeth discreetly and effectively.</p>
<ul className="text-sm space-y-2 text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Invisalign®</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Clear Aligners</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-[#E6EEF1] transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0d748f] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sleeping-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Specialty Care</h3>
<p className="text-slate-500 mb-4">Advanced solutions for pain and sleep issues.</p>
<ul className="text-sm space-y-2 text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Sleep Apnea / NightLase®</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> TMJ Therapy / Botox</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-[#E6EEF1] transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0d748f] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Laser Dentistry</h3>
<p className="text-slate-500 mb-4">Cutting-edge technology for precise treatments.</p>
<ul className="text-sm space-y-2 text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> Fotona® Laser</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#74988c]" icon="solar:check-circle-linear"></iconify-icon> LipLase® / SmoothLase®</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0d748f] relative overflow-hidden text-white" id="about">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="relative">

<img alt="Dr. Zahra Afsharzand" className="rounded-[2.5rem] shadow-2xl border-4 border-[#74988c]/30" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-6 rounded-2xl shadow-xl max-w-xs">
<p className="font-bold text-lg mb-1">Dr. Zahra Afsharzand</p>
<p className="text-[#0d748f] text-sm font-semibold">DMD, Prosthodontist</p>
</div>
</div>
</div>
<div className="lg:w-1/2 space-y-6">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meet "Dr. A"</h2>
<h3 className="text-xl text-[#74988c] font-medium">A Passion for Excellence in Dentistry</h3>
<p className="text-white/90 leading-relaxed text-lg">
                        Dr. Zahra Afsharzand, better known as “Dr. A” by her loyal patients, has been providing the finest dental care in the region. A former faculty member at the University of Pennsylvania School of Dental Medicine, Dr. A and her staff are always on the cutting edge of advancements in dentistry.
                    </p>
<p className="text-white/90 leading-relaxed text-lg">
                        She specializes in complex prosthodontic reconstruction, implant dentistry, and cosmetic smile makeovers, ensuring that every patient receives the highest standards of care, skill, and compassion.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-white text-[#0d748f] font-bold px-8 py-3.5 rounded-full hover:bg-[#E6EEF1] transition-colors" href="#book">
                            Schedule with Dr. A
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E6EEF1]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 lg:col-span-2">
<div className="flex flex-col md:flex-row justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-bold text-slate-900">Cherry Hill Office</h3>
<p className="text-[#0d748f] font-medium mt-1">31 Covered Bridge Road, Cherry Hill, NJ 08034</p>
</div>
<a className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#0d748f] bg-[#0d748f]/10 px-4 py-2 rounded-full hover:bg-[#0d748f]/20 transition-colors" href="https://maps.app.goo.gl/nn37RjjVsMACNTJt7" target="_blank">
<iconify-icon icon="solar:map-arrow-right-bold" width="18"></iconify-icon>
                            Get Directions
                        </a>
</div>

<div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12241.765140660485!2d-74.9886901!3d39.9091398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6cb424f12b2f3%3A0xeacbbee8ceafbf3a!2sCherry%20Hill%20Dental%20Excellence!5e0!3m2!1sen!2sus!4v1702919585283!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-[#E6EEF1] rounded-xl text-[#0d748f]">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-500 uppercase">Phone</p>
<a className="text-lg font-bold text-slate-900 hover:text-[#0d748f]" href="tel:8564282550">(856) 428-2550</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-[#E6EEF1] rounded-xl text-[#0d748f]">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-500 uppercase">Contact</p>
<a className="text-lg font-bold text-slate-900 hover:text-[#0d748f]" href="#book">Request Appointment</a>
</div>
</div>
</div>
</div>

<div className="bg-[#0d748f] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-bold"></iconify-icon> Office Hours
                    </h3>
<ul className="space-y-4 text-sm font-medium">
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Monday</span>
<span>9:00 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Tuesday</span>
<span>8:00 am - 3:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Wednesday</span>
<span>9:00 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Thursday</span>
<span>9:00 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Friday</span>
<span>9:00 am - 2:00 pm</span>
</li>
<li className="flex justify-between opacity-60">
<span>Sat - Sun</span>
<span>Closed</span>
</li>
</ul>
<div className="mt-8 pt-4 border-t border-white/20">
<p className="text-sm opacity-90 mb-4">Experiencing a dental emergency?</p>
<a className="w-full block text-center bg-white text-[#0d748f] font-bold py-3 rounded-xl hover:bg-[#E6EEF1] transition-colors" href="tel:8564282550">
                            Call Emergency Line
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    Request an <span className="text-[#0d748f]">Appointment</span>
</h2>
<p className="text-lg text-slate-500">
                    Fill out the form below and our team will contact you to confirm your visit.
                </p>
</div>
<div className="bg-[#E6EEF1] p-8 md:p-12 rounded-[2.5rem]">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
<input className="w-full rounded-xl border-none p-4 text-slate-900 focus:ring-2 focus:ring-[#0d748f] outline-none shadow-sm" placeholder="John Doe" type="text"/>
</div>

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
<input className="w-full rounded-xl border-none p-4 text-slate-900 focus:ring-2 focus:ring-[#0d748f] outline-none shadow-sm" placeholder="(856) 555-0123" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
<input className="w-full rounded-xl border-none p-4 text-slate-900 focus:ring-2 focus:ring-[#0d748f] outline-none shadow-sm" placeholder="john@example.com" type="email"/>
</div>

<div className="relative">
<label className="block text-sm font-bold text-slate-700 mb-2">Reason for Visit</label>
<select className="w-full rounded-xl border-none p-4 text-slate-900 focus:ring-2 focus:ring-[#0d748f] outline-none shadow-sm appearance-none cursor-pointer">
<option>New Patient Exam</option>
<option>Routine Cleaning</option>
<option>Cosmetic Consultation</option>
<option>Invisalign / Orthodontics</option>
<option>Implant Consultation</option>
<option>Tooth Pain / Emergency</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 bottom-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date/Time or Message</label>
<textarea className="w-full rounded-xl border-none p-4 text-slate-900 focus:ring-2 focus:ring-[#0d748f] outline-none shadow-sm" placeholder="I would prefer a morning appointment..." rows="3"></textarea>
</div>
<button className="w-full bg-[#0d748f] hover:bg-[#095c71] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2" type="button">
                        Submit Request
                        <iconify-icon icon="solar:plain-3-bold" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-500 mt-4">
                        *By submitting this form, you agree to be contacted by our office regarding your appointment request.
                        
</p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold tracking-tight mb-10 text-center text-slate-900">Patient <span className="text-[#0d748f]">FAQ</span></h2>
<div className="space-y-4">
<details className="group bg-slate-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold">
<span>Do you accept insurance?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-[#0d748f] sm:p-3 shadow-sm group-open:-rotate-180 transition-transform">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path></svg>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-600">
                        Yes, we accept most major dental insurance plans. Please contact our office with your specific provider information so we can verify your coverage.
                    </p>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold">
<span>Do you offer emergency appointments?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-[#0d748f] sm:p-3 shadow-sm group-open:-rotate-180 transition-transform">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path></svg>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-600">
                        Yes. If you are experiencing pain or have a dental emergency, please call us immediately at (856) 428-2550. We make every effort to see emergency patients the same day.
                    </p>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold">
<span>What is Fotona Laser dentistry?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-[#0d748f] sm:p-3 shadow-sm group-open:-rotate-180 transition-transform">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path></svg>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-600">
                        We use the advanced Fotona® Laser for precise treatments including NightLase® (snoring reduction), LipLase® (lip plumbing), and treating periodontal disease with less discomfort and faster healing times.
                    </p>
</details>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-[#E6EEF1] border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex flex-col" href="#">
<span className="text-xl font-bold tracking-tight text-[#0d748f]">Cherry Hill</span>
<span className="text-xs uppercase tracking-widest font-semibold text-[#74988c]">Dental Excellence</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Personalized care and advanced solutions for every smile. Located conveniently in Cherry Hill, NJ.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white text-[#0d748f] flex items-center justify-center hover:bg-[#0d748f] hover:text-white transition-all shadow-sm" href="https://www.facebook.com/cherryhilldentalexcellence1/" target="_blank">
<iconify-icon icon="solar:facebook-bold" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white text-[#0d748f] flex items-center justify-center hover:bg-[#0d748f] hover:text-white transition-all shadow-sm" href="https://www.instagram.com/chdentalexcellence/" target="_blank">
<iconify-icon icon="solar:instagram-bold" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white text-[#0d748f] flex items-center justify-center hover:bg-[#0d748f] hover:text-white transition-all shadow-sm" href="https://maps.app.goo.gl/nn37RjjVsMACNTJt7" target="_blank">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Services</h4>
<ul className="space-y-3 text-slate-600 font-medium text-sm">
<li><a className="hover:text-[#0d748f] transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-[#0d748f] transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-[#0d748f] transition-colors" href="#">Invisalign®</a></li>
<li><a className="hover:text-[#0d748f] transition-colors" href="#">Implants</a></li>
<li><a className="hover:text-[#0d748f] transition-colors" href="#">TMJ &amp; Sleep Apnea</a></li>
<li><a className="hover:text-[#0d748f] transition-colors" href="#">Fotona® Laser</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#0d748f] shrink-0 mt-0.5" icon="solar:map-point-bold" width="18"></iconify-icon>
<span>31 Covered Bridge Road,<br/>Cherry Hill, NJ 08034</span>
</li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#0d748f] shrink-0" icon="solar:phone-calling-bold" width="18"></iconify-icon>
<a className="hover:text-[#0d748f]" href="tel:8564282550">(856) 428-2550</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Hours</h4>
<ul className="space-y-2 text-slate-600 font-medium text-sm">
<li className="flex justify-between"><span>Mon</span> <span>9:00 am - 5:00 pm</span></li>
<li className="flex justify-between"><span>Tue</span> <span>8:00 am - 3:00 pm</span></li>
<li className="flex justify-between"><span>Wed</span> <span>9:00 am - 5:00 pm</span></li>
<li className="flex justify-between"><span>Thu</span> <span>9:00 am - 5:00 pm</span></li>
<li className="flex justify-between"><span>Fri</span> <span>9:00 am - 2:00 pm</span></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2026 Cherry Hill Dental Excellence. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#0d748f]" href="#">Privacy Policy</a>
<a className="hover:text-[#0d748f]" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
