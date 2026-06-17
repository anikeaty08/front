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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) { lucide.createIcons(); }

        // Current date/time
        const elDate = document.getElementById('currentDate');
        if (elDate) {
          const now = new Date();
          const fmt = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
          elDate.textContent = fmt.format(now);
        }

        // Toggle right rail
        const toggleBtn = document.getElementById('toggleHistoryBtn');
        const rightRail = document.querySelectorAll('aside')[1];
        if (toggleBtn && rightRail) {
          toggleBtn.addEventListener('click', () => rightRail.classList.toggle('hidden'));
        }

        // Pinned collapse
        const pinToggle = document.getElementById('pinnedToggle');
        const pinContent = document.getElementById('pinnedContent');
        const pinChevron = document.getElementById('pinnedChevron');
        if (pinToggle && pinContent && pinChevron) {
          pinToggle.addEventListener('click', () => {
            pinContent.classList.toggle('hidden');
            pinChevron.classList.toggle('rotate-180');
          });
        }

        // Elements for views
        const listView = document.getElementById('mainListView');
        const detailView = document.getElementById('mainDetailView');
        const backBtn = document.getElementById('backToList');
        const detailTitle = document.getElementById('detailTitle');
        const tagWrap = document.getElementById('detailTags');

        const railDefault = document.getElementById('contextRailDefault');
        const railMeeting = document.getElementById('contextRailMeeting');

        // Open detail view
        function openMeetingDetail(title, tags=[]) {
          detailTitle.textContent = title || 'Meeting';
          tagWrap.innerHTML = '';
          (tags || []).forEach(t => {
            const chip = document.createElement('span');
            chip.className = 'text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200';
            chip.textContent = t;
            tagWrap.appendChild(chip);
          });

          listView.classList.add('hidden');
          detailView.classList.remove('hidden');

          // swap right rail content
          railDefault.classList.add('hidden');
          railMeeting.classList.remove('hidden');

          if (window.lucide) lucide.createIcons();
        }

        // Back to list
        if (backBtn) {
          backBtn.addEventListener('click', () => {
            detailView.classList.add('hidden');
            listView.classList.remove('hidden');
            railMeeting.classList.add('hidden');
            railDefault.classList.remove('hidden');
          });
        }

        // Attach click handlers to meeting cards
        document.querySelectorAll('.meeting-card').forEach(btn => {
          btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const tags = JSON.parse(btn.getAttribute('data-tags') || '[]');
            openMeetingDetail(title, tags);
          });
        });

        // Detail tabs
        const tabButtons = Array.from(document.querySelectorAll('.detail-tab'));
        const tabBodies = {
          transcript: document.getElementById('tab-transcript'),
          notes: document.getElementById('tab-notes'),
          files: document.getElementById('tab-files'),
        };
        function setDetailTab(name) {
          Object.entries(tabBodies).forEach(([key, el]) => {
            if (key === name) el.classList.remove('hidden'); else el.classList.add('hidden');
          });
          tabButtons.forEach(b => {
            const active = b.dataset.tab === name;
            b.classList.toggle('bg-neutral-900', active);
            b.classList.toggle('text-white', active);
            b.classList.toggle('text-neutral-700', !active);
          });
        }
        tabButtons.forEach(b => {
          b.addEventListener('click', () => setDetailTab(b.dataset.tab));
        });
        setDetailTab('transcript');

        // Right rail phase tabs
        const phaseButtons = Array.from(document.querySelectorAll('.phase-tab'));
        const phaseBodies = {
          pre: document.getElementById('phase-pre'),
          during: document.getElementById('phase-during'),
          post: document.getElementById('phase-post'),
        };
        function setPhase(name) {
          Object.entries(phaseBodies).forEach(([k, el]) => {
            if (k === name) el.classList.remove('hidden'); else el.classList.add('hidden');
          });
          phaseButtons.forEach(b => {
            const active = b.dataset.phase === name;
            b.classList.toggle('bg-neutral-900', active);
            b.classList.toggle('text-white', active);
            b.classList.toggle('text-neutral-700', !active);
          });
        }
        phaseButtons.forEach(b => b.addEventListener('click', () => setPhase(b.dataset.phase)));
        setPhase('pre');

        // Chat
        const chatSend = document.getElementById('chatSend');
        const chatInput = document.getElementById('chatInput');
        const chatLog = document.getElementById('chatLog');
        function sendChat() {
          const v = chatInput.value.trim();
          if (!v) return;
          const me = document.createElement('div');
          me.className = 'text-xs text-neutral-700 bg-white border border-neutral-200 rounded-md p-2';
          me.innerHTML = '<span class="font-medium">You:</span> ' + v;
          chatLog.appendChild(me);
          chatInput.value = '';
          chatLog.scrollTop = chatLog.scrollHeight;

          setTimeout(() => {
            const bot = document.createElement('div');
            bot.className = 'text-xs text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-md p-2';
            bot.innerHTML = '<span class="font-medium">Assistant:</span> Noted. I’ll add that to the notes.';
            chatLog.appendChild(bot);
            chatLog.scrollTop = chatLog.scrollHeight;
          }, 500);
        }
        if (chatSend) chatSend.addEventListener('click', sendChat);
        if (chatInput) chatInput.addEventListener('keydown', e => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
        });

        // Refresh context button
        const refresh = document.getElementById('refreshContext');
        if (refresh) {
          refresh.addEventListener('click', () => {
            refresh.classList.add('animate-spin');
            setTimeout(() => refresh.classList.remove('animate-spin'), 600);
          });
        }
      });
    


      document.addEventListener('DOMContentLoaded',()=>{const recordBtn=document.getElementById('recordBtn');if(!recordBtn)return;const icon=recordBtn.querySelector('i');const label=recordBtn.querySelector('span');let active=false;function update(){if(active){recordBtn.classList.add('bg-rose-600','text-white','border-rose-600');recordBtn.classList.remove('hover:bg-neutral-50','border-neutral-200');if(icon){icon.setAttribute('data-lucide','square');icon.classList.add('text-white');icon.classList.remove('text-neutral-600');}if(label)label.textContent='Recording';recordBtn.title='Stop recording';}else{recordBtn.classList.remove('bg-rose-600','text-white','border-rose-600');recordBtn.classList.add('border-neutral-200','hover:bg-neutral-50');if(icon){icon.setAttribute('data-lucide','mic');icon.classList.add('text-neutral-600');icon.classList.remove('text-white');}if(label)label.textContent='Record';recordBtn.title='Start recording';}if(window.lucide)lucide.createIcons();}recordBtn.addEventListener('click',()=>{active=!active;update();});update();});
    
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
      

