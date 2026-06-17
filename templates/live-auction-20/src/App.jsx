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



const socket = io('{{ env('SOCKET_URL') }}', {
secure: true,
transports: ['websocket', 'polling']
});
let currentLotNo = {{ $currentLot->lot_no }};
let eventData = null;
let lotData = null;
let lotCd = 0;
let countdown = 0;
let currentBidder = null;
let currentBidPrice = 0;
let preview = true;
updateLotStatus("SYS", 'Socket Connecting ... ');
socket.on('connect', () => {
updateLotStatus("SYS", "Connected to Server !!");
socket.emit("ask", {});
});
socket.on('disconnect', () => {
updateLotStatus("SYS", "Disconnected from Server !!");
});
socket.on('eventData', (data) => {
eventData = data;
updateLotStatus("EVT", JSON.stringify(eventData));
const now = new Date();
const scheduleDateTime = new Date(eventData.schedule_date + 'T' + eventData.schedule_time);
$("h1").text(eventData.title);
console.log(data.feature_lot_first[0].id);
setTimeout(() => slideAll(0), 1000);
if (now >= scheduleDateTime) {
$('#prepagecd').text('START');
preview = false;
fadeoutprepage();
} else {
function updateCountdown(scheduleDateTime) {
const diff = scheduleDateTime - new Date();
countdown = Math.floor(diff / 1000);
if (countdown <= 0) {
$('#prepagecd').text('STARTING !');
fadeoutprepage();
} else if (countdown <= 10) {
$('#prepagecd').text('Ready in ' + countdown + ' sec');
$('#ding')[0].play();
countdown--;
setTimeout(() => updateCountdown(scheduleDateTime), 500);
} else {
// $('#ding')[0].play();
const hours = Math.floor(countdown / 3600);
const minutes = Math.floor((countdown % 3600) / 60);
const seconds = countdown % 60;
const formatted =
String(hours).padStart(2, '0') + ':' +
String(minutes).padStart(2, '0') + ':' +
String(seconds).padStart(2, '0');
$('#prepagecd').text("Start at " + formatted);
countdown--;
setTimeout(() => updateCountdown(scheduleDateTime), 500);
}
}
updateCountdown(scheduleDateTime);
}
});
socket.on('nextLot', (data) => {
console.log("Next Lot:", data);
if (data.online) {
updateOnlineCount(data.online);
}
currentBidder = data.currentBidder;
currentBidPrice = data.currentBidPrice;
eventData = data.eventData;
lotData = data.lotInfo;
lotCd = data.lotCd;
if (eventData && eventData.id != {{ $event->id }}) {
console.log('Event ID mismatch, ignoring lot data');
socket.disconnect();
return;
} else {
preview = false;
fadeoutprepage();
if (lotData) {
console.log('lotData:', lotData);
callNextLot();
} else {
console.log('No lot data received yet , wait auctioneer call start');
}
}
});
socket.on('cd', (data) => {
console.log("CD:", data);
//lotCd = data;
console.log("COMPARE CD VS LOCAL REMAINING :: ", data.cd, "VS", remaining);
});
socket.on('update', (data) => {
console.log('Update from server:', data);
if (data.online) {
updateOnlineCount(data.online);
}
if (data.type && data.type === 'updateBid') {
currentBidder = data.currentBidder;
currentBidPrice = data.currentBidPrice;
lotCd = data.lotcd;
message = data.message;
updateLotStatus("Bid", `Bid Update: ${message}`);
$('#currentBidValue').text(currentBidPrice ? parseFloat(currentBidPrice).toLocaleString() : '-');
$('#highestBidder').text(currentBidder ? currentBidder : 'N/A');
pushBidRow(currentBidPrice, currentBidder, "Online");
remaining = 16;
updateBidUI();
} else if (data.type && data.type === 'broadcast') {
updateLotStatus("Auctioneer", `${data.message}`);
} else if (data.type && data.type === 'alert') {
updateLotStatus("ALERT", `${data.message}`);
appendAlert(`${data.message}`);
}
});
socket.on('message', (data) => {
console.log('Message from server:', data);
if (data.type && data.type === 'message') {
if (data.online) {
updateOnlineCount(data.online);
}
updateLotStatus("SYS", `Event: ${data.message}`);
if (data.conclude) {
if (data.conclude == 'sold') {
finalizeSale('sold');
} else {
finalizeSale('unsold');
}
} else if (data.complete) {
const h2 = document.querySelector('h2');
h2.textContent = 'Auction Complete';
socket.disconnect();
}
}
});
function updateLotStatus(channel, message) {
console.log(channel + ": " + message);
}
function updateOnlineCount(num) {
if (num == 0) {
num = Math.floor(Math.random() * (20 - 3 + 1)) + 3;
}
document.getElementById('onlineCount').textContent = num;
}
function callNextLot() {
const statusEl = document.getElementById('lot-status-appear');
if (statusEl) {
statusEl.remove();
}
$('#lot_no').text(lotData.lot_no);
$('#makemodel').text(lotData.vehicle.makemodel);
$('#year').text(lotData.vehicle.year);
$('#lot_mileage').text(lotData.vehicle.mileage + 'k');
$('#lot_location').text(lotData.vehicle.location);
$('#lot_location2').text(lotData.vehicle.location);
$('#reservePrice').text('RM ' + parseFloat(lotData.reserved_price).toLocaleString());
$('#lot_remarks').text(lotData.remarks ? lotData.remarks : 'No Remark');
$('#lotTag').text(lotData.lot_no);
$('#vehicleTitle').text(lotData.vehicle.makemodel + ' (' + lotData.vehicle.year + ') ' + lotData.vehicle
.car_reg_no);
$('#currentBidValue').text(currentBidPrice ? fmtRM(currentBidPrice) : '-');
$('#highestBidder').text(currentBidder ? currentBidder : 'N/A');
currentLotNo = lotData.lot_no;
previewNextLot();
slideShow(lotData.id);
startTimer();
}
function previewNextLot() {
for (const lot of lotList) {
if (lot.lot_no == currentLotNo) {
if (lotList.indexOf(lot) + 1 < lotList.length) {
const nextIndex = lotList.indexOf(lot) + 1;
const nextLot = lotList[nextIndex];
$('#nextLotInfo').html('<span class="text-white/60 font-normal">Lot ' + nextLot.lot_no + '</span> <span class="mx-2 text-white/20">|</span> ' + nextLot.makemodel + ' (' + nextLot
.year + ')');
} else {
$('#nextLotInfo').text('No more lots. Auction Complete');
}
break;
}
}
}
function appendAlert(messageText) {
const container = document.createElement('div');
container.className = "flex items-center gap-2.5 px-4";
// Replaced manual SVG creation with Lucide attribute for cleanliness
// The icons will be rendered by lucide.createIcons() call
container.innerHTML = `
<i data-lucide="bell-ring" class="w-4 h-4 text-emerald-400"></i>
<span class="font-medium text-emerald-100 tracking-wide">${messageText}</span>
`;
$("#alertContainer").append(container);
if (window.lucide) lucide.createIcons();
}
let lotImages = {};
let allImages = [];
let lotList = [];
@if (isset($lots))
@foreach ($lots as $lot)
tmpArray = [];
@foreach ($lot->images as $img)
tmpArray.push("{{ asset('storage/' . $img->image_path) }}");
allImages.push({
id: {{ $lot->id }},
src: "{{ asset('storage/' . $img->image_path) }}"
});
@endforeach
lotImages[{{ $lot->id }}] = tmpArray;
lotList.push({
id: "{{ $lot->id }}",
car_reg_no: "{{ $lot->car_reg_no }}",
year: "{{ $lot->year }}",
makemodel: "{{ $lot->makemodel }}",
reserve_price: "{{ $lot->reserved_price }}",
lot_no: "{{ $lot->lot_no }}",
});
@endforeach
Object.values(lotImages).forEach(imgArr => {
imgArr.forEach(src => {
const img = new Image();
img.src = src;
});
});
@endif
function slideShow(lotId) {
const images = lotImages[lotId];
if (!images || images.length === 0) {
console.warn("No images found for lot ID:", lotId);
return;
}
const imageLoader = document.getElementById('imageFeed');
imageLoader.src = images[0];
}
function slideAll(currentIndex) {
const imageLoader = document.getElementById('imageLoader');
// Simplified loader logic for better performance
imageLoader.innerHTML = '';
const imgElement = document.createElement('img');
imgElement.src = allImages[currentIndex].src;
imgElement.className = "w-full max-w-md h-auto object-cover rounded-xl shadow-2xl border border-white/10 opacity-0 transform translate-y-4 loader-transition";
imageLoader.appendChild(imgElement);
setTimeout(() => {
imgElement.classList.remove('opacity-0', 'translate-y-4');
}, 50);
if (preview) {
setTimeout(() => {
slideAll((currentIndex + 1) % allImages.length);
}, 3000);
}
}
function fadeoutprepage() {
const prepage = document.getElementById('prepage');
prepage.style.transition = "opacity 0.7s ease-out";
prepage.style.opacity = 0;
setTimeout(() => {
prepage.classList.add('hidden');
}, 700);
}
setTimeout(() => {
previewNextLot();
}, 500);



        // Init Icons
        lucide.createIcons();

        const fmtRM = (v) => "RM " + parseFloat(v).toLocaleString("en-MY");

        // Element Refs
        const countdownEl = document.getElementById("countdown");
        const progressRing = document.getElementById("progressRing");
        const timeBar = document.getElementById("timeBar");
        const bidFeedEl = document.getElementById("bidFeed");
        const phaseEl = document.getElementById("phase");
        const mainSection = document.getElementById("mainSection");

        // Ring Config
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;

        // Timer Vars
        let duration = 15;
        let remaining = duration;
        let tickInterval = null;

        function setRingProgress() {
            const progress = Math.max(remaining, 0) / duration;
            const offset = circumference - (progress * circumference);
            progressRing.style.strokeDashoffset = offset;
            
            timeBar.style.width = (progress * 100) + "%";

            // Color logic
            if (remaining <= 5) {
                progressRing.setAttribute('stroke', '#ef4444'); // red-500
                timeBar.className = "h-full bg-red-500 rounded-full transition-all duration-300 ease-linear";
            } else {
                progressRing.setAttribute('stroke', '#10b981'); // emerald-500
                timeBar.className = "h-full bg-emerald-500 rounded-full transition-all duration-300 ease-linear";
            }
        }

        function updateBidUI() {
            // Optional: Trigger animations on bid update
        }

        function pushBidRow(amount, id, type) {
            const li = document.createElement("li");
            li.className = "bg-white/5 rounded-lg p-3 flex items-center justify-between border border-transparent hover:border-white/10 transition-colors animate-[fadeIn_0.3s_ease-out]";
            
            const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            
            li.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <i data-lucide="gavel" class="w-4 h-4 text-emerald-400"></i>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-white tracking-tight">${fmtRM(amount)}</div>
                        <div class="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Bidder ${id}</div>
                    </div>
                </div>
                <div class="text-xs text-slate-600 font-mono">${timeStr}</div>
            `;
            
            bidFeedEl.prepend(li);
            if (bidFeedEl.children.length > 5) bidFeedEl.lastChild.remove();
            lucide.createIcons();
        }

        function startTimer() {
            phaseEl.textContent = "Bidding Active";
            phaseEl.className = "text-lg font-medium text-white mb-2";
            
            remaining = (lotCd > 0) ? lotCd - Math.floor(Date.now() / 1000) : duration;
            
            clearInterval(tickInterval);
            tickInterval = setInterval(() => {
                remaining -= 0.1; 
                if (remaining <= 0) {
                    remaining = 0;
                    countdownEl.textContent = "0";
                } else {
                    countdownEl.textContent = Math.ceil(remaining);
                }
                setRingProgress();
            }, 100);
        }

        function finalizeSale(status) {
            clearInterval(tickInterval);
            const isSold = status === 'sold';
            const text = isSold ? "SOLD" : "UNSOLD";
            const colorClass = isSold ? "bg-red-600" : "bg-slate-600";
            
            phaseEl.textContent = isSold ? "Lot Sold" : "Lot Unsold";
            phaseEl.className = `text-lg font-bold ${isSold ? 'text-red-500' : 'text-slate-400'} mb-2`;

            const stamp = document.createElement('div');
            stamp.id = 'lot-status-appear';
            stamp.className = `absolute top-1/2 left-1/2 z-50 flex items-center justify-center stamp-animate pointer-events-none`;
            
            // Modern Stamp Design
            stamp.innerHTML = `
                <div class="${colorClass} text-white px-12 py-4 rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-md">
                    <span class="text-6xl md:text-8xl font-bold tracking-tighter uppercase drop-shadow-md">${text}</span>
                </div>
            `;
            
            // Append to main video section container
            const container = document.querySelector('#mainSection > div');
            container.appendChild(stamp);

            countdownEl.textContent = "END";
            progressRing.style.strokeDashoffset = circumference; // empty ring
        }

        // Add tailwind keyframes for fade in
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-5px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);

    
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
      
<audio id="ding" preload="auto" src="{{ asset('storage/rang.mp3') }}"></audio>

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" id="prepage">
<div className="flex flex-col items-center max-w-3xl px-6 text-center">
<img alt="GMart Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain mb-8 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'storage/gmart-logo-round.png') }}"/>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6"></h1>
<div className="text-xl md:text-2xl font-medium text-emerald-400 tracking-wide" id="prepagecd"></div>
<div className="mt-12 w-full flex justify-center" id="imageLoader"></div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col h-full">

<header className="flex-none px-6 py-4 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
<div className="flex items-center justify-between max-w-[1920px] mx-auto w-full">
<div className="flex items-center gap-5">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
<i className="w-5 h-5 text-white" data-lucide="gavel"></i>
</div>
<div>
<h1 className="text-lg font-semibold text-white tracking-tight leading-none">G-Mart Auction</h1>
<div className="flex items-center gap-2 mt-1.5 text-xs font-medium text-slate-400">
<span>{{ Carbon\Carbon::parse($event-&gt;schedule_date)-&gt;format('d M Y') }}</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>{{ $event-&gt;branch-&gt;name }}</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>{{ Carbon\Carbon::parse($event-&gt;schedule_time)-&gt;format('h:i A') }}</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide">LIVE FEED</span>
</div>
</div>
</div>
</header>

<main className="flex-1 min-h-0 p-4 md:p-6 lg:p-8 max-w-[1920px] mx-auto w-full">
<div className="grid grid-cols-12 gap-6 h-full">

<section className="col-span-12 lg:col-span-9 flex flex-col h-full gap-4 relative group" id="mainSection">

<div className="relative flex-1 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">

<img alt="Live Feed" className="w-full h-full object-cover opacity-90 transition-opacity duration-500" id="imageFeed" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'storage/' . $currentLot-&gt;images[0]-&gt;image_path) }}"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

<div className="absolute top-6 left-6">
<div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-2 pr-4">
<div className="bg-white/10 rounded px-2 py-1">
<span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">LOT</span>
</div>
<span className="text-xl font-semibold text-white tracking-tight tabular-nums" id="lotTag">{{ $currentLot-&gt;lot_no }}</span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-end justify-between gap-6">
<div className="flex-1 max-w-3xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-3 drop-shadow-lg" id="vehicleTitle">
                                    {{ $currentLot-&gt;makemodel }} ({{ $currentLot-&gt;year }}) {{ $currentLot-&gt;car_reg_no }}
                                </h2>
<div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
<div className="flex items-center gap-2 bg-white/5 backdrop-blur px-3 py-1.5 rounded-md border border-white/5">
<i className="w-4 h-4 text-indigo-400" data-lucide="map-pin"></i>
<span id="lot_location2">{{ $currentLot-&gt;location }}</span>
</div>
<div className="flex items-center gap-2 bg-white/5 backdrop-blur px-3 py-1.5 rounded-md border border-white/5">
<i className="w-4 h-4 text-indigo-400" data-lucide="gauge"></i>
<span>Mileage: {{ $currentLot-&gt;vehicle?-&gt;mileage ?? 'n/a' }}k</span>
</div>
<div className="flex items-center gap-2 bg-white/5 backdrop-blur px-3 py-1.5 rounded-md border border-white/5">
<i className="w-4 h-4 text-emerald-400" data-lucide="tag"></i>
<span>Reserve: <span id="reservePrice">RM {{ $currentLot-&gt;reserve_price }}</span></span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl min-w-[280px] shadow-2xl">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-red-500 uppercase tracking-widest">Current Bid</span>
<div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Active
                                        </div>
</div>
<div className="text-4xl lg:text-5xl font-semibold text-white tracking-tight tabular-nums" id="currentBidValue">RM -</div>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
<span>Highest Bidder</span>
<span className="font-medium text-white bg-white/10 px-2 py-0.5 rounded" id="highestBidder">-</span>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">

<div className="bg-slate-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden shadow-lg">
<div className="absolute top-0 right-0 p-4 opacity-20">
<i className="w-24 h-24 text-white" data-lucide="timer"></i>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="relative w-32 h-32 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#1e293b" strokeWidth="6"></circle>
<circle className="transition-all duration-300 ease-linear" cx="50" cy="50" fill="none" id="progressRing" r="45" stroke="#10b981" stroke-dasharray="283" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-4xl font-semibold text-white tracking-tighter tabular-nums" id="countdown">15</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Seconds</span>
</div>
</div>
<div className="mt-4 w-full text-center">
<div className="text-lg font-medium text-white mb-2" id="phase">Bidding Active</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full transition-all duration-300 ease-linear w-full" id="timeBar"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
<i className="w-5 h-5 text-indigo-400 mb-2" data-lucide="users"></i>
<span className="text-xl font-semibold text-white tabular-nums" id="onlineCount">{{ random_int(12, 45) }}</span>
<span className="text-xs text-slate-500">Online Users</span>
</div>
<div className="bg-slate-900 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
<i className="w-5 h-5 text-sky-400 mb-2" data-lucide="eye"></i>
<span className="text-xl font-semibold text-white tabular-nums">{{ random_int(100, 300) }}</span>
<span className="text-xs text-slate-500">Views</span>
</div>
</div>

<div className="flex-1 min-h-[200px] bg-slate-900 border border-white/10 rounded-2xl flex flex-col overflow-hidden">
<div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<h3 className="text-sm font-medium text-white">Live Activity</h3>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-75"></span>
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-150"></span>
</div>
</div>
<ul className="flex-1 overflow-y-auto p-2 space-y-1" id="bidFeed">

</ul>
</div>

<div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-white/10 rounded-xl p-5">
<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-2 block">Up Next</span>
<div className="text-sm font-medium text-slate-200 leading-relaxed" id="nextLotInfo">
                            Loading next lot...
                        </div>
</div>
</aside>
</div>
</main>

<footer className="flex-none border-t border-white/5 bg-slate-950 relative overflow-hidden h-12 flex items-center">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
<div className="marquee whitespace-nowrap flex items-center gap-12 text-sm font-medium text-slate-400" id="alertContainer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-sky-500" data-lucide="info"></i>
<span>Minimum deposit RM1,500 required to bid</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="shield-check"></i>
<span>All items sold as-is where-is. T&amp;C apply.</span>
</div>
                 @foreach ($messages as $message)
                    <div className="flex items-center gap-2 text-indigo-300">
<i className="w-4 h-4" data-lucide="message-square"></i>
<span>{{ $message-&gt;message }}</span>
</div>
                @endforeach
            </div>
</footer>
</div>



    </>
  );
}
