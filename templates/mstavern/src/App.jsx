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



      // Initialize Lucide Icons
      lucide.createIcons();

      // 1. Theme Color Logic
      const root = document.documentElement;
      let isManualTheme = false;

      document.addEventListener('DOMContentLoaded', () => {
          // 2. Text Reveal Animation
          const revealText = document.querySelector('.reveal-text');
          if (revealText) {
              const text = revealText.innerText;
              revealText.innerHTML = '';
              text.split(' ').forEach(word => {
                  const span = document.createElement('span');
                  span.innerText = word + ' ';
                  revealText.appendChild(span);
              });

              const spans = revealText.querySelectorAll('span');
              const handleScrollReveal = () => {
                  const rect = revealText.getBoundingClientRect();
                  const viewHeight = window.innerHeight;
                  if (rect.top < viewHeight && rect.bottom > 0) {
                      const percent = 1 - (rect.bottom / (viewHeight + rect.height));
                      const activeIndex = Math.floor(percent * spans.length * 2.5);
                      spans.forEach((span, index) => {
                          if (index < activeIndex) span.classList.add('active');
                          else span.classList.remove('active');
                      });
                  }
              };
              window.addEventListener('scroll', handleScrollReveal);
          }

          // 3. Parallax Effect
          const parallaxItems = document.querySelectorAll('.parallax-item');
          const handleParallax = () => {
              parallaxItems.forEach(item => {
                  const speed = parseFloat(item.getAttribute('data-speed'));
                  const rect = item.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                      const centerOffset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
                      const yPos = centerOffset * speed;
                      item.style.transform = `translate3d(0, ${yPos}px, 0)`;
                  }
              });
          };
          window.addEventListener('scroll', handleParallax, { passive: true });

          // 4. Navbar Logic
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) navbar.classList.add('bg-zinc-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
              else navbar.classList.remove('bg-zinc-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
          });

          // 5. Scroll-based Theme (only active if user hasn't manually clicked a team)
          const sections = [
              { id: 'mission', color: '#0076B6' },
              { id: 'history', color: '#FA4616' },
              { id: 'menu', color: '#0076B6' },
              { id: 'drinks', color: '#0076B6' },
              { id: 'private-dining', color: '#0076B6' },
              { id: 'membership', color: '#CE1126' },
              { id: 'partners', color: '#0076B6' }
          ];

          window.addEventListener('scroll', () => {
              if (isManualTheme) return; // Skip if user selected a team

              const scrollCenter = window.scrollY + (window.innerHeight / 2);
              for (const section of sections) {
                  const el = document.getElementById(section.id);
                  if (el) {
                      const { offsetTop, offsetHeight } = el;
                      if (scrollCenter >= offsetTop && scrollCenter < offsetTop + offsetHeight) {
                          root.style.setProperty('--accent-color', section.color);
                      }
                  }
              }
          });
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
      

<nav className="fixed top-0 w-full z-50 py-6 transition-all duration-300" id="navbar">
<div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="hover:text-white transition-colors hover-accent-red" href="#mission">
            Experience
          </a>
<a className="hover:text-white transition-colors" href="#history">
            Legends
          </a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<a className="font-serif text-3xl hover:opacity-80 transition-opacity text-[#0076B6]" href="#">
            MST
          </a>
</div>

<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="text-white transition-colors hover:text-[#CE1126]" href="#menu">
              Dining
            </a>
<a className="hover:text-white transition-colors" href="#drinks">
              Libations
            </a>
<a className="hover:text-white transition-colors" href="#private-dining">
              Private
            </a>
<a className="bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors btn-hover-red" href="#membership">
              Membership
            </a>
</div>
<button className="flex items-center gap-2 text-white transition-colors md:hidden hover:text-[#0076B6]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</nav>

