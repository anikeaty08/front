import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const BRAND = '#913D43';

    const chatScroll = document.getElementById('chatScroll');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const micBtn = document.getElementById('micBtn');
    const listeningBar = document.getElementById('listeningBar');
    const stopListeningBtn = document.getElementById('stopListeningBtn');
    const openServicesBtn = document.getElementById('openServicesBtn');
    const sheetOverlay = document.getElementById('sheetOverlay');
    const closeSheetBtn = document.getElementById('closeSheetBtn');
    const connectStaffBtn = document.getElementById('connectStaffBtn');
    const emergencyCancelBtn = document.getElementById('emergencyCancelBtn');

    const addUserMessage = (text) => {
      const wrap = document.createElement('div');
      wrap.className = 'flex justify-end';
      wrap.innerHTML = `
        <div class="max-w-[78%]">
          <div class="rounded-2xl rounded-tr-md px-3.5 py-2.5 border" style="background:${BRAND}; border-color:#A8565B;">
            <p class="text-[13px] leading-5 text-white">${escapeHtml(text)}</p>
          </div>
        </div>`;
      chatScroll.appendChild(wrap);
      scrollToBottom();
    };

    const addAIMsg = (text, chips = []) => {
      const row = document.createElement('div');
      row.className = 'flex items-start gap-3';
      row.innerHTML = `
        <div class="h-8 w-8 rounded-lg border border-white/10 bg-neutral-800/70 flex items-center justify-center shrink-0">
          <span class="text-[11px] font-semibold" style="color:${BRAND};">A</span>
        </div>
        <div class="max-w-[78%]">
          <div class="rounded-2xl rounded-tl-md border border-white/10 bg-neutral-800/60 px-3.5 py-2.5">
            <p class="text-[13px] leading-5 text-neutral-100">${escapeHtml(text)}</p>
          </div>
          ${chips.length ? `<div class="mt-2 flex flex-wrap gap-2">${chips.map(c => `<button class="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors ai-chip">${escapeHtml(c)}</button>`).join('')}</div>` : ''}
        </div>`;
      chatScroll.appendChild(row);
      scrollToBottom();
    };

    const addSummaryCard = (title, lines) => {
      const row = document.createElement('div');
      row.className = 'flex items-start gap-3';
      row.innerHTML = `
        <div class="h-8 w-8 rounded-lg border border-white/10 bg-neutral-800/70 flex items-center justify-center shrink-0">
          <span class="text-[11px] font-semibold" style="color:${BRAND};">A</span>
        </div>
        <div class="max-w-[78%] w-full">
          <div class="rounded-2xl border border-white/10 bg-neutral-900/70 p-3.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <i data-lucide="clipboard-check" class="w-4 h-4 text-neutral-200" stroke-width="1.5"></i>
                <p class="text-[13px] font-medium text-neutral-100">${escapeHtml(title)}</p>
              </div>
              <span class="text-[10px] text-neutral-400">Confirm</span>
            </div>
            <div class="mt-2 space-y-1.5">
              ${lines.map(l => `<div class="flex items-center gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-neutral-300" stroke-width="1.5"></i>
                <p class="text-[12px] text-neutral-300">${escapeHtml(l)}</p>
              </div>`).join('')}
            </div>
            <div class="mt-3 flex items-center gap-2">
              <button class="px-3 py-1.5 rounded-lg text-[12px] text-white" style="background:${BRAND};">Looks good</button>
              <button class="px-3 py-1.5 rounded-lg text-[12px] border border-white/10 hover:border-white/20 hover:bg-neutral-800/60 transition-colors">Edit</button>
            </div>
          </div>
        </div>`;
      chatScroll.appendChild(row);
      lucide.createIcons();
      scrollToBottom();
    };

    const escapeHtml = (str) => str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

    const scrollToBottom = () => {
      requestAnimationFrame(() => {
        chatScroll.scrollTop = chatScroll.scrollHeight;
      });
    };

    const generateAIReply = (text) => {
      const t = text.toLowerCase();
      if (/(fire|medical|emergency|gas leak|smoke)/.test(t)) {
        addAIMsg("This sounds urgent. I’m connecting you immediately with the hotel staff for faster assistance.");
        return;
      }
      if (/(dinner|breakfast|lunch|menu|food|order|room service)/.test(t)) {
        addAIMsg("Sure! Would you like to see our menu, or do you already know what you’d like?", ["Show Menu", "Chef’s Specials", "I know what I want"]);
        return;
      }
      if (/(towel|toothbrush|toiletr|amenit|soap|razor)/.test(t)) {
        addAIMsg("No problem! Which items and how many would you like?", ["2 Towels", "Toothbrush x2", "Shampoo + Conditioner"]);
        return;
      }
      if (/(housekeep|clean|linen|trash)/.test(t)) {
        addAIMsg("Happy to help! Do you prefer immediate service or a scheduled time?", ["Now", "Schedule for later", "Linen change only"]);
        return;
      }
      if (/(mainten|ac|air|light|leak|broken|not working)/.test(t)) {
        addAIMsg("I can arrange that. What’s the issue, and when may we send a technician?", ["Describe issue", "Send now", "Schedule"]);
        return;
      }
      if (/(laundry|wash|dry clean|iron)/.test(t)) {
        addAIMsg("Got it. Which service do you need — Wash & Fold, Dry Cleaning, or Ironing?", ["Wash & Fold", "Dry Cleaning", "Ironing"]);
        return;
      }
      if (/(check-?in|check-?out|wifi|policy|pool|spa|gym|transport|taxi|uber|shuttle|reservation)/.test(t)) {
        addAIMsg("Absolutely. What would you like to know — check-in/out, Wi‑Fi, amenities, or transport booking?", ["Wi‑Fi Info", "Amenities", "Transport", "Reservations"]);
        return;
      }
      // Default clarifier
      addAIMsg("Of course! Could you share a bit more so I can help — room service, toiletries, housekeeping, maintenance, laundry, or hotel info?", ["Room Service", "Toiletries", "Housekeeping", "Maintenance", "Laundry", "Hotel Hub"]);
    };

    const handleSend = () => {
      const text = messageInput.value.trim();
      if (!text) return;
      addUserMessage(text);
      messageInput.value = '';
      generateAIReply(text);
      lucide.createIcons();
    };

    sendBtn.addEventListener('click', handleSend);
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    // Suggestion chips
    document.querySelectorAll('[data-suggest]').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-suggest');
        addUserMessage(text);
        generateAIReply(text);
        lucide.createIcons();
      });
    });

    // Quick action buttons (both in welcome and sheet)
    const actionToPrompt = {
      'room-service': "I'd like to order from room service.",
      'toiletries': "I need toiletries.",
      'housekeeping': "I need housekeeping.",
      'maintenance': "I have a maintenance issue.",
      'laundry': "I need laundry service.",
      'hotel-hub': "I need hotel information."
    };
    const bindActionButtons = () => {
      document.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-action');
          const text = actionToPrompt[key] || 'Hi';
          addUserMessage(text);
          hideSheet();
          generateAIReply(text);
          lucide.createIcons();
        });
      });
    };

    // Voice listening state
    let listening = false;
    const setListening = (state) => {
      listening = state;
      listeningBar.classList.toggle('hidden', !state);
      micBtn.innerHTML = state
        ? '<i data-lucide="mic-off" class="w-5 h-5 text-white" stroke-width="1.5"></i>'
        : '<i data-lucide="mic" class="w-5 h-5 text-neutral-200" stroke-width="1.5"></i>';
      lucide.createIcons();
      if (state) {
        // Simulate gentle prompt
        addAIMsg("I’m listening. What can I help you with right now?");
      }
    };

    micBtn.addEventListener('click', () => setListening(!listening));
    stopListeningBtn.addEventListener('click', () => setListening(false));

    // Sheet controls
    const showSheet = () => sheetOverlay.classList.remove('hidden');
    const hideSheet = () => sheetOverlay.classList.add('hidden');
    openServicesBtn.addEventListener('click', showSheet);
    closeSheetBtn.addEventListener('click', hideSheet);
    emergencyCancelBtn.addEventListener('click', hideSheet);
    sheetOverlay.addEventListener('click', (e) => {
      if (e.target === sheetOverlay) hideSheet();
    });

    // Emergency connect
    connectStaffBtn.addEventListener('click', () => {
      hideSheet();
      addAIMsg("This sounds urgent. I’m connecting you immediately with the hotel staff for faster assistance.");
    });

    // AI chip click behavior
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('ai-chip')) {
        const text = e.target.textContent.trim();
        addUserMessage(text);
        // Lightweight branches for demo
        if (/menu/i.test(text)) {
          addAIMsg("Here’s the dinner menu. What looks good to you?", ["Pastas", "Grill", "Soups & Salads", "Desserts", "Beverages"]);
        } else if (/beverage|drink/i.test(text)) {
          addAIMsg("Sure — still water, sparkling, or a house wine?", ["Still Water", "Sparkling Water", "House Red", "House White"]);
        } else if (/know what i want|pasta/i.test(text)) {
          addAIMsg("Got it — one pasta for your room. Would you like to add a beverage with that?", ["Still Water", "Sparkling Water", "No, thanks"]);
          addSummaryCard("Order summary", ["1× Pasta", "Delivery: 25–35 min", "Charge to room or card on delivery"]);
        } else if (/now|schedule/i.test(text)) {
          addAIMsg("Perfect — I’ll note that. What time works best, or should I send someone now?", ["Send Now", "3:00 PM", "5:30 PM"]);
        } else {
          generateAIReply(text);
        }
        lucide.createIcons();
      }
    });

    // Init icons & actions
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      bindActionButtons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex items-center justify-center p-4">