<aside className="w-full sm:w-64 shrink-0 border-neutral-800 sm:border-r bg-white flex flex-col justify-between px-6 py-6 animate-fade-in" style={{animationDelay: '0.1s', opacity: '0'}}>
<div>
<div className="text-xs font-semibold tracking-widest text-teal-600 mb-8">
          [UBIK]
        </div>

<div className="relative mb-8">
<div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 rounded-lg p-4 flex items-start gap-3 text-white hover:shadow-lg transition-shadow duration-300">
<i className="w-6 h-6 shrink-0" data-lucide="sparkles"></i>
<div>
<h3 className="text-sm font-semibold leading-none uppercase">
                Ask Anything
              </h3>
<p className="text-xs opacity-80">Command Interface</p>
</div>
</div>
</div>

<div className="mb-8">
<button className="w-full border border-neutral-200 rounded-lg p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors" id="pinnedToggle">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-purple-500" data-lucide="pin"></i>
<span className="text-sm font-medium">Pinned</span>
</div>
<i className="w-4 h-4 text-neutral-500 transition-transform" data-lucide="chevron-down" id="pinnedChevron"></i>
</button>
<div className="mt-3 space-y-2" id="pinnedContent">
<button className="w-full text-left border border-neutral-200 rounded-md p-2 hover:border-purple-400 hover:bg-purple-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="bookmark"></i>
<span className="text-xs">Weekly Ops Review</span>
</div>
</button>
<button className="w-full text-left border border-neutral-200 rounded-md p-2 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-500" data-lucide="bookmark"></i>
<span className="text-xs">Board Prep Outline</span>
</div>
</button>
<button className="w-full text-left border border-neutral-200 rounded-md p-2 hover:border-cyan-400 hover:bg-cyan-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-500" data-lucide="bookmark"></i>
<span className="text-xs">Vendor Risk Heatmap</span>
</div>
</button>
</div>
</div>

