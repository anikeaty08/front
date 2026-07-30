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
      
lucide.createIcons();

// Full issue dataset (retained for immediate table rendering)
let issues=[
  {id:1,title:'Broken image on checkout',url:'https://store.com/checkout',status:'active',assigned:'',comments:[{author:'Client',time:'2024-04-10',text:'Product image missing on mobile'}],created:'2024-04-10'},
  {id:2,title:'404 on blog page',url:'https://company.com/blog/post',status:'active',assigned:'',comments:[{author:'Client',time:'2024-04-09',text:'Page not found'}],created:'2024-04-09'},
  {id:3,title:'Misaligned button',url:'https://company.com/pricing',status:'archived',assigned:'Sam',comments:[{author:'Sam',time:'2024-04-05',text:'Fixed with CSS tweak'}],created:'2024-04-05'},
  {id:4,title:'Slow page load',url:'https://store.com/home',status:'active',assigned:'Tim',comments:[{author:'Tim',time:'2024-04-03',text:'Investigating Lighthouse warnings'}],created:'2024-04-03'},
  {id:5,title:'Text overlap on FAQ',url:'https://company.com/faq',status:'active',assigned:'',comments:[],created:'2024-04-02'},
  {id:6,title:'Checkout error code 500',url:'https://store.com/checkout',status:'active',assigned:'Alex',comments:[{author:'Alex',time:'2024-04-01',text:'Cannot reproduce on staging'}],created:'2024-04-01'},
  {id:7,title:'Broken link in footer',url:'https://company.com',status:'archived',assigned:'',comments:[],created:'2024-03-31'},
  {id:8,title:'Modal not closing',url:'https://store.com/product/123',status:'active',assigned:'',comments:[],created:'2024-03-28'},
  {id:9,title:'Incorrect price displayed',url:'https://store.com/product/456',status:'active',assigned:'Jo',comments:[{author:'Jo',time:'2024-03-25',text:'Possible currency rounding issue'}],created:'2024-03-25'},
  {id:10,title:'Contact form spam',url:'https://company.com/contact',status:'archived',assigned:'Tim',comments:[],created:'2024-03-22'}
];

const issueContainer=document.getElementById('issueContainer');
const statusBtns=document.querySelectorAll('.statusBtn');
const unassignedToggle=document.getElementById('unassignedToggle');
const searchInput=document.getElementById('searchInput');
let statusFilter='active',unassignedOnly=false,searchTerm='';

// Render
function renderIssues(){
  issueContainer.innerHTML='';
  getFilteredIssues().forEach(issue=>{
    const details=document.createElement('details');
    details.className='bg-gray-900/70 border border-gray-800 rounded-xl';
    details.innerHTML=`<summary class="flex items-center justify-between gap-4 p-4 cursor-pointer list-none">
        <div class="flex flex-col">
          <span class="font-medium">${highlight(issue.title)}</span>
          <span class="text-sm text-gray-400">${highlight(issue.url)}</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-xs px-2 py-0.5 rounded-full ${issue.status==='active'?'bg-amber-500/20 text-amber-400':'bg-gray-500/20 text-gray-400'} capitalize">${issue.status}</span>
          <span class="text-sm text-gray-400 flex items-center gap-1"><i data-lucide="user" class="h-4 w-4"></i>${issue.assigned||'Unassigned'}</span>
          <i data-lucide="chevron-down" class="h-5 w-5 text-gray-400"></i>
        </div>
      </summary>
      <div class="border-t border-gray-800 p-4 space-y-6">
        <div class="flex items-center gap-4">
          <p class="text-sm"><span class="text-gray-400">Created:</span> ${issue.created}</p>
          <button onclick="assignSelf(${issue.id})" class="ml-auto inline-flex items-center gap-2 text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-md"><i data-lucide="user-plus" class="h-4 w-4"></i>Assign to me</button>
        </div>
        ${renderCommentsSection(issue)}
      </div>`;
    issueContainer.appendChild(details);
  });
  lucide.createIcons();
}

