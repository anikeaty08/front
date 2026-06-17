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



      // Icon init
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Content elements
      const stepWelcome = document.getElementById("step-welcome");
      const stepSurvey = document.getElementById("step-survey");
      const stepProcessing = document.getElementById("step-processing");
      const stepCelebrate = document.getElementById("step-celebrate");
      const stepReward = document.getElementById("step-reward");
      const startBtn = document.getElementById("startBtn");
      const toRewardBtn = document.getElementById("toRewardBtn");
      const claimBtn = document.getElementById("claimBtn");
      const questionText = document.getElementById("questionText");
      const optionsContainer = document.getElementById("optionsContainer");
      const ticketFill = document.getElementById("ticketFill");
      const progressLabel = document.getElementById("progressLabel");
      const prevBtn = document.getElementById("prevBtn");
      const skipBtn = document.getElementById("skipBtn");
      const microFeedback = document.getElementById("microFeedback");
      const countdownEl = document.getElementById("countdown");
      const yearEl = document.getElementById("year");
      const welcomeProgress = document.getElementById("welcomeProgress");
      const modalUnder18 = document.getElementById("modalUnder18");
      const closeUnder18 = document.getElementById("closeUnder18");

      yearEl.textContent = new Date().getFullYear();

      // Welcome bar gentle ramp
      requestAnimationFrame(() => {
        setTimeout(() => (welcomeProgress.style.width = "45%"), 300);
      });

      // Survey model
      const questions = [
        {
          id: 1,
          icon: "music-3",
          text: "How often do you go to live concerts or events?",
          options: ["Weekly", "Monthly", "A few times a year", "Rarely"],
        },
        {
          id: 2,
          icon: "megaphone",
          text: "Which summer event excites you most?",
          options: ["Music Festivals", "Sports Events", "Comedy Shows", "Theatre & Broadway"],
        },
        {
          id: 3,
          icon: "satellite-dish",
          text: "Do you follow Ticketmaster to find new artists/events?",
          options: ["Always", "Sometimes", "Rarely", "Not yet"],
        },
        {
          id: 4,
          icon: "radio",
          text: "What makes a live event unforgettable for you?",
          options: ["The Crowd Energy", "The Music", "The Atmosphere", "The Memories"],
        },
        {
          id: 5,
          icon: "user-check",
          text: "Confirm you’re 18+ to participate",
          options: ["Yes, I’m 18+", "No, I’m under 18"],
        },
      ];

      const state = {
        index: 0,
        answers: new Array(questions.length).fill(null),
        countdownStarted: false
      };

      function show(el) { el.classList.remove("hidden"); }
      function hide(el) { el.classList.add("hidden"); }

      function goTo(step) {
        hide(stepWelcome);
        hide(stepSurvey);
        hide(stepProcessing);
        hide(stepCelebrate);
        hide(stepReward);
        switch (step) {
          case "welcome":
            show(stepWelcome);
            break;
          case "survey":
            show(stepSurvey);
            renderQuestion();
            break;
          case "processing":
            show(stepProcessing);
            break;
          case "celebrate":
            show(stepCelebrate);
            break;
          case "reward":
            show(stepReward);
            focusClaim();
            if (!state.countdownStarted) {
              startCountdown(10 * 60); // 10 minutes
              state.countdownStarted = true;
            }
            break;
        }
      }

      function focusClaim() {
        requestAnimationFrame(() => {
          claimBtn?.focus({ preventScroll: true });
        });
      }

      function renderQuestion() {
        const q = questions[state.index];
        questionText.textContent = q.text;
        // swap icon
        const iconPlacers = stepSurvey.querySelectorAll("[data-lucide]");
        iconPlacers.forEach((i) => {
          if (i.getAttribute("data-lucide") && ["music-3", "megaphone", "satellite-dish", "radio", "user-check"].includes(i.getAttribute("data-lucide"))) {
            i.setAttribute("data-lucide", q.icon);
          }
        });
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        optionsContainer.innerHTML = "";
        q.options.forEach((opt, idx) => {
          const isDanger = q.id === 5 && idx === 1;
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className =
            "group w-full text-left rounded-xl ring-1 ring-white/10 p-4 transition hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0074E4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]";
          btn.setAttribute("aria-label", opt);
          btn.style.background =
            "radial-gradient(10px 10px at left center, #111111 98%, rgba(17,17,17,0) 100%)," +
            "radial-gradient(10px 10px at right center, #111111 98%, rgba(17,17,17,0) 100%)," +
            (isDanger
              ? "linear-gradient(90deg, rgba(255,111,97,0.2) 0%, rgba(255,111,97,0.12) 100%)"
              : "linear-gradient(90deg, rgba(0,116,228,0.16) 0%, rgba(21,145,255,0.12) 100%)");
          btn.innerHTML = `
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                  <i data-lucide="ticket" class="h-4 w-4 text-white/85"></i>
                </div>
                <span class="text-[15px] font-medium">${opt}</span>
              </div>
              <i data-lucide="chevron-right" class="h-4 w-4 text-white/60 group-hover:translate-x-0.5 transition"></i>
            </div>
          `;
          btn.addEventListener("click", () => handleAnswer(opt, idx));
          optionsContainer.appendChild(btn);
        });
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        prevBtn.disabled = state.index === 0;

        const pct = ((state.index) / questions.length) * 100;
        ticketFill.style.width = pct + "%";
        progressLabel.textContent = `${state.index}/${questions.length}`;
        microFeedback.textContent = "";
      }

      function handleAnswer(opt, idx) {
        // Eligibility check
        if (questions[state.index].id === 5) {
          if (idx === 1) {
            // Under 18
            show(modalUnder18);
            return;
          }
        }
        state.answers[state.index] = opt;

        // Micro feedback
        microFeedback.innerHTML = `<i data-lucide="sparkles" class="h-4 w-4 text-[#FF6F61]"></i><span>Nice! Answer saved.</span>`;
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        // Move next or finish
        if (state.index < questions.length - 1) {
          state.index++;
          animateProgressForward();
          renderQuestion();
          if (state.index === questions.length - 1) {
            skipBtn.textContent = "Finish";
          }
        } else {
          finalizeSurvey();
        }
      }

      function animateProgressForward() {
        const pct = (state.index / questions.length) * 100;
        ticketFill.style.width = pct + "%";
        progressLabel.textContent = `${state.index}/${questions.length}`;
      }

      function finalizeSurvey() {
        // fill to 100, go to processing
        ticketFill.style.width = "100%";
        progressLabel.textContent = `${questions.length}/${questions.length}`;

        goTo("processing");
        // simulate processing
        setTimeout(() => {
          goTo("celebrate");
          setTimeout(() => {
            goTo("reward");
          }, 1400);
        }, 1600);
      }

      prevBtn.addEventListener("click", () => {
        if (state.index > 0) {
          state.index--;
          renderQuestion();
          const pct = (state.index / questions.length) * 100;
          ticketFill.style.width = pct + "%";
          progressLabel.textContent = `${state.index}/${questions.length}`;
          if (state.index < questions.length - 1) {
            skipBtn.textContent = "Skip";
          }
        }
      });

      skipBtn.addEventListener("click", () => {
        if (state.index < questions.length - 1) {
          state.index++;
          renderQuestion();
          if (state.index === questions.length - 1) {
            skipBtn.textContent = "Finish";
          }
        } else {
          finalizeSurvey();
        }
      });

      startBtn.addEventListener("click", () => {
        goTo("survey");
        // focus first
        requestAnimationFrame(() => {
          optionsContainer.querySelector("button")?.focus({ preventScroll: true });
        });
      });

      toRewardBtn.addEventListener("click", () => goTo("reward"));

      // Modal close
      closeUnder18.addEventListener("click", () => {
        modalUnder18.classList.add("hidden");
      });
      modalUnder18.addEventListener("click", (e) => {
        if (e.target === modalUnder18) modalUnder18.classList.add("hidden");
      });

      // Countdown timer
      let countdownInterval;
      function startCountdown(totalSeconds) {
        clearInterval(countdownInterval);
        let remaining = totalSeconds;
        const update = () => {
          const m = Math.floor(remaining / 60);
          const s = remaining % 60;
          countdownEl.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
          remaining--;
          if (remaining < 0) {
            clearInterval(countdownInterval);
            countdownEl.textContent = "00:00";
          }
        };
        update();
        countdownInterval = setInterval(update, 1000);
      }

      // Swipe navigation for survey (mobile)
      let touchStartX = null;
      const surveySection = document.getElementById("step-survey");
      surveySection.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      surveySection.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(dx) > 60) {
          if (dx < 0) {
            // swipe left => next
            if (state.index < questions.length - 1) {
              state.index++;
              renderQuestion();
            }
          } else {
            // swipe right => prev
            if (state.index > 0) {
              state.index--;
              renderQuestion();
            }
          }
        }
        touchStartX = null;
      }, { passive: true });

      // Initialize
      goTo("welcome");
    
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
      

