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

      // Menu Modal
      const menuModal = document.getElementById('menuModal');
      const openMenuBtn = document.getElementById('openMenuModal');
      const closeMenuBtn = document.getElementById('closeMenuModal');

      if (openMenuBtn) {
          openMenuBtn.addEventListener('click', () => {
              menuModal.classList.add('active');
              document.body.style.overflow = 'hidden';
          });
      }

      if (closeMenuBtn) {
          closeMenuBtn.addEventListener('click', () => {
              menuModal.classList.remove('active');
              document.body.style.overflow = '';
          });
      }

      // Privacy Modal
      const privacyModal = document.getElementById('privacyModal');
      const openPrivacyBtn = document.getElementById('openPrivacyModal');
      const closePrivacyBtn = document.getElementById('closePrivacyModal');

      if (openPrivacyBtn) {
          openPrivacyBtn.addEventListener('click', () => {
              privacyModal.classList.add('active');
              document.body.style.overflow = 'hidden';
              lucide.createIcons();
          });
      }

      if (closePrivacyBtn) {
          closePrivacyBtn.addEventListener('click', () => {
              privacyModal.classList.remove('active');
              document.body.style.overflow = '';
          });
      }

      // Membership Modal
      const membershipModal = document.getElementById('membershipModal');
      const openMembershipLegacyBtn = document.getElementById('openMembershipLegacy');
      const openMembershipActiveBtn = document.getElementById('openMembershipActive');
      const openMembershipFamilyBtn = document.getElementById('openMembershipFamily');
      const closeMembershipBtn = document.getElementById('closeMembershipModal');
      const membershipForm = document.getElementById('membershipForm');
      const successMessage = document.getElementById('successMessage');
      const closeSuccessBtn = document.getElementById('closeSuccessBtn');
      const membershipTypeSelect = document.getElementById('membershipType');

      function openMembership(type) {
          if (membershipModal) {
              membershipModal.classList.add('active');
              document.body.style.overflow = 'hidden';
              lucide.createIcons();
              if (type && membershipTypeSelect) {
                  membershipTypeSelect.value = type;
              }
          }
      }

      if (openMembershipLegacyBtn) openMembershipLegacyBtn.addEventListener('click', () => openMembership('legacy'));
      if (openMembershipActiveBtn) openMembershipActiveBtn.addEventListener('click', () => openMembership('active'));
      if (openMembershipFamilyBtn) openMembershipFamilyBtn.addEventListener('click', () => openMembership('family'));

      if (closeMembershipBtn) {
          closeMembershipBtn.addEventListener('click', () => {
              membershipModal.classList.remove('active');
              document.body.style.overflow = '';
              setTimeout(() => {
                  if (membershipForm) {
                    membershipForm.reset();
                    membershipForm.classList.remove('hidden');
                  }
                  if (successMessage) successMessage.classList.add('hidden');
              }, 400);
          });
      }

      if (membershipForm) {
          membershipForm.addEventListener('submit', (e) => {
              e.preventDefault();
              membershipForm.classList.add('hidden');
              if (successMessage) successMessage.classList.remove('hidden');
              lucide.createIcons();
          });
      }

      if (closeSuccessBtn) {
          closeSuccessBtn.addEventListener('click', () => {
              if (membershipModal) membershipModal.classList.remove('active');
              document.body.style.overflow = '';
              setTimeout(() => {
                  if (membershipForm) {
                    membershipForm.reset();
                    membershipForm.classList.remove('hidden');
                  }
                  if (successMessage) successMessage.classList.add('hidden');
              }, 400);
          });
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
              if (menuModal && menuModal.classList.contains('active')) {
                  menuModal.classList.remove('active');
                  document.body.style.overflow = '';
              }
              if (privacyModal && privacyModal.classList.contains('active')) {
                  privacyModal.classList.remove('active');
                  document.body.style.overflow = '';
              }
              if (membershipModal && membershipModal.classList.contains('active')) {
                  membershipModal.classList.remove('active');
                  document.body.style.overflow = '';
              }
          }
      });

      // Text Reveal Animation
      document.addEventListener('DOMContentLoaded', () => {
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
                  if (rect.top < viewHeight * 0.9) {
                      const scrolled = Math.max(0, (viewHeight * 0.9) - rect.top);
                      const totalScroll = viewHeight * 0.6;
                      const percent = Math.min(1, scrolled / totalScroll);

                      const activeIndex = Math.floor(percent * spans.length);

                      spans.forEach((span, index) => {
                          if (index < activeIndex) span.classList.add('active');
                      });
                  }
              };
              window.addEventListener('scroll', handleScrollReveal);
              handleScrollReveal();
          }

          // Parallax
          const parallaxItems = document.querySelectorAll('.parallax-item');
          window.addEventListener('scroll', () => {
              parallaxItems.forEach(item => {
                  const speed = parseFloat(item.getAttribute('data-speed'));
                  const rect = item.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                      const yPos = (window.innerHeight - rect.top) * speed;
                      item.style.transform = `translate3d(0, ${yPos}px, 0)`;
                  }
              });
          });

          // Navbar Background
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  navbar.classList.add('bg-zinc-950/90', 'backdrop-blur-md', 'border-white/5');
                  navbar.classList.remove('border-transparent');
              } else {
                  navbar.classList.remove('bg-zinc-950/90', 'backdrop-blur-md', 'border-white/5');
                  navbar.classList.add('border-transparent');
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
      

<div className="menu-modal fixed inset-0 z-[100] bg-stone-50 overflow-y-auto" id="menuModal">
<div className="menu-modal-content min-h-screen">

<button className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-zinc-100 transition-colors" id="closeMenuModal">
<svg className="lucide lucide-x w-5 h-5 text-zinc-800" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>

<div className="max-w-2xl mx-auto px-6 py-16 md:py-24">

<div className="text-center mb-16">
<span className="font-serif text-4xl text-zinc-800">MST</span>
<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mt-4">
              Dinner Menu
            </p>
</div>

<div className="mb-16">
<h3 className="font-serif italic text-3xl md:text-4xl text-zinc-800 mb-10 text-center">
              starters
            </h3>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Bone Marrow
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Roasted marrow bones, herb gremolata, grilled sourdough, fleur
                  de sel
                </p>
<span className="text-sm font-medium text-zinc-800">18</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Burrata
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Heirloom tomatoes, aged balsamic, basil oil, grilled ciabatta
                </p>
<span className="text-sm font-medium text-zinc-800">22</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Tuna Tartare
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Yellowfin tuna, avocado, sesame, ginger, wonton crisps
                </p>
<span className="text-sm font-medium text-zinc-800">24</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Oysters
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Half dozen, mignonette, cocktail sauce, fresh horseradish,
                  lemon
                </p>
<span className="text-sm font-medium text-zinc-800">28</span>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-300 mb-16"></div>

<div className="mb-16">
<h3 className="font-serif italic text-3xl md:text-4xl text-zinc-800 mb-10 text-center">
              fish + fowl
            </h3>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Fried Chicken
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Brined breast, leg + thigh, pressure fried, local honey, hot
                  sauce, house pickles, garlic fries
                </p>
<span className="text-sm font-medium text-zinc-800">28</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Brick Oven Chicken
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Brined breast + thigh, crispy potato, broccolini, garlic,
                  chiles, jus
                </p>
<span className="text-sm font-medium text-zinc-800">34</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Roasted Duck
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Duck breast, duck confit farro, charred duck fat leeks,
                  spinach, chili glazed carrots, cherry + red wine demi
                </p>
<span className="text-sm font-medium text-zinc-800">38</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Faroe Island Salmon
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Sustainable salmon, kale, root vegetables, sweet potato, fig
                  balsamic reduction
                </p>
<span className="text-sm font-medium text-zinc-800">38</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Scallops
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Cauliflower purée, mushroom couscous, kale, truffle,
                  broccolini
                </p>
<span className="text-sm font-medium text-zinc-800">42</span>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-300 mb-16"></div>

<div className="mb-16">
<h3 className="font-serif italic text-3xl md:text-4xl text-zinc-800 mb-10 text-center">
              steaks + chops
            </h3>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  The 35 Day Ribeye
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  16oz bone-in, truffle butter, roasted garlic, herb compound
                </p>
<span className="text-sm font-medium text-zinc-800">68</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Filet Mignon
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  8oz center cut, peppercorn crust, cognac cream, crispy
                  shallots
                </p>
<span className="text-sm font-medium text-zinc-800">58</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Heritage Pork Chop
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Apple cider brine, mustard greens, bacon lardon, maple glaze
                </p>
<span className="text-sm font-medium text-zinc-800">42</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Lamb Chops
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Colorado lamb, mint chimichurri, roasted fingerlings, seasonal
                  vegetables
                </p>
<span className="text-sm font-medium text-zinc-800">52</span>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-300 mb-16"></div>

<div className="mb-16">
<h3 className="font-serif italic text-3xl md:text-4xl text-zinc-800 mb-10 text-center">
              for two
            </h3>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Fried Chicken + Champagne For Two
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Brined breast, leg + thigh, pressure fried, garlic fries, mac
                  + cheese, root vegetable hash, onion rings, local honey, house
                  hot sauce, house pickles, + bottle of champagne
                </p>
<span className="text-sm font-medium text-zinc-800">89</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Porterhouse For Two
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  32oz dry-aged, bone-in, three sauces, truffle fries, creamed
                  spinach, roasted bone marrow
                </p>
<span className="text-sm font-medium text-zinc-800">145</span>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-300 mb-16"></div>

<div className="mb-16">
<h3 className="font-serif italic text-3xl md:text-4xl text-zinc-800 mb-10 text-center">
              sides
            </h3>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Lobster Mac
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Aged cheddar, gruyere, butter poached tail
                </p>
<span className="text-sm font-medium text-zinc-800">28</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Truffle Fries
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Parmesan, truffle oil, fresh herbs
                </p>
<span className="text-sm font-medium text-zinc-800">14</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Creamed Spinach
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Baby spinach, nutmeg, parmesan cream
                </p>
<span className="text-sm font-medium text-zinc-800">12</span>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-2">
                  Roasted Broccolini
                </h4>
<p className="text-sm text-zinc-600 leading-relaxed mb-1">
                  Garlic, chili flakes, lemon zest
                </p>
<span className="text-sm font-medium text-zinc-800">12</span>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-300 mb-16"></div>

<div className="mb-12">
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 mb-4">
              Special Dietary Needs
            </h4>
<p className="text-sm text-zinc-600 leading-relaxed">
              It's our pleasure to accommodate any food allergies or dietary
              needs. Please see your server for details.
            </p>
</div>

<div className="text-xs text-zinc-500 leading-relaxed">
<p>
              Ask your server about menu items that are cooked to order or
              served raw. Consuming raw or undercooked meats, poultry, seafood,
              shellfish or eggs may increase your risk of foodborne illness. 18%
              gratuity for parties of 8 or more will be automatically applied to
              all checks in the party.
            </p>
</div>

<div className="text-center mt-16 pt-8 border-t border-zinc-300">
<p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Migliaccio Serenity Tavern
            </p>
<p className="text-xs text-zinc-400 mt-2">Detroit • Grand Rapids</p>
</div>
</div>
</div>
</div>

<div className="privacy-modal fixed inset-0 z-[100] bg-[#0f0d0a] overflow-y-auto" id="privacyModal">
<div className="privacy-modal-content min-h-screen">

<button className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors" id="closePrivacyModal">
<svg className="lucide lucide-x w-5 h-5 text-white" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>

<div className="relative h-screen flex items-center justify-center">
<div className="absolute inset-0">
<img alt="Private Dining Interior" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0a]/80 via-[#0f0d0a]/60 to-[#0f0d0a]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<span className="font-serif text-5xl text-[#C5A059]">MST</span>
<h1 className="font-serif text-6xl md:text-8xl text-white mt-8 mb-8 tracking-tight leading-[0.95]">
              The Inner Sanctum
            </h1>
<p className="text-xl md:text-2xl text-white/70 font-light mb-4 max-w-2xl mx-auto leading-relaxed">
              Where legends shed their armor and reclaim their humanity
            </p>
<p className="text-sm text-white/40 uppercase tracking-[0.3em]">
              Wine Cellar • Hookah Lounge • Brewing Experience
            </p>
<div className="mt-16">
<svg className="lucide lucide-chevron-down w-7 h-7 text-[#C5A059]/60 mx-auto animate-bounce" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>

<div className="bg-[#1a1612] py-24">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-amber-200/60 text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
                Our Philosophy
              </span>
<h2 className="font-serif text-4xl md:text-5xl text-white mb-8 tracking-tight">
                A Haven for Your Circle,
                <br/>
<span className="italic text-white/60">Free from Pursuit</span>
</h2>
<p className="text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
                The world chases what you have. Fame, fortune, the
                spotlight—everyone wants a piece. Here, we ask for nothing. We
                offer everything. This is not a restaurant. This is a refuge.
              </p>
</div>

<div className="grid grid-cols-12 gap-4 mb-20">
<div className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden">
<img alt="Luxury Lounge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="col-span-12 md:col-span-5 aspect-[4/3] md:aspect-auto overflow-hidden">
<img alt="Private Wine Collection" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="col-span-6 md:col-span-4 aspect-square overflow-hidden">
<img alt="Atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="col-span-6 md:col-span-4 aspect-square overflow-hidden">
<img alt="Fine Wine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="col-span-12 md:col-span-4 aspect-[2/1] md:aspect-square overflow-hidden">
<img alt="Secluded Seating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="bg-[#15120f] py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-200/60 text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
                The Difference
              </span>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
                What Sets Us Apart
              </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 border border-white/10 bg-white/5">
<div className="w-12 h-12 rounded-full bg-amber-200/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-eye-off w-5 h-5 text-amber-200/80" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
<path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
<path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
<path d="m2 2 20 20"></path>
</svg>
</div>
<h3 className="font-serif text-xl text-white mb-4">
                  Absolute Privacy
                </h3>
<p className="text-sm text-white/50 leading-relaxed">
                  No phones allowed in dining areas. Staff sign NDAs. Your
                  presence here is known only to those you choose to tell.
                </p>
</div>
<div className="p-8 border border-white/10 bg-white/5">
<div className="w-12 h-12 rounded-full bg-amber-200/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-users w-5 h-5 text-amber-200/80" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="font-serif text-xl text-white mb-4">
                  Family &amp; Connection
                </h3>
<p className="text-sm text-white/50 leading-relaxed">
                  Designed for you to reconnect with your loved ones without
                  pressure. No autographs, no interviews—just genuine connection
                  and shared peace.
                </p>
</div>
<div className="p-8 border border-white/10 bg-white/5">
<div className="w-12 h-12 rounded-full bg-amber-200/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-heart-handshake w-5 h-5 text-amber-200/80" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
</svg>
</div>
<h3 className="font-serif text-xl text-white mb-4">
                  Genuine Hospitality
                </h3>
<p className="text-sm text-white/50 leading-relaxed">
                  Our staff serves you, not your status. We provide care in your
                  most vulnerable moments, without expectation.
                </p>
</div>
</div>
</div>
</div>

<div className="bg-[#1a1612] py-24 relative">
<div className="absolute inset-0 opacity-20">
<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<div className="text-6xl text-amber-200/20 font-serif mb-6">"</div>
<p className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8">
              Escape from the pressure of society and enjoy yourself here. We
              have a desire to provide what we have for you in your most
              vulnerable moment with us.
            </p>
<span className="text-xs uppercase tracking-[0.2em] text-amber-200/50">
              — The Migliaccio Promise
            </span>
</div>
</div>

<div className="bg-[#15120f] py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-amber-200/60 text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
                  The Space
                </span>
<h2 className="font-serif text-4xl text-white mb-8 tracking-tight">
                  Designed for
                  <span className="italic">Restoration</span>
</h2>
<div className="space-y-6 text-white/50 text-sm leading-relaxed">
<p>
                    We want our guests to feel an unfamiliar sense of comfort
                    that makes them want to stay and recharge with us. Here, you
                    are more than just another nameplate with a number looking
                    to sign a check.
                  </p>
<p>
                    We are here to serve you, to cater to you, to look after you
                    and your loved ones. Whatever the occasion may be, it would
                    be our absolute pleasure to be a part of making your night a
                    little bit more relaxing and a lot more special.
                  </p>
<p>
                    Our sanctuary extends beyond the table with distinct
                    environments for your leisure. Explore our curated wine
                    cellar, unwind in the private hookah lounge, or immerse
                    yourself in the craft brewing room—all designed for your
                    restoration.
                  </p>
</div>
<div className="mt-12 grid grid-cols-3 gap-6">
<div>
<span className="text-2xl font-serif text-white">12</span>
<p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                      Private Suites
                    </p>
</div>
<div>
<span className="text-2xl font-serif text-white">24/7</span>
<p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                      Concierge
                    </p>
</div>
<div>
<span className="text-2xl font-serif text-white">100%</span>
<p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                      Discretion
                    </p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Luxury Hookah Lounge &amp; Bar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -left-8 w-48 h-48 border border-amber-200/20"></div>
</div>
</div>
</div>
</div>

<div className="bg-[#1a1612] py-24 border-t border-white/5">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-tight">
              Ready to Experience Serenity?
            </h2>
<p className="text-white/50 text-sm mb-10 leading-relaxed">
              Submit a private inquiry and our concierge team will personally
              reach out to discuss your needs. All communications are strictly
              confidential.
            </p>
<button className="inline-flex items-center gap-3 bg-amber-200/90 text-zinc-900 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors">
<span>Submit Private Inquiry</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-xs text-white/30 mt-6">
              Response within 24 hours • Complete confidentiality guaranteed
            </p>
</div>
</div>

<div className="bg-[#0f0d0b] py-12">
<div className="max-w-6xl mx-auto px-6 text-center">
<span className="font-serif text-2xl text-amber-200/60">MST</span>
<p className="text-xs text-white/30 mt-4 uppercase tracking-widest">
              Migliaccio Serenity Tavern • Detroit • Grand Rapids
            </p>
</div>
</div>
</div>
</div>

<div className="menu-modal fixed inset-0 z-[100] bg-stone-50 overflow-y-auto" id="membershipModal">
<div className="menu-modal-content min-h-screen">

<button className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-zinc-100 transition-colors" id="closeMembershipModal">
<svg className="lucide lucide-x w-5 h-5 text-zinc-800" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>

<div className="max-w-2xl mx-auto px-6 py-16 md:py-24">

<div className="text-center mb-16">
<span className="font-serif text-4xl text-zinc-800">MST</span>
<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mt-4">
              Membership Inquiry
            </p>
</div>

<form className="space-y-6" id="membershipForm">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wide text-zinc-600 mb-2 font-semibold" htmlFor="firstName">
                  First Name *
                </label>
<input className="w-full px-4 py-3 border border-zinc-300 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-800 transition-colors" id="firstName" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-zinc-600 mb-2 font-semibold" htmlFor="lastName">
                  Last Name *
                </label>
<input className="w-full px-4 py-3 border border-zinc-300 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-800 transition-colors" id="lastName" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-zinc-600 mb-2 font-semibold" htmlFor="email">
                Email Address *
              </label>
<input className="w-full px-4 py-3 border border-zinc-300 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-800 transition-colors" id="email" name="email" placeholder="john.doe@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-zinc-600 mb-2 font-semibold" htmlFor="phone">
                Phone Number *
              </label>
<input className="w-full px-4 py-3 border border-zinc-300 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-800 transition-colors" id="phone" name="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-zinc-600 mb-2 font-semibold" htmlFor="membershipType">
                Membership Type *
              </label>
<select className="w-full px-4 py-3 border border-zinc-300 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-800 transition-colors" id="membershipType" name="membershipType" required="">
<option value="">Select membership type</option>
<option value="legacy">Legacy (Retired &amp; Alumni)</option>
<option value="active">Active Elite (Current Roster)</option>
<option value="family">Family (Support System)</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-wide text-zinc-600 mb-2 font-semibold" htmlFor="notes">
                Additional Notes
              </label>
<textarea className="w-full px-4 py-3 border border-zinc-300 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-800 transition-colors resize-none" id="notes" name="notes" placeholder="Tell us about your connection to Michigan sports, your career highlights, or any special requirements..." rows="5"></textarea>
</div>
<div className="pt-6 border-t border-zinc-300">
<button className="w-full bg-zinc-900 text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-zinc-800 transition-colors" type="submit">
                Submit Inquiry
              </button>
<p className="text-xs text-zinc-500 text-center mt-4">
                All inquiries are reviewed personally. We'll respond within 48
                hours.
              </p>
</div>
</form>

<div className="hidden text-center py-12" id="successMessage">
<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-check w-8 h-8 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<h3 className="font-serif text-2xl text-zinc-800 mb-4">Thank You</h3>
<p className="text-sm text-zinc-600 mb-8">
              Your membership inquiry has been received. Our team will review
              your application and reach out within 48 hours.
            </p>
<button className="inline-flex items-center gap-2 text-zinc-800 text-xs uppercase tracking-widest border border-zinc-800 px-6 py-3 hover:bg-zinc-800 hover:text-white transition-all" id="closeSuccessBtn">
              Close
            </button>
</div>
</div>
</div>
</div>

<nav className="fixed transition-all duration-300 w-full z-50 border-b pt-6 pb-6 top-0" id="navbar">
<div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="hover:text-white transition-colors hover-accent-red" href="#ethos">
            The Vow
          </a>
<a className="hover:text-white transition-colors" href="#history">
            Legacy
          </a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<a className="font-serif text-3xl hover:opacity-80 transition-opacity text-[#C5A059]" href="#">
            MST
          </a>
</div>

<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="hover:text-white transition-colors" href="#menu">
              Dining
            </a>
<a className="hover:text-white transition-colors" href="#private-dining">
              Private
            </a>
<a className="bg-white/5 border border-white/10 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all btn-hover-red" href="#membership">
              Membership
            </a>
</div>
<button className="md:hidden text-white hover:text-[#C5A059]">
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
<img alt="Atmosphere" className="w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/80 via-[#0C0A09]/40 to-[#0C0A09]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
<p className="text-xs font-medium tracking-[0.4em] uppercase mb-8 animate-fade-in-up text-[#C5A059]">
          Detroit • Grand Rapids
        </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
          Serenity
          <br/>
<span className="italic text-white/80 font-normal">Tavern</span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-zinc-300 max-w-xl mx-auto border-t border-white/10 pt-8 mt-8">
          A restorative sanctuary for the legends who gave their bodies to the
          game, and the families who stood by them.
          <br/>
<span className="text-white/60 text-sm mt-2 block">
            We see you. We hear you. We serve your circle.
          </span>
</p>
</div>

<div className="absolute bottom-12 right-12 hidden md:block">
<div className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
<div className="w-20 h-20 rounded-full bg-[#C5A059]/10 backdrop-blur-sm border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-500">
<svg className="lucide lucide-shield w-6 h-6 text-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
</div>
<svg className="animate-spin-slow w-[128px] h-[128px] absolute top-0 right-0 bottom-0 left-0" strokeWidth="2" style={{width: '128px', height: '128px', color: '#C5A059'}} viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[10px] uppercase font-medium tracking-[0.22em]" fill="currentColor">
<textpath href="#circlePath">
                • For The Legends • Since 2026
              </textpath>
</text>
</svg>
</div>
</div>
</header>

<section className="pt-32 pb-32 relative bg-[#0C0A09]" id="mission">
<div className="max-w-5xl mx-auto px-6">
<p className="reveal-text font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-white text-center">
<span>For</span>
<span>decades,</span>
<span>you</span>
<span>gave</span>
<span>us</span>
<span>your</span>
<span>Sundays.</span>
<span>You</span>
<span>gave</span>
<span>us</span>
<span>your</span>
<span>knees,</span>
<span>your</span>
<span>backs,</span>
<span>and</span>
<span>your</span>
<span>youth.</span>
<span>The</span>
<span>world</span>
<span>cheered</span>
<span>while</span>
<span>you</span>
<span>bled,</span>
<span>then</span>
<span>told</span>
<span>you</span>
<span>to</span>
<span>toughen</span>
<span>up</span>
<span>when</span>
<span>the</span>
<span>silence</span>
<span>came.</span>
<span>We</span>
<span>are</span>
<span>here</span>
<span>to</span>
<span>break</span>
<span>that</span>
<span>silence.</span>
<span>This</span>
<span>is</span>
<span>sanctuary</span>
<span>for</span>
<span>you</span>
<span>and</span>
<span>yours.</span>
</p>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#0C0A09]" id="ethos">
<div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
<div className="absolute right-8 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<span className="text-[#CE1126] text-xs font-bold tracking-widest uppercase mb-6 block flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#CE1126]"></span>
              The Silent Vow
            </span>
<h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
              More Than A Tavern.
              <br/>
<span className="text-zinc-600">A Sanctuary for Families.</span>
</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base pr-8">
<p className="">
                In the roar of Ford Field, the heat of the Palace, or the ice of
                the Joe, you were warriors. You were defined by your output,
                your stats, and your ability to endure pain. But when the jersey
                comes off, the human remains.
              </p>
<p className="">
                Society tells athletes to bury the struggle. "Get back out
                there." We know the toll that takes on the mind—and the home. We
                understand the everyday battles you and your family face, and we
                are here to shoulder that weight.
              </p>
<p className="">
                Here, there are no cameras. No autograph seekers. No press. Just
                the shared understanding of those who have carried the weight of
                a city's expectations. We provide the comfort and privacy you
                and your loved ones were denied in the public eye.
              </p>
</div>
<div className="mt-12 flex items-center gap-8">
<div className="flex flex-col">
<span className="text-3xl font-serif text-white">100%</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
                  Privacy Guaranteed
                </span>
</div>
<div className="w-[1px] h-12 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-3xl font-serif text-white">0</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
                  Judgement
                </span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 w-full h-full border border-white/5 hidden lg:block"></div>
<div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
<img alt="The quiet locker room" className="img-scale-hover opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/319448df-31e7-4373-b86b-2fcb9fa19090_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
<p className="font-serif text-2xl text-white italic">
                  "We understand your need to be served."
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0C0A09] pt-32 pb-32 relative" id="history">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="">
<span className="text-accent text-xs font-bold tracking-widest uppercase block mb-4">
              Michigan Heritage
            </span>
<h2 className="font-serif text-5xl text-white">
              The Shoulders We Stand On.
            </h2>
</div>
<div className="text-right hidden md:block">
<p className="text-zinc-500 text-sm max-w-xs">
              From the '35 Champions to the Bad Boys era.
              <br/>
              We honor the sacrifice, not just the score.
            </p>
</div>
</div>
<div className="grid grid-cols-12 lg:gap-y-0 lg:h-[900px] gap-x-8 gap-y-24">
<div className="col-span-12 md:col-span-6 lg:col-span-5 relative group parallax-item" data-speed="0.05" style={{transform: 'translate3d(0px, 70.784595px, 0px)'}}>
<div className="overflow-hidden aspect-[4/5] relative border-l-2 border-accent">
<img alt="Basketball" className="img-scale-hover transition-all duration-700 group-hover:opacity-100 opacity-70 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/490f824c-8cca-4ed1-b48b-3df90de8fecf_1600w.jpg" style={{maskImage: 'linear-gradient(180deg, transparent, black 10%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 80%, transparent)'}}/>
<div className="bg-black/80 backdrop-blur-sm absolute bottom-8 right-8 p-6 max-w-[280px] border border-white/10">
<span className="font-serif text-xl text-white block mb-2">
                  The Grind
                </span>
<p className="text-xs text-zinc-400 leading-relaxed">
                  Basketball in Detroit isn't flashy. It's blue collar. It's
                  elbows and defense. We built this lounge to soothe the bruises
                  that never made the headlines.
                </p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8 lg:mt-32 parallax-item relative group" data-speed="-0.02" style={{transform: 'translate3d(0px, -25.849653px, 0px)'}}>
<div className="bg-zinc-900/30 p-10 border-t border-b border-white/10 relative">
<div className="absolute -top-6 -left-4 text-6xl text-[#C5A059] opacity-30 font-serif">
                "
              </div>
<p className="font-serif text-2xl text-white/90 leading-relaxed mb-6 relative z-10">
                They asked for our bodies. We gave them. Now, in the quiet
                years, we reclaim our peace.
              </p>
<div className="flex items-center gap-4">
<span className="w-8 h-[1px] bg-zinc-600"></span>
<span className="text-xs uppercase tracking-widest text-zinc-500">
                  Anonymous '04 Champion
                </span>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 lg:-mt-20 relative z-20 parallax-item" data-speed="0.08" style={{transform: 'translate3d(0px, 102.657168px, 0px)'}}>
<div className="relative overflow-hidden aspect-[3/4] border border-white/5 shadow-2xl">
<img alt="Baseball" className="img-scale-hover bg-center w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aff99d7c-458b-44c8-b8e5-d73278b4cb03_800w.jpg"/>
<div className="group-hover:bg-transparent transition-colors opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/416f8f80-a222-4922-84b1-1d61fe828ad9_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 grayscale" style={{maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#0C0A09]" id="menu">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
          Nourishment
        </span>
<h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
          Comfort for the Soul
        </h2>
<p className="text-zinc-400 text-sm mb-16 max-w-lg mx-auto leading-relaxed">
          Food is more than fuel; it is memory. Our menu is designed not for
          performance, but for pleasure. Rich, hearty, and unapologetic.
        </p>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-12 text-left">
<div className="menu-item group cursor-default border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white transition-colors">
                Brick Oven Chicken
              </h4>
<span className="text-sm font-semibold text-white/60">34</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
              Crispy potato, broccolini, garlic, chiles, jus. A Sunday staple.
            </p>
</div>
<div className="menu-item group cursor-default border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white transition-colors">
                The 35 Day Ribeye
              </h4>
<span className="text-sm font-semibold text-white/60">68</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
              Bone-in, truffle butter, roasted garlic. Restorative iron.
            </p>
</div>
<div className="menu-item group cursor-default border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white transition-colors">
                Heritage Pork Chop
              </h4>
<span className="text-sm font-semibold text-white/60">42</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
              Apple cider brine, mustard greens, bacon lardon.
            </p>
</div>
<div className="menu-item group cursor-default border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white transition-colors">
                Lobster Mac
              </h4>
<span className="text-sm font-semibold text-white/60">28</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
              Aged cheddar, gruyere, butter poached tail. Pure comfort.
            </p>
</div>
</div>
<div className="mt-12">
<button className="text-xs uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors border-b border-[#C5A059] pb-1 cursor-pointer" id="openMenuModal">
            View Full Menu
          </button>
</div>
</div>
</section>

<section className="bg-[#0C0A09] border-white/5 border-t pt-32 pb-32 relative" id="private-dining">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<div className="overflow-hidden aspect-[4/3] mb-8 relative group">
<img alt="Private Dining Room" className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-zinc-950/60 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d60b8d05-04de-4da1-b08b-ea3be7c9584b_1600w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="">
<span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              The Inner Sanctum
            </span>
<h2 className="font-serif text-4xl text-white mb-6 tracking-tight">
              Where Armor Is Removed.
            </h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The goal of our dining area is true community. We want our
              athletes to feel relaxed with their families. Our private dining
              spaces now include a curated wine tasting experience, a craft
              brewery room, and a hookah lounge, all designed for your comfort.
            </p>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Everyone is chasing what you have. Here, we ask for nothing. We
              serve you with deep consideration of your everyday battles. Escape
              from the pressure of society, bring your family, and find your
              peace here.
            </p>
<p className="text-zinc-500 text-sm leading-relaxed mb-8 italic">
              Our private chambers are acoustically treated to ensure that what
              is said here, stays here.
            </p>
<button className="inline-flex uppercase hover:bg-[#C5A059] hover:border-[#C5A059] transition-all cursor-pointer text-xs text-white tracking-widest border-white/20 border pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center" id="openPrivacyModal">
              Request Privacy
            </button>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/10 border-white/5 border-t pt-32 pb-32 relative gap-x-2 gap-y-2" id="membership">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="font-serif text-4xl text-white mb-6">The Inner Circle</h2>
<p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-12">
          Membership is not bought; it is earned through contribution to the
          culture of Michigan sports. We prioritize retired athletes, active
          roster players, and the families who navigate the everyday battles
          alongside them.
        </p>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<div className="p-8 border border-white/5 bg-zinc-950 hover:border-accent transition-colors text-left flex flex-col justify-between">
<div className="">
<h3 className="font-serif text-xl text-white mb-2">Legacy</h3>
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-6">
                Retired &amp; Alumni
              </p>
<p className="text-sm text-zinc-400 mb-6">
                For those who have hung up the cleats but still carry the
                spirit.
              </p>
</div>
<span className="block w-full py-3 text-center border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer" id="openMembershipLegacy">
              Inquire
            </span>
</div>
<div className="p-8 border border-accent bg-zinc-900/50 hover:bg-zinc-900 transition-colors text-left relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 w-16 h-16 bg-accent blur-[40px] opacity-20"></div>
<div className="">
<h3 className="font-serif text-xl text-white mb-2">Active Elite</h3>
<p className="text-xs text-[#0076B6] uppercase tracking-widest mb-6">
                Current Roster
              </p>
<p className="text-sm text-zinc-400 mb-6">
                A safe haven during the season. Priority access and absolute
                discretion.
              </p>
</div>
<span className="block w-full py-3 text-center bg-accent text-white text-xs uppercase tracking-widest hover:bg-[#A88B4D] transition-colors cursor-pointer" id="openMembershipActive">
              Verify Status
            </span>
</div>
<div className="p-8 border border-white/5 bg-zinc-950 hover:border-accent transition-colors text-left flex flex-col justify-between">
<div>
<h3 className="font-serif text-xl text-white mb-2">Family</h3>
<p className="text-xs text-[#C5A059] uppercase tracking-widest mb-6">
                Support System
              </p>
<p className="text-sm text-zinc-400 mb-6">
                For the spouses, parents, and children who support the legends
                through every battle.
              </p>
</div>
<span className="block w-full py-3 text-center border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer" id="openMembershipFamily">
              Join Family
            </span>
</div>
</div>
</div>
</section>

<footer className="py-20 border-t border-white/5 relative overflow-hidden bg-[#0C0A09]">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] w-full text-center pointer-events-none z-0 select-none">
<span className="font-serif text-[18vw] leading-none text-white/5 font-bold tracking-tighter uppercase whitespace-nowrap">
          Migliaccio
        </span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<span className="font-serif text-4xl text-white mb-4">MST</span>
<p className="font-serif text-xl italic text-white/50 mb-12 max-w-md">
          "We see you. We hear you. We serve you."
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] uppercase tracking-widest text-zinc-500 mb-12">
<a className="hover:text-white transition-colors" href="#">Press</a>
<a className="hover:text-white transition-colors" href="#">
            Private Events
          </a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">
            Member Portal
          </a>
</div>
<div className="w-full h-[1px] bg-white/5 max-w-xs mb-8"></div>
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">
          © 2024 Migliaccio Serenity Tavern. Detroit.
        </p>
</div>
</footer>



    </>
  );
}
