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



  // Cursor Glow Interaction
  const cursorGlow = document.getElementById('cursor-glow');
  document.addEventListener('mousemove', (e) => {
    if (window.matchMedia("(pointer: fine)").matches) {
      cursorGlow.style.background = `radial-gradient(circle 600px at ${e.clientX}px ${e.clientY}px, rgba(255, 255, 255, 0.03), transparent 40%)`;
      cursorGlow.style.opacity = '1';
    }
  });

  // Setup Preloader
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 1000);
    }, 400); 
  });

  // Scroll Reveal Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile Menu Toggle
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const isVisible = menu.classList.contains('view-visible');
    
    if (isVisible) {
      menu.classList.replace('view-visible', 'view-hidden');
    } else {
      menu.classList.replace('view-hidden', 'view-visible');
    }
  }

  // Authentication/Login Flow
  const loginView = document.getElementById('login-view');
  const portalView = document.getElementById('portal-view');
  const landingView = document.getElementById('landing-view');

  function openLogin() {
    loginView.classList.replace('view-hidden', 'view-visible');
    document.body.style.overflow = 'hidden';
  }
  function closeLogin() {
    loginView.classList.replace('view-visible', 'view-hidden');
    document.body.style.overflow = '';
  }
  function doLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('login-btn');
    btn.textContent = 'Authenticating...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
      loginView.classList.replace('view-visible', 'view-hidden');
      landingView.style.display = 'none'; 
      portalView.style.display = 'grid'; 
      setTimeout(() => portalView.classList.replace('view-hidden', 'view-visible'), 50);
      document.body.style.overflow = 'hidden'; 
    }, 1200);
  }
  function logout() {
    portalView.classList.replace('view-visible', 'view-hidden');
    setTimeout(() => {
      portalView.style.display = ''; 
      landingView.style.display = 'block';
      const btn = document.getElementById('login-btn');
      btn.textContent = 'Authenticate';
      btn.style.opacity = '1';
      document.body.style.overflow = ''; 
      window.scrollTo(0,0);
    }, 500);
  }

  // Portal Functionality
  function switchPortalTab(tabId, btnElement) {
    document.querySelectorAll('.portal-tab-content').forEach(tab => tab.classList.remove('active'));
    
    document.querySelectorAll('.portal-nav-btn').forEach(btn => {
      btn.classList.remove('bg-white/[0.05]', 'text-white');
      btn.classList.add('text-white/50');
      btn.querySelector('iconify-icon').classList.remove('text-white');
      btn.classList.remove('before:content-[""]', 'before:absolute', 'before:left-0', 'before:top-1/2', 'before:-translate-y-1/2', 'before:w-[3px]', 'before:rounded-r-full', 'before:h-3/5', 'before:bg-white');
    });
    
    document.getElementById(tabId).classList.add('active');
    
    if(btnElement) {
      btnElement.classList.remove('text-white/50');
      btnElement.classList.add('bg-white/[0.05]', 'text-white', 'before:content-[""]', 'before:absolute', 'before:left-0', 'before:top-1/2', 'before:-translate-y-1/2', 'before:w-[3px]', 'before:rounded-r-full', 'before:h-3/5', 'before:bg-white');
      btnElement.querySelector('iconify-icon').classList.add('text-white');
    }
  }

  // Intelligent Chat Simulation
  function sendChat(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if(!msg) return;
    
    const container = document.getElementById('chat-messages');
    
    // User Message
    const msgHTML = `
      <div class="bg-white/[0.05] border border-white/10 p-5 rounded-2xl rounded-tr-sm text-white/90 text-sm leading-relaxed text-right self-end w-[85%] mt-3 opacity-0 transform translate-y-3 transition-all duration-500 shadow-sm" id="msg-${Date.now()}">
        ${msg}
      </div>
    `;
    container.insertAdjacentHTML('beforeend', msgHTML);
    input.value = '';
    
    // Animate in
    setTimeout(() => {
      container.lastElementChild.classList.remove('opacity-0', 'translate-y-3');
      container.scrollTop = container.scrollHeight;
    }, 20);

    // Simulated Intelligence Logic
    let responseText = "Noted. I am processing this request now and will update your itinerary shortly.";
    const lowerMsg = msg.toLowerCase();
    
    if(lowerMsg.includes('paris') || lowerMsg.includes('dinner')) {
      responseText = "We recommend Arpège or Guy Savoy. Shall I secure a table?";
    } else if(lowerMsg.includes('ibiza') || lowerMsg.includes('jet') || lowerMsg.includes('flight')) {
      responseText = "We’ve identified 3 aircraft options for that route. Would you like a summary?";
    } else if(lowerMsg.includes('hotel') || lowerMsg.includes('stay')) {
      responseText = "I can arrange off-market suite access. Do you have a preferred property, or shall I curate options?";
    }

    // Concierge Reply
    setTimeout(() => {
      const replyHTML = `
        <div class="bg-neutral-800/80 border border-neutral-700 p-5 rounded-2xl rounded-tl-sm text-white/90 text-sm leading-relaxed mt-3 shadow-sm opacity-0 transform translate-y-3 transition-all duration-500">
          <div class="text-[9px] tracking-[0.2rem] uppercase text-neutral-400 mb-3 font-medium flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-white animate-pulse-glow"></span>Emily (Lead)</div>
          ${responseText}
        </div>
      `;
      container.insertAdjacentHTML('beforeend', replyHTML);
      
      setTimeout(() => {
        container.lastElementChild.classList.remove('opacity-0', 'translate-y-3');
        container.scrollTop = container.scrollHeight;
      }, 20);
      
    }, 1500 + Math.random() * 1000);
  }

  function savePreferences(e) {
    e.preventDefault();
    const msg = document.getElementById('save-msg');
    msg.style.opacity = '1';
    setTimeout(() => msg.style.opacity = '0', 3000);
  }

  // Universal Modal System Data
  const modalData = {
    'modal-apply': `
      <p class="text-sm leading-relaxed tracking-wide text-white/70 mb-10">Membership is highly restricted. Please provide your details, and our liaison team will contact you to discuss your requirements and evaluate compatibility.</p>
      <form onsubmit="submitApplication(event)" class="flex flex-col gap-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" required class="bg-white/[0.04] border border-white/10 p-5 text-sm text-white placeholder-white/30 focus:border-white focus:bg-white/[0.06] outline-none transition-all duration-300 rounded-2xl w-full shadow-inner" />
          <input type="email" placeholder="Email Address" required class="bg-white/[0.04] border border-white/10 p-5 text-sm text-white placeholder-white/30 focus:border-white focus:bg-white/[0.06] outline-none transition-all duration-300 rounded-2xl w-full shadow-inner" />
        </div>
        <input type="tel" placeholder="Phone Number (International format)" class="bg-white/[0.04] border border-white/10 p-5 text-sm text-white placeholder-white/30 focus:border-white focus:bg-white/[0.06] outline-none transition-all duration-300 rounded-2xl w-full shadow-inner" />
        <textarea placeholder="Tell us about your lifestyle needs (Travel frequency, primary residences, specific requirements)..." rows="4" required class="bg-white/[0.04] border border-white/10 p-5 text-sm text-white placeholder-white/30 focus:border-white focus:bg-white/[0.06] outline-none transition-all duration-300 rounded-2xl w-full resize-none shadow-inner"></textarea>
        <button type="submit" class="bg-white text-black py-5 mt-4 text-[10px] tracking-[0.2rem] uppercase font-medium hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:outline-none transition-all duration-300 rounded-full active:scale-95">Submit Application</button>
      </form>
    `,
    'modal-explore': `
      <div class="h-64 -mx-8 md:-mx-10 -mt-8 md:-mt-10 mb-10 relative overflow-hidden rounded-t-3xl">
         <img src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover opacity-50" alt="Experience">
         <div class="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
      </div>
      <p class="text-sm leading-relaxed tracking-wide text-white/80 mb-8">Our network bypasses standard channels. We orchestrate private arrangements directly with proprietors, ensuring absolute privacy and preference integrity.</p>
      <ul class="list-none space-y-5 text-sm text-white/60 mb-10">
        <li class="flex gap-4 items-start"><iconify-icon icon="solar:check-circle-linear" class="text-white text-2xl shrink-0 mt-0.5"></iconify-icon> Dedicated intelligence team sourcing off-market assets.</li>
        <li class="flex gap-4 items-start"><iconify-icon icon="solar:check-circle-linear" class="text-white text-2xl shrink-0 mt-0.5"></iconify-icon> Real-time adjustment of itineraries via the Secure Console.</li>
        <li class="flex gap-4 items-start"><iconify-icon icon="solar:check-circle-linear" class="text-white text-2xl shrink-0 mt-0.5"></iconify-icon> Ground and air logistics managed inherently without third-party brokers.</li>
      </ul>
      <button onclick="closeModal(); setTimeout(()=>openModal('modal-apply', 'Apply for Access'), 500);" class="w-full border border-white/30 text-white px-10 py-5 text-[10px] tracking-[0.2rem] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 rounded-full">Request Eligibility</button>
    `,
    'modal-itinerary': `
      <div class="space-y-8">
        <div class="flex items-center justify-between border-b border-white/5 pb-6">
          <div>
            <div class="text-[10px] tracking-widest uppercase text-white/50 mb-2">Departure</div>
            <div class="font-serif text-2xl text-white">LHR (Farnborough)</div>
          </div>
          <iconify-icon icon="solar:routing-2-linear" class="text-white text-4xl opacity-30"></iconify-icon>
          <div class="text-right">
            <div class="text-[10px] tracking-widest uppercase text-white/50 mb-2">Arrival</div>
            <div class="font-serif text-2xl text-white">TLV (Ben Gurion)</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 text-sm">
          <div class="bg-[#171717] p-5 rounded-2xl border border-white/5 shadow-inner">
            <div class="text-white/40 mb-2">Aircraft</div>
            <div class="text-white">Gulfstream G700</div>
          </div>
          <div class="bg-[#171717] p-5 rounded-2xl border border-white/5 shadow-inner">
            <div class="text-white/40 mb-2">Catering</div>
            <div class="text-white">Nobu curated menu</div>
          </div>
        </div>
        <div class="bg-white/5 border border-white/10 p-5 rounded-2xl text-sm leading-relaxed text-white/80 mt-6 flex gap-4 shadow-sm">
           <iconify-icon icon="solar:info-circle-linear" class="text-white text-xl shrink-0 mt-0.5"></iconify-icon>
           Ground transport (Maybach S680) is confirmed at both departure and arrival FBOs.
        </div>
      </div>
    `,
    'modal-success': `
      <div class="text-center py-12">
        <iconify-icon icon="solar:verified-check-linear" class="text-7xl text-white mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"></iconify-icon>
        <h4 class="font-serif text-4xl tracking-tight text-white mb-5">Request Logged</h4>
        <p class="text-sm leading-relaxed tracking-wide text-white/60 max-w-sm mx-auto">Your concierge team has been notified and will coordinate this request immediately.</p>
        <button onclick="closeModal()" class="mt-12 bg-white text-black px-12 py-4 text-[10px] tracking-[0.2rem] uppercase font-medium hover:bg-neutral-200 transition-colors duration-300 rounded-full active:scale-95 shadow-lg">Dismiss</button>
      </div>
    `,
    'modal-legal': `
      <div class="prose prose-invert prose-sm max-w-none text-white/70 text-sm leading-relaxed">
        <p class="mb-5 text-[10px] tracking-widest uppercase text-neutral-400">Last Updated: Jan 2026</p>
        <p class="mb-5">The Ledger maintains absolute discretion and data segregation. Your personal information, travel manifests, and preferences are encrypted at rest and in transit.</p>
        <p class="mb-5">Information collected during the application process is strictly utilised for vetting and compatibility assessments. We do not aggregate user data for secondary market sale or broker relationships. For further details on our cryptography standards or to request data deletion, contact your designated liaison.</p>
      </div>
    `
  };

  const overlay = document.getElementById('modal-overlay');
  const modalBox = document.getElementById('modal-box');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  function openModal(type, title) {
    modalTitle.textContent = title;
    modalBody.innerHTML = modalData[type] || '<p class="text-sm text-white/80">Content unavailable.</p>';
    
    overlay.classList.replace('view-hidden', 'view-visible');
    
    // Animate box in
    setTimeout(() => {
      modalBox.classList.remove('scale-95', 'opacity-0');
      modalBox.classList.add('scale-100', 'opacity-100');
    }, 20);

    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBox.classList.remove('scale-100', 'opacity-100');
    modalBox.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
      overlay.classList.replace('view-visible', 'view-hidden');
      if(document.getElementById('login-view').classList.contains('view-hidden') && document.getElementById('portal-view').classList.contains('view-hidden')) {
        document.body.style.overflow = '';
      }
    }, 400);
  }

  function submitApplication(e) {
    e.preventDefault();
    modalBox.classList.remove('scale-100', 'opacity-100');
    modalBox.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
      modalTitle.textContent = 'Application Received';
      modalBody.innerHTML = modalData['modal-success'];
      
      modalBox.classList.remove('scale-95', 'opacity-0');
      modalBox.classList.add('scale-100', 'opacity-100');
    }, 400);
  }

  // Close modal on click outside
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
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
      
