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
      

<nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="https://emergeusconference.com/">
<i className="w-5 h-5 text-[#CC9A18]" data-lucide="globe-2" strokeWidth="1.5"></i>
<span className="text-neutral-50 font-medium tracking-tight" style={{fontFamily: 'Georgia, serif'}}>EMERGE Us</span>
</a>
<a className="text-sm font-medium text-neutral-400 hover:text-neutral-50 transition-colors flex items-center gap-2" href="https://emergeusconference.com/" target="_blank">
                Visit Website
                <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<header className="pt-40 pb-24 px-6 lg:px-8 flex flex-col items-center text-center max-w-5xl mx-auto relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#CC9A18]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CC9A18]/30 bg-[#CC9A18]/10 text-[#CC9A18] text-xs font-medium uppercase tracking-widest mb-8">
<i className="w-3 h-3" data-lucide="sparkles" strokeWidth="1.5"></i>
            Global Mission
        </div>
<h1 className="text-4xl sm:text-5xl md:text-7xl text-neutral-50 font-semibold tracking-tight mb-8 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
            EMERGE Us Humanity <br/>
<span className="text-[#CC9A18]">International Conference</span>
</h1>
<p className="text-xl sm:text-2xl text-neutral-400 max-w-3xl font-medium tracking-tight">
            Restoring identity, activating purpose, and uplifting humanity through leadership, education, and service.
        </p>
</header>
<main className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32 pb-32">

<section className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-4 sticky top-32">
<h2 className="text-3xl sm:text-4xl text-neutral-50 font-semibold tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
                    Why We Are Making Africa Great Again
                </h2>
<div className="w-12 h-1 bg-[#CC9A18] mt-6 rounded-full"></div>
</div>
<div className="lg:col-span-8 space-y-8 text-lg leading-relaxed">
<p>
                    The movement to Make Africa Great Again is not simply a slogan. It is a global mission centered on restoring identity, activating purpose, and uplifting humanity through leadership, education, and service.
                </p>
<p>
                    At the heart of this movement is the understanding that every individual is born with a predestined identity and a predestined purpose given by the divine presence of Life Himself (GOD).
                </p>
<div className="pl-6 border-l-2 border-[#CC9A18]/40 py-2">
<p className="text-neutral-200">
                        When individuals rediscover who they truly are, they gain the clarity and courage needed to carry out the mission they were created to fulfill.
                    </p>
</div>
<p>
                    The EMERGE Us Humanity International Conference exists to help awaken that awareness across Africa and the global African diaspora.
                </p>
<p>
                    This awakening is rooted in the development of Christlike character, not in a religious sense but in a spiritual sense. It is the practice of cultivating wisdom, integrity, compassion, courage, and responsibility in everyday leadership.
                </p>
<p>
                    When leaders operate with Christlike character spiritually, they begin to reclaim what is known as the Kingdom Agenda. The Kingdom Agenda represents the restoration of dignity, leadership, purpose, and opportunity for individuals and communities. It is the work of rebuilding societies through knowledge, service, and moral leadership.
                </p>
<p className="text-neutral-100 font-medium">
                    When people walk in their purpose, they uplift communities, inspire future generations, and contribute to a better outcome for humanity. In doing so they help bring forward the glory for the outcome of everyone's story.
                </p>
</div>
</section>

<section className="space-y-24 pt-16 border-t border-neutral-800/50">

<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1 space-y-6 text-lg leading-relaxed">
<div>
<span className="text-[#CC9A18] text-sm font-medium uppercase tracking-widest block mb-2">Sovereign President</span>
<h3 className="text-3xl sm:text-4xl text-neutral-50 font-semibold tracking-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>
                            Prof. Dr. Waheed A. Musah
                        </h3>
</div>
<p>
                        Prof. Dr. Waheed A. MUSAH is an internationally respected scholar, educator, philosopher, and visionary leader whose work has influenced leadership development, educational transformation, and humanitarian advancement across Africa and beyond.
                    </p>
<p>
                        As the Sovereign President of THE B. L. A. C. K. Kings &amp; Queens Worldwide, Prof. Dr. MUSAH has dedicated his life to empowering individuals to reclaim their identity, develop intellectual excellence, and contribute meaningfully to society.
                    </p>
