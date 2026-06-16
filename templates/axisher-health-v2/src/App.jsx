import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });

            // Mobile Menu Logic
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                if (mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.remove('translate-x-full');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                }
            }

            mobileMenuBtn.addEventListener('click', toggleMenu);
            closeMenuBtn.addEventListener('click', toggleMenu);

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full px-6 py-6 lg:px-12 flex justify-between items-center z-50">
<a className="flex items-center text-2xl tracking-tighter" href="#">
<span className="font-fraunces font-normal text-[#0E1417]">Axis</span>
<span className="font-fraunces font-medium text-[#C66839]">Her</span>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-sm tracking-wide text-[#0E1417] hover:text-[#C66839] transition-colors relative group" href="#approach">
                Approach
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C66839] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm tracking-wide text-[#0E1417] hover:text-[#C66839] transition-colors relative group" href="#toolkit">
                The Toolkit
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C66839] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm tracking-wide text-[#0E1417] hover:text-[#C66839] transition-colors relative group" href="#stories">
                Stories
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C66839] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm tracking-wide text-[#0E1417] hover:text-[#C66839] transition-colors relative group" href="#employers">
                For Employers
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C66839] transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>
<div className="hidden lg:block">
<a className="inline-flex items-center justify-center bg-[#C66839] text-[#F8F1E5] px-6 py-3 text-sm tracking-wide hover:bg-[#a8552b] transition-all duration-300 hover:shadow-md group" href="#toolkit">
                Get the Toolkit
                <iconify-icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-[#0E1417] focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>

<div className="fixed inset-0 bg-[#F8F1E5] z-[100] transform translate-x-full transition-transform duration-500 flex flex-col pt-24 px-8" id="mobile-menu">
<button className="absolute top-8 right-8 text-[#0E1417]" id="close-menu-btn">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<nav className="flex flex-col gap-8 text-2xl font-fraunces tracking-tight">
<a className="mobile-link text-[#0E1417]" href="#approach">Approach</a>
<a className="mobile-link text-[#0E1417]" href="#toolkit">The Toolkit</a>
<a className="mobile-link text-[#0E1417]" href="#stories">Stories</a>
<a className="mobile-link text-[#0E1417]" href="#employers">For Employers</a>
</nav>
<div className="mt-12">
<a className="mobile-link inline-flex items-center justify-center w-full bg-[#C66839] text-[#F8F1E5] px-6 py-4 text-lg" href="#toolkit">
                Get the Toolkit
            </a>
</div>
</div>

<section className="w-full min-h-[90vh] flex flex-col lg:flex-row relative">

<div className="w-full lg:w-[55%] px-6 py-16 lg:px-20 lg:py-24 flex flex-col justify-center reveal">
<span className="text-xs uppercase tracking-[0.15em] text-[#0E1417] mb-8 block font-normal">Evidence-based · Woman-led</span>
<h1 className="font-fraunces text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-tighter font-light mb-8 text-[#0E1417]">
                Walk into every appointment <span className="italic pr-2">armed.</span>
</h1>
<p className="text-base md:text-lg leading-[1.65] text-[#0E1417] mb-12 max-w-2xl font-normal">
                Women spend nearly half their lives in perimenopause, menopause, and beyond. Most are handed half the information. AxisHer turns the latest hormonal research into a conversation you can have with your doctor — and walk out with answers.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center bg-[#C66839] text-[#F8F1E5] px-8 py-4 text-base hover:bg-[#a8552b] transition-all duration-300 hover:shadow-lg group" href="#toolkit">
                    Get the free toolkit
                    <iconify-icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center border border-[#0E1417]/20 bg-transparent text-[#0E1417] px-8 py-4 text-base hover:border-[#0E1417] transition-all duration-300" href="#stories">
                    Read a story
                </a>
</div>
<p className="text-xs text-[#0E1417]/70 font-normal">Built on peer-reviewed research. Reviewed by clinicians. Always free to read.</p>
</div>

<div className="w-full lg:w-[45%] h-[60vh] lg:h-auto relative overflow-hidden reveal" style={{transitionDelay: '0.2s'}}>
<img alt="Two women conversing" className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-[2000ms] ease-out" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute bottom-6 right-6 bg-[#F8F1E5]/90 backdrop-blur-sm px-4 py-3">
<p className="text-xs font-inter tracking-wide text-[#0E1417]">Your health. Your axis. Our collective voice.</p>
</div>
</div>
</section>

<section className="bg-[#0E1417] text-[#F8F1E5] py-24 px-6 lg:px-20 border-t border-[#F8F1E5]/10">
<div className="max-w-7xl mx-auto reveal">
<h2 className="font-fraunces text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter font-light mb-20 max-w-4xl text-[#F8F1E5]">
                The medical system was built around men. <span className="italic">You weren't.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
<div className="flex flex-col border-t border-[#F8F1E5]/20 pt-6">
<span className="font-fraunces text-5xl lg:text-6xl text-[#C66839] mb-4 tracking-tighter">~40%</span>
<p className="text-base leading-[1.65] font-normal opacity-90">Of a woman's life happens after estrogen begins to decline.</p>
</div>
<div className="flex flex-col border-t border-[#F8F1E5]/20 pt-6">
<span className="font-fraunces text-5xl lg:text-6xl text-[#C66839] mb-4 tracking-tighter">7–10 yrs</span>
<p className="text-base leading-[1.65] font-normal opacity-90">Typical delay between symptom onset and a useful diagnosis.</p>
</div>
<div className="flex flex-col border-t border-[#F8F1E5]/20 pt-6">
<span className="font-fraunces text-5xl lg:text-6xl text-[#C66839] mb-4 tracking-tighter">&lt;20%</span>
<p className="text-base leading-[1.65] font-normal opacity-90">Of OB-GYN residency programs offer formal menopause curriculum.</p>
</div>
<div className="flex flex-col border-t border-[#F8F1E5]/20 pt-6">
<span className="font-fraunces text-5xl lg:text-6xl text-[#C66839] mb-4 tracking-tighter">1 in 4</span>
<p className="text-base leading-[1.65] font-normal opacity-90">Women consider leaving the workforce due to midlife symptoms.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-[#F8F1E5]" id="approach">
<div className="max-w-7xl mx-auto">
<div className="flex items-end gap-6 mb-16 reveal">
<span className="font-fraunces text-[clamp(4rem,8vw,6rem)] leading-none text-[#C66839] tracking-tighter">01</span>
<span className="text-xs uppercase tracking-[0.15em] text-[#0E1417] pb-2 border-b border-[#0E1417]/20 w-32">The approach</span>
</div>
<h2 className="font-fraunces text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tighter font-light mb-6 text-[#0E1417] max-w-3xl reveal">
                Education that becomes leverage.
            </h2>
<p className="text-lg leading-[1.65] text-[#0E1417]/80 max-w-2xl mb-20 reveal">
                Four pathways. One mission: turn what the research already knows into care you can actually receive.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-[#F8F1E5] border border-[#E8E0D0] p-10 lg:p-12 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,20,23,0.05)] transition-all duration-500 reveal">
<span className="text-sm font-fraunces text-[#C66839] mb-6 block tracking-tight">01 — Learn</span>
<h3 className="font-fraunces text-3xl text-[#0E1417] mb-4 tracking-tighter">Clinical Webinars</h3>
<p className="text-base leading-[1.65] text-[#0E1417]">Translate the latest research into language you can use. We bring respected clinicians together to walk through the studies, the controversies, and the practical implications.</p>
</div>

<div className="bg-[#F8F1E5] border border-[#E8E0D0] p-10 lg:p-12 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,20,23,0.05)] transition-all duration-500 reveal" style={{transitionDelay: '0.1s'}}>
<span className="text-sm font-fraunces text-[#C66839] mb-6 block tracking-tight">02 — Advocate</span>
<h3 className="font-fraunces text-3xl text-[#0E1417] mb-4 tracking-tighter">The Advocacy Toolkit</h3>
<p className="text-base leading-[1.65] text-[#0E1417]">The one-pager that makes your doctor sit up. A downloadable kit that helps you prepare for appointments, track symptoms, ask the right questions, and document the outcome.</p>
</div>

<div className="bg-[#F8F1E5] border border-[#E8E0D0] p-10 lg:p-12 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,20,23,0.05)] transition-all duration-500 reveal">
<span className="text-sm font-fraunces text-[#C66839] mb-6 block tracking-tight">03 — Heal</span>
<h3 className="font-fraunces text-3xl text-[#0E1417] mb-4 tracking-tighter">Virtual Support Groups</h3>
<p className="text-base leading-[1.65] text-[#0E1417]">For the women who've been dismissed before. Facilitated, evidence-informed virtual circles for women navigating medical trauma, misdiagnosis, or years of unanswered symptoms.</p>
</div>

<div className="bg-[#F8F1E5] border border-[#E8E0D0] p-10 lg:p-12 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,20,23,0.05)] transition-all duration-500 reveal" style={{transitionDelay: '0.1s'}}>
<span className="text-sm font-fraunces text-[#C66839] mb-6 block tracking-tight">04 — Scale</span>
<h3 className="font-fraunces text-3xl text-[#0E1417] mb-4 tracking-tighter">Workplace Programs</h3>
<p className="text-base leading-[1.65] text-[#0E1417]">Bring AxisHer to your team. Turnkey midlife-health education for employers, ERGs, and benefits leaders — improving retention and showing women they're seen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-20 bg-[#F8F1E5]" id="toolkit">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

<div className="w-full lg:w-1/2 reveal">
<span className="text-xs uppercase tracking-[0.15em] text-[#C66839] mb-6 block">Free download</span>
<h2 className="font-fraunces text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter font-light mb-6 text-[#0E1417]">
                    The Midlife <span className="italic">Advocacy</span> Toolkit.
                </h2>
<p className="text-base lg:text-lg leading-[1.65] text-[#0E1417] mb-10">
                    Fifteen minutes of prep. One conversation that changes your care. Built with clinicians and tested with real patients.
                </p>
<ul className="flex flex-col gap-5 text-base text-[#0E1417]">
<li className="flex items-start">
<iconify-icon className="text-[#C66839] text-xl mt-1 mr-4 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">A symptom tracker that maps to clinical language</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#C66839] text-xl mt-1 mr-4 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">A question script you can hand to your provider</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#C66839] text-xl mt-1 mr-4 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">A roadmap of evidence-based options to ask about</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#C66839] text-xl mt-1 mr-4 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">A follow-up template so nothing falls through the cracks</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#C66839] text-xl mt-1 mr-4 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">Plain-English summaries of the latest research</span>
</li>
</ul>
</div>

<div className="w-full lg:w-1/2 reveal" style={{transitionDelay: '0.2s'}}>
<div className="bg-[#F2EAE0] p-8 lg:p-12 border border-[#E8E0D0] shadow-[0_30px_60px_-20px_rgba(14,20,23,0.08)]">
<h3 className="font-fraunces text-3xl tracking-tighter text-[#0E1417] mb-2">Send me the toolkit.</h3>
<p className="text-sm text-[#0E1417]/70 mb-8 font-normal">One email. No spam. Unsubscribe anytime.</p>
<form className="flex flex-col gap-6">
<div className="flex flex-col">
<label className="sr-only" htmlFor="fname">First name</label>
<input className="w-full bg-transparent border-b border-[#0E1417]/20 py-3 text-[#0E1417] placeholder:text-[#0E1417]/50 focus:outline-none focus:border-[#C66839] transition-colors rounded-none" id="fname" placeholder="First name" type="text"/>
</div>
<div className="flex flex-col">
<label className="sr-only" htmlFor="email">Email address</label>
<input className="w-full bg-transparent border-b border-[#0E1417]/20 py-3 text-[#0E1417] placeholder:text-[#0E1417]/50 focus:outline-none focus:border-[#C66839] transition-colors rounded-none" id="email" placeholder="Email address" type="email"/>
</div>
<div className="flex flex-col relative group">
<label className="text-xs uppercase tracking-widest text-[#0E1417]/70 mb-2 mt-4" htmlFor="journey">Where are you in your journey?</label>
<select className="w-full bg-transparent border-b border-[#0E1417]/20 py-3 text-[#0E1417] focus:outline-none focus:border-[#C66839] transition-colors pr-8 cursor-pointer relative z-10" id="journey">
<option className="text-[#0E1417]/50" disabled="" selected="" value="">Optional selection</option>
<option value="wondering">Just starting to wonder</option>
<option value="active">Active perimenopause symptoms</option>
<option value="recent">Recently menopausal</option>
<option value="post">Postmenopausal</option>
<option value="supporting">Supporting someone else</option>
</select>
<iconify-icon className="absolute right-0 bottom-4 text-[#0E1417]/50 z-0 group-focus-within:text-[#C66839] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full bg-[#C66839] text-[#F8F1E5] py-4 mt-4 text-base hover:bg-[#a8552b] transition-all duration-300 flex items-center justify-center group" type="submit">
                            Send me the toolkit
                            <iconify-icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-[10px] text-[#0E1417]/60 leading-relaxed text-center mt-2">
                            By submitting, you agree to receive occasional updates from AxisHer. We never share your information.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-[#F8F1E5] border-t border-[#E8E0D0]" id="stories">
<div className="max-w-7xl mx-auto">
<div className="flex items-end gap-6 mb-16 reveal">
<span className="font-fraunces text-[clamp(4rem,8vw,6rem)] leading-none text-[#C66839] tracking-tighter">02</span>
<span className="text-xs uppercase tracking-[0.15em] text-[#0E1417] pb-2 border-b border-[#0E1417]/20 w-32">A story</span>
</div>
<h2 className="font-fraunces text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter font-light mb-20 text-[#0E1417] max-w-4xl reveal">
                Amy's story isn't unusual. That's exactly why it matters.
            </h2>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

<div className="w-full lg:w-[45%] relative reveal">
<div className="absolute top-4 -left-4 lg:-left-6 bg-[#C66839] text-[#F8F1E5] text-xs uppercase tracking-widest px-4 py-2 z-10 shadow-sm">
                        Member story
                    </div>
<img alt="Editorial portrait of Amy" className="w-full aspect-[4/5] object-cover grayscale-[20%] sepia-[10%] contrast-[1.05]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="w-full lg:w-[55%] flex flex-col justify-center lg:pt-12 reveal" style={{transitionDelay: '0.2s'}}>
<blockquote className="font-fraunces italic text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.4] tracking-tight text-[#3A1B2E] mb-8 border-l border-[#3A1B2E]/20 pl-8 lg:pl-10">
                        "When formal care fails to relieve suffering, women often turn to one another. We share heating pads, advice, supplements, stories — not because it's ideal, but because pain demands relief and options feel scarce."
                    </blockquote>
<p className="text-sm font-inter text-[#0E1417] tracking-widest uppercase mb-12 pl-8 lg:pl-10">
                        — Amy · Diagnosed at 41
                    </p>
<p className="text-base lg:text-lg leading-[1.65] text-[#0E1417] mb-12 pl-0 lg:pl-10">
                        Years of dismissed pain. A surgery she barely understood in advance. A menopause diagnosis delivered, as she put it, like the quiet closing of a chapter that would affect every system in her body. Her story is the reason AxisHer exists.
                    </p>
<div className="pl-0 lg:pl-10">
<a className="inline-flex items-center justify-center border border-[#0E1417]/20 bg-transparent text-[#0E1417] px-8 py-4 text-base hover:border-[#0E1417] transition-all duration-300 group" href="#">
                            Read Amy's full story
                            <iconify-icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-[#F8F1E5] border-t border-[#E8E0D0]" id="employers">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">

<div className="w-full lg:w-5/12 reveal">
<div className="font-fraunces text-[clamp(8rem,15vw,12rem)] leading-[0.8] tracking-tighter text-[#C66839] mb-8">
                    1 in 4
                </div>
<p className="text-xl lg:text-2xl font-fraunces tracking-tight text-[#0E1417] leading-snug mb-12">
                    women consider leaving the workforce because of midlife symptoms their employer doesn't understand.
                </p>
<a className="inline-flex items-center justify-center bg-[#C66839] text-[#F8F1E5] px-8 py-4 text-base hover:bg-[#a8552b] transition-all duration-300 shadow-sm group" href="#">
                    Bring AxisHer to your workplace
                    <iconify-icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="w-full lg:w-7/12 reveal" style={{transitionDelay: '0.2s'}}>
<h2 className="font-fraunces text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter font-light mb-8 text-[#0E1417]">
                    Your highest-performing women are quietly walking out.
                </h2>
<p className="text-base lg:text-lg leading-[1.65] text-[#0E1417] mb-12">
                    AxisHer partners with employers and Employee Resource Groups to deliver evidence-based midlife health education that improves retention, reduces presenteeism, and signals to women that they're seen.
                </p>
<ul className="flex flex-col text-base text-[#0E1417]">
<li className="py-5 border-t border-[#0E1417]/20 flex items-start gap-4">
<span className="text-[#C66839] mt-1 font-mono">→</span>
<span>Live clinician-led sessions for ERGs and all-hands</span>
</li>
<li className="py-5 border-t border-[#0E1417]/20 flex items-start gap-4">
<span className="text-[#C66839] mt-1 font-mono">→</span>
<span>Manager training on what midlife symptoms actually look like</span>
</li>
<li className="py-5 border-t border-[#0E1417]/20 flex items-start gap-4">
<span className="text-[#C66839] mt-1 font-mono">→</span>
<span>Bulk Advocacy Toolkits for benefits enrollment</span>
</li>
<li className="py-5 border-t border-[#0E1417]/20 border-b flex items-start gap-4">
<span className="text-[#C66839] mt-1 font-mono">→</span>
<span>Confidential support cohorts for affected employees</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-[#F8F1E5]">
<div className="max-w-4xl mx-auto text-center reveal">
<span className="text-xs uppercase tracking-[0.15em] text-[#C66839] mb-8 block">The future we're building</span>
<h2 className="font-fraunces text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tighter font-light mb-24 text-[#0E1417]">
                A world where women enter every appointment <span className="italic">prepared</span>, and leave <span className="italic">certain</span>.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
<div className="border-t border-[#0E1417]/20 pt-6">
<h4 className="font-fraunces text-xl tracking-tight text-[#0E1417] mb-3">Translate</h4>
<p className="text-sm leading-relaxed text-[#0E1417]/80">Emerging research, made readable in the time you have between meetings.</p>
</div>
<div className="border-t border-[#0E1417]/20 pt-6">
<h4 className="font-fraunces text-xl tracking-tight text-[#0E1417] mb-3">Equip</h4>
<p className="text-sm leading-relaxed text-[#0E1417]/80">The tools to advocate — for your sleep, your mood, your bones, your future.</p>
</div>
<div className="border-t border-[#0E1417]/20 pt-6">
<h4 className="font-fraunces text-xl tracking-tight text-[#0E1417] mb-3">Connect</h4>
<p className="text-sm leading-relaxed text-[#0E1417]/80">An informed community that replaces isolation with collective expertise.</p>
</div>
<div className="border-t border-[#0E1417]/20 pt-6">
<h4 className="font-fraunces text-xl tracking-tight text-[#0E1417] mb-3">Change</h4>
<p className="text-sm leading-relaxed text-[#0E1417]/80">Systems that finally treat midlife as the medical inflection point it is.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-[#0E1417] text-[#F8F1E5]">
<div className="max-w-2xl mx-auto text-center reveal">
<h2 className="font-fraunces text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter font-light mb-6 text-[#F8F1E5]">
                Get the dispatch.
            </h2>
<p className="text-base lg:text-lg leading-[1.65] text-[#F8F1E5]/80 mb-12 font-normal">
                A short, evidence-forward email twice a month. New research, new tools, no fluff.
            </p>
<form className="flex flex-col sm:flex-row gap-4 mb-6">
<label className="sr-only" htmlFor="newsletter-email">Email address</label>
<input className="flex-grow bg-transparent border-b border-[#F8F1E5]/30 py-3 text-[#F8F1E5] placeholder:text-[#F8F1E5]/50 focus:outline-none focus:border-[#C66839] transition-colors rounded-none px-2" id="newsletter-email" placeholder="Email address" type="email"/>
<button className="bg-[#C66839] text-[#F8F1E5] px-8 py-3 text-sm tracking-wide hover:bg-[#a8552b] transition-all duration-300 sm:w-auto w-full whitespace-nowrap" type="submit">
                    Subscribe
                </button>
</form>
<p className="text-[10px] text-[#F8F1E5]/50 tracking-wide text-left sm:text-center px-2">Unsubscribe anytime. We never share your information.</p>
</div>
</section>

<footer className="bg-[#0E1417] text-[#F8F1E5] px-6 py-16 lg:px-20 lg:py-20 border-t border-[#F8F1E5]/10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

<div className="flex flex-col pr-8">
<div className="text-3xl tracking-tighter mb-6">
<span className="font-fraunces font-normal text-[#F8F1E5]">Axis</span>
<span className="font-fraunces font-medium text-[#C66839]">Her</span>
</div>
<p className="text-sm leading-relaxed text-[#F8F1E5]/70 max-w-[200px]">
                        The advocacy platform for women navigating midlife.
                    </p>
</div>

<div className="flex flex-col">
<h5 className="text-xs uppercase tracking-widest text-[#F8F1E5]/50 mb-6">Explore</h5>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#approach">The approach</a></li>
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#toolkit">The toolkit</a></li>
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#stories">Stories</a></li>
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#">Share your story</a></li>
</ul>
</div>

<div className="flex flex-col">
<h5 className="text-xs uppercase tracking-widest text-[#F8F1E5]/50 mb-6">For organizations</h5>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#employers">Workplace programs</a></li>
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#">Talk to us</a></li>
</ul>
</div>

<div className="flex flex-col">
<h5 className="text-xs uppercase tracking-widest text-[#F8F1E5]/50 mb-6">Connect</h5>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#">Instagram</a></li>
<li><a className="hover:text-[#C66839] transition-colors inline-block" href="#">Facebook</a></li>
<li><a className="hover:text-[#C66839] transition-colors inline-block mt-2" href="mailto:hello@axisher.com">hello@axisher.com</a></li>
</ul>
</div>
</div>

<div className="border-t border-[#F8F1E5]/20 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
<p className="text-xs text-[#F8F1E5]/50">
                    © 2026 AxisHer. Education-forward. Evidence-based. Always.
                </p>
<div className="flex flex-wrap gap-6 text-xs text-[#F8F1E5]/50">
<a className="hover:text-[#C66839] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#C66839] transition-colors" href="#">Terms</a>
<a className="hover:text-[#C66839] transition-colors" href="#">Medical disclaimer</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
