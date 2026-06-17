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



// ===== PRELOADER (compressed to ~3 seconds) =====
(function() {
  var preloader = document.getElementById('preloader');
  var center = document.getElementById('preloader-center');
  var wordmark = document.getElementById('preloader-wordmark');
  var divider = document.getElementById('preloader-divider');
  var byline = document.getElementById('preloader-byline');
  var blurs = document.querySelectorAll('.preloader-blur');

  // Orbs appear at 100ms
  blurs.forEach(function(b, i) { setTimeout(function() { b.classList.add('alive'); }, 100 + i * 50); });
  // Wordmark visible at ~200ms, settles by 800ms
  setTimeout(function() { center.classList.add('visible'); }, 200);
  setTimeout(function() { wordmark.classList.add('settled'); }, 800);
  // Divider draws at 1000ms
  setTimeout(function() { divider.classList.add('drawn'); }, 1000);
  // Byline appears at 1200ms
  setTimeout(function() { byline.classList.add('visible'); }, 1200);
  // No tagline, no drift phase
  // Fade out begins at 2200ms
  setTimeout(function() { preloader.classList.add('fade-out'); }, 2200);
  // Hero appears at 3000ms
  setTimeout(function() {
    preloader.style.display = 'none';
    document.getElementById('site-header').classList.add('visible');
    initScrollObserver();
    animateHero();
  }, 3000);
})();

// ===== HERO =====
function animateHero() {
  var h = document.getElementById('hero-content');
  if (h) h.classList.add('active');
  setTimeout(startHeroTyping, 1800);
}

// ===== HERO TYPING (cycles 2 prompts then settles) =====
var heroPrompts = [
  "Why am I always tired?",
  "What do my blood results mean?"
];
var heroPromptIdx = 0;
var heroPromptsCycled = 0;
function startHeroTyping() {
  var el = document.getElementById('hero-typed');
  if (!el) return;
  function cyclePrompt() {
    if (heroPromptsCycled >= 2) {
      // Stop typing, settle on static placeholder
      el.innerHTML = '<span class="static-placeholder">Ask Pura anything...</span>';
      // Replace mic with "Try free" CTA
      var micIcon = document.querySelector('#search-bar-right .mic-icon');
      var cta = document.getElementById('search-cta');
      if (micIcon) micIcon.style.display = 'none';
      if (cta) cta.classList.add('visible');
      return;
    }
    var text = heroPrompts[heroPromptIdx];
    heroPromptIdx = (heroPromptIdx + 1) % heroPrompts.length;
    var i = 0;
    el.innerHTML = '<span class="search-bar-cursor"></span>';
    var typeIv = setInterval(function() {
      if (i < text.length) {
        el.innerHTML = '<span class="typed-char">' + text.substring(0, i + 1) + '</span><span class="search-bar-cursor"></span>';
        i++;
      } else {
        clearInterval(typeIv);
        setTimeout(function() {
          var j = text.length;
          var eraseIv = setInterval(function() {
            if (j > 0) { j--; el.innerHTML = '<span class="typed-char">' + text.substring(0, j) + '</span><span class="search-bar-cursor"></span>'; }
            else { clearInterval(eraseIv); el.innerHTML = '<span class="search-bar-cursor"></span>'; heroPromptsCycled++; setTimeout(cyclePrompt, 400); }
          }, 25);
        }, 2000);
      }
    }, 45);
  }
  cyclePrompt();
}

// ===== TYPEWRITER =====
function typeText(el, text, speed, cb) {
  var i = 0; el.textContent = '';
  var iv = setInterval(function() {
    if (i < text.length) { el.textContent += text.charAt(i); i++; }
    else { clearInterval(iv); if (cb) cb(); }
  }, speed);
  return iv;
}

// ===== SIGNAL TEXT =====
var signalAnimated = false;
function animateSignalText() {
  if (signalAnimated) return;
  signalAnimated = true;
  var words = document.querySelectorAll('#signal-headline .signal-word');
  words.forEach(function(word, i) { setTimeout(function() { word.classList.add('legible'); }, i * 100); });
}

