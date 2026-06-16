import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lucide init helper
      function refreshIcons() {
        try {
          lucide.createIcons({ attrs: { width: 16, height: 16, strokeWidth: 1.5 } });
        } catch (e) {}
      }

      // Data
      const departments = ["Room Service", "Housekeeping", "Laundry", "Maintenance", "Spa", "Transport"];
      const floorBased = new Set(["Housekeeping", "Room Service"]);
      const priorityWeights = { "High": 3, "Normal": 2, "Low": 1 };
      const state = {
        autoAssign: true,
        liveRunning: false,
        highlightedStaff: new Set(),
        staff: [],
        requests: [],
        nextId: 1001,
        timers: {
          loop: null
        },
        lastEvent: "Initialized"
      };

      // Seed staff
      function range(a,b){return Array.from({length:b-a+1},(_,i)=>a+i);}
      state.staff = [
        { id: "S1", name: "Alice Chen", department: "Housekeeping", floors: range(3,5), status: "Available", currentTaskId: null, tasksCompleted: 3, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S2", name: "Diego Ramos", department: "Room Service", floors: range(10,12), status: "Available", currentTaskId: null, tasksCompleted: 5, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S3", name: "Fatima Ali", department: "Laundry", floors: ["All"], status: "Available", currentTaskId: null, tasksCompleted: 2, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S4", name: "Oliver Park", department: "Maintenance", floors: ["All"], status: "Available", currentTaskId: null, tasksCompleted: 1, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S5", name: "Sara Kim", department: "Spa", floors: ["Spa"], status: "Available", currentTaskId: null, tasksCompleted: 4, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S6", name: "Liam Patel", department: "Transport", floors: ["Lobby"], status: "Available", currentTaskId: null, tasksCompleted: 6, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S7", name: "Priya Singh", department: "Housekeeping", floors: range(6,8), status: "Offline", currentTaskId: null, tasksCompleted: 0, tasksActive: 0, lastAssignedAt: 0 },
        { id: "S8", name: "Nathan Lee", department: "Room Service", floors: range(1,4), status: "Available", currentTaskId: null, tasksCompleted: 0, tasksActive: 0, lastAssignedAt: 0 },
      ];

      // Utilities
      function now() { return Date.now(); }
      function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
      function pad(n){ return n<10 ? '0'+n : ''+n; }
      function hhmm(d){ return `${pad(d.getHours())}:${pad(d.getMinutes())}`; }
      function since(ts){
        const s = Math.max(1, Math.floor((now()-ts)/1000));
        if (s < 60) return `${s}s ago`;
        const m = Math.floor(s/60);
        if (m < 60) return `${m}m ago`;
        const h = Math.floor(m/60);
        return `${h}h ago`;
      }
      function floorLabel(f){ return Array.isArray(f) ? (f[0]==="All" ? "All" : f.join(", ")) : (f || "-"); }

      // Request ID
      function nextReqId(){ return `RQ-${state.nextId++}`; }

      // Create random request
      function generateRandomRequest() {
        const type = randomChoice(departments);
        const floor = type === "Spa" ? "Spa" : (type === "Transport" ? "Lobby" : Math.floor(Math.random()*15)+1);
        const room = typeof floor === "number" ? (floor*100 + Math.floor(Math.random()*20)+1) : (floor === "Spa" ? "SPA-0" : "LOB-0");
        const priorityPool = ["Low","Normal","Normal","Normal","High"]; // skew to Normal
        const priority = randomChoice(priorityPool);
        const req = {
          id: nextReqId(),
          type,
          floor,
          room,
          priority,
          requestedAt: now(),
          assignedStaffId: null,
          status: "waiting", // waiting | in-progress | completed
          eta: null
        };
        state.requests.push(req);
        logEvent(`New ${type} request ${req.id} (${roomLabel(req)}) - ${priority}`);
        if (state.autoAssign) {
          tryAutoAssign(req);
        } else {
          updateUI();
        }
      }

      function roomLabel(req){
        return typeof req.floor === "number" ? `Room ${req.room} / Fl ${req.floor}` : `${req.room} / ${req.floor}`;
      }

      // Assignment Logic
      function tryAutoAssign(req) {
        if (req.status !== "waiting") return false;
        const candidates = state.staff.filter(s => {
          if (s.status !== "Available") return false;
          if (s.department !== req.type) return false;
          if (floorBased.has(s.department)) {
            if (typeof req.floor === "number") {
              return s.floors.includes(req.floor);
            } else {
              return false;
            }
          }
          return true;
        });

        if (candidates.length === 0) {
          // Keep in queue
          updateUI();
          setLastEvent(`${req.id} waiting for next available staff`);
          return false;
        }

        // Fewest workload first (completed tasks), then earliest lastAssignedAt, then name
        candidates.sort((a,b) => {
          if (a.tasksCompleted !== b.tasksCompleted) return a.tasksCompleted - b.tasksCompleted;
          if (a.lastAssignedAt !== b.lastAssignedAt) return a.lastAssignedAt - b.lastAssignedAt;
          return a.name.localeCompare(b.name);
        });

        const chosen = candidates[0];
        performAssignment(chosen, req);
        return true;
      }

      function performAssignment(staff, req, manual=false) {
        // Update staff
        staff.status = "Busy";
        staff.currentTaskId = req.id;
        staff.tasksActive = 1;
        staff.lastAssignedAt = now();

        // Update request
        req.assignedStaffId = staff.id;
        req.status = "in-progress";
        const base = { "High": 4, "Normal": 6, "Low": 8 }; // minutes baseline
        const jitter = Math.floor(Math.random()*3)-1; // -1..1
        const minutes = Math.max(2, base[req.priority] + jitter);
        req.eta = now() + minutes*60*1000;

        // Highlight staff
        state.highlightedStaff.add(staff.id);
        setTimeout(()=>{ state.highlightedStaff.delete(staff.id); updateUI(); }, 1800);

        // Feedback
        setLastEvent(`${manual ? "Manually assigned" : "Auto-assigned"} ${req.id} to ${staff.name}`);
        logEvent(`${req.id} -> ${staff.name} (${staff.department})`);
        updateUI();
      }

      // When staff finishes
      function completeTaskByStaff(staff) {
        if (staff.status !== "Busy" || !staff.currentTaskId) return false;
        const req = state.requests.find(r => r.id === staff.currentTaskId);
        if (!req) return false;
        req.status = "completed";
        req.eta = null;
        staff.status = "Available";
        staff.currentTaskId = null;
        staff.tasksActive = 0;
        staff.tasksCompleted += 1;

        setLastEvent(`${staff.name} completed ${req.id}`);
        logEvent(`${req.id} completed by ${staff.name}`);
        // Assign next waiting task that fits this staff
        assignQueuedToStaff(staff);
        updateUI();
        return true;
      }

      function assignQueuedToStaff(staff) {
        const queued = state.requests.filter(r => r.status === "waiting");
        // Sort by priority desc then requestedAt asc
        queued.sort((a,b) => {
          const pw = priorityWeights[b.priority] - priorityWeights[a.priority];
          if (pw !== 0) return pw;
          return a.requestedAt - b.requestedAt;
        });
        for (const r of queued) {
          if (r.type !== staff.department) continue;
          if (floorBased.has(staff.department)) {
            if (typeof r.floor !== "number") continue;
            if (!staff.floors.includes(r.floor)) continue;
          }
          performAssignment(staff, r);
          return true;
        }
        return false;
      }

      // Periodic loop: random events
      function loopTick() {
        // Random: new request
        if (Math.random() < 0.55) {
          generateRandomRequest();
        }
        // Random: staff finishes a task (if any busy)
        const busy = state.staff.filter(s => s.status === "Busy");
        if (busy.length && Math.random() < 0.4) {
          // choose one whose request is near eta or random
          const chosen = randomChoice(busy);
          completeTaskByStaff(chosen);
        }
        // Also auto-complete any past ETA
        for (const s of busy) {
          const r = state.requests.find(x => x.id === s.currentTaskId);
          if (r && r.eta && now() >= r.eta) {
            completeTaskByStaff(s);
          }
        }
        updateUI();
      }

      // UI Renders
      function renderStaff() {
        const tbody = document.getElementById("staffTbody");
        const rows = state.staff.map(s => {
          const isPulse = state.highlightedStaff.has(s.id);
          const statusBadge = s.status === "Available" ? 
            `<span class="inline-flex items-center gap-1 text-emerald-300 bg-emerald-500/10 border border-emerald-800/50 px-2 py-0.5 rounded text-[11px]"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Available</span>` :
            s.status === "Busy" ?
            `<span class="inline-flex items-center gap-1 text-amber-300 bg-amber-500/10 border border-amber-800/50 px-2 py-0.5 rounded text-[11px]"><span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>Busy</span>` :
            `<span class="inline-flex items-center gap-1 text-slate-400 bg-slate-700/20 border border-slate-700/60 px-2 py-0.5 rounded text-[11px]"><span class="h-1.5 w-1.5 rounded-full bg-slate-500"></span>Offline</span>`;
          const current = s.currentTaskId ? `<span class="text-slate-300">${s.currentTaskId}</span>` : `<span class="text-slate-500">—</span>`;
          const avail = s.status === "Available" ? `<span class="text-emerald-300">Now</span>` : `<span class="text-slate-500">—</span>`;
          const floors = Array.isArray(s.floors) ? (s.floors[0]==="All" || s.floors[0]==="Spa" || s.floors[0]==="Lobby" ? floorLabel(s.floors) : `${s.floors[0]}-${s.floors[s.floors.length-1]}`) : s.floors;
          return `
          <tr class="${isPulse ? 'animate-pulse' : ''}">
            <td class="px-4 py-2">
              <div class="flex items-center gap-2">
                <div class="h-6 w-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-300">${s.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
                <div class="text-slate-200">${s.name}</div>
              </div>
            </td>
            <td class="px-4 py-2 text-slate-300">${s.department}</td>
            <td class="px-4 py-2 text-slate-300">${floors}</td>
            <td class="px-4 py-2">${statusBadge}</td>
            <td class="px-4 py-2">${current}</td>
            <td class="px-4 py-2 text-slate-300">${s.tasksCompleted}</td>
            <td class="px-4 py-2">${avail}</td>
          </tr>`;
        }).join("");
        tbody.innerHTML = rows || `<tr><td colspan="7" class="px-4 py-6 text-center text-slate-400">No staff</td></tr>`;
      }

      function renderQueue() {
        const tbody = document.getElementById("queueTbody");
        // Sort: In-progress first by time, then waiting by priority and time, completed last by time
        const sorted = [...state.requests].sort((a,b) => {
          const order = (x)=> x.status==="in-progress"?0 : (x.status==="waiting"?1:2);
          const oa = order(a), ob = order(b);
          if (oa !== ob) return oa - ob;
          if (a.status === "waiting" && b.status === "waiting") {
            const pw = priorityWeights[b.priority] - priorityWeights[a.priority];
            if (pw !== 0) return pw;
          }
          return a.requestedAt - b.requestedAt;
        });

        const rows = sorted.map(r => {
          const assigned = r.assignedStaffId ? state.staff.find(s=>s.id===r.assignedStaffId)?.name : "—";
          const statusBadge =
            r.status === "waiting" ? `<span class="inline-flex items-center gap-1 text-sky-300 bg-sky-500/10 border border-sky-800/50 px-2 py-0.5 rounded text-[11px]"><span class="h-1.5 w-1.5 rounded-full bg-sky-400"></span>Waiting</span>` :
            r.status === "in-progress" ? `<span class="inline-flex items-center gap-1 text-amber-300 bg-amber-500/10 border border-amber-800/50 px-2 py-0.5 rounded text-[11px]"><span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>In&nbsp;Progress</span>` :
            `<span class="inline-flex items-center gap-1 text-emerald-300 bg-emerald-500/10 border border-emerald-800/50 px-2 py-0.5 rounded text-[11px]"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Done</span>`;
          const prBadge = r.priority === "High" ? "text-rose-300 bg-rose-500/10 border-rose-800/50" :
                          r.priority === "Normal" ? "text-indigo-300 bg-indigo-500/10 border-indigo-800/50" :
                          "text-slate-300 bg-slate-700/20 border-slate-700/60";
          const actionBtn = r.status === "waiting" ?
            `<button data-assign="${r.id}" class="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"><i data-lucide="hand" class="w-4 h-4"></i>Assign</button>` :
            r.status === "in-progress" ?
            `<button data-complete="${r.id}" class="inline-flex items-center gap-1.5 rounded-md border border-emerald-700 bg-emerald-600/20 hover:bg-emerald-600/30 px-2.5 py-1.5 text-xs text-emerald-200"><i data-lucide="check-circle" class="w-4 h-4"></i>Mark Done</button>` :
            `<button disabled class="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1.5 text-xs text-slate-500 cursor-not-allowed"><i data-lucide="archive" class="w-4 h-4"></i>Archived</button>`;
          const timeStr = hhmm(new Date(r.requestedAt));
          const etaIcon = r.status === "in-progress" ? `<i data-lucide="timer" class="w-4 h-4 text-amber-300 animate-pulse"></i>` : "";
          return `
          <tr>
            <td class="px-4 py-2 text-slate-300">${r.id}</td>
            <td class="px-4 py-2 text-slate-300">${typeof r.floor === "number" ? `Room ${r.room}<br/><span class="text-xs text-slate-400">Floor ${r.floor}</span>` : `${r.room}<br/><span class="text-xs text-slate-400">${r.floor}</span>`}</td>
            <td class="px-4 py-2 text-slate-300">${r.type}</td>
            <td class="px-4 py-2">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border ${prBadge} text-[11px]">
                <i data-lucide="${r.priority==='High'?'flame':(r.priority==='Normal'?'gauge':'signal-low')}" class="w-4 h-4"></i>${r.priority}
              </span>
            </td>
            <td class="px-4 py-2 text-slate-300">${timeStr}<div class="text-xs text-slate-500">${since(r.requestedAt)}</div></td>
            <td class="px-4 py-2 text-slate-300">${assigned}</td>
            <td class="px-4 py-2">${statusBadge}</td>
            <td class="px-4 py-2">
              <div class="flex items-center gap-2">${etaIcon}${actionBtn}</div>
            </td>
          </tr>`;
        }).join("");
        tbody.innerHTML = rows || `<tr><td colspan="8" class="px-4 py-6 text-center text-slate-400">No requests</td></tr>`;

        // Wire actions
        tbody.querySelectorAll("[data-assign]").forEach(btn=>{
          btn.addEventListener("click", (e)=>{
            const rid = e.currentTarget.getAttribute("data-assign");
            openManualModal(rid);
          });
        });
        tbody.querySelectorAll("[data-complete]").forEach(btn=>{
          btn.addEventListener("click", (e)=>{
            const rid = e.currentTarget.getAttribute("data-complete");
            const req = state.requests.find(r=>r.id===rid);
            if (!req || req.status!=="in-progress") return;
            const st = state.staff.find(s=>s.id===req.assignedStaffId);
            completeTaskByStaff(st);
          });
        });
      }

      function updateStats() {
        const active = state.staff.filter(s=>s.status!=="Offline").length;
        const busy = state.staff.filter(s=>s.status==="Busy").length;
        const waiting = state.requests.filter(r=>r.status==="waiting").length;
        document.getElementById("statActive").textContent = active;
        document.getElementById("statBusy").textContent = busy;
        document.getElementById("statQueue").textContent = waiting;
        document.getElementById("queueBadge").textContent = `${waiting} waiting`;

        const waits = state.requests.filter(r=>r.status!=="completed").map(r => (now()-r.requestedAt)/60000);
        const avg = waits.length ? (waits.reduce((a,b)=>a+b,0)/waits.length) : 0;
        document.getElementById("statAvgWait").textContent = waits.length ? `${avg.toFixed(1)}m` : "—";
        document.getElementById("staffCount").textContent = state.staff.length;
      }

      function setLastEvent(text){
        state.lastEvent = text;
        document.getElementById("lastEvent").textContent = text;
      }

      function logEvent(text) {
        const ul = document.getElementById("eventLog");
        const li = document.createElement("li");
        li.className = "px-4 py-2 flex items-center gap-2";
        li.innerHTML = `<i data-lucide="dot" class="w-4 h-4 text-slate-500"></i><span class="text-slate-300">${text}</span><span class="ml-auto text-xs text-slate-500">${hhmm(new Date())}</span>`;
        ul.prepend(li);
        while (ul.children.length > 20) ul.removeChild(ul.lastChild);
        refreshIcons();
      }

      function updateUI() {
        renderStaff();
        renderQueue();
        updateStats();
        refreshIcons();
      }

      // Modal
      function openManualModal(requestId=null) {
        // Populate requests (waiting)
        const reqSelect = document.getElementById("modalRequestSelect");
        const staffSelect = document.getElementById("modalStaffSelect");
        const waiting = state.requests.filter(r=>r.status==="waiting");
        reqSelect.innerHTML = waiting.length ? waiting.map(r=>`<option value="${r.id}" ${requestId===r.id?'selected':''}>${r.id} — ${r.type} (${roomLabel(r)}) • ${r.priority}</option>`).join("") : `<option value="">No waiting requests</option>`;
        filterStaffDropdown();

        document.getElementById("manualModal").classList.remove("hidden");
        document.getElementById("manualModal").classList.add("flex");
        refreshIcons();
      }

      function closeManualModal() {
        document.getElementById("manualModal").classList.add("hidden");
        document.getElementById("manualModal").classList.remove("flex");
      }

      function filterStaffDropdown() {
        const reqSelect = document.getElementById("modalRequestSelect");
        const staffSelect = document.getElementById("modalStaffSelect");
        const val = reqSelect.value;
        const req = state.requests.find(r=>r.id===val);
        let filtered = state.staff.filter(s=>s.status==="Available");
        if (req) {
          filtered = filtered.filter(s=>{
            if (s.department !== req.type) return false;
            if (floorBased.has(s.department)) {
              if (typeof req.floor !== "number") return false;
              return s.floors.includes(req.floor);
            }
            return true;
          });
        }
        staffSelect.innerHTML = filtered.length ? filtered.map(s=>`<option value="${s.id}">${s.name} — ${s.department}</option>`).join("") : `<option value="">No compatible staff available</option>`;
      }

      // Event listeners
      document.getElementById("autoAssignToggle").addEventListener("click", ()=>{
        const input = document.getElementById("autoAssignInput");
        input.checked = !input.checked;
        state.autoAssign = input.checked;
        // Visuals
        document.querySelectorAll('[data-on]').forEach(el => el.setAttribute('data-on', input.checked ? 'true' : 'false'));
        const badge = document.getElementById("autoAssignBadge");
        if (state.autoAssign) {
          badge.textContent = "On";
          badge.className = "text-[11px] px-2 py-0.5 rounded border border-slate-800 text-emerald-300 bg-emerald-500/10";
        } else {
          badge.textContent = "Off";
          badge.className = "text-[11px] px-2 py-0.5 rounded border border-slate-800 text-slate-300 bg-slate-700/20";
        }
      });

      document.getElementById("simulateRequestBtn").addEventListener("click", ()=>{
        generateRandomRequest();
      });

      document.getElementById("manualAssignBtn").addEventListener("click", ()=> openManualModal());
      document.getElementById("modalClose").addEventListener("click", closeManualModal);
      document.getElementById("modalCancel").addEventListener("click", closeManualModal);
      document.getElementById("modalRequestSelect").addEventListener("change", filterStaffDropdown);

      document.getElementById("modalAssign").addEventListener("click", (e)=>{
        const btn = e.currentTarget;
        const icon = document.getElementById("modalAssignIcon");
        const reqId = document.getElementById("modalRequestSelect").value;
        const staffId = document.getElementById("modalStaffSelect").value;
        if (!reqId || !staffId) return;
        // Loading animation
        icon.setAttribute("data-lucide","loader-circle");
        btn.classList.add("opacity-90");
        btn.disabled = true;
        refreshIcons();
        icon.classList.add("animate-spin");
        setTimeout(()=>{
          const s = state.staff.find(x=>x.id===staffId);
          const r = state.requests.find(x=>x.id===reqId);
          if (s && r && r.status === "waiting" && s.status === "Available") {
            performAssignment(s, r, true);
          }
          icon.classList.remove("animate-spin");
          icon.setAttribute("data-lucide","check");
          refreshIcons();
          setTimeout(()=>{
            btn.disabled = false;
            btn.classList.remove("opacity-90");
            icon.setAttribute("data-lucide","check");
            closeManualModal();
            refreshIcons();
          }, 400);
        }, 600);
      });

      // Pause/Play live
      document.getElementById("pausePlayBtn").addEventListener("click", (e)=>{
        state.liveRunning = !state.liveRunning;
        const btn = e.currentTarget;
        btn.innerHTML = state.liveRunning
          ? `<i data-lucide="pause" class="w-4 h-4"></i><span class="hidden sm:inline">Pause</span>`
          : `<i data-lucide="play" class="w-4 h-4"></i><span class="hidden sm:inline">Start</span>`;
        document.getElementById("liveIndicator").style.display = state.liveRunning ? 'flex' : 'none';
        refreshIcons();
        if (state.liveRunning) {
          if (state.timers.loop) clearInterval(state.timers.loop);
          state.timers.loop = setInterval(loopTick, 2600);
        } else {
          if (state.timers.loop) clearInterval(state.timers.loop);
          state.timers.loop = null;
        }
      });

      // Initial seed: a couple of waiting requests
      function seedRequests() {
        const preset = [
          { type: "Housekeeping", floor: 4, room: 421, priority: "Normal" },
          { type: "Transport", floor: "Lobby", room: "LOB-0", priority: "High" },
          { type: "Room Service", floor: 3, room: 314, priority: "Low" },
        ];
        for (const p of preset) {
          const r = {
            id: nextReqId(),
            type: p.type,
            floor: p.floor,
            room: p.room,
            priority: p.priority,
            requestedAt: now() - Math.floor(Math.random()*8+1)*60000,
            assignedStaffId: null,
            status: "waiting",
            eta: null
          };
          state.requests.push(r);
        }
      }

      // Boot
      function boot() {
        seedRequests();
        updateUI();
        refreshIcons();
      }

      // Expose auto-assign switch visuals on load
      window.addEventListener("load", ()=>{
        // Sync toggle visuals
        document.querySelectorAll('[data-on]').forEach(el => el.setAttribute('data-on', state.autoAssign ? 'true' : 'false'));
        document.getElementById("liveIndicator").style.display = 'none';
        boot();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/80 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-100 tracking-tight text-sm font-medium">AT</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
<span className="text-slate-300">AeroTag Assist</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-slate-400">Admin</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-slate-300">Auto Assignment Simulator</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-1.5" id="liveIndicator">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-30"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-300">Live</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 hover:bg-slate-800/60 hover:text-slate-100 transition-colors px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" id="pausePlayBtn">
<i className="w-4 h-4" data-lucide="play"></i>
<span className="hidden sm:inline">Start</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-6">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">Smart Staff Auto-Assignment</h1>
<p className="mt-2 text-slate-400 text-sm md:text-base">System auto-assigns staff to requests based on availability, floors, roles, and workload. Supports live simulation and manual overrides.</p>
</div>

<section className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 md:p-5 mb-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-3">
<div className="group relative inline-flex items-center cursor-pointer select-none" id="autoAssignToggle">
<input checked="" className="sr-only" id="autoAssignInput" type="checkbox"/>
<div className="w-11 h-6 rounded-full bg-slate-800 border border-slate-700 transition-colors data-[on=true]:bg-indigo-600/80" data-on="true"></div>
<div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white/95 shadow-sm ring-1 ring-black/10 transition-all translate-x-0 data-[on=true]:translate-x-5" data-on="true"></div>
</div>
<label className="text-sm text-slate-300" htmlFor="autoAssignInput">Enable Auto-Assign</label>
<span className="text-[11px] px-2 py-0.5 rounded border border-slate-800 text-emerald-300 bg-emerald-500/10" id="autoAssignBadge">On</span>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 transition-colors px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" id="simulateRequestBtn">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Simulate New Guest Request
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-indigo-600/10 text-indigo-300 hover:bg-indigo-600/20 transition-colors px-3.5 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" id="manualAssignBtn">
<i className="w-4 h-4" data-lucide="hand"></i>
              Manually Assign Staff
            </button>
</div>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
<div className="text-[11px] uppercase tracking-wide text-slate-400">Active Staff</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" id="statActive">0</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
<div className="text-[11px] uppercase tracking-wide text-slate-400">Busy</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" id="statBusy">0</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
<div className="text-[11px] uppercase tracking-wide text-slate-400">In Queue</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" id="statQueue">0</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
<div className="text-[11px] uppercase tracking-wide text-slate-400">Avg Wait</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" id="statAvgWait">—</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<section className="xl:col-span-5 rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-100">Staff Live Status</h2>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="users"></i>
<span id="staffCount">0</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-900/60 border-b border-slate-800 text-slate-400">
<tr>
<th className="text-left px-4 py-2 font-medium">Staff Name</th>
<th className="text-left px-4 py-2 font-medium">Department</th>
<th className="text-left px-4 py-2 font-medium">Assigned Floor(s)</th>
<th className="text-left px-4 py-2 font-medium">Status</th>
<th className="text-left px-4 py-2 font-medium">Current Task</th>
<th className="text-left px-4 py-2 font-medium">Tasks Today</th>
<th className="text-left px-4 py-2 font-medium">Availability</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800" id="staffTbody"></tbody>
</table>
</div>
</section>

<section className="xl:col-span-7 rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-100">Incoming Requests Queue</h2>
<span className="text-[11px] px-2 py-0.5 rounded border border-slate-800 text-amber-300 bg-amber-500/10" id="queueBadge">0 waiting</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="activity"></i>
<span id="lastEvent">Initialized</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-900/60 border-b border-slate-800 text-slate-400">
<tr>
<th className="text-left px-4 py-2 font-medium">Request ID</th>
<th className="text-left px-4 py-2 font-medium">Room/Floor</th>
<th className="text-left px-4 py-2 font-medium">Service Type</th>
<th className="text-left px-4 py-2 font-medium">Priority</th>
<th className="text-left px-4 py-2 font-medium">Time Requested</th>
<th className="text-left px-4 py-2 font-medium">Assigned Staff</th>
<th className="text-left px-4 py-2 font-medium">Status</th>
<th className="text-left px-4 py-2 font-medium">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800" id="queueTbody"></tbody>
</table>
</div>
</section>
</div>

<section className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="list"></i>
<h3 className="text-sm font-medium tracking-tight text-slate-200">Recent Events</h3>
</div>
<ul className="max-h-56 overflow-auto divide-y divide-slate-800 text-sm" id="eventLog">

</ul>
</section>
</main>

<div className="hidden fixed inset-0 z-50 items-center justify-center" id="manualModal">
<div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg mx-4 rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
<div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="hand"></i>
<h4 className="text-base font-semibold tracking-tight text-slate-100">Manual Override Assignment</h4>
</div>
<button className="p-1.5 rounded-md border border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 text-slate-300" id="modalClose">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="block text-xs text-slate-400 mb-1.5">Select Request</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-800 bg-slate-950/60 text-slate-200 px-3 py-2 pr-9 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" id="modalRequestSelect">
</select>
<div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
<i className="w-4 h-4" data-lucide="chevrons-up-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Select Staff</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-800 bg-slate-950/60 text-slate-200 px-3 py-2 pr-9 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60" id="modalStaffSelect">
</select>
<div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
<i className="w-4 h-4" data-lucide="chevrons-up-down"></i>
</div>
</div>
<p className="mt-2 text-xs text-slate-400" id="modalHint">Filtered by department and floor compatibility.</p>
</div>
</div>
<div className="px-5 py-4 border-t border-slate-800 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 transition-colors px-3.5 py-2 text-sm text-slate-200" id="modalCancel">
<i className="w-4 h-4" data-lucide="undo-2"></i>
            Cancel
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-indigo-700 bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors px-3.5 py-2 text-sm" id="modalAssign">
<i className="w-4 h-4" data-lucide="check" id="modalAssignIcon"></i>
            Assign
          </button>
</div>
</div>
</div>


    </>
  );
}
