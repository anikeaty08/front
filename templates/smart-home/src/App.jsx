import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function() {
      const minTemp = 10;
      const maxTemp = 30;
      let currentTemp = 22;

      // Build radial ticks
      const dial = document.getElementById('dial');
      const ticksEl = dial.querySelector('#ticks');
      const labelsEl = dial.querySelector('#degree-labels');

      if (ticksEl && ticksEl.childElementCount === 0) {
        const totalTicks = 24; // 240° span / 10° per tick
        for (let i = 0; i <= totalTicks; i++) {
          const angle = -120 + (i * (240 / totalTicks));
          const tick = document.createElement('div');
          const isMajor = i % 6 === 0; // every 60°
          tick.className = 'absolute left-1/2 top-1/2 bg-slate-300 rounded';
          tick.style.width = '2px';
          tick.style.height = isMajor ? '12px' : '8px';
          tick.style.opacity = isMajor ? '0.9' : '0.6';
          tick.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-118px)`;
          ticksEl.appendChild(tick);
        }
      }

      // Place degree labels at -120°, 0°, 120°
      function placeLabel(text, angleDeg, radius) {
        const span = document.createElement('span');
        span.textContent = text;
        span.className = 'absolute text-[12px] text-slate-400 font-medium';
        span.style.transform = 'translate(-50%, -50%)';
        const center = { x: 130, y: 130 };
        const rad = angleDeg * (Math.PI / 180);
        const x = center.x + Math.cos(rad) * radius;
        const y = center.y + Math.sin(rad) * radius;
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        labelsEl.appendChild(span);
      }

      if (labelsEl && labelsEl.childElementCount === 0) {
        placeLabel('10°', -120, 140);
        placeLabel('20°', 0, 140);
        placeLabel('30°', 120, 140);
      }

      // Sync dial background and knob position
      function updateLocalDial(temp) {
        currentTemp = Math.max(minTemp, Math.min(maxTemp, temp));
        const tempValueEl = document.getElementById('tempValue');
        if (tempValueEl) tempValueEl.textContent = currentTemp;

        const angle = ((currentTemp - minTemp) / (maxTemp - minTemp)) * 240;
        if (dial) {
          dial.style.background = `conic-gradient(from -120deg, #a855f7 0deg, #f472b6 ${angle}deg, #e2e8f0 ${angle}deg, #e2e8f0 360deg)`;
        }

        // Position knob slightly inside the progress ring
        const radius = 116; // slightly inside the 120 radius so it's within the ring
        const center = { x: 130, y: 130 };
        const startAngle = -120;
        const radians = (startAngle + angle) * (Math.PI / 180);
        const x = center.x + Math.cos(radians) * radius - 7; // minus half knob size
        const y = center.y + Math.sin(radians) * radius - 7;
        const knob = document.getElementById('knob');
        if (knob) {
          knob.style.left = `${x}px`;
          knob.style.top = `${y}px`;
        }
      }

      updateLocalDial(22);

      // Expose a small bridge so external/global interactions (if any) can call this
      // without overriding existing global functions.
      dial.__updateLocalDial = updateLocalDial;
    })();
  


    (function() {
      let currentColorTemp = 'warm';
      let currentBrightness = 75;

      // Brightness slider functionality
      const brightnessSlider = document.getElementById('brightness-slider');
      const brightnessValue = document.getElementById('brightness-value');
      const brightnessDisplay = document.getElementById('brightness-display');
      const lightGlow = document.getElementById('light-glow');
      const bulbIcon = document.getElementById('bulb-icon');

      function updateBrightness(value) {
        currentBrightness = value;
        brightnessValue.textContent = value + '%';
        brightnessDisplay.textContent = value + '%';
        
        // Update slider background
        brightnessSlider.style.background = `linear-gradient(to right, #a855f7 0%, #f472b6 ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)`;
        
        // Update glow effect
        const glowOpacity = value / 100;
        const glowIntensity = Math.max(0.2, glowOpacity);
        
        if (value > 0) {
          lightGlow.style.opacity = glowOpacity;
          
          // Color based on temperature
          let glowColor;
          if (currentColorTemp === 'cool') {
            glowColor = `radial-gradient(circle at center, rgba(147, 197, 253, ${glowIntensity * 0.5}) 0%, rgba(191, 219, 254, ${glowIntensity * 0.3}) 40%, transparent 70%)`;
          } else if (currentColorTemp === 'warm') {
            glowColor = `radial-gradient(circle at center, rgba(245, 158, 11, ${glowIntensity * 0.4}) 0%, rgba(251, 191, 36, ${glowIntensity * 0.25}) 40%, transparent 70%)`;
          } else {
            glowColor = `radial-gradient(circle at center, rgba(248, 250, 252, ${glowIntensity * 0.4}) 0%, rgba(241, 245, 249, ${glowIntensity * 0.25}) 40%, transparent 70%)`;
          }
          lightGlow.style.background = glowColor;
          
          // Update bulb icon color
          if (value > 50) {
            bulbIcon.style.color = currentColorTemp === 'cool' ? '#60a5fa' : currentColorTemp === 'warm' ? '#f59e0b' : '#f1f5f9';
            bulbIcon.style.filter = `drop-shadow(0 0 ${value / 10}px ${currentColorTemp === 'cool' ? '#93c5fd' : currentColorTemp === 'warm' ? '#fbbf24' : '#e2e8f0'})`;
          } else {
            bulbIcon.style.color = '#9ca3af';
            bulbIcon.style.filter = 'none';
          }
        } else {
          lightGlow.style.opacity = '0';
          bulbIcon.style.color = '#9ca3af';
          bulbIcon.style.filter = 'none';
        }
      }

      brightnessSlider.addEventListener('input', (e) => {
        updateBrightness(e.target.value);
      });

      // Color temperature functionality
      window.setColorTemp = function(temp) {
        currentColorTemp = temp;
        const tempLabel = document.getElementById('temp-label');
        const coolBtn = document.getElementById('temp-cool');
        const warmBtn = document.getElementById('temp-warm');
        const daylightBtn = document.getElementById('temp-daylight');

        // Reset all buttons
        [coolBtn, warmBtn, daylightBtn].forEach(btn => {
          btn.className = 'py-3 px-4 rounded-xl text-[13px] font-medium bg-white ring-1 ring-slate-200/80 text-slate-700 hover:bg-slate-50 transition-colors';
        });

        // Set active button
        if (temp === 'cool') {
          coolBtn.className = 'py-3 px-4 rounded-xl text-[13px] font-medium bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-[0_8px_16px_-8px_rgba(124,58,237,0.5)]';
          tempLabel.textContent = 'Cool';
        } else if (temp === 'warm') {
          warmBtn.className = 'py-3 px-4 rounded-xl text-[13px] font-medium bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-[0_8px_16px_-8px_rgba(124,58,237,0.5)]';
          tempLabel.textContent = 'Warm';
        } else {
          daylightBtn.className = 'py-3 px-4 rounded-xl text-[13px] font-medium bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-[0_8px_16px_-8px_rgba(124,58,237,0.5)]';
          tempLabel.textContent = 'Daylight';
        }

        // Update glow with current brightness
        updateBrightness(currentBrightness);
      };

      // Room toggle functionality
      window.toggleRoomLight = function(checkbox) {
        const statusText = checkbox.closest('.flex').querySelector('.room-status');
        const iconContainer = checkbox.closest('.flex').querySelector('div > div');
        const icon = iconContainer.querySelector('svg');
        
        if (checkbox.checked) {
          statusText.textContent = statusText.textContent.includes('Living') ? '3 lights on' : statusText.textContent.includes('Bedroom') ? '2 lights on' : '2 lights on';
          statusText.classList.remove('text-slate-500');
          statusText.classList.add('text-emerald-600');
          iconContainer.className = 'flex text-fuchsia-600 bg-gradient-to-tr from-fuchsia-200 to-pink-100 w-10 h-10 rounded-xl items-center justify-center';
          icon.classList.remove('text-slate-400');
          icon.classList.add('text-amber-600');
        } else {
          statusText.textContent = 'All lights off';
          statusText.classList.remove('text-emerald-600');
          statusText.classList.add('text-slate-500');
          iconContainer.className = 'w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center';
          icon.classList.remove('text-amber-600');
          icon.classList.add('text-slate-400');
        }
      };

      // Initialize
      updateBrightness(75);
    })();
  


      lucide.createIcons();

      // Tab switching
      let currentTab = 'room';
      function switchTab(tab) {
        currentTab = tab;
        const indicator = document.getElementById('tab-indicator');
        const roomBtn = document.getElementById('tab-room');
        const devicesBtn = document.getElementById('tab-devices');
        
        if (tab === 'room') {
          indicator.style.transform = 'translateX(0)';
          roomBtn.classList.remove('text-slate-500');
          roomBtn.classList.add('text-white');
          devicesBtn.classList.remove('text-white');
          devicesBtn.classList.add('text-slate-500');
        } else {
          indicator.style.transform = 'translateX(calc(100% + 4px))';
          devicesBtn.classList.remove('text-slate-500');
          devicesBtn.classList.add('text-white');
          roomBtn.classList.remove('text-white');
          roomBtn.classList.add('text-slate-500');
        }
      }

      // Room toggle functionality
      function toggleRoom(checkbox) {
        const statusText = checkbox.parentElement.parentElement.querySelector('span');
        if (checkbox.checked) {
          statusText.textContent = 'ON';
          statusText.classList.remove('text-slate-500');
          statusText.classList.add('text-emerald-600');
        } else {
          statusText.textContent = 'OFF';
          statusText.classList.remove('text-emerald-600');
          statusText.classList.add('text-slate-500');
        }
      }

      // Bottom nav active state
      let currentNav = 'home';
      function setNavActive(nav) {
        currentNav = nav;
        const homeBtn = document.getElementById('nav-home');
        const userBtn = document.getElementById('nav-user');
        
        if (nav === 'home') {
          homeBtn.classList.remove('opacity-60');
          userBtn.classList.add('opacity-60');
        } else {
          userBtn.classList.remove('opacity-60');
          homeBtn.classList.add('opacity-60');
        }
      }

      // Mic activation with pulse effect
      function activateMic() {
        const micBtn = document.getElementById('nav-mic');
        micBtn.style.transform = 'translateY(-12px) scale(0.95)';
        setTimeout(() => {
          micBtn.style.transform = 'translateY(-12px) scale(1.05)';
        }, 150);
        setTimeout(() => {
          micBtn.style.transform = 'translateY(-12px) scale(1)';
        }, 300);
      }

      // Thermostat dial control
      let currentTemp = 22;
      const minTemp = 10;
      const maxTemp = 30;
      
      function updateDial(temp) {
        currentTemp = Math.max(minTemp, Math.min(maxTemp, temp));
        document.getElementById('tempValue').textContent = currentTemp;
        
        const angle = ((currentTemp - minTemp) / (maxTemp - minTemp)) * 240;
        const dial = document.getElementById('dial');
        dial.style.background = `conic-gradient(#a855f7 0deg, #f472b6 ${angle}deg, #e2e8f0 ${angle}deg, #e2e8f0 360deg)`;
        
        const radius = 120;
        const center = { x: 130, y: 130 };
        const startAngle = -120;
        const radians = (startAngle + angle) * (Math.PI / 180);
        const x = center.x + Math.cos(radians) * (radius - 10);
        const y = center.y + Math.sin(radians) * (radius - 10);
        const knob = document.getElementById('knob');
        knob.style.left = `${x}px`;
        knob.style.top = `${y}px`;
      }

      // Dial interaction
      const dialElement = document.getElementById('dial');
      let isDragging = false;

      dialElement.addEventListener('mousedown', startDrag);
      dialElement.addEventListener('touchstart', startDrag);
      
      function startDrag(e) {
        isDragging = true;
        updateTempFromEvent(e);
      }

      document.addEventListener('mousemove', (e) => {
        if (isDragging) updateTempFromEvent(e);
      });
      
      document.addEventListener('touchmove', (e) => {
        if (isDragging) updateTempFromEvent(e);
      });

      document.addEventListener('mouseup', () => isDragging = false);
      document.addEventListener('touchend', () => isDragging = false);

      function updateTempFromEvent(e) {
        const rect = dialElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
        let normalizedAngle = angle + 120;
        if (normalizedAngle < 0) normalizedAngle += 360;
        
        if (normalizedAngle <= 240) {
          const temp = minTemp + (normalizedAngle / 240) * (maxTemp - minTemp);
          updateDial(Math.round(temp));
        }
      }

      // Dropdown functionality
      function toggleDropdown() {
        const menu = document.getElementById('dropdown-menu');
        const icon = document.getElementById('dropdown-icon');
        menu.classList.toggle('hidden');
        icon.style.transform = menu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
      }

      function selectDevice(device) {
        document.getElementById('selected-device').textContent = device;
        toggleDropdown();
      }

      // Mode toggle
      let activeMode = 'flame';
      function toggleMode(mode) {
        const flameBtn = document.getElementById('mode-flame');
        const leafBtn = document.getElementById('mode-leaf');
        
        if (mode === 'flame') {
          flameBtn.className = 'w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 ring-1 ring-white shadow-[0_10px_24px_-12px_rgba(244,63,94,0.5)] flex items-center justify-center text-white transition-all duration-300';
          leafBtn.className = 'w-14 h-14 rounded-2xl bg-slate-100 ring-1 ring-white shadow-[inset_0_8px_24px_-12px_rgba(2,6,23,0.15),0_10px_24px_-12px_rgba(2,6,23,0.25)] flex items-center justify-center text-emerald-600 transition-all duration-300';
        } else {
          leafBtn.className = 'w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-500 ring-1 ring-white shadow-[0_10px_24px_-12px_rgba(16,185,129,0.5)] flex items-center justify-center text-white transition-all duration-300';
          flameBtn.className = 'w-14 h-14 rounded-2xl bg-slate-100 ring-1 ring-white shadow-[inset_0_8px_24px_-12px_rgba(2,6,23,0.15),0_10px_24px_-12px_rgba(2,6,23,0.25)] flex items-center justify-center text-pink-600 transition-all duration-300';
        }
        lucide.createIcons();
      }

      // Brightness slider
      const brightnessSlider = document.getElementById('brightness-slider');
      const brightnessValue = document.getElementById('brightness-value');
      
      if (brightnessSlider) {
        brightnessSlider.addEventListener('input', (e) => {
          const value = e.target.value;
          brightnessValue.textContent = value + '%';
          e.target.style.background = `linear-gradient(to right, #a855f7 0%, #f472b6 ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)`;
        });
      }

      // Initialize dial
      updateDial(22);

      // Hide scrollbar
      const style = document.createElement('style');
      style.textContent = '.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }';
      document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full -z-10 h-screen blur-md bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/704e1fb3-a82b-42a1-ad5f-f30d6c0fb05c_3840w.jpg")'}}></div>

