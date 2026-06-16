import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal
600: '#0d9488',
700: '#0f766e',
900: '#134e4a',
},
medical: {
bg: '#f9fafb', // Very light grey/white mix
card: '#ffffff',
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Reveal on Scroll Script
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Haven</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#conditions">Conditions</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#treatments">Treatments</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#testimonials">Stories</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-sm hover:shadow-md" href="#contact">
                        Book Consultation
                    </a>

<button className="md:hidden p-2 text-slate-600" onclick="alert('Mobile menu placeholder')">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="reveal active flex flex-col items-start max-w-2xl">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
                        Now accepting new patients in Douglas
                    </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium text-slate-900 tracking-tight mb-6">
                        Live your life <br/>
<span className="text-brand-600">pain-free.</span>
</h1>
<p className="leading-relaxed text-xl text-slate-500 max-w-lg mb-8" style={{}}>Premium, drug-free pain relief and chiropractic care designed to treat the root cause, not just the symptoms.</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                            Book your visit
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:border-slate-300" href="#treatments">
                            View treatments
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<p>Trusted by 500+ patients in Cork</p>
</div>
</div>

<div className="reveal relative lg:h-[700px] w-full">
<div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
<img alt="Chiropractor treating patient" className="absolute inset-0 h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="bg-gradient-to-t from-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl max-w-xs hidden md:block animate-fade-in-up">
<div className="flex items-start gap-4">
<div className="bg-teal-100 p-3 rounded-full text-brand-600">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Recovery Plan</h3>
<p className="text-slate-500 text-sm mt-1">Personalized holistic approach for long-term health.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="why-us">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">The Haven Difference</h2>
<p className="leading-relaxed text-xl text-slate-500">
                    We combine modern chiropractic science with a calm, supportive environment to help you heal faster.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal hover-lift p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 mb-6">
<svg className="lucide lucide-microscope w-6 h-6" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Root Cause Analysis</h3>
<p className="text-lg text-slate-500">We don't just treat pain; we find the underlying issue using advanced diagnostics to ensure lasting relief.</p>
</div>

<div className="reveal hover-lift p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-delay-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 mb-6">
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Personalized Care</h3>
<p className="text-lg text-slate-500">No rushed 5-minute visits. We take the time to understand your lifestyle, goals, and history.</p>
</div>

<div className="reveal hover-lift p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-delay-200">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 mb-6">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Drug-Free Healing</h3>
<p className="text-lg text-slate-500">Non-invasive techniques that stimulate your body's natural ability to heal without pharmaceuticals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="conditions">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Targeted relief for your specific needs</h2>
<p className="text-xl text-slate-500 mb-10 leading-relaxed">
                        Whether it’s chronic back pain, a sports injury, or posture correction, we have a specialized protocol for you.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors cursor-default">
<svg className="lucide lucide-check-circle text-brand-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-lg text-slate-700 font-medium">Lower Back Pain</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors cursor-default">
<svg className="lucide lucide-check-circle text-brand-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-lg text-slate-700 font-medium">Sciatica</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors cursor-default">
<svg className="lucide lucide-check-circle text-brand-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-lg text-slate-700 font-medium">Neck &amp; Shoulder Pain</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors cursor-default">
<svg className="lucide lucide-check-circle text-brand-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-lg text-slate-700 font-medium">Migraines &amp; Headaches</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors cursor-default">
<svg className="lucide lucide-check-circle text-brand-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-lg text-slate-700 font-medium">Sports Injuries</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors cursor-default">
<svg className="lucide lucide-check-circle text-brand-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-lg text-slate-700 font-medium">Postural Correction</span>
</div>
</div>
</div>
<div className="reveal relative h-[500px] rounded-3xl overflow-hidden shadow-lg">
<img alt="Consultation" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="treatments">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Integrative Treatments</h2>
<p className="text-xl text-slate-500">A holistic toolkit to restore your body's function.</p>
</div>
<a className="hidden md:inline-flex items-center text-brand-600 font-medium hover:text-brand-700 mt-4 md:mt-0" href="#contact">
                    See full service menu <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group reveal relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
<img alt="Spinal Adjustment" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium text-white mb-2">Spinal Adjustment</h3>
<p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Precision manipulation to restore joint mobility and reduce nerve irritability.</p>
</div>
</div>

<div className="group reveal relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
<img alt="Laser Therapy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium text-white mb-2">Class IV Laser</h3>
<p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Advanced light therapy to reduce inflammation and accelerate tissue repair.</p>
</div>
</div>

<div className="group reveal relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
<img alt="Rehabilitation" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-medium text-white mb-2">Corrective Exercise</h3>
<p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Custom movement plans to strengthen weak areas and prevent recurrence.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50 border-y border-brand-100/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 reveal">
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-xl">
<img alt="Dr Sarah O'Connor" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="lg:w-1/2 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Meet Dr. Sarah O'Connor</h2>
<h3 className="text-xl text-brand-600 font-medium mb-6">Lead Chiropractor</h3>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed">
<p>
                            "I founded Haven Pain Relief Centre with a simple mission: to bridge the gap between temporary relief and sustainable health."
                        </p>
<p>
                            Dr. O'Connor brings over 15 years of clinical experience in Cork. Specializing in spinal biomechanics and functional rehabilitation, she is dedicated to helping patients avoid surgery and reliance on medication through natural, evidence-based care.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8">
<div>
<p className="text-3xl font-semibold text-slate-900">15+</p>
<p className="text-sm text-slate-500 mt-1">Years Experience</p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900">4k+</p>
<p className="text-sm text-slate-500 mt-1">Patients Helped</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Patient Stories</h2>
<p className="text-xl text-slate-500">Real results from people just like you.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal hover-lift p-8 bg-white rounded-2xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-slate-100">
<div className="flex gap-1 text-brand-500 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">"After years of lower back pain and trying everything from painkillers to acupuncture, I finally found relief at Haven. Dr. Sarah explained *why* I was in pain, not just how to hide it."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">JD</div>
<div>
<p className="font-medium text-slate-900">John D.</p>
<p className="text-sm text-slate-500">Douglas, Cork</p>
</div>
</div>
</div>

<div className="reveal hover-lift p-8 bg-white rounded-2xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-slate-100">
<div className="flex gap-1 text-brand-500 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">"The environment is so calming, unlike any medical office I've been to. The treatments have completely cleared my chronic migraines."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">MR</div>
<div>
<p className="font-medium text-slate-900">Mary R.</p>
<p className="text-sm text-slate-500">Ballincollig, Cork</p>
</div>
</div>
</div>

<div className="reveal hover-lift p-8 bg-white rounded-2xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-slate-100">
<div className="flex gap-1 text-brand-500 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">"Incredibly professional and thorough. The rehabilitation exercises they gave me helped me get back to running within 6 weeks."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">PO</div>
<div>
<p className="font-medium text-slate-900">Patrick O.</p>
<p className="text-sm text-slate-500">Carrigaline, Cork</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row reveal">

<div className="lg:w-2/5 bg-brand-900 p-12 text-white flex flex-col justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Start your journey to recovery today.</h2>
<p className="text-brand-100 text-lg mb-12">
                            Book your initial consultation online or give us a call. We look forward to welcoming you to Haven.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<svg className="lucide lucide-map-pin text-brand-500 w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-lg">West Douglas Street, Douglas, Cork</span>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-phone text-brand-500 w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-lg">+353 21 123 4567</span>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-mail text-brand-500 w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-lg">hello@havenpainrelief.ie</span>
</div>
</div>
</div>
<div className="mt-12 lg:mt-0">
<div className="flex gap-4">
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:w-3/5 p-12">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" id="first-name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" id="last-name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 border p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" id="email" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="concern">Primary Concern</label>
<div className="relative">
<select className="block w-full rounded-lg border-slate-200 bg-slate-50 border p-3 appearance-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-600" id="concern">
<option>Lower Back Pain</option>
<option>Neck Pain</option>
<option>Sciatica</option>
<option>Sports Injury</option>
<option>General Checkup</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<button className="w-full inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl mt-4" type="button">
                            Request Appointment
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Haven</span>
</div>
<p className="text-slate-400 text-sm">© 2024 Haven Pain Relief Centre. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
