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



const navToggle=document.getElementById('navToggle');
const mobileNav=document.getElementById('mobileNav');
navToggle.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',!open);mobileNav.classList.toggle('hidden');navToggle.innerHTML='';navToggle.appendChild(lucide.createElement(open?'menu':'x',{class:'w-6 h-6'}));});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.add('hidden');navToggle.setAttribute('aria-expanded','false');navToggle.innerHTML='';navToggle.appendChild(lucide.createElement('menu',{class:'w-6 h-6'}));}));
lucide.createIcons();

class TxtType{constructor(el,toRotate,period){this.toRotate=toRotate;this.el=el;this.loopNum=0;this.period=parseInt(period,10)||2000;this.txt='';this.isDeleting=false;this.tick();}
tick(){const i=this.loopNum%this.toRotate.length;const fullTxt=this.toRotate[i];this.txt=this.isDeleting?fullTxt.substring(0,this.txt.length-1):fullTxt.substring(0,this.txt.length+1);this.el.innerHTML=this.txt;let delta=200-100*Math.random();if(this.isDeleting){delta/=2;}if(!this.isDeleting&&this.txt===fullTxt){delta=this.period;this.isDeleting=true;}else if(this.isDeleting&&this.txt===''){this.isDeleting=false;this.loopNum++;delta=500;}setTimeout(()=>this.tick(),delta);}}
window.addEventListener('load',()=>{document.querySelectorAll('.typewrite').forEach(el=>{new TxtType(el.querySelector('.wrap'),JSON.parse(el.dataset.type),el.dataset.period);});});

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
      

<div className="pointer-events-none absolute inset-x-0 top-0 h-40 -z-10" style={{background: `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1440 320%27%3E%3Cpath fill=%27%2337B5A9%27 fill-opacity=%270.10%27 d=%27M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,160C800,149,880,171,960,186.7C1040,203,1120,213,1200,213.3C1280,213,1360,203,1400,197.3L1440,192V0H0Z%27/%3E%3C/svg%3E') center/cover`}}></div>
<header className="relative z-10">
<nav className="max-w-7xl mx-auto flex items-center justify-between pt-6 pb-6 px-6 md:px-10 fade fade-1">

<a className="flex items-center space-x-2 font-semibold tracking-tight text-lg" href="#">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(55, 181, 169)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect className="" height="12" rx="2" width="18" x="3" y="10"></rect><path className="" d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
<span className="sr-only">EverAfter home</span>
</a>

<ul className="hidden md:flex flex-1 gap-8 text-sm font-medium ml-36 justify-center">
<li className=""><a className="hover:text-[#37B5A9]" href="#">Why Us</a></li>
<li><a className="hover:text-[#37B5A9]" href="#">Security</a></li>
<li><a className="hover:text-[#37B5A9]" href="#">Pricing</a></li>
</ul>

<div className="hidden md:flex items-center gap-4">
<a className="hover:text-[#37B5A9] text-sm" href="#">Log in</a>
<a className="text-sm bg-[#F25F5C] hover:bg-[#f46f6c] rounded-[20px] px-5 py-2 transition shadow" href="#">Get;started</a>
</div>

<button aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle navigation" className="md:hidden ml-auto" id="navToggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>

<div className="md:hidden hidden space-y-5 px-6 pb-12 fade fade-2" id="mobileNav">
<a className="block hover:text-[#37B5A9]" href="#">Why Us</a>
<a className="block hover:text-[#37B5A9]" href="#">Security</a>
<a className="block hover:text-[#37B5A9]" href="#">Pricing</a>
<a className="block hover:text-[#37B5A9]" href="#">Blog</a>
<a className="block hover:text-[#37B5A9]" href="#">Log in</a>
<a className="inline-block bg-[#F25F5C] hover:bg-[#f46f6c] rounded-[20px] px-5 py-2 text-sm transition" href="#">Create Legacy</a>
</div>
</header>

<section className="relative z-10 flex min-h-[70vh] md:px-10 text-center pr-6 pl-6 items-center justify-center">
<div className="max-w-3xl">
<h1 className="typewrite text-4xl md:text-6xl font-semibold tracking-tight font-[Poppins] mb-6 fade fade-1" data-period="2200" data-type="[&quot;Leave it Clear.&quot;,&quot;No passwords stored.&quot;,&quot;Guidance, not guesswork.&quot;]">
<span className="wrap">Leave it Clear</span>
</h1>
<p className="md:text-xl fade fade-2 text-base text-[#9CA3AF] mb-10">In just 10 minutes, Leave It Clear helps you organise and share essential personal, financial, and digital information—so nothing important is lost and no one is left guessing.</p>
<div className="flex flex-col sm:flex-row gap-4 fade fade-3 mb-12 justify-center">
<a className="hover:bg-[#f46f6c] transition text-white bg-[#F25F5C] rounded-[20px] pt-4 pr-8 pb-4 pl-8 shadow-md" href="#">Get started</a>
<a className="hover:bg-[#1e3d4f] hover:text-white transition text-[#37B5A9] border-[#37B5A9] border rounded-[20px] pt-4 pr-8 pb-4 pl-8" href="#how-it-works">How It Works</a>
</div>
<div className="flex gap-4 fade fade-4 items-center justify-center">
<div className="hidden xs:flex -space-x-2">
<img alt="Customer 1" className="w-8 h-8 rounded-full ring-2 ring-[#14213d]" src="https://i.pravatar.cc/30?img=1" />
<img alt="Customer 2" className="w-8 h-8 rounded-full ring-2 ring-[#14213d]" src="https://i.pravatar.cc/30?img=2" />
<img alt="Customer 3" className="w-8 h-8 rounded-full ring-2 ring-[#14213d]" src="https://i.pravatar.cc/30?img=3" />
</div>
<p className="text-sm text-[#9CA3AF]">Bringing peace of mind to the people who matter most.</p>
</div>
</div>
</section>


