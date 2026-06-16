import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Source type pills
        document.querySelectorAll('.source-pill').forEach(function (btn) {
          btn.addEventListener('click', function () {
            document.querySelectorAll('.source-pill').forEach(function (b) {
              b.classList.remove('bg-neutral-900', 'text-white', 'border-neutral-900');
              b.classList.add('border-neutral-200', 'text-neutral-700');
            });
            btn.classList.add('bg-neutral-900', 'text-white', 'border-neutral-900');
            btn.classList.remove('border-neutral-200', 'text-neutral-700');
          });
        });

        // Scope pills
        document.querySelectorAll('.scope-pill').forEach(function (btn) {
          btn.addEventListener('click', function () {
            document.querySelectorAll('.scope-pill').forEach(function (b) {
              b.classList.remove('bg-neutral-900', 'text-white', 'border-neutral-900');
              b.classList.add('border-neutral-200', 'text-neutral-700');
            });
            btn.classList.add('bg-neutral-900', 'text-white', 'border-neutral-900');
            btn.classList.remove('border-neutral-200', 'text-neutral-700');
          });
        });

        // Extraction mode pills
        document.querySelectorAll('.mode-pill').forEach(function (btn) {
          btn.addEventListener('click', function () {
            document.querySelectorAll('.mode-pill').forEach(function (b) {
              b.classList.remove('bg-neutral-900', 'text-white');
              b.classList.add('text-neutral-700');
            });
            btn.classList.add('bg-neutral-900', 'text-white');
            btn.classList.remove('text-neutral-700');
          });
        });

        // App pills toggle
        document.querySelectorAll('.app-pill').forEach(function (btn) {
          btn.addEventListener('click', function () {
            const isActive = btn.classList.contains('bg-neutral-900');
            if (btn.classList.contains('border-dashed')) {
              return;
            }
            if (isActive) {
              btn.classList.remove('bg-neutral-900', 'text-white', 'border-neutral-900');
              btn.classList.add('border-neutral-200', 'text-neutral-700');
            } else {
              btn.classList.add('bg-neutral-900', 'text-white', 'border-neutral-900');
              btn.classList.remove('border-neutral-200', 'text-neutral-700');
            }
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col sm:flex-row min-h-screen" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>

<aside className="w-full sm:w-60 border-b sm:border-b-0 sm:border-r border-neutral-200 bg-white flex flex-col">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-semibold tracking-tight">
              U
            </div>
<div>
<div className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-800">
                UBIK
              </div>
<div className="text-[11px] text-neutral-500">Executive OS</div>
</div>
</div>
<button className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="settings"></i>
</button>
</div>
<nav className="flex-1 px-4 py-4 space-y-6">
<div>
<div className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 mb-2">
              Workspace
            </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50" href="#">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                  Command Desk
                </a>
</li>
<li>
<a className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50" href="#">
<i className="w-4 h-4" data-lucide="inbox"></i>
                  Signal Inbox
                </a>
</li>
<li>
<a className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50" href="#">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                  Action List
                </a>
</li>
</ul>
</div>
<div>
<div className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 mb-2">
              Intelligence
            </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                  People Lens
                </a>
</li>
<li>
<a className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50" href="#">
<i className="w-4 h-4" data-lucide="layers"></i>
                  Initiatives
                </a>
</li>
<li>
<button className="w-full flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium bg-neutral-900 text-white">
<i className="w-4 h-4" data-lucide="brain"></i>
                  Memory Console
                </button>
</li>
</ul>
</div>
<div>
<div className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 mb-2">
              Apps
            </div>
<ul className="space-y-1">
<li>
<button className="w-full flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="plug"></i>
                    Apps &amp; MCP
                  </span>
<span className="text-[10px] px-1.5 py-0.5 rounded-full border border-emerald-200 text-emerald-600">
                    6 linked
                  </span>
</button>
</li>
</ul>
</div>
</nav>
<div className="px-4 py-4 border-t border-neutral-200 space-y-2">
<div className="flex items-center justify-between">
<div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Memory load
            </div>
<span className="text-[11px] text-neutral-600">78%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[78%] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"></div>
</div>
<p className="text-[11px] text-neutral-500">
            Governs how much history, apps, and documents are carried into each answer.
          </p>
</div>
</aside>

<main className="flex-1 flex flex-col bg-neutral-25">

<header className="border-b border-neutral-200 px-5 py-3 flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="hidden sm:inline">Workspace</span>
<span className="hidden sm:inline">/</span>
<span className="font-medium text-neutral-700">Memory Console</span>
</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-1">
              Executive Memory
            </h1>
<p className="text-sm text-neutral-500 mt-0.5">
              Curate what your AI remembers across meetings, docs, and apps.
            </p>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search"></i>
<input className="w-44 lg:w-56 border border-neutral-200 rounded-lg pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Search memories" type="text"/>
</div>
</div>
<button className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
<button className="hidden sm:flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="download"></i>
              Export
            </button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

<section className="w-full lg:w-[55%] border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-y-auto">
<div className="px-5 pt-5 pb-4">
<div className="flex items-center justify-between gap-2">
<div>
<h2 className="text-lg font-semibold tracking-tight">
                    Capture a new memory
                  </h2>
<p className="text-sm text-neutral-500 mt-0.5">
                    Turn a meeting, document, or decision into a reusable brief.
                  </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 text-white text-xs px-3 py-1.5 hover:opacity-90">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                  Auto-summarise
                </button>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<button className="source-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-900 bg-neutral-900 text-white text-xs px-3 py-1.5">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
                  Note
                </button>
<button className="source-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-200 text-xs text-neutral-700 px-3 py-1.5 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="link-2"></i>
                  Link
                </button>
<button className="source-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-200 text-xs text-neutral-700 px-3 py-1.5 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="upload-cloud"></i>
                  File
                </button>
<button className="source-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-200 text-xs text-neutral-700 px-3 py-1.5 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="app-window"></i>
                  App Snapshot
                </button>
</div>

<div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-25 flex flex-col overflow-hidden">

<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-200 bg-white">
<div className="flex items-center gap-1.5">
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50 flex items-center gap-1">
<span className="font-medium">B</span>
</button>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50 flex items-center gap-1">
<span className="italic">I</span>
</button>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="code-2"></i>
</button>
<div className="w-px h-5 bg-neutral-200 mx-1.5"></div>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                      H1
                    </button>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                      H2
                    </button>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                      H3
                    </button>
<div className="w-px h-5 bg-neutral-200 mx-1.5"></div>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
</button>
<button className="toolbar-btn h-7 px-2 rounded-md text-xs border border-neutral-200 text-neutral-700 hover:bg-neutral-50 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="list-ordered"></i>
</button>
</div>
<button className="inline-flex items-center gap-1 rounded-md text-[11px] px-2.5 py-1 border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="wand-2"></i>
                    Clean up text
                  </button>
</div>

<div className="flex-1 bg-neutral-25">
<textarea className="w-full min-h-[10rem] max-h-[20rem] bg-neutral-25 px-4 py-3 text-sm text-neutral-900 resize-vertical focus:outline-none" id="memoryBody" placeholder="Capture the decision, what changed, and why it matters. Avoid status noise; focus on intent and outcomes."></textarea>
</div>
</div>

<div className="mt-4 grid sm:grid-cols-2 gap-3">

<div className="space-y-3">
<div>
<label className="text-xs font-medium text-neutral-700 flex items-center gap-1">
                      Memory title
                      <span className="text-[11px] text-neutral-400">(for quick scanning)</span>
</label>
<input className="mt-1 w-full border border-neutral-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="e.g. Q3 Customer Churn Playbook" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-700">
                      Highlights
                    </label>
<input className="mt-1 w-full border border-neutral-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Add 2–3 keywords (e.g. churn, pricing, retention)" type="text"/>
</div>
</div>

<div className="space-y-3">

<div>
<label className="text-xs font-medium text-neutral-700">
                      Who can use this memory?
                    </label>
<div className="mt-1 grid grid-cols-3 gap-1.5">
<button className="scope-pill inline-flex items-center justify-center gap-1 rounded-md border border-neutral-900 bg-neutral-900 text-white text-[11px] px-2 py-1">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                        Just me
                      </button>
<button className="scope-pill inline-flex items-center justify-center gap-1 rounded-md border border-neutral-200 text-[11px] text-neutral-700 px-2 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                        Project
                      </button>
<button className="scope-pill inline-flex items-center justify-center gap-1 rounded-md border border-neutral-200 text-[11px] text-neutral-700 px-2 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i>
                        Organisation
                      </button>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<div className="relative">
<select className="w-full appearance-none border border-neutral-200 rounded-lg px-3 pr-8 py-1.5 text-xs text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900">
<option>Link to project…</option>
<option>Q3 Growth Plan</option>
<option>Enterprise Rollout</option>
<option>Product Council</option>
</select>
<i className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="chevron-down"></i>
</div>
<div className="relative">
<select className="w-full appearance-none border border-neutral-200 rounded-lg px-3 pr-8 py-1.5 text-xs text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900">
<option>Org visibility</option>
<option>Exec team only</option>
<option>Leads &amp; managers</option>
<option>Everyone</option>
</select>
<i className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div>
<label className="text-xs font-medium text-neutral-700 flex items-center gap-1">
                      How should we store this?
                    </label>
<div className="mt-1 flex items-center gap-1.5 rounded-lg border border-neutral-200 p-1">
<button className="mode-pill flex-1 inline-flex items-center justify-center gap-1 rounded-md bg-neutral-900 text-white text-[11px] px-2 py-1">
<i className="w-3.5 h-3.5" data-lucide="align-left"></i>
                        Smart summary
                      </button>
<button className="mode-pill flex-1 inline-flex items-center justify-center gap-1 rounded-md text-[11px] text-neutral-700 px-2 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="file-archive"></i>
                        Full detail
                      </button>
<button className="mode-pill flex-1 inline-flex items-center justify-center gap-1 rounded-md text-[11px] text-neutral-700 px-2 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                        Auto (RAG)
                      </button>
</div>
<p className="mt-1 text-[11px] text-neutral-500">
                      Smart summary is used by default; full detail is pulled only when the AI needs depth.
                    </p>
</div>
</div>
</div>

<div className="mt-5 rounded-xl border border-neutral-200 bg-white p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-500" data-lucide="app-window"></i>
<div>
<p className="text-xs font-medium text-neutral-800">
                        Apps contributing to this memory
                      </p>
<p className="text-[11px] text-neutral-500">
                        Choose which connected tools can enrich or reference this later.
                      </p>
</div>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-neutral-900">
                    Manage apps
                    <i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="flex flex-wrap gap-2 mt-1.5">
<button className="app-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-900 bg-neutral-900 text-white text-[11px] px-2.5 py-1">
<i className="w-3.5 h-3.5" data-lucide="slack"></i>
                    Slack
                  </button>
<button className="app-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-200 text-[11px] text-neutral-700 px-2.5 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i>
                    Calendar
                  </button>
<button className="app-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-200 text-[11px] text-neutral-700 px-2.5 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="mail"></i>
                    Email
                  </button>
<button className="app-pill inline-flex items-center gap-1.5 rounded-full border border-neutral-200 text-[11px] text-neutral-700 px-2.5 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="folder-kanban"></i>
                    Projects tool
                  </button>
<button className="app-pill inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-300 text-[11px] text-neutral-500 px-2.5 py-1 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add app
                  </button>
</div>
</div>

<div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
<div className="flex items-center gap-2 text-[11px] text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
<span>
                    Private by default. Organisation sharing inherits workspace governance.
                  </span>
</div>
<div className="flex items-center gap-2 justify-end">
<button className="px-3 py-1.5 text-xs rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                    Cancel
                  </button>
<button className="px-3 py-1.5 text-xs rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                    Save as draft
                  </button>
<button className="px-3 py-1.5 text-xs rounded-lg bg-neutral-900 text-white hover:opacity-90 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus"></i>
                    Add memory
                  </button>
</div>
</div>
</div>
</section>

<section className="w-full lg:w-[45%] overflow-y-auto">
<div className="px-5 pt-5 pb-4 space-y-5">

<div className="grid md:grid-cols-3 gap-3">
<div className="rounded-xl border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-neutral-600" data-lucide="user"></i>
<p className="text-xs font-medium text-neutral-800">
                        Personal Briefs
                      </p>
</div>
<span className="text-[11px] px-1.5 py-0.5 rounded-full border border-neutral-200 text-neutral-600">
                      48
                    </span>
</div>
<p className="mt-1 text-[11px] text-neutral-500">
                    Your working style, preferences, and recurring updates.
                  </p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-indigo-600" data-lucide="layers"></i>
<p className="text-xs font-medium text-neutral-800">
                        Project Playbooks
                      </p>
</div>
<span className="text-[11px] px-1.5 py-0.5 rounded-full border border-neutral-200 text-neutral-600">
                      32
                    </span>
</div>
<p className="mt-1 text-[11px] text-neutral-500">
                    Summaries of major initiatives, risks, and next bets.
                  </p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-emerald-600" data-lucide="building-2"></i>
<p className="text-xs font-medium text-neutral-800">
                        Company Library
                      </p>
</div>
<span className="text-[11px] px-1.5 py-0.5 rounded-full border border-neutral-200 text-neutral-600">
                      87
                    </span>
</div>
<p className="mt-1 text-[11px] text-neutral-500">
                    Policies, pricing, and source-of-truth docs.
                  </p>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-600" data-lucide="tree-structure"></i>
<div>
<p className="text-sm font-medium text-neutral-900 tracking-tight">
                        How your assistant thinks
                      </p>
<p className="text-[11px] text-neutral-500">
                        High‑level context buckets for every answer.
                      </p>
</div>
</div>
<button className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-neutral-900">
                    Open graph view
                    <i className="w-3.5 h-3.5" data-lucide="network"></i>
</button>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-neutral-100 bg-neutral-25 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-neutral-600" data-lucide="notebook-text"></i>
<p className="text-xs font-medium text-neutral-800">
                          Executive Profile
                        </p>
</div>
<span className="text-[11px] text-neutral-500">Persona</span>
</div>
<p className="text-[11px] text-neutral-500">
                      Work style, decision cadence, communication preferences.
                    </p>
<button className="mt-1 text-[11px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1">
                      Edit profile
                      <i className="w-3.5 h-3.5" data-lucide="pencil-line"></i>
</button>
</div>
<div className="rounded-lg border border-neutral-100 bg-neutral-25 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-indigo-600" data-lucide="clock"></i>
<p className="text-xs font-medium text-neutral-800">
                          Recent Briefings
                        </p>
</div>
<span className="text-[11px] text-neutral-500">Last 30 days</span>
</div>
<p className="text-[11px] text-neutral-500">
                      Auto‑generated summaries of recent conversations and meetings.
                    </p>
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>Auto‑rotated</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i>
                        Daily
                      </span>
</div>
</div>
<div className="rounded-lg border border-neutral-100 bg-neutral-25 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="file-stack"></i>
<p className="text-xs font-medium text-neutral-800">
                          Organisation Sources
                        </p>
</div>
<span className="text-[11px] text-neutral-500">Docs &amp; data</span>
</div>
<p className="text-[11px] text-neutral-500">
                      Contracts, policies, and internal wikis used for answers.
                    </p>
<button className="mt-1 text-[11px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1">
                      Manage sources
                      <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="rounded-lg border border-neutral-100 bg-neutral-25 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="messages-square"></i>
<p className="text-xs font-medium text-neutral-800">
                          Current Conversation
                        </p>
</div>
<span className="text-[11px] text-neutral-500">Live</span>
</div>
<p className="text-[11px] text-neutral-500">
                      Only kept for this chat unless you promote it to a reusable memory.
                    </p>
<button className="mt-1 text-[11px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1">
                      Promote snippet
                      <i className="w-3.5 h-3.5" data-lucide="bookmark-plus"></i>
</button>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="alert-triangle"></i>
<div>
<p className="text-sm font-medium text-neutral-900 tracking-tight">
                        Overlapping documents
                      </p>
<p className="text-[11px] text-neutral-500">
                        When multiple versions of the same file show up, choose the source of truth.
                      </p>
</div>
</div>
<button className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-neutral-900">
                    View all
                    <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="space-y-2">

<div className="rounded-lg border border-neutral-100 bg-neutral-25 px-3 py-2 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<div className="min-w-0">
<p className="text-xs font-medium text-neutral-800 truncate">
                          Master Pricing Deck
                        </p>
<p className="text-[11px] text-neutral-500 truncate">
                          3 versions • Sales / Finance • Last updated 4 days ago
                        </p>
</div>
<span className="text-[11px] px-1.5 py-0.5 rounded-full border border-emerald-200 text-emerald-600">
                        v3 active
                      </span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-1 text-[11px] text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="git-merge"></i>
                        Auto‑merged for Q&amp;A
                      </div>
<div className="flex items-center gap-1.5 text-[11px]">
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50">
                          Mark v3 as single source
                        </button>
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50">
                          Archive older
                        </button>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-100 bg-neutral-25 px-3 py-2 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<div className="min-w-0">
<p className="text-xs font-medium text-neutral-800 truncate">
                          Employee Handbook
                        </p>
<p className="text-[11px] text-neutral-500 truncate">
                          2 versions • People Ops • Last updated 21 days ago
                        </p>
</div>
<span className="text-[11px] px-1.5 py-0.5 rounded-full border border-amber-200 text-amber-600">
                        Attention
                      </span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-1 text-[11px] text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="circle-help"></i>
                        AI is unsure which to prioritise for new hires.
                      </div>
<div className="flex items-center gap-1.5 text-[11px]">
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50">
                          Compare
                        </button>
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50">
                          Pick v2
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="history"></i>
<p className="text-sm font-medium text-neutral-900 tracking-tight">
                      Recent memories
                    </p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<select className="appearance-none border border-neutral-200 rounded-lg px-3 pr-7 py-1.5 text-[11px] text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900">
<option>All types</option>
<option>Personal only</option>
<option>Project</option>
<option>Organisation</option>
</select>
<i className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="chevron-down"></i>
</div>
<button className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-neutral-900">
                      Open full history
                      <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="space-y-2">

<div className="group rounded-lg border border-neutral-100 bg-neutral-25 px-3 py-2 flex items-start gap-2">
<div className="mt-0.5 h-6 w-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[11px]">
                      P
                    </div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs font-medium text-neutral-900 truncate">
                          Weekly Executive Pipeline Snapshot
                        </p>
<span className="text-[11px] text-neutral-500">Personal</span>
</div>
<p className="text-[11px] text-neutral-500 truncate">
                        Created from CRM + revenue dashboards • Used in 6 conversations this week.
                      </p>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="app-window"></i>
                          CRM, Finance tool
                        </div>
<div className="flex items-center gap-1.5 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-[11px]">
                            Edit
                          </button>
<button className="px-1.5 py-0.5 rounded-md border border-rose-200 text-rose-600 hover:bg-rose-50 text-[11px] flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
                            Delete
                          </button>
</div>
</div>
</div>
</div>

<div className="group rounded-lg border border-neutral-100 bg-neutral-25 px-3 py-2 flex items-start gap-2">
<div className="mt-0.5 h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px]">
                      Pr
                    </div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs font-medium text-neutral-900 truncate">
                          Q3 Churn Review – Customer Council
                        </p>
<span className="text-[11px] text-neutral-500">Project</span>
</div>
<p className="text-[11px] text-neutral-500 truncate">
                        Auto‑summarised from 4 meetings, 2 decks, and 1 Notion page.
                      </p>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                          Smart summary + RAG
                        </div>
<div className="flex items-center gap-1.5 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-[11px]">
                            Open
                          </button>
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-[11px]">
                            Duplicate
                          </button>
</div>
</div>
</div>
</div>

<div className="group rounded-lg border border-neutral-100 bg-neutral-25 px-3 py-2 flex items-start gap-2">
<div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px]">
                      Co
                    </div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs font-medium text-neutral-900 truncate">
                          Company Narrative – 12‑month Vision
                        </p>
<span className="text-[11px] text-neutral-500">Organisation</span>
</div>
<p className="text-[11px] text-neutral-500 truncate">
                        Used for board prep, town halls, and recruiting messaging.
                      </p>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
<i className="w-3.5 h-3.5" data-lucide="lock"></i>
                          Exec team only
                        </div>
<div className="flex items-center gap-1.5 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-[11px]">
                            Share…
                          </button>
<button className="px-1.5 py-0.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-[11px]">
                            View history
                          </button>
</div>
</div>
</div>
</div>
<button className="w-full mt-1 text-[11px] text-neutral-600 hover:text-neutral-900 flex items-center justify-center gap-1.5">
                    Load more
                    <i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>


    </>
  );
}
