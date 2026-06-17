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



{
"@context":"https://schema.org",
"@type":"EducationalOrganization",
"name":"World Wide Mission",
"url":"https://example.com/world-wide-mission",
"description":"Study abroad consultancy for UK & Europe with eligibility checks, visa guidance, and end-to-end support.",
"areaServed":["United Kingdom","Europe"],
"contactPoint":[{"@type":"ContactPoint","contactType":"customer support","telephone":"+00-0000-000000","email":"hello@worldwidemission.example"}]
}



// ---------- Utilities ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
const isPhone = (v) => String(v || "").replace(/[^\d]/g, "").length >= 8;
const isYear = (v) => {
const y = Number(String(v || "").trim());
return y >= 1990 && y <= 2035;
};
const show = (el) => el && el.classList.remove("hidden");
const hide = (el) => el && el.classList.add("hidden");
const setErr = (key, state) => {
const el = document.querySelector(`[data-err="${key}"]`);
if (!el) return;
state ? show(el) : hide(el);
};
// ---------- CRM Demo (Session Storage) + Google Sheets ----------
async function submitLead(source, payload) {
const key = "wwm_leads";
const existing = JSON.parse(sessionStorage.getItem(key) || "[]");
const lead = {
id: crypto?.randomUUID?.() || String(Date.now()),
source,
createdAt: new Date().toISOString(),
...payload
};
existing.push(lead);
sessionStorage.setItem(key, JSON.stringify(existing));
console.log("[Lead Submitted]", lead);
// Google Sheet routing (requires Apps Script Web App endpoint in window.WWM_SHEETS_ENDPOINT)
try {
const sheetName = source === "Eligibility Multi-Step" ? "Eligibility" : "Website";
if (typeof submitLeadToSheets === "function") {
const result = await submitLeadToSheets(sheetName, lead);
console.log("[Sheets Submit]", sheetName, result);
}
} catch (e) {
console.warn("[Sheets Submit Failed]", e);
}
return Promise.resolve(lead);
}
// ---------- WhatsApp ----------
const waBtn = $("#waBtn");
const waNumber = "0000000000"; // TODO: replace
const waText = encodeURIComponent("Hi World Wide Mission! I’d like to check my eligibility for UK/Europe.");
if (waBtn) waBtn.href = `https://wa.me/${waNumber}?text=${waText}`;
// ---------- Footer Year ----------
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
// ---------- Talk Modal ----------
const talkModal = $("#talkModal");
const closeTalk = $("#closeTalk");
const talkForm = $("#talkForm");
const talkSuccess = $("#talkSuccess");
function openTalkModal(prefill = {}) {
if (!talkModal) return;
talkModal.classList.remove("hidden");
talkModal.setAttribute("aria-hidden", "false");
document.body.classList.add("overflow-hidden");
// Prefill (best-effort)
if ($("#talkName") && prefill.fullName) $("#talkName").value = prefill.fullName;
if ($("#talkEmail") && prefill.email) $("#talkEmail").value = prefill.email;
if ($("#talkPhone") && prefill.phone) $("#talkPhone").value = prefill.phone;
if ($("#talkCountry") && prefill.preferredCountry) $("#talkCountry").value = prefill.preferredCountry;
if ($("#talkIntake") && prefill.intake) $("#talkIntake").value = prefill.intake;
// focus
setTimeout(() => $("#talkName")?.focus(), 50);
}
function closeTalkModal() {
if (!talkModal) return;
talkModal.classList.add("hidden");
talkModal.setAttribute("aria-hidden", "true");
document.body.classList.remove("overflow-hidden");
}
closeTalk?.addEventListener("click", closeTalkModal);
talkModal?.addEventListener("click", (e) => {
if (e.target === talkModal || e.target === talkModal.firstElementChild) closeTalkModal();
});
// Wire talk buttons
["talkBtnTop","talkBtnHero","talkBtnSticky","talkBtnAfterSubmit","talkBtnWhy","talkBtnFooter"].forEach((id) => {
const btn = document.getElementById(id);
btn?.addEventListener("click", () => openTalkModal());
});
$$('[data-talk]').forEach(btn => btn.addEventListener("click", () => openTalkModal()));
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
closeTalkModal();
closeAutoPopup();
}
});
// Talk form validation + submit
talkForm?.addEventListener("submit", async (e) => {
e.preventDefault();
hide(talkSuccess);
const fullName = $("#talkName")?.value.trim();
const email = $("#talkEmail")?.value.trim();
const phone = $("#talkPhone")?.value.trim();
const preferredCountry = $("#talkCountry")?.value;
const intake = $("#talkIntake")?.value;
let ok = true;
setErr("talkName", !fullName); ok = ok && !!fullName;
setErr("talkEmail", !isEmail(email)); ok = ok && isEmail(email);
setErr("talkPhone", !isPhone(phone)); ok = ok && isPhone(phone);
setErr("talkCountry", !preferredCountry); ok = ok && !!preferredCountry;
setErr("talkIntake", !intake); ok = ok && !!intake;
if (!ok) return;
await submitLead("Talk Modal", { fullName, email, phone, preferredCountry, intake });
show(talkSuccess);
talkForm.reset();
setTimeout(() => {
hide(talkSuccess);
closeTalkModal();
}, 1500);
});
// ---------- Hero lead form ----------
const heroLeadForm = $("#heroLeadForm");
const heroLeadSuccess = $("#heroLeadSuccess");
heroLeadForm?.addEventListener("submit", async (e) => {
e.preventDefault();
hide(heroLeadSuccess);
const fullName = $("#heroName")?.value.trim();
const email = $("#heroEmail")?.value.trim();
const phone = $("#heroPhone")?.value.trim();
const preferredCountry = $("#heroCountry")?.value;
const intake = $("#heroIntake")?.value;
let ok = true;
setErr("heroName", !fullName); ok = ok && !!fullName;
setErr("heroEmail", !isEmail(email)); ok = ok && isEmail(email);
setErr("heroPhone", !isPhone(phone)); ok = ok && isPhone(phone);
setErr("heroCountry", !preferredCountry); ok = ok && !!preferredCountry;
setErr("heroIntake", !intake); ok = ok && !!intake;
if (!ok) return;
await submitLead("Hero Lead Form", { fullName, email, phone, preferredCountry, intake });
show(heroLeadSuccess);
// Optional: prefill talk modal if user clicks later
sessionStorage.setItem("wwm_last_prefill", JSON.stringify({ fullName, email, phone, preferredCountry, intake }));
heroLeadForm.reset();
setTimeout(() => hide(heroLeadSuccess), 2500);
});
// ---------- Guide download lead + PDF ----------
const guideForm = $("#guideForm");
const guideSuccess = $("#guideSuccess");
const guideDownload = $("#guideDownload");
guideForm?.addEventListener("submit", async (e) => {
e.preventDefault();
hide(guideSuccess);
const fullName = $("#guideName")?.value.trim();
const email = $("#guideEmail")?.value.trim();
const phone = $("#guidePhone")?.value.trim();
let ok = true;
setErr("guideName", !fullName); ok = ok && !!fullName;
setErr("guideEmail", !isEmail(email)); ok = ok && isEmail(email);
setErr("guidePhone", !isPhone(phone)); ok = ok && isPhone(phone);
if (!ok) return;
await submitLead("UK Guide Download", {
fullName,
email,
phone,
asset: "The-Complete-UK-Admission-Guide",
assetUrl: guideDownload?.getAttribute("href") || "The-Complete-UK-Admission-Guide.pdf"
});
sessionStorage.setItem("wwm_last_prefill", JSON.stringify({ fullName, email, phone }));
show(guideSuccess);
guideForm.reset();
// Auto-trigger download (best effort)
setTimeout(() => {
try { guideDownload?.click(); } catch (e) {}
}, 250);
});
// ---------- Multi-step eligibility ----------
const msForm = $("#multiStepForm");
const steps = $$("[data-step]", msForm);
const prevBtn = $("#prevBtn");
const nextBtn = $("#nextBtn");
const submitBtn = $("#submitBtn");
const progressBar = $("#progressBar");
const stepNumEl = $("#stepNum");
const formSuccess = $("#formSuccess");
const startOverBtn = $("#startOverBtn");
let step = 1;
const totalSteps = 4;
function showStep(n) {
steps.forEach(s => s.classList.toggle("hidden", Number(s.dataset.step) !== n));
step = n;
if (stepNumEl) stepNumEl.textContent = String(step);
if (progressBar) progressBar.style.width = `${(step / totalSteps) * 100}%`;
prevBtn.disabled = step === 1;
nextBtn.classList.toggle("hidden", step === totalSteps);
submitBtn.classList.toggle("hidden", step !== totalSteps);
// Save state
sessionStorage.setItem("wwm_ms_step", String(step));
}
function getMsPayload() {
const data = new FormData(msForm);
const payload = Object.fromEntries(data.entries());
payloadqualification = payload.qualification || "";
payload.completionYear = payload.completionYear || "";
payload.studyLevel = payload.studyLevel || "";
payload.ielts = payload.ielts || "";
payload.preferredCountry = payload.preferredCountry || "";
payload.intake = payload.intake || "";
payload.course = payload.course || "";
payload.ieltsScore = payload.ieltsScore || "";
payload.fullName = payload.fullName || "";
payload.email = payload.email || "";
payload.phone = payload.phone || "";
payload.city = payload.city || "";
return payload;
}
function validateStep(n) {
const payload = getMsPayload();
let ok = true;
["qualLevel","yearGrad","studyInterest","ielts","prefCountry","intake","course","msName","msEmail","msPhone"].forEach(k => setErr(k, false));
if (n === 1) {
setErr("qualLevel", !payload.qualification); ok = ok && !!payload.qualification;
setErr("yearGrad", !isYear(payload.completionYear)); ok = ok && isYear(payload.completionYear);
setErr("studyInterest", !payload.studyLevel); ok = ok && !!payload.studyLevel;
}
if (n === 2) {
setErr("ielts", !payload.ielts); ok = ok && !!payload.ielts;
}
if (n === 3) {
setErr("prefCountry", !payload.preferredCountry); ok = ok && !!payload.preferredCountry;
setErr("intake", !payload.intake); ok = ok && !!payload.intake;
setErr("course", !payload.course.trim()); ok = ok && !!payload.course.trim();
}
if (n === 4) {
setErr("msName", !payload.fullName.trim()); ok = ok && !!payload.fullName.trim();
setErr("msEmail", !isEmail(payload.email)); ok = ok && isEmail(payload.email);
setErr("msPhone", !isPhone(payload.phone)); ok = ok && isPhone(payload.phone);
}
return ok;
}
prevBtn?.addEventListener("click", () => showStep(Math.max(1, step - 1)));
nextBtn?.addEventListener("click", () => {
if (!validateStep(step)) return;
showStep(Math.min(totalSteps, step + 1));
});
msForm?.addEventListener("submit", async (e) => {
e.preventDefault();
if (!validateStep(4)) return;
const payload = getMsPayload();
await submitLead("Eligibility Multi-Step", payload);
sessionStorage.setItem("wwm_last_prefill", JSON.stringify({
fullName: payload.fullName, email: payload.email, phone: payload.phone,
preferredCountry: payload.preferredCountry, intake: payload.intake
}));
show(formSuccess);
steps.forEach(s => hide(s));
prevBtn.disabled = true;
hide(nextBtn);
hide(submitBtn);
if (progressBar) progressBar.style.width = "100%";
});
startOverBtn?.addEventListener("click", () => {
msForm.reset();
hide(formSuccess);
showStep(1);
});
const savedStep = Number(sessionStorage.getItem("wwm_ms_step") || "1");
showStep(savedStep >= 1 && savedStep <= totalSteps ? savedStep : 1);
// ---------- Testimonials Carousel ----------
const testimonials = [
{
name: "Aanya Sharma",
meta: "UK • MSc Business Analytics",
outcome: "Offer letter received in 12 days",
quote: "World Wide Mission made the process simple. They helped me shortlist the right universities and guided every document step-by-step."
},
{
name: "Rohit Verma",
meta: "Europe • MSc Computer Science",
outcome: "Shortlist finalized in 48 hours",
quote: "The counselor gave me clear choices based on my budget and profile. The checklist approach removed a lot of confusion."
},
{
name: "Neha Patel",
meta: "UK • BSc Nursing Pathway",
outcome: "Visa documentation done without rework",
quote: "Their documentation support was the best part. Every requirement was explained clearly, and the follow-ups were timely."
}
];
let tIndex = 0;
let tTimer = null;
function renderTestimonial(i) {
const t = testimonials[i];
$("#tName").textContent = t.name;
$("#tMeta").textContent = t.meta;
$("#tOutcome").textContent = t.outcome;
$("#tQuote").textContent = t.quote;
$$(".tDot").forEach((dot, idx) => {
dot.classList.toggle("bg-white/70", idx === i);
dot.classList.toggle("bg-white/25", idx !== i);
});
}
function startTestimonialAuto() {
stopTestimonialAuto();
tTimer = setInterval(() => {
tIndex = (tIndex + 1) % testimonials.length;
renderTestimonial(tIndex);
}, 6000);
}
function stopTestimonialAuto() {
if (tTimer) clearInterval(tTimer);
tTimer = null;
}
$("#tPrev")?.addEventListener("click", () => {
tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
renderTestimonial(tIndex);
startTestimonialAuto();
});
$("#tNext")?.addEventListener("click", () => {
tIndex = (tIndex + 1) % testimonials.length;
renderTestimonial(tIndex);
startTestimonialAuto();
});
$$(".tDot").forEach(dot => dot.addEventListener("click", () => {
tIndex = Number(dot.dataset.index || "0");
renderTestimonial(tIndex);
startTestimonialAuto();
}));
renderTestimonial(tIndex);
startTestimonialAuto();
// ---------- Auto Popup (once per session) ----------
const autoPopup = $("#autoPopup");
const closeAuto = $("#closeAuto");
const autoTalkBtn = $("#autoTalkBtn");
const autoGoEligibility = $("#autoGoEligibility");
function openAutoPopup() {
if (!autoPopup) return;
autoPopup.classList.remove("hidden");
autoPopup.setAttribute("aria-hidden", "false");
document.body.classList.add("overflow-hidden");
}
function closeAutoPopup() {
if (!autoPopup) return;
autoPopup.classList.add("hidden");
autoPopup.setAttribute("aria-hidden", "true");
document.body.classList.remove("overflow-hidden");
}
closeAuto?.addEventListener("click", closeAutoPopup);
autoPopup?.addEventListener("click", (e) => {
if (e.target === autoPopup || e.target === autoPopup.firstElementChild) closeAutoPopup();
});
autoTalkBtn?.addEventListener("click", () => {
closeAutoPopup();
const prefill = JSON.parse(sessionStorage.getItem("wwm_last_prefill") || "{}");
openTalkModal(prefill);
});
autoGoEligibility?.addEventListener("click", () => {
closeAutoPopup();
});
if (!sessionStorage.getItem("wwm_auto_popup_shown")) {
setTimeout(() => {
sessionStorage.setItem("wwm_auto_popup_shown", "1");
openAutoPopup();
}, 3500);
}
// ---------- Prefill Talk Modal from last lead ----------
const lastPrefill = JSON.parse(sessionStorage.getItem("wwm_last_prefill") || "{}");
// ---------- Improve UX: smooth scroll for anchor clicks ----------
document.addEventListener("click", (e) => {
const a = e.target.closest('a[href^="#"]');
if (!a) return;
const id = a.getAttribute("href");
if (!id || id === "#") return;
const target = document.querySelector(id);
if (!target) return;
e.preventDefault();
target.scrollIntoView({ behavior: "smooth", block: "start" });
});



      // ---------- Utilities ----------
      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

      const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
      const isPhone = (v) => String(v || "").replace(/[^\d]/g, "").length >= 8;
      const isYear = (v) => {
        const y = Number(String(v || "").trim());
        return y >= 1990 && y <= 2035;
      };

      const show = (el) => el && el.classList.remove("hidden");
      const hide = (el) => el && el.classList.add("hidden");

      const setErr = (key, state) => {
        const el = document.querySelector(`[data-err="${key}"]`);
        if (!el) return;
        state ? show(el) : hide(el);
      };

      // ---------- CRM Demo (Session Storage) ----------
      function submitLead(source, payload) {
        const key = "wwm_leads";
        const existing = JSON.parse(sessionStorage.getItem(key) || "[]");
        const lead = {
          id: crypto?.randomUUID?.() || String(Date.now()),
          source,
          createdAt: new Date().toISOString(),
          ...payload
        };
        existing.push(lead);
        sessionStorage.setItem(key, JSON.stringify(existing));
        console.log("[Lead Submitted]", lead);
        return Promise.resolve(lead);
      }

      // ---------- WhatsApp ----------
      const waBtn = $("#waBtn");
      const waNumber = "0000000000"; // TODO: replace
      const waText = encodeURIComponent("Hi World Wide Mission! I’d like to check my eligibility for UK/Europe.");
      if (waBtn) waBtn.href = `https://wa.me/${waNumber}?text=${waText}`;

      // ---------- Footer Year ----------
      const yearEl = $("#year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // ---------- Talk Modal ----------
      const talkModal = $("#talkModal");
      const closeTalk = $("#closeTalk");
      const talkForm = $("#talkForm");
      const talkSuccess = $("#talkSuccess");

      function openTalkModal(prefill = {}) {
        if (!talkModal) return;
        talkModal.classList.remove("hidden");
        talkModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("overflow-hidden");

        // Prefill (best-effort)
        if ($("#talkName") && prefill.fullName) $("#talkName").value = prefill.fullName;
        if ($("#talkEmail") && prefill.email) $("#talkEmail").value = prefill.email;
        if ($("#talkPhone") && prefill.phone) $("#talkPhone").value = prefill.phone;
        if ($("#talkCountry") && prefill.preferredCountry) $("#talkCountry").value = prefill.preferredCountry;
        if ($("#talkIntake") && prefill.intake) $("#talkIntake").value = prefill.intake;

        // focus
        setTimeout(() => $("#talkName")?.focus(), 50);
      }

      function closeTalkModal() {
        if (!talkModal) return;
        talkModal.classList.add("hidden");
        talkModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("overflow-hidden");
      }

      closeTalk?.addEventListener("click", closeTalkModal);
      talkModal?.addEventListener("click", (e) => {
        if (e.target === talkModal || e.target === talkModal.firstElementChild) closeTalkModal();
      });

      // Wire talk buttons
      ["talkBtnTop","talkBtnHero","talkBtnSticky","talkBtnAfterSubmit","talkBtnWhy","talkBtnFooter"].forEach((id) => {
        const btn = document.getElementById(id);
        btn?.addEventListener("click", () => openTalkModal());
      });
      $$("[data-talk]").forEach(btn => btn.addEventListener("click", () => openTalkModal()));

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeTalkModal();
          closeAutoPopup();
        }
      });

      // Talk form validation + submit
      talkForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        hide(talkSuccess);

        const fullName = $("#talkName")?.value.trim();
        const email = $("#talkEmail")?.value.trim();
        const phone = $("#talkPhone")?.value.trim();
        const preferredCountry = $("#talkCountry")?.value;
        const intake = $("#talkIntake")?.value;

        let ok = true;
        setErr("talkName", !fullName); ok = ok && !!fullName;
        setErr("talkEmail", !isEmail(email)); ok = ok && isEmail(email);
        setErr("talkPhone", !isPhone(phone)); ok = ok && isPhone(phone);
        setErr("talkCountry", !preferredCountry); ok = ok && !!preferredCountry;
        setErr("talkIntake", !intake); ok = ok && !!intake;

        if (!ok) return;

        await submitLead("Talk Modal", { fullName, email, phone, preferredCountry, intake });
        show(talkSuccess);
        talkForm.reset();

        setTimeout(() => {
          hide(talkSuccess);
          closeTalkModal();
        }, 1500);
      });

      // ---------- Hero lead form ----------
      const heroLeadForm = $("#heroLeadForm");
      const heroLeadSuccess = $("#heroLeadSuccess");
      heroLeadForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        hide(heroLeadSuccess);

        const fullName = $("#heroName")?.value.trim();
        const email = $("#heroEmail")?.value.trim();
        const phone = $("#heroPhone")?.value.trim();
        const preferredCountry = $("#heroCountry")?.value;
        const intake = $("#heroIntake")?.value;

        let ok = true;
        setErr("heroName", !fullName); ok = ok && !!fullName;
        setErr("heroEmail", !isEmail(email)); ok = ok && isEmail(email);
        setErr("heroPhone", !isPhone(phone)); ok = ok && isPhone(phone);
        setErr("heroCountry", !preferredCountry); ok = ok && !!preferredCountry;
        setErr("heroIntake", !intake); ok = ok && !!intake;

        if (!ok) return;

        await submitLead("Hero Lead Form", { fullName, email, phone, preferredCountry, intake });
        show(heroLeadSuccess);

        // Optional: prefill talk modal if user clicks later
        sessionStorage.setItem("wwm_last_prefill", JSON.stringify({ fullName, email, phone, preferredCountry, intake }));

        heroLeadForm.reset();
        setTimeout(() => hide(heroLeadSuccess), 2500);
      });

      // ---------- Multi-step eligibility ----------
      const msForm = $("#multiStepForm");
      const steps = $$("[data-step]", msForm);
      const prevBtn = $("#prevBtn");
      const nextBtn = $("#nextBtn");
      const submitBtn = $("#submitBtn");
      const progressBar = $("#progressBar");
      const stepNumEl = $("#stepNum");
      const formSuccess = $("#formSuccess");
      const startOverBtn = $("#startOverBtn");

      let step = 1;
      const totalSteps = 4;

      function showStep(n) {
        steps.forEach(s => s.classList.toggle("hidden", Number(s.dataset.step) !== n));
        step = n;

        if (stepNumEl) stepNumEl.textContent = String(step);
        if (progressBar) progressBar.style.width = `${(step / totalSteps) * 100}%`;

        prevBtn.disabled = step === 1;
        nextBtn.classList.toggle("hidden", step === totalSteps);
        submitBtn.classList.toggle("hidden", step !== totalSteps);

        // Save state
        sessionStorage.setItem("wwm_ms_step", String(step));
      }

      function getMsPayload() {
        const data = new FormData(msForm);
        const payload = Object.fromEntries(data.entries());

        // Include radio ielts selection (FormData includes it already if selected)
        payload.qualification = payload.qualification || "";
        payload.completionYear = payload.completionYear || "";
        payload.studyLevel = payload.studyLevel || "";
        payload.ielts = payload.ielts || "";
        payload.preferredCountry = payload.preferredCountry || "";
        payload.intake = payload.intake || "";
        payload.course = payload.course || "";
        payload.ieltsScore = payload.ieltsScore || "";
        payload.fullName = payload.fullName || "";
        payload.email = payload.email || "";
        payload.phone = payload.phone || "";
        payload.city = payload.city || "";

        return payload;
      }

      function validateStep(n) {
        const payload = getMsPayload();
        let ok = true;

        // clear step-specific errors first (best-effort)
        ["qualLevel","yearGrad","studyInterest","ielts","prefCountry","intake","course","msName","msEmail","msPhone"].forEach(k => setErr(k, false));

        if (n === 1) {
          setErr("qualLevel", !payload.qualification); ok = ok && !!payload.qualification;
          setErr("yearGrad", !isYear(payload.completionYear)); ok = ok && isYear(payload.completionYear);
          setErr("studyInterest", !payload.studyLevel); ok = ok && !!payload.studyLevel;
        }
        if (n === 2) {
          setErr("ielts", !payload.ielts); ok = ok && !!payload.ielts;
        }
        if (n === 3) {
          setErr("prefCountry", !payload.preferredCountry); ok = ok && !!payload.preferredCountry;
          setErr("intake", !payload.intake); ok = ok && !!payload.intake;
          setErr("course", !payload.course.trim()); ok = ok && !!payload.course.trim();
        }
        if (n === 4) {
          setErr("msName", !payload.fullName.trim()); ok = ok && !!payload.fullName.trim();
          setErr("msEmail", !isEmail(payload.email)); ok = ok && isEmail(payload.email);
          setErr("msPhone", !isPhone(payload.phone)); ok = ok && isPhone(payload.phone);
        }

        return ok;
      }

      prevBtn?.addEventListener("click", () => showStep(Math.max(1, step - 1)));
      nextBtn?.addEventListener("click", () => {
        if (!validateStep(step)) return;
        showStep(Math.min(totalSteps, step + 1));
      });

      msForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!validateStep(4)) return;

        const payload = getMsPayload();
        await submitLead("Eligibility Multi-Step", payload);

        // prefill hint for talk modal
        sessionStorage.setItem("wwm_last_prefill", JSON.stringify({
          fullName: payload.fullName, email: payload.email, phone: payload.phone,
          preferredCountry: payload.preferredCountry, intake: payload.intake
        }));

        show(formSuccess);

        // hide form UI (keep success visible)
        steps.forEach(s => hide(s));
        prevBtn.disabled = true;
        hide(nextBtn);
        hide(submitBtn);
        if (progressBar) progressBar.style.width = "100%";
      });

      startOverBtn?.addEventListener("click", () => {
        msForm.reset();
        hide(formSuccess);
        showStep(1);
      });

      // Restore saved step (session)
      const savedStep = Number(sessionStorage.getItem("wwm_ms_step") || "1");
      showStep(savedStep >= 1 && savedStep <= totalSteps ? savedStep : 1);

      // ---------- Testimonials Carousel ----------
      const testimonials = [
        {
          name: "Aanya Sharma",
          meta: "UK • MSc Business Analytics",
          outcome: "Offer letter received in 12 days",
          quote: "World Wide Mission made the process simple. They helped me shortlist the right universities and guided every document step-by-step."
        },
        {
          name: "Rohit Verma",
          meta: "Europe • MSc Computer Science",
          outcome: "Shortlist finalized in 48 hours",
          quote: "The counselor gave me clear choices based on my budget and profile. The checklist approach removed a lot of confusion."
        },
        {
          name: "Neha Patel",
          meta: "UK • BSc Nursing Pathway",
          outcome: "Visa documentation done without rework",
          quote: "Their documentation support was the best part. Every requirement was explained clearly, and the follow-ups were timely."
        }
      ];

      let tIndex = 0;
      let tTimer = null;

      function renderTestimonial(i) {
        const t = testimonials[i];
        $("#tName").textContent = t.name;
        $("#tMeta").textContent = t.meta;
        $("#tOutcome").textContent = t.outcome;
        $("#tQuote").textContent = t.quote;

        $$(".tDot").forEach((dot, idx) => {
          dot.classList.toggle("bg-white/70", idx === i);
          dot.classList.toggle("bg-white/25", idx !== i);
        });
      }

      function startTestimonialAuto() {
        stopTestimonialAuto();
        tTimer = setInterval(() => {
          tIndex = (tIndex + 1) % testimonials.length;
          renderTestimonial(tIndex);
        }, 6000);
      }

      function stopTestimonialAuto() {
        if (tTimer) clearInterval(tTimer);
        tTimer = null;
      }

      $("#tPrev")?.addEventListener("click", () => {
        tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonial(tIndex);
        startTestimonialAuto();
      });

      $("#tNext")?.addEventListener("click", () => {
        tIndex = (tIndex + 1) % testimonials.length;
        renderTestimonial(tIndex);
        startTestimonialAuto();
      });

      $$(".tDot").forEach(dot => dot.addEventListener("click", () => {
        tIndex = Number(dot.dataset.index || "0");
        renderTestimonial(tIndex);
        startTestimonialAuto();
      }));

      renderTestimonial(tIndex);
      startTestimonialAuto();

      // ---------- Auto Popup (once per session) ----------
      const autoPopup = $("#autoPopup");
      const closeAuto = $("#closeAuto");
      const autoTalkBtn = $("#autoTalkBtn");
      const autoGoEligibility = $("#autoGoEligibility");

      function openAutoPopup() {
        if (!autoPopup) return;
        autoPopup.classList.remove("hidden");
        autoPopup.setAttribute("aria-hidden", "false");
        document.body.classList.add("overflow-hidden");
      }

      function closeAutoPopup() {
        if (!autoPopup) return;
        autoPopup.classList.add("hidden");
        autoPopup.setAttribute("aria-hidden", "true");
        document.body.classList.remove("overflow-hidden");
      }

      closeAuto?.addEventListener("click", closeAutoPopup);
      autoPopup?.addEventListener("click", (e) => {
        if (e.target === autoPopup || e.target === autoPopup.firstElementChild) closeAutoPopup();
      });

      autoTalkBtn?.addEventListener("click", () => {
        closeAutoPopup();
        const prefill = JSON.parse(sessionStorage.getItem("wwm_last_prefill") || "{}");
        openTalkModal(prefill);
      });

      autoGoEligibility?.addEventListener("click", () => {
        closeAutoPopup();
      });

      // show popup after delay, once per session
      if (!sessionStorage.getItem("wwm_auto_popup_shown")) {
        setTimeout(() => {
          sessionStorage.setItem("wwm_auto_popup_shown", "1");
          openAutoPopup();
        }, 3500);
      }

      // ---------- Prefill Talk Modal from last lead ----------
      const lastPrefill = JSON.parse(sessionStorage.getItem("wwm_last_prefill") || "{}");
      // If you want: openTalkModal(lastPrefill);

      // ---------- Improve UX: smooth scroll for anchor clicks ----------
      document.addEventListener("click", (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    
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
      

<div className="relative z-40">
<div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              2026–2027 Intakes Open
            </span>
<span className="hidden sm:inline text-slate-300">
              Get a quick eligibility check for UK &amp; Europe programs.
            </span>
</div>
<a className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-100 hover:text-white" href="#eligibility">
            Start now
            <iconify-icon className="text-slate-200" data-iconify-stroke="1.5" icon="solar:arrow-right-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
<a className="flex items-center gap-3" href="#">
<div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-slate-100">
              WW
            </span>
</div>
<div className="leading-tight">
<div className="text-sm sm:text-base font-semibold tracking-tight text-slate-100">
              World Wide Mission
            </div>
<div className="text-xs text-slate-400">
              UK &amp; Europe Education Consultancy
            </div>
</div>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-white" href="#why">Why Us</a>
<a className="hover:text-white" href="#countries">Countries</a>
<a className="hover:text-white" href="#benefits">Benefits</a>
<a className="hover:text-white" href="#uk-guide">UK Guide</a>
<a className="hover:text-white" href="#testimonials">Testimonials</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 text-sm font-medium text-white transition" href="#eligibility">
            Check Your Eligibility
          </a>
<button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-4 py-2 text-sm font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition" id="talkBtnTop">
            Talk to an Expert
          </button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.22),transparent_55%)]"></div>
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/65 to-slate-950"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:shield-check-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
              Trusted guidance for UK &amp; Europe
            </div>
