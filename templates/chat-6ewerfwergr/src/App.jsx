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
      

<div className="min-h-screen bg-slate-50 text-slate-900">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 py-3 lg:px-8">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center rounded-md bg-slate-900 text-slate-50 px-2 py-1 text-sm font-semibold tracking-tight">
              ev
            </div>
<span className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900">
              Evento Design System
            </span>
</div>
<nav className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900" href="#design-system">Design System</a>
<a className="hover:text-slate-900" href="#public-site">Public Site</a>
<a className="hover:text-slate-900" href="#organizer-dashboard">Organizer</a>
<a className="hover:text-slate-900" href="#checkout">Checkout</a>
<a className="hover:text-slate-900" href="#admin-panel">Admin</a>
</nav>
</div>
</header>

<main className="mx-auto max-w-6xl px-4 py-8 lg:px-8 lg:py-10 space-y-16">



<section className="space-y-10" id="design-system">

<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Design System
              </h1>
<p className="mt-1 text-base text-slate-600">
                Foundations and components for Evento’s web application and dashboards.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Ready for production
            </div>
</div>

<div className="grid gap-6 lg:grid-cols-3">
<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-2">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Grid &amp; Layout
                </h2>
<span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.7rem] uppercase tracking-wide text-slate-500">
                  12-column
                </span>
</div>
<p className="mt-2 text-sm text-slate-600">
                Desktop-first layout using a 12-column grid, collapsing to stacked sections on tablet and mobile.
              </p>
<div className="mt-4 space-y-4">

<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                    Desktop grid
                  </div>
<div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-3">
<div className="grid grid-cols-12 gap-1">
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
<div className="h-10 rounded bg-sky-100"></div>
</div>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="text-xs font-medium text-slate-500">
                      Desktop
                    </div>
<div className="mt-1 text-sm text-slate-700">
                      Max width container with 12-column layout for dashboards and detail pages.
                    </div>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="text-xs font-medium text-slate-500">
                      Tablet
                    </div>
<div className="mt-1 text-sm text-slate-700">
                      2–4 columns, stacked sidebars and filters into accordions.
                    </div>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="text-xs font-medium text-slate-500">
                      Mobile
                    </div>
<div className="mt-1 text-sm text-slate-700">
                      Single column layout, sticky actions and simplified tables.
                    </div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                Breakpoints
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Key responsive thresholds to keep layouts predictable.
              </p>
<dl className="mt-4 space-y-3 text-sm">
<div className="flex items-center justify-between">
<dt className="text-slate-600">Mobile</dt>
<dd className="text-slate-900 font-medium">sm</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-slate-600">Tablet</dt>
<dd className="text-slate-900 font-medium">md</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-slate-600">Small desktop</dt>
<dd className="text-slate-900 font-medium">lg</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-slate-600">Large desktop</dt>
<dd className="text-slate-900 font-medium">xl</dd>
</div>
</dl>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3">
<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Color System
              </h2>
<p className="mt-2 text-sm text-slate-600">
                Tokens for primary actions, surfaces, text, and semantic statuses.
              </p>

<div className="mt-4 grid gap-4 md:grid-cols-3">

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Primary
                    </span>
<span className="text-[0.7rem] rounded-full bg-slate-100 px-2 py-0.5 text-slate-500">
                      Actions
                    </span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-sky-600"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">primary</div>
<div className="text-slate-500">Buttons, links</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-sky-700"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">primary-hover</div>
<div className="text-slate-500">Hover, focus</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-sky-50"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">primary-subtle</div>
<div className="text-slate-500">Soft backgrounds</div>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Secondary
                    </span>
<span className="text-[0.7rem] rounded-full bg-slate-100 px-2 py-0.5 text-slate-500">
                      Accents
                    </span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-indigo-500"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">secondary</div>
<div className="text-slate-500">Badges, charts</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-slate-50"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">background</div>
<div className="text-slate-500">App background</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-slate-100"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">background-subtle</div>
<div className="text-slate-500">Sub-sections</div>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Surfaces &amp; Borders
                    </span>
<span className="text-[0.7rem] rounded-full bg-slate-100 px-2 py-0.5 text-slate-500">
                      Cards
                    </span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
<div className="h-8 w-8 rounded-md bg-white shadow-sm"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">surface</div>
<div className="text-slate-500">Cards, tables</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
<div className="h-8 w-8 rounded-md bg-white shadow-md"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">surface-elevated</div>
<div className="text-slate-500">Modals</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
<div className="h-8 w-8 rounded-md bg-slate-200"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">border</div>
<div className="text-slate-500">Default borders</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
<div className="h-8 w-8 rounded-md bg-slate-300"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">border-strong</div>
<div className="text-slate-500">Dividers</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid gap-4 md:grid-cols-4">
<div className="space-y-2">
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Text
                  </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-slate-900"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">text-primary</div>
<div className="text-slate-500">Main text</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="h-8 w-8 rounded-md bg-slate-500"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">text-muted</div>
<div className="text-slate-500">Subtext</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-900 p-2">
<div className="h-8 w-8 rounded-md bg-white"></div>
<div className="text-xs">
<div className="font-medium text-slate-50">text-inverse</div>
<div className="text-slate-300">On dark</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Success
                  </div>
<div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 p-2">
<div className="h-8 w-8 rounded-md bg-emerald-500"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">success</div>
<div className="text-slate-500">Success, active</div>
</div>
</div>
</div>
<div className="space-y-2">
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Warning
                  </div>
<div className="flex items-center gap-2 rounded-lg border border-amber-100 bg-amber-50 p-2">
<div className="h-8 w-8 rounded-md bg-amber-500"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">warning</div>
<div className="text-slate-500">Pending, caution</div>
</div>
</div>
</div>
<div className="space-y-2">
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Danger
                  </div>
<div className="flex items-center gap-2 rounded-lg border border-rose-100 bg-rose-50 p-2">
<div className="h-8 w-8 rounded-md bg-rose-500"></div>
<div className="text-xs">
<div className="font-medium text-slate-800">danger</div>
<div className="text-slate-500">Errors, destructive</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                Sample Usage
              </h3>
<div className="mt-4 space-y-3">
<button className="w-full rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                  Primary Action
                </button>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
<div className="font-medium mb-1">Info banner</div>
<div className="text-slate-600">
                    Evento uses a subtle blue primary with neutral layers to support content-heavy views like tables and forms.
                  </div>
</div>
<div className="flex flex-wrap gap-2 text-xs">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 border border-emerald-100">
                    Success
                  </span>
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-amber-700 border border-amber-100">
                    Warning
                  </span>
<span className="inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-rose-700 border border-rose-100">
                    Danger
                  </span>
</div>
</div>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3">
<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Typography
              </h2>
<p className="mt-2 text-sm text-slate-600">
                Sans-serif system / Inter-like stack for clarity in dense tables and forms.
              </p>
<div className="mt-4 space-y-5">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
                    Display / H1 / H2 / H3
                  </div>
<div className="space-y-2">
<div>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                        Display — "Discover and host powerful events"
                      </div>
<div className="mt-1 text-xs text-slate-500">
                        Page-level marketing headlines, hero sections.
                      </div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">
                        H1 — Evento Organizer Dashboard
                      </div>
<div className="mt-1 text-xs text-slate-500">
                        Primary page titles.
                      </div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                        H2 — Events
                      </div>
<div className="mt-1 text-xs text-slate-500">
                        Section headers within a page.
                      </div>
</div>
<div>
<div className="text-xl font-semibold tracking-tight text-slate-900">
                        H3 — Tickets &amp; Pricing
                      </div>
