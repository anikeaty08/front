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


(function() {
let selectedElement = null;
// Add selection styles
const style = document.createElement('style');
style.textContent = `
body {
cursor: crosshair !important;
}
[data-element-path]:hover {
cursor: pointer !important;
}
.element-selection-indicator {
position: fixed;
top: 10px;
right: 10px;
background: rgba(59, 130, 246, 0.9);
color: white;
padding: 4px 8px;
border-radius: 4px;
font-size: 11px;
font-family: monospace;
z-index: 10000;
pointer-events: none;
animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
from { opacity: 0; transform: translateY(-5px); }
to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);
// Generate XPath for an element
function getElementXPath(element) {
if (!element) return '';
if (element.tagName === 'HTML') return '/html';
if (element.tagName === 'BODY') return '/html/body';
let path = '';
let current = element;
while (current && current.nodeType === Node.ELEMENT_NODE && current.tagName !== 'HTML') {
let index = 1;
let sibling = current.previousElementSibling;
while (sibling) {
if (sibling.tagName === current.tagName) {
index++;
}
sibling = sibling.previousElementSibling;
}
const tagName = current.tagName.toLowerCase();
path = `/${tagName}[${index}]` + path;
current = current.parentElement;
}
return '/html' + path;
}
// Generate CSS selector path for better identification
function getElementSelector(element) {
if (!element) return '';
const parts = [];
let current = element;
while (current && current.nodeType === Node.ELEMENT_NODE && current.tagName !== 'HTML') {
let selector = current.tagName.toLowerCase();
// Add ID if present
if (current.id) {
selector += '#' + current.id;
parts.unshift(selector);
break; // ID is unique, we can stop here
}
// Add classes if present
if (current.className && typeof current.className === 'string') {
const classes = current.className.trim().split(/\s+/).filter(cls =>
cls && !cls.includes('element-selection') // Exclude our own classes
);
if (classes.length > 0) {
selector += '.' + classes.join('.');
}
}
// Add nth-child index for specificity
let index = 1;
let sibling = current.previousElementSibling;
while (sibling) {
if (sibling.tagName === current.tagName) {
index++;
}
sibling = sibling.previousElementSibling;
}
// Only add nth-child if there are multiple siblings of same type
const siblings = current.parentElement ?
Array.from(current.parentElement.children).filter(child => child.tagName === current.tagName) : [];
if (siblings.length > 1) {
selector += `:nth-child(${index})`;
}
parts.unshift(selector);
current = current.parentElement;
}
return parts.join(' > ');
}
// Generate element fingerprint with multiple identifiers
function getElementFingerprint(element) {
const xpath = getElementXPath(element);
const selector = getElementSelector(element);
const textContent = element.textContent ? element.textContent.trim().substring(0, 50) : '';
const attributes = {};
// Collect important attributes
for (const attr of element.attributes) {
if (['id', 'class', 'data-*', 'href', 'src', 'alt', 'title'].some(pattern =>
attr.name === pattern || (pattern.includes('*') && attr.name.startsWith(pattern.replace('*', '')))
)) {
attributes[attr.name] = attr.value;
}
}
return {
xpath,
selector,
tagName: element.tagName.toLowerCase(),
attributes,
textContent,
innerHTML: element.innerHTML.substring(0, 100), // First 100 chars for matching
};
}
function addDataAttributes() {
function traverseNode(node) {
if (node.nodeType === Node.ELEMENT_NODE) {
// Skip script tags
if (node.tagName === 'SCRIPT' ||
node.tagName === 'STYLE' ||
node.tagName === 'LINK') return;
const fingerprint = getElementFingerprint(node);
// Store the fingerprint as data attribute
node.setAttribute('data-element-path', JSON.stringify(fingerprint));
// Add click event listener
node.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
// Remove previous selection highlight
if (selectedElement) {
selectedElement.style.outline = '';
selectedElement.style.outlineOffset = '';
}
// Highlight selected element
this.style.outline = '2px solid #3b82f6';
this.style.outlineOffset = '2px';
selectedElement = this;
// Send comprehensive element info to parent
const elementInfo = {
type: 'ELEMENT_SELECTED',
fingerprint: fingerprint,
// Legacy fields for backward compatibility
tagName: fingerprint.tagName,
className: fingerprint.attributes.class || '',
id: fingerprint.attributes.id || '',
textContent: fingerprint.textContent
};
window.parent.postMessage(elementInfo, '*');
});
// Add hover effect
node.addEventListener('mouseenter', function() {
if (this !== selectedElement) {
this.style.outline = '1px dashed #6b7280';
this.style.outlineOffset = '1px';
}
});
node.addEventListener('mouseleave', function() {
if (this !== selectedElement) {
this.style.outline = '';
this.style.outlineOffset = '';
}
});
}
// Traverse child nodes
for (let child = node.firstChild; child; child = child.nextSibling) {
traverseNode(child);
}
}
// Start traversal from body
if (document.body) {
traverseNode(document.body);
}
}
// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
@keyframes fadeOut {
from { opacity: 1; transform: translateY(0); }
to { opacity: 0; transform: translateY(-5px); }
}
`;
document.head.appendChild(fadeOutStyle);
// Add attributes when DOM is ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', addDataAttributes);
} else {
addDataAttributes();
}
// Listen for messages from CodeMode to scroll to elements
window.addEventListener('message', function(event) {
if (event.data?.type === 'SCROLL_TO_ELEMENT') {
const { fingerprint } = event.data;
if (!fingerprint) return;
// Find the element matching the fingerprint
const elements = document.querySelectorAll('[data-element-path]');
let bestMatch = null;
let bestScore = 0;
for (const element of elements) {
try {
const elementFingerprint = JSON.parse(element.getAttribute('data-element-path') || '{}');
// Score the match
let score = 0;
// ID match is highest priority
if (fingerprint.attributes?.id && elementFingerprint.attributes?.id === fingerprint.attributes.id) {
score += 100;
}
// Tag name match
if (fingerprint.tagName === elementFingerprint.tagName) {
score += 20;
}
// Class match
if (fingerprint.attributes?.class && elementFingerprint.attributes?.class) {
const classes1 = fingerprint.attributes.class.split(/\s+/).filter(Boolean);
const classes2 = elementFingerprint.attributes.class.split(/\s+/).filter(Boolean);
const matchingClasses = classes1.filter(c => classes2.includes(c));
if (matchingClasses.length > 0) {
score += (matchingClasses.length / Math.max(classes1.length, classes2.length)) * 30;
}
}
// Text content match
if (fingerprint.textContent && elementFingerprint.textContent) {
if (fingerprint.textContent === elementFingerprint.textContent) {
score += 25;
} else if (elementFingerprint.textContent.includes(fingerprint.textContent)) {
score += 15;
}
}
// XPath match
if (fingerprint.xpath && elementFingerprint.xpath === fingerprint.xpath) {
score += 30;
}
if (score > bestScore) {
bestScore = score;
bestMatch = element;
}
} catch (e) {
// Skip invalid fingerprints
}
}
// Scroll to and highlight the best match
if (bestMatch && bestScore > 30) {
// Remove previous selection highlight
if (selectedElement) {
selectedElement.style.outline = '';
selectedElement.style.outlineOffset = '';
}
// Scroll to element with smooth behavior
bestMatch.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
// Highlight the element
bestMatch.style.outline = '2px solid #3b82f6';
bestMatch.style.outlineOffset = '2px';
selectedElement = bestMatch;
// Add a pulsing animation
const pulseKeyframes = [
{ outline: '2px solid #3b82f6', outlineOffset: '2px' },
{ outline: '3px solid #60a5fa', outlineOffset: '4px' },
{ outline: '2px solid #3b82f6', outlineOffset: '2px' }
];
bestMatch.animate(pulseKeyframes, { duration: 600, easing: 'ease-in-out' });
// Remove highlight after 3 seconds
setTimeout(() => {
if (selectedElement === bestMatch) {
bestMatch.style.outline = '';
bestMatch.style.outlineOffset = '';
selectedElement = null;
}
}, 3000);
}
}
});
})();



