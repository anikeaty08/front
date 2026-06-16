import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
              timeUp: "Time's Up!",
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
              timeUp: "समय समाप्त!",
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
              timeUp: "Time Khatam!",
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
          isAnswered: false,
          timer: null,
          timeLeft: 60
      };

      // --- NAVIGATION LOGIC ---
      function startApp() {
          document.getElementById('view-welcome').classList.add('hidden');
          document.getElementById('view-language').classList.remove('hidden');
      }

      function setLanguage(lang) {
          state.lang = lang;
          document.getElementById('view-language').classList.add('hidden');
          document.getElementById('view-class').classList.remove('hidden');

          const t = translations[lang] || translations['en'];
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

          const t = translations[state.lang] || translations['en'];
          document.getElementById('header-context').innerText = `${t.subjects[sub]}`;
          document.getElementById('nav-class-info').innerText = state.lang === 'hi' ? `कक्षा ${state.class}` : `Class ${state.class}`;
          document.getElementById('nav-subject-info').innerText = t.subjects[sub];

          startGame();
      }

      function goBack(toView) {
          clearInterval(state.timer);
          document.querySelectorAll('main').forEach(el => el.classList.add('hidden'));
          document.getElementById(`view-${toView}`).classList.remove('hidden');
          if(toView === 'welcome') {
              document.getElementById('main-header').classList.add('hidden');
              document.getElementById('game-nav').classList.add('hidden');
          }
      }

      function endGame() {
          clearInterval(state.timer);
          location.reload();
      }

      // --- CONTENT GENERATION ---
      function renderSubjects(cls) {
          const container = document.getElementById('subject-grid');
          container.innerHTML = '';

          let subs = [];
          if(cls <= 5) subs = ['Math', 'English', 'EVS', 'GK'];
          else if(cls <= 10) subs = ['Math', 'Science', 'English', 'History', 'GK'];
          else subs = ['Physics', 'Chemistry', 'Biology', 'Math', 'English'];

          const t = translations[state.lang] || translations['en'];

          subs.forEach(sub => {
              const btn = document.createElement('button');
              btn.className = "glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all text-left";
              btn.onclick = () => setSubject(sub);

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

      // --- GAMEPLAY & TIMER LOGIC ---
      function startTimer() {
          state.timeLeft = 60; // 60 seconds per question
          updateTimerUI();

          if (state.timer) clearInterval(state.timer);

          state.timer = setInterval(() => {
              state.timeLeft--;
              updateTimerUI();

              if (state.timeLeft <= 0) {
                  clearInterval(state.timer);
                  handleTimeOut();
              }
          }, 1000);
      }

      function updateTimerUI() {
          const display = document.getElementById('timer-display');
          const badge = document.getElementById('timer-badge');

          display.innerText = `${state.timeLeft}s`;

          if(state.timeLeft <= 10) {
              display.classList.add('timer-warning');
              badge.classList.add('border-rose-500/50', 'bg-rose-500/10');
          } else {
              display.classList.remove('timer-warning');
              badge.classList.remove('border-rose-500/50', 'bg-rose-500/10');
          }
      }

      function handleTimeOut() {
          if (state.isAnswered) return;
          state.isAnswered = true;

          // Break streak
          state.streak = 0;
          document.getElementById('streak-display').innerText = state.streak;

          // Show timeout badge
          document.getElementById('timeout-badge').classList.remove('hidden');
          const t = translations[state.lang] || translations['en'];
          document.getElementById('timeout-badge').innerText = t.timeUp;

          // Highlight correct answer
          const correctBtn = document.getElementById(`opt-${state.correctIdx}`);
          if(correctBtn) {
              correctBtn.classList.add('correct-anim');
              correctBtn.querySelector(`#status-${state.correctIdx}`).setAttribute('icon', 'lucide:check-circle-2');
              correctBtn.querySelector(`#status-${state.correctIdx}`).classList.replace('text-transparent', 'text-emerald-500');
          }

          document.getElementById('next-btn').classList.remove('hidden');
      }

      function generateQuestion() {
          const cls = state.class;
          const sub = state.subject;
          const lang = state.lang;
          if(sub === 'Math') return generateMathQuestion(cls, lang);
          return getStaticQuestion(cls, sub, lang);
      }

      function generateMathQuestion(cls, lang) {
          const mathPrompts = {
              en: "Solve: ", hi: "हल करें: ", hinglish: "Solve karo: ",
              mr: "सोडवा: ", bn: "সমাধান করুন: ", ta: "தீர்க்கவும்: ",
              te: "పరిష్కరించండి: ", gu: "ઉકેલો: ", kn: "ಪರಿಹರಿಸಿ: ",
              ml: "പരിഹരിക്കുക: ", pa: "ਹੱਲ ਕਰੋ: ", or: "ସମାଧାନ କରନ୍ତୁ: ",
              as: "সমাধান কৰক: ", ur: "حل کریں: "
          };
          const prompt = mathPrompts[lang] || mathPrompts['en'];

          const operations = cls <= 2 ? ['+'] : cls <= 5 ? ['+', '-', '*'] : ['+', '-', '*', '/'];
          const op = operations[Math.floor(Math.random() * operations.length)];
          let a, b, ans, qText;
          const range = cls * 10;

          if(op === '+') { a = Math.floor(Math.random() * range) + 1; b = Math.floor(Math.random() * range) + 1; ans = a + b; qText = `${a} + ${b} = ?`; }
          else if(op === '-') { a = Math.floor(Math.random() * range) + range; b = Math.floor(Math.random() * range) + 1; ans = a - b; qText = `${a} - ${b} = ?`; }
          else if(op === '*') { a = Math.floor(Math.random() * (cls + 2)) + 1; b = Math.floor(Math.random() * 10) + 1; ans = a * b; qText = `${a} × ${b} = ?`; }
          else { b = Math.floor(Math.random() * 10) + 1; ans = Math.floor(Math.random() * 10) + 1; a = b * ans; qText = `${a} ÷ ${b} = ?`; }

          // Higher class challenge
          if(cls > 7 && Math.random() > 0.8) {
               const val = Math.floor(Math.random() * 20) + 1;
               qText = `${val}² = ?`;
               ans = val * val;
          }

          let options = new Set([ans]);
          while(options.size < 4) {
              let offset = Math.floor(Math.random() * 10) - 5;
              if(offset === 0) offset = 1;
              let v = ans + offset;
              options.add(v);
          }
          return { q: `${prompt}${qText}`, options: Array.from(options).sort(() => Math.random() - 0.5), ans: ans };
      }

      function getStaticQuestion(cls, sub, lang) {
          const db = [
              { match: { sub: ['Science', 'EVS', 'Biology'] }, en: { q: "Which gas do humans breathe in?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], a: "Oxygen" }, hi: { q: "मानव कौन सी गैस सांस लेते हैं?", opts: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"], a: "ऑक्सीजन" }, hinglish: { q: "Humans kaunsi gas breathe karte hain?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], a: "Oxygen" } },
              { match: { sub: ['Science', 'Physics'] }, en: { q: "What is the unit of Force?", opts: ["Newton", "Joule", "Watt", "Pascal"], a: "Newton" }, hi: { q: "बल (Force) की इकाई क्या है?", opts: ["न्यूटन", "जूल", "वाट", "पास्कल"], a: "न्यूटन" }, hinglish: { q: "Force ki unit kya hoti hai?", opts: ["Newton", "Joule", "Watt", "Pascal"], a: "Newton" } },
              { match: { sub: ['Chemistry'] }, en: { q: "What is H2O?", opts: ["Water", "Salt", "Air", "Acid"], a: "Water" }, hi: { q: "H2O क्या है?", opts: ["पानी", "नमक", "हवा", "अम्ल"], a: "पानी" }, hinglish: { q: "H2O kya hota hai?", opts: ["Paani", "Namak", "Hawa", "Acid"], a: "Paani" } },
              { match: { sub: ['English'] }, en: { q: "Antonym of 'Happy' is:", opts: ["Sad", "Joy", "Glad", "Fun"], a: "Sad" }, hi: { q: "'Happy' (खुश) का विलोम है:", opts: ["Sad (दुखी)", "Joy", "Glad", "Fun"], a: "Sad (दुखी)" }, hinglish: { q: "'Happy' ka opposite kya hai?", opts: ["Sad", "Joy", "Glad", "Fun"], a: "Sad" } },
              { match: { sub: ['GK', 'History'] }, en: { q: "Capital of India is:", opts: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], a: "New Delhi" }, hi: { q: "भारत की राजधानी है:", opts: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"], a: "नई दिल्ली" }, hinglish: { q: "India ki capital kaunsi hai?", opts: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], a: "New Delhi" } }
          ];
          const relevant = db.filter(item => item.match.sub.includes(sub) || (sub === 'GK'));
          const data = relevant.length > 0 ? relevant[Math.floor(Math.random() * relevant.length)] : db[0];
          const content = data[lang] || data['en'];
          return { q: content.q, options: content.opts, ans: content.a };
      }

      function startGame() {
          state.score = 0;
          state.streak = 0;
          state.currentQIndex = 0;
          renderGameUI();
      }

      function renderGameUI() {
          const qData = generateQuestion();
          state.isAnswered = false;

          // Start Timer
          startTimer();

          document.getElementById('timeout-badge').classList.add('hidden');
          document.getElementById('next-btn').classList.add('hidden');
          document.getElementById('question-text').innerText = qData.q;
          document.getElementById('score-display').innerText = state.score;
          document.getElementById('streak-display').innerText = state.streak;

          const progress = (state.currentQIndex % 10) * 10;
          document.getElementById('progress-bar').style.width = `${progress}%`;

          const container = document.getElementById('options-container');
          container.innerHTML = '';
          const letters = ['A', 'B', 'C', 'D'];

          let displayOptions = [...qData.options];
          if(state.subject !== 'Math') displayOptions.sort(() => Math.random() - 0.5);

          let correctIndex = displayOptions.indexOf(qData.ans);
          state.correctIdx = correctIndex;

          displayOptions.forEach((opt, idx) => {
              const btn = document.createElement('button');
              btn.className = `group w-full text-left relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-200 active:scale-[0.98] hover:border-zinc-600`;
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
          clearInterval(state.timer); // Stop timer

          const isCorrect = selectedIndex === state.correctIdx;
          const correctBtn = document.getElementById(`opt-${state.correctIdx}`);

          if (isCorrect) {
              state.score += 10;
              state.streak++;
              btnElement.classList.add('correct-anim', 'border-emerald-500/50');
              btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('bg-zinc-800', 'bg-emerald-500');
              btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('text-zinc-400', 'text-white');
              const icon = btnElement.querySelector(`#status-${selectedIndex}`);
              icon.setAttribute('icon', 'lucide:check-circle-2');
              icon.classList.replace('text-transparent', 'text-emerald-500');
          } else {
              state.streak = 0;
              btnElement.classList.add('wrong-anim', 'border-rose-500/50');
              btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('bg-zinc-800', 'bg-rose-500');
              btnElement.querySelector(`#icon-${selectedIndex}`).classList.replace('text-zinc-400', 'text-white');
              const icon = btnElement.querySelector(`#status-${selectedIndex}`);
              icon.setAttribute('icon', 'lucide:x-circle');
              icon.classList.replace('text-transparent', 'text-rose-500');

              if(correctBtn) {
                  correctBtn.classList.add('correct-anim');
                  correctBtn.querySelector(`#status-${state.correctIdx}`).setAttribute('icon', 'lucide:check-circle-2');
                  correctBtn.querySelector(`#status-${state.correctIdx}`).classList.replace('text-transparent', 'text-emerald-500');
              }
          }

          document.getElementById('score-display').innerText = state.score;
          document.getElementById('streak-display').innerText = state.streak;
          document.getElementById('next-btn').classList.remove('hidden');
      }

      function nextQuestion() {
          state.currentQIndex++;
          renderGameUI();
      }
    


      (function(){ const extra = ['mr','bn','ta','te','gu','kn','ml','pa','or','as','ur']; extra.forEach(code => { if(!translations[code]) { translations[code] = JSON.parse(JSON.stringify(translations.en)); } }); })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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
<span className="text-xs text-zinc-500 tracking-wide font-medium mt-0.5" id="header-context">
            ...
          </span>
</div>

<div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full transition-colors duration-300" id="timer-badge">
<iconify-icon className="text-zinc-400" icon="lucide:timer" width="14"></iconify-icon>
<span className="text-xs font-semibold text-white tabular-nums tracking-wide" id="timer-display">
            60s
          </span>
</div>
</header>

<main className="relative z-20 flex-1 flex flex-col justify-center items-center px-6 animate-fade-in text-center" id="view-welcome">
<div className="relative mb-12 animate-float">
<div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>
<div className="relative w-24 h-24 bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
<iconify-icon className="text-indigo-400" icon="lucide:brain-circuit" width="48"></iconify-icon>
</div>

<div className="absolute -top-4 -right-4 w-10 h-10 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center shadow-lg">
<iconify-icon className="text-amber-400" icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<div className="absolute -bottom-2 -left-4 w-12 h-12 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center shadow-lg">
<span className="text-lg">📚</span>
</div>
</div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-3">
          Brain Battle
        </h1>
<p className="text-sm text-zinc-400 leading-relaxed max-w-[260px] mb-10">
          Master your subjects with quick quizzes. Challenge yourself and learn
          everyday.
        </p>
<button className="w-full bg-white text-black font-medium py-4 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-2 group" onclick="startApp()">
<span>Start Learning</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<div className="mt-8 flex items-center gap-4 text-xs text-zinc-600">
<div className="flex items-center gap-1.5">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
            Free
          </div>
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
            Fun
          </div>
<div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
            Fast
          </div>
</div>
</main>

<main className="hidden relative z-20 flex-1 flex flex-col px-6 animate-fade-in overflow-hidden" id="view-language">
<div className="mt-8 mb-6 text-center flex-shrink-0 relative">
<button className="absolute top-0 left-0 text-zinc-500 hover:text-white transition-colors p-2 -ml-2" onclick="goBack('welcome')">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:languages" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">
            Select Language
          </h2>
<p className="text-xs text-zinc-500">
            Choose your preferred language to start.
          </p>
</div>
<div className="flex-1 overflow-y-auto hide-scroll pb-6 -mx-2 px-2">
<div className="flex flex-col gap-3">
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('en')">
<div className="flex items-center gap-3">
<span className="text-lg">🇺🇸</span>
<div className="text-left">
<div className="text-sm font-medium text-white">English</div>
<div className="text-[10px] text-zinc-500">Default</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('hi')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">हिंदी</div>
<div className="text-[10px] text-zinc-500">Hindi</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('hinglish')">
<div className="flex items-center gap-3">
<span className="text-lg">💬</span>
<div className="text-left">
<div className="text-sm font-medium text-white">Hinglish</div>
<div className="text-[10px] text-zinc-500">
                    Mix of Hindi &amp; English
                  </div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('mr')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">मराठी</div>
<div className="text-[10px] text-zinc-500">Marathi</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('bn')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">বাংলা</div>
<div className="text-[10px] text-zinc-500">Bengali</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('ta')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">தமிழ்</div>
<div className="text-[10px] text-zinc-500">Tamil</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('te')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">తెలుగు</div>
<div className="text-[10px] text-zinc-500">Telugu</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('gu')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">ગુજરાતી</div>
<div className="text-[10px] text-zinc-500">Gujarati</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('kn')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">ಕನ್ನಡ</div>
<div className="text-[10px] text-zinc-500">Kannada</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('ml')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">മലയാളം</div>
<div className="text-[10px] text-zinc-500">Malayalam</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('pa')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">ਪੰਜਾਬੀ</div>
<div className="text-[10px] text-zinc-500">Punjabi</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('or')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">ଓଡ଼ିଆ</div>
<div className="text-[10px] text-zinc-500">Odia</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('as')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">অসমীয়া</div>
<div className="text-[10px] text-zinc-500">Assamese</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="glass glass-btn p-4 rounded-xl flex items-center justify-between group transition-all shrink-0" onclick="setLanguage('ur')">
<div className="flex items-center gap-3">
<span className="text-lg">🇮🇳</span>
<div className="text-left">
<div className="text-sm font-medium text-white">اردو</div>
<div className="text-[10px] text-zinc-500">Urdu</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
</main>

<main className="hidden relative z-20 flex-1 flex flex-col pt-12 px-6 animate-fade-in" id="view-class">
<button className="absolute top-8 left-6 text-zinc-500 hover:text-white transition-colors" onclick="goBack('language')">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="mb-6 mt-4">
<h2 className="text-lg font-medium text-white tracking-tight mb-1" id="lbl-select-class">
            Select Class
          </h2>
<p className="text-xs text-zinc-500" id="lbl-select-class-sub">
            Choose your grade level.
          </p>
</div>
<div className="grid grid-cols-3 gap-3 overflow-y-auto hide-scroll pb-4">


</div>
</main>

<main className="hidden relative z-20 flex-1 flex flex-col pt-12 px-6 animate-fade-in" id="view-subject">
<button className="absolute top-8 left-6 text-zinc-500 hover:text-white transition-colors" onclick="goBack('class')">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="mb-6 mt-4">
<h2 className="text-lg font-medium text-white tracking-tight mb-1" id="lbl-select-subject">
            Select Subject
          </h2>
<p className="text-xs text-zinc-500" id="lbl-select-subject-sub">
            What do you want to learn today?
          </p>
</div>
<div className="flex flex-col gap-3" id="subject-grid">

</div>
</main>

<main className="hidden relative z-10 flex-1 px-6 flex flex-col animate-fade-in pt-4" id="view-battle">

<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-400 tracking-wide">
<span id="lbl-score">SCORE</span>
<span className="text-white text-lg ml-1" id="score-display">0</span>
</span>
<button className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 rounded hover:text-white transition-colors" onclick="endGame()">
<iconify-icon className="inline mb-0.5" icon="lucide:log-out" width="10"></iconify-icon>
            EXIT
          </button>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full mb-8 overflow-hidden">
<div className="h-full w-[0%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" id="progress-bar"></div>
</div>

<div className="relative glass-highlight p-6 rounded-2xl mb-6 shadow-xl min-h-[140px] flex items-center justify-center border-t border-white/10">
<h2 className="text-lg font-medium text-white leading-relaxed text-center tracking-tight" id="question-text">
            Loading...
          </h2>

<div className="hidden absolute top-0 right-0 -mt-3 -mr-2 bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg" id="timeout-badge">
            TIME UP
          </div>
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
<div className="text-[10px] text-zinc-500 uppercase tracking-wider" id="nav-class-info">
              Class
            </div>
<div className="text-xs text-white font-medium" id="nav-subject-info">
              Subject
            </div>
</div>
<div className="h-8 w-px bg-zinc-800 mx-4"></div>
<div className="flex-1 text-right">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">
              Streak
            </div>
<div className="text-xs text-orange-400 font-medium flex items-center justify-end gap-1">
<iconify-icon icon="lucide:flame" width="12"></iconify-icon>
<span id="streak-display">0</span>
</div>
</div>
</div>
</nav>
</div>




    </>
  );
}
