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
      
<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-neutral-200 bg-white">
<div className="flex items-center h-16 px-6 border-b border-neutral-200">
<div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-semibold tracking-tight text-white">
            V
          </div>
<div className="ml-3">
<p className="text-base font-semibold tracking-tight text-neutral-900">
              Velnuma
            </p>
<p className="text-sm font-medium text-neutral-500">
              Admin
            </p>
</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-6 text-sm font-medium">
<div>
<p className="px-3 text-xs font-medium text-neutral-400 uppercase">
              Dashboards
            </p>
<button className="mt-2 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                O
              </span>
<span>Overview</span>
</button>
</div>
<div>
<p className="px-3 text-xs font-medium text-neutral-400 uppercase">
              Resource
            </p>
<button className="mt-2 flex w-full items-center justify-between rounded-xl bg-neutral-900 text-white px-3 py-2 shadow-sm">
<span className="flex items-center">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-white/20 text-[0.6rem] mr-3">
                  R
                </span>
<span>Racks</span>
</span>
</button>
<button className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                O
              </span>
<span>Orders</span>
</button>
<button className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                S
              </span>
<span>Storage</span>
</button>
<button className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                I
              </span>
<span>Integration</span>
</button>
</div>
<div>
<p className="px-3 text-xs font-medium text-neutral-400 uppercase">
              Organization
            </p>
<button className="mt-2 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                E
              </span>
<span>Employee</span>
</button>
<button className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                C
              </span>
<span>Corporate</span>
</button>
</div>
<div>
<p className="px-3 text-xs font-medium text-neutral-400 uppercase">
              Settings
            </p>
<button className="mt-2 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                P
              </span>
<span>Personal</span>
</button>
<button className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-neutral-600 hover:bg-neutral-50">
<span className="inline-flex h-4 w-4 items-center justify-center rounded border border-neutral-300 text-[0.6rem] mr-3">
                S
              </span>
<span>System</span>
</button>
</div>
</nav>
</aside>

<div className="flex-1 flex flex-col">

<header className="h-16 flex items-center justify-between border-b border-neutral-200 bg-white px-4 sm:px-6 lg:px-8">
<div className="flex items-center space-x-2 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-900" href="#">Resource</a>
<span>/</span>
<a className="hover:text-neutral-900" href="#">Racks</a>
<span>/</span>
<span className="text-neutral-900">Rack Detail</span>
</div>
<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
<span className="mr-2 h-4 w-4 rounded-full border border-neutral-300 flex items-center justify-center text-[0.6rem]">
                ?
              </span>
              Help
            </button>
<button className="h-9 w-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50">
<span className="text-xs font-medium">JD</span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    Rack112Metal
                  </h1>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Correct
                  </span>
</div>
<p className="mt-1 text-base font-medium text-neutral-500">
                  Rack detail · Real-time AI inventory and transfer history
                </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
<span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M9 4v16M4 9h16"></path>
</svg>
</span>
                  Export activity
                </button>
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
<span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
                  New audit
                </button>
<button className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-neutral-800">
                  Save changes
                </button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-5 items-start">

<div className="space-y-5 xl:col-span-2">

<section className="bg-white rounded-2xl border border-neutral-200 shadow-sm">
<div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-neutral-100">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                        Rack information
                      </h2>
<p className="mt-1 text-base font-medium text-neutral-500">
                        Core identifiers and live inventory status.
                      </p>
</div>
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                      Edit
                    </button>
</div>
<div className="px-4 sm:px-6 py-4 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Rack Name
                        </p>
<p className="mt-1 text-base font-medium text-neutral-900">
                          Rack112Metal
                        </p>
</div>

<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                          NFC Tag ID
                        </p>
<div className="mt-1 inline-flex items-center rounded-full bg-neutral-50 px-2.5 py-1 border border-dashed border-neutral-200">
<span className="text-xs font-medium text-neutral-900">
                            NFC-9F38-112-45
                          </span>
