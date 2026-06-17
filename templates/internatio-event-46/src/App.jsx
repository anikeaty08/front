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



    document.addEventListener("DOMContentLoaded", () => {
      const gateForm = document.getElementById("gateForm");
      const ageGroupEl = document.getElementById("ageGroup");
      const ageDisqualify = document.getElementById("ageDisqualify");
      const gateError = document.getElementById("gateError");
      const eligibilityPill = document.getElementById("eligibilityPill");
      const tasksLockedNotice = document.getElementById("tasksLockedNotice");
      const taskList = document.getElementById("taskList");

      const progressBadge = document.getElementById("progressBadge");
      const progressLabel = document.getElementById("progressLabel");
      const progressBar = document.getElementById("progressBar");
      const claimBtn = document.getElementById("claimRewardBtn");
      const claimStatus = document.getElementById("claimStatus");

      // Task state
      const tasks = {
        A: { complete: false },
        B: { complete: false, liked: false, commented: false },
        C: { complete: false },
        D: { complete: false },
        E: { complete: false, messages: 0 }
      };

      // Elements per task
      const statusEls = {
        A: document.getElementById("status-A"),
        B: document.getElementById("status-B"),
        C: document.getElementById("status-C"),
        D: document.getElementById("status-D"),
        E: document.getElementById("status-E")
      };

      const hints = {
        A: document.getElementById("hint-A"),
        B: document.getElementById("hint-B"),
        C: document.getElementById("hint-C"),
        D: document.getElementById("hint-D"),
        E: document.getElementById("hint-E")
      };

      const btnVerifyA = document.getElementById("btn-verify-A");
      const btnVerifyBLike = document.getElementById("btn-verify-B-like");
      const btnVerifyBComment = document.getElementById("btn-verify-B-comment");
      const commentLink = document.getElementById("commentLink");
      const btnVerifyC = document.getElementById("btn-verify-C");
      const btnVerifyD = document.getElementById("btn-verify-D");
      const uploadD = document.getElementById("upload-D");
      const btnVerifyEAdd = document.getElementById("btn-verify-E-add");
      const btnVerifyESync = document.getElementById("btn-verify-E-sync");
      const msgCountLabel = document.getElementById("msgCountLabel");
      const msgCountBar = document.getElementById("msgCountBar");

      function setStatus(taskKey, state) {
        const el = statusEls[taskKey];
        if (!el) return;
        let text = "Locked";
        let dotClass = "bg-slate-500";
        let pillBorder = "border-slate-700/80";
        let pillBg = "bg-slate-900/70";
        let textColor = "text-slate-300";

        // Reset classes
        el.className = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem]";

        if (state === "locked") {
          text = "Locked";
          dotClass = "bg-slate-500";
          pillBorder = "border-slate-700/80";
          pillBg = "bg-slate-900/70";
          textColor = "text-slate-300";
        } else if (state === "incomplete") {
          text = "Incomplete";
          dotClass = "bg-amber-400";
          pillBorder = "border-amber-400/50";
          pillBg = "bg-amber-500/10";
          textColor = "text-amber-100";
        } else if (state === "complete") {
          text = "Complete";
          dotClass = "bg-emerald-400";
          pillBorder = "border-emerald-400/60";
          pillBg = "bg-emerald-500/15";
          textColor = "text-emerald-100";
        }

        el.classList.add(pillBorder, pillBg, textColor);
        el.innerHTML = '<span class="h-1.5 w-1.5 rounded-full ' + dotClass + '"></span>' + text;
      }

      function updateProgress() {
        let completed = 0;
        if (tasks.A.complete) completed++;
        if (tasks.B.complete) completed++;
        if (tasks.C.complete) completed++;
        if (tasks.D.complete) completed++;
        if (tasks.E.complete) completed++;

        const total = 5;
        const percent = Math.round((completed / total) * 100);
        progressBadge.textContent = percent + "%";
        progressLabel.textContent = completed + " / " + total + " tasks complete";
        progressBar.style.width = percent + "%";

        if (completed === total) {
          claimBtn.disabled = false;
          claimBtn.classList.remove("bg-emerald-500/20");
          claimBtn.classList.add("bg-emerald-500/80", "text-slate-950");
          claimStatus.textContent = "All tasks complete. Tap “Claim Reward” to simulate /api/claim.";
          claimStatus.classList.remove("text-slate-400");
          claimStatus.classList.add("text-emerald-300");
        } else {
          claimBtn.disabled = true;
          claimBtn.classList.remove("bg-emerald-500/80", "text-slate-950");
          claimBtn.classList.add("bg-emerald-500/20");
          claimStatus.textContent = "Claim will unlock once all tasks are complete.";
          claimStatus.classList.remove("text-emerald-300");
          claimStatus.classList.add("text-slate-400");
        }
      }

      function markComplete(taskKey, hintText) {
        tasks[taskKey].complete = true;
        setStatus(taskKey, "complete");
        if (hints[taskKey]) hints[taskKey].textContent = hintText || "Task completed via mock verification.";
        updateProgress();
      }

      function markIncomplete(taskKey, hintText) {
        tasks[taskKey].complete = false;
        setStatus(taskKey, "incomplete");
        if (hints[taskKey]) hints[taskKey].textContent = hintText || "Task not complete yet.";
        updateProgress();
      }

      // Age group disqualification display
      ageGroupEl.addEventListener("change", () => {
        if (ageGroupEl.value === "<13") {
          ageDisqualify.classList.remove("hidden");
        } else {
          ageDisqualify.classList.add("hidden");
        }
      });

      // Unlock tasks when gate form is valid
      gateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        gateError.classList.add("hidden");

        const discordId = gateForm.discordId.value.trim();
        const email = gateForm.email.value.trim();
        const gender = gateForm.gender.value;
        const ageGroup = gateForm.ageGroup.value;
        const consentMarketing = gateForm.consentMarketing.checked;
        const consentTerms = gateForm.consentTerms.checked;

        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!discordId || !email || !gender || !ageGroup || !consentMarketing || !consentTerms || !isEmailValid || ageGroup === "<13") {
          gateError.classList.remove("hidden");
          return;
        }

        // Simulate participant record save to /api/participant (mock)
        const unlockBtn = document.getElementById("unlockTasksBtn");
        unlockBtn.disabled = true;
        unlockBtn.textContent = "Saving participant...";

        setTimeout(() => {
          // Mock successful save
          unlockBtn.textContent = "Tasks Unlocked";
          eligibilityPill.className = "inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-500/15 px-2 py-0.5 text-[0.7rem] text-emerald-100";
          eligibilityPill.innerHTML = '<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Eligible';

          tasksLockedNotice.classList.add("hidden");
          taskList.classList.remove("opacity-40", "pointer-events-none");

          // Enable task interaction
          [
            btnVerifyA,
            btnVerifyBLike,
            btnVerifyBComment,
            btnVerifyC,
            btnVerifyD,
            uploadD,
            btnVerifyEAdd,
            btnVerifyESync
          ].forEach((el) => {
            if (el) el.disabled = false;
          });
          commentLink.disabled = false;

          // Set statuses to incomplete instead of locked
          ["A", "B", "C", "D", "E"].forEach((key) => {
            setStatus(key, "incomplete");
          });

          hints.A.textContent = "Tap “Mock YouTube verify” or upload a screenshot to simulate subscription.";
          hints.B.textContent = "Press both mock buttons (like + comment) to complete this task.";
          hints.C.textContent = "Press “Mock invite check” or upload proof for 2 joined friends.";
          hints.D.textContent = "Open rating page, then upload screenshot and verify.";
          hints.E.textContent = "Use the mock buttons to simulate Discord message counts.";

        }, 800);
      });

      // Mock endpoints
      function mockApiCall(path, body, cb) {
        console.log("Mock request to", path, "with payload:", body);
        setTimeout(() => {
          cb({ ok: true, path, body });
        }, 700);
      }

      // Task A: Subscribe
      btnVerifyA.addEventListener("click", () => {
        btnVerifyA.disabled = true;
        hints.A.textContent = "Calling /api/verify/youtube (mock)...";
        mockApiCall("/api/verify/youtube", { action: "subscribe" }, (res) => {
          hints.A.textContent = "Subscription verified via mock API. If unsubscribed later, this could re-lock.";
          markComplete("A");
          btnVerifyA.disabled = false;
        });
      });

      // Task B: Like + Comment
      btnVerifyBLike.addEventListener("click", () => {
        btnVerifyBLike.disabled = true;
        hints.B.textContent = "Mocking like detection...";
        setTimeout(() => {
          tasks.B.liked = true;
          btnVerifyBLike.disabled = false;
          hints.B.textContent = "Like registered (mock). Now also mock a comment.";
          if (tasks.B.liked && tasks.B.commented) {
            markComplete("B", "Like and comment both verified via mock API.");
          } else {
            markIncomplete("B", "Like registered. Comment still missing.");
          }
        }, 500);
      });

      btnVerifyBComment.addEventListener("click", () => {
        btnVerifyBComment.disabled = true;
        hints.B.textContent = "Mocking comment detection...";
        mockApiCall("/api/verify/youtube", { action: "comment", link: commentLink.value || null }, () => {
          tasks.B.commented = true;
          btnVerifyBComment.disabled = false;
          hints.B.textContent = "Comment detected (mock).";
          if (tasks.B.liked && tasks.B.commented) {
            markComplete("B", "Like and comment both verified via mock API.");
          } else {
            markIncomplete("B", "Comment registered. Like still missing.");
          }
        });
      });

      // Task C: Discord invites
      btnVerifyC.addEventListener("click", () => {
        btnVerifyC.disabled = true;
        hints.C.textContent = "Calling /api/discord/invite-check (mock)...";
        mockApiCall("/api/discord/invite-check", { minJoins: 2 }, () => {
          markComplete("C", "Mock bot confirms at least 2 invited friends joined.");
          btnVerifyC.disabled = false;
        });
      });

      // Task D: Rating
      btnVerifyD.addEventListener("click", () => {
        btnVerifyD.disabled = true;
        hints.D.textContent = "Validating rating screenshot via /api/upload (mock)...";
        mockApiCall("/api/upload", { type: "rating" }, () => {
          markComplete("D", "5-star rating + comment accepted (mock).");
          btnVerifyD.disabled = false;
        });
      });

      // Task E: Messages count
      function updateMsgUI() {
        const count = tasks.E.messages;
        const required = 10;
        msgCountLabel.textContent = count + " / " + required;
        const percent = Math.min(100, (count / required) * 100);
        msgCountBar.style.width = percent + "%";
        if (count >= required) {
          markComplete("E", "Mock bot confirms enough non-spam messages in #uid.");
        } else {
          markIncomplete("E", "You need at least 10 playful messages. Current mock count: " + count + ".");
        }
      }

      btnVerifyEAdd.addEventListener("click", () => {
        tasks.E.messages += 1;
        hints.E.textContent = "Added 1 mock message. Sync with bot for final check if needed.";
        updateMsgUI();
      });

      btnVerifyESync.addEventListener("click", () => {
        btnVerifyESync.disabled = true;
        hints.E.textContent = "Calling /api/discord/message-count (mock)...";
        mockApiCall("/api/discord/message-count", { channel: "#uid" }, () => {
          // In a real call, we would update messages based on backend count.
          // Here we just re-use the current mock count.
          updateMsgUI();
          hints.E.textContent = "Bot sync complete (mock). Messages counted with spam filtering.";
          btnVerifyESync.disabled = false;
        });
      });

      // Claim reward
      claimBtn.addEventListener("click", () => {
        if (claimBtn.disabled) return;
        claimBtn.disabled = true;
        claimBtn.textContent = "Claiming...";
        claimStatus.textContent = "Calling /api/claim (mock)...";
        mockApiCall("/api/claim", { tasks }, () => {
          claimStatus.textContent = "Reward claimed in demo. In production, this triggers your real fulfillment flow.";
          claimStatus.classList.remove("text-emerald-300");
          claimStatus.classList.add("text-cyan-300");
          claimBtn.textContent = "Reward Claimed";
        });
      });

      // Initialize statuses as locked
      ["A", "B", "C", "D", "E"].forEach((key) => setStatus(key, "locked"));
      updateProgress();
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
      
