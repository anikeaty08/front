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



    document.addEventListener('DOMContentLoaded', async function() {
      await tsParticles.load("tsparticles", {
        fpsLimit: 60,
        fullScreen: { enable: true },
        particles: {
          number: { value: 70, density: { enable: true, value_area: 900 } },
          color: { value: ["#60a5fa", "#38bdf8", "#818cf8", "#a5b4fc"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.45,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.12, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 140,
            color: "#60a5fa",
            opacity: 0.17,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 160, line_linked: { opacity: 0.35 } },
            push: { particles_nb: 3 }
          }
        },
        detectRetina: true
      });

      // Improved seat selection interactivity
      const seats = document.querySelectorAll('.seat-btn');
      seats.forEach(btn => {
        btn.addEventListener('click', function() {
          seats.forEach(b => {
            b.classList.remove('selected', 'bg-blue-500/20', 'text-blue-400', 'border-2', 'border-blue-400');
            b.classList.add('bg-[#23293a]', 'text-gray-400');
          });
          
          // Apply selected state
          btn.classList.remove('bg-[#23293a]', 'text-gray-400');
          btn.classList.add('selected', 'bg-blue-500/20', 'text-blue-400', 'border-2', 'border-blue-400');
          
          // Update the seat info in the status section
          const seatInfo = document.querySelector('.text-xs.font-semibold.text-blue-400');
          if (seatInfo) {
            seatInfo.textContent = btn.dataset.seat;
          }
          
          // Add subtle animation
          btn.animate([
            { transform: 'scale(0.95)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' }
          ], {
            duration: 300,
            easing: 'ease-out'
          });
        });
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
      
<div id="tsparticles"></div>
<div className="max-w-md w-full bg-[#151c2c] bg-opacity-90 backdrop-blur-lg border border-[#23293a] rounded-2xl shadow-lg overflow-hidden">

<div className="px-8 pt-7 pb-4 border-b border-[#23293a] flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
</svg>
<span className="text-lg font-semibold text-white tracking-wide">Flight Info</span>
</div>
<span className="text-xs text-gray-400">Updated 2 min ago</span>
</div>

<div className="border-b border-[#23293a]"></div>

<div className="px-8 py-7">
<div className="flex items-center justify-between mb-5">
<div>
<p className="text-gray-400 text-xs uppercase font-medium tracking-widest">From</p>
<div className="flex items-center mt-1">
<span className="text-3xl font-bold text-white">SFO</span>
<span className="ml-2 text-gray-400 text-sm">San Francisco</span>
</div>
</div>
<div className="mx-4 flex flex-col items-center">

<svg className="w-20 h-10 text-blue-500" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
<path d="M13 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
<path d="M16 12H4" stroke="currentColor" stroke-dasharray="1 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
</svg>
<span className="text-xs text-gray-500 mt-1">UA 1234</span>
</div>
<div>
<p className="text-gray-400 text-xs uppercase font-medium tracking-widest">To</p>
<div className="flex items-center mt-1">
<span className="text-3xl font-bold text-white">JFK</span>
<span className="ml-2 text-gray-400 text-sm">New York</span>
</div>
</div>
</div>

<div className="border-b border-[#23293a] my-5"></div>

<div className="grid grid-cols-3 gap-4 text-center">
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide flex items-center justify-center gap-1">

<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
            Departure
          </p>
<p className="text-lg font-medium text-white mt-1">10:45 AM</p>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide flex items-center justify-center gap-1">

<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
            Arrival
          </p>
<p className="text-lg font-medium text-white mt-1">7:15 PM</p>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide flex items-center justify-center gap-1">

<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3v18h12V3H6zM6 15h12"></path>
<circle cx="10.5" cy="10.5" fill="currentColor" r="1.5"></circle>
</svg>
            Gate
          </p>
<p className="text-lg font-medium text-white mt-1">C12</p>
</div>
</div>

<div className="border-b border-[#23293a] my-5"></div>

<div className="flex items-center justify-between">
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">

<svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
            Status
          </p>
<span className="inline-block mt-1 px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-semibold">On Time</span>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">

<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z"></path>
<path d="M8 11V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path>
</svg>
            Seat
          </p>
<span className="inline-block mt-1 px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-semibold">14A</span>
</div>
</div>

<div className="border-b border-[#23293a] my-5"></div>

<div>
<p className="text-xs text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">

<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" strokeWidth="1.5" width="22" x="1" y="5"></rect>
<path d="M5 12V8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4"></path>
<path d="M14 12V8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4"></path>
<line x1="1" x2="23" y1="12" y2="12"></line>
</svg>
          Select Seat
        </p>
<div className="grid grid-cols-6 gap-2 mt-1" id="seatMap">

<button className="seat-btn selected bg-blue-500/20 text-blue-400 font-medium rounded-lg px-0 py-1.5 border-2 border-blue-400" data-seat="14A">14A</button>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="14B">14B</button>
<span className="col-span-1"></span>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="14C">14C</button>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="14D">14D</button>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="14E">14E</button>

<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="15A">15A</button>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="15B">15B</button>
<span className="col-span-1"></span>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="15C">15C</button>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="15D">15D</button>
<button className="seat-btn bg-[#23293a] text-gray-400 font-medium rounded-lg px-0 py-1.5 hover:bg-[#2a3349]" data-seat="15E">15E</button>
</div>
<p className="mt-2 text-xs text-gray-400">Window: A &amp; E, Aisle: B &amp; D</p>
</div>
</div>

<div className="border-t border-[#23293a]"></div>

<div className="px-8 py-4 bg-[#19213a] flex justify-between items-center">
<div className="flex items-center gap-2">

<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<path d="M2 12h20"></path>
<path d="M7 6v12"></path>
<path d="M17 6v12"></path>
</svg>
<span className="text-xs text-gray-400">Boarding 10:15 AM</span>
</div>
<span className="text-xs text-gray-400 flex items-center gap-1">

<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3"></path>
<path d="M5 10h14"></path>
<path d="M12 3v16"></path>
<path d="M10 7h.01"></path>
<path d="M14 7h.01"></path>
<path d="M10 14h.01"></path>
<path d="M14 14h.01"></path>
</svg>
        Terminal 3
      </span>
</div>
</div>


    </>
  );
}
