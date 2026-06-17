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



      lucide.createIcons();
    


      const langBtn = document.getElementById('lang-toggle');
      const langText = document.getElementById('lang-text');
      let currentLang = 'no';

      function toggleLanguage() {
        currentLang = currentLang === 'no' ? 'en' : 'no';
        langText.textContent = currentLang.toUpperCase();

        document.querySelectorAll('[data-en]').forEach(el => {
          if (!el.hasAttribute('data-no')) {
            el.setAttribute('data-no', el.innerHTML);
          }
          el.innerHTML = el.getAttribute(`data-${currentLang}`);
        });

        document.querySelectorAll('[data-en-placeholder]').forEach(el => {
          if (!el.hasAttribute('data-no-placeholder')) {
            el.setAttribute('data-no-placeholder', el.getAttribute('placeholder'));
          }
          el.setAttribute('placeholder', el.getAttribute(`data-${currentLang}-placeholder`));
        });
        if(window.lucide) lucide.createIcons();
      }

      if(langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
      }
    


      function toggleCategory(id) {
        const el = document.getElementById(id);
        const icon = document.getElementById('icon-' + id);
        if (el.classList.contains('hidden')) {
          el.classList.remove('hidden');
          if(icon) icon.style.transform = 'rotate(180deg)';
        } else {
          el.classList.add('hidden');
          if(icon) icon.style.transform = 'rotate(0deg)';
        }
      }
    


      (function() {
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -80px 0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const animation = el.dataset.animation;

              if (animation) {
                el.classList.add('animate-' + animation);
              }

              if (el.classList.contains('stagger-children')) {
                el.classList.add('is-visible');
              }

              observer.unobserve(el);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate, .stagger-children').forEach(el => {
          observer.observe(el);
        });

        // Parallax effect for decorative elements
        let ticking = false;
        const parallaxElements = document.querySelectorAll('.parallax-slow');

        if (parallaxElements.length > 0) {
          window.addEventListener('scroll', () => {
            if (!ticking) {
              window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                parallaxElements.forEach(el => {
                  const speed = parseFloat(el.dataset.speed) || 0.1;
                  const rect = el.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.style.transform = `translateY(${scrollY * speed}px)`;
                  }
                });
                ticking = false;
              });
              ticking = true;
            }
          });
        }

        // Hero animation on load
        setTimeout(() => {
          const heroContent = document.querySelector('header > div.relative');
          if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.classList.add('animate-blurIn');
          }
        }, 100);
      })();
    
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
      

<nav className="absolute md:fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#1C1917]/80 backdrop-blur-md transition-all duration-300 safe-area-inset-top">
<div className="md:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<svg className="lucide lucide-utensils-crossed text-amber-500/80 w-5 h-5 transition-transform group-hover:rotate-45" data-lucide="utensils-crossed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path>
<path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path>
<path d="m2.1 21.8 6.4-6.3"></path>
<path d="m19 5-7 7"></path>
</svg>
<span className="text-xl tracking-tight font-medium text-white">
            RESTAURANT
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-white transition-colors" data-en="Locations" href="#locations">
            Locations
          </a>
<a className="hover:text-white transition-colors" data-en="Menu" href="#menu">
            Menu
          </a>
<a className="hover:text-white transition-colors" data-en="Our Kitchen" href="#kitchen">
            Our Kitchen
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hover:bg-[#8f2823]/20 uppercase transition-all hover:scale-105 text-xs font-medium text-[#e06c66] tracking-wide bg-[#8f2823]/10 border-[#8f2823]/30 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" data-en="Call us" href="tel:+1234567890" rel="noopener noreferrer">
            Call us
          </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center md:justify-start overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Victoria Restaurant Ambiance" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f010911a-ac08-4d66-aa77-e218f8b9d632_1600w.jpg"/>
<div className="bg-gradient-to-b from-[#1C1917]/40 via-[#1C1917]/20 to-[#1C1917] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center md:text-left max-w-4xl px-6 md:ml-20 lg:ml-32 pt-24 scroll-animate" data-animation="blurIn" style={{opacity: '1'}}>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95] mb-6" data-en="Welcome to &lt;br /&gt;&lt;span className='serif-font italic font-normal text-[#e06c66]'&gt;Restaurant&lt;/span&gt;">
          Welcome to
          <br/>
<span className="serif-font italic font-normal text-[#e06c66]">
            Restaurant
          </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-stone-200 max-w-2xl mb-10 md:mr-auto" data-en="Ready for an extraordinary taste experience? Take a look at our varied selection of dishes made with love and the best ingredients.">
          Ready for an extraordinary taste experience? Take a look at our varied
          selection of dishes made with love and the best ingredients.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