<div className="w-full max-w-sm h-[92vh] rounded-3xl border border-white/10 bg-neutral-900/70 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden">

<div className="relative">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
<div className="flex items-center gap-3 px-4 pt-4 pb-3">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-neutral-800/80 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight" style={{color: '#913D43'}}>A</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h1 className="text-[20px] tracking-tight font-semibold">Aurora AI</h1>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border border-white/10 bg-neutral-800/70">
<span className="h-1.5 w-1.5 rounded-full" style={{background: '#30D158'}}></span>
                Online
              </span>
</div>
<p className="text-xs text-neutral-400">Your virtual hotel assistant</p>
</div>
<div className="flex items-center gap-2">
<button aria-label="Start voice session" className="p-2 rounded-xl border border-white/10 bg-neutral-800/60 hover:bg-neutral-700/60 hover:border-white/20 transition-colors" id="voiceCallBtn">
<i className="w-4 h-4" data-lucide="headphones" strokeWidth="1.5"></i>
</button>
<button aria-label="More" className="p-2 rounded-xl border border-white/10 bg-neutral-800/60 hover:bg-neutral-700/60 hover:border-white/20 transition-colors" id="moreBtn">
<i className="w-4 h-4" data-lucide="ellipsis" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="px-4 pb-2">
<div className="w-full h-9 rounded-xl border border-white/10 bg-neutral-900/70 flex items-center justify-between px-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300" data-lucide="bot" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-300">Voice &amp; text enabled</span>
</div>
<div className="flex items-center">
<span className="text-[10px] text-neutral-400">Hotel Assistant</span>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 scroll-smooth" id="chatScroll">

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg border border-white/10 bg-neutral-800/70 flex items-center justify-center shrink-0">
<span className="text-[11px] font-semibold" style={{color: '#913D43'}}>A</span>
</div>
<div className="max-w-[78%]">
<div className="rounded-2xl rounded-tl-md border border-white/10 bg-neutral-850/60 bg-neutral-800/60 px-3.5 py-2.5">
<p className="text-[13px] leading-5 text-neutral-100">Hello! Welcome back. How may I assist you today — food, room services, or hotel information?</p>
</div>