<div className="mt-1 text-xs text-slate-500">
                        Card titles, modal titles.
                      </div>
</div>
</div>
</div>
<div className="grid gap-4 md:grid-cols-2">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Subtitle
                    </div>
<p className="mt-1 text-sm text-slate-600">
                      Supporting lines under titles, used to explain context.
                    </p>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Body / Body Small
                    </div>
<p className="mt-1 text-base text-slate-700">
                      Default running text for descriptions, lists, and documentation.
                    </p>
<p className="mt-1 text-sm text-slate-500">
                      Body small is used for helper text, table metadata, and captions.
                    </p>
</div>
</div>
<div className="grid gap-4 md:grid-cols-3">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Caption
                    </div>
<div className="mt-1 text-xs text-slate-500">
                      Tiny labels used above inputs and in dense UIs.
                    </div>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Overline
                    </div>
<div className="mt-1 text-[0.7rem] text-slate-500 tracking-wide uppercase">
                      Event · Online · Free
                    </div>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Numbers
                    </div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                      2,431
                      <span className="text-xs text-slate-500">tickets sold</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                Type Scale
              </h3>
<div className="mt-3 space-y-3 text-xs">
<div className="flex justify-between">
<span className="text-slate-600">Display</span>
<span className="text-slate-500">text-5xl</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">H1</span>
<span className="text-slate-500">text-4xl</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">H2</span>
<span className="text-slate-500">text-3xl</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">H3</span>
<span className="text-slate-500">text-2xl</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">Subtitle</span>
<span className="text-slate-500">text-sm</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">Body</span>
<span className="text-slate-500">text-base</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">Body small</span>
<span className="text-slate-500">text-sm</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">Caption</span>
<span className="text-slate-500">text-xs</span>
</div>
</div>
</div>
</div>

<div className="space-y-8">

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-2">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Buttons
                </h2>
<span className="text-xs text-slate-500">
                  Sizes, variants, and states
                </span>
</div>
<div className="mt-4 grid gap-6 md:grid-cols-2">

<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
                    Variants
                  </div>
<div className="flex flex-wrap items-center gap-3">

<button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                      Primary
                    </button>

<button className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                      Secondary
                    </button>

<button className="inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                      Ghost
                    </button>

<button className="inline-flex items-center justify-center rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                      Delete
                    </button>
</div>
</div>

<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
                    States &amp; sizes
                  </div>
<div className="space-y-3">
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-700">
                        Large
                      </button>
<button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700">
                        Medium
                      </button>
<button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-sky-700">
                        Small
                      </button>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center rounded-lg bg-sky-600/80 px-4 py-2 text-sm font-medium text-white shadow-sm">
<span className="iconify mr-2" data-height="16" data-icon="lucide:loader-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Loading
                      </button>
<button className="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400">
                        Disabled
                      </button>
<button className="inline-flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                        Outlined
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-2">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Inputs &amp; Forms
                </h2>
<span className="text-xs text-slate-500">
                  Text fields, select, toggles, validation
                </span>
</div>
<div className="mt-4 grid gap-6 lg:grid-cols-3">

<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Event title
                    </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="e.g. Frontend Meetup Tehran" type="text"/>
<p className="text-xs text-slate-500">
                      This will be visible to attendees.
                    </p>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Slug
                    </label>
<div className="flex rounded-lg border border-slate-300 bg-white focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40">
<span className="inline-flex items-center whitespace-nowrap px-3 text-xs text-slate-500">
                        evento.app/e/
                      </span>
<input className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="frontend-meetup" type="text"/>
</div>
<p className="text-xs text-rose-600">
                      Slug is already taken.
                    </p>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Description
                    </label>
<textarea className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Describe your event, target audience, and key outcomes." rows="3"></textarea>
<p className="text-xs text-emerald-600">
                      Looks good. You can always update this later.
                    </p>
</div>
</div>

<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Category
                    </label>
<button className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 hover:bg-slate-50 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40">
<span className="text-slate-700">Technology</span>
<span className="iconify text-slate-500" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<p className="text-xs text-slate-500">
                      Used to group events and for discovery.
                    </p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                        Start date
                      </label>
<button className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 hover:bg-slate-50 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40">
<span className="text-slate-700">2025-06-18</span>
<span className="iconify text-slate-500" data-height="16" data-icon="lucide:calendar" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                        Start time
                      </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" type="time"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Cover image
                    </label>
<label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-6 text-center hover:border-sky-400 hover:bg-sky-50">
<span className="iconify text-slate-400" data-height="24" data-icon="lucide:upload-cloud" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium text-slate-700">
                        Click to upload or drag &amp; drop
                      </span>
<span className="text-[0.7rem] text-slate-500">
                        JPG, PNG up to 5MB
                      </span>
<input className="hidden" type="file"/>
</label>
</div>
</div>

<div className="space-y-4">
<div className="space-y-1.5">
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Options
                    </div>

<label className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
<span className="relative mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded border border-sky-500 bg-sky-600">
<span className="iconify text-slate-50" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="text-xs text-slate-700">
                        I want to
                        <span className="font-medium">host events</span>
                        with Evento.
                      </span>
</label>

<div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="text-xs font-medium text-slate-700 mb-1">
                        Event visibility
                      </div>
<label className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 hover:bg-white">
<div className="flex items-center gap-2">
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-sky-500">
<span className="h-2 w-2 rounded-full bg-sky-600"></span>
</span>
<span className="text-xs text-slate-700">Public</span>
</div>
<span className="text-[0.7rem] text-slate-500">
                          Listed in search
                        </span>
</label>
<label className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 hover:bg-white">
<div className="flex items-center gap-2">
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300"></span>
<span className="text-xs text-slate-700">Private</span>
</div>
<span className="text-[0.7rem] text-slate-500">
                          Only via secret link
                        </span>
</label>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-xs font-medium text-slate-700">
                          Online event
                        </div>
<p className="text-[0.7rem] text-slate-500">
                          If enabled, location will be hidden and join link required.
                        </p>
</div>
<button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-sky-600 transition-colors">
<span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm transition-transform"></span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Navigation &amp; Page Layout
              </h2>
<div className="mt-4 space-y-4">

<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center rounded-md bg-slate-900 text-slate-50 px-1.5 py-0.5 text-xs font-semibold tracking-tight">
                        ev
                      </div>
<span className="text-xs font-medium text-slate-700">
                        Evento
                      </span>
</div>
<div className="hidden flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500 md:flex">
<span className="iconify" data-height="14" data-icon="lucide:search" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Search events, organizers, cities…</span>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-50 md:inline-flex">
                        Host an event
                      </button>
<button className="rounded-full bg-sky-600 px-2.5 py-1 text-xs font-medium text-white">
                        Sign in
                      </button>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide">
                        Evento – Organizer Dashboard
                      </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        Events
                      </h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<span className="iconify mr-1.5" data-height="14" data-icon="lucide:download" data-width="14" style={{strokeWidth: '1.5'}}></span>
                        Export
                      </button>
<button className="inline-flex items-center rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700">
<span className="iconify mr-1.5" data-height="14" data-icon="lucide:plus" data-width="14" style={{strokeWidth: '1.5'}}></span>
                        New event
                      </button>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50">
<div className="flex gap-1 border-b border-slate-200 px-2 pt-2">
<button className="inline-flex items-center gap-1 rounded-t-lg bg-white px-3 py-1.5 text-xs font-medium text-sky-700 border border-b-white border-slate-200">
<span className="iconify" data-height="14" data-icon="lucide:info" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      About
                    </button>
