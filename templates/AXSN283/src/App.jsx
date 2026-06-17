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



    "use strict";
    const {PI,cos,sin,abs,random,atan2}=Math,TAU=2*PI,rand=n=>n*random(),randIn=(min,max)=>rand(max-min)+min,fadeInOut=(t,m)=>{let h=.5*m;return abs((t+h)%m-h)/h},angle=(x1,y1,x2,y2)=>atan2(y2-y1,x2-x1),lerp=(n1,n2,s)=> (1-s)*n1+s*n2;
    const particleCount=300;let canvas,ctx,hover,mouse,origin,particles;
    function getParticle(){const p={get alpha(){return fadeInOut(this.life,this.ttl)},init(){const d=rand(TAU),s=randIn(20,40);this.life=0;this.ttl=randIn(100,300);this.size=randIn(2,8);this.hue=randIn(260,295);this.position=[origin[0]+rand(200)*cos(d),origin[1]+rand(200)*sin(d)];this.velocity=[cos(d)*s,sin(d)*s]},checkBounds(){const[x,y]=this.position;return x>canvas.a.width+this.size||x<-this.size||y>canvas.a.height+this.size||y<-this.size},update(){const[x,y]=this.position,[vx,vy]=this.velocity,mDir=angle(...mouse,...this.position);this.position[0]=lerp(x,x+vx,.05);this.position[1]=lerp(y,y+vy,.05);this.velocity[0]=lerp(vx,hover?cos(mDir)*30:0,hover?.1:.01);this.velocity[1]=lerp(vy,hover?sin(mDir)*30:0,hover?.1:.01);(this.checkBounds()||this.life++>this.ttl)&&this.init();return this},draw(){ctx.a.save();ctx.a.beginPath();ctx.a.fillStyle=`hsla(${this.hue},75%,65%,${this.alpha*.95})`;ctx.a.arc(...this.position,this.size,0,TAU);ctx.a.shadowColor=`hsla(${this.hue},90%,70%,0.22)`;ctx.a.shadowBlur=12;ctx.a.fill();ctx.a.closePath();ctx.a.restore();return this}};p.init();return p}
    function initParticles(){particles=[];for(let i=0;i<particleCount;i++)particles.push(getParticle())}
    function setup(){canvas={a:document.createElement("canvas"),b:document.createElement("canvas")};canvas.b.style="position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1;pointer-events:none;";document.body.appendChild(canvas.b);ctx={a:canvas.a.getContext("2d"),b:canvas.b.getContext("2d")};mouse=[innerWidth/2,innerHeight/2];origin=[];resize();initParticles();draw()}
    function resize(){canvas.a.width=canvas.b.width=innerWidth;canvas.a.height=canvas.b.height=innerHeight;origin[0]=.5*innerWidth;origin[1]=.5*innerHeight}
    function mouseHandler(e){if(e.type==="mousemove"){hover=!0;mouse[0]=e.clientX;mouse[1]=e.clientY}else hover=!1}
    function draw(){ctx.a.clearRect(0,0,canvas.a.width,canvas.a.height);ctx.b.clearRect(0,0,canvas.a.width,canvas.a.height);ctx.b.fillStyle="rgba(34,15,56,0.74)";ctx.b.fillRect(0,0,canvas.a.width,canvas.a.height);for(let i=0;i<particles.length;i++)particles[i].draw().update();for(let i=20;i>=1;i--){let amt=i*.05;ctx.b.save();ctx.b.filter=`blur(${amt*5}px)`;ctx.b.globalAlpha=1-amt;ctx.b.setTransform(1-amt,0,0,1-amt,origin[0]*amt,origin[1]*amt);ctx.b.translate(...origin);ctx.b.rotate(amt*8);ctx.b.translate(-origin[0],-origin[1]);ctx.b.drawImage(canvas.a,0,0,canvas.b.width,canvas.b.height);ctx.b.restore()}ctx.b.save();ctx.b.filter="blur(8px) brightness(210%)";ctx.b.drawImage(canvas.a,0,0);ctx.b.restore();ctx.b.save();ctx.b.globalCompositeOperation="lighter";ctx.b.drawImage(canvas.a,0,0);ctx.b.restore();requestAnimationFrame(draw)}
    addEventListener("load",setup);addEventListener("mousemove",mouseHandler);addEventListener("mouseout",mouseHandler);addEventListener("resize",resize);
  


    lucide.createIcons();
    const ctxChart=document.getElementById('revenueChart').getContext('2d');
    new Chart(ctxChart,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
    datasets:[{data:[23,27,32,36,41,48,52],borderColor:'#10b981',pointBackgroundColor:'#fff',borderWidth:3,tension:.35,fill:!1}]},
    options:{responsive:!0,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!1},y:{display:!1}}});
  
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
<div className="absolute -top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/40 via-cyan-500/30 to-indigo-700/40 blur-3xl"></div>
</div>

