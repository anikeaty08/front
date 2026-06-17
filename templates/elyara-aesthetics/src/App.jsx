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



      // Tab Switching Logic
      function switchTab(tabName) {
        // Reset buttons
        const btnHair = document.getElementById('btn-hair');
        const btnDermal = document.getElementById('btn-dermal');

        // Reset classes for both
        btnHair.className = "px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 text-neutral-400 hover:text-white";
        btnDermal.className = "px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 text-neutral-400 hover:text-white";

        // Set active button style
        if(tabName === 'hair') {
          btnHair.className = "px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-white text-black shadow-lg";
        } else {
          btnDermal.className = "px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-white text-black shadow-lg";
        }

        // Content Switching
        const contentHair = document.getElementById('content-hair');
        const contentDermal = document.getElementById('content-dermal');

        if(tabName === 'hair') {
          contentDermal.classList.remove('active-content');
          setTimeout(() => {
             contentDermal.style.display = 'none';
             contentHair.style.display = 'block';
             setTimeout(() => contentHair.classList.add('active-content'), 10);
          }, 500); // Wait for transition
        } else {
          contentHair.classList.remove('active-content');
          setTimeout(() => {
             contentHair.style.display = 'none';
             contentDermal.style.display = 'block';
             setTimeout(() => contentDermal.classList.add('active-content'), 10);
          }, 500);
        }
      }

      // Intersection Observer for Reveal Animations
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });

      // Hero Slider
      const slides = document.querySelectorAll('.hero-slide');
      let currentSlide = 0;

      function nextSlide() {
          if (slides.length > 0) {
              slides[currentSlide].classList.remove('opacity-100');
              slides[currentSlide].classList.add('opacity-0');

              currentSlide = (currentSlide + 1) % slides.length;

              slides[currentSlide].classList.remove('opacity-0');
              slides[currentSlide].classList.add('opacity-100');
          }
      }

      if(slides.length > 0) {
          setInterval(nextSlide, 5000);
      }

      // Results Slider Grab & Drag Logic (Optional for Desktop UX)
      const slider = document.getElementById('results-slider');
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
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
      

<nav className="fixed z-50 transition-all duration-300 bg-transparent w-full pt-6 pr-6 pl-6 top-0">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
<a className="flex items-center gap-2 group z-50" href="#">
<span className="text-xl font-medium text-white tracking-tight translate-x-12 scale-150">
            ELYARA
          </span>
</a>
<div className="hidden md:flex items-center gap-8 px-8 py-3 bg-black/20 backdrop-blur-md rounded-full border border-white/10 z-50">
<a className="text-xs font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors" href="#about">
            Science
          </a>
<a className="text-xs font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors" href="#matrix">
            Products
          </a>
<a className="text-xs font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors" href="#clinical">
            Clinical
          </a>
<a className="text-xs font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors" href="#faq">
            FAQ
          </a>
</div>
<div className="z-50">
<a className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-all duration-300" href="#contact">
            Partner With Us
            <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-[85vh] rounded-b-[3rem] overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-[#1a0b00] animate-gradient">
<div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')'}}></div>
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 hero-slide flex flex-col justify-center items-start pt-20">
<img alt="Dermal Fillers" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fefa6477-9de5-4ccc-bf52-4fd0b38e42ca_3840w.jpg"/>
<div className="bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent z-10 absolute inset-0"></div>
<div className="max-w-7xl w-full mx-auto px-6 relative z-20 mt-10">
<div className="inline-block mb-6 reveal active">
<span className="text-[10px] font-medium tracking-widest uppercase text-white/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                For use by licensed medical practitioners only
              </span>
</div>
<h1 className="text-5xl md:text-7xl font-normal text-white tracking-tight leading-[1] mb-8 reveal active delay-100 max-w-4xl">
              Redefining Skin Quality
              <br/>
<span className="font-light italic text-white/90">
                Through Regenerative Precision
              </span>
</h1>
<div className="flex flex-wrap gap-4 mt-8 reveal active delay-200">
<a className="px-8 py-4 bg-orange-600 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:bg-orange-500 transition-colors inline-block shadow-lg shadow-orange-600/20" href="#about">
                Explore the Science
              </a>
<a className="px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors inline-block" href="#contact">
                Partner with us or Request a Sample/Demo
              </a>
</div>
</div>
</div>
<div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 hero-slide flex flex-col justify-center items-start pt-20">
<img alt="Hair Complex" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de381083-f38e-4f98-9ed8-d9e2ada8ef73_1600w.png"/>
<div className="bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent z-10 absolute inset-0"></div>
<div className="max-w-7xl w-full mx-auto px-6 relative z-20 mt-10">
<div className="inline-block mb-6">
<span className="text-[10px] font-medium tracking-widest uppercase text-white/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                For use by licensed medical practitioners only
              </span>
</div>
<h1 className="md:text-7xl leading-[1] text-5xl font-normal text-white tracking-tight max-w-4xl mb-8">
              Redefining Hair Quality
              <br/>
