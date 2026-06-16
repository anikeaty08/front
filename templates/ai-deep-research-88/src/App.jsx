import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        lucide.createIcons({
          strokeWidth: 1.5
        });
      }

      // Suggestion chips -> fill query
      document.querySelectorAll('.ubik-suggestion').forEach((btn) => {
        btn.addEventListener('click', () => {
          const queryEl = document.getElementById('query');
          if (!queryEl) return;
          queryEl.value = btn.textContent.trim();
          queryEl.dispatchEvent(new Event('input'));
        });
      });

      // Load query from history cards
      document.querySelectorAll('.ubik-load-query').forEach((btn) => {
        btn.addEventListener('click', () => {
          const q = btn.getAttribute('data-query') || '';
          const queryEl = document.getElementById('query');
          if (!queryEl) return;
          queryEl.value = q;
          queryEl.focus();
          queryEl.dispatchEvent(new Event('input'));
        });
      });

      // "Use last successful query" button
      const useLast = document.getElementById('query-from-history');
      if (useLast) {
        useLast.addEventListener('click', () => {
          const firstHistory = document.querySelector('.ubik-load-query');
          if (!firstHistory) return;
          firstHistory.click();
        });
      }

      // Trusted sources: remove + login click
      const trustedContainer = document.getElementById('trusted-domains');

      function attachDomainHandlers() {
        if (!trustedContainer) return;
        trustedContainer.querySelectorAll('.ubik-domain-remove').forEach((btn) => {
          btn.onclick = () => {
            const chip = btn.closest('.ubik-domain-chip');
            if (chip) chip.remove();
          };
        });
        trustedContainer.querySelectorAll('.ubik-domain-login').forEach((btn) => {
          btn.onclick = () => {
            const chip = btn.closest('.ubik-domain-chip');
            const domain = chip ? chip.getAttribute('data-domain') : null;
            if (!domain) return;
            window.open('https://' + domain, '_blank');
          };
        });
      }
      attachDomainHandlers();

      // Add domain with favicon and "login required" by default
      const addDomainBtn = document.getElementById('add-domain');
      const domainInput = document.getElementById('domain');

      function createDomainChip(domain) {
        const chip = document.createElement('div');
        chip.className = 'inline-flex items-center gap-2 px-2 py-1 bg-neutral-100 border border-neutral-800 rounded-md text-xs ubik-domain-chip';
        chip.setAttribute('data-domain', domain);
        chip.innerHTML = `
          <img src="https://www.google.com/s2/favicons?domain=${domain}&sz=32" class="w-3.5 h-3.5 rounded-sm" alt="${domain}">
          <span>${domain}</span>
          <button class="ml-1 inline-flex items-center gap-1 text-[10px] text-amber-600 ubik-domain-login">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>Login required</span>
          </button>
          <button class="ml-1 text-neutral-500 hover:text-neutral-900 ubik-domain-remove">
            <iconify-icon icon="solar:close-circle-linear" class="w-3 h-3" style="stroke-width:1.5"></iconify-icon>
          </button>
        `;
        return chip;
      }

      if (addDomainBtn && domainInput && trustedContainer) {
        addDomainBtn.addEventListener('click', () => {
          const v = domainInput.value.trim();
          if (!v) return;
          const chip = createDomainChip(v);
          trustedContainer.appendChild(chip);
          domainInput.value = '';
          attachDomainHandlers();
        });
      }

      // Browser import (simulated)
      const importBtn = document.getElementById('import-browser-sources');
      if (importBtn && trustedContainer) {
        importBtn.addEventListener('click', () => {
          const imported = ['notion.so', 'drive.google.com'];
          imported.forEach((d) => {
            if (trustedContainer.querySelector('[data-domain="' + d + '"]')) return;
            const chip = createDomainChip(d);
            trustedContainer.appendChild(chip);
          });
          attachDomainHandlers();
        });
      }

      // Plan generation from query
      const queryEl = document.getElementById('query');
      const planTextarea = document.getElementById('plan-textarea');
      const planQueryLabel = document.getElementById('plan-query-label');

      function generatePlanText(q) {
        const safeQ = q || '[your topic]';
        return `1. Clarify decision and scope this research supports for: ${safeQ}
2. Discover and prioritize high-signal material from your trusted sources.
3. Cross-check claims across sources to resolve conflicts.
4. Extract 3–5 key themes with quantitative and qualitative backing.
5. Synthesize a draft report tailored to your target stakeholders.`;
      }

      function updatePlanFromQuery() {
        if (!planTextarea || !queryEl) return;
        const q = (queryEl.value || '').trim();
        if (!q) {
          planTextarea.placeholder = 'Describe what you want to research above to generate a draft plan.';
          planTextarea.value = '';
          if (planQueryLabel) planQueryLabel.textContent = '';
          return;
        }
        planTextarea.value = generatePlanText(q);
        if (planQueryLabel) {
          planQueryLabel.textContent = q;
        }
      }

      if (queryEl) {
        queryEl.addEventListener('input', updatePlanFromQuery);
      }

      // Plan actions: edit, add step, reset
      const editPlanBtn = document.getElementById('edit-plan');
      if (editPlanBtn && planTextarea) {
        editPlanBtn.addEventListener('click', () => {
          planTextarea.focus();
          const len = planTextarea.value.length;
          planTextarea.selectionStart = len;
          planTextarea.selectionEnd = len;
        });
      }

      const addStepBtn = document.getElementById('plan-add-step');
      if (addStepBtn && planTextarea) {
        addStepBtn.addEventListener('click', () => {
          const current = planTextarea.value.trim();
          const lines = current ? current.split('\n') : [];
          const nextIndex = lines.length + 1;
          const extra = (current ? '\n' : '') + `${nextIndex}. Add a validation or pilot step tailored to your environment.`;
          planTextarea.value = current + extra;
        });
      }

      const resetPlanBtn = document.getElementById('plan-reset');
      if (resetPlanBtn && planTextarea && queryEl) {
        resetPlanBtn.addEventListener('click', () => {
          planTextarea.value = generatePlanText(queryEl.value.trim());
        });
      }

      // Step 2 tabs: Plan vs Follow-up (combined section)
      const planTabButton = document.getElementById('plan-tab-button');
      const followupTabButton = document.getElementById('followup-tab-button');
      const planPanel = document.getElementById('plan-panel');
      const followupPanel = document.getElementById('followup-panel');

      function selectPlanTab() {
        if (!planTabButton || !followupTabButton || !planPanel || !followupPanel) return;
        planTabButton.classList.add('bg-neutral-900', 'text-white');
        planTabButton.classList.remove('text-neutral-600');
        followupTabButton.classList.remove('bg-neutral-900', 'text-white');
        followupTabButton.classList.add('text-neutral-600');
        planPanel.classList.remove('hidden');
        followupPanel.classList.add('hidden');
      }

      function selectFollowupTab() {
        if (!planTabButton || !followupTabButton || !planPanel || !followupPanel) return;
        followupTabButton.classList.add('bg-neutral-900', 'text-white');
        followupTabButton.classList.remove('text-neutral-600');
        planTabButton.classList.remove('bg-neutral-900', 'text-white');
        planTabButton.classList.add('text-neutral-600');
        followupPanel.classList.remove('hidden');
        planPanel.classList.add('hidden');
      }

      if (planTabButton) {
        planTabButton.addEventListener('click', selectPlanTab);
      }
      if (followupTabButton) {
        followupTabButton.addEventListener('click', selectFollowupTab);
      }

      // View elements
      const viewConfig = document.getElementById('view-config');
      const viewPlan = document.getElementById('view-plan');
      const viewOutput = document.getElementById('view-output');
      const rightHistory = document.getElementById('right-history');
      const rightContext = document.getElementById('right-context');
      const startBtn = document.getElementById('startBtn');
      const startLabel = document.getElementById('startBtn-label');
      const statusDot = document.getElementById('research-status-dot');
      const statusLabel = document.getElementById('research-status-label');
      const navDeepResearch = document.getElementById('nav-deep-research');

      const planBackToConfig = document.getElementById('plan-back-to-config');
      const planContinueToReport = document.getElementById('plan-continue-to-report');
      const outputBackToPlan = document.getElementById('output-back-to-plan');
      const outputQueryLabel = document.getElementById('output-query-label');
      const outputTitle = document.getElementById('output-title');
      const outputDateLabel = document.getElementById('output-date-label');

      function showConfigView() {
        if (viewConfig) viewConfig.classList.remove('hidden');
        if (viewPlan) viewPlan.classList.add('hidden');
        if (viewOutput) viewOutput.classList.add('hidden');
        if (rightHistory) rightHistory.classList.remove('hidden');
        if (rightContext) rightContext.classList.add('hidden');
        if (statusLabel) statusLabel.textContent = 'Idle';
        if (statusDot) {
          statusDot.classList.remove('bg-purple-500', 'bg-indigo-500', 'bg-emerald-500');
          statusDot.classList.add('bg-neutral-400');
        }
        // Default to Plan tab when coming back
        selectPlanTab();
      }

      function showPlanView() {
        if (viewConfig) viewConfig.classList.add('hidden');
        if (viewPlan) viewPlan.classList.remove('hidden');
        if (viewOutput) viewOutput.classList.add('hidden');
        if (rightHistory) rightHistory.classList.remove('hidden');
        if (rightContext) rightContext.classList.add('hidden');
        if (statusLabel) statusLabel.textContent = 'Plan ready';
        if (statusDot) {
          statusDot.classList.remove('bg-neutral-400', 'bg-emerald-500');
          statusDot.classList.add('bg-indigo-500');
        }
        selectPlanTab();
      }

      function showOutputView() {
        if (viewConfig) viewConfig.classList.add('hidden');
        if (viewPlan) viewPlan.classList.add('hidden');
        if (viewOutput) viewOutput.classList.remove('hidden');
        if (rightHistory) rightHistory.classList.add('hidden');
        if (rightContext) rightContext.classList.remove('hidden');
        if (statusLabel) statusLabel.textContent = 'Report editing';
        if (statusDot) {
          statusDot.classList.remove('bg-neutral-400', 'bg-indigo-500');
          statusDot.classList.add('bg-emerald-500');
        }
      }

      if (navDeepResearch) {
        navDeepResearch.addEventListener('click', () => {
          showConfigView();
        });
      }

      if (planBackToConfig) {
        planBackToConfig.addEventListener('click', () => {
          showConfigView();
        });
      }

      if (planContinueToReport) {
        planContinueToReport.addEventListener('click', () => {
          const q = (queryEl && queryEl.value.trim()) || '';
          if (outputQueryLabel) outputQueryLabel.textContent = q || 'No query specified';
          if (outputTitle) outputTitle.textContent = q || 'Untitled research';
          if (outputDateLabel) {
            const d = new Date();
            outputDateLabel.textContent = d.toISOString().slice(0, 10);
          }
          showOutputView();
        });
      }

      if (outputBackToPlan) {
        outputBackToPlan.addEventListener('click', () => {
          showPlanView();
        });
      }

      // Start button -> Step 2 (plan view), then user can continue to report
      if (startBtn && startLabel && statusDot && statusLabel) {
        startBtn.addEventListener('click', () => {
          if (startBtn.disabled) return;

          startBtn.disabled = true;
          startLabel.textContent = 'Planning research...';
          statusLabel.textContent = 'Planning';
          statusDot.classList.remove('bg-neutral-400', 'bg-emerald-500');
          statusDot.classList.add('bg-indigo-500');

          setTimeout(() => {
            // Simulate plan ready
            startBtn.disabled = false;
            startLabel.textContent = 'Start Deep Research';
            if (queryEl) {
              updatePlanFromQuery();
            }
            showPlanView();
          }, 1200);
        });
      }

      // Chat: simple mock with "add to report"
      const chatHistory = document.getElementById('chat-history');
      const chatInput = document.getElementById('chat-input');
      const chatSend = document.getElementById('chat-send');
      const reportEditor = document.getElementById('report-editor');

      function appendChatMessage(text, role) {
        if (!chatHistory) return;
        const wrapper = document.createElement('div');
        const baseClasses = 'text-xs rounded-md px-2.5 py-2 border';
        if (role === 'user') {
          wrapper.className = baseClasses + ' border-neutral-800 bg-neutral-900 text-white ml-6';
        } else {
          wrapper.className = baseClasses + ' border-neutral-200 bg-neutral-50 mr-6';
        }

        const content = document.createElement('div');
        content.textContent = text;
        wrapper.appendChild(content);

        if (role === 'assistant') {
          const actions = document.createElement('div');
          actions.className = 'mt-1 flex justify-end';
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900';
          btn.innerHTML = '<iconify-icon icon="solar:document-add-linear" class="w-3.5 h-3.5" style="stroke-width:1.5"></iconify-icon><span>Add to report</span>';
          btn.addEventListener('click', () => {
            if (!reportEditor) return;
            const para = document.createElement('p');
            para.className = 'mt-2 text-neutral-800';
            para.textContent = text;
            reportEditor.appendChild(para);
            reportEditor.focus();
          });
          actions.appendChild(btn);
          wrapper.appendChild(actions);
        }

        chatHistory.appendChild(wrapper);
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }

      function sendChat() {
        if (!chatInput || !chatInput.value.trim()) return;
        const text = chatInput.value.trim();
        chatInput.value = '';
        appendChatMessage(text, 'user');

        setTimeout(() => {
          const q = (queryEl && queryEl.value.trim()) || 'your topic';
          const answer = `Here is a refinement based on ${q}: summarize the core evidence into 2–3 concise paragraphs, then explicitly call out open questions and assumptions that should be validated next.`;
          appendChatMessage(answer, 'assistant');
        }, 600);
      }

      if (chatSend) {
        chatSend.addEventListener('click', sendChat);
      }
      if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChat();
          }
        });
      }

      // Ensure initial state
      showConfigView();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full sm:w-64 shrink-0 border-neutral-800 sm:border-r bg-white flex flex-col justify-between px-6 py-6 animate-fade-in" style={{animationDelay: '0.1s', opacity: '0'}}>