<header className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-6">
<nav aria-label="Primary" className="flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight" href="#">Nova<span className="text-slate-50">UI</span></a>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li className=""><a className="transition hover:text-emerald-300" href="#">Features</a></li>
<li><a className="transition hover:text-emerald-300" href="#">Pricing</a></li>
<li><a className="transition hover:text-emerald-300" href="#">Docs</a></li>
<li><a className="transition hover:text-emerald-300" href="#">Blog</a></li>
</ul>
<button aria-label="Get Started" className="hidden md:inline-flex gap-2 hover:bg-emerald-600 transition focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm font-semibold text-slate-950 bg-slate-50 rounded-xl pt-2 pr-4 pb-2 pl-4 shadow-md items-center">
        
        Get Started
      </button>
<button aria-label="Open menu" className="md:hidden rounded-md p-2 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-emerald-400">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>

<section className="mt-20 mb-16 text-center max-w-3xl mx-auto">
<h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
        Build <span className="text-sky-50">glass-morphic</span> dashboards in minutes
      </h1>
<p className="text-lg md:text-xl text-white/70 font-medium mb-8">
        A modular interface kit with real-time data, stunning effects and accessibility baked-in.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="hover:bg-emerald-600 transition focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm font-semibold text-sky-950 bg-sky-50 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-md">
          Try it Free
        </button>
<a className="text-sm font-medium text-white/80 hover:text-emerald-300 transition" href="#">View Docs →</a>
</div>
</section>
</header>

<main className="relative z-10 grid w-full max-w-7xl gap-8 sm:grid-cols-2 mx-auto px-6 pb-24">

<section aria-labelledby="revenue-title" className="flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 transition hover:-translate-y-1 hover:shadow-2xl shadow-lg">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 backdrop-blur-md ring-1 ring-white/20">
<svg className="h-5 w-5" data-lucide="line-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect height="12" rx="1" width="4" x="15" y="5"></rect><rect height="9" rx="1" width="4" x="7" y="8"></rect></svg>
</div>
<p className="text-sm font-medium text-white/70">Realtime Metrics</p>
</div>
<h2 className="mb-6 text-2xl md:text-3xl font-semibold leading-tight tracking-tight" id="revenue-title">
        Insight Metrics at a Glance
      </h2>
<canvas className="mb-6 h-36 w-full" id="revenueChart"></canvas>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/15 flex flex-col">
<p className="text-white/60 mb-1 font-medium text-sm">Active Users</p>
<p className="text-2xl font-semibold tracking-tight mb-2">8,450</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
<span>+18% since last month</span>
</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/15 flex flex-col">
<p className="text-white/60 mb-1 font-medium text-sm">Conversion Rate</p>
<p className="text-2xl font-semibold tracking-tight mb-2">5.7%</p>
<div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
<i className="h-3 w-3" data-lucide="arrow-down-right"></i>
<span>-2.1% since last week</span>
</div>
</div>
<div className="sm:col-span-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/15">
<p className="text-white/60 mb-3 font-medium text-sm">Traffic Sources</p>
<div className="flex justify-between text-sm text-white/70 font-medium mb-2">
<span>Organic Search</span><span>48%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4">
<div className="h-2 bg-emerald-500" style={{width: '48%'}}></div>
</div>
<div className="flex justify-between text-sm text-white/70 font-medium mb-2"><span>Paid Ads</span><span>29%</span></div>
<div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4">
<div className="h-2 bg-cyan-500" style={{width: '29%'}}></div>
</div>
<div className="flex justify-between text-sm text-white/70 font-medium mb-2"><span>Referrals</span><span>15%</span></div>
<div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4">
<div className="h-2 bg-indigo-500" style={{width: '15%'}}></div>
</div>
<div className="flex justify-between text-sm text-white/70 font-medium"><span>Direct</span><span>8%</span></div>
<div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-2 bg-sky-600" style={{width: '8%'}}></div>
</div>
</div>
</div>
</section>