<button className="inline-flex items-center gap-1 rounded-t-lg px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100">
<span className="iconify" data-height="14" data-icon="lucide:clock-3" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      Schedule
                    </button>
<button className="inline-flex items-center gap-1 rounded-t-lg px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100">
<span className="iconify" data-height="14" data-icon="lucide:users" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      Speakers
                    </button>
</div>
<div className="p-3 text-xs text-slate-600">
                    Tab content area – used for event detail sections and dashboard subsections.
                  </div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Cards, Alerts &amp; Chips
              </h2>
<div className="mt-4 space-y-4">

<div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
<div className="flex items-center justify-between gap-2">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                        Event card
                      </h3>
<p className="text-xs text-slate-500">
                        Reusable surface for events, organizations, and analytics.
                      </p>
</div>
<button className="inline-flex items-center rounded-md bg-slate-900 px-2 py-1 text-[0.7rem] font-medium text-slate-50">
                      Manage
                    </button>
</div>
</div>

<div className="space-y-2">
<div className="flex items-start gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
<span className="iconify mt-0.5" data-height="14" data-icon="lucide:check-circle-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<div>
<div className="font-medium">Published</div>
<div>Your event is live and visible in discovery.</div>
</div>
</div>
<div className="flex items-start gap-2 rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-800">
<span className="iconify mt-0.5" data-height="14" data-icon="lucide:alert-triangle" data-width="14" style={{strokeWidth: '1.5'}}></span>
<div>
<div className="font-medium">Draft</div>
<div>Complete required fields before publishing.</div>
</div>
</div>
<div className="flex items-start gap-2 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-800">
<span className="iconify mt-0.5" data-height="14" data-icon="lucide:alert-octagon" data-width="14" style={{strokeWidth: '1.5'}}></span>
<div>
<div className="font-medium">Cancelled</div>
<div>Attendees will be notified and refunded automatically.</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 text-[0.7rem]">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
                    Draft
                  </span>
<span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-emerald-700">
                    Published
                  </span>
<span className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50 px-2 py-0.5 text-rose-700">
                    Cancelled
                  </span>
<span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-700">
                    Featured
                  </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
                    Free
                  </span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
                    Paid
                  </span>
<span className="inline-flex items-center rounded-full border border-purple-100 bg-purple-50 px-2 py-0.5 text-purple-700">
                    Support
                  </span>
</div>

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-sky-100 text-xs font-medium text-sky-700">
                      AM
                    </div>
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-indigo-100 text-xs font-medium text-indigo-700">
                      ZH
                    </div>
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-emerald-100 text-xs font-medium text-emerald-700">
                      RS
                    </div>
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-slate-200 text-[0.7rem] font-medium text-slate-700">
                      +4
                    </div>
</div>
<div className="text-xs text-slate-600">
                    Organizing team
                  </div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-2">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    Tables &amp; Data
                  </h2>
<span className="text-xs text-slate-500">
                    Sortable headers, actions, pagination
                  </span>
</div>

<div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
<div className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500">
<span className="iconify" data-height="14" data-icon="lucide:search" data-width="14" style={{strokeWidth: '1.5'}}></span>
<input className="min-w-0 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search events"/>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700">
                    Status
                    <span className="iconify" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700">
                    Date range
                    <span className="iconify" data-height="14" data-icon="lucide:calendar" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="ml-auto inline-flex items-center gap-1 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-50">
<span className="iconify" data-height="14" data-icon="lucide:sliders-horizontal" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Reset
                  </button>
</div>

<div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
<table className="min-w-full border-collapse text-left text-xs">
<thead className="bg-slate-50 text-slate-500">
<tr>
<th className="px-3 py-2 font-medium">
<div className="inline-flex cursor-pointer items-center gap-1">
                            Event
                            <span className="iconify" data-height="12" data-icon="lucide:chevron-up" data-width="12" style={{strokeWidth: '1.5'}}></span>
</div>
</th>
<th className="px-3 py-2 font-medium">Status</th>
<th className="px-3 py-2 font-medium">Date</th>
<th className="px-3 py-2 font-medium">City</th>
<th className="px-3 py-2 font-medium text-right">Tickets sold</th>
<th className="px-3 py-2 font-medium text-right">Revenue</th>
<th className="px-3 py-2 font-medium text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">
<tr className="hover:bg-slate-50">
<td className="px-3 py-2 align-middle">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">
                              Tehran Frontend Meetup
                            </span>
<span className="text-[0.7rem] text-slate-500">
                              @frontend-teh · Tech
                            </span>
</div>
</td>
<td className="px-3 py-2 align-middle">
<span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-1.5 py-0.5 text-[0.7rem] text-emerald-700">
                            Published
                          </span>
</td>
<td className="px-3 py-2 align-middle text-xs text-slate-700">
                          Jun 20, 2025
                        </td>
<td className="px-3 py-2 align-middle text-xs text-slate-700">
                          Tehran
                        </td>
<td className="px-3 py-2 align-middle text-right text-xs text-slate-700">
                          183 / 200
                        </td>
<td className="px-3 py-2 align-middle text-right text-xs text-slate-700">
                          42,600,000 IRR
                        </td>
<td className="px-3 py-2 align-middle text-right">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.7rem] text-slate-700 hover:bg-slate-50">
                            Manage
                            <span className="iconify" data-height="12" data-icon="lucide:chevron-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-3 py-2 align-middle">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">
                              Online Product Analytics Bootcamp
                            </span>
<span className="text-[0.7rem] text-slate-500">
                              @growth-lab · Online
                            </span>
</div>
</td>
<td className="px-3 py-2 align-middle">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[0.7rem] text-slate-700">
                            Draft
                          </span>
</td>
<td className="px-3 py-2 align-middle text-xs text-slate-700">
                          Jul 02, 2025
                        </td>
<td className="px-3 py-2 align-middle text-xs text-slate-700">
                          Online
                        </td>
<td className="px-3 py-2 align-middle text-right text-xs text-slate-700">
                          45 / 150
                        </td>
<td className="px-3 py-2 align-middle text-right text-xs text-slate-700">
                          12,000,000 IRR
                        </td>
<td className="px-3 py-2 align-middle text-right">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.7rem] text-slate-700 hover:bg-slate-50">
                            Edit
                          </button>
</td>
</tr>
</tbody>
</table>

<div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-3 py-2 text-[0.7rem] text-slate-600">
<div>Rows per page: 10</div>
<div className="flex items-center gap-2">
<span>1–10 of 42</span>
<div className="inline-flex items-center gap-1">
<button className="rounded-md border border-slate-200 bg-white p-1 text-slate-600 hover:bg-slate-100">
<span className="iconify" data-height="14" data-icon="lucide:chevron-left" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="rounded-md border border-slate-200 bg-white p-1 text-slate-600 hover:bg-slate-100">
<span className="iconify" data-height="14" data-icon="lucide:chevron-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid gap-6 md:grid-cols-2">

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    Overlays
                  </h3>
<p className="mt-1 text-xs text-slate-600">
                    Modals, drawers, and toasts reuse surface-elevated with subtle shadows.
                  </p>

<div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="mx-auto max-w-sm rounded-lg border border-slate-200 bg-white p-3 shadow-md">
<div className="flex items-center justify-between gap-2">
<div className="text-xs font-medium text-slate-900">
                          Confirm cancellation
                        </div>
<button className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
<span className="iconify" data-height="14" data-icon="lucide:x" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="mt-1 text-xs text-slate-600">
                        This will notify all attendees and issue refunds where applicable.
                      </p>
