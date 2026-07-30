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
      
      // Icon paint
      function paintIcons(root = document) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }, node: root });
      }

      // Reveal animations
      function reveal() {
        document.querySelectorAll('[data-animate]').forEach((el) => {
          requestAnimationFrame(() => {
            el.classList.remove('opacity-0', 'translate-y-2');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        });
      }

      // State
      const state = {
        rating: 0,
        expScale: 0, // 1..5
        tags: new Set(),
        consent: false,
        submitting: false,
        anonymous: false,
        apptDate: new Date(),
        messages: [],
      };

      // DOM refs
      const starGroup = document.getElementById('starGroup');
      const starLabel = document.getElementById('starLabel');
      const expScale = document.getElementById('expScale');
      const expScaleLabel = document.getElementById('expScaleLabel');
      const feedbackCard = document.getElementById('feedbackCard');
      const detailsCard = document.getElementById('detailsCard');
      const consentCard = document.getElementById('consentCard');
      const feedback = document.getElementById('feedback');
      const charCounter = document.getElementById('charCounter');
      const feedbackError = document.getElementById('feedbackError');
      const micBtn = document.getElementById('micBtn');
      const anonToggle = document.getElementById('anonToggle');
      const patientName = document.getElementById('patientName');
      const apptDate = document.getElementById('apptDate');
      const tagGroup = document.getElementById('tagGroup');
      const consentBtn = document.getElementById('consentBtn');
      const submitBtn = document.getElementById('submitBtn');
      const cancelBtn = document.getElementById('cancelBtn');

      const msgList = document.getElementById('msgList');
      const msgInput = document.getElementById('msgInput');
      const msgSend = document.getElementById('msgSend');
      const msgError = document.getElementById('msgError');

      const progressBar = document.getElementById('progressBar');

      const thankYouOverlay = document.getElementById('thankYouOverlay');
      const tyBackdrop = document.getElementById('tyBackdrop');
      const tySheet = document.getElementById('tySheet');
      const returnProfile = document.getElementById('returnProfile');
      const bookAgain = document.getElementById('bookAgain');

      const errorBanner = document.getElementById('errorBanner');
      const retryBtn = document.getElementById('retryBtn');

      // Init date
      function fmtDateLong(d) {
        return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      }
      apptDate.textContent = fmtDateLong(state.apptDate);

      // Build main stars (1..5)
      const STAR_COUNT = 5;
      let hoverIdx = 0;

      function renderStars() {
        starGroup.innerHTML = '';
        for (let i = 1; i <= STAR_COUNT; i++) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('role', 'radio');
          btn.setAttribute('aria-checked', String(state.rating === i));
          btn.setAttribute('aria-label', `${i} ${i === 1 ? 'star' : 'stars'}`);
          btn.dataset.value = i;
          btn.className = 'h-10 w-10 rounded-xl ring-1 ring-slate-200 bg-white flex items-center justify-center transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';
          btn.innerHTML = '<i data-lucide="star" class="h-5 w-5"></i>';
          btn.addEventListener('mouseenter', () => { hoverIdx = i; paintStars(); });
          btn.addEventListener('mouseleave', () => { hoverIdx = 0; paintStars(); });
          btn.addEventListener('click', () => { state.rating = i; updateAfterRating(); });
          btn.addEventListener('keydown', (e) => {
            const key = e.key;
            if (key === 'ArrowRight' || key === 'ArrowUp') {
              e.preventDefault();
              state.rating = Math.min(STAR_COUNT, (state.rating || 0) + 1);
              updateAfterRating(true);
            } else if (key === 'ArrowLeft' || key === 'ArrowDown') {
              e.preventDefault();
              state.rating = Math.max(1, (state.rating || 1) - 1);
              updateAfterRating(true);
            } else if (key === ' ' || key === 'Enter') {
              e.preventDefault(); updateAfterRating(true);
            }
          });
          starGroup.appendChild(btn);
        }
        paintIcons(starGroup);
        paintStars();
      }

      function paintStars() {
        const children = Array.from(starGroup.children);
        const fillTo = hoverIdx || state.rating;
        children.forEach((btn, idx) => {
          const i = idx + 1;
          const icon = btn.querySelector('[data-lucide="star"]');
          if (i <= fillTo) {
            icon.setAttribute('fill', '#2563eb'); // blue-600
            icon.setAttribute('stroke', '#2563eb');
            btn.classList.add('scale-[1.03]');
          } else {
            icon.setAttribute('fill', 'none');
            icon.setAttribute('stroke', 'currentColor');
            btn.classList.remove('scale-[1.03]');
          }
          btn.setAttribute('aria-checked', String(state.rating === i));
        });
        starLabel.textContent = state.rating ? `${state.rating}/5` : '';
      }

      function updateAfterRating(focus = false) {
        paintStars();
        // Progressive disclosure
        [feedbackCard, detailsCard, consentCard].forEach((el) => el.classList.remove('hidden'));
        requestAnimationFrame(() => {
          [feedbackCard, detailsCard, consentCard].forEach((el) => {
            el.classList.remove('opacity-0', 'translate-y-2');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        });
        if (focus) feedback.focus();
        validate();
        updateProgress();
      }

      // Overall Experience: star-based mini group
      const EXP_STAR_COUNT = 5;
      let expHoverIdx = 0;
      const expLabels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

      function renderExpStars() {
        expScale.innerHTML = '';
        for (let i = 1; i <= EXP_STAR_COUNT; i++) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('role', 'radio');
          btn.setAttribute('aria-checked', String(state.expScale === i));
          btn.setAttribute('aria-label', `${i} ${i === 1 ? 'star' : 'stars'} for overall experience`);
          btn.dataset.value = i;
          btn.className = 'h-9 w-9 rounded-lg ring-1 ring-slate-200 bg-white flex items-center justify-center transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';
          btn.innerHTML = '<i data-lucide="star" class="h-4 w-4"></i>';
          btn.addEventListener('mouseenter', () => { expHoverIdx = i; paintExpStars(); });
          btn.addEventListener('mouseleave', () => { expHoverIdx = 0; paintExpStars(); });
          btn.addEventListener('click', () => { state.expScale = i; paintExpStars(); });
          btn.addEventListener('keydown', (e) => {
            const key = e.key;
            if (key === 'ArrowRight' || key === 'ArrowUp') { e.preventDefault(); state.expScale = Math.min(EXP_STAR_COUNT, (state.expScale || 0) + 1); paintExpStars(); }
            else if (key === 'ArrowLeft' || key === 'ArrowDown') { e.preventDefault(); state.expScale = Math.max(1, (state.expScale || 1) - 1); paintExpStars(); }
            else if (key === ' ' || key === 'Enter') { e.preventDefault(); paintExpStars(); }
          });
          expScale.appendChild(btn);
        }
        paintIcons(expScale);
        paintExpStars();
      }

      function paintExpStars() {
        const fillTo = expHoverIdx || state.expScale;
        Array.from(expScale.children).forEach((btn, idx) => {
          const i = idx + 1;
          const icon = btn.querySelector('[data-lucide="star"]');
          if (i <= fillTo) {
            icon.setAttribute('fill', '#0ea5e9'); // sky-500
            icon.setAttribute('stroke', '#0ea5e9');
            btn.classList.add('scale-[1.02]');
          } else {
            icon.setAttribute('fill', 'none');
            icon.setAttribute('stroke', 'currentColor');
            btn.classList.remove('scale-[1.02]');
          }
          btn.setAttribute('aria-checked', String(state.expScale === i));
        });
        expScaleLabel.textContent = state.expScale ? `${expLabels[state.expScale - 1]} (${state.expScale}/5)` : '';
      }

      // Tags toggle
      tagGroup.querySelectorAll('button[data-tag]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const tag = btn.dataset.tag;
          if (state.tags.has(tag)) {
            state.tags.delete(tag);
            btn.classList.remove('bg-blue-50', 'ring-blue-200', 'text-blue-700');
            btn.classList.add('ring-slate-200', 'text-slate-700');
            btn.querySelector('[data-lucide="check"]').classList.add('hidden');
          } else {
            state.tags.add(tag);
            btn.classList.add('bg-blue-50', 'ring-blue-200', 'text-blue-700');
            btn.classList.remove('ring-slate-200', 'text-slate-700');
            btn.querySelector('[data-lucide="check"]').classList.remove('hidden');
          }
        });
      });

      // Anonymous toggle
      anonToggle.addEventListener('click', () => {
        state.anonymous = !state.anonymous;
        anonToggle.setAttribute('aria-pressed', String(state.anonymous));
        if (state.anonymous) {
          patientName.dataset.prev = patientName.value;
          patientName.value = 'Anonymous';
          patientName.setAttribute('disabled', 'true');
          anonToggle.classList.add('bg-slate-900', 'text-white', 'ring-slate-900');
        } else {
          patientName.value = patientName.dataset.prev || '';
          patientName.removeAttribute('disabled');
          anonToggle.classList.remove('bg-slate-900', 'text-white', 'ring-slate-900');
        }
      });

      // Consent checkbox
      consentBtn.addEventListener('click', () => {
        state.consent = !state.consent;
        consentBtn.setAttribute('aria-checked', String(state.consent));
        const icon = consentBtn.querySelector('[data-lucide="check"]');
        if (state.consent) {
          consentBtn.classList.remove('bg-white');
          consentBtn.classList.add('bg-blue-600', 'ring-blue-600');
          icon.classList.remove('hidden');
        } else {
          consentBtn.classList.add('bg-white');
          consentBtn.classList.remove('bg-blue-600', 'ring-blue-600');
          icon.classList.add('hidden');
        }
        validate();
        updateProgress();
      });

      // Feedback typing + counter + inline validation
      function updateCounter() {
        const max = feedback.getAttribute('maxlength') ? parseInt(feedback.getAttribute('maxlength')) : 300;
        const len = feedback.value.trim().length;
        charCounter.textContent = `${len}/${max}`;
      }
      feedback.addEventListener('input', () => {
        updateCounter();
        validate();
        updateProgress();
      });

      // Insert quick phrases into textarea
      document.querySelectorAll('[data-insert]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const t = btn.getAttribute('data-insert') || '';
          feedback.value = (feedback.value ? (feedback.value.trim() + ' ' + t) : t).trim();
          updateCounter();
          validate();
          updateProgress();
          feedback.focus();
        });
      });

      // Voice input (Web Speech API fallback-safe)
      let recognition = null;
      if ('webkitSpeechRecognition' in window) {
        const R = window.webkitSpeechRecognition;
        recognition = new R();
        recognition.lang = navigator.language || 'en-US';
        recognition.interimResults = true;
        recognition.continuous = false;
        recognition.onresult = (e) => {
          let transcript = '';
          for (let i = e.resultIndex; i < e.results.length; i++) {
            transcript += e.results[i][0].transcript;
          }
          feedback.value = (feedback.value + ' ' + transcript).trim();
          updateCounter();
          validate();
          updateProgress();
        };
      }
      let listening = false;
      micBtn.addEventListener('click', () => {
        if (!recognition) {
          alert('Voice input is not supported on this device.');
          return;
        }
        if (!listening) {
          listening = true;
          micBtn.classList.add('bg-blue-600');
          micBtn.querySelector('i').classList.add('text-white');
          recognition.start();
        } else {
          listening = false;
          micBtn.classList.remove('bg-blue-600');
          micBtn.querySelector('i').classList.remove('text-white');
          recognition.stop();
        }
      });

      // Message-based review
      function renderMessages() {
        msgList.innerHTML = '';
        state.messages.forEach((m, idx) => {
          const row = document.createElement('div');
          row.className = 'flex items-start gap-2';
          const bubble = document.createElement('div');
          bubble.className = 'max-w-[85%] bg-slate-900 text-white rounded-2xl rounded-bl-md px-3 py-2 text-sm shadow-sm';
          bubble.textContent = m.text;
          const del = document.createElement('button');
          del.className = 'shrink-0 h-7 w-7 rounded-lg ring-1 ring-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';
          del.innerHTML = '<i data-lucide="x" class="h-4 w-4 text-slate-600"></i>';
          del.title = 'Remove message';
          del.addEventListener('click', () => {
            state.messages.splice(idx, 1);
            renderMessages();
            validate();
            updateProgress();
          });
          row.appendChild(bubble);
          row.appendChild(del);
          msgList.appendChild(row);
        });
        paintIcons(msgList);
      }

      function addMessage(text) {
        const t = text.trim();
        if (t.length < 5) {
          msgError.classList.remove('hidden');
          return;
        }
        msgError.classList.add('hidden');
        if (state.messages.length >= 8) {
          alert('You can add up to 8 messages.');
          return;
        }
        state.messages.push({ text: t, ts: Date.now() });
        msgInput.value = '';
        renderMessages();
        validate();
        updateProgress();
      }

      msgSend.addEventListener('click', () => addMessage(msgInput.value));
      msgInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addMessage(msgInput.value);
        }
      });
      document.querySelectorAll('[data-suggest]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const suggestion = btn.getAttribute('data-suggest');
          msgInput.value = suggestion;
          msgInput.focus();
        });
      });

      // Validation + button state (accepts either text review or messages)
      function validate() {
        const minChars = 10;
        const hasRating = state.rating > 0;
        const textLen = feedback.value.trim().length;
        const textOk = textLen >= minChars;
        const msgOk = state.messages.length > 0 && state.messages.map(m => m.text).join(' ').trim().length >= minChars;

        // Show text error only if text is being used and rating chosen
        feedbackError.classList.toggle('hidden', !hasRating || textOk || msgOk);

        const ready = hasRating && (textOk || msgOk) && state.consent && !state.submitting;
        submitBtn.disabled = !ready;
        return ready;
      }

      // Progress bar
      function updateProgress() {
        let p = 0;
        if (state.rating > 0) p += 40;
        const textLen = feedback.value.trim().length;
        const msgLen = state.messages.map(m => m.text).join(' ').trim().length;
        if (textLen >= 10 || msgLen >= 10) p += 40;
        if (state.consent) p += 20;
        progressBar.style.width = p + '%';
      }

      // Submit
      submitBtn.addEventListener('click', async () => {
        if (!validate()) return;

        // Animate button
        state.submitting = true;
        submitBtn.disabled = true;
        const original = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i>Submitting…</span>';
        paintIcons(submitBtn);

        try {
          await fakeNetwork();
          // Success -> thank you sheet
          openThankYou();
        } catch (e) {
          showError();
        } finally {
          state.submitting = false;
          submitBtn.innerHTML = original;
          paintIcons(submitBtn);
          validate();
          updateProgress();
        }
      });

      // Cancel: go back (simulate profile)
      cancelBtn.addEventListener('click', () => {
        window.history.length > 1 ? window.history.back() : alert('Returning to profile...');
      });

      // Error handling
      function showError() {
        errorBanner.classList.remove('hidden');
        requestAnimationFrame(() => {
          errorBanner.classList.remove('opacity-0', 'translate-y-2');
          errorBanner.classList.add('opacity-100', 'translate-y-0');
        });
      }
      retryBtn.addEventListener('click', async () => {
        errorBanner.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => errorBanner.classList.add('hidden'), 200);
        submitBtn.click();
      });

      // Thank you modal
      function openThankYou() {
        thankYouOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
          tyBackdrop.classList.remove('opacity-0');
          tyBackdrop.classList.add('opacity-100');
          tySheet.classList.remove('translate-y-full');
          tySheet.classList.add('translate-y-0');
        });
        paintIcons(thankYouOverlay);
      }
      function closeThankYou() {
        tyBackdrop.classList.remove('opacity-100');
        tyBackdrop.classList.add('opacity-0');
        tySheet.classList.remove('translate-y-0');
        tySheet.classList.add('translate-y-full');
        setTimeout(() => thankYouOverlay.classList.add('hidden'), 300);
      }
      tyBackdrop.addEventListener('click', closeThankYou);
      returnProfile.addEventListener('click', () => {
        closeThankYou();
        alert('Returning to doctor profile…');
      });
      bookAgain.addEventListener('click', () => {
        closeThankYou();
        alert('Opening booking flow…');
      });

      // Fake network with occasional error
      function fakeNetwork() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            Math.random() < 0.85 ? resolve() : reject(new Error('network'));
          }, 900);
        });
      }

      // Init
      document.addEventListener('DOMContentLoaded', () => {
        paintIcons(document);
        reveal();
        renderStars();
        renderExpStars();
        updateCounter();
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
      
<div className="pointer-events-none fixed inset-0 opacity-[0.6]">
<div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-100px,rgba(30,64,175,0.06),transparent)]"></div>
</div>
<div className="min-h-dvh flex items-start justify-center">
<main className="w-full max-w-md mx-auto px-4 pt-6 pb-28 sm:pt-10">

