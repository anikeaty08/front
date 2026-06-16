import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const qs = (s) => document.querySelector(s);
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRe   = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

    /* SURVEY QUESTIONS (new) */
    const survey = [
      { id: 'name',   q: 'What’s your name?',                      type: 'text', placeholder: 'Jane Doe',       validate: v => v.trim().length },
      { id: 'social', q: 'Please share the link to your main social profile (YouTube, X, LinkedIn, TikTok, etc.)',
                       type: 'text', placeholder: 'https://…',      validate: v => urlRe.test(v.trim()) },
      { id: 'tools',  q: 'What video editing tools do you currently use?',
                       type: 'text', placeholder: 'Premiere, Final Cut…', validate: v => v.trim().length }
    ];
    let currentQ = 0;
    const answers = {};

    /* EMAIL STEP */
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

    /* BUILD QUESTION */
    function buildQuestion() {
      const wrap = qs('#questionWrapper');
      wrap.innerHTML = '';
      const item = survey[currentQ];

      const h = document.createElement('h2');
      h.className = 'text-xl tracking-tight font-semibold';
      h.textContent = item.q;
      wrap.appendChild(h);

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = item.placeholder;
      input.value = answers[item.id] || '';
      input.className = 'w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-[#D1FF05]';
      input.oninput = e => answers[item.id] = e.target.value;
      wrap.appendChild(input);

      /* Progress */
      qs('#progressBar').style.width = `${(currentQ) / survey.length * 100}%`;

      /* Nav states */
      qs('#prevQ').disabled = currentQ === 0;
      qs('#nextQ').textContent = currentQ === survey.length - 1 ? 'Finish' : 'Next';
    }

    /* NAVIGATION HANDLERS */
    qs('#prevQ').onclick = () => { currentQ--; buildQuestion(); };
    qs('#nextQ').onclick = () => {
      const item = survey[currentQ];
      const val  = (answers[item.id] || '').trim();
      if (!item.validate(val)) {
        // simple feedback
        qs('#questionWrapper input').classList.add('border-red-500');
        qs('#questionWrapper input').focus();
        return;
      }
      if (currentQ < survey.length - 1) { currentQ++; buildQuestion(); }
      else finalizeSignup();
    };

    /* SHOW SURVEY */
    function showSurvey() {
      qs('#stepEmail').classList.add('hidden');
      qs('#stepSurvey').classList.remove('hidden');
      buildQuestion();
    }

    /* COMPLETE SIGNUP */
    function finalizeSignup() {
      localStorage.setItem('betaSurvey', JSON.stringify(answers));
      showWaitingRoom();
    }

    /* WAITING ROOM (existing) */
    function showWaitingRoom() {
      qs('#stepEmail').classList.add('hidden');
      qs('#stepSurvey').classList.add('hidden');
      qs('#waitingRoom').classList.remove('hidden');

      const email = localStorage.getItem('betaEmail');
      qs('#signedEmail').textContent = email;

      const myCode = email.split('@')[0].replace(/[^a-z0-9]/gi, '').slice(0, 6);
      const refUrl = `${location.origin}${location.pathname}?ref=${myCode}`;
      qs('#refLink').value = refUrl;

      buildLeaderboard(myCode);
    }

    /* LEADERBOARD (unchanged) */
    function buildLeaderboard(myCode) {
      const mock = [
        { name: 'alex',   count: 24 },
        { name: 'jordan', count: 18 },
        { name: myCode,   count: 9 },
        { name: 'sam',    count: 7 },
        { name: 'lee',    count: 4 }
      ];
      const lbList = qs('#lbList');
      lbList.innerHTML = '';
      mock.forEach((p, i) => lbList.insertAdjacentHTML('beforeend',
        `<div><span class="text-neutral-400 mr-2">#${i + 1}</span>${p.name} <span class="text-neutral-500">– ${p.count}</span></div>`));

      new Chart(qs('#lbChart'), {
        type: 'bar',
        data: { labels: mock.map(p => p.name),
          datasets: [{ data: mock.map(p => p.count), backgroundColor: ['#D1FF05'], borderRadius: 4 }] },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
      });
    }

    /* COPY REF LINK */
    qs('#copyLink').onclick = () => {
      navigator.clipboard.writeText(qs('#refLink').value);
      qs('#copyLink').textContent = 'Copied!';
      setTimeout(() => qs('#copyLink').textContent = 'Copy', 1500);
    };

    /* STORY SUBMIT (unchanged) */
    qs('#storyBtn').onclick = () => {
      const txt = qs('#storyInput').value.trim();
      if (!txt) return;
      qs('#storyInput').value = '';
      qs('#storyBtn').textContent = 'Thanks!';
      setTimeout(() => qs('#storyBtn').textContent = 'Send', 1500);
    };

    /* AUTO-REDIRECT */
    if (localStorage.getItem('betaEmail')) showWaitingRoom();

    lucide.createIcons({ strokeWidth: 1.5 });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-lg px-6 py-10 space-y-8" id="app">

<section className="space-y-6" id="stepEmail">
<h1 className="text-3xl tracking-tight font-semibold">What’s the best email to reach you?</h1>
<div className="flex items-center gap-3 border border-neutral-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#D1FF05] transition">
<i className="w-5 h-5 text-neutral-500" data-lucide="mail"></i>
<input className="flex-1 bg-transparent outline-none placeholder-neutral-600" id="emailInput" placeholder="you@example.com" type="email"/>
</div>
<button className="w-full bg-[#D1FF05] text-neutral-900 hover:bg-[#c4e604] active:bg-[#b9da04] transition rounded-full py-3 font-medium" id="joinBtn">
        Continue
      </button>
<button className="mx-auto block text-sm text-neutral-400 hover:text-neutral-200 underline" id="alreadyBtn">
        Already joined? Click here to check status
      </button>
<p className="text-xs text-neutral-500 text-center pt-4">By continuing, you agree to our <a className="underline hover:text-neutral-200" href="#">Terms of Use</a> and <a className="underline hover:text-neutral-200" href="#">Privacy Policy</a>.</p>
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
<p className="text-xs text-neutral-500 text-center">By continuing, you agree to our <a className="underline hover:text-neutral-200" href="#">Terms of Use</a> and <a className="underline hover:text-neutral-200" href="#">Privacy Policy</a>.</p>
</section>

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