<div className="flex-1 flex flex-col">

<header className="w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
<div className="max-w-5xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6">
<div className="flex items-center gap-2">
<div className="h-7 w-7 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/40">
<span className="text-sm font-semibold tracking-tight text-cyan-400">IT</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base sm:text-lg font-semibold tracking-tight">International Toilet Day</span>
<span className="text-xs sm:text-sm text-slate-400 tracking-tight">Men · Nov 19 · Discord Event</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-3 text-xs sm:text-sm text-slate-400">
<span className="inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live campaign
          </span>
</div>
</div>
</header>
<main className="w-full flex-1">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

<section className="mb-8 sm:mb-10">
<div className="max-w-2xl">
<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
              Receive Gift — Nov 19: International Toilet Day (Men)
            </h1>
<p className="text-base sm:text-lg text-slate-300 mb-4">
              Join the celebration in our Discord, complete playful tasks, and unlock a special reward.
              Fill in your details to get started. Tasks only unlock once you’re eligible.
            </p>
<div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Mobile-friendly event flow</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>5 tasks · 1 reward</span>
</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">

<section aria-labelledby="details-heading" className="space-y-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 shadow-lg shadow-black/40">
<div className="border-b border-slate-800/80 px-4 sm:px-6 py-4 flex items-center justify-between gap-2">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50" id="details-heading">
                    Your Details
                  </h2>