<header className="relative flex items-center justify-between bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 px-4 py-3 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out" data-animate="">
<div className="flex items-center gap-2">
<div aria-label="App logo" className="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm tracking-tight">
              AB
            </div>
<div className="flex flex-col">
<span className="text-xs text-slate-500">Review</span>
<span className="text-sm font-medium tracking-tight">Add Review</span>
</div>
</div>
<button className="h-9 w-9 flex items-center justify-center rounded-xl ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="supportBtn" title="Help">
<i className="h-5 w-5 text-slate-700" data-lucide="help-circle"></i>
</button>

<div className="absolute left-3 right-3 -bottom-[6px]">
<div className="h-1 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1 bg-blue-600 w-[0%] transition-all duration-500" id="progressBar"></div>
</div>
</div>
</header>

<section aria-labelledby="doctor-title" className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-4 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out delay-100" data-animate="">
<div className="flex items-center gap-3">
<img alt="Doctor portrait" className="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop" />
<div className="min-w-0">
<h1 className="text-[20px] tracking-tight font-semibold text-slate-900" id="doctor-title">
                Dr. Meera Kapoor
              </h1>
<p className="text-base text-slate-600">Cardiologist • Fortis Care</p>
<div className="mt-1 flex items-center gap-2 text-[13px] text-slate-600">
<i className="h-3.5 w-3.5 text-amber-500" data-lucide="star"></i>
<span className="font-medium text-slate-800">4.8</span>
<span>• 320 reviews</span>
</div>
</div>
</div>
<p className="text-base text-slate-600 mt-3">
            Review your recent appointment with Dr. Meera Kapoor.
          </p>
