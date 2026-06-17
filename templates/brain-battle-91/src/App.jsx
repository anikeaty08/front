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



                    for(let i=1; i<=12; i++) {
                        document.write(`
                            <button onclick="setClass(${i})" class="glass glass-btn aspect-square rounded-xl flex flex-col items-center justify-center gap-1 hover:border-indigo-500/50 transition-all">
                                <span class="text-xl font-semibold text-white">${i}</span>
                                <span class="text-[10px] text-zinc-500 uppercase tracking-wider">Class</span>
                            </button>
                        `);
                    }
                


        // --- TRANSLATION STORE ---
        const translations = {
            en: {
                selectClass: "Select Class",
                selectClassSub: "Choose your grade level.",
                selectSubject: "Select Subject",
                selectSubjectSub: "What do you want to learn today?",
                score: "SCORE",
                next: "Next Question",
                subjects: {
                    Math: "Mathematics", Science: "Science", English: "English", 
                    History: "History", EVS: "EVS", Physics: "Physics", 
                    Chemistry: "Chemistry", Biology: "Biology", GK: "General Knowledge"
                }
            },
            hi: {
                selectClass: "कक्षा चुनें",
                selectClassSub: "अपना ग्रेड स्तर चुनें।",
                selectSubject: "विषय चुनें",
                selectSubjectSub: "आज आप क्या सीखना चाहते हैं?",
                score: "स्कोर",
                next: "अगला प्रश्न",
                subjects: {
                    Math: "गणित", Science: "विज्ञान", English: "अंग्रेज़ी", 
                    History: "इतिहास", EVS: "पर्यावरण अध्ययन", Physics: "भौतिक विज्ञान", 
                    Chemistry: "रसायन विज्ञान", Biology: "जीवविज्ञान", GK: "सामान्य ज्ञान"
                }
            },
            hinglish: {
                selectClass: "Class Select Karein",
                selectClassSub: "Apna class choose karo.",
                selectSubject: "Subject Select Karein",
                selectSubjectSub: "Aaj kya padhna hai?",
                score: "SCORE",
                next: "Next Question",
                subjects: {
                    Math: "Maths", Science: "Science", English: "English", 
                    History: "History", EVS: "EVS", Physics: "Physics", 
                    Chemistry: "Chemistry", Biology: "Biology", GK: "General Knowledge"
                }
            }
        };

        // --- STATE MANAGEMENT ---
        let state = {
            lang: 'en',
            class: null,
            subject: null,
            score: 0,
            streak: 0,
            currentQIndex: 0,
            questions: [],
            isAnswered: false
        };

        // --- NAVIGATION LOGIC ---
        function setLanguage(lang) {
            state.lang = lang;
            document.getElementById('view-language').classList.add('hidden');
            document.getElementById('view-class').classList.remove('hidden');
            
            // Apply translations
            const t = translations[lang];
            document.getElementById('lbl-select-class').innerText = t.selectClass;
            document.getElementById('lbl-select-class-sub').innerText = t.selectClassSub;
            document.getElementById('lbl-select-subject').innerText = t.selectSubject;
            document.getElementById('lbl-select-subject-sub').innerText = t.selectSubjectSub;
            document.getElementById('lbl-score').innerText = t.score;
            document.getElementById('lbl-next').innerText = t.next;
        }

        function setClass(cls) {
            state.class = cls;
            document.getElementById('view-class').classList.add('hidden');
            document.getElementById('view-subject').classList.remove('hidden');
            renderSubjects(cls);
        }

        function setSubject(sub) {
            state.subject = sub;
            document.getElementById('view-subject').classList.add('hidden');
            document.getElementById('view-battle').classList.remove('hidden');
            document.getElementById('main-header').classList.remove('hidden');
            document.getElementById('game-nav').classList.remove('hidden');
            
            // Set header info
            const t = translations[state.lang];
            document.getElementById('header-context').innerText = `${t.subjects[sub]} • Class ${state.class}`;
            document.getElementById('nav-class-info').innerText = state.lang === 'hi' ? `कक्षा ${state.class}` : `Class ${state.class}`;
            document.getElementById('nav-subject-info').innerText = t.subjects[sub];

            startGame();
        }

        function goBack(toView) {
            document.querySelectorAll('main').forEach(el => el.classList.add('hidden'));
            document.getElementById(`view-${toView}`).classList.remove('hidden');
        }

        function endGame() {
            location.reload(); // Simple reset
        }

        // --- CONTENT GENERATION ---
        function renderSubjects(cls) {
            const container = document.getElementById('subject-grid');
            container.innerHTML = '';
            
            let subs = [];
            // Define subjects based on class level
            if(cls <= 5) subs = ['Math', 'English', 'EVS', 'GK'];
            else if(cls <= 10) subs = ['Math', 'Science', 'English', 'History', 'GK'];
            else subs = ['Physics', 'Chemistry', 'Biology', 'Math', 'English'];

            const t = translations[state.lang];

            subs.forEach(sub => {
                const btn = document.createElement('button');
                btn.className = "glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all text-left";
                btn.onclick = () => setSubject(sub);
                
                // Choose icon
                let icon = "book";
                if(sub === 'Math') icon = "calculator";
                if(sub === 'Science' || sub === 'Physics' || sub === 'Chemistry') icon = "atom";
                if(sub === 'Biology') icon = "dna";
                if(sub === 'GK' || sub === 'History') icon = "globe";

                btn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <iconify-icon icon="lucide:${icon}" width="20"></iconify-icon>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">${t.subjects[sub]}</div>
                            <div class="text-[10px] text-zinc-500">Infinite Questions</div>
                        </div>
                    </div>
                    <iconify-icon icon="lucide:arrow-right" class="text-zinc-600 group-hover:text-white transition-colors" width="16"></iconify-icon>
                `;
                container.appendChild(btn);
            });
        }

        // --- QUESTION GENERATOR ---
        // This simulates an infinite database by procedural generation for Math and random selection for others.
        function generateQuestion() {
            const cls = state.class;
            const sub = state.subject;
            const lang = state.lang;
            
            // MATH GENERATOR (Procedural)
            if(sub === 'Math') {
                return generateMathQuestion(cls, lang);
            }
            
            // STATIC QUESTIONS (Simulated DB)
            return getStaticQuestion(cls, sub, lang);
        }

        function generateMathQuestion(cls, lang) {
            const operations = cls <= 2 ? ['+'] : cls <= 5 ? ['+', '-', '*'] : ['+', '-', '*', '/'];
            const op = operations[Math.floor(Math.random() * operations.length)];
            
            let a, b, ans, qText;
            const range = cls * 10; 

            if(op === '+') {
                a = Math.floor(Math.random() * range) + 1;
                b = Math.floor(Math.random() * range) + 1;
                ans = a + b;
                qText = `${a} + ${b} = ?`;
            } else if(op === '-') {
                a = Math.floor(Math.random() * range) + range;
                b = Math.floor(Math.random() * range) + 1;
                ans = a - b;
                qText = `${a} - ${b} = ?`;
            } else if(op === '*') {
                a = Math.floor(Math.random() * (cls + 2)) + 1;
                b = Math.floor(Math.random() * 10) + 1;
                ans = a * b;
                qText = `${a} × ${b} = ?`;
            } else {
                b = Math.floor(Math.random() * 10) + 1;
                ans = Math.floor(Math.random() * 10) + 1;
                a = b * ans;
                qText = `${a} ÷ ${b} = ?`;
            }

            // Translation for text-based Math (if needed)
            let questionString = qText;
            if (lang === 'hi') questionString = `हल करें: ${qText}`;
            else if (lang === 'hinglish') questionString = `Solve karo: ${qText}`;
            else questionString = `Solve: ${qText}`;

            // Generate wrong options
            let options = new Set([ans]);
            while(options.size < 4) {
                let offset = Math.floor(Math.random() * 10) - 5;
                if(offset === 0) offset = 1;
                options.add(ans + offset);
            }
            
            return {
                q: questionString,
                options: Array.from(options).sort(() => Math.random() - 0.5),
                ans: ans // Storing value to find index later
            };
        }

        function getStaticQuestion(cls, sub, lang) {
            // A small subset of sample data to demonstrate multi-language capabilities
            // In a real app, this would be thousands of lines or an API call
            
            const db = [
                // SCIENCE / EVS
                {
                    match: { sub: ['Science', 'EVS', 'Biology'] },
                    en: { q: "Which gas do humans breathe in?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], a: "Oxygen" },
                    hi: { q: "मानव कौन सी गैस सांस लेते हैं?", opts: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"], a: "ऑक्सीजन" },
                    hinglish: { q: "Humans kaunsi gas breathe karte hain?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], a: "Oxygen" }
                },
                {
                    match: { sub: ['Science', 'Physics'] },
                    en: { q: "What is the unit of Force?", opts: ["Newton", "Joule", "Watt", "Pascal"], a: "Newton" },
                    hi: { q: "बल (Force) की इकाई क्या है?", opts: ["न्यूटन", "जूल", "वाट", "पास्कल"], a: "न्यूटन" },
                    hinglish: { q: "Force ki unit kya hoti hai?", opts: ["Newton", "Joule", "Watt", "Pascal"], a: "Newton" }
                },
                {
                    match: { sub: ['Chemistry'] },
                    en: { q: "What is H2O?", opts: ["Water", "Salt", "Air", "Acid"], a: "Water" },
                    hi: { q: "H2O क्या है?", opts: ["पानी", "नमक", "हवा", "अम्ल"], a: "पानी" },
                    hinglish: { q: "H2O kya hota hai?", opts: ["Paani", "Namak", "Hawa", "Acid"], a: "Paani" }
                },
                // ENGLISH
                {
                    match: { sub: ['English'] },
                    en: { q: "Antonym of 'Happy' is:", opts: ["Sad", "Joy", "Glad", "Fun"], a: "Sad" },
                    hi: { q: "'Happy' (खुश) का विलोम है:", opts: ["Sad (दुखी)", "Joy", "Glad", "Fun"], a: "Sad (दुखी)" },
                    hinglish: { q: "'Happy' ka opposite kya hai?", opts: ["Sad", "Joy", "Glad", "Fun"], a: "Sad" }
                },
                // GK / HISTORY
                {
                    match: { sub: ['GK', 'History'] },
                    en: { q: "Capital of India is:", opts: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], a: "New Delhi" },
                    hi: { q: "भारत की राजधानी है:", opts: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"], a: "नई दिल्ली" },
                    hinglish: { q: "India ki capital kaunsi hai?", opts: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], a: "New Delhi" }
                }
            ];

            // Filter relevant questions, then pick random
            // Since this is a demo, we pick loosely based on subject matching
            const relevant = db.filter(item => item.match.sub.includes(sub) || (sub === 'GK'));
            const data = relevant.length > 0 ? relevant[Math.floor(Math.random() * relevant.length)] : db[0];

            // Get language specific data
            const content = data[lang] || data['en']; // Fallback to English
            
            return {
                q: content.q,
                options: content.opts, // Already randomized in DB definition for simplicity here, usually shuffle
                ans: content.a
            };
        }

        // --- GAMEPLAY LOGIC ---
        function startGame() {
            state.score = 0;
            state.streak = 0;
            state.currentQIndex = 0;
            renderGameUI();
        }

        function renderGameUI() {
            const qData = generateQuestion();
            state.currentQData = qData; // Store current question data to check answer
            state.isAnswered = false;

            // Reset UI
            document.getElementById('next-btn').classList.add('hidden');
            document.getElementById('question-text').innerText = qData.q;
            document.getElementById('score-display').innerText = state.score;
            document.getElementById('streak-display').innerText = state.streak;

            // Progress bar loop simulation (infinite)
            const progress = (state.currentQIndex % 10) * 10; 
            document.getElementById('progress-bar').style.width = `${progress}%`;

            const container = document.getElementById('options-container');
            container.innerHTML = '';
            
            const letters = ['A', 'B', 'C', 'D'];
            
            // Shuffle options if they aren't already (Math ones are, Static ones need shuffle)
            let displayOptions = [...qData.options];
            if(state.subject !== 'Math') {
                 displayOptions.sort(() => Math.random() - 0.5);
            }

            // Find correct index in the shuffled array
            let correctIndex = -1;
            if(state.subject === 'Math') {
                correctIndex = displayOptions.indexOf(qData.ans);
            } else {
                correctIndex = displayOptions.indexOf(qData.ans);
            }

            // Store correct index in state for validation
            state.correctIdx = correctIndex;

            displayOptions.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = `group w-full text-left relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-200 active:scale-[0.98]`;
                btn.onclick = () => checkAnswer(idx, btn);
                btn.id = `opt-${idx}`;
                
                btn.innerHTML = `
                    <div class="flex items-center justify-between relative z-10">
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 font-medium text-sm group-hover:bg-zinc-700 transition-colors" id="icon-${idx}">${letters[idx]}</div>
                            <span class="text-sm text-zinc-300 font-medium group-hover:text-white">${opt}</span>
                        </div>
                        <iconify-icon id="status-${idx}" icon="" class="text-transparent transition-all" width="18"></iconify-icon>
                    </div>
                `;
                container.appendChild(btn);
            });
        }

        function checkAnswer(selectedIndex, btnElement) {
            if (state.isAnswered) return;
            state.isAnswered = true;

            const isCorrect = selectedIndex === state.correctIdx;
            const correctBtn = document.getElementById(`opt-${state.correctIdx}`);

            if (isCorrect) {
                state.score += 10;
                state.streak++;
                
                // UI Correct
                btnElement.classList.remove('border-zinc-800', 'bg-zinc-900/50');
                btnElement.classList.add('correct-anim', 'border-emerald-500/50');
                btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('bg-zinc-800', 'bg-emerald-500');
                btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('text-zinc-400', 'text-white');
                const icon = btnElement.querySelector(`#status-${selectedIndex}`);
                icon.setAttribute('icon', 'lucide:check-circle-2');
                icon.classList.replace('text-transparent', 'text-emerald-500');
            } else {
                state.streak = 0;
                
                // UI Wrong
                btnElement.classList.remove('border-zinc-800', 'bg-zinc-900/50');
                btnElement.classList.add('wrong-anim', 'border-rose-500/50');
                btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('bg-zinc-800', 'bg-rose-500');
                btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('text-zinc-400', 'text-white');
                const icon = btnElement.querySelector(`#status-${selectedIndex}`);
                icon.setAttribute('icon', 'lucide:x-circle');
                icon.classList.replace('text-transparent', 'text-rose-500');

                // Highlight Correct
                correctBtn.classList.add('correct-anim');
                correctBtn.querySelector(`#status-${state.correctIdx}`).setAttribute('icon', 'lucide:check-circle-2');
                correctBtn.querySelector(`#status-${state.correctIdx}`).classList.replace('text-transparent', 'text-emerald-500');
            }

            document.getElementById('score-display').innerText = state.score;
            document.getElementById('streak-display').innerText = state.streak;
            document.getElementById('next-btn').classList.remove('hidden');
        }

        function nextQuestion() {
            state.currentQIndex++;
            renderGameUI();
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
      

<div className="relative w-full max-w-[400px] h-[850px] bg-zinc-950 rounded-[32px] overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px]"></div>
</div>

<header className="relative z-10 px-6 pt-8 pb-4 flex justify-between items-center hidden" id="main-header">
<div className="flex flex-col">
<h1 className="text-white text-lg font-medium tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:brain-circuit" width="18"></iconify-icon>
                    BRAIN BATTLE
                </h1>
<span className="text-xs text-zinc-500 tracking-wide font-medium mt-0.5" id="header-context">...</span>
</div>
<div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">
<iconify-icon className="text-orange-500" icon="lucide:flame" width="14"></iconify-icon>
<span className="text-xs font-medium text-white" id="streak-display">0</span>
</div>
</header>

<main className="relative z-20 flex-1 flex flex-col justify-center px-6 animate-fade-in" id="view-language">
<div className="mb-8 text-center">
<div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:languages" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">Select Language</h2>
<p className="text-xs text-zinc-500">Choose your preferred language to start learning.</p>
</div>
<div className="flex flex-col gap-3">
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all" onclick="setLanguage('en')">
<div className="flex items-center gap-3">
<span className="text-lg">🇺🇸</span>
<div className="text-left">
<div className="text-sm font-medium text-white">English</div>
<div className="text-[10px] text-zinc-500">Default</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all" onclick="setLanguage('hi')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">हिंदी</div>
<div className="text-[10px] text-zinc-500">Hindi</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all" onclick="setLanguage('hinglish')">
<div className="flex items-center gap-3">
<span className="text-lg">💬</span>
<div className="text-left">
<div className="text-sm font-medium text-white">Hinglish</div>
<div className="text-[10px] text-zinc-500">Mix of Hindi &amp; English</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</main>

<main className="hidden relative z-20 flex-1 flex flex-col pt-12 px-6 animate-fade-in" id="view-class">
<button className="absolute top-8 left-6 text-zinc-500 hover:text-white transition-colors" onclick="goBack('language')">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="mb-6 mt-4">
<h2 className="text-lg font-medium text-white tracking-tight mb-1" id="lbl-select-class">Select Class</h2>
<p className="text-xs text-zinc-500" id="lbl-select-class-sub">Choose your grade level.</p>
</div>
<div className="grid grid-cols-3 gap-3 overflow-y-auto hide-scroll pb-4">


</div>
</main>

<main className="hidden relative z-20 flex-1 flex flex-col pt-12 px-6 animate-fade-in" id="view-subject">
<button className="absolute top-8 left-6 text-zinc-500 hover:text-white transition-colors" onclick="goBack('class')">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="mb-6 mt-4">
<h2 className="text-lg font-medium text-white tracking-tight mb-1" id="lbl-select-subject">Select Subject</h2>
<p className="text-xs text-zinc-500" id="lbl-select-subject-sub">What do you want to learn today?</p>
</div>
<div className="flex flex-col gap-3" id="subject-grid">

</div>
</main>

<main className="hidden relative z-10 flex-1 px-6 flex flex-col animate-fade-in pt-4" id="view-battle">

<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-400 tracking-wide"><span id="lbl-score">SCORE</span> <span className="text-white text-lg ml-1" id="score-display">0</span></span>
<button className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 rounded hover:text-white transition-colors" onclick="endGame()">
<iconify-icon className="inline mb-0.5" icon="lucide:log-out" width="10"></iconify-icon> EXIT
                </button>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full mb-8 overflow-hidden">
<div className="h-full w-[0%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" id="progress-bar"></div>
</div>

<div className="relative glass-highlight p-6 rounded-2xl mb-6 shadow-xl min-h-[140px] flex items-center justify-center border-t border-white/10">
<h2 className="text-lg font-medium text-white leading-relaxed text-center tracking-tight" id="question-text">
                    Loading...
                </h2>
</div>

<div className="flex flex-col gap-3 mb-auto" id="options-container">

</div>

<div className="mt-4 flex flex-col gap-4 h-[60px]">
<button className="hidden w-full bg-white text-black font-medium py-3.5 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-zinc-200 transition-colors active:scale-95 flex items-center justify-center gap-2" id="next-btn" onclick="nextQuestion()">
<span id="lbl-next">Next Question</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</main>

<nav className="hidden relative z-10 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl px-6 py-4 mt-4" id="game-nav">
<div className="flex justify-between items-center">
<div className="flex flex-col gap-0.5">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider" id="nav-class-info">Class</div>
<div className="text-xs text-white font-medium" id="nav-subject-info">Subject</div>
</div>
<div className="h-8 w-px bg-zinc-800 mx-4"></div>
<div className="flex-1 text-right">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Mode</div>
<div className="text-xs text-emerald-400 font-medium flex items-center justify-end gap-1">
<iconify-icon icon="lucide:infinity" width="12"></iconify-icon> Infinite
                    </div>
</div>
</div>
</nav>
</div>



    </>
  );
}