<div>
<div className="text-xs font-semibold tracking-widest text-teal-600 mb-8">[UBIK]</div>

<div className="relative mb-8">
<div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 rounded-lg p-4 flex items-start gap-3 text-white hover:shadow-lg transition-shadow duration-300">
<iconify-icon className="w-6 h-6 shrink-0" icon="solar:command-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-sm font-semibold leading-none uppercase tracking-tight">Ask Anything</h3>
<p className="text-xs opacity-80">Command Interface</p>
</div>
</div>
</div>

<nav className="space-y-6">

<button className="w-full text-left group">
<div className="border-b border-neutral-800 pb-4 flex items-start gap-3">
<iconify-icon className="w-6 h-6 shrink-0 group-hover:text-purple-500 transition-colors duration-300" icon="solar:inbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold uppercase group-hover:underline">Inbox</h4>
<p className="text-xs opacity-70">Prioritized Signals</p>
</div>
</div>
</button>

<button className="w-full text-left group">
<div className="border-b border-neutral-800 pb-4 flex items-start gap-3">
<iconify-icon className="w-6 h-6 shrink-0 group-hover:text-indigo-500 transition-colors duration-300" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold uppercase group-hover:underline">People</h4>
<p className="text-xs opacity-70">Relationship Engine</p>
</div>
</div>
</button>