<nav className="space-y-6">
<button className="w-full text-left group">
<div className="border-b border-neutral-200 pb-4 flex items-start gap-3">
<i className="w-6 h-6 shrink-0 group-hover:text-purple-500 transition-colors duration-300" data-lucide="inbox"></i>
<div>
<h4 className="text-sm font-semibold uppercase group-hover:underline">
                  Inbox
                </h4>
<p className="text-xs opacity-70">Unified Signals</p>
</div>
</div>
</button>
<button className="w-full text-left group">
<div className="border-b border-neutral-200 pb-4 flex items-start gap-3">
<i className="w-6 h-6 shrink-0 group-hover:text-indigo-500 transition-colors duration-300" data-lucide="users"></i>
<div>
<h4 className="text-sm font-semibold uppercase group-hover:underline">
                  People
                </h4>
<p className="text-xs opacity-70">Intelligence Engine</p>
</div>
</div>
</button>

<button aria-current="page" className="w-full text-left group">
<div className="border-b border-neutral-200 pb-4 flex items-start gap-3 pl-2 border-l-2 border-neutral-900">
<i className="w-6 h-6 shrink-0 text-neutral-900" data-lucide="calendar"></i>
<div>
<h4 className="text-sm font-semibold uppercase underline decoration-neutral-300">
                  Meetings
                </h4>
<p className="text-xs opacity-70">Schedule and notes</p>
</div>
</div>
</button>
<button className="w-full text-left group">
<div className="border-b border-neutral-200 pb-4 flex items-start gap-3">
<i className="w-6 h-6 shrink-0 group-hover:text-cyan-500 transition-colors duration-300" data-lucide="check-circle"></i>
<div>
<h4 className="text-sm font-semibold uppercase group-hover:underline">
                  Tasks
                </h4>
<p className="text-xs opacity-70">AI-Powered Actions</p>
</div>
</div>
</button>
<button className="w-full text-left group">
<div className="border-b border-neutral-200 pb-4 flex items-start gap-3">
<i className="w-6 h-6 shrink-0 group-hover:text-emerald-500 transition-colors duration-300" data-lucide="layers"></i>
<div>
<h4 className="text-sm font-semibold uppercase group-hover:underline">
                  Projects
                </h4>
<p className="text-xs opacity-70">Workflow Management</p>
</div>
</div>
</button>
</nav>
</div>

<div className="pt-8 animate-fade-in" style={{animationDelay: '0.5s', opacity: '0'}}>
<div className="w-full h-1 rounded-full bg-neutral-200 overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" style={{width: '78%'}}></div>
</div>
<div className="text-[10px] uppercase tracking-wide mt-2">
          Cognitive Load: 78%
        </div>
</div>
</aside>

<section className="flex-1 flex flex-col overflow-hidden animate-fade-in" style={{animationDelay: '0.2s', opacity: '0'}}>

<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
<div className="flex items-center gap-3 w-full">
<div className="hidden sm:flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4" data-lucide="home"></i>
<span>/</span>
<span>Meetings</span>
</div>
<div className="ml-auto w-full sm:w-96 relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search"></i>
<input className="w-full border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search meetings" type="text"/>
</div>
</div>
<div className="flex items-center gap-2 ml-4">
<button className="px-2.5 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 flex items-center gap-1.5 fixed bottom-8 left-1/2 -translate-x-1/2 z-50 shadow-lg" id="recordBtn" title="Start recording">
<i className="w-4 h-4 text-neutral-600" data-lucide="mic"></i>
<span className="text-xs font-medium">Record</span>
</button>
<button className="px-2 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50" id="toggleHistoryBtn" title="Toggle right rail">
<i className="w-4 h-4" data-lucide="chevrons-right"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 space-y-8" id="mainListView">
<header className="flex items-center justify-between">
<div>
<h1 className="text-[28px] sm:text-[32px] font-semibold tracking-tight">
              Upcoming meetings
            </h1>
<div className="mt-1 flex items-center gap-2 text-sm text-neutral-500">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
<span id="currentDate">—</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md text-xs border border-neutral-200 hover:bg-neutral-50 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i>
              New
            </button>
<button className="px-3 py-1.5 rounded-md text-xs border border-neutral-200 hover:bg-neutral-50 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Open calendar
            </button>
</div>
</header>

<section className="space-y-3">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-wide">
              Today
            </span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<div className="grid md:grid-cols-2 gap-3">