<span className="font-light text-white/90">
                Through Regenerative Precision
              </span>
</h1>
<div className="flex flex-wrap gap-4 mt-8">
<a className="px-8 py-4 bg-orange-600 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:bg-orange-500 transition-colors inline-block shadow-lg shadow-orange-600/20" href="#about">
                Explore the Science
              </a>
<a className="px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors inline-block" href="#contact">
                Partner with us or Request a Sample/Demo
              </a>
</div>
</div>
</div>
</div>
</header>
<section className="py-16 md:py-20 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start reveal">
<p className="text-xl md:text-2xl text-white font-light leading-relaxed tracking-tight">
            We combine advanced regenerative technologies with precision
            protocols to enhance tissue quality and function. The result is
            evidence-led care designed for durable, natural outcomes.
          </p>
<div className="border-l border-orange-500/30 pl-8">
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              Elyara is a next-generation injectable platform engineered for
              licensed medical professionals seeking refined outcomes,
              predictable longevity, and enhanced tissue integration.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 space-y-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div>
<span className="text-orange-600 text-xs font-medium tracking-widest uppercase mb-4 block">
              Peptide Tech
            </span>
<h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight leading-tight mb-6">
              Double Layer
              <br/>
<span className="text-neutral-500">Encapsulation.</span>
</h2>
<p className="text-lg text-black font-light mb-6">
              Elyara relies on advanced patented biomimetic peptide technology.
            </p>
<p className="text-neutral-600 font-light leading-relaxed mb-6">
              Peptides bind very precisely to receptors, enzymes, or cellular 
              structures and trigger targeted responses. Our unique platform ensures 
              predictable biological interaction and sustained regenerative effects.
            </p>
</div>
<div className="relative rounded-3xl overflow-hidden border border-black/5 bg-neutral-50 aspect-[4/3] lg:aspect-square flex items-center justify-center group">
<div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay z-10"></div>
<img alt="Double Layer Encapsulation" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c3c35cc-8e6c-4c7a-a6e6-47782b7c7e74_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>
<div className="relative z-20 w-32 h-32 rounded-full border border-orange-500/30 flex items-center justify-center">
<div className="w-24 h-24 rounded-full border border-black/10 backdrop-blur-sm bg-white/50 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-orange-500/20 blur-md absolute"></div>
<iconify-icon className="text-orange-500 relative z-10" height="32" icon="solar:layers-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="reveal delay-100">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-black/5 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 text-orange-600 border border-black/5 shadow-sm group-hover:bg-orange-50 transition-colors">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-black text-lg font-medium mb-4">Maximized efficacy and stability</h3>
<p className="text-neutral-600 text-sm font-light leading-relaxed">
                Protects peptides from rapid enzymatic degradation, ensuring optimal functionality.
              </p>
</div>
<div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-black/5 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 text-orange-600 border border-black/5 shadow-sm group-hover:bg-orange-50 transition-colors">
<iconify-icon height="24" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-black text-lg font-medium mb-4">Efficient and stable skin penetration</h3>
<p className="text-neutral-600 text-sm font-light leading-relaxed">
                Allows the active ingredients to safely cross barriers and reach deep target layers effectively.
              </p>
