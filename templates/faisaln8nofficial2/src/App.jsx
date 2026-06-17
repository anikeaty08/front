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

      // Modal Logic
      function toggleModal(show) {
        const modal = document.getElementById('booking-modal');
        const form = document.getElementById('booking-form');
        const success = document.getElementById('booking-success');
        
        if (show) {
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          // Reset state
          form.style.display = 'block';
          success.classList.add('hidden');
        } else {
          modal.classList.add('hidden');
          document.body.style.overflow = ''; // Restore scrolling
        }
      }

      // FAQ Accordion Logic
      function toggleFaq(button) {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('active');
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      }

      // Booking Simulation
      function confirmBooking() {
        const form = document.getElementById('booking-form');
        const success = document.getElementById('booking-success');
        
        // Simple cross-fade simulation
        form.style.opacity = '0';
        setTimeout(() => {
          form.style.display = 'none';
          success.classList.remove('hidden');
          success.style.opacity = '0';
          setTimeout(() => {
            success.style.opacity = '1';
            form.style.opacity = '1';
          }, 50);
        }, 300);
      }

      // Smooth Scroll for Anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if(target) {
             target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Simple Reveal on Scroll
      const observerOptions = {
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe elements with reveal classes if any (dynamically adding basic fade-in for section headers)
      document.querySelectorAll('h2').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, { threshold: 0.1 }).observe(el);
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
      


<nav bis_size='{"x":0,"y":0,"w":385,"h":59,"abs_x":1126,"abs_y":225}' className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div bis_size='{"x":0,"y":0,"w":385,"h":58,"abs_x":1126,"abs_y":225}' className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div bis_size='{"x":19,"y":16,"w":156,"h":25,"abs_x":1145,"abs_y":241}' className="flex items-center gap-8">
<a bis_size='{"x":19,"y":16,"w":156,"h":25,"abs_x":1145,"abs_y":241}' className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
<div bis_size='{"x":19,"y":16,"w":25,"h":25,"abs_x":1145,"abs_y":241}' className="w-8 h-8 bg-[#047857] rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(4,120,87,0.5)]">H</div>
<span bis_size='{"x":51,"y":17,"w":124,"h":22,"abs_x":1177,"abs_y":242}' className="text-white">Humain Demand</span>
</a>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
</div>
</div>
<div bis_size='{"x":274,"y":12,"w":91,"h":32,"abs_x":1400,"abs_y":237}' className="flex items-center gap-4">
<button bis_size='{"x":274,"y":12,"w":91,"h":32,"abs_x":1400,"abs_y":237}' className="hover:bg-neutral-200 transition-all flex text-sm font-medium text-black bg-white rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center" onclick="toggleModal(true)">Book a call</button>
</div>
</div>
</nav>

<main bis_size='{"x":0,"y":59,"w":385,"h":786,"abs_x":1126,"abs_y":284}' className="overflow-hidden pt-6 pb-20 relative">

<div bis_size='{"x":-307,"y":59,"w":1000,"h":500,"abs_x":819,"abs_y":284}' className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00ffc4] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
<div bis_size='{"x":0,"y":78,"w":385,"h":702,"abs_x":1126,"abs_y":303}' className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div bis_size='{"x":19,"y":79,"w":346,"h":34,"abs_x":1145,"abs_y":304}' className="inline-flex hover:border-[#00ffc4]/30 transition-colors cursor-default bg-neutral-900/50 border-white/10 border rounded-full mb-8 pr-4 pl-1 shadow-sm backdrop-blur-sm gap-x-1 items-center">
<span bis_size='{"x":23,"y":80,"w":65,"h":33,"abs_x":1149,"abs_y":305}' className="text-[10px] flex items-center gap-1 font-semibold text-white bg-[#047857] rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow-sm">
            Rated 5/5 <svg bis_size='{"x":76,"y":93,"w":6,"h":6,"abs_x":1202,"abs_y":318}' className="lucide lucide-star w-2 h-2 fill-current text-[#00ffc4]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":76,"y":94,"w":5,"h":4,"abs_x":1202,"abs_y":319}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span bis_size='{"x":92,"y":80,"w":259,"h":32,"abs_x":1218,"abs_y":305}' className="text-sm font-medium text-neutral-300">Meet The World's Best Outbound Engineering Firm</span>
</div>
<h1 bis_size='{"x":19,"y":140,"w":346,"h":132,"abs_x":1145,"abs_y":365}' className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          We engineer systems <br bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="hidden md:block"/>
<span bis_size='{"x":43,"y":177,"w":298,"h":96,"abs_x":1169,"abs_y":402}' className="font-serif-italic text-[#00ffc4] font-normal drop-shadow-[0_0_15px_rgba(0,255,196,0.3)]">that guarantee pipeline</span>
</h1>
<p bis_size='{"x":19,"y":291,"w":346,"h":71,"abs_x":1145,"abs_y":516}' className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We’re a team of GTM engineers helping B2B agencies turn buying intent into booked meetings with automated sales workflows.
        </p>
<div bis_size='{"x":19,"y":395,"w":346,"h":125,"abs_x":1145,"abs_y":620}' className="flex flex-col gap-4 mb-20 gap-x-4 gap-y-4 items-center">
<button bis_size='{"x":19,"y":395,"w":346,"h":72,"abs_x":1145,"abs_y":620}' className="group relative bg-[#047857] hover:bg-[#059669] text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(4,120,87,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-[#10b981]/30" onclick="toggleModal(true)">
<div bis_size='{"x":20,"y":467,"w":344,"h":71,"abs_x":1146,"abs_y":692}' className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span bis_size='{"x":46,"y":408,"w":267,"h":45,"abs_x":1172,"abs_y":633}' className="relative">Apply For Your No-Cost Pilot Campaign</span>
<svg bis_size='{"x":323,"y":423,"w":15,"h":16,"abs_x":1449,"abs_y":648}' className="lucide lucide-arrow-right relative w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":326,"y":431,"w":9,"h":0,"abs_x":1452,"abs_y":656}' d="M5 12h14"></path><path bis_size='{"x":331,"y":427,"w":4,"h":9,"abs_x":1457,"abs_y":652}' d="m12 5 7 7-7 7"></path></svg>
</button>
<div bis_size='{"x":19,"y":480,"w":346,"h":40,"abs_x":1145,"abs_y":705}' className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-900/80 px-3 py-1 rounded-md border border-white/5 backdrop-blur-sm">
<span bis_size='{"x":29,"y":490,"w":34,"h":20,"abs_x":1155,"abs_y":715}' className="bg-[#00ffc4]/10 text-[#00ffc4] border border-[#00ffc4]/20 text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
<span bis_size='{"x":71,"y":484,"w":283,"h":32,"abs_x":1197,"abs_y":709}' className="font-medium text-neutral-400"> We'll launch a no-obligation pilot to prove results first.</span>
</div>
</div>

<div bis_size='{"x":19,"y":586,"w":346,"h":194,"abs_x":1145,"abs_y":811}' className="max-w-5xl mx-auto relative group">
<div bis_size='{"x":16,"y":582,"w":352,"h":201,"abs_x":1142,"abs_y":807}' className="-inset-1 group-hover:opacity-40 transition-opacity bg-gradient-to-b from-[#00ffc4]/20 to-transparent opacity-20 rounded-2xl absolute blur"></div>
<div bis_size='{"x":19,"y":586,"w":346,"h":194,"abs_x":1145,"abs_y":811}' className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 aspect-video ring-1 ring-black/5">
<img alt="Masterclass" bis_size='{"x":20,"y":586,"w":344,"h":193,"abs_x":1146,"abs_y":811}' className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":20,"y":586,"w":344,"h":193,"abs_x":1146,"abs_y":811}' className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
<div bis_size='{"x":20,"y":586,"w":344,"h":193,"abs_x":1146,"abs_y":811}' className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='https://youtu.be/XkjlNypyRnk?si=wB8ZA3NfPcAl6DPD'" role="button">
<div bis_size='{"x":46,"y":612,"w":292,"h":38,"abs_x":1172,"abs_y":837}' className="flex justify-between items-start">
<div bis_size='{"x":46,"y":612,"w":281,"h":38,"abs_x":1172,"abs_y":837}' className="flex items-center gap-4">
<div bis_size='{"x":46,"y":612,"w":38,"h":38,"abs_x":1172,"abs_y":837}' className="w-12 h-12 rounded-full border-2 border-[#00ffc4]/30 overflow-hidden shadow-lg">
<img bis_size='{"x":47,"y":614,"w":35,"h":35,"abs_x":1173,"abs_y":839}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div bis_size='{"x":98,"y":614,"w":229,"h":34,"abs_x":1224,"abs_y":839}' className="text-left">
<h3 bis_size='{"x":98,"y":614,"w":229,"h":18,"abs_x":1224,"abs_y":839}' className="leading-tight text-shadow-sm text-lg font-medium text-white">$2M Cold Outbound Masterclass</h3>
<p bis_size='{"x":98,"y":633,"w":229,"h":16,"abs_x":1224,"abs_y":858}' className="text-neutral-400 text-sm">with Alex Hormozi &amp; David Chen</p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="hidden sm:flex gap-3 text-white/90 text-sm font-medium">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE DEMO
                  </span>
