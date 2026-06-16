import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(window.NREUM || (NREUM = {})).init = {
privacy: {
cookies_enabled: true
},
ajax: {
deny_list: ["bam.eu01.nr-data.net"]
},
feature_flags: ["soft_nav"],
distributed_tracing: {
enabled: true,
allowed_origins: [],
cors_use_newrelic_header: false,
cors_use_tracecontext_headers: false
}
};
(window.NREUM || (NREUM = {})).loader_config = {
agentID: "99021217",
accountID: "2868847",
trustKey: "2868847",
xpid: "Vg4BWV5XDxAJXVFQBgAAVw==",
licenseKey: "NRBR-1d4ceb8e146a994d175",
applicationID: "99021171",
browserID: "99021217"
};; /*! For license information please see nr-loader-spa-1.303.0.min.js.LICENSE.txt */
(() => {
var e, t, r = {
384: (e, t, r) => {
"use strict";
r.d(t, {
NT: () => s,
US: () => d,
Zm: () => a,
bQ: () => u,
dV: () => c,
pV: () => l
});
var n = r(6154),
i = r(1863),
o = r(1910);
const s = {
beacon: "bam.nr-data.net",
errorBeacon: "bam.nr-data.net"
};
function a() {
return n.gm.NREUM || (n.gm.NREUM = {}), void 0 === n.gm.newrelic && (n.gm.newrelic = n.gm.NREUM), n.gm.NREUM
}
function c() {
let e = a();
return e.o || (e.o = {
ST: n.gm.setTimeout,
SI: n.gm.setImmediate || n.gm.setInterval,
CT: n.gm.clearTimeout,
XHR: n.gm.XMLHttpRequest,
REQ: n.gm.Request,
EV: n.gm.Event,
PR: n.gm.Promise,
MO: n.gm.MutationObserver,
FETCH: n.gm.fetch,
WS: n.gm.WebSocket
}, (0, o.i)(...Object.values(e.o))), e
}
function u(e, t) {
let r = a();
r.initializedAgents ? ? = {}, t.initializedAt = {
ms: (0, i.t)(),
date: new Date
}, r.initializedAgents[e] = t
}
function d(e, t) {
a()[e] = t
}
function l() {
return function() {
let e = a();
const t = e.info || {};
e.info = {
beacon: s.beacon,
errorBeacon: s.errorBeacon,
...t
}
}(),
function() {
let e = a();
const t = e.init || {};
e.init = { ...t
}
}(), c(),
function() {
let e = a();
const t = e.loader_config || {};
e.loader_config = { ...t
}
}(), a()
}
},
782: (e, t, r) => {
"use strict";
r.d(t, {
T: () => n
});
const n = r(860).K7.pageViewTiming
},
860: (e, t, r) => {
"use strict";
r.d(t, {
$J: () => d,
K7: () => c,
P3: () => u,
XX: () => i,
Yy: () => a,
df: () => o,
qY: () => n,
v4: () => s
});
const n = "events",
i = "jserrors",
o = "browser/blobs",
s = "rum",
a = "browser/logs",
c = {
ajax: "ajax",
genericEvents: "generic_events",
jserrors: i,
logging: "logging",
metrics: "metrics",
pageAction: "page_action",
pageViewEvent: "page_view_event",
pageViewTiming: "page_view_timing",
sessionReplay: "session_replay",
sessionTrace: "session_trace",
softNav: "soft_navigations",
spa: "spa"
},
u = {
[c.pageViewEvent]: 1,
[c.pageViewTiming]: 2,
[c.metrics]: 3,
[c.jserrors]: 4,
[c.spa]: 5,
[c.ajax]: 6,
[c.sessionTrace]: 7,
[c.softNav]: 8,
[c.sessionReplay]: 9,
[c.logging]: 10,
[c.genericEvents]: 11
},
d = {
[c.pageViewEvent]: s,
[c.pageViewTiming]: n,
[c.ajax]: n,
[c.spa]: n,
[c.softNav]: n,
[c.metrics]: i,
[c.jserrors]: i,
[c.sessionTrace]: o,
[c.sessionReplay]: o,
[c.logging]: a,
[c.genericEvents]: "ins"
}
},
944: (e, t, r) => {
"use strict";
r.d(t, {
R: () => i
});
var n = r(3241);
function i(e, t) {
"function" == typeof console.debug && (console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e), t), (0, n.W)({
agentIdentifier: null,
drained: null,
type: "data",
name: "warn",
feature: "warn",
data: {
code: e,
secondary: t
}
}))
}
},
993: (e, t, r) => {
"use strict";
r.d(t, {
A$: () => o,
ET: () => s,
TZ: () => a,
p_: () => i
});
var n = r(860);
const i = {
ERROR: "ERROR",
WARN: "WARN",
INFO: "INFO",
DEBUG: "DEBUG",
TRACE: "TRACE"
},
o = {
OFF: 0,
ERROR: 1,
WARN: 2,
INFO: 3,
DEBUG: 4,
TRACE: 5
},
s = "log",
a = n.K7.logging
},
1687: (e, t, r) => {
"use strict";
r.d(t, {
Ak: () => u,
Ze: () => f,
x3: () => d
});
var n = r(3241),
i = r(7836),
o = r(3606),
s = r(860),
a = r(2646);
const c = {};
function u(e, t) {
const r = {
staged: !1,
priority: s.P3[t] || 0
};
l(e), c[e].get(t) || c[e].set(t, r)
}
function d(e, t) {
e && c[e] && (c[e].get(t) && c[e].delete(t), p(e, t, !1), c[e].size && h(e))
}
function l(e) {
if (!e) throw new Error("agentIdentifier required");
c[e] || (c[e] = new Map)
}
function f(e = "", t = "feature", r = !1) {
if (l(e), !e || !c[e].get(t) || r) return p(e, t);
c[e].get(t).staged = !0, h(e)
}
function h(e) {
const t = Array.from(c[e]);
t.every(([e, t]) => t.staged) && (t.sort((e, t) => e[1].priority - t[1].priority), t.forEach(([t]) => {
c[e].delete(t), p(e, t)
}))
}
function p(e, t, r = !0) {
const s = e ? i.ee.get(e) : i.ee,
c = o.i.handlers;
if (!s.aborted && s.backlog && c) {
if ((0, n.W)({
agentIdentifier: e,
type: "lifecycle",
name: "drain",
feature: t
}), r) {
const e = s.backlog[t],
r = c[t];
if (r) {
for (let t = 0; e && t < e.length; ++t) g(e[t], r);
Object.entries(r).forEach(([e, t]) => {
Object.values(t || {}).forEach(t => {
t[0] ? .on && t[0] ? .context() instanceof a.y && t[0].on(e, t[1])
})
})
}
}
s.isolatedBacklog || delete c[t], s.backlog[t] = null, s.emit("drain-" + t, [])
}
}
function g(e, t) {
var r = e[1];
Object.values(t[r] || {}).forEach(t => {
var r = e[0];
if (t[0] === r) {
var n = t[1],
i = e[3],
o = e[2];
n.apply(i, o)
}
})
}
},
1741: (e, t, r) => {
"use strict";
r.d(t, {
W: () => o
});
var n = r(944),
i = r(4261);
class o {#
e(e, ...t) {
if (this[e] !== o.prototype[e]) return this[e](...t);
(0, n.R)(35, e)
}
addPageAction(e, t) {
return this.#e(i.hG, e, t)
}
register(e) {
return this.#e(i.eY, e)
}
recordCustomEvent(e, t) {
return this.#e(i.fF, e, t)
}
setPageViewName(e, t) {
return this.#e(i.Fw, e, t)
}
setCustomAttribute(e, t, r) {
return this.#e(i.cD, e, t, r)
}
noticeError(e, t) {
return this.#e(i.o5, e, t)
}
setUserId(e) {
return this.#e(i.Dl, e)
}
setApplicationVersion(e) {
return this.#e(i.nb, e)
}
setErrorHandler(e) {
return this.#e(i.bt, e)
}
addRelease(e, t) {
return this.#e(i.k6, e, t)
}
log(e, t) {
return this.#e(i.$9, e, t)
}
start() {
return this.#e(i.d3)
}
finished(e) {
return this.#e(i.BL, e)
}
recordReplay() {
return this.#e(i.CH)
}
pauseReplay() {
return this.#e(i.Tb)
}
addToTrace(e) {
return this.#e(i.U2, e)
}
setCurrentRouteName(e) {
return this.#e(i.PA, e)
}
interaction(e) {
return this.#e(i.dT, e)
}
wrapLogger(e, t, r) {
return this.#e(i.Wb, e, t, r)
}
measure(e, t) {
return this.#e(i.V1, e, t)
}
consent(e) {
return this.#e(i.Pv, e)
}
}
},
1863: (e, t, r) => {
"use strict";
function n() {
return Math.floor(performance.now())
}
r.d(t, {
t: () => n
})
},
1910: (e, t, r) => {
"use strict";
r.d(t, {
i: () => o
});
var n = r(944);
const i = new Map;
function o(...e) {
return e.every(e => {
if (i.has(e)) return i.get(e);
const t = "function" == typeof e && e.toString().includes("[native code]");
return t || (0, n.R)(64, e ? .name || e ? .toString()), i.set(e, t), t
})
}
},
2555: (e, t, r) => {
"use strict";
r.d(t, {
D: () => a,
f: () => s
});
var n = r(384),
i = r(8122);
const o = {
beacon: n.NT.beacon,
errorBeacon: n.NT.errorBeacon,
licenseKey: void 0,
applicationID: void 0,
sa: void 0,
queueTime: void 0,
applicationTime: void 0,
ttGuid: void 0,
user: void 0,
account: void 0,
product: void 0,
extra: void 0,
jsAttributes: {},
userAttributes: void 0,
atts: void 0,
transactionName: void 0,
tNamePlain: void 0
};
function s(e) {
try {
return !!e.licenseKey && !!e.errorBeacon && !!e.applicationID
} catch (e) {
return !1
}
}
const a = e => (0, i.a)(e, o)
},
2614: (e, t, r) => {
"use strict";
r.d(t, {
BB: () => s,
H3: () => n,
g: () => u,
iL: () => c,
tS: () => a,
uh: () => i,
wk: () => o
});
const n = "NRBA",
i = "SESSION",
o = 144e5,
s = 18e5,
a = {
STARTED: "session-started",
PAUSE: "session-pause",
RESET: "session-reset",
RESUME: "session-resume",
UPDATE: "session-update"
},
c = {
SAME_TAB: "same-tab",
CROSS_TAB: "cross-tab"
},
u = {
OFF: 0,
FULL: 1,
ERROR: 2
}
},
2646: (e, t, r) => {
"use strict";
r.d(t, {
y: () => n
});
class n {
constructor(e) {
this.contextId = e
}
}
},
2843: (e, t, r) => {
"use strict";
r.d(t, {
u: () => i
});
var n = r(3878);
function i(e, t = !1, r, i) {
(0, n.DD)("visibilitychange", function() {
if (t) return void("hidden" === document.visibilityState && e());
e(document.visibilityState)
}, r, i)
}
},
3241: (e, t, r) => {
"use strict";
r.d(t, {
W: () => o
});
var n = r(6154);
const i = "newrelic";
function o(e = {}) {
try {
n.gm.dispatchEvent(new CustomEvent(i, {
detail: e
}))
} catch (e) {}
}
},
3304: (e, t, r) => {
"use strict";
r.d(t, {
A: () => o
});
var n = r(7836);
const i = () => {
const e = new WeakSet;
return (t, r) => {
if ("object" == typeof r && null !== r) {
if (e.has(r)) return;
e.add(r)
}
return r
}
};
function o(e) {
try {
return JSON.stringify(e, i()) ? ? ""
} catch (e) {
try {
n.ee.emit("internal-error", [e])
} catch (e) {}
return ""
}
}
},
3333: (e, t, r) => {
"use strict";
r.d(t, {
$v: () => d,
TZ: () => n,
Xh: () => c,
Zp: () => i,
kd: () => u,
mq: () => a,
nf: () => s,
qN: () => o
});
const n = r(860).K7.genericEvents,
i = ["auxclick", "click", "copy", "keydown", "paste", "scrollend"],
o = ["focus", "blur"],
s = 4,
a = 1e3,
c = 2e3,
u = ["PageAction", "UserAction", "BrowserPerformance"],
d = {
RESOURCES: "experimental.resources",
REGISTER: "register"
}
},
3434: (e, t, r) => {
"use strict";
r.d(t, {
Jt: () => o,
YM: () => u
});
var n = r(7836),
i = r(5607);
const o = "nr@original:".concat(i.W),
s = 50;
var a = Object.prototype.hasOwnProperty,
c = !1;
function u(e, t) {
return e || (e = n.ee), r.inPlace = function(e, t, n, i, o) {
n || (n = "");
const s = "-" === n.charAt(0);
for (let a = 0; a < t.length; a++) {
const c = t[a],
u = e[c];
l(u) || (e[c] = r(u, s ? c + n : n, i, c, o))
}
}, r.flag = o, r;
function r(t, r, n, c, u) {
return l(t) ? t : (r || (r = ""), nrWrapper[o] = t, function(e, t, r) {
if (Object.defineProperty && Object.keys) try {
return Object.keys(e).forEach(function(r) {
Object.defineProperty(t, r, {
get: function() {
return e[r]
},
set: function(t) {
return e[r] = t, t
}
})
}), t
} catch (e) {
d([e], r)
}
for (var n in e) a.call(e, n) && (t[n] = e[n])
}(t, nrWrapper, e), nrWrapper);
function nrWrapper() {
var o, a, l, f;
let h;
try {
a = this, o = [...arguments], l = "function" == typeof n ? n(o, a) : n || {}
} catch (t) {
d([t, "", [o, a, c], l], e)
}
i(r + "start", [o, a, c], l, u);
const p = performance.now();
let g;
try {
return f = t.apply(a, o), g = performance.now(), f
} catch (e) {
throw g = performance.now(), i(r + "err", [o, a, e], l, u), h = e, h
} finally {
const e = g - p,
t = {
start: p,
end: g,
duration: e,
isLongTask: e >= s,
methodName: c,
thrownError: h
};
t.isLongTask && i("long-task", [t, a], l, u), i(r + "end", [o, a, f], l, u)
}
}
}
function i(r, n, i, o) {
if (!c || t) {
var s = c;
c = !0;
try {
e.emit(r, n, i, t, o)
} catch (t) {
d([t, r, n, i], e)
}
c = s
}
}
}
function d(e, t) {
t || (t = n.ee);
try {
t.emit("internal-error", e)
} catch (e) {}
}
function l(e) {
return !(e && "function" == typeof e && e.apply && !e[o])
}
},
3606: (e, t, r) => {
"use strict";
r.d(t, {
i: () => o
});
var n = r(9908);
o.on = s;
var i = o.handlers = {};
function o(e, t, r, o) {
s(o || n.d, i, e, t, r)
}
function s(e, t, r, i, o) {
o || (o = "feature"), e || (e = n.d);
var s = t[o] = t[o] || {};
(s[r] = s[r] || []).push([e, i])
}
},
3738: (e, t, r) => {
"use strict";
r.d(t, {
He: () => i,
Kp: () => a,
Lc: () => u,
Rz: () => d,
TZ: () => n,
bD: () => o,
d3: () => s,
jx: () => l,
sl: () => f,
uP: () => c
});
const n = r(860).K7.sessionTrace,
i = "bstResource",
o = "resource",
s = "-start",
a = "-end",
c = "fn" + s,
u = "fn" + a,
d = "pushState",
l = 1e3,
f = 3e4
},
3785: (e, t, r) => {
"use strict";
r.d(t, {
R: () => c,
b: () => u
});
var n = r(9908),
i = r(1863),
o = r(860),
s = r(8154),
a = r(993);
function c(e, t, r = {}, c = a.p_.INFO, u, d = (0, i.t)()) {
(0, n.p)(s.xV, ["API/logging/".concat(c.toLowerCase(), "/called")], void 0, o.K7.metrics, e), (0, n.p)(a.ET, [d, t, r, c, u], void 0, o.K7.logging, e)
}
function u(e) {
return "string" == typeof e && Object.values(a.p_).some(t => t === e.toUpperCase().trim())
}
},
3878: (e, t, r) => {
"use strict";
function n(e, t) {
return {
capture: e,
passive: !1,
signal: t
}
}
function i(e, t, r = !1, i) {
window.addEventListener(e, t, n(r, i))
}
function o(e, t, r = !1, i) {
document.addEventListener(e, t, n(r, i))
}
r.d(t, {
DD: () => o,
jT: () => n,
sp: () => i
})
},
3962: (e, t, r) => {
"use strict";
r.d(t, {
AM: () => s,
O2: () => l,
OV: () => o,
Qu: () => f,
TZ: () => c,
ih: () => h,
pP: () => a,
t1: () => d,
tC: () => i,
wD: () => u
});
var n = r(860);
const i = ["click", "keydown", "submit"],
o = "popstate",
s = "api",
a = "initialPageLoad",
c = n.K7.softNav,
u = 5e3,
d = 500,
l = {
INITIAL_PAGE_LOAD: "",
ROUTE_CHANGE: 1,
UNSPECIFIED: 2
},
f = {
INTERACTION: 1,
AJAX: 2,
CUSTOM_END: 3,
CUSTOM_TRACER: 4
},
h = {
IP: "in progress",
PF: "pending finish",
FIN: "finished",
CAN: "cancelled"
}
},
4234: (e, t, r) => {
"use strict";
r.d(t, {
W: () => o
});
var n = r(7836),
i = r(1687);
class o {
constructor(e, t) {
this.agentIdentifier = e, this.ee = n.ee.get(e), this.featureName = t, this.blocked = !1
}
deregisterDrain() {
(0, i.x3)(this.agentIdentifier, this.featureName)
}
}
},
4261: (e, t, r) => {
"use strict";
r.d(t, {
$9: () => d,
BL: () => c,
CH: () => p,
Dl: () => R,
Fw: () => w,
PA: () => v,
Pl: () => n,
Pv: () => A,
Tb: () => f,
U2: () => s,
V1: () => E,
Wb: () => T,
bt: () => y,
cD: () => b,
d3: () => x,
dT: () => u,
eY: () => g,
fF: () => h,
hG: () => o,
hw: () => i,
k6: () => a,
nb: () => m,
o5: () => l
});
const n = "api-",
i = n + "ixn-",
o = "addPageAction",
s = "addToTrace",
a = "addRelease",
c = "finished",
u = "interaction",
d = "log",
l = "noticeError",
f = "pauseReplay",
h = "recordCustomEvent",
p = "recordReplay",
g = "register",
m = "setApplicationVersion",
v = "setCurrentRouteName",
b = "setCustomAttribute",
y = "setErrorHandler",
w = "setPageViewName",
R = "setUserId",
x = "start",
T = "wrapLogger",
E = "measure",
A = "consent"
},
4387: (e, t, r) => {
"use strict";
function n(e = {}) {
return !(!e.id || !e.name)
}
function i(e) {
return "string" == typeof e && e.trim().length < 501 || "number" == typeof e
}
function o(e, t) {
if (2 !== t ? .harvestEndpointVersion) return {};
const r = t.agentRef.runtime.appMetadata.agents[0].entityGuid;
return n(e) ? {
"mfe.id": e.id,
"mfe.name": e.name,
eventSource: e.eventSource,
"parent.id": e.parent ? .id || r
} : {
"entity.guid": r,
appId: t.agentRef.info.applicationID
}
}
r.d(t, {
Ux: () => o,
c7: () => n,
yo: () => i
})
},
5205: (e, t, r) => {
"use strict";
r.d(t, {
j: () => _
});
var n = r(384),
i = r(1741);
var o = r(2555),
s = r(3333);
const a = e => {
if (!e || "string" != typeof e) return !1;
try {
document.createDocumentFragment().querySelector(e)
} catch {
return !1
}
return !0
};
var c = r(2614),
u = r(944),
d = r(8122);
const l = "[data-nr-mask]",
f = e => (0, d.a)(e, (() => {
const e = {
feature_flags: [],
experimental: {
allow_registered_children: !1,
resources: !1
},
mask_selector: "*",
block_selector: "[data-nr-block]",
mask_input_options: {
color: !1,
date: !1,
"datetime-local": !1,
email: !1,
month: !1,
number: !1,
range: !1,
search: !1,
tel: !1,
text: !1,
time: !1,
url: !1,
week: !1,
textarea: !1,
select: !1,
password: !0
}
};
return {
ajax: {
deny_list: void 0,
block_internal: !0,
enabled: !0,
autoStart: !0
},
api: {
get allow_registered_children() {
return e.feature_flags.includes(s.$v.REGISTER) || e.experimental.allow_registered_children
},
set allow_registered_children(t) {
e.experimental.allow_registered_children = t
},
duplicate_registered_data: !1
},
browser_consent_mode: {
enabled: !1
},
distributed_tracing: {
enabled: void 0,
exclude_newrelic_header: void 0,
cors_use_newrelic_header: void 0,
cors_use_tracecontext_headers: void 0,
allowed_origins: void 0
},
get feature_flags() {
return e.feature_flags
},
set feature_flags(t) {
e.feature_flags = t
},
generic_events: {
enabled: !0,
autoStart: !0
},
harvest: {
interval: 30
},
jserrors: {
enabled: !0,
autoStart: !0
},
logging: {
enabled: !0,
autoStart: !0
},
metrics: {
enabled: !0,
autoStart: !0
},
obfuscate: void 0,
page_action: {
enabled: !0
},
page_view_event: {
enabled: !0,
autoStart: !0
},
page_view_timing: {
enabled: !0,
autoStart: !0
},
performance: {
capture_marks: !1,
capture_measures: !1,
capture_detail: !0,
resources: {
get enabled() {
return e.feature_flags.includes(s.$v.RESOURCES) || e.experimental.resources
},
set enabled(t) {
e.experimental.resources = t
},
asset_types: [],
first_party_domains: [],
ignore_newrelic: !0
}
},
privacy: {
cookies_enabled: !0
},
proxy: {
assets: void 0,
beacon: void 0
},
session: {
expiresMs: c.wk,
inactiveMs: c.BB
},
session_replay: {
autoStart: !0,
enabled: !1,
preload: !1,
sampling_rate: 10,
error_sampling_rate: 100,
collect_fonts: !1,
inline_images: !1,
fix_stylesheets: !0,
mask_all_inputs: !0,
get mask_text_selector() {
return e.mask_selector
},
set mask_text_selector(t) {
a(t) ? e.mask_selector = "".concat(t, ",").concat(l) : "" === t || null === t ? e.mask_selector = l : (0, u.R)(5, t)
},
get block_class() {
return "nr-block"
},
get ignore_class() {
return "nr-ignore"
},
get mask_text_class() {
return "nr-mask"
},
get block_selector() {
return e.block_selector
},
set block_selector(t) {
a(t) ? e.block_selector += ",".concat(t) : "" !== t && (0, u.R)(6, t)
},
get mask_input_options() {
return e.mask_input_options
},
set mask_input_options(t) {
t && "object" == typeof t ? e.mask_input_options = { ...t,
password: !0
} : (0, u.R)(7, t)
}
},
session_trace: {
enabled: !0,
autoStart: !0
},
soft_navigations: {
enabled: !0,
autoStart: !0
},
spa: {
enabled: !0,
autoStart: !0
},
ssl: void 0,
user_actions: {
enabled: !0,
elementAttributes: ["id", "className", "tagName", "type"]
}
}
})());
var h = r(6154),
p = r(9324);
let g = 0;
const m = {
buildEnv: p.F3,
distMethod: p.Xs,
version: p.xv,
originTime: h.WN
},
v = {
consented: !1
},
b = {
appMetadata: {},
get consented() {
return this.session ? .state ? .consent || v.consented
},
set consented(e) {
v.consented = e
},
customTransaction: void 0,
denyList: void 0,
disabled: !1,
harvester: void 0,
isolatedBacklog: !1,
isRecording: !1,
loaderType: void 0,
maxBytes: 3e4,
obfuscator: void 0,
onerror: void 0,
ptid: void 0,
releaseIds: {},
session: void 0,
timeKeeper: void 0,
registeredEntities: [],
jsAttributesMetadata: {
bytes: 0
},
get harvestCount() {
return ++g
}
},
y = e => {
const t = (0, d.a)(e, b),
r = Object.keys(m).reduce((e, t) => (e[t] = {
value: m[t],
writable: !1,
configurable: !0,
enumerable: !0
}, e), {});
return Object.defineProperties(t, r)
};
var w = r(5701);
const R = e => {
const t = e.startsWith("http");
e += "/", r.p = t ? e : "https://" + e
};
var x = r(7836),
T = r(3241);
const E = {
accountID: void 0,
trustKey: void 0,
agentID: void 0,
licenseKey: void 0,
applicationID: void 0,
xpid: void 0
},
A = e => (0, d.a)(e, E),
S = new Set;
function _(e, t = {}, r, s) {
let {
init: a,
info: c,
loader_config: u,
runtime: d = {},
exposed: l = !0
} = t;
if (!c) {
const e = (0, n.pV)();
a = e.init, c = e.info, u = e.loader_config
}
e.init = f(a || {}), e.loader_config = A(u || {}), c.jsAttributes ? ? = {}, h.bv && (c.jsAttributes.isWorker = !0), e.info = (0, o.D)(c);
const p = e.init,
g = [c.beacon, c.errorBeacon];
S.has(e.agentIdentifier) || (p.proxy.assets && (R(p.proxy.assets), g.push(p.proxy.assets)), p.proxy.beacon && g.push(p.proxy.beacon), e.beacons = [...g], function(e) {
const t = (0, n.pV)();
Object.getOwnPropertyNames(i.W.prototype).forEach(r => {
const n = i.W.prototype[r];
if ("function" != typeof n || "constructor" === n) return;
let o = t[r];
e[r] && !1 !== e.exposed && "micro-agent" !== e.runtime ? .loaderType && (t[r] = (...t) => {
const n = e[r](...t);
return o ? o(...t) : n
})
})
}(e), (0, n.US)("activatedFeatures", w.B), e.runSoftNavOverSpa && = !0 === p.soft_navigations.enabled && p.feature_flags.includes("soft_nav")), d.denyList = [...p.ajax.deny_list || [], ...p.ajax.block_internal ? g : []], d.ptid = e.agentIdentifier, d.loaderType = r, e.runtime = y(d), S.has(e.agentIdentifier) || (e.ee = x.ee.get(e.agentIdentifier), e.exposed = l, (0, T.W)({
agentIdentifier: e.agentIdentifier,
drained: !!w.B ? .[e.agentIdentifier],
type: "lifecycle",
name: "initialize",
feature: void 0,
data: e.config
})), S.add(e.agentIdentifier)
}
},
5270: (e, t, r) => {
"use strict";
r.d(t, {
Aw: () => s,
SR: () => o,
rF: () => a
});
var n = r(384),
i = r(7767);
function o(e) {
return !!(0, n.dV)().o.MO && (0, i.V)(e) && !0 === e ? .session_trace.enabled
}
function s(e) {
return !0 === e ? .session_replay.preload && o(e)
}
function a(e, t) {
try {
if ("string" == typeof t ? .type) {
if ("password" === t.type.toLowerCase()) return "*".repeat(e ? .length || 0);
if (void 0 !== t ? .dataset ? .nrUnmask || t ? .classList ? .contains("nr-unmask")) return e
}
} catch (e) {}
return "string" == typeof e ? e.replace(/[\S]/g, "*") : "*".repeat(e ? .length || 0)
}
},
5289: (e, t, r) => {
"use strict";
r.d(t, {
GG: () => o,
Qr: () => a,
sB: () => s
});
var n = r(3878);
function i() {
return "undefined" == typeof document || "complete" === document.readyState
}
function o(e, t) {
if (i()) return e();
(0, n.sp)("load", e, t)
}
function s(e) {
if (i()) return e();
(0, n.DD)("DOMContentLoaded", e)
}
function a(e) {
if (i()) return e();
(0, n.sp)("popstate", e)
}
},
5607: (e, t, r) => {
"use strict";
r.d(t, {
W: () => n
});
const n = (0, r(9566).bz)()
},
5701: (e, t, r) => {
"use strict";
r.d(t, {
B: () => o,
t: () => s
});
var n = r(3241);
const i = new Set,
o = {};
function s(e, t) {
const r = t.agentIdentifier;
o[r] ? ? = {}, e && "object" == typeof e && (i.has(r) || (t.ee.emit("rumresp", [e]), o[r] = e, i.add(r), (0, n.W)({
agentIdentifier: r,
loaded: !0,
drained: !0,
type: "lifecycle",
name: "load",
feature: void 0,
data: e
})))
}
},
6154: (e, t, r) => {
"use strict";
r.d(t, {
A4: () => a,
OF: () => d,
RI: () => i,
WN: () => h,
bv: () => o,
gm: () => s,
lR: () => f,
m: () => u,
mw: () => c,
sb: () => l
});
var n = r(1863);
const i = "undefined" != typeof window && !!window.document,
o = "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator),
s = i ? window : "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis),
a = "complete" === s ? .document ? .readyState,
c = Boolean("hidden" === s ? .document ? .visibilityState),
u = "" + s ? .location,
d = /iPad|iPhone|iPod/.test(s.navigator ? .userAgent),
l = d && "undefined" == typeof SharedWorker,
f = (() => {
const e = s.navigator ? .userAgent ? .match(/Firefox[/\s](\d+\.\d+)/);
return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
})(),
h = Date.now() - (0, n.t)()
},
6344: (e, t, r) => {
"use strict";
r.d(t, {
BB: () => d,
Qb: () => l,
TZ: () => i,
Ug: () => s,
Vh: () => o,
_s: () => a,
bc: () => u,
yP: () => c
});
var n = r(2614);
const i = r(860).K7.sessionReplay,
o = "errorDuringReplay",
s = .12,
a = {
DomContentLoaded: 0,
Load: 1,
FullSnapshot: 2,
IncrementalSnapshot: 3,
Meta: 4,
Custom: 5
},
c = {
[n.g.ERROR]: 15e3,
[n.g.FULL]: 3e5,
[n.g.OFF]: 0
},
u = {
RESET: {
message: "Session was reset",
sm: "Reset"
},
IMPORT: {
message: "Recorder failed to import",
sm: "Import"
},
TOO_MANY: {
message: "429: Too Many Requests",
sm: "Too-Many"
},
TOO_BIG: {
message: "Payload was too large",
sm: "Too-Big"
},
CROSS_TAB: {
message: "Session Entity was set to OFF on another tab",
sm: "Cross-Tab"
},
ENTITLEMENTS: {
message: "Session Replay is not allowed and will not be started",
sm: "Entitlement"
}
},
d = 5e3,
l = {
API: "api",
RESUME: "resume",
SWITCH_TO_FULL: "switchToFull",
INITIALIZE: "initialize",
PRELOAD: "preload"
}
},
6389: (e, t, r) => {
"use strict";
function n(e, t = 500, r = {}) {
const n = r ? .leading || !1;
let i;
return (...r) => {
n && void 0 === i && (e.apply(this, r), i = setTimeout(() => {
i = clearTimeout(i)
}, t)), n || (clearTimeout(i), i = setTimeout(() => {
e.apply(this, r)
}, t))
}
}
function i(e) {
let t = !1;
return (...r) => {
t || (t = !0, e.apply(this, r))
}
}
r.d(t, {
J: () => i,
s: () => n
})
},
6630: (e, t, r) => {
"use strict";
r.d(t, {
T: () => n
});
const n = r(860).K7.pageViewEvent
},
6774: (e, t, r) => {
"use strict";
r.d(t, {
T: () => n
});
const n = r(860).K7.jserrors
},
7295: (e, t, r) => {
"use strict";
r.d(t, {
Xv: () => s,
gX: () => i,
iW: () => o
});
var n = [];
function i(e) {
if (!e || o(e)) return !1;
if (0 === n.length) return !0;
for (var t = 0; t < n.length; t++) {
var r = n[t];
if ("*" === r.hostname) return !1;
if (a(r.hostname, e.hostname) && c(r.pathname, e.pathname)) return !1
}
return !0
}
function o(e) {
return void 0 === e.hostname
}
function s(e) {
if (n = [], e && e.length)
for (var t = 0; t < e.length; t++) {
let r = e[t];
if (!r) continue;
0 === r.indexOf("http://") ? r = r.substring(7) : 0 === r.indexOf("https://") && (r = r.substring(8));
const i = r.indexOf("/");
let o, s;
i > 0 ? (o = r.substring(0, i), s = r.substring(i)) : (o = r, s = "");
let [a] = o.split(":");
n.push({
hostname: a,
pathname: s
})
}
}
function a(e, t) {
return !(e.length > t.length) && t.indexOf(e) === t.length - e.length
}
function c(e, t) {
return 0 === e.indexOf("/") && (e = e.substring(1)), 0 === t.indexOf("/") && (t = t.substring(1)), "" === e || e === t
}
},
7378: (e, t, r) => {
"use strict";
r.d(t, {
$p: () => x,
BR: () => b,
Kp: () => R,
L3: () => y,
Lc: () => c,
NC: () => o,
SG: () => d,
TZ: () => i,
U6: () => p,
UT: () => m,
d3: () => w,
dT: () => f,
e5: () => E,
gx: () => v,
l9: () => l,
oW: () => h,
op: () => g,
rw: () => u,
tH: () => A,
uP: () => a,
wW: () => T,
xq: () => s
});
var n = r(384);
const i = r(860).K7.spa,
o = ["click", "submit", "keypress", "keydown", "keyup", "change"],
s = 999,
a = "fn-start",
c = "fn-end",
u = "cb-start",
d = "api-ixn-",
l = "remaining",
f = "interaction",
h = "spaNode",
p = "jsonpNode",
g = "fetch-start",
m = "fetch-done",
v = "fetch-body-",
b = "jsonp-end",
y = (0, n.dV)().o.ST,
w = "-start",
R = "-end",
x = "-body",
T = "cb" + R,
E = "jsTime",
A = "fetch"
},
7485: (e, t, r) => {
"use strict";
r.d(t, {
D: () => i
});
var n = r(6154);
function i(e) {
if (0 === (e || "").indexOf("data:")) return {
protocol: "data"
};
try {
const t = new URL(e, location.href),
r = {
port: t.port,
hostname: t.hostname,
pathname: t.pathname,
search: t.search,
protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
sameOrigin: t.protocol === n.gm ? .location ? .protocol && t.host === n.gm ? .location ? .host
};
return r.port && "" !== r.port || ("http:" === t.protocol && (r.port = "80"), "https:" === t.protocol && (r.port = "443")), r.pathname && "" !== r.pathname ? r.pathname.startsWith("/") || (r.pathname = "/".concat(r.pathname)) : r.pathname = "/", r
} catch (e) {
return {}
}
}
},
7699: (e, t, r) => {
"use strict";
r.d(t, {
It: () => o,
KC: () => a,
No: () => i,
qh: () => s
});
var n = r(860);
const i = 16e3,
o = 1e6,
s = "SESSION_ERROR",
a = {
[n.K7.logging]: !0,
[n.K7.genericEvents]: !1,
[n.K7.jserrors]: !1,
[n.K7.ajax]: !1
}
},
7767: (e, t, r) => {
"use strict";
r.d(t, {
V: () => i
});
var n = r(6154);
const i = e => n.RI && !0 === e ? .privacy.cookies_enabled
},
7836: (e, t, r) => {
"use strict";
r.d(t, {
P: () => a,
ee: () => c
});
var n = r(384),
i = r(8990),
o = r(2646),
s = r(5607);
const a = "nr@context:".concat(s.W),
c = function e(t, r) {
var n = {},
s = {},
d = {},
l = !1;
try {
l = 16 === r.length && u.initializedAgents ? .[r] ? .runtime.isolatedBacklog
} catch (e) {}
var f = {
on: p,
addEventListener: p,
removeEventListener: function(e, t) {
var r = n[e];
if (!r) return;
for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1)
},
emit: function(e, r, n, i, o) {
!1 !== o && (o = !0);
if (c.aborted && !i) return;
t && o && t.emit(e, r, n);
var a = h(n);
g(e).forEach(e => {
e.apply(a, r)
});
var u = v()[s[e]];
u && u.push([f, e, r, a]);
return a
},
get: m,
listeners: g,
context: h,
buffer: function(e, t) {
const r = v();
if (t = t || "feature", f.aborted) return;
Object.entries(e || {}).forEach(([e, n]) => {
s[n] = t, t in r || (r[t] = [])
})
},
abort: function() {
f._aborted = !0, Object.keys(f.backlog).forEach(e => {
delete f.backlog[e]
})
},
isBuffering: function(e) {
return !!v()[s[e]]
},
debugId: r,
backlog: l ? {} : t && "object" == typeof t.backlog ? t.backlog : {},
isolatedBacklog: l
};
return Object.defineProperty(f, "aborted", {
get: () => {
let e = f._aborted || !1;
return e || (t && (e = t.aborted), e)
}
}), f;
function h(e) {
return e && e instanceof o.y ? e : e ? (0, i.I)(e, a, () => new o.y(a)) : new o.y(a)
}
function p(e, t) {
n[e] = g(e).concat(t)
}
function g(e) {
return n[e] || []
}
function m(t) {
return d[t] = d[t] || e(f, t)
}
function v() {
return f.backlog
}
}(void 0, "globalEE"),
u = (0, n.Zm)();
u.ee || (u.ee = c)
},
8122: (e, t, r) => {
"use strict";
r.d(t, {
a: () => i
});
var n = r(944);
function i(e, t) {
try {
if (!e || "object" != typeof e) return (0, n.R)(3);
if (!t || "object" != typeof t) return (0, n.R)(4);
const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
o = 0 === Object.keys(r).length ? e : r;
for (let s in o)
if (void 0 !== e[s]) try {
if (null === e[s]) {
r[s] = null;
continue
}
Array.isArray(e[s]) && Array.isArray(t[s]) ? r[s] = Array.from(new Set([...e[s], ...t[s]])) : "object" == typeof e[s] && "object" == typeof t[s] ? r[s] = i(e[s], t[s]) : r[s] = e[s]
} catch (e) {
r[s] || (0, n.R)(1, e)
}
return r
} catch (e) {
(0, n.R)(2, e)
}
}
},
8139: (e, t, r) => {
"use strict";
r.d(t, {
u: () => f
});
var n = r(7836),
i = r(3434),
o = r(8990),
s = r(6154);
const a = {},
c = s.gm.XMLHttpRequest,
u = "addEventListener",
d = "removeEventListener",
l = "nr@wrapped:".concat(n.P);
function f(e) {
var t = function(e) {
return (e || n.ee).get("events")
}(e);
if (a[t.debugId]++) return t;
a[t.debugId] = 1;
var r = (0, i.YM)(t, !0);
function f(e) {
r.inPlace(e, [u, d], "-", p)
}
function p(e, t) {
return e[1]
}
return "getPrototypeOf" in Object && (s.RI && h(document, f), c && h(c.prototype, f), h(s.gm, f)), t.on(u + "-start", function(e, t) {
var n = e[1];
if (null !== n && ("function" == typeof n || "object" == typeof n) && "newrelic" !== e[0]) {
var i = (0, o.I)(n, l, function() {
var e = {
object: function() {
if ("function" != typeof n.handleEvent) return;
return n.handleEvent.apply(n, arguments)
},
function: n
}[typeof n];
return e ? r(e, "fn-", null, e.name || "anonymous") : n
});
this.wrapped = e[1] = i
}
}), t.on(d + "-start", function(e) {
e[1] = this.wrapped || e[1]
}), t
}
function h(e, t, ...r) {
let n = e;
for (;
"object" == typeof n && !Object.prototype.hasOwnProperty.call(n, u);) n = Object.getPrototypeOf(n);
n && t(n, ...r)
}
},
8154: (e, t, r) => {
"use strict";
r.d(t, {
z_: () => o,
XG: () => a,
TZ: () => n,
rs: () => i,
xV: () => s
});
r(6154), r(9566), r(384);
const n = r(860).K7.metrics,
i = "sm",
o = "cm",
s = "storeSupportabilityMetrics",
a = "storeEventMetrics"
},
8374: (e, t, r) => {
r.nc = (() => {
try {
return document ? .currentScript ? .nonce
} catch (e) {}
return ""
})()
},
8990: (e, t, r) => {
"use strict";
r.d(t, {
I: () => i
});
var n = Object.prototype.hasOwnProperty;
function i(e, t, r) {
if (n.call(e, t)) return e[t];
var i = r();
if (Object.defineProperty && Object.keys) try {
return Object.defineProperty(e, t, {
value: i,
writable: !0,
enumerable: !1
}), i
} catch (e) {}
return e[t] = i, i
}
},
9300: (e, t, r) => {
"use strict";
r.d(t, {
T: () => n
});
const n = r(860).K7.ajax
},
9324: (e, t, r) => {
"use strict";
r.d(t, {
AJ: () => s,
F3: () => i,
Xs: () => o,
Yq: () => a,
xv: () => n
});
const n = "1.303.0",
i = "PROD",
o = "CDN",
s = "@newrelic/rrweb",
a = "1.0.1"
},
9566: (e, t, r) => {
"use strict";
r.d(t, {
LA: () => a,
ZF: () => c,
bz: () => s,
el: () => u
});
var n = r(6154);
const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
function o(e, t) {
return e ? 15 & e[t] : 16 * Math.random() | 0
}
function s() {
const e = n.gm ? .crypto || n.gm ? .msCrypto;
let t, r = 0;
return e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(30))), i.split("").map(e => "x" === e ? o(t, r++).toString(16) : "y" === e ? (3 & o() | 8).toString(16) : e).join("")
}
function a(e) {
const t = n.gm ? .crypto || n.gm ? .msCrypto;
let r, i = 0;
t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
const s = [];
for (var a = 0; a < e; a++) s.push(o(r, i++).toString(16));
return s.join("")
}
function c() {
return a(16)
}
function u() {
return a(32)
}
},
9908: (e, t, r) => {
"use strict";
r.d(t, {
d: () => n,
p: () => i
});
var n = r(7836).ee.get("handle");
function i(e, t, r, i, o) {
o ? (o.buffer([e], i), o.emit(e, t, r)) : (n.buffer([e], i), n.emit(e, t, r))
}
}
},
n = {};
function i(e) {
var t = n[e];
if (void 0 !== t) return t.exports;
var o = n[e] = {
exports: {}
};
return r[e](o, o.exports, i), o.exports
}
i.m = r, i.d = (e, t) => {
for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
enumerable: !0,
get: t[r]
})
}, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), [])), i.u = e => ({
212: "nr-spa-compressor",
249: "nr-spa-recorder",
478: "nr-spa"
}[e] + "-1.303.0.min.js"), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "NRBA-1.303.0.PROD:", i.l = (r, n, o, s) => {
if (e[r]) e[r].push(n);
else {
var a, c;
if (void 0 !== o)
for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
var l = u[d];
if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + o) {
a = l;
break
}
}
if (!a) {
c = !0;
var f = {
478: "sha512-Q1pLqcoiNmLHv0rtq3wFkJBA3kofBdRJl0ExDl0mTuAoCBd0qe/1J0XWrDlQKuNlUryL6aZfVkAMPLmoikWIoQ==",
249: "sha512-695ZzudsxlMtHKnpDNvkMlJd3tdMtY03IQKVCw9SX12tjUC+f7Nrx5tnWO72Vg9RFf6DSY6wVmM3cEkRM12kkQ==",
212: "sha512-18Gx1wIBsppcn0AnKFhwgw4IciNgFxiw3J74W393Ape+wtg4hlg7t6SBKsIE/Dk/tfl2yltgcgBFvYRs283AFg=="
};
(a = document.createElement("script")).charset = "utf-8", i.nc && a.setAttribute("nonce", i.nc), a.setAttribute("data-webpack", t + o), a.src = r, 0 !== a.src.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"), f[s] && (a.integrity = f[s])
}
e[r] = [n];
var h = (t, n) => {
a.onerror = a.onload = null, clearTimeout(p);
var i = e[r];
if (delete e[r], a.parentNode && a.parentNode.removeChild(a), i && i.forEach(e => e(n)), t) return t(n)
},
p = setTimeout(h.bind(null, void 0, {
type: "timeout",
target: a
}), 12e4);
a.onerror = h.bind(null, a.onerror), a.onload = h.bind(null, a.onload), c && document.head.appendChild(a)
}
}, i.r = e => {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
})
}, i.p = "https://js-agent.newrelic.com/", (() => {
var e = {
38: 0,
788: 0
};
i.f.j = (t, r) => {
var n = i.o(e, t) ? e[t] : void 0;
if (0 !== n)
if (n) r.push(n[2]);
else {
var o = new Promise((r, i) => n = e[t] = [r, i]);
r.push(n[2] = o);
var s = i.p + i.u(t),
a = new Error;
i.l(s, r => {
if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
var o = r && ("load" === r.type ? "missing" : r.type),
s = r && r.target && r.target.src;
a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")", a.name = "ChunkLoadError", a.type = o, a.request = s, n[1](a)
}
}, "chunk-" + t, t)
}
};
var t = (t, r) => {
var n, o, [s, a, c] = r,
u = 0;
if (s.some(t => 0 !== e[t])) {
for (n in a) i.o(a, n) && (i.m[n] = a[n]);
if (c) c(i)
}
for (t && t(r); u < s.length; u++) o = s[u], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
},
r = self["webpackChunk:NRBA-1.303.0.PROD"] = self["webpackChunk:NRBA-1.303.0.PROD"] || [];
r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
})(), (() => {
"use strict";
i(8374);
var e = i(9566),
t = i(1741);
class r extends t.W {
agentIdentifier = (0, e.LA)(16)
}
var n = i(860);
const o = Object.values(n.K7);
var s = i(5205);
var a = i(9908),
c = i(1863),
u = i(4261),
d = i(3241),
l = i(944),
f = i(5701),
h = i(8154);
function p(e, t, i, o) {
const s = o || i;
!s || s[e] && s[e] !== r.prototype[e] || (s[e] = function() {
(0, a.p)(h.xV, ["API/" + e + "/called"], void 0, n.K7.metrics, i.ee), (0, d.W)({
agentIdentifier: i.agentIdentifier,
drained: !!f.B ? .[i.agentIdentifier],
type: "data",
name: "api",
feature: u.Pl + e,
data: {}
});
try {
return t.apply(this, arguments)
} catch (e) {
(0, l.R)(23, e)
}
})
}
function g(e, t, r, n, i) {
const o = e.info;
null === r ? delete o.jsAttributes[t] : o.jsAttributes[t] = r, (i || null === r) && (0, a.p)(u.Pl + n, [(0, c.t)(), t, r], void 0, "session", e.ee)
}
var m = i(1687),
v = i(4234),
b = i(5289),
y = i(6154),
w = i(5270),
R = i(7767),
x = i(6389),
T = i(7699);
class E extends v.W {
constructor(e, t) {
super(e.agentIdentifier, t), this.agentRef = e, this.abortHandler = void 0, this.featAggregate = void 0, this.loadedSuccessfully = void 0, this.onAggregateImported = new Promise(e => {
this.loadedSuccessfully = e
}), this.deferred = Promise.resolve(), !1 === e.init[this.featureName].autoStart ? this.deferred = new Promise((t, r) => {
this.ee.on("manual-start-all", (0, x.J)(() => {
(0, m.Ak)(e.agentIdentifier, this.featureName), t()
}))
}) : (0, m.Ak)(e.agentIdentifier, t)
}
importAggregator(e, t, r = {}) {
if (this.featAggregate) return;
const n = async () => {
let n;
await this.deferred;
try {
if ((0, R.V)(e.init)) {
const {
setupAgentSession: t
} = await i.e(478).then(i.bind(i, 8766));
n = t(e)
}
} catch (e) {
(0, l.R)(20, e), this.ee.emit("internal-error", [e]), (0, a.p)(T.qh, [e], void 0, this.featureName, this.ee)
}
try {
if (!this.#t(this.featureName, n, e.init)) return (0, m.Ze)(this.agentIdentifier, this.featureName), void this.loadedSuccessfully(!1);
const {
Aggregate: i
} = await t();
this.featAggregate = new i(e, r), e.runtime.harvester.initializedAggregates.push(this.featAggregate), this.loadedSuccessfully(!0)
} catch (e) {
(0, l.R)(34, e), this.abortHandler ? .(), (0, m.Ze)(this.agentIdentifier, this.featureName, !0), this.loadedSuccessfully(!1), this.ee && this.ee.abort()
}
};
y.RI ? (0, b.GG)(() => n(), !0) : n()
}#
t(e, t, r) {
if (this.blocked) return !1;
switch (e) {
case n.K7.sessionReplay:
return (0, w.SR)(r) && !!t;
case n.K7.sessionTrace:
return !!t;
default:
return !0
}
}
}
var A = i(6630),
S = i(2614);
class _ extends E {
static featureName = A.T;
constructor(e) {
var t;
super(e, A.T), this.setupInspectionEvents(e.agentIdentifier), t = e, p(u.Fw, function(e, r) {
"string" == typeof e && ("/" !== e.charAt(0) && (e = "/" + e), t.runtime.customTransaction = (r || "http://custom.transaction") + e, (0, a.p)(u.Pl + u.Fw, [(0, c.t)()], void 0, void 0, t.ee))
}, t), this.importAggregator(e, () => i.e(478).then(i.bind(i, 1983)))
}
setupInspectionEvents(e) {
const t = (t, r) => {
t && (0, d.W)({
agentIdentifier: e,
timeStamp: t.timeStamp,
loaded: "complete" === t.target.readyState,
type: "window",
name: r,
data: t.target.location + ""
})
};
(0, b.sB)(e => {
t(e, "DOMContentLoaded")
}), (0, b.GG)(e => {
t(e, "load")
}), (0, b.Qr)(e => {
t(e, "navigate")
}), this.ee.on(S.tS.UPDATE, (t, r) => {
(0, d.W)({
agentIdentifier: e,
type: "lifecycle",
name: "session",
data: r
})
})
}
}
var O = i(384);
var N = i(2843),
I = i(3878),
P = i(782);
class j extends E {
static featureName = P.T;
constructor(e) {
super(e, P.T), y.RI && ((0, N.u)(() => (0, a.p)("docHidden", [(0, c.t)()], void 0, P.T, this.ee), !0), (0, I.sp)("pagehide", () => (0, a.p)("winPagehide", [(0, c.t)()], void 0, P.T, this.ee)), this.importAggregator(e, () => i.e(478).then(i.bind(i, 9917))))
}
}
class k extends E {
static featureName = h.TZ;
constructor(e) {
super(e, h.TZ), y.RI && document.addEventListener("securitypolicyviolation", e => {
(0, a.p)(h.xV, ["Generic/CSPViolation/Detected"], void 0, this.featureName, this.ee)
}), this.importAggregator(e, () => i.e(478).then(i.bind(i, 6555)))
}
}
var C = i(6774),
L = i(3304);
class H {
constructor(e, t, r, n, i) {
this.name = "UncaughtError", this.message = "string" == typeof e ? e : (0, L.A)(e), this.sourceURL = t, this.line = r, this.column = n, this.__newrelic = i
}
}
function M(e) {
return U(e) ? e : new H(void 0 !== e ? .message ? e.message : e, e ? .filename || e ? .sourceURL, e ? .lineno || e ? .line, e ? .colno || e ? .col, e ? .__newrelic, e ? .cause)
}
function K(e) {
const t = "Unhandled Promise Rejection: ";
if (!e ? .reason) return;
if (U(e.reason)) {
try {
e.reason.message.startsWith(t) || (e.reason.message = t + e.reason.message)
} catch (e) {}
return M(e.reason)
}
const r = M(e.reason);
return (r.message || "").startsWith(t) || (r.message = t + r.message), r
}
function D(e) {
if (e.error instanceof SyntaxError && !/:\d+$/.test(e.error.stack ? .trim())) {
const t = new H(e.message, e.filename, e.lineno, e.colno, e.error.__newrelic, e.cause);
return t.name = SyntaxError.name, t
}
return U(e.error) ? e.error : M(e)
}
function U(e) {
return e instanceof Error && !!e.stack
}
function F(e, t, r, i, o = (0, c.t)()) {
"string" == typeof e && (e = new Error(e)), (0, a.p)("err", [e, o, !1, t, r.runtime.isRecording, void 0, i], void 0, n.K7.jserrors, r.ee), (0, a.p)("uaErr", [], void 0, n.K7.genericEvents, r.ee)
}
var W = i(4387),
B = i(993),
V = i(3785);
function G(e, {
customAttributes: t = {},
level: r = B.p_.INFO
} = {}, n, i, o = (0, c.t)()) {
(0, V.R)(n.ee, e, t, r, i, o)
}
function z(e, t, r, i, o = (0, c.t)()) {
(0, a.p)(u.Pl + u.hG, [o, e, t, i], void 0, n.K7.genericEvents, r.ee)
}
function Z(e, t, r, i, o = (0, c.t)()) {
const {
start: s,
end: d,
customAttributes: f
} = t || {}, h = {
customAttributes: f || {}
};
if ("object" != typeof h.customAttributes || "string" != typeof e || 0 === e.length) return void(0, l.R)(57);
const p = (e, t) => null == e ? t : "number" == typeof e ? e : e instanceof PerformanceMark ? e.startTime : Number.NaN;
if (h.start = p(s, 0), h.end = p(d, o), Number.isNaN(h.start) || Number.isNaN(h.end))(0, l.R)(57);
else {
if (h.duration = h.end - h.start, !(h.duration < 0)) return (0, a.p)(u.Pl + u.V1, [h, e, i], void 0, n.K7.genericEvents, r.ee), h;
(0, l.R)(58)
}
}
function q(e, t = {}, r, i, o = (0, c.t)()) {
(0, a.p)(u.Pl + u.fF, [o, e, t, i], void 0, n.K7.genericEvents, r.ee)
}
function X(e) {
p(u.eY, function(t) {
return Y(e, t)
}, e)
}
function Y(e, t, r) {
const i = {};
(0, l.R)(54, "newrelic.register"), t || = {}, t.eventSource = "MicroFrontendBrowserAgent", t.licenseKey || = e.info.licenseKey, t.blocked = !1, t.parent = r || {};
let o = () => {};
const s = e.runtime.registeredEntities,
u = s.find(({
metadata: {
target: {
id: e,
name: r
}
}
}) => e === t.id);
if (u) return u.metadata.target.name !== t.name && (u.metadata.target.name = t.name), u;
const d = e => {
t.blocked = !0, o = e
};
e.init.api.allow_registered_children || d((0, x.J)(() => (0, l.R)(55))), (0, W.c7)(t) || d((0, x.J)(() => (0, l.R)(48, t))), (0, W.yo)(t.id) && (0, W.yo)(t.name) || d((0, x.J)(() => (0, l.R)(48, t)));
const f = {
addPageAction: (r, n = {}) => m(z, [r, { ...i,
...n
}, e], t),
log: (r, n = {}) => m(G, [r, { ...n,
customAttributes: { ...i,
...n.customAttributes || {}
}
}, e], t),
measure: (r, n = {}) => m(Z, [r, { ...n,
customAttributes: { ...i,
...n.customAttributes || {}
}
}, e], t),
noticeError: (r, n = {}) => m(F, [r, { ...i,
...n
}, e], t),
register: (t = {}) => m(Y, [e, t], f.metadata.target),
recordCustomEvent: (r, n = {}) => m(q, [r, { ...i,
...n
}, e], t),
setApplicationVersion: e => g("application.version", e),
setCustomAttribute: (e, t) => g(e, t),
setUserId: e => g("enduser.id", e),
metadata: {
customAttributes: i,
target: t
}
},
p = () => (t.blocked && o(), t.blocked);
p() || s.push(f);
const g = (e, t) => {
p() || (i[e] = t)
},
m = (t, r, i) => {
if (p()) return;
const o = (0, c.t)();
(0, a.p)(h.xV, ["API/register/".concat(t.name, "/called")], void 0, n.K7.metrics, e.ee);
try {
return e.init.api.duplicate_registered_data && "register" !== t.name && t(...r, void 0, o), t(...r, i, o)
} catch (e) {
(0, l.R)(50, e)
}
};
return f
}
class J extends E {
static featureName = C.T;
constructor(e) {
var t;
super(e, C.T), t = e, p(u.o5, (e, r) => F(e, r, t), t),
function(e) {
p(u.bt, function(t) {
e.runtime.onerror = t
}, e)
}(e),
function(e) {
let t = 0;
p(u.k6, function(e, r) {
++t > 10 || (this.runtime.releaseIds[e.slice(-200)] = ("" + r).slice(-200))
}, e)
}(e), X(e);
try {
this.removeOnAbort = new AbortController
} catch (e) {}
this.ee.on("internal-error", (t, r) => {
this.abortHandler && (0, a.p)("ierr", [M(t), (0, c.t)(), !0, {}, e.runtime.isRecording, r], void 0, this.featureName, this.ee)
}), y.gm.addEventListener("unhandledrejection", t => {
this.abortHandler && (0, a.p)("err", [K(t), (0, c.t)(), !1, {
unhandledPromiseRejection: 1
}, e.runtime.isRecording], void 0, this.featureName, this.ee)
}, (0, I.jT)(!1, this.removeOnAbort ? .signal)), y.gm.addEventListener("error", t => {
this.abortHandler && (0, a.p)("err", [D(t), (0, c.t)(), !1, {}, e.runtime.isRecording], void 0, this.featureName, this.ee)
}, (0, I.jT)(!1, this.removeOnAbort ? .signal)), this.abortHandler = this.#r, this.importAggregator(e, () => i.e(478).then(i.bind(i, 2176)))
}#
r() {
this.removeOnAbort ? .abort(), this.abortHandler = void 0
}
}
var Q = i(8990);
let ee = 1;
function te(e) {
const t = typeof e;
return !e || "object" !== t && "function" !== t ? -1 : e === y.gm ? 0 : (0, Q.I)(e, "nr@id", function() {
return ee++
})
}
function re(e) {
if ("string" == typeof e && e.length) return e.length;
if ("object" == typeof e) {
if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength) return e.byteLength;
if ("undefined" != typeof Blob && e instanceof Blob && e.size) return e.size;
if (!("undefined" != typeof FormData && e instanceof FormData)) try {
return (0, L.A)(e).length
} catch (e) {
return
}
}
}
var ne = i(8139),
ie = i(7836),
oe = i(3434);
const se = {},
ae = ["open", "send"];
function ce(e) {
var t = e || ie.ee;
const r = function(e) {
return (e || ie.ee).get("xhr")
}(t);
if (void 0 === y.gm.XMLHttpRequest) return r;
if (se[r.debugId]++) return r;
se[r.debugId] = 1, (0, ne.u)(t);
var n = (0, oe.YM)(r),
i = y.gm.XMLHttpRequest,
o = y.gm.MutationObserver,
s = y.gm.Promise,
a = y.gm.setInterval,
c = "readystatechange",
u = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
d = [],
f = y.gm.XMLHttpRequest = function(e) {
const t = new i(e),
o = r.context(t);
try {
r.emit("new-xhr", [t], o), t.addEventListener(c, (s = o, function() {
var e = this;
e.readyState > 3 && !s.resolved && (s.resolved = !0, r.emit("xhr-resolved", [], e)), n.inPlace(e, u, "fn-", b)
}), (0, I.jT)(!1))
} catch (e) {
(0, l.R)(15, e);
try {
r.emit("internal-error", [e])
} catch (e) {}
}
var s;
return t
};
function h(e, t) {
n.inPlace(t, ["onreadystatechange"], "fn-", b)
}
if (function(e, t) {
for (var r in e) t[r] = e[r]
}(i, f), f.prototype = i.prototype, n.inPlace(f.prototype, ae, "-xhr-", b), r.on("send-xhr-start", function(e, t) {
h(e, t),
function(e) {
d.push(e), o && (p ? p.then(v) : a ? a(v) : (g = -g, m.data = g))
}(t)
}), r.on("open-xhr-start", h), o) {
var p = s && s.resolve();
if (!a && !s) {
var g = 1,
m = document.createTextNode(g);
new o(v).observe(m, {
characterData: !0
})
}
} else t.on("fn-end", function(e) {
e[0] && e[0].type === c || v()
});
function v() {
for (var e = 0; e < d.length; e++) h(0, d[e]);
d.length && (d = [])
}
function b(e, t) {
return t
}
return r
}
var ue = "fetch-",
de = ue + "body-",
le = ["arrayBuffer", "blob", "json", "text", "formData"],
fe = y.gm.Request,
he = y.gm.Response,
pe = "prototype";
const ge = {};
function me(e) {
const t = function(e) {
return (e || ie.ee).get("fetch")
}(e);
if (!(fe && he && y.gm.fetch)) return t;
if (ge[t.debugId]++) return t;
function r(e, r, n) {
var i = e[r];
"function" == typeof i && (e[r] = function() {
var e, r = [...arguments],
o = {};
t.emit(n + "before-start", [r], o), o[ie.P] && o[ie.P].dt && (e = o[ie.P].dt);
var s = i.apply(this, r);
return t.emit(n + "start", [r, e], s), s.then(function(e) {
return t.emit(n + "end", [null, e], s), e
}, function(e) {
throw t.emit(n + "end", [e], s), e
})
})
}
return ge[t.debugId] = 1, le.forEach(e => {
r(fe[pe], e, de), r(he[pe], e, de)
}), r(y.gm, "fetch", ue), t.on(ue + "end", function(e, r) {
var n = this;
if (r) {
var i = r.headers.get("content-length");
null !== i && (n.rxSize = i), t.emit(ue + "done", [null, r], n)
} else t.emit(ue + "done", [e], n)
}), t
}
var ve = i(7485);
class be {
constructor(e) {
this.agentRef = e
}
generateTracePayload(t) {
const r = this.agentRef.loader_config;
if (!this.shouldGenerateTrace(t) || !r) return null;
var n = (r.accountID || "").toString() || null,
i = (r.agentID || "").toString() || null,
o = (r.trustKey || "").toString() || null;
if (!n || !i) return null;
var s = (0, e.ZF)(),
a = (0, e.el)(),
c = Date.now(),
u = {
spanId: s,
traceId: a,
timestamp: c
};
return (t.sameOrigin || this.isAllowedOrigin(t) && this.useTraceContextHeadersForCors()) && (u.traceContextParentHeader = this.generateTraceContextParentHeader(s, a), u.traceContextStateHeader = this.generateTraceContextStateHeader(s, c, n, i, o)), (t.sameOrigin && !this.excludeNewrelicHeader() || !t.sameOrigin && this.isAllowedOrigin(t) && this.useNewrelicHeaderForCors()) && (u.newrelicHeader = this.generateTraceHeader(s, a, c, n, i, o)), u
}
generateTraceContextParentHeader(e, t) {
return "00-" + t + "-" + e + "-01"
}
generateTraceContextStateHeader(e, t, r, n, i) {
return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t
}
generateTraceHeader(e, t, r, n, i, o) {
if (!("function" == typeof y.gm ? .btoa)) return null;
var s = {
v: [0, 1],
d: {
ty: "Browser",
ac: n,
ap: i,
id: e,
tr: t,
ti: r
}
};
return o && n !== o && (s.d.tk = o), btoa((0, L.A)(s))
}
shouldGenerateTrace(e) {
return this.agentRef.init ? .distributed_tracing ? .enabled && this.isAllowedOrigin(e)
}
isAllowedOrigin(e) {
var t = !1;
const r = this.agentRef.init ? .distributed_tracing;
if (e.sameOrigin) t = !0;
else if (r ? .allowed_origins instanceof Array)
for (var n = 0; n < r.allowed_origins.length; n++) {
var i = (0, ve.D)(r.allowed_origins[n]);
if (e.hostname === i.hostname && e.protocol === i.protocol && e.port === i.port) {
t = !0;
break
}
}
return t
}
excludeNewrelicHeader() {
var e = this.agentRef.init ? .distributed_tracing;
return !!e && !!e.exclude_newrelic_header
}
useNewrelicHeaderForCors() {
var e = this.agentRef.init ? .distributed_tracing;
return !!e && !1 !== e.cors_use_newrelic_header
}
useTraceContextHeadersForCors() {
var e = this.agentRef.init ? .distributed_tracing;
return !!e && !!e.cors_use_tracecontext_headers
}
}
var ye = i(9300),
we = i(7295);
function Re(e) {
return "string" == typeof e ? e : e instanceof(0, O.dV)().o.REQ ? e.url : y.gm ? .URL && e instanceof URL ? e.href : void 0
}
var xe = ["load", "error", "abort", "timeout"],
Te = xe.length,
Ee = (0, O.dV)().o.REQ,
Ae = (0, O.dV)().o.XHR;
const Se = "X-NewRelic-App-Data";
class _e extends E {
static featureName = ye.T;
constructor(e) {
super(e, ye.T), this.dt = new be(e), this.handler = (e, t, r, n) => (0, a.p)(e, t, r, n, this.ee);
try {
const e = {
xmlhttprequest: "xhr",
fetch: "fetch",
beacon: "beacon"
};
y.gm ? .performance ? .getEntriesByType("resource").forEach(t => {
if (t.initiatorType in e && 0 !== t.responseStatus) {
const r = {
status: t.responseStatus
},
i = {
rxSize: t.transferSize,
duration: Math.floor(t.duration),
cbTime: 0
};
Oe(r, t.name), this.handler("xhr", [r, i, t.startTime, t.responseEnd, e[t.initiatorType]], void 0, n.K7.ajax)
}
})
} catch (e) {}
me(this.ee), ce(this.ee),
function(e, t, r, i) {
function o(e) {
var t = this;
t.totalCbs = 0, t.called = 0, t.cbTime = 0, t.end = E, t.ended = !1, t.xhrGuids = {}, t.lastSize = null, t.loadCaptureCalled = !1, t.params = this.params || {}, t.metrics = this.metrics || {}, t.latestLongtaskEnd = 0, e.addEventListener("load", function(r) {
A(t, e)
}, (0, I.jT)(!1)), y.lR || e.addEventListener("progress", function(e) {
t.lastSize = e.loaded
}, (0, I.jT)(!1))
}
function s(e) {
this.params = {
method: e[0]
}, Oe(this, e[1]), this.metrics = {}
}
function u(t, r) {
e.loader_config.xpid && this.sameOrigin && r.setRequestHeader("X-NewRelic-ID", e.loader_config.xpid);
var n = i.generateTracePayload(this.parsedOrigin);
if (n) {
var o = !1;
n.newrelicHeader && (r.setRequestHeader("newrelic", n.newrelicHeader), o = !0), n.traceContextParentHeader && (r.setRequestHeader("traceparent", n.traceContextParentHeader), n.traceContextStateHeader && r.setRequestHeader("tracestate", n.traceContextStateHeader), o = !0), o && (this.dt = n)
}
}
function d(e, r) {
var n = this.metrics,
i = e[0],
o = this;
if (n && i) {
var s = re(i);
s && (n.txSize = s)
}
this.startTime = (0, c.t)(), this.body = i, this.listener = function(e) {
try {
"abort" !== e.type || o.loadCaptureCalled || (o.params.aborted = !0), ("load" !== e.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof r.onload) && "function" == typeof o.end) && o.end(r)
} catch (e) {
try {
t.emit("internal-error", [e])
} catch (e) {}
}
};
for (var a = 0; a < Te; a++) r.addEventListener(xe[a], this.listener, (0, I.jT)(!1))
}
function l(e, t, r) {
this.cbTime += e, t ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof r.onload || "function" != typeof this.end || this.end(r)
}
function f(e, t) {
var r = "" + te(e) + !!t;
this.xhrGuids && !this.xhrGuids[r] && (this.xhrGuids[r] = !0, this.totalCbs += 1)
}
function p(e, t) {
var r = "" + te(e) + !!t;
this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r], this.totalCbs -= 1)
}
function g() {
this.endTime = (0, c.t)()
}
function m(e, r) {
r instanceof Ae && "load" === e[0] && t.emit("xhr-load-added", [e[1], e[2]], r)
}
function v(e, r) {
r instanceof Ae && "load" === e[0] && t.emit("xhr-load-removed", [e[1], e[2]], r)
}
function b(e, t, r) {
t instanceof Ae && ("onload" === r && (this.onload = !0), ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0, c.t)()))
}
function w(e, r) {
this.xhrCbStart && t.emit("xhr-cb-time", [(0, c.t)() - this.xhrCbStart, this.onload, r], r)
}
function R(e) {
var t, r = e[1] || {};
if ("string" == typeof e[0] ? 0 === (t = e[0]).length && y.RI && (t = "" + y.gm.location.href) : e[0] && e[0].url ? t = e[0].url : y.gm ? .URL && e[0] && e[0] instanceof URL ? t = e[0].href : "function" == typeof e[0].toString && (t = e[0].toString()), "string" == typeof t && 0 !== t.length) {
t && (this.parsedOrigin = (0, ve.D)(t), this.sameOrigin = this.parsedOrigin.sameOrigin);
var n = i.generateTracePayload(this.parsedOrigin);
if (n && (n.newrelicHeader || n.traceContextParentHeader))
if (e[0] && e[0].headers) a(e[0].headers, n) && (this.dt = n);
else {
var o = {};
for (var s in r) o[s] = r[s];
o.headers = new Headers(r.headers || {}), a(o.headers, n) && (this.dt = n), e.length > 1 ? e[1] = o : e.push(o)
}
}
function a(e, t) {
var r = !1;
return t.newrelicHeader && (e.set("newrelic", t.newrelicHeader), r = !0), t.traceContextParentHeader && (e.set("traceparent", t.traceContextParentHeader), t.traceContextStateHeader && e.set("tracestate", t.traceContextStateHeader), r = !0), r
}
}
function x(e, t) {
this.params = {}, this.metrics = {}, this.startTime = (0, c.t)(), this.dt = t, e.length >= 1 && (this.target = e[0]), e.length >= 2 && (this.opts = e[1]);
var r = this.opts || {},
n = this.target;
Oe(this, Re(n));
var i = ("" + (n && n instanceof Ee && n.method || r.method || "GET")).toUpperCase();
this.params.method = i, this.body = r.body, this.txSize = re(r.body) || 0
}
function T(e, t) {
if (this.endTime = (0, c.t)(), this.params || (this.params = {}), (0, we.iW)(this.params)) return;
let i;
this.params.status = t ? t.status : 0, "string" == typeof this.rxSize && this.rxSize.length > 0 && (i = +this.rxSize);
const o = {
txSize: this.txSize,
rxSize: i,
duration: (0, c.t)() - this.startTime
};
r("xhr", [this.params, o, this.startTime, this.endTime, "fetch"], this, n.K7.ajax)
}
function E(e) {
const t = this.params,
i = this.metrics;
if (!this.ended) {
this.ended = !0;
for (let t = 0; t < Te; t++) e.removeEventListener(xe[t], this.listener, !1);
t.aborted || (0, we.iW)(t) || (i.duration = (0, c.t)() - this.startTime, this.loadCaptureCalled || 4 !== e.readyState ? null == t.status && (t.status = 0) : A(this, e), i.cbTime = this.cbTime, r("xhr", [t, i, this.startTime, this.endTime, "xhr"], this, n.K7.ajax))
}
}
function A(e, r) {
e.params.status = r.status;
var i = function(e, t) {
var r = e.responseType;
return "json" === r && null !== t ? t : "arraybuffer" === r || "blob" === r || "json" === r ? re(e.response) : "text" === r || "" === r || void 0 === r ? re(e.responseText) : void 0
}(r, e.lastSize);
if (i && (e.metrics.rxSize = i), e.sameOrigin && r.getAllResponseHeaders().indexOf(Se) >= 0) {
var o = r.getResponseHeader(Se);
o && ((0, a.p)(h.rs, ["Ajax/CrossApplicationTracing/Header/Seen"], void 0, n.K7.metrics, t), e.params.cat = o.split(", ").pop())
}
e.loadCaptureCalled = !0
}
t.on("new-xhr", o), t.on("open-xhr-start", s), t.on("open-xhr-end", u), t.on("send-xhr-start", d), t.on("xhr-cb-time", l), t.on("xhr-load-added", f), t.on("xhr-load-removed", p), t.on("xhr-resolved", g), t.on("addEventListener-end", m), t.on("removeEventListener-end", v), t.on("fn-end", w), t.on("fetch-before-start", R), t.on("fetch-start", x), t.on("fn-start", b), t.on("fetch-done", T)
}(e, this.ee, this.handler, this.dt), this.importAggregator(e, () => i.e(478).then(i.bind(i, 3845)))
}
}
function Oe(e, t) {
var r = (0, ve.D)(t),
n = e.params || e;
n.hostname = r.hostname, n.port = r.port, n.protocol = r.protocol, n.host = r.hostname + ":" + r.port, n.pathname = r.pathname, e.parsedOrigin = r, e.sameOrigin = r.sameOrigin
}
const Ne = {},
Ie = ["pushState", "replaceState"];
function Pe(e) {
const t = function(e) {
return (e || ie.ee).get("history")
}(e);
return !y.RI || Ne[t.debugId]++ || (Ne[t.debugId] = 1, (0, oe.YM)(t).inPlace(window.history, Ie, "-")), t
}
var je = i(3738);
function ke(e) {
p(u.BL, function(t = Date.now()) {
const r = t - y.WN;
r < 0 && (0, l.R)(62, t), (0, a.p)(h.XG, [u.BL, {
time: r
}], void 0, n.K7.metrics, e.ee), e.addToTrace({
name: u.BL,
start: t,
origin: "nr"
}), (0, a.p)(u.Pl + u.hG, [r, u.BL], void 0, n.K7.genericEvents, e.ee)
}, e)
}
const {
He: Ce,
bD: Le,
d3: He,
Kp: Me,
TZ: Ke,
Lc: De,
uP: Ue,
Rz: Fe
} = je;
class We extends E {
static featureName = Ke;
constructor(e) {
var t;
super(e, Ke), t = e, p(u.U2, function(e) {
if (!(e && "object" == typeof e && e.name && e.start)) return;
const r = {
n: e.name,
s: e.start - y.WN,
e: (e.end || e.start) - y.WN,
o: e.origin || "",
t: "api"
};
r.s < 0 || r.e < 0 || r.e < r.s ? (0, l.R)(61, {
start: r.s,
end: r.e
}) : (0, a.p)("bstApi", [r], void 0, n.K7.sessionTrace, t.ee)
}, t), ke(e);
if (!(0, R.V)(e.init)) return void this.deregisterDrain();
const r = this.ee;
let o;
Pe(r), this.eventsEE = (0, ne.u)(r), this.eventsEE.on(Ue, function(e, t) {
this.bstStart = (0, c.t)()
}), this.eventsEE.on(De, function(e, t) {
(0, a.p)("bst", [e[0], t, this.bstStart, (0, c.t)()], void 0, n.K7.sessionTrace, r)
}), r.on(Fe + He, function(e) {
this.time = (0, c.t)(), this.startPath = location.pathname + location.hash
}), r.on(Fe + Me, function(e) {
(0, a.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, n.K7.sessionTrace, r)
});
try {
o = new PerformanceObserver(e => {
const t = e.getEntries();
(0, a.p)(Ce, [t], void 0, n.K7.sessionTrace, r)
}), o.observe({
type: Le,
buffered: !0
})
} catch (e) {}
this.importAggregator(e, () => i.e(478).then(i.bind(i, 6974)), {
resourceObserver: o
})
}
}
var Be = i(6344);
class Ve extends E {
static featureName = Be.TZ;#
n;
recorder;
constructor(e) {
var t;
let r;
super(e, Be.TZ), t = e, p(u.CH, function() {
(0, a.p)(u.CH, [], void 0, n.K7.sessionReplay, t.ee)
}, t),
function(e) {
p(u.Tb, function() {
(0, a.p)(u.Tb, [], void 0, n.K7.sessionReplay, e.ee)
}, e)
}(e);
try {
r = JSON.parse(localStorage.getItem("".concat(S.H3, "_").concat(S.uh)))
} catch (e) {}(0, w.SR)(e.init) && this.ee.on(u.CH, () => this.#i()), this.#o(r) && this.importRecorder().then(e => {
e.startRecording(Be.Qb.PRELOAD, r ? .sessionReplayMode)
}), this.importAggregator(this.agentRef, () => i.e(478).then(i.bind(i, 6167)), this), this.ee.on("err", e => {
this.blocked || this.agentRef.runtime.isRecording && (this.errorNoticed = !0, (0, a.p)(Be.Vh, [e], void 0, this.featureName, this.ee))
})
}#
o(e) {
return e && (e.sessionReplayMode === S.g.FULL || e.sessionReplayMode === S.g.ERROR) || (0, w.Aw)(this.agentRef.init)
}
importRecorder() {
return this.recorder ? Promise.resolve(this.recorder) : (this.#n ? ? = Promise.all([i.e(478), i.e(249)]).then(i.bind(i, 4866)).then(({
Recorder: e
}) => (this.recorder = new e(this), this.recorder)).catch(e => {
throw this.ee.emit("internal-error", [e]), this.blocked = !0, e
}), this.#n)
}#
i() {
this.blocked || (this.featAggregate ? this.featAggregate.mode !== S.g.FULL && this.featAggregate.initializeRecording(S.g.FULL, !0, Be.Qb.API) : this.importRecorder().then(() => {
this.recorder.startRecording(Be.Qb.API, S.g.FULL)
}))
}
}
var Ge = i(3962);
function ze(e) {
const t = e.ee.get("tracer");
function r() {}
p(u.dT, function(e) {
return (new r).get("object" == typeof e ? e : {})
}, e);
const i = r.prototype = {
createTracer: function(r, i) {
var o = {},
s = this,
d = "function" == typeof i;
return (0, a.p)(h.xV, ["API/createTracer/called"], void 0, n.K7.metrics, e.ee), e.runSoftNavOverSpa || (0, a.p)(u.hw + "tracer", [(0, c.t)(), r, o], s, n.K7.spa, e.ee),
function() {
if (t.emit((d ? "" : "no-") + "fn-start", [(0, c.t)(), s, d], o), d) try {
return i.apply(this, arguments)
} catch (e) {
const r = "string" == typeof e ? new Error(e) : e;
throw t.emit("fn-err", [arguments, this, r], o), r
} finally {
t.emit("fn-end", [(0, c.t)()], o)
}
}
}
};
["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach(t => {
p.apply(this, [t, function() {
return (0, a.p)(u.hw + t, [(0, c.t)(), ...arguments], this, e.runSoftNavOverSpa ? n.K7.softNav : n.K7.spa, e.ee), this
}, e, i])
}), p(u.PA, function() {
e.runSoftNavOverSpa ? (0, a.p)(u.hw + "routeName", [performance.now(), ...arguments], void 0, n.K7.softNav, e.ee) : (0, a.p)(u.Pl + "routeName", [(0, c.t)(), ...arguments], this, n.K7.spa, e.ee)
}, e)
}
class Ze extends E {
static featureName = Ge.TZ;
constructor(e) {
if (super(e, Ge.TZ), ze(e), !y.RI || !(0, O.dV)().o.MO) return;
const t = Pe(this.ee);
try {
this.removeOnAbort = new AbortController
} catch (e) {}
Ge.tC.forEach(e => {
(0, I.sp)(e, e => {
s(e)
}, !0, this.removeOnAbort ? .signal)
});
const r = () => (0, a.p)("newURL", [(0, c.t)(), "" + window.location], void 0, this.featureName, this.ee);
t.on("pushState-end", r), t.on("replaceState-end", r), (0, I.sp)(Ge.OV, e => {
s(e), (0, a.p)("newURL", [e.timeStamp, "" + window.location], void 0, this.featureName, this.ee)
}, !0, this.removeOnAbort ? .signal);
let n = !1;
const o = new((0, O.dV)().o.MO)((e, t) => {
n || (n = !0, requestAnimationFrame(() => {
(0, a.p)("newDom", [(0, c.t)()], void 0, this.featureName, this.ee), n = !1
}))
}),
s = (0, x.s)(e => {
(0, a.p)("newUIEvent", [e], void 0, this.featureName, this.ee), o.observe(document.body, {
attributes: !0,
childList: !0,
subtree: !0,
characterData: !0
})
}, 100, {
leading: !0
});
this.abortHandler = function() {
this.removeOnAbort ? .abort(), o.disconnect(), this.abortHandler = void 0
}, this.importAggregator(e, () => i.e(478).then(i.bind(i, 4393)), {
domObserver: o
})
}
}
var qe = i(7378);
const Xe = {},
Ye = ["appendChild", "insertBefore", "replaceChild"];
function Je(e) {
const t = function(e) {
return (e || ie.ee).get("jsonp")
}(e);
if (!y.RI || Xe[t.debugId]) return t;
Xe[t.debugId] = !0;
var r = (0, oe.YM)(t),
n = /[?&](?:callback|cb)=([^&#]+)/,
i = /(.*)\.([^.]+)/,
o = /^(\w+)(\.|$)(.*)$/;
function s(e, t) {
if (!e) return t;
const r = e.match(o),
n = r[1];
return s(r[3], t[n])
}
return r.inPlace(Node.prototype, Ye, "dom-"), t.on("dom-start", function(e) {
! function(e) {
if (!e || "string" != typeof e.nodeName || "script" !== e.nodeName.toLowerCase()) return;
if ("function" != typeof e.addEventListener) return;
var o = (a = e.src, c = a.match(n), c ? c[1] : null);
var a, c;
if (!o) return;
var u = function(e) {
var t = e.match(i);
if (t && t.length >= 3) return {
key: t[2],
parent: s(t[1], window)
};
return {
key: e,
parent: window
}
}(o);
if ("function" != typeof u.parent[u.key]) return;
var d = {};
function l() {
t.emit("jsonp-end", [], d), e.removeEventListener("load", l, (0, I.jT)(!1)), e.removeEventListener("error", f, (0, I.jT)(!1))
}
function f() {
t.emit("jsonp-error", [], d), t.emit("jsonp-end", [], d), e.removeEventListener("load", l, (0, I.jT)(!1)), e.removeEventListener("error", f, (0, I.jT)(!1))
}
r.inPlace(u.parent, [u.key], "cb-", d), e.addEventListener("load", l, (0, I.jT)(!1)), e.addEventListener("error", f, (0, I.jT)(!1)), t.emit("new-jsonp", [e.src], d)
}(e[0])
}), t
}
const $e = {};
function Qe(e) {
const t = function(e) {
return (e || ie.ee).get("promise")
}(e);
if ($e[t.debugId]) return t;
$e[t.debugId] = !0;
var r = t.context,
n = (0, oe.YM)(t),
i = y.gm.Promise;
return i && function() {
function e(r) {
var o = t.context(),
s = n(r, "executor-", o, null, !1);
const a = Reflect.construct(i, [s], e);
return t.context(a).getCtx = function() {
return o
}, a
}
y.gm.Promise = e, Object.defineProperty(e, "name", {
value: "Promise"
}), e.toString = function() {
return i.toString()
}, Object.setPrototypeOf(e, i), ["all", "race"].forEach(function(r) {
const n = i[r];
e[r] = function(e) {
let i = !1;
[...e || []].forEach(e => {
this.resolve(e).then(s("all" === r), s(!1))
});
const o = n.apply(this, arguments);
return o;
function s(e) {
return function() {
t.emit("propagate", [null, !i], o, !1, !1), i = i || !e
}
}
}
}), ["resolve", "reject"].forEach(function(r) {
const n = i[r];
e[r] = function(e) {
const r = n.apply(this, arguments);
return e !== r && t.emit("propagate", [e, !0], r, !1, !1), r
}
}), e.prototype = i.prototype;
const o = i.prototype.then;
i.prototype.then = function(...e) {
var i = this,
s = r(i);
s.promise = i, e[0] = n(e[0], "cb-", s, null, !1), e[1] = n(e[1], "cb-", s, null, !1);
const a = o.apply(this, e);
return s.nextPromise = a, t.emit("propagate", [i, !0], a, !1, !1), a
}, i.prototype.then[oe.Jt] = o, t.on("executor-start", function(e) {
e[0] = n(e[0], "resolve-", this, null, !1), e[1] = n(e[1], "resolve-", this, null, !1)
}), t.on("executor-err", function(e, t, r) {
e[1](r)
}), t.on("cb-end", function(e, r, n) {
t.emit("propagate", [n, !0], this.nextPromise, !1, !1)
}), t.on("propagate", function(e, r, n) {
if (!this.getCtx || r) {
const r = this,
n = e instanceof Promise ? t.context(e) : null;
let i;
this.getCtx = function() {
return i || (i = n && n !== r ? "function" == typeof n.getCtx ? n.getCtx() : n : r, i)
}
}
})
}(), t
}
const et = {},
tt = "setTimeout",
rt = "setInterval",
nt = "clearTimeout",
it = "-start",
ot = [tt, "setImmediate", rt, nt, "clearImmediate"];
function st(e) {
const t = function(e) {
return (e || ie.ee).get("timer")
}(e);
if (et[t.debugId]++) return t;
et[t.debugId] = 1;
var r = (0, oe.YM)(t);
return r.inPlace(y.gm, ot.slice(0, 2), tt + "-"), r.inPlace(y.gm, ot.slice(2, 3), rt + "-"), r.inPlace(y.gm, ot.slice(3), nt + "-"), t.on(rt + it, function(e, t, n) {
e[0] = r(e[0], "fn-", null, n)
}), t.on(tt + it, function(e, t, n) {
this.method = n, this.timerDuration = isNaN(e[1]) ? 0 : +e[1], e[0] = r(e[0], "fn-", this, n)
}), t
}
const at = {};
function ct(e) {
const t = function(e) {
return (e || ie.ee).get("mutation")
}(e);
if (!y.RI || at[t.debugId]) return t;
at[t.debugId] = !0;
var r = (0, oe.YM)(t),
n = y.gm.MutationObserver;
return n && (window.MutationObserver = function(e) {
return this instanceof n ? new n(r(e, "fn-")) : n.apply(this, arguments)
}, MutationObserver.prototype = n.prototype), t
}
const {
TZ: ut,
d3: dt,
Kp: lt,
$p: ft,
wW: ht,
e5: pt,
tH: gt,
uP: mt,
rw: vt,
Lc: bt
} = qe;
class yt extends E {
static featureName = ut;
constructor(e) {
if (super(e, ut), ze(e), !y.RI) return;
try {
this.removeOnAbort = new AbortController
} catch (e) {}
let t, r = 0;
const n = this.ee.get("tracer"),
o = Je(this.ee),
s = Qe(this.ee),
u = st(this.ee),
d = ce(this.ee),
l = this.ee.get("events"),
f = me(this.ee),
h = Pe(this.ee),
p = ct(this.ee);
function g(e, t) {
h.emit("newURL", ["" + window.location, t])
}
function m() {
r++, t = window.location.hash, this[mt] = (0, c.t)()
}
function v() {
r--, window.location.hash !== t && g(0, !0);
var e = (0, c.t)();
this[pt] = ~~this[pt] + e - this[mt], this[bt] = e
}
function b(e, t) {
e.on(t, function() {
this[t] = (0, c.t)()
})
}
this.ee.on(mt, m), s.on(vt, m), o.on(vt, m), this.ee.on(bt, v), s.on(ht, v), o.on(ht, v), this.ee.on("fn-err", (...t) => {
t[2] ? .__newrelic ? .[e.agentIdentifier] || (0, a.p)("function-err", [...t], void 0, this.featureName, this.ee)
}), this.ee.buffer([mt, bt, "xhr-resolved"], this.featureName), l.buffer([mt], this.featureName), u.buffer(["setTimeout" + lt, "clearTimeout" + dt, mt], this.featureName), d.buffer([mt, "new-xhr", "send-xhr" + dt], this.featureName), f.buffer([gt + dt, gt + "-done", gt + ft + dt, gt + ft + lt], this.featureName), h.buffer(["newURL"], this.featureName), p.buffer([mt], this.featureName), s.buffer(["propagate", vt, ht, "executor-err", "resolve" + dt], this.featureName), n.buffer([mt, "no-" + mt], this.featureName), o.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"], this.featureName), b(f, gt + dt), b(f, gt + "-done"), b(o, "new-jsonp"), b(o, "jsonp-end"), b(o, "cb-start"), h.on("pushState-end", g), h.on("replaceState-end", g), window.addEventListener("hashchange", g, (0, I.jT)(!0, this.removeOnAbort ? .signal)), window.addEventListener("load", g, (0, I.jT)(!0, this.removeOnAbort ? .signal)), window.addEventListener("popstate", function() {
g(0, r > 1)
}, (0, I.jT)(!0, this.removeOnAbort ? .signal)), this.abortHandler = this.#r, this.importAggregator(e, () => i.e(478).then(i.bind(i, 5592)))
}#
r() {
this.removeOnAbort ? .abort(), this.abortHandler = void 0
}
}
var wt = i(3333);
class Rt extends E {
static featureName = wt.TZ;
constructor(e) {
super(e, wt.TZ);
const t = [e.init.page_action.enabled, e.init.performance.capture_marks, e.init.performance.capture_measures, e.init.user_actions.enabled, e.init.performance.resources.enabled];
var r;
r = e, p(u.hG, (e, t) => z(e, t, r), r),
function(e) {
p(u.fF, (t, r) => q(t, r, e), e)
}(e), ke(e), X(e),
function(e) {
p(u.V1, (t, r) => Z(t, r, e), e)
}(e);
const o = e.init.feature_flags.includes("user_frustrations");
let s;
if (y.RI && o && (me(this.ee), ce(this.ee), s = Pe(this.ee)), y.RI) {
if (e.init.user_actions.enabled && (wt.Zp.forEach(e => (0, I.sp)(e, e => (0, a.p)("ua", [e], void 0, this.featureName, this.ee), !0)), wt.qN.forEach(e => {
const t = (0, x.s)(e => {
(0, a.p)("ua", [e], void 0, this.featureName, this.ee)
}, 500, {
leading: !0
});
(0, I.sp)(e, t)
}), o)) {
function c(t) {
const r = (0, ve.D)(t);
return e.beacons.includes(r.hostname + ":" + r.port)
}
function d() {
s.emit("navChange")
}
y.gm.addEventListener("error", () => {
(0, a.p)("uaErr", [], void 0, n.K7.genericEvents, this.ee)
}, (0, I.jT)(!1, this.removeOnAbort ? .signal)), this.ee.on("open-xhr-start", (e, t) => {
c(e[1]) || t.addEventListener("readystatechange", () => {
2 === t.readyState && (0, a.p)("uaXhr", [], void 0, n.K7.genericEvents, this.ee)
})
}), this.ee.on("fetch-start", e => {
e.length >= 1 && !c(Re(e[0])) && (0, a.p)("uaXhr", [], void 0, n.K7.genericEvents, this.ee)
}), s.on("pushState-end", d), s.on("replaceState-end", d), window.addEventListener("hashchange", d, (0, I.jT)(!0, this.removeOnAbort ? .signal)), window.addEventListener("popstate", d, (0, I.jT)(!0, this.removeOnAbort ? .signal))
}
if (e.init.performance.resources.enabled && y.gm.PerformanceObserver ? .supportedEntryTypes.includes("resource")) {
new PerformanceObserver(e => {
e.getEntries().forEach(e => {
(0, a.p)("browserPerformance.resource", [e], void 0, this.featureName, this.ee)
})
}).observe({
type: "resource",
buffered: !0
})
}
}
try {
this.removeOnAbort = new AbortController
} catch (l) {}
this.abortHandler = () => {
this.removeOnAbort ? .abort(), this.abortHandler = void 0
}, t.some(e => e) ? this.importAggregator(e, () => i.e(478).then(i.bind(i, 8019))) : this.deregisterDrain()
}
}
var xt = i(2646);
const Tt = new Map;
function Et(e, t, r, n) {
if ("object" != typeof t || !t || "string" != typeof r || !r || "function" != typeof t[r]) return (0, l.R)(29);
const i = function(e) {
return (e || ie.ee).get("logger")
}(e),
o = (0, oe.YM)(i),
s = new xt.y(ie.P);
s.level = n.level, s.customAttributes = n.customAttributes;
const a = t[r] ? .[oe.Jt] || t[r];
return Tt.set(a, s), o.inPlace(t, [r], "wrap-logger-", () => Tt.get(a)), i
}
var At = i(1910);
class St extends E {
static featureName = B.TZ;
constructor(e) {
var t;
super(e, B.TZ), t = e, p(u.$9, (e, r) => G(e, r, t), t),
function(e) {
p(u.Wb, (t, r, {
customAttributes: n = {},
level: i = B.p_.INFO
} = {}) => {
Et(e.ee, t, r, {
customAttributes: n,
level: i
})
}, e)
}(e), X(e);
const r = this.ee;
["log", "error", "warn", "info", "debug", "trace"].forEach(e => {
(0, At.i)(y.gm.console[e]), Et(r, y.gm.console, e, {
level: "log" === e ? "info" : e
})
}), this.ee.on("wrap-logger-end", function([e]) {
const {
level: t,
customAttributes: n
} = this;
(0, V.R)(r, e, n, t)
}), this.importAggregator(e, () => i.e(478).then(i.bind(i, 5288)))
}
}
new class extends r {
constructor(e) {
var t;
(super(), y.gm) ? (this.features = {}, (0, O.bQ)(this.agentIdentifier, this), this.desiredFeatures = new Set(e.features || []), this.desiredFeatures.add(_), this.runSoftNavOverSpa = [...this.desiredFeatures].some(e => e.featureName === n.K7.softNav), (0, s.j)(this, e, e.loaderType || "agent"), t = this, p(u.cD, function(e, r, n = !1) {
if ("string" == typeof e) {
if (["string", "number", "boolean"].includes(typeof r) || null === r) return g(t, e, r, u.cD, n);
(0, l.R)(40, typeof r)
} else(0, l.R)(39, typeof e)
}, t), function(e) {
p(u.Dl, function(t) {
if ("string" == typeof t || null === t) return g(e, "enduser.id", t, u.Dl, !0);
(0, l.R)(41, typeof t)
}, e)
}(this), function(e) {
p(u.nb, function(t) {
if ("string" == typeof t || null === t) return g(e, "application.version", t, u.nb, !1);
(0, l.R)(42, typeof t)
}, e)
}(this), function(e) {
p(u.d3, function() {
e.ee.emit("manual-start-all")
}, e)
}(this), function(e) {
p(u.Pv, function(t = !0) {
if ("boolean" == typeof t) {
if ((0, a.p)(u.Pl + u.Pv, [t], void 0, "session", e.ee), e.runtime.consented = t, t) {
const t = e.features.page_view_event;
t.onAggregateImported.then(e => {
const r = t.featAggregate;
e && !r.sentRum && r.sendRum()
})
}
} else(0, l.R)(65, typeof t)
}, e)
}(this), this.run()) : (0, l.R)(21)
}
get config() {
return {
info: this.info,
init: this.init,
loader_config: this.loader_config,
runtime: this.runtime
}
}
get api() {
return this
}
run() {
try {
const e = function(e) {
const t = {};
return o.forEach(r => {
t[r] = !!e[r] ? .enabled
}), t
}(this.init),
t = [...this.desiredFeatures];
t.sort((e, t) => n.P3[e.featureName] - n.P3[t.featureName]), t.forEach(t => {
if (!e[t.featureName] && t.featureName !== n.K7.pageViewEvent) return;
if (this.runSoftNavOverSpa && t.featureName === n.K7.spa) return;
if (!this.runSoftNavOverSpa && t.featureName === n.K7.softNav) return;
const r = function(e) {
switch (e) {
case n.K7.ajax:
return [n.K7.jserrors];
case n.K7.sessionTrace:
return [n.K7.ajax, n.K7.pageViewEvent];
case n.K7.sessionReplay:
return [n.K7.sessionTrace];
case n.K7.pageViewTiming:
return [n.K7.pageViewEvent];
default:
return []
}
}(t.featureName).filter(e => !(e in this.features));
r.length > 0 && (0, l.R)(36, {
targetFeature: t.featureName,
missingDependencies: r
}), this.features[t.featureName] = new t(this)
})
} catch (e) {
(0, l.R)(22, e);
for (const e in this.features) this.features[e].abortHandler ? .();
const t = (0, O.Zm)();
delete t.initializedAgents[this.agentIdentifier] ? .features, delete this.sharedAggregator;
return t.ee.get(this.agentIdentifier).abort(), !1
}
}
}({
features: [_e, _, j, We, Ve, k, J, Rt, St, Ze, yt],
loaderType: "spa"
})
})()
})();



