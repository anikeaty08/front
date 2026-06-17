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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
      const setupDropdown = () => {
        const dropdownBtn = document.getElementById('desktop-ai-dropdown-btn');
        const dropdownMenu = document.getElementById('desktop-ai-dropdown-menu');
        const dropdownIcon = document.getElementById('desktop-ai-dropdown-icon');
        const dropdownWrapper = document.getElementById('desktop-ai-dropdown');

        if (!dropdownBtn || dropdownBtn.dataset.initialized) return;
        dropdownBtn.dataset.initialized = 'true';

        dropdownBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdownMenu.classList.toggle('hidden');
          dropdownIcon.classList.toggle('rotate-180');
        });

        document.addEventListener('click', (e) => {
          if (dropdownWrapper && !dropdownWrapper.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
            dropdownIcon.classList.remove('rotate-180');
          }
        });
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupDropdown);
      } else {
        setupDropdown();
      }
    })();
  


        (function () {
      const root = document.currentScript.parentElement;

      const humanAvatar = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp";
      const agentAvatar = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png";

      const desktopChatSection = root.querySelector('#chat-section-desktop');
      const desktopContainer = root.querySelector('#chat-messages-container-desktop');

      const mobileBackdrop = root.querySelector('#mobile-sheet-backdrop');
      const mobileSheet = root.querySelector('#mobile-sheet');
      const mobileHandle = root.querySelector('#mobile-sheet-handle');
      const mobileMeta = root.querySelector('#mobile-sheet-meta');
      const mobileTitle = root.querySelector('#mobile-sheet-title');
      const mobilePrev = root.querySelector('#mobile-prev');
      const mobileNext = root.querySelector('#mobile-next');
      const mobileChatSection = root.querySelector('#chat-section-mobile');
      const mobileContainer = root.querySelector('#chat-messages-container-mobile');

      const stepTitles = [
        "Morning briefing",
        "Duplicate invoice detected",
        "Incomplete invoice flagged",
        "Vendor asks for status update",
        "Missing cost category",
        "Overdue approval reminder",
        "Pre-meeting invoice overview",
        "End of day wrap-up"
      ];

      const stepTimes = [
        "08:02 AM",
        "09:15 AM",
        "09:45 AM",
        "11:30 AM",
        "12:10 PM",
        "01:15 PM",
        "02:50 PM",
        "11:42 PM"
      ];

      let currentIndex = 0;

      const chatData = {
        0: [
          { type: "agent", sender: "Alea", time: "08:02 AM", text: "Morning! Already handled the night shift. Here’s where we are:" },
          { type: "agent", sender: "Alea", time: "08:02 AM", text: "4 invoices came in overnight. Verified and sent to DATEV before you had your coffee.<br><br>2 emails need a human touch. I’ve drafted replies for both, just say the word.<br><br>The other 11? Noise. Labeled and archived." },
          { type: "human", sender: "Anna", time: "08:03 AM", text: "Send the replies." },
          { type: "agent", sender: "Alea", time: "08:03 AM", text: "Gone. ✓" }
        ],
        1: [
          { type: "agent", sender: "Alea", time: "09:15 AM", text: "Nordkurier GmbH just sent us invoice #NK-887 again. Same number, same €3,800, same everything. This is a duplicate." },
          { type: "agent", sender: "Alea", time: "09:15 AM", text: "I’ve put it on hold. Want me to let them know we’re not paying twice?" },
          { type: "human", sender: "Anna", time: "09:16 AM", text: "Yes, tell them we already have it." },
          { type: "agent", sender: "Alea", time: "09:16 AM", text: "Done. Politely reminded them via email that we’re on top of it. ✓" }
        ],
        2: [
          { type: "agent", sender: "Alea", time: "09:45 AM", text: "Invoice from Lieferant Nord just landed, but they forgot the VAT number. Classic." },
          { type: "agent", sender: "Alea", time: "09:45 AM", text: "I can’t send this to DATEV as-is. I’ve drafted a reply asking for a corrected version, with the original attached so they know exactly what to fix. Send it?" },
          { type: "human", sender: "Anna", time: "09:46 AM", text: "Yes." },
          { type: "agent", sender: "Alea", time: "09:46 AM", text: "Sent. ✓ I’ll nudge them again in 3 days if they go quiet." }
        ],
        3: [
          { type: "agent", sender: "Alea", time: "11:30 AM", text: "Müller GmbH is asking what happened to their invoice #4821. Sounds like they’re getting nervous." },
          { type: "agent", sender: "Alea", time: "11:30 AM", text: "Already checked: received, verified, forwarded to DATEV on Monday. I’ve drafted a reassuring reply with the forwarding timestamp attached. Send it?" },
          { type: "human", sender: "Anna", time: "11:31 AM", text: "Yes, go ahead." },
          { type: "agent", sender: "Alea", time: "11:31 AM", text: "Sent. That should calm them down. ✓" }
        ],
        4: [
          { type: "agent", sender: "Alea", time: "12:10 PM", text: "Invoice from Becker Logistics, €1,640, looks fine but no cost ledger category. I’m not going to guess on this one." },
          { type: "agent", sender: "Alea", time: "12:10 PM", text: "Which category should I use?" },
          { type: "human", sender: "Anna", time: "12:11 PM", text: "Logistics costs. And always do this automatically for Becker going forward." },
          { type: "agent", sender: "Alea", time: "12:11 PM", text: "Booked under Logistics Costs and off to DATEV. ✓" },
          { type: "agent", sender: "Alea", time: "12:12 PM", text: "Should I just always handle Becker Logistics this way? Would save you from ever seeing this question again." },
          { type: "human", sender: "Anna", time: "12:12 PM", text: "Yes, always." },
          { type: "agent", sender: "Alea", time: "12:12 PM", text: "Perfect. Won’t ask again." }
        ],
        5: [
          { type: "agent", sender: "Alea", time: "01:15 PM", text: "Invoice #3042 from Spediteur Braun (€2,940) has been sitting with Marcus for 7 days. Spediteur Braun emailed this morning asking for an update." },
          { type: "agent", sender: "Alea", time: "01:15 PM", text: "Should I ping Marcus on Microsoft Teams?" },
          { type: "human", sender: "Anna", time: "01:16 PM", text: "Yes, remind him." },
          { type: "agent", sender: "Alea", time: "01:16 PM", text: "Done. Sent him a Teams message with the invoice and a gentle note that people are waiting. ✓" },
          { type: "agent", sender: "Alea", time: "01:32 PM", text: "Marcus came through. Payment processed, tracker updated. All good." }
        ],
        6: [
          { type: "human", sender: "Anna", time: "02:50 PM", text: "Jef wants an invoice overview for the 3 PM. What do we have?" },
          { type: "agent", sender: "Alea", time: "02:50 PM", text: "Here’s the picture:<br><br>• Total outstanding: 14 invoices, €38,420<br>• Overdue: 3 invoices, €9,180<br>• Due this week: 5 invoices, €14,600<br>• Biggest open item: Weber Consulting, €4,165 due Friday" },
          { type: "human", sender: "Anna", time: "02:51 PM", text: "Who are the overdue ones?" },
          { type: "agent", sender: "Alea", time: "02:51 PM", text: "1. Spediteur Braun: €2,940 (Marcus just approved, payment’s going out)<br>2. Nordkurier GmbH: €3,800 (reminder sent last week, still silent)<br>3. TechParts AG: €2,440 (disputed since September, they said they’d check internally and then disappeared)" },
          { type: "human", sender: "Anna", time: "02:52 PM", text: "TechParts is still open? I thought that was done." },
          { type: "agent", sender: "Alea", time: "02:52 PM", text: "Their last email was October 3rd. Radio silence since. Want me to follow up after your meeting?" },
          { type: "human", sender: "Anna", time: "02:52 PM", text: "Yes, do that." },
          { type: "agent", sender: "Alea", time: "02:52 PM", text: "On it. Go get ’em." }
        ],
        7: [
          { type: "agent", sender: "Alea", time: "11:42 PM", text: "3 more invoices while you were out. Handled." },
          { type: "agent", sender: "Alea", time: "11:42 PM", text: "Also, Lieferant Nord came back with the corrected invoice. VAT number’s there, everything checks out. Forwarded to DATEV. You don’t need to touch that one." },
          { type: "agent", sender: "Alea", time: "11:43 PM", text: "Day’s wrap-up: 10 invoices processed, 3 reminders sent, 1 duplicate stopped, 1 old dispute poked." },
          { type: "agent", sender: "Alea", time: "11:43 PM", text: "Inbox is clean. See you at 8." }
        ]
      };

      function isMobile() {
        return window.innerWidth < 1024;
      }

      function renderMessage(msg, idx) {
        const isHuman = msg.type === "human";
        const avatar = isHuman ? humanAvatar : agentAvatar;
        const name = msg.sender || (isHuman ? "Anna" : "Alea");
        const avatarClasses = isHuman
           ? "flex-none w-8 h-8 rounded-full overflow-hidden"
          : "flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200";

        return `
          <div class="flex gap-4 items-start" style="animation: chatFadeIn 0.25s ease-out ${idx * 0.06}s both;">
            <div class="${avatarClasses}">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover ${isHuman ? "grayscale" : ""}" alt="${name}">
            </div>
            <div class="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
              <div class="flex items-baseline gap-2 px-1">
                <span class="text-xs font-bold text-neutral-900">${name}</span>
                <span class="text-[10px] text-neutral-400">${msg.time}</span>
              </div>
              <div class="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                ${msg.text}
              </div>
            </div>
          </div>
        `;
      }

      function updateTimelineVisuals(index) {
        for (let i = 0; i < 8; i++) {
          const circle = root.querySelector('#timeline-circle-' + i);
          const time = root.querySelector('#timeline-time-' + i);
          const card = root.querySelector('#timeline-card-' + i);

          if (circle) {
            circle.classList.remove('bg-neutral-300', 'bg-neutral-900');
            circle.classList.add(i === index ? 'bg-neutral-900' : 'bg-neutral-300');
          }

          if (time) {
            time.classList.remove('text-neutral-400', 'text-neutral-900');
            time.classList.add(i === index ? 'text-neutral-900' : 'text-neutral-400');
          }

          if (card) {
            card.classList.remove('ring-2', 'ring-neutral-900', 'border-neutral-900');
            card.classList.add('border-neutral-200');

            if (i === index) {
              card.classList.add('ring-2', 'ring-neutral-900', 'border-neutral-900');
              card.classList.remove('border-neutral-200');
            }
          }
        }
      }

      function updateDesktopChat(index) {
        if (!desktopContainer) return;
        const messages = chatData[index] || [];
        desktopContainer.innerHTML = messages.map(renderMessage).join('');
        if (desktopChatSection) desktopChatSection.scrollTop = 0;
      }

      function updateMobileSheet(index) {
        const messages = chatData[index] || [];
        mobileContainer.innerHTML = messages.map(renderMessage).join('');
        mobileMeta.textContent = `${stepTimes[index]} · ${index + 1} of 8`;
        mobileTitle.textContent = stepTitles[index];
        mobilePrev.disabled = index === 0;
        mobileNext.disabled = index === 7;
        mobileChatSection.scrollTop = 0;
      }

      function openMobileSheet() {
        mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        mobileBackdrop.classList.add('opacity-100');
        mobileSheet.classList.remove('translate-y-full');
      }

      function closeMobileSheet() {
        mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
        mobileBackdrop.classList.remove('opacity-100');
        mobileSheet.classList.add('translate-y-full');
      }

      function selectTimeline(index) {
        currentIndex = index;
        updateTimelineVisuals(index);
        updateDesktopChat(index);

        if (isMobile()) {
          updateMobileSheet(index);
          openMobileSheet();
        }
      }

      root.querySelectorAll('.timeline-row').forEach((row) => {
        row.addEventListener('click', () => {
          const index = Number(row.dataset.index);
          selectTimeline(index);
        });
      });

      mobilePrev.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex -= 1;
          updateTimelineVisuals(currentIndex);
          updateDesktopChat(currentIndex);
          updateMobileSheet(currentIndex);
        }
      });

      mobileNext.addEventListener('click', () => {
        if (currentIndex < 7) {
          currentIndex += 1;
          updateTimelineVisuals(currentIndex);
          updateDesktopChat(currentIndex);
          updateMobileSheet(currentIndex);
        }
      });

      mobileBackdrop.addEventListener('click', closeMobileSheet);
      mobileHandle.addEventListener('click', closeMobileSheet);

      window.addEventListener('resize', () => {
        if (!isMobile()) {
          closeMobileSheet();
        }
      });

      if (!document.getElementById('chat-anim-style')) {
        const style = document.createElement('style');
        style.id = 'chat-anim-style';
        style.innerHTML = `
          @keyframes chatFadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `;
        document.head.appendChild(style);
      }

      selectTimeline(0);
      closeMobileSheet();
    })();
      


    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Toggle the current accordion
        const content = trigger.nextElementSibling;
        const iconClosed = trigger.querySelector('.icon-closed');
        const iconOpen = trigger.querySelector('.icon-open');
        
        // Toggle grid rows
        const isOpen = content.style.gridTemplateRows === '1fr';
        content.style.gridTemplateRows = isOpen ? '0fr' : '1fr';
        
        // Toggle icons
        if(isOpen) {
          iconClosed.classList.remove('hidden');
          iconClosed.classList.add('block');
          iconOpen.classList.remove('block');
          iconOpen.classList.add('hidden');
          trigger.classList.remove('text-neutral-900');
          // Optional: reset color if not open
        } else {
          iconClosed.classList.remove('block');
          iconClosed.classList.add('hidden');
          iconOpen.classList.remove('hidden');
          iconOpen.classList.add('block');
          // Close other accordions in the same column/group if desired for accordion effect
          // keeping them independent for now as per "not too long UI" request usually implies compact, independent toggles
        }
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
      