<div className="mt-3 flex justify-end gap-2">
<button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.7rem] text-slate-700 hover:bg-slate-50">
                          Keep event
                        </button>
<button className="rounded-md bg-rose-500 px-2.5 py-1 text-[0.7rem] font-medium text-white hover:bg-rose-600">
                          Cancel event
                        </button>
</div>
</div>
</div>

<div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
<span className="iconify" data-height="14" data-icon="lucide:badge-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<div className="flex-1">
                      Tickets updated
                    </div>
<button className="text-[0.7rem] underline">
                      Undo
                    </button>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    Stepper &amp; Empty states
                  </h3>

<div className="mt-3 space-y-3">
<div className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[0.7rem] font-medium text-white">
                            1
                          </div>
<div className="h-0.5 w-8 rounded-full bg-sky-600"></div>
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[0.7rem] font-medium text-white">
                            2
                          </div>
<div className="h-0.5 w-8 rounded-full bg-slate-200"></div>
<div className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[0.7rem] font-medium text-slate-600">
                            3
                          </div>
</div>
<div className="text-xs text-slate-700">
                          Step 2 of 3 · Tickets
                        </div>
</div>
<button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.7rem] text-slate-700 hover:bg-slate-50">
                        Save draft
                      </button>
</div>
</div>

<div className="mt-3 rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-center">
<div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
<span className="iconify text-slate-500" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="mt-2 text-sm font-semibold tracking-tight text-slate-900">
                      No events yet
                    </h4>
<p className="mt-1 text-xs text-slate-600">
                      Start by creating your first event. You can duplicate it later for future sessions.
                    </p>
<button className="mt-3 inline-flex items-center rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700">
<span className="iconify mr-1.5" data-height="14" data-icon="lucide:plus" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      Create event
                    </button>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="space-y-10" id="public-site">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center rounded-md bg-slate-900 text-slate-50 px-2 py-1 text-sm font-semibold tracking-tight">
                  ev
                </div>
<span className="text-sm font-semibold tracking-tight text-slate-900">
                  Evento
                </span>
</div>
<nav className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
<button className="hover:text-slate-900">
                  Browse events
                </button>
<button className="hover:text-slate-900">
                  Organizers
                </button>
<button className="hover:text-slate-900">
                  Pricing
                </button>
<div className="hidden sm:block w-px h-5 bg-slate-200"></div>
<button className="text-slate-700 hover:text-slate-900">
                  Sign in
                </button>
<button className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-50 hover:bg-slate-800">
                  Host an event
                </button>
</nav>
</header>

<div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
<div className="space-y-4">
<p className="text-[0.7rem] font-medium uppercase tracking-wide text-sky-600">
                  EVENT MANAGEMENT &amp; TICKETING
                </p>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Discover and host powerful events with Evento
                </h1>
<p className="text-base text-slate-600">
                  Manage registrations, sell tickets, and grow your community with a modern, trusted event platform built for tech, education, and cultural experiences.
                </p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">
                    Discover events
                  </button>
<button className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
                    Host an event
                  </button>
<div className="inline-flex items-center gap-1 text-xs text-slate-500">
<span className="iconify text-emerald-500" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Trusted by universities &amp; tech communities
                  </div>
</div>

<div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="text-xs font-medium text-slate-700 mb-2">
                    Find your next event
                  </div>
<div className="grid gap-2 md:grid-cols-4">
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600">
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:search" data-width="14" style={{strokeWidth: '1.5'}}></span>
<input className="min-w-0 flex-1 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Keyword"/>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600">
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5'}}></span>
<input className="min-w-0 flex-1 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="City or Online"/>
</div>
<button className="inline-flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:calendar-range" data-width="14" style={{strokeWidth: '1.5'}}></span>
                        Any date
                      </span>
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
                        Category
                      </span>
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="mt-2 flex justify-end">
<button className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-50 hover:bg-slate-800">
                      Search events
                    </button>
</div>
</div>
</div>

<div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-xs font-medium text-slate-700">
                      Upcoming tech events
                    </div>
<div className="text-sm text-slate-500">
                      Based on your location
                    </div>
</div>
<button className="inline-flex items-center rounded-full bg-white px-2 py-1 text-[0.7rem] text-slate-700 shadow-sm">
                    See all
                  </button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 rounded-lg bg-white p-2 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">
                        React &amp; Next.js Conf · Tehran
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        Jun 22 · In-person · From 450,000 IRR
                      </div>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] text-emerald-700">
                      Featured
                    </span>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white p-2 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">
                        Online Data Science Bootcamp
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        Jul 05 · Online · Free
                      </div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg bg-white p-2 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">
                        Product Management for Engineers
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        Jul 19 · Tehran · From 880,000 IRR
                      </div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-3 text-center">
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">
                      4.8
                    </div>
<div className="text-[0.7rem] text-slate-500">
                      Avg organizer rating
                    </div>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">
                      12k+
                    </div>
<div className="text-[0.7rem] text-slate-500">
                      Monthly attendees
                    </div>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">
                      700+
                    </div>
<div className="text-[0.7rem] text-slate-500">
                      Active events
                    </div>
</div>
</div>
</div>
</div>

<div className="mt-8 space-y-3">
<div className="flex items-center justify-between gap-2">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Popular categories
                </h2>
<button className="text-xs text-slate-600 hover:text-slate-900">
                  View all
                </button>
</div>
<div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
<button className="inline-flex items-center justify-between gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-sky-50 hover:border-sky-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-sky-500" data-height="14" data-icon="lucide:laptop-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Technology
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    210
                  </span>
</button>
<button className="inline-flex items-center justify-between gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-sky-50 hover:border-sky-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-emerald-500" data-height="14" data-icon="lucide:graduation-cap" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Education
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    184
                  </span>
</button>
<button className="inline-flex items-center justify-between gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-sky-50 hover:border-sky-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-purple-500" data-height="14" data-icon="lucide:music-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Culture &amp; Art
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    96
                  </span>
</button>
<button className="inline-flex items-center justify-between gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-sky-50 hover:border-sky-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-amber-500" data-height="14" data-icon="lucide:briefcase" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Business
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    74
                  </span>
</button>
<button className="inline-flex items-center justify-between gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-sky-50 hover:border-sky-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-rose-500" data-height="14" data-icon="lucide:heart-pulse" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Health &amp; Wellness
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    61
                  </span>
</button>
<button className="inline-flex items-center justify-between gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-sky-50 hover:border-sky-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-teal-500" data-height="14" data-icon="lucide:globe-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Community
                  </span>
<span className="text-[0.7rem] text-slate-500">
                    48
                  </span>
</button>
</div>
</div>

<div className="mt-6 grid gap-4 md:grid-cols-3">
<div className="md:col-span-1">
<h2 className="text-sm font-semibold tracking-tight text-slate-900">
                  Featured organizers
                </h2>
<p className="mt-1 text-xs text-slate-600">
                  Verified communities and teams consistently running high‑quality events on Evento.
                </p>
</div>
<div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                    FT
                  </div>
<div className="flex-1">
<div className="flex items-center gap-1">
<span className="text-xs font-medium text-slate-900">
                        Frontend Tehran
                      </span>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.65rem] text-emerald-700">
                        Verified
                      </span>
</div>
<div className="text-[0.7rem] text-slate-500">
                      3.2k followers · 48 events
                    </div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
                    UoT
                  </div>
<div className="flex-1">
<div className="flex items-center gap-1">
<span className="text-xs font-medium text-slate-900">
                        University of Tehran CS
                      </span>