function renderTable(){
  const body=document.getElementById('ticketTableBody');
  body.innerHTML='';
  getFilteredIssues().forEach(t=>{
    const tr=document.createElement('tr');tr.className='hover:bg-gray-800/50 cursor-pointer';tr.setAttribute('role','button');tr.setAttribute('tabindex','0');
    tr.innerHTML=`<td class="px-4 py-2">${highlight(t.title)}</td>
      <td class="px-4 py-2 text-indigo-400 underline">${highlight(t.url.replace(/^https?:\/\//,''))}</td>
      <td class="px-4 py-2 capitalize"><span class="text-xs px-2 py-0.5 rounded-full ${t.status==='active'?'bg-amber-500/20 text-amber-400':'bg-gray-500/20 text-gray-400'}">${t.status}</span></td>
      <td class="px-4 py-2">${t.assigned||'—'}</td>
      <td class="px-4 py-2">${t.created}</td>`;
    tr.addEventListener('click',()=>openQuickView(t.id));
    tr.addEventListener('keydown',e=>{if(e.key==='Enter')openQuickView(t.id)});
    body.appendChild(tr);
  });
}

function getFilteredIssues(){
  return issues.filter(i=>i.status===statusFilter&&(!unassignedOnly||i.assigned==='')&&(i.title.toLowerCase().includes(searchTerm)||i.url.toLowerCase().includes(searchTerm)));
}
function highlight(text){if(!searchTerm)return text;const re=new RegExp(`(${searchTerm})`,'ig');return text.replace(re,'<mark class="bg-indigo-600/30 text-indigo-300">$1</mark>');}

statusBtns.forEach(btn=>btn.addEventListener('click',()=>{statusBtns.forEach(b=>b.classList.remove('bg-indigo-600','text-white'));btn.classList.add('bg-indigo-600','text-white');statusFilter=btn.dataset.filter;renderAll();}));
unassignedToggle.addEventListener('click',()=>{unassignedOnly=!unassignedOnly;unassignedToggle.classList.toggle('bg-indigo-600',unassignedOnly);unassignedToggle.classList.toggle('text-white',unassignedOnly);renderAll();});
searchInput.addEventListener('input',e=>{searchTerm=e.target.value.trim().toLowerCase();renderAll();});

// Quick-view, comment, assign, etc. (unchanged from previous version – kept for brevity)
const qv=document.getElementById('quickView'),qvPanel=document.getElementById('quickViewPanel');
function openQuickView(id){const t=issues.find(i=>i.id===id);if(!t)return;document.getElementById('qvTitle').textContent=t.title;document.getElementById('qvBody').innerHTML=`<div class="space-y-3"><p><span class="text-gray-400">URL:</span> <a href="${t.url}" target="_blank" class="text-indigo-400 underline">${t.url}</a></p><p><span class="text-gray-400">Status:</span> ${t.status}</p><p><span class="text-gray-400">Assigned:</span> ${t.assigned||'Unassigned'}</p><p><span class="text-gray-400">Created:</span> ${t.created}</p></div><div>${renderCommentsSection(t)}</div>`;lucide.createIcons();qv.classList.remove('pointer-events-none');requestAnimationFrame(()=>qvPanel.classList.remove('translate-x-full'));}document.getElementById('closeQV').addEventListener('click',()=>{qvPanel.classList.add('translate-x-full');setTimeout(()=>qv.classList.add('pointer-events-none'),300);});
function renderCommentsSection(issue){return `<h5 class="font-medium mb-2 flex items-center gap-2 text-sm"><i data-lucide="message-circle" class="h-4 w-4"></i> Comments</h5><ul class="space-y-3 text-sm">${issue.comments.map(c=>`<li class="bg-gray-800/60 p-3 rounded-md border border-gray-700"><p class="font-medium">${c.author}<span class="text-gray-500 font-normal"> · ${c.time}</span></p><p>${c.text}</p></li>`).join('')}</ul><form onsubmit="addComment(event,${issue.id})" class="mt-4 flex gap-2"><input required name="comment" placeholder="Add a comment..." class="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"><button class="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 rounded-md">Post</button></form>`;}
function assignSelf(id){const name=prompt('Enter your name (Support agent):');if(!name)return;issues=issues.map(i=>i.id===id?{...i,assigned:name,status:'active'}:i);renderAll();}
function addComment(e,id){e.preventDefault();const field=e.target.comment;issues=issues.map(i=>i.id===id?{...i,comments:[...i.comments,{author:'You',time:'Just now',text:field.value}]}:i);field.value='';renderAll();}