<p className="text-sm text-slate-400 mt-1">
                    Complete this section to unlock the event tasks. All fields are required.
                  </p>
</div>
<div className="hidden sm:flex flex-col items-end text-right text-xs text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-0.5 text-amber-200" id="eligibilityPill">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                    Locked
                  </span>
<span className="mt-1">Eligibility</span>
</div>
</div>
<div className="px-4 sm:px-6 py-4 sm:py-5 space-y-4">
<form className="space-y-4" id="gateForm">

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs sm:text-sm text-slate-300" htmlFor="discordId">
<span>Discord ID</span>
<span className="text-[0.7rem] text-slate-500">Required</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 focus:border-cyan-500/80" id="discordId" name="discordId" placeholder="e.g. toiletking#1234 or Discord user ID" required="" type="text"/>
<p className="text-xs text-slate-500">
                      Used to link your tasks and reward. Make sure this matches your event account.
                    </p>
</div>

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs sm:text-sm text-slate-300" htmlFor="email">
<span>Email for reward</span>
<span className="text-[0.7rem] text-slate-500">Required</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 focus:border-cyan-500/80" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
<p className="text-xs text-slate-500">
                      Only used to send your reward and updates if you opt in.
                    </p>
</div>

<fieldset className="space-y-2">
<legend className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
<span>Gender</span>
<span className="text-[0.7rem] text-slate-500">Required</span>
</legend>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<label className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-200 cursor-pointer hover:border-cyan-500/70">
<input className="h-3.5 w-3.5 border-slate-500 text-cyan-500 focus:ring-cyan-500" name="gender" required="" type="radio" value="Male"/>
<span>Male</span>
</label>
<label className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-200 cursor-pointer hover:border-cyan-500/70">
<input className="h-3.5 w-3.5 border-slate-500 text-cyan-500 focus:ring-cyan-500" name="gender" type="radio" value="Female"/>
<span>Female</span>
</label>
<label className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-200 cursor-pointer hover:border-cyan-500/70">
<input className="h-3.5 w-3.5 border-slate-500 text-cyan-500 focus:ring-cyan-500" name="gender" type="radio" value="Other"/>
<span>Other</span>
</label>
<label className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-[0.7rem] sm:text-xs text-slate-200 cursor-pointer hover:border-cyan-500/70">
<input className="h-3.5 w-3.5 border-slate-500 text-cyan-500 focus:ring-cyan-500" name="gender" type="radio" value="Prefer not to say"/>
<span>Prefer not to say</span>
</label>
</div>
</fieldset>

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs sm:text-sm text-slate-300" htmlFor="ageGroup">
<span>Age group</span>
<span className="text-[0.7rem] text-slate-500">Required · &lt;13 not eligible</span>
</label>
<select className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 focus:border-cyan-500/80" id="ageGroup" name="ageGroup" required="">
<option value="">Select your age group</option>
<option value="&lt;13">&lt;13 (Not eligible)</option>
<option value="13-17">13–17</option>
<option value="18-24">18–24</option>
<option value="25-34">25–34</option>
<option value="35-44">35–44</option>
<option value="45+">45+</option>
</select>
<p className="text-xs text-rose-400 hidden" id="ageDisqualify">
                      You must be at least 13 years old to participate in this event.
                    </p>