window.dataLayer = window.dataLayer || [];
function gtag() {
dataLayer.push(arguments);
}
gtag('consent', 'default', {
'ad_storage': 'denied',
'ad_user_data': 'denied',
'ad_personalization': 'denied',
'analytics_storage': 'granted'
});
if (!window.cookiesCallback) {
window.cookiesCallback = function(promotional) {
if (promotional) {
gtag('consent', 'update', {
'ad_storage': 'granted',
'ad_user_data': 'granted',
'ad_personalization': 'granted'
});
} else {
gtag('consent', 'update', {
'ad_storage': 'denied',
'ad_user_data': 'denied',
'ad_personalization': 'denied'
});
}
};
}



(function(w, d, s, l, i) {
w[l] = w[l] || [];
w[l].push({
'gtm.start': new Date().getTime(),
event: 'gtm.js'
});
var f = d.getElementsByTagName(s)[0],
j = d.createElement(s),
dl = l != 'dataLayer' ? '&l=' + l : '';
j.async = true;
j.src =
'//www.googletagmanager.com/gtm.js?id=' + i + dl;
f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-KPSPFZ');



{
"@context": "https:\/\/schema.org",
"@graph": [{
"@type": "BreadcrumbList",
"@id": "https:\/\/www.xmtrading.com\/jp#breadcrumblist",
"itemListElement": [{
"@type": "ListItem",
"@id": "https:\/\/www.xmtrading.com\/jp#listItem",
"position": 1,
"name": "Home"
}]
}, {
"@type": "CollectionPage",
"@id": "https:\/\/www.xmtrading.com\/jp#collectionpage",
"url": "https:\/\/www.xmtrading.com\/jp",
"name": "XMTrading\u2122 \u2013 FX\u30fb\u539f\u6cb9\u30fb\u30b4\u30fc\u30eb\u30c9\u30fb\u682a\u5f0f\u53d6\u5f15\u306e\u696d\u754c\u5927\u624b\u30d6\u30ed\u30fc\u30ab\u30fc",
"description": "XMTrading (xmtrading.com) \u306fFX\u3001\u53ca\u3073\u682a\u5f0f\u3001\u30b4\u30fc\u30eb\u30c9\u3001\u539f\u6cb9\u7b49\u306e\u30c7\u30ea\u30d0\u30c6\u30a3\u30d6\u53d6\u5f15\u3092\u63d0\u4f9b\u81f4\u3057\u307e\u3059\u3002\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u4fdd\u6709\u3057\u305f\u696d\u8005\u3067\u3001MT4\u3084MT5\u3092\u4f7f\u3063\u3066\u30aa\u30f3\u30e9\u30a4\u30f3\u53d6\u5f15\u3092\u958b\u59cb\u3057\u307e\u3057\u3087\u3046\u3002",
"inLanguage": "en-US",
"isPartOf": {
"@id": "https:\/\/www.xmtrading.com\/jp\/#website"
},
"breadcrumb": {
"@id": "https:\/\/www.xmtrading.com\/jp#breadcrumblist"
},
"about": {
"@id": "https:\/\/www.xmtrading.com\/jp\/#organization"
}
}, {
"@type": "Organization",
"@id": "https:\/\/www.xmtrading.com\/jp\/#organization",
"name": "XMTrading",
"description": "XMTrading (xmtrading.com) \u306fFX\u53d6\u5f15\u3001\u5148\u7269\u53d6\u5f15\u304a\u3088\u3073CFD\u53d6\u5f15\u3092\u63d0\u4f9b\u3059\u308b\u3001\u8a8d\u53ef\u3092\u53d7\u3051\u305fFX\u30d6\u30ed\u30fc\u30ab\u30fc\u3067\u3059\u3002",
"url": "https:\/\/www.xmtrading.com\/jp\/"
}, {
"@type": "WebSite",
"@id": "https:\/\/www.xmtrading.com\/jp\/#website",
"url": "https:\/\/www.xmtrading.com\/jp\/",
"name": "XM",
"description": "XMTrading (xmtrading.com) \u306fFX\u53d6\u5f15\u3001\u5148\u7269\u53d6\u5f15\u304a\u3088\u3073CFD\u53d6\u5f15\u3092\u63d0\u4f9b\u3059\u308b\u3001\u8a8d\u53ef\u3092\u53d7\u3051\u305fFX\u30d6\u30ed\u30fc\u30ab\u30fc\u3067\u3059\u3002",
"inLanguage": "en-US",
"publisher": {
"@id": "https:\/\/www.xmtrading.com\/jp\/#organization"
}
}]
}



window.vwoTrans = {
"vwo_trans_regional_lps_all__open_an_account": "口座開設",
"vwo_trans_15yearAnniversaryPromo_lp_claimNow": "",
"vwo_trans_regionalLPsRevamp_v1_common_buttonStartTrading_v2": "取引を開始する"
};



window._vwo_code || (function() {
var account_id = 1028869,
version = 2.1,
settings_tolerance = 2000,
hide_element = 'body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
/* DO NOT EDIT BELOW THIS LINE */
f = false,
w = window,
d = document,
v = d.querySelector('#vwoCode'),
cK = '_vwo_' + account_id + '_settings',
cc = {};
try {
var c = JSON.parse(localStorage.getItem('_vwo_' + account_id + '_config'));
cc = c && typeof c === 'object' ? c : {}
} catch (e) {}
var stT = cc.stT === 'session' ? w.sessionStorage : w.localStorage;
code = {
nonce: v && v.nonce,
use_existing_jquery: function() {
return typeof use_existing_jquery !== 'undefined' ? use_existing_jquery : undefined
},
library_tolerance: function() {
return typeof library_tolerance !== 'undefined' ? library_tolerance : undefined
},
settings_tolerance: function() {
return cc.sT || settings_tolerance
},
hide_element_style: function() {
return '{' + (cc.hES || hide_element_style) + '}'
},
hide_element: function() {
if (performance.getEntriesByName('first-contentful-paint')[0]) {
return ''
}
return typeof cc.hE === 'string' ? cc.hE : hide_element
},
getVersion: function() {
return version
},
finish: function(e) {
if (!f) {
f = true;
var t = d.getElementById('_vis_opt_path_hides');
if (t) t.parentNode.removeChild(t);
if (e)(new Image).src = 'https://dev.visualwebsiteoptimizer.com/ee.gif?a=' + account_id + e
}
},
finished: function() {
return f
},
addScript: function(e) {
var t = d.createElement('script');
t.type = 'text/javascript';
if (e.src) {
t.src = e.src
} else {
t.text = e.text
}
v && t.setAttribute('nonce', v.nonce);
d.getElementsByTagName('head')[0].appendChild(t)
},
load: function(e, t) {
var n = this.getSettings(),
i = d.createElement('script'),
r = this;
t = t || {};
if (n) {
i.textContent = n;
d.getElementsByTagName('head')[0].appendChild(i);
if (!w.VWO || VWO.caE) {
stT.removeItem(cK);
r.load(e)
}
} else {
var o = new XMLHttpRequest;
o.open('GET', e, true);
o.withCredentials = !t.dSC;
o.responseType = t.responseType || 'text';
o.onload = function() {
if (t.onloadCb) {
return t.onloadCb(o, e)
}
if (o.status === 200 || o.status === 304) {
_vwo_code.addScript({
text: o.responseText
})
} else {
_vwo_code.finish('&e=loading_failure:' + e)
}
};
o.onerror = function() {
if (t.onerrorCb) {
return t.onerrorCb(e)
}
_vwo_code.finish('&e=loading_failure:' + e)
};
o.send()
}
},
getSettings: function() {
try {
var e = stT.getItem(cK);
if (!e) {
return
}
e = JSON.parse(e);
if (Date.now() > e.e) {
stT.removeItem(cK);
return
}
return e.s
} catch (e) {
return
}
},
init: function() {
if (d.URL.indexOf('__vwo_disable__') > -1) return;
var e = this.settings_tolerance();
w._vwo_settings_timer = setTimeout(function() {
_vwo_code.finish();
stT.removeItem(cK)
}, e);
var t;
if (this.hide_element() !== 'body') {
t = d.createElement('style');
var n = this.hide_element(),
i = n ? n + this.hide_element_style() : '',
r = d.getElementsByTagName('head')[0];
t.setAttribute('id', '_vis_opt_path_hides');
v && t.setAttribute('nonce', v.nonce);
t.setAttribute('type', 'text/css');
if (t.styleSheet) t.styleSheet.cssText = i;
else t.appendChild(d.createTextNode(i));
r.appendChild(t)
} else {
t = d.getElementsByTagName('head')[0];
var i = d.createElement('div');
i.style.cssText = 'z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;display: block !important;';
i.setAttribute('id', '_vis_opt_path_hides');
i.classList.add('_vis_hide_layer');
t.parentNode.insertBefore(i, t.nextSibling)
}
var o = window._vis_opt_url || d.URL,
s = 'https://dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(o) + '&vn=' + version;
if (w.location.search.indexOf('_vwo_xhr') !== -1) {
this.addScript({
src: s
})
} else {
this.load(s + '&x=true')
}
}
};
w._vwo_code = code;
code.init();
})();



(window.BOOMR_mq = window.BOOMR_mq || []).push(["addVar", {
"rua.upush": "false",
"rua.cpush": "false",
"rua.upre": "true",
"rua.cpre": "true",
"rua.uprl": "false",
"rua.cprl": "false",
"rua.cprf": "false",
"rua.trans": "SJ-389b6b08-4fa7-457b-8ce3-8aa523f2ef08",
"rua.cook": "true",
"rua.ims": "false",
"rua.ufprl": "false",
"rua.cfprl": "true",
"rua.isuxp": "false",
"rua.texp": "norulematch",
"rua.ceh": "false",
"rua.ueh": "false",
"rua.ieh.st": "0"
}]);



! function(e) {
var n = "https://s.go-mpulse.net/boomerang/";
if ("False" == "True") e.BOOMR_config = e.BOOMR_config || {}, e.BOOMR_config.PageParams = e.BOOMR_config.PageParams || {}, e.BOOMR_config.PageParams.pci = !0, n = "https://s2.go-mpulse.net/boomerang/";
if (window.BOOMR_API_key = "FX72H-U393W-CNX6U-WRWHF-88HB7", function() {
function e() {
if (!o) {
var e = document.createElement("script");
e.id = "boomr-scr-as", e.src = window.BOOMR.url, e.async = !0, i.parentNode.appendChild(e), o = !0
}
}
function t(e) {
o = !0;
var n, t, a, r, d = document,
O = window;
if (window.BOOMR.snippetMethod = e ? "if" : "i", t = function(e, n) {
var t = d.createElement("script");
t.id = n || "boomr-if-as", t.src = window.BOOMR.url, BOOMR_lstart = (new Date).getTime(), e = e || d.body, e.appendChild(t)
}, !window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]\./)) return window.BOOMR.snippetMethod = "s", void t(i.parentNode, "boomr-async");
a = document.createElement("IFRAME"), a.src = "about:blank", a.title = "", a.role = "presentation", a.loading = "eager", r = (a.frameElement || a).style, r.width = 0, r.height = 0, r.border = 0, r.display = "none", i.parentNode.appendChild(a);
try {
O = a.contentWindow, d = O.document.open()
} catch (_) {
n = document.domain, a.src = "javascript:var d=document.open();d.domain='" + n + "';void(0);", O = a.contentWindow, d = O.document.open()
}
if (n) d._boomrl = function() {
this.domain = n, t()
}, d.write("<bo" + "dy onload='document._boomrl();'>");
else if (O._boomrl = function() {
t()
}, O.addEventListener) O.addEventListener("load", O._boomrl, !1);
else if (O.attachEvent) O.attachEvent("onload", O._boomrl);
d.close()
}
function a(e) {
window.BOOMR_onload = e && e.timeStamp || (new Date).getTime()
}
if (!window.BOOMR || !window.BOOMR.version && !window.BOOMR.snippetExecuted) {
window.BOOMR = window.BOOMR || {}, window.BOOMR.snippetStart = (new Date).getTime(), window.BOOMR.snippetExecuted = !0, window.BOOMR.snippetVersion = 12, window.BOOMR.url = n + "FX72H-U393W-CNX6U-WRWHF-88HB7";
var i = document.currentScript || document.getElementsByTagName("script")[0],
o = !1,
r = document.createElement("link");
if (r.relList && "function" == typeof r.relList.supports && r.relList.supports("preload") && "as" in r) window.BOOMR.snippetMethod = "p", r.href = window.BOOMR.url, r.rel = "preload", r.as = "script", r.addEventListener("load", e), r.addEventListener("error", function() {
t(!0)
}), setTimeout(function() {
if (!o) t(!0)
}, 3e3), BOOMR_lstart = (new Date).getTime(), i.parentNode.appendChild(r);
else t(!1);
if (window.addEventListener) window.addEventListener("load", a, !1);
else if (window.attachEvent) window.attachEvent("onload", a)
}
}(), "".length > 0)
if (e && "performance" in e && e.performance && "function" == typeof e.performance.setResourceTimingBufferSize) e.performance.setResourceTimingBufferSize();
! function() {
if (BOOMR = e.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) {
var n = "true" == "true" ? 1 : 0,
t = "cookiepresent",
a = "t4nhpdvydlmiq2jae2za-f-1666b04b5-clientnsv4-s.akamaihd.net",
i = "false" == "true" ? 2 : 1,
o = {
"ak.v": "39",
"ak.cp": "1137547",
"ak.ai": parseInt("677135", 10),
"ak.ol": "0",
"ak.cr": 0,
"ak.ipv": 4,
"ak.proto": "h2",
"ak.rid": "6fe9bdf1",
"ak.r": 47866,
"ak.a2": n,
"ak.m": "a",
"ak.n": "essl",
"ak.bpcip": "159.26.119.0",
"ak.cport": 51021,
"ak.gh": "23.205.82.80",
"ak.quicv": "",
"ak.tlsv": "tls1.3",
"ak.0rtt": "",
"ak.0rtt.ed": "",
"ak.csrc": "-",
"ak.acc": "",
"ak.t": "1763714738",
"ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==fC/q7WEpMKZgL/9aS/uR3kT54DKtEZXxFmL5N50axt5Aoth4GMvu+qSG1+XM4KBgonWCs4Qvzh/OpZH4oohkJ+OWy8GgdkkDdAxy81eIa5zWgSAuE11wTElLh7ze2RiBHGLgGVhWxno48DY96XJL75jBTM12QLRlWIE1ncZc/XnkJvd+S04+ZQk7aPcKVhMxqq+CC1p3Kp7A1JScGdGjtEB4u3idUHI/GcwjhiiBoG5ekkuP6QaZF2oDYVovSl4O8U4jWLdBWoYKxggJ6lWu4PeJHI0+wRJRQvLFujQURAgJhS1B5C6+7brG3ZXKLiy8jfdiDBa4EPuFWzprmTR7ESNxA/YnIRMFrA+EJ/8Ftpn3Jw7OCC41vvCao5rzo3Zo88jdiqtfXRy/7OKXZyQp89uEzygUHiEmGMVDcIpnhLw=",
"ak.pv": "739",
"ak.dpoabenc": "",
"ak.tf": i
};
if ("" !== t) o["ak.ruds"] = t;
var r = {
i: !1,
av: function(n) {
var t = "http.initiator";
if (n && (!n[t] || "spa_hard" === n[t])) o["ak.feo"] = void 0 !== e.aFeoApplied ? 1 : 0, BOOMR.addVar(o)
},
rv: function() {
var e = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.0rtt.ed", "ak.r", "ak.acc", "ak.t", "ak.tf"];
BOOMR.removeVar(e)
}
};
BOOMR.plugins.AK = {
akVars: o,
akDNSPreFetchDomain: a,
init: function() {
if (!r.i) {
var e = BOOMR.subscribe;
e("before_beacon", r.av, null, null), e("onbeacon", r.rv, null, null), r.i = !0
}
return this
},
is_complete: function() {
return !0
}
}
}
}()
}(window);


