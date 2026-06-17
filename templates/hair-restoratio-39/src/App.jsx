import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showPage(pageId) {
            // Special handling for condition categories
            if (['thinning', 'alopecia', 'dandruff', 'oily', 'dry', 'postpartum'].includes(pageId)) {
                // For a real app, this would show a specific condition page
                // Here we'll just redirect to the Conditions hub or specific placeholder
                pageId = 'conditions';
            }
            
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            } else {
                // Fallback to home
                document.getElementById('home').classList.add('active');
            }
        }

        // Initialize with hash if present
        window.addEventListener('load', () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) showPage(hash);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-header">
<nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-2xl font-semibold tracking-tighter cursor-pointer" onclick="showPage('home')">VLOSSY</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
<div className="group relative py-4">
<span className="nav-link flex items-center gap-1">Treatments <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon></span>
<div className="absolute top-full left-0 w-64 bg-white border border-neutral-100 shadow-xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-soft">
<a className="block px-6 py-2 hover:bg-neutral-50 hover:text-[#B5945F]" onclick="showPage('hair-loss')">Hair Loss Treatment</a>
<a className="block px-6 py-2 hover:bg-neutral-50 hover:text-[#B5945F]" onclick="showPage('scalp-treatment')">Scalp Treatment</a>
<a className="block px-6 py-2 hover:bg-neutral-50 hover:text-[#B5945F]" onclick="showPage('hair-restoration')">Hair Restoration</a>
</div>
</div>
<a className="nav-link" onclick="showPage('conditions')">Conditions</a>
<a className="nav-link" onclick="showPage('programs')">Programs</a>
<a className="nav-link" onclick="showPage('about')">About</a>
<a className="nav-link" onclick="showPage('blog')">Blog</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium nav-link" onclick="showPage('reviews')">Reviews</a>
<button className="bg-[#B5945F] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#A38350] transition-soft shadow-lg shadow-[#B5945F]/20" onclick="showPage('contact')">
                    Book Consultation
                </button>
</div>
</nav>
</header>
<main className="pt-20">

<section className="page-section active" id="home">

<section className="relative py-24 lg:py-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl">
<span className="inline-block px-4 py-1.5 bg-[#B5945F]/10 text-[#B5945F] rounded-full text-xs font-semibold tracking-wider uppercase mb-6">Expert Restoration Clinic</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                            Hair Loss Treatment Clinic in <span className="gold-accent">Los Angeles</span>
</h1>
<p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                            Advanced scalp diagnostics and personalized hair restoration programs tailored to your unique biology. We blend medical science with holistic wellness.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#2D2D2D] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black transition-soft" onclick="showPage('contact')">Start Your Analysis</button>
<button className="border border-neutral-300 px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition-soft" onclick="showPage('hair-loss')">View Treatments</button>
</div>
<div className="mt-12 flex flex-wrap gap-8">
<div className="flex items-center gap-2 text-sm text-neutral-500">
<iconify-icon className="text-[#B5945F] text-xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                                Certified Specialists
                            </div>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<iconify-icon className="text-[#B5945F] text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                                Personalized Programs
                            </div>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<iconify-icon className="text-[#B5945F] text-xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
                                Non-invasive Treatments
                            </div>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-beige/50 rounded-l-[100px] -z-0 hidden lg:block border-l border-y border-neutral-200">