<div className="group relative z-50">

<input className="hidden" id="mobile-nav-toggle" type="checkbox"/>

<div className="group relative">

<input className="hidden" id="mobile-nav-toggle" type="checkbox"/>

<nav className="fixed z-50 bg-white/80 w-full h-16 border-neutral-100 border-b top-0 backdrop-blur-sm">
<input className="hidden peer" id="local-mobile-nav-toggle" type="checkbox"/>
<div className="h-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 bg-white/80">
<div className="flex h-full items-center justify-between">

<div className="flex items-center gap-2">
<a className="shrink-0 text-lg font-medium tracking-tighter hover:opacity-70 transition-opacity" href="#">
          Agentee.io
        </a>

<label className="inline-flex lg:hidden items-center justify-center w-8 h-8 rounded-full text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer ml-1" htmlFor="local-mobile-nav-toggle">
<svg className="block peer-checked:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<svg className="hidden peer-checked:block" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</label>
</div>

<div className="hidden lg:flex items-center gap-6 text-[15px] font-normal text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="/home">
          Home page
        </a>
<div className="relative group/details" id="desktop-ai-dropdown">
<button className="list-none flex hover:text-neutral-900 transition-colors cursor-pointer border-none outline-none bg-transparent pt-0 pr-0 pb-0 pl-0 gap-x-1.5 gap-y-1.5 items-center" data-initialized="true" id="desktop-ai-dropdown-btn">
<span className="">AI Employees</span>
<svg className="transition-transform duration-200 text-xs opacity-50" fill="none" height="12" id="desktop-ai-dropdown-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden bg-white w-[340px] border-neutral-200 border rounded-2xl mt-3 pt-2 pr-2 pb-2 pl-2 absolute top-full left-0 shadow-[0_12px_30px_rgba(0,0,0,0.08)] gap-x-1.5 gap-y-1.5" id="desktop-ai-dropdown-menu">
<a className="block hover:bg-neutral-50 transition-colors rounded-xl pt-3 pr-3 pb-3 pl-3" href="/alea">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div>
<div className="text-[15px] font-medium text-neutral-900">Alea</div>
<div className="text-sm text-neutral-500 mt-0.5">Accounting and finance ops</div>
</div>
</div>
</a>
<a className="block rounded-xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="#">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Claire" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png"/>
</div>
<div>
<div className="text-[15px] font-medium text-neutral-900">Claire</div>
<div className="text-sm text-neutral-500 mt-0.5">Claims and support workflows</div>
</div>
</div>
</a>
<a className="block rounded-xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="#">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alessa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png"/>
</div>
<div>
<div className="text-[15px] font-medium text-neutral-900">Alessa</div>
<div className="text-sm text-neutral-500 mt-0.5">Internal ops and repetitive tasks</div>
</div>
</div>
</a>
</div>
</div>
<a className="hover:text-neutral-900 transition-colors" href="#">
          News letter
        </a>
<a className="hover:text-neutral-900 transition-colors" href="/about-us">About Us</a>
</div>

<div className="flex items-center">
<a className="inline-flex items-center bg-neutral-900 text-white text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all" href="#">
          Hire AI Agent
        </a>
</div>
</div>
</div>

<div className="hidden peer-checked:block lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-100 shadow-xl h-[calc(100dvh-4rem)] overflow-y-auto z-0">
<div className="px-4 py-6 flex flex-col gap-2">
<a className="text-[17px] font-medium text-neutral-900 px-3 py-3 rounded-2xl hover:bg-neutral-50 transition-colors" href="/home">
        Home page
      </a>

<details className="group/mobile">
<summary className="list-none [&amp;::-webkit-details-marker]:hidden flex items-center justify-between text-[17px] font-medium text-neutral-900 px-3 py-3 rounded-2xl hover:bg-neutral-50 transition-colors w-full cursor-pointer outline-none">
<span>AI Employees</span>
<svg className="transition-transform duration-200 opacity-60 group-open/mobile:rotate-180" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="flex flex-col gap-2 px-2 pb-2 mt-1">
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="/alea">
<div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-[16px] font-medium text-neutral-900">Alea</div>
<div className="text-sm text-neutral-500 mt-0.5">Accounting and finance ops</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Claire" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-[16px] font-medium text-neutral-900">Claire</div>
<div className="text-sm text-neutral-500 mt-0.5">Claims and support workflows</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alessa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-[16px] font-medium text-neutral-900">Alessa</div>
<div className="text-sm text-neutral-500 mt-0.5">Internal ops and repetitive tasks</div>
</div>
</a>
</div>
</details>
<a className="text-[17px] font-medium text-neutral-900 px-3 py-3 rounded-2xl hover:bg-neutral-50 transition-colors" href="#">
        News letter
      </a>
<a className="text-[17px] font-medium text-neutral-900 px-3 py-3 rounded-2xl hover:bg-neutral-50 transition-colors" href="/about-us">
        About Us
      </a>
<div className="mt-4 px-3 pb-10">
<a className="flex items-center justify-center w-full bg-neutral-900 text-white text-[15px] font-medium px-5 py-3.5 rounded-full hover:bg-neutral-800 transition-all" href="#">
          Hire AI Agent
        </a>
</div>
</div>
</div>

</nav>

<div className="fixed inset-0 z-[999] hidden group-has-[:checked]:block lg:hidden bg-white">
<div className="flex h-[100dvh] flex-col">

<div className="flex items-center justify-between h-16 px-4 border-b border-neutral-100 shrink-0">
<div className="text-sm font-medium tracking-wide text-neutral-500">
          Menu
        </div>
<label className="inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer" htmlFor="mobile-nav-toggle">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</label>
</div>

<div className="flex-1 overflow-y-auto px-4 py-5">
<div className="flex flex-col gap-1 text-[17px] font-medium text-neutral-900">
<a className="rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="/home">
            Home page
          </a>

<details className="mt-1 group/mobileemployees">
<summary className="list-none flex items-center justify-between rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors cursor-pointer">
<span>AI Employees</span>
<iconify-icon className="text-base opacity-60 transition-transform duration-200 group-open/mobileemployees:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="mt-2 flex flex-col gap-2">
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-[16px] font-medium text-neutral-900">Alea</div>
<div className="text-sm text-neutral-500 mt-0.5">Accounting and finance ops</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Claire" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-[16px] font-medium text-neutral-900">Claire</div>
<div className="text-sm text-neutral-500 mt-0.5">Claims and support workflows</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alessa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-[16px] font-medium text-neutral-900">Alessa</div>
<div className="text-sm text-neutral-500 mt-0.5">Internal ops and repetitive tasks</div>
</div>
</a>
</div>
</details>
<a className="rounded-2xl px-3 py-3 mt-1 hover:bg-neutral-50 transition-colors" href="#">
            News letter
          </a>
<a className="rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="/about-us">
            About
          </a>
<a className="rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="#">
            Contact Us
          </a>
</div>
</div>

<div className="border-t border-neutral-100 bg-white px-4 pt-4 pb-[max(1rem,calc(env(safe-area-inset-bottom)+5rem))] shrink-0">
<a className="inline-flex items-center justify-center w-full bg-neutral-900 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-neutral-800 transition-all" href="#">
          Hire AI Agent
        </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[999] hidden group-has-[:checked]:block lg:hidden bg-white">