<h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Study Abroad with World Wide Mission
            </h1>
<p className="mt-4 text-sm sm:text-base text-slate-200 max-w-2xl">
              Your trusted partner for UK &amp; European education. Get a fast
              eligibility check, course shortlisting, and end-to-end visa
              support—without confusion.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#eligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Check Your Eligibility
              </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-medium text-white transition" id="talkBtnHero">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Talk to an Expert
              </button>
</div>
<div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:document-text-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Fast profile review
                </div>
<div className="mt-2 text-xs text-slate-400">
                  Know your chances in minutes.
                </div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:passport-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Visa documentation
                </div>
<div className="mt-2 text-xs text-slate-400">
                  Clear checklist and support.
                </div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:medal-star-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Scholarship guidance
                </div>
<div className="mt-2 text-xs text-slate-400">
                  We help you explore options.
                </div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl shadow-black/30 overflow-hidden">
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-white">
                      Quick Eligibility Check
                    </div>
<div className="mt-1 text-xs sm:text-sm text-slate-300">
                      Start here—takes under a minute.
                    </div>
</div>
<div className="rounded-2xl bg-emerald-400/15 border border-emerald-300/20 px-3 py-1 text-xs text-emerald-200">
                    Free
                  </div>
</div>
<form autocomplete="on" className="mt-5 grid gap-3" id="heroLeadForm" novalidate="">
<div>
<label className="text-xs text-slate-300" htmlFor="heroName">
                      Full Name
                    </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="heroName" name="fullName" placeholder="e.g., Aanya Sharma" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:user-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="heroName">
                      Please enter your full name.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="heroEmail">
                        Email
                      </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="heroEmail" name="email" placeholder="you@email.com" type="email"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:letter-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="heroEmail">
                        Enter a valid email address.
                      </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="heroPhone">
                        Phone
                      </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="heroPhone" inputmode="tel" name="phone" placeholder="+91 00000 00000" type="tel"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:phone-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="heroPhone">
                        Enter a valid phone number.
                      </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="heroCountry">
                        Preferred Country
                      </label>
