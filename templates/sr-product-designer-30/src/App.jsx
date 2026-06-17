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



        function copyEmail(button) {
            const email = "j.brown@email.com";
            const textSpan = button.querySelector('.email-text');
            const originalText = textSpan.innerText;
            
            navigator.clipboard.writeText(email).then(() => {
                textSpan.innerText = "Email copied!";
                setTimeout(() => {
                    textSpan.innerText = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-transparent transition-all duration-300">
<div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

<a className="text-sm font-semibold tracking-tight z-10 relative" href="#">
                Jay Brown
            </a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#about">About</a>
</div>

<button className="group flex items-center gap-2 bg-[#0e0e0e] text-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform active:scale-95 text-sm font-medium" onclick="copyEmail(this)">
<span className="email-text">j.brown@email.com</span>
<span className="iconify w-4 h-4 text-white/70" data-icon="lucide:copy"></span>
</button>
</div>
</nav>

<main className="w-full overflow-hidden">

<section className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24">

<div className="reveal-up relative w-full max-w-[350px] aspect-square flex-shrink-0 md:ml-12">
<div className="w-full h-full rounded-none overflow-hidden rotate-[-8deg] shadow-2xl transition-transform duration-700 hover:rotate-0">
<img alt="Hero Image" className="w-full h-full object-cover" src="https://framerusercontent.com/images/JQqsD7xecQfWDLwoSTpvjAMyVw.png?scale-down-to=512"/>
</div>
</div>

<div className="reveal-up reveal-delay-1 flex flex-col gap-8 max-w-2xl">
<h1 className="text-5xl md:text-[88px] leading-[0.95] tracking-tighter-custom font-medium text-[#0e0e0e]">
                    Sr. Product Designer
                </h1>
<div className="text-xl md:text-2xl leading-relaxed font-medium text-[#0e0e0e] space-y-1">
<p>Currently leading the design &amp; strategy of Crosby’s retail point-of-sale tool called <a className="text-blue-500 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors" href="#">“Encore.”</a></p>
<p className="text-gray-500 font-normal">In my spare time, I build Framer templates and run an online store.</p>
</div>
</div>
</section>

<div className="reveal-up reveal-delay-2 max-w-[1300px] mx-auto px-4 sm:px-6 mb-32">
<div className="w-full aspect-video md:h-[850px] rounded-none overflow-hidden bg-gray-50">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://framerusercontent.com/images/YDjVNDAOvD5YmVUUL9xUCPgIbSw.png">
<source src="https://framerusercontent.com/assets/qrR62CWXqDhpxD9VshrTGooXZg.mp4" type="video/mp4"/>
</video>
</div>
</div>

<section className="max-w-[1400px] mx-auto px-6 pb-32" id="work">

<div className="sticky top-24 z-10 flex flex-col items-center justify-center pointer-events-none mix-blend-difference text-white mb-24 md:mb-32">

</div>
<div className="flex flex-col items-center gap-12 text-center mb-24 reveal-up">
<h2 className="text-6xl md:text-[120px] font-medium tracking-tighter-custom leading-none">Featured work</h2>
<p className="text-gray-500 uppercase tracking-wide text-xs font-semibold">(Scroll to explore)</p>
</div>

<div className="reveal-up project-card group relative w-full mb-32">
<a className="block w-full" href="#">
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-[24px]">
<img alt="Olio Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/R1r7VFivZ1p7eirOLoMdE5NV80M.jpg"/>

<div className="project-overlay absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

<div className="view-case-study absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-medium text-sm pointer-events-none scale-95">
                            View case study
                        </div>
</div>
<div className="project-info mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 transition-opacity duration-300 group-hover:opacity-50">
<h3 className="text-2xl font-medium">Olio</h3>
<p className="text-lg text-gray-400 font-normal max-w-md text-right">A premium Framer portfolio template thoughtfully crafted for UX/UI Designers.</p>
</div>
</a>
</div>

<div className="reveal-up project-card group relative w-full mb-32">
<a className="block w-full" href="#">
<div className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[24px]">
<img alt="PromptBox Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/conknpf49hPAVpbVfu0eEPiE4SM.jpeg"/>
<div className="project-overlay absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
<div className="view-case-study absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-medium text-sm pointer-events-none scale-95">
                            View case study
                        </div>
</div>
<div className="project-info mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 transition-opacity duration-300 group-hover:opacity-50">
<h3 className="text-2xl font-medium">PromptBox</h3>
<p className="text-lg text-gray-400 font-normal max-w-md text-right">A creative hub designed for AI Artists, providing a platform to share their AI prompts online.</p>
</div>
</a>
</div>

<div className="reveal-up project-card group relative w-full">
<a className="block w-full" href="#">
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-[24px]">
<img alt="Olio Noir Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/h25SyziLUKTHENOdmXtNMuyOHdM.jpg"/>
<div className="project-overlay absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
<div className="view-case-study absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-medium text-sm pointer-events-none scale-95">
                            View case study
                        </div>
</div>
<div className="project-info mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 transition-opacity duration-300 group-hover:opacity-50">
<h3 className="text-2xl font-medium">Olio Noir</h3>
<p className="text-lg text-gray-400 font-normal max-w-md text-right">A Framer portfolio template thoughtfully crafted for UX/UI Designers looking to make an impression.</p>
</div>
</a>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-32" id="about">
<div className="mb-24 reveal-up">
<h2 className="text-6xl md:text-[88px] font-medium tracking-tighter-custom mb-12">About</h2>
</div>
<div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 reveal-up">
<div className="w-full md:w-1/3">
<h3 className="text-2xl md:text-3xl font-medium leading-tight">Over a decade of experience building thoughtful digital experiences that scale.</h3>
</div>
<div className="w-full md:w-2/3">
<p className="text-xl md:text-xl leading-relaxed text-gray-800 font-normal">
                        My name is Jay, and I’m a Senior Product Designer with over a decade of experience crafting thoughtful, user-centered solutions and leading projects that balance strategy with creativity. With a focus on strategic thinking, I excel at guiding cross-functional teams through product iteration. Based in Charlotte, NC, I’m seeking a new team where I can bring my expertise and drive meaningful impact.
                    </p>
</div>
</div>

<div className="space-y-16 reveal-up">

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-32 border-t border-gray-200 pt-8">
<div className="w-full md:w-1/4">
<span className="text-xl font-medium">2021 – Present</span>
</div>
<div className="w-full md:w-3/4 grid md:grid-cols-2 gap-8">
<div>
<h4 className="text-xl font-medium">Crosby, Senior UX Designer.</h4>
<span className="text-gray-500">Remote</span>
</div>
<p className="text-lg text-gray-800">Leading the design and strategy of Crosby's retail POS tool across mobile and in-store platforms.</p>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-32 border-t border-gray-200 pt-8">
<div className="w-full md:w-1/4">
<span className="text-xl font-medium">2015 – 2021</span>
</div>
<div className="w-full md:w-3/4 grid md:grid-cols-2 gap-8">
<div>
<h4 className="text-xl font-medium">Norman &amp; Co, Lead Product Designer.</h4>
<span className="text-gray-500">Remote</span>
</div>
<p className="text-lg text-gray-800">Led the design and strategy of Norman &amp; Co's core in-car experience, called Scout.</p>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-32 border-t border-gray-200 pt-8">
<div className="w-full md:w-1/4">
<span className="text-xl font-medium">2012 – 2015</span>
</div>
<div className="w-full md:w-3/4 grid md:grid-cols-2 gap-8">
<div>
<h4 className="text-xl font-medium">Gardona, Product Designer.</h4>
<span className="text-gray-500">Remote</span>
</div>
<p className="text-lg text-gray-800">Launched Gardona's e-scooter rental-sharing web app, and built a centralized evolution of design systems.</p>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-32 border-t border-gray-200 pt-8">
<div className="w-full md:w-1/4">
<span className="text-xl font-medium">2009 – 2012</span>
</div>
<div className="w-full md:w-3/4 grid md:grid-cols-2 gap-8">
<div>
<h4 className="text-xl font-medium">Freelance, Product Designer.</h4>
<span className="text-gray-500">Remote</span>
</div>
<p className="text-lg text-gray-800">Partnered with a range of clients to create intuitive and innovative product features, specializing in e-commerce experiences.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full bg-white border-t border-gray-200">
<div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center">
<h2 className="text-5xl md:text-[100px] font-medium tracking-tighter-custom leading-[0.9] text-center mb-16 max-w-4xl reveal-up">
                Let's get to know each other
            </h2>
<button className="group flex items-center gap-3 bg-[#0e0e0e] text-white px-8 py-4 rounded-full hover:scale-105 transition-transform active:scale-95 text-lg font-medium mb-32 reveal-up reveal-delay-1" onclick="copyEmail(this)">
<span className="email-text">J.Brown@email.com</span>
<span className="iconify w-5 h-5 text-white/70" data-icon="lucide:copy"></span>
</button>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-black/80 border-t border-gray-100 pt-8 reveal-up reveal-delay-2">
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">TW</a>
<a className="hover:text-black transition-colors" href="#">IG</a>
<a className="hover:text-black transition-colors" href="#">DR</a>
</div>
<div>
                    lofi framer template – 25©
                </div>
</div>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-40 reveal-up reveal-delay-3">
<a className="flex items-center gap-2 bg-[#009aff] text-white px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 font-semibold text-sm" href="#">
            Purchase for $99
        </a>
</div>



    </>
  );
}