<div className="flex items-center justify-between h-16 px-4 border-b border-neutral-100">
<div className="text-base font-medium text-neutral-900">
        Menu
      </div>
<label className="inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer" htmlFor="mobile-nav-toggle">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</label>
</div>

<div className="flex h-[calc(100dvh-4rem)] flex-col">

<div className="flex-1 overflow-y-auto px-4 py-6">
<div className="flex flex-col gap-1 text-base font-medium text-neutral-800">
<a className="rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="/home">
            Home page
          </a>

<details className="mt-2">
<summary className="list-none flex items-center justify-between rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors cursor-pointer">
<span>AI Employees</span>
<iconify-icon className="text-base opacity-60" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="mt-2 flex flex-col gap-2">
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-base font-medium text-neutral-900">Alea</div>
<div className="text-sm text-neutral-500 mt-0.5">Accounting and finance ops</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Claire" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-base font-medium text-neutral-900">Claire</div>
<div className="text-sm text-neutral-500 mt-0.5">Claims and support workflows</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4 hover:bg-neutral-50 transition-colors" href="#">
<div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
<img alt="Alessa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png"/>
</div>
<div className="min-w-0">
<div className="text-base font-medium text-neutral-900">Alessa</div>
<div className="text-sm text-neutral-500 mt-0.5">Internal ops and repetitive tasks</div>
</div>
</a>
</div>
</details>
<a className="rounded-2xl px-3 py-3 mt-2 hover:bg-neutral-50 transition-colors" href="#">
            News letter
          </a>
<a className="rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="/about-us">
            About
          </a>
<a className="rounded-2xl px-3 py-3 hover:bg-neutral-50 transition-colors" href="#">
            Contact Us
          </a>
</div>
</div>

<div className="border-t border-neutral-100 p-4 bg-white">
<a className="inline-flex items-center justify-center w-full bg-neutral-900 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-neutral-800 transition-all" href="#">
          Hire AI Agent
        </a>
</div>
</div>
</div>
</div>

<main className="flex-1 flex flex-col bg-white w-full relative items-center">

<div className="flex flex-col w-full max-w-7xl pt-16 pr-6 pl-6 items-center">

<div className="flex flex-col flex-none text-center w-full max-w-6xl mt-8 mb-12 items-center justify-center">
<h1 className="leading-[1.1] lg:text-5xl xl:text-6xl text-3xl font-medium text-neutral-900 tracking-tight max-w-7xl mt-8 mb-6">
            Hire AI agentees to scale without increasing headcount.
          </h1>
<p className="lg:text-lg leading-relaxed text-base font-normal text-neutral-500 max-w-3xl mb-8">
            AI employees that learn your process, handle exceptions, and get
            better over time. All the value of a great hire, none of the
            overhead.
          </p>
<div className="flex items-center gap-x-2">
<button className="hover:bg-neutral-800 transition-all hover:shadow-md text-sm font-medium text-white bg-neutral-900 rounded-full pt-3 pr-12 pb-3 pl-12 shadow-sm">
              Book a Call
            </button>
<button className="hover:text-neutral-900 transition-colors flex group text-sm font-medium text-neutral-600 rounded-full pt-3 pr-8 pb-3 pl-8 items-center">
              Learn More
              <svg className="group-hover:translate-y-0.5 transition-transform w-[14px] h-[14px]" data-icon-set="solar" data-solar="arrow-down-linear" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m0 0l6-6m-6 6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mb-20 gap-x-4 gap-y-4 w-full">

<div className="group flex flex-col hover:border-neutral-400 transition-all duration-300 bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-center justify-between">
<div className="flex text-neutral-400 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png)] bg-cover bg-center rounded-full items-center justify-center"></div>
<span className="inline-flex items-center text-[10px] font-medium text-neutral-500 bg-neutral-50 border-neutral-100 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                2/3 Pilot Closed
              </span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">
              ALEA – Accounting agent
            </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">
              Prepares entries/bookings, chases approvals, and catches
              inconsistencies before they become problems.
            </p>
<a className="inline-flex items-center text-sm font-medium text-neutral-900 relative" href="/alea">
  Meet ALEA
  <iconify-icon className="transition-transform group-hover:translate-x-1 text-lg ml-1" height="18" icon="solar:arrow-right-linear" style={{color: 'rgb(23, 23, 23)'}} width="18"></iconify-icon>
</a>
</div>

<div className="group flex flex-col hover:border-neutral-400 transition-all duration-300 bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-center justify-between">
<div className="flex text-neutral-400 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png)] bg-cover bg-center rounded-full items-center justify-center"></div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-50 text-neutral-500 border border-neutral-100">
                1/3 Pilot Closed
              </span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">
              Clair – Cs Agent
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
              Handles customer requests, updates records, and escalates only
              when human judgment is needed.
            </p>
<a className="inline-flex items-center z-0 text-sm font-medium text-neutral-900 relative" href="#">
  Meet Clair
  <iconify-icon className="transition-transform group-hover:translate-x-1 text-lg ml-1" height="18" icon="solar:arrow-right-linear" style={{color: 'rgb(23, 23, 23)'}} width="18"></iconify-icon>
</a>
</div>

<div className="group flex flex-col hover:border-neutral-400 transition-all duration-300 bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-center justify-between">
<div className="flex text-neutral-400 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png)] bg-cover bg-center rounded-full items-center justify-center"></div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-50 text-neutral-500 border border-neutral-100">
                1/3 Pilot Closed
              </span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">
              Alessa – Recruiting agent
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
              Screens candidates, follows up automatically, and flags edge cases
              for review. So recruiters focus on decisions, not inboxes.
            </p>
<a className="inline-flex items-center z-0 text-sm font-medium text-neutral-900 relative" href="#">
  Meet Alessa
  <iconify-icon className="ml-1 text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<section className="overflow-hidden w-full border-white/5 border-t pt-12 pb-12 relative">

<div className="overflow-hidden bg-neutral-900 max-w-7xl border-white/5 border rounded-3xl mr-auto ml-auto absolute top-0 right-6 bottom-0 left-6 shadow-2xl"></div>

<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col text-center mb-20 items-center">
<div className="inline-flex hover:bg-white/10 transition-colors cursor-default border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="text-[10px] uppercase font-medium text-neutral-300 tracking-wide">Executive Insights</span>
</div>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight max-w-3xl mb-6">Why traditional hiring doesn't scale</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl">We spoke with 150+ operators and execs. The pattern was the same: headcount becomes the bottleneck.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group flex flex-col hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-6 text-neutral-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="" icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-1 font-light">
          "Finding talent is hard. Finding great talent is even harder. We spend months just to fill one role."
        </p>
<div className="flex border-white/5 border-t pt-5 gap-x-3 gap-y-3 items-center">
<div className="flex text-white/90 w-8 h-8 border-white/10 border rounded-full shadow-inner items-center justify-center">
<span className="text-[10px] font-semibold">HoP</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Head of Finance</span>
<span className="text-[10px] text-neutral-300">1500 FTE,  Social services</span>
</div>
</div>
</div>

<div className="group flex flex-col hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-6 text-neutral-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="" icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-1 font-light">
          "Scaling becomes painful when growth depends entirely on adding more people to the payroll."
        </p>
<div className="flex border-white/5 border-t pt-5 gap-x-3 gap-y-3 items-center">
<div className="flex text-white/90 w-8 h-8 border-white/10 border rounded-full shadow-inner items-center justify-center">
<span className="text-[10px] font-semibold">BD</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Business Development Lead</span>
<span className="text-[10px] text-neutral-300">680 FTE, Childcare</span>
</div>
</div>
</div>

<div className="group flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
<div className="mb-6 text-neutral-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="" icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="leading-relaxed flex-1 text-sm font-light text-neutral-300 mb-8">
          "We pay high salaries for low-value repetitive work, or we simply can't afford the talent we need."
        </p>
<div className="flex items-center gap-3 pt-5 border-t border-white/5">
<div className="flex text-white/90 w-8 h-8 border-white/10 border rounded-full shadow-inner items-center justify-center">
<span className="text-[10px] font-semibold">CFO</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Chief Financial Officer</span>
<span className="text-[10px] text-neutral-300">600 FTE, Fashion industry</span>
</div>
</div>
</div>

<div className="group flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
<div className="mb-6 text-neutral-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="" icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-1 font-light">
          "Even after hiring, fully onboarding someone to be productive takes far too long."
        </p>
<div className="flex items-center gap-3 pt-5 border-t border-white/5">
<div className="flex text-white/90 w-8 h-8 border-white/10 border rounded-full shadow-inner items-center justify-center">
<span className="text-[10px] font-semibold">Ops</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Head of Ops</span>
<span className="text-[10px] text-neutral-300">500 FTE, Plastics Manufacturing</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-neutral-100 border-t pt-20 pb-20">
<div className="flex flex-col w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="flex flex-col text-center max-w-4xl mb-12 items-center">
<span className="text-[10px] uppercase block font-bold text-neutral-500 tracking-wider mb-4">Your new teammate isn’t human</span>
<h2 className="lg:text-4xl md:text-2xl text-2xl font-semibold text-neutral-900 tracking-tight mb-4">Hire AI agents
        that work as part of your team.
      </h2>
<p className="text-sm font-normal text-neutral-500 pb-4">The work gets done and you stay in control.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full pb-12 gap-x-5 gap-y-5">

<div className="flex flex-col group transition-all bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-3 pb-6 pl-3">
<div className="flex mb-4 items-start justify-between">
<div className="flex text-neutral-900 bg-neutral-100 w-10 h-10 rounded-lg items-center justify-center">
<iconify-icon className="" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">
          Works in your tools
        </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">No new dashboards. The agent operates inside the
          systems you already use.</p>
<div className="mt-auto border-t border-neutral-100 pt-4">
<ul className="space-y-2">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            Uses your permissions
          </span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            No tool switching
          </span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col group transition-all bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-3 pb-6 pl-3">
<div className="flex mb-4 items-start justify-between">
<div className="flex text-neutral-900 bg-neutral-100 w-10 h-10 rounded-lg items-center justify-center">
<iconify-icon className="" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">
          Approvals when it matters
        </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">Sensitive steps pause for your OK. Routine work
          runs automatically.</p>
