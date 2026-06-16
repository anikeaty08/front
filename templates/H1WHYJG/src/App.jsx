import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons();

/* Demo data */
const folderSegments={
  "/Marketing/Campaigns/Summer":[{name:"Tourists – EU",id:"M101",desc:"Summer tourists from EU",status:"Active"},
                                 {name:"Ad Testers",id:"M102",desc:"Internal testers",status:"Inactive"}],
  "/Marketing/Campaigns/Winter":[{name:"Ski Lovers",id:"M201",desc:"Interested in ski trips",status:"Active"}],
  "/Marketing/Brand":[{name:"Brand Advocates",id:"M301",desc:"Highly engaged customers",status:"Active"}],
  "/Sales/Q1":[{name:"High Spend – Q1",id:"S101",desc:">$10k in Q1",status:"Active"}],
  "/Sales/Q2":[{name:"High Spend – Q2",id:"S201",desc:">$10k in Q2",status:"Inactive"}]
};

/* Animation in */
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-animate]").forEach((el,i)=>{const d=Number(el.dataset.delay||i*80);el.style.filter="blur(12px)";el.style.transform="translateY(20px)";el.style.opacity="0";setTimeout(()=>{el.style.transition="all .6s cubic-bezier(.215,.61,.355,1)";el.style.filter="blur(0)";el.style.transform="translateY(0)";el.style.opacity="1"},d);});});

const tableBody=document.getElementById("segmentTable");
const breadcrumbNav=document.getElementById("currentPath");
const selectionBar=document.getElementById("selectionBar");
const selectedList=document.getElementById("selectedList");
const clearBtn=document.getElementById("clearSelection");
const selectedSegments={};

/* Highlight folder in tree */
function highlightFolderTree(path){
  document.querySelectorAll(".folder-item").forEach(b=>{
    b.classList.toggle("bg-zinc-800",b.dataset.path===path);
    b.classList.toggle("ring-1",b.dataset.path===path);
    b.classList.toggle("ring-indigo-500",b.dataset.path===path);
  });
}

/* Build breadcrumb */
function renderBreadcrumb(path){
  const parts=path.split("/").filter(Boolean);
  let cumulative="";
  breadcrumbNav.innerHTML="";
  const rootBtn=document.createElement("button");
  rootBtn.className="hover:text-white focus:outline-none";
  rootBtn.textContent="/";
  rootBtn.dataset.path="/";
  breadcrumbNav.appendChild(rootBtn);
  if(parts.length) breadcrumbNav.appendChild(document.createTextNode(" "));
  parts.forEach((part,i)=>{
    cumulative+="/"+part;
    const btn=document.createElement("button");
    btn.className="hover:text-white focus:outline-none";
    btn.textContent=part;
    btn.dataset.path=cumulative;
    breadcrumbNav.appendChild(btn);
    if(i<parts.length-1) breadcrumbNav.appendChild(document.createTextNode(" / "));
  });
  breadcrumbNav.querySelectorAll("[data-path]").forEach(btn=>{
    btn.addEventListener("click",()=>renderSegments(btn.dataset.path));
  });
}

/* Render segment rows for folder */
function renderSegments(path){
  renderBreadcrumb(path);
  highlightFolderTree(path);
  const rows=folderSegments[path]||[];
  tableBody.innerHTML="";
  rows.forEach(seg=>{
    const key=`${path}|${seg.id}`;
    const tr=document.createElement("tr");
    tr.className="hover:bg-zinc-800 transition";
    tr.innerHTML=`
      <td class="px-4 py-3">
        <input type="checkbox" class="segmentChk accent-indigo-600 h-4 w-4 rounded" data-key="${key}">
      </td>
      <td class="px-4 py-3 whitespace-nowrap">${seg.name}</td>
      <td class="px-4 py-3">${seg.id}</td>
      <td class="px-4 py-3">${seg.desc}</td>
      <td class="px-4 py-3">
        <span class="inline-flex items-center gap-2 px-2 py-0.5 rounded text-xs ${seg.status==='Active'?'bg-emerald-600/20 text-emerald-400':'bg-rose-600/20 text-rose-400'}">
          <i data-lucide="${seg.status==='Active'?'check-circle':'x'}" class="w-3 h-3"></i>${seg.status}
        </span>
      </td>`;
    tableBody.appendChild(tr);
    tr.querySelector(".segmentChk").checked=Boolean(selectedSegments[key]);
  });

  document.querySelectorAll(".segmentChk").forEach(chk=>{
    chk.addEventListener("change",e=>{
      const key=e.target.dataset.key;
      const [p,segId]=key.split("|");
      const seg=folderSegments[p].find(s=>s.id===segId);
      if(e.target.checked){
        selectedSegments[key]={...seg,path:p};
      }else{
        delete selectedSegments[key];
      }
      updateSelectionUI();
    });
  });

  lucide.createIcons();
  document.getElementById("selectAll").checked=rows.length && rows.every(seg=>selectedSegments[`${path}|${seg.id}`]);
}

