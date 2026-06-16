import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{
  if(window.parent&&window.parent!==window){
    window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";
    window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000";
  }
}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            var integrations = ['Kubernetes','Prometheus','Kafka','AWS','GCP','Datadog','Grafana','PagerDuty','Slack','GitHub','Terraform','Helm'];
          


!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();



// ─────────────────────────────────────────
// DYNAMIC YEAR
// ─────────────────────────────────────────
(function(){
  var y = document.getElementById('footerYear');
  if(y) y.textContent = new Date().getFullYear();
})();

// ─────────────────────────────────────────
// NAV SCROLL STATE + MOBILE TOGGLE
// ─────────────────────────────────────────
(function(){
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('.nav__links');
  var cta = document.querySelector('.nav__cta');
  window.addEventListener('scroll',function(){
    nav.classList.toggle('scrolled', window.scrollY > 60);
  },{passive:true});
  if(toggle){
    toggle.addEventListener('click',function(){
      var open = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close menu on link click
    if(links) links.addEventListener('click',function(e){
      if(e.target.classList.contains('nav__link')){
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }
})();

// ─────────────────────────────────────────
// NOISE/GRAIN TEXTURE GENERATOR
// ─────────────────────────────────────────
(function(){
  var size = 128;
  var c = document.createElement('canvas');
  c.width = size; c.height = size;
  var ctx = c.getContext('2d');
  var img = ctx.createImageData(size, size);
  for (var i = 0; i < img.data.length; i += 4) {
    var v = Math.random() * 255 | 0;
    img.data[i] = v;
    img.data[i+1] = v;
    img.data[i+2] = v;
    img.data[i+3] = 120;
  }
  ctx.putImageData(img, 0, 0);
  document.documentElement.style.setProperty('--noise-url', 'url(' + c.toDataURL('image/png') + ')');
})();

// ─────────────────────────────────────────
// SCROLL REVEAL — IntersectionObserver (Aura.build compatible)
// Observes: .reveal, .reveal-scale, .reveal-left, .reveal-right, .stagger-*
// Adds .visible class on viewport entry (once)
// Stagger children need .reveal-child marker (aura catches [class*="reveal"])
// ─────────────────────────────────────────
(function(){
  var sel = '.reveal,.reveal-scale,.reveal-left,.reveal-right,.stagger-up,.stagger-scale,.stagger-left';
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll(sel).forEach(function(el){io.observe(el)});
})();

// ─────────────────────────────────────────
// WAVEFORM BARS
// ─────────────────────────────────────────
(function(){
  var wf = document.getElementById('waveform');
  if(!wf) return;
  var heights = [30,60,85,45,70,55,90,40,65,50,80,35,75,60,45,85,30,70,55,95,40,65,50,80];
  heights.forEach(function(h,i){
    var b = document.createElement('div');
    b.className = 'waveform__bar';
    b.style.height = h+'%';
    b.style.animationDelay = (i*0.08)+'s';
    wf.appendChild(b);
  });
})();

// ─────────────────────────────────────────
// GRID VISUAL — animated cells
// ─────────────────────────────────────────
(function(){
  var gv = document.getElementById('gridVisual');
  if(!gv) return;
  for(var i=0;i<36;i++){
    var c=document.createElement('div');
    c.className='grid-visual__cell';
    gv.appendChild(c);
  }
  function randomActivate(){
    var cells = gv.querySelectorAll('.grid-visual__cell');
    cells.forEach(function(c){ c.classList.remove('active'); });
    var count = Math.floor(Math.random()*8)+3;
    for(var i=0;i<count;i++){
      var idx = Math.floor(Math.random()*cells.length);
      cells[idx].classList.add('active');
    }
  }
  randomActivate();
  setInterval(randomActivate, 900);
})();

// ─────────────────────────────────────────
// INTEGRATION BADGES
// ─────────────────────────────────────────
(function(){
  var container = document.getElementById('intBadges');
  if(!container) return;
  var items = ['Kubernetes','Prometheus','Kafka','AWS CloudWatch','GCP Logging','Datadog','Grafana','PagerDuty','Slack','GitHub Actions','Terraform','Helm','OpenTelemetry','Jaeger','Zipkin','InfluxDB'];
  container.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';
  items.forEach(function(name){
    var b = document.createElement('span');
    b.textContent = name;
    b.style.cssText = 'padding:4px 12px;border-radius:100px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);font-size:13px;color:rgba(248,247,255,.55);transition:all .2s;cursor:default';
    b.addEventListener('mouseenter',function(){this.style.borderColor='rgba(99,102,241,.4)';this.style.color='rgba(248,247,255,.9)';this.style.background='rgba(99,102,241,.1)'});
    b.addEventListener('mouseleave',function(){this.style.borderColor='rgba(255,255,255,.08)';this.style.color='rgba(248,247,255,.55)';this.style.background='rgba(255,255,255,.04)'});
    container.appendChild(b);
  });
})();

// ─────────────────────────────────────────
// DASHBOARD CHART BARS
// ─────────────────────────────────────────
(function(){
  var db = document.getElementById('dashBars');
  if(!db) return;
  var heights = [45,62,78,55,82,70,90,65,75,50,88,60,72,45,85,68,92,55,78,65,80,70,88,60];
  heights.forEach(function(h,i){
    var b=document.createElement('div');
    b.className='dash__bar';
    b.style.height=h+'%';
    b.style.animationDelay=(i*0.04)+'s';
    db.appendChild(b);
  });
})();

// ─────────────────────────────────────────
// COUNTER ANIMATION
// ─────────────────────────────────────────
(function(){
  function animateCounter(el, target, duration){
    var start = 0, startTime = null;
    var isFloat = String(target).includes('.');
    function step(ts){
      if(!startTime) startTime = ts;
      var progress = Math.min((ts-startTime)/duration, 1);
      var ease = 1-Math.pow(1-progress,3);
      var val = start + (target-start)*ease;
      el.textContent = isFloat ? val.toFixed(2) : Math.floor(val);
      if(progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var el = e.target;
        var target = parseFloat(el.getAttribute('data-target') || el.getAttribute('data-count'));
        animateCounter(el, target, 1800);
        io.unobserve(el);
      }
    });
  },{threshold:0.5});
  document.querySelectorAll('.counter,[data-count]').forEach(function(el){io.observe(el)});
})();

// ─────────────────────────────────────────
// PRICING TOGGLE
// ─────────────────────────────────────────
(function(){
  var toggle = document.getElementById('billingToggle');
  var proPrice = document.getElementById('proPrice');
  if(!toggle||!proPrice) return;
  var annual = false;
  toggle.addEventListener('click',function(){
    annual = !annual;
    toggle.classList.toggle('active',annual);
    proPrice.textContent = annual ? '$71' : '$89';
  });
})();

// ─────────────────────────────────────────
// 3D CARD TILT
// ─────────────────────────────────────────
(function(){
  document.querySelectorAll('.feature-card,.pricing-card,.testimonial-card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(800px) rotateX('+(-y*6)+'deg) rotateY('+(x*6)+'deg) translateZ(4px)';
    });
    card.addEventListener('mouseleave',function(){
      card.style.transform = '';
    });
  });
})();

// ─────────────────────────────────────────
// CARD MOUSE GLOW (radial gradient follows cursor)
// ─────────────────────────────────────────
(function(){
  var selectors = [
    {sel:'.feature-card', cls:'feature-card__glow'},
    {sel:'.pricing-card', cls:'pricing-card__glow'},
    {sel:'.testimonial-card', cls:'testimonial-card__glow'}
  ];
  selectors.forEach(function(s){
    document.querySelectorAll(s.sel).forEach(function(card){
      var glow = document.createElement('div');
      glow.className = s.cls;
      card.insertBefore(glow, card.firstChild);
      card.addEventListener('mousemove', function(e){
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left;
        var y = e.clientY - r.top;
        glow.style.background = 'radial-gradient(500px circle at '+x+'px '+y+'px, rgba(99,102,241,.1), transparent 40%)';
      });
    });
  });
})();

