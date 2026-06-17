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
      
    // Activate lucide icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Mock data
    const sampleMessages = [
      { id: 1, body: "Paid ₹650 to Swiggy Ref No 1234", amount: "₹650", time: "1 m ago", parsed: true },
      { id: 2, body: "Debit of ₹1,299 at AMAZON *INDIA", amount: "₹1,299", time: "9 m ago", parsed: true },
      { id: 3, body: "You spent ₹200 at CAFE", amount: "₹200", time: "14 m ago", parsed: false },
      { id: 4, body: "₹5400 credited to your a/c", amount: "+₹5,400", time: "1 h ago", parsed: true },
      { id: 5, body: "OTP 334455 for txn of Rs.899", amount: "₹899", time: "2 h ago", parsed: false }
    ];

    // Populate list without the opacity 0 issue
    const msgList = document.getElementById("msgList");
    sampleMessages.forEach((msg) => {
      const li = document.createElement("li");
      li.className =
        "bg-zinc-800/40 border border-zinc-700 rounded-lg p-3 flex items-start space-x-3";
      li.innerHTML = `
          <div class="p-2 bg-zinc-700/30 rounded-md">
            <i data-lucide="message-circle" class="w-5 h-5 stroke-zinc-300"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs leading-5">${msg.body}</p>
            <div class="flex justify-between items-center mt-1">
              <span class="text-sm font-medium">${msg.amount}</span>
              <span class="text-[10px] text-zinc-500">${msg.time}</span>
            </div>
          </div>
          <span class="text-[10px] ${msg.parsed ? 'text-emerald-400' : 'text-amber-400'} whitespace-nowrap mt-1">
            ${msg.parsed ? 'Parsed' : 'Pending'}
          </span>`;
      msgList.appendChild(li);
    });
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); // Re-scan newly added nodes

    // Update last sync
    const lastSync = document.getElementById("lastSync");
    function updateLastSync() {
      const now = new Date();
      lastSync.textContent =
        "Last sync: " +
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    updateLastSync();

    // Toggle auto-sync
    const autoSync = document.getElementById("autoSync");
    autoSync.checked = true;
    autoSync.addEventListener("change", () => {
      document.getElementById("serverIndicator").classList.toggle("bg-emerald-500", autoSync.checked);
      document.getElementById("serverIndicator").classList.toggle("bg-zinc-500", !autoSync.checked);
    });

    // Refresh button
    document.getElementById("refreshBtn").addEventListener("click", () => {
      updateLastSync();
      // Here: trigger actual message fetch & upload
    });

    // Chart data
    const parsedCount = sampleMessages.filter((m) => m.parsed).length;
    const unparsedCount = sampleMessages.length - parsedCount;

    new Chart(document.getElementById("parseChart"), {
      type: "doughnut",
      data: {
        labels: ["Parsed", "Unparsed"],
        datasets: [{
          data: [parsedCount, unparsedCount],
          backgroundColor: ["#22c55e", "#f59e0b"],
          borderColor: "transparent"
        }]
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
        }
      }
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
      

<div className="min-h-screen flex flex-col px-4 py-6 max-w-sm mx-auto space-y-6">

<header className="flex items-center justify-between">
<h1 className="text-xl font-semibold tracking-tight flex items-center space-x-2">
<span>P</span><span className="text-indigo-400">T</span>
</h1>
<div className="flex items-center space-x-3">

<div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" id="serverIndicator"></div>
<button className="p-2 rounded-md hover:bg-zinc-800 transition" id="refreshBtn">
<i className="w-5 h-5 stroke-zinc-300" data-lucide="refresh-ccw"></i>
</button>
</div>
</header>

<section className="bg-zinc-800/40 backdrop-blur-md rounded-xl p-4 space-y-3 border border-zinc-700">
<div className="flex items-center justify-between">
<div>
<h2 className="text-sm font-medium">Home Server</h2>
<p className="text-xs text-zinc-400" id="lastSync">Last sync: —</p>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="autoSync" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-600 rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-4">
</div>
</label>
</div>
<p className="text-xs text-zinc-400 leading-snug">
        Automatically upload new messages to your private server and mark them when parsed.
      </p>
</section>

<section className="flex-1 overflow-y-auto space-y-4 pb-4">
<h2 className="text-sm font-medium">Recent Messages</h2>
<ul className="space-y-2" id="msgList">

</ul>
</section>

<section>
<h2 className="text-sm font-medium">Parsing Accuracy</h2>
<p className="text-xs text-zinc-400 mb-2">Ratio of parsed vs unparsed transactions</p>
<div className="w-full bg-zinc-800/40 rounded-xl border border-zinc-700 p-4">
<div className="relative mx-auto" style={{maxWidth: '220px'}}>
<canvas height="220" id="parseChart" width="220"></canvas>
</div>
</div>
</section>
</div>


    </>
  );
}
