import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Helpers
    const qs = (sel) => document.querySelector(sel);
    const qsa = (sel) => [...document.querySelectorAll(sel)];
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /* — STATE — */
    const survey = [
      {
        id: 'contentType',
        q: 'What type of content do you regularly create or want to create?',
        type: 'text',
        placeholder: 'e.g. tutorials, product reviews…'
      },
      {
        id: 'videoMethod',
        q: 'How do you currently make videos?',
        type: 'multi',
        options: ['Phone recording', 'DSLR / mirrorless', 'Screen-record', 'Hiring freelancers', 'I don’t']
      },
      {
        id: 'portfolio',
        q: 'Do you have a website, content channel, or portfolio to share?',
        type: 'text',
        placeholder: 'URL (optional)'
      },
      {
        id: 'challenges',
        q: 'What are your biggest challenges in video creation?',
        type: 'text',
        placeholder: 'Time, budget, editing…'
      },
      {
        id: 'desiredVideo',
        q: 'What kind of video would you most like to create with AI?',
        type: 'text',
        placeholder: 'Short social clip, explainer…'
      },
      {
        id: 'communities',
        q: 'Are you in any creator communities?',
        type: 'text',
        placeholder: 'Discords, forums…'
      }
    ];
    let currentQ = 0;
    const answers = {};
    
    /* — STEP 0 — */
    qs('#joinBtn').onclick = () => {
      const email = qs('#emailInput').value.trim();
      if (!emailRe.test(email)) {
        qs('#emailInput').focus();
        return;
      }
      localStorage.setItem('betaEmail', email);
      showSurvey();
    };

    qs('#alreadyBtn').onclick = () => showWaitingRoom();

    function showSurvey() {
      qs('#stepEmail').classList.add('hidden');
      qs('#stepSurvey').classList.remove('hidden');
      buildQuestion();
    }

    /* — SURVEY FUNCTIONS — */
    function buildQuestion() {
      const wrap = qs('#questionWrapper');
      wrap.innerHTML = '';
      const item = survey[currentQ];
      // Question title
      const h = document.createElement('h2');
      h.className = 'text-xl tracking-tight font-semibold';
      h.textContent = item.q;
      wrap.appendChild(h);

      if (item.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = item.placeholder;
        input.value = answers[item.id] || '';
        input.className = 'w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-[#D1FF05]';
        input.oninput = (e) => (answers[item.id] = e.target.value);
        wrap.appendChild(input);
      }

      if (item.type === 'multi') {
        const group = document.createElement('div');
        group.className = 'grid grid-cols-2 gap-3';
        item.options.forEach(opt => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.textContent = opt;
          btn.dataset.val = opt;
          btn.className = 'border border-neutral-700 rounded-lg px-3 py-2 text-sm hover:border-[#D1FF05] transition';
          if ((answers[item.id] || []).includes(opt)) btn.classList.add('bg-[#D1FF05]/20', 'border-[#D1FF05]');
          btn.onclick = () => {
            answers[item.id] = answers[item.id] || [];
            const arr = answers[item.id];
            if (arr.includes(opt)) arr.splice(arr.indexOf(opt), 1);
            else arr.push(opt);
            btn.classList.toggle('bg-[#D1FF05]/20');
            btn.classList.toggle('border-[#D1FF05]');
          };
          group.appendChild(btn);
        });
        wrap.appendChild(group);
      }

      // Progress bar
      const progress = ((currentQ) / survey.length) * 100;
      qs('#progressBar').style.width = `${progress}%`;

      // Prev/Next states
      qs('#prevQ').disabled = currentQ === 0;
      qs('#nextQ').textContent = currentQ === survey.length - 1 ? 'Finish' : 'Next';
    }

    qs('#prevQ').onclick = () => {
      if (currentQ > 0) currentQ--;
      buildQuestion();
    };

    qs('#nextQ').onclick = () => {
      const item = survey[currentQ];
      // quick validation for text field (not mandatory)
      if (item.type === 'text' && !(answers[item.id] || '').trim()) {
        currentQ++;
      } else {
        if (currentQ < survey.length - 1) currentQ++;
        else return finalizeSignup();
      }
      buildQuestion();
    };

    function finalizeSignup() {
      localStorage.setItem('betaSurvey', JSON.stringify(answers));
      showWaitingRoom();
    }

    /* — WAITING ROOM — */
    function showWaitingRoom() {
      qs('#stepPanel').classList.add('hidden');
      qs('#waitingRoom').classList.remove('hidden');

      const email = localStorage.getItem('betaEmail') || 'your@email.com';
      qs('#signedEmail').textContent = email;
      const myCode = email.split('@')[0].replace(/[^a-z0-9]/gi, '').slice(0, 6);
      const refUrl = `${location.origin}${location.pathname}?ref=${myCode}`;
      qs('#refLink').value = refUrl;

      buildLeaderboard(myCode);
    }

    /* — COPY REF LINK — */
    qs('#copyLink').onclick = () => {
      navigator.clipboard.writeText(qs('#refLink').value);
      qs('#copyLink').textContent = 'Copied!';
      setTimeout(() => (qs('#copyLink').textContent = 'Copy'), 1500);
    };

    /* — LEADERBOARD (mock) — */
    function buildLeaderboard(myCode) {
      const mock = [
        { name: 'alex', count: 24 },
        { name: 'jordan', count: 18 },
        { name: myCode, count: 9 },
        { name: 'sam', count: 7 },
        { name: 'lee', count: 4 }
      ];
      // List
      const lbList = qs('#lbList');
      lbList.innerHTML = '';
      mock.forEach((p, i) => {
        const div = document.createElement('div');
        div.innerHTML = `<span class="text-neutral-400 mr-2">#${i + 1}</span>${p.name} <span class="text-neutral-500">– ${p.count}</span>`;
        lbList.appendChild(div);
      });
      // Chart
      const ctx = qs('#lbChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: mock.map(p => p.name),
          datasets: [{
            data: mock.map(p => p.count),
            backgroundColor: ['#D1FF05'],
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { x: { display: false }, y: { display: false } }
        }
      });
    }

    /* — STORY SUBMIT — */
    qs('#storyBtn').onclick = () => {
      const txt = qs('#storyInput').value.trim();
      if (!txt) return;
      qs('#storyInput').value = '';
      qs('#storyBtn').textContent = 'Thanks!';
      setTimeout(() => (qs('#storyBtn').textContent = 'Send'), 1500);
    };

    // Auto-redirect if already signed up
    if (localStorage.getItem('betaEmail')) showWaitingRoom();

    // Activate icons
    lucide.createIcons({ strokeWidth: 1.5 });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-lg px-6 py-10 space-y-8" id="app">

