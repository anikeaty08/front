import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Data (derived from provided JSON)
    const HELP = {
      id: "aerotag_help",
      accent: "#2563EB",
      emergencies: {
        red: "#EF4444",
        blue: "#3B82F6",
        gray: "#9CA3AF"
      },
      categories: [
        {
          title: "Room Service / Orders",
          description: "Track your food, drinks, and essentials. Modify or cancel orders easily.",
          action: "open_room_service",
          icon: "utensils",
          color: {bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200/50"}
        },
        {
          title: "Housekeeping & Maintenance",
          description: "Request room cleaning, bed linen change, or trash pickup. Report AC, lights, or TV issues.",
          action: "open_housekeeping",
          icon: "sparkles",
          color: {bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200/50"}
        },
        {
          title: "Laundry & Amenities",
          description: "Schedule pickup or check status. Request towels, toiletries, chargers, etc.",
          action: "open_laundry",
          icon: "shirt",
          color: {bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200/50"}
        },
        {
          title: "Transport & Airport Transfers",
          description: "Book taxis, airport transfers, or shuttles. Track drivers in real-time.",
          action: "open_transport",
          icon: "car",
          color: {bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200/50"}
        }
      ]
    };

    // Utilities
    const $ = (sel, ctx=document) => ctx.querySelector(sel);
    const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

    function showToast(message, intent = "default") {
      const host = $("#toastHost");
      const wrap = document.createElement("div");
      wrap.className = "pointer-events-auto w-[92%] max-w-sm rounded-xl border shadow bg-white flex items-center gap-2 px-3.5 py-2.5";
      wrap.className += " " + (intent === "success" ? "border-emerald-200/80" :
                                intent === "danger" ? "border-red-200/80" :
                                intent === "info" ? "border-blue-200/80" : "border-slate-200/80");

      const icon = document.createElement("i");
      icon.setAttribute("data-lucide", intent === "success" ? "check-circle2" :
                                   intent === "danger" ? "alert-triangle" :
                                   intent === "info" ? "info" : "bell");
      icon.className = "w-4.5 h-4.5 " + (intent === "success" ? "text-emerald-600" :
                                          intent === "danger" ? "text-red-600" :
                                          intent === "info" ? "text-blue-600" : "text-slate-600");

      const text = document.createElement("div");
      text.className = "text-[13px] text-slate-800 flex-1";
      text.textContent = message;

      const close = document.createElement("button");
      close.className = "w-7 h-7 rounded-full hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center";
      const x = document.createElement("i");
      x.setAttribute("data-lucide","x");
      x.className = "w-4.5 h-4.5 text-slate-500";
      close.appendChild(x);
      close.onclick = () => {
        wrap.style.opacity = "0";
        wrap.style.transform = "translateY(6px)";
        setTimeout(() => wrap.remove(), 160);
      };

      wrap.append(icon, text, close);
      host.appendChild(wrap);
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } , icons: {} , nameAttr: "data-lucide" });
      // Auto dismiss
      setTimeout(() => {
        if (!document.body.contains(wrap)) return;
        wrap.style.opacity = "0";
        wrap.style.transform = "translateY(6px)";
        setTimeout(() => wrap.remove(), 160);
      }, 3200);
    }

    // Bottom Sheet control
    const sheet = $("#sheet");
    const sheetBackdrop = $("#sheetBackdrop");
    const sheetContainer = $("#sheet > div.absolute.inset-x-0.bottom-0");
    const sheetTitle = $("#sheetTitle");
    const sheetDesc = $("#sheetDesc");
    const sheetIcon = $("#sheetIcon");
    const sheetHint = $("#sheetHint");

    function openSheet({ title, description, icon, color }) {
      sheet.classList.remove("hidden");
      setTimeout(() => {
        sheetBackdrop.style.opacity = "1";
        sheetContainer.style.transform = "translateY(0)";
      }, 10);

      sheetTitle.textContent = title;
      sheetDesc.textContent = description;
      sheetIcon.className = `w-10 h-10 rounded-lg ${color?.bg || "bg-slate-50"} ${color?.text || "text-slate-700"} flex items-center justify-center border ${color?.border || "border-slate-200/70"}`;
      sheetIcon.innerHTML = `<i data-lucide="${icon || "help-circle"}" class="w-5 h-5"></i>`;
      sheetHint.textContent = title.includes("Transport") ? "Tip: Add flight details to improve pickup accuracy." :
                              title.includes("Laundry") ? "Tip: Mark delicate items for special handling." :
                              title.includes("Housekeeping") ? "Tip: Set a preferred time that suits your schedule." :
                              "Tip: You can modify or cancel active requests anytime from Status.";
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    }

    function closeSheet() {
      sheetBackdrop.style.opacity = "0";
      sheetContainer.style.transform = "translateY(100%)";
      setTimeout(() => sheet.classList.add("hidden"), 180);
    }

    // Search filtering
    function applySearchFilter(q) {
      const term = q.trim().toLowerCase();
      const cards = $$(".category-card");
      let visibleCount = 0;
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const show = !term || text.includes(term);
        card.style.display = show ? "" : "none";
        if (show) visibleCount++;
      });
      // WhatsApp section visibility based on search
      const whatsapp = $("#whToggle")?.closest("div.w-full.rounded-xl.border");
      if (whatsapp) {
        const text = whatsapp.textContent.toLowerCase();
        const show = !term || text.includes(term);
        whatsapp.style.display = show ? "" : "none";
        if (show) visibleCount++;
      }
      if (visibleCount === 0) {
        showToast("No matches found. Try a different keyword.", "info");
      }
    }

    // WhatsApp Toggle
    function setWhatsAppToggle(enabled) {
      const btn = $("#whToggle");
      if (!btn) return;
      btn.setAttribute("aria-pressed", enabled ? "true" : "false");
      btn.classList.toggle("bg-slate-100", !enabled);
      btn.classList.toggle("bg-emerald-500", enabled);
      btn.classList.toggle("border-slate-200/70", !enabled);
      btn.classList.toggle("border-emerald-600", enabled);
      const dot = btn.querySelector(".dot");
      dot.style.left = enabled ? "calc(100% - 1.25rem)" : "0.25rem";
      dot.classList.toggle("border-slate-300", !enabled);
      dot.classList.toggle("border-emerald-100", enabled);
      dot.classList.toggle("shadow", true);
      localStorage.setItem("whatsapp_enabled", enabled ? "1" : "0");
    }

    // Events
    window.addEventListener("DOMContentLoaded", () => {
      // Initialize Lucide icons with stroke width
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Back button
      $("#btnBack").addEventListener("click", () => history.back());

      // Notifications
      $("#btnNotifications").addEventListener("click", () => showToast("Notifications center coming soon", "info"));

      // Chat quick action
      $("#openChat").addEventListener("click", () => {
        showToast("Starting chat with staff…", "success");
      });

      // Category open -> bottom sheet
      $$("#categoriesList .category-card").forEach((card, idx) => {
        card.addEventListener("click", () => {
          const data = HELP.categories[idx];
          openSheet({
            title: data.title,
            description: data.description,
            icon: data.icon,
            color: data.color
          });
        });
      });

      // Emergency scroll
      $("#scrollToEmergency").addEventListener("click", () => {
        $("#emergencySection").scrollIntoView({ behavior: "smooth", block: "start" });
      });

      // FAQ toggles
      $$(".faq-item > button").forEach(btn => {
        btn.addEventListener("click", () => {
          const ans = btn.querySelector(".answer");
          const icon = btn.querySelector('[data-lucide="chevron-down"]');
          const isOpen = !ans.classList.contains("hidden");
          $$(".faq-item .answer").forEach(a => a.classList.add("hidden"));
          $$('.faq-item [data-lucide="chevron-down"]').forEach(i => i.style.transform = "rotate(0deg)");
          if (!isOpen) {
            ans.classList.remove("hidden");
            icon.style.transform = "rotate(180deg)";
            icon.style.transition = "transform 0.18s ease";
          }
        });
      });

      // Emergency actions
      $$(".emg-btn, [data-action='call_reception']").forEach(btn => {
        btn.addEventListener("click", () => {
          const act = btn.getAttribute("data-action");
          const map = {
            call_ambulance: "Calling Ambulance…",
            call_fire: "Calling Fire Department…",
            call_police: "Calling Police…",
            call_security: "Calling Hotel Security…",
            call_reception: "Calling Reception…"
          };
          showToast(map[act] || "Placing call…", "danger");
        });
      });

      // Quick actions
      $$("[data-action='open_chat']").forEach(btn => btn.addEventListener("click", () => showToast("Starting chat with staff…", "success")));
      $$("[data-action='request_callback']").forEach(btn => btn.addEventListener("click", () => showToast("Callback requested. We’ll reach out shortly.", "success")));

      // WhatsApp enable button
      $$("[data-action='enable_whatsapp_updates']").forEach(btn => btn.addEventListener("click", () => {
        setWhatsAppToggle(true);
        showToast("WhatsApp updates enabled", "success");
      }));

      // Preferences
      $("#prefBtn").addEventListener("click", () => {
        openSheet({
          title: "WhatsApp Preferences",
          description: "Choose which notifications to receive and how often.",
          icon: "sliders-horizontal",
          color: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200/50" }
        });
      });

      // WhatsApp toggle init
      const enabled = localStorage.getItem("whatsapp_enabled") === "1";
      setWhatsAppToggle(enabled);
      $("#whToggle").addEventListener("click", () => {
        const current = $("#whToggle").getAttribute("aria-pressed") === "true";
        setWhatsAppToggle(!current);
        showToast(!current ? "WhatsApp updates enabled" : "WhatsApp updates disabled", !current ? "success" : "info");
      });

      // Bottom sheet controls
      $("#closeSheet").addEventListener("click", closeSheet);
      $("#sheetBackdrop").addEventListener("click", closeSheet);

      // Search
      const search = $("#searchInput");
      const clearBtn = $("#clearSearch");
      search.addEventListener("input", (e) => {
        const q = e.target.value;
        clearBtn.classList.toggle("hidden", q.length === 0);
        applySearchFilter(q);
      });
      clearBtn.addEventListener("click", () => {
        search.value = "";
        clearBtn.classList.add("hidden");
        applySearchFilter("");
        search.focus();
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex items-start justify-center">
<div className="w-full max-w-md min-h-screen bg-white shadow-sm ring-1 ring-slate-200/60 relative flex flex-col" style={{borderRadius: '18px'}}>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200/70">
<div className="px-4 pt-[max(12px,env(safe-area-inset-top))] pb-3 flex items-center gap-3">
<button aria-label="Back" className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 active:bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" id="btnBack">
<i className="w-5 h-5 text-slate-700" data-lucide="chevron-left"></i>
</button>
<div className="flex-1">
<div className="text-[22px] leading-tight tracking-tight font-semibold text-slate-900">Help</div>
<div className="text-[12px] leading-4 text-slate-500">Need Assistance? We’re here to help!</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Notifications" className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 active:bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" id="btnNotifications">
<i className="w-5 h-5 text-slate-700" data-lucide="bell"></i>
</button>
<button aria-label="Profile" className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 active:bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" id="btnProfile">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-[11px] font-medium tracking-tight">AT</span>
</button>
</div>
</div>

<div className="px-4 pb-3">
<label className="block w-full">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" data-lucide="search"></i>
<input className="w-full h-11 pl-10 pr-10 rounded-xl bg-slate-50/90 border border-slate-200/70 text-[14px] placeholder:text-slate-400 focus:bg-white focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 outline-none transition" id="searchInput" placeholder="Search help, requests, services..." type="text"/>
<button className="hidden absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-slate-100 text-slate-500 items-center justify-center" id="clearSearch">
<i className="w-4.5 h-4.5" data-lucide="x"></i>
</button>
</div>
</label>
</div>
</header>

<section className="px-4 pt-3">
<div className="w-full rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 shadow-sm overflow-hidden">
<div className="flex items-center gap-3 p-4">
<div className="flex-1">
<h2 className="text-[18px] tracking-tight font-semibold text-slate-900">We’re here to help</h2>
<p className="text-[13px] text-slate-600">Find answers, track requests, or contact staff instantly.</p>
</div>
<img alt="Support Illustration" className="w-20 h-20 object-cover rounded-xl border border-slate-200/70" src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3.5 h-9 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-700 active:bg-blue-800 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" id="scrollToEmergency">
<i className="w-4.5 h-4.5" data-lucide="life-buoy"></i>
                Emergency
              </button>
<button className="inline-flex items-center gap-2 px-3.5 h-9 rounded-lg border border-slate-200/70 bg-white text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" id="openChat">
<i className="w-4.5 h-4.5" data-lucide="message-circle"></i>
                Chat with Staff
              </button>
</div>
</div>
</div>
</section>

<section className="px-4 mt-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[15px] tracking-tight font-semibold text-slate-900">Quick actions</h3>
<span className="text-[12px] text-slate-500">Fast access</span>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="shrink-0 inline-flex items-center gap-2 px-3.5 h-9 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-700 active:bg-blue-800 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" data-action="open_chat">
<i className="w-4.5 h-4.5" data-lucide="message-square"></i>
            Chat with Staff
          </button>
<button className="shrink-0 inline-flex items-center gap-2 px-3.5 h-9 rounded-lg border border-slate-200/70 bg-white text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" data-action="call_reception">
<i className="w-4.5 h-4.5" data-lucide="phone"></i>
            Call Reception
          </button>
<button className="shrink-0 inline-flex items-center gap-2 px-3.5 h-9 rounded-lg border border-slate-200/70 bg-white text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" data-action="request_callback">
<i className="w-4.5 h-4.5" data-lucide="reply"></i>
            Request Callback
          </button>
</div>
</section>

<section className="px-4 mt-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[15px] tracking-tight font-semibold text-slate-900">Popular help</h3>
<span className="text-[12px] text-slate-500">Services &amp; requests</span>
</div>
<div className="space-y-3" id="categoriesList">

<button className="category-card w-full text-left rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 active:bg-slate-100 transition shadow-sm p-4 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-action="open_room_service">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/50">
<i className="w-5 h-5" data-lucide="utensils"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900">Room Service / Orders</h4>
<i className="w-4.5 h-4.5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</div>
<p className="mt-0.5 text-[13px] text-slate-600">Track your food, drinks, and essentials. Modify or cancel orders easily.</p>
</div>
</div>
</button>

<button className="category-card w-full text-left rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 active:bg-slate-100 transition shadow-sm p-4 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-action="open_housekeeping">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/50">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900">Housekeeping &amp; Maintenance</h4>
<i className="w-4.5 h-4.5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</div>
<p className="mt-0.5 text-[13px] text-slate-600">Request room cleaning, bed linen change, or trash pickup. Report AC, lights, or TV issues.</p>
</div>
</div>
</button>

<button className="category-card w-full text-left rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 active:bg-slate-100 transition shadow-sm p-4 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-action="open_laundry">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/50">
<i className="w-5 h-5" data-lucide="shirt"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900">Laundry &amp; Amenities</h4>
<i className="w-4.5 h-4.5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</div>
<p className="mt-0.5 text-[13px] text-slate-600">Schedule pickup or check status. Request towels, toiletries, chargers, etc.</p>
</div>
</div>
</button>

<button className="category-card w-full text-left rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 active:bg-slate-100 transition shadow-sm p-4 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-action="open_transport">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200/50">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900">Transport &amp; Airport Transfers</h4>
<i className="w-4.5 h-4.5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</div>
<p className="mt-0.5 text-[13px] text-slate-600">Book taxis, airport transfers, or shuttles. Track drivers in real-time.</p>
</div>
</div>
</button>

<div className="w-full rounded-xl border border-slate-200/70 bg-white shadow-sm p-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center border border-green-200/50">
<i className="w-5 h-5" data-lucide="whatsapp"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900">WhatsApp Updates</h4>
<p className="mt-0.5 text-[13px] text-slate-600">Enable notifications and manage requests via quick replies.</p>
</div>

<button aria-pressed="false" className="relative inline-flex items-center h-7 w-12 rounded-full border border-slate-200/70 bg-slate-100 transition hover:ring-4 hover:ring-blue-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" id="whToggle">
<span className="sr-only">Enable WhatsApp updates</span>
<span className="dot absolute left-1 top-1 w-5 h-5 rounded-full bg-white border border-slate-300 shadow transition"></span>
</button>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-emerald-600 text-white text-[13px] font-medium hover:bg-emerald-700 active:bg-emerald-800 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition" data-action="enable_whatsapp_updates">
<i className="w-4.5 h-4.5" data-lucide="toggle-right"></i>
                Enable now
              </button>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-lg border border-slate-200/70 bg-white text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" id="prefBtn">
<i className="w-4.5 h-4.5" data-lucide="sliders-horizontal"></i>
                Preferences
              </button>
</div>
</div>
</div>
</section>

<section className="px-4 mt-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[15px] tracking-tight font-semibold text-slate-900">FAQs</h3>
<span className="text-[12px] text-slate-500">Common questions</span>
</div>
<div className="divide-y divide-slate-200/80 border border-slate-200/80 rounded-xl bg-white shadow-sm">

<div className="faq-item">
<button className="w-full p-4 text-left flex items-start gap-3 hover:bg-slate-50 focus:bg-slate-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-xl">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-500" data-lucide="history"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium text-slate-900">How do I reorder my favorite items?</div>
<i className="w-4.5 h-4.5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="answer mt-2 text-[13px] text-slate-600 hidden">Open Status → Food &amp; Essentials → tap Reorder.</div>
</div>
</button>
</div>
<div className="faq-item">
<button className="w-full p-4 text-left flex items-start gap-3 hover:bg-slate-50 focus:bg-slate-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-500" data-lucide="calendar-clock"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium text-slate-900">Can I schedule housekeeping at a specific time?</div>
<i className="w-4.5 h-4.5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="answer mt-2 text-[13px] text-slate-600 hidden">Yes! Tap Housekeeping → Room Cleaning → Select your preferred time.</div>
</div>
</button>
</div>
<div className="faq-item">
<button className="w-full p-4 text-left flex items-start gap-3 hover:bg-slate-50 focus:bg-slate-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-500" data-lucide="wrench"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium text-slate-900">How do I report an issue in the room?</div>
<i className="w-4.5 h-4.5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="answer mt-2 text-[13px] text-slate-600 hidden">Go to Maintenance → Report Issue → Fill in details or select from common problems.</div>
</div>
</button>
</div>
<div className="faq-item">
<button className="w-full p-4 text-left flex items-start gap-3 hover:bg-slate-50 focus:bg-slate-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-b-xl">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-500" data-lucide="send"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium text-slate-900">Can I receive updates outside the app?</div>
<i className="w-4.5 h-4.5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="answer mt-2 text-[13px] text-slate-600 hidden">Enable WhatsApp updates from the Status or Help section for real-time notifications.</div>
</div>
</button>
</div>
</div>
</section>

<section className="px-4 mt-6 mb-[calc(16px+env(safe-area-inset-bottom))]" id="emergencySection">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[15px] tracking-tight font-semibold text-slate-900">Emergency contacts</h3>
<span className="text-[12px] text-slate-500">Available 24/7</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="emg-btn flex items-center gap-2 p-3 rounded-xl border border-red-200/60 bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200/40 outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition" data-action="call_ambulance">
<i className="w-4.5 h-4.5" data-lucide="ambulance"></i>
<div className="text-left">
<div className="text-[13px] font-medium leading-4">Ambulance</div>
<div className="text-[11px] text-red-700/80">Medical emergencies</div>
</div>
</button>
<button className="emg-btn flex items-center gap-2 p-3 rounded-xl border border-red-200/60 bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200/40 outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition" data-action="call_fire">
<i className="w-4.5 h-4.5" data-lucide="flame"></i>
<div className="text-left">
<div className="text-[13px] font-medium leading-4">Fire Department</div>
<div className="text-[11px] text-red-700/80">Fire or smoke</div>
</div>
</button>
<button className="emg-btn flex items-center gap-2 p-3 rounded-xl border border-blue-200/60 bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200/40 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" data-action="call_police">
<i className="w-4.5 h-4.5" data-lucide="shield-alert"></i>
<div className="text-left">
<div className="text-[13px] font-medium leading-4">Police</div>
<div className="text-[11px] text-blue-700/80">Security</div>
</div>
</button>
<button className="emg-btn flex items-center gap-2 p-3 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-700 hover:bg-slate-100 active:bg-slate-200/40 outline-none focus-visible:ring-2 focus-visible:ring-slate-500 transition" data-action="call_security">
<i className="w-4.5 h-4.5" data-lucide="shield"></i>
<div className="text-left">
<div className="text-[13px] font-medium leading-4">Hotel Security</div>
<div className="text-[11px] text-slate-600/90">Internal hotel</div>
</div>
</button>
<button className="emg-btn col-span-2 flex items-center gap-2 p-3.5 rounded-xl border border-slate-200/80 bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition" data-action="call_reception">
<i className="w-4.5 h-4.5 text-blue-600" data-lucide="phone-call"></i>
<div className="text-left flex-1">
<div className="text-[14px] font-medium leading-5">Front Desk / Reception</div>
<div className="text-[12px] text-slate-600/90">Immediate hotel assistance</div>
</div>
<i className="w-4.5 h-4.5 text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<div className="h-4" style={{height: 'calc(16px + env(safe-area-inset-bottom))'}}></div>

<div aria-hidden="true" className="fixed inset-0 z-50 hidden" id="sheet">
<div className="absolute inset-0 bg-slate-900/40 opacity-0 transition-opacity" id="sheetBackdrop"></div>
<div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform">
<div className="mx-auto w-full max-w-md bg-white rounded-t-2xl shadow-xl ring-1 ring-slate-200/70">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-2.5"></div>
<div className="p-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200/70" id="sheetIcon">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</div>
<div className="flex-1">
<h4 className="text-[16px] font-semibold tracking-tight text-slate-900" id="sheetTitle">Title</h4>
<p className="text-[13px] text-slate-600 mt-0.5" id="sheetDesc">Description</p>
</div>
<button className="w-9 h-9 rounded-full hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-blue-500" id="closeSheet">
<i className="w-5 h-5 text-slate-600" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="inline-flex items-center gap-2 justify-center px-3 h-10 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-700 active:bg-blue-800 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition">
<i className="w-4.5 h-4.5" data-lucide="plus-circle"></i>
                  New request
                </button>
<button className="inline-flex items-center gap-2 justify-center px-3 h-10 rounded-lg border border-slate-200/80 bg-white text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition">
<i className="w-4.5 h-4.5" data-lucide="list-checks"></i>
                  View status
                </button>
<button className="inline-flex items-center gap-2 justify-center px-3 h-10 rounded-lg border border-slate-200/80 bg-white text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition col-span-2">
<i className="w-4.5 h-4.5" data-lucide="phone"></i>
                  Contact staff
                </button>
</div>
<div className="mt-4 p-3 rounded-xl border border-slate-200/70 bg-slate-50">
<div className="flex items-start gap-2">
<i className="w-4.5 h-4.5 text-slate-500 mt-0.5" data-lucide="info"></i>
<p className="text-[12px] text-slate-600" id="sheetHint">Tip: You can modify or cancel active requests anytime from Status.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-x-0 bottom-[max(12px,env(safe-area-inset-bottom))] z-[60] flex flex-col items-center gap-2" id="toastHost"></div>
</div>
</div>


    </>
  );
}