<div className="mt-1 relative">
<select className="w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="heroCountry" name="preferredCountry">
<option selected="" value="">Choose one</option>
<option>UK</option>
<option>Europe</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="heroCountry">
                        Please select a preferred country.
                      </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="heroIntake">
                        Intended Intake
                      </label>
<div className="mt-1 relative">
<select className="w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="heroIntake" name="intake">
<option selected="" value="">Select</option>
<option>2026</option>
<option>2027</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:calendar-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="heroIntake">
                        Please select an intake.
                      </p>
</div>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 text-sm font-semibold tracking-tight hover:from-blue-400 hover:to-indigo-400 transition" type="submit">
<iconify-icon data-iconify-stroke="1.5" icon="solar:magic-stick-3-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                    Check Eligibility Now
                  </button>
<div className="text-xs text-slate-400">
                    By continuing, you agree to be contacted by our counselor.
                  </div>
<div className="hidden mt-2 rounded-2xl bg-emerald-400/10 border border-emerald-300/20 p-4" id="heroLeadSuccess">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-emerald-100">
                          Submitted successfully
                        </div>
<div className="mt-1 text-xs text-emerald-200/80">
                          Our counselor will contact you shortly.
                        </div>
</div>
</div>
</div>
</form>
</div>
<div className="border-t border-white/10 bg-slate-950/30 p-5 sm:p-6">
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<iconify-icon data-iconify-stroke="1.5" icon="solar:verified-check-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                    Counsellor-backed review
                  </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<iconify-icon data-iconify-stroke="1.5" icon="solar:lock-password-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                    Privacy-first
                  </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clock-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                    Quick response
                  </span>