<a className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all min-w-[160px] inline-flex items-center justify-center" data-en="View Menu" href="#menu">
            View Menu
          </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"></div>
</header>

<section className="py-24 bg-[#292524] relative overflow-hidden" id="locations">

<div className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full blur-[120px] opacity-20 parallax-slow" data-speed="-0.05"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="scroll-animate" data-animation="fadeInLeft">
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight mb-4" data-en="Our Locations">
              Our Locations
            </h2>
<p className="text-lg text-stone-400 max-w-md font-light" data-en="One menu, two homes. Whether you're in the heart of downtown or exploring the waterfront district, we're ready to serve you.">
              One menu, two homes. Whether you're in the heart of downtown or
              exploring the waterfront district, we're ready to serve you.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-[#1C1917] rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 scroll-animate" data-animation="fadeInUp">
<div className="h-[350px] overflow-hidden relative">
<img alt="Verdal Location" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/481a76d2-7121-4ea9-b0c7-e08fa1dedae7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 right-6 px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium flex items-center gap-1" data-en='&lt;svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="map-pin" className="lucide lucide-map-pin w-3 h-3"&gt;&lt;path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"&gt;&lt;/path&gt;&lt;circle cx="12" cy="10" r="3"&gt;&lt;/circle&gt;&lt;/svg&gt; Vinne 51'>
<svg className="lucide lucide-map-pin w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                Address 1
              </div>
</div>
<div className="p-8 relative -mt-20">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
                Location One
              </h3>
<p className="text-stone-400 mb-6 font-light leading-relaxed" data-en="Conveniently located in the vibrant downtown district. A perfect destination for travelers and locals alike, offering a spacious and warm environment.">
                Conveniently located in the vibrant downtown district. A perfect
                destination for travelers and locals alike, offering a spacious
                and warm environment.
              </p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex flex-col gap-1">
<span className="text-xs text-stone-500 uppercase tracking-wider" data-en="Open Hours">
                    Open Hours
                  </span>
<span className="text-sm text-stone-300" data-en="Mon - Sat: 10:00 – 22:00&lt;br&gt;Sunday: 13:00 – 22:00">
                    Mon - Sat: 10:00 – 22:00 Sunday: 13:00 – 22:00
                  </span>
</div>
<a className="text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1" data-en='Call Victoria Verdal &lt;svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-up-right" className="lucide lucide-arrow-up-right w-4 h-4"&gt;&lt;path d="M7 7h10v10"&gt;&lt;/path&gt;&lt;path d="M7 17 17 7"&gt;&lt;/path&gt;&lt;/svg&gt;' href="tel:+1234567890" rel="noopener noreferrer">
                  Call Location One
                  <svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="group relative bg-[#1C1917] rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:shadow-2xl hover:border-[#e06c66]/30 hover:shadow-[#8f2823]/20 scroll-animate delay-200" data-animation="fadeInUp">
<div className="h-[350px] overflow-hidden relative">
<img alt="Levanger Location" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b0ec608-db26-4848-8104-7767aa27a5bd_1600w.jpg" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 right-6 px-3 py-1 bg-[#8f2823]/30 backdrop-blur-md border border-[#e06c66]/30 rounded-full text-[#ffdedb] text-xs font-medium flex items-center gap-1" data-en='&lt;svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="building-2" className="lucide lucide-building-2 w-3 h-3"&gt;&lt;path d="M10 12h4"&gt;&lt;/path&gt;&lt;path d="M10 8h4"&gt;&lt;/path&gt;&lt;path d="M14 21v-3a2 2 0 0 0-4 0v3"&gt;&lt;/path&gt;&lt;path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"&gt;&lt;/path&gt;&lt;path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"&gt;&lt;/path&gt;&lt;/svg&gt; Sjøgata 17'>
<svg className="lucide lucide-building-2 w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
                Address 2
              </div>
</div>
<div className="p-8 relative -mt-20">
<h3 className="text-3xl font-medium text-white mb-0 tracking-tight">
                Location Two
              </h3>
<p className="text-stone-400 mb-6 font-light leading-relaxed" data-en="Nestled in the scenic waterfront area. Enjoy an intimate dining experience with urban charm and our signature cozy lighting.">
                Nestled in the scenic waterfront area. Enjoy an intimate dining
                experience with urban charm and our signature cozy lighting.
              </p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex flex-col gap-1">
<span className="text-xs text-stone-500 uppercase tracking-wider" data-en="Open Hours">
                    Open Hours
                  </span>
