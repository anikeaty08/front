import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
},
colors: {
'le-white': '#FFFFFF',
'le-ivory': '#F7F4F0',
'le-beige': '#EFE4D8',
'le-sand': '#F4EEE7',
'le-charcoal': '#202022',
'le-rose': '#C98B7B',
'le-gray': '#757578',
},
},
},
}



    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Close mobile menu when clicking a link
      mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-neutral-200/70 bg-le-white/80 backdrop-blur sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border border-le-rose/50 flex items-center justify-center">
<span className="h-5 w-5 rounded-full border border-le-rose/80"></span>
</div>
<div className="leading-tight">
<div className="font-serif text-lg tracking-[0.16em] uppercase">Line Eraser MD</div>
<div className="text-xs text-le-gray tracking-wide">Physician-Led Aesthetics</div>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-le-gray hover:text-le-charcoal transition" href="#treatments">Treatments</a>
<a className="text-le-gray hover:text-le-charcoal transition" href="#results">Results</a>
<a className="text-le-gray hover:text-le-charcoal transition" href="#about">About</a>
<a className="text-le-gray hover:text-le-charcoal transition" href="#experience">Experience</a>
<a className="text-le-gray hover:text-le-charcoal transition" href="#testimonials">Testimonials</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline text-xs tracking-wide uppercase text-le-gray hover:text-le-charcoal" href="tel:+1973XXXXXXX">
            Call or Text
          </a>
<a className="hidden sm:inline-flex items-center justify-center rounded-full border border-le-rose/60 px-5 py-2 text-xs font-medium tracking-[0.18em] uppercase text-le-charcoal hover:bg-le-rose/5 transition" href="#booking">
            Book Consultation
          </a>

<button aria-label="Toggle navigation" className="inline-flex md:hidden items-center justify-center rounded-full border border-neutral-300 w-9 h-9 text-le-charcoal" id="mobileMenuButton">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="16" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="md:hidden border-t border-neutral-200/80 bg-le-white/95 backdrop-blur hidden" id="mobileMenu">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2 text-xs">
<a className="py-1 text-le-gray hover:text-le-charcoal transition" href="#treatments">Treatments</a>
<a className="py-1 text-le-gray hover:text-le-charcoal transition" href="#results">Results</a>
<a className="py-1 text-le-gray hover:text-le-charcoal transition" href="#about">About</a>
<a className="py-1 text-le-gray hover:text-le-charcoal transition" href="#experience">Experience</a>
<a className="py-1 text-le-gray hover:text-le-charcoal transition" href="#testimonials">Testimonials</a>
<div className="pt-2 flex flex-wrap gap-2">
<a className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-1.5 tracking-[0.16em] uppercase" href="tel:+1973XXXXXXX">
              Call / Text
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-le-charcoal text-le-white px-4 py-1.5 tracking-[0.16em] uppercase" href="#booking">
              Book consult
            </a>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">
              New Jersey · Physician-Led Aesthetic Medicine
            </p>
<h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Luxury aesthetics,<br className="hidden sm:inline"/>
<span className="underline decoration-le-rose/40 underline-offset-8">physician delivered.</span>
</h1>
<p className="text-base sm:text-lg text-le-gray max-w-xl">
              Line Eraser MD is a high-end medical spa where every injectable, laser, and skin treatment
              is performed by a doctor and supported by an exceptionally experienced clinical team.
              The experience is calm, modern, and uncompromisingly precise.
            </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-le-charcoal px-7 py-2.5 text-xs font-medium tracking-[0.18em] uppercase text-le-white hover:bg-black transition" href="#booking">
                Book Consultation
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-2.5 text-xs font-medium tracking-[0.18em] uppercase text-le-charcoal hover:border-le-charcoal/80 transition" href="#results">
                View Results
              </a>
</div>
<div className="flex flex-wrap gap-6 pt-2 text-sm text-le-gray">
<div>
<div className="font-semibold text-le-charcoal">Physician-Led</div>
<div>All services performed by a doctor</div>
</div>
<div>
<div className="font-semibold text-le-charcoal">Advanced Tech</div>
<div>UltraClear™, 3D MIRACL™, SlimMD™</div>
</div>
<div>
<div className="font-semibold text-le-charcoal">Luxury Experience</div>
<div>Boutique, editorial, calm</div>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -inset-6 bg-le-sand/60 rounded-[2.75rem] -z-10"></div>
<div className="relative rounded-[2.25rem] overflow-hidden border border-white/60 shadow-[0_20px_60px_rgba(15,23,42,0.12)] bg-le-white">
<div className="aspect-[4/5]">
<img alt="Physician-led aesthetic treatment in a bright, luxury setting" className="w-full h-full object-cover" src="https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>
<div className="p-5 sm:p-6 flex items-center justify-between gap-4 border-t border-neutral-200/80 bg-le-white/90 backdrop-blur">
<div>
<p className="text-xs tracking-[0.22em] uppercase text-le-gray">Founder &amp; Medical Director</p>
<p className="font-serif text-base">Dr. Carol Eisenstat, MD</p>
</div>
<div className="text-right text-xs text-le-gray">
<div>Board-Certified Anesthesiologist</div>
<div>Aesthetic Injector · Laser Specialist</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200/70 bg-le-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">The Line Eraser MD Difference</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
                High-end medical spa,<br className="hidden sm:inline"/> led entirely by physicians.
              </h2>