</div>

<div className="space-y-3 border-t border-slate-800/80 pt-3">
<label className="flex items-start gap-2 text-sm text-slate-200 cursor-pointer">
<input className="mt-1 h-3.5 w-3.5 border-slate-500 text-cyan-500 focus:ring-cyan-500" id="consentMarketing" name="consentMarketing" required="" type="checkbox"/>
<span>
                        I agree to receive event and marketing emails related to this campaign.
                        <span className="block text-xs text-slate-500 mt-0.5">
                          Required to open tasks. You can opt out later via unsubscribe links.
                        </span>
</span>
</label>
<label className="flex items-start gap-2 text-sm text-slate-200 cursor-pointer">
<input className="mt-1 h-3.5 w-3.5 border-slate-500 text-cyan-500 focus:ring-cyan-500" id="consentTerms" name="consentTerms" required="" type="checkbox"/>
<span>
                        I agree to the event Terms &amp; Conditions and Privacy Policy.
                        <span className="block text-xs text-slate-500 mt-0.5">
                          Email is stored only for reward delivery and marketing if you consent. Discord ID is used for verification and event tracking.
                        </span>
</span>
</label>
</div>

<p className="hidden text-xs text-rose-400 bg-rose-500/10 border border-rose-500/40 rounded-lg px-3 py-2" id="gateError">
                    Please complete all required fields, be at least 13 years old, and accept both consents to unlock tasks.
                  </p>