<section className="relative z-10 max-w-7xl md:px-10 mx-auto mt-48 pt-24 pb-24 px-6" id="how-it-works">
<div className="absolute inset-0 mx-6 md:mx-0 rounded-3xl bg-[#152940]/70 backdrop-blur-md ring-1 ring-white/10 -z-10"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center fade fade-1">How It Works</h2>
<p className="max-w-2xl fade fade-2 text-[#9CA3AF] text-center mt-4 mr-auto ml-auto">Three simple steps to make sure everything important is documented, secure, and ready when it’s needed.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

<div className="group relative fade fade-2 hover:border-[#37B5A9]/50 transition border-white/10 border rounded-xl p-8 backdrop-blur-sm">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#37B5A9]/10 mb-6">
<svg className="lucide lucide-file-text w-6 h-6 text-[#37B5A9]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Add your details</h3>
<p className="text-sm text-[#9CA3AF]">Step-by-step prompts help you capture the digital and personal details your loved ones will need, simply and stress-free.</p>
<svg className="lucide lucide-arrow-right absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#37B5A9] opacity-0 group-hover:opacity-100 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="group relative fade fade-3 hover:border-[#37B5A9]/50 transition border-white/10 border rounded-xl p-8 backdrop-blur-sm">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#37B5A9]/10 mb-6">
<svg className="lucide lucide-shield-check w-6 h-6 text-[#37B5A9]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Secure & encrypt</h3>
<p className="text-sm text-[#9CA3AF]">We don’t ask for your passwords. Your info is securely stored and only accessible to you and your trusted contacts.</p>
<svg className="lucide lucide-arrow-right absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#37B5A9] opacity-0 group-hover:opacity-100 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="group relative fade fade-4 hover:border-[#37B5A9]/50 transition border-white/10 border rounded-xl p-8 backdrop-blur-sm">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#37B5A9]/10 mb-6">
<svg className="lucide lucide-share-2 w-6 h-6 text-[#37B5A9]" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Share with loved ones</h3>
<p className="text-sm text-[#9CA3AF]">Designate trusted people who can access selected details when the time comes—no passwords exchanged.</p>
<svg className="lucide lucide-arrow-right absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#37B5A9] opacity-0 group-hover:opacity-100 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</section>

<div className="pointer-events-none -mt-1 md:-mt-4 h-36 md:h-40 -z-10" style={{background: `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1440 320%27%3E%3Cpath fill=%27%2337B5A9%27 fill-opacity=%270.07%27 d=%27M0,192L40,202.7C80,213,160,235,240,245.3C320,256,400,256,480,245.3C560,235,640,213,720,181.3C800,149,880,107,960,117.3C1040,128,1120,192,1200,213.3C1280,235,1360,213,1400,202.7L1440,192L1440 320 0 320Z%27/%3E%3C/svg%3E') center/cover`}}></div>

<footer className="max-w-7xl mx-auto px-6 md:px-10 pb-12 text-sm text-[#9CA3AF]">
<div className="flex flex-col md:flex-row gap-8 mt-2 justify-between">
<p className="order-2 md:order-1">© 2025 LeaveitClear Inc.</p>
<div className="order-1 md:order-2 flex flex-wrap gap-6">
<a className="hover:text-[#37B5A9]" href="#">Terms</a>
<a className="hover:text-[#37B5A9]" href="#">Privacy</a>
<a className="hover:text-[#37B5A9]" href="#">Security</a>
</div>
</div>
</footer>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-10" style={{background: `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1440 320%27%3E%3Cpath fill=%27%2337B5A9%27 fill-opacity=%270.08%27 d=%27M0,256L40,218.7C80,181,160,107,240,101.3C320,96,400,160,480,170.7C560,181,640,139,720,128C800,117,880,139,960,133.3C1040,128,1120,96,1200,90.7C1280,85,1360,107,1400,117.3L1440,128V320H0Z%27/%3E%3C/svg%3E') center/cover`}}></div>


    </>
  );
}
