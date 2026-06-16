import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        const qs = (s, p = document) => p.querySelector(s);
        const qsa = (s, p = document) => Array.from(p.querySelectorAll(s));

        // Role switching (user/admin)
        const btnUser = qs('#btn-role-user');
        const btnAdmin = qs('#btn-role-admin');
        let adminMode = false;
        const setRole = (isAdmin) => {
          adminMode = isAdmin;
          qsa('[data-admin-only]').forEach(el => el.hidden = !isAdmin);
          // Toggle button styles
          if (isAdmin) {
            btnAdmin.classList.add('bg-zinc-800','text-white');
            btnUser.classList.remove('bg-zinc-800','text-white');
            btnUser.classList.add('text-zinc-300');
          } else {
            btnUser.classList.add('bg-zinc-800','text-white');
            btnAdmin.classList.remove('bg-zinc-800','text-white');
            btnAdmin.classList.add('text-zinc-300');
          }
        };
        btnUser.addEventListener('click', () => setRole(false));
        btnAdmin.addEventListener('click', () => setRole(true));

        // Profile modal
        const profileModal = qs('#profile-modal');
        const openProfileBtn = qs('#open-profile-settings');
        const closeProfileBtn = qs('#close-profile');
        openProfileBtn.addEventListener('click', () => {
          profileModal.classList.remove('hidden');
          profileModal.classList.add('flex');
          // Prefill a few fields if empty
          qs('#pf-name').value = qs('#me-name').textContent || '';
        });
        closeProfileBtn.addEventListener('click', () => {
          profileModal.classList.add('hidden');
          profileModal.classList.remove('flex');
        });

        const pfStatus = qs('#pf-status');
        const profileChip = qs('#profile-status-chip');
        const profilePill = qs('#profile-status-pill');
        const pfSave = qs('#pf-save');
        const pfSubmit = qs('#pf-submit');
        const pfApprove = qs('#pf-approve');
        const approveProfileHeaderBtn = qs('#approve-profile');

        const setProfileState = (state) => {
          // state: 'Draft' | 'Pending' | 'Approved'
          pfStatus.textContent = state;
          if (state === 'Approved') {
            profileChip.textContent = 'Profile: Approved';
            profileChip.classList.remove('bg-zinc-800','text-zinc-300');
            profileChip.classList.add('bg-emerald-500','text-white');
            profilePill.textContent = 'Approved';
            profilePill.classList.remove('bg-zinc-200','text-zinc-700');
            profilePill.classList.add('bg-emerald-100','text-emerald-800');
          } else if (state === 'Pending') {
            profileChip.textContent = 'Profile: Pending';
            profileChip.classList.remove('bg-emerald-500','text-white');
            profileChip.classList.add('bg-zinc-800','text-zinc-300');
            profilePill.textContent = 'Pending approval';
            profilePill.classList.remove('bg-emerald-100','text-emerald-800');
            profilePill.classList.add('bg-zinc-200','text-zinc-700');
          } else {
            profileChip.textContent = 'Profile: Draft';
            profileChip.classList.remove('bg-emerald-500','text-white');
            profileChip.classList.add('bg-zinc-800','text-zinc-300');
            profilePill.textContent = 'Pending approval';
            profilePill.classList.remove('bg-emerald-100','text-emerald-800');
            profilePill.classList.add('bg-zinc-200','text-zinc-700');
          }
        };
        pfSave.addEventListener('click', () => setProfileState('Draft'));
        pfSubmit.addEventListener('click', () => setProfileState('Pending'));
        pfApprove.addEventListener('click', () => setProfileState('Approved'));
        approveProfileHeaderBtn.addEventListener('click', () => setProfileState('Approved'));

        // Interest card pills
        qsa('.pill').forEach(pill => {
          pill.addEventListener('click', () => {
            qsa('.pill').forEach(p => {
              p.classList.remove('bg-white','text-zinc-900');
              p.classList.add('text-white/90');
            });
            pill.classList.add('bg-white','text-zinc-900');
            pill.classList.remove('text-white/90');
          });
        });

        // Integrations: tabs
        const tabWebhook = qs('#tab-webhook');
        const tabEmbed = qs('#tab-embed');
        const panelWebhook = qs('#panel-webhook');
        const panelEmbed = qs('#panel-embed');
        const setIntegrationTab = (tab) => {
          if (tab === 'webhook') {
            panelWebhook.classList.remove('hidden');
            panelEmbed.classList.add('hidden');
            tabWebhook.classList.add('bg-zinc-900','text-white');
            tabEmbed.classList.remove('bg-zinc-900','text-white');
            tabEmbed.classList.add('bg-zinc-100');
          } else {
            panelEmbed.classList.remove('hidden');
            panelWebhook.classList.add('hidden');
            tabEmbed.classList.add('bg-zinc-900','text-white');
            tabWebhook.classList.remove('bg-zinc-900','text-white');
            tabWebhook.classList.add('bg-zinc-100');
          }
        };
        tabWebhook.addEventListener('click', () => setIntegrationTab('webhook'));
        tabEmbed.addEventListener('click', () => setIntegrationTab('embed'));

        // Webhook endpoint + sample
        const endpointEl = qs('#webhook-endpoint');
        const lastDeliveryEl = qs('#webhook-last');
        const copyEndpointBtn = qs('#copy-endpoint');
        const webhookJsonEl = qs('#webhook-json');
        const loadSampleBtn = qs('#load-sample');
        const applyWebhookBtn = qs('#apply-webhook');
        const webhookFeedback = qs('#webhook-feedback');

        const endpoint = (location.origin || 'https://example.com') + '/api/webhooks/orders';
        endpointEl.textContent = endpoint;

        copyEndpointBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(endpoint);
            copyEndpointBtn.textContent = 'Copied';
            setTimeout(() => { copyEndpointBtn.textContent = 'Copy'; }, 1200);
          } catch {}
        });

        const samplePayload = {
          type: 'order.created',
          data: {
            id: 'ord_2A9F3C',
            reference: 'INV-94321',
            customer: { name: 'Avery Nolan', email: 'avery@example.com' },
            payment: { method: 'card', status: 'paid' },
            totals: { currency: 'USD', subtotal: 21000, tax: 1350, shipping: 150, grand_total: 22500 }
          },
          created: new Date().toISOString()
        };

        loadSampleBtn.addEventListener('click', () => {
          webhookJsonEl.value = JSON.stringify(samplePayload, null, 2);
        });

        const pvOrder = qs('#pv-order');
        const pvRef = qs('#pv-ref');
        const pvCustomer = qs('#pv-customer');
        const pvPayment = qs('#pv-payment');
        const pvTotals = qs('#pv-totals');
        const lastOrderBadge = qs('#last-order');
        const lastOrderText = qs('#last-order-text');

        applyWebhookBtn.addEventListener('click', () => {
          try {
            const obj = JSON.parse(webhookJsonEl.value || '{}');
            const d = obj.data || {};
            pvOrder.textContent = d.id || '—';
            pvRef.textContent = d.reference || '—';
            const cname = d.customer?.name || '—';
            pvCustomer.textContent = cname;
            pvPayment.textContent = [d.payment?.method, d.payment?.status].filter(Boolean).join(' • ') || '—';
            const t = d.totals || {};
            const total = t.grand_total != null ? t.grand_total : (t.subtotal || 0) + (t.tax || 0) + (t.shipping || 0);
            pvTotals.textContent = `${(t.currency || 'USD')} ${Number(total).toLocaleString()}`;
            lastDeliveryEl.textContent = new Date().toLocaleString();
            lastOrderText.textContent = `Order ${d.id || ''} • ${cname} — ${(t.currency || 'USD')} ${Number(total).toLocaleString()}`;
            lastOrderBadge.classList.remove('hidden');
            webhookFeedback.classList.remove('hidden');
            setTimeout(() => webhookFeedback.classList.add('hidden'), 1500);
          } catch (e) {
            webhookFeedback.textContent = 'Invalid JSON';
            webhookFeedback.classList.remove('hidden');
            webhookFeedback.classList.remove('text-emerald-600');
            webhookFeedback.classList.add('text-red-600');
            setTimeout(() => {
              webhookFeedback.classList.add('hidden');
              webhookFeedback.textContent = 'Applied';
              webhookFeedback.classList.remove('text-red-600');
              webhookFeedback.classList.add('text-emerald-600');
            }, 1800);
          }
        });

        // Embed code generation + modal
        const embedTextarea = qs('#embed-code');
        const embedModalTextarea = qs('#embed-modal-code');
        const copyEmbedBtn = qs('#copy-embed');
        const copyEmbedModalBtn = qs('#copy-embed-modal');
        const openEmbedBtn = qs('#open-embed');
        const embedModal = qs('#embed-modal');
        const closeEmbedBtn = qs('#close-embed');

        const currentUserParam = 'jordan';
        const embedCode = `<iframe src="${location.origin + location.pathname}?
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="h-screen bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e249747-11d9-4c29-9017-590f07779c2e_3840w.jpg)] bg-cover pt-5 pr-5 pb-5 pl-5">
<div className="h-full overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] max-w-7xl bg-white rounded-[30px] ml-auto mr-auto">
<div className="h-full pt-2 pr-2 pb-2 pl-2">
<div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-2">

<aside className="lg:col-span-3 md:p-5 flex flex-col gap-5 text-zinc-100 bg-zinc-950 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex text-zinc-900 bg-green-400 rounded-full items-center justify-center">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg tracking-tight font-medium font-geist">Nova Sales</span>
</div>
<button className="p-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 transition" title="Shortcuts">
<svg className="lucide lucide-command h-5 w-5" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</button>
</div>

<div aria-label="Role" className="rounded-2xl bg-zinc-900 p-1 flex" role="tablist">
<button className="flex-1 text-xs font-geist px-3 py-1.5 rounded-xl bg-zinc-800 text-white" data-role="user" id="btn-role-user">My dashboard</button>
<button className="flex-1 text-xs font-geist px-3 py-1.5 rounded-xl text-zinc-300 hover:text-white" data-role="admin" id="btn-role-admin">Super Admin</button>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-zinc-900 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400 font-geist">Worklist</span>
<span className="h-2 w-2 rounded-full bg-green-400"></span>
</div>
<div className="mt-2 text-3xl tracking-tight font-jakarta font-light" id="kpi-worklist">6</div>
</div>
<div className="rounded-2xl bg-zinc-900 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400 font-geist">New leads</span>
<span className="h-2 w-2 rounded-full bg-orange-400"></span>
</div>
<div className="mt-2 text-3xl tracking-tight font-jakarta font-light" id="kpi-newleads">27</div>
</div>
<div className="rounded-2xl bg-zinc-900 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400 font-geist">Updates</span>
<span className="h-2 w-2 rounded-full bg-cyan-400"></span>
</div>
<div className="mt-2 text-3xl tracking-tight font-jakarta font-light" id="kpi-updates">22</div>
</div>
<div className="rounded-2xl bg-zinc-900 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-400 font-geist">Assigned</span>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</div>
<div className="mt-2 text-3xl tracking-tight font-jakarta font-light" id="kpi-assigned">3</div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-400 font-geist">Menu</span>
</div>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
<svg className="lucide lucide-home h-5 w-5 text-zinc-300" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-sm text-zinc-100 font-geist">Home</span>
</button>
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-zinc-900 transition">
<svg className="lucide lucide-users h-5 w-5 text-zinc-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-zinc-100 font-geist">Leads</span>
</button>
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-zinc-900 transition">
<svg className="lucide lucide-calendar h-5 w-5 text-zinc-300" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm text-zinc-100 font-geist">Calendar</span>
</button>
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-zinc-900 transition">
<svg className="lucide lucide-inbox h-5 w-5 text-zinc-300" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="text-sm text-zinc-100 font-geist">Inbox</span>
</button>
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-zinc-900 transition" id="open-profile-settings">
<svg className="lucide lucide-settings h-5 w-5 text-zinc-300" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm text-zinc-100 font-geist">Settings</span>
</button>
</div>
</div>

<div className="flex flex-col gap-2" data-admin-only="" hidden="">
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-400 font-geist">Users</span>
<span className="text-xs text-zinc-500 font-geist">(Snapshot)</span>
</div>
<div className="space-y-2">
<button className="w-full px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 flex items-center gap-3" data-user-select="avery">
<img alt="Avery" className="h-7 w-7 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg"/>
<div className="flex-1 text-left">
<div className="text-sm font-geist">Avery Nolan</div>
<div className="text-xs text-zinc-400 font-geist">Nordbyte</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500 text-white font-geist">Live</span>
</button>
<button className="w-full px-3 py-2 rounded-xl hover:bg-zinc-900 flex items-center gap-3" data-user-select="maya">
<img alt="Maya" className="h-7 w-7 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d72eb51-d86e-431b-ad62-97cdf574a592_320w.jpg"/>
<div className="flex-1 text-left">
<div className="text-sm font-geist">Maya Chen</div>
<div className="text-xs text-zinc-400 font-geist">Lunatech</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-orange-500 text-white font-geist">Sync</span>
</button>
<button className="w-full px-3 py-2 rounded-xl hover:bg-zinc-900 flex items-center gap-3" data-user-select="leo">
<img alt="Leo" className="h-7 w-7 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d72202a6-6f82-40bf-84db-846e9adc396a_320w.jpg"/>
<div className="flex-1 text-left">
<div className="text-sm font-geist">Leo Kramer</div>
<div className="text-xs text-zinc-400 font-geist">Orbital</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500 text-zinc-900 font-geist">Update</span>
</button>
</div>
</div>

<div className="mt-1">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-list-checks h-5 w-5 text-zinc-300" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
<h3 className="text-sm font-medium tracking-tight font-geist">Worklist</h3>
</div>
<button className="text-xs text-zinc-400 hover:text-zinc-200 font-geist">View all</button>
</div>
<div className="space-y-2 max-h-[28rem] overflow-y-auto pr-1">

<div className="rounded-2xl p-3 bg-green-400 text-zinc-900">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94f325d2-00ce-48ec-9c3d-a87ff77bb836_320w.jpg"/>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight font-geist">Avery Nolan</div>
<div className="text-xs text-zinc-700 font-geist">Product Manager • Nordbyte</div>
</div>
<span className="px-2 py-0.5 rounded-full text-xs bg-white/80 font-geist">High</span>
</div>
<div className="mt-2 text-xs text-zinc-700 font-geist">Awaiting our proposal</div>
</div>

<div className="rounded-2xl p-3 bg-zinc-900/70">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d72eb51-d86e-431b-ad62-97cdf574a592_320w.jpg"/>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight text-zinc-100 font-geist">Maya Chen</div>
<div className="text-xs text-zinc-400 font-geist">Marketing Lead • Lunatech</div>
</div>
<span className="px-2 py-0.5 rounded-full text-xs bg-orange-400 text-white font-geist">High</span>
</div>
<div className="mt-2 text-xs text-zinc-400 font-geist">Awaiting our proposal</div>
</div>

<div className="rounded-2xl p-3 bg-zinc-900/70">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d72202a6-6f82-40bf-84db-846e9adc396a_320w.jpg"/>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight text-zinc-100 font-geist">Leo Kramer</div>
<div className="text-xs text-zinc-400 font-geist">CEO • Orbital</div>
</div>
<span className="px-2 py-0.5 rounded-full text-xs bg-cyan-400 text-zinc-900 font-geist">Mid</span>
</div>
<div className="mt-2 text-xs text-zinc-400 font-geist">Phone call</div>
</div>

</div>
</div>

<div className="mt-auto flex items-center gap-3 rounded-2xl bg-zinc-900 p-3">
<img alt="me" className="h-9 w-9 rounded-full object-cover" id="me-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b42a4dfd-8458-407e-a755-f3d75cdd369b_320w.jpg"/>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight font-geist" id="me-name">Jordan Lake</div>
<div className="text-xs text-zinc-400 font-geist">Account Executive</div>
</div>
<span className="px-2 py-0.5 rounded-full text-[11px] bg-zinc-800 text-zinc-300 font-geist" id="profile-status-chip">Profile: Pending</span>
<button className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700" title="Log out">
<svg className="lucide lucide-log-out h-5 w-5" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</aside>

<main className="lg:col-span-6 flex flex-col gap-2 overflow-y-auto">

<section className="rounded-3xl bg-zinc-50 p-4 md:p-6 border border-zinc-200/50">
<div className="flex items-start gap-4 md:gap-6">
<img alt="lead" className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover" id="lead-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg"/>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-2xl md:text-3xl tracking-tight font-jakarta font-light" id="lead-name">Avery Nolan</h1>
<span className="px-2.5 py-1 rounded-full text-xs bg-orange-400 text-white font-geist">High</span>
<span className="px-2.5 py-1 rounded-full text-xs bg-cyan-300 text-zinc-900 font-geist">Warm</span>
<span className="px-2.5 py-1 rounded-full text-xs bg-zinc-200 text-zinc-700 font-geist" id="profile-status-pill">Pending approval</span>
<button className="px-2 py-1 rounded-full text-xs bg-emerald-500 text-white font-geist hover:brightness-95" data-admin-only="" hidden="" id="approve-profile">Approve</button>
</div>
<div className="mt-2 grid grid-cols-1 gap-2 text-sm text-zinc-600">
<div className="font-geist" id="lead-title-company">Product Manager • Nordbyte (2,100 employees)</div>
<div className="font-geist" id="lead-phone">(402) 555‑0146</div>
<div className="font-geist" id="lead-address">3538 Copper Ridge Dr, Boise, ID</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1">
<img alt="mgr" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e7842fa-2930-4398-a1b1-829010b57b42_320w.jpg"/>
<span className="text-xs text-zinc-700 font-geist">Manager</span>
<span className="text-xs font-medium font-geist">M. Ruiz</span>
</div>
<div className="flex items-center gap-2">
<button className="h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center">
<svg className="lucide lucide-phone h-5 w-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
<button className="h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</button>
<button className="h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 hidden sm:flex items-center justify-center">
<svg className="lucide lucide-paperclip h-5 w-5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
<button className="text-white font-geist bg-zinc-900 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">Timeline</button>
<button className="px-3 py-1.5 rounded-full hover:bg-zinc-100 font-geist">Deal #A-239462</button>
<button className="px-3 py-1.5 rounded-full hover:bg-zinc-100 font-geist">Summary</button>
<button className="px-3 py-1.5 rounded-full hover:bg-zinc-100 font-geist">Analytics</button>
<button className="px-3 py-1.5 rounded-full hover:bg-zinc-100 font-geist">Details</button>
<button className="px-3 py-1.5 rounded-full hover:bg-zinc-100 font-geist">Files</button>
<button className="px-3 py-1.5 rounded-full hover:bg-zinc-100 font-geist">History</button>
<div className="ml-auto flex items-center gap-2">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-9 pr-3 py-1.5 rounded-full bg-zinc-100 text-sm outline-none focus:ring-2 ring-zinc-200" placeholder="Search"/>
</div>
<button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200" id="open-embed">
<svg className="lucide lucide-code h-4 w-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</button>
<button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200" title="Filter">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>

<div className="mt-3 hidden" id="last-order">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-xs text-zinc-700 font-geist">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v4"></path><path d="M18 2v4"></path><rect height="14" rx="2" width="18" x="3" y="6"></rect><path d="M3 10h18"></path></svg>
<span className="font-geist" id="last-order-text">Order #</span>
</span>
</div>
</section>

<section className="space-y-3">
<div className="rounded-3xl bg-zinc-50 p-4 md:p-5 border border-zinc-200/50 flex gap-4">
<div className="w-14 shrink-0 flex flex-col items-center">
<span className="text-xs text-zinc-500 font-geist">12 May</span>
<span className="mt-1 h-7 w-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</span>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-base md:text-lg tracking-tight font-semibold font-geist">Information sent to the customer</h3>
<span className="px-2 py-0.5 rounded-full text-xs bg-zinc-100 font-geist">M. Ruiz</span>
<span className="px-2 py-0.5 rounded-full text-xs bg-cyan-100 text-cyan-700 font-geist">Discovery</span>
</div>
<p className="mt-1 text-sm text-zinc-600 font-geist">Shared comparison matrix and product overview. Scheduled follow-up for Friday.</p>
</div>
<button className="self-start p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200" title="Open">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="rounded-3xl bg-zinc-50 p-4 md:p-5 border border-zinc-200/50 flex gap-4">
<div className="w-14 shrink-0 flex flex-col items-center">
<span className="text-xs text-zinc-500 font-geist">15 May</span>
<span className="mt-1 h-7 w-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<svg className="lucide lucide-handshake h-4 w-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</span>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-base md:text-lg tracking-tight font-semibold font-geist">Gathering additional requirements</h3>
<span className="px-2 py-0.5 rounded-full text-xs bg-zinc-100 font-geist">M. Ruiz</span>
<span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-700 font-geist">Negotiation</span>
</div>
<p className="mt-1 text-sm text-zinc-600 font-geist">Client is considering the team plan. Waiting on internal approval for budget expansion.</p>
</div>
<button className="self-start p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200" title="Open">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</section>

<section className="rounded-3xl bg-zinc-50 p-4 md:p-5 border border-zinc-200/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="lead" className="h-8 w-8 rounded-full object-cover" id="chat-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg"/>
<div className="text-sm">
<span className="font-medium font-geist" id="chat-name">Avery Nolan</span>
<span className="ml-2 text-xs text-emerald-600 font-geist">Online</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200">
<svg className="lucide lucide-phone-call h-4 w-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200">
<svg className="lucide lucide-video h-4 w-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</button>
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="max-w-[80%] rounded-2xl bg-zinc-100 p-3 text-sm font-geist">
                    Hey, how are you?
                    <div className="mt-1 text-[11px] text-zinc-500 font-geist">9:20 am</div>
</div>
<div className="max-w-[80%] text-sm text-zinc-100 font-geist bg-zinc-900 rounded-2xl ml-auto pt-3 pr-3 pb-3 pl-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    We reviewed your notes and prepared a draft proposal. Sending it shortly.
                    <div className="mt-1 text-[11px] text-zinc-400 font-geist">9:30 am</div>
</div>
<div className="max-w-[80%] rounded-2xl bg-zinc-100 p-3 text-sm font-geist">
                    Great—please include payment schedule and rollout timing.
                    <div className="mt-1 text-[11px] text-zinc-500 font-geist">9:31 am</div>
</div>
</div>
<div className="mt-4 flex items-end gap-2">
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200">
<svg className="lucide lucide-paperclip h-5 w-5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 hidden sm:flex">
<svg className="lucide lucide-image h-5 w-5" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<div className="flex-1">
<input className="w-full rounded-2xl bg-zinc-100 px-4 py-3 text-sm outline-none focus:ring-2 ring-zinc-200" placeholder="Enter message"/>
</div>
<button className="h-11 w-11 rounded-full bg-green-400 text-zinc-900 flex items-center justify-center hover:brightness-95">
<svg className="lucide lucide-send h-5 w-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</section>
</main>

<aside className="lg:col-span-3 flex flex-col gap-2">

<div className="rounded-3xl p-4 md:p-5 bg-zinc-900 text-white" data-admin-only="" hidden="">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold font-geist">Snapshots</h3>
<p className="text-sm text-white/70 mt-1 font-geist">Open any user’s dashboard</p>
</div>
<button className="p-2 rounded-xl bg-white/10 hover:bg-white/20" id="refresh-snapshots" title="Refresh">
<svg className="lucide lucide-refresh-ccw h-5 w-5" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v6h6"></path><path d="M21 12A9 9 0 1 0 6 5.3"></path><path d="M21 22v-6h-6"></path></svg>
</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<button className="rounded-2xl bg-white/10 hover:bg-white/20 p-3 flex flex-col items-center" data-user-select="avery">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d84440c-f8f5-4db9-aa0b-0b4e3512a162_320w.jpg"/>
<span className="mt-2 text-xs font-geist">Avery</span>
</button>
<button className="rounded-2xl bg-white/10 hover:bg-white/20 p-3 flex flex-col items-center" data-user-select="maya">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d72eb51-d86e-431b-ad62-97cdf574a592_320w.jpg"/>
<span className="mt-2 text-xs font-geist">Maya</span>
</button>
<button className="rounded-2xl bg-white/10 hover:bg-white/20 p-3 flex flex-col items-center" data-user-select="leo">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d72202a6-6f82-40bf-84db-846e9adc396a_320w.jpg"/>
<span className="mt-2 text-xs font-geist">Leo</span>
</button>
</div>
</div>

<div className="rounded-3xl p-4 md:p-5 bg-orange-500 text-white">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg tracking-tight font-semibold font-geist">Interested in AeroPress Kit</h3>
<p className="text-sm text-white/80 mt-1 font-geist">Brew bundle + filters</p>
</div>
<button className="p-2 rounded-xl bg-white/20 hover:bg-white/30">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>

<div className="mt-4 flex items-center gap-2 bg-white/15 p-1 rounded-full">
<button className="pill active flex-1 px-3 py-1.5 rounded-full text-sm bg-white text-zinc-900 font-geist" data-pill="negotiation">Negotiation</button>
<button className="pill flex-1 px-3 py-1.5 rounded-full text-sm text-white/90 font-geist" data-pill="closed">Close</button>
</div>
<div className="mt-5">
<div className="text-xs uppercase tracking-wide text-white/70 font-geist">Potential profit</div>
<div className="mt-1 text-3xl tracking-tight font-jakarta font-light">$ 23,500</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist">Client's portrait</span>
</li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm font-geist">Similar successful cases</span>
</li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-minus h-3.5 w-3.5" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
<span className="text-sm font-geist">Low budget risk</span>
</li>
</ul>
</div>

<div className="rounded-3xl p-4 md:p-5 bg-cyan-400 text-zinc-900">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg tracking-tight font-semibold font-geist">Task</h3>
<p className="text-sm text-zinc-700 mt-1 font-geist">Send proposal</p>
</div>
<svg className="lucide lucide-list-checks h-5 w-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
</div>
<div className="mt-4 rounded-2xl bg-white/80 p-3">
<div className="flex items-center justify-between">
<span className="text-sm font-geist">Proposal</span>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-600 font-geist">Due</span>
<span className="px-2 py-0.5 rounded-full text-xs bg-zinc-900 text-white font-geist">Today</span>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs uppercase tracking-wide text-zinc-700 font-geist">The customer chooses between</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<div className="rounded-2xl bg-white/80 p-3">
<div className="text-sm font-medium font-geist">Us</div>
<ul className="mt-1 text-xs text-zinc-700 space-y-1">
<li className="flex items-center gap-1.5 font-geist"><svg className="lucide lucide-star h-3.5 w-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Trusted brand, solid support</li>
<li className="flex items-center gap-1.5 font-geist"><svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Fast onboarding</li>
</ul>
</div>
<div className="rounded-2xl bg-white/80 p-3">
<div className="text-sm font-medium font-geist">AltBrew</div>
<ul className="mt-1 text-xs text-zinc-700 space-y-1">
<li className="flex items-center gap-1.5 font-geist"><svg className="lucide lucide-info h-3.5 w-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Lower price, longer delivery</li>
</ul>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 flex gap-2 hover:opacity-95 text-white bg-zinc-900 rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-sm font-geist">Send</span>
</button>
<button className="h-12 w-12 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-white/90">
<svg className="lucide lucide-paperclip h-5 w-5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
</div>
</div>

<div className="rounded-3xl bg-zinc-50 p-4 md:p-5 border border-zinc-200/50">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold font-geist">Integrations</h3>
<p className="text-sm text-zinc-600 mt-1 font-geist">Incoming webhooks and embed</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-full text-xs bg-zinc-900 text-white font-geist" id="tab-webhook">Webhook</button>
<button className="px-3 py-1.5 rounded-full text-xs bg-zinc-100 font-geist" id="tab-embed">Embed</button>
</div>
</div>

<div className="mt-4 space-y-3" id="panel-webhook">
<div className="rounded-2xl bg-white p-3 border border-zinc-200/60">
<div className="flex items-center justify-between">
<div className="text-sm font-geist">Endpoint</div>
<button className="px-2 py-1 rounded-md text-xs bg-zinc-900 text-white font-geist" id="copy-endpoint">Copy</button>
</div>
<div className="mt-1 text-xs text-zinc-600 break-all font-geist" id="webhook-endpoint"></div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-xl bg-zinc-100 p-2">
<div className="text-xs text-zinc-600 font-geist">Secret</div>
<div className="text-sm font-geist" id="webhook-secret">whsec_••••••••••••</div>
</div>
<div className="rounded-xl bg-zinc-100 p-2">
<div className="text-xs text-zinc-600 font-geist">Last delivery</div>
<div className="text-sm font-geist" id="webhook-last">—</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-3 border border-zinc-200/60">
<div className="flex items-center justify-between">
<div className="text-sm font-geist">Test payload</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded-md text-xs bg-green-500 text-white font-geist" id="apply-webhook">Apply</button>
<button className="px-2 py-1 rounded-md text-xs bg-zinc-900 text-white font-geist" id="load-sample">Sample</button>
</div>
</div>
<textarea className="mt-2 w-full rounded-xl bg-zinc-100 p-3 text-xs font-geist outline-none focus:ring-2 ring-zinc-200" id="webhook-json" placeholder="Paste webhook JSON here" rows="5"></textarea>
<div className="mt-2 text-xs text-emerald-600 hidden font-geist" id="webhook-feedback">Applied</div>
</div>
<div className="rounded-2xl bg-white p-3 border border-zinc-200/60">
<div className="text-xs uppercase tracking-wide text-zinc-700 font-geist">Parsed preview</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-xl bg-zinc-100 p-2">
<div className="text-zinc-600 font-geist">Order ID</div>
<div className="font-geist" id="pv-order">—</div>
</div>
<div className="rounded-xl bg-zinc-100 p-2">
<div className="text-zinc-600 font-geist">Txn Ref</div>
<div className="font-geist" id="pv-ref">—</div>
</div>
<div className="rounded-xl bg-zinc-100 p-2">
<div className="text-zinc-600 font-geist">Customer</div>
<div className="font-geist" id="pv-customer">—</div>
</div>
<div className="rounded-xl bg-zinc-100 p-2">
<div className="text-zinc-600 font-geist">Payment</div>
<div className="font-geist" id="pv-payment">—</div>
</div>
<div className="rounded-xl bg-zinc-100 p-2 col-span-2">
<div className="text-zinc-600 font-geist">Totals</div>
<div className="font-geist" id="pv-totals">—</div>
</div>
</div>
</div>
</div>

<div className="mt-4 space-y-3 hidden" id="panel-embed">
<div className="rounded-2xl bg-white p-3 border border-zinc-200/60">
<div className="flex items-center justify-between">
<div className="text-sm font-geist">Embed code</div>
<button className="px-2 py-1 rounded-md text-xs bg-zinc-900 text-white font-geist" id="copy-embed">Copy</button>
</div>
<textarea className="mt-2 w-full rounded-xl bg-zinc-100 p-3 text-xs font-geist outline-none focus:ring-2 ring-zinc-200" id="embed-code" readonly="" rows="4"></textarea>
<div className="mt-2 text-xs text-zinc-600 font-geist">Works in standard site builders. Supports per-user isolation via query param.</div>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden">
<img alt="mountains" className="w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/256139c9-e118-4ca1-b76d-9cb35137e5c0_800w.jpg"/>
</div>
</aside>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/40 items-center justify-center hidden" id="profile-modal">
<div className="max-w-lg w-[92%] md:w-[40rem] rounded-3xl bg-white p-5 shadow-xl">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold font-geist">Profile</h3>
<p className="text-sm text-zinc-600 font-geist">Submit for approval</p>
</div>
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200" id="close-profile">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="text-xs text-zinc-600 font-geist">Full name</label>
<input className="mt-1 w-full rounded-xl bg-zinc-100 p-3 text-sm outline-none focus:ring-2 ring-zinc-200" id="pf-name" placeholder="Full name"/>
</div>
<div>
<label className="text-xs text-zinc-600 font-geist">Email</label>
<input className="mt-1 w-full rounded-xl bg-zinc-100 p-3 text-sm outline-none focus:ring-2 ring-zinc-200" id="pf-email" placeholder="Email" type="email"/>
</div>
<div>
<label className="text-xs text-zinc-600 font-geist">Phone</label>
<input className="mt-1 w-full rounded-xl bg-zinc-100 p-3 text-sm outline-none focus:ring-2 ring-zinc-200" id="pf-phone" placeholder="Phone"/>
</div>
<div>
<label className="text-xs text-zinc-600 font-geist">Company</label>
<input className="mt-1 w-full rounded-xl bg-zinc-100 p-3 text-sm outline-none focus:ring-2 ring-zinc-200" id="pf-company" placeholder="Company"/>
</div>
<div className="md:col-span-2">
<label className="text-xs text-zinc-600 font-geist">Full address</label>
<input className="mt-1 w-full rounded-xl bg-zinc-100 p-3 text-sm outline-none focus:ring-2 ring-zinc-200" id="pf-address" placeholder="Address"/>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs font-geist text-zinc-600">Status: <span id="pf-status">Draft</span></div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-sm font-geist" id="pf-save">Save</button>
<button className="px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm font-geist" id="pf-submit">Submit for approval</button>
<button className="px-3 py-2 rounded-xl bg-emerald-500 text-white text-sm font-geist" data-admin-only="" hidden="" id="pf-approve">Approve</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/40 items-center justify-center hidden" id="embed-modal">
<div className="max-w-lg w-[92%] md:w-[40rem] rounded-3xl bg-white p-5 shadow-xl">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold font-geist">Embed this dashboard</h3>
<p className="text-sm text-zinc-600 font-geist">Copy and paste into your site</p>
</div>
<button className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200" id="close-embed">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-4">
<label className="text-xs text-zinc-600 font-geist">Embed code</label>
<textarea className="mt-1 w-full rounded-xl bg-zinc-100 p-3 text-xs font-geist outline-none focus:ring-2 ring-zinc-200" id="embed-modal-code" readonly="" rows="4"></textarea>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-zinc-600 font-geist">Tip: Add ?user= to scope per-user.</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm font-geist" id="copy-embed-modal">Copy</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
