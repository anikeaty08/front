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

/* Sample city dataset */
const cities=["Tokyo","Kyoto","Osaka","Sapporo","Fukuoka","Nagoya","Yokohama","Sendai","Hiroshima","Kobe","Nara","Hakone","Nikko","Kanazawa","Takayama"];

/* Utility to render suggestion list */
function showSuggestions(inputEl,listEl){
  const val=inputEl.value.trim().toLowerCase();
  listEl.innerHTML='';
  if(!val){listEl.classList.add('hidden');return;}
  const matches=cities.filter(c=>c.toLowerCase().startsWith(val));
  if(!matches.length){listEl.classList.add('hidden');return;}
  matches.forEach(city=>{
    const li=document.createElement('li');
    li.role='option';
    li.tabIndex=0;
    li.className="px-3 py-2 text-sm hover:bg-gray-800 cursor-pointer";
    li.textContent=city;
    li.addEventListener('click',()=>{selectCity(inputEl,listEl,city)});
    li.addEventListener('keydown',e=>{if(e.key==='Enter')selectCity(inputEl,listEl,city)});
    listEl.appendChild(li);
  });
  listEl.classList.remove('hidden');
}
function selectCity(inputEl,listEl,city){
  inputEl.value=city;
  listEl.classList.add('hidden');
  inputEl.dispatchEvent(new Event('city-selected'));
}

/* Autocomplete for main city */
const mainInput=document.getElementById('main-city');
const mainList=document.getElementById('city-suggestions');
mainInput.addEventListener('input',()=>showSuggestions(mainInput,mainList));
mainInput.addEventListener('focus',()=>showSuggestions(mainInput,mainList));
mainInput.addEventListener('blur',()=>setTimeout(()=>mainList.classList.add('hidden'),100));

/* Nights counter */
const nights=document.getElementById('nights');
document.getElementById('minus').addEventListener('click',()=>{nights.value=Math.max(1,parseInt(nights.value||1)-1)});
document.getElementById('plus').addEventListener('click',()=>{nights.value=parseInt(nights.value||1)+1});

/* Hotel pref selection */
const prefBtns=document.querySelectorAll('.pref-btn');
const prefHidden=document.getElementById('hotelPref');
prefBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    prefBtns.forEach(b=>{b.classList.remove('ring-indigo-500','bg-indigo-600');b.setAttribute('aria-pressed','false')});
    btn.classList.add('ring-indigo-500','bg-indigo-600');
    btn.setAttribute('aria-pressed','true');
    prefHidden.value=btn.dataset.pref;
  });
});

/* Nearby cities tag system */
const secInput=document.getElementById('secondary-city');
const secList=document.getElementById('secondary-suggestions');
const tagContainer=document.getElementById('tag-container');
const tags=new Set();

function addTag(city){
  if(tags.has(city))return;
  tags.add(city);
  const tagEl=document.createElement('span');
  tagEl.className="tag flex items-center gap-1 bg-gray-800/60 ring-1 ring-gray-700 rounded-md px-2 py-1 text-xs";
  tagEl.innerHTML=`${city}<button type="button" class="remove" aria-label="Remove ${city}"><i data-lucide="x" class="w-3 h-3"></i></button>`;
  tagContainer.appendChild(tagEl);
  lucide.createIcons({icons:['x'],attrs:{class:'w-3 h-3'}});
  tagEl.querySelector('.remove').addEventListener('click',()=>{tags.delete(city);tagEl.remove()});
}

secInput.addEventListener('input',()=>showSuggestions(secInput,secList));
secInput.addEventListener('focus',()=>showSuggestions(secInput,secList));
secInput.addEventListener('blur',()=>setTimeout(()=>secList.classList.add('hidden'),100));
secInput.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    e.preventDefault();
    const city=secInput.value.trim();
    if(city){addTag(city);secInput.value='';}
  }
});
secInput.addEventListener('city-selected',()=>{addTag(secInput.value.trim());secInput.value='';});

