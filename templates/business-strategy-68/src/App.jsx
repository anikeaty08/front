import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-50/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-space text-xl font-medium tracking-tight text-black hover:opacity-70 transition-opacity" href="#">
                SARAH MARTINEZ
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-base text-stone-500 hover:text-black transition-colors" href="#about">About</a>
<a className="text-base text-stone-500 hover:text-black transition-colors" href="#experience">Experience</a>
<a className="text-base text-stone-500 hover:text-black transition-colors" href="#skills">Skills</a>
<a className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-stone-800 transition-transform hover:-translate-y-0.5 shadow-sm" href="#contact">
                    Contact Me
                </a>
</div>

<button className="md:hidden text-stone-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-neutral-50 border-b border-stone-200 p-6 flex flex-col gap-6 shadow-md" id="mobile-menu">
<a className="text-lg text-stone-600" href="#about">About</a>
<a className="text-lg text-stone-600" href="#experience">Experience</a>
<a className="text-lg text-stone-600" href="#skills">Skills</a>
<a className="text-lg font-medium text-black" href="#contact">Contact</a>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 max-w-5xl mx-auto text-center">

<div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-stone-200 shadow-md mb-10 overflow-hidden relative group">
<img alt="Sarah Martinez" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h1 className="text-5xl md:text-7xl font-normal text-black mb-4 tracking-tighter leading-tight">
            Sarah Martinez
        </h1>
<p className="text-2xl md:text-3xl text-stone-500 font-light mb-10 tracking-tight max-w-3xl">
            Business Strategy Student <span className="text-stone-300 px-2">|</span> Future Consultant
        </p>
<div className="flex flex-col md:flex-row items-center gap-6 mb-12 text-stone-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-base">Chicago, IL</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-base">sarah.martinez@example.com</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
<span className="text-base">linkedin.com/in/sarahmartinez</span>
</div>
</div>
<a className="group flex items-center gap-3 bg-neutral-100 hover:bg-stone-200 text-stone-900 px-8 py-4 rounded-full transition-all duration-300" href="#experience">
<span className="text-lg font-medium">View My Work</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-stone-200" id="about">
<div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
<div className="md:col-span-4">
<h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-8 sticky top-32">About</h2>
</div>
<div className="md:col-span-8">
<p className="text-xl md:text-2xl leading-relaxed text-stone-600 mb-8 font-light">
                    I'm a senior at Wheaton College studying Business Management with a concentration in Strategy. What excites me most is the intersection of <span className="text-black font-normal">people and systems</span>—how great leaders build cultures where teams thrive.
                </p>
<p className="text-lg md:text-xl leading-relaxed text-stone-600 mb-8">
                    My approach has been shaped by leading the Business Society operations, where I restructured our event planning and saw how small process improvements compound into major impact. I spent two summers in consulting, learning that the best solutions come from deeply understanding problems first.
                </p>
<p className="text-lg md:text-xl leading-relaxed text-stone-600">
                    I'm seeking full-time opportunities in management consulting or operations where I can combine analytical thinking with people leadership.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-stone-200 bg-neutral-50/50">
<div className="grid md:grid-cols-12 gap-12 md:gap-20">
<div className="md:col-span-4">
<h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-8 sticky top-32">Education</h2>
</div>
<div className="md:col-span-8 space-y-12">
<div className="bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
<div>
<h3 className="text-3xl font-normal text-black mb-2 tracking-tight">Wheaton College</h3>
<p className="text-xl text-stone-600">B.S. Business Management</p>
</div>
<div className="text-left md:text-right mt-4 md:mt-0">
<span className="block text-lg text-stone-900 font-medium">May 2026</span>
<span className="block text-base text-stone-400">GPA: 3.8</span>
</div>
</div>
<div className="mb-8">
<p className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4">Coursework</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-neutral-50 border border-stone-100 rounded-lg text-stone-600 text-base">Principles of Management</span>
<span className="px-4 py-2 bg-neutral-50 border border-stone-100 rounded-lg text-stone-600 text-base">Strategic Analysis</span>
<span className="px-4 py-2 bg-neutral-50 border border-stone-100 rounded-lg text-stone-600 text-base">Operations</span>
<span className="px-4 py-2 bg-neutral-50 border border-stone-100 rounded-lg text-stone-600 text-base">Leadership</span>
<span className="px-4 py-2 bg-neutral-50 border border-stone-100 rounded-lg text-stone-600 text-base">Analytics</span>
</div>
</div>
<div>
<p className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4">Activities</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-800 text-base shadow-sm">VP Operations - Business Society</span>
<span className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-800 text-base shadow-sm">Strategy Consulting Club</span>
<span className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-800 text-base shadow-sm">Soccer Captain</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-stone-200" id="experience">
<div className="grid md:grid-cols-12 gap-12 md:gap-20">
<div className="md:col-span-4">
<h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-8 sticky top-32">Experience</h2>
</div>
<div className="md:col-span-8 flex flex-col gap-8">

