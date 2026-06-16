import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
if (window.__AURA_SUPABASE_FIREWALL__) return;
window.__AURA_SUPABASE_FIREWALL__ = true;
var SUPABASE_HOST = "hoirqrkdgbmvpwutwuwj.supabase.co";
var BLOCKED_KEY_PATTERNS = [
/^sb-[a-z0-9-]+-auth-token$/i,
/^supabase\.auth\.token$/i
];
function isBlockedStorageKey(key) {
if (typeof key !== "string") return false;
for (var i = 0; i < BLOCKED_KEY_PATTERNS.length; i++) {
if (BLOCKED_KEY_PATTERNS[i].test(key)) return true;
}
return false;
}
function toAbsoluteUrl(input) {
try {
return new URL(input, window.location.href);
} catch {
return null;
}
}
function isSupabaseDestination(input) {
var parsed = toAbsoluteUrl(input);
if (!parsed) return false;
if (SUPABASE_HOST && parsed.host === SUPABASE_HOST) return true;
return parsed.host.endsWith(".supabase.co");
}
function pathLooksSensitive(input) {
var parsed = toAbsoluteUrl(input);
if (!parsed) return false;
return /^\/(auth|rest|functions)\/v1\//.test(parsed.pathname || "");
}
function headersContainAuth(headersLike) {
if (!headersLike) return false;
try {
if (typeof Headers !== "undefined" && headersLike instanceof Headers) {
return !!(headersLike.get("authorization") || headersLike.get("apikey"));
}
} catch {}
if (Array.isArray(headersLike)) {
for (var i = 0; i < headersLike.length; i++) {
var pair = headersLike[i] || [];
var name = String(pair[0] || "").toLowerCase();
if (name === "authorization" || name === "apikey") return true;
}
return false;
}
if (typeof headersLike === "object") {
var keys = Object.keys(headersLike);
for (var j = 0; j < keys.length; j++) {
var k = keys[j].toLowerCase();
if (k === "authorization" || k === "apikey") return true;
}
}
return false;
}
function requestLooksSensitive(input, init, extraHeaders) {
var url = "";
try {
if (typeof input === "string") {
url = input;
} else if (input && typeof input.url === "string") {
url = input.url;
}
} catch {}
var headers =
(init && init.headers) ||
(input && input.headers) ||
extraHeaders ||
null;
var hasAuthHeaders = headersContainAuth(headers);
if (hasAuthHeaders) return true;
if (!url) return false;
if (isSupabaseDestination(url) && pathLooksSensitive(url)) return true;
return false;
}
function patchStorage(storage, storageName) {
if (!storage) return;
var proto = Object.getPrototypeOf(storage);
if (!proto || proto.__auraSupabaseFirewallPatched) return;
var rawGetItem = proto.getItem;
var rawSetItem = proto.setItem;
var rawRemoveItem = proto.removeItem;
var rawKey = proto.key;
var rawLengthDescriptor = Object.getOwnPropertyDescriptor(proto, "length");
var rawLengthGet = rawLengthDescriptor && rawLengthDescriptor.get;
function getRawLength(instance) {
try {
if (rawLengthGet) return Number(rawLengthGet.call(instance) || 0);
} catch {}
try {
return Number(instance.length || 0);
} catch {}
return 0;
}
function getVisibleKeys(instance) {
var visible = [];
var total = getRawLength(instance);
for (var i = 0; i < total; i++) {
var currentKey = rawKey.call(instance, i);
if (currentKey && !isBlockedStorageKey(currentKey)) {
visible.push(currentKey);
}
}
return visible;
}
function maskBlockedKeyProperty(instance, keyName) {
if (!keyName || !isBlockedStorageKey(keyName)) return;
try {
Object.defineProperty(instance, keyName, {
configurable: true,
enumerable: false,
get: function () {
return null;
},
set: function () {
return true;
}
});
} catch {}
}
function syncBlockedKeyProperties(instance) {
var total = getRawLength(instance);
for (var i = 0; i < total; i++) {
var k = rawKey.call(instance, i);
if (k) maskBlockedKeyProperty(instance, k);
}
}
proto.getItem = function (key) {
syncBlockedKeyProperties(this);
if (isBlockedStorageKey(String(key))) return null;
return rawGetItem.call(this, key);
};
proto.setItem = function (key, value) {
if (isBlockedStorageKey(String(key))) return;
return rawSetItem.call(this, key, value);
};
proto.removeItem = function (key) {
if (isBlockedStorageKey(String(key))) return;
return rawRemoveItem.call(this, key);
};
proto.key = function (index) {
syncBlockedKeyProperties(this);
var visible = getVisibleKeys(this);
return visible[index] || null;
};
try {
Object.defineProperty(proto, "length", {
configurable: true,
enumerable: false,
get: function () {
syncBlockedKeyProperties(this);
return getVisibleKeys(this).length;
}
});
} catch {}
var proxyStorage = null;
try {
proxyStorage = new Proxy(storage, {
get: function (target, prop) {
if (typeof prop === "string" && isBlockedStorageKey(prop)) return null;
if (prop === "length") return getVisibleKeys(target).length;
if (prop === "key") {
return function (index) {
var visible = getVisibleKeys(target);
return visible[index] || null;
};
}
var value = target[prop];
if (typeof value === "function") return value.bind(target);
return value;
},
set: function (target, prop, value) {
if (typeof prop === "string" && isBlockedStorageKey(prop)) return true;
target[prop] = value;
return true;
},
has: function (target, prop) {
if (typeof prop === "string" && isBlockedStorageKey(prop)) return false;
return prop in target;
},
ownKeys: function (target) {
return getVisibleKeys(target);
},
getOwnPropertyDescriptor: function (target, prop) {
if (typeof prop === "string" && isBlockedStorageKey(prop)) {
return undefined;
}
if (prop === "length") {
return {
configurable: true,
enumerable: false,
value: getVisibleKeys(target).length,
writable: false
};
}
return Object.getOwnPropertyDescriptor(target, prop);
}
});
} catch {}
try {
if (proxyStorage) {
Object.defineProperty(window, storageName, {
configurable: true,
enumerable: true,
get: function () {
return proxyStorage;
}
});
}
} catch {}
syncBlockedKeyProperties(storage);
proto.__auraSupabaseFirewallPatched = true;
}
function patchCookieAccess() {
try {
var cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, "cookie");
if (!cookieDescriptor || !cookieDescriptor.configurable) return;
Object.defineProperty(document, "cookie", {
configurable: true,
enumerable: false,
get: function () {
return "";
},
set: function () {
return true;
}
});
} catch {}
}
function patchFetch() {
if (typeof window.fetch !== "function") return;
var rawFetch = window.fetch.bind(window);
window.fetch = function (input, init) {
if (requestLooksSensitive(input, init, null)) {
return Promise.reject(new Error("Blocked by Aura security policy"));
}
return rawFetch(input, init);
};
}
function patchXHR() {
if (typeof XMLHttpRequest === "undefined") return;
var rawOpen = XMLHttpRequest.prototype.open;
var rawSetHeader = XMLHttpRequest.prototype.setRequestHeader;
var rawSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.open = function (method, url) {
this.__auraRequestUrl = String(url || "");
this.__auraHeaders = {};
return rawOpen.apply(this, arguments);
};
XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
if (!this.__auraHeaders) this.__auraHeaders = {};
this.__auraHeaders[String(name || "").toLowerCase()] = String(value || "");
return rawSetHeader.apply(this, arguments);
};
XMLHttpRequest.prototype.send = function () {
if (requestLooksSensitive(this.__auraRequestUrl || "", null, this.__auraHeaders || null)) {
throw new Error("Blocked by Aura security policy");
}
return rawSend.apply(this, arguments);
};
}
function patchBeacon() {
if (typeof navigator.sendBeacon !== "function") return;
var rawBeacon = navigator.sendBeacon.bind(navigator);
navigator.sendBeacon = function (url, data) {
if (requestLooksSensitive(url, null, null)) return false;
return rawBeacon(url, data);
};
}
function patchWebSocket() {
if (typeof WebSocket === "undefined") return;
var RawWebSocket = WebSocket;
window.WebSocket = function (url, protocols) {
if (requestLooksSensitive(String(url || ""), null, null)) {
throw new Error("Blocked by Aura security policy");
}
return new RawWebSocket(url, protocols);
};
window.WebSocket.prototype = RawWebSocket.prototype;
}
patchStorage(window.localStorage, "localStorage");
patchStorage(window.sessionStorage, "sessionStorage");
patchCookieAccess();
patchFetch();
patchXHR();
patchBeacon();
patchWebSocket();
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://res.cloudinary.com/dyiiai9aj/video/upload/v1770895403/Eazziride_Loop_Video_okaza0.mp4"></video></div>

