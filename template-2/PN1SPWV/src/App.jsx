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

/* ---------- Data ---------- */
const dataset = [
  { city:"Tokyo", region:"Tokyo Metropolis", country:"Japan", flag:"🇯🇵" },
  { city:"Kyoto", region:"Kyoto Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Osaka", region:"Osaka Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Sapporo", region:"Hokkaido", country:"Japan", flag:"🇯🇵" },
  { city:"Hakone", region:"Kanagawa Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Uji", region:"Kyoto Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Nara", region:"Nara Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Hiroshima", region:"Hiroshima Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Kanazawa", region:"Ishikawa Prefecture", country:"Japan", flag:"🇯🇵" },
  { city:"Kobe", region:"Hyōgo Prefecture", country:"Japan", flag:"🇯🇵" }
];

/* Popular list shown when empty */
const popularCities = ["Tokyo","Osaka","Kyoto","Sapporo"];

/* ---------- Fuse.js ---------- */
const fuse = new Fuse(dataset,{
  keys:["city","region","country"],
  threshold:0.3,
  includeScore:true
});

/* ---------- Elements ---------- */
const mainInput = document.getElementById('mainCityInput');
const mainList  = document.getElementById('suggestionList');
const dayInput  = document.getElementById('dayTripInput');
const dayList   = document.getElementById('daySuggestionList');
const tagContainer = document.getElementById('tagContainer');
const showMapBtn  = document.getElementById('showMapBtn');

/* ---------- Recently Searched ---------- */
const RECENT_KEY = 'recentCities';
const getRecent = () => JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
const addRecent = c => {
  const rec = getRecent().filter(x=>x!==c).slice(0,7);
  localStorage.setItem(RECENT_KEY, JSON.stringify([c, ...rec]));
};

