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



    // Only clicked/selected segment uses accent fill
    document.querySelectorAll('.cat-btn').forEach((btn, idx, all)=>{
      btn.addEventListener('click', function () {
        all.forEach(b => {
          b.classList.remove(
            "bg-[#00BAF4]", "ring-1", "ring-[#00BAF4]", "border-[#00BAF4]", "text-[#000]", "font-semibold"
          );
          b.classList.add(
            "bg-[#1B1D22]", "border-[#22262F]", "text-[#BBC3C9]"
          );
        });
        btn.classList.remove("bg-[#1B1D22]", "border-[#22262F]", "text-[#BBC3C9]");
        btn.classList.add("bg-[#00BAF4]", "ring-1", "ring-[#00BAF4]", "border-[#00BAF4]", "text-[#000]", "font-semibold");
        document.getElementById('category').value = btn.dataset.cat;
      });
    });
    document.getElementById('allDay').addEventListener('change', function() {
      const dis = this.checked;
      document.getElementById('startTime').disabled = dis;
      document.getElementById('endTime').disabled = dis;
      document.getElementById('startTime').classList.toggle('opacity-40',dis);
      document.getElementById('endTime').classList.toggle('opacity-40',dis);
    });
    document.getElementById('attachments').addEventListener('change', function () {
      let s = '';
      if (this.files.length)
        Array.from(this.files).forEach(f=>s+=`<span>${f.name}</span> `);
      document.getElementById('fileList').innerHTML = s;
    });
    const invitees = [];
    function renderInvitees() {
      const list = document.getElementById('inviteesList');
      list.innerHTML = '';
      invitees.forEach((mail,i) => {
        const badge = document.createElement('span');
        badge.className = "flex items-center px-3 py-1 rounded bg-[#191D22] text-[#00BAF4] border border-[#00BAF4] text-sm";
        badge.innerHTML = `${mail}<button type="button" class="ml-1" onclick='invitees.splice(${i},1);renderInvitees();'><svg width="14" height="14" fill="none" viewBox="0 0 18 18"><path d="M4 4l10 10M14 4l-10 10" stroke="#00BAF4" stroke-width="1.5" stroke-linecap="round"/></svg></button>`;
        list.appendChild(badge);
      });
    }
    document.getElementById('addInviteeBtn').onclick = () => {
      let email = prompt("Enter email address:");
      if(email && /\S+@\S+\.\S+/.test(email)) { invitees.push(email); renderInvitees(); }
      else if(email) alert("Invalid email");
    };
    document.getElementById('eventForm').onsubmit = e=>{e.preventDefault();alert('Event created!');};
  
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
      
<div className="w-full max-w-[390px] shadow-lg flex flex-col pb-6 pt-4" style={{borderRadius: '40px', border: '1px solid #000', background: '#000'}}>
<div className="flex items-center justify-end px-6 pt-2 pb-2">
<div className="flex-1 text-center text-[#FCFCFC] font-semibold text-lg select-none">New Event</div>
<button className="rounded-lg p-2 ml-auto hover:bg-[#1B1D22]" onclick="document.body.firstElementChild.style.display='none'" type="button">
<svg fill="none" height="18" viewbox="0 0 18 18" width="18">
<path d="M4 4l10 10M14 4l-10 10" stroke="#BBC3C9" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>

