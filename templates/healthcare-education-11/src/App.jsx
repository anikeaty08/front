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



tailwind.config = {
theme: {
extend: {
colors: {
'adom-teal': '#1A4D4D',
'adom-cream': '#F5F1E8',
'adom-gold': '#C4A962',
'adom-navy': '#0D1B2A',
},
fontFamily: {
'inter': ['Inter', 'sans-serif'],
}
}
}
}



        lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<a className="text-2xl font-semibold tracking-tight text-adom-navy" href="home.html">
                    ADOM Academy
                </a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-adom-navy hover:text-adom-teal transition-colors" href="home.html">Home</a>
<a className="text-sm font-medium text-adom-navy hover:text-adom-teal transition-colors" href="about.html">About</a>
<a className="text-sm font-medium text-adom-navy hover:text-adom-teal transition-colors" href="program.html">Program</a>
<a className="text-sm font-medium text-adom-navy hover:text-adom-teal transition-colors" href="admissions.html">Admissions</a>
<a className="text-sm font-medium text-adom-navy hover:text-adom-teal transition-colors" href="financial.html">Financial</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-adom-teal border border-adom-teal rounded hover:bg-adom-teal hover:text-white transition-all" href="admissions.html">
                        Apply Now
                    </a>
<button className="lg:hidden p-2">
<i className="w-6 h-6 text-adom-navy" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="bg-adom-cream py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-4xl">
<h1 className="font-semibold text-5xl lg:text-6xl xl:text-7xl text-adom-navy tracking-tight leading-[1.1] mb-6">
                    Transforming Healthcare, One Student at a Time
                </h1>
<p className="text-xl lg:text-2xl text-adom-navy/80 leading-relaxed mb-10">
                    Train in Diagnostic Medical Sonography and Vascular Technology through ADOM's pioneering Diagnostology program. ADOM Academy is home to the world's first Doctorate in Diagnostology (DDg), a new approach to diagnosis that protects people, saves lives, and safeguards our planet.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-adom-teal rounded hover:bg-adom-teal/90 transition-all" href="admissions.html">
                        Apply Now
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-adom-teal border border-adom-teal rounded hover:bg-adom-teal hover:text-white transition-all" href="#info-session">
                        Book an Information Session
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<h2 className="text-sm font-medium text-adom-gold uppercase tracking-wider mb-4">Our Purpose</h2>
<h3 className="font-semibold text-3xl lg:text-4xl text-adom-navy tracking-tight mb-6">
                Early Detection Without Radiation
            </h3>
<div className="prose prose-lg max-w-none">
<p className="text-lg text-adom-navy/80 leading-relaxed mb-6">
                    ADOM Academy was founded on a single truth: every diagnostic image should heal, not harm. By reducing unnecessary radiation exposure, especially in children, we are redefining how disease is detected, understood, and prevented. Students learn to diagnose at the core by seeking the cause, not only the symptom.
                </p>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-adom-cream">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<h2 className="text-sm font-medium text-adom-gold uppercase tracking-wider mb-4">What We Teach</h2>
<h3 className="font-semibold text-3xl lg:text-4xl text-adom-navy tracking-tight mb-6">
                Education That Redefines Medicine
            </h3>
<div className="space-y-6 text-lg text-adom-navy/80 leading-relaxed mb-10">
<p>
                    Students at ADOM Academy study Diagnostic Medical Sonography and Vascular Technology, which are the essential foundations of ultrasound science and practice. These disciplines teach students to visualize the body in motion, to assess function in real time, and to detect disease safely and precisely.
                </p>
<p>
                    The program then expands into Diagnostology, a discipline created at ADOM that integrates ultrasound, vascular imaging, pathology correlation, and lab-value analysis. Diagnostology teaches students to connect structure with cause, helping them understand why disease occurs rather than simply where it appears.
                </p>
<p>
                    Together, these areas of study create a modern approach to medicine that replaces unnecessary radiation with knowledge, compassion, and truth.
                </p>
</div>
<a className="inline-flex items-center gap-2 text-adom-teal font-medium hover:gap-3 transition-all" href="program.html">
                Explore the Program
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-20 lg:py-28 bg-adom-teal text-white">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<h2 className="text-sm font-medium text-adom-gold uppercase tracking-wider mb-4">Doctorate Pathway</h2>
<h3 className="font-semibold text-3xl lg:text-4xl tracking-tight mb-6">
                The Next Level in Non-Radiative Diagnostic Medicine
            </h3>
<div className="space-y-6 text-lg text-white/90 leading-relaxed mb-10">
<p>
                    Graduates of ADOM Academy, as well as credentialed sonographers and qualified medical professionals, may apply for the Doctorate in Diagnostology (DDg) through the ADOM Board of Clinical Diagnostic Education (ADOM BCDE).
                </p>
<p>
                    This professional doctorate represents the highest level of training in non-radiative diagnostics and clinical interpretation. It recognizes advanced expertise and a commitment to accuracy, patient safety, and the understanding of cause in medicine.
                </p>