// ─────────────────────────────────────────
// METRIC SPARKLINES
// ─────────────────────────────────────────
(function(){
  var sparkData = {
    spark1: [30,45,60,55,70,65,80,75,90,85,95,88,92],
    spark2: [80,75,65,70,55,60,45,50,35,40,30,28,25],
    spark3: [90,92,91,93,95,94,96,95,97,96,98,97,99],
    spark4: [20,28,35,42,50,48,58,65,72,70,80,85,95]
  };
  Object.keys(sparkData).forEach(function(id){
    var el = document.getElementById(id);
    if(!el) return;
    var data = sparkData[id];
    var max = Math.max.apply(null, data);
    data.forEach(function(v, i){
      var bar = document.createElement('div');
      bar.className = 'metric__spark-bar';
      bar.style.height = (v/max*100)+'%';
      bar.style.animationDelay = (i*0.06)+'s';
      if(i === data.length-1) bar.style.background = 'linear-gradient(to top,rgba(99,102,241,.5),rgba(165,180,252,.7))';
      el.appendChild(bar);
    });
  });
})();

// ─────────────────────────────────────────
// FLOATING PARTICLES
// ─────────────────────────────────────────
(function(){
  function createParticles(containerId, count){
    var el = document.getElementById(containerId);
    if(!el) return;
    for(var i=0;i<count;i++){
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.left = (Math.random()*100)+'%';
      p.style.top = (60+Math.random()*40)+'%';
      p.style.width = (1+Math.random()*2)+'px';
      p.style.height = p.style.width;
      p.style.animationDuration = (6+Math.random()*10)+'s';
      p.style.animationDelay = (Math.random()*8)+'s';
      if(Math.random()>.6) p.style.background = 'rgba(165,180,252,.3)';
      el.appendChild(p);
    }
  }
  createParticles('featureParticles', 20);
  createParticles('ctaParticles', 15);
})();

