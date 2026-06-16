import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded',function(){if(window.lucide){lucide.createIcons();}});
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">

<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
<i className="h-5 w-5 text-blue-600" data-lucide="bar-chart-3"></i>
</div>
<div>
<h1 className="text-[26px] tracking-tight font-semibold text-slate-900">
                  Reporting Portal
                </h1>
<p className="text-xs text-slate-500">
                  Discover, request, and collaborate on company reports
                </p>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" id="openRequestModal">
<i className="h-4 w-4 text-blue-600" data-lucide="file-plus-2"></i>
                Request Report
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" id="openIssueModal">
<i className="h-4 w-4 text-blue-600" data-lucide="bug"></i>
                Report Issue
              </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-blue-700" id="openSupport">
<i className="h-4 w-4" data-lucide="messages-square"></i>
                Support
              </button>
<div className="hidden sm:block h-6 w-px bg-slate-200"></div>

<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<div className="text-sm font-medium text-slate-900">
                    Truc Linh
                  </div>
<div className="text-xs text-blue-600">Data Analyst</div>
</div>
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-100" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-4">

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<div className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="searchInput" placeholder="Search reports by name or keywords..." type="text"/>
</div>

<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" id="blMenuBtn">
<i className="h-4 w-4 text-blue-600" data-lucide="briefcase"></i>
<span id="blLabel">All lines</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg" id="blMenu">
<ul className="py-1 text-sm">
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="all">
                            All lines
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Sales">
                            Sales
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Operations">
                            Operations
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Finance">
                            Finance
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-bl="Marketing">
                            Marketing
                          </button>
</li>
</ul>
</div>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" id="roleMenuBtn">
<i className="h-4 w-4 text-blue-600" data-lucide="key-round"></i>
<span id="roleLabel">All roles</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg" id="roleMenu">
<ul className="py-1 text-sm">
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="all">
                            All roles
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Data Analyst">
                            Data Analyst
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Ops Manager">
                            Ops Manager
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Executive">
                            Executive
                          </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50" data-role="Sales Lead">
                            Sales Lead
                          </button>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="space-y-4" id="reportList">

<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Sales" data-name="Monthly Sales Overview" data-roles="Executive,Sales Lead,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Monthly Sales Overview
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-4"></i>
                          Sales
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 ring-1 ring-indigo-100">
<i className="h-3.5 w-3.5" data-lucide="layout-dashboard"></i>
                          Executive
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        Revenue, pipeline, and conversion health by region.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">
                          Updated: 2 days ago
                        </span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">
                          Owner: Analytics
                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<a className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" href="#">
                        Open Report
                      </a>
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Monthly Sales Overview">
                        Report Issue
                      </button>
</div>
</div>
</article>
<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Operations" data-name="Operations Efficiency Dashboard" data-roles="Ops Manager,Executive,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Operations Efficiency Dashboard
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="factory"></i>
                          Operations
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700 ring-1 ring-purple-100">
<i className="h-3.5 w-3.5" data-lucide="gauge"></i>
                          Ops Manager
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        Throughput, cycle time, and bottleneck analysis for ops.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">
                          Updated: 1 week ago
                        </span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">
                          Owner: Ops BI
                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<a className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" href="#">
                        Open Report
                      </a>
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Operations Efficiency Dashboard">
                        Report Issue
                      </button>
</div>
</div>
</article>
<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Marketing" data-name="Marketing Funnel Insights" data-roles="Executive,Sales Lead,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Marketing Funnel Insights
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="megaphone"></i>
                          Marketing
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 ring-1 ring-emerald-100">
<i className="h-3.5 w-3.5" data-lucide="users"></i>
                          Sales Lead
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        Channel performance, CAC, and campaign ROI.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">
                          Updated: 3 days ago
                        </span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">
                          Owner: Growth Analytics
                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<a className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" href="#">
                        Open Report
                      </a>
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Marketing Funnel Insights">
                        Report Issue
                      </button>
</div>
</div>
</article>
<article className="report-card rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition" data-bl="Finance" data-name="Financial Performance Summary" data-roles="Executive,Data Analyst">
<div className="p-4 sm:p-5 flex items-start justify-between gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-lg tracking-tight font-semibold text-slate-900">
                          Financial Performance Summary
                        </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 ring-1 ring-blue-100">
<i className="h-3.5 w-3.5" data-lucide="banknote"></i>
                          Finance
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-xs text-rose-700 ring-1 ring-rose-100">
<i className="h-3.5 w-3.5" data-lucide="sparkle"></i>
                          Executive
                        </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                        P&amp;L, cash flow, and profitability trends.
                      </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-slate-500">
                          Updated: Today
                        </span>
<span className="text-slate-300">•</span>
<span className="text-xs text-slate-500">
                          Owner: FP&amp;A
                        </span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<a className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" href="#">
                        Open Report
                      </a>
<button className="issue-btn inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50" data-report="Financial Performance Summary">
                        Report Issue
                      </button>
</div>
</div>
</article>