// ===== REFRAME (comprehension) =====
var reframeAnimated = false;
function animateReframe() {
  if (reframeAnimated) return;
  reframeAnimated = true;
  var content = document.getElementById('reframe-content');
  if (!content) return;
  content.classList.add('active');
  // Comprehension word resolves 600ms after the rest
  setTimeout(function() {
    var word = document.getElementById('reframe-comprehension');
    if (word) word.classList.add('focused');
  }, 600);
}

// ===== INSIGHT PROOF =====
var insightAnimated = false;
function animateInsight() {
  if (insightAnimated) return;
  insightAnimated = true;
  var stage = document.getElementById('insight-stage');
  if (!stage) return;
  stage.classList.add('revealed');
  var words = stage.querySelectorAll('.insight-word');
  words.forEach(function(word, i) {
    setTimeout(function() { word.classList.add('focused'); }, 800 + i * 220);
  });
  var sources = stage.querySelectorAll('.insight-source');
  sources.forEach(function(src, i) {
    setTimeout(function() { src.classList.add('visible'); }, 1600 + i * 600);
  });
}

// ===== CHAT (shorter response, warm glow) =====
var chatTyped = false;
function typeChatResponse() {
  if (chatTyped) return;
  chatTyped = true;
  var userBubble = document.getElementById('chat-user');
  if (userBubble) userBubble.classList.add('visible');
  var wrapper = document.getElementById('chat-response-wrapper');
  var indicator = document.getElementById('typing-indicator');
  var textEl = document.getElementById('chat-text');
  var chatBubble = document.getElementById('chat-a');
  setTimeout(function() { wrapper.classList.add('visible'); }, 900);
  setTimeout(function() {
    indicator.style.display = 'none';
    // Add warm glow
    if (chatBubble) chatBubble.classList.add('glowing');
    typeText(textEl, "I\u2019ve noticed a pattern with your afternoon headaches. Want me to walk you through what I\u2019m seeing?", 22);
  }, 2600);
}

// ===== SCORE COUNTER =====
var scoreAnimated = false;
function animateScore() {
  if (scoreAnimated) return;
  scoreAnimated = true;
  var el = document.getElementById('score-value');
  var ring = document.getElementById('score-ring');
  ring.classList.add('visible');
  var target = 78;
  var current = 0;
  setTimeout(function() {
    var iv = setInterval(function() {
      current += 1;
      if (current >= target) { current = target; clearInterval(iv); ring.classList.add('counted'); }
      el.textContent = current;
    }, 22);
  }, 400);
}

// ===== STAT COUNTERS =====
var statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('.stat-number').forEach(function(el) {
    var target = parseInt(el.dataset.count);
    var suffix = el.dataset.suffix || '';
    var current = 0;
    var step = Math.max(1, Math.floor(target / 40));
    var iv = setInterval(function() {
      current += step;
      if (current >= target) { current = target; clearInterval(iv); }
      el.textContent = current + suffix;
    }, 30);
  });
}

// ===== TIMELINE SPINE =====
var timelineRevealed = false;
function revealTimeline() {
  if (timelineRevealed) return;
  timelineRevealed = true;
  var spine = document.getElementById('timeline-spine');
  if (!spine) return;
  spine.classList.add('revealed');
  var entries = spine.querySelectorAll('.timeline-entry');
  entries.forEach(function(entry) {
    var delay = parseInt(entry.dataset.delay) || 0;
    setTimeout(function() { entry.classList.add('revealed'); }, 300 + delay);
  });
}

// ===== HERO PARALLAX =====
function updateHeroParallax(scrollTop) {
  var hero = document.getElementById('hero-content');
  if (!hero) return;
  var heroH = window.innerHeight;
  var progress = Math.min(scrollTop / heroH, 1);
  hero.style.opacity = Math.max(0, 1 - progress * 1.5);
  hero.style.transform = 'translateY(' + (progress * -40) + 'px) scale(' + Math.max(0.92, 1 - progress * 0.08) + ')';
}