<div className="mt-auto border-t border-neutral-100 pt-4">
<ul className="space-y-2">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            Human approvals on demand
          </span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            No silent actions
          </span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col group transition-all bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-3 pb-6 pl-3">
<div className="flex items-start justify-between mb-4">
<div className="flex text-neutral-900 bg-neutral-100 w-10 h-10 rounded-lg items-center justify-center">
<iconify-icon className="" icon="solar:clipboard-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight mb-2">
          Every step is traceable
        </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">Actions are logged and searchable, so you always
          know what happened and why.</p>
<div className="mt-auto border-t border-neutral-100 pt-4">
<ul className="space-y-2">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            Audit trail by default
          </span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            Clear accountability
          </span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col group transition-all bg-white h-full border-neutral-200 border rounded-xl pt-6 pr-3 pb-6 pl-3">
<div className="flex mb-4 items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900">
<iconify-icon className="" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">
          Gets better over time
        </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">Corrections become rules. The agent adapts to
          your process, not the other way around.</p>
<div className="mt-auto border-t border-neutral-100 pt-4">
<ul className="space-y-2">
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            Learns from feedback
          </span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="text-neutral-900 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">
            Fewer repeats over time
          </span>
</li>
</ul>
</div>
</div>
</div>

<div className="w-full border-neutral-200 border-t border-b pt-12 pb-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-neutral-200">
<div className="flex flex-col items-center text-center px-4">
<span className="text-4xl font-semibold tracking-tight text-neutral-900 mb-2">
                  Any
                </span>
<span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">
                  App or Website
                </span>
</div><div className="flex flex-col text-center pr-4 pl-4 items-center">
<span className="text-4xl font-semibold tracking-tight text-neutral-900 mb-2">
                  24/7
                </span>
<span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">
                  Operation Time
                </span>
</div>
<div className="flex flex-col text-center pr-4 pl-4 items-center">
<span className="text-4xl font-semibold text-neutral-900 tracking-tight mb-2">100%</span>
<span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">
                  Compliance
                </span>
</div>
<div className="flex flex-col items-center text-center px-4">
<span className="text-4xl font-semibold tracking-tight text-neutral-900 mb-2">
                  &lt;1m
                </span>
<span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">First value in</span>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 bg-white w-full border-neutral-100 border-t pt-16 pr-4 pb-16 pl-4 relative">
<div className="flex flex-col md:pl-12 md:pr-12 bg-white max-w-7xl border-neutral-200 border rounded-[2rem] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 mb-8 shadow-sm">
<iconify-icon className="text-neutral-600 text-sm" icon="lucide:user-plus"></iconify-icon>
<span className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">Team Expansion</span>
</div>

<div className="text-center max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight mb-6 leading-[1.15]">
        You're not buying software.<br/>
        You're hiring a coworker.
      </h2>
<p className="text-base md:text-lg text-neutral-500 font-normal leading-relaxed max-w-2xl mx-auto">
        Forget prompt engineering and rigid visual workflows. We are moving from tools that do tasks to agents that hold responsibilities.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full gap-x-6 gap-y-6">

<div className="flex flex-col transition-all hover:border-neutral-200 hover:shadow-sm bg-white border-neutral-100 border rounded-2xl pt-8 pr-6 pb-8 pl-6 items-start border-neutral-200">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-400" icon="lucide:message-square-dashed" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-neutral-900 tracking-tight mb-2">Not a chatbot</h3>
<p className="leading-relaxed text-sm text-neutral-500">It doesn't just wait for your exact prompt to generate text. It actively navigates across your company's tech stack to get work done</p>
</div>

<div className="flex flex-col transition-all hover:border-neutral-200 hover:shadow-sm bg-white border-neutral-100 border rounded-2xl pt-8 pr-6 pb-8 pl-6 items-start border-neutral-200">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-400" icon="lucide:git-pull-request-draft" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2 tracking-tight">Not an automation</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
          No rigid if/then rules that require constant maintenance. It adapts instantly when a business process or external UI changes.
        </p>
</div>

<div className="flex flex-col transition-all hover:border-neutral-200 hover:shadow-sm bg-white border-neutral-100 border rounded-2xl pt-8 pr-6 pb-8 pl-6 items-start border-neutral-200">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-400" height="20" icon="lucide:sparkles" style={{color: 'rgb(163, 163, 163)'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2 tracking-tight">Not a copilot</h3>
<p className="leading-relaxed text-sm text-neutral-500">
          It doesn't just sit alongside you to suggest actions. It takes full ownership of the process and operates independently from start to finish.
        </p>
</div>

<div className="flex flex-col overflow-hidden transition-all duration-300 bg-neutral-950 border-neutral-300 border rounded-2xl pt-8 pr-6 pb-8 pl-6 relative items-start">
<div className="flex bg-white w-10 h-10 border-neutral-300 border rounded-lg mb-6 shadow-sm items-center justify-center">
<iconify-icon className="text-neutral-900" height="20" icon="lucide:user-check" style={{color: 'rgb(23, 23, 23)'}} width="20"></iconify-icon>
</div>
<h3 className="z-10 text-base font-semibold text-neutral-50 tracking-tight mb-2 relative">A capable coworker</h3>
<p className="leading-relaxed z-10 text-sm text-neutral-200 relative">
          Understands intent, handles edge cases, and executes end-to-end workflows autonomously. It raises flags only when human judgment is needed.
        </p>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-neutral-100 border-t pt-24 pb-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col text-center max-w-3xl mr-auto mb-16 ml-auto items-center">
<h2 className="lg:text-4xl text-4xl font-semibold text-neutral-900 tracking-tight mb-6">How a work day with an AI
        agent
        will feel like?</h2>
<p className="leading-relaxed text-lg font-normal text-neutral-500">A live demo ( base on true story )</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-x-8 gap-y-8 items-start">

<div className="flex flex-col lg:pt-6 lg:pr-6 lg:pb-6 lg:pl-6 lg:h-[560px] xl:pr-6 border-neutral-200 border rounded-2xl pt-6 pr-5 pb-6 pl-5 relative">
<div className="flex items-center justify-between mb-8">
<div className="flex gap-x-4 gap-y-4 items-center">
<div className="hidden lg:flex bg-white w-10 h-10 border-neutral-200 border rounded-lg shadow-sm gap-x-4 gap-y-4 items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-set="solar" data-solar="checklist-minimalistic-linear" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z">
</path>
<path d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" strokeLinecap="round" strokeLinejoin="round">
</path>
<path d="M13 9h5m-5 7h5" strokeLinecap="round"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight pt-1">AI agent Timeline</h3>
</div>
<div className="flex items-center gap-2 pointer-events-none opacity-70">
<span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">Click a step</span>
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v10"></path>
<polyline points="8 11 12 15 16 11"></polyline>
</svg>
</div>
</div>
<div className="relative flex-1">
<div className="absolute left-[11px] lg:left-[7px] top-4 bottom-4 w-px bg-neutral-200 z-0"></div>
<div className="flex flex-col lg:gap-4 z-10 relative gap-x-5 gap-y-5">
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="0">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-900" id="timeline-circle-0">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-900" id="timeline-time-0">08:02</span>
<div className="flex-1 transition-all duration-200 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 text-sm text-neutral-600 bg-white z-10 border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm ring-2 ring-neutral-900 border-neutral-900" id="timeline-card-0">
                Morning briefing
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="1">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-1">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-1">09:15</span>
<div className="flex-1 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 transition-all duration-200 text-sm text-neutral-600 bg-white z-10 border-neutral-200 border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm" id="timeline-card-1">
                Duplicate invoice detected
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="2">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-2">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-2">09:45</span>
<div className="z-10 flex-1 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 transition-all duration-200 text-sm text-neutral-600 bg-white border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm border-neutral-200" id="timeline-card-2">
                Incomplete invoice flagged
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="3">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-3">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-3">11:30</span>
<div className="flex-1 transition-all duration-200 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 z-10 text-sm text-neutral-600 bg-white border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm border-neutral-200" id="timeline-card-3">
                Vendor asks for status update
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="4">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-4">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-4">12:10</span>
<div className="z-10 flex-1 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 transition-all duration-200 text-sm text-neutral-600 bg-white border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm border-neutral-200" id="timeline-card-4">
                Missing cost category
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="5">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-5">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-5">13:15</span>
<div className="z-10 flex-1 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 transition-all duration-200 text-sm text-neutral-600 bg-white border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm border-neutral-200" id="timeline-card-5">
                Overdue approval reminder
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="6">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-6">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-6">14:50</span>
<div className="z-10 flex-1 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 transition-all duration-200 text-sm text-neutral-600 bg-white border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm border-neutral-200" id="timeline-card-6">
                Pre-meeting invoice overview
              </div>
</div>
<div className="timeline-row flex cursor-pointer lg:items-center lg:gap-2 z-10 relative gap-x-0 gap-y-3 items-center" data-index="7">
<div className="w-6 lg:w-4 flex justify-center pt-1 lg:pt-0">
<div className="relative z-20 w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full ring-4 ring-neutral-50 transition-colors duration-200 bg-neutral-300" id="timeline-circle-7">
</div>
</div>
<span className="flex-none tabular-nums lg:w-12 lg:pt-0 transition-colors duration-200 text-sm font-bold w-14 pt-0.5 text-neutral-400" id="timeline-time-7">23:42</span>
<div className="z-10 flex-1 lg:pt-2.5 lg:pr-4 lg:pb-2.5 lg:pl-4 transition-all duration-200 text-sm text-neutral-600 bg-white border-neutral-200 border rounded-lg pt-3 pr-2 pb-3 pl-2 relative shadow-sm" id="timeline-card-7">
                End of day wrap-up
              </div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col border border-neutral-200 rounded-2xl bg-white shadow-sm h-[560px] overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 shrink-0">
<div className="flex items-center gap-3">
<img alt="Alea Agent" className="w-10 h-10 border-neutral-200 border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-semibold text-neutral-900 text-sm">Alea Agent</span>
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
</div>
<span className="text-[11px] text-neutral-500 font-medium mt-0.5">Accounting Assistant</span>
</div>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-50 hover:text-neutral-600 transition-colors">
<iconify-icon icon="lucide:video" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-50 hover:text-neutral-600 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 min-h-0 overflow-y-auto bg-neutral-50/50 pt-6 pr-6 pb-6 pl-6" id="chat-section-desktop">
<div className="flex flex-col gap-6 max-w-[980px] w-full mx-auto" id="chat-messages-container-desktop">
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0s both'}}>
<div className="flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Alea</span>
<span className="text-[10px] text-neutral-400">08:02 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                Morning! Already handled the night shift. Here’s where we are:
              </div>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0.06s both'}}>