<button className="w-full text-left group" id="nav-deep-research">
<div className="border-b border-purple-500 pb-4 flex items-start gap-3">
<iconify-icon className="w-6 h-6 shrink-0 text-purple-500" icon="solar:brain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold uppercase text-purple-500">Deep Research</h4>
<p className="text-xs opacity-70">Intelligence System</p>
</div>
</div>
</button>
</nav>
</div>

<div className="pt-8 animate-fade-in" style={{animationDelay: '0.5s', opacity: '0'}}>
<div className="w-full h-1 rounded-full bg-neutral-200 overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" style={{width: '78%'}}></div>
</div>
<div className="text-[10px] uppercase tracking-wide mt-2">Cognitive Load: 78%</div>
</div>
</aside>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

<section className="flex-1 overflow-y-auto p-6 sm:p-10 border-r border-neutral-800 animate-fade-in" style={{animationDelay: '0.2s', opacity: '0'}}>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight">Deep Research</h2>
<div className="text-[10px] uppercase tracking-wide border border-neutral-800 rounded-full px-2 py-1 flex items-center gap-1" id="research-status">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400" id="research-status-dot"></span>
<span id="research-status-label">Idle</span>
</div>
</div>

<div className="space-y-8" id="view-config">

<div className="border border-neutral-800 rounded-lg p-4 mb-0 space-y-6">