<div className="min-h-screen #8e8aa2)] flex w-full pt-4 pr-4 pb-4 pl-4 items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2)">
<div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1600px] gap-x-8 gap-y-8" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)">

<div className="overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 w-[360px] h-[780px] ring-white/70 ring-1 rounded-[36px] mr-auto ml-auto relative shadow-[0_20px_60px_-10px_rgba(30,41,59,0.35)] animate-in">

<div className="px-5 pt-5 pb-2 flex items-center justify-between animate-in delay-100">
<span className="text-xs text-slate-500">9:41</span>
<div className="flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-5 h-5" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="px-5 flex items-center justify-between animate-in delay-200">
<h1 className="text-[28px] leading-tight tracking-tight font-semibold text-slate-900">Home</h1>
<button className="p-2.5 rounded-2xl bg-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70 hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-settings w-5 h-5 text-slate-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="px-5 mt-1 flex items-center justify-between animate-in delay-300">
<p className="text-[13px] text-slate-500">Family members</p>
<div className="flex -space-x-3">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6bf88b1-5b04-404d-b9f2-373b9e95fdee_320w.webp" style={{}}/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aabbc37d-1c21-4f44-b641-56d7cd4bd5d6_320w.webp" style={{}}/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33229737-20be-4a49-8ac0-72e6d91d7a14_320w.webp" style={{}}/>
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-[11px] text-slate-600">
        +3</div>