<div className="mt-2 grid grid-cols-3 gap-2">
<button className="group w-full rounded-xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors px-3 py-2 text-left" data-action="room-service">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300 group-hover:text-neutral-100" data-lucide="utensils" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-200">Room Service</span>
</div>
</button>
<button className="group w-full rounded-xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors px-3 py-2 text-left" data-action="toiletries">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300 group-hover:text-neutral-100" data-lucide="spray-can" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-200">Toiletries</span>
</div>
</button>
<button className="group w-full rounded-xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors px-3 py-2 text-left" data-action="housekeeping">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300 group-hover:text-neutral-100" data-lucide="broom" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-200">Housekeeping</span>
</div>
</button>
<button className="group w-full rounded-xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors px-3 py-2 text-left" data-action="maintenance">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300 group-hover:text-neutral-100" data-lucide="wrench" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-200">Maintenance</span>
</div>
</button>
<button className="group w-full rounded-xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors px-3 py-2 text-left" data-action="laundry">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300 group-hover:text-neutral-100" data-lucide="washing-machine" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-200">Laundry</span>
</div>
</button>
<button className="group w-full rounded-xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors px-3 py-2 text-left" data-action="hotel-hub">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300 group-hover:text-neutral-100" data-lucide="concierge-bell" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-200">Hotel Hub</span>
</div>
</button>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="max-w-[78%]">
<div className="rounded-2xl rounded-tr-md px-3.5 py-2.5 border" style={{background: '#913D43', borderColor: '#A8565B'}}>
<p className="text-[13px] leading-5 text-white">I need dinner.</p>
</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg border border-white/10 bg-neutral-800/70 flex items-center justify-center shrink-0">
<span className="text-[11px] font-semibold" style={{color: '#913D43'}}>A</span>
</div>
<div className="max-w-[78%]">
<div className="rounded-2xl rounded-tl-md border border-white/10 bg-neutral-800/60 px-3.5 py-2.5">
<p className="text-[13px] leading-5 text-neutral-100">Of course! Would you like to see our dinner menu, or do you already know what you’d like?</p>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors">View Dinner Menu</button>
<button className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors">Pasta</button>
<button className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors">Add Beverage</button>
</div>
</div>
</div>
</div>

