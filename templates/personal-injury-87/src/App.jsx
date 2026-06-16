import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const header = document.getElementById('main-header');

        function toggleMenu() {
            if (mobileMenu.classList.contains('mobile-menu-hidden')) {
                // Open
                mobileMenu.classList.remove('mobile-menu-hidden');
                mobileMenu.classList.add('mobile-menu-visible');
                document.body.style.overflow = 'hidden';
            } else {
                // Close
                mobileMenu.classList.add('mobile-menu-hidden');
                mobileMenu.classList.remove('mobile-menu-visible');
                document.body.style.overflow = 'auto';
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);

        // Close menu when link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Scroll Effect for Header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#093c4a]/95 backdrop-blur-md border-b border-white/10" id="main-header">

<div className="hidden lg:flex text-[11px] uppercase text-gray-300 tracking-widest bg-[#072d38] pt-2 pr-8 pb-2 pl-8 items-center justify-between">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Hackensack &amp; New York</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#9d6b3d]" icon="solar:star-circle-linear"></iconify-icon> Top 100 Trial Lawyers</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:2012898614">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> NJ: (201) 289-8614
                </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:6465687202">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> NY: (646) 568-7202
                </a>
</div>
</div>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="relative z-50 flex flex-col group" href="#">
<img alt="Reinartz Law Firm" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724da3f1-0653-4a4d-b1d1-ad8a0461bcb6_320w.png"/>
<span className="text-[9px] uppercase font-medium text-[#9d6b3d] tracking-[0.3em] mt-1 ml-1">ФИНЮРИСТ</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-[13px] font-medium text-gray-200 hover:text-white uppercase tracking-wider transition-colors" href="#practice-areas">Practice Areas</a>
<a className="text-[13px] font-medium text-gray-200 hover:text-white uppercase tracking-wider transition-colors" href="#attorneys">Attorneys</a>
<a className="text-[13px] font-medium text-gray-200 hover:text-white uppercase tracking-wider transition-colors" href="#results">Results</a>
<a className="text-[13px] font-medium text-gray-200 hover:text-white uppercase tracking-wider transition-colors" href="#locations">Locations</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="bg-[#9d6b3d] hover:bg-[#8a5d34] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition-colors" href="#contact">
                    Free Consultation
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden text-white z-50 relative p-2" id="mobile-toggle">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="mobile-menu-hidden fixed inset-0 z-40 bg-[#093c4a] transition-all duration-300 lg:hidden flex flex-col pt-32 px-8" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#practice-areas">Practice Areas</a>
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#attorneys">Attorneys</a>
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#results">Case Results</a>
<a className="mobile-link text-2xl font-serif text-white hover:text-[#9d6b3d]" href="#locations">Locations</a>
</nav>
<div className="mt-auto mb-12 flex flex-col gap-4">
<a className="w-full bg-white/10 border border-white/20 text-white py-4 text-center text-sm font-semibold uppercase tracking-widest rounded-sm" href="tel:2012898614">
                Call NJ: (201) 289-8614
            </a>
<a className="mobile-link w-full bg-[#9d6b3d] text-white py-4 text-center text-sm font-semibold uppercase tracking-widest rounded-sm" href="#contact">
                Book Free Consultation
            </a>
</div>
</div>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="New Jersey Skyline" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b4ffe82-0bd0-4ef8-9085-fceac73c0f06_1600w.webp"/>
<div className="bg-gradient-to-r from-[#093c4a]/95 via-[#093c4a]/80 to-[#093c4a]/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="grid lg:grid-cols-2 z-10 w-full max-w-7xl mr-auto mb-8 ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-[#9d6b3d]/50 rounded-full bg-[#093c4a]/50 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#9d6b3d]"></span>
<span className="text-[10px] uppercase tracking-widest text-gray-300">Est. 2010 • Hackensack &amp; NYC</span>
</div>
<h1 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1]">
                    New Jersey <br/>
<span className="text-[#9d6b3d] italic">Personal Injury</span> <br/>
                    Lawyers.
                </h1>
<p className="text-lg text-gray-300 font-light leading-relaxed max-w-lg">
                    Did your injury arise out of another person's negligence? We aggressively fight for you when the other party refuses to do the right thing.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-[#9d6b3d] hover:bg-[#8a5d34] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-center transition-all shadow-lg shadow-[#9d6b3d]/20" href="#contact">
                        Book Free Consultation
                    </a>
<a className="group bg-white hover:bg-gray-100 text-[#093c4a] px-8 py-4 text-xs font-bold uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2" href="tel:2012898614">
<iconify-icon className="text-lg group-hover:text-[#9d6b3d] transition-colors" icon="solar:phone-calling-bold"></iconify-icon>
                        (201) 289-8614
                    </a>
</div>
<div className="pt-8 border-t border-white/10 flex items-center gap-8">
<div className="flex flex-col">
<span className="text-2xl font-serif text-white">$16M+</span>
<span className="text-[10px] uppercase text-gray-400 tracking-wider">Top Settlement</span>
</div>
<div className="w-px h-8 bg-white/20"></div>
<div className="flex flex-col">
<span className="text-2xl font-serif text-white">40+</span>
<span className="text-[10px] uppercase text-gray-400 tracking-wider">Years Combined</span>
</div>
<div className="w-px h-8 bg-white/20"></div>
<div className="flex flex-col">
<span className="text-2xl font-serif text-white">Top 100</span>
<span className="text-[10px] uppercase text-gray-400 tracking-wider">Trial Lawyers</span>
</div>
</div>
</div>

<div className="hidden lg:block bg-white p-8 rounded-sm shadow-2xl border-t-4 border-[#9d6b3d]">
<h3 className="text-2xl font-serif text-[#093c4a] mb-2">Request Case Evaluation</h3>
<p className="text-sm text-gray-500 mb-6">Tell us about your case. All consultations are free and confidential.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-gray-50 border-gray-200 text-sm p-3 focus:ring-[#9d6b3d] focus:border-[#9d6b3d]" placeholder="First Name" type="text"/>
<input className="w-full bg-gray-50 border-gray-200 text-sm p-3 focus:ring-[#9d6b3d] focus:border-[#9d6b3d]" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-gray-50 border-gray-200 text-sm p-3 focus:ring-[#9d6b3d] focus:border-[#9d6b3d]" placeholder="Phone Number" type="tel"/>
<select className="w-full bg-gray-50 border-gray-200 text-sm p-3 text-gray-500 focus:ring-[#9d6b3d] focus:border-[#9d6b3d]">
<option>Case Type...</option>
<option>Car Accident</option>
<option>Medical Malpractice</option>
<option>Slip &amp; Fall</option>
<option>Workers' Comp</option>
<option>Employment Law</option>
<option>Other</option>
</select>
<textarea className="w-full bg-gray-50 border-gray-200 text-sm p-3 focus:ring-[#9d6b3d] focus:border-[#9d6b3d]" placeholder="Briefly describe what happened..." rows="3"></textarea>
<button className="w-full bg-[#093c4a] hover:bg-[#072d38] text-white py-4 text-xs font-bold uppercase tracking-widest transition-colors" type="button">
                        Submit Request
                    </button>
<p className="text-[10px] text-gray-400 text-center">By clicking submit, you agree to our privacy policy.</p>
</form>
</div>
</div>
</section>

<div className="bg-gray-50 border-gray-100 border-b pt-8 pb-8">
<div className="overflow-hidden max-w-7xl mr-auto ml-auto pr-6 pl-6">
<p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">Recognized for Excellence</p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<img alt="Super Lawyers" className="h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Best Lawyers" className="h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Million Dollar Advocates" className="h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="AV Preeminent" className="h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<section className="bg-[#093c4a] text-white py-4 overflow-hidden" id="results">
<div className="flex gap-12 whitespace-nowrap animate-marquee items-center text-sm font-medium tracking-wide">
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$16,000,000</span> Wrongful Death</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$8,750,000</span> Medical Malpractice</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$7,000,000</span> Car Accident</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$1,320,000</span> Premises Liability</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$1,250,000</span> Truck Accident</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$900,000</span> Commercial Truck</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span className="flex items-center gap-3"><span className="text-[#9d6b3d] font-serif text-lg">$575,000</span> Construction Accident</span>
</div>
</section>

<section className="py-24 bg-white" id="practice-areas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#9d6b3d] text-[10px] font-bold uppercase tracking-[0.2em] block mb-3">Our Expertise</span>
<h2 className="text-4xl lg:text-5xl font-serif text-[#093c4a] mb-6">How We Can Help</h2>
<p className="text-gray-500 font-light">We handle complex personal injury and employment law matters with the attention and dedication you deserve.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group p-8 border border-gray-100 bg-white hover:border-[#9d6b3d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-12 h-12 rounded-full bg-[#093c4a]/5 text-[#093c4a] flex items-center justify-center mb-6 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:car-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-[#093c4a] mb-3">Car Accidents</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">We represent individuals injured in car, truck, and motorcycle accidents across New Jersey.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#9d6b3d] group-hover:text-[#093c4a] flex items-center gap-2">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 border border-gray-100 bg-white hover:border-[#9d6b3d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-12 h-12 rounded-full bg-[#093c4a]/5 text-[#093c4a] flex items-center justify-center mb-6 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-[#093c4a] mb-3">Medical Malpractice</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Holding medical professionals accountable for surgical errors, misdiagnosis, and negligence.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#9d6b3d] group-hover:text-[#093c4a] flex items-center gap-2">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 border border-gray-100 bg-white hover:border-[#9d6b3d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-12 h-12 rounded-full bg-[#093c4a]/5 text-[#093c4a] flex items-center justify-center mb-6 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-[#093c4a] mb-3">Workers' Comp</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Ensuring you receive the benefits you are entitled to after a workplace injury.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#9d6b3d] group-hover:text-[#093c4a] flex items-center gap-2">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 border border-gray-100 bg-white hover:border-[#9d6b3d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-12 h-12 rounded-full bg-[#093c4a]/5 text-[#093c4a] flex items-center justify-center mb-6 group-hover:bg-[#9d6b3d] group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-[#093c4a] mb-3">Wrongful Death</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Compassionate representation for families who have lost a loved one due to negligence.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#9d6b3d] group-hover:text-[#093c4a] flex items-center gap-2">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#093c4a] hover:text-[#9d6b3d] transition-colors border-b border-[#093c4a]/20 pb-1" href="#">
                    View all Practice Areas <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="attorneys">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<span className="text-[#9d6b3d] text-[10px] font-bold uppercase tracking-[0.2em]">Our Team</span>
<h2 className="text-4xl lg:text-5xl font-serif text-[#093c4a]">Experienced Trial Lawyers</h2>
<p className="text-gray-600 font-light leading-relaxed">
                        Before founding the firm, Richard Reinartz spent over a decade as a trial lawyer for two of the largest law firms in the U.S. We bring big-firm experience with a boutique, personalized approach.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<img alt="Richard Reinartz" className="w-24 h-24 object-cover grayscale rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h4 className="font-serif text-xl text-[#093c4a]">Richard Reinartz</h4>
<p className="text-xs uppercase tracking-widest text-[#9d6b3d] mb-2">Managing Member</p>
<p className="text-xs text-gray-500">AV Preeminent® Rated • Million Dollar Advocates Forum</p>
</div>
</div>
<div className="flex gap-4">
<img alt="Thomas McKinney" className="w-24 h-24 object-cover grayscale rounded-sm" src="https://cdn-ghoip.nitrocdn.com/lWckeWeGYeZOCHAYVnJzcqITzyQnOelV/assets/images/optimized/rev-1ca165b/reinartzlaw.com/wp-content/uploads/2022/06/thomas-mckinney-sm.jpg"/>
<div>
<h4 className="font-serif text-xl text-[#093c4a]">Thomas McKinney</h4>
<p className="text-xs uppercase tracking-widest text-[#9d6b3d] mb-2">Of Counsel</p>
<p className="text-xs text-gray-500">Employment Law Specialist • $15 Million in Victories</p>
</div>
</div>
</div>
</div>
<div className="relative h-[600px]">
<img alt="Reinartz Law Firm Office" className="w-full h-full object-cover rounded-sm absolute top-0 right-0 bottom-0 left-0 shadow-2xl" src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-[#9d6b3d] text-white p-8 max-w-xs shadow-lg hidden md:block">
<p className="font-serif text-lg italic">"We handle the legal burden so you can focus on healing."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#093c4a] text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-5xl text-[#9d6b3d] mb-8 opacity-50" icon="solar:quote-up-square-linear"></iconify-icon>
<h3 className="text-2xl lg:text-3xl font-serif leading-relaxed mb-8">
                "Richard made it very easy to communicate with him via email, phone, texts. His assistants are extremely helpful yet Richard even answers the phone himself when he could! We feel very fortunate to have had him on our side."
            </h3>
<div className="flex flex-col items-center">
<span className="font-bold uppercase tracking-widest text-sm mb-1">Lori F.</span>
<span className="text-[#9d6b3d] text-xs flex gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-xs text-gray-400 mt-2">Personal Injury Client</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="" id="locations">
<span className="text-[#9d6b3d] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6">Our Offices</span>
<h2 className="text-3xl font-serif text-[#093c4a] mb-8">Visit Us</h2>
<div className="grid sm:grid-cols-2 gap-6 mb-12">

<div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
<h4 className="font-serif text-lg text-[#093c4a] mb-2">Hackensack, NJ</h4>
<p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                Court Plaza South - West Wing<br/>
                                21 Main St Suite 205<br/>
                                Hackensack, NJ 07601
                            </p>
<div className="flex flex-col gap-2 mb-4">
<a className="text-xs font-bold text-[#093c4a] hover:text-[#9d6b3d] flex items-center gap-2" href="tel:2012898614">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 289-8614
                                </a>
</div>
<a className="text-[10px] uppercase font-bold text-[#9d6b3d] tracking-widest border-b border-[#9d6b3d]/30 pb-1" href="https://goo.gl/maps/..." target="_blank">Get Directions</a>
</div>

<div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
<h4 className="font-serif text-lg text-[#093c4a] mb-2">New York, NY</h4>
<p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                30 Wall Street 8th Floor<br/>
                                New York, NY 10005-2205
                            </p>
<div className="flex flex-col gap-2 mb-4">
<a className="text-xs font-bold text-[#093c4a] hover:text-[#9d6b3d] flex items-center gap-2" href="tel:6465687202">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (646) 568-7202
                                </a>
</div>
<a className="text-[10px] uppercase font-bold text-[#9d6b3d] tracking-widest border-b border-[#9d6b3d]/30 pb-1" href="#">Get Directions</a>
</div>
</div>
</div>

<div className="">
<h2 className="text-3xl font-serif text-[#093c4a] mb-2">Start Your Free Case Review</h2>
<p className="text-gray-500 text-sm font-light mb-8">We charge no fees unless we win your case. Connect form to instant email autoresponder + staff notification email.</p>
<form className="space-y-4" id="main-contact-form">
<div className="grid grid-cols-2 gap-4">
<input className="w-full border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#9d6b3d] focus:ring-1 focus:ring-[#9d6b3d] transition-all" placeholder="Name *" type="text"/>
<input className="w-full border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#9d6b3d] focus:ring-1 focus:ring-[#9d6b3d] transition-all" placeholder="Phone *" type="tel"/>
</div>
<input className="w-full border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#9d6b3d] focus:ring-1 focus:ring-[#9d6b3d] transition-all" placeholder="Email *" type="email"/>
<div className="grid grid-cols-2 gap-4">
<select className="w-full border border-gray-200 p-4 text-sm rounded-sm text-gray-500 focus:outline-none focus:border-[#9d6b3d] focus:ring-1 focus:ring-[#9d6b3d] transition-all">
<option>Preferred Location</option>
<option>Hackensack, NJ</option>
<option>New York, NY</option>
<option>Remote/Phone</option>
</select>
<input className="w-full border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#9d6b3d] focus:ring-1 focus:ring-[#9d6b3d] transition-all" placeholder="Preferred Time (e.g. Morning)" type="text"/>
</div>
<textarea className="w-full border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#9d6b3d] focus:ring-1 focus:ring-[#9d6b3d] transition-all" placeholder="Tell us about your injury..." rows="4"></textarea>
<button className="w-full bg-[#093c4a] hover:bg-[#072d38] text-white py-5 text-sm font-bold uppercase tracking-widest transition-colors rounded-sm shadow-lg" onclick="alert('Thank you. A member of our team will contact you shortly to confirm your consultation.')" type="button">
                            Request Appointment
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#072d38] text-gray-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<img alt="Reinartz Law Firm" className="h-12 w-auto mb-6 opacity-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49286734-ffe0-4ad0-b270-3fe88baff0f9_320w.png"/>
<p className="text-xs leading-relaxed max-w-sm">
                    The Reinartz Law Firm is a top-rated personal injury and wrongful death law firm. Our firm aggressively pursues compensation for people who suffer damages caused by the negligence of others.
                </p>
<div className="flex gap-4 mt-6">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#9d6b3d] hover:border-[#9d6b3d] hover:text-white transition-all" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#9d6b3d] hover:border-[#9d6b3d] hover:text-white transition-all" href="#">
<iconify-icon icon="solar:linkedin-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-serif mb-6">Quick Links</h4>
<ul className="space-y-3 text-xs uppercase tracking-wider">
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#practice-areas">Practice Areas</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#attorneys">Attorneys</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#results">Results</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6">Legal</h4>
<ul className="space-y-3 text-xs uppercase tracking-wider">
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Disclaimer</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Sitemap</a></li>
<li><a className="hover:text-[#9d6b3d] transition-colors" href="#">Attorney Advertising</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-widest text-gray-600">
            © 2026 The Reinartz Law Firm. All Rights Reserved.
        </div>
</footer>



    </>
  );
}