</div>
</div>

<div className="px-5 mt-4 animate-in delay-400">
<div className="relative rounded-3xl p-5 overflow-hidden bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-500 text-white shadow-[0_20px_60px_-10px_rgba(124,58,237,0.55)]">
<div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(800px_300px_at_10%_-10%,rgba(255,255,255,0.6),transparent_60%)]">
</div>
<div className="flex items-start justify-between">
<div className="">
<div className="text-sm/5 opacity-90">My Location</div>
<div className="text-[13px] opacity-90">Montreal</div>
</div>
<div className="text-[44px] font-semibold -mt-2 tracking-tight">-10°</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[13px] opacity-90">
<svg className="lucide lucide-cloud-sun w-4 h-4" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
          Partly Cloudy
        </div>
<div className="text-[12px] opacity-90">H: 2° L: 12°</div>
</div>
</div>
</div>

<div className="px-5 mt-4 animate-in delay-500">
<div className="relative w-full bg-white rounded-2xl p-1 flex items-center gap-1 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/70">
<div className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-500 rounded-xl shadow-[0_8px_16px_-8px_rgba(124,58,237,0.5)] transition-transform duration-300 ease-out" id="tab-indicator">
</div>
<button className="relative z-10 flex-1 py-2.5 rounded-xl text-white text-[13px] font-medium transition-colors duration-300" id="tab-room" onclick="switchTab('room')">Room</button>
<button className="relative z-10 flex-1 py-2.5 rounded-xl text-slate-500 text-[13px] font-medium transition-colors duration-300" id="tab-devices" onclick="switchTab('devices')">Devices</button>
</div>
</div>