<button className="ml-2 text-[0.7rem] font-medium text-neutral-500 hover:text-neutral-900">
                            Copy
                          </button>
</div>
</div>

<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Status
                        </p>
<div className="mt-1 inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
<span className="text-xs font-medium text-emerald-700">
                            Correct
                          </span>
</div>
</div>

<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Location
                        </p>
<div className="mt-1 flex items-center gap-1.5">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-100 text-[0.6rem] text-neutral-600">
                            L
                          </span>
<p className="text-base font-medium text-neutral-900">
                            Aisle 11 · Block 3 · Level 2
                          </p>
</div>
</div>

<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Last updated
                        </p>
<p className="mt-1 text-base font-medium text-neutral-900">
                          08:20 · 03/11/2025
                        </p>
<p className="text-xs font-medium text-emerald-600 mt-0.5">
                          Synced from AI scan
                        </p>
</div>

<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Quantity
                        </p>
<div className="mt-1 flex items-baseline gap-3">
<div>
<p className="text-xs font-medium text-neutral-500">
                              Expected
                            </p>
<p className="text-base font-medium text-neutral-900">
                              112
                            </p>
</div>
<div>
<p className="text-xs font-medium text-neutral-500">
                              AI count
                            </p>
<div className="flex items-center gap-1.5">
<p className="text-base font-medium text-neutral-900">
                                112
                              </p>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                                0 variance
                              </span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-100 pt-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-[0.7rem] text-blue-600">
                            TO
                          </div>
<div>
<p className="text-xs font-medium text-neutral-500 uppercase">
                              Transfer order
                            </p>
<div className="flex items-center gap-2 mt-1">
<a className="text-base font-medium text-neutral-900 hover:underline" href="#">
                                TO-2025-000392
                              </a>
<span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-amber-700">
                                Picking
                              </span>
</div>
<p className="mt-0.5 text-xs font-medium text-neutral-500">
                              Created by Linh Nguyen · 08:05 · 03/11/2025
                            </p>
</div>
</div>
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                          View transfer detail
                        </button>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-2xl border border-neutral-200 shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-neutral-100">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                        AI photo
                      </h2>
<p className="mt-1 text-base font-medium text-neutral-500">
                        Latest AI vision capture with bounding boxes and anomalies.
                      </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
<span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h4l2-3h4l2 3h4v13H4z"></path>
<circle cx="12" cy="13" r="3.5"></circle>
</svg>
</span>
                        Capture new
                      </button>
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                        Download
                      </button>
</div>
</div>
<div className="px-4 sm:px-6 py-4 space-y-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">

<div className="lg:col-span-2">
<div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900/90">
<img alt="Rack AI capture" className="h-full w-full object-cover opacity-80" src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>

<div className="absolute inset-6 border border-emerald-400/80 rounded-lg">
<div className="absolute -top-5 left-0 inline-flex items-center rounded-full bg-emerald-500 px-2 py-0.5 text-[0.7rem] font-medium text-white">
                              112 detected
                            </div>
</div>

<div className="absolute bottom-10 right-8 h-16 w-20 border border-amber-400 rounded-md">
<div className="absolute -top-4 right-0 inline-flex items-center rounded-full bg-amber-500 px-2 py-0.5 text-[0.7rem] font-medium text-white">
                              Potential damage
                            </div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 flex flex-wrap items-center justify-between gap-2">
<div className="space-y-0.5">
<p className="text-xs font-medium text-neutral-200">
                                Captured at 08:18 · 03/11/2025
                              </p>
<p className="text-xs font-medium text-emerald-300">
                                AI model v2.4 · Confidence ≥ 98%
                              </p>
</div>
<div className="flex items-center gap-4">
<div>
<p className="text-[0.7rem] font-medium text-neutral-300">
                                  Expected
                                </p>
<p className="text-base font-medium text-white">
                                  112
                                </p>
</div>
<div>
<p className="text-[0.7rem] font-medium text-neutral-300">
                                  AI count
                                </p>