// ─────────────────────────────────────────
// MAGNETIC BUTTONS
// ─────────────────────────────────────────
(function(){
  document.querySelectorAll('.btn-primary,.btn-hero-primary,.btn-plan-primary').forEach(function(btn){
    btn.addEventListener('mousemove',function(e){
      var rect = btn.getBoundingClientRect();
      var x = (e.clientX - rect.left - rect.width/2) * 0.25;
      var y = (e.clientY - rect.top - rect.height/2) * 0.25;
      btn.style.transform = 'translate('+x+'px,'+y+'px)';
    });
    btn.addEventListener('mouseleave',function(){
      btn.style.transform = '';
    });
  });
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="noise-filter" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="glass-noise">
<feturbulence basefrequency="0.75" numoctaves="4" stitchtiles="stitch" type="fractalNoise"></feturbulence>
<fecolormatrix type="saturate" values="0"></fecolormatrix>
<feblend in="SourceGraphic" mode="overlay" result="blend"></feblend>
<fecomposite in="blend" in2="SourceGraphic" operator="in"></fecomposite>
</filter>
</defs>
</svg>

<nav className="nav" id="nav">
<div className="container">
<div className="nav__inner">
<a className="nav__logo" href="/home">
          Signalis
        </a>
<ul className="nav__links">
<li className=""><a className="nav__link" href="/features">Features</a></li>
<li className=""><a className="nav__link" href="/pricing">Pricing</a></li>
<li className=""><a className="nav__link" href="/about">About</a></li>
<li className=""><a className="nav__link" href="/blog">Blog</a></li>
<li className=""><a className="nav__link" href="/changelog">Changelog</a></li>
<li className=""><a className="nav__link" href="/contact">Contact</a></li>
</ul>
<div className="nav__cta">
<a className="btn btn-ghost" href="/login">Sign in</a>
<a className="btn btn-primary" href="/login#signup">
            Start Free
            <svg className="btn-icon" fill="none" viewbox="0 0 18 18">
<path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
<button aria-expanded="false" aria-label="Menu" className="nav__toggle" id="navToggle">
<span></span><span></span><span></span>
</button>
</div>
</div>
</nav>

<section className="hero" id="hero">

<div className="hero__bg">
<div data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="g3OxZNwRRGkpWf4W56SL" data-us-scale="1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></div>
</div>
<div className="hero__overlay"></div>

<div className="orb orb--1"></div>
<div className="orb orb--2"></div>
<div className="hero__content reveal visible">
<div className="hero__badge">
<div className="glow-dot"></div>
<span className="hero__badge-new">New</span>
      Real-time anomaly detection with AI →
    </div>
<h1 className="hero__title">
      Find the signal through<br/>
      the <em>noise</em> — before it's too late
    </h1>
<p className="hero__sub">
      Full-stack observability that thinks ahead. Spot failures before they cascade — and act in milliseconds.
    </p>
<div className="hero__actions">
<button className="btn-hero-primary">
        Start for free
        <svg fill="none" height="16" viewbox="0 0 16 16" width="16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="btn-hero-ghost">
        Watch demo
        <svg fill="none" height="16" viewbox="0 0 16 16" width="16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>

<div className="hero__stats reveal visible" data-delay="4">
<div className="hero__stat">
<div className="hero__stat-value" data-count="99.99">0</div>
<div className="hero__stat-label">Uptime SLA</div>
</div>
<div className="hero__stat">
<div className="hero__stat-value"><span data-count="4">0</span>ms</div>
<div className="hero__stat-label">P99 Latency</div>
</div>
<div className="hero__stat">
<div className="hero__stat-value"><span data-count="850">0</span>B+</div>
<div className="hero__stat-label">Events / day</div>
</div>
<div className="hero__stat">
<div className="hero__stat-value"><span data-count="12">0</span>K+</div>
<div className="hero__stat-label">Engineers trust us</div>
</div>
</div>
</section>

<div className="logos">
<div className="logos__label">Trusted by engineering teams at</div>
<div style={{overflow: 'hidden'}}>
<div className="logos__track" id="logoTrack">
<span className="logos__item">Vercel</span>
<span className="logos__item">Stripe</span>
<span className="logos__item">Linear</span>
<span className="logos__item">Notion</span>
<span className="logos__item">Figma</span>
<span className="logos__item">Planetscale</span>
<span className="logos__item">Supabase</span>
<span className="logos__item">Railway</span>
<span className="logos__item">Fly.io</span>
<span className="logos__item">Turso</span>
<span className="logos__item">Neon</span>
<span className="logos__item">Render</span>

<span className="logos__item">Vercel</span>
<span className="logos__item">Stripe</span>
<span className="logos__item">Linear</span>
<span className="logos__item">Notion</span>
<span className="logos__item">Figma</span>
<span className="logos__item">Planetscale</span>
<span className="logos__item">Supabase</span>
<span className="logos__item">Railway</span>
<span className="logos__item">Fly.io</span>
<span className="logos__item">Turso</span>
<span className="logos__item">Neon</span>
<span className="logos__item">Render</span>
</div>
</div>
</div>

<section className="features" id="features">
<div className="particles" id="featureParticles"><div className="particle" style={{left: '18.4968%', top: '78.7174%', width: '2.90455px', height: '2.90455px', animationDuration: '7.91686s', animationDelay: '1.89368s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '21.2885%', top: '88.4588%', width: '2.81026px', height: '2.81026px', animationDuration: '10.7176s', animationDelay: '5.46918s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '6.12441%', top: '60.0407%', width: '2.92996px', height: '2.92996px', animationDuration: '7.17214s', animationDelay: '2.27595s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '79.8546%', top: '79.3798%', width: '2.7992px', height: '2.7992px', animationDuration: '11.2832s', animationDelay: '1.14015s'}}></div><div className="particle" style={{left: '51.122%', top: '78.3632%', width: '1.64546px', height: '1.64546px', animationDuration: '10.6144s', animationDelay: '3.75408s'}}></div><div className="particle" style={{left: '96.4587%', top: '70.921%', width: '1.33744px', height: '1.33744px', animationDuration: '6.71226s', animationDelay: '1.44452s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '76.7353%', top: '75.939%', width: '1.92722px', height: '1.92722px', animationDuration: '6.62703s', animationDelay: '2.20327s'}}></div><div className="particle" style={{left: '73.2676%', top: '92.0893%', width: '1.06471px', height: '1.06471px', animationDuration: '15.1838s', animationDelay: '3.18936s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '23.9373%', top: '69.6014%', width: '2.40777px', height: '2.40777px', animationDuration: '9.54914s', animationDelay: '4.32889s'}}></div><div className="particle" style={{left: '8.9938%', top: '74.6875%', width: '1.33502px', height: '1.33502px', animationDuration: '15.851s', animationDelay: '7.73202s'}}></div><div className="particle" style={{left: '13.7332%', top: '88.0888%', width: '2.7662px', height: '2.7662px', animationDuration: '14.9492s', animationDelay: '5.55437s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '69.7324%', top: '62.2163%', width: '1.55187px', height: '1.55187px', animationDuration: '9.85246s', animationDelay: '6.21734s'}}></div><div className="particle" style={{left: '94.4415%', top: '99.4568%', width: '2.78035px', height: '2.78035px', animationDuration: '12.3229s', animationDelay: '7.55597s'}}></div><div className="particle" style={{left: '67.3171%', top: '77.6729%', width: '1.7286px', height: '1.7286px', animationDuration: '6.38719s', animationDelay: '1.04486s'}}></div><div className="particle" style={{left: '11.3203%', top: '62.7222%', width: '2.88331px', height: '2.88331px', animationDuration: '12.4849s', animationDelay: '4.8374s'}}></div><div className="particle" style={{left: '19.3022%', top: '93.4498%', width: '1.34645px', height: '1.34645px', animationDuration: '11.1085s', animationDelay: '7.78842s'}}></div><div className="particle" style={{left: '1.16618%', top: '76.8851%', width: '2.68773px', height: '2.68773px', animationDuration: '7.6741s', animationDelay: '7.34602s'}}></div><div className="particle" style={{left: '42.5397%', top: '94.5153%', width: '2.37485px', height: '2.37485px', animationDuration: '7.11052s', animationDelay: '1.61133s'}}></div><div className="particle" style={{left: '62.5535%', top: '89.9393%', width: '2.32989px', height: '2.32989px', animationDuration: '13.7328s', animationDelay: '3.66202s'}}></div><div className="particle" style={{left: '58.74%', top: '65.4106%', width: '1.25889px', height: '1.25889px', animationDuration: '11.8748s', animationDelay: '6.17545s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '69.2929%', top: '80.4751%', width: '1.04456px', height: '1.04456px', animationDuration: '7.47362s', animationDelay: '1.9639s'}}></div><div className="particle" style={{left: '81.4371%', top: '89.0083%', width: '2.8967px', height: '2.8967px', animationDuration: '7.93339s', animationDelay: '4.23178s'}}></div><div className="particle" style={{left: '8.54424%', top: '92.795%', width: '1.44052px', height: '1.44052px', animationDuration: '10.9996s', animationDelay: '6.55343s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '92.7389%', top: '73.7149%', width: '2.19818px', height: '2.19818px', animationDuration: '7.41411s', animationDelay: '5.43495s'}}></div><div className="particle" style={{left: '15.6808%', top: '76.3175%', width: '1.43332px', height: '1.43332px', animationDuration: '11.598s', animationDelay: '3.8844s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '8.87441%', top: '77.6434%', width: '2.4487px', height: '2.4487px', animationDuration: '10.8887s', animationDelay: '1.50959s'}}></div><div className="particle" style={{left: '6.27597%', top: '71.3839%', width: '1.73731px', height: '1.73731px', animationDuration: '15.3658s', animationDelay: '1.10693s'}}></div><div className="particle" style={{left: '31.2916%', top: '71.5094%', width: '2.78968px', height: '2.78968px', animationDuration: '14.3931s', animationDelay: '2.07086s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '37.0773%', top: '78.6538%', width: '2.63535px', height: '2.63535px', animationDuration: '6.17524s', animationDelay: '3.86643s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '15.4445%', top: '61.2182%', width: '2.22903px', height: '2.22903px', animationDuration: '13.2548s', animationDelay: '6.03225s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '23.3109%', top: '82.0984%', width: '1.04699px', height: '1.04699px', animationDuration: '6.61965s', animationDelay: '0.854919s'}}></div><div className="particle" style={{left: '7.37752%', top: '86.1525%', width: '2.63773px', height: '2.63773px', animationDuration: '7.74452s', animationDelay: '4.08748s'}}></div><div className="particle" style={{left: '82.8917%', top: '74.3303%', width: '1.90143px', height: '1.90143px', animationDuration: '8.49365s', animationDelay: '3.7497s'}}></div><div className="particle" style={{left: '55.5505%', top: '64.9364%', width: '1.92458px', height: '1.92458px', animationDuration: '12.2077s', animationDelay: '5.73259s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '19.0997%', top: '98.6712%', width: '2.9595px', height: '2.9595px', animationDuration: '15.9135s', animationDelay: '4.61104s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '21.0968%', top: '72.7277%', width: '1.83132px', height: '1.83132px', animationDuration: '10.2295s', animationDelay: '6.97463s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '47.5782%', top: '95.5599%', width: '2.07574px', height: '2.07574px', animationDuration: '9.58289s', animationDelay: '4.7628s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '50.6796%', top: '88.5814%', width: '2.90154px', height: '2.90154px', animationDuration: '9.79294s', animationDelay: '4.60027s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '88.2291%', top: '79.8544%', width: '1.1655px', height: '1.1655px', animationDuration: '9.24302s', animationDelay: '3.92575s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '60.6674%', top: '95.1038%', width: '1.52579px', height: '1.52579px', animationDuration: '12.9274s', animationDelay: '3.76583s'}}></div></div>
<div className="deco-grid deco-grid--dots" style={{width: '200px', height: '200px', top: '40px', right: '40px', borderRadius: '16px'}}></div>
<div className="deco-grid deco-grid--dots" style={{width: '140px', height: '140px', bottom: '60px', left: '20px', borderRadius: '12px'}}></div>
<div className="container">
<div className="features__header">
<div className="reveal">
<div className="section-tag"><span className="section-tag-dot"></span>Capabilities</div>
</div>
<h2 className="section-title text-gradient-h reveal" data-delay="1">
        Everything your stack<br/>tries to tell you
      </h2>
<p className="section-sub reveal" data-delay="2">
        One unified view of metrics, logs, traces, and events — correlated automatically so you never miss the signal in the noise.
      </p>
</div>
<div className="features__grid stagger-scale">

<div className="feature-card feature-card--wide reveal-child"><div className="feature-card__glow"></div><div className="feature-card__glow"></div>
<div className="feature-status"><span className="feature-status__dot"></span>847K evt/s</div>
<div className="feature-card__icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<div className="feature-card__title">Real-Time Signal Streaming</div>
<div className="feature-card__body">Ingest millions of events per second from any source — Kafka, Kinesis, HTTP, or our native SDKs. Zero-copy ingestion with sub-millisecond acknowledgement.</div>
<div className="feature-card__visual">
<div className="waveform" id="waveform">

<div className="waveform__bar" style={{height: '30%', animationDelay: '0s'}}></div><div className="waveform__bar" style={{height: '60%', animationDelay: '0.08s'}}></div><div className="waveform__bar" style={{height: '85%', animationDelay: '0.16s'}}></div><div className="waveform__bar" style={{height: '45%', animationDelay: '0.24s'}}></div><div className="waveform__bar" style={{height: '70%', animationDelay: '0.32s'}}></div><div className="waveform__bar" style={{height: '55%', animationDelay: '0.4s'}}></div><div className="waveform__bar" style={{height: '90%', animationDelay: '0.48s'}}></div><div className="waveform__bar" style={{height: '40%', animationDelay: '0.56s'}}></div><div className="waveform__bar" style={{height: '65%', animationDelay: '0.64s'}}></div><div className="waveform__bar" style={{height: '50%', animationDelay: '0.72s'}}></div><div className="waveform__bar" style={{height: '80%', animationDelay: '0.8s'}}></div><div className="waveform__bar" style={{height: '35%', animationDelay: '0.88s'}}></div><div className="waveform__bar" style={{height: '75%', animationDelay: '0.96s'}}></div><div className="waveform__bar" style={{height: '60%', animationDelay: '1.04s'}}></div><div className="waveform__bar" style={{height: '45%', animationDelay: '1.12s'}}></div><div className="waveform__bar" style={{height: '85%', animationDelay: '1.2s'}}></div><div className="waveform__bar" style={{height: '30%', animationDelay: '1.28s'}}></div><div className="waveform__bar" style={{height: '70%', animationDelay: '1.36s'}}></div><div className="waveform__bar" style={{height: '55%', animationDelay: '1.44s'}}></div><div className="waveform__bar" style={{height: '95%', animationDelay: '1.52s'}}></div><div className="waveform__bar" style={{height: '40%', animationDelay: '1.6s'}}></div><div className="waveform__bar" style={{height: '65%', animationDelay: '1.68s'}}></div><div className="waveform__bar" style={{height: '50%', animationDelay: '1.76s'}}></div><div className="waveform__bar" style={{height: '80%', animationDelay: '1.84s'}}></div><div className="waveform__bar" style={{height: '30%', animationDelay: '0s'}}></div><div className="waveform__bar" style={{height: '60%', animationDelay: '0.08s'}}></div><div className="waveform__bar" style={{height: '85%', animationDelay: '0.16s'}}></div><div className="waveform__bar" style={{height: '45%', animationDelay: '0.24s'}}></div><div className="waveform__bar" style={{height: '70%', animationDelay: '0.32s'}}></div><div className="waveform__bar" style={{height: '55%', animationDelay: '0.4s'}}></div><div className="waveform__bar" style={{height: '90%', animationDelay: '0.48s'}}></div><div className="waveform__bar" style={{height: '40%', animationDelay: '0.56s'}}></div><div className="waveform__bar" style={{height: '65%', animationDelay: '0.64s'}}></div><div className="waveform__bar" style={{height: '50%', animationDelay: '0.72s'}}></div><div className="waveform__bar" style={{height: '80%', animationDelay: '0.8s'}}></div><div className="waveform__bar" style={{height: '35%', animationDelay: '0.88s'}}></div><div className="waveform__bar" style={{height: '75%', animationDelay: '0.96s'}}></div><div className="waveform__bar" style={{height: '60%', animationDelay: '1.04s'}}></div><div className="waveform__bar" style={{height: '45%', animationDelay: '1.12s'}}></div><div className="waveform__bar" style={{height: '85%', animationDelay: '1.2s'}}></div><div className="waveform__bar" style={{height: '30%', animationDelay: '1.28s'}}></div><div className="waveform__bar" style={{height: '70%', animationDelay: '1.36s'}}></div><div className="waveform__bar" style={{height: '55%', animationDelay: '1.44s'}}></div><div className="waveform__bar" style={{height: '95%', animationDelay: '1.52s'}}></div><div className="waveform__bar" style={{height: '40%', animationDelay: '1.6s'}}></div><div className="waveform__bar" style={{height: '65%', animationDelay: '1.68s'}}></div><div className="waveform__bar" style={{height: '50%', animationDelay: '1.76s'}}></div><div className="waveform__bar" style={{height: '80%', animationDelay: '1.84s'}}></div></div>
<div className="terminal" style={{marginTop: '16px'}}>
<div className="terminal__bar">
<div className="terminal__dot terminal__dot--red"></div>
<div className="terminal__dot terminal__dot--yellow"></div>
<div className="terminal__dot terminal__dot--green"></div>
</div>
<div className="terminal__line"><span className="terminal__prompt">$</span><span className="terminal__cmd"> signalis ingest --stream production</span></div>
<div className="terminal__line terminal__out">✓ Connected to stream [production] · 847K events/s</div>
<div className="terminal__line terminal__out">✓ Anomaly model loaded · p99 latency: 2.1ms</div>
<div className="terminal__line terminal__out">⚡ Alert: CPU spike detected in api-gateway [3σ]</div>
<div className="terminal__line terminal__out">→ Root cause: upstream db connection pool exhausted</div>
</div>
</div>
</div>

<div className="feature-card feature-card--tall reveal-child"><div className="feature-card__glow"></div><div className="feature-card__glow"></div>
<div className="feature-status feature-status--warn"><span className="feature-status__dot"></span>3 anomalies</div>
<div className="feature-card__icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<div className="feature-card__title">AI Anomaly Detection</div>
<div className="feature-card__body">Adaptive ML models learn your baseline. Detect multi-variate anomalies across 1,000s of metrics with near-zero false positives.</div>
<div className="feature-card__visual" style={{marginTop: '20px', minHeight: '0'}}>
<div className="grid-visual" id="gridVisual" style={{height: '100%'}}><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell active"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell active"></div><div className="grid-visual__cell active"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell active"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell active"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell"></div><div className="grid-visual__cell active"></div><div className="grid-visual__cell"></div></div>
</div>
<div style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#FF5F57', flexShrink: '0'}}></span><span style={{fontSize: '13px', color: 'var(--muted)'}}>error-rate · payment-svc</span></div>
<span style={{fontSize: '11px', fontFamily: '\'Space Mono\',monospace', color: 'rgba(255,95,87,.7)'}}>4.8σ</span>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#FEBC2E', flexShrink: '0'}}></span><span style={{fontSize: '13px', color: 'var(--muted)'}}>cpu-usage · api-gateway</span></div>
<span style={{fontSize: '11px', fontFamily: '\'Space Mono\',monospace', color: 'rgba(254,188,46,.7)'}}>3.2σ</span>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#FEBC2E', flexShrink: '0'}}></span><span style={{fontSize: '13px', color: 'var(--muted)'}}>mem-alloc · worker-pool</span></div>
<span style={{fontSize: '11px', fontFamily: '\'Space Mono\',monospace', color: 'rgba(254,188,46,.7)'}}>2.7σ</span>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#28C840', flexShrink: '0'}}></span><span style={{fontSize: '13px', color: 'var(--muted)'}}>latency · db-replica</span></div>
<span style={{fontSize: '11px', fontFamily: '\'Space Mono\',monospace', color: 'rgba(40,200,64,.7)'}}>resolved</span>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{width: '6px', height: '6px', borderRadius: '50%', background: '#28C840', flexShrink: '0'}}></span><span style={{fontSize: '13px', color: 'var(--muted)'}}>throughput · ingest-pipe</span></div>
<span style={{fontSize: '11px', fontFamily: '\'Space Mono\',monospace', color: 'rgba(40,200,64,.7)'}}>resolved</span>
</div>
</div>

<div style={{marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,.06)'}}>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
<span style={{fontSize: '11px', color: 'var(--dim)', fontFamily: '\'Space Mono\',monospace'}}>Model confidence</span>
<span style={{fontSize: '11px', color: 'var(--accent)', fontFamily: '\'Space Mono\',monospace'}}>97.3%</span>
</div>
<div style={{height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,.06)', overflow: 'hidden'}}>
<div style={{width: '97.3%', height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg,var(--primary),var(--accent))'}}></div>
</div>
</div>
</div>

<div className="feature-card reveal-child"><div className="feature-card__glow"></div><div className="feature-card__glow"></div>
<div className="feature-status feature-status--info"><span className="feature-status__dot"></span>5 spans</div>
<div className="feature-card__icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="12" cy="18" r="3"></circle><path d="M6 9v3m0 0c0 3.314 2.686 6 6 6m-6-6h12m0 0V9m0 3c0 3.314-2.686 6-6 6"></path></svg>
</div>
<div className="feature-card__title">Distributed Tracing</div>
<div className="feature-card__body">End-to-end trace visualization across microservices. Pinpoint latency bottlenecks with flame graphs and critical path analysis.</div>
<div className="feature-card__visual" style={{marginTop: '20px'}}>
<div className="trace-diagram" id="traceDiagram">
<div className="trace-row"><span className="trace-label">api-gw</span><div className="trace-bar-wrap"><div className="trace-bar trace-bar--api"></div></div><span className="trace-time">142ms</span></div>
<div className="trace-row"><span className="trace-label">auth</span><div className="trace-bar-wrap"><div className="trace-bar trace-bar--auth"></div></div><span className="trace-time">23ms</span></div>
<div className="trace-row"><span className="trace-label">db-read</span><div className="trace-bar-wrap"><div className="trace-bar trace-bar--db"></div></div><span className="trace-time">67ms</span></div>
<div className="trace-row"><span className="trace-label">cache</span><div className="trace-bar-wrap"><div className="trace-bar trace-bar--cache"></div></div><span className="trace-time">4ms</span></div>
<div className="trace-row"><span className="trace-label">render</span><div className="trace-bar-wrap"><div className="trace-bar trace-bar--render"></div></div><span className="trace-time">38ms</span></div>
</div>
</div>
</div>

<div className="feature-card reveal-child"><div className="feature-card__glow"></div><div className="feature-card__glow"></div>
<div className="feature-status feature-status--warn"><span className="feature-status__dot"></span>Alert in ~18m</div>
<div className="feature-card__icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
</div>
<div className="feature-card__title">Predictive Alerting</div>
<div className="feature-card__body">Get notified before thresholds breach. Forecasting models predict issues 15–30 minutes ahead using historical signal patterns.</div>
<div className="feature-card__visual" style={{marginTop: '20px'}}>
<div className="forecast-chart">
<svg preserveaspectratio="none" viewbox="0 0 300 100">
<defs>
<lineargradient id="forecastGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(99,102,241,.25)"></stop>
<stop offset="100%" stop-color="rgba(99,102,241,0)"></stop>
</lineargradient>
</defs>

<line stroke="rgba(254,95,87,.2)" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="300" y1="25" y2="25"></line>
<text fill="rgba(254,95,87,.4)" fontFamily="Space Mono, monospace" fontSize="8" x="4" y="22">THRESHOLD</text>

<path className="forecast-area" d="M0,80 L30,75 60,70 90,65 120,55 150,50 180,42 180,100 0,100Z"></path>

<polyline className="forecast-line" points="0,80 30,75 60,70 90,65 120,55 150,50 180,42"></polyline>

<path className="forecast-zone" d="M180,42 L210,35 240,28 270,22 300,18 300,55 270,42 240,48 210,44 180,42Z"></path>

<polyline className="forecast-pred" points="180,42 210,35 240,28 270,22 300,18"></polyline>

<circle className="forecast-alert" cx="258" cy="25" r="0"></circle>
</svg>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', marginTop: '6px'}}>
<span style={{fontSize: '10px', fontFamily: '\'Space Mono\',monospace', color: 'var(--dim)'}}>-30m</span>
<span style={{fontSize: '10px', fontFamily: '\'Space Mono\',monospace', color: 'rgba(254,188,46,.7)'}}>breach ~18m</span>
<span style={{fontSize: '10px', fontFamily: '\'Space Mono\',monospace', color: 'var(--dim)'}}>+30m</span>
</div>
</div>
</div>

<div className="feature-card feature-card--full reveal-child"><div className="feature-card__glow"></div><div className="feature-card__glow"></div>
<div>
<div className="feature-card__icon">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="7" width="7" x="2" y="3"></rect><rect height="7" width="7" x="15" y="3"></rect><rect height="7" width="7" x="2" y="14"></rect><rect height="7" width="7" x="15" y="14"></rect></svg>
</div>
<div className="feature-card__title">240+ Native Integrations</div>
<div className="feature-card__body">Connect in minutes with Kubernetes, Prometheus, Grafana, PagerDuty, Slack, AWS, GCP, and every tool in your stack. No vendor lock-in.</div>
</div>
<div className="feature-card__visual" style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>



<div id="intBadges" style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Kubernetes</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Prometheus</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Kafka</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>AWS CloudWatch</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>GCP Logging</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Datadog</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Grafana</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>PagerDuty</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Slack</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>GitHub Actions</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Terraform</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Helm</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>OpenTelemetry</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Jaeger</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Zipkin</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>InfluxDB</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Kubernetes</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Prometheus</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Kafka</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>AWS CloudWatch</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>GCP Logging</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Datadog</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Grafana</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>PagerDuty</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Slack</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>GitHub Actions</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Terraform</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Helm</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>OpenTelemetry</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Jaeger</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>Zipkin</span><span style={{padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.04)', fontSize: '13px', color: 'rgba(248, 247, 255, 0.55)', transition: '0.2s', cursor: 'default'}}>InfluxDB</span></div>
</div>
</div>
</div>
</div>
</section>
<div className="section-sep"></div>

<section className="platform" id="platform">
<div className="container">
<div className="platform__grid">
<div>
<div className="reveal">
<div className="section-tag"><span className="section-tag-dot"></span>How it works</div>
</div>
<h2 className="section-title reveal" data-delay="1">
          From signal to<br/><span className="text-gradient">resolution in seconds</span>
</h2>
<p className="section-sub reveal" data-delay="2">
          Signalis collapses the gap between detection and action. Our engine correlates, ranks, and routes every alert to the right team automatically.
        </p>
<div className="platform__steps stagger-left">
<div className="platform__step reveal-child">
<div className="platform__step-num">01</div>
<div>
<div className="platform__step-title">Ingest everything</div>
<div className="platform__step-body">Send metrics, logs, and traces via our SDKs, OpenTelemetry, or any open standard. No agents required.</div>
<div className="platform__step-badge">OpenTelemetry native</div>
</div>
</div>
<div className="platform__step reveal-child">
<div className="platform__step-num">02</div>
<div>
<div className="platform__step-title">Correlate automatically</div>
<div className="platform__step-body">Our engine maps signals to services, deploys, and commits — surfacing root cause instantly.</div>
<div className="platform__step-badge">ML-powered</div>
</div>
</div>
<div className="platform__step reveal-child">
<div className="platform__step-num">03</div>
<div>
<div className="platform__step-title">Alert intelligently</div>
<div className="platform__step-body">AI-deduped alerts routed to the right on-call engineer with full context — no noise, no alert fatigue.</div>
<div className="platform__step-badge">Zero false positives</div>
</div>
</div>
<div className="platform__step reveal-child">
<div className="platform__step-num">04</div>
<div>
<div className="platform__step-title">Resolve &amp; learn</div>
<div className="platform__step-body">Incident timelines auto-generate postmortems. Your system gets smarter with every resolution.</div>
<div className="platform__step-badge">Auto-postmortem</div>
</div>
</div>
</div>
</div>

<div className="reveal-right" data-delay="2">
<div className="dashboard spin-border">
<div className="dash__topbar">
<div className="dash__dot" style={{background: '#FF5F57'}}></div>
<div className="dash__dot" style={{background: '#FEBC2E'}}></div>
<div className="dash__dot" style={{background: '#28C840'}}></div>
<span style={{marginLeft: '8px', fontFamily: '\'Space Mono\',monospace', fontSize: '12px', color: 'var(--dim)'}}>signalis · production</span>
<div className="glow-dot" style={{marginLeft: 'auto'}}></div>
<span style={{fontSize: '12px', color: 'var(--accent)', fontFamily: '\'Space Mono\',monospace', marginLeft: '6px'}}>LIVE</span>
</div>
<div className="dash__metrics">
<div className="dash__metric">
<div className="dash__metric-val text-gradient" style={{fontFamily: '\'Bricolage Grotesque\',sans-serif', fontSize: '22px', fontWeight: '800'}}>2.1ms</div>
<div className="dash__metric-label">P99 Latency</div>
</div>
<div className="dash__metric">
<div className="dash__metric-val" style={{fontFamily: '\'Bricolage Grotesque\',sans-serif', fontSize: '22px', fontWeight: '800', color: 'rgba(40,200,100,.9)'}}>99.98%</div>
<div className="dash__metric-label">Uptime</div>
</div>
<div className="dash__metric">
<div className="dash__metric-val" style={{fontFamily: '\'Bricolage Grotesque\',sans-serif', fontSize: '22px', fontWeight: '800', color: 'var(--accent)'}}>0</div>
<div className="dash__metric-label">Open P1s</div>
</div>
</div>
<div className="dash__chart">
<div style={{fontSize: '11px', color: 'var(--dim)', fontFamily: '\'Space Mono\',monospace', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em'}}>Request rate · 24h</div>
<div className="dash__chart-bars" id="dashBars"><div className="dash__bar" style={{height: '45%', animationDelay: '0s'}}></div><div className="dash__bar" style={{height: '62%', animationDelay: '0.04s'}}></div><div className="dash__bar" style={{height: '78%', animationDelay: '0.08s'}}></div><div className="dash__bar" style={{height: '55%', animationDelay: '0.12s'}}></div><div className="dash__bar" style={{height: '82%', animationDelay: '0.16s'}}></div><div className="dash__bar" style={{height: '70%', animationDelay: '0.2s'}}></div><div className="dash__bar" style={{height: '90%', animationDelay: '0.24s'}}></div><div className="dash__bar" style={{height: '65%', animationDelay: '0.28s'}}></div><div className="dash__bar" style={{height: '75%', animationDelay: '0.32s'}}></div><div className="dash__bar" style={{height: '50%', animationDelay: '0.36s'}}></div><div className="dash__bar" style={{height: '88%', animationDelay: '0.4s'}}></div><div className="dash__bar" style={{height: '60%', animationDelay: '0.44s'}}></div><div className="dash__bar" style={{height: '72%', animationDelay: '0.48s'}}></div><div className="dash__bar" style={{height: '45%', animationDelay: '0.52s'}}></div><div className="dash__bar" style={{height: '85%', animationDelay: '0.56s'}}></div><div className="dash__bar" style={{height: '68%', animationDelay: '0.6s'}}></div><div className="dash__bar" style={{height: '92%', animationDelay: '0.64s'}}></div><div className="dash__bar" style={{height: '55%', animationDelay: '0.68s'}}></div><div className="dash__bar" style={{height: '78%', animationDelay: '0.72s'}}></div><div className="dash__bar" style={{height: '65%', animationDelay: '0.76s'}}></div><div className="dash__bar" style={{height: '80%', animationDelay: '0.8s'}}></div><div className="dash__bar" style={{height: '70%', animationDelay: '0.84s'}}></div><div className="dash__bar" style={{height: '88%', animationDelay: '0.88s'}}></div><div className="dash__bar" style={{height: '60%', animationDelay: '0.92s'}}></div><div className="dash__bar" style={{height: '45%', animationDelay: '0s'}}></div><div className="dash__bar" style={{height: '62%', animationDelay: '0.04s'}}></div><div className="dash__bar" style={{height: '78%', animationDelay: '0.08s'}}></div><div className="dash__bar" style={{height: '55%', animationDelay: '0.12s'}}></div><div className="dash__bar" style={{height: '82%', animationDelay: '0.16s'}}></div><div className="dash__bar" style={{height: '70%', animationDelay: '0.2s'}}></div><div className="dash__bar" style={{height: '90%', animationDelay: '0.24s'}}></div><div className="dash__bar" style={{height: '65%', animationDelay: '0.28s'}}></div><div className="dash__bar" style={{height: '75%', animationDelay: '0.32s'}}></div><div className="dash__bar" style={{height: '50%', animationDelay: '0.36s'}}></div><div className="dash__bar" style={{height: '88%', animationDelay: '0.4s'}}></div><div className="dash__bar" style={{height: '60%', animationDelay: '0.44s'}}></div><div className="dash__bar" style={{height: '72%', animationDelay: '0.48s'}}></div><div className="dash__bar" style={{height: '45%', animationDelay: '0.52s'}}></div><div className="dash__bar" style={{height: '85%', animationDelay: '0.56s'}}></div><div className="dash__bar" style={{height: '68%', animationDelay: '0.6s'}}></div><div className="dash__bar" style={{height: '92%', animationDelay: '0.64s'}}></div><div className="dash__bar" style={{height: '55%', animationDelay: '0.68s'}}></div><div className="dash__bar" style={{height: '78%', animationDelay: '0.72s'}}></div><div className="dash__bar" style={{height: '65%', animationDelay: '0.76s'}}></div><div className="dash__bar" style={{height: '80%', animationDelay: '0.8s'}}></div><div className="dash__bar" style={{height: '70%', animationDelay: '0.84s'}}></div><div className="dash__bar" style={{height: '88%', animationDelay: '0.88s'}}></div><div className="dash__bar" style={{height: '60%', animationDelay: '0.92s'}}></div></div>
</div>
<div className="dash__alerts">
<div style={{fontSize: '11px', color: 'var(--dim)', fontFamily: '\'Space Mono\',monospace', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '.06em'}}>Recent signals</div>
<div className="dash__alert">
<div className="dash__alert-dot" style={{background: 'rgba(40,200,100,.9)'}}></div>
<span className="dash__alert-text">api-gateway · latency normalized</span>
<span className="dash__alert-time">2m ago</span>
</div>
<div className="dash__alert">
<div className="dash__alert-dot" style={{background: '#FEBC2E'}}></div>
<span className="dash__alert-text">db-replica · connection pool at 82%</span>
<span className="dash__alert-time">8m ago</span>
</div>
<div className="dash__alert">
<div className="dash__alert-dot" style={{background: 'rgba(99,102,241,.9)'}}></div>
<span className="dash__alert-text">worker-queue · throughput +340%</span>
<span className="dash__alert-time">14m ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="section-sep"></div>

<section className="metrics" id="metrics">
<div className="container">
<div className="metrics__grid stagger-up">
<div className="metric reveal-child">
<div className="metric__value"><span className="counter" data-target="850">0</span>B<span className="metric__suffix">+</span></div>
<div className="metric__label">Events processed daily</div>
<div className="metric__sub">across all customer workloads</div>
<div className="metric__sparkline" id="spark1"><div className="metric__spark-bar" style={{height: '31.5789%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '47.3684%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '63.1579%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '57.8947%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '73.6842%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '68.4211%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '84.2105%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '78.9474%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '94.7368%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '89.4737%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '92.6316%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '96.8421%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div><div className="metric__spark-bar" style={{height: '31.5789%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '47.3684%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '63.1579%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '57.8947%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '73.6842%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '68.4211%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '84.2105%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '78.9474%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '94.7368%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '89.4737%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '92.6316%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '96.8421%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div></div>
<div className="metric__trend metric__trend--up"><svg fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M1 7L5 3L9 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>+12% MoM</div>
</div>
<div className="metric reveal-child">
<div className="metric__value"><span className="counter" data-target="2">0</span>ms</div>
<div className="metric__label">Median detection time</div>
<div className="metric__sub">from event to alert</div>
<div className="metric__sparkline" id="spark2"><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '93.75%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '81.25%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '87.5%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '68.75%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '75%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '56.25%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '62.5%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '43.75%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '50%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '37.5%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '35%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '31.25%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '93.75%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '81.25%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '87.5%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '68.75%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '75%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '56.25%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '62.5%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '43.75%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '50%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '37.5%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '35%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '31.25%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div></div>
<div className="metric__trend metric__trend--up"><svg fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M1 3L5 7L9 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>-34% faster</div>
</div>
<div className="metric reveal-child">
<div className="metric__value"><span className="counter" data-target="99">0</span>.<span style={{WebkitTextFillColor: 'var(--accent)'}}>99</span>%</div>
<div className="metric__label">Platform availability</div>
<div className="metric__sub">12-month rolling average</div>
<div className="metric__sparkline" id="spark3"><div className="metric__spark-bar" style={{height: '90.9091%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '92.9293%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '91.9192%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '93.9394%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '95.9596%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '94.9495%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '96.9697%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '95.9596%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '97.9798%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '96.9697%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '98.9899%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '97.9798%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div><div className="metric__spark-bar" style={{height: '90.9091%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '92.9293%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '91.9192%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '93.9394%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '95.9596%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '94.9495%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '96.9697%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '95.9596%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '97.9798%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '96.9697%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '98.9899%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '97.9798%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div></div>
<div className="metric__trend metric__trend--up"><svg fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M1 7L5 3L9 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>99.99% last 30d</div>
</div>
<div className="metric reveal-child">
<div className="metric__value"><span className="counter" data-target="12">0</span>K+</div>
<div className="metric__label">Engineers on platform</div>
<div className="metric__sub">at 2,400+ companies</div>
<div className="metric__sparkline" id="spark4"><div className="metric__spark-bar" style={{height: '21.0526%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '29.4737%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '36.8421%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '44.2105%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '52.6316%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '50.5263%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '61.0526%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '68.4211%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '75.7895%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '73.6842%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '84.2105%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '89.4737%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div><div className="metric__spark-bar" style={{height: '21.0526%', animationDelay: '0s'}}></div><div className="metric__spark-bar" style={{height: '29.4737%', animationDelay: '0.06s'}}></div><div className="metric__spark-bar" style={{height: '36.8421%', animationDelay: '0.12s'}}></div><div className="metric__spark-bar" style={{height: '44.2105%', animationDelay: '0.18s'}}></div><div className="metric__spark-bar" style={{height: '52.6316%', animationDelay: '0.24s'}}></div><div className="metric__spark-bar" style={{height: '50.5263%', animationDelay: '0.3s'}}></div><div className="metric__spark-bar" style={{height: '61.0526%', animationDelay: '0.36s'}}></div><div className="metric__spark-bar" style={{height: '68.4211%', animationDelay: '0.42s'}}></div><div className="metric__spark-bar" style={{height: '75.7895%', animationDelay: '0.48s'}}></div><div className="metric__spark-bar" style={{height: '73.6842%', animationDelay: '0.54s'}}></div><div className="metric__spark-bar" style={{height: '84.2105%', animationDelay: '0.6s'}}></div><div className="metric__spark-bar" style={{height: '89.4737%', animationDelay: '0.66s'}}></div><div className="metric__spark-bar" style={{height: '100%', animationDelay: '0.72s', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.5), rgba(165, 180, 252, 0.7))'}}></div></div>
<div className="metric__trend metric__trend--up"><svg fill="none" height="10" viewbox="0 0 10 10" width="10"><path d="M1 7L5 3L9 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>+280 this week</div>
</div>
</div>
</div>
</section>
<div className="section-sep"></div>

<section className="pricing" id="pricing">
<div className="container">
<div className="pricing__header">
<div className="reveal">
<div className="section-tag"><span className="section-tag-dot"></span>Pricing</div>
</div>
<h2 className="section-title reveal" data-delay="1">
        Transparent, <span className="text-gradient">usage-based</span> pricing
      </h2>
<p className="section-sub reveal" data-delay="2">
        No surprises. Pay for what you use. Scale from startup to enterprise on the same platform.
      </p>
<div className="pricing__toggle reveal" data-delay="3">
<span>Monthly</span>
<div className="pricing__toggle-switch" id="billingToggle">
<div className="pricing__toggle-thumb"></div>
</div>
<span>Annual <span className="pricing__save">Save 20%</span></span>
</div>
</div>
<div className="pricing__cards stagger-scale">

<div className="pricing-card pricing-card--free reveal-child"><div className="pricing-card__glow"></div><div className="pricing-card__glow"></div>
<div className="pricing-card__topbar"></div>
<div className="pricing-card__name">Starter</div>
<div className="pricing-card__desc">For indie engineers and small projects just getting started.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount">$0</span>
<span className="pricing-card__period">/ month</span>
</div>
<div className="pricing-card__divider"></div>
<div className="pricing-card__features">
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            10B events / month
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            3 services
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            7-day data retention
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--no" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M6 12l6-6M12 12L6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<span style={{color: 'var(--dim)'}}>AI anomaly detection</span>
</div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--no" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M6 12l6-6M12 12L6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<span style={{color: 'var(--dim)'}}>SLA guarantees</span>
</div>
</div>
<button className="btn-plan btn-plan-ghost">Get started free</button>
</div>

<div className="pricing-card pricing-card--pro reveal-child"><div className="pricing-card__glow"></div><div className="pricing-card__glow"></div>
<div className="pricing-card__topbar"></div>
<div className="pricing-card__badge">Most Popular</div>
<div className="pricing-card__name">Pro</div>
<div className="pricing-card__desc">For growing teams who need AI-powered observability at scale.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount" id="proPrice">$89</span>
<span className="pricing-card__period">/ seat / mo</span>
</div>
<div className="pricing-card__divider"></div>
<div className="pricing-card__features">
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Unlimited events
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Unlimited services
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            90-day retention
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            AI anomaly detection
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Predictive alerts
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            99.99% SLA
          </div>
</div>
<button className="btn-plan btn-plan-primary">Start Pro trial</button>
</div>

<div className="pricing-card pricing-card--ent reveal-child"><div className="pricing-card__glow"></div><div className="pricing-card__glow"></div>
<div className="pricing-card__topbar"></div>
<div className="pricing-card__name">Enterprise</div>
<div className="pricing-card__desc">Custom infrastructure, dedicated support, and compliance.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount" style={{fontSize: '36px'}}>Custom</span>
</div>
<div className="pricing-card__divider"></div>
<div className="pricing-card__features">
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Everything in Pro
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Dedicated infra
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            SOC2 / HIPAA
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            24/7 dedicated support
          </div>
<div className="pricing-card__feature">
<svg className="pricing-card__check pricing-card__check--ok" fill="none" viewbox="0 0 18 18"><circle cx="9" cy="9" opacity="0.3" r="8" stroke="currentColor" strokeWidth="1.2"></circle><path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Custom SLA
          </div>
</div>
<button className="btn-plan btn-plan-ghost">Talk to sales</button>
</div>
</div>
</div>
</section>
<div className="section-sep"></div>

<section className="testimonials">
<div className="testimonials__header container">
<div className="reveal">
<div className="section-tag"><span className="section-tag-dot"></span>What teams say</div>
</div>
<h2 className="section-title reveal" data-delay="1">
      Trusted by <span className="text-gradient">on-call engineers</span><br/>at 2,400+ companies
    </h2>
</div>
<div style={{overflow: 'hidden', position: 'relative', padding: '20px 0'}}>
<div style={{position: 'absolute', top: '0', bottom: '0', left: '0', width: '120px', background: 'linear-gradient(to right,var(--bg),transparent)', zIndex: '2', pointerEvents: 'none'}}></div>
<div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '120px', background: 'linear-gradient(to left,var(--bg),transparent)', zIndex: '2', pointerEvents: 'none'}}></div>
<div className="testimonials__track" id="testimonialTrack">
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">Signalis cut our MTTR from 45 minutes to under 3. The AI root-cause analysis is genuinely magic — it spots patterns we'd never connect manually.</div>
<div className="testimonial-card__author">
<img alt="Sarah L." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Sarah L.</div><div className="testimonial-card__role">Staff SRE · Stripe</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">We migrated from Datadog in a weekend. Same coverage, 60% less cost, and the UX is miles ahead. Our on-call rotation actually enjoys using it now.</div>
<div className="testimonial-card__author">
<img alt="Marcus R." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Marcus R.</div><div className="testimonial-card__role">Platform Eng · Linear</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">The predictive alerts gave us a 20-minute heads-up before our biggest outage of the year. We fixed it silently. Customers never noticed.</div>
<div className="testimonial-card__author">
<img alt="Anika K." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Anika K.</div><div className="testimonial-card__role">VP Eng · Notion</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">I've evaluated every observability tool. Signalis is the first one that feels like it was built by engineers who actually do on-call. The signal-to-noise ratio is unmatched.</div>
<div className="testimonial-card__author">
<img alt="James P." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">James P.</div><div className="testimonial-card__role">Founding Eng · Vercel</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">OpenTelemetry support is first-class. We send data from 200+ microservices and the correlation engine just works. No config, no fiddling.</div>
<div className="testimonial-card__author">
<img alt="Tariq N." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Tariq N.</div><div className="testimonial-card__role">Infrastructure Lead · Railway</div></div>
</div>
</div>

<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">Signalis cut our MTTR from 45 minutes to under 3. The AI root-cause analysis is genuinely magic — it spots patterns we'd never connect manually.</div>
<div className="testimonial-card__author">
<img alt="Sarah L." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Sarah L.</div><div className="testimonial-card__role">Staff SRE · Stripe</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">We migrated from Datadog in a weekend. Same coverage, 60% less cost, and the UX is miles ahead. Our on-call rotation actually enjoys using it now.</div>
<div className="testimonial-card__author">
<img alt="Marcus R." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Marcus R.</div><div className="testimonial-card__role">Platform Eng · Linear</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">The predictive alerts gave us a 20-minute heads-up before our biggest outage of the year. We fixed it silently. Customers never noticed.</div>
<div className="testimonial-card__author">
<img alt="Anika K." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Anika K.</div><div className="testimonial-card__role">VP Eng · Notion</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">I've evaluated every observability tool. Signalis is the first one that feels like it was built by engineers who actually do on-call. The signal-to-noise ratio is unmatched.</div>
<div className="testimonial-card__author">
<img alt="James P." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">James P.</div><div className="testimonial-card__role">Founding Eng · Vercel</div></div>
</div>
</div>
<div className="testimonial-card"><div className="testimonial-card__glow"></div><div className="testimonial-card__glow"></div>
<div className="testimonial-stars"><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span><span className="testimonial-star">★</span></div>
<div className="testimonial-card__text">OpenTelemetry support is first-class. We send data from 200+ microservices and the correlation engine just works. No config, no fiddling.</div>
<div className="testimonial-card__author">
<img alt="Tariq N." className="testimonial-card__avatar" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=96&amp;h=96&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="testimonial-card__name">Tariq N.</div><div className="testimonial-card__role">Infrastructure Lead · Railway</div></div>
</div>
</div>
</div>
</div>
</section>
<div className="section-sep"></div>

<section className="cta-section">
<div className="container-sm">
<div className="cta-panel noise-glass reveal-scale">
<div className="cta-ring cta-ring--1"></div>
<div className="cta-ring cta-ring--2"></div>
<div className="cta-ring cta-ring--3"></div>
<div className="particles" id="ctaParticles"><div className="particle" style={{left: '11.7982%', top: '67.1659%', width: '1.06448px', height: '1.06448px', animationDuration: '15.6644s', animationDelay: '7.6398s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '71.0265%', top: '78.1054%', width: '1.81592px', height: '1.81592px', animationDuration: '13.5184s', animationDelay: '7.96767s'}}></div><div className="particle" style={{left: '67.6011%', top: '81.2039%', width: '1.1465px', height: '1.1465px', animationDuration: '15.7041s', animationDelay: '0.897708s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '92.2903%', top: '82.1347%', width: '2.61558px', height: '2.61558px', animationDuration: '13.425s', animationDelay: '2.01377s'}}></div><div className="particle" style={{left: '47.2258%', top: '99.7524%', width: '1.9246px', height: '1.9246px', animationDuration: '15.577s', animationDelay: '4.59124s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '42.1562%', top: '70.6917%', width: '2.69597px', height: '2.69597px', animationDuration: '8.78951s', animationDelay: '0.00236499s'}}></div><div className="particle" style={{left: '2.14425%', top: '96.7008%', width: '1.13448px', height: '1.13448px', animationDuration: '14.6083s', animationDelay: '7.90856s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '36.3607%', top: '86.4033%', width: '1.22894px', height: '1.22894px', animationDuration: '14.1967s', animationDelay: '7.97994s'}}></div><div className="particle" style={{left: '96.3359%', top: '78.1671%', width: '2.26061px', height: '2.26061px', animationDuration: '10.6917s', animationDelay: '3.99964s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '68.7662%', top: '75.4373%', width: '2.38803px', height: '2.38803px', animationDuration: '11.9064s', animationDelay: '2.40055s'}}></div><div className="particle" style={{left: '45.0473%', top: '71.5823%', width: '1.69996px', height: '1.69996px', animationDuration: '12.4736s', animationDelay: '1.34117s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '40.9395%', top: '77.2515%', width: '2.7171px', height: '2.7171px', animationDuration: '14.4148s', animationDelay: '6.04278s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '6.03952%', top: '62.0164%', width: '1.37209px', height: '1.37209px', animationDuration: '8.93667s', animationDelay: '7.25231s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '54.0687%', top: '91.1746%', width: '1.37227px', height: '1.37227px', animationDuration: '8.07722s', animationDelay: '0.913589s'}}></div><div className="particle" style={{left: '53.6165%', top: '72.2272%', width: '2.8082px', height: '2.8082px', animationDuration: '13.2277s', animationDelay: '2.31066s'}}></div><div className="particle" style={{left: '20.7875%', top: '63.9777%', width: '2.83816px', height: '2.83816px', animationDuration: '15.7765s', animationDelay: '3.42414s'}}></div><div className="particle" style={{left: '33.8909%', top: '99.3711%', width: '2.6942px', height: '2.6942px', animationDuration: '8.95822s', animationDelay: '7.7549s'}}></div><div className="particle" style={{left: '0.412127%', top: '72.11%', width: '1.48633px', height: '1.48633px', animationDuration: '14.7046s', animationDelay: '0.59577s'}}></div><div className="particle" style={{left: '19.505%', top: '93.5365%', width: '2.54186px', height: '2.54186px', animationDuration: '6.88364s', animationDelay: '4.99641s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '21.1115%', top: '96.6745%', width: '2.65636px', height: '2.65636px', animationDuration: '6.53081s', animationDelay: '5.85953s'}}></div><div className="particle" style={{left: '87.9056%', top: '94.7005%', width: '1.59085px', height: '1.59085px', animationDuration: '13.8758s', animationDelay: '5.31847s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '67.0872%', top: '94.6922%', width: '1.54075px', height: '1.54075px', animationDuration: '13.651s', animationDelay: '1.93718s'}}></div><div className="particle" style={{left: '10.4427%', top: '63.9701%', width: '2.14621px', height: '2.14621px', animationDuration: '13.8466s', animationDelay: '5.71987s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '10.9095%', top: '97.579%', width: '2.33195px', height: '2.33195px', animationDuration: '8.08409s', animationDelay: '6.8571s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '21.1484%', top: '95.5027%', width: '2.21995px', height: '2.21995px', animationDuration: '10.3534s', animationDelay: '6.84654s'}}></div><div className="particle" style={{left: '92.8995%', top: '94.4016%', width: '1.57419px', height: '1.57419px', animationDuration: '6.16303s', animationDelay: '0.275205s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '43.6265%', top: '87.265%', width: '1.13211px', height: '1.13211px', animationDuration: '11.3741s', animationDelay: '3.22886s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '51.9166%', top: '87.4474%', width: '2.30196px', height: '2.30196px', animationDuration: '8.97376s', animationDelay: '4.75806s'}}></div><div className="particle" style={{left: '22.7401%', top: '77.9606%', width: '2.57166px', height: '2.57166px', animationDuration: '14.7329s', animationDelay: '6.72088s', background: 'rgba(165, 180, 252, 0.3)'}}></div><div className="particle" style={{left: '61.1116%', top: '96.0172%', width: '2.60525px', height: '2.60525px', animationDuration: '7.2779s', animationDelay: '2.21723s'}}></div></div>
<h2 className="cta-panel__title">
        Your infrastructure is talking.<br/>
<span className="text-gradient">Start listening.</span>
</h2>
<p className="cta-panel__sub">Start free in minutes. No credit card. No agent install. Just clarity.</p>
<div className="cta-panel__actions">
<button className="btn btn-primary btn-lg">
          Start for free
          <svg className="btn-icon" fill="none" viewbox="0 0 18 18"><path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="btn btn-ghost btn-lg">Book a demo</button>
</div>
<div className="cta-panel__note">Free 14-day Pro trial included · No credit card required</div>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer__grid stagger-up">
<div className="footer__brand reveal-child">
<div className="footer__logo">
          Signalis
        </div>
<div className="footer__tagline">Full-stack observability for the teams who keep the internet running.</div>
<div className="footer__socials">
<a className="footer__social" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.204 2.25h6.717l4.258 5.626L18.244 2.25z"></path></svg>
</a>
<a className="footer__social" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a className="footer__social" href="#">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"></path></svg>
</a>
</div>
</div>
<div className="reveal-child">
<div className="footer__col-title">Product</div>
<ul className="footer__links">
<li><a className="footer__link" href="features.html">Features</a></li>
<li><a className="footer__link" href="features.html#integrations">Integrations</a></li>
<li><a className="footer__link" href="changelog.html">Changelog</a></li>
<li><a className="footer__link" href="#">Roadmap</a></li>
<li><a className="footer__link" href="#">Status</a></li>
</ul>
</div>
<div className="reveal-child">
<div className="footer__col-title">Company</div>
<ul className="footer__links">
<li><a className="footer__link" href="about.html">About</a></li>
<li><a className="footer__link" href="blog.html">Blog</a></li>
<li><a className="footer__link" href="#">Careers</a></li>
<li><a className="footer__link" href="#">Press</a></li>
<li><a className="footer__link" href="contact.html">Contact</a></li>
</ul>
</div>
<div className="reveal-child">
<div className="footer__col-title">Developers</div>
<ul className="footer__links">
<li><a className="footer__link" href="#">Documentation</a></li>
<li><a className="footer__link" href="#">API Reference</a></li>
<li><a className="footer__link" href="#">SDKs</a></li>
<li><a className="footer__link" href="#">Community</a></li>
<li><a className="footer__link" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="footer__bottom reveal">
<div className="footer__copy">© <span id="footerYear">2026</span> Signalis, Inc. All rights reserved.</div>
<div className="footer__status">
<div className="glow-dot" style={{width: '6px', height: '6px'}}></div>
        All systems operational
      </div>
</div>
</div>
</footer>




    </>
  );
}