<button className="meeting-card text-left border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors border-l-4 border-emerald-500" data-tags='["Today","Malaysia +3","Pitches"]' data-title="[Weekly] IDMY Coaching - Solarpunk">
<div className="flex items-start justify-between">
<div className="min-w-0">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500 shrink-0" data-lucide="video"></i>
<h3 className="text-sm font-medium tracking-tight truncate">
                      [Weekly] IDMY Coaching - Solarpunk
                    </h3>
</div>
<p className="mt-1 text-xs text-neutral-600">
                    3:00–3:45 PM • Zoom
                  </p>
<div className="mt-2 flex -space-x-2">
<img alt="A" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="B" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="C" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
<span className="ml-2 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                  Starts in 5m
                </span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                  Coaching
                </span>
<span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Zoom
                </span>
</div>
</button>
<button className="meeting-card text-left border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors border-l-4 border-neutral-300" data-tags='["Today","Remote","Product"]' data-title="Customer roadmap review">
<div className="flex items-start justify-between">
<div className="min-w-0">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-purple-500 shrink-0" data-lucide="video"></i>
<h3 className="text-sm font-medium tracking-tight truncate">
                      Customer roadmap review
                    </h3>
</div>
<p className="mt-1 text-xs text-neutral-600">
                    5:00–5:45 PM • Google Meet
                  </p>
<div className="mt-2 flex -space-x-2">
<img alt="D" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="E" className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<span className="ml-2 text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 shrink-0">
                  Scheduled
                </span>
</div>
</button>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-wide">
              Tomorrow
            </span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<div className="grid md:grid-cols-2 gap-3">
<button className="meeting-card text-left border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors border-l-4 border-amber-400" data-tags='["Tomorrow","Leadership","Planning"]' data-title="Q4 Planning Sync">
<div className="flex items-start justify-between">
<div className="min-w-0">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="users"></i>
<h3 className="text-sm font-medium tracking-tight truncate">
                      Q4 Planning Sync
                    </h3>
</div>
<p className="mt-1 text-xs text-neutral-600">
                    10:00–11:00 AM • In person
                  </p>
</div>
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</button>
<button className="meeting-card text-left border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors border-l-4 border-cyan-500" data-tags='["Tomorrow","Partners","Enablement"]' data-title="Partner enablement call">
<div className="flex items-start justify-between">
<div className="min-w-0">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-cyan-600" data-lucide="headphones"></i>
<h3 className="text-sm font-medium tracking-tight truncate">
                      Partner enablement call
                    </h3>
</div>
<p className="mt-1 text-xs text-neutral-600">
                    2:00–2:45 PM • Zoom
                  </p>
</div>
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</button>
</div>
</section>
</div>

<div className="hidden flex-1 overflow-y-auto" id="mainDetailView">
<div className="w-full">

<div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-neutral-200 px-6 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<button className="px-2 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 flex items-center gap-1" id="backToList">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span className="text-xs">Back</span>
</button>
<div className="pl-2">
<div className="text-[12px] text-neutral-500 flex items-center gap-2">
<span>Meetings</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="truncate">Detail</span>
</div>
<h1 className="truncate text-[26px] sm:text-[30px] font-semibold tracking-tight" id="detailTitle">
                    Meeting
                  </h1>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md text-xs bg-neutral-900 text-white hover:opacity-90 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="video"></i>
                  Join
                </button>
<button className="px-3 py-1.5 rounded-md text-xs border border-neutral-200 hover:bg-neutral-50 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="calendar-clock"></i>
                  Reschedule
                </button>
</div>
</div>

<div className="mt-2 flex flex-wrap items-center gap-2" id="detailTags"></div>

<div className="mt-3">
<div className="inline-flex rounded-lg border border-neutral-200 p-1">
<button className="detail-tab px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 text-white" data-tab="transcript">
                  Transcript
                </button>
<button className="detail-tab px-3 py-1.5 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-100" data-tab="notes">
                  Notes
                </button>
<button className="detail-tab px-3 py-1.5 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-100" data-tab="files">
                  Files
                </button>
</div>
</div>
</div>

<div className="p-6 sm:p-8 space-y-6">

<div className="space-y-4" id="tab-transcript">
<div className="text-xs text-neutral-500">
                Auto-transcribed • consent captured
              </div>
