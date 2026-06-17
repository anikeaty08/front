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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  let currentType = 'hug';
  let hugBalance = 4250;
  let kissBalance = 1850;

  const transactionIcons = ['solar:star-smile-linear','solar:heart-shine-linear','solar:balloon-linear','solar:confetti-minimalistic-linear','solar:flower-linear'];
  const transactionBgs = [
    { bg: 'bg-[#FFF1F2]', border: 'border-[#FECDD3]', iconBg: 'bg-[#FECDD3]', iconColor: 'text-[#E11D48]' },
    { bg: 'bg-[#FDF2F8]', border: 'border-[#FBCFE8]', iconBg: 'bg-[#FBCFE8]', iconColor: 'text-[#DB2777]' },
    { bg: 'bg-[#F0FDF4]', border: 'border-[#BBF7D0]', iconBg: 'bg-[#BBF7D0]', iconColor: 'text-[#16A34A]' },
    { bg: 'bg-[#FEFCE8]', border: 'border-[#FEF08A]', iconBg: 'bg-[#FEF08A]', iconColor: 'text-[#CA8A04]' },
    { bg: 'bg-[#EFF6FF]', border: 'border-[#BFDBFE]', iconBg: 'bg-[#BFDBFE]', iconColor: 'text-[#1D4ED8]' },
  ];

  function formatNumber(n) {
    return n.toLocaleString('en-US');
  }

  // Profile toggle
  function toggleProfile() {
    const popup = document.getElementById('profile-popup');
    if (popup.classList.contains('hidden')) {
      popup.classList.remove('hidden');
      popup.classList.remove('profile-pop-in');
      void popup.offsetWidth;
      popup.classList.add('profile-pop-in');
    } else {
      popup.classList.add('hidden');
    }
  }

  // Close profile popup when clicking outside
  document.addEventListener('click', function(e) {
    const popup = document.getElementById('profile-popup');
    const btn = document.getElementById('profile-btn');
    if (!popup.classList.contains('hidden') && !popup.contains(e.target) && !btn.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });

  function openModal(type) {
    currentType = type;
    const overlay = document.getElementById('modal-overlay');
    const card = document.getElementById('modal-card');
    const formView = document.getElementById('modal-form-view');
    const successView = document.getElementById('modal-success-view');

    // Reset views
    formView.classList.remove('hidden');
    successView.classList.add('hidden');
    document.getElementById('modal-name').value = '';
    document.getElementById('modal-slider').value = 50;
    document.getElementById('modal-amount-display').textContent = '50';

    if (type === 'hug') {
      document.getElementById('modal-icon-wrap').className = 'p-3 rounded-2xl border-2 bg-[#FEF08A] border-[#FDE047]';
      document.getElementById('modal-icon').setAttribute('icon', 'solar:hand-heart-linear');
      document.getElementById('modal-icon').className = 'text-[#713F12]';
      document.getElementById('modal-title').textContent = 'Send a Hug';
      document.getElementById('modal-title').className = 'text-2xl font-semibold tracking-tight text-[#713F12]';
      document.getElementById('modal-send-btn').className = 'w-full py-5 rounded-[1.5rem] border-4 text-xl font-semibold tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-lg flex items-center justify-center gap-3 bg-[#FDE047] text-[#713F12] border-[#FACC15] hover:bg-[#FEF08A]';
      document.getElementById('modal-btn-icon').setAttribute('icon', 'solar:hand-heart-linear');
      document.getElementById('modal-btn-text').textContent = 'Send Hug';
      document.getElementById('modal-slider').style.background = 'linear-gradient(to right, #FACC15 0%, #FACC15 10%, #FEF08A 10%, #FEF08A 100%)';
      document.getElementById('modal-slider').style.setProperty('--thumb-color', '#FACC15');
      document.querySelector('#modal-card > div').style.borderColor = '#FACC15';
      updateSliderStyle('hug');
    } else {
      document.getElementById('modal-icon-wrap').className = 'p-3 rounded-2xl border-2 bg-[#FBCFE8] border-[#F472B6]';
      document.getElementById('modal-icon').setAttribute('icon', 'solar:heart-angle-linear');
      document.getElementById('modal-icon').className = 'text-[#831843]';
      document.getElementById('modal-title').textContent = 'Send a Kiss';
      document.getElementById('modal-title').className = 'text-2xl font-semibold tracking-tight text-[#831843]';
      document.getElementById('modal-send-btn').className = 'w-full py-5 rounded-[1.5rem] border-4 text-xl font-semibold tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-lg flex items-center justify-center gap-3 bg-[#FBCFE8] text-[#831843] border-[#F472B6] hover:bg-[#FDF2F8]';
      document.getElementById('modal-btn-icon').setAttribute('icon', 'solar:heart-angle-linear');
      document.getElementById('modal-btn-text').textContent = 'Send Kiss';
      document.querySelector('#modal-card > div').style.borderColor = '#F472B6';
      updateSliderStyle('kiss');
    }

    overlay.classList.remove('hidden');
    card.classList.remove('pop-in');
    void card.offsetWidth;
    card.classList.add('pop-in');
  }

  function updateSliderStyle(type) {
    const slider = document.getElementById('modal-slider');
    const color = type === 'hug' ? '#FACC15' : '#F472B6';
    const light = type === 'hug' ? '#FEF08A' : '#FBCFE8';
    const pct = ((slider.value - 1) / (500 - 1)) * 100;
    slider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, ${light} ${pct}%, ${light} 100%)`;

    let styleEl = document.getElementById('slider-thumb-style');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'slider-thumb-style';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `input[type=range]::-webkit-slider-thumb { background: ${color}; } input[type=range]::-moz-range-thumb { background: ${color}; }`;

    slider.oninput = function() {
      document.getElementById('modal-amount-display').textContent = this.value;
      const p = ((this.value - 1) / (500 - 1)) * 100;
      this.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${p}%, ${light} ${p}%, ${light} 100%)`;
    };
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
  }

  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  function spawnConfetti(container, type) {
    const colors = type === 'hug'
      ? ['#FDE047','#FACC15','#FEF08A','#85D9A5','#34D399']
      : ['#FBCFE8','#F472B6','#FDF2F8','#FDE047','#85D9A5'];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      const size = Math.random() * 10 + 6;
      const left = Math.random() * 100;
      const delay = Math.random() * 0.4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const rotate = Math.random() * 360;
      el.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
        left: ${left}%;
        top: 20%;
        animation: confetti 0.9s ease-in ${delay}s forwards;
        transform: rotate(${rotate}deg);
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), 1400);
    }
  }

  function handleSend() {
    const name = document.getElementById('modal-name').value.trim();
    const amount = parseInt(document.getElementById('modal-slider').value);

    if (!name) {
      document.getElementById('modal-name').focus();
      document.getElementById('modal-name').style.borderColor = '#F87171';
      setTimeout(() => { document.getElementById('modal-name').style.borderColor = ''; }, 1200);
      return;
    }

    if (currentType === 'hug') {
      hugBalance = Math.max(0, hugBalance - amount);
      document.getElementById('hug-balance').textContent = formatNumber(hugBalance);
    } else {
      kissBalance = Math.max(0, kissBalance - amount);
      document.getElementById('kiss-balance').textContent = formatNumber(kissBalance);
    }

    addTransaction(name, amount, currentType);

    const formView = document.getElementById('modal-form-view');
    const successView = document.getElementById('modal-success-view');
    const confettiContainer = document.getElementById('confetti-container');

    formView.classList.add('hidden');
    successView.classList.remove('hidden');
    successView.style.borderColor = currentType === 'hug' ? '#FACC15' : '#F472B6';

    const iconWrap = document.getElementById('success-icon-wrap');
    const icon = document.getElementById('success-icon');
    if (currentType === 'hug') {
      iconWrap.className = 'p-5 rounded-[2rem] border-4 bg-[#FEF08A] border-[#FDE047] success-pop';
      icon.setAttribute('icon', 'solar:hand-heart-linear');
      icon.className = 'text-[#713F12]';
    } else {
      iconWrap.className = 'p-5 rounded-[2rem] border-4 bg-[#FBCFE8] border-[#F472B6] success-pop';
      icon.setAttribute('icon', 'solar:heart-angle-linear');
      icon.className = 'text-[#831843]';
    }

    document.getElementById('success-msg').innerHTML =
      `You sent <strong>${formatNumber(amount)}</strong> ${currentType === 'hug' ? 'hug' + (amount !== 1 ? 's' : '') : 'kiss' + (amount !== 1 ? 'es' : '')} to <strong>${name}</strong>! 🎉`;

    setTimeout(() => spawnConfetti(confettiContainer, currentType), 100);
  }

  function addTransaction(name, amount, type) {
    const list = document.getElementById('transaction-list');
    const style = transactionBgs[Math.floor(Math.random() * transactionBgs.length)];
    const icon = transactionIcons[Math.floor(Math.random() * transactionIcons.length)];
    const label = type === 'hug' ? 'Hug' + (amount !== 1 ? 's' : '') : 'Kiss' + (amount !== 1 ? 'es' : '');
    const emojis = ['💕','✨','🌟','💫','🌸','🎉','💝','🤗'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    const div = document.createElement('div');
    div.className = `flex items-center justify-between p-4 sm:p-5 ${style.bg} rounded-[1.5rem] border-2 ${style.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-sm opacity-0`;
    div.style.transform = 'translateY(20px)';
    div.innerHTML = `
      <div class="flex items-center gap-4 sm:gap-5">
        <div class="${style.iconBg} p-3 rounded-2xl ${style.iconColor} rotate-3">
          <iconify-icon icon="${icon}" width="28"></iconify-icon>
        </div>
        <div>
          <p class="text-xl font-semibold tracking-tight text-[#4C1D95]">${name}</p>
          <p class="text-base ${style.iconColor}/80">Just sent! ${emoji}</p>
        </div>
      </div>
      <div class="text-xl sm:text-2xl font-semibold tracking-tight text-[#DC2626] flex flex-col items-end">
        <span>- ${formatNumber(amount)}</span>
        <span class="text-xs text-[#DC2626]/70 uppercase">${label}</span>
      </div>
    `;

    list.insertBefore(div, list.firstChild);

    requestAnimationFrame(() => {
      div.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      div.style.opacity = '1';
      div.style.transform = 'translateY(0)';
    });
  }

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
      

<div className="fixed top-5 right-5 z-40">
<button className="relative bg-white border-4 border-[#E0F2FE] rounded-full w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(44,65,90,0.1)] hover:scale-110 hover:border-[#74C0FC] transition-all duration-200 group overflow-hidden" id="profile-btn" onclick="toggleProfile()">

<svg className="w-10 h-10" fill="none" viewbox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">

<circle cx="28" cy="28" fill="#E0F2FE" r="28"></circle>

<ellipse cx="28" cy="47" fill="#F472B6" rx="13" ry="10"></ellipse>

<path d="M15 56 Q18 42 28 42 Q38 42 41 56 Z" fill="#F472B6"></path>

<rect fill="#FDDCB5" height="6" rx="3" width="6" x="25" y="33"></rect>

<ellipse cx="28" cy="27" fill="#FDDCB5" rx="9" ry="10"></ellipse>

<ellipse cx="28" cy="20" fill="#92400E" rx="9.5" ry="6"></ellipse>
<path d="M19 22 Q17 30 18 36 Q20 34 22 32 Q21 27 21 22 Z" fill="#92400E"></path>
<path d="M37 22 Q39 30 38 36 Q36 34 34 32 Q35 27 35 22 Z" fill="#92400E"></path>
<path d="M19 20 Q20 14 28 13 Q36 14 37 20 Q33 17 28 17 Q23 17 19 20 Z" fill="#92400E"></path>
</svg>

<span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#34D399] border-2 border-white rounded-full"></span>
</button>

<div className="hidden absolute top-16 right-0 w-72 bg-white border-4 border-[#E0F2FE] rounded-[1.75rem] rounded-tr-[0.75rem] shadow-[6px_6px_0px_0px_rgba(44,65,90,0.1)] overflow-hidden profile-pop-in" id="profile-popup">

<div className="bg-gradient-to-r from-[#E0F2FE] to-[#FBCFE8] px-5 pt-5 pb-10 relative">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]/70">Account Profile</span>
<button className="bg-white/60 hover:bg-white p-1 rounded-lg transition-all duration-150 hover:scale-110" onclick="toggleProfile()">
<iconify-icon className="text-[#2C415A]/50" icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col items-center -mt-8 px-5 pb-5">
<div className="relative mb-3">
<div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#E0F2FE]">
<svg className="w-full h-full" fill="none" viewbox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" fill="#E0F2FE" r="28"></circle>
<ellipse cx="28" cy="47" fill="#F472B6" rx="13" ry="10"></ellipse>
<path d="M15 56 Q18 42 28 42 Q38 42 41 56 Z" fill="#F472B6"></path>
<rect fill="#FDDCB5" height="6" rx="3" width="6" x="25" y="33"></rect>
<ellipse cx="28" cy="27" fill="#FDDCB5" rx="9" ry="10"></ellipse>
<ellipse cx="28" cy="20" fill="#92400E" rx="9.5" ry="6"></ellipse>
<path d="M19 22 Q17 30 18 36 Q20 34 22 32 Q21 27 21 22 Z" fill="#92400E"></path>
<path d="M37 22 Q39 30 38 36 Q36 34 34 32 Q35 27 35 22 Z" fill="#92400E"></path>
<path d="M19 20 Q20 14 28 13 Q36 14 37 20 Q33 17 28 17 Q23 17 19 20 Z" fill="#92400E"></path>
</svg>
</div>

