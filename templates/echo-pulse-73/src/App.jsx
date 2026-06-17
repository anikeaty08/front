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



      // In-memory data object (global) — ONLY requested fields
      const sample = {
        patient: {
          id: "P-1029",
          name: "Jordan K.",
          room: "3B-214",
          consent: {
            share_mood_trends: true,
            share_sentiment_trends: true,
            share_raw_journal_text: false,
            share_behaviors: true,
            auto_track_phq_gad: true
          },
          // Added fields
          logins: ["2025-09-17T08:02:00Z", "2025-09-16T07:58:00Z"],
          mood_entries: [
            {"date":"2025-09-15","score":2},
            {"date":"2025-09-16","score":2},
            {"date":"2025-09-17","score":3}
          ],
          prompts: { issued_7d: 10, answered_7d: 7 },
          practices: { assigned_week: 6, completed_week: 3 }
        },
        facility: {
          unit: "3B",
          // Added fields
          residents: [
            {"id":"P-1029","name":"Jordan K.","room":"3B-214","risk":"R2","lastPHQ9":16,"lastLogin":"2025-09-17","flags":1},
            {"id":"P-2041","name":"Sam R.","room":"3B-218","risk":"R1","lastPHQ9":8,"lastLogin":"2025-09-16","flags":0}
          ]
        }
      };
      window.sample = sample;

      // DATA SAFETY: ensure mood_entries exists as an array
      try {
        if (!sample.patient) sample.patient = {};
        if (!Array.isArray(sample.patient.mood_entries)) sample.patient.mood_entries = [];
      } catch (e) { /* no-op */ }

      // Ensure journal data exists (per request)
      try {
        if (typeof sample.patient.journal_entries === 'undefined') {
          sample.patient.journal_entries = [
            { date: "2025-09-16", text: "Felt overwhelmed at work today." }
          ];
        }
      } catch (e) { /* no-op */ }

      // Ensure mood_entries exists with at least 3 entries within last 30 days
      try {
        const ensureRecentDates = (n=3) => {
          const out = [];
          const now = new Date();
          for (let i=0; i<n; i++) {
            const d = new Date(now);
            d.setDate(now.getDate() - i - 1);
            out.push({ date: d.toISOString().slice(0,10), score: Math.max(1, Math.min(5, 3 + (i%3) - 1)) });
          }
          return out.reverse();
        };
        if (!Array.isArray(sample.patient.mood_entries) || sample.patient.mood_entries.length < 3) {
          sample.patient.mood_entries = ensureRecentDates(3);
        } else {
          // If older than 30d, regenerate minimal set
          const within30 = sample.patient.mood_entries.some(m => {
            const diff = (new Date() - new Date(m.date)) / (1000*60*60*24);
            return diff <= 30;
          });
          if (!within30) {
            sample.patient.mood_entries = ensureRecentDates(3);
          }
        }
      } catch(e){ /* no-op */ }

      // Ensure practices object has assigned_week and completed_week
      try {
        if (!sample.patient.practices || typeof sample.patient.practices.assigned_week !== 'number' || typeof sample.patient.practices.completed_week !== 'number') {
          sample.patient.practices = { assigned_week: 4, completed_week: 2 };
        }
      } catch(e){ /* no-op */ }

      // DATA SAFETY (Facility): aggregates + at least two residents (P-1029, P-2041)
      try {
        sample.facility = sample.facility || {};
        if (!sample.facility.aggregates) {
          sample.facility.aggregates = {
            risk_dist: {"R0":0,"R1":1,"R2":1,"R3":0,"R4":0},
            response_rate_7d: 62,
            adherence_avg_week: 50,
            alerts_24h: 1
          };
        }
        if (!Array.isArray(sample.facility.residents)) sample.facility.residents = [];
        const ensureResident = (id, fallback) => {
          if (!sample.facility.residents.some(r => r.id === id)) sample.facility.residents.push(fallback);
        };
        ensureResident("P-1029", {"id":"P-1029","name":"Jordan K.","room":"3B-214","risk":"R2","lastPHQ9":16,"lastLogin":"2025-09-17","flags":1});
        ensureResident("P-2041", {"id":"P-2041","name":"Sam R.","room":"3B-218","risk":"R1","lastPHQ9":8,"lastLogin":"2025-09-16","flags":0});
      } catch(e){ /* no-op */ }

      // Global small util object with pure helpers
      const util = {
        responseRate: (issued, answered) => {
          if (!issued || issued <= 0) return 0;
          return Math.round((answered / issued) * 100);
        },
        adherenceThisWeek: (assigned, completed) => {
          if (!assigned || assigned <= 0) return 0;
          return Math.round((completed / assigned) * 100);
        },
        daysSince: (isoDateString) => {
          try {
            const then = new Date(isoDateString);
            const now = new Date();
            const ms = now - then;
            return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
          } catch(e) { return 0; }
        }
      };
      window.util = util;

      // SAFETY: add util helpers only if missing (idempotent)
      try {
        if (!window.util) window.util = {};
        if (!util.responseRate) util.responseRate = (issued, answered) => (!issued ? 0 : Math.round((answered/issued)*100));
        if (!util.adherenceThisWeek) util.adherenceThisWeek = (assigned, completed) => (!assigned ? 0 : Math.round((completed/assigned)*100));
        if (!util.daysSince) util.daysSince = (iso) => { try{ const d=new Date(iso); return Math.max(0,Math.floor((Date.now()-d.getTime())/(1000*60*60*24))); }catch(e){return 0;} };
      } catch (e) { /* no-op */ }

      // Add redaction helper if not present (per request)
      if (!window.util.redactByConsent) {
        window.util.redactByConsent = (text, canShareRaw) => (canShareRaw ? text : "(hidden by consent)");
      }

      // App state (HASH-ONLY routing)
      const route = { current: "/role-select" };

      // Client-side routes
      const routes = {
        "/role-select": "route-role-select",
        "/patient/home": "route-patient-home",
        "/caregiver/home": "route-caregiver-home",
        "/family/home": "route-family-home",
        "/facility/dashboard": "route-facility-dashboard",
        "/patient/consent": "route-patient-consent",
        "/patient/journal": "route-patient-journal",
      };

      // Single helper
      function nav(path) { location.hash = "#" + path; }

      function render(path) {
        const p = path || route.current || "/role-select";

        // Resolve dynamic caregiver patient route + facility resident route
        let targetId;
        if (p.startsWith("/caregiver/patient/")) {
          targetId = "route-caregiver-patient";
        } else if (p.startsWith("/facility/resident/")) {
          targetId = "route-facility-resident";
        } else {
          targetId = routes[p] || routes["/role-select"];
        }

        const allSections = Array.from(document.querySelectorAll('main > section'));

        // Toggle visibility
        allSections.forEach(sec => {
          if (sec.id === targetId) {
            sec.classList.remove("hidden");
          } else {
            sec.classList.add("hidden");
          }
        });

        // Active section reference
        const active = document.getElementById(targetId);

        // Update "Current route" lines
        const currSpans = active ? Array.from(active.querySelectorAll('[data-current-route]')) : [];
        currSpans.forEach(sp => (sp.textContent = route.current));

        // Facility DEV line render + KPIs + resident list
        if (targetId === routes["/facility/dashboard"] && active) {
          const devPeek = active.querySelector('#facility-dev-peek');
          if (devPeek) {
            try {
              const name = (window.sample && window.sample.patient && window.sample.patient.name) ? window.sample.patient.name : "";
              const unit = (window.sample && window.sample.facility && window.sample.facility.unit) ? window.sample.facility.unit : "";
              devPeek.textContent = `DEV: unit=${unit}, patient=${name}`;
            } catch (e) {
              devPeek.textContent = 'DEV: unit=, patient=';
            }
          }

          // KPIs
          try {
            const agg = (window.sample && window.sample.facility && window.sample.facility.aggregates) || {};
            const dist = agg.risk_dist || {};
            const kpiRisk = active.querySelector('#kpi-risk-dist');
            const kpiResp = active.querySelector('#kpi-response-7d');
            const kpiAdh = active.querySelector('#kpi-adherence-week');
            const kpiAlerts = active.querySelector('#kpi-alerts-24h');
            if (kpiRisk) kpiRisk.textContent = `Residents by Risk: R0=${dist.R0 || 0}, R1=${dist.R1 || 0}, R2=${dist.R2 || 0}, R3=${dist.R3 || 0}, R4=${dist.R4 || 0}`;
            if (kpiResp) kpiResp.textContent = `7d Response Avg: ${agg.response_rate_7d != null ? agg.response_rate_7d : 0}%`;
            if (kpiAdh) kpiAdh.textContent = `Practice Adherence Avg (week): ${agg.adherence_avg_week != null ? agg.adherence_avg_week : 0}%`;
            if (kpiAlerts) kpiAlerts.textContent = `Alerts (last 24h): ${agg.alerts_24h != null ? agg.alerts_24h : 0}`;
          } catch (e) {
            // no-op
          }

          // Render resident list (plain lines + inline Open button)
          const listParent = active.querySelector('#facility-resident-list');
          if (listParent) {
            listParent.innerHTML = "";
            try {
              const residents = (window.sample && window.sample.facility && Array.isArray(window.sample.facility.residents))
                ? window.sample.facility.residents : [];
              residents.forEach(r => {
                const row = document.createElement('div');
                row.className = "text-[14px] text-slate-800";
                const span = document.createElement('span');
                span.textContent = `${r.name} — Room ${r.room} — Risk ${r.risk} `;
                const btn = document.createElement('button');
                btn.type = "button";
                btn.textContent = "Open";
                btn.className = "ml-2 text-[13px] text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded px-1 py-0.5";
                btn.setAttribute('onclick', "try { location.hash = '#/facility/resident/" + r.id + "'; } catch(e){}");
                row.appendChild(span);
                row.appendChild(btn);
                listParent.appendChild(row);
              });
            } catch (e) {
              // no-op
            }
          }
        }

        // Caregiver Home: render assigned list
        if (targetId === routes["/caregiver/home"] && active) {
          const listParent = active.querySelector('#caregiver-resident-list');
          if (listParent) {
            listParent.innerHTML = "";
            try {
              const residents = (window.sample && window.sample.facility && Array.isArray(window.sample.facility.residents))
                ? window.sample.facility.residents : [];
              residents.forEach(r => {
                const row = document.createElement('div');
                row.className = "text-[14px] text-slate-800 flex items-center justify-between bg-white border border-slate-200 rounded-[10px] px-3 py-2";
                const txt = document.createElement('span');
                txt.textContent = `${r.name} — Room ${r.room} — Risk ${r.risk}`;
                const btn = document.createElement('button');
                btn.type = "button";
                btn.textContent = "Open Report";
                btn.className = "text-[13px] text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded px-2 py-1";
                btn.setAttribute('onclick', "try { location.hash = '#/caregiver/patient/" + r.id + "'; } catch(e){}");
                row.appendChild(txt);
                row.appendChild(btn);
                listParent.appendChild(row);
              });
            } catch (e) {
              // no-op
            }
          }
        }

        // Caregiver Patient Report: parse id and render (updated per request)
        if (targetId === "route-caregiver-patient" && active) {
          try {
            const parts = (p || "").split("/");
            const id = parts[3] || "";
            const residents = (window.sample && window.sample.facility && Array.isArray(window.sample.facility.residents))
              ? window.sample.facility.residents : [];
            let res = residents.find(x => x.id === id);
            if (!res) res = residents[0];

            // Heading bind
            const headingBind = active.querySelector('[data-heading]');
            if (headingBind) {
              headingBind.textContent = `Caregiver Report — ${res?.name || ''} (${res?.id || ''})`;
            }

            // Overview lines
            const roomEl = active.querySelector('[data-cg-room]');
            const riskEl = active.querySelector('[data-cg-risk]');
            const rrEl = active.querySelector('[data-cg-rr]');
            const adhEl = active.querySelector('[data-cg-adh]');
            const daysEl = active.querySelector('[data-cg-days]');
            const consentEl = active.querySelector('[data-cg-consent]');

            if (roomEl) roomEl.textContent = `Room: ${res?.room || '—'}`;
            if (riskEl) riskEl.textContent = `Risk: ${res?.risk || '—'}`;

            // Show computed stats for main demo patient only
            const isMainPatient = !!(res && window.sample && window.sample.patient && res.id === window.sample.patient.id);
            if (isMainPatient) {
              const issued = (window.sample.patient.prompts && window.sample.patient.prompts.issued_7d) || 0;
              const answered = (window.sample.patient.prompts && window.sample.patient.prompts.answered_7d) || 0;
              const rr = (window.util && typeof window.util.responseRate === 'function') ? window.util.responseRate(issued, answered) : 0;

              const assigned = (window.sample.patient.practices && window.sample.patient.practices.assigned_week) || 0;
              const completed = (window.sample.patient.practices && window.sample.patient.practices.completed_week) || 0;
              const adh = (window.util && typeof window.util.adherenceThisWeek === 'function') ? window.util.adherenceThisWeek(assigned, completed) : 0;

              const lastLogin = (Array.isArray(window.sample.patient.logins) && window.sample.patient.logins[0]) ? window.sample.patient.logins[0] : new Date().toISOString();
              const days = (window.util && typeof window.util.daysSince === 'function') ? window.util.daysSince(lastLogin) : 0;

              if (rrEl) { rrEl.textContent = `7d Response Rate: ${rr}%`; rrEl.style.display = ''; }
              if (adhEl) { adhEl.textContent = `This Week Adherence: ${adh}%`; adhEl.style.display = ''; }
              if (daysEl) { daysEl.textContent = `Days Since Patient Last Login: ${days}`; daysEl.style.display = ''; }

              if (consentEl) {
                const on = !!(window.sample.patient.consent && window.sample.patient.consent.share_raw_journal_text);
                consentEl.textContent = `Consent (raw journal text): ${on ? 'ON' : 'OFF'}`;
              }
            } else {
              if (rrEl) rrEl.style.display = 'none';
              if (adhEl) adhEl.style.display = 'none';
              if (daysEl) daysEl.style.display = 'none';
              if (consentEl) consentEl.textContent = 'Consent: not available for this resident (demo).';
            }
          } catch (e) {
            // no-op
          }
        }

        // Facility Resident Detail: parse id and render
        if (targetId === "route-facility-resident" && active) {
          try {
            const parts = (p || "").split("/");
            const id = parts[3] || "";
            const residents = (window.sample && window.sample.facility && Array.isArray(window.sample.facility.residents))
              ? window.sample.facility.residents : [];
            let res = residents.find(x => x.id === id);
            if (!res) res = residents[0];

            // Heading
            const headingBind = active.querySelector('[data-heading]');
            if (headingBind) {
              headingBind.textContent = `Resident — ${res?.name || ''} (${res?.id || ''})`;
            }

            // Lines
            const roomEl = active.querySelector('[data-fr-room]');
            const riskEl = active.querySelector('[data-fr-risk]');
            const phqEl = active.querySelector('[data-fr-phq]');
            const loginEl = active.querySelector('[data-fr-login]');
            const flagsEl = active.querySelector('[data-fr-flags]');

            if (roomEl) roomEl.textContent = `Room: ${res?.room || '—'}`;
            if (riskEl) riskEl.textContent = `Risk: ${res?.risk || '—'}`;
            if (phqEl) phqEl.textContent = `Last PHQ-9: ${res?.lastPHQ9 != null ? res.lastPHQ9 : '—'}`;
            if (loginEl) loginEl.textContent = `Last Login: ${res?.lastLogin || '—'}`;
            if (flagsEl) flagsEl.textContent = `Flags: ${res?.flags != null ? res.flags : 0}`;
          } catch (e) {
            // no-op
          }
        }

        // Patient Home heading bind + added lines
        if (targetId === routes["/patient/home"] && active) {
          const headingBind = active.querySelector('[data-heading]');
          if (headingBind) {
            try {
              const name = (window.sample && window.sample.patient && window.sample.patient.name) ? window.sample.patient.name : "";
              headingBind.textContent = `Patient Home — ${name}`;
            } catch (e) {
              headingBind.textContent = 'Patient Home — ';
            }
          }
          // Bind patient small lines
          const lastLoginEl = active.querySelector('[data-patient-last-login]');
          if (lastLoginEl) {
            try {
              const last = (window.sample && window.sample.patient && Array.isArray(window.sample.patient.logins) && window.sample.patient.logins[0]) ? window.sample.patient.logins[0] : "";
              lastLoginEl.textContent = `Last login: ${last}`;
            } catch (e) {
              lastLoginEl.textContent = 'Last login: ';
            }
          }
          const moodCountEl = active.querySelector('[data-patient-mood-count]');
          if (moodCountEl) {
            try {
              const count = (window.sample && window.sample.patient && Array.isArray(window.sample.patient.mood_entries)) ? window.sample.patient.mood_entries.length : 0;
              moodCountEl.textContent = `Mood entries count: ${count}`;
            } catch (e) {
              moodCountEl.textContent = 'Mood entries count: 0';
            }
          }

          // Newly added computed lines using util helpers
          const respRateEl = active.querySelector('[data-patient-response-rate]');
          if (respRateEl) {
            try {
              const issued = (window.sample && window.sample.patient && window.sample.patient.prompts && window.sample.patient.prompts.issued_7d) || 0;
              const answered = (window.sample && window.sample.patient && window.sample.patient.prompts && window.sample.patient.prompts.answered_7d) || 0;
              const rate = (window.util && typeof window.util.responseRate === 'function') ? window.util.responseRate(issued, answered) : 0;
              respRateEl.textContent = `7d response rate: ${rate}%`;
            } catch(e) {
              respRateEl.textContent = '7d response rate: 0%';
            }
          }

          const adherenceEl = active.querySelector('[data-patient-adherence-week]');
          if (adherenceEl) {
            try {
              const assigned = (window.sample && window.sample.patient && window.sample.patient.practices && window.sample.patient.practices.assigned_week) || 0;
              const completed = (window.sample && window.sample.patient && window.sample.patient.practices && window.sample.patient.practices.completed_week) || 0;
              const adh = (window.util && typeof window.util.adherenceThisWeek === 'function') ? window.util.adherenceThisWeek(assigned, completed) : 0;
              adherenceEl.textContent = `This week adherence: ${adh}%`;
            } catch(e) {
              adherenceEl.textContent = 'This week adherence: 0%';
            }
          }

          const daysSinceEl = active.querySelector('[data-patient-days-since-login]');
          if (daysSinceEl) {
            try {
              const last = (window.sample && window.sample.patient && Array.isArray(window.sample.patient.logins) && window.sample.patient.logins[0]) ? window.sample.patient.logins[0] : "";
              const days = (window.util && typeof window.util.daysSince === 'function') ? window.util.daysSince(last) : 0;
              daysSinceEl.textContent = `Days since last login: ${days}`;
            } catch(e) {
              daysSinceEl.textContent = 'Days since last login: 0';
            }
          }

          // New: consent raw text reflection line
          const consentRawEl = active.querySelector('[data-patient-consent-raw]');
          if (consentRawEl) {
            try {
              const raw = !!(window.sample && window.sample.patient && window.sample.patient.consent && window.sample.patient.consent.share_raw_journal_text);
              consentRawEl.textContent = `Consent: raw text sharing = ${raw ? 'ON' : 'OFF'}`;
            } catch(e) {
              consentRawEl.textContent = 'Consent: raw text sharing = OFF';
            }
          }
        }

        // Family Home: positives-first weekly glance (consent-aware, no raw text)
        if (targetId === routes["/family/home"] && active) {
          // Heading bind
          const headingBind = active.querySelector('[data-heading]');
          if (headingBind) {
            try {
              const name = (window.sample && window.sample.patient && window.sample.patient.name) ? window.sample.patient.name : "";
              headingBind.textContent = `Family — Weekly at a Glance for ${name}`;
            } catch (e) {
              headingBind.textContent = 'Family — Weekly at a Glance for';
            }
          }

          // Compute summary values
          try {
            const streakEl = active.querySelector('[data-fam-streak]');
            const practiceEl = active.querySelector('[data-fam-practice]');
            const moodEl = active.querySelector('[data-fam-moodcount]');
            const noteEl = active.querySelector('[data-fam-consent-note]');

            const jrnlCount = (window.sample && window.sample.patient && Array.isArray(window.sample.patient.journal_entries)) ? window.sample.patient.journal_entries.length : 0;
            const streak = jrnlCount ? 'Active' : 'Getting started';

            const practices = (window.sample && window.sample.patient && window.sample.patient.practices) || { assigned_week: 0, completed_week: 0 };
            const pct = Math.min(100, Math.round(((practices.completed_week || 0) / Math.max(1, (practices.assigned_week || 0))) * 100));

            const moods = (window.sample && window.sample.patient && Array.isArray(window.sample.patient.mood_entries)) ? window.sample.patient.mood_entries : [];
            const moodCount = moods.length;

            const canShareRaw = !!(window.sample && window.sample.patient && window.sample.patient.consent && window.sample.patient.consent.share_raw_journal_text);
            const note = `Note: You’re seeing trends only. Raw journal text is ${canShareRaw ? 'shared' : 'not shared'}.`;

            if (streakEl) streakEl.textContent = streak;
            if (practiceEl) practiceEl.textContent = String(pct);
            if (moodEl) moodEl.textContent = String(moodCount);
            if (noteEl) noteEl.textContent = note;
          } catch(e) {
            // no-op
          }
        }

        // Patient Consent screen: local UI state and bindings (REPAIRED)
        if (targetId === routes["/patient/consent"] && active) {
          try {
            // init global ui state container
            window.ui = window.ui || {};
            window.ui.consent = window.ui.consent || {};

            const c = (window.sample && window.sample.patient && window.sample.patient.consent) ? window.sample.patient.consent : {};

            // initialize local state from sample
            window.ui.consent.current = {
              share_raw_journal_text: !!c.share_raw_journal_text,
              share_mood_trends: !!c.share_mood_trends,
              share_sentiment_trends: !!c.share_sentiment_trends,
              share_behaviors: !!c.share_behaviors,
              auto_track_phq_gad: !!c.auto_track_phq_gad
            };
            window.ui.consent.justSaved = false;

            // ensure confirmation message is hidden on mount
            const m = document.getElementById('consent-save-msg');
            if (m) { m.style.display = 'none'; }

            // set checkbox states from local ui + attach change handlers to update local state only
            const map = [
              ['chk_share_raw', 'share_raw_journal_text'],
              ['chk_share_mood', 'share_mood_trends'],
              ['chk_share_sent', 'share_sentiment_trends'],
              ['chk_share_beh', 'share_behaviors'],
              ['chk_auto_phq', 'auto_track_phq_gad'],
            ];

            map.forEach(([id, key]) => {
              const el = document.getElementById(id);
              if (el) {
                el.checked = !!window.ui.consent.current[key];
                el.onchange = () => {
                  window.ui.consent.current[key] = !!el.checked;
                  if (window.ui && window.ui.consent) window.ui.consent.justSaved = false;
                };
              }
            });
          } catch (e) {
            console.warn('[consent] bind skipped:', e?.message || e);
          }
        }

        // Patient Journal screen: heading + list render
        if (targetId === routes["/patient/journal"] && active) {
          // Heading bind
          const headingBind = active.querySelector('[data-heading]');
          if (headingBind) {
                       try {
              const name = (window.sample && window.sample.patient && window.sample.patient.name) ? window.sample.patient.name : "";
              headingBind.textContent = `Patient Journal — ${name}`;
            } catch (e) {
              headingBind.textContent = 'Patient Journal —';
            }
          }

          // Render entries
          try {
            const listParent = active.querySelector('#journal-list');
            if (listParent) {
              listParent.innerHTML = '';
              const entries = (window.sample && window.sample.patient && Array.isArray(window.sample.patient.journal_entries))
                ? window.sample.patient.journal_entries : [];

              if (!entries.length) {
                const empty = document.createElement('p');
                empty.className = 'text-[13px] text-slate-600';
                empty.textContent = 'No entries yet. Write your first entry above.';
                listParent.appendChild(empty);
              } else {
                entries.forEach((entry, idx) => {
                  const row = document.createElement('div');
                  row.className = 'bg-white border border-slate-200 rounded-[10px] px-3 py-2';

                  const dateLine = document.createElement('div');
                  dateLine.className = 'text-[12px] text-slate-500';
                  dateLine.textContent = entry.date || '';

                  const textLine = document.createElement('div');
                  textLine.className = 'text-[14px] text-slate-800 mt-1';
                  textLine.textContent = entry.text || '';

                  // Optional small action row
                  const actions = document.createElement('div');
                  actions.className = 'mt-2 flex items-center gap-3';
                  const del = document.createElement('button');
                  del.type = 'button';
                  del.className = 'text-[12px] text-rose-600 hover:text-rose-700 hover:underline rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600';
                  del.textContent = 'Delete';
                  del.onclick = () => {
                    try {
                      const ix = (Array.isArray(window.sample.patient.journal_entries) ? window.sample.patient.journal_entries.indexOf(entry) : -1                      if (ix >= 0) {
                        window.sample.patient.journal_entries.splice(ix, 1);
                        if (window.render && window.route) window.render(window.route.current);
                        showToast('Entry deleted (demo)');
                      }
                    } catch(e) { console.warn('[journal] delete error', e); }
                  };

                  const copy = document.createElement('button');
                  copy.type = 'button';
                  copy.className = 'text-[12px] text-indigo-600 hover:text-indigo-700 hover:underline rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
                  copy.textContent = 'Copy';
                  copy.onclick = async () => {
                    try {
                      await navigator.clipboard.writeText(entry.text || '');
                      showToast('Copied to clipboard');
                    } catch(e){ showToast('Copy failed'); }
                  };

                  actions.appendChild(del);
                  actions.appendChild(copy);

                  row.appendChild(dateLine);
                  row.appendChild(textLine);
                  row.appendChild(actions);
                  listParent.appendChild(row);
                });
              }
            }
          } catch (e) {
            // no-op
          }
        }
      }

      // Expose render + route on window for inline handlers
      window.render = render;
      window.route = route;

      // Minimal toast system (idempotent)
      function ensureToastRoot() {
        let root = document.getElementById('toast-root');
        if (!root) {
          root = document.createElement('div');
          root.id = 'toast-root';
          root.setAttribute('aria-live', 'polite');
          root.setAttribute('aria-atomic', 'true');
          root.className = 'fixed inset-x-0 bottom-6 flex items-center justify-center pointer-events-none z-[1000]';
          document.body.appendChild(root);
        }
        return root;
      }
      function showToast(message, timeoutMs) {
        try {
          const root = ensureToastRoot();
          const card = document.createElement('div');
          card.className = 'pointer-events-auto bg-slate-900 text-white text-[13px] px-3 py-2 rounded-[10px] shadow-lg/50 shadow-black/20 opacity-0 translate-y-2 transition-all duration-200';
          card.textContent = message || '';
          root.appendChild(card);
          // animate in
          requestAnimationFrame(() => {
            card.classList.remove('opacity-0', 'translate-y-2');
            card.classList.add('opacity-100', 'translate-y-0');
          });
          const ms = typeof timeoutMs === 'number' ? timeoutMs : 2000;
          setTimeout(() => {
            // animate out
            card.classList.remove('opacity-100', 'translate-y-0');
            card.classList.add('opacity-0', 'translate-y-2');
            setTimeout(() => {
              if (card && card.parentNode) card.parentNode.removeChild(card);
            }, 180);
          }, ms);
        } catch(e) {
          // fallback
          console.log('[toast]', message);
        }
      }
      window.showToast = showToast;

      // Hash router guard (id      // Hash router guard (idempotent)
    


      (function () {
        // Data bootstrap (safe if previous script failed to execute)
        const todayIso = new Date().toISOString();
        const defaultSample = {
          patient: {
            id: "P-1029",
            name: "Jordan K.",
            room: "3B-214",
            consent: {
              share_mood_trends: true,
              share_sentiment_trends: true,
              share_raw_journal_text: false,
              share_behaviors: true,
              auto_track_phq_gad: true
            },
            logins: [todayIso, "2025-09-16T07:58:00Z"],
            mood_entries: [
              { date: todayIso.slice(0,10), score: 3 },
              { date: "2025-09-16", score: 2 },
              { date: "2025-09-15", score: 2 }
            ],
            prompts: { issued_7d: 10, answered_7d: 7 },
            practices: { assigned_week: 6, completed_week: 3 },
            journal_entries: [
              { date: "2025-09-16", text: "Felt overwhelmed at work today." }
            ]
          },
          facility: {
            unit: "3B",
            aggregates: {
              risk_dist: { R0: 0, R1: 1, R2: 1, R3: 0, R4: 0 },
              response_rate_7d: 62,
              adherence_avg_week: 50,
              alerts_24h: 1
            },
            residents: [
              { id: "P-1029", name: "Jordan K.", room: "3B-214", risk: "R2", lastPHQ9: 16, lastLogin: "2025-09-17", flags: 1 },
              { id: "P-2041", name: "Sam R.", room: "3B-218", risk: "R1", lastPHQ9: 8, lastLogin: "2025-09-16", flags: 0 }
            ]
          }
        };
        window.sample = window.sample || defaultSample;

        // Utils
        const util = window.util || {};
        util.responseRate = util.responseRate || function (issued, answered) {
          if (!issued || issued <= 0) return 0;
          return Math.round((answered / issued) * 100);
        };
        util.adherenceThisWeek = util.adherenceThisWeek || function (assigned, completed) {
          if (!assigned || assigned <= 0) return 0;
          return Math.round((completed / assigned) * 100);
        };
        util.daysSince = util.daysSince || function (iso) {
          try {
            const then = new Date(iso);
            return Math.max(0, Math.floor((Date.now() - then.getTime()) / (1000 * 60 * 60 * 24)));
          } catch { return 0; }
        };
        util.redactByConsent = util.redactByConsent || function (text, canShareRaw) {
          return canShareRaw ? text : "(hidden by consent)";
        };
        window.util = util;

        // Minimal toast system (fresh, in case prior script failed)
        function ensureToastRoot() {
          let root = document.getElementById('toast-root');
          if (!root) {
            root = document.createElement('div');
            root.id = 'toast-root';
            root.setAttribute('aria-live', 'polite');
            root.setAttribute('aria-atomic', 'true');
            root.className = 'fixed inset-x-0 bottom-6 flex items-center justify-center pointer-events-none z-[1000]';
            document.body.appendChild(root);
          }
          return root;
        }
        function showToast(message, timeoutMs) {
          try {
            const root = ensureToastRoot();
            const card = document.createElement('div');
            card.className = 'pointer-events-auto bg-slate-900 text-white text-[13px] px-3 py-2 rounded-[10px] shadow-lg/50 shadow-black/20 opacity-0 translate-y-2 transition-all duration-200';
            card.textContent = message || '';
            root.appendChild(card);
            requestAnimationFrame(() => {
              card.classList.remove('opacity-0', 'translate-y-2');
              card.classList.add('opacity-100', 'translate-y-0');
            });
            const ms = typeof timeoutMs === 'number' ? timeoutMs : 2000;
            setTimeout(() => {
              card.classList.remove('opacity-100', 'translate-y-0');
              card.classList.add('opacity-0', 'translate-y-2');
              setTimeout(() => { card.remove(); }, 180);
            }, ms);
          } catch { /* no-op */ }
        }
        window.showToast = window.showToast || showToast;

        // Routing
        const route = window.route || { current: "/role-select" };
        window.route = route;

        const routes = {
          "/role-select": "route-role-select",
          "/patient/home": "route-patient-home",
          "/caregiver/home": "route-caregiver-home",
          "/family/home": "route-family-home",
          "/facility/dashboard": "route-facility-dashboard",
          "/patient/consent": "route-patient-consent",
          "/patient/journal": "route-patient-journal"
        };

        function parseHash() {
          const h = location.hash || "#/role-select";
          const path = h.replace(/^#/, "") || "/role-select";
          return path;
        }

        function render(path) {
          const p = path || route.current || "/role-select";

          // Resolve target section
          let targetId;
          if (p.startsWith("/caregiver/patient/")) {
            targetId = "route-caregiver-patient";
          } else if (p.startsWith("/facility/resident/")) {
            targetId = "route-facility-resident";
          } else {
            targetId = routes[p] || routes["/role-select"];
          }

          // Show/Hide sections
          const allSections = Array.from(document.querySelectorAll('main > section'));
          allSections.forEach(sec => {
            if (sec.id === targetId) sec.classList.remove("hidden");
            else sec.classList.add("hidden");
          });

          const active = document.getElementById(targetId);
          if (!active) return;

          // Update current route lines
          Array.from(active.querySelectorAll('[data-current-route]')).forEach(sp => (sp.textContent = route.current));

          // Route: Facility Dashboard
          if (targetId === routes["/facility/dashboard"]) {
            const devPeek = active.querySelector('#facility-dev-peek');
            if (devPeek) devPeek.textContent = `DEV: unit=${sample.facility.unit}, patient=${sample.patient.name}`;

            const agg = sample.facility.aggregates || {};
            const dist = agg.risk_dist || {};
            const kpiRisk = active.querySelector('#kpi-risk-dist');
            const kpiResp = active.querySelector('#kpi-response-7d');
            const kpiAdh = active.querySelector('#kpi-adherence-week');
            const kpiAlerts = active.querySelector('#kpi-alerts-24h');
            if (kpiRisk) kpiRisk.textContent = `Residents by Risk: R0=${dist.R0 || 0}, R1=${dist.R1 || 0}, R2=${dist.R2 || 0}, R3=${dist.R3 || 0}, R4=${dist.R4 || 0}`;
            if (kpiResp) kpiResp.textContent = `7d Response Avg: ${agg.response_rate_7d ?? 0}%`;
            if (kpiAdh) kpiAdh.textContent = `Practice Adherence Avg (week): ${agg.adherence_avg_week ?? 0}%`;
            if (kpiAlerts) kpiAlerts.textContent = `Alerts (last 24h): ${agg.alerts_24h ?? 0}`;

            const listParent = active.querySelector('#facility-resident-list');
            if (listParent) {
              listParent.innerHTML = "";
              (sample.facility.residents || []).forEach(r => {
                const row = document.createElement('div');
                row.className = "text-[14px] text-slate-800";
                row.innerHTML = `${r.name} — Room ${r.room} — Risk ${r.risk} `;
                const btn = document.createElement('button');
                btn.type = "button";
                btn.textContent = "Open";
                btn.className = "ml-2 text-[13px] text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded px-1 py-0.5";
                btn.addEventListener('click', () => { location.hash = `#/facility/resident/${r.id}`; });
                row.appendChild(btn);
                listParent.appendChild(row);
              });
            }
          }

          // Route: Caregiver Home
          if (targetId === routes["/caregiver/home"]) {
            const listParent = active.querySelector('#caregiver-resident-list');
            if (listParent) {
              listParent.innerHTML = "";
              (sample.facility.residents || []).forEach(r => {
                const row = document.createElement('div');
                row.className = "text-[14px] text-slate-800 flex items-center justify-between bg-white border border-slate-200 rounded-[10px] px-3 py-2";
                const txt = document.createElement('span');
                txt.textContent = `${r.name} — Room ${r.room} — Risk ${r.risk}`;
                const btn = document.createElement('button');
                btn.type = "button";
                btn.textContent = "Open Report";
                btn.className = "text-[13px] text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded px-2 py-1";
                btn.addEventListener('click', () => { location.hash = `#/caregiver/patient/${r.id}`; });
                row.appendChild(txt);
                row.appendChild(btn);
                listParent.appendChild(row);
              });
            }
          }

          // Route: Caregiver Patient Report (dynamic)
          if (targetId === "route-caregiver-patient") {
            const id = (p.split("/")[3]) || sample.facility.residents[0]?.id || sample.patient.id;
            const res = (sample.facility.residents || []).find(x => x.id === id) || sample.facility.residents[0];

            const heading = active.querySelector('[data-heading]');
            if (heading) heading.textContent = `Caregiver Report — ${res?.name || ''} (${res?.id || ''})`;

            const roomEl = active.querySelector('[data-cg-room]');
            const riskEl = active.querySelector('[data-cg-risk]');
            const rrEl = active.querySelector('[data-cg-rr]');
            const adhEl = active.querySelector('[data-cg-adh]');
            const daysEl = active.querySelector('[data-cg-days]');
            const consentEl = active.querySelector('[data-cg-consent]');

            if (roomEl) roomEl.textContent = `Room: ${res?.room || '—'}`;
            if (riskEl) riskEl.textContent = `Risk: ${res?.risk || '—'}`;

            const isMain = res && res.id === sample.patient.id;
            if (isMain) {
              const rr = util.responseRate(sample.patient.prompts.issued_7d, sample.patient.prompts.answered_7d);
              const adh = util.adherenceThisWeek(sample.patient.practices.assigned_week, sample.patient.practices.completed_week);
              const lastLogin = sample.patient.logins?.[0] || todayIso;
              const days = util.daysSince(lastLogin);

              if (rrEl) { rrEl.textContent = `7d Response Rate: ${rr}%`; rrEl.style.display = ''; }
              if (adhEl) { adhEl.textContent = `This Week Adherence: ${adh}%`; adhEl.style.display = ''; }
              if (daysEl) { daysEl.textContent = `Days Since Patient Last Login: ${days}`; daysEl.style.display = ''; }

              if (consentEl) {
                const on = !!sample.patient.consent?.share_raw_journal_text;
                consentEl.textContent = `Consent (raw journal text): ${on ? 'ON' : 'OFF'}`;
              }
            } else {
              if (rrEl) rrEl.style.display = 'none';
              if (adhEl) adhEl.style.display = 'none';
              if (daysEl) daysEl.style.display = 'none';
              if (consentEl) consentEl.textContent = 'Consent: not available for this resident (demo).';
            }
          }

          // Route: Facility Resident (dynamic)
          if (targetId === "route-facility-resident") {
            const id = (p.split("/")[3]) || sample.facility.residents[0]?.id || sample.patient.id;
            const res = (sample.facility.residents || []).find(x => x.id === id) || sample.facility.residents[0];

            const heading = active.querySelector('[data-heading]');
            if (heading) heading.textContent = `Resident — ${res?.name || ''} (${res?.id || ''})`;

            const roomEl = active.querySelector('[data-fr-room]');
            const riskEl = active.querySelector('[data-fr-risk]');
            const phqEl = active.querySelector('[data-fr-phq]');
            const loginEl = active.querySelector('[data-fr-login]');
            const flagsEl = active.querySelector('[data-fr-flags]');

            if (roomEl) roomEl.textContent = `Room: ${res?.room || '—'}`;
            if (riskEl) riskEl.textContent = `Risk: ${res?.risk || '—'}`;
            if (phqEl) phqEl.textContent = `Last PHQ-9: ${res?.lastPHQ9 ?? '—'}`;
            if (loginEl) loginEl.textContent = `Last Login: ${res?.lastLogin || '—'}`;
            if (flagsEl) flagsEl.textContent = `Flags: ${res?.flags ?? 0}`;
          }

          // Route: Patient Home
          if (targetId === routes["/patient/home"]) {
            const heading = active.querySelector('[data-heading]');
            if (heading) heading.textContent = `Patient Home — ${sample.patient.name}`;

            const lastLoginEl = active.querySelector('[data-patient-last-login]');
            if (lastLoginEl) lastLoginEl.textContent = `Last login: ${sample.patient.logins?.[0] || ''}`;

            const moodCountEl = active.querySelector('[data-patient-mood-count]');
            if (moodCountEl) moodCountEl.textContent = `Mood entries count: ${sample.patient.mood_entries?.length || 0}`;

            const respRateEl = active.querySelector('[data-patient-response-rate]');
            const rate = util.responseRate(sample.patient.prompts.issued_7d, sample.patient.prompts.answered_7d);
            if (respRateEl) respRateEl.textContent = `7d response rate: ${rate}%`;

            const adherenceEl = active.querySelector('[data-patient-adherence-week]');
            const adh = util.adherenceThisWeek(sample.patient.practices.assigned_week, sample.patient.practices.completed_week);
            if (adherenceEl) adherenceEl.textContent = `This week adherence: ${adh}%`;

            const daysSinceEl = active.querySelector('[data-patient-days-since-login]');
            const days = util.daysSince(sample.patient.logins?.[0] || todayIso);
            if (daysSinceEl) daysSinceEl.textContent = `Days since last login: ${days}`;

            const consentRawEl = active.querySelector('[data-patient-consent-raw]');
            const raw = !!sample.patient.consent?.share_raw_journal_text;
            if (consentRawEl) consentRawEl.textContent = `Consent: raw text sharing = ${raw ? 'ON' : 'OFF'}`;
          }

          // Route: Family Home
          if (targetId === routes["/family/home"]) {
            const heading = active.querySelector('[data-heading]');
            if (heading) heading.textContent = `Family — Weekly at a Glance for ${sample.patient.name}`;

            const streakEl = active.querySelector('[data-fam-streak]');
            const practiceEl = active.querySelector('[data-fam-practice]');
            const moodEl = active.querySelector('[data-fam-moodcount]');
            const noteEl = active.querySelector('[data-fam-consent-note]');

            const jrnlCount = sample.patient.journal_entries?.length || 0;
            if (streakEl) streakEl.textContent = jrnlCount ? 'Active' : 'Getting started';

            const pct = util.adherenceThisWeek(sample.patient.practices.assigned_week, sample.patient.practices.completed_week);
            if (practiceEl) practiceEl.textContent = String(pct);

            const moodCount = sample.patient.mood_entries?.length || 0;
            if (moodEl) moodEl.textContent = String(moodCount);

            const canShareRaw = !!sample.patient.consent?.share_raw_journal_text;
            if (noteEl) noteEl.textContent = `Note: You’re seeing trends only. Raw journal text is ${canShareRaw ? 'shared' : 'not shared'}.`;
          }

          // Route: Patient Consent
          if (targetId === routes["/patient/consent"]) {
            window.ui = window.ui || {};
            window.ui.consent = window.ui.consent || {};
            const c = sample.patient.consent || {};
            window.ui.consent.current = {
              share_raw_journal_text: !!c.share_raw_journal_text,
              share_mood_trends: !!c.share_mood_trends,
              share_sentiment_trends: !!c.share_sentiment_trends,
              share_behaviors: !!c.share_behaviors,
              auto_track_phq_gad: !!c.auto_track_phq_gad
            };
            window.ui.consent.justSaved = false;

            const m = document.getElementById('consent-save-msg');
            if (m) m.style.display = 'none';

            const map = [
              ['chk_share_raw', 'share_raw_journal_text'],
              ['chk_share_mood', 'share_mood_trends'],
              ['chk_share_sent', 'share_sentiment_trends'],
              ['chk_share_beh', 'share_behaviors'],
              ['chk_auto_phq', 'auto_track_phq_gad']
            ];
            map.forEach(([id, key]) => {
              const el = document.getElementById(id);
              if (el) {
                el.checked = !!window.ui.consent.current[key];
                el.onchange = () => { window.ui.consent.current[key] = !!el.checked; window.ui.consent.justSaved = false; };
              }
            });
          }

          // Route: Patient Journal
          if (targetId === routes["/patient/journal"]) {
            const heading = active.querySelector('[data-heading]');
            if (heading) heading.textContent = `Patient Journal — ${sample.patient.name}`;

            const listParent = active.querySelector('#journal-list');
            if (listParent) {
              listParent.innerHTML = '';
              const entries = Array.isArray(sample.patient.journal_entries) ? sample.patient.journal_entries : [];
              if (!entries.length) {
                const empty = document.createElement('p');
                empty.className = 'text-[13px] text-slate-600';
                empty.textContent = 'No entries yet. Write your first entry above.';
                listParent.appendChild(empty);
              } else {
                entries.forEach((entry, idx) => {
                  const row = document.createElement('div');
                  row.className = 'bg-white border border-slate-200 rounded-[10px] px-3 py-2';

                  const dateLine = document.createElement('div');
                  dateLine.className = 'text-[12px] text-slate-500';
                  dateLine.textContent = entry.date || '';

                  const textLine = document.createElement('div');
                  textLine.className = 'text-[14px] text-slate-800 mt-1';
                  textLine.textContent = entry.text || '';

                  const actions = document.createElement('div');
                  actions.className = 'mt-2 flex items-center gap-3';

                  const del = document.createElement('button');
                  del.type = 'button';
                  del.className = 'text-[12px] text-rose-600 hover:text-rose-700 hover:underline rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600';
                  del.textContent = 'Delete';
                  del.addEventListener('click', () => {
                    try {
                      const ix = sample.patient.journal_entries.indexOf(entry);
                      if (ix >= 0) {
                        sample.patient.journal_entries.splice(ix, 1);
                        showToast('Entry deleted (demo)');
                        render(route.current);
                      }
                    } catch (e) {
                      console.warn('[journal] delete error', e);
                    }
                  });

                  const copy = document.createElement('button');
                  copy.type = 'button';
                  copy.className = 'text-[12px] text-indigo-600 hover:text-indigo-700 hover:underline rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
                  copy.textContent = 'Copy';
                  copy.addEventListener('click', async () => {
                    try {
                      await navigator.clipboard.writeText(entry.text || '');
                      showToast('Copied to clipboard');
                    } catch {
                      showToast('Copy failed');
                    }
                  });

                  actions.appendChild(del);
                  actions.appendChild(copy);

                  row.appendChild(dateLine);
                  row.appendChild(textLine);
                  row.appendChild(actions);
                  listParent.appendChild(row);
                });
              }
            }
          }

          // Focus first heading for a11y
          const h1 = active.querySelector('h1');
          if (h1 && typeof h1.focus === 'function') {
            setTimeout(() => h1.focus(), 0);
          }
        }
        window.render = render;

        function onHashChange() {
          route.current = parseHash();
          render(route.current);
        }

        // Enhance role links (hover/focus styles) without changing their pure anchor nature
        function enhanceRoleLinks() {
          const links = document.querySelectorAll('.role-link');
          links.forEach(a => {
            a.classList.add('transition', 'hover:shadow-sm', 'hover:border-slate-300', 'focus-visible:outline', 'focus-visible:outline-2', 'focus-visible:outline-offset-2', 'focus-visible:outline-indigo-600');
          });
        }

        // Init
        window.addEventListener('hashchange', onHashChange, { passive: true });
        window.addEventListener('DOMContentLoaded', () => {
          if (!location.hash) location.hash = '#/role-select';
          enhanceRoleLinks();
          onHashChange();
        });
      })();
    
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
      
<main className="w-full" id="app">

<section className="w-full flex items-center justify-center px-4" data-route="/role-select" id="route-role-select">
<section id="role-select-root" style={{position: 'relative', pointerEvents: 'auto'}}>
<h1 id="screen-title" style={{marginBottom: '12px'}} tabindex="-1">Echo Pulse — First Wedge</h1>
<p style={{margin: '0 0 16px'}}>Choose a role to continue.</p>

<a aria-label="Patient" className="role-link" href="#/patient/home" style={{display: 'block', maxWidth: '420px', width: '100%', padding: '20px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '12px', background: '#fff', textDecoration: 'none', color: '#111', pointerEvents: 'auto'}}>Patient</a>
<a aria-label="Caregiver" className="role-link" href="#/caregiver/home" style={{display: 'block', maxWidth: '420px', width: '100%', padding: '20px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '12px', background: '#fff', textDecoration: 'none', color: '#111', pointerEvents: 'auto'}}>Caregiver</a>
<a aria-label="Family" className="role-link" href="#/family/home" style={{display: 'block', maxWidth: '420px', width: '100%', padding: '20px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '12px', background: '#fff', textDecoration: 'none', color: '#111', pointerEvents: 'auto'}}>Family</a>
<a aria-label="Facility" className="role-link" href="#/facility/dashboard" style={{display: 'block', maxWidth: '420px', width: '100%', padding: '20px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '12px', background: '#fff', textDecoration: 'none', color: '#111', pointerEvents: 'auto'}}>Facility</a>
<p style={{marginTop: '12px', fontSize: '12px', color: '#666'}}>v0 role-select hard reset</p>
</section>
</section>

<section aria-labelledby="patient-home-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/patient/home" id="route-patient-home" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="patient-home-heading" tabindex="-1">Patient Home — {{sample.patient.name}}</h1>

<p className="mt-1.5 text-[13px] text-slate-600" data-patient-last-login="">Last login: —</p>
<p className="mt-0.5 text-[13px] text-slate-600" data-patient-mood-count="">Mood entries count: —</p>

<p className="mt-0.5 text-[13px] text-slate-600" data-patient-response-rate="">7d response rate: —</p>
<p className="mt-0.5 text-[13px] text-slate-600" data-patient-adherence-week="">This week adherence: —</p>
<p className="mt-0.5 text-[13px] text-slate-600" data-patient-days-since-login="">Days since last login: —</p>

<p className="mt-0.5 text-[13px] text-slate-600" data-patient-consent-raw="">Consent: raw text sharing = —</p>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>

<div className="mt-2" id="mood-checkin">
<h2 className="text-[15px] tracking-tight text-slate-800 font-medium">Mood check-in</h2>
<div className="mt-2">
<button aria-label="Set mood 1" onclick="
                try {
                  var t = new Date().toISOString().slice(0,10);
                  sample.patient.mood_entries = sample.patient.mood_entries || [];
                  var i = sample.patient.mood_entries.findIndex(function(e){ return e.date===t; });
                  if (i&gt;=0) { sample.patient.mood_entries[i].score = 1; }
                  else { sample.patient.mood_entries.unshift({date:t, score:1}); }
                  showToast('Saved mood: 1/5 (demo)');
                  try { var el = document.querySelector('#route-patient-home [data-patient-mood-count]'); if (el) { el.textContent = 'Mood entries count: ' + sample.patient.mood_entries.length; } } catch(_){}
                } catch(e){ console.log('[mood] error', e); }
              " type="button">1</button>
<button aria-label="Set mood 2" onclick="
                try {
                  var t = new Date().toISOString().slice(0,10);
                  sample.patient.mood_entries = sample.patient.mood_entries || [];
                  var i = sample.patient.mood_entries.findIndex(function(e){ return e.date===t; });
                  if (i&gt;=0) { sample.patient.mood_entries[i].score = 2; }
                  else { sample.patient.mood_entries.unshift({date:t, score:2}); }
                  showToast('Saved mood: 2/5 (demo)');
                  try { var el = document.querySelector('#route-patient-home [data-patient-mood-count]'); if (el) { el.textContent = 'Mood entries count: ' + sample.patient.mood_entries.length; } } catch(_){}
                } catch(e){ console.log('[mood] error', e); }
              " type="button">2</button>
<button aria-label="Set mood 3" onclick="
                try {
                  var t = new Date().toISOString().slice(0,10);
                  sample.patient.mood_entries = sample.patient.mood_entries || [];
                  var i = sample.patient.mood_entries.findIndex(function(e){ return e.date===t; });
                  if (i&gt;=0) { sample.patient.mood_entries[i].score = 3; }
                  else { sample.patient.mood_entries.unshift({date:t, score:3}); }
                  showToast('Saved mood: 3/5 (demo)');
                  try { var el = document.querySelector('#route-patient-home [data-patient-mood-count]'); if (el) { el.textContent = 'Mood entries count: ' + sample.patient.mood_entries.length; } } catch(_){}
                } catch(e){ console.log('[mood] error', e); }
              " type="button">3</button>
<button aria-label="Set mood 4" onclick="
                try {
                  var t = new Date().toISOString().slice(0,10);
                  sample.patient.mood_entries = sample.patient.mood_entries || [];
                  var i = sample.patient.mood_entries.findIndex(function(e){ return e.date===t; });
                  if (i&gt;=0) { sample.patient.mood_entries[i].score = 4; }
                  else { sample.patient.mood_entries.unshift({date:t, score:4}); }
                  showToast('Saved mood: 4/5 (demo)');
                  try { var el = document.querySelector('#route-patient-home [data-patient-mood-count]'); if (el) { el.textContent = 'Mood entries count: ' + sample.patient.mood_entries.length; } } catch(_){}
                } catch(e){ console.log('[mood] error', e); }
              " type="button">4</button>
<button aria-label="Set mood 5" onclick="
                try {
                  var t = new Date().toISOString().slice(0,10);
                  sample.patient.mood_entries = sample.patient.mood_entries || [];
                  var i = sample.patient.mood_entries.findIndex(function(e){ return e.date===t; });
                  if (i&gt;=0) { sample.patient.mood_entries[i].score = 5; }
                  else { sample.patient.mood_entries.unshift({date:t, score:5}); }
                  showToast('Saved mood: 5/5 (demo)');
                  try { var el = document.querySelector('#route-patient-home [data-patient-mood-count]'); if (el) { el.textContent = 'Mood entries count: ' + sample.patient.mood_entries.length; } } catch(_){}
                } catch(e){ console.log('[mood] error', e); }
              " type="button">5</button>
</div>
</div>
<div className="flex items-center gap-3" style={{position: 'relative', zIndex: '1', pointerEvents: 'auto'}}>
<button aria-label="Back to role select" onclick="try { location.hash = '#/role-select'; console.log('[nav] inline back'); } catch(e){ console.log('[nav] back error', e); }" style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer', position: 'relative', zIndex: '2', pointerEvents: 'auto'}} type="button">Back to role select</button>

<button aria-label="Manage Consent" className="text-[13px] text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded px-2 py-1" onclick="try { location.hash = '#/patient/consent'; } catch(e){}" type="button">Manage Consent</button>

<button aria-label="Open Journal" className="text-[13px] text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded px-2 py-1" onclick="try { location.hash = '#/patient/journal'; } catch(e){}" type="button">Open Journal</button>
</div>
</div>
</section>

<section aria-labelledby="caregiver-home-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/caregiver/home" id="route-caregiver-home" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="caregiver-home-heading" tabindex="-1">Care Team Hub</h1>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>

<h2 className="text-[15px] tracking-tight text-slate-800 font-medium">Assigned patients</h2>
<div className="mt-2 space-y-1" id="caregiver-resident-list"></div>
<div className="flex items-center gap-3 mt-4" style={{position: 'relative', zIndex: '1', pointerEvents: 'auto'}}>
<button aria-label="Back to role select" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick="try { location.hash = '#/role-select'; } catch(e){}" style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer', position: 'relative', zIndex: '2', pointerEvents: 'auto'}} type="button">Back to role select</button>
</div>
</div>
</section>

<section aria-labelledby="caregiver-patient-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/caregiver/patient/:id" id="route-caregiver-patient" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="caregiver-patient-heading" tabindex="-1">Caregiver Report —</h1>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>

<div className="space-y-1">
<p className="text-[13px] text-slate-700" data-cg-room="">Room: —</p>
<p className="text-[13px] text-slate-700" data-cg-risk="">Risk: —</p>
<p className="text-[13px] text-slate-700" data-cg-rr="" style={{display: 'none'}}>7d Response Rate: —%</p>
<p className="text-[13px] text-slate-700" data-cg-adh="" style={{display: 'none'}}>This Week Adherence: —%</p>
<p className="text-[13px] text-slate-700" data-cg-days="" style={{display: 'none'}}>Days Since Patient Last Login: —</p>
<p className="text-[13px] text-slate-700" data-cg-consent="">Consent: —</p>
</div>

<div className="mt-4 flex items-center gap-3">
<button className="flex-1 p-3 text-[15px] font-medium rounded-[10px] bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick="try{ showToast('Encouraging note shared (demo).'); }catch(e){}" type="button">Share Encouragement</button>
<button className="flex-1 p-3 text-[15px] font-medium rounded-[10px] bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick="try{ showToast('Escalation sent to facility/therapist (demo).'); }catch(e){}" type="button">Escalate</button>
</div>
<div className="flex items-center gap-3 mt-4">
<button aria-label="Back" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick="
      try { if (history.length &gt; 1) history.back(); else location.hash = '#/caregiver/home'; } 
      catch(e){ location.hash = '#/caregiver/home'; }
    " style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer'}} type="button">Back</button>
</div>
</div>
</section>

<section aria-labelledby="family-home-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/family/home" id="route-family-home" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="family-home-heading" tabindex="-1">Family — Weekly at a Glance for {{sample.patient.name}}</h1>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>
<div className="flex items-center gap-3" style={{position: 'relative', zIndex: '1', pointerEvents: 'auto'}}>
<button aria-label="Back to role select" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick="try { location.hash = '#/role-select'; } catch(e){}" style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer', position: 'relative', zIndex: '2', pointerEvents: 'auto'}} type="button">Back to role select</button>
</div>

<div className="mt-5 bg-white border border-slate-200 rounded-[12px] p-4">
<p className="text-[14px] text-slate-800">• Journaling streak (demo): <span data-fam-streak="">—</span></p>
<p className="text-[14px] text-slate-800 mt-1.5">• Practice progress this week: <span data-fam-practice="">—</span>%</p>
<p className="text-[14px] text-slate-800 mt-1.5">• Mood entries logged (last few): <span data-fam-moodcount="">—</span></p>
</div>

<p className="mt-3 text-[13px] text-slate-600" data-fam-consent-note="">Note: —</p>

<div className="mt-4 space-y-2">
<button className="w-full p-3 text-[15px] font-medium rounded-[10px] bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="famEncourage" onclick="try{ showToast('Encouragement sent! (demo)'); }catch(e){ console.log(e); }" type="button">Send Encouragement</button>
<button className="w-full p-3 text-[15px] font-medium rounded-[10px] bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="famWhatsShared" onclick="try{ showToast('Shared with family (demo): Mood Trends, Themes (no raw text), Positive highlights, Consent info'); }catch(e){ console.log(e); }" type="button">What’s shared with you?</button>
</div>
</div>
</section>

<section aria-labelledby="facility-dashboard-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/facility/dashboard" id="route-facility-dashboard" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="facility-dashboard-heading" tabindex="-1">Facility Dashboard</h1>
<p className="mt-1 text-[12px] text-slate-600" id="facility-dev-peek">DEV: unit={{sample.facility.unit}}, patient={{sample.patient.name}}</p>

<div className="mt-3" id="facility-kpi-block">
<p className="text-[14px] text-slate-800" id="kpi-risk-dist">Residents by Risk: R0=—, R1=—, R2=—, R3=—, R4=—</p>
<p className="text-[14px] text-slate-800 mt-1" id="kpi-response-7d">7d Response Avg: —%</p>
<p className="text-[14px] text-slate-800 mt-1" id="kpi-adherence-week">Practice Adherence Avg (week): —%</p>
<p className="text-[14px] text-slate-800 mt-1" id="kpi-alerts-24h">Alerts (last 24h): —</p>
<div className="mt-2">
<button className="px-3 py-2 text-[13px] font-medium rounded-[10px] bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick="try{ showToast('Export triggered (demo).'); }catch(e){}" type="button">Export Weekly Snapshot</button>
</div>
</div>

<div className="mt-4" id="facility-resident-block">
<h2 className="text-[15px] tracking-tight text-slate-800 font-medium">Residents</h2>
<div className="mt-2 space-y-1" id="facility-resident-list"></div>
</div>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>
<div className="flex items-center gap-3" style={{position: 'relative', zIndex: '1', pointerEvents: 'auto'}}>
<button aria-label="Back to role select" onclick="try { location.hash = '#/role-select'; console.log('[nav] inline back'); } catch(e){ console.log('[nav] back error', e); }" style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer', position: 'relative', zIndex: '2', pointerEvents: 'auto'}} type="button">Back to role select</button>
</div>
</div>
</section>

<section aria-labelledby="facility-resident-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/facility/resident/:id" id="route-facility-resident" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="facility-resident-heading" tabindex="-1">Resident —</h1>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>
<div className="space-y-1">
<p className="text-[13px] text-slate-700" data-fr-room="">Room: —</p>
<p className="text-[13px] text-slate-700" data-fr-risk="">Risk: —</p>
<p className="text-[13px] text-slate-700" data-fr-phq="">Last PHQ-9: —</p>
<p className="text-[13px] text-slate-700" data-fr-login="">Last Login: —</p>
<p className="text-[13px] text-slate-700" data-fr-flags="">Flags: —</p>
</div>
<div className="flex items-center gap-3 mt-4">
<button aria-label="Back" onclick="
         try { if (history.length &gt; 1) history.back(); else location.hash = '#/facility/dashboard'; } 
         catch(e){ location.hash = '#/facility/dashboard'; }
       " style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer'}} type="button">Back</button>
</div>
</div>
</section>

<section aria-labelledby="patient-consent-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/patient/consent" id="route-patient-consent" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="patient-consent-heading" tabindex="-1">Patient Consent</h1>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>
<div className="space-y-3">
<div className="consent-row" style={{display: 'flex', alignItems: 'center', gap: '12px', pointerEvents: 'auto', position: 'relative', zIndex: '1'}}>
<input id="chk_share_raw" name="share_raw_journal_text" type="checkbox"/>
<label htmlFor="chk_share_raw">Share raw journal text</label>
</div>
<div className="consent-row">
<input id="chk_share_mood" name="share_mood_trends" type="checkbox"/>
<label htmlFor="chk_share_mood">Share mood trends</label>
</div>
<div className="consent-row">
<input id="chk_share_sent" name="share_sentiment_trends" type="checkbox"/>
<label htmlFor="chk_share_sent">Share sentiment trends</label>
</div>
<div className="consent-row">
<input id="chk_share_beh" name="share_behaviors" type="checkbox"/>
<label htmlFor="chk_share_beh">Share behaviors</label>
</div>
<div className="consent-row">
<input id="chk_auto_phq" name="auto_track_phq_gad" type="checkbox"/>
<label htmlFor="chk_auto_phq">Auto-track PHQ-9 / GAD-7</label>
</div>
</div>
<div className="mt-5">
<button aria-label="Save consent" className="w-full p-3 text-[15px] font-medium rounded-[10px] bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="btnConsentSave" onclick="
      try {
        // persist to sample
        sample.patient.consent = { ...ui.consent.current };
        ui.consent.justSaved = true;
        // show confirmation line
        const msg = document.getElementById('consent-save-msg');
        if (msg) { msg.textContent = 'Consent updated just now.'; msg.style.display = 'block'; }
        // optional: auto-hide after 2.5s
        setTimeout(() =&gt; { if (msg) { msg.style.display = 'none'; ui.consent.justSaved = false; } }, 2500);
      } catch(e) { console.error('[consent] save error', e); }
    " type="button">Save</button>
<div id="consent-save-msg" style={{marginTop: '8px', fontSize: '14px', color: '#1E8E3E', display: 'none'}}></div>
</div>
<div className="flex items-center gap-3 mt-4">
<button aria-label="Back" onclick="
      try {
        if (window.history &amp;&amp; history.length &gt; 1) { history.back(); }
        else { location.hash = '#/patient/home'; }
      } catch(e) { location.hash = '#/patient/home'; }
    " style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer'}} type="button">Back</button>
</div>
</div>
</section>

<section aria-labelledby="patient-journal-heading" className="w-full flex items-center justify-center px-4 hidden" data-route="/patient/journal" id="route-patient-journal" style={{display: 'none'}}>
<div className="w-full max-w-[420px] mx-auto">
<header className="mb-6 sm:mb-8">
<h1 className="text-[28px] leading-tight tracking-tight text-slate-900 font-semibold" data-heading="" id="patient-journal-heading" tabindex="-1">Patient Journal — {{sample.patient.name}}</h1>
<p className="mt-1.5 text-[13px] text-slate-600">
              Current route: <span className="font-medium text-slate-800" data-current-route=""></span>
</p>
</header>
<div>
<h2 className="text-[15px] tracking-tight text-slate-800 font-medium">Entries</h2>
<div className="mt-2 space-y-1" id="journal-list"></div>
</div>
<div className="mt-6">
<label className="block text-[13px] text-slate-700 mb-2" htmlFor="jrnlText">New entry</label>
<textarea className="w-full p-3 rounded-[10px] border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" id="jrnlText" rows="3" style={{width: '100%', maxWidth: '640px'}}></textarea>
<button className="mt-3 w-full p-3 text-[15px] font-medium rounded-[10px] bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="jrnlSave" onclick="
           try {
             const ta = document.getElementById('jrnlText');
             const val = (ta &amp;&amp; ta.value || '').trim();
             if (!val) { alert('Please write something first.'); return; }
             const today = new Date().toISOString().slice(0,10);
             sample.patient.journal_entries = sample.patient.journal_entries || [];
             sample.patient.journal_entries.unshift({ date: today, text: val });
             if (ta) ta.value = '';
             if (window.render &amp;&amp; window.route) window.render(window.route.current);
           } catch(e){ console.error('[journal] save error', e); }
         " type="button">Save</button>
</div>
<div className="flex items-center gap-3 mt-4">
<button aria-label="Back" onclick="
      try {
        if (window.history &amp;&amp; history.length &gt; 1) { history.back(); }
        else { location.hash = '#/patient/home'; }
      } catch(e) { location.hash = '#/patient/home'; }
    " style={{display: 'inline-block', padding: '12px 16px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', cursor: 'pointer'}} type="button">Back</button>
</div>
</div>
</section>
</main>


<style>
      /* Light polish for the role links */
      .role-link:hover { background:#f9fafb; }
      .role-link:active { background:#f3f4f6; }
    </style>

    </>
  );
}