// ===== ORB PARALLAX =====
function updateOrbParallax(scrollTop) {
  document.querySelectorAll('.bg-orb[data-parallax]').forEach(function(orb) {
    orb.style.transform = 'translateY(' + (-scrollTop * parseFloat(orb.dataset.parallax)) + 'px)';
  });
}

// ===== REACTIVE BACKGROUND ORBS =====
var currentOrbMood = 'hero';
function updateOrbMood(sectionId) {
  var orbPurple = document.getElementById('orb-purple');
  var orbPurpleDeep = document.getElementById('orb-purple-deep');
  var orbPeach = document.getElementById('orb-peach');
  var orbPeachDeep = document.getElementById('orb-peach-deep');
  if (!orbPurple || !orbPeach) return;

  var mood = 'default';
  if (sectionId === 'hero-section') mood = 'hero';
  else if (sectionId === 'section-tension' || sectionId === 'section-reframe') mood = 'tension';
  else if (sectionId === 'section-bridge' || sectionId === 'section-insight' || sectionId === 'section-moment') mood = 'warm';
  else if (sectionId === 'section-close') mood = 'close';
  else mood = 'default';

  if (mood === currentOrbMood) return;
  currentOrbMood = mood;

  // Reset pulse animation
  orbPurple.style.animation = 'none';
  orbPurpleDeep.style.animation = 'none';

  if (mood === 'hero' || mood === 'default' || mood === 'warm') {
    // Default warm state
    orbPurple.style.opacity = '1';
    orbPurpleDeep.style.opacity = '1';
    orbPeach.style.opacity = '1';
    orbPeachDeep.style.opacity = '1';
    orbPurple.style.background = 'rgba(69,66,221,0.04)';
    orbPurpleDeep.style.background = 'rgba(69,66,221,0.025)';
  } else if (mood === 'tension') {
    // Purple orb intensifies, peach dims
    orbPurple.style.opacity = '1';
    orbPurple.style.background = 'rgba(69,66,221,0.08)';
    orbPurpleDeep.style.opacity = '1';
    orbPurpleDeep.style.background = 'rgba(69,66,221,0.05)';
    orbPeach.style.opacity = '0.4';
    orbPeachDeep.style.opacity = '0.4';
  } else if (mood === 'score') {
    // Purple orb pulses gently
    orbPurple.style.opacity = '1';
    orbPurple.style.background = 'rgba(69,66,221,0.05)';
    orbPurpleDeep.style.opacity = '1';
    orbPeach.style.opacity = '1';
    orbPeachDeep.style.opacity = '1';
    orbPurple.style.animation = 'orb-pulse 3s ease-in-out infinite';
  } else if (mood === 'close') {
    // All orbs slightly brighter/warmer
    orbPurple.style.opacity = '1';
    orbPurple.style.background = 'rgba(69,66,221,0.05)';
    orbPurpleDeep.style.opacity = '1';
    orbPeach.style.opacity = '1';
    orbPeach.style.background = 'rgba(246,211,158,0.7)';
    orbPeachDeep.style.opacity = '1';
    orbPeachDeep.style.background = 'rgba(247,220,201,0.45)';
  }
}

// ===== SCROLL PROGRESS DOTS =====
function buildProgressDots() {
  var container = document.getElementById('scroll-progress');
  var sections = document.querySelectorAll('#scroll-container .snap-section');
  sections.forEach(function(_, i) {
    var dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (i === 0) dot.classList.add('active');
    container.appendChild(dot);
  });
}

