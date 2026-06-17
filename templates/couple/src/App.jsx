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



        // --- CONSTANTS ---
        const DB_KEY = 'aura_db_v5'; 
        const SESSION_KEY = 'aura_session_v5';
        const views = [
            'view-welcome', 'view-auth-her', 'view-home-her', 
            'view-auth-him-start', 'view-login-general', 'view-login-select', 'view-login-him', 
            'view-checkin', 'view-success-her', 'view-dashboard-him'
        ];
        
        // --- DAILY QUESTIONS LOGIC ---
        // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
        const dailyPrompts = {
            0: {
                greeting: "Happy Sunday, love.",
                q1: "Did you rest well this weekend?",
                q5: "How is your spirit today?",
                q7: "What are you looking forward to this week?"
            },
            1: {
                greeting: "New week, my love.",
                q1: "Rise and shine. How was your sleep?",
                q5: "How are you feeling about the week ahead?",
                q7: "What is your main focus today?"
            },
            2: {
                greeting: "Happy Tuesday.",
                q1: "How did you sleep last night?",
                q5: "How is your inner world today?",
                q7: "Is there anything I can help you with?"
            },
            3: {
                greeting: "Mid-week check-in.",
                q1: "How are you resting these days?",
                q5: "How is your heart holding up?",
                q7: "Tell me something good that happened."
            },
            4: {
                greeting: "It's almost Friday.",
                q1: "How was your sleep, darling?",
                q5: "What is the weather like inside?",
                q7: "Anything weighing on your mind?"
            },
            5: {
                greeting: "Happy Friday!",
                q1: "Did you wake up feeling rested?",
                q5: "How are you feeling about the weekend?",
                q7: "Do we have plans? Or should we make some?"
            },
            6: {
                greeting: "Happy Saturday.",
                q1: "Did you sleep in? How was it?",
                q5: "What color is your mood today?",
                q7: "What do you need most right now?"
            }
        };

        // --- STATE ---
        let currentUser = null; 
        let tempLoginId = null; 
        let currentStep = 1;
        const totalSteps = 7;
        let pinInput = "";

        // --- DATABASE MOCK ---
        function getDB() {
            const s = localStorage.getItem(DB_KEY);
            return s ? JSON.parse(s) : {};
        }
        function saveDB(db) {
            localStorage.setItem(DB_KEY, JSON.stringify(db));
        }

        // --- NAVIGATION & INIT ---
        function init() {
            const session = localStorage.getItem(SESSION_KEY);
            if (session) {
                currentUser = JSON.parse(session);
                if (currentUser.role === 'HER') navigateTo('view-home-her');
                else if (currentUser.role === 'HIM') navigateTo('view-login-him');
            } else {
                navigateTo('view-welcome');
            }
        }

        function navigateTo(viewId) {
            views.forEach(id => {
                const el = document.getElementById(id);
                if (id === viewId) {
                    el.classList.remove('hidden');
                    el.classList.add('fade-in');
                    el.style.display = 'flex';
                } else {
                    el.classList.add('hidden');
                    el.classList.remove('fade-in');
                    el.style.display = 'none';
                }
            });

            if (viewId === 'view-home-her') {
                document.getElementById('display-id-her').innerText = currentUser.id;
                // Update greeting based on day
                const day = new Date().getDay();
                document.getElementById('her-greeting-dash').innerText = dailyPrompts[day].greeting;
            }
            if (viewId === 'view-dashboard-him') loadDashboard();
            if (viewId === 'view-login-him') {
                 pinInput = "";
                 updatePinDisplay();
            }
            if (viewId === 'view-login-general') {
                document.getElementById('login-id-input').value = "";
            }
        }

        function handleLogout() {
            localStorage.removeItem(SESSION_KEY);
            currentUser = null;
            tempLoginId = null;
            navigateTo('view-welcome');
        }

        // --- AUTH: HER ---
        function generateID() {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; 
            let result = 'AURA-';
            for (let i = 0; i < 2; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
            return result;
        }

        function registerHer() {
            const name = document.getElementById('her-name-input').value.trim();
            if (!name) return alert("Please enter your name.");
            
            const newId = generateID();
            const db = getDB();
            
            db[newId] = {
                role: 'HER',
                name: name,
                created: Date.now(),
                checkins: [] 
            };
            saveDB(db);

            currentUser = { role: 'HER', id: newId, name: name };
            localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
            
            navigateTo('view-home-her');
        }

        // --- AUTH: HIM ---
        function registerHim() {
            const partnerId = document.getElementById('partner-id-input').value.trim().toUpperCase();
            const pin = document.getElementById('create-pin-input').value;
            
            if (pin.length !== 4) return alert("PIN must be 4 digits.");
            
            const db = getDB();
            if (!db[partnerId]) return alert("Partner ID not found.");
            
            db[partnerId].partnerPin = pin;
            db[partnerId].hasPartner = true;
            saveDB(db);

            currentUser = { role: 'HIM', linkedId: partnerId };
            localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));

            navigateTo('view-login-him');
        }

        // --- LOGIN FLOW ---
        function checkLoginID() {
            const id = document.getElementById('login-id-input').value.trim().toUpperCase();
            const db = getDB();
            
            if (!db[id]) {
                alert("ID not found. Please check spelling.");
                return;
            }

            tempLoginId = id;
            document.getElementById('login-name-her').innerText = db[id].name || "Her";
            navigateTo('view-login-select');
        }

        function selectProfile(role) {
            const db = getDB();
            const user = db[tempLoginId];

            if (role === 'HER') {
                currentUser = { role: 'HER', id: tempLoginId, name: user.name };
                localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
                navigateTo('view-home-her');
            } else if (role === 'HIM') {
                if (!user.partnerPin) {
                    alert("Partner access not set up yet. Go to 'I am Him' on start screen.");
                    navigateTo('view-welcome');
                    return;
                }
                currentUser = { role: 'HIM', linkedId: tempLoginId };
                navigateTo('view-login-him');
            }
        }

        // --- CHECK-IN FLOW (HER) ---
        function startCheckin() {
            // Apply Dynamic Questions
            const day = new Date().getDay();
            const prompts = dailyPrompts[day];
            
            document.getElementById('q1-title').innerText = prompts.q1;
            document.getElementById('q5-title').innerText = prompts.q5;
            document.getElementById('q7-title').innerText = prompts.q7;
            
            // Reset Form
            document.getElementById('checkin-form').reset();
            currentStep = 1;
            renderStep();
            navigateTo('view-checkin');
        }

        function renderStep() {
            document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
            const currentEl = document.querySelector(`.step-content[data-step="${currentStep}"]`);
            if (currentEl) {
                currentEl.classList.remove('hidden');
                currentEl.classList.add('fade-in');
            }
            
            const stepIndicator = document.getElementById('step-indicator');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-text');
            const nextIcon = document.getElementById('next-icon');

            stepIndicator.innerText = `${currentStep}/${totalSteps}`;
            prevBtn.style.opacity = currentStep === 1 ? '0' : '1';
            prevBtn.disabled = currentStep === 1;

            if (currentStep === totalSteps) {
                nextBtn.innerText = "Finish";
                nextIcon.setAttribute('icon', 'solar:heart-angle-linear');
            } else {
                nextBtn.innerText = "Next";
                nextIcon.setAttribute('icon', 'solar:arrow-right-linear');
            }
        }

        document.getElementById('next-btn').addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                renderStep();
            } else {
                saveCheckIn();
            }
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                renderStep();
            }
        });

        function saveCheckIn() {
            const sleep = document.querySelector('input[name="q1_sleep"]:checked')?.value || "unknown";
            const body = document.querySelector('input[name="q2_body"]:checked')?.value || "unknown";
            const stress = document.querySelector('input[name="q3_stress"]:checked')?.value || "unknown";
            const social = document.querySelector('input[name="q4_social"]:checked')?.value || "unknown";
            const vibe = document.querySelector('input[name="q5_vibe"]:checked')?.value || "unknown";
            const feelings = Array.from(document.querySelectorAll('input[name="q6_feelings"]:checked')).map(cb => cb.value);
            const journal = document.getElementById('q7_journal').value;

            const entry = {
                timestamp: Date.now(),
                date: new Date().toLocaleDateString(),
                sleep, body, stress, social, vibe, feelings, journal
            };

            const db = getDB();
            if (db[currentUser.id]) {
                if(!db[currentUser.id].checkins) db[currentUser.id].checkins = [];
                db[currentUser.id].checkins.push(entry);
                saveDB(db);
            }
            
            navigateTo('view-success-her');
        }

        // --- INSIGHTS FLOW (HIM) ---
        
        // PIN Logic
        const pinDots = [1,2,3,4].map(i => document.getElementById(`dot-${i}`));
        document.querySelectorAll('.pin-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (pinInput.length < 4) {
                    pinInput += btn.innerText;
                    updatePinDisplay();
                    if (pinInput.length === 4) verifyPin();
                }
            });
        });

        function updatePinDisplay() {
            pinDots.forEach((dot, index) => {
                if (index < pinInput.length) {
                    dot.classList.remove('bg-slate-100');
                    dot.classList.add('bg-indigo-600');
                } else {
                    dot.classList.add('bg-slate-100');
                    dot.classList.remove('bg-indigo-600');
                }
            });
        }

        function verifyPin() {
            const db = getDB();
            const record = db[currentUser.linkedId];
            
            setTimeout(() => {
                if (record && record.partnerPin === pinInput) {
                    localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
                    navigateTo('view-dashboard-him');
                } else {
                    alert("Incorrect PIN");
                    pinInput = "";
                    updatePinDisplay();
                }
            }, 100);
        }

        function loadDashboard() {
            const db = getDB();
            const record = db[currentUser.linkedId];
            
            if (!record || !record.checkins || record.checkins.length === 0) {
                document.getElementById('dashboard-content').style.display = 'none';
                document.getElementById('dashboard-empty').style.display = 'flex';
                document.getElementById('dash-date').innerText = "Waiting for heart update...";
                return;
            }

            const sorted = record.checkins.sort((a,b) => b.timestamp - a.timestamp);
            const latest = sorted[0];
            const isFresh = (Date.now() - latest.timestamp) < (24 * 60 * 60 * 1000);

            if (!isFresh) {
                document.getElementById('dash-date').innerText = "Last update: " + latest.date;
            } else {
                const timeStr = new Date(latest.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                document.getElementById('dash-date').innerText = `Today, ${timeStr}`;
            }

            document.getElementById('dashboard-content').style.display = 'block';
            document.getElementById('dashboard-empty').style.display = 'none';

            // --- SCORE INTERPRETATION ---
            
            // Physical Score
            let physText = "Normal";
            if (['insomnia','broken','short'].includes(latest.sleep) || ['sick','heavy'].includes(latest.body)) physText = "Low Energy";
            if (['deep','good'].includes(latest.sleep) && ['energetic'].includes(latest.body)) physText = "Radiant";
            if (latest.body === 'sick') physText = "Unwell";
            document.getElementById('dash-physical-score').innerText = physText;

            // Social Score
            let socialText = "Balanced";
            if (['hermit','quiet'].includes(latest.social)) socialText = "Needs Space";
            if (['social','party'].includes(latest.social)) socialText = "Social / Open";
            if (latest.social === 'low') socialText = "Text Only";
            document.getElementById('dash-social-score').innerText = socialText;

            // Tags
            const tagsContainer = document.getElementById('dash-tags');
            tagsContainer.innerHTML = '';
            if (latest.feelings && latest.feelings.length > 0) {
                latest.feelings.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = "px-3 py-1 bg-rose-50 border border-rose-100 rounded-lg text-[10px] font-bold text-rose-500 uppercase tracking-wide";
                    span.innerText = tag;
                    tagsContainer.appendChild(span);
                });
            } else {
                tagsContainer.innerHTML = '<span class="text-xs text-slate-400">She didn\'t select specific feelings.</span>';
            }

            // Journal
            const jText = latest.journal.trim() ? `"${latest.journal}"` : "She didn't write a note today.";
            document.getElementById('dash-journal').innerText = jText;

            // Insight Logic
            let insight = "";
            
            if (latest.stress === 'panic' || latest.vibe === 'stormy') {
                insight = "She is going through a storm right now. Your presence is the most important thing. Don't try to fix it, just hold space for her.";
            } else if (latest.stress === 'high' || latest.vibe === 'windy' || latest.vibe === 'rainy') {
                insight = "It's a heavy day for her. Small acts of love—making tea, a hug, or handling a chore—will mean the world.";
            } else if (latest.vibe === 'rainbow' || latest.vibe === 'sunny') {
                insight = "Her heart is light and happy today! It's a beautiful time to share a laugh or plan a date.";
            } else if (['insomnia','broken'].includes(latest.sleep)) {
                insight = "She's tired today, love. Be gentle and perhaps offer her an early night or a chance to nap.";
            } else {
                insight = "She is feeling steady and balanced. A perfect day to just tell her you love her.";
            }

            if (latest.feelings.includes('Lonely')) insight = "She is feeling lonely. Please reach out to her immediately with reassurance.";
            
            document.getElementById('dash-insight').innerText = insight;
        }

        document.addEventListener('DOMContentLoaded', init);

    
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
      

