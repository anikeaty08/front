import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                      const domains = [
                          { domain: "austinsolarpros.com", score: 100, tier: "Hero" },
                          { domain: "austinweddingvendors.com", score: 100, tier: "Hero" },
                          { domain: "roofprosofaustin.com", score: 100, tier: "Hero" },
                          { domain: "solarpanelsatx.com", score: 100, tier: "Hero" },
                          { domain: "austinsolarsolutions.com", score: 100, tier: "Hero" },
                          { domain: "austinsolarhomes.com", score: 40, tier: "Mid" },
                          { domain: "austinweddingsandevents.com", score: 40, tier: "Mid" },
                          { domain: "sanantonioweddingplanners.com", score: 40, tier: "Mid" },
                          { domain: "eliteweddingsaustin.com", score: 40, tier: "Mid" },
                          { domain: "roofsfortexas.com", score: 40, tier: "Mid" },
                          { domain: "austinsolarenergy.net", score: 40, tier: "Mid" },
                          { domain: "renewableenergytexas.com", score: 40, tier: "Mid" },
                          { domain: "solarroofstexas.com", score: 40, tier: "Mid" },
                          { domain: "eliteeventsaustin.com", score: 40, tier: "Mid" },
                          { domain: "texasplanners.com", score: 40, tier: "Mid" },
                          { domain: "austinseliteweddings.com", score: 40, tier: "Mid" },
                          { domain: "austinweddings.net", score: 40, tier: "Mid" },
                          { domain: "austinshomebuilders.com", score: 40, tier: "Mid" },
                          { domain: "solarpanelstexashomes.com", score: 10, tier: "Redirect" },
                          { domain: "buildsolarforyourhome.com", score: 10, tier: "Redirect" },
                          { domain: "austinsweddingofficiants.com", score: 10, tier: "Redirect" },
                          { domain: "singingspringsfarms.com", score: 10, tier: "Redirect" },
                          { domain: "texascountrymusicscene.com", score: 10, tier: "Redirect" },
                          { domain: "corporateaustin.com", score: 10, tier: "Redirect" },
                          { domain: "austinweddings.events", score: 10, tier: "Redirect" },
                          { domain: "austinweddings.online", score: 10, tier: "Redirect" },
                          { domain: "austinweddings.us", score: 10, tier: "Redirect" },
                          { domain: "austinweddingsandspecialevents.com", score: 10, tier: "Redirect" },
                          { domain: "kathielovessolar.com", score: 10, tier: "Redirect" },
                          { domain: "solarpanels-texas.com", score: 10, tier: "Redirect" },
                          { domain: "texas-solarroofs.com", score: 10, tier: "Redirect" }
                      ];

                      document.write(domains.map(d => {
                          let icon = 'solar:forward-linear';
                          let bgIcon = 'bg-neutral-100 border-neutral-200 text-neutral-500';
                          let badgeClass = 'bg-neutral-100 text-neutral-600 border-neutral-200/50';

                          if (d.tier === 'Hero') {
                              icon = 'solar:star-linear';
                              bgIcon = 'bg-amber-50 border-amber-100 text-amber-600';
                              badgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200/50';
                          } else if (d.tier === 'Mid') {
                              icon = 'solar:chart-2-linear';
                              bgIcon = 'bg-blue-50 border-blue-100 text-blue-600';
                              badgeClass = 'bg-blue-50 text-blue-700 border-blue-200/50';
                          }

                          return `
                              <div class="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
                                  <div class="flex items-center gap-3 truncate pr-4">
                                      <div class="w-8 h-8 rounded-md ${bgIcon} border flex items-center justify-center shrink-0">
                                          <iconify-icon icon="${icon}" width="16" height="16" stroke-width="1.5"></iconify-icon>
                                      </div>
                                      <div class="flex flex-col truncate">
                                          <span class="text-sm font-medium text-neutral-900 truncate" title="${d.domain}">${d.domain}</span>
                                          <span class="text-xs text-neutral-500">${d.tier} Tier</span>
                                      </div>
                                  </div>
                                  <div class="flex items-center gap-3 shrink-0 ml-auto">
                                      <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium ${badgeClass} border w-9">
                                          ${d.score}
                                      </span>
                                      <button class="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
                                          <iconify-icon icon="solar:menu-dots-linear" width="18" height="18"></iconify-icon>
                                      </button>
                                  </div>
                              </div>
                          `;
                      }).join(''));
                    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-neutral-200">
<div className="text-lg font-semibold tracking-tighter">AL</div>
<button className="text-neutral-500 hover:text-neutral-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-neutral-200 h-full">

