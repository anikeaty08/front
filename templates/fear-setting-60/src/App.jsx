import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

    // Accordion logic
    document.querySelectorAll('[data-accordion-trigger]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-accordion-trigger');
        var content = document.querySelector('[data-accordion-content="' + key + '"]');
        var icon = document.querySelector('[data-accordion-icon="' + key + '"]');

        if (!content) return;

        var isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        if (isOpen) {
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          // Allow multiple open at once; just open this one
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    // Initialize open state for step1 by matching computed height
    document.querySelectorAll('[data-accordion-content]').forEach(function (content) {
      if (content.getAttribute('data-accordion-content') === 'step1') {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        var icon = document.querySelector('[data-accordion-icon="step1"]');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
      }
    });

    // Interactive fear rows
    var rowsContainer = document.getElementById('fear-rows');
    var template = document.getElementById('fear-row-template');
    var addButton = document.getElementById('add-fear-row');

    function addRow(initialPlaceholders) {
      var node = template.content.firstElementChild.cloneNode(true);

      if (initialPlaceholders && initialPlaceholders.length === 3) {
        var textareas = node.querySelectorAll('textarea');
        textareas[0].placeholder = initialPlaceholders[0];
        textareas[1].placeholder = initialPlaceholders[1];
        textareas[2].placeholder = initialPlaceholders[2];
      }

      // Attach row-level controls
      node.querySelector('[data-remove-row]').addEventListener('click', function () {
        node.parentNode.removeChild(node);
      });

      node.querySelector('[data-move-up]').addEventListener('click', function () {
        var prev = node.previousElementSibling;
        if (prev) {
          rowsContainer.insertBefore(node, prev);
        }
      });

      node.querySelector('[data-move-down]').addEventListener('click', function () {
        var next = node.nextElementSibling;
        if (next) {
          rowsContainer.insertBefore(next, node);
        }
      });

      rowsContainer.appendChild(node);

      // Ensure accordion height updates if Step 1 is open
      var step1Content = document.querySelector('[data-accordion-content="step1"]');
      if (step1Content && step1Content.style.maxHeight && step1Content.style.maxHeight !== '0px') {
        step1Content.style.maxHeight = step1Content.scrollHeight + 'px';
      }
    }

    // Seed with three example rows similar to original placeholders
    addRow([
      'What is the worst thing that could happen?',
      'What could I do to reduce the likelihood of this happening by even 20–50%?',
      'If it happened, what could I do to repair the damage, even temporarily?'
    ]);

    addRow([
      'Another fear or worst-case scenario…',
      'What small safeguards could I put in place?',
      'Who or what could help me recover?'
    ]);

    addRow([
      'Another fear or worst-case scenario…',
      'What tiny step would meaningfully reduce risk?',
      'What backup plan could I put in place?'
    ]);

    // Add new row on button click
    if (addButton) {
      addButton.addEventListener('click', function () {
        addRow([
          'Another fear or worst-case scenario…',
          'How could I lower the odds of this happening?',
          'How could I limit or repair the damage?'
        ]);
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-5xl mx-auto bg-white border border-neutral-200 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.06)] overflow-hidden">

<header className="border-b border-neutral-200 px-6 sm:px-10 pt-5 pb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="">
<div className="inline-flex items-center gap-2 mb-1">
<div className="h-6 w-6 rounded-md bg-neutral-50 border border-neutral-200 flex items-center justify-center text-xs font-semibold tracking-tight text-neutral-800">
<span>FS</span>
</div>
<span className="text-xs font-medium text-neutral-500 tracking-[0.16em] uppercase">Fear-Setting</span>
</div>
<h1 className="sm:text-3xl text-2xl font-semibold text-neutral-900 tracking-tight">CHANGED TITLE</h1>
<p className="text-sm text-neutral-500 max-w-xl mt-1.5">
          A three-part exercise to clarify your fears, build concrete mitigation plans, and define the costs of inaction.
        </p>
</div>
<div className="flex flex-wrap gap-2 sm:gap-3 items-center">
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70">
<svg className="lucide lucide-file-down w-4 h-4" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
<span>Download as PDF</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-sky-500/70 bg-sky-50 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-sky-700 hover:bg-sky-100 hover:border-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/80">
<svg className="lucide lucide-pen-square w-4 h-4" data-lucide="pen-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
<span>Today’s Session</span>
</button>
</div>
</header>

<main className="px-6 sm:px-10 pb-8 pt-5 grid grid-cols-1 xl:grid-cols-[minmax(0,_1.35fr)_minmax(0,_1fr)] gap-6 xl:gap-8">

<section className="space-y-4">

<div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden">

<button className="w-full flex items-start justify-between gap-3 px-4 sm:px-6 pt-4 pb-3 border-b border-neutral-200 hover:bg-neutral-50 transition-colors" data-accordion-trigger="step1" type="button">
<div className="text-left">
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 mb-1">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-[10px] tracking-tight text-neutral-700">1</span>
<span className="tracking-[0.16em] uppercase">Define your fears</span>
</div>
<h2 className="text-lg font-semibold text-neutral-900 tracking-tight">
                If I took this action, what could go wrong?
              </h2>
<p className="mt-1 text-xs sm:text-sm text-neutral-500">
                List concrete fears, then define how you’d prevent and repair each one.
              </p>
</div>
<div className="flex flex-col items-end gap-1 text-right">
<span className="hidden sm:inline text-[10px] font-medium text-neutral-400 uppercase tracking-[0.18em]">Timebox</span>
<span className="hidden sm:inline text-xs text-neutral-500">10–20 min</span>
<span className="inline-flex sm:mt-1 h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-neutral-500">
<svg className="w-3.5 h-3.5 transition-transform duration-150" data-accordion-icon="step1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</div>
</button>

<div className="max-h-[999px] transition-[max-height,opacity] duration-200 ease-out opacity-100" data-accordion-content="step1">

<div className="px-4 sm:px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                The action / decision you’re considering
              </label>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="e.g., Take a 3-month sabbatical from work to focus on my own project" type="text"/>
</div>

<div className="px-3.5 sm:px-5 pb-4 pt-3">

<div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)_minmax(0,_0.9fr)] gap-3 sm:gap-4 mb-2.5">
<div className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  1. Define
                </div>