<div className="mb-2">
<div className="flex items-center justify-between mb-2">
<label className="text-xs uppercase tracking-wide font-semibold" htmlFor="query">Research Query</label>
<button className="text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900" id="query-from-history" type="button">
                Use last successful query
              </button>
</div>
<textarea className="w-full resize-none bg-transparent border border-neutral-800 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-1" id="query" placeholder="What do you want to research? Be specific about your objectives..." rows="3"></textarea>
<p className="text text-neutral-500">Be specific about scope, context, and objectives.</p>
</div>

<div>
<div className="text-xs uppercase tracking-wide font-semibold mb-3">Suggestions</div>
<div className="flex flex-wrap gap-2">
<button className="ubik-suggestion px-3 py-1 border border-neutral-800 hover:bg-neutral-100 rounded-full text-xs transition-colors duration-200">
                Competitor analysis in fintech
              </button>
<button className="ubik-suggestion px-3 py-1 border border-neutral-800 hover:bg-neutral-100 rounded-full text-xs transition-colors duration-200">
                Market size for AI tools
              </button>
<button className="ubik-suggestion px-3 py-1 border border-neutral-800 hover:bg-neutral-100 rounded-full text-xs transition-colors duration-200">
                Enterprise pricing trends
              </button>
<button className="ubik-suggestion px-3 py-1 border border-neutral-800 hover:bg-neutral-100 rounded-full text-xs transition-colors duration-200">
                GDPR compliance requirements
              </button>