</div>
</div>
</div>
<div className="mt-5 text-xs text-slate-400">
              Looking for UG / PG / Visa guidance? Start with eligibility and
              we’ll personalize your pathway.
            </div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/75 backdrop-blur md:hidden">
<div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-3 text-sm font-semibold tracking-tight" href="#eligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
          Eligibility
        </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-4 py-3 text-sm font-semibold tracking-tight" id="talkBtnSticky">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
          Expert
        </button>
</div>
</div>

<section className="relative py-12 sm:py-16" id="eligibility">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Check your eligibility in 4 steps
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              Answer a few questions and get a counselor call-back. We’ll review
              course fit, documentation, and intake timelines.
            </p>
<div className="mt-6 rounded-3xl bg-white/5 border border-white/10 p-5 sm:p-6">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-semibold tracking-tight text-white">
                  What you’ll get
                </div>
<div className="text-xs text-slate-400">No obligation</div>
</div>
<div className="mt-4 grid gap-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">
                      Country &amp; course suggestions
                    </div>
<div className="text-xs text-slate-400">
                      Aligned to profile, budget, and intake.
                    </div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">
                      Documentation checklist
                    </div>
<div className="text-xs text-slate-400">
                      What to prepare and when.
                    </div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">
                      Scholarship &amp; IELTS route guidance
                    </div>