<div className="mt-3 text-[13px] text-slate-500">
            Reviews are verified for authenticity.
          </div>
</section>

<div aria-live="assertive" className="hidden bg-red-50 text-red-700 ring-1 ring-red-200 rounded-xl px-3 py-2 mb-4 opacity-0 translate-y-2 transition duration-500 ease-out" id="errorBanner" role="alert">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="wifi-off"></i>
<span className="text-sm">Connection issue. Please try again.</span>
<button className="ml-auto h-8 px-3 rounded-lg bg-red-600 text-white text-xs hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400" id="retryBtn">
              Retry
            </button>
</div>
</div>

<section aria-labelledby="rating-title" className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out delay-150" data-animate="">
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900" id="rating-title">
            Rate your visit
          </h2>
<p className="text-base text-slate-600 mt-1">How would you rate your experience?</p>

<div aria-label="Star rating from 1 to 5" className="mt-3" role="radiogroup">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5" id="starGroup">

</div>
<span aria-live="polite" className="text-sm text-slate-600" id="starLabel"></span>
</div>
</div>

<div className="mt-4">
<label className="text-[13px] text-slate-600">Overall experience</label>
<div aria-label="Overall experience from 1 to 5" className="mt-2 flex items-center gap-2" id="expScale" role="radiogroup">