<header className="overflow-hidden flex w-full h-screen relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Atmosphere" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950"></div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="w-[600px] h-[600px] rounded-full border border-white/10 opacity-50 scale-100 animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="w-[450px] h-[450px] rounded-full border opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#0076B6]/30"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
<p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up text-[#0076B6] hover-accent-red">
          Detroit • Grand Rapids
        </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
          Serenity
          <br/>
<span className="italic text-white/90">Tavern</span>
</h1>
<p className="md:text-base leading-relaxed text-sm font-light text-zinc-300 opacity-90 max-w-lg mr-auto ml-auto">
          A private sanctuary for the elite athletes of Michigan.
          <br/>
          Where legends rest and history is written.
        </p>
</div>

<div className="absolute bottom-12 left-12 flex items-center gap-4 text-white/50 animate-bounce">
<svg className="lucide lucide-arrow-down w-6 h-6" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
<span className="text-[10px] uppercase tracking-widest">Explore</span>
</div>

<div className="absolute bottom-12 right-12 hidden md:block">
<div className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
<div className="w-20 h-20 rounded-full bg-[#0076B6]/10 backdrop-blur-sm border border-[#0076B6]/30 flex items-center justify-center group-hover:bg-[#CE1126] transition-colors duration-500">
<svg className="lucide lucide-key w-6 h-6 text-white" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
<path d="m21 2-9.6 9.6"></path>
<circle cx="7.5" cy="15.5" r="5.5"></circle>
</svg>
</div>
<svg className="animate-spin-slow w-[128px] h-[128px] absolute top-0 right-0 bottom-0 left-0" strokeWidth="2" style={{color: '#0076B6'}} viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[10px] uppercase font-medium tracking-[0.2em]" fill="currentColor">
<textpath href="#circlePath">
                •Members ONLY •Detroit Legend
              </textpath>
</text>
</svg>
</div>
</div>
</header>

<section className="bg-zinc-950 pt-32 pb-32 relative" id="mission">
<div className="max-w-4xl mx-auto px-6">
<p className="reveal-text font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-white text-center">
<span>To</span>
<span>serve</span>
<span>with</span>
<span>strong</span>
<span>family</span>
<span>orientation</span>
<span>and</span>
<span>deep</span>
<span>local</span>
<span>pride.</span>
<span>As</span>
<span>mental</span>
<span>health</span>
<span>awareness</span>
<span>grows,</span>
<span>we</span>
<span>provide</span>
<span>a</span>
<span>sanctuary</span>
<span>of</span>
<span>loyalty,</span>
<span>supporting</span>
<span>authentic,</span>
<span>mission-driven</span>
<span>businesses</span>
<span>and</span>
<span>the</span>
<span>legends</span>
<span>who</span>
<span>build</span>
<span>them.</span>
</p>
</div>
</section>

<section className="overflow-hidden bg-zinc-950 pt-32 pb-32 relative" id="history">

<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<svg height="100%" width="100%">
<line stroke="white" strokeWidth="1" x1="20%" x2="20%" y1="0" y2="100%"></line>
<line stroke="white" strokeWidth="1" x1="80%" x2="80%" y1="0" y2="100%"></line>
<circle cx="50%" cy="50%" fill="none" r="20%" stroke="white" strokeWidth="1"></circle>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="">
<span className="text-accent text-xs font-bold tracking-widest uppercase block mb-4">
              The Hall of Greats
            </span>
<h2 className="font-serif text-5xl text-white">Detroit Legends.</h2>
</div>
<div className="text-right hidden md:block">
<p className="text-zinc-500 text-sm max-w-xs">
              From the '35 Champions to the Bad Boys era.
              <br/>
              The walls speak of victory.
            </p>
</div>
</div>

<div className="grid grid-cols-12 lg:gap-y-0 lg:h-[900px] gap-x-y-24 gap-y-24">

<div className="col-span-12 md:col-span-6 lg:col-span-5 relative group parallax-item" data-speed="0.05" style={{transform: 'translate3d(0px, 32.308035px, 0px)'}}>
<a className="overflow-hidden aspect-[4/5] relative block" href="#history">
<img alt="Basketball" className="img-scale-hover hover:grayscale-0 transition-all duration-700 w-full h-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/416f8f80-a222-4922-84b1-1d61fe828ad9_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/80 to-transparent w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<span className="font-serif text-2xl text-white block italic">
                  Motor City
                </span>
<span className="uppercase text-xs text-white/60 tracking-widest">
                  Basketball Roots
                </span>
</div>
</a>
</div>

<div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8 lg:mt-12 parallax-item relative group overflow-hidden" data-speed="-0.02" style={{transform: 'translate3d(0px, -12.243739px, 0px)'}}>
<img alt="Background" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/319448df-31e7-4373-b86b-2fcb9fa19090_800w.jpg"/>
<div className="bg-zinc-900/50 backdrop-blur-md p-8 border border-white/5 relative z-10">
<div className="absolute -top-6 -right-6 text-6xl text-accent opacity-20 font-serif">
                "
              </div>
<h3 className="font-serif text-2xl text-white mb-4">
                No Cameras. No Press.
              </h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                The Tavern is built on the promise of absolute discretion. A
                place where the jersey comes off and the human remains.
              </p>
<div className="h-[1px] w-12 bg-accent"></div>
</div>
</div>

<div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 lg:-mt-32 relative z-20 parallax-item" data-speed="0.08" style={{transform: 'translate3d(0px, 48.698164px, 0px)'}}>
<a className="relative overflow-hidden aspect-[3/4] border-4 border-zinc-950 shadow-2xl block" href="#history">
<img alt="Baseball" className="img-scale-hover hover:grayscale-0 transition-all duration-700 bg-center w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aff99d7c-458b-44c8-b8e5-d73278b4cb03_800w.jpg"/>
<div className="absolute top-6 right-6">
<svg className="lucide lucide-trophy w-6 h-6 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
</a>
</div>

<div className="col-span-12 md:col-span-5 lg:col-span-3 lg:col-start-2 lg:-mt-12 parallax-item" data-speed="0.03" style={{transform: 'translate3d(0px, 10.37981px, 0px)'}}>
<a className="relative overflow-hidden aspect-square block" href="#history">
<img alt="Hockey" className="w-full h-full object-cover img-scale-hover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80&amp;saturation=-100"/>
</a>
<div className="mt-4 flex items-center gap-4">
<span className="h-[1px] w-8 bg-zinc-700"></span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                Ice Legacy
              </span>
</div>
</div>

<div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-3 lg:col-start-9 lg:mt-24 parallax-item" data-speed="0.06" style={{transform: 'translate3d(0px, 16.096333px, 0px)'}}>
<div className="space-y-8">
<div>
<span className="block text-4xl text-white font-serif mb-1">
                  11
                </span>
<span className="uppercase text-xs text-zinc-500 tracking-widest">
                  Stanley Cups
                </span>
</div>
<div>
<span className="block text-4xl text-white font-serif mb-1">3</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                  NBA Titles
                </span>
</div>
<div>
<span className="block text-4xl text-white font-serif mb-1">4</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                  World Series
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 relative border-t border-white/5" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
            Kitchen
          </span>
<h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Culinary Arts
          </h2>
<div className="w-16 h-[1px] bg-accent mx-auto"></div>
</div>
<div className="max-w-2xl mx-auto relative bg-zinc-900/20 p-12 border border-white/5 shadow-2xl backdrop-blur-sm">

<div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent opacity-50"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent opacity-50"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent opacity-50"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent opacity-50"></div>

<div className="text-center mb-16">
<h3 className="font-serif italic text-4xl md:text-5xl text-white">
              fish + fowl
            </h3>
</div>

<div className="space-y-12 mb-16">

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                  Fried Chicken
                </h4>
<span className="text-sm font-semibold text-white/90">28</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Brined breast, leg + thigh, pressure fried, local honey, hot
                sauce, house pickles, garlic fries
              </p>
</div>

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                  Brick Oven Chicken
                </h4>
<span className="text-sm font-semibold text-white/90">34</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Brined breast + thigh, crispy potato, broccolini, garlic,
                chiles, jus
              </p>
</div>

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                  Roasted Duck
                </h4>
<span className="text-sm font-semibold text-white/90">38</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Duck breast, duck confit farro, charred duck fat leeks, spinach,
                chili glazed carrots, cherry + red wine demi
              </p>
</div>

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                  Faroe Island Salmon
                </h4>
<span className="text-sm font-semibold text-white/90">38</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Sustainable salmon, kale, root vegetables, sweet potato, fig
                balsamic reduction
              </p>
</div>

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                  Scallops
                </h4>
<span className="text-sm font-semibold text-white/90">42</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Cauliflower purée, mushroom couscous, kale, truffle, broccolini
              </p>
</div>
</div>

<div className="w-full h-[1px] bg-white/10 mb-16"></div>

<div className="text-center mb-16">
<h3 className="font-serif italic text-4xl md:text-5xl text-white">
              for two
            </h3>
</div>

<div className="menu-item group cursor-default mb-16">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                Fried Chicken + Champagne for Two
              </h4>
<span className="text-sm font-semibold text-white/90">89</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
              Brined breast, leg + thigh, pressure fried, garlic fries, mac +
              cheese, root vegetable hash, onion rings, local honey, house hot
              sauce, house pickles, + bottle of champagne
            </p>
</div>

<div className="border-t border-white/10 pt-12 text-center md:text-left space-y-6">
<div>
<h5 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                Special Dietary Needs
              </h5>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
                It's our pleasure to accommodate any food allergies or dietary
                needs. Please see your server for details.
              </p>
</div>
<p className="text-[10px] text-zinc-600 font-light leading-relaxed italic">
              Ask your server about menu items that are cooked to order or
              served raw. Consuming raw or undercooked meats, poultry, seafood,
              shellfish or eggs may increase your risk of foodborne illness. 18%
              gratuity for parties of 8 or more will be automatically applied to
              all checks in the party.
            </p>
</div>
</div>

<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-download w-4 h-4 group-hover:-translate-y-1 transition-transform" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
            Download Full Menu
          </a>
</div>
</div>
</section>

<section className="bg-zinc-950 pb-32 pt-20 relative" id="drinks">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4">
            The Alchemist's Cabinet
          </span>
<h2 className="font-serif text-4xl md:text-5xl text-white/80 mb-8">
            Libations
          </h2>
</div>

<div className="mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all duration-500 relative drink-card">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-accent">
<svg className="lucide lucide-martini w-5 h-5" data-lucide="martini" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 22h8"></path>
<path d="M12 11v11"></path>
<path d="m19 3-7 8-7-8Z"></path>
</svg>
</div>
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                The Honolulu Blue
              </h4>
<p className="text-xs text-accent/80 italic mb-4">
                A tribute to the Lions' iconic color
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                New Holland Blue Moon Gin, elderflower liqueur, fresh lemon,
                butterfly pea flower tea, sparkling water.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                Motor City Mule
              </h4>
<p className="text-xs text-accent/80 italic mb-4">
                Detroit-made bourbon meets Michigan ginger
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Two James Grass Widow bourbon, ginger beer, fresh lime, Detroit
                bitters, candied ginger.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                Tiger's Roar
              </h4>
<p className="text-xs text-accent/80 italic mb-4">
                A bold, smoky tribute to Comerica Park
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Journeyman Road's End Rye, orange bitters, Michigan maple syrup,
                smoked with cherry wood.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                Hockeytown Highball
              </h4>
<p className="text-xs text-accent/80 italic mb-4">
                Red &amp; white like the Red Wings banner
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Traverse City whiskey, cranberry juice, ginger ale, fresh lime,
                rosemary sprig.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                Palace Punch
              </h4>
<p className="text-xs text-accent/80 italic mb-4">
                Bad Boys energy in a glass
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Long Road rum, passion fruit, pineapple, lime, house-made
                grenadine, sugar rim.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">
                The Going to Work
              </h4>
<p className="text-xs text-accent/80 italic mb-4">
                Named for Ben Wallace's work ethic
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Valentine vodka, espresso, Kahlúa, simple syrup, coffee liqueur.
              </p>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 border-t border-white/5 pt-16">
<div>
<h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-4">
<span className="w-2 h-2 rounded-full bg-accent"></span>
              Michigan Vineyard Select
            </h3>
<ul className="space-y-6">
<li className="flex justify-between items-baseline group cursor-pointer wine-item">
<div>
<span className="text-white group-hover:text-accent transition-colors text-sm font-medium">
                    Brys Estate Riesling
                  </span>
<span className="block text-xs text-zinc-500">
                    Old Mission Peninsula | Crisp, mineral-driven
                  </span>
</div>
<span className="text-white/60 text-sm">14 | 52</span>
</li>
<li className="flex justify-between items-baseline group cursor-pointer wine-item">
<div>
<span className="text-white group-hover:text-accent transition-colors text-sm font-medium">
                    Chateau Chantal Chardonnay
                  </span>
<span className="block text-xs text-zinc-500">
                    Old Mission Peninsula | Elegant, oak-aged
                  </span>
</div>
<span className="text-white/60 text-sm">16 | 60</span>
</li>
</ul>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-4">
<span className="w-2 h-2 rounded-full bg-accent"></span>
              Global Reserve
            </h3>
<ul className="space-y-6">
<li className="flex justify-between items-baseline group cursor-pointer wine-item">
<div>
<span className="text-white group-hover:text-accent transition-colors text-sm font-medium">
                    Stag's Leap Artemis Cabernet
                  </span>
<span className="block text-xs text-zinc-500">
                    Napa Valley, CA | Iconic
                  </span>
</div>
<span className="text-white/60 text-sm">38 | 145</span>
</li>
<li className="flex justify-between items-baseline group cursor-pointer wine-item">
<div>
<span className="text-white group-hover:text-accent transition-colors text-sm font-medium">
                    Tignanello
                  </span>
<span className="block text-xs text-zinc-500">
                    Tuscany, Italy | Super Tuscan Blend
                  </span>
</div>
<span className="text-white/60 text-sm">280 btl</span>
</li>
</ul>
</div>
</div>
<div className="mt-24 text-center border-t border-white/5 pt-12">
<p className="font-serif text-xl italic text-white/60">
            "What's said at the tavern, stays at the tavern"
          </p>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-32 pb-32 relative" id="private-dining">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-24">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
            Celebration &amp; Seclusion
          </span>
<h2 className="font-serif text-5xl text-white mb-6">
            Private Dining &amp; Buyouts
          </h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            While the Tavern offers sanctuary to all, specific moments require
            absolute privacy. Reserve our inner chambers or command the full
            estate for your celebration.
          </p>
</div>

<div className="grid md:grid-cols-2 gap-16 mb-20">

<div className="group">
<a className="overflow-hidden aspect-[4/3] mb-8 border border-white/5 relative block" href="#private-dining">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Private Dining Room" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 img-scale-hover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</a>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
<h3 className="text-3xl font-serif text-white mb-2 md:mb-0">
                The Inner Sanctum
              </h3>
<span className="text-xs text-accent uppercase tracking-widest border border-accent/30 px-3 py-1.5 rounded inline-block w-fit">
                Capacity: 14 Guests
              </span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 pr-6">
              Located adjacent to our open-concept kitchen with full A/V
              capabilities. Glass-walled privacy allows you to remain apart of
              the atmosphere while conducting intimate strategy sessions or
              private victories.
            </p>
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest border-b border-accent/50 pb-1 hover:text-[#CE1126] hover:border-[#CE1126] transition-colors" href="#">
              View Details
              <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="group">
<a className="overflow-hidden aspect-[4/3] mb-8 border border-white/5 relative block" href="#private-dining">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Full Restaurant Buyout" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 img-scale-hover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</a>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
<h3 className="text-3xl font-serif text-white mb-2 md:mb-0">
                Full Tavern Buyout
              </h3>
<span className="text-xs text-accent uppercase tracking-widest border border-accent/30 px-3 py-1.5 rounded inline-block w-fit">
                Capacity: 150 Guests
              </span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 pr-6">
              For larger-scale events, the entirety of Serenity Tavern is
              available. Complete privacy for your roster to celebrate without
              the public eye. Ideal for championship celebrations or private
              organization summits.
            </p>
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest border-b border-accent/50 pb-1 hover:text-accent hover:border-accent transition-colors" href="#">
              View Details
              <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="text-center border-t border-white/5 pt-16 flex flex-col items-center">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-clock w-4 h-4 text-accent" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<p className="text-zinc-500 text-xs uppercase tracking-widest">
              Advanced Booking Required (2-4 Weeks)
            </p>
</div>
<a className="inline-block bg-white text-zinc-950 px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#CE1126] hover:text-white transition-all duration-300 shadow-lg shadow-white/5" href="#">
            Submit Inquiry
          </a>
</div>
</div>
</section>

<section className="border-t pt-32 pb-32 relative" id="membership">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Access
            </span>
<h2 className="font-serif text-4xl text-white mb-6">
              Membership Tiers
            </h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Our membership is strictly vetted. Pricing is designed to be
              accessible to the working athlete while maintaining absolute
              exclusivity.
            </p>
<div className="flex items-center gap-2 mb-12">
<div className="w-10 h-[1px] bg-zinc-700"></div>
<span className="text-xs text-zinc-500">Waitlist: 4 Months</span>
</div>
</div>

<div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

<div className="group p-8 rounded bg-zinc-950 border border-white/5 hover:border-accent transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-shield w-10 h-10 text-accent" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
</div>
<h3 className="font-serif text-2xl text-white">Legacy</h3>
<p className="text-xs text-zinc-500 mt-2 mb-8 uppercase tracking-widest">
                Retired &amp; Staff
              </p>
<div className="text-3xl font-serif text-white mb-1">
                $4,000
                <span className="text-sm font-sans text-zinc-500 font-normal ml-2">
                  / yr
                </span>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-accent"></span>
                    Full access standard hours
                  </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-accent"></span>
                    Brewery tour experiences
                  </li>
</ul>
</div>
<button className="mt-8 w-full py-3 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors btn-hover-red">
                Apply Now
              </button>
</div>

<div className="group p-8 rounded bg-zinc-800/50 border border-accent relative overflow-hidden shadow-accent">
<div className="absolute top-0 inset-x-0 h-1 bg-accent"></div>
<h3 className="font-serif text-2xl text-white">Active Elite</h3>
<p className="text-xs text-accent mt-2 mb-8 uppercase tracking-widest">
                Current Roster Only
              </p>
<div className="text-3xl font-serif text-white mb-1">
                $6,000
                <span className="text-sm font-sans text-zinc-500 font-normal ml-2">
                  / yr
                </span>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-accent" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Unlimited access + 4 guests
                  </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-accent" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Priority reservations &amp; Valet
                  </li>
</ul>
</div>
<button className="uppercase hover:bg-[#CE1126] transition-all text-xs text-black tracking-widest bg-accent w-full mt-8 pt-3 pb-3">
                Verify Status
              </button>
</div>
</div>
</div>
</div>
</section>
<section className="bg-zinc-950 py-24 relative border-t border-white/5" id="partners">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
            Gratitude
          </span>
<h2 className="font-serif text-4xl text-white">Our Partners</h2>
<div className="w-12 h-[1px] bg-accent mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-3 gap-x-12 gap-y-16">

<div>
<div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
<svg className="lucide lucide-sprout w-5 h-5 text-accent" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path>
<path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path>
<path d="M5 21h14"></path>
</svg>
<h3 className="font-serif text-xl text-white">Culinary Artisans</h3>
</div>
<ul className="space-y-6 text-center md:text-left">
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-accent transition-colors hover-accent-red">
                  Eastern Market Suppliers
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Daily sourced fresh ingredients
                </p>
</li>
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-accent transition-colors">
                  Zingerman's (Ann Arbor)
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Exclusive artisan partnerships
                </p>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
<svg className="lucide lucide-trophy w-5 h-5 text-accent" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
<h3 className="font-serif text-xl text-white">Sports Alliances</h3>
</div>
<ul className="space-y-6 text-center md:text-left">
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-accent transition-colors">
                  Detroit Pro Teams
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Lions, Pistons, Red Wings, Tigers
                </p>
</li>
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-accent transition-colors">
                  University of Michigan
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Athletic Dept pipeline program
                </p>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
<svg className="lucide lucide-handshake w-5 h-5 text-accent" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
<path d="m21 3 1 11h-2"></path>
<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
<path d="M3 4h8"></path>
</svg>
<h3 className="font-serif text-xl text-white">Local Alliances</h3>
</div>
<ul className="space-y-6 text-center md:text-left">
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-accent transition-colors">
                  Stellantis / Ford / GM
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Corporate athlete wellness programs
                </p>
</li>
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-accent transition-colors">
                  Luxury Auto Dealers
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Member transportation perks
                </p>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-20 bg-zinc-950 border-t border-white/5 relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 whitespace-nowrap opacity-5 select-none pointer-events-none">
<span className="font-serif text-[12rem] lg:text-[20rem] text-white">
          MIGLIACCIO
        </span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
<span className="font-serif text-4xl text-white mb-8">MST</span>
<div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-500 mb-12">
<a className="hover:text-white transition-colors hover-accent-red" href="#">
            Press
          </a>
<a className="hover:text-white transition-colors hover-accent-red" href="#">
            Events
          </a>
<a className="hover:text-white transition-colors hover-accent-red" href="#">
            Contact
          </a>
<a className="hover:text-white transition-colors hover-accent-red" href="#">
            Login
          </a>
</div>
<div className="flex gap-6 mb-12">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all cursor-pointer hover-accent-red icon-hover-red">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all cursor-pointer hover-accent-red icon-hover-red">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</div>
</div>
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">
          © 2024 Migliaccio Serenity Tavern. Detroit.
        </p>
</div>
</footer>



    </>
  );
}