<span className="text-sm text-stone-300" data-en="Mon - Sun: 14:00 – 22:00">
                    Mon - Sun: 14:00 – 22:00
                  </span>
</div>
<a className="text-sm font-medium transition-colors flex items-center gap-1 text-[#e06c66] hover:text-[#ff8a85]" data-en='Call Victoria Sjøsiden &lt;svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-up-right" className="lucide lucide-arrow-up-right w-4 h-4"&gt;&lt;path d="M7 7h10v10"&gt;&lt;/path&gt;&lt;path d="M7 17 17 7"&gt;&lt;/path&gt;&lt;/svg&gt;' href="tel:+1234567891" rel="noopener noreferrer">
                  Call Location Two
                  <svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#2C241B] pt-32 pb-32 relative" id="menu">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none bg-[#8f2823]/15 parallax-slow" data-speed="0.08"></div>
<div className="md:px-12 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-20 scroll-animate" data-animation="blurIn">
<span className="text-sm font-medium uppercase tracking-[0.2em] mb-4 block text-[#e06c66]/90" data-en="Highlights">
            Highlights
          </span>
<h2 className="text-4xl md:text-6xl text-[#E6DCCF] font-medium tracking-tight mb-6" data-en="Explore our menu">
            Explore our menu
          </h2>
<p className="text-xl text-[#E6DCCF]/60 max-w-2xl mx-auto font-light" data-en="From juicy steaks to fresh salads and tasty pastas - we have something for everyone! Come by and enjoy an unforgettable dining experience with us! 🍴✨">
            From juicy steaks to fresh salads and tasty pastas - we have
            something for everyone! Come by and enjoy an unforgettable dining
            experience with us! 🍴✨
          </p>
</div>

<div className="max-w-3xl mx-auto space-y-4 stagger-children">

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-burger')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors">
                Burger
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-burger" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" data-lang="en" id="cat-burger">
<ul className="space-y-6 pt-4">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Brothers burger &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Brothers Burger
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with Trønder salad, cheddar and chips">
                    200g beef burger with Trønder salad, cheddar and fries
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Chicken burger &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Chicken Burger
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="150g chicken fillet with Trønder salad and sweet potato">
                    150g chicken fillet with Trønder salad and sweet potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Crispy chicken &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Crispy Chicken
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="150g crispy breaded chicken with Trønder salad and sweet potato">
                    150g crispy breaded chicken with Trønder salad and sweet
                    potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Victoria &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Victoria
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $25
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with cheddar, Trønder salad, onion rings, bacon and chips">
                    200g beef burger with cheddar, Trønder salad, onion rings,
                    bacon and fries
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Hot BBQ burger &lt;span className="text-xs uppercase font-bold tracking-wider ml-1 text-[#e06c66]"&gt;HOT&lt;/span&gt; &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Hot BBQ Burger
                      <span className="text-xs uppercase font-bold tracking-wider ml-1 text-[#e06c66]">
                        HOT
                      </span>