<div id="cursor-glow" style={{background: 'radial-gradient(600px at 117px 483px, rgba(255, 255, 255, 0.03), transparent 40%)'}}></div>




<div className="relative w-full min-h-screen transition-opacity duration-700 view-visible" id="landing-view">

<nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-20 py-8 border-b border-transparent transition-all duration-700 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-md" id="nav">
<a aria-label="Home" className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full inline-block" href="#hero">
<img alt="Logo" className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-lg" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</a>

<ul className="hidden md:flex gap-14 list-none m-0 p-0">
<li><a className="text-xs tracking-[0.2rem] uppercase text-white/70 hover:text-white focus:text-white transition-colors duration-300 focus:outline-none" href="#philosophy">Philosophy</a></li>
<li><a className="text-xs tracking-[0.2rem] uppercase text-white/70 hover:text-white focus:text-white transition-colors duration-300 focus:outline-none" href="#experience">Experience</a></li>
<li><a className="text-xs tracking-[0.2rem] uppercase text-white/70 hover:text-white focus:text-white transition-colors duration-300 focus:outline-none" href="#ecosystem">Services</a></li>
</ul>
<div className="flex items-center gap-6">
<button aria-label="Member Portal Login" className="hidden md:block text-xs tracking-[0.2rem] uppercase text-neutral-300 border border-neutral-600 px-8 py-3.5 rounded-full hover:bg-white/10 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300" onclick="openLogin()">Member Portal</button>

