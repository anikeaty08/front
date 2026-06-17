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



              (function () {
                var root = document.querySelector('[data-element-id="aura-emfwv7mru"]');
                if (!root) return;

                // Collect items to animate in order: heading, subheading, then cards
                var items = [];
                var h2 = root.querySelector('h2');
                if (h2) { h2.setAttribute('data-anim', ''); items.push(h2); }
                var sub = root.querySelector('.mb-6 p');
                if (sub) { sub.setAttribute('data-anim', ''); items.push(sub); }
                root.querySelectorAll('.grid > div').forEach(function (el) {
                  el.setAttribute('data-anim', '');
                  items.push(el);
                });

                function play() {
                  // Reveal container
                  root.style.opacity = '1';
                  root.style.transform = 'none';

                  // Stagger children
                  for (var i = 0; i < items.length; i++) {
                    var el = items[i];
                    var delay = (i * 80) + 'ms';
                    el.style.transition = 'opacity .6s cubic-bezier(0.22, 1, 0.36, 1) ' + delay + ', transform .6s cubic-bezier(0.22, 1, 0.36, 1) ' + delay;
                    // Force reflow to ensure transition applies
                    void el.getBoundingClientRect();
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                  }
                }

                if ('IntersectionObserver' in window) {
                  var io = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                      if (entry.isIntersecting) {
                        play();
                        io.disconnect();
                      }
                    });
                  }, { threshold: 0.2 });
                  io.observe(root);
                } else {
                  play();
                }
              })();
            


    (function () {
      var root = document.querySelector('[data-element-id="aura-emfwvbtw6"]');
      if (!root) return;

      var items = [];
      var h2 = root.querySelector('h2');
      if (h2) { items.push(h2); h2.style.opacity = '0'; h2.style.transform = 'translateY(8px)'; }
      var sub = root.querySelector('.mb-6 p');
      if (sub) { items.push(sub); sub.style.opacity = '0'; sub.style.transform = 'translateY(8px)'; }
      root.querySelectorAll('.grid > div').forEach(function (el) {
        items.push(el);
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
      });

      function play() {
        root.style.opacity = '1';
        root.style.transform = 'none';

        for (var i = 0; i < items.length; i++) {
          var el = items[i];
          var delay = (i * 80) + 'ms';
          el.style.transition = 'opacity .6s cubic-bezier(0.22, 1, 0.36, 1) ' + delay + ', transform .6s cubic-bezier(0.22, 1, 0.36, 1) ' + delay;
          void el.getBoundingClientRect();
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      }

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              play();
              io.disconnect();
            }
          });
        }, { threshold: 0.2 });
        io.observe(root);
      } else {
        play();
      }
    })();
  


          document.getElementById('year').textContent = new Date().getFullYear();
        
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
      <div className="absolute top-0 w-full -z-10 bg-cover bg-center h-[830px]" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?w=3840&amp'}}></div>


<div className="min-h-screen flex flex-col">