</div>
<div className="text-[0.7rem] text-slate-500">
                      1.8k followers · 22 events
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="grid gap-6 lg:grid-cols-[2fr,1fr]">

<div className="space-y-4">
<div className="space-y-1">
<p className="text-[0.7rem] font-medium uppercase tracking-wide text-sky-600">
                    EVENT DETAIL
                  </p>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                    Tehran Frontend Meetup · June Edition
                  </h2>
<div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-500">
<span className="inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      Dastan Garden, Tehran
                    </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:calendar-clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      Thu, Jun 20 · 5:30 PM – 9:00 PM
                    </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="inline-flex items-center gap-1">
<span className="iconify text-emerald-500" data-height="14" data-icon="lucide:users" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      183 attending
                    </span>
</div>
</div>
<div className="overflow-hidden rounded-xl border border-slate-200">
<div className="h-40 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"></div>
<div className="border-t border-slate-200 bg-slate-50 px-3 py-2 text-[0.7rem] text-slate-600">
                    Hosted by
                    <span className="font-medium text-slate-900">
                      Frontend Tehran
                    </span>
                    · Community meetup
                  </div>
</div>
<div className="space-y-2 text-sm text-slate-700">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    About this event
                  </h3>
<p>
                    Join 200+ frontend engineers, designers, and product people in Tehran for an evening of talks, live demos, and honest conversations about shipping modern web applications.
                  </p>
<ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
<li>3 lightning talks on performance, DX, and product thinking</li>
<li>Open Q&amp;A with speakers and hiring managers</li>
<li>Networking area with snacks &amp; coffee</li>
</ul>
</div>

<div className="space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Speakers
                  </h3>
<div className="grid gap-3 sm:grid-cols-3 text-xs">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[0.7rem] font-medium text-sky-700">
                        AM
                      </div>
<div>
<div className="font-medium text-slate-900">
                          Arman Mohammadi
                        </div>
<div className="text-[0.7rem] text-slate-500">
                          UI Engineering · Snapp
                        </div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-[0.7rem] font-medium text-indigo-700">
                        ZH
                      </div>
<div>
<div className="font-medium text-slate-900">
                          Zahra Hosseini
                        </div>
<div className="text-[0.7rem] text-slate-500">
                          Product Designer · Digikala
                        </div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[0.7rem] font-medium text-emerald-700">
                        RS
                      </div>
<div>
<div className="font-medium text-slate-900">
                          Reza Safari
                        </div>
<div className="text-[0.7rem] text-slate-500">
                          DX Lead · Remote
                        </div>
</div>
</div>
</div>
</div>
</div>

<aside className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-xs font-medium text-slate-900">
                      From 450,000 IRR
                    </div>
<div className="text-[0.7rem] text-slate-500">
                      Free for students with code
                    </div>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] text-emerald-700">
                    17 seats left
                  </span>
</div>
<div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 text-xs">
<div className="flex items-center justify-between gap-2">
<div>
<div className="font-medium text-slate-900">
                        General admission
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        Access to all talks &amp; networking
                      </div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-slate-900">
                        450,000
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        IRR
                      </div>
</div>
</div>
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">
<button className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] text-slate-600 hover:bg-slate-100">
                        −
                      </button>
<span className="text-xs text-slate-800">
                        1
                      </span>
<button className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] text-slate-600 hover:bg-slate-100">
                        +
                      </button>
</div>
<button className="inline-flex items-center rounded-full bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700">
                      Get tickets
                    </button>
</div>
</div>
<div className="space-y-2 rounded-lg border border-dashed border-emerald-200 bg-emerald-50/60 p-3 text-[0.7rem] text-emerald-800">
<div className="inline-flex items-center gap-1 font-medium">
<span className="iconify" data-height="14" data-icon="lucide:badge-percent" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Student discount
                  </div>
<p>
                    Use code
                    <span className="font-mono text-xs bg-emerald-100 px-1 py-0.5 rounded">
                      STUDENT50
                    </span>
                    at checkout to get 50% off.
                  </p>
</div>
<div className="space-y-2 border-t border-slate-200 pt-3 text-[0.7rem] text-slate-500">
<div className="inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Secure payments via Shaparak
                  </div>
<div className="inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:repeat" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Free ticket transfers up to 24h before
                  </div>
</div>
</aside>
</div>
</div>
</section>



<section className="space-y-10" id="organizer-dashboard">
<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Organizer Dashboard
              </h2>
<p className="mt-1 text-sm text-slate-600">
                Manage events, tickets, attendees, and real‑time performance.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.7rem] text-slate-500">
<span className="iconify text-sky-500" data-height="14" data-icon="lucide:layout-dashboard" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Dashboard preview
            </div>
</div>
<div className="grid gap-6 lg:grid-cols-[220px,1fr]">

<aside className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                    FT
                  </div>
<div>
<div className="text-xs font-medium text-slate-900">
                      Frontend Tehran
                    </div>
<div className="text-[0.7rem] text-emerald-600">
                      Verified
                    </div>
</div>
</div>
<button className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[0.7rem] text-slate-600 hover:bg-slate-100">
                  Switch
                </button>
</div>
<nav className="space-y-1 text-xs">
<button className="flex w-full items-center justify-between rounded-lg bg-slate-900 px-2.5 py-1.5 text-left font-medium text-slate-50">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:home" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Overview
                  </span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-800 text-[0.6rem]">
                    3
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-700 hover:bg-slate-50">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:calendar-days" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Events
                  </span>
<span className="text-[0.7rem] text-slate-400">
                    7
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-700 hover:bg-slate-50">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:ticket" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Tickets
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-700 hover:bg-slate-50">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:users-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Attendees
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-700 hover:bg-slate-50">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:chart-line" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Analytics
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-700 hover:bg-slate-50">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:settings-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Settings
                  </span>
</button>
</nav>
<div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-3 text-[0.7rem] text-slate-600">
<div className="font-medium text-slate-900">
                  Need help?
                </div>
<p className="mt-1">
                  Chat with our team about payouts, refunds, and marketing your event.
                </p>
<button className="mt-2 inline-flex items-center rounded-full bg-sky-50 px-2 py-1 text-[0.7rem] font-medium text-sky-700 hover:bg-sky-100">
<span className="iconify mr-1" data-height="12" data-icon="lucide:message-circle" data-width="12" style={{strokeWidth: '1.5'}}></span>
                  Contact support
                </button>
</div>
</aside>

<div className="space-y-5">

<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between gap-2">
<div className="text-[0.7rem] font-medium text-slate-500">
                      Tickets sold (30d)
                    </div>
<span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.65rem] text-emerald-700">
<span className="iconify" data-height="12" data-icon="lucide:trending-up" data-width="12" style={{strokeWidth: '1.5'}}></span>
                      18%
                    </span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                    1,284
                  </div>
<div className="mt-1 h-8 rounded-md bg-gradient-to-r from-sky-500/10 via-sky-500/40 to-sky-500/80"></div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between gap-2">
<div className="text-[0.7rem] font-medium text-slate-500">
                      Net revenue (30d)
                    </div>
<span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.65rem] text-emerald-700">
<span className="iconify" data-height="12" data-icon="lucide:trending-up" data-width="12" style={{strokeWidth: '1.5'}}></span>
                      9%
                    </span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                    312,400,000
                    <span className="text-xs text-slate-500">IRR</span>
</div>
<div className="mt-1 flex items-center gap-1 text-[0.7rem] text-slate-500">
                    Next payout in 3 days
                  </div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between gap-2">
