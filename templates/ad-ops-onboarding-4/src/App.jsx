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


        // Card data
        const cards = [
            {
                id: 'Y1', slug: 'y1-standard-yardi', pms: 'Yardi', title: 'Standard Yardi', subtitle: 'Yardi CRM + Site Manager',
                website: 'Yardi', utmSource: 'Client / Support', gradient: 'from-zinc-50 to-zinc-100',
                textColor: 'text-zinc-200', hoverColor: 'text-zinc-300',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}],
                filter: 'yardi',
                details: {
                    overview: 'Standard Yardi configuration using native CRM and Site Manager. This is the most common setup for properties managed through Yardi Voyager.',
                    steps: [
                        'Confirm client has active Yardi CRM + Site Manager license',
                        'Request GA4 property access from client or support team',
                        'Configure UTM parameters — source provided by client or support',
                        'Set up conversion tracking in GA4 for key events (tour, apply, contact)',
                        'Verify lead attribution is flowing correctly in Yardi CRM',
                        'QA all landing pages and form submissions'
                    ],
                    utmFormat: '?utm_source={source}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Yardi CRM Seat', 'GA4 Editor Access', 'Site Manager Admin'],
                    notes: 'UTM source is typically provided by the client or their support team. Always confirm before launching campaigns.'
                }
            },
            {
                id: 'Y2', slug: 'y2-jonah-stack', pms: 'Yardi', title: 'Jonah Stack', subtitle: 'Yardi CRM + Site Manager',
                website: 'Jonah', utmSource: 'Client / Support', gradient: 'from-zinc-50 to-zinc-100',
                textColor: 'text-zinc-200', hoverColor: 'text-zinc-300',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}, {label: 'GTM', type: 'blue', icon: 'tag'}],
                filter: 'yardi',
                details: {
                    overview: 'Yardi CRM paired with Jonah-built website. Requires GTM container access for pixel and event management on the Jonah site.',
                    steps: [
                        'Confirm client has active Yardi CRM license',
                        'Request Jonah website admin access and GTM container ID',
                        'Implement GTM container on Jonah site if not already present',
                        'Configure GA4 via GTM — set up pageview, event, and conversion tags',
                        'Set up UTM parameters — source provided by client or support',
                        'Deploy ad platform pixels (Meta, Google) via GTM',
                        'QA all conversion events and lead flow into Yardi CRM'
                    ],
                    utmFormat: '?utm_source={source}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Yardi CRM Seat', 'GA4 Editor Access', 'GTM Container Access', 'Jonah Admin Panel'],
                    notes: 'GTM is required for this configuration since Jonah websites need container-based tag management. Coordinate with Jonah support for any site-level changes.'
                }
            },
            {
                id: 'Y3', slug: 'y3-lease-leads', pms: 'Yardi', title: 'Lease Leads', subtitle: 'Yardi CRM + Site Manager',
                website: 'Lease Leads', utmSource: 'Client / Support', gradient: 'from-zinc-50 to-zinc-100',
                textColor: 'text-zinc-200', hoverColor: 'text-zinc-300',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}],
                filter: 'yardi',
                details: {
                    overview: 'Yardi CRM with a Lease Leads website. GA4 is available directly on the Lease Leads platform.',
                    steps: [
                        'Confirm client has active Yardi CRM + Lease Leads website',
                        'Request GA4 property access from client or support',
                        'Configure UTM parameters — source provided by client or support',
                        'Set up conversion tracking for tour requests, applications, and contact forms',
                        'Verify lead attribution flowing into Yardi CRM',
                        'QA landing pages and all form submissions on Lease Leads site'
                    ],
                    utmFormat: '?utm_source={source}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Yardi CRM Seat', 'GA4 Editor Access', 'Lease Leads Dashboard'],
                    notes: 'Lease Leads sites typically have GA4 pre-installed. Confirm the measurement ID before adding any additional tracking.'
                }
            },
            {
                id: 'E1', slug: 'e1-entrata-native', pms: 'Entrata', title: 'Entrata Native', subtitle: 'Full CRM Access Needed',
                website: 'Entrata', utmSource: 'Self Generated', gradient: 'from-red-50 to-orange-50',
                textColor: 'text-red-100', hoverColor: 'text-red-200',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}],
                filter: 'entrata',
                details: {
                    overview: 'Entrata native website with full CRM integration. UTM sources are self-generated within the Entrata platform.',
                    steps: [
                        'Request full Entrata CRM access from property management company',
                        'Log into Entrata and locate the property website settings',
                        'Generate UTM source codes within Entrata\'s marketing module',
                        'Configure GA4 property and connect to Entrata website',
                        'Set up conversion events for applications, tours, and contact submissions',
                        'Test lead flow end-to-end from ad click to CRM entry'
                    ],
                    utmFormat: '?utm_source={entrata_generated}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Entrata CRM Full Access', 'GA4 Editor Access'],
                    notes: 'Entrata generates its own UTM source codes. Do not use external UTM sources — they will not attribute correctly in the CRM.'
                }
            },
            {
                id: 'E2', slug: 'e2-lease-leads', pms: 'Entrata', title: 'Lease Leads', subtitle: 'Full CRM Access Needed',
                website: 'Lease Leads', utmSource: 'Self Generated', gradient: 'from-red-50 to-orange-50',
                textColor: 'text-red-100', hoverColor: 'text-red-200',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}, {label: 'GTM', type: 'blue', icon: 'tag'}],
                filter: 'entrata',
                details: {
                    overview: 'Entrata CRM paired with a Lease Leads website. Requires both GTM and GA4 for full tracking coverage.',
                    steps: [
                        'Request full Entrata CRM access',
                        'Get Lease Leads admin access and GTM container ID',
                        'Generate UTM source codes within Entrata marketing module',
                        'Implement GA4 and ad pixels via GTM on Lease Leads site',
                        'Configure conversion events for all lead types',
                        'Verify Entrata CRM is receiving leads with correct source attribution',
                        'QA cross-domain tracking if applicable'
                    ],
                    utmFormat: '?utm_source={entrata_generated}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Entrata CRM Full Access', 'GA4 Editor Access', 'GTM Container Access', 'Lease Leads Dashboard'],
                    notes: 'Even though the website is Lease Leads, UTM sources must still be generated through Entrata for proper CRM attribution.'
                }
            },
            {
                id: 'E3', slug: 'e3-jonah-stack', pms: 'Entrata', title: 'Jonah Stack', subtitle: 'Full CRM Access Needed',
                website: 'Jonah', utmSource: 'Self Generated', gradient: 'from-red-50 to-orange-50',
                textColor: 'text-red-100', hoverColor: 'text-red-200',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}, {label: 'GTM', type: 'blue', icon: 'tag'}],
                filter: 'entrata',
                details: {
                    overview: 'Entrata CRM with a Jonah-built website. Full GTM implementation required for tracking and pixel management.',
                    steps: [
                        'Request full Entrata CRM access',
                        'Get Jonah website admin and GTM container access',
                        'Generate UTM source codes within Entrata marketing module',
                        'Deploy GTM container on Jonah site',
                        'Configure GA4, ad pixels, and conversion events via GTM',
                        'Map lead flow from Jonah forms into Entrata CRM',
                        'QA all events and verify source attribution'
                    ],
                    utmFormat: '?utm_source={entrata_generated}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Entrata CRM Full Access', 'GA4 Editor Access', 'GTM Container Access', 'Jonah Admin Panel'],
                    notes: 'Coordinate with both Jonah support and Entrata support during setup. Form submission mapping may require custom configuration.'
                }
            },
            {
                id: 'A1', slug: 'a1-ill-integration', pms: 'Appfolio', title: 'ILL Integration', subtitle: 'ILL Seat Needed',
                website: 'Appfolio', utmSource: 'Sadie via Email', gradient: 'from-cyan-50 to-blue-50',
                textColor: 'text-cyan-100', hoverColor: 'text-cyan-200',
                badges: [{label: 'UTM: Us', type: 'gray', icon: 'user'}],
                filter: 'appfolio',
                details: {
                    overview: 'Appfolio website with ILL (Internet Listing Lead) integration. UTM sources are managed internally and coordinated through Sadie.',
                    steps: [
                        'Request ILL seat from Appfolio — coordinate with account manager',
                        'Email Sadie to obtain UTM source parameters',
                        'Configure Appfolio website with proper tracking URLs',
                        'Set up ILL lead routing to correct property contacts',
                        'Verify leads are flowing through ILL integration correctly',
                        'QA UTM parameter persistence through the conversion funnel'
                    ],
                    utmFormat: '?utm_source={assigned_by_sadie}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Appfolio ILL Seat', 'Appfolio Admin Access'],
                    notes: 'ILL seat must be active before any campaigns launch. Email Sadie at least 3 business days before target launch date for UTM source assignment.'
                }
            },
            {
                id: 'A2', slug: 'a2-appfolio-standard', pms: 'Appfolio', title: 'Appfolio Standard', subtitle: 'Appfolio Seat Needed',
                website: 'Appfolio', utmSource: '--', gradient: 'from-cyan-50 to-blue-50',
                textColor: 'text-cyan-100', hoverColor: 'text-cyan-200',
                badges: [{label: 'GTM', type: 'blue', icon: 'tag'}, {label: 'UTM: Us', type: 'gray', icon: 'user'}],
                filter: 'appfolio',
                details: {
                    overview: 'Standard Appfolio configuration with GTM for tag management. UTM sources are managed by our team directly.',
                    steps: [
                        'Request Appfolio admin seat from property management company',
                        'Set up GTM container and deploy on Appfolio website',
                        'Configure GA4 measurement via GTM',
                        'Deploy ad platform pixels through GTM',
                        'Create UTM parameters internally (we manage source values)',
                        'Set up conversion tracking for all lead events',
                        'QA full tracking implementation'
                    ],
                    utmFormat: '?utm_source={our_source}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Appfolio Admin Seat', 'GTM Container Access', 'GA4 Editor Access'],
                    notes: 'We control UTM source values for this configuration. Document all source values in the campaign tracker sheet.'
                }
            },
            {
                id: 'A3', slug: 'a3-jonah-ill', pms: 'Appfolio', title: 'Jonah + ILL', subtitle: 'ILL Seat Needed',
                website: 'Jonah', utmSource: 'Sadie via Email', gradient: 'from-cyan-50 to-blue-50',
                textColor: 'text-cyan-100', hoverColor: 'text-cyan-200',
                badges: [{label: 'GTM', type: 'blue', icon: 'tag'}],
                filter: 'appfolio',
                details: {
                    overview: 'Appfolio CRM with Jonah website and ILL integration. GTM is required on the Jonah site for tracking.',
                    steps: [
                        'Request ILL seat from Appfolio',
                        'Get Jonah website admin and GTM container access',
                        'Email Sadie for UTM source parameter assignment',
                        'Deploy GTM container on Jonah site with GA4 and ad pixels',
                        'Configure ILL lead routing',
                        'Map Jonah form submissions to Appfolio CRM',
                        'QA end-to-end lead flow and attribution'
                    ],
                    utmFormat: '?utm_source={assigned_by_sadie}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Appfolio ILL Seat', 'GTM Container Access', 'Jonah Admin Panel'],
                    notes: 'This is a three-system configuration. Allow extra QA time. Coordinate Sadie UTM assignment with Jonah form setup simultaneously.'
                }
            },
            {
                id: 'A4', slug: 'a4-jonah-native', pms: 'Appfolio', title: 'Jonah Native', subtitle: 'Appfolio Seat Needed',
                website: 'Jonah', utmSource: '--', gradient: 'from-cyan-50 to-blue-50',
                textColor: 'text-cyan-100', hoverColor: 'text-cyan-200',
                badges: [{label: 'UTM: Us', type: 'gray', icon: 'user'}],
                filter: 'appfolio',
                details: {
                    overview: 'Appfolio CRM with a Jonah-built website, no ILL integration. UTM sources are managed by our team.',
                    steps: [
                        'Request Appfolio admin seat',
                        'Get Jonah website admin access',
                        'Create UTM source parameters internally',
                        'Configure tracking on Jonah site (GTM if available, or direct)',
                        'Set up conversion events for lead actions',
                        'Verify lead attribution in Appfolio CRM',
                        'QA all landing pages and form flows'
                    ],
                    utmFormat: '?utm_source={our_source}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Appfolio Admin Seat', 'Jonah Admin Panel'],
                    notes: 'Simpler configuration without ILL. We own the UTM source values — document them in the campaign tracker.'
                }
            },
            {
                id: 'R1', slug: 'r1-lease-leads', pms: 'Rent Manager', title: 'Lease Leads', subtitle: 'ILL Seat Needed',
                website: 'Lease Leads', utmSource: 'Sadie via Email', gradient: 'from-purple-50 to-fuchsia-50',
                textColor: 'text-purple-200', hoverColor: 'text-purple-300',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}],
                filter: 'other',
                details: {
                    overview: 'Rent Manager CRM with Lease Leads website. ILL seat required for lead integration. UTM coordinated through Sadie.',
                    steps: [
                        'Request ILL seat for Rent Manager integration',
                        'Email Sadie for UTM source assignment',
                        'Get Lease Leads dashboard access',
                        'Configure GA4 on Lease Leads property site',
                        'Set up conversion tracking for tours, applications, contacts',
                        'Verify lead flow from Lease Leads into Rent Manager',
                        'QA attribution and UTM persistence'
                    ],
                    utmFormat: '?utm_source={assigned_by_sadie}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Rent Manager ILL Seat', 'GA4 Editor Access', 'Lease Leads Dashboard'],
                    notes: 'Rent Manager integrations can have longer setup times. Start the ILL seat request process early.'
                }
            },
            {
                id: 'R2', slug: 'r2-jonah-stack', pms: 'Rent Manager', title: 'Jonah Stack', subtitle: 'ILL Seat Needed',
                website: 'Jonah', utmSource: 'Sadie via Email', gradient: 'from-purple-50 to-fuchsia-50',
                textColor: 'text-purple-200', hoverColor: 'text-purple-300',
                badges: [{label: 'GA4', type: 'green', icon: 'check'}, {label: 'GTM', type: 'blue', icon: 'tag'}],
                filter: 'other',
                details: {
                    overview: 'Rent Manager CRM with Jonah website. Full GTM and GA4 implementation required. ILL seat needed for lead routing.',
                    steps: [
                        'Request ILL seat for Rent Manager',
                        'Get Jonah admin and GTM container access',
                        'Email Sadie for UTM source parameters',
                        'Deploy GTM container on Jonah site',
                        'Configure GA4 and ad pixels via GTM',
                        'Set up ILL lead routing to Rent Manager',
                        'Map Jonah form submissions to CRM',
                        'QA full funnel from click to CRM entry'
                    ],
                    utmFormat: '?utm_source={assigned_by_sadie}&utm_medium=cpc&utm_campaign={campaign_name}',
                    accessNeeded: ['Rent Manager ILL Seat', 'GA4 Editor Access', 'GTM Container Access', 'Jonah Admin Panel'],
                    notes: 'Complex three-system setup. Recommend scheduling a kickoff call with all stakeholders before beginning implementation.'
                }
            },
            {
                id: 'M1', slug: 'm1-perq-knock', pms: 'MRI', title: 'Perq / Knock', subtitle: 'Custom Seat Config',
                website: 'Perq', utmSource: '--', gradient: 'from-gray-50 to-zinc-100',
                textColor: 'text-gray-300', hoverColor: 'text-gray-400',
                badges: [{label: 'GA4: ?', type: 'yellow', icon: 'help-circle'}],
                filter: 'other',
                details: {
                    overview: 'MRI CRM with Perq/Knock website platform. This is a custom configuration that varies by property. GA4 availability needs to be confirmed on a case-by-case basis.',
                    steps: [
                        'Confirm which platform is active: Perq, Knock, or both',
                        'Request custom seat configuration from MRI admin',
                        'Determine GA4 availability — check with property IT team',
                        'If GA4 available: configure measurement and conversion tracking',
                        'If GA4 unavailable: document alternative tracking method',
                        'Set up UTM parameters (varies by configuration)',
                        'Coordinate with Perq/Knock support for any platform-specific requirements',
                        'Extensive QA required due to custom nature of setup'
                    ],
                    utmFormat: 'Varies — confirm with property management team',
                    accessNeeded: ['MRI Custom Seat', 'Perq/Knock Admin (varies)', 'GA4 Editor Access (if available)'],
                    notes: 'This is the most variable configuration. Every MRI + Perq/Knock setup can be different. Always start with a discovery call to understand the specific tech stack.'
                }
            }
        ];

        // Badge type mappings
        const badgeStyles = {
            green: 'bg-green-50 text-green-700 border-green-100',
            blue: 'bg-blue-50 text-blue-700 border-blue-100',
            gray: 'bg-zinc-100 text-zinc-500 border-zinc-200',
            yellow: 'bg-yellow-50 text-yellow-700 border-yellow-100'
        };

        // Render gallery cards
        function renderCards(filter = 'all', search = '') {
            const grid = document.getElementById('card-grid');
            grid.innerHTML = '';
            
            const filtered = cards.filter(c => {
                const matchFilter = filter === 'all' || c.filter === filter;
                const matchSearch = search === '' || 
                    c.title.toLowerCase().includes(search.toLowerCase()) ||
                    c.pms.toLowerCase().includes(search.toLowerCase()) ||
                    c.id.toLowerCase().includes(search.toLowerCase()) ||
                    c.website.toLowerCase().includes(search.toLowerCase());
                return matchFilter && matchSearch;
            });

            filtered.forEach(card => {
                const badgesHtml = card.badges.map(b => 
                    `<span class="inline-flex items-center gap-1 px-2 py-1 rounded-md ${badgeStyles[b.type]} border text-xs font-medium">
                        <i data-lucide="${b.icon}" class="w-3 h-3"></i> ${b.label}
                    </span>`
                ).join('');

                grid.innerHTML += `
                <div onclick="showDetail('${card.slug}')" class="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <div class="h-40 bg-gradient-to-br ${card.gradient} flex items-center justify-center relative p-6">
                        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
                            <span class="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
                        </div>
                        <h3 class="text-7xl font-semibold tracking-tighter ${card.textColor} group-hover:${card.hoverColor} transition-colors select-none">${card.id}</h3>
                        <div class="absolute top-4 left-4">
                            <span class="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">${card.pms}</span>
                        </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h4 class="text-lg font-medium tracking-tight text-zinc-900">${card.title}</h4>
                                <p class="text-sm text-zinc-500 mt-1">${card.subtitle}</p>
                            </div>
                        </div>
                        <div class="space-y-3 mb-6 flex-1">
                            <div class="flex justify-between text-sm border-b border-zinc-50 pb-2">
                                <span class="text-zinc-400">Website</span>
                                <span class="text-zinc-700 font-medium">${card.website}</span>
                            </div>
                            <div class="flex justify-between text-sm border-b border-zinc-50 pb-2">
                                <span class="text-zinc-400">UTM Source</span>
                                <span class="${card.utmSource === '--' ? 'text-zinc-400' : 'text-zinc-700'}">${card.utmSource}</span>
                            </div>
                        </div>
                        <div class="flex gap-2 mt-auto flex-wrap">${badgesHtml}</div>
                    </div>
                </div>`;
            });

            lucide.createIcons();
        }

        // Filter cards
        function filterCards(filter) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.dataset.filter === filter) {
                    btn.className = 'filter-btn px-4 py-1.5 rounded-full bg-zinc-900 text-white text-sm font-medium';
                } else {
                    btn.className = 'filter-btn px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm font-medium hover:bg-zinc-50 transition-colors';
                }
            });
            renderCards(filter, document.getElementById('search-input').value);
        }

        // Show detail page
        function showDetail(slug) {
            const card = cards.find(c => c.slug === slug);
            if (!card) return;

            // Update URL hash
            window.location.hash = slug;

            document.getElementById('gallery-view').classList.add('hidden');
            document.getElementById('gallery-view').classList.remove('flex');
            document.getElementById('detail-view').classList.remove('hidden');
            document.getElementById('detail-view').classList.add('flex');

            // Update sidebar active state
            document.getElementById('nav-gallery').classList.remove('bg-zinc-200/60', 'text-zinc-900', 'font-medium');
            document.getElementById('nav-gallery').classList.add('text-zinc-500', 'hover:bg-zinc-100', 'hover:text-zinc-900');

            const badgesHtml = card.badges.map(b => 
                `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md ${badgeStyles[b.type]} border text-xs font-medium">
                    <i data-lucide="${b.icon}" class="w-3 h-3"></i> ${b.label}
                </span>`
            ).join('');

            const stepsHtml = card.details.steps.map((step, i) => 
                `<div class="flex gap-4 items-start group/step">
                    <div class="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
                        <span class="text-xs font-medium text-zinc-500">${i + 1}</span>
                    </div>
                    <p class="text-base text-zinc-700 leading-relaxed pt-0.5">${step}</p>
                </div>`
            ).join('');

            const accessHtml = card.details.accessNeeded.map(a => 
                `<div class="flex items-center gap-3 px-4 py-3 bg-zinc-50 rounded-lg border border-zinc-100">
                    <i data-lucide="key" class="w-4 h-4 text-zinc-400 flex-shrink-0"></i>
                    <span class="text-sm text-zinc-700">${a}</span>
                </div>`
            ).join('');

            document.getElementById('detail-content').innerHTML = `
                <div class="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-24 fade-in">
                    
                    <!-- Back button -->
                    <button onclick="showGallery()" class="flex items-center gap-2 text-zinc-400 hover:text-zinc-700 transition-colors mb-10 group">
                        <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"></i>
                        <span class="text-sm font-medium">Back to Gallery</span>
                    </button>

                    <!-- Header -->
                    <div class="flex items-start justify-between mb-2">
                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <span class="px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">${card.pms}</span>
                                <span class="text-zinc-300">·</span>
                                <span class="text-sm text-zinc-400">${card.slug}</span>
                            </div>
                            <h1 class="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-900">${card.id} — ${card.title}</h1>
                            <p class="text-lg text-zinc-500 mt-3">${card.subtitle}</p>
                        </div>
                    </div>

                    <!-- Badges -->
                    <div class="flex gap-2 mt-6 mb-12 flex-wrap">${badgesHtml}</div>

                    <!-- Divider -->
                    <div class="border-t border-zinc-100 mb-12"></div>

                    <!-- Overview -->
                    <div class="mb-12">
                        <h2 class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Overview</h2>
                        <p class="text-base text-zinc-700 leading-relaxed">${card.details.overview}</p>
                    </div>

                    <!-- Quick Info Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                        <div class="p-5 bg-zinc-50 rounded-xl border border-zinc-100">
                            <p class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Website</p>
                            <p class="text-lg font-medium tracking-tight text-zinc-900">${card.website}</p>
                        </div>
                        <div class="p-5 bg-zinc-50 rounded-xl border border-zinc-100">
                            <p class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">UTM Source</p>
                            <p class="text-lg font-medium tracking-tight ${card.utmSource === '--' ? 'text-zinc-400' : 'text-zinc-900'}">${card.utmSource}</p>
                        </div>
                        <div class="p-5 bg-zinc-50 rounded-xl border border-zinc-100">
                            <p class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">PMS</p>
                            <p class="text-lg font-medium tracking-tight text-zinc-900">${card.pms}</p>
                        </div>
                    </div>

                    <!-- UTM Format -->
                    <div class="mb-12">
                        <h2 class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">UTM Format</h2>
                        <div class="bg-zinc-900 rounded-xl p-5 overflow-x-auto">
                            <code class="text-sm text-green-400 font-mono whitespace-pre">${card.details.utmFormat}</code>
                        </div>
                    </div>

                    <!-- Setup Steps -->
                    <div class="mb-12">
                        <h2 class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-6">Setup Steps</h2>
                        <div class="space-y-5">${stepsHtml}</div>
                    </div>

                    <!-- Access Needed -->
                    <div class="mb-12">
                        <h2 class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Access Needed</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${accessHtml}</div>
                    </div>

                    <!-- Notes -->
                    <div class="mb-12">
                        <h2 class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Notes</h2>
                        <div class="flex gap-3 p-5 bg-amber-50 border border-amber-100 rounded-xl">
                            <i data-lucide="info" class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"></i>
                            <p class="text-sm text-amber-800 leading-relaxed">${card.details.notes}</p>
                        </div>
                    </div>

                    <!-- Back to gallery bottom -->
                    <div class="border-t border-zinc-100 pt-8 flex justify-between items-center">
                        <button onclick="showGallery()" class="flex items-center gap-2 text-zinc-400 hover:text-zinc-700 transition-colors group">
                            <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"></i>
                            <span class="text-sm font-medium">Back to Gallery</span>
                        </button>
                        <span class="text-xs text-zinc-300">${card.slug}</span>
                    </div>
                </div>
            `;

            lucide.createIcons();
        }

        // Show gallery
        function showGallery() {
            window.location.hash = '';
            document.getElementById('gallery-view').classList.remove('hidden');
            document.getElementById('gallery-view').classList.add('flex');
            document.getElementById('detail-view').classList.add('hidden');
            document.getElementById('detail-view').classList.remove('flex');

            // Reset sidebar active state
            document.getElementById('nav-gallery').classList.add('bg-zinc-200/60', 'text-zinc-900', 'font-medium');
            document.getElementById('nav-gallery').classList.remove('text-zinc-500', 'hover:bg-zinc-100', 'hover:text-zinc-900');
        }

        // Search functionality
        document.getElementById('search-input').addEventListener('input', function() {
            const activeFilter = document.querySelector('.filter-btn.bg-zinc-900')?.dataset.filter || 'all';
            renderCards(activeFilter, this.value);
        });

        // Handle hash navigation
        function handleHash() {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                const card = cards.find(c => c.slug === hash);
                if (card) {
                    showDetail(card.slug);
                    return;
                }
            }
            showGallery();
        }

        window.addEventListener('hashchange', handleHash);

        // Initial render
        renderCards();
        handleHash();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-72 bg-neutral-50 border-r border-neutral-200 flex-col justify-between hidden lg:flex flex-shrink-0" style={{}}>