<div className="text-xs text-slate-400">
                      Options based on program requirements.
                    </div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
<div className="p-6 sm:p-7 border-b border-white/10">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-white">
                      Eligibility Form
                    </div>
<div className="mt-1 text-xs sm:text-sm text-slate-300">
                      Complete step-by-step—your progress is saved in this
                      session.
                    </div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1" id="stepPill">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      Step
                      <span id="stepNum">1</span>
                      /4
                    </span>
</div>
</div>
<div className="mt-5">
<div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-1/4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500" id="progressBar"></div>
</div>
</div>
</div>
<div className="p-6 sm:p-7">
<form className="grid gap-6" id="multiStepForm" novalidate="">

<div className="grid gap-4" data-step="1">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:graduationcap-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                      Academic Qualification
                    </div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="qualLevel">
                          Highest Qualification
                        </label>
<div className="mt-1 relative">
<select className="w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="qualLevel" name="qualification">
<option selected="" value="">Select</option>
<option>12th / High School</option>
<option>Diploma</option>
<option>Bachelor’s</option>
<option>Master’s</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="qualLevel">
                          Please select your qualification.
                        </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="qualScore">
                          Score / GPA (optional)
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="qualScore" name="score" placeholder="e.g., 7.2 CGPA / 82%" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chart-square-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="yearGrad">
                          Year of Completion
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="yearGrad" inputmode="numeric" name="completionYear" placeholder="e.g., 2024" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:calendar-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="yearGrad">
                          Enter a valid year (e.g., 2024).
                        </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="studyInterest">
                          Study Level Interested
                        </label>
<div className="mt-1 relative">
<select className="w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="studyInterest" name="studyLevel">
<option selected="" value="">Select</option>
<option>Undergraduate (UG)</option>
<option>Postgraduate (PG)</option>
<option>Visa Guidance</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="studyInterest">
                          Please select your interest.
                        </p>
</div>
</div>
</div>

<div className="grid gap-4 hidden" data-step="2">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:speaker-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                      IELTS / English Proficiency
                    </div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-medium text-slate-200">
                            Do you have IELTS / English proficiency results?
                          </div>
<div className="mt-1 text-xs text-slate-400">
                            If not, we can suggest suitable pathways and
                            no-IELTS options where applicable.
                          </div>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<label className="group cursor-pointer">
<input className="peer sr-only" name="ielts" type="radio" value="Yes"/>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 group-hover:bg-white/5 transition peer-checked:border-emerald-300/40 peer-checked:bg-emerald-400/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                                Yes
                              </div>
<div className="text-emerald-200 hidden peer-checked:block">
<iconify-icon data-iconify-stroke="1.5" icon="solar:verified-check-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
</div>
<div className="mt-1 text-xs text-slate-400">
                              Share score in the next step.
                            </div>
</div>
</label>
<label className="group cursor-pointer">
<input className="peer sr-only" name="ielts" type="radio" value="No"/>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 group-hover:bg-white/5 transition peer-checked:border-blue-300/40 peer-checked:bg-blue-500/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:info-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                                No
                              </div>
<div className="text-blue-200 hidden peer-checked:block">
<iconify-icon data-iconify-stroke="1.5" icon="solar:verified-check-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
</div>
<div className="mt-1 text-xs text-slate-400">
                              We’ll guide alternatives.
                            </div>
</div>
</label>
</div>
<p className="mt-2 text-xs text-rose-300 hidden" data-err="ielts">
                        Please select Yes or No.
                      </p>
</div>
</div>

<div className="grid gap-4 hidden" data-step="3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:globus-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                      Preferred Country &amp; Course
                    </div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="prefCountry">
                          Preferred Country
                        </label>
<div className="mt-1 relative">
<select className="w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="prefCountry" name="preferredCountry">
<option selected="" value="">Select</option>
<option>UK</option>
<option>Europe</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="prefCountry">
                          Please select a country.
                        </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="intake">
                          Intended Intake
                        </label>
<div className="mt-1 relative">
<select className="w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="intake" name="intake">
<option selected="" value="">Select</option>
<option>2026</option>
<option>2027</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:calendar-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="intake">
                          Please select an intake.
                        </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="course">
                          Preferred Course
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="course" name="course" placeholder="e.g., Business Analytics / CS / Nursing" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:book-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="course">
                          Please enter a preferred course.
                        </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="ieltsScore">
                          IELTS Score (if any)
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="ieltsScore" name="ieltsScore" placeholder="e.g., Overall 6.5" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:pen-2-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="grid gap-4 hidden" data-step="4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:call-chat-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                      Contact Details
                    </div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="msName">
                          Full Name
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="msName" name="fullName" placeholder="Your name" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:user-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="msName">
                          Please enter your name.
                        </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="msEmail">
                          Email Address
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="msEmail" name="email" placeholder="you@email.com" type="email"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:letter-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="msEmail">
                          Enter a valid email.
                        </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="msPhone">
                          Phone Number
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="msPhone" inputmode="tel" name="phone" placeholder="+00 00000 00000" type="tel"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:phone-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="msPhone">
                          Enter a valid phone number.
                        </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="msCity">
                          Current City (optional)
                        </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="msCity" name="city" placeholder="e.g., Mumbai" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:map-point-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-slate-300">