<div className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  2. Prevent
                </div>
<div className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  3. Repair
                </div>
</div>

<div className="space-y-3" id="fear-rows">

<template id="fear-row-template">
<div className="group border border-neutral-200 rounded-xl bg-neutral-50/70 hover:bg-white hover:border-neutral-300 transition-colors">
<div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)_minmax(0,_0.9fr)] gap-3 sm:gap-4 p-3">
<div className="flex flex-col">
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="What is the worst thing that could happen?" rows="2"></textarea>
</div>
<div className="flex flex-col">
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="What could I do to reduce the likelihood of this happening by even 20–50%?" rows="2"></textarea>
</div>
<div className="flex flex-col">
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="If it happened, what could I do to repair the damage, even temporarily?" rows="2"></textarea>
</div>
</div>

<div className="flex items-center justify-between px-3 pb-2 pt-1 text-[11px] text-neutral-500">
<div className="inline-flex items-center gap-1.5">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-200 bg-white text-[10px] text-neutral-500 group-hover:border-neutral-300">
                          ☰
                        </span>
<span>Drag to reorder</span>
</div>
<div className="inline-flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-1 text-[11px] text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300" data-move-up="" type="button">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
<span>Up</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-1 text-[11px] text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300" data-move-down="" type="button">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
<span>Down</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] text-rose-600 hover:bg-rose-100 hover:border-rose-300" data-remove-row="" type="button">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
<span>Remove</span>
</button>
</div>
</div>
</div>
</template>
</div>

<div className="mt-3 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[11px] font-medium text-sky-700 hover:bg-sky-100 hover:border-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70" id="add-fear-row" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
<span>Add another fear</span>
</button>
</div>

<div className="mt-3.5 flex items-start gap-2 text-[11px] text-neutral-500">
<svg className="lucide lucide-lightbulb w-3.5 h-3.5 mt-0.5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<p>
                  Be specific. “Fail” is vague; “I might not be able to pay rent for one month” is concrete and solvable.
                </p>
</div>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden">

<button className="w-full flex items-start justify-between gap-3 px-4 sm:px-6 pt-4 pb-3 border-b border-neutral-200 hover:bg-neutral-50 transition-colors" data-accordion-trigger="step2" type="button">
<div>
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 mb-1">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-[10px] tracking-tight text-neutral-700">2</span>
<span className="tracking-[0.16em] uppercase">Define the benefits</span>
</div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                What might be the benefits of an attempt or partial success?
              </h2>
<p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Shift attention from loss to growth. Consider skills, relationships, identity, and opportunities.
              </p>
</div>
<div className="flex flex-col items-end gap-1 text-right">
<span className="hidden sm:inline text-[10px] font-medium text-neutral-400 uppercase tracking-[0.18em]">Timebox</span>
<span className="hidden sm:inline text-xs text-neutral-500">5–10 min</span>
<span className="inline-flex sm:mt-1 h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-neutral-500">
<svg className="w-3.5 h-3.5 transition-transform duration-150" data-accordion-icon="step2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</div>
</button>

<div className="max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-200 ease-out" data-accordion-content="step2">
<div className="px-4 sm:px-6 py-4 space-y-3.5">

<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                  If everything went “okay but not perfect”, what would improve in your life?
                </label>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70" placeholder="e.g., More confidence in my ability to handle uncertainty, new skills, expanded network, clearer direction…" rows="3"></textarea>
</div>

<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                    Skills or capabilities you’d gain
                  </label>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70" placeholder="e.g., Sales, communication, negotiation, resilience, leadership…" rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                    Relationships, opportunities, or experiences
                  </label>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70" placeholder="e.g., New collaborators, mentors, audience, portfolio pieces, stories, perspectives…" rows="3"></textarea>
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                  How might this change the way you see yourself?
                </label>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500/70" placeholder="e.g., I prove to myself that I can take calculated risks, act despite fear, and design my own path…" rows="3"></textarea>
</div>