<div className="overflow-x-auto overflow-y-visible xl:mt-10 mt-10 mb-14 pr-4 pl-5" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(6)">
<div className="flex snap-x scrollbar-hide pb-2 gap-x-4 gap-y-4">

<div className="min-w-[200px] snap-start overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(2,6,23,0.18)] transition-shadow flex-shrink-0 bg-white ring-slate-200/70 ring-1 rounded-[22px] shadow-2xl animate-in delay-600">
<div className="relative h-28">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1d8e82a5-9911-4e1e-8e57-342e09da6d37_800w.jpg" style={{}}/>
<button className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] text-slate-600 flex items-center gap-1 hover:bg-white transition-colors">
<svg className="lucide lucide-more-horizontal w-3.5 h-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="text-[15px] font-medium text-slate-900">Master Bedroom</div>
<div className="text-[12px] text-slate-500 mt-0.5">4 devices</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-[12px] font-medium text-emerald-600">ON</span>

<label className="inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" onchange="toggleRoom(this)" type="checkbox"/>
<span className="transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500 bg-slate-200 w-12 h-6 rounded-full relative">
<span className="transition-transform duration-300 peer-checked:translate-x-6 bg-white w-5 h-5 rounded-full absolute top-0.5 left-0.5 shadow-md"></span>
</span>
</label>
</div>
<div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
<div className="flex gap-1 gap-x-1 gap-y-1 items-center">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="">22°C</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span className="">65%</span>
</div>
</div>
</div>
</div>

<div className="min-w-[200px] snap-start ring-1 ring-slate-200/70 overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(2,6,23,0.18)] transition-shadow flex-shrink-0 bg-white rounded-[22px] shadow-2xl animate-in delay-700">
<div className="relative h-28">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aeabc710-5a69-4f17-8841-2f05dab9a6bd_800w.jpg" style={{}}/>
<button className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] text-slate-600 flex items-center gap-1 hover:bg-white transition-colors">
<svg className="lucide lucide-more-horizontal w-3.5 h-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="text-[15px] font-medium text-slate-900">Living Room</div>
<div className="text-[12px] text-slate-500 mt-0.5">15 devices</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-[12px] font-medium text-slate-500">OFF</span>