<span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $25
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with cheddar cheese, bacon, onion rings and chips">
                    200g beef burger with cheddar cheese, bacon, onion rings and
                    fries
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Blue cheese &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7-8)&lt;/span&gt;'>
                      Blue Cheese
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $28
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with blue cheese, cheddar, salad, walnuts, onion rings and sweet potato">
                    200g beef burger with blue cheese, cheddar, salad, walnuts,
                    onion rings and sweet potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Halloumi &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7-8)&lt;/span&gt;'>
                      Halloumi
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $28
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with cheddar, grilled halloumi, fried mushrooms, pomegranate salad, onion rings, mozzarella sticks and sweet potato">
                    200g beef burger with cheddar, grilled halloumi, fried
                    mushrooms, pomegranate salad, onion rings, mozzarella sticks
                    and sweet potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Satan burger &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Satan Burger
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $30
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with cheddar, bacon, mozzarella sticks, onion rings, pomegranate salad, pickles, sweet potato and chips with chipotle sauce">
                    200g beef burger with cheddar, bacon, mozzarella sticks,
                    onion rings, pomegranate salad, pickles, sweet potato and
                    fries with chipotle sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Ex burger &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Ex Burger
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $36
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="250g Beef burger with bacon, cheddar, chicken wings, mushrooms, crispy chips, corn on the cob, onion rings, salad and sweet potato">
                    250g beef burger with bacon, cheddar, chicken wings,
                    mushrooms, crispy fries, corn on the cob, onion rings, salad
                    and sweet potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Wood &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Wood
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $40
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="200g Beef burger with 70g fresh tenderloin fried in Røros butter, bacon, cheddar, fried mushrooms, corn on the cob, salad, pepper sauce, onion rings and sweet potato">
                    200g beef burger with 70g fresh tenderloin fried in Røros
                    butter, bacon, cheddar, fried mushrooms, corn on the cob,
                    salad, pepper sauce, onion rings and sweet potato
                  </p>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-meat')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Meat">
                Meat
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-meat" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-meat">
<p className="text-stone-500 italic text-sm mb-6 pt-4" data-en="All steaks are 260g. Fresh tenderloin is served with baked potato, french fries or cream-gratin potatoes.">
                All steaks are 260g. Fresh tenderloin is served with baked
                potato, french fries or cream-gratin potatoes.
              </p>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Minute steak &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(3)&lt;/span&gt;'>
                      Minute Steak
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (3)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Trønder salad, chips and béarnaise sauce">
                    Trønder salad, fries and béarnaise sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Beef sauté &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(3)&lt;/span&gt;'>
                      Beef Sauté
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (3)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $29
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Sliced tenderloin, chips, onion, mushroom, bell pepper, salad, béarnaise sauce">
                    Sliced tenderloin, fries, onion, mushroom, bell pepper,
                    salad, béarnaise sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Spareribs &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(6-7)&lt;/span&gt;'>
                      Spareribs
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (6-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $31
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Corn, salad, barbecue sauce, chips">
                    Corn, salad, barbecue sauce, fries
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Mixed sauté &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(3)&lt;/span&gt;'>
                      Mixed Sauté
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (3)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $30
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Sliced tenderloin, chicken fillet, salad, mushroom, onion, bell pepper, chips and béarnaise sauce">
                    Sliced tenderloin, chicken fillet, salad, mushroom, onion,
                    bell pepper, fries and béarnaise sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Pepper steak &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(7-8)&lt;/span&gt;'>
                      Pepper Steak
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $40
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin, pepper sauce, vegetables">
                    Tenderloin, pepper sauce, vegetables
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Gorgonzola &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(7-8)&lt;/span&gt;'>
                      Gorgonzola
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $40
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin with vegetables and gorgonzola sauce">
                    Tenderloin with vegetables and gorgonzola sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Victoria steak &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(2-7)&lt;/span&gt;'>
                      Victoria Steak
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (2-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $43
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin, king prawns, cream sauce with bell pepper, onion, mushroom and vegetables">
                    Tenderloin, king prawns, cream sauce with bell pepper,
                    onion, mushroom and vegetables
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Greek steak &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(7-8)&lt;/span&gt;'>
                      Greek Steak
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $42
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin, fried tomato, onion, cured ham, feta cheese, vegetables and garlic sauce">
                    Tenderloin, fried tomato, onion, cured ham, feta cheese,
                    vegetables and garlic sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='House special &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(7-8)&lt;/span&gt;'>
                      House Special
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $43
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin, vegetables, mushroom sauce and pepper sauce">
                    Tenderloin, vegetables, mushroom sauce and pepper sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='La casa steak &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(7-8)&lt;/span&gt;'>
                      La Casa Steak
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $44
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin, cured ham with cheese, vegetables and red wine sauce">
                    Tenderloin, cured ham with cheese, vegetables and red wine
                    sauce
                  </p>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-pizza')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Pizza">
                Pizza
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-pizza" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-pizza">
<p className="text-stone-500 italic text-sm mb-6 pt-4" data-en="Choose between red sauce or Crème Fraîche">
                Choose between red sauce or Crème Fraîche
              </p>
<ul className="space-y-6">

<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Larino
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Fresh mozzarella, salami, olives, red onion and ground pepper">
                    Fresh mozzarella, salami, olives, red onion and ground
                    pepper
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Amigo
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Pepperoni, ham, salami, beef, bacon, ground beef and onion">
                    Pepperoni, ham, salami, beef, bacon, ground beef and onion
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Victoria
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Pepperoni, ham, onion, mushroom, beef and ground beef">
                    Pepperoni, ham, onion, mushroom, beef and ground beef
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Mirano
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Beef, pepperoni, ham, ground beef, nacho chips, pineapple, leek, parmesan and mushroom">
                    Beef, pepperoni, ham, ground beef, nacho chips, pineapple,
                    leek, parmesan and mushroom
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Margherita
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $16
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tomato sauce, cheese, arugula salad and parmesan">
                    Tomato sauce, cheese, arugula salad and parmesan
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Salsica
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $18
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Pepperoni, ground beef and nacho chips">
                    Pepperoni, ground beef and nacho chips
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Taco pizza
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $21
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Ground beef, onion, jalapeño, corn, taco sauce, nacho chips">
                    Ground beef, onion, jalapeño, corn, taco sauce, nacho chips
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Super spicy &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Super Spicy
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Beef, mushroom, onion, salami, jalapeño and hot sauce">
                    Beef, mushroom, onion, salami, jalapeño and hot sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      BBQ
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Chicken or beef, bell pepper, leek and mushroom">
                    Chicken or beef, bell pepper, leek and mushroom
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Darina
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Ham, pepperoni and pineapple">
                    Ham, pepperoni and pineapple
                  </p>
</li>
</ul>
<h4 className="text-amber-500 font-medium serif-font text-xl mt-8 mb-4 border-b border-white/10 pb-2" data-en="White Pizza">
                White Pizza
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Salame
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Salami, caramelized onion, arugula and parmesan">
                    Salami, caramelized onion, arugula and parmesan
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Italiana
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Chicken, tomato, bacon, red onion, arugula and parmesan">
                    Chicken, tomato, bacon, red onion, arugula and parmesan
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Parma
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Parma ham, arugula salad and parmesan">
                    Parma ham, arugula salad and parmesan
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Napolion
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $18
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Fresh mozzarella, blue cheese, cured ham, arugula, walnuts and parmesan">
                    Fresh mozzarella, blue cheese, cured ham, arugula, walnuts
                    and parmesan
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Baffi
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Beef, bacon and onion">
                    Beef, bacon and onion
                  </p>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-pasta')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Pasta">
                Pasta
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-pasta" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-pasta">
<ul className="space-y-6 pt-4">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Spaghetti a la bolognese
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Spaghetti with meat sauce">
                    Spaghetti with meat sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Spaghetti a la carbonara
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Spaghetti, bacon, cream and egg yolk">
                    Spaghetti, bacon, cream and egg yolk
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Tagliatelle con carne &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Tagliatelle con Carne
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $24
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Ribbon pasta with beef, onion, cream, bell pepper and mushroom">
                    Ribbon pasta with beef, onion, cream, bell pepper and
                    mushroom
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Ravioli di pollo
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $25
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Pasta with chicken in curry sauce">
                    Pasta with chicken in curry sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Ravioli con carne gratinati &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Ravioli con Carne Gratinati
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $26
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Meat-filled pasta with beef and pepper sauce. Gratinated in oven.">
                    Meat-filled pasta with beef and pepper sauce. Gratinated in
                    oven.
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Tagliatelle salmon &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-4-7)&lt;/span&gt;'>
                      Tagliatelle Salmon
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-4-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $27
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Ribbon pasta with grilled salmon fillet, vegetables and cream sauce">
                    Ribbon pasta with grilled salmon fillet, vegetables and
                    cream sauce
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Lasagne
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $26
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Homemade lasagne with salad, bread and butter">
                    Homemade lasagne with salad, bread and butter
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Tortellini scampi
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-2-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $27
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Meat-filled egg pasta rings with king prawns, bell pepper, onion, mushroom and broccoli">
                    Meat-filled egg pasta rings with king prawns, bell pepper,
                    onion, mushroom and broccoli
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Tagliatelle red wine &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-2-7)&lt;/span&gt;'>
                      Tagliatelle Red Wine
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-2-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $29
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Beef, bell pepper, onion, mushroom, cream sauce and red wine">
                    Beef, bell pepper, onion, mushroom, cream sauce and red wine
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Tagliatelle chicken &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-2-7)&lt;/span&gt;'>
                      Tagliatelle Chicken
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-2-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $25
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Chicken fillet, broccoli, cream sauce and parmesan">
                    Chicken fillet, broccoli, cream sauce and parmesan
                  </p>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-grill')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Chicken, Fish &amp; Kebab">
                Chicken, Fish &amp; Kebab
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-grill" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-grill">
<h4 className="text-amber-500 font-medium serif-font text-xl mt-4 mb-4 border-b border-white/10 pb-2" data-en="Chicken">
                Chicken
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Chicken sauté &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(3)&lt;/span&gt;'>
                      Chicken Sauté
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (3)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $28
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Sliced chicken fillet, onion, bell pepper, mushroom, béarnaise sauce, chips and salad">
                    Sliced chicken fillet, onion, bell pepper, mushroom,
                    béarnaise sauce, fries and salad
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Pollo a la Rosa
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $30
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Crispy fried chicken breast cooked in cream sauce with salad and rice">
                    Crispy fried chicken breast cooked in cream sauce with salad
                    and rice
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Pollo Indiana
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $30
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Crispy fried chicken breast cooked in curry sauce with salad and rice">
                    Crispy fried chicken breast cooked in curry sauce with salad
                    and rice
                  </p>
