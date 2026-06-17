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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



const questions = [
  { id:'city', type:'text', q:'What city are you in?', placeholder:'e.g. Melbourne, London, Austin...' },
  { id:'work', type:'choice', q:'What kind of work do you do?', options:['Creative','Technical','Caring','Structured','Hands-on','In between'] },
  { id:'hours', type:'choice', q:'How many hours a week do you work?', options:['Under 30','30–40','40–50','50+'] },
  { id:'future', type:'choice', q:'Where do you see yourself heading?', options:['Own business','Deep expert','Freelance mix','Leading people','Total change'] },
  { id:'caffeine', type:'choice', q:'What\'s your caffeine go-to?', options:['Coffee','Energy drink','Tea','Matcha','Water','Whatever\'s closest'] },
  { id:'vessel', type:'choice', q:'What are you drinking out of?', options:['Mug','Can','Carton','Glass','Keep cup','Just a cup'] },
  { id:'energy', type:'choice', q:'If someone hands you an energy drink...', options:['Red Bull','Monster','Celsius','Rockstar','Ghost or Prime','Would pass'] },
  { id:'starbucks', type:'text', q:'Do you have a Starbucks order?', placeholder:'Type it here or leave blank', optional:true },
  { id:'personality', type:'choice', q:'Which one sounds most like you?', options:['Same order for years','Always trying new things','Just needs to work fast','Loves the ritual','Quality over everything'] },
  { id:'morning', type:'choice', q:'What\'s your morning like?', options:['Slow and intentional','Up and straight into it','Chaotic but it works','Depends entirely on the day'] },
  { id:'music', type:'choice', q:'Music while working?', options:['Lo-fi or ambient','Upbeat pop or dance','Podcasts or nothing','Whatever the algorithm gives me','Silence only'] },
  { id:'character', type:'text', q:'What TV or movie character are you (or want to be)?', placeholder:'e.g. Fleabag, Tony Stark, Leslie Knope...' },
  { id:'snack', type:'choice', q:'Late-night snack?', options:['Something sweet','Something salty','Whatever\'s in the fridge','I don\'t really snack','Full second dinner honestly'] },
  { id:'recharge', type:'choice', q:'After a draining day, how do you recharge?', options:['Alone time and quiet','Moving my body','Social — I need people','Screens and switching off','Getting outside'] },
];

const TYPES = {
  espresso: { name: 'THE ESPRESSO', order: 'Double shot, straight', emoji: '☕', tagline: 'Small, powerful, no-nonsense. You know what you want and you get it done.' },
  oat_flat_white: { name: 'THE OAT FLAT WHITE', order: 'Oat milk flat white', emoji: '🥛', tagline: 'Quietly confident with taste. Elevated without trying to prove it.' },
  iced_caramel: { name: 'THE ICED CARAMEL MACCHIATO', order: 'Iced, extra caramel, oat milk', emoji: '🧊', tagline: 'The drink is the event. Sweet, social, makes everything feel like a moment.' },
  cold_brew: { name: 'THE COLD BREW', order: 'Black or splash of oat', emoji: '🫙', tagline: 'Low maintenance, high output. Figured out what works and sticks to it.' },
  matcha: { name: 'THE MATCHA LATTE', order: 'Oat milk, no sweetener', emoji: '🍵', tagline: 'Calmer than they look, more caffeinated than anyone suspects. Got there first.' },
  dirty_chai: { name: 'THE DIRTY CHAI', order: 'Chai latte + espresso shot', emoji: '🫖', tagline: 'Contains multitudes. One foot in structure, one in chaos. Always brings something unexpected.' }
};

let answers = {};
let currentQ = -1;

function startQuiz() {
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('progressWrap').style.display = 'block';
  currentQ = 0;
  renderQuestion(0);
}