<div className="pt-1">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 text-sm font-semibold tracking-tight px-4 py-2.5 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-40 disabled:cursor-not-allowed" id="unlockTasksBtn" type="submit">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Save &amp; Unlock Tasks</span>
</button>
<p className="mt-2 text-xs text-slate-500">
                      A participant record will be saved when tasks unlock. This demo simulates that call on the client only.
                    </p>
</div>
</form>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 sm:px-5 py-3 sm:py-4">
<div className="flex items-start gap-2">
<div className="mt-0.5">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l7.5 4.5v9L12 21 4.5 16.5v-9L12 3z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-xs sm:text-sm text-slate-400">
                  Your email and Discord ID are used only for this event. In a real deployment, integrations with YouTube and Discord would run server-side with secure tokens; this demo uses simulated checks only.
                </div>
</div>
</div>
</section>

<section aria-labelledby="tasks-heading" className="space-y-4 sm:space-y-5">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-black/40">
<div className="px-4 sm:px-5 py-4 border-b border-slate-800/80 flex items-center justify-between gap-3">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50" id="tasks-heading">
                    Event Tasks
                  </h2>
<p className="text-sm text-slate-400 mt-1">
                    Complete all 5 tasks on Nov 19 to claim your reward. This demo simulates verifications.
                  </p>
</div>
<div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-slate-900/80 border border-slate-700/80">
<span className="text-sm font-semibold tracking-tight text-cyan-400" id="progressBadge">0%</span>
</div>
</div>
<div className="px-4 sm:px-5 py-4 space-y-3">

<div className="space-y-1">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Overall progress</span>
<span id="progressLabel">0 / 5 tasks complete</span>
</div>
<div className="h-2 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all duration-500" id="progressBar"></div>
</div>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-sm font-semibold tracking-tight px-4 py-2.5 mt-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 focus:ring-offset-2 focus:ring-offset-slate-950" disabled="" id="claimRewardBtn">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-3.17a3 3 0 00-5.66 0H4l1 11h14l1-11z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 21a2 2 0 004 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Claim Reward</span>
</button>
<p className="text-xs text-slate-400 mt-1" id="claimStatus">
                  Claim will unlock once all tasks are complete.
                </p>

<div className="mt-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-100 flex items-start gap-2" id="tasksLockedNotice">
<svg className="h-4 w-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17v-5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 7h.01" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"></circle>
</svg>
<span>
                    Tasks are locked. Complete the form on the left, confirm you’re at least 13, and accept both consents to start.
                  </span>
</div>
</div>
</div>

<div aria-live="polite" className="space-y-3 sm:space-y-4 opacity-40 pointer-events-none" id="taskList">


