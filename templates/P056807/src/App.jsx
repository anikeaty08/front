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



    // Initialize icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Toast utility
    const toast = (msg) => {
      const t = document.getElementById('toast');
      const m = document.getElementById('toastMsg');
      m.textContent = msg || 'Saved';
      t.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => t.classList.add('hidden'), 1800);
    };

    // Social connect buttons -> open login windows and mark connected (mock)
    const setStatus = (id, connected) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = connected ? 'Connected' : 'Disconnected';
      el.className = connected
        ? 'text-[11px] px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-700 bg-emerald-50'
        : 'text-[11px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 bg-slate-50';
    };

    const openAuth = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer,width=520,height=640');
    };

    document.getElementById('btnIgConnect').addEventListener('click', () => {
      openAuth('https://www.instagram.com/accounts/login/');
      setStatus('igStatus', true);
      toast('Instagram connected');
    });
    document.getElementById('btnFbConnect').addEventListener('click', () => {
      openAuth('https://www.facebook.com/login.php');
      setStatus('fbStatus', true);
      toast('Facebook connected');
    });
    document.getElementById('btnLiConnect').addEventListener('click', () => {
      openAuth('https://www.linkedin.com/login');
      setStatus('liStatus', true);
      toast('LinkedIn connected');
    });
    document.getElementById('btnWaConnect').addEventListener('click', () => {
      openAuth('https://web.whatsapp.com/');
      setStatus('waStatus', true);
      toast('WhatsApp linked');
    });

    document.getElementById('btnSaveSocial').addEventListener('click', () => toast('Social settings saved'));
    document.getElementById('btnSaveAll').addEventListener('click', () => toast('All changes saved'));

    // Modal controls
    const modal = document.getElementById('modalOverlay');
    const openers = [document.getElementById('openAddMember'), document.getElementById('openAddMember2')];
    const closeModal = () => { modal.classList.add('hidden'); };
    openers.forEach(btn => btn.addEventListener('click', () => { modal.classList.remove('hidden'); }));
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelAdd').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Avatar preview
    const avatarInput = document.getElementById('avatarInput');
    const previewAvatar = document.getElementById('previewAvatar');
    avatarInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        previewAvatar.src = url;
      }
    });

    // Add member submit (mock)
    document.getElementById('addMemberForm').addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
      toast('Invitation sent');
    });

    // Team search filter
    const teamSearch = document.getElementById('teamSearch');
    const teamGrid = document.getElementById('teamGrid');
    teamSearch?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = teamGrid.querySelectorAll('[data-name]');
      cards.forEach(card => {
        const hit = card.getAttribute('data-name').includes(q);
        card.classList.toggle('hidden', !hit);
      });
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
      
<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight text-[13px] leading-none font-semibold">AC</div>
<div>
<h1 className="text-[20px] sm:text-[22px] tracking-tight font-semibold">Configuration</h1>
<p className="text-[12px] text-slate-500">Connect social platforms and manage your team</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-slate-800 active:bg-slate-900 transition-colors outline-none ring-1 ring-black/0 hover:ring-black/5" id="btnSaveAll">
<i aria-hidden="true" className="w-4 h-4" data-lucide="save"></i>
          Save changes
        </button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<section className="lg:col-span-2">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="p-5 border-b border-slate-200">
<div className="flex items-start justify-between">
<div>
<h2 className="text-[18px] sm:text-[20px] tracking-tight font-semibold">Social platforms</h2>
<p className="text-[13px] text-slate-500 mt-1">Connect and control visibility of your social profiles.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="text-[12px] text-slate-500">Visibility</span>
</div>
</div>
</div>
<div className="divide-y divide-slate-200">

<div className="p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg grid place-items-center" style={{background: '#FEE2E2'}}>
<i className="w-5 h-5" data-lucide="instagram" style={{color: '#E11D48'}}></i>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium">Instagram</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 bg-slate-50" id="igStatus">Disconnected</span>
</div>
<p className="text-[12px] text-slate-500 mt-0.5">Share photos and updates.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" id="igVisible" type="checkbox"/>
<span className="w-11 h-6 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="grid sm:grid-cols-[1fr_auto_auto] gap-3 mt-4">

<div className="relative">
<div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
<span className="text-[12px] text-slate-600">We’ll open a secure login to connect your account.</span>
</div>
</div>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors" id="btnIgConnect">
<i className="w-4 h-4" data-lucide="link-2"></i> Connect
                </button>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="external-link"></i> Preview
                </button>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-slate-500">
