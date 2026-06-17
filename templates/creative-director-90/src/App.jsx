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



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle logic
        const menuBtn = document.querySelector('button.md\\:hidden');
        if(menuBtn) {
            menuBtn.addEventListener('click', () => {
                // Simple alert for prototype
                console.log('Toggle menu');
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
      

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all-300 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex flex-col leading-none group select-none" href="#">
<span className="brand-font font-extrabold text-2xl tracking-tighter text-canopy group-hover:text-storm transition-colors">DESIRE.</span>
<span className="brand-font font-semibold text-xs tracking-[0.2em] text-expedition mt-0.5">KOKUVI.AMOUZOU</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="bg-savanna text-white px-6 py-2.5 rounded text-sm font-medium tracking-wide hover-bg-savanna-dark transition-all-300 transform hover:-translate-y-0.5 shadow-sm" href="#contact">
                    Hire Me
                </a>
</div>

<button className="md:hidden text-storm">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Aerial view of ocean meeting forest" className="w-full h-full object-cover object-center scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/70 via-[#02745E]/50 to-[#1E3A5F]/80 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
<h1 className="brand-font font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
                I Build Stories That Matter.<br/>And I Do It With a Camera and a Kid on My Hip.
            </h1>
<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-md">
                Creative Director. Documentary Filmmaker. Solo Dad. From selling the Fraser Valley’s biggest Instagram to partnering with UFV on indigenous docs—I’m here to help your story cut through the noise.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<a className="w-full sm:w-auto bg-savanna text-white px-8 py-4 rounded text-base font-semibold tracking-wide hover-bg-savanna-dark transition-all-300 transform hover:-translate-y-1 shadow-lg text-center" href="#contact">
                    Hire Me for Your Project
                </a>
<a className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded text-base font-semibold tracking-wide hover:bg-white/20 transition-all-300 flex items-center justify-center gap-2 group" href="#community">
<span>Join the Community</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
<i className="w-8 h-8" data-lucide="chevron-down"></i>
</div>
</header>

<section className="py-20 md:py-28 bg-[#F4F7F7] px-6">
<div className="max-w-7xl mx-auto">
<h2 className="brand-font font-bold text-3xl md:text-5xl text-storm text-center mb-16 tracking-tight">
                From Fraser Valley Streets<br/>to Indigenous Stories
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded shadow-sm border-t-2 border-expedition hover:shadow-lg transition-all-300 group">
<div className="w-12 h-12 bg-expedition-10 rounded-full flex items-center justify-center mb-6 text-expedition group-hover:bg-expedition group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="brand-font font-semibold text-xl text-storm mb-3 tracking-tight">Built &amp; Sold</h3>
<p className="text-canopy leading-relaxed">Built and sold Fraser Valley Instagram when the platform was exploding into relevance.</p>
</div>

<div className="bg-white p-8 rounded shadow-sm border-t-2 border-expedition hover:shadow-lg transition-all-300 group">
<div className="w-12 h-12 bg-expedition-10 rounded-full flex items-center justify-center mb-6 text-expedition group-hover:bg-expedition group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="brand-font font-semibold text-xl text-storm mb-3 tracking-tight">Community Impact</h3>
<p className="text-canopy leading-relaxed">Created Find You in the Valley and partnered with Chilliwack Connect as their media partner.</p>
</div>

<div className="bg-white p-8 rounded shadow-sm border-t-2 border-expedition hover:shadow-lg transition-all-300 group">
<div className="w-12 h-12 bg-expedition-10 rounded-full flex items-center justify-center mb-6 text-expedition group-hover:bg-expedition group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="clapperboard"></i>
</div>
<h3 className="brand-font font-semibold text-xl text-storm mb-3 tracking-tight">Cultural Work</h3>
<p className="text-canopy leading-relaxed">Currently producing documentary work with UFV focusing on local Stolo indigenous stories.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white px-6">
<div className="max-w-7xl mx-auto">
<h2 className="brand-font font-bold text-3xl md:text-5xl text-storm text-center mb-16 tracking-tight">
                Three Ways to Work Together
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded p-8 shadow-lg border-t-4 border-heritage h-full flex flex-col hover:transform hover:scale-[1.01] transition-all-300">
<h3 className="brand-font font-semibold text-2xl text-storm mb-6 tracking-tight">Need a Creative Director Who Gets It</h3>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-heritage shrink-0 mt-0.5" data-lucide="check"></i>
<span>Brand videos that don’t feel like ads</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-heritage shrink-0 mt-0.5" data-lucide="check"></i>
<span>Documentary-style content creation</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-heritage shrink-0 mt-0.5" data-lucide="check"></i>
<span>Social media that actually connects</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-heritage shrink-0 mt-0.5" data-lucide="check"></i>
<span>Local to international clients</span>
</li>
</ul>
<a className="block w-full text-center bg-heritage text-white py-3 rounded font-semibold hover:bg-[#c29e55] transition-colors" href="#contact">Let’s Talk About Your Project</a>
</div>

<div className="bg-white rounded p-8 shadow-lg border-t-4 border-expedition h-full flex flex-col hover:transform hover:scale-[1.01] transition-all-300" id="community">
<h3 className="brand-font font-semibold text-2xl text-expedition mb-6 tracking-tight">Find You in the Valley</h3>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-expedition shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>Weekly local stories</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-expedition shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>Support local businesses</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-expedition shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>Connect with real people</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-expedition shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span>Be part of something bigger</span>
</li>
</ul>
<a className="block w-full text-center bg-expedition text-white py-3 rounded font-semibold hover-bg-expedition-dark transition-colors" href="#">Follow on Instagram</a>
</div>

<div className="bg-white rounded p-8 shadow-lg border-t-4 border-savanna h-full flex flex-col hover:transform hover:scale-[1.01] transition-all-300">
<h3 className="brand-font font-semibold text-2xl text-storm mb-6 tracking-tight">Learn How I Build Platforms</h3>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-savanna shrink-0 mt-0.5" data-lucide="zap"></i>
<span>Content strategy that works</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-savanna shrink-0 mt-0.5" data-lucide="zap"></i>
<span>Documentary techniques for brands</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-savanna shrink-0 mt-0.5" data-lucide="zap"></i>
<span>Building community through media</span>
</li>
<li className="flex items-start gap-3 text-canopy">
<i className="w-5 h-5 text-savanna shrink-0 mt-0.5" data-lucide="zap"></i>
<span>From idea to 10k+ followers</span>
</li>
</ul>
<a className="block w-full text-center bg-canopy text-white py-3 rounded font-semibold hover:bg-black transition-colors" href="#">Join the Waitlist</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-[#F4F7F7] px-6 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="brand-font font-bold text-3xl md:text-5xl text-storm mb-8 tracking-tight leading-tight">
                    Orphan to Creative Director. Because You Make Your Own Path.
                </h2>
<div className="prose prose-lg text-canopy space-y-6">
<p className="text-lg md:text-xl font-normal leading-relaxed">
                        I’m mixed heritage—African American and Okanagan. Lost my parents young. Built the Fraser Valley Instagram from nothing and sold it.
                    </p>
<p className="text-lg md:text-xl font-normal leading-relaxed">
                        Now I’m a solo dad raising my daughter while running Find You Media, Platfrm.ai, and partnering on indigenous documentary work with UFV. I serve clients from Edmonton to BC—cars, food, local services—all with a documentary soul.
                    </p>
<p className="text-lg md:text-xl font-normal leading-relaxed">
                        I didn’t have a traditional path. That’s why I can help you forge yours.
                    </p>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="relative rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group">
<img alt="Desiré and daughter" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://storage.googleapis.com/msgsndr/78JkThGwnYzbFuFgeU3Q/media/61dcad86a2655eba77a32311.jpeg"/>
<div className="absolute inset-0 bg-expedition/10 mix-blend-overlay pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white px-6">
<div className="max-w-7xl mx-auto">
<h2 className="brand-font font-bold text-3xl md:text-5xl text-storm mb-12 tracking-tight">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer">
<img alt="Car" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-10 transition-all duration-300 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-[-20px]">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase">Automotive</span>
</div>
<div className="absolute inset-0 bg-storm/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase mb-2">Automotive</span>
<p className="text-white font-normal">High-octane documentary storytelling for premium brands.</p>
<i className="text-white mt-4 w-10 h-10" data-lucide="play-circle"></i>
</div>
</div>

<div className="group relative aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer">
<img alt="Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-10 transition-all duration-300 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-[-20px]">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase">Local Food</span>
</div>
<div className="absolute inset-0 bg-storm/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase mb-2">Local Food</span>
<p className="text-white font-normal">Taste, culture, and community on a plate.</p>
<i className="text-white mt-4 w-10 h-10" data-lucide="play-circle"></i>
</div>
</div>

<div className="group relative aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer">
<img alt="Documentary" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&amp;w=2038&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-10 transition-all duration-300 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-[-20px]">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase">UFV Documentary</span>
</div>
<div className="absolute inset-0 bg-storm/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase mb-2">UFV Documentary</span>
<p className="text-white font-normal">Preserving Stolo stories through authentic film.</p>
<i className="text-white mt-4 w-10 h-10" data-lucide="play-circle"></i>
</div>
</div>

<div className="group relative aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer">
<img alt="Services" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-10 transition-all duration-300 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-[-20px]">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase">Local Services</span>
</div>
<div className="absolute inset-0 bg-storm/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase mb-2">Local Services</span>
<p className="text-white font-normal">Humanizing business with real stories.</p>
<i className="text-white mt-4 w-10 h-10" data-lucide="play-circle"></i>
</div>
</div>

<div className="group relative aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer">
<img alt="Brand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-10 transition-all duration-300 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-[-20px]">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase">Brand Strategy</span>
</div>
<div className="absolute inset-0 bg-storm/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase mb-2">Brand Strategy</span>
<p className="text-white font-normal">Strategic content that converts.</p>
<i className="text-white mt-4 w-10 h-10" data-lucide="play-circle"></i>
</div>
</div>

<div className="group relative aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer">
<img alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-10 transition-all duration-300 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-[-20px]">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase">Community</span>
</div>
<div className="absolute inset-0 bg-storm/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<span className="text-heritage font-semibold text-lg tracking-wide uppercase mb-2">Community</span>
<p className="text-white font-normal">Building bridges in the Fraser Valley.</p>
<i className="text-white mt-4 w-10 h-10" data-lucide="play-circle"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-expedition px-6" id="contact">
<div className="max-w-4xl mx-auto">
<h2 className="brand-font font-bold text-3xl md:text-5xl text-white text-center mb-12 tracking-tight">
                Let’s Figure Out If We’re a Fit
            </h2>
<div className="bg-white rounded p-8 md:p-12 border-[1px] border-heritage/50 shadow-2xl">

<div className="mb-10 pb-10 border-b border-gray-100">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<h3 className="brand-font font-semibold text-2xl md:text-3xl text-storm tracking-tight">30-Minute Clarity Call - Free</h3>
<span className="bg-heritage/20 text-storm font-semibold px-3 py-1 rounded text-sm uppercase tracking-wider">No Commitment</span>
</div>
<p className="text-canopy text-lg mb-0 font-normal">We’ll talk about your vision. I’ll tell you if I can help. If it’s right, we’ll map next steps. No pressure, no BS.</p>
</div>

<div className="mb-10">
<h4 className="brand-font font-semibold text-xl text-storm mb-4">Projects start at $2,500</h4>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
<li className="flex items-center gap-2 text-canopy font-normal">
<i className="w-5 h-5 text-expedition" data-lucide="check-circle"></i>
                            Discovery &amp; Strategy
                        </li>
<li className="flex items-center gap-2 text-canopy font-normal">
<i className="w-5 h-5 text-expedition" data-lucide="check-circle"></i>
                            Full production
                        </li>
<li className="flex items-center gap-2 text-canopy font-normal">
<i className="w-5 h-5 text-expedition" data-lucide="check-circle"></i>
                            Documentary-style delivery
                        </li>
<li className="flex items-center gap-2 text-canopy font-normal">
<i className="w-5 h-5 text-expedition" data-lucide="check-circle"></i>
                            Revisions included
                        </li>
</ul>
<p className="text-canopy/70 text-sm italic">Custom work available for bigger brands, longer documentaries, and ongoing content partnerships.</p>
</div>

<a className="block w-full bg-savanna text-white text-center py-4 rounded text-xl font-semibold hover-bg-savanna-dark transition-all-300 transform hover:scale-[1.01] shadow-lg" href="#">
                    Book Your Free Call
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-storm px-6">
<div className="max-w-5xl mx-auto text-center">
<h2 className="brand-font font-bold text-3xl md:text-5xl text-white mb-12 tracking-tight">
                Ready to Build Something Real?
            </h2>
<div className="flex flex-col md:flex-row justify-center gap-6 mb-16">

<a className="bg-savanna text-white px-8 py-4 rounded font-semibold tracking-wide hover-bg-savanna-dark transition-all-300 shadow-lg min-w-[200px]" href="#contact">
                    Hire Me
                </a>

<a className="border border-white/30 text-white px-8 py-4 rounded font-semibold tracking-wide hover:bg-white hover:text-storm transition-all-300 min-w-[200px]" href="#">
                    Join Community
                </a>

<a className="bg-expedition text-white px-8 py-4 rounded font-semibold tracking-wide hover-bg-expedition-dark transition-all-300 shadow-lg min-w-[200px]" href="#">
                    Get Course Updates
                </a>
</div>
<p className="text-xl md:text-2xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed brand-font">
                “I’m not perfect. I’m not corporate. But I’m all in. And if you are too, let’s make something that matters.”
            </p>
</div>
</section>

<footer className="bg-canopy pt-16 pb-8 px-6 border-t border-gray-800">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-gray-700 pb-12">

<div className="flex flex-col leading-none">
<span className="brand-font font-extrabold text-2xl tracking-tighter text-white">DESIRE.</span>
<span className="brand-font font-semibold text-xs tracking-[0.2em] text-expedition mt-0.5">KOKUVI.AMOUZOU</span>
</div>

<div className="text-center md:text-right">
<p className="text-white/80 text-lg font-normal mb-4">Stories that matter. Every single time.</p>
<a className="text-heritage hover:text-white transition-colors text-lg font-semibold" href="mailto:hello@desireamouzou.com">hello@desireamouzou.com</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-gray-500 text-sm">© 2025 Desiré Kokuvi Amouzou / Find You Media. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-heritage transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-gray-400 hover:text-heritage transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