<p>
                        Through his teachings and global initiatives, he emphasizes understanding one's predestined identity and purpose and encourages the development of Christlike character spiritually—guiding individuals toward lives of purpose, compassion, courage, and service.
                    </p>
<p>
                        His work through THE B.L.A.C.K.W.O.O.D Worldwide Institute of Change and related global initiatives reflects his commitment to intellectual empowerment, cultural restoration, and leadership transformation.
                    </p>
</div>
<div className="order-1 lg:order-2">
<div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[3/4] relative group">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 z-10"></div>
<img alt="Prof. Dr. Waheed A. Musah" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#CC9A18]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-4xl relative z-10">
<span className="text-[#CC9A18] text-sm font-medium uppercase tracking-widest block mb-2">Co-President</span>
<h3 className="text-3xl sm:text-4xl text-neutral-50 font-semibold tracking-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>
                        Prof. Dr. Angela L. Harris
                    </h3>
<div className="space-y-6 text-lg leading-relaxed">
<p>
                            Prof. Dr. Angela L. Harris is a visionary leader, educational innovator, humanitarian advocate, and global change agent whose work has been dedicated to empowering communities, transforming education, and inspiring purpose-driven leadership.
                        </p>
<p>
                            She is the Co-Founder and Headmistress of Humanity Intellectual Academy &amp; College and Co-President of THE B. L. A. C. K. Kings &amp; Queens Worldwide.
                        </p>
<p>
                            Prof. Dr. Harris has played a pivotal role in building global initiatives that uplift individuals through education, leadership training, and humanitarian service. Her leadership emphasizes helping individuals rediscover their identity, unlock their intellectual potential, and step into their predestined purpose while developing Christlike character spiritually.
                        </p>
<p>
                            She is also a driving force behind the EMERGE Us Humanity International Conference, which brings together leaders, innovators, artists, educators, and humanitarian advocates dedicated to uplifting Africa and its global descendants.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 rounded-3xl bg-gradient-to-b from-neutral-900/30 to-transparent border border-neutral-800/50 text-center px-6 sm:px-12 relative overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#CC9A18]/50 to-transparent"></div>
<div className="max-w-4xl mx-auto">
<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-8 shadow-inner shadow-[#CC9A18]/10">
<i className="w-8 h-8 text-[#CC9A18]" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl sm:text-4xl text-neutral-50 font-semibold tracking-tight mb-10" style={{fontFamily: 'Georgia, serif'}}>
                    The WahAngela Kingdom Leadership Alignment
                </h2>
<div className="space-y-6 text-lg leading-relaxed text-neutral-300">
<p>
                        Together Prof. Dr. Waheed A. MUSAH and Prof. Dr. Angela L. Harris represent a unified leadership alignment known as the WahAngela Kingdom.
                    </p>
<p>
                        The WahAngela Kingdom symbolizes a partnership of vision, purpose, and leadership dedicated to uplifting Africa and guiding individuals toward rediscovering their identity and mission in life.
                    </p>
<p>
                        Through their shared leadership, institutions such as the Pan Africa Diplomatic Commission, THE B. L. A. C. K. Kings &amp; Queens Worldwide, Humanity Intellectual Academy &amp; College, and THE B.L.A.C.K.W.O.O.D Worldwide Institute of Change continue to inspire transformation across communities around the world.
                    </p>
<p className="text-neutral-100 font-medium">
                        Their work represents a commitment to building a future where leadership is guided by purpose, education strengthens communities, and individuals rise to fulfill the mission they were created to carry out—helping move humanity forward while making Africa great again.
                    </p>
</div>
</div>
</section>
</main>
<footer className="border-t border-neutral-800/50 py-12 text-center text-neutral-500 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
<i className="w-6 h-6 text-[#CC9A18]/50" data-lucide="globe-2" strokeWidth="1.5"></i>
<p className="tracking-tight text-neutral-400" style={{fontFamily: 'Georgia, serif'}}>EMERGE Us Humanity International Conference</p>
</div>
</footer>


    </>
  );
}
