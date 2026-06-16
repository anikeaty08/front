import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const $ = (s) => document.querySelector(s);
    const $$ = (s) => Array.from(document.querySelectorAll(s));

    const data = {
      odontologia: {
        label: "Odontología",
        defaultDuration: "20 min",
        professionals: [
          { id: "dra-ruiz", name: "Dra. Ruiz", note: "Revisión y limpiezas", duration: "20–40 min", priceFrom: 25 },
          { id: "dr-santos", name: "Dr. Santos", note: "Urgencias y diagnóstico", duration: "15–30 min", priceFrom: 30 },
        ],
        slots: ["09:30","10:10","10:50","11:30","12:10","16:00","16:40","17:20","18:00","18:40"],
        priceHint: "desde €25"
      },
      masajes: {
        label: "Masajes",
        defaultDuration: "60 min",
        professionals: [
          { id: "luna", name: "Luna", note: "Relax y mixto", duration: "45–60 min", priceFrom: 35 },
          { id: "marcos", name: "Marcos", note: "Descontracturante", duration: "60 min", priceFrom: 45 },
        ],
        slots: ["10:00","11:00","12:00","13:00","16:30","17:30","18:30"],
        priceHint: "desde €35"
      }
    };

    const state = { service: "", professional: "", proLabel: "", date: "", time: "", name: "", phone: "", notes: "" };

    const els = {
      btnMenu: $("#btnMenu"),
      mobileMenu: $("#mobileMenu"),
      btnQuickBook: $("#btnQuickBook"),
      serviceBtns: $$(".serviceBtn"),
      professional: $("#professional"),
      proNote: $("#proNote"),
      date: $("#date"),
      time: $("#time"),
      name: $("#name"),
      phone: $("#phone"),
      notes: $("#notes"),
      summary: $("#summary"),
      durationBadge: $("#durationBadge"),
      priceBadge: $("#priceBadge"),
      availabilityHint: $("#availabilityHint"),
      serviceHint: $("#serviceHint"),
      btnConfirm: $("#btnConfirm"),
      btnWhatsApp: $("#btnWhatsApp"),
      toast: $("#toast"),
      toastText: $("#toastText"),
      toastClose: $("#toastClose"),
      year: $("#year"),
      btnViewBookings: $("#btnViewBookings"),
      btnClearBookings: $("#btnClearBookings"),
      modal: $("#modal"),
      modalClose: $("#modalClose"),
      modalNew: $("#modalNew"),
      bookingList: $("#bookingList"),
      modalEmpty: $("#modalEmpty")
    };

    function setMinDateToday() {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      const iso = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
      els.date.min = iso;
      if (!els.date.value) els.date.value = iso;
      state.date = els.date.value;
    }

    function scrollToSel(sel) {
      const el = document.querySelector(sel);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function setService(service) {
      state.service = service;

      els.serviceBtns.forEach(btn => {
        const active = btn.dataset.service === service;
        btn.classList.toggle("ring-2", active);
        btn.classList.toggle("ring-indigo-400/50", active);
        btn.classList.toggle("bg-white/10", active);
        const dot = btn.querySelector(".dot");
        if (dot) dot.classList.toggle("bg-indigo-300", active);
      });

      const svc = data[service];
      if (!svc) return;

      els.serviceHint.textContent = `Servicio seleccionado: ${svc.label}.`;
      els.priceBadge.classList.remove("hidden");
      els.priceBadge.textContent = svc.priceHint;

      els.professional.innerHTML = "";
      const opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "Elige profesional";
      opt0.selected = true;
      els.professional.appendChild(opt0);

      svc.professionals.forEach(p => {
        const o = document.createElement("option");
        o.value = p.id;
        o.textContent = p.name;
        o.dataset.note = p.note;
        o.dataset.duration = p.duration;
        o.dataset.priceFrom = String(p.priceFrom);
        els.professional.appendChild(o);
      });

      state.professional = "";
      state.proLabel = "";
      els.proNote.textContent = "";
      els.durationBadge.classList.add("hidden");
      els.durationBadge.textContent = "";

      renderTimes();
      updateSummary();
    }

    function renderTimes() {
      els.time.innerHTML = "";
      const svc = data[state.service];
      const dateVal = els.date.value;

      if (!dateVal) {
        const o = document.createElement("option");
        o.value = "";
        o.textContent = "Selecciona fecha";
        o.selected = true;
        els.time.appendChild(o);
        els.availabilityHint.textContent = "";
        return;
      }

      const seed = (str) => {
        let h = 0;
        for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
        return h;
      };

      const slots = (svc ? svc.slots : ["10:00","11:00","12:00","16:00","17:00"]).slice();
      const s = seed(`${state.service}|${dateVal}`);

      // Change requested by user: reduce availability for seed % 5 (instead of % 3)
      const removedCount = (s % 5); // 0-4 slots removed
      for (let i = 0; i < removedCount; i++) {
        if (!slots.length) break;
        const idx = (seed(`${s}|${i}`) % slots.length);
        slots.splice(idx, 1);
      }

      if (!slots.length) {
        const o = document.createElement("option");
        o.value = "";
        o.textContent = "Sin huecos ese día";
        o.selected = true;
        els.time.appendChild(o);
        els.availabilityHint.textContent = "Prueba con otra fecha.";
        state.time = "";
        return;
      }

      const o0 = document.createElement("option");
      o0.value = "";
      o0.textContent = "Selecciona hora";
      o0.selected = true;
      els.time.appendChild(o0);

      slots.forEach(t => {
        const o = document.createElement("option");
        o.value = t;
        o.textContent = t;
        els.time.appendChild(o);
      });

      els.availabilityHint.textContent = svc
        ? `Huecos para ${svc.label}: ${slots.length} disponibles.`
        : `Huecos disponibles: ${slots.length}.`;

      if (state.time && slots.includes(state.time)) {
        els.time.value = state.time;
      } else {
        state.time = "";
      }
    }

    function updateSummary() {
      const svc = state.service ? data[state.service].label : "";
      const pro = state.proLabel || "";
      const d = state.date || "";
      const t = state.time || "";

      if (!svc || !pro || !d || !t) {
        els.summary.textContent = "Selecciona servicio, profesional, fecha y hora.";
      } else {
        els.summary.textContent = `${svc} con ${pro} — ${d} a las ${t}.`;
      }
    }

    function getFormPayload() {
      return {
        id: `egb_${Date.now()}`,
        service: state.service,
        serviceLabel: state.service ? data[state.service].label : "",
        professionalId: state.professional,
        professionalLabel: state.proLabel,
        date: state.date,
        time: state.time,
        name: state.name,
        phone: state.phone,
        notes: state.notes,
        createdAt: new Date().toISOString()
      };
    }

    function validate() {
      const missing = [];
      if (!state.service) missing.push("servicio");
      if (!state.professional) missing.push("profesional");
      if (!state.date) missing.push("fecha");
      if (!state.time) missing.push("hora");
      if (!state.name.trim()) missing.push("nombre");
      if (!state.phone.trim()) missing.push("teléfono");
      return missing;
    }

    function showToast(text) {
      els.toastText.textContent = text;
      els.toast.classList.remove("hidden");
      window.clearTimeout(window.__toastTimer);
      window.__toastTimer = window.setTimeout(() => {
        els.toast.classList.add("hidden");
      }, 4500);
    }

    function saveBooking(b) {
      const key = "egbert_bookings_v1";
      const list = JSON.parse(localStorage.getItem(key) || "[]");
      list.unshift(b);
      localStorage.setItem(key, JSON.stringify(list));
    }

    function loadBookings() {
      const key = "egbert_bookings_v1";
      return JSON.parse(localStorage.getItem(key) || "[]");
    }

    function clearBookings() {
      const key = "egbert_bookings_v1";
      localStorage.removeItem(key);
    }

    function openModal() {
      renderBookings();
      els.modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
    function closeModal() {
      els.modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }

    function renderBookings() {
      const bookings = loadBookings();
      els.bookingList.innerHTML = "";
      els.modalEmpty.classList.toggle("hidden", bookings.length !== 0);

      bookings.forEach(b => {
        const card = document.createElement("div");
        card.className = "rounded-2xl bg-white/5 p-4 ring-1 ring-white/10";

        const top = document.createElement("div");
        top.className = "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between";

        const left = document.createElement("div");
        left.className = "min-w-0";
        const title = document.createElement("div");
        title.className = "text-sm font-semibold tracking-tight text-white";
        title.textContent = `${b.serviceLabel} — ${b.date} ${b.time}`;
        const sub = document.createElement("div");
        sub.className = "mt-1 text-xs text-slate-300";
        sub.textContent = `${b.professionalLabel} • ${b.name} • ${b.phone}`;
        const notes = document.createElement("div");
        notes.className = "mt-2 text-xs text-slate-400";
        notes.textContent = b.notes ? `Notas: ${b.notes}` : "Notas: —";

        left.appendChild(title);
        left.appendChild(sub);
        left.appendChild(notes);

        const right = document.createElement("div");
        right.className = "flex flex-wrap items-center gap-2 sm:justify-end";

        const btnCopy = document.createElement("button");
        btnCopy.className = "inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold tracking-tight text-slate-100 ring-1 ring-white/10 hover:bg-white/10";
        btnCopy.innerHTML = `<iconify-icon icon="lucide:copy" width="16" height="16" style="stroke-width:1.5;"></iconify-icon> Copiar`;
        btnCopy.addEventListener("click", async () => {
          const text = `Egbert — Cita\nServicio: ${b.serviceLabel}\nProfesional: ${b.professionalLabel}\nFecha: ${b.date}\nHora: ${b.time}\nNombre: ${b.name}\nTel: ${b.phone}\nNotas: ${b.notes || "-"}`;
          try {
            await navigator.clipboard.writeText(text);
            showToast("Datos copiados al portapapeles.");
          } catch (e) {
            showToast("No se pudo copiar. Tu navegador lo bloqueó.");
          }
        });

        const btnRemove = document.createElement("button");
        btnRemove.className = "inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold tracking-tight text-slate-100 ring-1 ring-white/10 hover:bg-white/10";
        btnRemove.innerHTML = `<iconify-icon icon="lucide:trash-2" width="16" height="16" style="stroke-width:1.5;"></iconify-icon> Eliminar`;
        btnRemove.addEventListener("click", () => {
          const key = "egbert_bookings_v1";
          const list = loadBookings().filter(x => x.id !== b.id);
          localStorage.setItem(key, JSON.stringify(list));
          renderBookings();
        });

        right.appendChild(btnCopy);
        right.appendChild(btnRemove);

        top.appendChild(left);
        top.appendChild(right);

        card.appendChild(top);
        els.bookingList.appendChild(card);
      });
    }

    function buildWhatsAppLink(payload) {
      const msg = [
        "Egbert — Solicitud de cita",
        `Servicio: ${payload.serviceLabel}`,
        `Profesional: ${payload.professionalLabel}`,
        `Fecha: ${payload.date}`,
        `Hora: ${payload.time}`,
        `Nombre: ${payload.name}`,
        `Contacto: ${payload.phone}`,
        `Notas: ${payload.notes || "-"}`
      ].join("\n");
      const text = encodeURIComponent(msg);
      return `https://wa.me/?text=${text}`;
    }

    els.btnMenu?.addEventListener("click", () => {
      els.mobileMenu.classList.toggle("hidden");
    });

    $$("[data-jump]").forEach(btn => {
      btn.addEventListener("click", () => {
        const sel = btn.getAttribute("data-jump");
        els.mobileMenu.classList.add("hidden");
        scrollToSel(sel);
      });
    });

    els.btnQuickBook.addEventListener("click", () => scrollToSel("#agenda"));

    els.serviceBtns.forEach(btn => {
      btn.addEventListener("click", () => setService(btn.dataset.service));
    });

    els.professional.addEventListener("change", (e) => {
      state.professional = e.target.value;
      const opt = e.target.selectedOptions[0];
      state.proLabel = opt?.textContent || "";
      const note = opt?.dataset?.note || "";
      const dur = opt?.dataset?.duration || "";
      const priceFrom = opt?.dataset?.priceFrom || "";

      els.proNote.textContent = note ? `Enfoque: ${note}.` : "";

      if (dur) {
        els.durationBadge.classList.remove("hidden");
        els.durationBadge.textContent = `Duración: ${dur}`;
      } else {
        els.durationBadge.classList.add("hidden");
      }

      if (priceFrom) {
        els.priceBadge.classList.remove("hidden");
        els.priceBadge.textContent = `desde €${priceFrom}`;
      }

      updateSummary();
    });

    els.date.addEventListener("change", () => {
      state.date = els.date.value;
      renderTimes();
      updateSummary();
    });

    els.time.addEventListener("change", () => {
      state.time = els.time.value;
      updateSummary();
    });

    els.name.addEventListener("input", () => state.name = els.name.value);
    els.phone.addEventListener("input", () => state.phone = els.phone.value);
    els.notes.addEventListener("input", () => state.notes = els.notes.value);

    els.btnConfirm.addEventListener("click", () => {
      const missing = validate();
      if (missing.length) {
        showToast(`Faltan: ${missing.join(", ")}.`);
        return;
      }
      const payload = getFormPayload();
      saveBooking(payload);
      showToast(`Reservado: ${payload.serviceLabel} con ${payload.professionalLabel} el ${payload.date} a las ${payload.time}.`);
    });

    els.btnWhatsApp.addEventListener("click", () => {
      const missing = validate();
      if (missing.length) {
        showToast(`Faltan: ${missing.join(", ")}.`);
        return;
      }
      const payload = getFormPayload();
      saveBooking(payload);
      window.open(buildWhatsAppLink(payload), "_blank", "noopener,noreferrer");
    });

    els.toastClose.addEventListener("click", () => els.toast.classList.add("hidden"));

    els.btnViewBookings.addEventListener("click", openModal);
    els.modalClose.addEventListener("click", closeModal);
    els.modal.addEventListener("click", (e) => {
      if (e.target === els.modal.querySelector(".absolute")) closeModal();
    });
    els.modalNew.addEventListener("click", () => {
      closeModal();
      scrollToSel("#agenda");
    });

    els.btnClearBookings.addEventListener("click", () => {
      clearBookings();
      showToast("Citas borradas de este dispositivo.");
    });

    els.year.textContent = new Date().getFullYear();
    setMinDateToday();

    setService("odontologia");
    state.date = els.date.value;
    renderTimes();
    updateSummary();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-40 right-[-8rem] h-72 w-[30rem] rounded-full bg-cyan-400/15 blur-3xl"></div>
<div className="absolute bottom-[-10rem] left-[-8rem] h-72 w-[34rem] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]"></div>
</div>
<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-slate-100">E</span>
</div>
<div className="leading-tight">
<div className="text-base font-semibold tracking-tight">Egbert</div>
<div className="text-xs text-slate-300">Citas • Odontología &amp; Masajes</div>
</div>
</div>
<nav className="hidden items-center gap-1 md:flex">
<button className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white" data-jump="#servicios">Servicios</button>
<button className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white" data-jump="#agenda">Agenda</button>
<button className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white" data-jump="#precios">Precios</button>
<button className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white" data-jump="#contacto">Contacto</button>
</nav>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100" id="btnQuickBook">
<iconify-icon height="18" icon="lucide:calendar-plus" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Reservar
        </button>
<button aria-label="Abrir menú" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10" id="btnMenu">
<iconify-icon height="20" icon="lucide:menu" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="hidden border-t border-white/10 bg-slate-950/80 backdrop-blur md:hidden" id="mobileMenu">
<div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
<div className="grid gap-2">
<button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-100 ring-1 ring-white/10 hover:bg-white/10" data-jump="#servicios">Servicios</button>
<button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-100 ring-1 ring-white/10 hover:bg-white/10" data-jump="#agenda">Agenda</button>
<button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-100 ring-1 ring-white/10 hover:bg-white/10" data-jump="#precios">Precios</button>
<button className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-slate-100 ring-1 ring-white/10 hover:bg-white/10" data-jump="#contacto">Contacto</button>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
<section className="grid items-start gap-8 lg:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Disponibilidad hoy: huecos limitados
        </div>
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Citas rápidas para <span className="text-slate-200">odontología</span> y <span className="text-slate-200">masajes</span>.
        </h1>
<p className="mt-4 max-w-prose text-sm leading-6 text-slate-300">
          Agenda en menos de un minuto: elige el servicio, el profesional, el día y la hora. Recibe confirmación inmediata y recordatorios.
        </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl bg-indigo-400/90 px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-950 hover:bg-indigo-300" data-jump="#agenda">
<iconify-icon height="18" icon="lucide:sparkles" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Reservar ahora
          </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold tracking-tight text-white ring-1 ring-white/10 hover:bg-white/10" data-jump="#servicios">
<iconify-icon height="18" icon="lucide:list" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Ver servicios
          </button>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Atención profesional
            </div>
<div className="mt-2 text-sm font-semibold tracking-tight">Protocolos y cuidado</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:clock" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Horarios flexibles
            </div>
<div className="mt-2 text-sm font-semibold tracking-tight">Mañana y tarde</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:bell" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Recordatorios
            </div>
<div className="mt-2 text-sm font-semibold tracking-tight">WhatsApp / Email</div>
</div>
</div>
</div>
<div className="relative" id="agenda">
<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 blur-2xl"></div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-lg font-semibold tracking-tight text-white">Reservar cita</div>
<div className="mt-1 text-xs text-slate-300">Completa tus datos y elige disponibilidad.</div>
</div>
<div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-500/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Online
            </div>
</div>
<div className="mt-5 grid gap-4">
<div>
<label className="text-xs text-slate-300">Servicio</label>
<div className="mt-2 grid grid-cols-2 gap-2">
<button className="serviceBtn group rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10 hover:bg-white/10" data-service="odontologia" type="button">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-400/15 ring-1 ring-indigo-400/20">
<iconify-icon height="20" icon="lucide:stethoscope" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Odontología</div>
<div className="text-xs text-slate-300">Revisión, limpieza, urgencias</div>
</div>
</div>
<div className="grid h-5 w-5 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
<div className="dot h-2.5 w-2.5 rounded-full bg-transparent"></div>
</div>
</div>
</button>
<button className="serviceBtn group rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10 hover:bg-white/10" data-service="masajes" type="button">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15 ring-1 ring-cyan-400/20">
<iconify-icon height="20" icon="lucide:hand-heart" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Masajes</div>
<div className="text-xs text-slate-300">Relax, descontracturante</div>
</div>
</div>
<div className="grid h-5 w-5 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
<div className="dot h-2.5 w-2.5 rounded-full bg-transparent"></div>
</div>
</div>
</button>
</div>
<p className="mt-2 text-xs text-slate-400" id="serviceHint">Selecciona un servicio para ver profesionales y horarios.</p>
</div>
<div className="grid gap-2">
<div className="flex items-center justify-between">
<label className="text-xs text-slate-300">Profesional</label>
<span className="hidden rounded-full bg-white/5 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/10" id="durationBadge"></span>
</div>
<div className="relative">
<select className="w-full appearance-none rounded-2xl bg-white/5 px-4 py-3 pr-10 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" id="professional">
<option selected="" value="">Elige un servicio primero</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-300">
<iconify-icon height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="text-xs text-slate-400" id="proNote"></div>
</div>
<div className="grid gap-2 sm:grid-cols-2">
<div>
<label className="text-xs text-slate-300">Fecha</label>
<input className="mt-2 w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" id="date" type="date"/>
<div className="mt-2 text-xs text-slate-400">Sugerencia: elige mañana si hoy está completo.</div>
</div>
<div>
<label className="text-xs text-slate-300">Hora</label>
<div className="relative mt-2">
<select className="w-full appearance-none rounded-2xl bg-white/5 px-4 py-3 pr-10 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" id="time">
<option selected="" value="">Selecciona fecha</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-300">
<iconify-icon height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-2 text-xs text-slate-400" id="availabilityHint"></div>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="text-xs text-slate-300">Nombre</label>
<input className="mt-2 w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" id="name" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="text-xs text-slate-300">Teléfono o WhatsApp</label>
<input className="mt-2 w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" id="phone" placeholder="923225217" type="tel"/>
</div>
</div>
<div>
<label className="text-xs text-slate-300">Notas (opcional)</label>
<textarea className="mt-2 w-full resize-none rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40" id="notes" placeholder="Ej: dolor en muela, masaje de espalda, preferencia horaria…" rows="3"></textarea>
</div>
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-slate-300">Resumen</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-white" id="summary">Selecciona servicio, profesional, fecha y hora.</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden rounded-full bg-white/5 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/10" id="priceBadge"></div>
</div>
</div>
<div className="mt-2 text-xs text-slate-400" id="policy">Cancelación sin coste hasta 12h antes.</div>
</div>
<div className="grid gap-2 sm:grid-cols-2">
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100" id="btnConfirm">
<iconify-icon height="18" icon="lucide:check" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Confirmar cita
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400/20 px-4 py-3 text-sm font-semibold tracking-tight text-emerald-100 ring-1 ring-emerald-400/25 hover:bg-emerald-400/25" id="btnWhatsApp">
<iconify-icon height="18" icon="lucide:message-circle" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Enviar por WhatsApp
              </button>
</div>
<div className="hidden rounded-2xl bg-indigo-400/15 p-4 text-xs text-indigo-100 ring-1 ring-indigo-400/25" id="toast">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-indigo-400/20 ring-1 ring-indigo-400/25">
<iconify-icon height="16" icon="lucide:party-popper" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="font-semibold tracking-tight">Cita creada</div>
<div className="mt-1 text-slate-200/90" id="toastText"></div>
</div>
<button aria-label="Cerrar" className="rounded-lg p-1 text-slate-200 hover:bg-white/10" id="toastClose">
<iconify-icon height="16" icon="lucide:x" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mt-12" id="servicios">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Servicios</h2>
<p className="mt-2 text-sm text-slate-300">Elige lo que necesitas. Precios orientativos y tiempos medios.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold tracking-tight text-white ring-1 ring-white/10 hover:bg-white/10" data-jump="#agenda">
<iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Ir a reservar
        </button>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-2">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-400/15 ring-1 ring-indigo-400/20">
<iconify-icon height="22" icon="lucide:tooth" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-base font-semibold tracking-tight">Odontología</div>
<div className="text-xs text-slate-300">Diagnóstico y tratamientos esenciales</div>
</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-200">
<li className="flex items-start gap-3">
<span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="16" icon="lucide:clipboard-check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
<div>
<div className="font-semibold tracking-tight">Revisión + diagnóstico</div>
<div className="text-xs text-slate-400">15–20 min • orientativo</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="16" icon="lucide:wand-sparkles" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
<div>
<div className="font-semibold tracking-tight">Limpieza dental</div>
<div className="text-xs text-slate-400">30–40 min</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="16" icon="lucide:flame" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
<div>
<div className="font-semibold tracking-tight">Urgencia</div>
<div className="text-xs text-slate-400">Atención prioritaria • según disponibilidad</div>
</div>
</li>
</ul>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-400/20">
<iconify-icon height="22" icon="lucide:heart-handshake" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-base font-semibold tracking-tight">Masajes</div>
<div className="text-xs text-slate-300">Bienestar, recuperación y descanso</div>
</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-200">
<li className="flex items-start gap-3">
<span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="16" icon="lucide:wind" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
<div>
<div className="font-semibold tracking-tight">Relax</div>
<div className="text-xs text-slate-400">45 min</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="16" icon="lucide:activity" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
<div>
<div className="font-semibold tracking-tight">Descontracturante</div>
<div className="text-xs text-slate-400">60 min</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon height="16" icon="lucide:move" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
<div>
<div className="font-semibold tracking-tight">Piernas cansadas</div>
<div className="text-xs text-slate-400">30 min</div>
</div>
</li>
</ul>
</div>
</div>
</section>
<section className="mt-12" id="precios">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Precios orientativos</h2>
<p className="mt-2 text-sm text-slate-300">Se confirman en consulta según valoración.</p>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Revisión</div>
<div className="text-sm text-slate-200">€25</div>
</div>
<div className="mt-2 text-xs text-slate-400">Incluye diagnóstico básico.</div>
<div className="mt-4 h-px bg-white/10"></div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:timer" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            20 min
          </div>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Limpieza</div>
<div className="text-sm text-slate-200">€55</div>
</div>
<div className="mt-2 text-xs text-slate-400">Higiene completa.</div>
<div className="mt-4 h-px bg-white/10"></div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:timer" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            40 min
          </div>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Masaje 60'</div>
<div className="text-sm text-slate-200">€45</div>
</div>
<div className="mt-2 text-xs text-slate-400">Descontracturante o mixto.</div>
<div className="mt-4 h-px bg-white/10"></div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:timer" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            60 min
          </div>
</div>
</div>
</section>
<section className="mt-12" id="contacto">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
<div className="grid gap-6 lg:grid-cols-3 lg:items-center">
<div className="lg:col-span-2">
<h2 className="text-2xl font-semibold tracking-tight text-white">Contacto</h2>
<p className="mt-2 text-sm text-slate-300">
              Si necesitas ayuda para reservar o quieres mover una cita, escríbenos. Respondemos en horario laboral.
            </p>
<div className="mt-5 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Teléfono
                </div>
<div className="mt-2 text-sm font-semibold tracking-tight">923225217</div>
<div className="mt-1 text-xs text-slate-400">Periodo entre 50 soles diarios</div>
</div>
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Email
                </div>
<div className="mt-2 text-sm font-semibold tracking-tight">citas@egbert.es</div>
</div>
<div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Ubicación
                </div>
<div className="mt-2 text-sm font-semibold tracking-tight">Centro • Calle Principal</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
<div className="text-sm font-semibold tracking-tight">Horario</div>
<div className="mt-3 grid gap-2 text-xs text-slate-300">
<div className="flex items-center justify-between"><span>Lun–Vie</span><span className="text-slate-200">09:30–19:30</span></div>
<div className="flex items-center justify-between"><span>Sábado</span><span className="text-slate-200">10:00–14:00</span></div>
<div className="flex items-center justify-between"><span>Domingo</span><span className="text-slate-400">Cerrado</span></div>
</div>
<button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100" data-jump="#agenda">
<iconify-icon height="18" icon="lucide:calendar-check" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Reservar cita
            </button>
</div>
</div>
</div>
</section>
<footer className="mt-12 border-t border-white/10 pt-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tight text-slate-100">EGB</span>
</div>
<div className="text-xs text-slate-400">© <span id="year"></span> Egbert. Reservas y atención.</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="rounded-xl bg-white/5 px-4 py-2 text-xs font-semibold tracking-tight text-slate-100 ring-1 ring-white/10 hover:bg-white/10" id="btnViewBookings">Ver mis citas</button>
<button className="rounded-xl bg-white/5 px-4 py-2 text-xs font-semibold tracking-tight text-slate-100 ring-1 ring-white/10 hover:bg-white/10" id="btnClearBookings">Borrar citas</button>
</div>
</div>
</footer>
</main>
<div className="fixed inset-0 z-50 hidden" id="modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto flex min-h-full max-w-3xl items-center justify-center px-4 py-10">
<div className="w-full rounded-3xl bg-slate-950 ring-1 ring-white/10">
<div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
<div>
<div className="text-base font-semibold tracking-tight text-white">Mis citas</div>
<div className="mt-1 text-xs text-slate-400">Guardadas en este dispositivo.</div>
</div>
<button aria-label="Cerrar" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10" id="modalClose">
<iconify-icon height="18" icon="lucide:x" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="px-5 py-5 sm:px-6">
<div className="hidden rounded-2xl bg-white/5 p-5 text-sm text-slate-200 ring-1 ring-white/10" id="modalEmpty">No hay citas guardadas todavía. Reserva una desde la agenda.</div>
<div className="grid gap-3" id="bookingList"></div>
<div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-400">Consejo: usa “Enviar por WhatsApp” para confirmar por mensaje.</div>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100" data-jump="#agenda" id="modalNew">
<iconify-icon height="18" icon="lucide:plus" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Nueva cita
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