<button aria-expanded="false" aria-label="Toggle Menu" className="md:hidden text-white hover:text-neutral-400 transition-colors focus:outline-none p-2 rounded-full" onclick="toggleMobileMenu()">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center view-hidden transition-all duration-500" id="mobile-menu">
<ul className="flex flex-col gap-10 text-center list-none m-0 p-0">
<li><a className="text-sm tracking-[0.3rem] uppercase text-white/80 hover:text-white transition-colors duration-300" href="#philosophy" onclick="toggleMobileMenu()">Philosophy</a></li>
<li><a className="text-sm tracking-[0.3rem] uppercase text-white/80 hover:text-white transition-colors duration-300" href="#experience" onclick="toggleMobileMenu()">Experience</a></li>
<li><a className="text-sm tracking-[0.3rem] uppercase text-white/80 hover:text-white transition-colors duration-300" href="#ecosystem" onclick="toggleMobileMenu()">Services</a></li>
</ul>
</div>

<section className="relative min-h-screen flex items-center px-8 md:px-20 pt-40 pb-32 overflow-hidden" id="hero">

<div className="absolute inset-0 z-0 bg-black">
<video autoplay="" className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-[20s] ease-out" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">
<source src="https://cdn.coverr.co/videos/coverr-flying-over-a-yacht-in-the-ocean-5310/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-80"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
<div className="lg:pr-12">
<div className="flex items-center gap-5 text-xs tracking-[0.3rem] uppercase text-neutral-400 mb-12 reveal in-view">
<div aria-hidden="true" className="w-10 h-[1px] bg-gradient-to-r from-neutral-400 to-transparent"></div> Private Membership · Est. 2026
        </div>
<h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-white leading-[1.1] mb-10 reveal reveal-delay-1 in-view">
          A Private World,<br/><em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent pr-2">Intelligently</em><br/>Curated
        </h1>
<p className="text-sm md:text-base text-white/80 leading-relaxed tracking-wide max-w-lg mb-14 reveal reveal-delay-2 in-view">
          An elevated members experience combining AI precision with human concierge excellence. Engineered for those who expect more than access.
        </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center reveal reveal-delay-2">
<button aria-label="Request Private Access" className="w-full sm:w-auto text-xs tracking-[0.2rem] uppercase bg-white text-black px-10 py-5 rounded-full hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-center font-medium active:scale-95" onclick="openModal('modal-apply', 'Request Private Access')">Request Private Access</button>
<button aria-label="View Member Experience Login" className="w-full sm:w-auto text-xs tracking-[0.2rem] uppercase border border-white/30 text-white/90 px-10 py-5 rounded-full hover:border-white hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-center active:scale-95" onclick="openLogin()">View Member Experience</button>
</div>
</div>

<div aria-hidden="true" className="relative z-10 hidden lg:block reveal reveal-delay-2 in-view">
<div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_2rem_6rem_rgba(0,0,0,0.8)] group">
<img alt="Luxury Interior" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
<div className="flex justify-between items-start mb-5">
<div>
<div className="text-[10px] tracking-[0.2rem] uppercase text-neutral-400 mb-2">Priority Selection</div>
<div className="font-serif text-2xl tracking-tight text-white">Villa Cetinale</div>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-neutral-300 animate-pulse-glow shadow-[0_0_10px_rgba(255,255,255,0.4)]"></span>
</div>
<div className="flex items-center gap-3 text-xs tracking-widest uppercase text-white/60">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Siena, Italy
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full overflow-hidden border-y border-white/5 bg-black py-8 reveal">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 opacity-70 hover:opacity-100 transition-opacity duration-700">
<div className="aspect-[16/9] overflow-hidden rounded-2xl relative group shadow-lg"><img alt="Jet" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-[16/9] overflow-hidden rounded-2xl relative group shadow-lg"><img alt="Dining" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-[16/9] overflow-hidden rounded-2xl relative group hidden md:block shadow-lg"><img alt="Resort" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-[16/9] overflow-hidden rounded-2xl relative group hidden md:block shadow-lg"><img alt="Lounge" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
</div>
</section>

