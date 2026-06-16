import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener("DOMContentLoaded", function () {
        const stations = [
          {
            id: "222",
            decoderAddress: "678088792-1",
            decoderType: "Pump Start",
            pipe: "ML1",
            priority: "1",
            area: "Garden",
            subArea: "Boundary",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Drip 1",
            error: ""
          },
          {
            id: "333",
            decoderAddress: "678088792-2",
            decoderType: "Filtration",
            pipe: "ML1",
            priority: "1",
            area: "Garden",
            subArea: "Boundary",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Drip 1",
            error: ""
          },
          {
            id: "4444",
            decoderAddress: "675088764-3",
            decoderType: "Filtration",
            pipe: "ML1",
            priority: "1",
            area: "Garden",
            subArea: "Boundary",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Drip 1",
            error: ""
          },
          {
            id: "4444",
            decoderAddress: "675088820-3",
            decoderType: "Fertigation",
            pipe: "ML1",
            priority: "1",
            area: "Garden",
            subArea: "Boundary",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Drip 1",
            error: ""
          },
          {
            id: "123123",
            decoderAddress: "697965236-1",
            decoderType: "ML1",
            pipe: "ML1",
            priority: "1",
            area: "Garden",
            subArea: "Boundary",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Drip 1",
            error: ""
          },
          {
            id: "671091654-1",
            decoderAddress: "671091654-1",
            decoderType: "Irrigation",
            pipe: "SL1",
            priority: "1",
            area: "Garden",
            subArea: "Pond",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Sprinkler 2",
            error: ""
          },
          {
            id: "Station 1",
            decoderAddress: "675088716-1",
            decoderType: "Irrigation",
            pipe: "ML1",
            priority: "1",
            area: "Garden",
            subArea: "Boundary",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Sprinkler 2",
            error: ""
          },
          {
            id: "Station 10",
            decoderAddress: "675088748-2",
            decoderType: "Agitator",
            pipe: "SSL2",
            priority: "1",
            area: "Garden",
            subArea: "Pond",
            state: "Idling",
            plant: "Plant 1",
            emitter: "Rotor 3",
            error: ""
          },
          {
            id: "Station 11",
            decoderAddress: "675088748-3",
            decoderType: "Flushing",
            pipe: "ML3",
            priority: "1",
            area: "Back Yard",
            subArea: "Flower bed",
            state: "Error",
            plant: "Shrub 3",
            emitter: "Rotor 3",
            error: "Error"
          },
          {
            id: "Station 12",
            decoderAddress: "675088748-4",
            decoderType: "Irrigation",
            pipe: "ML2",
            priority: "1",
            area: "Garden",
            subArea: "Pond",
            state: "Idling",
            plant: "Plant 2",
            emitter: "Rotor 3",
            error: ""
          }
        ];

        const extendedStations = [];
        for (let i = 0; i < 8; i++) {
          stations.forEach((s, idx) => {
            extendedStations.push({
              ...s,
              id: s.id + "-" + (i + 1) + "-" + idx
            });
          });
        }

        const searchInput = document.getElementById("search-input");
        const filterArea = document.getElementById("filter-area");
        const filterType = document.getElementById("filter-type");
        const filterState = document.getElementById("filter-state");
        const tbody = document.getElementById("stations-body");
        const totalEntriesEl = document.getElementById("total-entries");
        const showingEl = document.getElementById("showing-range");
        const loader = document.getElementById("infinite-loader");

        let filteredData = [...extendedStations];
        let loadedCount = 0;
        const chunkSize = 15;
        let isLoading = false;
        let allLoaded = false;

        function applyFilters() {
          const q = searchInput.value.trim().toLowerCase();
          const area = filterArea.value;
          const type = filterType.value;
          const state = filterState.value;

          filteredData = extendedStations.filter((row) => {
            const matchSearch =
              !q ||
              row.id.toLowerCase().includes(q) ||
              row.decoderAddress.toLowerCase().includes(q) ||
              row.area.toLowerCase().includes(q) ||
              row.subArea.toLowerCase().includes(q) ||
              row.decoderType.toLowerCase().includes(q);

            const matchArea = !area || row.area === area;
            const matchType = !type || row.decoderType === type;
            const matchState = !state || row.state === state;

            return matchSearch && matchArea && matchType && matchState;
          });

          totalEntriesEl.textContent = filteredData.length.toString();
          tbody.innerHTML = "";
          loadedCount = 0;
          allLoaded = false;
          loadMore();
        }

        function renderRows(rows) {
          rows.forEach((row) => {
            const tr = document.createElement("tr");
            tr.className =
              "border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors";
            tr.innerHTML = `
              <td class="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
                <div class="flex items-center gap-2">
                  <button class="text-slate-400 hover:text-cyan-500">
                    <i data-lucide="grip-vertical" class="w-4 h-4"></i>
                  </button>
                  <span class="font-semibold tracking-tight">${row.id}</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                <span class="text-cyan-600">${row.decoderAddress}</span>
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                <span class="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ${row.decoderType}
                </span>
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ${row.pipe}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ${row.priority}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ${row.area}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ${row.subArea}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs">
                <div class="flex items-center gap-2">
                  <span class="inline-flex h-1.5 w-1.5 rounded-full ${
                    row.error
                      ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
                      : "bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                  }"></span>
                  <span class="${
                    row.error
                      ? "text-rose-600 font-medium"
                      : "text-emerald-600"
                  }">${row.state}</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ${row.plant}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ${row.emitter}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
                <div class="flex items-center gap-2">
                  <button class="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                    <span>View</span>
                  </button>
                  <button class="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
                    <i data-lucide="pencil-line" class="w-3.5 h-3.5"></i>
                    <span>Edit</span>
                  </button>
                  <button class="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    <span>Del</span>
                  </button>
                </div>
              </td>
            `;
            tbody.appendChild(tr);
          });

          const start = filteredData.length === 0 ? 0 : 1;
          showingEl.textContent = `${start} to ${Math.min(
            loadedCount,
            filteredData.length
          )}`;

          if (window.lucide) {
            window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }
        }

        function loadMore() {
          if (isLoading || allLoaded) return;
          if (loadedCount >= filteredData.length) {
            allLoaded = true;
            loader.classList.add("hidden");
            return;
          }
          isLoading = true;
          loader.classList.remove("hidden");

          setTimeout(() => {
            const nextChunk = filteredData.slice(
              loadedCount,
              loadedCount + chunkSize
            );
            loadedCount += nextChunk.length;
            renderRows(nextChunk);
            isLoading = false;

            if (loadedCount >= filteredData.length) {
              allLoaded = true;
              loader.classList.add("hidden");
            }
          }, 300);
        }

        const scrollContainer = document.getElementById("table-scroll");
        scrollContainer.addEventListener("scroll", () => {
          const threshold = 160;
          if (
            scrollContainer.scrollTop +
              scrollContainer.clientHeight +
              threshold >=
            scrollContainer.scrollHeight
          ) {
            loadMore();
          }
        });

        searchInput.addEventListener("input", () => applyFilters());
        filterArea.addEventListener("change", () => applyFilters());
        filterType.addEventListener("change", () => applyFilters());
        filterState.addEventListener("change", () => applyFilters());

        filteredData = [...extendedStations];
        totalEntriesEl.textContent = filteredData.length.toString();
        loadMore();

        if (window.lucide) {
          window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
      });

      if (window.lucide) {
        window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-6xl mx-auto space-y-4 bg-white/90 backdrop-blur rounded-2xl border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">

<div className="px-4 sm:px-6 pt-4 pb-3 border-b border-slate-200 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
<div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-xs text-slate-700">
<span className="me-3 text-slate-900/90 font-semibold tracking-tight">
              Test mode
            </span>
<div className="inline-flex items-center rounded-full bg-white px-1 py-0.5 border border-slate-200">
<button className="px-3 py-1 rounded-full text-slate-600 text-xs">
                On
              </button>
<button className="px-3 py-1 rounded-full bg-slate-900 text-slate-50 text-xs font-semibold tracking-tight">
                Off
              </button>
</div>
</div>
<div className="flex items-center rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-xs text-slate-700">
<span className="me-3 text-slate-900/90 font-semibold tracking-tight">
              Irrigation Controller
            </span>
<div className="inline-flex items-center rounded-full bg-white px-1 py-0.5 border border-slate-200">
<button className="px-3 py-1 rounded-full text-slate-700 text-xs">
                Manual
              </button>
<button className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold tracking-tight">
                Auto
              </button>
<button className="px-3 py-1 rounded-full text-slate-700 text-xs">
                Pause
              </button>
</div>
</div>
</div>
</div>

<div className="px-4 sm:px-6 pb-4 space-y-4">
<div className="flex flex-col lg:flex-row lg:items-center gap-3 text-xs">
<div className="flex-1 flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-2">
<svg className="lucide lucide-search w-4 h-4 text-cyan-500 shrink-0" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" id="search-input" placeholder="Tìm station, decoder, khu vực..." type="text"/>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<svg className="lucide lucide-map w-4 h-4 text-cyan-500" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<select className="bg-transparent text-xs text-slate-900 focus:outline-none" id="filter-area">
<option value="">Area: All</option>
<option value="Garden">Garden</option>
<option value="Back Yard">Back Yard</option>
</select>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<svg className="lucide lucide-cpu w-4 h-4 text-cyan-500" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
<select className="bg-transparent text-xs text-slate-900 focus:outline-none" id="filter-type">
<option value="">Decoder: All</option>
<option value="Pump Start">Pump Start</option>
<option value="Filtration">Filtration</option>
<option value="Fertigation">Fertigation</option>
<option value="ML1">ML1</option>
<option value="Irrigation">Irrigation</option>
<option value="Agitator">Agitator</option>
<option value="Flushing">Flushing</option>
</select>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<svg className="lucide lucide-activity w-4 h-4 text-cyan-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<select className="bg-transparent text-xs text-slate-900 focus:outline-none" id="filter-state">
<option value="">State: All</option>
<option value="Idling">Idling</option>
<option value="Error">Error</option>
</select>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="relative inline-flex items-center gap-2 rounded-full bg-white border border-cyan-400/70 px-3 py-1.5 text-xs font-semibold tracking-tight text-cyan-700 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
<span className="absolute -top-1 -right-1 h-4 min-w-[1rem] rounded-full bg-cyan-500 text-[0.6rem] text-white flex items-center justify-center">5</span>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Station GeoCode</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-3 py-1.5 text-xs font-semibold tracking-tight shadow-[0_0_22px_rgba(52,211,153,0.7)] hover:bg-emerald-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add Stations</span>
</button>
</div>
</div>

<div className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 p-1 text-xs text-slate-700">
<button className="px-3 py-1 rounded-full hover:bg-slate-100 transition-colors">
            Basic View
          </button>
<button className="px-3 py-1 rounded-full hover:bg-slate-100 transition-colors">
            Flow View
          </button>
<button className="px-3 py-1 rounded-full hover:bg-slate-100 transition-colors">
            Irrigation View
          </button>
<button className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold tracking-tight shadow-[0_0_20px_rgba(34,211,238,0.65)]">
            List View
          </button>
</div>

<section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<div className="overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100" id="table-scroll">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50 sticky top-0 z-10 text-xs text-slate-600">
<tr className="">
<th className="whitespace-nowrap py-3 ps-4 pe-3 text-left text-xs font-semibold tracking-tight" scope="col">
<div className="flex items-center gap-1">
<span>Station Name</span>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-slate-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<div className="flex items-center gap-1">
<span>Decoder Address</span>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-slate-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<div className="flex items-center gap-1">
<span>Decoder Type</span>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-slate-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<div className="flex items-center gap-1">
<span>Pipe</span>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-slate-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<span>Priority</span>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<span>Area</span>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<span>Sub Area</span>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<div className="flex items-center gap-1">
<span>State</span>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-slate-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<span>Plant</span>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<span>Emitter</span>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold tracking-tight" scope="col">
<span>Action</span>
</th>
</tr>
</thead>
<tbody className="bg-white" id="stations-body"><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-1-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-1-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-1-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-1-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-1-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">671091654-1-1-5</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">671091654-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SL1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 1-1-6</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088716-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 10-1-7</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Agitator
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SSL2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 11-1-8</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Flushing
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Back Yard
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Flower bed
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
<span className="text-rose-600 font-medium">Error</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Shrub 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 12-1-9</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-4</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-2-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-2-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-2-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-2-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-2-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">671091654-1-2-5</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">671091654-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SL1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 1-2-6</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088716-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 10-2-7</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Agitator
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SSL2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 11-2-8</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Flushing
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Back Yard
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Flower bed
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
<span className="text-rose-600 font-medium">Error</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Shrub 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 12-2-9</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-4</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-3-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-3-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-3-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-3-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-3-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">671091654-1-3-5</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">671091654-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SL1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 1-3-6</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088716-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 10-3-7</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Agitator
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SSL2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 11-3-8</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Flushing
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Back Yard
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Flower bed
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
<span className="text-rose-600 font-medium">Error</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Shrub 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 12-3-9</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-4</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-4-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-4-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-4-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-4-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-4-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">671091654-1-4-5</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">671091654-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SL1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 1-4-6</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088716-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 10-4-7</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Agitator
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SSL2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 11-4-8</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Flushing
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Back Yard
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Flower bed
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
<span className="text-rose-600 font-medium">Error</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Shrub 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 12-4-9</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-4</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-5-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-5-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-5-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-5-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-5-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-1-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-1-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-1-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-1-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-1-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">671091654-1-1-5</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">671091654-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SL1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 1-1-6</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088716-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Sprinkler 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 10-1-7</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Agitator
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                SSL2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 11-1-8</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Flushing
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Back Yard
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Flower bed
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
<span className="text-rose-600 font-medium">Error</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Shrub 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">Station 12-1-9</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088748-4</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Irrigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Pond
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 2
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Rotor 3
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">222-2-0</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Pump Start
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">333-2-1</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">678088792-2</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-2-2</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088764-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Filtration
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">4444-2-3</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">675088820-3</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  Fertigation
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr><tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 ps-4 pe-3 text-xs text-slate-900">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</button>
<span className="font-semibold tracking-tight">123123-2-4</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="text-cyan-600">697965236-1</span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
<span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-50 px-2 py-0.5 text-[0.7rem] font-medium text-cyan-700">
                  ML1
                </span>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                ML1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Garden
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Boundary
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-emerald-600">Idling</span>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Plant 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-slate-900">
                Drip 1
              </td>
<td className="whitespace-nowrap px-3 py-3 text-xs text-cyan-700">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>View</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] hover:text-cyan-600">
<svg className="lucide lucide-pencil-line w-3.5 h-3.5" data-lucide="pencil-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path><path d="m15 5 3 3"></path></svg>
<span>Edit</span>
</button>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-rose-500 hover:text-rose-600">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Del</span>
</button>
</div>
</td>
</tr></tbody>
</table>
<div className="flex items-center justify-center py-3 text-xs text-slate-500" id="infinite-loader">
<div className="h-4 w-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mr-2"></div>
              Loading more stations...
            </div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-xs">
<p className="text-slate-600">
              Showing
              <span className="font-semibold text-slate-900" id="showing-range">1 to 15</span>
              of
              <span className="font-semibold text-slate-900" id="total-entries">80</span>
              stations
            </p>
<div className="flex items-center gap-3 text-[0.7rem]">
<span className="inline-flex items-center gap-1 text-slate-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.9)]"></span>
                Healthy
              </span>
<span className="inline-flex items-center gap-1 text-slate-600">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.9)]"></span>
                Error
              </span>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