<label className="inline-flex items-center cursor-pointer">
<input className="peer sr-only" onchange="toggleRoom(this)" type="checkbox"/>
<span className="w-12 h-6 rounded-full bg-slate-200 relative transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500">
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-6"></span>
</span>
</label>
</div>
<div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="">20°C</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span>58%</span>
</div>
</div>
</div>
</div>

<div className="min-w-[200px] snap-start bg-white rounded-[22px] shadow-[0_20px_40px_-12px_rgba(2,6,23,0.12)] ring-1 ring-slate-200/70 overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(2,6,23,0.18)] transition-shadow flex-shrink-0 animate-in delay-800">
<div className="relative h-28">
<img alt="" className="w-full h-full object-cover" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; img:nth-of-type(1)" data-element-src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9032027b-8dda-4e82-8d04-90be4365095c_800w.webp" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9032027b-8dda-4e82-8d04-90be4365095c_800w.webp" style={{}}/>
<button className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] text-slate-600 flex items-center gap-1 hover:bg-white transition-colors">
<svg className="lucide lucide-more-horizontal w-3.5 h-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="p-4">
<div className="text-[15px] font-medium text-slate-900" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)">Washroom</div>
<div className="text-[12px] text-slate-500 mt-0.5">6 devices</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-[12px] font-medium text-emerald-600">ON</span>

<label className="inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" onchange="toggleRoom(this)" type="checkbox"/>
<span className="w-12 h-6 rounded-full bg-slate-200 relative transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500">
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-6"></span>
</span>
</label>
</div>
<div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="">18°C</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span>72%</span>
</div>
</div>
</div>
</div>

<div className="min-w-[200px] snap-start bg-white rounded-[22px] shadow-[0_20px_40px_-12px_rgba(2,6,23,0.12)] ring-1 ring-slate-200/70 overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(2,6,23,0.18)] transition-shadow flex-shrink-0 animate-in delay-900">
<div className="relative h-28">
<img alt="" className="w-full h-full object-cover" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; div:nth-of-type(4) &gt; div:nth-of-type(1) &gt; img:nth-of-type(1)" data-element-src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d9dedb0d-89b4-41a5-828e-dde67dac4716_800w.webp" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d9dedb0d-89b4-41a5-828e-dde67dac4716_800w.webp" style={{}}/>
<button className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] text-slate-600 flex items-center gap-1 hover:bg-white transition-colors">
<svg className="lucide lucide-more-horizontal w-3.5 h-3.5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="p-4">
<div className="text-[15px] font-medium text-slate-900" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; div:nth-of-type(4) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)">Diner room</div>
<div className="text-[12px] text-slate-500 mt-0.5">3 devices</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-[12px] font-medium text-slate-500">OFF</span>

<label className="inline-flex items-center cursor-pointer">
<input className="peer sr-only" onchange="toggleRoom(this)" type="checkbox"/>
<span className="w-12 h-6 rounded-full bg-slate-200 relative transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500">
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-6"></span>
</span>
</label>
</div>
<div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="">19°C</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span>68%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-0 right-0 bottom-0 pb-3 animate-in delay-1000">
<div className="relative mx-4 h-20 rounded-[28px] bg-gradient-to-tr from-slate-900 to-slate-800 text-white shadow-[0_20px_60px_-10px_rgba(15,23,42,0.6)]">


<div className="flex lg:bg-gradient-to-b lg:from-[#37465c] lg:to-[#121c2b] h-full rounded-3xl pr-8 pb-5 pl-8 relative items-end justify-between" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(7) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">
<button className="flex flex-col items-center gap-1 text-[11px] transition-all duration-300" id="nav-home" onclick="setNavActive('home')">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button className="-mt-12 flex hover:scale-105 active:scale-95 transition-transform duration-300 bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-500 w-16 h-16 ring-white/30 ring-8 rounded-full relative shadow-[0_24px_60px_-10px_rgba(124,58,237,0.6)] backdrop-blur-sm items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(7) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(2)" id="nav-mic" onclick="activateMic()" style={{background: 'linear-gradient(to top right, rgba(217, 70, 239, 0.95), rgba(139, 92, 246, 0.95), rgba(99, 102, 241, 0.95))'}}>
<svg className="lucide lucide-mic w-7 h-7 text-white" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] opacity-60 transition-all duration-300" id="nav-user" onclick="setNavActive('user')">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
<div className="mx-auto mt-2 w-28 h-1 rounded-full bg-slate-300"></div>
</div>
</div>

<div className="overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 w-[360px] h-[780px] ring-white/70 ring-1 rounded-[36px] mr-auto ml-auto relative shadow-[0_20px_60px_-10px_rgba(30,41,59,0.35)] animate-in delay-200" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2)">