<nav className="fixed transition-all duration-300 bg-white w-full z-50 border-gray-100 border-b top-0 left-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<img alt="EazziRide" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bebcafcb-bc39-48d8-9100-d4b31c89fa37_320w.png"/>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1A1A1A]">
<a className="hover:text-[#F55A29] transition-colors font-jakarta tracking-tight" href="#shift">
            Why EazziRide
          </a>
<a className="hover:text-[#F55A29] transition-colors font-jakarta tracking-tight" href="#drivers">
            Drivers
          </a>
<a className="hover:text-[#F55A29] transition-colors font-jakarta tracking-tight" href="#safety">
            Safety
          </a>
<a className="bg-[#F55A29] text-white px-5 py-2 rounded-full hover:bg-[#d64518] transition-colors font-jakarta font-semibold text-xs tracking-wide uppercase" href="#download">
            Get App
          </a>
</div>
</div>
</nav>

<section className="relative w-full h-screen min-h-[700px] flex flex-col md:flex-row bg-white overflow-hidden pt-20">
<div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 order-2 md:order-1">
<div className="max-w-xl w-full">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-jakarta text-[#1A1A1A] tracking-tighter leading-[0.95] mb-8">
            Your City,
            <br/>
            Your Way.
          </h1>
<p className="leading-relaxed md:text-xl text-lg font-medium text-[#6B6B6B] font-jakarta max-w-md mb-12">
            Move freely across Lagos with a ride experience built around you —
            simple, safe, transparent.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
<a className="bg-[#F55A29] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#d64518] transition-colors font-jakarta" href="#download">
              Get the App
            </a>
<a className="group flex items-center gap-2 text-[#1A1A1A] font-semibold hover:text-[#F55A29] transition-colors font-jakarta" href="#drivers">
              Drive with EazziRide
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
</a>
</div>
</div>
</div>
<div className="w-full md:w-1/2 h-[50vh] md:h-full order-1 md:order-2">
<img alt="Lifestyle" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1d5dbc-be76-4efc-8e94-a4be89e0f327_3840w.jpg"/>
</div>
</section>

<section className="bg-white pt-40 pb-40" id="shift">
<div className="text-center max-w-5xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] tracking-tighter font-jakarta mb-6 leading-none">
    Mobility should feel human.
  </h2>
<div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-6">
<p className="text-lg md:text-xl text-[#6B6B6B] font-jakarta font-medium tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
      No hidden deductions.
    </p>
<p className="text-lg md:text-xl text-[#6B6B6B] font-jakarta font-medium tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
      No confusing pricing.
    </p>
<p className="text-lg md:text-xl text-[#6B6B6B] font-jakarta font-medium tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
      No complicated systems.
    </p>
</div>
<p className="text-xl md:text-2xl text-[#1A1A1A] font-jakarta font-semibold tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
    EazziRide keeps it clear.
  </p>
</div>
</section>
<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gray-100">
<img alt="Driver opening door" className="grayscale-[10%] hover:grayscale-0 transition-all duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cc39af9-dcf5-4690-b625-7677a2a80f82_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center max-w-lg">
<h2 className="text-4xl md:text-6xl font-bold font-jakarta text-[#1A1A1A] tracking-tighter leading-tight mb-8">
              Designed around
              <br/>
              people.
            </h2>
<p className="text-lg text-[#6B6B6B] font-jakarta leading-relaxed">
              We believe in technology that serves connection, not complicates
              it. Every feature we build starts with a simple question: does
              this make the day better for our drivers and riders?
            </p>
</div>
</div>
</div>
</section>


<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="md:col-span-5 lg:col-span-4">
<span className="block text-xs font-semibold font-jakarta tracking-widest text-[#6B6B6B] uppercase mb-6">
              The Difference
            </span>
<h2 className="text-5xl md:text-6xl font-semibold font-jakarta text-[#1A1A1A] tracking-tight leading-none mb-8">
              Built for
              <br/>
              clarity.
            </h2>
<p className="text-lg text-[#6B6B6B] font-jakarta leading-relaxed">
              We removed the noise. No hidden deductions. No unpredictable
              pricing. Just transparent rides and fair opportunities.
            </p>
</div>
<div className="md:col-span-7 lg:col-span-8">
<div className="divide-y divide-gray-100 border-t border-gray-100 border-b">
<div className="group py-12 hover:pl-6 transition-all duration-300 cursor-default">
<h3 className="text-2xl font-semibold font-jakarta text-[#1A1A1A] mb-3 group-hover:text-[#F55A29] transition-colors tracking-tight">
                  Transparent earnings
                </h3>
<p className="text-[#6B6B6B] font-jakarta text-lg leading-relaxed max-w-lg">
                  Drivers see what they earn before and after every trip.
                </p>
</div>
<div className="group py-12 hover:pl-6 transition-all duration-300 cursor-default">
<h3 className="text-2xl font-semibold font-jakarta text-[#1A1A1A] mb-3 group-hover:text-[#F55A29] transition-colors tracking-tight">
                  Open fare negotiation
                </h3>
<p className="text-[#6B6B6B] font-jakarta text-lg leading-relaxed max-w-lg">
                  Riders and drivers agree — not dictated by an algorithm.
                </p>
</div>
<div className="group py-12 hover:pl-6 transition-all duration-300 cursor-default">
<h3 className="text-2xl font-semibold font-jakarta text-[#1A1A1A] mb-3 group-hover:text-[#F55A29] transition-colors tracking-tight">
                  Human-centered safety
                </h3>
<p className="text-[#6B6B6B] font-jakarta text-lg leading-relaxed max-w-lg">
                  Live tracking, verified drivers, trusted contacts.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#1A1A1A] py-32 md:py-40 relative overflow-visible" id="drivers">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1">
<h2 className="text-5xl md:text-6xl font-bold font-jakarta text-white tracking-tighter leading-none mb-12">
              Your hustle
              <br/>
              deserves clarity.
            </h2>
<ul className="space-y-6 mb-12">
<li className="text-[#F5F5F7] text-xl font-jakarta font-medium border-l-2 border-[#F55A29] pl-6">
                Transparent commissions
              </li>
<li className="text-[#F5F5F7] text-xl font-jakarta font-medium border-l-2 border-[#F55A29] pl-6">
                Weekly settlements
              </li>
<li className="text-[#F5F5F7] text-xl font-jakarta font-medium border-l-2 border-[#F55A29] pl-6">
                Real demand insights
              </li>
</ul>
<a className="bg-[#F55A29] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#d64518] transition-colors font-jakarta inline-block" href="#signup">
              Start driving
            </a>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-[4/3] md:aspect-[16/10] bg-gray-800 md:-mb-24 shadow-2xl relative z-20">
<img alt="Driver at dusk" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a09ea9c-f4ca-4dcf-8096-e10827e858c1_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>
<section className="md:pt-48 md:pb-32 bg-white pt-32 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div className="space-y-10 order-2 md:order-1">
<h2 className="md:text-6xl leading-none text-5xl font-bold text-[#1A1A1A] tracking-tighter font-jakarta">
              Comfortable rides.
              <br/>
              Trusted safety.
            </h2>
<p className="text-lg text-[#6B6B6B] font-jakarta leading-relaxed max-w-md">
              Whether you're heading to a meeting on the Island or catching a
              flight, step into a car that feels like an upgrade.
            </p>
<ul className="space-y-4">
<li className="text-[#1A1A1A] font-jakarta font-medium text-lg flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#F55A29] rounded-full"></span>
                Live trip sharing
              </li>
<li className="text-[#1A1A1A] font-jakarta font-medium text-lg flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#F55A29] rounded-full"></span>
                Verified drivers
              </li>
</ul>
</div>
<div className="aspect-[16/10] overflow-hidden bg-gray-100 order-1 md:order-2">
<img alt="Rider stepping out" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/632a8af1-b18d-45ed-bf49-d45ae2d0c1f1_1600w.jpg"/>
</div>
</div>
</div>
</section>
<section className="md:py-16 bg-white w-full pt-12 pb-12">
<div className="w-full">
<div className="aspect-video overflow-hidden bg-gray-900 w-full relative shadow-sm group">
<div className="absolute top-0 right-0 bottom-0 left-0 z-[25] h-full w-full">
<video autoplay="" className="h-full w-full object-cover" id="video-aura-emljn1ke2b090hrh" loop="" muted="" playsinline="" src="https://res.cloudinary.com/dyiiai9aj/video/upload/v1770895403/Eazziride_Loop_Video_okaza0.mp4"></video>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent"></div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<p className="px-4 text-center font-jakarta text-4xl font-semibold tracking-tight text-white drop-shadow-sm md:text-5xl">Safety that moves with you.</p>
</div>
</div>
<div className="pointer-events-none bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent absolute top-0 right-0 bottom-0 left-0 z-10"></div>

<div className="absolute top-6 right-6 z-30">
<button aria-label="Toggle playback" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 group-hover:scale-105" onclick="const v = document.getElementById('video-aura-emljn1ke2b090hrh'); const p = this.querySelector('.play-icon'); const s = this.querySelector('.pause-icon'); if(v.paused){v.play();p.classList.add('hidden');s.classList.remove('hidden')}else{v.pause();p.classList.remove('hidden');s.classList.add('hidden')}">
<svg className="pause-icon lucide lucide-pause" fill="currentColor" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="1" width="4" x="6" y="4"></rect><rect height="16" rx="1" width="4" x="14" y="4"></rect></svg>
<svg className="play-icon hidden lucide lucide-play pl-1" fill="currentColor" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
<div className="absolute bottom-12 left-0 w-full flex justify-center z-20 px-4">
<p className="text-white/95 font-jakarta text-2xl md:text-3xl font-semibold tracking-tight opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards] drop-shadow-sm text-center">
        Safety that moves with you.
      </p>
</div>
</div>
</div>
</section>

<section className="-mt-12 md:-mt-16 bg-[#F5F5F7] z-10 pt-32 pb-32 relative" id="safety">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-24 max-w-2xl mx-auto">
<h2 className="text-4xl font-bold text-[#1A1A1A] tracking-tight font-jakarta mb-6 md:text-6xl">
        Built-in safety.
      </h2>
<p className="leading-relaxed text-2xl font-medium text-[#6B6B6B] font-jakarta">
        Technology that looks out for you quietly.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-black/5">

<div className="aspect-[3/4] flex overflow-hidden group-hover:bg-gray-100/50 transition-colors bg-gray-50 w-full border-gray-100 border-b pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<img alt="Trusted Contact App Screen" className="transition-transform duration-500 ease-out group-hover:scale-[1.02] w-full h-full object-cover rounded-2xl shadow-[rgba(50,_50,_93,_0.25)_0px_30px_60px_-12px_inset,_rgba(0,_0,_0,_0.3)_0px_18px_36px_-18px_inset]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78570211-2be5-4ff7-ae4c-19470d4c8102_800w.png"/>
</div>

<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold font-jakarta text-[#1A1A1A] mb-3 tracking-tight">
            Trusted Contacts
          </h3>
<p className="leading-relaxed flex-grow text-base text-[#6B6B6B] font-jakarta mb-8">Automatically share your trip with the people who matter most, so they can follow along in real time</p>
<a className="inline-flex items-center hover:gap-2 transition-all group-hover:translate-x-1 text-sm font-medium text-[#F55A29] font-jakarta" href="#">
</a>
</div>
</div>

<div className="group bg-[#1A1A1A] rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-white/5">

<div className="aspect-[3/4] flex overflow-hidden group-hover:bg-[#252525] transition-colors bg-[#222] w-full border-white/5 border-b pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="border-dashed flex bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5768520c-6941-414b-959e-189677949634_800w.png)] bg-cover border-0 rounded-2xl scale-100 items-center justify-center">
</div>
</div>