<p className="text-base font-medium text-white">
                                  112
                                </p>
</div>
<div>
<p className="text-[0.7rem] font-medium text-neutral-300">
                                  Variance
                                </p>
<p className="text-base font-medium text-emerald-300">
                                  0
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-neutral-500 uppercase">
                              AI decision
                            </p>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                              Approved
                            </span>
</div>
<p className="mt-1.5 text-base font-medium text-neutral-900">
                            No variance detected between expected and counted quantity.
                          </p>
<p className="mt-1 text-xs font-medium text-neutral-500">
                            Last override: none
                          </p>
<button className="mt-2 inline-flex items-center text-xs font-medium text-neutral-700 hover:text-neutral-900">
                            View AI logs
                          </button>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-neutral-500 uppercase">
                              Previous captures
                            </p>
<button className="text-xs font-medium text-neutral-700 hover:text-neutral-900">
                              View all
                            </button>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="relative aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
<img alt="Previous capture" className="h-full w-full object-cover" src="https://images.pexels.com/photos/4484075/pexels-photo-4484075.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"/>
<span className="absolute bottom-1 left-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[0.6rem] font-medium text-white">
                                07:55
                              </span>
</button>
<button className="relative aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
<img alt="Previous capture" className="h-full w-full object-cover" src="https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"/>
<span className="absolute bottom-1 left-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[0.6rem] font-medium text-white">
                                06:20
                              </span>
</button>
<button className="relative aspect-square overflow-hidden rounded-lg border border-dashed border-neutral-200 bg-neutral-50">
<div className="flex h-full w-full flex-col items-center justify-center text-neutral-400">
<svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
<span className="text-[0.7rem] font-medium">
                                  Older
                                </span>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-100 pt-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                          Photo history
                        </h3>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[0.7rem] font-medium text-neutral-700 hover:bg-neutral-50">
<span className="mr-1">Filter</span>
</button>
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[0.7rem] font-medium text-neutral-700 hover:bg-neutral-50">
<span className="mr-1">Sort</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<div className="flex items-stretch gap-3 py-1">

<button className="flex flex-col min-w-[8rem] rounded-xl border-2 border-neutral-900 bg-white">
<div className="relative h-20 overflow-hidden rounded-t-lg">
<img alt="History item" className="h-full w-full object-cover" src="https://images.pexels.com/photos/4484076/pexels-photo-4484076.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"/>
<span className="absolute top-1 left-1 rounded-full bg-black/50 px-1.5 py-0.5 text-[0.6rem] font-medium text-white">
                                Latest
                              </span>
</div>
<div className="px-2.5 py-2 text-left">
<p className="text-xs font-medium text-neutral-900">
                                08:18 · 03/11
                              </p>
<p className="text-[0.7rem] font-medium text-emerald-600">
                                Correct · 112
                              </p>
</div>
</button>
<button className="flex flex-col min-w-[8rem] rounded-xl border border-neutral-200 bg-white hover:border-neutral-300">
<div className="relative h-20 overflow-hidden rounded-t-lg">
<img alt="History item" className="h-full w-full object-cover" src="https://images.pexels.com/photos/4484073/pexels-photo-4484073.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"/>
<span className="absolute top-1 left-1 rounded-full bg-black/50 px-1.5 py-0.5 text-[0.6rem] font-medium text-white">
                                AI
                              </span>
</div>
<div className="px-2.5 py-2 text-left">
<p className="text-xs font-medium text-neutral-900">
                                07:55 · 03/11
                              </p>
<p className="text-[0.7rem] font-medium text-amber-600">
                                Review · 1 anomaly
                              </p>
</div>
</button>
<button className="flex flex-col min-w-[8rem] rounded-xl border border-neutral-200 bg-white hover:border-neutral-300">
<div className="relative h-20 overflow-hidden rounded-t-lg bg-neutral-900">
<img alt="History item" className="h-full w-full object-cover opacity-80" src="https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"/>
<span className="absolute top-1 left-1 rounded-full bg-black/50 px-1.5 py-0.5 text-[0.6rem] font-medium text-white">
                                Scan
                              </span>