</li>
</ul>
<h4 className="text-amber-500 font-medium serif-font text-xl mt-8 mb-4 border-b border-white/10 pb-2" data-en="Fish">
                Fish
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Scampi
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (2-7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $30
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Grilled king prawns, salad, rice, vegetables and cream sauce with curry spice">
                    Grilled king prawns, salad, rice, vegetables and cream sauce
                    with curry spice
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Salmonealfebri
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (4-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $32
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Grilled salmon fillet with fried potatoes, salad, vegetables, cream sauce and broccoli">
                    Grilled salmon fillet with fried potatoes, salad,
                    vegetables, cream sauce and broccoli
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Scampi stew &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(2-7-8)&lt;/span&gt;'>
                      Scampi Stew
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (2-7-8)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $30
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Grilled scampi in vegetable stew with rice, salad, corn on the cob and fresh parsley">
                    Grilled scampi in vegetable stew with rice, salad, corn on
                    the cob and fresh parsley
                  </p>
</li>
</ul>
<h4 className="text-amber-500 font-medium serif-font text-xl mt-8 mb-4 border-b border-white/10 pb-2" data-en="Kebab">
                Kebab
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Chicken kebab platter &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Chicken Kebab Platter
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Chicken, salad, garlic sauce, bread and chips">
                    Chicken, salad, garlic sauce, bread and fries
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Kebab platter &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Kebab Platter
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Marinated meat, bread, garlic sauce, salad and chips">
                    Marinated meat, bread, garlic sauce, salad and fries
                  </p>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-special')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Victoria Dishes, Taco &amp; Kids Menu">
                Victoria Dishes, Taco &amp; Kids Menu
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-special" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-special">
<h4 className="text-amber-500 font-medium serif-font text-xl mt-4 mb-4 border-b border-white/10 pb-2" data-en="Victoria Dishes">
                Victoria Dishes
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Victoria shish
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-3-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $39
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Tenderloin with garlic sauce, pita bread, fried tomato, salad and sweet potato">
                    Tenderloin with garlic sauce, pita bread, fried tomato,
                    salad and sweet potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Victoria grill
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-3-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $40
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Chicken breast, tenderloin, BBQ sauce, béarnaise, garlic sauce, onion rings, corn on the cob and sweet potato">
                    Chicken breast, tenderloin, BBQ sauce, béarnaise, garlic
                    sauce, onion rings, corn on the cob and sweet potato
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Special grill &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-3-7)&lt;/span&gt;'>
                      Special Grill
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-3-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $42
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Lamb chops, chicken breast, BBQ tenderloin, garlic sauce, chipotle sauce, pomegranate sauce, BBQ sauce, onion rings, salad, corn on the cob and sweet potato">
                    Lamb chops, chicken breast, BBQ tenderloin, garlic sauce,
                    chipotle sauce, pomegranate sauce, BBQ sauce, onion rings,
                    salad, corn on the cob and sweet potato
                  </p>
</li>
</ul>
<h4 className="text-amber-500 font-medium serif-font text-xl mt-8 mb-4 border-b border-white/10 pb-2" data-en="Taco">
                Taco
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Gratinated taco nachos &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(7)&lt;/span&gt;'>
                      Gratinated Taco Nachos
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $23
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Taco sauce, nacho chips, ground beef, cheese, salad, sour cream, jalapeños and guacamole">
                    Taco sauce, nacho chips, ground beef, cheese, salad, sour
                    cream, jalapeños and guacamole
                  </p>
</li>
</ul>
<h4 className="text-amber-500 font-medium serif-font text-xl mt-8 mb-4 border-b border-white/10 pb-2" data-en="Kids Menu">
                Kids Menu
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg">
                      Pizza
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $17
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Ground beef, pepperoni and ham">
                    Ground beef, pepperoni and ham
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en="Sausage and chips">
                      Sausage and Fries
                    </span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $10
                    </span>
</div>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Chicken fillet and chips &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(3)&lt;/span&gt;'>
                      Chicken Fillet and Fries
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (3)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $16
                    </span>
</div>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-green')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Vegetarian &amp; Salad">
                Vegetarian &amp; Salad
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-green" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-green">
<h4 className="text-amber-500 font-medium serif-font text-xl mt-4 mb-4 border-b border-white/10 pb-2" data-en="Vegetarian">
                Vegetarian
              </h4>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Vegetarian burger &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-3-7)&lt;/span&gt;'>
                      Vegetarian Burger
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-3-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="150g vegetable-based burger with Trønder salad and chips">
                    150g vegetable-based burger with Trønder salad and fries
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Tagliatelle a la vegetariane &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Tagliatelle Vegetariane
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $18
                    </span>