</div>
<div className="mt-1 text-sm text-slate-600" id="expScaleLabel"></div>
</div>
</section>

<section aria-labelledby="feedback-title" className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out delay-200" data-animate="" id="feedbackCard">
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900" id="feedback-title">
            Tell us about your experience
          </h2>
<p className="text-base text-slate-600 mt-1">Start by writing your review below. A star rating and consent are required to submit.</p>

<div className="mt-4">
<label className="text-[13px] text-slate-600" htmlFor="feedback">Text review</label>
<div className="relative mt-2">
<textarea aria-describedby="charCounter feedbackHint" aria-required="false" className="w-full rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 bg-white px-3 py-3 text-base text-slate-900 placeholder-slate-400 transition" id="feedback" maxlength="300" placeholder="Was the doctor attentive? Was the treatment helpful?" rows="5" spellcheck="true"></textarea>
<button aria-label="Start voice input" className="absolute right-2 bottom-2 h-9 w-9 rounded-lg flex items-center justify-center ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="micBtn" title="Voice input" type="button">
<i className="h-4.5 w-4.5 text-slate-700" data-lucide="mic"></i>
</button>
</div>
<div className="mt-2 text-xs text-slate-500" id="feedbackHint">
              10–300 characters. Be respectful and avoid sharing personal health identifiers.
            </div>
