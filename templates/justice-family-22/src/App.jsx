import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('translate-x-full');
            });
        });

        // Scroll Reveal Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 50) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-[#FAFAF9]', 'bg-white/90');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-white/90', 'bg-[#FAFAF9]');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="group flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-[#2F3E34] text-[#C69C6D] flex items-center justify-center rounded-sm">
<span className="font-serif font-medium text-sm">R</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg font-medium text-[#2F3E34] tracking-tight leading-none">Rise Collective</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 leading-none mt-1">Australia</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#2F3E34] transition-colors" href="#about">About</a>
<a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#2F3E34] transition-colors" href="#programs">Programs</a>
<a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#2F3E34] transition-colors" href="#justice">Justice Focus</a>
<a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#2F3E34] transition-colors" href="#partnerships">Partnerships</a>
<a className="px-5 py-2.5 border border-[#2F3E34]/20 rounded-full text-[#2F3E34] hover:bg-[#2F3E34] hover:text-white transition-all duration-300 text-xs font-medium uppercase tracking-widest" href="#contact">
                    Partner With Us
                </a>
</div>

<button className="lg:hidden text-[#2F3E34]" id="menu-btn">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-[#FAFAF9] transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6" id="mobile-menu">
<a className="text-xl font-serif text-[#2F3E34] py-4 border-b border-stone-200 mobile-link" href="#about">About Rise</a>
<a className="text-xl font-serif text-[#2F3E34] py-4 border-b border-stone-200 mobile-link" href="#programs">Programs</a>
<a className="text-xl font-serif text-[#2F3E34] py-4 border-b border-stone-200 mobile-link" href="#justice">Justice Focus</a>
<a className="text-xl font-serif text-[#2F3E34] py-4 border-b border-stone-200 mobile-link" href="#supportlink">SupportLink</a>
<a className="text-xl font-serif text-[#2F3E34] py-4 border-b border-stone-200 mobile-link" href="#partnerships">Partnerships</a>
<a className="mt-8 px-6 py-4 bg-[#2F3E34] text-white text-center rounded text-sm uppercase tracking-widest mobile-link" href="#contact">Contact Us</a>
</div>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-40">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#C69C6D]/10 to-transparent rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 reveal active">
<div className="flex items-center gap-3 mb-6">
<span className="h-[1px] w-8 bg-[#C69C6D]"></span>
<span className="text-[#C69C6D] font-medium text-xs uppercase tracking-widest">Northern Territory • Australia</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3E34] leading-[1.1] tracking-tight-custom mb-8">
                    Bridging the gap between <br className="hidden md:block"/>
<span className="italic text-slate-500 font-normal">statutory systems</span> and <br className="hidden md:block"/>
<span className="italic text-slate-500 font-normal">family resilience.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl leading-relaxed mb-10">
                    Rise Collective Australia operates at the intersection of justice, corrections, child safety, and family support. We provide independent system navigation and stabilisation for complex needs families.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3.5 bg-[#2F3E34] text-white rounded text-xs font-medium uppercase tracking-widest hover:bg-[#3d5144] transition-colors shadow-lg shadow-[#2F3E34]/10 text-center" href="#contact">
                        Discuss Partnership
                    </a>
<a className="px-8 py-3.5 bg-white border border-stone-200 text-[#2F3E34] rounded text-xs font-medium uppercase tracking-widest hover:bg-stone-50 transition-colors text-center" href="#programs">
                        Our Programs
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 lg:left-12 flex flex-col items-start gap-2 animate-pulse">
<span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
<div className="h-12 w-[1px] bg-slate-300"></div>
</div>
</header>

<section className="py-24 bg-white border-t border-stone-100" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-serif text-[#2F3E34] mb-6 tracking-tight-custom">
                        Grounded in the Territory. <br/>
<span className="italic text-slate-400">Informed by Justice.</span>
</h2>
<div className="space-y-6 text-slate-600 font-light leading-relaxed">
<p>
                            The Northern Territory presents a unique landscape of statutory complexity. For families interacting with Justice, Corrections, and Child Protection, the path to stability is rarely linear.
                        </p>
<p>
                            Rise Collective Australia was established to fill a critical void: the need for professional, non-statutory navigation that speaks the language of the courts while holding the safety of the family.
                        </p>
<p>
                            We are not a generalist counselling service. We are a specialist practice focused on stabilisation, risk reduction, and capacity building within high-stakes environments.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-stone-100">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-100 flex items-center justify-center text-[#2F3E34]">
<span className="font-serif font-medium">SP</span>
</div>
<div>
<h4 className="text-sm font-medium text-[#2F3E34] uppercase tracking-wide">Stephanie Pamenter</h4>
<p className="text-xs text-slate-500 mt-0.5">Founder &amp; Lead Practitioner</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-6 reveal delay-100">

<div className="p-8 bg-[#FAFAF9] rounded border border-stone-100">
<i className="w-6 h-6 text-[#C69C6D] mb-4 stroke-[1.5]" data-lucide="scale"></i>
<h3 className="text-lg font-serif text-[#2F3E34] mb-2">Justice Adjacent</h3>
<p className="text-sm text-slate-600 font-light">
                            Working alongside courts and corrections to support bail compliance, parole reintegration, and diversionary pathways.
                        </p>
</div>

<div className="p-8 bg-[#FAFAF9] rounded border border-stone-100">
<i className="w-6 h-6 text-[#C69C6D] mb-4 stroke-[1.5]" data-lucide="shield-check"></i>
<h3 className="text-lg font-serif text-[#2F3E34] mb-2">Trauma Informed</h3>
<p className="text-sm text-slate-600 font-light">
                            Clinical safety without clinical sterility. We understand the impact of intergenerational trauma on regulatory capacity.
                        </p>
</div>

<div className="p-8 bg-[#FAFAF9] rounded border border-stone-100">
<i className="w-6 h-6 text-[#C69C6D] mb-4 stroke-[1.5]" data-lucide="map"></i>
<h3 className="text-lg font-serif text-[#2F3E34] mb-2">System Navigation</h3>
<p className="text-sm text-slate-600 font-light">
                            Translating statutory requirements into actionable family plans. We bridge the gap between mandate and capability.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2F3E34] text-stone-100 relative overflow-hidden" id="justice">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 reveal">
<div>
<span className="text-[#C69C6D] text-xs font-medium uppercase tracking-widest mb-3 block">Specialised Focus</span>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight-custom">
                        For Justice &amp; Corrections
                    </h2>
</div>
<p className="text-stone-300 max-w-md text-sm font-light mt-6 md:mt-0 text-right md:text-left leading-relaxed">
                    Designed to integrate with custodial environments, community corrections, and legal frameworks to reduce recidivism and enhance family safety.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded reveal delay-100">
<h3 className="text-xl font-serif text-white mb-4">Custodial &amp; Pre-Release</h3>
<ul className="space-y-3 text-stone-300 text-sm font-light">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Parenting capacity assessments for parole boards.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Pre-release family reunification planning.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Maintaining attachment during incarceration.</span>
</li>
</ul>
</div>

<div className="group p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded reveal delay-200">
<h3 className="text-xl font-serif text-white mb-4">Court &amp; Statutory</h3>
<ul className="space-y-3 text-stone-300 text-sm font-light">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Support for bail applications requiring family stability components.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Independent perspective for Child Protection matters.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Compliance monitoring and reporting.</span>
</li>
</ul>
</div>

<div className="group p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded reveal delay-300">
<h3 className="text-xl font-serif text-white mb-4">Reintegration</h3>
<ul className="space-y-3 text-stone-300 text-sm font-light">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Post-release family stabilisation.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Coordination of multi-agency supports.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#C69C6D] shrink-0" data-lucide="check"></i>
<span>Risk management in the home environment.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="programs">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-[#2F3E34] text-xs font-medium uppercase tracking-widest mb-3 block">Service Architecture</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2F3E34] mb-6 tracking-tight-custom">
                    Evidence-informed interventions.
                </h2>
<p className="text-slate-600 font-light leading-relaxed">
                    We do not offer generic support. Our programs are tailored for high-complexity scenarios involving statutory intervention.
                </p>
</div>
<div className="space-y-12">

<div className="bg-white border border-stone-200 p-8 md:p-12 rounded flex flex-col md:flex-row gap-12 items-start reveal">
<div className="md:w-1/3">
<div className="w-12 h-12 bg-[#2F3E34]/5 text-[#2F3E34] rounded flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="network"></i>
</div>
<h3 className="text-2xl font-serif text-[#2F3E34] mb-3">SupportLink</h3>
<p className="text-sm text-slate-500 uppercase tracking-widest font-medium">System Navigation Model</p>
</div>
<div className="md:w-2/3 space-y-4">
<p className="text-slate-700 font-light leading-relaxed">
                            SupportLink is our proprietary navigation framework. It acts as the "connective tissue" between a family and the multiple agencies involved in their lives (Housing, Health, Justice, Territory Families).
                        </p>
<p className="text-slate-700 font-light leading-relaxed">
                            We translate complex statutory requirements into clear, manageable steps for families, reducing the rate of breach and administrative failure.
                        </p>
</div>
</div>

<div className="bg-white border border-stone-200 p-8 md:p-12 rounded flex flex-col md:flex-row gap-12 items-start reveal">
<div className="md:w-1/3">
<div className="w-12 h-12 bg-[#2F3E34]/5 text-[#2F3E34] rounded flex items-center justify-center mb-6">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-2xl font-serif text-[#2F3E34] mb-3">Family Stabilisation</h3>
<p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Intensive Outreach</p>
</div>
<div className="md:w-2/3 space-y-4">
<p className="text-slate-700 font-light leading-relaxed">
                            Practical, in-home support focused on establishing routine, safety, and regulatory capacity. This is not "tea and chat"; it is targeted intervention to lower risk thresholds.
                        </p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-[#C69C6D] rounded-full"></span>
                                Crisis de-escalation
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-[#C69C6D] rounded-full"></span>
                                Practical parenting skill-building
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-[#C69C6D] rounded-full"></span>
                                Household safety planning
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-[#C69C6D] rounded-full"></span>
                                DV/FV safety mapping
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="partnerships">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
<div className="max-w-3xl mx-auto reveal">
<i className="w-8 h-8 mx-auto text-[#C69C6D] mb-6 stroke-[1.5]" data-lucide="users-2"></i>
<h2 className="text-3xl md:text-4xl font-serif text-[#2F3E34] mb-6 tracking-tight-custom">
                    Partnerships &amp; Pilots
                </h2>
<p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                    Rise Collective is positioned to partner with Government, ACCOs, and Legal bodies to pilot targeted interventions. We are agile, data-aware, and ready to test innovative approaches to justice reduction.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mt-12">
<div className="p-6 bg-[#FAFAF9] rounded border border-stone-100">
<span className="block text-sm font-semibold text-[#2F3E34] mb-2 uppercase tracking-wide">Government</span>
<p className="text-sm text-slate-600 leading-relaxed">
                            Piloting diversionary programs and intensive family support models for Territory Families and Justice.
                        </p>
</div>
<div className="p-6 bg-[#FAFAF9] rounded border border-stone-100">
<span className="block text-sm font-semibold text-[#2F3E34] mb-2 uppercase tracking-wide">ACCOs</span>
<p className="text-sm text-slate-600 leading-relaxed">
                            Providing specialist support capacity to Aboriginal Community Controlled Organisations under partnership agreements.
                        </p>
</div>
<div className="p-6 bg-[#FAFAF9] rounded border border-stone-100">
<span className="block text-sm font-semibold text-[#2F3E34] mb-2 uppercase tracking-wide">Legal</span>
<p className="text-sm text-slate-600 leading-relaxed">
                            Working with legal aid and private practice to provide social supports that strengthen legal outcomes.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] border-t border-stone-200" id="contact">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl font-serif text-[#2F3E34] mb-4 tracking-tight-custom">Start the Conversation</h2>
<p className="text-slate-600 font-light">
                    Enquire about partnerships, referrals, or pilot opportunities.
                </p>
</div>
<form className="space-y-6 reveal delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">Name</label>
<input className="w-full bg-white border border-stone-200 rounded px-4 py-3 text-[#2F3E34] focus:outline-none focus:ring-1 focus:ring-[#C69C6D] focus:border-[#C69C6D] transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">Organisation</label>
<input className="w-full bg-white border border-stone-200 rounded px-4 py-3 text-[#2F3E34] focus:outline-none focus:ring-1 focus:ring-[#C69C6D] focus:border-[#C69C6D] transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
<input className="w-full bg-white border border-stone-200 rounded px-4 py-3 text-[#2F3E34] focus:outline-none focus:ring-1 focus:ring-[#C69C6D] focus:border-[#C69C6D] transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">Nature of Enquiry</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded px-4 py-3 text-[#2F3E34] focus:outline-none focus:ring-1 focus:ring-[#C69C6D] focus:border-[#C69C6D] transition-all appearance-none">
<option>Partnership / Pilot Discussion</option>
<option>Referral Pathway Information</option>
<option>Government / Departmental Enquiry</option>
<option>Other</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">Message</label>
<textarea className="w-full bg-white border border-stone-200 rounded px-4 py-3 text-[#2F3E34] focus:outline-none focus:ring-1 focus:ring-[#C69C6D] focus:border-[#C69C6D] transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-[#2F3E34] text-white py-4 rounded font-medium uppercase tracking-widest text-xs hover:bg-[#3d5144] transition-colors" type="submit">
                    Send Enquiry
                </button>
</form>
<div className="mt-12 pt-8 border-t border-stone-200 text-center text-slate-500 text-sm font-light">
<p>Darwin, Northern Territory</p>
<p className="mt-2"><a className="hover:text-[#C69C6D] transition-colors" href="mailto:admin@risecollective.com.au">admin@risecollective.com.au</a></p>
</div>
</div>
</section>

<footer className="bg-[#2F3E34] text-stone-300 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
<div className="lg:col-span-1">
<span className="font-serif text-white text-lg font-medium tracking-tight">Rise Collective</span>
<p className="text-xs text-stone-400 mt-4 leading-relaxed">
                        Supporting justice, families, and systems in the Northern Territory.
                    </p>
</div>
<div>
<h5 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Focus Areas</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Justice Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Family Stabilisation</a></li>
<li><a className="hover:text-white transition-colors" href="#">System Navigation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Reintegration</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Organisation</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Governance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Connect</h5>
<p className="text-sm font-light mb-4">Monday - Friday<br/>9:00am - 5:00pm ACST</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div className="max-w-xl">
<p className="text-xs text-stone-400 leading-relaxed font-light">
                        Rise Collective Australia acknowledges the Traditional Owners of the land on which we work and live. We pay our respects to Elders past, present and emerging, and recognise the ongoing connection to land, waters and community.
                    </p>
</div>
<div className="text-xs text-stone-500 uppercase tracking-widest">
                    © 2024 Rise Collective Australia
                </div>
</div>
</div>
</footer>


    </>
  );
}