<section aria-labelledby="support-title" className="flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 transition hover:-translate-y-1 hover:shadow-2xl shadow-lg max-h-[600px] overflow-y-auto">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 backdrop-blur-md ring-1 ring-white/20">
<svg className="h-5 w-5" data-lucide="headset" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<p className="text-sm font-medium text-white/70">Nova Assist</p>
</div>
<h2 className="mb-6 text-2xl md:text-3xl font-semibold leading-tight tracking-tight" id="support-title">Round-the-Clock Chat Support</h2>
<div className="flex flex-col gap-4 mb-6 bg-white/5 rounded-xl p-4 ring-1 ring-white/15 max-h-[300px] overflow-y-auto">
<div className="flex flex-col space-y-2">
<div className="self-start max-w-[75%] bg-white/10 rounded-xl px-4 py-2 text-white/90 font-medium text-sm leading-relaxed shadow-sm">Hello! How can I help you today?</div>
<div className="self-end max-w-[75%] bg-emerald-500/30 rounded-xl px-4 py-2 text-emerald-400 font-medium text-sm leading-relaxed shadow-sm">I need assistance with my account.</div>
<div className="self-start max-w-[75%] bg-white/10 rounded-xl px-4 py-2 text-white/90 font-medium text-sm leading-relaxed shadow-sm">Sure! What seems to be the problem?</div>
<div className="self-end max-w-[75%] bg-emerald-500/30 rounded-xl px-4 py-2 text-emerald-400 font-medium text-sm leading-relaxed shadow-sm">I'm unable to reset my password.</div>
<div className="self-start max-w-[75%] bg-white/10 rounded-xl px-4 py-2 text-white/90 font-medium text-sm leading-relaxed shadow-sm">I'll send you a password reset link shortly.</div>
<div className="self-end max-w-[75%] bg-emerald-500/30 rounded-xl px-4 py-2 text-emerald-400 font-medium text-sm leading-relaxed shadow-sm">Thank you! Also, can you help me update my billing information?</div>
<div className="self-start max-w-[75%] bg-white/10 rounded-xl px-4 py-2 text-white/90 font-medium text-sm leading-relaxed shadow-sm">Absolutely! You can update your billing details in the account settings section.</div>
<div className="self-end max-w-[75%] bg-emerald-500/30 rounded-xl px-4 py-2 text-emerald-400 font-medium text-sm leading-relaxed shadow-sm">Great, I see it now. Lastly, how do I enable two-factor authentication?</div>
<div className="self-start max-w-[75%] bg-white/10 rounded-xl px-4 py-2 text-white/90 font-medium text-sm leading-relaxed shadow-sm">Just navigate to security settings to enable it.</div>
</div>
</div>
<form className="flex items-center gap-3" onsubmit="event.preventDefault();">
<input aria-label="Type your message" className="flex-grow rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-4 py-2 text-sm font-medium text-white/80 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Type your message…"/>
<button aria-label="Send message" className="flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition focus:outline-none focus:ring-2 focus:ring-emerald-400" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
</button>
</form>
</section>

<section aria-labelledby="email-title" className="flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 transition hover:-translate-y-1 hover:shadow-2xl shadow-lg">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 backdrop-blur-md ring-1 ring-white/20">
<svg className="h-5 w-5" data-lucide="inbox" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<p className="text-sm font-medium text-white/70">GlassMailer</p>
</div>
<h2 className="mb-6 text-2xl md:text-3xl font-semibold leading-tight tracking-tight" id="email-title">Craft Stunning Newsletters Fast</h2>
<div className="space-y-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/15">
<div className="flex items-center justify-between text-xs text-white/60"><span>To: Entire Audience</span><i className="h-4 w-4" data-lucide="chevron-down"></i></div>
<p className="border-t border-white/10 pt-3 text-sm">Subject: A fresh look at what’s next 🚀</p>
<p className="border-t border-white/10 pt-3 text-sm"><span className="rounded-md bg-cyan-500/20 px-1.5 py-0.5 text-cyan-300">Product Pulse</span> is ready to reshape your workflow.</p>
<p className="border-t border-white/10 pt-3 text-sm leading-relaxed text-white/70">
          Our platform offers intuitive drag-and-drop newsletter creation, real-time preview and advanced audience segmentation tools to maximize engagement.
        </p>