<div className="space-y-3">
<div className="flex items-start gap-3">
<img alt="Speaker A" className="w-7 h-7 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">
                        Alice
                      </span>
<span className="text-[11px] text-neutral-500">00:02</span>
</div>
<p className="text-sm text-neutral-700">
                      Quick check-in on last week’s experiments and today’s
                      goals. We’ll keep this under 40 minutes.
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="Speaker B" className="w-7 h-7 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">
                        Ben
                      </span>
<span className="text-[11px] text-neutral-500">03:11</span>
</div>
<p className="text-sm text-neutral-700">
                      API latency dropped 18%. Two regressions remain on pricing
                      sync.
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="You" className="w-7 h-7 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight">
                        You
                      </span>
<span className="text-[11px] text-neutral-500">06:45</span>
</div>
<p className="text-sm text-neutral-700">
                      Let’s align on the coaching agenda and finalize next steps
                      for the pilot.
                    </p>
</div>
</div>
</div>
</div>

<div className="hidden" id="tab-notes">
<article className="space-y-6">
<header className="space-y-2">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-wide">
                      Outline
                    </span>
<span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                      Live
                    </span>
</div>
<h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight">
                    [Weekly] IDMY Coaching - Solarpunk
                  </h2>
</header>
<section className="space-y-2">
<h3 className="text-[18px] font-medium tracking-tight">
                    # Sales Operations Focus vs. AI Operations Approach
                  </h3>
<ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
<li>
                      Core conflict: narrowing to sales ops reduces user base
                      within organizations
                    </li>
<li>
                      Current product usable by logistics, compliance, quality
                      teams across organization
                    </li>
<li>
                      Need 10–30 companies to create desired growth if user base
                      narrows
                    </li>
<li>
                      Alternative: maintain AI ops as beachhead within whole
                      organization
                    </li>
</ul>
</section>
<section className="space-y-2">
<h3 className="text-[18px] font-medium tracking-tight">
                    # What’s Broken in Pricing Strategy for Seafood
                  </h3>
<ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
<li>
                      Lack of consolidated market information readily accessible
                    </li>
<li>Market-driven commodity business with thin margins</li>
<li>Packaging 2%, shipment 1.5–3%</li>
<li>
                      Sales operations not averaged out across competitors
                    </li>
</ul>
</section>
<section className="space-y-2">
<h3 className="text-[18px] font-medium tracking-tight">
                    # Market Pricing Intelligence Solution
                  </h3>
<ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
<li>
                      Connect to import/export APIs and raw material pricing
                      sources
                    </li>
<li>
                      Agent-driven rules by power users; surface insights to
                      reps
                    </li>
<li>
                      Automated alerts to highlight margin risks and
                      opportunities
                    </li>
</ul>
</section>
</article>
</div>

<div className="hidden" id="tab-files">
<div className="grid sm:grid-cols-2 gap-3">
<div className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 shrink-0" data-lucide="file-text"></i>
<div className="min-w-0">
<p className="text-sm font-medium tracking-tight truncate">
                      Agenda - IDMY Coaching.md
                    </p>
<p className="text-xs text-neutral-500">
                      Updated 2h ago • 12 KB
                    </p>
</div>
<button className="ml-auto text-xs px-2 py-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
                    Open
                  </button>
</div>
<div className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 shrink-0" data-lucide="file-spreadsheet"></i>
<div className="min-w-0">
<p className="text-sm font-medium tracking-tight truncate">
                      Pricing inputs.xlsx
                    </p>
<p className="text-xs text-neutral-500">
                      Added yesterday • 184 KB
                    </p>
</div>
<button className="ml-auto text-xs px-2 py-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
                    Open
                  </button>
</div>
<div className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors flex items-start gap-3">
<i className="w-5 h-5 text-rose-600 shrink-0" data-lucide="image"></i>
<div className="min-w-0">
<p className="text-sm font-medium tracking-tight truncate">
                      Wireframe.png
                    </p>
<p className="text-xs text-neutral-500">
                      Added 3d ago • 1.2 MB
                    </p>
</div>
<button className="ml-auto text-xs px-2 py-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
                    Open
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden border-t border-neutral-200 p-4"></div>
</section>

<aside className="hidden xl:flex w-[360px] shrink-0 bg-white border-l border-neutral-200 flex-col">