(function(){function _vwo_err(e){var vwo_e=new Image;vwo_e.src="https://dev.visualwebsiteoptimizer.com/e.gif?a=1028869&s=j.php&e="+encodeURIComponent(e&&e.message&&e.message.substring(0,1e3)+"&vn=")}try{var extE=0;(function(){window._VWO=window._VWO||{};var aC=window._vwo_code;if(typeof aC==='undefined'){window._vwo_mt='dupCode';return;}if(window._VWO.sCL){window._vwo_mt='dupCode';window._VWO.sCDD=true;try{if(aC){clearTimeout(window._vwo_settings_timer);var h=document.querySelectorAll('#_vis_opt_path_hides');var x=h[h.length>1?1:0];x&&x.remove();}}catch(e){}return;}window._VWO.sCL=true;;window._vwo_mt="live";var localPreviewObject={};var previewKey="_vis_preview_"+1028869;var wL=window.location;;try{localPreviewObject[previewKey]=window.localStorage.getItem(previewKey);JSON.parse(localPreviewObject[previewKey])}catch(e){localPreviewObject[previewKey]=""}try{window._vwo_tm="";var getMode=function(e){var n;if(window.name.indexOf(e)>-1){n=window.name}else{n=wL.search.match("_vwo_m=([^&]*)");n=n&&atob(decodeURIComponent(n[1]))}return n&&JSON.parse(n)};var ccMode=getMode("_vwo_cc");if(window.name.indexOf("_vis_heatmap")>-1||window.name.indexOf("_vis_editor")>-1||ccMode||window.name.indexOf("_vis_preview")>-1){try{if(ccMode){window._vwo_mt=decodeURIComponent(wL.search.match("_vwo_m=([^&]*)")[1])}else if(window.name&&JSON.parse(window.name)){window._vwo_mt=window.name}}catch(e){if(window._vwo_tm)window._vwo_mt=window._vwo_tm}}else if(window._vwo_tm.length){window._vwo_mt=window._vwo_tm}else if(location.href.indexOf("_vis_opt_preview_combination")!==-1&&location.href.indexOf("_vis_test_id")!==-1){window._vwo_mt="sharedPreview"}else if(localPreviewObject[previewKey]){window._vwo_mt=JSON.stringify(localPreviewObject)}if(window._vwo_mt!=="live"){if(typeof extE!=="undefined"){extE=1}if(!getMode("_vwo_cc")){(function(){var cParam='';try{if(window.VWO&&window.VWO.appliedCampaigns){var campaigns=window.VWO.appliedCampaigns;for(var cId in campaigns){if(campaigns.hasOwnProperty(cId)){var v=campaigns[cId].v;if(cId&&v){cParam='&c='+cId+'-'+v+'-1';break;}}}}}catch(e){}var prevMode=false;_vwo_code.load('https://dev.visualwebsiteoptimizer.com/j.php?mode='+encodeURIComponent(window._vwo_mt)+'&a=1028869&f=1&u='+encodeURIComponent(window._vis_opt_url||document.URL)+'&eventArch=true'+'&x=true'+cParam,{sL:window._vwo_code.sL});if(window._vwo_code.sL){prevMode=true;}})();}else{(function(){window._vwo_code&&window._vwo_code.finish();_vwo_ccc={u:"/j.php?a=1028869&u=file%3A%2F%2F%2FC%3A%2FUsers%2FWorkstation%2520Four%2FDownloads%2Fclon%2520XM%2Findex.html&vn=2.1&x=true"};var s=document.createElement("script");s.src="https://app.vwo.com/visitor-behavior-analysis/dist/codechecker/cc.min.js?r="+Math.random();document.head.appendChild(s)})()}}}catch(e){var vwo_e=new Image;vwo_e.src="https://dev.visualwebsiteoptimizer.com/ee.gif?s=mode_det&e="+encodeURIComponent(e&&e.stack&&e.stack.substring(0,1e3)+"&vn=");aC&&window._vwo_code.finish()}})();
;window._vwo_cookieDomain="file:C";if(window._vwo_mt === "live"){window.VWO=window.VWO||[];window._vwo_acc_id=1028869;window.VWO._=window.VWO._||{};;const shouldSampleApm=false;if(shouldSampleApm){VWO.load_co=function(a){var b=document.createElement("script");b.src=a;b.crossOrigin="anonymous";b.type="text/javascript";b.fetchPriority="high";b.innerText;b.onerror=function(){_vwo_code.finish()};document.getElementsByTagName("head")[0].appendChild(b)};setTimeout((function(){VWO.load_co("https://dev.visualwebsiteoptimizer.com/cdn/apmLib-7716d5be4a4d111d8af5b28be8ff864cbr.js")}),0)}VWO._=VWO._||{};var visMeta=VWO._.visMeta;VWO._.allSettings=function(){return{dataStore:{events:{"atoBsuccess":{},"depositSuccess":{},"deposit":{}}}}}();window.VWO.visUuid="D6A914C63435E6A47BC47FC609B436A9F|098952277119e8ba261abc60344c866a";
;_vwo_code.sT=_vwo_code.finished();(function(c,a,e,d,b,z,g){if(window.VWO._&&window.VWO._.isBot)return;const cookiePrefix=window._vwoCc&&window._vwoCc.cookiePrefix||"";function f(a,b,d){var cookieName=cookiePrefix+a;e.cookie=cookieName+"="+b+"; expires="+new Date(864e5*d+ +new Date).toGMTString()+"; domain="+g+"; path=/"}const escapedCookieName=(cookiePrefix+"_vwo_uuid_v2").replace(/([.*+?^${}()|[\]\\])/g,"\\$1");const regex=new RegExp("(^|;\\s*)"+escapedCookieName+"=([^;]*)");const match=e.cookie.match(regex);-1==e.cookie.indexOf("_vis_opt_out")&&-1==d.location.href.indexOf("vwo_opt_out=1")&&(a=match?decodeURIComponent(match[2]):a,a=a.split("|"),b=new Image,g=window._vis_opt_domain||c||d.location.hostname.replace(/^www\./,""),b.src="https://dev.visualwebsiteoptimizer.com/eu01/v.gif?cd="+(window._vis_opt_cookieDays||0)+"&a=1028869&d="+encodeURIComponent(d.location.hostname.replace(/^www\./,"") || c)+"&u="+a[0]+"&h="+a[1]+"&t="+z,d.vwo_iehack_queue=[b],f("_vwo_uuid_v2",a.join("|"),366))})("file:C",window.VWO.visUuid,document,window,0,_vwo_code.sT);
;;window.VWO=window.VWO||[];(function(){function l(e){return e.replace(/[^\w\s-.][\w]/g,(function(e){return e.toUpperCase()})).replace(/[^\w\s-.]/g,"").replace(/ [\w]/g,(function(e){return e.toUpperCase()})).replace(/ /g,"")}function i(e,t){if("object"!=typeof t||Array.isArray(t))return s("Invalid attribute type: attribute can only be an object!");var n,r,a,o={};for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i="props"===(i=(i=l((i=n).slice(i.search(/[\w-.]/g)))).replace(/^(_|vwo_|\.|v_|i_|-)*/g,""))?"":i;if(!i.trim())return s("Invalid attribute name: "+n+" is not allowed as an attribute name!");40<i.length&&(i=i.slice(0,40),console.warn("Attribute name should not be greater than 40 characters!"));var c=u(t[n])||(c=t[n],"[object Array]"===toString.call(c))?JSON.stringify(t[n]):t[n];v(e)||(a=100,c=(r=c).length>a?r.slice(0,a-1)+"...":r),o[i]=c}return o}function u(e){return"[object Object]"===toString.call(e)}function s(e){console.log("%cVWO Event API Error:","font-weight:bold;",e),_vwo_err({message:e})}function c(e=-1,t=""){switch(e){case 0:return s("Event name cannot be empty!");case 1:return console.warn("Event name should not be greater than 40 characters!");case 2:return s("Invalid event name: "+t+" is not allowed as an event name!");default:return s("Invalid event name: event name can only be a string!")}}function r(e,t,n){var e=function(e,t){if("string"!=typeof e)return c();if(!(e=e.trim()))return c(0);var n=e;if(!(e=function(e){return"visitors"===(e=(e=l(e.slice(e.search(/[\w-.]/g)))).replace(/^(_|vwo_|\.|v_|i_|-)*/g,"")).toLowerCase()&&(e+="_1"),e}(e)))return c(2,n);40<e.length&&(c(1),e=e.slice(0,40));n=i(e,t);if(n)return{eventName:e,filteredAttributeObject:n}}(e,t=t||{}),r={ogName:1,source:1};if(!e)return{filteredData:void 0,cb:null};t=null;if(u(n)){"function"==typeof n.cb&&(t=n.cb),delete n.cb;var a,o={};for(a in n)r[a]&&(o[a]=n[a]);0<Object.keys(o).length&&(e.filteredAttributeObject.vwoMeta=o)}return{filteredData:e,cb:t}}function v(e){return window.VWO._&&VWO._.allSettings&&VWO._.allSettings.dataStore&&VWO._.allSettings.dataStore.events&&VWO._.allSettings.dataStore.events[e]}VWO.event=function(e,t,n){var{filteredData:e,cb:n}=r(e,t,n);if(e&&function(e){if(!window._vis_debug&&!v(e)){var t;try{t=JSON.parse(window.localStorage.getItem("vwoUnRegEvents"))||{}}catch(e){t={}}if(t[e])return!1;t[e]=!0;e=JSON.stringify(t);window.localStorage.setItem("vwoUnRegEvents",e)}return!0}(e.eventName))return window._vis_debug?void 0:((t={d:{event:{}}}).d.event.props=e.filteredAttributeObject||{},t.d.event.props.page={title:document.title,url:window._vis_opt_url||window.location.href,referrerUrl:document.referrer},t.d.event.name=e.eventName,t.d.event.time=Date.now(),e="https://dev.visualwebsiteoptimizer.com/eu01/events/"+(v(e.eventName)?"t":"t/u")+"?en="+e.eventName+"&a="+1028869+"&_cu="+encodeURIComponent(document.URL),navigator.sendBeacon(e,JSON.stringify(t)),void("function"==typeof n&&n()))}})();
;for(var e=0;e<window.VWO.length;e++){exC(window.VWO[e])}window.VWO.push=function(){exC(arguments[0])};function exC(a){if(!Array.isArray(a))return;switch(a[0]){case"onVWOLoaded":var p=[];p[0]={};p[1]=[];return a[1].call(this,p);case"onVWOCampaignsLoaded":return a[1].call(this,{bucketed_campaigns:[]});case"event":return VWO.event(a[1],a[2],a[3])}}
;_vwo_code.finish()}}catch(e){_vwo_code.finish();_vwo_err(e);window.VWO.caE=1}})();



        var cookieDomain = '.xmtrading.com';
        var countryCurrent = 'JP';
        var languagePref = 'jp';
        var group = '1';
        var homeLink = 'https://www.xmtrading.com/jp';
        var hostLink = 'https://www.xmtrading.com';
        var brandId = 'xmtd';
        var visitorDetailsDeviceInfo = '{"mobile":false,"phone":false,"tablet":false,"android":false,"ios":false}';
    


        function setGdprCookies() {
            var domainName = ".xmtrading.com";
            var cookieGroupsDefaultValues = {
                'functional': 1,
                'analytical': 0,
                'promotional': 0,
                'preferences': 0
            };
            var today = new Date();
            var today_180 = today.setDate(today.getDate() + 180);
            for (var cookieType in cookieGroupsDefaultValues) {
                if ((new RegExp('xmck_' + cookieType, 'gi').exec(document.cookie)) == null) {
                    document.cookie = 'xmck_' + cookieType + '=' + cookieGroupsDefaultValues[cookieType] + '; path=/; domain=' + domainName + '; expired=' + today_180.toString();
                }
            }
        }
        setGdprCookies();
    


        {"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\/jp\/*"},{"not":{"href_matches":["\/jp\/wp-*.php","\/jp\/wp-admin\/*","\/jp\/wp-content\/uploads\/*","\/jp\/wp-content\/*","\/jp\/wp-content\/plugins\/*","\/jp\/wp-content\/themes\/XMJP\/*","\/jp\/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch,
        .no-prefetch a"}}]},"eagerness":"conservative"}]}
    


        var loadDeferredStyles = function() {
            var b = document.getElementById("deferred-styles");
            var a = document.createElement("div");
            a.innerHTML = b.textContent;
            document.body.appendChild(a);
            b.parentElement.removeChild(b)
        };
        var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1000 / 60)
        };
        if (raf) {
            raf(function() {
                window.setTimeout(loadDeferredStyles, 0)
            })
        } else {
            window.addEventListener("load", loadDeferredStyles)
        }
    


        // General variables
        var host = window.location.host,
            protocol = window.location.protocol,
            currentUrl = window.location.href,
            htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");
        domainsNoPrefix = ['en', 'id', 'ar'];

        domainName = ".xmtrading.com";
        hostName = "https://www.xmtrading.com";

        switch (htmlLang) {
            case 'ja':
                htmlLang = 'jp';
                break;
            case 'ms':
                htmlLang = 'my';
                break;
            case 'zh_CN':
                htmlLang = 'cn';
                break;
            case 'sv':
                htmlLang = 'se';
                break;
            case 'ko':
                htmlLang = 'kr';
                break;
            case 'hi':
                htmlLang = 'in';
                break;
            case 'cs':
                htmlLang = 'cz';
                break;
        }

        allActiveLangs = [
            'en',
            'jp',
            'my',
            'cn',
            'el',
            'hu',
            'ru',
            'id',
            'fr',
            'it',
            'se',
            'de',
            'pl',
            'ar',
            'es',
            'kr',
            'pt',
            'tr',
            'vn',
            'th',
            'ph',
            'nl',
            'cz',
            'fa',
            'bn',
            'tw',
            'ur',
            'si',
            'hi',
            'uz'
        ];

        removeLangsFromContactMap = [
            'se',
            'nl'
        ];
    


        var homeLink = 'https://www.xmtrading.com/jp';
        var homePrefix = 'jp';
        var catDailyForexNewsName = '';
        var catWeeklyForexReviewName = '週間概要';
        var catDailyTechnicalName = 'Technical analysis';
        var catWeeklyTechnicalName = 'Weekly Technical Analysis';
        var catMarketAnalysisName = 'マーケット分析';
    


        (function($) {
            var userIdSelector = $('.j-user-id'),
                emailSelector = $('.j-email'),
                initialParameters = {
                    apiUrl: 'https://www.xmtrading.com/files/scripts/validations/livechat/livechat.api.php',
                    loggedIn: "",
                    tradingAccount: "",
                    brandId: 'XMTD',
                    authenticatedCountry: 'JP',
                    languageCode: 'ja',
                    userDetails: {
                        userFirstName: null,
                        userLastName: null,
                        userEmail: null
                    },
                    clientNameMissing: false,
                    keyVisitorEngaged: 'xm-liveChat-visitorEngaged',
                    keyCacheData: 'xm-liveChat-cacheData',
                    visitorsPromotionGroup: '1',
                    languagePrefix: languagePref,
                    websiteHomeLink: homeLink,
                };

            /**
             * @param {string} action
             * @param {object} data
             * @return {jqXHR}
             * @private
             */
            function callApi(action, data) {
                return $.ajax({
                    url: initialParameters.apiUrl,
                    method: "POST",
                    data: JSON.stringify({
                        action: action,
                        data: data
                    }),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                });
            }

            /**
             * @param {number} chatGroup
             * @param {Array<{name: string, value: string}>} livechatCustomVariables
             * @param {Object<{ name: string, email: string }>} visitorInfo
             */
            function LivechatModelClass(chatGroup, livechatCustomVariables, visitorInfo) {
                // Protect from duplicated load the livechat library
                if (LivechatModelClass.prototype.hasInstance) {
                    console.info('[LIVECHAT_FE]: Already has an instance');
                    throw "Can not create LivechatAPI again";
                }
                LivechatModelClass.prototype.hasInstance = true;

                _init(chatGroup, livechatCustomVariables, visitorInfo);

                // PUBLIC METHODS
                this.chatWindowToggle = function() {
                    try {
                        // Here we may have an exception: `[LiveChatWidget] You can't use getters before load`
                        var data = window.LiveChatWidget.get('state');
                        if (data.visibility === 'maximized') {
                            window.LiveChatWidget.call('minimize')
                        } else {
                            window.LiveChatWidget.call('maximize');
                        }
                    } catch (e) {
                        // This request will be queued and automatically executed after LiveChat is loaded.
                        window.LiveChatWidget.call('maximize');
                    }
                };

                // PRIVATE METHODS
                function _init(chatGroup, livechatCustomVariables, visitorInfo) {
                    window.__lc = window.__lc || {};
                    window.__lc.license = 5419421;
                    window.__lc.group = chatGroup;
                    window.__lc.params = livechatCustomVariables;
                    window.__lc.visitor = visitorInfo;
                    window.__lc.chat_between_groups = false;

                    // load the livechat library
                    console.info('[LIVECHAT_FE]: Start to load livechat script');
                    initLivechatNative();

                    window.LiveChatWidget.on('ready', function(e) {
                        console.info('[LIVECHAT_FE]: script loaded. Event called - ready. Will call maximize event');
                        $('#livechatWidget').show();
                        window.LiveChatWidget.call('maximize');
                    });

                    // Show chat when message received
                    window.LiveChatWidget.on('new_event', function(e) {
                        if (e.type == 'message' && e.author.type === 'agent') {
                            $('#livechatWidget').addClass('notification')
                        }
                    });

                    // Hide livechat on minimize
                    window.LiveChatWidget.on('visibility_changed', function(e) {
                        if (e.visibility == 'minimized') {
                            window.LiveChatWidget.call("hide");
                            $('#livechatWidget').removeClass('notification')
                        }
                    });

                    window.LiveChatWidget.on('customer_status_changed', function(data) {
                        switch (data.status) {
                            case 'queued': // customer is in queue
                            case 'chatting': // customer is currently chatting
                            case 'invited': // customer received an invitation but didn't start the chat
                                console.info('[LIVECHAT_FE]: customer is in queue or currently chatting received an invitation but did not start the chat', {
                                    status: data.status
                                });
                                LivechatModelClass.prototype.setVisitorEngaged(true);
                                break;
                            case 'browsing': // customer is in idle state, not queued, not chatting, and didn't receive an invitation
                                console.info('[LIVECHAT_FE]: customer is in idle state, not queued, not chatting, and did not receive an invitation', {
                                    status: data.status
                                });
                                LivechatModelClass.prototype.setVisitorEngaged(false);
                                break;
                        }
                    });
                }
            }

            LivechatModelClass.prototype.hasInstance = false;

            /**
             * @param {boolean} engaged
             */
            LivechatModelClass.prototype.setVisitorEngaged = function(engaged) {
                sessionStorage.setItem(initialParameters.keyVisitorEngaged, JSON.stringify(engaged));
            };

            /**
             * @return {boolean}
             */
            LivechatModelClass.prototype.getVisitorEngaged = function() {
                return !!JSON.parse(sessionStorage.getItem(initialParameters.keyVisitorEngaged));
            };

            function LivechatControllerClass() {
                // PRIVATE PROPERTIES
                var _livechatModel = null;
                var _$customLivechat = $("#custom-livechat");
                var _isLanguagesBusy = false;

                if (LivechatModelClass.prototype.getVisitorEngaged()) {
                    var cacheData = _getCacheData();
                    _livechatModel = new LivechatModelClass(cacheData.preferredLanguage, cacheData.customParameters, cacheData.visitorInfo);
                }

                // PUBLIC METHODS
                this.openChat = function() {
                    if (_livechatModel) {
                        _livechatModel.chatWindowToggle();
                    } else {
                        _loadGroupLanguagesSettings();
                        _$customLivechat.show();
                    }
                };

                this.closeCustomForm = function() {
                    _$customLivechat.hide();
                };

                this.startNewChat = function(formData) {
                    if (initialParameters.clientNameMissing === false &&
                        (formData.user_id || initialParameters.loggedIn)
                    ) {
                        formData.clientType = 'Existing Client';
                        _startNewChat(formData, initialParameters.userDetails);
                    } else {
                        formData.clientType = 'New Client';
                        _startNewChat(formData, initialParameters.userDetails);
                    }
                };

                // PRIVATE METHODS

                /**
                 * @param {object} formData
                 * @param {object} [userDetails]
                 * @private
                 */
                function _startNewChat(formData, userDetails) {
                    console.info('[LIVECHAT_FE]: Starting new chat');
                    var userFirstName = formData.first_name || (userDetails && userDetails.userFirstName) || '';
                    var userLastName = formData.last_name || (userDetails && userDetails.userLastName) || '';
                    var userEmail = formData.email || (userDetails && userDetails.userEmail) || '';

                    userFirstName = userFirstName.substring(0, 70);
                    userLastName = userLastName.substring(0, 90);

                    var customParameters = [{
                            name: 'Brand_id',
                            value: (userDetails && userDetails.brandName) || initialParameters.brandId || ''
                        },
                        {
                            name: 'Country',
                            value: (userDetails && userDetails.authenticatedAccountCountry) || initialParameters.authenticatedCountry || ''
                        },
                        {
                            name: 'First Name',
                            value: userFirstName
                        },
                        {
                            name: 'Last Name',
                            value: userLastName
                        },
                        {
                            name: 'Email',
                            value: userEmail
                        },
                        {
                            name: 'Language',
                            value: formData.preferred_language || ''
                        },
                        {
                            name: 'TradingAccount',
                            value: (userDetails && userDetails.userAccount) || initialParameters.tradingAccount || formData.user_id || ''
                        },
                        {
                            name: 'browserInfo',
                            value: navigator && navigator.userAgent || 'unknown'
                        },
                        {
                            name: 'visitorsPromotionGroup',
                            value: initialParameters.visitorsPromotionGroup
                        },
                        {
                            name: 'languagePrefix',
                            value: initialParameters.languagePrefix
                        },
                        {
                            name: 'websiteHomeLink',
                            value: initialParameters.websiteHomeLink
                        },
                        {
                            name: 'Client Type',
                            value: formData.clientType || 'unknown'
                        },
                        {
                            name: 'Opened Chat From',
                            value: 'WWW'
                        },
                        {
                            name: 'Browser page',
                            value: window.location.href
                        },
                    ];

                    customParameters.forEach((element) => {
                        if (element.name === 'TradingAccount' && element.value === '0') {
                            element.value = '';
                        }
                    });

                    var visitorInfo = {
                        name: userFirstName,
                        email: userEmail
                    };
                    _setCacheData({
                        customParameters: customParameters,
                        visitorInfo: visitorInfo,
                        preferredLanguage: formData.preferred_language
                    });
                    _livechatModel = new LivechatModelClass(formData.preferred_language, customParameters, visitorInfo);
                    _$customLivechat.hide();
                }

                function _setCacheData(data) {
                    console.info('[LIVECHAT_FE]: Set items to cache');
                    sessionStorage.setItem(initialParameters.keyCacheData, JSON.stringify(data));
                }

                function _getCacheData() {
                    console.info('[LIVECHAT_FE]: Get items to cache');
                    return JSON.parse(sessionStorage.getItem(initialParameters.keyCacheData));
                }

                function _loadGroupLanguagesSettings() {
                    if (_isLanguagesBusy) {
                        return;
                    }
                    $('#custom-livechat .fa-spinner').show();
                    _isLanguagesBusy = true;
                    var data = {
                        languageCode: initialParameters.languageCode,
                        countryCode: initialParameters.authenticatedCountry,
                        brandId: initialParameters.brandId,
                    };
                    callApi('getLanguageGroupStatus', data)
                        .done(function(response) {
                            console.info('[LIVECHAT_FE]: method getLanguageGroupStatus completed');
                            var sessionData = response.result.sessionData;
                            if (sessionData.loggedIn) {
                                initialParameters.loggedIn = sessionData.loggedIn;
                                initialParameters.tradingAccount = sessionData.tradingAccount ? sessionData.tradingAccount : 0;
                                initialParameters.userDetails.userEmail = sessionData.userDetails.userEmail;
                                initialParameters.brandId = sessionData.userDetails.brandId || initialParameters.brandId;
                                saveSessionData(sessionData);
                            }

                            _renderLanguagesSelectBox(response.result.chatsGroups);
                        })
                        .fail(function(jqXHR, textStatus, errorThrown) {
                            console.error('[LIVECHAT_FE]: method getLanguageGroupStatus failed', {
                                responseText: jqXHR.responseText,
                                responseStatus: jqXHR.status,
                                responseStatusText: jqXHR.statusText,
                                textStatus,
                                errorThrown
                            });
                        })
                        .always(function() {
                            console.info('[LIVECHAT_FE]: method getLanguageGroupStatus always action');
                            _isLanguagesBusy = false;
                            $('#custom-livechat .fa-spinner').hide();
                        });
                }

                /**
                 * @param {Array<Object>} languages
                 * @private
                 */
                function _renderLanguagesSelectBox(languages) {
                    console.info('[LIVECHAT_FE]: Rendering groups');
                    if (!Array.isArray(languages)) {
                        console.warn('Languages has to be an array');
                        return;
                    }
                    var $options = $();
                    languages.forEach(function(langObj) {
                        $options = $options.add(
                            '<option value="' + langObj['groupId'] + '">' +
                            langObj['displayLanguage'] + ' (' + langObj['status'] + ')' +
                            '</option>'
                        );
                    });
                    $('.j-preferred-language').html($options);
                }
            }

            function initLivechatNative() {
                (function(n, t, c) {
                    function i(n) {
                        return e._h ? e._h.apply(null, n) : e._q.push(n)
                    }

                    var e = {
                        _q: [],
                        _h: null,
                        _v: "3.0",
                        on: function() {
                            i(["on", c.call(arguments)])
                        },
                        once: function() {
                            i(["once", c.call(arguments)])
                        },
                        off: function() {
                            i(["off", c.call(arguments)])
                        },
                        get: function() {
                            if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                            return i(["get", c.call(arguments)])
                        },
                        call: function() {
                            i(["call", c.call(arguments)])
                        },
                        init: function() {
                            var n = t.createElement("script");
                            n.async = !0;
                            n.type = "text/javascript";
                            n.src = "https://cdn.livechatinc.com/tracking.js";
                            t.head.appendChild(n);
                        }
                    };
                    !n.__lc.asyncInit && e.init();
                    n.LiveChatWidget = n.LiveChatWidget || e;
                }(window, document, [].slice))
            }

            /**
             * In case of existing client (like profile)
             */
            function requestClientName() {
                var formSelector = emailSelector.parents('form'),
                    buttonSelector = formSelector.find('button'),
                    buttonText = buttonSelector.attr('data-text');
                buttonSelector.text(buttonText).removeAttr('disabled');

                $('.j-first-name')
                    .removeClass('ignore_validation')
                    .parent()
                    .show();

                $('.j-last-name')
                    .removeClass('ignore_validation')
                    .parent()
                    .show();

                formSelector.removeClass('has-success');

                $('.j-div-email').hide();
                $('.j-div-language').hide();
            }

            /**
             * @param {object} sessionData
             * @return void
             */
            function saveSessionData(sessionData) {
                $('.custom-livechat__body .j-user-id')
                    .val(initialParameters.tradingAccount)
                    .prop('readonly', true);

                $('.custom-livechat__body .j-email')
                    .val(initialParameters.userDetails.userEmail)
                    .prop('readonly', true);

                $('#existing-member').removeClass('active');
                $('#visitor-user').addClass('active');
                $('.j-hide-if-logged-in').hide();

                if (!sessionData.userDetails.userFirstName || sessionData.userDetails.userFirstName === 'N/A') {
                    $('.j-show-first-name').show();
                } else {
                    initialParameters.userDetails.userFirstName = sessionData.userDetails.userFirstName;
                    $('.custom-livechat__body .j-first-name')
                        .val(initialParameters.userDetails.userFirstName)
                        .prop('readonly', true);
                }
                if (!sessionData.userDetails.userLastName || sessionData.userDetails.userLastName === 'N/A') {
                    $('.j-show-last-name').show();
                } else {
                    initialParameters.userDetails.userLastName = sessionData.userDetails.userLastName;
                    $('.custom-livechat__body .j-last-name')
                        .val(initialParameters.userDetails.userLastName)
                        .prop('readonly', true);
                }
            }


            /**
             * Adjust live chat position based on risk warning
             */
            function adjustLiveChat() {
                var $riskBlock, $riskBtn, isUK, $riskBtnHeight, $newLCWidget;
                $riskBlock = $('#risk-block');
                $riskBtn = $riskBlock.find('#js-riskCloseButton');
                isUK = $riskBlock.hasClass("isUK");
                $widgetOptions = $('#widgetOptions');
                $newLCWidget = $('livechat-widget');
                $riskBtnHeight = window.matchMedia("(max-width: 992px)").matches ? $riskBtn.outerHeight() : 0;

                if ($riskBlock.length && $riskBtn.length) {
                    $('#new-live-chat-icon, #custom-livechat').css('bottom', $riskBlock.outerHeight() + $riskBtnHeight);
                    $widgetOptions.css('bottom', $riskBlock.outerHeight() + $riskBtnHeight);
                    $newLCWidget.css('bottom', $riskBlock.outerHeight() + $riskBtnHeight + 15);
                    $newLCWidget.attr('max-height-offset', $riskBlock.outerHeight() + $riskBtnHeight + 15);
                } else if ($riskBlock.length && !isUK) {
                    $('#new-live-chat-icon, #custom-livechat').css('bottom', $riskBlock.outerHeight())
                    $widgetOptions.css('bottom', $riskBlock.outerHeight());
                    $newLCWidget.css('bottom', $riskBlock.outerHeight() + 15);
                    $newLCWidget.attr('max-height-offset', $riskBlock.outerHeight() + 15)
                } else {
                    $('#new-live-chat-icon, #custom-livechat').css('bottom', 0);
                    $widgetOptions.css('bottom', 0);
                    $newLCWidget.css('bottom', 50);
                    $newLCWidget.removeAttr('max-height-offset');
                }

            }

            var livechatController = new LivechatControllerClass(),
                $document = $(document),
                $window = $(window),
                $newLiveChatIcon = $('#new-live-chat-icon');
            // Initiate Event Listeners
            $('#livechatWidget').on('click', function(e) {
                if ($('#custom-livechat').is(':visible')) {
                    livechatController.closeCustomForm();
                } else {
                    livechatController.openChat();
                }
            });
            $document.on('click', '#startLiveChat', function(e) {
                e.preventDefault();
                $('.j-second-step').show();
                livechatController.openChat();
                $.cookie("livechatDisclaimer", 1, {
                    expires: 90,
                    path: '/'
                });
                $('.option__livechat').attr('no_disclaimer', '');
            });
            $document.on('click', '#start-whatsapp', function(e) {
                $.cookie("whatsAppDisclaimer", 1, {
                    expires: 90,
                    path: '/'
                });
                $('.option__whatsapp').attr('no_disclaimer', '');
            });
            $document.on('click', function(e) {
                var $target, line_cookie, is_mobile, whatsapp_cookie, viber_cookie, telegram_cookie;
                $target = $(e.target);
                line_cookie = $.cookie('linechatDisclaimer');
                whatsapp_cookie = $.cookie('whatsAppDisclaimer');
                viber_cookie = $.cookie('viberchatDisclaimer');
                telegram_cookie = $.cookie('telegramDisclaimer');
                is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(window.navigator.userAgent);

                // Setcookie Mobile
                if ($target.is('#start-line') && line_cookie == null && is_mobile) {
                    $.cookie("linechatDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__linechat').attr('no_disclaimer', '');
                }

                if ($target.is('#start-whatsapp') && whatsapp_cookie == null && is_mobile) {
                    $.cookie("whatsAppDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__whatsapp').attr('no_disclaimer', '');
                }

                if ($target.is('#start-viber') && whatsapp_cookie == null && is_mobile) {
                    $.cookie("viberchatDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__viberchat').attr('no_disclaimer', '');
                }

                if ($target.is('#start-telegram') && whatsapp_cookie == null && is_mobile) {
                    $.cookie("telegramDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__telegram').attr('no_disclaimer', '');
                }

                // Setcookie Desktop
                if ($target.is('.option__linechat') && line_cookie == null && !is_mobile) {
                    $.cookie("linechatDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__linechat').attr('no_disclaimer', '');
                }

                if ($target.is('.option__whatsapp') && whatsapp_cookie == null && !is_mobile) {
                    $.cookie("whatsAppDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__whatsapp').attr('no_disclaimer', '');
                }

                if ($target.is('.option__viberchat') && viber_cookie == null && !is_mobile) {
                    $.cookie("viberchatDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__viberchat').attr('no_disclaimer', '');
                }

                if ($target.is('.option__telegram') && telegram_cookie == null && !is_mobile) {
                    $.cookie("telegramDisclaimer", 1, {
                        expires: 90,
                        path: '/'
                    });
                    $('.option__telegram').attr('no_disclaimer', '');
                }

            });
            $document.on('click', ".option__livechat[no_disclaimer]", function(e) {
                e.preventDefault();
                $('.j-second-step').show();
                livechatController.openChat();
            });
            $document.on('click', '#close-prechat-form', function() {
                livechatController.closeCustomForm();
                $newLiveChatIcon.show();
            });
            $document.on('click', '#start-chat, #start-chat-member', function(e) {
                e.preventDefault();
                var formId = $(this).closest("form").attr('id'),
                    $form = $('#' + formId);
                if ($form.valid()) {
                    var formData = {};
                    $form.serializeArray().forEach(function(item) {
                        formData[item.name] = item.value;
                    });
                    if (formData["user_id"] === undefined && initialParameters.loggedIn) {
                        formData["user_id"] = userIdSelector.val() ? ? '0';
                    }
                    livechatController.startNewChat(formData);
                }
            });
            $document.on('click', '#js-riskCloseButton', adjustLiveChat);
            $window.on('resize', adjustLiveChat);
            $document.on('click', '#livechatWidget', function() {
                // Remove notification icon when user clicks on the livechat widget
                if ($(this).hasClass('notification')) {
                    $(this).removeClass('notification');
                }
            });
            adjustLiveChat();
        })(jQuery);
    


        var pleaseWait = "お待ち下さい";
    


        $(window).on('load', function() {

            //  REGISTRATION FORMS: additional scripts START



            //  REGISTRATION FORMS: additional scripts END

            $.validator.setDefaults({
                ignore: ''
            });


            $('form#pre-chat-form,#pre-chat-form-member').each(function() {

                $(this).validate({


                    rules: {
                        "first_name": {
                            required: true,
                            maxlength: 70,
                        },
                        "last_name": {
                            required: true,
                            maxlength: 90,
                        },
                        "email": {
                            required: true,
                            validEmail: true,
                        },
                        "user_id": {
                            required: true,
                            regex: /^[0-9]+$/,
                        },
                        "user_password": {
                            required: true,
                            regex: /^[a-zA-Z0-9\#\[\]\(\)\@$\&\*\!\?\|\,\.\^\/\\+_-]+$/,
                        },
                        "preferred_language": {
                            required: true,
                        },
                    },

                    messages: {
                        "first_name": {
                            required: "<strong>下のお名前 （例）Taro</strong> －この欄は入力必須です",
                            maxlength: "下のお名前は70文字以下である必要があります。",
                        },
                        "last_name": {
                            required: "<strong>姓 （例）Yamada</strong> －この欄は入力必須です",
                            maxlength: "姓は90文字以下である必要があります。",
                        },
                        "email": {
                            required: "<strong>Eメール</strong> －この欄は入力必須です",
                            validEmail: "<strong>Eメール</strong> －この欄には有効なEメールアドレスの入力が必要です",
                        },
                        "user_id": {},
                        "user_password": {
                            required: "<strong>パスワード:</strong> －この欄は入力必須です",
                            regex: "<strong>パスワード:</strong> －この欄には有効なEメールアドレスの入力が必要です",
                        },
                        "preferred_language": {
                            required: "<strong>希望言語</strong> －この欄は入力必須です",
                        },
                    },

                    ignore: '.ignore_validation',

                    highlight: function(element, errorClass, validClass) {
                        $(element)
                            .addClass(errorClass)
                            .removeClass(validClass);

                        if ($(element).hasClass('select2-search__field')) {
                            return;
                        } else if ($(element).attr('type') != 'checkbox' && $(element).attr('type') != 'radio') {
                            var selectClass = ($(element).prop('type') == 'select-one') ? ' select' : '',
                                icon = '<div class="glyphicon-wrapper"><span class="glyphicon glyphicon-remove form-control-feedback' + selectClass + '" aria-hidden="true"></span></div>';
                            $(element)
                                .closest('.form-group')
                                .removeClass('has-success')
                                .addClass('has-error')
                                .end()
                                .siblings('.glyphicon-wrapper').remove()
                                .end()
                                .before(icon);
                        }

                        if ($.fn.bulletValidate) {
                            var bulletValidator = $(element).getBulletValidation();
                            if (bulletValidator) {
                                bulletValidator.validation();
                            }
                        }
                    },
                    unhighlight: function(element, errorClass, validClass) {
                        $(element)
                            .removeClass(errorClass)
                            .addClass(validClass);

                        if ($(element).hasClass('select2-search__field')) {
                            return;
                        } else if ($(element).attr('type') != 'checkbox' && $(element).attr('type') != 'radio') {
                            var selectClass = ($(element).prop('type') == 'select-one') ? ' select' : '',
                                icon = '<div class="glyphicon-wrapper"><span aria-hidden="true" class="glyphicon glyphicon-ok form-control-feedback' + selectClass + '"></span></div>';
                            $(element)
                                .closest('.form-group')
                                .removeClass('has-error')
                                .addClass('has-success')
                                .end()
                                .siblings('.glyphicon-wrapper').remove()
                                .end()
                                .before(icon);

                            if ($(element).parents('.remove-valid').length) {

                                $(element)
                                    .removeClass('valid')
                                    .closest('.form-group')
                                    .removeClass('has-success')
                                    .end()
                                    .siblings('.glyphicon-wrapper').remove();
                            }
                        }
                        if ($.fn.bulletValidate) {
                            var bulletValidator = $(element).getBulletValidation();
                            if (bulletValidator) {
                                bulletValidator.validation();
                            }
                        }
                    },

                    errorPlacement: function(error, element) {

                        if (element.siblings('.input-group-addon').length > 0) {
                            $(element)
                                .closest('.input-group')
                                .after(error);
                        } else if (element.closest('.form-group').find('.search-select').length > 0) {
                            $(element)
                                .closest('.form-group').find('.select2-container')
                                .after(error);
                        } else if (element.closest('.form-group').find('.btn-group').length > 0) {
                            $(element)
                                .closest('.form-group').find('.btn-group')
                                .after(error);
                        } else if (element.attr('type') == 'file') {
                            $(element)
                                .closest('.input-group')
                                .after(error);
                        } else if (element.attr('type') == 'checkbox') {
                            $(element)
                                .closest('.form-group')
                                .append(error);
                        } else if (element.attr('type') == 'radio') {
                            $(element)
                                .closest('label')
                                .siblings('span')
                                .after(error);
                        } else if (typeof element.attr('data-select2-dropdown') != 'undefined') {
                            $(element)
                                .closest('.form-group')
                                .append(error);
                        } else {
                            error.insertAfter(element);
                        }
                    },

                    invalidHandler: function(form, validator) {
                        // Prevent scroll for livechat bubble
                        if ($(form.target).is('#pre-chat-form-member,#pre-chat-form')) return;
                        scrollToObject($(validator.errorList[0].element));
                        $(form.target).removeData('submitted').find('[type="submit"]').removeProp('disabled');
                    },

                    submitHandler: function(form) {
                        if ($.fn.bulletValidate) {
                            var submit = true;
                            $(form).find('input').each(function() {
                                var bulletValidator = $(this).getBulletValidation();
                                if (bulletValidator) {
                                    if (bulletValidator.validation() === false) {
                                        submit = false;
                                        bulletValidator.invalidSubmitHandler($(this));
                                        return false;
                                    }
                                }
                            });
                            if (submit === false) {
                                return false;
                            }
                        }

                        var ajaxButton = $(form).find('button[data-type="ajax"]');
                        if (ajaxButton.length > 0) {
                            ajaxButton.text(pleaseWait).attr('disabled', true);
                            return false;
                        }

                        $(form).find('button').text(pleaseWait);
                        $(form).find('button').attr('disabled', 'disabled');
                        form.submit();
                        return false;
                    }

                });

            });
        });
    


        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam.eu01.nr-data.net",
            "licenseKey": "NRBR-1d4ceb8e146a994d175",
            "applicationID": "99021171,99021191",
            "transactionName": "MhBSZQoZXhFQWkZdWgtac0QLDF8PHlNCGw==",
            "queueTime": 0,
            "applicationTime": 519,
            "atts": "HldRE0IDTR8=",
            "errorBeacon": "bam.eu01.nr-data.net",
            "agent": ""
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<noscript>&amp;amp;amp;amp;amp;amp;lt;iframe src="//www.googletagmanager.com/ns.html?id=GTM-KPSPFZ" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}&amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;lt;/iframe&amp;amp;amp;amp;amp;amp;gt;</noscript>

<div className="layout">
<div className="site-canvas">
<header className="">
<nav className="navbar navbar-default" role="navigation">
<div className="header-top">
<div className="container">
<ul className="links-nav hidden-xs hidden-sm">
<li>
<a href="https://www.xmtrading.com/jp/">
                        XMTradingホームページ                    </a>
</li>
<li>
<a href="https://www.xmtrading.com/jp/support">
                        サポート                    </a>
</li>
<li>
</li>
</ul>
<ul className="buttons-nav hidden-xs hidden-sm">
<li className="hidden-sm">
<a className="btn btn-white" href="https://www.xmtrading.com/goto/members/jp" target="_blank">
<i aria-hidden="true" className="fa fa-lock"></i>会員ログイン                    </a>
</li>
<li className="hidden-sm">
<a className="btn btn-white" href="https://www.xmtrading.com/jp/help-center/home">
                        ヘルプセンター                    </a>
</li>
<li className="hidden-sm">
<a className="btn btn-solid btn-red" href="/xm-cadastro">
                            口座を開設する                        </a>
</li>
</ul>
</div>
</div>
<div className="container-fluid" id="main-nav">
<div className="container">
<div className="row">
<div className="toggle-bar visible-xs visible-sm">
<button className="toggleLeftNav">
<i aria-hidden="true" className="fa fa-bars"></i><span>メニュー</span>
<i aria-hidden="true" className="fa fa-times"></i>
</button>
<button className="toggleRightNav">
<span>言語</span><i aria-hidden="true" className="fa fa-globe"></i>
<i aria-hidden="true" className="fa fa-times"></i>
</button>
</div>
</div>
</div>
<div className="row">
<div className="toggle-bar-line"></div>
</div>
<div className="container">
<div className="row">
<div className="center-logo">
<h1 className="pagetitle">
                                        FX </h1>
<a className="navbar-brand logo" href="https://www.xmtrading.com/jp">
<img alt="XMTrading Logo" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/XMTrading_15Years_Logo/XMTrading-15Years-logo-white.svg?v=6ef76b12fda7bc42685a3414b7d07d07" width="205"/>
</a>
<a className="navbar-brand promo-logo-svg" href="https://www.xmtrading.com/jp/promo-xmas-2025">
<img alt="xmas ladder promo" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/Japan_XMAS_Ladder_Dec_2025/XMas_HP_icon_jp.svg?v=87916f4bb842905490212c9ad8ad8a58"/>
</a>
</div>
</div>
</div>
<ul id="languages">
<li role="presentation">
<a href="https://www.xmtrading.com/?prln=1" role="menuitem" tabindex="-1">
<i className="flags-sprite lg-en"></i><span>English</span>
</a>
</li>
<li role="presentation">
<a href="https://www.xmtrading.com/my/?prln=1" role="menuitem" tabindex="-1">
<i className="flags-sprite lg-my"></i><span>Malay</span>
</a>
</li>
<li role="presentation">
<a href="https://www.xmtrading.com/ru/?prln=1" role="menuitem" tabindex="-1">
<i className="flags-sprite lg-ru"></i><span>Русский</span>
</a>
</li>
<li role="presentation">
<a href="https://www.xmtrading.com/kr/?prln=1" role="menuitem" tabindex="-1">
<i className="flags-sprite lg-kr"></i><span>한국어</span>
</a>
</li>
<li role="presentation">
<a href="https://www.xmtrading.com/vn/?prln=1" role="menuitem" tabindex="-1">
<i className="flags-sprite lg-vn"></i><span>Tiếng Việt</span>
</a>
</li>
<li role="presentation">
<a href="https://www.xmtrading.com/th/?prln=1" role="menuitem" tabindex="-1">
<i className="flags-sprite lg-th"></i><span>ภาษาไทย</span>
</a>
</li>
</ul>
<div className="collapse navbar-collapse main-nav" id="navigation-collapse">
<div className="container">
<div className="navbar-header hidden-xs hidden-sm">
<a className="navbar-brand logo" href="https://www.xmtrading.com/jp">
<img alt="XMTrading Logo" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/XMTrading_15Years_Logo/XMTrading-15Years-logo-white.svg?v=6ef76b12fda7bc42685a3414b7d07d07" width="205"/>
</a>
<a className="navbar-brand promo-logo-svg" href="https://www.xmtrading.com/jp/promo-xmas-2025">
<img alt="xmas ladder promo" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/Japan_XMAS_Ladder_Dec_2025/XMas_HP_icon_jp.svg?v=87916f4bb842905490212c9ad8ad8a58"/>
</a>
</div>
<ul className="nav navbar-nav navbar-right default nav-logo hidden-xs hidden-sm" id="main-nav">
<li className="main_nav_trading">
<a href="#">
            取引        </a>
<div className="dropdown" style={{display: 'none'}}>
<div className="container">

<div className="wrap capitalize_text xmtd">
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-user-id"></i>取引口座                </span>
<ul>
<li className="menu-account-types">
<a href="https://www.xmtrading.com/jp/account-types">
                                取引口座タイプ                            </a>
</li>


</ul>
</div>
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-candlestick"></i>取引商品                </span>
<ul>
<li className="menu-forex-trading">
<a href="https://www.xmtrading.com/jp/forex-trading">
            FX取引        </a>
</li>
<li className="menu-cryptocurrencies">
<a href="https://www.xmtrading.com/jp/cryptocfds">
                仮想通貨CFD            </a>
</li>
<li className="menu-precious-metals">
<a href="https://www.xmtrading.com/jp/precious-metals">
                貴金属            </a>
</li>
</ul>
</div>
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-chart-bars-arrow"></i>取引条件                </span>
<ul>
<li className="menu-execution-policy">
<a href="https://www.xmtrading.com/jp/execution-policy">
                            執行方法                        </a>
</li>
<li className="menu-spreads">
<a href="https://www.xmtrading.com/jp/spreads">
                            スプレッド                        </a>
</li>
<li className="menu-margin-and-leverage">
<a href="https://www.xmtrading.com/jp/margin-and-leverage">
                                証拠金とレバレッジ                            </a>
</li>
</ul>
</div>

<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-copytrading-thin"></i>ソーシャルトレーディング                    </span>
<ul>
<li className="menu-social-copy-trading">
<a href="https://www.xmtrading.com/jp/copy-trading">
                                コピートレード                                <div className="mega-menu__badge badge">NEW</div>
</a>
</li>
</ul>
</div>
</div>
<div className="nav-bottom-bar hidden-xs hidden-sm">
<div className="container">
<div className="row">
<div className="col-md-8">
<p>
                                                                    XMTrading MT4もしくはMT5取引プラットフォームにてグローバル市場へ即時アクセス。 </p>
</div>
<div className="col-md-4">
<a className="btn btn-solid btn-full btn-red" href="https://www.xmtrading.com/goto/profile/jp">
                            リアル口座開設                        </a>
</div>
</div>
</div>
</div>
</div>
</div>
</li>
<li className="main_nav_platforms">
<a href="#">
            プラットフォーム        </a>
<div className="dropdown" style={{display: 'none'}}>
<div className="container">
<div className="box platform hidden-xs hidden-sm">
<span>プラットフォーム</span>
<p>PCとMac双方に対応しているXMTrading MT4とMT5でお好きな金融商品のお取引を開始いただけます。また、ブラウザから直接利用可能なXMTrading WebTraderもご利用いただけます。</p>
<p>また、MT4とMT5の両方に対応したモバイル端末用の本格的なプラットフォームにより、スマートフォンやタブレットから簡単に口座にアクセスし、取引することができます。リストからお好きなモバイルプラットフォームやデスクトッププラットフォームをお選びいただけます。</p>
<div className="dis20"></div>
<p>リスク警告：証拠金取引には高いリスクが伴います。</p>
</div>
<div className="line hidden-xs hidden-sm">
</div>
<div className="wrap capitalize_text">
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-pc"></i>PC / Mac                </span>
<ul>
<li className="menu-mt4">
<a href="https://www.xmtrading.com/jp/mt4">
<i aria-hidden="true" className="fa fa-windows hidden-xs hidden-sm"></i>PC対応MT4                            </a>
</li>
<li className="menu-metatrader-mac">
<a href="https://www.xmtrading.com/jp/metatrader-mac">
<i aria-hidden="true" className="fa fa-apple hidden-xs hidden-sm"></i>Mac対応MT4                            </a>
</li>
<li className="menu-webtrader">
<a href="https://www.xmtrading.com/jp/mt4-webtrader">
<i aria-hidden="true" className="fa fa-desktop hidden-xs hidden-sm"></i>MT4 WebTrader                            </a>
</li>
</ul>
</div>
<div className="block">
<div className="hidden-xs hidden-sm dis50"></div>
<ul>
<li className="menu-mt4">
<a href="https://www.xmtrading.com/jp/mt5">
<i aria-hidden="true" className="fa fa-windows hidden-xs hidden-sm"></i>PC対応MT5                        </a>
</li>
<li className="menu-metatrader-mac">
<a href="https://www.xmtrading.com/jp/mt5-mac">
<i aria-hidden="true" className="fa fa-apple hidden-xs hidden-sm"></i>Mac対応MT5                        </a>
</li>
<li className="menu-webtrader">
<a href="https://www.xmtrading.com/jp/mt5-webtrader">
<i aria-hidden="true" className="fa fa-desktop hidden-xs hidden-sm"></i>MT5 WebTrader                        </a>
</li>

</ul>
</div>
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-iphone"></i>スマートフォン                </span>
<ul>
<li className="menu-android-phone">
<a href="https://www.xmtrading.com/jp/xmtrading-android-app">
<i aria-hidden="true" className="fa fa-android hidden-xs hidden-sm"></i>Android アプリ                            </a>
</li>
<li className="menu-iphone">
<a href="https://www.xmtrading.com/jp/iphone">
<i aria-hidden="true" className="fa fa-apple hidden-xs hidden-sm"></i>iPhone対応MT4                            </a>
</li>
<li className="menu-android-phone">
<a href="https://www.xmtrading.com/jp/android">
<i aria-hidden="true" className="fa fa-android hidden-xs hidden-sm"></i>Android対応MT4                            </a>
</li>
</ul>
</div>
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-ipad"></i>タブレット                </span>
<ul>
<li className="menu-android">
<a href="https://www.xmtrading.com/jp/xmtrading-android-app">
<i aria-hidden="true" className="fa fa-android hidden-xs hidden-sm"></i>Android アプリ                            </a>
</li>
<li className="menu-ipad">
<a href="https://www.xmtrading.com/jp/ipad">
<i aria-hidden="true" className="fa fa-apple hidden-xs hidden-sm"></i>iPad対応MT4                            </a>
</li>
<li className="menu-android">
<a href="https://www.xmtrading.com/jp/android-tablet">
<i aria-hidden="true" className="fa fa-android hidden-xs hidden-sm"></i>Android対応MT4                            </a>
</li>
</ul>
</div>
</div>
<div className="nav-bottom-bar hidden-xs hidden-sm">
<div className="container">
<div className="row">
<div className="col-md-8">
<p>
                                                                    XMTrading MT4もしくはMT5取引プラットフォームにてグローバル市場へ即時アクセス。 </p>
</div>
<div className="col-md-4">
<a className="btn btn-solid btn-full btn-red" href="https://www.xmtrading.com/goto/profile/jp">
                            リアル口座開設                        </a>
</div>
</div>
</div>
</div>
</div>
</div>
</li>
<li className="main_nav_research">
<a href="#">
<i aria-hidden="true" className="fa fa-graduation-cap"></i>取引ツール        </a>
<div className="dropdown" style={{display: 'none'}}>
<div className="container">
<div className="box hidden-xs hidden-sm">
<span>取引ツール</span>
<p>弊社の無料取引ツールは、初心者から経験豊富なオンライン投資家まで、皆様に有用な学習教材や非常に役に立つ必要不可欠な機能を提供しております。</p>
<p>これらの多様な取引ツールは、トレーダーの皆様の競争優位性を高め、金融市場の最新情報を入手して適切な情報を元に投資目標を達成いただけるよう支援することを目的としています。</p>
</div>
<div className="line hidden-xs hidden-sm">
</div>
<div className="wrap capitalize_text">
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-chart-search"></i>リサーチ        </span>
<ul>
<li className="menu-analysis-videos menu-daily-video">
<a href="/jp/blog">
                            ブログ                        </a>
</li>
</ul>
</div>
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-chart"></i>学習センター    </span>
<ul>
<li className="menu-webinars">
<a href="https://www.xmtrading.com/jp/webinars">
                        FXウェビナー                    </a>
</li>
</ul>
</div>
<div className="block">
<span>
<i className="xmFont fa-kit fa-xm-tools"></i>取引ツール    </span>
<ul>
<li>
<a href="https://www.xmtrading.com/jp/trading-signals">
                    取引シグナル                </a>
</li>
<li className="menu-mql5">
<a href="https://www.xmtrading.com/jp/mql5">
                        MQL5（メタクォーツ・ランゲージ5）                    </a>
</li>
<li className="menu-calendar">
<a href="https://www.xmtrading.com/jp/calendar">
                経済指標カレンダー            </a>
</li>
</ul>
</div>
</div>
<div className="nav-bottom-bar">
<div className="container">
<div className="row">
<div className="col-md-8">
<p>
                                                                    XMTrading MT4もしくはMT5取引プラットフォームにてグローバル市場へ即時アクセス。 </p>
</div>
<div className="col-md-4">
<a className="btn btn-solid btn-full btn-red" href="https://www.xmtrading.com/goto/profile/jp">
                            リアル口座開設                        </a>
</div>
</div>
</div>
</div>
</div>
</div>
</li>
</ul>
<ul className="nav navbar-nav navbar-right default visible-xs visible-sm capitalize_text" id="main-nav">
<li>
<a href="https://www.xmtrading.com/jp/">
<i aria-hidden="true" className="fa fa-home"></i><span>ホーム</span>
</a>
</li>
<li>
<a href="https://www.xmtrading.com/goto/members/jp" target="_blank">
<i aria-hidden="true" className="fa fa-lock"></i><span>会員ログイン</span>
</a>
</li>
<li>
<a href="https://my.xmtrading.com/jp/payment/deposit" target="_blank">
<i aria-hidden="true" className="fa fa-credit-card"></i><span>入金する</span>
</a>
</li>
</ul>
<div className="navbar-nav__buttons visible-xs visible-sm">
<a className="btn btn-block navbar-nav__buttons--primary" href="https://www.xmtrading.com/goto/members/jp" target="_blank">
<i aria-hidden="true" className="fa fa-lock"></i><span>会員ログイン</span>
</a>
</div>
</div>
</div>
</div>
</nav>
</header>
<livechat-widget brand="xmtd" country="JP" help-center-link="https://www.xmtrading.com/jp/help-center/home" lang="jp" max-height-offset="78" privacy-policy-link="https://www.xmtrading.com/jp/privacy-policy" session-data='{"openedChatFrom":"WWW"}' style={{bottom: '78px'}} theme="old"></livechat-widget>

<div className="visible-xs visible-sm">
<div className="main-photo">
<div className="img"></div>
<p className="text-center pre-title">XMTradingで極限のトレードを</p>
<div className="block">
<h2>信頼のグローバルブローカーとのお取引</h2>
<div>
<p>¥15000の口座開設ボーナス*で取引を開始</p>
</div>
</div>
<div className="buttons-wrap">
<div className="container">
<div className="row text-center">
<div className="col-md-12 visible-xs">
<a className="btn btn-solid btn-red btn-block" href="https://www.xmtrading.com/goto/profile/jp">
<div>
                                            口座を開設する </div>
<i aria-hidden="true" className="fa fa-chevron-right hidden-xs hidden-sm"></i>
</a>
</div>
<div className="col-md-12 hidden-xs">
<a className="btn btn-solid btn-red btn-block" href="https://www.xmtrading.com/goto/profile/jp">
<div>
                                            口座を開設する </div>
</a>
</div>
</div>
</div>
</div>
<div className="container">
<div className="row visible-xs visible-sm text-center">
<div className="col-md-12">
<div className="text-center terms__txt">
<a className="read-more" href="https://cloud.xmtrading-cdn.com/static/pdf/Generic-PDFs/Dynamic-promos/Ndbs/XMTrading-No-Deposit-Trading-Bonus-Terms-and-Conditions-105.pdf?v=52d69b167e93049678ec9e19989c844d" target="_blank">
                            利用規約適用                        </a>
</div>
</div>
</div>
</div>
<section className="stripe-responsive">
<div className="container">
<div className="row text-center">
<div className="col-md-12">
<div className="stripe-internal">
<div className="visible-xs visible-sm visible-md">
<div className="listing-grid listing-grid--features">
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">1000:1</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">レバレッジ</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">$0</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">入出金手数料</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">$10,500</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">ボーナス</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">Micro</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">とStandardロットの口座</p>
</div>
</div>
</div>
</div>
</div>
<div className="visible-lg">
<div className="listing-grid listing-grid--features">
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">1000:1</p>
</div>
<div className="item__col">
<p className="item__txt">レバレッジ</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">$0</p>
</div>
<div className="item__col">
<p className="item__txt">入出金手数料</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">$10,500</p>
</div>
<div className="item__col">
<p className="item__txt">ボーナス</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">Micro</p>
</div>
<div className="item__col">
<p className="item__txt">とStandardロットの口座</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div className="visible-md visible-lg">
<div className="main-photo">
<div className="img"></div>
<p className="text-center hidden-xs pre-title">XMTradingで極限のトレードを</p>
<div className="block">
<h2 className="hidden-xs">信頼のグローバルブローカーとのお取引</h2>
<div className="">
<p className="">¥15000の口座開設ボーナス*で取引を開始</p>
</div>
<div className="dis15"></div>
</div>
<div className="buttons-wrap">
<div className="container">
<div className="row text-center">
<div className="col-md-12 visible-xs">
<a className="btn btn-solid btn-red btn-block" href="https://www.xmtrading.com/goto/profile/jp">
<div>
                                            口座を開設する </div>
<i aria-hidden="true" className="fa fa-chevron-right hidden-xs hidden-sm"></i>
</a>
</div>
<div className="col-md-12 hidden-xs">
<a className="btn btn-solid btn-red btn-block" href="/xm-cadastro">
<div className="">
                                            口座を開設する </div>
</a>
</div>
</div>
</div>
</div>
<div className="text-center hidden-xs terms__txt">
<a className="read-more" href="https://cloud.xmtrading-cdn.com/static/pdf/Generic-PDFs/Dynamic-promos/Ndbs/XMTrading-No-Deposit-Trading-Bonus-Terms-and-Conditions-105.pdf?v=52d69b167e93049678ec9e19989c844d" target="_blank">
                利用規約適用            </a>
</div>
<section className="stripe-responsive">
<div className="container">
<div className="row text-center">
<div className="col-md-12">
<div className="stripe-internal">
<div className="visible-xs visible-sm visible-md">
<div className="listing-grid listing-grid--features">
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">1000:1</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">レバレッジ</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">$0</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">入出金手数料</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">$10,500</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">ボーナス</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__title">Micro</p>
</div>
<div className="col-xs-6 col-sm-12 item__col">
<p className="item__txt">とStandardロットの口座</p>
</div>
</div>
</div>
</div>
</div>
<div className="visible-lg">
<div className="listing-grid listing-grid--features">
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">1000:1</p>
</div>
<div className="item__col">
<p className="item__txt">レバレッジ</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">$0</p>
</div>
<div className="item__col">
<p className="item__txt">入出金手数料</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">$10,500</p>
</div>
<div className="item__col">
<p className="item__txt">ボーナス</p>
</div>
</div>
</div>
<div className="listing-grid__item">
<div className="row item__row">
<div className="item__col">
<p className="item__title">Micro</p>
</div>
<div className="item__col">
<p className="item__txt">とStandardロットの口座</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div className="clearfix"></div>

<div className="social-banner">
<div className="container">
<h2 className="section__main-title text-center">ソーシャルトレーディングのパワーを発揮</h2>
<div className="tabs-wrapper">

<div className="hidden-xs">
<ul className="steps-tabs nav nav-tabs" role="tablist">
<li className="active"><a data-toggle="tab" href="#copyTradingTab" role="tab">コピートレード</a></li>
</ul>
<div className="tab-content">
<div className="tab-pane active" id="copyTradingTab">
<div className="">
<div className="content-wrapper">
<h3 className="no_margin">プロの如くトレードしよう</h3>
<div className="dis25"></div>
<h4 className="no_margin">自信を持って利益獲得</h4>
<div className="dis25"></div>
<p className="no_margin">投資家としてプロトレーダーの成功した戦略をフォローして利益を獲得したり、ストラテジーマネージャーとして独自の戦略を共有して、最大50%の利益分配*を獲得しよう。</p>
<div className="dis25"></div>
<a className="btn btn-solid btn-red center-block" href="/xm-cadastro">
                                コピートレードを開始                                </a>
<div className="dis10"></div>
<small><a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/Tradexfin-Client-Agreement-Terms-and-Conditions-of-Business-c.pdf?v=a2c72420aa61a4626fb5d09a033eda67" target="_blank">*利用規約適用。</a></small>
</div>
</div>
<div className="">
<img alt="Copy Trading" className="img-responsive center-block" src="https://cloud.xmtrading-cdn.com/static/xmtrading/pages/home/copytrading-jp.webp?v=2"/>
</div>
</div>
<div className="tab-pane" id="competitionsTab">
<div>
<div className="content-wrapper">
<h3 className="no_margin">毎月総額$210,000の賞金を獲得！</h3>
<div className="dis25"></div>
<h4 className="no_margin">トップに上り詰めよう</h4>
<div className="dis25"></div>
<p className="no_margin">トレードコンテストに参加し、ランキング上位に入賞して最大$10,000の出金可能な賞金*を獲得するチャンス。</p>
<div className="dis25"></div>
<a className="btn btn-solid btn-red center-block" href="https://www.xmtrading.com/jp/competitions">
                                コンテストに参加                            </a>
<div className="dis10"></div>
<small><a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/XMTrading-Terms-and-Conditions-Competitions-Program.pdf?v=2cd5c7f862b3eedd1e5982d85b4cde4a" target="_blank">*利用規約適用。</a></small>
</div>
</div>
<div>
<img alt="Competitions" className="img-responsive center-block" src="https://cloud.xmtrading-cdn.com/static/xmtrading/pages/home/competitions-jp.webp?v=2"/>
</div>
</div>
</div>
</div>

<div className="visible-xs text-center">
<div className="placeholder-tab">
<span>コピートレード</span>
</div>
<div className="dis25"></div>
<div className="content-wrapper">
<div className="dis25"></div>
<h3 className="no_margin">プロの如くトレードしよう</h3>
<div className="dis25"></div>
<h4 className="no_margin">自信を持って利益獲得</h4>
<div className="dis25"></div>
<p className="no_margin">投資家としてプロトレーダーの成功した戦略をフォローして利益を獲得したり、ストラテジーマネージャーとして独自の戦略を共有して、最大50%の利益分配*を獲得しよう。</p>
<div className="dis25"></div>
<a className="btn btn-solid btn-red center-block" href="https://www.xmtrading.com/jp/copy-trading" target="blank">
                        コピートレードを開始                    </a>
<div className="dis10"></div>
<small><a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/Tradexfin-Client-Agreement-Terms-and-Conditions-of-Business-c.pdf?v=a2c72420aa61a4626fb5d09a033eda67" target="_blank">*利用規約適用。</a></small>
<div className="dis25 hidden-md"></div>
<img alt="Competitions" className="img-responsive center-block" src="https://cloud.xmtrading-cdn.com/static/xmtrading/pages/home/copytrading-mob-jp.webp?v=2"/>
</div>
<div className="dis55"></div>
<div className="placeholder-tab">
<span>コンテスト</span>
</div>
<div className="dis25"></div>
<div className="content-wrapper">
<div className="dis25"></div>
<h3 className="no_margin">毎月総額$210,000の賞金を獲得！</h3>
<div className="dis25"></div>
<h4 className="no_margin">トップに上り詰めよう</h4>
<div className="dis25"></div>
<p className="no_margin">トレードコンテストに参加し、ランキング上位に入賞して最大$10,000の出金可能な賞金*を獲得するチャンス。</p>
<div className="dis25"></div>
<a className="btn btn-solid btn-red center-block" href="https://www.xmtrading.com/jp/competitions" target="blank">
                        コンテストに参加                    </a>
<div className="dis10"></div>
<small><a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/XMTrading-Terms-and-Conditions-Competitions-Program.pdf?v=2cd5c7f862b3eedd1e5982d85b4cde4a" target="_blank">*利用規約適用。</a></small>
<div className="dis25 hidden-md"></div>
<img alt="Competitions" className="img-responsive center-block" src="https://cloud.xmtrading-cdn.com/static/xmtrading/pages/home/competitions-mob-jp.webp?v=2"/>
</div>
</div>
</div>
</div>
</div>
<div className="cfd-wrapper">
<div className="container">
<div className="row text-center">
<div className="col-md-12">
<h2 className="section__main-title">選べる銘柄は1,400以上</h2>
</div>
</div>
<div className="row text-center">
<div className="col-md-12">
<div className="listing-grid listing-grid--cfds">
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/cryptocfds">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-bitcoin"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">仮想通貨CFD</p>
</div>
</div>
</a>
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/forex-trading">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-chart"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">FX取引</p>
</div>
</div>
</a>
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/precious-metals">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-gold"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">ゴールド取引</p>
</div>
</div>
</a>
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/equity-indices">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-high-bars"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">株式指数</p>
</div>
</div>
</a>
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/energies">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-drop"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">原油取引</p>
</div>
</div>
</a>
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/stocks">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-chart-bars-arrow"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">株式デリバティブ </p>
</div>
</div>
</a>
<a className="listing-grid__item listing-grid__item--brd" href="https://www.xmtrading.com/jp/thematic-indices">
<div className="list-item__wrapper">
<div className="list-item__col">
<i className="list-item__icon red xmFont fa-kit fa-xm-high-bars"></i>
</div>
<div className="list-item__col">
<p className="list-item__txt no_margin">テーマ型指数</p>
<div className="mega-menu__badge badge">NEW</div>
</div>
</div>
</a>
</div>
</div>
</div>
<div className="row visible-xs">
<div className="col-md-12">
<div className="btn-wrap">
<a className="btn btn-solid btn-full btn-red scroll" href="https://www.xmtrading.com/goto/profile/jp">
<div>口座開設</div>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="carousel-wrapper visible-xs visible-sm visible-md visible-lg">
<div className="container">
<div className="row text-center">
<div className="col-md-12">
<h2 className="section__main-title no_margin">
                                実績・経験豊富な大手企業を選びましょう </h2>
<div className="dis45 visible-xs"></div>
<div className="dis35 visible-sm"></div>
<div className="dis50 visible-md visible-lg"></div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="owl-carousel owl-theme owl-loaded owl-drag" id="carouselList">
<div className="owl-stage-outer">
<div className="owl-stage" style={{width: '23500px', transform: 'translate3d(-6815px, 0px, 0px)', transition: '0.6s'}}><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item active" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item active" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div>
<div className="owl-item cloned active" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned active" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-calendar"></i>
</div>
<p className="info-box--title">経済カレンダー</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/calendar">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-gift"></i>
</div>
<p className="info-box--title">ボーナス最高額は$5,000</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-user-upgrade"></i>
</div>
<p className="info-box--title">プロモーション＆ロイヤルティプログラム</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/promotions">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-zero-fees"></i>
</div>
<p className="info-box--title">手数料なし&amp;即入金</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/zero-fees">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-paper-pen"></i>
</div>
<p className="info-box--title">JPBlog</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/blog">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div><div className="owl-item cloned" style={{width: '235px'}}>
<div className="info-box">
<div className="info-box__above">
<div className="info-box__icon red">
<i className="xmFont fa-kit fa-xm-mt4"></i>
</div>
<p className="info-box--title">プラットフォームダウンロードセンター</p>
</div>
<div className="info-box__below">
<div className="info-box--link">
<a href="https://www.xmtrading.com/jp/platforms">
<p className="no_margin">詳細を読む</p>
</a>
</div>
</div>
</div>
</div></div>
</div>
<div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot active" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot" role="button"><span></span></button><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot" role="button"><span></span></button><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div><div className="owl-nav"><button className="owl-prev" role="presentation" type="button"></button><button className="owl-next" role="presentation" type="button"></button></div><div className="owl-dots"><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot active" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button><button className="owl-dot" role="button"><span></span></button></div></div>
</div>
</div>
</div>
</div>
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="">
<div className="notification-wrapper">
<div className="tabbable">
<div className="visible-xs">
<div className="border title-block-wrap">
                                            JP ブログ </div>
<div className="wrap-news">
<div className="news videos">
<div className="title">
<a href="https://www.xmtrading.com/jp/blog/?p=52226">
                デイリーコメント ― 米政府閉鎖で遅れたNFP発表を本日控え、米ドル上昇、円は下落            </a>
</div>
<p>• FOMC議事要旨で12月利下げ観測後退 • 市場の注目は、本日の9月米雇用統計へ • 早急な為替介入の可能性が低下し、円安進行 • [..]</p>
</div>
<div className="news videos">
<div className="title">
<a href="https://www.xmtrading.com/jp/blog/?p=52221">
                デイリーコメント – 本日のエヌビディア決算を前に警戒感、米ドルとゴールドは上昇            </a>
</div>
<p>• 米株価大暴落後、株価は一服、注目は本日のエヌビディア決算へ • ゴールドは堅調も、暗号資産は再び下落 • 本日のFOMC議事要旨の公表を控え、米ドルは1週間ぶりの高値 • 英CPIデータ発表 [..]</p>
</div>
</div>
<div className="line-link">
<a className="red view-all" href="https://www.xmtrading.com/jp/blog">
                全てのブログ投稿を見る            </a>
</div>
<div className="dis30"></div>
<div className="border title-block-wrap">
                                            最新のお知らせ </div>
<div className="wrap-news">
<div className="news">
<div className="internal-wrapper">
<div className="wrapper__top">
<div className="title">
<a className="lineh13" href="https://www.xmtrading.com/jp/trade-and-earn-up-to-25000-dollars-in-festive-bonuses-35760?category=notifications">
                        取引で最大$25,000*のクリスマス入金ボーナス獲得チャンス                    </a>
</div>
<p>一年で最も充実した報酬を手にする季節がやってきました！XMTrading15周年を記念したクリスマス入金ボーナスプロモーションに参加して、過去最大の入金ボーナスを獲得するチャンスです。 2025年11 [..]</p>
</div>
<div className="wrapper__bottom">
<a className="btn btn-solid btn-gray-o btn--custom" href="https://www.xmtrading.com/jp/trade-and-earn-up-to-25000-dollars-in-festive-bonuses-35760?category=notifications">
                    詳細を読む                </a>
</div>
</div>
</div>
<div className="news">
<div className="internal-wrapper">
<div className="wrapper__top">
<div className="title">
<a className="lineh13" href="https://www.xmtrading.com/jp/november-bank-holidays-notification-2025-35750?category=notifications">
                        重要なお知らせ – 11月の祝日                    </a>
</div>
<p> 11月の複数の祝日に伴い、2025年11月27日及び28日 は様々な金融商品の取引時間に影響がありますことをご案内申し上げます。 影響のある金融商品の詳細は、以下の早見表をご覧ください： 銘 [..]</p>
</div>
<div className="wrapper__bottom">
<a className="btn btn-solid btn-gray-o btn--custom" href="https://www.xmtrading.com/jp/november-bank-holidays-notification-2025-35750?category=notifications">
                    詳細を読む                </a>
</div>
</div>
</div>
<div className="news">
<div className="internal-wrapper">
<div className="wrapper__top">
<div className="title">
<a className="lineh13" href="https://www.xmtrading.com/jp/15-winners-scored-fifteen-thousand-dollars-in-prizes-and-more-35738?category=notifications">
                        15名の当選者様に、総額$15,000を超える豪華賞品が贈られました！                    </a>
</div>
<p>2025年10月21日をもちまして、Trade &amp; Winプロモーションは無事終了いたしました。たくさんのご参加、誠にありがとうございました。結果を発表させていただきます。 合計15名の幸運な [..]</p>
</div>
<div className="wrapper__bottom">
<a className="btn btn-solid btn-gray-o btn--custom" href="https://www.xmtrading.com/jp/15-winners-scored-fifteen-thousand-dollars-in-prizes-and-more-35738?category=notifications">
                    詳細を読む                </a>
</div>
</div>
</div>
</div>
<div className="line-link">
<a className="red view-all" href="https://www.xmtrading.com/jp/category/notifications">
                全てのお知らせを見る            </a>
</div>
</div>
<div className="visible-sm visible-md visible-lg">
<ul className="nav nav-tabs">
<li className="active title-block-wrap">
<a data-toggle="tab" href="#blog">
                JP ブログ            </a>
</li>
</ul>
<div className="tab-content">
<div className="tab-pane active" id="blog">
<div className="wrap-news">
<div className="news videos">
<div className="title">
<a href="https://www.xmtrading.com/jp/blog/?p=52226">
                デイリーコメント ― 米政府閉鎖で遅れたNFP発表を本日控え、米ドル上昇、円は下落            </a>
</div>
<p>• FOMC議事要旨で12月利下げ観測後退 • 市場の注目は、本日の9月米雇用統計へ • 早急な為替介入の可能性が低下し、円安進行 • [..]</p>
</div>
<div className="news videos">
<div className="title">
<a href="https://www.xmtrading.com/jp/blog/?p=52221">
                デイリーコメント – 本日のエヌビディア決算を前に警戒感、米ドルとゴールドは上昇            </a>
</div>
<p>• 米株価大暴落後、株価は一服、注目は本日のエヌビディア決算へ • ゴールドは堅調も、暗号資産は再び下落 • 本日のFOMC議事要旨の公表を控え、米ドルは1週間ぶりの高値 • 英CPIデータ発表 [..]</p>
</div>
</div>
<div className="line-link">
<a className="red view-all" href="https://www.xmtrading.com/jp/blog">
                        全てのブログ投稿を見る                    </a>
</div>
</div>
<div className="tab-pane" id="notifications">
<div className="wrap-news">
<div className="news">
<div className="internal-wrapper">
<div className="wrapper__top">
<div className="title">
<a className="lineh13" href="https://www.xmtrading.com/jp/trade-and-earn-up-to-25000-dollars-in-festive-bonuses-35760?category=notifications">
                        取引で最大$25,000*のクリスマス入金ボーナス獲得チャンス                    </a>
</div>
<p>一年で最も充実した報酬を手にする季節がやってきました！XMTrading15周年を記念したクリスマス入金ボーナスプロモーションに参加して、過去最大の入金ボーナスを獲得するチャンスです。 2025年11 [..]</p>
</div>
<div className="wrapper__bottom">
<a className="btn btn-solid btn-gray-o btn--custom" href="https://www.xmtrading.com/jp/trade-and-earn-up-to-25000-dollars-in-festive-bonuses-35760?category=notifications">
                    詳細を読む                </a>
</div>
</div>
</div>
<div className="news">
<div className="internal-wrapper">
<div className="wrapper__top">
<div className="title">
<a className="lineh13" href="https://www.xmtrading.com/jp/november-bank-holidays-notification-2025-35750?category=notifications">
                        重要なお知らせ – 11月の祝日                    </a>
</div>
<p> 11月の複数の祝日に伴い、2025年11月27日及び28日 は様々な金融商品の取引時間に影響がありますことをご案内申し上げます。 影響のある金融商品の詳細は、以下の早見表をご覧ください： 銘 [..]</p>
</div>
<div className="wrapper__bottom">
<a className="btn btn-solid btn-gray-o btn--custom" href="https://www.xmtrading.com/jp/november-bank-holidays-notification-2025-35750?category=notifications">
                    詳細を読む                </a>
</div>
</div>
</div>
<div className="news">
<div className="internal-wrapper">
<div className="wrapper__top">
<div className="title">
<a className="lineh13" href="https://www.xmtrading.com/jp/15-winners-scored-fifteen-thousand-dollars-in-prizes-and-more-35738?category=notifications">
                        15名の当選者様に、総額$15,000を超える豪華賞品が贈られました！                    </a>
</div>
<p>2025年10月21日をもちまして、Trade &amp; Winプロモーションは無事終了いたしました。たくさんのご参加、誠にありがとうございました。結果を発表させていただきます。 合計15名の幸運な [..]</p>
</div>
<div className="wrapper__bottom">
<a className="btn btn-solid btn-gray-o btn--custom" href="https://www.xmtrading.com/jp/15-winners-scored-fifteen-thousand-dollars-in-prizes-and-more-35738?category=notifications">
                    詳細を読む                </a>
</div>
</div>
</div>
</div>
<div className="line-link">
<a className="red view-all" href="https://www.xmtrading.com/jp/category/notifications">
                        全てのお知らせを見る                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="visible-xs visible-sm visible-md visible-lg platforms-wrapper">
<div className="dis45 visible-xs"></div>
<div className="dis65 visible-sm"></div>
<div className="dis80 visible-md visible-lg"></div>
<div className="container">
<h2 className="text-center no_margin section__main-title">
                        FX、ゴールド、原油はじめ多数の銘柄を取引 </h2>
<div className="dis45 visible-xs"></div>
<div className="dis35 visible-sm"></div>
<div className="dis50 visible-md visible-lg"></div>
<div className="row text-center">
<div className="col-sm-6">
<a className="btn btn-solid btn-dark btn-block" href="/download/xmtd-mt5">
                    MT5アプリをダウンロード                    <i aria-hidden="true" className="fa fa-download"></i>
</a>
</div>
<div className="dis10 visible-xs"></div>
<div className="col-sm-6">
<a className="btn btn-solid btn-black-o btn-block" href="/download/xmtd-mt4">
                    MT4アプリをダウンロード                    <i aria-hidden="true" className="fa fa-download"></i>
</a>
</div>
</div>
<div className="dis35 visible-xs"></div>
<div className="dis45 visible-sm"></div>
<div className="dis50 visible-md visible-lg"></div>
<div className="text-center">
<img alt="mt4 mt5 devices" className="img-responsive center-block visible-xs" src="https://cloud.xmtrading-cdn.com/static/xm/pages/homepage/MT4-MT5-hp-xs.png?v=2ef6e2a896b9727e1ac63b9aacb8e4d8" width="277"/>
<img alt="mt4 mt5 devices" className="img-responsive center-block visible-sm visible-md" src="https://cloud.xmtrading-cdn.com/static/xm/pages/homepage/MT4-MT5-hp-sm.png?v=5e17e19c79e48ecf029167a4f0661a93" width="451"/>
<img alt="mt4 mt5 devices" className="img-responsive center-block visible-lg" src="https://cloud.xmtrading-cdn.com/static/xm/pages/homepage/MT4-MT5-hp-sm.png?v=5e17e19c79e48ecf029167a4f0661a93" width="673"/>
</div>
</div>
</section>
<section className="visible-xs visible-sm visible-md visible-lg view-platforms">
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="view-platforms__wrapper">
<div className="view-platforms__content">
<h3>
                                        MT4口座またはMT5口座を開設し、あらゆる端末から取引可能 </h3>
<div className="dis25 visible-xs"></div>
<div className="dis15 visible-sm visible-md visible-lg"></div>
<a href="https://www.xmtrading.com/jp/platforms">すべてのプラットフォームを参照する</a> </div>
</div>
</div>
</div>
</div>
</section>
<section className="container hidden-xs hidden-sm symbols-table__wrapper">
<div className="row">
<div className="col-lg-3 col-md-4">
<div className="border title-block-wrap">KIWAMI極</div>
<table className="symbols-table">
<thead>
<tr>
<th>シンボル</th>
<th>売値</th>
<th>買値</th>
<th style={{textTransform: 'none'}}>スプレッド（ポイント）</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>EURUSD#</strong>
</td>
<td>1.15472</td>
<td>1.15482</td>
<td className="red"><strong>10.0</strong></td>
</tr>
<tr>
<td>
<strong>EURGBP#</strong>
</td>
<td>0.88173</td>
<td>0.88191</td>
<td className="red"><strong>18.0</strong></td>
</tr>
<tr>
<td>
<strong>USDJPY#</strong>
</td>
<td>156.762</td>
<td>156.775</td>
<td className="red"><strong>13.0</strong></td>
</tr>
<tr>
<td>
<strong>GBPUSD#</strong>
</td>
<td>1.30945</td>
<td>1.30957</td>
<td className="red"><strong>12.0</strong></td>
</tr>
<tr>
<td>
<strong>EURJPY#</strong>
</td>
<td>181.026</td>
<td>181.053</td>
<td className="red"><strong>27.0</strong></td>
</tr>
<tr>
<td>
<strong>NZDUSD#</strong>
</td>
<td>0.56047</td>
<td>0.56067</td>
<td className="red"><strong>20.0</strong></td>
</tr>
<tr>
<td>
<strong>AUDUSD#</strong>
</td>
<td>0.64480</td>
<td>0.64494</td>
<td className="red"><strong>14.0</strong></td>
</tr>
<tr>
<td>
<strong>GBPJPY#</strong>
</td>
<td>205.276</td>
<td>205.303</td>
<td className="red"><strong>27.0</strong></td>
</tr>
<tr>
<td>
<strong>GBPAUD#</strong>
</td>
<td>2.03044</td>
<td>2.03078</td>
<td className="red"><strong>34.0</strong></td>
</tr>
<tr>
<td>
<strong>AUDJPY#</strong>
</td>
<td>101.084</td>
<td>101.109</td>
<td className="red"><strong>25.0</strong></td>
</tr>
<tr>
<td>
<strong>CHFJPY#</strong>
</td>
<td>194.877</td>
<td>194.906</td>
<td className="red"><strong>29.0</strong></td>
</tr>
<tr>
<td>
<strong>USDCHF#</strong>
</td>
<td>0.80440</td>
<td>0.80454</td>
<td className="red"><strong>14.0</strong></td>
</tr>
<tr>
<td>
<strong>EURCHF#</strong>
</td>
<td>0.92884</td>
<td>0.92910</td>
<td className="red"><strong>26.0</strong></td>
</tr>
<tr>
<td>
<strong>GOLD#</strong>
</td>
<td>4042.32</td>
<td>4042.55</td>
<td className="red"><strong>23.0</strong></td>
</tr>
<tr>
<td>
<strong>SILVER#</strong>
</td>
<td>49.3890</td>
<td>49.4190</td>
<td className="red"><strong>30.0</strong></td>
</tr>
</tbody>
</table>
</div>
<div className="col-lg-6 col-md-4" id="dashboard-container">
<div className="border title-block-wrap">
                            XMTradingトレーダーダッシュボード </div>
<div id="dashboard-wrap">
<div>
<b>EURUSD</b>
<i className="green-bar-nbr">43.5</i>
<span className="color-bar green-bar" style={{width: '43.5%'}}></span>
<i className="red-bar-nbr">56.5</i>
<span className="color-bar red-bar" style={{width: '56.5%'}}></span>
</div>
<div>
<b>USDJPY</b>
<i className="green-bar-nbr">28.1</i>
<span className="color-bar green-bar" style={{width: '28.1%'}}></span>
<i className="red-bar-nbr">71.9</i>
<span className="color-bar red-bar" style={{width: '71.9%'}}></span>
</div>
<div>
<b>EURJPY</b>
<i className="green-bar-nbr">16.0</i>
<span className="color-bar green-bar" style={{width: '16%'}}></span>
<i className="red-bar-nbr">84.0</i>
<span className="color-bar red-bar" style={{width: '84%'}}></span>
</div>
<div>
<b>GBPJPY</b>
<i className="green-bar-nbr">25.9</i>
<span className="color-bar green-bar" style={{width: '25.9%'}}></span>
<i className="red-bar-nbr">74.1</i>
<span className="color-bar red-bar" style={{width: '74.1%'}}></span>
</div>
<div>
<b>EURGBP</b>
<i className="green-bar-nbr">14.5</i>
<span className="color-bar green-bar" style={{width: '14.5%'}}></span>
<i className="red-bar-nbr">85.5</i>
<span className="color-bar red-bar" style={{width: '85.5%'}}></span>
</div>
<div>
<b>GOLD</b>
<i className="green-bar-nbr">68.4</i>
<span className="color-bar green-bar" style={{width: '68.4%'}}></span>
<i className="red-bar-nbr">31.6</i>
<span className="color-bar red-bar" style={{width: '31.6%'}}></span>
</div>
<div>
<b>OIL</b>
<i className="green-bar-nbr">97.5</i>
<span className="color-bar green-bar" style={{width: '97.5%'}}></span>
<i className="red-bar-nbr">2.5</i>
<span className="color-bar red-bar" style={{width: '2.5%'}}></span>
</div>
<div>
<b>JP225</b>
<i className="green-bar-nbr">69.1</i>
<span className="color-bar green-bar" style={{width: '69.1%'}}></span>
<i className="red-bar-nbr">30.9</i>
<span className="color-bar red-bar" style={{width: '30.9%'}}></span>
</div>
<div>
<b>SILVER</b>
<i className="green-bar-nbr">88.2</i>
<span className="color-bar green-bar" style={{width: '88.2%'}}></span>
<i className="red-bar-nbr">11.8</i>
<span className="color-bar red-bar" style={{width: '11.8%'}}></span>
</div>
<div>
<b>GER40</b>
<i className="green-bar-nbr">80.7</i>
<span className="color-bar green-bar" style={{width: '80.7%'}}></span>
<i className="red-bar-nbr">19.3</i>
<span className="color-bar red-bar" style={{width: '19.3%'}}></span>
</div>
<div>
<b>US30</b>
<i className="green-bar-nbr">83.7</i>
<span className="color-bar green-bar" style={{width: '83.7%'}}></span>
<i className="red-bar-nbr">16.3</i>
<span className="color-bar red-bar" style={{width: '16.3%'}}></span>
</div>
<span className="indicator buy">買い</span>
<span className="indicator fifty">50%</span>
<span className="indicator sell">売り</span>
</div></div>
<div className="col-lg-3 col-md-4">
<div className="border title-block-wrap">Standard</div>
<table className="symbols-table">
<thead>
<tr>
<th>シンボル</th>
<th>売値</th>
<th>買値</th>
<th style={{textTransform: 'none'}}>スプレッド（ポイント）</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>EURUSD</strong>
</td>
<td>1.15467</td>
<td>1.15486</td>
<td className="red"><strong>19.0</strong></td>
</tr>
<tr>
<td>
<strong>EURGBP</strong>
</td>
<td>0.88171</td>
<td>0.88193</td>
<td className="red"><strong>22.0</strong></td>
</tr>
<tr>
<td>
<strong>USDJPY</strong>
</td>
<td>156.756</td>
<td>156.781</td>
<td className="red"><strong>25.0</strong></td>
</tr>
<tr>
<td>
<strong>EURJPY</strong>
</td>
<td>181.022</td>
<td>181.057</td>
<td className="red"><strong>35.0</strong></td>
</tr>
<tr>
<td>
<strong>NZDUSD</strong>
</td>
<td>0.56043</td>
<td>0.56071</td>
<td className="red"><strong>28.0</strong></td>
</tr>
<tr>
<td>
<strong>AUDUSD</strong>
</td>
<td>0.64475</td>
<td>0.64499</td>
<td className="red"><strong>24.0</strong></td>
</tr>
<tr>
<td>
<strong>GBPJPY</strong>
</td>
<td>205.271</td>
<td>205.307</td>
<td className="red"><strong>36.0</strong></td>
</tr>
<tr>
<td>
<strong>GOLD</strong>
</td>
<td>4042.19</td>
<td>4042.68</td>
<td className="red"><strong>49.0</strong></td>
</tr>
<tr>
<td>
<strong>SILVER</strong>
</td>
<td>49.3840</td>
<td>49.4240</td>
<td className="red"><strong>40.0</strong></td>
</tr>
<tr>
<td>
<strong>JP225 </strong>
</td>
<td>48574.0</td>
<td>48581.0</td>
<td className="red"><strong>7.0</strong></td>
</tr>
<tr>
<td>
<strong>EU50 </strong>
</td>
<td>5515.65</td>
<td>5517.45</td>
<td className="red"><strong>180.0</strong></td>
</tr>
<tr>
<td>
<strong>FRA40 </strong>
</td>
<td>7939.88</td>
<td>7941.78</td>
<td className="red"><strong>190.0</strong></td>
</tr>
<tr>
<td>
<strong>GER40 </strong>
</td>
<td>23103.66</td>
<td>23105.66</td>
<td className="red"><strong>200.0</strong></td>
</tr>
<tr>
<td>
<strong>UK100 </strong>
</td>
<td>9470.75</td>
<td>9472.55</td>
<td className="red"><strong>180.0</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<div className="why-wrapper">
<div className="container">
<div className="row text-center">
<div className="col-md-12">
<h2 className="section__main-title">XMTRADINGを選ぶ理由は？</h2>
</div>
</div>
<div className="row text-center">
<div className="col-md-12">
<div className="listing-grid listing-grid--why">
<div className="listing-grid__item">
<i className="list-item__icon red xmFont fa-kit fa-xm-displays"></i>
<p className="list-item__txt">10のプラットフォームから選択可能</p>
</div>
<div className="listing-grid__item">
<i className="list-item__icon red xmFont fa-kit fa-xm-arrows"></i>
<p className="list-item__txt">リクオートや約定拒否なし</p>
</div>
<div className="listing-grid__item">
<i className="list-item__icon red xmFont fa-kit fa-xm-support24-5"></i>
<p className="list-item__txt">24時間サポート</p>
</div>
<div className="listing-grid__item">
<i className="list-item__icon red xmFont fa-kit fa-xm-database-dollar"></i>
<p className="list-item__txt">マイナス残高リセット</p>
</div>
</div>
</div>
</div>
</div>
<div className="buttons-wrap">
<div className="container">
<div className="row text-center">
<div className="col-md-12 visible-xs">
<a className="btn btn-solid btn-red btn-block" href="https://www.xmtrading.com/goto/profile/jp">
<div>
                                        口座を開設する </div>
<i aria-hidden="true" className="fa fa-chevron-right hidden-xs hidden-sm"></i>
<small>
                            ライブ口座開設はこちら                       </small>
</a>
</div>
<div className="col-md-12 hidden-xs">
<a className="btn btn-solid btn-red btn-block" href="/xm-cadastro">
<div className="">
                                        口座を開設する </div>
<small className="">
                            ライブ口座開設はこちら                        </small>
</a>
</div>
</div>
</div>
</div>
</div>
<footer className="">
<div className="container footer-partners">
<div className="footer-partners__wrapper hidden-xs hidden-sm">
<div className="footer-partners__logos">
<div className="footer-partners__logo-item">
<img alt="metaquotes" height="26" src="https://cloud.xmtrading-cdn.com/static/xm/common/logos/metaquotes.webp" width="136"/>
</div>
<div className="footer-partners__logo-item">
<img alt="verisign" height="38" src="https://cloud.xmtrading-cdn.com/static/xm/common/logos/verisign.webp" width="131"/>
</div>
<div className="footer-partners__logo-item">
<img alt="unicef" height="40" src="https://cloud.xmtrading-cdn.com/static/xm/common/logos/unicef-cfc.webp" width="110"/>
</div>
<div className="footer-partners__logo-item">
<img alt="rmhc" height="45" src="https://cloud.xmtrading-cdn.com/static/xm/common/logos/Ronald_Mcdonald.webp" width="117"/>
</div>
</div>
<div className="footer-partners__social">
<div className="social-icons__svg JP">
<span>フォロー：</span>
<a className="facebook__svg" href="https://www.xmtrading.com/goto/facebook" rel="nofollow noopener noreferrer" target="_blank">
</a>
<a className="youtube__svg" href="https://www.xmtrading.com/goto/youtube" rel="nofollow noopener noreferrer" target="_blank">
</a>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12 top20 bottom20">
<p className="">Tradexfin Limitedは、証券ディーラーライセンス番号SD010の下、セーシェル金融庁（FSA）により規制されています。 <span className="case-breaker"> | </span> <a href="https://www.xmtrading.com/jp/privacy-policy">個人情報保護方針</a> | <a href="https://www.xmtrading.com/jp/cookie-policy">クッキーに関する方針</a>                                | <a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/Tradexfin-Client-Agreement-Terms-and-Conditions-of-Business-c.pdf?v=a2c72420aa61a4626fb5d09a033eda67" target="_blank">契約条件</a>Fintrade Limitedは、証券ディーラーライセンス番号GB20025835の下、モーリシャス金融サービス委員会（FSC）より、規制されています。
                                <span className="case-breaker"> </span> | <a href="https://www.xmtrading.com/jp/privacy-policy">個人情報保護方針</a> | <a href="https://www.xmtrading.com/jp/cookie-policy">クッキーに関する方針</a> | <a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/Fintrade-Client-Agreement-TermsandConditions-of-Business-c.pdf?v=05b49d46381caa83c13e8ee97a62ac4e">契約条件</a></p>
<div className="dis25"></div>
<p className="">TPS Management Limitedの所在地は、Steliou Mavrommati 80B, Agios Pavlos, 2364, Nicosia, Cyprusです。 TPS Management LimitedはTradexfin Limitedが完全に所有しています。</p>
<p className="" id="risk-warning">
                                 FXなどデリバティブ取引には投資元金を失う非常に高いリスクが伴います。当社Tradexfinの<a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/XMTD-Risk-Disclosures-for-Financial-Instruments.pdf?v=6c77851e690e021021d5fab19a40ffbd" target="_blank">リスク開示</a>およびFintradeの<a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/Fintrade-Risk-Disclosures-for-Financial-Instruments.pdf?v=717b354c35dd401abb5718d9a309aa21" target="_blank">リスク開示</a>をお読みの上、十分にご理解ください。
                                </p>
<p className=""> 当社のオンライン取引機能およびサービスの利用は、金融市場における取引への勧誘でも、取引を行うことを提案するものでもありません。居住国において金融契約の取引がいかなる法律、規制、指令にも違反しないことを確認することは、お客様ご自身の責任となります。</p>
<p>以下の国（これらに限定されない）の国民または居住者である個人に対し、当社のサービスへのアクセスが制限される場合があります：</p>
<p>アルバニア、バハマ、バルバドス、ボツワナ、カンボジア、ガーナ、ジャマイカ、モーリシャス、ミャンマー、ニカラグア、パキスタン、パナマ、シリア、ウガンダ、イエメン、ジンバブエ、フィリピン、トルコ、ヨルダン、アフガニスタン、アンギラ、バヌアツ。</p>
<p>弊社は、アメリカ合衆国、カナダ、EU諸国、イラン、北朝鮮、ベリーズの市民にはサービスを提供していません。</p>
<p>お客様は、18歳もしくは自国で定められる法定年齢である必要がございます。口座を開設いただいた場合、お客様はXMTradingによる勧誘なく、ご自身の意思でご登録されたものとみなします。</p>
</div>
</div>
</div>
                ' </footer>
</div>
</div>
<div aria-labelledby="cookieModal" className="modal fade cookie-modal js-cookie-popup-loaded" id="cookieModal" role="dialog" style={{display: 'none'}} tabindex="-1">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="cookie-modal__defaultBlock" style={{display: 'none'}}>
<div className="modal-header">
<div className="dis10"></div>
<img alt="XMTrading Logo" className="hidden-xs xmtrading-img" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/XMTrading_15Years_Logo/XMTrading-15Years-logo-black.svg?v=7be134f6cd6fe35ae3f6985894fede9d" width="160"/>
<img alt="XMTrading Logo" className="visible-xs xmtrading-img" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/XMTrading_15Years_Logo/XMTrading-15Years-logo-black.svg?v=7be134f6cd6fe35ae3f6985894fede9d" width="160"/>
<div className="dis20"></div>
<h4>お客様の個人情報を大切にします</h4>
<div className="dis25"></div>
</div>
<div className="modal-body">
                        弊社は、最高のブラウジング体験を提供するためにクッキーを使用しています。ログインセッションのような重要な機能に必要なものもあれば、よりお客様のニーズに合ったコンテンツやマーケティングを提供するために必要なものもあります。すべてのクッキーを許可することにより、お客様の体験をさらに向上させることができます。これらの中には、第三者のクッキーが含まれている可能性がありますので、ご留意ください。以下のボタンをクリックすると、クッキーの設定を変更することができます。 詳細は、弊社の
                        <a href="https://www.xmtrading.com/jp/cookie-policy">クッキーに関する方針</a>をご覧ください。 </div>
<div className="modal-footer">
<div className="dis30"></div>
<div className="row">
<div className="col-sm-5">
<button className="btn btn-block btn-gray-o btn-solid gtm-openCookieSettings" id="js-changeModalSettings">設定を変更する</button>
</div>
<div className="dis10 visible-xs"></div>
<div className="col-sm-5">
<button aria-label="Close" className="btn btn-block btn-red btn-solid js-acceptDefaultCookie gtm-acceptDefaultCookieFirstVisit" data-dismiss="modal">全てを許可する</button>
</div>
</div>
<div className="dis40"></div>
</div>
</div>
<div className="cookie-modal__settingBlock" style={{}}>
<div className="modal-header">
<i className="xmFont fa-kit fa-xm-check-shield red xmf-sm"></i>
<h4>お客様のクッキーの設定</h4>
</div>
<div className="modal-body">
<div>

<ul className="cookie-modalTabs" role="tablist">
<li className="active" role="presentation"><a aria-controls="whatAreCookies" data-toggle="tab" href="#whatAreCookies" role="tab">クッキーとは何ですか？</a>
</li>
<li role="presentation"><a aria-controls="whyCookies" data-toggle="tab" href="#whyCookies" role="tab">クッキーは何の役に立つのですか？</a>
</li>
<li role="presentation"><a aria-controls="changeSettings" className="gtm-showCookieSettingsTab" data-toggle="tab" href="#changeSettings" role="tab">設定を変更する</a>
</li>
</ul>

<div className="tab-content">
<div className="tab-pane active" id="whatAreCookies" role="tabpanel">
<div className="dis25"></div>
<p><strong>クッキーとは何ですか？</strong></p>
<p>クッキーは小容量のデータファイルです。お客様がウェブサイトを訪問すると、そのウェブサイトからお客様のパソコンにクッキーが送信されます。お客様のパソコンはお客様のウェブブラウザ内に位置するファイルにそれを保管します。</p>
<p>クッキーはお客様のパソコンにウイルスやマルウェアを送付するものではありません。クッキー内のデータは送受信により変更されるものではありませんので、お客様のパソコンの機能に影響を及ぼすものではなく、むしろログと似た働きをし（ユーザーアクティブティを記録し、処理状況などの情報を保存します）、お客様がウェブサイトを訪問する度に更新されます。</p>
<p>弊社はクッキーにアクセスすることにより、弊社ウェブサイトによって送信されたお客様に関する情報を取得する場合がございます。異なるタイプのクッキーにより、異なるアクティビティが記録されます。例えば、セッションクッキーはユーザが自主的にウェブサイト間を移動している場合にのみ利用されます。ウェブサイトを離れると、セッションクッキーは消えます。</p>
<div className="dis15"></div>
<div className="row text-center">
<div className="col-md-6">
<button aria-label="Close" className="btn btn-red btn-solid btn-block js-acceptDefaultCookie gtm-acceptDefaultCookiesCloseModal" data-dismiss="modal">全てのクッキーを有効にしてページを閉じる</button>
</div>
</div>
</div>
<div className="tab-pane" id="whyCookies" role="tabpanel">
<div className="dis25"></div>
<p><strong>クッキーは何の役に立つのですか？</strong></p>
<p>弊社では、訪問者が弊社ウェブサイトを使用する方法を分析し、弊社ウェブサイトのパフォーマンスと機能を追跡、向上させるためファンクションクッキーを使用します。こちらにより、発生する可能性のある問題を迅速に特定、修正し、高品質な顧客体験を提供することができます。たとえば、どのウェブサイトが最も人気があるか、どのウェブサイトのページ間のリンク方法が最も効果的であるかを追跡するためにクッキーを使用する場合があります。後者では特に、お客様が他のウェブサイトからの紹介されているかを追跡し、今後の広告キャンペーンに役立てることができます。</p>
<p>クッキーのもう一つの用途は、セッションにログを保管することであり、お客様が資金を入金するために会員ページにログインすると、「セッションクッキー 」が設定され、ウェブサイトがお客様のログイン状態を記憶します。ウェブサイトが本クッキーを設定していない場合は、お客様が資金入金プロセスを進めるにしたがって新しいページに移動する度にログインとパスワードを求められます。</p>
<p>さらに、ファンクションクッキーを例にとりますと、こちらは弊社がお客様の嗜好を記憶し、お客様をユーザーとして識別するために使用され、お客様の情報の安全性を高め、より確実かつ効率的に動作することを強化します。具体的には、クッキーを使用すると、取引プラットフォームにアクセスするたびにユーザー名を入力する手間が省け、ログイン時に表示したい言語などの設定を記憶させておくことができます。</p>
<p><strong>以下は、クッキーが弊社に提供する一部の機能の概要です：</strong></p>
<ul className="checks top15">
<li>お客様の個人情報を確認し、お客様のアクセス元の国を特定する</li>
<li>ブラウザ種類と端末をチェックする</li>
<li>ユーザーの参照元となったサイトを追跡する</li>
</ul>
<p>本ウェブサイトは、Google, Inc. 社（「Google」）が提供するウェブ分析サービスのGoogle アナリティクスを使用しています。Google アナリティクスは、お客様のコンピュータに保存されている分析クッキーを使用してユーザーのウェブサイトの利用を分析します。クッキーによって生成されたお客様のウェブサイトの利用に関する情報（お客様のIPアドレスを含む）は、Googleによってそのサーバーに送信され、保存される場合があります。Google
                                        はこの情報を使用してウェブサイトの利用状況を評価し、ウェブサイトの活動に関するレポートを編集し、ウェブサイトの活動やインターネットの利用に関連するその他のサービスを提供する場合があります。また、Google は法律によってこちらを行うことが必要な場合には本情報を第三者に転送する場合があり、こちらには当該第三者がGoogle に代わって情報を処理する場合も該当します。Googleは、お客様の IP アドレスを他のデータと関連付けることはありません。本ウェブサイトを使用することにより、お客様は、Googleにお客様に関する情報を上記に規定された方法および目的にて処理する許可を与えます。</p>
<div className="dis15"></div>
<div className="row text-center">
<div className="col-md-6">
<button aria-label="Close" className="btn btn-red btn-solid btn-block js-acceptDefaultCookie gtm-acceptDefaultCookiesCloseModal" data-dismiss="modal">全てのクッキーを有効にしてページを閉じる</button>
</div>
</div>
</div>
<div className="tab-pane" id="changeSettings" role="tabpanel">
<div className="dis25"></div>
<p><strong>設定を変更する</strong></p>
<p>ご利用の端末に保管したいクッキーの種類を選択してください。</p>
<div className="dis5"></div>
<form action="" className="js-cookieCheckList">
<div className="form-group">
<div className="checkbox">
<input checked="" data-cookies-parts="functional" disabled="" id="functionalCookies" name="functionalCookies" type="checkbox" value="1"/>
<label htmlFor="functionalCookies"> <strong>ファンクショナルクッキー</strong><br/>これらのクッキーは弊社のウェブサイトを動作させるために必須です。これらのクッキーがなければ弊社ウェブサイトは正しく機能しません。これらはログイン情報として一時的に保存され、ブラウザが閉じられると期限切れとなります。</label>
</div>
</div>
<hr/>
<div className="form-group">
<div className="checkbox">
<input data-cookies-parts="analytical" id="analyticalCookies" name="analyticalCookies" type="checkbox" value="1"/>
<label htmlFor="analyticalCookies"> <strong>アナリティカルクッキー</strong><br/>分析クッキーによって提供される情報により、弊社は訪問者の行動のパターンを分析することができ、弊社ではその情報を用いて全体的な経験を向上させ、ウェブサイト上のメンテナンスを必要とする可能性がある部分を特定することができます。情報は匿名 であり（お客様を識別するために使用することはできず、お客様の氏名やメールアドレスなどの個人情報は含まれていません）、統計的な目的のためにのみ使用されます。行動クッキーは、分析クッキーと似ており、お客様がウェブサイトを訪問したことを記憶し、その情報を用いてお客様の興味に合わせたコンテンツを提供します。</label>
</div>
</div>
<hr/>
<div className="form-group">
<div className="checkbox">
<input data-cookies-parts="promotional" id="promotionalCookies" name="promotionalCookies" type="checkbox" value="1"/>
<label htmlFor="promotionalCookies"> <strong>プロモーショナルクッキー</strong><br/>これらのクッキーは、ウェブサイトの訪問者を追跡するために使用されます。その意図は、個々のユーザーに関連性が高く魅力的な広告を表示させ、発行者や第三者広告主にとってより価値のあるものとするためです。</label>
</div>
</div>
<hr/>
<div className="form-group">
<div className="checkbox">
<input data-cookies-parts="preferences" id="preferencesCookies" name="preferencesCookies" type="checkbox" value="1"/>
<label htmlFor="preferencesCookies"> <strong>プリファレンスクッキー</strong><br/>プリファレンスクッキーは、お客様の希望言語やお客様の居住地域など、ウェブサイトの動作または表示を左右する情報をウェブサイトが記憶することを可能にします。</label>
</div>
</div>
<div className="dis15"></div>
<div className="row text-center">
<div className="col-md-6">
<button aria-label="Close" className="btn btn-red btn-solid btn-block js-acceptDefaultCookie gtm-acceptDefaultCookiesCloseModal" data-dismiss="modal">全てのクッキーを有効にしてページを閉じる</button>
</div>
<div className="dis10 visible-xs visible-sm"></div>
<div className="col-md-6">
<button aria-label="Close" className="btn btn-default btn-solid btn-block js-saveCookie gtm-saveCookiesCloseModal" data-dismiss="modal">設定を保存してページを閉じる</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div className="dis30"></div>
</div>
<div className="modal-footer xmtrading-footer">
<img alt="XMTrading Logo" className="pull-right hidden-xs xmtrading-img" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/XMTrading_15Years_Logo/XMTrading-15Years-logo-black.svg?v=7be134f6cd6fe35ae3f6985894fede9d" width="160"/>
<img alt="XMTrading Logo" className="pull-right visible-xs xmtrading-img" src="https://cloud.xmtrading-cdn.com/static/newsletters/2025/XMTrading_15Years_Logo/XMTrading-15Years-logo-black.svg?v=7be134f6cd6fe35ae3f6985894fede9d" width="160"/>
</div>
</div>
</div>
</div>
</div>

<div className="clearfix"></div>
<div className="" id="js-cookieBarHeight" style={{height: '49.0799px', display: 'none'}}></div>
<div className="" id="cookies-block" style={{bottom: '63.0903px', zIndex: '601', display: 'none'}}>
<div className="container">
<div className="wrap">
<div className="text-wrap">
<p className="gtm-openCookieSettings">お客様に弊社ウェブサイトにおける最適な体験をご提供するべく、弊社ではクッキーを使用しております。 詳細を読むか、 <a className="inline-block js-showModalCookieSettings" href="#">クッキーの設定</a>を変更して下さい。</p>
<div className="dis10 visible-xs"></div>
</div>
<div className="btn-wrap">
<button className="btn btn-red btn-solid btn-block js-acceptDefaultCookie gtm-acceptDefaultCookieFromFooterBar" id="js-cookieBarCloseButton">全てのクッキーを有効にする</button>
</div>
</div>
</div>
</div>
<div className="clearfix"></div>
<div className="hidden-xs hidden-sm" id="js-riskMessageHeight" style={{height: '63.0903px'}}></div>
<div className="" id="risk-block" style={{}}>
<div className="wrap">
<button id="js-riskCloseButton">
<i aria-hidden="true" className="fa fa-times"></i>
</button>
<div className="text-wrap">
<p><i aria-hidden="true" className="fa fa-exclamation-triangle"></i>
<strong>リスク警告：</strong> 投資元本を失うリスクが伴います。レバレッジ商品は、全てのお客様に適しているわけではございません。Tradexfinの<a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/XMTD-Risk-Disclosures-for-Financial-Instruments.pdf?v=6c77851e690e021021d5fab19a40ffbd" target="_blank">リスク開示</a>およびFintradeの<a href="https://cloud.xmtrading-cdn.com/static/pdf/System-PDFs/Fintrade-Risk-Disclosures-for-Financial-Instruments.pdf?v=717b354c35dd401abb5718d9a309aa21" target="_blank">リスク開示</a>を熟読ください。 </p>
</div>
</div>
</div>

<style id="classic-theme-styles-inline-css" type="text/css">
        /*! This file is auto-generated */

        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }
    </style>
<style id="global-styles-inline-css" type="text/css">
        :root {
            --wp--preset--aspect-ratio--square: 1;
            --wp--preset--aspect-ratio--4-3: 4/3;
            --wp--preset--aspect-ratio--3-4: 3/4;
            --wp--preset--aspect-ratio--3-2: 3/2;
            --wp--preset--aspect-ratio--2-3: 2/3;
            --wp--preset--aspect-ratio--16-9: 16/9;
            --wp--preset--aspect-ratio--9-16: 9/16;
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        body .is-layout-flex {
            display: flex;
        }

        .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        .is-layout-flex> :is(*, div) {
            margin: 0;
        }

        body .is-layout-grid {
            display: grid;
        }

        .is-layout-grid> :is(*, div) {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :root :where(.wp-block-pullquote) {
            font-size: 1.5em;
            line-height: 1.6;
        }
    </style>
<link href="https://www.xmtrading.com/jp/wp-content/plugins/responsive-lightbox/assets/tosrus/jquery.tosrus.min.css?ver=2.5.0" id="responsive-lightbox-tosrus-css" media="all" rel="stylesheet" type="text/css"/>












<div>
</div>

<div hidden="" id="custom-livechat" style={{maxHeight: '904.91px'}}>
<div className="custom-livechat__header">
<button id="widget-back-button"><i aria-hidden="true" className="back-button fa fa-chevron-left"></i></button>
<h3 className="inline-block">XMTradingのライブチャット</h3>
<button className="text-gray pull-right" id="close-prechat-form"><i aria-hidden="true" className="fa fa-times"></i></button>
</div>
<div className="custom-livechat__body">
<div className="j-second-step" hidden="">
<p className="j-hide-if-logged-in">
                    お客様の連絡先情報をご入力ください。すでにXMTrading口座をお持ちの場合は、口座IDをご入力いただきますと、弊社のサポートチームが最善なサービスを提供させていただきます。 </p>
<ul className="nav nav-tabs j-hide-if-logged-in">
<li className="active"><a data-toggle="tab" href="#existing-member" role="tab">既存のお客様</a></li>
</ul>
<div className="tab-content">
<div className="tab-pane active" id="existing-member" role="tabpanel">
<form action="" id="pre-chat-form-member" method="post" novalidate="novalidate">
<div className="form-group" style={{display: 'none'}}>
<input name="pre-chat-form-value" type="hidden" value="1"/>
</div>
<div className="form-group" style={{display: 'none'}}>
<input className="j-user-id ignore-validation" id="user_id" name="user_id" type="hidden" value="0"/>
</div>
<div className="form-group has-feedback">
<label htmlFor="lc_first_name"><span className="red">*</span> 下のお名前 （例）Taro</label>
<input className="form-control j-first-name" data-cip-id="first_name" id="lc_first_name" name="first_name" type="text" value=""/>
</div>
<div className="form-group has-feedback">
<label htmlFor="lc_last_name"><span className="red">*</span> 姓 （例）Yamada</label>
<input className="form-control j-last-name" data-cip-id="last_name" id="lc_last_name" name="last_name" type="text" value=""/>
</div>
<div className="form-group has-feedback j-div-email">
<label htmlFor="lc_email_member"><span className="red">*</span> Eメール</label>
<input className="form-control j-email" id="lc_email_member" name="email" type="text" value=""/>
</div>
<div className="form-group has-feedback j-div-language">
<label htmlFor="lc_preferred_language">
<span className="red">*</span> 言語                                <i aria-hidden="true" className="fa fa-spinner fa-spin"></i>
</label>
<select className="form-control j-preferred-language" id="lc_preferred_language" name="preferred_language"></select>
</div>
<div className="dis10"></div>
<div className="text-center">
<button className="btn btn-solid btn-red btn-block" data-text="チャットを開始する" data-type="ajax" id="start-chat-member">
                                チャットを開始する                            </button>
</div>
</form>
</div>
<div className="tab-pane" id="visitor-user" role="tabpanel">
<form id="pre-chat-form" novalidate="novalidate">
<div className="form-group has-feedback j-hide-if-logged-in j-show-first-name">
<label htmlFor="lc_first_name"><span className="red">*</span> 下のお名前 （例）Taro</label>
<input className="form-control j-first-name" data-cip-id="first_name" id="lc_first_name" name="first_name" type="text" value=""/>
</div>
<div className="form-group has-feedback j-hide-if-logged-in j-show-last-name">
<label htmlFor="lc_last_name"><span className="red">*</span> 姓 （例）Yamada</label>
<input className="form-control j-last-name" data-cip-id="last_name" id="lc_last_name" name="last_name" type="text" value=""/>
</div>
<div className="form-group has-feedback j-hide-if-logged-in">
<label htmlFor="email_visitor"><span className="red">*</span> Eメール </label>
<input className="form-control j-email" id="email_visitor" name="email" type="text" value=""/>
</div>
<div className="form-group has-feedback">
<label htmlFor="lc_preferred_language_visitor">
<span className="red">*</span> 言語                                <i aria-hidden="true" className="fa fa-spinner fa-spin"></i>
</label>
<select className="form-control j-preferred-language" id="lc_preferred_language_visitor" name="preferred_language"></select>
</div>
<div className="dis10"></div>
<div className="text-center">
<button className="btn btn-solid btn-red btn-block" data-text="チャットを開始する" data-type="ajax" id="start-chat">
                                チャットを開始する                            </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>






<link href="/5i0VI/tZ1K/4-FI/gkLu/9rk/wLaG/dH4kX10B/dwdnd/BYUIU5X" rel="stylesheet" type="text/css"/>

<div id="sec-overlay" style={{display: 'none'}}>
<div id="sec-container"></div>
</div>

    </>
  );
}