<div className="p-4 border-b border-neutral-200">
<button className="w-full flex items-center justify-between px-3 py-2 hover:bg-neutral-50 transition-colors rounded-lg border border-transparent hover:border-neutral-200 group">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-neutral-900 text-white rounded flex items-center justify-center text-xs font-semibold tracking-tighter shadow-sm">
              AL
            </div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium leading-none">Austin Leads</span>
<span className="text-xs text-neutral-500 mt-1 leading-none">
                Production
              </span>
</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
<p className="px-3 text-xs font-medium text-neutral-400 mb-1 uppercase tracking-wider">
          Overview
        </p>
<a className="flex items-center gap-3 px-3 py-2 bg-neutral-100 text-neutral-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon height="18" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
          Dashboard
        </a>
<p className="px-3 text-xs font-medium text-neutral-400 mt-4 mb-1 uppercase tracking-wider">
          Workspace
        </p>
<a className="flex items-center justify-between hover:bg-neutral-50 hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/publish">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Content
          </div>
<span className="bg-neutral-100 text-neutral-600 text-xs px-1.5 py-0.5 rounded font-medium">
            12
          </span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon height="18" icon="solar:inbox-in-linear" strokeWidth="1.5" width="18"></iconify-icon>
          Workflows
        </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon height="18" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="18"></iconify-icon>
          Media
        </a>
<p className="px-3 text-xs font-medium text-neutral-400 mt-4 mb-1 uppercase tracking-wider">
          Infrastructure
        </p>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon height="18" icon="solar:global-linear" strokeWidth="1.5" width="18"></iconify-icon>
          Domains
        </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
          Team
        </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon height="18" icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
          Settings
        </a>
</div>

<div className="p-4 border-t border-neutral-200">
<button className="w-full flex items-center gap-3 px-2 py-1.5 hover:bg-neutral-50 transition-colors rounded-lg">
<img alt="User" className="w-8 h-8 rounded-full shadow-sm bg-neutral-200 border border-neutral-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col items-start flex-1 overflow-hidden">
<span className="text-sm font-medium truncate w-full text-left text-neutral-900">
              Jane Doe
            </span>
<span className="text-xs text-neutral-500 truncate w-full text-left">
              jane@austinleads.com
            </span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-neutral-50/50">

<header className="hidden md:flex h-14 border-b border-neutral-200 bg-white items-center justify-between px-8 shrink-0">
<div className="flex items-center text-sm font-medium text-neutral-500">
<span>Austin Leads</span>
<iconify-icon className="mx-2 text-neutral-400" height="14" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-neutral-900">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden lg:block">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" height="16" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="w-64 pl-8 pr-4 py-1.5 bg-neutral-50 border border-neutral-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-shadow placeholder:text-neutral-400" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-block border border-neutral-200 rounded px-1.5 text-xs font-medium text-neutral-400 bg-white tracking-tighter">
                ⌘
              </kbd>
<kbd className="hidden sm:inline-block border border-neutral-200 rounded px-1.5 text-xs font-medium text-neutral-400 bg-white tracking-tighter">
                K
              </kbd>
</div>
</div>
<button className="text-neutral-500 hover:text-neutral-900 relative transition-colors">
<iconify-icon height="20" icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
<button className="bg-neutral-900 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-neutral-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon height="16" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
            Create Post
          </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div className="">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Dashboard
              </h1>
<p className="text-sm text-neutral-500 mt-1">
                Manage content, workflows, and infrastructure for Austin Leads.
              </p>
</div>
<div className="flex items-center gap-3">
<select className="text-sm border border-neutral-200 rounded-md bg-white px-3 py-1.5 text-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 appearance-none pr-8 relative cursor-pointer" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1em'}}>
<option>Last 30 days</option>
<option>Last 7 days</option>
<option>All time</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col relative overflow-hidden group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-neutral-500">
                  Published Content
                </span>
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 border border-neutral-100">
<iconify-icon height="18" icon="solar:document-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight">1,248</h2>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon height="12" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                  12%
                </span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col relative overflow-hidden group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-neutral-500">
                  Pending Reviews
                </span>
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100">
<iconify-icon height="18" icon="solar:clipboard-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight">24</h2>
<span className="text-xs font-medium text-neutral-500">
                  Action required
                </span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col relative overflow-hidden group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-neutral-500">
                  Active Domains
                </span>
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
<iconify-icon height="18" icon="solar:server-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight">31</h2>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span>
                  5 Hero Domains
                </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="lg:col-span-2 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-neutral-900">
                  Publishing Workflow
                </h3>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
                  View all
                </a>
</div>
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">

<div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-neutral-100 bg-neutral-50/50 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<div className="col-span-6 md:col-span-5">Title</div>
<div className="col-span-3 hidden md:block">Author</div>
<div className="col-span-4 md:col-span-2 text-left">Status</div>
<div className="col-span-2 hidden md:block text-right">Date</div>
</div>