<section className="px-8 md:px-20 py-48 bg-[#050505]" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="text-xs tracking-[0.3rem] uppercase text-neutral-400 mb-24 reveal pl-2">Philosophy</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40 reveal group">
<div className="pl-2">
<div className="font-['EB_Garamond'] italic text-lg text-neutral-500 mb-8">i</div>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-extralight text-white mb-8 leading-tight group-hover:translate-x-3 transition-transform duration-700 ease-out">Precision<br/>over <em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">noise</em></h2>
<p className="text-sm md:text-base leading-relaxed tracking-wide text-white/70 max-w-md">Every recommendation and arrangement is intentional. Our intelligence layer processes thousands of signals to surface only what matters to you, respecting your time and attention.</p>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-3xl relative border border-white/5 shadow-2xl">
<img alt="Precision Architecture" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent opacity-60"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40 reveal group">
<div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-3xl relative border border-white/5 shadow-2xl">
<img alt="Exclusive Access" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#050505]">
<img alt="Exclusive Access" className="group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://pub-2e90c8f5f6574f26b52cbfebbd42eb3a.r2.dev/generated_assets/e17e65e6-c567-402a-9f5e-181cb28409e5.jpg"/>
<div className="absolute inset-0 bg-gradient-to-l from-[#050505] to-transparent opacity-60 pointer-events-none"></div>
</div>
</div>
<div className="order-1 lg:order-2 pr-2">
<div className="font-['EB_Garamond'] italic text-lg text-neutral-500 mb-8">ii</div>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-extralight text-white mb-8 leading-tight group-hover:translate-x-3 transition-transform duration-700 ease-out">Access over<br/><em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">availability</em></h2>
<p className="text-sm md:text-base leading-relaxed tracking-wide text-white/70 max-w-md">The difference between a booking and an invitation. Our network operates through relationships cultivated over decades with principals globally, ensuring unparalleled entry.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center reveal group">
<div className="pl-2">
<div className="font-['EB_Garamond'] italic text-lg text-neutral-500 mb-8">iii</div>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-extralight text-white mb-8 leading-tight group-hover:translate-x-3 transition-transform duration-700 ease-out"><em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent pr-2">Discretion</em><br/>above all</h2>
<p className="text-sm md:text-base leading-relaxed tracking-wide text-white/70 max-w-md">Your life is not a dataset. Your preferences, movements, and intentions remain strictly within the encrypted boundary of your private membership.</p>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-3xl relative border border-white/5 shadow-2xl">
<img alt="Discretion Silhouette" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent opacity-60"></div>
</div>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-56 bg-[#0A0A0A] relative overflow-hidden" id="experience">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,#171717_0%,transparent_80%)] opacity-60"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<div className="flex items-center justify-center gap-5 text-xs tracking-[0.3rem] uppercase text-neutral-400 mb-10">
<div aria-hidden="true" className="w-8 h-[1px] bg-neutral-500"></div> Experience
      </div>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight font-extralight text-white mb-10 leading-tight">A command centre<br/>for your <em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">extraordinary</em> life</h2>
<p className="text-sm md:text-base leading-relaxed tracking-wide text-white/70 mx-auto max-w-2xl mb-14">Every dimension of your world — anticipated, coordinated, and elevated from a single elegant interface. Discard disparate communications in favour of a unified, intelligent concierge.</p>
<button aria-label="Enter Member Portal Demo" className="text-xs tracking-[0.2rem] uppercase border border-neutral-600 bg-white/5 text-white px-12 py-5 rounded-full hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 inline-block active:scale-95" onclick="openLogin()">Enter Portal Demo</button>
</div>
</section>

<section className="py-40 bg-black overflow-hidden" id="signature-experiences">
<div className="px-8 md:px-20 mb-20 reveal">
<div className="text-xs tracking-[0.3rem] uppercase text-neutral-400 mb-6">Signature Experiences</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-extralight text-white">A glimpse into what<br/>members access</h2>
</div>

<div className="flex overflow-x-auto gap-8 px-8 md:px-20 pb-14 snap-x-mandatory no-scrollbar reveal">
<div className="min-w-[85vw] md:min-w-[420px] aspect-[3/4] relative rounded-3xl overflow-hidden group snap-center border border-white/5 shrink-0 cursor-pointer shadow-2xl" onclick="openModal('modal-explore', 'Amalfi Coast Villa')">
<img alt="Amalfi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-10">
<span className="inline-block border border-neutral-500/50 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full mb-5 backdrop-blur-md bg-black/30">Invite Only</span>
<h3 className="font-serif text-3xl tracking-tight text-white mb-3">Amalfi Coast</h3>
<p className="text-sm tracking-wide text-white/60">Private clifftop estate, 7 days</p>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[420px] aspect-[3/4] relative rounded-3xl overflow-hidden group snap-center border border-white/5 shrink-0 cursor-pointer shadow-2xl" onclick="openModal('modal-explore', 'Arpège Chef Table')">
<img alt="Dining" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-10">
<span className="inline-block border border-neutral-500/50 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full mb-5 backdrop-blur-md bg-black/30">Secured Table</span>
<h3 className="font-serif text-3xl tracking-tight text-white mb-3">Arpège Paris</h3>
<p className="text-sm tracking-wide text-white/60">Chef's private counter</p>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[420px] aspect-[3/4] relative rounded-3xl overflow-hidden group snap-center border border-white/5 shrink-0 cursor-pointer shadow-2xl" onclick="openModal('modal-explore', 'Swiss Alps Chalet')">
<img alt="Alps" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-10">
<span className="inline-block border border-neutral-500/50 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full mb-5 backdrop-blur-md bg-black/30">Off Market</span>
<h3 className="font-serif text-3xl tracking-tight text-white mb-3">Swiss Alps</h3>
<p className="text-sm tracking-wide text-white/60">Winter Chalet, Heli-access</p>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[420px] aspect-[3/4] relative rounded-3xl overflow-hidden group snap-center border border-white/5 shrink-0 cursor-pointer shadow-2xl" onclick="openModal('modal-explore', 'Longevity Retreat')">
<img alt="Wellness" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-10">
<span className="inline-block border border-neutral-500/50 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full mb-5 backdrop-blur-md bg-black/30">Medical Grade</span>
<h3 className="font-serif text-3xl tracking-tight text-white mb-3">Clinique La Prairie</h3>
<p className="text-sm tracking-wide text-white/60">Longevity protocol, Switzerland</p>
</div>
</div>
</div>
</section>

<section className="px-8 md:px-20 py-48 bg-[#050505]" id="ecosystem">
<div className="max-w-7xl mx-auto">
<div className="mb-24 reveal pl-2">
<div className="text-xs tracking-[0.3rem] uppercase text-neutral-400 mb-8">Private Access Ecosystem</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-extralight text-white">Every dimension of<br/>your world, <em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">attended</em></h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal">

<div className="group relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 lg:p-14 hover-line-expand min-h-[450px] flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-700">
<img alt="Travel" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-1000 ease-out" loading="lazy" src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
<div className="relative z-10">
<span className="font-['EB_Garamond'] italic text-base text-neutral-500 block mb-5">01</span>
<h3 className="font-serif text-3xl tracking-tight font-extralight text-white mb-5">Travel</h3>
<p className="text-sm leading-relaxed tracking-wide text-white/70 mb-10 max-w-xs">Private aviation, yacht charters, and access to properties that never appear publicly.</p>
<button aria-label="Explore Travel Services" className="flex items-center gap-3 text-xs tracking-[0.2rem] uppercase text-neutral-400 focus:outline-none transition-colors hover:text-white" onclick="openModal('modal-explore', 'Travel Services')">
              Explore <iconify-icon className="transform group-hover:translate-x-3 transition-transform duration-500 ease-out" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 lg:p-14 hover-line-expand min-h-[450px] flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-700">
<img alt="Wellness" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-1000 ease-out" loading="lazy" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
<div className="relative z-10">
<span className="font-['EB_Garamond'] italic text-base text-neutral-500 block mb-5">02</span>
<h3 className="font-serif text-3xl tracking-tight font-extralight text-white mb-5">Wellness</h3>
<p className="text-sm leading-relaxed tracking-wide text-white/70 mb-10 max-w-xs">Medical concierge, longevity retreats, and private specialists across continents.</p>
<button aria-label="Explore Wellness Services" className="flex items-center gap-3 text-xs tracking-[0.2rem] uppercase text-neutral-400 focus:outline-none transition-colors hover:text-white" onclick="openModal('modal-explore', 'Wellness Services')">
              Explore <iconify-icon className="transform group-hover:translate-x-3 transition-transform duration-500 ease-out" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative overflow-hidden bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 lg:p-14 hover-line-expand min-h-[450px] flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-700">
<img alt="Dining" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-1000 ease-out" loading="lazy" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
<div className="relative z-10">
<span className="font-['EB_Garamond'] italic text-base text-neutral-500 block mb-5">03</span>
<h3 className="font-serif text-3xl tracking-tight font-extralight text-white mb-5">Dining</h3>
<p className="text-sm leading-relaxed tracking-wide text-white/70 mb-10 max-w-xs">Chef's tables, private cellars, and reservations curated strictly to your palate.</p>
<button aria-label="Explore Dining Services" className="flex items-center gap-3 text-xs tracking-[0.2rem] uppercase text-neutral-400 focus:outline-none transition-colors hover:text-white" onclick="openModal('modal-explore', 'Dining Services')">
              Explore <iconify-icon className="transform group-hover:translate-x-3 transition-transform duration-500 ease-out" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative px-8 md:px-20 py-56 text-center overflow-hidden bg-black">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,#171717_0%,transparent_80%)] -z-10 opacity-70"></div>
<span className="font-['EB_Garamond'] italic text-xl text-neutral-500 tracking-[0.1rem] block mb-12 reveal">By application only</span>
<h2 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-white leading-[1.1] mb-10 reveal">Access More<br/>Than a <em className="italic bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent pr-2">Platform</em></h2>
<div aria-hidden="true" className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent mx-auto mb-14 reveal"></div>
<p className="text-sm md:text-base leading-relaxed tracking-wide text-white/70 max-w-xl mx-auto mb-16 reveal">Enter a world designed around precision, discretion, and extraordinary access. Membership is considered — never assumed.</p>
<div className="flex flex-col sm:flex-row justify-center gap-8 reveal">
<button aria-label="Apply for Access" className="w-full sm:w-auto text-xs tracking-[0.2rem] uppercase bg-white text-black px-12 py-5 rounded-full hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 font-medium active:scale-95" onclick="openModal('modal-apply', 'Apply for Access')">Apply for Access</button>
</div>
</section>

<footer className="border-t border-white/5 px-8 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-black">
<img alt="Logo" className="w-10 h-10 rounded-full opacity-80 object-cover border border-white/10" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-[10px] tracking-[0.2rem] uppercase text-white/40">© 2026 The Ledger.</div>
<ul className="flex gap-10 list-none text-[10px] tracking-[0.2rem] uppercase text-white/40 m-0 p-0">
<li><button className="hover:text-white focus:outline-none transition-colors duration-300" onclick="openModal('modal-legal', 'Privacy Policy')">Privacy</button></li>
<li><button className="hover:text-white focus:outline-none transition-colors duration-300" onclick="openModal('modal-legal', 'Terms of Service')">Terms</button></li>
</ul>
</footer>
</div>



<div aria-labelledby="login-title" aria-modal="true" className="fixed inset-0 z-[150] bg-black view-hidden flex flex-col items-center justify-center p-6" id="login-view" role="dialog">

<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 blur-md mix-blend-overlay" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-10 left-10 z-10">
<button aria-label="Return to Home" className="text-xs tracking-[0.2rem] uppercase text-white/50 hover:text-white focus:outline-none transition-colors duration-300" onclick="closeLogin()">← Return</button>
</div>
<div className="w-full max-w-sm relative z-10 bg-[#0A0A0A]/80 backdrop-blur-2xl p-12 border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)]">
<div className="text-center mb-10">
<h2 className="sr-only" id="login-title">Login</h2>
<img alt="Logo" className="w-20 h-20 mx-auto rounded-full mb-6 object-cover border border-white/10 shadow-lg" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400">Private Console</div>
</div>

<div className="mb-8 bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
<span className="text-[10px] tracking-widest uppercase text-neutral-400 block mb-1">Demo Access Provided</span>
<span className="text-sm font-medium text-white/90">ID: demo   |   Passkey: demo</span>
</div>
<form className="flex flex-col gap-5" onsubmit="doLogin(event)">
<label className="sr-only" htmlFor="member-email">Member ID or Email</label>
<input className="bg-white/[0.04] border border-white/10 p-4 px-5 text-sm text-white placeholder-white/30 focus:border-white focus:bg-white/[0.06] outline-none transition-all duration-300 rounded-2xl w-full shadow-inner" id="member-email" placeholder="Member ID" required="" type="text" value="demo"/>
<label className="sr-only" htmlFor="member-pass">Passkey</label>
<input className="bg-white/[0.04] border border-white/10 p-4 px-5 text-sm text-white placeholder-white/30 focus:border-white focus:bg-white/[0.06] outline-none transition-all duration-300 rounded-2xl w-full shadow-inner" id="member-pass" placeholder="Passkey" required="" type="password" value="demo"/>
<button className="bg-white text-black py-4 mt-4 text-[10px] tracking-[0.2rem] uppercase font-medium hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:outline-none transition-all duration-300 rounded-full active:scale-95" id="login-btn" type="submit">Authenticate</button>
</form>
<div className="mt-8 text-center border-t border-white/10 pt-8">
<div className="text-[10px] tracking-widest text-white/30 mb-4 uppercase">Not a member?</div>
<button className="text-xs tracking-[0.2rem] uppercase text-neutral-400 hover:text-white focus:outline-none transition-colors duration-300 underline underline-offset-4" onclick="closeLogin(); openModal('modal-apply', 'Apply for Access');">Apply for Access</button>
</div>
</div>
</div>



<div className="fixed inset-0 z-[100] w-full h-full bg-[#050505] view-hidden grid-cols-1 lg:grid-cols-[260px_1fr_340px] overflow-hidden" id="portal-view">

<aside className="hidden lg:flex relative flex-col bg-[#0A0A0A] h-full shadow-2xl z-30">
<div className="absolute top-0 right-0 bottom-0 w-[1px] pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="p-10 pb-8 border-b border-white/5">
<img alt="Logo" className="w-14 h-14 rounded-full mb-4 object-cover border border-white/10 shadow-lg" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mt-4">Member Portal</div>
</div>
<nav aria-label="Portal Navigation" className="flex-1 overflow-y-auto py-6 custom-scrollbar">
<div aria-hidden="true" className="text-[10px] tracking-[0.3rem] uppercase text-white/30 px-10 pt-4 pb-4">Navigate</div>
<button className="w-full flex items-center gap-5 px-10 py-3.5 text-xs tracking-[0.15rem] uppercase text-white bg-white/[0.05] relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:rounded-r-full before:h-3/5 before:bg-white focus:outline-none group portal-nav-btn transition-colors duration-300" onclick="switchPortalTab('portal-overview', this)">
<iconify-icon className="text-lg text-white" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon> Overview
      </button>
<button className="w-full flex items-center gap-5 px-10 py-3.5 text-xs tracking-[0.15rem] uppercase text-white/50 hover:text-white hover:bg-white/[0.02] focus:outline-none transition-colors duration-300 group portal-nav-btn" onclick="switchPortalTab('portal-experiences', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon> Experiences
        <span className="ml-auto bg-white/10 border border-white/20 text-white text-[10px] px-2.5 py-0.5 rounded-full">New</span>
</button>
<button className="w-full flex items-center gap-5 px-10 py-3.5 text-xs tracking-[0.15rem] uppercase text-white/50 hover:text-white hover:bg-white/[0.02] focus:outline-none transition-colors duration-300 group portal-nav-btn" onclick="switchPortalTab('portal-travel', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon> Travel
      </button>
<div aria-hidden="true" className="text-[10px] tracking-[0.3rem] uppercase text-white/30 px-10 pt-8 pb-4">Preferences</div>
<button className="w-full flex items-center gap-5 px-10 py-3.5 text-xs tracking-[0.15rem] uppercase text-white/50 hover:text-white hover:bg-white/[0.02] focus:outline-none transition-colors duration-300 group portal-nav-btn" onclick="switchPortalTab('portal-settings', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Settings
      </button>
</nav>
<div className="p-8 border-t border-white/5">
<div className="font-serif text-lg text-white mb-2">J. Whitmore</div>
<div className="text-[10px] tracking-[0.2rem] uppercase text-neutral-400 mb-5">Black Tier</div>
<div aria-valuenow="100" className="h-1 bg-white/10 rounded-full overflow-hidden mb-2" role="progressbar"><div className="h-full w-full bg-gradient-to-r from-neutral-600 to-white rounded-full"></div></div>
</div>
<button aria-label="Secure Logout" className="w-full text-left text-[10px] tracking-[0.2rem] uppercase text-white/40 hover:text-white focus:outline-none p-8 border-t border-white/5 transition-colors duration-300" onclick="logout()">
      ← Secure Logout
    </button>
</aside>

<main className="bg-[#121212] flex flex-col h-full overflow-y-auto overflow-x-hidden relative custom-scrollbar z-20">
<div className="sticky top-0 z-20 flex items-end justify-between px-8 lg:px-16 py-10 border-b border-white/5 bg-[#121212]/95 backdrop-blur-xl">
<div>
<span className="block font-sans text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-3">Private Console</span>
<h1 className="font-serif text-3xl lg:text-4xl tracking-tight text-white">Good evening, James</h1>
</div>
<div className="text-right hidden sm:block">
<div className="text-[10px] tracking-[0.2rem] uppercase text-white/50 mb-3">Tuesday, 24 March</div>
<div className="flex items-center gap-3 justify-end text-[10px] tracking-[0.2rem] uppercase text-neutral-300">
<span aria-hidden="true" className="w-2 h-2 rounded-full bg-white animate-pulse-glow shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span> Concierge Online
        </div>
</div>

<button className="lg:hidden text-xs text-neutral-300 border border-neutral-500 px-4 py-2 rounded-full" onclick="logout()">Exit</button>
</div>
<div className="p-8 lg:p-16 flex-1 relative">

<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_50%)]"></div>