// ===== SCROLL OBSERVER =====
var bottomBarRevealed = false;
function initScrollObserver() {
  var sc = document.getElementById('scroll-container');
  buildProgressDots();
  var progressEl = document.getElementById('scroll-progress');
  var dots = progressEl.querySelectorAll('.progress-dot');
  var fill = document.getElementById('progress-fill');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      // Section content reveals
      var content = entry.target.querySelector('.section-content');
      if (content) {
        if (entry.isIntersecting) content.classList.add('active');
        else content.classList.remove('active');
      }
      // Reframe content reveal (different animation class)
      var reframe = entry.target.querySelector('.reframe-content');
      if (reframe) {
        if (entry.isIntersecting) reframe.classList.add('active');
        else reframe.classList.remove('active');
      }
      // Split reveals
      var split = entry.target.querySelector('.split-section');
      if (split) {
        if (entry.isIntersecting) split.classList.add('active');
        else split.classList.remove('active');
      }

      var id = entry.target.id;

      // Orb mood system
      if (entry.isIntersecting) {
        updateOrbMood(id);
      }

      if (entry.isIntersecting) {
        if (id === 'section-tension') setTimeout(animateSignalText, 400);
        if (id === 'section-reframe') setTimeout(animateReframe, 300);
        if (id === 'section-insight') setTimeout(animateInsight, 300);
        if (id === 'section-moment') setTimeout(revealTimeline, 400);
        if (id === 'section-network') setTimeout(animateStats, 500);
        if (id === 'section-bridge' && !bottomBarRevealed) {
          bottomBarRevealed = true;
          document.getElementById('bottom-bar').classList.add('visible');
        }
      }

      // Progress dots
      if (entry.isIntersecting) {
        var allSections = Array.from(document.querySelectorAll('#scroll-container .snap-section'));
        var idx = allSections.indexOf(entry.target);
        if (idx >= 0) {
          dots.forEach(function(d, i) { d.classList.toggle('active', i === idx); });
        }
      }
    });
  }, { threshold: 0.25, root: sc });

  sc.querySelectorAll('.snap-section').forEach(function(s) { observer.observe(s); });

  var hintHidden = false;
  var ticking = false;
  sc.addEventListener('scroll', function() {
    if (!hintHidden && sc.scrollTop > 80) {
      hintHidden = true;
      var hint = document.getElementById('scroll-hint');
      if (hint) hint.style.opacity = '0';
      progressEl.classList.add('visible');
    }
    var scrollHeight = sc.scrollHeight - sc.clientHeight;
    var scrollPercent = scrollHeight > 0 ? (sc.scrollTop / scrollHeight) * 100 : 0;
    if (fill) fill.style.height = scrollPercent + '%';

    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function() {
        updateHeroParallax(sc.scrollTop);
        updateOrbParallax(sc.scrollTop);
        ticking = false;
      });
    }
  });
}

// ===== MENU =====
function openMenu() {
  var o = document.getElementById('menu-overlay');
  o.style.display = 'flex';
  setTimeout(function() { o.classList.add('open'); }, 10);
}
function closeMenu() {
  var o = document.getElementById('menu-overlay');
  o.classList.remove('open');
  setTimeout(function() { o.style.display = 'none'; }, 300);
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });

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
      

<div id="preloader">
<div className="preloader-blur pb-1"></div>
<div className="preloader-blur pb-2"></div>
<div className="preloader-blur pb-3"></div>
<div className="preloader-blur pb-4"></div>
<div id="preloader-center">
<h1 id="preloader-wordmark">Pura</h1>
<div id="preloader-divider"></div>
<span id="preloader-byline">by PureHealth</span>
</div>
</div>

<div id="bg-scene">
<div className="bg-orb bg-orb-peach" data-parallax="0.03" id="orb-peach"></div>
<div className="bg-orb bg-orb-white" data-parallax="0.02"></div>
<div className="bg-orb bg-orb-navy" data-parallax="0.04"></div>
<div className="bg-orb bg-orb-purple" data-parallax="0.025" id="orb-purple"></div>
<div className="bg-orb bg-orb-peach-deep" data-parallax="0.015" id="orb-peach-deep"></div>
<div className="bg-orb bg-orb-purple-deep" data-parallax="0.035" id="orb-purple-deep"></div>
</div>

<header id="site-header">
<div style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
<span style={{fontSize: '17px', fontWeight: '300', color: '#0E1A2B', letterSpacing: '-0.02em'}}>Pura</span>
</div>
<button id="hamburger-btn" onclick="openMenu()" style={{width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'rgba(255, 255, 255, 0.4)', cursor: 'pointer', backdropFilter: 'blur(12px)', transition: 'transform 0.3s ease'}}>
<span style={{display: 'block', width: '16px', height: '1.5px', background: 'rgba(14,26,43,0.4)', borderRadius: '1px'}}></span>
</button>
</header>