<div className="flex items-center justify-center gap-2 pt-2">
<button className="h-9 w-9 rounded-md border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
                    1
                  </button>
<button className="h-9 w-9 rounded-md border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
                    2
                  </button>
<button className="h-9 w-9 rounded-md border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
                    3
                  </button>
</div>
</div>
</div>

<aside className="lg:col-span-4">
<div className="sticky top-4">
<div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">

<div className="relative">
<img alt="report preview" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-xs text-white/80">Selected report</p>
<h4 className="text-base tracking-tight font-semibold text-white" id="selectedTitle">
                          Monthly Sales Overview
                        </h4>
</div>
<button className="inline-flex items-center gap-1 rounded-lg bg-white/90 backdrop-blur px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-white" id="makeSuggestion">
<i className="h-3.5 w-3.5 text-amber-500" data-lucide="lightbulb"></i>
                        Suggest
                      </button>
</div>
</div>

<div className="px-4 pt-3">
<div className="flex items-center gap-2">
<button className="tab-btn inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700" data-tab="purpose">
<i className="h-4 w-4 text-blue-600" data-lucide="target"></i>
                        Purpose
                      </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50" data-tab="howto">
<i className="h-4 w-4 text-blue-600" data-lucide="book-open-check"></i>
                        How to use
                      </button>
<div className="ml-auto"></div>
</div>
</div>

<div className="p-4 space-y-4">
<div className="tab-panel space-y-3" id="tab-purpose">
<p className="text-sm text-slate-700">
                        Track performance against targets, identify regional
                        trends, and highlight risks requiring action.
                      </p>
<ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
<li>KPIs: Revenue, Pipeline, Conversion</li>
<li>Grain: Monthly, Region, Segment</li>
<li>Refresh: Daily at 06:00 UTC</li>
</ul>

<div className="mt-2">
<div className="rounded-lg border border-slate-200 p-3">
<h2 className="text-sm font-medium text-slate-700">
                            Trend Preview
                          </h2>
<p className="text-xs text-slate-500">Last 6 months</p>
<div className="mt-2">
<div className="relative h-28">
<div className="h-full">
<canvas id="miniChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tab-panel hidden space-y-3" id="tab-howto">
<ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1">
<li>Use the date filter to select a month or range.</li>
<li>Drill into regions to compare conversion rates.</li>
<li>
                          Export CSV from the overflow menu for ad-hoc analysis.
                        </li>
</ol>
<div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-700">
<i className="inline-block mr-1 h-4 w-4" data-lucide="info"></i>
                        Tip: Hover KPI cards in the report for definition and
                        formula.
                      </div>
</div>
</div>

<div className="px-4 pb-4">
<div className="flex flex-col sm:flex-row gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 flex-1" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
                        Open Report
                      </a>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 flex-1" id="panelIssueBtn">
<i className="h-4 w-4 text-amber-500" data-lucide="triangle-alert"></i>
                        Report Issue
                      </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 flex-1" id="panelSuggestBtn">
<i className="h-4 w-4 text-blue-600" data-lucide="wand-2"></i>
                        Make Suggestion
                      </button>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-40 hidden" id="issueModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="bug"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">
                Report Issue
              </h3>
</div>
<button className="rounded-md p-1 hover:bg-slate-50" data-close="issueModal">
<i className="h-5 w-5 text-slate-500" data-lucide="x"></i>
</button>
</div>
<form className="p-4 space-y-3">
<div>
<label className="text-xs text-slate-600">Report</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="issueReportName" readonly=""/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600">Severity</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
<div>
<label className="text-xs text-slate-600">Category</label>
<select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
<option>Data mismatch</option>
<option>Access/Permissions</option>
<option>Performance</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Details</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="Describe the issue, steps to reproduce, expected vs actual" rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-sm text-slate-700">
<i className="h-4 w-4 text-slate-500" data-lucide="paperclip"></i>
<span className="underline decoration-dotted cursor-pointer">
                  Attach screenshot
                </span>
<input className="hidden" type="file"/>
</label>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" type="button">
<i className="h-4 w-4" data-lucide="send"></i>
                Submit
              </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="suggestModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="wand-2"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">
                Suggest an Update
              </h3>
</div>
<button className="rounded-md p-1 hover:bg-slate-50" data-close="suggestModal">
<i className="h-5 w-5 text-slate-500" data-lucide="x"></i>
</button>
</div>
<form className="p-4 space-y-3">
<div>
<label className="text-xs text-slate-600">Report</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" id="suggestReportName" readonly=""/>
</div>
<div>
<label className="text-xs text-slate-600">
                What would you improve?
              </label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" placeholder="Fields, filters, visuals, frequency, access, etc." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">
                Your suggestion goes to the report owner
              </div>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700" type="button">
<i className="h-4 w-4" data-lucide="send"></i>
                Send
              </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="requestModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-2xl rounded-xl bg-white shadow-xl border border-slate-200">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="file-plus-2"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900">
                Request a New Report
              </h3>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