</div>
<p className="max-w-md text-base text-le-gray">
              Every protocol is designed with medical rigor and delivered in a space that feels more like
              a modern beauty house than a clinic. The focus: safety, precision, and subtle, elevated results.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="w-10 h-10 rounded-full border border-le-rose/50 flex items-center justify-center">
<div className="w-5 h-5 rounded-full border border-le-rose/80"></div>
</div>
<h3 className="font-serif text-lg">Physician-Led Care</h3>
<p className="text-base text-le-gray">
                All injectables, lasers, and skin procedures are performed by a doctor and supported by an
                exceptionally experienced aesthetic team. No shortcuts, no delegation of critical steps.
              </p>
</div>

<div className="space-y-4">
<div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center">
<span className="w-5 h-[2px] bg-neutral-400"></span>
</div>
<h3 className="font-serif text-lg">Advanced Technology</h3>
<p className="text-base text-le-gray">
                UltraClear™ resurfacing, 3D MIRACL™ skin tightening, SlimMD™ body contouring and a full
                injectable portfolio, all chosen for their safety profiles and proven results.
              </p>
</div>

<div className="space-y-4">
<div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center">
<span className="w-3 h-3 rounded-full border border-neutral-400"></span>
</div>
<h3 className="font-serif text-lg">Luxury Medical Experience</h3>
<p className="text-base text-le-gray">
                Editorial interiors, calm energy, and a deeply personalized approach. From consultation
                to follow-up, the experience is curated, discreet, and designed around you.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-le-sand/60" id="treatments">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Featured Treatments</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
                Technology-forward treatments,<br className="hidden sm:inline"/> with a soft, natural finish.
              </h2>
</div>
<p className="max-w-md text-base text-le-gray">
              From high-performance lasers to subtle injectables and body contouring, each treatment is
              selected and customized by your physician to match your skin, features, and goals.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group relative overflow-hidden rounded-3xl bg-le-white shadow-sm border border-neutral-200/70" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="UltraClear laser resurfacing treatment" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://images.pexels.com/photos/3738119/pexels-photo-3738119.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>
<div className="p-5 space-y-2">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Laser · Skin Resurfacing</p>
<h3 className="font-serif text-lg">UltraClear™ Laser</h3>
<p className="text-sm text-le-gray">
                  Refine texture, tone, and radiance with modern resurfacing designed for minimal downtime.
                </p>
<span className="inline-flex items-center text-xs tracking-[0.22em] uppercase text-le-charcoal mt-1">
                  Explore treatment
                  <span className="ml-2 h-px w-6 bg-le-charcoal"></span>
</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-3xl bg-le-white shadow-sm border border-neutral-200/70" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Skin tightening and lifting treatment" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://images.pexels.com/photos/3738365/pexels-photo-3738365.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>
<div className="p-5 space-y-2">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Device · Skin Tightening</p>
<h3 className="font-serif text-lg">3D MIRACL™</h3>
<p className="text-sm text-le-gray">
                  A multi-dimensional approach to skin tightening and collagen stimulation for firmer, lifted contours.
                </p>
<span className="inline-flex items-center text-xs tracking-[0.22em] uppercase text-le-charcoal mt-1">
                  Explore treatment
                  <span className="ml-2 h-px w-6 bg-le-charcoal"></span>
</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-3xl bg-le-white shadow-sm border border-neutral-200/70" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="SlimMD physician-led body contouring" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" src="https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>
<div className="p-5 space-y-2">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Body · Contouring Program</p>
<h3 className="font-serif text-lg">SlimMD™</h3>
<p className="text-sm text-le-gray">
                  A physician-designed body contouring and metabolic support program with medical oversight at every step.
                </p>
