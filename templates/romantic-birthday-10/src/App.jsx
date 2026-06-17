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



      document.addEventListener('DOMContentLoaded', () => {
          const heroContainer = document.getElementById('hero-floating-container');
          const lockContainer = document.getElementById('lock-floating-container');
          
          function createFloatingIcon(container, icon, color, size, duration) {
              const el = document.createElement('div');
              el.className = 'floating-element';
              el.style.left = `${Math.random() * 100}vw`;
              el.style.animationDuration = `${duration}s`;
              el.style.animationDelay = `${Math.random() * 10}s`;
              el.innerHTML = `<iconify-icon icon="${icon}" style="color: ${color}; font-size: ${size}px;"></iconify-icon>`;
              container.appendChild(el);
          }

          const icons = ['solar:balloon-linear', 'solar:heart-bold', 'solar:heart-linear'];
          const colors = ['#38bdf8', '#f43f5e', '#fb7185', '#7dd3fc', '#ffffff'];
          
          for(let i=0; i<30; i++) {
              createFloatingIcon(heroContainer, icons[Math.floor(Math.random()*3)], colors[Math.floor(Math.random()*5)], Math.random()*20+15, Math.random()*15+15);
          }

          const lockIcons = [...icons, 'solar:cupcake-linear'];
          for(let i=0; i<25; i++) {
              createFloatingIcon(lockContainer, lockIcons[Math.floor(Math.random()*4)], colors[Math.floor(Math.random()*5)], Math.random()*15+15, Math.random()*10+10);
          }

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('opacity-0', 'translate-y-8');
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                  }
              });
          }, { threshold: 0.15 });

          document.querySelectorAll('.scroll-fade').forEach(section => observer.observe(section));

          const startDate = new Date('2025-11-01T00:00:00').getTime();
          function updateCounter() {
              const now = new Date().getTime();
              const diff = now - startDate;
              if(diff < 0) return;
              document.getElementById('c-days').innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
              document.getElementById('c-hours').innerText = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
              document.getElementById('c-mins').innerText = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
              document.getElementById('c-secs').innerText = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
          }
          setInterval(updateCounter, 1000); updateCounter();

          function initStars() {
              const container = document.getElementById('stars-container');
              for(let i=0; i<200; i++) createDriftingStar(container, Math.random() * 100);
          }

          function createDriftingStar(container, startLeft) {
              const star = document.createElement('div');
              const size = Math.random() * 2 + 0.5;
              star.className = 'absolute bg-white rounded-full';
              star.style.width = `${size}px`; star.style.height = `${size}px`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.left = `${startLeft}vw`;
              star.style.opacity = Math.random() * 0.7 + 0.3;
              container.appendChild(star);
              const duration = ( (110 - startLeft) / 100 ) * (Math.random() * 20000 + 30000);
              star.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(110vw)' }], { duration, easing: 'linear' }).onfinish = () => star.remove();
          }

          const playCinematicSequence = async () => {
              const container = document.getElementById('typed-content');
              const anchor = document.getElementById('scroll-anchor');
              const sequence = [
                  "Welcome to the most special part of this website. ✨", "",
                  "You unlocked the secret page. 🔐",
                  "Only for the most important person in my world. 🤍", "",
                  "Everything here exists for one reason.", "You. 🤍", "",
                  "20 November 2025 🤍", "The first time I met my Churail. 😭", "",
                  "Red and green suit ❤️💚", "Pink hijab 💗", "That beautiful green ring 💍", "And those eyes... 🥺", "",
                  "But more than memories...", "I want to give you something more lasting."
              ];

              for (let item of sequence) {
                  if (item === "") {
                      const spacer = document.createElement('div'); spacer.className = "h-8"; container.appendChild(spacer);
                      anchor.scrollIntoView({ behavior: 'smooth' }); continue;
                  }
                  const wrapper = document.createElement('div'); const p = document.createElement('span');
                  p.className = "inline-block mb-1"; wrapper.appendChild(p); container.appendChild(wrapper);
                  const chars = Array.from(item);
                  for (let char of chars) {
                      p.innerHTML += char; anchor.scrollIntoView({ behavior: 'smooth' });
                      await new Promise(r => setTimeout(r, 15));
                  }
                  await new Promise(r => setTimeout(r, 400));
              }

              // Reveal Promises
              const promisesContainer = document.getElementById('promises-container');
              promisesContainer.classList.remove('hidden');
              setTimeout(() => {
                promisesContainer.classList.remove('opacity-0');
                promisesContainer.scrollIntoView({ behavior: 'smooth' });
              }, 500);

              await new Promise(r => setTimeout(r, 3000));
              
              const revealBtn = document.getElementById('reveal-btn');
              revealBtn.classList.remove('hidden'); 
              setTimeout(() => {
                revealBtn.classList.remove('opacity-0');
                anchor.scrollIntoView({ behavior: 'smooth' });
              }, 100);
          };

          const passInput = document.getElementById('password-input');
          const unlockBtn = document.getElementById('unlock-btn');
          const errorMsg = document.getElementById('error-msg');
          const successMsg = document.getElementById('success-message');
          const celebLayer = document.getElementById('celebration-burst');

          async function handleUnlock() {
              if (passInput.value.trim().toLowerCase() === 'churail') {
                  const bgMusic = document.getElementById('bg-music');
                  bgMusic.volume = 0.2; bgMusic.play().catch(() => {});
                  
                  celebLayer.classList.remove('hidden');
                  const pc = document.getElementById('popper-container');
                  for(let i=0; i<40; i++) {
                      const p = document.createElement('div');
                      p.className = 'absolute animate-pop';
                      p.style.left = `${Math.random()*100}%`; p.style.top = `${Math.random()*100}%`;
                      p.innerHTML = `<iconify-icon icon="${['solar:confetti-minimalistic-linear','solar:cupcake-linear'][Math.floor(Math.random()*2)]}" class="text-sky-400" width="40"></iconify-icon>`;
                      pc.appendChild(p);
                  }

                  await new Promise(r => setTimeout(r, 3500));
                  celebLayer.style.opacity = '0';
                  setTimeout(() => celebLayer.classList.add('hidden'), 1000);

                  document.body.style.overflow = 'hidden';
                  successMsg.classList.remove('hidden');
                  initStars();
                  setTimeout(() => { 
                    successMsg.classList.remove('opacity-0'); 
                    setTimeout(playCinematicSequence, 1000); 
                  }, 50);
              } else {
                  errorMsg.style.opacity = '1';
                  setTimeout(() => errorMsg.style.opacity = '0', 2000);
              }
          }
          unlockBtn.addEventListener('click', handleUnlock);
          passInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleUnlock());

          document.getElementById('reveal-btn').addEventListener('click', function() {
              this.classList.add('opacity-0');
              setTimeout(() => {
                  this.classList.add('hidden');
                  const hm = document.getElementById('hidden-message');
                  hm.classList.remove('hidden'); setTimeout(() => { hm.classList.remove('opacity-0'); hm.scrollIntoView({ behavior: 'smooth' }); }, 100);
              }, 500);
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
      

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-gradient-to-b from-neutral-50 via-neutral-100/50 to-neutral-50">
<div className="absolute inset-0 overflow-hidden pointer-events-none" id="hero-floating-container"></div>
<div className="z-10 text-center max-w-2xl scroll-fade transition-all duration-1000 ease-out opacity-100 translate-y-0">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 mb-8 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Happy Birthday,
          <br/>
<span className="text-sky-500 italic font-light">Doraemon</span>
          💙
        </h1>
<p className="text-xl md:text-2xl text-neutral-500 font-extralight tracking-wide leading-relaxed mb-12">
          You act tough...
          <br/>
          But you're the softest part of my life.
        </p>
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white text-lg font-light tracking-wide hover:bg-neutral-800 hover:scale-105 hover:shadow-xl hover:shadow-neutral-900/20 transition-all duration-500" href="#timeline">
          Enter My World
          <iconify-icon height="24" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 md:py-40 px-6 bg-neutral-50" id="timeline">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-20 scroll-fade transition-all duration-1000 ease-out opacity-100 translate-y-0">
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Our Journey
          </h2>
<div className="w-16 h-px bg-neutral-200 mx-auto"></div>
</div>
<div className="relative border-l border-neutral-200/80 ml-4 md:ml-0 md:space-y-24 space-y-16">
<div className="relative pl-10 md:pl-16 scroll-fade transition-all duration-1000 ease-out group">
<div className="absolute w-4 h-4 bg-neutral-50 border border-neutral-300 rounded-full -left-[8.5px] top-1.5 group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-500"></div>
<span className="text-base font-light text-sky-500 tracking-wider uppercase block mb-3">1 November 2025</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>First Video Call 🤍✨</h3>
<p className="text-lg md:text-xl text-neutral-500 font-extralight leading-relaxed">The moment it all started. A screen between us, but a connection that felt instantly real.</p>
</div>
<div className="relative pl-10 md:pl-16 scroll-fade transition-all duration-1000 ease-out group">
<div className="absolute w-4 h-4 bg-neutral-50 border border-neutral-300 rounded-full -left-[8.5px] top-1.5 group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-500"></div>
<span className="text-base font-light text-sky-500 tracking-wider uppercase block mb-3">9 November 2025</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Second Video Call ✨🤍</h3>
<p className="text-lg md:text-xl text-neutral-500 font-extralight leading-relaxed">Getting comfortable, sharing laughs, and realizing this is something special.</p>
</div>
<div className="relative pl-10 md:pl-16 scroll-fade transition-all duration-1000 ease-out group">
<div className="absolute w-4 h-4 bg-neutral-50 border border-neutral-300 rounded-full -left-[8.5px] top-1.5 group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-500"></div>
<span className="text-base font-light text-sky-500 tracking-wider uppercase block mb-3">15 November 2025</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Third Video Call 🌝🤍</h3>
<p className="text-lg md:text-xl text-neutral-500 font-extralight leading-relaxed">More stories, deeper conversations. The bond was quietly strengthening.</p>
</div>
<div className="relative pl-10 md:pl-16 scroll-fade transition-all duration-1000 ease-out group">
<div className="absolute w-4 h-4 bg-neutral-50 border border-neutral-300 rounded-full -left-[8.5px] top-1.5 group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-500"></div>
<span className="text-base font-light text-sky-500 tracking-wider uppercase block mb-3">20 November 2025</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>First Meet Up 😭🤍</h3>
<p className="text-lg md:text-xl text-neutral-500 font-extralight leading-relaxed bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/40">
              I was late… but you didn’t complain. <br/> Red &amp; green suit, pink hijab. <br/> That <span className="text-sky-500 font-light">green ring</span> … your <span className="text-sky-500 font-light">eyes</span> … sitting in the <span className="text-sky-500 font-light">front seat</span> beside me. <br/> Nervous like never before… but the happiest moment ever.
            </p>
</div>
<div className="relative pl-10 md:pl-16 scroll-fade transition-all duration-1000 ease-out group">
<div className="absolute w-4 h-4 bg-neutral-50 border border-neutral-300 rounded-full -left-[8.5px] top-1.5 group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-500"></div>
<span className="text-base font-light text-sky-500 tracking-wider uppercase block mb-3">19 December 2025</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Second Meet Up 😄🤍</h3>
<p className="text-lg md:text-xl text-neutral-500 font-extralight leading-relaxed bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/40">
              Blue jeans, simple sweatshirt, same green ring. <br/> Time ran too fast. <br/> Laughed, ate, enjoyed… every second with you was magic.
            </p>
</div>
<div className="relative pl-10 md:pl-16 scroll-fade transition-all duration-1000 ease-out group">
<div className="absolute w-4 h-4 bg-neutral-50 border border-neutral-300 rounded-full -left-[8.5px] top-1.5 group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-500"></div>
<span className="text-base font-light text-sky-500 tracking-wider uppercase block mb-3">09 January 2026</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-800 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Third Meet Up 🙃🤍</h3>
<p className="text-lg md:text-xl text-neutral-500 font-extralight leading-relaxed bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/40">
              That day made me realize… I no longer want anyone else. <br/> My tension disappears when you talk. <br/> You’re my sakoon… my <span className="text-rose-400 font-light italic">Churail</span>.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-100/40 px-6 border-y border-neutral-200/50">
<div className="max-w-5xl mx-auto scroll-fade transition-all duration-1000 ease-out">
<div className="text-center mb-16">
<span className="text-base font-light text-sky-500 tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
<iconify-icon height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
            Proceed with caution
          </span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Warning: This Doraemon Has Attitude</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
<div className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-neutral-200/60 rounded-[2.5rem] p-10 text-center cursor-default transition-all duration-500 hover:bg-white hover:border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1">
<div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-4 group-hover:opacity-0">
<iconify-icon className="text-sky-400 mx-auto mb-6 block" height="40" icon="solar:bomb-emoji-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="text-2xl font-light tracking-tight text-neutral-800">Gets angry in 0.5 seconds</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
<p className="text-xl text-neutral-500 font-extralight">...but forgives me even faster because she can't stay mad at me.</p>
</div>
</div>
<div className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-neutral-200/60 rounded-[2.5rem] p-10 text-center cursor-default transition-all duration-500 hover:bg-white hover:border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1">
<div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-4 group-hover:opacity-0">
<iconify-icon className="text-sky-400 mx-auto mb-6 block" height="40" icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="text-2xl font-light tracking-tight text-neutral-800">Says "I don't care"</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
<p className="text-xl text-neutral-500 font-extralight">...but is secretly checking up on me to make sure I'm okay.</p>
</div>
</div>
<div className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-neutral-200/60 rounded-[2.5rem] p-10 text-center cursor-default transition-all duration-500 hover:bg-white hover:border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1">
<div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-4 group-hover:opacity-0">
<iconify-icon className="text-sky-400 mx-auto mb-6 block" height="40" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="text-2xl font-light tracking-tight text-neutral-800">Pretends strong</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
<p className="text-xl text-neutral-500 font-extralight">...but is so soft inside, and I’m the lucky one who gets to hold that softness.</p>
</div>
</div>
<div className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-neutral-200/60 rounded-[2.5rem] p-10 text-center cursor-default transition-all duration-500 hover:bg-white hover:border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1">
<div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-4 group-hover:opacity-0">
<iconify-icon className="text-sky-400 mx-auto mb-6 block" height="40" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="text-2xl font-light tracking-tight text-neutral-800">Churail mode activated 😭</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
<p className="text-xl text-neutral-500 font-extralight">...but she's the only Churail I ever want to be haunted by.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-neutral-50 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.rose.50/40)_0%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center scroll-fade transition-all duration-1000 ease-out relative z-10">
<iconify-icon className="text-rose-200 mx-auto mb-10 block" height="48" icon="solar:double-quotes-l-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<h2 className="text-4xl font-light tracking-tight text-neutral-900 mb-10" style={{fontFamily: '\'Playfair Display\', serif'}}>But Listen, My Churail...</h2>
<p className="text-2xl md:text-3xl text-neutral-600 font-extralight leading-relaxed italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
          "You act strong, but I see your real softness. <br/> I will protect your smile, <br/> Handle your nakhre, <br/> And never let you feel alone. <br/> You're my forever."
        </p>
</div>
</section>

<section className="py-32 px-6 bg-white border-y border-neutral-200/50 overflow-hidden">
<div className="max-w-5xl mx-auto scroll-fade transition-all duration-1000 ease-out">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Our Memories</h2>
<div className="w-16 h-px bg-neutral-200 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50 group aspect-[9/16] bg-neutral-200">
<img alt="Holding Hands" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-center z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Never Letting Go</h3>
<p className="text-xl text-white/90 font-extralight italic" style={{fontFamily: '\'Playfair Display\', serif'}}>"Your hand fits in mine perfectly."</p>
</div>
</div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50 group aspect-[9/16] bg-neutral-200 mt-0 md:mt-16">
<img alt="Together" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-center z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Walking Together</h3>
<p className="text-xl text-white/90 font-extralight italic" style={{fontFamily: '\'Playfair Display\', serif'}}>"Step by step, always by your side."</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-32 px-6">
<div className="max-w-4xl mx-auto text-center scroll-fade transition-all duration-1000 ease-out">
<h2 className="text-lg font-light text-sky-500 tracking-widest uppercase mb-3">Since Doraemon Entered My Life</h2>
<p className="text-base font-light text-neutral-400 mb-14">Starting 1 November 2025</p>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
<div className="flex flex-col items-center min-w-[100px]">
<span className="text-6xl md:text-7xl font-light tracking-tight text-neutral-800 mb-3" id="c-days" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-base font-light text-neutral-400 uppercase tracking-widest">Days</span>
</div>
<div className="flex flex-col items-center min-w-[100px]">
<span className="text-6xl md:text-7xl font-light tracking-tight text-neutral-800 mb-3" id="c-hours" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-base font-light text-neutral-400 uppercase tracking-widest">Hours</span>
</div>
<div className="flex flex-col items-center min-w-[100px]">
<span className="text-6xl md:text-7xl font-light tracking-tight text-neutral-800 mb-3" id="c-mins" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-base font-light text-neutral-400 uppercase tracking-widest">Mins</span>
</div>
<div className="flex flex-col items-center min-w-[100px]">
<span className="text-6xl md:text-7xl font-light tracking-tight text-sky-500 mb-3" id="c-secs" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-base font-light text-neutral-400 uppercase tracking-widest">Secs</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-neutral-100/30 border-neutral-200/50 border-t py-40 px-6 relative" id="lock-section">
<div className="absolute inset-0 overflow-hidden pointer-events-none" id="lock-floating-container"></div>
<div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[400px]">
<div className="p-8 md:p-14 shadow-neutral-200/50 transition-all duration-1000 z-20 text-center bg-white/90 backdrop-blur-md w-full max-w-lg border-neutral-200 border rounded-[2.5rem] relative shadow-2xl mx-auto" id="lock-form">
<div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-8 text-sky-400 shadow-inner">
<iconify-icon height="32" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-light tracking-tight text-neutral-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>For You Only</h2>
<p className="text-base font-extralight text-neutral-500 mb-10 px-4">Password hint: The name you pretend to dislike when I call you 😉</p>
<div className="space-y-5">
<input className="w-full text-center px-6 py-4 rounded-2xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-sky-300 focus:ring-4 focus:ring-sky-100 outline-none transition-all text-lg font-light shadow-sm" id="password-input" placeholder="Enter password..." type="password"/>
<p className="text-base text-rose-500 h-6 opacity-0 transition-opacity font-light" id="error-msg">Incorrect, try again</p>
<button className="w-full py-4 rounded-2xl bg-neutral-900 text-white text-lg font-light tracking-wide hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10" id="unlock-btn">Unlock</button>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-[110] bg-white flex flex-col items-center justify-center transition-opacity duration-1000" id="celebration-burst">
<div className="absolute inset-0 pointer-events-none" id="popper-container"></div>
<div className="text-center animate-pop">
<div className="flex justify-center gap-4 mb-8">
<iconify-icon className="text-rose-400" height="64" icon="solar:cupcake-linear" width="64"></iconify-icon>
<iconify-icon className="text-sky-400" height="64" icon="solar:confetti-minimalistic-linear" width="64"></iconify-icon>
<iconify-icon className="text-rose-400" height="64" icon="solar:cupcake-linear" width="64"></iconify-icon>
</div>
<h2 className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>
                HAPPY <span className="text-sky-500">BIRTHDAY</span>
</h2>
<p className="mt-6 text-xl text-neutral-500 font-extralight tracking-widest uppercase">My Dearest Doraemon</p>
</div>
</div>

<div className="hidden opacity-0 fixed inset-0 z-[100] transition-opacity duration-[1500ms] overflow-y-auto overflow-x-hidden scroll-smooth w-full h-full" id="success-message" style={{background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)'}}>
<audio id="bg-music" loop="" src="https://ia903204.us.archive.org/16/items/ChopinNocturneOp9No2_402/Chopin_Nocturne_Op_9_No_2.mp3"></audio>
<div className="fixed inset-0 overflow-hidden pointer-events-none z-0" id="stars-container"></div>
<div className="fixed inset-0 opacity-20 pointer-events-none z-0 blur-[100px]" style={{background: 'radial-gradient(circle at 30% 20%, #4c1d95 0%, transparent 40%), radial-gradient(circle at 70% 80%, #1e40af 0%, transparent 40%)'}}></div>
<div className="relative z-20 min-h-screen flex flex-col items-center py-24 md:py-32 px-6">
<div className="w-full max-w-2xl text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/95 leading-relaxed md:leading-loose text-center mb-12" id="typed-content" style={{fontFamily: '\'Playfair Display\', serif'}}></div>

<div className="hidden opacity-0 w-full max-w-3xl transition-all duration-1000 mb-20" id="promises-container">
<div className="text-center mb-16">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white italic" style={{fontFamily: '\'Playfair Display\', serif'}}>💌 My Promises to You</h3>
<div className="w-12 h-px bg-white/20 mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 gap-8 md:gap-10">
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:stars-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to always respect you and your feelings, no matter what.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:user-speak-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to listen to you, even when you think no one understands you.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:crown-minimalistic-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to support your dreams and stand beside you in every situation.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:sun-2-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to make you smile, even on your hardest days.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to be honest with you and never hide the truth.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:heart-lock-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to protect your heart and never intentionally hurt you.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:globus-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to grow with you, learn with you, and build a better future together.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise that no matter how busy life gets, you will always be important to me.</p>
</div>
<div className="flex items-start gap-5">
<iconify-icon className="text-sky-300 mt-1 shrink-0" height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
<p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">I promise to choose you again and again, every single day.</p>
</div>
<div className="flex items-start gap-5 pt-8 border-t border-white/10">
<iconify-icon className="text-rose-400 mt-1 shrink-0" height="28" icon="solar:heart-bold" width="28"></iconify-icon>
<p className="text-xl md:text-2xl font-light text-white tracking-wide" style={{fontFamily: '\'Playfair Display\', serif'}}>And most importantly, I promise to love you with sincerity, loyalty, and care. ❤️</p>
</div>
</div>
</div>
<button className="hidden opacity-0 transition-opacity duration-1000 mt-10 px-10 py-5 rounded-full bg-white/5 border border-white/20 text-white text-lg font-light tracking-wide hover:bg-white/10 hover:border-white/40 backdrop-blur-md shadow-2xl" id="reveal-btn">Reveal Secret Message 🔐</button>
<div className="hidden opacity-0 transition-all duration-1000 mt-16 p-10 md:p-14 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md text-center max-w-2xl w-full text-lg md:text-xl font-light text-white/90 leading-relaxed shadow-2xl" id="hidden-message" style={{fontFamily: '\'Playfair Display\', serif'}}>
<h3 className="text-3xl md:text-4xl mb-10 text-rose-300 tracking-tight">Hidden Message 💌</h3>
<p className="mb-6">After careful research I discovered something important.</p>
<p className="mb-6">My Churail is not a normal witch. 🧙‍♀️</p>
<p className="mb-6 text-rose-300 text-xl md:text-2xl italic tracking-wide">She collects hearts. 💖</p>
<p className="mb-10">And unfortunately… she already stole mine. 😭</p>
<p className="text-2xl md:text-3xl text-sky-300 italic tracking-wide">I think that’s the best theft that ever happened. 🤍</p>
</div>
<div className="h-16 w-full" id="scroll-anchor"></div>
</div>
</div>

<section className="bg-neutral-50 border-neutral-200/50 border-t py-32 px-6 relative">
<div className="max-w-4xl mx-auto text-center scroll-fade transition-all duration-1000 ease-out">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-12" style={{fontFamily: '\'Playfair Display\', serif'}}>For My Doraemon… My Hamdard 💙</h2>
<div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-300/40 bg-white border border-neutral-200 p-3">
<div className="aspect-video w-full rounded-[1.5rem] overflow-hidden relative bg-neutral-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/FJ55SHCzt88" title="YouTube video player"></iframe>
</div>
</div>
<div className="mt-20 text-base font-light text-neutral-400 tracking-widest uppercase flex justify-center items-center gap-2">
          Made with <iconify-icon className="text-rose-300" height="20" icon="solar:heart-linear" width="20"></iconify-icon> forever
        </div>
</div>
</section>


    </>
  );
}