</div>
<div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-black/5 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 text-orange-600 border border-black/5 shadow-sm group-hover:bg-orange-50 transition-colors">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-black text-lg font-medium mb-4">Controlled, time-released delivery</h3>
<p className="text-neutral-600 text-sm font-light leading-relaxed">
                Ensures a sustained release of peptides, maintaining therapeutic levels long after injection.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:mx-6 overflow-hidden bg-[#080808] border-white/5 border rounded-[3rem] pt-24 pb-32 relative" id="science">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto px-6 relative">

<div className="flex justify-center mb-16 reveal">
<div className="inline-flex p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
<button className="px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-white text-black shadow-lg" id="btn-hair" onclick="switchTab('hair')">
              Hair Filler
            </button>
<button className="px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 text-neutral-400 hover:text-white" id="btn-dermal" onclick="switchTab('dermal')">
              Dermal Filler
            </button>
</div>
</div>

<div className="tab-content active-content block" id="content-hair">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 reveal">
<div className="max-w-2xl">
<span className="text-orange-500 text-xs font-medium tracking-widest uppercase mb-4 block">
                ELYARA- Injectable 7-Peptide Hair Complex
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Redefining Hair Restoration Through Follicular Bio-Stimulation
              </h2>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                Elyara- Injectable 7-Peptide Hair Complex is the world’s first CE-approved hair filler that leverages sustained release and peptide technology to support hair regrowth, improve hair thickness, and improve scalp health.
              </p>
</div>
</div>
<div className="mb-12 reveal delay-100">
<h3 className="text-xl font-medium text-white tracking-tight mb-6">Core Technology</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">Hair Growth Stimulation</h4>
<p className="text-neutral-400 text-xs font-light leading-relaxed">Enhances the expression of genes involved in hair follicle development and regeneration, promoting healthier and sustained hair growth.</p>
</div>
<div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">Inhibition of Alopecia Pathways</h4>
<p className="text-neutral-400 text-xs font-light leading-relaxed">Helps reduce hair loss by suppressing BMP4 and DKK-1, proteins known to inhibit hair follicle development and growth.</p>
</div>
<div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">Antioxidant Protection</h4>
<p className="text-neutral-400 text-xs font-light leading-relaxed">Reduces reactive oxygen species (ROS) generated by UV exposure and physiological stress, helping protect hair follicles from oxidative damage.</p>
</div>
<div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">Stimulation of Angiogenesis</h4>
<p className="text-neutral-400 text-xs font-light leading-relaxed">Promotes the formation of new blood vessels, improving oxygen and nutrient supply to the scalp and supporting healthy follicle development.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal delay-200">
<div className="lg:col-span-2 space-y-8">
<div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5">
<h3 className="text-lg font-medium text-white mb-4">Composition</h3>
<p className="text-neutral-400 text-xs font-light mb-6">The filler comprises a mix of hyaluronic acid with 7 patented peptides, each of which has unique hair revitalisation properties.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-400 font-light">
<div><strong className="text-white font-medium">Decapeptide-28 (CG-REHAIRIN):</strong> Stimulates hair follicles and prolongs the anagen (growth) phase.</div>
<div><strong className="text-white font-medium">Oligopeptide-71 (CG-EDRIN):</strong> Stimulates hair regrowth.</div>
<div><strong className="text-white font-medium">Octapeptide-2 (CG-PROHAIRIN B-4):</strong> Activates stem cells and boosts hair growth.</div>
<div><strong className="text-white font-medium">Decapeptide-18 (CG-WINT):</strong> Activates Wnt/B catenin and SHH signaling to stimulate new follicles.</div>
<div><strong className="text-white font-medium">Oligopeptide-54 (CG-NOKKIN):</strong> Acts as a BMP4 blocker, inhibiting BMP from binding to its receptor, resulting in decreased hair loss.</div>
<div><strong className="text-white font-medium">Octapeptide-11 (CG-SEPERIN):</strong> Promotes collagen production and skin structure improvement.</div>
<div className="md:col-span-2"><strong className="text-white font-medium">Decapeptide-10 (CG-KERAMIN-2):</strong> Supports hair follicle activity, assists in wound healing, and provides a calming and soothing effect.</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5">
<h3 className="text-sm font-medium text-white mb-4">Patient Selection: Ideal Candidates</h3>
<ul className="text-neutral-400 text-xs font-light space-y-2">
<li>• Male pattern hair loss (Norwood–Hamilton Stage II–IV-A)</li>
<li>• Female pattern hair loss (Savin Scale Type I–I to II-2)</li>
<li>• Experience diffuse hair thinning or early-stage hair loss</li>
<li>• Diagnosed with non-scarring alopecia</li>
<li>• Seek non-surgical regenerative treatments</li>
</ul>
</div>
<div className="bg-red-950/10 rounded-2xl p-6 border border-red-500/10">
<h3 className="text-sm font-medium text-red-400 mb-4">Not Suitable Candidates</h3>
<ul className="text-neutral-400 text-xs font-light space-y-2">
<li>• Scarring alopecia</li>
<li>• Active scalp infections or inflammatory disorders</li>
<li>• Known hypersensitivity to components</li>
<li>• Severe autoimmune disorders affecting hair growth</li>
<li>• Pregnancy or lactation</li>
</ul>
</div>
</div>
</div>
<div className="space-y-8">
<div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5">
<h3 className="text-sm font-medium text-white mb-4">Standard Treatment Protocol</h3>
<ul className="text-neutral-400 text-xs font-light space-y-3">
<li><span className="text-white font-medium">Sessions:</span> 4 (1 session every 2 weeks)</li>
<li><span className="text-white font-medium">Duration:</span> 8-week</li>
<li><span className="text-white font-medium">Follow-up:</span> Clinical assessment upon completion</li>
<li><span className="text-white font-medium">Maintenance:</span> Recommended every 3 to 6 months depending on individual response and goals</li>
</ul>
</div>
<div className="bg-orange-950/20 rounded-2xl p-8 border border-orange-500/10">
<h3 className="text-sm font-medium text-orange-400 mb-4">Injection Techniques</h3>
<ul className="text-neutral-300 text-xs font-light space-y-3">
<li><span className="text-white font-medium">Depth:</span> Superficial</li>
<li><span className="text-white font-medium block mt-1">Spacing:</span> Points placed every 0.2-0.3 cm. Lines spaced appx. 1cm apart.</li>
<li><span className="text-white font-medium block mt-1">Volume:</span> 0.02 ~ 0.05 ml per point. Total volume/session: 1ml or more depending on treatment area.</li>
</ul>
</div>
<div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5">
<h3 className="text-sm font-medium text-white mb-3">Safety Profile &amp; Side Effects</h3>
<p className="text-neutral-400 text-[10px] font-light leading-relaxed">
                  Elyara has a safe profile, though patients may experience some transient effects. Temporary redness at injection sites, mild swelling or bruising, and scalp sensitivity. Rare allergic reactions may occur.
                </p>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="content-dermal">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 reveal">
<div className="max-w-2xl">
<span className="text-orange-500 text-xs font-medium tracking-widest uppercase mb-4 block">
                ELYARA- Peptide Based Dermal Fillers
              </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Advanced Peptide-Integrated Hyaluronic Technology
              </h2>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                Elyara is, first-of-its-kind, CE approved dermal filler that combines cross-linked hyaluronic acid with biomimetic peptides. This unique peptide-integrated hyaluronic formulation actively supports dermal remodeling, collagen stimulation, and tissue regeneration to deliver smoother, refined, and more natural outcomes.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-100 mb-16">
<div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
<h3 className="text-xl font-medium text-white tracking-tight mb-4">From Volume to Regeneration</h3>
<p className="text-neutral-400 text-xs font-light leading-relaxed mb-4">
                Traditional hyaluronic acid fillers primarily restore volume but offer limited biological interaction with the surrounding dermal matrix. Elyara represents the next evolution in injectable aesthetics combining structural volumization with regenerative bio-stimulation.
              </p>
<ul className="text-neutral-400 text-xs font-light space-y-3">
<li><strong className="text-white font-medium">Integrated Peptide Technology:</strong> Incorporates Decapeptide-28 and Oligopeptide-54 to support extracellular matrix renewal.</li>
<li><strong className="text-white font-medium">Anti Ageing Effect:</strong> Supports improved skin quality and tissue vitality over time.</li>
<li><strong className="text-white font-medium">Natural Facial Movement:</strong> Engineered with optimized elastic modulus (G’).</li>
<li><strong className="text-white font-medium">Enhanced Longevity:</strong> Modulates enzymatic degradation pathways, allowing sustained results with lower cross-linking.</li>
<li><strong className="text-white font-medium">Collagen Stimulation:</strong> Supports fibroblast signaling and extracellular matrix remodeling.</li>
</ul>
</div>
<div className="space-y-8">
<div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Hybrid Molecule</h3>
<p className="text-neutral-400 text-xs font-light mb-4">At the core of Elyara is a peptide–hyaluronic acid crosslinked molecule designed to enhance filler performance.</p>
<ul className="text-neutral-400 text-xs font-light space-y-3">
<li><strong className="text-white font-medium">Oligopeptide-72 (CG-BOOSTRIN):</strong> Helps inhibit hyaluronidase activity, slowing HA breakdown and improving longevity.</li>
<li><strong className="text-white font-medium">Oligopeptide-50 (CG-GLAMERIN):</strong> Stimulates collagen and elastin synthesis, promoting neocollagenesis.</li>
</ul>
</div>
<div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Dual Mechanism of Action</h3>
<ul className="text-neutral-400 text-xs font-light space-y-3 mb-6">
<li><strong className="text-white font-medium">Immediate Structural Support:</strong> Stabilized HA provides instant volume restoration and wrinkle correction.</li>
<li><strong className="text-white font-medium">Progressive Bio-Stimulation:</strong> Peptide signaling helps stimulate fibroblast activity and collagen production.</li>
</ul>
<h4 className="text-sm font-medium text-white mb-2">Rheology:</h4>
<ul className="text-neutral-500 text-[10px] font-light space-y-1">
<li>• High elasticity (G’)</li>
<li>• Smooth injectability (G’’)</li>
<li>• Natural facial movement</li>
</ul>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-200">
<div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5">
<h3 className="text-sm font-medium text-white mb-4">Clinical Applications</h3>
<ul className="text-neutral-400 text-xs font-light space-y-2">
<li><span className="text-white font-medium">Wrinkle Reduction:</span> Softens fine lines and deeper folds.</li>
<li><span className="text-white font-medium">Volume Restoration:</span> Rebuilds lost facial volume in mid-facial regions.</li>
<li><span className="text-white font-medium">Facial Contouring:</span> Enhances definition in the jawline, cheekbones, and chin.</li>
<li><span className="text-white font-medium">Lip Enhancement:</span> Subtly increases volume and hydration.</li>
<li><span className="text-white font-medium">Hydration &amp; Elasticity:</span> Helps improve overall skin texture.</li>
</ul>
</div>
<div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5">
<h3 className="text-sm font-medium text-white mb-4">Injection Techniques</h3>
<ul className="text-neutral-400 text-xs font-light space-y-2 mb-4">
<li><span className="text-white font-medium">Linear Threading:</span> Smoothing longer lines and wrinkles.</li>
<li><span className="text-white font-medium">Cross-Hatching:</span> Widespread volume distribution.</li>
<li><span className="text-white font-medium">Micro-Bolus:</span> Discrete volume additions.</li>
<li><span className="text-white font-medium">Cannula-Assisted:</span> Reduce trauma and improve comfort.</li>
</ul>
<p className="text-neutral-500 text-[10px] font-light italic">
                Pre-treatment assessment of anatomy and customizing depth based on desired effect is key. Post-procedure focus on minimizing strenuous activity.
              </p>
</div>
<div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5">
<h3 className="text-sm font-medium text-white mb-4">Safety Profile</h3>
<p className="text-neutral-400 text-xs font-light mb-3">
                Biocompatible and designed for predictable integration. Peptides support improved tissue response and help reduce typical inflammatory reactions.
              </p>
<p className="text-neutral-500 text-[10px] font-light mb-2">Common transient effects:</p>
<div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-500 font-light">
<div>• Redness</div>
<div>• Swelling</div>
<div>• Bruising</div>
<div>• Mild tenderness</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal flex flex-col items-center">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-all mb-4" href="#matrix">
              Discover the Elyara Technology
            </a>
<button className="text-[10px] font-medium tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">
              Add References
            </button>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pb-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Why Doctors Choose Elyara
          </h2>
<p className="text-neutral-400 font-light max-w-2xl mx-auto text-sm">
            Designed for Precision. Engineered for Predictability.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal delay-100 justify-center">
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group shadow-sm">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-orange-600 transition-colors" height="32" icon="solar:target-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Ease of Injection</h3>
<p className="text-neutral-400 text-sm font-light">Optimized rheology for smooth extrusion and precise placement.</p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group shadow-sm">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-orange-600 transition-colors" height="32" icon="solar:shield-warning-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Advanced Safety Profile</h3>
<p className="text-neutral-400 text-sm font-light">Low BDDE residue and high biocompatibility.</p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group shadow-sm">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-orange-600 transition-colors" height="32" icon="solar:chart-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Predictable Results</h3>
<p className="text-neutral-400 text-sm font-light">Engineered cross-link density for sustained aesthetic outcomes.</p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group shadow-sm lg:col-start-1 lg:ml-auto lg:mr-0 max-w-md w-full">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-orange-600 transition-colors" height="32" icon="solar:waterdrops-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Smooth Tissue Integration</h3>
<p className="text-neutral-400 text-sm font-light">Smooth distribution with minimal post-injection irregularities.</p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group shadow-sm lg:col-start-2 max-w-md w-full">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-orange-600 transition-colors" height="32" icon="solar:flask-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Science-Backed</h3>
<p className="text-neutral-400 text-sm font-light">Developed in laboratories specialized in advanced wound healing and biomaterials.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="relative w-full aspect-[21/9] min-h-[400px] rounded-[3rem] overflow-hidden reveal group">
<div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-700 group-hover:bg-black/20"></div>
<img alt="Abstract Fluid Texture" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight leading-tight max-w-3xl opacity-90">
              Elegance in Every
              <br/>
<span className="italic font-light text-white/70">Micron</span>
</h2>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#050505] relative border-t border-white/5" id="matrix">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 reveal">
<div className="">
<span className="text-orange-500 text-xs font-medium tracking-widest uppercase mb-4 block">
              Dermal Collection
            </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              Product Range
            </h2>
</div>
</div>

<div className="grid grid-cols-1 gap-8 reveal delay-100 lg:grid-cols-2">

<div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 group flex flex-col">
<div className="h-64 relative bg-[#0f0f0f] flex items-center justify-center p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-[#0a0a0a]"></div>
<img alt="Elyara Plus Packaging" className="relative z-10 h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-90 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f634859-dcf4-4855-b383-a708a08d6f54_800w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col relative z-10 border-t border-white/5">
<div className="flex items-start justify-between mb-2">
<div className="">
<span className="inline-block px-2 py-1 bg-orange-600/20 text-orange-500 text-[10px] font-medium uppercase tracking-widest rounded mb-3 border border-orange-500/20">
                    Plus
                  </span>
<h3 className="text-3xl font-normal text-white mb-0 tracking-tight">
                    ELYARA
                    <span className="text-orange-500 font-medium">Plus</span>
</h3>
</div>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 mt-4">
                For fine lines and mid-dermal refinement.
              </p>
<div className="mt-auto bg-black/40 rounded-lg border border-white/5 p-4 text-xs">
<div className="space-y-2 font-mono text-neutral-300">
<div className="flex justify-between border-b border-white/5 pb-1">
<span className="">HA Concentration</span>
<span className="text-orange-400">XX mg/ml</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-1">
<span className="">BDDE cross-linking</span>
<span className="text-neutral-500">XX%</span>
</div>
<div className="flex justify-between">
<span className="">Duration</span>
<span className="text-neutral-500">9–12 months</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 group flex flex-col">
<div className="h-64 relative bg-[#0f0f0f] flex items-center justify-center p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800/20 to-[#0a0a0a]"></div>
<img alt="Elyara Ultra Packaging" className="relative z-10 h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-90 group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f634859-dcf4-4855-b383-a708a08d6f54_800w.png"/>
</div>
<div className="p-8 flex-1 flex flex-col relative z-10 border-t border-white/5">
<div className="flex items-start justify-between mb-2">
<div>
<span className="inline-block px-2 py-1 bg-neutral-700/30 text-neutral-300 text-[10px] font-medium uppercase tracking-widest rounded mb-3 border border-white/10">
                    Ultra
                  </span>
<h3 className="text-3xl font-normal text-white mb-0 tracking-tight">
                    ELYARA
                    <span className="text-white font-medium">Ultra</span>
</h3>
</div>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 mt-4">
                For structural contouring and volume restoration.
              </p>
<div className="mt-auto bg-black/40 rounded-lg border border-white/5 p-4 text-xs">
<div className="space-y-2 font-mono text-neutral-300">
<div className="flex justify-between border-b border-white/5 pb-1">
<span>HA Concentration</span>
<span className="text-white">XX mg/ml</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-1">
<span>BDDE cross-linking</span>
<span className="text-neutral-500">XX%</span>
</div>
<div className="flex justify-between">
<span>Duration</span>
<span className="text-neutral-500">9–12 months</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="clinical">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Clinical Performance
          </h2>
<span className="text-orange-600 text-xs font-medium tracking-widest uppercase block">
            Clinical Highlights
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal delay-100 mb-12">

<div className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col group">
<div className="h-48 bg-[#111] relative flex items-center justify-center border-b border-white/5 p-6">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform duration-500" height="48" icon="solar:graph-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="p-8 flex-1 flex flex-col justify-center">
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                Elyara showed an 81% increase in endogenous collagen type I production and 45% increase in Hyaluronic acid synthesis compared to standard HA fillers.
              </p>
</div>
</div>

<div className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col group">
<div className="h-48 bg-[#111] relative flex items-center justify-center border-b border-white/5 p-6">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform duration-500" height="48" icon="solar:shield-check-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="p-8 flex-1 flex flex-col justify-center">
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                Elyara demonstrated strong antioxidant activity against oxidative chemical stress and UV-induced photodamage in human dermal fibroblasts.
              </p>
</div>
</div>

<div className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden flex flex-col group">
<div className="h-48 bg-[#111] relative flex items-center justify-center border-b border-white/5 p-6">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform duration-500" height="48" icon="solar:history-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="p-8 flex-1 flex flex-col justify-center">
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                Elyara provides extended durability relative to other hyaluronic acid dermal fillers.
              </p>
</div>
</div>
</div>
<div className="text-center reveal delay-200">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-all" href="#">
             Download Clinical Whitepaper
           </a>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] border-white/5 border-t pt-24 pb-24 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