</div>
</div>

<div className="border border-dashed border-neutral-700 rounded-md p-3 bg-neutral-50/60">
<div className="flex items-start gap-2">
<iconify-icon className="w-4 h-4 mt-[2px] text-neutral-500" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs text-neutral-700">
                I’ll first generate a structured research plan from your query, then run it across your trusted sources and show a live plan you can edit or follow up on.
              </p>
</div>
</div>
</div>

<div className="mb-2">
<div className="flex items-center justify-between mb-2">
<label className="text-xs uppercase tracking-wide font-semibold" htmlFor="domain">Trusted Sources</label>
<button className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900" id="import-browser-sources" type="button">
<iconify-icon className="w-3.5 h-3.5" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Import from browser</span>
</button>
</div>
<div className="flex">
<input className="flex-1 bg-transparent border border-neutral-800 rounded-l-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" id="domain" placeholder="example.com" type="text"/>
<button className="px-4 bg-neutral-100 hover:bg-neutral-200 border border-neutral-800 border-l-0 rounded-r-md flex items-center justify-center transition-colors duration-200" id="add-domain" type="button">
<iconify-icon className="w-4 h-4" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<p className="text-[10px] text-neutral-500 mt-1">We’ll check if you’re logged in to each source and prompt you if access is required.</p>
<div className="mt-3 flex gap-2 flex-wrap" id="trusted-domains">