<div className="hidden px-4" id="listeningBar">
<div className="mb-2 rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full animate-pulse" style={{background: '#913D43'}}></div>
<span className="text-xs text-neutral-200">Listening… speak naturally</span>
</div>
<button className="text-xs rounded-lg px-2 py-1 border border-white/10 hover:border-white/20 hover:bg-neutral-800/60 transition-colors" id="stopListeningBtn">Stop</button>
</div>
</div>

<div className="px-4 pb-4 pt-2 border-t border-white/10 bg-neutral-900/60">
<div className="flex items-end gap-2">
<button aria-label="Start a request" className="h-11 w-11 shrink-0 rounded-xl border border-white/10 bg-neutral-900/80 hover:bg-neutral-800/60 hover:border-white/20 transition-colors flex items-center justify-center" id="openServicesBtn">
<i className="w-5 h-5 text-neutral-200" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="flex-1 flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-900/80 px-3 py-1.5">
<input className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-neutral-500 text-neutral-100" id="messageInput" placeholder="Type a message…" type="text"/>
<button aria-label="Voice input" className="p-2 rounded-xl hover:bg-neutral-800/60 transition-colors" id="micBtn">
<i className="w-5 h-5 text-neutral-200" data-lucide="mic" strokeWidth="1.5"></i>
</button>
<button aria-label="Send" className="p-2 rounded-xl" id="sendBtn" style={{background: '#913D43'}}>
<i className="w-5 h-5 text-white" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="mt-2 flex flex-wrap gap-2">
<button className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors" data-suggest="Can I schedule housekeeping at 3 PM?">Housekeeping 3 PM</button>
<button className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors" data-suggest="I need extra towels and toothbrushes.">Extra towels</button>
<button className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800/60 hover:border-white/20 transition-colors" data-suggest="Please book airport transport at 10 AM.">Airport ride</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="sheetOverlay">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-sm rounded-t-3xl border-t border-white/10 bg-neutral-900/95">
<div className="px-5 pt-4">
<div className="mx-auto h-1 w-10 rounded-full bg-white/15"></div>
<div className="mt-3 flex items-center justify-between">
<h2 className="text-[22px] tracking-tight font-semibold">Start a request</h2>
<button className="p-2 rounded-xl border border-white/10 bg-neutral-800/60 hover:bg-neutral-700/60 hover:border-white/20 transition-colors" id="closeSheetBtn">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<p className="text-xs text-neutral-400 mt-1">I’ll confirm details, summarize, and handle everything for you.</p>
</div>
<div className="px-5 pb-5 pt-3">
<div className="grid grid-cols-2 gap-3">
<button className="group w-full rounded-2xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-800/60 hover:border-white/20 transition-colors p-4 text-left" data-action="room-service">
<div className="flex items-center justify-between">
<i className="w-5 h-5 text-neutral-200" data-lucide="utensils" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="mt-3">
<p className="text-sm font-medium text-neutral-100">Room Service</p>
<p className="text-[11px] text-neutral-400 mt-0.5">Menus, orders, ETA</p>
</div>
</button>
<button className="group w-full rounded-2xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-800/60 hover:border-white/20 transition-colors p-4 text-left" data-action="toiletries">
<div className="flex items-center justify-between">
<i className="w-5 h-5 text-neutral-200" data-lucide="spray-can" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="mt-3">
<p className="text-sm font-medium text-neutral-100">Toiletries</p>
<p className="text-[11px] text-neutral-400 mt-0.5">Essentials &amp; quantities</p>
</div>
</button>
<button className="group w-full rounded-2xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-800/60 hover:border-white/20 transition-colors p-4 text-left" data-action="housekeeping">
<div className="flex items-center justify-between">
<i className="w-5 h-5 text-neutral-200" data-lucide="broom" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="mt-3">
<p className="text-sm font-medium text-neutral-100">Housekeeping</p>
<p className="text-[11px] text-neutral-400 mt-0.5">Clean, linen, trash</p>
</div>
</button>
<button className="group w-full rounded-2xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-800/60 hover:border-white/20 transition-colors p-4 text-left" data-action="maintenance">
<div className="flex items-center justify-between">
<i className="w-5 h-5 text-neutral-200" data-lucide="wrench" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="mt-3">
<p className="text-sm font-medium text-neutral-100">Maintenance</p>
<p className="text-[11px] text-neutral-400 mt-0.5">Report &amp; schedule</p>
</div>
</button>
<button className="group w-full rounded-2xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-800/60 hover:border-white/20 transition-colors p-4 text-left" data-action="laundry">
<div className="flex items-center justify-between">
<i className="w-5 h-5 text-neutral-200" data-lucide="washing-machine" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="mt-3">
<p className="text-sm font-medium text-neutral-100">Laundry</p>
<p className="text-[11px] text-neutral-400 mt-0.5">Wash, dry clean, iron</p>
</div>
</button>
<button className="group w-full rounded-2xl border border-white/10 bg-neutral-900/70 hover:bg-neutral-800/60 hover:border-white/20 transition-colors p-4 text-left" data-action="hotel-hub">
<div className="flex items-center justify-between">
<i className="w-5 h-5 text-neutral-200" data-lucide="concierge-bell" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="mt-3">
<p className="text-sm font-medium text-neutral-100">Hotel Hub</p>
<p className="text-[11px] text-neutral-400 mt-0.5">Check-in/out, Wi‑Fi, more</p>
</div>
</button>
</div>
<div className="mt-3 p-3 rounded-2xl border border-white/10 bg-neutral-900/70">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-200 mt-0.5" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<div className="flex-1">
<p className="text-[13px] text-neutral-100">Emergency?</p>
<p className="text-[12px] text-neutral-400 mt-0.5">This sounds urgent. I’m connecting you immediately with the hotel staff for faster assistance.</p>
<div className="mt-2 flex gap-2">
<button className="px-3 py-1.5 rounded-lg text-[12px] text-white" id="connectStaffBtn" style={{background: '#913D43'}}>Connect now</button>
<button className="px-3 py-1.5 rounded-lg text-[12px] border border-white/10 hover:border-white/20 hover:bg-neutral-800/60 transition-colors" id="emergencyCancelBtn">Cancel</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