<div className="p-6">
<a className="flex items-center gap-2 mb-8 text-neutral-800 hover:text-neutral-600 transition-colors" href="#" onclick="showGallery(); return false;" style={{}}>
<svg aria-hidden="true" className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="font-medium text-lg tracking-tight font-geist">DevVault</span>
</a>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-neutral-200/60 rounded-lg text-neutral-900 text-base transition-colors bg-zinc-200/60 text-zinc-900 font-medium font-geist" href="#" id="nav-gallery" onclick="showGallery(); return false;" style={{}}>
<svg aria-hidden="true" className="lucide lucide-layout-grid w-5 h-5 text-neutral-500" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                    Onboarding Gallery
                </a>
<div className="pt-6 pb-2">
<p className="px-3 text-xs font-medium text-neutral-400 uppercase tracking-wider font-geist" style={{}}>Resources</p>
</div>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all group" href="#" style={{}}>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-neutral-400 w-4 group-hover:text-neutral-500 font-geist" style={{}}>01</span>
<span className="text-base font-geist">UTM Guidelines</span>
</div>
<svg aria-hidden="true" className="lucide lucide-lock w-3 h-3 text-neutral-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all group" href="#" style={{}}>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-neutral-400 w-4 group-hover:text-neutral-500 font-geist" style={{}}>02</span>
<span className="text-base font-geist">GTM Snippets</span>
</div>
<svg aria-hidden="true" className="lucide lucide-lock w-3 h-3 text-neutral-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all group" href="#" style={{}}>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-neutral-400 w-4 group-hover:text-neutral-500 font-geist" style={{}}>03</span>
<span className="text-base font-geist">Pixel Helpers</span>
</div>
<svg aria-hidden="true" className="lucide lucide-lock w-3 h-3 text-neutral-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</a>
<div className="pt-6 pb-2">
<p className="px-3 text-xs font-medium text-neutral-400 uppercase tracking-wider font-geist" style={{}}>PMS Data</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all" href="#" style={{}}>
<svg aria-hidden="true" className="lucide lucide-folder w-4 h-4 text-neutral-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-base font-geist">Yardi</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all" href="#" style={{}}>
<svg aria-hidden="true" className="lucide lucide-folder w-4 h-4 text-neutral-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-base font-geist">Entrata</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all" href="#" style={{}}>
<svg aria-hidden="true" className="lucide lucide-folder w-4 h-4 text-neutral-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-base font-geist">Appfolio</span>
</a>
</nav>
</div>
<div className="p-6 border-t border-neutral-200" style={{}}>
<button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm" style={{}}>
<svg aria-hidden="true" className="lucide lucide-unlock w-4 h-4" data-lucide="unlock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
<span className="text-sm font-medium font-geist">Access Full Vault</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<div className="flex-col h-full flex" id="gallery-view">