// Modal actions
const modalBackdrop=document.getElementById('modalBackdrop');document.getElementById('newIssueBtn').addEventListener('click',()=>modalBackdrop.classList.remove('hidden'));document.getElementById('closeModal').addEventListener('click',()=>modalBackdrop.classList.add('hidden'));
document.getElementById('issueForm').addEventListener('submit',e=>{e.preventDefault();const title=document.getElementById('issueTitle').value,url=document.getElementById('issueURL').value,desc=document.getElementById('issueDesc').value;issues.unshift({id:Date.now(),title,url,status:'active',assigned:'',comments:[{author:'Client',time:'Just now',text:desc}],created:new Date().toISOString().slice(0,10)});e.target.reset();modalBackdrop.classList.add('hidden');renderAll();});

// Settings slide-over
const settingsSlide=document.getElementById('settingsSlide'),settingsPanel=document.getElementById('settingsPanel');
function openSettings(){settingsSlide.classList.remove('pointer-events-none');requestAnimationFrame(()=>settingsPanel.classList.remove('translate-x-full'));}
function closeSettings(){settingsPanel.classList.add('translate-x-full');setTimeout(()=>settingsSlide.classList.add('pointer-events-none'),300);}
document.getElementById('openSettingsBtn').addEventListener('click',openSettings);document.getElementById('profileBtn').addEventListener('click',openSettings);document.getElementById('closeSettings').addEventListener('click',closeSettings);

// Theme toggle
let dark=true;document.getElementById('themeToggle').addEventListener('click',()=>{dark=!dark;document.documentElement.classList.toggle('dark',dark);});

// Particles
particlesJS('particles-js',{particles:{number:{value:40},color:{value:'#ffffff'},opacity:{value:.12},size:{value:2},move:{speed:.5}},interactivity:{events:{onhover:{enable:false}}},background:{color:'#0f172a'}});

// Initial render
function renderAll(){renderIssues();renderTable();}
renderAll();

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
      

<div className="absolute inset-0 -z-10" id="particles-js"></div>

<aside className="w-64 bg-gray-900 border-r border-gray-800 hidden md:flex flex-col">
<div className="p-6 border-b border-gray-800">
<h1 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<i className="h-5 w-5" data-lucide="life-buoy"></i> Web Support
    </h1>
</div>
<nav className="flex-1 p-6 space-y-4">
<a className="flex items-center gap-3 text-gray-300 hover:text-white" href="#"><i className="h-5 w-5" data-lucide="layout-dashboard"></i>Dashboard</a>
<a className="flex items-center gap-3 text-gray-300 hover:text-white" href="#"><i className="h-5 w-5" data-lucide="list"></i>Reports</a>
<a className="flex items-center gap-3 text-gray-300 hover:text-white" href="#" id="openSettingsBtn"><i className="h-5 w-5" data-lucide="settings"></i>User Settings</a>
</nav>
<div className="border-t border-gray-800 p-6">
<button className="flex items-center gap-3 w-full text-left hover:bg-gray-800/60 p-2 rounded-md focus:outline-none" id="profileBtn">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-700" src="https://source.unsplash.com/40x40?face&sig=8" />
<div className="flex flex-col">
<span className="font-medium">Alex Doe</span>
<span className="text-xs text-gray-400">alex@company.com</span>
</div>
<i className="h-5 w-5 ml-auto text-gray-400" data-lucide="chevron-right"></i>
</button>
</div>
<div className="p-6 border-t border-gray-800 text-sm text-gray-500">© 2024</div>
</aside>

<main className="flex-1 flex flex-col overflow-y-auto px-6 pb-20">