<div className="inline-flex items-center gap-2 px-2 py-1 bg-neutral-100 border border-neutral-800 rounded-md text-xs ubik-domain-chip" data-domain="gartner.com">
<img alt="gartner.com" className="w-3.5 h-3.5 rounded-sm" src="https://www.google.com/s2/favicons?domain=gartner.com&amp;sz=32"/>
<span>gartner.com</span>
<span className="ml-1 inline-flex items-center gap-1 text-[10px] text-emerald-600">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Connected</span>
</span>
<button className="ml-1 text-neutral-500 hover:text-neutral-900 ubik-domain-remove">
<iconify-icon className="w-3 h-3" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 bg-neutral-100 border border-neutral-800 rounded-md text-xs ubik-domain-chip" data-domain="mckinsey.com">
<img alt="mckinsey.com" className="w-3.5 h-3.5 rounded-sm" src="https://www.google.com/s2/favicons?domain=mckinsey.com&amp;sz=32"/>
<span>mckinsey.com</span>
<button className="ml-1 inline-flex items-center gap-1 text-[10px] text-amber-600 ubik-domain-login">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span>Login required</span>
</button>
<button className="ml-1 text-neutral-500 hover:text-neutral-900 ubik-domain-remove">
<iconify-icon className="w-3 h-3" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 bg-neutral-100 border border-neutral-800 rounded-md text-xs ubik-domain-chip" data-domain="forrester.com">
<img alt="forrester.com" className="w-3.5 h-3.5 rounded-sm" src="https://www.google.com/s2/favicons?domain=forrester.com&amp;sz=32"/>
<span>forrester.com</span>
<button className="ml-1 inline-flex items-center gap-1 text-[10px] text-amber-600 ubik-domain-login">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span>Login required</span>
</button>
<button className="ml-1 text-neutral-500 hover:text-neutral-900 ubik-domain-remove">
<iconify-icon className="w-3 h-3" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 hover:from-purple-600 hover:via-indigo-600 hover:to-cyan-500 text-white rounded-lg py-3 px-4 text-sm font-semibold uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in disabled:opacity-60 disabled:cursor-not-allowed" id="startBtn" style={{animationDelay: '0.4s', opacity: '0'}}>
<iconify-icon className="w-5 h-5" icon="solar:brain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span id="startBtn-label">Start Deep Research</span>
</button>
</div>

<div className="hidden space-y-4" id="view-plan">
<div className="flex items-center justify-between mb-2">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wide font-semibold text-purple-600">Step 2 · Plan &amp; Follow-up</span>
<span className="text-[10px] text-neutral-500" id="plan-query-label"></span>
</div>
<div className="flex items-center gap-3">

<div className="inline-flex items-center border border-neutral-800 rounded-full text-[10px] uppercase tracking-wide overflow-hidden">
<button className="px-2 py-1 bg-neutral-900 text-white" id="plan-tab-button" type="button">
                Plan
              </button>
<button className="px-2 py-1 text-neutral-600" id="followup-tab-button" type="button">
                Follow-up
              </button>
</div>
<div className="flex items-center gap-2">
<button className="text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900" id="plan-back-to-config" type="button">
                Edit setup
              </button>
<button className="text-[10px] uppercase tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 rounded-full px-3 py-1" id="plan-continue-to-report" type="button">
                Continue to report
              </button>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-lg p-4 space-y-4" id="plan-preview">

<div id="plan-panel">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-purple-500" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs uppercase tracking-wide font-semibold">Draft research plan</span>
</div>
<div className="flex items-center gap-2">
<button className="text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900" id="edit-plan" type="button">
                  Edit plan
                </button>
</div>
</div>
<textarea className="w-full bg-transparent border border-neutral-800 rounded-md p-2 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500" id="plan-textarea" placeholder="Your plan will appear here as soon as you describe what you want to research." rows="8"></textarea>
<div className="mt-2 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1 border border-dashed border-neutral-700 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wide text-neutral-600 hover:border-neutral-900 hover:text-neutral-900" id="plan-add-step" type="button">
<iconify-icon className="w-3.5 h-3.5" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Add step
              </button>
<button className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-neutral-400 hover:text-neutral-700" id="plan-reset" type="button">
<iconify-icon className="w-3.5 h-3.5" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Reset to suggestion
              </button>
</div>
</div>