<main className="w-full h-[800px] max-w-[380px] bg-white border border-slate-100 rounded-[40px] shadow-2xl shadow-rose-100/50 overflow-hidden relative flex flex-col">

<header className="absolute top-0 w-full z-40 flex items-center justify-between px-8 pt-8 pb-4 bg-gradient-to-b from-white via-white/95 to-transparent pointer-events-none">
<div className="flex items-center gap-2 pointer-events-auto">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<span className="text-xs font-semibold text-slate-800 tracking-tight">AURA</span>
</div>
<button className="pointer-events-auto text-slate-300 hover:text-rose-400 transition-colors" onclick="handleLogout()">
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon>
</button>
</header>

<div className="flex-1 flex flex-col p-8 fade-in bg-white z-30" id="view-welcome" style={{display: 'flex'}}>
<div className="flex-1 flex flex-col justify-center space-y-8">
<div className="space-y-3 text-center">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-50 text-rose-500 mb-2">
<iconify-icon icon="solar:heart-angle-linear" width="28"></iconify-icon>
</div>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Connect Hearts</h1>
<p className="text-sm text-slate-400 leading-relaxed px-4">A gentle way to stay in sync with how you're truly feeling.</p>
</div>
<div className="space-y-3 pt-6">
<button className="group w-full p-4 rounded-3xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/50 transition-all flex items-center gap-4 text-left" onclick="navigateTo('view-auth-her')">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-heart-rounded-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<span className="block text-sm font-semibold text-slate-800">I am Her</span>
<span className="block text-xs text-slate-400 group-hover:text-rose-400 transition-colors">Share my heart</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-rose-400 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="group w-full p-4 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all flex items-center gap-4 text-left" onclick="navigateTo('view-auth-him-start')">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-heart-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<span className="block text-sm font-semibold text-slate-800">I am Him</span>
<span className="block text-xs text-slate-400 group-hover:text-indigo-400 transition-colors">Support &amp; Listen</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="text-center pt-4">
<button className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors py-2 px-4" onclick="navigateTo('view-login-general')">
                        Have we met? <span className="text-slate-800 underline decoration-rose-200 underline-offset-4">Log in here</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-col h-full p-8 bg-white z-30" id="view-login-general" style={{display: 'none'}}>
