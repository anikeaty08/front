import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        // Scroll Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load

            // Number Counter Logic
            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;

            const animateCounters = () => {
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const isFloat = target % 1 !== 0;
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps
                    
                    let current = 0;
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = isFloat ? current.toFixed(1) : Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
            };

            // Intersection Observer for Metrics
            const metricsSection = document.querySelector('.counter')?.closest('section');
            if(metricsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !hasAnimated) {
                            animateCounters();
                            hasAnimated = true;
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(metricsSection);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-30 pointer-events-none" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-[#367E72]/10 bg-white/90 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center text-[#246F66]">
<iconify-icon height="24" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-[#246F66]">AetherHealth</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-[#383838]">
<a className="hover:text-[#246F66] transition-colors duration-300" href="#services">Solutions</a>
<a className="hover:text-[#246F66] transition-colors duration-300" href="#results">Outcomes</a>
<a className="hover:text-[#246F66] transition-colors duration-300" href="#insights">Research</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block px-5 py-2.5 text-sm font-bold text-white bg-[#246F66] rounded-full hover:bg-[#367E72] transition-all duration-300 shadow-sm" href="#contact">
                    Book Demo
                </a>
<button className="md:hidden text-[#246F66]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#AEC8B9]/40 blur-[100px] rounded-full pointer-events-none opacity-60 mix-blend-multiply"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#246F66]/20 bg-[#AEC8B9]/30 text-sm font-bold text-[#246F66] mb-8 hover:bg-[#AEC8B9]/50 transition-all cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#367E72] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#246F66]"></span>
</span>
                HIPAA Compliant AI Solutions
            </div>

<h1 className="reveal delay-200 text-5xl md:text-7xl font-bold tracking-tight text-[#246F66] mb-8 leading-[1.1]">
                Compassionate Intelligence <br className="hidden md:block"/> for Modern Healthcare
            </h1>

<p className="reveal delay-300 text-lg md:text-xl text-[#383838] max-w-2xl mx-auto mb-12 leading-relaxed">
                Empowering clinicians with predictive analytics and automated workflows. Enhance patient outcomes while reducing administrative burnout.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto px-8 py-3.5 bg-[#246F66] text-white text-sm font-bold rounded-full hover:bg-[#367E72] transition-all shadow-md text-center flex items-center justify-center gap-2" href="#contact">
                    Start Integration
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-[#367E72] text-[#367E72] text-sm font-bold rounded-full hover:bg-[#AEC8B9]/20 transition-all text-center flex items-center justify-center" href="#services">
                    Explore Platform
                </a>
</div>
</div>
</header>

<section className="border-y border-[#367E72]/10 bg-[#AEC8B9]/10 py-10 relative overflow-hidden reveal">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-sm font-bold text-[#367E72] uppercase tracking-widest">Trusted by Leading Institutions</p>
</div>
<div className="mask-linear w-full inline-flex flex-nowrap overflow-hidden">
<div className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-scroll w-max">
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-[#246F66]">MAYO CLINIC</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">CLEVELAND</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">JOHNS HOPKINS</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">KAISER</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">SINAI</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">STANFORD</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">CEDARS</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">UCLA HEALTH</span>
</div>
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-[#246F66]">MAYO CLINIC</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">CLEVELAND</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">JOHNS HOPKINS</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">KAISER</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">SINAI</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">STANFORD</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">CEDARS</span>
<span className="text-xl font-bold tracking-tight text-[#246F66]">UCLA HEALTH</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-[#367E72]/10 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="reveal delay-100">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-4xl md:text-5xl font-bold text-[#246F66] tracking-tight mb-2">
<span className="counter" data-target="45">0</span>%
                    </div>
<div className="text-sm font-bold text-[#383838] uppercase tracking-wide">Diagnosis Speed</div>
</div>
<div className="reveal delay-200">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-4xl md:text-5xl font-bold text-[#246F66] tracking-tight mb-2">
<span className="counter" data-target="2.5">0</span>M+
                    </div>
<div className="text-sm font-bold text-[#383838] uppercase tracking-wide">Records Analyzed</div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-4xl md:text-5xl font-bold text-[#246F66] tracking-tight mb-2">
<span className="counter" data-target="99">0</span>%
                    </div>
<div className="text-sm font-bold text-[#383838] uppercase tracking-wide">Compliance Rate</div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-4xl md:text-5xl font-bold text-[#246F66] tracking-tight mb-2">
<span className="counter" data-target="24">0</span>/7
                    </div>
<div className="text-sm font-bold text-[#383838] uppercase tracking-wide">Patient Monitoring</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#246F66] tracking-tight mb-4">Precision Medicine, Scaled</h2>
<p className="text-[#383838] max-w-xl text-lg leading-relaxed">We architect the digital infrastructure that powers the next generation of healthcare, focusing on ethics, accuracy, and patient trust.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 group relative p-8 rounded-2xl bg-white border border-[#367E72]/20 hover:border-[#246F66] transition-all duration-500 shadow-sm hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#AEC8B9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-xl bg-[#AEC8B9]/30 flex items-center justify-center mb-6 text-[#246F66] border border-[#246F66]/10">
<iconify-icon height="24" icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#246F66] tracking-tight mb-3">Diagnostic Support</h3>
<p className="text-[#383838] leading-relaxed mb-8 min-h-[5rem]">
                            AI assistants that analyze imaging and lab results in real-time, flagging anomalies for physician review with 99.8% accuracy.
                        </p>
<div className="h-[1px] w-full bg-[#367E72]/10 mb-4"></div>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#367E72] hover:text-[#246F66] transition-colors" href="#">
                            Learn More <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="reveal delay-200 group relative p-8 rounded-2xl bg-white border border-[#367E72]/20 hover:border-[#246F66] transition-all duration-500 shadow-sm hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#AEC8B9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-xl bg-[#AEC8B9]/30 flex items-center justify-center mb-6 text-[#246F66] border border-[#246F66]/10">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#246F66] tracking-tight mb-3">Secure Data Lakes</h3>
<p className="text-[#383838] leading-relaxed mb-8 min-h-[5rem]">
                            Unify fragmented EHR systems into a single, secure source of truth. Fully HIPAA/GDPR compliant infrastructure.
                        </p>
<div className="h-[1px] w-full bg-[#367E72]/10 mb-4"></div>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#367E72] hover:text-[#246F66] transition-colors" href="#">
                            View Security <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="reveal delay-300 group relative p-8 rounded-2xl bg-white border border-[#367E72]/20 hover:border-[#246F66] transition-all duration-500 shadow-sm hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#AEC8B9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-xl bg-[#AEC8B9]/30 flex items-center justify-center mb-6 text-[#246F66] border border-[#246F66]/10">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#246F66] tracking-tight mb-3">Patient Triage</h3>
<p className="text-[#383838] leading-relaxed mb-8 min-h-[5rem]">
                            Automated symptom assessment and routing. Prioritize critical cases and reduce ER wait times by an average of 40%.
                        </p>
<div className="h-[1px] w-full bg-[#367E72]/10 mb-4"></div>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#367E72] hover:text-[#246F66] transition-colors" href="#">
                            See Workflows <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#367E72]/10 bg-[#AEC8B9]/10" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl md:text-4xl font-bold text-[#246F66] tracking-tight mb-12 text-center">Clinician Validated</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal delay-100 p-10 rounded-xl bg-white border border-[#367E72]/10 hover:border-[#246F66]/30 transition-colors relative overflow-hidden shadow-sm">
<div className="relative z-10">
<div className="mb-6 text-[#367E72]">
<iconify-icon height="32" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-lg text-[#383838] leading-relaxed mb-8">
                            "AetherHealth didn't just digitize our records; they redefined our patient intake process. The predictive models have saved us critical hours in <span className="text-[#246F66] font-bold">emergency response</span> times."
                        </p>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-[#AEC8B9] flex items-center justify-center text-sm font-bold text-[#246F66]">DR</div>
<div>
<div className="text-base font-bold text-[#246F66]">Dr. Sarah Chen</div>
<div className="text-sm text-[#383838]">Chief of Surgery, Metro General</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-200 p-10 rounded-xl bg-white border border-[#367E72]/10 hover:border-[#246F66]/30 transition-colors relative overflow-hidden shadow-sm">
<div className="relative z-10">
<div className="mb-6 text-[#367E72]">
<iconify-icon height="32" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-lg text-[#383838] leading-relaxed mb-8">
                            "The precision of their data analytics strategy allows us to personalize treatment plans at scale. It is truly a <span className="text-[#246F66] font-bold">compassionate technological service</span>."
                        </p>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-[#AEC8B9] flex items-center justify-center text-sm font-bold text-[#246F66]">JT</div>
<div>
<div className="text-base font-bold text-[#246F66]">James Thorne</div>
<div className="text-sm text-[#383838]">Director of Innovation, HealthFirst</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-[#367E72]/10 relative overflow-hidden bg-white" id="insights">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-2xl md:text-3xl font-bold text-[#246F66] tracking-tight mb-4">Medical Intelligence Digest</h2>
<p className="reveal delay-100 text-[#383838] mb-10 text-lg">Join our network of healthcare leaders for quarterly insights into AI ethics and clinical automation.</p>
<form className="reveal delay-200 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-[#F5F5F5] border border-[#367E72]/20 rounded-lg px-5 py-3.5 text-sm text-[#383838] placeholder-[#383838]/50 focus:outline-none focus:border-[#246F66] focus:ring-1 focus:ring-[#246F66] transition-all" placeholder="doctor@hospital.org" required="" type="email"/>
<button className="px-8 py-3.5 bg-[#246F66] text-white text-sm font-bold rounded-lg hover:bg-[#367E72] transition-all shadow-md" type="submit">
                    Subscribe
                </button>
</form>
<p className="reveal delay-300 text-xs text-[#383838]/70 mt-6 font-medium">HIPAA Compliant Communication. Unsubscribe anytime.</p>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden border-t border-[#367E72]/10 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-bold text-[#246F66] tracking-tight mb-6">Ready to Innovate?</h2>
<p className="text-[#383838] text-lg">Schedule your strategy session. Let's discuss how Ethical AI can redefine patient care.</p>
</div>
<form className="reveal delay-100 space-y-6 bg-white p-8 md:p-12 rounded-2xl border border-[#367E72]/10 shadow-2xl relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#AEC8B9]/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="space-y-2">
<label className="text-xs font-bold text-[#383838] uppercase tracking-widest">Name</label>
<input className="w-full bg-[#F5F5F5] border border-[#367E72]/20 rounded-lg px-4 py-3 text-sm text-[#383838] focus:outline-none focus:border-[#246F66] transition-colors" placeholder="Dr. Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-[#383838] uppercase tracking-widest">Email</label>
<input className="w-full bg-[#F5F5F5] border border-[#367E72]/20 rounded-lg px-4 py-3 text-sm text-[#383838] focus:outline-none focus:border-[#246F66] transition-colors" placeholder="jane@hospital.com" type="email"/>
</div>
</div>
<div className="space-y-2 relative z-10">
<label className="text-xs font-bold text-[#383838] uppercase tracking-widest">Institution</label>
<input className="w-full bg-[#F5F5F5] border border-[#367E72]/20 rounded-lg px-4 py-3 text-sm text-[#383838] focus:outline-none focus:border-[#246F66] transition-colors" placeholder="Medical Center Name" type="text"/>
</div>
<div className="space-y-2 relative z-10">
<label className="text-xs font-bold text-[#383838] uppercase tracking-widest">Message</label>
<textarea className="w-full bg-[#F5F5F5] border border-[#367E72]/20 rounded-lg px-4 py-3 text-sm text-[#383838] focus:outline-none focus:border-[#246F66] transition-colors resize-none" placeholder="Tell us about your automation goals..." rows="4"></textarea>
</div>
<div className="pt-4 relative z-10">
<button className="w-full bg-[#246F66] hover:bg-[#367E72] text-white font-bold py-4 rounded-lg text-sm transition-all shadow-lg hover:shadow-xl" type="button">
                        Schedule Consultation
                    </button>
</div>
</form>
</div>
</section>

<footer className="border-t border-[#367E72]/10 bg-[#383838] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white">AetherHealth</span>
</div>
<p className="text-sm text-[#AEC8B9] max-w-xs leading-relaxed">
                        Pioneering the intersection of compassion and logic. We help world-class healthcare organizations leverage the power of ethical AI.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Solutions</h4>
<ul className="space-y-4 text-sm text-[#AEC8B9]">
<li><a className="hover:text-white transition-colors" href="#">Diagnostic AI</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Strategy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Patient Triage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-[#AEC8B9]">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#AEC8B9]">© 2023 AetherHealth Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[#AEC8B9] hover:text-white transition-colors" href="#">
<iconify-icon height="18" icon="logos:linkedin-icon" style={{filter: 'grayscale(100%) brightness(200%)'}} width="18"></iconify-icon>
</a>
<a className="text-[#AEC8B9] hover:text-white transition-colors" href="#">
<iconify-icon height="18" icon="logos:twitter" style={{filter: 'grayscale(100%) brightness(200%)'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