<div className="flex flex-col md:flex-row reveal items-end justify-between">
<div>
<span className="text-orange-500 text-xs font-medium tracking-widest uppercase mb-4 block">
              Proven Results
            </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Patient Transformations
            </h2>
<p className="text-neutral-400 max-w-xl font-light leading-relaxed text-sm">
              Images are for illustrative purposes. Individual results vary.
            </p>
</div>
</div>
</div>

<div className="w-full relative z-10 reveal delay-100">
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar w-full" id="results-slider">

<div className="group relative aspect-[3/4] min-w-[85vw] md:min-w-[45vw] lg:min-w-[28vw] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 snap-center flex-shrink-0">
<img alt="Result 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de381083-f38e-4f98-9ed8-d9e2ada8ef73_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wider">Before / After</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-sm font-medium mb-1">Mid-Face Volume</h3>
<p className="text-neutral-500 text-xs">Elyara Ultra</p>
</div>
</div>

<div className="group relative aspect-[3/4] min-w-[85vw] md:min-w-[45vw] lg:min-w-[28vw] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 snap-center flex-shrink-0">
<img alt="Result 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5d4042f-19d1-44d2-b30c-44aad1fb5114_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wider">Before / After</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-sm font-medium mb-1">Nasolabial Folds</h3>
<p className="text-neutral-500 text-xs">Elyara Plus</p>
</div>
</div>