<div className="flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Alea</span>
<span className="text-[10px] text-neutral-400">08:02 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                4 invoices came in overnight. Verified and sent to DATEV before you had your coffee.<br/><br/>2 emails need a human touch. I’ve drafted replies for both, just say the word.<br/><br/>The other 11? Noise. Labeled and archived.
              </div>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0.12s both'}}>
<div className="flex-none w-8 h-8 rounded-full overflow-hidden">
<img alt="Anna" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Anna</span>
<span className="text-[10px] text-neutral-400">08:03 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                Send the replies.
              </div>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0.18s both'}}>
<div className="flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Alea</span>
<span className="text-[10px] text-neutral-400">08:03 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                Gone. ✓
              </div>
</div>
</div>
</div>
</div>
<div className="shrink-0 cursor-not-allowed select-none bg-neutral-50/50 border-neutral-100 border-t pt-4 pr-4 pb-4 pl-4">
<div className="relative flex items-center opacity-50 pointer-events-none">
<button className="absolute left-3 w-8 h-8 flex items-center justify-center text-neutral-400 rounded-full" disabled="">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
<input className="w-full bg-neutral-100/80 border border-neutral-200 text-sm text-neutral-500 placeholder:text-neutral-400 rounded-full py-2.5 pl-12 pr-14 outline-none" disabled="" placeholder="Message Alea..." type="text"/>
<button className="absolute right-1.5 w-8 h-8 flex items-center justify-center bg-neutral-300 text-white rounded-full" disabled="">
<iconify-icon icon="lucide:arrow-up" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="fixed transition-opacity duration-200 lg:hidden bg-black/30 z-[60] top-0 right-0 bottom-0 left-0 opacity-0 pointer-events-none" id="mobile-sheet-backdrop"></div>
<div className="fixed inset-x-0 bottom-0 transition-transform duration-300 ease-out z-[70] lg:hidden translate-y-full" id="mobile-sheet">
<div className="w-full h-[65vh] flex flex-col overflow-hidden rounded-t-[24px] bg-white shadow-2xl">
<div className="shrink-0 border-b border-neutral-100 bg-white">
<div className="flex justify-center pt-3 pb-2" id="mobile-sheet-handle">
<div className="w-10 h-1 rounded-full bg-neutral-300"></div>
</div>
<div className="px-5 pb-3 text-center">
<div className="text-[11px] text-neutral-500 font-medium" id="mobile-sheet-meta">08:02 AM · 1 of 8</div>
</div>
</div>
<div className="flex-1 min-h-0 overflow-y-auto bg-neutral-50/50 pt-6 pr-6 pb-6 pl-6" id="chat-section-mobile">
<div className="flex flex-col gap-6 max-w-[980px] w-full mx-auto" id="chat-messages-container-mobile">
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0s both'}}>
<div className="flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Alea</span>
<span className="text-[10px] text-neutral-400">08:02 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                Morning! Already handled the night shift. Here’s where we are:
              </div>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0.06s both'}}>
<div className="flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Alea</span>
<span className="text-[10px] text-neutral-400">08:02 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                4 invoices came in overnight. Verified and sent to DATEV before you had your coffee.<br/><br/>2 emails need a human touch. I’ve drafted replies for both, just say the word.<br/><br/>The other 11? Noise. Labeled and archived.
              </div>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0.12s both'}}>
<div className="flex-none w-8 h-8 rounded-full overflow-hidden">
<img alt="Anna" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Anna</span>
<span className="text-[10px] text-neutral-400">08:03 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                Send the replies.
              </div>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'chatFadeIn 0.25s ease-out 0.18s both'}}>
<div className="flex-none w-8 h-8 rounded-full bg-white overflow-hidden ring-1 ring-neutral-200">
<img alt="Alea" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>
<div className="flex flex-col gap-1 max-w-[82%] lg:max-w-[88%]">
<div className="flex items-baseline gap-2 px-1">
<span className="text-xs font-bold text-neutral-900">Alea</span>
<span className="text-[10px] text-neutral-400">08:03 AM</span>
</div>
<div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm text-neutral-700 shadow-sm leading-relaxed">
                Gone. ✓
              </div>
</div>
</div>
</div>
</div>
<div className="shrink-0 border-t border-neutral-100 bg-white px-4 py-3">
<div className="grid grid-cols-[44px_1fr_44px] items-center gap-3">
<button className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 disabled:opacity-35 disabled:cursor-not-allowed" disabled="" id="mobile-prev">
<iconify-icon icon="lucide:chevron-left" width="18"></iconify-icon>
</button>
<div className="text-center text-sm font-semibold text-neutral-900 truncate" id="mobile-sheet-title">Morning briefing</div>
<button className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 disabled:opacity-35 disabled:cursor-not-allowed" id="mobile-next">
<iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</div>

</div>
</section><section className="w-full border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-16 items-center">

<div className="order-last lg:order-first w-full">
<div className="sm:p-8 flex flex-col bg-white border border-neutral-200 rounded-2xl p-6 gap-y-3">

<div className="flex pb-2 items-center justify-between">
<div className="flex gap-4 items-center">
<div className="relative flex-none">
<div className="w-14 h-14 rounded-xl bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm">
<img alt="Avatar" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png"/>
</div>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex flex-col">
<h3 className="font-semibold text-neutral-900 text-lg tracking-tight">Active Channels</h3>
<p className="text-sm text-neutral-500">8 platforms connected</p>
</div>
</div>
<span className="hidden md:block text-xs font-medium text-neutral-500">Omni channel</span>
</div>

<div className="border-t border-neutral-100 py-2"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">Phone</span>
<span className="text-[10px] text-neutral-400">Voice connected</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">Email</span>
<span className="text-[10px] text-neutral-400">Inbox synced</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">Webchat</span>
<span className="text-[10px] text-neutral-400">Widget active</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon icon="ri:whatsapp-line" width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">WhatsApp</span>
<span className="text-[10px] text-neutral-400">Business API</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon className="" height="18" icon="lucide:instagram" style={{color: 'rgb(115, 115, 115)'}} width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">Instagram</span>
<span className="text-[10px] text-neutral-400">DMs connected</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon className="" icon="mdi:slack" width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">Slack</span>
<span className="text-[10px] text-neutral-400">Team workspace</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="flex text-neutral-500 bg-white w-10 h-10 border-neutral-200 border rounded-lg shadow-sm items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="microsoft-teams" height="20" strokeWidth="2" style={{color: 'rgb(115, 115, 115)', width: '20px', height: '20px'}} viewbox="0 0 256 239" width="20" xmlns="http://www.w3.org/2000/svg"><defs><lineargradient id="SVGCXPeteLK" x1="17.372%" x2="82.628%" y1="-6.51%" y2="106.51%"><stop offset="0%" stop-color="#5A62C3"></stop><stop offset="50%" stop-color="#4D55BD"></stop><stop offset="100%" stop-color="#3940AB"></stop></lineargradient><path d="M136.93 64.476v12.8a32.7 32.7 0 0 1-5.953-.952a38.7 38.7 0 0 1-26.79-22.742h21.848c6.008.022 10.872 4.887 10.895 10.894" id="SVGirAuMb7G"></path></defs><path d="M178.563 89.302h66.125c6.248 0 11.312 5.065 11.312 11.312v60.231c0 22.96-18.613 41.574-41.573 41.574h-.197c-22.96.003-41.576-18.607-41.579-41.568V95.215a5.91 5.91 0 0 1 5.912-5.913" fill="#737373"></path><circle cx="223.256" cy="50.605" fill="#737373" r="26.791"></circle><circle cx="139.907" cy="38.698" fill="#737373" r="38.698"></circle><path d="M191.506 89.302H82.355c-6.173.153-11.056 5.276-10.913 11.449v68.697c-.862 37.044 28.445 67.785 65.488 68.692c37.043-.907 66.35-31.648 65.489-68.692v-68.697c.143-6.173-4.74-11.296-10.913-11.449" fill="#737373"></path><path d="M142.884 89.302v96.268a10.96 10.96 0 0 1-6.787 10.062c-1.3.55-2.697.833-4.108.833H76.68c-.774-1.965-1.488-3.93-2.084-5.953a72.5 72.5 0 0 1-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z" opacity=".1"></path><path d="M136.93 89.302v102.222c0 1.411-.283 2.808-.833 4.108a10.96 10.96 0 0 1-10.062 6.787H79.48c-1.012-1.965-1.965-3.93-2.798-5.954a59 59 0 0 1-2.084-5.953a72.5 72.5 0 0 1-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z" opacity=".2"></path><path d="M136.93 89.302v90.315c-.045 5.998-4.896 10.85-10.895 10.895H74.597a72.5 72.5 0 0 1-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z" opacity=".2"></path><path d="M130.977 89.302v90.315c-.046 5.998-4.897 10.85-10.895 10.895H74.597a72.5 72.5 0 0 1-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z" opacity=".2"></path><path d="M142.884 58.523v18.753c-1.012.06-1.965.12-2.977.12s-1.965-.06-2.977-.12a32.7 32.7 0 0 1-5.953-.952a38.7 38.7 0 0 1-26.791-22.742a33 33 0 0 1-1.905-5.954h29.708c6.007.023 10.872 4.887 10.895 10.895" opacity=".1"></path><use href="#SVGirAuMb7G" opacity=".2"></use><use href="#SVGirAuMb7G" opacity=".2"></use><path d="M130.977 64.476v11.848a38.7 38.7 0 0 1-26.791-22.743h15.896c6.008.023 10.872 4.888 10.895 10.895" opacity=".2"></path><path d="M10.913 53.581h109.15c6.028 0 10.914 4.886 10.914 10.913v109.151c0 6.027-4.886 10.913-10.913 10.913H10.913C4.886 184.558 0 179.672 0 173.645V64.495C0 58.466 4.886 53.58 10.913 53.58" fill="#737373"></path><path d="M94.208 95.125h-21.82v59.416H58.487V95.125H36.769V83.599h57.439z" fill="#737373"></path></svg>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">Teams</span>
<span className="text-[10px] text-neutral-400">Internal collaboration</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50/30">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shadow-sm">
<iconify-icon icon="lucide:smartphone" width="18"></iconify-icon>
</div>
<div className="ml-3 flex-1 flex flex-col">
<span className="text-sm font-semibold text-neutral-700">In App</span>
<span className="text-[10px] text-neutral-400">SDK integrated</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:items-start lg:text-left text-center max-w-xl mx-auto">
<span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-4">
          Omnichannel Experience
        </span>
