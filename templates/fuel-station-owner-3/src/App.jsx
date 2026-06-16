import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-full min-h-screen">

<aside className="flex w-64 flex-col border-r border-neutral-200 bg-neutral-50/80 backdrop-blur">

<div className="flex items-center gap-2 px-3 pt-3 pb-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm">
<span className="text-sm font-semibold tracking-tight">FH</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight">
              FuelHero Dashboard
            </span>
<span className="text-xs text-neutral-500">
              Station 104 • Main &amp; 7th
            </span>
</div>
</div>

<div className="px-3 pb-2">
<div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-xs">
<span className="i-lucide-search text-neutral-400" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
<input className="w-full bg-transparent text-xs outline-none placeholder:text-neutral-400" placeholder="Quick actions" type="text"/>
</div>
</div>

<div className="px-3 pb-3">
<p className="px-2 pb-1 text-[0.7rem] font-medium uppercase tracking-tight text-neutral-400">
            Pages
          </p>
<nav className="space-y-0.5 text-xs">
<button className="flex w-full items-center justify-between rounded-xl bg-neutral-900/5 px-2.5 py-2 text-xs font-medium text-neutral-900">
<span className="flex items-center gap-2">
<span className="i-lucide-home text-neutral-600" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
                Overview
              </span>
</button>
<button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-xs text-neutral-600 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-neutral-200">
<span className="i-lucide-flame text-neutral-500" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
<span>Order Fuel</span>
</button>
<button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-xs text-neutral-600 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-neutral-200">
<span className="i-lucide-line-chart text-neutral-500" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
<span>Rack Prices</span>
</button>
<button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-xs text-neutral-600 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-neutral-200">
<span className="i-lucide-truck text-neutral-500" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
<span>Loads &amp; Freight</span>
</button>
<button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-xs text-neutral-600 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-neutral-200">
<span className="i-lucide-banknote text-neutral-500" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
<span>ACH Payments</span>
</button>
<button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-xs text-neutral-600 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-neutral-200">
<span className="i-lucide-settings text-neutral-500" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
<span>Settings</span>
</button>
</nav>
</div>

<div className="mt-auto border-t border-neutral-200 px-4 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-[0.7rem] font-medium">
                ST
              </div>
<div className="flex flex-col">
<span className="text-xs font-medium">Summit Fuel LLC</span>
<span className="text-[0.7rem] text-neutral-500">
                  Owner • Sarah
                </span>