<div className="flex-1 flex flex-col" id="contextRailDefault">
<div className="px-5 py-4 border-b border-neutral-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="cpu"></i>
<h3 className="text-sm font-semibold tracking-tight">
                Contextual intelligence
              </h3>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50" id="refreshContext" title="Refresh context">
<i className="w-4 h-4 text-neutral-500" data-lucide="refresh-cw"></i>
</button>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">
<div className="grid grid-cols-3 gap-2">
<div className="border border-neutral-200 rounded-lg p-2.5">
<div className="text-[10px] uppercase text-neutral-500">Signal</div>
<div className="mt-1 flex items-center gap-1.5">
<i className="w-4 h-4 text-emerald-600" data-lucide="activity"></i>
<span className="text-sm font-medium">Strong</span>
</div>
</div>
<div className="border border-neutral-200 rounded-lg p-2.5">
<div className="text-[10px] uppercase text-neutral-500">Updated</div>
<div className="mt-1 flex items-center gap-1.5">
<i className="w-4 h-4 text-indigo-600" data-lucide="clock"></i>
<span className="text-sm font-medium">2m ago</span>
</div>
</div>
<div className="border border-neutral-200 rounded-lg p-2.5">
<div className="text-[10px] uppercase text-neutral-500">Sources</div>
<div className="mt-1 flex items-center gap-1.5">
<i className="w-4 h-4 text-cyan-600" data-lucide="plug"></i>
<span className="text-sm font-medium">6 linked</span>
</div>
</div>
</div>
<div className="border border-neutral-200 rounded-lg">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="folder"></i>
<h4 className="text-sm font-semibold tracking-tight">Folders</h4>
</div>
<button className="text-xs text-neutral-500 hover:text-neutral-800">
                Open
              </button>
</div>
<ul className="divide-y">
<li>
<button className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-600" data-lucide="bookmark"></i>
<span className="text-sm">Executive updates</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      14
                    </span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</button>
</li>
<li>
<button className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="file-text"></i>
<span className="text-sm">Vendor contracts</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      22
                    </span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</button>
</li>
<li>
<button className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="calendar"></i>
<span className="text-sm">Meeting notes</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      37
                    </span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</button>
</li>
</ul>
</div>
</div>

<div className="border-t border-neutral-200 p-4 bg-white mt-auto">
<div className="text-[11px] uppercase text-neutral-500 mb-3 flex items-center gap-1.5">
<iconify-icon icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>UBIK Global</span>
</div>
<div className="max-h-40 overflow-y-auto space-y-2 mb-3" id="globalChatLog">
<div className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-md p-2">
<span className="font-medium text-neutral-900">UBIK:</span> I can search across your recent meetings, folders, and signals to extract context.
            </div>
</div>
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full border border-neutral-200 rounded-lg pl-8 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Ask about recent signals..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col" id="contextRailMeeting">
<div className="px-5 py-4 border-b border-neutral-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="calendar-range"></i>
<h3 className="text-sm font-semibold tracking-tight">
                Meeting assistant
              </h3>
</div>
<div className="inline-flex rounded-lg border border-neutral-200 p-1">
<button className="phase-tab px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 text-white" data-phase="pre">
                Pre
              </button>
<button className="phase-tab px-3 py-1.5 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-100" data-phase="during">
                Live
              </button>
<button className="phase-tab px-3 py-1.5 rounded-md text-xs font-medium text-neutral-700 hover:bg-neutral-100" data-phase="post">
                Post
              </button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">
<div className="space-y-3" id="phase-pre">
<div className="border border-neutral-200 rounded-lg p-3">
<div className="text-[11px] uppercase text-neutral-500">Brief</div>
<p className="mt-1 text-sm text-neutral-700">
                Goal: align on pricing intelligence pilot and success metrics.
              </p>
</div>
<div className="border border-neutral-200 rounded-lg p-3">
<div className="text-[11px] uppercase text-neutral-500">
                Participants
              </div>
<div className="mt-2 flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="w-6 h-6 rounded-full border border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="border border-neutral-200 rounded-lg p-3">
<div className="text-[11px] uppercase text-neutral-500">
                Suggested agenda
              </div>
<ol className="list-decimal pl-5 text-sm text-neutral-700 space-y-1">
<li>Review outcomes from last week</li>
<li>Pilot scope and owners</li>
<li>Risks, blockers, next steps</li>
</ol>
</div>
</div>
<div className="hidden space-y-4" id="phase-during">

