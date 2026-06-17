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



    // ── Dynamic year ───────────────────────────────────────────────
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    // ── Mobile hamburger ───────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // ── Nav scroll tint ────────────────────────────────────────────
    const mainNav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        mainNav.style.background = 'rgba(8,8,10,0.92)';
      } else {
        mainNav.style.background = 'rgba(8,8,10,0.72)';
      }
    }, { passive: true });

    // ── IntersectionObserver ───────────────────────────────────────
    const revealEls = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .stagger-up'
    );

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));

    // ── Progress bars ──────────────────────────────────────────────
    const barEls = document.querySelectorAll('.stat-progress-fill, .intensity-fill');

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.getAttribute('data-width');
          setTimeout(() => { el.style.width = target; }, 100);
          barObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    barEls.forEach(el => barObserver.observe(el));

    // ── Number counters ────────────────────────────────────────────
    function formatCompact(n) {
      if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M+';
      if (n >= 1000) return Math.round(n / 1000) + 'K+';
      return n.toString();
    }

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const fmt = el.getAttribute('data-format');
      const duration = 1800;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        if (fmt === 'compact') {
          el.textContent = formatCompact(current);
        } else {
          el.textContent = current;
        }

        if (progress < 1) requestAnimationFrame(tick);
        else {
          if (fmt === 'compact') el.textContent = formatCompact(target);
          else el.textContent = target;
        }
      }
      requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.counter').forEach(animateCounter);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-stat]').forEach(el => counterObserver.observe(el));

    // Hero stats counters — fire on load after short delay
    function heroCounters() {
      setTimeout(() => {
        const members = document.getElementById('stat-members');
        const sessions = document.getElementById('stat-sessions');
        const prs = document.getElementById('stat-prs');

        if (members) {
          // 84K members
          const dur = 1600;
          const startT = performance.now();
          function tickM(now) {
            const p = Math.min((now - startT) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            members.textContent = Math.round(e * 84);
            if (p < 1) requestAnimationFrame(tickM);
          }
          requestAnimationFrame(tickM);
        }
        if (sessions) {
          const dur = 1800;
          const startT = performance.now();
          function tickS(now) {
            const p = Math.min((now - startT) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            sessions.textContent = (e * 1.2).toFixed(1);
            if (p < 1) requestAnimationFrame(tickS);
          }
          requestAnimationFrame(tickS);
        }
        if (prs) {
          const dur = 1700;
          const startT = performance.now();
          function tickP(now) {
            const p = Math.min((now - startT) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            prs.textContent = Math.round(e * 847);
            if (p < 1) requestAnimationFrame(tickP);
          }
          requestAnimationFrame(tickP);
        }
      }, 800);
    }
    heroCounters();

    // ── FAQ toggle ─────────────────────────────────────────────────
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
        });

        // Open clicked if it was closed
        if (!isOpen) item.classList.add('open');
      });
    });

    // ── CTA form submit ────────────────────────────────────────────
    function handleCtaSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.btn-cta-submit');
      const originalContent = btn.innerHTML;
      btn.innerHTML = '<iconify-icon icon="lucide:check" noobserver></iconify-icon><span>You\'re in. Check your email.</span>';
      btn.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';
      setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.style.background = '';
        e.target.reset();
      }, 4000);
    }

    // ── Glitch on CTA headline hover ───────────────────────────────
    const ctaHeadline = document.querySelector('.cta-headline');
    if (ctaHeadline) {
      ctaHeadline.addEventListener('mouseenter', () => {
        ctaHeadline.style.animation = 'none';
        void ctaHeadline.offsetWidth; // reflow
      });
    }

    // ── Hero WebGL ambient background ──────────────────────────
    (function() {
      const canvas = document.getElementById('hero-webgl');
      if (!canvas) return;
      const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
      if (!gl) return;

      function resize() {
        const dpr = Math.min(window.devicePixelRatio, 1.5);
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      resize();
      window.addEventListener('resize', resize);

      const vsrc = `attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0,1);}`;
      const fsrc = `
        precision mediump float;
        uniform float u_time;
        uniform vec2 u_res;

        // Simplex-style noise
        vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
        vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
        vec3 permute(vec3 x){return mod289((x*34.+1.)*x);}
        float snoise(vec2 v){
          const vec4 C=vec4(.211324865,.366025404,-.577350269,.024390244);
          vec2 i=floor(v+dot(v,C.yy)),x0=v-i+dot(i,C.xx),i1;
          i1=(x0.x>x0.y)?vec2(1,0):vec2(0,1);
          vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;
          i=mod289(i);
          vec3 p=permute(permute(i.y+vec3(0,i1.y,1.))+i.x+vec3(0,i1.x,1.));
          vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
          m=m*m;m=m*m;
          vec3 x=2.*fract(p*C.www)-1.,h=abs(x)-.5,ox=floor(x+.5),a0=x-ox;
          m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
          vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
          return 130.*dot(m,g);
        }

        void main(){
          vec2 uv=gl_FragCoord.xy/u_res;
          float t=u_time*0.08;

          // Layered noise for organic flow
          float n1=snoise(uv*1.8+vec2(t*0.7,t*0.5))*0.5+0.5;
          float n2=snoise(uv*3.2+vec2(-t*0.4,t*0.8))*0.5+0.5;
          float n3=snoise(uv*0.9+vec2(t*0.3,-t*0.6))*0.5+0.5;

          // Warm orange/amber palette
          vec3 c1=vec3(0.976,0.451,0.086); // orange
          vec3 c2=vec3(0.918,0.345,0.047); // deep orange
          vec3 c3=vec3(0.992,0.729,0.455); // peach

          vec3 col=mix(c1,c2,n1);
          col=mix(col,c3,n2*0.4);

          // Concentrated glow regions
          float glow1=smoothstep(0.6,1.0,n1*n3);
          float glow2=smoothstep(0.55,0.95,n2*n1);

          // Radial vignette — keep edges dark, center subtly lit
          float vig=1.0-smoothstep(0.2,0.85,length(uv-vec2(0.6,0.4)));

          float alpha=(glow1*0.12+glow2*0.08)*vig;

          gl_FragColor=vec4(col*alpha,alpha);
        }
      `;

      function compile(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      }
      const prog = gl.createProgram();
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsrc));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsrc));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(prog, 'a_pos');
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      const uTime = gl.getUniformLocation(prog, 'u_time');
      const uRes = gl.getUniformLocation(prog, 'u_res');

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      function render(t) {
        gl.uniform1f(uTime, t * 0.001);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
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
      

<nav id="main-nav">
<a className="nav-logo" href="#">
<span className="logo-text">FORGE</span>
</a>
<div className="nav-links">
<a href="#programs">Programs</a>
<a href="#methodology">Methodology</a>
<a href="#results">Results</a>
<a href="#community">Community</a>
<a href="#membership">Membership</a>
</div>
<div className="nav-cta">
<a href="#faq">FAQ</a>
<a className="btn-nav" href="#cta">Start Free Trial</a>
</div>
<button aria-label="Toggle menu" className="hamburger" id="hamburger">
<span></span>
<span></span>
<span></span>
</button>
</nav>

<div className="mobile-menu" id="mobile-menu">
<a className="mobile-link" href="#programs">Programs</a>
<a className="mobile-link" href="#methodology">Methodology</a>
<a className="mobile-link" href="#results">Results</a>
<a className="mobile-link" href="#community">Community</a>
<a className="mobile-link" href="#membership">Membership</a>
<a className="mobile-link" href="#cta">Start Free Trial</a>
</div>

<section id="hero">
<canvas id="hero-webgl"></canvas>
<div className="hero-mesh"></div>
<div className="hero-grid-lines"></div>
<div className="hero-accent-line"></div>

<div className="hero-float-metrics">
<div className="hero-metric">
<div className="hero-metric-icon"><iconify-icon icon="lucide:flame" noobserver=""></iconify-icon></div>
<div>
<div className="hero-metric-label">Active Streak</div>
<div className="hero-metric-value"><span>147</span> days</div>
</div>
</div>
<div className="hero-metric">
<div className="hero-metric-icon"><iconify-icon icon="lucide:heart-pulse" noobserver=""></iconify-icon></div>
<div>
<div className="hero-metric-label">Recovery Score</div>
<div className="hero-metric-value"><span>94</span>/100</div>
</div>
</div>
<div className="hero-metric">
<div className="hero-metric-icon"><iconify-icon icon="lucide:trophy" noobserver=""></iconify-icon></div>
<div>
<div className="hero-metric-label">PRs This Month</div>
<div className="hero-metric-value"><span>12</span> new</div>
</div>
</div>
</div>
<div className="hero-split">

<div className="hero-left">
<h1 className="hero-headline">
<span className="line-1">Forge</span>
<span className="line-2">Your</span>
<span className="line-3">Limits</span>
</h1>
<div className="hero-desc reveal">
<p>
            Precision programming meets elite performance science.
            Built for athletes who refuse to accept ordinary results.
          </p>
<div className="hero-actions">
<a className="btn-hero-primary" href="#cta">
<span className="btn-text glitch-text">Begin Training</span>
<iconify-icon icon="lucide:arrow-right" noobserver=""></iconify-icon>
</a>
<a className="btn-hero-ghost" href="#programs">
<iconify-icon icon="lucide:play" noobserver=""></iconify-icon>
<span>Explore Programs</span>
</a>
</div>
</div>
</div>
</div>

<div className="hero-right">
<img alt="Athlete training with intense focus" loading="eager" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hero-hud">
<div className="hud-item">
<div className="hud-dot"></div>
<div>
<div className="hud-item-label">Athletes</div>
<div className="hud-item-value"><span id="stat-members">0</span><span>K+</span></div>
</div>
</div>
<div className="hud-separator"></div>
<div className="hud-item">
<div>
<div className="hud-item-label">Sessions</div>
<div className="hud-item-value"><span id="stat-sessions">0</span><span>M</span></div>
</div>
</div>
<div className="hud-separator"></div>
<div className="hud-item">
<div>
<div className="hud-item-label">PRs Broken</div>
<div className="hud-item-value"><span id="stat-prs">0</span><span>K+</span></div>
</div>
</div>
</div>
</section>

<section id="programs">
<div className="programs-header stagger-up">
<div className="reveal-child">
<span className="section-label">Training Systems</span>
<h2>Four paths.<br/><em className="text-grad" style={{fontStyle: 'normal'}}>One goal.</em></h2>
</div>
<p className="reveal-child">
        Every program is precision-designed for your specific adaptation target.
        Choose your discipline. Own the process.
      </p>
</div>
<div className="program-cards">

<div className="program-card reveal-left">
<div className="program-card-img">
<img alt="" loading="lazy" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&amp;q=70&amp;auto=format&amp;fit=crop"/>
</div>
<div className="program-card-left prog-bg-diagonal">
<div className="prog-num">01</div>
<div className="prog-name">Foundry</div>
<div className="prog-badge">
<iconify-icon icon="lucide:dumbbell" noobserver=""></iconify-icon>
            Strength
          </div>
</div>
<div className="program-card-right">
<p className="prog-desc">
            The foundation of everything. A 16-week progressive strength protocol built around compound movements, evidence-based volume, and systematic load progression. Forge the base. Build the engine.
          </p>
<div className="prog-meta">
<div className="prog-meta-item">
<iconify-icon icon="lucide:clock" noobserver=""></iconify-icon>
<span>16 weeks</span>
</div>
<div className="prog-meta-item">
<iconify-icon icon="lucide:calendar" noobserver=""></iconify-icon>
<span>4x / week</span>
</div>
</div>
<div className="intensity-label">
<div className="intensity-bar"><div className="intensity-fill" data-width="85%"></div></div>
<span>Intensity: High</span>
</div>
</div>
</div>

<div className="program-card reveal-right">
<div className="program-card-img">
<img alt="" loading="lazy" src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="program-card-left prog-bg-dots">
<div className="prog-num">02</div>
<div className="prog-name">Ignite</div>
<div className="prog-badge">
<iconify-icon icon="lucide:zap" noobserver=""></iconify-icon>
            HIIT
          </div>
</div>
<div className="program-card-right">
<p className="prog-desc">
            Maximum output in minimum time. High-intensity interval protocols engineered to torch calories, spike VO2 max, and trigger EPOC for 48-hour afterburn. Fast, brutal, effective.
          </p>
<div className="prog-meta">
<div className="prog-meta-item">
<iconify-icon icon="lucide:clock" noobserver=""></iconify-icon>
<span>8 weeks</span>
</div>
<div className="prog-meta-item">
<iconify-icon icon="lucide:calendar" noobserver=""></iconify-icon>
<span>5x / week</span>
</div>
</div>
<div className="intensity-label">
<div className="intensity-bar"><div className="intensity-fill" data-width="100%"></div></div>
<span>Intensity: Maximum</span>
</div>
</div>
</div>

<div className="program-card reveal-left">
<div className="program-card-img">
<img alt="" loading="lazy" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&amp;q=70&amp;auto=format&amp;fit=crop"/>
</div>
<div className="program-card-left prog-bg-cross">
<div className="prog-num">03</div>
<div className="prog-name">Forge Flow</div>
<div className="prog-badge">
<iconify-icon icon="lucide:wind" noobserver=""></iconify-icon>
            Mobility
          </div>
</div>
<div className="program-card-right">
<p className="prog-desc">
            The overlooked edge. Systematic mobility, fascial release, and joint integrity work that unlocks range of motion, eliminates compensation patterns, and makes every other program more effective.
          </p>
<div className="prog-meta">
<div className="prog-meta-item">
<iconify-icon icon="lucide:clock" noobserver=""></iconify-icon>
<span>12 weeks</span>
</div>
<div className="prog-meta-item">
<iconify-icon icon="lucide:calendar" noobserver=""></iconify-icon>
<span>6x / week</span>
</div>
</div>
<div className="intensity-label">
<div className="intensity-bar"><div className="intensity-fill" data-width="55%"></div></div>
<span>Intensity: Medium</span>
</div>
</div>
</div>

<div className="program-card reveal-right">
<div className="program-card-img">
<img alt="" loading="lazy" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&amp;q=70&amp;auto=format&amp;fit=crop"/>
</div>
<div className="program-card-left prog-bg-wave">
<div className="prog-num">04</div>
<div className="prog-name">Iron Mind</div>
<div className="prog-badge">
<iconify-icon icon="lucide:brain" noobserver=""></iconify-icon>
            Mental Performance
          </div>
</div>
<div className="program-card-right">
<p className="prog-desc">
            The final frontier of athletic performance. Breathwork, cognitive conditioning, visualization protocols, and stress inoculation. Because every PR is broken in the mind before the body follows.
          </p>
<div className="prog-meta">
<div className="prog-meta-item">
<iconify-icon icon="lucide:clock" noobserver=""></iconify-icon>
<span>10 weeks</span>
</div>
<div className="prog-meta-item">
<iconify-icon icon="lucide:calendar" noobserver=""></iconify-icon>
<span>Daily</span>
</div>
</div>
<div className="intensity-label">
<div className="intensity-bar"><div className="intensity-fill" data-width="70%"></div></div>
<span>Intensity: Focused</span>
</div>
</div>
</div>
</div>
</section>

<section id="methodology">
<div className="method-header">
<span className="section-label reveal">How We Build Athletes</span>
<h2 className="reveal">The Forge Framework</h2>
</div>
<div className="method-showcase reveal">
<img alt="Gym training environment" loading="lazy" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&amp;q=75&amp;auto=format&amp;fit=crop"/>
<div className="method-showcase-overlay">
<div className="method-showcase-stat">
<iconify-icon icon="lucide:microscope" noobserver=""></iconify-icon>
<span><strong>200+</strong> peer-reviewed studies referenced</span>
</div>
<div className="method-showcase-stat">
<iconify-icon icon="lucide:users" noobserver=""></iconify-icon>
<span><strong>12</strong> sport scientists on staff</span>
</div>
<div className="method-showcase-stat">
<iconify-icon icon="lucide:refresh-cw" noobserver=""></iconify-icon>
<span>Protocols updated <strong>quarterly</strong></span>
</div>
</div>
</div>
<div className="method-blocks">
<div className="method-block">
<div className="method-num reveal-left">01</div>
<div className="method-content reveal">
<h3>Science-Backed Programming</h3>
<p>
            Every session is built on peer-reviewed exercise science. Rep ranges, rest periods, volume landmarks, and intensity percentages are not guesswork — they are extracted from decades of performance research and validated through thousands of athlete outcomes. We don't follow trends. We follow data.
          </p>
<div className="method-tag">
<iconify-icon icon="lucide:flask-conical" noobserver=""></iconify-icon>
<span>Research-Validated Protocols</span>
</div>
</div>
</div>
<div className="method-block">
<div className="method-num reveal-left">02</div>
<div className="method-content reveal">
<h3>Progressive Overload Tracking</h3>
<p>
            Adaptation requires progressive stress. Our tracking system records every set, rep, and load — calculating weekly volume, intensity zones, and fatigue markers to ensure you're always training at the precise edge of your current capacity. Never too easy. Never overtrained. Always progressing.
          </p>
<div className="method-tag">
<iconify-icon icon="lucide:trending-up" noobserver=""></iconify-icon>
<span>Automated Load Progression</span>
</div>
</div>
</div>
<div className="method-block">
<div className="method-num reveal-left">03</div>
<div className="method-content reveal">
<h3>Recovery Intelligence</h3>
<p>
            You don't grow during training. You grow during recovery. Forge's Recovery Intelligence system monitors HRV trends, sleep quality scores, subjective readiness, and training load to prescribe optimal recovery windows. Deload weeks, active recovery sessions, and rest days are not optional — they are programmed with the same precision as your hardest workouts.
          </p>
<div className="method-tag">
<iconify-icon icon="lucide:activity" noobserver=""></iconify-icon>
<span>HRV-Informed Recovery Windows</span>
</div>
</div>
</div>
</div>
</section>

<section id="results">
<div className="results-header">
<span className="section-label reveal">Proof of Work</span>
<h2 className="reveal">The numbers behind<br/><em className="text-grad" style={{fontStyle: 'normal'}}>the grind</em></h2>
</div>
<div className="results-split">
<div className="stat-rows">
<div className="stat-row reveal" data-stat="">
<div className="stat-row-top">
<span className="stat-row-label">Average Strength Gain</span>
<span className="stat-row-value"><span className="stat-num counter" data-target="34">0</span>%</span>
</div>
<div className="stat-progress-track">
<div className="stat-progress-fill" data-width="34%"></div>
</div>
<span className="stat-row-sub">Measured across all Foundry participants, first 16-week cycle</span>
</div>
<div className="stat-row reveal" data-stat="">
<div className="stat-row-top">
<span className="stat-row-label">Member Retention Rate</span>
<span className="stat-row-value"><span className="stat-num counter" data-target="94">0</span>%</span>
</div>
<div className="stat-progress-track">
<div className="stat-progress-fill" data-width="94%"></div>
</div>
<span className="stat-row-sub">12-month rolling average across all membership tiers</span>
</div>
<div className="stat-row reveal" data-stat="">
<div className="stat-row-top">
<span className="stat-row-label">Recovery Score Improvement</span>
<span className="stat-row-value"><span className="stat-num counter" data-target="89">0</span>/100</span>
</div>
<div className="stat-progress-track">
<div className="stat-progress-fill" data-width="89%"></div>
</div>
<span className="stat-row-sub">Average HRV-based recovery score after 8 weeks on platform</span>
</div>
<div className="stat-row reveal" data-stat="">
<div className="stat-row-top">
<span className="stat-row-label">Sessions Completed</span>
<span className="stat-row-value"><span className="stat-num counter" data-format="compact" data-target="1200000">0</span></span>
</div>
<div className="stat-progress-track">
<div className="stat-progress-fill" data-width="78%"></div>
</div>
<span className="stat-row-sub">Total workouts logged since platform launch</span>
</div>
<div className="stat-row reveal" data-stat="">
<div className="stat-row-top">
<span className="stat-row-label">Personal Records Broken</span>
<span className="stat-row-value"><span className="stat-num counter" data-format="compact" data-target="847000">0</span></span>
</div>
<div className="stat-progress-track">
<div className="stat-progress-fill" data-width="65%"></div>
</div>
<span className="stat-row-sub">Individual lifetime PRs set and logged by Forge members</span>
</div>
</div>
<div className="results-image-col reveal-right">
<img alt="Athlete tracking performance" loading="lazy" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="results-image-badge">
<iconify-icon icon="lucide:trending-up" noobserver=""></iconify-icon>
<div className="results-image-badge-text">
<strong>Real-time tracking</strong>
          Every rep, set, and load logged automatically
        </div>
</div>
</div>
</div>
</section>

<section id="community">
<div className="community-header">
<span className="section-label reveal">Member Stories</span>
<h2 className="reveal">Built different.<br/><em className="text-grad" style={{fontStyle: 'normal'}}>Proven results.</em></h2>
</div>
<div className="testimonial-stack">
<div className="testimonial-item reveal">
<p className="testimonial-quote">
          "After four years of plateauing, Foundry gave me a 47kg squat PR in twelve weeks.
          The progressive overload tracking removed every excuse I ever had.
          The only variable left was <em>showing up</em>."
        </p>
<div className="testimonial-author">
<div className="author-avatar">
<img alt="Marcus D." loading="lazy" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&amp;q=70&amp;auto=format&amp;fit=crop&amp;crop=face"/>
</div>
<div className="author-line"></div>
<div className="author-info">
<div className="author-name">Marcus D.</div>
<div className="author-detail">Competitive Powerlifter — Foundry Program, Cycle 3</div>
</div>
</div>
</div>
<div className="testimonial-item reveal">
<p className="testimonial-quote">
          "Iron Mind is the program nobody talks about but every athlete needs.
          My race anxiety dropped. My focus blocks doubled.
          I stopped <em>training</em> and started performing."
        </p>
<div className="testimonial-author">
<div className="author-avatar">
<img alt="Priya S." loading="lazy" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&amp;q=70&amp;auto=format&amp;fit=crop&amp;crop=face"/>
</div>
<div className="author-line"></div>
<div className="author-info">
<div className="author-name">Priya S.</div>
<div className="author-detail">Marathon Runner — Iron Mind + Forge Flow Stack</div>
</div>
</div>
</div>
<div className="testimonial-item reveal">
<p className="testimonial-quote">
          "The recovery intelligence feature alone is worth the price.
          I used to grind myself into the ground and wonder why I wasn't improving.
          Now I understand: <em>rest is programming</em>."
        </p>
<div className="testimonial-author">
<div className="author-avatar">
<img alt="Jordan T." loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;q=80&amp;auto=format&amp;fit=crop&amp;crop=face"/>
</div>
<div className="author-line"></div>
<div className="author-info">
<div className="author-name">Jordan T.</div>
<div className="author-detail">CrossFit Competitor — Elite Membership, 14 months</div>
</div>
</div>
</div>
</div>
</section>

<section id="membership">
<div className="membership-header">
<span className="section-label reveal">Membership Tiers</span>
<h2 className="reveal">Invest in your<br/><em className="text-grad" style={{fontStyle: 'normal'}}>performance</em></h2>
</div>
<div className="plans-wrapper reveal">

<div className="plan-col essential">
<div className="plan-name">Essential</div>
<div className="plan-price">
<span className="plan-price-num">$39</span>
<span className="plan-price-period">/ month</span>
</div>
<p className="plan-desc">Full access to our core programming library. Perfect for athletes ready to start building their foundation.</p>
<div className="plan-features">
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>All 4 core training programs</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Progress tracking dashboard</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Community forum access</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Exercise video library (400+ movements)</span>
</div>
<div className="plan-feature excluded">
<iconify-icon icon="lucide:minus" noobserver=""></iconify-icon>
<span>HRV &amp; recovery intelligence</span>
</div>
<div className="plan-feature excluded">
<iconify-icon icon="lucide:minus" noobserver=""></iconify-icon>
<span>1:1 coach check-ins</span>
</div>
<div className="plan-feature excluded">
<iconify-icon icon="lucide:minus" noobserver=""></iconify-icon>
<span>Custom program builder</span>
</div>
<div className="plan-feature excluded">
<iconify-icon icon="lucide:minus" noobserver=""></iconify-icon>
<span>Priority support</span>
</div>
</div>
<a className="btn-plan" href="#cta">Start Essential</a>
</div>
<div className="plan-divider">
<div className="plan-divider-line"></div>
</div>

<div className="plan-col elite">
<div className="plan-name">Elite</div>
<div className="plan-price">
<span className="plan-price-num">$89</span>
<span className="plan-price-period">/ month</span>
</div>
<p className="plan-desc">The complete performance ecosystem. Everything in Essential, plus the tools that separate good athletes from exceptional ones.</p>
<div className="plan-features">
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>All 4 core training programs</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Progress tracking dashboard</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Community forum access</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Exercise video library (400+ movements)</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>HRV &amp; recovery intelligence</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Monthly 1:1 coach check-ins</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Custom program builder</span>
</div>
<div className="plan-feature included">
<iconify-icon icon="lucide:check" noobserver=""></iconify-icon>
<span>Priority support + early access</span>
</div>
</div>
<a className="btn-plan primary" href="#cta">Start Elite</a>
</div>
</div>
<div className="membership-cta-banner reveal">
<div className="banner-text">
<h3>Not sure which plan is right for you?</h3>
<p>Start with a 14-day free trial. No credit card required. Cancel anytime.</p>
</div>
<a className="btn-banner" href="#cta">
<span className="btn-text">Claim Free Trial</span>
<iconify-icon icon="lucide:arrow-right" noobserver=""></iconify-icon>
</a>
</div>
</section>

<section id="faq">
<div className="faq-header">
<span className="section-label reveal">Questions Answered</span>
<h2 className="reveal">Everything you<br/><em className="text-grad" style={{fontStyle: 'normal'}}>need to know</em></h2>
</div>
<div className="faq-grid stagger-up">
<div className="faq-item reveal-child">
<div className="faq-question">
<span>What fitness level do I need to start?</span>
<div className="faq-icon"><iconify-icon icon="lucide:plus" noobserver=""></iconify-icon></div>
</div>
<div className="faq-answer">
<div className="faq-answer-inner">
            Every Forge program includes a Level Selector assessment during onboarding. Foundry, for example, has Beginner (0–1 yr training), Intermediate (1–3 yrs), and Advanced tracks. The programming adapts to your current numbers. If you can squat, press, and deadlift with basic form, you're ready for any program on this platform.
          </div>
</div>
</div>
<div className="faq-item reveal-child">
<div className="faq-question">
<span>Do I need a full gym, or can I train at home?</span>
<div className="faq-icon"><iconify-icon icon="lucide:plus" noobserver=""></iconify-icon></div>
</div>
<div className="faq-answer">
<div className="faq-answer-inner">
            Foundry and Ignite are designed for a fully-equipped gym with barbells, racks, and machines. Forge Flow and Iron Mind require only a mat and open floor space. The program library also includes home gym variants for Foundry that use dumbbells, bands, and bodyweight substitutions.
          </div>
</div>
</div>
<div className="faq-item reveal-child">
<div className="faq-question">
<span>Can I stack multiple programs simultaneously?</span>
<div className="faq-icon"><iconify-icon icon="lucide:plus" noobserver=""></iconify-icon></div>
</div>
<div className="faq-answer">
<div className="faq-answer-inner">
            Yes — and we encourage it. Our most popular combination is Foundry + Forge Flow, which pairs strength work with daily mobility sessions. Iron Mind is designed as a supplementary layer to any program. Stacking Foundry + Ignite is advanced and should only be attempted after completing at least one full cycle of each individually.
          </div>
</div>
</div>
<div className="faq-item reveal-child">
<div className="faq-question">
<span>How does the recovery intelligence system work?</span>
<div className="faq-icon"><iconify-icon icon="lucide:plus" noobserver=""></iconify-icon></div>
</div>
<div className="faq-answer">
<div className="faq-answer-inner">
            Recovery Intelligence aggregates your daily HRV reading (via compatible wearables or our manual check-in), sleep duration, subjective readiness score, and rolling 7-day training load. The algorithm outputs a daily readiness score and recommends whether to train at full intensity, reduce load by 20%, or take an active recovery day. This feature is exclusive to Elite membership.
          </div>
</div>
</div>
<div className="faq-item reveal-child">
<div className="faq-question">
<span>What wearables does Forge integrate with?</span>
<div className="faq-icon"><iconify-icon icon="lucide:plus" noobserver=""></iconify-icon></div>
</div>
<div className="faq-answer">
<div className="faq-answer-inner">
            Forge connects natively with Whoop, Garmin, Apple Health, and Google Fit. Oura Ring integration is in beta for Elite members. All data syncs automatically every morning and updates your recovery score before your first session of the day.
          </div>
</div>
</div>
<div className="faq-item reveal-child">
<div className="faq-question">
<span>What's your cancellation policy?</span>
<div className="faq-icon"><iconify-icon icon="lucide:plus" noobserver=""></iconify-icon></div>
</div>
<div className="faq-answer">
<div className="faq-answer-inner">
            Cancel any time, no questions asked, directly from your account settings. Your access continues until the end of your current billing period. We don't charge cancellation fees, and all your logged data — workouts, PRs, progress notes — remains accessible for 12 months after cancellation.
          </div>
</div>
</div>
</div>
</section>

<section id="cta">
<div className="cta-bg-image">
<img alt="" loading="lazy" src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1400&amp;q=70&amp;auto=format&amp;fit=crop"/>
</div>
<span className="section-label cta-label reveal">The First Rep Is Free</span>
<h2 className="cta-headline reveal">
<span className="line-a">Start</span>
<span className="line-b text-grad glitch-text">Forging</span>
</h2>
<form className="cta-form reveal" onsubmit="handleCtaSubmit(event)">
<input autocomplete="email" className="cta-input" placeholder="your@email.com" required="" type="email"/>
<button className="btn-cta-submit" type="submit">
<span>Start Free Trial</span>
<iconify-icon icon="lucide:arrow-right" noobserver=""></iconify-icon>
</button>
</form>
<p className="cta-fine reveal">14-day free trial. No credit card required. Cancel anytime.</p>
</section>

<footer>
<div className="footer-grid">
<div className="footer-brand">
<div className="footer-logo">
<span className="logo-text">FORGE</span>
</div>
<p>Premium athletic performance programming. Built for athletes who demand more from themselves.</p>
<div className="footer-social">
<a aria-label="Instagram" href="#">
<iconify-icon icon="lucide:instagram" noobserver=""></iconify-icon>
</a>
<a aria-label="Twitter" href="#">
<iconify-icon icon="lucide:twitter" noobserver=""></iconify-icon>
</a>
<a aria-label="YouTube" href="#">
<iconify-icon icon="lucide:youtube" noobserver=""></iconify-icon>
</a>
<a aria-label="LinkedIn" href="#">
<iconify-icon icon="lucide:linkedin" noobserver=""></iconify-icon>
</a>
</div>
</div>
<div className="footer-col">
<h4>Programs</h4>
<ul>
<li><a href="#programs">Foundry — Strength</a></li>
<li><a href="#programs">Ignite — HIIT</a></li>
<li><a href="#programs">Forge Flow — Mobility</a></li>
<li><a href="#programs">Iron Mind — Mental Performance</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Company</h4>
<ul>
<li><a href="#">About Forge</a></li>
<li><a href="#">Our Coaches</a></li>
<li><a href="#">Research Partners</a></li>
<li><a href="#">Press Kit</a></li>
<li><a href="#">Careers</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Support</h4>
<ul>
<li><a href="#faq">FAQ</a></li>
<li><a href="#">Help Center</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">Community</a></li>
<li><a href="#">System Status</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<span className="footer-copy">
        © <span id="footer-year"></span> Forge Performance, Inc. All rights reserved.
      </span>
<div className="footer-legal">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
<a href="#">Cookie Policy</a>
</div>
</div>
</footer>



    </>
  );
}