</div>
</div>
<button className="rounded-full border border-neutral-200 bg-white p-1 text-neutral-500 hover:bg-neutral-100">
<span className="i-lucide-chevron-up" style={{fontSize: '0.875rem', strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-neutral-100">

<header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-5 py-2.5 backdrop-blur">
<div className="flex items-center gap-1.5 text-xs text-neutral-500">
<span className="text-neutral-400">Overview</span>
<span>•</span>
<span className="font-medium text-neutral-900">
              Fuel status trending low in 6 hrs
            </span>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[0.7rem] text-neutral-700 shadow-xs">
<span className="i-lucide-calendar" style={{fontSize: '0.8rem', strokeWidth: '1.5'}}></span>
              Last 7 days
            </button>
<button className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[0.7rem] text-neutral-700 shadow-xs">
<span className="i-lucide-tag" style={{fontSize: '0.8rem', strokeWidth: '1.5'}}></span>
              All grades
            </button>
<button className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[0.7rem] text-neutral-700 shadow-xs">
<span className="i-lucide-map-pin" style={{fontSize: '0.8rem', strokeWidth: '1.5'}}></span>
              Station 104
            </button>
<button className="ml-1 flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[0.7rem] text-neutral-700 shadow-xs">
<span className="i-lucide-download" style={{fontSize: '0.8rem', strokeWidth: '1.5'}}></span>
              Export
            </button>
</div>
</header>

<div className="space-y-3 px-4 pb-6 pt-3 sm:px-6">

<section className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<div className="flex flex-col gap-2 border-b border-neutral-100 px-4 pt-3 pb-2 sm:flex-row sm:items-center sm:justify-between">
<div className="space-y-0.5">
<h1 className="text-lg font-semibold tracking-tight text-neutral-900">
                  Fuel Status &amp; Instant Order
                </h1>
<p className="text-sm text-neutral-500">
                  Here’s the situation. Here’s the solution. Press this button.
                </p>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-500">
<div className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-[3px] text-emerald-700">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Autopilot monitoring
                </div>
<button className="text-neutral-500 hover:text-neutral-800">
                  Order rules
                </button>
</div>
</div>

<div className="grid gap-4 px-4 pt-3 pb-3 md:grid-cols-3">

<div className="flex items-center gap-4 md:border-r md:border-neutral-100 md:pr-4">
<div className="relative h-20 w-20">
<svg className="h-full w-full" viewbox="0 0 36 36">
<path className="stroke-neutral-200" d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" strokeLinecap="round" strokeWidth="3"></path>
<path className="stroke-amber-400" d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" stroke-dasharray="75,100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-neutral-900">
                      25%
                    </span>
<span className="text-[0.7rem] text-neutral-500">
                      Tank level
                    </span>
</div>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-neutral-500">
                    Unleaded 87 • 12,000 gal tank
                  </p>
<p className="text-sm font-semibold text-neutral-900">
                    Tank will reach minimum in
                    <span className="text-amber-600">6h 12m</span>. Order today.
                  </p>
<p className="text-xs text-neutral-500">
                    Estimated run-out: <span className="font-medium text-neutral-900">11:30 PM</span>
</p>
</div>
</div>

<div className="space-y-2 md:px-4">
<p className="text-xs font-medium text-neutral-500">
                  Recommended order
                </p>
<p className="text-base font-semibold tracking-tight text-neutral-900">
                  8,400 gallons
                </p>
<div className="space-y-1 text-xs text-neutral-500">
<p>
                    Coverage after delivery:
                    <span className="font-medium text-neutral-900">2.4 days</span>
</p>
<p>
                    Estimated delivered cost:
                    <span className="font-medium text-neutral-900">$20,244 total</span>
</p>
</div>
<button className="text-[0.7rem] text-neutral-500 underline underline-offset-2 hover:text-neutral-800">
                  Why this volume?
                </button>
</div>

<div className="space-y-2 md:border-l md:border-neutral-100 md:pl-4">
<p className="text-xs font-medium text-neutral-500">
                  Supplier selection
                </p>
<p className="text-sm font-medium text-neutral-900">
                  Horizon Fuels is the optimal supplier today at
                  <span className="text-neutral-900">$2.41/gal.
                </span></p>
<button className="text-[0.7rem] text-neutral-500 underline underline-offset-2 hover:text-neutral-800">
                  Show supplier details
                </button>
</div>
</div>

<div className="space-y-2 border-t border-neutral-100 px-4 pt-3 pb-3">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[0.7rem] text-sky-800">
<span className="i-lucide-activity" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
<span className="font-medium">
                    FH price advantage: 6¢/gal below today’s market.
                  </span>
</div>
<span className="text-[0.7rem] text-neutral-500">
                  Today’s FH delivered price is below market baseline.
                </span>
</div>
<button className="mt-2 flex w-full items-center justify-between rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-sm hover:bg-neutral-800">
<span className="flex items-center gap-2">
<span className="i-lucide-flashlight" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
                  Order 8,400 gal — $2.41/gal
                </span>
<span className="flex items-center gap-1 text-xs text-neutral-200">
                  Sends to Horizon Fuels
                  <span className="i-lucide-arrow-right" style={{fontSize: '1rem', strokeWidth: '1.5'}}></span>
</span>
</button>
<div className="flex flex-wrap items-center justify-between gap-2 text-[0.7rem] text-neutral-500">
<div className="flex items-center gap-1">
<span className="i-lucide-shield-check" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
<span>
                    Auto-checks credit, rack, and freight before sending.
                  </span>
</div>
<button className="text-neutral-600 underline underline-offset-2 hover:text-neutral-800">
                  Edit order details instead
                </button>
</div>
</div>
</section>

<div className="grid gap-3 lg:grid-cols-3">

<section className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white shadow-sm">
<div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
<div className="flex flex-col gap-0.5">
<h2 className="text-sm font-semibold tracking-tight text-neutral-900">
                    Price &amp; Margin Analytics
                  </h2>
<p className="text-xs text-neutral-500">
                    Context for today’s lock versus recent history.
                  </p>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-500">
<button className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-[3px]">
<span className="i-lucide-activity" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                    Live basis
                  </button>
<button className="rounded-full border border-neutral-200 bg-white p-1 text-neutral-500 hover:bg-neutral-50">
<span className="i-lucide-maximize-2" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-1.5 border-b border-neutral-100 px-4 py-2 text-xs">
<button className="rounded-full bg-neutral-900 px-3 py-1 text-[0.7rem] font-medium tracking-tight text-white shadow-xs">
                  Delivered Cost
                </button>
<button className="rounded-full px-3 py-1 text-[0.7rem] text-neutral-600 hover:bg-neutral-100">
                  Rack Only
                </button>
<button className="rounded-full px-3 py-1 text-[0.7rem] text-neutral-600 hover:bg-neutral-100">
                  Freight Share
                </button>
<button className="rounded-full px-3 py-1 text-[0.7rem] text-neutral-600 hover:bg-neutral-100">
                  Margin Per Gallon
                </button>
</div>

<div className="px-4 pb-4 pt-3">
<div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-neutral-200 bg-neutral-50">
<span className="text-xs text-neutral-400">
                    Delivered cost trend visualization
                  </span>
</div>
<div className="mt-3 grid gap-3 text-[0.7rem] text-neutral-600 sm:grid-cols-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-500"></span>
<span>
                      Current lock
                      <span className="font-medium text-neutral-900">
                        $2.41/gal
                      </span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span>
                      7d low
                      <span className="font-medium text-neutral-900">
                        $2.37/gal
                      </span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span>
                      7d high
                      <span className="font-medium text-neutral-900">
                        $2.51/gal
                      </span>
</span>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="flex w-full items-center justify-between px-4 py-2.5 text-left">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-semibold tracking-tight text-neutral-900">
                    Demand &amp; Safety Outlook
                  </span>
<span className="text-xs text-neutral-500">
                    Tomorrow’s risk high if today’s order is skipped.
                  </span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-500">
<span>Collapsed</span>
<span className="i-lucide-chevron-down" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="border-t border-neutral-100 px-4 pb-3 pt-2 text-[0.7rem] text-neutral-500">
<div className="space-y-1.5">
<p>
<span className="font-medium text-neutral-900">Weekend boost:</span>
                    Saturday demand expected +18% versus weekday.
                  </p>
<p>
<span className="font-medium text-neutral-900">Storm window:</span>
                    Weather impact likely Sunday 2–8 PM.
                  </p>
<p>
<span className="font-medium text-neutral-900">Inventory volatility:</span>
                    Draw swings ±9% compared to baseline.
                  </p>
<p>
<span className="font-medium text-neutral-900">Next recommended check-in:</span>
                    tomorrow 11:00 AM or when level hits 40%.
                  </p>
<p>
<span className="font-medium text-neutral-900">Autopilot guidance:</span>
                    No additional orders until tank drops below 35% or demand spike exceeds forecast.
                  </p>
</div>
</div>
</section>
</div>

<section className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
<div className="flex flex-col gap-0.5">
<h2 className="text-sm font-semibold tracking-tight text-neutral-900">
                  Active Loads &amp; Deliveries
                </h2>
<p className="text-xs text-neutral-500">
                  Live operations for today and tomorrow.
                </p>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-500">
<button className="flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-[3px]">
<span className="i-lucide-filter" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                  Filters
                </button>
<button className="rounded-full border border-neutral-200 bg-white p-1 hover:bg-neutral-50">
<span className="i-lucide-maximize-2" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="px-4 pb-3 pt-2">
<div className="overflow-x-auto">
<table className="min-w-full border-separate border-spacing-y-1 text-xs">
<thead className="text-[0.7rem] text-neutral-500">
<tr>
<th className="py-2 pr-3 text-left font-medium">Load #</th>
<th className="px-3 text-left font-medium">Product</th>
<th className="px-3 text-left font-medium">Status</th>
<th className="px-3 text-left font-medium">Pickup → Drop</th>
<th className="px-3 text-left font-medium">Driver</th>
<th className="px-3 text-right font-medium">Issue flag</th>
</tr>
</thead>
<tbody>

<tr>
<td className="py-1.5 pr-3 align-middle">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-1 shadow-xs">
<span className="text-[0.7rem] font-semibold text-neutral-900">
                            FH-4821
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900">
                            Unleaded 87
                          </span>
<span className="text-[0.7rem] text-neutral-500">
                            8,400 gal • Compartmented
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                En route to site
                              </span>
</div>
<span className="text-[0.7rem] text-neutral-500">
                              68% of route
                            </span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
<div className="h-1.5 rounded-full bg-emerald-500" style={{width: '68%'}}></div>
</div>
<p className="text-[0.7rem] text-neutral-500">
                            ETA 3:18 PM (on time)
                          </p>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex flex-col">
<span className="text-xs text-neutral-900">
                            2:10 PM • Kinder Morgan
                          </span>
<span className="text-[0.7rem] text-neutral-500">
                            → 3:30 PM • Station 104
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[0.7rem] font-medium text-neutral-700">
                            JL
                          </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900">
                              Jose Lopez
                            </span>
<span className="text-[0.7rem] text-neutral-500">
                              Truck 14 • Plate 7DK-293
                            </span>
</div>
</div>
</td>
<td className="px-3 py-1.5 text-right align-middle">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-[2px] text-[0.65rem] font-medium text-emerald-700">
                          On target
                        </span>
</td>
</tr>

<tr>
<td className="py-1.5 pr-3 align-middle">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-1 shadow-xs">
<span className="text-[0.7rem] font-semibold text-neutral-900">
                            FH-4822
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900">
                            Diesel ULSD
                          </span>
<span className="text-[0.7rem] text-neutral-500">
                            6,000 gal • Single product
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span className="text-xs font-medium text-neutral-900">
                                Loading at terminal
                              </span>
</div>
<span className="text-[0.7rem] text-neutral-500">
                              Loading 24%
                            </span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
<div className="h-1.5 rounded-full bg-amber-400" style={{width: '24%'}}></div>
</div>
<p className="text-[0.7rem] text-neutral-500">
                            Gate in 5 min • ETA 5:18 PM
                          </p>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex flex-col">
<span className="text-xs text-neutral-900">
                            3:40 PM • Buckeye
                          </span>
<span className="text-[0.7rem] text-neutral-500">
                            → 5:05 PM • Station 104
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[0.7rem] font-medium text-neutral-700">
                            AK
                          </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900">
                              Ashley Kim
                            </span>
<span className="text-[0.7rem] text-neutral-500">
                              Truck 07 • Plate 4HD-821
                            </span>
</div>
</div>
</td>
<td className="px-3 py-1.5 text-right align-middle">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-[2px] text-[0.65rem] font-medium text-amber-700">
                          Delay • 13 min over
                        </span>
</td>
</tr>

<tr>
<td className="py-1.5 pr-3 align-middle">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-1 shadow-xs">
<span className="text-[0.7rem] font-semibold text-neutral-900">
                            FH-4820
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900">
                            Premium 91
                          </span>
<span className="text-[0.7rem] text-neutral-500">
                            4,200 gal • Compartmented
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
<span className="text-xs font-medium text-neutral-900">
                                Scheduled • ETA slip risk
                              </span>
</div>
<span className="text-[0.7rem] text-neutral-500">
                              Not started
                            </span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
<div className="h-1.5 rounded-full bg-neutral-400" style={{width: '0%'}}></div>
</div>
<p className="text-[0.7rem] text-neutral-500">
                            Window 9:00 PM–10:30 PM • Lead time 4h 32m
                          </p>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex flex-col">
<span className="text-xs text-neutral-900">
                            8:15 PM • Magellan
                          </span>
<span className="text-[0.7rem] text-neutral-500">
                            → 9:45 PM • Station 104
                          </span>
</div>
</td>
<td className="px-3 py-1.5 align-middle">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[0.7rem] font-medium text-neutral-700">
                            RM
                          </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900">
                              Ryan Mills
                            </span>
<span className="text-[0.7rem] text-neutral-500">
                              Assigned • Not departed
                            </span>
</div>
</div>
</td>
<td className="px-3 py-1.5 text-right align-middle">
<span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-[2px] text-[0.65rem] font-medium text-rose-700">
                          Risk window
                        </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-3 text-[0.7rem] text-neutral-500">
<div className="flex items-center gap-1">
<span className="i-lucide-info" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
<span>
                    Issue flags only trigger if ETA exceeds target by more than 15 minutes.
                  </span>
</div>
<button className="flex items-center gap-1 text-neutral-700 underline underline-offset-2 hover:underline">
<span className="i-lucide-list-filter" style={{fontSize: '0.85rem', strokeWidth: '1.5'}}></span>
                  View all loads
                </button>
</div>
</div></section>
</div>
</main></div>



    </>
  );
}