<div className="flex flex-col flex-grow pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl font-semibold text-white tracking-tight font-jakarta mb-3">Verified Drivers</h3>
<p className="leading-relaxed flex-grow text-base text-slate-50 font-jakarta mb-8">Digitally and physically vetted drivers, with profiles, ratings, and reviews clearly visible to riders.</p>
<a className="hidden inline-flex items-center hover:gap-2 transition-all group-hover:translate-x-1 text-sm font-medium text-[#F55A29] font-jakarta" href="#">
            See how it works 
            <svg className="lucide lucide-arrow-right ml-1.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-black/5">

<div className="aspect-[3/4] flex overflow-hidden group-hover:bg-gray-100/50 transition-colors bg-gray-50 w-full border-gray-100 border-b pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="border-dashed flex w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edbc6dfe-db5f-43dc-9cb8-9c9dbd2baa72_800w.png)] bg-cover bg-center border-gray-200 border-0 rounded-2xl items-center justify-center">
</div>
</div>

<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold text-[#1A1A1A] tracking-tight font-jakarta mb-3">Live-Tracking</h3>
<p className="leading-relaxed flex-grow text-base text-[#6B6B6B] font-jakarta mb-8">Real-time monitoring for every ride, so you and your loved ones always know where you are.</p>
<a className="inline-flex items-center hover:gap-2 transition-all group-hover:translate-x-1 text-sm font-medium text-[#F55A29] font-jakarta" href="#">
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-white">
<div className="max-w-fit mr-auto ml-auto pr-6 pl-6">
<div className="max-w-4xl">
<h2 className="text-5xl md:text-7xl font-semibold font-jakarta tracking-tighter leading-[1.1] text-[#1A1A1A] text-center mx-auto">
            Transparent pricing.
            <br className=""/>
<span className="text-[#1A1A1A]/40">Human-first design.</span>
<br/>
<span className="text-[#1A1A1A]/40">Built for African cities.</span>
</h2>
</div>
</div>
</section>


<section className="py-40 bg-[#1A1A1A]" id="download">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="md:text-7xl text-5xl font-bold text-white tracking-tighter font-jakarta mb-16">Ready to move your way?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="w-full sm:w-auto px-10 py-5 bg-[#F55A29] text-white font-semibold rounded-full hover:bg-[#d64518] transition-all font-jakarta text-lg">
            Download EazziRide
          </button>
<button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all font-jakarta text-lg">
            Become a driver
          </button>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-24">
<div>
<h4 className="font-bold text-[#1A1A1A] mb-6 font-jakarta text-xs uppercase tracking-widest">
              Company
            </h4>
<ul className="space-y-4 text-[#6B6B6B] text-sm font-jakarta font-medium">
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Press
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#1A1A1A] mb-6 font-jakarta text-xs uppercase tracking-widest">
              Drivers
            </h4>
<ul className="space-y-4 text-[#6B6B6B] text-sm font-jakarta font-medium">
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Apply to Drive
                </a>
</li>
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Requirements
                </a>
</li>
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Earnings
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-[#1A1A1A] mb-6 font-jakarta text-xs uppercase tracking-widest">
              Legal
            </h4>
<ul className="space-y-4 text-[#6B6B6B] text-sm font-jakarta font-medium">
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-[#F55A29] transition-colors" href="#">
                  Safety Policy
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#1A1A1A] mb-6 font-jakarta text-xs uppercase tracking-widest">
              Support
            </h4>
<div className="flex gap-6 text-[#6B6B6B]">
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
<iconify-icon icon="brandico:linkedin" width="20"></iconify-icon>
</a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100">
<p className="text-[#6B6B6B] text-xs font-jakarta">
            © 2026 EazziRide Technologies.
          </p>
</div>
</div>
</footer>

    </>
  );
}