<div className="flex-1 flex flex-col justify-center space-y-6">
<button className="absolute top-8 left-8 text-slate-400 hover:text-slate-800" onclick="navigateTo('view-welcome')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<div className="space-y-2">
<h2 className="text-xl font-semibold text-slate-900">Welcome home.</h2>
<p className="text-sm text-slate-400">Please enter your Connection ID.</p>
</div>
<div className="space-y-4">
<input className="w-full px-4 py-4 bg-slate-50 rounded-2xl border-none text-center text-lg font-mono text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-rose-100 transition-all uppercase" id="login-id-input" placeholder="e.g. AURA-X9" type="text"/>
<button className="w-full py-4 bg-slate-900 hover:bg-rose-500 text-white text-sm font-medium rounded-2xl shadow-lg shadow-slate-100 transition-all mt-4" onclick="checkLoginID()">Continue</button>
</div>
</div>
</div>

<div className="hidden flex-col h-full p-8 bg-white z-30" id="view-login-select" style={{display: 'none'}}>
<div className="flex-1 flex flex-col justify-center space-y-8">
<button className="absolute top-8 left-8 text-slate-400 hover:text-slate-800" onclick="navigateTo('view-login-general')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<div className="space-y-2 text-center">
<h2 className="text-xl font-semibold text-slate-900">Who is here?</h2>
<p className="text-sm text-slate-400">Select your side of the story.</p>
</div>
<div className="space-y-3">
<button className="group w-full p-4 rounded-3xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50 transition-all flex items-center gap-4 text-left" onclick="selectProfile('HER')">
<div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-heart-rounded-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<span className="block text-sm font-semibold text-slate-800" id="login-name-her">Her</span>
<span className="block text-xs text-slate-400">Update my mood</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-rose-400 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="group w-full p-4 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all flex items-center gap-4 text-left" onclick="selectProfile('HIM')">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-heart-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<span className="block text-sm font-semibold text-slate-800">Partner</span>
<span className="block text-xs text-slate-400">Check on her</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden flex-col h-full p-8 bg-white z-30" id="view-auth-her" style={{display: 'none'}}>
<div className="flex-1 flex flex-col justify-center space-y-6">
<button className="absolute top-8 left-8 text-slate-400 hover:text-slate-800" onclick="navigateTo('view-welcome')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<div className="space-y-2">
<h2 className="text-xl font-semibold text-slate-900">Let's begin.</h2>
<p className="text-sm text-slate-400">What name makes you feel most loved?</p>
</div>
<div className="space-y-6">
<input className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-rose-500 text-xl text-slate-800 placeholder:text-slate-300 focus:outline-none transition-colors" id="her-name-input" placeholder="Your Name" type="text"/>
<button className="w-full py-4 bg-slate-900 hover:bg-rose-500 text-white text-sm font-medium rounded-2xl shadow-lg shadow-slate-200 transition-all" onclick="registerHer()">Create Connection</button>
</div>
</div>
</div>

