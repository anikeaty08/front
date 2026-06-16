import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      let count = 5;
      let mode  = 'advisory';

      const timeMap   = { advisory:'1.5', full:'4–6', wargame:'3–5' };
      const roundsMap = { advisory:1,     full:3,     wargame:2     };

      function updateCount(el) {
        document.getElementById('char-num').textContent = el.value.length;
      }

      function setMode(btn, m) {
        document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        mode = m;
        document.getElementById('m-time').innerHTML =
          timeMap[m] + '<span style="font-size:9px;font-weight:400;color:var(--mist);"> min</span>';
        recalcRounds();
      }

      function adjustCount(d) {
        count = Math.min(8, Math.max(2, count + d));
        document.getElementById('count-val').textContent = count;
        document.getElementById('m-panelists').textContent = count;
      }

      function toggleEnh(el) {
        el.classList.toggle('active');
        recalcRounds();
      }

      function recalcRounds() {
        const active = document.querySelectorAll('.enh-tag.active').length;
        document.getElementById('m-rounds').textContent = roundsMap[mode] + active;
      }

      function convene() {
        const q = document.getElementById('question').value.trim();
        if (!q) {
          const ta = document.getElementById('question');
          ta.focus();
          ta.style.outline = '1px solid rgba(201,169,110,0.5)';
          setTimeout(() => ta.style.outline = '', 1400);
          return;
        }
        const btn = document.querySelector('.convene-btn span:first-child');
        btn.textContent = 'Convening…';
        setTimeout(() => btn.textContent = 'Convene the Board', 2200);
      }
    


      (function(){
        // ─── FLASHLIGHT ───
        const fl = document.getElementById('flashlight');
        const card = document.querySelector('.input-card');
        let mx = 0, my = 0;

        document.addEventListener('mousemove', function(e){
          mx = e.clientX;
          my = e.clientY;
          document.body.classList.add('flash-active');
          fl.style.setProperty('--mx', mx + 'px');
          fl.style.setProperty('--my', my + 'px');

          if (card) {
            const r = card.getBoundingClientRect();
            const cx = mx - r.left;
            const cy = my - r.top;
            card.style.setProperty('--cx', cx + 'px');
            card.style.setProperty('--cy', cy + 'px');
            const inside = mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom;
            const near = mx >= r.left - 80 && mx <= r.right + 80 && my >= r.top - 80 && my <= r.bottom + 80;
            if (near) card.classList.add('flash-near');
            else card.classList.remove('flash-near');
          }
        });

        document.addEventListener('mouseleave', function(){
          document.body.classList.remove('flash-active');
          if (card) card.classList.remove('flash-near');
        });

        // ─── GSAP ANIMATIONS ───
        window.addEventListener('load', function(){
          if (typeof gsap === 'undefined') return;
          gsap.registerPlugin(ScrollTrigger);

          // Holodex staggered entrance
          const holoItems = document.querySelectorAll('.holodex-item');
          holoItems.forEach(function(item, i){
            const delay = 0.08 + i * 0.09;
            setTimeout(function(){
              item.classList.add('holo-visible');
            }, delay * 1000);
          });

          // Eyebrow fade up
          gsap.to('.eyebrow', {
            opacity: 1, y: 0, filter: 'blur(0px)',
            duration: 0.9, delay: 0.25, ease: 'power3.out',
            onStart: function(){ document.querySelector('.eyebrow').style.transform = 'translateY(16px)'; }
          });
          gsap.fromTo('.eyebrow',
            { opacity: 0, y: 16, filter: 'blur(4px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, delay: 0.25, ease: 'power3.out' }
          );

          // Masked staggered word reveal on headline
          const wordInners = document.querySelectorAll('.word-inner');
          gsap.fromTo(wordInners,
            { y: '110%', opacity: 0, filter: 'blur(5px)' },
            {
              y: '0%', opacity: 1, filter: 'blur(0px)',
              duration: 0.78,
              stagger: 0.11,
              delay: 0.42,
              ease: 'power4.out'
            }
          );

          // Subhead
          gsap.fromTo('.subhead',
            { opacity: 0, y: 14, filter: 'blur(3px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, delay: 0.9, ease: 'power3.out' }
          );

          // Input card
          gsap.fromTo('.input-card',
            { opacity: 0, y: 20, filter: 'blur(4px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, delay: 1.05, ease: 'power3.out' }
          );

          // Clip-slide sections inside card with incremental delays
          var clipSlides = document.querySelectorAll('.clip-slide');
          clipSlides.forEach(function(el, i){
            var delay = 1.18 + i * 0.13;
            setTimeout(function(){
              el.classList.add('cs-visible');
              el.style.animationDelay = '0s';
            }, delay * 1000);
          });

          // Categories
          gsap.fromTo('.categories',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.7, delay: 1.7, ease: 'power2.out' }
          );
          var catTags = document.querySelectorAll('.cat-tag');
          catTags.forEach(function(tag, i){
            gsap.fromTo(tag,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.5, delay: 1.75 + i * 0.06, ease: 'power2.out' }
            );
          });

          // ScrollTrigger — Masked Staggered Word Reveal (for future scrollable content)
          // Applied to any .reveal-words containers added later
          ScrollTrigger.batch('.scroll-word-reveal .word-inner', {
            onEnter: function(els){
              gsap.fromTo(els,
                { y: '110%', opacity: 0, filter: 'blur(6px)' },
                { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.72, stagger: 0.1, ease: 'power4.out' }
              );
            },
            start: 'top 88%',
            once: true
          });

          // IntersectionObserver for any .observe-fade elements
          var fadeEls = document.querySelectorAll('.observe-fade');
          if (fadeEls.length > 0) {
            var fadeObs = new IntersectionObserver(function(entries){
              entries.forEach(function(entry){
                if (entry.isIntersecting) {
                  gsap.to(entry.target, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' });
                  fadeObs.unobserve(entry.target);
                }
              });
            }, { threshold: 0.15 });
            fadeEls.forEach(function(el){ fadeObs.observe(el); });
          }
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg">
<div className="bg-img">
<img alt="" className="object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d764e40-3127-4fba-87ae-61beaa60fb90_3840w.webp"/>
</div>
<div className="bg-vignette"></div>
<div className="bg-glow"></div>
</div>
<div className="flashlight-overlay" id="flashlight" style={{-Mx: '1551px', -My: '223px'}}></div>

<nav className="topnav">
<a className="logo" href="#">
        The
        <span>Board</span>
</a>
<span className="est-badge text-center">Est. MMXXVI</span>
<div className="nav-right">
<a className="nav-link" href="#">Archive</a>
<a className="nav-link" href="#">DeepArticles</a>
<div className="nav-divider"></div>
<button className="nav-btn">⚙ Setup</button>
</div>
</nav>

<main className="main" id="main-content">
<div className="content-wrap">
<div className="eyebrow" style={{filter: 'blur(0px)'}}>
<span className="eyebrow-rule"></span>
<span className="eyebrow-text">AI Expert Panel Deliberation</span>
<span className="eyebrow-rule"></span>
</div>
<h1 className="headline" id="headline">
<span className="word-mask"><span className="word-inner" style={{filter: 'blur(0px)'}}>Convene</span></span>
<span className="word-mask"><span className="word-inner" style={{filter: 'blur(0px)'}}>Your</span></span>
<br/>
<strong className="">
<span className="word-mask">
<span className="word-inner" style={{filter: 'blur(0px)'}}>Advisory</span>
</span>
<span className="word-mask">
<span className="word-inner" style={{filter: 'blur(0px)'}}>Board.</span>
</span>
</strong>
</h1>
<p className="subhead" style={{filter: 'blur(0px)'}}>
          Specialized AI analysts assembled to deliberate on complex questions.
          Geopolitics, defense, technology, finance — structured analysis with
          falsifiable predictions.
        </p>

<div className="input-card" style={{-Cx: '71px', -Cy: '-396.046875px', filter: 'blur(0px)'}}>

<div className="question-area clip-slide" style={{animationDelay: '0s'}}>
<div className="q-label">Matter for Deliberation</div>
<textarea className="question-input" id="question" maxlength="500" oninput="updateCount(this)" placeholder="What is your question for the board…" rows="3" spellcheck="false"></textarea>
<div className="char-row">
<span className="char-count">
<span id="char-num">0</span>
                / 500
              </span>
</div>
</div>

<div className="config-row clip-slide" style={{animationDelay: '0s'}}>
<div className="config-group">
<div className="config-label">Session Type</div>
<div className="mode-tabs">
<button className="mode-tab active" onclick="setMode(this,'advisory')">
                  Advisory
                </button>
<button className="mode-tab" onclick="setMode(this,'full')">
                  Full Engagement
                </button>
<button className="mode-tab" onclick="setMode(this,'wargame')">
                  War Game
                </button>
</div>
</div>
<div className="config-group" style={{flex: '0', minWidth: '150px'}}>
<div className="config-label">Counsel Tier</div>
<select className="tier-select">
<option>Senior Counsel</option>
<option>Managing Partner</option>
<option>Associate Counsel</option>
</select>
</div>
<div className="config-group" style={{flex: '0', minWidth: '110px'}}>
<div className="config-label">Panelists</div>
<div className="count-control">
<button className="count-btn" onclick="adjustCount(-1)">−</button>
<span className="count-val" id="count-val">5</span>
<button className="count-btn" onclick="adjustCount(1)">+</button>
</div>
</div>
</div>

<div className="enhancements clip-slide" style={{animationDelay: '0s'}}>
<span className="enh-label">Enhance —</span>
<span className="enh-tag" onclick="toggleEnh(this)">
              ⚔ Formal Debate
            </span>
<span className="enh-tag" onclick="toggleEnh(this)">
              👥 Large Panel
            </span>
<span className="enh-tag" onclick="toggleEnh(this)">
              🏛 Historical Cameos
            </span>
<span className="enh-tag" style={{cursor: 'not-allowed', pointerEvents: 'none'}}>
              🧠 Deep Think
              <span className="enh-soon">SOON</span>
</span>
</div>

<div className="action-row clip-slide" style={{animationDelay: '0s'}}>
<div className="session-meta">
<div className="meta-item">
<div className="meta-val" id="m-panelists">5</div>
<div className="meta-key">Panelists</div>
</div>
<div className="meta-item">
<div className="meta-val" id="m-time">
                  1.5
                  <span style={{fontSize: '9px', fontWeight: '400', color: 'var(--mist)'}}>
                    min
                  </span>
</div>
<div className="meta-key">Est. Time</div>
</div>
<div className="meta-item">
<div className="meta-val" id="m-rounds">1</div>
<div className="meta-key">Rounds</div>
</div>
</div>
<button className="convene-btn" onclick="convene()">
<span>Convene the Board</span>
<span className="arr">→</span>
</button>
</div>
</div>


<div className="categories">
<span className="cat-label">Explore —</span>
<a className="cat-tag" href="#">Geopolitics</a>
<a className="cat-tag" href="#">Defense</a>
<a className="cat-tag" href="#">Technology</a>
<a className="cat-tag" href="#">Finance</a>
<a className="cat-tag" href="#">Science</a>
<a className="cat-tag" href="#">Intelligence</a>
<a className="cat-tag" href="#">Policy</a>
</div>
</div>
</main>

<footer className="status-bar">
<div className="status-left">
<div className="status-dot">
<div className="dot-pulse"></div>
<span className="status-text">Board in Session</span>
</div>
<div className="s-divider"></div>
<span className="status-text">
          Multi-agent deliberation · Cognitive diversity optimization
        </span>
</div>
<div className="status-right">
<span className="status-stat">
<strong>260+</strong>
          sessions
        </span>
<span className="status-stat">
<strong>190+</strong>
          categories
        </span>
<span className="status-stat">© 2026 TheBoard</span>
</div>
</footer>



    </>
  );
}