<div className="group relative aspect-[3/4] min-w-[85vw] md:min-w-[45vw] lg:min-w-[28vw] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 snap-center flex-shrink-0">
<img alt="Result 3" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f634859-dcf4-4855-b383-a708a08d6f54_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wider">Before / After</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-sm font-medium mb-1">Hair Density</h3>
<p className="text-neutral-500 text-xs">Elyara Hair Complex</p>
</div>
</div>

<div className="group relative aspect-[3/4] min-w-[85vw] md:min-w-[45vw] lg:min-w-[28vw] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 snap-center flex-shrink-0">
<img alt="Result 4" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3906a2d-bea0-4b22-95e0-81bff957b6ef_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wider">Before / After</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-sm font-medium mb-1">Jawline Contour</h3>
<p className="text-neutral-500 text-xs">Elyara Ultra</p>
</div>
</div>

<div className="group relative aspect-[3/4] min-w-[85vw] md:min-w-[45vw] lg:min-w-[28vw] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 snap-center flex-shrink-0">
<img alt="Result 5" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de381083-f38e-4f98-9ed8-d9e2ada8ef73_800w.png'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de381083-f38e-4f98-9ed8-d9e2ada8ef73_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wider">Before / After</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-sm font-medium mb-1">Skin Quality</h3>
<p className="text-neutral-500 text-xs">Elyara Plus</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Frequently Asked Questions
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto reveal delay-100">