<div className="portal-tab-content active relative z-10" id="portal-overview">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-neutral-800/50 border border-neutral-700 p-6 rounded-2xl mb-12 gap-5 backdrop-blur-md shadow-lg" id="portal-banner">
<div className="text-sm tracking-wide text-white leading-relaxed flex items-center gap-4">
<iconify-icon className="text-white text-2xl" icon="solar:bell-bing-linear"></iconify-icon>
<span>Your concierge has confirmed the <strong className="text-white font-medium">Tuscany estate</strong>. Itinerary ready to review.</span>
</div>
<button aria-label="Dismiss Alert" className="text-[10px] tracking-[0.2rem] uppercase text-white/40 hover:text-white focus:outline-none transition-colors duration-300" onclick="document.getElementById('portal-banner').style.display='none'">Dismiss</button>
</div>

<div className="relative bg-[#171717] border border-white/5 p-10 lg:p-12 rounded-3xl mb-14 overflow-hidden group hover:shadow-[0_15px_50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-1000 ease-out pointer-events-none" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
<div className="relative z-10">
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-5">Featured Experience</div>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white mb-5 group-hover:translate-x-3 transition-transform duration-700 ease-out">Villa Cetinale, Tuscany</h2>
<p className="text-sm leading-relaxed tracking-wide text-white/60 max-w-2xl mb-10">18–25 April · Private Historic Estate · Siena Province, Italy<br/>Seven suites · Private chef · Cellar dinners</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<span className="border border-white/20 bg-white/5 text-white px-5 py-2 text-[10px] tracking-widest uppercase rounded-full inline-block backdrop-blur-md">Confirmed</span>
<button className="w-full sm:w-auto text-[10px] tracking-[0.2rem] uppercase border border-white/20 text-white px-10 py-4 hover:border-white hover:bg-white/10 focus:outline-none transition-all duration-300 active:scale-95 rounded-full" onclick="switchPortalTab('portal-travel', document.querySelector('.portal-nav-btn:nth-child(4)'))">View Full Itinerary</button>
</div>
</div>
</div>