</div>
</div>
<div bis_size='{"x":153,"y":644,"w":77,"h":77,"abs_x":1279,"abs_y":869}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<div bis_size='{"x":153,"y":644,"w":77,"h":77,"abs_x":1279,"abs_y":869}' className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,196,0.1)] group-hover:shadow-[0_0_60px_rgba(0,255,196,0.2)] transition-shadow">
<svg bis_size='{"x":177,"y":667,"w":32,"h":32,"abs_x":1303,"abs_y":892}' className="lucide lucide-play w-10 h-10 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":184,"y":671,"w":21,"h":24,"abs_x":1310,"abs_y":896}' d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div bis_size='{"x":46,"y":707,"w":292,"h":46,"abs_x":1172,"abs_y":932}' className="flex justify-between items-end">
<div bis_size='{"x":46,"y":707,"w":221,"h":46,"abs_x":1172,"abs_y":932}' className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 text-white text-sm font-medium border border-white/10">
                  See how we book 50+ meetings/mo
                </div>
<div bis_size='{"x":267,"y":724,"w":71,"h":29,"abs_x":1393,"abs_y":949}' className="flex gap-4">
<button bis_size='{"x":267,"y":724,"w":29,"h":29,"abs_x":1393,"abs_y":949}' className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><svg bis_size='{"x":273,"y":731,"w":16,"h":16,"abs_x":1399,"abs_y":956}' className="lucide lucide-volume-2 w-5 h-5" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":275,"y":734,"w":6,"h":10,"abs_x":1401,"abs_y":959}' d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path bis_size='{"x":284,"y":737,"w":0,"h":4,"abs_x":1410,"abs_y":962}' d="M16 9a5 5 0 0 1 0 6"></path><path bis_size='{"x":287,"y":735,"w":1,"h":8,"abs_x":1413,"abs_y":960}' d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
<button bis_size='{"x":309,"y":724,"w":29,"h":29,"abs_x":1435,"abs_y":949}' className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><svg bis_size='{"x":316,"y":731,"w":16,"h":16,"abs_x":1442,"abs_y":956}' className="lucide lucide-maximize w-5 h-5" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":318,"y":733,"w":3,"h":3,"abs_x":1444,"abs_y":958}' d="M8 3H5a2 2 0 0 0-2 2v3"></path><path bis_size='{"x":327,"y":733,"w":3,"h":3,"abs_x":1453,"abs_y":958}' d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path bis_size='{"x":318,"y":742,"w":3,"h":3,"abs_x":1444,"abs_y":967}' d="M3 16v3a2 2 0 0 0 2 2h3"></path><path bis_size='{"x":327,"y":742,"w":3,"h":3,"abs_x":1453,"abs_y":967}' d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg></button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


<section bis_size='{"x":0,"y":845,"w":385,"h":313,"abs_x":1126,"abs_y":1070}' className="bg-[#050505] border-white/5 border-b relative bottom-25">
<div bis_size='{"x":0,"y":845,"w":385,"h":312,"abs_x":1126,"abs_y":1070}' className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div bis_size='{"x":0,"y":845,"w":385,"h":312,"abs_x":1126,"abs_y":1070}' className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div bis_size='{"x":19,"y":845,"w":346,"h":87,"abs_x":1145,"abs_y":1070}' className="text-center mb-20">
<h2 bis_size='{"x":19,"y":858,"w":346,"h":87,"abs_x":1145,"abs_y":1083}' className="md:text-6xl leading-[1.1] transition-all duration-700 text-5xl font-semibold text-white tracking-tight opacity-0 translate-y-4">
            If you deal with any of 
            <span bis_size='{"x":75,"y":896,"w":279,"h":52,"abs_x":1201,"abs_y":1121}' className="font-normal font-serif-italic">this we can help...</span>
</h2>
</div>


<div bis_size='{"x":19,"y":998,"w":346,"h":160,"abs_x":1145,"abs_y":1223}' className="flex flex-col text-center mt-- mb-- items-center">
<button bis_size='{"x":60,"y":998,"w":263,"h":90,"abs_x":1186,"abs_y":1223}' className="relative group" onclick="toggleModal(true)">
<div bis_size='{"x":57,"y":994,"w":269,"h":97,"abs_x":1183,"abs_y":1219}' className="absolute -inset-1 bg-gradient-to-r from-[#00ffc4] to-[#047857] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div bis_size='{"x":60,"y":998,"w":263,"h":90,"abs_x":1186,"abs_y":1223}' className="inline-flex bg-white/95 rounded-2xl ring-white/20 ring-1 pt-4 pr-6 pb-4 pl-6 shadow-lg backdrop-blur gap-x-3 gap-y-3 items-center">
<img alt="Team lead" bis_size='{"x":80,"y":1011,"w":65,"h":65,"abs_x":1206,"abs_y":1236}' className="w-20 h-20 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8936fe90-98a8-43ce-bf6c-13d870328b4e_320w.png"/>
<div bis_size='{"x":155,"y":1028,"w":61,"h":30,"abs_x":1281,"abs_y":1253}' className="min-w-0">
<p bis_size='{"x":155,"y":1028,"w":61,"h":10,"abs_x":1281,"abs_y":1253}' className="text-[11px] leading-none uppercase text-neutral-500 tracking-wider font-geist">MY WORKS</p>
<p bis_size='{"x":155,"y":1039,"w":61,"h":19,"abs_x":1281,"abs_y":1264}' className="truncate font-semibold text-neutral-900 tracking-tight font-geist">FAISAL</p>
</div>
<a bis_size='{"x":229,"y":1024,"w":74,"h":38,"abs_x":1355,"abs_y":1249}' className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors text-xs font-semibold text-white font-geist bg-neutral-900 rounded-xl ml-1 pt-4 pr-4 pb-4 pl-4" href="mailto:hello@nomadiq.com">VIST HERE</a>
</div>
</button>
<div bis_size='{"x":192,"y":1115,"w":0,"h":0,"abs_x":1318,"abs_y":1340}' className="mt-8 flex flex-col md:flex-row items-center gap-3 text-sm text-neutral-400">
<div bis_size='{"x":192,"y":1115,"w":0,"h":0,"abs_x":1318,"abs_y":1340}' className="flex items-center gap-2">
</div>
</div>
<div bis_size='{"x":64,"y":1134,"w":255,"h":23,"abs_x":1190,"abs_y":1359}' className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
<div bis_size='{"x":78,"y":1143,"w":6,"h":6,"abs_x":1204,"abs_y":1368}' className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<span bis_size='{"x":91,"y":1140,"w":215,"h":13,"abs_x":1217,"abs_y":1365}' className="text-xs font-medium text-neutral-300">Extremely Limited Spots Available For October</span>
</div>
</div>
</div>
</section>



<section bis_size='{"x":0,"y":1159,"w":385,"h":608,"abs_x":1126,"abs_y":1384}' className="overflow-hidden flex flex-col text-white bg-[#050505] w-full border-white/5 border-b pt-2 pb-25 relative items-center">
<div bis_size='{"x":0,"y":1159,"w":385,"h":608,"abs_x":1126,"abs_y":1384}' className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>

<div bis_size='{"x":-107,"y":1163,"w":600,"h":600,"abs_x":1019,"abs_y":1388}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffc4] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div bis_size='{"x":0,"y":1165,"w":385,"h":95,"abs_x":1126,"abs_y":1390}' className="z-10 text-center w-full max-w-4xl mb-2 pr-6 pl-6 relative">
<h2 bis_size='{"x":19,"y":1198,"w":346,"h":32,"abs_x":1145,"abs_y":1423}' className="bg-clip-text transition-all duration-700 md:text-6xl text-4xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 mt-6 mb-6 opacity-0 translate-y-4">The Engine of Growth</h2>
<p bis_size='{"x":19,"y":1237,"w":346,"h":23,"abs_x":1145,"abs_y":1462}' className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">Data flows in. Meetings flow out.</p>
</div>
<div bis_size='{"x":0,"y":1267,"w":385,"h":500,"abs_x":1126,"abs_y":1492}' className="flex flex-col w-full relative items-center">

