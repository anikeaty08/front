import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
            } else {
                navbar.classList.remove('shadow-md');
            }
        });

        // Scroll Reveal Animation (Intersection Observer)
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });
        
        // Accordion auto-close logic
        const detailsElements = document.querySelectorAll("details");
        detailsElements.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                detailsElements.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0B3D52] border-b border-white/5 transition-all duration-300 backdrop-blur-md bg-opacity-95" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 font-sora font-semibold tracking-tighter text-xl shrink-0" href="#">
<span className="text-white">BRANDDOVE</span>
<span className="text-[#00B4C8]">HEALTH</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#8BAAB8] hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-[#8BAAB8] hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-[#8BAAB8] hover:text-white transition-colors" href="#telemedicine">Telemedicine</a>
<a className="text-sm font-medium text-[#8BAAB8] hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-[#8BAAB8] hover:text-white transition-colors" href="#trust">For Organizations</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#F59B1E] text-white text-sm font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all shadow-sm" href="#trial">
                    Start Free Trial
                </a>
<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-[#0B3D52] border-t border-white/10 px-6 py-4 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-base text-[#8BAAB8] hover:text-white py-2" href="#how-it-works">How It Works</a>
<a className="text-base text-[#8BAAB8] hover:text-white py-2" href="#features">Features</a>
<a className="text-base text-[#8BAAB8] hover:text-white py-2" href="#telemedicine">Telemedicine</a>
<a className="text-base text-[#8BAAB8] hover:text-white py-2" href="#pricing">Pricing</a>
<a className="text-base text-[#8BAAB8] hover:text-white py-2" href="#trust">For Organizations</a>
<a className="mt-2 w-full text-center px-6 py-3 rounded-full bg-[#F59B1E] text-white text-base font-medium" href="#trial">Start Free Trial</a>
</div>
</nav>

<section className="relative min-h-[90vh] bg-[#0B3D52] pt-32 pb-20 flex items-center overflow-hidden hero-pattern">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

<div className="flex flex-col gap-6 lg:pr-8 reveal">
<span className="text-[#00B4C8] uppercase tracking-[0.2em] text-xs font-semibold">Healthcare Infrastructure for Africa</span>
<h1 className="font-sora font-semibold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                    Help that arrives before it's too late.
                </h1>
<p className="text-[#8BAAB8] text-lg md:text-xl leading-relaxed max-w-lg font-light">
                    Immediate AI symptom triage, instant virtual doctor access, and preemptive emergency hospital routing. Because timing is everything.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F59B1E] text-white text-base font-medium hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#F59B1E]/20 transition-all" href="#trial">
                        Join the Waitlist
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-all" href="#how-it-works">
                        See How It Works
                    </a>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs text-[#8BAAB8] font-medium">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#12A36A] text-sm" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        No credit card required
                    </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#12A36A] text-sm" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        KYC-protected
                    </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#12A36A] text-sm" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Available in Abuja
                    </span>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center reveal reveal-delay-2">

<div className="absolute inset-0 bg-[#00B4C8]/10 blur-3xl rounded-full w-[80%] h-[80%] m-auto animate-pulse"></div>

<div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl shadow-black/50 animate-float">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#00B4C8]/20 flex items-center justify-center">
<iconify-icon className="text-[#00B4C8] text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Patient Status</div>
<div className="text-[#8BAAB8] text-xs font-mono">ID: 884-A2</div>
</div>
</div>
<div className="px-3 py-1 rounded-full bg-[#12A36A]/10 text-[#12A36A] text-xs font-medium border border-[#12A36A]/20">Active</div>
</div>

<div className="flex flex-col gap-4">

<div className="bg-black/20 rounded-xl p-4 border border-white/5 flex gap-4 items-start hover:border-white/10 transition-colors">
<div className="mt-1 w-6 h-6 rounded-full bg-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-xs" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-full space-y-2">
<div className="w-24 h-2 bg-white/20 rounded-full"></div>
<div className="w-full h-2 bg-white/10 rounded-full"></div>
<div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="relative bg-black/40 rounded-xl p-4 border border-[#D92B2B]/30 flex flex-col gap-3 shadow-[0_0_15px_rgba(217,43,43,0.1)]">
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#D92B2B] pulse-red"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#D92B2B] text-lg" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white text-sm font-medium">Emergency Triage Initiated</span>
</div>
<div className="flex items-center justify-between mt-2">
<div className="text-[#8BAAB8] text-xs">Connecting to Dr. Okafor...</div>
<div className="text-[#D92B2B] font-mono text-xs">00:14s</div>
</div>
</div>

<div className="bg-black/20 rounded-xl p-4 border border-white/5 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-[#00B4C8] flex items-center justify-center bg-[#00B4C8]/10 text-[#00B4C8]">
<iconify-icon icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-white text-sm">Garki Hospital Route</div>
<div className="text-[#8BAAB8] text-xs font-mono">Pre-notified</div>
</div>
</div>

<div className="flex items-center gap-1 mt-1 px-2">
<div className="w-2 h-2 rounded-full bg-white/40"></div>
<div className="flex-1 border-t border-dashed border-white/20"></div>
<iconify-icon className="text-[#F59B1E] text-base" icon="solar:ambulance-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex-1 border-t border-dashed border-white/20"></div>
<div className="w-2 h-2 rounded-full bg-[#12A36A]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
<iconify-icon className="text-2xl" icon="solar:round-alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</section>

<section className="bg-[#E8F2F6] py-24 px-6">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#0B3D52] tracking-tight leading-tight">
                People are not dying because medicine doesn't exist — they are dying because help comes <span className="text-[#F59B1E]">too late</span>.
            </h2>
<p className="mt-6 text-[#1A2332] text-lg max-w-2xl mx-auto font-light">
                In rapidly growing urban centers like Abuja, traffic, communication breakdowns, and uncoordinated hospital routing cost precious lives every single day.
            </p>
</div>
<div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-6">

<div className="bg-[#0B3D52] p-8 rounded-[2rem] reveal reveal-delay-1 flex flex-col justify-between hover:-translate-y-1 transition-transform">
<iconify-icon className="text-[#8BAAB8] text-3xl mb-4" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="font-mono text-[#00B4C8] text-4xl md:text-5xl font-light tracking-tight mb-2">45<span className="text-2xl">mins</span></div>
<div className="font-sora text-white font-medium text-lg mb-2">Average Delay</div>
<p className="text-[#8BAAB8] text-sm leading-relaxed">The typical time lost navigating symptoms before deciding to seek emergency medical attention.</p>
</div>
</div>

<div className="bg-[#0B3D52] p-8 rounded-[2rem] reveal reveal-delay-2 flex flex-col justify-between hover:-translate-y-1 transition-transform">
<iconify-icon className="text-[#8BAAB8] text-3xl mb-4" icon="solar:map-point-wave-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="font-mono text-[#00B4C8] text-4xl md:text-5xl font-light tracking-tight mb-2">3+</div>
<div className="font-sora text-white font-medium text-lg mb-2">Hospital Rejections</div>
<p className="text-[#8BAAB8] text-sm leading-relaxed">Often occur during emergencies due to lack of bed space or unavailable specialists, wasting critical time.</p>
</div>
</div>

<div className="bg-[#0B3D52] p-8 rounded-[2rem] reveal reveal-delay-3 flex flex-col justify-between hover:-translate-y-1 transition-transform">
<iconify-icon className="text-[#8BAAB8] text-3xl mb-4" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="font-mono text-[#00B4C8] text-4xl md:text-5xl font-light tracking-tight mb-2">1:4000</div>
<div className="font-sora text-white font-medium text-lg mb-2">Doctor to Patient Ratio</div>
<p className="text-[#8BAAB8] text-sm leading-relaxed">Creates massive bottlenecks in outpatient wards, turning minor issues into severe complications.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F8FA] py-32 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-[#00B4C8] uppercase tracking-[0.2em] text-xs font-semibold block mb-3">Core Platform</span>
<h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#0B3D52] tracking-tight">Three Tools. One Platform.<br/>Zero Delay.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal reveal-delay-1 border border-transparent hover:border-l-4 hover:border-l-[#00B4C8]">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E8F2F6] to-transparent rounded-bl-[4rem] -z-10 opacity-50"></div>
<div className="w-14 h-14 rounded-2xl bg-[#F4F8FA] flex items-center justify-center mb-6 text-[#00B4C8] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:brain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-sora font-semibold text-xl text-[#0B3D52] mb-3 tracking-tight">AI Symptom Check</h3>
<p className="text-[#1A2332] text-sm leading-relaxed opacity-80">
                        Intelligent, context-aware triage that instantly evaluates your symptoms before connecting you to the right medical professional.
                    </p>

<div className="mt-8 bg-[#F4F8FA] rounded-xl h-24 p-4 flex flex-col justify-end border border-[#E8F2F6]">
<div className="w-3/4 h-3 bg-[#E8F2F6] rounded-full mb-2"></div>
<div className="w-1/2 h-3 bg-[#00B4C8]/20 rounded-full"></div>
</div>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal reveal-delay-2 border border-transparent hover:border-l-4 hover:border-l-[#D92B2B]">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D92B2B]/5 to-transparent rounded-bl-[4rem] -z-10"></div>
<div className="w-14 h-14 rounded-2xl bg-[#F4F8FA] flex items-center justify-center mb-6 text-[#D92B2B] relative group-hover:scale-110 transition-transform duration-500">
<div className="absolute inset-0 bg-[#D92B2B]/20 rounded-2xl pulse-red group-hover:animate-none"></div>
<iconify-icon className="text-3xl relative z-10" icon="solar:siren-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-sora font-semibold text-xl text-[#0B3D52] mb-3 tracking-tight">Emergency Virtual Triage</h3>
<p className="text-[#1A2332] text-sm leading-relaxed opacity-80">
                        Real-time video or audio connection to an emergency physician to buy critical time while physical help is arranged.
                    </p>

<div className="mt-8 bg-[#F4F8FA] rounded-xl h-24 flex items-center justify-center border border-[#E8F2F6] overflow-hidden">
<svg className="w-full h-8 text-[#D92B2B] opacity-50" fill="none" preserveaspectratio="none" viewbox="0 0 200 40">
<path d="M0 20 H50 L60 5 L70 35 L80 20 H200" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden reveal reveal-delay-3 border border-transparent hover:border-l-4 hover:border-l-[#00B4C8]">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E8F2F6] to-transparent rounded-bl-[4rem] -z-10 opacity-50"></div>
<div className="w-14 h-14 rounded-2xl bg-[#F4F8FA] flex items-center justify-center mb-6 text-[#00B4C8] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-sora font-semibold text-xl text-[#0B3D52] mb-3 tracking-tight">Pre-notified Routing</h3>
<p className="text-[#1A2332] text-sm leading-relaxed opacity-80">
                        We don't just find the nearest hospital; we route you to the one with available space and pre-notify them of your arrival.
                    </p>

<div className="mt-8 bg-[#F4F8FA] rounded-xl h-24 p-4 relative border border-[#E8F2F6]">
<div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#1A2332]"></div>
<div className="absolute top-4 left-[22px] w-16 h-[2px] bg-dashed border-t border-dashed border-[#1A2332]/30 mt-[5px]"></div>
<div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#00B4C8] flex items-center justify-center -translate-y-[2px]">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="absolute bottom-4 left-4 text-xs font-mono text-[#8BAAB8]">Finding route...</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 px-6 border-y border-[#E8F2F6]" id="telemedicine">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<span className="text-[#00B4C8] uppercase tracking-[0.2em] text-xs font-semibold block mb-3">Core Technology</span>
<h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#0B3D52] tracking-tight mb-6">
                        AI-Assisted Triage.<br/>Human-Led Healthcare.
                    </h2>
<p className="text-[#1A2332] text-lg font-light mb-8 leading-relaxed">
                        A core component of our platform is the collaborative AI + Doctor model. It combines the speed of an artificial intelligence preliminary assessment with the expertise of qualified healthcare professionals to deliver scalable, timely support.
                    </p>
<div className="space-y-8">

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-[#F4F8FA] flex items-center justify-center shrink-0 text-[#00B4C8] border border-[#E8F2F6]">
<iconify-icon className="text-xl" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-sora font-semibold text-base text-[#0B3D52] mb-1">30 to 60-Second AI Intake</h4>
<p className="text-[#1A2332] text-sm opacity-80 leading-relaxed">
                                    The AI engages you in a structured conversation, gathering vital symptoms, urgency levels, and risk factors instantly—completing an assessment that usually takes minutes.
                                </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-[#F4F8FA] flex items-center justify-center shrink-0 text-[#F59B1E] border border-[#E8F2F6]">
<iconify-icon className="text-xl" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-sora font-semibold text-base text-[#0B3D52] mb-1">Smart Escalation &amp; Summary</h4>
<p className="text-[#1A2332] text-sm opacity-80 leading-relaxed">
                                    Mild cases receive instant health guidance. Complex cases are escalated immediately to a licensed doctor in our network who receives a structured clinical summary to prevent repetition.
                                </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-[#F4F8FA] flex items-center justify-center shrink-0 text-[#12A36A] border border-[#E8F2F6]">
<iconify-icon className="text-xl" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-sora font-semibold text-base text-[#0B3D52] mb-1">Doctor's Final Authority</h4>
<p className="text-[#1A2332] text-sm opacity-80 leading-relaxed">
                                    The physician connects via secure chat, voice, or video to make the final diagnosis, prescribe treatment recommendations, or refer you to a partnered hospital for physical intervention.
                                </p>
</div>
</div>
</div>
</div>

<div className="relative w-full rounded-[2rem] bg-[#F4F8FA] border border-[#E8F2F6] p-6 sm:p-8 reveal reveal-delay-2 h-[600px] flex flex-col shadow-sm">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8F2F6]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#0B3D52] flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-[#0B3D52] text-sm font-semibold tracking-tight">Dr. Okafor's Dashboard</div>
<div className="text-[#8BAAB8] text-xs font-medium">Awaiting Consultation</div>
</div>
</div>
<div className="px-3 py-1.5 rounded-full bg-[#00B4C8]/10 text-[#00B4C8] text-xs font-semibold uppercase tracking-wider">
                           Incoming Transfer
                       </div>
</div>

<div className="bg-white rounded-xl p-5 border border-[#E8F2F6] shadow-sm mb-4 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00B4C8]"></div>
<div className="flex items-center gap-2 mb-3 pl-2">
<iconify-icon className="text-[#00B4C8] text-lg" icon="solar:brain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#0B3D52] text-sm font-semibold tracking-tight">AI Intake Summary</span>
<span className="ml-auto text-[#8BAAB8] text-xs font-mono bg-[#F4F8FA] px-2 py-1 rounded">Time: 42s</span>
</div>
<p className="text-sm text-[#1A2332] opacity-80 leading-relaxed mb-4 pl-2">
                            Patient reports acute chest pressure radiating to the left arm. Onset 20 minutes ago. Diaphoretic. No known cardiac history. Pulse elevated.
                        </p>
<div className="flex gap-2 pl-2">
<span className="px-2 py-1 bg-[#D92B2B]/10 text-[#D92B2B] rounded text-xs font-semibold">High Urgency</span>
<span className="px-2 py-1 bg-[#F4F8FA] text-[#1A2332] rounded text-xs font-semibold">Cardiac</span>
</div>
</div>

<div className="flex-1 flex flex-col justify-end gap-4 relative z-10 pb-2">

<div className="flex gap-3 max-w-[90%] self-start">
<div className="w-8 h-8 rounded-full bg-[#00B4C8] flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
<iconify-icon className="text-sm" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="bg-white border border-[#E8F2F6] rounded-2xl rounded-tl-sm p-4 shadow-sm">
<p className="text-sm text-[#1A2332] leading-relaxed">I've compiled your symptoms. Due to the urgency, I am transferring you to a licensed physician immediately. Please stand by.</p>
</div>
</div>

<div className="flex gap-3 max-w-[90%] self-start mt-2">
<div className="w-8 h-8 rounded-full bg-[#0B3D52] flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
<iconify-icon className="text-sm" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="bg-[#0B3D52] rounded-2xl rounded-tl-sm p-4 shadow-md">
<p className="text-sm text-white leading-relaxed font-light">Hello, this is Dr. Okafor. I have reviewed your AI summary so we don't need to repeat the details. Are you in a safe place to switch to a secure video call?</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0B3D52] py-32 px-6 text-white overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="font-sora font-semibold text-3xl md:text-4xl tracking-tight">From Symptom to Safety in Minutes</h2>
<p className="mt-4 text-[#8BAAB8] font-light text-lg">A seamless infrastructure designed to remove friction when you need help most.</p>
</div>

<div className="relative reveal reveal-delay-1">

<div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#00B4C8]/20 via-[#00B4C8] to-[#00B4C8]/20 -z-0"></div>

<div className="md:hidden absolute left-[28px] top-[10%] bottom-[10%] w-0.5 bg-gradient-to-b from-[#00B4C8]/20 via-[#00B4C8] to-[#00B4C8]/20 -z-0"></div>
<div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">

<div className="flex md:flex-col items-start md:items-center gap-6 md:text-center group">
<div className="w-14 h-14 rounded-full bg-[#F59B1E] flex items-center justify-center font-sora font-semibold text-xl shrink-0 shadow-[0_0_20px_rgba(245,155,30,0.3)] group-hover:scale-110 transition-transform">
                            1
                        </div>
<div>
<h4 className="font-sora font-medium text-lg mb-2 tracking-tight">Secure Sign Up</h4>
<p className="text-[#8BAAB8] text-sm leading-relaxed">Create your account instantly. Verification happens later; care happens now.</p>
</div>
</div>

<div className="flex md:flex-col items-start md:items-center gap-6 md:text-center group">
<div className="w-14 h-14 rounded-full bg-[#F59B1E] flex items-center justify-center font-sora font-semibold text-xl shrink-0 shadow-[0_0_20px_rgba(245,155,30,0.3)] group-hover:scale-110 transition-transform">
                            2
                        </div>
<div>
<h4 className="font-sora font-medium text-lg mb-2 tracking-tight">Report Symptoms</h4>
<p className="text-[#8BAAB8] text-sm leading-relaxed">Chat or speak with our AI. It categorizes severity instantly.</p>
</div>
</div>

<div className="flex md:flex-col items-start md:items-center gap-6 md:text-center group">
<div className="w-14 h-14 rounded-full bg-[#F59B1E] flex items-center justify-center font-sora font-semibold text-xl shrink-0 shadow-[0_0_20px_rgba(245,155,30,0.3)] group-hover:scale-110 transition-transform">
                            3
                        </div>
<div>
<h4 className="font-sora font-medium text-lg mb-2 tracking-tight">Doctor Guidance</h4>
<p className="text-[#8BAAB8] text-sm leading-relaxed">Connect virtually with a licensed professional for immediate directives.</p>
</div>
</div>

<div className="flex md:flex-col items-start md:items-center gap-6 md:text-center group">
<div className="w-14 h-14 rounded-full bg-[#F59B1E] flex items-center justify-center font-sora font-semibold text-xl shrink-0 shadow-[0_0_20px_rgba(245,155,30,0.3)] group-hover:scale-110 transition-transform">
                            4
                        </div>
<div>
<h4 className="font-sora font-medium text-lg mb-2 tracking-tight">Directed Routing</h4>
<p className="text-[#8BAAB8] text-sm leading-relaxed">If needed, we guide you to the nearest equipped facility, pre-notified.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F8FA] py-32 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#0B3D52] tracking-tight">Flexible Credits. Real Healthcare.</h2>
<p className="mt-4 text-[#1A2332] opacity-80 font-light text-lg">Purchase credits as you need them. They never expire. Use them at your pace across any service.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#E8F2F6] reveal reveal-delay-1">
<div className="text-[#1A2332] font-medium text-lg mb-2">Individual Safety</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-mono text-3xl text-[#0B3D52]">50</span>
<span className="text-[#8BAAB8] text-sm">Credits</span>
</div>
<p className="text-sm text-[#1A2332] opacity-70 mb-8 min-h-[40px]">Perfect for individuals wanting baseline emergency readiness.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#12A36A] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A2332]">1 User profile</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#12A36A] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A2332]">AI Triage access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#12A36A] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A2332]">Standard doctor routing</span>
</li>
</ul>
<button className="w-full py-3 rounded-full border border-[#0B3D52] text-[#0B3D52] font-medium hover:bg-[#0B3D52] hover:text-white transition-colors">
                        Select Plan
                    </button>
</div>

<div className="bg-[#0B3D52] rounded-[2rem] p-8 shadow-2xl relative transform lg:-translate-y-4 reveal reveal-delay-2 border-2 border-[#00B4C8]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B4C8] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                    </div>
<div className="text-white font-medium text-lg mb-2">Family Shield</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-mono text-4xl text-white">200</span>
<span className="text-[#00B4C8] text-sm">Credits</span>
</div>
<p className="text-sm text-[#8BAAB8] mb-8 min-h-[40px]">Shared pool for households. Protect those who matter most.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00B4C8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Up to 5 Family Members</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00B4C8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Priority Emergency Virtual Consults</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00B4C8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Pre-notified Hospital Routing</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00B4C8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white">Shared health history dashboard</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-[#F59B1E] text-white font-medium hover:bg-opacity-90 transition-colors shadow-lg">
                        Get Started Free
                    </button>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#E8F2F6] reveal reveal-delay-3">
<div className="text-[#1A2332] font-medium text-lg mb-2">Organization Bulk</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-mono text-3xl text-[#0B3D52]">Custom</span>
</div>
<p className="text-sm text-[#1A2332] opacity-70 mb-8 min-h-[40px]">For estates, corporate offices, and community groups.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#12A36A] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A2332]">Unlimited users</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#12A36A] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A2332]">Bulk credit discounting</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#12A36A] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A2332]">Dedicated account manager</span>
</li>
</ul>
<button className="w-full py-3 rounded-full border border-[#0B3D52] text-[#0B3D52] font-medium hover:bg-[#0B3D52] hover:text-white transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
<p className="text-center text-xs text-[#8BAAB8] mt-12 font-medium">Pricing reflects credit bundles. Average consult costs 10 credits. Terms apply.</p>
</div>
</section>

<section className="bg-[#E8F2F6] py-32 px-6" id="trust">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#0B3D52] tracking-tight mb-6">Built for Trust from Day One.</h2>
<p className="text-[#1A2332] text-lg font-light mb-6 leading-relaxed">
                    Healthcare requires absolute transparency and security. Our platform enforces mandatory KYC (Know Your Customer) verification after your 7-day trial. 
                </p>
<p className="text-[#1A2332] text-base font-light mb-8 leading-relaxed opacity-80">
                    This protects doctors from fraudulent calls, ensures your medical data is tied legally to you, and allows hospitals to admit you without administrative delays during an emergency.
                </p>
<a className="inline-flex items-center gap-2 text-[#00B4C8] font-medium hover:underline text-sm" href="#">
                    Read our security whitepaper <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-4 reveal reveal-delay-2">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F4F8FA] flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-[#E8F2F6] flex items-center justify-center text-[#0B3D52]">
<iconify-icon className="text-xl" icon="solar:diploma-verified-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="font-sora font-medium text-[#0B3D52]">Licensed Doctors</div>
<div className="text-xs text-[#1A2332] opacity-70">MDCN verified practitioners only.</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F4F8FA] flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-[#E8F2F6] flex items-center justify-center text-[#12A36A]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="font-sora font-medium text-[#0B3D52]">KYC Verified</div>
<div className="text-xs text-[#1A2332] opacity-70">Government ID matched user accounts.</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F4F8FA] flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-[#E8F2F6] flex items-center justify-center text-[#00B4C8]">
<iconify-icon className="text-xl" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="font-sora font-medium text-[#0B3D52]">E2E Encryption</div>
<div className="text-xs text-[#1A2332] opacity-70">Consultations are secure and private.</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F4F8FA] flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-[#E8F2F6] flex items-center justify-center text-[#F59B1E]">
<iconify-icon className="text-xl" icon="solar:hospital-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="font-sora font-medium text-[#0B3D52]">Hospital Network</div>
<div className="text-xs text-[#1A2332] opacity-70">Vetted facilities in Abuja network.</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0B3D52] py-32 px-6 text-center relative overflow-hidden" id="trial">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-[#00B4C8]/5 blur-3xl rounded-full rotate-45"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[100%] bg-[#F59B1E]/5 blur-3xl rounded-full"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10 reveal">
<h2 className="font-sora font-semibold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-8">
                Your family deserves a safety net.
            </h2>
<button className="px-10 py-5 rounded-full bg-[#F59B1E] text-white text-lg font-medium hover:bg-opacity-90 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(245,155,30,0.3)]">
                Start Your Free 7-Day Trial
            </button>
<p className="mt-8 text-[#8BAAB8] text-sm font-medium">
                Available now in Abuja. Expanding across Nigeria.
            </p>
</div>
</section>

<section className="bg-white py-32 px-6" id="faq">
<div className="max-w-4xl mx-auto">
<div className="reveal mb-16 text-center md:text-left">
<h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#0B3D52] tracking-tight mb-4">Common questions</h2>
<p className="text-[#8BAAB8] text-lg font-light">What you need to know.</p>
</div>
<div className="reveal reveal-delay-1 divide-y divide-[#E8F2F6]">
<details className="group py-6 first:pt-0" open="">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-sora font-semibold text-lg text-[#0B3D52] focus:outline-none">
<span>When does Branddove launch?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#1A2332] font-light opacity-80 text-sm md:text-base pr-8">
                        We are launching in Abuja, Nigeria in 2025. Waitlist members will be the first to receive access — and founding members get exclusive early pricing before public launch.
                    </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-sora font-semibold text-lg text-[#0B3D52] focus:outline-none">
<span>Is this a replacement for going to the hospital?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#1A2332] font-light opacity-80 text-sm md:text-base pr-8">
                        No. Branddove is the bridge that gets you to the right hospital faster and better prepared. We provide immediate guidance and triage — not a substitute for emergency care.
                    </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-sora font-semibold text-lg text-[#0B3D52] focus:outline-none">
<span>How does the credit system work?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#1A2332] font-light opacity-80 text-sm md:text-base pr-8">
                        Instead of a rigid monthly subscription, you purchase health credits and use them as needed. Regular consultations use fewer credits. Emergency activations use more. Credits don't expire immediately — so nothing goes to waste.
                    </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-sora font-semibold text-lg text-[#0B3D52] focus:outline-none">
<span>We're a company — can we sign up for multiple employees?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#1A2332] font-light opacity-80 text-sm md:text-base pr-8">
                        Yes. We're building dedicated corporate and estate plans with bulk coverage, admin dashboards, and priority support. Submit a corporate interest form when signing up and our team will reach out directly.
                    </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-sora font-semibold text-lg text-[#0B3D52] focus:outline-none">
<span>Are the doctors real and licensed?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#1A2332] font-light opacity-80 text-sm md:text-base pr-8">
                        Absolutely. Every doctor on the Branddove platform is licensed, verified, and reviewed. AI provides initial structured guidance, but every consultation is reviewed and finalised by a real medical professional.
                    </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between gap-4 font-sora font-semibold text-lg text-[#0B3D52] focus:outline-none">
<span>Is my health data secure?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#00B4C8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#1A2332] font-light opacity-80 text-sm md:text-base pr-8">
                        Yes. We are building to NDPR compliance standards from day one. Your health data is encrypted, never sold, and only accessible to the medical professionals serving your care.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-[#1A2332] pt-20 pb-10 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-1 font-sora font-semibold tracking-tighter text-xl mb-4" href="#">
<span className="text-white">BRANDDOVE</span>
<span className="text-[#00B4C8]">HEALTH</span>
</a>
<p className="text-[#8BAAB8] text-sm max-w-sm mb-6 leading-relaxed">
                        Intelligent healthcare infrastructure ensuring help arrives before it's too late. Designed for Africa.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00B4C8] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00B4C8] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00B4C8] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
</a>
</div>
</div>

<div>
<h4 className="text-white font-sora font-medium mb-6">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Symptom Checker</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Emergency Triage</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Hospital Routing</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Pricing Options</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-sora font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Partner Hospitals</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Contact Sales</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-sora font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">KYC Documentation</a></li>
<li><a className="text-[#8BAAB8] hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8BAAB8]">
<p>© 2025 Branddove Health Technologies. All rights reserved.</p>
<div className="flex gap-6">
<span>Abuja, Nigeria</span>
<a className="hover:text-white" href="#">Status: All Systems Operational</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