<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan-500/15 border border-cyan-500/60 text-[0.7rem] text-cyan-300 font-semibold tracking-tight">A</span>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                        Subscribe to YouTube channel
                      </h3>
</div>
<p className="mt-1 text-sm text-slate-400">
                      Subscribe to our official event channel. In production, this would be verified via the YouTube API.
                    </p>
</div>
<div className="flex flex-col items-end text-right">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.7rem] text-slate-300" id="status-A">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Locked
                    </span>
</div>
</div>
<div className="space-y-2">
<p className="text-xs sm:text-sm text-slate-400">
                    Tap the mock button below to simulate subscription verification, or upload a screenshot as fallback proof.
                  </p>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 text-xs sm:text-sm px-3 py-1.5 hover:bg-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-A">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v-8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M18 20V10" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M6 20v-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock YouTube verify</span>
</button>
<label className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 text-xs sm:text-sm text-slate-200 px-3 py-1.5 cursor-pointer hover:border-slate-500/80">
<svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16l-4-4-4 4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 12v8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M20 16a4 4 0 00-4-4h-1" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M4 16a4 4 0 014-4h1" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Upload screenshot</span>
<input className="hidden" type="file"/>
</label>
</div>
<p className="text-xs text-slate-500" id="hint-A">
                    Status: waiting for form unlock.
                  </p>
</div>
</article>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan-500/15 border border-cyan-500/60 text-[0.7rem] text-cyan-300 font-semibold tracking-tight">B</span>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                        Like &amp; comment on latest video
                      </h3>
</div>
<p className="mt-1 text-sm text-slate-400">
                      Like and comment on the latest International Toilet Day (Men) video.
                    </p>
</div>
<div className="flex flex-col items-end text-right">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.7rem] text-slate-300" id="status-B">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Locked
                    </span>
</div>
</div>
<div className="space-y-2">
<p className="text-xs sm:text-sm text-slate-400">
                    Use the mock controls to simulate like + comment detection, or provide a comment link / screenshot.
                  </p>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 text-xs sm:text-sm px-3 py-1.5 hover:bg-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-B-like">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11l5-5 5 5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 6v12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock like</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 text-xs sm:text-sm px-3 py-1.5 hover:bg-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-B-comment">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock comment</span>
</button>
<input className="flex-1 min-w-[8rem] rounded-lg border border-slate-700/80 bg-slate-950/80 px-2.5 py-1.5 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/80 focus:border-cyan-500/80" disabled="" id="commentLink" placeholder="Optional: comment link" type="url"/>
</div>
<p className="text-xs text-slate-500" id="hint-B">
                    Status: waiting for form unlock.
                  </p>
</div>
</article>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan-500/15 border border-cyan-500/60 text-[0.7rem] text-cyan-300 font-semibold tracking-tight">C</span>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                        Invite 2 friends to Discord server
                      </h3>
</div>
<p className="mt-1 text-sm text-slate-400">
                      Invite at least two friends who join the server. A Discord bot would normally check this.
                    </p>
</div>
<div className="flex flex-col items-end text-right">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.7rem] text-slate-300" id="status-C">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Locked
                    </span>
</div>
</div>
<div className="space-y-2">
<p className="text-xs sm:text-sm text-slate-400">
                    Use the mock invite check or upload proof that at least 2 invited friends actually joined.
                  </p>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 text-xs sm:text-sm px-3 py-1.5 hover:bg-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-C">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8a6 6 0 11-12 0 6 6 0 0112 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5 21a7 7 0 0114 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock invite check</span>
</button>
<label className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 text-xs sm:text-sm text-slate-200 px-3 py-1.5 cursor-pointer hover:border-slate-500/80">
<svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16l-4-4-4 4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 12v8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M20 16a4 4 0 00-4-4h-1" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M4 16a4 4 0 014-4h1" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Upload proof</span>
<input className="hidden" type="file"/>
</label>
</div>
<p className="text-xs text-slate-500" id="hint-C">
                    Status: waiting for form unlock.
                  </p>
</div>
</article>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan-500/15 border border-cyan-500/60 text-[0.7rem] text-cyan-300 font-semibold tracking-tight">D</span>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                        Rate the server 5 stars + comment
                      </h3>
</div>
<p className="mt-1 text-sm text-slate-400">
                      Open the rating page, leave a 5-star review with a short comment, then upload a screenshot.
                    </p>