<div>
<h3 className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4">
              Hair Complex
            </h3>
<div className="space-y-4">
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  How many sessions are required?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  A standard protocol involves 4 sessions spaced 2 weeks apart. Maintenance sessions are recommended every 3 to 6 months to sustain results, depending on the severity of the alopecia.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Is the procedure painful?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  The procedure is generally well-tolerated, with minimal discomfort reported by most patients. A topical anesthetic cream may be applied prior to treatment to enhance comfort.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  How soon can patients see results?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Initial improvements are often visible after 2–3 sessions (approximately 4–6 weeks). However, optimal results are typically achieved after completing the full 4-session protocol.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  How long do the results last?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Results may last between 6 to 12 months, depending on individual factors such as age, hair loss severity, and lifestyle. Maintenance sessions are recommended every 3 to 6 months to sustain results.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Can women use Elyara Hair Complex?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Yes, Elyara is highly effective for female pattern hair loss and general thinning. Unlike some hormonal treatments restricted by gender, the peptide mechanism is safe and effective for both men and women.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Can Elyara Hair Filler be combined with other treatments?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Yes. It can be safely combined with oral medications, topical solutions, and other therapies to achieve enhanced outcomes.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Can this be used after a hair transplant?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Absolutely. Elyara is often used 1 month prior to surgery to prepare the scalp and 1 month post-surgery to stimulate graft survival and accelerate healing of the donor area.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Is there any downtime?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  There is no significant downtime. Patients can resume normal activities immediately, although mild redness may persist at injection sites for 24–48 hours.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  How is Elyara compared to PRP?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Unlike PRP (Platelet-Rich Plasma), Elyara Hair Filler delivers consistent and standardized results and does not require blood collection or centrifugation. It contains a targeted peptide complex designed to stimulate specific hair growth pathways.
                </div>