<div className="divide-y divide-neutral-100">

<div className="grid grid-cols-12 gap-4 px-5 py-3.5 items-center hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="col-span-8 md:col-span-5 flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors truncate">
                        Product Update: Q3 Features and Fixes
                      </span>
<span className="text-xs text-neutral-500 truncate md:hidden">
                        by Jane Doe
                      </span>
</div>
<div className="col-span-3 hidden md:flex items-center gap-2">
<img alt="" className="w-5 h-5 rounded-full bg-neutral-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="text-sm text-neutral-600">Jane Doe</span>
</div>
<div className="col-span-4 md:col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/50">
<span className="w-1 h-1 rounded-full bg-amber-500"></span>
                        In Review
                      </span>
</div>
<div className="col-span-2 hidden md:block text-right text-sm text-neutral-500">
                      Today
                    </div>
</div>

<div className="grid grid-cols-12 gap-4 px-5 py-3.5 items-center hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="col-span-8 md:col-span-5 flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors truncate">
                        Designing for Accessibility in 2024
                      </span>
<span className="text-xs text-neutral-500 truncate md:hidden">
                        by Alex Smith
                      </span>
</div>
<div className="col-span-3 hidden md:flex items-center gap-2">
<img alt="" className="w-5 h-5 rounded-full bg-neutral-200" src="https://i.pravatar.cc/150?u=a042581f4e29026703d"/>
<span className="text-sm text-neutral-600">Alex Smith</span>
</div>
<div className="col-span-4 md:col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/60">
<span className="w-1 h-1 rounded-full bg-neutral-400"></span>
                        Draft
                      </span>
</div>
<div className="col-span-2 hidden md:block text-right text-sm text-neutral-500">
                      Oct 24
                    </div>
</div>

<div className="grid grid-cols-12 gap-4 px-5 py-3.5 items-center hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="col-span-8 md:col-span-5 flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors truncate">
                        The Future of Multi-Tenant Architectures
                      </span>
<span className="text-xs text-neutral-500 truncate md:hidden">
                        by System
                      </span>
</div>
<div className="col-span-3 hidden md:flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white font-medium">
                        S
                      </div>
<span className="text-sm text-neutral-600">System</span>
</div>
<div className="col-span-4 md:col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50">
<iconify-icon height="10" icon="solar:calendar-linear" width="10"></iconify-icon>
                        Scheduled
                      </span>
</div>
<div className="col-span-2 hidden md:block text-right text-sm text-neutral-500">
                      Oct 25
                    </div>
</div>

<div className="grid grid-cols-12 gap-4 px-5 py-3.5 items-center hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="col-span-8 md:col-span-5 flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors truncate">
                        Getting Started with our API
                      </span>
<span className="text-xs text-neutral-500 truncate md:hidden">
                        by Jane Doe
                      </span>
</div>
<div className="col-span-3 hidden md:flex items-center gap-2">
<img alt="" className="w-5 h-5 rounded-full bg-neutral-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="text-sm text-neutral-600">Jane Doe</span>
</div>
<div className="col-span-4 md:col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/50">
<iconify-icon height="12" icon="solar:check-circle-linear" width="12"></iconify-icon>
                        Published
                      </span>
</div>
<div className="col-span-2 hidden md:block text-right text-sm text-neutral-500">
                      Oct 20
                    </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-neutral-900">
                    Domains &amp; SEO
                  </h3>
<button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                    Export
                  </button>
</div>
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm flex flex-col h-[400px]">
<div className="p-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50 sticky top-0 z-10 rounded-t-xl">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Domain
                    </span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mr-7">
                      Score
                    </span>
</div>
<div className="overflow-y-auto overflow-x-hidden flex-1 divide-y divide-neutral-100">