</div>
<div className="flex flex-col items-end text-right">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.7rem] text-slate-300" id="status-D">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Locked
                    </span>
</div>
</div>
<div className="space-y-2">
<a className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-xs sm:text-sm text-cyan-300 px-3 py-1.5 hover:border-cyan-500/60" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Open rating page (demo link)</span>
</a>
<div className="flex flex-wrap items-center gap-2">
<label className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 text-xs sm:text-sm text-slate-200 px-3 py-1.5 cursor-pointer hover:border-slate-500/80">
<svg className="h-3.5 w-3.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Upload 5-star screenshot</span>
<input className="hidden" disabled="" id="upload-D" type="file"/>
</label>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 text-xs sm:text-sm px-3 py-1.5 hover:bg-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-D">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock verify rating</span>
</button>
</div>
<p className="text-xs text-slate-500" id="hint-D">
                    Status: waiting for form unlock.
                  </p>
</div>
</article>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan-500/15 border border-cyan-500/60 text-[0.7rem] text-cyan-300 font-semibold tracking-tight">E</span>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                        Post 10+ playful messages in #uid
                      </h3>
</div>
<p className="mt-1 text-sm text-slate-400">
                      On Nov 19, post at least 10 playful, non-spam messages about “International Toilet – Men” in the #uid channel.
                    </p>
</div>
<div className="flex flex-col items-end text-right">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.7rem] text-slate-300" id="status-E">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Locked
                    </span>
</div>
</div>
<div className="space-y-2">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2.5 space-y-1.5">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Message counter (mock)</span>
<span className="text-cyan-300" id="msgCountLabel">0 / 10</span>
</div>
<div className="h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-0 rounded-full bg-cyan-400 transition-all duration-500" id="msgCountBar"></div>
</div>
<p className="text-[0.7rem] text-slate-500">
                      In production, a Discord bot counts unique, non-spam messages in #uid on event day only.
                    </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 text-xs sm:text-sm px-3 py-1.5 hover:bg-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-E-add">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock add message</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 text-slate-200 border border-slate-700/80 text-xs sm:text-sm px-3 py-1.5 hover:border-cyan-500/60 disabled:opacity-40 disabled:cursor-not-allowed" disabled="" id="btn-verify-E-sync">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10h-6" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M7 10H3" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5 6v12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M19 6v12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Mock sync with bot</span>
</button>
</div>
<div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2.5 space-y-1.5">
<p className="text-xs text-amber-100 font-medium tracking-tight">
                      Community rules &amp; anti-spam
                    </p>
<ul className="text-[0.7rem] text-amber-100 list-disc list-inside space-y-0.5">
<li>Keep messages playful, respectful, and on topic.</li>
<li>No copy-paste spam or repeated messages.</li>
<li>Bot ignores low-effort or repeated content.</li>
</ul>
</div>
<p className="text-xs text-slate-500" id="hint-E">
                    Status: waiting for form unlock.
                  </p>
</div>
</article>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 sm:px-5 py-3 sm:py-4 space-y-2">
<p className="text-xs sm:text-sm text-slate-300 font-medium tracking-tight">
                About this demo
              </p>
<ul className="text-xs sm:text-sm text-slate-400 space-y-1.5">
<li>
                  All verifications use mock client-side logic. In production, endpoints like
                  <code className="bg-slate-900/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-[0.7rem] text-cyan-300">/api/verify/youtube</code>,
                  <code className="bg-slate-900/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-[0.7rem] text-cyan-300">/api/upload</code>,
                  <code className="bg-slate-900/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-[0.7rem] text-cyan-300">/api/discord/invite-check</code>,
                  <code className="bg-slate-900/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-[0.7rem] text-cyan-300">/api/discord/message-count</code>,
                  and
                  <code className="bg-slate-900/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-[0.7rem] text-cyan-300">/api/claim</code>
                  would be implemented server-side.
                </li>
<li>
                  Use mobile first: this layout is optimized for phones and scales up for larger screens without horizontal scrolling.
                </li>
<li>
                  Developers can replace the mock handlers in the inline script with real API requests and bot integrations.
                </li>
</ul>
</div>
</section>
</div>
</div>
</main>
</div>



    </>
  );
}
