import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-[#faf9f6]/80 border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
<a className="tracking-[0.2em] text-xs uppercase font-medium text-stone-800" href="#">
                Khrystyna
            </a>
<div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-500 font-medium">
<a className="hover:text-[var(--color-burgundy)] transition-colors" href="#about">About</a>
<a className="hover:text-[var(--color-burgundy)] transition-colors" href="#areas">Courses</a>
<a className="hover:text-[var(--color-burgundy)] transition-colors" href="#materials">Resources</a>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 text-xs font-medium tracking-widest">
<button className="text-stone-400 hover:text-stone-800 transition-colors">UA</button>
<span className="text-stone-300">/</span>
<button className="text-[var(--color-burgundy)]">EN</button>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white bg-[var(--color-burgundy)] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity" href="#catalog">
                    Enroll
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 z-10">
<h1 className="font-[var(--font-serif)] text-5xl md:text-7xl lg:text-8xl tracking-tighter text-stone-800 leading-[1.05]">
                    English Courses &amp; Exam Preparation with a <span className="italic text-[var(--color-burgundy)] block mt-2">Certified English Coach</span>
</h1>
<p className="mt-8 text-base md:text-lg text-stone-600 max-w-md font-light leading-relaxed">
                    Improve your English with structured, results-focused courses designed for real progress. Whether you’re preparing for IELTS, OET, or improving everyday communication, you’ll get clear guidance and practical results.
                </p>
<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
<a className="text-xs uppercase tracking-widest font-medium text-white bg-[var(--color-burgundy)] px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-center w-full sm:w-auto" href="#catalog">
                        Start Learning
                    </a>
<a className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium text-[var(--color-burgundy)] border-b border-[var(--color-burgundy)] pb-1 hover:pr-2 transition-all" href="#catalog">
                        View Courses
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-5 relative hidden md:block">
<div className="w-full aspect-[4/5] bg-stone-200 organic-shape relative overflow-hidden">
<img alt="Coach Khrystyna" className="w-full h-full object-cover opacity-90 mix-blend-multiply filter grayscale contrast-75 brightness-110" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[var(--color-burgundy)] mix-blend-overlay opacity-20"></div>
</div>

<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#e8e4dc] rounded-full blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-100/50" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-[var(--color-earth)]/40 mb-8" icon="solar:user-circle-linear"></iconify-icon>
<h2 className="font-[var(--font-serif)] text-4xl md:text-5xl tracking-tight text-stone-800 mb-8">
                About Your English Coach
            </h2>
<p className="text-base md:text-xl text-stone-600 font-light leading-relaxed">
                Hi, I’m Khrystyna, an English teacher and international exam coach. I help students improve their English with a clear structure, practical methods, and personalised support. My goal is simple, to help you feel confident using English in real life, exams, and your professional environment.
            </p>
</div>
</section>

<section className="py-24 md:py-40 px-6 max-w-7xl mx-auto" id="areas">
<div className="mb-20">
<h2 className="font-[var(--font-serif)] text-4xl md:text-5xl tracking-tight text-stone-800">English Courses for Every Goal</h2>
</div>
<div className="relative border-l border-stone-200 ml-4 md:ml-8 space-y-24 pb-12">

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-[var(--color-burgundy)] ring-8 ring-[var(--color-cream)]"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="md:w-1/3">
<span className="font-[var(--font-serif)] text-6xl text-stone-200 tracking-tighter leading-none block mb-4">01</span>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800">General English Course</h3>
</div>
<div className="md:w-2/3">
<p className="text-base text-stone-600 font-light leading-relaxed mb-6">Build confidence in speaking, listening, and everyday communication. Perfect if you want to improve your overall English level step by step.</p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-stone-300 ring-8 ring-[var(--color-cream)]"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="md:w-1/3">
<span className="font-[var(--font-serif)] text-6xl text-stone-200 tracking-tighter leading-none block mb-4">02</span>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800">IELTS Academic Preparation</h3>
</div>
<div className="md:w-2/3">
<p className="text-base text-stone-600 font-light leading-relaxed mb-6">Structured preparation for IELTS Academic with a focus on real exam strategies, writing, speaking, and achieving your target score.</p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-stone-300 ring-8 ring-[var(--color-cream)]"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="md:w-1/3">
<span className="font-[var(--font-serif)] text-6xl text-stone-200 tracking-tighter leading-none block mb-4">03</span>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800">OET Medicine Course</h3>
</div>
<div className="md:w-2/3">
<p className="text-base text-stone-600 font-light leading-relaxed mb-6">Specialised English course for medical professionals preparing for OET. Focused on real scenarios, vocabulary, and exam success.</p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-stone-300 ring-8 ring-[var(--color-cream)]"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="md:w-1/3">
<span className="font-[var(--font-serif)] text-6xl text-stone-200 tracking-tighter leading-none block mb-4">04</span>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800">Medical English Course</h3>
</div>
<div className="md:w-2/3">
<p className="text-base text-stone-600 font-light leading-relaxed mb-6">Improve your professional communication in English for healthcare settings, including patient interaction and medical terminology.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200/60" id="catalog">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16">
<h2 className="font-[var(--font-serif)] text-4xl md:text-5xl tracking-tight text-stone-800">Online English Courses</h2>
<p className="text-sm md:text-base text-stone-500 mt-4 font-light max-w-xl">Choose the right course for your level and goals. Get instant access after purchase and start learning immediately.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group border border-stone-200 bg-white p-6 md:p-8 rounded-2xl hover:border-[var(--color-burgundy)]/30 hover:shadow-lg transition-all flex flex-col h-full">
<h3 className="font-[var(--font-serif)] text-2xl tracking-tight text-stone-800 mb-4 group-hover:text-[var(--color-burgundy)] transition-colors">IELTS Academic Course</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-8 flex-grow">Complete IELTS preparation with structured lessons, practice tasks, and exam strategies.</p>
<div className="mt-auto border-t border-stone-100 pt-6">
<span className="text-3xl text-stone-800 font-medium tracking-tight block mb-6">£XXX</span>
<div className="flex flex-col gap-3">
<button className="w-full text-center text-xs uppercase tracking-widest text-white bg-[var(--color-burgundy)] px-6 py-3.5 rounded-full hover:bg-stone-800 transition-colors">Buy Now</button>
<button className="w-full text-center text-xs uppercase tracking-widest text-stone-800 border border-stone-200 px-6 py-3.5 rounded-full hover:border-stone-800 transition-colors">Learn More</button>
</div>
</div>
</div>

<div className="group border border-stone-200 bg-white p-6 md:p-8 rounded-2xl hover:border-[var(--color-burgundy)]/30 hover:shadow-lg transition-all flex flex-col h-full">
<h3 className="font-[var(--font-serif)] text-2xl tracking-tight text-stone-800 mb-4 group-hover:text-[var(--color-burgundy)] transition-colors">General English Course</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-8 flex-grow">Comprehensive training from intermediate to confident upper-intermediate. Focuses on speaking anxiety and natural phrasing.</p>
<div className="mt-auto border-t border-stone-100 pt-6">
<span className="text-3xl text-stone-800 font-medium tracking-tight block mb-6">£XXX</span>
<div className="flex flex-col gap-3">
<button className="w-full text-center text-xs uppercase tracking-widest text-white bg-[var(--color-burgundy)] px-6 py-3.5 rounded-full hover:bg-stone-800 transition-colors">Buy Now</button>
<button className="w-full text-center text-xs uppercase tracking-widest text-stone-800 border border-stone-200 px-6 py-3.5 rounded-full hover:border-stone-800 transition-colors">Learn More</button>
</div>
</div>
</div>

<div className="group border border-stone-200 bg-white p-6 md:p-8 rounded-2xl hover:border-[var(--color-burgundy)]/30 hover:shadow-lg transition-all flex flex-col h-full">
<h3 className="font-[var(--font-serif)] text-2xl tracking-tight text-stone-800 mb-4 group-hover:text-[var(--color-burgundy)] transition-colors">OET Medicine Course</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-8 flex-grow">Perfect your patient consultations and referral letters. Build empathy frameworks and medical explanation techniques.</p>
<div className="mt-auto border-t border-stone-100 pt-6">
<span className="text-3xl text-stone-800 font-medium tracking-tight block mb-6">£XXX</span>
<div className="flex flex-col gap-3">
<button className="w-full text-center text-xs uppercase tracking-widest text-white bg-[var(--color-burgundy)] px-6 py-3.5 rounded-full hover:bg-stone-800 transition-colors">Buy Now</button>
<button className="w-full text-center text-xs uppercase tracking-widest text-stone-800 border border-stone-200 px-6 py-3.5 rounded-full hover:border-stone-800 transition-colors">Learn More</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="text-center mb-16">
<h2 className="font-[var(--font-serif)] text-4xl md:text-5xl tracking-tight text-stone-800 mb-4">What My Students Say</h2>
<p className="text-sm md:text-base text-stone-500 font-light">Real feedback from students who improved their English and achieved their goals.</p>
</div>
<div className="relative space-y-12 md:space-y-0">

<div className="md:w-1/2 md:pr-12">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
<iconify-icon className="absolute top-8 right-8 text-2xl text-stone-200" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-6">"I passed OET on my first attempt. Khrystyna didn't just teach me the test; she changed how I speak to patients. The approach is so humane and professional."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-500">Dr. A</div>
<div>
<p className="text-xs font-medium text-stone-800">Dr. Anna M.</p>
<p className="text-[10px] uppercase tracking-widest text-stone-400">OET Medicine</p>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 md:ml-auto md:pl-12 md:-mt-12">
<div className="bg-[var(--color-burgundy)] text-white p-8 rounded-2xl shadow-sm relative organic-shape-2">
<iconify-icon className="absolute top-8 right-8 text-2xl text-white/20" icon="solar:star-linear"></iconify-icon>
<p className="text-sm font-light leading-relaxed mb-6">"My IELTS score jumped from 6.0 to 7.5 in writing. The feedback was brutal but exactly what I needed. Everything is organized meticulously."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-white">IT</div>
<div>
<p className="text-xs font-medium text-white">Ivan T.</p>
<p className="text-[10px] uppercase tracking-widest text-white/60">IELTS Academic</p>
</div>
</div>
</div>
</div>

<div className="md:w-5/12 mx-auto md:mt-8">
<div className="bg-transparent p-8 border-l border-stone-300">
<p className="text-base font-[var(--font-serif)] text-stone-800 italic leading-relaxed mb-6">"For the first time, I am not translating in my head before I speak. General English coaching felt like talking to a very intelligent friend."</p>
<div className="flex items-center gap-3">
<div>
<p className="text-xs font-medium text-stone-800">Olena K.</p>
<p className="text-[10px] uppercase tracking-widest text-stone-400">General English</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/50 border-t border-stone-200" id="materials">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-4">
<h2 className="font-[var(--font-serif)] text-3xl tracking-tight text-stone-800 mb-4">Free English Learning Resources</h2>
<p className="text-sm text-stone-600 font-light leading-relaxed mb-8">Download useful checklists, guides, and materials to improve your English faster and more effectively.</p>
<div className="space-y-4">
<a className="group flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-[var(--color-burgundy)]/30 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[var(--color-burgundy)]/10 transition-colors">
<iconify-icon className="text-stone-500 group-hover:text-[var(--color-burgundy)]" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700">100 Medical Idioms Guide</span>
</div>
<iconify-icon className="text-stone-300 group-hover:text-[var(--color-burgundy)]" icon="solar:download-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-[var(--color-burgundy)]/30 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[var(--color-burgundy)]/10 transition-colors">
<iconify-icon className="text-stone-500 group-hover:text-[var(--color-burgundy)]" icon="solar:play-stream-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700">IELTS Writing Structure</span>
</div>
<iconify-icon className="text-stone-300 group-hover:text-[var(--color-burgundy)]" icon="solar:download-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-[var(--color-burgundy)]/30 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[var(--color-burgundy)]/10 transition-colors">
<iconify-icon className="text-stone-500 group-hover:text-[var(--color-burgundy)]" icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700">OET Preparation Checklist</span>
</div>
<iconify-icon className="text-stone-300 group-hover:text-[var(--color-burgundy)]" icon="solar:download-linear"></iconify-icon>
</a>
</div>
<a className="mt-8 inline-flex items-center justify-center w-full text-xs uppercase tracking-widest text-stone-800 border border-stone-300 hover:border-stone-800 px-6 py-3.5 rounded-full hover:bg-stone-50 transition-all" href="#">
                    Download Free Resources
                </a>
</div>

<div className="lg:col-span-8">
<h2 className="font-[var(--font-serif)] text-3xl tracking-tight text-stone-800 mb-12">Frequently Asked Questions</h2>
<div className="space-y-12">
<div className="grid md:grid-cols-12 gap-6 md:gap-8 pb-12 border-b border-stone-200/60">
<div className="md:col-span-5">
<h4 className="font-[var(--font-serif)] text-xl tracking-tight text-stone-800">Do you offer a trial lesson?</h4>
</div>
<div className="md:col-span-7">
<p className="text-sm text-stone-600 font-light leading-relaxed">Instead of a trial lesson, I offer a 20-minute diagnostic consultation. We discuss your goals, assess your current level verbally, and determine if my methodology aligns with your learning style. It is complimentary.</p>
</div>
</div>
<div className="grid md:grid-cols-12 gap-6 md:gap-8 pb-12 border-b border-stone-200/60">
<div className="md:col-span-5">
<h4 className="font-[var(--font-serif)] text-xl tracking-tight text-stone-800">How long will it take to raise my IELTS score by one band?</h4>
</div>
<div className="md:col-span-7">
<p className="text-sm text-stone-600 font-light leading-relaxed">Statistically, it requires about 200 hours of guided study to move up one full band. However, if your foundational English is strong but you lack exam strategy, intensive targeted coaching can achieve this in 4 to 6 weeks.</p>
</div>
</div>
<div className="grid md:grid-cols-12 gap-6 md:gap-8">
<div className="md:col-span-5">
<h4 className="font-[var(--font-serif)] text-xl tracking-tight text-stone-800">How does payment and instant access work?</h4>
</div>
<div className="md:col-span-7">
<p className="text-sm text-stone-600 font-light leading-relaxed">Once you select a course from the curriculum and complete the secure checkout via Stripe, an automated email immediately grants you access to your student portal containing all materials and scheduling links.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[var(--color-burgundy)] text-[#faf9f6] py-24 md:py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
<h2 className="font-[var(--font-serif)] text-5xl md:text-7xl tracking-tighter mb-8 max-w-3xl">Start Your English Learning Journey Today</h2>
<p className="text-base text-white/70 font-light max-w-md mb-12">Join structured courses designed to help you improve faster and achieve real results.</p>
<a className="inline-flex items-center gap-3 bg-[#faf9f6] text-[var(--color-burgundy)] px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300" href="#catalog">
                Start Now
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="tracking-[0.2em] text-xs uppercase font-medium">Khrystyna © 2023</span>
<div className="flex gap-6 text-sm text-white/60 font-light">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Telegram</a>
</div>
<div className="flex gap-4 text-xs text-white/40">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
