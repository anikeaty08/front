import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
plugify: {
DEFAULT: '#007FFF',
light: '#3399FF',
dim: '#0055AA',
dark: '#001133',
glow: 'rgba(0, 127, 255, 0.6)'
},
black: '#020408',
},
animation: {
'flicker': 'flicker 3s infinite',
'mist': 'mist 60s linear infinite alternate',
'flash-glow': 'flashGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
flicker: {
'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.8' },
},
mist: {
'0%': { transform: 'translateX(-10%) translateY(-10%) scale(1)' },
'100%': { transform: 'translateX(10%) translateY(10%) scale(1.2)' },
},
flashGlow: {
'0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(0, 127, 255, 0.8))' },
'50%': { opacity: '0.3', filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))' }
}
}
}
}
}



      // --- 1. Background Effects ---
      const starContainer = document.getElementById('star-container');
      const meteorContainer = document.getElementById('meteor-container');

      // Create Stars
      for (let i = 0; i < 200; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          const xy = [Math.random() * 100, Math.random() * 100];
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;
          const opacity = Math.random() * 0.7 + 0.3;
          const size = Math.random() * 2;

          star.style.left = `${xy[0]}%`;
          star.style.top = `${xy[1]}%`;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.setProperty('--duration', `${duration}s`);
          star.style.setProperty('--delay', `${delay}s`);
          star.style.setProperty('--opacity', opacity);

          starContainer.appendChild(star);
      }

      // Create Meteors
      function createMeteor() {
          const meteor = document.createElement('div');
          meteor.className = 'meteor';
          meteor.style.top = `${Math.random() * 60}%`;
          meteor.style.left = `${Math.random() * 100 + 10}%`;
          const duration = Math.random() * 2 + 2;
          meteor.style.animationDuration = `${duration}s`;
          meteorContainer.appendChild(meteor);
          setTimeout(() => { meteor.remove(); }, duration * 1000);
      }
      setInterval(createMeteor, 500);

      // --- 2. Floating Phrases Logic (Cyclic & Horizontal) ---
      const phrases = [
          "The system I needed for 20 years building and scaling businesses.",
          "One platform to rule them all.",
          "Simplifying business, amplifying humans.",
          "Done-for-you automation.",
          "Built by founders. For founders.",
          "Time is money. We save you both.",
          "Bring order to the chaos."
      ];

      let phraseIndex = 0; // Track current phrase index

      const phrasesContainer = document.getElementById('phrases-container');

      function spawnPhrase() {
          // Cycle through array in order
          const text = phrases[phraseIndex];
          phraseIndex = (phraseIndex + 1) % phrases.length; // Update index loop

          const el = document.createElement('div');

          // Text sizing matching the subtitle (sm to base)
          el.className = 'phrase-container text-sm md:text-base';
          el.innerText = text;

          // Random Position
          let top = Math.random() * 80 + 10; // 10% to 90% vertical
          let left = Math.random() * 80 + 10; // 10% to 90% horizontal

          el.style.top = `${top}%`;
          el.style.left = `${left}%`;

          // Strictly Horizontal (No rotation)
          el.style.transform = `translate(-50%, -50%)`;

          phrasesContainer.appendChild(el);

          // Phase In
          requestAnimationFrame(() => {
              el.classList.add('phrase-visible');
          });

          // Phase Out
          setTimeout(() => {
              el.classList.remove('phrase-visible');
              setTimeout(() => el.remove(), 4000);
          }, 6000);
      }

      // Spawn interval
      setInterval(spawnPhrase, 5000);
      spawnPhrase(); // Immediate start

      // --- 3. Audio Control ---
      const audio = document.getElementById('bg-audio');
      const soundBtn = document.getElementById('sound-toggle');
      const soundIcon = document.getElementById('sound-icon');
      let isPlaying = false;

      soundBtn.addEventListener('click', () => {
          if (isPlaying) {
              audio.pause();
              soundIcon.setAttribute('icon', 'lucide:volume-x');
              isPlaying = false;
          } else {
              audio.volume = 0.2;
              audio.play().catch(e => console.log("Audio play blocked", e));
              soundIcon.setAttribute('icon', 'lucide:volume-2');
              isPlaying = true;
          }
      });

      // --- 4. Modal Logic (Preserved but not connected) ---
      const modal = document.getElementById('waitlist-modal');

      function openModal() {
          modal.classList.remove('hidden');
          modal.showModal();
      }

      function closeModal() {
          modal.close();
          setTimeout(() => modal.classList.add('hidden'), 300);
      }

      modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
      });

      function submitForm(form) {
          const btn = form.querySelector('button');
          const originalHTML = btn.innerHTML;

          btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin text-lg"></iconify-icon> Processing...`;
          btn.disabled = true;

          setTimeout(() => {
              btn.innerHTML = `<iconify-icon icon="lucide:check" class="text-lg"></iconify-icon> Joined!`;
              btn.classList.remove('bg-white', 'text-black');
              btn.classList.add('bg-plugify', 'text-white');

              setTimeout(() => {
                  closeModal();
                  setTimeout(() => {
                      form.reset();
                      btn.disabled = false;
                      btn.innerHTML = originalHTML;
                      btn.classList.add('bg-white', 'text-black');
                      btn.classList.remove('bg-plugify', 'text-white');
                  }, 500);
              }, 1500);
          }, 1200);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<audio id="bg-audio" loop="">
<source src="https://cdn.pixabay.com/download/audio/2022/03/24/audio_34d1159828.mp3?filename=space-atmosphere-29402.mp3" type="audio/mpeg"/>
</audio>

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-plugify-dim/20 via-black to-black"></div>
<div className="absolute inset-0" id="star-container"></div>

<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-plugify/5 via-transparent to-transparent opacity-40 animate-mist blur-3xl"></div>
<div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-30 animate-mist blur-3xl" style={{animationDirection: 'reverse', animationDuration: '80s'}}></div>
<div className="meteor-shower" id="meteor-container"></div>
</div>

<div className="fixed inset-0 z-10 pointer-events-none overflow-hidden" id="phrases-container">

</div>

<header className="fixed top-0 left-0 p-6 md:p-8 z-50 flex items-center gap-4 animate-flicker">

<div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-plugify shadow-[0_0_20px_rgba(0,127,255,0.4)] bg-black/40 backdrop-blur-md text-plugify overflow-hidden">
<div className="absolute inset-0 bg-plugify/20 blur-md"></div>
<iconify-icon className="relative z-10 drop-shadow-[0_0_5px_rgba(0,127,255,0.8)]" icon="lucide:plug" strokeWidth="1.5" width="26"></iconify-icon>
</div>

<div className="flex flex-col justify-center">
<h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-plugify-light to-plugify drop-shadow-[0_0_10px_rgba(0,127,255,0.5)] leading-none">
          PLUGIFY.AI
        </h1>
</div>
</header>

<main className="flex flex-col w-full h-full z-20 pr-4 pl-4 relative items-center justify-center">

<div className="relative group w-full max-w-2xl">

<div className="absolute -inset-1 bg-gradient-to-r from-plugify-dim via-plugify to-plugify-dim rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

<div className="md:px-16 md:py-16 flex flex-col overflow-hidden text-center bg-black/40 border-white/5 border rounded-xl pt-12 pr-8 pb-12 pl-8 relative shadow-2xl backdrop-blur-md items-center" onclick="window.location.href='https://prelaunch-waitlist.scoreapp.com'" role="button">

<div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-plugify/20 to-transparent pointer-events-none">
</div>
<div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-plugify/20 to-transparent pointer-events-none">
</div>

<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-plugify/30 bg-plugify/5 text-plugify text-xs font-mono tracking-widest uppercase animate-flash-glow">
<span className="w-1.5 h-1.5 rounded-full bg-plugify"></span>
    Initializing
  </div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white neon-text mb-4">
    COMING SOON
  </h2>

<p className="text-plugify-light font-medium tracking-[0.2em] text-sm md:text-base uppercase opacity-90 mb-10 logo-glow">
    Bringing Order to the Chaos
  </p>

<button className="hover:bg-slate-100 transition-all hover:scale-[1.02] flex gap-2 cursor-pointer text-lg font-semibold text-[#0f2820] bg-white rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-xl gap-x-2 gap-y-2 items-center" onclick="window.open('https://prelaunch-waitlist.scoreapp.com', '_blank')" role="button">
                    Join the Revolution
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 pointer-events-none">

<div className="absolute top-6 right-6 pointer-events-auto">
<button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/40 hover:border-plugify/50 text-zinc-400 hover:text-plugify transition-all backdrop-blur-md" id="sound-toggle">
<iconify-icon icon="lucide:volume-x" id="sound-icon" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="absolute bottom-8 left-0 w-full text-center px-6 pointer-events-auto">
<p className="text-[10px] text-zinc-600 font-mono tracking-wide uppercase opacity-60">
          2026 PLUGIFY LTD  //  THE FUTURE OF AUTOMATION
        </p>
</div>
</div>

<dialog className="bg-transparent p-0 m-0 w-full h-full max-w-none max-h-none fixed inset-0 z-[100] open:flex items-center justify-center hidden" id="waitlist-modal">
<div className="relative w-full max-w-md mx-4">

<button className="absolute -top-12 right-0 md:-right-12 text-zinc-500 hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_-10px_rgba(0,127,255,0.3)] relative">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-plugify/20 rounded-full blur-[80px] pointer-events-none"></div>
<div className="p-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-plugify/20 flex items-center justify-center border border-plugify/50 text-plugify">
<iconify-icon icon="lucide:zap" width="12"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-plugify uppercase tracking-widest">
                Early Access
              </span>
</div>
<h2 className="text-xl font-semibold text-white mb-2">
              Secure your spot.
            </h2>
<p className="text-zinc-400 text-sm mb-6 font-light leading-relaxed">
              Join the waitlist. We are onboarding users in batches to ensure
              system stability.
            </p>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); submitForm(this);">
<div className="space-y-3">
<div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-plugify focus:ring-1 focus:ring-plugify transition-all text-sm font-light" placeholder="email@company.com" required="" type="email"/>
</div>
</div>
<button className="mt-2 w-full bg-white hover:bg-zinc-200 text-black font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]" type="submit">
<span>Join Waitlist</span>
<iconify-icon className="text-zinc-400 group-hover:text-black transition-colors" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-600 text-center mt-2">
                No spam. Unsubscribe anytime.
              </p>
</form>
</div>
</div>
</div>
</dialog>


    </>
  );
}