<div>
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-6 pl-2">Confirmed Arrangements</div>
<div className="bg-[#171717] border border-white/5 rounded-3xl overflow-hidden overflow-x-auto shadow-xl">
<table className="w-full text-left border-collapse min-w-[650px]">
<thead className="bg-white/[0.02] border-b border-white/5">
<tr>
<th className="p-6 px-8 font-sans font-light text-[10px] tracking-[0.2rem] uppercase text-white/40" scope="col">Experience</th>
<th className="p-6 px-8 font-sans font-light text-[10px] tracking-[0.2rem] uppercase text-white/40" scope="col">Location</th>
<th className="p-6 px-8 font-sans font-light text-[10px] tracking-[0.2rem] uppercase text-white/40" scope="col">Date</th>
<th className="p-6 px-8 font-sans font-light text-[10px] tracking-[0.2rem] uppercase text-white/40" scope="col">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-300 cursor-pointer group">
<td className="p-6 px-8"><div className="font-serif text-lg text-white mb-2 group-hover:text-neutral-300 transition-colors duration-300">Arpège — Chef's Counter</div><div className="text-xs tracking-widest uppercase text-white/50">Alain Passard</div></td>
<td className="p-6 px-8 text-xs tracking-widest uppercase text-white/70">Paris 7e</td>
<td className="p-6 px-8 text-xs tracking-widest uppercase text-white/70">28 March</td>
<td className="p-6 px-8"><span className="border border-white/20 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full inline-block bg-white/5">Reserved</span></td>
</tr>
<tr className="hover:bg-white/[0.03] transition-colors duration-300 cursor-pointer group">
<td className="p-6 px-8"><div className="font-serif text-lg text-white mb-2 group-hover:text-neutral-300 transition-colors duration-300">Gulfstream G700</div><div className="text-xs tracking-widest uppercase text-white/50">LHR to TLV</div></td>
<td className="p-6 px-8 text-xs tracking-widest uppercase text-white/70">London / Tel Aviv</td>
<td className="p-6 px-8 text-xs tracking-widest uppercase text-white/70">10 April</td>
<td className="p-6 px-8"><span className="border border-white/20 text-white px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full inline-block bg-white/10">Confirmed</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="portal-tab-content relative z-10" id="portal-experiences">
<div className="flex items-end justify-between mb-10 pl-2">
<div>
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-3">Curated for you</div>
<h2 className="font-serif text-4xl tracking-tight text-white">Experience Intelligence</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-white/5 rounded-3xl bg-[#171717] overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl" onclick="openModal('modal-success', 'Request Sent')">
<div className="h-56 overflow-hidden relative">
<img alt="Japan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent"></div>
</div>
<div className="p-8 relative -mt-12 z-10">
<span className="bg-[#121212]/90 backdrop-blur-xl border border-white/20 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full inline-block mb-4 shadow-lg">AI Matched</span>
<h3 className="font-serif text-2xl text-white mb-3">Aman Kyoto Retreat</h3>
<p className="text-sm text-white/50 mb-8 line-clamp-2 leading-relaxed">Exclusive wellness pavilion access during cherry blossom season. Full privacy guaranteed.</p>
<button className="text-[10px] tracking-[0.2rem] uppercase text-white border border-white/30 px-8 py-3.5 hover:bg-white/10 transition-colors duration-300 w-full rounded-full">Request Access</button>
</div>
</div>

<div className="border border-white/5 rounded-3xl bg-[#171717] overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl" onclick="openModal('modal-success', 'Request Sent')">
<div className="h-56 overflow-hidden relative">
<img alt="Yacht" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent"></div>
</div>
<div className="p-8 relative -mt-12 z-10">
<span className="bg-[#121212]/90 backdrop-blur-xl border border-white/20 text-neutral-300 px-4 py-1.5 text-[10px] tracking-widest uppercase rounded-full inline-block mb-4 shadow-lg">Off-Market</span>
<h3 className="font-serif text-2xl text-white mb-3">Monaco GP Superyacht</h3>
<p className="text-sm text-white/50 mb-8 line-clamp-2 leading-relaxed">Trackside mooring secured. Includes paddock passes and private gala invitation.</p>
<button className="text-[10px] tracking-[0.2rem] uppercase text-white border border-white/30 px-8 py-3.5 hover:bg-white/10 transition-colors duration-300 w-full rounded-full">Request Access</button>
</div>
</div>
</div>
</div>

<div className="portal-tab-content relative z-10" id="portal-travel">
<h2 className="font-serif text-4xl tracking-tight text-white mb-10 pl-2">Travel Logistics</h2>
<div className="space-y-8">
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-6 border-b border-white/5 pb-3 pl-2">Upcoming Manifests</div>
<div className="bg-[#171717] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-start md:items-center justify-between group shadow-lg hover:shadow-xl transition-shadow duration-500">
<div className="flex gap-6 items-center w-full md:w-auto">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5 text-white">
<iconify-icon className="text-3xl" icon="solar:airplane-linear"></iconify-icon>
</div>
<div>
<div className="flex gap-4 items-center mb-2">
<h3 className="font-serif text-2xl text-white">London (FAR) to Tel Aviv (TLV)</h3>
</div>
<div className="text-sm tracking-wide text-white/50">Gulfstream G700 · Tail N884G · April 10, 09:00Z</div>
</div>
</div>
<button className="text-[10px] tracking-[0.2rem] uppercase border border-white/20 text-white px-8 py-3.5 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full shrink-0 whitespace-nowrap" onclick="openModal('modal-itinerary', 'Flight Itinerary')">View Itinerary</button>
</div>
<div className="text-[10px] tracking-[0.3rem] uppercase text-white/30 mt-14 mb-6 border-b border-white/5 pb-3 pl-2">Archived</div>
<div className="bg-[#121212] border border-white/5 p-8 rounded-3xl flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity duration-300">
<div>
<h3 className="font-serif text-xl text-white mb-2">Courchevel Altiport</h3>
<div className="text-[10px] tracking-widest uppercase text-white/50">Jan 12, 2026 · Helicopter Transfer</div>
</div>
</div>
</div>
</div>

<div className="portal-tab-content max-w-3xl relative z-10 pl-2" id="portal-settings">
<h2 className="font-serif text-4xl tracking-tight text-white mb-10">Personal Preferences</h2>
<form onsubmit="savePreferences(event)">
<div className="mb-14 bg-[#171717] border border-white/5 p-10 rounded-3xl shadow-lg">
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-8">Dietary &amp; Dining</div>
<div className="flex flex-col gap-6">
<label className="custom-checkbox flex items-center gap-5 cursor-pointer group">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/30 rounded-lg relative transition-colors duration-300 group-hover:border-white"></div>
<span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Vegetarian strict</span>
</label>
<label className="custom-checkbox flex items-center gap-5 cursor-pointer group">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/30 rounded-lg relative transition-colors duration-300 group-hover:border-white"></div>
<span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Gluten free</span>
</label>
<label className="custom-checkbox flex items-center gap-5 cursor-pointer group">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/30 rounded-lg relative transition-colors duration-300 group-hover:border-white"></div>
<span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Prefer intimate/private dining over main rooms</span>
</label>
</div>
</div>
<div className="mb-12 bg-[#171717] border border-white/5 p-10 rounded-3xl shadow-lg">
<div className="text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-8">Communications</div>
<div className="flex flex-col gap-8">
<label className="custom-toggle flex items-center justify-between cursor-pointer group">
<span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">SMS Alerts for critical updates</span>
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-12 h-6 border border-white/30 rounded-full relative transition-colors duration-300 group-hover:border-white">
<div className="w-5 h-5 bg-white/70 rounded-full absolute left-0.5 top-0.5 transition-transform duration-300 ease-out shadow-sm"></div>
</div>
</label>
<label className="custom-toggle flex items-center justify-between cursor-pointer group">
<span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Weekly Itinerary Summary (Email)</span>
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-12 h-6 border border-white/30 rounded-full relative transition-colors duration-300 group-hover:border-white">
<div className="w-5 h-5 bg-white/70 rounded-full absolute left-0.5 top-0.5 transition-transform duration-300 ease-out shadow-sm"></div>
</div>
</label>
</div>
</div>
<div className="flex items-center gap-6">
<button className="bg-white text-black px-10 py-4 text-[10px] tracking-[0.2rem] uppercase font-medium hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:outline-none transition-all duration-300 rounded-full active:scale-95" type="submit">Save Preferences</button>
<span className="text-xs text-neutral-400 opacity-0 transition-opacity duration-500" id="save-msg">Saved successfully.</span>
</div>
</form>
</div>
</div>
</main>

<aside className="bg-[#0A0A0A] border-l border-white/5 hidden lg:flex flex-col h-full overflow-hidden shadow-2xl z-30">

<div className="p-8 border-b border-white/5 flex-1 flex flex-col min-h-0 bg-gradient-to-b from-transparent to-[#121212]/50">
<div aria-hidden="true" className="flex items-center gap-4 text-[10px] tracking-[0.3rem] uppercase text-neutral-400 mb-8 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/10">Live Concierge</div>
<div className="flex-1 overflow-y-auto pr-3 flex flex-col gap-5 mb-6 scroll-smooth custom-scrollbar" id="chat-messages">
<div className="bg-neutral-800/80 border border-neutral-700 p-5 rounded-2xl rounded-tl-sm text-white/90 text-sm leading-relaxed shadow-sm">
<div className="text-[9px] tracking-[0.2rem] uppercase text-neutral-400 mb-3 font-medium">Emily (Lead)</div>
          Tuscany brief is ready. Shall I include a wine pairing schedule?
        </div>
<div className="bg-white/[0.05] border border-white/10 p-5 rounded-2xl rounded-tr-sm text-white/90 text-sm leading-relaxed text-right self-end w-[85%] shadow-sm">
          Yes. Also add a truffle foray.
        </div>
</div>
<form className="flex gap-3 shrink-0 relative" onsubmit="sendChat(event)">
<label className="sr-only" htmlFor="chat-input">Send a request to concierge</label>
<input autocomplete="off" className="flex-1 bg-white/[0.04] border border-white/10 px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-white focus:bg-white/[0.06] transition-colors duration-300 rounded-full shadow-inner" id="chat-input" placeholder="Type a request (e.g. 'Paris dinner')" required="" type="text"/>
<button aria-label="Send Message" className="absolute right-1.5 top-1.5 bottom-1.5 bg-white/10 text-white hover:bg-white hover:text-black w-10 transition-colors duration-300 rounded-full flex items-center justify-center" type="submit">
<iconify-icon className="text-lg" icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>

<div className="p-8 shrink-0 bg-[#0A0A0A]">
<div aria-hidden="true" className="flex items-center gap-4 text-[10px] tracking-[0.3rem] uppercase text-white/30 mb-6 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/5">This Month</div>
<div className="flex flex-col gap-4">
<div className="flex justify-between items-center py-3 px-3 hover:bg-white/[0.03] rounded-2xl transition-colors duration-300 cursor-pointer group">
<div>
<div className="font-serif text-base text-white mb-1 group-hover:text-neutral-300 transition-colors duration-300">Arpège Paris</div>
<div className="text-[10px] tracking-widest text-white/40 uppercase">Mar 28</div>
</div>
<span aria-hidden="true" className="w-2 h-2 rounded-full bg-white animate-pulse-glow"></span>
</div>
</div>
</div>
</aside>
</div>



<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl view-hidden flex flex-col items-center justify-center p-4 sm:p-8 transition-all duration-500" id="modal-overlay" role="dialog">
<div className="w-full max-w-2xl bg-[#121212] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative flex flex-col max-h-[90vh] rounded-3xl scale-95 opacity-0 transition-all duration-500 ease-out" id="modal-box">

<div className="flex items-center justify-between p-8 md:p-10 border-b border-white/5 shrink-0 bg-[#171717]/80 backdrop-blur-md rounded-t-3xl">
<h3 className="font-serif text-3xl tracking-tight text-white" id="modal-title">Modal Title</h3>
<button aria-label="Close Modal" className="text-white/40 hover:text-white transition-colors duration-300 focus:outline-none p-2 rounded-full hover:bg-white/[0.05]" onclick="closeModal()">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="p-8 md:p-10 overflow-y-auto flex-1 custom-scrollbar" id="modal-body">

</div>
</div>
</div>





    </>
  );
}