<span className="inline-flex items-center text-xs tracking-[0.22em] uppercase text-le-charcoal mt-1">
                  Explore program
                  <span className="ml-2 h-px w-6 bg-le-charcoal"></span>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="bg-le-white" id="results">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Results</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
                Subtle, precise,<br className="hidden sm:inline"/> undeniably you.
              </h2>
</div>
<p className="max-w-md text-base text-le-gray">
              Before &amp; after imagery is presented with the same care as every treatment: honest lighting,
              no heavy filters, and results that feel like a fresher version of you — not a different person.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border border-neutral-200 rounded-2xl overflow-hidden">
<div className="grid grid-cols-2 divide-x divide-neutral-200">
<div className="aspect-square bg-neutral-100"></div>
<div className="aspect-square bg-neutral-200"></div>
</div>
<div className="p-4 space-y-1">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Injectables · Jawline</p>
<p className="text-sm text-le-gray">Soft jawline contouring with neuromodulator and filler.</p>
</div>
</div>
<div className="border border-neutral-200 rounded-2xl overflow-hidden">
<div className="grid grid-cols-2 divide-x divide-neutral-200">
<div className="aspect-square bg-neutral-100"></div>
<div className="aspect-square bg-neutral-200"></div>
</div>
<div className="p-4 space-y-1">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Laser · Texture &amp; Tone</p>
<p className="text-sm text-le-gray">Refined texture and radiance after UltraClear™ sessions.</p>
</div>
</div>
<div className="border border-neutral-200 rounded-2xl overflow-hidden">
<div className="grid grid-cols-2 divide-x divide-neutral-200">
<div className="aspect-square bg-neutral-100"></div>
<div className="aspect-square bg-neutral-200"></div>
</div>
<div className="p-4 space-y-1">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Lips · Natural Volume</p>
<p className="text-sm text-le-gray">Physician-performed lip enhancement with a soft, balanced profile.</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center text-xs tracking-[0.22em] uppercase text-le-charcoal" href="#">
              View full gallery
              <span className="ml-2 h-px w-8 bg-le-charcoal"></span>
</a>
</div>
</div>
</section>

<section className="bg-le-ivory" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="relative">
<div className="absolute -inset-4 rounded-[2.5rem] border border-le-rose/30 -z-10"></div>
<div className="rounded-[2rem] overflow-hidden bg-le-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
<div className="aspect-[4/5] bg-neutral-100">
<img alt="Dr. Carol Eisenstat MD – physician aesthetic injector" className="w-full h-full object-cover" src="https://images.pexels.com/photos/6231609/pexels-photo-6231609.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>
</div>
</div>

<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Founder &amp; Medical Director</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
              Meet Dr. Carol<br className="hidden sm:inline"/> Eisenstat, MD.
            </h2>
<div className="mt-4 space-y-4 text-base text-le-gray">
<p>
                Line Eraser MD was founded by Dr. Carol Eisenstat, a board-certified anesthesiologist and
                aesthetic injector with a singular focus: delivering physician-level aesthetic care in a
                modern, luxury environment.
              </p>
<p>
                Every injection, laser protocol, and treatment plan is overseen and performed by Dr. Carol
                or under her direct medical guidance. Her approach is rooted in safety, anatomy, and natural,
                unforced results.
              </p>
<p>
                Patients choose Line Eraser MD for the combination of true medical expertise, advanced
                technology, and an experience that feels more like visiting a high-end beauty atelier than a clinic.
              </p>
</div>

<div className="mt-6 border-t border-neutral-300 pt-4">
<p className="text-xs tracking-[0.24em] uppercase text-le-gray mb-3">As seen in</p>
<div className="flex flex-wrap gap-4 text-sm text-le-gray/80">
<span>Women’s Health</span>
<span>Byrdie</span>
<span>Ipsy</span>
<span>NY Post</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-le-sand/60" id="experience">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">The Experience</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
                A calm, architectural space<br className="hidden sm:inline"/> for modern aesthetics.
              </h2>
</div>
<p className="max-w-md text-base text-le-gray">
              The interiors are intentionally minimal: white walls, soft neutrals, and considered details.
              The atmosphere is quiet, unhurried, and designed to feel like a private beauty studio with
              the clinical standards of a medical practice.
            </p>
</div>
<div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
<div className="rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/3]"></div>
<div className="rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/3]"></div>
<div className="rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/3]"></div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-le-gray">
<div>
<p className="font-semibold text-le-charcoal">1 · Consultation</p>
<p className="mt-1">
                A physician-led assessment of your skin, features, medical history, and goals.
              </p>
</div>
<div>
<p className="font-semibold text-le-charcoal">2 · Custom Plan</p>
<p className="mt-1">
                A structured yet minimal plan combining injectables, lasers, and skincare as needed.
              </p>