<iconify-icon data-iconify-stroke="1.5" icon="solar:shield-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">
                            We respect your privacy
                          </div>
<div className="mt-1 text-xs text-slate-400">
                            Your details are used only to connect you with a
                            counselor and provide guidance.
                          </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-medium text-white transition disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="prevBtn" type="button">
<iconify-icon data-iconify-stroke="1.5" icon="solar:arrow-left-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                      Back
                    </button>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 text-sm font-semibold tracking-tight hover:from-blue-400 hover:to-indigo-400 transition" id="nextBtn" type="button">
                        Next
                        <iconify-icon data-iconify-stroke="1.5" icon="solar:arrow-right-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</button>
<button className="hidden inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition" id="submitBtn" type="submit">
<iconify-icon data-iconify-stroke="1.5" icon="solar:paper-plane-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                        Submit
                      </button>
</div>
</div>
<div className="hidden rounded-3xl bg-emerald-400/10 border border-emerald-300/20 p-6" id="formSuccess">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-base font-semibold tracking-tight text-emerald-100">
                          Submitted
                        </div>
<div className="mt-1 text-sm text-emerald-200/80">
                          Our counselor will contact you shortly.
                        </div>
<div className="mt-4 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-medium text-white transition" id="startOverBtn" type="button">
<iconify-icon data-iconify-stroke="1.5" icon="solar:restart-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                            Start over
                          </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" id="talkBtnAfterSubmit" type="button">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                            Talk to an Expert
                          </button>
</div>
</div>
</div>
</div>
<p className="text-xs text-slate-400">
                    Backend/CRM: This demo stores leads in
                    <span className="text-slate-200">session storage</span>
                    and logs payload. Replace
                    <span className="text-slate-200">submitLead()</span>
                    with your API endpoint.
                  </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-900/30 border-y border-white/10" id="why">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Why choose World Wide Mission
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
              A professional, transparent process designed to reduce
              uncertainty—and increase your chances of success.
            </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-medium text-white transition" href="#eligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
            Check eligibility
          </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-blue-500/15 border border-blue-300/15 flex items-center justify-center text-blue-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:buildings-2-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                UK University Partnerships
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">
              Access up-to-date requirements, intakes, and program fit insights.
            </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-emerald-400/15 border border-emerald-300/15 flex items-center justify-center text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:passport-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                Visa Guidance &amp; Documentation
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">
              Structured document checks, timelines, and error-proof guidance.
            </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-amber-400/15 border border-amber-300/15 flex items-center justify-center text-amber-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                Personalized Counselling
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">
              Course, country, and intake strategy tailored to your profile.
            </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-indigo-500/15 border border-indigo-300/15 flex items-center justify-center text-indigo-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:medal-star-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                High Visa Success Rate
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">
              Process-led approach to reduce rework and improve outcomes.
            </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-sky-500/15 border border-sky-300/15 flex items-center justify-center text-sky-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:document-add-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                End-to-End Support
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">
              From shortlisting to offer letters to visa filing—guided at every
              step.
            </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-slate-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:shield-check-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                Transparent Process
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">
              Clear expectations, timelines, and support—no hidden surprises.
            </p>
</div>
</div>
<div className="mt-10 rounded-3xl bg-gradient-to-r from-white/8 via-white/5 to-white/8 border border-white/10 p-6 sm:p-7">
<div className="grid lg:grid-cols-12 gap-6 items-center">
<div className="lg:col-span-8">
<div className="text-base sm:text-lg font-semibold tracking-tight text-white">
                Want a counselor to review your profile now?
              </div>
<p className="mt-2 text-sm text-slate-300">
                Get a quick call-back with country + course options based on
                your profile.
              </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition" id="talkBtnWhy">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Talk to an Expert
              </button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-medium text-white transition" href="#eligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Check eligibility
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16" id="countries">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Popular destinations
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
              Shortlist the right country based on budget, post-study
              opportunities, and program fit.
            </p>
</div>
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Updated for 2026–2027
            </span>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<article className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/7 transition">
<div className="h-40 bg-cover bg-center opacity-90 group-hover:opacity-100 transition" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&amp'}}></div>
<div className="p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold tracking-tight text-white">
                    United Kingdom
                  </h3>
<p className="mt-1 text-sm text-slate-300">
                    1-year masters, wide program options.
                  </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-300/15 px-3 py-1 text-xs text-blue-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:map-point-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  UK
                </span>
</div>
<ul className="mt-4 grid gap-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  Fast offer-letter guidance &amp; timelines
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  Visa documentation support
                </li>
</ul>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2.5 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#eligibility">
                  Check eligibility
                  <iconify-icon data-iconify-stroke="1.5" icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition" data-talk="">
                  Ask expert
                </button>
</div>
</div>
</article>
<article className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/7 transition">
<div className="h-40 bg-cover bg-center opacity-90 group-hover:opacity-100 transition" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?auto=format&amp'}}></div>
<div className="p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold tracking-tight text-white">
                    Europe
                  </h3>
<p className="mt-1 text-sm text-slate-300">
                    Diverse universities &amp; scholarships.
                  </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 border border-emerald-300/15 px-3 py-1 text-xs text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:globus-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  EU
                </span>
</div>
<ul className="mt-4 grid gap-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  Program shortlisting by profile &amp; budget
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  Scholarship &amp; pathway guidance
                </li>
</ul>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2.5 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#eligibility">
                  Check eligibility
                  <iconify-icon data-iconify-stroke="1.5" icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition" data-talk="">
                  Ask expert
                </button>
</div>
</div>
</article>
<article className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/7 transition">
<div className="h-40 bg-cover bg-center opacity-90 group-hover:opacity-100 transition" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&amp'}}></div>
<div className="p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold tracking-tight text-white">
                    Not sure yet?
                  </h3>
<p className="mt-1 text-sm text-slate-300">
                    We’ll recommend the best fit.
                  </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-300/15 px-3 py-1 text-xs text-amber-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:compass-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  Guidance
                </span>
</div>
<ul className="mt-4 grid gap-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  Intake planning &amp; documentation checklist
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                  IELTS/no-IELTS pathways where applicable
                </li>
</ul>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-4 py-2.5 text-sm font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition w-full sm:w-auto" data-talk="">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                  Talk to an Expert
                </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-900/30 border-y border-white/10" id="benefits">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              A simple process. Strong outcomes.
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
              We break down the journey into predictable steps—so you always
              know what’s next.
            </p>
<div className="mt-6 rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
<iconify-icon data-iconify-stroke="1.5" icon="solar:route-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                What happens after you submit?
              </div>
<ol className="mt-4 grid gap-3 text-sm text-slate-300">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-7 w-7 rounded-xl bg-blue-500/15 border border-blue-300/15 text-blue-200 flex items-center justify-center text-xs font-semibold">
                    1
                  </span>
<div>
<div className="font-medium text-slate-200">
                      Counselor connects with you
                    </div>
<div className="text-xs text-slate-400">
                      We confirm goals, budget, timeline.
                    </div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-7 w-7 rounded-xl bg-emerald-400/15 border border-emerald-300/15 text-emerald-200 flex items-center justify-center text-xs font-semibold">
                    2
                  </span>
<div>
<div className="font-medium text-slate-200">
                      Shortlist + application plan
                    </div>
<div className="text-xs text-slate-400">
                      Course fit, documents, deadlines.
                    </div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-7 w-7 rounded-xl bg-amber-400/15 border border-amber-300/15 text-amber-200 flex items-center justify-center text-xs font-semibold">
                    3
                  </span>
<div>
<div className="font-medium text-slate-200">
                      Offer letter &amp; visa filing
                    </div>
<div className="text-xs text-slate-400">
                      Checklist-driven, guided end-to-end.
                    </div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-7 w-7 rounded-xl bg-indigo-500/15 border border-indigo-300/15 text-indigo-200 flex items-center justify-center text-xs font-semibold">
                    4
                  </span>
<div>
<div className="font-medium text-slate-200">
                      Pre-departure support
                    </div>
<div className="text-xs text-slate-400">
                      Accommodation, travel, basics.
                    </div>
</div>
</li>
</ol>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-emerald-400/15 border border-emerald-300/15 flex items-center justify-center text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:document-text-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                    Document-first approach
                  </div>