function renderQuestion(idx) {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';
  const q = questions[idx];
  const card = document.createElement('div');
  card.className = 'question-card active';

  let inner = `<h2>${q.q}${q.optional ? '<span class="optional-tag">optional</span>' : ''}</h2>
    <p class="subtitle">Question ${idx + 1} of ${questions.length}</p>`;

  if (q.type === 'text') {
    inner += `<input class="text-input" type="text" id="input_${q.id}" placeholder="${q.placeholder}" value="${answers[q.id] || ''}" />`;
  } else {
    inner += '<div class="options">';
    q.options.forEach(opt => {
      const sel = answers[q.id] === opt ? ' selected' : '';
      inner += `<button class="option-btn${sel}" onclick="selectOption('${q.id}','${opt.replace(/'/g,"\\'")}',this)">${opt}</button>`;
    });
    inner += '</div>';
  }

  inner += `<div class="nav-row">`;
  if (idx > 0) inner += `<button class="nav-btn back" onclick="goBack()">Back</button>`;
  const isLast = idx === questions.length - 1;
  const label = isLast ? 'See my result' : 'Next';
  inner += `<button class="nav-btn next" id="nextBtn" onclick="${isLast ? 'showResult()' : 'goNext()'}">${label}</button>`;
  inner += `</div>`;

  card.innerHTML = inner;
  container.appendChild(card);

  if (q.type === 'text') {
    const inp = document.getElementById('input_' + q.id);
    inp.addEventListener('input', () => { answers[q.id] = inp.value; updateNext(); });
    inp.focus();
  }
  updateProgress();
  updateNext();
}

function selectOption(qid, val, btn) {
  answers[qid] = val;
  btn.parentNode.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  updateNext();
  setTimeout(() => { if (currentQ < questions.length - 1) goNext(); }, 350);
}

function updateNext() {
  const q = questions[currentQ];
  const btn = document.getElementById('nextBtn');
  if (!btn) return;
  if (q.optional) { btn.disabled = false; return; }
  btn.disabled = !answers[q.id] || answers[q.id].trim() === '';
}

function goNext() {
  const q = questions[currentQ];
  if (q.type === 'text') answers[q.id] = (document.getElementById('input_' + q.id)?.value || '').trim();
  if (!q.optional && (!answers[q.id] || answers[q.id].trim() === '')) return;
  currentQ++;
  renderQuestion(currentQ);
}

function goBack() {
  const q = questions[currentQ];
  if (q.type === 'text') answers[q.id] = (document.getElementById('input_' + q.id)?.value || '').trim();
  currentQ--;
  renderQuestion(currentQ);
}