<div className="absolute -bottom-1 -right-1 bg-[#34D399] border-2 border-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="14"></iconify-icon>
</div>
</div>

<h4 className="text-xl font-semibold tracking-tight text-[#1E3A8A] mb-0.5">Nadine Echon</h4>

<div className="flex items-center gap-1.5 bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-full px-3 py-1 mb-4">
<iconify-icon className="text-[#16A34A]" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold text-[#16A34A] uppercase tracking-wider">Private Client</span>
</div>

<div className="w-full h-px bg-[#E5E0C4] mb-4"></div>

<div className="w-full space-y-3">
<div className="flex items-start gap-3">
<div className="bg-[#EFF6FF] p-2 rounded-xl border-2 border-[#BFDBFE] flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#1D4ED8]" icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wider text-[#2C415A]/50 mb-0.5">Address</p>
<p className="text-sm font-semibold text-[#2C415A] leading-snug">Marcels Heart Road 28<br/>Paraguay</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-[#FFF1F2] p-2 rounded-xl border-2 border-[#FECDD3] flex-shrink-0 mt-0.5">
<iconify-icon className="text-[#E11D48]" icon="solar:card-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wider text-[#2C415A]/50 mb-0.5">Client Since</p>
<p className="text-sm font-semibold text-[#2C415A]">2024</p>
</div>
</div>
</div>

<div className="w-full h-px bg-[#E5E0C4] my-4"></div>

<div className="w-full bg-[#F6F2D5] border-2 border-[#E5E0C4] rounded-2xl px-4 py-3 flex items-center justify-between">
<span className="text-xs font-semibold uppercase tracking-wider text-[#2C415A]/50">Account No.</span>
<span className="text-sm font-semibold text-[#1E3A8A] tracking-widest">LB–2024–💕</span>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-10 left-10 -rotate-12 animate-[bounce_4s_infinite]">
<iconify-icon className="text-[#85D9A5]/30" icon="solar:leaf-linear" width="96"></iconify-icon>
</div>
<div className="absolute top-40 right-20 rotate-45 animate-[pulse_3s_infinite]">
<iconify-icon className="text-[#85D9A5]/30" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-20 left-1/4 rotate-90 animate-[bounce_5s_infinite]">
<iconify-icon className="text-[#85D9A5]/30" icon="solar:leaf-linear" width="128"></iconify-icon>
</div>
<div className="absolute bottom-10 right-10 -rotate-45 animate-[pulse_4s_infinite]">
<iconify-icon className="text-[#85D9A5]/30" icon="solar:leaf-linear" width="80"></iconify-icon>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 hidden" id="modal-overlay" style={{background: 'rgba(30, 58, 138, 0.18)', backdropFilter: 'blur(6px)'}}>

<div className="relative w-full max-w-md pop-in" id="modal-card">

<div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem] z-20" id="confetti-container"></div>

<div className="bg-white rounded-[2rem] rounded-tl-[3rem] rounded-br-[3rem] border-4 p-8 shadow-[6px_6px_0px_0px_rgba(44,65,90,0.1)]" id="modal-form-view">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="p-3 rounded-2xl border-2" id="modal-icon-wrap">
<iconify-icon id="modal-icon" width="28"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight" id="modal-title"></h2>
</div>
<button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-xl border-2 border-gray-200 transition-all duration-200 hover:scale-110 hover:rotate-6" onclick="closeModal()">
<iconify-icon className="text-[#2C415A]/60" icon="solar:close-circle-linear" width="22"></iconify-icon>
</button>
</div>

<div className="mb-6">
<label className="block text-base font-semibold text-[#2C415A]/70 mb-2 uppercase tracking-wider">Send to</label>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon className="text-[#2C415A]/40" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-[#F6F2D5]/60 border-2 border-[#E5E0C4] rounded-2xl pl-11 pr-4 py-4 text-lg font-medium text-[#2C415A] placeholder-[#2C415A]/30 outline-none focus:border-[#85D9A5] transition-colors duration-200" id="modal-name" placeholder="Enter a name..." type="text"/>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<label className="text-base font-semibold text-[#2C415A]/70 uppercase tracking-wider">Amount</label>
<span className="text-2xl font-semibold tracking-tight text-[#1E3A8A]" id="modal-amount-display">50</span>
</div>
<input className="w-full" id="modal-slider" max="500" min="1" oninput="document.getElementById('modal-amount-display').textContent = this.value" type="range" value="50"/>
<div className="flex justify-between text-xs text-[#2C415A]/40 mt-2 font-medium">
<span>1</span>
<span>500</span>
</div>
</div>

<button className="w-full py-5 rounded-[1.5rem] border-4 text-xl font-semibold tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-lg flex items-center justify-center gap-3" id="modal-send-btn" onclick="handleSend()">
<iconify-icon id="modal-btn-icon" width="26"></iconify-icon>
<span id="modal-btn-text">Send</span>
</button>
</div>

<div className="hidden bg-white rounded-[2rem] rounded-tl-[3rem] rounded-br-[3rem] border-4 p-10 shadow-[6px_6px_0px_0px_rgba(44,65,90,0.1)] text-center" id="modal-success-view">
<div className="flex flex-col items-center gap-5">
<div className="p-5 rounded-[2rem] border-4 success-pop" id="success-icon-wrap">
<iconify-icon id="success-icon" width="56"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-[#1E3A8A]">Sent!</h3>
<p className="text-lg text-[#2C415A]/70 leading-relaxed" id="success-msg"></p>
<button className="mt-2 bg-[#F6F2D5] hover:bg-[#EDE9CC] border-2 border-[#E5E0C4] px-8 py-3 rounded-2xl text-base font-semibold text-[#2C415A] transition-all duration-200 hover:scale-105" onclick="closeModal()">
          Close
        </button>
</div>
</div>
</div>
</div>
<div className="max-w-2xl mx-auto relative z-10 space-y-10 mt-4 sm:mt-12">

<header className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
<div className="relative flex items-center justify-center w-24 h-24 bg-[#E0F2FE] rounded-[2rem] rounded-tl-[3rem] rounded-br-[3rem] border-4 border-[#74C0FC] shadow-[4px_4px_0px_0px_rgba(116,192,252,0.4)] rotate-3 transition-transform hover:rotate-6 hover:scale-105 duration-300">
<div className="animate-[bounce_3s_infinite]">
<iconify-icon className="text-[#0284C7]" icon="solar:ghost-smile-linear" width="48"></iconify-icon>
</div>
<div className="absolute -bottom-2 -right-2 bg-[#FDE047] p-1.5 rounded-full border-2 border-[#EAB308] animate-pulse">
<iconify-icon className="text-[#CA8A04] flex items-center justify-center" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1E3A8A] mb-1">Lüsebrink Bank</h1>
<p className="text-base sm:text-lg font-medium text-[#1E3A8A]/70 uppercase tracking-widest">Est. 2024 • Your Financial Partner</p>
</div>
</header>
<main className="space-y-10">

<section className="bg-[#85D9A5] border-4 border-[#34D399] rounded-[2rem] rounded-tr-[3.5rem] rounded-bl-[3.5rem] p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(20,83,45,0.15)] text-center relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_10px_0px_0px_rgba(20,83,45,0.15)]">
<div className="absolute -top-6 -right-6 bg-[#34D399]/20 w-32 h-32 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -left-10 bg-[#10B981]/10 w-40 h-40 rounded-full blur-xl animate-pulse"></div>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#064E3B] mb-6 relative z-10">Current Balance</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 relative z-10 mb-2">

<div className="flex flex-col items-center group cursor-pointer">
<div className="flex items-center justify-center gap-3 mb-2">
<div className="bg-white/40 p-3 rounded-2xl shadow-sm border-2 border-white/50 -rotate-6 transition-transform group-hover:-rotate-12 group-hover:scale-110 duration-300">
<iconify-icon className="text-[#047857]" icon="solar:user-hands-linear" width="36"></iconify-icon>
</div>
<span className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#064E3B] transition-all duration-500" id="hug-balance">4,250</span>
</div>
<p className="text-lg font-semibold text-[#047857] uppercase tracking-wider">Hugs</p>
</div>

<div className="hidden sm:block w-1 h-16 bg-[#34D399] rounded-full opacity-50"></div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="flex items-center justify-center gap-3 mb-2">
<div className="bg-white/40 p-3 rounded-2xl shadow-sm border-2 border-white/50 rotate-6 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">
<iconify-icon className="text-[#BE185D]" icon="solar:hearts-linear" width="36"></iconify-icon>
</div>
<span className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#064E3B] transition-all duration-500" id="kiss-balance">1,850</span>
</div>
<p className="text-lg font-semibold text-[#BE185D] uppercase tracking-wider">Kisses</p>
</div>
</div>
</section>

<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
<button className="group bg-[#FDE047] text-[#713F12] border-4 border-[#FACC15] rounded-[2rem] rounded-tl-[3rem] rounded-br-[3rem] px-8 py-5 text-lg sm:text-xl font-semibold tracking-tight shadow-[4px_4px_0px_0px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-[6px_8px_0px_0px_rgba(250,204,21,0.4)] hover:bg-[#FEF08A] flex items-center justify-center gap-3 flex-1" onclick="openModal('hug')">
<div className="group-hover:animate-bounce flex items-center">
<iconify-icon className="" icon="solar:hand-heart-linear" width="28"></iconify-icon>
</div>
        Send a Hug
      </button>
<button className="group bg-[#FBCFE8] text-[#831843] border-4 border-[#F472B6] rounded-[2rem] rounded-tr-[3rem] rounded-bl-[3rem] px-8 py-5 text-lg sm:text-xl font-semibold tracking-tight shadow-[4px_4px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-[6px_8px_0px_0px_rgba(244,114,182,0.4)] hover:bg-[#FDF2F8] flex items-center justify-center gap-3 flex-1" onclick="openModal('kiss')">
<div className="group-hover:animate-[pulse_1s_infinite] flex items-center">
<iconify-icon icon="solar:heart-angle-linear" width="28"></iconify-icon>
</div>
        Send a Kiss
      </button>
</div>

<section className="bg-white/80 backdrop-blur-md border-4 border-white rounded-[2rem] rounded-tl-[3rem] rounded-br-[3rem] p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(44,65,90,0.05)]">
<h3 className="text-2xl font-semibold tracking-tight text-[#1E3A8A] mb-8 flex items-center gap-3">
<span className="bg-[#E0F2FE] p-2 rounded-xl border-2 border-[#BAE6FD]">
<iconify-icon className="text-[#0284C7] flex items-center" icon="solar:history-linear" width="24"></iconify-icon>
</span>
        Love Transfers
      </h3>
<div className="space-y-5" id="transaction-list">

<div className="flex items-center justify-between p-4 sm:p-5 bg-[#FFF1F2] rounded-[1.5rem] border-2 border-[#FECDD3] transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
<div className="flex items-center gap-4 sm:gap-5">
<div className="bg-[#FECDD3] p-3 rounded-2xl text-[#E11D48] rotate-3 hover:animate-spin">
<iconify-icon icon="solar:cup-hot-linear" width="28"></iconify-icon>
</div>
<div className="">
<p className="text-xl font-semibold text-[#4C1D95] tracking-tight">Omar</p>
<p className="text-base text-[#E11D48]/80">Gay ass Nigga 🙈</p>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-[#059669] flex flex-col items-end">
<span>+ 50</span>
<span className="text-xs text-[#059669]/70 uppercase">Hugs</span>
</div>
</div>

<div className="flex items-center justify-between p-4 sm:p-5 bg-[#FDF2F8] rounded-[1.5rem] border-2 border-[#FBCFE8] transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
<div className="flex items-center gap-4 sm:gap-5">
<div className="bg-[#FBCFE8] p-3 rounded-2xl text-[#DB2777] -rotate-3 hover:animate-bounce">
<iconify-icon icon="solar:gift-linear" width="28"></iconify-icon>
</div>
<div className="">
<p className="text-xl font-semibold text-[#4C1D95] tracking-tight">Sister Xiara</p>
<p className="text-base text-[#DB2777]/80">Miss you so much! 💕</p>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-[#059669] flex flex-col items-end">
<span>+ 120</span>
<span className="text-xs text-[#059669]/70 uppercase">Kisses</span>
</div>
</div>

<div className="flex items-center justify-between p-4 sm:p-5 bg-[#F0FDF4] rounded-[1.5rem] border-2 border-[#BBF7D0] transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
<div className="flex items-center gap-4 sm:gap-5">
<div className="bg-[#BBF7D0] p-3 rounded-2xl text-[#16A34A] rotate-6 hover:animate-pulse">
<iconify-icon icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<div className="">
<p className="text-xl font-semibold text-[#4C1D95] tracking-tight">Doggo Ronda</p>
<p className="text-base text-[#16A34A]/80">Get yourself some treats 🦴</p>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-[#DC2626] flex flex-col items-end">
<span>- 1,200</span>
<span className="text-xs text-[#DC2626]/70 uppercase">Hugs</span>
</div>
</div>
</div>
</section>
</main>
<footer className="text-center pb-8 pt-4 group">
<p className="text-base font-medium text-[#2C415A]/50 flex items-center justify-center gap-2 cursor-pointer transition-colors group-hover:text-[#2C415A]/80">
<iconify-icon className="group-hover:animate-[bounce_2s_infinite]" icon="solar:bell-bing-linear" width="16"></iconify-icon>
      Lüsebrink Bank • Trust. Service. Integrity.
    </p>
</footer>
</div>


    </>
  );
}