<div className="hidden" id="followup-panel">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-purple-500" icon="solar:chat-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs uppercase tracking-wide font-semibold">Follow-up questions</span>
</div>
<span className="text-[10px] text-neutral-500">Optional</span>
</div>
<div className="space-y-2">
<textarea className="w-full bg-transparent border border-neutral-800 rounded-md p-2 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500" id="followup-input-plan" placeholder="Write optional follow-up questions to refine this research before generating the report..." rows="3"></textarea>
<p className="text-[10px] text-neutral-500">
                These questions are just for you—they’re not required. You can also ask live follow-ups in Step 3 while editing the report.
              </p>
</div>
</div>
</div>
</div>

<div className="hidden space-y-4" id="view-output">
<div className="flex items-center justify-between mb-2">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wide font-semibold text-purple-600">Step 3 · Report document</span>
<span className="text-[10px] text-neutral-500" id="output-query-label"></span>
</div>
<div className="flex items-center gap-2">
<button className="text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900" id="output-back-to-plan" type="button">
              Back to plan
            </button>
</div>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden bg-white">

<div className="h-28 sm:h-32 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 relative">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(circle at 0% 0%,rgba(255,255,255,0.9),transparent 55%),radial-gradient(circle at 80% 0%,rgba(255,255,255,0.7),transparent 55%)'}}></div>
<div className="relative h-full flex flex-col justify-between px-5 py-4">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wide font-semibold text-white/90">Research Report</span>
<span className="text-[10px] text-white/80" id="output-date-label"></span>
</div>
<div>
<div className="text-sm sm:text-base font-semibold tracking-tight text-white" id="output-title">
                  Untitled research
                </div>
<div className="text-xs text-white/80" id="output-subtitle">
                  Generated from your deep research session
                </div>
</div>
</div>
</div>

<div className="p-5 sm:p-6 text-sm leading-relaxed outline-none min-h-[16rem]" contenteditable="true" id="report-editor">
<p className="text-neutral-500 text-xs mb-3">You can freely edit this document, paste content from elsewhere, and refine wording. Use the contextual intelligence panel on the right for follow-up questions, then pull snippets into this report.</p>
<h1 className="text-base font-semibold tracking-tight mb-2">Overview</h1>
<p className="mb-4 text-neutral-800">
              This is a starting shell for your report. Once deep research has run, you can summarize key insights, structure arguments, and adapt the narrative to your stakeholders.
            </p>
<h2 className="text-sm font-semibold tracking-tight mb-2">Key Sections</h2>
<ul className="list-disc list-inside mb-4 text-neutral-800">
<li>Context and objectives</li>
<li>Methodology and sources consulted</li>
<li>Findings and evidence</li>
<li>Implications, open questions, and next steps</li>
</ul>
<p className="text-neutral-500 text-xs">
              Tip: Use the follow-up chat on the right to dig deeper into any section, then click “Add to report” on individual answers to merge them here.
            </p>
</div>
</div>
</div>
</section>

<section className="w-full lg:w-96 flex-shrink0 overflow-y-auto p-6 sm:p-8 animate-fade-in" id="right-panel" style={{animationDelay: '0.3s', opacity: '0'}}>

<div id="right-history">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold uppercase tracking-tight">Previous Research</h3>
<span className="text-xs text-neutral-500" id="completed-count">2 completed</span>
</div>

<div className="mb-6 border border-neutral-800 rounded-lg p-5 hover:bg-neutral-50 transition-colors duration-300">
<div className="flex justify-between mb-3">
<h4 className="text-sm font-semibold">AI Market Analysis Q4 2024</h4>
<div className="flex">
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-neutral-300" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<p className="text-xs mb-4">Comprehensive analysis of AI automation market showing 25% YoY growth...</p>
<div className="flex text-[10px] justify-between items-center">
<span className="uppercase tracking-wide font-semibold text-purple-500">Detailed Report</span>
<span className="text-neutral-500">2024-01-20</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-1 border border-neutral-800 rounded-md py-2 text-xs font-medium hover:bg-neutral-100 transition-colors duration-200 ubik-load-query" data-query="AI Market Analysis Q4 2024 - impact on SMB automation vendors">
<iconify-icon className="w-4 h-4" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              View
            </button>