<div className="md:px-16 flex flex-col bg-white z-10 pt-16 pr-8 pb-12 pl-8 items-center justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="text-sm text-neutral-500 font-medium font-geist" style={{}}>Team Resources</span>
<span className="text-lg font-geist">👋</span>
</div>
<h1 className="font-medium text-neutral-900 tracking-tighter font-jakarta text-center mb-8" style={{fontSize: 'clamp(5rem, 12vw, 10rem)', lineHeight: '0.9'}}>
                    Onboarding<br/>Configurations
                </h1>
<div className="relative w-full max-w-lg group">
<svg aria-hidden="true" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-hover:text-neutral-600 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-neutral-100 border-none rounded-xl py-4 pl-12 pr-4 text-base text-neutral-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-200 focus:bg-white transition-all outline-none" id="search-input" placeholder="Search by PMS, Website, or ID..." style={{}} type="text"/>
</div>
<p className="mt-4 text-neutral-400 text-sm italic font-serif opacity-80 rotate-3 translate-x-32 hidden md:block font-geist" style={{}}>~ Updated for Q3</p>
</div>

<div className="flex-1 overflow-y-auto md:px-12 hide-scrollbar pr-6 pb-20 pl-6">

<div className="flex items-center justify-center gap-2 mb-10 flex-wrap" id="filter-tabs">
<button className="filter-btn px-4 py-1.5 rounded-full bg-neutral-900 text-white text-sm font-medium font-geist" data-filter="all" onclick="filterCards('all')" style={{}}>All</button>
<button className="filter-btn px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-colors font-geist" data-filter="yardi" onclick="filterCards('yardi')" style={{}}>Yardi</button>
<button className="filter-btn px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-colors font-geist" data-filter="entrata" onclick="filterCards('entrata')" style={{}}>Entrata</button>
<button className="filter-btn px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-colors font-geist" data-filter="appfolio" onclick="filterCards('appfolio')" style={{}}>Appfolio</button>
<button className="filter-btn px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-colors font-geist" data-filter="other" onclick="filterCards('other')" style={{}}>Other</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto max-w-7xl" id="card-grid">
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('y1-standard-yardi')">
<div className="h-40 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-zinc-200 group-hover:text-zinc-300 transition-colors select-none">Y1</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Yardi</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Standard Yardi</h4>
<p className="text-sm text-zinc-500 mt-1">Yardi CRM + Site Manager</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Yardi</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Client / Support</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('y2-jonah-stack')">
<div className="h-40 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-zinc-200 group-hover:text-zinc-300 transition-colors select-none">Y2</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Yardi</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Jonah Stack</h4>
<p className="text-sm text-zinc-500 mt-1">Yardi CRM + Site Manager</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Jonah</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Client / Support</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('y3-lease-leads')">
<div className="h-40 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-zinc-200 group-hover:text-zinc-300 transition-colors select-none">Y3</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Yardi</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Lease Leads</h4>
<p className="text-sm text-zinc-500 mt-1">Yardi CRM + Site Manager</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Lease Leads</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Client / Support</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('e1-entrata-native')">
<div className="h-40 bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-red-100 group-hover:text-red-200 transition-colors select-none">E1</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Entrata</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Entrata Native</h4>
<p className="text-sm text-zinc-500 mt-1">Full CRM Access Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Entrata</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Self Generated</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('e2-lease-leads')">
<div className="h-40 bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-red-100 group-hover:text-red-200 transition-colors select-none">E2</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Entrata</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Lease Leads</h4>
<p className="text-sm text-zinc-500 mt-1">Full CRM Access Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Lease Leads</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Self Generated</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('e3-jonah-stack')">
<div className="h-40 bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-red-100 group-hover:text-red-200 transition-colors select-none">E3</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Entrata</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Jonah Stack</h4>
<p className="text-sm text-zinc-500 mt-1">Full CRM Access Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Jonah</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Self Generated</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('a1-ill-integration')">
<div className="h-40 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-cyan-100 group-hover:text-cyan-200 transition-colors select-none">A1</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Appfolio</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">ILL Integration</h4>
<p className="text-sm text-zinc-500 mt-1">ILL Seat Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Appfolio</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Sadie via Email</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 text-zinc-500 border-zinc-200 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> UTM: Us
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('a2-appfolio-standard')">
<div className="h-40 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-cyan-100 group-hover:text-cyan-200 transition-colors select-none">A2</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Appfolio</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Appfolio Standard</h4>
<p className="text-sm text-zinc-500 mt-1">Appfolio Seat Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Appfolio</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-400">--</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                    </span><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 text-zinc-500 border-zinc-200 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> UTM: Us
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('a3-jonah-ill')">
<div className="h-40 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-cyan-100 group-hover:text-cyan-200 transition-colors select-none">A3</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Appfolio</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Jonah + ILL</h4>
<p className="text-sm text-zinc-500 mt-1">ILL Seat Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Jonah</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Sadie via Email</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('a4-jonah-native')">
<div className="h-40 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-cyan-100 group-hover:text-cyan-200 transition-colors select-none">A4</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Appfolio</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Jonah Native</h4>
<p className="text-sm text-zinc-500 mt-1">Appfolio Seat Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Jonah</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-400">--</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 text-zinc-500 border-zinc-200 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> UTM: Us
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('r1-lease-leads')">
<div className="h-40 bg-gradient-to-br from-purple-50 to-fuchsia-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-purple-200 group-hover:text-purple-300 transition-colors select-none">R1</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Rent Manager</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Lease Leads</h4>
<p className="text-sm text-zinc-500 mt-1">ILL Seat Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Lease Leads</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Sadie via Email</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('r2-jonah-stack')">
<div className="h-40 bg-gradient-to-br from-purple-50 to-fuchsia-50 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-purple-200 group-hover:text-purple-300 transition-colors select-none">R2</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">Rent Manager</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Jonah Stack</h4>
<p className="text-sm text-zinc-500 mt-1">ILL Seat Needed</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Jonah</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-700">Sadie via Email</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                    </span><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                    </span></div>
</div>
</div>
<div className="group relative flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full" onclick="showDetail('m1-perq-knock')">
<div className="h-40 bg-gradient-to-br from-gray-50 to-zinc-100 flex items-center justify-center relative p-6">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-50/50 backdrop-blur-sm z-10 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-zinc-100">View Specs</span>
</div>
<h3 className="text-7xl font-semibold tracking-tighter text-gray-300 group-hover:text-gray-400 transition-colors select-none">M1</h3>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-500">MRI</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900">Perq / Knock</h4>
<p className="text-sm text-zinc-500 mt-1">Custom Seat Config</p>
</div>
</div>
<div className="space-y-3 mb-6 flex-1">
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">Website</span>
<span className="text-zinc-700 font-medium">Perq</span>
</div>
<div className="flex justify-between text-sm border-b border-zinc-50 pb-2">
<span className="text-zinc-400">UTM Source</span>
<span className="text-zinc-400">--</span>
</div>
</div>
<div className="flex gap-2 mt-auto flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-50 text-yellow-700 border-yellow-100 border text-xs font-medium">
<svg aria-hidden="true" className="lucide lucide-help-circle w-3 h-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> GA4: ?
                    </span></div>