<div aria-hidden="true" className="fixed inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-72 w-72 blur-3xl rounded-full opacity-30" style={{background: 'radial-gradient(closest-side, #0074E4 20%, transparent 70%)'}}></div>
<div className="absolute -bottom-24 -right-24 h-72 w-72 blur-3xl rounded-full opacity-30" style={{background: 'radial-gradient(closest-side, #FF6F61 20%, transparent 70%)'}}></div>
<div className="absolute top-1/3 right-1/4 h-64 w-64 blur-3xl rounded-full opacity-20" style={{background: 'radial-gradient(closest-side, #0EA5E9 10%, transparent 70%)'}}></div>
</div>

<div className="relative mx-auto w-full max-w-xl px-5 pb-28 pt-6 sm:pt-8">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-9 w-9 rounded-xl bg-[#0074E4] flex items-center justify-center shadow-lg shadow-[#0074E4]/30 ring-1 ring-white/10">
<span className="text-white text-xl leading-none font-semibold tracking-tight">t</span>
</div>
<span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#FF6F61] ring-2 ring-[#111111]"></span>
</div>
<div className="flex items-center">
<span className="text-white text-lg tracking-tight font-medium" style={{letterSpacing: '-0.02em'}}>Ticketmaster</span>
<span className="ml-2 text-white/50 text-sm">Summer Ticket Frenzy</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
<i className="h-4 w-4 text-white/80" data-lucide="shield-check"></i>
<span className="text-xs text-white/70">Secure</span>
</div>
<button className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" type="button">
<i className="h-5 w-5 text-white/80" data-lucide="help-circle"></i>
</button>
</div>
</header>

<section className="mt-8" id="step-welcome">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm">
<div aria-hidden="true" className="absolute inset-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.65) saturate(1.1)'}}></div>
<div className="relative p-6 sm:p-8">
<div className="flex items-center gap-2 text-xs text-white/80">
<i className="h-4 w-4" data-lucide="badge-check"></i>
<span>Official Rewards Experience</span>
</div>
<h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Answer 5 Quick Questions — Unlock Your Summer Tickets
            </h1>
<p className="mt-3 text-white/80 text-sm leading-relaxed">
              A fast, fun journey designed for fans. Tap through in under a minute and see if you qualify for up to $500 Gift Cards.
            </p>

<div className="mt-5 flex items-center gap-2">
<div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-0 bg-[#0074E4] transition-all duration-700" id="welcomeProgress"></div>
</div>
<span className="text-xs text-white/70">0%</span>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
<button className="group relative w-full sm:w-auto" id="startBtn">
<span aria-label="Start Experience" className="inline-flex items-center justify-center px-5 py-4 text-base font-medium rounded-xl shadow-lg shadow-[#0074E4]/25 ring-1 ring-white/10 transition hover:scale-[1.015] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0074E4] focus-visible:ring-offset-[#111111]" style="background:
                    radial-gradient(12px 12px at left center, #111111 98%, rgba(17,17,17,0) 100%),
                    radial-gradient(12px 12px at right center, #111111 98%, rgba(17,17,17,0) 100%),
                    linear-gradient(90deg, #0074E4 0%, #1591ff 100%);
                  ">
<i className="mr-2 h-5 w-5 text-white/95" data-lucide="ticket"></i>
<span className="tracking-tight">Start Experience</span>
</span>
<span className="absolute inset-0 -z-10 blur-xl rounded-xl opacity-40" style={{background: 'radial-gradient(closest-side, #0074E4, transparent)'}}></span>
</button>
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>~60 seconds</span>
</div>
</div>

<div className="mt-5 grid grid-cols-3 gap-3 text-white/60 text-xs">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="lock"></i>
<span>Protected</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="accessibility"></i>
<span>Accessible</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Fan-first</span>
</div>
</div>
</div>
</div>
</section>

<section className="hidden mt-6" id="step-survey">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6">

<div className="mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-white/70">Progress</span>
<div className="text-xs text-white/70">
<span id="progressLabel">0/5</span>
</div>
</div>
<div aria-hidden="true" className="flex items-center gap-2">

<div className="h-3 flex-1 rounded-md overflow-hidden ring-1 ring-white/10" id="ticketBar">
<div className="h-full w-0 bg-gradient-to-r from-[#0074E4] to-[#1591ff] transition-all duration-500" id="ticketFill"></div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="relative">
<div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center ring-1 ring-white/10">
<i className="h-5 w-5 text-white/80" data-lucide="music-3"></i>
</div>
<span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#FF6F61]"></span>
</div>
<div className="flex-1">
<h2 className="text-xl font-semibold tracking-tight leading-snug" id="questionText">

</h2>
<p className="mt-1 text-sm text-white/70" id="questionHint">
                  Tap an option to continue
                </p>
</div>
</div>

<div className="mt-4 grid grid-cols-1 gap-3" id="optionsContainer"></div>

<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition disabled:opacity-40 disabled:hover:text-white/80" disabled="" id="prevBtn">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
<span>Back</span>
</button>
<button className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" id="skipBtn">
<span>Skip</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div aria-live="polite" className="mt-3 flex items-center gap-2 text-xs text-white/60" id="microFeedback"></div>
</div>
</section>

<section className="hidden mt-10" id="step-processing">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 opacity-30" style="background:
              radial-gradient(40% 50% at 20% 20%, #0074E4 0%, transparent 70%),
              radial-gradient(40% 60% at 80% 30%, #FF6F61 0%, transparent 70%);"></div>
<div className="relative mx-auto h-16 w-16 rounded-2xl bg-[#0074E4] flex items-center justify-center ring-1 ring-white/10 shadow-lg shadow-[#0074E4]/30">
<span className="text-white text-2xl font-semibold tracking-tight">t</span>
<span className="absolute inset-0 rounded-2xl animate-ping bg-[#0074E4]/40"></span>
</div>
<h3 className="mt-5 text-2xl font-semibold tracking-tight">Securing your exclusive access…</h3>
<p className="mt-2 text-white/70 text-sm">Verifying eligibility and preparing your summer reward.</p>
<div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/70">
<i className="h-4 w-4 animate-spin" data-lucide="loader-2"></i>
<span>Processing</span>
</div>
</div>
</section>

<section className="hidden mt-10" id="step-celebrate">
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 overflow-hidden">

<div aria-hidden="true" className="pointer-events-none absolute inset-0">
<div className="absolute left-6 top-4 h-2 w-2 rounded-full bg-[#FF6F61] animate-bounce" style={{animationDuration: '1.8s'}}></div>
<div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-[#0074E4] animate-bounce" style={{animationDuration: '2.2s', animationDelay: '.2s'}}></div>
<div className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-white animate-bounce" style={{animationDuration: '2s', animationDelay: '.1s'}}></div>
<div className="absolute right-10 bottom-8 h-1.5 w-1.5 rounded-full bg-[#FF6F61] animate-bounce" style={{animationDuration: '1.6s'}}></div>
<div className="absolute left-1/2 bottom-6 h-2 w-2 rounded-full bg-white animate-bounce" style={{animationDuration: '1.9s', animationDelay: '.15s'}}></div>
</div>
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center ring-1 ring-white/10">
<i className="h-5 w-5 text-white" data-lucide="party-popper"></i>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight">Congrats! You’ve unlocked the Summer Ticket Frenzy.</h3>
<p className="mt-1 text-sm text-white/70">Your responses are in. Let’s reveal your reward.</p>
<button className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium ring-1 ring-white/10 transition hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0074E4] focus-visible:ring-offset-[#111111]" id="toRewardBtn" style="background:
                radial-gradient(12px 12px at left center, #111111 98%, rgba(17,17,17,0) 100%),
                radial-gradient(12px 12px at right center, #111111 98%, rgba(17,17,17,0) 100%),
                linear-gradient(90deg, #FF6F61 0%, #ff8a7f 100%);
              ">
<i className="mr-2 h-4 w-4" data-lucide="sparkles"></i>
                Continue
              </button>
</div>
</div>
</div>
</section>

<section className="hidden mt-8" id="step-reward">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
<div className="flex items-center gap-2 text-xs text-[#FF6F61] font-medium">
<i className="h-4 w-4" data-lucide="flame"></i>
<span>Limited-Time Summer Offer</span>
<div className="ml-auto flex items-center gap-2 text-white/80">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Thousands already claimed</span>
</div>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">You’re eligible for up to $500 Ticketmaster Gift Cards!</h3>
<p className="mt-2 text-sm text-white/70">Claim your reward to get access instructions. Offer valid while supplies last.</p>

<div className="mt-6">
<div className="relative rounded-2xl p-5 sm:p-6 ring-1 ring-white/10 bg-gradient-to-tr from-[#0b3d7a] via-[#0a64c9] to-[#1591ff] shadow-lg overflow-hidden">
<div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl opacity-30" style={{background: 'radial-gradient(closest-side, #ffffff, transparent)'}}></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/15 ring-1 ring-white/30 flex items-center justify-center">
<span className="text-white text-lg font-semibold tracking-tight">t</span>
</div>
<div className="text-white">
<div className="text-sm font-medium tracking-tight">Ticketmaster Gift</div>
<div className="text-xs text-white/80">Digital eCard</div>
</div>
</div>
<div className="text-right">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight">$500</div>
<div className="text-xs text-white/80">Max value</div>
</div>
</div>
<div className="mt-5 flex items-center gap-2 text-xs text-white/80">
<i className="h-4 w-4" data-lucide="badge-check"></i>
<span>Valid across eligible events</span>
</div>
</div>
</div>

<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
<button className="group relative w-full sm:w-auto" id="claimBtn">
<span aria-label="Claim Your Reward" className="inline-flex items-center justify-center px-5 py-4 text-base font-medium rounded-xl shadow-lg shadow-[#0074E4]/25 ring-1 ring-white/10 transition hover:scale-[1.015] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0074E4] focus-visible:ring-offset-[#111111]" style="background:
                  radial-gradient(12px 12px at left center, #111111 98%, rgba(17,17,17,0) 100%),
                  radial-gradient(12px 12px at right center, #111111 98%, rgba(17,17,17,0) 100%),
                  linear-gradient(90deg, #0074E4 0%, #1591ff 100%);
                ">
<i className="mr-2 h-5 w-5 text-white/95" data-lucide="gift"></i>
<span className="tracking-tight">Claim Your Reward</span>
</span>
<span className="absolute inset-0 -z-10 blur-xl rounded-xl opacity-40" style={{background: 'radial-gradient(closest-side, #0074E4, transparent)'}}></span>
</button>
<div className="flex-1"></div>
<div className="flex items-center gap-2 text-sm">
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
<i className="h-4 w-4 text-[#FF6F61]" data-lucide="timer"></i>
<span className="text-white/80">Offer ends in</span>
<span className="font-medium text-white" id="countdown">10:00</span>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="lock"></i>
<span>Secure verification</span>
</div>
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="shield-check"></i>
<span>Protected by industry standards</span>
</div>
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
<span>No purchase necessary</span>
</div>
</div>

<div className="mt-6 border-t border-white/10 pt-4">
<div className="space-y-2">
<details className="group rounded-lg border border-white/10 bg-white/[0.02] p-3 open:bg-white/[0.03] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Why verification?</span>
<i className="h-4 w-4 text-white/70 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-white/70">
                  We verify to keep rewards fair and secure for real fans. Your info stays protected and is used only for eligibility.
                </p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/[0.02] p-3 open:bg-white/[0.03] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">How do I receive my gift card?</span>
<i className="h-4 w-4 text-white/70 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-white/70">
                  Eligible fans will receive email instructions to claim and redeem the digital gift card.
                </p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/[0.02] p-3 open:bg-white/[0.03] transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Is this legit?</span>
<i className="h-4 w-4 text-white/70 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-white/70">
                  Yes—this official experience is designed to celebrate summer fans with real rewards. Terms apply.
                </p>
</details>
</div>
<p className="mt-4 text-[11px] leading-relaxed text-white/50">
              Disclaimer: Participation subject to eligibility and verification. Gift card value and availability may vary. No purchase necessary. Void where prohibited. By continuing, you agree to the Terms and acknowledge the Privacy Notice.
            </p>
<div className="mt-2 flex items-center gap-4 text-xs">
<a className="text-white/70 hover:text-white underline underline-offset-4" href="#">Terms</a>
<a className="text-white/70 hover:text-white underline underline-offset-4" href="#">Privacy</a>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-50 items-center justify-center p-5" id="modalUnder18">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#181818] p-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-5 w-5 text-white/90" data-lucide="ban"></i>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight">Eligibility Required</h4>
<p className="mt-1 text-sm text-white/70">You must be 18+ to participate in this program.</p>
</div>
</div>
<div className="mt-5 flex justify-end">
<button className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10" id="closeUnder18">
<i className="h-4 w-4" data-lucide="x"></i>
<span>Close</span>
</button>
</div>
</div>
</div>

<footer className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/50">
<div className="flex items-center justify-center gap-1">
<span>© <span id="year"></span> Ticketmaster</span>
<span className="mx-1">•</span>
<a className="hover:text-white" href="#">Help</a>
<span className="mx-1">•</span>
<a className="hover:text-white" href="#">Contact</a>
</div>
</footer>
</div>


    </>
  );
}