<div className="flex items-center gap-2">
<input className="peer sr-only" id="igShow" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="igShow">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Show on website</span>
</div>
<div className="flex items-center gap-2">
<input className="peer sr-only" id="igDm" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="igDm">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Enable DMs</span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg grid place-items-center" style={{background: '#DBEAFE'}}>
<i className="w-5 h-5" data-lucide="facebook" style={{color: '#2563EB'}}></i>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium">Facebook</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 bg-slate-50" id="fbStatus">Disconnected</span>
</div>
<p className="text-[12px] text-slate-500 mt-0.5">Engage your community.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" id="fbVisible" type="checkbox"/>
<span className="w-11 h-6 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="grid sm:grid-cols-[1fr_auto_auto] gap-3 mt-4">

<div className="relative">
<div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
<span className="text-[12px] text-slate-600">Authenticate via Facebook’s login popup.</span>
</div>
</div>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors" id="btnFbConnect">
<i className="w-4 h-4" data-lucide="link-2"></i> Connect
                </button>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="external-link"></i> Preview
                </button>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-slate-500">
<div className="flex items-center gap-2">
<input className="peer sr-only" id="fbShow" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="fbShow">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Show on website</span>
</div>
<div className="flex items-center gap-2">
<input className="peer sr-only" id="fbMsg" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="fbMsg">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Enable Messenger</span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg grid place-items-center" style={{background: '#E0E7FF'}}>
<i className="w-5 h-5" data-lucide="linkedin" style={{color: '#3730A3'}}></i>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium">LinkedIn</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 bg-slate-50" id="liStatus">Disconnected</span>
</div>
<p className="text-[12px] text-slate-500 mt-0.5">Build your professional brand.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" id="liVisible" type="checkbox"/>
<span className="w-11 h-6 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="grid sm:grid-cols-[1fr_auto_auto] gap-3 mt-4">

<div className="relative">
<div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
<span className="text-[12px] text-slate-600">Connect via LinkedIn’s OAuth window.</span>
</div>
</div>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors" id="btnLiConnect">
<i className="w-4 h-4" data-lucide="link-2"></i> Connect
                </button>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="external-link"></i> Preview
                </button>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-slate-500">
<div className="flex items-center gap-2">
<input className="peer sr-only" id="liShow" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="liShow">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Show on website</span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg grid place-items-center" style={{background: '#DCFCE7'}}>
<i className="w-5 h-5" data-lucide="whatsapp" style={{color: '#16A34A'}}></i>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium">WhatsApp</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 bg-slate-50" id="waStatus">Disconnected</span>
</div>
<p className="text-[12px] text-slate-500 mt-0.5">Let customers reach you instantly.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" id="waVisible" type="checkbox"/>
<span className="w-11 h-6 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="grid sm:grid-cols-[1fr_auto_auto] gap-3 mt-4">

<div className="relative">
<div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
<span className="text-[12px] text-slate-600">Link your WhatsApp Business by scanning a QR code.</span>
</div>
</div>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors" id="btnWaConnect">
<i className="w-4 h-4" data-lucide="link-2"></i> Connect
                </button>
<button className="self-end inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="message-circle"></i> Test
                </button>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-slate-500">
<div className="flex items-center gap-2">
<input className="peer sr-only" id="waShow" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="waShow">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Show on website</span>
</div>
<div className="flex items-center gap-2">
<input className="peer sr-only" id="waBtn" type="checkbox"/>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="waBtn">
<span className="w-9 h-5 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-4"></span>
</label>
<span>Show floating button</span>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
<div className="text-[12px] text-slate-500">Changes are saved per platform.</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i> Reset
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm hover:bg-slate-800" id="btnSaveSocial">
<i className="w-4 h-4" data-lucide="save"></i> Save Social
              </button>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-1">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-200 flex items-center justify-between gap-3">
<div>
<h3 className="text-[18px] tracking-tight font-semibold">Team</h3>
<p className="text-[12px] text-slate-500 mt-1">Manage collaborators and permissions.</p>
</div>
<div className="flex items-center gap-2">

<div className="hidden sm:flex items-center rounded-md border border-slate-200 bg-white px-2.5 py-1.5">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-28 ml-2 text-sm outline-none placeholder:text-slate-400" id="teamSearch" placeholder="Search" type="text"/>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50" id="openAddMember">
<i className="w-4 h-4" data-lucide="user-plus"></i> Add
              </button>
</div>
</div>
<div className="p-5 grid grid-cols-1 gap-4" id="teamGrid">

<div className="group relative border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow" data-name="alex carter owner">
<div className="flex items-start gap-3">
<div className="relative">
<img alt="Member" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>