<div className="hidden flex-col h-full bg-white relative z-20" id="view-home-her" style={{display: 'none'}}>
<div className="flex-1 flex flex-col justify-center p-8 space-y-10">
<div className="bg-gradient-to-br from-rose-50 to-white rounded-[32px] p-8 border border-rose-100 text-center space-y-4 shadow-sm">
<div className="flex items-center justify-center gap-2 text-rose-400 mb-2">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon>
<p className="text-xs font-semibold uppercase tracking-wider">Our Connection ID</p>
</div>
<div className="text-4xl font-bold text-slate-800 tracking-widest font-mono" id="display-id-her">...</div>
<p className="text-xs text-slate-400 leading-relaxed px-2">Share this special code with him so he can tune into your world.</p>
</div>
<div className="text-center space-y-2">
<h2 className="text-2xl font-semibold text-slate-900" id="her-greeting-dash">Hello, beautiful.</h2>
<p className="text-sm text-slate-400">Ready to share how you're feeling today?</p>
</div>
<button className="group w-full py-5 bg-slate-900 hover:bg-rose-500 text-white rounded-2xl shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3" onclick="startCheckin()">
<span className="text-sm font-medium">Start Daily Check-in</span>
<iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="hidden flex-col h-full p-8 bg-white z-30" id="view-auth-him-start" style={{display: 'none'}}>
<div className="flex-1 flex flex-col justify-center space-y-6">
<button className="absolute top-8 left-8 text-slate-400 hover:text-slate-800" onclick="navigateTo('view-welcome')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<div className="space-y-2">
<h2 className="text-xl font-semibold text-slate-900">Partner Access</h2>
<p className="text-sm text-slate-400">Enter the ID she shared with you.</p>
</div>
<div className="space-y-6">
<input className="w-full px-4 py-4 bg-slate-50 rounded-2xl border-none text-center text-lg font-mono text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-indigo-100 transition-all uppercase" id="partner-id-input" placeholder="e.g. AURA-X9" type="text"/>
<div className="space-y-3">
<label className="text-xs font-medium text-slate-500 block text-center">Create a secure 4-digit PIN</label>
<div className="flex gap-3 justify-center">
<input className="w-full px-4 py-4 bg-slate-50 rounded-2xl border-none text-center text-xl tracking-[0.5em] text-slate-800 focus:ring-2 focus:ring-indigo-100 transition-all" id="create-pin-input" maxlength="4" placeholder="••••" type="password"/>
</div>
</div>
<button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-2xl shadow-lg shadow-indigo-100 transition-all" onclick="registerHim()">Secure Connection</button>
</div>
</div>
</div>