function updateProgress() {
  const pct = ((currentQ + 1) / questions.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${currentQ + 1} / ${questions.length}`;
}

function score() {
  const s = { espresso:0, oat_flat_white:0, iced_caramel:0, cold_brew:0, matcha:0, dirty_chai:0 };
  const W = 2;

  const work = answers.work;
  if (work === 'Technical')  { s.espresso += W; }
  if (work === 'Creative')   { s.oat_flat_white += W; }
  if (work === 'Caring')     { s.iced_caramel += W; s.dirty_chai += 1; }
  if (work === 'Structured') { s.dirty_chai += W; }
  if (work === 'Hands-on')   { s.cold_brew += W; }
  if (work === 'In between') { s.oat_flat_white += 1; s.dirty_chai += 1; }

  const hrs = answers.hours;
  if (hrs === '50+')      { s.espresso += 1; }
  if (hrs === '30–40')    { s.oat_flat_white += 1; }
  if (hrs === '40–50')    { s.dirty_chai += 1; }
  if (hrs === 'Under 30') { s.matcha += 1; }

  const fut = answers.future;
  if (fut === 'Own business')   { s.espresso += 1; s.oat_flat_white += 1; }
  if (fut === 'Deep expert')    { s.espresso += 1; }
  if (fut === 'Freelance mix')  { s.cold_brew += 1; }
  if (fut === 'Leading people') { s.iced_caramel += 1; }
  if (fut === 'Total change')   { s.matcha += 1; }

  const caf = answers.caffeine;
  if (caf === 'Coffee')             { s.espresso += W; s.oat_flat_white += 1; }
  if (caf === 'Energy drink')       { s.espresso += 1; s.cold_brew += 1; }
  if (caf === 'Tea')                { s.dirty_chai += W; }
  if (caf === 'Matcha')             { s.matcha += W; }
  if (caf === 'Water')              { s.matcha += 1; }
  if (caf === "Whatever's closest") { s.cold_brew += 1; s.dirty_chai += 1; }

  const ves = answers.vessel;
  if (ves === 'Can')       { s.espresso += 1; s.cold_brew += 1; }
  if (ves === 'Keep cup')  { s.oat_flat_white += 1; }
  if (ves === 'Glass')     { s.oat_flat_white += 1; s.matcha += 1; }
  if (ves === 'Mug')       { s.iced_caramel += 1; s.dirty_chai += 1; }
  if (ves === 'Carton')    { s.cold_brew += 1; }
  if (ves === 'Just a cup'){ s.iced_caramel += 1; }

  const eng = answers.energy;
  if (eng === 'Red Bull')          { s.espresso += 1; }
  if (eng === 'Monster')           { s.espresso += 1; s.cold_brew += 1; }
  if (eng === 'Celsius')           { s.oat_flat_white += 1; s.matcha += 1; }
  if (eng === 'Rockstar')          { s.cold_brew += 1; }
  if (eng === 'Ghost or Prime')    { s.iced_caramel += 1; }
  if (eng === 'Would pass')        { s.matcha += 1; s.dirty_chai += 1; }

  if (answers.starbucks && answers.starbucks.trim() !== '') { s.iced_caramel += 1; }

  const pers = answers.personality;
  if (pers === 'Same order for years')      { s.cold_brew += W; }
  if (pers === 'Always trying new things')  { s.matcha += W; }
  if (pers === 'Just needs to work fast')   { s.espresso += W; }
  if (pers === 'Loves the ritual')          { s.iced_caramel += W; s.dirty_chai += 1; }
  if (pers === 'Quality over everything')   { s.oat_flat_white += W; }

  const morn = answers.morning;
  if (morn === 'Slow and intentional')         { s.oat_flat_white += 1; s.matcha += 1; }
  if (morn === 'Up and straight into it')      { s.espresso += 1; s.cold_brew += 1; }
  if (morn === 'Chaotic but it works')         { s.iced_caramel += 1; }
  if (morn === 'Depends entirely on the day')  { s.dirty_chai += 1; }

  const mus = answers.music;
  if (mus === 'Lo-fi or ambient')                  { s.oat_flat_white += 1; s.matcha += 1; }
  if (mus === 'Upbeat pop or dance')               { s.iced_caramel += 1; }
  if (mus === 'Podcasts or nothing')               { s.espresso += 1; s.dirty_chai += 1; }
  if (mus === 'Whatever the algorithm gives me')   { s.cold_brew += 1; }
  if (mus === 'Silence only')                      { s.espresso += 1; }

  const snk = answers.snack;
  if (snk === 'Something sweet')              { s.oat_flat_white += 1; s.iced_caramel += 1; }
  if (snk === 'Something salty')              { s.espresso += 1; }
  if (snk === "Whatever's in the fridge")     { s.cold_brew += 1; }
  if (snk === "I don't really snack")         { s.matcha += 1; }
  if (snk === 'Full second dinner honestly')  { s.dirty_chai += 1; }

  const rech = answers.recharge;
  if (rech === 'Alone time and quiet')     { s.espresso += 1; }
  if (rech === 'Moving my body')           { s.cold_brew += 1; }
  if (rech === 'Social — I need people')   { s.iced_caramel += 1; }
  if (rech === 'Screens and switching off'){ s.dirty_chai += 1; }
  if (rech === 'Getting outside')          { s.oat_flat_white += 1; s.matcha += 1; }

  const char = (answers.character || '').toLowerCase();
  const charNudges = {
    espresso: ['tony stark','walter white','harvey specter','don draper','thomas shelby','batman','michael corleone','miranda priestly','annalise keating','sherlock','house'],
    oat_flat_white: ['fleabag','phoebe waller','elizabeth bennet','amelie','jo march','luna lovegood','claude','monet','bob ross','steve zissou'],
    iced_caramel: ['leslie knope','jess day','ted lasso','elle woods','moira rose','rachel green','jake peralta','troy barnes','buddy the elf'],
    cold_brew: ['ron swanson','rust cohle','geralt','john wick','clint eastwood','mike ehrmantraut','beth harmon','furiosa','wolverine','han solo'],
    matcha: ['phoebe buffay','aang','totoro','keanu','amelie','forrest gump','moonlight','lady bird','mabel pines'],
    dirty_chai: ['villanelle','loki','captain jack sparrow','jessica day','doctor who','the doctor','indiana jones','hermione','mulder','scully','fox mulder','dana scully']
  };
  for (const [type, chars] of Object.entries(charNudges)) {
    if (chars.some(c => char.includes(c))) { s[type] += 1; }
  }

  const sorted = Object.entries(s).sort((a,b) => b[1] - a[1]);
  return { winner: sorted[0][0], runnerUp: sorted[1][0], scores: s };
}

function generateResult(winner, runnerUp) {
  const city = answers.city || 'your city';
  const character = answers.character || '';
  const t = TYPES[winner];
  const r = TYPES[runnerUp];

  const charMention = character ? ` And naming ${character} as your alter ego? Yeah, that tracks.` : '';

  const personalLines = {
    espresso: [
      `You're running ${city} on double shots and sheer willpower — and honestly, it's working.${charMention}`,
      `While everyone else is still deciding their order, you've already had two and sent four emails.`,
    ],
    oat_flat_white: [
      `Somewhere in ${city}, you're curating a life that looks effortless but is actually very considered.${charMention}`,
      `You've never once Googled "how to have taste" — you just quietly have it.`,
    ],
    iced_caramel: [
      `In ${city}, you're the one turning a coffee run into a social event — and everyone's better for it.${charMention}`,
      `Your order takes 45 seconds to say out loud and you wouldn't have it any other way.`,
    ],
    cold_brew: [
      `You've been ordering the same thing in ${city} since before it was cool, and you'll keep going long after.${charMention}`,
      `No fuss, no frills — just steady, reliable output. The people around you know exactly what they're getting.`,
    ],
    matcha: [
      `You arrived in ${city} with a carry-on and a perspective that everyone else will catch up to in about two years.${charMention}`,
      `Calm on the surface, quietly buzzing underneath. You've optimised without anyone noticing.`,
    ],
    dirty_chai: [
      `In ${city}, you're the person who keeps surprising people — even the ones who think they've got you figured out.${charMention}`,
      `Half structure, half chaos, fully caffeinated. You contain multitudes and at least two drink categories.`,
    ],
  };

  const runnerLines = {
    espresso: `You've got more Espresso energy than you let on — focused, sharp, no time for nonsense.`,
    oat_flat_white: `There's an Oat Flat White side to you — quieter, tasteful, a little more intentional than people expect.`,
    iced_caramel: `Your Iced Caramel Macchiato side shows up when you're in full social mode — sweet, warm, a little extra.`,
    cold_brew: `Your Cold Brew streak runs deep — steady, unfussy, and reliably good at what you do.`,
    matcha: `Your inner Matcha Latte is always a step ahead — calmer and more deliberate than the outside suggests.`,
    dirty_chai: `Your Dirty Chai side means you'll always have one foot in something unexpected.`,
  };

  const workRef = answers.work ? answers.work.toLowerCase() + ' work' : 'the way you work';

  const closingLines = {
    espresso: `Your coffee is how you show up to ${workRef}: strong, direct, and already three steps ahead.`,
    oat_flat_white: `Your coffee is how you show up to ${workRef}: elevated, intentional, and never overdone.`,
    iced_caramel: `Your coffee is how you show up to life: a little sweet, a lot of warmth, and always worth the wait.`,
    cold_brew: `Your coffee is how you show up to ${workRef}: reliable, no-maintenance, quietly getting it done.`,
    matcha: `Your coffee is how you show up to life: calm, considered, and way more powerful than it looks.`,
    dirty_chai: `Your coffee is how you show up to everything: layered, surprising, and impossible to put in one box.`,
  };

  return {
    lines: personalLines[winner],
    runner: `<strong>Runner-up: ${r.name}</strong> — ${runnerLines[runnerUp]}`,
    closing: closingLines[winner]
  };
}

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwru60zkqVvILIdGgat5Q67pncd86NtZ5BZ5lBzbPA7APbW14Fy32NNIt60QgHu6XrJVQ/exec';