<img alt="Clinic Interior" className="w-full h-full object-cover opacity-60 rounded-l-[100px]" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Core Clinical Services</h2>
<p className="text-neutral-500">A comprehensive approach to follicular health and scalp vitality.</p>
</div>
<a className="text-[#B5945F] font-medium text-sm flex items-center gap-1 group" onclick="showPage('programs')">View all programs <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-8 bg-[#FAF9F6] border border-neutral-100 rounded-2xl hover:border-[#B5945F]/30 transition-soft card-shadow">
<iconify-icon className="text-4xl gold-accent mb-6" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">Hair Loss Treatment</h3>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">Medical-grade interventions to stop thinning and reactivate dormant follicles.</p>
<button className="text-sm font-semibold flex items-center gap-2 text-neutral-800" onclick="showPage('hair-loss')">Learn More <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="group p-8 bg-[#FAF9F6] border border-neutral-100 rounded-2xl hover:border-[#B5945F]/30 transition-soft card-shadow">
<iconify-icon className="text-4xl gold-accent mb-6" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">Scalp Treatment</h3>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">Deep detoxification and hydration to create the optimal environment for growth.</p>
<button className="text-sm font-semibold flex items-center gap-2 text-neutral-800" onclick="showPage('scalp-treatment')">Learn More <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="group p-8 bg-[#FAF9F6] border border-neutral-100 rounded-2xl hover:border-[#B5945F]/30 transition-soft card-shadow">
<iconify-icon className="text-4xl gold-accent mb-6" icon="solar:magic-stick-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">Hair Restoration</h3>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">Advanced restoration techniques for density, volume, and natural aesthetics.</p>
<button className="text-sm font-semibold flex items-center gap-2 text-neutral-800" onclick="showPage('hair-restoration')">Learn More <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-beige/30">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Targeted Solutions</h2>
<p className="text-neutral-500">Every scalp journey begins with identifying the root cause.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="cursor-pointer p-6 bg-white border border-neutral-200 rounded-xl text-center hover:shadow-md transition-soft" onclick="showPage('thinning')">
<span className="text-sm font-medium">Hair Thinning</span>
</div>
<div className="cursor-pointer p-6 bg-white border border-neutral-200 rounded-xl text-center hover:shadow-md transition-soft" onclick="showPage('alopecia')">
<span className="text-sm font-medium">Alopecia</span>
</div>
<div className="cursor-pointer p-6 bg-white border border-neutral-200 rounded-xl text-center hover:shadow-md transition-soft" onclick="showPage('dandruff')">
<span className="text-sm font-medium">Dandruff</span>
</div>
<div className="cursor-pointer p-6 bg-white border border-neutral-200 rounded-xl text-center hover:shadow-md transition-soft" onclick="showPage('oily')">
<span className="text-sm font-medium">Oily Scalp</span>
</div>
<div className="cursor-pointer p-6 bg-white border border-neutral-200 rounded-xl text-center hover:shadow-md transition-soft" onclick="showPage('dry')">
<span className="text-sm font-medium">Dry Scalp</span>
</div>
<div className="cursor-pointer p-6 bg-white border border-neutral-200 rounded-xl text-center hover:shadow-md transition-soft" onclick="showPage('postpartum')">
<span className="text-sm font-medium">Postpartum</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-12">Our Methodology</h2>
<div className="space-y-10">
<div className="flex gap-6">
<span className="w-10 h-10 rounded-full bg-beige flex items-center justify-center font-semibold text-sm border border-neutral-200">01</span>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Detailed Consultation</h4>
<p className="text-sm text-neutral-600 leading-relaxed">A 45-minute clinical deep-dive into your medical history and hair goals.</p>
</div>
</div>
<div className="flex gap-6">
<span className="w-10 h-10 rounded-full bg-beige flex items-center justify-center font-semibold text-sm border border-neutral-200">02</span>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Microscopic Scalp Analysis</h4>
<p className="text-sm text-neutral-600 leading-relaxed">High-definition imaging to analyze follicle density and scalp health.</p>
</div>
</div>
<div className="flex gap-6">
<span className="w-10 h-10 rounded-full bg-beige flex items-center justify-center font-semibold text-sm border border-neutral-200">03</span>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Bespoke Treatment Plan</h4>
<p className="text-sm text-neutral-600 leading-relaxed">A multi-modal program combining in-clinic treatments and home care.</p>
</div>
</div>
<div className="flex gap-6">
<span className="w-10 h-10 rounded-full bg-beige flex items-center justify-center font-semibold text-sm border border-neutral-200">04</span>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Measurable Results</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Regular follow-ups and progress tracking with digital comparisons.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Treatment session" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
<div className="flex gap-1 mb-2">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-neutral-600 italic">"The analysis revealed exactly what was causing my thinning. 4 months later, the results are life-changing."</p>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="page-section" id="hair-loss">
<div className="bg-beige/40 py-24">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Hair Loss Treatment in Los Angeles</h1>
<p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">Our clinical treatments target the physiological causes of hair loss, focusing on hormonal balance, nutrient delivery, and follicular stimulation.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-3 gap-8 mb-24">
<div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-4">Genetic Thinning</h3>
<p className="text-sm text-neutral-600">Addressing DHT sensitivity through medical-grade scalp infusions and light therapy.</p>
</div>
<div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-4">Alopecia Areata</h3>
<p className="text-sm text-neutral-600">Specialized immune-modulating protocols to manage patch hair loss and inflammation.</p>
</div>
<div className="p-8 bg-white border border-neutral-100 rounded-2xl shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-4">Postpartum Recovery</h3>
<p className="text-sm text-neutral-600">Hormonal rebalancing and intensive nutrient replenishment for rapid shedding recovery.</p>
</div>
</div>
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group p-6 bg-white border border-neutral-200 rounded-xl cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
                                How soon can I see results?
                                <iconify-icon className="group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed">Most clients observe a significant reduction in shedding within 4-6 weeks, with visible new growth appearing between month 3 and 4.</p>
</details>
<details className="group p-6 bg-white border border-neutral-200 rounded-xl cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
                                Are the treatments painful?
                                <iconify-icon className="group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed">Our treatments are designed to be minimally invasive. Most clients describe the experience as relaxing, similar to a clinical facial for the scalp.</p>
</details>
</div>
</div>
</div>
</section>

<section className="page-section" id="scalp-treatment">
<div className="bg-[#2D2D2D] text-white py-24">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Scalp Health &amp; Vitality</h1>
<p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">The secret to beautiful hair is a healthy foundation. Our scalp treatments detoxify, balance, and rejuvenate the skin beneath your hair.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
<div className="p-8 border border-neutral-200 rounded-2xl hover:bg-beige/20 transition-soft">
<iconify-icon className="text-3xl gold-accent mb-4" icon="solar:cloud-snow-linear"></iconify-icon>
<h4 className="font-semibold mb-2">Dry Scalp</h4>
<p className="text-xs text-neutral-500">Intensive hydration masks and lipid restoration.</p>
</div>
<div className="p-8 border border-neutral-200 rounded-2xl hover:bg-beige/20 transition-soft">
<iconify-icon className="text-3xl gold-accent mb-4" icon="solar:droplet-linear"></iconify-icon>
<h4 className="font-semibold mb-2">Oily Scalp</h4>
<p className="text-xs text-neutral-500">Sebum-regulating clinical deep cleanses.</p>
</div>
<div className="p-8 border border-neutral-200 rounded-2xl hover:bg-beige/20 transition-soft">
<iconify-icon className="text-3xl gold-accent mb-4" icon="solar:wind-linear"></iconify-icon>
<h4 className="font-semibold mb-2">Dandruff</h4>
<p className="text-xs text-neutral-500">Anti-fungal and exfoliating sonic therapies.</p>
</div>
<div className="p-8 border border-neutral-200 rounded-2xl hover:bg-beige/20 transition-soft">
<iconify-icon className="text-3xl gold-accent mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-semibold mb-2">Sensitive</h4>
<p className="text-xs text-neutral-500">Calming botanical infusions for inflammation.</p>
</div>
</div>
</div>
</section>

<section className="page-section" id="about">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-200">
<img alt="Miroslava - Hair Specialist" className="w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="gold-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Our Founder</span>
<h2 className="text-4xl font-semibold tracking-tight mb-8">Miroslava — <span className="font-light italic text-neutral-400">Head Specialist</span></h2>
<p className="text-neutral-600 mb-6 leading-relaxed">With over 12 years of experience in trichology and advanced scalp aesthetics, Miroslava founded Vlossy to bridge the gap between medical hair loss clinical work and luxury wellness.</p>
<p className="text-neutral-600 mb-10 leading-relaxed">Her philosophy is rooted in "biological bio-hacking" for the hair—finding the exact internal and external factors that inhibit your best possible growth.</p>
<div className="grid grid-cols-2 gap-6 border-t border-neutral-200 pt-10">
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">1,200+</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Successful Programs</p>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-1">ICD Cert</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Clinical Trichology</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="blog">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Follicle Journal</h2>
<p className="text-neutral-500">Expert insights into hair science and scalp wellness.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">
<article className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-soft duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-[#B5945F] font-semibold uppercase tracking-widest">Medical Insights</span>
<h3 className="text-xl font-semibold tracking-tight mt-3 mb-4 group-hover:text-[#B5945F] transition-soft">Common hair loss causes in modern women</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Stress, nutrition, and hormonal shifts are the leading factors in today's thinning hair epidemic...</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-soft duration-500" src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-[#B5945F] font-semibold uppercase tracking-widest">Recovery Guide</span>
<h3 className="text-xl font-semibold tracking-tight mt-3 mb-4 group-hover:text-[#B5945F] transition-soft">Best treatments for thinning crown density</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Understanding the specific treatments that work for localized crown thinning versus diffuse loss.</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-soft duration-500" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-[#B5945F] font-semibold uppercase tracking-widest">Scalp Health</span>
<h3 className="text-xl font-semibold tracking-tight mt-3 mb-4 group-hover:text-[#B5945F] transition-soft">How to improve scalp health naturally at home</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Practical steps you can take daily to support the clinical treatments you receive at Vlossy.</p>
</article>
</div>
</div>
</section>

<section className="page-section" id="programs">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Tailored Restoration Programs</h2>
<p className="text-neutral-500">Structured clinical paths designed for specific hair health milestones.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="bg-white border border-neutral-200 rounded-3xl p-10 flex flex-col h-full card-shadow">
<div className="mb-8">
<h3 className="text-xl font-semibold tracking-tight mb-2">Hair Growth Program</h3>
<p className="text-sm text-neutral-500">Focus on reactivating dormant follicles and increasing overall density over 6 months.</p>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 12x Scalp Micro-Infusions</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Monthly Diagnostic Scans</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> At-home Supplement Kit</li>
</ul>
<button className="w-full py-4 rounded-xl border border-neutral-200 font-semibold text-sm hover:bg-neutral-50 transition-soft" onclick="showPage('contact')">Enquire Now</button>
</div>
<div className="bg-[#2D2D2D] text-white border border-neutral-800 rounded-3xl p-10 flex flex-col h-full shadow-2xl scale-105 z-10">
<div className="mb-8">
<div className="text-[#B5945F] text-[10px] font-bold uppercase tracking-widest mb-2">Most Popular</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Hair Recovery Program</h3>
<p className="text-sm text-neutral-400">Intensive repair for sudden shedding or postpartum recovery phases.</p>
</div>
<ul className="space-y-4 mb-10 flex-grow text-neutral-300">
<li className="flex gap-3 text-sm"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 8x Advanced Bio-Stimulation</li>
<li className="flex gap-3 text-sm"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Weekly Scalp Detox</li>
<li className="flex gap-3 text-sm"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority Booking</li>
<li className="flex gap-3 text-sm"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 24/7 Specialist Support</li>
</ul>
<button className="w-full py-4 rounded-xl bg-[#B5945F] text-white font-semibold text-sm hover:bg-[#A38350] transition-soft" onclick="showPage('contact')">Start Recovery</button>
</div>
<div className="bg-white border border-neutral-200 rounded-3xl p-10 flex flex-col h-full card-shadow">
<div className="mb-8">
<h3 className="text-xl font-semibold tracking-tight mb-2">Hair Wellness Program</h3>
<p className="text-sm text-neutral-500">Maintenance and prevention for those starting to notice early scalp changes.</p>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Quarterly Health Audits</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Seasonal Scalp Resurfacing</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-[#B5945F] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Exclusive Product Access</li>
</ul>
<button className="w-full py-4 rounded-xl border border-neutral-200 font-semibold text-sm hover:bg-neutral-50 transition-soft" onclick="showPage('contact')">Enquire Now</button>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-20">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">Begin Your Journey</h2>
<p className="text-neutral-600 mb-12">Book your 45-minute clinical consultation. We'll perform a microscopic scan and develop your roadmap to restoration.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl gold-accent" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm">+1 (310) 555-0128</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl gold-accent" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm">8240 Beverly Blvd, Los Angeles, CA</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl gold-accent" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm">Mon-Fri: 9am – 7pm | Sat: 10am – 4pm</span>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-3xl border border-neutral-100 card-shadow">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Consultation request sent!');">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Full Name</label>
<input className="w-full px-4 py-3 bg-beige/30 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#B5945F] text-sm" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Email Address</label>
<input className="w-full px-4 py-3 bg-beige/30 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#B5945F] text-sm" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Service of Interest</label>
<select className="w-full px-4 py-3 bg-beige/30 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#B5945F] text-sm custom-select">
<option>Initial Consultation</option>
<option>Hair Loss Treatment</option>
<option>Scalp Vitality</option>
<option>Postpartum Support</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Message (Optional)</label>
<textarea className="w-full px-4 py-3 bg-beige/30 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#B5945F] text-sm h-32" placeholder="Tell us about your concerns..."></textarea>
</div>
<button className="w-full py-4 bg-[#B5945F] text-white rounded-xl font-semibold shadow-lg shadow-[#B5945F]/30 hover:bg-[#A38350] transition-soft" type="submit">Request Appointment</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-100 py-20 mt-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-semibold tracking-tighter mb-6 block">VLOSSY</a>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Advanced hair restoration clinic focused on scientific diagnostics and luxury wellness protocols.</p>
<div className="flex gap-4">
<iconify-icon className="text-xl text-neutral-400 cursor-pointer hover:text-[#B5945F]" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="text-xl text-neutral-400 cursor-pointer hover:text-[#B5945F]" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6">Treatments</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('hair-loss')">Hair Loss</a></li>
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('scalp-treatment')">Scalp Health</a></li>
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('hair-restoration')">Restoration</a></li>
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('programs')">Programs</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6">Information</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('about')">About Us</a></li>
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('blog')">Blog</a></li>
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('reviews')">Patient Stories</a></li>
<li><a className="hover:text-[#B5945F] cursor-pointer" onclick="showPage('contact')">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
<p className="text-xs text-neutral-500 mb-4">Join our community for hair health tips.</p>
<div className="relative">
<input className="w-full bg-beige/40 border border-neutral-100 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[#B5945F]" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-1.5 text-[#B5945F]"><iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 gap-4">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">© 2024 Vlossy Clinic Los Angeles. All rights reserved.</p>
<div className="flex gap-8 text-[10px] text-neutral-400 uppercase tracking-widest">
<a className="hover:text-[#B5945F]" href="#">Privacy Policy</a>
<a className="hover:text-[#B5945F]" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