/* ---------- Suggestion Rendering ---------- */
function renderSuggestions(listEl,inputVal){
  listEl.innerHTML='';
  const trimmed = inputVal.trim();
  let results = [];
  
  if(!trimmed){
    /* Recently + Popular when field empty */
    const rec = getRecent();
    if(rec.length){
      listEl.appendChild(sectionTitle("🕘 Recently Searched"));
      rec.forEach(c => listEl.appendChild(suggestionItem(c)));
    }
    listEl.appendChild(sectionTitle("🔥 Popular Cities"));
    popularCities.forEach(c => listEl.appendChild(suggestionItem(c)));
    toggleList(listEl,true);
    return;
  }

  results = fuse.search(trimmed).map(r=>r.item);

  if(!results.length){
    listEl.appendChild(noMatch(trimmed));
  }else{
    results.forEach(item => {
      const li = document.createElement('li');
      li.role='option';
      li.tabIndex=0;
      li.className='flex items-center justify-between gap-4 px-4 py-2 cursor-pointer hover:bg-indigo-50 active:bg-indigo-100';
      li.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-xl">${item.flag || "📍"}</span>
          <div>
            <p class="font-medium text-sm">${boldMatch(item.city,trimmed)}</p>
            <p class="text-xs text-gray-500">${item.region}, ${item.country}</p>
          </div>
        </div>`;
      li.addEventListener('click',()=>selectCity(inputVal===mainInput.value?mainInput:dayInput,listEl,item.city));
      listEl.appendChild(li);
    });
  }
  toggleList(listEl,true);
}

function boldMatch(text,term){
  const regex = new RegExp(`(${term})`,'ig');
  return text.replace(regex,'<span class="font-semibold">$1</span>');
}

function sectionTitle(text){
  const li=document.createElement('li');
  li.className='px-4 py-2 text-xs text-gray-400 select-none';
  li.textContent=text;
  return li;
}
function suggestionItem(city){
  const li=document.createElement('li');
  const found = dataset.find(d=>d.city===city) || {region:'',country:'',flag:'📍'};
  li.role='option';li.tabIndex=0;
  li.className='flex items-center justify-between gap-4 px-4 py-2 cursor-pointer hover:bg-indigo-50 active:bg-indigo-100';
  li.innerHTML=`<div class="flex items-center gap-3"><span class="text-xl">${found.flag}</span><div><p class="font-medium text-sm">${city}</p><p class="text-xs text-gray-500">${found.region} ${found.country}</p></div></div>`;
  li.addEventListener('click',()=>selectCity(mainInput.value===city?mainInput:dayInput,(li.parentElement===mainList)?mainList:dayList,city));
  return li;
}
function noMatch(term){
  const li=document.createElement('li');
  li.className='px-4 py-3 text-sm text-gray-500';
  li.innerHTML=`No matches for “${term}”. <span class="font-medium text-indigo-600 cursor-pointer">Add anyway?</span>`;
  li.querySelector('span').addEventListener('click',()=>selectCity(dayInput,dayList,term));
  return li;
}
function toggleList(listEl,show){listEl.classList.toggle('hidden',!show);}

/* ---------- Select City ---------- */
function selectCity(inputEl,listEl,city,addTag=false){
  if(inputEl===mainInput){
    inputEl.value=city;
    addRecent(city);
    showMapBtn.classList.remove('hidden');
    showMapBtn.onclick=()=>window.open(`https://www.google.com/maps/search/${encodeURIComponent(city)}`,'_blank');
  }else{
    addTagChip(city);
    inputEl.value='';
  }
  toggleList(listEl,false);
}

/* ---------- Tag Chips ---------- */
const dayTags = new Set();
function addTagChip(city){
  if(dayTags.has(city)) return;
  dayTags.add(city);
  const chip=document.createElement('span');
  chip.className='flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-medium';
  chip.innerHTML=`${city}<button type="button" class="ml-1"><i data-lucide="x" class="w-3 h-3"></i></button>`;
  chip.querySelector('button').addEventListener('click',()=>{chip.remove();dayTags.delete(city);});
  tagContainer.appendChild(chip);
  lucide.createIcons();
}

/* ---------- Event Listeners ---------- */
[mainInput,dayInput].forEach(input=>{
  const list = input===mainInput?mainList:dayList;
  input.addEventListener('input',()=>renderSuggestions(list,input.value));
  input.addEventListener('focus',()=>renderSuggestions(list,input.value));
  input.addEventListener('blur',()=>setTimeout(()=>toggleList(list,false),150));
  /* Keyboard navigation */
  input.addEventListener('keydown',e=>{
    const items = Array.from(list.querySelectorAll('li[role=option]'));
    let idx = items.findIndex(it=>it.classList.contains('suggestion-active'));
    if(e.key==='ArrowDown'){ e.preventDefault(); idx=(idx+1)%items.length; activate(items,idx);}
    if(e.key==='ArrowUp'){ e.preventDefault(); idx=(idx-1+items.length)%items.length; activate(items,idx);}
    if(e.key==='Enter'){ e.preventDefault(); items[idx]?.click(); }
  });
  function activate(arr,i){
    arr.forEach(it=>it.classList.remove('suggestion-active'));
    arr[i]?.classList.add('suggestion-active');
    arr[i]?.scrollIntoView({block:"nearest"});
  }
});

/* ---------- Save ---------- */
document.getElementById('saveBtn').addEventListener('click',()=>{
  const data={
    mainCity: mainInput.value.trim(),
    dayTrips: [...dayTags]
  };
  console.log('Saved:',data);
  alert('Cities saved! Check console.');
});

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
      

<section className="animate-fadeUp w-full max-w-lg rounded-2xl shadow-xl ring-1 ring-gray-200 bg-white/90 backdrop-blur-md px-6 py-8 space-y-8">

<header className="flex items-center gap-3">
<i className="w-6 h-6 text-indigo-500" data-lucide="navigation"></i>
<h2 className="text-2xl font-semibold tracking-tight">Choose Your Cities</h2>
</header>

<div className="space-y-6">

<div className="space-y-2">
<label className="text-sm font-medium flex items-center gap-2" htmlFor="mainCityInput">
<i className="w-4 h-4 text-indigo-500" data-lucide="map-pin"></i>Main City
      </label>
<div className="relative">
<input aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" autocomplete="off" className="peer w-full rounded-lg bg-white/80 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-sm placeholder-gray-500 outline-none transition" id="mainCityInput" placeholder="Start typing a city…" type="text" />

<button className="hidden absolute inset-y-0 right-0 flex items-center pr-3" id="showMapBtn" type="button">
<i className="w-5 h-5 text-indigo-500" data-lucide="map"></i>
</button>

<ul className="absolute left-0 right-0 mt-1 bg-white ring-1 ring-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto no-scrollbar hidden z-10" id="suggestionList" role="listbox"></ul>
</div>
</div>

<details className="group space-y-3 open:space-y-4">
<summary className="cursor-pointer select-none flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-200 hover:ring-indigo-500 transition">
<span className="flex items-center gap-2 text-sm font-medium">
<i className="w-4 h-4 text-indigo-500 group-open:rotate-45 transition-transform" data-lucide="plus-circle"></i>
          Day-Trip Destinations
        </span>
<i className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" data-lucide="chevron-right"></i>
</summary>

<div className="flex flex-wrap gap-2 min-h-[2.5rem]" id="tagContainer"></div>

<div className="relative">
<input aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" autocomplete="off" className="w-full rounded-lg bg-white/80 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-sm placeholder-gray-500 outline-none transition" id="dayTripInput" placeholder="Add another city…" type="text" />

<ul className="absolute left-0 right-0 mt-1 bg-white ring-1 ring-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto no-scrollbar hidden z-10" id="daySuggestionList" role="listbox"></ul>
</div>
</details>

<button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-lg py-3 text-center text-sm font-semibold text-white transition" id="saveBtn">Save Cities</button>
</div>
</section>



    </>
  );
}