(function() {
// Store original methods to restore later
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
const originalGetContext = HTMLCanvasElement.prototype.getContext;
// Disable requestAnimationFrame during loading
window.requestAnimationFrame = function(callback) {
// Return a fake ID and don't execute the callback
return -1;
};
// Disable setTimeout for short intervals (likely animations)
window.setTimeout = function(callback, delay) {
// Only disable short timeouts that are likely animations
if (delay < 100) {
return -1;
}
return originalSetTimeout.apply(this, arguments);
};
// Disable setInterval (likely animations)
window.setInterval = function(callback, delay) {
// Disable all intervals during loading
return -1;
};
// Disable canvas rendering
HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
const context = originalGetContext.call(this, contextType, contextAttributes);
if (!context) return context;
// For 2D context, override drawing methods
if (contextType === '2d') {
const originalMethods = {};
const drawingMethods = [
'clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText',
'drawImage', 'putImageData', 'fill', 'stroke', 'arc', 'arcTo',
'beginPath', 'closePath', 'lineTo', 'moveTo', 'quadraticCurveTo',
'bezierCurveTo', 'rect', 'ellipse'
];
drawingMethods.forEach(method => {
if (typeof context[method] === 'function') {
originalMethods[method] = context[method];
context[method] = function() {
// Do nothing - disable drawing during loading
return this;
};
}
});
// Store original methods for potential restoration
context._originalMethods = originalMethods;
}
// For WebGL context, override key methods
else if (contextType === 'webgl' || contextType === 'webgl2' || contextType === 'experimental-webgl') {
const originalMethods = {};
const webglMethods = [
'clear', 'drawArrays', 'drawElements', 'useProgram', 'bindBuffer',
'bindTexture', 'bindFramebuffer', 'viewport', 'enable', 'disable'
];
webglMethods.forEach(method => {
if (typeof context[method] === 'function') {
originalMethods[method] = context[method];
context[method] = function() {
// Do nothing - disable WebGL operations during loading
return this;
};
}
});
// Store original methods for potential restoration
context._originalMethods = originalMethods;
}
return context;
};
// Disable Three.js specific functionality
const disableThreeJS = function() {
// Wait for Three.js to potentially load
setTimeout(() => {
if (typeof THREE !== 'undefined') {
// Override Three.js WebGLRenderer render method
if (THREE.WebGLRenderer) {
const originalRender = THREE.WebGLRenderer.prototype.render;
THREE.WebGLRenderer.prototype.render = function() {
// Do nothing - disable rendering during loading
return this;
};
THREE.WebGLRenderer.prototype._originalRender = originalRender;
}
// Override Animation Mixer
if (THREE.AnimationMixer) {
const originalUpdate = THREE.AnimationMixer.prototype.update;
THREE.AnimationMixer.prototype.update = function() {
// Do nothing - disable animations during loading
return this;
};
THREE.AnimationMixer.prototype._originalUpdate = originalUpdate;
}
}
}, 100);
};
// Apply Three.js disabling
disableThreeJS();
// Disable Spline functionality during loading
const disableSpline = function() {
// Hide any existing spline viewers immediately
const hideSplineElements = () => {
const splineSelectors = [
'spline-viewer',
'[data-spline]',
'iframe[src*="spline.design"]',
'iframe[src*="my.spline.design"]',
'embed[src*="spline.design"]',
'embed[src*="my.spline.design"]',
'object[data*="spline.design"]',
'object[data*="my.spline.design"]'
];
splineSelectors.forEach(selector => {
const elements = document.querySelectorAll(selector);
elements.forEach(el => {
el.style.display = 'none';
el.style.visibility = 'hidden';
});
});
};
// Hide existing elements immediately
hideSplineElements();
// Monitor for new spline elements being added
const observer = new MutationObserver(hideSplineElements);
// Ensure document.body is available before observing
if (document.body instanceof Node) {
observer.observe(document.body, {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ['src', 'data']
});
}
// Disable Spline runtime if it exists
if (typeof window.Spline !== 'undefined') {
const originalSpline = window.Spline;
window.Spline = function() {
// Do nothing - disable Spline initialization during loading
return {
load: () => Promise.resolve(),
setSize: () => {},
dispose: () => {},
play: () => {},
pause: () => {},
stop: () => {}
};
};
window.Spline._originalSpline = originalSpline;
}
// Prevent new Spline instances from being created
Object.defineProperty(window, 'Spline', {
set: function(value) {
// Store original but don't activate during loading
window._SplineOriginal = value;
},
get: function() {
// Return dummy implementation during loading
return function() {
return {
load: () => Promise.resolve(),
setSize: () => {},
dispose: () => {},
play: () => {},
pause: () => {},
stop: () => {}
};
};
},
configurable: true
});
};
// Apply Spline disabling
disableSpline();
// Store restoration function globally (though we don't restore in this loading context)
window._restoreCanvasAndAnimations = function() {
window.requestAnimationFrame = originalRequestAnimationFrame;
window.setTimeout = originalSetTimeout;
window.setInterval = originalSetInterval;
HTMLCanvasElement.prototype.getContext = originalGetContext;
// Restore Three.js if available
if (typeof THREE !== 'undefined') {
if (THREE.WebGLRenderer && THREE.WebGLRenderer.prototype._originalRender) {
THREE.WebGLRenderer.prototype.render = THREE.WebGLRenderer.prototype._originalRender;
}
if (THREE.AnimationMixer && THREE.AnimationMixer.prototype._originalUpdate) {
THREE.AnimationMixer.prototype.update = THREE.AnimationMixer.prototype._originalUpdate;
}
}
// Restore Spline if available
if (window._SplineOriginal) {
window.Spline = window._SplineOriginal;
} else if (window.Spline && window.Spline._originalSpline) {
window.Spline = window.Spline._originalSpline;
}
// Restore visibility of Spline elements
const splineSelectors = [
'spline-viewer',
'[data-spline]',
'iframe[src*="spline.design"]',
'iframe[src*="my.spline.design"]',
'embed[src*="spline.design"]',
'embed[src*="my.spline.design"]',
'object[data*="spline.design"]',
'object[data*="my.spline.design"]'
];
splineSelectors.forEach(selector => {
const elements = document.querySelectorAll(selector);
elements.forEach(el => {
el.style.display = '';
el.style.visibility = '';
});
});
};
})();



  !function(){
  if(!window.UnicornStudio){
    window.UnicornStudio={isInitialized:false};
    var i=document.createElement("script");
    i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js";
    i.onload=function(){
      window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=true)
    };
    (document.head || document.body).appendChild(i);
  }
}();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="qO2hJSXvjk0iEIVJ5nim" id="bg-unicorn"><a href="https://unicorn.studio?utm_source=public-url" style={{position: 'absolute', display: 'flex', bottom: '30px', left: '0px', width: '190px', margin: '0px auto', right: '0rem', padding: '10px', borderRadius: '6px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px', zIndex: '99999999', boxSizing: 'border-box'}} target="_blank"><img alt="Made with unicorn.studio" src="https://assets.unicorn.studio/media/made_in_us_small_web.svg" style={{width: '170px', height: 'auto'}}/></a></div>
<style>
  #bg-unicorn {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