</div>
<p className="mt-3 text-sm text-slate-300">
                  We reduce rework by verifying documents early and following a
                  strict checklist.
                </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-blue-500/15 border border-blue-300/15 flex items-center justify-center text-blue-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:calendar-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                    Intake timeline planning
                  </div>
</div>
<p className="mt-3 text-sm text-slate-300">
                  We map tasks to deadlines so you move fast without missing
                  requirements.
                </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-amber-400/15 border border-amber-300/15 flex items-center justify-center text-amber-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:wallet-money-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                    Budget clarity
                  </div>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Tuition, living expenses, scholarships—explained
                  transparently.
                </p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-indigo-500/15 border border-indigo-300/15 flex items-center justify-center text-indigo-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:shield-check-linear" style={{fontSize: '1.3rem'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">
                    Error-proof guidance
                  </div>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Our structured review helps reduce common application and visa
                  errors.
                </p>
</div>
</div>
<div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-emerald-400/10 border border-white/10 p-6 sm:p-7">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="text-base font-semibold tracking-tight text-white">
                    Ready to get a personalized shortlist?
                  </div>
<div className="mt-1 text-sm text-slate-300">
                    Submit eligibility and we’ll recommend a country + course
                    path.
                  </div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#eligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Start eligibility
                </a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-12 sm:py-16 bg-slate-900/30 border-b border-white/10" id="uk-guide">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Download: The Complete UK Admission Guide
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              Get our guide
              <span className="text-slate-200">
                “The-Complete-UK-Admission-Guide”
              </span>
              and understand intakes, documents, timelines, and common mistakes.
            </p>
<div className="mt-6 rounded-3xl bg-white/5 border border-white/10 p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:file-text-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">
                    What’s inside
                  </div>
<ul className="mt-2 grid gap-1.5 text-sm text-slate-300">
<li>• Intake planning (2026–2027)</li>
<li>• Document checklist</li>
<li>• IELTS / pathway options</li>
</ul>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
<div className="p-6 sm:p-7 border-b border-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-white">
                      Get the PDF in your email
                    </div>
<div className="mt-1 text-xs sm:text-sm text-slate-300">
                      Submit details to download instantly.
                    </div>
</div>
<div className="rounded-2xl bg-blue-500/10 border border-blue-300/15 px-3 py-1 text-xs text-blue-200">
                    Free PDF
                  </div>
</div>
</div>
<div className="p-6 sm:p-7">
<form className="grid gap-3" id="guideForm" novalidate="">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="guideName">
                        Full Name
                      </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="guideName" name="fullName" placeholder="Your name" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:user-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="guideName">
                        Please enter your name.
                      </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="guideEmail">
                        Email
                      </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="guideEmail" name="email" placeholder="you@email.com" type="email"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:letter-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="guideEmail">
                        Enter a valid email.
                      </p>
</div>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="guidePhone">
                      Phone
                    </label>
<div className="mt-1 relative">
<input className="w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/35 focus:border-blue-300/25" id="guidePhone" inputmode="tel" name="phone" placeholder="+00 00000 00000" type="tel"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon data-iconify-stroke="1.5" icon="solar:phone-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</div>
</div>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="guidePhone">
                      Enter a valid phone number.
                    </p>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 text-sm font-semibold tracking-tight hover:from-blue-400 hover:to-indigo-400 transition" type="submit">
<iconify-icon data-iconify-stroke="1.5" icon="solar:download-minimalistic-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                    Get the PDF
                  </button>
<div className="hidden mt-2 rounded-2xl bg-emerald-400/10 border border-emerald-300/20 p-4" id="guideSuccess">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-emerald-100">
                          Ready to download
                        </div>
<div className="mt-1 text-xs text-emerald-200/80">
                          Your guide will also be emailed. You can download it
                          now.
                        </div>
<div className="mt-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2.5 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" download="" href="The-Complete-UK-Admission-Guide.pdf" id="guideDownload">
<iconify-icon data-iconify-stroke="1.5" icon="solar:file-download-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                            Download PDF
                          </a>
</div>
</div>
</div>
</div>
<p className="text-xs text-slate-400">
                    We’ll use your details only to share the guide and admission
                    updates.
                  </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16" id="testimonials">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Student stories
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
              Real outcomes powered by a clean process and proactive support.
            </p>
</div>
<div className="flex items-center gap-2">
<button aria-label="Previous testimonial" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 h-11 w-11 transition" id="tPrev">
<iconify-icon data-iconify-stroke="1.5" icon="solar:arrow-left-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</button>
<button aria-label="Next testimonial" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 h-11 w-11 transition" id="tNext">
<iconify-icon data-iconify-stroke="1.5" icon="solar:arrow-right-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
<div className="p-6 sm:p-7">
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-slate-400">
                Auto-rotates every 6 seconds
              </div>
<div aria-label="Testimonial indicators" className="flex items-center gap-2">
<button aria-label="Go to testimonial 1" className="tDot h-2.5 w-2.5 rounded-full bg-white/25 hover:bg-white/50 transition" data-index="0"></button>
<button aria-label="Go to testimonial 2" className="tDot h-2.5 w-2.5 rounded-full bg-white/25 hover:bg-white/50 transition" data-index="1"></button>
<button aria-label="Go to testimonial 3" className="tDot h-2.5 w-2.5 rounded-full bg-white/25 hover:bg-white/50 transition" data-index="2"></button>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-12 gap-6 items-center">
<div className="lg:col-span-4">
<div className="rounded-3xl bg-slate-950/40 border border-white/10 p-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-emerald-400/20 border border-white/10 flex items-center justify-center">
<iconify-icon data-iconify-stroke="1.5" icon="solar:user-circle-linear" style={{fontSize: '1.6rem'}}></iconify-icon>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-white" id="tName">
                        Aanya Sharma
                      </div>
<div className="text-xs text-slate-400" id="tMeta">
                        UK • MSc Business Analytics
                      </div>
</div>
</div>
<div aria-label="Rating 5 out of 5" className="mt-4 flex items-center gap-2 text-amber-200">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
<div className="mt-4 text-xs text-slate-400">Outcome</div>
<div className="mt-1 text-sm text-slate-200 font-medium" id="tOutcome">
                    Offer letter received in 12 days
                  </div>
</div>
</div>
<div className="lg:col-span-8">
<div className="rounded-3xl bg-slate-950/35 border border-white/10 p-6 sm:p-7">
<div className="text-slate-300 text-sm leading-relaxed">
<span className="text-slate-200 font-semibold">“</span>
<span id="tQuote">
                      World Wide Mission made the process simple. They helped me
                      shortlist the right universities and guided every document
                      step-by-step.
                    </span>
<span className="text-slate-200 font-semibold">”</span>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-3">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-slate-400">Counselling</div>
<div className="mt-1 text-sm text-slate-200 font-medium">
                        Personalized
                      </div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-slate-400">Documentation</div>
<div className="mt-1 text-sm text-slate-200 font-medium">
                        Checklist-driven
                      </div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-slate-400">Support</div>
<div className="mt-1 text-sm text-slate-200 font-medium">
                        End-to-end
                      </div>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#eligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                      Check eligibility
                    </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-3 text-sm font-medium text-white transition" data-talk="">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                      Talk to an Expert
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12">
<div className="flex items-end justify-between gap-4">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                FAQs
              </h3>
<p className="mt-2 text-sm text-slate-300">
                Quick answers to common questions.
              </p>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-2 gap-4">
<details className="group rounded-3xl bg-white/5 border border-white/10 p-6">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-sm font-semibold tracking-tight text-white">
                  How soon will I get a call after I submit?
                </span>
<span className="text-slate-300 group-open:rotate-180 transition">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300">
                Typically within 24 hours (often sooner). For urgent cases, use
                the WhatsApp button to connect instantly.
              </p>
</details>
<details className="group rounded-3xl bg-white/5 border border-white/10 p-6">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-sm font-semibold tracking-tight text-white">
                  Do you help with scholarships?
                </span>
<span className="text-slate-300 group-open:rotate-180 transition">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300">
                Yes. We guide you on eligibility, documentation, and timelines
                based on your chosen university and intake.
              </p>
</details>
<details className="group rounded-3xl bg-white/5 border border-white/10 p-6">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-sm font-semibold tracking-tight text-white">
                  Can I apply without IELTS?
                </span>