<h2 className="lg:text-[42px] leading-tight text-3xl font-semibold text-neutral-900 tracking-tight mb-6">
          One consistent voice across every touchpoint.
        </h2>
<p className="leading-relaxed text-lg text-neutral-500 pb-6 max-w-[34rem]">
          Whether resolving a ticket via email or answering a WhatsApp DM, your AI agent maintains your exact brand tone
          and follows your unique guidelines everywhere you operate.
        </p>
<ul className="flex flex-col lg:items-start pb-10 gap-x-3 gap-y-3 items-center">
<li className="flex items-center gap-3 text-neutral-700">
<div className="flex text-emerald-600 bg-emerald-500/10 w-5 h-5 rounded-full items-center justify-center">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-600">Instant responses, zero wait time</span>
</li>
<li className="flex items-center gap-3 text-neutral-700">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-600">Native support for 8+ platforms</span>
</li>
</ul>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all hover:shadow-md hover:-translate-y-0.5 duration-200 text-sm font-medium text-white bg-neutral-900 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm" href="#">
          Hire an AI Employee
        </a>
</div>
</div>
</div>
</section><section className="w-full border-neutral-100 border-t pt-24 pb-24">
<div className="flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="mb-16 max-w-2xl text-center">
<span className="text-[10px] uppercase block font-bold text-neutral-500 tracking-wider mb-4">SCALES WITH VOLUME</span>
<h2 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Will be trained to grow with you</h2>
<p className="text-neutral-500 text-sm leading-relaxed">
              Retain institutional knowledge, ensure seamless handoffs, and
              scale operations without headcount bottlenecks.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full gap-x-6 gap-y-6">

<div className="flex flex-col overflow-hidden bg-white h-full border-neutral-200 border rounded-xl">

<div className="flex overflow-hidden group bg-neutral-50 w-full h-56 border-neutral-100 border-b relative items-center justify-center">

<div className="[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] opacity-[0.4] absolute top-0 right-0 bottom-0 left-0">
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">

<line stroke="#e5e5e5" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="20%" y1="50%" y2="25%"></line>
<line stroke="#e5e5e5" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="80%" y1="50%" y2="25%"></line>
<line stroke="#e5e5e5" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="20%" y1="50%" y2="75%"></line>
<line stroke="#e5e5e5" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="80%" y1="50%" y2="75%"></line>
</svg>

<div className="relative z-10 w-16 h-16 bg-white rounded-2xl border border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center">
<div className="absolute -inset-2 bg-white/50 rounded-full -z-10 blur-md opacity-0">
</div>
<svg className="lucide lucide-brain-circuit text-neutral-800" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M6 18a4 4 0 0 1-1.97-3.284"></path>
<path d="M12 18a4 4 0 0 1-1.97-3.284"></path>
<path d="M15 13a4.5 4.5 0 0 1 3-4"></path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
<path d="M17.97 14.716A4 4 0 0 1 16 18"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
</svg>

<div className="-bottom-8 -translate-x-1/2 text-[10px] whitespace-nowrap font-semibold text-neutral-600 tracking-tight bg-white border-neutral-100 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 absolute left-1/2">
    Agent Memory</div>
</div>


<div className="absolute top-8 left-8 sm:left-12 w-10 h-10 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300 group/node">
<svg className="lucide lucide-file-text text-neutral-400 group-hover/node:text-neutral-600 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>

<div className="absolute top-8 right-8 sm:right-12 w-10 h-10 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300 group/node">
<svg className="lucide lucide-git-branch text-neutral-400 group-hover/node:text-neutral-600 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="6" y1="3" y2="15"></line>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>
</div>

<div className="absolute bottom-8 left-8 sm:left-12 w-10 h-10 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300 group/node">
<svg className="lucide lucide-history text-neutral-400 group-hover/node:text-neutral-600 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M12 7v5l4 2"></path>
</svg>
</div>

<div className="absolute bottom-8 right-8 sm:right-12 w-10 h-10 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300 group/node">
<svg className="lucide lucide-shield-check text-neutral-400 group-hover/node:text-neutral-600 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>

<div className="absolute top-4 left-4">
</div>
</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">
                  Knowledge stays in the company
                </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Everything you teach your AI employee remains permanently
                  available – processes, answers, expertise – no matter who
                  leaves.
                </p>
</div>
</div>

<div className="flex flex-col overflow-hidden bg-white h-full border-neutral-200 border rounded-xl">

<div className="flex flex-col bg-neutral-50 w-full h-56 border-neutral-100 border-b relative items-center justify-center">
<div className="absolute top-6 z-10">
</div>
<div className="flex items-center gap-2 sm:gap-4 mt-4">

<div className="flex flex-col items-center gap-2">
<div className="relative w-12 h-12 rounded-full ring-2 ring-white shadow-sm bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png)] bg-cover bg-center"></div>
<span className="text-[10px] font-medium text-neutral-500">
                      AI
                    </span>
</div>

<iconify-icon className="text-neutral-300 text-xl" icon="solar:arrow-right-linear"></iconify-icon>

<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400">
<iconify-icon className="" icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-500">
                      Handoff
                    </span>
</div>

<iconify-icon className="text-neutral-300 text-xl" icon="solar:arrow-right-linear"></iconify-icon>

<div className="flex flex-col items-center gap-2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-neutral-500 text-[10px] font-bold">
                        JD
                      </div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center text-neutral-600 text-[10px] font-bold">
                        AS
                      </div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-800 flex items-center justify-center text-white text-[10px] font-bold">
                        MK
                      </div>
</div>
<span className="text-[10px] font-medium text-neutral-500">
                      Team
                    </span>
</div>
</div>

</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight mb-3">Routine inquiries run automatically</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Your team only handles special cases. Standard questions are
                  answered automatically, freeing up time for complex
                  conversations.
                </p>
</div>
</div>

<div className="flex flex-col overflow-hidden bg-white h-full border-neutral-200 border rounded-xl">

<div className="flex bg-neutral-50 w-full h-56 border-neutral-100 border-b pr-8 pb-8 pl-8 relative gap-x-8 gap-y-8 items-end justify-center">

<div className="flex flex-col gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-24 bg-neutral-200/50 rounded-lg border border-neutral-200 flex items-center justify-center text-[10px] text-neutral-500 font-medium h-20">
                    Volume
                  </div>
<div className="flex -space-x-2">
</div>
</div>

<div className="flex flex-col items-center gap-3 relative">

<div className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full ring-2 ring-white shadow-md bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png)] bg-cover bg-center"></div>
<div className="w-24 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col items-center justify-center text-[10px] text-white font-medium h-32 shadow-lg z-10">
<span className="">50M Revenue</span>
<span className="opacity-50 text-[9px] mt-1">
                      Scaled via AI
                    </span>
</div>
<div className="flex -space-x-2 opacity-50 grayscale">
</div>
</div>
</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight mb-3">
                  Grow through volume, not headcount
                </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                  More traffic and new countries shouldn't mean constantly
                  recruiting. Scale your AI employee's capacity instantly
                  instead.
                </p>
</div>
</div>
</div>
</div>
</section><section className="w-full border-neutral-100 border-t pt-20 pb-20">
<div className="flex flex-col w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="flex flex-col items-center text-center max-w-2xl mb-16">
<span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-4">
              It's soo much cheaper
            </span>
<h2 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
        Calculate the difference.
      </h2>
<p className="text-base text-neutral-500 leading-relaxed">
        Compare the cost and efficiency of a traditional human workforce
        versus an Agentee instance for repetitive tasks.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">

<div className="flex flex-col sm:p-10 overflow-hidden bg-white h-full border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">

<div className="flex items-start gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 flex-none">
<iconify-icon className="" icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex flex-col">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
              Human Employee
            </h3>
<span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide mt-1">
                    Traditional
                  </span>
</div>
</div>

<div className="flex flex-col mb-10">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tight text-neutral-300">
                    $65k
                  </span>
<span className="text-lg text-neutral-400 font-medium">/yr</span>
</div>
<span className="text-sm font-medium text-neutral-400 mt-2">
                  + benefits, equity, and training
                </span>
</div>

<div className="flex flex-col mt-auto w-full">
<div className="flex border-neutral-100 border-b pt-4 pb-4 items-center justify-between">
<span className="text-sm font-medium text-neutral-900">
                    Availability
                  </span>
<span className="text-sm text-neutral-400">40 hrs/week</span>
</div>
<div className="flex border-neutral-100 border-b pt-4 pb-4 items-center justify-between">
<span className="text-sm font-medium text-neutral-900">
                    Hiring
                  </span>
<span className="text-sm text-neutral-400">At least a month</span>
</div>
<div className="flex items-center justify-between py-4 border-b border-neutral-100">
<span className="text-sm font-medium text-neutral-900">
                    Knowledge Retention
                  </span>
<span className="text-sm text-neutral-400">Variable</span>
</div>
<div className="flex pt-4 pb-4 items-center justify-between">
<span className="text-sm font-medium text-neutral-900">
                    Onboarding
                  </span>
<span className="text-sm text-neutral-400">Weeks to Months</span>
</div>
</div>
</div>

<div className="flex flex-col sm:p-10 overflow-hidden bg-white h-full border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">

<div className="sm:right-10 absolute top-8 right-8 items-center justify-center">
<span className="inline-flex items-center text-[10px] font-medium text-neutral-500 bg-neutral-50 border-neutral-100 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                  Recommended
                </span>
</div>

<div className="flex mb-8 gap-x-4 gap-y-4 items-center justify-start">
<div className="flex flex-none bg-center text-white w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex flex-col">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
              Agentee Instance
            </h3>
<span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wide mt-1">
                    Active Now
                  </span>
</div>
</div>

<div className="flex flex-col mb-10">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tight text-neutral-900">
                    $1500
                  </span>
<span className="text-lg text-neutral-500 font-medium">/mo</span>
</div>
<span className="text-sm text-neutral-500 font-medium mt-2">
                  Flat rate. Universal capability.
                </span>
</div>

<div className="flex flex-col mb-8 w-full">
<div className="flex items-center justify-between py-4 border-b border-neutral-100">
<span className="text-sm font-medium text-neutral-900">
                    Availability
                  </span>
<span className="text-sm font-semibold text-neutral-900">
                    168 hrs/week
                  </span>