/* Submit handler */
document.getElementById('wizard-form').addEventListener('submit',e=>{
  e.preventDefault();
  const data={
    mainCity:mainInput.value.trim(),
    nights:parseInt(nights.value,10),
    hotelPref:prefHidden.value,
    nearby:[...tags]
  };
  console.log('Preferences saved:',data);
  alert('Preferences saved! Check console for details.');
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
      

<section className="animate-fadeUp w-full max-w-md ring-1 ring-gray-800 bg-gray-900/60 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur space-y-8">

<header className="flex items-center gap-3">
<svg className="lucide lucide-compass w-6 h-6 text-indigo-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h2 className="text-xl font-semibold tracking-tight">Trip Preferences</h2>
</header>
<form autocomplete="off" className="space-y-6" id="wizard-form">

<div className="space-y-2">
<label className="text-sm font-medium tracking-tight flex items-center gap-1" htmlFor="main-city">
<svg className="lucide lucide-map w-4 h-4 text-indigo-400" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>Main City
      </label>
<div className="relative">
<input aria-autocomplete="list" aria-controls="city-suggestions" aria-expanded="false" className="peer w-full bg-gray-800/60 ring-1 ring-gray-700 focus:ring-indigo-500 rounded-md px-3 py-2 text-sm placeholder-gray-500 outline-none transition" id="main-city" placeholder="Search city..." type="text"/>
<ul className="absolute z-10 left-0 right-0 mt-1 bg-gray-900 ring-1 ring-gray-800 rounded-md shadow-lg divide-y divide-gray-800 hidden autocomplete-list no-scrollbar" id="city-suggestions" role="listbox">

</ul>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium tracking-tight flex items-center gap-1" htmlFor="nights">
<svg className="lucide lucide-moon w-4 h-4 text-indigo-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>Number of Nights
      </label>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-800/60 ring-1 ring-gray-700 hover:ring-indigo-500 text-gray-400 transition" id="minus" type="button">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<input className="w-full text-center bg-gray-800/60 ring-1 ring-gray-700 focus:ring-indigo-500 rounded-md px-3 py-2 text-sm outline-none transition" id="nights" min="1" type="number" value="3"/>
<button className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-800/60 ring-1 ring-gray-700 hover:ring-indigo-500 text-gray-400 transition" id="plus" type="button">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<fieldset className="space-y-2">
<legend className="text-sm font-medium tracking-tight flex items-center gap-1">
<svg className="lucide lucide-bed-double w-4 h-4 text-indigo-400" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>Hotel Preference
      </legend>
<div className="flex gap-2">
<button aria-pressed="false" className="pref-btn flex-1 text-xs font-semibold rounded-md px-3 py-2 bg-gray-800/60 ring-1 ring-gray-700 hover:ring-indigo-500 transition" data-pref="budget" type="button">Budget</button>
<button aria-pressed="false" className="pref-btn flex-1 text-xs font-semibold rounded-md px-3 py-2 bg-gray-800/60 ring-1 ring-gray-700 hover:ring-indigo-500 transition" data-pref="standard" type="button">Standard</button>
<button aria-pressed="false" className="pref-btn flex-1 text-xs font-semibold rounded-md px-3 py-2 bg-gray-800/60 ring-1 ring-gray-700 hover:ring-indigo-500 transition" data-pref="luxury" type="button">Luxury</button>
</div>
<input id="hotelPref" name="hotelPref" type="hidden"/>
</fieldset>

<details className="group space-y-3">
<summary className="cursor-pointer select-none flex items-center justify-between gap-3 py-2 px-3 rounded-md bg-gray-800/50 ring-1 ring-gray-700 hover:ring-indigo-500 transition">
<span className="flex items-center gap-2 text-sm font-medium tracking-tight">
<svg className="lucide lucide-map-pin w-4 h-4 text-indigo-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>Nearby Cities or Day Trips
        </span>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</summary>
<div className="space-y-3">

<div className="flex flex-wrap gap-2 min-h-[2.5rem] items-center" id="tag-container"></div>

<div className="relative">
<input aria-autocomplete="list" aria-controls="secondary-suggestions" aria-expanded="false" className="w-full bg-gray-800/60 ring-1 ring-gray-700 focus:ring-indigo-500 rounded-md px-3 py-2 text-sm placeholder-gray-500 outline-none transition" id="secondary-city" placeholder="Add a city..." type="text"/>
<ul className="absolute z-10 left-0 right-0 mt-1 bg-gray-900 ring-1 ring-gray-800 rounded-md shadow-lg divide-y divide-gray-800 hidden autocomplete-list no-scrollbar" id="secondary-suggestions" role="listbox">

</ul>
</div>
</div>
</details>

<button className="w-full bg-indigo-600 hover:bg-indigo-700 font-semibold text-sm rounded-md py-3 transition" type="submit">
      Save Preferences
    </button>
</form>
</section>



    </>
  );
}
