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
primary: '#b54bfb',
secondary: '#ded2fd',
dark: '#1a1a1a',
},
fontFamily: {
sans: ['Roboto', 'sans-serif'],
serif: ['Georgia', 'serif'],
}
}
}
}

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
      

<nav className="absolute top-0 left-0 w-full z-50 text-white border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

<a className="text-xl tracking-tight font-serif italic font-medium z-50" href="#">
                TBWWIOC
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-secondary transition-colors duration-200" href="#">About</a>
<a className="text-secondary border-b border-secondary pb-0.5" href="#">TBWWIOC Experience</a>
<a className="hover:text-secondary transition-colors duration-200" href="#">Admissions</a>
<a className="hover:text-secondary transition-colors duration-200" href="#">Contact</a>
<a className="hover:text-secondary transition-colors duration-200" href="#">Login</a>
<a className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-purple-900/20" href="#">
                    Apply Now
                </a>
</div>

<button className="md:hidden z-50 text-white">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Campus Life" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
</div>

<div className="relative z-10 text-center px-6 mt-12">
<h1 className="text-4xl md:text-6xl text-white tracking-tight leading-tight font-medium drop-shadow-sm">
                TBWWIOC Experience
            </h1>
<div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
</div>
</header>

<main className="w-full">

<section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-secondary/30 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Athletics" className="relative rounded-lg shadow-xl w-full h-[400px] object-cover filter brightness-[1.02]" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col space-y-6">
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-medium">Athletics</h2>
<p className="text-lg text-gray-600 leading-relaxed font-light">
                        Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up. We also participate in inter-school, district, state and national level competitions.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center text-primary font-medium hover:text-purple-700 transition-colors group" href="#">
                            Explore Sports Program
                            <iconify-icon className="ml-2 transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-secondary/30 border-y border-purple-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="order-2 md:order-1 flex flex-col space-y-6">
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-medium">In-house Publications</h2>
<p className="text-lg text-gray-600 leading-relaxed font-light">
                            We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines. We host a book sale every 2 years to promote our writers and their work.
                        </p>
<div className="pt-4">
<a className="inline-flex items-center text-primary font-medium hover:text-purple-700 transition-colors group" href="#">
                                Read Publications
                                <iconify-icon className="ml-2 transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 md:order-2 relative group">
<div className="absolute -inset-4 bg-white rounded-xl transform -rotate-2 group-hover:-rotate-1 transition-transform duration-500 shadow-sm"></div>
<img alt="Library and Books" className="relative rounded-lg shadow-xl w-full h-[400px] object-cover" src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-secondary/30 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Performing Arts" className="relative rounded-lg shadow-xl w-full h-[400px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="flex flex-col space-y-6">
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-medium">Performing Arts &amp; Music</h2>
<p className="text-lg text-gray-600 leading-relaxed font-light">
                        With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center text-primary font-medium hover:text-purple-700 transition-colors group" href="#">
                            View Gallery
                            <iconify-icon className="ml-2 transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium">Join the TBWWIOC Community</h2>
<p className="text-gray-500 mb-10 text-lg">Experience academic excellence and holistic growth.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-purple-900/10 font-medium" href="#">
                        Apply Now
                    </a>
<a className="bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50 transition-all font-medium flex items-center justify-center gap-2" href="#">
<iconify-icon icon="lucide:mail" strokeWidth="1.5"></iconify-icon> Contact Admissions
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<p>© 2023 TBWWIOC. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Terms of Use</a>
</div>
</div>
</footer>

    </>
  );
}
