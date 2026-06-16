import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide) {
          window.lucide.createIcons();
        }

        const tabCsv = document.getElementById("tab-csv");
        const tabManual = document.getElementById("tab-manual");
        const tabSingle = document.getElementById("tab-single");
        const panelCsv = document.getElementById("panel-csv");
        const panelManual = document.getElementById("panel-manual");
        const panelSingle = document.getElementById("panel-single");
        const manualInput = document.getElementById("manual-input");
        const insertExample = document.getElementById("insert-example");
        const clearInput = document.getElementById("clear-input");
        const fileInput = document.getElementById("file-input");
        const analyzeBtn = document.getElementById("analyze-btn");
        const tableBody = document.getElementById("trade-table-body");

        function setTab(active) {
          const tabs = [
            { btn: tabCsv, panel: panelCsv, key: "csv" },
            { btn: tabManual, panel: panelManual, key: "manual" },
            { btn: tabSingle, panel: panelSingle, key: "single" },
          ];
          tabs.forEach(({ btn, panel, key }) => {
            if (!btn || !panel) return;
            if (key === active) {
              btn.setAttribute("data-active", "true");
              panel.classList.remove("hidden");
            } else {
              btn.removeAttribute("data-active");
              panel.classList.add("hidden");
            }
          });
        }

        if (tabCsv) tabCsv.addEventListener("click", () => setTab("csv"));
        if (tabManual) tabManual.addEventListener("click", () => setTab("manual"));
        if (tabSingle) tabSingle.addEventListener("click", () => setTab("single"));

        if (insertExample) {
          insertExample.addEventListener("click", () => {
            const example =
`Ticket,Datetime,Symbol,Side,Size,Entry,Exit,SL,TP,Commission,RealizedPL,Notes,Account
1001,2025-03-03T08:45:00,EURUSD,Buy,1.00,1.0800,1.0830,1.0780,1.0860,-2.50,250.00,"London session breakout","Main"
1002,2025-03-03T10:12:00,EURUSD,Sell,0.50,1.0825,1.0855,1.0865,1.0760,-1.50,-120.00,"Revenge entry after win","Main`;
            manualInput.value = example;
          });
        }

        if (clearInput) {
          clearInput.addEventListener("click", () => {
            if (manualInput) manualInput.value = "";
            if (fileInput) fileInput.value = "";
            tableBody.innerHTML =
              '<tr class="bg-slate-950/40"><td colspan="16" class="text-center text-sm text-slate-500 px-3 py-6">No trades imported yet. Upload a CSV or paste trades, then click <span class="text-slate-200">“Generate journal, analytics &amp; plan”</span>. We’ll compute holding time, R-multiples, sessions, market-type tags and keep all raw fields auditable.</td></tr>';
          });
        }

        function parseCSV(text) {
          const lines = text.trim().split(/\r?\n/);
          if (!lines.length) return [];
          const headerRaw = lines[0].split(",");
          const header = headerRaw.map((h) => h.trim().toLowerCase());
          const rows = [];
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            const cols = line.split(",");
            const row = {};
            header.forEach((h, idx) => {
              row[h] = (cols[idx] || "").trim();
            });
            rows.push(row);
          }
          return rows;
        }

        function normalizeDirection(v) {
          const t = (v || "").toString().toLowerCase();
          if (!t) return "Not Provided";
          if (t.startsWith("b") || t === "long") return "Buy";
          if (t.startsWith("s") || t === "short") return "Sell";
          return t;
        }

        function fmt(val, fallback = "Not Provided") {
          if (val === undefined || val === null) return fallback;
          const s = String(val).trim();
          return s === "" ? fallback : s;
        }

        function buildTableFromRows(rows) {
          if (!rows.length) {
            tableBody.innerHTML =
              '<tr class="bg-slate-950/40"><td colspan="16" class="text-center text-sm text-slate-500 px-3 py-6">No parsable trades found. Check your CSV or input format.</td></tr>';
            return;
          }
          const mapped = rows.map((r, idx) => {
            const ticket = r["ticket"] || r["position"] || `Row-${idx + 1}`;
            const dt = r["datetime"] || r["time"] || r["date"] || "";
            const symbol = r["symbol"] || r["pair"] || "";
            const side = r["side"] || r["type"] || r["direction"] || "";
            const size = r["size"] || r["volume"] || r["qty"] || "";
            const entry = r["entry"] || r["open"] || r["price"] || "";
            const exit = r["exit"] || r["close"] || "";
            const sl = r["sl"] || r["s / l"] || r["stoploss"] || r["s/l"] || "";
            const tp = r["tp"] || r["t / p"] || r["t/p"] || "";
            const pl = r["realizedpl"] || r["pnl"] || r["profit"] || "";
            const notes = r["notes"] || r["comment"] || "";

            return {
              ticket: fmt(ticket),
              datetime: fmt(dt),
              symbol: fmt(symbol),
              dir: fmt(normalizeDirection(side)),
              size: fmt(size),
              entry: fmt(entry),
              exit: fmt(exit),
              sl: fmt(sl),
              tp: fmt(tp),
              pl: fmt(pl),
              plPct: "Not Provided",
              rmult: sl ? "Computed from entry, SL & exit" : "Not Provided",
              holding: "Computed from entry/exit time",
              session: "Computed from timestamp & timezone",
              mktType: "Trending / Ranging / Volatile / News",
              notes: notes ? fmt(notes) : "Commission, swap, tags and checklist items appear here.",
            };
          });

          tableBody.innerHTML = mapped
            .map(
              (t) => `
            <tr class="hover:bg-slate-900/60">
              <td class="whitespace-nowrap px-3 py-2 align-top">${t.ticket}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-slate-300">${t.datetime}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top">${t.symbol}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top ${t.dir === "Buy" ? "text-emerald-400" : t.dir === "Sell" ? "text-rose-400" : "text-slate-200"}">${t.dir}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right">${t.size}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right">${t.entry}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right">${t.exit}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right text-slate-300">${t.sl}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right text-slate-300">${t.tp}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right ${String(t.pl).startsWith("-") ? "text-rose-400" : "text-emerald-400"}">${t.pl}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right">${t.plPct}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-right text-slate-200">${t.rmult}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-slate-300">${t.holding}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-slate-300">${t.session}</td>
              <td class="whitespace-nowrap px-3 py-2 align-top text-slate-300">${t.mktType}</td>
              <td class="px-3 py-2 align-top text-slate-300 max-w-xs">${t.notes}</td>
            </tr>
          `
            )
            .join("");
        }

        if (analyzeBtn) {
          analyzeBtn.addEventListener("click", () => {
            const manualText = manualInput ? manualInput.value.trim() : "";
            const file = fileInput && fileInput.files && fileInput.files[0];

            if (!manualText && !file) {
              alert("Please upload a CSV file or paste trade data first.");
              return;
            }

            analyzeBtn.disabled = true;

            if (manualText) {
              const rows = parseCSV(manualText);
              buildTableFromRows(rows);
              analyzeBtn.disabled = false;
              return;
            }

            if (file) {
              const reader = new FileReader();
              reader.onload = function (e) {
                const text = e.target.result;
                const rows = parseCSV(text);
                buildTableFromRows(rows);
                analyzeBtn.disabled = false;
              };
              reader.onerror = function () {
                alert("Unable to read file. Please try again.");
                analyzeBtn.disabled = false;
              };
              reader.readAsText(file);
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NF45R8TGBmFLTWXdpK0C"></div></div>
<div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 gap-6">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md border flex items-center justify-center bg-slate-900 border-slate-800">
<span className="text-xs font-semibold tracking-tight text-slate-100">TJ</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-50">Trading Journal Engine</span>
<span className="text-sm text-slate-400">
              Ingest trades, normalize &amp; validate, then generate a full journal: analytics, diagnostics, visualizations &amp; improvement plan.
            </span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors border-slate-800 bg-slate-900/60 text-slate-200 hover:bg-slate-900">
<svg className="lucide lucide-file-text w-4 h-4 text-slate-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span>Sample CSV template</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium tracking-tight transition-colors bg-slate-100 text-slate-950 hover:bg-white">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Analyze &amp; generate plan</span>
</button>
</div>
</header>

<main className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1">

<section className="xl:col-span-1 flex flex-col gap-4">
<div className="rounded-2xl border shadow-sm overflow-hidden border-slate-800 bg-slate-950/60 shadow-slate-900/60">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-800/80 bg-slate-950/80">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">1. Import your trades</h2>
<p className="text-sm mt-0.5 text-slate-400">
                  Upload CSVs or paste trade data. Everything is normalized into a canonical schema and validated before analytics.
                </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span>Ready</span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="flex gap-1.5 rounded-lg p-0.5 border bg-slate-900/80 border-slate-800">
<button className="flex-1 text-xs sm:text-sm py-1.5 rounded-md data-[active=true]:bg-slate-100 data-[active=true]:text-slate-950 data-[active=true]:shadow-sm transition-colors text-slate-300" data-active="true" id="tab-csv">
                  CSV upload
                </button>
<button className="flex-1 text-xs sm:text-sm py-1.5 rounded-md data-[active=true]:bg-slate-100 data-[active=true]:text-slate-950 data-[active=true]:shadow-sm transition-colors text-slate-400" id="tab-manual">
                  Paste / manual text
                </button>
<button className="flex-1 text-xs sm:text-sm py-1.5 rounded-md data-[active=true]:bg-slate-100 data-[active=true]:text-slate-950 data-[active=true]:shadow-sm transition-colors text-slate-400" id="tab-single">
                  Single trade form
                </button>
</div>

<div className="space-y-3" id="panel-csv">
<label className="block">
<span className="text-xs sm:text-sm text-slate-300">CSV file</span>
<div className="mt-2">
<label className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-4 py-8 text-center cursor-pointer transition-colors border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/70">
<input accept=".csv,text/csv" className="hidden" id="file-input" type="file"/>
<svg className="lucide lucide-upload-cloud w-6 h-6 text-slate-300" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-slate-100">Drop broker CSVs here</span>
<span className="text-xs text-slate-500">
                          MT4 / MT5 / TradingView / IB / Zerodha and more. Flexible headers are auto-mapped to the internal trade schema.
                        </span>
</div>
<span className="inline-flex items-center gap-1 text-xs border rounded-full px-2 py-0.5 text-slate-400 bg-slate-900/80 border-slate-800">
<svg className="lucide lucide-info w-3 h-3" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>We detect columns like ticket, side, entry, exit, SL, TP, P/L with case-insensitive, fuzzy matching.</span>
</span>
</label>
</div>
</label>

<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Preview &amp; mapping</span>
<button className="inline-flex items-center gap-1 text-[0.65rem] text-slate-300 hover:text-slate-100">
<svg className="lucide lucide-wand-2 w-3 h-3" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span>Auto-map headers</span>
</button>
</div>
<p className="text-sm text-slate-300">
                    First rows are parsed into a preview table. If auto-mapping is uncertain, you’ll drag CSV columns into required fields
                    (symbol, side, size, entry, exit / P&amp;L, datetime). Save templates per broker for one-click future imports.
                  </p>
<p className="text-xs text-slate-500">
                    Validation highlights rows missing required fields and suggests fixes (e.g., “Missing size — supply default size or convert notional to size”).
                  </p>
</div>
</div>

<div className="space-y-3 hidden" id="panel-manual">
<label className="block">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm text-slate-300">Trade data (CSV or delimited)</span>
<button className="text-xs inline-flex items-center gap-1 text-slate-400 hover:text-slate-200" id="insert-example">
<svg className="lucide lucide-list-plus w-3.5 h-3.5" data-lucide="list-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H3"></path><path d="M11 12H3"></path><path d="M16 19H3"></path><path d="M18 9v6"></path><path d="M21 12h-6"></path></svg>
<span>Insert example format</span>
</button>
</div>
<textarea className="mt-2 w-full rounded-xl border focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 text-sm placeholder:text-slate-500 min-h-[10rem] p-3 border-slate-800 bg-slate-950/70 text-slate-100" id="manual-input" placeholder="Paste raw CSV or delimited trades.

We’ll parse, auto-map common headers (Ticket, Datetime, Symbol, Side, Size, Entry, Exit, SL, TP, Commission, RealizedPL, Notes, Account),
then normalize into the canonical trade schema: side, size, entry/exit, SL/TP, P/L, R-multiple, session, market-type, tags, notes."></textarea>
<p className="mt-1 text-xs text-slate-500">
                    Real-time parsing uses the same mapping and validation engine as file upload. Rows lacking exit and realized P/L are rejected.
                  </p>
</label>
</div>

<div className="space-y-3 hidden" id="panel-single">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm text-slate-300">Quick-add single trade</span>
<span className="text-[0.65rem] text-slate-500">Ideal for discretionary journaling</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Ticket (optional)"/>
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Symbol (e.g. EURUSD)"/>
<select className="rounded-md border px-2 py-1 border-slate-800 bg-slate-950/80 text-slate-100">
<option className="bg-slate-900">Side: Buy</option>
<option className="bg-slate-900">Side: Sell</option>
</select>
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Size (lots/contracts)"/>
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Entry price"/>
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Exit price"/>
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="SL (optional)"/>
<input className="rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="TP (optional)"/>
<input className="col-span-2 rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Datetime (will convert to ISO 8601)"/>
<input className="col-span-2 rounded-md border px-2 py-1 placeholder:text-slate-500 border-slate-800 bg-slate-950/80 text-slate-100" placeholder="Notes, tags, session, market context"/>
</div>
<p className="text-xs text-slate-500">
                  Single trades are stored in the same canonical model (trade_id, timestamps, session, market-type, R, holding time, notes) and flow into all analytics.
                </p>
</div>

<div className="space-y-2 border-t pt-3 border-slate-800">
<div className="flex flex-wrap gap-2 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">Assumptions &amp; rules</span>
<span className="h-4 w-px bg-slate-800"></span>
<div className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 bg-slate-900/80 border-slate-800">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span className="text-[0.65rem] text-slate-300">No hallucinated values; missing fields flagged as “Not Provided”.</span>
</div>
</div>
<button className="text-xs inline-flex items-center gap-1 text-slate-400 hover:text-slate-100" id="clear-input">
<svg className="lucide lucide-eraser w-3.5 h-3.5" data-lucide="eraser" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"></path><path d="m5.082 11.09 8.828 8.828"></path></svg>
<span>Reset inputs</span>
</button>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center justify-between rounded-lg border px-2.5 py-1.5 border-slate-800 bg-slate-950/70">
<div className="flex flex-col">
<span className="text-xs text-slate-200">Time zone</span>
<span className="text-xs text-slate-500">Used for session mapping</span>
</div>
<select className="bg-transparent text-xs border-none focus:outline-none text-slate-100" id="timezone-select">
<option className="bg-slate-900" value="exchange">Exchange</option>
<option className="bg-slate-900" value="utc">UTC</option>
<option className="bg-slate-900" value="local">Local</option>
</select>
</div>
<div className="flex items-center justify-between rounded-lg border px-2.5 py-1.5 border-slate-800 bg-slate-950/70">
<div className="flex flex-col">
<span className="text-xs text-slate-200">Account type</span>
<span className="text-xs text-slate-500">For P/L &amp; R calc</span>
</div>
<select className="bg-transparent text-xs border-none focus:outline-none text-slate-100" id="account-type">
<option className="bg-slate-900" value="fx">FX / CFD</option>
<option className="bg-slate-900" value="futures">Futures</option>
<option className="bg-slate-900" value="stocks">Stocks</option>
<option className="bg-slate-900" value="crypto">Crypto</option>
</select>
</div>
</div>
<p className="text-xs text-slate-500">
                  Sessions default in UTC: Asia 00:00–06:59, London 07:00–14:59, NY 15:00–23:59. You can override in Settings and we’ll recompute session-based analytics.
                </p>
</div>

<div className="pt-1">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium tracking-tight transition-colors disabled:opacity-60 disabled:hover:bg-slate-100 bg-slate-100 text-slate-950 hover:bg-white" id="analyze-btn">
<svg className="lucide lucide-line-chart w-4 h-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span>Generate journal, analytics &amp; plan</span>
</button>
<p className="mt-1 text-xs text-slate-500 text-center">
                  All P/L, R, expectancy and drawdown math is deterministic and reproducible. Tooltips document how every metric is calculated.
                </p>
</div>
</div>
</div>

<div className="rounded-2xl border p-4 sm:p-5 space-y-4 border-slate-800 bg-slate-950/70">
<div className="flex items-center justify-between gap-2">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">Quick diagnostics (preview)</h2>
<p className="text-sm mt-0.5 text-slate-400">
                  Once trades are parsed, pattern + psychology signals appear here, each with evidence and an actionable recommendation.
                </p>
</div>
<svg className="lucide lucide-brain w-5 h-5 text-slate-300" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Risk consistency</span>
<span className="inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 bg-slate-900/80 border-slate-800">
<span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
<span className="text-[0.65rem] text-slate-300">Pending</span>
</span>
</div>
<p className="text-sm text-slate-300">
                  Measures variance of R multiples and position sizes; flags oversizing spikes and tiny “scratches” that dilute edge.
                </p>
</div>
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Behavioral bias</span>
<span className="inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 bg-slate-900/80 border-slate-800">
<span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
<span className="text-[0.65rem] text-slate-300">Pending</span>
</span>
</div>
<p className="text-sm text-slate-300">
                  Detects revenge trading, FOMO entries, overtrading, weak SL discipline and holding losers longer than winners.
                </p>
</div>
</div>
</div>
</section>

<section className="xl:col-span-2 flex flex-col gap-4">

<div className="rounded-2xl border shadow-sm border-slate-800 bg-slate-950/70 shadow-slate-900/60">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-800/80 bg-slate-950/80">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-slate-200" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">2. Journal summary</h2>
<p className="text-sm mt-0.5 text-slate-400">
                    Canonical trade-level data rolled into KPIs: P/L, win rate, expectancy, R-multiples, drawdown and session/symbol performance.
                  </p>
</div>
</div>
<span className="text-xs text-slate-500">Awaiting data</span>
</div>
<div className="p-4 sm:p-5 space-y-4" id="summary-panel">

<div className="grid sm:grid-cols-4 gap-3">
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center gap-1 text-xs text-slate-400">
<span>Total trades</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">
<span>?</span>
</button>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-50" id="stat-total-trades">—</span>
<span className="text-xs text-slate-500">Count of closed trades in the selected window.</span>
</div>
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center gap-1 text-xs text-slate-400">
<span>Win rate</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">
<span>?</span>
</button>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-50" id="stat-win-rate">—</span>
<span className="text-xs text-slate-500">Wins / total closed trades (percent).</span>
</div>
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center gap-1 text-xs text-slate-400">
<span>Total P/L</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">
<span>?</span>
</button>
</div>
<span className="text-lg font-semibold tracking-tight text-emerald-400" id="stat-total-pl">—</span>
<span className="text-xs text-slate-500">Sum of realized P/L after commissions, normalized to your reporting currency.</span>
</div>
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center gap-1 text-xs text-slate-400">
<span>Profit factor</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">
<span>?</span>
</button>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-50" id="stat-profit-factor">—</span>
<span className="text-xs text-slate-500">Gross wins / gross losses, excluding zero P/L trades.</span>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-xl border p-3 space-y-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Average win / loss</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">?</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-emerald-400" id="stat-avg-win">—</span>
<span className="text-rose-400" id="stat-avg-loss">—</span>
</div>
<p className="text-xs text-slate-500">
                    Arithmetic mean of positive and negative realized P/Ls only.
                  </p>
</div>
<div className="rounded-xl border p-3 space-y-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Max win / loss</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">?</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-emerald-400" id="stat-max-win">—</span>
<span className="text-rose-400" id="stat-max-loss">—</span>
</div>
<p className="text-xs text-slate-500">
                    Largest and smallest realized P/L; outliers often drive emotional bias.
                  </p>
</div>
<div className="rounded-xl border p-3 space-y-1.5 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Expectancy &amp; avg R</span>
<button className="text-[0.65rem] text-slate-500 hover:text-slate-300">?</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-50" id="stat-expectancy">—</span>
<span className="text-slate-200" id="stat-avg-r">—</span>
</div>
<p className="text-xs text-slate-500">
                    Expectancy per trade: winRate × avgWin + lossRate × avgLoss. Average R uses R = (Exit–Entry)/(Entry–SL) for buys (mirrored for sells).
                  </p>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<span className="text-xs text-slate-400">Best session</span>
<span className="text-sm text-slate-100" id="stat-best-session">—</span>
<span className="text-xs text-slate-500">Session with highest risk-adjusted expectancy (Asia / London / NY or custom).</span>
</div>
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<span className="text-xs text-slate-400">Most profitable symbol</span>
<span className="text-sm text-slate-100" id="stat-best-symbol">—</span>
<span className="text-xs text-slate-500">Symbol with strongest combination of P/L and R-multiple consistency.</span>
</div>
<div className="rounded-xl border p-3 flex flex-col gap-1.5 border-slate-800 bg-slate-950/80">
<span className="text-xs text-slate-400">Largest drawdown</span>
<span className="text-sm text-rose-400" id="stat-max-dd">—</span>
<span className="text-xs text-slate-500">Peak-to-trough equity decline over ordered trades; basis for risk limits.</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border overflow-hidden flex flex-col max-h-[28rem] border-slate-800 bg-slate-950/70">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-800/80 bg-slate-950/80">
<div className="flex items-center gap-2">
<svg className="lucide lucide-table w-5 h-5 text-slate-200" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">3. Clean trade table</h2>
<p className="text-sm mt-0.5 text-slate-400">
                    Fully normalized trades: canonical schema, missing values tagged, ready for filtering, editing and export.
                  </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-100">
<svg className="lucide lucide-sliders-horizontal w-3.5 h-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
<span>Filters &amp; columns</span>
</button>
<span className="text-xs text-slate-500">Scrollable · Exportable</span>
</div>
</div>
<div className="overflow-auto">
<table className="min-w-full text-sm">
<thead className="border-b text-xs bg-slate-950 border-slate-800 text-slate-400">
<tr>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Ticket</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Date &amp; Time</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Symbol</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Dir</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">Size</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">Entry</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">Exit</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">SL</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">TP</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">P/L</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">P/L %</th>
<th className="whitespace-nowrap text-right font-normal px-3 py-2">R</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Holding</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Session</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Market type</th>
<th className="whitespace-nowrap text-left font-normal px-3 py-2">Notes &amp; mistakes</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-900 text-slate-200" id="trade-table-body">
<tr className="bg-slate-950/40">
<td className="text-center text-sm text-slate-500 px-3 py-6" colspan="16">
                      No trades imported yet. Upload a CSV or paste trades, then click
                      <span className="text-slate-200">“Generate journal, analytics &amp; plan”</span>.
                      We’ll compute holding time, R-multiples, sessions, market-type tags and keep all raw fields auditable.
                    </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-4">

<div className="rounded-2xl border p-4 sm:p-5 space-y-3 border-slate-800 bg-slate-950/70">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-area-chart w-5 h-5 text-slate-200" data-lucide="area-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></path></svg>
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">4. Visualizations</h2>
<p className="text-sm mt-0.5 text-slate-400">
                      Interactive equity curve, drawdown, R distribution, streaks, time-of-day and symbol/session heatmaps — all exportable.
                    </p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Equity curve</span>
<span className="text-[0.65rem] text-slate-500">Click points to open trade detail</span>
</div>
<div className="h-32 rounded-lg bg-gradient-to-br border flex items-center justify-center text-xs from-slate-950 to-slate-900 border-slate-900 text-slate-600">
                    Shows cumulative realized P/L over time or trade index, with hover tooltips and export to PNG/PDF.
                  </div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>R-multiple histogram</span>
<span className="text-[0.65rem] text-slate-500">Winners vs losers</span>
</div>
<div className="h-24 rounded-lg border flex items-center justify-center text-[0.65rem] bg-slate-950 border-slate-900 text-slate-600">
                      Buckets R (e.g. -5..-4, …, 0..1, 1..2, 2..3) and overlays positive vs negative trades.
                    </div>
</div>
<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Win/loss streaks</span>
<span className="text-[0.65rem] text-slate-500">Emotional pressure points</span>
</div>
<div className="h-24 rounded-lg border flex items-center justify-center text-[0.65rem] bg-slate-950 border-slate-900 text-slate-600">
                      Visualizes consecutive wins and losses; clicking a streak opens the underlying trades.
                    </div>
</div>
</div>
<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Symbol × session heatmap</span>
<span className="text-[0.65rem] text-slate-500">Session &amp; hour breakdown</span>
</div>
<div className="h-24 rounded-lg border flex items-center justify-center text-[0.65rem] bg-slate-950 border-slate-900 text-slate-600">
                    Rows are symbols, columns are sessions or hours. Cells aggregate P/L or win rate; hover reveals trades behind each cell.
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border p-4 sm:p-5 space-y-4 border-slate-800 bg-slate-950/70">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-workflow w-5 h-5 text-slate-200" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">5. Diagnostics &amp; improvement plan</h2>
<p className="text-sm mt-0.5 text-slate-400">
                      Rule-based engine surfaces technical and behavioral leaks, shows evidence, then builds a concrete, measurable plan.
                    </p>
</div>
</div>
</div>
<div className="space-y-3">

<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Technical pattern diagnosis</span>
<span className="text-[0.65rem] text-slate-500">Backed only by executed trades</span>
</div>
<ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300" id="tech-diagnostics">
<li>
                      Detects
                      <span className="text-slate-100">chasing entries</span>
                      via entries near recent extremes that see immediate adverse excursion (using pre/post-trade price windows).
                    </li>
<li>
                      Flags
                      <span className="text-slate-100">holding losers longer than winners</span>
                      by comparing holding_minutes and P/L sign across trades.
                    </li>
<li>
                      Assesses
                      <span className="text-slate-100">SL discipline</span>
                      by comparing theoretical SL-based loss to actual loss; highlights moved/ignored stops.
                    </li>
</ul>
</div>

<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Psychology evaluation</span>
<span className="text-[0.65rem] text-slate-500">Sequences, sizing, timing</span>
</div>
<ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300" id="psych-diagnostics">
<li>
<span className="text-slate-100">Revenge trading</span>:
                      2+ consecutive losses followed by size increase or direction flip; list evidence trades (IDs, timestamps).
                    </li>
<li>
<span className="text-slate-100">FOMO / impulse entries</span>:
                      late-trend entries with tight stops and short holding time that underperform your baseline R.
                    </li>
<li>
<span className="text-slate-100">Overtrading</span>:
                      trades per hour or day breaching your configured cap; suggests cooldown rules and daily max-loss stops.
                    </li>
</ul>
</div>

<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-slate-950/80">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Time-of-day &amp; market-type behavior</span>
<span className="text-[0.65rem] text-slate-500">Sessions, weekdays, volatility</span>
</div>
<ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300" id="session-diagnostics">
<li>
                      Breaks down performance by
                      <span className="text-slate-100">session (Asia / London / NY)</span>
                      and weekday to propose session/time filters.
                    </li>
<li>
                      Tags trades by
                      <span className="text-slate-100">market type</span>
                      (Trending / Ranging / Volatile / News) using pre/post-trade price movement vs ATR and volume proxies.
                    </li>
<li>
                      Surfaces
                      <span className="text-slate-100">book imbalance</span>
                      when &gt;70% risk clusters in one symbol or correlated group; suggests diversification or caps.
                    </li>
</ul>
</div>

<div className="rounded-xl border p-3 space-y-2 border-slate-800 bg-emerald-950/20">
<div className="flex items-center justify-between">
<span className="text-xs text-emerald-300">Personalized improvement plan</span>
<span className="text-[0.65rem] text-emerald-200/70">Rule-based, coach-style checklist</span>
</div>
<ul className="list-disc list-inside space-y-1.5 text-sm text-emerald-100" id="improvement-plan">
<li>
                      If win rate &lt; 40% and average loss &gt; average win:
                      <span className="text-emerald-50">tighten entries and reduce risk per trade</span>
                      (e.g., cap at 0.5% for the next 30 trading days).
                    </li>
<li>
                      If R variance is high:
                      standardize on a
                      <span className="text-emerald-50">fixed R model</span>
                      (e.g., 1R distance to SL) and fixed fractional risk per trade.
                    </li>
<li>
                      If a session is consistently negative:
                      <span className="text-emerald-50">pause or downsize that session</span>
                      until 20+ trades show improved stats.
                    </li>
<li>
                      Overtrading or revenge flags triggered:
                      apply a
                      <span className="text-emerald-50">cooldown rule</span>
                      (e.g., stop for the day after 2R down or 3 consecutive losses).
                    </li>
</ul>
<p className="text-[0.65rem] text-emerald-200/80">
                    Each plan item is measurable, with acceptance criteria (e.g., “Complete 30 days with max risk ≤0.5% and no trades after 2 losses”).
                  </p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="py-3 border-t mt-4 text-xs text-slate-500 flex items-center justify-between border-slate-900/80">
<span>
          Step 1: Import trades (CSV, paste, or single trades) · Step 2: Review mapping &amp; validation · Step 3: Generate analytics, diagnostics &amp; PDF/CSV exports.
        </span>
<span className="hidden sm:inline-flex items-center gap-1">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Deterministic math · No hallucinated data · Secure, audit-logged imports.</span>
</span>
</footer>
</div>


    </>
  );
}
