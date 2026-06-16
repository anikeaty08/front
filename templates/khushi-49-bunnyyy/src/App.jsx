import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Questions array
    const questions = [
      { q: "Khushi Favourite Food?", a: "momos" },
      { q: "Khushi's nickname?", a: "rashmalai" },
      { q: "Khushi's best sister?", a: "reshu" },
      { q: "Khushi's crush?", a: "kartik sir" },
      { q: "Khushi's dream?", a: "placement" },
      { q: "I'm sweet like Khushi, colorful and round, at birthday parties I'm always found, kids and adults both love my taste, I'm a dessert you shouldn't waste. What am I?", a: "cake" },
      { q: "Khushi shares me with friends when happy, I'm contagious and bright, I light up faces and make days better, I'm curved and light. What am I?", a: "smile" }
    ];

    // Cloudinary images array - strictly ordered 1-7
    const photos = [
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417715/1765022340119_rzpqq6.png",
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417714/1765022317076_mndyse.png",
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417727/1765022428725_rcuiwt.png",
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417729/Gemini_Generated_Image_kificikificikifi_lv1ygk.png",
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417729/Gemini_Generated_Image_kificikificikifi_lv1ygk.png",
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417729/Gemini_Generated_Image_hq3leqhq3leqhq3l_hg7cqe.png",
      "https://res.cloudinary.com/dxe37ejw4/image/upload/v1766417726/1765022422670_nkgsck.png"
    ];

    let currentQuestion = 0;

    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
      document.getElementById(pageId).classList.remove('hidden');
      lucide.createIcons();
      
      if (pageId === 'page-main') {
        document.body.style.overflow = 'auto';
      }
    }

    function verifyLogin() {
      const username = document.getElementById('username').value.toLowerCase().trim();
      const password = document.getElementById('password').value.trim();
      const errorEl = document.getElementById('login-error');
      const successEl = document.getElementById('login-success');

      if (username === 'khushi49' && password === '160905') {
        errorEl.classList.add('hidden');
        successEl.textContent = 'Right Khushi! ✨ Let the fun begin!';
        successEl.classList.remove('hidden');
        setTimeout(() => {
          currentQuestion = 0;
          loadQuestion();
          showPage('page-question');
        }, 2000);
      } else {
        successEl.classList.add('hidden');
        errorEl.textContent = 'Khushi, galat password hai! Try again 💕';
        errorEl.classList.remove('hidden');
      }
    }

    function loadQuestion() {
      document.getElementById('question-number').textContent = currentQuestion + 1;
      document.getElementById('question-text').textContent = questions[currentQuestion].q;
      document.getElementById('answer-input').value = '';
      document.getElementById('answer-error').classList.add('hidden');

      // Update progress dots
      let dots = '';
      for (let i = 0; i < 7; i++) {
        const isActive = i === currentQuestion;
        const isCompleted = i < currentQuestion;
        dots += `<div class="w-3 h-3 rounded-full transition-all ${isActive ? 'bg-pink-400 scale-125' : isCompleted ? 'bg-green-400' : 'bg-white/20'}"></div>`;
      }
      document.getElementById('progress-dots').innerHTML = dots;
    }

    function submitAnswer() {
      const answer = document.getElementById('answer-input').value.toLowerCase().trim();
      const correctAnswer = questions[currentQuestion].a.toLowerCase();
      
      if (answer === correctAnswer) {
        // Set the image for current question (index-based mapping)
        const photoElement = document.getElementById('reveal-photo');
        photoElement.src = photos[currentQuestion];
        
        // Update button text for last question
        if (currentQuestion === questions.length - 1) {
          document.getElementById('next-btn-text').textContent = 'See Your Surprise';
        } else {
          document.getElementById('next-btn-text').textContent = 'Next Question';
        }
        
        // Show photo page
        showPage('page-photo');
      } else {
        document.getElementById('answer-error').classList.remove('hidden');
        document.getElementById('answer-input').classList.add('ring-2', 'ring-red-500/50');
        setTimeout(() => {
          document.getElementById('answer-input').classList.remove('ring-2', 'ring-red-500/50');
        }, 1000);
      }
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion >= questions.length) {
        // All questions completed, go to main page
        showPage('page-main');
      } else {
        // Load next question
        loadQuestion();
        showPage('page-question');
      }
    }

    function revealGiftDetails() {
      // Replace with actual gift card details
      document.getElementById('gift-code').textContent = 'FLIP-KART-GIFT-2025';
      document.getElementById('gift-pin').textContent = '1234';
      
      const btn = document.getElementById('reveal-gift-btn');
      btn.innerHTML = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6L9 17l-5-5"/></svg> Revealed!';
      btn.classList.remove('from-amber-500', 'to-orange-500');
      btn.classList.add('from-green-500', 'to-emerald-500');
      btn.disabled = true;
    }

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      
      // Mobile menu toggle
      const mobileNavBtn = document.getElementById('mobile-nav-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileNavBtn && mobileMenu) {
        mobileNavBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
        
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      }
    });

    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    // Enter key support for inputs
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const verificationPage = document.getElementById('page-verification');
        const questionPage = document.getElementById('page-question');
        
        if (verificationPage && !verificationPage.classList.contains('hidden')) {
          verifyLogin();
        } else if (questionPage && !questionPage.classList.contains('hidden')) {
          submitAnswer();
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="page min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden" id="page-landing">
<div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-purple-950/30"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" style={{animation: 'pulse-glow 4s ease-in-out infinite'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" style={{animation: 'pulse-glow 4s ease-in-out infinite', animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" style={{animation: 'pulse-glow 3s ease-in-out infinite', animationDelay: '1s'}}></div>
<div className="relative z-10 text-center" style={{animation: 'fadeInUp 1s ease-out'}}>
<div className="mb-8" style={{animation: 'float 3s ease-in-out infinite'}}>
<div className="relative inline-block">
<i className="w-24 h-24 text-pink-400 mx-auto" data-lucide="heart" style={{strokeWidth: '1', animation: 'heartbeat 2s ease-in-out infinite'}}></i>
<div className="absolute inset-0 bg-pink-400/30 rounded-full blur-xl"></div>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gradient-text">Something Special</span>
</h1>
<p className="text-xl md:text-2xl font-extralight text-neutral-300 mb-12">
        for someone truly special ✨
      </p>
<button className="nav-btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-medium tracking-wide rounded-full transition-all shadow-lg shadow-pink-500/30" onclick="showPage('page-verification')">
        Let's Play Khushi
        <i className="w-5 h-5" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
<i className="w-6 h-6 text-pink-400/60" data-lucide="chevrons-down" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="page hidden min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden" id="page-verification">
<div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-pink-950/30"></div>
<div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" style={{animation: 'pulse-glow 5s ease-in-out infinite'}}></div>
<div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" style={{animation: 'pulse-glow 5s ease-in-out infinite', animationDelay: '2.5s'}}></div>
<div className="relative z-10 w-full max-w-md" style={{animation: 'scaleIn 0.6s ease-out'}}>
<div className="glass-card rounded-3xl p-10">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full mb-6 ring-1 ring-pink-500/30">
<i className="w-9 h-9 text-pink-400" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
</div>
<h2 className="text-3xl font-light tracking-tight gradient-text" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Verify It's You
          </h2>
<p className="text-neutral-400 text-sm mt-2 font-light">Enter your credentials to continue</p>
</div>
<div className="space-y-5">
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400/60" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
<input className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition font-light" id="username" placeholder="Username" type="text"/>
</div>
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400/60" data-lucide="key" style={{strokeWidth: '1.5'}}></i>
<input className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition font-light" id="password" placeholder="Password" type="password"/>
</div>
<p className="text-red-400 text-sm text-center hidden font-light" id="login-error"></p>
<p className="text-pink-400 text-sm text-center hidden font-light" id="login-success"></p>
<button className="nav-btn w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-medium rounded-2xl transition-all flex items-center justify-center gap-2" onclick="verifyLogin()">
<i className="w-5 h-5" data-lucide="unlock" style={{strokeWidth: '1.5'}}></i>
            Login
          </button>
</div>
</div>
</div>
</div>

<div className="page hidden min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden" id="page-question">
<div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-purple-950/30"></div>
<div className="absolute top-1/3 left-10 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl" style={{animation: 'pulse-glow 4s ease-in-out infinite'}}></div>
<div className="absolute bottom-1/3 right-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" style={{animation: 'pulse-glow 4s ease-in-out infinite', animationDelay: '2s'}}></div>
<div className="relative z-10 w-full max-w-lg">
<div className="flex justify-center gap-3 mb-10" id="progress-dots"></div>
<div className="glass-card rounded-3xl p-10" style={{animation: 'fadeInUp 0.5s ease-out'}}>
<div className="text-center mb-8">
<span className="inline-block px-4 py-1.5 bg-pink-500/20 rounded-full text-sm font-medium text-pink-300 tracking-wide mb-4">
            Question <span id="question-number">1</span> of 7
          </span>
<h2 className="text-2xl md:text-3xl font-light tracking-tight text-white" id="question-text" style={{fontFamily: '\'Playfair Display\', serif'}}></h2>
</div>
<div className="space-y-5">
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400/60" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
<input className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition text-center font-light" id="answer-input" placeholder="Your answer..." type="text"/>
</div>
<p className="text-red-400 text-sm text-center hidden font-light" id="answer-error">
            Galat jawab Khushi! Try again 💕
          </p>
<button className="nav-btn w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-medium rounded-2xl transition-all flex items-center justify-center gap-2" onclick="submitAnswer()">
<i className="w-5 h-5" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
            Submit Answer
          </button>
</div>
</div>
</div>
</div>

<div className="page hidden min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden" id="page-photo">
<div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-pink-950/30"></div>
<div className="absolute top-1/4 right-1/4 w-80 h-80 bg-green-500/15 rounded-full blur-3xl" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}></div>
<div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" style={{animation: 'pulse-glow 3s ease-in-out infinite', animationDelay: '1.5s'}}></div>
<div className="relative z-10 w-full max-w-lg text-center" style={{animation: 'scaleIn 0.5s ease-out'}}>
<div className="mb-8" style={{animation: 'bounce-soft 1s ease-in-out'}}>
<div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 rounded-full ring-1 ring-green-500/30">
<i className="w-6 h-6 text-green-400" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-xl font-medium text-green-300">Correct!</span>
</div>
</div>

<div className="flex justify-center mb-8">
<div className="image-frame">
<img alt="Memory" id="reveal-photo" src=""/>
</div>
</div>
<button className="nav-btn inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-medium rounded-full transition-all" onclick="nextQuestion()">
<span id="next-btn-text">Next Question</span>
<i className="w-5 h-5" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="page hidden min-h-screen relative overflow-hidden" id="page-main">
<div className="fixed inset-0 bg-gradient-to-br from-pink-950/40 via-black to-purple-950/40 z-0"></div>

<div className="fixed inset-0 pointer-events-none z-10">
<div className="absolute text-pink-400/30 text-2xl" style={{left: '5%', top: '15%', animation: 'float 6s ease-in-out infinite'}}>💖</div>
<div className="absolute text-purple-400/30 text-xl" style={{left: '85%', top: '25%', animation: 'float 7s ease-in-out infinite', animationDelay: '1s'}}>✨</div>
<div className="absolute text-pink-400/30 text-lg" style={{left: '15%', top: '75%', animation: 'float 5s ease-in-out infinite', animationDelay: '2s'}}>💕</div>
<div className="absolute text-purple-400/30 text-2xl" style={{left: '75%', top: '80%', animation: 'float 8s ease-in-out infinite', animationDelay: '0.5s'}}>🌸</div>
<div className="absolute text-pink-400/30 text-xl" style={{left: '45%', top: '10%', animation: 'float 6s ease-in-out infinite', animationDelay: '1.5s'}}>💗</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-6xl mx-auto">
<div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
<div className="text-xl font-light tracking-widest gradient-text" style={{fontFamily: '\'Playfair Display\', serif'}}>KHUSHI</div>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-neutral-300">
<a className="hover:text-pink-400 transition" href="#hero">Home</a>
<a className="hover:text-pink-400 transition" href="#message">Message</a>
<a className="hover:text-pink-400 transition" href="#astrology">Astrology</a>
<a className="hover:text-pink-400 transition" href="#gift">Gift</a>
<a className="hover:text-pink-400 transition" href="#sorry">Sorry</a>
</div>
<button className="md:hidden text-pink-400" id="mobile-nav-btn">
<i className="w-6 h-6" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="hidden md:hidden mt-2 glass-card rounded-2xl p-4" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm font-light text-neutral-300">
<a className="hover:text-pink-400 transition py-2" href="#hero">Home</a>
<a className="hover:text-pink-400 transition py-2" href="#message">Message</a>
<a className="hover:text-pink-400 transition py-2" href="#astrology">Astrology</a>
<a className="hover:text-pink-400 transition py-2" href="#gift">Gift</a>
<a className="hover:text-pink-400 transition py-2" href="#sorry">Sorry</a>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative z-20" id="hero">
<div className="text-center">

<div className="relative inline-block mb-12">
<div className="orbit-element" style={{animationDuration: '25s'}}>
<span className="text-2xl">💖</span>
</div>
<div className="orbit-element" style={{animationDuration: '20s', animationDelay: '-5s'}}>
<span className="text-xl">✨</span>
</div>
<div className="orbit-element" style={{animationDuration: '30s', animationDelay: '-10s'}}>
<span className="text-lg">🌸</span>
</div>

<div className="circle-image" style={{animation: 'float 6s ease-in-out infinite'}}>
<img alt="Khushi" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-purple-900/20"></div>
</div>

<div className="absolute inset-0 rounded-full ring-2 ring-pink-400/20" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}></div>
<div className="absolute -inset-4 rounded-full ring-1 ring-purple-400/10" style={{animation: 'pulse-glow 4s ease-in-out infinite', animationDelay: '1s'}}></div>
<div className="absolute -inset-8 rounded-full ring-1 ring-pink-400/5" style={{animation: 'pulse-glow 5s ease-in-out infinite', animationDelay: '2s'}}></div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif', animation: 'fadeInUp 1s ease-out'}}>
<span className="gradient-text">Admirable Khushi</span>
</h1>
<p className="text-xl md:text-2xl font-extralight text-neutral-300 mb-8" style={{animation: 'fadeInUp 1s ease-out 0.2s backwards'}}>
          A soul that shines brighter than stars ✨
        </p>
<div className="flex flex-wrap justify-center gap-4" style={{animation: 'fadeInUp 1s ease-out 0.4s backwards'}}>
<a className="nav-btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full" href="#message">
<i className="w-5 h-5" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
            Read Message
          </a>
<a className="nav-btn inline-flex items-center gap-2 px-8 py-4 glass-card text-pink-300 font-medium rounded-full hover:bg-white/10" href="#gift">
<i className="w-5 h-5" data-lucide="gift" style={{strokeWidth: '1.5'}}></i>
            View Gift
          </a>
</div>
<div className="mt-16 scroll-indicator">
<i className="w-6 h-6 text-pink-400/60 mx-auto" data-lucide="chevrons-down" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</section>

<section className="min-h-screen px-6 py-24 relative z-20" id="message">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16" style={{animation: 'fadeInUp 0.8s ease-out'}}>
<span className="inline-block px-4 py-1.5 bg-pink-500/20 rounded-full text-sm font-medium text-pink-300 tracking-wide mb-4">
            From the Heart
          </span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight gradient-text" style={{fontFamily: '\'Playfair Display\', serif'}}>
            A Message for You
          </h2>
</div>
<div className="glass-card rounded-3xl p-8 md:p-12" style={{animation: 'fadeInUp 0.8s ease-out 0.2s backwards'}}>
<div className="text-center mb-8">
<i className="w-12 h-12 text-pink-400/40 mx-auto" data-lucide="quote" style={{strokeWidth: '1'}}></i>
</div>
<div className="prose prose-lg prose-invert mx-auto">
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              Khushi is not just a friend to me; she is like the only sister I truly have by choice, not by blood. A bond like that is rare, and I value it deeply. She has always been someone who brings warmth, honesty, and sincerity into conversations, even when life feels confusing or heavy. As a friend, she has shown strength in silence, courage in vulnerability, and kindness without expecting anything in return.
            </p>
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg mt-6" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              What I admire most about Khushi is her inner resilience. She has been through phases that could have broken anyone, yet she continues to move forward — learning, growing, and choosing herself. I truly believe she will achieve her dreams because she carries determination quietly, without noise. Her journey may not always be easy, but it is meaningful, and that itself is powerful.
            </p>
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg mt-6" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              I see 2026 as a turning point for her — a year of clarity, confidence, and growth. A year where she steps into her own light, free from the weight of the past. She will move on, not by forgetting, but by understanding, healing, and trusting her own path. Success, peace, and self-belief will come together for her in ways she may not yet imagine.
            </p>
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg mt-6" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              As her friend and as her brother-like figure, I want her to know one thing clearly: I am always there for her. Not to control, not to question, but to support, protect, and stand beside her whenever she needs it. Whether she is celebrating wins or silently fighting battles, she will never be alone.
            </p>
<p className="text-pink-300 font-medium leading-relaxed text-lg md:text-xl mt-8 text-center" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              Khushi deserves happiness, and she will reach it — step by step. 💕
            </p>
</div>
<div className="flex justify-center gap-4 mt-10" style={{animation: 'pulse-heart 2s ease-in-out infinite'}}>
<span className="text-2xl">💖</span>
<span className="text-2xl" style={{animationDelay: '0.3s'}}>💖</span>
<span className="text-2xl" style={{animationDelay: '0.6s'}}>💖</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-6 py-24 relative z-20" id="astrology">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16" style={{animation: 'fadeInUp 0.8s ease-out'}}>
<span className="inline-block px-4 py-1.5 bg-purple-500/20 rounded-full text-sm font-medium text-purple-300 tracking-wide mb-4">
            Written in the Stars
          </span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight gradient-text" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Astrological Compatibility
          </h2>
</div>
<div className="glass-card rounded-3xl p-8 md:p-12" style={{animation: 'fadeInUp 0.8s ease-out 0.2s backwards'}}>
<div className="flex items-center justify-center gap-4 mb-10">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center ring-2 ring-purple-400/30">
<i className="w-8 h-8 text-purple-300" data-lucide="moon" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="h-px w-16 bg-gradient-to-r from-purple-400/50 to-pink-400/50"></div>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center ring-2 ring-pink-400/30">
<i className="w-8 h-8 text-pink-300" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="prose prose-lg prose-invert mx-auto">
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              According to astrology, some connections are not formed by chance but by karma, and the bond I share with Khushi reflects that deeper pattern. With her date of birth on 16/09/2005 in Giridih, even without an exact birth time, certain karmic themes are clearly visible. This connection feels less like a coincidence and more like a meeting arranged by destiny for emotional growth and learning.
            </p>
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg mt-6" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              Karmic bonds often bring a strong sense of familiarity from the very beginning. There is an unspoken understanding, emotional sensitivity, and a natural pull toward caring for each other's well-being. Such bonds are not always meant to be easy or permanent in the same form. Instead, they exist to teach patience, detachment, empathy, and emotional maturity.
            </p>
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg mt-6" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              Astrologically, this bond highlights lessons around letting go without losing respect, and supporting someone without controlling their journey. There can be moments of closeness followed by distance, which is common in karmic relationships. The purpose is not attachment, but evolution.
            </p>
<p className="text-neutral-200 font-light leading-relaxed text-base md:text-lg mt-6" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              This connection encourages both souls to grow individually while still holding goodwill for one another. Even if paths move in different directions, the karmic link does not disappear—it transforms into wisdom and understanding.
            </p>
<p className="text-purple-300 font-medium leading-relaxed text-lg md:text-xl mt-8 text-center" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
              A bond like this leaves a lifelong imprint. It teaches how to care deeply, remain kind, and move forward stronger. That is the true meaning of a karmic bond. ✨
            </p>
</div>
<div className="flex justify-center mt-10">
<div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 rounded-full">
<i className="w-5 h-5 text-purple-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-light text-purple-200">Karmic Connection: Very Strong</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-6 py-24 relative z-20" id="gift">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16" style={{animation: 'fadeInUp 0.8s ease-out'}}>
<span className="inline-block px-4 py-1.5 bg-amber-500/20 rounded-full text-sm font-medium text-amber-300 tracking-wide mb-4">
            Special Surprise
          </span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight gradient-text" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Your Gift Awaits
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card rounded-3xl p-8 text-center" style={{animation: 'slideInLeft 0.8s ease-out 0.2s backwards'}}>
<div className="mb-6" style={{animation: 'bounce-soft 2s ease-in-out infinite'}}>
<div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full ring-2 ring-amber-400/30">
<i className="w-12 h-12 text-amber-300" data-lucide="gift" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-2xl font-light text-white mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Flipkart Gift Card</h3>
<div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl p-6 mb-6 shimmer-bg">
<div className="text-white text-lg font-medium tracking-wide mb-2">FLIPKART</div>
<div className="text-white/80 text-sm font-light">Gift Card</div>
</div>
<div className="space-y-4">
<div className="bg-white/5 rounded-xl p-4">
<p className="text-xs text-neutral-400 mb-1">Gift Card Code</p>
<p className="text-lg font-medium text-amber-300 tracking-wider" id="gift-code">XXXX-XXXX-XXXX</p>
</div>
<div className="bg-white/5 rounded-xl p-4">
<p className="text-xs text-neutral-400 mb-1">PIN</p>
<p className="text-lg font-medium text-amber-300 tracking-wider" id="gift-pin">XXXX</p>
</div>
<button className="nav-btn w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl flex items-center justify-center gap-2" id="reveal-gift-btn" onclick="revealGiftDetails()">
<i className="w-5 h-5" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
                Reveal Details
              </button>
</div>
<p className="text-neutral-400 text-sm mt-6 font-light">
              🎁 Use this on Flipkart to buy something you love!
            </p>
</div>

<div className="glass-card rounded-3xl p-8" style={{animation: 'slideInRight 0.8s ease-out 0.2s backwards'}}>
<h3 className="text-2xl font-light text-white mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>How to Use</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
<span className="text-pink-300 font-medium">1</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Go to Flipkart</h4>
<p className="text-neutral-400 text-sm font-light">Open Flipkart app or website</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
<span className="text-pink-300 font-medium">2</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Add Items to Cart</h4>
<p className="text-neutral-400 text-sm font-light">Choose anything you want to buy</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
<span className="text-pink-300 font-medium">3</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Apply Gift Card</h4>
<p className="text-neutral-400 text-sm font-light">At checkout, enter the gift card code and PIN</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
<span className="text-green-300 font-medium">✓</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Enjoy!</h4>
<p className="text-neutral-400 text-sm font-light">Your gift card balance will be applied</p>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-pink-500/10 rounded-xl border border-pink-500/20">
<p className="text-pink-200 text-sm font-light text-center">
                💕 This is my small way of saying you're special to me!
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-6 py-24 relative z-20" id="sorry">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16" style={{animation: 'fadeInUp 0.8s ease-out'}}>
<span className="inline-block px-4 py-1.5 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 tracking-wide mb-4">
            From My Heart
          </span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight gradient-text" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Sorry, Khushi
          </h2>
</div>
<div className="glass-card rounded-3xl p-8 md:p-12 text-center" style={{animation: 'fadeInUp 0.8s ease-out 0.2s backwards'}}>
<div className="mb-8" style={{animation: 'float 4s ease-in-out infinite'}}>
<div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full ring-2 ring-blue-400/30">
<i className="w-12 h-12 text-blue-300" data-lucide="heart-crack" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-3xl font-light text-white mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
            I Miss You
          </h3>
<p className="text-neutral-200 font-light leading-relaxed text-lg mb-8" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
            If I have ever hurt you, even unintentionally, I am truly sorry. You mean more to me than words can express. Distance may separate us, but you are always in my thoughts.
          </p>
<p className="text-neutral-200 font-light leading-relaxed text-lg mb-8" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
            I miss our conversations, your laughter, and just knowing you're there. No matter what happens, please know that I care deeply about you and always will.
          </p>
<p className="text-blue-300 font-medium leading-relaxed text-xl mb-10" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
            You are not just a friend — you are family. And family never truly parts. 💙
          </p>
<div className="flex justify-center gap-6">
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-2" style={{animation: 'pulse-heart 2s ease-in-out infinite'}}>
<i className="w-8 h-8 text-pink-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs text-neutral-400">Love</span>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2" style={{animation: 'pulse-heart 2s ease-in-out infinite', animationDelay: '0.3s'}}>
<i className="w-8 h-8 text-purple-400" data-lucide="infinity" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs text-neutral-400">Forever</span>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2" style={{animation: 'pulse-heart 2s ease-in-out infinite', animationDelay: '0.6s'}}>
<i className="w-8 h-8 text-blue-400" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs text-neutral-400">Always</span>
</div>
</div>
</div>
</div>
</section>

<footer className="px-6 py-12 relative z-20 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<div className="text-2xl font-light tracking-widest gradient-text mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>KHUSHI</div>
<p className="text-neutral-500 text-sm font-light mb-6">Made with love, for someone who deserves all the love in the world 💕</p>
<div className="flex justify-center gap-4">
<span className="text-2xl" style={{animation: 'pulse-heart 2s ease-in-out infinite'}}>💖</span>
<span className="text-2xl" style={{animation: 'pulse-heart 2s ease-in-out infinite', animationDelay: '0.2s'}}>✨</span>
<span className="text-2xl" style={{animation: 'pulse-heart 2s ease-in-out infinite', animationDelay: '0.4s'}}>🌸</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
