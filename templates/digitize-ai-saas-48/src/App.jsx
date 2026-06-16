import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



            /* --- DATA STRUCTURE --- */
            const structure = {
              home: {
                  label: "Overview",
                  icon: "lucide:layout-dashboard",
                  features: [
                      { id: "dashboard", label: "Command Center", desc: "System-wide telemetry & usage", icon: "lucide:activity" }
                  ]
              },
              marketing: {
                label: "Marketing Portal",
                icon: "lucide:megaphone",
                features: [
                  { id: "ad-creator", label: "AI Ad Creator", desc: "Gen multi-platform ads & variations", icon: "lucide:wand-2" },
                  { id: "landing-page", label: "AI Landing Pages", desc: "Auto-generate conversion pages", icon: "lucide:layout" },
                  { id: "email-campaign", label: "Email Campaigns", desc: "Automation sequences & sync", icon: "lucide:mail" },
                  { id: "analytics", label: "AI Analytics", desc: "Traffic sources & wasted spend", icon: "lucide:bar-chart-2" },
                  { id: "brand-kit", label: "Brand Kit Creator", desc: "Consistent palette & voice", icon: "lucide:palette" },
                  { id: "campaign-planner", label: "Campaign Planner", desc: "Full omnichannel strategy", icon: "lucide:map" }
                ]
              },
              leads: {
                label: "Lead Generator",
                icon: "lucide:magnet",
                features: [
                  { id: "lead-scoring", label: "AI Lead Scoring", desc: "Rank by interest & behavior", icon: "lucide:target" },
                  { id: "adaptive-forms", label: "Adaptive Forms", desc: "Context-aware questions", icon: "lucide:form-input" },
                  { id: "outreach", label: "AI Outreach Writer", desc: "Contextual first contact", icon: "lucide:send" },
                  { id: "enrichment", label: "Real-time Enrichment", desc: "Data pulling & context", icon: "lucide:database" },
                  { id: "qualification", label: "Qualification Bot", desc: "Filter cold traffic", icon: "lucide:bot" },
                  { id: "routing", label: "Lead Routing", desc: "Instant CRM distribution", icon: "lucide:git-merge" }
                ]
              },
              seo: {
                label: "SEO Portal",
                icon: "lucide:search",
                features: [
                  { id: "keyword-engine", label: "Keyword Engine", desc: "High opportunity discovery", icon: "lucide:key" },
                  { id: "blog-writer", label: "AI Blog Writer", desc: "Long-form SEO articles", icon: "lucide:pen-tool" },
                  { id: "competitor-audit", label: "Competitor Audit", desc: "Gaps & weakness analysis", icon: "lucide:swords" },
                  { id: "backlinks", label: "Backlink Finder", desc: "Opportunity suggestions", icon: "lucide:link" },
                  { id: "site-audit", label: "Site Audit Scanner", desc: "Tech health & speed", icon: "lucide:stethoscope" },
                  { id: "internal-linking", label: "Internal Linking", desc: "Structure optimization", icon: "lucide:network" }
                ]
              },
              social: {
                label: "Social Media",
                icon: "lucide:share-2",
                features: [
                  { id: "video-scripts", label: "Video Scripts", desc: "Short-form TikTok/Reels", icon: "lucide:video" },
                  { id: "repurposing", label: "Content Repurposing", desc: "Blog to carousel/video", icon: "lucide:repeat" },
                  { id: "graphics", label: "Graphic Generator", desc: "Branded visuals instantly", icon: "lucide:image" },
                  { id: "scheduling", label: "Smart Schedule", desc: "Performance-based timing", icon: "lucide:calendar-clock" },
                  { id: "captions", label: "Caption Writer", desc: "Hashtags & optimization", icon: "lucide:text" },
                  { id: "trends", label: "Trend Detector", desc: "Niche performance tracking", icon: "lucide:trending-up" }
                ]
              },
              invoicing: {
                label: "Invoicing Portal",
                icon: "lucide:receipt",
                features: [
                  { id: "invoice-builder", label: "Smart Builder", desc: "CRM-connected invoicing", icon: "lucide:file-plus" },
                  { id: "reminders", label: "Late Reminders", desc: "Auto-chase sequences", icon: "lucide:bell-ring" },
                  { id: "receipts", label: "AI Doc Reader", desc: "Expense extraction", icon: "lucide:scan-line" },
                  { id: "recurring", label: "Recurring Billing", desc: "Subscription management", icon: "lucide:refresh-cw" },
                  { id: "expenses", label: "Expense Tracker", desc: "Tax categorization", icon: "lucide:pie-chart" },
                  { id: "profitability", label: "Client Profitability", desc: "ROI per client", icon: "lucide:dollar-sign" }
                ]
              },
              calendar: {
                label: "Calendar Portal",
                icon: "lucide:calendar",
                features: [
                  { id: "smart-scheduling", label: "Smart Scheduling", desc: "Workload balancing", icon: "lucide:clock" },
                  { id: "meeting-links", label: "Instant Links", desc: "Auto-generation", icon: "lucide:link-2" },
                  { id: "sync", label: "Booking Sync", desc: "Prevent double bookings", icon: "lucide:refresh-ccw" },
                  { id: "task-auto", label: "Task Automation", desc: "Tasks to time slots", icon: "lucide:check-square" },
                  { id: "daily-brief", label: "Daily Brief", desc: "Morning summary", icon: "lucide:coffee" },
                  { id: "conflict", label: "Conflict Detection", desc: "Overbooking warnings", icon: "lucide:alert-triangle" }
                ]
              },
              crm: {
                label: "CRM",
                icon: "lucide:users",
                features: [
                  { id: "forecasting", label: "Deal Forecasting", desc: "Revenue prediction", icon: "lucide:line-chart" },
                  { id: "follow-up", label: "Follow-up Prompts", desc: "Behavior-based timing", icon: "lucide:message-circle" },
                  { id: "inbox", label: "Unified Inbox", desc: "Email, SMS, Chat", icon: "lucide:inbox" },
                  { id: "pipeline", label: "Stage Automation", desc: "Auto-move deals", icon: "lucide:columns" },
                  { id: "files", label: "File Storage", desc: "Contracts & proposals", icon: "lucide:folder" },
                  { id: "timeline", label: "Contact Timeline", desc: "Full interaction history", icon: "lucide:history" }
                ]
              },
              booking: {
                label: "Booking System",
                icon: "lucide:calendar-check",
                features: [
                  { id: "availability", label: "Availability Engine", desc: "Staff & capacity logic", icon: "lucide:check-circle" },
                  { id: "confirmations", label: "Auto Confirmations", desc: "SMS/Email reminders", icon: "lucide:bell" },
                  { id: "upsell", label: "Upsell Module", desc: "Service add-ons", icon: "lucide:shopping-bag" },
                  { id: "crm-sync", label: "CRM Sync", desc: "Profile updates", icon: "lucide:refresh-cw" },
                  { id: "staff-rules", label: "Staff Rules", desc: "Schedules per role", icon: "lucide:user-cog" },
                  { id: "cancellation", label: "Auto Cancellation", desc: "Self-serve rescheduling", icon: "lucide:x-circle" }
                ]
              },
              website: {
                label: "Website Builder",
                icon: "lucide:globe",
                features: [
                  { id: "site-gen", label: "AI Site Generator", desc: "Full build from keywords", icon: "lucide:zap" },
                  { id: "copywriter", label: "AI Copywriter", desc: "Page content generation", icon: "lucide:file-text" },
                  { id: "templates", label: "Template Engine", desc: "Industry layouts", icon: "lucide:layout-template" },
                  { id: "seo-assist", label: "SEO Assistant", desc: "On-page optimization", icon: "lucide:search-check" },
                  { id: "split-test", label: "Split Testing", desc: "A/B conversion logic", icon: "lucide:split" },
                  { id: "heatmap", label: "Heatmap Analytics", desc: "UX tracking", icon: "lucide:activity" }
                ]
              },
              support: {
                label: "Virtual Support",
                icon: "lucide:headphones",
                features: [
                  { id: "agent", label: "AI Agent", desc: "Auto-responses", icon: "lucide:bot" },
                  { id: "tickets", label: "Ticket Creation", desc: "Escalation logic", icon: "lucide:ticket" },
                  { id: "lookup", label: "Order Lookup", desc: "Database query", icon: "lucide:search" },
                  { id: "escalation", label: "Smart Escalation", desc: "Human hand-off", icon: "lucide:user-plus" },
                  { id: "tracking", label: "Response Time", desc: "SLA monitoring", icon: "lucide:timer" },
                  { id: "multiplatform", label: "Multi-platform", desc: "Web, Email, Chat", icon: "lucide:monitor" }
                ]
              },
              chatbot: {
                label: "Chatbot",
                icon: "lucide:message-square",
                features: [
                  { id: "training", label: "Data Training", desc: "Company knowledge base", icon: "lucide:brain-circuit" },
                  { id: "capture", label: "Lead Capture", desc: "Qualify & collect", icon: "lucide:user-check" },
                  { id: "support-mode", label: "Support Mode", desc: "Troubleshooting", icon: "lucide:life-buoy" },
                  { id: "sales-assist", label: "Sales Assistant", desc: "Product guidance", icon: "lucide:shopping-cart" },
                  { id: "insights", label: "Conversation Insights", desc: "Objection analysis", icon: "lucide:bar-chart" },
                  { id: "triggers", label: "Action Triggers", desc: "API & Webhooks", icon: "lucide:zap" }
                ]
              }
            };

            let activePortal = 'home';
            let activeFeature = 'dashboard';

            /* --- INITIALIZATION --- */
            document.addEventListener('DOMContentLoaded', () => {
              renderSidebar();
              loadView(activePortal, activeFeature);
            });

            /* --- CORE FUNCTIONS --- */
            function renderSidebar() {
              const nav = document.getElementById('sidebar-nav');
              nav.innerHTML = '';

              Object.entries(structure).forEach(([key, portal]) => {
                const isExpanded = key === activePortal;
                const isHome = key === 'home';

                const groupBtn = document.createElement('button');
                groupBtn.className = `w-full flex items-center justify-between px-2 py-2 text-xs font-medium rounded-md transition-colors mb-0.5 ${isExpanded ? 'text-white bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}`;

                if (isHome) {
                   groupBtn.onclick = () => {
                      activePortal = key;
                      activeFeature = portal.features[0].id;
                      renderSidebar();
                      loadView(key, activeFeature);
                   };
                   groupBtn.innerHTML = `
                      <div class="flex items-center gap-2.5">
                        <span class="iconify" data-icon="${portal.icon}" data-width="16"></span>
                        ${portal.label}
                      </div>
                    `;
                } else {
                   groupBtn.onclick = () => togglePortal(key);
                   groupBtn.innerHTML = `
                      <div class="flex items-center gap-2.5">
                        <span class="iconify" data-icon="${portal.icon}" data-width="16"></span>
                        ${portal.label}
                      </div>
                      <span class="iconify transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}" data-icon="lucide:chevron-right" data-width="12"></span>
                    `;
                }
                nav.appendChild(groupBtn);

                if (!isHome) {
                    const submenu = document.createElement('div');
                    submenu.id = `submenu-${key}`;
                    submenu.className = `submenu pl-7 space-y-0.5 mb-2 ${isExpanded ? 'open' : ''}`;

                    portal.features.forEach(feat => {
                      const btn = document.createElement('button');
                      const isActive = feat.id === activeFeature && key === activePortal;
                      btn.className = `w-full text-left px-2 py-1.5 rounded-md text-[11px] transition-colors flex items-center justify-between group ${isActive ? 'text-indigo-400 bg-indigo-500/10' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30'}`;
                      btn.onclick = () => {
                        activePortal = key;
                        activeFeature = feat.id;
                        renderSidebar();
                        loadView(key, feat.id);
                      };
                      btn.innerHTML = `<span>${feat.label}</span> ${isActive ? '<div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>' : ''}`;
                      submenu.appendChild(btn);
                    });
                    nav.appendChild(submenu);
                }
              });
            }

            function togglePortal(key) {
              if (activePortal === key) return;
              activePortal = key;
              activeFeature = structure[key].features[0].id;
              renderSidebar();
              loadView(activePortal, activeFeature);
            }

            function loadView(portalKey, featureId) {
              const portal = structure[portalKey];
              const feature = portal.features.find(f => f.id === featureId);

              document.getElementById('header-icon').innerHTML = `<span class="iconify" data-icon="${feature.icon}" data-width="20"></span>`;
              document.getElementById('header-title').innerText = feature.label;
              document.getElementById('header-subtitle').innerText = `${portal.label} / ${feature.desc}`;

              const container = document.getElementById('main-view');
              container.classList.remove('view-animate');
              void container.offsetWidth;
              container.classList.add('view-animate');

              container.innerHTML = generateFeatureContent(portalKey, featureId, feature);
            }

            function showToast(message, type = 'success') {
              const container = document.getElementById('toast-container');
              const toast = document.createElement('div');
              const colors = type === 'success' ? 'bg-zinc-900 text-white border-zinc-800' : 'bg-white text-zinc-900 border-zinc-200';
              const icon = type === 'success' ? 'lucide:check-circle' : 'lucide:info';

              toast.className = `view-animate flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl border ${colors} min-w-[300px]`;
              toast.innerHTML = `<span class="iconify" data-icon="${icon}" data-width="16"></span><p class="text-xs font-medium">${message}</p>`;

              container.appendChild(toast);
              setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                setTimeout(() => toast.remove(), 300);
              }, 3000);
            }

            /* --- HELPER COMPONENTS --- */
            const grid = (content) => `<div class="grid grid-cols-12 gap-6 pb-20">${content}</div>`;
            const card = (title, content, cols = 'col-span-12', actions = '') => `
              <div class="${cols} bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col h-full">
                <div class="px-5 py-3 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                  <h3 class="text-xs font-semibold text-zinc-900 uppercase tracking-tight">${title}</h3>
                  <div class="flex gap-2">${actions}</div>
                </div>
                <div class="p-5 flex-1 relative">${content}</div>
              </div>`;
            const input = (label, ph = '', val = '') => `
              <div class="mb-3">
                  <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">${label}</label>
                  <input type="text" class="w-full text-xs border-zinc-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-zinc-50 focus:bg-white transition-all placeholder:text-zinc-400" placeholder="${ph}" value="${val}">
              </div>`;
            const btn = (text, icon, onclick) => `<button onclick="${onclick}" class="w-full flex justify-center items-center gap-2 bg-zinc-900 text-white py-2 rounded-md text-xs font-medium hover:bg-zinc-800 transition-colors"><span class="iconify" data-icon="${icon}"></span> ${text}</button>`;

            /* --- MAIN VIEW GENERATOR --- */
            function generateFeatureContent(portal, id, feat) {

              /* -- HOME DASHBOARD -- */
              if (portal === 'home') return grid(`
                  <div class="col-span-12 mb-2">
                      <h2 class="text-lg font-bold text-zinc-900">Welcome back, Admin</h2>
                      <p class="text-xs text-zinc-500">Here's what's happening across your system today.</p>
                  </div>
                  ${card('System Credits', `<div class="flex flex-col h-full justify-between"><div><div class="flex justify-between items-end mb-2"><div><span class="text-3xl font-bold text-zinc-900 tracking-tight">84,402</span><span class="text-sm text-zinc-500 font-medium"> / 100,000</span></div><span class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">Active Plan</span></div><div class="w-full bg-zinc-100 h-3 rounded-full overflow-hidden mb-4 border border-zinc-200/50"><div class="bg-gradient-to-r from-indigo-500 to-violet-600 h-full rounded-full w-[84%] relative overflow-hidden"><div class="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div></div></div></div></div>`, 'col-span-12 md:col-span-5')}
                  <div class="col-span-12 md:col-span-7 grid grid-cols-2 gap-6 h-full">
                      <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between"><div class="flex justify-between items-start"><div class="p-2 bg-emerald-50 rounded-lg border border-emerald-100"><span class="iconify text-emerald-600" data-icon="lucide:dollar-sign" data-width="20"></span></div><span class="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">+12%</span></div><div><div class="text-2xl font-bold text-zinc-900 mt-3">$24,500</div><div class="text-[11px] text-zinc-500">Monthly Revenue</div></div></div>
                      <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between"><div class="flex justify-between items-start"><div class="p-2 bg-indigo-50 rounded-lg border border-indigo-100"><span class="iconify text-indigo-600" data-icon="lucide:users" data-width="20"></span></div><span class="text-[10px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold">+5 New</span></div><div><div class="text-2xl font-bold text-zinc-900 mt-3">1,240</div><div class="text-[11px] text-zinc-500">Active Leads</div></div></div>
                  </div>
              `);

              /* -- CRM PORTAL FEATURES (NEWLY ADDED) -- */
              if (portal === 'crm') {

                  // 1. DEAL FORECASTING
                  if (id === 'forecasting') return grid(`
                    <div class="col-span-12 grid grid-cols-3 gap-6">
                      ${card('Projected Revenue', `<div class="flex justify-between items-end"><div><div class="text-2xl font-bold text-zinc-900">$248,500</div><div class="text-[10px] text-zinc-500">vs $200k Quota</div></div><div class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+24%</div></div>`, 'col-span-1')}
                      ${card('Pipeline Coverage', `<div class="flex justify-between items-end"><div><div class="text-2xl font-bold text-zinc-900">3.2x</div><div class="text-[10px] text-zinc-500">Healthy Range: 3-4x</div></div><div class="text-xs font-bold text-zinc-500 bg-zinc-100 px-2 py-1 rounded">Stable</div></div>`, 'col-span-1')}
                      ${card('AI Confidence', `<div class="flex flex-col justify-between h-full"><div class="flex justify-between mb-1"><span class="text-2xl font-bold text-indigo-600">89%</span><span class="iconify text-indigo-500" data-icon="lucide:sparkles"></span></div><div class="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden"><div class="bg-indigo-600 w-[89%] h-full rounded-full"></div></div><div class="text-[10px] text-zinc-400 mt-2">Based on historical win rates</div></div>`, 'col-span-1')}
                    </div>

                    ${card('Revenue Forecast (6 Months)', `
                      <div class="h-64 flex items-end gap-6 px-4 pb-4">
                         ${['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((m, i) => {
                             const h1 = [40, 55, 75, 45, 60, 80][i];
                             const h2 = [20, 15, 10, 25, 15, 10][i];
                             return `<div class="flex-1 h-full flex flex-col justify-end gap-1 group">
                                <div class="w-full bg-emerald-400/20 h-[${h2}%] rounded-sm relative group-hover:bg-emerald-400/40 transition-colors"><div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-zinc-500 opacity-0 group-hover:opacity-100">Upside</div></div>
                                <div class="w-full bg-zinc-900 h-[${h1}%] rounded-sm relative"><div class="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] text-white/80 font-bold">$${h1}k</div></div>
                                <div class="text-[10px] text-zinc-500 text-center mt-2 font-medium">${m}</div>
                             </div>`
                         }).join('')}
                      </div>
                      <div class="flex justify-center gap-6 mt-4">
                          <div class="flex items-center gap-2 text-[10px] text-zinc-500"><div class="w-2 h-2 rounded-full bg-zinc-900"></div>Committed</div>
                          <div class="flex items-center gap-2 text-[10px] text-zinc-500"><div class="w-2 h-2 rounded-full bg-emerald-400/50"></div>Best Case</div>
                      </div>
                    `, 'col-span-12 md:col-span-8')}

                    ${card('Top Deals Closing Soon', `
                      <div class="space-y-3">
                         ${[
                             {n: 'Acme Corp Enterprise', v: '$45,000', p: 90},
                             {n: 'Global Tech Expansion', v: '$28,500', p: 75},
                             {n: 'Stark Ind. Pilot', v: '$12,000', p: 60},
                             {n: 'Wayne Enterprises', v: '$85,000', p: 40}
                         ].map(d => `
                            <div class="flex justify-between items-center p-2 hover:bg-zinc-50 rounded cursor-pointer group border border-transparent hover:border-zinc-100">
                               <div>
                                  <div class="text-xs font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">${d.n}</div>
                                  <div class="text-[10px] text-zinc-500">Prob: ${d.p}%</div>
                               </div>
                               <div class="text-right">
                                  <div class="text-xs font-bold text-zinc-900">${d.v}</div>
                                  <div class="w-16 h-1 bg-zinc-100 rounded-full mt-1 ml-auto"><div class="h-full bg-indigo-500 rounded-full" style="width: ${d.p}%"></div></div>
                               </div>
                            </div>
                         `).join('')}
                      </div>
                    `, 'col-span-12 md:col-span-4')}
                  `);

                  // 2. FOLLOW-UP PROMPTS
                  if (id === 'follow-up') return grid(`
                     ${card('Deals at Risk', `
                        <div class="space-y-0 divide-y divide-zinc-50">
                           ${[
                              {n: 'Sarah Connor', c: 'Skynet Systems', d: '4 days ago', s: 'Negotiation', color: 'bg-rose-500'},
                              {n: 'John Smith', c: 'Matrix Inc', d: '6 days ago', s: 'Proposal', color: 'bg-amber-500'},
                              {n: 'Ellen Ripley', c: 'Weyland Corp', d: '2 days ago', s: 'Discovery', color: 'bg-zinc-300'},
                           ].map(l => `
                              <div class="p-3 hover:bg-zinc-50 flex items-center justify-between cursor-pointer group">
                                 <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full ${l.color}"></div>
                                    <div>
                                       <div class="text-xs font-semibold text-zinc-900">${l.n}</div>
                                       <div class="text-[10px] text-zinc-500">${l.c} • ${l.s}</div>
                                    </div>
                                 </div>
                                 <div class="text-right">
                                    <div class="text-[10px] font-medium text-zinc-500 group-hover:text-rose-500 transition-colors">Last: ${l.d}</div>
                                    <div class="text-[10px] text-indigo-600 opacity-0 group-hover:opacity-100">Nudge →</div>
                                 </div>
                              </div>
                           `).join('')}
                        </div>
                     `, 'col-span-12 md:col-span-4')}

                     ${card('Smart Action Center', `
                        <div class="flex items-start gap-4 mb-6">
                           <div class="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">SC</div>
                           <div class="flex-1">
                              <h3 class="text-sm font-bold text-zinc-900">Sarah Connor</h3>
                              <p class="text-[11px] text-zinc-500">VP Engineering @ Skynet • $120k Deal</p>
                              <div class="mt-2 flex gap-2">
                                 <span class="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-[10px] rounded border border-zinc-200">Price Objection</span>
                                 <span class="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-[10px] rounded border border-zinc-200">Ghosting</span>
                              </div>
                           </div>
                        </div>

                        <div class="bg-indigo-50/50 border border-indigo-100 rounded-lg p-4 mb-4">
                           <div class="flex items-center gap-2 mb-2 text-indigo-700">
                              <span class="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                              <span class="text-[10px] font-bold uppercase">AI Recommendation</span>
                           </div>
                           <p class="text-xs text-zinc-700 leading-relaxed">Sarah hasn't opened the last proposal email. Send a "soft bump" focusing on the new security features discussed in the demo, as that was her main concern.</p>
                        </div>

                        <div class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
                           <div class="bg-zinc-50 border-b border-zinc-100 px-3 py-2 flex justify-between items-center">
                              <span class="text-[10px] font-semibold text-zinc-500">DRAFT: EMAIL</span>
                              <span class="iconify text-zinc-400 cursor-pointer hover:text-indigo-600" data-icon="lucide:refresh-cw" data-width="12"></span>
                           </div>
                           <div class="p-3">
                              <p class="text-xs text-zinc-800 leading-relaxed mb-2"><span class="text-zinc-400">Subject:</span> Quick question re: Security Specs</p>
                              <textarea class="w-full h-32 text-xs text-zinc-600 resize-none outline-none placeholder:text-zinc-300" placeholder="Hi Sarah...">Hi Sarah,

      I know things are busy at Skynet. I wanted to float this back to the top of your inbox.

      Since we last spoke, our team finalized the SOC2 report you asked about. I've attached it here. Does this unblock the review process on your end?

      Best,
      Admin</textarea>
                           </div>
                           <div class="bg-zinc-50 border-t border-zinc-100 px-3 py-2 flex justify-end gap-2">
                               <button class="px-3 py-1 bg-white border border-zinc-200 rounded text-[10px] font-medium hover:bg-zinc-50">Edit</button>
                               <button class="px-3 py-1 bg-zinc-900 text-white rounded text-[10px] font-medium hover:bg-zinc-800">Send Now</button>
                           </div>
                        </div>
                     `, 'col-span-12 md:col-span-8')}
                  `);

                  // 3. UNIFIED INBOX
                  if (id === 'inbox') return grid(`
                     ${card('Channels', `
                        <div class="space-y-1">
                           <button class="w-full flex items-center justify-between px-3 py-2 bg-zinc-100 text-zinc-900 rounded-md text-xs font-medium"><div class="flex items-center gap-2"><span class="iconify" data-icon="lucide:inbox"></span> All Messages</div><span>12</span></button>
                           <button class="w-full flex items-center justify-between px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-md text-xs font-medium"><div class="flex items-center gap-2"><span class="iconify" data-icon="lucide:mail"></span> Email</div><span>5</span></button>
                           <button class="w-full flex items-center justify-between px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-md text-xs font-medium"><div class="flex items-center gap-2"><span class="iconify" data-icon="lucide:message-square"></span> SMS</div><span>2</span></button>
                           <button class="w-full flex items-center justify-between px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-md text-xs font-medium"><div class="flex items-center gap-2"><span class="iconify" data-icon="lucide:message-circle"></span> Chat</div><span>5</span></button>
                        </div>
                     `, 'col-span-12 md:col-span-2')}

                     ${card('Messages', `
                        <div class="divide-y divide-zinc-50 h-[500px] overflow-y-auto">
                           ${[1,2,3,4,5,6].map(i => `
                              <div class="p-3 cursor-pointer hover:bg-zinc-50 ${i === 1 ? 'bg-indigo-50/30' : ''}">
                                 <div class="flex justify-between mb-1">
                                    <span class="text-xs font-bold text-zinc-900">John Doe</span>
                                    <span class="text-[10px] text-zinc-400">10:4${i} AM</span>
                                 </div>
                                 <p class="text-[11px] text-zinc-500 truncate">Hey, just checking in on the proposal we sent over last week...</p>
                                 <div class="mt-2 flex gap-1">
                                    <span class="px-1.5 py-0.5 bg-zinc-100 rounded text-[9px] text-zinc-500 border border-zinc-200">High Value</span>
                                    ${i===1 ? '<span class="px-1.5 py-0.5 bg-indigo-100 rounded text-[9px] text-indigo-600 font-bold">New</span>' : ''}
                                 </div>
                              </div>
                           `).join('')}
                        </div>
                     `, 'col-span-12 md:col-span-4')}

                     ${card('Conversation', `
                        <div class="flex flex-col h-[500px]">
                           <!-- Header -->
                           <div class="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4">
                              <div class="flex items-center gap-3">
                                 <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">JD</div>
                                 <div>
                                    <div class="text-xs font-bold text-zinc-900">John Doe</div>
                                    <div class="text-[10px] text-zinc-400">john@acme.com • via Email</div>
                                 </div>
                              </div>
                              <div class="flex gap-2">
                                 <button class="p-1.5 hover:bg-zinc-100 rounded text-zinc-400"><span class="iconify" data-icon="lucide:phone"></span></button>
                                 <button class="p-1.5 hover:bg-zinc-100 rounded text-zinc-400"><span class="iconify" data-icon="lucide:more-vertical"></span></button>
                              </div>
                           </div>

                           <!-- Chat Area -->
                           <div class="flex-1 overflow-y-auto space-y-4 pr-2">
                              <div class="flex justify-center"><span class="text-[10px] text-zinc-400 bg-zinc-50 px-2 py-1 rounded-full">Today</span></div>

                              <div class="flex gap-3">
                                 <div class="w-6 h-6 rounded-full bg-zinc-200 flex-shrink-0"></div>
                                 <div class="bg-zinc-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                                    <p class="text-xs text-zinc-800">Hi Admin, quick question about the API limits on the Enterprise plan.</p>
                                 </div>
                              </div>

                              <div class="flex gap-3 flex-row-reverse">
                                 <div class="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                 <div class="bg-indigo-600 p-3 rounded-lg rounded-tr-none max-w-[80%] text-white">
                                    <p class="text-xs">Sure John, happy to help. We offer 1M calls per month. Do you need more?</p>
                                 </div>
                              </div>

                              <div class="flex gap-3">
                                 <div class="w-6 h-6 rounded-full bg-zinc-200 flex-shrink-0"></div>
                                 <div class="bg-zinc-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                                    <p class="text-xs text-zinc-800">That should be enough for now. Can you send over the updated contract?</p>
                                 </div>
                              </div>
                           </div>

                           <!-- Input Area -->
                           <div class="mt-4 pt-3 border-t border-zinc-100">
                              <div class="flex gap-2 mb-2 overflow-x-auto pb-1">
                                 <button class="flex-shrink-0 px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition-colors">AI: "Yes, sending it now."</button>
                                 <button class="flex-shrink-0 px-2 py-1 bg-zinc-50 text-zinc-500 text-[10px] rounded border border-zinc-100 hover:bg-zinc-100 transition-colors">AI: "Let's schedule a call."</button>
                              </div>
                              <div class="relative">
                                 <input type="text" class="w-full pl-3 pr-10 py-2.5 text-xs border-zinc-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Type a message...">
                                 <button class="absolute right-2 top-2 p-0.5 text-zinc-400 hover:text-indigo-600"><span class="iconify" data-icon="lucide:send" data-width="14"></span></button>
                              </div>
                           </div>
                        </div>
                     `, 'col-span-12 md:col-span-6')}
                  `);

                  // 4. STAGE AUTOMATION (PIPELINE)
                  if (id === 'pipeline') return grid(`
                     <div class="col-span-12 overflow-x-auto pb-4">
                        <div class="flex gap-4 min-w-[1000px]">
                           ${['Prospecting', 'Qualified', 'Proposal Sent', 'Negotiation', 'Closed Won'].map((col, idx) => `
                              <div class="w-64 flex-shrink-0 flex flex-col h-full">
                                 <div class="flex items-center justify-between mb-3 px-1">
                                    <span class="text-xs font-bold text-zinc-700 uppercase tracking-tight">${col}</span>
                                    <span class="bg-zinc-200 text-zinc-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">${[4, 2, 5, 1, 8][idx]}</span>
                                 </div>
                                 <div class="flex-1 bg-zinc-100/50 rounded-xl p-2 space-y-2 border border-zinc-200/50 min-h-[500px]">
                                    ${Array.from({length: [4, 2, 5, 1, 8][idx]}).map((_, i) => `
                                       <div class="bg-white p-3 rounded-lg border border-zinc-200 shadow-sm cursor-grab active:cursor-grabbing hover:border-indigo-400 hover:shadow-md transition-all group relative">
                                          <div class="flex justify-between items-start mb-2">
                                             <div class="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-500 border border-zinc-200">Logo</div>
                                             <span class="text-[10px] font-medium text-zinc-400">$${Math.floor(Math.random() * 50) + 10}k</span>
                                          </div>
                                          <h4 class="text-xs font-bold text-zinc-900 mb-0.5">Enterprise Deal ${i+1}</h4>
                                          <p class="text-[10px] text-zinc-500 mb-2">Acme Corp Inc.</p>

                                          ${idx === 2 ? '<div class="w-full h-1 bg-zinc-100 rounded-full overflow-hidden mb-2"><div class="h-full bg-amber-400 w-2/3"></div></div>' : ''}

                                          <div class="flex justify-between items-center pt-2 border-t border-zinc-50">
                                             <div class="flex -space-x-1">
                                                <div class="w-4 h-4 rounded-full bg-indigo-500 border border-white"></div>
                                             </div>
                                             <span class="text-[9px] text-zinc-400">2d ago</span>
                                          </div>
                                          <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-indigo-600"><span class="iconify" data-icon="lucide:more-horizontal" data-width="14"></span></button>
                                       </div>
                                    `).join('')}
                                    <button class="w-full py-2 border border-dashed border-zinc-300 rounded-lg text-zinc-400 text-[10px] hover:bg-white hover:text-zinc-600 transition-colors">+ New Deal</button>
                                 </div>
                                 <div class="mt-2 text-center">
                                    <span class="text-[10px] text-zinc-400 flex items-center justify-center gap-1 cursor-pointer hover:text-indigo-600"><span class="iconify" data-icon="lucide:zap" data-width="10"></span> ${idx === 2 ? 'Auto-send follow up on day 3' : 'No automation set'}</span>
                                 </div>
                              </div>
                           `).join('')}
                        </div>
                     </div>
                  `);

                  // 5. FILE STORAGE
                  if (id === 'files') return grid(`
                     <div class="col-span-12 flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2 text-xs text-zinc-500">
                           <span class="hover:text-zinc-900 cursor-pointer">Home</span>
                           <span class="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
                           <span class="hover:text-zinc-900 cursor-pointer">Clients</span>
                           <span class="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
                           <span class="font-bold text-zinc-900">Acme Corp</span>
                        </div>
                        <div class="flex gap-2">
                           <button class="px-3 py-1.5 bg-white border border-zinc-200 rounded text-xs font-medium text-zinc-700 hover:bg-zinc-50 flex items-center gap-2"><span class="iconify" data-icon="lucide:folder-plus" data-width="14"></span> New Folder</button>
                           <button class="px-3 py-1.5 bg-zinc-900 text-white rounded text-xs font-medium hover:bg-zinc-800 flex items-center gap-2 shadow-sm"><span class="iconify" data-icon="lucide:upload" data-width="14"></span> Upload</button>
                        </div>
                     </div>

                     ${card('Quick Access', `
                        <div class="grid grid-cols-4 gap-4">
                           ${['Contract_v2.pdf', 'Q3_Report.pdf', 'Logo_Assets.zip', 'Meeting_Notes.docx'].map(f => `
                              <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg cursor-pointer hover:bg-white hover:shadow-sm hover:border-indigo-300 transition-all group">
                                 <div class="flex justify-between items-start mb-2">
                                    <span class="iconify text-indigo-500" data-icon="lucide:${f.endsWith('zip') ? 'archive' : 'file-text'}" data-width="24"></span>
                                    <span class="iconify text-zinc-300 group-hover:text-zinc-500" data-icon="lucide:more-vertical" data-width="14"></span>
                                 </div>
                                 <div class="text-[11px] font-semibold text-zinc-900 truncate mb-0.5">${f}</div>
                                 <div class="text-[10px] text-zinc-500">2.4 MB • 2h ago</div>
                              </div>
                           `).join('')}
                        </div>
                     `, 'col-span-12')}

                     ${card('All Files', `
                        <table class="w-full text-left">
                           <thead class="bg-zinc-50 text-[10px] uppercase text-zinc-500 font-semibold border-y border-zinc-200">
                              <tr>
                                 <th class="px-4 py-2 w-8"><input type="checkbox" class="rounded border-zinc-300"></th>
                                 <th class="px-4 py-2">Name</th>
                                 <th class="px-4 py-2">Size</th>
                                 <th class="px-4 py-2">Type</th>
                                 <th class="px-4 py-2">Modified</th>
                                 <th class="px-4 py-2 text-right">Action</th>
                              </tr>
                           </thead>
                           <tbody class="divide-y divide-zinc-50 text-xs">
                              ${[
                                 {n: 'Legal Documents', t: 'Folder', s: '-', d: 'Oct 24, 2023'},
                                 {n: 'Design Mockups', t: 'Folder', s: '-', d: 'Oct 22, 2023'},
                                 {n: 'MSA_Final_Signed.pdf', t: 'PDF', s: '4.2 MB', d: 'Oct 20, 2023'},
                                 {n: 'Budget_2024.xlsx', t: 'Spreadsheet', s: '1.8 MB', d: 'Oct 15, 2023'},
                                 {n: 'Onboarding_Checklist.docx', t: 'Word Doc', s: '24 KB', d: 'Oct 10, 2023'},
                              ].map(r => `
                                 <tr class="group hover:bg-zinc-50 transition-colors cursor-pointer">
                                    <td class="px-4 py-3"><input type="checkbox" class="rounded border-zinc-300 accent-indigo-600"></td>
                                    <td class="px-4 py-3 font-medium text-zinc-700 flex items-center gap-2">
                                       <span class="iconify text-zinc-400" data-icon="lucide:${r.t === 'Folder' ? 'folder' : 'file'}" data-width="14"></span> ${r.n}
                                    </td>
                                    <td class="px-4 py-3 text-zinc-500">${r.s}</td>
                                    <td class="px-4 py-3 text-zinc-500"><span class="px-1.5 py-0.5 bg-zinc-100 rounded text-[10px] border border-zinc-200">${r.t}</span></td>
                                    <td class="px-4 py-3 text-zinc-500">${r.d}</td>
                                    <td class="px-4 py-3 text-right"><span class="iconify text-zinc-400 hover:text-zinc-600 cursor-pointer" data-icon="lucide:download" data-width="14"></span></td>
                                 </tr>
                              `).join('')}
                           </tbody>
                        </table>
                     `, 'col-span-12')}
                  `);

                  // 6. CONTACT TIMELINE
                  if (id === 'timeline') return grid(`
                     ${card('Contact Profile', `
                        <div class="flex flex-col items-center text-center pb-6 border-b border-zinc-100">
                           <div class="w-20 h-20 rounded-full bg-zinc-200 mb-3 overflow-hidden border-2 border-white shadow-lg">
                              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="w-full h-full object-cover" />
                           </div>
                           <h2 class="text-lg font-bold text-zinc-900">Felix Vance</h2>
                           <p class="text-xs text-zinc-500 mb-3">CTO @ TechGlobal</p>
                           <div class="flex gap-2">
                              <button class="p-2 bg-zinc-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors"><span class="iconify" data-icon="lucide:mail" data-width="14"></span></button>
                              <button class="p-2 bg-zinc-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors"><span class="iconify" data-icon="lucide:phone" data-width="14"></span></button>
                              <button class="p-2 bg-zinc-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors"><span class="iconify" data-icon="lucide:linkedin" data-width="14"></span></button>
                           </div>
                        </div>
                        <div class="py-4 space-y-3">
                           <div><div class="text-[10px] text-zinc-400 uppercase font-bold mb-1">Email</div><div class="text-xs font-medium">felix@techglobal.com</div></div>
                           <div><div class="text-[10px] text-zinc-400 uppercase font-bold mb-1">Phone</div><div class="text-xs font-medium">+1 (555) 123-4567</div></div>
                           <div><div class="text-[10px] text-zinc-400 uppercase font-bold mb-1">Location</div><div class="text-xs font-medium">San Francisco, CA</div></div>
                           <div><div class="text-[10px] text-zinc-400 uppercase font-bold mb-1">Tags</div><div class="flex flex-wrap gap-1"><span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-medium">Decision Maker</span><span class="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-medium">Warm</span></div></div>
                        </div>
                        <div class="pt-4 border-t border-zinc-100">
                            <div class="text-[10px] text-zinc-400 mb-2">Deal Value</div>
                            <div class="text-xl font-bold text-zinc-900">$125,000</div>
                        </div>
                     `, 'col-span-12 md:col-span-3')}

                     ${card('Activity History', `
                        <div class="flex items-center gap-2 mb-6">
                           <div class="relative flex-1">
                              <span class="iconify absolute left-3 top-2.5 text-zinc-400" data-icon="lucide:search" data-width="14"></span>
                              <input type="text" placeholder="Search history..." class="w-full pl-9 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-indigo-500 focus:bg-white transition-all">
                           </div>
                           <button class="px-3 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium flex items-center gap-2 hover:bg-zinc-800"><span class="iconify" data-icon="lucide:plus"></span> Log Activity</button>
                        </div>

                        <div class="relative pl-4 space-y-8 before:absolute before:top-0 before:bottom-0 before:left-[19px] before:w-px before:bg-zinc-200">
                           ${[
                              {icon: 'mail', color: 'bg-blue-500', title: 'Email Sent: Proposal v2', time: '2 hours ago', user: 'Admin', desc: 'Sent the updated pricing tiers as requested during the call.'},
                              {icon: 'phone-call', color: 'bg-emerald-500', title: 'Call Logged: Negotiation', time: 'Yesterday', user: 'Sarah M.', desc: 'Discussed implementation timeline. They want to start in Nov.'},
                              {icon: 'file-text', color: 'bg-amber-500', title: 'Note Added', time: '3 days ago', user: 'Admin', desc: 'Felix mentioned budget approval meeting is next Tuesday.'},
                              {icon: 'calendar', color: 'bg-indigo-500', title: 'Meeting Scheduled', time: '5 days ago', user: 'System', desc: 'Demo scheduled for Oct 28th, 2:00 PM.'},
                              {icon: 'globe', color: 'bg-zinc-500', title: 'Page View: Pricing', time: '1 week ago', user: 'Tracking', desc: 'Viewed pricing page for 4m 32s.'},
                           ].map(e => `
                              <div class="relative pl-8 group">
                                 <div class="absolute left-0 top-0 w-10 h-10 bg-white rounded-full border border-zinc-200 flex items-center justify-center z-10 group-hover:border-indigo-300 transition-colors shadow-sm">
                                    <div class="w-6 h-6 rounded-full ${e.color} flex items-center justify-center text-white"><span class="iconify" data-icon="lucide:${e.icon}" data-width="12"></span></div>
                                 </div>
                                 <div class="bg-zinc-50 border border-zinc-200 rounded-lg p-3 hover:bg-white hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer">
                                    <div class="flex justify-between items-start mb-1">
                                       <h4 class="text-xs font-bold text-zinc-900">${e.title}</h4>
                                       <span class="text-[10px] text-zinc-400">${e.time}</span>
                                    </div>
                                    <p class="text-[11px] text-zinc-600 mb-2 leading-relaxed">${e.desc}</p>
                                    <div class="flex items-center gap-2">
                                       <div class="w-4 h-4 rounded-full bg-zinc-300"></div>
                                       <span class="text-[10px] text-zinc-500 font-medium">${e.user}</span>
                                    </div>
                                 </div>
                              </div>
                           `).join('')}
                        </div>
                     `, 'col-span-12 md:col-span-9')}
                  `);
              }

              /* -- FALLBACK -- */
              if (id === 'lead-scoring') return grid(`${card('Scoring Rules', `<div class="space-y-2 text-xs">${['Visited Pricing Page (+10)', 'Opened Email (+5)', 'Booked Demo (+50)', 'Unsubscribed (-20)'].map(r => `<div class="flex justify-between p-2 bg-zinc-50 rounded border border-zinc-100"><span>${r}</span><span class="iconify text-zinc-400 cursor-pointer" data-icon="lucide:edit-2" data-width="12"></span></div>`).join('')}</div>`, 'col-span-4')} ${card('Recent Leads', `<table class="w-full text-left"><thead class="text-[10px] uppercase text-zinc-500"><tr><th>Email</th><th>Score</th></tr></thead><tbody class="text-xs divide-y divide-zinc-50">${[['john@acme.com', 85, 'bg-emerald-500'], ['sarah@tech.co', 45, 'bg-amber-500'], ['mike@gmail.com', 12, 'bg-zinc-300']].map(l => `<tr><td class="py-2">${l[0]}</td><td class="py-2 flex items-center gap-2"><div class="w-16 h-1.5 bg-zinc-100 rounded-full overflow-hidden"><div class="${l[2]} h-full" style="width:${l[1]}%"></div></div>${l[1]}</td></tr>`).join('')}</tbody></table>`, 'col-span-8')}`);
              if (id === 'keyword-engine') return grid(`${card('Keyword Research', `<div class="flex gap-2 mb-4"><div class="relative flex-1"><span class="iconify absolute left-2.5 top-2.5 text-zinc-400" data-icon="lucide:search"></span><input type="text" placeholder="Enter seed keyword (e.g. 'saas marketing')" class="w-full pl-9 text-xs border-zinc-200 rounded-md py-2 focus:ring-indigo-500 focus:border-indigo-500 bg-zinc-50"></div><button class="bg-zinc-900 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10">Analyze</button></div><div class="flex gap-2 text-[10px] text-zinc-500"><span class="px-2 py-1 bg-zinc-100 rounded border border-zinc-200">🇺🇸 US Database</span><span class="px-2 py-1 bg-zinc-100 rounded border border-zinc-200">Last 30 Days</span></div>`, 'col-span-12 md:col-span-12')} ${card('Key Metrics', `<div class="grid grid-cols-4 gap-4 text-center divide-x divide-zinc-100"><div><div class="text-[10px] text-zinc-500 uppercase tracking-wide">Volume</div><div class="text-xl font-bold text-zinc-900 mt-1">12,400</div><div class="text-[10px] text-emerald-600 font-medium">High Intent</div></div><div><div class="text-[10px] text-zinc-500 uppercase tracking-wide">Difficulty (KD)</div><div class="text-xl font-bold text-rose-500 mt-1">78/100</div><div class="text-[10px] text-zinc-400 font-medium">Very Hard</div></div><div><div class="text-[10px] text-zinc-500 uppercase tracking-wide">CPC</div><div class="text-xl font-bold text-zinc-900 mt-1">$14.20</div><div class="text-[10px] text-zinc-400 font-medium">Commercial</div></div><div><div class="text-[10px] text-zinc-500 uppercase tracking-wide">Global Vol</div><div class="text-xl font-bold text-zinc-900 mt-1">45k</div><div class="text-[10px] text-zinc-400 font-medium">+15% YoY</div></div></div>`, 'col-span-12 md:col-span-8')} ${card('Trend', `<div class="h-24 flex items-end gap-1 px-1">${[40,45,55,60,50,65,75,80,70,85,90,95].map(h => `<div style="height:${h}%" class="flex-1 bg-indigo-100 hover:bg-indigo-500 transition-colors rounded-sm"></div>`).join('')}</div><div class="flex justify-between text-[10px] text-zinc-400 mt-2"><span>Jan</span><span>Dec</span></div>`, 'col-span-12 md:col-span-4')} ${card('Keyword Opportunities', `<table class="w-full text-left"><thead class="bg-zinc-50 border-y border-zinc-100 text-[10px] uppercase text-zinc-500 font-semibold"><tr><th class="px-4 py-2">Keyword</th><th class="px-4 py-2">Vol</th><th class="px-4 py-2">KD %</th><th class="px-4 py-2">CPC</th><th class="px-4 py-2">SERP</th></tr></thead><tbody class="divide-y divide-zinc-50 text-xs">${[['saas marketing strategies', '2.4k', 45, '$8.50', 'bg-emerald-500'], ['b2b saas marketing', '1.2k', 65, '$12.20', 'bg-amber-500'], ['marketing plan template', '5.1k', 82, '$4.10', 'bg-rose-500'], ['growth hacking tools', '800', 30, '$2.50', 'bg-emerald-500'], ['saas metrics', '3.3k', 55, '$9.00', 'bg-amber-500']].map(r => `<tr class="group hover:bg-zinc-50 transition-colors"><td class="px-4 py-3 font-medium text-zinc-700">${r[0]}</td><td class="px-4 py-3 text-zinc-500">${r[1]}</td><td class="px-4 py-3"><div class="flex items-center gap-2"><div class="w-12 h-1.5 bg-zinc-100 rounded-full overflow-hidden"><div class="${r[4]} h-full" style="width:${r[2]}%"></div></div>${r[2]}</div></td><td class="px-4 py-3 text-zinc-500">${r[3]}</td><td class="px-4 py-3 text-indigo-600 cursor-pointer hover:underline">View</td></tr>`).join('')}</tbody></table>`, 'col-span-12 md:col-span-8')} ${card('SERP Analysis', `<div class="space-y-4"><div class="flex items-center justify-between text-[10px] text-zinc-500 mb-2"><span>Position</span><span>Domain Auth</span></div>${[{pos:1, title:'The Ultimate Guide to SaaS...', url:'hubspot.com', da: 92}, {pos:2, title:'10 SaaS Marketing Strategies', url:'neilpatel.com', da: 88}, {pos:3, title:'What is SaaS Marketing?', url:'semrush.com', da: 85},].map(s => `<div class="p-3 bg-zinc-50 border border-zinc-100 rounded-lg group hover:border-indigo-200 transition-colors"><div class="flex justify-between items-start mb-1"><span class="text-[10px] font-bold bg-white border border-zinc-200 px-1.5 rounded text-zinc-600">#${s.pos}</span><span class="text-[10px] font-mono text-zinc-400">DA: ${s.da}</span></div><div class="text-xs font-semibold text-zinc-900 truncate">${s.title}</div><div class="text-[10px] text-emerald-600 truncate">${s.url}</div></div>`).join('')}</div>`, 'col-span-12 md:col-span-4')} ${card('Keyword Clusters', `<div class="flex flex-wrap gap-2">${['Strategy (14)', 'Tools (8)', 'Metrics (12)', 'B2B (9)', 'Agency (5)', 'Plan (4)'].map(c => `<span class="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] rounded-full border border-zinc-200 cursor-pointer hover:bg-white hover:border-indigo-300 transition-colors">${c}</span>`).join('')}</div>`, 'col-span-12')}`);

              if (feat) return grid(card('Configuration', 'Feature view ready. Select another tab to see detailed implementations.'));
              return grid(card('Configuration', 'Select a feature from the sidebar.'));
            }
    


      function loadSettings(tab = 'general') { activePortal = 'settings'; activeFeature = tab; renderSidebar(); document.getElementById('header-icon').innerHTML = '<span class="iconify" data-icon="lucide:settings" data-width="20"></span>'; document.getElementById('header-title').innerText = 'Settings'; document.getElementById('header-subtitle').innerText = 'System Preferences & Account'; const container = document.getElementById('main-view'); container.classList.remove('view-animate'); void container.offsetWidth; container.classList.add('view-animate'); const tabs = [{ id: 'general', label: 'General', icon: 'lucide:sliders' }, { id: 'profile', label: 'Profile', icon: 'lucide:user' }, { id: 'billing', label: 'Billing', icon: 'lucide:credit-card' }, { id: 'team', label: 'Team Members', icon: 'lucide:users' }, { id: 'notifications', label: 'Notifications', icon: 'lucide:bell' }, { id: 'api', label: 'API Keys', icon: 'lucide:code' }]; const content = { general: () => card('General Settings', `<div class="space-y-4 max-w-2xl"><div class="flex items-center justify-between p-3 border rounded bg-zinc-50"><div><div class="text-xs font-bold text-zinc-900">Dark Mode</div><div class="text-[10px] text-zinc-500">Toggle system theme</div></div><button class="relative inline-flex h-5 w-9 items-center rounded-full bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"><span class="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform"></span></button></div><div class="flex items-center justify-between p-3 border rounded bg-zinc-50"><div><div class="text-xs font-bold text-zinc-900">Language</div><div class="text-[10px] text-zinc-500">System language</div></div><select class="text-xs border-zinc-200 rounded"><option>English</option><option>Spanish</option><option>French</option></select></div>${btn('Save Changes', 'lucide:save', 'showToast("Settings saved")')}</div>`), profile: () => card('Public Profile', `<div class="flex items-start gap-6"><div class="relative group"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" class="w-24 h-24 rounded-full border-2 border-zinc-200"><div class="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white text-[10px]">Change</div></div><div class="flex-1 space-y-3 max-w-md">${input('Display Name', '', 'Admin User')}${input('Email Address', '', 'admin@digitize.ai')}${input('Job Title', '', 'Administrator')}<div class="pt-2">${btn('Update Profile', 'lucide:check', 'showToast("Profile updated")')}</div></div></div>`), billing: () => grid(`${card('Current Plan', `<div class="flex justify-between items-center mb-4"><div><div class="text-lg font-bold text-zinc-900">Enterprise Plan</div><div class="text-xs text-zinc-500">$499/month • Billed Annually</div></div><span class="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] rounded-full font-bold">Active</span></div><div class="w-full bg-zinc-100 h-2 rounded mb-1 overflow-hidden"><div class="bg-indigo-600 h-full w-3/4"></div></div><div class="flex justify-between text-[10px] text-zinc-500 mb-4"><span>250k / 1M Credits Used</span><span>Renews Dec 31, 2024</span></div><div class="flex gap-2">${btn('Upgrade Plan', 'lucide:zap', '')}<button class="w-full flex justify-center items-center gap-2 bg-white border border-zinc-200 text-zinc-700 py-2 rounded-md text-xs font-medium hover:bg-zinc-50 transition-colors">Manage Subscription</button></div>`, 'col-span-12 md:col-span-6')}${card('Payment Method', `<div class="flex items-center gap-3 p-3 border rounded bg-zinc-50 mb-3"><div class="w-10 h-6 bg-zinc-800 rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div><div class="flex-1"><div class="text-xs font-bold text-zinc-900">•••• 4242</div><div class="text-[10px] text-zinc-500">Expires 12/28</div></div><button class="text-[10px] text-indigo-600 font-medium">Edit</button></div><div class="space-y-2"><div class="flex justify-between text-xs py-2 border-b"><span>Oct 1, 2023</span><span>$499.00</span><span class="text-indigo-600 cursor-pointer">PDF</span></div><div class="flex justify-between text-xs py-2 border-b"><span>Sep 1, 2023</span><span>$499.00</span><span class="text-indigo-600 cursor-pointer">PDF</span></div></div>`, 'col-span-12 md:col-span-6')}`), team: () => card('Team Management', `<div class="flex justify-between items-center mb-4"><div class="text-xs text-zinc-500">4 / 10 Seats Used</div><button class="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded flex items-center gap-1"><span class="iconify" data-icon="lucide:plus"></span> Invite Member</button></div><table class="w-full text-left text-xs"><thead class="bg-zinc-50 border-y border-zinc-100 text-zinc-500"><tr><th class="py-2 px-2">User</th><th class="py-2 px-2">Role</th><th class="py-2 px-2">Status</th><th class="py-2 px-2"></th></tr></thead><tbody class="divide-y divide-zinc-50"><tr><td class="p-2 font-medium">Admin User</td><td class="p-2">Owner</td><td class="p-2"><span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Active</td><td class="p-2 text-right"><span class="iconify text-zinc-400" data-icon="lucide:more-horizontal"></span></td></tr><tr><td class="p-2 font-medium">Sarah Miller</td><td class="p-2">Editor</td><td class="p-2"><span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Active</td><td class="p-2 text-right"><span class="iconify text-zinc-400 cursor-pointer" data-icon="lucide:more-horizontal"></span></td></tr><tr><td class="p-2 font-medium">Mike Ross</td><td class="p-2">Viewer</td><td class="p-2"><span class="w-2 h-2 rounded-full bg-amber-500 inline-block"></span> Invite Sent</td><td class="p-2 text-right"><span class="iconify text-zinc-400 cursor-pointer" data-icon="lucide:more-horizontal"></span></td></tr></tbody></table>`), notifications: () => card('Notification Preferences', `<div class="space-y-0 divide-y divide-zinc-100">${['Email Digest', 'New Leads Alert', 'Campaign Finished', 'Security Alerts', 'Marketing Tips'].map(n => `<div class="flex items-center justify-between py-3"><span class="text-xs font-medium text-zinc-700">${n}</span><input type="checkbox" checked class="accent-indigo-600"></div>`).join('')}</div>`), api: () => card('API Keys', `<div class="p-3 bg-amber-50 border border-amber-100 rounded text-amber-800 text-[10px] mb-4 flex gap-2"><span class="iconify" data-icon="lucide:alert-triangle"></span> Keep your keys secret. Do not share them in client-side code.</div><div class="space-y-4"><div><div class="flex justify-between mb-1"><label class="text-[11px] font-medium text-zinc-500">Production Key</label><span class="text-[10px] text-zinc-400">Created 2m ago</span></div><div class="flex gap-2"><input type="password" value="sk_live_51Mz..." readonly class="flex-1 text-xs border-zinc-200 rounded bg-zinc-50 text-zinc-500"><button class="px-3 py-1.5 border border-zinc-200 rounded bg-white text-xs hover:bg-zinc-50">Reveal</button><button class="px-3 py-1.5 border border-zinc-200 rounded bg-white text-xs hover:bg-zinc-50">Roll</button></div></div><div><div class="flex justify-between mb-1"><label class="text-[11px] font-medium text-zinc-500">Test Key</label><span class="text-[10px] text-zinc-400">Created 2m ago</span></div><div class="flex gap-2"><input type="text" value="sk_test_51Mz..." readonly class="flex-1 text-xs border-zinc-200 rounded bg-zinc-50 text-zinc-500"><button class="px-3 py-1.5 border border-zinc-200 rounded bg-white text-xs hover:bg-zinc-50">Copy</button></div></div></div>`) }; const navHTML = tabs.map(t => `<button onclick="loadSettings('${t.id}')" class="w-full text-left px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2 transition-colors ${tab === t.id ? 'bg-indigo-50 text-indigo-700' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'}"><span class="iconify" data-icon="${t.icon}" data-width="16"></span>${t.label}</button>`).join(''); container.innerHTML = `<div class="flex h-full gap-6"><div class="w-48 flex-shrink-0 space-y-1 pt-2">${navHTML}</div><div class="flex-1 pt-2 overflow-y-auto pb-20 scroll-smooth">${content[tab] ? content[tab]() : content.general()}</div></div>`; }
    


      (() => {
        const originalGenerate = generateFeatureContent;
        generateFeatureContent = function(portal, id, feat) {
          if (portal === 'social') {
            if (id === 'video-scripts') return grid(`
              ${card('Script Generator', `
                 <div class="space-y-4">
                    ${input('Topic or URL', 'e.g. How to use AI for marketing')}
                    <div class="grid grid-cols-2 gap-4">
                       <div><label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Platform</label><select class="w-full text-xs border-zinc-200 rounded-md bg-zinc-50 focus:ring-indigo-500 focus:border-indigo-500"><option>TikTok</option><option>Instagram Reels</option><option>YouTube Shorts</option></select></div>
                       <div><label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Tone</label><select class="w-full text-xs border-zinc-200 rounded-md bg-zinc-50 focus:ring-indigo-500 focus:border-indigo-500"><option>Educational</option><option>Funny</option><option>Controversial</option></select></div>
                    </div>
                    ${btn('Generate Script', 'lucide:sparkles', '')}
                 </div>
              `, 'col-span-12 md:col-span-4')}
              ${card('Generated Script', `
                 <div class="border border-zinc-200 rounded-lg p-4 bg-zinc-50 h-[400px] overflow-y-auto custom-scrollbar">
                    <div class="flex items-start gap-3 mb-4">
                       <div class="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs mt-0.5">1</div>
                       <div><div class="text-[10px] font-bold text-indigo-600 uppercase mb-0.5">Hook (0:00-0:03)</div><p class="text-xs text-zinc-800 font-medium">"Stop wasting hours on captions. Here is how I do it in 5 seconds."</p><p class="text-[10px] text-zinc-500 italic mt-1">[Visual: Close up of frustrated face, then snap to screen]</p></div>
                    </div>
                    <div class="flex items-start gap-3 mb-4">
                       <div class="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-bold text-xs mt-0.5">2</div>
                       <div><div class="text-[10px] font-bold text-zinc-500 uppercase mb-0.5">Value (0:03-0:15)</div><p class="text-xs text-zinc-800">"Go to this tool, paste your link, and boom. It generates 10 viral hooks instantly."</p><p class="text-[10px] text-zinc-500 italic mt-1">[Visual: Screen recording of the tool in action, sped up]</p></div>
                    </div>
                    <div class="flex items-start gap-3">
                       <div class="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-bold text-xs mt-0.5">3</div>
                       <div><div class="text-[10px] font-bold text-zinc-500 uppercase mb-0.5">CTA (0:15-0:20)</div><p class="text-xs text-zinc-800">"Comment 'SCRIPT' and I'll send you the link right now."</p><p class="text-[10px] text-zinc-500 italic mt-1">[Visual: Pointing to comments section]</p></div>
                    </div>
                 </div>
                 <div class="flex justify-end gap-2 mt-4">
                    <button class="px-3 py-1.5 border border-zinc-200 rounded text-xs hover:bg-zinc-50 transition-colors">Copy</button>
                    <button class="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs hover:bg-indigo-700 transition-colors">Save to Calendar</button>
                 </div>
              `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'repurposing') return grid(`
              ${card('Source Material', `
                 ${input('Blog URL or Youtube Link', 'https://...')}
                 <div class="mt-4">
                    <label class="block text-[11px] font-medium text-zinc-500 mb-2">Convert To:</label>
                    <div class="grid grid-cols-3 gap-2">
                       <div class="border border-indigo-500 bg-indigo-50 p-2 rounded text-center cursor-pointer"><span class="iconify block mx-auto mb-1 text-indigo-600" data-icon="lucide:twitter"></span><span class="text-[10px] font-medium text-indigo-700">Thread</span></div>
                       <div class="border border-zinc-200 p-2 rounded text-center cursor-pointer hover:border-zinc-300 bg-zinc-50"><span class="iconify block mx-auto mb-1 text-zinc-400" data-icon="lucide:linkedin"></span><span class="text-[10px] font-medium text-zinc-600">Post</span></div>
                       <div class="border border-zinc-200 p-2 rounded text-center cursor-pointer hover:border-zinc-300 bg-zinc-50"><span class="iconify block mx-auto mb-1 text-zinc-400" data-icon="lucide:instagram"></span><span class="text-[10px] font-medium text-zinc-600">Carousel</span></div>
                    </div>
                 </div>
                 <div class="mt-4">${btn('Transform', 'lucide:refresh-cw', '')}</div>
              `, 'col-span-12 md:col-span-4')}
              ${card('Draft: Twitter Thread', `
                 <div class="space-y-4">
                    <div class="p-3 bg-white border border-zinc-100 rounded-lg shadow-sm">
                       <div class="flex gap-2 items-center mb-1"><div class="w-5 h-5 bg-zinc-200 rounded-full"></div><span class="text-xs font-bold">Admin</span><span class="text-[10px] text-zinc-400">@admin</span></div>
                       <p class="text-xs text-zinc-800 mt-1">1/ 5 reasons your SaaS isn't growing (and how to fix it): 🧵👇</p>
                    </div>
                    <div class="p-3 bg-white border border-zinc-100 rounded-lg shadow-sm ml-6 relative before:absolute before:-left-4 before:top-[-20px] before:bottom-1/2 before:w-px before:bg-zinc-200">
                       <div class="flex gap-2 items-center mb-1"><div class="w-5 h-5 bg-zinc-200 rounded-full"></div><span class="text-xs font-bold">Admin</span><span class="text-[10px] text-zinc-400">@admin</span></div>
                       <p class="text-xs text-zinc-800 mt-1">2/ You're focusing on features, not benefits. Users don't care about your "AI algorithm". They care about saving 5 hours a week.</p>
                    </div>
                    <div class="p-3 bg-white border border-zinc-100 rounded-lg shadow-sm ml-6 relative before:absolute before:-left-4 before:top-[-20px] before:bottom-1/2 before:w-px before:bg-zinc-200">
                       <div class="flex gap-2 items-center mb-1"><div class="w-5 h-5 bg-zinc-200 rounded-full"></div><span class="text-xs font-bold">Admin</span><span class="text-[10px] text-zinc-400">@admin</span></div>
                       <p class="text-xs text-zinc-800 mt-1">3/ Your pricing is too complex. If I can't understand it in 10 seconds, I'm closing the tab.</p>
                    </div>
                 </div>
              `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'graphics') return grid(`
              ${card('Design Studio', `
                  ${input('Text or Prompt', 'Quote: "Consistency is key."')}
                  <div class="grid grid-cols-3 gap-2 mb-4">
                     <button class="text-[10px] py-1 border border-zinc-200 rounded bg-zinc-50 hover:bg-white transition-colors">Quote</button>
                     <button class="text-[10px] py-1 border border-zinc-200 rounded bg-zinc-50 hover:bg-white transition-colors">Chart</button>
                     <button class="text-[10px] py-1 border border-zinc-200 rounded bg-zinc-50 hover:bg-white transition-colors">Promo</button>
                  </div>
                  <div class="mb-4">
                     <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Style</label>
                     <div class="flex gap-2">
                        <div class="w-8 h-8 rounded bg-zinc-900 border-2 border-indigo-500 cursor-pointer"></div>
                        <div class="w-8 h-8 rounded bg-white border border-zinc-200 cursor-pointer hover:border-zinc-400"></div>
                        <div class="w-8 h-8 rounded bg-blue-500 cursor-pointer hover:opacity-80"></div>
                     </div>
                  </div>
                  ${btn('Generate Designs', 'lucide:image', '')}
              `, 'col-span-12 md:col-span-4')}
              ${card('Results', `
                 <div class="grid grid-cols-2 gap-4">
                    <div class="aspect-square bg-zinc-900 flex items-center justify-center p-6 text-center rounded-lg shadow-sm group relative">
                       <h3 class="text-white font-serif text-xl italic">"Consistency is key."</h3>
                       <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity rounded-lg">
                          <button class="p-2 bg-white rounded-full text-zinc-900 hover:scale-110 transition-transform"><span class="iconify" data-icon="lucide:download" data-width="16"></span></button>
                       </div>
                    </div>
                    <div class="aspect-square bg-white border border-zinc-200 flex flex-col items-center justify-center p-6 text-center rounded-lg shadow-sm group relative">
                       <div class="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-2">Daily Reminder</div>
                       <h3 class="text-zinc-900 font-bold text-xl">Consistency<br>is Key.</h3>
                       <div class="mt-4 w-8 h-1 bg-indigo-500"></div>
                       <div class="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity rounded-lg">
                          <button class="p-2 bg-white rounded-full text-zinc-900 hover:scale-110 transition-transform"><span class="iconify" data-icon="lucide:download" data-width="16"></span></button>
                       </div>
                    </div>
                    <div class="aspect-square bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center p-6 text-center rounded-lg shadow-sm group relative">
                       <h3 class="text-white font-bold text-2xl drop-shadow-md">CONSISTENCY<br>IS<br>KEY</h3>
                       <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity rounded-lg">
                          <button class="p-2 bg-white rounded-full text-zinc-900 hover:scale-110 transition-transform"><span class="iconify" data-icon="lucide:download" data-width="16"></span></button>
                       </div>
                    </div>
                    <div class="aspect-square bg-zinc-50 flex items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 text-zinc-400 text-xs hover:border-indigo-400 hover:text-indigo-500 cursor-pointer transition-colors">
                       + Generate more
                    </div>
                 </div>
              `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'scheduling') return grid(`
               ${card('Heatmap: Best Times', `
                  <div class="grid grid-cols-8 gap-1 mb-2">
                     <div class="text-[10px] text-zinc-400"></div>
                     ${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => `<div class="text-[10px] text-center text-zinc-500 font-medium">${d}</div>`).join('')}

                     ${['9am', '12pm', '3pm', '6pm', '9pm'].map(t => `
                         <div class="text-[10px] text-zinc-400 text-right pr-2">${t}</div>
                         ${Array.from({length: 7}).map(() => {
                             const opacity = Math.random();
                             const color = opacity > 0.6 ? 'bg-indigo-500' : opacity > 0.3 ? 'bg-indigo-300' : 'bg-zinc-100';
                             return `<div class="h-8 rounded-sm ${color} opacity-90 hover:opacity-100 transition-opacity cursor-pointer relative group"></div>`
                         }).join('')}
                     `).join('')}
                  </div>
                  <div class="flex justify-end gap-4 items-center text-[10px] text-zinc-500 mt-2">
                     <div class="flex items-center gap-1"><div class="w-3 h-3 bg-zinc-100 rounded-sm"></div> Low</div>
                     <div class="flex items-center gap-1"><div class="w-3 h-3 bg-indigo-300 rounded-sm"></div> Med</div>
                     <div class="flex items-center gap-1"><div class="w-3 h-3 bg-indigo-500 rounded-sm"></div> High</div>
                  </div>
               `, 'col-span-12 md:col-span-8')}
               ${card('Queue', `
                  <div class="space-y-3">
                     <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg flex gap-3">
                        <div class="w-10 h-10 bg-zinc-200 rounded overflow-hidden flex-shrink-0"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&q=80" class="w-full h-full object-cover"></div>
                        <div class="flex-1 min-w-0">
                           <div class="flex justify-between mb-0.5"><span class="text-xs font-bold text-zinc-900">Product Launch</span><span class="text-[10px] text-zinc-500">Today 3pm</span></div>
                           <div class="flex items-center gap-2"><span class="iconify text-zinc-400" data-icon="lucide:instagram" data-width="12"></span><span class="text-[10px] text-zinc-500">Scheduled</span></div>
                        </div>
                     </div>
                     <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg flex gap-3">
                        <div class="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0">T</div>
                        <div class="flex-1 min-w-0">
                           <div class="flex justify-between mb-0.5"><span class="text-xs font-bold text-zinc-900">Industry News</span><span class="text-[10px] text-zinc-500">Tom 9am</span></div>
                           <div class="flex items-center gap-2"><span class="iconify text-zinc-400" data-icon="lucide:twitter" data-width="12"></span><span class="text-[10px] text-zinc-500">Scheduled</span></div>
                        </div>
                     </div>
                     <button class="w-full py-2 border border-dashed border-zinc-300 rounded-lg text-xs text-zinc-400 hover:text-indigo-600 hover:border-indigo-300 transition-colors">+ Add to Queue</button>
                  </div>
               `, 'col-span-12 md:col-span-4')}
            `);

            if (id === 'captions') return grid(`
               ${card('Image / Context', `
                  <div class="border-2 border-dashed border-zinc-200 rounded-lg h-48 flex flex-col items-center justify-center text-zinc-400 mb-4 hover:border-indigo-400 hover:bg-indigo-50/10 transition-colors cursor-pointer">
                     <span class="iconify mb-2" data-icon="lucide:image-plus" data-width="24"></span>
                     <span class="text-xs">Upload image or drag here</span>
                  </div>
                  ${input('Or describe the post', 'Photo of our team working late...')}
                  ${btn('Generate Captions', 'lucide:pen-tool', '')}
               `, 'col-span-12 md:col-span-4')}
               ${card('Suggestions', `
                  <div class="space-y-4">
                     <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg group hover:border-indigo-300 transition-colors relative">
                        <div class="flex justify-between mb-2"><span class="text-[10px] uppercase font-bold text-zinc-500">Option 1: Professional</span><button class="text-[10px] text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Copy</button></div>
                        <p class="text-xs text-zinc-800 leading-relaxed">Big things coming soon. 🚀 Our team has been heads-down building the next generation of marketing tools. Can't wait to share what we've been working on. #SaaS #BuildingInPublic #StartupLife</p>
                        <div class="mt-2 text-[10px] text-zinc-400">Est. Reach: 1.2k • Sentiment: Excited</div>
                     </div>
                     <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg group hover:border-indigo-300 transition-colors relative">
                         <div class="flex justify-between mb-2"><span class="text-[10px] uppercase font-bold text-zinc-500">Option 2: Casual</span><button class="text-[10px] text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Copy</button></div>
                         <p class="text-xs text-zinc-800 leading-relaxed">Late nights, bright lights, and code. 💻 Pizza is fueling this release. Who else is grinding tonight? 🍕 #DevLife #Hustle</p>
                         <div class="mt-2 text-[10px] text-zinc-400">Est. Reach: 2.5k • Sentiment: Relatable</div>
                     </div>
                     <div class="mt-4">
                        <div class="text-[10px] font-bold text-zinc-900 mb-2">Recommended Hashtags</div>
                        <div class="flex flex-wrap gap-1">
                           <span class="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 cursor-pointer hover:bg-indigo-100">#Tech (12M)</span>
                           <span class="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] rounded border border-emerald-100 cursor-pointer hover:bg-emerald-100">#Growth (5M)</span>
                           <span class="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] rounded border border-zinc-200 cursor-pointer hover:bg-zinc-200">#Startup</span>
                        </div>
                     </div>
                  </div>
               `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'trends') return grid(`
               ${card('Trending Topics', `
                  <div class="space-y-0 divide-y divide-zinc-50">
                     ${[
                         {n: 'AI Regulation', cat: 'Tech', vol: '+450%', sent: 'Neutral'},
                         {n: 'Sustainable Packaging', cat: 'E-com', vol: '+220%', sent: 'Positive'},
                         {n: 'Remote Work Tax', cat: 'Business', vol: '+180%', sent: 'Negative'},
                         {n: 'Minimalist UI', cat: 'Design', vol: '+120%', sent: 'Positive'},
                         {n: 'Short Form Video', cat: 'Social', vol: '+90%', sent: 'Neutral'}
                     ].map((t, i) => `
                         <div class="flex items-center justify-between py-3 px-2 hover:bg-zinc-50 rounded-lg cursor-pointer group transition-colors">
                            <div class="flex items-center gap-3">
                               <div class="w-6 text-center text-xs font-bold text-zinc-300 group-hover:text-indigo-600">${i+1}</div>
                               <div>
                                  <div class="text-xs font-bold text-zinc-900">${t.n}</div>
                                  <div class="text-[10px] text-zinc-500">${t.cat}</div>
                               </div>
                            </div>
                            <div class="text-right">
                               <div class="text-xs font-bold text-emerald-600">${t.vol}</div>
                               <div class="text-[10px] text-zinc-400">${t.sent}</div>
                            </div>
                         </div>
                     `).join('')}
                  </div>
               `, 'col-span-12 md:col-span-5')}
               ${card('Trend Deep Dive: AI Regulation', `
                  <div class="h-48 bg-zinc-50 border border-zinc-100 rounded-lg mb-4 relative overflow-hidden flex items-end justify-between px-2 pt-8 gap-1">
                        ${[20, 25, 30, 28, 45, 60, 55, 75, 85, 95, 80, 100].map(h => `<div style="height:${h}%" class="flex-1 bg-indigo-500/20 hover:bg-indigo-500 transition-colors rounded-t-sm"></div>`).join('')}
                  </div>
                  <div class="grid grid-cols-2 gap-4 mb-4">
                     <div class="p-3 bg-white border border-zinc-200 rounded-lg">
                        <div class="text-[10px] text-zinc-500 uppercase">Discussion Vol</div>
                        <div class="text-xl font-bold text-zinc-900">2.4M</div>
                     </div>
                     <div class="p-3 bg-white border border-zinc-200 rounded-lg">
                        <div class="text-[10px] text-zinc-500 uppercase">Key Demographic</div>
                        <div class="text-xl font-bold text-zinc-900">24-35</div>
                     </div>
                  </div>
                  <div class="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                     <div class="flex items-center gap-2 mb-2 text-indigo-700 font-bold text-xs"><span class="iconify" data-icon="lucide:lightbulb"></span> Content Idea</div>
                     <p class="text-xs text-indigo-900 mb-3">Create a reel explaining "3 ways the new AI act impacts small business" using a green screen background of the news article.</p>
                     <button class="w-full py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded hover:bg-indigo-700 transition-colors">Create Draft</button>
                  </div>
               `, 'col-span-12 md:col-span-7')}
            `);
          }
          return originalGenerate(portal, id, feat);
        };
      })();
    


      (() => {
        const prevGenerate = generateFeatureContent;
        generateFeatureContent = function(portal, id, feat) {
          if (portal === 'marketing') {
            if (id === 'ad-creator') return grid(`
              ${card('Campaign Configuration', `
                <div class="space-y-4">
                    ${input('Campaign Name', 'e.g. Q4 Product Launch')}
                    ${input('Primary Keyword', 'e.g. Remote Collaboration')}
                    <div>
                        <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Platform Target</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button class="py-2 border border-indigo-500 bg-indigo-50 text-indigo-700 rounded text-[10px] font-bold">Facebook</button>
                            <button class="py-2 border border-zinc-200 bg-white text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50">LinkedIn</button>
                            <button class="py-2 border border-zinc-200 bg-white text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50">Google</button>
                        </div>
                    </div>
                    ${btn('Generate Ad Variants', 'lucide:wand-2', '')}
                </div>
              `, 'col-span-12 md:col-span-4')}
              ${card('Generated Variants', `
                <div class="grid grid-cols-2 gap-4 h-full">
                    <div class="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">D</div>
                            <div><div class="text-xs font-bold text-zinc-900">Digitize AI</div><div class="text-[10px] text-zinc-500">Sponsored</div></div>
                        </div>
                        <div class="text-xs text-zinc-800 mb-3 leading-relaxed">Stop wasting budget on guessing games. 📉 Our AI analyzes your funnel in real-time to maximize ROI. Try it free.</div>
                        <div class="aspect-video bg-zinc-100 rounded mb-3 flex items-center justify-center text-zinc-400 border border-zinc-200"><span class="iconify" data-icon="lucide:bar-chart-2" data-width="24"></span></div>
                        <div class="bg-zinc-50 p-2 rounded border border-zinc-100 flex justify-between items-center mt-auto">
                            <span class="text-[10px] font-bold text-zinc-700 uppercase tracking-tight">Start Trial</span>
                            <button class="px-3 py-1 bg-zinc-200 text-zinc-600 text-[10px] font-bold rounded">Sign Up</button>
                        </div>
                    </div>
                    <div class="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">D</div>
                            <div><div class="text-xs font-bold text-zinc-900">Digitize AI</div><div class="text-[10px] text-zinc-500">Sponsored</div></div>
                        </div>
                        <div class="text-xs text-zinc-800 mb-3 leading-relaxed">Your data is trying to tell you something. 🗣️ Are you listening? Unlock actionable insights with one click.</div>
                        <div class="aspect-video bg-zinc-100 rounded mb-3 flex items-center justify-center text-zinc-400 border border-zinc-200"><span class="iconify" data-icon="lucide:pie-chart" data-width="24"></span></div>
                        <div class="bg-zinc-50 p-2 rounded border border-zinc-100 flex justify-between items-center mt-auto">
                            <span class="text-[10px] font-bold text-zinc-700 uppercase tracking-tight">Learn More</span>
                            <button class="px-3 py-1 bg-zinc-200 text-zinc-600 text-[10px] font-bold rounded">Visit Site</button>
                        </div>
                    </div>
                </div>
              `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'landing-page') return grid(`
              ${card('Structure Builder', `
                <div class="space-y-2">
                    ${['Header & Hero', 'Features Grid', 'Social Proof', 'Pricing Table', 'FAQ Section', 'Footer CTA'].map(s => `
                        <div class="flex items-center justify-between p-2.5 bg-zinc-50 border border-zinc-200 rounded cursor-move hover:border-indigo-300 hover:shadow-sm transition-all group">
                            <div class="flex items-center gap-2">
                                <span class="iconify text-zinc-400" data-icon="lucide:grip-vertical"></span>
                                <span class="text-xs font-medium text-zinc-700">${s}</span>
                            </div>
                            <span class="iconify text-zinc-300 group-hover:text-indigo-500 cursor-pointer" data-icon="lucide:settings-2" data-width="12"></span>
                        </div>
                    `).join('')}
                    <button class="w-full py-2 border border-dashed border-zinc-300 rounded text-[10px] text-zinc-400 font-medium hover:text-indigo-600 hover:border-indigo-400 transition-colors">+ Add Section</button>
                </div>
              `, 'col-span-12 md:col-span-3')}
              ${card('Live Preview', `
                <div class="border border-zinc-200 rounded-lg h-[500px] overflow-hidden bg-white flex flex-col">
                    <div class="h-8 bg-zinc-50 border-b border-zinc-200 flex items-center px-3 gap-1.5">
                        <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                        <div class="ml-4 bg-white border border-zinc-200 px-3 py-0.5 rounded text-[10px] text-zinc-400 flex-1 text-center">landing-page-v1.html</div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-8 text-center scroll-smooth">
                        <div class="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[9px] font-bold uppercase mb-4 border border-indigo-100">New Release 2.0</div>
                        <h1 class="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">Scale your business without <br>scaling your stress.</h1>
                        <p class="text-sm text-zinc-500 max-w-md mx-auto mb-6 leading-relaxed">The automated toolkit for modern enterprises. We handle the boring stuff so you can focus on strategy.</p>
                        <div class="flex justify-center gap-3 mb-12">
                            <button class="px-5 py-2.5 bg-zinc-900 text-white rounded-md text-xs font-semibold">Get Started Free</button>
                            <button class="px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-md text-xs font-semibold hover:bg-zinc-50">View Demo</button>
                        </div>
                        <div class="grid grid-cols-3 gap-4 opacity-50">
                           <div class="h-24 bg-zinc-100 rounded border border-zinc-200"></div>
                           <div class="h-24 bg-zinc-100 rounded border border-zinc-200"></div>
                           <div class="h-24 bg-zinc-100 rounded border border-zinc-200"></div>
                        </div>
                    </div>
                </div>
              `, 'col-span-12 md:col-span-9')}
            `);

            if (id === 'email-campaign') return grid(`
              ${card('Sequence Workflow', `
                <div class="h-[400px] bg-zinc-50/50 rounded-lg border border-zinc-200 relative overflow-hidden flex flex-col items-center pt-8">
                     <!-- Node 1 -->
                     <div class="w-48 p-3 bg-white border border-zinc-300 rounded shadow-sm text-center z-10 relative">
                         <div class="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Trigger</div>
                         <div class="text-xs font-bold text-zinc-900">New User Sign Up</div>
                         <div class="absolute -bottom-6 left-1/2 w-px h-6 bg-zinc-300"></div>
                     </div>
                     <!-- Node 2 -->
                     <div class="mt-6 w-56 p-3 bg-white border border-indigo-200 ring-1 ring-indigo-500/20 rounded shadow-sm text-center z-10 relative">
                         <div class="flex justify-between items-center mb-1">
                             <span class="text-[9px] font-bold text-indigo-600 uppercase tracking-wider">Email 1</span>
                             <span class="text-[9px] font-bold text-emerald-600">42% Open</span>
                         </div>
                         <div class="text-xs font-medium text-zinc-900">Welcome to the family</div>
                         <div class="absolute -bottom-6 left-1/2 w-px h-6 bg-zinc-300"></div>
                     </div>
                     <!-- Node 3 -->
                     <div class="mt-6 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-[10px] font-medium text-zinc-500 z-10 relative">
                         Wait 2 Days
                         <div class="absolute -bottom-6 left-1/2 w-px h-6 bg-zinc-300"></div>
                     </div>
                     <!-- Node 4 -->
                     <div class="mt-6 w-56 p-3 bg-white border border-zinc-300 rounded shadow-sm text-center z-10 opacity-70">
                         <div class="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Email 2</div>
                         <div class="text-xs font-medium text-zinc-900">Getting started tip...</div>
                     </div>
                </div>
              `, 'col-span-12 md:col-span-8')}
              ${card('Performance', `
                <div class="grid grid-cols-2 gap-3 mb-6">
                   <div class="p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
                       <div class="text-2xl font-bold text-emerald-600">48.2%</div>
                       <div class="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">Open Rate</div>
                   </div>
                   <div class="p-3 bg-blue-50 border border-blue-100 rounded-lg text-center">
                       <div class="text-2xl font-bold text-blue-600">14.5%</div>
                       <div class="text-[10px] font-bold text-blue-800 uppercase tracking-wide">Click Rate</div>
                   </div>
                </div>
                <div>
                   <div class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3">Recent Campaigns</div>
                   <div class="space-y-2">
                       ${['Onboarding v2', 'Win-back Q3', 'Newsletter #45'].map(c => `
                           <div class="flex items-center justify-between p-2 bg-zinc-50 rounded border border-transparent hover:border-zinc-200 cursor-pointer">
                               <span class="text-xs font-medium text-zinc-700">${c}</span>
                               <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                           </div>
                       `).join('')}
                   </div>
                </div>
              `, 'col-span-12 md:col-span-4')}
            `);

            if (id === 'analytics') return grid(`
              ${card('Traffic Sources', `
                <div class="flex items-end gap-3 h-56 px-2">
                    ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => {
                        const h = Math.floor(Math.random() * 60) + 20;
                        return `<div class="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                            <div class="w-full bg-indigo-500/90 group-hover:bg-indigo-600 transition-colors rounded-t-sm relative" style="height: ${h}%">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">${h*120}</div>
                            </div>
                            <div class="text-[10px] text-zinc-400 text-center font-medium">${d}</div>
                        </div>`;
                    }).join('')}
                </div>
              `, 'col-span-12 md:col-span-8')}
              ${card('Conversion Funnel', `
                <div class="space-y-4">
                    <div class="relative">
                        <div class="flex justify-between text-xs mb-1 font-medium text-zinc-700"><span>Impressions</span><span>12,405</span></div>
                        <div class="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div class="bg-zinc-400 h-full w-full"></div></div>
                    </div>
                    <div class="relative px-4">
                        <div class="flex justify-between text-xs mb-1 font-medium text-zinc-700"><span>Clicks</span><span>3,200</span></div>
                        <div class="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div class="bg-indigo-400 h-full w-[25%]"></div></div>
                    </div>
                    <div class="relative px-8">
                        <div class="flex justify-between text-xs mb-1 font-medium text-zinc-700"><span>Sign Ups</span><span>850</span></div>
                        <div class="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div class="bg-indigo-600 h-full w-[26%]"></div></div>
                    </div>
                    <div class="relative px-12">
                        <div class="flex justify-between text-xs mb-1 font-medium text-zinc-700"><span>Purchases</span><span>120</span></div>
                        <div class="w-full bg-zinc-100 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[14%]"></div></div>
                    </div>
                </div>
              `, 'col-span-12 md:col-span-4')}
            `);

            if (id === 'brand-kit') return grid(`
              ${card('Brand Assets', `
                <div class="flex items-start gap-8">
                    <div>
                        <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Logo Variations</div>
                        <div class="flex gap-4">
                            <div class="w-20 h-20 bg-zinc-900 rounded-lg flex items-center justify-center shadow-md">
                                <span class="text-white font-bold text-xl">D</span>
                            </div>
                            <div class="w-20 h-20 bg-white border border-zinc-200 rounded-lg flex items-center justify-center shadow-sm">
                                <span class="text-zinc-900 font-bold text-xl">D</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                         <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Color Palette</div>
                         <div class="grid grid-cols-4 gap-3">
                             ${['#4F46E5', '#10B981', '#F59E0B', '#18181B'].map(c => `
                                 <div class="space-y-1 group cursor-pointer">
                                     <div class="h-12 w-full rounded-md shadow-sm ring-1 ring-black/5 group-hover:scale-105 transition-transform" style="background-color: ${c}"></div>
                                     <div class="text-[10px] text-zinc-500 font-mono text-center">${c}</div>
                                 </div>
                             `).join('')}
                         </div>
                    </div>
                </div>
              `, 'col-span-12 md:col-span-8')}
              ${card('Typography', `
                <div class="space-y-4">
                    <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                        <div class="text-3xl font-bold text-zinc-900 mb-1">Inter</div>
                        <div class="text-[10px] text-zinc-500 uppercase tracking-wide">Primary Header</div>
                    </div>
                    <div class="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                        <div class="text-xl text-zinc-800 mb-1 font-serif">Merriweather</div>
                        <div class="text-[10px] text-zinc-500 uppercase tracking-wide">Body Copy</div>
                    </div>
                </div>
              `, 'col-span-12 md:col-span-4')}
            `);

            if (id === 'campaign-planner') return grid(`
              ${card('Marketing Calendar', `
                <div class="bg-white rounded-lg border border-zinc-200 overflow-hidden">
                    <div class="grid grid-cols-7 border-b border-zinc-200 bg-zinc-50">
                        ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => `<div class="py-2 text-[10px] font-bold text-zinc-500 text-center uppercase">${d}</div>`).join('')}
                    </div>
                    <div class="grid grid-cols-7 auto-rows-fr bg-zinc-200 gap-px">
                        ${Array.from({length: 35}).map((_, i) => {
                            const day = i + 1;
                            const isPromo = [5, 12, 24].includes(day);
                            const isEmail = [8, 22].includes(day);
                            return `<div class="bg-white min-h-[80px] p-1.5 relative group hover:bg-zinc-50 transition-colors">
                                <span class="text-[10px] text-zinc-400 font-medium">${day <= 31 ? day : ''}</span>
                                ${day <= 31 && isPromo ? '<div class="mt-1 px-1.5 py-0.5 bg-indigo-100 text-indigo-700 text-[9px] font-bold rounded truncate">🚀 Launch</div>' : ''}
                                ${day <= 31 && isEmail ? '<div class="mt-1 px-1.5 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded truncate">✉️ Blast</div>' : ''}
                            </div>`;
                        }).join('')}
                    </div>
                </div>
              `, 'col-span-12')}
            `);
          }
          return prevGenerate(portal, id, feat);
        };
      })();
    


      (() => {
        const originalGenerate = generateFeatureContent;
        generateFeatureContent = function(portal, id, feat) {
          if (portal === 'home') {
            const dashboard = `
              <div class="col-span-12 mb-2 flex justify-between items-end">
                 <div>
                    <h2 class="text-lg font-bold text-zinc-900">Overview</h2>
                    <p class="text-xs text-zinc-500">System performance and key metrics.</p>
                 </div>
                 <div class="flex gap-2">
                    <button class="px-3 py-1 bg-white border border-zinc-200 rounded text-xs font-medium hover:bg-zinc-50">Export Report</button>
                    <button class="px-3 py-1 bg-zinc-900 text-white rounded text-xs font-medium hover:bg-zinc-800">Customize</button>
                 </div>
              </div>

              <!-- NEW SECTION: Credits & Upgrade -->
              <div class="col-span-12 bg-white rounded-xl border border-zinc-200 p-5 shadow-sm flex flex-col md:flex-row gap-8 mb-4 relative overflow-hidden">
                  <!-- Decorative BG element -->
                  <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50/50 to-violet-50/50 rounded-bl-full -z-0 pointer-events-none"></div>

                  <!-- Left: Credits & Upgrade -->
                  <div class="flex-1 z-10">
                      <div class="flex justify-between items-start mb-4">
                          <div>
                              <div class="flex items-center gap-2">
                                <h3 class="text-sm font-bold text-zinc-900">Monthly Credits</h3>
                                <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold border border-indigo-200">Enterprise</span>
                              </div>
                              <p class="text-[11px] text-zinc-500 mt-1">Renewal in 12 days • <span class="text-indigo-600 cursor-pointer hover:underline" onclick="loadSettings('billing')">View history</span></p>
                          </div>
                          <button onclick="loadSettings('billing')" class="group flex items-center gap-2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 transition-all shadow-sm">
                              <span class="iconify group-hover:text-yellow-300 transition-colors" data-icon="lucide:zap" data-width="12"></span> Upgrade Plan
                          </button>
                      </div>

                      <div class="bg-zinc-50/50 rounded-lg border border-zinc-100 p-3">
                          <div class="flex justify-between items-end mb-2">
                             <div>
                                <span class="text-2xl font-bold text-zinc-900 tracking-tight">84,402</span>
                                <span class="text-xs text-zinc-500 font-medium"> / 100,000</span>
                             </div>
                             <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Healthy</span>
                          </div>
                          <div class="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
                             <div class="bg-gradient-to-r from-indigo-500 to-violet-600 h-full rounded-full w-[84%] relative">
                                <div class="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                             </div>
                          </div>
                      </div>
                  </div>

                  <!-- Divider -->
                  <div class="hidden md:block w-px bg-zinc-100 my-2"></div>

                  <!-- Right: Action Costs Chart -->
                  <div class="flex-1 z-10">
                      <div class="flex items-center gap-2 mb-3">
                          <div class="p-1 bg-indigo-50 text-indigo-600 rounded"><span class="iconify" data-icon="lucide:bar-chart-2" data-width="14"></span></div>
                          <h4 class="text-xs font-bold text-zinc-900">Credit Usage Costs</h4>
                      </div>
                      <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                          ${[
                            ['Text Gen', '1 credit'],
                            ['Image Gen', '5 credits'],
                            ['SEO Audit', '10 credits'],
                            ['Enrichment', '2 credits'],
                            ['Video Gen', '25 credits'],
                            ['Email Val', '0.5 credits']
                          ].map(item => `
                            <div class="flex justify-between items-center text-[11px] border-b border-zinc-50 pb-1">
                                <span class="text-zinc-500">${item[0]}</span>
                                <span class="font-bold text-zinc-900">${item[1]}</span>
                            </div>
                          `).join('')}
                      </div>
                  </div>
              </div>

              <!-- METRICS ROW -->
              ${card('Monthly Revenue', '<div class="flex justify-between items-start mb-2"><div class="text-2xl font-bold text-zinc-900">$48,250</div><span class="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">+18%</span></div><div class="w-full bg-zinc-100 h-1 rounded-full"><div class="bg-zinc-900 h-full w-[75%]"></div></div><div class="mt-2 text-[10px] text-zinc-400">Target: $60k</div>', 'col-span-12 md:col-span-3')}
              ${card('Active Users', '<div class="flex justify-between items-start mb-2"><div class="text-2xl font-bold text-zinc-900">2,845</div><span class="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">+12%</span></div><div class="w-full bg-zinc-100 h-1 rounded-full"><div class="bg-indigo-500 h-full w-[60%]"></div></div><div class="mt-2 text-[10px] text-zinc-400">DAU / MAU: 42%</div>', 'col-span-12 md:col-span-3')}
              ${card('New Leads', '<div class="flex justify-between items-start mb-2"><div class="text-2xl font-bold text-zinc-900">450</div><span class="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">+5%</span></div><div class="w-full bg-zinc-100 h-1 rounded-full"><div class="bg-blue-500 h-full w-[45%]"></div></div><div class="mt-2 text-[10px] text-zinc-400">Conversion: 3.2%</div>', 'col-span-12 md:col-span-3')}
              ${card('Avg. Session', '<div class="flex justify-between items-start mb-2"><div class="text-2xl font-bold text-zinc-900">4m 32s</div><span class="text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full font-bold">-2%</span></div><div class="w-full bg-zinc-100 h-1 rounded-full"><div class="bg-amber-500 h-full w-[80%]"></div></div><div class="mt-2 text-[10px] text-zinc-400">Bounce: 24%</div>', 'col-span-12 md:col-span-3')}

              <!-- CHARTS ROW -->
              ${card('Revenue Trends', '<div class="h-48 flex items-end gap-2 px-2 pb-2">' + Array.from({length:12}).map(() => `<div class="flex-1 bg-zinc-900 rounded-t-sm hover:opacity-80 transition-opacity" style="height:${Math.random() * 80 + 20}%"></div>`).join('') + '</div><div class="flex justify-between text-[10px] text-zinc-400 mt-2 px-2"><span>Jan 1</span><span>Dec 31</span></div>', 'col-span-12 md:col-span-8')}
              ${card('Quick Actions', '<div class="grid grid-cols-2 gap-3 h-full"><button class="flex flex-col items-center justify-center p-2 bg-zinc-50 border border-zinc-200 rounded hover:border-indigo-500 hover:text-indigo-600 transition-colors"><span class="iconify mb-1" data-icon="lucide:plus-circle" data-width="20"></span><span class="text-[10px] font-medium">New Campaign</span></button><button class="flex flex-col items-center justify-center p-2 bg-zinc-50 border border-zinc-200 rounded hover:border-indigo-500 hover:text-indigo-600 transition-colors"><span class="iconify mb-1" data-icon="lucide:user-plus" data-width="20"></span><span class="text-[10px] font-medium">Add Lead</span></button><button class="flex flex-col items-center justify-center p-2 bg-zinc-50 border border-zinc-200 rounded hover:border-indigo-500 hover:text-indigo-600 transition-colors"><span class="iconify mb-1" data-icon="lucide:file-text" data-width="20"></span><span class="text-[10px] font-medium">Create Invoice</span></button><button class="flex flex-col items-center justify-center p-2 bg-zinc-50 border border-zinc-200 rounded hover:border-indigo-500 hover:text-indigo-600 transition-colors"><span class="iconify mb-1" data-icon="lucide:settings" data-width="20"></span><span class="text-[10px] font-medium">Settings</span></button></div>', 'col-span-12 md:col-span-4')}

              <!-- SYSTEM ROW -->
              ${card('System Health', '<div class="space-y-4"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="iconify text-zinc-400" data-icon="lucide:cpu"></span><span class="text-xs font-medium text-zinc-700">CPU Usage</span></div><span class="text-xs font-bold text-zinc-900">42%</span></div><div class="w-full bg-zinc-100 h-1.5 rounded-full"><div class="bg-emerald-500 h-full w-[42%]"></div></div><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="iconify text-zinc-400" data-icon="lucide:database"></span><span class="text-xs font-medium text-zinc-700">Memory</span></div><span class="text-xs font-bold text-zinc-900">65%</span></div><div class="w-full bg-zinc-100 h-1.5 rounded-full"><div class="bg-emerald-500 h-full w-[65%]"></div></div><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="iconify text-zinc-400" data-icon="lucide:hard-drive"></span><span class="text-xs font-medium text-zinc-700">Storage</span></div><span class="text-xs font-bold text-zinc-900">89%</span></div><div class="w-full bg-zinc-100 h-1.5 rounded-full"><div class="bg-amber-500 h-full w-[89%]"></div></div></div>', 'col-span-12 md:col-span-4')}
              ${card('Recent Activity', '<div class="space-y-3">' + [1,2,3].map(i => '<div class="flex gap-3 items-start"><div class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></div><div><div class="text-xs text-zinc-800">New enterprise deal closed</div><div class="text-[10px] text-zinc-400">2 hours ago</div></div></div>').join('') + '</div>', 'col-span-12 md:col-span-4')}
              ${card('Team Members', '<div class="flex -space-x-2 overflow-hidden mb-3">' + [1,2,3,4,5].map(i => `<img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=${i}" alt=""/>`).join('') + '<div class="h-8 w-8 rounded-full bg-zinc-100 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-zinc-500">+4</div></div><div class="text-[10px] text-zinc-500">Active now: 3 members</div>', 'col-span-12 md:col-span-4')}

              <!-- SMALL CARDS ROW -->
              ${card('Top Campaign', '<div class="text-xs font-bold text-zinc-900 mb-1">Summer Sale 2024</div><div class="text-[10px] text-zinc-500 mb-2">ROI: 450% • Social Media</div><div class="flex justify-between items-center text-[10px] border-t border-zinc-100 pt-2"><span>Clicks</span><span class="font-bold text-zinc-900">12.5k</span></div><div class="flex justify-between items-center text-[10px] border-t border-zinc-100 pt-2 mt-1"><span>Conv.</span><span class="font-bold text-zinc-900">4.2%</span></div>', 'col-span-12 md:col-span-3')}
              ${card('Upcoming Tasks', '<div class="space-y-2">' + ['Review Q3 Report', 'Update API Keys', 'Team Meeting'].map(t => '<div class="flex items-center gap-2"><input type="checkbox" class="rounded border-zinc-300 w-3 h-3"><span class="text-[11px] text-zinc-600 line-clamp-1">' + t + '</span></div>').join('') + '</div>', 'col-span-12 md:col-span-3')}
              ${card('Alerts', '<div class="bg-rose-50 border border-rose-100 rounded p-2 mb-2"><div class="flex items-center gap-2 text-rose-700 mb-1"><span class="iconify" data-icon="lucide:alert-triangle" data-width="12"></span><span class="text-[10px] font-bold">High Load</span></div><p class="text-[10px] text-rose-600 leading-tight">Database latency > 200ms</p></div><div class="text-[10px] text-zinc-400 text-center cursor-pointer hover:text-zinc-600">View All Logs</div>', 'col-span-12 md:col-span-3')}
              ${card('Support Tickets', '<div class="flex justify-between items-center mb-2"><div class="text-2xl font-bold text-zinc-900">12</div><div class="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full font-bold">3 Urgent</div></div><div class="space-y-1">' + ['Login Issue', 'Billing Query'].map(t => '<div class="text-[10px] text-zinc-600 truncate border-l-2 border-zinc-200 pl-2">' + t + '</div>').join('') + '</div>', 'col-span-12 md:col-span-3')}

              <!-- BOTTOM ROW -->
              ${card('API Usage', '<div class="h-20 flex items-end gap-1 mb-2">' + Array.from({length:20}).map(() => `<div class="flex-1 bg-zinc-300 rounded-sm" style="height:${Math.random() * 100}%"></div>`).join('') + '</div><div class="flex justify-between text-[10px] text-zinc-500"><span>Requests</span><span class="font-bold text-zinc-900">1.2M</span></div>', 'col-span-12 md:col-span-6')}
              ${card('Server Distribution', '<div class="flex items-center justify-center h-full pb-2"><div class="relative w-24 h-24 rounded-full border-[12px] border-zinc-100 border-t-indigo-500 border-r-indigo-500 border-b-zinc-200 rotate-45"></div><div class="absolute text-[10px] font-bold text-zinc-400">US-East</div></div>', 'col-span-12 md:col-span-6')}
            `;
            return grid(dashboard);
          }
          return originalGenerate(portal, id, feat);
        };
      })();
    


      (() => {
        const originalGenerate = generateFeatureContent;
        generateFeatureContent = function(portal, id, feat) {
          if (portal === 'website') {
            if (id === 'site-gen') return grid(`
              ${card('Site Configuration', `
                 <div class="space-y-4">
                    ${input('Business Name', 'e.g. Acme Studio')}
                    <div>
                        <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Industry</label>
                        <select class="w-full text-xs border-zinc-200 rounded-md bg-zinc-50 focus:ring-indigo-500 focus:border-indigo-500"><option>SaaS Startups</option><option>E-commerce</option><option>Consulting Agency</option><option>Personal Portfolio</option></select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Design Style</label>
                        <div class="flex gap-2">
                           <button class="flex-1 py-2 border border-indigo-500 bg-indigo-50 text-indigo-700 rounded text-[10px] font-bold">Minimal</button>
                           <button class="flex-1 py-2 border border-zinc-200 bg-white text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50">Bold</button>
                           <button class="flex-1 py-2 border border-zinc-200 bg-white text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50">Corporate</button>
                        </div>
                    </div>
                    ${btn('Generate Site Structure', 'lucide:zap', '')}
                 </div>
              `, 'col-span-12 md:col-span-4')}
              ${card('Live Preview', `
                 <div class="border border-zinc-200 rounded-lg h-[500px] bg-white overflow-hidden flex flex-col shadow-sm">
                    <div class="h-6 bg-zinc-50 border-b border-zinc-200 flex items-center px-2 gap-1.5">
                       <div class="w-2 h-2 rounded-full bg-zinc-300"></div><div class="w-2 h-2 rounded-full bg-zinc-300"></div>
                       <div class="ml-auto text-[9px] text-zinc-400">Desktop View</div>
                    </div>
                    <div class="flex-1 overflow-y-auto">
                       <!-- Navbar -->
                       <div class="h-12 border-b border-zinc-100 flex items-center justify-between px-6">
                          <div class="w-20 h-4 bg-zinc-200 rounded"></div>
                          <div class="flex gap-4"><div class="w-12 h-3 bg-zinc-100 rounded"></div><div class="w-12 h-3 bg-zinc-100 rounded"></div><div class="w-16 h-6 bg-zinc-900 rounded"></div></div>
                       </div>
                       <!-- Hero -->
                       <div class="p-12 text-center bg-zinc-50/50">
                          <div class="w-32 h-6 bg-indigo-100 rounded-full mx-auto mb-4"></div>
                          <h1 class="text-2xl font-bold text-zinc-900 mb-3">The Future of [Industry] is Here</h1>
                          <p class="text-xs text-zinc-500 max-w-md mx-auto mb-6">Generated content placeholder describing the value proposition of the business clearly and concisely.</p>
                          <div class="flex justify-center gap-3">
                             <div class="px-5 py-2 bg-zinc-900 rounded text-white text-[10px]">Get Started</div>
                             <div class="px-5 py-2 border border-zinc-200 rounded text-zinc-600 text-[10px]">Learn More</div>
                          </div>
                       </div>
                       <!-- Features -->
                       <div class="p-12 grid grid-cols-3 gap-6">
                          ${[1,2,3].map(i => `<div class="p-4 border border-zinc-100 rounded bg-white"><div class="w-8 h-8 bg-zinc-100 rounded mb-3"></div><div class="w-24 h-4 bg-zinc-200 rounded mb-2"></div><div class="w-full h-2 bg-zinc-100 rounded mb-1"></div><div class="w-2/3 h-2 bg-zinc-100 rounded"></div></div>`).join('')}
                       </div>
                    </div>
                 </div>
              `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'copywriter') return grid(`
               ${card('Copy Configuration', `
                  <div class="space-y-4">
                     <div>
                        <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Component</label>
                        <select class="w-full text-xs border-zinc-200 rounded-md bg-zinc-50"><option>Hero Headline</option><option>Value Proposition</option><option>Call to Action</option><option>Feature Description</option></select>
                     </div>
                     ${input('Product/Service Name', 'Digitize AI')}
                     ${input('Target Audience', 'Enterprise Marketing Managers')}
                     <div>
                        <label class="block text-[11px] font-medium text-zinc-500 mb-1.5">Tone</label>
                        <div class="flex gap-2">
                           <span class="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] rounded-full cursor-pointer">Persuasive</span>
                           <span class="px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] rounded-full cursor-pointer hover:bg-zinc-100">Professional</span>
                           <span class="px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] rounded-full cursor-pointer hover:bg-zinc-100">Witty</span>
                        </div>
                     </div>
                     ${btn('Generate Copy', 'lucide:pen-tool', '')}
                  </div>
               `, 'col-span-12 md:col-span-4')}
               ${card('Generated Variants', `
                  <div class="space-y-4">
                     <div class="p-4 bg-white border border-zinc-200 rounded-lg group hover:border-indigo-300 transition-all shadow-sm">
                        <div class="flex justify-between mb-2">
                           <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Variant A (Direct)</span>
                           <button class="text-[10px] text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy to Clipboard</button>
                        </div>
                        <p class="text-sm font-medium text-zinc-900 leading-snug">"Automate your entire marketing stack with one platform. Stop switching tools, start scaling revenue."</p>
                     </div>
                     <div class="p-4 bg-white border border-zinc-200 rounded-lg group hover:border-indigo-300 transition-all shadow-sm">
                        <div class="flex justify-between mb-2">
                           <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Variant B (Benefit-Led)</span>
                           <button class="text-[10px] text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy to Clipboard</button>
                        </div>
                        <p class="text-sm font-medium text-zinc-900 leading-snug">"Reclaim 20 hours a week. Digitize AI handles the grunt work—emails, ads, and analytics—so you can focus on strategy."</p>
                     </div>
                     <div class="p-4 bg-white border border-zinc-200 rounded-lg group hover:border-indigo-300 transition-all shadow-sm">
                        <div class="flex justify-between mb-2">
                           <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Variant C (Short & Punchy)</span>
                           <button class="text-[10px] text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy to Clipboard</button>
                        </div>
                        <p class="text-sm font-medium text-zinc-900 leading-snug">"Marketing autopilot for the modern enterprise. Scale smarter, not harder."</p>
                     </div>
                  </div>
               `, 'col-span-12 md:col-span-8')}
            `);

            if (id === 'templates') return grid(`
               ${card('Template Library', `
                  <div class="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
                     <button class="px-3 py-1.5 bg-zinc-900 text-white rounded text-[10px] font-medium flex-shrink-0">All Templates</button>
                     <button class="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50 flex-shrink-0">SaaS & Tech</button>
                     <button class="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50 flex-shrink-0">E-commerce</button>
                     <button class="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50 flex-shrink-0">Portfolio</button>
                     <button class="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded text-[10px] font-medium hover:bg-zinc-50 flex-shrink-0">Landing Pages</button>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     ${[
                        {n: 'Nexus SaaS', t: 'Technology', c: 'bg-indigo-50'},
                        {n: 'Lumina Store', t: 'E-commerce', c: 'bg-emerald-50'},
                        {n: 'Folio Pro', t: 'Portfolio', c: 'bg-zinc-100'},
                        {n: 'Launchpad', t: 'Startup', c: 'bg-rose-50'},
                        {n: 'Consult', t: 'Agency', c: 'bg-amber-50'},
                        {n: 'Dev Doc', t: 'Documentation', c: 'bg-blue-50'},
                        {n: 'Event Horizon', t: 'Events', c: 'bg-purple-50'},
                        {n: 'Minimal Blog', t: 'Content', c: 'bg-zinc-50'}
                     ].map(t => `
                        <div class="group cursor-pointer">
                           <div class="aspect-[4/3] ${t.c} rounded-lg border border-zinc-200 mb-3 relative overflow-hidden transition-all hover:shadow-md hover:border-indigo-300">
                              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/80 transition-opacity backdrop-blur-sm">
                                 <button class="px-3 py-1.5 bg-zinc-900 text-white text-[10px] font-medium rounded shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">Preview</button>
                              </div>
                              <div class="w-3/4 h-3/4 mx-auto mt-6 bg-white rounded-t-lg shadow-sm border border-zinc-100 p-2">
                                 <div class="w-full h-2 bg-zinc-100 rounded mb-2"></div>
                                 <div class="w-2/3 h-2 bg-zinc-100 rounded mb-4">
                                 <div class="grid grid-cols-2 gap-2">
                                    <div class="h-8 bg-zinc-50 rounded"></div>
                                    <div class="h-8 bg-zinc-50 rounded"></div>
                                 </div>
                              </div>
                           </div>
                           <div class="flex justify-between items-start">
                              <div>
                                 <h4 class="text-xs font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">${t.n}</h4>
                                 <p class="text-[10px] text-zinc-500">${t.t}</p>
                              </div>
                              <span class="iconify text-zinc-300 group-hover:text-indigo-400" data-icon="lucide:plus-circle" data-width="14"></span>
                           </div>
                        </div>
                     `).join('')}
                  </div>
               `, 'col-span-12')}
            `);

            if (id === 'seo-assist') return grid(`
               ${card('Page Analysis', `
                  <div class="flex gap-2 mb-6">
                     <div class="relative flex-1">
                        <span class="iconify absolute left-2.5 top-2.5 text-zinc-400" data-icon="lucide:globe" data-width="14"></span>
                        <input type="text" placeholder="https://digitize.ai/pricing" class="w-full pl-9 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-md focus:ring-indigo-500 focus:bg-white transition-all">
                     </div>
                     <button class="px-4 py-2 bg-zinc-900 text-white rounded-md text-xs font-medium hover:bg-zinc-800 shadow-lg shadow-indigo-500/10">Run Audit</button>
                  </div>
                  <div class="grid grid-cols-4 gap-4 mb-6">
                     <div class="p-4 bg-white border border-zinc-200 rounded-lg text-center">
                        <div class="relative w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                           <svg class="w-full h-full transform -rotate-90 text-zinc-100" viewBox="0 0 36 36"><path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"/></svg>
                           <svg class="absolute inset-0 w-full h-full transform -rotate-90 text-emerald-500 drop-shadow-sm" viewBox="0 0 36 36"><path stroke-dasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"/></svg>
                           <span class="text-xl font-bold text-zinc-900 absolute">85</span>
                        </div>
                        <div class="text-[10px] font-bold text-zinc-500 uppercase">SEO Health</div>
                     </div>
                     <div class="p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-center flex flex-col justify-center">
                        <div class="text-2xl font-bold text-zinc-900 mb-1">12</div>
                        <div class="text-[10px] text-zinc-500">Critical Issues</div>
                     </div>
                     <div class="p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-center flex flex-col justify-center">
                        <div class="text-2xl font-bold text-zinc-900 mb-1">45</div>
                        <div class="text-[10px] text-zinc-500">Warnings</div>
                     </div>
                     <div class="p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-center flex flex-col justify-center">
                        <div class="text-2xl font-bold text-zinc-900 mb-1">98%</div>
                        <div class="text-[10px] text-zinc-500">Crawlability</div>
                     </div>
                  </div>
                  <div>
                     <h3 class="text-xs font-bold text-zinc-900 mb-3">Checklist Recommendations</h3>
                     <div class="space-y-2">
                        <div class="flex items-start gap-3 p-3 bg-rose-50 border border-rose-100 rounded-lg">
                           <span class="iconify text-rose-500 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="14"></span>
                           <div>
                              <div class="text-xs font-bold text-zinc-900">Missing Meta Description</div>
                              <p class="text-[11px] text-zinc-600 mt-0.5">The page has no meta description tag. This affects click-through rates.</p>
                              <button class="mt-2 text-[10px] bg-white border border-rose-200 text-rose-600 px-2 py-1 rounded font-medium hover:bg-rose-100">Fix with AI</button>
                           </div>
                        </div>
                        <div class="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                           <span class="iconify text-amber-500 mt-0.5 flex-shrink-0" data-icon="lucide:alert-circle" data-width="14"></span>
                           <div>
                              <div class="text-xs font-bold text-zinc-900">H1 Tag Too Long</div>
                              <p class="text-[11px] text-zinc-600 mt-0.5">Main heading is over 70 characters. Consider shortening it.</p>
                           </div>
                        </div>
                        <div class="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                           <span class="iconify text-emerald-500 mt-0.5 flex-shrink-0" data-icon="lucide:check-circle" data-width="14"></span>
                           <div>
                              <div class="text-xs font-bold text-zinc-900">Mobile Responsiveness</div>
                              <p class="text-[11px] text-zinc-600 mt-0.5">Page passes all mobile usability tests.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               `, 'col-span-12 md:col-span-8')}
               ${card('Keyword Density', `
                  <table class="w-full text-left">
                     <thead class="text-[10px] text-zinc-500 border-b border-zinc-100">
                        <tr><th class="pb-2 font-medium">Keyword</th><th class="pb-2 font-medium text-right">Count</th><th class="pb-2 font-medium text-right">Density</th></tr>
                     </thead>
                     <tbody class="text-xs divide-y divide-zinc-50">
                        ${[
                           {k: 'marketing automation', c: 12, d: '2.4%'},
                           {k: 'ai tools', c: 8, d: '1.6%'},
                           {k: 'enterprise', c: 6, d: '1.2%'},
                           {k: 'growth', c: 5, d: '1.0%'}
                        ].map(r => `
                           <tr>
                              <td class="py-2 text-zinc-700 font-medium">${r.k}</td>
                              <td class="py-2 text-zinc-500 text-right">${r.c}</td>
                              <td class="py-2 text-zinc-500 text-right">${r.d}</td>
                           </tr>
                        `).join('')}
                     </tbody>
                  </table>
                  <div class="mt-4 pt-4 border-t border-zinc-100">
                     <div class="text-[10px] font-bold text-zinc-500 mb-2 uppercase">Suggested Keywords</div>
                     <div class="flex flex-wrap gap-1">
                        <span class="px-2 py-1 bg-zinc-100 rounded text-[10px] text-zinc-600 border border-zinc-200">saas platform</span>
                        <span class="px-2 py-1 bg-zinc-100 rounded text-[10px] text-zinc-600 border border-zinc-200">lead gen</span>
                        <span class="px-2 py-1 bg-zinc-100 rounded text-[10px] text-zinc-600 border border-zinc-200">analytics</span>
                     </div>
                  </div>
               `, 'col-span-12 md:col-span-4')}
            `);

            if (id === 'split-test') return grid(`
               ${card('Active Experiments', `
                  <div class="flex items-center justify-between mb-4">
                     <h3 class="text-xs font-bold text-zinc-900">Pricing Page: Monthly vs Annual Default</h3>
                     <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Running</span>
                  </div>
                  <div class="grid grid-cols-2 gap-8 relative">
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] font-bold text-zinc-400 border border-zinc-200 z-10">VS</div>

                     <!-- Variant A -->
                     <div class="p-4 rounded-lg border border-zinc-200 bg-zinc-50/50">
                        <div class="flex justify-between items-center mb-4">
                           <div class="text-xs font-bold text-zinc-900">Control (A)</div>
                           <div class="text-[10px] text-zinc-500">50% Traffic</div>
                        </div>
                        <div class="space-y-3">
                           <div>
                              <div class="flex justify-between text-[10px] text-zinc-500 mb-1"><span>Visitors</span><span>2,400</span></div>
                              <div class="w-full bg-zinc-200 h-1.5 rounded-full"><div class="bg-zinc-400 h-full w-[60%]"></div></div>
                           </div>
                           <div>
                              <div class="flex justify-between text-[10px] text-zinc-500 mb-1"><span>Conversions</span><span>85</span></div>
                              <div class="w-full bg-zinc-200 h-1.5 rounded-full"><div class="bg-zinc-400 h-full w-[15%]"></div></div>
                           </div>
                           <div class="pt-2 border-t border-zinc-200 mt-2">
                              <div class="text-2xl font-bold text-zinc-700">3.54%</div>
                              <div class="text-[10px] text-zinc-400">Conversion Rate</div>
                           </div>
                        </div>
                     </div>

                     <!-- Variant B -->
                     <div class="p-4 rounded-lg border border-indigo-200 bg-indigo-50/20 relative overflow-hidden">
                        <div class="absolute top-0 right-0 px-2 py-1 bg-emerald-500 text-white text-[9px] font-bold rounded-bl">WINNER</div>
                        <div class="flex justify-between items-center mb-4">
                           <div class="text-xs font-bold text-indigo-900">Variant B</div>
                           <div class="text-[10px] text-zinc-500">50% Traffic</div>
                        </div>
                        <div class="space-y-3">
                           <div>
                              <div class="flex justify-between text-[10px] text-zinc-500 mb-1"><span>Visitors</span><span>2,350</span></div>
                              <div class="w-full bg-zinc-200 h-1.5 rounded-full"><div class="bg-indigo-400 h-full w-[58%]"></div></div>
                           </div>
                           <div>
                              <div class="flex justify-between text-[10px] text-zinc-500 mb-1"><span>Conversions</span><span>112</span></div>
                              <div class="w-full bg-zinc-200 h-1.5 rounded-full"><div class="bg-indigo-600 h-full w-[22%]"></div></div>
                           </div>
                           <div class="pt-2 border-t border-indigo-100 mt-2">
                              <div class="flex items-end gap-2">
                                 <div class="text-2xl font-bold text-indigo-700">4.76%</div>
                                 <div class="text-[10px] font-bold text-emerald-600 mb-1">+34%</div>
                              </div>
                              <div class="text-[10px] text-indigo-400">Conversion Rate</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="flex justify-end gap-2 mt-4">
                     <button class="px-3 py-1.5 border border-zinc-200 rounded text-xs hover:bg-zinc-50">Pause Test</button>
                     <button class="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs hover:bg-indigo-700">Apply Winner</button>
                  </div>
               `, 'col-span-12')}
            `);

            if (id === 'heatmap') return grid(`
               ${card('Behavior Analysis', `
                  <div class="flex items-center justify-between mb-4 border-b border-zinc-100 pb-4">
                     <div class="flex items-center gap-2">
                        <select class="text-xs border-zinc-200 rounded-md bg-zinc-50 py-1.5 pl-2 pr-8 focus:ring-indigo-500"><option>Home Page</option><option>Pricing</option><option>Checkout</option></select>
                        <div class="h-4 w-px bg-zinc-200 mx-2"></div>
                        <div class="flex bg-zinc-100 rounded p-0.5">
                           <button class="px-3 py-1 bg-white text-zinc-900 text-[10px] font-medium rounded shadow-sm">Desktop</button>
                           <button class="px-3 py-1 text-zinc-500 text-[10px] font-medium hover:text-zinc-900">Mobile</button>
                        </div>
                     </div>
                     <div class="flex items-center gap-2">
                        <span class="text-[10px] text-zinc-400">Showing last 7 days</span>
                        <button class="p-1.5 hover:bg-zinc-100 rounded text-zinc-400"><span class="iconify" data-icon="lucide:calendar" data-width="14"></span></button>
                     </div>
                  </div>
                  <div class="relative w-full h-[400px] border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50">
                     <!-- Mock Website UI -->
                     <div class="absolute inset-0 opacity-50 pointer-events-none">
                        <div class="h-12 border-b border-zinc-200 bg-white"></div>
                        <div class="p-8 text-center">
                           <div class="h-8 w-64 bg-zinc-300 mx-auto rounded mb-4"></div>
                           <div class="h-4 w-96 bg-zinc-200 mx-auto rounded mb-8"></div>
                           <div class="flex justify-center gap-4">
                              <div class="h-10 w-32 bg-zinc-800 rounded"></div>
                              <div class="h-10 w-32 bg-zinc-300 rounded"></div>
                           </div>
                        </div>
                        <div class="h-64 bg-white mt-8 border-t border-zinc-200 grid grid-cols-3 gap-8 p-8">
                           <div class="bg-zinc-100 rounded h-full"></div>
                           <div class="bg-zinc-100 rounded h-full"></div>
                           <div class="bg-zinc-100 rounded h-full"></div>
                        </div>
                     </div>
                     <!-- Heatmap Overlay -->
                     <div class="absolute inset-0">
                        <div class="absolute top-[140px] left-[calc(50%-70px)] w-20 h-20 bg-red-500/40 blur-xl rounded-full"></div>
                        <div class="absolute top-[20px] right-[40px] w-12 h-12 bg-yellow-500/30 blur-lg rounded-full"></div>
                        <div class="absolute top-[250px] left-[100px] w-16 h-16 bg-green-500/30 blur-lg rounded-full"></div>
                        <div class="absolute top-[145px] left-[calc(50%+60px)] w-16 h-16 bg-blue-500/20 blur-lg rounded-full"></div>
                     </div>
                     <!-- Legend -->
                     <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur border border-zinc-200 p-2 rounded-lg shadow-sm flex flex-col gap-1">
                        <div class="text-[9px] font-bold text-zinc-500 uppercase mb-1">Click Density</div>
                        <div class="h-2 w-24 bg-gradient-to-r from-blue-400 via-green-400 to-red-500 rounded-full"></div>
                        <div class="flex justify-between text-[9px] text-zinc-400 mt-0.5"><span>Low</span><span>High</span></div>
                     </div>
                  </div>
               `, 'col-span-12 md:col-span-9')}
               ${card('Element Clicks', `
                  <div class="space-y-1">
                     ${[
                        {n: 'Get Started CTA', c: 450, p: '42%'},
                        {n: 'Pricing Link', c: 120, p: '12%'},
                        {n: 'Learn More', c: 85, p: '8%'},
                        {n: 'Login', c: 60, p: '5%'},
                        {n: 'Feature A', c: 45, p: '4%'}
                     ].map((e, i) => `
                        <div class="flex items-center justify-between p-2 hover:bg-zinc-50 rounded cursor-pointer group">
                           <div class="flex items-center gap-2">
                              <div class="w-5 text-center text-[10px] font-bold text-zinc-300 group-hover:text-indigo-600">${i+1}</div>
                              <span class="text-xs text-zinc-700 font-medium">${e.n}</span>
                           </div>
                           <div class="text-right">
                              <div class="text-xs font-bold text-zinc-900">${e.c}</div>
                              <div class="w-12 h-1 bg-zinc-100 rounded-full mt-1 ml-auto"><div class="bg-indigo-500 h-full rounded-full" style="width:${parseInt(e.p) * 2}%"></div></div>
                           </div>
                        </div>
                     `).join('')}
                  </div>
               `, 'col-span-12 md:col-span-3')}
            `);
          }
          return originalGenerate(portal, id, feat);
        };
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<aside className="w-64 flex-shrink-0 bg-zinc-950 text-zinc-400 flex flex-col h-full border-r border-zinc-800 relative z-30">
<div className="h-14 flex items-center px-5 border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md">
<div className="flex items-center gap-2.5 text-white">
<div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-600 rounded flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="text-xs font-bold text-white">D</span>
</div>
<span className="text-sm font-semibold tracking-tight">Digitize AI</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto dark-scroll py-4 px-3 space-y-1" id="sidebar-nav">

</nav>
<div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
<div className="flex items-center gap-3 group cursor-pointer" onclick="loadSettings()">
<div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700 group-hover:border-zinc-500 transition-colors">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
              Admin User
            </p>
<p className="text-[10px] text-zinc-500">Enterprise Plan</p>
</div>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-zinc-400 iconify--lucide" data-icon="lucide:settings" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</g>
</svg>
</div>
</div>
</aside>

<main className="flex-1 bg-zinc-50 flex flex-col min-h-0 overflow-hidden relative">

<header className="h-14 border-b border-zinc-200 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-3">
<span className="text-zinc-400" id="header-icon"></span>
<div className="flex flex-col">
<h1 className="text-sm font-semibold text-zinc-900 leading-tight" id="header-title"></h1>
<span className="text-[10px] text-zinc-500 font-medium" id="header-subtitle"></span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden md:block">
<svg aria-hidden="true" className="iconify absolute left-2.5 top-2 text-zinc-400 iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m21 21l-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</g>
</svg>
<input className="pl-8 pr-3 py-1.5 text-xs bg-zinc-100 border-none rounded-md focus:ring-1 focus:ring-zinc-300 w-48 text-zinc-600 placeholder:text-zinc-400 transition-all hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-zinc-200" placeholder="Command + K" type="text"/>
</div>
<div className="h-4 w-px bg-zinc-200 mx-1"></div>
<button className="relative p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth" id="main-view">

</div>
</main>







    </>
  );
}
