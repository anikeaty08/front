import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



// --- CMS / Admin Router bootstrap (self-contained, minimal impact on public site) ---
// NOTE: This is a lightweight client-side implementation to support /admin routes on a static host.
// Public pages: no admin UI is rendered unless path starts with /admin.
(function () {
const ADMIN_PREFIX = '/admin';
const isAdminRoute = location.pathname === ADMIN_PREFIX || location.pathname.startsWith(ADMIN_PREFIX + '/');
// Public site: no-op
if (!isAdminRoute) return;
// Basic hardening
document.documentElement.classList.add('h-full');
document.body.classList.add('min-h-screen');
// Prevent public portfolio from rendering behind admin
// We'll replace body content only on admin routes.
// --- Config (Supabase preferred) ---
// If you have Supabase configured, set window.__SUPABASE = { url, anonKey }
// via environment-injected script. This implementation gracefully falls back.
const SUPABASE = window.__SUPABASE || null;
const LS = {
session: 'mm_admin_session_v1',
lock: 'mm_admin_lock_v1',
failed: 'mm_admin_failed_v1'
};
const now = () => Date.now();
function readJSON(key, fallback) {
try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function writeJSON(key, val) {
localStorage.setItem(key, JSON.stringify(val));
}
function isLocked() {
const lock = readJSON(LS.lock, null);
return lock && lock.until && lock.until > now();
}
function markFailedAttempt() {
const s = readJSON(LS.failed, { count: 0, firstAt: now() });
const withinWindow = (now() - (s.firstAt || now())) < 15 * 60 * 1000;
const next = withinWindow ? { count: (s.count || 0) + 1, firstAt: s.firstAt || now() } : { count: 1, firstAt: now() };
writeJSON(LS.failed, next);
if (next.count >= 5) {
writeJSON(LS.lock, { until: now() + 15 * 60 * 1000 });
}
}
function clearFailedAttempts() {
localStorage.removeItem(LS.failed);
localStorage.removeItem(LS.lock);
}
function getSession() {
const s = readJSON(LS.session, null);
if (!s || !s.token || !s.expiresAt) return null;
if (s.expiresAt <= now()) {
localStorage.removeItem(LS.session);
return null;
}
return s;
}
function setSession(token, email) {
const expiresAt = now() + 7 * 24 * 60 * 60 * 1000; // 7 days
writeJSON(LS.session, { token, email, expiresAt });
}
function clearSession() {
localStorage.removeItem(LS.session);
}
// --- Minimal DB layer (runtime content fetch for public site) ---
// Public site migration is out-of-scope for a single-file static snippet.
// However, this provides the necessary primitives and admin UI to edit content.
// Data is stored in localStorage fallback unless Supabase is configured.
const STORE_KEY = 'mm_cms_store_v1';
function getStore() {
return readJSON(STORE_KEY, null) || {
site_config: {
title: document.title,
meta_description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
footer_text: '© 2025 Manjiree Mhatre. All rights reserved.'
},
hero: {
full_name: 'Manjiree Mhatre',
title_line_1: 'Medical Billing Specialist',
title_line_2: 'Accounts Receivable Analyst · Senior Process Associate',
tagline: '“Driving financial accuracy and operational efficiency across healthcare revenue cycles.”',
cta1_label: 'View My Experience',
cta1_link: '#experience',
cta2_label: 'Get In Touch',
cta2_link: '#contact',
background_style: 'Gradient'
},
about: {
summary_html: '',
current_role_title: 'Senior Process Associate',
current_company: 'ECLAT Health Solutions Inc.',
university_name: 'Manipal University Jaipur',
degree: 'Bachelor of Business Administration (BBA)',
profile_photo_url: ''
},
experience: [],
skills: [],
certifications: [],
education: [],
contact_info: {
email: 'manjireemmhatre01@gmail.com',
linkedin_url: 'https://www.linkedin.com/in/manjiree-mhatre',
location_text: 'Mumbai, Maharashtra, India',
availability_note: 'Open to full-time opportunities and professional collaborations in healthcare billing and revenue cycle management.',
contact_form_enabled: true,
submission_email: 'manjireemmhatre01@gmail.com'
},
media_library: [],
contact_submissions: []
};
}
function saveStore(next) {
writeJSON(STORE_KEY, next);
return next;
}
async function authSignIn(email, password) {
// Supabase Auth preferred; fallback to env-based ADMIN_PASSWORD check is not possible client-side.
// For this static build, we implement a single-user local auth using a stored password hash placeholder.
// To use Supabase, set window.__SUPABASE and enable email/password auth.
if (SUPABASE && window.supabase) {
const client = window.supabase.createClient(SUPABASE.url, SUPABASE.anonKey);
const { data, error } = await client.auth.signInWithPassword({ email, password });
if (error) throw error;
return { token: data.session?.access_token || 'supabase', email };
}
// Fallback: allow login only if email matches and a pre-seeded token exists.
// NOTE: This is not secure and intended only as a placeholder until Supabase is wired.
if (email !== 'manjireemmhatre01@gmail.com') throw new Error('invalid');
const seeded = readJSON('mm_admin_seed_v1', null);
if (!seeded || !seeded.password) throw new Error('invalid');
if (password !== seeded.password) throw new Error('invalid');
return { token: 'local', email };
}
function route() {
const path = location.pathname;
if (path === '/admin' || path === '/admin/') return '/admin/login';
return path;
}
function navigate(to) {
history.pushState({}, '', to);
render();
}
window.addEventListener('popstate', render);
// --- UI primitives ---
function el(tag, attrs = {}, html = '') {
const n = document.createElement(tag);
Object.entries(attrs).forEach(([k, v]) => {
if (k === 'class') n.className = v;
else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
else if (v !== null && v !== undefined) n.setAttribute(k, String(v));
});
if (html !== null && html !== undefined) n.innerHTML = html;
return n;
}
function adminLayout({ title, sectionLabel, content }) {
const root = el('div', { class: 'min-h-screen bg-gradient-to-br from-[#0F1C2E] via-[#10233D] to-[#1E4D8C] text-white' });
const topbar = el('header', { class: 'sticky top-0 z-50 border-b border-white/10 bg-[#0F1C2E]/70 backdrop-blur' });
topbar.appendChild(el('div', { class: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4' },
`
<div class="flex items-center gap-3">
<div class="h-9 w-9 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
<span class="font-['Playfair_Display'] text-sm font-semibold tracking-tight">MM</span>
</div>
<div>
<p class="font-['Playfair_Display'] text-sm sm:text-base font-semibold tracking-tight">Manjiree Mhatre <span class="text-white/70">| Admin</span></p>
<p class="text-xs text-white/60">${sectionLabel || 'Dashboard'}</p>
</div>
</div>
<div class="flex items-center gap-2">
<a href="/" target="_blank" rel="noopener" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">View Live Site</a>
<button id="adminSignOut" class="inline-flex items-center gap-2 rounded-xl bg-white text-[#0F1C2E] px-3 py-2 text-xs font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30">Sign Out</button>
</div>
`
));
const shell = el('div', { class: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 grid gap-6 lg:grid-cols-12' });
const sidebar = el('aside', { class: 'lg:col-span-3' });
sidebar.appendChild(el('nav', { class: 'rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-3' },
`
<p class="px-3 py-2 text-xs font-semibold text-white/60">Dashboard Overview</p>
<div class="grid gap-1">
${[
['Dashboard', '/admin/dashboard'],
['Hero Section', '/admin/hero'],
['About Me', '/admin/about'],
['Experience', '/admin/experience'],
['Skills & Expertise', '/admin/skills'],
['Certifications', '/admin/certifications'],
['Education', '/admin/education'],
['Contact Info', '/admin/contact'],
['Media Library', '/admin/media'],
['Site Settings', '/admin/settings'],
['Security', '/admin/security'],
['Submissions', '/admin/submissions']
].map(([label, href]) => {
const active = route() === href;
return `<a data-admin-nav href="${href}" class="flex items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${active ? 'bg-white text-[#0F1C2E]' : 'text-white/85 hover:bg-white/10'}">${label}</a>`;
}).join('')}
</div>
`
));
const main = el('main', { class: 'lg:col-span-9' });
const card = el('div', { class: 'rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 sm:p-6' });
card.appendChild(el('div', { class: 'flex items-start justify-between gap-4 flex-wrap' },
`<div>
<p class="text-xs font-semibold text-white/60">${title || ''}</p>
<p class="mt-1 font-['Playfair_Display'] text-xl sm:text-2xl font-semibold tracking-tight">${sectionLabel || ''}</p>
</div>
<div class="flex items-center gap-2">
<span id="saveState" class="text-xs font-semibold text-white/70">Ready</span>
<button id="savePublish" class="inline-flex items-center justify-center rounded-xl bg-white text-[#0F1C2E] px-3 py-2 text-xs font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30">Save &amp; Publish</button>
</div>`
));
card.appendChild(el('div', { class: 'mt-5' }, ''));
card.lastChild.appendChild(content);
main.appendChild(card);
shell.appendChild(sidebar);
shell.appendChild(main);
root.appendChild(topbar);
root.appendChild(shell);
// events
root.querySelectorAll('a[data-admin-nav]').forEach(a => {
a.addEventListener('click', (e) => {
e.preventDefault();
navigate(a.getAttribute('href'));
});
});
const signOutBtn = root.querySelector('#adminSignOut');
if (signOutBtn) signOutBtn.addEventListener('click', () => {
clearSession();
navigate('/admin/login');
});
return root;
}
function loginPage() {
const wrap = el('div', { class: 'min-h-screen bg-gradient-to-br from-[#0F1C2E] via-[#10233D] to-[#1E4D8C] flex items-center justify-center px-4' });
const card = el('div', { class: 'w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-7 shadow-sm' });
card.appendChild(el('div', { class: 'text-center' },
`<p class="font-['Playfair_Display'] text-2xl font-semibold tracking-tight">Manjiree Mhatre</p>
<p class="mt-1 text-sm text-white/70">Admin — Portfolio CMS</p>`
));
const err = el('p', { id: 'loginError', class: 'mt-4 hidden text-sm font-semibold text-red-200', 'aria-live': 'polite' }, '');
const form = el('form', { class: 'mt-6 grid gap-4' });
form.appendChild(el('div', {},
`<label for="adminEmail" class="text-xs font-semibold text-white/70">Email Address</label>
<input id="adminEmail" type="email" autocomplete="username" required class="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25" placeholder="name@example.com" />`
));
form.appendChild(el('div', {},
`<label for="adminPassword" class="text-xs font-semibold text-white/70">Password</label>
<input id="adminPassword" type="password" autocomplete="current-password" required class="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25" placeholder="••••••••" />`
));
const btn = el('button', { type: 'submit', class: 'mt-1 w-full inline-flex items-center justify-center rounded-xl bg-white text-[#0F1C2E] px-5 py-3 text-sm font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30' }, 'Sign In');
form.appendChild(btn);
const note = el('p', { class: 'mt-4 text-center text-xs text-white/60' }, 'This page is restricted to authorized users only.');
card.appendChild(err);
card.appendChild(form);
card.appendChild(note);
wrap.appendChild(card);
form.addEventListener('submit', async (e) => {
e.preventDefault();
if (isLocked()) {
err.classList.remove('hidden');
err.textContent = 'Too many failed attempts. Please try again later.';
return;
}
err.classList.add('hidden');
err.textContent = '';
btn.disabled = true;
btn.textContent = 'Signing in…';
const email = (wrap.querySelector('#adminEmail')?.value || '').trim();
const password = (wrap.querySelector('#adminPassword')?.value || '').trim();
try {
const r = await authSignIn(email, password);
setSession(r.token, r.email);
clearFailedAttempts();
navigate('/admin/dashboard');
} catch (e2) {
markFailedAttempt();
err.classList.remove('hidden');
err.textContent = isLocked() ? 'Too many failed attempts. Please try again later.' : 'Invalid credentials. Please try again.';
} finally {
btn.disabled = false;
btn.textContent = 'Sign In';
}
});
return wrap;
}
// --- Editors (minimal scaffolding; debounced autosave + publish) ---
let dirty = false;
let saveTimer = null;
function setSaveState(root, state) {
const elState = root.querySelector('#saveState');
if (!elState) return;
elState.textContent = state;
}
function debounceSave(root, fn) {
dirty = true;
setSaveState(root, 'Unsaved changes');
window.clearTimeout(saveTimer);
saveTimer = window.setTimeout(async () => {
setSaveState(root, 'Saving…');
await fn();
dirty = false;
setSaveState(root, 'Changes saved');
}, 1500);
}
function dashboardPage(rootShell) {
const store = getStore();
const content = el('div', { class: 'grid gap-5' });
content.appendChild(el('div', { class: 'rounded-2xl border border-white/10 bg-white/5 p-4' },
`<p class="text-sm font-semibold">Welcome back, Manjiree</p>
<p class="mt-1 text-xs text-white/70">Quick overview of your portfolio content.</p>`
));
const stats = el('div', { class: 'grid gap-3 sm:grid-cols-2 lg:grid-cols-4' });
const statCard = (label, value) => el('div', { class: 'rounded-2xl border border-white/10 bg-white/5 p-4' },
`<p class="text-xs font-semibold text-white/70">${label}</p>
<p class="mt-2 text-lg font-semibold tracking-tight">${value}</p>`
);
stats.appendChild(statCard('Total Experience Entries', (store.experience || []).length));
stats.appendChild(statCard('Skills Listed', (store.skills || []).length));
stats.appendChild(statCard('Certifications', (store.certifications || []).length));
stats.appendChild(statCard('Last Updated', store.site_config?.updated_at ? new Date(store.site_config.updated_at).toLocaleString() : '—'));
content.appendChild(stats);
const actions = el('div', { class: 'flex flex-wrap gap-2' },
`
<button data-go="/admin/hero" class="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10">Edit Hero</button>
<button data-go="/admin/experience" class="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10">Add Experience</button>
<button data-go="/admin/skills" class="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10">Update Skills</button>
<button data-go="/admin/contact" class="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10">Update Contact</button>
`
);
actions.querySelectorAll('button[data-go]').forEach(b => b.addEventListener('click', () => navigate(b.getAttribute('data-go'))));
content.appendChild(actions);
const preview = el('div', { class: 'rounded-2xl border border-white/10 bg-white/5 p-4' },
`<p class="text-xs font-semibold text-white/70">Live preview</p>
<div class="mt-3 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0F1C2E]">
<iframe title="Live site preview" src="/" class="h-full w-full scale-[0.7] origin-top-left" style="width:142.85%; height:142.85%;" loading="lazy"></iframe>
</div>`
);
content.appendChild(preview);
return content;
}
function simpleTextEditor({ title, sectionLabel, fields, getValues, setValues }) {
const store = getStore();
const values = getValues(store);
const content = el('div', { class: 'grid gap-4' });
fields.forEach(f => {
const row = el('div', { class: 'grid gap-2' });
row.appendChild(el('label', { for: f.id, class: 'text-xs font-semibold text-white/70' }, f.label));
let input;
if (f.type === 'textarea') {
input = el('textarea', { id: f.id, rows: f.rows || 4, class: 'w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25' });
input.value = values[f.key] || '';
} else {
input = el('input', { id: f.id, type: f.type || 'text', class: 'w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25' });
input.value = values[f.key] || '';
}
input.placeholder = f.placeholder || '';
row.appendChild(input);
if (f.hint) row.appendChild(el('p', { class: 'text-xs text-white/60' }, f.hint));
content.appendChild(row);
});
const root = adminLayout({ title, sectionLabel, content });
const doSave = async () => {
const next = getStore();
const patch = {};
fields.forEach(f => {
const node = root.querySelector('#' + f.id);
patch[f.key] = (node?.value || '').trim();
});
setValues(next, patch);
next.site_config = next.site_config || {};
next.site_config.updated_at = new Date().toISOString();
saveStore(next);
};
fields.forEach(f => {
const node = root.querySelector('#' + f.id);
if (!node) return;
node.addEventListener('input', () => debounceSave(root, doSave));
});
const saveBtn = root.querySelector('#savePublish');
if (saveBtn) saveBtn.addEventListener('click', async () => {
setSaveState(root, 'Saving…');
await doSave();
dirty = false;
setSaveState(root, 'Changes saved');
});
return root;
}
function requireAuthOrRedirect() {
const s = getSession();
if (!s) {
if (route() !== '/admin/login') navigate('/admin/login');
return false;
}
return true;
}
function render() {
// guard
const r = route();
if (r !== '/admin/login' && !requireAuthOrRedirect()) return;
document.body.innerHTML = '';
if (r === '/admin/login') {
document.body.appendChild(loginPage());
return;
}
if (r === '/admin/dashboard') {
const root = adminLayout({ title: 'Dashboard Overview', sectionLabel: 'Dashboard', content: dashboardPage() });
const saveBtn = root.querySelector('#savePublish');
if (saveBtn) saveBtn.classList.add('hidden');
document.body.appendChild(root);
return;
}
if (r === '/admin/hero') {
document.body.appendChild(simpleTextEditor({
title: 'Editor',
sectionLabel: 'Hero Section',
fields: [
{ id: 'hero_full_name', key: 'full_name', label: 'Full Name', placeholder: 'Full name', type: 'text' },
{ id: 'hero_title2', key: 'title_line_2', label: 'Professional Title Line', placeholder: 'Title line', type: 'text' },
{ id: 'hero_tagline', key: 'tagline', label: 'Tagline / Subtitle', placeholder: 'Short tagline', type: 'textarea', rows: 3 },
{ id: 'hero_cta1_label', key: 'cta1_label', label: 'CTA Button 1 Label', type: 'text' },
{ id: 'hero_cta1_link', key: 'cta1_link', label: 'CTA Button 1 Link', type: 'text' },
{ id: 'hero_cta2_label', key: 'cta2_label', label: 'CTA Button 2 Label', type: 'text' },
{ id: 'hero_cta2_link', key: 'cta2_link', label: 'CTA Button 2 Link', type: 'text' }
],
getValues: (s) => (s.hero || {}),
setValues: (s, patch) => { s.hero = Object.assign({}, s.hero || {}, patch); }
}));
return;
}
if (r === '/admin/contact') {
document.body.appendChild(simpleTextEditor({
title: 'Editor',
sectionLabel: 'Contact Info',
fields: [
{ id: 'contact_email', key: 'email', label: 'Email Address', type: 'email' },
{ id: 'contact_linkedin', key: 'linkedin_url', label: 'LinkedIn URL', type: 'text' },
{ id: 'contact_location', key: 'location_text', label: 'Location Display Text', type: 'text' },
{ id: 'contact_availability', key: 'availability_note', label: 'Availability Note', type: 'textarea', rows: 3 },
{ id: 'contact_submission_email', key: 'submission_email', label: 'Form Submission Email', type: 'email' }
],
getValues: (s) => (s.contact_info || {}),
setValues: (s, patch) => { s.contact_info = Object.assign({}, s.contact_info || {}, patch); }
}));
return;
}
// Placeholder pages for remaining modules
const placeholder = (label) => {
const content = el('div', { class: 'rounded-2xl border border-white/10 bg-white/5 p-4' },
`<p class="text-sm font-semibold">${label}</p>
<p class="mt-2 text-xs text-white/70">Module scaffolding is in place. Connect Supabase + complete CRUD per the prompt.</p>`
);
const root = adminLayout({ title: 'Admin Module', sectionLabel: label, content });
const saveBtn = root.querySelector('#savePublish');
if (saveBtn) saveBtn.classList.add('hidden');
return root;
};
const map = {
'/admin/about': 'About Me',
'/admin/experience': 'Experience',
'/admin/skills': 'Skills & Expertise',
'/admin/certifications': 'Certifications',
'/admin/education': 'Education',
'/admin/media': 'Media Library',
'/admin/settings': 'Site Settings',
'/admin/security': 'Security',
'/admin/submissions': 'Submissions Inbox'
};
if (map[r]) {
document.body.appendChild(placeholder(map[r]));
return;
}
// default
navigate('/admin/dashboard');
}
// Seed local fallback password only if not present (for local-only demo). Remove in production.
if (!readJSON('mm_admin_seed_v1', null)) {
// IMPORTANT: replace by environment variable / Supabase in production.
// This is only to keep the panel usable in a static preview.
writeJSON('mm_admin_seed_v1', { password: 'CHANGE_ME_IN_SETUP' });
}
render();
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.documentElement.style.scrollBehavior = 'smooth';

    const shell = document.getElementById('navShell');
    function setHeaderState() {
      const scrolled = window.scrollY > 8;
      if (scrolled) {
        shell.classList.remove('bg-transparent');
        shell.classList.add('bg-white/90', 'backdrop-blur', 'shadow-sm', 'border', 'border-[#5B9BD5]/15');
      } else {
        shell.classList.add('bg-transparent');
        shell.classList.remove('bg-white/90', 'backdrop-blur', 'shadow-sm', 'border', 'border-[#5B9BD5]/15');
      }
    }
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function closeMobileMenu() {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    function toggleMobileMenu() {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
      } else {
        closeMobileMenu();
      }
    }
    menuBtn.addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('#mobileMenu a[data-nav]').forEach(a => {
      a.addEventListener('click', () => closeMobileMenu());
    });

    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    revealEls.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-4');
      el.style.transition = 'opacity 700ms ease, transform 700ms ease';
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));

    const sections = ['home','about','experience','skills','certifications','education','recruiting-funnel','contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const navLinks = Array.from(document.querySelectorAll('a[data-nav]'));

    function setActive(hash) {
      navLinks.forEach(a => {
        const isActive = a.getAttribute('href') === hash;
        if (isActive) {
          a.classList.add('text-[#1E4D8C]');
          a.classList.remove('text-[#1A2A3A]/90');
          a.style.textDecoration = 'none';
        } else {
          a.classList.remove('text-[#1E4D8C]');
          a.classList.add('text-[#1A2A3A]/90');
        }
      });
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a,b) => (b.intersectionRatio - a.intersectionRatio))[0];
      if (visible && visible.target && visible.target.id) {
        const hash = '#' + visible.target.id;
        setActive(hash);
        history.replaceState(null, '', hash);
      }
    }, { rootMargin: '-20% 0px -70% 0px', threshold: [0.1, 0.2, 0.3] });

    sections.forEach(el => sectionObserver.observe(el));

    // Close mobile menu on any nav click (desktop + mobile)
    document.querySelectorAll('a[data-nav]').forEach(a => {
      a.addEventListener('click', () => closeMobileMenu());
    });

    // Set active state on initial load
    setActive(location.hash && navLinks.some(a => a.getAttribute('href') === location.hash) ? location.hash : '#home');

    // Recruiter note copy-to-clipboard
    const copyBtn = document.getElementById('copyRecruiterNote');
    const copyStatus = document.getElementById('copyNoteStatus');
    const recruiterNote = [
      'Hi Manjiree,',
      '',
      'I came across your profile and would like to discuss an opportunity in US Healthcare AR / Medical Billing.',
      'Role: [AR Specialist / AR Analyst / Billing Associate]',
      'Location/Mode: [Onsite/Hybrid/Remote]',
      'Shift: [Day/Night]',
      'Pay range: [Range]',
      '',
      'Are you available for a quick call? Please share your availability for the next 2–3 working days.',
      '',
      'Regards,',
      '[Recruiter Name]',
      '[Company]'
    ].join('\n');

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(recruiterNote);
          if (copyStatus) {
            copyStatus.classList.remove('hidden');
            copyStatus.textContent = 'Copied';
            window.clearTimeout(copyStatus.__t);
            copyStatus.__t = window.setTimeout(() => copyStatus.classList.add('hidden'), 1600);
          }
        } catch (e) {
          if (copyStatus) {
            copyStatus.classList.remove('hidden');
            copyStatus.textContent = 'Copy failed';
            window.clearTimeout(copyStatus.__t);
            copyStatus.__t = window.setTimeout(() => copyStatus.classList.add('hidden'), 2000);
          }
        }
      });
    }

    // Contact form: open default email client with prefilled content (mailto)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    function setFormStatus(text, kind = 'info') {
      if (!formStatus) return;
      formStatus.classList.remove('hidden');
      formStatus.textContent = text;

      // color hint
      formStatus.classList.remove('text-[#1E4D8C]', 'text-red-700', 'text-green-700');
      if (kind === 'error') formStatus.classList.add('text-red-700');
      else if (kind === 'success') formStatus.classList.add('text-green-700');
      else formStatus.classList.add('text-[#1E4D8C]');

      window.clearTimeout(formStatus.__t);
      formStatus.__t = window.setTimeout(() => formStatus.classList.add('hidden'), 2800);
    }

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (document.getElementById('fullName')?.value || '').trim();
        const email = (document.getElementById('email')?.value || '').trim();
        const subject = (document.getElementById('subject')?.value || '').trim();
        const message = (document.getElementById('message')?.value || '').trim();

        if (!name || !email || !subject || !message) {
          setFormStatus('Please complete all fields.', 'error');
          return;
        }

        const to = 'manjireemmhatre01@gmail.com';
        const mailSubject = encodeURIComponent(subject);
        const body = encodeURIComponent(
          `Hi Manjiree,\n\n${message}\n\n—\nName: ${name}\nEmail: ${email}\n`
        );

        window.location.href = `mailto:${to}?subject=${mailSubject}&body=${body}`;
        setFormStatus('Opening your email client…', 'success');
        contactForm.reset();
      });
    }

    // Accessibility: update aria-expanded on load
    menuBtn.setAttribute('aria-expanded', 'false');

    // Close mobile menu on Escape & outside click
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });

    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('hidden')) return;
      const clickedInsideNav = e.target.closest('nav');
      if (!clickedInsideNav) closeMobileMenu();
    });

    // Optional: compensate anchor scroll for fixed header (small polish)
    // Uses scroll-margin via CSS utility on sections
    sections.forEach(s => s.classList.add('scroll-mt-28'));

    // Fix a small markup issue from snapshot card if any icon container got malformed
    // (No-op in most cases; kept minimal for safety)
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 left-0 right-0 z-[60] h-px bg-gradient-to-r from-transparent via-[#5B9BD5]/40 to-transparent"></div>
<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300" id="siteHeader">
<nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 bg-transparent" id="navShell">
<a className="flex items-baseline gap-2" href="#home">
<span className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold tracking-tight text-[#1E4D8C]">Manjiree Mhatre</span>
<span className="hidden sm:inline text-xs text-[#6B7B8D]">Mumbai · Healthcare RCM</span>
</a>
<div className="hidden lg:flex items-center gap-7">
<a className="group relative text-sm font-medium transition-colors hover:text-[#1E4D8C] text-[#1E4D8C]" data-nav="" href="#home" style={{textDecoration: 'none'}}>
            Home
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative text-sm font-medium transition-colors hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#about" style={{textDecoration: 'none'}}>
            About
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative text-sm font-medium text-[#1A2A3A]/90 transition-colors hover:text-[#1E4D8C]" data-nav="" href="#experience">
            Experience
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative text-sm font-medium transition-colors hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#skills" style={{textDecoration: 'none'}}>
            Skills
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative text-sm font-medium transition-colors hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#certifications" style={{textDecoration: 'none'}}>
            Certifications
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative text-sm font-medium transition-colors hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#education" style={{textDecoration: 'none'}}>
            Education
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="group relative text-sm font-medium text-[#1A2A3A]/90 transition-colors hover:text-[#1E4D8C]" data-nav="" href="#contact">
            Contact
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#5B9BD5] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<button aria-expanded="false" className="lg:hidden inline-flex items-center justify-center rounded-xl border border-[#5B9BD5]/25 bg-white/60 backdrop-blur px-3 py-2 text-sm font-medium text-[#1A2A3A] hover:border-[#5B9BD5]/40 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/40" id="menuBtn">
<span className="sr-only">Open menu</span>
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="lg:hidden hidden" id="mobileMenu">
<div className="mt-3 rounded-2xl border border-[#5B9BD5]/20 bg-white/90 backdrop-blur px-4 py-4 shadow-sm">
<div className="grid gap-3">
<a className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#F4F7FA] hover:text-[#1E4D8C] text-[#1E4D8C]" data-nav="" href="#home" style={{textDecoration: 'none'}}>Home</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#F4F7FA] hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#about" style={{textDecoration: 'none'}}>About</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-[#1A2A3A]/90 hover:bg-[#F4F7FA] hover:text-[#1E4D8C]" data-nav="" href="#experience">Experience</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#F4F7FA] hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#skills" style={{textDecoration: 'none'}}>Skills</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#F4F7FA] hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#certifications" style={{textDecoration: 'none'}}>Certifications</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#F4F7FA] hover:text-[#1E4D8C] text-[#1A2A3A]/90" data-nav="" href="#education" style={{textDecoration: 'none'}}>Education</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-[#1A2A3A]/90 hover:bg-[#F4F7FA] hover:text-[#1E4D8C]" data-nav="" href="#contact">Contact</a>
</div>
</div>
</div>
</nav>
</header>
<main className="pt-24 sm:pt-28">
<section className="relative overflow-hidden scroll-mt-28" id="home">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(91,155,213,0.18),transparent_55%),radial-gradient(60%_55%_at_80%_30%,rgba(30,77,140,0.12),transparent_60%),linear-gradient(to_bottom,rgba(244,247,250,0.65),rgba(255,255,255,1))]"></div>
<div className="absolute -top-24 right-[-20%] h-[32rem] w-[32rem] rounded-full bg-[#5B9BD5]/10 blur-3xl"></div>
<div className="absolute -bottom-24 left-[-15%] h-[30rem] w-[30rem] rounded-full bg-[#1E4D8C]/10 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="min-h-[calc(100vh-7rem)] flex sm:py-16 pt-14 pb-14 items-center">
<div className="w-full">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-7">
<div className="reveal opacity-100 translate-y-0" style={{transition: 'opacity 700ms, transform 700ms'}}>
<p className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white/70 px-4 py-2 text-xs font-medium text-[#1A2A3A]/80 backdrop-blur">
<iconify-icon className="text-base text-[#1E4D8C]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Healthcare Revenue Cycle · AR · Claims
          </p>
<h1 className="mt-6 font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A2A3A]">
            Manjiree Mhatre
          </h1>
<p className="mt-4 text-sm sm:text-base font-medium text-[#1E4D8C]">
            Medical Billing Specialist · Accounts Receivable Analyst · Senior Process Associate
          </p>
<div className="mt-5 flex items-center gap-4">
<span className="h-px w-10 bg-[#5B9BD5]/70"></span>
<span className="text-xs sm:text-sm text-[#6B7B8D]">Revenue integrity · Denial reduction · Faster cash</span>
</div>
<p className="mt-6 text-base sm:text-lg text-[#6B7B8D] italic leading-relaxed">
            “Driving financial accuracy and operational efficiency across healthcare revenue cycles.”
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E4D8C] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-[#1E4D8C]/20 hover:bg-[#173f73] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45" href="#experience">
              View My Experience
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1E4D8C]/40 bg-white/60 px-5 py-3 text-sm font-semibold text-[#1E4D8C] backdrop-blur hover:border-[#1E4D8C]/60 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45" href="#contact">
              Get In Touch
              <iconify-icon className="text-lg" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#5B9BD5]/25 bg-white/60 px-5 py-3 text-sm font-semibold text-[#1A2A3A] backdrop-blur hover:bg-white/80 hover:border-[#5B9BD5]/40 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45" href="https://www.linkedin.com/in/manjiree-mhatre" rel="noopener noreferrer" target="_blank">
              LinkedIn
              <iconify-icon className="text-lg text-[#5B9BD5]" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="reveal lg:justify-self-end opacity-100 translate-y-0" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white/80 backdrop-blur p-6 sm:p-7 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-semibold text-[#6B7B8D]">Professional Snapshot</p>
<span className="inline-flex items-center gap-2 text-xs font-medium text-[#1E4D8C]"><span className="h-1.5 w-1.5 rounded-full bg-[#5B9BD5]"></span> Open to opportunities</span>
</div>
<div className="mt-5 grid gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">2+ years progressive RCM experience</p>
<p className="mt-0.5 text-xs text-[#6B7B8D]">AR follow-ups, denial management, claims resolution</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C] &lt;iconify-icon icon=" solar:bill-list-linear"="" style={{strokeWidth: '1.5'}}>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Accounts receivable precision</p>
<p className="mt-0.5 text-xs text-[#6B7B8D]">Aging reduction, payer communication, documentation</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:shield-user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Compliance-first mindset</p>
<p className="mt-0.5 text-xs text-[#6B7B8D]">Payer guidelines, HIPAA awareness, process controls</p>
</div>
</div>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-[#5B9BD5]/15 bg-[#F4F7FA]/60 p-4">
<p className="text-xs font-semibold text-[#6B7B8D]">Location</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">Mumbai, India</p>
</div>
<div className="rounded-2xl border border-[#5B9BD5]/15 bg-[#F4F7FA]/60 p-4">
<p className="text-xs font-semibold text-[#6B7B8D]">Focus</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">US Healthcare AR</p>
</div>
</div>
</div>
<p className="mt-4 text-xs text-[#6B7B8D]">
            Built for recruiter clarity: structured experience, skills, and contact pathways.
          </p>
</div>
</div>
</div>
<div className="mt-12 sm:mt-14 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white/60 px-4 py-2 text-xs font-medium text-[#6B7B8D] backdrop-blur hover:bg-white/80 hover:text-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/40" href="#about">
        Scroll
        <iconify-icon className="text-base" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white scroll-mt-28" id="about">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="">
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">About Me</h2>
<p className="mt-2 text-sm text-[#6B7B8D] max-w-2xl">
                Professional summary with a focus on measurable value across claims, AR, and compliance.
              </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#1E4D8C]">
<span className="h-px w-10 bg-[#5B9BD5]/70"></span>
              Precision · Ownership · Growth
            </div>
</div>
<div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-7">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<p className="text-sm sm:text-base leading-relaxed text-[#1A2A3A]/90">
                  I am a dedicated Medical Billing and Accounts Receivable professional with over two years of hands-on experience in healthcare revenue cycle operations. Currently serving as a Senior Process Associate at ECLAT Health Solutions Inc., I specialize in AR follow-ups, insurance claims processing, denial management, and financial compliance — ensuring healthcare providers recover what they're owed, accurately and efficiently.
                </p>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1A2A3A]/90">
                  My career spans reputed organizations including GeBBS Healthcare Solutions and Forefront Dermatology, where I honed my ability to manage complex billing workflows, work with diverse payer systems, and uphold the highest standards of financial accuracy. I hold a Bachelor of Business Administration (BBA) from Manipal University Jaipur and carry a strong foundation in business operations that complements my technical expertise in healthcare billing.
                </p>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#1A2A3A]/90">
                  I am committed to continuous professional development and aspire to grow into broader revenue cycle leadership roles within the healthcare industry.
                </p>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 sm:p-7 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-semibold text-[#6B7B8D]">Core Strengths</p>
<iconify-icon className="text-xl text-[#1E4D8C]" icon="solar:pulse-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mt-5 grid gap-4">
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-[#1E4D8C] border border-[#5B9BD5]/20">
<iconify-icon className="text-lg" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Denial &amp; underpayment recovery</p>
<p className="mt-0.5 text-xs text-[#6B7B8D]">Root cause review and clean resubmissions</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-[#1E4D8C] border border-[#5B9BD5]/20">
<iconify-icon className="text-lg" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2A3A]">Payer communication</p>
<p className="mt-0.5 text-xs text-[#6B7B8D]">Consistent follow-up with documented outcomes</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-[#1E4D8C] border border-[#5B9BD5]/20">
<iconify-icon className="text-lg" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Process discipline</p>
<p className="mt-0.5 text-xs text-[#6B7B8D]">SLA adherence and operational accuracy</p>
</div>
</div>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-white border border-[#5B9BD5]/20 p-4">
<p className="text-xs font-semibold text-[#6B7B8D]">Education</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">BBA</p>
</div>
<div className="rounded-2xl bg-white border border-[#5B9BD5]/20 p-4">
<p className="text-xs font-semibold text-[#6B7B8D]">Domain</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">Healthcare RCM</p>
</div>
</div>
</div>
<div className="mt-5 hidden lg:block">
<div className="h-px w-full bg-[#5B9BD5]/20"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#F4F7FA] scroll-mt-28" id="experience">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div>
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">Professional Experience</h2>
<p className="mt-2 text-sm text-[#6B7B8D] max-w-2xl">
                A structured timeline of roles focused on claims resolution, AR integrity, and compliance-led execution.
              </p>
</div>
</div>
<div className="mt-10 grid gap-6">
<div className="grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-3">
<div className="sticky top-28">
<p className="text-xs font-semibold text-[#6B7B8D]">May 2025 – Present</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">Mumbai, India</p>
</div>
</div>
<div className="lg:col-span-9">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<div className="flex items-start justify-between gap-4 flex-wrap">
<div>
<p className="text-xs font-semibold text-[#1E4D8C]">Senior Process Associate</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#1A2A3A]">ECLAT Health Solutions Inc.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-[#F4F7FA] px-4 py-2 text-xs font-medium text-[#6B7B8D]">
<span className="h-1.5 w-1.5 rounded-full bg-[#1E4D8C]"></span>
                      Current role
                    </div>
</div>
<div className="mt-5 grid gap-3 border-l-2 border-[#1E4D8C]/70 pl-5">
<p className="text-sm text-[#1A2A3A]/90">Managing end-to-end accounts receivable workflows for US-based healthcare clients</p>
<p className="text-sm text-[#1A2A3A]/90">Conducting systematic AR follow-ups with insurance payers to expedite claim resolution</p>
<p className="text-sm text-[#1A2A3A]/90">Reviewing and resubmitting denied or underpaid claims to maximize revenue recovery</p>
<p className="text-sm text-[#1A2A3A]/90">Ensuring billing compliance with payer-specific guidelines and regulatory standards</p>
<p className="text-sm text-[#1A2A3A]/90">Coordinating with internal teams to resolve outstanding accounts and reduce aging AR</p>
</div>
</div>
</div>
</div>
<div className="grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-3">
<div className="sticky top-28">
<p className="text-xs font-semibold text-[#6B7B8D]">Jan 2025 – May 2025</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">Mumbai, India</p>
</div>
</div>
<div className="lg:col-span-9">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<div>
<p className="text-xs font-semibold text-[#1E4D8C]">Accounts Receivable Analyst</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#1A2A3A]">Forefront Dermatology</p>
</div>
<div className="mt-5 grid gap-3 border-l-2 border-[#1E4D8C]/70 pl-5">
<p className="text-sm text-[#1A2A3A]/90">Analyzed and worked aging AR reports to identify and resolve outstanding insurance balances</p>
<p className="text-sm text-[#1A2A3A]/90">Processed and tracked insurance claims across multiple commercial and government payers</p>
<p className="text-sm text-[#1A2A3A]/90">Communicated with insurance carriers to resolve claim discrepancies and underpayments</p>
<p className="text-sm text-[#1A2A3A]/90">Maintained accurate records of claim status, follow-up actions, and resolutions</p>
</div>
</div>
</div>
</div>
<div className="grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-3">
<div className="sticky top-28">
<p className="text-xs font-semibold text-[#6B7B8D]">May 2023 – May 2025</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">Mumbai, India</p>
</div>
</div>
<div className="lg:col-span-9">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<div>
<p className="text-xs font-semibold text-[#1E4D8C]">Accounts Receivable Specialist</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#1A2A3A]">GeBBS Healthcare Solutions</p>
</div>
<div className="mt-5 grid gap-3 border-l-2 border-[#1E4D8C]/70 pl-5">
<p className="text-sm text-[#1A2A3A]/90">Executed high-volume AR follow-ups on outstanding insurance claims across specialty practices</p>
<p className="text-sm text-[#1A2A3A]/90">Identified billing errors, applied corrective coding, and resubmitted claims to reduce denials</p>
<p className="text-sm text-[#1A2A3A]/90">Processed electronic and paper-based claims through healthcare billing platforms</p>
<p className="text-sm text-[#1A2A3A]/90">Generated weekly AR aging reports and presented findings to the operations team</p>
<p className="text-sm text-[#1A2A3A]/90">Maintained compliance with HIPAA regulations and client-specific billing protocols</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
</div>
</div>
</section>
<section className="bg-white scroll-mt-28" id="skills">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="">
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">Skills &amp; Expertise</h2>
<p className="mt-2 text-sm text-[#6B7B8D] max-w-2xl">
                Practical competencies aligned to healthcare billing operations and revenue cycle performance.
              </p>
</div>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2A3A]">Medical Billing &amp; Coding Basics</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Accurate charge entry and CPT/ICD coding fundamentals</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:hand-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Accounts Receivable Management</p>
<p className="mt-1 text-xs text-[#6B7B8D]">End-to-end AR lifecycle from claims to collections</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:shield-network-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Health Insurance Processes</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Payer-specific workflows, EOBs, and claim adjudication</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2A3A]">Denial Management</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Root cause analysis and strategic claim resubmission</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2A3A]">Medical Terminology</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Strong command of clinical and procedural language</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Microsoft Office Suite</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Excel, Word, and Outlook for reporting and communication</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:diagram-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2A3A]">Revenue Cycle Management</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Holistic RCM understanding across the billing pipeline</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#5B9BD5]/20 text-[#1E4D8C]">
<iconify-icon className="text-xl" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#1A2A3A]">Process Management</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Workflow optimization, SLA adherence, and client operations</p>
</div>
</div>
</div>
</div>
<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
</div>
</div>
</section>
<section className="bg-[#F4F7FA] scroll-mt-28" id="certifications">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="text-center">
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">Certifications</h2>
<p className="mt-2 text-sm text-[#6B7B8D]">Credentials that reinforce standards, accuracy, and professional growth.</p>
</div>
<div className="mt-10 flex justify-center">
<div className="w-full max-w-2xl rounded-3xl border border-[#5B9BD5]/25 bg-white p-7 sm:p-8 shadow-sm">
<div className="flex items-start gap-5">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C] border border-[#5B9BD5]/20">
<iconify-icon className="text-2xl" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-4 flex-wrap">
<div className="">
<p className="text-lg font-semibold tracking-tight text-[#1A2A3A]">Introduction to Certified Professional Biller (CPB)</p>
<p className="mt-1 text-sm text-[#6B7B8D]">AAPC (American Academy of Professional Coders) (or as applicable)</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#1E4D8C]/25 bg-[#F4F7FA] px-4 py-2 text-xs font-semibold text-[#1E4D8C]">
<iconify-icon className="text-base" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Credential
                    </div>
</div>
<div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
<p className="mt-5 text-sm text-[#1A2A3A]/85">
                    Focused on billing fundamentals, professional standards, and healthcare revenue cycle best practices.
                  </p>
</div>
</div>
</div>
</div>
<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
</div>
</div>
</section>
<section className="bg-white scroll-mt-28" id="education">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div>
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">Education</h2>
<p className="mt-2 text-sm text-[#6B7B8D]">A business foundation that strengthens operational execution in healthcare billing.</p>
</div>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-8">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<div className="flex items-start gap-4">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C] border border-[#5B9BD5]/20">
<iconify-icon className="text-2xl" icon="solar:graduation-cap-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-[#1E4D8C]">Bachelor of Business Administration (BBA)</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#1A2A3A]">Manipal University Jaipur</p>
<p className="mt-3 text-sm text-[#6B7B8D] leading-relaxed">
                      Graduated with a strong foundation in business management, operations, and organizational behavior — directly applicable to healthcare revenue cycle operations
                    </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 sm:p-7 shadow-sm">
<p className="text-xs font-semibold text-[#6B7B8D]">How it supports RCM</p>
<div className="mt-4 grid gap-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#1E4D8C]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-[#1A2A3A]/90">Structured problem-solving for claim resolution</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#1E4D8C]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-[#1A2A3A]/90">Operational discipline for SLA-led workflows</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#1E4D8C]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-[#1A2A3A]/90">Communication clarity with teams and payers</p>
</div>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
<p className="mt-6 text-xs text-[#6B7B8D]">
                  Ready for roles in AR, billing operations, and RCM process ownership.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white scroll-mt-28" id="recruiting-funnel">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div>
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">Recruiting Funnel</h2>
<p className="mt-2 text-sm text-[#6B7B8D] max-w-2xl">
                A quick path for recruiters to review fit, confirm details, and schedule next steps.
              </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#1E4D8C]">
<span className="h-px w-10 bg-[#5B9BD5]/70"></span>
              Clear · Fast · Actionable
            </div>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 sm:p-7 shadow-sm">
<div className="flex items-center justify-between gap-4 flex-wrap">
<p className="text-xs font-semibold text-[#6B7B8D]">Steps</p>
<div className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white/70 px-4 py-2 text-xs font-medium text-[#6B7B8D]">
<iconify-icon className="text-base text-[#1E4D8C]" icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    4-step flow
                  </div>
</div>
<div className="mt-6 grid gap-4">
<div className="rounded-2xl border border-[#5B9BD5]/20 bg-white p-5">
<div className="flex items-start gap-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] border border-[#5B9BD5]/15 text-[#1E4D8C]">
<span className="text-sm font-semibold">1</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-[#1A2A3A]">Review profile + role match</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Experience timeline and AR/claims strengths for quick screening.</p>
<div className="mt-3 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white px-3 py-1.5 text-xs font-medium text-[#1A2A3A]/90 hover:text-[#1E4D8C]" href="#experience">
                            Experience
                            <iconify-icon className="text-base text-[#5B9BD5]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white px-3 py-1.5 text-xs font-medium text-[#1A2A3A]/90 hover:text-[#1E4D8C]" href="#skills">
                            Skills
                            <iconify-icon className="text-base text-[#5B9BD5]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#5B9BD5]/20 bg-white p-5">
<div className="flex items-start gap-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] border border-[#5B9BD5]/15 text-[#1E4D8C]">
<span className="text-sm font-semibold">2</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-[#1A2A3A]">Validate details (LinkedIn / call)</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Use direct links to verify history and connect instantly.</p>
<div className="flex flex-wrap gap-2 mt-3 gap-x-2 gap-y-2">
<a className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white px-3 py-1.5 text-xs font-medium text-[#1A2A3A]/90 hover:text-[#1E4D8C]" href="https://www.linkedin.com/in/manjiree-mhatre" rel="noopener noreferrer" target="_blank">
    LinkedIn
    <iconify-icon className="text-base text-[#5B9BD5]" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#5B9BD5]/20 bg-white p-5">
<div className="flex items-start gap-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] border border-[#5B9BD5]/15 text-[#1E4D8C]">
<span className="text-sm font-semibold">3</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-[#1A2A3A]">Share job details</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Send role scope, shift, pay range, and interview stages via email.</p>
<div className="mt-3 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white px-3 py-1.5 text-xs font-medium text-[#1A2A3A]/90 hover:text-[#1E4D8C]" href="#contact">
                            Message
                            <iconify-icon className="text-base text-[#1E4D8C]" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#5B9BD5]/20 bg-white p-5">
<div className="flex items-start gap-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] border border-[#5B9BD5]/15 text-[#1E4D8C]">
<span className="text-sm font-semibold">4</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-[#1A2A3A]">Schedule next step</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Confirm interview time window and preferred contact method.</p>
<div className="mt-3 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full bg-[#1E4D8C] px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-[#1E4D8C]/20 hover:bg-[#173f73] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45" href="#contact" id="scheduleBtn">
                            Start scheduling
                            <iconify-icon className="text-base" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<button className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-white px-3 py-1.5 text-xs font-semibold text-[#1A2A3A] hover:bg-[#F4F7FA] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45" id="copyRecruiterNote" type="button">
                            Copy recruiter note
                            <iconify-icon className="text-base text-[#1E4D8C]" icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<span className="hidden text-xs font-medium text-[#1E4D8C]" id="copyNoteStatus">Copied</span>
</div>
</div>
</div>
</div>
</div>
<p className="mt-6 text-xs text-[#6B7B8D]">
                  Tip: Use the “Copy recruiter note” button to paste a ready-made message into email or LinkedIn.
                </p>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<div className="flex items-center justify-between gap-4 flex-wrap">
<p className="text-xs font-semibold text-[#6B7B8D]">Quick Recruiter Pack</p>
<div className="inline-flex items-center gap-2 rounded-full border border-[#5B9BD5]/25 bg-[#F4F7FA] px-4 py-2 text-xs font-medium text-[#6B7B8D]">
<span className="h-1.5 w-1.5 rounded-full bg-[#5B9BD5]"></span>
                    One glance
                  </div>
</div>
<div className="mt-5 grid gap-4">
<div className="rounded-2xl border border-[#5B9BD5]/15 bg-[#F4F7FA]/60 p-5">
<p className="text-xs font-semibold text-[#6B7B8D]">Best fit roles</p>
<p className="mt-2 text-sm font-semibold text-[#1A2A3A]">AR Specialist · AR Analyst · Medical Billing</p>
<p className="mt-1 text-xs text-[#6B7B8D]">US Healthcare AR, denials, claim follow-ups</p>
</div>
<div className="rounded-2xl border border-[#5B9BD5]/15 bg-[#F4F7FA]/60 p-5">
<p className="text-xs font-semibold text-[#6B7B8D]">Preferred contact</p>
<div className="mt-2 grid gap-2">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2A3A] hover:text-[#1E4D8C]" href="mailto:manjireemmhatre01@gmail.com">
<iconify-icon className="text-lg text-[#1E4D8C]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
    manjireemmhatre01@gmail.com
  </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A2A3A] hover:text-[#1E4D8C]" href="https://www.linkedin.com/in/manjiree-mhatre" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg text-[#1E4D8C]" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
    linkedin.com/in/manjiree-mhatre
  </a>
</div>
</div>
<div className="rounded-2xl border border-[#5B9BD5]/15 bg-[#F4F7FA]/60 p-5">
<p className="text-xs font-semibold text-[#6B7B8D]">Ready-to-send email subject</p>
<p className="mt-2 text-sm font-semibold text-[#1A2A3A]">Interview request — AR / Medical Billing</p>
<p className="mt-1 text-xs text-[#6B7B8D]">Includes role, shift, and interview slots.</p>
</div>
</div>
</div>
<div className="mt-6 rounded-3xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-6 sm:p-7 shadow-sm">
<div className="flex items-center justify-between gap-4 flex-wrap">
<p className="text-xs font-semibold text-[#6B7B8D]">Funnel outcome</p>
<iconify-icon className="text-xl text-[#1E4D8C]" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-4 text-sm text-[#1A2A3A]/90 leading-relaxed">
                  Recruiters can validate profile, send role details, and move to scheduling in one continuous flow—without hunting for links.
                </p>
</div>
</div>
</div>
<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
</div>
</div>
</section>
<section className="bg-[#F4F7FA] scroll-mt-28" id="contact">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="reveal opacity-0 translate-y-4" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="">
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A2A3A]">Contact</h2>
<p className="mt-2 text-sm text-[#6B7B8D] max-w-2xl">For roles, collaborations, or professional connections in healthcare billing and revenue cycle management.</p>
</div>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm">
<p className="text-xs font-semibold text-[#6B7B8D]">Contact Details</p>
<div className="mt-5 grid gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C] border border-[#5B9BD5]/15">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-xs font-semibold text-[#6B7B8D]">Email</p>
<a className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#1A2A3A] hover:text-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/40 rounded-lg" href="mailto:manjireemmhatre01@gmail.com">
          manjireemmhatre01@gmail.com
          <iconify-icon className="text-base text-[#5B9BD5]" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C] border border-[#5B9BD5]/15">
<iconify-icon className="text-xl" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-xs font-semibold text-[#6B7B8D]">LinkedIn</p>
<a className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#1A2A3A] hover:text-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/40 rounded-lg" href="https://www.linkedin.com/in/manjiree-mhatre" rel="noopener noreferrer" target="_blank">
          www.linkedin.com/in/manjiree-mhatre
          <iconify-icon className="text-base text-[#5B9BD5]" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F4F7FA] text-[#1E4D8C] border border-[#5B9BD5]/15">
<iconify-icon className="text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-xs font-semibold text-[#6B7B8D]">Location</p>
<p className="mt-1 text-sm font-semibold text-[#1A2A3A]">Mumbai, Maharashtra, India</p>
</div>
</div>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
<div className="mt-6 rounded-2xl border border-[#5B9BD5]/20 bg-[#F4F7FA] p-5">
<p className="text-xs font-semibold text-[#1E4D8C]">Availability</p>
<p className="mt-2 text-sm text-[#6B7B8D] leading-relaxed">
      Open to full-time opportunities and professional collaborations in healthcare billing and revenue cycle
      management.
    </p>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="rounded-3xl border border-[#5B9BD5]/20 bg-white p-6 sm:p-7 shadow-sm" id="contactForm">
<div className="flex items-center justify-between gap-4 flex-wrap">
<p className="text-xs font-semibold text-[#6B7B8D]">Send a Message</p>
<p className="hidden text-xs font-medium text-[#1E4D8C]" id="formStatus"></p>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-[#6B7B8D]" htmlFor="fullName">Full Name</label>
<input className="mt-2 w-full rounded-xl border border-[#5B9BD5]/25 bg-white px-4 py-3 text-sm text-[#1A2A3A] placeholder:text-[#6B7B8D]/70 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45 focus:border-[#5B9BD5]/45" id="fullName" name="fullName" placeholder="Your name" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-[#6B7B8D]" htmlFor="email">Email Address</label>
<input className="mt-2 w-full rounded-xl border border-[#5B9BD5]/25 bg-white px-4 py-3 text-sm text-[#1A2A3A] placeholder:text-[#6B7B8D]/70 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45 focus:border-[#5B9BD5]/45" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-[#6B7B8D]" htmlFor="subject">Subject</label>
<input className="mt-2 w-full rounded-xl border border-[#5B9BD5]/25 bg-white px-4 py-3 text-sm text-[#1A2A3A] placeholder:text-[#6B7B8D]/70 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45 focus:border-[#5B9BD5]/45" id="subject" name="subject" placeholder="Opportunity / Collaboration / Inquiry" required="" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-[#6B7B8D]" htmlFor="message">Message</label>
<textarea className="mt-2 w-full rounded-xl border border-[#5B9BD5]/25 bg-white px-4 py-3 text-sm text-[#1A2A3A] placeholder:text-[#6B7B8D]/70 focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45 focus:border-[#5B9BD5]/45" id="message" name="message" placeholder="Share a few details about the role, team, or what you’d like to discuss." required="" rows="6"></textarea>
</div>
<div className="sm:col-span-2">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E4D8C] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-[#1E4D8C]/20 hover:bg-[#173f73] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/45" type="submit">
                      Send Message
                      <iconify-icon className="text-lg" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="mt-3 text-xs text-[#6B7B8D]">
                      This form opens your email client with a pre-filled message for fast, reliable delivery.
                    </p>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-white">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
<div className="h-px w-full bg-gradient-to-r from-transparent via-[#5B9BD5]/25 to-transparent"></div>
<div className="flex flex-col sm:flex-row gap-4 mt-6 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs text-[#6B7B8D] text-center sm:text-left">© 2025 <span className="text-[#1A2A3A] font-semibold">Manjiree Mhatre</span>. All rights reserved.</p>
<div className="flex items-center gap-5 text-xs font-medium">
<a className="text-[#6B7B8D] hover:text-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/40 rounded-lg px-1 py-0.5" href="https://www.linkedin.com/in/manjiree-mhatre" rel="noopener noreferrer" target="_blank">LinkedIn</a>
<a className="text-[#6B7B8D] hover:text-[#1E4D8C] focus:outline-none focus:ring-2 focus:ring-[#5B9BD5]/40 rounded-lg px-1 py-0.5" href="mailto:manjireemmhatre01@gmail.com">Email</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