<div className="group bg-white p-8 md:p-10 rounded-2xl border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
<h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight">Management Consulting Intern</h3>
<span className="text-base md:text-lg text-stone-400 font-normal">Summer 2025</span>
</div>
<p className="text-xl text-stone-500 mb-6">Strategic Solutions Group</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Led process analysis for manufacturing client, reducing cycle time by 28%</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Built financial models projecting ROI, resulting in $200K initiative approval</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Facilitated 8 stakeholder workshops across departments</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Presented to C-suite executives, commended for strategic clarity</span>
</li>
</ul>
</div>

<div className="group bg-white p-8 md:p-10 rounded-2xl border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
<h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight">VP of Operations</h3>
<span className="text-base md:text-lg text-stone-400 font-normal">Sept 2024 - Present</span>
</div>
<p className="text-xl text-stone-500 mb-6">Wheaton Business Society</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Restructured event planning, reducing time 45% while increasing attendance 30%</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Manage $18K budget and coordinate 15+ events annually</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Built partnerships with 6 Chicago companies for speaker series</span>
</li>
</ul>
</div>

<div className="group bg-white p-8 md:p-10 rounded-2xl border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
<h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight">Operations Associate</h3>
<span className="text-base md:text-lg text-stone-400 font-normal">Summer 2024</span>
</div>
<p className="text-xl text-stone-500 mb-6">Riverside Community Center</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Managed youth programs serving 120+ students across 6 tracks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-black shrink-0 mt-1.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-stone-600 leading-relaxed">Optimized staff scheduling, reducing overtime costs by $8K</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-stone-200" id="skills">
<h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-16">Skills</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-black" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-black mb-6 tracking-tight">Business</h3>
<ul className="space-y-3">
<li className="text-lg text-stone-600">Process Optimization</li>
<li className="text-lg text-stone-600">Strategic Planning</li>
<li className="text-lg text-stone-600">Financial Modeling</li>
<li className="text-lg text-stone-600">Project Management</li>
<li className="text-lg text-stone-600">Data Analysis</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-black" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-black mb-6 tracking-tight">Technical</h3>
<ul className="space-y-3">
<li className="text-lg text-stone-600">Excel (Financial Models)</li>
<li className="text-lg text-stone-600">PowerPoint</li>
<li className="text-lg text-stone-600">Tableau</li>
<li className="text-lg text-stone-600">SQL</li>
<li className="text-lg text-stone-600">Asana</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-black" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-black mb-6 tracking-tight">Leadership</h3>
<ul className="space-y-3">
<li className="text-lg text-stone-600">Team Development</li>
<li className="text-lg text-stone-600">Strategic Communication</li>
<li className="text-lg text-stone-600">Problem-Solving</li>
<li className="text-lg text-stone-600">Collaboration</li>
<li className="text-lg text-stone-600">Change Management</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-3xl mx-auto border-t border-stone-200 text-center" id="contact">
<h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight mb-4">Get In Touch</h2>
<p className="text-xl text-stone-500 mb-12">Open to full-time opportunities starting June 2026</p>
<form className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-sm text-left space-y-6">
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 text-stone-900 placeholder:text-stone-400" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 text-stone-900 placeholder:text-stone-400" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 text-stone-900 placeholder:text-stone-400 resize-none" placeholder="Hello..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-black text-white rounded-lg font-medium text-lg hover:bg-stone-800 transform hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center gap-2" type="button">
                Send Message
                <iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</section>

<footer className="py-12 border-t border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-stone-400">© 2025 Sarah Martinez | Built at Wheaton College</p>
<div className="flex items-center gap-8">
<a className="text-stone-400 hover:text-black transition-colors text-sm font-medium" href="#">LinkedIn</a>
<a className="text-stone-400 hover:text-black transition-colors text-sm font-medium" href="#">Email</a>
<a className="text-stone-400 hover:text-black transition-colors text-sm font-medium flex items-center gap-1" href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    Back to Top
                    <iconify-icon icon="solar:arrow-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
