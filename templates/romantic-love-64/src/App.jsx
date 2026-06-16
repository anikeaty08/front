import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Smooth scroll to memories
    const scrollBtn = document.getElementById('scrollMemories');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        const target = document.getElementById('memories');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Typewriter effect
    const letterElement = document.getElementById('loveLetter');
    const letterText = "Maartha, every moment with you feels magical.\nYou are my peace, my happiness, my forever.";
    let letterIndex = 0;

    function typeWriter() {
      if (!letterElement) return;
      if (letterIndex <= letterText.length) {
        const current = letterText.slice(0, letterIndex);
        letterElement.innerHTML = current.replace(/\n/g, '<br/>');
        letterIndex++;
        const char = letterText.charAt(letterIndex - 1);
        let delay = 55;
        if (char === '.' || char === ',' || char === '!' || char === '?') delay = 220;
        if (char === '\n') delay = 280;
        setTimeout(typeWriter, delay);
      }
    }
    window.addEventListener('load', () => {
      setTimeout(typeWriter, 600);
    });

    // Floating hearts generator
    function createFloatingHearts(containerId, count, isFooter = false) {
      const container = document.getElementById(containerId);
      if (!container) return;

      for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.textContent = '❤';
        span.className = 'absolute text-[0.65rem] sm:text-xs text-rose-300/80';
        const left = Math.random() * 100;
        const duration = 12 + Math.random() * 10;
        const delay = Math.random() * -duration;
        const size = 0.5 + Math.random() * 0.8;
        const opacity = 0.35 + Math.random() * 0.4;
        const translateX = (Math.random() - 0.5) * 20;

        span.style.left = left + '%';
        span.style.animation = `floatHeart ${duration}s linear infinite`;
        span.style.animationDelay = delay + 's';
        span.style.transform = `scale(${size}) translateX(${translateX}%)`;
        span.style.opacity = opacity;
        if (isFooter) {
          span.style.bottom = '-10%';
        } else {
          span.style.bottom = '-15%';
        }

        container.appendChild(span);
      }
    }

    // Add keyframes for hearts
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes floatHeart {
        0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
        10% { opacity: 1; }
        50% { transform: translateY(-50vh) translateX(-10px) scale(1.1); }
        100% { transform: translateY(-100vh) translateX(10px) scale(1.15); opacity: 0; }
      }
      @keyframes softFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      @keyframes softFloatSlow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleEl);

    window.addEventListener('load', () => {
      createFloatingHearts('floating-hearts', 20, false);
      createFloatingHearts('footer-hearts', 12, true);
    });

    // Modal for images
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModal');

    function openModal(src) {
      if (!modal || !modalImage) return;
      modalImage.src = src;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modal.style.animation = 'fadeIn 0.2s ease-out';
    }

    function closeModal() {
      if (!modal) return;
      modal.style.animation = 'fadeOut 0.18s ease-in';
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }, 160);
    }

    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.98); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.98); }
      }
    `;
    document.head.appendChild(fadeStyle);

    document.querySelectorAll('#memories button[data-image]').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-image');
        if (src) openModal(src);
      });
    });
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // Staggered reveal for reason cards
    const reasonCards = document.querySelectorAll('.reason-card');
    if ('IntersectionObserver' in window && reasonCards.length) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reasonCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.animation = 'fadeInUp 0.5s ease-out forwards';
              }, index * 130);
            });
            obs.disconnect();
          }
        });
      }, { threshold: 0.25 });
      observer.observe(reasonCards[0]);
    } else {
      // Fallback: simple reveal
      reasonCards.forEach(card => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      });
    }

    // Background music toggle
    const musicToggle = document.getElementById('musicToggle');
    const musicLabel = document.getElementById('musicLabel');
    const musicPulse = document.getElementById('musicPulse');
    const bgMusic = document.getElementById('bgMusic');

    if (musicToggle && musicLabel && musicPulse && bgMusic) {
      let isPlaying = false;

      musicToggle.addEventListener('click', async () => {
        try {
          if (!isPlaying) {
            await bgMusic.play();
            isPlaying = true;
            musicLabel.textContent = 'Pause background music';
            musicPulse.style.opacity = '1';
            musicPulse.style.animation = 'pulseRing 1.8s ease-out infinite';
          } else {
            bgMusic.pause();
            isPlaying = false;
            musicLabel.textContent = 'Play background music';
            musicPulse.style.opacity = '0';
            musicPulse.style.animation = 'none';
          }
        } catch (e) {
          console.error('Playback error:', e);
        }
      });

      const pulseStyle = document.createElement('style');
      pulseStyle.textContent = `
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.7; }
          60% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `;
      document.head.appendChild(pulseStyle);
    }

    // Add gentle float to certain sections
    window.addEventListener('load', () => {
      const heroPanel = document.querySelector('#hero > div > div > div');
      const letterPanel = document.querySelector('#loveLetter')?.parentElement;
      if (heroPanel) {
        heroPanel.style.animation = 'softFloat 9s ease-in-out infinite';
      }
      if (letterPanel) {
        letterPanel.style.animation = 'softFloatSlow 14s ease-in-out infinite';
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative min-h-screen overflow-hidden">

<div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
<div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-rose-200 blur-3xl mix-blend-screen"></div>
<div className="absolute right-0 top-40 h-56 w-56 rounded-full bg-pink-200 blur-3xl mix-blend-screen"></div>
<div className="absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-300 blur-3xl mix-blend-screen"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" id="floating-hearts"><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '47.6572%', animation: '21.5196s linear -18.0503s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '69.6255%', animation: '18.2553s linear -9.71974s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '9.45647%', animation: '17.2625s linear -13.8471s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '62.9236%', animation: '21.5899s linear -19.2632s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '99.6192%', animation: '17.1525s linear -10.6444s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '82.8058%', animation: '19.2384s linear -0.681589s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '41.098%', animation: '21.2258s linear -17.3939s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '62.2342%', animation: '20.671s linear -19.1802s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '25.6856%', animation: '13.2588s linear -7.15541s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '27.7254%', animation: '16.849s linear -1.18742s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '61.0156%', animation: '16.0099s linear -12.6188s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '18.7592%', animation: '19.0582s linear -13.6472s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '60.6341%', animation: '21.2789s linear -9.10469s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '49.3699%', animation: '14.848s linear -12.6715s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '20.6083%', animation: '18.8025s linear -9.82753s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '26.772%', animation: '13.2525s linear -13.1015s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '71.7281%', animation: '21.4831s linear -11.0249s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '86.2924%', animation: '16.4501s linear -10.196s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '9.66356%', animation: '17.1883s linear -5.26204s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.2511%', animation: '18.8173s linear -6.8691s infinite normal none running floatHeart', bottom: '-15%'}}>❤</span></div>

<header className="fixed top-0 left-0 right-0 z-40">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-end gap-2">
</div>
</div>
</header>
<main className="flex flex-col">

<section className="flex min-h-screen relative items-center" id="hero">

<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-rose-100 via-rose-50/80 to-rose-100"></div>
<div className="flex flex-col sm:px-6 lg:px-8 w-full max-w-5xl mr-auto ml-auto pt-24 pr-4 pb-16 pl-4 items-center">
<div className="text-center w-full relative">

<div className="sm:p-10 shadow-rose-200/60 transition bg-white/40 max-w-2xl border-rose-100/60 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-lg blur-none backdrop-blur-xl" style={{animation: '9s ease-in-out 0s infinite normal none running softFloat'}}>
<p className="mb-2 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-rose-400">A little universe just for you</p>
<h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
                For My Love <span className="whitespace-nowrap">Maartha <span className="align-middle text-rose-400">❤️</span></span>
</h1>
<p className="mx-auto mb-7 max-w-xl text-sm sm:text-base md:text-lg text-rose-700/90">
                You are my favorite chapter in life.
              </p>
<button className="group mx-auto inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-500/90 px-7 py-2.5 text-sm sm:text-base font-medium tracking-tight text-rose-50 shadow-lg shadow-rose-300/70 backdrop-blur-lg transition hover:-translate-y-0.5 hover:border-rose-100 hover:bg-rose-500 hover:shadow-xl hover:shadow-rose-300/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50" id="scrollMemories">
<span>See Our Memories</span>
<span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50/90 text-rose-500 shadow-sm transition group-hover:translate-x-0.5 group-hover:bg-white">
<iconify-icon className="h-3.5 w-3.5" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>

<div className="pointer-events-none absolute -right-6 -top-6 hidden h-20 w-20 rounded-full bg-gradient-to-br from-rose-100 via-rose-50 to-rose-200 opacity-80 blur-2xl sm:block"></div>
</div>
</div>
</section>

<section className="sm:py-18 md:py-20 pt-14 pb-14 relative" id="memories">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
              Our Little Gallery
            </h2>
<p className="mt-3 text-sm sm:text-base text-rose-700/90 max-w-xl mx-auto">
              Just a few frames where time stood still, and it was only you and me.
            </p>
</div>
<div className="grid gap-4 sm:gap-6 md:grid-cols-2">

<button className="group relative overflow-hidden rounded-2xl border border-rose-100/70 bg-white/30 shadow-md shadow-rose-100/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/80" data-image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="bg-gradient-to-br from-rose-200/30 via-rose-50/10 to-rose-300/30 mix-blend-soft-light absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Memory 1 placeholder" className="transition duration-700 ease-out group-hover:scale-105 group-active:scale-100 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/397eddbe-bb91-4ead-b2d8-58c82d1d3f34_1600w.jpg"/>
</div>
<div className="transition group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<div className="bg-gradient-to-t from-rose-900/60 via-rose-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-left pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0">
<p className="uppercase text-xs text-rose-100 tracking-[0.18em]">Memory I</p>
<p className="text-sm font-medium text-rose-50 mt-1">The way you smiled when the world felt soft.</p>
</div>
</div>
</button>

<button className="group overflow-hidden shadow-rose-100/80 transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/80 bg-white/30 border-rose-100/70 border rounded-2xl relative shadow-md backdrop-blur-xl" data-image="https://images.pexels.com/photos/1444440/pexels-photo-1444440.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-rose-50/20 to-rose-200/40 mix-blend-soft-light"></div>
<img alt="Memory 2 placeholder" className="transition duration-700 ease-out group-hover:scale-105 group-active:scale-100 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3289e705-8314-4c67-9c70-fc75a653c334_1600w.jpg"/>
</div>
<div className="transition group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<div className="bg-gradient-to-t from-rose-900/60 via-rose-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-left pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0">
<p className="uppercase text-xs text-rose-100 tracking-[0.18em]">Memory II</p>
<p className="text-sm font-medium text-rose-50 mt-1">When your laugh turned an ordinary day into a miracle.</p>
</div>
</div>
</button>

<button className="group overflow-hidden shadow-rose-100/80 transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/80 bg-white/30 border-rose-100/70 border rounded-2xl relative shadow-md backdrop-blur-xl" data-image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-rose-50/10 to-rose-300/40 mix-blend-soft-light"></div>
<img alt="Memory 3 placeholder" className="transition duration-700 ease-out group-hover:scale-105 group-active:scale-100 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3d9e0c4-3735-4734-8d22-8e1a5610cfe9_1600w.jpg"/>
</div>
<div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
<div className="bg-gradient-to-t from-rose-900/60 via-rose-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-x-0 bottom-0 p-4 text-left">
<p className="text-xs uppercase tracking-[0.18em] text-rose-100">Memory III</p>
<p className="mt-1 text-sm font-medium text-rose-50">The quiet moments where our hearts spoke louder than words.</p>
</div>
</div>
</button>

<button className="group relative overflow-hidden rounded-2xl border border-rose-100/70 bg-white/30 shadow-md shadow-rose-100/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/80" data-image="https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-rose-50/10 to-rose-200/40 mix-blend-soft-light"></div>
<img alt="Memory 4 placeholder" className="transition duration-700 ease-out group-hover:scale-105 group-active:scale-100 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afc2ac0d-b016-4066-8087-3c5c4ce2d738_1600w.jpg"/>
</div>
<div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
<div className="bg-gradient-to-t from-rose-900/60 via-rose-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-x-0 bottom-0 p-4 text-left">
<p className="uppercase text-xs text-rose-100 tracking-[0.18em]">Memory IV</p>
<p className="mt-1 text-sm font-medium text-rose-50">Every step beside you felt like walking through a dream.</p>
</div>
</div>
</button>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rose-100/80 via-rose-100/30 to-transparent"></div>
</section>

<section className="relative py-16 sm:py-20 md:py-24">

<div className="pointer-events-none -z-10 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute -top-10 left-10 h-32 w-32 rounded-full bg-rose-200/90 blur-3xl"></div>
<div className="absolute top-20 right-6 h-40 w-40 rounded-full bg-pink-200/80 blur-3xl"></div>
<div className="absolute bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-rose-100/90 blur-3xl"></div>
</div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="relative mx-auto max-w-2xl rounded-3xl border border-rose-100/70 bg-white/40 p-6 sm:p-10 md:p-12 shadow-xl shadow-rose-200/80 backdrop-blur-2xl" style={{animation: '14s ease-in-out 0s infinite normal none running softFloatSlow'}}>
<div className="absolute -left-5 top-8 hidden h-9 w-9 -rotate-6 rounded-full border border-rose-200/70 bg-rose-50/90 shadow-sm shadow-rose-100/80 sm:flex items-center justify-center">
<iconify-icon className="h-4 w-4 text-rose-400" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute -right-5 bottom-10 hidden h-9 w-9 rotate-6 rounded-full border border-rose-200/70 bg-rose-50/90 shadow-sm shadow-rose-100/80 sm:flex items-center justify-center">
<iconify-icon className="h-4 w-4 text-rose-400" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mb-3 text-xs uppercase tracking-[0.22em] text-rose-400/90 text-center">A Letter For You</p>
<p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-rose-900" id="loveLetter" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}></p>
<p className="mt-6 text-xs sm:text-sm text-rose-500/90 text-right">
              Forever yours,
              <span className="ml-1 font-medium tracking-tight text-rose-700">Someone who loves you endlessly</span>
</p>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 md:py-24">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
              Reasons I Love You
            </h2>
<p className="mt-3 text-sm sm:text-base text-rose-700/90 max-w-2xl mx-auto">
              It would take a lifetime to list them all, but here are just a few that my heart whispers every day.
            </p>
</div>
<div className="grid gap-5 sm:gap-6 sm:grid-cols-2">

<div className="reason-card opacity-0 translate-y-4 rounded-2xl border border-rose-100/80 bg-white/50 p-5 sm:p-6 shadow-md shadow-rose-100/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/90">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm">
<iconify-icon className="h-4 w-4" icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
                Your Smile
              </h3>
<p className="mt-2 text-sm sm:text-base text-rose-700/90">
                It’s the sunrise my days wait for, the soft light that makes everything feel possible.
              </p>
</div>

<div className="reason-card opacity-0 translate-y-4 rounded-2xl border border-rose-100/80 bg-white/50 p-5 sm:p-6 shadow-md shadow-rose-100/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/90" style={{animation: '0.5s ease-out 0s 1 normal forwards running fadeInUp'}}>
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm">
<iconify-icon className="h-4 w-4" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
                Your Kindness
              </h3>
<p className="mt-2 text-sm sm:text-base text-rose-700/90">
                The way your heart bends for others reminds me that love is gentle, and you are its purest form.
              </p>
</div>

<div className="reason-card opacity-0 translate-y-4 rounded-2xl border border-rose-100/80 bg-white/50 p-5 sm:p-6 shadow-md shadow-rose-100/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/90" style={{animation: '0.5s ease-out 0s 1 normal forwards running fadeInUp'}}>
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm">
<iconify-icon className="h-4 w-4" icon="solar:microphone-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
                Your Voice
              </h3>
<p className="mt-2 text-sm sm:text-base text-rose-700/90">
                Every word you say feels like a song my heart already knows by heart.
              </p>
</div>

<div className="reason-card opacity-0 translate-y-4 rounded-2xl border border-rose-100/80 bg-white/50 p-5 sm:p-6 shadow-md shadow-rose-100/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/90" style={{animation: '0.5s ease-out 0s 1 normal forwards running fadeInUp'}}>
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm">
<iconify-icon className="h-4 w-4" icon="solar:heart-pulse-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-rose-900" style={{fontFamily: '\'Playfair Display\', \'Times New Roman\', serif'}}>
                Your Presence
              </h3>
<p className="mt-2 text-sm sm:text-base text-rose-700/90">
                With you, even the silence feels full — like my soul has finally found its home.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="relative mt-auto bg-rose-900/95 text-rose-100">

<div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60" id="footer-hearts"><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '18.7396%', animation: '18.9717s linear -2.05894s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '33.3702%', animation: '17.7275s linear -0.198167s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '70.8577%', animation: '17.2634s linear -0.845334s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '85.1983%', animation: '13.967s linear -4.07877s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '84.586%', animation: '15.7339s linear -11.296s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '14.1147%', animation: '18.7909s linear -14.6214s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '23.2303%', animation: '12.0087s linear -10.6244s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '20.415%', animation: '15.5755s linear -6.66369s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '3.96992%', animation: '17.9722s linear -16.4679s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '68.3014%', animation: '18.7146s linear -10.8189s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '14.0932%', animation: '18.3331s linear -0.751404s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span><span className="absolute text-[0.65rem] sm:text-xs text-rose-300/80" style={{left: '34.2327%', animation: '14.4602s linear -6.84029s infinite normal none running floatHeart', bottom: '-10%'}}>❤</span></div>
<div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
<div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
<p className="text-xs sm:text-sm text-rose-100/80 text-center sm:text-left">
            Made with <span className="text-rose-300">❤️</span> by someone who loves you endlessly.
          </p>
<p className="text-[0.7rem] sm:text-xs text-rose-300/80 tracking-[0.18em] uppercase text-center sm:text-right">
            For Maartha — now and always
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-rose-950/60 backdrop-blur-md" id="imageModal">
<div className="absolute inset-0" id="modalBackdrop"></div>
<div className="relative mx-4 max-w-3xl rounded-3xl border border-rose-200/60 bg-white/90 p-3 sm:p-4 shadow-2xl shadow-rose-900/60">
<button className="absolute -right-2 -top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-rose-500 shadow-sm transition hover:bg-rose-50 hover:text-rose-600" id="closeModal">
<span className="sr-only">Close</span>
<iconify-icon className="h-4 w-4" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="overflow-hidden rounded-2xl bg-rose-100/40">
<img alt="Memory enlarged" className="max-h-[70vh] w-full object-contain" id="modalImage" src=""/>
</div>
</div>
</div>

<audio id="bgMusic" loop="" src="https://cdn.pixabay.com/download/audio/2021/09/30/audio_9c9d4f3daa.mp3?filename=gentle-piano-10887.mp3"></audio>
</div>



    </>
  );
}