<div className="flex items-center gap-2 border-t border-white/10 pt-3 text-xs">
<select aria-label="Font selector" className="w-full rounded-md bg-white/10 px-2 py-1 backdrop-blur focus:outline-none ring-1 ring-white/15">
<option>Font: Inter Regular</option>
<option>Font: Inter Medium</option>
<option>Font: Inter Semibold</option>
</select>
<div aria-label="Accent color" className="h-4 w-4 rounded bg-cyan-500 ring-1 ring-white/20"></div>
<button aria-label="Bold" className="rounded bg-white/10 p-1 hover:bg-white/20 ring-1 ring-white/15"><i className="h-3 w-3" data-lucide="bold"></i></button>
<button aria-label="Italic" className="rounded bg-white/10 p-1 hover:bg-white/20 ring-1 ring-white/15"><i className="h-3 w-3" data-lucide="italic"></i></button>
<button aria-label="Underline" className="rounded bg-white/10 p-1 hover:bg-white/20 ring-1 ring-white/15"><i className="h-3 w-3" data-lucide="underline"></i></button>
<button aria-label="Strikethrough" className="rounded bg-white/10 p-1 hover:bg-white/20 ring-1 ring-white/15"><i className="h-3 w-3" data-lucide="strikethrough"></i></button>
</div>
</div>
</section>

<section aria-labelledby="integrations-title" className="flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/20 transition hover:-translate-y-1 hover:shadow-2xl shadow-lg">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 backdrop-blur-md ring-1 ring-white/20">
<svg className="h-5 w-5" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<p className="text-sm font-medium text-white/70">Seamless Links</p>
</div>
<h2 className="mb-6 text-2xl md:text-3xl font-semibold leading-tight tracking-tight" id="integrations-title">Connect Your Favorite Tools</h2>

<div className="flex flex-wrap items-center gap-4 mb-6">

<div className="h-12 w-12 flex ring-1 ring-white/20 hover:scale-105 transition bg-sky-50/50 rounded-xl items-center justify-center">
<img alt="Slack logo" className="h-6 w-6" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg"/>
</div>

<div className="h-12 w-12 flex ring-1 ring-white/20 hover:scale-105 transition bg-white/50 rounded-xl items-center justify-center">
<img alt="Notion logo" className="h-6 w-6" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg"/>
</div>

<div className="h-12 w-12 flex ring-1 ring-white/20 hover:scale-105 transition bg-white/50 rounded-xl items-center justify-center">
<img alt="Figma logo" className="h-6 w-6" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg"/>
</div>

<div className="h-12 w-12 flex ring-1 ring-white/20 hover:scale-105 transition bg-sky-50/50 rounded-xl items-center justify-center">
<img alt="Zapier logo" className="h-6 w-6" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg"/>
</div>

<div className="h-12 w-12 flex ring-1 ring-white/20 hover:scale-105 transition bg-white/50 rounded-xl items-center justify-center">
<img alt="GitHub logo" className="h-6 w-6" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"/>
</div>
</div>
<p className="mb-6 text-white/70 font-medium text-sm leading-relaxed max-w-prose">
        Integrate popular applications to streamline your workflow with seamless connectivity.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/15">
<i className="h-6 w-6 text-emerald-400 flex-shrink-0" data-lucide="check-circle"></i>
<span className="text-white font-medium text-sm">Instant Setup</span>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/15">
<i className="h-6 w-6 text-sky-500 flex-shrink-0" data-lucide="shield-check"></i>
<span className="text-white font-medium text-sm">Secure Connections</span>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/15">
<i className="h-6 w-6 text-cyan-400 flex-shrink-0" data-lucide="refresh-cw"></i>
<span className="text-white font-medium text-sm">Automatic Sync</span>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/15">
<i className="h-6 w-6 text-indigo-400 flex-shrink-0" data-lucide="monitor"></i>
<span className="text-white font-medium text-sm">Real-time Updates</span>
</div>
</div>
</section>
</main>







<canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas><canvas height="923" style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '1', pointerEvents: 'none'}} width="1237"></canvas>
    </>
  );
}
