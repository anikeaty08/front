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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // System toggle functionality
        function toggleSystem(system) {
            const icons = document.querySelectorAll('.icon-circle');
            const clickedIcon = event.currentTarget;
            
            // Remove active/warning classes from all icons
            icons.forEach(icon => {
                icon.classList.remove('active', 'warning');
            });
            
            // Add active class to clicked icon
            clickedIcon.classList.add('active');
            
            // Simulate system status change
            setTimeout(() => {
                clickedIcon.classList.remove('active');
                clickedIcon.classList.add('warning');
            }, 2000);
        }
        
        // Stat details functionality
        function showStatDetails(statType) {
            const stats = {
                distance: ['2.4M', '2.5M', '2.6M'],
                systems: ['98%', '97%', '99%'],
                uptime: ['847', '848', '849']
            };
            
            const statElement = document.getElementById(statType + '-stat');
            const currentIndex = parseInt(statElement.dataset.index || '0');
            const nextIndex = (currentIndex + 1) % stats[statType].length;
            
            statElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                statElement.innerHTML = stats[statType][nextIndex] + (statType === 'distance' ? '<span class="text-sm">M</span>' : statType === 'systems' ? '<span class="text-sm">%</span>' : '');
                statElement.dataset.index = nextIndex;
                statElement.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Tag highlight functionality
        function highlightTag(tag) {
            // Remove previous highlights
            document.querySelectorAll('.tag-item').forEach(t => {
                t.style.transform = 'translateY(0)';
                t.style.boxShadow = 'none';
            });
            
            // Highlight clicked tag
            tag.style.transform = 'translateY(-3px)';
            tag.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        }
        
        // Mission timer update
        let missionDays = 847;
        setInterval(() => {
            missionDays++;
            document.getElementById('mission-timer').textContent = `T+ ${missionDays} DAYS`;
        }, 5000);
        
        // Remove typing animation after completion
        setTimeout(() => {
            document.querySelector('.typing-animation').classList.remove('typing-animation');
        }, 3000);
        
        // Add hover tooltips
        document.querySelectorAll('[data-tooltip]').forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = e.target.dataset.tooltip;
                tooltip.style.cssText = `
                    position: absolute;
                    top: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    white-space: nowrap;
                    z-index: 1000;
                `;
                e.target.style.position = 'relative';
                e.target.appendChild(tooltip);
            });
            
            element.addEventListener('mouseleave', function(e) {
                const tooltip = e.target.querySelector('.tooltip');
                if (tooltip) tooltip.remove();
            });
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
      
<div className="spline-container fixed top-0 w-full h-screen -z-10">
<iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-oNju9tQxB1nyaHSc0bBhpEAE" width="100%"></iframe>
</div>
<div className="card-container">

<div className="card-bottom absolute -translate-x-1/2 -translate-y-1/2 top-8 left-0 glow-pulse h-[400px] bg-[url(https://images.unsplash.com/photo-1647346425804-34383b95644b?w=1600&amp;q=80)] bg-cover shadow-lg"></div>

<div className="card-top glass-effect bg-gradient-to-r from-white/15 to-white/5 absolute -translate-x-1/2 -translate-y-1/2 -top-8 left-0 overflow-hidden h-[400px]">

<div className="absolute inset-0 rounded-[1.2em] border border-white/40 [mask-image:linear-gradient(135deg,white,transparent_60%)]"></div>
<div className="absolute inset-0 [mask-image:linear-gradient(135deg,transparent_60%,white)] border-neutral-400/50 border rounded-[1.2em]"></div>

