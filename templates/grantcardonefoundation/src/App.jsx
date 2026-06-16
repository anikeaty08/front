import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Find counters inside this specific entry
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; 
                            const increment = target / (duration / 16);
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current).toLocaleString();
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target.toLocaleString();
                                }
                            };
                            updateCounter();
                        });
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-text');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url(")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="fixed z-50 bg-white/90 border-slate-100 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="-ml-2" href="#">
<img alt="Grant Cardone Foundation" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d5f461-4952-4341-96c8-e71cbb6d17f8_3840w.png"/>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-[#00A3AD] transition-colors text-sm font-medium text-slate-600" href="#programs">Our Programs</a>
<a className="hover:text-[#00A3AD] transition-colors text-sm font-medium text-slate-600" href="#impact">Impact</a>
<a className="hover:text-[#00A3AD] transition-colors text-sm font-medium text-slate-600" href="#partner">Partner With Us</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center hover:bg-teal-600 transition-colors text-sm font-semibold text-white tracking-wide bg-[#00A3AD] rounded py-2.5 px-6 shadow-sm" href="#donate">
                    Donate Now
                </a>
</div>
</div>
</header>
<main className="text-cyan-50 pt-20">

<section className="min-h-[90vh] flex overflow-hidden relative items-center justify-center">
<div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 pointer-events-none">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://res.cloudinary.com/dfhurdsab/video/upload/v1770043312/GCF_LP_Video_qdqnpn.mov" type="video/mp4"/>
</video>
</div>
<div className="z-10 text-white text-center max-w-5xl mx-auto pt-10 px-6 relative">
<h1 className="leading-[1.1] md:text-6xl lg:text-7xl text-4xl font-bold tracking-tighter mb-6">Breaking the Cycle of Financial Illiteracy</h1>
<p className="leading-relaxed md:text-lg text-lg font-light text-white/90 max-w-3xl mx-auto mb-10">
                    The Grant Cardone Foundation is a global non-profit organization dedicated to empowering young people by providing them with the education, mentorship, and resources they need to reach their full potential.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="sm:w-auto hover:bg-teal-600 transition-all hover:shadow-xl hover:-translate-y-0.5 text-base font-semibold text-white bg-[#00A3AD] w-full rounded py-4 px-8 shadow-lg" href="#partner">
                        Partner With Us
                    </a>
<a className="sm:w-auto hover:bg-white/10 transition-all text-base font-semibold text-white bg-transparent w-full border-white border-2 rounded py-4 px-8" href="#donate">
                        Donate Now
                    </a>
</div>
<div className="grid grid-cols-1 gap-6 uppercase md:grid-cols-3 text-sm font-medium tracking-wide font-condensed text-center opacity-80 border-white/20 border-t mt-8 pt-8">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon> Global Reach
                    </div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon> Youth Focused
                    </div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon> Founded by Grant Cardone
                    </div>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tighter mb-6">Why Financial Education Can't Wait</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#00A3AD]/10 transition-colors duration-300">
<iconify-icon className="text-slate-400 group-hover:text-[#00A3AD] transition-colors" icon="solar:money-bag-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 w-3/4 mx-auto mb-4">67% of teens graduate high school without basic money skills</h3>
</div>
<div className="flex flex-col group items-center">
<div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#00A3AD]/10 transition-colors duration-300">
<iconify-icon className="text-slate-400 group-hover:text-[#00A3AD] transition-colors" icon="solar:link-broken-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 w-3/4 mx-auto mb-4">Financial illiteracy keeps families in poverty</h3>
</div>
<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#00A3AD]/10 transition-colors duration-300">
<iconify-icon className="text-slate-400 group-hover:text-[#00A3AD] transition-colors" icon="solar:graph-down-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 w-3/4 mx-auto mb-4">Schools often don't teach the life skills students need most</h3>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center md:text-left">
<h2 className="text-3xl md:text-4xl text-slate-900 font-bold tracking-tighter">How We Create Impact</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group">
<div className="h-48 overflow-hidden">
<img alt="School Partnership" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl font-semibold text-slate-900 mb-4" style={{}}>Mentor Workshops</h3>
<p className="text-slate-600 mb-8 leading-relaxed text-sm">Interactive financial literacy workshops delivered in classrooms across Miami. We provide curriculum, teacher training, and workbooks.</p>
<a className="inline-flex items-center hover:text-teal-700 transition-colors text-sm font-semibold text-[#00A3AD]" href="#contact">Bring Your School to GCF<iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group">
<div className="h-48 overflow-hidden">
<img alt="Community Programs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-4" style={{}}>10X Books</h3>
<p className="text-slate-600 mb-8 leading-relaxed text-sm">Free workshops and summer programs teaching budgeting, saving, and wealth-building to youth and families.</p>
<a className="inline-flex items-center text-[#00A3AD] font-semibold text-sm hover:text-teal-700 transition-colors" href="#contact">
                                Find a Program
                                <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" style={{color: 'rgb(15, 118, 110)'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group">
<div className="h-48 overflow-hidden">
<img alt="Digital Resources" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-4">Digital Resources</h3>
<p className="text-slate-600 mb-8 leading-relaxed text-sm">Online video lessons, downloadable guides, and parent resources accessible anywhere, anytime.</p>
<a className="inline-flex items-center text-[#00A3AD] font-semibold text-sm hover:text-teal-700 transition-colors" href="#newsletter">
                                Access Free Resources
                                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-y text-sky-50 bg-[#00A3AD]/5 border-[#00A3AD]/10 pt-24 pb-24" id="impact">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl text-slate-900 mb-16 font-bold tracking-tighter">Real Students, Real Results</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 text-center gap-x-12 gap-y-12">
<div className="reveal-text active">
<div className="lg:text-6xl text-5xl font-bold text-[#00A3AD] tracking-tighter mb-2">
<span className="counter" data-target="475000">3,800</span>+
</div>
<div className="text-sm font-semibold uppercase tracking-wider text-slate-600">Students Impacted</div>
</div>
<div className="reveal-text active" style={{}}>
<div className="lg:text-6xl text-5xl font-bold text-[#00A3AD] tracking-tighter mb-2">
<span className="counter" data-target="200">2</span>+
</div>
<div className="text-sm font-semibold uppercase tracking-wider text-slate-600">Partnerships</div>
</div>
<div className="reveal-text active" style={{}}>
<div className="flex lg:text-6xl text-5xl font-bold text-[#00A3AD] tracking-tighter mb-2 items-baseline justify-center">
  $<span className="counter" data-target="20">1</span>M+
</div>
<div className="uppercase text-sm font-semibold text-slate-600 tracking-wider">Invested in Education</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tighter text-center mb-16">Hear From Our Students
      &amp; Teachers</h2>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-slate-50 border-slate-100 border rounded-2xl p-10 relative">
<iconify-icon className="text-[#00A3AD] absolute top-8 left-8 opacity-20" icon="solar:quote-up-linear" width="48"></iconify-icon>
<p className="text-lg text-slate-700 mb-6 relative z-10 font-medium">"The students had such a phenomenal time and
          learned so much."</p>
<div className="border-t border-slate-200 pt-6">
<div className="font-semibold text-slate-900">Ms. Wilchcombe</div>
<div className="text-sm text-slate-500">Lotus Elite Academic Preparatory School</div>
</div>
</div>
<div className="p-10 rounded-2xl bg-slate-50 border border-slate-100 relative">
<iconify-icon className="text-[#00A3AD] absolute top-8 left-8 opacity-20" icon="solar:quote-up-linear" width="48"></iconify-icon>
<p className="text-lg text-slate-700 mb-6 relative z-10 font-medium">"We truly felt blessed to be in the presence of
          such dynamic leaders. The energy and enthusiasm were palpable."</p>
<div className="border-t border-slate-200 pt-6">
<div className="font-semibold text-slate-900">Mrs. Rawls</div>
<div className="text-sm text-slate-500">Business Teacher, Horizon High School</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#0B1221] py-24" id="newsletter">
<div className="text-center max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl mb-4 font-bold tracking-tighter">Join Our Mission</h2>
<p className="text-lg text-slate-400 mb-10">Get impact updates, free financial resources, and ways to make a difference.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
<input className="placeholder:text-slate-500 focus:ring-2 focus:ring-[#00A3AD] text-slate-900 w-full border-0 rounded py-3 px-6" placeholder="Enter your email" required="" type="email"/>
<button className="md:w-1/3 hover:bg-teal-600 transition-colors font-semibold text-white bg-[#00A3AD] w-full rounded py-3 px-6" type="button">Subscribe</button>
</form>
</div>
</section>

<section className="py-24 bg-white" id="donate">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-bold tracking-tighter">Make an Impact Today</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="p-8 rounded-2xl border-2 border-[#00A3AD]/20 bg-[#00A3AD]/5 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#00A3AD]">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-slate-900 mb-4 font-bold tracking-tighter">Donate</h3>
<div className="space-y-2 mb-8 text-slate-600 font-medium">
<p><span className="text-slate-900 font-bold">$50</span> = Workbooks for 10 students</p>
<p><span className="text-slate-900 font-bold">$150</span> = One classroom workshop</p>
<p><span className="text-slate-900 font-bold">$500</span> = Complete school program</p>
</div>
<a className="hover:bg-teal-600 transition-colors font-semibold text-white bg-[#00A3AD] w-full rounded py-3 shadow-sm" href="https://donorbox.org/supporting-kids-future-2">
                            Donate Now
                        </a>
</div>
<div className="p-8 rounded-2xl border border-slate-200 bg-white flex flex-col items-center text-center">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm text-slate-900">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-slate-900 mb-4 font-bold tracking-tighter">Partner</h3>
<p className="text-slate-600 mb-8 leading-relaxed">Bring GCF to your school or organization. We provide everything needed for successful financial education programs.</p>
<a className="hover:bg-slate-50 transition-colors font-semibold text-slate-700 bg-white w-full border-slate-300 border rounded py-3" href="#partner">
                            Start a Partnership
                        </a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="partner">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-bold tracking-tighter">Let's Work Together</h2>
<p className="text-lg text-slate-600">Whether you're a school, corporate partner, or community organization, we'd love to connect.</p>
</div>
<form className="md:p-12 bg-white border-slate-100 border rounded-2xl p-8 shadow-sm space-y-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
<input className="focus:border-[#00A3AD] focus:ring-1 focus:ring-[#00A3AD] transition-colors text-slate-900 w-full border-slate-300 border rounded-lg py-3 px-4" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
<input className="focus:border-[#00A3AD] focus:ring-1 focus:ring-[#00A3AD] transition-colors text-slate-900 w-full border-slate-300 border rounded-lg py-3 px-4" required="" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
<input className="focus:border-[#00A3AD] focus:ring-1 focus:ring-[#00A3AD] transition-colors text-slate-900 w-full border-slate-300 border rounded-lg py-3 px-4" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2">Organization</label>
<input className="focus:border-[#00A3AD] focus:ring-1 focus:ring-[#00A3AD] transition-colors text-slate-900 w-full border-slate-300 border rounded-lg py-3 px-4" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2">Message <span className="text-red-500">*</span></label>
<textarea className="focus:border-[#00A3AD] focus:ring-1 focus:ring-[#00A3AD] transition-colors text-slate-900 w-full border-slate-300 border rounded-lg py-3 px-4" required="" rows="4"></textarea>
</div>
<button className="hover:bg-teal-600 transition-colors font-semibold text-white bg-[#00A3AD] w-full rounded py-4 shadow-sm" type="submit">
                        Send Message
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#0B1221] border-t border-slate-800 text-slate-300 py-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-1">
<img alt="Grant Cardone Foundation" className="cursor-pointer w-auto h-12 object-contain mb-6 invert brightness-0" onclick="window.location.href='https://grantcardonefoundation.com/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d5f461-4952-4341-96c8-e71cbb6d17f8_3840w.png"/>
<p className="text-sm leading-relaxed text-slate-400">
                        Providing financial guidance and mentorship to underserved youth around the globe.
                    </p>
</div>

<div className="">
<h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Programs</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="hover:text-[#00A3AD] transition-colors" href="#">School Partnerships</a></li>
<li className=""><a className="hover:text-[#00A3AD] transition-colors" href="#">Community Events</a></li>
<li><a className="hover:text-[#00A3AD] transition-colors" href="#">Scholarships</a></li>
<li><a className="hover:text-[#00A3AD] transition-colors" href="#">10X Kids University</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Get Involved</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#00A3AD] transition-colors" href="#donate">Donate</a></li>
<li><a className="hover:text-[#00A3AD] transition-colors" href="#partner">Partner With Us</a></li>
<li><a className="hover:text-[#00A3AD] transition-colors" href="#">Volunteer</a></li>
<li><a className="hover:text-[#00A3AD] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#00A3AD] hover:text-white transition-all text-slate-400" href="#">
<iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#00A3AD] hover:text-white transition-all text-slate-400" href="#">
<iconify-icon icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#00A3AD] hover:text-white transition-all text-slate-400" href="#">
<iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#00A3AD] hover:text-white transition-all text-slate-400" href="#">
<iconify-icon icon="ri:youtube-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 The Grant Cardone Foundation. All rights reserved. 501(c)(3) Non-Profit.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