<div className="text-[0.7rem] font-medium text-slate-500">
                      Active events
                    </div>
<span className="inline-flex items-center rounded-full bg-sky-50 px-1.5 py-0.5 text-[0.65rem] text-sky-700">
                      Live
                    </span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                    4
                  </div>
<div className="mt-1 text-[0.7rem] text-slate-500">
                    2 online · 2 in‑person
                  </div>
</div>
</div>

<div className="grid gap-5 lg:grid-cols-[1.4fr,1fr]">

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">
                        Sales performance
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        Last 30 days across all events
                      </div>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[0.7rem] text-slate-700 hover:bg-slate-100">
<span className="iconify" data-height="12" data-icon="lucide:calendar-range" data-width="12" style={{strokeWidth: '1.5'}}></span>
                      30 days
                    </button>
</div>
<div className="mt-3 rounded-lg border border-dashed border-slate-200 bg-slate-50 p-3">
<div className="flex items-center justify-between gap-2 text-[0.7rem] text-slate-500">
<div className="inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-sky-500"></span>
                        Tickets sold
                      </div>
<div className="inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        Revenue
                      </div>
</div>
<div className="mt-2 h-28 rounded-md bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">

<div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:16px_16px] rounded-md"></div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2">
<div className="text-sm font-semibold tracking-tight text-slate-900">
                      Upcoming events
                    </div>
<button className="text-[0.7rem] text-sky-700 hover:underline">
                      View calendar
                    </button>
</div>
<div className="mt-3 space-y-2 text-xs">
<div className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
<div>
<div className="font-medium text-slate-900">
                          Tehran Frontend Meetup
                        </div>
<div className="text-[0.7rem] text-slate-500">
                          Thu, Jun 20 · 5:30 PM · Tehran
                        </div>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] text-emerald-700">
                        92% capacity
                      </span>
</div>
<div className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
<div>
<div className="font-medium text-slate-900">
                          Online Analytics Bootcamp
                        </div>
<div className="text-[0.7rem] text-slate-500">
                          Fri, Jul 05 · 6:00 PM · Online
                        </div>
</div>
<span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[0.7rem] text-sky-700">
                        Early bird
                      </span>
</div>
<div className="flex items-center justify-between gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50 px-2 py-1.5">
<div className="text-[0.7rem] text-slate-500">
                        Plan your next event to keep your community engaged.
                      </div>
<button className="inline-flex items-center rounded-full bg-slate-900 px-2 py-1 text-[0.7rem] font-medium text-slate-50 hover:bg-slate-800">
                        New event
                      </button>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">
                      Recent attendees
                    </div>
<div className="text-[0.7rem] text-slate-500">
                      Last 10 ticket purchases
                    </div>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[0.7rem] text-slate-700 hover:bg-slate-100">
<span className="iconify" data-height="12" data-icon="lucide:download" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Export CSV
                  </button>
</div>
<div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
<table className="min-w-full border-collapse text-left text-[0.7rem]">
<thead className="bg-slate-50 text-slate-500">
<tr>
<th className="px-2 py-1.5 font-medium">Name</th>
<th className="px-2 py-1.5 font-medium">Event</th>
<th className="px-2 py-1.5 font-medium">Ticket</th>
<th className="px-2 py-1.5 font-medium">Paid</th>
<th className="px-2 py-1.5 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">
<tr className="hover:bg-slate-50">
<td className="px-2 py-1.5">
<div className="flex items-center gap-1.5">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[0.6rem] font-medium text-sky-700">
                              MH
                            </span>
<span className="text-[0.7rem] text-slate-900">
                              Mohammad Hoseini
                            </span>
</div>
</td>
<td className="px-2 py-1.5 text-slate-700">
                          Tehran Frontend Meetup
                        </td>
<td className="px-2 py-1.5 text-slate-700">
                          General admission
                        </td>
<td className="px-2 py-1.5 text-slate-700">
                          450,000 IRR
                        </td>
<td className="px-2 py-1.5 text-right">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.65rem] text-emerald-700">
                            Paid
                          </span>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-2 py-1.5">
<div className="flex items-center gap-1.5">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[0.6rem] font-medium text-indigo-700">
                              ZN
                            </span>
<span className="text-[0.7rem] text-slate-900">
                              Zeynab Nazari
                            </span>
</div>
</td>
<td className="px-2 py-1.5 text-slate-700">
                          Online Analytics Bootcamp
                        </td>
<td className="px-2 py-1.5 text-slate-700">
                          Early bird
                        </td>
<td className="px-2 py-1.5 text-slate-700">
                          780,000 IRR
                        </td>
<td className="px-2 py-1.5 text-right">
<span className="inline-flex items-center rounded-full bg-amber-50 px-1.5 py-0.5 text-[0.65rem] text-amber-700">
                            Pending
                          </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>



<section className="space-y-10" id="checkout">
<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Checkout
              </h2>
<p className="mt-1 text-sm text-slate-600">
                A focused, mobile‑friendly ticket purchase flow with clear order summary.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.7rem] text-slate-500">
<span className="iconify text-sky-500" data-height="14" data-icon="lucide:credit-card" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Supports card + free registrations
            </div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),minmax(260px,1fr)]">

<div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

<div className="flex items-center justify-between gap-3 text-[0.7rem] text-slate-600">
<div className="flex items-center gap-1.5">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[0.7rem] font-medium text-white">
                    1
                  </div>
<span className="font-medium text-slate-900">Details</span>
<div className="h-px w-8 bg-sky-600"></div>
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[0.7rem] font-medium text-white">
                    2
                  </div>
<span className="">Payment</span>
<div className="h-px w-8 bg-slate-200"></div>
<div className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] font-medium text-slate-600">
                    3
                  </div>
<span>Confirmation</span>
</div>
<span className="text-[0.7rem] text-slate-500">
                  3 min left to complete
                </span>
</div>

<div className="space-y-3 border-t border-slate-200 pt-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Attendee details
                </h3>
<div className="grid gap-3 md:grid-cols-2">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      First name
                    </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="e.g. Zahra" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Last name
                    </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="e.g. Hosseini" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Email address
                    </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="you@example.com" type="email"/>
<p className="text-[0.7rem] text-slate-500">
                      Your ticket and updates will be sent here.
                    </p>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Phone (optional)
                    </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="+98" type="tel"/>
</div>
</div>
<label className="mt-1 flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[0.7rem] text-slate-700">
<span className="relative mt-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded border border-sky-500 bg-sky-600">
<span className="iconify text-slate-50" data-height="10" data-icon="lucide:check" data-width="10" style={{strokeWidth: '1.5'}}></span>
</span>
<span>
                    I agree to Evento’s
                    <a className="underline underline-offset-2" href="#">Terms</a>
                    and
                    <a className="underline underline-offset-2" href="#">Privacy Policy</a>.
                  </span>
</label>
</div>

<div className="space-y-3 border-t border-slate-200 pt-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Payment method
                </h3>
<div className="grid gap-3 md:grid-cols-2 text-xs">
<label className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-sky-500 bg-sky-50 px-3 py-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-sky-500 bg-sky-600">
<span className="h-2 w-2 rounded-full bg-white"></span>
</span>
<div>
<div className="font-medium text-slate-900">
                          Card via Shaparak
                        </div>
<div className="text-[0.7rem] text-slate-600">
                          Secure payment gateway
                        </div>
</div>
</div>
<span className="text-[0.7rem] text-slate-500">
                      Recommended
                    </span>