function submitToSheet(resultType, runnerUpType) {
  const payload = {
    timestamp: new Date().toISOString(),
    city: answers.city || '',
    work: answers.work || '',
    hours: answers.hours || '',
    future: answers.future || '',
    caffeine: answers.caffeine || '',
    vessel: answers.vessel || '',
    energy: answers.energy || '',
    starbucks: answers.starbucks || '',
    personality: answers.personality || '',
    morning: answers.morning || '',
    music: answers.music || '',
    character: answers.character || '',
    snack: answers.snack || '',
    recharge: answers.recharge || '',
    result: resultType,
    runner_up: runnerUpType,
  };

  fetch(GOOGLE_SHEET_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

function showResult() {
  const q = questions[currentQ];
  if (q.type === 'text') answers[q.id] = (document.getElementById('input_' + q.id)?.value || '').trim();

  const { winner, runnerUp } = score();
  const t = TYPES[winner];
  const r = TYPES[runnerUp];
  const copy = generateResult(winner, runnerUp);

  submitToSheet(t.name, r.name);

  document.getElementById('questionsContainer').innerHTML = '';
  document.getElementById('progressWrap').style.display = 'none';
  document.getElementById('quizHeader').style.display = 'none';

  document.getElementById('resultEmoji').textContent = t.emoji;
  document.getElementById('resultType').textContent = `YOU ARE: ${t.name}`;
  document.getElementById('resultOrder').textContent = `Your order: ${t.order}`;
  document.getElementById('resultBody').innerHTML = copy.lines.map(l => `<p>${l}</p>`).join('');
  document.getElementById('runnerUp').innerHTML = copy.runner;
  document.getElementById('closingLine').textContent = copy.closing;
  document.getElementById('resultCard').classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retake() {
  answers = {};
  currentQ = -1;
  document.getElementById('resultCard').classList.remove('active');
  document.getElementById('quizHeader').style.display = '';
  document.getElementById('progressWrap').style.display = 'none';
  document.getElementById('startScreen').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
<div className="quiz-container">
<div className="header" id="quizHeader">
<h1>The Brew Profile</h1>
<p>14 questions. One coffee truth. Let's find your order.</p>
</div>
<div className="progress-wrap" id="progressWrap" style={{display: 'none'}}>
<div className="progress-bar"><div className="progress-fill" id="progressFill"></div></div>
<div className="progress-label" id="progressLabel"></div>
</div>
<div className="question-card active" id="startScreen" style={{textAlign: 'center', paddingTop: '20px'}}>
<p style={{fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '28px'}}>Answer honestly — your coffee doesn't judge.</p>
<button className="nav-btn next" onclick="startQuiz()">Let's go</button>
</div>
<div id="questionsContainer"></div>
<div className="result-card" id="resultCard">
<div className="result-emoji" id="resultEmoji"></div>
<div className="result-type" id="resultType"></div>
<div className="result-order" id="resultOrder"></div>
<div className="result-body" id="resultBody"></div>
<div className="runner-up" id="runnerUp"></div>
<div className="closing-line" id="closingLine"></div>
<button className="retake-btn" onclick="retake()">Retake the quiz</button>
</div>
</div>


    </>
  );
}