<header className="pt-8 flex items-center justify-between flex-wrap gap-4 animate-fadeIn" style={{animationDelay: `.15s`}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-2">
<i className="h-7 w-7" data-lucide="file-warning"></i> Issue Reports
    </h2>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-md focus:outline-none focus-visible:ring ring-indigo-400/50 transition" id="newIssueBtn">
<i className="h-5 w-5" data-lucide="plus-circle"></i> New Report
    </button>
</header>

<section className="mt-10 grid grid-cols-1 gap-8 animate-fadeIn" style={{animationDelay: `.25s`}}>
<div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 flex flex-col gap-4">
<h4 className="font-medium flex items-center gap-2"><i className="h-5 w-5" data-lucide="filter"></i> Filters</h4>
<div className="flex flex-wrap items-center gap-3">
<button className="statusBtn bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm" data-filter="active">Active</button>
<button className="statusBtn bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1.5 rounded-md text-sm" data-filter="archived">Archived</button>
<button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1.5 rounded-md text-sm" id="unassignedToggle">
<i className="h-4 w-4" data-lucide="user-x"></i> Unassigned only
        </button>
<div className="relative flex-1 min-w-[160px]">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" data-lucide="search"></i>
<input className="w-full bg-gray-800 border border-gray-700 rounded-md pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:border-indigo-500 text-gray-200" id="searchInput" placeholder="Search..." />
</div>
</div>
</div>
</section>

<section className="mt-10 animate-fadeIn" style={{animationDelay: `.3s`}}>
<h3 className="font-medium mb-4 flex items-center gap-2"><i className="h-5 w-5" data-lucide="table"></i> Ticket List</h3>
<div className="overflow-x-auto rounded-xl border border-gray-800">
<table className="min-w-full text-sm">
<thead className="bg-gray-800/60 text-gray-300">
<tr>
<th className="px-4 py-3 text-left font-medium">Title</th>
<th className="px-4 py-3 text-left font-medium">URL</th>
<th className="px-4 py-3 text-left font-medium">Status</th>
<th className="px-4 py-3 text-left font-medium">Assigned</th>
<th className="px-4 py-3 text-left font-medium">Created</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-800" id="ticketTableBody"></tbody>
</table>
</div>
</section>

<section className="mt-10 space-y-6 animate-slideUp" id="issueContainer" style={{animationDelay: `.35s`}}></section>
</main>


<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 hidden" id="modalBackdrop">
<div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-lg p-8 animate-scaleIn">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold tracking-tight">Submit New Report</h3>
<button className="text-gray-400 hover:text-gray-200" id="closeModal"><i className="h-6 w-6" data-lucide="x"></i></button>
</div>
<form className="space-y-5" id="issueForm">
<div>
<label className="block text-sm mb-1" htmlFor="issueTitle">Title</label>
<input className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500" id="issueTitle" placeholder="Describe the issue briefly" required type="text" />
</div>
<div>
<label className="block text-sm mb-1" htmlFor="issueURL">Page URL</label>
<input className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500" id="issueURL" placeholder="https://yourwebsite.com/page" required type="url" />
</div>
<div>
<label className="block text-sm mb-1" htmlFor="issueDesc">Description</label>
<textarea className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-500" id="issueDesc" placeholder="More details about the issue..." required rows="4"></textarea>
</div>
<div className="flex justify-end pt-4">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-md transition" type="submit">Submit</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 flex justify-end z-50 pointer-events-none" id="settingsSlide">
<div className="w-full max-w-md bg-gray-900 border-l border-gray-800 translate-x-full transition-transform duration-300 pointer-events-auto flex flex-col" id="settingsPanel">
<div className="flex items-center justify-between p-6 border-b border-gray-800">
<h3 className="text-lg font-semibold tracking-tight">User Settings</h3>
<button className="text-gray-400 hover:text-gray-200" id="closeSettings"><i className="h-5 w-5" data-lucide="x"></i></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<section className="space-y-4">
<h4 className="font-medium tracking-tight flex items-center gap-2"><i className="h-4 w-4" data-lucide="user"></i> Profile</h4>
<div className="flex items-center gap-4">
<img alt="" className="h-16 w-16 rounded-full object-cover ring-2 ring-indigo-600" src="https://source.unsplash.com/80x80?face&sig=8" />
<div>
<p className="font-medium">Alex Doe</p>
<p className="text-sm text-gray-400">alex@company.com</p>
</div>
</div>
</section>
<section className="space-y-4">
<h4 className="font-medium tracking-tight flex items-center gap-2"><i className="h-4 w-4" data-lucide="moon"></i> Theme</h4>
<button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md flex items-center gap-2 text-sm" id="themeToggle">
<i className="h-4 w-4" data-lucide="sun"></i> Toggle dark / light
        </button>
</section>
<section>
<button className="bg-red-600 hover:bg-red-500 text-white w-full px-4 py-2 rounded-md text-sm flex items-center justify-center gap-2"><i className="h-4 w-4" data-lucide="log-out"></i> Sign out</button>
</section>
</div>
</div>
</div>

<div className="fixed inset-0 flex justify-end z-40 pointer-events-none" id="quickView">
<div className="w-full max-w-md bg-gray-900 border-l border-gray-800 translate-x-full transition-transform duration-300 pointer-events-auto flex flex-col" id="quickViewPanel">
<div className="flex items-center justify-between p-6 border-b border-gray-800">
<h3 className="text-lg font-semibold tracking-tight" id="qvTitle"></h3>
<button className="text-gray-400 hover:text-gray-200" id="closeQV"><i className="h-5 w-5" data-lucide="x"></i></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6" id="qvBody"></div>
</div>
</div>



    </>
  );
}