</details>
</div>
</div>

<div>
<h3 className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4">
              Dermal Fillers
            </h3>
<div className="space-y-4">
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  How long does Elyara last?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Elyara dermal filler results generally last between 9 to 18 months, depending on the specific product variant (Plus or Ultra), treatment area, injection depth, and individual metabolic factors. Longevity may vary based on patient lifestyle and facial dynamics.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Is Elyara better than other dermal fillers?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Elyara’s peptide-integrated hyaluronic acid technology is designed to offer enhanced stability and smoother tissue integration compared to traditional HA fillers. The formulation supports prolonged results and is engineered to minimize excessive swelling while maintaining natural facial movement. Clinical outcomes depend on practitioner technique and patient-specific factors.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  What is the downtime after an Elyara treatment?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Most patients experience minimal downtime following Elyara injections. Temporary redness, mild swelling, or slight bruising may occur and typically resolve within 24–48 hours. Patients can usually resume normal activities shortly after treatment, following practitioner guidance.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Who is an ideal candidate for Elyara?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Ideal candidates are individuals seeking non-surgical facial rejuvenation, wrinkle reduction, or volume restoration with natural-looking, longer-lasting results. Suitability should be assessed by a qualified medical professional to ensure safe and appropriate treatment planning.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  What type of hyaluronic acid is used in Elyara?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Elyara utilizes stabilized cross-linked hyaluronic acid engineered for optimized durability, cohesivity, and tissue integration. Cross-link density is calibrated to balance longevity with natural tissue movement.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  What is the role of peptides in Elyara?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  The incorporated peptide complexes are designed to support cellular signaling within the dermal microenvironment. They may assist in fibroblast modulation and extracellular matrix support, contributing to improved tissue quality over time.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Does Elyara rely on BDDE cross-linking?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Elyara primarily relies on peptides for cross-linking, making it a safer alternative to traditional HA fillers that rely only on BDDE to stabilize hyaluronic acid. Detailed manufacturing specifications are available in the product dossier.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Can Elyara be combined with other procedures?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Elyara may be integrated into comprehensive treatment plans, including combination protocols with neuromodulators, PRP, or energy-based devices, as clinically appropriate. Treatment sequencing should be determined by the practitioner.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  What are the contraindications?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Elyara should not be used in: Patients with known hypersensitivity to HA components, active skin infections at injection site, known autoimmune connective tissue disorders (based on practitioner discretion), pregnancy or lactation (unless clinically justified). Refer to full prescribing information before use.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  Is Elyara reversible?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  As a hyaluronic acid-based injectable, Elyara may be managed with hyaluronidase in cases requiring dissolution. Clinical discretion is advised.
                </div>