</div>
<div>
<p className="font-semibold text-le-charcoal">3 · Treatment &amp; Follow-Up</p>
<p className="mt-1">
                Precise, calm treatments with thoughtful aftercare and transparent follow-up.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-le-white" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Testimonials</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
                “The most natural results<br className="hidden sm:inline"/> I’ve ever had.”
              </h2>
</div>
<p className="max-w-md text-base text-le-gray">
              Reviews are presented as thoughtful, honest reflections — never sensationalized. The focus
              is on trust, experience, and the feeling of being in expert hands.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<article className="border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between">
<p className="font-serif text-base leading-relaxed">
                “From the moment I walked in, it felt like a luxury skincare brand come to life. The entire
                treatment was physician-led and I never once felt rushed.”
              </p>
<p className="mt-4 text-sm text-le-gray">– A.G., Patient</p>
</article>
<article className="border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between">
<p className="font-serif text-base leading-relaxed">
                “My results are so natural that friends ask if I’ve been sleeping better, not what I had done.
                The attention to detail is unmatched.”
              </p>
<p className="mt-4 text-sm text-le-gray">– L.M., Patient</p>
</article>
<article className="border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between">
<p className="font-serif text-base leading-relaxed">
                “I chose Line Eraser MD because every service is done by a doctor. The combination of medical
                expertise and aesthetic taste is rare.”
              </p>
<p className="mt-4 text-sm text-le-gray">– S.R., Patient</p>
</article>
</div>
</div>
</section>

<section className="bg-le-charcoal text-le-white" id="booking">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
<div>
<p className="text-xs tracking-[0.24em] uppercase text-le-gray">Begin here</p>
<h2 className="font-serif text-2xl sm:text-3xl mt-3 tracking-tight">
              Ready for physician-led aesthetic care?
            </h2>
<p className="mt-3 text-base text-neutral-200 max-w-xl">
              Schedule a consultation to explore injectables, lasers, SlimMD™, or a comprehensive skin plan.
              We’ll guide you to what’s right for your features, your lifestyle, and your comfort level.
            </p>
</div>
<div className="space-y-3 text-xs">
<a className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-le-white px-7 py-2.5 font-medium tracking-[0.18em] uppercase text-le-charcoal hover:bg-neutral-100 transition" href="#">
              Book online
            </a>
<div className="flex flex-col sm:flex-row sm:items-center gap-2 text-neutral-300 text-sm">
<span>Prefer to speak with us?</span>
<div className="flex gap-4">
<a className="underline-offset-4 hover:underline" href="tel:+1973XXXXXXX">Call</a>
<a className="underline-offset-4 hover:underline" href="sms:+1973XXXXXXX">Text</a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black text-neutral-300">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<div className="font-serif text-lg tracking-[0.16em] uppercase text-white">Line Eraser MD</div>
<p className="text-sm text-neutral-400 mt-1">
              Luxury aesthetics, physician expertise.
            </p>
</div>
<div className="text-sm text-neutral-400">
<p>Livingston, New Jersey · Physician-Led Aesthetic Practice</p>
<p className="mt-1">Injectables · Lasers · Skin · SlimMD™ · Advanced Aesthetic Medicine</p>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-6 text-sm">
<div>
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-2 text-xs">Contact</p>
<p>Phone / Text: (973) XXX-XXXX</p>
<p>Email: info@lineerasermd.com</p>
</div>
<div>
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-2 text-xs">Visit</p>
<p>Livingston, NJ</p>
<p>By appointment only.</p>
</div>
<div>
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-2 text-xs">Connect</p>
<p>Instagram · Facebook · YouTube</p>
</div>
</div>
<div className="border-t border-neutral-800 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-neutral-500">
<p>© Line Eraser MD. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-300" href="#">Privacy</a>
<a className="hover:text-neutral-300" href="#">HIPAA Notice</a>
<a className="hover:text-neutral-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
<div className="max-w-6xl mx-auto px-4 pb-4">
<div className="rounded-full bg-le-charcoal text-le-white shadow-lg border border-black/10 flex items-center justify-between px-4 py-2.5">
<button className="flex-1 mr-2 inline-flex items-center justify-center rounded-full bg-le-white text-le-charcoal text-xs tracking-[0.16em] uppercase py-1.5" onclick="document.querySelector('#booking').scrollIntoView({behavior: 'smooth'})">
            Book consult
          </button>
<a className="flex items-center text-xs tracking-[0.16em] uppercase text-neutral-200" href="tel:+1973XXXXXXX">
<svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.21 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
            Call
          </a>
</div>
</div>
</div>
</div>


    </>
  );
}