</style>
</div>

<link 5"="" border-l="" border-white="" grid="" grid-cols-2="" h-full="" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;
                        serif: ['Newsreader', 'serif'],
                    },
                    colors: {
                        slate: {scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
        
        /* bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen        &lt;div className=" lg:grid-cols-6="" md:grid-cols-4="" w-full=""/>

<div className="relative h-full border-r border-white/5 hidden lg:block">
<span className="absolute bottom-8 left-4 text-xs font-mono text-slate-700">01</span>
</div>
<div className="relative h-full border-r border-white/5 hidden md:block">
<span className="absolute bottom-8 left-4 text-xs font-mono text-slate-700">02</span>
</div>
<div className="relative h-full border-r border-white/5">
<span className="absolute bottom-8 left-4 text-xs font-mono text-slate-700">03</span>
</div>
<div className="relative h-full border-r border-white/5"></div>
<div className="relative h-full border-r border-white/5 hidden md:block"></div>
<div className="relative h-full hidden lg:block"></div>

<nav className="relative z-50 w-full pt-6 md:pt-8" style={{}}>
<div className="max-w-7xl mx-auto px-6" style={{}}>
<div className="flex items-center justify-between h-14" style={{}}>

<div className="flex items-center gap-3">
<span className="flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--solar" data-icon="solar:infinity-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 8a5 5 0 1 0-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 1 1-3 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</span>
<span className="font-sans font-medium text-lg tracking-tighter text-white">AISupply</span>
</div>

<div className="hidden md:flex gap-8 pl-8 gap-x-8 gap-y-8 items-center" style={{}}>
<div className="w-px h-4 bg-white/20"></div>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#" style={{}}>About Us</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#" style={{}}>Products</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#" style={{}}>Our Ecosystem</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#" style={{}}>Contact</a>
</div>

<div className="flex items-center gap-4" style={{}}>
<button className="hidden sm:inline-flex bg-white/5 hover:bg-white/10 text-white text-sm font-medium px-5 py-2.5 rounded border border-white/10 transition-all" style={{}}>
                        Get started
                    </button>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--solar" data-icon="solar:hamburger-menu-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<main className="flex flex-col md:pt-36 md:pb-40 text-center max-w-7xl z-10 mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative items-center justify-center" style={{outline: 'rgb(59, 130, 246) solid 2px', outlineOffset: '2px'}}>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm mb-8 animate-fade-in-up" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-400 w-4 h-4 iconify--solar" data-icon="solar:stars-minimalistic-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" fill="currentColor" style={{}}></path><path d="M4.868 2.5c.03-.105.217-.106.248 0c.14.482.4 1.194.793 1.585c.393.39 1.108.646 1.59.783c.107.03.107.217.002.248c-.482.14-1.195.4-1.586.793c-.39.393-.645 1.108-.782 1.59c-.03.107-.218.107-.249.002c-.14-.482-.4-1.195-.793-1.586c-.393-.39-1.107-.645-1.59-.782c-.106-.03-.107-.218-.001-.249c.482-.14 1.194-.4 1.585-.793c.39-.393.646-1.107.783-1.59" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M19 3.25a.75.75 0 0 1 .75.75v.25H20a.75.75 0 0 1 0 1.5h-.25V6a.75.75 0 0 1-1.5 0v-.25H18a.75.75 0 0 1 0-1.5h.25V4a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path></svg>
<span className="text-sm font-medium text-blue-200 tracking-tight" style={{}}>Introducing AI Supply 2.0</span>
</div>

<h1 className="md:text-7xl lg:text-8xl bg-clip-text leading-[1.1] text-5xl font-medium text-transparent tracking-tight font-serif bg-gradient-to-b from-white via-white to-slate-400 max-w-4xl mr-auto mb-8 ml-auto" style={{}}>Building the Digital Infrastructure for African Business Growth</h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto mb-12 ml-auto" style={{}}>We empower SMEs and enterprises with an integrated ecosystem of automation, business intelligence, and AI—turning unstructured data into actionable growth.</p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" style={{}}>
<button className="sm:w-auto hover:bg-slate-200 transition-colors flex gap-2 text-base font-semibold text-slate-950 bg-white w-full rounded pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" style={{}}>Partner With Us</button>
<button className="sm:w-auto hover:bg-white/5 hover:border-white/20 transition-all flex gap-2 text-base font-medium text-white bg-slate-900/50 w-full border-white/10 border rounded pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center" style={{}}>View Our Ecosystem</button>
</div>
</main>

<section className="relative z-20 w-full border-t border-white/5 bg-slate-950/50 backdrop-blur-sm" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-12" style={{}}>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500" style={{}}>

<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-white w-6 h-6 group-hover:text-blue-400 transition-colors iconify--solar" data-icon="solar:code-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
<span className="text-lg font-semibold tracking-tight text-white">DevCore</span>
</div>

<div className="flex items-center gap-2 group cursor-default" style={{}}>
<svg aria-hidden="true" className="iconify text-white w-6 h-6 group-hover:text-emerald-400 transition-colors iconify--solar" data-icon="solar:rocket-2-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m15.502 14.367l5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82v-.49c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19s-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873c-.064.16-.097.317-.097.483c0 .69.557 1.245 1.671 2.356l.15.149l1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785l.119.117c1.114 1.11 1.67 1.666 2.362 1.666q.228 0 .447-.081c.519-.191 1.048-.72 1.916-1.585m2.363-5.888c-.652.65-1.71.65-2.363 0a1.66 1.66 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356M2.774 12.481a.76.76 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48a.34.34 0 0 0 .483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0a1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0m4.523 4.215c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.76.76 0 0 1 1.073.012m4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0a1.857 1.857 0 0 1 0-2.629l1.713-1.71a.76.76 0 0 1 1.073.001" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M10.846 5.41L8.658 7.59c-.402.401-.77.769-1.062 1.101a5 5 0 0 0-.532.706l-.022-.021l-.08-.08a4.2 4.2 0 0 0-1.319-.865l-.106-.042l-.325-.13a.658.658 0 0 1-.223-1.077c.963-.96 2.12-2.114 2.679-2.346a2.9 2.9 0 0 1 1.537-.197c.47.07.915.311 1.641.77m3.736 11.484c.176.18.293.306.399.44q.21.268.373.567c.123.223.218.462.408.939c.155.388.67.491.968.193l.073-.072c.963-.96 2.12-2.114 2.353-2.67a2.9 2.9 0 0 0 .197-1.534c-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.789.786-1.13 1.08a5 5 0 0 1-.674.504m-6.896-2.33a.759.759 0 1 0-1.073-1.073L4.47 15.632a.759.759 0 1 0 1.074 1.074zm2.809 2.806a.759.759 0 1 0-1.073-1.073l-2.128 2.127a.76.76 0 0 0 1.074 1.074z" fill="currentColor" opacity=".5" style={{}}></path></svg>
<span className="text-lg font-semibold tracking-tight text-white" style={{}}>Ventura</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-white w-6 h-6 group-hover:text-purple-400 transition-colors iconify--solar" data-icon="solar:camera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" fill="currentColor" opacity=".5"></path><path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" fill="currentColor"></path><path clip-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-lg font-semibold tracking-tight text-white">FocusAI</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-white w-6 h-6 group-hover:text-sky-400 transition-colors iconify--solar" data-icon="solar:cloud-storage-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.94 14.44c-.44.439-.44 1.146-.44 2.56v2c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56v-2c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path><path d="M22 12.353c0 2.88-2.181 5.256-5 5.603l-1.5.007V17c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44c-.44.439-.44 1.146-.44 2.56v.993L7 18h-.714C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353" fill="currentColor" opacity=".5"></path></svg>
<span className="text-lg font-semibold tracking-tight text-white">Cumulus</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-white w-6 h-6 group-hover:text-orange-400 transition-colors iconify--solar" data-icon="solar:bolt-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
<span className="text-lg font-semibold tracking-tight text-white">EnergyCo</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<svg aria-hidden="true" className="iconify text-white w-6 h-6 group-hover:text-pink-400 transition-colors iconify--solar" data-icon="solar:user-hand-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M1.818 5.272a.75.75 0 0 1 .91.546l.382 1.528a6.71 6.71 0 0 0 4.975 4.904H16a4.124 4.124 0 0 1 4.096 3.642l.649 5.52a.75.75 0 1 1-1.49.176l-.65-5.52A2.624 2.624 0 0 0 16 13.75H7.918l-.08-.018A8.21 8.21 0 0 1 1.654 7.71l-.382-1.528a.75.75 0 0 1 .545-.91" fill="currentColor" fill-rule="evenodd"></path><path d="M8 13.75V18c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-4.25z" fill="currentColor" opacity=".5"></path><circle cx="12" cy="6" fill="currentColor" r="4"></circle></svg>
<span className="text-lg font-semibold tracking-tight text-white">TalentFlow</span>
</div>
</div>
</div>
</section>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