<footer id="bottom-bar">
<button className="cta-primary" onclick="window.open('#download')" style={{padding: '10px 28px', fontSize: '13px'}}>Try Pura free</button>
<span style={{fontSize: '10px', color: 'rgba(14,26,43,0.2)'}}>Free on iOS &amp; Android</span>
</footer>

<div id="scroll-progress">
<div className="progress-track"><div className="progress-fill" id="progress-fill"></div></div>
</div>

<div id="menu-overlay">
<div style={{position: 'absolute', top: '20px', right: '32px'}}>
<button onclick="closeMenu()" style={{width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(14,26,43,0.04)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
<svg fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '16px', height: '16px', color: '#0E1A2B'}} viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
<div style={{position: 'absolute', top: '20px', left: '32px'}}>
<span style={{fontSize: '17px', fontWeight: '300', color: '#0E1A2B', letterSpacing: '-0.02em'}}>Pura</span>
</div>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'}}>
<a className="menu-link" href="#">How Pura Works</a>
<a className="menu-link" href="#">Download</a>
<a className="menu-link" href="#" style={{opacity: '0.3'}}>About</a>
<a className="menu-link" href="#" style={{opacity: '0.3'}}>Contact</a>
<a className="menu-link" href="#" style={{opacity: '0.3'}}>Legal</a>
</div>
<div style={{position: 'absolute', bottom: '32px', left: '0', right: '0', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
<span style={{fontSize: '11px', color: 'rgba(14,26,43,0.2)'}}>PureHealth</span>
<span style={{fontSize: '10px', color: 'rgba(14,26,43,0.15)'}}>Privacy • Terms</span>
<span style={{fontSize: '10px', color: 'rgba(14,26,43,0.15)'}}>© 2026 Pura</span>
</div>
</div>

<div id="scroll-container">

<section className="snap-section hero-sect" id="hero-section" style={{minHeight: '100vh', justifyContent: 'center'}}>
<div id="hero-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '960px'}}>
<h1 className="hero-title" style={{textAlign: 'center', margin: '0'}}>
        Your health has never been<br/>in <em>one place.</em>
</h1>
<p className="hero-subtitle">Your doctor has your test results. Your watch has your sleep.<br/>Your head has your symptoms. Nothing has <strong>all of it.</strong></p>
<div className="hero-search">
<div className="search-bar">
<div className="search-bar-icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="search-bar-text" id="hero-typed"><span className="search-bar-cursor"></span></div>
<div className="search-bar-mic" id="search-bar-right">
<div className="mic-icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<a className="search-bar-cta" href="#download" id="search-cta">Try free →</a>
</div>
</div>
<div className="hero-suggestions">
<div className="suggestion-chip">Why am I always tired?</div>
<div className="suggestion-chip">What do my blood results mean?</div>
<div className="suggestion-chip">Is this bruise serious?</div>
<div className="suggestion-chip">Identify a medication</div>
</div>
</div>
</div>
<div className="hero-glow" id="hero-glow"></div>
<div className="scroll-hint" id="scroll-hint">
<span>Scroll</span>
<svg fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgba(14,26,43,0.15)'}} viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</section>

<section className="snap-section" id="section-tension">
<div className="section-content">
<h2 id="signal-headline">
<span className="signal-word">Your</span> <span className="signal-word">doctor</span> <span className="signal-word">reads</span> <span className="signal-word">your</span> <span className="signal-word">blood</span> <span className="signal-word">work.</span><br/>
<span className="signal-word">Your</span> <span className="signal-word">watch</span> <span className="signal-word">reads</span> <span className="signal-word">your</span> <span className="signal-word">heart</span> <span className="signal-word">rate.</span><br/>
<span className="signal-word">Your</span> <span className="signal-word">search</span> <span className="signal-word">history</span> <span className="signal-word">reads</span> <span className="signal-word">your</span> <em><span className="signal-word">fears.</span></em>
</h2>
<p className="section-sub">Three systems. Zero conversation between them.</p>
</div>
</section>

<section className="snap-section compact" id="section-reframe" style={{minHeight: '50vh'}}>
<div className="reframe-content" id="reframe-content">
<h2>That's not a health problem.<br/>That's a <em><span className="reframe-word-comprehension" id="reframe-comprehension">comprehension</span></em> problem.</h2>
</div>
</section>

<section className="snap-section" id="section-bridge" style={{minHeight: 'auto', paddingTop: '100px', paddingBottom: '100px'}}>
<div className="section-content" style={{maxWidth: '960px'}}>
<span className="section-label">Home for your health</span>
<div className="section-divider" style={{marginBottom: '20px'}}></div>
<h2>Every test. Every signal.<br/>Every night's sleep.<br/><em>Finally, one room.</em></h2>
<div className="product-reveal">
<div className="product-frame">
<div className="product-status-bar">
<span className="product-time">6:45 AM</span>
<span className="product-time">Tuesday</span>
</div>
<div className="product-greeting">Good morning, <strong>Sarah</strong></div>
<div className="product-score-row">
<div className="product-mini-ring">
<svg viewbox="0 0 70 70"><circle className="ring-track" cx="35" cy="35" r="30.5"></circle><circle className="ring-fill" cx="35" cy="35" r="30.5"></circle></svg>
<span className="product-mini-value">78</span>
</div>
<div className="product-score-detail">
<div className="product-score-label">Pura Score</div>
<div className="product-score-msg">Your iron is trending down. Rest day recommended.</div>
</div>
</div>
<div className="product-data-row">
<div className="product-data-chip">
<div className="product-data-chip-val">7h 12m</div>
<div className="product-data-chip-label">Sleep</div>
</div>
<div className="product-data-chip">
<div className="product-data-chip-val">62</div>
<div className="product-data-chip-label">HRV</div>
</div>
<div className="product-data-chip">
<div className="product-data-chip-val">3</div>
<div className="product-data-chip-label">Insights</div>
</div>
</div>
</div>
</div>
<div className="bridge-proof">
<span className="bridge-proof-line">The test your GP forgot to mention.</span>
<span className="bridge-proof-sep">·</span>
<span className="bridge-proof-line">The pattern your watch couldn't see alone.</span>
<span className="bridge-proof-sep">·</span>
<span className="bridge-proof-line">The connection nobody made.</span>
</div>
</div>
</section>

<section className="snap-section" id="section-insight">
<div className="section-content" style={{maxWidth: '680px'}}>
<span className="section-label">Ask Pura</span>
<div className="insight-stage" id="insight-stage">
<div className="insight-card">
<div className="insight-card-dash"></div>
<div className="insight-card-text" id="insight-text">
<span className="insight-word">"Your </span><span className="insight-word"><strong>vitamin D has been low since March</strong> </span><span className="insight-source src-lab">lab results</span><span className="insight-word">. Your </span><span className="insight-word"><strong>sleep efficiency dropped 12%</strong> over the same period </span><span className="insight-source src-wearable">wearable</span><span className="insight-word">. You've </span><span className="insight-word"><strong>logged fatigue 9 times</strong> in the last 2 weeks </span><span className="insight-source src-log">symptom log</span><span className="insight-word">. These are connected. </span><span className="insight-word">Here's what I'd suggest — and I've prepared a summary for your doctor </span><span className="insight-source src-ai">Pura AI</span><span className="insight-word">."</span>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section" id="section-moment">
<div className="section-content" style={{maxWidth: '780px'}}>
<span className="section-label">Built for your day</span>
<h2>It meets you where you <em>are.</em></h2>
<p className="section-sub">Pura doesn't wait for you to ask. It watches, connects, and acts — all day, every day.</p>
<div className="timeline-spine" id="timeline-spine">
<div className="timeline-entry" data-delay="0">
<div className="timeline-time">6:45 AM</div>
<div className="timeline-content">
<p className="timeline-action"><strong>Iron trending down since January.</strong> Sleep was light. Today's a rest day.</p>
<p className="timeline-connection">sleep + labs + activity → daily recommendation</p>
<span className="timeline-tag tag-score">PureScore</span>
</div>
</div>
<div className="timeline-entry" data-delay="120">
<div className="timeline-time">12:30 PM</div>
<div className="timeline-content">
<p className="timeline-action"><strong>Vitamin D reminder</strong> — 3rd month below range. Recipes adjusted today.</p>
<p className="timeline-connection">lab trend + nutrition plan → proactive nudge</p>
<span className="timeline-tag tag-labs">Labs</span>
</div>
</div>
<div className="timeline-entry" data-delay="240">
<div className="timeline-time">3:15 PM</div>
<div className="timeline-content">
<p className="timeline-action"><strong>Dr. Hassan appointment tomorrow.</strong> Summary prepared — iron, sleep, symptoms.</p>
<p className="timeline-connection">clinical history + wearable data → doctor brief</p>
<span className="timeline-tag tag-care">Care</span>
</div>
</div>
<div className="timeline-entry" data-delay="360">
<div className="timeline-time">9:20 PM</div>
<div className="timeline-content">
<p className="timeline-action"><strong>Sleep window shifted 30 min.</strong> You trained today — your body needs more recovery.</p>
<p className="timeline-connection">activity + HRV + sleep pattern → tonight's adjustment</p>
<span className="timeline-tag tag-sleep">Sleep</span>
</div>
</div>
<div className="timeline-entry" data-delay="480">
<div className="timeline-time">Weekly</div>
<div className="timeline-content">
<p className="timeline-action"><strong>Pattern found:</strong> energy dips every Tuesday and Thursday track with skipped B12.</p>
<p className="timeline-connection">symptom log + supplement log + calendar → weekly insight</p>
<span className="timeline-tag tag-pattern">Pattern</span>
</div>
</div>
<div className="timeline-loop-label">The loop never stops learning</div>
</div>
</div>
</section>

<section className="snap-section" id="section-network" style={{minHeight: '85vh'}}>
<div className="split-section" id="split-network">
<div className="split-left">
<span className="section-label">Not built by a startup</span>
<h2>Built by the people<br/>who run <em>the hospitals.</em></h2>
</div>
<div className="split-right">
<p>Pura is built by PureHealth — the largest healthcare network in the UAE. Real clinical infrastructure. Not a Silicon Valley experiment.</p>
<div style={{display: 'flex', gap: '40px', marginBottom: '24px'}}>
<div>
<div className="stat-number" data-count="30" data-suffix="+">0</div>
<div className="stat-label">Hospitals</div>
</div>
<div>
<div className="stat-number" data-count="100" data-suffix="+">0</div>
<div className="stat-label">Clinics</div>
</div>
<div>
<div className="stat-number" data-count="1" data-suffix="">0</div>
<div className="stat-label">App</div>
</div>
</div>
<div className="trust-strip" style={{justifyContent: 'flex-start', marginTop: '16px'}}>
<span>SEHA</span><span className="dot">·</span><span>DAMAN</span><span className="dot">·</span><span>Cleveland Clinic Abu Dhabi</span>
</div>
</div>
</div>
</section>

<section className="snap-section" id="section-close">
<div className="section-content">
<p className="manifesto">
<span className="manifesto-line">You were guessing.</span>
<span className="manifesto-line">Now you <em>understand.</em></span>
</p>
<p className="section-sub" style={{marginTop: '32px'}}>The kind of health intelligence that used to require a concierge doctor.<br/>Free, from PureHealth.</p>
<div className="cta-row">
<button className="cta-primary" onclick="window.open('#download')">Try Pura free</button>
<button className="cta-secondary">Get your first score</button>
</div>
<div className="trust-strip" style={{marginTop: '32px'}}>
<span>Free on iOS &amp; Android</span><span className="dot">·</span><span>No credit card required</span>
</div>
</div>
</section>
<div style={{height: '100px'}}></div>
</div>


    </>
  );
}
