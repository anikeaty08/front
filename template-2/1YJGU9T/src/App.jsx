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



const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>e.isIntersecting&&e.target.classList.replace('fade-start','fade-end'))
},{threshold:.2});
document.querySelectorAll('.fade-start').forEach(el=>io.observe(el));



document.querySelectorAll('.nav-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>document.querySelector('aside').classList.toggle('-translate-x-full'))
});



const btns=document.querySelectorAll('.nav-btn');
const views=document.querySelectorAll('main > section');
btns.forEach(b=>b.addEventListener('click',()=>{views.forEach(v=>v.id===b.dataset.view?v.classList.remove('hidden'):v.classList.add('hidden'));document.getElementById('viewTitle').textContent=b.textContent.trim()}));



['dropZone','dropZone2'].forEach(id=>{
  const zone=document.getElementById(id);
  ['dragenter','dragover'].forEach(e=>zone.addEventListener(e,ev=>{ev.preventDefault();zone.classList.add('drag-hover')}))
  ;['dragleave','drop'].forEach(e=>zone.addEventListener(e,ev=>{ev.preventDefault();zone.classList.remove('drag-hover')}))
  zone.addEventListener('drop',ev=>{ev.preventDefault();[...ev.dataTransfer.files].forEach(file=>addFile(file.name))})
});
function addFile(name){
  const li=document.createElement('li');
  li.textContent=`${name} – processing…`;
  document.getElementById('uploadQueue').appendChild(li)
}



document.getElementById('chatForm').addEventListener('submit',e=>{
  e.preventDefault();
  const input=document.getElementById('chatInput');
  const q=input.value.trim(); if(!q)return;
  appendMsg('user',q); input.value=''; setTimeout(()=>appendMsg('ai','Here’s an explanation with sources…'),800)
});
function appendMsg(role,text){
  const wrap=document.createElement('div');
  wrap.className='flex gap-3 '+(role==='user'?'justify-end':'');
  wrap.innerHTML=`${role==='ai'?'<i data-lucide="bot" class="w-5 h-5 mt-1"></i>':''}
    <div class="max-w-[70%] p-3 rounded-lg ${role==='user'?'bg-blue-600':'bg-zinc-800'}">${text}</div>`;
  document.getElementById('chatHistory').appendChild(wrap); lucide.createIcons();wrap.scrollIntoView({behavior:'smooth'})
}



const xpCtx=document.getElementById('xpChart').getContext('2d');
new Chart(xpCtx,{type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{data:[120,200,250,300,340,400,450],borderColor:'#3B82F6',backgroundColor:'rgba(59,130,246,.2)',fill:true,tension:.4}]},options:{plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:'#6b7280'}},y:{display:false}}}});

const prepCtx=document.getElementById('prepChart').getContext('2d');
new Chart(prepCtx,{type:'doughnut',data:{datasets:[{data:[78,22],backgroundColor:['#3B82F6','#1e293b']}],labels:['Prepared','Remaining']},options:{cutout:'75%',plugins:{legend:{display:false}}}});