</div>
<div className="px-2.5 py-2 text-left">
<p className="text-xs font-medium text-neutral-900">
                                06:20 · 03/11
                              </p>
<p className="text-[0.7rem] font-medium text-neutral-600">
                                Archived
                              </p>
</div>
</button>
<button className="flex flex-col min-w-[8rem] rounded-xl border border-dashed border-neutral-200 bg-neutral-50 hover:border-neutral-300">
<div className="flex-1 flex flex-col items-center justify-center h-20">
<span className="text-[0.7rem] font-medium text-neutral-500">
                                Load older photos
                              </span>
</div>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="space-y-5">

<section className="bg-white rounded-2xl border border-neutral-200 shadow-sm">
<div className="px-4 sm:px-5 py-4 border-b border-neutral-100">
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                      Location
                    </h2>
<p className="mt-1 text-base font-medium text-neutral-500">
                      Current placement and transfer history.
                    </p>
</div>
<div className="px-4 sm:px-5 py-4 space-y-4">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1">
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Current location
                        </p>
<p className="text-base font-medium text-neutral-900">
                          Aisle 11 · Block 3 · Level 2
                        </p>
<p className="text-xs font-medium text-neutral-500">
                          New York DC · Zone B
                        </p>
</div>
<div className="text-right space-y-1">
<p className="text-xs font-medium text-neutral-500 uppercase">
                          Since
                        </p>
<p className="text-base font-medium text-neutral-900">
                          12/10/2025
                        </p>
<p className="text-xs font-medium text-neutral-500">
                          23 days in position
                        </p>
</div>
</div>
<button className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700">
                      View transfer history
                    </button>
<div className="border-t border-neutral-100 pt-4">
<p className="text-xs font-medium text-neutral-500 uppercase mb-2">
                        Recent moves
                      </p>
<ol className="space-y-2 text-xs font-medium text-neutral-700">
<li className="flex items-center justify-between">
<span>Aisle 05 → Aisle 11</span>
<span className="text-neutral-500">12/10 · 14:20</span>
</li>
<li className="flex items-center justify-between">
<span>Dock inbound → Aisle 05</span>
<span className="text-neutral-500">10/10 · 09:42</span>
</li>
</ol>
</div>
</div>
</section>

<section className="bg-white rounded-2xl border border-neutral-200 shadow-sm">
<div className="px-4 sm:px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                        Audit timeline
                      </h2>
<p className="mt-1 text-base font-medium text-neutral-500">
                        Scan events, AI counts, overrides and transfer lifecycle.
                      </p>
</div>
<button className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                      Compact
                    </button>
</div>
<div className="px-4 sm:px-5 py-4">

<div className="flex flex-wrap gap-1.5 mb-4">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                        Assigned
                      </span>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                        Picking
                      </span>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                        Dispatched
                      </span>
<span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-neutral-600">
                        Received
                      </span>
<span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-neutral-600">
                        Closed
                      </span>
</div>

<ol className="relative border-l border-neutral-200 pl-4 space-y-4 text-xs font-medium text-neutral-700">

<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"></div>
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-xs font-semibold text-neutral-900">
                              Scan completed
                            </p>
<p className="text-xs font-medium text-neutral-500">
                              Mobile NFC scan by Linh Nguyen
                            </p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-neutral-500">
                              08:18 · 03/11/2025
                            </p>
<p className="text-[0.7rem] font-medium text-emerald-600">
                              Latency 1.2s
                            </p>
</div>
</div>
</li>

<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border-2 border-white bg-blue-500"></div>
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-xs font-semibold text-neutral-900">
                              AI count completed
                            </p>
<p className="text-xs font-medium text-neutral-500">
                              Model v2.4 · 112 items detected · variance 0
                            </p>