<div className="w-full px-5 mb-2">
<div className="flex gap-2 w-full overflow-x-auto snap-x" id="catWrap">
<button className="cat-btn shrink-0 px-4 py-1 rounded-md font-medium transition bg-[#00BAF4] border border-[#00BAF4] text-[#000] ring-1 ring-[#00BAF4] font-semibold" data-cat="Personal" type="button">Personal</button>
<button className="cat-btn shrink-0 px-4 py-1 rounded-md font-medium transition bg-[#1B1D22] border border-[#22262F] text-[#BBC3C9]" data-cat="Work" type="button">Work</button>
<button className="cat-btn shrink-0 px-4 py-1 rounded-md font-medium transition bg-[#1B1D22] border border-[#22262F] text-[#BBC3C9]" data-cat="Family" type="button">Family</button>
<button className="cat-btn shrink-0 px-4 py-1 rounded-md font-medium transition bg-[#1B1D22] border border-[#22262F] text-[#BBC3C9]" data-cat="Health" type="button">Health</button>
</div>
<input id="category" name="category" type="hidden" value="Personal"/>
</div>
<form autocomplete="off" className="flex flex-col" id="eventForm">
<div className="px-6 pt-2 flex flex-col gap-3">
<div className="bg-[#1B1D22] rounded-lg">
<input className="w-full text-base font-semibold bg-transparent text-[#FCFCFC] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00BAF4] placeholder-[#535D6C]" minlength="2" name="title" placeholder="Title" required=""/>
</div>
<div className="bg-[#1B1D22] rounded-lg">
<input className="w-full text-base bg-transparent text-[#FCFCFC] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00BAF4] placeholder-[#535D6C]" name="location" placeholder="Location"/>
</div>
</div>
<div className="flex gap-3 px-6 pt-2">
<div className="flex-1 flex flex-col gap-2">
<label className="block text-xs text-[#727C8C] ml-1 mb-1">Start</label>
<div className="bg-[#1B1D22] rounded-lg flex items-center px-3 py-2">
<input className="bg-transparent outline-none w-24 text-[#FCFCFC] text-[15px]" name="startDate" required="" style={{colorScheme: 'dark'}} type="date" value="2024-08-28"/>
</div>
<div className="bg-[#1B1D22] rounded-lg flex items-center px-3 py-2">
<input className="bg-transparent outline-none w-16 text-[#FCFCFC] text-[15px]" id="startTime" name="startTime" required="" style={{colorScheme: 'dark'}} type="time" value="10:00"/>
</div>
</div>
<div className="flex-1 flex flex-col gap-2">
<label className="block text-xs text-[#727C8C] ml-1 mb-1">End</label>
<div className="bg-[#1B1D22] rounded-lg flex items-center px-3 py-2">
<input className="bg-transparent outline-none w-24 text-[#FCFCFC] text-[15px]" name="endDate" required="" style={{colorScheme: 'dark'}} type="date" value="2024-08-28"/>
</div>
<div className="bg-[#1B1D22] rounded-lg flex items-center px-3 py-2">
<input className="bg-transparent outline-none w-16 text-[#FCFCFC] text-[15px]" id="endTime" name="endTime" required="" style={{colorScheme: 'dark'}} type="time" value="11:00"/>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 px-6">
<span className="text-[#FCFCFC] text-[16px] font-medium">All day</span>
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" id="allDay" name="allDay" type="checkbox"/>
<div className="w-11 h-6 bg-[#191D22] border border-[#31343F] peer-focus:outline-none rounded-full peer peer-checked:bg-[#00BAF4] transition-all"></div>
<div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#1B1D22] border border-[#31343F] rounded-full transition-all peer-checked:translate-x-5"></div>
</label>
</div>
<div className="flex flex-col gap-3 px-6 pt-4">
<div className="bg-[#1B1D22] rounded-lg">
<input className="w-full text-base bg-transparent text-[#FCFCFC] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00BAF4] placeholder-[#535D6C]" name="url" placeholder="Add URL" type="url"/>
</div>
<div className="bg-[#1B1D22] rounded-lg">
<textarea className="w-full text-base bg-transparent text-[#FCFCFC] border-0 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00BAF4] placeholder-[#535D6C] resize-none" name="notes" placeholder="Notes" rows="2"></textarea>
</div>
<div className="flex gap-3 mt-1 items-center bg-[#1B1D22] rounded-lg px-3 py-2">
<label className="flex items-center text-[#00BAF4] hover:text-[#00BAF4]/80 text-sm cursor-pointer">
<svg className="mr-1" fill="none" height="18" viewbox="0 0 18 18" width="18">
<path d="M7.5 11.5l7-7M7.5 11.5H4v-3.5" stroke="#00BAF4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
            Add File
            <input hidden="" id="attachments" multiple="" name="attachments" type="file"/>
</label>
<div className="text-xs text-[#00BAF4]" id="fileList"></div>
</div>
</div>
<div className="flex items-center justify-between gap-2 px-6 py-4">
<span className="text-[#C2C6CB] text-[15px]">Add Invitees</span>
<button className="bg-[#00BAF4] hover:bg-[#0998C0] text-white rounded-md w-9 h-9 flex items-center justify-center transition" id="addInviteeBtn" type="button">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 5v14M5 12h14" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="px-6 flex flex-wrap gap-2" id="inviteesList"></div>
<div className="px-6 flex gap-3 mt-4">
<button className="flex-1 bg-[#00BAF4] hover:bg-[#0998C0] text-black font-semibold py-3 rounded-md text-[17px] transition" type="submit">Create</button>
<button className="flex-1 bg-[#1B1D22] hover:bg-[#23262F] text-[#BBC3C9] border border-[#31343F] font-semibold py-3 rounded-md text-[17px] transition" type="button">List</button>
</div>
</form>
<div className="flex justify-center mt-6"><div className="w-[120px] h-1.5 bg-[#31343F] rounded-full"></div></div>
</div>


    </>
  );
}