<div className="space-y-8" id="stepPanel">

<section className="space-y-6" id="stepEmail">
<h1 className="text-3xl tracking-tight font-semibold">Join our private beta</h1>
<p className="text-neutral-400">Get early access, shape the product, earn referral perks.</p>
<div className="flex items-center gap-3 border border-neutral-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#D1FF05] transition">
<i className="w-5 h-5 text-neutral-500" data-lucide="mail"></i>
<input className="flex-1 bg-transparent outline-none placeholder-neutral-600" id="emailInput" placeholder="you@example.com" type="email"/>
</div>
<button className="w-full bg-[#D1FF05] text-neutral-900 hover:bg-[#c4e604] active:bg-[#b9da04] transition rounded-full py-3 font-medium" id="joinBtn">
          Join the waitlist
        </button>
<button className="mx-auto block text-sm text-neutral-400 hover:text-neutral-200 underline" id="alreadyBtn">
          Already signed up? Check status
        </button>
</section>

<section className="hidden space-y-8" id="stepSurvey">

<div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
<div className="bg-[#D1FF05] h-2 transition-all duration-300" id="progressBar" style={{width: '0%'}}></div>
</div>

<div className="space-y-6" id="questionWrapper"></div>

<div className="flex justify-between items-center">
<button className="flex items-center gap-1 text-neutral-400 hover:text-neutral-200 disabled:opacity-20" id="prevQ">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
            Back
          </button>
<button className="bg-[#D1FF05] text-neutral-900 hover:bg-[#c4e604] active:bg-[#b9da04] transition rounded-full px-5 py-2 font-medium" id="nextQ">
            Next
          </button>
</div>
</section>
</div>

<section className="hidden space-y-10" id="waitingRoom">
<div className="space-y-3">
<h2 className="text-2xl tracking-tight font-semibold">You’re on the list 🎉</h2>
<p className="text-neutral-400 text-sm" id="signedEmail"></p>
</div>

<div className="space-y-3">
<h3 className="font-semibold">Your referral link</h3>
<div className="flex items-center gap-3 border border-neutral-700 rounded-lg px-4 py-3">
<input className="flex-1 bg-transparent text-sm outline-none" id="refLink" readonly=""/>
<button className="text-xs font-medium bg-neutral-800 hover:bg-neutral-700 px-4 py-1.5 rounded-full transition" id="copyLink">
            Copy
          </button>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="font-semibold">Top referrers</h3>
<canvas className="max-w-[120px] sm:max-w-[300px]" id="lbChart"></canvas>
</div>
<div className="space-y-1 text-sm" id="lbList"></div>
</div>

<div className="space-y-3">
<h3 className="font-semibold">Submit a story idea</h3>
<textarea className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 placeholder-neutral-500 text-sm outline-none focus:ring-2 focus:ring-[#D1FF05] resize-none" id="storyInput" placeholder="Tell us what you'd love to create…" rows="3"></textarea>
<button className="bg-[#D1FF05] text-neutral-900 hover:bg-[#c4e604] active:bg-[#b9da04] transition rounded-full px-5 py-2 font-medium" id="storyBtn">
          Send
        </button>
</div>

<div className="flex gap-4 pt-4 border-t border-neutral-800">
<a className="hover:text-neutral-300" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-neutral-300" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-neutral-300" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</section>
</div>



    </>
  );
}