</label>
<label className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 hover:border-sky-300">
<div className="flex items-center gap-2">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300"></span>
<div>
<div className="font-medium text-slate-900">
                          Bank transfer
                        </div>
<div className="text-[0.7rem] text-slate-600">
                          Manual confirmation
                        </div>
</div>
</div>
<span className="text-[0.7rem] text-slate-500">
                      +24h processing
                    </span>
</label>
</div>

<div className="grid gap-3 md:grid-cols-2">
<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-medium text-slate-700">
                      Card number
                    </label>
<div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:credit-card" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="min-w-0 flex-1 bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="•••• •••• •••• ••••"/>
<span className="text-[0.7rem] text-slate-400">
                        IR
                      </span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">
                      Expiry
                    </label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="MM / YY"/>
</div>
<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs font-medium text-slate-700">
                      CVC
                      <span className="text-[0.65rem] font-normal text-slate-500">
                        3 digits
                      </span>
</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="•••"/>
</div>
</div>
<div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[0.7rem] text-slate-600">
<span className="iconify mt-0.5 text-slate-400" data-height="14" data-icon="lucide:lock" data-width="14" style={{strokeWidth: '1.5'}}></span>
<p>
                    Payments are encrypted and processed securely. Evento never stores your full card number.
                  </p>
</div>
</div>

<div className="flex flex-col gap-3 border-t border-slate-200 pt-4 md:flex-row md:items-center md:justify-between">
<button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font text-white hover:bg-sky-700 w-full md:w-auto">
                  Pay 450,000 IRR
                </button>
<div className="flex items-center justify-center gap-1 text-[0.7rem] text-slate-500">
<span className="iconify text-emerald-500" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  You’ll receive a QR code ticket by email.
                </div>
</div>
</div>

<aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">
                  Order summary
                </div>
<div className="mt-0.5 text-[0.7rem] text-slate-500">
                  Tehran Frontend Meetup · General admission
                </div>
</div>
<div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 text-[0.7rem]">
<div className="flex items-center justify-between gap-2">
<span className="text-slate-700">
                    General admission × 1
                  </span>
<span className="font-medium text-slate-900">
                    450,000 IRR
                  </span>
</div>
<div className="flex items-center justify-between gap-2 text-slate-500">
<span>Service fee</span>
<span>0 IRR</span>
</div>
<div className="flex items-center justify-between gap-2 text-slate-500">
<span>Discount</span>
<span className="text-emerald-700">– 0 IRR</span>
</div>
<div className="border-t border-dashed border-slate-200 pt-2">
<div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-900">
<span>Total</span>
<span>450,000 IRR</span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[0.7rem]">
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-height="14" data-icon="lucide:badge-percent" data-width="14" style={{strokeWidth: '1.5'}}></span>
<input className="min-w-0 flex-1 bg-transparent text-[0.7rem] text-slate-800 placeholder:text-slate-400 focus:outline-none" placeholder="Promo or student code"/>
</div>
<button className="text-sky-700 hover:underline">
                    Apply
                  </button>
</label>
<p className="text-[0.65rem] text-slate-500">
                  By completing this purchase you agree to the event organizer’s refund policy.
                </p>
</div>
</aside>
</div>
</section>



<section className="space-y-10" id="admin-panel">
<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Admin Panel
              </h2>
<p className="mt-1 text-sm text-slate-600">
                Internal tooling for support, compliance, and platform‑wide insights.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.7rem] text-amber-800">
<span className="iconify" data-height="14" data-icon="lucide:shield-alert" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Restricted access
            </div>
</div>
<div className="grid gap-6 lg:grid-cols-[260px,1fr]">

<aside className="space-y-4 rounded-xl border border-slate-200 bg-slate-900 p-4 text-slate-100">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-xs font-semibold tracking-tight">
                    Evento Admin
                  </div>
<div className="text-[0.7rem] text-slate-400">
                    ops@evento.app
                  </div>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700">
<span className="iconify" data-height="14" data-icon="lucide:log-out" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<nav className="space-y-1 text-xs">
<button className="flex w-full items-center gap-2 rounded-lg bg-slate-800 px-2.5 py-1.5 text-left font-medium">
<span className="iconify" data-height="14" data-icon="lucide:gauge" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Overview
                </button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-200 hover:bg-slate-800">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:building-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Organizers
                  </span>
<span className="text-[0.7rem] text-slate-400">1,204</span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-200 hover:bg-slate-800">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:ticket" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Orders
                  </span>
<span className="text-[0.7rem] text-slate-400">98,422</span>
</button>
<button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-slate-200 hover:bg-slate-800">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="14" data-icon="lucide:alert-triangle" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Risk &amp; flags
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[0.65rem] text-amber-200">
                    12 open
                  </span>
</button>
<button className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-slate-200 hover:bg-slate-800">
<span className="iconify" data-height="14" data-icon="lucide:banknote" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Payouts
                </button>
<button className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-slate-200 hover:bg-slate-800">
<span className="iconify" data-height="14" data-icon="lucide:settings" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  System
                </button>
</nav>
<div className="rounded-lg border border-slate-700 bg-slate-800/70 p-3 text-[0.7rem] text-slate-300">
<div className="inline-flex items-center gap-1 text-slate-100">
<span className="iconify text-emerald-400" data-height="14" data-icon="lucide:activity" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Live signals
                </div>
<p className="mt-1">
                  0 payment incidents · 3 delayed payouts · 2 flagged organizers today.
                </p>
</div>
</aside>

<div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5">

<div className="grid gap-4 md:grid-cols-3">
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="text-[0.7rem] font-medium text-slate-600">
                    Gross volume (7d)
                  </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                    4.2B
                    <span className="text-xs text-slate-500">IRR</span>
</div>
<div className="mt-1 text-[0.7rem] text-emerald-700">
                    +12% vs. previous 7 days
                  </div>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center justify-between text-[0.7rem] font-medium text-slate-600">
<span>Refund rate (30d)</span>
<span className="text-slate-500">Target &lt; 3%</span>
</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                    2.1%
                  </div>
<div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
<div className="h-full w-[45%] rounded-full bg-emerald-500"></div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="text-[0.7rem] font-medium text-slate-600">
                    Active risk flags
                  </div>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-xl font-semibold tracking-tight text-amber-700">
                      12
                    </span>
<span className="text-[0.7rem] text-slate-500">
                      3 high · 9 medium
                    </span>
</div>
<div className="mt-2 flex gap-1 text-[0.65rem]">
<span className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-50 px-1 py-0.5 text-emerald-700">
                      Resolved 24h
                    </span>
<span className="inline-flex flex-1 items-center justify-center rounded-full bg-amber-50 px-1 py-0.5 text-amber-700">
                      SLA 48h
                    </span>
</div>
</div>
</div>

<div className="grid gap-4 lg:grid-cols-[1.3fr,1fr]">

<div className="rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
<div className="text-xs font-semibold tracking-tight text-slate-900">
                      Risk &amp; compliance queue
                    </div>
<div className="inline-flex gap-1 text-[0.7rem]">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-emerald-700">
                        New · 4
                      </span>
<span className="inline-flex items-center rounded-full bg-amber-50 px-1.5 py-0.5 text-amber-700">
                        In review · 8
                      </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full border-collapse text-left text-[0.7rem]">
<thead className="bg-slate-50 text-slate-500">
<tr>
<th className="px-3 py-2 font-medium">Organizer</th>
<th className="px-3 py-2 font-medium">Reason</th>
<th className="px-3 py-2 font-medium">Risk</th>
<th className="px-3 py-2 font-medium">Created</th>
<th className="px-3 py-2 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">
<tr className="hover:bg-slate-50">
<td className="px-3 py-2">
<div className="text-xs font-medium text-slate-900">
                              Startup Summit MENA
                            </div>
