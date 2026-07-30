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



      // Palette data
      const palette = {
        triggers: [
          { type: 'contact_added', label: 'Contact added to a list', icon: 'user-plus', desc: 'Starts when a contact is added to a list' },
          { type: 'contact_removed', label: 'Contact removed from a list', icon: 'user-minus', desc: 'Starts when a contact is removed from a list' },
          { type: 'contact_filters', label: 'Contact matches custom filters', icon: 'filter', desc: 'Starts when a contact matches filters' },
          { type: 'email_opened', label: 'Email opened', icon: 'mail', desc: 'Starts when an email is opened' },
          { type: 'link_clicked', label: 'Link clicked in an email', icon: 'mouse-pointer-click', desc: 'Starts when a tracked link is clicked' },
          { type: 'unsubscribed', label: 'Unsubscribed from emails', icon: 'ban', desc: 'Starts when a contact unsubscribes' },
          { type: 'replied_email', label: 'Replied to an email', icon: 'reply', desc: 'Starts when a contact replies' },
          { type: 'opp_created', label: 'Opportunity created', icon: 'file-plus', desc: 'Starts when an opportunity is created' },
          { type: 'opp_stage_updated', label: 'Opportunity stage updated', icon: 'shuffle', desc: 'Starts when a stage changes' },
          { type: 'meeting_booked', label: 'Meetings booked', icon: 'calendar-plus', desc: 'Starts on booking' },
          { type: 'meeting_started', label: 'Meetings started', icon: 'play-circle', desc: 'Starts when a meeting starts' },
          { type: 'meeting_cancelled', label: 'Meetings cancelled', icon: 'x-circle', desc: 'Starts when a meeting is cancelled' },
          { type: 'meeting_ended', label: 'Meeting ended', icon: 'stop-circle', desc: 'Starts when a meeting ends' },
          { type: 'calls_finished', label: 'Calls finished', icon: 'phone-outgoing', desc: 'Starts when a call finishes' },
          { type: 'custom_trigger', label: 'Custom Trigger', icon: 'sparkles', desc: 'Starts on your custom event' }
        ],
        rules: [
          { type: 'time_delay', label: 'Time delay', icon: 'timer', desc: 'Pause the flow for a specified time' },
          { type: 'conditional', label: 'Conditional rule', icon: 'git-branch', desc: 'Route based on conditions' },
          { type: 'percentage', label: 'Percentage rule', icon: 'percent', desc: 'Split traffic by percentage' },
          { type: 'wait_event', label: 'Wait until event happens', icon: 'hourglass', desc: 'Pause until an event or timeout' }
        ],
        actions: [
          { type: 'add_to_list', label: 'Add contact to a list', icon: 'list-plus', desc: 'Add contact to selected list' },
          { type: 'remove_from_list', label: 'Remove contact from a list', icon: 'list-x', desc: 'Remove contact from selected list' },
          { type: 'send_email', label: 'Send an email', icon: 'send', desc: 'Send a templated email' },
          { type: 'send_sms', label: 'Send an SMS', icon: 'message-square', desc: 'Send a text message' },
          { type: 'send_whatsapp', label: 'Send a WhatsApp message', icon: 'message-circle', desc: 'Send a WhatsApp message' },
          { type: 'update_opps', label: 'Update opportunities', icon: 'briefcase', desc: 'Update opportunity fields' },
          { type: 'create_opp', label: 'Create an opportunity', icon: 'plus-square', desc: 'Create a new opportunity' },
          { type: 'start_automation', label: 'Start another automation', icon: 'play', desc: 'Trigger another workflow' },
          { type: 'redirect_step', label: 'Redirect to another step', icon: 'arrow-right', desc: 'Skip to another step' }
        ]
      };

      // State
      const state = {
        nodes: [],
        selectedId: null,
        paletteTab: 'triggers',
        inspectorTab: 'configure'
      };

      // Helpers
      const qs = (sel, el=document) => el.querySelector(sel);
      const qsa = (sel, el=document) => Array.from(el.querySelectorAll(sel));
      const uid = (p='n') => p + '_' + Math.random().toString(36).slice(2, 9);
      const showToast = (msg, type='default') => {
        const container = qs('#toasts');
        const el = document.createElement('div');
        el.className = 'px-3 py-2 rounded-md border text-[13px] shadow-lg flex items-center gap-2 ' + (type==='error' ? 'border-red-700/60 bg-red-900/20 text-red-200' : type==='success' ? 'border-emerald-700/60 bg-emerald-900/20 text-emerald-200' : 'border-neutral-800/80 bg-neutral-900/80 text-neutral-200');
        el.innerHTML = `<i data-lucide="${type==='error'?'alert-triangle':type==='success'?'check-circle':'bell'}" class="h-4 w-4"></i><span>${msg}</span>`;
        container.appendChild(el);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
        setTimeout(() => {
          el.classList.add('opacity-0', 'translate-y-1');
          el.style.transition = 'all 200ms ease';
          setTimeout(() => el.remove(), 220);
        }, 2200);
      };

      // Render palette list
      function renderPalette() {
        const list = qs('#paletteList');
        const tab = state.paletteTab;
        const term = (qs('#paletteSearch')?.value || '').trim().toLowerCase();
        list.innerHTML = '';
        (palette[tab] || []).filter(i => i.label.toLowerCase().includes(term) || i.desc.toLowerCase().includes(term)).forEach(item => {
          const card = document.createElement('div');
          card.className = 'palette-item group border border-neutral-800/80 bg-neutral-950/40 hover:bg-neutral-900/60 transition rounded-md p-3 cursor-grab active:cursor-grabbing';
          card.setAttribute('draggable', 'true');
          card.dataset.category = tab === 'triggers' ? 'trigger' : (tab === 'rules' ? 'rule' : 'action');
          card.dataset.type = item.type;
          card.dataset.label = item.label;
          card.innerHTML = `
            <div class="flex items-start gap-3">
              <div class="h-9 w-9 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition">
                <i data-lucide="${item.icon}" class="h-4.5 w-4.5 text-neutral-300"></i>
              </div>
              <div class="flex-1">
                <div class="text-[13px] font-semibold tracking-tight">${item.label}</div>
                <div class="text-[12px] text-neutral-500">${item.desc}</div>
                <div class="mt-2 flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md text-[10px] border border-neutral-800 bg-neutral-900 text-neutral-400">${card.dataset.category}</span>
                  <span class="text-[10px] text-neutral-500">drag to canvas</span>
                </div>
              </div>
            </div>
          `;
          card.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
              category: card.dataset.category,
              type: card.dataset.type,
              label: item.label
            }));
            e.dataTransfer.effectAllowed = 'copy';
          });
          list.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      // Node create
      function createNode({ category, type, label, lane }) {
        return {
          id: uid('node'),
          category,
          type,
          label,
          lane,
          config: {}
        };
      }

      const getNode = (id) => state.nodes.find(n => n.id === id);

      // Render lanes
      function renderLanes() {
        const triggerLane = qs('#lane-trigger-items');
        const rulesLane = qs('#lane-rules-items');
        const actionsLane = qs('#lane-actions-items');
        triggerLane.innerHTML = '';
        rulesLane.innerHTML = '';
        actionsLane.innerHTML = '';

        const triggers = state.nodes.filter(n => n.lane === 'trigger');
        const rules = state.nodes.filter(n => n.lane === 'rules');
        const actions = state.nodes.filter(n => n.lane === 'actions');

        qs('#triggerCount').textContent = `${triggers.length}/1`;
        qs('#rulesCount').textContent = `${rules.length}`;
        qs('#actionsCount').textContent = `${actions.length}`;

        // Guards
        const hasTrigger = triggers.length === 1;
        qs('#rules-guard').classList.toggle('hidden', hasTrigger);
        qs('#actions-guard').classList.toggle('hidden', hasTrigger);

        if (triggers.length) {
          triggers.forEach(n => triggerLane.appendChild(nodeElement(n)));
          qs('#drop-trigger').classList.add('hidden');
        } else {
          qs('#drop-trigger').classList.remove('hidden');
        }

        if (rules.length) {
          qs('#drop-rules').classList.add('hidden');
          rules.forEach(n => rulesLane.appendChild(nodeElement(n)));
        } else {
          qs('#drop-rules').classList.remove('hidden');
        }

        if (actions.length) {
          qs('#drop-actions').classList.add('hidden');
          actions.forEach(n => actionsLane.appendChild(nodeElement(n)));
        } else {
          qs('#drop-actions').classList.remove('hidden');
        }

        updateConnections();
        highlightSelected();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      function nodeIcon(node) {
        const map = {
          // Triggers
          contact_added: 'user-plus',
          contact_removed: 'user-minus',
          contact_filters: 'filter',
          email_opened: 'mail',
          link_clicked: 'mouse-pointer-click',
          unsubscribed: 'ban',
          replied_email: 'reply',
          opp_created: 'file-plus',
          opp_stage_updated: 'shuffle',
          meeting_booked: 'calendar-plus',
          meeting_started: 'play-circle',
          meeting_cancelled: 'x-circle',
          meeting_ended: 'stop-circle',
          calls_finished: 'phone-outgoing',
          custom_trigger: 'sparkles',
          // Rules
          time_delay: 'timer',
          conditional: 'git-branch',
          percentage: 'percent',
          wait_event: 'hourglass',
          // Actions
          add_to_list: 'list-plus',
          remove_from_list: 'list-x',
          send_email: 'send',
          send_sms: 'message-square',
          send_whatsapp: 'message-circle',
          update_opps: 'briefcase',
          create_opp: 'plus-square',
          start_automation: 'play',
          redirect_step: 'arrow-right'
        };
        return map[node.type] || 'box';
      }

      function nodeElement(node) {
        const el = document.createElement('div');
        const ringSelected = state.selectedId === node.id ? 'ring-2 ring-neutral-600' : 'ring-0';
        const parentRule = node.category === 'action' && node.parentRuleId ? getNode(node.parentRuleId) : null;
        el.className = `node-card group relative border border-neutral-800/80 bg-neutral-950/60 hover:bg-neutral-900/60 transition rounded-md p-3 cursor-pointer ${ringSelected}`;
        el.dataset.nodeId = node.id;
        el.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="h-9 w-9 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition">
              <i data-lucide="${nodeIcon(node)}" class="h-4.5 w-4.5 text-neutral-300"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2">
                <div class="text-[13px] font-semibold tracking-tight truncate">${node.label}</div>
                <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button class="btn-duplicate p-1 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/60" title="Duplicate">
                    <i data-lucide="copy" class="h-3.5 w-3.5"></i>
                  </button>
                  <button class="btn-delete p-1 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/60" title="Delete">
                    <i data-lucide="trash-2" class="h-3.5 w-3.5"></i>
                  </button>
                </div>
              </div>
              <div class="mt-0.5 text-[11px] text-neutral-500 capitalize">${node.category}${parentRule ? ` • for rule: ${parentRule.label}` : ''}</div>
              <div class="mt-2">
                <div class="text-[11px] text-neutral-400 line-clamp-2">${nodeSummary(node)}</div>
              </div>
            </div>
          </div>
        `;
        el.addEventListener('click', (e) => {
          if (e.target.closest('.btn-delete') || e.target.closest('.btn-duplicate')) return;
          state.selectedId = node.id;
          buildInspector();
          highlightSelected();
        });
        el.querySelector('.btn-delete').addEventListener('click', (e) => {
          e.stopPropagation();
          deleteNode(node.id);
        });
        el.querySelector('.btn-duplicate').addEventListener('click', (e) => {
          e.stopPropagation();
          duplicateNode(node.id);
        });
        return el;
      }

      function nodeSummary(node) {
        const c = node.config || {};
        switch (node.category) {
          case 'trigger':
            if (node.type === 'contact_added' || node.type === 'contact_removed') return c.list ? `List: ${c.list}` : 'Choose a list';
            if (node.type === 'contact_filters') return c.filter ? `Filter: ${c.filter}` : 'Add filters';
            if (node.type === 'email_opened') return c.template ? `Email: ${c.template}` : 'Select email template';
            if (node.type === 'link_clicked') return c.url ? `URL contains: ${c.url}` : 'Select email and URL';
            if (node.type === 'unsubscribed') return 'On unsubscribe';
            if (node.type === 'replied_email') return c.template ? `Reply to: ${c.template}` : 'Select email template';
            if (node.type === 'opp_created') return c.pipeline ? `Pipeline: ${c.pipeline}` : 'Select pipeline';
            if (node.type === 'opp_stage_updated') return c.stage ? `Stage: ${c.stage}` : 'Select stage';
            if (node.type?.startsWith('meeting_')) return c.meeting_type ? `Type: ${c.meeting_type}` : 'Choose meeting type';
            if (node.type === 'calls_finished') return c.call_outcome ? `Outcome: ${c.call_outcome}` : 'Optional: outcome';
            if (node.type === 'custom_trigger') return c.event ? `Event: ${c.event}` : 'Name your event';
            return 'Configure trigger';
          case 'rule':
            if (node.type === 'time_delay') return c.amount ? `Wait ${c.amount} ${c.unit || 'minutes'}` : 'Set delay';
            if (node.type === 'conditional') return c.condition ? `If ${c.condition}` : 'Set condition';
            if (node.type === 'percentage') return c.split ? `Split: ${c.split}% / ${100 - (parseInt(c.split)||0)}%` : 'Set percentage split';
            if (node.type === 'wait_event') return c.event ? `Wait for ${c.event}, timeout ${c.timeout || '—'}` : 'Choose event';
            return 'Configure rule';
          case 'action':
            if (node.type === 'add_to_list' || node.type === 'remove_from_list') return c.list ? `List: ${c.list}` : 'Choose a list';
            if (node.type === 'send_email') return c.template ? `Email: ${c.template}` : 'Select email template';
            if (node.type === 'send_sms') return c.text ? `${(c.text||'').slice(0,24)}${(c.text||'').length>24?'…':''}` : 'Write message';
            if (node.type === 'send_whatsapp') return c.text ? `${(c.text||'').slice(0,24)}${(c.text||'').length>24?'…':''}` : 'Write message';
            if (node.type === 'update_opps') return c.stage ? `Stage → ${c.stage}` : 'Choose updates';
            if (node.type === 'create_opp') return c.name ? `Opp: ${c.name}` : 'Set opportunity';
            if (node.type === 'start_automation') return c.automation ? `Start: ${c.automation}` : 'Select automation';
            if (node.type === 'redirect_step') return c.step ? `Go to step: ${c.step}` : 'Set step';
            return 'Configure action';
          default:
            return '';
        }
      }

      function deleteNode(id) {
        const node = state.nodes.find(n => n.id === id);
        // If deleting a rule, detach its actions
        if (node?.category === 'rule') {
          state.nodes.forEach(n => {
            if (n.category === 'action' && n.parentRuleId === node.id) {
              delete n.parentRuleId;
            }
          });
        }
        state.nodes = state.nodes.filter(n => n.id !== id);
        if (state.selectedId === id) state.selectedId = null;
        renderLanes();
        if (node?.category === 'trigger') {
          showToast('Trigger removed. Rules and Actions remain but won’t run until a Trigger is added.', 'default');
        } else {
          showToast('Block deleted', 'default');
        }
        buildInspector();
      }

      function duplicateNode(id) {
        const original = state.nodes.find(n => n.id === id);
        if (!original) return;
        if (original.category === 'trigger') {
          showToast('Only one trigger is allowed per workflow.', 'error');
          return;
        }
        const copy = JSON.parse(JSON.stringify(original));
        copy.id = uid('node');
        state.nodes.push(copy);
        renderLanes();
        showToast('Block duplicated', 'success');
      }

      // Drop handlers
      function attachDropzones() {
        qsa('.dropzone').forEach(zone => {
          zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            const lane = zone.dataset.lane;
            const { allowed, reason } = canDropHere(lane);
            if (!allowed) {
              e.dataTransfer.dropEffect = 'none';
              zone.classList.remove('border-neutral-700');
              zone.classList.add('border-red-700/60');
              zone.setAttribute('title', reason || 'Not allowed');
              return;
            }
            zone.classList.add('border-neutral-700');
            zone.classList.remove('border-red-700/60');
            e.dataTransfer.dropEffect = 'copy';
          });
          zone.addEventListener('dragleave', () => {
            zone.classList.remove('border-neutral-700');
            zone.classList.remove('border-red-700/60');
            zone.removeAttribute('title');
          });
          zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('border-neutral-700');
            zone.classList.remove('border-red-700/60');
            zone.removeAttribute('title');
            let data;
            try { data = JSON.parse(e.dataTransfer.getData('text/plain')); } catch {}
            if (!data) return;
            const lane = zone.dataset.lane;
            if (!validateDrop(data, lane)) return;
            const node = createNode({
              category: data.category,
              type: data.type,
              label: data.label,
              lane
            });
            // Enforce only one trigger
            if (lane === 'trigger' && state.nodes.some(n => n.category === 'trigger')) {
              showToast('Only one Trigger is allowed per workflow.', 'error');
              return;
            }
            // Attach action to selected rule if applicable
            if (lane === 'actions' && state.selectedId) {
              const sel = state.nodes.find(n => n.id === state.selectedId);
              if (sel && sel.category === 'rule') {
                node.parentRuleId = sel.id;
              }
            }
            state.nodes.push(node);
            renderLanes();
            state.selectedId = node.id;
            buildInspector();
            showToast(`${capitalize(data.category)} added`, 'success');
          });
        });
      }

      function canDropHere(lane) {
        const hasTrigger = state.nodes.some(n => n.category === 'trigger');
        if ((lane === 'rules' || lane === 'actions') && !hasTrigger) {
          return { allowed: false, reason: 'Add a Trigger first' };
        }
        if (lane === 'trigger' && state.nodes.some(n => n.category === 'trigger')) {
          return { allowed: false, reason: 'Only one Trigger allowed' };
        }
        return { allowed: true };
      }

      function validateDrop(data, lane) {
        const category = data.category;
        if (lane === 'trigger' && category !== 'trigger') {
          showToast('Only Triggers can be dropped here.', 'error'); return false;
        }
        if (lane === 'rules' && category !== 'rule') {
          showToast('Only Rules can be dropped here.', 'error'); return false;
        }
        if (lane === 'actions' && category !== 'action') {
          showToast('Only Actions can be dropped here.', 'error'); return false;
        }
        if ((lane === 'rules' || lane === 'actions') && !state.nodes.some(n => n.category === 'trigger')) {
          showToast('Add a Trigger first.', 'error'); return false;
        }
        return true;
      }

      function capitalize(s){ return (s||'').charAt(0).toUpperCase()+ (s||'').slice(1); }

      // Connections
      function updateConnections() {
        const svg = qs('#connections');
        const scroll = qs('#canvasScroll');
        svg.innerHTML = '';
        const containerRect = scroll.getBoundingClientRect();

        const triggers = state.nodes.filter(n => n.lane === 'trigger');
        const rules = state.nodes.filter(n => n.lane === 'rules');
        const actions = state.nodes.filter(n => n.lane === 'actions');

        const getCenterRight = (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.right - containerRect.left, y: r.top - containerRect.top + r.height / 2 };
        };
        const getCenterLeft = (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.left - containerRect.left, y: r.top - containerRect.top + r.height / 2 };
        };

        const pathBetween = (a, b) => {
          const dx = Math.max(40, Math.abs(b.x - a.x) / 2);
          const c1 = { x: a.x + dx, y: a.y };
          const c2 = { x: b.x - dx, y: b.y };
          return `M ${a.x} ${a.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${b.x} ${b.y}`;
        };

        const addPath = (d) => {
          const p = document.createElementNS('http://www.w3.org/2000/svg','path');
          p.setAttribute('d', d);
          p.setAttribute('fill', 'none');
          p.setAttribute('stroke', 'rgba(120,120,120,0.6)');
          p.setAttribute('stroke-width', '1.5');
          p.setAttribute('class','transition-all');
          svg.appendChild(p);
        };

        if (!triggers.length) return;
        const tEl = qs(`[data-node-id="${triggers[0].id}"]`);
        if (!tEl) return;

        // Trigger -> each Rule (fan-out)
        const tRight = getCenterRight(tEl);
        const ruleEls = [];
        rules.forEach(r => {
          const rEl = qs(`[data-node-id="${r.id}"]`);
          if (!rEl) return;
          ruleEls.push({ node: r, el: rEl });
          addPath(pathBetween(tRight, getCenterLeft(rEl)));
        });

        const lastRuleEl = ruleEls.length ? getCenterRight(ruleEls[ruleEls.length - 1].el) : null;

        // Rule -> attached Actions; otherwise from last Rule or Trigger
        actions.forEach(aNode => {
          const aEl = qs(`[data-node-id="${aNode.id}"]`);
          if (!aEl) return;
          const aLeft = getCenterLeft(aEl);
          if (aNode.parentRuleId) {
            const pr = ruleEls.find(x => x.node.id === aNode.parentRuleId);
            const from = pr ? getCenterRight(pr.el) : (lastRuleEl || tRight);
            addPath(pathBetween(from, aLeft));
          } else {
            const from = lastRuleEl || tRight;
            addPath(pathBetween(from, aLeft));
          }
        });
      }

      window.addEventListener('resize', () => requestAnimationFrame(updateConnections));
      qs('#canvasScroll').addEventListener('scroll', () => requestAnimationFrame(updateConnections));

      // Inspector
      function highlightSelected() {
        qsa('.node-card').forEach(el => {
          el.classList.toggle('ring-2', el.dataset.nodeId === state.selectedId);
          el.classList.toggle('ring-neutral-600', el.dataset.nodeId === state.selectedId);
        });
        qs('#btnDeleteSelected').classList.toggle('hidden', !state.selectedId);
      }

      function buildInspector() {
        const form = qs('#inspectorForm');
        const empty = qs('#inspectorEmpty');
        const meta = qs('#inspectorMeta');
        const selected = state.nodes.find(n => n.id === state.selectedId);

        if (!selected) {
          form.classList.add('hidden');
          meta.classList.add('hidden');
          empty.classList.remove('hidden');
          return;
        }

        empty.classList.add('hidden');
        form.classList.remove('hidden');
        meta.classList.toggle('hidden', state.inspectorTab !== 'meta');
        form.classList.toggle('hidden', state.inspectorTab !== 'configure');

        // Meta
        qs('#metaId').textContent = selected.id;
        qs('#metaCategory').textContent = selected.category;
        qs('#metaType').textContent = selected.type;

        // Build fields
        if (state.inspectorTab !== 'configure') return;

        form.innerHTML = '';
        const addField = (label, inputEl, helper='') => {
          const row = document.createElement('div');
          row.className = 'space-y-1.5';
          row.innerHTML = `<label class="text-[12px] text-neutral-300">${label}</label>`;
          row.appendChild(inputEl);
          if (helper) {
            const h = document.createElement('div');
            h.className = 'text-[11px] text-neutral-500';
            h.textContent = helper;
            row.appendChild(h);
          }
          form.appendChild(row);
        };

        const textInput = (key, placeholder, value='') => {
          const el = document.createElement('input');
          el.type = 'text';
          el.placeholder = placeholder;
          el.value = value || '';
          el.className = 'w-full bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-[13px] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition';
          el.addEventListener('input', () => { selected.config[key] = el.value; renderLanes(); });
          return el;
        };
        const selectInput = (key, options, value='') => {
          const el = document.createElement('select');
          el.className = 'w-full bg-neutral-900 border border-neutral-800 rounded-md px-2.5 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition';
          el.innerHTML = `<option value="">Select...</option>` + options.map(o => `<option value="${o}">${o}</option>`).join('');
          el.value = value || '';
          el.addEventListener('change', () => { selected.config[key] = el.value; renderLanes(); });
          return el;
        };
        const numberInput = (key, placeholder, value='') => {
          const el = document.createElement('input');
          el.type = 'number';
          el.placeholder = placeholder;
          el.value = value || '';
          el.className = 'w-full bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-[13px] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition';
          el.addEventListener('input', () => { selected.config[key] = el.value; renderLanes(); });
          return el;
        };
        const textarea = (key, placeholder, value='') => {
          const el = document.createElement('textarea');
          el.placeholder = placeholder;
          el.value = value || '';
          el.rows = 4;
          el.className = 'w-full bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-[13px] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition';
          el.addEventListener('input', () => { selected.config[key] = el.value; renderLanes(); });
          return el;
        };
        const toggle = (key, label) => {
          const wrap = document.createElement('button');
          wrap.type = 'button';
          wrap.className = 'w-full flex items-center justify-between px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 hover:bg-neutral-800/60 transition';
          const on = !!selected.config[key];
          wrap.innerHTML = `<span class="text-[13px]">${label}</span>
            <span class="inline-flex items-center">
              <span class="h-4 w-8 rounded-full ${on?'bg-emerald-500/80':'bg-neutral-700'} relative transition">
                <span class="absolute top-0.5 ${on?'left-[18px]':'left-0.5'} h-3 w-3 bg-white rounded-full transition"></span>
              </span>
            </span>`;
          wrap.addEventListener('click', () => {
            selected.config[key] = !selected.config[key];
            buildInspector(); renderLanes();
          });
          return wrap;
        };

        const selectAttachRule = (value='') => {
          const el = document.createElement('select');
          el.className = 'w-full bg-neutral-900 border border-neutral-800 rounded-md px-2.5 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition';
          const rules = state.nodes.filter(n => n.category === 'rule');
          el.innerHTML = `<option value="">None (after last Rule)</option>` + rules.map(r => `<option value="${r.id}">${r.label}</option>`).join('');
          el.value = value || '';
          el.addEventListener('change', () => {
            selected.parentRuleId = el.value || null;
            renderLanes();
            buildInspector();
          });
          return el;
        };

        // Title
        const titleWrap = document.createElement('div');
        titleWrap.className = 'mb-3';
        titleWrap.innerHTML = `
          <div class="flex items-center gap-2">
            <i data-lucide="${nodeIcon(selected)}" class="h-4.5 w-4.5"></i>
            <div class="text-[14px] tracking-tight font-semibold">${selected.label}</div>
          </div>
        `;
        form.appendChild(titleWrap);

        // Category-specific fields
        if (selected.category === 'trigger') {
          if (selected.type === 'contact_added' || selected.type === 'contact_removed') {
            addField('List', selectInput('list', ['Prospects','Customers','Leads','VIP'], selected.config.list), 'Select the list to monitor');
          } else if (selected.type === 'contact_filters') {
            addField('Filter expression', textarea('filter', 'status=active AND country="US"', selected.config.filter), 'Use simple boolean expressions');
          } else if (selected.type === 'email_opened') {
            addField('Email template', selectInput('template', ['Welcome','Onboarding Step 1','Promo Summer'], selected.config.template), '');
          } else if (selected.type === 'link_clicked') {
            addField('Email template', selectInput('template', ['Newsletter May','Product Update','Promo Summer'], selected.config.template), '');
            addField('URL contains', textInput('url','/pricing or https://...', selected.config.url), '');
          } else if (selected.type === 'replied_email') {
            addField('Email template', selectInput('template', ['Outbound Intro','Demo Follow-up'], selected.config.template), '');
          } else if (selected.type === 'opp_created') {
            addField('Pipeline', selectInput('pipeline', ['Sales','Expansion','Renewals'], selected.config.pipeline), '');
          } else if (selected.type === 'opp_stage_updated') {
            addField('Stage', selectInput('stage', ['Qualified','Proposal','Closed Won','Closed Lost'], selected.config.stage), '');
          } else if (selected.type?.startsWith('meeting_')) {
            addField('Meeting type', selectInput('meeting_type', ['Intro Call','Demo','Success Review','Other'], selected.config.meeting_type), '');
          } else if (selected.type === 'calls_finished') {
            addField('Call outcome', selectInput('call_outcome', ['Connected','Voicemail','No Answer','Bad Number'], selected.config.call_outcome), 'Optional');
          } else if (selected.type === 'custom_trigger') {
            addField('Event name', textInput('event','e.g. billing.invoice_paid', selected.config.event), '');
            addField('Payload key (optional)', textInput('payload_key','e.g. customer_id', selected.config.payload_key), '');
          }
          addField('Throttle identical events', toggle('throttle', 'Prevent duplicate runs within 5 minutes'));
        }

        if (selected.category === 'rule') {
          if (selected.type === 'time_delay') {
            addField('Amount', numberInput('amount','e.g. 15', selected.config.amount), '');
            addField('Unit', selectInput('unit', ['minutes','hours','days'], selected.config.unit || 'minutes'), '');
            addField('Allow weekend processing', toggle('weekends','Process during weekends'));
          } else if (selected.type === 'conditional') {
            addField('Condition', textarea('condition','contact.country == "US" && contact.ltv > 500', selected.config.condition), 'Use simple boolean logic');
            addField('Else continue', toggle('else_continue','If false, continue to next step'));
          } else if (selected.type === 'percentage') {
            addField('Split A (%)', numberInput('split','e.g. 50', selected.config.split), 'B will be 100 - A');
          } else if (selected.type === 'wait_event') {
            addField('Event to wait for', selectInput('event', ['email_opened','link_clicked','meeting_booked','payment_completed'], selected.config.event), '');
            addField('Timeout (minutes)', numberInput('timeout','e.g. 60', selected.config.timeout), 'Flow continues after timeout');
          }
        }

        if (selected.category === 'action') {
          if (selected.type === 'add_to_list' || selected.type === 'remove_from_list') {
            addField('List', selectInput('list', ['Prospects','Customers','Leads','VIP'], selected.config.list), '');
          } else if (selected.type === 'send_email') {
            addField('Email template', selectInput('template', ['Welcome','Onboarding Step 1','Promo Summer'], selected.config.template), '');
            addField('Track opens', toggle('track_opens','Enable open tracking'));
          } else if (selected.type === 'send_sms') {
            addField('Message', textarea('text','Hi {{first_name}}, quick update...', selected.config.text), '160 chars segments');
          } else if (selected.type === 'send_whatsapp') {
            addField('Message', textarea('text','Hello {{first_name}}, your update is here…', selected.config.text), 'Template must be pre-approved');
          } else if (selected.type === 'update_opps') {
            addField('Pipeline', selectInput('pipeline', ['Sales','Expansion','Renewals'], selected.config.pipeline), '');
            addField('Stage', selectInput('stage', ['Qualified','Proposal','Closed Won','Closed Lost'], selected.config.stage), '');
            addField('Value (optional)', numberInput('value','e.g. 12000', selected.config.value), '');
          } else if (selected.type === 'create_opp') {
            addField('Name', textInput('name','e.g. ACME - Enterprise', selected.config.name), '');
            addField('Pipeline', selectInput('pipeline', ['Sales','Expansion','Renewals'], selected.config.pipeline), '');
            addField('Stage', selectInput('stage', ['Qualified','Proposal','Closed Won','Closed Lost'], selected.config.stage), '');
            addField('Value', numberInput('value','e.g. 15000', selected.config.value), '');
          } else if (selected.type === 'start_automation') {
            addField('Automation', selectInput('automation', ['Welcome Journey','Re-Engagement','Post-Demo'], selected.config.automation), '');
          } else if (selected.type === 'redirect_step') {
            addField('Step ID', textInput('step','e.g. step_2', selected.config.step), 'Must be a valid step in this workflow');
          }
          // Attachment to Rule
          addField('Attach to Rule', selectAttachRule(selected.parentRuleId || ''), 'Actions connect from this Rule; choose None to follow the last Rule');
        }

        // Actions row
        const actions = document.createElement('div');
        actions.className = 'pt-2 mt-2 border-t border-neutral-800/80 flex items-center justify-end gap-2';
        actions.innerHTML = `
          <button type="button" id="btnTestNode" class="px-3 py-2 text-[12px] rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/60 transition flex items-center gap-1.5">
            <i data-lucide="play-circle" class="h-4 w-4"></i> Test
          </button>
          <button type="button" id="btnSaveNode" class="px-3 py-2 text-[12px] rounded-md border border-neutral-700 bg-neutral-100 text-neutral-900 hover:bg-white transition font-semibold">
            Save Block
          </button>
        `;
        form.appendChild(actions);

        qs('#btnSaveNode').addEventListener('click', () => {
          showToast('Block saved', 'success');
        });
        qs('#btnTestNode').addEventListener('click', () => {
          showToast('Test executed (simulated)', 'default');
        });

        // Update icons inside form
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      // Tabs and controls
      function initTabs() {
        qsa('.palette-tab').forEach(b => {
          b.addEventListener('click', () => {
            qsa('.palette-tab').forEach(x => {
              x.classList.remove('bg-neutral-100','text-neutral-900','border-neutral-700','font-semibold');
              x.classList.add('bg-neutral-900');
            });
            b.classList.add('bg-neutral-100','text-neutral-900','border-neutral-700','font-semibold');
            state.paletteTab = b.dataset.paletteTab;
            renderPalette();
          });
        });

        qsa('.inspector-tab').forEach(b => {
          b.addEventListener('click', () => {
            qsa('.inspector-tab').forEach(x => {
              x.classList.remove('bg-neutral-100','text-neutral-900','border-neutral-700','font-semibold');
              x.classList.add('bg-neutral-900');
            });
            b.classList.add('bg-neutral-100','text-neutral-900','border-neutral-700','font-semibold');
            state.inspectorTab = b.dataset.inspectorTab;
            buildInspector();
          });
        });

        const delBtn = qs('#btnDeleteSelected');
        delBtn.addEventListener('click', () => {
          if (state.selectedId) deleteNode(state.selectedId);
        });

        const paletteSearch = qs('#paletteSearch');
        if (paletteSearch) {
          paletteSearch.addEventListener('input', renderPalette);
        }
      }

      // Minimal initialization so palette renders on load
      document.addEventListener('DOMContentLoaded', () => {
        initTabs();
        renderPalette();
        attachDropzones();
        renderLanes();
        buildInspector();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
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
      

<header className="w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur sticky top-0 z-50">
<div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-3 flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-neutral-200 text-[13px] font-semibold tracking-tight">CF</span>
</div>
<div className="h-8 w-px bg-neutral-800/80"></div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold tracking-tight">CRM Flow</span>
<span className="text-[11px] text-neutral-400">Workflow Automation</span>
</div>
</div>
<div className="ml-4 flex-1 max-w-xl hidden md:flex">
<div className="relative w-full">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="w-full bg-neutral-900/70 border border-neutral-800 rounded-md pl-9 pr-3 py-2 text-[13px] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition" id="globalSearch" placeholder="Search workflows, triggers, actions..." type="text" />
</div>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="px-3.5 py-2 text-[13px] rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/70 hover:border-neutral-700 transition flex items-center gap-1.5" id="btnValidate">
<i className="h-4 w-4" data-lucide="shield-check"></i>
            Validate
          </button>
<button className="px-3.5 py-2 text-[13px] rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/70 hover:border-neutral-700 transition flex items-center gap-1.5" id="btnPreview">
<i className="h-4 w-4" data-lucide="eye"></i>
            Preview
          </button>
<button className="px-3.5 py-2 text-[13px] rounded-md border border-neutral-700 bg-neutral-100 text-neutral-900 hover:bg-white transition font-semibold" id="btnSave">
            Save
          </button>
</div>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-[300px] shrink-0 border-r border-neutral-800/80 bg-neutral-950/70 backdrop-blur hidden lg:flex flex-col">
<div className="p-4 border-b border-neutral-800/80">
<h2 className="text-[17px] tracking-tight font-semibold">Blocks</h2>
<p className="text-[12px] text-neutral-500 mt-0.5">Drag to the canvas to build your automation</p>
<div className="mt-3 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-md pl-9 pr-3 py-2 text-[13px] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700/80 focus:border-neutral-700 transition" id="paletteSearch" placeholder="Search blocks" />
</div>
<div className="mt-3 flex gap-1">
<button className="palette-tab active px-3 py-1.5 rounded-md text-[12px] bg-neutral-100 text-neutral-900 border border-neutral-700 font-semibold" data-palette-tab="triggers">Triggers</button>
<button className="palette-tab px-3 py-1.5 rounded-md text-[12px] bg-neutral-900 border border-neutral-800 hover:bg-neutral-800/60 transition" data-palette-tab="rules">Rules</button>
<button className="palette-tab px-3 py-1.5 rounded-md text-[12px] bg-neutral-900 border border-neutral-800 hover:bg-neutral-800/60 transition" data-palette-tab="actions">Actions</button>
</div>
</div>
<div className="flex-1 overflow-auto p-3 space-y-2" id="paletteList">

</div>
</aside>

<section className="flex-1 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: `radial-gradient(80% 60% at 50% 0%, rgba(59,59,59,0.2), rgba(0,0,0,0) 60%)`}}></div>
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: `24px 24px`}}></div>
<div className="relative h-full flex flex-col">
<div className="px-4 lg:px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur z-10">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="workflow"></i>
<h1 className="text-[20px] md:text-[22px] tracking-tight font-semibold">New Automation</h1>
</div>
<div className="h-6 w-px bg-neutral-800/80"></div>
<div className="flex items-center gap-2 text-[12px] text-neutral-500">
<i className="h-4 w-4" data-lucide="info"></i>
                Start by dragging a Trigger to the canvas
              </div>
</div>
</div>
<div className="flex-1 overflow-auto relative" id="canvasScroll">

<svg className="absolute inset-0 pointer-events-none" height="100%" id="connections" width="100%"></svg>

<div className="min-w-[1000px] 2xl:min-w-[1200px] px-4 lg:px-6 py-8 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="rounded-lg border border-neutral-800/80 bg-neutral-950/40" id="lane-trigger">
<div className="px-4 py-3 border-b border-neutral-800/80 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-amber-400" data-lucide="zap"></i>
<h3 className="text-[15px] tracking-tight font-semibold">Trigger</h3>
</div>
<span className="text-[11px] text-neutral-500" id="triggerCount">0/1</span>
</div>
<div className="p-4">
<div className="dropzone group relative flex items-center justify-center border-2 border-dashed rounded-md border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition min-h-[160px]" data-lane="trigger" id="drop-trigger">
<div className="text-center pointer-events-none">
<i className="mx-auto h-6 w-6 text-neutral-500" data-lucide="cursor-click"></i>
<p className="mt-2 text-[13px] text-neutral-400">Drag a Trigger here</p>
<p className="text-[11px] text-neutral-500">Only one trigger per workflow</p>
</div>
</div>
<div className="mt-3 space-y-2" id="lane-trigger-items"></div>
</div>
</div>

<div className="rounded-lg border border-neutral-800/80 bg-neutral-950/40 relative" id="lane-rules">
<div className="px-4 py-3 border-b border-neutral-800/80 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-300" data-lucide="git-merge"></i>
<h3 className="text-[15px] tracking-tight font-semibold">Rules</h3>
</div>
<span className="text-[11px] text-neutral-500" id="rulesCount">0</span>
</div>
<div className="p-4">
<div className="relative">
<div className="absolute inset-0 rounded-md bg-neutral-950/70 border border-neutral-800/80 flex items-center justify-center hidden" id="rules-guard">
<div className="text-center">
<i className="mx-auto h-5 w-5 text-neutral-500" data-lucide="lock"></i>
<p className="mt-1 text-[12px] text-neutral-400">Add a Trigger first</p>
</div>
</div>
<div className="dropzone min-h-[160px] group relative flex items-center justify-center border-2 border-dashed rounded-md border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition" data-lane="rules" id="drop-rules">
<div className="text-center pointer-events-none">
<i className="mx-auto h-6 w-6 text-neutral-500" data-lucide="plus"></i>
<p className="mt-2 text-[13px] text-neutral-400">Drag Rules here</p>
<p className="text-[11px] text-neutral-500">Time delays, conditions, percentages, waits</p>
</div>
</div>
<div className="mt-3 space-y-2" id="lane-rules-items"></div>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-800/80 bg-neutral-950/40 relative" id="lane-actions">
<div className="px-4 py-3 border-b border-neutral-800/80 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="workflow"></i>
<h3 className="text-[15px] tracking-tight font-semibold">Actions</h3>
</div>
<span className="text-[11px] text-neutral-500" id="actionsCount">0</span>
</div>
<div className="p-4">
<div className="relative">
<div className="absolute inset-0 rounded-md bg-neutral-950/70 border border-neutral-800/80 flex items-center justify-center hidden" id="actions-guard">
<div className="text-center">
<i className="mx-auto h-5 w-5 text-neutral-500" data-lucide="lock"></i>
<p className="mt-1 text-[12px] text-neutral-400">Add a Trigger first</p>
</div>
</div>
<div className="dropzone min-h-[160px] group relative flex items-center justify-center border-2 border-dashed rounded-md border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition" data-lane="actions" id="drop-actions">
<div className="text-center pointer-events-none">
<i className="mx-auto h-6 w-6 text-neutral-500" data-lucide="cursor-click"></i>
<p className="mt-2 text-[13px] text-neutral-400">Drag Actions here</p>
<p className="text-[11px] text-neutral-500">Tip: Select a Rule to attach Actions; otherwise they follow the last Rule</p>
</div>
</div>
<div className="mt-3 space-y-2" id="lane-actions-items"></div>
</div>
</div>
</div>
</div>

<div className="mt-8 border border-neutral-800/80 bg-neutral-950/40 rounded-lg p-4 flex items-center gap-3" id="emptyHint">
<i className="h-5 w-5 text-amber-300" data-lucide="lightbulb"></i>
<p className="text-[13px] text-neutral-400">Hint: Place Rules between your Trigger and Actions to refine flow execution.</p>
</div>
</div>
</div>
</div>
</section>

<aside className="w-[360px] shrink-0 border-l border-neutral-800/80 bg-neutral-950/70 backdrop-blur">
<div className="p-4 border-b border-neutral-800/80">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[15px] tracking-tight font-semibold">Inspector</h3>
<p className="text-[12px] text-neutral-500">Configure the selected block</p>
</div>
<button className="px-2.5 py-1.5 rounded-md text-[12px] border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/60 transition hidden items-center gap-1.5" id="btnDeleteSelected">
<i className="h-4 w-4" data-lucide="trash-2"></i>
              Delete
            </button>
</div>
<div className="mt-3 flex gap-1">
<button className="inspector-tab active px-3 py-1.5 rounded-md text-[12px] bg-neutral-100 text-neutral-900 border border-neutral-700 font-semibold" data-inspector-tab="configure">Configure</button>
<button className="inspector-tab px-3 py-1.5 rounded-md text-[12px] bg-neutral-900 border border-neutral-800 hover:bg-neutral-800/60 transition" data-inspector-tab="meta">Meta</button>
</div>
</div>
<div className="p-4 overflow-auto h-[calc(100vh-140px)]" id="inspectorContent">
<div className="text-center p-8 border border-dashed border-neutral-800/80 rounded-lg bg-neutral-950/40" id="inspectorEmpty">
<i className="mx-auto h-8 w-8 text-neutral-600" data-lucide="mouse-pointer-square-dashed"></i>
<p className="mt-2 text-[13px] text-neutral-400">Select a block to edit its settings</p>
</div>
<form className="space-y-3 hidden" id="inspectorForm"></form>
<div className="hidden" id="inspectorMeta">
<div className="text-[12px] text-neutral-400">
<div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
<span>ID</span><span className="text-neutral-300" id="metaId"></span>
</div>
<div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
<span>Category</span><span className="text-neutral-300" id="metaCategory"></span>
</div>
<div className="flex items-center justify-between py-2">
<span>Type</span><span className="text-neutral-300" id="metaType"></span>
</div>
</div>
<div className="mt-4">
<button className="w-full px-3 py-2 text-[13px] rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800/60 transition flex items-center gap-2 justify-center" id="btnExportNode">
<i className="h-4 w-4" data-lucide="download"></i>
                Export Node JSON
              </button>
</div>
</div>
</div>
</aside>
</main>

<div className="fixed top-3 right-3 z-[60] space-y-2" id="toasts"></div>


    </>
  );
}