<div className="hidden flex-col h-full p-8 bg-white z-30" id="view-login-him" style={{display: 'none'}}>
<div className="flex-1 flex flex-col items-center justify-center space-y-8 w-full">
<button className="absolute top-8 left-8 text-slate-400 hover:text-slate-800" onclick="navigateTo('view-login-select')"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<div className="text-center space-y-2">
<div className="w-14 h-14 mx-auto rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-heart-linear" width="28"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-900">Private Access</h2>
<p className="text-xs text-slate-400">Enter your PIN to see how she is doing.</p>
</div>

<div className="w-full max-w-[240px]">
<div className="flex justify-center gap-4 mb-8 h-4">
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-all duration-300" id="dot-1"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-all duration-300" id="dot-2"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-all duration-300" id="dot-3"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-all duration-300" id="dot-4"></div>
</div>
<div className="grid grid-cols-3 gap-y-6 gap-x-8">
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">1</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">2</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">3</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">4</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">5</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">6</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">7</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">8</button>
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">9</button>
<div className="col-start-2">
<button className="pin-btn text-2xl font-light text-slate-800 hover:bg-indigo-50 rounded-full w-14 h-14 transition-colors">0</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-col h-full bg-white relative z-20" id="view-checkin" style={{display: 'none'}}>
<div className="h-20 shrink-0 bg-white"></div> 
<div className="px-8 flex justify-between items-end mb-4">
<span className="text-[10px] font-bold tracking-widest text-rose-300 uppercase">Heart Check</span>
<span className="text-xs font-semibold text-slate-800 bg-slate-50 px-3 py-1 rounded-full" id="step-indicator">1/7</span>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 relative">
<form id="checkin-form" onsubmit="event.preventDefault();">