<div className="mt-1 flex items-center justify-between">
<p aria-live="polite" className="text-xs text-slate-500" id="charCounter">0/300</p>
<p className="text-xs text-red-600 hidden" id="feedbackError">Please share a few words about your experience.</p>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<button className="h-8 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-xs hover:bg-slate-50" data-insert="The doctor listened carefully and explained everything clearly." type="button">Listened & explained clearly</button>
<button className="h-8 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-xs hover:bg-slate-50" data-insert="Treatment plan was practical and easy to follow." type="button">Practical treatment plan</button>
<button className="h-8 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-xs hover:bg-slate-50" data-insert="Clinic staff were friendly and the wait time was reasonable." type="button">Friendly staff & short wait</button>
</div>

<div className="mt-3 rounded-xl ring-1 ring-slate-200 bg-slate-50 p-3">
<div className="flex items-start gap-2">
<i className="h-4.5 w-4.5 text-slate-700 mt-0.5" data-lucide="info"></i>
<p className="text-[13px] text-slate-600 leading-relaxed">
                  Your review may be publicly visible. Don’t include personal details (phone, email, address).
                  You can choose Anonymous in “Your details.” Star rating and consent are required to submit.
                </p>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-slate-700" data-lucide="message-square"></i>
<label className="text-[13px] text-slate-600">Message-based review (optional)</label>
</div>
<div className="mt-2 rounded-xl ring-1 ring-slate-200 bg-white p-3">
<div className="min-h-[44px] space-y-2" id="msgList">

