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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              document.write(new Date().getFullYear())
            


      // Reduced motion guard
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Scroll Reveal Logic based on DESIGN.md (fadeInUp)
      if (!reduceMotion) {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const revealObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      entry.target.classList.remove('opacity-0', 'translate-y-8');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => {
              el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
              revealObserver.observe(el);
          });
      }

      // Back to top visibility toggle
      const backToTopBtn = document.getElementById('backToTop');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
              backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
              backToTopBtn.classList.add('opacity-100');
          } else {
              backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
              backToTopBtn.classList.remove('opacity-100');
          }
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
      

<div className="bg-[#212529] text-[#f8f9fa] py-2 px-6 text-xs hidden md:block">
<div className="max-w-[1320px] mx-auto flex justify-between items-center">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 transition-colors hover:text-[#dc3545]" href="mailto:info@aspireacademyrw.org">
<iconify-icon height="16" icon="lucide:mail" width="16"></iconify-icon>
            info@aspireacademyrw.org
          </a>
<span className="flex items-center gap-2">
<iconify-icon height="16" icon="lucide:map-pin" width="16"></iconify-icon>
            Gitagata, Bugesera District, Rwanda
          </span>
</div>
<div className="flex items-center gap-4">
<a aria-label="Facebook" className="transition-colors hover:text-[#dc3545]" href="https://www.facebook.com/AspireAcademyRwanda" target="_blank">
<iconify-icon height="16" icon="mdi:facebook" width="16"></iconify-icon>
</a>
<a aria-label="Instagram" className="transition-colors hover:text-[#dc3545]" href="https://www.instagram.com/aspireacademy_rwanda" target="_blank">
<iconify-icon height="16" icon="mdi:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm transition-all duration-300">
<div className="max-w-[1320px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3" href="/">
<img alt="Aspire Academy" className="h-12 w-auto object-contain" src="https://aspireacademyrw.org/assets/images/logo.png"/>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider text-[#6c757d]">
<a className="text-[#212529] transition-colors hover:text-[#dc3545]" href="#">
            Home
          </a>
<a className="transition-colors hover:text-[#dc3545]" href="#">
            Our Story
          </a>
<a className="transition-colors hover:text-[#dc3545]" href="#">
            Our Impact
          </a>
<a className="transition-colors hover:text-[#dc3545]" href="#">
            Get Involved
          </a>
<a className="transition-colors hover:text-[#dc3545]" href="#">
            Resource Center
          </a>
</nav>
<div className="flex items-center gap-3 md:gap-4">
<a className="text-[12px] md:text-sm text-[#212529] font-medium transition-colors hover:text-[#dc3545] whitespace-nowrap hidden sm:block" href="https://givebutter.com/building-fund-qw6dyi" target="_blank">
            Build the Campus
          </a>
<a className="transition-colors text-[12px] md:text-sm text-white text-left bg-[#dc3545] rounded px-3 py-2 md:px-5 md:py-2.5 shadow-sm hover:bg-[#b02a37] whitespace-nowrap" href="https://givebutter.com/child-sponsorships-nvep9y" target="_blank">
            Sponsor a Classroom
          </a>
</div>
<button aria-label="Menu" className="lg:hidden text-[#212529] p-2">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow">

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<img alt="Students in community" className="absolute inset-0 w-full h-full object-cover" src="https://aspireacademyrw.org/assets/images/Our%20Community.jpg"/>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 max-w-[1320px] mx-auto px-6 text-center text-white reveal w-full transition-all duration-700 ease-out">
<h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Creating Pathways to Opportunity
          </h1>
<p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed text-orange-200">
            Aspire Academy partners with children and families in Bugesera,
            Rwanda, providing Christ-centered education, nutrition support, and
            a nurturing community where children can learn, grow, and flourish.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-white px-8 py-3.5 rounded text-sm transition-colors shadow-sm flex items-center justify-center gap-2 bg-[#dc3545] hover:bg-[#b02a37]" href="https://givebutter.com/child-sponsorships-nvep9y">
              Sponsor a Classroom
              <iconify-icon height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-3.5 rounded text-sm hover:bg-white/20 transition-colors flex items-center justify-center" href="https://givebutter.com/building-fund-qw6dyi">
              Build the Future Campus
            </a>
</div>
</div>
</section>
<div className="bg-[#dc3545] text-white py-8 px-6 relative z-20 border-b border-black/10">
<div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
<div className="py-2 flex flex-col items-center text-center">
<iconify-icon className="text-white/80 mb-3 block mx-auto" height="32" icon="lucide:users" width="32"></iconify-icon>
<h3 className="text-4xl font-normal tracking-tight mb-2">120</h3>
<p className="text-sm text-white/90 uppercase tracking-wider font-medium">
              Students Served
            </p>
</div>
<div className="py-2 flex flex-col items-center text-center">
<iconify-icon className="text-white/80 mb-3 block mx-auto" height="32" icon="lucide:utensils" width="32"></iconify-icon>
<h3 className="text-4xl font-normal tracking-tight mb-2">45,600</h3>
<p className="text-sm text-white/90 uppercase tracking-wider font-medium">
              Meals Provided Annually
            </p>
</div>
<div className="py-2 flex flex-col items-center text-center">
<iconify-icon className="text-white/80 mb-3 block mx-auto" height="32" icon="lucide:school" width="32"></iconify-icon>
<h3 className="text-4xl font-normal tracking-tight mb-2">5</h3>
<p className="text-sm text-white/90 uppercase tracking-wider font-medium">
              Classrooms by Sept 2026
            </p>
</div>
</div>
</div>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-[1320px] mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal relative transition-all duration-700 ease-out opacity-0 translate-y-8">
<div className="absolute -inset-4 bg-light rounded transform -rotate-2 -z-10"></div>
<img alt="Students accessing education" className="w-full h-[500px] object-cover rounded shadow-sm border border-black/10" src="https://aspireacademyrw.org/assets/images/Acess.jpg"/>
</div>
<div className="reveal delay-100 transition-all duration-700 ease-out opacity-0 translate-y-8">
<span className="text-[#dc3545] text-sm uppercase tracking-wider mb-2 block">
                Creating Pathways
              </span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6 text-[#212529]">
                Removing Barriers, Creating Pathways
              </h2>
<div className="text-secondary space-y-6 text-base leading-relaxed">
<p>
                  Every child has immense God-given potential, but accessing
                  quality education can sometimes be out of reach. We believe
                  that when children are provided with the right environment,
                  resources, and care, they can achieve extraordinary things.
                </p>
<p className="">
                  Aspire Academy creates pathways toward flourishing through
                  Christ-centered education, comprehensive nutrition support,
                  intentional character development, and deep community
                  partnership. We are not just operating a school; we are
                  building a foundation for generational change.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 p-6 bg-light rounded border border-black/5">
<div className="text-center flex flex-col items-center">
<iconify-icon className="text-[#dc3545] mb-3 block mx-auto" height="28" icon="lucide:users" width="28"></iconify-icon>
<h3 className="text-3xl font-normal tracking-tight mb-1 text-[#dc3545]">
                    120
                  </h3>
<p className="text-xs text-[#212529] font-medium uppercase tracking-wider">
                    Students Served
                  </p>
<p className="text-xs text-secondary mt-1">
                    Preschool through P4
                  </p>
</div>
<div className="text-center flex flex-col items-center">
<iconify-icon className="text-[#dc3545] mb-3 block mx-auto" height="28" icon="lucide:school" width="28"></iconify-icon>
<h3 className="text-3xl font-normal tracking-tight mb-1 text-[#dc3545]">
                    5
                  </h3>
<p className="text-xs text-[#212529] font-medium uppercase tracking-wider">
                    Classrooms
                  </p>
<p className="text-xs text-secondary mt-1">
                    Growing one each year
                  </p>
</div>
<div className="col-span-2 md:col-span-1 text-center flex flex-col items-center">
<iconify-icon className="text-[#dc3545] mb-3 block mx-auto" height="28" icon="lucide:utensils" width="28"></iconify-icon>
<h3 className="text-3xl font-normal tracking-tight mb-1 text-[#dc3545]">
                    45.6k
                  </h3>
<p className="text-xs text-[#212529] font-medium uppercase tracking-wider">
                    Meals Annually
                  </p>
<p className="text-xs text-secondary mt-1">
                    Breakfast &amp; lunch daily
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-white border-t border-black/5" id="growth">
<div className="max-w-[1320px] mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#dc3545] text-sm uppercase tracking-wider mb-2 block">
              Our Growth Model
            </span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#212529]">
              Growing One Classroom at a Time
            </h2>
<p className="text-secondary text-base leading-relaxed">
              Aspire Academy opened in December 2023 with a simple vision:
              provide high-quality, Christ-centered education to children who
              face significant barriers to educational opportunity. Rather than
              growing rapidly, we follow a deliberate model of sustainable
              growth by adding one new classroom each year. This approach
              ensures that every child receives the care, attention, and
              educational support needed to thrive. By September 2026, Aspire
              Academy will serve children across Preschool, Primary 1, Primary
              2, Primary 3, and Primary 4, creating strong foundations for
              learning, character, and lifelong opportunity.
            </p>
</div>
<div className="relative">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-light p-6 rounded border border-black/5 text-center relative overflow-hidden">
<div className="w-full h-1 bg-[#dc3545]/20 absolute top-0 left-0"></div>
<p className="text-[#dc3545] font-medium text-sm mb-2 mt-2">
                  December 2023
                </p>
<h3 className="text-lg font-normal tracking-tight text-[#212529] mb-1">
                  Preschool Opens
                </h3>
<p className="text-2xl font-normal text-[#212529] mb-1">24</p>
<p className="text-xs text-secondary uppercase tracking-wider">
                  Students
                </p>
</div>
<div className="bg-light p-6 rounded border border-black/5 text-center relative overflow-hidden">
<div className="w-full h-1 bg-[#dc3545]/40 absolute top-0 left-0"></div>
<p className="text-[#dc3545] font-medium text-sm mb-2 mt-2">2024</p>
<h3 className="text-lg font-normal tracking-tight text-[#212529] mb-1">
                  Preschool + Primary 1
                </h3>
<p className="text-2xl font-normal text-[#212529] mb-1">48</p>
<p className="text-xs text-secondary uppercase tracking-wider">
                  Students
                </p>
</div>
<div className="bg-light p-6 rounded border border-black/5 text-center relative overflow-hidden">
<div className="w-full h-1 bg-[#dc3545]/70 absolute top-0 left-0"></div>
<p className="text-[#dc3545] font-medium text-sm mb-2 mt-2">2025</p>
<h3 className="text-lg font-normal tracking-tight text-[#212529] mb-1">
                  Preschool to Primary 2
                </h3>
<p className="text-2xl font-normal text-[#212529] mb-1">72</p>
<p className="text-xs text-secondary uppercase tracking-wider">
                  Students
                </p>
</div>
<div className="bg-[#dc3545] p-6 rounded border border-[#dc3545] shadow-md text-center relative overflow-hidden text-white transform lg:-translate-y-2 transition-transform">
<div className="w-full h-1 bg-white/30 absolute top-0 left-0"></div>
<p className="text-white/90 font-medium text-sm mb-2 mt-2">
                  September 2026
                </p>
<h3 className="text-lg font-normal tracking-tight mb-1">
                  Preschool to Primary 4
                </h3>
<p className="text-3xl font-normal mb-1">120</p>
<p className="text-xs text-white/80 uppercase tracking-wider">
                  Students
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-light border-t border-black/5" id="who-we-are">
<div className="max-w-[1320px] mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#212529]">
              Who We Are
            </h2>
<p className="text-secondary text-base">
              Guided by faith and a commitment to transformation, we are
              building a foundation for generational change in Rwanda.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-12 mb-20">
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545]">
<iconify-icon height="24" icon="lucide:eye" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-4 text-[#212529]">
                Our Vision
              </h3>
<p className="text-secondary leading-relaxed">
                Our vision is to inspire and equip each child to develop their
                God-given gifts to embrace their social-cultural diversity and
                live out a biblical worldview.
              </p>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-100 opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545]">
<iconify-icon height="24" icon="lucide:target" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-4 text-[#212529]">
                Our Mission
              </h3>
<p className="text-secondary leading-relaxed">
                Our mission is to provide whole child, Christ-centered,
                transformative education that encourages students to excel
                academically, and model critical thinking and problem-solving
                within their community.
              </p>
</div>
</div>
<div className="text-center max-w-3xl mx-auto mb-12 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h3 className="text-2xl md:text-3xl font-normal tracking-tight mb-4 text-[#212529]">
              Our Core Values
            </h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545] flex-shrink-0">
<iconify-icon height="24" icon="lucide:book-heart" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-2 text-[#212529]">
                Christ-Centeredness
              </h4>
<p className="text-sm italic text-[#dc3545] mb-4">
                "Placing Christ at the heart of all we do, guiding our
                decisions, relationships, and actions."
              </p>
<p className="text-secondary text-sm mb-3 leading-relaxed">
<strong className="text-[#212529] font-medium">Description:</strong>
                Our education is rooted in a biblical worldview, embracing the
                truth that Jesus Christ is the foundation for all knowledge and
                the way to eternal life.
              </p>
<p className="text-secondary text-sm mb-6 leading-relaxed">
<strong className="text-[#212529] font-medium">Outcome:</strong>
                Students can articulate their faith in Christ and apply it to
                their daily decisions, academic pursuits, and interactions with
                others.
              </p>
<div className="pt-4 border-t border-black/5 mt-auto w-full">
<p className="text-xs font-medium uppercase tracking-wider text-[#dc3545] mb-1">
                  Biblical Foundation
                </p>
<p className="text-sm text-secondary">
                  John 14:6, Ephesians 1:18-22
                </p>
</div>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-100 opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545] flex-shrink-0">
<iconify-icon height="24" icon="lucide:award" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-2 text-[#212529]">
                Excellence
              </h4>
<p className="text-sm italic text-[#dc3545] mb-4">
                "Striving for the highest standards in academics, character, and
                service, reflecting God’s glory in all our endeavors."
              </p>
<p className="text-secondary text-sm mb-3 leading-relaxed">
<strong className="text-[#212529] font-medium">Description:</strong>
                We are committed to nurturing each student’s unique God-given
                talents, encouraging personal growth in all areas of
                life—academic, spiritual, social, and emotional.
              </p>
<p className="text-secondary text-sm mb-6 leading-relaxed">
<strong className="text-[#212529] font-medium">Outcome:</strong>
                Students can identify and develop their individual strengths,
                set personal goals, and pursue growth in a way that honors God’s
                design for them.
              </p>
<div className="pt-4 border-t border-black/5 mt-auto w-full">
<p className="text-xs font-medium uppercase tracking-wider text-[#dc3545] mb-1">
                  Biblical Foundation
                </p>
<p className="text-sm text-secondary">Psalm 139:13-14</p>
</div>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545] flex-shrink-0">
<iconify-icon height="24" icon="lucide:shield" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-2 text-[#212529]">
                Resilience
              </h4>
<p className="text-sm italic text-[#dc3545] mb-4">
                "Cultivating the strength and perseverance to overcome
                challenges, empowered by faith and hope."
              </p>
<p className="text-secondary text-sm mb-3 leading-relaxed">
<strong className="text-[#212529] font-medium">Description:</strong>
                We are dedicated to building resilience in our students, helping
                them to develop the strength, perseverance, and faith necessary
                to face and overcome life's challenges. By instilling a spirit
                of hope and endurance, we equip students to navigate adversity
                with confidence and trust in God's plan for their lives.
              </p>
<p className="text-secondary text-sm mb-6 leading-relaxed">
<strong className="text-[#212529] font-medium">Outcome:</strong>
                Students can demonstrate the ability to remain steadfast in the
                face of challenges, drawing on their faith to overcome obstacles
                and persevere through difficulties. They learn to adapt to
                changing circumstances while maintaining hope and a positive
                outlook, trusting in God’s promises.
              </p>
<div className="pt-4 border-t border-black/5 mt-auto w-full">
<p className="text-xs font-medium uppercase tracking-wider text-[#dc3545] mb-1">
                  Biblical Foundation
                </p>
<p className="text-sm text-secondary">James 1:2-4 (NLT)</p>
</div>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-100 opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545] flex-shrink-0">
<iconify-icon height="24" icon="lucide:users" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-2 text-[#212529]">
                Community
              </h4>
<p className="text-sm italic text-[#dc3545] mb-4">
                "Fostering a loving and inclusive environment where every
                individual is valued, supported, and encouraged to grow to serve
                within the school and the broader community."
              </p>
<p className="text-secondary text-sm mb-3 leading-relaxed">
<strong className="text-[#212529] font-medium">Description:</strong>
                We value our local and global communities, respecting and
                celebrating the diversity of God's creation, while encouraging
                students to be active and responsible citizens.
              </p>
<p className="text-secondary text-sm mb-6 leading-relaxed">
<strong className="text-[#212529] font-medium">Outcome:</strong>
                Students can recognize and appreciate the image of God in
                others, engage respectfully with diverse cultures, and
                contribute to their community and the world.
              </p>
<div className="pt-4 border-t border-black/5 mt-auto w-full">
<p className="text-xs font-medium uppercase tracking-wider text-[#dc3545] mb-1">
                  Biblical Foundation
                </p>
<p className="text-sm text-secondary">
                  Genesis 1:27, Matthew 28:18-20
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-black/5 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1320px] mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#212529]">
              Whole Child Development
            </h2>
<p className="text-secondary text-base">
              Our approach goes beyond the classroom, ensuring every student has
              the holistic support needed to thrive academically, physically,
              and spiritually.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal transition-all duration-700 ease-out opacity-0 translate-y-8 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545]">
<iconify-icon height="24" icon="lucide:book-open" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-[#212529]">
                Excellence in Education
              </h3>
<p className="text-secondary text-sm leading-relaxed">
                Providing high-quality, rigorous academic instruction tailored
                to empower critical thinking and lifelong learning.
              </p>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-100 transition-all duration-700 ease-out opacity-0 translate-y-8 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-[#dc3545]/10 text-[#dc3545] rounded flex items-center justify-center mb-6">
<iconify-icon height="24" icon="lucide:apple" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-[#212529]">
                Nutrition Support
              </h3>
<p className="text-secondary text-sm leading-relaxed">
                Ensuring every child receives daily, nutritious meals to support
                cognitive development and physical health.
              </p>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-200 transition-all duration-700 ease-out opacity-0 translate-y-8 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545]">
<iconify-icon height="24" icon="lucide:heart" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-[#212529]">
                Character Formation
              </h3>
<p className="text-secondary text-sm leading-relaxed">
                Cultivating integrity, compassion, and resilience rooted in
                Christ-centered values and biblical teaching.
              </p>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 bg-[#dc3545]/10 text-[#dc3545] rounded flex items-center justify-center mb-6">
<iconify-icon height="24" icon="lucide:star" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-[#212529]">
                Strong Foundations
              </h3>
<p className="text-secondary text-sm leading-relaxed">
                Equipping students with strong foundations for lifelong
                learning, giving them the confidence and skills to thrive in
                their communities.
              </p>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-100 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 rounded flex items-center justify-center mb-6 bg-[#dc3545]/10 text-[#dc3545]">
<iconify-icon height="24" icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-[#212529]">
                Family Partnership
              </h3>
<p className="text-secondary text-sm leading-relaxed">
                Working collaboratively with parents and guardians to create a
                supportive home environment for student success.
              </p>
</div>
<div className="bg-white p-8 rounded border border-black/10 shadow-sm hover:-translate-y-1 transition-transform duration-300 reveal delay-200 transition-all duration-700 ease-out flex flex-col items-center text-center">
<div className="w-12 h-12 bg-[#dc3545]/10 text-[#dc3545] rounded flex items-center justify-center mb-6">
<img alt="Community Icon" className="w-6 h-6 object-contain block mx-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43f98bf8-a2cd-4d52-9136-3f6c88ed7a16_320w.png"/>
</div>
<h3 className="text-xl font-normal tracking-tight mb-3 text-[#212529]">
                Community Transformation
              </h3>
<p className="text-secondary text-sm leading-relaxed">
                Engaging the broader community through sustainable initiatives
                that uplift families and strengthen the local economy.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#f8f9fa] border-t border-black/5" id="nutrition">
<div className="max-w-[1320px] mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#dc3545] text-sm uppercase tracking-wider mb-2 block">
                Nutrition Program
              </span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6 text-[#212529]">
                Nourishing Learning
              </h2>
<div className="text-secondary space-y-4 text-base leading-relaxed mb-8">
<p>
                  At Aspire Academy, education and nutrition go hand in hand.
                </p>
<p>
                  Children learn best when they are healthy, nourished, and
                  ready to engage in the classroom. To support the whole child,
                  Aspire Academy provides two nutritious meals every school
                  day—breakfast and lunch.
                </p>
<p>
                  This commitment helps create an environment where children can
                  focus on learning, build healthy habits, and flourish
                  academically and socially.
                </p>
</div>
<div className="bg-white p-6 rounded border border-black/10 shadow-sm flex flex-col items-center gap-6 text-center">
<div className="w-16 h-16 rounded-full bg-[#dc3545]/10 flex items-center justify-center text-[#dc3545] flex-shrink-0">
<iconify-icon height="32" icon="lucide:utensils" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-3xl font-normal tracking-tight text-[#dc3545] mb-1">
                    45,600
                  </h3>
<p className="text-sm font-medium text-[#212529] uppercase tracking-wider mb-2">
                    Meals Served Annually
                  </p>
<p className="text-xs text-secondary leading-relaxed">
                    With 120 students enrolled across Preschool through Primary
                    4, Aspire Academy provides approximately 45,600 nutritious
                    meals every year through its daily breakfast and lunch
                    program.
                  </p>
</div>
</div>
</div>
<div className="relative">
<img alt="Students flourishing" className="w-full h-[500px] object-cover rounded shadow-sm border border-black/10" src="https://aspireacademyrw.org/assets/images/Acess.jpg"/>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-white overflow-hidden" id="sponsor">
<div className="max-w-[1320px] mx-auto">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="reveal order-2 lg:order-1 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6 text-[#212529]">
                What Your Sponsorship Makes Possible
              </h2>
<p className="text-secondary text-base mb-8 leading-relaxed">
                Classroom sponsorship helps provide quality teaching, learning
                materials, classroom resources, student meals, character
                formation, safe learning environments, and lasting educational
                opportunity.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
<div className="bg-light p-5 rounded border border-black/5 text-center">
<iconify-icon className="text-[#dc3545] mb-3 block mx-auto" height="32" icon="lucide:users" width="32"></iconify-icon>
<h4 className="text-2xl font-normal text-[#212529] mb-1 tracking-tight">
                    120
                  </h4>
<p className="text-xs text-secondary uppercase tracking-wider font-medium">
                    Children Learning
                  </p>
</div>
<div className="bg-light p-5 rounded border border-black/5 text-center">
<iconify-icon className="text-[#dc3545] mb-3 block mx-auto" height="32" icon="lucide:utensils" width="32"></iconify-icon>
<h4 className="text-2xl font-normal text-[#212529] mb-1 tracking-tight">
                    45,600
                  </h4>
<p className="text-xs text-secondary uppercase tracking-wider font-medium">
                    Meals Annually
                  </p>
</div>
<div className="bg-light p-5 rounded border border-black/5 text-center">
<iconify-icon className="text-[#dc3545] mb-3 block mx-auto" height="32" icon="lucide:school" width="32"></iconify-icon>
<h4 className="text-2xl font-normal text-[#212529] mb-1 tracking-tight">
                    5
                  </h4>
<p className="text-xs text-secondary uppercase tracking-wider font-medium">
                    Classrooms
                  </p>
</div>
</div>
<a className="inline-flex text-white px-8 py-3.5 rounded text-sm transition-colors shadow-sm items-center gap-2 bg-[#dc3545] hover:bg-[#b02a37]" href="https://givebutter.com/child-sponsorships-nvep9y">
                Sponsor a Classroom Today
                <iconify-icon height="18" icon="lucide:heart" width="18"></iconify-icon>
</a>
</div>
<div className="reveal delay-100 order-1 lg:order-2 relative transition-all duration-700 ease-out">
<img alt="Student support" className="w-full h-[500px] object-cover rounded shadow-sm border border-black/10" src="https://aspireacademyrw.org/assets/images/waiting.JPG"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#212529] text-white overflow-hidden relative" id="build">

<div className="max-w-[1320px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal relative transition-all duration-700 ease-out opacity-0 translate-y-8">
<img alt="Campus Masterplan Aerial" className="w-full h-[400px] md:h-[500px] object-cover rounded border border-white/10 shadow-lg opacity-90 hover:opacity-100 transition-opacity" src="https://aspireacademyrw.org/assets/images/Aerial%202.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xs px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block bg-[#dc3545]">
                  Phase 1
                </span>
<h4 className="text-xl font-normal tracking-tight">
                  Primary School Block
                </h4>
</div>
</div>
<div className="reveal delay-100 transition-all duration-700 ease-out opacity-0 translate-y-8">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">
                Building for the Next Generation of Learners
              </h2>
<p className="text-base mb-10 leading-relaxed text-orange-400">
                Aspire Academy's growth model requires facilities that can
                support each new classroom as students progress through primary
                school. Every classroom built creates new opportunities for
                children to learn, grow, and flourish. We are constructing a
                permanent home with modern classrooms, a library, sports
                facilities, and agricultural learning centers to expand our
                capacity.
              </p>
<div className="grid grid-cols-2 gap-4 mb-10 text-sm">
<div className="bg-white/5 p-5 rounded border border-white/10">
<p className="text-orange-300 mb-1 font-medium uppercase tracking-wider text-xs">
                    Current Capacity
                  </p>
<p className="text-2xl text-white font-normal tracking-tight mb-1">
                    120 Students
                  </p>
<p className="text-xs text-white/70">5 Classrooms Operating</p>
</div>
<div className="bg-white/5 p-5 rounded border border-white/10">
<p className="text-orange-300 mb-1 font-medium uppercase tracking-wider text-xs">
                    Future Capacity
                  </p>
<p className="text-2xl text-white font-normal tracking-tight mb-1">
                    350+ Students
                  </p>
<p className="text-xs text-white/70">Complete Primary Campus</p>
</div>
</div>

<div className="mb-12 bg-white/5 p-6 rounded border border-white/10">
<div className="flex justify-between text-sm mb-8 text-orange-300">
<span>Phase 1 Funding Goal</span>
<span className="text-white font-medium">$250,000</span>
</div>
<div className="progress-bar-wrap mb-4">
<div className="progress-bar-fill" style={{width: '65%'}}>
<div className="progress-tip">65%</div>
</div>
</div>
<p className="text-xs mt-2 text-right text-orange-400">
                  Raised: $162,500
                </p>
</div>
<a className="inline-flex bg-white text-[#212529] px-8 py-3.5 rounded text-sm transition-colors shadow-sm items-center gap-2 hover:bg-orange-100" href="https://givebutter.com/building-fund-qw6dyi">
                Build the Campus
                <iconify-icon height="18" icon="lucide:building" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1320px] mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#212529]">
              Building Sustainable Communities
            </h2>
<p className="text-secondary text-base">
              Education creates opportunity, while sustainable development
              ensures long-term resilience. We invest in community
              infrastructure that removes barriers and empowers families to
              flourish.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="group cursor-pointer reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="relative overflow-hidden rounded mb-6 border border-black/10">
<img alt="Agriculture Initiative" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://aspireacademyrw.org/assets/images/growth.JPG"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-[#212529]">
                Agriculture Supports Families
              </h3>
<p className="text-secondary text-sm leading-relaxed mb-4">
                Our school farming projects serve a dual purpose: providing
                fresh produce for student meals and serving as a hands-on
                agricultural education center for the community to improve local
                food security.
              </p>
<a className="text-sm flex items-center gap-1 group-hover:gap-2 transition-all text-[#dc3545]" href="#">
                Learn more
                <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="group cursor-pointer reveal delay-100 opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="relative overflow-hidden rounded mb-6 border border-black/10">
<img alt="Water Initiative" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://aspireacademyrw.org/assets/images/provety.JPG"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-[#212529]">
                Water Strengthens Communities
              </h3>
<p className="text-secondary text-sm leading-relaxed mb-4">
                Clean water is foundational to health and education. We develop
                vital water infrastructure that brings safe, accessible drinking
                water to the school campus and the surrounding community.
              </p>
<a className="text-sm flex items-center gap-1 group-hover:gap-2 transition-all text-[#dc3545]" href="#">
                Learn more
                <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-light border-y border-black/5">
<div className="max-w-[1320px] mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#212529]">
                Leadership Driven by Purpose
              </h2>
<p className="text-secondary text-base">
                Founded by visionaries deeply committed to the people of Rwanda,
                our leadership team brings professional expertise and a profound
                sense of calling to the mission.
              </p>
</div>
<a className="mt-6 md:mt-0 text-sm flex items-center gap-2 hover:underline text-[#dc3545]" href="#">
              Meet the full team
              <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16">
<div className="flex gap-6 items-start reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<img alt="Ivan Mbaraga" className="w-24 h-24 rounded-full object-cover border border-black/10 shadow-sm flex-shrink-0" src="https://aspireacademyrw.org/assets/images/ivan.png"/>
<div>
<h4 className="text-lg font-normal tracking-tight text-[#212529]">
                  Ivan Mbaraga
                </h4>
<p className="text-xs text-[#dc3545] uppercase tracking-wider mb-3 block">
                  Co-Founder &amp; Director
                </p>
<p className="text-sm text-secondary leading-relaxed">
                  Dedicated to transforming educational access and fostering
                  growth and flourishing among Rwandan youth through sustainable
                  community development.
                </p>
</div>
</div>
<div className="flex gap-6 items-start reveal delay-100 opacity-0 translate-y-8 transition-all duration-700 ease-out">
<img alt="Jordan Mbaraga" className="w-24 h-24 rounded-full object-cover border border-black/10 shadow-sm flex-shrink-0" src="https://aspireacademyrw.org/assets/images/jordan.png"/>
<div>
<h4 className="text-lg font-normal tracking-tight text-[#212529]">
                  Jordan Mbaraga
                </h4>
<p className="text-xs text-[#dc3545] uppercase tracking-wider mb-3 block">
                  Co-Founder
                </p>
<p className="text-sm text-secondary leading-relaxed">
                  Passionate about holistic child development, ensuring every
                  student receives the care, nutrition, and mentorship needed to
                  succeed.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-white text-center bg-[#dc3545]">
<div className="max-w-3xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<iconify-icon className="mb-6 opacity-80" height="48" icon="lucide:users" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-6">
            Join Us in Creating Pathways to Opportunity
          </h2>
<p className="text-lg mb-10 leading-relaxed font-light text-white/80">
            Your partnership makes this transformation possible. Whether through
            classroom sponsorship, contributing to the campus build, or faithful
            prayer, you have a place in this story.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white px-8 py-3.5 rounded text-sm transition-colors shadow-sm hover:bg-orange-100 text-[#dc3545]" href="https://givebutter.com/child-sponsorships-nvep9y">
              Sponsor a Classroom
            </a>
<a className="w-full sm:w-auto bg-transparent border border-white text-white px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors" href="https://givebutter.com/building-fund-qw6dyi">
              Build the Campus
            </a>
</div>
</div>
</section>
</main>

<section className="py-16 px-6 bg-[#f8f9fa] text-center border-t border-black/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#212529]">
          Follow Aspire Academy's Journey
        </h2>
<p className="text-secondary text-base mb-8 leading-relaxed">
          Stay connected with classroom stories, construction progress,
          community updates, and opportunities to partner with Aspire Academy.
        </p>
<div className="flex justify-center gap-6">
<a aria-label="Facebook" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#dc3545] hover:text-white transition-colors text-[#212529] bg-white shadow-sm" href="https://www.facebook.com/AspireAcademyRwanda" target="_blank">
<iconify-icon height="24" icon="mdi:facebook" width="24"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#dc3545] hover:text-white transition-colors text-[#212529] bg-white shadow-sm" href="https://www.instagram.com/aspireacademy_rwanda" target="_blank">
<iconify-icon height="24" icon="mdi:instagram" width="24"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#dc3545] hover:text-white transition-colors text-[#212529] bg-white shadow-sm" href="https://www.linkedin.com/company/aspire-academy-rwanda/" target="_blank">
<iconify-icon height="24" icon="mdi:linkedin" width="24"></iconify-icon>
</a>
</div>
</div>
</section>
<footer className="bg-[#212529] pt-20 pb-10 px-6 border-t border-black/20 text-orange-400">
<div className="max-w-[1320px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<img alt="Aspire Academy" className="h-12 w-auto object-contain mb-6 filter brightness-0 invert opacity-90" src="https://aspireacademyrw.org/assets/images/logo.png"/>
<p className="text-sm leading-relaxed mb-6">
              Creating pathways to opportunity, strengthening families, and
              transforming communities through Christ-centered education and
              sustainable development.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded border flex items-center justify-center hover:text-white transition-all border-orange-600 hover:bg-[#dc3545] hover:border-[#dc3545]" href="https://www.facebook.com/AspireAcademyRwanda" target="_blank">
<iconify-icon height="16" icon="mdi:facebook" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded border flex items-center justify-center hover:text-white transition-all border-orange-600 hover:bg-[#dc3545] hover:border-[#dc3545]" href="https://www.instagram.com/aspireacademy_rwanda" target="_blank">
<iconify-icon height="16" icon="mdi:instagram" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded border flex items-center justify-center hover:text-white transition-all border-orange-600 hover:bg-[#dc3545] hover:border-[#dc3545]" href="https://www.linkedin.com/company/aspire-academy-rwanda/" target="_blank">
<iconify-icon height="16" icon="mdi:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-base font-normal tracking-tight mb-6">
              Explore
            </h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Our Story
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Leadership Team
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Impact &amp; Reports
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Resource Center
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact Us
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white text-base font-normal tracking-tight mb-6">
              Get Involved
            </h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="https://givebutter.com/child-sponsorships-nvep9y">
                  Sponsor a Classroom
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="https://givebutter.com/building-fund-qw6dyi">
                  Campus Construction
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Volunteer
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Church Partnerships
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white text-base font-normal tracking-tight mb-6">
              Stay Updated
            </h4>
<p className="text-sm mb-4">
              Subscribe to our newsletter for the latest stories and
              construction updates.
            </p>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<input className="bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors focus:border-[#dc3545]" placeholder="Email address" required="" type="email"/>
<button className="text-white px-4 py-2.5 rounded text-sm transition-colors w-full text-center bg-[#dc3545] hover:bg-[#b02a37]" type="submit">
                Subscribe
              </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>
            ©
            
            20262026 Aspire Academy Rwanda. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

<a aria-label="Back to top" className="fixed bottom-6 right-6 w-10 h-10 bg-[#212529] text-white rounded flex items-center justify-center shadow-lg transition-colors z-50 hover:bg-[#dc3545]" href="#" id="backToTop">
<iconify-icon height="20" icon="lucide:arrow-up" width="20"></iconify-icon>
</a>



    </>
  );
}
