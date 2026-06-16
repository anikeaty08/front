import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const body = document.body;
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open Menu
                menu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
                menu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
                body.classList.add('menu-open');
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
            } else {
                // Close Menu
                menu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
                menu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                body.classList.remove('menu-open');
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#1C1917] text-stone-300 py-3 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
<span className="opacity-90 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A27E] animate-pulse"></span>
                Now Accepting New Patients in Avenel, NJ
            </span>
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors" href="https://beautiquebydrmel.janeapp.com/" target="_blank">
<iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> Client Portal
                </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:7327952721">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> (732) 795-2721
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

<a className="flex items-center gap-3 group relative z-50" href="#">
<img alt="Beautique Logo" className="h-12 w-auto object-contain" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/64188ca9d2a6ab52c93ae93b_BeautiqueByDrMel_Logo-1.png"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-stone-500">
<a className="hover:text-[#C9A27E] transition-colors py-2" href="#services">Medical Services</a>
<a className="hover:text-[#C9A27E] transition-colors py-2" href="#drmel">Dr. Mel</a>
<a className="hover:text-[#C9A27E] transition-colors py-2" href="#membership">Membership</a>
<a className="hover:text-[#C9A27E] transition-colors py-2" href="#new-patients">New Patients</a>
<a className="hover:text-[#C9A27E] transition-colors py-2" href="#locations">Location</a>
</div>

<div className="flex items-center gap-4 relative z-50">
<div className="hidden sm:flex flex-col items-end mr-2">
<span className="text-[10px] uppercase text-stone-400 font-bold tracking-widest">Avenel, NJ</span>
<a className="text-xs font-bold text-stone-800 hover:text-[#C9A27E] transition-colors" href="tel:7327952721">732-795-2721</a>
</div>
<a className="hidden md:flex bg-[#1C1917] text-white px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-[#C9A27E] transition-all shadow-md hover:shadow-lg active:scale-95 items-center gap-2" href="https://beautiquebydrmel.janeapp.com/" target="_blank">
                    Book Online
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="lg:hidden p-2 text-stone-800 focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#FDFCFB] z-40 opacity-0 invisible pointer-events-none flex flex-col pt-32 px-6" id="mobile-menu">
<div className="flex flex-col gap-6 text-2xl font-serif text-stone-800 text-center">
<a className="mobile-link py-2 border-b border-stone-100" href="#services">Medical Services</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#drmel">About Dr. Mel</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#membership">Membership Club</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#new-patients">New Patients</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#locations">Contact &amp; Location</a>
</div>
<div className="mt-10 flex flex-col gap-4">
<a className="w-full bg-[#1C1917] text-white py-4 rounded-xl text-center uppercase tracking-widest text-sm font-semibold" href="https://beautiquebydrmel.janeapp.com/" target="_blank">
                Book Appointment
            </a>
<a className="w-full border border-stone-200 text-stone-800 py-4 rounded-xl text-center uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-2" href="tel:7327952721">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call Now
            </a>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Beautique Medical Spa Interior" className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/67ec86d76ce2b58280138ceb_BEAUTIQUE_Medical_Spa_Apple_Maps_Cover.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-20">
<div className="max-w-2xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-[#C9A27E]" icon="solar:star-linear"></iconify-icon>
                    Premiere Med Spa in New Jersey
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Scientific Beauty <br/>
<span className="font-serif italic text-[#C9A27E]">Curated by Medicine</span>
</h1>
<p className="text-lg text-stone-200/90 font-light leading-relaxed max-w-lg border-l-2 border-[#C9A27E] pl-6 fade-up delay-100">
                    We specialize in aesthetics in medicine. From dermal fillers and injectables to laser treatments and hair rejuvenation, all performed under the guidance of Dr. Melvina Patel.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 fade-up delay-200">
<a className="bg-white text-[#1C1917] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]" href="https://beautiquebydrmel.janeapp.com/" target="_blank">
                        Book Appointment
                    </a>
<a className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-3 min-w-[200px]" href="tel:7327952721">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                        (732) 795-2721
                    </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-[#C9A27E]" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] uppercase opacity-70">Expertise</span>
<span className="text-xs font-bold tracking-wide">Board Certified MD</span>
</div>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-[#C9A27E]" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] uppercase opacity-70">Technology</span>
<span className="text-xs font-bold tracking-wide">State-of-the-Art</span>
</div>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-[#C9A27E]" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] uppercase opacity-70">Care</span>
<span className="text-xs font-bold tracking-wide">Patient-Centric</span>
</div>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-[#C9A27E]" icon="solar:calendar-check-linear" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] uppercase opacity-70">Booking</span>
<span className="text-xs font-bold tracking-wide">Easy Online Sched</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<span className="text-[#C9A27E] text-xs font-bold tracking-widest uppercase">Our Expertise</span>
<h2 className="text-4xl font-medium text-stone-900 tracking-tight">Comprehensive Medical Aesthetics</h2>
<p className="font-light text-stone-500">Curated treatments designed to help you look and feel your absolute best.</p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Face Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/64188eddc94b75828eb89c81_Face_Medical_Spa_Treatments.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2 group-hover:text-[#C9A27E] transition-colors">Face</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Treat acne, dark spots, fine lines, and texture with industry-leading procedures.</p>
<ul className="space-y-2 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> HydraFacial &amp; Peels
                        </li>
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> Microneedling
                        </li>
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> RF Microneedling (Morpheus8)
                        </li>
</ul>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Body Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/64188ef2a141bd614699b2b5_Body_Medica_Spa_Treatments.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2 group-hover:text-[#C9A27E] transition-colors">Body</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Non-invasive solutions for unwanted fat, loose skin, and muscle toning.</p>
<ul className="space-y-2 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> Body Contouring (Evolve)
                        </li>
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> Weight Loss Management
                        </li>
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> Skin Tightening
                        </li>
</ul>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Injectables &amp; Hair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/64188f07fabf4162518cbda4_Hair_Medical_Spa_Treatments.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-2 group-hover:text-[#C9A27E] transition-colors">Injectables &amp; Laser</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Precision treatments for restoration, volume, and hair reduction.</p>
<ul className="space-y-2 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> Botox &amp; Dermal Fillers
                        </li>
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> Laser Hair Removal
                        </li>
<li className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-stone-600">
<iconify-icon className="text-[#C9A27E]" icon="solar:arrow-right-linear"></iconify-icon> IPL Light Therapy
                        </li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#C9A27E] hover:border-[#C9A27E] transition-all" href="https://beautiquebydrmel.janeapp.com/" target="_blank">
                    View Full Service Menu
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 bg-stone-50 border-y border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-8">Official Medical Partners</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-serif">HydraFacial</span>
<span className="text-xl font-bold font-serif">Morpheus8</span>
<span className="text-xl font-bold font-serif">Cutera</span>
<span className="text-xl font-bold font-serif">Botox</span>
<span className="text-xl font-bold font-serif">Evolve</span>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="drmel">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-[#C9A27E]/10 rounded-full blur-3xl"></div>
<img alt="Dr. Melvina Patel" className="relative z-10 w-full max-w-md mx-auto object-contain drop-shadow-2xl" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/64189849a30aa2ce58cbd847_Group%2019987.png"/>
</div>
<div className="space-y-6">
<span className="text-[#C9A27E] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#C9A27E]"></span>
                        Meet the Doctor
                    </span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                        Hi! I'm Dr. Mel. <br/>
<span className="font-serif italic text-stone-500">Welcome to my Beautique.</span>
</h2>
<div className="text-stone-600 leading-relaxed font-light text-lg space-y-4">
<p>
                            As a <strong>Board Certified physician</strong> in both Internal Medicine and Obesity Medicine, I worked on the frontlines during the pandemic and it really made me appreciate the fragility of life.
                        </p>
<p>
                            I knew I wanted to make a bigger impact in people’s lives, and that’s when I decided to leave <strong>New York Presbyterian Hospital</strong> and open my own medical spa.
                        </p>
<p>
                            I have always been passionate about using my expertise to help others and that’s exactly what I get to do every day by helping you look and feel your best.
                        </p>
</div>
<div className="pt-6">
<a className="bg-[#1C1917] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#C9A27E] transition-all inline-flex items-center gap-2" href="https://beautiquebydrmel.janeapp.com/" target="_blank">
                            Request Free Consultation
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1917] text-stone-200 relative overflow-hidden" id="membership">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A27E]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="text-[#C9A27E] text-xs font-bold tracking-widest uppercase">The Club</span>
<h2 className="text-4xl font-medium text-white tracking-tight">Join Our Med Spa Club</h2>
<p className="font-light text-stone-400 text-lg">Make the commitment to yourself and save in the process. Unlock exclusive benefits designed for your long-term wellness.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#C9A27E]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">20% Off All Treatments</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#C9A27E]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Up to 50% Off Products</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#C9A27E]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Special Birthday Treatments</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#C9A27E]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Preferential Appointments</span>
</div>
</div>
<div className="pt-6">
<button className="bg-white text-[#1C1917] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#C9A27E] hover:text-white transition-all">
                        Inquire About Membership
                    </button>
</div>
</div>
<div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10">
<img alt="Med Spa Club" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://cdn.prod.website-files.com/64188af18cef2919c85a482b/64189d6419486aabd3d64287_medical_spa_discounts_cheap_program.png"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="new-patients">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-stone-100">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-stone-900 mb-3">Request an Appointment</h2>
<p className="text-stone-500 text-sm">Fill out the form below and our team will contact you to confirm.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-700">Full Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A27E] transition-colors" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-700">Phone Number</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A27E] transition-colors" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-700">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A27E] transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-700">Interest</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A27E] transition-colors text-stone-600">
<option>Free Consultation</option>
<option>Botox / Fillers</option>
<option>HydraFacial</option>
<option>Body Contouring</option>
<option>Weight Loss</option>
<option>Other</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-700">Message (Optional)</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A27E] transition-colors" rows="3"></textarea>
</div>
<button className="w-full bg-[#1C1917] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#C9A27E] transition-colors shadow-lg" type="button">
                        Submit Request
                    </button>
<p className="text-center text-[10px] text-stone-400 italic mt-4">
                        *Note: Submitting this form triggers an instant email to our staff.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<span className="text-[#C9A27E] text-xs font-bold tracking-widest uppercase">Visit Us</span>
<h2 className="text-3xl font-medium text-stone-900 mt-2">Avenel, NJ Location</h2>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-[#1C1917]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Address</h4>
<p className="text-stone-600 mt-1">1348 St. George Ave<br/>Avenel, NJ 07001</p>
<a className="text-[10px] uppercase font-bold text-[#C9A27E] mt-2 inline-block border-b border-[#C9A27E]" href="#">Get Directions</a>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-[#1C1917]">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Hours</h4>
<p className="text-stone-600 mt-1">Monday - Friday: 9:00am - 7:00pm</p>
<p className="text-stone-600">Saturday - Sunday: Closed</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-[#1C1917]">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Contact</h4>
<a className="block text-stone-600 mt-1 hover:text-[#C9A27E]" href="tel:7327952721">(732) 795-2721</a>
<a className="block text-stone-600 hover:text-[#C9A27E]" href="mailto:info@beautiquebydrmel.com">info@beautiquebydrmel.com</a>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium text-stone-900 mb-6">Patient FAQ</h3>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-xl p-5 border border-stone-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold text-sm">
                                Do I need a consultation first?
                                <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                                Yes, we offer Free Consultations to assess your skin and body goals and create a customized treatment plan.
                            </div>
</details>
<details className="group bg-stone-50 rounded-xl p-5 border border-stone-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold text-sm">
                                Is there downtime for treatments?
                                <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                                Many of our treatments like HydraFacial and Laser hair removal have little to no downtime. Deeper treatments like Morpheus8 or Chemical Peels may require a few days of recovery.
                            </div>
</details>
<details className="group bg-stone-50 rounded-xl p-5 border border-stone-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold text-sm">
                                Do you accept insurance?
                                <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                                As a medical aesthetics practice, most cosmetic procedures are not covered by insurance. However, weight loss consultations may be eligible depending on your provider.
                            </div>
</details>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2 text-white" href="#">
<span className="text-xl font-bold tracking-tight">BEAUTIQUE by Dr. Mel.</span>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Premier Medical Spa in Avenel, NJ. Specializing in non-surgical aesthetics, weight loss, and holistic beauty under the care of Dr. Melvina Patel.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="https://fb.me/BEAUTIQUEbyDrMel" target="_blank">
<iconify-icon className="text-white" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="https://www.tiktok.com/@beautiquebydrmel" target="_blank">
<iconify-icon className="text-white" icon="solar:videocamera-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Treatments</a></li>
<li><a className="hover:text-white transition-colors" href="#drmel">About Dr. Mel</a></li>
<li><a className="hover:text-white transition-colors" href="#membership">Membership Club</a></li>
<li><a className="hover:text-white transition-colors" href="https://beautiquebydrmel.janeapp.com/">Book Online</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
<p className="text-[10px] mt-6 text-stone-500 leading-snug">
                        By providing your phone number, you agree to receive text messages from BEAUTIQUE. Reply STOP to opt-out.
                    </p>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2024 BEAUTIQUE by Dr. Mel. All Rights Reserved.</p>
<p>Medical Spa | Weight Loss Center</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="flex items-center justify-center w-14 h-14 bg-[#1C1917] text-white rounded-full shadow-2xl hover:scale-105 transition-transform" href="https://beautiquebydrmel.janeapp.com/">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</a>
</div>


    </>
  );
}