<div bis_size='{"x":5,"y":1392,"w":375,"h":375,"abs_x":1131,"abs_y":1617}' className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-bottom">
<div bis_size='{"x":5,"y":1392,"w":375,"h":375,"abs_x":1131,"abs_y":1617}' className="absolute inset-0 animate-spin-slow">
<svg bis_size='{"x":5,"y":1392,"w":375,"h":375,"abs_x":1131,"abs_y":1617}' className="absolute top-0 right-0 bottom-0 left-0 w-[500px] h-[500px]" data-icon-replaced="true" strokeWidth="2" style={{width: '500px', height: '500px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 600 600">
<g bis_size='{"x":36,"y":1423,"w":312,"h":312,"abs_x":1162,"abs_y":1648}' className="stroke-current stroke-[1]">
<line bis_size='{"x":192,"y":1423,"w":0,"h":106,"abs_x":1318,"abs_y":1648}' className="animate-flow-in" x1="300" x2="300" y1="50" y2="220"></line>
<line bis_size='{"x":242,"y":1579,"w":106,"h":0,"abs_x":1368,"abs_y":1804}' className="animate-flow-in delay-1" x1="550" x2="380" y1="300" y2="300"></line>
<line bis_size='{"x":192,"y":1629,"w":0,"h":106,"abs_x":1318,"abs_y":1854}' className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="380"></line>
<line bis_size='{"x":36,"y":1579,"w":106,"h":0,"abs_x":1162,"abs_y":1804}' className="animate-flow-in delay-3" x1="50" x2="220" y1="300" y2="300"></line>
<line bis_size='{"x":227,"y":1469,"w":75,"h":75,"abs_x":1353,"abs_y":1694}' className="animate-flow-in delay-1" x1="476" x2="356" y1="123" y2="243"></line>
<line bis_size='{"x":227,"y":1614,"w":75,"h":75,"abs_x":1353,"abs_y":1839}' className="animate-flow-in delay-2" x1="476" x2="356" y1="476" y2="356"></line>
<line bis_size='{"x":81,"y":1614,"w":75,"h":75,"abs_x":1207,"abs_y":1839}' className="animate-flow-in delay-3" x1="123" x2="243" y1="476" y2="356"></line>
<line bis_size='{"x":81,"y":1469,"w":75,"h":75,"abs_x":1207,"abs_y":1694}' className="animate-flow-in" x1="123" x2="243" y1="123" y2="243"></line>
</g>
</svg>

<div bis_size='{"x":175,"y":1412,"w":34,"h":34,"abs_x":1301,"abs_y":1637}' className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":175,"y":1412,"w":34,"h":34,"abs_x":1301,"abs_y":1637}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20">
<svg bis_size='{"x":182,"y":1419,"w":20,"h":20,"abs_x":1308,"abs_y":1644}' className="lucide lucide-cpu text-[#00ffc4] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="airtable" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 256 215" width="28" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":183,"y":1421,"w":18,"h":7,"abs_x":1309,"abs_y":1646}' d="M114.259 2.701L18.86 42.176c-5.305 2.195-5.25 9.73.089 11.847l95.797 37.989a35.54 35.54 0 0 0 26.208 0l95.799-37.99c5.337-2.115 5.393-9.65.086-11.846L141.442 2.7a35.55 35.55 0 0 0-27.183 0" fill="#FFBF00"></path><path bis_size='{"x":193,"y":1426,"w":9,"h":12,"abs_x":1319,"abs_y":1651}' d="M136.35 112.757v94.902c0 4.514 4.55 7.605 8.746 5.942l106.748-41.435a6.39 6.39 0 0 0 4.035-5.941V71.322c0-4.514-4.551-7.604-8.747-5.941l-106.748 41.434a6.39 6.39 0 0 0-4.035 5.942" fill="#26B5F8"></path><path bis_size='{"x":182,"y":1426,"w":9,"h":8,"abs_x":1308,"abs_y":1651}' d="m111.423 117.654l-31.68 15.296l-3.217 1.555L9.65 166.548C5.411 168.593 0 165.504 0 160.795V71.72c0-1.704.874-3.175 2.046-4.283a7.3 7.3 0 0 1 1.618-1.213c1.598-.959 3.878-1.215 5.816-.448l101.41 40.18c5.155 2.045 5.56 9.268.533 11.697" fill="#ED3049"></path><path bis_size='{"x":182,"y":1426,"w":9,"h":5,"abs_x":1308,"abs_y":1651}' d="m111.423 117.654l-31.68 15.296L2.045 67.438a7.3 7.3 0 0 1 1.618-1.213c1.598-.959 3.878-1.215 5.816-.448l101.41 40.18c5.155 2.045 5.56 9.268.533 11.697" fillOpacity=".25"></path></svg>
</div>
</div>
<div bis_size='{"x":270,"y":1467,"w":34,"h":34,"abs_x":1396,"abs_y":1692}' className="absolute top-[123px] right-[123px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":270,"y":1467,"w":34,"h":34,"abs_x":1396,"abs_y":1692}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":277,"y":1474,"w":20,"h":20,"abs_x":1403,"abs_y":1699}' className="lucide lucide-bot text-[#00ffc4] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="google-drive" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 256 229" width="28" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":277,"y":1487,"w":6,"h":6,"abs_x":1403,"abs_y":1712}' d="m19.354 196.034l11.29 19.5c2.346 4.106 5.718 7.332 9.677 9.678q17.009-21.591 23.68-33.137q6.77-11.717 16.641-36.655q-26.604-3.502-40.32-3.502q-13.165 0-40.322 3.502c0 4.545 1.173 9.09 3.519 13.196z" fill="#0066DA"></path><path bis_size='{"x":291,"y":1487,"w":6,"h":6,"abs_x":1417,"abs_y":1712}' d="M215.681 225.212c3.96-2.346 7.332-5.572 9.677-9.677l4.692-8.064l22.434-38.855a26.57 26.57 0 0 0 3.518-13.196q-27.315-3.502-40.247-3.502q-13.899 0-40.248 3.502q9.754 25.075 16.422 36.655q6.724 11.683 23.752 33.137" fill="#EA4335"></path><path bis_size='{"x":284,"y":1475,"w":6,"h":6,"abs_x":1410,"abs_y":1700}' d="M128.001 73.311q19.68-23.768 27.125-36.655q5.996-10.377 13.196-33.137C164.363 1.173 159.818 0 155.126 0h-54.25C96.184 0 91.64 1.32 87.68 3.519q9.16 26.103 15.544 37.154q7.056 12.213 24.777 32.638" fill="#00832D"></path><path bis_size='{"x":280,"y":1487,"w":14,"h":6,"abs_x":1406,"abs_y":1712}' d="M175.36 155.42H80.642l-40.32 69.792c3.958 2.346 8.503 3.519 13.195 3.519h148.968c4.692 0 9.238-1.32 13.196-3.52z" fill="#2684FC"></path><path bis_size='{"x":277,"y":1475,"w":10,"h":12,"abs_x":1403,"abs_y":1700}' d="M128.001 73.311L87.681 3.52c-3.96 2.346-7.332 5.571-9.678 9.677L3.519 142.224A26.57 26.57 0 0 0 0 155.42h80.642z" fill="#00AC47"></path><path bis_size='{"x":287,"y":1475,"w":10,"h":12,"abs_x":1413,"abs_y":1700}' d="m215.242 77.71l-37.243-64.514c-2.345-4.106-5.718-7.331-9.677-9.677l-40.32 69.792l47.358 82.109h80.496c0-4.546-1.173-9.09-3.519-13.196z" fill="#FFBA00"></path></svg>
</div>
</div>
<div bis_size='{"x":325,"y":1562,"w":34,"h":34,"abs_x":1451,"abs_y":1787}' className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":325,"y":1562,"w":34,"h":34,"abs_x":1451,"abs_y":1787}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":332,"y":1569,"w":20,"h":20,"abs_x":1458,"abs_y":1794}' className="lucide lucide-linkedin text-[#00ffc4] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="facebook" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":1569,"w":20,"h":20,"abs_x":1458,"abs_y":1794}' className="" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" fill="#1877F2"></path><path bis_size='{"x":338,"y":1573,"w":8,"h":16,"abs_x":1464,"abs_y":1798}' className="" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" fill="#FFF"></path></svg>
</div>
</div>
<div bis_size='{"x":270,"y":1658,"w":34,"h":34,"abs_x":1396,"abs_y":1883}' className="absolute bottom-[123px] right-[123px] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":270,"y":1658,"w":34,"h":34,"abs_x":1396,"abs_y":1883}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":277,"y":1664,"w":20,"h":20,"abs_x":1403,"abs_y":1889}' className="lucide lucide-database text-[#00ffc4] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="google-gmail" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 256 193" width="28" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":277,"y":1671,"w":4,"h":11,"abs_x":1403,"abs_y":1896}' className="" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" fill="#4285F4"></path><path bis_size='{"x":293,"y":1671,"w":4,"h":11,"abs_x":1419,"abs_y":1896}' d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" fill="#34A853"></path><path bis_size='{"x":281,"y":1668,"w":12,"h":10,"abs_x":1407,"abs_y":1893}' d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" fill="#EA4335"></path><path bis_size='{"x":293,"y":1667,"w":4,"h":7,"abs_x":1419,"abs_y":1892}' d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" fill="#FBBC04"></path><path bis_size='{"x":277,"y":1667,"w":4,"h":7,"abs_x":1403,"abs_y":1892}' className="" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" fill="#C5221F"></path></svg>
</div>
</div>
<div bis_size='{"x":175,"y":1712,"w":34,"h":34,"abs_x":1301,"abs_y":1937}' className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":175,"y":1712,"w":34,"h":34,"abs_x":1301,"abs_y":1937}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":182,"y":1719,"w":20,"h":20,"abs_x":1308,"abs_y":1944}' className="lucide lucide-webhook w-[28px] h-[28px]" data-icon-replaced="true" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":183,"y":1732,"w":13,"h":5,"abs_x":1309,"abs_y":1957}' d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path bis_size='{"x":187,"y":1721,"w":8,"h":13,"abs_x":1313,"abs_y":1946}' d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path bis_size='{"x":192,"y":1724,"w":8,"h":13,"abs_x":1318,"abs_y":1949}' d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
</div>
</div>
<div bis_size='{"x":80,"y":1658,"w":34,"h":34,"abs_x":1206,"abs_y":1883}' className="absolute bottom-[123px] left-[123px] -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":80,"y":1658,"w":34,"h":34,"abs_x":1206,"abs_y":1883}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":86,"y":1664,"w":20,"h":20,"abs_x":1212,"abs_y":1889}' className="lucide lucide-globe text-violet-700 w-[28px] h-[28px]" data-icon-replaced="true" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":88,"y":1666,"w":17,"h":17,"abs_x":1214,"abs_y":1891}' cx="12" cy="12" r="10"></circle><path bis_size='{"x":93,"y":1666,"w":6,"h":17,"abs_x":1219,"abs_y":1891}' d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path bis_size='{"x":88,"y":1675,"w":17,"h":0,"abs_x":1214,"abs_y":1900}' d="M2 12h20"></path></svg>
</div>
</div>
<div bis_size='{"x":25,"y":1562,"w":34,"h":34,"abs_x":1151,"abs_y":1787}' className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":25,"y":1562,"w":34,"h":34,"abs_x":1151,"abs_y":1787}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":32,"y":1569,"w":20,"h":20,"abs_x":1158,"abs_y":1794}' className="lucide lucide-messages-square text-[#00ffc4] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="claude-icon" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 256 257" width="28" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":32,"y":1569,"w":20,"h":20,"abs_x":1158,"abs_y":1794}' d="m50.228 170.321l50.357-28.257l.843-2.463l-.843-1.361h-2.462l-8.426-.518l-28.775-.778l-24.952-1.037l-24.175-1.296l-6.092-1.297L0 125.796l.583-3.759l5.12-3.434l7.324.648l16.202 1.101l24.304 1.685l17.629 1.037l26.118 2.722h4.148l.583-1.685l-1.426-1.037l-1.101-1.037l-25.147-17.045l-27.22-18.017l-14.258-10.37l-7.713-5.25l-3.888-4.925l-1.685-10.758l7-7.713l9.397.649l2.398.648l9.527 7.323l20.35 15.75L94.817 91.9l3.889 3.24l1.555-1.102l.195-.777l-1.75-2.917l-14.453-26.118l-15.425-26.572l-6.87-11.018l-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0l10.63 1.426l4.472 3.888l6.61 15.101l10.694 23.786l16.591 32.34l4.861 9.592l2.592 8.879l.973 2.722h1.685v-1.556l1.36-18.211l2.528-22.36l2.463-28.776l.843-8.1l4.018-9.722l7.971-5.25l6.222 2.981l5.12 7.324l-.713 4.73l-3.046 19.768l-5.962 30.98l-3.889 20.739h2.268l2.593-2.593l10.499-13.934l17.628-22.036l7.778-8.749l9.073-9.657l5.833-4.601h11.018l8.1 12.055l-3.628 12.443l-11.342 14.388l-9.398 12.184l-13.48 18.147l-8.426 14.518l.778 1.166l2.01-.194l30.46-6.481l16.462-2.982l19.637-3.37l8.88 4.148l.971 4.213l-3.5 8.62l-20.998 5.184l-24.628 4.926l-36.682 8.685l-.454.324l.519.648l16.526 1.555l7.065.389h17.304l32.21 2.398l8.426 5.574l5.055 6.805l-.843 5.184l-12.962 6.611l-17.498-4.148l-40.83-9.721l-14-3.5h-1.944v1.167l11.666 11.406l21.387 19.314l26.767 24.887l1.36 6.157l-3.434 4.86l-3.63-.518l-23.526-17.693l-9.073-7.972l-20.545-17.304h-1.36v1.814l4.73 6.935l25.017 37.59l1.296 11.536l-1.814 3.76l-6.481 2.268l-7.13-1.297l-14.647-20.544l-15.1-23.138l-12.185-20.739l-1.49.843l-7.194 77.448l-3.37 3.953l-7.778 2.981l-6.48-4.925l-3.436-7.972l3.435-15.749l4.148-20.544l3.37-16.333l3.046-20.285l1.815-6.74l-.13-.454l-1.49.194l-15.295 20.999l-23.267 31.433l-18.406 19.702l-4.407 1.75l-7.648-3.954l.713-7.064l4.277-6.286l25.47-32.405l15.36-20.092l9.917-11.6l-.065-1.686h-.583L44.07 198.125l-12.055 1.555l-5.185-4.86l.648-7.972l2.463-2.593l20.35-13.999z" fill="#D97757"></path></svg>
</div>
</div>
<div bis_size='{"x":80,"y":1467,"w":34,"h":34,"abs_x":1206,"abs_y":1692}' className="absolute top-[123px] left-[123px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":80,"y":1467,"w":34,"h":34,"abs_x":1206,"abs_y":1692}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":86,"y":1474,"w":20,"h":20,"abs_x":1212,"abs_y":1699}' className="lucide lucide-cloud text-[#00ffc4] w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="airbnb-icon" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 256 275" width="28" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":87,"y":1474,"w":19,"h":20,"abs_x":1213,"abs_y":1699}' d="M252.154 194.867c-1.231-3.456-2.67-6.8-4.039-9.898c-2.107-4.766-4.314-9.541-6.449-14.157l-.169-.366c-19.04-41.23-39.475-83.026-60.738-124.222l-.903-1.75c-2.169-4.206-4.411-8.556-6.712-12.83a83.4 83.4 0 0 0-9.875-15.198a46 46 0 0 0-15.808-12.133a46.07 46.07 0 0 0-38.935.005a46 46 0 0 0-15.804 12.137a83.7 83.7 0 0 0-9.87 15.195c-2.32 4.313-4.584 8.703-6.773 12.949l-.838 1.625c-21.264 41.2-41.699 82.994-60.738 124.221l-.278.6c-2.098 4.54-4.267 9.236-6.339 13.922c-1.37 3.096-2.806 6.437-4.039 9.902a60.7 60.7 0 0 0-3.274 29.588a58.46 58.46 0 0 0 11.835 27.646a58.6 58.6 0 0 0 24.027 18.129a59.6 59.6 0 0 0 22.481 4.349c2.42 0 4.839-.142 7.243-.422a73.9 73.9 0 0 0 27.645-9.327c11.152-6.265 22.165-15.446 34.196-28.566c12.031 13.12 23.044 22.301 34.196 28.566a73.9 73.9 0 0 0 27.645 9.327a63 63 0 0 0 7.244.422a59.6 59.6 0 0 0 22.48-4.349a58.6 58.6 0 0 0 24.027-18.13a58.45 58.45 0 0 0 11.836-27.645a60.75 60.75 0 0 0-3.274-29.59M128 209.17c-14.893-18.878-24.45-36.409-27.804-51.106a45.2 45.2 0 0 1-.956-16.85a27.5 27.5 0 0 1 4.432-11.52a30.7 30.7 0 0 1 10.772-8.802a30.76 30.76 0 0 1 27.116.002a30.7 30.7 0 0 1 10.77 8.803a27.55 27.55 0 0 1 4.432 11.522a45.2 45.2 0 0 1-.96 16.856C152.444 172.77 142.89 190.296 128 209.17m110.032 12.802a40.9 40.9 0 0 1-8.275 19.33a41 41 0 0 1-16.8 12.677a42.8 42.8 0 0 1-21.088 2.758a55.7 55.7 0 0 1-21.055-7.191c-9.926-5.577-19.974-14.138-31.28-26.696c17.999-22.195 29.239-42.652 33.4-60.873a62.5 62.5 0 0 0 1.197-23.421a44.9 44.9 0 0 0-7.307-18.776a48.2 48.2 0 0 0-17.075-14.405a48.31 48.31 0 0 0-43.495-.002a48.2 48.2 0 0 0-17.075 14.403a44.9 44.9 0 0 0-7.308 18.771a62.5 62.5 0 0 0 1.19 23.412c4.16 18.229 15.4 38.69 33.406 60.892c-11.307 12.557-21.355 21.118-31.281 26.696a55.7 55.7 0 0 1-21.055 7.19a42.8 42.8 0 0 1-21.089-2.758a41 41 0 0 1-16.8-12.677a40.9 40.9 0 0 1-8.273-19.33a43.05 43.05 0 0 1 2.437-21.231c.983-2.761 2.132-5.471 3.556-8.69c2.015-4.555 4.153-9.185 6.221-13.661l.278-.602C49.394 136.792 69.716 95.23 90.864 54.255l.842-1.631c2.153-4.178 4.38-8.497 6.626-12.67a67.8 67.8 0 0 1 7.758-12.115a28.4 28.4 0 0 1 9.8-7.594a28.46 28.46 0 0 1 34.015 7.59a67.5 67.5 0 0 1 7.76 12.111c2.225 4.136 4.432 8.416 6.567 12.555l.904 1.756c21.147 40.97 41.469 82.531 60.404 123.535l.17.369c2.104 4.552 4.28 9.257 6.328 13.891c1.426 3.224 2.577 5.936 3.557 8.687a43.1 43.1 0 0 1 2.437 21.233" fill="#FF385C"></path></svg>
</div>
</div>
</div>
<div bis_size='{"x":158,"y":1545,"w":68,"h":68,"abs_x":1284,"abs_y":1770}' className="absolute z-30 flex items-center justify-center">
<div bis_size='{"x":158,"y":1545,"w":68,"h":68,"abs_x":1284,"abs_y":1770}' className="w-28 h-28 bg-[#0a0a0a] rounded-3xl border border-[#00ffc4]/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,196,0.2)] relative overflow-hidden ring-1 ring-white/10">
<div bis_size='{"x":158,"y":1546,"w":67,"h":67,"abs_x":1284,"abs_y":1771}' className="animate-pulse bg-[#00ffc4]/10 absolute top-0 right-0 bottom-0 left-0"></div>
<svg bis_size='{"x":174,"y":1561,"w":35,"h":35,"abs_x":1300,"abs_y":1786}' className="lucide lucide-layers text-white w-[48px] h-[48px] z-10 relative" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="n8n" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '48px', height: '48px'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":174,"y":1570,"w":35,"h":18,"abs_x":1300,"abs_y":1795}' d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="#ffffff"></path></svg>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="-mt-20 hidden md:block w-full h-32 max-w-4xl z-10 pr-4 pl-4 relative">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute left-1/2 -translate-x-px top-0 w-[1px] h-[40%] bg-white/5 overflow-hidden">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-main"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-white/5 overflow-hidden">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffc4] to-transparent animate-pulse-expand"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute top-[40%] left-[25%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute top-[40%] left-[75%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
</div>

</div>
</section>


<section bis_size='{"x":0,"y":1767,"w":385,"h":1395,"abs_x":1126,"abs_y":1992}' className="overflow-hidden bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24 relative">
<div bis_size='{"x":0,"y":1846,"w":385,"h":1238,"abs_x":1126,"abs_y":2071}' className="max-w-7xl mx-auto px-6 relative z-10">
<div bis_size='{"x":19,"y":1846,"w":346,"h":87,"abs_x":1145,"abs_y":2071}' className="text-center mb-16 flex justify-center items-center gap-6">
<svg bis_size='{"x":19,"y":1870,"w":15,"h":38,"abs_x":1145,"abs_y":2095}' className="w-12 h-12 md:w-20 md:h-20 text-neutral-800 opacity-50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24"><path bis_size='{"x":23,"y":1887,"w":7,"h":7,"abs_x":1149,"abs_y":2112}' d="M18 20c0-6-3-11-8-12M6 20c0-6 3-11 8-12"></path><path bis_size='{"x":23,"y":1892,"w":7,"h":3,"abs_x":1149,"abs_y":2117}' d="M18 20c-1-2-1.5-3.5-1.5-5M6 20c1-2 1.5-3.5 1.5-5"></path><path bis_size='{"x":25,"y":1890,"w":3,"h":1,"abs_x":1151,"abs_y":2115}' d="M13 13c1 0 2 .5 2 1.5s-1 1.5-2 1.5M11 13c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path bis_size='{"x":23,"y":1888,"w":7,"h":1,"abs_x":1149,"abs_y":2113}' d="M16 10c1 0 2 .5 2 1.5s-1 1.5-2 1.5M8 10c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path bis_size='{"x":22,"y":1887,"w":9,"h":1,"abs_x":1148,"abs_y":2112}' d="M17 7c1 0 2 .5 2 1.5s-1 1.5-2 1.5M7 7c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path></svg>
<h2 bis_size='{"x":54,"y":1859,"w":275,"h":87,"abs_x":1180,"abs_y":2084}' className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl transition-all duration-700 opacity-0 translate-y-4">We’ve helped 40+  businesses never worry  about sales again</h2>
<svg bis_size='{"x":349,"y":1870,"w":15,"h":38,"abs_x":1475,"abs_y":2095}' className="w-12 h-12 md:w-20 md:h-20 text-neutral-800 opacity-50 transform scale-x-[-1]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24"><path bis_size='{"x":353,"y":1887,"w":7,"h":7,"abs_x":1479,"abs_y":2112}' d="M18 20c0-6-3-11-8-12M6 20c0-6 3-11 8-12"></path><path bis_size='{"x":353,"y":1892,"w":7,"h":3,"abs_x":1479,"abs_y":2117}' d="M18 20c-1-2-1.5-3.5-1.5-5M6 20c1-2 1.5-3.5 1.5-5"></path><path bis_size='{"x":355,"y":1890,"w":3,"h":1,"abs_x":1481,"abs_y":2115}' d="M13 13c1 0 2 .5 2 1.5s-1 1.5-2 1.5M11 13c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path bis_size='{"x":353,"y":1888,"w":7,"h":1,"abs_x":1479,"abs_y":2113}' d="M16 10c1 0 2 .5 2 1.5s-1 1.5-2 1.5M8 10c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path bis_size='{"x":353,"y":1887,"w":9,"h":1,"abs_x":1479,"abs_y":2112}' d="M17 7c1 0 2 .5 2 1.5s-1 1.5-2 1.5M7 7c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path></svg>
</div>
<div bis_size='{"x":19,"y":1986,"w":346,"h":1099,"abs_x":1145,"abs_y":2211}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":19,"y":1986,"w":346,"h":356,"abs_x":1145,"abs_y":2211}' className="space-y-6">
<div bis_size='{"x":19,"y":1986,"w":346,"h":181,"abs_x":1145,"abs_y":2211}' className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div bis_size='{"x":39,"y":2006,"w":305,"h":12,"abs_x":1165,"abs_y":2231}' className="flex gap-1 text-yellow-400 mb-4"><svg bis_size='{"x":39,"y":2006,"w":12,"h":12,"abs_x":1165,"abs_y":2231}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":40,"y":2007,"w":10,"h":10,"abs_x":1166,"abs_y":2232}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":55,"y":2006,"w":12,"h":12,"abs_x":1181,"abs_y":2231}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":56,"y":2007,"w":10,"h":10,"abs_x":1182,"abs_y":2232}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":72,"y":2006,"w":12,"h":12,"abs_x":1198,"abs_y":2231}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":73,"y":2007,"w":10,"h":10,"abs_x":1199,"abs_y":2232}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":88,"y":2006,"w":12,"h":12,"abs_x":1214,"abs_y":2231}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":89,"y":2007,"w":10,"h":10,"abs_x":1215,"abs_y":2232}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":104,"y":2006,"w":12,"h":12,"abs_x":1230,"abs_y":2231}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":105,"y":2007,"w":10,"h":10,"abs_x":1231,"abs_y":2232}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":39,"y":2032,"w":305,"h":63,"abs_x":1165,"abs_y":2257}' className="text-neutral-300 leading-relaxed mb-6 font-medium">"Humain Demand built the outbound system we needed. We went from 0 to 15 meetings a month."</p>
<div bis_size='{"x":39,"y":2115,"w":305,"h":32,"abs_x":1165,"abs_y":2340}' className="flex items-center gap-3">
<img bis_size='{"x":39,"y":2115,"w":32,"h":32,"abs_x":1165,"abs_y":2340}' className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":81,"y":2115,"w":127,"h":31,"abs_x":1207,"abs_y":2340}'><div bis_size='{"x":81,"y":2115,"w":127,"h":16,"abs_x":1207,"abs_y":2340}' className="text-sm font-semibold text-white">Kieran Routledge</div><div bis_size='{"x":81,"y":2131,"w":127,"h":15,"abs_x":1207,"abs_y":2356}' className="text-[10px] text-neutral-500">Sales Manager @ JR Ortho</div></div>
</div>
</div>
<div bis_size='{"x":19,"y":2187,"w":346,"h":155,"abs_x":1145,"abs_y":2412}' className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div bis_size='{"x":39,"y":2207,"w":305,"h":12,"abs_x":1165,"abs_y":2432}' className="flex gap-1 text-yellow-400 mb-4"><svg bis_size='{"x":39,"y":2207,"w":12,"h":12,"abs_x":1165,"abs_y":2432}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":40,"y":2208,"w":10,"h":10,"abs_x":1166,"abs_y":2433}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":55,"y":2207,"w":12,"h":12,"abs_x":1181,"abs_y":2432}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":56,"y":2208,"w":10,"h":10,"abs_x":1182,"abs_y":2433}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":72,"y":2207,"w":12,"h":12,"abs_x":1198,"abs_y":2432}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":73,"y":2208,"w":10,"h":10,"abs_x":1199,"abs_y":2433}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":88,"y":2207,"w":12,"h":12,"abs_x":1214,"abs_y":2432}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":89,"y":2208,"w":10,"h":10,"abs_x":1215,"abs_y":2433}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":104,"y":2207,"w":12,"h":12,"abs_x":1230,"abs_y":2432}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":105,"y":2208,"w":10,"h":10,"abs_x":1231,"abs_y":2433}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":39,"y":2233,"w":305,"h":36,"abs_x":1165,"abs_y":2458}' className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm">"The attention to detail on the ICP research is insane. They knew our market better than we did."</p>
<div bis_size='{"x":39,"y":2289,"w":305,"h":32,"abs_x":1165,"abs_y":2514}' className="flex items-center gap-3">
<img bis_size='{"x":39,"y":2289,"w":32,"h":32,"abs_x":1165,"abs_y":2514}' className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div bis_size='{"x":81,"y":2290,"w":75,"h":31,"abs_x":1207,"abs_y":2515}'><div bis_size='{"x":81,"y":2290,"w":75,"h":16,"abs_x":1207,"abs_y":2515}' className="text-sm font-semibold text-white">James Miller</div><div bis_size='{"x":81,"y":2306,"w":75,"h":15,"abs_x":1207,"abs_y":2531}' className="text-[10px] text-neutral-500">CEO @ ScaleUp</div></div>
</div>
</div>
</div>

<div bis_size='{"x":19,"y":2361,"w":346,"h":356,"abs_x":1145,"abs_y":2586}' className="space-y-6">
<div bis_size='{"x":19,"y":2361,"w":346,"h":181,"abs_x":1145,"abs_y":2586}' className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div bis_size='{"x":39,"y":2381,"w":305,"h":12,"abs_x":1165,"abs_y":2606}' className="flex gap-1 text-yellow-400 mb-4"><svg bis_size='{"x":39,"y":2381,"w":12,"h":12,"abs_x":1165,"abs_y":2606}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":40,"y":2382,"w":10,"h":10,"abs_x":1166,"abs_y":2607}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":55,"y":2381,"w":12,"h":12,"abs_x":1181,"abs_y":2606}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":56,"y":2382,"w":10,"h":10,"abs_x":1182,"abs_y":2607}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":72,"y":2381,"w":12,"h":12,"abs_x":1198,"abs_y":2606}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":73,"y":2382,"w":10,"h":10,"abs_x":1199,"abs_y":2607}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":88,"y":2381,"w":12,"h":12,"abs_x":1214,"abs_y":2606}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":89,"y":2382,"w":10,"h":10,"abs_x":1215,"abs_y":2607}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":104,"y":2381,"w":12,"h":12,"abs_x":1230,"abs_y":2606}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":105,"y":2382,"w":10,"h":10,"abs_x":1231,"abs_y":2607}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":39,"y":2407,"w":305,"h":63,"abs_x":1165,"abs_y":2632}' className="text-neutral-300 leading-relaxed mb-6 font-medium">"We are seeing awesome results from the managed outbound system. Pipeline is fuller than ever."</p>
<div bis_size='{"x":39,"y":2490,"w":305,"h":32,"abs_x":1165,"abs_y":2715}' className="flex items-center gap-3">
<img bis_size='{"x":39,"y":2490,"w":32,"h":32,"abs_x":1165,"abs_y":2715}' className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div bis_size='{"x":81,"y":2491,"w":105,"h":31,"abs_x":1207,"abs_y":2716}'><div bis_size='{"x":81,"y":2491,"w":105,"h":16,"abs_x":1207,"abs_y":2716}' className="text-sm font-semibold text-white">Will Heylings</div><div bis_size='{"x":81,"y":2507,"w":105,"h":15,"abs_x":1207,"abs_y":2732}' className="text-[10px] text-neutral-500">CRO @ Atom Learning</div></div>
</div>
</div>
<div bis_size='{"x":19,"y":2562,"w":346,"h":155,"abs_x":1145,"abs_y":2787}' className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div bis_size='{"x":39,"y":2582,"w":305,"h":12,"abs_x":1165,"abs_y":2807}' className="flex gap-1 text-yellow-400 mb-4"><svg bis_size='{"x":39,"y":2582,"w":12,"h":12,"abs_x":1165,"abs_y":2807}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":40,"y":2583,"w":10,"h":10,"abs_x":1166,"abs_y":2808}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":55,"y":2582,"w":12,"h":12,"abs_x":1181,"abs_y":2807}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":56,"y":2583,"w":10,"h":10,"abs_x":1182,"abs_y":2808}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":72,"y":2582,"w":12,"h":12,"abs_x":1198,"abs_y":2807}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":73,"y":2583,"w":10,"h":10,"abs_x":1199,"abs_y":2808}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":88,"y":2582,"w":12,"h":12,"abs_x":1214,"abs_y":2807}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":89,"y":2583,"w":10,"h":10,"abs_x":1215,"abs_y":2808}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":104,"y":2582,"w":12,"h":12,"abs_x":1230,"abs_y":2807}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":105,"y":2583,"w":10,"h":10,"abs_x":1231,"abs_y":2808}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":39,"y":2608,"w":305,"h":36,"abs_x":1165,"abs_y":2833}' className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm">"A true partner in growth. Not just a vendor. Their team is proactive and incredibly smart."</p>
<div bis_size='{"x":39,"y":2665,"w":305,"h":32,"abs_x":1165,"abs_y":2890}' className="flex items-center gap-3">
<img bis_size='{"x":39,"y":2665,"w":32,"h":32,"abs_x":1165,"abs_y":2890}' className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":81,"y":2665,"w":124,"h":31,"abs_x":1207,"abs_y":2890}'><div bis_size='{"x":81,"y":2665,"w":124,"h":16,"abs_x":1207,"abs_y":2890}' className="text-sm font-semibold text-white">Sarah Jenkins</div><div bis_size='{"x":81,"y":2682,"w":124,"h":15,"abs_x":1207,"abs_y":2907}' className="text-[10px] text-neutral-500">VP Marketing @ TechFlow</div></div>
</div>
</div>
</div>

<div bis_size='{"x":19,"y":2737,"w":346,"h":348,"abs_x":1145,"abs_y":2962}' className="space-y-6">
<div bis_size='{"x":19,"y":2737,"w":346,"h":173,"abs_x":1145,"abs_y":2962}' className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div bis_size='{"x":39,"y":2757,"w":305,"h":12,"abs_x":1165,"abs_y":2982}' className="flex gap-1 text-yellow-400 mb-4"><svg bis_size='{"x":39,"y":2757,"w":12,"h":12,"abs_x":1165,"abs_y":2982}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":40,"y":2758,"w":10,"h":10,"abs_x":1166,"abs_y":2983}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":55,"y":2757,"w":12,"h":12,"abs_x":1181,"abs_y":2982}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":56,"y":2758,"w":10,"h":10,"abs_x":1182,"abs_y":2983}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":72,"y":2757,"w":12,"h":12,"abs_x":1198,"abs_y":2982}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":73,"y":2758,"w":10,"h":10,"abs_x":1199,"abs_y":2983}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":88,"y":2757,"w":12,"h":12,"abs_x":1214,"abs_y":2982}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":89,"y":2758,"w":10,"h":10,"abs_x":1215,"abs_y":2983}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":104,"y":2757,"w":12,"h":12,"abs_x":1230,"abs_y":2982}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":105,"y":2758,"w":10,"h":10,"abs_x":1231,"abs_y":2983}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":39,"y":2783,"w":305,"h":55,"abs_x":1165,"abs_y":3008}' className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm">"Cold email has consistently delivered around the clock with a consistent conversion rate. This is the most effective way that we've found."</p>
<div bis_size='{"x":39,"y":2858,"w":305,"h":32,"abs_x":1165,"abs_y":3083}' className="flex items-center gap-3">
<img bis_size='{"x":39,"y":2858,"w":32,"h":32,"abs_x":1165,"abs_y":3083}' className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div bis_size='{"x":81,"y":2858,"w":68,"h":31,"abs_x":1207,"abs_y":3083}'><div bis_size='{"x":81,"y":2858,"w":68,"h":16,"abs_x":1207,"abs_y":3083}' className="text-sm font-semibold text-white">Adam Jones</div><div bis_size='{"x":81,"y":2875,"w":68,"h":15,"abs_x":1207,"abs_y":3100}' className="text-[10px] text-neutral-500">CCO @ BePro</div></div>
</div>
</div>
<div bis_size='{"x":19,"y":2930,"w":346,"h":155,"abs_x":1145,"abs_y":3155}' className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div bis_size='{"x":39,"y":2950,"w":305,"h":12,"abs_x":1165,"abs_y":3175}' className="flex gap-1 text-yellow-400 mb-4"><svg bis_size='{"x":39,"y":2950,"w":12,"h":12,"abs_x":1165,"abs_y":3175}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":40,"y":2951,"w":10,"h":10,"abs_x":1166,"abs_y":3176}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":55,"y":2950,"w":12,"h":12,"abs_x":1181,"abs_y":3175}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":56,"y":2951,"w":10,"h":10,"abs_x":1182,"abs_y":3176}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":72,"y":2950,"w":12,"h":12,"abs_x":1198,"abs_y":3175}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":73,"y":2951,"w":10,"h":10,"abs_x":1199,"abs_y":3176}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":88,"y":2950,"w":12,"h":12,"abs_x":1214,"abs_y":3175}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":89,"y":2951,"w":10,"h":10,"abs_x":1215,"abs_y":3176}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":104,"y":2950,"w":12,"h":12,"abs_x":1230,"abs_y":3175}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":105,"y":2951,"w":10,"h":10,"abs_x":1231,"abs_y":3176}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":39,"y":2976,"w":305,"h":36,"abs_x":1165,"abs_y":3201}' className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm">"The ROI we've seen in just 3 months is absurd. They paid for themselves 10x over."</p>
<div bis_size='{"x":39,"y":3032,"w":305,"h":32,"abs_x":1165,"abs_y":3257}' className="flex items-center gap-3">
<img bis_size='{"x":39,"y":3032,"w":32,"h":32,"abs_x":1165,"abs_y":3257}' className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":81,"y":3033,"w":99,"h":31,"abs_x":1207,"abs_y":3258}'><div bis_size='{"x":81,"y":3033,"w":99,"h":16,"abs_x":1207,"abs_y":3258}' className="text-sm font-semibold text-white">Michael Ross</div><div bis_size='{"x":81,"y":3049,"w":99,"h":15,"abs_x":1207,"abs_y":3274}' className="text-[10px] text-neutral-500">Founder @ DataSync</div></div>
</div>
</div>
</div>
</div>
</div>
</section>


<section bis_size='{"x":0,"y":3163,"w":385,"h":702,"abs_x":1126,"abs_y":3388}' className="bg-[#050505] border-white/5 border-t pb-24 relative">
<div bis_size='{"x":0,"y":3163,"w":385,"h":623,"abs_x":1126,"abs_y":3388}' className="max-w-4xl mx-auto px-6">
<div bis_size='{"x":19,"y":3163,"w":346,"h":30,"abs_x":1145,"abs_y":3388}' className="text-center mb-16">
<h2 bis_size='{"x":19,"y":3176,"w":346,"h":30,"abs_x":1145,"abs_y":3401}' className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2 transition-all duration-700 opacity-0 translate-y-4">Got questions? <span bis_size='{"x":200,"y":3175,"w":157,"h":32,"abs_x":1326,"abs_y":3400}' className="font-serif-italic text-[#00ffc4] font-normal">We got answers.</span></h2>
</div>
<div bis_size='{"x":19,"y":3246,"w":346,"h":540,"abs_x":1145,"abs_y":3471}' className="space-y-4">

<div bis_size='{"x":19,"y":3246,"w":346,"h":85,"abs_x":1145,"abs_y":3471}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3247,"w":344,"h":84,"abs_x":1146,"abs_y":3472}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3266,"w":290,"h":45,"abs_x":1165,"abs_y":3491}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">How are you different from other agencies?</span>
<svg bis_size='{"x":329,"y":3281,"w":15,"h":16,"abs_x":1455,"abs_y":3506}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":333,"y":3289,"w":9,"h":0,"abs_x":1459,"abs_y":3514}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3284,"w":0,"h":9,"abs_x":1463,"abs_y":3509}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3331,"w":344,"h":0,"abs_x":1146,"abs_y":3556}' className="faq-answer">
<div bis_size='{"x":20,"y":3331,"w":344,"h":125,"abs_x":1146,"abs_y":3556}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                Most agencies blast templates and charge retainers whether it works or not. We find people in pain, write 1:1 messages using data we scrape ourselves, and only get paid when qualified meetings show up.
              </div>
</div>
</div>

<div bis_size='{"x":19,"y":3345,"w":346,"h":62,"abs_x":1145,"abs_y":3570}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3345,"w":344,"h":61,"abs_x":1146,"abs_y":3570}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3365,"w":253,"h":22,"abs_x":1165,"abs_y":3590}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">What counts as a qualified meeting?</span>
<svg bis_size='{"x":329,"y":3368,"w":16,"h":16,"abs_x":1455,"abs_y":3593}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":3376,"w":9,"h":0,"abs_x":1458,"abs_y":3601}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3371,"w":0,"h":9,"abs_x":1463,"abs_y":3596}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3407,"w":344,"h":0,"abs_x":1146,"abs_y":3632}' className="faq-answer">
<div bis_size='{"x":20,"y":3407,"w":344,"h":82,"abs_x":1146,"abs_y":3632}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                We decide together before we start. Industry, size, title, revenue, techstack - whatever matters to you. If they don't fit, you don't pay.
              </div>
</div>
</div>

<div bis_size='{"x":19,"y":3421,"w":346,"h":62,"abs_x":1145,"abs_y":3646}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3421,"w":344,"h":61,"abs_x":1146,"abs_y":3646}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3441,"w":243,"h":22,"abs_x":1165,"abs_y":3666}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">How do you find data others can't?</span>
<svg bis_size='{"x":329,"y":3444,"w":16,"h":16,"abs_x":1455,"abs_y":3669}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":3452,"w":9,"h":0,"abs_x":1458,"abs_y":3677}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3447,"w":0,"h":9,"abs_x":1463,"abs_y":3672}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3483,"w":344,"h":0,"abs_x":1146,"abs_y":3708}' className="faq-answer">
<div bis_size='{"x":20,"y":3483,"w":344,"h":61,"abs_x":1146,"abs_y":3708}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                We build custom AI agents that scrape signals no database has. If it exists online, we can get it.
              </div>
</div>
</div>

<div bis_size='{"x":19,"y":3496,"w":346,"h":62,"abs_x":1145,"abs_y":3721}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3497,"w":344,"h":61,"abs_x":1146,"abs_y":3722}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3517,"w":184,"h":22,"abs_x":1165,"abs_y":3742}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">How fast will I see results?</span>
<svg bis_size='{"x":329,"y":3520,"w":16,"h":16,"abs_x":1455,"abs_y":3745}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":3528,"w":9,"h":0,"abs_x":1458,"abs_y":3753}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3523,"w":0,"h":9,"abs_x":1463,"abs_y":3748}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3559,"w":344,"h":0,"abs_x":1146,"abs_y":3784}' className="faq-answer">
<div bis_size='{"x":20,"y":3559,"w":344,"h":82,"abs_x":1146,"abs_y":3784}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                Most clients see meetings within weeks. One closed $240K in 30 days. Depends on your market.
              </div>
</div>
</div>

<div bis_size='{"x":19,"y":3572,"w":346,"h":62,"abs_x":1145,"abs_y":3797}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3573,"w":344,"h":61,"abs_x":1146,"abs_y":3798}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3592,"w":165,"h":22,"abs_x":1165,"abs_y":3817}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">What if it doesn't work?</span>
<svg bis_size='{"x":329,"y":3596,"w":16,"h":16,"abs_x":1455,"abs_y":3821}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":3604,"w":9,"h":0,"abs_x":1458,"abs_y":3829}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3599,"w":0,"h":9,"abs_x":1463,"abs_y":3824}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3635,"w":344,"h":0,"abs_x":1146,"abs_y":3860}' className="faq-answer">
<div bis_size='{"x":20,"y":3635,"w":344,"h":40,"abs_x":1146,"abs_y":3860}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                You don't pay.
              </div>
</div>
</div>

<div bis_size='{"x":19,"y":3648,"w":346,"h":62,"abs_x":1145,"abs_y":3873}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3649,"w":344,"h":61,"abs_x":1146,"abs_y":3874}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3668,"w":143,"h":22,"abs_x":1165,"abs_y":3893}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">Long-term contract?</span>
<svg bis_size='{"x":329,"y":3671,"w":16,"h":16,"abs_x":1455,"abs_y":3896}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":3680,"w":9,"h":0,"abs_x":1458,"abs_y":3905}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3675,"w":0,"h":9,"abs_x":1463,"abs_y":3900}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3710,"w":344,"h":0,"abs_x":1146,"abs_y":3935}' className="faq-answer">
<div bis_size='{"x":20,"y":3710,"w":344,"h":61,"abs_x":1146,"abs_y":3935}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                No. Minimum commitment to give it time, but no lock-ins.
              </div>
</div>
</div>

<div bis_size='{"x":19,"y":3724,"w":346,"h":62,"abs_x":1145,"abs_y":3949}' className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button bis_size='{"x":20,"y":3725,"w":344,"h":61,"abs_x":1146,"abs_y":3950}' className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span bis_size='{"x":39,"y":3744,"w":183,"h":22,"abs_x":1165,"abs_y":3969}' className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">Why performance-based?</span>
<svg bis_size='{"x":329,"y":3747,"w":16,"h":16,"abs_x":1455,"abs_y":3972}' className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":332,"y":3755,"w":9,"h":0,"abs_x":1458,"abs_y":3980}' d="M5 12h14"></path><path bis_size='{"x":337,"y":3751,"w":0,"h":9,"abs_x":1463,"abs_y":3976}' d="M12 5v14"></path></svg>
</button>
<div bis_size='{"x":20,"y":3786,"w":344,"h":0,"abs_x":1146,"abs_y":4011}' className="faq-answer">
<div bis_size='{"x":20,"y":3786,"w":344,"h":61,"abs_x":1146,"abs_y":4011}' className="px-6 pb-6 text-neutral-400 leading-relaxed">
                It keeps us honest. If we don't deliver, we don't eat.
              </div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3865,"w":385,"h":450,"abs_x":1126,"abs_y":4090}' className="overflow-hidden flex flex-col text-center border-white/5 border-t pt-10 pb-32 relative items-center">

<div bis_size='{"x":0,"y":3865,"w":385,"h":449,"abs_x":1126,"abs_y":4090}' className="absolute inset-0 bg-gradient-to-t from-[#047857]/20 to-transparent opacity-40 pointer-events-none"></div>
<div bis_size='{"x":-207,"y":4015,"w":800,"h":300,"abs_x":919,"abs_y":4240}' className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00ffc4] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
<div bis_size='{"x":0,"y":3898,"w":385,"h":313,"abs_x":1126,"abs_y":4123}' className="relative z-10 max-w-4xl px-6">
<h2 bis_size='{"x":19,"y":3911,"w":346,"h":97,"abs_x":1145,"abs_y":4136}' className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-tight transition-all duration-700 opacity-0 translate-y-4">The 97% is waiting.</h2>
<p bis_size='{"x":19,"y":4021,"w":346,"h":79,"abs_x":1145,"abs_y":4246}' className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          While everyone's fighting over the 3% actively buying. We'll introduce you to the rest. 
          <span bis_size='{"x":103,"y":4078,"w":217,"h":19,"abs_x":1229,"abs_y":4303}' className="text-white font-medium">You only pay when it works.</span>