</div>
<div className="flex items-center justify-between py-4 border-b border-neutral-100">
<span className="text-sm font-medium text-neutral-900">
                    Knowledge Retention
                  </span>
<span className="text-sm font-semibold text-neutral-900">
                    Perfect
                  </span>
</div>
<div className="flex items-center justify-between py-4 border-b border-neutral-100">
<span className="text-sm font-medium text-neutral-900">
                    Onboarding
                  </span>
<span className="text-sm font-semibold text-neutral-900">
                    Minutes
                  </span>
</div>
<div className="flex items-center justify-between py-4">
<span className="text-sm font-medium text-neutral-900">
                    Learning Style
                  </span>
<span className="text-sm font-semibold text-neutral-900">
                    Visual &amp; Adaptive
                  </span>
</div>
</div>

<div className="mt-auto">
<button className="hover:bg-neutral-800 transition-colors flex text-sm font-medium text-white bg-neutral-900 w-full rounded-full pt-3.5 pr-4 pb-3.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center">
                  Hire your first Agentee
                </button>
</div>
</div>
</div>
</div>
</section><section className="w-full border-neutral-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">

<div className="max-w-2xl mx-auto text-center mb-16">
<span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-4 block">
        Capacity unlock
      </span>
<h2 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
        The same team can handle much more.
      </h2>
<p className="text-base text-neutral-500 leading-relaxed">
        Agentee removes repetitive operational load, so your team can scale output
        without scaling headcount at the same pace.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="w-full bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8">
<div className="mb-6">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
            Team output vs operational load
          </h3>
<p className="text-sm text-neutral-500 mt-1">
            Conceptual view, not a fixed benchmark
          </p>
</div>
<svg className="w-full h-auto" viewbox="0 0 640 440">

<line stroke="#f1f5f9" strokeWidth="1" x1="72" x2="616" y1="78" y2="78"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="72" x2="616" y1="148" y2="148"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="72" x2="616" y1="218" y2="218"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="72" x2="616" y1="288" y2="288"></line>

<line stroke="#d4d4d8" strokeWidth="1.5" x1="72" x2="72" y1="20" y2="368"></line>
<line stroke="#d4d4d8" strokeWidth="1.5" x1="72" x2="616" y1="368" y2="368"></line>

<text fill="#737373" fontSize="12" font-weight="500" transform="rotate(-90 34 226)" x="34" y="226">
            Work handled by the same team
          </text>

<text fill="#a3a3a3" fontSize="12" x="72" y="398">Low</text>
<text fill="#a3a3a3" fontSize="12" text-anchor="middle" x="344" y="398">Growing</text>
<text fill="#a3a3a3" fontSize="12" text-anchor="end" x="616" y="398">High</text>

<text fill="#737373" fontSize="12" font-weight="500" text-anchor="middle" x="344" y="423">
            Operational load
          </text>

<circle cx="72" cy="368" fill="#d4d4d8" r="2.5"></circle>
<circle cx="344" cy="368" fill="#d4d4d8" r="2.5"></circle>
<circle cx="616" cy="368" fill="#d4d4d8" r="2.5"></circle>

<path d="M72 332
               C170 310, 240 286, 316 262
               C410 232, 510 212, 616 192" fill="none" stroke="#a3a3a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
</path>

<path d="M72 332
               C150 290, 220 236, 316 176
               C406 120, 504 84, 616 58" fill="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
</path>

<circle cx="616" cy="192" fill="#a3a3a3" r="5"></circle>
<circle cx="616" cy="58" fill="#171717" r="5"></circle>

<g transform="translate(438 84)">
<rect fill="white" height="28" rx="10" ry="10" stroke="#e5e5e5" width="126" x="0" y="0"></rect>
<text fill="#171717" fontSize="12" font-weight="600" text-anchor="middle" x="63" y="18">
              With Agentee
            </text>
</g>
<g className="" transform="translate(408 206)">
<rect fill="white" height="28" rx="10" ry="10" stroke="#e5e5e5" width="152" x="0" y="0"></rect>
<text className="" fill="#525252" fontSize="12" font-weight="600" text-anchor="middle" x="76" y="18">
              Traditional workflow
            </text>
</g>
</svg>
</div>

<div className="flex flex-col lg:mx-0 lg:text-left lg:items-start text-center max-w-xl mr-auto ml-auto items-center">
<div className="space-y-3">
<div className="">
<h3 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-3">
              More output, less operational drag.
            </h3>
<p className="leading-relaxed text-base text-neutral-500">As demand grows, teams usually spend more time on
              repetitive coordination, follow-ups, sorting, answering, and routing. Agentee takes that load off the
              team, so the same people can stay focused on higher-value work while handling a much larger volume
              overall.</p>
</div>
<div className="">
</div>
</div>
<div className="mt-8">
<ul className="pb-10 space-y-3">
<li className="flex items-center gap-3 justify-center lg:justify-start">
<div className="flex text-emerald-600 bg-emerald-500/10 w-5 h-5 rounded-full items-center justify-center">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-600">
                Same team, significantly more capacity
              </span>
</li>
<li className="flex items-center gap-3 justify-center lg:justify-start">
<div className="flex text-emerald-600 bg-emerald-500/10 w-5 h-5 rounded-full items-center justify-center">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-600">
                Less repetitive work blocking the team
              </span>
</li>
</ul>
</div>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all hover:shadow-md hover:-translate-y-0.5 duration-200 text-sm font-medium text-white bg-neutral-900 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm" href="#">
          Hire an AI Employee
        </a>
</div>
</div>
</div>
</section>


<section className="w-full pt-12 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="overflow-hidden flex flex-col md:flex-row bg-neutral-900 rounded-3xl relative">

<div className="md:w-1/2 min-h-[280px] md:min-h-[400px] flex overflow-hidden md:border-b-0 md:border-r bg-neutral-800/30 border-neutral-800 border-b relative items-center justify-center">

<div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900">
</div>
<div className="-translate-x-1/2 -translate-y-1/2 md:w-[32rem] md:h-[32rem] w-72 h-72 rounded-full absolute top-1/2 left-1/2 blur-3xl">
</div>

<div className="relative z-10 flex items-center justify-center">

<div className="absolute -left-10 md:-left-20 opacity-40 scale-90 -rotate-12 w-28 h-28 md:w-48 md:h-48 rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden shadow-xl">
<img alt="Clair" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c834370-c2df-41dc-85cb-fd0c27f94d76_320w.png"/>
</div>

<div className="absolute -right-10 md:-right-20 opacity-40 scale-90 rotate-12 w-28 h-28 md:w-48 md:h-48 rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden shadow-xl">
<img alt="ALEA" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d637331-66df-4b21-9caa-e6dee537e562_320w.png"/>
</div>

<div className="relative z-20 overflow-hidden rounded-full border-4 border-neutral-800 shadow-2xl w-40 h-40 md:w-60 md:h-60 transition-transform duration-500 hover:scale-105">
<img alt="Alessa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d92f0ab-c821-4098-b89d-c8091fc0be08_320w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent">
</div>
</div>
</div>
</div>

<div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-10 md:mb-12">
                                        Get your AI employee in only 3 steps
                                </h2>
<div className="flex flex-col space-y-8 mb-10 md:mb-12">

<div className="flex items-start gap-4 md:gap-5">
<div className="flex-none w-8 h-8 rounded-full border border-neutral-700 text-white flex items-center justify-center text-sm font-medium">
                                                        1
                                                </div>
<div className="flex flex-col pt-0.5">
<h3 className="text-base font-medium text-white mb-1">
                                                                Initial Meeting
                                                        </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                                                We analyze your use cases and define your first AI
                                                                employee.
                                                        </p>
</div>
</div>

<div className="flex items-start gap-4 md:gap-5">
<div className="flex-none w-8 h-8 rounded-full border border-neutral-700 text-white flex items-center justify-center text-sm font-medium">
                                                        2
                                                </div>
<div className="flex flex-col pt-0.5">
<h3 className="text-base font-medium text-white mb-1">
                                                                Setup &amp; Training
                                                        </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                                                We set up your account and train the AI with your data.
                                                        </p>
</div>
</div>

<div className="flex items-start gap-4 md:gap-5">
<div className="flex-none w-8 h-8 rounded-full border border-neutral-700 text-white flex items-center justify-center text-sm font-medium">
                                                        3
                                                </div>
<div className="flex flex-col pt-0.5">
<h3 className="text-base font-medium text-white mb-1">
                                                                Go-Live
                                                        </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                                                Your AI employee goes live and you optimize step by
                                                                step.
                                                        </p>
</div>
</div>
</div>
<div className="flex justify-center md:justify-start">
<a className="inline-flex items-center justify-center hover:bg-neutral-200 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm font-semibold text-neutral-900 bg-white rounded-full py-3 px-10 md:px-12 shadow-lg" href="#">
                                                Hire AI Employee!
                                        </a>
</div>
</div>
</div>
</div>
</section>



<section className="w-full border-neutral-100 border-t pt-24 pb-24">
<div className="flex flex-col w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="flex flex-col text-center max-w-4xl mb-16 items-center">
<a className="group inline-flex items-center gap-1 text-[10px] uppercase hover:text-neutral-600 transition-colors font-bold text-neutral-400 tracking-wider mb-6" href="#">
              About Us
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h2 className="lg:text-5xl leading-tight text-4xl font-semibold text-neutral-900 tracking-tighter mb-6">
              Built for the future of work.
            </h2>
<p className="leading-relaxed text-lg text-neutral-500 max-w-2xl">
              Our mission is to liberate teams from the drudgery of copy-pasting
              data between tabs, allowing them to focus on strategy,
              relationships, and creative problem-solving.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">

<div className="flex flex-col hover:border-neutral-300 transition-colors bg-white h-full border-neutral-200 border rounded-2xl pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="flex flex-col">
<div className="flex -space-x-3 mb-8">
<img alt="Alea" className="w-12 h-12 object-cover z-30 border-white border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b56d796-6e7c-449e-993a-cf95eaee59e8_320w.png"/>
<img alt="Clair" className="w-12 h-12 object-cover z-20 border-white border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8f20d67-1788-41f6-b48a-98e0c3191303_320w.png"/>
<img alt="Soroush" className="z-10 w-12 h-12 object-cover border-white border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e1c8943-91cd-4d61-bfc5-7c9bfe3296e6_320w.png"/>
</div>
<h3 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4 leading-tight">
                  Raising, not Building, an Agentic Employee
                </h3>