</div>
<p className="text-stone-400 text-sm leading-relaxed font-light" data-en="Ribbon pasta, mushroom, onion, bell pepper and cream">
                    Ribbon pasta, mushroom, onion, bell pepper and cream
                  </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Greek salad &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Greek Salad
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $18
                    </span>
</div>
</li>
</ul>
<h4 className="text-amber-500 font-medium serif-font text-xl mt-8 mb-4 border-b border-white/10 pb-2" data-en="Salad">
                Salad
              </h4>
<p className="text-stone-500 italic text-sm mb-6">
                All salads include salad, pomegranate juice, feta cheese,
                tomato, parmesan
              </p>
<ul className="space-y-6">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Greek salad &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Greek Salad
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $18
                    </span>
</div>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Cured ham salad &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Cured Ham Salad
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $20
                    </span>
</div>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Kebab salad &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Kebab Salad
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $21
                    </span>
</div>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Chicken salad &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-7)&lt;/span&gt;'>
                      Chicken Salad
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $21
                    </span>
</div>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-[#E6DCCF] font-medium text-lg" data-en='Salmon fillet salad &lt;span className="text-stone-500 text-xs font-normal align-top"&gt;(1-4-7)&lt;/span&gt;'>
                      Salmon Fillet Salad
                      <span className="text-stone-500 text-xs font-normal align-top">
                        (1-4-7)
                      </span>
</span>
<span className="text-amber-500 font-medium shrink-0 ml-4">
                      $22
                    </span>
</div>
</li>
</ul>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-[#2C241B] overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group" onclick="toggleCategory('cat-drinks')">
<span className="serif-font text-2xl text-amber-500 group-hover:text-amber-400 transition-colors" data-en="Drinks &amp; Wine">
                Drinks &amp; Wine
              </span>
<svg className="w-5 h-5 text-stone-500 transition-transform duration-300" fill="none" height="24" id="icon-cat-drinks" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-6 bg-[#251f17] border-t border-white/5" id="cat-drinks">
<h4 className="text-stone-300 font-medium uppercase tracking-widest text-sm mb-4 mt-4" data-en="Cold Drinks">
                Cold Drinks
              </h4>
<ul className="space-y-3 mb-8">
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en='Soft drinks &lt;span className="text-stone-500 text-xs font-light"&gt;(Cola, Pepsi Max, Cola Zero, Fanta, Sprite, Villa)&lt;/span&gt;'>
                    Soft Drinks
                    <span className="text-stone-500 text-xs font-light">
                      (Cola, Pepsi Max, Cola Zero, Fanta, Sprite, Villa)
                    </span>
</span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="Sparkling water">
                    Sparkling Water
                  </span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="Apple juice">
                    Apple Juice
                  </span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="Orange juice">
                    Orange Juice
                  </span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="Iced tea">
                    Iced Tea
                  </span>
<span className="text-amber-500 font-medium">$5</span>
</li>
</ul>
<h4 className="text-stone-300 font-medium uppercase tracking-widest text-sm mb-4" data-en="Hot Drinks">
                Hot Drinks
              </h4>
<ul className="space-y-3 mb-8">
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="Tea">Tea</span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en='Hot chocolate &lt;span className="text-stone-500 text-xs"&gt;(7)&lt;/span&gt;'>
                    Hot Chocolate
                    <span className="text-stone-500 text-xs">(7)</span>
</span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="Black coffee">
                    Black Coffee
                  </span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Espresso</span>
<span className="text-amber-500 font-medium">$5</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">
                    Caffè latte
                    <span className="text-stone-500 text-xs">(7)</span>
</span>
<span className="text-amber-500 font-medium">$5</span>
</li>
</ul>
<h4 className="text-stone-300 font-medium uppercase tracking-widest text-sm mb-4" data-en="Red Wine">
                Red Wine
              </h4>
<ul className="space-y-3 mb-8">
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]" data-en="House red wine (glass)">
                    House Red Wine (glass)
                  </span>
<span className="text-amber-500 font-medium">$12</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Escada</span>
<span className="text-amber-500 font-medium">$52</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Valpoligella</span>
<span className="text-amber-500 font-medium">$66</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Campofidrin</span>
<span className="text-amber-500 font-medium">$61</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Gato Negro</span>
<span className="text-amber-500 font-medium">$52</span>
</li>
</ul>
<h4 className="text-stone-300 font-medium uppercase tracking-widest text-sm mb-4" data-en="White Wine">
                White Wine
              </h4>
<ul className="space-y-3">
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Escada</span>
<span className="text-amber-500 font-medium">$52</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Jacobs Creek</span>
<span className="text-amber-500 font-medium">$60</span>
</li>
<li className="flex justify-between items-baseline border-b border-stone-800/50 pb-1 border-dashed">
<span className="text-[#E6DCCF]">Gato Negro</span>
<span className="text-amber-500 font-medium">$52</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="text-[#2C241B] bg-[#E6DCCF] pt-24 pb-24" id="kitchen">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative scroll-animate" data-animation="fadeInLeft">
<div className="grid grid-cols-2 gap-4">
<img alt="Culinary Detail" className="rounded-2xl w-full h-64 object-cover shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb968efc-a27f-4c9e-bf86-7179b0c8bf51_800w.jpg"/>
<img alt="Plated Dish" className="rounded-2xl w-full h-64 object-cover mt-12 shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1775658-23d9-4e8e-bb30-efcce999efc4_800w.jpg"/>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400/30 rounded-full blur-[60px] parallax-slow" data-speed="-0.03"></div>
</div>
<div className="order-1 lg:order-2 scroll-animate" data-animation="fadeInRight">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C241B]/5 border border-[#2C241B]/10 mb-6">
<svg className="lucide lucide-chef-hat w-3 h-3 text-[#8f2823]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
<line x1="6" x2="18" y1="17" y2="17"></line>
</svg>
<span className="text-xs font-semibold text-[#2C241B] tracking-wide uppercase" data-en="Our Kitchen">
                Our Kitchen
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#2C241B]" data-en="Taste, &lt;span className='serif-font italic text-[#8f2823]/80'&gt;Passion&lt;/span&gt; &amp; Quality.">
              Taste,
              <span className="serif-font italic text-[#8f2823]/80">Passion</span>
              &amp; Quality.
            </h2>
<p className="text-lg text-[#2C241B]/70 font-normal mb-8 leading-relaxed max-w-lg" data-en="We believe in the power of good ingredients. Our chefs combine traditional techniques with modern flavors to create dishes that surprise and delight. A tribute to the good meal.">
              We believe in the power of good ingredients. Our chefs combine
              traditional techniques with modern flavors to create dishes that
              surprise and delight. A tribute to the good meal.
            </p>
</div>
</div>
</div>
</section>


<footer className="bg-[#151312] pt-24 pb-12 border-t border-white/5">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 scroll-animate" data-animation="fadeInUp">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-utensils-crossed text-amber-500 w-5 h-5" data-lucide="utensils-crossed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path>
<path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path>
<path d="m2.1 21.8 6.4-6.3"></path>
<path d="m19 5-7 7"></path>
</svg>
<span className="text-xl tracking-tight font-medium text-white">
                RESTAURANT
              </span>
</div>
<p className="text-lg font-light text-stone-500 mb-6" data-en="Bringing culinary excellence to Trøndelag with passion and warmth.">
              Bringing culinary excellence to "area" with passion and warmth.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-blue-600 hover:text-white transition-all" href="https://facebook.com" rel="noopener noreferrer nofollow" target="_blank">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Location One</h4>
<a className="text-stone-500 mb-2 font-light text-sm block hover:text-stone-300 transition-colors" href="https://www.google.com/maps" rel="noopener noreferrer" target="_blank">
              123 Main Street
            </a>
<p className="text-stone-500 mb-4 font-light text-sm">City, 12345</p>
<a className="text-stone-300 hover:text-amber-400 text-sm block mb-1" href="tel:+1234567890" rel="noopener noreferrer">
              +1 234 567 890
            </a>
<div className="pt-4 border-t border-white/5 text-sm">
<div className="flex justify-between mb-1">
<span className="text-stone-500">Mon - Sat</span>
<span className="text-stone-300">10:00 – 22:00</span>
</div>
<div className="flex justify-between">
<span className="text-stone-500">Sunday</span>
<span className="text-stone-300">13:00 – 22:00</span>
</div>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Location Two</h4>
<a className="text-stone-500 mb-2 font-light text-sm block hover:text-stone-300 transition-colors" href="https://www.google.com/maps" rel="noopener noreferrer" target="_blank">
              456 Second Avenue
            </a>
<p className="text-stone-500 mb-4 font-light text-sm">City, 67890</p>
<a className="text-stone-300 hover:text-amber-400 text-sm block mb-1" href="tel:+1234567891" rel="noopener noreferrer">
              +1 234 567 891
            </a>
<div className="pt-4 border-t border-white/5 text-sm">
<div className="flex justify-between">
<span className="text-stone-500">Mon - Sun</span>
<span className="text-stone-300">14:00 – 22:00</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span></span>
</div>
</div>
</footer>





    </>
  );
}