</div>
<div className="mt-3 flex items-center gap-2">
<input aria-label="Message input" className="flex-1 h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 bg-white px-3 text-base text-slate-900 placeholder-slate-400 transition" id="msgInput" maxlength="140" placeholder="Write a short message (max 140)" type="text" />
<button className="h-11 px-3 rounded-xl bg-slate-900 text-white text-sm font-medium tracking-tight hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="msgSend" title="Send message" type="button">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="send"></i>
                    Send
                  </span>
</button>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="h-8 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-xs hover:bg-slate-50" data-suggest="Doctor was very attentive and listened carefully." type="button">Attentive & listened</button>
<button className="h-8 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-xs hover:bg-slate-50" data-suggest="Explanation was clear and easy to understand." type="button">Clear explanation</button>
<button className="h-8 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-xs hover:bg-slate-50" data-suggest="The waiting time was shorter than expected." type="button">Short wait</button>
</div>
<p className="mt-2 text-xs text-red-600 hidden" id="msgError">Message should be at least 5 characters.</p>
</div>
</div>

<div className="mt-6">
<label className="text-[13px] text-slate-600">What stood out? (optional)</label>
<div className="mt-2 flex flex-wrap gap-2" id="tagGroup">

<button className="h-9 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-tag="Friendliness">
<i className="h-4 w-4 hidden" data-lucide="check"></i>
<span>Friendliness</span>
</button>
<button className="h-9 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-tag="Clarity of Explanation">
<i className="h-4 w-4 hidden" data-lucide="check"></i>
<span>Clarity of Explanation</span>
</button>
<button className="h-9 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-tag="Waiting Time">
<i className="h-4 w-4 hidden" data-lucide="check"></i>
<span>Waiting Time</span>
</button>
<button className="h-9 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-tag="Staff Behavior">
<i className="h-4 w-4 hidden" data-lucide="check"></i>
<span>Staff Behavior</span>
</button>
<button className="h-9 px-3 rounded-full ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-tag="Treatment Satisfaction">
<i className="h-4 w-4 hidden" data-lucide="check"></i>
<span>Treatment Satisfaction</span>
</button>
</div>
</div>
</section>