</p>
<button bis_size='{"x":19,"y":4133,"w":346,"h":78,"abs_x":1145,"abs_y":4358}' className="group relative bg-[#00ffc4] hover:bg-[#059669] hover:text-white text-black text-xl font-bold px-10 py-5 rounded-full shadow-[0_0_40px_rgba(0,255,196,0.3)] hover:shadow-[0_0_60px_rgba(0,255,196,0.5)] transition-all flex items-center gap-3 justify-center mx-auto" onclick="toggleModal(true)">
<span bis_size='{"x":51,"y":4149,"w":253,"h":45,"abs_x":1177,"abs_y":4374}'>Apply For A Performance Campaign</span>
<svg bis_size='{"x":315,"y":4162,"w":17,"h":19,"abs_x":1441,"abs_y":4387}' className="lucide lucide-arrow-right w-6 h-6 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":319,"y":4172,"w":10,"h":0,"abs_x":1445,"abs_y":4397}' d="M5 12h14"></path><path bis_size='{"x":324,"y":4167,"w":5,"h":10,"abs_x":1450,"abs_y":4392}' d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer bis_size='{"x":0,"y":4315,"w":385,"h":169,"abs_x":1126,"abs_y":4540}' className="bg-[#0a0a0a] border-t border-white/5 py-12 relative z-10">
<div bis_size='{"x":0,"y":4355,"w":385,"h":90,"abs_x":1126,"abs_y":4580}' className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div bis_size='{"x":127,"y":4355,"w":129,"h":19,"abs_x":1253,"abs_y":4580}' className="flex items-center gap-2">
<div bis_size='{"x":127,"y":4355,"w":19,"h":19,"abs_x":1253,"abs_y":4580}' className="w-6 h-6 bg-[#047857] rounded-md flex items-center justify-center text-white text-xs font-bold">H</div>
<span bis_size='{"x":153,"y":4355,"w":103,"h":19,"abs_x":1279,"abs_y":4580}' className="font-semibold text-white">Humain Demand</span>
</div>
<div bis_size='{"x":61,"y":4394,"w":261,"h":16,"abs_x":1187,"abs_y":4619}' className="text-sm text-neutral-500">© 2024 Humain Demand Inc. All rights reserved.</div>
<div bis_size='{"x":166,"y":4429,"w":51,"h":16,"abs_x":1292,"abs_y":4654}' className="flex gap-6 text-neutral-500">
<a bis_size='{"x":166,"y":4429,"w":16,"h":16,"abs_x":1292,"abs_y":4654}' className="hover:text-white transition-colors" href="#"><svg bis_size='{"x":166,"y":4429,"w":16,"h":16,"abs_x":1292,"abs_y":4654}' className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":167,"y":4432,"w":13,"h":11,"abs_x":1293,"abs_y":4657}' d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a bis_size='{"x":202,"y":4429,"w":16,"h":16,"abs_x":1328,"abs_y":4654}' className="hover:text-white transition-colors" href="#"><svg bis_size='{"x":202,"y":4429,"w":16,"h":16,"abs_x":1328,"abs_y":4654}' className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":209,"y":4435,"w":8,"h":8,"abs_x":1335,"abs_y":4660}' d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect bis_size='{"x":203,"y":4436,"w":2,"h":8,"abs_x":1329,"abs_y":4661}' height="12" width="4" x="2" y="9"></rect><circle bis_size='{"x":203,"y":4431,"w":2,"h":2,"abs_x":1329,"abs_y":4656}' cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="fixed bottom-6 left-6 z-40 max-w-sm w-full animate-slide-up hidden md:block">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="bg-neutral-900 p-5 rounded-xl shadow-2xl border border-white/10 relative">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute top-2 right-2 text-neutral-500 hover:text-white transition-colors" onclick="this.parentElement.style.display='none'">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-x w-3 h-3" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M18 6 6 18"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="m6 6 12 12"></path></svg>
</button>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="flex gap-1 text-yellow-400 mb-2"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-300 text-sm leading-snug mb-3">"Humain Demand revolutionized our lead flow. We stopped relying on referrals and built a predictable engine."</p>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="flex items-center gap-3">
<img bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-8 h-8 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}'><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-xs text-white font-semibold">Sarah Jenkins</div><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-[10px] text-neutral-500">VP Sales @ TechFlow</div></div>
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-check-circle-2 w-4 h-4 text-[#00ffc4] ml-auto" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' cx="12" cy="12" r="10"></circle><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4" id="booking-modal">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal(false)"></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="relative bg-neutral-900 rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl h-[600px] overflow-hidden flex flex-col md:flex-row">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-neutral-800 p-1 rounded-full text-neutral-400 transition-colors" onclick="toggleModal(false)">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M18 6 6 18"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="m6 6 12 12"></path></svg>
</button>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="md:w-1/3 bg-black/40 p-8 border-r border-white/5 flex flex-col">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-12 h-12 rounded-full bg-neutral-800 mb-4 overflow-hidden border border-white/10">
<img bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-500 font-medium text-sm uppercase tracking-wide mb-1">David Chen</h3>
<h2 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-xl font-bold text-white mb-6 opacity-0 translate-y-4 transition-all duration-700">Discovery Call</h2>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="space-y-4 text-neutral-400 text-sm">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="flex items-start gap-3"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-clock w-5 h-5 text-neutral-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M12 6v6l4 2"></path><circle bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' cx="12" cy="12" r="10"></circle></svg> <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}'>30 min</span></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="flex items-start gap-3"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-video w-5 h-5 text-neutral-600" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' height="12" rx="2" width="14" x="2" y="6"></rect></svg> <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}'>Web conferencing details provided upon confirmation.</span></div>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-500 leading-relaxed mt-4 text-xs">Book a session to see how we would engineer an unstoppable pipeline for you - without changing your workflow.</p>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="md:w-2/3 p-8 bg-neutral-900 overflow-y-auto relative">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="absolute inset-0 bg-neutral-900 z-20 flex flex-col items-center justify-center text-center p-8 hidden" id="booking-success">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="w-16 h-16 bg-[#00ffc4]/10 rounded-full flex items-center justify-center mb-6"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-check w-8 h-8 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="M20 6 9 17l-5-5"></path></svg></div>
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-2xl font-bold text-white mb-2">You're Booked!</h3>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-400 mb-8 max-w-xs">A calendar invitation has been sent to your email address.</p>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="bg-[#047857] hover:bg-[#059669] text-white px-6 py-2 rounded-lg transition-colors" onclick="toggleModal(false)">Close</button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' id="booking-form">
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="font-semibold text-lg mb-6 text-white">Select a Date &amp; Time</h3>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="mb-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="flex justify-between items-center mb-4">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="font-medium text-white">October 2024</span>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="flex gap-2">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-1 hover:bg-white/5 rounded text-neutral-400"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="m15 18-6-6 6-6"></path></svg></button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-1 hover:bg-white/5 rounded text-neutral-400"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="grid grid-cols-7 gap-2 text-center text-sm">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">MON</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">TUE</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">WED</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">THU</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">FRI</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">SAT</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-neutral-600 text-xs py-2">SUN</div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-700">29</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-700">30</span>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">1</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">2</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">3</button>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-700">4</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-700">5</span>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">6</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">7</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 bg-[#047857] text-white rounded-full font-semibold shadow-md">8</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">9</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">10</button>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-700">11</span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="p-2 text-neutral-700">12</span>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-sm font-medium text-white mb-3">Tuesday, Oct 8</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="border border-[#00ffc4] text-[#00ffc4] py-2 rounded hover:bg-[#00ffc4]/10 font-medium transition-colors" onclick="confirmBooking()">9:00am</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">9:30am</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">10:00am</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">11:15am</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">1:00pm</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">3:30pm</button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="mt-8 pt-6 border-t border-white/5 text-center">
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1126,"abs_y":225}' className="text-xs text-neutral-500">Times are shown in your local timezone (EST).</p>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