</div>
<a className="inline-flex items-center gap-2 text-white font-medium border-b border-white/40 hover:border-white transition-all" href="#doctorate">
                Learn About the Doctorate Pathway
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<h2 className="text-sm font-medium text-adom-gold uppercase tracking-wider mb-4">Career Pathways</h2>
<h3 className="font-semibold text-3xl lg:text-4xl text-adom-navy tracking-tight mb-6">
                New Beginnings in Diagnostic Medicine
            </h3>
<div className="space-y-6 text-lg text-adom-navy/80 leading-relaxed mb-10">
<p>
                    ADOM Academy was created for individuals who are seeking a meaningful new career or a new direction in healthcare. The program offers clear and accessible pathways for people from all backgrounds, including recent graduates, career changers, and those returning to work, to enter the medical field with confidence and purpose.
                </p>
<p>
                    Graduates become Diagnostic Medical Sonographers, Vascular Technologists, and Diagnostologists. They are healthcare professionals who view the body with understanding, clarity, and respect rather than exposure to radiation.
                </p>
</div>
<a className="inline-flex items-center gap-2 text-adom-teal font-medium hover:gap-3 transition-all" href="admissions.html">
                Start Your Application
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-20 lg:py-28 bg-adom-cream">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<h2 className="text-sm font-medium text-adom-gold uppercase tracking-wider mb-4">Our Legacy</h2>
<h3 className="font-semibold text-3xl lg:text-4xl text-adom-navy tracking-tight mb-6">
                Over Two Decades of Diagnostic Excellence
            </h3>
<p className="text-lg text-adom-navy/80 leading-relaxed">
                ADOM's foundation is built upon a long history of ultrasound education and innovation. From the Gulf Coast Institute of Vascular Ultrasound, founded in 1999, to the Center for Ultrasound Research &amp; Education (CURE), the mission has always remained the same: to teach diagnosis as the heart of medicine and to reduce unnecessary radiation wherever it causes harm.
            </p>
<p className="text-lg text-adom-navy/80 leading-relaxed mt-6">
                ADOM Academy continues this legacy for a new generation of healthcare professionals who are dedicated to safety, accuracy, and truth in medicine.
            </p>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<h2 className="text-sm font-medium text-adom-gold uppercase tracking-wider mb-4 text-center">Testimonials and Impact</h2>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-adom-cream rounded-lg p-8">
<p className="text-lg text-adom-navy/80 leading-relaxed mb-4">
                        "I wish I took this course years ago. It exceeded my expectations."
                    </p>
<p className="text-sm font-medium text-adom-navy">— Dr. Vidur Mahadeva</p>
</div>
<div className="bg-adom-cream rounded-lg p-8">
<p className="text-lg text-adom-navy/80 leading-relaxed mb-4">
                        "Early detection shouldn't come with a dose of radiation."
                    </p>
<p className="text-sm font-medium text-adom-navy">— Kae Nussbaumer, DDg</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 text-center">
<div>
<div className="text-4xl font-semibold text-adom-teal mb-2">700+</div>
<p className="text-adom-navy/70">Graduates nationwide</p>
</div>
<div>
<div className="text-4xl font-semibold text-adom-teal mb-2">10M+</div>
<p className="text-adom-navy/70">Ultrasounds performed by CURE and ADOM-trained professionals</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-adom-teal text-white">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="font-semibold text-3xl lg:text-4xl tracking-tight mb-8">
                Ready to Begin Your Journey in Diagnostic Medicine?
            </h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-adom-teal bg-white rounded hover:bg-adom-cream transition-all" href="admissions.html">
                    Apply Now
                </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border border-white rounded hover:bg-white/10 transition-all" href="#info-session">
                    Book an Information Session
                </a>
</div>
<div className="text-white/80">
<p className="mb-2">100 Reserve Road, Suite 4F, Danbury, CT 06810</p>
<p>1 (855) ONE-ADOM | info@adomacademy.com</p>
</div>
</div>
</section>

<footer className="bg-adom-navy text-white py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="text-xl font-semibold mb-4">ADOM Academy</div>
<p className="text-sm text-white/70 leading-relaxed">
                        Academy of Diagnostic &amp; Osteopathic Medicine
                    </p>
</div>
<div>
<h3 className="text-sm font-medium mb-4">Navigation</h3>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="home.html">Home</a></li>
<li><a className="hover:text-white transition-colors" href="about.html">About</a></li>
<li><a className="hover:text-white transition-colors" href="program.html">Program</a></li>
<li><a className="hover:text-white transition-colors" href="admissions.html">Admissions</a></li>
<li><a className="hover:text-white transition-colors" href="financial.html">Financial</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4">Contact</h3>
<ul className="space-y-2 text-sm text-white/70">
<li>100 Reserve Road, Suite 4F</li>
<li>Danbury, CT 06810</li>
<li><a className="hover:text-white transition-colors" href="tel:18556632366">1 (855) ONE-ADOM</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:info@adomacademy.com">info@adomacademy.com</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4">Connect</h3>
<div className="flex gap-4">
<a className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 text-sm text-white/50 text-center">
<p>© 2024 ADOM Academy. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