<section aria-labelledby="details-title" className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 mb-5 hidden opacity-0 translate-y-2 transition duration-700 ease-out delay-300" data-animate="" id="detailsCard">
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900" id="details-title">
            Your details
          </h2>
<div className="mt-3 space-y-4">
<div className="space-y-2">
<label className="text-[13px] text-slate-600" htmlFor="patientName">Name</label>
<div className="flex items-center gap-2">
<input aria-required="false" className="w-full h-11 rounded-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 bg-white px-3 text-base text-slate-900 placeholder-slate-400 transition" id="patientName" type="text" value="Aarav Patel" />
<button aria-label="Post anonymously" aria-pressed="false" className="shrink-0 h-11 px-3 rounded-xl ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="anonToggle" title="Post anonymously" type="button">
<i className="h-4.5 w-4.5 text-slate-700" data-lucide="user-x"></i>
<span>Anonymous</span>
</button>
</div>
<p className="text-xs text-slate-500">You can choose to post anonymously.</p>
</div>
<div className="space-y-2">
<label className="text-[13px] text-slate-600">Date of appointment</label>
<div className="h-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 px-3 flex items-center text-base text-slate-700" id="apptDate">

</div>
</div>
</div>
</section>

<section className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 mb-6 hidden opacity-0 translate-y-2 transition duration-700 ease-out delay-300" data-animate="" id="consentCard">
<div className="flex items-start gap-3">
<button aria-checked="false" aria-label="Confirm this review is based on your genuine experience" className="mt-0.5 h-6 w-6 rounded-md ring-1 ring-slate-300 bg-white flex items-center justify-center hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="consentBtn" role="checkbox" type="button">
<i className="h-4 w-4 text-white hidden" data-lucide="check"></i>
</button>
<label className="text-base text-slate-700 leading-relaxed">
              I confirm this review is based on my genuine experience.
            </label>
</div>
</section>

<div className="sticky bottom-4">
<div className="mx-auto w-full max-w-md">
<div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-3 flex items-center gap-2">
<button className="flex-1 h-11 rounded-xl bg-blue-600 text-white text-sm font-medium tracking-tight disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" disabled id="submitBtn">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="send"></i>
                  Submit Review
                </span>
</button>
<button className="h-11 px-4 rounded-xl ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50" id="cancelBtn">
                Cancel
              </button>
</div>
</div>
</div>

<div aria-hidden="true" className="fixed inset-0 z-50 hidden" id="thankYouOverlay">
<div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300" id="tyBackdrop"></div>
<div className="absolute left-0 right-0 bottom-0 translate-y-full transition-transform duration-300" id="tySheet">
<div className="mx-auto w-full max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
<div className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 p-5">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="check"></i>
</div>
<div>
<h3 className="text-[20px] tracking-tight font-semibold text-slate-900">Thank you for sharing your feedback!</h3>
<p className="text-base text-slate-600 mt-1">Your review will help other patients.</p>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 h-11 rounded-xl bg-slate-900 text-white text-sm font-medium tracking-tight hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400" id="returnProfile">
                    Return to Doctor Profile
                  </button>
<button className="h-11 px-4 rounded-xl ring-1 ring-slate-200 text-slate-700 text-sm hover:bg-slate-50" id="bookAgain">
                    Book Another Appointment
                  </button>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>We never publish your contact details.</span>
</div>
</div>
</div>
</div>
</div>

<details className="mt-8 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-4 opacity-0 translate-y-2 transition duration-700 ease-out delay-300" data-animate="">
<summary className="cursor-pointer text-sm font-medium text-slate-700">Accessibility & UI Notes</summary>
<div className="mt-3 space-y-2 text-sm text-slate-600">
<p>Typography: Base 16px+; labels 13px; headings use tight tracking for clarity.</p>
<p>Contrast: Primary button bg-blue-600 on white (7.4:1), text-slate-700 on white (5.0:1).</p>
<p>Keyboard: Star rating via arrow keys; Enter/Space to select. Buttons have focus-visible rings.</p>
<p>ARIA: Radiogroups for rating, live regions for counters/errors, role="checkbox" for custom consent.</p>
</div>
</details>

<div className="h-8"></div>
</main>
</div>



    </>
  );
}