<div className="flex flex-col h-full p-6 pb-7 fade-in">
<div className="flex justify-between items-start mb-2">
<div className="w-3/4">
<h1 className="text-[26px] leading-tight tracking-tight font-medium typing-animation">Mission Control</h1>
<p className="text-neutral-300 text-sm font-light mt-1 slide-up">ARTEMIS-VII Deep Space</p>
</div>
<div className="w-1/4 text-right slide-up">
<div className="text-[20px] font-semibold font-mono">NASA</div>
<div className="flex items-center justify-end gap-1 mt-1">
<div className="status-dot"></div>
<span className="text-xs text-green-300">ACTIVE</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 mb-4 fade-in">
<div className="icon-circle active" data-tooltip="Propulsion System" onclick="toggleSystem('propulsion')">
<i className="w-4 h-4 text-green-400" data-lucide="rocket"></i>
</div>
<div className="card-vertical-divider h-5"></div>
<div className="icon-circle warning" data-tooltip="Communications" onclick="toggleSystem('communication')">
<i className="w-4 h-4 text-amber-400" data-lucide="satellite"></i>
</div>
<div className="card-vertical-divider h-5"></div>
<div className="icon-circle" data-tooltip="Navigation" onclick="toggleSystem('navigation')">
<i className="w-4 h-4 text-neutral-400" data-lucide="radio"></i>
</div>
<div className="card-vertical-divider h-5"></div>
<div className="icon-circle" data-tooltip="Security Systems" onclick="toggleSystem('security')">
<i className="w-4 h-4 text-neutral-400" data-lucide="shield-check"></i>
</div>
</div>

<div className="card-divider w-full mb-4"></div>

<div className="flex justify-between mb-4 max-w-lg slide-up">
<div className="stat-container text-center px-2" onclick="showStatDetails('distance')">
<div className="stat-value gradient-text bg-gradient-to-r from-white/95 to-neutral-200/80 font-medium" id="distance-stat">2.4<span className="text-sm">M</span></div>
<div className="stat-label">KM TRAVELED</div>
</div>
<div className="card-vertical-divider h-12 my-auto"></div>
<div className="stat-container text-center px-2" onclick="showStatDetails('systems')">
<div className="stat-value gradient-text bg-gradient-to-r from-white/95 to-neutral-200/80 font-medium" id="systems-stat">98<span className="text-sm">%</span></div>
<div className="stat-label">SYSTEMS OK</div>
</div>
<div className="card-vertical-divider h-12 my-auto"></div>
<div className="stat-container text-center px-2" onclick="showStatDetails('uptime')">
<div className="stat-value gradient-text bg-gradient-to-r from-white/95 to-neutral-200/80 font-medium" id="uptime-stat">847</div>
<div className="stat-label">DAYS ACTIVE</div>
</div>
</div>

<div className="card-divider w-full mb-3 opacity-70"></div>

<div className="flex flex-wrap gap-2 mb-4 fade-in">
<span className="tag-item text-[10px] px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-300" onclick="highlightTag(this)">LIFE SUPPORT</span>
<span className="tag-item text-[10px] px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/30 text-neutral-300" onclick="highlightTag(this)">NAVIGATION</span>
<span className="tag-item text-[10px] px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300" onclick="highlightTag(this)">DEEP SPACE</span>
<span className="tag-item text-[10px] px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300" onclick="highlightTag(this)">RESEARCH</span>
</div>

<div className="mission-timeline mb-4 fade-in">
<div className="flex items-center justify-between">
<span className="text-neutral-300" id="mission-timer">T+ 847 DAYS</span>
<span className="text-white">PHASE 3: EXPLORATION</span>
</div>
</div>

<div className="mt-auto flex justify-between w-full fade-in">
<div className="flex flex-col">
<span className="opacity-70 flex items-center gap-2 text-[0.8rem] mb-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>SECTOR 7-ALPHA</span>
</span>
<span className="text-[0.75rem] opacity-60 flex items-center gap-2 font-mono">
<i className="w-3 h-3" data-lucide="hash"></i>
<span>ART-VII-2024</span>
</span>
</div>
<div className="flex flex-col items-end">
<span className="opacity-70 flex items-center gap-2 text-[0.8rem] mb-1">
<i className="w-3 h-3" data-lucide="signal"></i>
<span>COMM LINK</span>
<div className="warning-dot"></div>
</span>
<p className="text-[0.9rem] font-medium flex items-center gap-2 cursor-pointer hover:text-blue-300 transition-colors">
<i className="w-3 h-3" data-lucide="globe"></i>
<span>mission.nasa.gov</span>
</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