<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarpros.com">
                            austinsolarpros.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddingvendors.com">
                            austinweddingvendors.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="roofprosofaustin.com">
                            roofprosofaustin.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarpanelsatx.com">
                            solarpanelsatx.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarsolutions.com">
                            austinsolarsolutions.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarhomes.com">
                            austinsolarhomes.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddingsandevents.com">
                            austinweddingsandevents.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="sanantonioweddingplanners.com">
                            sanantonioweddingplanners.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="eliteweddingsaustin.com">
                            eliteweddingsaustin.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="roofsfortexas.com">
                            roofsfortexas.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarenergy.net">
                            austinsolarenergy.net
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="renewableenergytexas.com">
                            renewableenergytexas.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarroofstexas.com">
                            solarroofstexas.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="eliteeventsaustin.com">
                            eliteeventsaustin.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="texasplanners.com">
                            texasplanners.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinseliteweddings.com">
                            austinseliteweddings.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.net">
                            austinweddings.net
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinshomebuilders.com">
                            austinshomebuilders.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarpanelstexashomes.com">
                            solarpanelstexashomes.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="buildsolarforyourhome.com">
                            buildsolarforyourhome.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsweddingofficiants.com">
                            austinsweddingofficiants.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="singingspringsfarms.com">
                            singingspringsfarms.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="texascountrymusicscene.com">
                            texascountrymusicscene.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="corporateaustin.com">
                            corporateaustin.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.events">
                            austinweddings.events
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.online">
                            austinweddings.online
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.us">
                            austinweddings.us
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddingsandspecialevents.com">
                            austinweddingsandspecialevents.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="kathielovessolar.com">
                            kathielovessolar.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarpanels-texas.com">
                            solarpanels-texas.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="texas-solarroofs.com">
                            texas-solarroofs.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarpros.com">
                            austinsolarpros.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddingvendors.com">
                            austinweddingvendors.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="roofprosofaustin.com">
                            roofprosofaustin.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarpanelsatx.com">
                            solarpanelsatx.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-amber-50 border-amber-100 text-amber-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarsolutions.com">
                            austinsolarsolutions.com
                          </span>
<span className="text-xs text-neutral-500">
                            Hero Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200/50 border w-9">
                          100
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarhomes.com">
                            austinsolarhomes.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddingsandevents.com">
                            austinweddingsandevents.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="sanantonioweddingplanners.com">
                            sanantonioweddingplanners.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="eliteweddingsaustin.com">
                            eliteweddingsaustin.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="roofsfortexas.com">
                            roofsfortexas.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsolarenergy.net">
                            austinsolarenergy.net
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="renewableenergytexas.com">
                            renewableenergytexas.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarroofstexas.com">
                            solarroofstexas.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="eliteeventsaustin.com">
                            eliteeventsaustin.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="texasplanners.com">
                            texasplanners.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinseliteweddings.com">
                            austinseliteweddings.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.net">
                            austinweddings.net
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-blue-50 border-blue-100 text-blue-600 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinshomebuilders.com">
                            austinshomebuilders.com
                          </span>
<span className="text-xs text-neutral-500">Mid Tier</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border-blue-200/50 border w-9">
                          40
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarpanelstexashomes.com">
                            solarpanelstexashomes.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="buildsolarforyourhome.com">
                            buildsolarforyourhome.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinsweddingofficiants.com">
                            austinsweddingofficiants.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="singingspringsfarms.com">
                            singingspringsfarms.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="texascountrymusicscene.com">
                            texascountrymusicscene.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="corporateaustin.com">
                            corporateaustin.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.events">
                            austinweddings.events
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.online">
                            austinweddings.online
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddings.us">
                            austinweddings.us
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="austinweddingsandspecialevents.com">
                            austinweddingsandspecialevents.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="kathielovessolar.com">
                            kathielovessolar.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="solarpanels-texas.com">
                            solarpanels-texas.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 flex items-center justify-between hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3 truncate pr-4">
<div className="w-8 h-8 rounded-md bg-neutral-100 border-neutral-200 text-neutral-500 border flex items-center justify-center shrink-0">
<iconify-icon height="16" icon="solar:forward-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col truncate">
<span className="text-sm font-medium text-neutral-900 truncate" title="texas-solarroofs.com">
                            texas-solarroofs.com
                          </span>
<span className="text-xs text-neutral-500">
                            Redirect Tier
                          </span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-auto">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border-neutral-200/50 border w-9">
                          10
                        </span>
<button className="text-neutral-400 hover:text-neutral-900 p-1 rounded hover:bg-neutral-100 transition-colors">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 mt-2">
<h4 className="text-sm font-semibold text-neutral-900 mb-4">
                  Site Configuration
                </h4>
<div className="flex flex-col gap-4">

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">
                        Public Access
                      </span>
<span className="text-xs text-neutral-500">
                        Site is visible to search engines
                      </span>
</div>
<button className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2">
<span className="sr-only">Toggle Public Access</span>
<span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
<span aria-hidden="true" className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-neutral-900 transition-colors duration-200 ease-in-out"></span>
<span aria-hidden="true" className="pointer-events-none absolute left-0 inline-block h-5 w-5 translate-x-4 transform rounded-full border border-neutral-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">
                        Maintenance Mode
                      </span>
<span className="text-xs text-neutral-500">
                        Show holding page to visitors
                      </span>
</div>
<button className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2">
<span className="sr-only">Toggle Maintenance Mode</span>
<span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
<span aria-hidden="true" className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-neutral-200 transition-colors duration-200 ease-in-out"></span>
<span aria-hidden="true" className="pointer-events-none absolute left-0 inline-block h-5 w-5 translate-x-0 transform rounded-full border border-neutral-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