<div className="mt-1 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-700">
                              Auto-approved
                            </div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-neutral-500">
                              08:18 · 03/11/2025
                            </p>
<p className="text-[0.7rem] font-medium text-neutral-500">
                              +3 seconds after scan
                            </p>
</div>
</div>
</li>

<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border-2 border-white bg-amber-500"></div>
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-xs font-semibold text-neutral-900">
                              Manual override
                            </p>
<p className="text-xs font-medium text-neutral-500">
                              Expected quantity adjusted from 110 → 112.
                            </p>
<p className="mt-1 text-[0.7rem] font-medium text-neutral-500">
                              Comment: "Recounted by team, found 2 extra cartons."
                            </p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-neutral-500">
                              07:56 · 03/11/2025
                            </p>
<p className="text-[0.7rem] font-medium text-neutral-500">
                              By Linh Nguyen
                            </p>
</div>
</div>
</li>

<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border-2 border-white bg-neutral-500"></div>
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-xs font-semibold text-neutral-900">
                              Location updated
                            </p>
<p className="text-xs font-medium text-neutral-500">
                              Aisle 05 · Block 1 → Aisle 11 · Block 3.
                            </p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-neutral-500">
                              12:10 · 12/10/2025
                            </p>
<p className="text-[0.7rem] font-medium text-neutral-500">
                              From TO-2025-000392
                            </p>
</div>
</div>
</li>

<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border-2 border-white bg-indigo-500"></div>
<div className="space-y-2">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-xs font-semibold text-neutral-900">
                                Transfer TO-2025-000392 lifecycle
                              </p>
<p className="text-xs font-medium text-neutral-500">
                                From New York inbound dock to Aisle 11 · Block 3.
                              </p>
</div>
<p className="text-xs font-medium text-neutral-500">
                              10/10–12/10/2025
                            </p>
</div>
<div className="flex flex-col gap-1 pl-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                  Assigned
                                </span>
</div>
<span className="text-xs font-medium text-neutral-500">
                                10/10 · 09:15
                              </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                  Picking
                                </span>
</div>
<span className="text-xs font-medium text-neutral-500">
                                10/10 · 09:42
                              </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                  Dispatched
                                </span>
</div>
<span className="text-xs font-medium text-neutral-500">
                                10/10 · 10:05
                              </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                  Received
                                </span>
</div>
<span className="text-xs font-medium text-neutral-500">
                                12/10 · 13:40
                              </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                  Closed
                                </span>
</div>
<span className="text-xs font-medium text-neutral-500">
                                12/10 · 14:02
                              </span>
</div>
</div>
</div>
</li>
</ol>
<button className="mt-4 inline-flex items-center text-xs font-medium text-neutral-700 hover:text-neutral-900">
                      Load older events
                    </button>
</div>
</section>

<section className="bg-white rounded-2xl border border-neutral-200 shadow-sm">
<div className="px-4 sm:px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                        Rack actions
                      </h2>
<p className="mt-1 text-base font-medium text-neutral-500">
                        Trigger AI recount or move rack via integrations.
                      </p>
</div>
</div>
<div className="px-4 sm:px-5 py-4 space-y-3">
<button className="w-full inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-800 hover:bg-neutral-100">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M8 4V2M16 4V2M3 10h18"></path>
</svg>
</span>
<span>Schedule AI recount</span>
</div>
<span className="text-[0.7rem] font-medium text-neutral-500">
                        Next 15 min
                      </span>
</button>
<button className="w-full inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 hover:bg-neutral-50">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</span>
<span>Create new transfer</span>
</div>
<span className="text-[0.7rem] font-medium text-neutral-500">
                        TO draft
                      </span>
</button>
<button className="w-full inline-flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M10 11v6M14 11v6M5 6l1 13h12l1-13M9 6V4h6v2"></path>
</svg>
</span>
<span>Mark rack as inactive</span>
</div>
<span className="text-[0.7rem] font-medium text-red-600">
                        Requires admin
                      </span>
</button>
</div>
</section>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