const topicCtx=document.getElementById('topicChart').getContext('2d');
new Chart(topicCtx,{type:'bar',data:{labels:['Data Struct.','ML','DB','Algo','Python'],datasets:[{data:[80,65,75,70,90],backgroundColor:'#10B981'}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#9ca3af'}},y:{ticks:{color:'#9ca3af'},beginAtZero:true}}}});



particlesJS('particles-js',{particles:{number:{value:60},color:{value:'#3B82F6'},shape:{type:'circle'},opacity:{value:.25},size:{value:3,random:true},move:{speed:1}},interactivity:{events:{onhover:{enable:true,mode:'repulse'}}}});


lucide.createIcons();
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
      

<div className="fixed inset-0 -z-20" id="particles-js"></div>

<aside className="fixed inset-y-0 left-0 w-16 md:w-60 glass flex flex-col border-r border-zinc-800 z-30">
<div className="flex items-center justify-center md:justify-start h-16 border-b border-zinc-800 px-4">
<span className="text-xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-6 h-6 stroke-blue-400" data-lucide="layers"></i>
<span className="hidden md:inline">SuperLearn</span>
</span>
</div>
<nav className="flex-1 overflow-y-auto">
<ul className="mt-6 space-y-2 md:space-y-1 text-sm">
<li><button className="nav-btn w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/60 transition" data-view="dashboard">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i><span className="hidden md:inline">Dashboard</span></button></li>
<li><button className="nav-btn w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/60 transition" data-view="upload">
<i className="w-5 h-5" data-lucide="upload-cloud"></i><span className="hidden md:inline">Content</span></button></li>
<li><button className="nav-btn w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/60 transition" data-view="tutor">
<i className="w-5 h-5" data-lucide="message-circle"></i><span className="hidden md:inline">Tutor</span></button></li>
<li><button className="nav-btn w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/60 transition" data-view="exams">
<i className="w-5 h-5" data-lucide="list-checks"></i><span className="hidden md:inline">Exams</span></button></li>
<li><button className="nav-btn w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/60 transition" data-view="analytics">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i><span className="hidden md:inline">Analytics</span></button></li>
</ul>
</nav>
<div className="border-t border-zinc-800 p-4 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" />
<div className="hidden md:block">
<p className="text-sm font-medium">Alex Kim</p>
<p className="text-xs text-zinc-400">CS Student</p>
</div>
</div>
</aside>

<div className="pl-16 md:pl-60 min-h-screen flex flex-col">

<header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
<h1 className="text-lg md:text-xl font-semibold tracking-tight" id="viewTitle">Dashboard</h1>
<div className="flex items-center gap-4">
<button className="relative hover:text-blue-400"><i className="w-5 h-5" data-lucide="bell"></i><span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
<button className="md:hidden nav-toggle"><i className="w-5 h-5" data-lucide="menu"></i></button>
</div>
</header>

<main className="flex-1 overflow-y-auto px-6 py-10 space-y-16">

<section className="space-y-12 fade-start" id="dashboard">

<div className="grid lg:grid-cols-3 gap-8">
<div className="glass rounded-xl p-8 border border-zinc-800 flex flex-col justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 stroke-yellow-400" data-lucide="zap"></i>XP Progress
            </h2>
<canvas height="140" id="xpChart"></canvas>
</div>
<p className="mt-6 text-sm text-zinc-400">Consistent study streak: <span className="text-green-400 font-medium">18 days</span></p>
</div>
<div className="glass rounded-xl p-8 border border-zinc-800 flex flex-col justify-between">
<h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 stroke-green-400" data-lucide="calendar-check"></i>Upcoming Deadlines
          </h2>
<ul className="space-y-4 text-sm">
<li className="flex items-center justify-between"><span>Graph Algorithms Quiz</span><span className="text-amber-400">Tomorrow</span></li>
<li className="flex items-center justify-between"><span>ML Project Milestone 2</span><span className="text-amber-300">Sat</span></li>
<li className="flex items-center justify-between"><span>Final Exam – Databases</span><span className="text-red-400">May 23</span></li>
</ul>
<button className="mt-8 self-start bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-md text-sm">View Calendar</button>
</div>
<div className="glass rounded-xl p-8 border border-blue-600 flex flex-col justify-between">
<h2 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 stroke-blue-400" data-lucide="target"></i>Preparedness Score
          </h2>
<div className="relative flex items-center justify-center h-40">
<canvas height="140" id="prepChart" width="140"></canvas>
<span className="absolute text-3xl font-semibold tracking-tight">78%</span>
</div>
<p className="mt-6 text-sm text-zinc-400">Great progress—keep up the momentum!</p>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="glass rounded-xl border border-zinc-800 p-6 flex flex-col fade-start">
<h3 className="font-semibold mb-4 flex items-center gap-2"><i className="w-5 h-5" data-lucide="upload-cloud"></i>Quick Upload</h3>
<div className="flex-1 border-2 border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center text-center p-6 transition" id="dropZone">
<i className="w-10 h-10 mb-3 stroke-zinc-400" data-lucide="file-plus"></i>
<p className="text-sm text-zinc-400">Drag & drop PDFs, videos, recordings</p>
<input className="hidden" multiple="" type="file" />
</div>
<button className="mt-6 bg-blue-600 hover:bg-blue-500 transition w-full py-2 rounded-md text-sm">Browse Files</button>
</div>

<div className="glass rounded-xl border border-zinc-800 p-6 flex flex-col fade-start">
<h3 className="font-semibold mb-4 flex items-center gap-2"><i className="w-5 h-5" data-lucide="bot"></i>AI Tutor</h3>
<p className="text-sm text-zinc-400 flex-1">Ask a question or continue your last conversation.</p>
<button className="mt-6 bg-blue-600 hover:bg-blue-500 transition w-full py-2 rounded-md text-sm nav-btn" data-view="tutor">Open Tutor</button>
</div>

<div className="glass rounded-xl border border-zinc-800 p-6 flex flex-col fade-start">
<h3 className="font-semibold mb-4 flex items-center gap-2"><i className="w-5 h-5" data-lucide="clipboard-list"></i>Mock Exam</h3>
<p className="text-sm text-zinc-400 flex-1">Simulate a timed exam with auto-grading & analytics.</p>
<button className="mt-6 bg-blue-600 hover:bg-blue-500 transition w-full py-2 rounded-md text-sm nav-btn" data-view="exams">Start Exam</button>
</div>
</div>
</section>

<section className="hidden fade-start space-y-12" id="upload">
<h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-6 h-6" data-lucide="upload-cloud"></i>Content Processing
      </h2>
<div className="grid lg:grid-cols-2 gap-8">
<div className="glass rounded-xl border border-zinc-800 p-8 flex flex-col">
<h4 className="font-semibold mb-4">Upload Queue</h4>
<ul className="space-y-4 text-sm text-zinc-300 flex-1 overflow-y-auto" id="uploadQueue"></ul>
</div>
<div className="glass rounded-xl border border-zinc-800 p-8 flex flex-col">
<h4 className="font-semibold mb-4">Drag & Drop Files</h4>
<div className="flex-1 border-2 border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center text-center p-6 transition" id="dropZone2">
<i className="w-10 h-10 mb-3 stroke-zinc-400" data-lucide="file-plus"></i>
<p className="text-sm text-zinc-400">PDF, MP4, YouTube URL, Zoom recording…</p>
<input className="hidden" multiple="" type="file" />
</div>
</div>
</div>
</section>

<section className="hidden fade-start space-y-8" id="tutor">
<h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-6 h-6" data-lucide="message-circle"></i>AI Tutoring
      </h2>
<div className="glass rounded-xl border border-zinc-800 flex flex-col h-[60vh]">
<div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm" id="chatHistory"></div>
<form className="border-t border-zinc-800 flex" id="chatForm">
<input className="flex-1 bg-transparent px-4 py-3 focus:outline-none" id="chatInput" placeholder="Ask your question…" />
<button className="px-6 hover:text-blue-400 transition"><i className="w-5 h-5" data-lucide="send"></i></button>
</form>
</div>
</section>

<section className="hidden fade-start space-y-12" id="exams">
<h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-6 h-6" data-lucide="list-checks"></i>Exam Preparation
      </h2>
<div className="glass rounded-xl border border-zinc-800 p-8 space-y-6">
<div className="flex flex-col md:flex-row md:items-center gap-4">
<label className="text-sm w-40">Select Subject</label>
<select className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md p-2 text-sm focus:outline-none">
<option>Machine Learning</option><option>Data Structures</option><option>Databases</option>
</select>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-4">
<label className="text-sm w-40">Difficulty</label>
<select className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md p-2 text-sm focus:outline-none">
<option>Easy</option><option>Medium</option><option>Hard</option>
</select>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-4">
<label className="text-sm w-40">Duration</label>
<input className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md p-2 text-sm focus:outline-none" type="number" value="60" /> <span className="text-sm">minutes</span>
</div>
<button className="mt-8 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-md">Generate Mock Exam</button>
</div>
</section>

<section className="hidden fade-start space-y-12" id="analytics">
<h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>Learning Analytics
      </h2>
<div className="grid lg:grid-cols-2 gap-8">
<div className="glass rounded-xl border border-zinc-800 p-8">
<h3 className="font-semibold mb-4 flex items-center gap-2"><i className="w-5 h-5" data-lucide="book-open"></i>Topic Mastery</h3>
<canvas height="260" id="topicChart"></canvas>
</div>
<div className="glass rounded-xl border border-zinc-800 p-8 flex flex-col">
<h3 className="font-semibold mb-4 flex items-center gap-2"><i className="w-5 h-5" data-lucide="globe"></i>Global Leaderboard</h3>
<ul className="space-y-4 text-sm flex-1 overflow-y-auto">
<li className="flex items-center justify-between"><span>1. Samira</span><span className="text-green-400">12 450 XP</span></li>
<li className="flex items-center justify-between"><span>2. Jake</span><span className="text-green-400">12 120 XP</span></li>
<li className="flex items-center justify-between"><span>3. Alex (You)</span><span className="text-green-400">11 980 XP</span></li>

</ul>
</div>
</div>
</section>
</main>
</div>

















    </>
  );
}