<span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="truncate">
<div className="flex items-center gap-2">
<p className="font-medium truncate">Alex Carter</p>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600">Owner</span>
<span className="text-[10px] px-1 py-0.5 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">2FA</span>
</div>
<p className="text-[12px] text-slate-500 truncate">alex@example.com • Active now</p>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" title="Edit">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" title="More">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
<div className="mt-2 flex items-center gap-2 text-[12px] text-slate-500">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                    Full access
                  </div>
</div>
</div>
</div>
<div className="group relative border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow" data-name="sofia nguyen admin">
<div className="flex items-start gap-3">
<div className="relative">
<img alt="Member" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="truncate">
<div className="flex items-center gap-2">
<p className="font-medium truncate">Sofia Nguyen</p>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600">Admin</span>
</div>
<p className="text-[12px] text-slate-500 truncate">sofia@example.com • Active 2h ago</p>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" title="Edit">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" title="More">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
<div className="mt-2 flex items-center gap-2 text-[12px] text-slate-500">
<i className="w-4 h-4" data-lucide="key"></i>
                    Content + Analytics
                  </div>
</div>
</div>
</div>
<div className="group relative border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow" data-name="jordan lee editor">
<div className="flex items-start gap-3">
<div className="relative">
<img alt="Member" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-slate-300 ring-2 ring-white"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="truncate">
<div className="flex items-center gap-2">
<p className="font-medium truncate">Jordan Lee</p>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600">Editor</span>
</div>
<p className="text-[12px] text-slate-500 truncate">jordan@example.com • Offline</p>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" title="Edit">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" title="More">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
<div className="mt-2 flex items-center gap-2 text-[12px] text-slate-500">
<i className="w-4 h-4" data-lucide="file-text"></i>
                    Content only
                  </div>
</div>
</div>
</div>

<button className="rounded-lg border border-dashed border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-white p-4 flex items-center justify-center gap-2 text-sm text-slate-600 transition-colors" id="openAddMember2">
<i className="w-4 h-4" data-lucide="user-plus"></i>
              Add team member
            </button>
</div>
<div className="p-4 border-t border-slate-200 bg-slate-50/60">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[12px] text-slate-500">
<i className="w-4 h-4" data-lucide="link"></i>
                Invite link
              </div>
<div className="flex items-center gap-2">
<div className="hidden sm:block text-[12px] text-slate-500">Expires in 24h</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-slate-50">
                  Copy
                  <i className="w-3.5 h-3.5" data-lucide="clipboard"></i>
</button>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="modalOverlay">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full sm:max-w-lg bg-white border border-slate-200 rounded-xl shadow-xl">
<div className="p-5 border-b border-slate-200 flex items-center justify-between">
<div>
<h4 className="text-[18px] tracking-tight font-semibold">Add team member</h4>
<p className="text-[12px] text-slate-500 mt-1">Invite a teammate and set permissions.</p>
</div>
<button className="p-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200" id="closeModal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-4" id="addMemberForm">
<div className="flex items-center gap-4">
<img alt="Avatar" className="h-12 w-12 rounded-full object-cover ring-1 ring-slate-200" id="previewAvatar" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;h=120&amp;fit=crop"/>
<label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
<i className="w-4 h-4" data-lucide="upload"></i>
<span>Upload avatar</span>
<input accept="image/*" className="hidden" id="avatarInput" type="file"/>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-[12px] text-slate-500 mb-1">Full name</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Jamie Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[12px] text-slate-500 mb-1">Email</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="jamie@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[12px] text-slate-500 mb-1">Role</label>
<div className="relative">
<select className="appearance-none w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm outline-none focus:ring-2 focus:ring-slate-900/10">
<option>Admin</option>
<option>Editor</option>
<option>Viewer</option>
</select>
<i className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-[12px] text-slate-500 mb-1">Phone</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="+1 555 555 5555" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2.5">
<div>
<div className="text-sm font-medium">Content</div>
<div className="text-[12px] text-slate-500">Create and edit posts</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-10 h-5 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2.5">
<div>
<div className="text-sm font-medium">Analytics</div>
<div className="text-[12px] text-slate-500">View performance</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-10 h-5 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2.5 sm:col-span-2">
<div>
<div className="text-sm font-medium">Billing</div>
<div className="text-[12px] text-slate-500">Manage subscriptions</div>
</div>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<span className="w-10 h-5 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors"></span>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5"></span>
</label>
</div>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-50" id="cancelAdd" type="button">
              Cancel
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800" type="submit">
<i className="w-4 h-4" data-lucide="user-plus"></i>
              Invite member
            </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-md bg-slate-900 text-white px-3.5 py-2.5 text-sm shadow-lg flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
<span id="toastMsg">Saved</span>
</div>
</div>



    </>
  );
}