</div>
</div></div>
<div className="mt-20 flex justify-center pb-12">
<p className="text-neutral-400 text-sm font-geist" style={{}}>End of configuration list</p>
</div>
</div>
</div>

<div className="flex-col h-full hidden" id="detail-view">
<div className="flex-1 overflow-y-auto hide-scrollbar">
<div className="fade-in" id="detail-content">
<div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-24 fade-in">

<button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-700 transition-colors mb-10 group" onclick="showGallery()">
<svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="text-sm font-medium font-geist">Back to Gallery</span>
</button>

<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-xs font-medium text-zinc-500 font-geist">Rent Manager</span>
<span className="text-zinc-300 font-geist">·</span>
<span className="text-sm text-zinc-400 font-geist">r2-jonah-stack</span>
</div>
<h1 className="text-4xl md:text-5xl tracking-tighter text-zinc-900 font-jakarta font-medium">R2 — Jonah Stack</h1>
<p className="text-lg text-zinc-500 mt-3 font-geist">ILL Seat Needed</p>
</div>
</div>

<div className="flex gap-2 mt-6 mb-12 flex-wrap"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-50 text-green-700 border-green-100 border text-xs font-medium font-geist">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GA4
                </span><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border-blue-100 border text-xs font-medium font-geist">
<svg aria-hidden="true" className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> GTM
                </span></div>