<div className="step-content space-y-6 fade-in" data-step="1">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q1-title">How did you rest,<br/>my love?</h2>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q1_sleep" type="radio" value="insomnia"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:moon-stars-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">No sleep at all</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q1_sleep" type="radio" value="broken"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:cloud-storm-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Tossed &amp; turned</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q1_sleep" type="radio" value="short"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:alarm-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Woke up too early</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q1_sleep" type="radio" value="okay"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:cloud-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">It was okay</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q1_sleep" type="radio" value="good"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:sun-2-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Rested &amp; Ready</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q1_sleep" type="radio" value="deep"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Deep &amp; Peaceful</span>
</div>
</label>
</div>
</div>

<div className="step-content hidden space-y-6" data-step="2">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q2-title">How does your body feel today?</h2>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q2_body" type="radio" value="sick"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:thermometer-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Hurting / Unwell</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q2_body" type="radio" value="heavy"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:battery-low-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Heavy / Drained</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q2_body" type="radio" value="tense"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:accessibility-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Tense Shoulders</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q2_body" type="radio" value="jittery"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">A bit Jittery</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q2_body" type="radio" value="neutral"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Just Normal</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q2_body" type="radio" value="energetic"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:running-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Light &amp; Strong</span>
</div>
</label>
</div>
</div>