<div className="text-[0.65rem] text-slate-500">
                              organizer_id: org_7f3k9
                            </div>
</td>
<td className="px-3 py-2 text-[0.7rem] text-slate-700">
                            High refund rate &gt; 15%
                          </td>
<td className="px-3 py-2">
<span className="inline-flex items-center rounded-full bg-rose-50 px-1.5 py-0.5 text-[0.65rem] text-rose-700">
                              High
                            </span>
</td>
<td className="px-3 py-2 text-[0.7rem] text-slate-600">
                            2h ago
                          </td>
<td className="px-3 py-2 text-right">
<button className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.65rem] text-slate-700 hover:bg-slate-50">
                              Review
                            </button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-3 py-2">
<div className="text-xs font-medium text-slate-900">
                              Local Music Nights
                            </div>
<div className="text-[0.65rem] text-slate-500">
                              organizer_id: org_5ax2b
                            </div>
</td>
<td className="px-3 py-2 text-[0.7rem] text-slate-700">
                            Chargeback dispute
                          </td>
<td className="px-3 py-2">
<span className="inline-flex items-center rounded-full bg-amber-50 px-1.5 py-0.5 text-[0.65rem] text-amber-700">
                              Medium
                            </span>
</td>
<td className="px-3 py-2 text-[0.7rem] text-slate-600">
                            5h ago
                          </td>
<td className="px-3 py-2 text-right">
<button className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.65rem] text-slate-700 hover:bg-slate-50">
                              Review
                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-[0.7rem]">
<div className="flex items-center justify-between">
<div className="text-xs font-semibold tracking-tight text-slate-900">
                      System activity
                    </div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-[0.65rem] text-slate-700 hover:bg-slate-100">
<span className="iconify" data-height="12" data-icon="lucide:refresh-ccw" data-width="12" style={{strokeWidth: '1.5'}}></span>
                      Refresh
                    </button>
</div>
<ol className="space-y-2">
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<div>
<div className="text-slate-800">
                          Payout batch
                          <span className="font-mono text-[0.65rem]">batch_93fd</span>
                          completed.
                        </div>
<div className="text-[0.65rem] text-slate-500">
                          22 organizers · 138M IRR · 5m ago
                        </div>
</div>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<div>
<div className="text-slate-800">
                          Elevated refund rate detected for
                          <span className="font-mono text-[0.65rem]">org_7f3k9</span>.
                        </div>
<div className="text-[0.65rem] text-slate-500">
                          Added to risk queue · 18m ago
                        </div>
</div>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
<div>
<div className="text-slate-800">
                          New organizer signup:
                          <span className="font-mono text-[0.65rem]">org_9k2vx</span>.
                        </div>
<div className="text-[0.65rem] text-slate-500">
                          University partner · 42m ago
                        </div>
</div>
</li>
</ol>
</div>
</div>
</div>
</div>
</section>



<section className="space-y-6" id="embed-widget">
<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Embeddable Widget
              </h2>
<p className="mt-1 text-sm text-slate-600">
                Drop‑in event card and ticket selector for external sites and blogs.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.7rem] text-slate-500">
<span className="iconify text-sky-500" data-height="14" data-icon="lucide:code-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>&lt;iframe&gt; ready</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">

<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="text-xs font-medium text-slate-500 mb-2">
                On external site
              </div>
<div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
<div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500"></div>
<div>
<div className="text-xs font-semibold text-slate-900">
                        Tehran Frontend Meetup · June Edition
                      </div>
<div className="text-[0.7rem] text-slate-500">
                        Thu, Jun 20 · Dastan Garden, Tehran
                      </div>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] text-emerald-700">
                    Powered by Evento
                  </span>
</div>
<div className="grid gap-3 bg-slate-50 p-3 text-xs md:grid-cols-[2fr,1.2fr]">
<div className="space-y-2">
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[0.7rem] font-medium text-slate-50">
<span className="iconify" data-height="12" data-icon="lucide:ticket" data-width="12" style={{strokeWidth: '1.5'}}></span>
                      Ticket selector
                    </div>
<div className="space-y-1 rounded-lg border border-slate-200 bg-white p-2">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-xs font-medium text-slate-900">
                            General admission
                          </div>
<div className="text-[0.7rem] text-slate-500">
                            450,000 IRR · 17 left
                          </div>
</div>
<div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5">
<button className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[0.6rem] text-slate-600 hover:bg-slate-100">
                            −
                          </button>
<span className="text-[0.7rem] text-slate-800">
                            1
                          </span>
<button className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[0.6rem] text-slate-600 hover:bg-slate-100">
                            +
                          </button>
</div>
</div>
<div className="flex items-center justify-between gap-2 border-t border-dashed border-slate-200 pt-1">
<span className="text-[0.7rem] text-slate-500">
                          Total
                        </span>
<span className="text-xs font-semibold text-slate-900">
                          450,000 IRR
                        </span>
</div>
</div>
</div>
<div className="space-y-2 rounded-lg border border-slate-200 bg-white p-2">
<div className="text-[0.7rem] font-medium text-slate-700">
                      Quick checkout
                    </div>
<p className="text-[0.65rem] text-slate-500">
                      Attendees are redirected to Evento’s secure checkout to complete payment and receive tickets.
                    </p>
<button className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-3 py-1.5 text-[0.75rem] font-medium text-white hover:bg-sky-700">
                      Get tickets on Evento
                    </button>
<p className="text-[0.6rem] text-slate-400">
                      No account required for free tickets.
                    </p>
</div>
</div>
</div>
</div>

<div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-slate-50">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-xs font-semibold tracking-tight">
                    Embed code
                  </div>
<div className="text-[0.7rem] text-slate-400">
                    Add this snippet where you want the widget to appear.
                  </div>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.7rem] hover:bg-slate-700">
<span className="iconify" data-height="12" data-icon="lucide:clipboard" data-width="12" style={{strokeWidth: '1.5'}}></span>
                  Copy
                </button>
</div>
<pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950/60 p-3 text-[0.7rem] leading-relaxed text-slate-100"><code>&lt;iframe
  src="https://evento.app/embed/event/tehran-frontend-meetup"
  width="100%"
  height="260"
  style={{borderRadius: '12px', border: '1px solid #e2e8f0'}}
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
&gt;&lt;/iframe&gt;</code></pre>
<p className="text-[0.65rem] text-slate-400">
                Customize width and height to match your layout. The widget is fully responsive down to 320px width.
              </p>
</div>
</div>
</section>

<footer className="border-t border-slate-200 pt-8 mt-12 pb-6 text-[0.75rem] text-slate-500">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-[0.7rem] font-semibold text-slate-50">
                ev
              </div>
<span>Evento UI System</span>
<span className="hidden sm:inline text-slate-300">·</span>
<span className="hidden sm:inline">
                Built with Tailwind‑style utility classes
              </span>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="hover:text-slate-700" href="#design-system">
                Design system
              </a>
<a className="hover:text-slate-700" href="#public-site">
                Public site
              </a>
<a className="hover:text-slate-700" href="#organizer-dashboard">
                Organizer
              </a>
<a className="hover:text-slate-700" href="#checkout">
                Checkout
              </a>
<a className="hover:text-slate-700" href="#admin-panel">
                Admin
              </a>
</div>
</div>
</footer>
</main>
</div>

    </>
  );
}