</details>
<details className="group border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer open:border-orange-500/30 transition-colors shadow-sm">
<summary className="flex justify-between items-center font-medium p-5 text-sm text-white select-none">
                  How should Elyara be stored?
                  <iconify-icon className="text-neutral-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-neutral-400 text-xs font-light p-5 pt-0 leading-relaxed border-t border-white/5 mt-2">
                  Store at recommended temperature range (as specified in IFU). Do not freeze. Protect from direct sunlight. Use immediately after opening. Refer to product labeling for full storage guidance.
                </div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Partner with
              <br/>
<span className="text-neutral-500">Elyara.</span>
</h2>
<p className="text-neutral-400 font-light leading-relaxed mb-8 max-w-md">
              We collaborate with leading medical professionals globally to deliver regenerative science.
            </p>
<div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 mb-8">
<h3 className="text-sm font-medium text-white mb-4 tracking-wider uppercase">We collaborate with:</h3>
<ul className="text-neutral-400 text-xs font-light space-y-3">
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Aesthetic clinics
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Dermatology centers
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Plastic surgery practices
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Regional distributors
                </li>
</ul>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-orange-500">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Headquarters</h3>
<p className="text-neutral-500 text-xs mt-0.5">
                    123 Innovation Dr, BioTech Park, Zurich
                  </p>
</div>
</div>
</div>
</div>
<div className="reveal delay-100 bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<form className="relative z-10 space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest ml-1">
                    Name
                  </label>
<input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-orange-500/50 focus:outline-none transition-colors" placeholder="Dr. Name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest ml-1">
                    Practice Type
                  </label>
<input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-orange-500/50 focus:outline-none transition-colors" placeholder="Clinic / Distributor" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest ml-1">
                  Email
                </label>
<input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-orange-500/50 focus:outline-none transition-colors" placeholder="email@practice.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest ml-1">
                  Message
                </label>
<textarea className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-700 focus:border-orange-500/50 focus:outline-none transition-colors resize-none" placeholder="Request details..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-neutral-200 transition-colors mt-2" type="button">
                Request Product Kit
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden" id="access">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
<div className="max-w-3xl">
<a className="inline-block text-3xl font-medium tracking-tight text-white mb-8" href="#">
              Elyara.
            </a>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Redefining Beauty Through
              <br/>
<span className="text-neutral-500">Regenerative Science.</span>
</h2>
</div>
<div className="w-full lg:w-auto min-w-[340px]">
<span className="block text-sm text-neutral-300 mb-4 ml-1">
              Join our practitioner network
            </span>
<div className="flex items-center bg-[#0a0a0a] border border-white/10 rounded-full p-1.5 focus-within:border-orange-500/50 transition-colors w-full">
<input className="bg-transparent border-none outline-none text-sm text-white px-5 py-2 w-full placeholder:text-neutral-600 bg-none focus:ring-0" placeholder="Enter your email" type="email"/>
<button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap">
                Subscribe
              </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div>
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">
              Contact Information
            </h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="text-orange-500 group-hover:text-white transition-colors" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="text-sm text-neutral-400 font-light group-hover:text-white transition-colors">
                  support@elyara.com
                </span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="text-orange-500 group-hover:text-white transition-colors" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
<span className="text-sm text-neutral-400 font-light group-hover:text-white transition-colors">
                  1800-3232-8686
                </span>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-400 font-light hover:text-orange-500 transition-colors" href="#about">
                  Science
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 font-light hover:text-orange-500 transition-colors" href="#matrix">
                  Product Range
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">
              Help
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-neutral-400 font-light hover:text-orange-500 transition-colors" href="#faq">
                  FAQ
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 font-light hover:text-orange-500 transition-colors" href="#contact">
                  Request a Demo
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">
              Follow Us
            </h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all" href="#">
<iconify-icon height="20" icon="uil:facebook-f" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all" href="#">
<iconify-icon height="20" icon="uil:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all" href="#">
<iconify-icon height="20" icon="uil:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500 font-light">
            © 2025 Elyara Inc. All Rights Reserved. For use by licensed medical
            practitioners only.
          </p>
<div className="flex gap-8">
<a className="text-xs text-neutral-500 font-light hover:text-white transition-colors" href="#">
              Privacy
            </a>
<a className="text-xs text-neutral-500 font-light hover:text-white transition-colors" href="#">
              Terms &amp; conditions
            </a>
</div>
</div>
</div>
</footer>


<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105 ring-1 ring-white/5">
<button className="px-6 py-3 rounded-full text-[10px] font-medium tracking-widest uppercase text-black bg-white hover:bg-neutral-200 transition-colors shadow-lg" onclick="document.getElementById('science').scrollIntoView({behavior: 'smooth'}); switchTab('hair')">
        Hair Filler
      </button>
<button className="px-6 py-3 rounded-full text-[10px] font-medium tracking-widest uppercase text-neutral-400 hover:text-white hover:bg-white/10 transition-all" onclick="document.getElementById('science').scrollIntoView({behavior: 'smooth'}); switchTab('dermal')">
        Dermal Filler
      </button>
</div>

    </>
  );
}