<div className="step-content hidden space-y-6" data-step="3">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q3-title">Is anything weighing on your mind?</h2>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q3_stress" type="radio" value="zen"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:spa-candle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Totally at Peace</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q3_stress" type="radio" value="low"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:tea-cup-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Calm &amp; Steady</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q3_stress" type="radio" value="focused"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:clipboard-check-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Busy but Good</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q3_stress" type="radio" value="mild"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:bell-bing-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">A little stressed</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q3_stress" type="radio" value="high"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:danger-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Very Stressed</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q3_stress" type="radio" value="panic"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:bomb-minimalistic-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">I'm Overwhelmed</span>
</div>
</label>
</div>
</div>

<div className="step-content hidden space-y-6" data-step="4">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q4-title">How social are you feeling?</h2>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q4_social" type="radio" value="hermit"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:lock-password-unlocked-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Need Solitude</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q4_social" type="radio" value="quiet"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:sofa-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Quiet Company</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q4_social" type="radio" value="low"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Text Only Today</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q4_social" type="radio" value="neutral"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:cup-hot-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Open to Chat</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q4_social" type="radio" value="social"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Social &amp; Cuddly</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q4_social" type="radio" value="party"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:confetti-minimalistic-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">High Energy</span>
</div>
</label>
</div>
</div>

<div className="step-content hidden space-y-6" data-step="5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q5-title">How's your inner weather?</h2>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q5_vibe" type="radio" value="stormy"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:cloud-bolt-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Stormy (Upset)</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q5_vibe" type="radio" value="rainy"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:cloud-rain-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Rainy (Sad)</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q5_vibe" type="radio" value="windy"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:wind-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Windy (Anxious)</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q5_vibe" type="radio" value="cloudy"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:cloud-sun-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Cloudy (Meh)</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q5_vibe" type="radio" value="sunny"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:sun-2-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Sunny (Happy)</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="q5_vibe" type="radio" value="rainbow"/>
<div className="radio-card h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50">
<iconify-icon className="text-slate-300" icon="solar:star-fall-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">Radiant (Joy)</span>
</div>
</label>
</div>
</div>

<div className="step-content hidden space-y-6" data-step="6">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q6-title">What feelings are present right now?</h2>
<p className="text-xs text-slate-400 px-1">Select as many as you need.</p>
<div className="flex flex-wrap gap-2 px-1">
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Loved"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Loved</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Tired"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Tired</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Anxious"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Anxious</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Excited"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Excited</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Frustrated"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Frustrated</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Calm"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Calm</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Soft"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Soft</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Grateful"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Grateful</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Sad"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Sad</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Overwhelmed"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Overwhelmed</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Lonely"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Lonely</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Confident"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Confident</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Sensitive"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Sensitive</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Safe"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Safe</span></label>
<label className="cursor-pointer"><input className="peer sr-only" name="q6_feelings" type="checkbox" value="Content"/><span className="inline-block px-3 py-2 rounded-xl border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-50 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-checked:text-white transition-all">Content</span></label>
</div>
</div>