<span className="text-slate-300 group-open:rotate-180 transition">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300">
                In some cases, yes—depending on country, university, and your
                academic background. We’ll suggest suitable pathways.
              </p>
</details>
<details className="group rounded-3xl bg-white/5 border border-white/10 p-6">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-sm font-semibold tracking-tight text-white">
                  Is my data safe?
                </span>
<span className="text-slate-300 group-open:rotate-180 transition">
<iconify-icon data-iconify-stroke="1.5" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm text-slate-300">
                Yes. This demo uses session storage only. For production,
                connect your CRM with secure server-side handling.
              </p>
</details>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-5">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-slate-100">
                  WW
                </span>
</div>
<div className="leading-tight">
<div className="text-base font-semibold tracking-tight text-white">
                  World Wide Mission
                </div>
<div className="text-xs text-slate-400">
                  UK &amp; Europe Education Consultancy
                </div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300 max-w-xl">
              Helping students confidently navigate UK &amp; Europe admissions
              with eligibility checks, documentation guidance, and visa support.
            </p>
<div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clock-circle-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                Mon–Sat • 10:00–19:00
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
<iconify-icon data-iconify-stroke="1.5" icon="solar:shield-check-linear" style={{fontSize: '1.05rem'}}></iconify-icon>
                Transparent counselling
              </span>
</div>
</div>
<div className="lg:col-span-3">
<div className="text-sm font-semibold tracking-tight text-white">
              Quick links
            </div>
<ul className="mt-4 grid gap-2 text-sm text-slate-300">
<li>
<a className="hover:text-white transition" href="#eligibility">
                  Eligibility
                </a>
</li>
<li>
<a className="hover:text-white transition" href="#why">Why Us</a>
</li>
<li>
<a className="hover:text-white transition" href="#countries">
                  Countries
                </a>
</li>
<li>
<a className="hover:text-white transition" href="#uk-guide">
                  UK Guide
                </a>
</li>
<li>
<a className="hover:text-white transition" href="#testimonials">
                  Testimonials
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-4">
<div className="text-sm font-semibold tracking-tight text-white">
              Contact
            </div>
<div className="mt-4 grid gap-3 text-sm text-slate-300">
<a className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/7 transition" href="mailto:hello@worldwidemission.example">
<iconify-icon data-iconify-stroke="1.5" icon="solar:letter-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                hello@worldwidemission.example
              </a>
<a className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/7 transition" href="tel:+000000000000">
<iconify-icon data-iconify-stroke="1.5" icon="solar:phone-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                +00 0000 000000
              </a>
<button className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-4 py-3 font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition" id="talkBtnFooter">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                Talk to an Expert
              </button>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
<div>
            ©
            <span id="year"></span>
            World Wide Mission. All rights reserved.
          </div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300 transition" href="#">Privacy</a>
<a className="hover:text-slate-300 transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 group" href="#" id="waBtn" rel="noopener" target="_blank">
<span className="absolute -inset-2 rounded-full bg-emerald-400/15 blur-xl opacity-60 group-hover:opacity-90 transition"></span>
<span className="relative inline-flex items-center gap-2 rounded-full bg-emerald-400 text-slate-950 px-4 py-3 shadow-xl shadow-black/35 font-semibold tracking-tight hover:bg-emerald-300 transition">
<iconify-icon icon="ic:baseline-whatsapp" style={{fontSize: '1.25rem'}}></iconify-icon>
        WhatsApp
      </span>
</a>

<div aria-hidden="true" className="fixed inset-0 z-[60] hidden" id="talkModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative min-h-full flex items-end sm:items-center justify-center p-4">
<div aria-labelledby="talkTitle" aria-modal="true" className="w-full max-w-lg rounded-3xl bg-slate-950 border border-white/10 shadow-2xl shadow-black/40 overflow-hidden" role="dialog">
<div className="p-6 sm:p-7 border-b border-white/10 flex items-start justify-between gap-4">
<div>
<div className="text-lg font-semibold tracking-tight text-white" id="talkTitle">
                Talk to an Expert
              </div>
<div className="mt-1 text-sm text-slate-300">
                Leave your details—our counselor will call you back.
              </div>
</div>
<button aria-label="Close modal" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition" id="closeTalk">
<iconify-icon data-iconify-stroke="1.5" icon="solar:close-circle-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</button>
</div>
<div className="p-6 sm:p-7">
<form className="grid gap-3" id="talkForm" novalidate="">
<div>
<label className="text-xs text-slate-300" htmlFor="talkName">
                  Full Name
                </label>
<input className="mt-1 w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="talkName" name="fullName" placeholder="Your name" type="text"/>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="talkName">
                  Please enter your name.
                </p>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="talkEmail">
                    Email
                  </label>
<input className="mt-1 w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="talkEmail" name="email" placeholder="you@email.com" type="email"/>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="talkEmail">
                    Enter a valid email.
                  </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="talkPhone">
                    Phone
                  </label>
<input className="mt-1 w-full rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="talkPhone" inputmode="tel" name="phone" placeholder="+00 00000 00000" type="tel"/>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="talkPhone">
                    Enter a valid phone.
                  </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-300" htmlFor="talkCountry">
                    Preferred Country
                  </label>
<select className="mt-1 w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="talkCountry" name="preferredCountry">
<option selected="" value="">Select</option>
<option>UK</option>
<option>Europe</option>
<option>Other</option>
</select>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="talkCountry">
                    Please select a country.
                  </p>
</div>
<div>
<label className="text-xs text-slate-300" htmlFor="talkIntake">
                    Intake
                  </label>
<select className="mt-1 w-full appearance-none rounded-xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-emerald-300/30" id="talkIntake" name="intake">
<option selected="" value="">Select</option>
<option>2026</option>
<option>2027</option>
</select>
<p className="mt-1 text-xs text-rose-300 hidden" data-err="talkIntake">
                    Please select an intake.
                  </p>
</div>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition" type="submit">
<iconify-icon data-iconify-stroke="1.5" icon="solar:phone-calling-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Request call-back
              </button>
<div className="hidden mt-2 rounded-2xl bg-emerald-400/10 border border-emerald-300/20 p-4" id="talkSuccess">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-emerald-100">
                      Request received
                    </div>
<div className="mt-1 text-xs text-emerald-200/80">
                      We’ll contact you shortly.
                    </div>
</div>
</div>
</div>
<p className="text-xs text-slate-400">
                Press
                <span className="text-slate-200">Esc</span>
                to close. We never spam.
              </p>
</form>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="fixed inset-0 z-[70] hidden" id="autoPopup">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative min-h-full flex items-end sm:items-center justify-center p-4">
<div aria-labelledby="autoTitle" aria-modal="true" className="w-full max-w-lg rounded-3xl bg-slate-950 border border-white/10 shadow-2xl shadow-black/40 overflow-hidden" role="dialog">
<div className="p-6 sm:p-7 border-b border-white/10 flex items-start justify-between gap-4">
<div>
<div className="text-lg font-semibold tracking-tight text-white" id="autoTitle">
                Get a free eligibility check
              </div>
<div className="mt-1 text-sm text-slate-300">
                Fast guidance for UK &amp; Europe intakes (2026–2027).
              </div>
</div>
<button aria-label="Close popup" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition" id="closeAuto">
<iconify-icon data-iconify-stroke="1.5" icon="solar:close-circle-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</button>
</div>
<div className="p-6 sm:p-7">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-200">
<iconify-icon data-iconify-stroke="1.5" icon="solar:check-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">
                    In this call, we’ll cover
                  </div>
<ul className="mt-2 grid gap-1.5 text-sm text-slate-300">
<li>• Best-fit country &amp; course shortlist</li>
<li>• Documents required and timeline</li>
<li>• IELTS / pathway options</li>
</ul>
</div>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#eligibility" id="autoGoEligibility">
<iconify-icon data-iconify-stroke="1.5" icon="solar:clipboard-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Start eligibility
              </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 px-5 py-3 text-sm font-semibold tracking-tight hover:from-emerald-300 hover:to-emerald-200 transition" id="autoTalkBtn">
<iconify-icon data-iconify-stroke="1.5" icon="solar:chat-round-dots-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                Talk to an Expert
              </button>
</div>
<p className="mt-4 text-xs text-slate-400">
              Shown once per session. You can close it anytime.
            </p>
</div>
</div>
</div>
</div>


    </>
  );
}