<div className="border-t border-zinc-100 mb-12"></div>

<div className="mb-12">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4 font-geist">Overview</h2>
<p className="text-base text-zinc-700 leading-relaxed font-geist">Rent Manager CRM with Jonah website. Full GTM and GA4 implementation required. ILL seat needed for lead routing.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
<div className="p-5 bg-zinc-50 rounded-xl border border-zinc-100">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 font-geist">Website</p>
<p className="text-lg font-medium tracking-tight text-zinc-900 font-geist">Jonah</p>
</div>
<div className="p-5 bg-zinc-50 rounded-xl border border-zinc-100">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 font-geist">UTM Source</p>
<p className="text-lg font-medium tracking-tight text-zinc-900 font-geist">Sadie via Email</p>
</div>
<div className="p-5 bg-zinc-50 rounded-xl border border-zinc-100">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 font-geist">PMS</p>
<p className="text-lg font-medium tracking-tight text-zinc-900 font-geist">Rent Manager</p>
</div>
</div>

<div className="mb-12">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4 font-geist">UTM Format</h2>
<div className="bg-zinc-900 rounded-xl p-5 overflow-x-auto">
<code className="text-sm text-green-400 font-mono whitespace-pre font-geist">?utm_source={assigned_by_sadie}&amp;utm_medium=cpc&amp;utm_campaign={campaign_name}</code>
</div>
</div>