<div className="step-content hidden space-y-6" data-step="7">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight leading-snug px-1" id="q7-title">Is there anything you want me to know?</h2>
<p className="text-sm text-slate-400 px-1">I'm listening, love.</p>
<div className="px-1">
<textarea className="w-full h-40 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-800 placeholder:text-slate-300 resize-none focus:bg-white focus:border-rose-200 focus:ring-1 focus:ring-rose-200 transition-all focus:outline-none" id="q7_journal" placeholder="Write whatever is on your heart..."></textarea>
</div>
</div>
</form>
</div>

<div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-white via-white to-transparent flex justify-between items-center z-10 shrink-0">
<button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-600 disabled:opacity-0 transition-opacity" id="prev-btn">Back</button>
<button className="h-12 px-8 bg-slate-900 hover:bg-rose-500 text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 shadow-xl shadow-slate-100 transition-all active:scale-95" id="next-btn">
<span id="next-text">Next</span>
<iconify-icon icon="solar:arrow-right-linear" id="next-icon" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="hidden flex-col items-center justify-center text-center p-8 space-y-6 h-full bg-white z-20" id="view-success-her" style={{display: 'none'}}>
<div className="w-24 h-24 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100 mb-2">
<iconify-icon icon="solar:heart-circle-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<div className="space-y-2">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Heart Updated.</h2>
<p className="text-sm text-slate-400 max-w-[220px] mx-auto leading-relaxed">I've saved your feelings securely. He can now see how to support you.</p>
</div>
<button className="mt-8 text-xs font-semibold text-rose-400 hover:text-rose-600 tracking-wide uppercase" onclick="navigateTo('view-home-her')">Return Home</button>
</div>

<div className="hidden flex-col h-full bg-slate-50 relative z-20" id="view-dashboard-him" style={{display: 'none'}}>
<div className="h-28 shrink-0 bg-white border-b border-slate-100 flex items-end px-6 pb-6 justify-between sticky top-0 z-10">
<div>
<h2 className="text-xl font-bold text-slate-900 tracking-tight">Her Heart Today</h2>
<p className="text-xs text-slate-400 mt-1" id="dash-date">Checking...</p>
</div>
<div className="w-10 h-10 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center">
<iconify-icon icon="solar:user-heart-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="hidden flex-col items-center justify-center pt-20 text-center space-y-4" id="dashboard-empty">
<div className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:hourglass-line-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-400">She hasn't checked in today.<br/><span className="text-xs text-slate-300">Send her a gentle text?</span></p>
</div>

<div className="space-y-5" id="dashboard-content">

<div className="bg-indigo-600 p-6 rounded-[28px] shadow-lg shadow-indigo-200 text-white relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 space-y-4">
<div className="flex items-center gap-2 mb-1 opacity-80">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wider">How to support her</span>
</div>
<p className="text-[15px] font-medium leading-7 opacity-95" id="dash-insight">
                                Analyzing her heart...
                            </p>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm flex flex-col justify-between h-32">
<div className="text-rose-300"><iconify-icon icon="solar:battery-charge-minimalistic-linear" width="22"></iconify-icon></div>
<div>
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Energy</span>
<p className="text-lg font-semibold text-slate-900 mt-1" id="dash-physical-score">Normal</p>
</div>
</div>
<div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm flex flex-col justify-between h-32">
<div className="text-indigo-300"><iconify-icon icon="solar:chat-round-line-linear" width="22"></iconify-icon></div>
<div>
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Social</span>
<p className="text-lg font-semibold text-slate-900 mt-1" id="dash-social-score">Open</p>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
<span className="text-xs font-semibold text-slate-900 ml-1">She is feeling</span>
<div className="flex flex-wrap gap-2" id="dash-tags"></div>
</div>

<div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
<span className="text-xs font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon icon="solar:notebook-linear" width="14"></iconify-icon>
                            Her words
                        </span>
<div className="relative">
<iconify-icon className="absolute -top-1 -left-1 text-rose-200 opacity-50" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-sm text-slate-600 italic leading-relaxed pl-6" id="dash-journal">"..."</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