<div className="border border-neutral-200 rounded-lg p-3">
<div className="text-[11px] uppercase text-neutral-500 mb-2">Live Topics</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="font-medium text-neutral-900 tracking-tight">Seafood Pricing Strategy</span>
</div>
<div className="flex items-center gap-2 text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
<span className="text-neutral-500">Sales Ops Integration</span>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-lg p-3 space-y-3">
<div className="text-[11px] uppercase text-neutral-500 flex items-center justify-between">
<span>Data Pull</span>
<iconify-icon icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-purple-500" icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full text-xs border border-neutral-200 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-700 bg-neutral-50" placeholder="Query internal docs or web..." type="text"/>
</div>
<div className="flex flex-wrap gap-1.5">
<button className="text-[10px] px-2 py-1 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-600 transition-colors">Q3 margins</button>
<button className="text-[10px] px-2 py-1 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-600 transition-colors">Competitor APIs</button>
</div>
</div>
</div>
<div className="hidden space-y-4" id="phase-post">
<div className="border border-neutral-200 rounded-lg p-3">
<div className="text-[11px] uppercase text-neutral-500">
                Auto summary
              </div>
<p className="mt-1 text-sm text-neutral-700">
                Aligned on pricing intelligence pilot and identified 3 key blockers. Ben to own Q4 logistics prep.
              </p>
</div>

<div className="border border-neutral-200 rounded-lg overflow-hidden">
<div className="bg-neutral-50 px-3 py-2 border-b border-neutral-200 flex items-center justify-between">
<span className="text-[11px] uppercase text-neutral-500 font-medium">Extracted Actions</span>
<iconify-icon className="text-neutral-400" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-3 text-sm text-neutral-700 space-y-2.5 font-mono text-xs">
<label className="flex items-start gap-2 cursor-pointer group">
<input checked="" className="appearance-none w-3.5 h-3.5 border border-neutral-300 rounded-sm checked:bg-purple-500 checked:border-purple-500 flex-shrink-0 mt-0.5 cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[3px] after:top-[1px] after:w-1.5 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 transition-colors" type="checkbox" />
<span className="group-hover:text-neutral-900 transition-colors">Draft seafood pricing model for Ben</span>
</input></label>
<label className="flex items-start gap-2 cursor-pointer group">
<input checked="" className="appearance-none w-3.5 h-3.5 border border-neutral-300 rounded-sm checked:bg-purple-500 checked:border-purple-500 flex-shrink-0 mt-0.5 cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[3px] after:top-[1px] after:w-1.5 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 transition-colors" type="checkbox"/>
<span className="group-hover:text-neutral-900 transition-colors">Schedule logistics follow-up</span>
</label>
<label className="flex items-start gap-2 cursor-pointer group">
<input className="appearance-none w-3.5 h-3.5 border border-neutral-300 rounded-sm checked:bg-purple-500 checked:border-purple-500 flex-shrink-0 mt-0.5 cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[3px] after:top-[1px] after:w-1.5 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 transition-colors" type="checkbox"/>
<span className="group-hover:text-neutral-900 transition-colors">Update Q4 goals sheet</span>
</label>
</div>
<div className="p-2 border-t border-neutral-200 bg-neutral-50">
<button className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-neutral-900 text-white rounded-md text-xs font-medium hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Execute via UBIK
                </button>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-200 p-3">
<div className="text-[11px] uppercase text-neutral-500 mb-2 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i>
<span>Chat</span>
</div>
<div className="max-h-40 overflow-y-auto space-y-2 mb-2" id="chatLog">
<div className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-md p-2">
<span className="font-medium">Assistant:</span>
              I can summarize key decisions or draft follow‑ups.
            </div>
</div>
<div className="flex gap-2">
<div className="flex-1 relative">
<i className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="bot"></i>
<input className="w-full border border-neutral-200 rounded-lg pl-8 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" id="chatInput" placeholder="Ask during this meeting..."/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900" id="chatSend">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</aside>

<style>
      .animate-fade-in { animation: fadeIn 0.5s ease forwards; }
      @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
      :focus-visible { outline: 2px solid rgb(139 92 246); outline-offset: 2px; }
    </style>




    </>
  );
}