<button className="flex items-center justify-center gap-1 border border-neutral-800 rounded-md py-2 text-xs font-medium hover:bg-neutral-100 transition-colors duration-200">
<iconify-icon className="w-4 h-4" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Export
            </button>
</div>
</div>

<div className="mb-6 border border-neutral-800 rounded-lg p-5 hover:bg-neutral-50 transition-colors duration-300">
<div className="flex justify-between mb-3">
<h4 className="text-sm font-semibold">Competitor Technology Assessment</h4>
<div className="flex">
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="w-4 h-4 text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<p className="text-xs mb-4">Technical comparison revealing key differentiators and gaps...</p>
<div className="flex text-[10px] justify-between items-center">
<span className="uppercase tracking-wide font-semibold text-indigo-500">Executive Summary</span>
<span className="text-neutral-500">2024-01-18</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-1 border border-neutral-800 rounded-md py-2 text-xs font-medium hover:bg-neutral-100 transition-colors duration-200 ubik-load-query" data-query="Competitor Technology Assessment for key automation vendors">
<iconify-icon className="w-4 h-4" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              View
            </button>
<button className="flex items-center justify-center gap-1 border border-neutral-800 rounded-md py-2 text-xs font-medium hover:bg-neutral-100 transition-colors duration-200">
<iconify-icon className="w-4 h-4" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Export
            </button>
</div>
</div>

<div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 rounded-lg p-5 text-white hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.6s', opacity: '0'}}>
<div className="flex items-start gap-3">
<iconify-icon className="w-6 h-6 shrink-0" icon="solar:idea-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-sm font-semibold uppercase tracking-tight">Insight Engine</h3>
<p className="text-xs opacity-80">2 connected research patterns</p>
<button className="mt-3 text-xs bg-white/20 hover:bg-white/30 rounded px-3 py-1 transition-colors duration-200">Connect Insights</button>
</div>
</div>
</div>
</div>

<div className="hidden" id="right-context">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold uppercase tracking-tight">Contextual Intelligence</h3>
<span className="text-xs text-neutral-500">Live session</span>
</div>

<div className="mb-4 border border-neutral-800 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-xs uppercase tracking-wide font-semibold">Sources</h4>
<span className="text-[10px] text-neutral-500">Auto-attached</span>
</div>
<ul className="space-y-2 text-xs text-neutral-800" id="context-sources">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Gartner market note (secure session)</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Forrester wave report (requires login)</span>
</li>
</ul>
</div>

<div className="mb-4 border border-neutral-800 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-xs uppercase tracking-wide font-semibold">Agent Worklog</h4>
<button className="text-[10px] uppercase tracking-wide text-neutral-500 hover:text-neutral-900" type="button">Open raw .md</button>
</div>
<div className="text-[11px] font-mono text-neutral-800 space-y-1 max-h-44 overflow-y-auto">
<p>[step-01] Normalized research query and identified 3 core subproblems.</p>
<p>[step-02] Queried trusted sources, prioritized logged-in sessions first.</p>
<p>[step-03] Built comparative table of vendors and key metrics.</p>
<p>[step-04] Merged insights into draft report for editing.</p>
</div>
</div>

<div className="border border-neutral-800 rounded-lg p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h4 className="text-xs uppercase tracking-wide font-semibold">Follow-up Chat</h4>
<span className="text-[10px] text-neutral-500">Deep search</span>
</div>

<div className="space-y-3 max-h-56 overflow-y-auto text-xs text-neutral-800" id="chat-history">


</div>

<div className="border border-neutral-800 rounded-md flex items-center gap-2 px-2 py-1">
<textarea className="flex-1 bg-transparent text-xs resize-none focus:outline-none py-1" id="chat-input" placeholder="Ask a follow-up question about this report..." rows="1"></textarea>
<button className="flex items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white w-7 h-7" id="chat-send" type="button">
<iconify-icon className="w-3.5 h-3.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</div>
<style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    input[type="range"] {
      -webkit-appearance: none;
      height: 4px;
      background: #e5e5e5;
      border-radius: 9999px;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      background: #9333ea;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #9333ea;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
  </style>


    </>
  );
}
