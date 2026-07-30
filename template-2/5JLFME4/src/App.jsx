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



    document.addEventListener('DOMContentLoaded', () => {
      const cursorPosition = document.querySelector('.grid-lines_cursor-position');
      if (cursorPosition) {
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        document.addEventListener('mousemove', (e) => {
          targetX = e.clientX;
          targetY = e.clientY;
        });
        function animate() {
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          cursorPosition.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale3d(1, 1, 1)`;
          requestAnimationFrame(animate);
        }
        animate();
      }
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
      
<div className="wrapper">

<div aria-hidden="true" className="pre-footer_grid">
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
</div>
<div aria-hidden="true" className="grid-lines">
<div className="grid-lines_cursor-position" style={{transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1)`}}>
<div className="grid-lines_cursor"></div>
</div>
</div>

<div className="relative z-10 w-full">

<header className="relative z-20" style={{background: `none`, border: `none`, boxShadow: `none`}}>
<nav className="flex md:px-10 lg:px-16 max-w-7xl animate-fade-in-up mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between" style={{background: `none`, border: `none`, boxShadow: `none`}}>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-white/10 to/20 border border-white/10 relative">
<svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24">
<circle cx="12" cy="12" fill="url(#g1)" r="10" stroke="white" strokeWidth="1.5"></circle>
<defs>
<radialgradient cx="0.5" cy="0.5" id="g1" r="0.8">
<stop offset="0%" stop-color="#fff" stop-opacity="0.7"></stop>
<stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>
<svg className="lucide lucide-sparkles absolute w-3 h-3 text-[#fff] left-1.5 top-1.5 pointer-events-none" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</span>
<span className="font-light tracking-tight font-geist text-white">ChainNavigator</span>
</div>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li><a className="hover:text-gray-300 transition font-light tracking-tight font-geist text-white" href="#">Explore</a></li>
<li><a className="hover:text-gray-300 transition font-light tracking-tight font-geist text-white" href="#">Resources</a></li>
<li><a className="hover:text-gray-300 transition font-light tracking-tight font-geist text-white" href="#">Insights</a></li>
<li><a className="hover:text-gray-300 transition font-light tracking-tight font-geist text-white" href="#">About</a></li>
</ul>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full text-sm border border-white/10 hover:border-white/30 transition font-light tracking-tight font-geist text-white">Sign In</button>
<button className="inline-flex items-center justify-center h-9 px-5 rounded-full text-sm bg-white text-[#0d0d0d] hover:bg-gray-200 transition font-light tracking-tight font-geist">
              Join Us
            </button>
</div>
</nav>
</header>

<section className="relative isolate overflow-hidden z-10">
<div className="absolute inset-0 -z-10 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-[#222222]/60 to-transparent pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 lg:pt-24 pb-20 flex flex-col lg:flex-row items-start lg:items-center gap-14">

<div className="w-full lg:w-7/12">
<span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 backdrop-blur animate-fade-in-up animate-delay-1">
<svg className="lucide lucide-sparkles w-4 h-4 stroke-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-white/70 font-light tracking-tight font-geist">28k+ Members Community+</span>
</span>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] animate-fade-in-up animate-delay-2 font-bricolage tracking-tighter text-white" style={{letterSpacing: `-0.02em`, transition: `outline 0.1s ease-in-out`}}>
              Your Personal<br />
              Blockchain Platforms<br />
              Navigator
            </h1>
<p className="mt-6 max-w-xl text-lg text-white/80 animate-fade-in-up animate-delay-3 font-light tracking-tight font-geist">
              Find everything you need to start exploring the decentralized web and unlock new opportunities for innovation and 🚀 growth.
            </p>
<button className="inline-flex gap-2 h-12 rounded-full font-semibold text-sm text-[#0d0d0d] mt-10 pr-6 pl-6 items-center bg-transparent border-none cursor-pointer relative transition-transform duration-300 ease-in-out transform scale-100 hover:scale-[1.1] focus-visible:scale-[1.1]" id="aura-emcb90pq9" style={{'--black-700': `hsla(0 0% 12% / 1)`, '--border_radius': `9999px`, '--transtion': `0.3s ease-in-out`, '--offset': `2px`, '--active': `0`, position: `relative`, padding: `1rem 2rem`, borderRadius: `9999px`, backgroundColor: `transparent`}}>
<span className="text_button font-light tracking-tight font-geist" style={{position: `relative`, zIndex: `10`, backgroundImage: `linear-gradient(90deg, hsla(0 0% 100% / 1) 0%, hsla(0 0% 100% / var(--active, 0)) 120%)`, backgroundClip: `text`, fontSize: `1rem`, color: `transparent`}}>
                Join Our Beta
              </span>
<span className="dots_border" style={{'--size_border': `calc(100% + 2px)`, overflow: `hidden`, position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, width: `var(--size_border)`, height: `var(--size_border)`, backgroundColor: `transparent`, borderRadius: `9999px`, zIndex: `-10`}}>
<span style={{content: `''`, position: `absolute`, top: `30%`, left: `50%`, transformOrigin: `left`, width: `100%`, height: `2rem`, backgroundColor: `white`, maskImage: `linear-gradient(transparent 0%, white 120%)`, animation: `rotate 2s linear infinite`, display: `block`, transform: `rotate(0deg`}}></span>
</span>

</button>
</div>

<div className="w-full lg:w-5/12 flex flex-col gap-6">

<div className="glass animate-blur-in animate-blur-delay-1 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-inner backdrop-blur">
<h3 className="text-xl mb-6 text-white flex items gap-2 font-light tracking-tight font-geist">
<svg className="lucide lucide-activity w-[20px] h-[20px]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                How to join
              </h3>
<ol className="relative ml-3 space-y-8 before:absolute before:inset-0 before:ml-2 before:w-px before:bg-white/10">
<li className="relative flex flex-col gap-2 pl-8">
<span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white/60" style={{boxShadow: `0 0 0 3px #ffffff22`}}></span>
<p className="flex items-center gap-2 font-light tracking-tight font-geist text-white">
<svg className="lucide lucide-list-check w-4 h-4 text-white" data-lucide="list-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 18H3"></path><path d="m15 18 2 2 4-4"></path><path d="M16 12H3"></path><path d="M16 6H3"></path></svg>
                    Choose category
                  </p>
<p className="text-sm text-white/70 max-w-xs font-light tracking-tight font-geist">Our curated list of blockchain platforms covers a wide range of categories</p>
</li>
<li className="relative flex flex-col gap-4 pl-8">
<span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white/30"></span>
<div>
<p className="flex items-center gap-2 font-light tracking-tight font-geist text-white">
<svg className="lucide lucide-users w-4 h-4 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      Join community
                    </p>
<p className="text-sm text-white/70 max-w-xs font-light tracking-tight font-geist">Become a member of our incredible <span className="text-white/90 font-light tracking-tight font-geist">community</span></p>
</div>
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[#0d0d0d]" src="https://randomuser.me/api/portraits/men/11.jpg" />
<img alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[#0d0d0d]" src="https://randomuser.me/api/portraits/women/65.jpg" />
<img alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[#0d0d0d]" src="https://randomuser.me/api/portraits/men/44.jpg" />
<button aria-label="Add more members" className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0d0d0d] bg-white/10 hover:bg-white/20 transition">
<svg className="lucide lucide-plus w-4 h-4 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</li>
<li className="relative flex flex-col gap-2 pl-8">
<span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white/20"></span>
<p className="flex items-center gap-2 font-light tracking-tight font-geist text-white">
<svg className="lucide lucide-trending-up w-4 h-4 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    Grow with us
                  </p>
<p className="text-sm text-white/70 max-w-xs font-light tracking-tight font-geist">Stay up-to-date on the latest trends and opportunities in blockchain</p>
</li>
</ol>
</div>
<div className="glass animate-blur-in animate-blur-delay-2 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-inner backdrop-blur">
<h4 className="text-lg flex items-center gap-2 mb-5 text-white font-light tracking-tight font-geist">
<svg className="lucide lucide-sparkles w-5 h-5 stroke-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 00 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                Categories
              </h4>
<ul className="space-y-4">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-grid w-4 h-4 text-white" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<div>
<span className="text-white font-light tracking-tight font-geist">Investments</span>
<p className="text-xs text-white/50 mt-0.5 max-w-xs font-light tracking-tight font-geist">Explore asset management platforms, portfolio trackers, and investment protocols.</p>
</div>
</div>
<span className="rounded-full px-2.5 py-0.5 text-xs bg-white/10 text-white/70 font-light tracking-tight font-geist">32</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3 text-white/70">
<svg className="lucide lucide-repeat w-4 h-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
<div>
<span className="font-light tracking-tight font-geist">Exchanges</span>
<p className="text-xs text-white/40 mt-0.5 max-w-xs font-light tracking-tight font-geist">Centralized and decentralized platforms for trading cryptocurrencies securely.</p>
</div>
</div>
<span className="rounded-full px-2.5 py-0.5 text-xs bg-white/10 text-white/40 font-light tracking-tight font-geist">21</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3 text-white/70">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<div>
<span className="font-light tracking-tight font-geist">Farming</span>
<p className="text-xs text-white/40 mt-0.5 max-w-xs font-light tracking-tight font-geist">Yield farming platforms and liquidity mining to maximize your crypto assets.</p>
</div>
</div>
<span className="rounded-full px-2.5 py-0.5 text-xs bg-white/10 text-white/40 font-light tracking-tight font-geist">14</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3 text-white/70">
<svg className="lucide lucide-gamepad-2 w-4 h-4" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0"></path></svg>
<div>
<span className="font-light tracking-tight font-geist">Gaming</span>
<p className="text-xs text-white/40 mt-0.5 max-w-xs font-light tracking-tight font-geist">Discover blockchain-powered games and play-to-earn ecosystems.</p>
</div>
</div>
<span className="rounded-full px-2.5 py0.5 text-xs bg-white/10 text-white/40 font-light tracking-tight font-geist">11</span>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