<div className="flex pt-5 pr-5 pb-2 pl-5 items-center justify-between animate-in delay-300" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)">
<span className="text-xs text-slate-500">9:41</span>
<div className="flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-5 h-5" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex pr-5 pl-5 items-center justify-between animate-in delay-400" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2)">
<button className="p-2.5 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-chevron-left w-5 h-5 text-slate-700" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] md:text-[22px] tracking-tight font-semibold text-slate-900">Thermostat</h2>
<button className="p-2.5 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-settings w-5 h-5 text-slate-700" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="mt-3 pr-5 pl-5 animate-in delay-500" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(3)">
<div className="mx-auto w-[260px]">
<div className="relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="relative cursor-pointer transition-all duration-300 w-[260px] h-[260px] border-[#ffffff] border rounded-full mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_14px_40px_-10px_rgba(2,6,23,0.12),0_30px_60px_-20px_rgba(2,6,23,0.15)]" id="dial" style={{background: 'conic-gradient(rgb(168, 85, 247) 0deg, rgb(244, 114, 182) 120deg, rgb(226, 232, 240) 120deg, rgb(226, 232, 240) 360deg)'}}>

<div className="pointer-events-none absolute inset-0" id="ticks"><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '12px', opacity: '0.9', transform: 'translate(-50%, -50%) rotate(-120deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-110deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-100deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-90deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-80deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-70deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '12px', opacity: '0.9', transform: 'translate(-50%, -50%) rotate(-60deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-50deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-40deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-30deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-20deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(-10deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '12px', opacity: '0.9', transform: 'translate(-50%, -50%) rotate(0deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(10deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(20deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(30deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(40deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(50deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '12px', opacity: '0.9', transform: 'translate(-50%, -50%) rotate(60deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(70deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(80deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(90deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(100deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '8px', opacity: '0.6', transform: 'translate(-50%, -50%) rotate(110deg) translateY(-118px)'}}></div><div className="absolute left-1/2 top-1/2 bg-slate-300 rounded" style={{width: '2px', height: '12px', opacity: '0.9', transform: 'translate(-50%, -50%) rotate(120deg) translateY(-118px)'}}></div></div>
<div className="pointer-events-none absolute inset-0" id="degree-labels"><span className="absolute text-[12px] text-slate-400 font-medium" style={{transform: 'translate(-50%, -50%)', left: '60px', top: '8.75644px'}}>10°</span><span className="absolute text-[12px] text-slate-400 font-medium" style={{transform: 'translate(-50%, -50%)', left: '270px', top: '130px'}}>20°</span><span className="absolute text-[12px] text-slate-400 font-medium" style={{transform: 'translate(-50%, -50%)', left: '60px', top: '251.244px'}}>30°</span></div>
<div className="flex bg-gradient-to-b from-white to-slate-100 w-full h-full ring-white/80 ring-1 rounded-full relative shadow-2xl items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3)">

<div className="text-center">
<div className="text-[12px] text-slate-500 tracking-wide mb-2" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">HEATING</div>
<div className="text-[46px] leading-none md:text-slate-300 font-semibold text-slate-800 tracking-tight" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2)" id="tempValue">20</div>
<div className="mt-2 flex items-center justify-center gap-1 text-emerald-600">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
</div>

</div>
</div>
</div>
</div>

</div>

<div className="mt-5 pr-5 pl-5 animate-in delay-600" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(4)">
<button className="cursor-pointer transition-all duration-300 flex xl:pr-4 w-full h-[54px] border-[#ffffff] border rounded-2xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_14px_40px_-10px_rgba(2,6,23,0.12),0_30px_60px_-20px_rgba(2,6,23,0.15)] items-center justify-start" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(4) &gt; button:nth-of-type(1)" onclick="toggleDropdown()">
<span className="text-center" id="selected-device">Device 1</span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 w-4 h-4 absolute right-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(4) &gt; button:nth-of-type(1) &gt; svg:nth-of-type(1)" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" id="dropdown-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden mt-2 p-2 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-lg" id="dropdown-menu">
<button className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] text-slate-700 hover:bg-slate-50 transition-colors" onclick="selectDevice('Device 1')">Device 1</button>
<button className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] text-slate-700 hover:bg-slate-50 transition-colors" onclick="selectDevice('Device 2')">Device 2</button>
<button className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] text-slate-700 hover:bg-slate-50 transition-colors" onclick="selectDevice('Device 3')">Device 3</button>
</div>
</div>

<div className="px-5 mt-4 grid grid-cols-2 gap-4 md:gap-y-4 md:mt-8 animate-in delay-700" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(5)">
<div className="rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_16px_40px_-20px_rgba(2,6,23,0.25)] p-4 hover:shadow-[0_20px_48px_-20px_rgba(2,6,23,0.3)] transition-shadow">
<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-200 to-rose-100 flex items-center justify-center text-rose-500 mb-2">
<svg className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div className="text-[13px] text-slate-600">Inside humidity</div>
<div className="text-[20px] tracking-tight font-semibold text-slate-900 mt-1">49%</div>
</div>
<div className="hover:shadow-[0_20px_48px_-20px_rgba(2,6,23,0.3)] transition-shadow bg-white ring-slate-200/80 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_16px_40px_-20px_rgba(2,6,23,0.25)]" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(5) &gt; div:nth-of-type(2)">
<div className="flex text-fuchsia-600 bg-gradient-to-tr from-fuchsia-200 to-pink-100 w-10 h-10 rounded-xl mb-2 items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(5) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)">
<svg className="lucide lucide-thermometer w-5 h-5" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="text-[13px] text-slate-600">Outside Temp.</div>
<div className="text-[20px] font-semibold text-slate-900 tracking-tight mt-1" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(5) &gt; div:nth-of-type(2) &gt; div:nth-of-type(3)">10°</div>
</div>
</div>

<div className="px-4 mt-6 animate-in delay-800">
<div className="grid grid-cols-4 gap-3 gap-x-3 gap-y-3">
<button className="group flex flex-col items-center gap-2" onclick="toggleMode('flame')">
<div className="flex hover:shadow-[0_14px_32px_-12px_rgba(244,63,94,0.7)] transition-all duration-300 ring-white ring-1 text-white bg-gradient-to-tr from-pink-500 to-rose-500 w-14 h-14 rounded-2xl shadow-[0_10px_24px_-12px_rgba(244,63,94,0.5)] items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1) &gt; div:nth-of-type(1)" id="mode-flame">
<svg className="lucide lucide-flame w-6 h-6" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
<span className="text-[11px] text-slate-600">MODE</span>
</button>
<button className="group flex flex-col items-center gap-2" onclick="toggleMode('leaf')">
<div className="flex hover:bg-slate-200 transition-all duration-300 text-emerald-600 bg-slate-100 w-14 h-14 ring-white ring-1 rounded-2xl shadow-[inset_0_8px_24px_-12px_rgba(2,6,23,0.15),0_10px_24px_-12px_rgba(2,6,23,0.25)] items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; button:nth-of-type(2) &gt; div:nth-of-type(1)" id="mode-leaf">
<svg className="lucide lucide-leaf w-6 h-6" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-[11px] text-slate-600">ECO</span>
</button>
<button className="group flex flex-col items-center gap-2">
<div className="flex hover:bg-slate-200 transition-all duration-300 text-emerald-600 bg-slate-100 w-14 h-14 ring-white ring-1 rounded-2xl shadow-[inset_0_8px_24px_-12px_rgba(2,6,23,0.15),0_10px_24px_-12px_rgba(2,6,23,0.25)] items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; button:nth-of-type(3) &gt; div:nth-of-type(1)">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-[11px] text-slate-600">SCHEDULE</span>
</button>
<button className="group flex flex-col items-center gap-2">
<div className="flex hover:bg-slate-200 transition-all duration-300 ring-white ring-1 text-emerald-600 bg-slate-100 w-14 h-14 rounded-2xl shadow-[inset_0_8px_24px_-12px_rgba(2,6,23,0.15),0_10px_24px_-12px_rgba(2,6,23,0.25)] items-center justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(6) &gt; div:nth-of-type(1) &gt; button:nth-of-type(4) &gt; div:nth-of-type(1)">
<svg className="lucide lucide-history w-6 h-6" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</div>
<span className="text-[11px] text-slate-600">HISTORY</span>
</button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-slate-300"></div>
</div>

<div className="overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 w-[360px] h-[780px] ring-white/70 ring-1 rounded-[36px] mr-auto ml-auto relative shadow-[0_20px_60px_-10px_rgba(30,41,59,0.35)] animate-in delay-400">

<div className="px-5 pt-5 pb-2 flex items-center justify-between animate-in delay-500">
<span className="text-xs text-slate-500">9:41</span>
<div className="flex items-center gap-1 text-slate-500">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="px-5 flex items-center justify-between animate-in delay-600">
<button className="p-2.5 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm hover:bg-slate-50 transition-colors">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900">Lights</h2>
<button className="p-2.5 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm hover:bg-slate-50 transition-colors">
<svg className="w-5 h-5 text-slate-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 60 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="px-5 mt-6 animate-in delay-700">
<div className="hover:shadow-[0_20px_48px_-20px_rgba(2,6,23,0.3)] transition-all duration-500 bg-white ring-slate-200/80 ring-1 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-2xl relative overflow-hidden" id="light-preview">
<div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(600px_400px_at_50%_-20%,rgba(255,255,255,0.8),transparent_70%)]"></div>
<div className="absolute inset-0 pointer-events-none transition-all duration-500" id="light-glow" style={{opacity: '0.75', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(251, 191, 36, 0.19) 40%, transparent 70%)'}}></div>
<div className="flex relative items-center justify-center">
<svg className="w-[96px] h-[96px] text-gray-400 transition-all duration-500" fill="none" height="24" id="bulb-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '96px', height: '96px', color: 'rgb(245, 158, 11)', filter: 'drop-shadow(rgb(251, 191, 36) 0px 0px 7.5px)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="text-center mt-6">
<div className="text-[12px] text-slate-500 tracking-wide mb-2">Main Light</div>
<div className="text-[46px] leading-none font-semibold text-slate-800 tracking-tight transition-colors duration-500" id="brightness-display">75%</div>
</div>
</div>
</div>

<div className="px-5 mt-6 animate-in delay-800">
<div className="flex items-center justify-between mb-3">
<span className="text-[13px] text-slate-600 font-medium">Brightness</span>
<span className="text-[13px] text-slate-500" id="brightness-value">75%</span>
</div>
<div className="relative">
<input className="w-full h-2 rounded-full appearance-none cursor-pointer" id="brightness-slider" max="100" min="0" style={{background: 'linear-gradient(to right, #a855f7 0%, #f472b6 75%, #e2e8f0 75%, #e2e8f0 100%)'}} type="range" value="75"/>
</div>
</div>

<div className="px-5 mt-6 animate-in delay-900">
<div className="flex items-center justify-between mb-3">
<span className="text-[13px] text-slate-600 font-medium">Color Temperature</span>
<span className="text-[13px] text-slate-500" id="temp-label">Warm</span>
</div>
<div className="grid grid-cols-3 gap-3">
<button className="py-3 px-4 rounded-xl text-[13px] font-medium bg-white ring-1 ring-slate-200/80 text-slate-700 hover:bg-slate-50 transition-colors" id="temp-cool" onclick="setColorTemp('cool')">Cool</button>
<button className="py-3 px-4 rounded-xl text-[13px] font-medium bg-gradient-to-tr from-fuchsia-500 to-violet-500 text-white shadow-[0_8px_16px_-8px_rgba(124,58,237,0.5)]" id="temp-warm" onclick="setColorTemp('warm')">Warm</button>
<button className="py-3 px-4 rounded-xl text-[13px] font-medium bg-white ring-1 ring-slate-200/80 text-slate-700 hover:bg-slate-50 transition-colors" id="temp-daylight" onclick="setColorTemp('daylight')">Daylight</button>
</div>
</div>

<div className="mt-6 px-5 max-h-64 overflow-y-auto animate-in delay-1000">
<div className="flex items-center justify-between mb-3">
<span className="text-[13px] text-slate-600 font-medium">Rooms</span>
<button className="text-[13px] text-violet-600 font-medium">See All</button>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-4 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_8px_20px_-12px_rgba(2,6,23,0.2)] hover:shadow-[0_12px_28px_-12px_rgba(2,6,23,0.25)] transition-shadow animate-in delay-1100">
<div className="flex items-center gap-3">
<div className="flex text-fuchsia-600 bg-gradient-to-tr from-fuchsia-200 to-pink-100 w-10 h-10 rounded-xl items-center justify-center">
<svg className="w-5 h-5 text-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="">
<div className="text-[14px] font-medium text-slate-900">Living Room</div>
<div className="text-[12px] text-emerald-600 room-status">3 lights on</div>
</div>
</div>
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" onchange="toggleRoomLight(this)" type="checkbox"/>
<span className="transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500 bg-slate-200 w-12 h-6 rounded-full relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(6) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; label:nth-of-type(1) &gt; span:nth-of-type(1)">
<span className="transition-transform duration-300 peer-checked:translate-x-6 bg-white w-5 h-5 rounded-full absolute top-0.5 left-0.5 shadow-md" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(6) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; label:nth-of-type(1) &gt; span:nth-of-type(1) &gt; span:nth-of-type(1)"></span>
</span>
</label>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_8px_20px_-12px_rgba(2,6,23,0.2)] hover:shadow-[0_12px_28px_-12px_rgba(2,6,23,0.25)] transition-shadow animate-in delay-1200">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div>
<div className="text-[14px] font-medium text-slate-900">Bedroom</div>
<div className="text-[12px] text-slate-500 room-status">All lights off</div>
</div>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="peer sr-only" onchange="toggleRoomLight(this)" type="checkbox"/>
<span className="w-12 h-6 rounded-full bg-slate-200 relative transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500">
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-6"></span>
</span>
</label>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_8px_20px_-12px_rgba(2,6,23,0.2)] hover:shadow-[0_12px_28px_-12px_rgba(2,6,23,0.25)] transition-shadow">
<div className="flex items-center gap-3">
<div className="flex text-fuchsia-600 bg-gradient-to-tr from-fuchsia-200 to-pink-100 w-10 h-10 rounded-xl items-center justify-center">
<svg className="w-5 h-5 text-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div>
<div className="text-[14px] font-medium text-slate-900">Kitchen</div>
<div className="text-[12px] text-emerald-600 room-status">2 lights on</div>
</div>
</div>
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" onchange="toggleRoomLight(this)" type="checkbox"/>
<span className="w-12 h-6 rounded-full bg-slate-200 relative transition-colors duration-300 peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-violet-500">
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-6"></span>
</span>
</label>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-slate-300"></div>

</div>
</div>
</div>




    </>
  );
}