<header className="sticky z-40 bg-gray-100/80 border-blue-200 border-b top-0 shadow-md backdrop-blur-sm">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="md:text-base text-sm font-medium text-gray-900 tracking-wide" style={{fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'}}><img alt="Essence Document Services, Inc. logo" className="" src="https://czatmushnwhpwnwazabp.supabase.co/storage/v1/object/sign/media/essence-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iODhmNjczZC0wZjFjLTQ2MTItYjJlZC00Y2FhYTJjYmZmYTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtZWRpYS9lc3NlbmNlLWxvZ28ucG5nIiwiaWF0IjoxNzU4NTg2NzM0LCJleHAiOjE3OTAxMjI3MzR9.5BQOXUMZoj4ceXJr9OWleFBU_fYcZj5EDWYsG4Z0OWI" style={{width: '420px', height: 'auto', display: 'block'}}/></span>
</div>
</div>
<nav className="hidden md:flex items-center gap-7">
<a className="text-sm tracking-wide transition-colors text-gray-700 hover:text-fuchsia-600 font-sans" data-nav="services" href="#services" style={{fontFamily: 'Inter'}}>Services</a>
<a className="text-sm tracking-wide transition-colors text-gray-700 hover:text-fuchsia-600 font-sans" data-nav="about" href="#about" style={{fontFamily: 'Inter'}}>About</a>
<a className="text-sm tracking-wide transition-colors text-gray-700 hover:text-fuchsia-600 font-sans" href="#contact" style={{fontFamily: 'Inter'}}>Contact</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ring-1 transition-colors ring-blue-200 bg-fuchsia-500/20 hover:bg-fuchsia-500/25 text-fuchsia-700 hover:text-fuchsia-800 font-sans" href="tel:+16616755177" style={{fontFamily: 'Inter'}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call
            </a>
<div className="h-5 w-px bg-blue-200/60" style={{}}></div>

<div className="hidden md:flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium ring-1 shadow-md transition-colors bg-gray-200/60 text-gray-900 hover:bg-gray-200 ring-blue-200 hover:text-fuchsia-800 font-sans" href="#contact" style={{fontFamily: 'Inter'}}>
<svg className="lucide lucide-signature h-3.5 w-3.5" data-lucide="signature" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"></path><path d="M3 21h18"></path></svg>
                Request Notary
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium ring-1 shadow-md transition-colors ring-blue-200 bg-fuchsia-500/20 hover:bg-fuchsia-500/25 text-fuchsia-700 hover:text-fuchsia-800 font-sans" href="mailto:agent@54.190.188.137" style={{fontFamily: 'Inter'}}>
<svg className="lucide lucide-mail-open h-3.5 w-3.5" data-lucide="mail-open" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
                Send Documents
              </a>
</div>
</nav>
</div>
</header>

<main className="flex-1">

<section className="relative">
<div className="lg:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-16 pl-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-7">

<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 shadow-md bg-gray-200/60 ring-blue-200" style={{}}>
<svg className="lucide lucide-megaphone h-4 w-4 text-purple-600" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v7L3 21v-8"></path><path d="M11 19a2 2 0 0 1-2 2H7v-4h2a2 2 0 0 1 2 2"></path></svg>
<span className="text-xs tracking-wide text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>For homeowners, small businesses, and legal pros in LA County</span>
</div>

<h1 className="leading-[1.05] text-[2.025rem] md:text-[3.375rem] font-semibold text-gray-950 tracking-tight font-bricolage" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif', backgroundImage: 'radial-gradient(120% 120% at 20% 0%, #030712 0%, #111827 28%, #9333EA 62%, #C084FC 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent'}}>Get court‑ready papers, notarized signatures, and service—without leaving home.</h1>

<p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-bricolage font-semibold" style={{fontFamily: 'Inter'}}>
                  We prepare your forms, send a mobile notary to you, and serve papers with real updates—fast and clear.
                </p>

<div className="grid sm:grid-cols-2 gap-3">
<a className="group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 shadow-md transition-colors ring-blue-200 bg-fuchsia-500/20 hover:bg-fuchsia-500/25 text-fuchsia-700 hover:text-fuchsia-800 font-sans" href="#contact" style={{fontFamily: 'Inter'}}>
<svg className="lucide lucide-signature h-5 w-5" data-lucide="signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 0" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"></path><path d="M3 21h18"></path></svg>
                    Book a mobile notary in 2 minutes
                    <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 shadow-md transition-colors bg-gray-200/60 text-gray-900 hover:bg-gray-200 ring-blue-200 hover:text-fuchsia-800 font-sans" href="#process-serving" style={{fontFamily: 'Inter'}}>
<svg className="lucide lucide-send h-5 w-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    Email your papers — get proof of service
                    <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative">
<div className="bg-fuchsia-500/10 sm:bg-fuchsia-500/5 rounded-xl sm:rounded-2xl absolute top-0 right-0 bottom-0 left-0 blur-xl sm:blur-3xl pointer-events-none hidden sm:block" style={{}}></div>
<div className="relative group" style={{perspective: '1200px'}}>
<figure className="overflow-hidden rounded-2xl ring-1 ring-blue-200 shadow-md bg-gray-50/60">
<img alt="Professional notary and document preparation setup" className="object-center w-full h-auto object-cover" loading="lazy" src="https://images.unsplash.com/photo-1758521541129-ce09da4f1adc?w=1600&amp;q=80" style={{aspectRatio: '4 / 3', objectPosition: 'center center'}}/>
</figure>

</div>

<div className="inline-flex gap-3 text-center bg-gray-200/60 w-max ring-blue-200 ring-1 rounded-full mt-4 pt-1 pr-3 pb-1 pl-3 shadow-md items-center">
<div className="flex -space-x-2">
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&amp;q=80"/>
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&amp;q=80"/>
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-blue-200" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&amp;q=80"/>
</div>
<p className="text-sm font-medium text-gray-900" style={{fontFamily: 'Inter'}}>2k+ Happy Clients</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-blue-200/80" id="problems" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6" data-element-id="aura-emfwv7mru" style={{opacity: '0', transform: 'translateY(12px)', transition: 'opacity .6s cubic-bezier(0.22, 1, 0.36, 1), transform .6s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'opacity, transform'}}>
<div className="mb-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif', opacity: '0', transform: 'translateY(6px)', willChange: 'opacity, transform'}}>Problems we solve</h2>
<p className="mt-2 text-sm md:text-base text-gray-700 font-sans" style={{fontFamily: 'Inter', opacity: '0', transform: 'translateY(6px)', willChange: 'opacity, transform'}}>Common roadblocks—and how we fix them.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{opacity: '0', transform: 'translateY(8px)', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-files h-5 w-5 text-purple-600" data-lucide="files" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v14"></path><rect height="16" rx="2" width="13" x="8" y="6"></rect></svg>
<div className="">
<p className="text-base font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Confusing forms</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Not sure which form or version? We prepare the right paperwork so you avoid mistakes.</p>
</div>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{opacity: '0', transform: 'translateY(8px)', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-alarm-clock h-5 w-5 text-purple-600" data-lucide="alarm-clock" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path></svg>
<div className="">
<p className="text-base font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Tight deadlines</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Fast turnarounds and clear updates keep things moving.</p>
</div>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{opacity: '0', transform: 'translateY(8px)', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-car h-5 w-5 text-purple-600" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17H5l-2 3h18z"></path><path d="M4 13l3-5h10l3 5"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
<div>
<p className="text-base font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Travel headaches</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Our mobile notary comes to you—home, office, hospital, even escrow.</p>
</div>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{opacity: '0', transform: 'translateY(8px)', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-route h-5 w-5 text-purple-600" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7H14"></path><circle cx="18" cy="5" r="3"></circle></svg>
<div>
<p className="text-base font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Unreliable service attempts</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We document every attempt and give you proof of service you can file.</p>
</div>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{opacity: '0', transform: 'translateY(8px)', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-shield-alert h-5 w-5 text-purple-600" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-3 8-10V6l-8-4-8 4v6c0 7 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
<div>
<p className="text-base font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Compliance worry</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We follow California rules and keep detailed records.</p>
</div>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{opacity: '0', transform: 'translateY(8px)', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-help-circle h-5 w-5 text-purple-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"></path><path d="M12 17h.01"></path></svg>
<div>
<p className="text-base font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Not sure where to start</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We explain the next steps in plain language and get you moving today.</p>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="border-t border-blue-200/80" id="solutions" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6" data-element-id="aura-emfwvas0g">
<div className="md:p-8 ring-1 ring-blue-300/40 bg-gray-900 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-50 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>One team. Three services. Zero friction.</h2>
<p className="text-base text-gray-300 font-sans" style={{fontFamily: 'Inter'}}>
                    We handle document prep, mobile notary, and process serving. No need to juggle three companies.
                  </p>
<ul className="space-y-2 text-sm text-gray-300" style={{fontFamily: 'Inter'}}>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-300/40 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Guided prep and filing (within LDA scope)</li>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-300/40 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Mobile notarization wherever you are</li>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-300/40 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Service of process with full proof</li>
</ul>
<div className="">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ring-1 shadow-md transition-colors ring-blue-300/40 bg-fuchsia-500/20 hover:bg-fuchsia-500/25 text-fuchsia-200 hover:text-fuchsia-100 font-sans" href="#contact" style={{fontFamily: 'Inter'}}>
<svg className="lucide h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 7c-1.1 1.1-2 3-2 5 0 0 2-1 4-1s3 1 3 1c0-2-1-3-1-3 0-2 1.9-2.9 3-4 1.5-1.5 4-3 8-3 0 4-1.5 6.5-3 8-1.1 1.1-2 3-4 3 0 0-1-1-1-3s1-4 1-4c-2 0-3 1-3 1s-1-1-3-1-3 1-4 2z"></path><path d="M3 21s1-4 4-7 7-4 7-4"></path><path d="M16 16l5 5"></path></svg>
                      Start now — get your next step in minutes
                    </a>
</div>
</div>
<div className="ring-1 rounded-xl p-5 shadow-md bg-gray-800/60 ring-blue-300/30" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide h-6 w-6 text-purple-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.74 2.1 8.46 4.23a1 1 0 0 1 0 1.8l-8.46 4.23a2 2 0 0 1-1.74 0L2.54 8.13a1 1 0 0 1 0-1.8L11 2.1a2 2 0 0 1 1.74 0Z"></path><path d="m22 13-9.26 4.63a2 2 0 0 1-1.74 0L2 13"></path><path d="m22 18-9.26 4.63a2 2 0 0 1-1.74 0L2 18"></path></svg>
<div className="">
<p className="text-base font-semibold tracking-tight text-gray-50 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Seamless handoffs</p>
<p className="text-sm text-gray-300 font-sans" style={{fontFamily: 'Inter'}}>From prep to notarize to serve—your details stay with one team.</p>
</div>
</div>
<hr className="my-4 border-blue-300/20" style={{}}/>
<div className="flex items-center gap-3">
<svg className="lucide h-6 w-6 text-purple-400" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17l2 2 4-4"></path><rect height="4" rx="1" width="8" x="8" y="2"></rect><path d="M9 12h6"></path><rect height="18" rx="2" width="16" x="4" y="4"></rect></svg>
<div className="">
<p className="text-base font-semibold tracking-tight text-gray-50 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Clear results</p>
<p className="text-sm text-gray-300 font-sans" style={{fontFamily: 'Inter'}}>You get checklists, timelines, and proof you can file.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-blue-200/80" id="benefits" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6" data-element-id="aura-emfwvbtw6" style={{opacity: '0', transform: 'translateY(12px)', transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'opacity, transform'}}>
<div className="mb-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Benefits you can count on</h2>
<p className="mt-2 text-sm md:text-base text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Why people choose us—and what you get.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-signature h-5 w-5 text-purple-600" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>
<h4 className="text-lg tracking-tight font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Documents We Handle</h4>
</div>
<ul className="text-sm text-gray-700 mt-3 space-y-2" style={{fontFamily: 'Inter'}}><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Real Estate, Loan Signings</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Powers of Attorney, Advance Healthcare Directives</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Affidavits, Jurats, Acknowledgments</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Family Law (within LDA scope): Divorce, Custody, Support</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Small Claims, Name Change</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Evictions (UD) &amp; Proofs of Service</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Business Filings: LLC/Corp, Statements of Information</li><li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Apostille Facilitation</li></ul>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-timer h-5 w-5 text-purple-600" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<h4 className="text-lg tracking-tight font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Fast turnarounds &amp; tracking</h4>
</div>
<ul className="mt-3 space-y-2 text-sm text-gray-700" style={{fontFamily: 'Inter'}}>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-4 w-4 rounded-full bg-purple-500/20 ring-1 ring-blue-200" style={{}}></span> Same‑day and after‑hours notary</li>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-4 w-4 rounded-full bg-purple-500/20 ring-1 ring-blue-200" style={{}}></span> Real‑time updates on service attempts</li>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-4 w-4 rounded-full bg-purple-500/20 ring-1 ring-blue-200" style={{}}></span> Digital copies and receipts sent to your inbox</li>
</ul>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-badge-dollar-sign h-5 w-5 text-purple-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 11a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 0 0 4h6"></path><path d="M12 17V7"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
<h4 className="text-lg tracking-tight font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Transparent, fair pricing</h4>
</div>
<ul className="mt-3 space-y-2 text-sm text-gray-700" style={{fontFamily: 'Inter'}}>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-4 w-4 rounded-full bg-purple-500/20 ring-1 ring-blue-200" style={{}}></span> Upfront quotes before we start</li>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-4 w-4 rounded-full bg-purple-500/20 ring-1 ring-blue-200" style={{}}></span> No surprise add‑ons—itemized invoices</li>
<li className="flex items-center gap-2 font-sans"><span className="inline-flex h-4 w-4 rounded-full bg-purple-500/20 ring-1 ring-blue-200" style={{}}></span> Pay by card or ACH, with a receipt</li>
</ul>
</div>
</div>

</div>
</section>

<section className="border-t border-blue-200/80" id="testimonials" style={{}}>
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="mb-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Trusted across LA County</h2>
<p className="mt-2 text-sm md:text-base text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Real words from homeowners, small businesses, and law offices.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<figure className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full ring-1 flex items-center justify-center font-semibold ring-blue-200 bg-fuchsia-500/10 text-fuchsia-700 font-sans" style={{}}>AM</div>
<div className="flex-1">
<figcaption className="text-sm font-medium text-gray-900 font-sans" style={{fontFamily: 'Inter'}}>Ana M.</figcaption>
<div aria-label="5 out of 5 stars" className="flex items-center gap-0.5 text-amber-500" style={{}}>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
</div>
<blockquote className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Carla made it easy. She prepared my forms and sent a notary to my house the same day. I got updates until the proof of service came in.</blockquote>
</figure>
<figure className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full ring-1 flex items-center justify-center font-semibold ring-blue-200 bg-fuchsia-500/10 text-fuchsia-700 font-sans" style={{}}>JL</div>
<div className="flex-1">
<figcaption className="text-sm font-medium text-gray-900 font-sans" style={{fontFamily: 'Inter'}}>James L.</figcaption>
<div aria-label="5 out of 5 stars" className="flex items-center gap-0.5 text-amber-500" style={{}}>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
</div>
<blockquote className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Professional and quick. We used EDS for loan signings—on time, careful, and great with clients.</blockquote>
</figure>
<figure className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full ring-1 flex items-center justify-center font-semibold ring-blue-200 bg-fuchsia-500/10 text-fuchsia-700 font-sans" style={{}}>SR</div>
<div className="flex-1">
<figcaption className="text-sm font-medium text-gray-900 font-sans" style={{fontFamily: 'Inter'}}>Sara R.</figcaption>
<div aria-label="5 out of 5 stars" className="flex items-center gap-0.5 text-amber-500" style={{}}>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 fill-amber-400" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
</div>
<blockquote className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>They explained each step, came to the hospital to notarize, and filed on time. Highly recommend.</blockquote>
</figure>
</div>
</div>
</section>

<section className="border-t border-blue-200/80" id="steps" style={{}}>
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="mb-6 flex items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>3 simple steps</h2>
<p className="mt-2 text-sm md:text-base text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>From request to results—fast and documented.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ring-1 shadow-md transition-colors ring-blue-200 bg-fuchsia-500/20 hover:bg-fuchsia-500/25 text-fuchsia-700 hover:text-fuchsia-800 font-sans" href="#contact" style={{fontFamily: 'Inter'}}>
                Get started
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<ol className="grid md:grid-cols-3 gap-6">
<li className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 ring-1 font-semibold ring-blue-200 text-purple-700 font-sans" style={{}}>1</span>
<div className="">
<p className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Tell us what you need</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Email or call with your goal and papers. We confirm scope, price, and timeline.</p>
</div>
</div>
</li>
<li className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 ring-1 font-semibold ring-blue-200 text-purple-700 font-sans" style={{}}>2</span>
<div className="">
<p className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>We prep, notarize, or serve</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We prepare your documents, send a mobile notary, or start service attempts.</p>
</div>
</div>
</li>
<li className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 ring-1 font-semibold ring-blue-200 text-purple-700 font-sans" style={{}}>3</span>
<div>
<p className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Get court‑ready results</p>
<p className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>You get digital copies, proof, and clear next steps for filing.</p>
</div>
</div>
</li>
</ol>
</div>
</section>

<section className="border-t border-blue-200/80" id="reasons" style={{}}>
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="mb-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>10 reasons people choose us</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">
<ul className="space-y-3 text-sm text-gray-800" style={{fontFamily: 'Inter'}}>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Registered LDA within California scope</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Mobile notary—home, office, hospital, escrow</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Diligent, documented process serving</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Clear timelines and status updates</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Same‑day appointments when available</li>
</ul>
<ul className="space-y-3 text-sm text-gray-800" style={{fontFamily: 'Inter'}}>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Court‑ready results you can file</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Bilingual support (English/Spanish)</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Convenient digital copies and e‑receipts</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Insured and bonded where required</li>
<li className="flex items-start gap-2 font-sans"><span className="inline-flex h-5 w-5 items-center justify-center rounded ring-1 ring-blue-200 bg-fuchsia-500/10" style={{}}><svg className="lucide h-3.5 w-3.5 text-purple-600" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span> Friendly, responsive communication</li>
</ul>
</div>
</div>
</section>

<section className="border-t border-blue-200/80" id="features" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="mb-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Everything you need—handled</h2>
<p className="mt-2 text-sm md:text-base text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>All-in-one help for smoother matters and fewer trips.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="ring-1 ring-blue-200 bg-gray-100/70 rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-md" id="process-serving">
<div className="flex items-center gap-3">
<svg className="lucide h-5 w-5 text-purple-600" data-lucide="route" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7H14"></path><circle cx="18" cy="5" r="3"></circle></svg>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Process Serving</h3>
</div>
<p className="mt-2 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Standard or rush attempts, substituted service where allowed, and ready‑to‑file proof.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Photos &amp; notes</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Skip tracing (on request)</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>e‑Proofs</span>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide h-5 w-5 text-purple-600" data-lucide="stamp" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"></path><path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"></path><path d="M5 22h14"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Mobile Notary</h3>
</div>
<p className="mt-2 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We handle acknowledgments, jurats, loan packages, and healthcare directives—at your location.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Evenings &amp; weekends</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Witness coordination</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Hospital &amp; care visits</span>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide h-5 w-5 text-purple-600" data-lucide="file-text" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>LDA Preparation</h3>
</div>
<p className="mt-2 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We complete, assemble, and file documents within LDA scope.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Checklists</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Court formatting</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Filing support</span>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide h-5 w-5 text-purple-600" data-lucide="map-pin" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Service Area</h3>
</div>
<p className="mt-2 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Los Angeles County and nearby cities. Travel fees depend on distance and urgency.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Local expertise</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Rush options</span>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide h-5 w-5 text-purple-600" data-lucide="lock" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Security &amp; Compliance</h3>
</div>
<p className="mt-2 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We check ID, protect your data, and follow California rules.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>ID verification</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Records retained</span>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide h-5 w-5 text-purple-600" data-lucide="languages" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2v3"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Friendly, bilingual help</h3>
</div>
<p className="mt-2 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>English and Spanish—clear communication at every step.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Plain‑language updates</span>
<span className="text-xs px-2 py-1 rounded ring-1 ring-blue-200 bg-gray-200/60 text-gray-800 font-sans" style={{fontFamily: 'Inter'}}>Patient &amp; courteous</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-blue-200/80 border-t" id="faqs">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="mb-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Frequently asked questions</h2>
<p className="mt-2 text-sm md:text-base text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Don’t see your question? Call or email—we’re happy to help.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<details className="group rounded-xl ring-1 shadow-md p-5 open:shadow-lg bg-gray-100/70 ring-blue-200" style={{}}>
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-base font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>What IDs are accepted for notarization?</span>
<svg className="h-5 w-5 transition-transform group-open:rotate-180 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Valid government photo ID, like a CA driver’s license, passport, or military ID. It must be current or within California’s allowed window.</p>
</details>
<details className="group rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-base font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Do you offer Remote Online Notarization (RON)?</span>
<svg className="h-5 w-5 transition-transform group-open:rotate-180 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>California notaries can’t do RON right now. We do in‑person notarization and can help with witnesses.</p>
</details>
<details className="group rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-base font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>How many process‑serve attempts are included?</span>
<svg className="h-5 w-5 transition-transform group-open:rotate-180 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>It depends on the package. Standard service includes multiple attempts at different times and days, with notes and photos when helpful.</p>
</details>
<details className="group rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-base font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>What’s the turnaround for document preparation?</span>
<svg className="h-5 w-5 transition-transform group-open:rotate-180 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Many projects finish in 24–72 hours after we get your info. Rush options may be available.</p>
</details>
<details className="group bg-gray-100/70 ring-blue-200 ring-1 rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-md" style={{}}>
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-base font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Do you give legal advice?</span>
<svg className="h-5 w-5 transition-transform group-open:rotate-180 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>We are not attorneys and cannot give legal advice. As LDAs, we prepare and file documents at your direction and provide self‑help services only.</p>
</details>
<details className="group rounded-xl ring-1 shadow-md p-5 bg-gray-100/70 ring-blue-200" style={{}}>
<summary className="flex cursor-pointer items-center justify-between gap-3">
<span className="text-base font-semibold text-gray-900 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>How do I get a quote?</span>
<svg className="h-5 w-5 transition-transform group-open:rotate-180 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>Email your papers to agent@54.190.188.137 or call +1 (661) 675‑5177. We’ll confirm scope, timing, and price before we begin.</p>
</details>
</div>
</div>
</section>

<section className="border-blue-200/80 border-t" id="contact">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="md:p-8 bg-gray-900 ring-blue-300/40 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md" style={{}}>
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl md:text-4xl tracking-tight text-gray-50 font-bricolage font-semibold" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Ready to get this done?</h2>
<p className="mt-2 text-sm md:text-base text-gray-300 font-sans" style={{fontFamily: 'Inter'}}>Email your papers or call for a quick quote. We’ll share your next step in minutes.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-3">
<a className="group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 shadow-md transition-colors ring-blue-300/40 bg-fuchsia-500/20 hover:bg-fuchsia-500/25 text-fuchsia-200 hover:text-fuchsia-100 font-sans" href="mailto:agent@54.190.188.137" style={{fontFamily: 'Inter'}}>
<svg className="lucide h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                      Email documents — agent@54.190.188.137
                    </a>
<a className="group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 shadow-md transition-colors bg-gray-800/60 text-gray-50 hover:bg-gray-800 ring-blue-300/40 hover:text-fuchsia-200 font-sans" href="tel:+16616755177" style={{fontFamily: 'Inter'}}>
<svg className="lucide h-5 w-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                      Call +1 (661) 675‑5177
                    </a>
</div>
</div>
<div className="rounded-xl ring-1 shadow-md p-5 bg-gray-800/60 ring-blue-300/30" style={{}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md ring-1 flex items-center justify-center ring-blue-300/30 bg-fuchsia-500/10" style={{}}>
<svg className="lucide h-5 w-5 text-purple-400" data-lucide="calendar-clock" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M21 10H3"></path><path d="M16 17.5 18 19"></path><path d="M16 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"></path></svg>
</div>
<div className="">
<p className="text-base font-semibold tracking-tight text-gray-50 font-sans" style={{fontFamily: 'BioRhyme, Georgia, "Times New Roman", serif'}}>Need it fast?</p>
<p className="text-sm text-gray-300 font-sans" style={{fontFamily: 'Inter'}}>Ask about same‑day notary and rush service of process.</p>
</div>
</div>
<hr className="my-4 border-blue-300/20" style={{}}/>
<ul className="space-y-2 text-sm text-gray-300" style={{fontFamily: 'Inter'}}>
<li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-400" data-lucide="map" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18 2 22V6l7-4 6 4 7-4v16l-7 4-6-4Z"></path><path d="M9 18V2"></path><path d="M15 22V6"></path></svg> LA County and nearby</li>
<li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-400" data-lucide="clock" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> Evenings &amp; weekends available</li>
<li className="flex items-center gap-2 font-sans"><svg className="lucide h-4 w-4 text-purple-400" data-lucide="shield-check" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-3 8-10V6l-8-4-8 4v6c0 7 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg> Insured &amp; bonded where required</li>
</ul>
</div>
</div>
<p className="mt-6 text-xs text-gray-400 font-sans" style={{fontFamily: 'Inter'}}>Disclaimer: We are not attorneys. We cannot provide legal advice or represent you in court. Services are provided as self‑help assistance within the scope of a registered LDA and California Notary Public.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-blue-200/80" style={{}}>
<div className="mx-auto max-w-7xl px-6 py-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 flex items-center justify-center shadow-md ring-blue-200 bg-fuchsia-500/10" style={{}}>
<span className="text-lg font-semibold tracking-tight text-fuchsia-600 font-sans" style={{fontFamily: 'Inter, system-ui'}}>EDS</span>
</div>
<div className="text-sm text-gray-700 font-sans" style={{fontFamily: 'Inter'}}>
                © <span className="font-sans" id="year">2025</span> Essence Document Services, Inc. All rights reserved.
              </div>
</div>
<nav className="flex items-center gap-4 text-sm" style={{fontFamily: '\'Inter\''}}>
<a className="transition-colors text-gray-700 hover:text-fuchsia-700 font-sans" href="#problems" style={{}}>Problems</a>
<a className="transition-colors text-gray-700 hover:text-fuchsia-700 font-sans" href="#solutions" style={{}}>Solutions</a>
<a className="transition-colors text-gray-700 hover:text-fuchsia-700 font-sans" href="#benefits" style={{}}>Benefits</a>
<a className="transition-colors text-gray-700 hover:text-fuchsia-700 font-sans" href="#features" style={{}}>Features</a>
<a className="transition-colors text-gray-700 hover:text-fuchsia-700 font-sans" href="#faqs" style={{}}>FAQs</a>
</nav>
</div>
</div>

</footer>
</div>

    </>
  );
}