<div className="mt-1 flex items-start gap-2 text-[11px] text-neutral-500">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 mt-0.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p>
                  Don’t censor yourself. Even “small” benefits compound over years. List as many as you can.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4">

<div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden">

<button className="w-full flex px-4 sm:px-6 pt-4 pr-4 pb-3 pl-4 gap-x-3 gap-y-3 items-start justify-between border-b border-neutral-200 hover:bg-neutral-50 transition-colors" data-accordion-trigger="step3" type="button">
<div className="">
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 mb-1">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-[10px] tracking-tight text-neutral-700">3</span>
<span className="tracking-[0.16em] uppercase">Define the cost of inaction</span>
</div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                If I avoid this action, what will it cost me?
              </h2>
<p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Consider emotional, financial, physical, and relational costs over different time horizons.
              </p>
</div>
<div className="flex flex-col items-end gap-1 text-right">
<span className="hidden sm:inline text-[10px] font-medium text-neutral-400 uppercase tracking-[0.18em]">Timebox</span>
<span className="hidden sm:inline text-xs text-neutral-500">10–15 min</span>
<span className="inline-flex sm:mt-1 h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-neutral-500">
<svg className="w-3.5 h-3.5 transition-transform duration-150" data-accordion-icon="step3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</div>
</button>

<div className="max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-200 ease-out" data-accordion-content="step3">
<div className="px-4 sm:px-6 py-4 space-y-4">

<div className="space-y-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-300 bg-neutral-50 text-[10px] font-medium text-neutral-700 tracking-tight">
                      3
                    </span>
<span className="text-xs font-medium text-neutral-700 tracking-tight">
                      3–6 months: If I do nothing, what might this cost me?
                    </span>
</div>
</div>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/70 focus:border-rose-500/70" placeholder="e.g., Continued frustration at work, missed learning window, declining motivation, growing sense of regret…" rows="3"></textarea>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-300 bg-neutral-50 text-[10px] font-medium text-neutral-700 tracking-tight">
                    12
                  </span>
<span className="text-xs font-medium text-neutral-700 tracking-tight">
                    12 months: How does inaction compound over a year?
                  </span>
</div>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/70 focus:border-rose-500/70" placeholder="e.g., Stagnant income, weaker sense of agency, burnout, narrowed options, strain on relationships…" rows="3"></textarea>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-300 bg-neutral-50 text-[10px] font-medium text-neutral-700 tracking-tight">
                    36+
                  </span>
<span className="text-xs font-medium text-neutral-700 tracking-tight">
                    3+ years: Who might you become if nothing changes?
                  </span>
</div>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/70 focus:border-rose-500/70" placeholder="e.g., More risk-averse, resentful, disconnected from your own goals, identity built around avoiding discomfort…" rows="3"></textarea>
</div>

<div className="mt-1 flex items-start gap-2 text-[11px] text-neutral-500">
<svg className="lucide lucide-clock w-3.5 h-3.5 mt-0.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<p className="">
                  Let this feel uncomfortable. Often, the long-term cost of inaction is far greater than the worst-case scenario.
                </p>
</div>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden">

<button className="w-full px-4 sm:px-6 pt-4 pb-3 border-b border-neutral-200 flex items-center justify-between gap-3 hover:bg-neutral-50 transition-colors" data-accordion-trigger="summary" type="button">
<div>
<h2 className="text-sm font-semibold tracking-tight text-neutral-900">
                Snapshot: What will you do in the next 24–72 hours?
              </h2>
<p className="mt-0.5 text-xs text-neutral-500">
                Translate insights into one clear, reversible experiment.
              </p>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-neutral-500">
<svg className="w-3.5 h-3.5 transition-transform duration-150" data-accordion-icon="summary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</button>

<div className="max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-200 ease-out" data-accordion-content="summary">
<div className="px-4 sm:px-6 py-4 space-y-4">
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                  One small, concrete step you will take
                </label>
<textarea className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="e.g., Email my manager to request a meeting about a 3-month break; schedule a call with someone who has done this before…" rows="2"></textarea>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                    When will you do it?
                  </label>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="e.g., Tomorrow at 10:00, before lunch" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5 tracking-tight">
                    How will you make it easy to start?
                  </label>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="e.g., Draft email tonight; block 30 minutes on my calendar…" type="text"/>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-neutral-200">
<div className="flex items-center gap-2 text-[11px] text-neutral-500">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>
                    Decision rule: If the <span className="text-neutral-800">benefits + learning</span> outweigh the
                    <span className="text-neutral-800">worst realistic scenario</span>, commit to your experiment.
                  </span>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Review fears</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700 hover:bg-emerald-100 hover:border-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/80">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Commit</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="text-[11px] text-neutral-500 border border-dashed border-neutral-200 rounded-xl px-3.5 py-3 bg-neutral-50">
<div className="flex gap-2 items-start">
<svg className="lucide lucide-info w-3.5 h-3.5 mt-0.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p>
              Use this worksheet whenever you feel stuck, anxious, or overwhelmed by a decision. The goal isn’t to remove fear, but to see it clearly enough that you can move anyway.
            </p>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