/* Update bottom bar */
function updateSelectionUI(){
  selectedList.innerHTML="";
  const keys=Object.keys(selectedSegments);
  keys.forEach(key=>{
    const {name}=selectedSegments[key];
    const chip=document.createElement("span");
    chip.className="inline-flex items-center gap-1 px-2 py-1 rounded bg-indigo-600/20 text-indigo-300 text-xs animate-[fadeIn_.25s_ease]";
    chip.innerHTML=`${name}<button data-rm="${key}" aria-label="Remove" class="hover:text-white focus:outline-none"><i data-lucide="x" class="w-3 h-3"></i></button>`;
    selectedList.appendChild(chip);
  });
  selectedList.querySelectorAll("[data-rm]").forEach(btn=>{
    btn.addEventListener("click",e=>{
      const k=e.currentTarget.dataset.rm;
      delete selectedSegments[k];
      const rowChk=document.querySelector(`.segmentChk[data-key="${k}"]`);
      if(rowChk) rowChk.checked=false;
      updateSelectionUI();
    });
  });
  lucide.createIcons();
  selectionBar.style.transform=keys.length?"translateY(0)":"translateY(100%)";
}

/* Clear selection */
clearBtn.addEventListener("click",()=>{
  Object.keys(selectedSegments).forEach(k=>delete selectedSegments[k]);
  document.querySelectorAll(".segmentChk").forEach(c=>c.checked=false);
  updateSelectionUI();
});

/* Select all in current folder */
document.getElementById("selectAll").addEventListener("change",e=>{
  const path=breadcrumbNav.querySelector("[data-path]:last-child")?.dataset.path||"/";
  const rows=folderSegments[path]||[];
  rows.forEach(seg=>{
    const key=`${path}|${seg.id}`;
    if(e.target.checked){
      selectedSegments[key]={...seg,path};
    }else{
      delete selectedSegments[key];
    }
  });
  document.querySelectorAll(".segmentChk").forEach(c=>c.checked=e.target.checked);
  updateSelectionUI();
});

/* Folder buttons */
document.querySelectorAll(".folder-item").forEach(btn=>{
  btn.addEventListener("click",()=>renderSegments(btn.dataset.path));
});

/* Folder search */
document.getElementById("folderSearch").addEventListener("input",e=>{
  const q=e.target.value.toLowerCase();
  document.querySelectorAll("#folderTree button.folder-item, #folderTree summary").forEach(el=>{
    const txt=el.textContent.trim().toLowerCase();
    el.style.display=txt.includes(q)||q===""?"":"none";
  });
});

/* Initial load */
renderSegments("/Marketing/Campaigns/Summer");
updateSelectionUI();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-zinc-800 backdrop-blur sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-6 py-4">
<ol aria-label="Progress" className="flex items-center justify-between sm:justify-start gap-8 sm:gap-14">
<li className="flex items-center gap-3 group">
<span className="grid place-items-center w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-medium">1</span>
<span className="text-sm font-medium tracking-tight">Choose segment</span>
</li>
<li className="flex items-center gap-3 text-zinc-500">
<span className="grid place-items-center w-8 h-8 rounded-full ring-1 ring-zinc-700">2</span>
<span className="text-sm font-medium">Step 2</span>
</li>
<li className="flex items-center gap-3 text-zinc-500">
<span className="grid place-items-center w-8 h-8 rounded-full ring-1 ring-zinc-700">3</span>
<span className="text-sm font-medium">Step 3</span>
</li>
<li className="flex items-center gap-3 text-zinc-500">
<span className="grid place-items-center w-8 h-8 rounded-full ring-1 ring-zinc-700">4</span>
<span className="text-sm font-medium">Step 4</span>
</li>
</ol>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pt-6" data-animate="" data-delay="70">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Choose segment</h1>
</section>
<main className="max-w-7xl mx-auto px-6 pt-10 pb-40 grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8">

