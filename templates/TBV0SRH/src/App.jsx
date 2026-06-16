import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Elements
    const ta = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const attachBtn = document.getElementById('attachBtn');
    const sheet = document.getElementById('attachSheet');
    const overlay = document.getElementById('attachOverlay');
    const closeSheet = document.getElementById('closeSheet');

    // Auto-resize textarea and toggle send state
    function autoResize() {
      ta.style.height = 'auto';
      ta.style.height = Math.min(180, ta.scrollHeight) + 'px';
      const hasText = ta.value.trim().length > 0;
      sendBtn.disabled = !hasText;
      sendBtn.classList.toggle('bg-sky-600', hasText);
      sendBtn.classList.toggle('text-white', hasText);
      sendBtn.classList.toggle('bg-neutral-200', !hasText);
      sendBtn.classList.toggle('text-neutral-500', !hasText);
    }
    ta.addEventListener('input', autoResize);
    window.addEventListener('load', autoResize);

    // Bottom sheet open/close
    function openSheet() {
      sheet.classList.remove('translate-y-full');
      overlay.classList.remove('pointer-events-none');
      requestAnimationFrame(() => {
        overlay.classList.add('opacity-100');
        overlay.classList.replace('bg-neutral-900/0', 'bg-neutral-900/40');
        attachBtn.setAttribute('aria-expanded', 'true');
      });
    }
    function closeSheetFn() {
      sheet.classList.add('translate-y-full');
      overlay.classList.add('pointer-events-none');
      overlay.classList.remove('opacity-100');
      overlay.classList.replace('bg-neutral-900/40', 'bg-neutral-900/0');
      attachBtn.setAttribute('aria-expanded', 'false');
    }
    attachBtn.addEventListener('click', () => {
      const isOpen = attachBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeSheetFn(); else openSheet();
    });
    overlay.addEventListener('click', closeSheetFn);
    closeSheet.addEventListener('click', closeSheetFn);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSheetFn();
    });

    // Mock send interaction: animate bubble appearance
    sendBtn.addEventListener('click', () => {
      if (sendBtn.disabled) return;
      const text = ta.value.trim();
      if (!text) return;

      const thread = document.getElementById('chatThread').querySelector('.max-w-3xl');
      const wrapper = document.createElement('section');
      wrapper.setAttribute('aria-label', 'Your messages');
      wrapper.className = 'mb-5 flex items-start justify-end gap-3';

      const col = document.createElement('div');
      col.className = 'flex min-w-0 flex-col items-end gap-1';
      const bubble = document.createElement('div');
      bubble.className = 'max-w-[78%] rounded-2xl rounded-tr-md bg-sky-600 px-3.5 py-2 text-[15px] text-white shadow-sm transition-all duration-200 ease-out translate-y-1 opacity-0';
      bubble.textContent = text;

      const meta = document.createElement('div');
      meta.className = 'flex items-center gap-1.5 pr-1';
      const time = document.createElement('span');
      const now = new Date();
      const hrs = ((now.getHours() + 11) % 12 + 1);
      const mins = now.getMinutes().toString().padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      time.textContent = `${hrs}:${mins} ${ampm}`;
      time.className = 'text-[11px] text-neutral-500';

      const status = document.createElement('span');
      status.className = 'text-neutral-400';
      status.setAttribute('aria-label', 'Sent');
      status.setAttribute('title', 'Sent');
      const icon = document.createElement('i');
      icon.setAttribute('data-lucide', 'check');
      icon.className = 'h-3.5 w-3.5';
      status.appendChild(icon);

      meta.appendChild(time);
      meta.appendChild(status);
      col.appendChild(bubble);
      col.appendChild(meta);
      wrapper.appendChild(col);
      thread.appendChild(wrapper);

      // Render icon in the newly added node
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Animate in
      requestAnimationFrame(() => {
        bubble.classList.remove('translate-y-1', 'opacity-0');
        bubble.classList.add('translate-y-0', 'opacity-100');
      });

      // Clear input
      ta.value = '';
      autoResize();

      // Scroll to bottom
      const container = document.getElementById('chatThread');
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-svh min-h-screen flex-col">

<header className="sticky top-0 z-20 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
<div className="mx-auto max-w-3xl px-4">
<div className="flex h-14 items-center justify-between">

<div className="flex items-center gap-2">
<button aria-label="Back to inbox" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors">
<i className="h-5 w-5" data-lucide="arrow-left"></i>
</button>
</div>

<div className="flex min-w-0 flex-col items-center">
<div className="flex items-center gap-2">
<p className="truncate text-[17px] font-semibold tracking-tight text-neutral-900">Dr. John Doe</p>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600 border border-emerald-100">
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500">
<span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping"></span>
</span>
                Online
              </span>
</div>
<p className="truncate text-xs text-neutral-500">Cardiologist</p>
</div>

<div className="flex items-center gap-1.5">
<button aria-label="Start voice call" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors">
<i className="h-5 w-5" data-lucide="phone"></i>
</button>
<button aria-label="Start video call" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors">
<i className="h-5 w-5" data-lucide="video"></i>
</button>
<button aria-label="Conversation info" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors">
<i className="h-5 w-5" data-lucide="info"></i>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto" id="chatThread">
<div className="mx-auto max-w-3xl px-4 pt-3 pb-28">

<div className="mb-3 flex items-center justify-center">
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
<i className="h-4 w-4" data-lucide="chevrons-up"></i>
            Load previous messages
          </button>
</div>

<div className="my-4 flex items-center gap-3">
<div className="h-px w-full bg-neutral-200/70"></div>
<span className="text-[11px] font-medium text-neutral-500">Today</span>
<div className="h-px w-full bg-neutral-200/70"></div>
</div>

<section aria-label="Messages from doctor" className="mb-5 flex items-start gap-3">
<img alt="Dr. John Doe avatar" className="mt-1 h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex min-w-0 flex-col gap-1">

<div className="max-w-[78%] rounded-2xl rounded-tl-md border border-neutral-200 bg-white px-3.5 py-2 text-[15px] text-neutral-800 shadow-sm">
              Good morning! How are you feeling today after starting the new medication?
            </div>

<div className="max-w-[78%] rounded-2xl rounded-tl-md border border-neutral-200 bg-white px-3.5 py-2 text-[15px] text-neutral-800 shadow-sm">
              Please share your latest blood pressure readings if you have them.
            </div>

<a className="group max-w-[78%] rounded-2xl rounded-tl-md border border-neutral-200 bg-white shadow-sm" href="#" role="button">
<div className="flex items-center gap-3 px-3.5 py-2.5">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:bg-neutral-100">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-[13px] font-medium text-neutral-800">Prescription_2025-09-04.pdf</p>
<p className="truncate text-[11px] text-neutral-500">PDF • 148 KB</p>
</div>
<div className="text-sky-600 group-hover:text-sky-700">
<i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</a>

<div className="pl-1">
<span className="text-[11px] text-neutral-500">09:12 AM</span>
</div>
</div>
</section>

<section aria-label="Your messages" className="mb-5 flex items-start justify-end gap-3">
<div className="flex min-w-0 flex-col items-end gap-1">

<div className="max-w-[78%] rounded-2xl rounded-tr-md bg-sky-600 px-3.5 py-2 text-[15px] text-white shadow-sm">
              Hi Doctor! Feeling better today. Slight headache in the morning, but it went away after breakfast.
            </div>

<div className="max-w-[78%] rounded-2xl rounded-tr-md bg-sky-600 px-3.5 py-2 text-[15px] text-white shadow-sm">
              Here are my BP readings from the last two days.
            </div>

<div className="max-w-[78%]">
<div className="grid grid-cols-3 gap-1.5">
<a className="block overflow-hidden rounded-xl outline outline-1 outline-neutral-200" href="#">
<img alt="BP Monitor Reading Photo 1" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</a>
<a className="block overflow-hidden rounded-xl outline outline-1 outline-neutral-200" href="#">
<img alt="BP Monitor Reading Photo 2" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</a>
<a className="group relative block overflow-hidden rounded-xl outline outline-1 outline-neutral-200" href="#">
<img alt="BP Monitor Reading Photo 3" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/25 opacity-0 transition-opacity group-hover:opacity-100"></div>
</a>
</div>
</div>

<div className="flex items-center gap-1.5 pr-1">
<span className="text-[11px] text-neutral-500">09:18 AM</span>
<span aria-label="Sent" className="text-neutral-400" title="Sent">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
</div>
</div>
</section>

<section aria-label="Your messages" className="mb-5 flex items-start justify-end gap-3">
<div className="flex min-w-0 flex-col items-end gap-1">
<div className="max-w-[78%] rounded-2xl rounded-tr-md bg-sky-600 px-3.5 py-2 text-[15px] text-white shadow-sm">
              Average was around 122/78 yesterday and 124/80 today.
            </div>
<div className="flex items-center gap-1.5 pr-1">
<span className="text-[11px] text-neutral-500">09:19 AM</span>
<span aria-label="Unread" className="text-neutral-400" title="Unread">
<i className="h-3.5 w-3.5" data-lucide="check-check"></i>
</span>
</div>
</div>
</section>

<section aria-label="Messages from doctor" className="mb-5 flex items-start gap-3">
<img alt="Dr. John Doe avatar" className="mt-1 h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex min-w-0 flex-col gap-1">
<div className="max-w-[78%] rounded-2xl rounded-tl-md border border-neutral-200 bg-white px-3.5 py-2 text-[15px] text-neutral-800 shadow-sm">
              Those readings look good. Keep tracking twice daily.
            </div>
<div className="max-w-[78%] rounded-2xl rounded-tl-md border border-neutral-200 bg-white px-3.5 py-2 text-[15px] text-neutral-800 shadow-sm">
              Let me know if the headaches return or get worse.
            </div>
<div className="pl-1">
<span className="text-[11px] text-neutral-500">09:22 AM</span>
</div>
</div>
</section>

<section aria-label="Your messages" className="mb-5 flex items-start justify-end gap-3">
<div className="flex min-w-0 flex-col items-end gap-1">
<div className="max-w-[78%] rounded-2xl rounded-tr-md bg-sky-600 px-3.5 py-2 text-[15px] text-white shadow-sm">
              Will do. Thank you!
            </div>
<div className="flex items-center gap-1.5 pr-1">
<span className="text-[11px] text-neutral-500">09:23 AM</span>
<span aria-label="Read" className="text-sky-600" title="Read">
<i className="h-3.5 w-3.5" data-lucide="check-check"></i>
</span>
</div>
</div>
</section>

<section aria-label="Doctor typing" className="mb-3 flex items-start gap-3">
<img alt="Dr. John Doe avatar" className="mt-1 h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="max-w-[60%] rounded-2xl rounded-tl-md border border-neutral-200 bg-white px-3.5 py-2 shadow-sm">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-neutral-400/70 animate-bounce" style={{animationDelay: '0ms'}}></span>
<span className="h-2 w-2 rounded-full bg-neutral-400/70 animate-bounce" style={{animationDelay: '120ms'}}></span>
<span className="h-2 w-2 rounded-full bg-neutral-400/70 animate-bounce" style={{animationDelay: '240ms'}}></span>
</div>
</div>
</section>
</div>
</main>

<div className="pointer-events-none fixed bottom-20 left-0 right-0 z-10 mx-auto max-w-3xl h-8 bg-gradient-to-t from-white to-transparent"></div>

<div className="fixed bottom-0 left-0 right-0 z-20 border-t border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
<div className="mx-auto max-w-3xl px-4">
<div className="flex items-end gap-2 py-3">

<button aria-controls="attachSheet" aria-expanded="false" aria-haspopup="dialog" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors" id="attachBtn">
<i className="h-5 w-5" data-lucide="plus"></i>
</button>

<div className="relative flex-1">
<label className="sr-only" htmlFor="messageInput">Type your message</label>
<textarea aria-label="Message input" className="block w-full resize-none rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 pr-12 text-[15px] leading-6 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/60" id="messageInput" placeholder="Type your message…" rows="1"></textarea>

<button aria-label="Send message" className="absolute bottom-1.5 right-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-neutral-500 hover:text-neutral-700 disabled:opacity-100 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors" disabled="" id="sendBtn">
<i className="h-4.5 w-4.5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-0 z-30 bg-neutral-900/0 opacity-0 transition-opacity" id="attachOverlay"></div>
<section aria-labelledby="attachTitle" aria-modal="true" className="fixed inset-x-0 bottom-0 z-40 translate-y-full transition-transform" id="attachSheet" role="dialog">
<div className="mx-auto max-w-3xl rounded-t-2xl border border-neutral-200 border-b-0 bg-white shadow-xl">
<div className="mx-auto h-5 w-12 rounded-full bg-neutral-200/80 my-2"></div>
<div className="px-4 pb-5">
<h2 className="sr-only" id="attachTitle">Add attachment</h2>
<div className="grid grid-cols-2 gap-3">

<button className="group flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-left hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:bg-neutral-100">
<i className="h-5 w-5" data-lucide="paperclip"></i>
</div>
<div className="min-w-0">
<p className="text-[14px] font-medium text-neutral-900">Document</p>
<p className="truncate text-[12px] text-neutral-500">Reports, prescriptions</p>
</div>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-left hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:bg-neutral-100">
<i className="h-5 w-5" data-lucide="image"></i>
</div>
<div className="min-w-0">
<p className="text-[14px] font-medium text-neutral-900">Gallery</p>
<p className="truncate text-[12px] text-neutral-500">Photos and images</p>
</div>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-left hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:bg-neutral-100">
<i className="h-5 w-5" data-lucide="camera"></i>
</div>
<div className="min-w-0">
<p className="text-[14px] font-medium text-neutral-900">Camera</p>
<p className="truncate text-[12px] text-neutral-500">Capture a photo</p>
</div>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-left hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 group-hover:bg-neutral-100">
<i className="h-5 w-5" data-lucide="file-plus"></i>
</div>
<div className="min-w-0">
<p className="text-[14px] font-medium text-neutral-900">Share Record</p>
<p className="truncate text-[12px] text-neutral-500">Medical reports shortcut</p>
</div>
</button>
</div>
<div className="mt-4 flex justify-end">
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[14px] font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" id="closeSheet">
<i className="h-4 w-4" data-lucide="x"></i>
              Close
            </button>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
