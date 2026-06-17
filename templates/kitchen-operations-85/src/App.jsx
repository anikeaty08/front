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



      // --- State Setup ---
      const baseData = {
        event: "new_order_created",
        order: {
          order_id: "ORD-1009",
          room_number: "304",
          service_type: "Room Service",
          request_details: "Chicken Sandwich and Orange Juice",
          timestamp: "2025-10-30T15:22:00Z",
          status: "Pending Acceptance",
          department: "Kitchen",
          floor: "3",
          priority: "Normal",
          guest_notes: "",
          delivery_preference: "Standard",
        },
        notification_broadcast: {
          trigger: "order_created",
          message: "New Room Service order from Room 304. Tap to accept.",
          sent_to_department: "Kitchen",
          sent_to_floor: "3",
          recipients: [
            { staff_id: "STF-101", name: "Ahmed", role: "Chef", status: "Available", has_accepted: false },
            { staff_id: "STF-102", name: "Ravi", role: "Chef", status: "Available", has_accepted: false },
            { staff_id: "STF-103", name: "Lina", role: "Sous Chef", status: "Available", has_accepted: false },
          ],
        },
        acceptance_flow: {
          action: "staff_accepts_order",
          accepted_by: {
            staff_id: "STF-101",
            name: "Ahmed",
            role: "Chef",
            department: "Kitchen",
            floor: "3",
            timestamp: "2025-10-30T15:23:12Z",
          },
          system_response: {
            update_order_status: "In Progress",
            assign_order_to: "STF-101",
            lock_order_for_others: true,
            update_notifications: [
              { staff_id: "STF-102", message: "Order ORD-1009 has been accepted by Ahmed.", status: "Locked" },
              { staff_id: "STF-103", message: "Order ORD-1009 has been accepted by Ahmed.", status: "Locked" },
            ],
          },
        },
        updated_order_state: {
          order_id: "ORD-1009",
          status: "In Progress",
          assigned_to: { staff_id: "STF-101", name: "Ahmed" },
          visible_to: ["admin", "Ahmed", "delivery_team"],
          last_updated: "2025-10-30T15:23:12Z",
        },
        staff_task_lists: {
          "STF-101": {
            name: "Ahmed",
            department: "Kitchen",
            active_tasks: [
              {
                order_id: "ORD-1009",
                room_number: "304",
                service_type: "Room Service",
                details: "Chicken Sandwich and Orange Juice",
                status: "In Progress",
                accepted_time: "2025-10-30T15:23:12Z",
                actions_available: ["Mark as Ready", "Add Note", "Cancel (with reason)"],
              },
              {
                order_id: "ORD-1002",
                room_number: "212",
                service_type: "Breakfast Combo",
                details: "Omelette, Toast, Coffee",
                status: "Ready for Delivery",
                accepted_time: "2025-10-30T13:45:18Z",
                actions_available: ["Mark as Delivered", "Report Issue"],
              },
            ],
          },
          "STF-102": {
            name: "Ravi",
            department: "Kitchen",
            available_tasks: [
              {
                order_id: "ORD-1009",
                room_number: "304",
                service_type: "Room Service",
                status: "Already Accepted",
                accepted_by: "Ahmed",
                disabled: true,
              },
            ],
          },
          "STF-103": {
            name: "Lina",
            department: "Kitchen",
            available_tasks: [
              {
                order_id: "ORD-1009",
                room_number: "304",
                service_type: "Room Service",
                status: "Already Accepted",
                accepted_by: "Ahmed",
                disabled: true,
              },
            ],
          },
        },
        system_settings: {
          acceptance_mode: "first_claim",
          max_pending_time: "10m",
          auto_escalate_to_admin: true,
          floor_based_notifications: true,
        },
      };

      const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

      function getInitialState(mode = "broadcast") {
        const state = deepClone(baseData);
        state.timeline = [
          { t: state.order.timestamp, text: "Order created (Room 304 • Room Service)" },
        ];
        state.notes = [];
        state.notifications = [
          { to: "Kitchen (Floor 3)", text: state.notification_broadcast.message, ts: state.order.timestamp },
        ];
        state.currentUser = "STF-101";
        state.completed = [];
        state.lockedBy = null;
        // Normalize: start in pending unless mode 'accepted'
        if (mode === "broadcast") {
          state.order.status = "Pending Acceptance";
          state.updated_order_state.status = "Pending Acceptance";
          state.updated_order_state.assigned_to = null;
          // Reset recipients accept flags
          state.notification_broadcast.recipients.forEach((r) => (r.has_accepted = false));
          // Clear Ahmed's ORD-1009 task; keep ORD-1002
          state.staff_task_lists["STF-101"].active_tasks = state.staff_task_lists["STF-101"].active_tasks.filter(
            (t) => t.order_id !== "ORD-1009"
          );
          // For Ravi/Lina make task available (not locked yet)
          ["STF-102", "STF-103"].forEach((id) => {
            state.staff_task_lists[id].available_tasks = [
              {
                order_id: "ORD-1009",
                room_number: "304",
                service_type: "Room Service",
                status: "Pending Acceptance",
                accepted_by: null,
                disabled: false,
              },
            ];
          });
        } else if (mode === "accepted") {
          state.order.status = "In Progress";
          state.updated_order_state.status = "In Progress";
          state.updated_order_state.assigned_to = deepClone(baseData.updated_order_state.assigned_to);
          state.lockedBy = "STF-101";
          state.notifications.push(
            { to: "Ravi", text: "Order ORD-1009 has been accepted by Ahmed.", ts: baseData.acceptance_flow.accepted_by.timestamp },
            { to: "Lina", text: "Order ORD-1009 has been accepted by Ahmed.", ts: baseData.acceptance_flow.accepted_by.timestamp }
          );
          state.timeline.push({ t: baseData.acceptance_flow.accepted_by.timestamp, text: "Accepted by Ahmed" });
        }
        return state;
      }

      let appState = getInitialState("broadcast");

      // --- DOM Helpers ---
      const $ = (sel) => document.querySelector(sel);
      const $$ = (sel) => Array.from(document.querySelectorAll(sel));

      function fmtTime(iso) {
        try {
          const d = new Date(iso);
          return d.toLocaleString([], { hour: "2-digit", minute: "2-digit", year: "numeric", month: "short", day: "2-digit" });
        } catch {
          return iso;
        }
      }

      function toast(message, type = "default") {
        const host = $("#toaster");
        const el = document.createElement("div");
        const colors = {
          default: "border-neutral-800 bg-neutral-950 text-neutral-200",
          success: "border-emerald-700/40 bg-emerald-900/20 text-emerald-200",
          warn: "border-amber-700/40 bg-amber-900/20 text-amber-200",
          danger: "border-rose-700/40 bg-rose-900/20 text-rose-200",
        };
        el.className = `rounded-md border ${colors[type]} shadow-sm px-3 py-2 text-[13px] flex items-center gap-2`;
        el.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            ${type === "success" ? '<path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/>' :
              type === "danger" ? '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>' :
              type === "warn" ? '<path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="M12 8v4"/><path d="M12 16h.01"/>' :
              '<path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/>'}
          </svg>
          <span>${message}</span>
        `;
        host.appendChild(el);
        setTimeout(() => {
          el.style.opacity = "0";
          el.style.transform = "translateY(6px)";
          el.style.transition = "all 200ms ease";
          setTimeout(() => el.remove(), 220);
        }, 2400);
      }

      // --- Rendering ---
      function renderRecipients() {
        const list = $("#recipientList");
        list.innerHTML = "";
        appState.notification_broadcast.recipients.forEach((r) => {
          const row = document.createElement("div");
          row.className = "p-3 flex items-center justify-between bg-neutral-950";
          const lockedByOther = appState.lockedBy && appState.lockedBy !== r.staff_id;
          const isCurrent = appState.currentUser === r.staff_id;
          row.innerHTML = `
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80"STF-101" ? "https://images.unsplash.com/photo-1602471615287-8ae1f699f0de?q=80&w=120&auto=format&fit=crop" :
                           r.staff_id === "STF-102" ? "https://images.unsplash.com/photo-1545996124-0501ebae84d3?q=80&w=120&auto=format&fit=crop" :
                           "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=120&auto=format&fit=crop"}"
                   class="h-8 w-8 rounded-full object-cover border border-neutral-800" alt="${r.name}" />
              <div class="flex flex-col">
                <div class="flex items-center gap-2">
                  <span class="text-[14px] font-medium">${r.name}</span>
                  <span class="text-[11px] text-neutral-500">${r.role}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="inline-flex items-center gap-1 text-[11px] text-neutral-400">
                    <span class="h-1.5 w-1.5 rounded-full ${r.status === "Available" ? "bg-emerald-500" : "bg-neutral-600"}"></span>
                    ${r.status}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              ${
                appState.order.status === "Pending Acceptance"
                  ? isCurrent
                    ? `<button class="primary-accept inline-flex items-center gap-2 h-8 px-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m20 6-11 11-5-5"/></svg>
                        Accept
                       </button>`
                    : `<span class="text-[12px] text-neutral-500">Awaiting</span>`
                  : lockedByOther
                    ? `<span class="inline-flex items-center gap-1.5 text-[12px] rounded-md px-2 py-1 border border-neutral-800 bg-neutral-900 text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        Locked by ${appState.notification_broadcast.recipients.find(rr=>rr.staff_id===appState.lockedBy)?.name || "—"}
                       </span>`
                    : r.has_accepted
                      ? `<span class="inline-flex items-center gap-1.5 text-[12px] rounded-md px-2 py-1 border border-emerald-700/40 bg-emerald-900/20 text-emerald-300">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/></svg>
                          Accepted
                        </span>`
                      : `<span class="text-[12px] text-neutral-500">—</span>`
              }
            </div>
          `;
          const btn = row.querySelector(".primary-accept");
          if (btn) btn.addEventListener("click", acceptOrderByCurrentUser);
          list.appendChild(row);
        });
      }

      function renderNotifications() {
        const feed = $("#notificationsFeed");
        feed.innerHTML = "";
        if (appState.notifications.length === 0) {
          feed.innerHTML = `<div class="text-neutral-400">No notifications.</div>`;
          return;
        }
        appState.notifications.slice(-6).reverse().forEach((n) => {
          const item = document.createElement("div");
          item.className = "rounded-md border border-neutral-900 bg-neutral-950 p-3";
          item.innerHTML = `
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[14px] w-[14px] text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 17h5l-1.405-1.405C18.21 14.21 18 13.11 18 12V8a6 6 0 1 0-12 0v4c0 1.11-.21 2.21-.595 3.595L4 17h5"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                <span class="text-neutral-200">${n.text}</span>
              </div>
              <span class="text-[11px] text-neutral-500">${fmtTime(n.ts)}</span>
            </div>
            <div class="text-[12px] text-neutral-500 mt-1">To: ${n.to}</div>
          `;
          feed.appendChild(item);
        });
        $("#notifDot").style.display = appState.notifications.length ? "block" : "none";
      }

      function renderOrderHeader() {
        const pill = $("#orderStatusPill");
        const status = appState.order.status;
        const classes = {
          "Pending Acceptance": "border-neutral-800 bg-neutral-900 text-neutral-300",
          "In Progress": "border-amber-700/40 bg-amber-900/20 text-amber-200",
          "Ready for Delivery": "border-emerald-700/40 bg-emerald-900/20 text-emerald-200",
          "Cancelled": "border-rose-700/40 bg-rose-900/20 text-rose-200",
          "Delivered": "border-emerald-700/40 bg-emerald-900/20 text-emerald-200",
        }[status] || "border-neutral-800 bg-neutral-900 text-neutral-300";
        pill.className = `inline-flex items-center gap-1.5 text-[12px] rounded-md px-2 py-1 border ${classes}`;
        pill.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            ${status === "In Progress" ? '<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/>' :
               status === "Ready for Delivery" ? '<path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/>' :
               status === "Cancelled" ? '<path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>' :
               '<circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/>'}
          </svg>
          ${status}
        `;
        // Banner accept visibility for current user
        $$(".primary-accept").forEach((b) => (b.style.display = "none"));
        const currentRecipient = appState.notification_broadcast.recipients.find((r) => r.staff_id === appState.currentUser);
        if (status === "Pending Acceptance" && currentRecipient?.status === "Available") {
          ["acceptFromBanner", "acceptFromCard", "acceptFromBroadcast"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.style.display = "inline-flex";
          });
        }
        // Meta
        $("#orderMetaLine").textContent = `${appState.order.service_type} • ${appState.order.priority} Priority • ${appState.order.delivery_preference} Delivery`;
        $("#guestNotes").textContent = appState.order.guest_notes?.trim() ? appState.order.guest_notes : "No additional notes";
        $("#assignedToPill").style.display = appState.updated_order_state.assigned_to ? "inline-flex" : "none";
        if (appState.updated_order_state.assigned_to) {
          $("#assignedToPill").innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
            Assigned to ${appState.updated_order_state.assigned_to.name}
          `;
        }
        $("#lastUpdated").textContent = appState.updated_order_state.last_updated ? fmtTime(appState.updated_order_state.last_updated) : "—";
      }

      function renderTimeline() {
        const t = $("#timeline");
        t.innerHTML = "";
        appState.timeline.slice().reverse().forEach((e, idx) => {
          const row = document.createElement("div");
          row.className = "flex items-start gap-3";
          row.innerHTML = `
            <div class="mt-0.5">
              <div class="h-2.5 w-2.5 rounded-full ${idx === 0 ? "bg-indigo-400" : "bg-neutral-700"}"></div>
            </div>
            <div class="flex-1">
              <div class="text-[13px] text-neutral-200">${e.text}</div>
              <div class="text-[11px] text-neutral-500">${fmtTime(e.t)}</div>
            </div>
          `;
          t.appendChild(row);
        });
      }

      function createTaskCard(task, opts = {}) {
        const wrap = document.createElement("div");
        wrap.className = "rounded-md border border-neutral-900 bg-neutral-950 p-3";
        const statusPill =
          task.status === "In Progress" ? "border-amber-700/40 bg-amber-900/20 text-amber-200" :
          task.status?.includes("Ready") ? "border-emerald-700/40 bg-emerald-900/20 text-emerald-200" :
          task.status === "Cancelled" ? "border-rose-700/40 bg-rose-900/20 text-rose-200" :
          "border-neutral-800 bg-neutral-900 text-neutral-300";
        wrap.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px] text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3v8a2 2 0 0 0 2 2h1V3"/><path d="M7 3v10"/><path d="M20 3v9a3 3 0 0 1-3 3h-1V3"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[14px] font-medium">#${task.order_id} • Room ${task.room_number || "—"}</span>
                <span class="text-[12px] text-neutral-400">${task.service_type || ""}${task.details ? " • " + task.details : ""}</span>
              </div>
            </div>
            <span class="inline-flex items-center gap-1.5 text-[12px] rounded-md px-2 py-1 border ${statusPill}">
              ${task.status}
            </span>
          </div>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            ${
              (opts.scope === "mine" && task.order_id === "ORD-1009" && appState.order.status === "In Progress")
                ? `<button data-act="ready" class="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 13v9"/><path d="M16 22v-9"/><path d="M5 22h14"/><path d="M19 14H5"/><path d="M7.5 6.5a3.5 3.5 0 1 1 6.6-1.8 3.5 3.5 0 1 1 4.4 4.4"/></svg>
                    Mark as Ready
                   </button>
                   <button data-act="note" class="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 6h9"/><path d="M8 12h9"/><path d="M8 18h9"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>
                    Add Note
                   </button>
                   <button data-act="cancel" class="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px] text-rose-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    Cancel
                   </button>`
                : (opts.scope === "mine" && task.order_id === "ORD-1002" && task.status === "Ready for Delivery")
                  ? `<button data-act="delivered" class="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M14 2v20"/><path d="M10 12h.01"/></svg>
                      Mark as Delivered
                     </button>
                     <button data-act="issue" class="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                      Report Issue
                     </button>`
                  : (opts.scope === "available
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-neutral-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between gap-4">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 grid place-items-center tracking-tight text-sm font-semibold text-neutral-100">HK</div>
<div className="hidden sm:flex flex-col">
<span className="text-[17px] tracking-tight font-semibold text-neutral-100">Kitchen Ops Console</span>
<span className="text-[12px] text-neutral-400">Floor-based routing • First-claim acceptance</span>
</div>
</div>

<div className="flex-1 hidden md:flex">
<div className="w-full max-w-xl relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">

<svg className="h-[18px] w-[18px] text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
</div>
<input className="w-full pl-10 pr-28 h-10 rounded-md bg-neutral-900/80 border border-neutral-800 placeholder-neutral-500 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-neutral-700" id="searchInput" placeholder="Search orders, rooms, staff..."/>
<div className="absolute right-1 top-1">
<button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-[12px] text-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="filterBtn">

<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9v7l4 2v-9l8-9Z"></path></svg>
                    Filters
                  </button>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="replayBtn">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                Replay Broadcast
              </button>
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="fastForwardBtn">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>
                Jump to Accepted
              </button>
<button className="relative h-9 w-9 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 grid place-items-center" id="notificationsBtn">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<span className="absolute top-1 right-1 h-2 w-2 bg-indigo-500 rounded-full" id="notifDot"></span>
</button>
<button className="h-9 w-9 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 grid place-items-center" id="settingsBtn">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l-2-2M21 21l-2-2M5 19l-2 2M21 3l-2 2"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>

<div className="ml-2 hidden sm:flex items-center gap-1 p-1 rounded-md bg-neutral-900 border border-neutral-800">
<button className="staff-btn inline-flex items-center gap-2 px-2.5 h-8 rounded-[6px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" data-staff="STF-101">
<img alt="Ahmed" className="h-5 w-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-[13px]">Ahmed</span>
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
</button>
<button className="staff-btn inline-flex items-center gap-2 px-2.5 h-8 rounded-[6px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" data-staff="STF-102">
<img alt="Ravi" className="h-5 w-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="text-[13px]">Ravi</span>
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
</button>
<button className="staff-btn inline-flex items-center gap-2 px-2.5 h-8 rounded-[6px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" data-staff="STF-103">
<img alt="Lina" className="h-5 w-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="text-[13px]">Lina</span>
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
</button>
</div>
</div>
</div>
</div>
</header>

<div className="border-b border-neutral-900 bg-neutral-950/60" id="banner">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 grid place-items-center">

<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 13v9"></path><path d="M16 22v-9"></path><path d="M5 22h14"></path><path d="M19 14H5"></path><path d="M7.5 6.5a3.5 3.5 0 1 1 6.6-1.8 3.5 3.5 0 1 1 4.4 4.4"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">New Room Service order from Room 304</span>
<span className="text-[12px] text-neutral-400">Tap Accept to claim. First to claim locks it for others.</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="primary-accept hidden items-center gap-2 h-9 px-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="acceptFromBanner">

<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                Accept
              </button>
<button className="items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] hidden sm:inline-flex focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="viewDetailsBtn">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>
                View details
              </button>
</div>
</div>
</div>
</div>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3 space-y-6">

<section className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 1 1-8.48 0"></path><path d="M19.07 4.93a10 10 0 1 1-14.14 0"></path></svg>
<h3 className="text-[15px] font-semibold tracking-tight">Broadcast to Kitchen • Floor 3</h3>
</div>
<span className="text-[12px] text-neutral-400" id="broadcastTime">now</span>
</div>
<div className="p-4 space-y-4">
<div className="text-[13px] text-neutral-300" id="broadcastMessage">New Room Service order from Room 304. Tap to accept.</div>
<div className="rounded-md border border-neutral-900/80 divide-y divide-neutral-900 overflow-hidden">

<div id="recipientList"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">Acceptance mode: First-claim</span>
<button className="primary-accept hidden inline-flex items-center gap-2 h-9 px-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="acceptFromBroadcast">

<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 1 1 4 0v7a8 8 0 1 1-16 0V5a2 2 0 1 1 4 0v6"></path><path d="M7 11V6a2 2 0 1 1 4 0"></path></svg>
                      Accept Order
                    </button>
</div>
</div>
</section>

<section className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 17h5l-1.405-1.405C18.21 14.21 18 13.11 18 12V8a6 6 0 1 0-12 0v4c0 1.11-.21 2.21-.595 3.595L4 17h5"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
<h3 className="text-[15px] font-semibold tracking-tight">Notifications</h3>
</div>
<div className="p-3 space-y-2 text-[13px]" id="notificationsFeed"></div>
</section>
</aside>

<section className="lg:col-span-6 space-y-6">

<div className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 grid place-items-center">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 3v8a2 2 0 0 0 2 2h1V3"></path><path d="M7 3v10"></path><path d="M20 3v9a3 3 0 0 1-3 3h-1V3"></path></svg>
</div>
<div className="flex flex-col">
<h3 className="text-[18px] tracking-tight font-semibold text-neutral-100">Order ORD-1009 • Room 304</h3>
<span className="text-[12px] text-neutral-400" id="orderMetaLine">Room Service • Normal Priority • Standard Delivery</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-[12px] rounded-md px-2 py-1 border border-neutral-800 bg-neutral-900 text-neutral-300" id="orderStatusPill">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>
                      Pending Acceptance
                    </span>
</div>
</div>
<div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-md border border-neutral-900/80 p-3">
<div className="text-[12px] text-neutral-400 mb-1">Request</div>
<div className="text-[14px]" id="orderDetailsText">Chicken Sandwich and Orange Juice</div>
</div>
<div className="rounded-md border border-neutral-900/80 p-3">
<div className="text-[12px] text-neutral-400 mb-1">Guest Notes</div>
<div className="text-[14px] text-neutral-400 italic" id="guestNotes">No additional notes</div>
</div>
</div>
<div className="px-4 pb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-1.5 text-[12px] text-neutral-400">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 10.61a8 8 0 1 0-13.73 5.36L12 22l4.89-6.03a8 8 0 0 0 3.95-5.36Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Floor 3
                    </div>
<div className="inline-flex items-center gap-1.5 text-[12px] text-neutral-400">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Visible: admin, Ahmed, delivery_team
                    </div>
</div>
<div className="flex items-center gap-2">
<button className="primary-accept hidden inline-flex items-center gap-2 h-9 px-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="acceptFromCard">

<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                      Accept
                    </button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="rejectBtn">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                      Decline
                    </button>
</div>
</div>
</div>

<div className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight">My Tasks</h3>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[12px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="tasksFilter">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
                      Filters
                    </button>
</div>
</div>
<div className="p-4 grid grid-cols-1 gap-3" id="myTasks"></div>
<div className="p-3 border-t border-neutral-900 hidden" id="completedTasks">
<div className="text-[12px] text-neutral-400 mb-2">Recently completed</div>
<div className="space-y-2" id="completedList"></div>
</div>
</div>
</section>

<aside className="lg:col-span-3 space-y-6">

<section className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight">Order Details</h3>
<span className="hidden items-center gap-1.5 text-[12px] rounded-md px-2 py-1 border border-emerald-700/40 bg-emerald-900/20 text-emerald-300" id="assignedToPill">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Assigned to Ahmed
                  </span>
</div>
<div className="p-4 space-y-3 text-[13px]">
<div className="flex items-center justify-between">
<span className="text-neutral-400">Order ID</span>
<span className="text-neutral-200">ORD-1009</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Room</span>
<span className="text-neutral-200">304</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Service Type</span>
<span className="text-neutral-200">Room Service</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Priority</span>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-neutral-800 bg-neutral-900 text-neutral-300" id="priorityPill">Normal</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Delivery</span>
<span className="text-neutral-200">Standard</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Department</span>
<span className="text-neutral-200">Kitchen</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Last Updated</span>
<span className="text-neutral-200" id="lastUpdated">—</span>
</div>
</div>
<div className="px-4 pb-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="addNoteBtn">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h9"></path><path d="M8 12h9"></path><path d="M8 18h9"></path><path d="M3 6h.01M3 12h.01M3 18h.01"></path></svg>
                    Add Note
                  </button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-rose-500/30" id="cancelBtn">

<svg className="h-[16px] w-[16px] text-rose-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                    Cancel (reason)
                  </button>
</div>
</section>

<section className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="17" cy="12" r="1"></circle><path d="M7 12h10"></path><path d="M12 5v14"></path></svg>
<h3 className="text-[15px] font-semibold tracking-tight">Activity</h3>
</div>
<div className="p-4 space-y-3 text-[13px]" id="timeline"></div>
</section>

<section className="rounded-lg bg-neutral-950/60 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900">
<h3 className="text-[15px] font-semibold tracking-tight">Quick Actions</h3>
</div>
<div className="p-4 grid grid-cols-1 gap-2">
<button className="inline-flex items-center justify-between h-11 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed" id="markReadyBtn">
<span className="inline-flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 13v9"></path><path d="M16 22v-9"></path><path d="M5 22h14"></path><path d="M19 14H5"></path><path d="M7.5 6.5a3.5 3.5 0 1 1 6.6-1.8 3.5 3.5 0 1 1 4.4 4.4"></path></svg>
                      Mark as Ready
                    </span>

<svg className="h-[18px] w-[18px] text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</button>
<button className="inline-flex items-center justify-between h-11 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed" id="markDeliveredBtn">
<span className="inline-flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="18" x="3" y="2"></rect><path d="M14 2v20"></path><path d="M10 12h.01"></path></svg>
                      Mark as Delivered (ORD-1002)
                    </span>

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</section>
</aside>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 hidden" id="noteModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative max-w-lg mx-auto mt-24 rounded-lg bg-neutral-950 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
<h3 className="text-[15px] font-semibold tracking-tight">Add Note</h3>
</div>
<button className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 grid place-items-center" data-close="noteModal">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-4 space-y-3">
<textarea className="w-full h-28 rounded-md bg-neutral-900 border border-neutral-800 placeholder-neutral-500 text-[14px] p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-neutral-700" id="noteText" placeholder="Add a brief, helpful note for the delivery team..."></textarea>
</div>
<div className="p-4 border-t border-neutral-900 flex items-center justify-end gap-2">
<button className="h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40" data-close="noteModal">Cancel</button>
<button className="h-9 px-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="saveNoteBtn">Save Note</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="cancelModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative max-w-lg mx-auto mt-24 rounded-lg bg-neutral-950 border border-neutral-900 overflow-hidden">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-rose-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
<h3 className="text-[15px] font-semibold tracking-tight">Cancel Order</h3>
</div>
<button className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-rose-500/30 grid place-items-center" data-close="cancelModal">

<svg className="h-[16px] w-[16px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-4 space-y-3">
<div className="text-[13px] text-neutral-300">Provide a reason so we can alert the front desk appropriately.</div>
<select className="w-full h-10 rounded-md bg-neutral-900 border border-neutral-800 text-[14px] px-3 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-neutral-700" id="cancelReason">
<option value="">Select a reason</option>
<option>Out of stock</option>
<option>Guest canceled</option>
<option>Reassign to different department</option>
<option>Other</option>
</select>
<textarea className="w-full h-24 rounded-md bg-neutral-900 border border-neutral-800 placeholder-neutral-500 text-[14px] p-3 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-neutral-700" id="cancelNote" placeholder="Additional details (optional)"></textarea>
</div>
<div className="p-4 border-t border-neutral-900 flex items-center justify-end gap-2">
<button className="h-9 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 text-[13px] focus:outline-none focus:ring-2 focus:ring-rose-500/30" data-close="cancelModal">Dismiss</button>
<button className="h-9 px-3 rounded-md bg-rose-500 text-white hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30" id="confirmCancelBtn">Confirm Cancel</button>
</div>
</div>
</div>

<div className="fixed bottom-4 right-4 z-50 space-y-2" id="toaster"></div>

    </>
  );
}
