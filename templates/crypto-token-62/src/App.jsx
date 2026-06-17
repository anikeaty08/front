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



  // Mobile Menu Logic
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const isClosed = menu.classList.contains('opacity-0');
    if (isClosed) {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  // Modal Logic
  function openModal() {
    const modal = document.getElementById('walletModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const modal = document.getElementById('walletModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  function simulateConnection(walletName) {
    const connectBtns = document.querySelectorAll('.connect-wallet-btn');
    connectBtns.forEach(btn => {
      btn.innerHTML = `<span class="flex items-center gap-2"><iconify-icon icon="solar:wallet-check-linear" class="text-green-500" width="18"></iconify-icon> Connected</span>`;
      btn.classList.add('bg-white/10', 'text-white', 'border', 'border-white/10');
      btn.classList.remove('bg-white', 'text-black');
    });
    closeModal();
  }

  // Live Activity Logic
  document.addEventListener("DOMContentLoaded", function() {
    const rawCoinNames = [
        "Dogecoin", "Pepe", "Shiba", "Bonk", "Wif", "Myro", "Slerf", "Bome",
        "Popcat", "Wen", "Jeo Boden", "Tremp", "Puff", "Mog", "Toshi"
    ];
    
    const container = document.getElementById('activity-container');
    const actions = ["launched", "deployed", "created"];

    function updateLiveActivity() {
      const name = rawCoinNames[Math.floor(Math.random() * rawCoinNames.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const time = Math.floor(Math.random() * 5) + 1;
      
      const newEl = document.createElement('div');
      newEl.className = 'activity-item animate-fade-up';
      newEl.innerHTML = `<span class="text-white font-medium">${name}</span> ${action} ${time} min ago`;
      
      container.innerHTML = '';
      container.appendChild(newEl);
    }

    updateLiveActivity();
    setInterval(updateLiveActivity, 4000);
  });

  // Parallax Logic (Fixed bounds to prevent glitching)
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    
    const mIntensity = 20; 
    
    const centerImg = document.querySelector('.iphone-img');
    const leftImg = document.querySelector('.left-img');
    const rightImg = document.querySelector('.right-img');

    if (centerImg) {
      centerImg.style.transform = `translate(${mouseX * mIntensity}px, ${mouseY * mIntensity}px)`;
    }
    if (leftImg) {
      leftImg.style.transform = `translate(${-200 + (mouseX * -mIntensity)}px, ${mouseY * -mIntensity}px)`;
    }
    if (rightImg) {
      rightImg.style.transform = `translate(${200 + (mouseX * -mIntensity)}px, ${mouseY * -mIntensity}px)`;
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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
<div className="absolute top-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
<img alt="Earth Background" className="absolute top-[10%] w-full max-w-[1200px] opacity-20 mix-blend-screen object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<nav className="fixed bg-[#050505]/70 z-50 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<img alt="logo" className="h-8 w-8 rounded-full border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-medium tracking-tight text-base hidden sm:block">Luna Launch</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="text-white" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Create Token</a>
<a className="hover:text-white transition-colors" href="#">Tools</a>
<a className="hover:text-white transition-colors" href="#">Liquidity Pool</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] connect-wallet-btn" onclick="openModal()">
          Connect Wallet
        </button>

<button className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-xl flex flex-col opacity-0 pointer-events-none transition-opacity duration-300" id="mobileMenu">
<div className="flex justify-end p-4 h-16 items-center">
<button className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col items-center justify-center flex-1 gap-8 text-lg font-medium tracking-tight">
<a className="text-white" href="#">Home</a>
<a className="text-gray-400 hover:text-white" href="#">Create Token</a>
<a className="text-gray-400 hover:text-white" href="#">Tools</a>
<a className="text-gray-400 hover:text-white" href="#">Liquidity Pool</a>
<button className="mt-4 bg-white text-black px-8 py-3 rounded-full text-base font-medium connect-wallet-btn" onclick="openModal(); toggleMobileMenu();">
        Connect Wallet
      </button>
</div>
</div>

<main className="flex-1 relative z-10 flex flex-col items-center w-full pt-32 pb-20">

<div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center animate-fade-up opacity-0">

<div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-10">
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Audited</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300">
<span className="text-white font-medium">480k+</span> Created
        </div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300">
<span className="text-white font-medium">99.9%</span> Success
        </div>
</div>

<div className="flex flex-col items-center gap-2 mb-8 h-16 overflow-hidden relative w-full max-w-xs">
<div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
          Live Activity
        </div>
<div className="flex flex-col items-center text-xs text-gray-300 gap-1 w-full text-center" id="activity-container"><div className="activity-item animate-fade-up"><span className="text-white font-medium">Wen</span> launched 1 min ago</div></div>
</div>

<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.1] max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        Launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Solana</span> Token.<br/>
        Take it to the moon.
      </h1>
<p className="text-sm md:text-base text-gray-400 max-w-2xl mb-10 leading-relaxed font-normal">
        Create and deploy your Solana coin effortlessly in seconds. Reach the world and scale without limits. No coding required.
      </p>

<button className="group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] flex text-base font-medium text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_40px_rgba(255,255,255,0.15)] gap-x-2 gap-y-2 items-center">
        Create Token
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="w-full max-w-6xl mx-auto mt-32 px-4 relative flex flex-col items-center animate-fade-up opacity-0 delay-200">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-16">
        Unlock the Full Potential
      </h2>
<div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center overflow-visible">

<img alt="App Interface" className="iphone-img absolute z-20 h-[350px] md:h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<img alt="Decoration" className="side-img left-img hidden md:block absolute z-10 h-[250px] md:h-[400px] object-cover rounded-3xl opacity-60 mix-blend-lighten blur-[1px] -translate-x-[200px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<img alt="Decoration" className="side-img right-img hidden md:block absolute z-10 h-[250px] md:h-[400px] object-cover rounded-3xl opacity-60 mix-blend-lighten blur-[1px] translate-x-[200px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="w-full max-w-5xl mx-auto px-4 mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-up opacity-0 delay-300">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-2">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Create &amp; Deploy in Minutes</h3>
<p className="text-sm text-gray-400 leading-relaxed font-normal">
          Turn your idea into reality with lightning-fast token creation. Whether for projects, communities, or innovation, deploy your Solana token in minutes.
        </p>
</div>
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-2">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Secure &amp; Audited</h3>
<p className="text-sm text-gray-400 leading-relaxed font-normal">
          Built on a secure foundation with standard contracts. Safe deployment ensures your token is protected from day one with 99.9% reliability.
        </p>
</div>
</div>
</main>

<footer className="w-full border-t border-white/5 bg-[#050505] relative z-10 mt-20 py-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="logo" className="h-6 w-6 rounded-full grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-xs text-gray-500 font-medium">© 2026 Luna Launcher</span>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-gray-500">
<a className="hover:text-gray-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-gray-300 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="walletModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="relative w-full max-w-sm transform overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 text-left shadow-2xl transition-all m-4 flex flex-col gap-6 animate-fade-up">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Connect Wallet</h3>
<button className="text-gray-500 hover:text-white transition-colors flex items-center justify-center" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<p className="text-xs font-normal text-gray-400">Select your preferred Solana wallet to connect to Luna Launch.</p>
<div className="flex flex-col gap-2 text-sm font-medium text-white">

<button className="group flex w-full items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition-all" onclick="simulateConnection('Phantom')">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ghost-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span>Phantom</span>
</div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-green-400">Detected</span>
</button>

<button className="group flex w-full items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition-all" onclick="simulateConnection('Solflare')">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span>Solflare</span>
</div>
</button>

<button className="group flex w-full items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition-all" onclick="simulateConnection('Backpack')">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:backpack-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span>Backpack</span>
</div>
</button>
</div>
</div>
</div>


    </>
  );
}