<div className="mb-12">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-6 font-geist">Setup Steps</h2>
<div className="space-y-5"><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">1</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Request ILL seat for Rent Manager</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">2</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Get Jonah admin and GTM container access</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">3</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Email Sadie for UTM source parameters</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">4</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Deploy GTM container on Jonah site</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">5</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Configure GA4 and ad pixels via GTM</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">6</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Set up ILL lead routing to Rent Manager</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">7</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">Map Jonah form submissions to CRM</p>
</div><div className="flex gap-4 items-start group/step">
<div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
<span className="text-xs font-medium text-zinc-500 font-geist">8</span>
</div>
<p className="text-base text-zinc-700 leading-relaxed pt-0.5 font-geist">QA full funnel from click to CRM entry</p>
</div></div>
</div>

<div className="mb-12">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4 font-geist">Access Needed</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div className="flex items-center gap-3 px-4 py-3 bg-zinc-50 rounded-lg border border-zinc-100">
<svg aria-hidden="true" className="lucide lucide-key w-4 h-4 text-zinc-400 flex-shrink-0" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-sm text-zinc-700 font-geist">Rent Manager ILL Seat</span>
</div><div className="flex items-center gap-3 px-4 py-3 bg-zinc-50 rounded-lg border border-zinc-100">
<svg aria-hidden="true" className="lucide lucide-key w-4 h-4 text-zinc-400 flex-shrink-0" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-sm text-zinc-700 font-geist">GA4 Editor Access</span>
</div><div className="flex items-center gap-3 px-4 py-3 bg-zinc-50 rounded-lg border border-zinc-100">
<svg aria-hidden="true" className="lucide lucide-key w-4 h-4 text-zinc-400 flex-shrink-0" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-sm text-zinc-700 font-geist">GTM Container Access</span>
</div><div className="flex items-center gap-3 px-4 py-3 bg-zinc-50 rounded-lg border border-zinc-100">
<svg aria-hidden="true" className="lucide lucide-key w-4 h-4 text-zinc-400 flex-shrink-0" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-sm text-zinc-700 font-geist">Jonah Admin Panel</span>
</div></div>
</div>

<div className="mb-12">
<h2 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4 font-geist">Notes</h2>
<div className="flex gap-3 p-5 bg-amber-50 border border-amber-100 rounded-xl">
<svg aria-hidden="true" className="lucide lucide-info w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p className="text-sm text-amber-800 leading-relaxed font-geist">Complex three-system setup. Recommend scheduling a kickoff call with all stakeholders before beginning implementation.</p>
</div>
</div>

<div className="border-t border-zinc-100 pt-8 flex justify-between items-center">
<button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-700 transition-colors group" onclick="showGallery()">
<svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="text-sm font-medium font-geist">Back to Gallery</span>
</button>
<span className="text-xs text-zinc-300 font-geist">r2-jonah-stack</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
