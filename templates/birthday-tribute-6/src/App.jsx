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



      // Initialize static icons
      lucide.createIcons();

      // State & Elements
      const gateScreen = document.getElementById('entry-gate');
      const noScreen = document.getElementById('no-screen');
      const mainContent = document.getElementById('main-content');
      const bgMusic = document.getElementById('bg-music');
      const musicBtn = document.getElementById('music-btn');

      // Typing Effect Data
      const typingString = "To the one who has been there since day one. May your day be as beautiful, bright, and extraordinary as you are. I love you! ❤️";
      const typingSpeed = 50;
      let typingIndex = 0;

      function handleYes() {
          // Hide Gate
          gateScreen.style.opacity = '0';
          gateScreen.style.pointerEvents = 'none';

          setTimeout(() => {
              gateScreen.classList.add('hidden');

              // Show Main Content
              mainContent.classList.remove('hidden');
              // Trigger reflow
              void mainContent.offsetWidth;
              mainContent.style.opacity = '1';

              // Show Music Button
              musicBtn.style.opacity = '1';
              musicBtn.style.pointerEvents = 'auto';
              musicBtn.style.transform = 'translateY(0)';

              // Play Music (User interacted, so it should play)
              bgMusic.volume = 0.4;
              bgMusic.play().catch(e => console.log("Audio autoplay prevented"));

              // Start Animations
              createConfetti();
              createFloatingHearts();
              setTimeout(typeWriter, 1000);
          }, 1000);
      }

      function handleNo() {
          gateScreen.style.opacity = '0';
          gateScreen.style.pointerEvents = 'none';

          setTimeout(() => {
              gateScreen.classList.add('hidden');
              noScreen.classList.remove('hidden');
              noScreen.style.opacity = '1';
              noScreen.style.pointerEvents = 'auto';
          }, 1000);
      }

      function toggleMusic() {
          const iconContainer = document.getElementById('music-icon-container');
          if (bgMusic.paused) {
              bgMusic.play();
              iconContainer.innerHTML = '<i data-lucide="music" stroke-width="1.5" class="w-6 h-6"></i>';
          } else {
              bgMusic.pause();
              iconContainer.innerHTML = '<i data-lucide="volume-x" stroke-width="1.5" class="w-6 h-6"></i>';
          }
          lucide.createIcons({ root: iconContainer });
      }

      function typeWriter() {
          if (typingIndex < typingString.length) {
              document.getElementById("typing-text").innerHTML += typingString.charAt(typingIndex);
              typingIndex++;
              setTimeout(typeWriter, typingSpeed);
          } else {
              // Hide cursor when done
              document.getElementById('cursor').style.display = 'none';
          }
      }

      function createConfetti() {
          const colors = ['#f472b6', '#c084fc', '#fbbf24', '#ffffff'];
          for(let i = 0; i < 80; i++) {
              let conf = document.createElement('div');
              conf.style.position = 'fixed';
              conf.style.left = Math.random() * 100 + 'vw';
              conf.style.top = '-20px';

              // Use style properties for geometric dimensions that are animated
              conf.style.width = Math.random() * 8 + 4 + 'px';
              conf.style.height = Math.random() * 8 + 4 + 'px';

              conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
              conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
              conf.style.zIndex = '40';
              conf.style.pointerEvents = 'none';

              // Randomize animation
              const duration = Math.random() * 3 + 3;
              const delay = Math.random() * 2;
              conf.style.animation = `fall ${duration}s linear ${delay}s forwards`;

              document.body.appendChild(conf);

              // Cleanup
              setTimeout(() => conf.remove(), (duration + delay) * 1000);
          }
      }

      function createFloatingHearts() {
          const container = document.getElementById('floating-elements');
          const icons = ['heart', 'star', 'wand-2'];
          const sizes = ['w-4 h-4', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10'];

          for(let i = 0; i < 15; i++) {
              let el = document.createElement('div');
              el.style.position = 'absolute';
              el.style.left = Math.random() * 100 + 'vw';
              el.style.top = Math.random() * 100 + 'vh';
              el.style.opacity = '0.2';
              el.style.color = i % 2 === 0 ? '#f472b6' : '#c084fc'; // Pink or purple

              // Float animation
              const duration = Math.random() * 4 + 4;
              const delay = Math.random() * 5;
              el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

              let iconContainer = document.createElement('div');
              let iconName = icons[Math.floor(Math.random() * icons.length)];
              let sizeClass = sizes[Math.floor(Math.random() * sizes.length)];

              iconContainer.innerHTML = `<i data-lucide="${iconName}" stroke-width="1.5" class="${sizeClass}"></i>`;
              el.appendChild(iconContainer);
              container.appendChild(el);

              lucide.createIcons({ root: el });
          }
      }

      // Scroll Reveal Logic
      document.addEventListener("DOMContentLoaded", () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.style.opacity = '1';
                      entry.target.style.transform = entry.target.style.transform.replace(/translateY\([^)]+\)/, 'translateY(0)').replace(/scale\([^)]+\)/, 'scale(1)');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          // Give a slight delay before observing to allow DOM to settle
          setTimeout(() => {
              const revealElements = document.querySelectorAll('[data-reveal]');
              revealElements.forEach(el => observer.observe(el));
          }, 100);
      });
    


      (function() {
          const uploadBtn = document.getElementById('music-upload-btn');
          if (uploadBtn) {
              lucide.createIcons({ root: uploadBtn });
          }
          if (typeof window.handleYes === 'function') {
              const originalHandleYes = window.handleYes;
              window.handleYes = function() {
                  originalHandleYes();
                  setTimeout(() => {
                      if(uploadBtn) {
                          uploadBtn.style.opacity = '1';
                          uploadBtn.style.pointerEvents = 'auto';
                          uploadBtn.style.transform = 'translateY(0)';
                      }
                  }, 1000);
              };
          }
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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe frameborder="0" height="100%" src="https://scontent.fdbd1-3.fna.fbcdn.net/v/t1.15752-9/650347980_1471941761211989_4899141584146368403_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=9f807c&amp;_nc_ohc=VwQE4SIX_NUQ7kNvwE-okHP&amp;_nc_oc=AdrTncgNm1MBsoBreJEBnjMtcyy9-QvpmQ1ub6IotkG1DYYpGON_8-ZeCZPjSxTrNZs&amp;_nc_zt=23&amp;_nc_ht=scontent.fdbd1-3.fna&amp;_nc_ss=7a32e&amp;oh=03_Q7cD4wFZyHrrGbHm2Okc5xzRCmXD7jZLXPwiDkMWnIpc8Z6Z8g&amp;oe=69E7AC83" width="100%"></iframe>
</div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-3/4 aspect-square bg-pink-500/20 rounded-full blur-[120px]" style={{animation: 'pulse-glow 8s ease-in-out infinite'}}></div>
<div className="absolute bottom-0 right-1/4 w-3/4 aspect-square bg-purple-500/20 rounded-full blur-[120px]" style={{animation: 'pulse-glow 10s ease-in-out infinite reverse'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square bg-amber-500/10 rounded-full blur-[100px]" style={{animation: 'pulse-glow 12s ease-in-out infinite'}}></div>
</div>

<audio id="bg-music" loop="">
<source "c:\users\veersin\downloads\bargad(koshalworld.com).mp3"""="" src="" type="audio/mpeg"/>
</audio>

<button className="fixed bottom-6 right-6 z-50 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white shadow-xl hover:bg-white/20 transition-all duration-300 opacity-0 pointer-events-none" id="music-btn" onclick="toggleMusic()" style={{transform: 'translateY(20px)'}}>
<div className="flex items-center justify-center" id="music-icon-container">
<i className="w-6 h-6" data-lucide="music" strokeWidth="1.5"></i>
</div>
</button>
<label className="fixed bottom-6 right-24 z-50 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white shadow-xl hover:bg-white/20 transition-all duration-300 opacity-0 pointer-events-none cursor-pointer flex items-center justify-center group" htmlFor="music-upload" id="music-upload-btn" style={{transform: 'translateY(20px)'}} title="Add your own music">
<i className="w-6 h-6" data-lucide="headphones" strokeWidth="1.5"></i>
<span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out ml-0 group-hover:ml-3 text-sm font-medium tracking-wide">
        Add Music
      </span>
<input accept="audio/*" className="hidden" id="music-upload" onchange="const file = this.files[0]; if(file) { const audio = document.getElementById('bg-music'); audio.src = URL.createObjectURL(file); audio.play(); document.getElementById('music-icon-container').innerHTML = '&lt;i data-lucide=\'music\' strokeWidth=\'1.5\' class=\'w-6 h-6\'&gt;&lt;/i&gt;'; lucide.createIcons(); }" type="file"/>
</label>

<div className="fixed flex transition-all duration-1000 bg-slate-950/80 z-50 top-0 right-0 bottom-0 left-0 backdrop-blur-2xl items-center justify-center" id="entry-gate">
<div className="text-center bg-white/5 w-[90%] max-w-md border-white/10 border rounded-3xl mr-auto ml-auto pt-10 pr-10 pb-10 pl-10 shadow-2xl backdrop-blur-xl" style={{transform: 'scale(0.95)', opacity: '0', animation: 'scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}>
<style>
          @keyframes scaleIn { to { transform: scale(1); opacity: 1; } }
        </style>
<div className="mb-8 flex justify-center">
<i className="w-10 h-10 text-pink-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-8 leading-snug">
          Do you really want to see something special?
          <span className="text-pink-400">💖</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 justify-center">
<button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full tracking-wide hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]" onclick="handleYes()">
            YES
          </button>
<button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full tracking-wide hover:bg-white/10 transition-colors duration-300" onclick="handleNo()">
            NO
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 opacity-0 pointer-events-none transition-opacity duration-700" id="no-screen">
<div className="text-center space-y-6 p-6">
<div className="text-6xl mb-4">😅🔫</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-300">
          Oops!
        </h2>
<p className="text-lg md:text-xl text-slate-400">
          You just missed something incredibly special...
        </p>
<button className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10" onclick="location.reload()">
          Go back and click YES
        </button>
</div>
</div>

<main className="relative z-10 hidden opacity-0 transition-opacity duration-1000 min-h-screen pb-32" id="main-content">

<section className="min-h-[80vh] flex flex-col items-center justify-center px-4 pt-20">
<div className="text-center space-y-6 max-w-4xl mx-auto" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs tracking-wide uppercase mb-4">
<i className="w-4 h-4 mr-2" data-lucide="crown" strokeWidth="1.5"></i>
            Happy Birthday
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-pink-200 to-purple-300 leading-tight pb-2">
            Happy Birthday
            <br/>
            My Lovely Sister 💕
          </h1>
<div className="h-[6rem] md:h-[4rem] mt-8 flex items-center justify-center">
<p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed tracking-wide" id="typing-text"></p>
<span className="inline-block w-[2px] h-6 bg-pink-400 ml-1 animate-pulse" id="cursor"></span>
</div>
</div>
</section>

<div className="absolute inset-0 pointer-events-none z-[-1]" id="floating-elements">

</div>

<section className="py-20 px-4 max-w-6xl mx-auto">
<div className="text-center mb-12" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out'}}>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">
            Beautiful Memories
          </h3>
<p className="text-base text-slate-400">Moments we've shared together</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

<div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900 border border-white/5" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out 0.1s'}}>
<img alt="Memory" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6cbd0a9-9264-4081-bfde-21101f6aa589_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900 border border-white/5" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out 0.2s'}}>
<img alt="Memory" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98dbb53d-32ca-4499-95f1-e095f9aafd24_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900 border border-white/5" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out 0.3s'}}>
<img alt="Memory" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbb92baa-667d-431f-b911-0140a16696c2_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>

<div className="mt-8 flex justify-center gap-4" data-reveal="" style={{opacity: '0', transition: 'all 1s ease-out 0.4s'}}>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-slate-300 transition-colors">
<i className="w-4 h-4" data-lucide="image-plus" strokeWidth="1.5"></i>
            Add Photo
          </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-slate-300 transition-colors">
<i className="w-4 h-4" data-lucide="image-minus" strokeWidth="1.5"></i>
            Edit Grid
          </button>
</div>
</section>

<section className="py-20 px-4 max-w-3xl mx-auto space-y-6">
<div className="text-center mb-12" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out'}}>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">
            My Wishes For You
          </h3>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/50 to-purple-500/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<i className="w-10 h-10 text-white/10 mb-4 block" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-slate-300 font-light leading-relaxed">
            Thank you for always being my biggest supporter, my confidante, and
            my best friend. Life is simply better with you in it. May this year
            bring you as much joy as you bring to everyone around you.
          </p>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group" data-reveal="" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s ease-out 0.2s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 to-amber-500/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<i className="w-10 h-10 text-white/10 mb-4 block" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-slate-300 font-light leading-relaxed">
            I cherish all our crazy memories, the late-night talks, and the
            endless laughter. You deserve all the love, success, and happiness
            in the world. Keep shining bright! ✨
          </p>
</div>
<div className="flex justify-center mt-6" data-reveal="" style={{opacity: '0', transition: 'all 1s ease-out 0.3s'}}>
<button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 border border-dashed border-white/20 rounded-full text-sm text-slate-400 transition-colors">
<i className="w-4 h-4" data-lucide="pen-square" strokeWidth="1.5"></i>
            Write another message
          </button>
</div>
</section>

<section className="min-h-[60vh] flex items-center justify-center px-4 py-32 relative">
<div className="text-center" data-reveal="" style={{opacity: '0', transform: 'scale(0.9)', transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="relative inline-block">

<div className="absolute inset-0 bg-amber-400/20 blur-[60px] rounded-full"></div>
<h2 className="relative text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-400 pb-2 drop-shadow-2xl">
              You are the best
              <br/>
              sister ever 💫
            </h2>
</div>
<p className="mt-8 text-base text-slate-400 tracking-widest uppercase">
            Love always.
          </p>
</div>
</section>
</main>



    </>
  );
}