<p className="leading-relaxed text-sm text-neutral-500">
                  We believe in AI that grows with you. Not just scripts, but
                  agents that learn context, adapt to culture, and become
                  valuable team members.
                </p>
</div>
<div className="mt-8">
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all hover:shadow-md hover:-translate-y-0.5 duration-200 text-sm font-medium text-white bg-neutral-900 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm" href="#">
                  About us
                  <iconify-icon className="text-xs" height="12" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="12"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col gap-6 h-full">

<div className="flex flex-col sm:flex-row gap-6 hover:border-neutral-300 transition-colors flex-1 bg-white border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6">
<div className="flex-none">
<img alt="Daniel Stojanovic" className="bg-center bg-neutral-50 w-16 h-16 object-cover border-neutral-100 border rounded-full shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7861d5f7-76c9-4323-89f5-c95441701e1a_320w.png"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-1">
                    Daniel Stojanovic
                  </h3>
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Founder &amp; CEO
                  </span>
<p className="leading-relaxed text-xs text-neutral-500">
                    Visionary leader focused on redefining work through
                    automation. Daniel brings a decade of experience in scaling
                    operations.
                  </p>
</div>
</div>

<div className="flex flex-col sm:flex-row hover:border-neutral-300 transition-colors flex-1 bg-white border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6">
<div className="flex-none">
<img alt="Fino Group Logo" className="bg-center w-12 h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3191e42d-a9e7-49a3-8fdb-5861b2887eac_320w.png"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-1">
                    Fino Group
                  </h3>
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Parent Company
                  </span>
<p className="text-xs text-neutral-500 leading-relaxed">
                    We are proud to be a part of the Fino Group. Their expertise and infrastructure empower us to scale our AI employees and redefine the future of work</p></div></div>
</div>
</div>
</div>
</section>

<section className="w-full border-neutral-100 border-t pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col text-center mb-16 items-center">
<span className="mb-4 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Magazine
            </span>
<h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900 lg:text-4xl">
              Latest topics
            </h2>
<p className="max-w-2xl text-lg text-neutral-500">
              Insights on AI workforce integration, automation trends, and the
              future of work.
            </p>
<a className="mt-8 inline-block rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-md" href="#">
              View all articles
            </a>
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16 gap-x-8 gap-y-8">

<article className="group flex flex-col h-full cursor-pointer border border-neutral-200 rounded-2xl bg-white overflow-hidden hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="overflow-hidden bg-neutral-100 aspect-[16/10] relative">
<img alt="Team meeting" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1fc0d28-c717-4a40-adf4-9d64972faf10_800w.jpg"/>
</div>
<div className="flex flex-col flex-1 bg-white pt-5 pr-5 pb-5 pl-5">
<div className="mb-3 flex items-center gap-3">
<span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 uppercase tracking-wide">
                    Culture
                  </span>
<span className="text-[10px] font-medium text-neutral-400">
                    Oct 24, 2023
                  </span>
</div>
<h3 className="group-hover:text-neutral-600 transition-colors text-xl font-medium text-neutral-900 tracking-tight mb-3">
                  How to prepare your team for their first AI colleague
                </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">
                  Cultural alignment is just as important as technical
                  implementation. Here is how to bridge the gap between human
                  and digital workers.
                </p>
<span className="inline-flex items-center text-sm font-medium text-neutral-900 mt-auto">
                  Read article
                  <iconify-icon className="ml-1 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>

<article className="group flex flex-col h-full cursor-pointer border border-neutral-200 rounded-2xl bg-white overflow-hidden hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="overflow-hidden bg-neutral-100 aspect-[16/10] relative">
<img alt="Data visualization" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c28a58c-3a22-4082-8328-5b511c8c1e69_800w.jpg"/>
</div>
<div className="flex flex-col flex-1 pt-5 pr-5 pb-5 pl-5">
<div className="mb-3 flex items-center gap-3">
<span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 uppercase tracking-wide">
                    Technology
                  </span>
<span className="text-[10px] font-medium text-neutral-400">
                    Oct 18, 2023
                  </span>
</div>
<h3 className="mb-3 text-xl font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  The hidden costs of "Human-in-the-Loop" systems
                </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">
                  Why partial automation often leads to increased frustration
                  and how fully agentic workflows solve the handoff problem.
                </p>
<span className="inline-flex items-center text-sm font-medium text-neutral-900 mt-auto">
                  Read article
                  <iconify-icon className="ml-1 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>

<article className="group flex flex-col h-full cursor-pointer border border-neutral-200 rounded-2xl bg-white overflow-hidden hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="overflow-hidden bg-neutral-100 aspect-[16/10] relative">
<img alt="Strategy planning" className="opacity-90 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33f2ff17-cc80-4b1c-875b-005fde5f9b67_800w.png"/>
</div>
<div className="flex flex-col flex-1 pt-5 pr-5 pb-5 pl-5">
<div className="mb-3 flex items-center gap-3">
<span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 uppercase tracking-wide">
                    Strategy
                  </span>
<span className="text-[10px] font-medium text-neutral-400">
                    Sep 29, 2023
                  </span>
</div>
<h3 className="mb-3 text-xl font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  From Task Automation to Role Automation
                </h3>
<p className="leading-relaxed flex-1 text-sm text-neutral-500 mb-6">
                  We are moving from tools that do tasks to agents that hold
                  responsibilities. What this means for your org chart.
                </p>
<span className="inline-flex items-center text-sm font-medium text-neutral-900 mt-auto">
                  Read article
                  <iconify-icon className="ml-1 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>
</div>
</section>

<section className="w-full border-neutral-100 border-t pt-24 pb-24">
<div className="flex flex-col w-full max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
<span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 mb-4">
                Common Questions
            </span>
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Frequently asked questions</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="flex flex-col gap-6">

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">What exactly is the AI agent, and how does it work?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" height="20" icon="solar:add-circle-linear" style={{color: 'rgb(23, 23, 23)'}} width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                An Agentee is a digital employee trained for a specific role in your company. It follows your processes, uses your existing tools, and communicates with your team through familiar channels like Microsoft Teams or email. When something is unclear, it asks rather than guesses.
                            </p>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">How does it integrate with our existing systems?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" height="20" icon="solar:add-circle-linear" style={{color: 'rgb(23, 23, 23)'}} width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                Think of it like onboarding a new teammate. The Agentee gets access to the tools your team already uses: email, communication platforms, industry-specific software, and internal systems. There is no separate portal or new UI to adopt.
                            </p>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">Is our data safe? What about DSGVO and compliance?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                Yes. All data is processed on EU-based infrastructure using EU-hosted AI models. The Agentee is fully DSGVO-compliant. Your credentials are never shared or stored in plain text. We operate under strict data residency and access controls.
                            </p>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">How does it communicate with us day-to-day?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                The Agentee reaches out through the channels your team already uses, whether that's Microsoft Teams, Slack, or email. It sends updates, asks clarification questions, and flags exceptions right where your conversations happen. No context switching.
                            </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">Can it handle follow-ups and chase missing information?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                Absolutely. The Agentee proactively follows up on outstanding items, missing documents, and pending responses. It sends reminders to the responsible person, tracks progress, and escalates when deadlines approach. No more manual chasing.
                            </p>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">How much human involvement is still needed?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                Think of it like onboarding a junior team member. In the first weeks, the Agentee checks in more frequently. Over time, it handles roughly 80% of cases fully autonomously. The remaining 20% are edge cases where it asks for confirmation.
                            </p>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span>Does it replace our team, or support them?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                The Agentee is built to support, not replace. It takes over the repetitive, time-consuming tasks so your team can focus on higher-value work. For most customers, the real driver is that qualified specialists are nearly impossible to hire.
                            </p>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors shadow-sm hover:shadow-sm">
<button className="accordion-trigger flex w-full items-center justify-between p-6 text-left text-sm font-medium text-neutral-900">
<span className="">What happens when the AI isn't sure or makes a mistake?</span>
<div className="relative flex items-center justify-center w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon className="icon-closed absolute" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="icon-open absolute hidden" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-all duration-300 ease-out">
<div className="accordion-inner min-h-0 overflow-hidden">
<p className="text-sm text-neutral-500 leading-relaxed px-6 pb-6 pt-0">
                                The Agentee never guesses. When confidence is low, it stops and asks your team before proceeding. Think of a traffic-light system: green means act, yellow means ask, red means escalate. Your team stays in control.
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-neutral-100 border-t pt-24 pb-24">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<h2 className="lg:text-5xl leading-tight text-4xl font-semibold text-neutral-900 tracking-tight mb-6 max-w-3xl mx-auto">
    Be one of the first leaders who hires AI into their team
  </h2>

<div className="flex flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-6 gap-x-3 gap-y-3 justify-center">

<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-colors hover:border-neutral-300">
<iconify-icon className="text-neutral-400" icon="solar:settings-minimalistic-linear" width="14"></iconify-icon>
<span className="text-sm font-medium text-neutral-600">No additional software needed</span>
</div>

<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-colors hover:border-neutral-300">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="text-sm font-medium text-neutral-600">GDPR compliant</span>
</div>

<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-colors hover:border-neutral-300">
<iconify-icon className="text-neutral-400" icon="solar:server-linear" width="14"></iconify-icon>
<span className="text-sm font-medium text-neutral-600">ISO 27001 certified servers</span>
</div>
</div><p className="leading-relaxed text-lg text-neutral-500 max-w-2xl pb-4">Join forward-thinking companies replacing manual processes with autonomous agents..</p>

<button className="hover:bg-neutral-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex text-sm font-medium text-white bg-neutral-900 rounded-full pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center">Hire your first AI Employee</button>
</div>
</section>
</main>

<footer className="bg-neutral-900 w-full border-neutral-800 border-t pt-24 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">

<div className="col-span-2 lg:col-span-2 flex flex-col">
<a className="text-white hover:opacity-70 transition-opacity text-lg font-semibold tracking-tighter mb-4" href="#">
          Agentee.io
        </a>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-xs">
          AI employees that learn your process, handle exceptions, and get better over time.
        </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="" icon="ri:twitter-x-line" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="" icon="ri:github-fill" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col space-y-4">
<h4 className="text-sm font-semibold text-white">Product</h4>
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#">Alea</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#">Claire</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#">Alessa</a>
</div>

<div className="flex flex-col space-y-4">
<h4 className="text-sm font-semibold text-white">Company</h4>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#">News letter</a>
</div>

<div className="flex flex-col space-y-4">
<h4 className="text-sm font-semibold text-white">Resources</h4>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500">© 2025 fino Revops GMBH . All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