<aside className="space-y-6">

<div className="relative" data-animate="">
<label className="sr-only" htmlFor="folderSearch">Search folders</label>
<i className="absolute left-3 top-3 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-800 text-sm placeholder-zinc-500 ring-1 ring-zinc-700 focus:ring-indigo-500 focus:outline-none" id="folderSearch" placeholder="Search folders" type="search"/>
</div>

<nav aria-label="Breadcrumb" className="text-xs leading-6 flex flex-wrap gap-1" data-animate="" data-delay="110" id="currentPath"></nav>

<nav aria-label="Folders" className="space-y-2 text-sm" data-animate="" data-delay="200" id="folderTree">
<details className="group" open="">
<summary className="flex items-center gap-2 cursor-pointer select-none rounded px-2 py-1 hover:bg-zinc-800">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Marketing</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="ml-5 mt-1 space-y-2">
<details>
<summary className="flex items-center gap-2 cursor-pointer select-none rounded px-2 py-1 hover:bg-zinc-800">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Campaigns</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="ml-5 mt-1 space-y-2">
<button className="folder-item flex items-center gap-2 w-full text-left rounded px-2 py-1 hover:bg-zinc-800" data-path="/Marketing/Campaigns/Summer">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Summer</span>
</button>
<button className="folder-item flex items-center gap-2 w-full text-left rounded px-2 py-1 hover:bg-zinc-800" data-path="/Marketing/Campaigns/Winter">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Winter</span>
</button>
</div>
</details>
<button className="folder-item flex items-center gap-2 w-full text-left rounded px-2 py-1 hover:bg-zinc-800" data-path="/Marketing/Brand">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Brand</span>
</button>
</div>
</details>
<details>
<summary className="flex items-center gap-2 cursor-pointer select-none rounded px-2 py-1 hover:bg-zinc-800">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Sales</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="ml-5 mt-1 space-y-2">
<button className="folder-item flex items-center gap-2 w-full text-left rounded px-2 py-1 hover:bg-zinc-800" data-path="/Sales/Q1">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Q1</span>
</button>
<button className="folder-item flex items-center gap-2 w-full text-left rounded px-2 py-1 hover:bg-zinc-800" data-path="/Sales/Q2">
<i className="w-4 h-4" data-lucide="folder"></i><span className="flex-1">Q2</span>
</button>
</div>
</details>
</nav>
</aside>

<section className="space-y-6">
<h2 className="text-lg font-semibold tracking-tight" data-animate="" data-delay="150">Segments in folder</h2>
<div className="overflow-x-auto rounded-lg ring-1 ring-zinc-800" data-animate="" data-delay="200">
<table className="min-w-full text-sm">
<thead className="bg-zinc-800 text-zinc-300">
<tr>
<th className="px-4 py-3 w-12">
<label className="sr-only" htmlFor="selectAll">Select all</label>
<input className="accent-indigo-600 h-4 w-4 rounded" id="selectAll" type="checkbox"/>
</th>
<th className="px-4 py-3 text-left font-medium">Name</th>
<th className="px-4 py-3 text-left font-medium">ID</th>
<th className="px-4 py-3 text-left font-medium">Description</th>
<th className="px-4 py-3 text-left font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800" id="segmentTable"></tbody>
</table>
</div>
</section>
</main>

<footer aria-live="polite" className="fixed bottom-0 left-0 w-full border-t border-zinc-800 bg-zinc-900/95 backdrop-blur p-4 transition-all translate-y-full" id="selectionBar">
<div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
<div className="flex flex-wrap gap-2 flex-1" id="selectedList"></div>
<button className="px-3 py-1.5 text-sm font-medium rounded bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="clearSelection">Clear selection</button>
</div>
</footer>


    </>
  );
}
